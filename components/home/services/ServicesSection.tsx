import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  title: string;
  href: string;
}

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
  items: ServiceItem[];
  btnText: string;
  btnHref: string;
  isPrimaryBtn?: boolean;
}

const serviceCards: ServiceCard[] = [
  {
    id: "immigration",
    title: "Immigration Services",
    subtitle:
      "Helping individuals and families achieve their immigration goals with clarity and care.",
    image: "/images/services/immigration.jpg",
    isPrimaryBtn: true,
    btnText: "View Immigration Services",
    btnHref: "/immigration-law-overview",
    icon: (
      <svg
        className="w-6 h-6 text-[#091D46]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    items: [
      {
        title: "Family-Based Immigration",
        href: "/immigration-law-overview",
      },
      {
        title: "Employment & Work Visas",
        href: "/immigration-law-overview",
      },
      {
        title: "VAWA (Abused Spouse)",
        href: "/immigration-law-overview",
      },
      {
        title: "U Visa (Crime Victims)",
        href: "/immigration-law-overview",
      },
      {
        title: "Asylum & Deportation Defense",
        href: "/immigration-law-overview",
      },
      {
        title: "Removal of Conditions (I-751)",
        href: "/immigration-law-overview",
      },
      {
        title: "Green Card & Naturalization (Citizenship)",
        href: "/immigration-law-overview",
      },
      {
        title: "Work Permits, Advance Parole & Travel",
        href: "/immigration-law-overview",
      },
    ],
  },
  {
    id: "estate-planning",
    title: "Estate Planning",
    subtitle:
      "Protecting your loved ones and your legacy with thoughtful, customized plans.",
    image: "/images/services/estate-planning.jpg",
    isPrimaryBtn: false,
    btnText: "View Estate Planning Services",
    btnHref: "/estate-planning",
    icon: (
      <svg
        className="w-6 h-6 text-[#091D46]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    items: [
      { title: "Wills & Trusts", href: "/estate-planning" },
      { title: "Power of Attorney", href: "/estate-planning" },
      { title: "Healthcare Directives", href: "/estate-planning" },
      {
        title: "Living Wills & Asset Protection",
        href: "/estate-planning",
      },
      { title: "Succession Planning", href: "/estate-planning" },
      {
        title: "Review & Update of Existing Plans",
        href: "/estate-planning",
      },
      {
        title: "Personalized Estate Planning Consultations",
        href: "/estate-planning",
      },
    ],
  },
  {
    id: "guardianship",
    title: "Guardianship Services",
    subtitle:
      "Ensuring safety, stability, and peace of mind for vulnerable loved ones.",
    image: "/images/services/guardianship.jpg",
    isPrimaryBtn: false,
    btnText: "View Guardianship Services",
    btnHref: "/guardianship-services",
    icon: (
      <svg
        className="w-6 h-6 text-[#091D46]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    items: [
      {
        title: "Guardianship for Adults (Elderly)",
        href: "/guardianship-services",
      },
      {
        title: "Guardianship for Minors (Children)",
        href: "/guardianship-services",
      },
      {
        title: "Limited Guardianship",
        href: "/guardianship-services",
      },
      {
        title: "Plenary Guardianship",
        href: "/guardianship-services",
      },
      {
        title: "Guardianship Advocacy",
        href: "/guardianship-services",
      },
      {
        title: "Incapacity Proceedings",
        href: "/guardianship-services",
      },
      {
        title: "Guardianship Plan Reviews",
        href: "/guardianship-services",
      },
    ],
  },
  {
    id: "probate",
    title: "Probate Administration",
    subtitle:
      "Guiding families through the probate process with efficiency and compassion.",
    image: "/images/services/probate.jpg",
    isPrimaryBtn: false,
    btnText: "View Probate Services",
    btnHref: "/probate-administration",
    icon: (
      <svg
        className="w-6 h-6 text-[#091D46]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.8}
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
    items: [
      {
        title: "Probate Administration",
        href: "/probate-administration",
      },
      { title: "Will Validation", href: "/probate-administration" },
      { title: "Trust Administration", href: "/probate-administration" },
      { title: "Estate Settlement", href: "/probate-administration" },
      {
        title: "Summary Administration",
        href: "/probate-administration",
      },
      { title: "Ancillary Probate", href: "/probate-administration" },
      { title: "Transfer of Assets", href: "/probate-administration" },
      {
        title: "Guidance for Executors & Family Members",
        href: "/probate-administration",
      },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="w-full bg-[#fafbfc] py-10 lg:py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 lg:mb-14 space-y-3">
          {/* Subheading with gold accent lines */}
          <div className="inline-flex items-center gap-3">
            <span className="w-8 h-[2px] bg-[#ECAB3C]" />
            <h3 className="text-xs sm:text-[13px] md:text-sm font-bold tracking-widest text-[#ECAB3C] uppercase font-sans">
              Our Services
            </h3>
            <span className="w-8 h-[2px] bg-[#ECAB3C]" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal text-[#091D46] tracking-tight leading-tight">
            Immigration & Elder Law Services For The Tampa Area
          </h2>

          {/* Subtitle */}
          <p className="text-sm md:text-base text-[#4a5568] leading-relaxed">
            Personalized legal guidance for you and your family — with
            compassion, clarity, and experience.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-xl border border-gray-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top: Image + Floating Icon Badge */}
              <div>
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Floating Round Icon Badge */}
                <div className="relative -mt-7 flex justify-center z-10">
                  <div className="w-14 h-14 rounded-full bg-[#fdfbf7] border-2 border-white shadow-md flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                    {card.icon}
                  </div>
                </div>

                {/* Card Title & Description */}
                <div className="px-5 pt-3 pb-2 text-center">
                  <h3 className="font-serif text-xl sm:text-[22px] font-semibold text-[#091D46] tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-2 leading-relaxed min-h-[36px]">
                    {card.subtitle}
                  </p>
                </div>

                {/* Service Items List */}
                <div className="px-4 py-2">
                  <ul className="divide-y divide-gray-100">
                    {card.items.map((item, index) => (
                      <li key={index}>
                        <Link
                          href={item.href}
                          className="flex items-center justify-between py-2 text-[12.5px] text-[#2c3e50] hover:text-[#ECAB3C] transition-colors group/item"
                        >
                          <span className="line-clamp-1">{item.title}</span>
                          <span className="text-gray-400 group-hover/item:text-[#ECAB3C] group-hover/item:translate-x-0.5 transition-all text-xs shrink-0 ml-2">
                            ›
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Bottom CTA Button */}
              <div className="p-4 pt-2">
                <Link
                  href={card.btnHref}
                  className={`w-full py-3 px-2 sm:px-3 rounded-md text-[11px] xl:text-[12px] font-bold uppercase tracking-wider inline-flex items-center justify-center gap-1.5 transition-all duration-300 ${
                    card.isPrimaryBtn
                      ? "bg-[#ECAB3C] border border-[#ECAB3C] text-[#091D46] shadow-xs hover:bg-[#dca034]"
                      : "bg-white text-[#091D46] border border-[#091D46] hover:bg-[#ECAB3C] hover:border-[#ECAB3C] hover:text-[#091D46] group-hover:bg-[#ECAB3C] group-hover:border-[#ECAB3C] group-hover:text-[#091D46]"
                  }`}
                >
                  <span className="whitespace-nowrap">{card.btnText}</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1 shrink-0">
                    →
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

