import { seoConfig } from "@/config/seo";
import { MapPin, Clock, MessageCircle } from "lucide-react";

export function CoverageSection() {
  return (
    <section
      id="locations"
      aria-labelledby="locations-heading"
      className="py-10 sm:py-14 bg-[#f8fafc] border-b border-slate-200 text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-emerald-700 text-[11px] font-bold mb-2 shadow-2xs">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyper-Local Gurgaon Logistics</span>
          </div>
          <h2
            id="locations-heading"
            className="text-2xl sm:text-3xl font-black text-[#192e42] tracking-tight"
          >
            30 to 60-Minute Delivery Across Gurgaon Locations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Riders deployed across Cyber City, DLF Phases, Golf Course Road, and Sohna Road.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {seoConfig.localities.map((loc) => (
            <div
              key={loc.name}
              className="bg-white border border-slate-200 rounded-xl p-3.5 sm:p-4 hover:border-[#84cc16] hover:shadow-md transition flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="flex items-center gap-1 text-emerald-700 font-bold">
                    <Clock className="w-3 h-3" />
                    <span>{loc.timing}</span>
                  </span>
                  <span className="text-[9px] bg-emerald-50 text-emerald-700 border border-emerald-200 px-1.5 py-0.2 rounded font-bold">
                    Active
                  </span>
                </div>

                <h3 className="font-bold text-xs sm:text-sm text-[#192e42]">
                  {loc.name}
                </h3>

                <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  <strong className="text-slate-700">Hotspots:</strong> {loc.popularHotspot}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] text-slate-500">COD Available</span>
                <a
                  href={`https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
                    `Hi, I need vape delivery to ${loc.name}, Gurgaon.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 hover:text-[#192e42] transition"
                  aria-label={`Order vape delivery to ${loc.name} on WhatsApp`}
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>Order Now</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Note */}
        <div className="mt-6 text-center text-xs text-slate-600 bg-white p-3.5 rounded-xl border border-slate-200 max-w-xl mx-auto shadow-2xs">
          📍 Don’t see your exact gated society or sector listed? We cover <strong>all 115+ sectors</strong> of Gurugram.
          <a
            href={`https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
              "Hi, I want to check delivery time for my specific Gurgaon address."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 font-bold hover:underline ml-1"
          >
            Share Location on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}
