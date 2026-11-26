"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { all20Blogs, BlogPost } from "@/config/blogs";
import { seoConfig } from "@/config/seo";
import { Search, ArrowLeft, ChevronRight, BookOpen } from "lucide-react";

type CategoryFilter = "All" | "Buying Guides" | "Device Reviews" | "Gurgaon Delivery" | "E-Liquids";

export default function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = useMemo(() => {
    return all20Blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories: CategoryFilter[] = [
    "All",
    "Buying Guides",
    "Device Reviews",
    "Gurgaon Delivery",
    "E-Liquids",
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#192e42] py-6 sm:py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-700">Blog</span>
        </nav>

        {/* Page Header Matching Reference Image */}
        <div className="space-y-1.5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#192e42] tracking-tight">
            Vape <span className="text-[#84cc16]">Blog</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-normal">
            Buying guides, brand comparisons and Gurgaon delivery advice.
          </p>
        </div>

        {/* Filter Categories & Search Bar Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
          {/* Category Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all active:scale-95 cursor-pointer ${
                    isSelected
                      ? "bg-[#84cc16] text-[#0f1d2b] shadow-2xs font-black"
                      : "bg-white text-slate-700 hover:text-[#192e42] border border-slate-300 hover:border-slate-400 shadow-2xs"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides..."
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#192e42] placeholder-slate-400 focus:outline-none focus:border-[#192e42] focus:ring-1 focus:ring-[#192e42] transition shadow-2xs"
              aria-label="Search blog guides"
            />
          </div>
        </div>

        {/* Blog Post Cards (Stacked Vertically Matching Image 1) */}
        {filteredBlogs.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-xs">No blog guides found matching your query.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-3 px-3 py-1.5 bg-[#84cc16] text-[#0f1d2b] text-xs font-bold rounded-lg shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-3.5 pt-2">
            {filteredBlogs.map((post) => (
              <article
                key={post.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#84cc16] hover:shadow-md transition-all duration-200 shadow-2xs group space-y-2"
              >
                {/* Meta Row: Date • Read Time • Category */}
                <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span className="text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-2 py-0.2 rounded">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-black text-[#192e42] group-hover:text-emerald-700 transition leading-snug">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {post.excerpt}
                </p>

                {/* Read Guide Link */}
                <div className="pt-1">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-[#192e42] transition"
                  >
                    <span>Read guide &rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
