import { seoConfig } from "@/config/seo";
import { CheckCircle2, HelpCircle } from "lucide-react";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="py-6 sm:py-8 bg-white border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block (Compact) */}
        <div className="text-center mb-5 sm:mb-6 space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-[10px] font-bold shadow-2xs">
            <HelpCircle className="w-3 h-3" />
            <span>Got Questions?</span>
          </div>
          <h2
            id="faq-heading"
            className="text-xl sm:text-2xl font-black text-[#192e42] tracking-tight"
          >
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="text-xs text-slate-500 font-medium">
            Details regarding ordering, authentic products, and same-day delivery in Gurugram.
          </p>
        </div>

        {/* Compact FAQ Cards */}
        <div className="space-y-2">
          {seoConfig.faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-slate-50 border border-slate-200 rounded-lg p-3 sm:p-3.5 shadow-2xs hover:border-[#84cc16] hover:bg-white transition"
            >
              <h3 className="font-bold text-xs sm:text-[13px] text-[#192e42] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{faq.question}</span>
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-600 mt-1 pl-5.5 leading-relaxed font-normal">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
