import type { MetadataRoute } from "next";

import lastModified from "@/content/last-modified.json";
import { siteConfig } from "@/content/site";
import { footerCategoryLinks } from "@/lib/presskit-categories";

// Date du dernier vrai changement de contenu, tenue à jour par scripts/sitemap-dates.mjs après chaque build local.
// Nouvelle page pas encore datée : pas de lastmod plutôt qu'une date inventée.
const pages: Record<string, { date: string } | undefined> = lastModified;
const legalRoutes = ["/mentions-legales", "/cgv", "/politique-de-confidentialite"];

const lastModifiedFor = (route: string) => {
  const page = pages[route || "/"];

  return page ? new Date(`${page.date}T00:00:00.000Z`) : undefined;
};

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
