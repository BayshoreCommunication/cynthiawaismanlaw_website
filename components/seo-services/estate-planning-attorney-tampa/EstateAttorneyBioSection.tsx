import React from "react";
import Image from "next/image";
import Link from "next/link";

export function EstateAttorneyBioSection() {
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
              src="/images/cynthia.png"
              alt="Attorney Cynthia I. Waisman - Estate Planning Attorney Tampa, FL"
              fill
              sizes="(max-width: 768px) 340px, 380px"
              className="object-cover object-top"
            />
          </div>

          {/* Attorney Info */}
          <div>
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#ECAB3C] mb-2">
              Meet Attorney Cynthia I. Waisman
            </span>
            <h2 className="font-serif text-[clamp(1.8rem,3.2vw,2.5rem)] font-semibold text-[#091D46] leading-[1.22] mb-4">
              Cynthia I. Waisman, Esq.
            </h2>

            <div className="flex flex-wrap gap-2.5 mb-6">
              {[
                "Florida Bar Member (ID 0169986)",
                "20+ Years Experience",
                "Client Champion Award Winner",
                "Top Lawyers in Florida",
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
              <Link
                href="/attorney/waisman-cynthia-i"
                className="text-[#091D46] font-medium underline decoration-[#ECAB3C] underline-offset-4 hover:text-[#ECAB3C] transition-colors"
              >
                Cynthia I. Waisman, Esq.
              </Link>{" "}
              brings over 2 decades of focused experience in Florida estate
              planning and elder law. She dedicates her practice exclusively to
              protecting families and their futures. A formidable legal foundation
              began with her Juris Doctor from The John Marshall Law School in
              1997 and a Bachelor of Science in Journalism from the University
              of Florida in 1993.
            </p>
            <p className="text-base sm:text-[1.05rem] text-[#586375] leading-relaxed mb-6">
              Since her admission to the Florida Bar in 1999 under Bar ID
              0169986, Cynthia has successfully handled extensive probate and
              estate cases across Hillsborough, Pinellas and Pasco counties. Her
              rigorous commitment to legal excellence is proven by her
              recognition as a Martindale Hubbell Client Champion Award Winner.
              She has also been recognized among the Top Lawyers in Florida and
              Best Lawyers in America. She previously served as President of The
              Florida Bar Thirteenth Judicial Circuit Grievance Committee 13 C
              and remains an active member of The Florida Bar Real Property,
              Probate and Trust Law Section. Located conveniently in Tampa
              across from the U.S. Citizenship and Immigration Services building,
              her firm offers highly accessible and authoritative legal counsel.
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

