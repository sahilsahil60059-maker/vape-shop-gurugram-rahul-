export interface SeoConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  ogImage: string;
  locale: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappMessage: string;
  email: string;
  priceRange: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  openingHours: string[];
  rating: {
    ratingValue: string;
    reviewCount: string;
  };
  keywords: string[];
  localities: {
    name: string;
    timing: string;
    popularHotspot: string;
  }[];
  categories: {
    name: string;
    description: string;
    count: string;
    bestFor: string;
  }[];
  products: {
    id: string;
    name: string;
    category: string;
    price: string;
    mrp: string;
    badge: string;
    puffs?: string;
    battery?: string;
    description: string;
    features: string[];
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  testimonials: {
    id: string;
    name: string;
    location: string;
    rating: number;
    review: string;
    verifiedPurchase: boolean;
    date: string;
  }[];
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://vapeshopingurugram.com";

export const seoConfig: SeoConfig = {
  name: "Vape Shop Gurgaon | 30-Min Fast Delivery | 100% Authentic Vapes",
  shortName: "Vape Shop Gurgaon",
  tagline: "Gurgaon's #1 Rated Vape Store with Express 30-Minute Doorstep Delivery",
  description:
    "Best Vape Shop in Gurgaon. Buy authentic disposable vapes, pod kits & e-liquids with 30-min express delivery in DLF, Cyber City & all sectors. COD/UPI.",
  siteUrl,
  ogImage: `${siteUrl}/og-image.jpg`,
  locale: "en_IN",
  phone: "+91 92510 97294",
  phoneRaw: "+919251097294",
  whatsappNumber: "919251097294",
  whatsappMessage: "Hi, I want to inquire about vape availability and express delivery in Gurgaon.",
  email: "support@vapeshopingurugram.com",
  priceRange: "₹₹",
  address: {
    streetAddress: "2, 1st Street, Basai Village, Sector 37C",
    addressLocality: "Gurugram",
    addressRegion: "Haryana",
    postalCode: "122001",
    addressCountry: "IN",
  },
  geo: {
    latitude: 28.4637,
    longitude: 76.9926,
  },
  openingHours: ["Mo-Su 10:00-23:30"],
  rating: {
    ratingValue: "5.0",
    reviewCount: "30",
  },
  keywords: [
    "Vape Shop Gurgaon",
    "Vape Shop in Gurgaon",
    "Best Vape Shop Gurgaon",
    "Vape Delivery Gurgaon",
    "Same Day Vape Delivery Gurgaon",
    "Buy Vape Online Gurgaon",
    "Vape Store Near Me Gurgaon",
    "Vape Shop DLF Phase 4 Gurgaon",
    "Vape Shop Cyber City Gurugram",
    "Vape Store Golf Course Road",
    "Disposable Vapes Gurgaon",
    "Elf Bar Gurgaon",
    "Lost Mary Gurgaon",
    "Caliburn Pod Gurgaon",
    "Nicotine Salts Gurgaon",
    "100% Genuine Vape Shop Gurgaon",
  ],
  localities: [
    {
      name: "DLF Phase 1, 2, 3, 4 & 5",
      timing: "20 - 35 mins",
      popularHotspot: "Galleria Market, Supermart 1 & 2, Cyber Hub",
    },
    {
      name: "Cyber City & Ambience Island",
      timing: "25 - 40 mins",
      popularHotspot: "Cyber City Towers, Belvedere Park, Ambience Mall",
    },
    {
      name: "Golf Course Road",
      timing: "25 - 40 mins",
      popularHotspot: "One Horizon Center, DLF Magnolias, Sector 42",
    },
    {
      name: "Golf Course Extension & Sector 56-65",
      timing: "30 - 45 mins",
      popularHotspot: "M3M Urbana, Worldmark, Sector 56 Huda Market",
    },
    {
      name: "MG Road & IFFCO Chowk",
      timing: "25 - 35 mins",
      popularHotspot: "Beverly Park, Essel Tower, Sikanderpur",
    },
    {
      name: "Sohna Road & Subhash Chowk",
      timing: "35 - 50 mins",
      popularHotspot: "Vipul Greens, Vatika City, Sector 48-49",
    },
    {
      name: "Sector 29 & Sector 43/44",
      timing: "25 - 35 mins",
      popularHotspot: "Kingdom of Dreams Area, Huda City Centre",
    },
    {
      name: "New Gurgaon (Sector 82 - 95)",
      timing: "45 - 60 mins",
      popularHotspot: "Vatika India Next, Town Square, Sector 83",
    },
  ],
  categories: [
    {
      name: "Disposable Vapes",
      description: "Pre-filled, draw-activated, hassle-free disposable devices with up to 15,000 puffs.",
      count: "50+ Flavors",
      bestFor: "On-the-go convenience",
    },
    {
      name: "Pod Systems & Kits",
      description: "Refillable pod kits from top brands with adjustable airflow and long battery life.",
      count: "Top Brands",
      bestFor: "Daily vaping & cost savings",
    },
    {
      name: "E-Liquids & Nic Salts",
      description: "Authentic imported 20mg and 50mg nic salt blends with rich fruit, menthol & tobacco notes.",
      count: "80+ Varieties",
      bestFor: "Refillable pod devices",
    },
    {
      name: "Coils, Pods & Accessories",
      description: "Genuine replacement pods, mesh coils, and charging cables with anti-counterfeit seals.",
      count: "100% Genuine",
      bestFor: "Device maintenance",
    },
  ],
  products: [
    {
      id: "iget-bar-plus",
      name: "Iget Bar Plus 6000 Puffs",
      category: "Disposable Vape",
      price: "₹1,499",
      mrp: "₹1,899",
      badge: "Gurgaon Bestseller",
      puffs: "6,000 Puffs",
      battery: "600mAh Type-C Recharging",
      description: "Interchangeable pod design with mesh coil technology and crisp, long-lasting taste.",
      features: ["Replaceable Pod System", "Mesh Coil Flavor Boost", "16ml Nicotine Salt"],
    },
    {
      id: "geek-bar-pulse",
      name: "Geek Bar Pulse 15000 Puffs",
      category: "Smart Disposable",
      price: "₹1,999",
      mrp: "₹2,499",
      badge: "Trending Tech",
      puffs: "15,000 Puffs (Pulse Mode: 7,500)",
      battery: "650mAh Fast Charging",
      description: "World's first full-screen display disposable vape showing real-time e-liquid & battery status.",
      features: ["Full Screen Display", "Dual Core Heating", "Dual Vaping Modes"],
    },
    {
      id: "elf-bar-bc10000",
      name: "Elf Bar BC10000 Puffs",
      category: "Disposable Vape",
      price: "₹1,699",
      mrp: "₹2,199",
      badge: "High Demand",
      puffs: "10,000 Puffs",
      battery: "620mAh Rechargeable",
      description: "Features dry-hit prevention and real-time battery and e-liquid level indicators.",
      features: ["Dry Hit Prevention", "Illuminated Display", "Quoq Mesh Coil"],
    },
    {
      id: "uwell-caliburn-g3",
      name: "Uwell Caliburn G3 Pod Kit",
      category: "Pod System",
      price: "₹5,500",
      mrp: "₹6,800",
      badge: "Pro Choice",
      battery: "900mAh Battery",
      description: "The flagship Caliburn pod with OLED display, precise wattage control, and dual airflow.",
      features: ["OLED Display", "Dual Airflow System", "Integrated Coil Cartridge"],
    },
  ],
  faqs: [
    {
      question: "Which is the best and most trusted vape shop in Gurgaon?",
      answer:
        "Vape Shop Gurgaon is recognized as the leading and most trusted vape store in Gurugram, offering 100% authentic devices with scannable manufacturer QR codes, 30-60 minute rapid doorstep delivery, and full coverage across DLF Phase 1-5, Cyber City, and Golf Course Road.",
    },
    {
      question: "Where can I buy original disposable vapes in Gurgaon?",
      answer:
        "You can order 100% authentic disposable vapes (Elf Bar, Lost Mary, iGET, Geek Bar, Nasty Bolt) directly through Vape Shop Gurgaon with instant WhatsApp ordering and express delivery to your home, office, or hotel in 30 to 60 minutes.",
    },
    {
      question: "Do you offer same day vape delivery in Gurgaon?",
      answer:
        "Yes, we provide 30 to 60 minute express delivery across all Gurgaon sectors including DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, and Sector 29/43/56. Orders are dispatched immediately upon confirmation.",
    },
    {
      question: "Are your vape devices and e-liquids 100% authentic?",
      answer:
        "Yes, 100% of our products are authentic and sourced directly from verified distributors. Every device includes a manufacturer scratch-off security label with a scannable QR verification code.",
    },
    {
      question: "What payment methods are supported for delivery in Gurgaon?",
      answer:
        "We accept Cash on Delivery (COD), UPI (Google Pay, PhonePe, Paytm), and instant bank transfers upon delivery. You only pay after inspecting the package.",
    },
    {
      question: "What is the legal age requirement to buy from Vape Shop Gurgaon?",
      answer:
        "You must be 18 years of age or older. We strictly adhere to age restriction policies and our delivery personnel may request government ID verification.",
    },
    {
      question: "How is the order packaged for delivery?",
      answer:
        "All orders are packaged in 100% plain, tamper-evident, and discreet packaging to ensure total privacy for deliveries to residential societies, tech parks, or hotels.",
    },
    {
      question: "Can I replace a defective device?",
      answer:
        "Yes, in the rare event of an out-of-the-box dead-on-arrival (DOA) unit, we offer immediate replacement within 24 hours of delivery.",
    },
  ],
  testimonials: [
    {
      id: "rev-1",
      name: "Rohit Sharma",
      location: "DLF Phase 4, Gurgaon",
      rating: 5,
      review:
        "Ordered an Iget Bar Plus at 8 PM, received it at Galleria in under 30 minutes! Authentic QR code verified immediately. Best delivery service in Gurugram.",
      verifiedPurchase: true,
      date: "2026-11-18",
    },
    {
      id: "rev-2",
      name: "Aakash Verma",
      location: "Cyber City, DLF Phase 2",
      rating: 5,
      review:
        "Super responsive on WhatsApp. Got Geek Bar Pulse delivered straight to my corporate building gate within 35 mins. Discreet parcel and smooth UPI payment.",
      verifiedPurchase: true,
      date: "2026-11-20",
    },
    {
      id: "rev-3",
      name: "Pooja Malhotra",
      location: "Golf Course Road, Sector 54",
      rating: 5,
      review:
        "Genuine Caliburn coils and original Elf Bar. So glad I found a reliable local vape shop in Gurgaon that doesn't sell clones.",
      verifiedPurchase: true,
      date: "2026-11-22",
    },
  ],
};
