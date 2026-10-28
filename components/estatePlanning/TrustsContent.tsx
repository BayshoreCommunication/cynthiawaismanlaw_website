import React from "react";
import Link from "next/link";
import PracticeAreasSidebar from "@/components/shared/PracticeAreasSidebar";

export default function TrustsContent() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Article Content */}
          <article className="lg:col-span-8 text-[#2b2b2b]" data-animate="fade-up">
            {/* Main Title */}
            <h1 className="font-serif text-[28px] sm:text-[34px] lg:text-[40px] font-normal text-[#091D46] leading-[1.18] mb-6 tracking-tight">
              Use Trusts To Achieve Your Goals
            </h1>

            {/* Gold Divider Accent */}
            <div
              className="w-16 h-1 bg-[#ECAB3C] mb-8"
              data-animate="line-expand"
              style={{ "--line-width": "4rem" } as React.CSSProperties}
            />

            {/* Intro text */}
            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Cynthia I. Waisman, P.A., helps clients throughout the Tampa Bay
              Metro organize and legalize their{" "}
              <Link
                href="/estate-planning-services"
                className="text-[#0056b3] hover:text-[#003d80] underline font-medium"
              >
                plans for their estates
              </Link>{" "}
              according to their goals. Often, estate plans utilize one or more
              legally binding trusts to achieve their plans in the smoothest and
              least-expensive ways possible.
            </p>

            {/* Planning With Benefits In Mind */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Planning With Benefits In Mind
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              There are a variety of trust types, and each can bring significant
              advantages to your estate plan, depending on your circumstances. Some
              trusts get established by a living person and others get created
              because of a directive in a person’s will. To give you an idea of some
              benefits, here are examples of trusts commonly used in Florida.
            </p>

            {/* Revocable And Irrevocable Trusts */}
            <h3 className="font-serif text-[19px] sm:text-[22px] font-semibold text-[#091D46] leading-snug mt-6 mb-3">
              Revocable And Irrevocable Trusts
            </h3>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              This type of trust is set up during a person’s lifetime and can be
              changed any time before the individual’s death. In contrast, an
              irrevocable trust cannot change. When assets get transferred to the
              trust, the trust becomes the owner, so probate costs get avoided upon
              the trustee’s death.
            </p>

            {/* Land Trust */}
            <h3 className="font-serif text-[19px] sm:text-[22px] font-semibold text-[#091D46] leading-snug mt-6 mb-3">
              Land Trust
            </h3>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-6">
              Real estate placed in a trust passes directly to your designated heirs
              at the time of your death. This makes the transfer of inheritances
              easy, eliminates inheritance tax and grants privacy to the
              beneficiaries.
            </p>

            {/* Charitable Trust */}
            <h3 className="font-serif text-[19px] sm:text-[22px] font-semibold text-[#091D46] leading-snug mt-6 mb-3">
              Charitable Trust
            </h3>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              If you wish to make a favorite charity one of the beneficiaries of your
              estate, using a charitable trust is a great way to do so. Also,
              establishing this type of trust can provide financial benefits to both
              you and the designated charity during your life.
            </p>

            {/* Give Us A Call */}
            <h2 className="font-serif text-[22px] sm:text-[28px] font-normal text-[#091D46] leading-snug mb-4">
              Give Us A Call
            </h2>

            <p className="text-sm sm:text-base md:text-[16px] text-[#4a5568] leading-relaxed mb-8">
              Proactively making plans for your estate is a great move to optimize
              your financial situation and those of your heirs. Cynthia I. Waisman,
              P.A., will work hard to create a custom plan that addresses your
              unique needs. Give us a call at{" "}
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
                contact us online
              </Link>
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
