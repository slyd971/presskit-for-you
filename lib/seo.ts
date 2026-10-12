import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

export const socialImage = {
  url: "/opengraph-image?v=20260728-2",
  width: 1200,
  height: 630,
  alt: "PressKit For You - press kits digitaux",
};

export const twitterImage = "/twitter-image?v=20260728-2";

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

export function absoluteUrl(path = "") {
  const normalizedPath = trimSlashes(path);

  return normalizedPath ? `${siteConfig.url}/${normalizedPath}` : siteConfig.url;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  // When set, used as-is as the page title (no "| PressKit For You" template suffix).
  absoluteTitle?: string;
  // Set to false to let a file-based opengraph-image / twitter-image take over.
  withSocialImages?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  absoluteTitle,
  withSocialImages = true,
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: absoluteTitle ?? title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      ...(withSocialImages ? { images: [socialImage] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle ?? title,
      description,
      ...(withSocialImages ? { images: [twitterImage] } : {}),
    },
  };
}
