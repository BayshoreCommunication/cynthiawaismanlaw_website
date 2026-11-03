import type { NextConfig } from "next";
import { readdirSync } from "node:fs";
import blogPosts from "./data/blog/posts.json";
import blogCategories from "./data/blog/categories.json";

type Redirect = { source: string; destination: string; permanent: boolean };

/**
 * Old WordPress blog URLs → new /blog URLs, so search rankings and
 * existing links keep working after WordPress is shut down.
 */
function blogRedirects(taken: Set<string>): Redirect[] {
  const redirects: Redirect[] = [];

  // WordPress permalinks were /<slug>/ — skip any that clash with a real page.
  for (const { slug } of blogPosts) {
    if (!taken.has(`/${slug}`)) {
      redirects.push({ source: `/${slug}`, destination: `/blog/${slug}`, permanent: true });
    }
  }

  // Older permalink style: /blog/2021/05/<slug>/
  redirects.push({
    source: "/blog/:year(\\d{4})/:month(\\d{2})/:slug",
    destination: "/blog/:slug",
    permanent: true,
  });

  // Date archives and pagination: /blog/2022, /blog/2022/07, /blog/page/2,
  // /blog/2022/page/2, /blog/2022/07/page/2
  for (const source of [
    "/blog/:year(\\d{4})",
    "/blog/:year(\\d{4})/:month(\\d{2})",
    "/blog/page/:page(\\d+)",
    "/blog/:year(\\d{4})/page/:page(\\d+)",
    "/blog/:year(\\d{4})/:month(\\d{2})/page/:page(\\d+)",
  ]) {
    redirects.push({ source, destination: "/blog", permanent: true });
  }

  // Category archives, with or without the /blog prefix, a parent category
  // and /page/<n>: /category/<slug>, /blog/category/<parent>/<slug>/page/2.
  // The destination uses the ASCII slug; /blog maps it back to the name.
  for (const prefix of ["/blog/category", "/category"]) {
    for (const { slug } of blogCategories) {
      const destination = `/blog?category=${slug}`;
      for (const path of [`${prefix}/${slug}`, `${prefix}/:parent/${slug}`]) {
        redirects.push({ source: path, destination, permanent: true });
        redirects.push({ source: `${path}/page/:page(\\d+)`, destination, permanent: true });
      }
    }
    redirects.push({ source: `${prefix}/:path*`, destination: "/blog", permanent: true });
  }

  return redirects;
}

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    const siteRedirects: Redirect[] = [
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
        source: "/powers-of-attorney",
        destination: "/estate-planning-services/powers-of-attorney",
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
      // Old WordPress office pages
      {
        source: "/tampa-probate-law-office",
        destination: "/probate-lawyer-tampa",
        permanent: true,
      },
      {
        source: "/tampa-law-office",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-law-offices-of-cynthia-waisman-immigration-elder-law-attorney-tampa-clearwater",
        destination: "/contact",
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

    // Never redirect away from a real top-level page (e.g. /about).
    const appRoutes = readdirSync("app", { withFileTypes: true })
      .filter((d) => d.isDirectory() && !d.name.startsWith("(") && !d.name.startsWith("["))
      .map((d) => `/${d.name}`);
    const taken = new Set([...siteRedirects.map((r) => r.source), ...appRoutes]);
    return [...siteRedirects, ...blogRedirects(taken)];
  },
};

export default nextConfig;
