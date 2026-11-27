# Vape Shop Gurgaon - Next.js & Tailwind CSS (SEO Optimized)

High-ranking, conversion-focused, and SEO-structured website for **Vape Shop Gurgaon**.

## 🚀 Key SEO Features Implemented

1. **Schema.org Structured Data (JSON-LD)**:
   - `VapeStore / LocalBusiness`: NAP (Name, Address, Phone), Opening Hours, Geo-coordinates, Area Served, Rating (4.9/5).
   - `FAQPage Schema`: Integrated for Google Rich Results.
   - `BreadcrumbList Schema`: Clear navigation hierarchy for search engines.

2. **Programmatic Local SEO Routes**:
   - `/` - Main landing page optimized for *"Vape Shop Gurgaon"*, *"Best Vape Store DLF"*, *"30-Min Delivery"*.
   - `/locations` - Localities hub for Gurugram.
   - `/locations/[slug]` - Dedicated programmatic SEO landing pages for each sector:
     - DLF Phase 1-5 (`/locations/dlf-phases`)
     - Cyber City & Cyber Hub (`/locations/cyber-city`)
     - Golf Course Road (`/locations/golf-course-road`)
     - Golf Course Extension (`/locations/golf-course-extension`)
     - MG Road (`/locations/mg-road`)
     - Sector 29 & 43 (`/locations/sector-29`)
     - Sector 56 & 57 (`/locations/sector-56-57`)
     - Sohna Road (`/locations/sohna-road`)
     - Ambience Island (`/locations/ambience-island`)
   - `/contact` - Official NAP details (2, 1st Street, Basai Village, Sector 37C), hours, and directions.

3. **Technical SEO**:
   - `sitemap.ts` (`/sitemap.xml`): Automatically maps all static & dynamic sector pages.
   - `robots.ts` (`/robots.txt`): Allows Googlebot and indexes pages cleanly.
   - Open Graph (OG) & Twitter Card metadata.
   - Geo-meta tags (`geo.region: IN-HR`, `geo.placename: Gurgaon`, `ICBM`).

4. **Conversion Optimizations**:
   - Instant WhatsApp order buttons with pre-filled messages.
   - Direct Call-to-Store buttons.
   - Trust highlights (100% Genuine QR verification, 30-60 min express delivery, Cash on Delivery/UPI).
   - Legal 18+ statutory disclaimers.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **Icons:** Lucide React

## 💻 How to Run

Navigate into the `frontend` directory:

```bash
cd frontend
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build for production:
```bash
npm run build
npm run start
```
