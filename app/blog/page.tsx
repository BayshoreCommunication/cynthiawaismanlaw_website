import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogListContent from "@/components/blog/BlogListContent";
import { getWpPosts } from "@/lib/wordpress";

export const metadata: Metadata = {
  title: "Blog & Legal Insights | Cynthia I. Waisman, P.A.",
  description:
    "Stay informed with legal insights, USCIS policy updates, and Florida estate planning guidance from attorney Cynthia I. Waisman.",
};

export const instant = false;

interface BlogPageProps {
  searchParams?: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedParams = searchParams ? await searchParams : undefined;
  const initialCategory = resolvedParams?.category;

  const { posts } = await getWpPosts({ perPage: 100 });

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

      {/* 2. Blog List Content with Live WordPress Data & Synchronized Category Counts */}
      <BlogListContent
        initialPosts={posts}
        initialSelectedCategory={initialCategory}
      />
    </main>
  );
}
