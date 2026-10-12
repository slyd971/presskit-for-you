import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { categorySeo } from "@/content/seo-pages";
import { getPresskitCategory } from "@/lib/presskit-categories";

export const categoryOgSize = { width: 1200, height: 630 };

async function loadPreview(slug: string) {
  try {
    const file = await readFile(path.join(process.cwd(), "public", "og-previews", `${slug}.jpg`));

    return `data:image/jpeg;base64,${file.toString("base64")}`;
  } catch {
    return null;
  }
}

export async function createCategoryOgImage(slug: string) {
  const label = categorySeo[slug]?.label ?? getPresskitCategory(slug)?.shortName.toLowerCase() ?? slug;
  const preview = await loadPreview(slug);

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(180deg, #0d1118 0%, #171d28 48%, #111620 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 40,
            padding: "64px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", maxWidth: 560, gap: 28 }}>
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 800,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.72)",
              }}
            >
              PressKit For You
            </div>
            <div style={{ display: "flex", fontSize: 76, lineHeight: 1, fontWeight: 700, letterSpacing: "-0.04em" }}>
              {`Press kit ${label}`}
            </div>
            <div style={{ display: "flex", fontSize: 26, lineHeight: 1.4, color: "rgba(255,255,255,0.72)" }}>
              Livré en 7 jours ouvrés, dès 300 €.
            </div>
          </div>
          {preview ? (
            <div
              style={{
                display: "flex",
                border: "1px solid rgba(255,255,255,0.16)",
                background: "#080b11",
                padding: 10,
                boxShadow: "0 28px 90px rgba(0,0,0,0.42)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={preview} width={520} alt="" />
            </div>
          ) : null}
        </div>
      </div>
    ),
    categoryOgSize,
  );
}
