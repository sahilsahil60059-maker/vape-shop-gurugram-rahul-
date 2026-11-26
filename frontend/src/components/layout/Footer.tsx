import Image from "next/image";
import Link from "next/link";
import { seoConfig } from "@/config/seo";
import {
  CheckCircle2,
  Truck,
  ShieldCheck,
  Zap,
  MapPin,
  AlertTriangle,
  Phone,
  Mail,
} from "lucide-react";

const topBrands = [
  "Elf Bar Disposable Vapes (BC5000, AF5000)",
  "Lost Mary Turbo Vapes (MT35000, BM6000)",
  "Uwell Caliburn Pod Kits (G3 Pro, G4, KOKO)",
  "Vaporesso Pod Systems (XROS 3, Armour G, GTX)",
  "Geekvape Aegis Series (B60 Boost 2 60W)",
  "Nasty Bolt 50K Hyper Puff Series",
  "VOOPOO Argus & VMATE Gift Sets",
  "iGET 10000 Puffs Disposable Pods",
  "Pod Salt UK Nicotine Salts (30ml)",
];

const categories = [
  "High-Puff Disposable Vapes (5K to 50K)",
  "Refillable Pod Mod Kits & Systems",
  "Nicotine Salt E-Liquids (20mg, 50mg)",
  "Freebase Sub-Ohm E-Liquids",
  "Original Mesh Replacement Coils",
  "Leak-Proof Refillable Pod Cartridges",
  "Starter Vape Kits for Adults",
  "Dual Flavor & Boost Mode Devices",
];

const expressHubs = [
  { name: "Vape Delivery DLF Phase 1-5 (25-35 Mins)" },
  { name: "Vape Shop Cyber City & Cyber Hub" },
  { name: "Vape Delivery Golf Course Road" },
  { name: "Vape Store Sohna Road & Sector 48" },
  { name: "Vape Shop Sector 29 & Sector 43" },
  { name: "Same-Day Delivery MG Road & Galleria" },
  { name: "Vape Delivery Nirvana Country & South City" },
  { name: "Vape Delivery New Gurgaon (Sector 82-95)" },
  { name: "Vape Shop Ambience Island & NH-8" },
];

const trendingSearches = [
  "Buy Vapes Online Gurgaon",
  "Vape Shop Near Me Gurugram",
  "Disposable Vapes Gurgaon",
  "Same Day Vape Delivery Gurgaon",
  "Elfbar BC5000 Gurgaon Price",
  "Uwell Caliburn Pod Kit Gurgaon",
  "Lost Mary 35000 Puffs Gurgaon",
  "Vaporesso XROS 3 Mini Gurgaon",
  "Geekvape Aegis B60 India",
  "Authentic E-Liquids Gurgaon",
  "Discreet Vape Delivery Haryana",
  "Vape Store DLF Cyber City Express",
  "Vape Delivery Golf Course Road",
  "Nasty Bolt 50K Gurgaon",
  "Nicotine Salts Gurgaon Store",
  "VOOPOO Argus Top Fill Pods",
  "100% Genuine Scannable Vapes",
];

