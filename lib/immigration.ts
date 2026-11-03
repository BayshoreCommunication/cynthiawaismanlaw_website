import pagesData from "./immigrationPages.json";
import { decodeHtmlEntities } from "./html";

export interface ImmigrationPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  date?: string;
  modified?: string;
}

/**
 * Strips top-level h1 from content if present, as layout provides its own h1
 */
function cleanContentHtml(html: string): string {
  if (!html) return "";

  // Remove the first <h1> (it repeats the page title, sometimes after a
  // <style> block), then demote any others so the page keeps one H1.
  let cleaned = html
    .replace(/<h1[^>]*>[\s\S]*?<\/h1>/i, "")
    .replace(/<(\/?)h1(\s[^>]*)?>/gi, "<$1h2$2>");

  // Replace leftover shortcodes like [nap_phone id="..."]
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
 * Get an immigration subpage by slug from the bundled local data
 */
export async function getImmigrationPage(
  slug: string
): Promise<ImmigrationPage | null> {
  const page = pagesData.find((p) => p.slug === slug);
  if (!page) return null;

  return {
    id: page.id,
    slug: page.slug,
    title: decodeHtmlEntities(page.title),
    content: cleanContentHtml(page.content),
    excerpt: decodeHtmlEntities(
      (page.excerpt || "").replace(/<[^>]+>/g, " ").trim()
    ),
    date: page.date,
    modified: page.modified,
  };
}
