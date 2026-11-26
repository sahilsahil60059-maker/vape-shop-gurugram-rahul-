import { Metadata } from "next";
import Link from "next/link";
import { seoConfig } from "@/config/seo";
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
  title: "Vape Shop Gurgaon Locations | Store Locations & 30-Min Express Hubs",
  description:
    "Explore Vape Shop Gurgaon delivery hubs across DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, and all 115+ sectors. Guaranteed 25-45 mins doorstep courier dispatch.",
  alternates: {
    canonical: `${seoConfig.siteUrl}/locations`,
  },
  openGraph: {
    title: "Vape Shop Gurgaon Locations — Store Locations & Express Hubs",
    description:
      "Rapid 25-45 minutes express vape delivery across 12 dedicated Gurgaon corridors. 100% genuine QR-verified vapes & discreet packaging.",
    url: `${seoConfig.siteUrl}/locations`,
    siteName: seoConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${seoConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Vape Shop Gurgaon Locations - Same Day Express Hubs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Gurgaon Locations | Express Hubs",
    description:
      "Rapid 25-45 mins doorstep vape delivery across DLF, Cyber City, Golf Course Road & all Gurugram sectors.",
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

interface HubItem {
  id: string;
  name: string;
  timing: string;
  subHub: string;
  description: string;
  pincodes: string[];
  keyAreas: string;
}

const gurgaonHubs: HubItem[] = [
  {
    id: "dlf-phase-1-5",
    name: "DLF Phase 1-5",
    timing: "20 - 35 Minutes",
    subHub: "Galleria Market & Cyber Hub Express Line",
    description:
      "Looking for a verified authentic vape shop in DLF Phase 1, 2, 3, 4, or 5? Vape Shop Gurgaon provides lightning-fast 20 to 35 minutes doorstep delivery for all premium disposables and pods.",
    pincodes: ["122002", "122008", "122009"],
    keyAreas: "Galleria Market, Supermart 1 & 2, Hamilton Court, DLF Club 5, Arjun Marg, Sikanderpur, Phase 1 to 5",
  },
  {
    id: "cyber-city",
    name: "Cyber City & Cyber Hub",
    timing: "20 - 30 Minutes",
    subHub: "Cyber City Corporate Dispatch Hub",
    description:
      "Fast delivery directly to DLF Cyber City corporate towers, Cyber Green, Infinity Towers, and Belvedere Park with plain, discreet packaging and quick doorstep handover.",
    pincodes: ["122002", "122008"],
    keyAreas: "Building 5, 8, 10, 14, Belvedere Towers, Cyber Hub Boulevard, DLF Phase 2 Metro, Gateway Tower",
  },
  {
    id: "golf-course-road",
    name: "Golf Course Road",
    timing: "25 - 35 Minutes",
    subHub: "One Horizon Center Dispatch Corridor",
    description:
      "Serving high-end luxury residences and commercial hubs along Golf Course Road with 100% genuine QR-verified vapes, coils, and international e-liquids.",
    pincodes: ["122002", "122003", "122011"],
    keyAreas: "One Horizon Center, DLF Magnolias, Aralias, Camellias, Sector 42-43 Metro, Central Park 1, Genpact Chowk",
  },
  {
    id: "golf-course-extension",
    name: "Golf Course Extension",
    timing: "30 - 40 Minutes",
    subHub: "Sector 56-65 Express Corridor",
    description:
      "Rapid delivery across Golf Course Extension road societies, M3M Urbana, Worldmark Gurugram, and Sector 56 Huda Market with real-time rider tracking.",
    pincodes: ["122011", "122101", "122102"],
    keyAreas: "M3M Golfestate, Pioneer Urban, Worldmark, IREO Grand Arch, Sector 56 Market, Sector 62, Sector 65",
  },
  {
    id: "sector-29",
    name: "Sector 29 Market",
    timing: "25 - 35 Minutes",
    subHub: "Sector 29 Entertainment Hub",
    description:
      "Delivering to Sector 29 market, dining avenues, hotels, and Leisure Valley park vicinity with instant 25-minute dispatch and UPI / Cash on Delivery payments.",
    pincodes: ["122001", "122002"],
    keyAreas: "Sector 29 Market, Leisure Valley, Kingdom of Dreams Area, IFFCO Chowk, Sector 28, Crown Plaza Area",
  },
  {
    id: "sector-43-44",
    name: "Sector 43 & 44",
    timing: "25 - 35 Minutes",
    subHub: "Millennium City Centre Dispatch",
    description:
      "Convenient same-day delivery around Huda City Centre metro, Sector 43 residential societies, Sushant Lok blocks, and corporate institutions in Sector 44.",
    pincodes: ["122002", "122003"],
    keyAreas: "Millennium City Metro, Sector 43, Sector 44 Institutional Area, Fortis Hospital Area, Sushant Lok 1",
  },
  {
    id: "sohna-road",
    name: "Sohna Road",
    timing: "30 - 45 Minutes",
    subHub: "Subhash Chowk & Sector 48-49 Hub",
    description:
      "Prompt vape delivery to premier residential societies along Sohna Road, Vipul Greens, Tatvam Villas, and commercial hubs like Spaze I-Tech Park.",
    pincodes: ["122018", "122001"],
    keyAreas: "Subhash Chowk, Vatika City, Vipul Greens, Sector 47, 48, 49, Spaze I-Tech, Malibu Towne, Central Park 2",
  },
  {
    id: "mg-road",
    name: "MG Road Area",
    timing: "25 - 35 Minutes",
    subHub: "MG Road Mall Corridor Express",
    description:
      "Ultra-fast delivery to residential complexes on MG Road, Beverly Park, Essel Towers, Heritage City, and all shopping malls along the yellow line corridor.",
    pincodes: ["122002", "122001"],
    keyAreas: "Essel Towers, Beverly Park 1 & 2, Heritage City, MGF Metropolitan, Sikanderpur, IFFCO Chowk Metro",
  },
  {
    id: "sushant-lok",
    name: "Sushant Lok 1-2",
    timing: "25 - 35 Minutes",
    subHub: "Sushant Lok Residential Hub",
    description:
      "Discreet and fast delivery to Sushant Lok Phase 1, Phase 2, and adjoining blocks near Vyapar Kendra, Gold Souk Mall, and Sector 52/57.",
    pincodes: ["122002", "122003", "122011"],
    keyAreas: "Vyapar Kendra, Gold Souk, Block A, B, C, Sector 52, Ardee City, Sushant Lok 2, Sector 57 Market",
  },
  {
    id: "nirvana-country",
    name: "Nirvana Country",
    timing: "30 - 40 Minutes",
    subHub: "South City 2 & Nirvana Hub",
    description:
      "Express courier coverage for gated villa communities in Nirvana Country, South City 2, Fresco, and Baani Square with 100% genuine QR-verified stock.",
    pincodes: ["122018", "122003"],
    keyAreas: "Nirvana Country Villas, South City 2, Baani Square, Unitech Fresco, Sector 50, Sector 51, Mayfield Gardens",
  },
  {
    id: "ambience-island",
    name: "Ambience Island",
    timing: "25 - 35 Minutes",
    subHub: "Ambience Lagoon & NH-8 Express",
    description:
      "Delivery to Ambience Mall residences, Leela Hotel vicinity, Belvedere Park, and luxury apartments located right on the Delhi-Gurgaon NH-8 border.",
    pincodes: ["122002"],
    keyAreas: "Ambience Lagoon, The Leela Ambience, DLF Gateway Tower, NH-8 Border, Shankar Chowk, Toll Plaza Vicinity",
  },
  {
    id: "new-gurgaon",
    name: "New Gurgaon (Sec 82-95)",
    timing: "40 - 55 Minutes",
    subHub: "Dwarka Expressway & New Gurgaon Hub",
    description:
      "Dedicated courier route reaching New Gurgaon townships including Vatika India Next, Town Square, Sector 82, 83, 84, 90, and Dwarka Expressway societies.",
    pincodes: ["122004", "122051", "122505"],
    keyAreas: "Vatika India Next, Town Square, Sector 82, 83, 84, 86, 90, 95, Sapphire 83, Sector 82A, Rampura",
  },
];

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
    itemListElement: gurgaonHubs.map((hub, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${hub.name} Vape Delivery Hub`,
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

        {/* Page Header Matching Reference Image */}
        <div className="space-y-3 max-w-3xl">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs">
            <Zap className="w-3.5 h-3.5 text-[#84cc16] fill-current" />
            <span>Local Express Hub Network</span>
            <span className="text-slate-400">•</span>
            <span className="text-emerald-700 font-bold">12 Active Gurgaon Corridors</span>
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
            We operate dedicated local logistics hubs across Gurugram to guarantee 25 to 45 minutes doorstep courier delivery. Select your neighborhood below to view specific pincode coverage, estimated dispatch times, and available inventory.
          </p>
        </div>

        {/* 12 Locations Grid Matching User Reference Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {gurgaonHubs.map((hub) => {
            const whatsappHubUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
              `Hi, I want to order vape delivery to ${hub.name}, Gurgaon.`
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
                      {hub.name}
                    </h2>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full shrink-0">
                      <Clock className="w-3 h-3" />
                      <span>{hub.timing}</span>
                    </span>
                  </div>

                  {/* Sub-Hub Location */}
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                    <MapPin className="w-3.5 h-3.5 text-[#84cc16] shrink-0" />
                    <span>{hub.subHub}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {hub.description}
                  </p>

                  {/* Pincodes Covered */}
                  <div className="space-y-1 pt-1">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      PINCODES COVERED:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.pincodes.map((pin) => (
                        <span
                          key={pin}
                          className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] font-semibold rounded"
                        >
                          {pin}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Areas */}
                  <div className="space-y-0.5 pt-1">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      KEY AREAS:
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      {hub.keyAreas}
                    </p>
                  </div>
                </div>

                {/* Bottom Action: WhatsApp Fast Order Button */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between gap-3">
                  <a
                    href={whatsappHubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-[#192e42] hover:text-emerald-700 transition flex items-center gap-1"
                  >
                    <span>Explore Hub</span>
                    <span>&rarr;</span>
                  </a>

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
              <Truck className="w-4 h-4 text-[#84cc16]" />
              <span>Full Gurugram Coverage Guarantee</span>
            </div>
            <h3 className="text-base sm:text-lg font-black text-[#192e42]">
              Need delivery to a specific gated society or sector not listed above?
            </h3>
            <p className="text-xs text-slate-600">
              Our delivery fleet covers all 115+ sectors of Gurgaon with real-time dispatch and doorstep Cash on Delivery or UPI payments.
            </p>
          </div>

          <a
            href={`https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hi, I want to share my location for instant vape delivery in Gurgaon."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs sm:text-sm shadow-md transition active:scale-95 shrink-0"
          >
            <WhatsAppIcon className="w-4 h-4 fill-[#0f1d2b]" />
            <span>Share Location on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
