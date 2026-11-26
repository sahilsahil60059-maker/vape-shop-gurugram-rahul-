import type {
  LocalBusiness,
  WebSite,
  WebPage,
  FAQPage,
} from "schema-dts";
import { seoConfig } from "@/config/seo";

export function SiteStructuredData() {
  const schemaGraph: {
    "@context": "https://schema.org";
    "@graph": (LocalBusiness | WebSite | WebPage | FAQPage)[];
  } = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${seoConfig.siteUrl}/#store`,
        name: seoConfig.shortName,
        legalName: seoConfig.name,
        alternateName: "Vape Shop Gurgaon Express Store",
        url: seoConfig.siteUrl,
        logo: `${seoConfig.siteUrl}/logo.png`,
        image: [
          `${seoConfig.siteUrl}/og-image.jpg`,
          `${seoConfig.siteUrl}/logo.png`,
        ],
        description: seoConfig.description,
        email: seoConfig.email,
        telephone: seoConfig.phone,
        priceRange: seoConfig.priceRange,
        currenciesAccepted: "INR",
        paymentAccepted: "Cash, UPI, Net Banking",
        hasMap: "https://www.google.com/maps/search/?api=1&query=Galleria+Market+DLF+Phase+4+Gurgaon",
        knowsAbout: [
          "Vape Shop Gurgaon",
          "Vape Shop in Gurgaon",
          "Vape Delivery Gurgaon",
          "Same Day Vape Delivery Gurgaon",
          "Disposable Vapes Gurgaon",
          "Elf Bar Gurgaon",
          "Lost Mary Gurgaon",
          "Uwell Caliburn Pods",
          "Nicotine Salts Gurgaon",
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: seoConfig.address.streetAddress,
          addressLocality: seoConfig.address.addressLocality,
          addressRegion: seoConfig.address.addressRegion,
          postalCode: seoConfig.address.postalCode,
          addressCountry: seoConfig.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: seoConfig.geo.latitude,
          longitude: seoConfig.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "23:30",
          },
        ],
        areaServed: seoConfig.localities.map((loc) => ({
          "@type": "AdministrativeArea",
          name: `${loc.name}, Gurgaon`,
        })),
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "30",
          bestRating: "5",
          worstRating: "1",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${seoConfig.siteUrl}/#website`,
        name: seoConfig.shortName,
        url: seoConfig.siteUrl,
        inLanguage: "en-IN",
        description: seoConfig.description,
        publisher: {
          "@id": `${seoConfig.siteUrl}/#store`,
        },
      },
      {
        "@type": "WebPage",
        "@id": `${seoConfig.siteUrl}/#webpage`,
        url: seoConfig.siteUrl,
        name: seoConfig.name,
        isPartOf: {
          "@id": `${seoConfig.siteUrl}/#website`,
        },
        about: {
          "@id": `${seoConfig.siteUrl}/#store`,
        },
        description: seoConfig.description,
        inLanguage: "en-IN",
      },
      {
        "@type": "FAQPage",
        "@id": `${seoConfig.siteUrl}/#faqpage`,
        mainEntity: seoConfig.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaGraph) }}
    />
  );
}