export function Footer() {
  return (
    <footer className="bg-[#091522] border-t border-[#192e42] text-slate-300 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* =========================================================================
            ROW 1: 4-Column Grid Matching User Image 2
            ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Logo, Description & 4 Pill Badges (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-[#192e42] shrink-0">
                <Image
                  src="/logo.png"
                  alt="Vape Shop Gurgaon Official Logo"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight leading-none">
                  VAPE SHOP
                </span>
                <span className="text-[10px] text-[#84cc16] font-bold tracking-[0.2em] uppercase mt-0.5">
                  GURGAON
                </span>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
              Vape Shop Gurgaon is Haryana&apos;s #1 most trusted online destination for 100% verified, original imported disposable vapes, refillable pod kits, coils, and premium nicotine salts. Serving every Gurugram neighborhood with rapid same-day 30 to 60 minutes express delivery, unbranded discreet tamper-evident packaging, and manufacturer scannable anti-counterfeit QR verification.
            </p>

            {/* 4 Trust Badges in 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#102336] border border-[#1d3c5c] text-[11px] font-bold text-slate-200 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                <span>100% Authentic</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#102336] border border-[#1d3c5c] text-[11px] font-bold text-slate-200 shadow-2xs">
                <Truck className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                <span>30-60m GGN Express</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#102336] border border-[#1d3c5c] text-[11px] font-bold text-slate-200 shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                <span>QR Code Verified</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#102336] border border-[#1d3c5c] text-[11px] font-bold text-slate-200 shadow-2xs">
                <Zap className="w-3.5 h-3.5 text-[#84cc16] fill-current shrink-0" />
                <span>Same-Day Dispatch</span>
              </div>
            </div>
          </div>

          {/* Column 2: Top Brands Gurgaon (id="brands") (3 cols) */}
          <div id="brands" className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
              <span>TOP BRANDS GURGAON</span>
            </h3>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {topBrands.map((brand, i) => (
                <li key={i} className="flex items-start gap-1.5 hover:text-[#84cc16] transition-colors cursor-pointer">
                  <span className="text-slate-600 select-none">›</span>
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Categories (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
              <span>CATEGORIES</span>
            </h3>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {categories.map((cat, i) => (
                <li key={i} className="flex items-start gap-1.5 hover:text-[#84cc16] transition-colors cursor-pointer">
                  <span className="text-slate-600 select-none">›</span>
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Gurgaon Express Hubs (id="locations") (3 cols) */}
          <div id="locations" className="lg:col-span-3 space-y-3">
            <h3 className="text-white font-extrabold text-xs tracking-wider uppercase flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#84cc16]" />
              <span>GURGAON EXPRESS HUBS</span>
            </h3>
            <ul className="space-y-1.5 text-[11px] text-slate-400">
              {expressHubs.map((hub, i) => (
                <li key={i} className="flex items-start gap-1.5 hover:text-[#84cc16] transition-colors cursor-pointer">
                  <MapPin className="w-3 h-3 text-[#84cc16] shrink-0 mt-0.5" />
                  <span>{hub.name}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* =========================================================================
            ROW 2: Trending Gurgaon Vape Searches (id="blog")
            ========================================================================= */}
        <div id="blog" className="pt-6 border-t border-[#162e47] space-y-3">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-300">
            TRENDING GURGAON VAPE SEARCHES <span className="text-[#84cc16]">• 100% Authentic Stock</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {trendingSearches.map((term, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-md bg-[#102336] border border-[#1b3a5b] text-[10px] text-slate-400 hover:text-white hover:border-[#84cc16] transition shadow-2xs"
              >
                {term}
              </span>
            ))}
          </div>
        </div>

        {/* =========================================================================
            ROW 3: Mandatory Age Restriction Notice (id="contact")
            ========================================================================= */}
        <div id="contact" className="rounded-xl bg-[#102336]/60 border border-amber-500/30 p-4 sm:p-5 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wide">
            <AlertTriangle className="w-4 h-4 shrink-0" />
            <span>MANDATORY AGE RESTRICTION NOTICE (STRICTLY 18+ ONLY)</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed font-normal">
            Nicotine is an addictive chemical. All products cataloged on this website are exclusively intended for existing adult nicotine consumers and smokers of legal adult age (18 years or older). Age and identity verification are strictly required upon doorstep delivery. Keep strictly out of reach of children and pets.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4 text-[10px] text-slate-400 border-t border-[#1b3a5b]/60">
            <span>
              <strong>Store Address:</strong> {seoConfig.address.streetAddress}, {seoConfig.address.addressLocality}, {seoConfig.address.addressRegion} - {seoConfig.address.postalCode}
            </span>
            <span className="flex items-center gap-1">
              <a
                href={`https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
                  "Hi, I want to inquire about vape delivery in Gurgaon."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#84cc16] hover:underline font-bold"
              >
                WhatsApp Chat: +91 {seoConfig.whatsappNumber.slice(2)}
              </a>
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#84cc16]" />
              <a href={`mailto:${seoConfig.email}`} className="hover:text-white transition">
                {seoConfig.email}
              </a>
            </span>
          </div>
        </div>

        {/* =========================================================================
            ROW 4: Bottom Bar (Copyright, Navigation, Live Dispatch Status)
            ========================================================================= */}
        <div className="pt-6 border-t border-[#162e47] flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2026 {seoConfig.shortName}. All rights reserved. Gurgaon&apos;s #1 Most Trusted Authentic Vape Destination.
          </div>

          {/* Quick Links Matching Navbar */}
          <div className="flex items-center gap-4 font-semibold text-slate-300">
            <Link href="/" className="hover:text-[#84cc16] transition-colors">
              Home
            </Link>
            <Link href="/#products" className="hover:text-[#84cc16] transition-colors">
              Products
            </Link>
            <Link href="/#brands" className="hover:text-[#84cc16] transition-colors">
              Brands
            </Link>
            <Link href="/locations" className="hover:text-[#84cc16] transition-colors">
              Locations
            </Link>
            <Link href="/blog" className="hover:text-[#84cc16] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#84cc16] transition-colors">
              Contact
            </Link>
          </div>

          {/* Dispatch Live Pill */}
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-300 bg-[#102336] px-3 py-1 rounded-full border border-[#1b3a5b]">
            <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
            <span>Same-Day GGN Dispatch Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
