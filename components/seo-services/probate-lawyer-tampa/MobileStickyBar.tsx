import React from "react";

export function MobileStickyBar() {
  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#091D46]/95 backdrop-blur-md border-t border-[#ECAB3C]/30 p-2.5 sm:p-3 flex items-center gap-2.5 shadow-2xl"
      aria-label="Quick contact mobile bar"
    >
      <a
        href="tel:+18132796180"
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all"
      >
        <svg
          className="w-4 h-4 text-[#091D46]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
        <span>Call Now</span>
      </a>

      <a
        href="#consult"
        data-open-consultation
        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-white text-[#091D46] hover:bg-slate-100 font-bold text-sm tracking-wide shadow-md active:scale-95 transition-all"
      >
        Free Consultation
      </a>
    </div>
  );
}
