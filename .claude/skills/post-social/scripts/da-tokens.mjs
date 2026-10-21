#!/usr/bin/env node
// Extrait les tokens de docs/da-instagram.md pour que visuels et vidéos n'utilisent jamais
// de valeur retapée à la main.
//
// Usage :
//   node .claude/skills/post-social/scripts/da-tokens.mjs                      affiche les tokens CSS (§14.1)
//   node .claude/skills/post-social/scripts/da-tokens.mjs <fichier.css>        les écrit dans ce fichier
//   node .claude/skills/post-social/scripts/da-tokens.mjs --remotion <fichier> écrit les constantes Remotion (§14.5)

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const DA_PATH = path.join(ROOT, "docs/da-instagram.md");
const da = readFileSync(DA_PATH, "utf8");

const extract = (heading, lang) => {
  const section = da.split(new RegExp(`^### ${heading.replace(".", "\\.")}.*$`, "m"))[1];
  const block = section?.match(new RegExp("```" + lang + "\\n([\\s\\S]*?)```"))?.[1];
  if (!block) {
    console.error(`Bloc ${lang} introuvable sous « ### ${heading} » dans ${DA_PATH}.`);
    process.exit(1);
  }
  return block;
};

const remotion = process.argv[2] === "--remotion";
const out = remotion ? process.argv[3] : process.argv[2];

if (remotion && !out) {
  console.error("Usage : node .claude/skills/post-social/scripts/da-tokens.mjs --remotion <fichier.ts>");
  process.exit(1);
}

// Les @font-face de la DA pointent vers ./fonts/ : le dossier de travail doit contenir ces fichiers.
const content = remotion
  ? `// Généré depuis docs/da-instagram.md §14.5 — ne pas modifier à la main.\n${extract("14.5", "ts")}`
  : `/* Généré depuis docs/da-instagram.md §14.1 — ne pas modifier à la main. */\n${extract("14.1", "css")}`;

if (out) {
  writeFileSync(out, content);
  console.log(`Tokens écrits dans ${out}`);
} else {
  process.stdout.write(content);
}
