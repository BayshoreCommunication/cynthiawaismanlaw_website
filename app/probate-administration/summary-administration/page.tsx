import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SummaryAdministrationContent from "@/components/probate/SummaryAdministrationContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Summary Administration | Cynthia I. Waisman, P.A.",
  description:
    "Expedited Florida summary administration probate for qualifying estates under $75,000 or when decedent has been deceased for over 2 years.",
};

export default function SummaryAdministrationPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Probate Administration", href: "/probate-administration" },
          { label: "Summary Administration" },
        ]}
        badge="SUMMARY ADMINISTRATION"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <SummaryAdministrationContent />

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
