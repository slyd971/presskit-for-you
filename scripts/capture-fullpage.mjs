#!/usr/bin/env node
// Génère les captures pleine page des press kits d'exemples, utilisées par <ScrollingPreview> :
//   public/gallery-previews/fullpage/<slug>.webp         desktop, 1280 px de large, <= 400 Ko
//   public/gallery-previews/fullpage-mobile/<slug>.webp  mobile,   390 px de large, <= 250 Ko
//
// Aucune dépendance ajoutée au projet : le script utilise playwright-core, installé à la demande
// et sans toucher à package.json :
//   npm install --no-save playwright-core
//
// Il pilote Chrome ou Chromium déjà installé (CHROME_PATH pour forcer un exécutable précis).
// La conversion en WebP se fait dans le navigateur (canvas), sans outil externe.
//
// Usage :
//   node scripts/capture-fullpage.mjs                     tous les exemples en ligne, desktop + mobile
//   node scripts/capture-fullpage.mjs melymelow sherin    seulement ces slugs
//   node scripts/capture-fullpage.mjs --only desktop      ou --only mobile
//   node scripts/capture-fullpage.mjs --max-height 7000   coupe les pages plus longues (défaut 9000)
//   node scripts/capture-fullpage.mjs --out <dossier>     écrit ailleurs que dans public/gallery-previews
//   node scripts/capture-fullpage.mjs --list              liste les slugs et leurs URL, sans capturer

import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const TARGETS = {
  desktop: { dir: "fullpage", width: 1280, height: 800, maxBytes: 400 * 1024, mobile: false },
  mobile: { dir: "fullpage-mobile", width: 390, height: 844, maxBytes: 250 * 1024, mobile: true },
};

// Qualités WebP essayées, de la meilleure à la plus compressée, jusqu'à passer sous le budget.
const QUALITIES = [0.82, 0.74, 0.66, 0.58, 0.5, 0.42, 0.34];

function parseArgs(argv) {
  const options = { slugs: [], only: null, maxHeight: 9000, out: path.join(ROOT, "public", "gallery-previews"), list: false };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--only") options.only = argv[++i];
    else if (arg === "--max-height") options.maxHeight = Number(argv[++i]);
    else if (arg === "--out") options.out = path.resolve(argv[++i]);
    else if (arg === "--list") options.list = true;
    else if (arg.startsWith("--")) throw new Error(`Option inconnue : ${arg}`);
    else options.slugs.push(arg);
  }

  if (options.only && !TARGETS[options.only]) {
    throw new Error(`--only attend "desktop" ou "mobile" (reçu : ${options.only})`);
  }

  return options;
}

// Lit slug -> URL depuis content/example-urls.ts et content/site.ts, sans les importer (TypeScript).
function readExamples() {
  const urlsSource = readFileSync(path.join(ROOT, "content", "example-urls.ts"), "utf8");
  const urls = Object.fromEntries([...urlsSource.matchAll(/^\s*(\w+):\s*"([^"]+)"/gm)].map((match) => [match[1], match[2]]));

  const siteSource = readFileSync(path.join(ROOT, "content", "site.ts"), "utf8");
  const examplesBlock = siteSource.slice(siteSource.indexOf("export const examples"));
  const examples = [];

  for (const match of examplesBlock.matchAll(/\{\s*slug: "([^"]+)",(.*?)\n {2}\},/gs)) {
    const [, slug, body] = match;
    const key = body.match(/externalDemoUrl:\s*EXAMPLE_URLS\.(\w+)/)?.[1];
    const direct = body.match(/externalDemoUrl:\s*"([^"]+)"/)?.[1];
    const url = direct ?? (key ? urls[key] : undefined);

    if (url) examples.push({ slug, url });
  }

  return examples;
}

async function loadPlaywright() {
  for (const name of ["playwright-core", "playwright"]) {
    try {
      return await import(name);
    } catch {
      // essaie le suivant
    }
  }

  throw new Error("playwright-core est introuvable. Installe-le sans modifier package.json :\n  npm install --no-save playwright-core");
}

function chromeCandidates() {
  const home = process.env.USERPROFILE ?? process.env.HOME ?? "";

  return [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    path.join(home, "AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe"),
  ].filter(Boolean);
}

async function launchBrowser(chromium) {
  const executablePath = chromeCandidates().find((candidate) => existsSync(candidate));

  return chromium.launch(executablePath ? { executablePath } : {});
}

// Fait défiler la page pour déclencher les images paresseuses et les apparitions au scroll.
async function warmUp(page) {
  await page.evaluate(async () => {
    const step = Math.max(300, Math.floor(window.innerHeight * 0.7));

    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 120));
    }

    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(600);
}

