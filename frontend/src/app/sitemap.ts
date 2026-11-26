import { MetadataRoute } from "next";
import { seoConfig } from "@/config/seo";
import { allProducts } from "@/config/products";
import { all20Blogs } from "@/config/blogs";
import { gurgaon50Locations } from "@/config/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date("2026-11-26");

  // Core Pages (4)
  const coreRoutes = [
    {
      url: seoConfig.siteUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${seoConfig.siteUrl}/locations`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${seoConfig.siteUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${seoConfig.siteUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // 52 Individual Product Pages for Google Indexing
  const productRoutes = allProducts.map((p) => ({
    url: `${seoConfig.siteUrl}/products/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 20 Dedicated Blog Guide Pages for Long-Tail Informational Queries
  const blogRoutes = all20Blogs.map((b) => ({
    url: `${seoConfig.siteUrl}/blog/${b.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  // 125 Dedicated Gurgaon Local Sector & Hub Pages for "Vape Shop Near Me" & "In [Sector]"
  const locationRoutes = gurgaon50Locations.map((l) => ({
    url: `${seoConfig.siteUrl}/locations/${l.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Total: 4 + 52 + 20 + 125 = 201 Static Indexable URLs
  return [
    ...coreRoutes,
    ...locationRoutes,
    ...productRoutes,
    ...blogRoutes,
  ];
}
