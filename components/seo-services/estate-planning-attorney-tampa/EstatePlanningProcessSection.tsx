import React from "react";

const steps = [
  {
    number: "01",
    title: "Step 1: Comprehensive Discovery",
    description:
      "We sit down to discuss your family dynamics, marital history, business interests and ultimate goals. We listen before we recommend anything to our clients. This foundational meeting allows us to spot hidden legal risks you might not have considered.",
  },
  {
    number: "02",
    title: "Step 2: Personalized Plan Design",
    description:
      "We select the precise mix of revocable trusts, pour over wills and power of attorney instruments that fit your specific life. Every estate is different, so your plan should be too. We take the time to customize every part of your estate plan to your needs, your wishes, and your family.",
  },
  {
    number: "03",
    title: "Step 3: Precise Legal Execution",
    description:
      "Every document is drafted in plain English and signed under strict witness and notary requirements specific to Florida. Our supervised signing ceremonies guarantee that all formalities meet the exact standards required by state statutes.",
  },
  {
    number: "04",
    title: "Step 4: Trust Funding and Coordination",
    description:
      "If a trust is part of your strategy, we guide you through the critical step of transferring your assets into it. This ensures it successfully bypasses probate. Proper coordination prevents your assets from accidentally triggering a costly court intervention later.",
  },
  {
    number: "05",
    title: "Step 5: Periodic Reviews",
    description:
      "As your life evolves or Florida laws shift, we review and adjust your plan so it remains a perfect fit. Regular updates keep your estate plan aligned with changes in the law and important changes in your life.",
  },
];

export function EstatePlanningProcessSection() {
  return (
    <section
      id="process"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-8 sm:mb-12">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            Our 5 Step Process to Protect Your Legacy
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            We provide a clear and straightforward path from your first
            conversation to a fully executed plan.
          </p>
        </div>

        <div className="relative pl-10 sm:pl-12 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-x-20 lg:gap-y-6 before:absolute before:left-[15px] sm:before:left-[17px] lg:before:left-1/2 before:top-2 before:bottom-6 before:w-[2px] before:bg-gradient-to-b before:from-[#ECAB3C] before:to-[#ECAB3C]/20 lg:before:-translate-x-1/2">
          {steps.map((step, idx) => {
            const isEven = idx % 2 === 1;
            return (
              <div
                key={step.number}
                className={`relative mb-5 sm:mb-6 lg:mb-0 ${
                  isEven ? "lg:col-start-2 lg:mt-16" : "lg:col-start-1"
                }`}
              >
                <span
                  className={`absolute -left-10 sm:-left-12 top-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#091D46] text-[#ECAB3C] font-bold text-xs flex items-center justify-center border-4 border-[#fbf9f5] z-10 shadow-sm ${
                    isEven
                      ? "lg:-left-[62px] lg:right-auto lg:w-11 lg:h-11 lg:text-sm"
                      : "lg:-right-[62px] lg:left-auto lg:w-11 lg:h-11 lg:text-sm"
                  }`}
                >
                  {step.number}
                </span>
                <div className="bg-white border border-gray-200 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(9,29,70,0.08)] hover:border-[#ECAB3C]">
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

