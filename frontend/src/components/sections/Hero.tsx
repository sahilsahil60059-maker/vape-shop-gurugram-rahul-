import Link from "next/link";
import { seoConfig } from "@/config/seo";
import { BannerSlider } from "@/components/ui/BannerSlider";
import { MapPin, Truck, Sparkles, CheckCircle } from "lucide-react";

const gurgaonNeighborhoods = [
  { name: "DLF Phase 1-5", time: "25" },
  { name: "Cyber City & Hub", time: "20" },
  { name: "Golf Course Road", time: "25" },
  { name: "Golf Course Ext", time: "30" },
  { name: "Sector 29 Market", time: "25" },
  { name: "Sector 43 & 44", time: "30" },
  { name: "MG Road Area", time: "25" },
  { name: "Sohna Road", time: "35" },
  { name: "Ambience Island", time: "25" },
  { name: "Sushant Lok 1-2", time: "30" },
  { name: "Nirvana Country", time: "35" },
  { name: "South City 1-2", time: "30" },
  { name: "New Gurgaon (82-95)", time: "45" },
];

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    seoConfig.whatsappMessage
  )}`;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative bg-white"
    >
      {/* 1. Full-Width Edge-to-Edge Auto-Slide Banner Carousel */}
      <div className="w-full bg-slate-50 p-0 m-0">
        <BannerSlider />
      </div>

      {/* 2. Post-Banner Section Matching User's Reference Layout in White & #192e42 */}
      <div className="bg-white text-[#192e42] py-4 sm:py-6 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 sm:space-y-5">
          
          {/* Top Row: Left Content & Actions + Right 3 Stat Cards */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-8">
            
            {/* Left Content Column */}
            <div className="max-w-2xl space-y-2">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[11px] font-semibold text-slate-700 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16] animate-pulse" />
                <span>100% Genuine Vape Shop</span>
                <span className="text-slate-400">•</span>
                <span className="text-[#84cc16] font-bold">Gurgaon Express Hub</span>
              </div>

              {/* Primary SEO H1 with Compact Font Size */}
              <h1
                id="hero-heading"
                className="text-lg sm:text-2xl lg:text-3xl font-black text-[#192e42] tracking-tight leading-snug"
              >
                Vape Shop Gurgaon —{" "}
                <span className="text-[#84cc16]">
                  #1 Authentic Store
                </span>{" "}
                &amp; 30-Min Fast Delivery
              </h1>

              {/* Subtitle with Compact Font */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-xl">
                Looking for a verified <strong className="text-[#192e42] font-semibold">vape shop in Gurgaon</strong>? Get 100% genuine disposable vapes (Elf Bar, Lost Mary, iGET, Nasty Bolt), refillable pod kits (Caliburn, Vaporesso), coils, and premium imported nicotine salts delivered within 30-60 minutes across all Gurugram sectors.
              </p>

              {/* Action Buttons (Compact) */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                <a
                  href="#products"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs shadow-sm hover:shadow transition-all active:scale-95"
                >
                  <Sparkles className="w-3.5 h-3.5 fill-current stroke-none" />
                  <span>Explore Bestsellers &rarr;</span>
                </a>

                <Link
                  href="/locations"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-[#192e42] border border-slate-300 font-bold text-xs transition-all active:scale-95 shadow-2xs"
                >
                  <Truck className="w-3.5 h-3.5 text-[#84cc16]" />
                  <span>Delivery Zones</span>
                </Link>
              </div>
            </div>

            {/* Right Metric Stat Cards (Compact) */}
            <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 sm:p-3 text-center min-w-[85px] sm:min-w-[95px] shadow-2xs">
                <div className="text-lg sm:text-xl font-black text-[#84cc16]">100%</div>
                <div className="text-[10px] text-slate-600 font-medium mt-0.5">Authentic</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 sm:p-3 text-center min-w-[85px] sm:min-w-[95px] shadow-2xs">
                <div className="text-lg sm:text-xl font-black text-[#192e42]">30-60m</div>
                <div className="text-[10px] text-slate-600 font-medium mt-0.5">GGN Delivery</div>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-lg p-2.5 sm:p-3 text-center min-w-[85px] sm:min-w-[95px] shadow-2xs">
                <div className="text-lg sm:text-xl font-black text-[#84cc16]">10K+</div>
                <div className="text-[10px] text-slate-600 font-medium mt-0.5">Happy Vapers</div>
              </div>
            </div>

          </div>

          {/* Bottom Neighborhood Matrix Section (Compact) */}
          <div className="pt-4 border-t border-slate-200 space-y-2.5">
            
            {/* Heading row with Right action buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-[#84cc16] mb-0.5">
                  <MapPin className="w-3 h-3 text-[#84cc16]" />
                  <span>EXPRESS 30-60 MINUTES COVERAGE</span>
                </div>
                <h2 className="text-sm sm:text-base font-black text-[#192e42] tracking-tight">
                  Same-Day Delivery Across Gurgaon Neighborhoods
                </h2>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/locations"
                  className="px-3 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-[11px] font-bold text-slate-700 border border-slate-300 transition shadow-2xs"
                >
                  All Sectors &gt;
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-md bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] text-[11px] font-black transition shadow-sm active:scale-95"
                >
                  Check My Sector
                </a>
              </div>
            </div>

            {/* Neighborhood Pills (Pin + Name + (Time in Mins)) - Compact */}
            <div className="flex flex-wrap gap-1.5">
              {gurgaonNeighborhoods.map((loc) => (
                <div
                  key={loc.name}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 hover:border-[#84cc16] hover:bg-white text-[11px] text-slate-800 shadow-2xs transition"
                >
                  <span className="text-rose-500 text-[10px]">📍</span>
                  <span className="font-semibold text-[#192e42]">{loc.name}</span>
                  <span className="text-slate-500 font-medium text-[10px]">({loc.time})</span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
