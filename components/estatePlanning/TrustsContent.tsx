import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function TrustsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Use Trusts To Achieve Your Goals
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Trusts are among the most versatile and powerful instruments in Florida
              estate planning. Unlike a will, which only takes effect upon death and must
              pass through probate court, a properly funded trust operates during your
              lifetime, manages assets during incapacity, and transfers wealth to loved
              ones privately and immediately without court supervision.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman designs customized
              revocable and irrevocable trusts tailored to meet your asset protection,
              tax efficiency, and legacy goals.
            </p>

            {/* Revocable Living Trusts */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Revocable Living Trusts
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              A Revocable Living Trust is the foundation of many Florida estate plans:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Probate Avoidance</strong>: Assets
                titled in the trust pass directly to your beneficiaries upon death
                without probate delays or court expenses.
              </li>
              <li>
                <strong className="text-[#091D46]">Complete Privacy</strong>: A trust is
                a private legal document, unlike a will, which becomes a public court
                record available to anyone upon probate filing.
              </li>
              <li>
                <strong className="text-[#091D46]">Incapacity Protection</strong>: If you
                become ill or injured, your designated successor trustee immediately steps
                in to manage assets without costly court guardianship proceedings.
              </li>
              <li>
                <strong className="text-[#091D46]">Lifetime Control</strong>: You remain
                in complete control as primary trustee, able to amend, alter, or revoke
                the trust at any time.
              </li>
            </ul>

            {/* Specialized Trusts */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Specialized Trusts for Florida Families
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Depending on your objectives, we also prepare specialized trusts including:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong>Special Needs Trusts</strong>: Provide for a disabled family member
                without disqualifying them from crucial government benefits such as SSI
                and Medicaid.
              </li>
              <li>
                <strong>Irrevocable Asset Protection Trusts</strong>: Shield critical assets
                from future creditors, litigation, or nursing home spend-down.
              </li>
              <li>
                <strong>Spendthrift Trusts</strong>: Protect inheritances from a beneficiary&apos;s
                creditors, divorce settlements, or reckless financial habits.
              </li>
              <li>
                <strong>Testamentary &amp; Children&apos;s Trusts</strong>: Provide staggered
                financial distributions tied to age or life milestones.
              </li>
            </ul>

            {/* CTA */}
            <div className="pt-4 border-t border-gray-200/80">
              <h2 className="font-serif text-[22px] sm:text-[26px] font-normal text-[#091D46] leading-snug mb-3">
                Explore Trust Options With Cynthia I. Waisman
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
                  contact our law firm online
                </Link>{" "}
                to schedule a 10-minute consultation.
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
              currentSubItem="Trusts"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

