"use client";

export default function ContactFirmSection() {
    return (
        <section
            id="contact"
            className="relative w-full py-16 sm:py-20 lg:py-24 overflow-hidden"
        >
            {/* Background Image: Courthouse Columns & Skyline */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/contact-firm-bg-image.png')",
                }}
            />

            {/* Soft Translucent Wash for crisp text legibility */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px] pointer-events-none" />

            {/* Global Container: max-w-[1320px] */}
            <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
                    {/* Pre-heading with Gold Decorative Bars */}
                    <div className="inline-flex items-center justify-center gap-3 mb-3">
                        <span className="w-7 h-[1.5px] bg-[#ECAB3C]" />
                        <span className="text-xs sm:text-[13px] font-bold tracking-[0.2em] text-[#ECAB3C] uppercase">
                            CONTACT OUR FIRM
                        </span>
                        <span className="w-7 h-[1.5px] bg-[#ECAB3C]" />
                    </div>

                    {/* Main Title */}
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#091D46] tracking-tight leading-tight mb-4">
                        Take the First Step Toward Peace of Mind
                    </h2>

                    {/* Subtitle Description */}
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-2xl mx-auto">
                        Whether you&apos;re navigating the U.S. immigration process, planning your estate,
                        or coping with the loss of a loved one, our firm is here to guide you with
                        compassion, integrity, and personalized legal support.
                    </p>
                </div>

                {/* Two-Column Grid: Left Navy Info Card & Right White Form Card */}
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-8 lg:gap-0">
                    {/* Left Column: Navy Contact Card */}
                    <div className="lg:col-span-5 bg-[#091D46] text-white rounded-2xl lg:rounded-r-none p-7 sm:p-9 lg:p-10 shadow-2xl flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-b border-blue-950">
                        {/* Top: Title & Subtitle moved to Left Column */}
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-5 h-[2px] bg-[#ECAB3C]" />
                                <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
                                    SEND US A MESSAGE
                                </span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-[28px] lg:text-[30px] font-normal text-white tracking-tight leading-tight">
                                Contact Cynthia I. Waisman, P.A.
                            </h3>

                            <p className="text-xs sm:text-sm text-blue-100/80 mt-2.5 leading-relaxed">
                                Fill out the form or reach out directly, and a member of our team will get back to
                                you as soon as possible.
                            </p>
                        </div>

                        {/* Bottom: Contact Details & Numbers */}
                        <div className="mt-8 pt-6 border-t border-white/10 space-y-6 sm:space-y-7">
                            {/* 1. CALL US */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase block mb-0.5">
                                        CALL US
                                    </span>
                                    <a
                                        href="tel:+18132796180"
                                        className="text-lg sm:text-xl font-bold text-white hover:text-[#ECAB3C] transition-colors tracking-wide block"
                                    >
                                        +1 (813) 279-6180
                                    </a>
                                    <p className="text-xs text-blue-200/80 mt-0.5">
                                        Speak directly with our office.
                                    </p>
                                </div>
                            </div>

                            {/* 2. VISIT OUR OFFICE */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase block mb-0.5">
                                        OUR OFFICE LOCATIONS
                                    </span>
                                    <span className="text-base sm:text-lg font-bold text-white block">
                                        Tampa, Florida – Main Office
                                    </span>
                                    <span className="text-xs sm:text-[13px] text-gray-300 font-medium block mt-0.5">
                                        Clearwater &amp; Wesley Chapel – By Appointment Only
                                    </span>
                                    <p className="text-xs text-blue-200/80 mt-1 leading-relaxed max-w-xs">
                                        Conveniently located to serve Tampa Bay and surrounding
                                        areas.
                                    </p>
                                </div>
                            </div>

                            {/* 3. EMAIL US */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase block mb-0.5">
                                        EMAIL US
                                    </span>
                                    <a
                                        href="mailto:cynthiawaisman@yahoo.com"
                                        className="text-base sm:text-lg font-bold text-white hover:text-[#ECAB3C] transition-colors block"
                                    >
                                        cynthiawaisman@yahoo.com
                                    </a>
                                    <p className="text-xs text-blue-200/80 mt-0.5">
                                        We typically respond within one business day.
                                    </p>
                                </div>
                            </div>

                            {/* 4. OFFICE HOURS */}
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase block mb-0.5">
                                        OFFICE HOURS
                                    </span>
                                    <span className="text-sm sm:text-base font-bold text-white block">
                                        Monday – Friday
                                    </span>
                                    <span className="text-xs sm:text-[13px] text-gray-300 font-medium block mt-0.5">
                                        9:00 AM – 5:00 PM
                                    </span>
                                    <p className="text-xs text-blue-200/80 mt-0.5">
                                        By appointment.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Highlight Box: "Prefer to talk now?" */}
                        <div className="mt-8 pt-2">
                            <div className="border-l-4 border-[#ECAB3C] bg-[#061533]/90 rounded-r-xl p-4 sm:p-5 flex items-center gap-4 shadow-inner">
                                <div className="shrink-0 text-[#ECAB3C]">
                                    <svg
                                        className="w-9 h-9 sm:w-10 sm:h-10"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={1.7}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3-1m12 0l-3 1m0 0l3 9a5.002 5.002 0 01-6.001 0M18 7l-3-1m-3-3v18m-4 0h8"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-serif text-base sm:text-lg font-bold text-white leading-tight">
                                        Prefer to talk now?
                                    </h4>
                                    <p className="text-xs text-blue-200/85 mt-1 leading-relaxed">
                                        Call{" "}
                                        <a
                                            href="tel:+18132796180"
                                            className="text-[#ECAB3C] font-semibold hover:underline"
                                        >
                                            +1 (813) 279-6180
                                        </a>{" "}
                                        to speak with our office and schedule a consultation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: White Contact Form Card with Embedded MyCase Intake Form */}
                    <div className="lg:col-span-7 bg-white rounded-2xl shadow-2xl p-5 sm:p-7 lg:p-8 border border-gray-100 flex flex-col justify-center relative z-10 lg:-ml-2">
                        {/* MyCase Embedded Lead / Contact Intake Form */}
                        <div className="w-full relative rounded-xl overflow-hidden bg-transparent">
                            <iframe
                                src="https://cynthia-i-waisman-pa.mycase.com/contact_us/g2nH6iehHEv9jMDQXPy5byKD"
                                title="Contact Cynthia I. Waisman, P.A. via MyCase"
                                scrolling="no"
                                className="w-full h-[880px] sm:h-[800px] border-0"
                                style={{ border: "none", overflow: "hidden" }}
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
