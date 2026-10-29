import React from "react";
import Link from "next/link";

export default function CallToSection() {
    return (
        <section className="relative w-full bg-[#061533] overflow-hidden py-9 lg:py-10 text-white border-b border-[#091D46]">
            {/* Subtle decorative foliage pattern on far left */}
            <div className="absolute left-0 top-0 bottom-0 w-44 pointer-events-none overflow-hidden opacity-10">
                <svg
                    className="w-full h-full text-white"
                    viewBox="0 0 160 120"
                    fill="currentColor"
                >
                    <path d="M-20 120 C 10 90, 40 60, 70 10 C 50 40, 25 80, -20 120 Z" />
                    <path d="M-5 95 C 25 85, 55 65, 75 35 C 50 50, 20 75, -5 95 Z" />
                    <path d="M10 110 C 40 95, 70 80, 90 50 C 65 65, 30 90, 10 110 Z" />
                    <path d="M-15 70 C 15 60, 45 45, 60 20 C 40 35, 10 55, -15 70 Z" />
                </svg>
            </div>

            {/* Same 1320px Global Container */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
                    {/* Left Column: Heading and Subtitle */}
                    <div className="flex-1 max-w-xl text-center lg:text-left" data-animate="fade-up" data-delay="100">
                        <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-normal text-white leading-tight tracking-tight">
                            Your legacy. Their future. Our focus.
                        </h2>
                        <p className="text-xs sm:text-[13.5px] text-gray-300 font-light mt-2 leading-relaxed">
                            An estate plan is about more than documents. It&apos;s about your
                            family, your wishes, and what happens when you&apos;re no longer
                            there to explain them.
                        </p>
                    </div>

                    {/* Middle Column: CTA Button & Phone */}
                    <div className="flex flex-col items-center justify-center shrink-0 space-y-2.5" data-animate="zoom-in" data-delay="200">
                        {/* Schedule Consultation Button */}
                        <button
                            type="button"
                            data-open-consultation
                            aria-label="Schedule a consultation"
                            className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs sm:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2.5 shadow-md transition-all duration-300 group hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                        >
                            <span>Schedule A Consultation</span>
                            <span className="group-hover:translate-x-1 transition-transform duration-200">
                                →
                            </span>
                        </button>

                        {/* Direct Phone Call */}
                        <a
                            href="tel:+18132796180"
                            className="inline-flex items-center gap-2 text-white hover:text-[#ECAB3C] transition-colors font-bold text-sm sm:text-[15px] tracking-wide pt-0.5 group"
                        >
                            <svg
                                className="w-4 h-4 text-[#ECAB3C] group-hover:scale-110 transition-transform"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                            </svg>
                            <span>(813) 279-6180</span>
                        </a>
                    </div>

                    {/* Vertical Divider (Desktop Only) */}
                    <div className="hidden lg:block w-px bg-white/20 h-16 self-center shrink-0 mx-2" />

                    {/* Right Column: 3 Office Locations */}
                    <div className="flex flex-col space-y-3 shrink-0 text-left" data-animate="fade-left" data-delay="300">
                        {/* Office 1: Tampa */}
                        <div className="flex items-center gap-3">
                            <svg
                                className="w-5 h-5 text-[#ECAB3C] shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                                />
                            </svg>
                            <span className="text-xs sm:text-[13px] text-gray-200 font-medium">
                                Tampa Office
                            </span>
                        </div>

                        {/* Office 2: Clearwater */}
                        <div className="flex items-start gap-3">
                            <svg
                                className="w-5 h-5 text-[#ECAB3C] shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                            <div className="leading-tight">
                                <span className="text-xs sm:text-[13px] text-gray-200 font-medium block">
                                    Clearwater Office
                                </span>
                                <span className="text-[10.5px] sm:text-[11px] text-gray-400 block mt-0.5">
                                    (By Appointment)
                                </span>
                            </div>
                        </div>

                        {/* Office 3: Wesley Chapel */}
                        <div className="flex items-start gap-3">
                            <svg
                                className="w-5 h-5 text-[#ECAB3C] shrink-0 mt-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                strokeWidth={1.8}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                            <div className="leading-tight">
                                <span className="text-xs sm:text-[13px] text-gray-200 font-medium block">
                                    Wesley Chapel Office
                                </span>
                                <span className="text-[10.5px] sm:text-[11px] text-gray-400 block mt-0.5">
                                    (By Appointment)
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

