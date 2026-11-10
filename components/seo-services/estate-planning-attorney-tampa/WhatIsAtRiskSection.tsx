import React from "react";
import Link from "next/link";

interface RiskItem {
  num: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
}

const risks: RiskItem[] = [
  {
    num: "01",
    title: "Florida Intestacy Controls Your Wealth",
    description: (
      <>
        In Florida, if you don&apos;t make a will, the law specifies who will get your estate in accordance with a formula. This often excludes an unmarried partner, stepchildren or favorite charities. It also creates unintended joint ownership among distant relatives. If your family faces questions about estate distribution or probate administration our{" "}
        <Link
          href="/probate-lawyer-tampa"
          className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
        >
          probate lawyer in Tampa
        </Link>{" "}
        can explain the applicable legal procedure. Such generic distribution often triggers family resentment over assets that carry deep sentimental value.
      </>
    ),
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 6v12 M15 9.5c0-1-1.3-2-3-2s-3 1-3 2 1.3 2 3 2 3 1 3 2-1.3 2-3 2-3-1-3-2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "A Stranger Chooses Your Children's Guardian",
    description: (
      <>
        If both parents pass away or become incapacitated without a legally designated guardian, a court determines who raises your minor children. The judge making this vital decision will not know your family values or your preferred child rearing philosophy. A court appointed guardian might even raise your children in a completely different geographical area away from the rest of your family. Proper estate planning allows parents to nominate someone they trust and understand their{" "}
        <Link
          href="/guardianship-services/minor-guardianship"
          className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
        >
          options for child guardianship
        </Link>{" "}
        under Florida law.
      </>
    ),
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Blended Families Face Bitter Disputes",
    description:
      "Loved ones may find themselves in probate litigation at the least opportune moment because clear laws don't exist to distinguish assets for a current spouse from those of children from a former marriage. With no structure, a stepchild often finds him or herself in a legal battle with the remaining spouse for the remaining assets, which is costly and time consuming. Custom provisions prevent this conflict by clearly defining inheritance boundaries in advance.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Incapacity Triggers Costly Court Intervention",
    description:
      "If an accident or illness leaves you unable to communicate, your family cannot simply access your bank accounts or pay your mortgage. If there is no Durable Power of Attorney, they will have to go through the public and costly court process to be appointed guardians of your affairs. The complex legal process only adds to the already stressful emergency and puts a brake on important financial and medical decisions.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Generic Online Templates Fail in Court",
    description:
      "Florida enforces strict legal requirements for signing and witnessing documents. Online do it yourself forms frequently miss these statutory hurdles. Our committed estate planning attorney tampa makes sure your documents actually survive judicial scrutiny. Improperly executed documents are simply ignored by the court as if it never existed.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
      </svg>
    ),
  },
];

export function WhatIsAtRiskSection() {
  return (
    <section
      id="risks"
      className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <h2 className="font-serif text-[#091D46] text-[1.45rem] sm:text-3xl lg:text-[36px] font-semibold leading-tight mb-3.5 sm:mb-4">
            What Is At Risk Without A Current Plan
          </h2>
          <p className="text-[#586375] text-sm sm:text-lg leading-relaxed">
            Most people delay thinking about their estate until a crisis forces
            their hand. By then, the choices that matter most are usually out of
            their control. Without an action oriented plan, you leave your loved
            ones vulnerable to default laws in Florida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {risks.map((item) => (
            <div
              key={item.num}
              className="relative bg-white border border-gray-200 rounded-[20px] p-5 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#ECAB3C] flex flex-col justify-between"
            >
              <div>
                <div className="w-[46px] h-[46px] sm:w-[52px] sm:h-[52px] rounded-[14px] bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-4 sm:mb-5">
                  {item.icon}
                </div>
                <span className="absolute right-5 top-5 sm:right-6 sm:top-6 font-serif text-2xl sm:text-3xl font-semibold text-[#ECAB3C]/40 select-none">
                  {item.num}
                </span>
                <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[#586375] text-sm sm:text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

