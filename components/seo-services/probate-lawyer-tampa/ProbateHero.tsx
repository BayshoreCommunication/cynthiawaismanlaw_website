import React from "react";
import Image from "next/image";

export function ProbateHero() {
  return (
    <header className="relative w-full bg-white text-[#2b3545] py-12 sm:py-16 lg:py-20 border-b border-[#e4dccb]/80">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <span className="inline-block text-[#b8914a] font-bold text-xs tracking-[0.18em] uppercase mb-3.5">
              Probate Lawyer in Tampa
            </span>
            <h1 className="font-serif text-[#0e2240] text-3xl sm:text-4xl lg:text-[44px] font-semibold leading-[1.2] mb-5 tracking-tight">
              Settle Your Loved One’s Estate With Legal Guidance
            </h1>
            <p className="text-[#586375] text-base sm:text-[17px] leading-relaxed mb-7">
              When a family member passes away in Tampa, transferring their property requires legal court approval. Attorney Cynthia I. Waisman guides Tampa families through formal administration, summary administration, ancillary probate, contested estates and other Florida probate matters. Our probate lawyer tampa can review your loved one&apos;s estate, explain the available probate process, prepare court filings and guide the personal representative through the legal work ahead. Start with a consultation focused on your family&apos;s situation.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <a
                href="#consult"
                data-open-consultation
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-[#b8914a] hover:bg-[#e0bd7c] text-[#101c33] border-2 border-[#b8914a] hover:border-[#e0bd7c] transition-all duration-200 text-sm sm:text-base shadow-sm hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </a>
              <a
                href="tel:+18132796180"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-transparent text-[#0e2240] border-2 border-[#0e2240] hover:bg-[#0e2240] hover:text-white transition-all duration-200 text-sm sm:text-base hover:-translate-y-0.5"
              >
                Call +1 (813) 279-6180
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image with Gold Offset Frame */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] aspect-[4/5] rounded-[24px] overflow-hidden bg-[#0e2240] shadow-[12px_12px_0_#b8914a]">
              <Image
                src="/images/seo-services/probate.png"
                alt="Tampa Probate Legal Court Guidance"
                fill
                sizes="(max-width: 860px) 360px, 400px"
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
