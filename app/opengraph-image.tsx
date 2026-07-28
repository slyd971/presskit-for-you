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
        title="De vos contenus à un lien prêt à envoyer."
        description="Un press kit digital premium pour présenter votre activité, vos médias, vos preuves et votre contact au même endroit."
      />
    ),
    size,
  );
}
