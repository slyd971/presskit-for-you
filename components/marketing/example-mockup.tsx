"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";

import { ScrollingPreview } from "@/components/marketing/scrolling-preview";
import { onFirstInteraction } from "@/lib/first-interaction";
import type { PreviewAssets } from "@/lib/preview-assets";
import { cn } from "@/lib/utils";

type Mode = "desktop" | "mobile";

type ExampleMockupProps = {
  // Identifiant unique sur la page : nomme l'élément pour la View Transition.
  id: string;
  title: string;
  // Métier du client : sert à l'alt des captures (« Press kit de {nom}, {métier}, version … »).
  category?: string;
  desktopImage?: string;
  mobileImage?: string;
  imagePosition?: string;
  accent?: string;
  // Classes de hauteur du cadre (varient selon la grille qui l'utilise).
  boxClassName: string;
  desktopSizes: string;
  mobileSizes: string;
  preview?: PreviewAssets;
};

const MODES: { value: Mode; label: string }[] = [
  { value: "desktop", label: "Ordinateur" },
  { value: "mobile", label: "Mobile" },
];

// Mockup ordinateur + téléphone des cartes d'exemples (accueil, /exemples, pages métiers),
// avec bascule Ordinateur / Mobile quand une capture mobile existe.
export function ExampleMockup({
  id,
  title,
  category,
  desktopImage,
  mobileImage,
  imagePosition,
  accent,
  boxClassName,
  desktopSizes,
  mobileSizes,
  preview,
}: ExampleMockupProps) {
  const captureAlt = (version: Mode) =>
    category ? `Press kit de ${title}, ${category}, version ${version}` : `${title} en version ${version}`;
  const boxRef = useRef<HTMLDivElement>(null);
  const [mode, setMode] = useState<Mode>("desktop");
  // L'image du calque mobile n'est demandée qu'après le premier geste : poids initial inchangé.
  const [armed, setArmed] = useState(false);

  useEffect(() => onFirstInteraction(() => setArmed(true)), []);

  const select = (next: Mode) => {
    if (next === mode) {
      return;
    }

    const box = boxRef.current;
    const doc = document as Document & {
      startViewTransition?: (update: () => void) => { finished: Promise<unknown> };
    };

    // View Transitions si disponible (et mouvement autorisé), sinon fondu CSS seul.
    if (box && doc.startViewTransition && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      box.dataset.vt = "true";
      const transition = doc.startViewTransition(() => flushSync(() => setMode(next)));
      transition.finished.finally(() => {
        delete box.dataset.vt;
      });
      return;
    }

    setMode(next);
  };

  return (
    <div
      ref={boxRef}
      data-mode={mode}
      className={cn("ex-box relative overflow-visible", boxClassName)}
    >
      <div className="ex-stage absolute inset-0" style={{ viewTransitionName: `ex-${id}` } as CSSProperties}>
        <div className="ex-layer ex-layer-desktop absolute inset-0" aria-hidden={mode !== "desktop"}>
          <div className="absolute left-1/2 top-4 z-10 w-[86%] -translate-x-1/2 rotate-[-1.4deg] transition duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.4deg]">
            <div className="mockup-surface relative overflow-hidden rounded-t-[0.9rem] border border-white/[0.14] bg-[#07090e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="relative aspect-[91/60] overflow-hidden rounded-t-[0.62rem] bg-black">
                {desktopImage ? (
                  <Image
                    src={desktopImage}
                    alt={captureAlt("desktop")}
                    fill
                    sizes={desktopSizes}
                    className="object-contain object-center"
                    style={imagePosition ? { objectPosition: imagePosition } : undefined}
                  />
                ) : (
                  <div
                    className="h-full w-full"
                    style={{ background: `linear-gradient(135deg, ${accent ?? "#ffffff"}33, rgba(255,255,255,0.05))` }}
                  />
                )}
                <ScrollingPreview src={preview?.desktop} alt={`${title}, page complète en version desktop`} width={1280} />
              </div>
            </div>
            <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
            {mobileImage ? (
              <div className="absolute -bottom-5 -right-8 z-20 w-[30%] min-w-[4.35rem] rotate-[5deg] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[2deg] md:-bottom-6 md:-right-10 md:w-[31%] md:min-w-[5rem]">
                <div className="mockup-surface relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
                  <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                    <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                    <Image
                      src={mobileImage}
                      alt={captureAlt("mobile")}
                      fill
                      sizes={mobileSizes}
                      className="object-cover object-top"
                    />
                    <ScrollingPreview src={preview?.mobile} alt={`${title}, page complète en version mobile`} width={390} />
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {mobileImage ? (
          <div className="ex-layer ex-layer-mobile absolute inset-0" aria-hidden={mode !== "mobile"}>
            <div className="absolute left-1/2 top-3 z-10 aspect-[0.48/1] h-[calc(100%-3.25rem)] -translate-x-1/2">
              <div className="mockup-surface relative h-full rounded-[1.35rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1.5 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)]">
                <div className="relative h-full overflow-hidden rounded-[1rem] bg-black">
                  <div className="absolute left-1/2 top-1.5 z-20 h-2.5 w-8 -translate-x-1/2 rounded-full bg-[#050609]" />
                  {armed || mode === "mobile" ? (
                    <Image
                      src={mobileImage}
                      alt={captureAlt("mobile")}
                      fill
                      sizes="12rem"
                      className="object-cover object-top"
                    />
                  ) : null}
                  <ScrollingPreview src={preview?.mobile} alt={`${title}, page complète en version mobile`} width={390} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {mobileImage ? (
        <div
          role="group"
          aria-label={`Format d'affichage de ${title}`}
          className="absolute bottom-0 left-0 z-30 inline-flex rounded-lg border border-white/[0.14] bg-[#0b0e14]/[0.82] p-0.5 backdrop-blur-md"
        >
          {MODES.map((item) => (
            <button
              key={item.value}
              type="button"
              aria-pressed={mode === item.value}
              onClick={() => select(item.value)}
              className={cn(
                "min-h-8 rounded-md px-3 text-xs font-semibold outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-white/70",
                mode === item.value ? "bg-white text-ink" : "text-white/[0.76] hover:text-white",
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
