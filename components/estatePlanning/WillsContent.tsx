import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function WillsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Make Your Will Count
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              A Last Will and Testament is the cornerstone of any estate plan. When you
              execute a legally valid will, you retain full control over how your hard-earned
              assets will be distributed, who will step in as legal guardian for your
              minor children, and who will serve as your personal representative to oversee
              your estate.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              If you die without a will in Florida (known as dying &quot;intestate&quot;),
              state statutes—not your personal wishes—determine who inherits your property
              and who raises your children. Attorney Cynthia I. Waisman crafts customized,
              meticulously drafted wills that protect your family and stand up against
              legal challenges.
            </p>

            {/* Key Elements */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              What Can You Accomplish in a Florida Will?
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              With a professionally drafted will, you can:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong>Designate Beneficiaries</strong>: Specify exact bequests of real
                estate, personal heirlooms, financial accounts, and digital assets.
              </li>
              <li>
                <strong>Nominate Guardians for Minor Children</strong>: Choose the trusted
                guardians you want raising your children if tragedy strikes, preventing
                court disputes.
              </li>
              <li>
                <strong>Appoint a Personal Representative</strong>: Select an executor with
                the financial judgment and integrity to handle your estate administration.
              </li>
              <li>
                <strong>Establish Testamentary Trusts</strong>: Protect inheritances for
                young or financially inexperienced children until they reach adulthood.
              </li>
              <li>
                <strong>Minimize Family Conflict</strong>: Clear instructions prevent
                bitter misunderstandings among surviving relatives.
              </li>
            </ul>

            {/* Florida Statutory Formalities */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Florida Will Signing &amp; Witness Requirements
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Florida has strict formal execution requirements under § 732.502. The will
              must be in writing, signed by the testator in the physical presence of at
              least two attesting witnesses, who must also sign in each other&apos;s
              presence. DIY online forms frequently fail these legal tests, risking will
              invalidation during probate. Cynthia I. Waisman, P.A. ensures flawless
              execution with a self-proving affidavit.
            </p>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Create or Update Your Will Today
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
                  schedule a consultation online
                </Link>{" "}
                with attorney Cynthia I. Waisman in Tampa or Clearwater.
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
              currentSubItem="Wills"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

