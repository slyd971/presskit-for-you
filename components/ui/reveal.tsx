"use client";

import { createElement } from "react";

import { useInView } from "@/lib/use-in-view";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  // Les cartes des carrousels horizontaux dépassent à peine de l'écran : seuil plus bas pour qu'elles apparaissent.
  threshold?: number;
};

// Décalage plafonné à 2 pas de 60 ms : au plus 3 éléments décalés par groupe.
const REVEAL_STEP_MS = 60;
const REVEAL_MAX_MS = REVEAL_STEP_MS * 2;

export function Reveal({ children, className, delay = 0, as = "div", threshold = 0.15 }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>({ threshold });
  const delayMs = Math.min(Math.round(delay * 1000), REVEAL_MAX_MS);

  return createElement(
    as,
    {
      ref,
      className: className ? `reveal ${className}` : "reveal",
      "data-inview": inView ? "true" : undefined,
      style: delayMs ? { transitionDelay: `${delayMs}ms` } : undefined,
    },
    children,
  );
}
