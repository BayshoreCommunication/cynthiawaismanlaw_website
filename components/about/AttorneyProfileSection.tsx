"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AttorneyProfileSection() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#fbfcfd]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* ========================================================= */}
          {/* LEFT COLUMN: Profile Card / Sidebar                       */}
          {/* ========================================================= */}
          <aside className="lg:col-span-4 xl:col-span-4 bg-white rounded-xl border border-gray-200/80 shadow-xs p-6 sm:p-7">
            {/* Cynthia's Portrait Photo */}
            <div className="relative w-full aspect-[3/4] max-w-[280px] mx-auto rounded-lg overflow-hidden border border-gray-100 shadow-xs bg-gray-50">
              <Image
                src="/images/about/cynthia-profile-main.png"
                alt="Cynthia I. Waisman Attorney at Law"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
              />
            </div>

            {/* Attorney Name */}
            <h2 className="font-serif text-2xl sm:text-[26px] font-normal text-[#091D46] mt-5 text-center">
              Cynthia I. Waisman
            </h2>

            {/* Email Me Button */}
            <div className="mt-3.5">
              <a
                href="mailto:info@cynthiawaisman.com"
                className="w-full py-2.5 px-4 rounded-full border border-[#091D46] text-[#091D46] hover:bg-[#091D46] hover:text-white transition-all duration-300 font-bold text-xs tracking-wider uppercase inline-flex items-center justify-center gap-2 group cursor-pointer"
              >
                <svg
                  className="w-4 h-4 text-[#091D46] group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>EMAIL ME</span>
              </a>
            </div>

            {/* Contact Me Section */}
            <div className="border-t border-gray-200/80 mt-6 pt-6">
              <h3 className="font-serif text-base font-semibold text-[#091D46] mb-3">
                Contact Me
              </h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <a
                    href="tel:+18132796180"
                    className="font-sans text-sm font-bold text-[#091D46] hover:text-[#ECAB3C] transition-colors block"
                  >
                    +1 (813) 279-6180
                  </a>
                  <a
                    href="tel:+18132796180"
                    className="text-xs text-[#1e58b8] hover:underline font-semibold block mt-0.5"
                  >
                    Call
                  </a>
                </div>
              </div>
            </div>

            {/* Practice Areas Section */}
            <div className="border-t border-gray-200/80 mt-6 pt-6">
              <h3 className="font-serif text-base font-semibold text-[#091D46] mb-4">
                Practice Areas
              </h3>

              <ul className="space-y-3.5">
                {/* 1. Immigration */}
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <Link
                    href="/immigration-law-overview"
                    className="text-sm font-medium text-[#1e58b8] hover:text-[#091D46] hover:underline transition-colors"
                  >
                    Immigration
                  </Link>
                </li>

                {/* 2. Probate, Estate and Trust Administration */}
                <li className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C] mt-0.5">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <Link
                    href="/probate-administration"
                    className="text-sm font-medium text-[#1e58b8] hover:text-[#091D46] hover:underline transition-colors leading-snug"
                  >
                    Probate, Estate and Trust Administration
                  </Link>
                </li>

                {/* 3. Estate Planning */}
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                  </div>
                  <Link
                    href="/estate-planning"
                    className="text-sm font-medium text-[#1e58b8] hover:text-[#091D46] hover:underline transition-colors"
                  >
                    Estate Planning
                  </Link>
                </li>

                {/* 4. Guardianships */}
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <Link
                    href="/guardianship-services"
                    className="text-sm font-medium text-[#1e58b8] hover:text-[#091D46] hover:underline transition-colors"
                  >
                    Guardianships
                  </Link>
                </li>
              </ul>
            </div>

            {/* Lead Counsel Verified Seal */}
            <div className="border-t border-gray-200/80 mt-7 pt-6 flex justify-center">
              <div className="relative w-24 h-24">
                <Image
                  src="/images/associations/honor-1-lead-counsel.png"
                  alt="Lead Counsel Verified Seal"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Biography, Associations, Honors, Education  */}
          {/* ========================================================= */}
          <main className="lg:col-span-8 xl:col-span-8 space-y-10 sm:space-y-12">
            {/* 1. Biography Section */}
            <section className="space-y-4 pb-8 sm:pb-10 border-b border-gray-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
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
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#091D46] tracking-tight">
                  Biography
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#4a5568] leading-relaxed font-sans sm:pl-14">
                <p>
                  Representing clients with compassion and professionalism, Cynthia I.
                  Waisman handles cases worldwide involving green cards, naturalization,
                  asylum, removal, deportation, family-based petitions, fiancé visas, VAWA
                  visas, and more. She also assists clients with estate planning, estate
                  and trust administration, probate litigation, and guardianship matters in
                  Florida.
                </p>
                <p>
                  At the Law Office of Cynthia I. Waisman, P.A., the practice focuses on
                  immigration, estate planning, probate, and guardianship matters. The firm
                  is committed to providing quality legal services, prioritizing clients&apos;
                  needs and best interests with compassion, creativity, and
                  professionalism. Clients receive personalized service from an
                  experienced, approachable team. The firm also offers translation
                  services and payment plans.
                </p>
              </div>
            </section>

            {/* 2. Professional Associations Section */}
            <section className="space-y-4 pb-8 sm:pb-10 border-b border-gray-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#091D46] tracking-tight">
                  Professional Associations
                </h3>
              </div>

              <ul className="list-disc marker:text-[#ECAB3C] text-sm sm:text-[14.5px] text-[#4a5568] leading-relaxed space-y-2 pl-5 sm:pl-19 font-sans">
                <li>
                  President, The Florida Bar Thirteenth Judicial Circuit Grievance
                  Committee 13 “C” (2021)
                </li>
                <li>
                  Member, Real Property, Probate and Trust Law Section of The Florida Bar
                </li>
                <li>Member, American Bar Association</li>
                <li>Member, Clearwater Bar Association</li>
                <li>Member, Florida Bar Association</li>
                <li>Member, Hillsborough County Bar Association</li>
                <li>Member, American Immigration Lawyers Association</li>
                <li>
                  Vice President and President, Stars &amp; Stripes Condominium
                  Association
                </li>
                <li>Member, Upper Tampa Bay Chamber of Commerce</li>
                <li>
                  Former Adjunct Professor, Robert Morris College, Chicago, Illinois
                </li>
              </ul>
            </section>

            {/* 3. Honors Section */}
            <section className="space-y-4 pb-8 sm:pb-10 border-b border-gray-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
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
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#091D46] tracking-tight">
                  Honors
                </h3>
              </div>

              <ul className="list-disc marker:text-[#ECAB3C] text-sm sm:text-[14.5px] text-[#4a5568] leading-relaxed space-y-2 pl-5 sm:pl-19 font-sans">
                <li>Lawyers of Distinction, 2018–2019</li>
                <li>Top Lawyers in Florida, 2016–2019</li>
                <li>Best Lawyers in America, 2016–2019</li>
                <li>Who&apos;s Who in American Law, 2016–2019</li>
                <li>Martindale-Hubbell Client Champion Award, 2018–2019</li>
              </ul>
            </section>

            {/* 4. Education Section */}
            <section className="space-y-4 pb-8 sm:pb-10 border-b border-gray-200/80">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
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
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.825-3.003 12.083 12.083 0 01.665-6.479L12 14zm-4 6v-7.5"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#091D46] tracking-tight">
                  Education
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center sm:pl-14">
                {/* Degrees List */}
                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB3C] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-[15px] text-[#091D46]">
                        The John Marshall Law School
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4a5568] mt-0.5">
                        J.D., 1997
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ECAB3C] mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-sm sm:text-[15px] text-[#091D46]">
                        University of Florida
                      </h4>
                      <p className="text-xs sm:text-sm text-[#4a5568] mt-0.5">
                        B.S., 1993; Major: Journalism
                      </p>
                    </div>
                  </div>
                </div>

                {/* Consultation Photo */}
                <div className="md:col-span-5 relative w-full h-44 sm:h-48 rounded-lg overflow-hidden border border-gray-100 shadow-xs">
                  <Image
                    src="/images/about/cynthia-consultation-1.png"
                    alt="Cynthia I. Waisman Client Consultation"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 240px"
                  />
                </div>
              </div>
            </section>

            {/* 5. Bar Admission Section */}
            <section className="space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
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
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#091D46] tracking-tight">
                  Bar Admission
                </h3>
              </div>

              <ul className="list-disc marker:text-[#ECAB3C] text-sm sm:text-[14.5px] text-[#4a5568] leading-relaxed space-y-2 pl-5 sm:pl-19 font-sans">
                <li>Illinois, 1998</li>
                <li>Florida, 1999</li>
              </ul>
            </section>
          </main>
        </div>
      </div>
    </section>
  );
}

