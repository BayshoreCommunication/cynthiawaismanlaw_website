import React from "react";

export function WhatWeHandleSection() {
  const items = [
    {
      title: "Probate petition and court filings",
      description:
        "We draft, verify and file all initial petitions, death certificates, wills and supporting legal documents with the circuit court. Accurate filings help the probate court move the case through each stage.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6" />
        </svg>
      ),
    },
    {
      title: "Personal representative representation",
      description:
        "The personal representative manages the estate under Florida law. Florida law places fiduciary duties on this role and creates legal responsibility for losses caused by a breach of duty. We advise Personal Representatives on their fiduciary obligations to keep them fully compliant with Florida law and protect them from personal liability.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      title: "Probate asset identification and protection",
      description:
        "Our probate attorney Cynthia helps identify assets owned by the decedent and determine the legal path for each asset. The work may include reviewing deeds, financial accounts, vehicle titles, business records and personal property.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M21 21l-4.3-4.3" />
        </svg>
      ),
    },
    {
      title: "Creditor notices and estate claims",
      description:
        "Florida probate requires specific creditor procedures. The personal representative must publish the required notice and handle claims according to statutory deadlines and priorities. We draft and publish the required legal Notice to Creditors, review incoming debt claims and file formal objections against invalid charges.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0" />
        </svg>
      ),
    },
    {
      title: "Probate real estate and homestead matters",
      description:
        "Real estate can require title review, homestead analysis, court orders, deeds, sales or other legal work. Florida homestead rules can affect surviving spouses and minor children, so our attorney reviews the property before distribution. We file petitions to determine homestead property. Our petition protects the family home from most creditor claims and preserves tax exemptions for surviving spouses or heirs.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" />
        </svg>
      ),
    },
    {
      title: "Beneficiary distribution",
      description:
        "Distribution begins after the estate meets its legal obligations and satisfies the requirements for distribution. We calculate final inheritance shares, draft distribution schedules and collect signed receipts before transferring assets to beneficiaries.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      ),
    },
    {
      title: "Probate accounting and estate closing",
      description:
        "The estate needs clear financial records during administration. We prepare detailed financial accountings showing all income, expenses and distributions and petition the judge to discharge the Personal Representative.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 6v12 M15 9.5c0-1-1.3-2-3-2s-3 1-3 2 1.3 2 3 2 3 1 3 2-1.3 2-3 2-3-1-3-2" />
        </svg>
      ),
    },
    {
      title: "Contested probate and will disputes",
      description:
        "A contested probate case may involve a challenge to the will, disagreement over a personal representative, beneficiary disputes, asset ownership issues or another court matter. Attorney Cynthia represents clients in court when disputes arise regarding will validity, undue influence or asset distribution.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 3v18 M6 21h12 M5 7h14 M5 7l-3 7a3 3 0 0 0 6 0z M19 7l-3 7a3 3 0 0 0 6 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="handle" className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-[#e4dccb]">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[820px] mb-11">
          <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#0e2240] leading-[1.22] mb-3.5">
            What does our tampa probate lawyer handle?
          </h2>
          <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
            Our firm helps personal representatives and families manage the court
            process, estate assets, creditor issues, property matters and beneficiary
            distributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#f8f5ee] border border-[#e4dccb] rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(14,34,64,0.12)] hover:border-[#b8914a]"
            >
              <span className="w-[52px] h-[52px] rounded-xl bg-[#0e2240] text-[#e0bd7c] flex items-center justify-center mb-4.5">
                {item.icon}
              </span>
              <h3 className="font-serif text-xl font-semibold text-[#0e2240] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
