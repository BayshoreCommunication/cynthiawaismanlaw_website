import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import EstatePlanReviewContent from "@/components/estatePlanning/EstatePlanReviewContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Review & Update Existing Estate Plans | Cynthia I. Waisman, P.A.",
  description:
    "Is your will or trust up to date? Comprehensive estate plan audits, out-of-state document updates, and codicil amendments in Tampa & Clearwater, Florida.",
};

export default function EstatePlanReviewPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Estate Planning Services",
            href: "/estate-planning-services",
          },
          { label: "Review & Update of Existing Plans" },
        ]}
        badge="ESTATE PLAN REVIEW"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <EstatePlanReviewContent />

      {/* Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
