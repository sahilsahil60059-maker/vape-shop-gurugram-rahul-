"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Desktop Landscape Banners (2120 x 742)
const desktopSlides = [
  {
    src: "/image/Gurugram Vape Devices Information Banner.png",
    alt: "Vape Shop Gurgaon - 30 Min Express Delivery Information Banner",
  },
  {
    src: "/image/Vape Devices in Gurugram.png",
    alt: "Vape Devices in Gurugram - Same Day Express Delivery",
  },
  {
    src: "/image/Vape Devices_ Information & Awareness.png",
    alt: "Vape Devices Information and Adult Awareness Banner",
  },
];

// Mobile Portrait Banners (1112 x 1415 - specially crafted for mobile screens)
const mobileSlides = [
  {
    src: "/image/Gurugram Vape Devices Product Showcase.png",
    alt: "Gurugram Vape Devices Product Showcase - Top Disposables & Pods",
  },
  {
    src: "/image/Vape Devices in Gurugram Plaza.png",
    alt: "Vape Devices in Gurugram Plaza - Premium Local Vape Store",
  },
  {
    src: "/image/Vape Devices_ Information & Awareness.png",
    alt: "Vape Devices Information and Adult Awareness Banner",
  },
];

export function BannerSlider() {
  const [desktopIndex, setDesktopIndex] = useState(0);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Desktop Slider Navigation
  const nextDesktop = useCallback(() => {
    setDesktopIndex((prev) => (prev + 1) % desktopSlides.length);
  }, []);

  const prevDesktop = useCallback(() => {
    setDesktopIndex((prev) => (prev - 1 + desktopSlides.length) % desktopSlides.length);
  }, []);

  // Mobile Slider Navigation
  const nextMobile = useCallback(() => {
    setMobileIndex((prev) => (prev + 1) % mobileSlides.length);
  }, []);

  const prevMobile = useCallback(() => {
    setMobileIndex((prev) => (prev - 1 + mobileSlides.length) % mobileSlides.length);
  }, []);

  // Auto-Slide Timer (3.8s)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextDesktop();
      nextMobile();
    }, 3800);
    return () => clearInterval(interval);
  }, [isPaused, nextDesktop, nextMobile]);

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-50"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Vape Shop Gurgaon Hero Promotional Banners"
    >
      {/* =========================================================================
          1. DESKTOP VIEWPORT: For screens md and above (>= 768px)
          Uses ultra-wide 2120x742 landscape banners edge-to-edge
          ========================================================================= */}
      <div className="hidden md:block relative w-full aspect-[2120/742] min-h-[340px] max-h-[640px]">
        {desktopSlides.map((slide, index) => {
          const isActive = index === desktopIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-contain sm:object-cover w-full h-full select-none"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Desktop Controls */}
        <button
          onClick={prevDesktop}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#192e42]/85 hover:bg-[#192e42] text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
          aria-label="Previous Desktop Banner"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextDesktop}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#192e42]/85 hover:bg-[#192e42] text-white flex items-center justify-center border border-white/20 transition-all hover:scale-110 active:scale-95 shadow-xl"
          aria-label="Next Desktop Banner"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Desktop Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-[#0f1d2b]/70 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
          {desktopSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setDesktopIndex(dotIndex)}
              className={`transition-all duration-300 rounded-full ${
                dotIndex === desktopIndex
                  ? "w-8 h-2.5 bg-[#84cc16]"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to desktop slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>

      {/* =========================================================================
          2. MOBILE VIEWPORT: For screens below md (< 768px)
          Uses portrait 1112x1415 banners designed specifically for mobile screens
          Edge-to-edge, zero black bars on the sides, full height and crystal clear!
          ========================================================================= */}
      <div className="block md:hidden relative w-full aspect-[1112/1415] min-h-[380px] max-h-[580px]">
        {mobileSlides.map((slide, index) => {
          const isActive = index === mobileIndex;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={index === 0}
                className="object-cover w-full h-full select-none"
                sizes="100vw"
              />
            </div>
          );
        })}

        {/* Mobile Controls */}
        <button
          onClick={prevMobile}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#192e42]/85 text-white flex items-center justify-center border border-white/20 active:scale-90 shadow-md"
          aria-label="Previous Mobile Banner"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextMobile}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#192e42]/85 text-white flex items-center justify-center border border-white/20 active:scale-90 shadow-md"
          aria-label="Next Mobile Banner"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Mobile Dots */}
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 bg-[#0f1d2b]/80 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10 shadow-md">
          {mobileSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              onClick={() => setMobileIndex(dotIndex)}
              className={`transition-all duration-300 rounded-full ${
                dotIndex === mobileIndex
                  ? "w-6 h-2 bg-[#84cc16]"
                  : "w-2 h-2 bg-white/50"
              }`}
              aria-label={`Go to mobile slide ${dotIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
