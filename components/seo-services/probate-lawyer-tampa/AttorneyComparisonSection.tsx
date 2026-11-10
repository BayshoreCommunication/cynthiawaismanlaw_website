import React from "react";
import CallToSection from "@/components/home/callToSection/CallToSection";

interface AttorneyComparisonSectionProps {
  ctaTitle?: React.ReactNode;
  ctaSubtitle?: React.ReactNode;
}

export function AttorneyComparisonSection({
  ctaTitle = "Avoid costly probate mistakes. Speak with our attorney.",
  ctaSubtitle = "An experienced probate lawyer protects your inheritance, keeps statutory deadlines on track, and prevents costly delays. Call or schedule your consultation today.",
}: AttorneyComparisonSectionProps = {}) {
  return (
    <>
      <section
        id="lawyer"
        className="relative w-full py-12 sm:py-20 lg:py-24 bg-[#fbf9f5] border-t border-gray-200"
      >
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[820px] mb-8 sm:mb-10">
            <h2 className="font-serif text-[clamp(1.45rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
              An Experienced Attorney Makes Probate Easier, But Doing It Yourself Can
              Lead to Costly Mistakes!
            </h2>
            <p className="text-sm sm:text-[1.05rem] text-[#586375] leading-relaxed">
              Probate gives the personal representative legal duties, deadlines and
              financial responsibilities. A small mistake can create extra court work
              or delay a distribution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {/* With Experienced Lawyer */}
            <div className="bg-[#091D46] text-[#e6edf8] rounded-[22px] p-5 sm:p-8 lg:p-10 shadow-lg relative overflow-hidden border border-[#ECAB3C]/30">
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#ECAB3C] mb-5 sm:mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-[#ECAB3C]/20 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-[#ECAB3C]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                With Experienced Probate Lawyer
              </h3>
              <ul className="space-y-4">
                {[
                  "Avoids automatic court document rejections.",
                  "Protects representatives from personal liability.",
                  "Keeps statutory deadlines on track.",
                  "Ensures clean real estate titles.",
                  "Accelerates inheritance distribution to beneficiaries.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#e6edf8]">
                    <svg
                      className="w-5 h-5 text-[#ECAB3C] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* When Attempting Self Try Probate */}
            <div className="bg-white border border-gray-200 text-[#2b3545] rounded-[22px] p-5 sm:p-8 lg:p-10 shadow-xs relative overflow-hidden">
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#091D46] mb-5 sm:mb-6 flex items-center gap-3">
                <span className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-[#c0483f]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </span>
                When Attempting Self Try Probate
              </h3>
              <ul className="space-y-4">
                {[
                  "Triggers frequent, costly court delays.",
                  "Risks out of pocket financial liability.",
                  "Threatens to freeze estate accounts.",
                  "Creates blocked, clouded property titles.",
                  "Causes overwhelming administrative legal stress.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-[#586375]">
                    <svg
                      className="w-5 h-5 text-[#c0483f] shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main website style Call To Action */}
      <CallToSection
        title={ctaTitle}
        subtitle={ctaSubtitle}
        phone="(813) 279-6180"
        phoneHref="tel:+18132796180"
      />
    </>
  );
}
