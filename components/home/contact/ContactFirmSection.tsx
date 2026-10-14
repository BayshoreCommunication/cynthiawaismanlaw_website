"use client";

import React, { useState } from "react";

export default function ContactFirmSection() {
    const [formData, setFormData] = useState({
        firstName: "",
        middleName: "",
        lastName: "",
        email: "",
        phone: "",
        topic: "",
        caseDetails: "",
        sendCopy: false,
    });
    const [isRobotChecked, setIsRobotChecked] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        if (type === "checkbox") {
            const checked = (e.target as HTMLInputElement).checked;
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 800);
    };

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
                        {/* 4 Contact Rows */}
                        <div className="space-y-7 sm:space-y-8">
                            {/* 1. CALL US */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                <div className="w-12 h-12 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                <div className="w-12 h-12 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                                        href="mailto:cynthia@cynthiawaismanlaw.com"
                                        className="text-base sm:text-lg font-bold text-white hover:text-[#ECAB3C] transition-colors block"
                                    >
                                        cynthia@cynthiawaismanlaw.com
                                    </a>
                                    <p className="text-xs text-blue-200/80 mt-0.5">
                                        We typically respond within one business day.
                                    </p>
                                </div>
                            </div>

                            {/* 4. OFFICE HOURS */}
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-[#ECAB3C]/70 flex items-center justify-center text-[#ECAB3C] shrink-0 bg-[#061533]/40">
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
                        <div className="mt-8 pt-4">
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

                    {/* Right Column: White Contact Form Card */}
                    <div className="lg:col-span-7 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-10 border border-gray-100 flex flex-col justify-between relative z-10 lg:-ml-2">
                        {/* Form Header */}
                        <div>
                            <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-5 h-[2px] bg-[#ECAB3C]" />
                                <span className="text-[11px] font-bold tracking-widest text-[#ECAB3C] uppercase">
                                    SEND US A MESSAGE
                                </span>
                            </div>

                            <h3 className="font-serif text-2xl sm:text-[28px] font-normal text-[#091D46] tracking-tight">
                                Contact Cynthia I. Waisman, P.A.
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-600 mt-1 mb-6 leading-relaxed">
                                Fill out the form below and a member of our team will get back to
                                you as soon as possible.
                            </p>

                            {/* Submitted State Success Alert */}
                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs sm:text-sm flex items-start gap-3">
                                    <svg
                                        className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    <div>
                                        <span className="font-bold block">
                                            Message Sent Successfully!
                                        </span>
                                        Thank you for reaching out. Cynthia I. Waisman, P.A. will
                                        contact you promptly.
                                    </div>
                                </div>
                            )}

                            {/* The Form */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Row 1: Name Fields (3 Columns) */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            placeholder="First Name"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Middle Name
                                        </label>
                                        <input
                                            type="text"
                                            name="middleName"
                                            value={formData.middleName}
                                            onChange={handleChange}
                                            placeholder="Middle"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            placeholder="Last Name"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 2: Email & Phone (2 Columns) */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="you@example.com"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-xs font-semibold text-gray-700 mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="(813) 555-1234"
                                            className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Row 3: How can we help? Dropdown */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                                        How can we help? <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative">
                                        <select
                                            name="topic"
                                            required
                                            value={formData.topic}
                                            onChange={handleChange}
                                            className="w-full appearance-none rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all pr-10"
                                        >
                                            <option value="">Select a topic</option>
                                            <option value="immigration">Immigration Law Services</option>
                                            <option value="estate-planning">
                                                Estate Planning & Trusts
                                            </option>
                                            <option value="probate">
                                                Probate & Trust Administration
                                            </option>
                                            <option value="guardianship">
                                                Guardianship Services
                                            </option>
                                            <option value="elder-law">
                                                Elder Law & Asset Protection
                                            </option>
                                            <option value="general">General Legal Inquiry</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
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
                                                    d="M19 9l-7 7-7-7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 4: Case Details Textarea */}
                                <div>
                                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                                        Case Details
                                    </label>
                                    <textarea
                                        name="caseDetails"
                                        rows={3}
                                        value={formData.caseDetails}
                                        onChange={handleChange}
                                        placeholder="Please provide a brief description of your situation."
                                        className="w-full rounded-lg border border-gray-200 bg-gray-50/50 px-3.5 py-2.5 text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:bg-white focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all resize-none"
                                    />
                                </div>

                                {/* Row 5: Confirmation Checkbox */}
                                <div className="pt-1">
                                    <label className="flex items-center gap-2.5 cursor-pointer select-none">
                                        <input
                                            type="checkbox"
                                            name="sendCopy"
                                            checked={formData.sendCopy}
                                            onChange={handleChange}
                                            className="w-4 h-4 rounded border-gray-300 text-[#ECAB3C] focus:ring-[#ECAB3C] cursor-pointer"
                                        />
                                        <span className="text-xs text-gray-600">
                                            Send me a confirmation email with a copy of my message
                                        </span>
                                    </label>
                                </div>

                                {/* Row 6: Google reCAPTCHA v2 Box */}
                                <div className="pt-1">
                                    <div
                                        onClick={() => setIsRobotChecked(!isRobotChecked)}
                                        className="border border-gray-200 rounded-md bg-[#f9f9f9] p-3 max-w-[280px] flex items-center justify-between shadow-sm cursor-pointer hover:bg-gray-100/70 transition-colors select-none"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div
                                                className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all bg-white ${
                                                    isRobotChecked
                                                        ? "border-emerald-600 bg-emerald-50"
                                                        : "border-gray-300"
                                                }`}
                                            >
                                                {isRobotChecked && (
                                                    <svg
                                                        className="w-4 h-4 text-emerald-600"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={3}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M5 13l4 4L19 7"
                                                        />
                                                    </svg>
                                                )}
                                            </div>
                                            <span className="text-xs sm:text-[13px] font-medium text-gray-700">
                                                I&apos;m not a robot
                                            </span>
                                        </div>

                                        <div className="flex flex-col items-center justify-center pl-3">
                                            {/* reCAPTCHA triangular arrows icon */}
                                            <svg
                                                className="w-6 h-6 text-blue-500"
                                                viewBox="0 0 48 48"
                                                fill="none"
                                            >
                                                <path
                                                    d="M24 6a18 18 0 0 1 15.6 9L36 17l10 3 1-10-3.6 2A22 22 0 0 0 2 24h4a18 18 0 0 1 18-18z"
                                                    fill="#1A73E8"
                                                />
                                                <path
                                                    d="M42 24a18 18 0 0 1-18 18 18 18 0 0 1-15.6-9L12 31 2 28l-1 10 3.6-2A22 22 0 0 0 46 24h-4z"
                                                    fill="#4285F4"
                                                />
                                                <path
                                                    d="M24 42a18 18 0 0 1-18-18H2a22 22 0 0 0 37.6 15l-3.6-2-4 4 1-10 9 3-3.6 2A18 18 0 0 1 24 42z"
                                                    fill="#34A853"
                                                />
                                            </svg>
                                            <span className="text-[9px] font-semibold text-gray-500 leading-none mt-0.5">
                                                reCAPTCHA
                                            </span>
                                            <span className="text-[8px] text-gray-400 leading-none mt-0.5">
                                                Privacy · Terms
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Row 7: Submit Button */}
                                <div className="pt-2">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="bg-[#d98218] hover:bg-[#c27312] active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider px-8 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                                    >
                                        <span>{isSubmitting ? "SENDING..." : "SUBMIT MESSAGE"}</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2.2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

