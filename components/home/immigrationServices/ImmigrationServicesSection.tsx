import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImmigrationCard {
    id: string;
    title: string;
    subtitle: string;
    image: string;
    badgeIcon: React.ReactNode;
    features: string[];
    link: string;
}

const immigrationCards: ImmigrationCard[] = [
    {
        id: "family-marriage",
        title: "Family & Marriage",
        subtitle: "Helping families stay together and build a future in the United States.",
        image: "/images/immigration/family-marriage.png",
        link: "/immigration-law-overview",
        badgeIcon: (
            <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#091D46]"
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
        ),
        features: [
            "Marriage-Based Green Cards",
            "Family-Based Petitions",
            "Fiancé / K-1 Visas",
            "Adjustment of Status",
            "Consular Processing",
        ],
    },
    {
        id: "green-cards",
        title: "Green Cards & Status",
        subtitle: "Guidance for obtaining, maintaining, and updating your immigration status.",
        image: "/images/immigration/green-cards.png",
        link: "/immigration-law-overview",
        badgeIcon: (
            <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#091D46]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2H9.17A3.001 3.001 0 0112 14z"
                />
            </svg>
        ),
        features: [
            "Removal of Conditions (I-751)",
            "Green Card Renewal & Replacement",
            "Adjustment of Status",
            "Advance Parole & Re-Entry Permits",
            "Immigration Waivers",
        ],
    },
    {
        id: "citizenship",
        title: "Citizenship",
        subtitle: "Helping you take the next step toward becoming a U.S. citizen.",
        image: "/images/immigration/citizenship.png",
        link: "/immigration-law-overview",
        badgeIcon: (
            <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#091D46]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                />
            </svg>
        ),
        features: [
            "Naturalization / N-400",
            "Citizenship Interviews",
            "Citizenship Exceptions",
            "USCIS RFE & NOID Responses",
            "Proof of Citizenship",
        ],
    },
    {
        id: "special-matters",
        title: "Special Immigration Matters",
        subtitle: "Support for unique and sensitive immigration situations.",
        image: "/images/immigration/special-matters.png",
        link: "/immigration-law-overview",
        badgeIcon: (
            <svg
                className="w-6 h-6 sm:w-7 sm:h-7 text-[#091D46]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
        features: [
            "VAWA (Abused Spouse)",
            "U Visas (Crime Victims)",
            "E-2 Investor Visas",
            "USCIS Case Issues (RFE, NOID, Delays)",
            "Other Humanitarian Options",
        ],
    },
];

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
                <div className="flex flex-col space-y-3.5 max-w-2xl mb-10 sm:mb-12">
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

                {/* 4 Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
                    {immigrationCards.map((card, idx) => (
                        <div
                            key={card.id}
                            data-animate="fade-up"
                            data-delay={(idx * 100 + 150).toString()}
                            className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                        >
                            <div>
                                {/* Top Image Header */}
                                <div className="relative w-full h-40 sm:h-44 overflow-hidden">
                                    <Image
                                        src={card.image}
                                        alt={card.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Floating Round Icon Badge - 60px */}
                                <div className="relative -mt-[30px] flex justify-center z-10">
                                    <div className="w-[60px] h-[60px] rounded-full bg-[#fdfbf7] border-2 border-white shadow-md flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
                                        {card.badgeIcon}
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="pt-3 px-5 sm:px-6 pb-4 flex flex-col text-center">
                                    {/* Title - Title color does not change on hover */}
                                    <h4 className="font-serif text-lg sm:text-[19px] font-semibold text-[#091D46] transition-colors">
                                        {card.title}
                                    </h4>

                                    {/* Subtitle */}
                                    <p className="text-xs text-gray-500 leading-snug mt-1.5 min-h-[32px]">
                                        {card.subtitle}
                                    </p>

                                    {/* Feature Bullet Points */}
                                    <ul className="mt-5 space-y-2.5 text-left border-t border-gray-100 pt-4">
                                        {card.features.map((feature, fIdx) => (
                                            <li
                                                key={fIdx}
                                                className="flex items-start gap-2.5 text-xs text-[#334155] font-medium leading-snug"
                                            >
                                                <svg
                                                    className="w-4 h-4 text-[#ECAB3C] shrink-0 mt-0.5"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Card Footer Link - Button only changes color on direct hover */}
                            <div className="px-5 sm:px-6 pb-6 pt-2">
                                <Link
                                    href={card.link}
                                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#091D46] hover:text-[#ECAB3C] transition-colors group/btn"
                                >
                                    <span>Learn More</span>
                                    <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    ))}
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
                            <Link
                                href="/contact"
                                className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase px-7 py-3 rounded-md shadow-xs transition-all duration-300 inline-flex items-center justify-center gap-2 group hover:shadow-md w-full max-w-[270px]"
                            >
                                <span>Schedule A Consultation</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-200">
                                    →
                                </span>
                            </Link>
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

