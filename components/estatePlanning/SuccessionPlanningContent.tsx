import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function SuccessionPlanningContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Business Succession Planning: Protecting Your Company &amp; Family Legacy
            </h1>

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              For business owners, an estate plan must encompass far more than personal
              property and real estate. Your business is likely one of your most valuable
              and hard-earned assets. Without a clear, legally enforceable succession plan,
              unexpected incapacity or death can trigger immediate disruption, operational
              deadlock, partnership litigation, or forced liquidation by probate court.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              At Cynthia I. Waisman, P.A., attorney Cynthia I. Waisman assists Florida
              entrepreneurs, closely held corporations, partnerships, and family-owned
              businesses in establishing forward-looking succession strategies. We ensure
              that your business continues to thrive, key leadership transitions happen
              seamlessly, and your loved ones receive full economic value.
            </p>

            {/* Core Pillars */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Essential Components of a Florida Business Succession Plan
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-4">
              A comprehensive business succession strategy coordinates commercial legal
              agreements with personal estate planning documents:
            </p>

            <ul className="list-disc pl-5 sm:pl-6 space-y-3 text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-8">
              <li>
                <strong className="text-[#091D46]">Buy-Sell Agreements:</strong> Structuring
                binding cross-purchase or redemption agreements that dictate what happens if
                an owner retires, becomes incapacitated, files for divorce, or passes away.
                Properly funded with life or disability insurance, these agreements protect
                remaining partners while providing immediate liquidity for the deceased owner’s heirs.
              </li>
              <li>
                <strong className="text-[#091D46]">Designation of Successor Leadership:</strong>{" "}
                Identifying and training the individuals who will assume day-to-day managerial
                control, whether family members, co-owners, or key senior executives.
              </li>
              <li>
                <strong className="text-[#091D46]">Integration with Revocable &amp; Irrevocable Trusts:</strong>{" "}
                Placing business equity, membership interests (LLC), or corporate shares into
                trust vehicles to avoid probate court administration and preserve private governance.
              </li>
              <li>
                <strong className="text-[#091D46]">Business Powers of Attorney:</strong>{" "}
                Designating a trusted agent with authority to sign payroll, negotiate contracts,
                and maintain banking operations if the principal owner is temporarily incapacitated.
              </li>
              <li>
                <strong className="text-[#091D46]">Estate Tax &amp; Valuation Strategies:</strong>{" "}
                Mitigating federal estate tax exposure and ensuring accurate business valuations
                that satisfy IRS scrutiny.
              </li>
            </ul>

            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Preserving Harmony in Family-Owned Enterprises
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-5">
              Passing a company down to the next generation is often complicated when some
              children are active in business management while others are not. Without strategic
              structuring, bitter family disputes can dismantle decades of hard work.
            </p>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              We help families design equitable arrangements—such as leaving operating voting
              shares to the active heirs while balancing inheritances with life insurance or
              non-voting assets for other family members.
            </p>

            {/* Bottom Callout Box */}
            <div className="mt-12 p-6 sm:p-8 bg-[#FAF7F2] border border-amber-200/90 rounded-none shadow-2xs">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#ECAB3C]" />
                <span className="text-xs font-bold tracking-widest text-[#091D46] uppercase font-sans">
                  PROTECT YOUR BUSINESS FUTURE
                </span>
              </div>

              <h3 className="font-serif text-[20px] sm:text-[24px] text-[#091D46] font-normal leading-snug mb-3">
                Speak With Cynthia I. Waisman, P.A.
              </h3>

              <p className="text-sm sm:text-[15px] text-[#4a5568] leading-relaxed mb-6 font-sans">
                Do not leave the future of your company or your family’s financial security
                to chance. Schedule a confidential consultation with attorney Cynthia I. Waisman
                in Tampa or Clearwater today.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1 font-sans">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#091D46] text-[#ECAB3C] hover:bg-[#021327] px-6 py-3 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide uppercase transition-colors shadow-xs"
                >
                  <span>Request A Consultation</span>
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
              currentSubItem="Succession Planning"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
