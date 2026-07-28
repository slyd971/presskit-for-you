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
        title="Plus pro qu'Instagram. Plus impactant qu'un PDF."
        description="Presentez votre activite, vos contenus et vos references dans une experience premium prete a partager."
      />
    ),
    size,
  );
}
