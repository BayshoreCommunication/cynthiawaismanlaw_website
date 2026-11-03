/**
 * Blog data — served from local JSON (a one-time copy of the old WordPress
 * blog). Edit data/blog/posts.json to change or add articles.
 */
import { cacheLife, cacheTag } from "next/cache";
import postsData from "@/data/blog/posts.json";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { POSTS_PER_PAGE, categorySlug, postInCategory } from "@/lib/blogUrls";

export {
  POSTS_PER_PAGE,
  blogListHref,
  categorySlug,
  findCategory,
  type BlogCategory,
} from "@/lib/blogUrls";

interface StoredPost {
  id: number;
  slug: string;
  title: string;
  date: string; // ISO, site-local time
  modified: string;
  author: string;
  category: string;
  categories: string[];
  tags: string[];
  excerpt: string;
  content: string; // cleaned HTML
  featuredImage?: string;
}

export interface BlogPost extends StoredPost {
  isoDate: string;
  date: string; // display date, e.g. "Sep 23, 2026"
}

/** Everything the list page needs, without the heavy article HTML. */
export type BlogPostSummary = Omit<BlogPost, "content">;

export interface BlogCategoryCount {
  name: string;
  /** URL slug, e.g. "estate-planning". Empty for "All". */
  slug: string;
  count: number;
}

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function toBlogPost(p: StoredPost): BlogPost {
  return {
    ...p,
    isoDate: p.date,
    // Stored dates have no timezone; read them as UTC so the day never shifts.
    date: dateFormatter.format(new Date(`${p.date}Z`)),
  };
}

const allPosts: BlogPost[] = (postsData as StoredPost[])
  .map(toBlogPost)
  .sort((a, b) => b.isoDate.localeCompare(a.isoDate));

const postsBySlug = new Map(allPosts.map((p) => [p.slug, p]));

export function getAllPosts(): BlogPost[] {
  return allPosts;
}

export function getAllPostSummaries(): BlogPostSummary[] {
  return allPosts.map(toSummary);
}

export function getPostBySlug(slug: string): BlogPost | null {
  return postsBySlug.get(slug) ?? null;
}

/** Share image for a post: its featured image, or the site default. */
export function getPostImage(post: Pick<BlogPost, "featuredImage">): string {
  return post.featuredImage || DEFAULT_OG_IMAGE;
}

export function getAllPostSlugs(): string[] {
  return allPosts.map((p) => p.slug);
}

/**
 * Category counts computed from the given posts, so the badges always
 * match the articles actually shown. First entry is "All".
 */
export function computeCategoryCounts(
  posts: Pick<BlogPost, "category" | "categories">[]
): BlogCategoryCount[] {
  const countMap: Record<string, number> = {};

  posts.forEach((post) => {
    const cats = post.categories.length > 0 ? post.categories : [post.category];
    cats.forEach((c) => {
      const name = c.trim();
      if (name && name.toLowerCase() !== "uncategorized") {
        countMap[name] = (countMap[name] || 0) + 1;
      }
    });
  });

  const sorted = Object.entries(countMap)
    .map(([name, count]) => ({ name, slug: categorySlug(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return [{ name: "All", slug: "", count: posts.length }, ...sorted];
}

function toSummary({ content, ...summary }: BlogPost): BlogPostSummary {
  void content;
  return summary;
}

/**
 * One page of the blog listing, filtered on the server. Only that page's
 * posts are returned. Cached for an hour (like ISR revalidate = 3600).
 */
export async function getBlogListing({
  categoryName,
  q,
  page,
}: {
  categoryName?: string;
  q?: string;
  page: number;
}) {
  "use cache";
  cacheLife("hours");
  cacheTag("blog");

  const query = q?.toLowerCase();
  const matching = allPosts.filter(
    (post) =>
      (!categoryName || postInCategory(post, categoryName)) &&
      (!query ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query))
  );

  const start = (page - 1) * POSTS_PER_PAGE;
  return {
    posts: matching.slice(start, start + POSTS_PER_PAGE).map(toSummary),
    total: matching.length,
    totalPages: Math.ceil(matching.length / POSTS_PER_PAGE),
  };
}

/** Sidebar data: category counts and the 5 newest posts. Cached for an hour. */
export async function getBlogSidebarData() {
  "use cache";
  cacheLife("hours");
  cacheTag("blog");

  return {
    categories: computeCategoryCounts(allPosts),
    recentPosts: allPosts.slice(0, 5).map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      date: p.date,
      category: p.category,
    })),
  };
}
