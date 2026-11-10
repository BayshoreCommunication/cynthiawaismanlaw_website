import React from "react";

const steps = [
  {
    number: "1",
    title: "Initial Estate Review",
    description:
      "We begin with the basic facts. We review the death certificate, will, family information, known assets, debts, beneficiary information and major property. This review helps us select the correct probate administration path for your situation.",
  },
  {
    number: "2",
    title: "Probate Case Opening",
    description:
      "We prepare and submit all opening petitions, oath documents and proposed court orders to the Hillsborough County Clerk of Court. The original will must reach the appropriate clerk within 10 days after the custodian learns of the death.",
  },
  {
    number: "3",
    title: "Personal Representative Appointment",
    description:
      "The judge signs Letters of Administration. The court grants the Personal Representative legal authority to act on behalf of the estate. Florida law sets a statutory preference for appointment. In a testate estate, the person nominated in the will receives the first preference. In an intestate estate, the surviving spouse receives the first preference under the statutory order.",
  },
  {
    number: "4",
    title: "Estate Administration and Asset Management",
    description:
      "The personal representative identifies, gathers and protects estate assets. We assist the Personal Representative in opening an estate bank account and banks. In addition, dealing with insurance companies, real estate records, business interests, vehicles and securing physical estate assets.",
  },
  {
    number: "5",
    title: "Required Notices and Creditor Period",
    description:
      "The personal representative must provide required notices to beneficiaries and other interested parties. Florida law also requires a notice to creditors in applicable formal probate cases. Our tampa probate lawyer sent written notice to known creditors. We publish a legal notice in a Hillsborough County newspaper to start the mandatory 3 months for unknown creditors and 30 days for served creditors.",
  },
  {
    number: "6",
    title: "Resolving Estate Debts and Other Obligations",
    description:
      "Florida law places estate expenses and obligations into statutory priority classes. Funeral, interment and grave marker expenses receive a Class 2 priority up to an aggregate $6,000, subject to the statute. We evaluate all filed creditor claims and pay valid estate bills in statutory order. Our attorney objects to improper demands within strict court deadlines.",
  },
  {
    number: "7",
    title: "Preparing the Estate for Distribution",
    description:
      "The personal representative prepares the estate for beneficiary distribution after the required administration work reaches the proper stage. We calculate final distribution amounts, complete formal accountings and draft legal waivers or consent forms for all beneficiaries.",
  },
  {
    number: "8",
    title: "Final Accounting and Probate Closing",
    description:
      "The final stage focuses on accounting, required documents, distributions and closure of the probate case. Attorney Cynthia submits final accounting reports to the court and distributes remaining assets to heirs. She obtains a court order releasing the Personal Representative from liability.",
  },
];

export function ProbateProcessSection() {
  return (
    <section id="process" className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-8 sm:mb-14">
          <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
            How we step by step processed your probate case
          </h2>
          <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed m-0">
            A probate case moves through several stages and each stage has a
            specific purpose. Your case may move faster or require additional
            steps based on assets, creditors, beneficiaries and court issues
            involved.
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
                  className={`absolute -left-10 sm:-left-12 top-5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#091D46] text-[#ECAB3C] font-bold text-xs sm:text-sm flex items-center justify-center border-4 border-[#fbf9f5] z-10 shadow-sm ${
                    isEven
                      ? "lg:-left-[62px] lg:right-auto lg:w-11 lg:h-11 lg:text-base"
                      : "lg:-right-[62px] lg:left-auto lg:w-11 lg:h-11 lg:text-base"
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
