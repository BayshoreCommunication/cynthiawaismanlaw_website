"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Testimonial {
  id: string;
  tag: string;
  tagIcon: React.ReactNode;
  quote: string;
  author: string;
  service: string;
}

const testimonials: Testimonial[] = [
  {
    id: "debra",
    tag: "Wills & Living Trusts",
    tagIcon: (
      <svg
        className="w-4 h-4 text-[#ECAB3C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    quote:
      "“Cynthia helped us establish wills for our estate and our living wills. She explained everything in simple terms, made sure all the documents covered our situation, and her fees were very reasonable. I highly recommend Cynthia for any of your estate planning needs.”",
    author: "Debra",
    service: "Wills & Living Trusts",
  },
  {
    id: "michael-jennifer",
    tag: "Children & Guardianship",
    tagIcon: (
      <svg
        className="w-4 h-4 text-[#ECAB3C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    quote:
      "“We wanted to make sure our children would be cared for no matter what. Cynthia took the time to understand our family, discussed guardianship options with us, and created a plan that gave us real peace of mind. She truly cares and made a difficult topic much easier to handle.”",
    author: "Michael & Jennifer",
    service: "Guardianship & Estate Planning",
  },
  {
    id: "robert-maria",
    tag: "Second Marriage & Assets",
    tagIcon: (
      <svg
        className="w-4 h-4 text-[#ECAB3C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    quote:
      "“Cynthia helped us create a trust that addressed our second marriage, our children from prior relationships, and our property. She listened to our concerns, explained the options clearly, and made sure everything was structured the right way. We feel much more secure about the future.”",
    author: "Robert & Maria",
    service: "Blended Family Estate Plan",
  },
  {
    id: "gary",
    tag: "Immigration & Residency",
    tagIcon: (
      <svg
        className="w-4 h-4 text-[#ECAB3C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
        />
      </svg>
    ),
    quote:
      "“Cynthia is a very friendly and proactive immigration lawyer. Her personality and thorough legal knowledge made my residency process as stress-free as it could possibly be! I could not recommend her law firm more highly.”",
    author: "Gary",
    service: "Permanent Residency & Green Card",
  },
  {
    id: "donnie",
    tag: "Citizenship & Naturalization",
    tagIcon: (
      <svg
        className="w-4 h-4 text-[#ECAB3C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    quote:
      "“I want to thank Cynthia and all her staff for the hard work they put in getting me through this process. I was really nervous, but having Cynthia by my side calmed me down and gave me confidence. Again, many thanks to the entire team!”",
    author: "Donnie",
    service: "Naturalization & Citizenship",
  },
  {
    id: "eric",
    tag: "Family Immigration",
    tagIcon: (
      <svg
        className="w-4 h-4 text-[#ECAB3C]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    quote:
      "“With the help of Cynthia and her staff, they made sure my mom's application was complete and correct. They took the stress off my mom so she could focus on building her confidence for the final interview. Incredible team to work with!”",
    author: "Eric V.",
    service: "Family-Based Petition",
  },
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Group testimonials into pages of 3 cards each
  const slides = [
    testimonials.slice(0, 3),
    testimonials.slice(3, 6),
  ];
  const totalPages = slides.length;

  const prevSlide = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  // Touch Swipe handlers
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-12 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimonial-bg-image.png')",
      }}
    >

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4">
        {/* Section Header (Fixed in place, never slides) */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 space-y-3">
          {/* Subheading with gold accent lines */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#ECAB3C]" />
            <h3 className="text-xs sm:text-[13px] md:text-sm font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
              Testimonials
            </h3>
            <span className="w-8 h-[2px] bg-[#ECAB3C]" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-normal text-[#091D46] tracking-tight leading-tight">
            Real Families. Real Peace of Mind.
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#4a5568] leading-relaxed">
            Every family’s situation is different. Here are some of the ways Cynthia has helped
            clients protect their loved ones and plan for the future.
          </p>
        </div>

        {/* Carousel Wrapper with Left & Right Arrows */}
        <div className="relative">
          {/* Previous Arrow Button (Fixed in place) */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Testimonials"
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#ECAB3C] text-[#ECAB3C] hover:bg-[#ECAB3C] hover:text-[#091D46] shadow-sm flex items-center justify-center transition-all duration-300 focus:outline-hidden"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow Button (Fixed in place) */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Testimonials"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white border border-[#ECAB3C] text-[#ECAB3C] hover:bg-[#ECAB3C] hover:text-[#091D46] shadow-sm flex items-center justify-center transition-all duration-300 focus:outline-hidden"
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Card Sliding Track Viewport: ONLY this part slides */}
          <div
            className="overflow-hidden w-full px-2 sm:px-4"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {slides.map((pageCards, pageIdx) => (
                <div
                  key={pageIdx}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1 py-2"
                >
                  {pageCards.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between relative group"
                    >
                      <div>
                        {/* Card Top: Tag Badge & Golden Quote Icon */}
                        <div className="flex items-center justify-between gap-2 mb-4">
                          {/* Tag Badge */}
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f6f7f9] border border-gray-100/80">
                            {item.tagIcon}
                            <span className="text-[11px] font-bold text-[#091D46] uppercase tracking-wider">
                              {item.tag}
                            </span>
                          </div>

                          {/* Golden Quotation Mark Icon */}
                          <span className="font-serif text-3xl sm:text-4xl text-[#ECAB3C] leading-none select-none opacity-90">
                            “
                          </span>
                        </div>

                        {/* Quote Body Text */}
                        <p className="text-[13.5px] sm:text-[14.5px] text-[#2c3e50] leading-relaxed font-sans min-h-[110px]">
                          {item.quote}
                        </p>
                      </div>

                      {/* Card Bottom: Author & Service Attribution */}
                      <div className="pt-5 mt-4 border-t border-gray-100/80">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-[2px] bg-[#ECAB3C] rounded-full shrink-0" />
                          <h4 className="text-sm sm:text-[15px] font-bold text-[#091D46]">
                            {item.author}
                          </h4>
                        </div>
                        <p className="text-xs text-gray-500 pl-7 mt-0.5 font-medium">
                          {item.service}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schedule A Consultation CTA Button (Fixed in place) */}
        <div className="flex justify-center mt-10">
          <Link
            href="/contact"
            className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs md:text-[13px] tracking-wider uppercase px-8 py-3.5 rounded-md inline-flex items-center gap-2 shadow-xs transition-all duration-300 group"
          >
            <span>Schedule A Consultation</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>

        {/* Pagination Dots (Fixed in place) */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentPage(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 focus:outline-hidden ${
                currentPage === index
                  ? "w-7 bg-[#ECAB3C]"
                  : "w-2.5 bg-[#e2cfb0]/60 hover:bg-[#ECAB3C]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
