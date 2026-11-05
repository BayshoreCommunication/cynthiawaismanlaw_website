import React from "react";
import CallToSection from "@/components/home/callToSection/CallToSection";

const mistakes = [
  {
    title: "Will still enters probate",
    description:
      "A will gives the personal representative instructions for probate assets. The document itself does not transfer probate assets outside the probate process. Hillsborough County probate matters are handled through the 13th Judicial Circuit. The clerk also requires the original will for probate filing. A trust can offer a different structure for assets properly titled in the trust.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Assets outside the trust may still enter probate",
    description:
      "Signing a revocable living trust forms the legal document. Funding transfers appropriate assets into the trust. A Tampa home may require a deed. Bank and brokerage accounts may require account ownership changes. Beneficiary forms may also need coordination. The funding step gives the trust practical use.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
  },
  {
    title: "Florida execution rules can be a concern",
    description:
      "Florida law requires a will to be in writing, signed by the testator and witnessed by at least two attesting witnesses. The witnesses sign in the presence of the testator and each other. A self proving affidavit can also support the probate process. Florida Statutes §732.503 provides the process for self proof.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "No successor trustee is named",
    description:
      "Your trust should name a successor trustee for future management. A successor trustee can have an important role during incapacity and after death. Your choice can include a family member, trusted person or professional fiduciary based on your circumstances.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <line x1="19" y1="8" x2="19" y2="14" />
        <line x1="22" y1="11" x2="16" y2="11" />
      </svg>
    ),
  },
  {
    title: "Vague blended family terms invite fights",
    description:
      "\"My children\" can mean two different groups after a second wedding in Hyde Park. Stepchildren take $0 if you die without naming them. A surviving spouse can elect 30% of the elective estate under Fla. Stat. 732.201. Specific names and percentages keep the 13th Circuit out of the dining room.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function WillsTrustsMistakesSection() {
  return (
    <>
      <section
        id="mistakes"
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
      >
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[840px] mb-11">
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
              But Where Can Tampa Wills and Trusts Go Wrong?
            </h2>
            <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
              A signed will or trust is only the starting point. The plan still fails
              if Florida signing rules are missed, trust is not funded, no successor
              trustee is named or blended family terms stay vague. Hillsborough County
              probate still applies to assets not included into the trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mistakes.map((card) => (
              <div
                key={card.title}
                className="bg-[#fdf8f0] border border-[#ECAB3C]/25 rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.1)] hover:border-[#ECAB3C] flex flex-col justify-between"
              >
                <div>
                  <span className="w-[52px] h-[52px] rounded-xl bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-4.5">
                    {card.icon}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                    {card.title}
                  </h3>
                  <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CallToSection matching doc CTA */}
      <CallToSection
        title="Your will or trust should reflect your family, your assets and Florida law."
        subtitle="Let's build it and fund it. Schedule a consultation or call 727 219 9009."
        phone="727 219 9009"
        phoneHref="tel:+17272199009"
      />
    </>
  );
}

