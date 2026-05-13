import { ImageResponse } from "next/og";

import { OgImage } from "@/lib/og-image";

export const alt = "PressKit For You - press kits digitaux premium";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <OgImage
        eyebrow="Press kits digitaux premium"
        title="Donne a ton talent une presentation a la hauteur de ton ambition."
        description="Des press kits premium pour artistes, talents et independants qui veulent mieux se presenter, rassurer plus vite et convertir."
      />
    ),
    size,
  );
}
