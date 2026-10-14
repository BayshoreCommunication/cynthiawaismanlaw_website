import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function PowersOfAttorneyContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Powers of Attorney
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Life is unpredictable. If an unexpected illness, accident, or cognitive
              decline leaves you unable to handle your daily financial matters, who
              steps in to pay your bills, manage your bank accounts, or maintain your
              business? Without a legally enforceable Durable Power of Attorney (DPOA),
              your loved ones would have to petition a court for an expensive and intrusive
              legal guardianship.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman drafts customized
              Durable Powers of Attorney compliant with Florida Statute § 709, ensuring
              your chosen agent has the exact legal authority required to protect your
              financial wellbeing.
            </p>

            {/* What is a Florida Durable Power of Attorney */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              What Is a Florida Durable Power of Attorney?
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              A Power of Attorney is a legal instrument whereby you (the principal) grant
              another person (your agent or attorney-in-fact) authority to act on your
              behalf. Under Florida law:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">&quot;Durable&quot; Means Lifetime Validity</strong>
                : The document explicitly states that it remains legally effective even
                if you become mentally or physically incapacitated.
              </li>
              <li>
                <strong className="text-[#091D46]">Immediate Effectiveness</strong>:
                Florida no longer permits &quot;springing&quot; powers of attorney
                (effective after October 1, 2011). The document becomes effective
                immediately upon valid execution, underscoring the vital need to appoint a
                deeply trusted agent.
              </li>
              <li>
                <strong className="text-[#091D46]">Superpowers Require Specific Initials</strong>
                : Certain high-level powers—such as creating or amending trusts, making
                gifts, or changing beneficiary designations—require specific initials
                under Florida law.
              </li>
            </ul>

            {/* Key Powers */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Decisions Your Agent Can Handle
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              A comprehensive Florida Durable Power of Attorney empowers your agent to:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>Manage banking transactions, pay mortgages, and write checks.</li>
              <li>Buy, sell, lease, or refinance Florida real estate.</li>
              <li>File federal and state tax returns with the IRS.</li>
              <li>Collect government benefits, Social Security, and veteran benefits.</li>
              <li>Operate family business interests and fulfill contract terms.</li>
            </ul>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Secure Your Power of Attorney in Florida
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
                Call{" "}
                <a
                  href="tel:+18132796180"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  +1 (813) 279-6180
                </a>{" "}
                or{" "}
                <Link
                  href="/contact"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  contact our team online
                </Link>{" "}
                to discuss establishing or updating your power of attorney.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Request A Consultation</span>
                  <span>→</span>
                </Link>
                <a
                  href="tel:+18132796180"
                  className="py-3.5 px-6 rounded-md border border-[#091D46] text-[#091D46] hover:bg-[#091D46] hover:text-white font-bold text-xs tracking-wider uppercase transition-all inline-flex items-center gap-2"
                >
                  <span>Call (813) 279-6180</span>
                </a>
              </div>
            </div>
          </article>

          {/* Right Column: Practice Areas Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-[144px]">
            <PracticeAreasSidebar
              currentCategory="estate-planning"
              currentSubItem="Powers of Attorney"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

