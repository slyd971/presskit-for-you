import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

import "./tokens.css";
import { DUR, EASE_OUT } from "./da";
import { useDaFonts } from "./useDaFonts";

type Props = { title: string; subtitle: string };

// Couverture de Reel (DA §19) avec un reveal doux (DA §12.3) : sert à vérifier la chaîne de rendu.
export function TestCouverture({ title, subtitle }: Props) {
  useDaFonts();
  const frame = useCurrentFrame();
  const reveal = (delay: number) => {
    const progress = interpolate(frame - delay, [0, DUR.reveal], [0, 1], {
      easing: EASE_OUT,
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });
    return { opacity: progress, transform: `translateY(${(1 - progress) * 32}px)` };
  };

  return (
    <AbsoluteFill style={{ background: "var(--cover-black)", color: "var(--cover-ink-dark)", textAlign: "center" }}>
      <p style={{ fontFamily: "var(--font-ui)", fontWeight: 500, fontSize: "var(--cover-label-size)", letterSpacing: "var(--cover-label-tracking)", margin: 0, paddingTop: 108 }}>
        PRESS KIT FOR YOU
      </p>
      <h1 style={{ ...reveal(0), fontFamily: "var(--font-display)", fontWeight: 400, fontSize: "var(--cover-title-size)", lineHeight: "var(--cover-leading)", letterSpacing: "var(--cover-title-tracking)", margin: "80px 0 0", textTransform: "uppercase" }}>
        {title}
      </h1>
      <p style={{ ...reveal(DUR.feedback), fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "var(--cover-sub-size)", lineHeight: "var(--cover-leading)", letterSpacing: "var(--cover-sub-tracking)", color: "var(--blue-insta)", margin: "60px 0 0" }}>
        {subtitle}
      </p>
    </AbsoluteFill>
  );
}
