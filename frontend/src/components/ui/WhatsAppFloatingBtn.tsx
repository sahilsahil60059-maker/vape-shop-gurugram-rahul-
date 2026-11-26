import { seoConfig } from "@/config/seo";

function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.954 1.179-.176.2-.351.226-.652.075-.301-.15-1.27-.468-2.42-1.493-.894-.798-1.498-1.784-1.674-2.085-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.15-.176.2-.301.3-.502.1-.2.05-.376-.025-.527-.075-.15-.678-1.634-.929-2.239-.244-.589-.492-.51-.678-.519-.175-.009-.376-.009-.577-.009-.2 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511s1.079 2.912 1.23 3.113c.15.2 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.377.197 1.896.119.579-.087 1.78-.727 2.031-1.43.251-.703.251-1.305.176-1.43-.076-.126-.276-.201-.577-.352zM12.04 2C6.518 2 2.037 6.476 2.037 11.993c0 1.84.498 3.567 1.365 5.05L2 22l5.12-1.342c1.43.782 3.064 1.228 4.92 1.228 5.522 0 10.003-4.476 10.003-9.993C22.043 6.476 17.562 2 12.04 2zm0 18.286c-1.619 0-3.116-.486-4.364-1.321l-.313-.21-3.238.849.864-3.158-.23-.366c-.958-1.309-1.519-2.91-1.519-4.587 0-4.411 3.593-8 8.01-8 4.417 0 8.01 3.589 8.01 8 0 4.411-3.593 8-8.01 8z"/>
    </svg>
  );
}

export function WhatsAppFloatingBtn() {
  const whatsappUrl = `https://wa.me/${seoConfig.whatsappNumber}?text=${encodeURIComponent(
    seoConfig.whatsappMessage
  )}`;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 bg-[#84cc16] hover:bg-[#74b810] text-[#0f1d2b] font-black px-4 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 animate-bounce duration-1000"
        aria-label="Order on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 fill-[#0f1d2b]" />
        <span className="text-xs sm:text-sm tracking-wide font-black pr-0.5">
          WhatsApp Fast Order
        </span>
      </a>
    </div>
  );
}
