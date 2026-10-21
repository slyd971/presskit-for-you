#!/usr/bin/env node
// Rend les slides HTML d'un dossier en PNG, avec les tokens et les polices du référentiel
// (docs/da-instagram.md), puis vérifie la conformité avec check-da.mjs.
//
// Usage :
//   node .claude/skills/post-social/scripts/render.mjs <dossier>
//
// Chaque fichier <dossier>/*.html devient <dossier>/export/<nom>.png. Le format vient de
// <meta name="canvas" content="1080x1350"> (carrousel, par défaut) ou "1080x1920" (Reel, couverture, story).
// Les pages chargent tokens.css (lien : <link rel="stylesheet" href="tokens.css">) et utilisent
// uniquement ses variables. L'export s'arrête si Anton ou Manrope n'est pas réellement chargée.

import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const SCRIPTS = path.dirname(fileURLToPath(import.meta.url));
const FONTS = path.join(SCRIPTS, "../assets/fonts");
const SIZES = new Set(["1080x1350", "1080x1920"]);

const dir = process.argv[2] && path.resolve(process.argv[2]);
if (!dir || !existsSync(dir)) {
  console.error("Usage : node .claude/skills/post-social/scripts/render.mjs <dossier>");
  process.exit(1);
}

// Tokens régénérés à chaque rendu : une copie ancienne ne peut pas diverger de la DA.
execFileSync(process.execPath, [path.join(SCRIPTS, "da-tokens.mjs"), path.join(dir, "tokens.css")], { stdio: "inherit" });
mkdirSync(path.join(dir, "fonts"), { recursive: true });
for (const font of readdirSync(FONTS).filter((f) => f.endsWith(".woff2"))) {
  copyFileSync(path.join(FONTS, font), path.join(dir, "fonts", font));
}
mkdirSync(path.join(dir, "export"), { recursive: true });

const slides = readdirSync(dir).filter((f) => f.endsWith(".html")).sort();
if (!slides.length) {
  console.error(`Aucun fichier .html dans ${dir}.`);
  process.exit(1);
}

const browser = await chromium.launch();
let failed = false;

for (const slide of slides) {
  const html = readFileSync(path.join(dir, slide), "utf8");
  const size = html.match(/<meta\s+name="canvas"\s+content="(\d+x\d+)"/)?.[1] ?? "1080x1350";
  if (!SIZES.has(size)) {
    console.error(`✗ ${slide} : format ${size} hors référentiel (1080x1350 ou 1080x1920).`);
    failed = true;
    continue;
  }
  if (!html.includes('href="tokens.css"')) {
    console.error(`✗ ${slide} : la page ne charge pas tokens.css.`);
    failed = true;
    continue;
  }

  const [width, height] = size.split("x").map(Number);
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(`file://${path.join(dir, slide)}`, { waitUntil: "networkidle" });

  const fonts = await page.evaluate(async () => {
    await Promise.all(["Anton", "Manrope"].map((family) => document.fonts.load(`64px "${family}"`)));
    await document.fonts.ready;
    const loaded = (family) => [...document.fonts].some((face) => face.family.replace(/"/g, "") === family && face.status === "loaded");
    return { Anton: loaded("Anton"), Manrope: loaded("Manrope") };
  });
  const missing = Object.entries(fonts).filter(([, ok]) => !ok).map(([family]) => family);

  if (missing.length) {
    console.error(`✗ ${slide} : police non chargée (${missing.join(", ")}). Export annulé pour ne pas livrer une police de remplacement.`);
    failed = true;
  } else {
    const out = path.join(dir, "export", slide.replace(/\.html$/, ".png"));
    await page.screenshot({ path: out });
    console.log(`✓ ${slide} → export/${path.basename(out)} (${size})`);
  }
  await page.close();
}

await browser.close();

try {
  execFileSync(process.execPath, [path.join(SCRIPTS, "check-da.mjs"), dir], { stdio: "inherit" });
} catch {
  failed = true;
}

process.exit(failed ? 1 : 0);