// Fige les animations et masque les bandeaux de consentement les plus courants.
async function stabilize(page) {
  await page.addStyleTag({
    content: `
      *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; caret-color: transparent !important; }
      [id*="cookie" i], [class*="cookie" i], [id*="consent" i], [class*="consent" i], [id*="cmp" i], .cc-window { display: none !important; }
    `,
  });
  await page.waitForTimeout(300);
}

// Convertit un PNG en WebP dans le navigateur, en baissant la qualité jusqu'à tenir dans le budget.
async function toWebp(converter, png, maxBytes) {
  const base64 = png.toString("base64");

  return converter.evaluate(
    async ({ base64Png, budget, qualities }) => {
      const blob = await (await fetch(`data:image/png;base64,${base64Png}`)).blob();
      const bitmap = await createImageBitmap(blob);
      const canvas = document.createElement("canvas");

      canvas.width = bitmap.width;
      canvas.height = bitmap.height;
      canvas.getContext("2d").drawImage(bitmap, 0, 0);

      let best = null;

      for (const quality of qualities) {
        const webp = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", quality));
        const bytes = new Uint8Array(await webp.arrayBuffer());

        best = { quality, size: bytes.length, base64: btoa(Array.from(bytes, (byte) => String.fromCharCode(byte)).join("")) };

        if (bytes.length <= budget) break;
      }

      return { ...best, width: bitmap.width, height: bitmap.height };
    },
    { base64Png: base64, budget: maxBytes, qualities: QUALITIES },
  );
}

async function capture(browser, converter, example, kind, options) {
  const target = TARGETS[kind];
  const context = await browser.newContext({
    viewport: { width: target.width, height: target.height },
    deviceScaleFactor: 1,
    isMobile: target.mobile,
    hasTouch: target.mobile,
    locale: "fr-FR",
  });
  const page = await context.newPage();

  try {
    await page.goto(example.url, { waitUntil: "load", timeout: 45000 });
    await page.waitForLoadState("networkidle", { timeout: 15000 }).catch(() => {});
    await warmUp(page);
    await stabilize(page);

    const fullHeight = await page.evaluate(() => Math.max(document.documentElement.scrollHeight, document.body.scrollHeight));
    const height = Math.min(fullHeight, options.maxHeight);
    const png = await page.screenshot({ type: "png", fullPage: true, clip: { x: 0, y: 0, width: target.width, height } });
    const webp = await toWebp(converter, png, target.maxBytes);
    const outDir = path.join(options.out, target.dir);

    mkdirSync(outDir, { recursive: true });
    writeFileSync(path.join(outDir, `${example.slug}.webp`), Buffer.from(webp.base64, "base64"));

    return { ...webp, truncated: fullHeight > options.maxHeight, fullHeight, overBudget: webp.size > target.maxBytes };
  } finally {
    await context.close();
  }
}

async function main() {
  const options = parseArgs(process.argv.slice(2));
  const all = readExamples();
  const selected = options.slugs.length > 0 ? all.filter((example) => options.slugs.includes(example.slug)) : all;
  const unknown = options.slugs.filter((slug) => !all.some((example) => example.slug === slug));

  if (unknown.length > 0) {
    throw new Error(`Slug sans démo en ligne : ${unknown.join(", ")}`);
  }

  if (options.list) {
    for (const example of selected) console.log(`${example.slug.padEnd(20)} ${example.url}`);
    return;
  }

  const { chromium } = await loadPlaywright();
  const browser = await launchBrowser(chromium);
  const converter = await (await browser.newContext()).newPage();
  const kinds = options.only ? [options.only] : ["desktop", "mobile"];
  const failures = [];

  console.log(`Sortie : ${options.out}\n`);

  for (const example of selected) {
    for (const kind of kinds) {
      const label = `${example.slug} (${kind})`.padEnd(32);

      try {
        const result = await capture(browser, converter, example, kind, options);
        const notes = [
          result.truncated ? `coupée à ${options.maxHeight}px (page : ${result.fullHeight}px)` : null,
          result.overBudget ? `AU-DESSUS DU BUDGET (${Math.round(TARGETS[kind].maxBytes / 1024)} Ko) : réduis --max-height` : null,
        ].filter(Boolean);

        console.log(`${label} ${result.width}x${result.height}  ${String(Math.round(result.size / 1024)).padStart(4)} Ko  q=${result.quality}  ${notes.join(" ; ")}`);

        if (result.overBudget) failures.push(`${example.slug} (${kind}) : trop lourde`);
      } catch (error) {
        console.log(`${label} ÉCHEC : ${error.message.split("\n")[0]}`);
        failures.push(`${example.slug} (${kind}) : ${error.message.split("\n")[0]}`);
      }
    }
  }

  await browser.close();

  if (failures.length > 0) {
    console.log(`\n${failures.length} point(s) à traiter :\n- ${failures.join("\n- ")}`);
    process.exitCode = 1;
  } else {
    console.log("\nToutes les captures sont dans le budget.");
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
