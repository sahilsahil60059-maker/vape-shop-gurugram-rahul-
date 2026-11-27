import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/config/seo";
import {
  ArrowLeft,
  ChevronRight,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Truck,
  Package,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Vape Shop Gurgaon | Store Location & WhatsApp Support",
  description:
    "Get in touch with Vape Shop Gurgaon. Instant WhatsApp order support, store location at 2, 1st Street, Basai Village, Sector 37C, and 30-60 mins doorstep delivery across Gurugram.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/contact`,
  },
  openGraph: {
    title: "Contact Vape Shop Gurgaon | Store Location & WhatsApp Support",
    description:
      "Instant WhatsApp order support, store location at 2, 1st Street, Basai Village, Sector 37C, and 30-60 mins express delivery across Gurgaon.",
    url: `${seoConfig.siteUrl}/contact`,
    type: "website",
  },
};

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
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

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi Vape Shop Gurgaon, I want to inquire about vape availability and instant delivery."
  )}`;

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "2, 1st Street, Basai Village, Sector 37C, Gurugram, Haryana 122001, India"
  )}`;

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Vape Shop Gurgaon",
    "url": `${seoConfig.siteUrl}/contact`,
    "description": "Fastest way to reach Vape Shop Gurgaon is WhatsApp. Store located at 2, 1st Street, Basai Village, Sector 37C, Gurugram.",
    "mainEntity": {
      "@type": "VapeStore",
      "name": seoConfig.shortName,
      "telephone": seoConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": seoConfig.address.streetAddress,
        "addressLocality": seoConfig.address.addressLocality,
        "addressRegion": seoConfig.address.addressRegion,
        "postalCode": seoConfig.address.postalCode,
        "addressCountry": seoConfig.address.addressCountry,
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          "opens": "10:00",
          "closes": "23:30",
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#f8fafc] min-h-screen text-[#192e42] py-6 sm:py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-700">Contact</span>
          </nav>

          {/* Page Header Matching Reference Image 2 */}
          <div className="space-y-1.5">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#192e42] tracking-tight">
              Contact <span className="text-[#84cc16]">Vape Shop Gurgaon</span>
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Fastest way to reach us is WhatsApp — instant replies during business hours.
            </p>
          </div>

          {/* 2 Primary Side-by-Side Cards Matching Reference Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            
            {/* Card 1: WhatsApp Support (Strictly NO call button) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#84cc16] hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Direct Messaging
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#192e42]">
                  Order on WhatsApp
                </h2>
                <div className="text-sm sm:text-base font-bold text-slate-600 pt-1">
                  +91 {seoConfig.whatsappNumber.slice(2)}
                </div>
              </div>

              <div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-sm tracking-wide shadow-sm hover:shadow-md transition active:scale-95"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Card 2: Store Address */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 shadow-2xs hover:border-[#84cc16] hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                  Flagship Store
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#192e42]">
                  Store address
                </h2>
                <div className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 space-y-1">
                  <p className="flex items-start gap-1.5">
                    <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      {seoConfig.address.streetAddress}, {seoConfig.address.addressLocality}, {seoConfig.address.addressRegion} {seoConfig.address.postalCode}, India
                    </span>
                  </p>
                  <p className="flex items-center gap-1.5 text-slate-500 pt-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Hours: Mon–Sun, 10:00 AM – 11:30 PM</span>
                  </p>
                </div>
              </div>

              <div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-emerald-700 hover:text-[#192e42] transition"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Service Areas Section Matching Reference Image */}
          <div className="space-y-3 pt-4">
            <h2 className="text-lg sm:text-xl font-black text-[#192e42]">
              Service areas
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              We deliver across Gurgaon — DLF Phase 1, Phase 2, Phase 3, Phase 4, Phase 5, Cyber City & Cyber Hub, Golf Course Road, Golf Course Extension Road, Sohna Road, Sector 29, Sector 43, Sector 56, Sector 14, Nirvana Country, South City 1 & 2, Palam Vihar, and all Gurgaon pin codes with 30 to 60 minutes express same-day courier dispatch.
            </p>
          </div>

          {/* 3 Trust Badges Row Matching Reference Image */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
            
            {/* Badge 1 */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-slate-300 transition space-y-1">
              <div className="flex items-center gap-2 text-[#192e42] font-black text-xs sm:text-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine QR Codes</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-6 font-normal">
                Zero counterfeit guarantee
              </p>
            </div>

            {/* Badge 2 */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-slate-300 transition space-y-1">
              <div className="flex items-center gap-2 text-[#192e42] font-black text-xs sm:text-sm">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>30-60 Mins GGN Delivery</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-6 font-normal">
                Same-day express dispatch
              </p>
            </div>

            {/* Badge 3 */}
            <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-slate-300 transition space-y-1">
              <div className="flex items-center gap-2 text-[#192e42] font-black text-xs sm:text-sm">
                <Package className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Discreet Packaging</span>
              </div>
              <p className="text-[11px] text-slate-500 pl-6 font-normal">
                Completely unbranded boxes
              </p>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}
