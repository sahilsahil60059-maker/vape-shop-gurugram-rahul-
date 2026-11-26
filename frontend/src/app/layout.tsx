import type { Metadata, Viewport } from "next";
import "./globals.css";
import { seoConfig } from "@/config/seo";
import { SiteStructuredData } from "@/components/seo/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingBtn } from "@/components/ui/WhatsAppFloatingBtn";

export const viewport: Viewport = {
  themeColor: "#192e42",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: "Vape Shop Gurgaon | 30-Min Fast Delivery | 100% Authentic Vapes",
    template: "%s | Vape Shop Gurgaon",
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: "Vape Shop Gurgaon Team" }],
  creator: "Vape Shop Gurgaon",
  publisher: "Vape Shop Gurgaon",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  formatDetection: {
    email: false,
    address: true,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vape Shop Gurgaon | Authentic Vapes & 30-Min Delivery",
    description: seoConfig.description,
    url: seoConfig.siteUrl,
    siteName: seoConfig.shortName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${seoConfig.siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Vape Shop Gurgaon - 100% Genuine Vapes & Fast Express Delivery",
      },
      {
        url: `${seoConfig.siteUrl}/logo.png`,
        width: 800,
        height: 800,
        alt: "Vape Shop Gurgaon Official Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vape Shop Gurgaon | Same Day Express Delivery",
    description: seoConfig.description,
    images: [`${seoConfig.siteUrl}/og-image.jpg`, `${seoConfig.siteUrl}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  other: {
    "geo.region": "IN-HR",
    "geo.placename": "Gurgaon",
    "geo.position": `${seoConfig.geo.latitude};${seoConfig.geo.longitude}`,
    ICBM: `${seoConfig.geo.latitude}, ${seoConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <SiteStructuredData />
      </head>
      <body className="antialiased bg-white text-[#192e42] min-h-screen flex flex-col font-sans selection:bg-[#84cc16] selection:text-[#192e42]">
        <Navbar />
        <main id="main-content" className="flex-1 bg-white">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingBtn />
      </body>
    </html>
  );
}
