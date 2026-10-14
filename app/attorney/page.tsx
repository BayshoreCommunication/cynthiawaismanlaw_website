import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AttorneyProfileSection from "@/components/about/AttorneyProfileSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";

export const metadata: Metadata = {
  title: "Cynthia I. Waisman | Tampa Attorney at Law",
  description:
    "Meet Cynthia I. Waisman, dedicated Immigration and Estate Planning Attorney representing clients across Tampa, Clearwater, and Wesley Chapel, Florida.",
};

export default function AttorneyPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Attorney" },
        ]}
        badge="ABOUT OUR FIRM"
        title="Cynthia I. Waisman, P.A."
        subtitle="Attorney at Law"
      />

      {/* 2. Attorney Profile & Firm Details */}
      <AttorneyProfileSection />
      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <AboutFirmSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}

