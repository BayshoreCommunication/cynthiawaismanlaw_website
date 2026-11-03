import type { Metadata } from "next";

export const SITE_URL = "https://www.cynthiawaismanlaw.com";
export const SITE_NAME = "Cynthia I. Waisman, P.A.";
export const DEFAULT_OG_IMAGE = "/opengraph.png";

// The root layout's title template adds the brand, so strip it from page titles.
const BRAND_SUFFIX = /\s*\|\s*Cynthia I\. Waisman,? P\.A\.?\s*$/i;

export const stripBrand = (title: string) => title.replace(BRAND_SUFFIX, "");

interface PageMetadataInput {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/contact". Used for canonical and og:url. */
  path: string;
  image?: string;
  imageAlt?: string;
  /** Use the title as-is, without the brand template (homepage). */
  absoluteTitle?: boolean;
  article?: {
    publishedTime: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  };
}

/**
 * Title, description, canonical, Open Graph and Twitter tags for one page.
 * Child metadata replaces the layout's openGraph/twitter objects as a whole,
 * so every field is set here.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  absoluteTitle = false,
  article,
}: PageMetadataInput): Metadata {
  const shortTitle = absoluteTitle ? title : stripBrand(title);
  const fullTitle = absoluteTitle ? title : `${shortTitle} | ${SITE_NAME}`;
  const images = [
    image === DEFAULT_OG_IMAGE
      ? { url: image, width: 1200, height: 630, alt: imageAlt ?? fullTitle }
      : { url: image, alt: imageAlt ?? fullTitle },
  ];

  return {
    title: absoluteTitle ? { absolute: title } : shortTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      ...(article
        ? {
            type: "article",
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.authors,
            section: article.section,
            tags: article.tags,
          }
        : { type: "website" }),
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: fullTitle,
      description,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
