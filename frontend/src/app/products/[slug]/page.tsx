import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allProducts, ProductItem } from "@/config/products";
import { seoConfig } from "@/config/seo";
import {
  MessageCircle,
  ShieldCheck,
  Clock,
  Truck,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import type { Product, BreadcrumbList, WithContext } from "schema-dts";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return allProducts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found | Vape Shop Gurgaon",
    };
  }

  const title = `${product.name} | Buy Online Gurgaon (30-Min Delivery)`;
  const description = `Buy authentic ${product.name} in Gurgaon for ${product.priceFormatted} (MRP ${product.mrpFormatted}). 100% original QR verified with express 30-60 min delivery in DLF, Cyber City, Golf Course Road & all sectors.`;
  const canonicalUrl = `${seoConfig.siteUrl}/products/${product.slug}`;

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
      siteName: seoConfig.shortName,
      locale: "en_IN",
      type: "article",
      images: [
        {
          url: `${seoConfig.siteUrl}${product.image}`,
          width: 800,
          height: 800,
          alt: `${product.name} - Vape Shop Gurgaon`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${seoConfig.siteUrl}${product.image}`],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Related products from same category or brand
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.brand === product.brand))
    .slice(0, 4);

  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi, I want to order "${product.name}" (${product.priceFormatted}) with express delivery in Gurgaon.`
  )}`;

  // Product Schema.org JSON-LD
  const productSchema: WithContext<Product> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${seoConfig.siteUrl}/products/${product.slug}#product`,
    name: product.name,
    image: `${seoConfig.siteUrl}${product.image}`,
    description: product.description,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    offers: {
      "@type": "Offer",
      url: `${seoConfig.siteUrl}/products/${product.slug}`,
      priceCurrency: "INR",
      price: product.price,
      priceValidUntil: "2027-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "LocalBusiness",
        name: seoConfig.shortName,
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 4.9,
      reviewCount: 140,
      bestRating: 5,
      worstRating: 1,
    },
  };

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
        name: "Products",
        item: `${seoConfig.siteUrl}/#products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: `${seoConfig.siteUrl}/products/${product.slug}`,
      },
    ],
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#192e42] py-6 sm:py-10">
      {/* Schema.org Injected */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-xs text-slate-500 overflow-x-auto">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <Link href="/#products" className="hover:text-emerald-700 transition">
            Products
          </Link>
          <ChevronRight className="w-3 h-3 text-slate-400" />
          <span className="font-semibold text-slate-700 truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </nav>

        {/* Main Product Card (Clean White with Crisp Borders) */}
        <article className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-8 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            
            {/* Left: Product Image Box */}
            <div className="space-y-4">
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-inner">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute top-3 left-3 bg-[#84cc16] text-[#0f1d2b] font-black text-xs px-3 py-1 rounded-full shadow-md">
                  Save ₹{product.savings} OFF
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs text-[#192e42] border border-slate-200 font-bold text-xs px-2.5 py-1 rounded uppercase shadow-sm">
                  {product.brand}
                </div>
              </div>

              {/* Trust badges below image */}
              <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-600">
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="font-semibold block text-[#192e42]">100% Genuine</span>
                  <span>QR Verifiable</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg">
                  <Clock className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="font-semibold block text-[#192e42]">30-60 Mins</span>
                  <span>Gurgaon Express</span>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-2 rounded-lg">
                  <Truck className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="font-semibold block text-[#192e42]">COD Available</span>
                  <span>Pay on Doorstep</span>
                </div>
              </div>
            </div>

            {/* Right: Product Details & Purchase Actions */}
            <div className="space-y-5">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {product.category}
                  </span>
                  <div className="flex items-center text-amber-500 text-xs">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                    <span className="text-slate-500 font-semibold ml-1.5">(4.9/5 • 140 ratings)</span>
                  </div>
                </div>

                <h1 className="text-2xl sm:text-3xl font-black text-[#192e42] tracking-tight leading-snug">
                  {product.name}
                </h1>

                <p className="text-xs text-slate-500 mt-1">
                  SKU: <span className="font-mono text-slate-700">VS-GGN-{product.id.toString().padStart(3, "0")}</span> • In Stock (Gurgaon Hub Dispatch)
                </p>
              </div>

              {/* Price Box */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-baseline justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold">Special Gurgaon Price</div>
                  <div className="flex items-baseline gap-3 mt-0.5">
                    <span className="text-3xl font-black text-[#192e42] tracking-tight">
                      {product.priceFormatted}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      {product.mrpFormatted}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="bg-[#84cc16] text-[#0f1d2b] font-black text-xs px-2.5 py-1 rounded-md shadow-2xs">
                    Save ₹{product.savings}
                  </span>
                  <div className="text-[10px] text-slate-500 mt-1">Inclusive of all taxes</div>
                </div>
              </div>

              {/* Key Specifications */}
              <div className="space-y-2 text-xs">
                <div className="font-bold text-[#192e42] text-sm">Key Specifications:</div>
                <div className="grid grid-cols-2 gap-2 text-slate-600">
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                    <span className="text-slate-400 block text-[10px] uppercase">Brand</span>
                    <strong className="text-[#192e42] font-semibold">{product.brand}</strong>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                    <span className="text-slate-400 block text-[10px] uppercase">Capacity / Type</span>
                    <strong className="text-[#192e42] font-semibold">{product.puffs || product.category}</strong>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                    <span className="text-slate-400 block text-[10px] uppercase">Condition</span>
                    <strong className="text-[#192e42] font-semibold">Brand New Factory Sealed</strong>
                  </div>
                  <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg">
                    <span className="text-slate-400 block text-[10px] uppercase">Delivery Speed</span>
                    <strong className="text-emerald-700 font-semibold">30-60 Mins Doorstep</strong>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="font-bold text-[#192e42] text-sm">Product Description:</div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {product.description}
                </p>
              </div>

              {/* Call-to-action button */}
              <div className="pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-sm shadow-md shadow-[#84cc16]/20 transition-all transform hover:scale-[1.01] active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Order Now via WhatsApp (Instant Dispatch)</span>
                </a>
              </div>

              {/* Guarantee list */}
              <div className="pt-3 border-t border-slate-200 space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Genuine product with manufacturer anti-counterfeit QR code</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Discreet, tamper-proof and opaque delivery packaging</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Cash on Delivery (COD) &amp; UPI (GPay/PhonePe) accepted</span>
                </div>
              </div>

            </div>

          </div>
        </article>

        {/* Related Products Grid */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl sm:text-2xl font-black text-[#192e42] tracking-tight mb-4">
              Similar Trending Devices in Gurgaon
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {relatedProducts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/products/${rel.slug}`}
                  className="bg-white border border-slate-200 rounded-xl p-3 hover:border-[#84cc16] hover:shadow-md transition shadow-2xs group flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-slate-50 border border-slate-100 mb-2">
                      <Image
                        src={rel.image}
                        alt={rel.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="text-[10px] text-slate-500 font-semibold">{rel.brand}</div>
                    <h3 className="font-bold text-xs text-[#192e42] line-clamp-2 mt-0.5 group-hover:text-emerald-700 transition">
                      {rel.name}
                    </h3>
                  </div>
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="font-black text-xs sm:text-sm text-[#192e42]">{rel.priceFormatted}</span>
                    <span className="text-[10px] text-slate-400 line-through">{rel.mrpFormatted}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
