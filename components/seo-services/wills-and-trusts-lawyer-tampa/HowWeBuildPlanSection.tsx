import React from "react";

const steps = [
  {
    number: "01",
    title: "01. We review your family and assets",
    description:
      "We start with your family structure, home, other real estate, financial accounts, retirement plans, business interests, existing documents, beneficiary forms and planning goals.",
  },
  {
    number: "02",
    title: "02. We recommend the right structure",
    description:
      "Your plan may use a will, revocable living trust, Lady Bird deed, powers of attorney, health care documents or a combination. We explain the purpose of each document before drafting begins.",
  },
  {
    number: "03",
    title: "03. We draft plan around your real choices",
    description:
      "We use specific names, percentages, successor choices, guardians, trustees, distribution terms and backup provisions. Blended families, minor children, business interests, special needs beneficiaries and Florida homestead receive specific treatment when relevant.",
  },
  {
    number: "04",
    title: "04. We complete the signing",
    description:
      "Florida law sets formal signing and witnessing requirements for wills. Two witnesses sign in the required manner. A Florida notary completes the self proving affidavit when included in the plan.",
  },
  {
    number: "05",
    title: "05. We fund the trust and coordinate ownership",
    description:
      "We prepare deeds, account transfer instructions, business assignments and beneficiary reviews based on your asset structure. We track the funding work after signing so each intended asset receives the correct treatment.",
  },
  {
    number: "06",
    title: "06. We review the plan after major life changes",
    description:
      "Marriage, divorce, a new child, a death in the family, a move, a new property, a business change or a major shift in assets can create a reason for review. We also review beneficiary forms and trust funding during estate plan updates.",
  },
];

export function HowWeBuildPlanSection() {
  return (
    <section
      id="process"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-12">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            How We Build Your Tampa Will or Trust Plan
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Every plan starts with your family and your actual assets. We move
            from information gathering to document preparation, Florida
            execution, funding and future review.
          </p>
        </div>

        <div className="relative pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-6 before:absolute before:left-[19px] lg:before:left-1/2 before:top-2 before:bottom-6 before:w-[2px] before:bg-gradient-to-b before:from-[#ECAB3C] before:to-[#ECAB3C]/20 lg:before:-translate-x-1/2">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.number}
                className={`relative mb-6 lg:mb-0 ${
                  isEven ? "lg:col-start-2 lg:mt-16" : "lg:col-start-1"
                }`}
              >
                <span
                  className={`absolute -left-12 top-5 w-9 h-9 rounded-full bg-[#091D46] text-[#ECAB3C] font-bold text-xs flex items-center justify-center border-4 border-[#fbf9f5] z-10 shadow-sm ${
                    isEven
                      ? "lg:-left-[62px] lg:right-auto lg:w-11 lg:h-11 lg:text-sm"
                      : "lg:-right-[62px] lg:left-auto lg:w-11 lg:h-11 lg:text-sm"
                  }`}
                >
                  {step.number}
                </span>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(9,29,70,0.08)] hover:border-[#ECAB3C]">
                  <h3 className="font-serif text-lg font-semibold text-[#091D46] mb-2">
                    {step.title}
                  </h3>
                  <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

