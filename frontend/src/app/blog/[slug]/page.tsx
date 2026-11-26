import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { all20Blogs, BlogPost } from "@/config/blogs";
import { seoConfig } from "@/config/seo";
import {
  ArrowLeft,
  ChevronRight,
  Clock,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Sparkles,
} from "lucide-react";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return all20Blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = all20Blogs.find((b) => b.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Vape Shop Gurgaon",
    };
  }

  const title = `${post.title} | Vape Shop Gurgaon`;
  const description = post.excerpt;
  const canonicalUrl = `${seoConfig.siteUrl}/blog/${post.slug}`;

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
      type: "article",
      images: [
        {
          url: `${seoConfig.siteUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
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

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = all20Blogs.find((b) => b.slug === slug);

  if (!post) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi Vape Shop Gurgaon, I was reading your guide "${post.title}" and would like product recommendations.`
  )}`;

  const otherBlogs = all20Blogs
    .filter((b) => b.slug !== post.slug)
    .slice(0, 4);

  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": "2026-11-20T10:00:00+05:30",
    "dateModified": "2026-11-26T10:00:00+05:30",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${seoConfig.siteUrl}/blog/${post.slug}`,
    },
    "author": {
      "@type": "Organization",
      "name": "Vape Shop Gurgaon",
      "url": seoConfig.siteUrl,
    },
    "publisher": {
      "@type": "Organization",
      "name": "Vape Shop Gurgaon",
      "logo": {
        "@type": "ImageObject",
        "url": `${seoConfig.siteUrl}/logo.png`,
      },
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
        "name": "Blog",
        "item": `${seoConfig.siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `${seoConfig.siteUrl}/blog/${post.slug}`,
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <Link href="/blog" className="hover:text-emerald-700 transition">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 text-slate-400" />
            <span className="font-semibold text-slate-700 line-clamp-1">{post.title}</span>
          </nav>

          {/* Article Header Card */}
          <article className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-9 shadow-2xs space-y-6">
            
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 font-bold border border-emerald-200">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{post.readTime}</span>
              </span>
            </div>

            {/* H1 Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#192e42] tracking-tight leading-tight">
              {post.title}
            </h1>

            {/* Lead Excerpt */}
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed border-l-4 border-[#84cc16] pl-4 py-1 italic bg-slate-50 rounded-r-lg">
              {post.excerpt}
            </p>

            {/* Content Body */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal pt-2">
              <h2 className="text-lg sm:text-xl font-black text-[#192e42] tracking-tight pt-2">
                Understanding Genuine Vaping in Gurgaon
              </h2>
              <p>
                When searching for authentic vape products across Gurugram—from DLF Phase 1-5, Cyber City, and Golf Course Road to Sohna Road and New Gurgaon—the foremost priority is verifying device authenticity. The Indian market frequently experiences unauthorized clone devices that lack battery temperature control and proper nicotine salt e-liquid certifications.
              </p>
              <p>
                At Vape Shop Gurgaon, every disposable vape, refillable pod kit, and nicotine salt bottle features manufacturer-sealed tamper-evident security labels with scannable scratch-off QR codes. Scanning these directly on brand official verification portals (such as Elfbar, Lost Mary, Uwell, and Vaporesso) confirms 100% genuine factory hardware.
              </p>

              <h2 className="text-lg sm:text-xl font-black text-[#192e42] tracking-tight pt-3">
                Key Factors When Selecting Devices
              </h2>
              <ul className="space-y-2 pl-4 list-disc marker:text-emerald-600">
                <li>
                  <strong>Puff Count vs. Battery Longevity:</strong> High-capacity devices (10,000 to 50,000 puffs) like the Nasty Bolt 50K or Bang Box 30K provide extended value with rechargeable USB Type-C batteries.
                </li>
                <li>
                  <strong>Coil Technology:</strong> Dual mesh coils provide uniform heating without burnt hits or e-liquid crystallization.
                </li>
                <li>
                  <strong>Nicotine Strength:</strong> Most adult users prefer 20mg to 50mg smooth nicotine salts formulated for satisfying throat hits with low vapor output.
                </li>
                <li>
                  <strong>Discreet Packaging:</strong> Same-day local courier delivery packaged in unbranded, plain tamper-evident parcels ensures complete privacy.
                </li>
              </ul>

              <h2 className="text-lg sm:text-xl font-black text-[#192e42] tracking-tight pt-3">
                Doorstep Express Delivery in Gurugram
              </h2>
              <p>
                Whether you reside in high-rise condominiums on Golf Course Road, corporate offices in Cyber City, or residential sectors in Sushant Lok, our dedicated express couriers ensure 30 to 60 minute delivery. Orders placed via WhatsApp are dispatched immediately with real-time delivery rider tracking and UPI or Cash on Delivery payment options.
              </p>
            </div>

            {/* WhatsApp Order Action Box */}
            <div className="mt-6 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="text-xs font-black uppercase text-emerald-700 tracking-wider">
                  Need Help or Recommendations?
                </div>
                <div className="text-sm sm:text-base font-black text-[#192e42]">
                  Chat with our Gurgaon vape specialist on WhatsApp
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs sm:text-sm shadow-sm transition active:scale-95 shrink-0"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </article>

          {/* Related Articles */}
          <div className="space-y-3 pt-2">
            <h2 className="text-base font-black text-[#192e42]">
              More Gurgaon Vape Guides
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherBlogs.map((b) => (
                <Link
                  key={b.id}
                  href={`/blog/${b.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-4 shadow-2xs hover:border-[#84cc16] hover:shadow-sm transition block space-y-1.5 group"
                >
                  <div className="text-[10px] font-bold text-emerald-700">{b.category}</div>
                  <h3 className="text-xs sm:text-sm font-bold text-[#192e42] group-hover:text-emerald-700 transition line-clamp-1">
                    {b.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-2">
                    {b.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
