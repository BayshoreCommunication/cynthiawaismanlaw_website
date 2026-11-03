import React from "react";
import Link from "next/link";

export function ConsultationCtaSection() {
  return (
    <section
      id="consult"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#091D46] via-[#061533] to-[#040e24] text-white border-t border-[#ECAB3C]/30 overflow-hidden"
    >
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#ECAB3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ECAB3C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-[860px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ECAB3C]/20 border border-[#ECAB3C]/40 text-[#ECAB3C] text-xs font-bold uppercase tracking-wider mb-5">
            Compassionate & Experienced Legal Guidance
          </div>

          <h2 className="font-serif text-[clamp(2rem,3.4vw,2.75rem)] font-bold text-white leading-[1.2] mb-5">
            Start your Tampa probate case with a consultation
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-4">
            A probate case can involve a home, financial accounts, family
            inheritance, creditor claims or years of financial records. You
            deserve a clear view of the legal work before you begin.
          </p>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed mb-8">
            Our probate lawyer tampa can evaluate your estate, explain the
            available probate process, identify the issues requiring attention and
            guide your family through the next steps. Call{" "}
            <a
              href="tel:+18132796180"
              className="text-[#ECAB3C] hover:underline font-semibold"
            >
              +1 (813) 279-6180
            </a>{" "}
            today to schedule your probate consultation with attorney Cynthia I.
            Waisman. We will review your estate documents, explain your exact
            probate options and handle your court filings from day one.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:+18132796180"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-white text-[#091D46] hover:bg-slate-100 font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl"
            >
              <svg
                className="w-5 h-5 text-[#ECAB3C]"
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
              <span>Call +1 (813) 279-6180</span>
            </a>

            <Link
              href="/contact"
              data-open-consultation
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-base transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              <span>Schedule Your Probate Consultation</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
