import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactOffices from "@/components/contact/ContactOffices";
import ContactFormCard from "@/components/contact/ContactFormCard";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cynthia I. Waisman, P.A. Convenient office locations in Tampa, Clearwater, and Wesley Chapel. Call +1 (813) 279-6180 or request a consultation online today.",
};

export default function ContactPage() {
  return (
    <main className="w-full bg-[#fbfcfd] min-h-screen">
      {/* 1. Hero Section with Breadcrumb */}
      <ContactHero />

      {/* 2. Main Content Section */}
      <section className="relative w-full py-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
          {/* Top Section: Quick Contacts & 3 Offices (Full Width) */}
          <div className="w-full">
            <ContactOffices />
          </div>

          {/* Bottom Section: Consultation Form (Full Width) */}
          <div className="w-full">
            <ContactFormCard />
          </div>
        </div>
      </section>
    </main>
  );
}
