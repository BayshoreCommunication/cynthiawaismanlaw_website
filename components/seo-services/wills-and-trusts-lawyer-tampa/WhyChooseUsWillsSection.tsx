import React from "react";

const reasons = [
  {
    title: "More than 20 years of estate planning experience",
    description:
      "Attorney Cynthia focuses on Florida wills, trusts, estate planning and related documents. Her work includes revocable living trusts, pour over wills, Lady Bird deeds, trust funding and estate plan updates.",
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
    title: "Trust funding receives attention after signing",
    description:
      "The signed trust starts the process. Deeds, account titles, business interests and beneficiary forms complete the ownership plan. We continue with the funding work after document execution.",
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
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Meetings across Tampa and nearby communities",
    description:
      "Our Tampa office serves families across South Tampa, Hyde Park, Davis Islands, Palma Ceia, Harbour Island, Seminole Heights, Westshore, Westchase, Carrollwood, New Tampa, Tampa Palms, Channelside, Ybor City, Clearwater, Wesley Chapel and nearby communities.",
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
  {
    title: "Clear documents and practical guidance",
    description:
      "We explain each document in plain language and connect it to your family, property and financial accounts. You leave with a clear understanding of your plan and the steps needed after signing.",
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
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
      </svg>
    ),
  },
];

export function WhyChooseUsWillsSection() {
  return (
    <section
      id="why"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#091D46] text-white border-t border-[#ECAB3C]/20"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[840px] mb-12">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-white leading-[1.22] mb-3.5">
            Why Tampa Families Work With Cynthia I. Waisman, P.A.
          </h2>
          <p className="text-[1.05rem] text-[#b0c0d8] leading-relaxed">
            Estate planning involves documents, property records, beneficiary
            forms and follow-through. A Tampa will &amp; trust lawyer keeps those
            pieces connected, with 2 decades of Florida estate planning work and
            funding after the signing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {reasons.map((item) => (
            <div
              key={item.title}
              className="bg-[#061533]/80 border border-[#ECAB3C]/25 rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#ECAB3C] hover:shadow-[0_18px_40px_rgba(0,0,0,0.4)] backdrop-blur-xs flex flex-col justify-between"
            >
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

