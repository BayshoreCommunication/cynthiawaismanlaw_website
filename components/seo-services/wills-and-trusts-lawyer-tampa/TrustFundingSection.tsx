import React from "react";

const fundingCards = [
  {
    title: "Your Tampa home needs the right deed",
    description:
      "A Tampa home may need a new deed after you create a revocable living trust. We review the current deed, legal description, homestead status, mortgage and trust terms before preparing the transfer. The Hillsborough County Clerk records the deed after signing.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Bank and brokerage accounts need ownership review",
    description:
      "Eligible bank and investment accounts may move into the trust through account retitling. Each financial institution has its own transfer process. We provide the required documents and instructions, then track the new ownership after the institution completes the change.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Retirement accounts use beneficiary planning",
    description:
      "IRAs, 401(k)s and similar retirement accounts usually remain in your personal name. Beneficiary forms control the transfer after death. We review primary and contingent beneficiaries and coordinate those choices with your will and trust.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Life insurance and POD accounts need current forms",
    description:
      "Life insurance, payable on death (POD) accounts and transfer on death (TOD) accounts follow their own beneficiary designations. A current estate plan needs current forms. We review names, percentages, successor beneficiaries and family changes as part of the planning process.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Business interests need written transfer steps",
    description:
      "An LLC interest, corporation or professional practice needs ownership records to match the estate plan. We review the operating agreement, shareholder documents, membership records, buy/sell terms and transfer restrictions. A written assignment can move an eligible interest into a trust after the governing documents allow the transfer.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    title: "Keep a current asset list",
    description:
      "Trust funding continues after the first signing. A new home, bank account, investment account, business interest or major purchase can create another funding task. We keep an asset checklist so your plan stays connected to your property over time.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
  },
];

export function TrustFundingSection() {
  return (
    <section
      id="trust-funding"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mb-8 sm:mb-11">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Trust Funding Turns Your Estate Plan Into Working Ownership
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            The trust document sets the rules. Funding connects those rules to your
            Tampa home, bank accounts, investments, life insurance and business
            interests. We review each asset, choose the right transfer method,
            complete the paperwork and track the changes after signing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {fundingCards.map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-[20px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.12)] hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

