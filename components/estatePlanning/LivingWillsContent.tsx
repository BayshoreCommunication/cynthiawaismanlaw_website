import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function LivingWillsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Living Wills
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Facing critical medical decisions during a terminal illness, end-stage
              condition, or persistent vegetative state is one of the heaviest burdens a
              family can endure. A Florida Living Will—alongside a Designation of
              Healthcare Surrogate—ensures that your personal values and choices regarding
              life-prolonging procedures are clearly stated and legally binding.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman helps you create
              clear, thorough advance healthcare directives that relieve your loved ones
              of heartbreaking guesswork and ensure your dignity is preserved.
            </p>

            {/* Living Will vs Healthcare Surrogate */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Understanding Florida Advance Directives
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              A comprehensive Florida healthcare package consists of two essential
              documents:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Florida Living Will (§ 765.302)</strong>
                : A written declaration specifying your wishes regarding whether to
                provide, withhold, or withdraw life-prolonging procedures (such as
                ventilators, cardiopulmonary resuscitation, or artificial nutrition and
                hydration) if you suffer from a terminal condition, end-stage condition,
                or persistent vegetative state.
              </li>
              <li>
                <strong className="text-[#091D46]">Designation of Healthcare Surrogate (§ 765.202)</strong>
                : A legal document naming a trusted individual (and alternate) with the
                authority to make medical treatment decisions, consult with physicians,
                and review medical records if you are temporarily or permanently unable
                to communicate.
              </li>
              <li>
                <strong className="text-[#091D46]">HIPAA Medical Release Authorization</strong>
                : Gives your healthcare providers legal authorization to share private
                medical information with your designated family members and surrogates.
              </li>
            </ul>

            {/* Peace of Mind */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Preventing Family Disputes &amp; Court Intervention
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Without an advance directive in place, Florida law imposes a statutory
              hierarchy of decision-makers, which can lead to bitter disagreements among
              spouses, adult children, or siblings—sometimes leading to court battles.
              A properly prepared Living Will gives you the final say and gives your family
              lasting clarity and peace of mind.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Establish Your Healthcare Directives Today
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
                to schedule a confidential consultation.
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
              currentSubItem="Living Wills"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

