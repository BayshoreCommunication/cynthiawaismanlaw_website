"use client";

import React, { useEffect, useCallback } from "react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  // Handle ESC key press
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Request a Consultation"
      className="fixed inset-0 z-50 bg-[#021327]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#091D46] text-white rounded-2xl shadow-2xl border border-blue-900/60 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close consultation modal"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 hover:rotate-90 cursor-pointer"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto p-3 sm:p-6 lg:p-10">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-8 pr-10 sm:pr-0">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <span className="w-6 h-[2px] bg-[#ECAB3C]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
                Send Us A Message
              </span>
              <span className="w-6 h-[2px] bg-[#ECAB3C]" />
            </div>

            <h3 className="font-serif text-xl sm:text-3xl lg:text-[36px] font-normal text-white tracking-tight leading-snug">
              Request a Consultation
            </h3>

            <p className="text-xs sm:text-sm text-blue-100/80 mt-1.5 leading-relaxed">
              Fill out the form below and a member of our team will get back to you as soon as possible.
            </p>
          </div>

          {/* MyCase Embedded Lead Form */}
          <div className="w-full bg-white rounded-xl overflow-hidden shadow-2xl p-1.5 sm:p-4 md:p-6">
            <iframe
              src="https://cynthia-i-waisman-pa.mycase.com/contact_us/g2nH6iehHEv9jMDQXPy5byKD"
              title="Contact Cynthia I. Waisman, P.A. via MyCase"
              className="w-full h-[940px] sm:h-[860px] border-0"
              style={{ border: "none" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
