import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ProbateOverviewContent from "@/components/probate/ProbateOverviewContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = pageMetadata({
  title: "Probate Administration",
  description:
    "Dedicated Florida probate administration counsel. Guiding personal representatives, executors, and beneficiaries through formal and summary probate.",
  path: "/probate-administration",
});

export default function ProbateAdministrationPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Probate Administration" },
        ]}
        badge="PROBATE ADMINISTRATION"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <ProbateOverviewContent />

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
