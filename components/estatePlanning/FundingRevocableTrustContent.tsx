import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function FundingRevocableTrustContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Funding &amp; Your Revocable Trust
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Creating and signing a revocable living trust is only the first step. A
              trust only controls the assets that are formally transferred or titled into
              it. This crucial transfer process is known as{" "}
              <strong className="text-[#091D46]">trust funding</strong>. An unfunded or
              partially funded trust is like an empty safe—it cannot protect assets that
              were never placed inside.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              If an asset remains titled in your individual name at death without a
              proper beneficiary designation, that asset must still go through the Florida
              probate court, defeating one of the primary reasons for establishing a trust.
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman provides thorough
              guidance to ensure your Florida assets are accurately retitled.
            </p>

            {/* Assets that Need Funding */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              How Different Assets Are Funded Into Your Trust
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Different types of property require specific legal procedures for proper
              trust transfer:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Florida Real Estate</strong>: A new
                deed (such as a Quitclaim Deed or Lady Bird Deed) must be drafted and
                recorded in the county records where the property is located, transferring
                title from your individual name to you as Trustee of your trust. Care must
                be taken to preserve Florida homestead protections and property tax
                exemptions.
              </li>
              <li>
                <strong className="text-[#091D46]">Bank &amp; Brokerage Accounts</strong>:
                Non-retirement savings, checking, and investment accounts are retitled
                into the name of the trust with your financial institutions.
              </li>
              <li>
                <strong className="text-[#091D46]">Business &amp; LLC Interests</strong>:
                Ownership certificates and membership interest assignments transfer your
                closely-held company shares to your trust.
              </li>
              <li>
                <strong className="text-[#091D46]">Life Insurance &amp; Retirement</strong>
                : Certain accounts (such as IRAs and 401(k)s) should generally not be directly
                owned by the trust during life for tax reasons, but may name the trust as
                a primary or contingent beneficiary.
              </li>
              <li>
                <strong className="text-[#091D46]">Pour-Over Will Safety Net</strong>: A
                Pour-Over Will acts as a crucial safety net, directing any inadvertently
                omitted assets into your trust upon your death.
              </li>
            </ul>

            {/* Ongoing Trust Maintenance */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Ongoing Trust Funding &amp; Asset Reviews
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Whenever you purchase new real estate, open new financial accounts, or
              refinance a home, you must ensure the new assets are properly titled in the
              name of your trust. We assist clients with ongoing asset reviews to keep
              their trusts fully operational and protective over the years.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Ensure Your Trust Is Properly Funded
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
                to schedule a trust funding consultation in Tampa or Clearwater.
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
              currentSubItem="Funding & Your Revocable Trust"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

