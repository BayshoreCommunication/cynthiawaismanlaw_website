"use client";

import React from "react";
import Image from "next/image";

interface OfficeLocation {
  id: string;
  name: string;
  image: string;
  addressLine1: string;
  addressLine2: string;
  phone: string;
  hours: string;
  mapLink: string;
}

const offices: OfficeLocation[] = [
  {
    id: "tampa",
    name: "Tampa Office",
    image: "/images/offices/tampa-office.png",
    addressLine1: "5406 Hoover Blvd, Suite 11",
    addressLine2: "Tampa, FL 33634",
    phone: "(813) 279-6180",
    hours: "Mon – Fri, 9:00 AM – 5:00 PM",
    mapLink:
      "https://www.google.com/maps/place/Cynthia+I.+Waisman+P.A./@27.997905,-82.534223,127416m/data=!3m1!1e3!4m6!3m5!1s0x88c2c22152d3f595:0x9ced1906369a04ad!8m2!3d27.9979045!4d-82.5342231!16s%2Fg%2F11h1n4ljq?hl=en&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "clearwater",
    name: "Clearwater Office",
    image: "/images/offices/clearwater-office.png",
    addressLine1: "2451 McMullen Booth Rd, Suite 214",
    addressLine2: "Clearwater, FL 33759",
    phone: "(813) 279-6180",
    hours: "Mon – Fri, 9:00 AM – 5:00 PM",
    mapLink:
      "https://www.google.com/maps/place/Cynthia+I.+Waisman,+P.A./@28.0103776,-82.7251337,7963m/data=!3m2!1e3!5s0x88c2ee75aff07979:0xfb2c6611c25bed4b!4m6!3m5!1s0x88c2ee7519878715:0x1240b47cd73f816b!8m2!3d28.0103569!4d-82.7097531!16s%2Fg%2F1tctml4n?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: "wesley-chapel",
    name: "Wesley Chapel Office",
    image: "/images/offices/wesley-chapel-office.png",
    addressLine1: "6013 Wesley Grove Blvd, Bldg 2, Suite 208",
    addressLine2: "Wesley Chapel, FL 33544",
    phone: "(813) 279-6180",
    hours: "Mon – Fri, 9:00 AM – 5:00 PM",
    mapLink:
      "https://www.google.com/maps/place/6013+Wesley+Grove+Blvd+Bldg+2,+Suite+208,+Wesley+Chapel,+FL+33544,+USA/@28.2441519,-82.3510799,993m/data=!3m3!1e3!4b1!5s0x88c2b0495a328d69:0x584cf7cfaef1a726!4m6!3m5!1s0x88c2b0495bbab293:0x87162f96460bfd6c!8m2!3d28.2441519!4d-82.3510799!16s%2Fg%2F11ks2sgx38?entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D",
  },
];

export default function ContactOffices() {
  return (
    <div className="w-full space-y-10 sm:space-y-12">
      {/* 1. Top Quick Contact Cards: Call Us & Email Us */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {/* Card 1: Call Us */}
        <div className="flex items-center gap-4 sm:gap-5 bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 shadow-xs hover:border-[#ECAB3C]/60 transition-colors" data-animate="fade-up" data-delay="100">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
            <svg
              className="w-6 h-6"
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
          <div className="min-w-0">
            <span className="text-xs font-bold text-gray-500 tracking-wider uppercase block font-sans">
              Call Us
            </span>
            <a
              href="tel:+18132796180"
              className="font-sans text-lg sm:text-xl font-bold text-[#091D46] hover:text-[#ECAB3C] transition-colors block mt-0.5 truncate"
            >
              (813) 279-6180
            </a>
            <span className="text-xs text-gray-500 block mt-0.5">
              Mon – Fri, 9:00 AM – 5:00 PM
            </span>
          </div>
        </div>

        {/* Card 2: Email Us */}
        <div className="flex items-center gap-4 sm:gap-5 bg-white p-5 sm:p-6 rounded-xl border border-gray-200/80 shadow-xs hover:border-[#ECAB3C]/60 transition-colors" data-animate="fade-up" data-delay="200">
          <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#fdf2df] flex items-center justify-center shrink-0 text-[#ECAB3C]">
            <svg
              className="w-6 h-6"
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
          </div>
          <div className="min-w-0">
            <span className="text-xs font-bold text-gray-500 tracking-wider uppercase block font-sans">
              Email Us
            </span>
            <a
              href="mailto:cynthiawaisman@yahoo.com"
              className="font-sans text-lg sm:text-xl font-bold text-[#091D46] hover:text-[#ECAB3C] transition-colors block mt-0.5 truncate"
            >
              cynthiawaisman@yahoo.com
            </a>
            <span className="text-xs text-gray-500 block mt-0.5">
              We respond within 1 business day.
            </span>
          </div>
        </div>
      </div>

      {/* 2. Our Offices Section */}
      <div className="space-y-8 pt-4">
        <div className="text-center max-w-3xl mx-auto space-y-3" data-animate="fade-up">
          {/* Pre-heading Badge with Gold Decorative Bars */}
          <div className="inline-flex items-center justify-center gap-3">
            <span className="w-7 h-[1.5px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "1.75rem" } as React.CSSProperties} />
            <span className="text-xs font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
              OUR OFFICES
            </span>
            <span className="w-7 h-[1.5px] bg-[#ECAB3C]" data-animate="line-expand" style={{ "--line-width": "1.75rem" } as React.CSSProperties} />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-[38px] font-normal text-[#091D46] tracking-tight leading-tight">
            Conveniently Located Across the Tampa Bay Area
          </h2>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed max-w-2xl mx-auto">
            Visit us at any of our office locations. We proudly serve clients throughout
            Tampa, Clearwater, Wesley Chapel and surrounding communities.
          </p>
        </div>

        {/* 3 Office Location Cards (Full Width 3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {offices.map((office, idx) => (
            <div
              key={office.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              data-animate="fade-up"
              data-delay={String(150 + idx * 120)}
            >
              <div>
                {/* Building Photo */}
                <div className="relative w-full h-48 sm:h-52 bg-gray-100 overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Card Details */}
                <div className="p-5 sm:p-6 space-y-3.5">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-[#091D46]">
                    {office.name}
                  </h4>

                  <div className="space-y-2.5 text-xs sm:text-[13px] text-gray-600">
                    {/* Address with Gold Pin Icon */}
                    <div className="flex items-start gap-2.5">
                      <svg
                        className="w-4 h-4 text-[#ECAB3C] shrink-0 mt-0.5"
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
                      <a
                        href={office.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/addr block hover:text-[#ECAB3C] transition-colors"
                      >
                        <p className="font-medium text-gray-700 group-hover/addr:text-[#ECAB3C] transition-colors">
                          {office.addressLine1}
                        </p>
                        <p>{office.addressLine2}</p>
                      </a>
                    </div>

                    {/* Phone with Gold Phone Icon */}
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-[#ECAB3C] shrink-0"
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
                      <a
                        href={`tel:${office.phone.replace(/[^+\d]/g, "")}`}
                        className="hover:text-[#ECAB3C] transition-colors font-medium text-gray-700"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Hours with Gold Clock Icon */}
                    <div className="flex items-center gap-2.5">
                      <svg
                        className="w-4 h-4 text-[#ECAB3C] shrink-0"
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
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Direction Button */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={office.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 rounded-md border border-[#ECAB3C] text-[#091D46] hover:bg-[#ECAB3C] hover:text-[#091D46] font-bold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2 group/btn font-sans"
                >
                  <span>GET DIRECTIONS</span>
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
