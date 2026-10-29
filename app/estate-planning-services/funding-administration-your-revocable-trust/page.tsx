import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import FundingRevocableTrustContent from "@/components/estatePlanning/FundingRevocableTrustContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Funding Your Revocable Trust | Cynthia I. Waisman, P.A.",
  description:
    "Protect your Florida assets and avoid probate by properly funding your revocable living trust. Guidance from attorney Cynthia I. Waisman.",
};

export default function FundingRevocableTrustPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning Services", href: "/estate-planning-services" },
          { label: "Funding & Your Revocable Trust" },
        ]}
        badge="FUNDING & YOUR REVOCABLE TRUST"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <FundingRevocableTrustContent />

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
