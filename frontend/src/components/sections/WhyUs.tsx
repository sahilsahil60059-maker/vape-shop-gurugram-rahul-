import { ShieldCheck, Clock, PackageCheck } from "lucide-react";

export function WhyUsSection() {
  return (
    <section
      id="why-us"
      aria-labelledby="why-us-heading"
      className="py-6 sm:py-8 bg-white border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block (Compact) */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-7 space-y-1.5">
          {/* Top Label */}
          <div className="text-[#84cc16] text-[10px] font-black uppercase tracking-widest">
            UNMATCHED QUALITY
          </div>

          {/* Section H2 Heading */}
          <h2
            id="why-us-heading"
            className="text-xl sm:text-2xl font-black text-[#192e42] tracking-tight"
          >
            Why We Are Gurgaon&apos;s #1 Choice
          </h2>

          {/* Subtitle */}
          <p className="text-xs text-slate-500 font-normal">
            Every single piece is backed by our zero-counterfeit guarantee and genuine QR verification.
          </p>
        </div>

        {/* 3 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          
          {/* Card 1: 100% Genuine Guaranteed */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-[#84cc16] hover:bg-white transition-all duration-150 shadow-2xs group flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-[#84cc16] group-hover:text-[#0f1d2b] group-hover:border-[#84cc16] transition shadow-2xs">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#192e42] mb-1">
                100% Genuine Guaranteed
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                Scan the security hologram scratch sticker on every product package directly on brand official websites.
              </p>
            </div>
          </div>

          {/* Card 2: 30-60 Mins Express Delivery */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-[#84cc16] hover:bg-white transition-all duration-150 shadow-2xs group flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-[#84cc16] group-hover:text-[#0f1d2b] group-hover:border-[#84cc16] transition shadow-2xs">
                <Clock className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#192e42] mb-1">
                30-60 Mins Express Delivery
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                Got a craving? Our express courier network delivers straight to your doorstep across Gurgaon in 30 to 60 minutes.
              </p>
            </div>
          </div>

          {/* Card 3: 100% Discrete Packaging */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-[#84cc16] hover:bg-white transition-all duration-150 shadow-2xs group flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-[#84cc16] group-hover:text-[#0f1d2b] group-hover:border-[#84cc16] transition shadow-2xs">
                <PackageCheck className="w-4 h-4" />
              </div>
              <h3 className="text-sm sm:text-base font-black text-[#192e42] mb-1">
                100% Discrete Packaging
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">
                Orders are packed in completely plain, secure, unbranded packaging with tamper seals to protect privacy.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
