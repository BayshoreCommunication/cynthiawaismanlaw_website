"use client";

import React, { useRef, useState, useEffect } from "react";

interface Testimonial {
  id: string;
  tag: string;
  tagIcon: React.ReactNode;
  quote: string;
  author: string;
  service: string;
}

// 10 Verified Client Reviews from Cynthia Waisman Law
const testimonials: Testimonial[] = [
  {
    id: "donnie",
    tag: "Citizenship & Naturalization",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    quote:
      "“I want to thank Cynthia and all her staff for the hard work they put in getting me through this process. I was really nervous, but having Cynthia by my side calmed me down and gave me confidence. Again, many thanks to the entire team!”",
    author: "Donnie",
    service: "Naturalization & Citizenship",
  },
  {
    id: "gary",
    tag: "Immigration & Residency",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
      </svg>
    ),
    quote:
      "“Cynthia is a very friendly and proactive immigration lawyer. Her personality and thorough legal knowledge made my residency process as stress-free as it could possibly be! I could not recommend her law firm more highly.”",
    author: "Gary",
    service: "Permanent Residency & Green Card",
  },
  {
    id: "debra",
    tag: "Wills & Living Trusts",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    quote:
      "“Cynthia helped us establish wills for our estate and our living wills. She explained everything in simple terms, made sure all the documents covered our situation, and her fees were very reasonable. I highly recommend Cynthia for any estate planning needs.”",
    author: "Debra",
    service: "Wills & Living Trusts",
  },
  {
    id: "eric",
    tag: "Family Immigration",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    quote:
      "“With the help of Cynthia and her staff, they made sure my mom's application was complete and correct. They took the stress off my mom so she could focus on building her confidence for the final interview. Incredible team to work with!”",
    author: "Eric V.",
    service: "Family-Based Petition",
  },
  {
    id: "mike",
    tag: "Legal Consultation",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    quote:
      "“I highly recommend Cynthia Waisman. She quickly grasps your legal needs and focuses on these matters without all the confusing legal jargon. Precise, knowledgeable, and straight to the point!”",
    author: "Mike",
    service: "Estate & Legal Consultation",
  },
  {
    id: "michael-jennifer",
    tag: "Children & Guardianship",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    quote:
      "“We wanted to make sure our children would be cared for no matter what. Cynthia took the time to understand our family, discussed guardianship options with us, and created a plan that gave us real peace of mind. She truly cares.”",
    author: "Michael & Jennifer",
    service: "Guardianship & Estate Planning",
  },
  {
    id: "jt",
    tag: "Trusts & Estates",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    quote:
      "“Before working with Waisman Law Group I knew nothing about the estate planning process. But Cynthia was extremely thorough in guiding me through every step. They were so patient and kind to answer all my questions. Couldn’t recommend this firm enough!”",
    author: "JT",
    service: "Estate Planning & Trust Law",
  },
  {
    id: "nicole",
    tag: "Estate Planning",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    quote:
      "“The team at Waisman Law Group has always provided outstanding legal service. They are quick to create estate planning documents accurately and communicate every detail with precision. I strongly recommend Cynthia Waisman for every estate planning need.”",
    author: "Nicole L.",
    service: "Estate Planning & Documents",
  },
  {
    id: "connie",
    tag: "Legal Guidance",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    quote:
      "“She takes her time, explains everything clearly and was very personable. If you are in need of a lawyer please contact Cynthia. Her scope is broad and exceptional. Contact her, you will be very happy you did!”",
    author: "Connie",
    service: "Estate Planning & Legal Guidance",
  },
  {
    id: "carolyn-allan",
    tag: "Immigration & Citizenship",
    tagIcon: (
      <svg className="w-3.5 h-3.5 text-[#ECAB3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    quote:
      "“Thank you for restoring our faith in lawyers and getting us across the finish line! We felt very confident in our chances of successfully completing this long and stressful task with you by our side. Many heartfelt thanks!”",
    author: "Carolyn & Allan",
    service: "Legal Representation & Immigration",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDownRef = useRef(false);
  const isManualScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameId = useRef<number | null>(null);

  // Initialize offset to middle set for seamless wrap-around in both directions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const singleSetWidth = container.scrollWidth / 3;
        if (singleSetWidth > 0) {
          container.scrollLeft = singleSetWidth;
        }
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Check seamless boundary wrapping
  const checkWrap = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const singleSetWidth = container.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
      } else if (container.scrollLeft <= singleSetWidth * 0.1) {
        container.scrollLeft += singleSetWidth;
      }
    }
  };

  // Continuous marquee auto-play with requestAnimationFrame
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const speed = 0.65; // gentle, readable marquee drift speed

    const step = () => {
      if (!isHovered && !isDownRef.current && !isManualScrollingRef.current && container) {
        container.scrollLeft += speed;
        checkWrap();
      }
      animationFrameId.current = requestAnimationFrame(step);
    };

    animationFrameId.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [isHovered]);

  // Smooth scroll handler for Arrow buttons (pauses RAF drift during transition)
  const scrollByAmount = (distance: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    container.scrollBy({
      left: distance,
      behavior: "smooth",
    });

    scrollTimeoutRef.current = setTimeout(() => {
      checkWrap();
      isManualScrollingRef.current = false;
    }, 550);
  };

  const handlePrev = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const stepDistance = container.offsetWidth > 640 ? 410 : 330;
    scrollByAmount(-stepDistance);
  };

  const handleNext = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const stepDistance = container.offsetWidth > 640 ? 410 : 330;
    scrollByAmount(stepDistance);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    const container = scrollContainerRef.current;
    if (!container) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5;
    container.scrollLeft = scrollLeftRef.current - walk;

    const singleSetWidth = container.scrollWidth / 3;
    if (singleSetWidth > 0) {
      if (container.scrollLeft >= singleSetWidth * 2) {
        container.scrollLeft -= singleSetWidth;
        scrollLeftRef.current -= singleSetWidth;
      } else if (container.scrollLeft <= singleSetWidth * 0.1) {
        container.scrollLeft += singleSetWidth;
        scrollLeftRef.current += singleSetWidth;
      }
    }
  };

  const handleMouseUp = () => {
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Touch handlers for mobile devices
  const handleTouchStart = () => {
    isDownRef.current = true;
    setIsDragging(true);
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    isDownRef.current = false;
    setIsDragging(false);
    setIsHovered(false);
  };

  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat py-12 lg:py-20 overflow-hidden"
      style={{
        backgroundImage: "url('/images/testimonial-bg-image.png')",
      }}
    >
      {/* 1320px Global Content Container - Keeps carousel constrained within website container */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Every family’s situation is different. Here are authentic reviews from clients Cynthia has helped
            protect their loved ones, achieve legal status, and plan for the future.
          </p>

          {/* Google Reviews Badge */}
          <div className="pt-2 flex justify-center">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-gray-200/90 shadow-xs">
              {/* Google Colored Logo */}
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span className="text-xs font-bold text-[#091D46]">5.0</span>
              <div className="flex items-center text-[#ECAB3C] text-xs">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
              <span className="text-[11px] font-semibold text-gray-500">Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Carousel Wrapper with Left & Right Arrows (Contained inside 1320px) */}
        <div
          className="relative px-1 sm:px-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Testimonials"
            className="absolute -left-2 sm:-left-4 lg:-left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#ECAB3C] text-[#ECAB3C] hover:bg-[#ECAB3C] hover:text-[#091D46] shadow-md flex items-center justify-center transition-all duration-300 focus:outline-hidden cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Testimonials"
            className="absolute -right-2 sm:-right-4 lg:-right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border border-[#ECAB3C] text-[#ECAB3C] hover:bg-[#ECAB3C] hover:text-[#091D46] shadow-md flex items-center justify-center transition-all duration-300 focus:outline-hidden cursor-pointer"
          >
            <svg className="w-5 h-5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Viewport for Marquee inside Container */}
          <div className="overflow-hidden w-full rounded-2xl relative">
            {/* Interactive Marquee Scrollable Viewport */}
            <div
              ref={scrollContainerRef}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              className={`w-full overflow-x-auto no-scrollbar flex gap-6 py-4 px-1 select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Render 3 duplicate sets of items for seamless infinite marquee loop */}
              {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="w-[310px] sm:w-[360px] md:w-[385px] min-h-[300px] shrink-0 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between select-none pointer-events-auto group"
                >
                  <div>
                    {/* Card Top: Category Badge & Gold Quote Icon */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#f6f7f9] border border-gray-100/90 shrink-0">
                        {item.tagIcon}
                        <span className="text-[11px] font-bold text-[#091D46] uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>

                      <span className="font-serif text-3xl sm:text-4xl text-[#ECAB3C] leading-none select-none opacity-90 group-hover:scale-110 transition-transform">
                        “
                      </span>
                    </div>

                    {/* Quote Body */}
                    <p className="text-[13.5px] sm:text-[14.5px] text-[#2c3e50] leading-relaxed font-sans line-clamp-4 select-none">
                      {item.quote}
                    </p>
                  </div>

                  {/* Card Bottom: 5-Star Rating & Author Details */}
                  <div className="pt-4 mt-3 border-t border-gray-100/90 flex flex-col gap-2">
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 text-[#ECAB3C]">
                      {[...Array(5)].map((_, starIdx) => (
                        <svg key={starIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-[11px] font-bold text-gray-500 ml-1">5.0</span>
                    </div>

                    {/* Author Name & Practice Subtitle */}
                    <div>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
