import React from "react";

export const estatePlanningFaqs = [
  {
    question: "Do I still need a will if I have a Revocable Living Trust?",
    answer:
      "Yes. A pour over will act as a necessary safety net. It catches any personal property or assets you might have accidentally left outside of your trust and legally transfers them into the trust upon your passing. A will is also the only document where you can legally nominate a guardian for your minor children.",
  },
  {
    question: "What happens if I pass away without an estate plan in Florida?",
    answer:
      "Your estate falls under intestacy statutes. The state divides your assets according to a fixed hierarchy of relatives. This completely ignores your personal wishes or relationships. The court will also appoint a guardian for your minor children and an administrator for your estate without your input.",
  },
  {
    question: "Can I just use an online will template?",
    answer:
      "Florida law has strict requirements for executing a valid will, including 2 disinterested witnesses and proper notarization. Generic online templates may overlook these state-specific requirements. If a will is not properly executed, the court may treat it as invalid, leaving your family to deal with the consequences when it is too late to correct the issue.",
  },
  {
    question:
      "I am remarried with children from a previous marriage. What should I do?",
    answer:
      "Blended families represent one of the most vital reasons to seek out a custom plan. We structure provisions that balance the needs of your surviving spouse with the inheritance rights of your biological children. This significantly reduces the chances of a painful family conflict later on.",
  },
  {
    question:
      "What happens to my estate plan if I move to Florida from another state?",
    answer:
      "Your existing estate plan may not fully comply with Florida law. We review your will, trusts, powers of attorney and healthcare documents to identify anything that needs to be updated for Florida's requirements.",
  },
  {
    question: "How much does estate planning cost in Tampa?",
    answer:
      "The cost depends on your family situation, assets, and the type of plan you need. A consultation allows us to assess your needs and explain the appropriate options and fees before you move forward.",
  },
  {
    question: "How often should I update my estate plan?",
    answer:
      "We recommend a review of your documents every three to five years. You should update them immediately following major life events such as marriage, divorce, the birth of a child, a significant real estate purchase, a move to Florida from another state, or the passing of a named executor. An initiative taking  review ensures compliance with the most current 2026 legal standards.",
  },
];

export function EstatePlanningFaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.35fr] gap-8 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECAB3C]/10 border border-[#ECAB3C]/25 text-[#091D46] text-xs font-bold uppercase tracking-wider mb-3.5">
              Got Questions?
            </div>
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-4">
              Common Questions Before You Call
            </h2>
            <p className="text-base sm:text-[1.02rem] text-[#586375] leading-relaxed mb-6">
              Have questions about wills, trusts, durable powers of attorney or
              Florida estate planning? Here are clear answers to the questions
              Tampa families ask most often.
            </p>
            <a
              href="tel:+18132796180"
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
            {estatePlanningFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 open:border-[#ECAB3C] open:shadow-[0_8px_24px_rgba(9,29,70,0.08)]"
              >
                <summary className="font-serif text-base sm:text-lg font-semibold text-[#091D46] p-5 sm:p-6 cursor-pointer list-none flex items-center justify-between gap-4 select-none hover:text-[#ECAB3C] transition-colors [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-inherit m-0 p-0 leading-snug">
                    {faq.question}
                  </h3>
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

