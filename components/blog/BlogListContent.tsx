"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import BlogSidebar, {
  SidebarCategoryItem,
  SidebarRecentPost,
} from "./BlogSidebar";
import type { WpPost, WpCategoryItem } from "@/lib/wordpress";
import { computeCategoryCounts } from "@/lib/wordpress";

interface BlogListContentProps {
  initialPosts: WpPost[];
  initialCategories?: WpCategoryItem[];
  totalPosts?: number;
  initialSelectedCategory?: string;
}

const POSTS_PER_PAGE = 10;

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
  initialSelectedCategory,
}: BlogListContentProps) {
  const [selectedCategory, setSelectedCategory] = useState(
    initialSelectedCategory || "All"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Sidebar categories with real counts calculated dynamically from actual loaded posts
  const sidebarCategories: SidebarCategoryItem[] = useMemo(() => {
    return computeCategoryCounts(initialPosts);
  }, [initialPosts]);

  // Top category filter pills: "All" + top 7 prominent categories
  const topPillCategories = useMemo(() => {
    return [
      "All",
      ...sidebarCategories
        .filter((c) => c.name !== "All")
        .slice(0, 7)
        .map((c) => c.name),
    ];
  }, [sidebarCategories]);

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
      const postCats =
        post.categories && post.categories.length > 0
          ? post.categories.map((c) => c.toLowerCase())
          : [(post.category || "").toLowerCase()];

      const matchesCategory =
        selectedCategory === "All" ||
        postCats.includes(selectedCategory.toLowerCase());

      const matchesSearch =
        !searchQuery.trim() ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [initialPosts, selectedCategory, searchQuery]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);

  // Auto reset page if out of bounds (e.g., after filter reduces count)
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [totalPages, currentPage]);

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (sectionRef.current) {
      const topOffset =
        sectionRef.current.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, topOffset), behavior: "smooth" });
    }
  };

  // Slice posts for current page
  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const startItem =
    filteredPosts.length === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * POSTS_PER_PAGE, filteredPosts.length);

  // Smart page numbers array with ellipsis
  const pageNumbers = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  }, [totalPages, currentPage]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-12 sm:py-16 lg:py-20 bg-white"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Blog Articles List with Pagination */}
          <div className="lg:col-span-8 self-start">
            {/* Category Filter Pills on Top with full-width bottom divider line */}
            <div className="flex flex-wrap items-center gap-2 pb-5 mb-8 border-b border-gray-200/90">
              {topPillCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleSelectCategory(cat)}
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
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100 text-xs text-gray-500 font-sans">
              <div>
                Showing {startItem}–{endItem} of {filteredPosts.length} article
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
              {(selectedCategory !== "All" || searchQuery) && (
                <button
                  onClick={() => {
                    handleSelectCategory("All");
                    handleSearchChange("");
                  }}
                  className="text-[#0056b3] hover:underline font-semibold cursor-pointer"
                >
                  Reset filters
                </button>
              )}
            </div>

            {/* If no articles match */}
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-500 font-sans text-sm">
                  No articles found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    handleSelectCategory("All");
                    handleSearchChange("");
                  }}
                  className="mt-3 text-xs text-[#0056b3] underline font-medium cursor-pointer"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <>
                {/* Articles list (10 per page) */}
                <div className="divide-y divide-gray-200/90">
                  {paginatedPosts.map((post) => (
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

                      {/* Read More Link */}
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

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <nav
                    aria-label="Blog pagination"
                    className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans"
                  >
                    <div className="text-xs text-gray-500 order-2 sm:order-1">
                      Showing <span className="font-semibold text-[#091D46]">{startItem}</span> to{" "}
                      <span className="font-semibold text-[#091D46]">{endItem}</span> of{" "}
                      <span className="font-semibold text-[#091D46]">{filteredPosts.length}</span> articles
                      {" "}(Page {currentPage} of {totalPages})
                    </div>

                    <div className="flex items-center gap-1.5 order-1 sm:order-2">
                      {/* Previous Page Button */}
                      <button
                        type="button"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                          currentPage === 1
                            ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
                            : "border-gray-300 text-[#091D46] hover:bg-gray-100 hover:border-[#091D46]"
                        }`}
                        aria-label="Go to previous page"
                      >
                        <span>←</span>
                        <span className="hidden sm:inline">Previous</span>
                      </button>

                      {/* Page Numbers */}
                      <div className="flex items-center gap-1">
                        {pageNumbers.map((p, idx) => {
                          if (p === "...") {
                            return (
                              <span
                                key={`ellipsis-${idx}`}
                                className="px-2 py-1 text-xs text-gray-400 select-none"
                              >
                                ...
                              </span>
                            );
                          }
                          const isCurrent = p === currentPage;
                          return (
                            <button
                              key={`page-${p}`}
                              type="button"
                              onClick={() => handlePageChange(p as number)}
                              aria-current={isCurrent ? "page" : undefined}
                              className={`min-w-[34px] h-[34px] text-xs font-semibold rounded-md transition-all cursor-pointer ${
                                isCurrent
                                  ? "bg-[#091D46] text-[#ECAB3C] shadow-xs font-bold"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-[#091D46]"
                              }`}
                            >
                              {p}
                            </button>
                          );
                        })}
                      </div>

                      {/* Next Page Button */}
                      <button
                        type="button"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border transition-all cursor-pointer ${
                          currentPage === totalPages
                            ? "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50"
                            : "border-gray-300 text-[#091D46] hover:bg-gray-100 hover:border-[#091D46]"
                        }`}
                        aria-label="Go to next page"
                      >
                        <span className="hidden sm:inline">Next</span>
                        <span>→</span>
                      </button>
                    </div>
                  </nav>
                )}
              </>
            )}
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-4 self-start">
            <BlogSidebar
              activeCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              searchQuery={searchQuery}
              onSearchChange={handleSearchChange}
              categories={sidebarCategories}
              recentPosts={sidebarRecentPosts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
