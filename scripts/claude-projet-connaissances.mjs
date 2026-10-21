#!/usr/bin/env node
// Génère docs/claude-projet-connaissances.md : les textes en ligne du site (formules, FAQ,
// pages métiers, exemples, témoignages), à charger dans les connaissances du projet
// Claude Desktop de David. À relancer dès que l'offre, les textes ou les clients changent.
//
// Aucune dépendance ajoutée : les fichiers TypeScript de content/ sont lus avec jiti,
// déjà présent dans node_modules (dépendance de Tailwind).
//
// Usage :
//   node scripts/claude-projet-connaissances.mjs

import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "docs/claude-projet-connaissances.md");

const require = createRequire(import.meta.url);
const jiti = require("jiti")(fileURLToPath(import.meta.url), { alias: { "@": ROOT }, interopDefault: true });

const site = jiti(path.join(ROOT, "content/site.ts"));
const { categoryFaqs } = jiti(path.join(ROOT, "content/category-faqs.ts"));
const { categorySeo } = jiti(path.join(ROOT, "content/seo-pages.ts"));

// Les textes longs des pages métiers vivent dans un composant (non exporté) : on isole l'objet pageCopy.
const component = readFileSync(path.join(ROOT, "components/marketing/category-content.tsx"), "utf8");
const pageCopySource = component.slice(component.indexOf("type ChecklistItem"), component.indexOf("export function CategoryContent"));
const tmp = mkdtempSync(path.join(tmpdir(), "presskit-"));
writeFileSync(path.join(tmp, "page-copy.ts"), `${pageCopySource}\nexport { pageCopy };\n`);
const { pageCopy } = jiti(path.join(tmp, "page-copy.ts"));
rmSync(tmp, { recursive: true, force: true });

const lines = [];
const add = (text = "") => lines.push(text);
const item = (i) => `- ${i.description ? `${i.title.replace(/\.$/, "")} : ${i.description}` : i.title}`;
const faq = (title, items) => {
  add(`## ${title}`);
  add();
  for (const i of items) {
    add(`**${i.question}**`);
    add();
    add(i.answer);
    add();
  }
};

add("# PressKit For You : textes du site");
add();
add(`Textes en ligne sur presskit.fr, extraits du code le ${new Date().toISOString().slice(0, 10)}. Sers-t'en comme référence pour rester cohérent avec le site : mêmes promesses, mêmes chiffres, même vocabulaire.`);
add();

add("## Formules");
add();
for (const tier of site.pricingTiers) {
  add(`### ${tier.name} : ${tier.price}`);
  add();
  add(`${tier.description} (${tier.tagline})`);
  add();
  tier.features.forEach((feature) => add(`- ${feature}`));
  add();
}
add("### Options");
add();
site.pricingOptions.forEach((option) => add(`- **${option.name}** (${option.price}) : ${option.description}`));
add();

faq("FAQ de l'accueil", site.faqItems);
faq("FAQ de la page Tarifs", site.pricingFaqItems);

add("## Pages métiers");
add();
for (const category of site.categories.filter((c) => c.slug !== "chef")) {
  const seo = categorySeo[category.slug];
  const copy = pageCopy[category.slug];
  add(`### ${category.name} (presskit.fr/${category.slug})`);
  add();
  add(`- **Titre** : ${category.heroTitle}`);
  add(`- **Chapeau** : ${category.heroDescription}`);
  add(`- **Public** : ${category.audience}`);
  if (seo) add(`- **Description Google** : ${seo.description}`);
  add();
  if (copy) {
    add(`**${copy.promiseTitle}**`);
    add();
    add(copy.promiseDescription);
    add();
    copy.benefits.forEach((b) => add(`- **${b.title}** : ${b.description}`));
    add();
    add(`**${copy.detailsTitle}**`);
    add();
    add(copy.detailsDescription);
    add();
    (copy.checklist ?? category.includes.map((title) => ({ title }))).forEach((i) => add(item(i)));
    add();
    if (copy.checklistNote) {
      add(copy.checklistNote);
      add();
    }
    if (copy.extraChecklist) {
      add(`**${copy.extraChecklist.title}**`);
      add();
      add(copy.extraChecklist.description);
      add();
      copy.extraChecklist.items.forEach((i) => add(item(i)));
      add();
    }
  }
  if (categoryFaqs[category.slug]) {
    add(`**FAQ ${category.shortName}**`);
    add();
    categoryFaqs[category.slug].forEach((i) => add(`- *${i.question}* ${i.answer}`));
    add();
  }
}

add(`## Exemples clients en ligne (${site.liveExamplesCount})`);
add();
site.examples
  .filter((example) => example.externalDemoUrl)
  .forEach((example) => add(`- **${example.title}** (${example.category}) : ${example.description} ${example.externalDemoUrl}`));
add();

add("## Témoignages clients");
add();
add("Citations exactes : ne jamais les reformuler ni en inventer d'autres.");
add();
for (const t of site.testimonials) {
  add(`**${t.name}**, ${t.role} (${t.date})`);
  add();
  add(`> ${t.quote}`);
  add();
}

writeFileSync(OUT, `${lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd()}\n`);
console.log(`Écrit : ${path.relative(ROOT, OUT)}`);
