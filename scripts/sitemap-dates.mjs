#!/usr/bin/env node
// Tient à jour content/last-modified.json, d'où viennent les <lastmod> du sitemap.
// Lancé après chaque build local (« postbuild »). Pour chaque URL du sitemap, calcule l'empreinte de
// ce que Google lit (title, meta description, texte, alt et JSON-LD de <main>). Si elle a changé depuis
// la dernière fois, la page prend la date du jour : le fichier est à commiter avec le changement.
// Un changement de style, d'en-tête ou de pied de page ne touche pas la date.
//
// Sur Vercel, rien n'est écrit : le sitemap utilise le fichier commité.
//
// Usage :
//   npm run build
//   node scripts/sitemap-dates.mjs [dossier des .html]

import { createHash } from "node:crypto";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "content/last-modified.json");
const HTML_DIR = process.argv[2] ?? path.join(ROOT, ".next/server/app");

if (process.env.VERCEL || process.env.CI) {
  process.exit(0);
}

function fingerprint(html) {
  const head = [html.match(/<title>(.*?)<\/title>/s)?.[1], html.match(/<meta name="description" content="(.*?)"/s)?.[1]];
  const main = html.match(/<main id="main-content">(.*?)<\/main>/s)?.[1];

  if (!main || !head[0]) {
    throw new Error("<main> ou <title> introuvable");
  }

  const jsonLd = [...main.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => match[1]);
  const alts = [...main.matchAll(/ alt="(.*?)"/gs)].map((match) => match[1]);
  const text = main
    .replace(/<(script|style|template)\b.*?<\/\1>/gs, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return createHash("sha256").update(JSON.stringify([head, text, alts, jsonLd])).digest("hex").slice(0, 16);
}

const sitemap = readFileSync(path.join(HTML_DIR, "sitemap.xml.body"), "utf8");
const routes = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const previous = existsSync(OUT) ? JSON.parse(readFileSync(OUT, "utf8")) : {};
// Format AAAA-MM-JJ, à l'heure de Paris.
const today = new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Paris" });
const changed = [];

const next = Object.fromEntries(
  routes.map((route) => {
    const file = route === "/" ? "index.html" : `${route.slice(1)}.html`;
    const hash = fingerprint(readFileSync(path.join(HTML_DIR, file), "utf8"));

    if (previous[route]?.hash === hash) {
      return [route, previous[route]];
    }

    changed.push(route);
    return [route, { date: today, hash }];
  }),
);

writeFileSync(OUT, `${JSON.stringify(next, null, 2)}\n`);
console.log(changed.length ? `Sitemap : ${today} pour ${changed.join(", ")}. Commiter content/last-modified.json et relancer le build.` : "Sitemap : aucune date à changer.");
