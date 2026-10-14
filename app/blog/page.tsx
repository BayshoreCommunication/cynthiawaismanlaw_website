import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import BlogListContent from "@/components/blog/BlogListContent";

export const metadata: Metadata = {
  title: "Blog & Legal Insights | Cynthia I. Waisman, P.A.",
  description:
    "Stay informed with legal insights, USCIS policy updates, and Florida estate planning guidance from attorney Cynthia I. Waisman.",
};

export default function BlogPage() {
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

      {/* 2. Blog List Content */}
      <BlogListContent />
    </main>
  );
}

