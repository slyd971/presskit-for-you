import type { MetadataRoute } from "next";

import { categories, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/comment-ca-marche", "/tarifs", "/contact", "/galerie"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.url}/presskit/${category.slug}`,
      lastModified: new Date(),
    })),
  ];
}
