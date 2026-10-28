import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function WillsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Make Your Will Count
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              A detailed and accurate will is the essential element of any estate
              plan. Cynthia I. Waisman, P.A. in Tampa and Clearwater can write your
              will in a straightforward way that will make your wishes known and avoid
              unnecessary taxes. Ensure that your plan becomes official and valid by
              following these steps.
            </p>

            {/* Build A Comprehensive Plan */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Build A Comprehensive Plan
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              A lawyer skilled at{" "}
              <Link
                href="/estate-planning-services"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                estate planning
              </Link>{" "}
              may recommend other estate documents as they pertain to your unique
              situation. There may be an advantage to using other documents in your
              estate plan, such as{" "}
              <Link
                href="/estate-planning-services/trusts"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                trusts
              </Link>
              . Above all, having an experienced estate law attorney help you craft
              your will can bring peace of mind: You will have a legally binding
              document that accurately represents how you want your estate disbursed.
            </p>

            {/* Update For Validity */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Update For Validity
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              If you now consider Florida your primary residence but wrote a will in
              another state, it may need to be updated to be valid in Florida. Also,
              if there have been changes in your family since you wrote your will,
              such as a divorce or the addition of a new in-law or grandchild, the
              document will need updating to reflect the change.
            </p>

            {/* Contact Us To Find Out More */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Contact Us To Find Out More
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              If you die without a will, a probate court will decide the disbursal of
              your property and assets, costing your family time and money. Call the
              firm of Cynthia I. Waisman, P.A., at{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] font-semibold hover:text-[#003d80] underline"
              >
                +1 (813) 279-6180
              </a>{" "}
              to learn more about wills and estate planning in general, or{" "}
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                contact us online
              </Link>{" "}
              to schedule a 10-minute consultation about your concerns.
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
