/**
 * Blog listing URL rules, shared by proxy.ts and app/blog/page.tsx.
 * No Next.js server APIs here, so the proxy can import it.
 */
import postsData from "@/data/blog/posts.json";
import categoriesData from "@/data/blog/categories.json";

export const POSTS_PER_PAGE = 10;

export interface BlogCategory {
  name: string;
  slug: string;
}

const categorySlugs = new Map(
  categoriesData.map((c) => [c.name.toLowerCase(), c.slug])
);

/** URL-safe slug for a category name, using the WordPress slug when known. */
export function categorySlug(name: string): string {
  return (
    categorySlugs.get(name.toLowerCase()) ??
    name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

/** Find a category by slug or (for old links) by display name. */
export function findCategory(param: string): BlogCategory | null {
  const value = param.trim().toLowerCase();
  const match = categoriesData.find(
    (c) => c.slug === value || c.name.toLowerCase() === value
  );
  return match ? { name: match.name, slug: match.slug } : null;
}

/** Does a post belong to a category (by display name)? */
export function postInCategory(
  post: { category: string; categories: string[] },
  name: string
): boolean {
  const cats = post.categories.length > 0 ? post.categories : [post.category];
  return cats.some((c) => c.toLowerCase() === name.toLowerCase());
}

// Number of listing pages per category slug ("" = all posts).
const pageCounts = new Map<string, number>([
  ["", Math.ceil(postsData.length / POSTS_PER_PAGE)],
  ...categoriesData.map((c): [string, number] => [
    c.slug,
    Math.ceil(
      postsData.filter((p) => postInCategory(p, c.name)).length / POSTS_PER_PAGE
    ),
  ]),
]);

/** Total listing pages for a category slug, or all posts when omitted. */
export function blogPageCount(categorySlug?: string): number {
  return pageCounts.get(categorySlug ?? "") ?? 0;
}

/** URL of a blog listing page. Page 1 has no page param. */
export function blogListHref({
  category,
  q,
  page,
}: {
  category?: string;
  q?: string;
  page?: number;
}): string {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (q) params.set("q", q);
  if (page && page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}

type ParamValue = string | string[] | null | undefined;
const firstValue = (v: ParamValue) => (Array.isArray(v) ? v[0] : (v ?? undefined));

export interface BlogListParams {
  page: number;
  category: BlogCategory | null;
  q?: string;
  /** False when the URL should 301 to its clean form (e.g. ?page=1). */
  isClean: boolean;
  /** Clean values to put in the URL; undefined means "remove the param". */
  clean: { page?: string; category?: string; q?: string };
}

/**
 * Read ?page, ?category and ?q from a listing URL.
 * Not clean (→ 301): ?page=1, ?page=0, ?page=abc, ?page=02,
 * ?category=Estate Planning (name instead of slug), unknown category, empty ?q.
 */
export function parseBlogListParams(get: (key: string) => ParamValue): BlogListParams {
  const rawQ = firstValue(get("q"));
  const rawCategory = firstValue(get("category"));
  const rawPage = firstValue(get("page"));

  const q = rawQ?.trim() || undefined;
  const category = rawCategory ? findCategory(rawCategory) : null;
  const page = rawPage && /^\d+$/.test(rawPage) && Number(rawPage) > 0 ? Number(rawPage) : 1;

  const clean = {
    page: page > 1 ? String(page) : undefined,
    category: category?.slug,
    q,
  };

  return {
    page,
    category,
    q,
    isClean: rawPage === clean.page && rawCategory === clean.category && rawQ === clean.q,
    clean,
  };
}
