import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function LivingWillsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Living Wills
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              These are documents that allow a patient to give explicit
              instructions about medical treatment administered to said patient
              whenever they are permanently incapacitated or terminally ill. This is
              known as an advanced directive. Living wills thus allow for a person to
              prolong their life, outline a full range of treatment preferences or
              reject treatment if they are permanently incapacitated or terminally
              ill.
            </p>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              These documents extend the principle of consent, as patients must agree
              to any medical action before doctors can proceed. This allows the
              patient to guide future instances of health care should they be too ill
              to make decisions. The patient can revoke these documents at any time
              they see fit.
            </p>

            {/* Paragraph 3 */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Forty-two states and the District of Columbia maintain living will
              statutes that make a properly drawn-out living will binding. In states
              without living will statutes, these{" "}
              <Link
                href="/estate-planning-services"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                estate planning documents
              </Link>{" "}
              only stand as clear expression of the patient’s wishes.
            </p>

            {/* Paragraph 4 */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              In order for a person to execute a living will, they must be legally
              competent, and the affair must be witnessed by a separate party of
              disinterest.
            </p>

            {/* Need Assistance With Your Living Will Issue? Contact Us Today. */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Need Assistance With Your Living Will Issue? Contact Us Today.
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Arrange your private consultation{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                using our online form
              </Link>{" "}
              or by calling{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] font-semibold hover:text-[#003d80] underline"
              >
                +1 (813) 279-6180
              </a>
              .
            </p>
          </article>

          {/* Right Column: Practice Areas Sidebar */}
          <aside className="lg:col-span-4 space-y-8" data-animate="fade-left">
            <PracticeAreasSidebar currentCategory="estate-planning" />
          </aside>
        </div>
      </div>
    </section>
  );
}
