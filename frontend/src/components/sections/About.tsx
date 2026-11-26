import { ShieldCheck, Zap, CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-6 sm:py-8 bg-white border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Left Column: 4 Editorial Paragraphs (Compact Fonts) */}
          <div className="lg:col-span-7 space-y-2.5">
            {/* Top Label */}
            <div className="text-[#84cc16] text-[10px] font-black uppercase tracking-widest">
              ABOUT US
            </div>

            {/* Section H2 Heading */}
            <h2
              id="about-heading"
              className="text-xl sm:text-2xl font-black text-[#192e42] tracking-tight leading-snug"
            >
              Vape Shop Gurgaon – Premium Vapes,{" "}
              <span className="text-[#84cc16]">Pods &amp; E-Liquids</span>
            </h2>

            {/* 4 Paragraphs with Compact Font */}
            <div className="space-y-2 text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">
              <p>
                Welcome to <strong className="text-[#192e42] font-semibold">Vape Shop Gurgaon</strong>, a premier destination for customers looking for a curated range of vape products, disposable vapes, pod systems, and e-liquids in Gurgaon. We focus on providing genuine products, clear product information, verified scannable authentication, and responsive customer support.
              </p>

              <p>
                Our collection includes products from popular international brands such as <strong className="text-[#192e42] font-semibold">Elf Bar, Lost Mary, Uwell Caliburn, Vaporesso, Geekvape, Nasty Bolt, iGET, and Pod Salt</strong>. Whether you&apos;re searching for disposable vapes in Gurgaon, refillable vape pods, premium nicotine salts, or replacement coils, our range is designed to make product discovery simple and convenient.
              </p>

              <p>
                We serve customers across Gurgaon—including <strong className="text-[#192e42] font-semibold">DLF Phase 1-5, Cyber City, Golf Course Road, Sohna Road, Sector 29, Sector 43 &amp; 44, MG Road, and New Gurgaon</strong>—with fast same-day local delivery support (within 30-60 mins) and responsive assistance. Product authenticity, secure discrete packaging, and customer service are central to our approach.
              </p>

              <p>
                Explore our collection and discover a convenient, reliable online destination for authentic vape products in Gurgaon.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Compact Cards */}
          <div className="lg:col-span-5 space-y-2 sm:space-y-2.5">
            
            {/* Card 1: 100% Authentic */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 hover:border-[#84cc16] hover:bg-white transition-all shadow-2xs group flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#84cc16] group-hover:text-[#0f1d2b] transition">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#192e42] mb-0.5">
                  100% Authentic
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Original products sourced from authorized channels with verifiable scratch QR codes.
                </p>
              </div>
            </div>

            {/* Card 2: Same-Day Support */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 hover:border-[#84cc16] hover:bg-white transition-all shadow-2xs group flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#84cc16] group-hover:text-[#0f1d2b] transition">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#192e42] mb-0.5">
                  Same-Day Support
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Quick replies on WhatsApp &amp; 30-60 mins express courier dispatch across all Gurgaon pin codes.
                </p>
              </div>
            </div>

            {/* Card 3: Curated Range */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-3.5 hover:border-[#84cc16] hover:bg-white transition-all shadow-2xs group flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#84cc16] group-hover:text-[#0f1d2b] transition">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-black text-[#192e42] mb-0.5">
                  Curated Range
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug">
                  Best-selling devices &amp; rich imported flavors, always in stock and ready to ship in Gurgaon.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
