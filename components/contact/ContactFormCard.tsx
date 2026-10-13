"use client";

import React, { useState } from "react";

export default function ContactFormCard() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    cellPhone: "",
    practiceArea: "",
    caseDetails: "",
    sendCopy: false,
    copyEmail: "",
  });

  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const maxChars = 500;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      if (name === "caseDetails" && value.length > maxChars) return;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobotChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#091D46] text-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-9 border border-blue-950/80 sticky top-24">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 mb-2">
          <span className="w-6 h-[2px] bg-[#ECAB3C]" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
            Send Us A Message
          </span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
          Request a Consultation
        </h3>

        <p className="text-xs sm:text-[13px] text-blue-100/80 mt-1.5 leading-relaxed">
          Fill out the form below and a member of our team will get back to you as
          soon as possible.
        </p>
      </div>

      {/* Submitted Alert */}
      {isSubmitted && (
        <div className="mb-6 p-4 bg-emerald-950/80 border border-emerald-500/60 rounded-xl text-xs sm:text-sm text-emerald-200 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5"
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
            <span className="font-bold block text-white">
              Message Sent Successfully!
            </span>
            Thank you for reaching out. Cynthia I. Waisman, P.A. will contact you
            promptly.
          </div>
        </div>
      )}

      {/* The Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Row 1: Name Fields (3 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1">
              First Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              placeholder="Middle"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1">
              Last Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone (2 Columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1">
              Email <span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-blue-100 mb-1">
              Cell Phone <span className="text-red-400">*</span>
            </label>
            <input
              type="tel"
              name="cellPhone"
              required
              value={formData.cellPhone}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
            />
          </div>
        </div>

        {/* Row 3: Practice Area */}
        <div>
          <label className="block text-[11px] font-semibold text-blue-100 mb-1">
            Practice Area
          </label>
          <div className="relative">
            <select
              name="practiceArea"
              value={formData.practiceArea}
              onChange={handleChange}
              className="w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all pr-8"
            >
              <option value="">Select a Practice Area</option>
              <option value="immigration">Immigration &amp; Naturalization</option>
              <option value="estate-planning">Estate Planning &amp; Trusts</option>
              <option value="probate">Probate &amp; Trust Administration</option>
              <option value="guardianship">Guardianship Services</option>
              <option value="other">Other Legal Matters</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2.5 text-gray-500">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Row 4: Case Details */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="text-[11px] font-semibold text-blue-100">
              Case Details <span className="text-red-400">*</span>
            </label>
            <span className="text-[10px] text-blue-200/70 font-mono">
              {formData.caseDetails.length}/{maxChars}
            </span>
          </div>
          <textarea
            name="caseDetails"
            required
            rows={3}
            value={formData.caseDetails}
            onChange={handleChange}
            placeholder="Tell us about your legal matter..."
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all resize-none"
          />
        </div>

        {/* Row 5: Send Copy Checkbox */}
        <div className="space-y-2 pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              name="sendCopy"
              checked={formData.sendCopy}
              onChange={handleChange}
              className="w-3.5 h-3.5 rounded border-gray-300 text-[#ECAB3C] focus:ring-[#ECAB3C] cursor-pointer"
            />
            <span className="text-xs text-blue-100">
              Send me a confirmation email with a copy of my message
            </span>
          </label>

          {formData.sendCopy && (
            <input
              type="email"
              name="copyEmail"
              value={formData.copyEmail || formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs text-gray-900 placeholder-gray-400 focus:border-[#ECAB3C] focus:ring-1 focus:ring-[#ECAB3C] outline-none transition-all"
            />
          )}
        </div>

        {/* Row 6: Google reCAPTCHA v2 Box */}
        <div className="pt-1">
          <div
            onClick={() => setIsRobotChecked(!isRobotChecked)}
            className="border border-gray-300 rounded-md bg-[#f9f9f9] p-2.5 max-w-[270px] flex items-center justify-between shadow-xs cursor-pointer hover:bg-gray-100 transition-colors select-none text-gray-800"
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-6 h-6 border-2 rounded flex items-center justify-center transition-all bg-white ${isRobotChecked
                    ? "border-emerald-600 bg-emerald-50"
                    : "border-gray-400"
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
              <span className="text-xs font-medium text-gray-700">
                I&apos;m not a robot
              </span>
            </div>

            <div className="flex flex-col items-center justify-center pl-2">
              <svg className="w-6 h-6 text-blue-500" viewBox="0 0 48 48" fill="none">
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
            className="w-full bg-[#ECAB3C] hover:bg-[#dca034] active:scale-[0.99] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
          >
            <span>{isSubmitting ? "SENDING..." : "SUBMIT MESSAGE"}</span>
            <span className="text-base font-bold">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}

