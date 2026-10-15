"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { onFirstInteraction } from "@/lib/first-interaction";

type ScrollingPreviewProps = {
  src?: string;
  alt: string;
  // Largeur native de la capture (1280 desktop, 390 mobile).
  width: number;
};

const MAX_HOVER_SECONDS = 8;
const MAX_PASS_SECONDS = 2.5;
const MIN_PASS_SECONDS = 1.2;

// Capture pleine page qui défile dans un cadre `relative overflow-hidden` existant.
// - Chargée après le premier geste de l'utilisateur, quand la carte approche de l'écran (rootMargin 200 px).
// - Desktop : défilement au survol de la carte (CSS, voir .sp-img).
// - Mobile : un aller-retour quand la carte est visible à 60 %, pause hors écran.
// - Sans fichier ou en reduced-motion : rien n'est rendu, l'image actuelle reste.
export function ScrollingPreview({ src, alt, width }: ScrollingPreviewProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const frame = frameRef.current;

    if (!src || !frame || typeof IntersectionObserver === "undefined") {
      return;
    }

    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || connection?.saveData) {
      return;
    }

    let observer: IntersectionObserver | undefined;

    const stopWaiting = onFirstInteraction(() => {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setShouldLoad(true);
            observer?.disconnect();
          }
        },
        { rootMargin: "200px" },
      );
      observer.observe(frame);
    });

    return () => {
      stopWaiting();
      observer?.disconnect();
    };
  }, [src]);

  useEffect(() => {
    const frame = frameRef.current;
    const img = imgRef.current;

    if (!shouldLoad || !frame || !img) {
      return;
    }

    const measure = () => {
      const travel = img.offsetHeight - (frame.parentElement?.clientHeight ?? 0);

      if (img.naturalWidth === 0 || img.clientWidth === 0 || travel <= 8) {
        return;
      }

      const naturalTravel = travel * (img.naturalWidth / img.clientWidth);
      const hoverSeconds = Math.min(naturalTravel / 1000, MAX_HOVER_SECONDS);
      const passSeconds = Math.min(Math.max((2 * naturalTravel) / 1000, MIN_PASS_SECONDS), MAX_PASS_SECONDS);

      img.style.setProperty("--sp-travel", `${travel}px`);
      img.style.setProperty("--sp-dur", `${hoverSeconds.toFixed(2)}s`);
      img.style.setProperty("--sp-pass", `${passSeconds.toFixed(2)}s`);
      img.dataset.ready = "true";
    };

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(frame.parentElement ?? frame);

    if (img.complete) {
      measure();
    } else {
      img.addEventListener("load", measure, { once: true });
    }

    // Tactile : un seul aller-retour quand la carte est visible à ≥ 60 %.
    let playObserver: IntersectionObserver | undefined;

    if (window.matchMedia("(hover: none)").matches) {
      const card = frame.closest(".group") ?? frame;
      const onEnd = () => {
        img.dataset.play = "done";
      };

      img.addEventListener("animationend", onEnd);
      playObserver = new IntersectionObserver(
        ([entry]) => {
          if (img.dataset.play === "done") {
            return;
          }

          if (entry.intersectionRatio >= 0.6) {
            img.dataset.play = "running";
          } else if (img.dataset.play === "running") {
            img.dataset.play = "paused";
          }
        },
        { threshold: [0, 0.6] },
      );
      playObserver.observe(card);

      return () => {
        img.removeEventListener("animationend", onEnd);
        playObserver?.disconnect();
        resizeObserver.disconnect();
      };
    }

    return () => resizeObserver.disconnect();
  }, [shouldLoad]);

  if (!src) {
    return null;
  }

  return (
    <div ref={frameRef} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {shouldLoad ? (
        <Image ref={imgRef} src={src} alt={alt} width={width} height={width * 4} unoptimized loading="lazy" className="sp-img" />
      ) : null}
    </div>
  );
}
