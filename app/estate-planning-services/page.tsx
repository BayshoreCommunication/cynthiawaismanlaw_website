import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import EstatePlanningOverviewContent from "@/components/estatePlanning/EstatePlanningOverviewContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = pageMetadata({
  title: "Estate Planning Services",
  description:
    "Comprehensive Florida estate planning services. Wills, living trusts, durable powers of attorney, living wills, and asset protection in Tampa and Clearwater.",
  path: "/estate-planning-services",
});

export default function EstatePlanningPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning Services" },
        ]}
        badge="ESTATE PLANNING SERVICES"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <EstatePlanningOverviewContent />

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
