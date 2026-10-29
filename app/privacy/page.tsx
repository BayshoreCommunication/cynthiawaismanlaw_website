import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Cynthia I. Waisman, P.A.",
  description:
    "Privacy Policy for Cynthia I. Waisman, P.A. Learn how our Florida law firm collects, protects, and handles your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
        badge="PRIVACY POLICY"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content Section */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#091D46] tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-sm text-gray-500 font-sans">
              Last Updated: 2026 | Cynthia I. Waisman, P.A.
            </p>
          </div>

          <div className="space-y-8 text-[#4a5568] text-sm sm:text-base leading-relaxed font-sans">
            
            <p>
              Cynthia I. Waisman, P.A. (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;the Firm&rdquo;) is committed to protecting your privacy and treating your personal information with the highest standard of discretion and integrity. This Privacy Policy describes how we collect, use, and safeguard personal information obtained through our website located at{" "}
              <Link href="/" className="text-[#0056b3] hover:underline font-medium">
                cynthiawaismanlaw.com
              </Link>{" "}
              and through related electronic communications.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                1. Information We Collect
              </h2>
              <p className="mb-3">
                We may collect personal information that you voluntarily choose to provide to us when submitting an inquiry form, requesting a 10-minute consultation, or contacting our offices:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px]">
                <li><strong>Contact details:</strong> Name, email address, telephone number, mailing address.</li>
                <li><strong>Inquiry information:</strong> Details concerning your immigration, estate planning, guardianship, or probate administration matter.</li>
                <li><strong>Usage and log data:</strong> IP address, browser type, device information, operating system, and pages viewed during your visit to help improve site performance.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                2. How We Use Your Information
              </h2>
              <p className="mb-3">
                We use the information collected from you solely for legitimate legal business purposes:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-sm sm:text-[15px]">
                <li>To respond to your inquiries and evaluate potential representation.</li>
                <li>To schedule and confirm consultation appointments.</li>
                <li>To conduct conflict checks in accordance with Florida Bar ethics rules.</li>
                <li>To operate, maintain, and enhance the security and performance of our website.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                3. Confidentiality &amp; Information Sharing
              </h2>
              <p>
                We do not sell, rent, lease, trade, or distribute your personal contact information to third parties for commercial marketing purposes. We only share information with trusted third-party service providers (such as hosting providers, secure communication tools, or technical support) who assist us in operating our website under strict confidentiality obligations, or when required by court order, subpoena, or applicable state or federal law.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                4. Cookies &amp; Website Analytics
              </h2>
              <p>
                Our website may utilize standard &ldquo;cookies&rdquo; and tracking technologies to measure visitor interaction, remember user preferences, and collect anonymous aggregate analytics. You can adjust your browser settings to refuse cookies or notify you when a cookie is placed; however, some website features may not operate as intended without cookies enabled.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                5. Data Security
              </h2>
              <p>
                We employ reasonable and industry-standard physical, electronic, and administrative security measures to protect the personal information submitted through our website. However, no data transmission over the Internet or cellular network is guaranteed 100% secure. We advise against sending sensitive identifying details (such as Social Security numbers, banking information, or confidential case evidence) via unencrypted web forms.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                6. Your Privacy Rights &amp; Opt-Out
              </h2>
              <p>
                You may request access to, correction of, or deletion of the personal information you have submitted to us by contacting our office. If you have subscribed to receive any firm newsletters or informational updates, you may unsubscribe at any time by following the instructions in the email or by contacting us directly.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#091D46] mb-3">
                7. Contact Us Regarding Your Privacy
              </h2>
              <p>
                If you have questions, comments, or concerns about this Privacy Policy or how your personal information is handled, please contact:
              </p>
              <div className="bg-[#fbfcfd] border border-gray-200 p-5 sm:p-6 rounded-xl mt-4 space-y-1 text-sm font-medium text-[#091D46]">
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
