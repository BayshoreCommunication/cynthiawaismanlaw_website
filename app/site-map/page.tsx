import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Site Map | Cynthia I. Waisman, P.A.",
  description:
    "Complete website directory and site map for Cynthia I. Waisman, P.A. Find pages on Florida estate planning, probate, guardianship, and immigration law.",
};

interface SiteMapGroup {
  category: string;
  badge?: string;
  links: {
    label: string;
    href: string;
    desc?: string;
  }[];
}

const siteMapData: SiteMapGroup[] = [
  {
    category: "Main Pages",
    badge: "GENERAL",
    links: [
      { label: "Home", href: "/", desc: "Welcome to Cynthia I. Waisman, P.A. Attorney At Law" },
      { label: "About Our Firm", href: "/about", desc: "Overview of firm values, history, and community dedication" },
      { label: "Our Attorney (Cynthia I. Waisman)", href: "/about/our-attorney", desc: "Biography, background, and legal credentials of Cynthia I. Waisman" },
      { label: "Our Team", href: "/about/our-team", desc: "Meet the dedicated legal team supporting our clients" },
      { label: "Contact Us", href: "/contact", desc: "Office addresses, phone numbers, and consultation inquiry form" },
      { label: "Legal Blog & Resources", href: "/blog", desc: "Articles, insights, and updates on Florida law & immigration" },
    ],
  },
  {
    category: "Estate Planning Services",
    badge: "PRACTICE AREA",
    links: [
      { label: "Estate Planning Services Overview", href: "/estate-planning-services", desc: "Comprehensive Florida wills, trusts, and legacy planning" },
      { label: "Wills & Testamentary Planning", href: "/estate-planning-services/wills", desc: "Strategic drafting of Florida last wills and testaments" },
      { label: "Trusts & Revocable Living Trusts", href: "/estate-planning-services/trusts", desc: "Living trusts, asset protection, and probate avoidance" },
      { label: "Durable Powers of Attorney", href: "/estate-planning-services/powers-of-attorney", desc: "Financial and legal decision-making authority during incapacity" },
      { label: "Living Wills & Healthcare Directives", href: "/estate-planning-services/living-wills", desc: "End-of-life wishes and healthcare surrogate designations" },
      { label: "Funding Your Revocable Trust", href: "/estate-planning-services/funding-administration-your-revocable-trust", desc: "Retitling real estate and accounts into your living trust" },
      { label: "Estate Planning FAQ", href: "/estate-planning-services/estate-planning-faq", desc: "Answers to common questions regarding Florida estate planning" },
    ],
  },
  {
    category: "Probate Administration",
    badge: "PRACTICE AREA",
    links: [
      { label: "Probate Administration Overview", href: "/probate-administration", desc: "Guiding executors and families through Florida probate court" },
      { label: "Summary Administration", href: "/probate-administration/summary-administration", desc: "Expedited probate for qualifying estates under $75,000" },
      { label: "Ancillary Probate", href: "/probate-administration/ancillary-probate", desc: "Probate representation for out-of-state families owning Florida property" },
      { label: "Will Contests & Estate Disputes", href: "/probate-administration/will-contests", desc: "Litigation for undue influence, incapacity, and beneficiary disputes" },
    ],
  },
  {
    category: "Immigration & Naturalization",
    badge: "PRACTICE AREA",
    links: [
      { label: "Immigration Law Overview", href: "/immigration-law-overview", desc: "Comprehensive representation in U.S. immigration and citizenship" },
      { label: "Green Cards & Visas", href: "/immigration-law-overview", desc: "Family-based immigration, spousal petitions, and status adjustments" },
      { label: "Naturalization & Citizenship", href: "/immigration-law-overview", desc: "Guiding lawful permanent residents toward U.S. citizenship" },
    ],
  },
  {
    category: "Guardianship Services",
    badge: "PRACTICE AREA",
    links: [
      { label: "Guardianship Services", href: "/guardianship-services", desc: "Legal protection for incapacitated adults, elderly loved ones, and minors" },
    ],
  },
  {
    category: "Legal Notices & Site Information",
    badge: "LEGAL",
    links: [
      { label: "Legal Disclaimer & Terms of Use", href: "/disclaimer", desc: "Official attorney-client disclaimer and terms of website use" },
      { label: "Privacy Policy", href: "/privacy", desc: "How we collect, protect, and use your personal data" },
      { label: "HTML Site Map", href: "/site-map", desc: "Complete navigable directory of website pages" },
    ],
  },
];

export default function SiteMapPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Site Map" },
        ]}
        badge="DIRECTORY"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Site Map Grid */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#ECAB3C]" />
              <span className="text-xs font-bold tracking-[0.2em] text-[#ECAB3C] uppercase font-sans">
                WEBSITE DIRECTORY
              </span>
              <span className="w-8 h-[2px] bg-[#ECAB3C]" />
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#091D46] tracking-tight mb-4">
              Explore Our Site Map
            </h1>
            <p className="text-sm sm:text-base text-[#4a5568] leading-relaxed font-sans">
              Find quick, organized links to all areas of our website, including Florida estate planning, probate administration, guardianship services, immigration law, and firm resources.
            </p>
          </div>

          {/* Grid of Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
            {siteMapData.map((group, gIdx) => (
              <div
                key={gIdx}
                className="bg-[#fbfcfd] border border-gray-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#ECAB3C]/60 transition-all duration-300 flex flex-col h-full"
              >
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200/80">
                  <h2 className="font-serif text-xl sm:text-[22px] font-bold text-[#091D46]">
                    {group.category}
                  </h2>
                  {group.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#fdf2df] text-[#b87e1a]">
                      {group.badge}
                    </span>
                  )}
                </div>

                {/* List of Links */}
                <ul className="space-y-4 font-sans flex-1">
                  {group.links.map((link, lIdx) => (
                    <li key={lIdx} className="group/item">
                      <Link
                        href={link.href}
                        className="inline-flex items-center gap-1.5 text-sm sm:text-[15px] font-semibold text-[#091D46] group-hover/item:text-[#ECAB3C] transition-colors"
                      >
                        <span className="text-[#ECAB3C] text-xs transition-transform group-hover/item:translate-x-0.5">
                          ›
                        </span>
                        <span>{link.label}</span>
                      </Link>
                      {link.desc && (
                        <p className="text-xs text-gray-500 mt-0.5 pl-3.5 leading-snug">
                          {link.desc}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <AboutFirmSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
