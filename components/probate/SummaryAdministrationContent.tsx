import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function SummaryAdministrationContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Summary Administration
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Florida has a streamlined probate process when the value of the
              decedent’s probate estate is less than a certain amount, or
              $75,000, called summary administration. Besides having a lower
              value of the estate, there are other circumstances where this
              process will apply where the decedent has been dead more than two
              years.
            </p>

            {/* Streamlining Probate For Real Estate */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Streamlining Probate For Real Estate
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Relatives of a Florida nonresident who owned Florida real property
              can also use this process depending on the property’s value.
              Generally, the process is much faster than a formal administration.
              It can take a shorter time frame, as little as two weeks, though
              most cases take a month or two to complete. The timing depends on
              such factors as the amount of cases in the system when the case is
              filed. A person who only owned real property may qualify for this
              process also.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              The court cost of filing varies throughout the state of Florida
              from $345 to $400. There are no publication costs or bond fees
              involved either. Courts prefer that an attorney prepare the proper
              paperwork in these cases, since with incorrectly prepared
              documents, there could be delays in processing.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Further, if an error is made on a case involving real estate, there
              can be title defects later on when the property is sold or where
              title searches are needed. While some cases appear to qualify for
              summary administration, there still may be some reasons to pursue
              the formal administration process, for example where a will
              contest is possible or where there are multiple unknown creditors.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              It is important to discuss your situation with an experienced
              attorney before proceeding in any Florida estate administration
              process, as each case differs.
            </p>

            {/* Contact A Knowledgeable Probate Attorney Today */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Contact A Knowledgeable Probate Attorney Today
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                Send us an email
              </Link>{" "}
              or call our office at{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] font-semibold hover:text-[#003d80] underline"
              >
                +1 (813) 279-6180
              </a>{" "}
              to discuss your probate/estate administration questions. We have
              successful experience handling estates throughout Florida.
            </p>
          </article>

          {/* Right Column: Practice Areas Sidebar */}
          <aside className="lg:col-span-4 space-y-8" data-animate="fade-left">
            <PracticeAreasSidebar currentCategory="probate" />
          </aside>
        </div>
      </div>
    </section>
  );
}
