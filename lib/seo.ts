import type { Metadata } from "next";

import { siteConfig } from "@/content/site";

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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
