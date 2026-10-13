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
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-[13px] md:text-sm font-semibold tracking-widest text-[#091D46] uppercase">
                            <span>Immigration</span>
                            <span className="text-gray-300">|</span>
                            <span>Estate Planning</span>
                            <span className="text-gray-300">|</span>
                            <span>Guardianship</span>
                            <span className="text-gray-300">|</span>
                            <span>Probate</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="font-serif text-4xl sm:text-5xl md:text-[56px] lg:text-[62px] text-[#091D46] font-normal leading-[1.08] tracking-tight">
                            Trusted Legal Guidance
                            <br />
                            For Every Chapter
                        </h1>

                        {/* Gold Accent Line */}
                        <div className="w-14 h-1 bg-[#ECAB3C] rounded-full" />

                        {/* Description Text */}
                        <p className="text-sm sm:text-base md:text-[17px] text-[#4a5568] leading-relaxed max-w-xl">
                            Helping individuals and families with immigration, estate planning, guardianship, and probate with compassion, integrity, and personalized solutions.

                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            {/* Button 1: Book A Consultation */}
                            <Link
                                href="/contact"
                                className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2 shadow-xs transition-all duration-300 group"
                            >
                                <span>Book A Consultation</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </Link>

                            {/* Button 2: Our Services */}
                            <Link
                                href="/immigration-law-overview"
                                className="bg-white/90 hover:bg-[#091D46] hover:text-white text-[#091D46] border border-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-7 py-3.5 rounded-md inline-flex items-center gap-2 transition-all duration-300 group"
                            >
                                <span>Our Services</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Cynthia Portrait flush with bottom edge */}
                    <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end self-end pb-0 leading-none">
                        <div className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none flex justify-center lg:justify-end items-end leading-none">
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

