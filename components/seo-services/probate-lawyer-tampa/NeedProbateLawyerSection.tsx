import React from "react";
import Link from "next/link";

interface NeedProbateCard {
  num: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

export function NeedProbateLawyerSection() {
  const cards: NeedProbateCard[] = [
    {
      num: "01",
      title: "There is a will to file",
      description:
        "Florida law requires the custodian of an original will to deposit it with the proper clerk within 10 days after receiving information about the testator's death. The custodian must also provide the testator's date of death or the last four digits of the Social Security number. A will gives the court important information about the estate and the people named to receive property. A probate lawyer prepares the necessary petitions to open the estate correctly alongside the filed will.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 13h6 M9 17h6" />
        </svg>
      ),
    },
    {
      num: "02",
      title: "Estate includes a home or other real estate",
      description: (
        <>
          <Link
            href="/estate-planning-attorney-tampa"
            className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
          >
            Real estate
          </Link>{" "}
          often requires careful review during probate. You cannot sell, transfer or refinance a Tampa home without a judge signing formal court orders. Florida homestead law gives certain spouses and minor children special protection. For example, Florida law limits the devise of homestead property when the owner leaves a spouse or minor child, subject to statutory rules and exceptions. We petition the court to clear the land title or determine homestead status.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 11l9-8 9 8 M5 10v10h14V10 M10 20v-6h4v6" />
        </svg>
      ),
    },
    {
      num: "03",
      title: "Estate has debts or creditor claims",
      description:
        "Unresolved debts block asset distribution. Under Florida probate law, an estate's personal representative must publish a formal Notice to Creditors. Once published, unknown creditors have 3 months from the date of first publication to file a claim against the estate. For known creditors, the deadline is even shorter: they must file within 30 days of being directly served with the notice. If the estate fails to publish or serve a formal notice, an absolute 2 year statute of repose applies. We review all incoming claims and object to invalid debts.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 6v12 M15 9.5c0-1-1.3-2-3-2s-3 1-3 2 1.3 2 3 2 3 1 3 2-1.3 2-3 2-3-1-3-2" />
        </svg>
      ),
    },
    {
      num: "04",
      title: "Decedent died without a will",
      description: (
        <>
          Florida uses intestate succession rules for an estate without a valid{" "}
          <Link
            href="/wills-and-trusts-lawyer-tampa"
            className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
          >
            will and trust
          </Link>
          . The law determines the heirs entitled to the estate based on family relationship. The court also applies statutory preferences when appointing a personal representative. In an intestate estate, Florida law first gives preference to the surviving spouse. Next it prioritizes a person selected by a majority in interest of the heirs, followed by the heir nearest in degree. We identify legal heirs, calculate exact statutory shares and petition the court to appoint an eligible Personal Representative.
        </>
      ),
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v18 M6 21h12 M5 7h14 M5 7l-3 7a3 3 0 0 0 6 0z M19 7l-3 7a3 3 0 0 0 6 0z" />
        </svg>
      ),
    },
    {
      num: "05",
      title: "Several beneficiaries are involved",
      description:
        "Managing an estate with multiple beneficiaries requires clear, transparent accounting. They can create questions about property, account balances, personal belongings and distribution shares. We send official legal notices and detailed updates to all beneficiaries to keep the process moving without misunderstandings.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M22 21v-2a4 4 0 0 0-3-3.9 M16 3.1a4 4 0 0 1 0 7.8" />
        </svg>
      ),
    },
    {
      num: "06",
      title: "Family members disagree about the estate",
      description:
        "A family dispute may involve the will, asset ownership, the personal representative or the division of property. A contested probate case can require additional court filings, hearings or litigation. We represent your interests in court to resolve conflicts over estate assets and will interpretations.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10.3 3.9L1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z M12 9v4 M12 17h.01" />
        </svg>
      ),
    },
    {
      num: "07",
      title: "Beneficiaries live outside florida",
      description:
        "An estate can include beneficiaries living in another state or another country. Living out of state can make communication, document collection and estate coordination harder. We handle all local court filings, accountings and communications on your behalf.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M3 12h18 M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18" />
        </svg>
      ),
    },
    {
      num: "08",
      title: "Decedent lived outside florida",
      description:
        "If a non Florida resident dies owning real estate in Hillsborough, Pinellas or Pasco County, Florida courts must process that specific property. Florida may require an ancillary probate proceeding for those Florida assets. We file secondary court actions to transfer local real estate titles.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg>
      ),
    },
    {
      num: "09",
      title: "Estate includes a business or complex assets",
      description:
        "Business interests, investment accounts, valuable personal property and other complex assets can require appraisal and court authority. Our probate lawyer can review ownership documents, business agreements, account records and transfer requirements.",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 7h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        </svg>
      ),
    },
  ];

  return (
    <section id="need" className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="font-serif text-[#091D46] text-[1.45rem] sm:text-3xl lg:text-[36px] font-semibold leading-tight mb-3.5 sm:mb-4">
            Do you need a probate lawyer in Tampa, FL ?
          </h2>
          <p className="text-[#586375] text-sm sm:text-lg leading-relaxed">
            It’s very common to face wills with limited assets, real estate, creditor claims, several beneficiaries, business interests or a dispute over the estate after a loved one passes away. Each situation requires legal work. Tampa probate attorneys can review the estate, identify the correct probate administration and protect estate assets.
          </p>
        </div>

        {/* 9 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card) => (
            <div
              key={card.num}
              className="relative bg-white border border-gray-200 rounded-[20px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
                <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-[14px] bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-4 sm:mb-5">
                  {card.icon}
                </div>
                <span className="absolute right-5 top-5 sm:right-6 sm:top-6 font-serif text-2xl sm:text-3xl font-semibold text-[#ECAB3C]/40 select-none">
                  {card.num}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="text-[#586375] text-sm sm:text-[15px] leading-relaxed">
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
