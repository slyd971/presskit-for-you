import type { MetadataRoute } from "next";

import { categories, siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/comment-ca-marche", "/tarifs", "/contact", "/galerie"];
  const homepageFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";
  const defaultFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? homepageFrequency : defaultFrequency,
      priority: route === "" ? 1 : 0.8,
    })),
    ...categories.map((category) => ({
      url: `${siteConfig.url}/presskit/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: defaultFrequency,
      priority: 0.7,
    })),
  ];
}
