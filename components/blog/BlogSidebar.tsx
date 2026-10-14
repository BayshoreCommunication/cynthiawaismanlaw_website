"use client";

import React from "react";
import Link from "next/link";
import { blogPosts, blogCategories } from "./blogData";

interface BlogSidebarProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export default function BlogSidebar({
  activeCategory = "All",
  onSelectCategory,
  searchQuery = "",
  onSearchChange,
}: BlogSidebarProps) {
  const recentPosts = blogPosts.slice(0, 4);

  return (
    <aside className="w-full space-y-6 font-sans">
      {/* 1. Search Box Card */}
      {onSearchChange && (
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/90 shadow-2xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#ECAB3C]" />
            <h3 className="text-xs font-bold tracking-widest text-[#091D46] uppercase font-sans">
              SEARCH ARTICLES
            </h3>
          </div>
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search legal topics..."
              className="w-full bg-[#fbfcfd] border border-gray-300 rounded-md py-2.5 pl-3.5 pr-10 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#091D46] focus:ring-1 focus:ring-[#091D46] transition-all"
            />
            <span className="absolute right-3.5 top-2.5 text-[#091D46] text-sm pointer-events-none">
              🔍
            </span>
          </div>
        </div>
      )}

      {/* 2. Categories Card (White Card with Branding Blue & Gold Accents) */}
      <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/90 shadow-2xs">
        <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-gray-100">
          <span className="w-5 h-[2px] bg-[#ECAB3C]" />
          <h3 className="text-xs font-bold tracking-widest text-[#091D46] uppercase font-sans">
            CATEGORIES
          </h3>
        </div>

        <ul className="space-y-1.5 font-sans">
          {blogCategories.map((cat) => {
            const count =
              cat === "All"
                ? blogPosts.length
                : blogPosts.filter((p) => p.category === cat).length;
            const isSelected = activeCategory === cat;

            return (
              <li key={cat}>
                <button
                  type="button"
                  onClick={() => onSelectCategory && onSelectCategory(cat)}
                  className={`w-full flex items-center justify-between py-2 px-3 rounded-md transition-all text-left text-xs sm:text-[13.5px] cursor-pointer ${
                    isSelected
                      ? "bg-[#091D46] text-white font-semibold shadow-xs"
                      : "text-gray-700 hover:text-[#091D46] hover:bg-gray-50"
                  }`}
                >
                  <span className={isSelected ? "text-white" : ""}>{cat}</span>
                  <span
                    className={`text-[11.5px] font-mono ${
                      isSelected ? "text-[#ECAB3C] font-bold" : "text-gray-400"
                    }`}
                  >
                    ({count})
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 3. Recent Articles Card */}
      <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200/90 shadow-2xs">
        <div className="flex items-center gap-2 mb-4 pb-2.5 border-b border-gray-100">
          <span className="w-5 h-[2px] bg-[#ECAB3C]" />
          <h3 className="text-xs font-bold tracking-widest text-[#091D46] uppercase font-sans">
            RECENT ARTICLES
          </h3>
        </div>

        <ul className="space-y-3 divide-y divide-gray-100">
          {recentPosts.map((post, idx) => (
            <li key={post.id} className={idx > 0 ? "pt-3" : ""}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <h4 className="font-serif text-[13.5px] sm:text-[14px] font-normal text-[#091D46] group-hover:text-[#ECAB3C] transition-colors leading-snug line-clamp-2">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 mt-1 text-[11px] text-gray-500">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="text-[#091D46] font-medium">
                    {post.category}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Consultation CTA Card (Branding Blue with Gold Accent) */}
      <div className="bg-[#091D46] text-white p-6 rounded-xl shadow-md">
        <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase block mb-2 font-sans">
          NEED LEGAL GUIDANCE?
        </span>
        <h4 className="font-serif text-lg sm:text-xl font-normal text-white leading-snug mb-2.5">
          Schedule A 10-Minute Consultation
        </h4>
        <p className="text-xs text-blue-100/80 leading-relaxed mb-4">
          Speak directly with attorney Cynthia I. Waisman regarding your
          immigration, estate planning, or guardianship matter.
        </p>
        <Link
          href="/contact"
          className="w-full bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3 px-4 rounded-md inline-flex items-center justify-center gap-2 transition-all shadow-sm font-sans"
        >
          <span>Contact Our Firm</span>
          <span>→</span>
        </Link>
        <div className="mt-3.5 pt-3 border-t border-white/10 text-center text-xs text-white/80">
          Or call:{" "}
          <a
            href="tel:+18132796180"
            className="text-[#ECAB3C] font-semibold hover:underline"
          >
            (813) 279-6180
          </a>
        </div>
      </div>
    </aside>
  );
}
