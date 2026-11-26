import { BookOpen } from "lucide-react";

const blogArticles = [
  {
    title: "How to Verify Authentic Vapes in Gurgaon (Anti-Counterfeit Guide)",
    date: "Nov 2026",
    readTime: "4 min read",
    excerpt:
      "Learn how to scan the manufacturer scratch QR code and identify fake disposable vapes before purchasing in Gurgaon.",
    tag: "Authenticity",
  },
  {
    title: "Disposable Vapes vs Refillable Pod Systems: Complete Comparison",
    date: "Nov 2026",
    readTime: "5 min read",
    excerpt:
      "Comparison of cost per puff, flavor intensity, battery recharging, and convenience between disposables and pod kits.",
    tag: "Buyer Guide",
  },
  {
    title: "Proper Storage & Battery Safety for Vapes in Indian Weather",
    date: "Nov 2026",
    readTime: "3 min read",
    excerpt:
      "Essential temperature guidelines to prevent e-liquid leakage, coil burning, and battery wear during humid seasons in Gurugram.",
    tag: "Device Care",
  },
];

export function BlogSection() {
  return (
    <section
      id="blog"
      aria-labelledby="blog-heading"
      className="py-10 sm:py-14 bg-[#f8fafc] border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-[11px] font-bold mb-2 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Gurgaon Vaping Blog &amp; Awareness</span>
          </div>
          <h2
            id="blog-heading"
            className="text-2xl sm:text-3xl font-black text-[#192e42] tracking-tight"
          >
            Vaping Guides, Tips &amp; Insights
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Helpful guides to make informed decisions about devices and battery safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {blogArticles.map((article) => (
            <article
              key={article.title}
              className="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-[#84cc16] hover:shadow-md transition shadow-2xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-2">
                  <span className="font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    {article.tag}
                  </span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-[#192e42] leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {article.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">{article.date}</span>
                <span className="font-bold text-emerald-700 hover:text-[#192e42] transition cursor-pointer">
                  Read Article &rarr;
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
