import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function SummaryAdministrationContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Summary Administration
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Summary administration is an expedited, simplified probate proceeding
              available under Florida law for qualifying estates. Unlike formal
              probate, summary administration does not require the formal appointment of
              a personal representative, lengthy creditor notice periods, or regular
              court accountings, allowing beneficiaries to receive their inheritance
              faster and with lower legal expenses.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman evaluates your
              decedent&apos;s assets to determine whether summary administration is
              feasible, helping Florida families transfer bank accounts, vehicles, and
              homestead property efficiently.
            </p>

            {/* Qualifications */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Who Qualifies for Florida Summary Administration?
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Under Florida Statute § 735.201, an estate qualifies for summary
              administration if either of the following criteria is met:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Estate Value $75,000 or Less</strong>
                : The total value of the entire probate estate subject to Florida
                administration (excluding the value of exempt Florida homestead real
                property) does not exceed $75,000.
              </li>
              <li>
                <strong className="text-[#091D46]">
                  Decedent Deceased for More Than 2 Years
                </strong>
                : Regardless of the estate&apos;s total dollar value, if the decedent has
                been deceased for over two years, the two-year creditor claim period has
                expired by statute, allowing summary administration.
              </li>
              <li>
                <strong className="text-[#091D46]">Debts Paid or Consented To</strong>:
                The decedent has no unpaid debts, or all known creditors have agreed to
                or been satisfied by the petition.
              </li>
            </ul>

            {/* Benefits */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Key Advantages of Summary Administration
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              When an estate qualifies, summary administration provides substantial
              advantages:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong>Faster Resolution</strong>: Often completed in weeks to a few
                months rather than a full year or more.
              </li>
              <li>
                <strong>Cost-Effective</strong>: Substantially lower attorney fees and
                court filing fees.
              </li>
              <li>
                <strong>Direct Order of Summary Administration</strong>: The court
                issues an immediate order transferring ownership of assets directly to
                the named beneficiaries.
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Find Out If Your Case Qualifies
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
                  contact our office online
                </Link>{" "}
                to discuss your Florida probate options.
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
              currentCategory="probate"
              currentSubItem="Summary Administration"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

