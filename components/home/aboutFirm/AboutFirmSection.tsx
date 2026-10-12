import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutFirmSection() {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat overflow-hidden flex flex-col justify-end"
            style={{
                backgroundImage: "url('/images/about-firm-bg-image.png')",
            }}
        >
            {/* Subtle overlay for optimal contrast and warmth */}
            <div className="absolute inset-0 bg-[#fbf9f5]/70 backdrop-blur-[0.5px] pointer-events-none" />

            {/* Same 1320px Container */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                    {/* Left Column: Cynthia Portrait flush to bottom, reaching top text height */}
                    <div className="lg:col-span-4 xl:col-span-4 flex justify-center lg:justify-start items-end self-end relative leading-none pb-0">
                        <div className="relative w-full max-w-[340px] sm:max-w-[380px] lg:max-w-none flex justify-center lg:justify-start items-end leading-none">
                            <Image
                                src="/images/cynthia2.png"
                                alt="Attorney Cynthia I. Waisman"
                                width={692}
                                height={1037}
                                priority
                                className="w-auto h-[440px] sm:h-[480px] md:h-[520px] lg:h-[560px] xl:h-[600px] object-contain object-bottom drop-shadow-md select-none block align-bottom -mb-px"
                            />
                        </div>
                    </div>

                    {/* Center Column: About Our Firm Text + 4 Stat Badges - Vertically Centered */}
                    <div className="lg:col-span-4 xl:col-span-5 flex flex-col justify-center space-y-5 self-center py-10 lg:py-14">
                        {/* Pre-heading */}
                        <div className="inline-flex items-center gap-2.5">
                            <span className="w-8 h-[2px] bg-[#ECAB3C]" />
                            <h3 className="text-xs font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
                                About Our Firm
                            </h3>
                        </div>

                        {/* Main Heading */}
                        <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#091D46] tracking-tight leading-[1.15]">
                            Guiding Families Toward
                            <br />a More Secure Future
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-sm sm:text-[14px] text-[#4a5568] leading-relaxed">
                            Cynthia I. Waisman, P.A. is a boutique law firm focused on
                            immigration, estate planning, probate, and guardianship matters.
                            Cynthia works directly with clients to understand their goals,
                            answer their questions, and develop practical legal solutions
                            tailored to their unique situations.
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-sm sm:text-[14px] text-[#4a5568] leading-relaxed">
                            With over 20 years of legal experience, she is known for her
                            compassionate, responsive, and client-centered approach. Clients
                            appreciate her ability to explain complex legal matters in simple
                            terms and her commitment to providing high-quality, personalized
                            representation at every step.
                        </p>

                        {/* 4 Feature / Stat Badges Row */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-2 border-t border-gray-200/80 pt-5">
                            {/* Stat 1: 20+ Years */}
                            <div className="flex items-center gap-2.5 sm:border-r sm:border-gray-200/80 sm:pr-2">
                                <div className="w-9 h-9 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                                        />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <p className="font-bold text-xs sm:text-[13px] text-[#091D46]">
                                        20+ Years
                                    </p>
                                    <p className="text-[10px] text-gray-500">of Legal Experience</p>
                                </div>
                            </div>

                            {/* Stat 2: Personalized Guidance */}
                            <div className="flex items-center gap-2.5 sm:border-r sm:border-gray-200/80 sm:px-2">
                                <div className="w-9 h-9 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <p className="font-bold text-xs sm:text-[11.5px] text-[#091D46]">
                                        Personalized Guidance
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        Direct Attorney Communication
                                    </p>
                                </div>
                            </div>

                            {/* Stat 3: Compassionate Approach */}
                            <div className="flex items-center gap-2.5 sm:border-r sm:border-gray-200/80 sm:px-2">
                                <div className="w-9 h-9 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0">
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <p className="font-bold text-xs sm:text-[11.5px] text-[#091D46]">
                                        Compassionate Approach
                                    </p>
                                    <p className="text-[10px] text-gray-500">
                                        Focused on Your Family&apos;s Future
                                    </p>
                                </div>
                            </div>

                            {/* Stat 4: Serving Tampa Bay */}
                            <div className="flex items-center gap-2.5 sm:pl-2">
                                <div className="w-9 h-9 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0">
                                    <svg
                                        className="w-4 h-4"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                </div>
                                <div className="leading-tight">
                                    <p className="font-bold text-xs sm:text-[11.5px] text-[#091D46]">
                                        Serving Tampa Bay
                                    </p>
                                    <p className="text-[9.5px] text-gray-500">
                                        Tampa • Clearwater • Wesley Chapel
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Practice Areas Card - Vertically Centered */}
                    <div className="lg:col-span-4 xl:col-span-3 flex justify-center lg:justify-end items-center self-center py-10 lg:py-14">
                        <div className="w-full max-w-[340px] xl:max-w-[360px] bg-white rounded-xl shadow-lg border border-gray-100 p-6 sm:p-7 space-y-5">
                            {/* Card Header */}
                            <div className="inline-flex items-center gap-2.5 pb-1">
                                <span className="w-6 h-[2px] bg-[#ECAB3C]" />
                                <h4 className="text-xs font-bold tracking-wider text-[#091D46] uppercase font-sans">
                                    Practice Areas
                                </h4>
                            </div>

                            {/* Practice Area 1: Immigration */}
                            <Link
                                href="/immigration-law-overview"
                                className="flex items-start gap-3.5 group/pa transition-all"
                            >
                                <div className="w-11 h-11 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0 group-hover/pa:bg-[#ECAB3C] group-hover/pa:text-[#091D46] transition-all duration-300">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.8}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[14px] text-[#091D46] group-hover/pa:text-[#ECAB3C] transition-colors">
                                        Immigration
                                    </h5>
                                    <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">
                                        Family-based, asylum, deportation defense, visas and more
                                    </p>
                                </div>
                            </Link>

                            {/* Practice Area 2: Probate, Estate & Trust Administration */}
                            <Link
                                href="/probate-administration"
                                className="flex items-start gap-3.5 group/pa transition-all"
                            >
                                <div className="w-11 h-11 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0 group-hover/pa:bg-[#ECAB3C] group-hover/pa:text-[#091D46] transition-all duration-300">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.8}
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[14px] text-[#091D46] group-hover/pa:text-[#ECAB3C] transition-colors leading-snug">
                                        Probate, Estate &amp; Trust Administration
                                    </h5>
                                    <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">
                                        Wills, trusts, probate administration
                                    </p>
                                </div>
                            </Link>

                            {/* Practice Area 3: Estate Planning */}
                            <Link
                                href="/estate-planning"
                                className="flex items-start gap-3.5 group/pa transition-all"
                            >
                                <div className="w-11 h-11 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0 group-hover/pa:bg-[#ECAB3C] group-hover/pa:text-[#091D46] transition-all duration-300">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.8}
                                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[14px] text-[#091D46] group-hover/pa:text-[#ECAB3C] transition-colors">
                                        Estate Planning
                                    </h5>
                                    <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">
                                        Wills, living trusts, asset protection
                                    </p>
                                </div>
                            </Link>

                            {/* Practice Area 4: Guardianship */}
                            <Link
                                href="/guardianship-services"
                                className="flex items-start gap-3.5 group/pa transition-all"
                            >
                                <div className="w-11 h-11 rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 text-[#ECAB3C] flex items-center justify-center shrink-0 group-hover/pa:bg-[#ECAB3C] group-hover/pa:text-[#091D46] transition-all duration-300">
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.8}
                                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h5 className="font-bold text-[14px] text-[#091D46] group-hover/pa:text-[#ECAB3C] transition-colors">
                                        Guardianship
                                    </h5>
                                    <p className="text-[11.5px] text-gray-500 leading-snug mt-0.5">
                                        Protecting loved ones and planning for the future
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

