import { blogPosts as fallbackPosts, blogCategories as fallbackCategories } from "@/components/blog/blogData";

const WP_API_BASE = "https://cynthiawaismanlaw.com/wp-json/wp/v2";

export interface WpPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  isoDate: string;
  author: string;
  category: string;
  categories?: string[];
  categoryId?: number;
  excerpt: string;
  content: string;
  featuredImage?: string;
}

export interface WpCategoryItem {
  id: number;
  name: string;
  slug: string;
  count: number;
}

/**
 * Decodes HTML entities commonly returned by WordPress REST API
 */
export function decodeHtmlEntities(text: string): string {
  if (!text) return "";
  return text
    .replace(/&#8217;/g, "’")
    .replace(/&#8216;/g, "‘")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8230;/g, "…")
    .replace(/&hellip;/g, "…")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ")
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    );
}

/**
 * Strips HTML tags and collapses spaces for clean excerpt preview
 */
export function stripHtml(html: string): string {
  if (!html) return "";
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * Formats ISO date to "Sep 23, 2026"
 */
export function formatWpDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

/**
 * Cleans WordPress excerpt by stripping HTML tags, decoding entities,
 * and removing awkward bracketed ellipsis like [...] or […]
 */
export function cleanWpExcerpt(html: string): string {
  if (!html) return "";
  let text = decodeHtmlEntities(stripHtml(html));
  // Remove bracketed ellipsis/dots like [...], […], [&hellip;]
  text = text.replace(/[\.\s]*\[\s*(?:…|\.\.\.|&hellip;)\s*\]/g, "...");
  text = text.replace(/[\.\s]*\[\s*\.\.\.\s*\]/g, "...");
  text = text.replace(/\s*\[[^\]]*\]\s*$/g, "...");
  text = text.replace(/\.{4,}/g, "...");
  return text.trim();
}

/**
 * Transforms raw WordPress API post object into typed WpPost
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformWpPost(item: any): WpPost {
  const terms: any[] = item._embedded?.["wp:term"]?.[0] || [];
  const primaryTerm = terms[0] || null;
  const categoryName = primaryTerm
    ? decodeHtmlEntities(primaryTerm.name)
    : "Legal Updates";
  const categoryId = primaryTerm?.id;
  const allCategories = terms
    .map((t: any) => decodeHtmlEntities(t.name))
    .filter((n: string) => n && n.toLowerCase() !== "uncategorized");
  if (allCategories.length === 0) {
    allCategories.push(categoryName);
  }

  let authorName =
    item._embedded?.author?.[0]?.name || "Cynthia I. Waisman";
  if (
    authorName.toLowerCase() === "cynthiawaisman" ||
    authorName.toLowerCase() === "admin"
  ) {
    authorName = "Cynthia I. Waisman";
  }

  const featuredMedia =
    item._embedded?.["wp:featuredmedia"]?.[0]?.source_url || undefined;

  const rawExcerpt = item.excerpt?.rendered || "";
  const cleanExcerpt = cleanWpExcerpt(rawExcerpt);

  return {
    id: item.id,
    slug: item.slug,
    title: decodeHtmlEntities(item.title?.rendered || "Untitled Article"),
    date: formatWpDate(item.date),
    isoDate: item.date,
    author: decodeHtmlEntities(authorName),
    category: categoryName,
    categories: allCategories,
    categoryId,
    excerpt: cleanExcerpt,
    content: item.content?.rendered || "",
    featuredImage: featuredMedia,
  };
}

/**
 * Fetch latest blog posts from WordPress REST API
 */
export async function getWpPosts(options: {
  page?: number;
  perPage?: number;
  search?: string;
  categoryId?: number;
} = {}): Promise<{ posts: WpPost[]; total: number; totalPages: number }> {
  const { page = 1, perPage = 100, search, categoryId } = options;

  try {
    const url = new URL(`${WP_API_BASE}/posts`);
    url.searchParams.set("_embed", "1");
    url.searchParams.set("per_page", String(perPage));
    url.searchParams.set("page", String(page));
    if (search) url.searchParams.set("search", search);
    if (categoryId) url.searchParams.set("categories", String(categoryId));

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 }, // Cache and revalidate hourly
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      console.warn(`WordPress API returned status ${res.status}`);
      return getFallbackPosts();
    }

    const total = Number(res.headers.get("x-wp-total") || "0");
    const totalPages = Number(res.headers.get("x-wp-totalpages") || "0");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawData: any[] = await res.json();

    const posts = rawData.map(transformWpPost);
    return { posts, total: total || posts.length, totalPages: totalPages || 1 };
  } catch (err) {
    console.error("Error fetching WordPress posts:", err);
    return getFallbackPosts();
  }
}

