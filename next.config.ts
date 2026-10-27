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
        source: "/attorney",
        destination: "/about/our-attorney",
        permanent: true,
      },
      {
        source: "/our-team",
        destination: "/about/our-team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
