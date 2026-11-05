import React from "react";

export const probateFaqs = [
  {
    question: "Who can serve as a personal representative in Florida?",
    answer:
      "A personal representative must be at least 18, mentally competent, never convicted of a felony and a Florida resident unless they are a close relative by blood or marriage.",
  },
  {
    question: "What happens if the original cannot be found?",
    answer:
      "Florida law presumes a missing original will was revoked, but a copy can be probated if the terms are proven by one disinterested witness if a correct copy exists.",
  },
  {
    question: "Can a personal representative be removed?",
    answer:
      "Yes, the court can remove a personal representative for conflicts of interest, wasting estate funds, mismanaging assets or failing to follow court orders.",
  },
  {
    question: "What happens if an estate has more debts than assets?",
    answer:
      "Insolvent estates must pay debts in a strict priority order under Florida Statute § 733.707, starting with administration and funeral expenses, before beneficiaries receive anything.",
  },
  {
    question: "What happens to jointly owned property after death?",
    answer:
      "Property held with rights of survivorship or as tenancy by the entirety transfers directly to the surviving co owner automatically without going through probate court.",
  },
  {
    question:
      "Are life insurance proceeds and retirement accounts part of probate?",
    answer:
      "No, assets with valid, living named beneficiaries bypass probate entirely and only enter the estate if no beneficiary is listed or if the estate itself is named.",
  },
];

export function ProbateFaqSection() {
  return (
    <section id="faq" className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.35fr] gap-8 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECAB3C]/10 border border-[#ECAB3C]/25 text-[#091D46] text-xs font-bold uppercase tracking-wider mb-3.5">
              Got Questions?
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-4">
              Frequently asked questions about probate
            </h2>
            <p className="text-base sm:text-[1.02rem] text-[#586375] leading-relaxed mb-6">
              Have questions about probating a will or administering an estate in Hillsborough County? Here are clear, straightforward answers to the legal questions families ask most often.
            </p>
            <a
              href="tel:+17272199009"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#091D46] hover:bg-[#061533] text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <svg
                className="w-4 h-4 text-[#ECAB3C]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
              </svg>
              <span>Have another question? Call Us</span>
            </a>
          </div>

          <div className="space-y-3.5">
            {probateFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 open:border-[#ECAB3C] open:shadow-[0_8px_24px_rgba(9,29,70,0.08)]"
              >
                <summary className="font-serif text-base sm:text-lg font-semibold text-[#091D46] p-5 sm:p-6 cursor-pointer list-none flex items-center justify-between gap-4 select-none hover:text-[#ECAB3C] transition-colors [&::-webkit-details-marker]:hidden">
                  <span>{faq.question}</span>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fbf9f5] group-open:bg-[#ECAB3C]/15 text-[#ECAB3C] flex items-center justify-center text-xl font-bold transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-transparent group-open:border-gray-200">
                  <p className="text-sm sm:text-base text-[#586375] leading-relaxed m-0 pt-3">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
