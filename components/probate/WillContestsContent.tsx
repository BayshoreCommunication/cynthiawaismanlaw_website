import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function WillContestsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Will Contests
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Will contests are lawsuits that challenge the validity of a will
              and or its items therein. The principle bases for contesting a will
              in a court of law include but are not limited to:
            </p>

            {/* Bullet list of bases */}
            <ul className="list-disc pl-5 sm:pl-6 space-y-3 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-6">
              <li>
                Competency of the will maker, or testator, at the time of the
                will being signed
              </li>
              <li>
                When a testator has been met with unwarranted and wrongful
                influence by another person to pressure said testator into giving
                the person substantial benefits from the will
              </li>
              <li>Existence of another will or trust</li>
              <li>
                Challenging illegal items or technical faults in the execution
                of the will such as not being validly witnessed
              </li>
            </ul>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              A trial for a will contest must be held before said will can be
              probated because if a will is invalid, it cannot be probated.
            </p>

            {/* Discover How We Can Help You Protect Your Interests */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Discover How We Can Help You Protect Your Interests
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Before you take legal action, connect with our team. You can reach{" "}
              <Link
                href="/probate-administration"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                our probate attorney
              </Link>{" "}
              via{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                our online form
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
            <PracticeAreasSidebar currentCategory="probate" />
          </aside>
        </div>
      </div>
    </section>
  );
}
