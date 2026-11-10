import React from "react";

export const willsFaqs = [
  {
    question: "Is it better to have a trust or a will in Florida?",
    answer:
      "Many Tampa households use both. A funded revocable living trust can pass titled assets outside Hillsborough probate. A will still names guardians for minor children and can pour leftover probate property into the trust. The better tool depends on your home, accounts, family and whether you will complete trust funding.",
  },
  {
    question: "What assets need trust funding?",
    answer:
      "Real estate, eligible bank accounts, brokerage accounts, business interests and other assets may need ownership changes for a revocable living trust. Retirement accounts usually stay in your name and use beneficiary forms. Life insurance also uses beneficiary designations.",
  },
  {
    question: "Do I put my IRA or 401(k) into my living trust?",
    answer:
      "Usually no. IRAs and 401(k)s stay in your personal name. Beneficiary designations control the transfer at death. A trust may be named as a beneficiary in specific planning situations. Review those forms with the will and trust so they do not conflict.",
  },
  {
    question: "Can a will avoid probate in Florida?",
    answer:
      "No. A will directs probate assets through the court. It does not take those assets out of probate. A properly funded revocable living trust can keep trust owned assets outside probate. Beneficiary designations, Lady Bird deeds and other non probate tools can also move specific assets outside the will.",
  },
  {
    question: "What happens after I buy a new property?",
    answer:
      "A new property creates a fresh estate planning task. We review the deed, financing, homestead status, ownership structure and trust terms. Eligible property can then receive the correct title treatment.",
  },
  {
    question: "What happens if I open a new bank account after funding my trust?",
    answer:
      "A new account can require a new retitling step. Keep the account list current and tell your attorney about major account changes during a plan review.",
  },
  {
    question: "Can a special needs trust protect government benefits?",
    answer:
      "A properly structured special needs trust can support an eligible beneficiary while addressing needs based benefit rules. The correct trust type depends on the source of the funds and the beneficiary's circumstances.",
  },
  {
    question: "Can my trust hold my business interest?",
    answer:
      "A trust can hold certain LLC interests, corporate shares or other business interests. The transfer must follow the operating agreement, shareholder agreement, buy sell terms and applicable ownership rules.",
  },
  {
    question: "What should I bring to my estate planning consultation?",
    answer:
      "Bring your existing will or trust, deeds, account information, beneficiary forms, business documents, any marital agreement and a family list. Include your intended guardians, trustees, personal representative and major beneficiaries.",
  },
  {
    question: "How often should I review my will and trust?",
    answer:
      "Review your plan after marriage, divorce, a new child, a death in the family, a move, a property purchase, a business change or a major financial change. A regular review also helps keep beneficiary forms and trust funding current.",
  },
  {
    question: "How much does a Tampa will or trust cost?",
    answer:
      "Fees depend on the number of documents, family structure, real estate, business interests, trust funding and other planning work.",
  },
];

export function WillsTrustsFaqSection() {
  return (
    <section
      id="faq"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.35fr] gap-8 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ECAB3C]/10 border border-[#ECAB3C]/25 text-[#091D46] text-xs font-bold uppercase tracking-wider mb-3.5">
              Got Questions?
            </div>
            <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-4">
              Frequently Asked Questions About Will &amp; Trust
            </h2>
            <p className="text-sm sm:text-[1.02rem] text-[#586375] leading-relaxed mb-6">
              Have questions about wills, revocable living trusts, Lady Bird
              deeds or estate planning in Tampa? Here are clear, straightforward
              answers to the questions Florida families ask most often.
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
            {willsFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 open:border-[#ECAB3C] open:shadow-[0_8px_24px_rgba(9,29,70,0.08)]"
              >
                <summary className="font-serif text-[15px] sm:text-lg font-semibold text-[#091D46] p-4 sm:p-6 cursor-pointer list-none flex items-center justify-between gap-3 sm:gap-4 select-none hover:text-[#ECAB3C] transition-colors [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-[15px] sm:text-lg font-semibold text-inherit m-0 p-0 leading-snug">
                    {faq.question}
                  </h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-[#fbf9f5] group-open:bg-[#ECAB3C]/15 text-[#ECAB3C] flex items-center justify-center text-xl font-bold transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0 border-t border-transparent group-open:border-gray-200">
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

