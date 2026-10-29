"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const aboutImages: GalleryImage[] = [
  {
    src: "/images/about/Reshma-in-her-office-signing-docs.jpg",
    alt: "Reshma in her office signing documents",
    caption: "Reshma in her office signing documents",
  },
  {
    src: "/images/about/Lauren-and-Evan-looking-at-docs.jpg",
    alt: "Lauren and Evan reviewing legal documents",
    caption: "Lauren and Evan reviewing legal documents",
  },
  {
    src: "/images/about/Evan-at-his-desk.jpg",
    alt: "Evan at his desk",
    caption: "Evan at his desk",
  },
  {
    src: "/images/about/Cynthia-in-waiting-room.jpg",
    alt: "Attorney Cynthia I. Waisman in waiting room",
    caption: "Attorney Cynthia I. Waisman in office waiting room",
  },
  {
    src: "/images/about/Cynthia-and-Reshma-in-waiting-room.jpg",
    alt: "Attorney Cynthia I. Waisman and Reshma in waiting room",
    caption: "Attorney Cynthia I. Waisman and Reshma in waiting room",
  },
  {
    src: "/images/about/Cynthia-and-Lauren.jpg",
    alt: "Attorney Cynthia I. Waisman and Lauren",
    caption: "Attorney Cynthia I. Waisman and Lauren",
  },
  {
    src: "/images/about/Cynthia-and-Client.jpg",
    alt: "Attorney Cynthia I. Waisman consulting with client",
    caption: "Attorney Cynthia I. Waisman consulting with client",
  },
  {
    src: "/images/about/Client-Signing.jpg",
    alt: "Client signing legal documents",
    caption: "Client signing legal documents",
  },
];

export default function AboutFirmContent() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Main Firm Content (Approx 2/3 width)         */}
          {/* ========================================================= */}
          <article className="lg:col-span-7 xl:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Section 1: Main Heading */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.2] mb-5 tracking-tight">
              Serving Our Most Vulnerable Populations
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-7"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., we provide advice and representation in
              the areas of immigration law, estate planning and probate
              administration. With two decades of experience in estate and
              immigration law, attorney{" "}
              <Link
                href="/attorney/waisman-cynthia-i"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                Cynthia I. Waisman
              </Link>{" "}
              fully understands the challenges and vulnerabilities faced by both
              senior citizens and individuals born outside of the U.S.
            </p>

            {/* Section 2: Immigration Process */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Simplifying The Immigration Process
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Immigration law is ever-changing and particularly complex, with a
              layered and time-consuming application process. We are ready to help
              you and your loved ones pursue lawful admission to the U.S. Whether
              you need help attaining an adjustment of status, renewing your green
              card or finalizing your naturalization application, we can walk you
              step by step through the process. For your convenience, we are
              located across the street from U.S. Citizenship and Immigration
              Services (USCIS).
            </p>

            {/* Section 3: Estate Affairs */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Proactively Handling Your Estate Affairs
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Comprehensive estate planning involves much more than simply
              designating which heir gets certain assets. We handle legal matters
              both preventative in nature and those that arise due to a specific
              event.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Using various estate planning tools, we can help you craft a legacy
              that aligns with your long-term goals. You can relax knowing your
              loved ones will be provided for and your estate plan has
              contingencies to address any potential incapacities.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Additionally, we offer probate assistance when a loved one
              unexpectedly passes away. During this difficult time, you may be
              uncertain of how to proceed. We can finalize your loved one’s
              affairs and distribute their assets in accordance with their will or
              Florida’s estate administration laws, allowing you time to grieve and
              manage other pressing matters.
            </p>

            {/* Section 4: Timely Support */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Timely Support For Unexpected Challenges
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Estate planning, probate administration and immigration matters are
              often deeply personal. For unmatched personalized support and advocacy
              through these difficult situations, turn to our firm.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              We also help out-of-town attorneys resolve their clients&apos; cases.
              Please{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                click this link
              </Link>{" "}
              to learn more about our attorney referral services.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Please call our Tampa office at{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] hover:text-[#003d80] underline font-semibold"
              >
                +1 (813) 279-6180
              </a>{" "}
              to arrange a complimentary 10-minute consultation, or{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                send us an email
              </Link>
              . We also have an office in Clearwater, Florida and Wesley Chapel,
              Florida and we serve the entire Tampa Bay area.
            </p>
          </article>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Photo Gallery (2 columns x 4 rows)           */}
          {/* ========================================================= */}
          <aside
            className="lg:col-span-5 xl:col-span-4 w-full"
            data-animate="fade-left"
            data-delay="150"
          >
            {/* Top Navy Banner matching reference website header block */}
            <div className="bg-[#091D46] border-t-4 border-[#ECAB3C] px-5 py-4 text-white text-center rounded-t-sm shadow-sm">
              <h3 className="font-serif text-base sm:text-lg font-normal tracking-wide text-white uppercase">
                Cynthia I. Waisman, P.A.
              </h3>
              <p className="text-[12px] text-[#ECAB3C] font-sans tracking-wider uppercase mt-0.5">
                Our Firm In Action
              </p>
            </div>

            {/* 2x4 Image Gallery Grid */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-3.5 bg-gray-50/60 p-2.5 sm:p-3.5 border-x border-b border-gray-200/80 rounded-b-sm shadow-xs">
              {aboutImages.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-[4/5] w-full rounded-sm overflow-hidden border border-gray-200/90 shadow-xs bg-white cursor-pointer transition-all duration-300 hover:shadow-md hover:border-[#ECAB3C]/60"
                  title="Click to view full photo"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 220px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 pointer-events-none">
                    <span className="text-[11px] text-white/90 line-clamp-1 font-sans">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      {/* ========================================================= */}
      {/* Lightbox Modal for Photo Gallery                           */}
      {/* ========================================================= */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.alt}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[4/5] max-h-[75vh] w-full bg-gray-900">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 700px"
              />
            </div>

            {/* Modal Footer Caption */}
            <div className="p-4 bg-white border-t border-gray-100 flex items-center justify-between">
              <p className="text-sm font-medium text-[#091D46]">
                {selectedImage.caption || selectedImage.alt}
              </p>
              <span className="text-xs text-[#ECAB3C] font-semibold tracking-wider uppercase font-sans">
                Cynthia I. Waisman, P.A.
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

