"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import Link from "next/link";
import BlogSidebar, {
  SidebarCategoryItem,
  SidebarRecentPost,
} from "./BlogSidebar";
import type { WpPost, WpCategoryItem } from "@/lib/wordpress";

interface BlogListContentProps {
  initialPosts: WpPost[];
  initialCategories: WpCategoryItem[];
  totalPosts?: number;
}

function cleanExcerpt(text: string): string {
  if (!text) return "";
  return text
    .replace(/[\.\s]*\[\s*(?:…|\.\.\.|&hellip;)\s*\]/g, "...")
    .replace(/[\.\s]*\[\s*\.\.\.\s*\]/g, "...")
    .replace(/\s*\[[^\]]*\]\s*$/g, "...")
    .replace(/\.{4,}/g, "...")
    .trim();
}

export default function BlogListContent({
  initialPosts,
  initialCategories,
  totalPosts,
}: BlogListContentProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLeftShorter, setIsLeftShorter] = useState(false);

  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  // Top category filter pills: "All" + top 7 prominent categories
  const topPillCategories = useMemo(() => {
    const list = ["All"];
    initialCategories.slice(0, 7).forEach((c) => {
      if (!list.includes(c.name)) list.push(c.name);
    });
    return list;
  }, [initialCategories]);

  // Sidebar categories with real counts
  const sidebarCategories: SidebarCategoryItem[] = useMemo(() => {
    const totalCount =
      totalPosts || initialPosts.length;
    return [
      { name: "All", count: totalCount },
      ...initialCategories.map((c) => ({
        name: c.name,
        count: c.count,
      })),
    ];
  }, [initialCategories, initialPosts, totalPosts]);

  // Sidebar recent posts
  const sidebarRecentPosts: SidebarRecentPost[] = useMemo(() => {
    return initialPosts.slice(0, 5).map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      date: p.date,
      category: p.category,
    }));
  }, [initialPosts]);

  // Filter posts based on selected category and search query
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Calculate which column is shorter to apply sticky correctly (offset lg:top-[144px])
  useEffect(() => {
    const calculateHeights = () => {
      if (leftColRef.current && rightColRef.current) {
        const leftH = leftColRef.current.offsetHeight;
        const rightH = rightColRef.current.offsetHeight;
        setIsLeftShorter(leftH < rightH);
      }
    };

    calculateHeights();
    const timer = setTimeout(calculateHeights, 100);
    window.addEventListener("resize", calculateHeights);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", calculateHeights);
    };
  }, [filteredPosts, selectedCategory, searchQuery]);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Blog Articles List (Sticky if shorter than sidebar) */}
          <div
            ref={leftColRef}
            className={`lg:col-span-8 self-start transition-all ${
              isLeftShorter ? "lg:sticky lg:top-[144px]" : ""
            }`}
          >
            {/* Category Filter Pills on Top with full-width bottom divider line */}
            <div className="flex flex-wrap items-center gap-2 pb-5 mb-8 border-b border-gray-200/90">
              {topPillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-sans tracking-wide uppercase transition-all cursor-pointer ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-[#091D46] text-[#ECAB3C] font-bold shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Results count / active filter indicator */}
            {(selectedCategory !== "All" || searchQuery) && (
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100 text-xs text-gray-500 font-sans">
                <div>
                  Showing {filteredPosts.length} article
                  {filteredPosts.length === 1 ? "" : "s"}
                  {selectedCategory !== "All" && (
                    <span>
                      {" "}
                      in <strong className="text-[#091D46]">{selectedCategory}</strong>
                    </span>
                  )}
                  {searchQuery && (
                    <span>
                      {" "}
                      matching &ldquo;<strong>{searchQuery}</strong>&rdquo;
                    </span>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="text-[#0056b3] hover:underline font-semibold cursor-pointer"
                >
                  Reset filters
                </button>
              </div>
            )}

            {/* If no articles match */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-500 font-sans text-sm">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-3 text-xs text-[#0056b3] underline font-medium cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              /* Articles list */
              <div className="divide-y divide-gray-200/90">
                {filteredPosts.map((post) => (
                  <article
                    key={post.id}
                    className="py-10 sm:py-12 first:pt-0 last:pb-0"
                  >
                    {/* Category & Date Line */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-sans mb-3">
                      <span className="inline-block bg-[#FAF7F2] text-[#091D46] border border-amber-200/70 font-semibold px-2.5 py-0.5 rounded-sm uppercase tracking-wider text-[11px]">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>

                    {/* Article Title */}
                    <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] font-normal text-[#091D46] leading-[1.25] mb-3.5 tracking-tight group">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#ECAB3C] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
                      {cleanExcerpt(post.excerpt)}
                    </p>

                    {/* Read More Link (With proper spacing below before divider) */}
                    <div className="pt-1">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#091D46] hover:text-[#ECAB3C] transition-colors font-sans group/link"
                      >
                        <span>Read Full Article</span>
                        <span className="text-sm font-bold group-hover/link:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Sticky Sidebar (Sticky if shorter than articles list) */}
          <div
            ref={rightColRef}
            className={`lg:col-span-4 self-start transition-all ${
              !isLeftShorter ? "lg:sticky lg:top-[144px]" : ""
            }`}
          >
            <BlogSidebar
              activeCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              searchQuery={searchQuery}
              onSearchChange={(q) => setSearchQuery(q)}
              categories={sidebarCategories}
              recentPosts={sidebarRecentPosts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
