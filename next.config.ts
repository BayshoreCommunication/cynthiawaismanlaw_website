import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/estate-planning",
        destination: "/estate-planning-services",
        permanent: true,
      },
      {
        source: "/estate-planning/faq",
        destination: "/estate-planning-services/estate-planning-faq",
        permanent: true,
      },
      {
        source: "/estate-planning-faq",
        destination: "/estate-planning-services/estate-planning-faq",
        permanent: true,
      },
      {
        source: "/estate-planning/funding-revocable-trust",
        destination: "/estate-planning-services/funding-administration-your-revocable-trust",
        permanent: true,
      },
      {
        source: "/estate-planning/:slug",
        destination: "/estate-planning-services/:slug",
        permanent: true,
      },
      {
        source: "/guardianship",
        destination: "/guardianship-services",
        permanent: true,
      },
      {
        source: "/guardianship/:slug*",
        destination: "/guardianship-services/:slug*",
        permanent: true,
      },
      {
        source: "/probate",
        destination: "/probate-administration",
        permanent: true,
      },
      {
        source: "/probate/:slug*",
        destination: "/probate-administration/:slug*",
        permanent: true,
      },
      {
        source: "/about/our-attorney",
        destination: "/attorney/waisman-cynthia-i",
        permanent: true,
      },
      {
        source: "/attorney",
        destination: "/attorney/waisman-cynthia-i",
        permanent: true,
      },
      {
        source: "/waisman-cynthia-i",
        destination: "/attorney/waisman-cynthia-i",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/about/our-team",
        permanent: true,
      },

      // Immigration flat alias redirects for indexing and direct links
      {
        source: "/conditional-resident-petitions",
        destination: "/immigration-law-overview/conditional-resident-petitions",
        permanent: true,
      },
      {
        source: "/citizenship-benefits-requirements",
        destination: "/immigration-law-overview/citizenship-benefits-requirements",
        permanent: true,
      },
      {
        source: "/deferred-action",
        destination: "/immigration-law-overview/deferred-action",
        permanent: true,
      },
      {
        source: "/naturalization-non-english-speaking-residents",
        destination: "/immigration-law-overview/naturalization-non-english-speaking-residents",
        permanent: true,
      },
      {
        source: "/requests-for-evidence",
        destination: "/immigration-law-overview/requests-for-evidence",
        permanent: true,
      },
      {
        source: "/responding-request-for-evidence",
        destination: "/immigration-law-overview/responding-request-for-evidence",
        permanent: true,
      },
      {
        source: "/responding-to-request-for-evidence",
        destination: "/immigration-law-overview/responding-request-for-evidence",
        permanent: true,
      },
      {
        source: "/abcs-naturalization-immigration-law",
        destination: "/immigration-law-overview/abcs-naturalization-immigration-law",
        permanent: true,
      },
      {
        source: "/the-abcs-of-naturalization-immigration-law",
        destination: "/immigration-law-overview/abcs-naturalization-immigration-law",
        permanent: true,
      },
      {
        source: "/travel-reentry-permits",
        destination: "/immigration-law-overview/travel-reentry-permits",
        permanent: true,
      },
      {
        source: "/travel-re-entry-permits",
        destination: "/immigration-law-overview/travel-reentry-permits",
        permanent: true,
      },
      {
        source: "/waivers",
        destination: "/immigration-law-overview/waivers",
        permanent: true,
      },
      {
        source: "/immigration-waivers",
        destination: "/immigration-law-overview/waivers",
        permanent: true,
      },
      {
        source: "/green-cards",
        destination: "/immigration-law-overview/green-cards",
        permanent: true,
      },
      {
        source: "/green-cards-visas",
        destination: "/immigration-law-overview/green-cards",
        permanent: true,
      },
      {
        source: "/marriage-based-green-cards",
        destination: "/immigration-law-overview/marriage-based-green-cards",
        permanent: true,
      },
      {
        source: "/family-based-visas",
        destination: "/immigration-law-overview/family-based-visas",
        permanent: true,
      },
      {
        source: "/fiance-visa",
        destination: "/immigration-law-overview/fiance-visa",
        permanent: true,
      },
      {
        source: "/consular-processing",
        destination: "/immigration-law-overview/consular-processing",
        permanent: true,
      },
      {
        source: "/green-card-renewal",
        destination: "/immigration-law-overview/green-card-renewal",
        permanent: true,
      },
      {
        source: "/vawa-green-cards",
        destination: "/immigration-law-overview/vawa-green-cards",
        permanent: true,
      },
      {
        source: "/e2-treaty-visas",
        destination: "/immigration-law-overview/e2-treaty-visas",
        permanent: true,
      },
      {
        source: "/visa-waiver-program",
        destination: "/immigration-law-overview/visa-waiver-program",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
