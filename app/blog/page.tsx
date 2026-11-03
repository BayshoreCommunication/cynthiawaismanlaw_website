import React from "react";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { pageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogListContent from "@/components/blog/BlogListContent";
import { getBlogListing, getBlogSidebarData } from "@/lib/blog";
import { blogListHref, parseBlogListParams } from "@/lib/blogUrls";

// Rendered on the server per request; the data itself is cached for an hour
// in getBlogListing ("use cache" + cacheLife("hours")). URL clean-up
// (301s) and out-of-range pages (404) are handled first in proxy.ts.
export const instant = false;

type SearchParams = Record<string, string | string[] | undefined>;

interface BlogPageProps {
  searchParams: Promise<SearchParams>;
}

const parse = (sp: SearchParams) => parseBlogListParams((key) => sp[key]);

export async function generateMetadata({ searchParams }: BlogPageProps): Promise<Metadata> {
  const { page, category, q } = parse(await searchParams);

  const base = category ? `${category.name} Articles` : "Blog & Legal Insights";
  const title = page > 1 ? `${base} – Page ${page}` : base;
  const description = category
    ? `Articles on ${category.name} from attorney Cynthia I. Waisman: legal insights for clients in Tampa, Clearwater, and Wesley Chapel, Florida.`
    : "Stay informed with legal insights, USCIS policy updates, and Florida estate planning guidance from attorney Cynthia I. Waisman.";

  const metadata = pageMetadata({
    title,
    description: page > 1 ? `${description} Page ${page}.` : description,
    // Self-referencing: /blog, /blog?page=3, /blog?category=probate&page=2
    path: blogListHref({ category: category?.slug, page }),
  });

  // Search results are for visitors, not for the index.
  if (q) metadata.robots = { index: false, follow: true };
  return metadata;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // proxy.ts already sends real 301/404 responses for these; this is a fallback.
  const { page, category, q, isClean } = parse(await searchParams);
  if (!isClean) permanentRedirect(blogListHref({ category: category?.slug, q, page }));

  const [listing, sidebar] = await Promise.all([
    getBlogListing({ categoryName: category?.name, q, page }),
    getBlogSidebarData(),
  ]);

  // Past the last page → 404 (an empty search result still shows page 1).
  if (page > Math.max(listing.totalPages, 1)) notFound();

  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
        badge="LEGAL INSIGHTS & UPDATES"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Blog list: only this page's posts, filtered on the server */}
      <BlogListContent
        posts={listing.posts}
        total={listing.total}
        page={page}
        totalPages={listing.totalPages}
        category={category}
        q={q}
        categories={sidebar.categories}
        recentPosts={sidebar.recentPosts}
      />
    </main>
  );
}
