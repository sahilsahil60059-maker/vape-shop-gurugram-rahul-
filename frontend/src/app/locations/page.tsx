import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/config/seo";
import { gurgaon50Locations } from "@/config/locations";
import {
  MapPin,
  Clock,
  ArrowLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Truck,
  CheckCircle2,
} from "lucide-react";
import type { BreadcrumbList, ItemList, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Vape Shop Gurgaon Locations | 125+ Sector Hubs (30-Min Delivery)",
  description:
    "Explore Vape Shop Gurgaon delivery hubs across 125+ sectors including DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, and all Gurgaon pin codes. 20-45 mins doorstep delivery.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/locations`,
  },
  openGraph: {
    title: "Vape Shop Gurgaon Locations — 125+ Sector Hubs & Express Delivery",
    description:
      "Rapid 20-45 minutes express vape delivery across 125 dedicated Gurgaon corridors. 100% genuine QR-verified vapes & discreet packaging.",
    url: `${seoConfig.siteUrl}/locations`,
    siteName: seoConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${seoConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Vape Shop Gurgaon Locations - 125+ Express Hubs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Gurgaon Locations | 125+ Express Hubs",
    description:
      "Rapid 20-45 mins doorstep vape delivery across 125+ Gurgaon sectors and corridors.",
    images: [`${seoConfig.siteUrl}/og-image.jpg`],
  },
};

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

export default function LocationsPage() {
  const breadcrumbsSchema: WithContext<BreadcrumbList> = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: seoConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gurgaon Locations",
        item: `${seoConfig.siteUrl}/locations`,
      },
    ],
  };

  const itemListSchema: WithContext<ItemList> = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vape Shop Gurgaon Delivery Hubs",
    itemListElement: gurgaon50Locations.map((hub, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Vape Shop in ${hub.name}`,
      url: `${seoConfig.siteUrl}/locations/${hub.slug}`,
      description: hub.description,
    })),
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#192e42] py-6 sm:py-10">
      {/* Schema.org Injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-700">Gurgaon Locations</span>
        </nav>

        {/* Page Header */}
        <div className="space-y-3 max-w-3xl">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#84cc16] fill-current" />
            <span>Local Express Hub Network</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-bold">125 Active Gurgaon Corridors &amp; Sectors</span>
          </div>

          {/* Primary SEO H1 */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#192e42] tracking-tight leading-tight">
            Vape Shop Gurgaon —{" "}
            <span className="text-[#84cc16]">
              Store Locations &amp; Express Hubs
            </span>
          </h1>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            We operate 125 dedicated local logistics corridors across Gurugram to guarantee 15 to 45 minutes doorstep courier delivery. Select your neighborhood below to view specific pincode coverage, estimated dispatch times, and available inventory.
          </p>
        </div>

        {/* 50 Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {gurgaon50Locations.map((hub) => {
            const whatsappHubUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hi, I want to order vape delivery to ${hub.name} (PIN: ${hub.pincode}).`
            )}`;

            return (
              <article
                key={hub.id}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#84cc16] hover:shadow-md transition-all duration-200 shadow-2xs flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top Line: Title & Time Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <h2 className="text-base sm:text-lg font-black text-[#192e42] tracking-tight">
                      <Link href={`/locations/${hub.slug}`} className="hover:text-emerald-700 transition">
                        {hub.name}
                      </Link>
                    </h2>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{hub.dispatchTime}</span>
                    </span>
                  </div>

                  {/* Sub-Hub Location */}
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                    <span>PIN Code: {hub.pincode}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {hub.description}
                  </p>

                  {/* Key Hotspots */}
                  <div className="space-y-1 pt-1">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      KEY HOTSPOTS COVERED:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.hotspots.map((hotspot, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 text-[11px] font-semibold rounded"
                        >
                          {hotspot}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Range */}
                  <div className="space-y-0.5 pt-1">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      SERVICE RANGE:
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {hub.deliveryRange}
                    </p>
                  </div>
                </div>

                {/* Bottom Action: Explore Page & WhatsApp Fast Order Button */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <Link
                    href={`/locations/${hub.slug}`}
                    className="text-xs font-bold text-[#192e42] hover:text-emerald-700 transition flex items-center gap-1"
                  >
                    <span>View Sector Page</span>
                    <span>&rarr;</span>
                  </Link>

                  <a
                    href={whatsappHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs shadow-2xs transition active:scale-95"
                    aria-label={`Order vape delivery to ${hub.name} on WhatsApp`}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5 fill-[#0f1d2b]" />
                    <span>Order Now</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Coverage Note Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-emerald-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Don&apos;t See Your Specific Sector Listed?</span>
            </div>
            <p className="text-xs text-slate-600">
              We deliver to every residential society, corporate tech park, farm, and hotel across Gurugram pin codes (122001 to 122505).
            </p>
          </div>

          <a
            href={`https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hi, I want to confirm if you deliver to my location in Gurgaon."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs shadow-sm transition active:scale-95 shrink-0 text-center"
          >
            Check My Location on WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}
