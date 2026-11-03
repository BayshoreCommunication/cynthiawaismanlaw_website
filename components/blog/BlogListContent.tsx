import React from "react";
import Link from "next/link";
import BlogSidebar, {
  SidebarCategoryItem,
  SidebarRecentPost,
} from "./BlogSidebar";
import type { BlogPostSummary } from "@/lib/blog";
import { POSTS_PER_PAGE, blogListHref, type BlogCategory } from "@/lib/blogUrls";

interface BlogListContentProps {
  /** Only the posts for the current page. */
  posts: BlogPostSummary[];
  total: number;
  page: number;
  totalPages: number;
  category: BlogCategory | null;
  q?: string;
  categories: SidebarCategoryItem[];
  recentPosts: SidebarRecentPost[];
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

/** Page numbers with ellipsis, e.g. [1, "...", 4, 5, 6, "...", 45]. */
function getPageNumbers(currentPage: number, totalPages: number): (number | "...")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }
  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "...", totalPages];
  }
  if (currentPage >= totalPages - 3) {
    return [1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
  }
  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

const navButtonBase =
  "inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-md border transition-all cursor-pointer";
const navButtonDisabled = "border-gray-200 text-gray-300 cursor-not-allowed bg-gray-50";
const navButtonActive =
  "border-gray-300 text-[#091D46] hover:bg-gray-100 hover:border-[#091D46]";

export default function BlogListContent({
  posts,
  total,
  page: currentPage,
  totalPages,
  category,
  q,
  categories,
  recentPosts,
}: BlogListContentProps) {
  const selectedCategory = category?.name ?? "All";
  const pageHref = (page: number) =>
    blogListHref({ category: category?.slug, q, page });

  // Top category filter pills: "All" + top 7 categories
  const topPillCategories = categories.slice(0, 8);

  const startItem = total === 0 ? 0 : (currentPage - 1) * POSTS_PER_PAGE + 1;
  const endItem = Math.min(currentPage * POSTS_PER_PAGE, total);
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Blog Articles List with Pagination */}
          <div className="lg:col-span-8 self-start">
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Blog &amp; Legal Insights
            </h1>

            {/* Category Filter Pills on Top with full-width bottom divider line */}
            <div className="flex flex-wrap items-center gap-2 pb-5 mb-8 border-b border-gray-200/90">
              {topPillCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={blogListHref({ category: cat.slug })}
                  aria-current={selectedCategory === cat.name ? "page" : undefined}
                  className={`text-xs px-3.5 py-1.5 rounded-full font-sans tracking-wide uppercase transition-all cursor-pointer ${
                    selectedCategory.toLowerCase() === cat.name.toLowerCase()
                      ? "bg-[#091D46] text-[#ECAB3C] font-bold shadow-xs"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            {/* Results count / active filter indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-gray-100 text-xs text-gray-500 font-sans">
              <div>
                Showing {startItem}–{endItem} of {total} article
                {total === 1 ? "" : "s"}
                {category && (
                  <span>
                    {" "}
                    in <strong className="text-[#091D46]">{category.name}</strong>
                  </span>
                )}
                {q && (
                  <span>
                    {" "}
                    matching &ldquo;<strong>{q}</strong>&rdquo;
                  </span>
                )}
              </div>
              {(category || q) && (
                <Link
                  href="/blog"
                  className="text-[#0056b3] hover:underline font-semibold cursor-pointer"
                >
                  Reset filters
                </Link>
              )}
            </div>

            {/* If no articles match */}
            {total === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl border border-gray-200">
                <p className="text-gray-500 font-sans text-sm">
                  No articles found matching your criteria.
                </p>
                <Link
                  href="/blog"
                  className="mt-3 inline-block text-xs text-[#0056b3] underline font-medium cursor-pointer"
                >
                  Clear filters
                </Link>
              </div>
            ) : (
              <>
                {/* Articles list (10 per page) */}
                <div className="divide-y divide-gray-200/90">
                  {posts.map((post) => (
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

                {/* Pagination: real links so every page can be crawled */}
                {totalPages > 1 && (
                  <nav
                    aria-label="Blog pagination"
                    className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans"
                  >
                    <div className="text-xs text-gray-500 order-2 sm:order-1">
                      Showing <span className="font-semibold text-[#091D46]">{startItem}</span> to{" "}
                      <span className="font-semibold text-[#091D46]">{endItem}</span> of{" "}
                      <span className="font-semibold text-[#091D46]">{total}</span> articles
                      {" "}(Page {currentPage} of {totalPages})
                    </div>

                    <div className="flex items-center gap-1.5 order-1 sm:order-2">
                      {/* Previous Page */}
                      {currentPage > 1 ? (
                        <Link
                          href={pageHref(currentPage - 1)}
                          rel="prev"
                          className={`${navButtonBase} ${navButtonActive}`}
                          aria-label="Go to previous page"
                        >
                          <span>←</span>
                          <span className="hidden sm:inline">Previous</span>
                        </Link>
                      ) : (
                        <span
                          aria-disabled="true"
                          className={`${navButtonBase} ${navButtonDisabled}`}
                        >
                          <span>←</span>
                          <span className="hidden sm:inline">Previous</span>
                        </span>
                      )}

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
                            <Link
                              key={`page-${p}`}
                              href={pageHref(p)}
                              aria-current={isCurrent ? "page" : undefined}
                              className={`min-w-[34px] h-[34px] inline-flex items-center justify-center text-xs font-semibold rounded-md transition-all cursor-pointer ${
                                isCurrent
                                  ? "bg-[#091D46] text-[#ECAB3C] shadow-xs font-bold"
                                  : "text-gray-700 hover:bg-gray-100 hover:text-[#091D46]"
                              }`}
                            >
                              {p}
                            </Link>
                          );
                        })}
                      </div>

                      {/* Next Page */}
                      {currentPage < totalPages ? (
                        <Link
                          href={pageHref(currentPage + 1)}
                          rel="next"
                          className={`${navButtonBase} ${navButtonActive}`}
                          aria-label="Go to next page"
                        >
                          <span className="hidden sm:inline">Next</span>
                          <span>→</span>
                        </Link>
                      ) : (
                        <span
                          aria-disabled="true"
                          className={`${navButtonBase} ${navButtonDisabled}`}
                        >
                          <span className="hidden sm:inline">Next</span>
                          <span>→</span>
                        </span>
                      )}
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
              showSearch
              searchQuery={q}
              categories={categories}
              recentPosts={recentPosts}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
