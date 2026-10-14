import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogSidebar, {
  SidebarCategoryItem,
  SidebarRecentPost,
} from "@/components/blog/BlogSidebar";
import { getWpPostBySlug, getWpPosts, getWpCategories } from "@/lib/wordpress";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}


export async function generateStaticParams() {
  const { posts } = await getWpPosts({ perPage: 20 });
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWpPostBySlug(slug);
  if (!post) {
    return { title: "Article Not Found | Cynthia I. Waisman, P.A." };
  }

  return {
    title: `${post.title} | Cynthia I. Waisman, P.A.`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  const [post, { posts: recentPosts, total }, categories] = await Promise.all([
    getWpPostBySlug(slug),
    getWpPosts({ perPage: 6 }),
    getWpCategories(),
  ]);

  if (!post) {
    notFound();
  }

  // Categories formatted for sidebar
  const sidebarCats: SidebarCategoryItem[] = [
    { name: "All", count: total || 441 },
    ...categories.map((c) => ({
      name: c.name,
      count: c.count,
    })),
  ];

  // Recent posts formatted for sidebar (exclude current post)
  const sidebarRecent: SidebarRecentPost[] = recentPosts
    .filter((p) => p.slug !== slug)
    .slice(0, 5)
    .map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      date: p.date,
      category: p.category,
    }));

  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
          { label: post.title },
        ]}
        badge={post.category.toUpperCase()}
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Article Body & Sidebar */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Full Article Content */}
            <article className="lg:col-span-8 text-[#2b2b2b]">
              {/* Category & Meta */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-gray-500 font-sans mb-3">
                <span className="inline-block bg-[#FAF7F2] text-[#091D46] border border-amber-200/70 font-semibold px-2.5 py-0.5 rounded-sm uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[38px] font-normal text-[#091D46] leading-[1.2] mb-6 tracking-tight">
                {post.title}
              </h1>

              {/* Content Rendered with Tailwind Typography Styles */}
              <div
                className="font-sans text-[15px] sm:text-[16px] text-[#374151] leading-[1.8] space-y-5
                  [&_p]:mb-5 [&_p]:leading-relaxed
                  [&_h2]:font-serif [&_h2]:text-[24px] sm:[&_h2]:text-[28px] [&_h2]:font-normal [&_h2]:text-[#091D46] [&_h2]:mt-8 [&_h2]:mb-4
                  [&_h3]:font-serif [&_h3]:text-[20px] sm:[&_h3]:text-[22px] [&_h3]:font-normal [&_h3]:text-[#091D46] [&_h3]:mt-6 [&_h3]:mb-3
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ul]:space-y-2
                  [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5 [&_ol]:space-y-2
                  [&_li]:text-[#374151]
                  [&_a]:text-[#0056b3] [&_a]:underline hover:[&_a]:text-[#091D46]
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[#ECAB3C] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-6 [&_blockquote]:text-gray-700
                  [&_strong]:font-semibold [&_strong]:text-[#091D46]
                  [&_img]:rounded-lg [&_img]:my-6 [&_img]:max-w-full [&_img]:h-auto"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Consultation Callout */}
              <div className="mt-12 p-6 sm:p-7 bg-[#FAF7F2] rounded-lg border border-amber-200/60 shadow-2xs">
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#091D46] mb-2.5">
                  Have Questions Regarding This Legal Topic?
                </h3>
                <p className="text-sm text-[#4a5568] leading-relaxed mb-4">
                  Attorney Cynthia I. Waisman is ready to assist you. Call our
                  office at{" "}
                  <a
                    href="tel:+18132796180"
                    className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                  >
                    +1 (813) 279-6180
                  </a>{" "}
                  or request a consultation online.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3 px-5 rounded-md inline-flex items-center gap-2 transition-all shadow-sm font-sans"
                  >
                    <span>Request Consultation</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/blog"
                    className="text-xs font-bold text-[#091D46] hover:text-[#ECAB3C] uppercase tracking-wider transition-colors font-sans"
                  >
                    ← Back to All Articles
                  </Link>
                </div>
              </div>
            </article>

            {/* Right Column: Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-[144px] self-start">
              <BlogSidebar
                activeCategory={post.category}
                categories={sidebarCats}
                recentPosts={sidebarRecent}
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
