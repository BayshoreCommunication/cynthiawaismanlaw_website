import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import GuardianshipServicesContent from "@/components/guardianship/GuardianshipServicesContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import CallToSection from "@/components/home/callToSection/CallToSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Guardianship Services | Cynthia I. Waisman, P.A.",
  description:
    "Experienced Florida guardianship representation for mental incapacity and minor guardianships. Protecting your loved ones across Tampa, Clearwater, and Florida.",
};

export default function GuardianshipServicesPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Guardianship Services" },
        ]}
        badge="GUARDIANSHIP SERVICES"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content & Practice Areas Sidebar */}
      <GuardianshipServicesContent />

      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
