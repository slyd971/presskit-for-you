import type { Metadata } from "next";

import { categories, examples } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const publishedPresskitCategories = categories.filter((category) => category.slug !== "chef");

const categoryExampleLabels: Record<string, string[]> = {
  artiste: ["Artiste peintre", "Chanteuse", "Chanteur / Rap"],
  dj: ["DJ"],
  danseur: ["Danseur"],
  photographe: ["Photographe"],
  "coach-sportif": ["Coach sportif"],
  "make-up-artist": ["Make-up artist"],
  organisateur: ["Organisateur", "Organisateur de soirée"],
};

export const footerCategoryLinks = publishedPresskitCategories.map((category) => ({
  href: `/${category.slug}`,
  label: category.shortName,
}));

export function getPresskitCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getExamplesForPresskitCategory(slug: string) {
  const labels = categoryExampleLabels[slug] ?? [];

  return examples.filter((example) => labels.includes(example.category));
}

export function createPresskitCategoryMetadata(slug: string): Metadata {
  const category = getPresskitCategory(slug);

  if (!category) {
    return {};
  }

  const keywords = [
    category.name.toLowerCase(),
    `press kit ${category.shortName.toLowerCase()}`,
    "press kit digital",
    "site vitrine",
  ];

  return createPageMetadata({
    title: category.name,
    description: category.heroDescription,
    path: category.slug,
    keywords: Array.from(new Set(keywords)),
  });
}
