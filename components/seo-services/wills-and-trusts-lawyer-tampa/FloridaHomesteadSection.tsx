import React from "react";

const homesteadCards = [
  {
    title: "Florida limits certain homestead devises",
    description:
      "Florida Statutes §732.4015 states a protected homestead generally cannot be devised when the owner is survived by a spouse or minor child, subject to the statutory exception for a device to the spouse when the owner has no minor child. The constitutional and statutory homestead rules deserve careful review before you place distribution instructions into a will or trust.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Surviving spouses have specific homestead rights",
    description:
      "Florida Statutes §732.401 provides a life estate structure for certain surviving spouses when homestead passes through intestacy. The surviving spouse can elect an undivided one half interest under the statute, subject to the statutory requirements and six month election period. Estate planning for married Tampa homeowners should account for these rights.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Trust can require Florida homestead planning",
    description:
      "A revocable living trust can hold a Tampa home. However the trust language, deed, ownership record and homestead status need careful review. Florida law specifically addresses certain trust dispositions involving homestead. Your attorney can review the deed, ownership structure, family situation and trust terms together.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" />
      </svg>
    ),
  },
  {
    title: "Lady Bird deed can address real estate goals",
    description:
      "A Lady Bird deed, also called an enhanced life estate deed, can provide a Florida real estate planning structure for certain property. The owner can retain significant control during life while naming future interests in the property. The deed can form part of a broader estate plan. Homestead status, spouse rights, mortgage terms, taxes and the rest of the estate plan deserve review before using this structure.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Homestead transfers need spousal review",
    description:
      "Law gives spouses specific rights involving the family home. The Florida Constitution and Florida statutes address transfers involving homestead. Spousal rights can therefore affect a deed, trust or other transfer plan. A married homeowner should review the ownership record and marital rights before changing title to the Tampa home.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Homestead plan should match family structure",
    description:
      "Your planning needs can change based on your family. A married couple can have different goals from a single homeowner. A parent with minor children can face different device rules from a homeowner without minor children. A second marriage can create additional goals for a spouse and children from an earlier relationship. Your estate plan should account for the people connected to the home before choosing a transfer method.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Plan the home separately from other assets",
    description:
      "Primary residence can involve homestead protection, spouse rights, minor child rights, deed ownership, trust ownership, beneficiary planning, future sale or refinancing and estate distribution. Your bank accounts, retirement accounts, business interests and investment properties follow their own ownership and transfer rules.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export function FloridaHomesteadSection() {
  return (
    <section
      id="homestead"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[860px] mb-8 sm:mb-11">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Florida Homestead Rules Tampa Homeowners Need to Understand
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Florida homestead law can limit how a Tampa home passes at death,
            especially if a spouse or minor child survives. A will, trust or
            Lady Bird deed that ignores homestead, spousal rights or Save Our
            Homes can fail. Review the deed, the family and Florida Statutes
            §§732.401 and 732.4015 before you change title.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {homesteadCards.map((card) => (
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

