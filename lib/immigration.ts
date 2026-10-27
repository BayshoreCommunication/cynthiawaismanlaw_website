import pagesData from "./immigrationPages.json";
import { decodeHtmlEntities } from "./wordpress";

export interface ImmigrationPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date?: string;
  modified?: string;
}

const WP_API_BASE = "https://cynthiawaismanlaw.com/wp-json/wp/v2";

/**
 * Strips top-level h1 from content if present, as layout provides its own h1
 */
function cleanContentHtml(html: string): string {
  if (!html) return "";

  // Remove leading <h1>...</h1> tag
  let cleaned = html.replace(/^\s*<h1[^>]*>[\s\S]*?<\/h1>/i, "");

  // Replace WordPress shortcodes like [nap_phone id="..."]
  cleaned = cleaned.replace(
    /\[nap_phone[^\]]*\]/gi,
    '<a href="tel:+18132796180" class="text-[#0056b3] font-semibold hover:text-[#003d80] underline">+1 (813) 279-6180</a>'
  );

  return cleaned.trim();
}

/**
 * Returns list of all available immigration subpage slugs
 */
export function getAllImmigrationSlugs(): string[] {
  return pagesData.map((p) => p.slug);
}

/**
 * Fetch an immigration subpage by slug with fallback
 */
export async function getImmigrationPage(
  slug: string
): Promise<ImmigrationPage | null> {
  // 1. Try to fetch live from WordPress API
  try {
    const url = new URL(`${WP_API_BASE}/pages`);
    url.searchParams.set("slug", slug);

    const res = await fetch(url.toString(), {
      next: { revalidate: 3600 },
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data: any[] = await res.json();
      if (data && data.length > 0) {
        const item = data[0];
        return {
          id: item.id,
          slug: item.slug,
          title: decodeHtmlEntities(item.title?.rendered || slug),
          content: cleanContentHtml(item.content?.rendered || ""),
          excerpt: decodeHtmlEntities(
            (item.excerpt?.rendered || "").replace(/<[^>]+>/g, " ").trim()
          ),
          date: item.date,
          modified: item.modified,
        };
      }
    }
  } catch (err) {
    console.warn(`Error fetching live WP page for slug "${slug}":`, err);
  }

  // 2. Fallback to bundled data
  const fallback = pagesData.find((p) => p.slug === slug);
  if (!fallback) return null;

  return {
    id: fallback.id,
    slug: fallback.slug,
    title: decodeHtmlEntities(fallback.title),
    content: cleanContentHtml(fallback.content),
    excerpt: decodeHtmlEntities(
      (fallback.excerpt || "").replace(/<[^>]+>/g, " ").trim()
    ),
    date: fallback.date,
    modified: fallback.modified,
  };
}
