import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AttorneyProfileSection from "@/components/about/AttorneyProfileSection";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";

export const metadata: Metadata = {
  title: "About Our Firm",
  description:
    "Learn about Cynthia I. Waisman, P.A. Dedicated legal counsel in Immigration Law and Estate Planning serving Tampa, Clearwater, and Wesley Chapel.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
        badge="ABOUT OUR FIRM"
        title="Cynthia I. Waisman, P.A."
        subtitle="Attorney at Law"
      />

      {/* 2. Attorney Profile & Firm Details */}
      <AttorneyProfileSection />
      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
