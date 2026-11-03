import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { getAllImmigrationSlugs } from "@/lib/immigration";
import { getAllProbateSlugs } from "@/lib/probateData";
import { getAllGuardianshipSlugs } from "@/lib/guardianshipData";
import { SITE_URL } from "@/lib/seo";


type Entry = MetadataRoute.Sitemap[number];

const page = (
  path: string,
  priority: number,
  changeFrequency: Entry["changeFrequency"] = "monthly",
  lastModified?: string
): Entry => ({
  url: `${SITE_URL}${path}`,
  ...(lastModified && { lastModified }),
  changeFrequency,
  priority,
});

/**
 * Pages that exist only once. Left out on purpose:
 * /attorney and /about/our-attorney (redirect), /privacy-policy, /sitemap,
 * /terms-of-use and /estate-planning-services/funding-revocable-trust
 * (copies of other pages).
 */
const STATIC_PAGES: Entry[] = [
  page("", 1.0, "weekly"),

  page("/about", 0.8),
  page("/about/our-team", 0.6),
  page("/attorney/waisman-cynthia-i", 0.8),
  page("/contact", 0.8),

  page("/immigration-law-overview", 0.9),

  page("/estate-planning-services", 0.9),
  page("/estate-planning-services/wills", 0.8),
  page("/estate-planning-services/trusts", 0.8),
  page("/estate-planning-services/living-wills", 0.8),
  page("/estate-planning-services/powers-of-attorney", 0.8),
  page("/estate-planning-services/succession-planning", 0.8),
  page("/estate-planning-services/estate-plan-review", 0.8),
  page("/estate-planning-services/funding-administration-your-revocable-trust", 0.8),
  page("/estate-planning-services/estate-planning-faq", 0.7),

  page("/probate-administration", 0.9),
  page("/probate-administration/ancillary-probate", 0.8),
  page("/probate-administration/summary-administration", 0.8),
  page("/probate-administration/will-contests", 0.8),
  page("/probate-lawyer-tampa", 0.9),

  page("/guardianship-services", 0.9),

  page("/blog", 0.8, "weekly"),

  page("/site-map", 0.3, "yearly"),
  page("/privacy", 0.2, "yearly"),
  page("/disclaimer", 0.2, "yearly"),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const immigration = getAllImmigrationSlugs().map((slug) =>
    page(`/immigration-law-overview/${slug}`, 0.8)
  );
  const probate = getAllProbateSlugs().map((slug) =>
    page(`/probate-administration/${slug}`, 0.8)
  );
  const guardianship = getAllGuardianshipSlugs().map((slug) =>
    page(`/guardianship-services/${slug}`, 0.8)
  );
  const blog = getAllPosts().map((post) =>
    // lastModified = last edit; falls back to the original publish date.
    page(`/blog/${post.slug}`, 0.6, "yearly", (post.modified || post.isoDate).slice(0, 10))
  );

  return [...STATIC_PAGES, ...immigration, ...probate, ...guardianship, ...blog];
}
