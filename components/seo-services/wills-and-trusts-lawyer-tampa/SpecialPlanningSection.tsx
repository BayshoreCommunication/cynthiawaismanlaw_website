import React from "react";

const specialCards = [
  {
    title: "Special needs trust can support eligible beneficiary",
    description:
      "A direct inheritance can affect needs based benefits such as SSI or Medicaid. A properly structured special needs trust can hold funds for an eligible beneficiary while supporting supplemental needs. The trust terms, funding source, trustee and benefit rules all matter.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Larger estates need asset and tax coordination",
    description:
      "Families with multiple properties, business interests, investment accounts, retirement assets and significant insurance coverage need one connected plan. Ownership records, beneficiary forms, trust terms, charitable goals and tax planning should work together. Your estate attorney can coordinate with your CPA, financial advisor and other professional advisors.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    title: "Digital assets need access instructions",
    description:
      "Online financial accounts, cryptocurrency, digital files, websites and other digital property need practical access planning. Your estate documents can give fiduciaries appropriate authority and provide instructions for locating and managing these assets.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export function SpecialPlanningSection() {
  return (
    <section
      id="special-planning"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mb-11">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Special Estate Planning Can Protect Family Members and Future Decisions
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Some families need more than a basic will and revocable trust. The
            right structure depends on the beneficiary, the asset and the type of
            future management your family may need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialCards.map((card) => (
            <div
              key={card.title}
              className="bg-[#fdf8f0] border border-[#ECAB3C]/25 rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.1)] hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
                <span className="w-[52px] h-[52px] rounded-xl bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-4.5">
                  {card.icon}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

