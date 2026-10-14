import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function AncillaryProbateContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Ancillary Probate
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              When a resident of another state passes away owning real estate, vacation
              homes, condominium units, or timeshares located in Florida, the primary
              probate court in their home state does not have direct legal jurisdiction
              over Florida real property. To transfer clear title or sell the property,
              an <strong className="text-[#091D46]">ancillary probate proceeding</strong>{" "}
              must be opened in the Florida county where the real estate is located.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Florida law requires a licensed Florida attorney to file and administer an
              ancillary probate proceeding. At Cynthia I. Waisman, P.A., we regularly
              represent out-of-state personal representatives, executors, and surviving
              family members, handling Florida proceedings seamlessly without requiring
              you to travel.
            </p>

            {/* When is Ancillary Probate Required */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              When Is Ancillary Probate Required in Florida?
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Ancillary probate is typically initiated when:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                A non-Florida resident dies owning deeded Florida real estate in their
                individual name.
              </li>
              <li>
                The decedent owned a Florida vacation home, rental property, vacant
                land, or timeshare without survivorship rights.
              </li>
              <li>
                The out-of-state estate is in the process of being administered, and
                authenticated copies of the foreign probate pleadings must be filed in
                Florida.
              </li>
              <li>
                The family or beneficiaries wish to sell the Florida property or transfer
                the title cleanly to heirs.
              </li>
            </ul>

            {/* Remote Representation for Out-of-State Clients */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Remote Representation for Out-of-State Families
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              You do not have to travel to Florida to handle ancillary probate.
              Attorney Cynthia I. Waisman coordinates with your local out-of-state
              attorney or probate court to obtain certified records, prepare Florida
              court petitions, address creditor notices, and resolve title issues
              entirely through mail, phone, and secure electronic filing.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Speak With a Florida Ancillary Probate Lawyer
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
                  reach out online
                </Link>{" "}
                to discuss your Florida ancillary probate needs.
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
              currentSubItem="Ancillary Probate"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

