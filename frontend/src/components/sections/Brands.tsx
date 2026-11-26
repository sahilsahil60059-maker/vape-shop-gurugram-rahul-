import { ShieldCheck, Award } from "lucide-react";

const popularBrands = [
  {
    name: "Iget",
    tagline: "Iget Bar Plus & B5000",
    description: "Famous for rich flavors, smooth throat hit, and long-lasting mesh coil battery life.",
    country: "Original Import",
    popular: "Iget Bar Plus 6000",
  },
  {
    name: "Elf Bar",
    tagline: "BC10000 & Raya D1",
    description: "World renowned for sweet fruit blends, dry hit prevention, and compact palm fit.",
    country: "Original Import",
    popular: "Elf Bar BC10000",
  },
  {
    name: "Geek Bar",
    tagline: "Pulse 15000 Smart Vape",
    description: "First dual-core smart screen disposable offering standard and pulse power vaping modes.",
    country: "Original Import",
    popular: "Geek Bar Pulse 15K",
  },
  {
    name: "Uwell Caliburn",
    tagline: "G3, GK3 & A3 Pod Kits",
    description: "The gold standard in refillable pod systems with Pro-FOCS flavor enhancement.",
    country: "Authentic Hardware",
    popular: "Caliburn G3 Pod Kit",
  },
  {
    name: "SMOK",
    tagline: "Nord & Priv Series",
    description: "Powerful performance, durable build, and extensive coil versatility for dense clouds.",
    country: "Authentic Hardware",
    popular: "Smok Priv N19",
  },
  {
    name: "Vaporesso",
    tagline: "XROS 3, 4 & Mini",
    description: "Leak-resistant SSS technology, COREX heating, and superior battery management.",
    country: "Authentic Hardware",
    popular: "Vaporesso XROS 4",
  },
];

export function BrandsSection() {
  return (
    <section
      id="brands"
      aria-labelledby="brands-heading"
      className="py-10 sm:py-14 bg-white border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-[11px] font-bold mb-2 shadow-2xs">
            <Award className="w-3.5 h-3.5" />
            <span>Authorized Brand Distributors</span>
          </div>
          <h2
            id="brands-heading"
            className="text-2xl sm:text-3xl font-black text-[#192e42] tracking-tight"
          >
            World-Leading Vape Brands in Gurgaon
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            100% factory-sealed hardware with verifiable manufacturer security labels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {popularBrands.map((b) => (
            <div
              key={b.name}
              className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-[#84cc16] hover:bg-white transition-all shadow-2xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                    {b.country}
                  </span>
                  <span className="text-[10px] text-slate-500 font-medium">
                    Hot: {b.popular}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#192e42] group-hover:text-emerald-700 transition">
                  {b.name}
                </h3>
                <p className="text-xs font-semibold text-slate-600 mt-0.5">
                  {b.tagline}
                </p>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {b.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-[11px]">
                <span className="text-slate-500 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  QR Authenticated
                </span>
                <a
                  href="#products"
                  className="font-bold text-emerald-700 hover:text-[#192e42] transition"
                >
                  View Products &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
