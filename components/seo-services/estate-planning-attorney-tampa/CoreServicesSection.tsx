import React from "react";
import CallToSection from "@/components/home/callToSection/CallToSection";

const services = [
  {
    title: "Wills",
    description:
      "Legally sound documents clearly state your intentions and reorganize the probate administration process. A well drafted will acts as the bedrock of your plan and dictates exactly how your final wishes must be carried out.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8" />
      </svg>
    ),
  },
  {
    title: "Revocable and Irrevocable Trusts",
    description:
      "Custom vehicles protect your assets, provide for special needs family members and avoid the public probate system. Trusts offer unparalleled control over how and when your beneficiaries receive their inheritance.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Durable Powers of Attorney",
    description:
      "A trusted individual receives the authority to manage your finances if you are ever unable to do so yourself. This important document prevents your family from begging a judge for permission to pay your bills during a medical crisis.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    title: "Living Wills and Healthcare Surrogates",
    description:
      "Your medical wishes are documented clearly while legally naming the person who will speak for you in a health crisis. Medical professionals receive explicit instructions regarding end of life care to remove this heavy burden from your grieving family.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Guardian Designations",
    description:
      "The people you trust most are legally authorized to care for your children. A strategic selection of these individuals guarantees your kids remain with loved ones who share your foundational values.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function CoreServicesSection() {
  return (
    <>
      <section
        id="services"
        className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
      >
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[840px] mb-11">
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-3.5">
              Core Legal Services
            </h2>
            <p className="text-[1.05rem] text-[#586375] leading-relaxed m-0">
              Every family needs a different approach. Our core services we
              provide as your chosen estate planning attorney tampa include:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <div
                key={item.title}
                className="bg-[#fdf8f0] border border-[#ECAB3C]/25 rounded-[20px] p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(9,29,70,0.1)] hover:border-[#ECAB3C] flex flex-col justify-between"
              >
                <div>
                  <span className="w-[52px] h-[52px] rounded-xl bg-[#091D46] text-[#ECAB3C] flex items-center justify-center mb-4.5">
                    {item.icon}
                  </span>
                  <h3 className="font-serif text-xl font-semibold text-[#091D46] mb-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="m-0 text-[#586375] text-[0.95rem] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page CallToSection */}
      <CallToSection
        title="Protect your family and assets with a custom estate plan."
        subtitle="Schedule a consultation with Cynthia I. Waisman, P.A. or call (813) 279-6180."
        phone="(813) 279-6180"
        phoneHref="tel:+18132796180"
      />
    </>
  );
}

