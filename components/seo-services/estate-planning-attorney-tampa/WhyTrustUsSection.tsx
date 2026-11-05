import React from "react";

const trustReasons = [
  {
    title: "Florida Statutory Compliance",
    description:
      "We guarantee your documents are executed flawlessly under current Florida law to provide absolute peace of mind. Strict adherence to state specific execution formalities ensures your plan remains legally ironclad against future challenges.",
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
    title: "Dedicated Asset Funding",
    description:
      "We walk you through retitling your bank accounts, updating beneficiaries, and recording real estate deeds so your trust actually works and bypasses probate. An unfunded trust is useless in court. We guide you step by step through this vital administrative phase.",
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
    title: "Protection for Blended and LGBT+ Families",
    description:
      "We build deeply personalized strategies to protect non traditional family structures that default laws often overlook. Our firm respects the unique dynamics of every household and designs protective legal boundaries that safeguard your exact definition of family.",
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
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Ongoing Support",
    description:
      "Life changes constantly. Your plan will need to change as a result of marriages, divorce, new children and changing tax laws for 2026. We reach out from time to time to make sure your documents don't grow stale or don't accurately capture your current situation.",
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
];

export function WhyTrustUsSection() {
  return (
    <section
      id="why-trust-us"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#091D46] text-white border-t border-[#ECAB3C]/20"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[840px] mb-12">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-white leading-[1.22] mb-3.5">
            Why Tampa Bay Families Trust Cynthia I. Waisman, P.A.
          </h2>
          <p className="text-[1.05rem] text-[#b0c0d8] leading-relaxed">
            Your choice of legal counselor must reflect a deep understanding of
            Florida law and the complexities of modern families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {trustReasons.map((item) => (
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

