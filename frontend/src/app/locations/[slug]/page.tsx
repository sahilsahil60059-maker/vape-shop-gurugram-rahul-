import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { gurgaon50Locations, LocationHub } from "@/config/locations";
import { allProducts } from "@/config/products";
import { seoConfig } from "@/config/seo";
import {
  MapPin,
  Clock,
  ShieldCheck,
  Truck,
  Package,
  CheckCircle2,
  ArrowLeft,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return gurgaon50Locations.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const loc = gurgaon50Locations.find((l) => l.slug === slug);

  if (!loc) {
    return {
      title: "Location Not Found | Vape Shop Gurgaon",
    };
  }

  const title = `Vape Shop in ${loc.shortName} Gurgaon | ${loc.dispatchTime} Delivery`;
  const description = `Looking for an authentic vape shop near ${loc.shortName} Gurugram? Buy genuine disposable vapes (Elf Bar, Lost Mary, iGET) & pod kits with ${loc.dispatchTime} delivery to PIN ${loc.pincode}. COD/UPI.`;
  const canonicalUrl = `${seoConfig.siteUrl}/locations/${loc.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [
        {
          url: `${seoConfig.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: `Vape Shop delivery in ${loc.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${seoConfig.siteUrl}/og-image.jpg`],
    },
  };
}

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

export default async function LocationDetailPage({ params }: Props) {
  const { slug } = await params;
  const loc = gurgaon50Locations.find((l) => l.slug === slug);

  if (!loc) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi Vape Shop Gurgaon, I want to order authentic vapes for express delivery to ${loc.shortName} (PIN: ${loc.pincode}).`
  )}`;

  // Related products preview (top 6 bestsellers)
  const featuredProducts = allProducts.slice(0, 6);

  // Other nearby locations for internal SEO linking
  const nearbyLocations = gurgaon50Locations
    .filter((l) => l.slug !== loc.slug)
    .slice(0, 8);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VapeStore",
    "@id": `${seoConfig.siteUrl}/locations/${loc.slug}/#store`,
    "name": `Vape Shop ${loc.shortName} - Fast Delivery`,
    "alternateName": `Vape Store Near Me ${loc.shortName}`,
    "url": `${seoConfig.siteUrl}/locations/${loc.slug}`,
    "telephone": seoConfig.phone,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash on Delivery, UPI, Net Banking",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${loc.deliveryRange}, ${loc.shortName}`,
      "addressLocality": "Gurgaon",
      "addressRegion": "Haryana",
      "postalCode": loc.pincode,
      "addressCountry": "IN",
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": loc.name,
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "28",
      "bestRating": "5",
      "worstRating": "1",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": seoConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Locations",
        "item": `${seoConfig.siteUrl}/locations`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": loc.shortName,
        "item": `${seoConfig.siteUrl}/locations/${loc.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <div className="bg-[#f8fafc] min-h-screen text-[#192e42] py-5 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/locations" className="hover:text-emerald-700 transition">
              Locations
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-700">{loc.shortName}</span>
          </nav>

          {/* Hero Header Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800">
                <span className="w-2 h-2 rounded-full bg-[#84cc16] animate-pulse" />
                <span>Express {loc.dispatchTime} Delivery</span>
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-600 text-xs font-semibold">
                PIN: {loc.pincode}
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#192e42] tracking-tight">
                Vape Shop in <span className="text-[#84cc16]">{loc.name}</span>
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-3xl">
                {loc.description}
              </p>
            </div>

            {/* CTA & Delivery Highlights */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-sm tracking-wide shadow-sm hover:shadow-md transition active:scale-95"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Order on WhatsApp for {loc.shortName}</span>
              </a>

              <Link
                href="/#products"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#192e42] text-xs font-bold border border-slate-300 transition"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#84cc16]" />
                <span>Browse Full 52+ Catalog</span>
              </Link>
            </div>
          </div>

          {/* Delivery Coverage & Hotspots Matrix */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Card 1: Key Hotspots */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2">
              <h2 className="text-sm font-black text-[#192e42] uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-600" />
                <span>Covered Hotspots &amp; Landmarks in {loc.shortName}</span>
              </h2>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {loc.hotspots.map((h, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs text-slate-700 font-medium"
                  >
                    📍 {h}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2: Coverage Areas */}
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-2">
              <h2 className="text-sm font-black text-[#192e42] uppercase tracking-wider flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-600" />
                <span>Doorstep Service Range</span>
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {loc.deliveryRange}. Orders are packed in 100% plain, tamper-evident discreet packaging with zero branding on the outer box.
              </p>
            </div>

          </div>

          {/* 4 Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-white border border-slate-200 rounded-xl p-3 text-center space-y-0.5 shadow-2xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto" />
              <div className="text-xs font-black text-[#192e42]">100% Authentic</div>
              <div className="text-[10px] text-slate-500">Scannable QR codes</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 text-center space-y-0.5 shadow-2xs">
              <Clock className="w-4 h-4 text-emerald-600 mx-auto" />
              <div className="text-xs font-black text-[#192e42]">{loc.dispatchTime}</div>
              <div className="text-[10px] text-slate-500">Express delivery</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 text-center space-y-0.5 shadow-2xs">
              <Package className="w-4 h-4 text-emerald-600 mx-auto" />
              <div className="text-xs font-black text-[#192e42]">Discreet Box</div>
              <div className="text-[10px] text-slate-500">Plain sealed parcel</div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-3 text-center space-y-0.5 shadow-2xs">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
              <div className="text-xs font-black text-[#192e42]">COD &amp; UPI</div>
              <div className="text-[10px] text-slate-500">Pay upon delivery</div>
            </div>
          </div>

          {/* Featured Vapes Available for Delivery in Location */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black text-[#192e42]">
                Popular Vapes Ready for Dispatch to {loc.shortName}
              </h2>
              <Link href="/#products" className="text-xs font-bold text-emerald-700 hover:underline">
                View All &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {featuredProducts.map((p) => (
                <div
                  key={p.id}
                  className="bg-white border border-slate-200 rounded-xl p-2.5 shadow-2xs hover:border-[#84cc16] hover:shadow-sm transition flex flex-col justify-between space-y-2 group"
                >
                  <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-50">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain p-2 group-hover:scale-105 transition"
                      sizes="(max-width: 768px) 50vw, 20vw"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="text-[10px] text-slate-400 font-bold uppercase">{p.brand}</div>
                    <Link
                      href={`/products/${p.slug}`}
                      className="text-xs font-bold text-[#192e42] line-clamp-2 hover:text-emerald-700 transition"
                    >
                      {p.name}
                    </Link>
                    <div className="text-xs font-black text-emerald-700">{p.priceFormatted}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Gurgaon Locations Network */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs space-y-2.5">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Nearby Gurgaon Delivery Corridors
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearbyLocations.map((near) => (
                <Link
                  key={near.slug}
                  href={`/locations/${near.slug}`}
                  className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#84cc16] text-xs font-semibold text-slate-700 transition shadow-2xs"
                >
                  Vape Shop in {near.shortName}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
