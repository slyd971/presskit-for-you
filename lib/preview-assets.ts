import { readdirSync } from "node:fs";
import path from "node:path";

// Captures pleine page des press kits d'exemples, nommées <slug>.webp :
//   public/gallery-previews/fullpage/<slug>.webp         (desktop, 1280 px de large)
//   public/gallery-previews/fullpage-mobile/<slug>.webp  (mobile, 390 px de large)
// Un slug sans fichier garde l'image statique actuelle, sans animation.
export type PreviewAssets = { desktop?: string; mobile?: string };

const BASE_DIR = path.join(process.cwd(), "public", "gallery-previews");

function listWebp(dir: string) {
  try {
    return readdirSync(path.join(BASE_DIR, dir)).filter((file) => file.endsWith(".webp"));
  } catch {
    return [];
  }
}

export function getPreviewAssets() {
  const assets: Record<string, PreviewAssets> = {};

  for (const file of listWebp("fullpage")) {
    const slug = file.replace(/\.webp$/, "");
    assets[slug] = { ...assets[slug], desktop: `/gallery-previews/fullpage/${file}` };
  }

  for (const file of listWebp("fullpage-mobile")) {
    const slug = file.replace(/\.webp$/, "");
    assets[slug] = { ...assets[slug], mobile: `/gallery-previews/fullpage-mobile/${file}` };
  }

  return assets;
}
