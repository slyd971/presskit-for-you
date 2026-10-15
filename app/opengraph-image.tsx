import { ImageResponse } from "next/og";

import { OgImage } from "@/lib/og-image";

export const alt = "PressKit For You - press kits digitaux premium";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <OgImage
        title="De tes contenus à un lien prêt à envoyer."
        description="Un press kit digital premium pour présenter ton activité, tes médias, tes preuves et ton contact au même endroit."
      />
    ),
    size,
  );
}
