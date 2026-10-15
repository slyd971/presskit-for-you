"use client";

import { Link2 } from "lucide-react";
import { useEffect, useState } from "react";

type HeroLinkBubbleProps = {
  // URL du press kit montré dans le premier mockup.
  url: string;
};

type Phase = "idle" | "bubble" | "pill";

const STORAGE_KEY = "presskit-hero-link-bubble";
const START_DELAY_MS = 900;
// 400 ms d'apparition + 1,6 s de lecture ; le repli en pastille dure ensuite 400 ms.
const BUBBLE_DURATION_MS = 2000;

function readPlayed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function markPlayed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Navigation privée : la séquence se rejouera au prochain chargement, sans conséquence.
  }
}

// « Le lien qui s'envoie » : une bulle de message neutre au-dessus du premier mockup du hero.
// Une fois par session, 900 ms après le chargement. Décorative : masquée aux lecteurs d'écran,
// absente en reduced-motion. Le mockup (élément LCP) reste statique et visible dès le premier rendu.
export function HeroLinkBubble({ url }: HeroLinkBubbleProps) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [animated, setAnimated] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timers: number[] = [];
    let onLoad: (() => void) | undefined;

    if (readPlayed()) {
      // Déjà jouée dans cette session : la pastille seule, sans mouvement.
      timers.push(
        window.setTimeout(() => {
          setAnimated(false);
          setPhase("pill");
        }, 0),
      );
    } else {
      const start = () => {
        timers.push(
          window.setTimeout(() => {
            markPlayed();
            setPhase("bubble");
            timers.push(window.setTimeout(() => setPhase("pill"), BUBBLE_DURATION_MS));
          }, START_DELAY_MS),
        );
      };

      if (document.readyState === "complete") {
        start();
      } else {
        onLoad = start;
        window.addEventListener("load", onLoad, { once: true });
      }
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));

      if (onLoad) {
        window.removeEventListener("load", onLoad);
      }
    };
  }, []);

  const host = (() => {
    try {
      return new URL(url).host;
    } catch {
      return url;
    }
  })();

  return (
    <div
      aria-hidden="true"
      data-phase={phase}
      data-static={animated ? undefined : "true"}
      className="hero-bubble pointer-events-none absolute left-2 top-2 z-[60] sm:left-[6%] sm:top-[9%]"
    >
      <div className="hero-bubble-message w-[15.5rem] rounded-lg bg-mist px-3 py-2.5 text-ink-editorial shadow-panel">
        <p className="text-sm font-semibold leading-5">Voici mon press kit</p>
        <div className="mt-2 flex items-center gap-2 rounded-lg border border-ink-editorial/[0.12] bg-paper px-2.5 py-2">
          <Link2 className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span className="truncate text-xs font-semibold">{host}</span>
        </div>
      </div>
      <span className="hero-bubble-pill absolute left-0 top-0 flex h-7 w-7 items-center justify-center rounded-full bg-mist text-ink-editorial shadow-panel">
        <Link2 className="h-3.5 w-3.5" aria-hidden="true" />
      </span>
    </div>
  );
}
