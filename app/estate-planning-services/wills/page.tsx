import React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Breadcrumb from "@/components/shared/Breadcrumb";
import WillsContent from "@/components/estatePlanning/WillsContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = pageMetadata({
  title: "Wills & Testamentary Planning",
  description:
    "Make your will count. Strategic drafting of Florida last wills and testaments, guardian designations, and personal representative appointments.",
  path: "/estate-planning-services/wills",
});

export default function WillsPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning Services", href: "/estate-planning-services" },
          { label: "Wills" },
        ]}
        badge="WILLS"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />
      <WillsContent />

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
