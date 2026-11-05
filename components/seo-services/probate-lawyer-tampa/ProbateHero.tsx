import React from "react";
import Image from "next/image";
import TypingTitle from "@/components/shared/TypingTitle";

export function ProbateHero() {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden min-h-[600px] lg:min-h-[680px] flex flex-col justify-end"
      style={{
        backgroundImage: "url('/images/hero-bg-image-main.webp')",
      }}
    >
      <link
        rel="preload"
        as="image"
        href="/images/hero-bg-image-main.webp"
        type="image/webp"
        fetchPriority="high"
      />
      {/* Scoped Keyframes & Animation Styles for Text Animations */}
      <style>{`
        @keyframes heroSlideUpMask {
          0% {
            transform: translateY(115%);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes heroFadeInUp {
          0% {
            opacity: 0;
            transform: translateY(24px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroFadeInDown {
          0% {
            opacity: 0;
            transform: translateY(-16px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes heroLineExpand {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 3.5rem;
            opacity: 1;
          }
        }
        @keyframes heroImageRise {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .anim-hero-tags {
          animation: heroFadeInDown 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
        }
        .anim-hero-headline-1 {
          animation: heroSlideUpMask 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.25s both;
        }
        .anim-hero-headline-2 {
          animation: heroSlideUpMask 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.38s both;
        }
        .anim-hero-line {
          animation: heroLineExpand 0.75s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
        }
        .anim-hero-desc {
          animation: heroFadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.62s both;
        }
        .anim-hero-buttons {
          animation: heroFadeInUp 0.85s cubic-bezier(0.16, 1, 0.3, 1) 0.75s both;
        }
        .anim-hero-portrait {
          animation: heroImageRise 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-hero-tags,
          .anim-hero-headline-1,
          .anim-hero-headline-2,
          .anim-hero-line,
          .anim-hero-desc,
          .anim-hero-buttons,
          .anim-hero-portrait {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
            width: auto !important;
          }
        }
      `}</style>

      {/* Soft overall white shade across the entire background image */}
      <div className="absolute inset-0 bg-white/35 pointer-events-none" />

      {/* Gentle smooth gradient from left for maximum text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent pointer-events-none" />

      {/* Same 1320px Container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 pt-10 pb-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end min-h-[560px] lg:min-h-[640px]">
          {/* Left Column: Headline, Tags, Description, CTAs - Centered in middle */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center space-y-6 self-center py-10 lg:py-16">
            {/* Practice Area Tags */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-[13px] md:text-sm font-semibold tracking-widest text-[#091D46] uppercase reveal-left">
              <span>Probate Lawyer in Tampa</span>
            </div>

            {/* Main Headline - Typing Animation Without Cursor */}
            <TypingTitle
              as="h1"
              className="font-serif text-4xl sm:text-5xl md:text-[52px]  text-[#091D46] font-normal leading-[1.08] tracking-tight"
              text={["Settle Your Loved One’s Estate", "With Legal Guidance"]}
              speed={28}
              delay={100}
            />

            {/* Gold Accent Line */}
            <div className="w-14 h-1 bg-[#ECAB3C] rounded-full reveal-left reveal-delay-1" />

            {/* Description Text - Reveal from Left */}
            <p className="text-sm sm:text-base md:text-[17px] text-[#4a5568] leading-relaxed max-w-xl reveal-left reveal-delay-2">
              When a family member passes away in Tampa, transferring their property requires legal court approval. Attorney Cynthia I. Waisman guides Tampa families through formal administration, summary administration, ancillary probate, contested estates and other Florida probate matters. Our probate lawyer tampa can review your loved one&apos;s estate, explain the available probate process, prepare court filings and guide the personal representative through the legal work ahead. Start with a consultation focused on your family&apos;s situation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 reveal-left reveal-delay-3">
              {/* Button 1: Schedule A Consultation */}
              <button
                type="button"
                data-open-consultation
                aria-label="Schedule a consultation"
                className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2 shadow-xs transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Schedule A Consultation</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </button>

              {/* Button 2: Call (813) 279-6180 */}
              <a
                href="tel:+18132796180"
                aria-label="Call (813) 279-6180"
                className="bg-white/90 hover:bg-[#091D46] hover:text-white text-[#091D46] border border-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2 transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Call (813) 279-6180</span>
                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Cynthia Portrait - Reveal from Right */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end self-end pb-0 leading-none">
            <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none flex justify-center lg:justify-end items-end leading-none reveal-image-right">
              <Image
                src="/images/cynthia.png"
                alt="Attorney Cynthia I. Waisman - Tampa Probate Lawyer"
                width={752}
                height={1126}
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                className="w-auto h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[640px] object-contain object-bottom drop-shadow-sm select-none block align-bottom -mb-px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProbateHero;
