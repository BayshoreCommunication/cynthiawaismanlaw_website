import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden min-h-[600px] lg:min-h-[680px] flex flex-col justify-end"
            style={{
                backgroundImage: "url('/images/hero-bg-image-main.png')",
            }}
        >
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
                        <div className="anim-hero-tags flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-[13px] md:text-sm font-semibold tracking-widest text-[#091D46] uppercase">
                            <span>Immigration</span>
                            <span className="text-gray-300">|</span>
                            <span>Estate Planning</span>
                            <span className="text-gray-300">|</span>
                            <span>Guardianship</span>
                            <span className="text-gray-300">|</span>
                            <span>Probate</span>
                        </div>

                        {/* Main Headline with masked slide-up reveal */}
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] text-[#091D46] font-normal leading-[1.08] tracking-tight">
                            <span className="block overflow-hidden pb-1 -mb-1">
                                <span className="block anim-hero-headline-1">
                                    Trusted Legal Guidance
                                </span>
                            </span>
                            <span className="block overflow-hidden pb-1.5 -mb-1.5">
                                <span className="block anim-hero-headline-2">
                                    For Every Chapter
                                </span>
                            </span>
                        </h1>

                        {/* Gold Accent Line */}
                        <div className="anim-hero-line w-14 h-1 bg-[#ECAB3C] rounded-full origin-left" />

                        {/* Description Text */}
                        <p className="anim-hero-desc text-sm sm:text-base md:text-[17px] text-[#4a5568] leading-relaxed max-w-xl">
                            Helping individuals and families with immigration, estate planning, guardianship, and probate with compassion, integrity, and personalized solutions.
                        </p>

                        {/* CTA Buttons */}
                        <div className="anim-hero-buttons flex flex-wrap items-center gap-4 pt-2">
                            {/* Button 1: Book A Consultation */}
                            <button
                                type="button"
                                data-open-consultation
                                aria-label="Book a consultation"
                                className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2 shadow-xs transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                            >
                                <span>Book A Consultation</span>
                                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                                    →
                                </span>
                            </button>

                            {/* Button 2: Our Services */}
                            <Link
                                href="/immigration-law-overview"
                                className="bg-white/90 hover:bg-[#091D46] hover:text-white text-[#091D46] border border-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2 transition-all duration-300 group hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <span>Our Services</span>
                                <span className="group-hover:translate-x-1.5 transition-transform duration-200">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Cynthia Portrait flush with bottom edge */}
                    <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end self-end pb-0 leading-none">
                        <div className="anim-hero-portrait relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none flex justify-center lg:justify-end items-end leading-none">
                            <Image
                                src="/images/cynthia.png"
                                alt="Attorney Cynthia I. Waisman"
                                width={752}
                                height={1126}
                                priority
                                className="w-auto h-[380px] sm:h-[460px] md:h-[520px] lg:h-[580px] xl:h-[640px] object-contain object-bottom drop-shadow-sm select-none block align-bottom -mb-px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
