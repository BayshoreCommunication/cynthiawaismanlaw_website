import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Disclaimer | Cynthia I. Waisman, P.A.",
  description:
    "Legal disclaimer and terms of website use for Cynthia I. Waisman, P.A., Florida law firm representing clients in Immigration, Estate Planning, and Probate.",
};

export default function DisclaimerPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Disclaimer" },
        ]}
        badge="LEGAL NOTICE"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content Section */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#091D46] tracking-tight mb-3">
              Legal Disclaimer &amp; Terms of Use
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last Updated: 2026 | Cynthia I. Waisman, P.A.
            </p>
          </div>

          <div className="space-y-8 text-[#4a5568] text-sm sm:text-base leading-relaxed font-sans">
            
            {/* Florida Bar Hiring Notice Box */}
            <div className="bg-[#fdf8f0] border-l-4 border-[#ECAB3C] p-5 sm:p-6 rounded-r-lg shadow-xs">
              <h2 className="font-serif text-lg sm:text-xl font-bold text-[#091D46] mb-2">
                The Florida Bar Required Notice
              </h2>
              <p className="text-sm sm:text-[15px] text-[#2d3748] italic">
                The hiring of a lawyer is an important decision that should not be based solely upon advertisements. Before you decide, ask us to send you free written information about our qualifications and experience.
              </p>
            </div>

            {/* Section 1 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                1. No Attorney-Client Relationship
              </h2>
              <p>
                The materials and information available on this website have been prepared by Cynthia I. Waisman, P.A. for informational purposes only and are not legal advice. Receipt of this information, viewing this website, or communicating with Cynthia I. Waisman, P.A. or attorney Cynthia I. Waisman via the Internet, email, or telephone contact forms does not create an attorney-client relationship. An attorney-client relationship is only formed when you and our firm execute a formal, written retainer agreement.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                2. Information Is Not Legal Advice
              </h2>
              <p>
                The information provided on this website addresses broad legal concepts relating to Florida estate planning, wills, revocable trusts, powers of attorney, probate administration, guardianship, and federal immigration law. Legal circumstances are highly specific, and Florida statutes and federal immigration rules frequently change. You should not act upon any information contained on this website without seeking professional legal counsel from an attorney licensed in your jurisdiction.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                3. No Guarantee of Case Results
              </h2>
              <p>
                Any summaries of past cases, client reviews, testimonials, or legal matters handled by attorney Cynthia I. Waisman reflect individual case outcomes based on specific facts and applicable law. Every legal matter is unique. Prior results do not guarantee, promise, or predict a similar outcome in any future legal proceeding.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                4. Confidentiality &amp; Internet Communications
              </h2>
              <p>
                Do not send confidential, privileged, or time-sensitive information through web forms, email, or online inquiries on this site. Information submitted through this website prior to formal representation may not be treated as confidential and will not be protected by attorney-client privilege.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                5. Jurisdictional Limitations
              </h2>
              <p>
                Attorney Cynthia I. Waisman is admitted to practice law in the State of Florida and practices in Florida courts across Hillsborough, Pinellas, Pasco, and throughout the State. For immigration and naturalization matters, representation is permitted before the United States Citizenship and Immigration Services (USCIS), Executive Office for Immigration Review (EOIR), and relevant federal immigration authorities nationwide. This website is not intended to solicit clients in any jurisdiction where the website fails to comply with all laws and ethical rules of that jurisdiction.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                6. Third-Party Links
              </h2>
              <p>
                This website may contain links to third-party websites or resources for your convenience. Cynthia I. Waisman, P.A. does not endorse, sponsor, control, or assume responsibility for the content, privacy policies, or accuracy of information found on third-party websites.
              </p>
            </div>

            {/* Contact Callout Box */}
            <div className="bg-[#fbfcfd] border border-gray-200 p-6 sm:p-7 rounded-xl space-y-3 mt-8">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#091D46]">
                Questions About Our Legal Disclaimer?
              </h3>
              <p className="text-sm text-gray-600">
                If you have questions regarding this disclaimer, our practice areas, or wish to schedule a consultation with attorney Cynthia I. Waisman, please contact our office:
              </p>
              <div className="pt-2 text-sm text-[#091D46] space-y-1 font-medium">
                <p><strong>Cynthia I. Waisman, P.A.</strong></p>
                <p>5406 Hoover Blvd Ste. 11, Tampa, FL 33634</p>
                <p>
                  Telephone:{" "}
                  <a href="tel:+18132796180" className="text-[#0056b3] hover:underline">
                    (813) 279-6180
                  </a>
                </p>
                <p>
                  Email:{" "}
                  <a href="mailto:cynthia@cynthiawaismanlaw.com" className="text-[#0056b3] hover:underline">
                    cynthia@cynthiawaismanlaw.com
                  </a>
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
