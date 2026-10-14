import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function ProbateOverviewContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Probate Administration
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Probate administration is the court-supervised legal process of settling a
              deceased person&apos;s estate. In Florida, probate ensures that the
              decedent&apos;s valid debts are satisfied, taxes are resolved, and the
              remaining assets are distributed to the rightful beneficiaries or heirs
              according to Florida law or the terms of a last will and testament.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman provides steady,
              compassionate legal guidance through every phase of Florida probate.
              Whether an estate requires formal administration, summary administration,
              or ancillary probate for out-of-state property owners, our firm simplifies
              complex proceedings and safeguards your family&apos;s interests.
            </p>

            {/* Types of Florida Probate */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Types of Probate in Florida
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Depending on the value of the estate, whether the decedent passed more
              than two years ago, and whether real property is situated in Florida, the
              appropriate form of probate will vary:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <Link
                  href="/probate-administration/summary-administration"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Summary Administration
                </Link>
                : An expedited probate proceeding available when the total probate
                estate is valued at $75,000 or less, or when the decedent has been
                deceased for more than two years.
              </li>
              <li>
                <strong className="text-[#091D46]">Formal Administration</strong>: The
                standard probate proceeding required for estates exceeding $75,000 or
                when complex creditor claims or business assets must be overseen by an
                appointed Personal Representative.
              </li>
              <li>
                <Link
                  href="/probate-administration/ancillary-probate"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Ancillary Probate
                </Link>
                : A specialized proceeding required when a non-Florida resident dies
                owning real estate or timeshares located within the state of Florida.
              </li>
              <li>
                <Link
                  href="/probate-administration/will-contests"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Will Contests &amp; Fiduciary Disputes
                </Link>
                : Dedicated representation when disputes arise regarding testamentary
                capacity, undue influence, or personal representative duties.
              </li>
            </ul>

            {/* Compassionate Guidance */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Personal Representative &amp; Executor Support
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Serving as a personal representative comes with significant fiduciary
              duties, including notifying creditors, inventorying assets, preparing
              accounting, and filing required tax returns. Making mistakes during probate
              can result in personal liability or costly delays.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Florida law requires nearly all personal representatives to be
              represented by a licensed Florida attorney. Cynthia I. Waisman, P.A.
              walks alongside executors and personal representatives every step of the
              way, ensuring complete statutory compliance and timely estate closure.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Need Help Administering a Florida Estate?
              </h2>
              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
                Contact our firm today at{" "}
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
                  reach out online
                </Link>{" "}
                to schedule a consultation in Tampa or Clearwater.
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
              currentSubItem="Probate Administration Overview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

