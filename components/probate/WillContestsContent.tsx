import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function WillContestsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Will Contests
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              The death of a loved one is already an emotional time. When doubts arise
              regarding whether a will reflects the decedent&apos;s true intentions, or
              if a caregiver, family member, or financial advisor improperly influenced
              the testator, a <strong className="text-[#091D46]">will contest</strong>{" "}
              may become necessary to uphold justice.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman brings over twenty
              years of litigation and probate experience to represent beneficiaries,
              disinherited family members, and personal representatives in Florida will
              contest and probate dispute actions.
            </p>

            {/* Grounds for a Will Contest */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Grounds for Contesting a Will in Florida
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Under Florida law, a will cannot be contested simply because an heir feels
              the distribution was unfair. A valid legal ground must be proven, such as:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Undue Influence</strong>: When someone
                in a position of trust exerted excessive pressure or persuasion over the
                decedent, subverting their free will to gain financial benefit.
              </li>
              <li>
                <strong className="text-[#091D46]">Lack of Testamentary Capacity</strong>
                : When the testator suffered from severe dementia, cognitive impairment,
                or mental incapacity and could not understand the nature and extent of
                their assets or beneficiaries.
              </li>
              <li>
                <strong className="text-[#091D46]">Improper Execution</strong>: When the
                will was not signed and witnessed in strict accordance with Florida
                statutory requirements (§ 732.502).
              </li>
              <li>
                <strong className="text-[#091D46]">Fraud or Duress</strong>: When the
                testator was deceived into signing the document or coerced through
                threats and intimidation.
              </li>
            </ul>

            {/* Strict Deadlines */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Strict Florida Deadlines (Notice of Administration)
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Time is critical in Florida will contests. Once a formal Notice of
              Administration is served upon an interested person, Florida Statute §
              733.212 provides just <strong className="text-[#091D46]">90 days</strong>{" "}
              to formally file an objection to the validity of the will in the probate
              court. Missing this statutory deadline forever forfeits your legal rights.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Protect Your Family&apos;s Rights Today
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
                If you suspect a will is invalid or you are defending a contested will as
                a personal representative, contact Cynthia I. Waisman, P.A. at{" "}
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
                  request a consultation online
                </Link>
                .
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-sm transition-all inline-flex items-center gap-2"
                >
                  <span>Consult An Attorney</span>
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
              currentSubItem="Will Contests"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

