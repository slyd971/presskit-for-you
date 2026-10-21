#!/usr/bin/env node
// Vérifie qu'un dossier de visuels Instagram n'utilise que des valeurs du référentiel
// (docs/da-instagram.md) : couleurs hex, polices et dimensions d'export.
//
// Usage :
//   node .claude/skills/post-social/scripts/check-da.mjs <dossier>
//
// Convention du dossier : fichiers .html/.css/.svg à la racine ou dans des sous-dossiers,
// PNG/JPG finaux dans <dossier>/export/ (les captures intermédiaires peuvent vivre ailleurs).
// Code de sortie 1 si une valeur hors référentiel est trouvée.

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../..");
const DA_PATH = path.join(ROOT, "docs/da-instagram.md");
const ALLOWED_FONTS = new Set(["anton", "manrope", "sans-serif"]);
const ALLOWED_SIZES = new Set(["1080x1350", "1080x1920"]);

const dir = process.argv[2];
if (!dir || !existsSync(dir)) {
  console.error("Usage : node .claude/skills/post-social/scripts/check-da.mjs <dossier>");
  process.exit(1);
}

const normalizeHex = (hex) => {
  const h = hex.slice(1).toLowerCase();
  return `#${h.length === 3 ? [...h].map((c) => c + c).join("") : h}`;
};

const HEX = /#(?:[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/g;
const allowedHex = new Set((readFileSync(DA_PATH, "utf8").match(HEX) ?? []).map(normalizeHex));

const walk = (d) =>
  readdirSync(d).flatMap((name) => {
    const p = path.join(d, name);
    if (name === "node_modules" || name.startsWith(".")) return [];
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const files = walk(dir);
const problems = [];

for (const file of files.filter((f) => /\.(html|css|svg)$/i.test(f))) {
  readFileSync(file, "utf8")
    .split("\n")
    .forEach((line, i) => {
      const where = `${path.relative(dir, file)}:${i + 1}`;
      for (const hex of line.match(HEX) ?? []) {
        if (!allowedHex.has(normalizeHex(hex))) problems.push(`${where}  couleur hors référentiel : ${hex}`);
      }
      for (const [, list] of line.matchAll(/font-family\s*:\s*([^;}]+)/gi)) {
        for (const font of list.split(",").map((f) => f.trim().replace(/['"]/g, "").toLowerCase())) {
          if (font && !font.startsWith("var(") && !ALLOWED_FONTS.has(font)) {
            problems.push(`${where}  police hors référentiel : ${font}`);
          }
        }
      }
    });
}

const exportDir = path.join(dir, "export");
const images = existsSync(exportDir) ? walk(exportDir).filter((f) => /\.(png|jpe?g)$/i.test(f)) : [];

if (images.length) {
  const { default: sharp } = await import("sharp");
  for (const image of images) {
    const { width, height } = await sharp(image).metadata();
    if (!ALLOWED_SIZES.has(`${width}x${height}`)) {
      problems.push(`${path.relative(dir, image)}  dimensions hors référentiel : ${width} × ${height} (attendu 1080 × 1350 ou 1080 × 1920)`);
    }
  }
}

if (problems.length) {
  console.log(`✗ ${problems.length} valeur(s) hors référentiel (docs/da-instagram.md) :\n`);
  console.log(problems.join("\n"));
  console.log("\nUtiliser les tokens de la DA, ou faire valider la valeur par David et l'ajouter au référentiel.");
  process.exit(1);
}

console.log(`✓ Conforme au référentiel : ${files.length} fichier(s) vérifié(s), ${images.length} export(s).`);
