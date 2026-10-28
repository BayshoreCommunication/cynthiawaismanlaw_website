import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function PowersOfAttorneyContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Powers of Attorney
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              A power of attorney is a document that gives another person the legal
              authority to act on your behalf, establishing said person as an agent
              on your behalf. The measure of power granted to your agent is decided
              by you, meaning you are able to limit or extend their authority as you
              see fit. This situation is generally for matters of solely legal
              significance, including but not limited to financial or health care
              affairs.
            </p>

            {/* Terms And Rights Assigned To The Power Of Attorney */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Terms And Rights Assigned To The Power Of Attorney
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              A power of attorney can thus help you avoid{" "}
              <Link
                href="/guardianship-services"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                guardianship proceedings
              </Link>{" "}
              in the event you or a family member becomes incapacitated. Terms and
              rights that apply to powers of attorney are as follows:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-disc pl-5 sm:pl-6 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>Acknowledgement</li>
              <li>Advance directive</li>
              <li>Conservator of the estate</li>
              <li>DNR (do not resuscitate)</li>
              <li>Executor</li>
              <li>Fiduciary</li>
              <li>Guardianship</li>
              <li>Hydration (artificial)</li>
              <li>Joint tenancy</li>
              <li>Notary public</li>
              <li>Palliative care</li>
              <li>Revocation</li>
              <li>Tenancy by entirety</li>
              <li>Ward</li>
            </ul>

            {/* Confused About The Benefits Associated With A Power Of Attorney? Contact Us Today. */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Confused About The Benefits Associated With A Power Of Attorney? Contact Us Today.
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Discover your options and get answers to your questions in a private
              consultation.
              <br />
              Call{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] font-semibold hover:text-[#003d80] underline"
              >
                +1 (813) 279-6180
              </a>{" "}
              or{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                complete our contact form
              </Link>{" "}
              to get started.
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
