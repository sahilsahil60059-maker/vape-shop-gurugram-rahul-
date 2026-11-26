"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { allProducts, ProductItem } from "@/config/products";
import { seoConfig } from "@/config/seo";
import { Search, ExternalLink } from "lucide-react";

function WhatsAppIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.176.2-.301.3-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.239-.244-.589-.492-.51-.678-.519-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.119.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.352zM12.04 2C6.518 2 2.037 6.476 2.037 11.993c0 1.84.498 3.567 1.365 5.05L2 22l5.12-1.342c1.43.782 3.064 1.228 4.92 1.228 5.522 0 10.003-4.476 10.003-9.993C22.043 6.476 17.562 2 12.04 2zm0 18.286c-1.619 0-3.116-.486-4.364-1.321l-.313-.21-3.238.849.864-3.158-.23-.366c-.958-1.309-1.519-2.91-1.519-4.587 0-4.411 3.593-8 8.01-8 4.417 0 8.01 3.589 8.01 8 0 4.411-3.593 8-8.01 8z"/>
    </svg>
  );
}

type CategoryFilter = "All" | "Disposable Vapes" | "Pod Systems" | "Starter Kits" | "Premium E-Liquids" | "Coils & Pods";

export function ProductsSection() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) => {
      const matchesCategory =
        selectedCategory === "All" || p.category === selectedCategory;
      const matchesSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (p.puffs && p.puffs.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categories: { label: CategoryFilter; count: number }[] = useMemo(() => [
    { label: "All", count: allProducts.length },
    { label: "Disposable Vapes", count: allProducts.filter((p) => p.category === "Disposable Vapes").length },
    { label: "Pod Systems", count: allProducts.filter((p) => p.category === "Pod Systems").length },
    { label: "Starter Kits", count: allProducts.filter((p) => p.category === "Starter Kits").length },
    { label: "Premium E-Liquids", count: allProducts.filter((p) => p.category === "Premium E-Liquids").length },
    { label: "Coils & Pods", count: allProducts.filter((p) => p.category === "Coils & Pods").length },
  ], []);

  return (
    <section
      id="products"
      aria-labelledby="products-heading"
      className="py-8 sm:py-12 bg-[#f8fafc] text-[#192e42] border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block (Compact) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-3 mb-5">
          <div>
            <div className="flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest text-emerald-700 mb-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] animate-pulse" />
              <span>VERIFIED 100% AUTHENTIC CATALOG</span>
            </div>
            <h2
              id="products-heading"
              className="text-2xl sm:text-3xl font-black text-[#192e42] tracking-tight"
            >
              Trending Devices &amp; Flavors
            </h2>
            <p className="text-xs text-slate-500 mt-0.5 font-medium">
              Showing {filteredProducts.length} verified products with same-day Gurgaon dispatch (30-60 Mins Delivery)
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-68">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brand, device, puffs..."
              className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-1.5 text-xs text-[#192e42] placeholder-slate-400 focus:outline-none focus:border-[#192e42] focus:ring-1 focus:ring-[#192e42] transition shadow-2xs"
              aria-label="Search vape products"
            />
          </div>
        </div>

        {/* Filter Category Tabs (Compact) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-5 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.label;
            return (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label as CategoryFilter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1 active:scale-95 ${
                  isSelected
                    ? "bg-[#84cc16] text-[#0f1d2b] shadow-sm shadow-[#84cc16]/25 font-black"
                    : "bg-white text-slate-700 hover:text-[#192e42] border border-slate-300 hover:border-slate-400 shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? "bg-[#0f1d2b]/20 text-[#0f1d2b]" : "bg-slate-100 text-slate-500 font-semibold"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid (Super Compact & Clean) */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-xl border border-slate-200 shadow-sm">
            <p className="text-slate-500 text-xs">No products matched your search term.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-2.5 px-3 py-1 bg-[#84cc16] text-[#0f1d2b] text-xs font-bold rounded-lg shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5">
            {filteredProducts.map((p) => {
              const whatsappOrderUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
                `Hi, I want to order ${p.name} (Price: ${p.priceFormatted}) in Gurgaon.`
              )}`;

              return (
                <article
                  key={p.id}
                  className="bg-white border border-slate-200 rounded-xl p-2.5 sm:p-3 flex flex-col justify-between hover:border-[#84cc16] hover:shadow-md transition-all duration-200 group shadow-2xs"
                >
                  <div>
                    {/* Top Badges (Compact) */}
                    <div className="flex items-center justify-between text-[10px] mb-1.5">
                      <span className="bg-[#84cc16] text-[#0f1d2b] font-black text-[9px] px-1.5 py-0.5 rounded-full shadow-2xs">
                        Save ₹{p.savings}
                      </span>
                      <span className="bg-slate-100 border border-slate-200 text-slate-700 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase">
                        {p.brand}
                      </span>
                    </div>

                    {/* Product Image */}
                    <Link
                      href={`/products/${p.slug}`}
                      className="block relative w-full aspect-square rounded-lg overflow-hidden bg-slate-50 border border-slate-100 mb-2 group-hover:border-slate-200 transition"
                      aria-label={`View details of ${p.name}`}
                    >
                      <Image
                        src={p.image}
                        alt={`${p.name} - Buy online in Gurgaon`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-200"
                        loading="lazy"
                      />
                    </Link>

                    {/* Category / Puffs */}
                    <div className="flex items-center gap-1 text-[10px] text-slate-500 font-semibold mb-0.5">
                      <span className="truncate">{p.category}</span>
                      {p.puffs && (
                        <>
                          <span>•</span>
                          <span className="text-emerald-700 font-bold shrink-0">{p.puffs}</span>
                        </>
                      )}
                    </div>

                    {/* Product Name */}
                    <h3 className="font-bold text-xs sm:text-[13px] text-[#192e42] line-clamp-2 group-hover:text-emerald-700 transition leading-snug">
                      <Link href={`/products/${p.slug}`}>
                        {p.name}
                      </Link>
                    </h3>

                    {/* Pricing */}
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="text-sm sm:text-base font-black text-[#192e42]">
                        {p.priceFormatted}
                      </span>
                      <span className="text-[11px] text-slate-400 line-through">
                        {p.mrpFormatted}
                      </span>
                    </div>
                  </div>

                  {/* Actions: Compact WhatsApp button + subtle specs link */}
                  <div className="mt-2.5 space-y-1">
                    <a
                      href={whatsappOrderUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-lg bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs shadow-2xs transition active:scale-95"
                      aria-label={`Order ${p.name} on WhatsApp`}
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5 fill-[#0f1d2b]" />
                      <span>Chat on WhatsApp</span>
                    </a>

                    <Link
                      href={`/products/${p.slug}`}
                      className="w-full text-center py-0.5 text-[10px] font-semibold text-slate-500 hover:text-[#192e42] transition flex items-center justify-center gap-1"
                    >
                      <span>View Specifications</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Bottom Catalog Note */}
        <div className="mt-6 text-center text-xs text-slate-500">
          <p>
            Looking for a particular vape model or e-liquid flavour not listed above?
            <a
              href={`https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
                "Hi, I want to inquire about custom vape model availability in Gurgaon."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline ml-1"
            >
              Ask on WhatsApp &rarr;
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
