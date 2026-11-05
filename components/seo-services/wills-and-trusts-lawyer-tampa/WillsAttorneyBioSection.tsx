import React from "react";
import Image from "next/image";

export function WillsAttorneyBioSection() {
  return (
    <section
      id="attorney"
      className="relative w-full py-16 sm:py-20 lg:py-24 bg-white border-t border-gray-200"
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-8 lg:gap-14 items-center">
          {/* Attorney Photo with Gold Offset Shadow */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/5] max-w-[340px] md:max-w-none mx-auto w-full bg-[#091D46] shadow-[12px_12px_0_#ECAB3C] border border-gray-200">
            <Image
              src="/images/seo-services/cynthia.png"
              alt="Cynthia I. Waisman - Will & Trust Lawyer Tampa"
              fill
              sizes="(max-width: 768px) 340px, 380px"
              className="object-cover object-top"
            />
          </div>

          {/* Attorney Info */}
          <div>
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#ECAB3C] mb-2">
              Meet Your Will &amp; Trust Lawyer Tampa
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-4">
              Cynthia I. Waisman
            </h2>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {[
                "Florida Bar Member",
                "20+ Years Experience",
                "Lead Counsel Verified",
              ].map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ECAB3C] text-[#091D46] bg-[#ECAB3C]/10 text-xs sm:text-sm font-semibold tracking-wide"
                >
                  {badge}
                </span>
              ))}
            </div>

            <p className="text-base sm:text-[1.05rem] text-[#586375] leading-relaxed mb-4">
              Cynthia Waisman is the founding attorney of Cynthia I. Waisman,
              P.A. She focuses on Florida wills, revocable living trusts,
              pour-over wills, Lady Bird deeds, trust funding, homestead
              planning, guardianship and probate. She has more than two decades
              of experience and has guided Florida families through formal and
              summary probate, ancillary probate and trust administration. The
              firm also handles immigration matters in a separate practice area.
            </p>
            <p className="text-base sm:text-[1.05rem] text-[#586375] leading-relaxed mb-6">
              Her office is in Tampa, with additional locations in Clearwater and
              Wesley Chapel by appointment, across Hillsborough, Pinellas and
              Pasco counties.
            </p>

            <div>
              <a
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm tracking-wider uppercase text-[#091D46] bg-[#ECAB3C] hover:bg-[#dca034] shadow-md hover:shadow-lg transition-all"
                href="#consult"
                data-open-consultation
              >
                Schedule a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