/**
 * Fetch a single blog post by slug from WordPress REST API
 */
export async function getWpPostBySlug(slug: string): Promise<WpPost | null> {
  try {
    const url = new URL(`${WP_API_BASE}/posts`);
    url.searchParams.set("_embed", "1");
    url.searchParams.set("slug", slug);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return getFallbackPostBySlug(slug);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawData: any[] = await res.json();
    if (!rawData || rawData.length === 0) {
      return getFallbackPostBySlug(slug);
    }

    return transformWpPost(rawData[0]);
  } catch (err) {
    console.error(`Error fetching WordPress post slug "${slug}":`, err);
    return getFallbackPostBySlug(slug);
  }
}

/**
 * Dynamically computes accurate category counts from a given list of posts.
 * This guarantees the count badges in the UI 100% match the actual articles available.
 */
export function computeCategoryCounts(
  posts: WpPost[]
): { name: string; count: number }[] {
  const countMap: Record<string, number> = {};

  posts.forEach((post) => {
    const cats =
      post.categories && post.categories.length > 0
        ? post.categories
        : [post.category || "Legal Updates"];

    cats.forEach((c) => {
      const trimmed = c.trim();
      if (trimmed && trimmed.toLowerCase() !== "uncategorized") {
        countMap[trimmed] = (countMap[trimmed] || 0) + 1;
      }
    });
  });

  const sortedCats = Object.entries(countMap)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return [{ name: "All", count: posts.length }, ...sortedCats];
}

/**
 * Fetch all categories with post counts from WordPress REST API
 */
export async function getWpCategories(): Promise<WpCategoryItem[]> {
  try {
    const url = new URL(`${WP_API_BASE}/categories`);
    url.searchParams.set("per_page", "50");
    url.searchParams.set("hide_empty", "true");

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) {
      return getFallbackCategories();
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const rawCats: any[] = await res.json();
    return rawCats
      .map((c) => ({
        id: c.id,
        name: decodeHtmlEntities(c.name),
        slug: c.slug,
        count: c.count,
      }))
      .filter((c) => c.count > 0 && c.name.toLowerCase() !== "uncategorized")
      .sort((a, b) => b.count - a.count);
  } catch (err) {
    console.error("Error fetching WordPress categories:", err);
    return getFallbackCategories();
  }
}

/**
 * Fallback helpers in case of network unavailability
 */
function getFallbackPosts(): { posts: WpPost[]; total: number; totalPages: number } {
  const posts: WpPost[] = fallbackPosts.map((p) => ({
    id: p.id,
    slug: p.slug,
    title: p.title,
    date: p.date,
    isoDate: new Date().toISOString(),
    author: p.author,
    category: p.category,
    excerpt: p.excerpt,
    content: (p.content || [p.excerpt]).map((c) => `<p>${c}</p>`).join(""),
  }));
  return { posts, total: posts.length, totalPages: 1 };
}

function getFallbackPostBySlug(slug: string): WpPost | null {
  const p = fallbackPosts.find((item) => item.slug === slug);
  if (!p) return null;
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    date: p.date,
    isoDate: new Date().toISOString(),
    author: p.author,
    category: p.category,
    excerpt: p.excerpt,
    content: (p.content || [p.excerpt]).map((c) => `<p>${c}</p>`).join(""),
  };
}

function getFallbackCategories(): WpCategoryItem[] {
  return fallbackCategories
    .filter((c) => c !== "All")
    .map((name, idx) => ({
      id: idx + 1,
      name,
      slug: name.toLowerCase().replace(/\s+/g, "-"),
      count: fallbackPosts.filter((p) => p.category === name).length,
    }));
}

