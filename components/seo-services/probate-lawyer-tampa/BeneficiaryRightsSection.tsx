import React from "react";
import Image from "next/image";

const beneficiaryCards = [
  {
    title: "Right to Notice",
    description:
      "Florida probate law requires notice of administration to specified beneficiaries and other interested parties. The notice gives interested people key information about the estate and the pending probate case.",
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
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
  {
    title: "Right to Receive Information About Tampa Estate",
    description:
      "Beneficiaries may have rights to information about estate administration. The exact scope depends on the estate, the person's legal status and the issue involved. Our probate lawyer can review the records and explain the information available to each beneficiary.",
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
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      </svg>
    ),
  },
  {
    title: "Right to Receive Their Share of the Estate",
    description:
      "The will, intestate succession law, beneficiary designations, ownership rights and court orders can determine a person's inheritance. Distribution follows the legal requirements for the estate. The personal representative must handle the required administration before distributing estate assets.",
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
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 6v12 M15 9.5c0-1-1.3-2-3-2s-3 1-3 2 1.3 2 3 2 3 1 3 2-1.3 2-3 2-3-1-3-2" />
      </svg>
    ),
  },
  {
    title: "Right to Question Estate Administration",
    description:
      "A beneficiary may raise concerns about estate administration, asset handling, distributions or the personal representative's conduct. Florida law gives the probate court authority to address disputes through the appropriate legal process.",
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
    title: "Right to Challenge Certain Actions",
    description:
      "Certain probate actions can face legal challenges through objections, petitions or other court proceedings. Our attorney can review the facts and explain the available legal options for a beneficiary or other interested person.",
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
        <path d="M12 3v18 M6 21h12 M5 7h14 M5 7l-3 7a3 3 0 0 0 6 0z M19 7l-3 7a3 3 0 0 0 6 0z" />
      </svg>
    ),
  },
];

export function BeneficiaryRightsSection() {
  return (
    <section
      id="rights"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 2-col banner with text and image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10 sm:mb-12 lg:mb-16">
          <div>
            <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
              Rights beneficiaries have in florida probate
            </h2>
            <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed">
              Beneficiaries receive legal protections during probate and those
              protections can affect notices, information, objections,
              distributions and court challenges.
            </p>
          </div>

          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] bg-[#091D46] shadow-[6px_6px_0_#ECAB3C] sm:shadow-[8px_8px_0_#ECAB3C] border border-gray-200">
            <Image
              src="/images/seo-services/guardianship.png"
              alt="Florida Probate Beneficiary Rights"
              fill
              sizes="(max-width: 1024px) 100vw, 550px"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* 5 Beneficiary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {beneficiaryCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-[20px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.12)] hover:border-[#ECAB3C]"
            >
              <div className="w-12 h-12 rounded-xl bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-5 shrink-0 shadow-sm">
                {card.icon}
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#091D46] mb-2.5">
                {card.title}
              </h3>
              <p className="text-sm sm:text-base text-[#586375] leading-relaxed m-0">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
