import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { footerCategoryLinks } from "@/lib/presskit-categories";

const lastContentUpdate = new Date("2026-07-28T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/exemples", "/tarifs"];
  const categoryRoutes = footerCategoryLinks.map((item) => item.href);
  const homepageFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";
  const defaultFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: lastContentUpdate,
      changeFrequency: route === "" ? homepageFrequency : defaultFrequency,
      priority: route === "" ? 1 : 0.8,
    })),
    ...categoryRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: lastContentUpdate,
      changeFrequency: defaultFrequency,
      priority: 0.7,
    })),
  ];
}
