import React from "react";

export default function ContactFormCard() {
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

        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white tracking-tight leading-snug">
          Request a Consultation
        </h3>

        <p className="text-xs sm:text-[13px] text-blue-100/80 mt-1.5 leading-relaxed">
          Fill out the form below and a member of our team will get back to you as
          soon as possible.
        </p>
      </div>

      {/* MyCase Embedded Lead Form */}
      <div className="w-full bg-white rounded-xl overflow-hidden">
        <iframe
          src="https://cynthia-i-waisman-pa.mycase.com/contact_us/g2nH6iehHEv9jMDQXPy5byKD"
          title="Contact Cynthia I. Waisman, P.A. via MyCase"
          scrolling="no"
          className="w-full h-[920px] sm:h-[840px] border-0"
          style={{ border: "none", overflow: "hidden" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
