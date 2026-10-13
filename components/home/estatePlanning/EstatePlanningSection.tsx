import React from "react";

interface EstatePlanningFeature {
    id: string;
    title: string;
    description: string;
    icon: React.ReactNode;
}

const estatePlanningFeatures: EstatePlanningFeature[] = [
    {
        id: "direct-contact",
        title: "Work Directly With Cynthia",
        description:
            "You'll work directly with Cynthia, not a high-volume legal factory. She takes the time to hear your story, understand what matters to your family, and help you make informed decisions.",
        icon: (
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
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-1"
                />
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 7a4 4 0 11-8 0 4 4 0 018 0zM11 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
        ),
    },
    {
        id: "family-centered",
        title: "Plans Built Around Your Family",
        description:
            "Children. Second marriages. Property. Aging parents. Beneficiaries. Future care. Every family is different. Cynthia looks beyond the documents to understand the people the plan is designed to protect.",
        icon: (
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
    },
    {
        id: "experience",
        title: "Extensive Experience",
        description:
            "With decades of legal experience and more than 1,000 trusts personally prepared, Cynthia has helped families with a wide range of estate planning needs and complex situations.",
        icon: (
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
                    d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                />
            </svg>
        ),
    },
    {
        id: "personal-attention",
        title: "Personal Attention & Accessibility",
        description:
            "You receive the experience of an established attorney with the personal attention and accessibility of a boutique practice.",
        icon: (
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
    },
];

export default function EstatePlanningSection() {
    return (
        <section className="relative w-full overflow-hidden bg-white">
            {/* Top Hero Banner with Background Image */}
            <div
                className="relative w-full bg-cover bg-no-repeat bg-[position:center_right] sm:bg-[position:80%_center] lg:bg-center"
                style={{
                    backgroundImage: "url('/images/estate-planing-bg.png')",
                }}
            >
                {/* Smooth white gradient overlay on the left for text legibility */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-white/20 lg:to-transparent lg:w-[65%] pointer-events-none" />

                {/* Global 1320px Container */}
                <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[480px] lg:min-h-[520px]">
                        {/* Left Column: Heading, Subtitle, Text, Stat Box */}
                        <div className="lg:col-span-7 xl:col-span-6 flex flex-col space-y-4 max-w-xl">
                            {/* Pre-heading with Gold Line */}
                            <div className="inline-flex items-center gap-2.5">
                                <span className="w-8 h-[2px] bg-[#ECAB3C]" />
                                <h3 className="text-xs font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
                                    Estate Planning
                                </h3>
                            </div>

                            {/* Main Heading */}
                            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#091D46] tracking-tight leading-[1.15]">
                                Why Families Choose
                                <br />
                                Cynthia for Estate Planning
                            </h2>

                            {/* Subtitle */}
                            <h4 className="font-sans font-bold text-sm sm:text-[15px] text-[#091D46] leading-snug pt-1">
                                Your Family&apos;s Plan Shouldn&apos;t Come From a Legal Factory.
                            </h4>

                            {/* Paragraph */}
                            <p className="text-sm sm:text-[14px] text-[#4a5568] leading-relaxed">
                                At Cynthia I. Waisman, P.A., estate planning is personal. As a
                                boutique law firm, Cynthia works directly with clients to understand
                                your family, concerns, assets, and wishes before developing a plan
                                tailored to you.
                            </p>

                            {/* Highlight / Stat Card */}
                            <div className="bg-[#fef9f0] border border-[#ECAB3C]/35 rounded-xl p-5 sm:p-6 shadow-xs flex items-center gap-4 sm:gap-6 mt-3">
                                {/* Document Shield Icon */}
                                <div className="shrink-0 text-[#ECAB3C]">
                                    <svg
                                        className="w-14 h-14 sm:w-16 sm:h-16"
                                        viewBox="0 0 64 64"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        {/* Document Outline */}
                                        <path d="M14 6C12.8954 6 12 6.89543 12 8V56C12 57.1046 12.8954 58 14 58H32" />
                                        <path d="M14 6H38L50 18V28" />
                                        <path d="M38 6V18H50" />
                                        {/* Document Text Lines */}
                                        <path d="M20 22H30" />
                                        <path d="M20 30H36" />
                                        <path d="M20 38H28" />
                                        {/* Shield with Checkmark */}
                                        <path
                                            d="M44 32C44 32 56 35.5 56 43C56 52 44 58 44 58C44 58 32 52 32 43C32 35.5 44 32 44 32Z"
                                            strokeWidth="2.5"
                                        />
                                        <path
                                            d="M39 45L42.5 48.5L49 42"
                                            strokeWidth="2.5"
                                        />
                                    </svg>
                                </div>

                                {/* Stat Text */}
                                <div className="flex flex-col">
                                    <span className="font-sans font-extrabold text-3xl sm:text-4xl text-[#ECAB3C] leading-none tracking-tight">
                                        1,000+
                                    </span>
                                    <span className="font-sans font-bold text-xs sm:text-[12.5px] text-[#091D46] uppercase tracking-wider mt-1.5 leading-snug">
                                        Trusts Personally Prepared
                                    </span>
                                    <p className="text-xs sm:text-[12px] text-gray-600 mt-1 leading-snug">
                                        Decades of experience helping individuals and families
                                        protect what matters most.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Empty spacer on desktop to display the background image of Cynthia */}
                        <div className="lg:col-span-5 xl:col-span-6 hidden lg:block" />
                    </div>
                </div>
            </div>

            {/* Bottom 4 Feature Columns */}
            <div className="w-full bg-white border-t border-gray-200/80">
                <div className="w-full max-w-[1320px] mx-auto px-4 py-8 lg:py-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-0 lg:divide-x lg:divide-gray-200/80">
                        {estatePlanningFeatures.map((feature, idx) => (
                            <div
                                key={feature.id}
                                className={`flex flex-col space-y-3 ${idx === 0
                                        ? "lg:pr-6 xl:pr-8"
                                        : idx === 3
                                            ? "lg:pl-6 xl:pl-8"
                                            : "lg:px-6 xl:px-8"
                                    }`}
                            >
                                {/* Circular Icon Badge */}
                                <div className="w-[60px] h-[60px] rounded-full bg-[#fdf8f0] border border-[#ECAB3C]/40 flex items-center justify-center shrink-0 shadow-xs">
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h4 className="font-serif font-bold text-[15px] sm:text-base text-[#091D46] leading-snug">
                                    {feature.title}
                                </h4>

                                {/* Description */}
                                <p className="text-xs sm:text-[12px] text-[#4a5568] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Accent Bar */}
            <div className="w-full h-1 bg-[#091D46]" />
        </section>
    );
}

