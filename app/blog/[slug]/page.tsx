import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { blogPosts } from "@/components/blog/blogData";
import Link from "next/link";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Article Not Found" };

  return {
    title: `${post.title} | Cynthia I. Waisman, P.A.`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

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
              <div className="flex items-center gap-3 text-xs text-gray-500 font-sans mb-3">
                <span className="inline-block bg-[#FAF7F2] text-[#091D46] border border-amber-200/70 font-semibold px-2.5 py-0.5 rounded-sm uppercase tracking-wider text-[11px]">
                  {post.category}
                </span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>

              {/* Title */}
              <h1 className="font-serif text-[28px] sm:text-[36px] lg:text-[40px] font-normal text-[#091D46] leading-[1.2] mb-6 tracking-tight">
                {post.title}
              </h1>

              {/* Content Paragraphs */}
              <div className="space-y-5 text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed">
                {(post.content || [post.excerpt]).map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

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
                <div className="flex items-center gap-4">
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
              <BlogSidebar activeCategory={post.category} />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

