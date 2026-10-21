#!/usr/bin/env node
// Extrait les tokens CSS de docs/da-instagram.md (§14.1) pour que les visuels n'utilisent
// jamais de valeur retapée à la main.
//
// Usage :
//   node .claude/skills/post-social/scripts/da-tokens.mjs                 affiche les tokens
//   node .claude/skills/post-social/scripts/da-tokens.mjs <fichier.css>   les écrit dans ce fichier

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const DA_PATH = path.join(ROOT, "docs/da-instagram.md");

const da = readFileSync(DA_PATH, "utf8");
const section = da.split(/^### 14\.1 CSS\s*$/m)[1];
const block = section?.match(/```css\n([\s\S]*?)```/)?.[1];

if (!block) {
  console.error(`Bloc CSS introuvable sous « ### 14.1 CSS » dans ${DA_PATH}.`);
  process.exit(1);
}

// Les @font-face de la DA pointent vers ./fonts/ : le dossier de travail doit contenir ces fichiers.
const css = `/* Généré depuis docs/da-instagram.md §14.1 — ne pas modifier à la main. */\n${block}`;
const out = process.argv[2];

if (out) {
  writeFileSync(out, css);
  console.log(`Tokens écrits dans ${out}`);
} else {
  process.stdout.write(css);
}
