"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { blogPosts, blogCategories } from "./blogData";
import BlogSidebar from "./BlogSidebar";

export default function BlogListContent() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isLeftShorter, setIsLeftShorter] = useState(false);

  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Calculate which column is shorter to apply sticky correctly
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
              {blogCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-sans tracking-wide uppercase transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#091D46] text-[#ECAB3C] font-bold shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

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
              <div className="space-y-10 divide-y divide-gray-200/90">
                {filteredPosts.map((post, idx) => (
                  <article
                    key={post.id}
                    className={idx > 0 ? "pt-10" : ""}
                  >
                    {/* Category & Date Line */}
                    <div className="flex items-center gap-3 text-xs text-gray-500 font-sans mb-2.5">
                      <span className="inline-block bg-[#FAF7F2] text-[#091D46] border border-amber-200/70 font-semibold px-2.5 py-0.5 rounded-sm uppercase tracking-wider text-[11px]">
                        {post.category}
                      </span>
                      <span>•</span>
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>

                    {/* Article Title */}
                    <h2 className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] font-normal text-[#091D46] leading-[1.2] mb-3.5 tracking-tight group">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-[#ECAB3C] transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
                      {post.excerpt}
                    </p>

                    {/* Read More Link */}
                    <div>
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
            />
          </div>

        </div>
      </div>
    </section>
  );
}
