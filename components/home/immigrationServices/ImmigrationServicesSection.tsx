import React from "react";

export default function ImmigrationServicesSection() {
    return (
        <section className="relative w-full bg-white overflow-hidden py-12 lg:py-16">
            {/* Top Background Banner Area with /images/immigration-services.png */}
            <div
                className="absolute top-0 left-0 right-0 h-[480px] sm:h-[520px] lg:h-[560px] bg-cover bg-no-repeat bg-[position:right_center] lg:bg-center pointer-events-none"
                style={{
                    backgroundImage: "url('/images/immigration-services.png')",
                }}
            >
                {/* Gentle gradient wash on left for maximum text contrast */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-white/10 lg:to-transparent lg:w-[60%]" />
            </div>

            {/* Same 1320px Global Container */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4">
                {/* Section Header */}
                <div className="flex flex-col space-y-3.5 max-w-2xl mb-8 sm:mb-10">
                    {/* Pre-heading */}
                    <div className="inline-flex items-center gap-2.5" data-animate="fade-down" data-delay="100">
                        <span className="w-8 h-[2px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "2rem" } as React.CSSProperties} />
                        <h3 className="text-xs font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
                            Immigration Services
                        </h3>
                    </div>

                    {/* Main Heading */}
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#091D46] tracking-tight leading-[1.15]" data-animate="fade-up" data-delay="200">
                        Helping You Move Forward
                        <br />
                        With Confidence
                    </h2>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#4a5568] leading-relaxed max-w-xl" data-animate="fade-up" data-delay="300">
                        We provide personalized immigration guidance for individuals and families,
                        helping you navigate USCIS processes and build a brighter future in the United
                        States.
                    </p>
                </div>

                {/* Bottom Strip: 4 Credibility Badges + CTA Box */}
                <div className="bg-[#f8fafc] border border-gray-100 rounded-xl p-6 sm:p-7 shadow-xs mt-10 lg:mt-12">
                    <div className="flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-6 lg:gap-8">
                        {/* 4 Credibility Badges */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 flex-1 w-full">
                            {/* Badge 1: 20+ Years */}
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-10 h-10 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 8l1.5 3 3.5.5-2.5 2.5.5 3.5-3-1.5-3 1.5.5-3.5-2.5-2.5 3.5-.5z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 18c-1.5-2-2-4.5-2-7 0-4.5 3.5-8 8-8m8 15c1.5-2 2-4.5 2-7 0-4.5-3.5-8-8-8"
                                        />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-xs sm:text-[13px] text-[#091D46] leading-snug">
                                        25+ Years of Experience
                                    </p>
                                    <p className="text-[11px] text-gray-500 leading-snug">
                                        Trusted legal guidance for individuals and families.
                                    </p>
                                </div>
                            </div>

                            {/* Badge 2: Personalized */}
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-10 h-10 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-xs sm:text-[13px] text-[#091D46] leading-snug">
                                        Personalized Representation
                                    </p>
                                    <p className="text-[11px] text-gray-500 leading-snug">
                                        Your situation is unique. So is our approach.
                                    </p>
                                </div>
                            </div>

                            {/* Badge 3: Tampa Bay */}
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-10 h-10 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                    <svg
                                        className="w-5 h-5"
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
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-xs sm:text-[13px] text-[#091D46] leading-snug">
                                        Serving The Tampa Bay Area
                                    </p>
                                    <p className="text-[11px] text-gray-500 leading-snug">
                                        Tampa • Clearwater • Wesley Chapel
                                    </p>
                                </div>
                            </div>

                            {/* Badge 4: USCIS */}
                            <div className="flex flex-col items-center text-center space-y-2">
                                <div className="w-10 h-10 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-bold text-xs sm:text-[13px] text-[#091D46] leading-snug">
                                        USCIS-Focused Representation
                                    </p>
                                    <p className="text-[11px] text-gray-500 leading-snug">
                                        Help with applications, RFEs, interviews, and more.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Divider & CTA Box */}
                        <div className="flex flex-col items-center justify-center text-center shrink-0 w-full xl:w-auto pt-6 xl:pt-0 border-t xl:border-t-0 xl:border-l border-gray-200 xl:pl-8 space-y-3">
                            <span className="text-[11px] font-bold tracking-wider text-[#091D46] uppercase">
                                Ready to discuss your immigration options?
                            </span>
                            <button
                                type="button"
                                data-open-consultation
                                aria-label="Schedule a consultation"
                                className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase px-7 py-3 rounded-md shadow-xs transition-all duration-300 inline-flex items-center justify-center gap-2 group hover:shadow-md w-full max-w-[270px] cursor-pointer"
                            >
                                <span>Schedule A Consultation</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </button>
                            <a
                                href="tel:+18132796180"
                                className="inline-flex items-center gap-2 text-[#091D46] hover:text-[#ECAB3C] transition-colors font-bold text-sm tracking-wide group pt-0.5"
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
                    </div>
                </div>
            </div>
        </section>
    );
}

