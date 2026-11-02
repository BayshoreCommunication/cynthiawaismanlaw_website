/**
 * Blog data — served from local JSON (a one-time copy of the old WordPress
 * blog). Edit data/blog/posts.json to change or add articles.
 */
import postsData from "@/data/blog/posts.json";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return allPosts.map(({ content, ...summary }) => summary);
}

export function getPostBySlug(slug: string): BlogPost | null {
  return postsBySlug.get(slug) ?? null;
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
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));

  return [{ name: "All", count: posts.length }, ...sorted];
}
