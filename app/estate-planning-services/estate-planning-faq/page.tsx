import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estate Planning FAQ | Cynthia I. Waisman, P.A.",
  description:
    "Get clear answers to frequently asked estate planning and probate questions in Florida. Experienced legal counsel for wills, trusts, and personal representatives.",
};

const faqItems = [
  {
    question: "Who qualifies as the personal representative?",
    answer: [
      "The personal representative can be selected in several ways. Where there is a valid will, the person is appointed in the will to act as personal representative. The court usually follows this provision, unless the person has a felony conviction or is not a family member and resides out of state.",
      "If there is not a will, the court follows a specific hierarchy in appointing the personal representative. First, the court determines if there is a surviving spouse; the second choice would be the person selected by a majority of interest of the heirs; and then perhaps it would be the heir closest in degree to the decedent’s residence before death. If more than one heir qualifies, then the court could be used to select the best candidate possible.",
    ],
  },
  {
    question: "Who can initiate probate proceedings?",
    answer: [
      "In Florida, either a creditor or beneficiary of an estate can commence a probate proceeding. However, if the decedent left a last will and testament (will), then the personal representative (aka executor) named in that will usually initiates the probate.",
      "On the other hand, if there is not a will, or if it cannot be located, then normally a close relative will initiate the probate process.",
    ],
  },
  {
    question: "What happens if the children of the deceased parent do not live in Florida?",
    answer: [
      "Often children do not live in Florida, where their deceased parent’s estate will proceed. The children will not necessarily be required to travel to Florida to handle the estate. Florida attorneys can handle probate matters throughout Florida no matter where the personal representative resides. And, there is often no requirement for the child to come to Florida, unless there is a contested matter involved in the estate.",
      "Florida probate judges often will accommodate out-of-state parties to allow them to participate in hearings by telephone or waive appearance and allow their attorneys to represent them to avoid extensive travel. Each case must be reviewed separately to determine whether out-of-state travel will be necessary.",
    ],
  },
];

export default function EstatePlanningFaqPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning Services", href: "/estate-planning-services" },
          { label: "Estate Planning FAQ" },
        ]}
        badge="ESTATE PLANNING FAQ"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content & Practice Areas Sidebar */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: FAQ Content */}
            <article className="lg:col-span-8 text-[#2b2b2b]">
              
              {/* Main Page Title */}
              <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
                Answers To Your Estate Planning Questions
              </h1>

              {/* Introductory Paragraph */}
              <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
                Estate planning and probate matters can feel overwhelming, especially
                during difficult times. Attorney Cynthia I. Waisman provides strategic,
                compassionate legal guidance to help Florida families protect their
                legacies, appoint trusted representatives, and navigate every stage of the
                estate administration process with peace of mind.
              </p>

              {/* FAQ Questions & Answers */}
              <div className="space-y-8 divide-y divide-gray-100">
                {faqItems.map((item, idx) => (
                  <div key={idx} className={idx > 0 ? "pt-8" : ""}>
                    <h2 className="font-serif text-[20px] sm:text-[24px] lg:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                      {item.question}
                    </h2>
                    <div className="space-y-3.5">
                      {item.answer.map((para, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed"
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Concluding CTA Section */}
              <div className="mt-12 pt-8 border-t border-gray-200/80">
                <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                  Do You Have Other Estate Planning Questions? Get Answers Today.
                </h2>
                <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
                  Call{" "}
                  <a
                    href="tel:+18132796180"
                    className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                  >
                    +1 (813) 279-6180
                  </a>{" "}
                  or complete our{" "}
                  <Link
                    href="/contact"
                    className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
                  >
                    online contact form
                  </Link>{" "}
                  to discuss your needs with a knowledgeable lawyer in a 10-minute
                  consultation.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/contact"
                    className="bg-[#ECAB3C] hover:bg-[#dca034] text-[#091D46] font-bold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md shadow-sm transition-all inline-flex items-center gap-2"
                  >
                    <span>Schedule A Consultation</span>
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
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <PracticeAreasSidebar
                currentCategory="estate-planning"
                currentSubItem="Estate Planning FAQ"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

