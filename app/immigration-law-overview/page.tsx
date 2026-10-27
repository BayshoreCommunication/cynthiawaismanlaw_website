import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import ImmigrationOverviewContent from "@/components/immigration/ImmigrationOverviewContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Immigration Law Overview | Cynthia I. Waisman, P.A.",
  description:
    "Committed to helping you achieve your American dream. Dedicated legal counsel for citizenship, green cards, waivers, and family immigration across Tampa and Clearwater, FL.",
};

export default function ImmigrationLawOverviewPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Immigration Law Overview" },
        ]}
        badge="IMMIGRATION LAW OVERVIEW"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content & Practice Areas Sidebar */}
      <ImmigrationOverviewContent />
      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <AboutFirmSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
