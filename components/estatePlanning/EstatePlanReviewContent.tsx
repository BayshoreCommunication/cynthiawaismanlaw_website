import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function EstatePlanReviewContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Review &amp; Update of Existing Estate Plans
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              An estate plan should never be a one-time event that sits forgotten in a drawer.
              As your life evolves, laws change, and financial situations shift, an outdated will,
              trust, or power of attorney can fail to carry out your true intentions or cause
              unnecessary court battles for your beneficiaries.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman provides thorough,
              meticulous reviews of existing estate plans for Florida residents and individuals who
              have recently relocated to the Sunshine State. We identify ambiguities, outdated
              beneficiary designations, and legal risks, updating your documents to keep pace with
              current Florida statutes.
            </p>

            {/* When to update */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              When Should You Review Your Estate Plan?
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              We recommend reviewing your estate plan every three to five years, or immediately
              following any of the following significant life milestones:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-3 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Relocation to Florida from Another State:</strong>{" "}
                Florida has specific, strict execution requirements for wills, trusts, durable
                powers of attorney, and healthcare directives. Documents prepared under out-of-state
                laws often fail to grant essential Florida powers, such as homestead protections
                or banking authority.
              </li>
              <li>
                <strong className="text-[#091D46]">Marriage, Divorce, or Remarriage:</strong>{" "}
                Changes in marital status can automatically alter statutory spousal elective share
                rights and beneficiary entitlements under Florida law.
              </li>
              <li>
                <strong className="text-[#091D46]">Birth or Adoption of Children or Grandchildren:</strong>{" "}
                Ensuring new dependents are provided for and appropriate guardians and trustees
                are named.
              </li>
              <li>
                <strong className="text-[#091D46]">Death or Incapacity of a Named Fiduciary:</strong>{" "}
                If your designated personal representative, trustee, guardian, or healthcare
                surrogate is no longer able or willing to serve, successor fiduciaries must be formally appointed.
              </li>
              <li>
                <strong className="text-[#091D46]">Substantial Changes in Wealth or Real Estate Acquisitions:</strong>{" "}
                Purchasing Florida real property, launching a business, or receiving an inheritance
                requires verifying that assets are properly titled into your trust.
              </li>
              <li>
                <strong className="text-[#091D46]">Changes in Florida or Federal Tax Laws:</strong>{" "}
                Periodic shifts in estate, gift, and income tax exemptions necessitate structural
                adjustments to maximize tax efficiency.
              </li>
            </ul>

            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Our Comprehensive Audit Process
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              During an estate planning audit, attorney Cynthia I. Waisman reviews every document
              in detail, assesses asset titling, reviews beneficiary designations on life insurance
              and retirement accounts, and discusses your current wishes.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Whether you need a simple codicil or trust amendment, or a complete modernized
              restatement, we ensure you and your loved ones remain fully protected under Florida law.
            </p>

            {/* Bottom Callout Box */}
            <div className="mt-12 p-6 sm:p-8 bg-[#FAF7F2] border border-amber-200/90 rounded-none shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#ECAB3C]" />
                <span className="text-xs font-bold tracking-widest text-[#091D46] uppercase font-sans">
                  ENSURE PEACE OF MIND
                </span>
              </div>

              <h3 className="font-serif text-[20px] sm:text-[24px] text-[#091D46] font-normal leading-snug mb-3">
                Schedule an Estate Plan Audit in Tampa or Clearwater
              </h3>

              <p className="text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-6 font-sans">
                Bring your existing documents to Cynthia I. Waisman, P.A. for a thorough review.
                Call our office today to ensure your estate plan reflects your current life and protects what matters most.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 font-sans">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#091D46] text-[#ECAB3C] hover:bg-[#021327] px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide uppercase transition-colors shadow-xs"
                >
                  <span>Request A Plan Review</span>
                  <span>→</span>
                </Link>

                <a
                  href="tel:+18132796180"
                  className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-bold text-[#091D46] hover:text-[#ECAB3C] transition-colors py-2"
                >
                  <span>📞 +1 (813) 279-6180</span>
                </a>
              </div>
            </div>
          </article>

          {/* Right Column: Practice Areas Sidebar */}
          <div className="lg:col-span-4 self-start">
            <PracticeAreasSidebar
              currentCategory="estate-planning"
              currentSubItem="Review & Update of Existing Plans"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
