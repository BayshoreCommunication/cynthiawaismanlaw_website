import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AboutFirmContent from "@/components/about/AboutFirmContent";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";
import CallToSection from "@/components/home/callToSection/CallToSection";

export const metadata: Metadata = {
  title: "About Our Firm | Cynthia I. Waisman, P.A.",
  description:
    "Learn about Cynthia I. Waisman, P.A. Dedicated legal counsel in Immigration Law and Estate Planning serving Tampa, Clearwater, and Wesley Chapel.",
  alternates: {
    canonical: "https://cynthiawaismanlaw.com/about/",
  },
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
        title="Building Your Brighter Tomorrow With Proven Immigration And Estate Planning Strategies"
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Main Firm Content & 8-Photo Gallery */}
      <AboutFirmContent />
      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <CallToSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
