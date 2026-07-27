import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/galerie"];
  const homepageFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";
  const defaultFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? homepageFrequency : defaultFrequency,
      priority: route === "" ? 1 : 0.8,
    })),
  ];
}
