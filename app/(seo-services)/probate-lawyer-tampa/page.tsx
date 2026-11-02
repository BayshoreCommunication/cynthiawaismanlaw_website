import type { Metadata } from "next";
import {
  ProbateHero,
  WhatIsProbateSection,
  NeedProbateLawyerSection,
  ProbateTypesSection,
  TestimonialsProbateSection,
  ProbateAssetsSection,
  WhatWeHandleSection,
  ProbateProcessSection,
  ProbateTimelineSection,
  ProbateCostSection,
  AttorneyComparisonSection,
  BeneficiaryRightsSection,
  WhyChooseUsSection,
  AttorneyBioSection,
  OfficesSection,
  ProbateFaqSection,
  ConsultationCtaSection,
  MobileStickyBar,
  probateFaqs,
} from "@/components/seo-services/probate-lawyer-tampa";

export const metadata: Metadata = {
  title: "Probate Lawyer Tampa | Settle Estates & Clear Titles",
  description:
    "Tampa probate attorney settling Florida estates. Clear property titles, resolve debts and protect your inheritance. Call +1 (813) 279-6180 for a consultation.",
  alternates: {
    canonical: "https://www.cynthiawaismanlaw.com/probate-lawyer-tampa",
  },
  openGraph: {
    title: "Probate Lawyer Tampa | Settle Estates & Clear Titles",
    description:
      "Tampa probate attorney settling Florida estates. Clear property titles, resolve debts and protect your inheritance. Call +1 (813) 279-6180 for a consultation.",
    url: "https://www.cynthiawaismanlaw.com/probate-lawyer-tampa",
    siteName: "Cynthia I. Waisman, P.A.",
    images: [
      {
        url: "/images/seo-services/probate.png",
        width: 1200,
        height: 630,
        alt: "Probate Lawyer Tampa - Cynthia I. Waisman, P.A.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Probate Lawyer Tampa | Settle Estates & Clear Titles",
    description:
      "Tampa probate attorney settling Florida estates. Clear property titles, resolve debts and protect your inheritance. Call +1 (813) 279-6180 for a consultation.",
    images: ["/images/seo-services/probate.png"],
  },
};

export default function ProbateLawyerTampaPage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Cynthia I. Waisman, P.A. - Probate Lawyer Tampa",
    description:
      "Tampa probate attorney guiding families through formal administration, summary administration, ancillary probate, and estate settlement across Florida.",
    url: "https://www.cynthiawaismanlaw.com/probate-lawyer-tampa",
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
    mainEntity: probateFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <main className="w-full bg-[#fbf9f5] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <ProbateHero />
      <WhatIsProbateSection />
      <NeedProbateLawyerSection />
      <ProbateTypesSection />
      <TestimonialsProbateSection />
      <ProbateAssetsSection />
      <WhatWeHandleSection />
      <ProbateProcessSection />
      <ProbateTimelineSection />
      <ProbateCostSection />
      <AttorneyComparisonSection />
      <BeneficiaryRightsSection />
      <WhyChooseUsSection />
      <AttorneyBioSection />
      <OfficesSection />
      <ProbateFaqSection />
      <ConsultationCtaSection />
      <MobileStickyBar />
    </main>
  );
}
