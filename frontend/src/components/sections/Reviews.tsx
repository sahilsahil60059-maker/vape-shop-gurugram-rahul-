"use client";

import { useState } from "react";
import { Star, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";

interface ReviewItem {
  id: number;
  name: string;
  avatar: string;
  location: string;
  product: string;
  rating: number;
  review: string;
  timeAgo: string;
}

const all30Reviews: ReviewItem[] = [
  {
    id: 1,
    name: "Rahul M.",
    avatar: "R",
    location: "DLF Phase 2, Gurgaon",
    product: "Elfbar BC5000",
    rating: 5,
    review: "Ordered the Elfbar BC5000 Grape Energy around 3 PM and received it in DLF Phase 2 by 3:35 PM. Scanned the QR code on the box and it verified 100% genuine on the official brand site. Best vape store in Gurgaon!",
    timeAgo: "Yesterday",
  },
  {
    id: 2,
    name: "Arjun K.",
    avatar: "A",
    location: "Cyber City, DLF Phase 2",
    product: "Uwell Caliburn G3 Pro",
    rating: 5,
    review: "Really smooth ordering experience on WhatsApp. The plain discreet packaging was tamper-proof and delivered within 30 minutes to my Cyber City office tower. The support team answered my pod resistance questions quickly.",
    timeAgo: "2 days ago",
  },
  {
    id: 3,
    name: "Vikram S.",
    avatar: "V",
    location: "Golf Course Road, Sector 54",
    product: "Lost Mary MT35000",
    rating: 5,
    review: "I liked the variety of devices in stock and how easy it was to order. The Lost Mary Turbo has insane flavor and the dynamic screen keeps track of juice levels. Delivery in Sector 54 was under 30 minutes.",
    timeAgo: "3 days ago",
  },
  {
    id: 4,
    name: "Pooja M.",
    avatar: "P",
    location: "DLF Phase 4 (Galleria)",
    product: "iGET 10000 Puffs",
    rating: 5,
    review: "Fast delivery right near Galleria Market. Original iGET device with scratch-off verification seal. Battery lasts remarkably long and flavor stays consistent. Highly recommended!",
    timeAgo: "4 days ago",
  },
  {
    id: 5,
    name: "Aman S.",
    avatar: "A",
    location: "Sector 29 Market Area",
    product: "Nasty Bolt 50K",
    rating: 5,
    review: "The dual switch flavor on the Nasty 50K is top notch. Ordered late in the evening and their rider arrived in 25 minutes. Paid via UPI on doorstep. Super reliable service.",
    timeAgo: "5 days ago",
  },
  {
    id: 6,
    name: "Rohan B.",
    avatar: "R",
    location: "Sohna Road, Sector 48",
    product: "Geekvape B60",
    rating: 5,
    review: "Genuine Geekvape Aegis Boost 2 kit with authentic warranty card inside. Excellent build quality, zero leakage, and fast delivery to Central Park on Sohna Road.",
    timeAgo: "5 days ago",
  },
  {
    id: 7,
    name: "Kunal T.",
    avatar: "K",
    location: "Sushant Lok 1, Sector 43",
    product: "Lost Mary BM6000",
    rating: 5,
    review: "The power display screen on the BM6000 makes life so easy. Arrived in sealed opaque packaging within 35 minutes. Rider was courteous and professional.",
    timeAgo: "6 days ago",
  },
  {
    id: 8,
    name: "Sneha R.",
    avatar: "S",
    location: "Ambience Island, NH-8",
    product: "Elfbar AF5000",
    rating: 5,
    review: "Genuine rechargeable Elfbar. Scanned the official authenticity QR code and it passed on the first try. Best customer care support on WhatsApp in Gurugram.",
    timeAgo: "1 week ago",
  },
  {
    id: 9,
    name: "Varun G.",
    avatar: "V",
    location: "Golf Course Ext, Sector 65",
    product: "VOOPOO Drag & VMATE Set",
    rating: 5,
    review: "The dual gift set is absolute value for money. Both devices feel super premium in hand. Delivery rider arrived at M3M Golfestate in exactly 30 minutes.",
    timeAgo: "1 week ago",
  },
  {
    id: 10,
    name: "Nikhil D.",
    avatar: "N",
    location: "Sector 56 Market Area",
    product: "VOOPOO Argus Top Fill Pods",
    rating: 5,
    review: "Original pack of 3 top fill pods. Hard to find original VOOPOO cartridges in Gurgaon offline shops, but these guys had fresh stock and delivered instantly.",
    timeAgo: "1 week ago",
  },
  {
    id: 11,
    name: "Tanmay J.",
    avatar: "T",
    location: "Sector 43, Golf Course",
    product: "VOOPOO Argus G2 Mini",
    rating: 5,
    review: "Ordered the double pack for me and my colleague. Excellent throat hit, long battery life, and received at our tech hub in 20 minutes.",
    timeAgo: "1 week ago",
  },
  {
    id: 12,
    name: "Aditya K.",
    avatar: "A",
    location: "DLF Phase 1, Gurgaon",
    product: "Uwell Caliburn G4 Mini",
    rating: 5,
    review: "The Caliburn G4 flavor reproduction is unmatched. Completely authentic product with manufacturer security scratch seal. Will order all my refills from here.",
    timeAgo: "1 week ago",
  },
  {
    id: 13,
    name: "Gaurav P.",
    avatar: "G",
    location: "Nirvana Country, Sector 50",
    product: "Uwell Caliburn G5 KOKO",
    rating: 5,
    review: "Huge 1600mAh battery with a crystal clear full screen display. Fast delivery to Nirvana Country in South City. Packaging was totally discreet.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 14,
    name: "Deepak N.",
    avatar: "D",
    location: "South City 1, Sector 40",
    product: "Bang Box 30000 Puffs",
    rating: 5,
    review: "Boost mode on this 30k puff monster gives super thick vapor. Prompt WhatsApp updates on rider location until delivery. 5 stars all the way.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 15,
    name: "Ankit B.",
    avatar: "A",
    location: "Sector 14, Old Gurgaon",
    product: "Uwell Caliburn Classic",
    rating: 5,
    review: "Simple, timeless classic pod kit. Authentic device with original Type-C cable and manual. Arrived in Sector 14 in 35 mins.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 16,
    name: "Saurabh V.",
    avatar: "S",
    location: "DLF Phase 5, Horizon Center",
    product: "Vaporesso GTX ONE Pro",
    rating: 5,
    review: "40W output with GTX mesh coils delivers the cleanest flavor profile. Delivered to One Horizon Center during lunch break without any hassle.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 17,
    name: "Karan S.",
    avatar: "K",
    location: "Sector 57, Rail Vihar",
    product: "Bang Box 30K Twin Switch",
    rating: 5,
    review: "Switching between two distinct fruit flavors with one slider switch is amazing. Device was factory sealed and verified on brand portal.",
    timeAgo: "2 weeks ago",
  },
  {
    id: 18,
    name: "Mayank C.",
    avatar: "M",
    location: "New Gurgaon, Sector 82",
    product: "Vaporesso Armour G 80W",
    rating: 5,
    review: "Rugged exterior and massive battery power. Even all the way out in New Gurgaon Sector 82, delivery was completed within 45 minutes.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 19,
    name: "Divya K.",
    avatar: "D",
    location: "MG Road, Heritage City",
    product: "SMOK Priv N19 Kit",
    rating: 5,
    review: "Compact form factor, adjustable wattage, and Nord coil compatibility. Delivery to MG Road metro area was lightning fast. 100% authentic.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 20,
    name: "Akash S.",
    avatar: "A",
    location: "Sector 31 Market",
    product: "Vaporesso XROS 3 Mini",
    rating: 5,
    review: "Zero leaking issues with the XROS 3 mesh pods. Battery easily lasts 2 full days. Very polite delivery team and instant WhatsApp confirmation.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 21,
    name: "Sameer T.",
    avatar: "S",
    location: "Cyber Hub, DLF Phase 2",
    product: "Pod Salt Classic Tobacco",
    rating: 5,
    review: "Authentic imported UK Nic Salt. Smooth throat hit and rich earthy tobacco aroma. Fast 20-min delivery directly to Cyber Hub.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 22,
    name: "Mohit R.",
    avatar: "M",
    location: "Sector 47, Malibu Towne",
    product: "Vaporesso GTX ONE Kit",
    rating: 5,
    review: "Full color edition looks stunning. Ordered along with extra 0.8ohm coils and both were genuine sealed packages. Seamless UPI payment.",
    timeAgo: "3 weeks ago",
  },
  {
    id: 23,
    name: "Tarun S.",
    avatar: "T",
    location: "Sector 15 Part 2, Gurgaon",
    product: "Uwell Caliburn G3 Colors",
    rating: 5,
    review: "Dynamic screen and customizable wattage. Scanned QR code immediately upon receiving. Genuine product, zero doubts.",
    timeAgo: "1 month ago",
  },
  {
    id: 24,
    name: "Ishaan V.",
    avatar: "I",
    location: "DLF Phase 3, Cyber City",
    product: "Nasty Bolt 50K Twin Edition",
    rating: 5,
    review: "Dual tank design with 50,000 puffs capacity is unbeatable value. Delivered in under 25 minutes to U Block DLF 3.",
    timeAgo: "1 month ago",
  },
  {
    id: 25,
    name: "Prateek B.",
    avatar: "P",
    location: "Sector 51, Mayfield Gardens",
    product: "Elfbar BC5000",
    rating: 5,
    review: "Sweet grape ice flavor with dense vapor. Recharges quickly via Type-C. Delivery to Mayfield Gardens took barely 30 minutes.",
    timeAgo: "1 month ago",
  },
  {
    id: 26,
    name: "Vikas D.",
    avatar: "V",
    location: "Sector 45, Near Huda City",
    product: "iGET 10000 Puffs",
    rating: 5,
    review: "Mesh coil produces intense flavor from the very first puff to the last. Discreet box delivered right to my society gate.",
    timeAgo: "1 month ago",
  },
  {
    id: 27,
    name: "Harsh S.",
    avatar: "H",
    location: "Sector 65, Emerald Hills",
    product: "Lost Mary MT35000",
    rating: 5,
    review: "Turbo mode produces warm rich clouds. Genuine stock with intact hologram sticker. Easily Gurgaon's most reliable vape seller.",
    timeAgo: "1 month ago",
  },
  {
    id: 28,
    name: "Udit M.",
    avatar: "U",
    location: "Sector 70, Spaze Privy",
    product: "Uwell Caliburn G4 Mini",
    rating: 5,
    review: "Super lightweight, compact pocket pod. Customer support answered my WhatsApp query immediately and dispatched in 10 minutes.",
    timeAgo: "1 month ago",
  },
  {
    id: 29,
    name: "Yash V.",
    avatar: "Y",
    location: "New Gurgaon, Sector 84",
    product: "Geekvape B60 Pod Kit",
    rating: 5,
    review: "IP68 water and shock resistance makes it perfect for daily rough use. Authentic seal verified. Arrived in New Gurgaon in 40 minutes.",
    timeAgo: "1 month ago",
  },
  {
    id: 30,
    name: "Shubham G.",
    avatar: "S",
    location: "DLF Phase 4, Supermart 1",
    product: "Nasty Bolt 50K Hyper",
    rating: 5,
    review: "Best vape shop in Gurgaon hands down. Honest pricing with genuine MRP discounts, scannable QR verification, and 25-min delivery.",
    timeAgo: "1 month ago",
  },
];

export function ReviewsSection() {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? all30Reviews : all30Reviews.slice(0, 6);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-heading"
      className="py-6 sm:py-8 bg-[#f8fafc] border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7 space-y-1.5">
          {/* Top Label */}
          <div className="text-[#84cc16] text-[10px] font-black uppercase tracking-widest">
            REVIEWS
          </div>

          {/* Section H2 Heading */}
          <h2
            id="reviews-heading"
            className="text-xl sm:text-2xl font-black text-[#192e42] tracking-tight"
          >
            Loved across Gurgaon
          </h2>

          {/* 5-Star Rating Pill (Compact) */}
          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3 py-1 rounded-full shadow-2xs">
            <div className="flex items-center text-[#84cc16]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-current" />
              ))}
            </div>
            <span className="text-[11px] font-black text-[#192e42]">5.0</span>
            <span className="text-slate-400 text-[10px]">•</span>
            <span className="text-[11px] text-slate-600 font-semibold">
              30 verified customer reviews
            </span>
          </div>
        </div>

        {/* 30 Reviews Grid (Compact Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-3.5">
          {visibleReviews.map((rev) => (
            <article
              key={rev.id}
              className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 hover:border-[#84cc16] hover:shadow-sm transition-all duration-150 shadow-2xs flex flex-col justify-between group"
            >
              <div>
                {/* Top Row: Stars + Product Badge */}
                <div className="flex items-center justify-between gap-1.5 mb-2">
                  <div className="flex items-center text-[#84cc16]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current" />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.5 rounded truncate max-w-[130px]">
                    {rev.product}
                  </span>
                </div>

                {/* Review Quote (Compact Font) */}
                <p className="text-[11px] sm:text-xs text-slate-600 italic leading-relaxed font-normal">
                  &ldquo;{rev.review}&rdquo;
                </p>
              </div>

              {/* Bottom Row: Customer Details & Relative Date */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  {/* Avatar circle */}
                  <div className="w-6 h-6 rounded-full bg-[#192e42] text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="flex items-center gap-1 font-bold text-[#192e42] text-xs leading-none">
                      <span>{rev.name}</span>
                      <CheckCircle className="w-2.5 h-2.5 text-[#84cc16] fill-current stroke-white" />
                    </div>
                    <div className="text-[9px] text-slate-400 mt-0.5">
                      Verified Buyer • {rev.location}
                    </div>
                  </div>
                </div>

                {/* Relative Timestamp */}
                <span className="text-[9px] text-slate-400 font-medium shrink-0">
                  {rev.timeAgo}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Show More / Show Less Button */}
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white hover:bg-slate-50 text-[#192e42] border border-slate-300 font-bold text-xs shadow-2xs hover:border-[#192e42] transition-all active:scale-95 cursor-pointer"
          >
            <span>
              {showAll
                ? "Show Less Reviews"
                : `Show All 30 Gurgaon Reviews (${visibleReviews.length}/30)`}
            </span>
            {showAll ? (
              <ChevronUp className="w-3.5 h-3.5 text-[#84cc16]" />
            ) : (
              <ChevronDown className="w-3.5 h-3.5 text-[#84cc16]" />
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
