import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { footerCategoryLinks } from "@/lib/presskit-categories";

// Last real content change per route. Update the date when a page's content changes.
const defaultLastModified = "2026-10-22";
const routeLastModified: Record<string, string> = {
  "": "2026-10-22",
  "/exemples": "2026-10-22",
  "/tarifs": "2026-10-22",
  "/mentions-legales": "2026-10-12",
  "/cgv": "2026-10-22",
  "/politique-de-confidentialite": "2026-10-22",
};
const legalRoutes = ["/mentions-legales", "/cgv", "/politique-de-confidentialite"];

const lastModifiedFor = (route: string) => new Date(`${routeLastModified[route] ?? defaultLastModified}T00:00:00.000Z`);

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/exemples", "/tarifs", "/mentions-legales", "/cgv", "/politique-de-confidentialite"];
  const categoryRoutes = footerCategoryLinks.map((item) => item.href);
  const homepageFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";
  const defaultFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly";

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: lastModifiedFor(route),
      changeFrequency: route === "" ? homepageFrequency : defaultFrequency,
      priority: route === "" ? 1 : legalRoutes.includes(route) ? 0.3 : 0.8,
    })),
    ...categoryRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: lastModifiedFor(route),
      changeFrequency: defaultFrequency,
      priority: 0.7,
    })),
  ];
}
