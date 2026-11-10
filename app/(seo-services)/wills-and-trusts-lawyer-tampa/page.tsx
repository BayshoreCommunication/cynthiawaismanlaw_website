import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import AboutFirmSection from "@/components/home/aboutFirm/AboutFirmSection";
import ContactFirmSection from "@/components/home/contact/ContactFirmSection";
import {
  WillsTrustsHero,
  WillTrustComparisonSection,
  WhenFamiliesNeedSection,
  RightDocumentsSection,
  FloridaHomesteadSection,
  WillsTrustsMistakesSection,
  TrustFundingSection,
  SpecialPlanningSection,
  HowWeBuildPlanSection,
  WillsTrustsTimelineSection,
  WillsTrustsCostSection,
  WhyChooseUsWillsSection,
  TestimonialsWillsSection,
  WillsOfficesSection,
  WillsTrustsFaqSection,
  WillsConsultationCtaSection,
  WillsMobileStickyBar,
  willsFaqs,
} from "@/components/seo-services/wills-and-trusts-lawyer-tampa";

export const metadata: Metadata = pageMetadata({
  title: "Will & Trust Lawyer Tampa",
  description:
    "Tampa will and trust lawyer for homestead, Lady Bird deeds, funded living trusts, pour over wills and Hillsborough probate. Call (813) 279-6180.",
  path: "/wills-and-trusts-lawyer-tampa",
  image: "/images/seo-services/probate.png",
  imageAlt: "Will & Trust Lawyer Tampa - Cynthia I. Waisman, P.A.",
  absoluteTitle: true,
});

export default function WillsAndTrustsLawyerTampaPage() {
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: "Cynthia I. Waisman, P.A. - Will & Trust Lawyer Tampa",
    description:
      "Tampa will and trust lawyer helping Florida families with revocable living trusts, pour-over wills, Lady Bird deeds, trust funding, homestead planning, and estate settlement.",
    url: "https://www.cynthiawaismanlaw.com/wills-and-trusts-lawyer-tampa",
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
    mainEntity: willsFaqs.map((faq) => ({
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

      <WillsTrustsHero />
      <WillTrustComparisonSection />
      <WhenFamiliesNeedSection />
      <RightDocumentsSection />
      <FloridaHomesteadSection />
      <WillsTrustsMistakesSection />
      <TrustFundingSection />
      <SpecialPlanningSection />
      <HowWeBuildPlanSection />
      <WillsTrustsTimelineSection />
      <WillsTrustsCostSection />
      <WhyChooseUsWillsSection />
      <AboutFirmSection id="attorney" />
      <TestimonialsWillsSection />
      <WillsOfficesSection />
      <WillsTrustsFaqSection />
      <WillsConsultationCtaSection />
      <ContactFirmSection />
      <WillsMobileStickyBar />
    </div>
  );
}

