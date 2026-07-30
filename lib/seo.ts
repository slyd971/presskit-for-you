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
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageMetadataOptions): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "fr_FR",
      type: "website",
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [twitterImage],
    },
  };
}
