import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";
import {
  EstatePlanningHero,
  WhatIsAtRiskSection,
  CustomPlanComparisonSection,
  WhyTrustUsSection,
  EstatePlanningProcessSection,
  CoreServicesSection,
  EstateClientReviewsSection,
  EstateOfficesSection,
  EstatePlanningFaqSection,
  EstateConsultationCtaSection,
  EstateMobileStickyBar,
  estatePlanningFaqs,
} from "@/components/seo-services/estate-planning-attorney-tampa";

export const metadata: Metadata = pageMetadata({
  title: "Estate Planning Attorney Tampa",
  description:
    "Protect your family and assets with a Tampa estate planning attorney. Get personalized wills, trusts, and estate planning guidance. Schedule a consultation",
  path: "/estate-planning-attorney-tampa",
  image: "/images/seo-services/probate.png",
  imageAlt: "Estate Planning Attorney Tampa - Cynthia I. Waisman, P.A.",
  absoluteTitle: true,
});

export default function EstatePlanningAttorneyTampaPage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Cynthia I. Waisman, P.A. - Estate Planning Attorney Tampa, FL",
    description:
      "Proficient estate planning attorney in Tampa preparing customized wills, revocable trusts, durable powers of attorney, healthcare surrogates, and living wills.",
    url: "https://www.cynthiawaismanlaw.com/estate-planning-attorney-tampa",
    telephone: "+1-813-279-6180",
    image: "https://www.cynthiawaismanlaw.com/images/seo-services/cynthia.png",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "5406 Hoover Blvd, Ste. 11",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33634",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "27.9944",
      longitude: "-82.5350",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Tampa" },
      { "@type": "AdministrativeArea", name: "Hillsborough County" },
      { "@type": "AdministrativeArea", name: "Pinellas County" },
      { "@type": "AdministrativeArea", name: "Pasco County" },
      { "@type": "State", name: "Florida" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: estatePlanningFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="w-full max-w-full overflow-x-clip bg-[#fbf9f5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <EstatePlanningHero />
      <WhatIsAtRiskSection />
      <CustomPlanComparisonSection />
      <WhyTrustUsSection />
      <EstatePlanningProcessSection />
      <CoreServicesSection />
      <AboutFirmSection id="attorney" />
      <EstateClientReviewsSection />
      <EstateOfficesSection />
      <EstatePlanningFaqSection />
      <EstateConsultationCtaSection />
      <ContactFirmSection />
      <EstateMobileStickyBar />
    </div>
  );
}

