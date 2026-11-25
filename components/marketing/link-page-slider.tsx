"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { MoveHorizontal } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";

import { motionTokens } from "@/lib/motion";
import { cn, withDe } from "@/lib/utils";

type Captures = { desktop: string; mobile: string };

type LinkPageSliderProps = {
  title: string;
  linkPage: Captures;
  // Desktop : la colonne de liens est calée à gauche, `background` (fond de la page) remplit le reste.
  linkPageDesktop: { shift: string; background: string };
  presskit: Captures;
};

const MIN = 5;
const MAX = 95;
// Au repos, toute la colonne de liens est visible à gauche.
const REST = 46;
// Sur écran tactile, le curseur ne suit le doigt qu'après ce déplacement horizontal : un défilement vertical ne le bouge pas.
const TOUCH_SLOP = 8;

// Zone des captures, sous la barre d'étiquettes.
const screen = "absolute inset-x-0 bottom-0 top-11 overflow-hidden sm:top-14";

type SideLabelProps = { side: "Avant" | "Après"; detail: string };

// Étiquette d'un côté, dans la barre du haut. Elle suit son côté quand on glisse. Sous sm : « Avant » / « Après » seuls.
function SideLabel({ side, detail }: SideLabelProps) {
  const isAfter = side === "Après";

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-0 flex h-11 items-center border-b border-white/[0.12] px-3 sm:h-14 sm:px-5",
        isAfter ? "justify-end bg-surface-760" : "bg-surface-900",
      )}
    >
      <span
        className={cn(
          "whitespace-nowrap rounded-lg border px-2.5 py-1 text-[11px] font-semibold uppercase leading-4 tracking-label-tight sm:px-3 sm:py-1.5",
          isAfter ? "border-white bg-white text-ink" : "border-white/[0.18] bg-white/[0.04] text-white/[0.84]",
        )}
      >
        {side}
        <span className="hidden sm:inline"> · {detail}</span>
      </span>
    </div>
  );
}

// Comparateur à glisser (souris, doigt, flèches du clavier) : captures mobile dans un téléphone sous sm,
// captures desktop dans un écran à partir de sm.
export function LinkPageSlider({ title, linkPage, linkPageDesktop, presskit }: LinkPageSliderProps) {
  const [position, setPosition] = useState(REST);
  const frameRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ startX: number; active: boolean } | null>(null);
  const intro = useRef<{ stop: () => void } | null>(null);
  const isInView = useInView(frameRef, { once: true, amount: 0.6 });
  const shouldReduceMotion = useReducedMotion();

  // Première apparition : un aller-retour montre le press kit entier, puis le curseur revient au repos.
  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      return;
    }

    const controls = animate(REST, [REST, MIN, REST], {
      duration: motionTokens.duration.slow * 4,
      delay: motionTokens.duration.normal,
      ease: "easeInOut",
      onUpdate: (value) => setPosition(Math.round(value * 10) / 10),
    });
    intro.current = controls;

    return () => controls.stop();
  }, [isInView, shouldReduceMotion]);

  const moveTo = (clientX: number) => {
    const rect = frameRef.current?.getBoundingClientRect();

    if (rect) {
      const next = ((clientX - rect.left) / rect.width) * 100;
      setPosition(Math.round(Math.min(MAX, Math.max(MIN, next))));
    }
  };

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    const isTouch = event.pointerType === "touch";
    drag.current = { startX: event.clientX, active: !isTouch };
    event.currentTarget.setPointerCapture(event.pointerId);

    if (!isTouch) {
      intro.current?.stop();
      moveTo(event.clientX);
    }
  };

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!drag.current) {
      return;
    }

    if (!drag.current.active && Math.abs(event.clientX - drag.current.startX) > TOUCH_SLOP) {
      intro.current?.stop();
      drag.current.active = true;
    }

    if (drag.current.active) {
      moveTo(event.clientX);
    }
  };

  // Simple toucher, sans glisser : le curseur vient sous le doigt.
  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    if (drag.current && !drag.current.active) {
      intro.current?.stop();
      moveTo(event.clientX);
    }

    drag.current = null;
  };

  return (
    <figure className="mx-auto w-full max-w-[17rem] sm:max-w-none">
      <div className="mockup-surface relative rounded-[1.35rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1.5 shadow-[0_26px_80px_rgba(16,20,29,0.2),inset_0_1px_0_rgba(255,255,255,0.14)] after:hidden sm:rounded-mockup-desktop">
        <div
          ref={frameRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={() => {
            drag.current = null;
          }}
          className="relative cursor-ew-resize touch-pan-y select-none overflow-hidden rounded-[1rem] bg-black pt-11 sm:rounded-[0.62rem] sm:pt-14"
          style={{ "--pos": `${position}%` } as CSSProperties}
        >
          <div className="aspect-[392/854] sm:aspect-video" aria-hidden="true" />
          <SideLabel side="Après" detail="presskit.fr" />
          <div className={screen}>
            <Image
              src={presskit.mobile}
              alt={`Press kit ${withDe(title)}, version mobile`}
              fill
              sizes="17rem"
              draggable={false}
              className="object-cover object-top sm:hidden"
            />
            <Image
              src={presskit.desktop}
              alt={`Press kit ${withDe(title)}, version desktop`}
              fill
              sizes="(min-width: 1152px) 68rem, 92vw"
              draggable={false}
              className="hidden object-cover object-top sm:block"
            />
          </div>
          <div className="absolute inset-0 [clip-path:inset(0_calc(100%-var(--pos))_0_0)]">
            <SideLabel side="Avant" detail="Linktree" />
            <div className={screen} style={{ background: linkPageDesktop.background }}>
              <Image
                src={linkPage.mobile}
                alt={`Page de liens ${withDe(title)}, version mobile`}
                fill
                sizes="17rem"
                draggable={false}
                className="object-cover object-top sm:hidden"
              />
              <Image
                src={linkPage.desktop}
                alt={`Page de liens ${withDe(title)}, version desktop`}
                fill
                sizes="(min-width: 1152px) 68rem, 92vw"
                draggable={false}
                className="hidden object-cover object-top sm:block"
                style={{ transform: `translateX(${linkPageDesktop.shift})` }}
              />
            </div>
          </div>
          {/* Curseur natif invisible : clavier et lecteurs d'écran. La souris et le doigt passent par le cadre. */}
          <input
            type="range"
            min={MIN}
            max={MAX}
            step={1}
            value={Math.round(position)}
            onChange={(event) => {
              intro.current?.stop();
              setPosition(Number(event.target.value));
            }}
            aria-label={`Comparer la page de liens et le press kit ${withDe(title)}`}
            aria-valuetext={`Page de liens visible à ${Math.round(position)} %`}
            className="peer pointer-events-none absolute inset-0 h-full w-full opacity-0"
          />
          <span className="pointer-events-none absolute inset-y-0 left-[var(--pos)] w-0.5 -translate-x-1/2 bg-white" aria-hidden="true" />
          <span
            className="pointer-events-none absolute left-[var(--pos)] top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-lg border border-ink-editorial/[0.12] bg-white text-ink-editorial peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-white"
            aria-hidden="true"
          >
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
      </div>
    </figure>
  );
}
