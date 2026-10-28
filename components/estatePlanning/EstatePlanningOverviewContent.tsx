import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function EstatePlanningOverviewContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Estate Planning Services You Can Trust
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Planning for death is not an easy task. However, it does help prevent
              difficult situations later and will provide guidance to let others know
              your intentions. At Cynthia I. Waisman, P.A., we often encounter cases
              where no estate planning took place, and when assets are later
              discovered, an investigation must be done to locate possible
              relatives. This can become a stressful and daunting process for loved
              ones. With offices in Tampa and Clearwater, our attorney can help you
              create a proper estate plan that spells out your wishes in an effort to
              prevent unnecessary expenditures and lost time later.
            </p>

            {/* Important Aspects */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Important Aspects Of Estate Planning
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              Many people don’t think about the following aspects of estate planning:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-2.5 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                Do you have any minor children, and have you arranged for someone
                to take care of them if you are incapacitated or deceased?
              </li>
              <li>
                If you are remarried, have you made provisions for your children
                and your new spouse when you pass away or become incapacitated? Or,
                if you are not married, but in a significant relationship, do you
                have a plan for your significant other to prevent your children from
                taking away his/her possessions?
              </li>
              <li>
                In the event you become incapacitated or ill, do you have a plan
                for someone to take care of you?
              </li>
              <li>
                Where are your assets located? Does anyone know whether you have a
                safe deposit box?
              </li>
              <li>
                Do you have a wish to be located near another deceased loved one
                at death?
              </li>
              <li>
                Who do you trust to take care of your affairs in the event you are
                unable to do so?
              </li>
              <li>
                Do you own a business and have certain goals for that business in
                the event that you can no longer take care of it or pass away?
              </li>
              <li>
                Do you have family members living outside of the United States who
                you want to receive part of your estate?
              </li>
            </ul>

            {/* Creating Your Custom Plan */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Creating Your Custom Plan
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              It is important to determine what estate planning tools are best
              suited for each individual depending on their circumstances. An estate
              plan should be periodically reviewed to make sure that it complies
              with updated laws. Detailed estate planning should be done in the state
              where you reside as each state has different laws. Each estate plan
              should be comprehensive and take into account the individual needs of
              each client. Our firm will help you create a custom plan that may
              include a will or{" "}
              <Link
                href="/estate-planning-services/living-wills"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                living will
              </Link>
              ,{" "}
              <Link
                href="/estate-planning-services/powers-of-attorney"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                powers of attorney
              </Link>
              ,{" "}
              <Link
                href="/estate-planning-services/trusts"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                trusts
              </Link>{" "}
              and other estate planning instruments.
            </p>

            {/* Call Today For A Consultation */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Call Today For A Consultation
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              <Link
                href="/contact"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                Contact our offices today
              </Link>{" "}
              to find out what estate planning is best for you. Call{" "}
              <a
                href="tel:+18132796180"
                className="text-[#0056b3] font-semibold hover:text-[#003d80] underline"
              >
                +1 (813) 279-6180
              </a>{" "}
              to arrange a 10-minute consultation with a knowledgeable lawyer.
            </p>
          </article>

          {/* Right Column: Practice Areas Sidebar & Consultation Card */}
          <aside className="lg:col-span-4 space-y-8" data-animate="fade-left">
            <PracticeAreasSidebar currentCategory="estate-planning" />
          </aside>
        </div>
      </div>
    </section>
  );
}
