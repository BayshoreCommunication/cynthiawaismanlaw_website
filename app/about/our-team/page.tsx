import React from "react";
import type { Metadata } from "next";
import Breadcrumb from "@/components/shared/Breadcrumb";
import TeamMembersSection from "@/components/about/TeamMembersSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";
import TestimonialsSection from "@/components/home/testimonials/TestimonialsSection";
import ProfessionalAssociations from "@/components/home/professionalAssociations/ProfessionalAssociations";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the dedicated team at Cynthia I. Waisman, P.A. providing compassionate and personalized legal support in Immigration, Estate Planning, and Probate across Tampa Bay.",
};

export default function OurTeamPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Breadcrumb Banner matching demo */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
        badge="OUR TEAM"
        title={
          <>
            Dedicated People.
            <br />
            Stronger Outcomes.
          </>
        }
        description="Our team is committed to providing compassionate, personalized support to every client."
        bgImage="/images/breadcrumb-bg-image.png"
      />

      {/* 2. Team Members List */}
      <TeamMembersSection />
      {/* 3. Global Sections */}
      <ProfessionalAssociations />
      <AboutFirmSection />
      <TestimonialsSection />
      <ContactFirmSection />
    </main>
  );
}
