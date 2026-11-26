import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";
import { allProducts } from "@/config/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date("2026-11-24");

  // Canonical homepage
  const homeRoute = {
    url: seoConfig.siteUrl,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: 1.0,
  };

  // Dedicated Locations Page
  const locationsRoute = {
    url: `${seoConfig.siteUrl}/locations`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  };

  // Dedicated Blog Page (20 Guides)
  const blogRoute = {
    url: `${seoConfig.siteUrl}/blog`,
    lastModified: currentDate,
    changeFrequency: "daily" as const,
    priority: 0.9,
  };

  // Dedicated Contact Page
  const contactRoute = {
    url: `${seoConfig.siteUrl}/contact`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  };

  // All 25 individual product pages for Google Indexing
  const productRoutes = allProducts.map((p) => ({
    url: `${seoConfig.siteUrl}/products/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [homeRoute, locationsRoute, blogRoute, contactRoute, ...productRoutes];
}
