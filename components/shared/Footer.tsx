import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = 2026;

    return (
        <footer className="w-full text-white overflow-hidden">
            {/* Top Part: Locations & Get in Touch with Background Image */}
            <div
                className="relative w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/images/footer/footer-bg-image.png')",
                }}
            >
                {/* Subtle overlay so text remains razor sharp while courthouse and palm trees stay clearly visible */}
                <div className="absolute inset-0 bg-[#021327]/30 pointer-events-none" />

                {/* Main Footer Content */}
                <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 pt-14 pb-12">
                    {/* Section Titles */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 pb-4" data-animate="fade-up">
                        <div className="lg:col-span-9 flex items-center gap-4">
                            <h3 className="text-sm md:text-base font-semibold tracking-widest text-white uppercase font-sans">
                                Our Locations
                            </h3>
                            <span className="w-12 h-[1px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "3rem" } as React.CSSProperties} />
                        </div>

                        <div className="lg:col-span-3 hidden lg:flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "3rem" } as React.CSSProperties} />
                            <h3 className="text-sm md:text-base font-semibold tracking-widest text-white uppercase font-sans">
                                Get In Touch
                            </h3>
                        </div>
                    </div>

                    {/* 4 Columns: 3 Offices + Get In Touch */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-0 lg:divide-x lg:divide-white/10">
                        {/* Column 1: Tampa Office */}
                        <div className="lg:col-span-3 lg:pr-4 xl:pr-6 2xl:pr-8 flex flex-col justify-between space-y-6" data-animate="fade-up" data-delay="100">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#ECAB3C]">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-serif text-white tracking-wide">
                                        Tampa Office
                                    </h4>
                                    <p className="text-sm text-gray-300 mt-1">
                                        Cynthia I. Waisman, P.A.
                                    </p>
                                </div>

                                <a
                                    href="https://www.google.com/maps/place/Cynthia+I.+Waisman+P.A./@27.997905,-82.534223,127416m/data=!3m1!1e3!4m6!3m5!1s0x88c2c22152d3f595:0x9ced1906369a04ad!8m2!3d27.9979045!4d-82.5342231!16s%2Fg%2F11h1n4ljq?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-gray-300 hover:text-[#ECAB3C] transition-colors space-y-0.5 leading-relaxed"
                                >
                                    <p>5406 Hoover Blvd Ste. 11</p>
                                    <p>Tampa, FL 33634</p>
                                </a>

                                <div className="pt-1">
                                    <a
                                        href="tel:+18132796180"
                                        className="inline-flex items-center gap-2 text-sm text-white hover:text-[#ECAB3C] transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4 text-[#ECAB3C]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        <span className="font-medium">+1 (813) 279-6180</span>
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a
                                    href="https://www.google.com/maps/place/Cynthia+I.+Waisman+P.A./@27.997905,-82.534223,127416m/data=!3m1!1e3!4m6!3m5!1s0x88c2c22152d3f595:0x9ced1906369a04ad!8m2!3d27.9979045!4d-82.5342231!16s%2Fg%2F11h1n4ljq?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#ECAB3C] text-white hover:bg-[#ECAB3C] hover:text-[#01172d] text-[11px] xl:text-xs font-semibold tracking-wide uppercase transition-all duration-300 group whitespace-nowrap"
                                >
                                    <span>Tampa Law Office</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Column 2: Clearwater Office */}
                        <div className="lg:col-span-3 lg:px-4 xl:px-6 2xl:px-8 flex flex-col justify-between space-y-6" data-animate="fade-up" data-delay="200">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#ECAB3C]">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-serif text-white tracking-wide">
                                        Clearwater Office
                                    </h4>
                                    <p className="text-sm italic text-gray-300 mt-1">
                                        By Appointment Only
                                    </p>
                                </div>

                                <a
                                    href="https://www.google.com/maps/place/Cynthia+I.+Waisman,+P.A./@28.0103776,-82.7251337,7963m/data=!3m2!1e3!5s0x88c2ee75aff07979:0xfb2c6611c25bed4b!4m6!3m5!1s0x88c2ee7519878715:0x1240b47cd73f816b!8m2!3d28.0103569!4d-82.7097531!16s%2Fg%2F1tctml4n?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-gray-300 hover:text-[#ECAB3C] transition-colors space-y-0.5 leading-relaxed"
                                >
                                    <p>2451 McMullen Booth Rd</p>
                                    <p>Ste. 214 Clearwater, FL 33759</p>
                                </a>

                                <div className="pt-1">
                                    <a
                                        href="tel:+18132796180"
                                        className="inline-flex items-center gap-2 text-sm text-white hover:text-[#ECAB3C] transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4 text-[#ECAB3C]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        <span className="font-medium">+1 (813) 279-6180</span>
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a
                                    href="https://www.google.com/maps/place/Cynthia+I.+Waisman,+P.A./@28.0103776,-82.7251337,7963m/data=!3m2!1e3!5s0x88c2ee75aff07979:0xfb2c6611c25bed4b!4m6!3m5!1s0x88c2ee7519878715:0x1240b47cd73f816b!8m2!3d28.0103569!4d-82.7097531!16s%2Fg%2F1tctml4n?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#ECAB3C] text-white hover:bg-[#ECAB3C] hover:text-[#01172d] text-[11px] xl:text-xs font-semibold tracking-wide uppercase transition-all duration-300 group whitespace-nowrap"
                                >
                                    <span>Clearwater Law Office</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Column 3: Wesley Chapel Office */}
                        <div className="lg:col-span-3 lg:px-4 xl:px-6 2xl:px-8 flex flex-col justify-between space-y-6" data-animate="fade-up" data-delay="300">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <span className="text-[#ECAB3C]">
                                        <svg
                                            className="w-6 h-6"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                    </span>
                                </div>

                                <div>
                                    <h4 className="text-2xl font-serif text-white tracking-wide">
                                        Wesley Chapel Office
                                    </h4>
                                    <p className="text-sm italic text-gray-300 mt-1">
                                        By Appointment Only
                                    </p>
                                </div>

                                <a
                                    href="https://www.google.com/maps/place/6013+Wesley+Grove+Blvd+Bldg+2,+Suite+208,+Wesley+Chapel,+FL+33544,+USA/@28.2441519,-82.3510799,993m/data=!3m3!1e3!4b1!5s0x88c2b0495a328d69:0x584cf7cfaef1a726!4m6!3m5!1s0x88c2b0495bbab293:0x87162f96460bfd6c!8m2!3d28.2441519!4d-82.3510799!16s%2Fg%2F11ks2sgx38?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-sm text-gray-300 hover:text-[#ECAB3C] transition-colors space-y-0.5 leading-relaxed"
                                >
                                    <p>6013 Wesley Grove Blvd</p>
                                    <p>Building 2, Ste. 208</p>
                                    <p>Wesley Chapel, FL 33544</p>
                                </a>

                                <div className="pt-1">
                                    <a
                                        href="tel:+18132796180"
                                        className="inline-flex items-center gap-2 text-sm text-white hover:text-[#ECAB3C] transition-colors"
                                    >
                                        <svg
                                            className="w-4 h-4 text-[#ECAB3C]"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                        <span className="font-medium">+1 (813) 279-6180</span>
                                    </a>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a
                                    href="https://www.google.com/maps/place/6013+Wesley+Grove+Blvd+Bldg+2,+Suite+208,+Wesley+Chapel,+FL+33544,+USA/@28.2441519,-82.3510799,993m/data=!3m3!1e3!4b1!5s0x88c2b0495a328d69:0x584cf7cfaef1a726!4m6!3m5!1s0x88c2b0495bbab293:0x87162f96460bfd6c!8m2!3d28.2441519!4d-82.3510799!16s%2Fg%2F11ks2sgx38?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-1.5 px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 rounded-full border border-[#ECAB3C] text-white hover:bg-[#ECAB3C] hover:text-[#01172d] text-[11px] xl:text-xs font-semibold tracking-wide uppercase transition-all duration-300 group whitespace-nowrap"
                                >
                                    <span>Wesley Chapel Law Office</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                        {/* Column 4: Get In Touch */}
                        <div className="lg:col-span-3 lg:pl-4 xl:pl-6 2xl:pl-8 flex flex-col justify-between space-y-6" data-animate="fade-up" data-delay="400">
                            {/* Mobile Title for Get In Touch */}
                            <div className="lg:hidden flex items-center gap-4 pt-4">
                                <span className="w-8 h-[1px] bg-[#ECAB3C]" />
                                <h3 className="text-sm font-semibold tracking-widest text-white uppercase font-sans">
                                    Get In Touch
                                </h3>
                            </div>

                            <div className="space-y-5">
                                {/* Phone */}
                                <div className="flex items-start gap-3 sm:gap-3.5">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#ECAB3C] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm text-gray-300">Call Us</p>
                                        <a
                                            href="tel:+18132796180"
                                            className="text-sm sm:text-base font-semibold text-white hover:text-[#ECAB3C] transition-colors whitespace-nowrap block"
                                        >
                                            +1 (813) 279-6180
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-3 sm:gap-3.5">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#ECAB3C] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                        </svg>
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-xs sm:text-sm text-gray-300">Email Us</p>
                                        <a
                                            href="mailto:cynthiawaisman@yahoo.com"
                                            className="text-[12px] sm:text-[13px] md:text-sm lg:text-[12px] xl:text-[14px] 2xl:text-[15px] font-semibold text-white hover:text-[#ECAB3C] transition-colors whitespace-nowrap block"
                                        >
                                            cynthiawaisman@yahoo.com
                                        </a>
                                    </div>
                                </div>

                                {/* Office Hours */}
                                <div className="flex items-start gap-3 sm:gap-3.5">
                                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[#ECAB3C] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                                        <svg
                                            className="w-4 h-4 sm:w-5 sm:h-5"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                                        </svg>
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300 space-y-0.5">
                                        <p className="font-semibold text-white">Office Hours</p>
                                        <p>Monday – Friday</p>
                                        <p>9:00 AM – 5:00 PM</p>
                                        <p className="italic text-xs text-gray-400">By appointment.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-1.5 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full border border-[#ECAB3C] text-white hover:bg-[#ECAB3C] hover:text-[#01172d] text-[11px] xl:text-xs font-semibold tracking-wide uppercase transition-all duration-300 group whitespace-nowrap"
                                >
                                    <span>Contact Us</span>
                                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright, Nav Links, Social, Legal */}
            <div className="w-full border-t border-white/10 bg-[#01172d]">
                <div className="w-full max-w-[1320px] mx-auto px-4 py-5 space-y-4">
                    {/* Top Row: Copyright, Nav Links, Social */}
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-gray-400">
                        {/* Copyright */}
                        <p className="text-center lg:text-left">
                            © {currentYear} Cynthia I. Waisman, P.A. All Rights Reserved.
                        </p>

                        {/* Nav Links */}
                        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs">
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/about" className="hover:text-white transition-colors">
                                About
                            </Link>

                            <span className="text-gray-600">|</span>
                            <Link href="/contact" className="hover:text-white transition-colors">
                                Our Locations
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/blog" className="hover:text-white transition-colors">
                                Resources
                            </Link>
                            <span className="text-gray-600">|</span>
                            <Link href="/contact" className="hover:text-white transition-colors">
                                Contact
                            </Link>
                        </nav>

                        {/* Social Icons */}
                        <div className="flex items-center gap-2.5">
                            {/* Facebook */}
                            <a
                                href="https://www.facebook.com/p/Cynthia-I-Waisman-PA-100063645035449/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="w-7 h-7 rounded-full border border-gray-600 hover:border-[#ECAB3C] text-gray-300 hover:text-[#ECAB3C] flex items-center justify-center transition-colors"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/company/cynthia-i.-waisman-p.a."
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="w-7 h-7 rounded-full border border-gray-600 hover:border-[#ECAB3C] text-gray-300 hover:text-[#ECAB3C] flex items-center justify-center transition-colors"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45A1.45 1.45 0 0 0 6.46 5.86a1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a
                                href="https://www.instagram.com/cynthiawaismanlaw/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-7 h-7 rounded-full border border-gray-600 hover:border-[#ECAB3C] text-gray-300 hover:text-[#ECAB3C] flex items-center justify-center transition-colors"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a
                                href="https://www.youtube.com/@cynthiawaisman"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="w-7 h-7 rounded-full border border-gray-600 hover:border-[#ECAB3C] text-gray-300 hover:text-[#ECAB3C] flex items-center justify-center transition-colors"
                            >
                                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Sub-row Divider */}
                    <div className="w-full h-[1px] bg-white/10" />

                    {/* Bottom Sub-row: Legal & Bayshore Communication Credit */}
                    <div className="flex flex-col sm:flex-row items-center justify-end gap-x-4 gap-y-2 text-[11px] text-gray-400">
                        <Link
                            href="/disclaimer"
                            className="hover:text-white transition-colors"
                        >
                            Disclaimer
                        </Link>
                        <span className="text-gray-600 hidden sm:inline">|</span>
                        <Link
                            href="/site-map"
                            className="hover:text-white transition-colors"
                        >
                            Site Map
                        </Link>
                        <span className="text-gray-600 hidden sm:inline">|</span>
                        <Link
                            href="/privacy"
                            className="hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </Link>
                        <span className="text-gray-600 hidden sm:inline">|</span>

                        {/* Bayshore Communication Credit with stylized Golden BB monogram */}
                        <a
                            href="https://bayshorecommunication.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 hover:text-white transition-colors ml-1"
                        >

                            <span>Website by Bayshore Communication</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
