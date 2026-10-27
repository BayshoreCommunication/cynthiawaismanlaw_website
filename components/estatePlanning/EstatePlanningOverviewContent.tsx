import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function EstatePlanningOverviewContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Estate Planning Services You Can Trust
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Estate planning is about much more than deciding who receives your
              property after you pass away. A comprehensive Florida estate plan protects
              you during your lifetime, designates trusted individuals to handle your
              finances and healthcare if you become incapacitated, prevents burdensome
              guardianships, and ensures your wishes are honored without unnecessary
              taxes or court delays.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman provides
              personalized, thoughtful estate planning strategies crafted for your
              unique family structure and financial goals. Whether you are creating your
              very first will or managing an intricate trust portfolio, we provide
              clarity, care, and legal precision.
            </p>

            {/* Core Pillars */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Our Core Estate Planning Solutions
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              We design cohesive legal instruments tailored to every stage of life:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <Link
                  href="/estate-planning-services/wills"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Last Will &amp; Testament
                </Link>
                : Clearly name beneficiaries, designate guardians for minor children,
                and nominate a personal representative you trust.
              </li>
              <li>
                <Link
                  href="/estate-planning-services/trusts"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Revocable Living Trusts &amp; Irrevocable Trusts
                </Link>
                : Avoid probate, protect privacy, safeguard assets for future
                generations, and maintain seamless control during incapacity.
              </li>
              <li>
                <Link
                  href="/estate-planning-services/powers-of-attorney"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Durable Powers of Attorney
                </Link>
                : Empower an agent to make financial and legal decisions on your behalf
                without court intervention if you cannot do so yourself.
              </li>
              <li>
                <Link
                  href="/estate-planning-services/living-wills"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Living Wills &amp; Healthcare Directives
                </Link>
                : Document your exact preferences regarding end-of-life medical
                treatment and appoint a trusted Healthcare Surrogate.
              </li>
              <li>
                <Link
                  href="/estate-planning-services/funding-administration-your-revocable-trust"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Trust Funding Strategies
                </Link>
                : Ensure your real estate, financial accounts, and business assets are
                correctly retitled to fully realize trust benefits.
              </li>
              <li>
                <Link
                  href="/estate-planning-services/estate-planning-faq"
                  className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                >
                  Estate Planning FAQ
                </Link>
                : Read answers to the most common questions regarding Florida wills,
                personal representatives, and probate avoidance.
              </li>
            </ul>

            {/* Why Work with Cynthia */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Personalized Guidance for Florida Families
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Estate planning is deeply personal. As a boutique firm, we take the time to
              listen to your specific concerns, understand your family dynamics, and
              build legally sound documents that withstand scrutiny.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Begin Planning for Your Family&apos;s Future
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
                  contact us online
                </Link>{" "}
                to schedule a confidential estate planning consultation in Tampa or
                Clearwater.
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
              currentSubItem="Estate Planning Overview"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

