import React from "react";

export default function ContactFormCard() {
  return (
    <div className="w-full bg-[#091D46] text-white rounded-2xl shadow-xl p-6 sm:p-10 lg:p-12 border border-blue-950/80">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <div className="inline-flex items-center justify-center gap-2 mb-2.5">
          <span className="w-6 h-[2px] bg-[#ECAB3C]" />
          <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
            Send Us A Message
          </span>
          <span className="w-6 h-[2px] bg-[#ECAB3C]" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal text-white tracking-tight leading-snug">
          Request a Consultation
        </h3>

        <p className="text-xs sm:text-sm text-blue-100/80 mt-2 leading-relaxed">
          Fill out the form below and a member of our team will get back to you as
          soon as possible.
        </p>
      </div>

      {/* MyCase Embedded Lead Form */}
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl overflow-hidden shadow-2xl p-2 sm:p-6">
        <iframe
          src="https://cynthia-i-waisman-pa.mycase.com/contact_us/g2nH6iehHEv9jMDQXPy5byKD"
          title="Contact Cynthia I. Waisman, P.A. via MyCase"
          scrolling="no"
          className="w-full h-[900px] sm:h-[820px] border-0"
          style={{ border: "none", overflow: "hidden" }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
