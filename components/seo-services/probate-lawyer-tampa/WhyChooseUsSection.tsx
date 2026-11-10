import React from "react";

const reasons = [
  {
    title: "Over 20 Years of Legal Experience",
    description:
      "Our probate attorney brings more than 20 years of legal experience to Florida families. Her practice includes probate, estate planning, guardianship, immigration and related legal matters.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12z M8.2 13.9L7 23l5-3 5 3-1.2-9.1" />
      </svg>
    ),
  },
  {
    title: "Expertise With All Probate Administration",
    description:
      "Our firm handles formal administration, summary administration, ancillary probate, contested estate matters and other Florida probate needs.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: "Guidance for Complex and Contested Estates",
    description:
      "Real estate, business interests, creditor claims, family disputes and multi state assets can add legal work to an estate. Our team helps families address these issues within the Florida probate process.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Clear Communication Throughout the Case",
    description:
      "Probate creates many questions for families. We explain the legal process in clear language and keep the personal representative informed about the work ahead.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Tampa Bay Office Locations",
    description:
      "Our firm serves Tampa Bay through offices in Tampa, Clearwater and Wesley Chapel by appointment. The locations provide access for families across Hillsborough, Pinellas and Pasco counties.",
    icon: (
      <svg
        className="w-6 h-6"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
  },
];

export function WhyChooseUsSection() {
  return (
    <section
      id="why"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#091D46] text-white border-t border-[#ECAB3C]/20"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-8 sm:mb-12">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-white leading-[1.22] mb-3.5">
            Why families choose our tampa probate law firm
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#b0c0d8] leading-relaxed">
            Local families rely on our two decades of Florida probate experience
            to protect their inheritances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-[#061533]/80 border border-[#ECAB3C]/25 rounded-[20px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ECAB3C] hover:shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-xs"
            >
              <div className="w-12 h-12 rounded-xl bg-[#ECAB3C]/15 text-[#ECAB3C] border border-[#ECAB3C]/35 flex items-center justify-center mb-5 shrink-0">
                {item.icon}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2.5">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-[#c3d1e4] leading-relaxed m-0">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
