import { seoConfig } from "@/config/seo";
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldAlert } from "lucide-react";

export function ContactSection() {
  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    "Hi, I want to inquire about vape availability and express delivery in Gurgaon."
  )}`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-10 sm:py-14 bg-[#f8fafc] text-[#192e42]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="text-emerald-700 text-xs font-black uppercase tracking-wider mb-1">
            Store Location &amp; Contact
          </div>
          <h2
            id="contact-heading"
            className="text-2xl sm:text-3xl font-black text-[#192e42] tracking-tight"
          >
            Contact Vape Shop Gurgaon
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 font-medium">
            Questions about vape models, flavor availability, or express delivery in your Gurgaon sector? Our team is available 7 days a week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Store Info Card (NAP) */}
          <div className="bg-white border border-slate-200 text-[#192e42] rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm">
            <h3 className="text-base sm:text-lg font-black text-[#192e42]">
              Official Store Address &amp; Helpline
            </h3>

            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#192e42] block font-bold">Physical Store Address:</strong>
                  <span className="text-slate-600">
                    {seoConfig.address.streetAddress}, {seoConfig.address.addressLocality}, {seoConfig.address.addressRegion} - {seoConfig.address.postalCode}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-[#192e42] block font-bold">WhatsApp Support:</strong>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-700 transition text-[#192e42] font-semibold"
                  >
                    Chat on WhatsApp (+91 {seoConfig.whatsappNumber.slice(2)})
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-[#192e42] block font-bold">Direct Email:</strong>
                  <a href={`mailto:${seoConfig.email}`} className="hover:text-emerald-700 transition text-[#192e42] font-semibold">
                    {seoConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
                <div>
                  <strong className="text-[#192e42] block font-bold">Operating Hours:</strong>
                  <span>{seoConfig.openingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black text-xs sm:text-sm shadow-md transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat with Gurgaon Store Manager</span>
              </a>
            </div>
          </div>

          {/* Delivery Hours & Neighborhood Quick Info */}
          <div className="bg-white border border-slate-200 text-[#192e42] rounded-2xl p-5 sm:p-6 space-y-4 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#192e42] mb-3">
                Express Dispatch Hub
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our central dispatch hub is positioned near Golf Course Road / Cyber City, allowing our delivery fleet to reach DLF Phase 1-5, Sohna Road, and adjacent sectors within 30 to 45 minutes on average.
              </p>

              <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-xs font-bold text-[#192e42] mb-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Real-time Live Gurgaon Dispatch Status</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  Fleet currently active. Doorstep dispatch ready for immediate WhatsApp bookings.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldAlert className="w-3.5 h-3.5 text-amber-500" />
                Age 18+ Mandatory
              </span>
              <span className="text-emerald-700 font-bold">Cash on Delivery Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
