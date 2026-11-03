import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogListContent from "@/components/blog/BlogListContent";
import { getAllPostSummaries } from "@/lib/blog";
import blogCategories from "@/data/blog/categories.json";

export const metadata: Metadata = pageMetadata({
  title: "Blog & Legal Insights",
  description:
    "Stay informed with legal insights, USCIS policy updates, and Florida estate planning guidance from attorney Cynthia I. Waisman.",
  path: "/blog",
});

export const instant = false;

interface BlogPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  // Accept a category slug (from old WordPress URLs) or a category name.
  const categoryParam = resolvedParams?.category;
  const initialCategory =
    blogCategories.find((c) => c.slug === categoryParam)?.name ?? categoryParam;

  const posts = getAllPostSummaries();

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

      {/* 2. Blog List Content (local data) with Synchronized Category Counts */}
      <BlogListContent
        initialPosts={posts}
        initialSelectedCategory={initialCategory}
      />
    </main>
  );
}
