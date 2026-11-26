import Link from "next/link";
import Image from "next/image";
import { seoConfig } from "@/config/seo";
import { MapPin, Zap } from "lucide-react";

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

export function Navbar() {
  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    seoConfig.whatsappMessage
  )}`;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* Top Bar Announcement - Compact Height */}
      <div className="bg-[#0c1824] border-b border-[#1b3147] text-zinc-300 text-[11px] sm:text-xs py-1 px-4 text-center flex items-center justify-center gap-2">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
        <span className="font-medium text-white">
          Same Day Express Delivery in Gurgaon <span className="text-zinc-400">(Within 30-60 Mins)</span> • 100% Original Authentic
        </span>
      </div>

      {/* Main Navbar - Compact Height (h-14 sm:h-16) with #192e42 background */}
      <div className="bg-[#192e42] border-b border-[#223d57]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between">
          
          {/* Logo using the user's uploaded logo image */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Vape Shop Gurgaon Home">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/20 shadow-md bg-[#0a1520] shrink-0">
              <Image
                src="/logo.png"
                alt="Vape Shop Gurgaon Official Logo"
                fill
                priority
                className="object-cover object-center"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white leading-none">
                VAPE SHOP
              </span>
              <span className="text-[10px] text-[#84cc16] font-bold tracking-[0.2em] uppercase leading-none mt-1">
                GURGAON
              </span>
            </div>
          </Link>

          {/* Exact Tabs Requested by User: Home, Products, Brands, Locations, Blog, Contact */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-semibold text-zinc-200">
            <a href="#hero" className="hover:text-[#84cc16] transition-colors py-1">
              Home
            </a>
            <a href="#products" className="hover:text-[#84cc16] transition-colors py-1">
              Products
            </a>
            <a href="#brands" className="hover:text-[#84cc16] transition-colors py-1">
              Brands
            </a>
            <Link href="/locations" className="hover:text-[#84cc16] transition-colors py-1">
              Locations
            </Link>
            <Link href="/blog" className="hover:text-[#84cc16] transition-colors py-1">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-[#84cc16] transition-colors py-1">
              Contact
            </Link>
          </nav>

          {/* Right Action Elements: Compact Location Pill + WhatsApp Button */}
          <div className="flex items-center gap-2.5">
            {/* Location Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0f2030] border border-[#2b4b6d] text-xs font-medium text-zinc-200 shadow-inner">
              <MapPin className="w-3.5 h-3.5 text-[#84cc16]" />
              <span>
                Delivering to <strong className="text-white font-bold">Gurgaon</strong>
              </span>
            </div>

            {/* Neon Green WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs sm:text-sm shadow-md shadow-[#84cc16]/20 transition-all transform hover:scale-[1.02] active:scale-95"
              aria-label="Order on WhatsApp"
            >
              <WhatsAppIcon className="w-4 h-4 fill-[#0f1d2b]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
}
