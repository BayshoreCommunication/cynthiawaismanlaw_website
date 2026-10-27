import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import EstatePlanningFAQContent from "@/components/estatePlanning/EstatePlanningFAQContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "Estate Planning FAQ | Cynthia I. Waisman, P.A.",
  description:
    "Get clear answers to frequently asked estate planning and probate questions in Florida. Experienced legal counsel for wills, trusts, and personal representatives.",
};

export default function EstatePlanningFaqPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Estate Planning Services", href: "/estate-planning-services" },
          { label: "Estate Planning FAQ" },
        ]}
        badge="ESTATE PLANNING FAQ"
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Content & Practice Areas Sidebar */}
      <EstatePlanningFAQContent />
      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <AboutFirmSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
