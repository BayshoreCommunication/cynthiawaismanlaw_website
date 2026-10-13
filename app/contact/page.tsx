import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import ContactOffices from "@/components/contact/ContactOffices";
import ContactFormCard from "@/components/contact/ContactFormCard";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us | Cynthia I. Waisman, P.A. | Tampa Bay Law Firm",
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
        <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14">
          {/* Top Grid: Offices & Quick Contact on Left (7 cols), Request Form on Right (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
            {/* Left Column (7 cols): Quick Contacts & 3 Offices */}
            <div className="lg:col-span-7 xl:col-span-7">
              <ContactOffices />
            </div>

            {/* Right Column (5 cols): Sticky Request a Consultation Card */}
            <div className="lg:col-span-5 xl:col-span-5">
              <ContactFormCard />
            </div>
          </div>

          {/* Full-Width Interactive Google Map across the 1320px container */}
          <div className="w-full">
            <ContactMap />
          </div>
        </div>
      </section>
    </main>
  );
}
