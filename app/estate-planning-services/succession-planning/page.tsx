import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import SuccessionPlanningContent from "@/components/estatePlanning/SuccessionPlanningContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = pageMetadata({
  title: "Business Succession Planning",
  description:
    "Protect your Florida company and family legacy. Strategic business succession planning, buy-sell agreements, leadership transitions, and estate tax solutions in Tampa & Clearwater.",
  path: "/estate-planning-services/succession-planning",
});

export default function SuccessionPlanningPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          {
            label: "Estate Planning Services",
            href: "/estate-planning-services",
          },
          { label: "Succession Planning" },
        ]}
        badge="SUCCESSION PLANNING"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <SuccessionPlanningContent />

      {/* Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
