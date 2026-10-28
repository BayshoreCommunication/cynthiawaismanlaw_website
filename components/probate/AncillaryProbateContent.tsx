import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function AncillaryProbateContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Ancillary Probate
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              If you are one of the lucky snow birds who have purchased a vacation
              home in sunny Florida but is a resident of another state, then your
              property may be subject to ancillary probate after you pass away.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Ancillary probate is when a resident of one state owns real estate
              (or some other titled property, such as a car or boat) in another
              state. For example, if you live in New York but you own a home in
              Florida in order to escape the brutal New York winters, then your
              Florida property may be subject to ancillary probate unless
              certain measures are taken.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Ancillary probate is similar to the{" "}
              <Link
                href="/probate-administration"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                typical probate process
              </Link>{" "}
              (called domiciliary probate) because certain actions must be taken
              in order to protect the deceased person’s wishes for their property
              as well as the interest of any reasonable creditors.
            </p>

            {/* Steps To Take To Protect Assets In Probate */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Steps To Take To Protect Assets In Probate
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Therefore, several documents must be filed in both states.
              Information must be gathered meticulously by the personal
              representative (or the executor) of the estate in order to
              determine the full extent of the deceased person’s assets. Depending
              on whether the deceased person had executed a will, the
              beneficiaries of the property will depend.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Intestacy laws, the law of succession for persons who die without
              creating a will, can vary from state to state. Therefore, someone
              who may be a beneficiary in one state may not be considered a
              beneficiary in another state. The personal representative should
              contact both an attorney to handle the domiciliary probate as well
              as the ancillary probate.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Although both processes are somewhat similar, they can be extremely
              difficult to interpret, and certain deadlines must be met on time.
              An attorney must be retained for each state. The personal
              representative of an estate has several duties, but with an
              attorney’s assistance, those duties may be completed with much
              more ease.
            </p>

            {/* Learn About Our Probate Services */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Learn About Our Probate Services
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Reach our team to get help with your probate matters by{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                emailing us
              </Link>{" "}
              or calling{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] font-semibold hover:text-[#003d80] underline"
              >
                +1 (813) 279-6180
              </a>{" "}
              today.
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
