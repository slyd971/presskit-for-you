"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

type ClickTrackingProps = {
  primaryLabel: string;
  quoteUrl: string;
  adviceUrl: string;
};

// Un seul écouteur pour tout le site : un clic sur un CTA envoie un seul événement Vercel Analytics.
export function ClickTracking({ primaryLabel, quoteUrl, adviceUrl }: ClickTrackingProps) {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      const page = window.location.pathname;

      if (href === quoteUrl) {
        track("clic Demander un devis", { page });
      } else if (href.startsWith("https://wa.me/")) {
        track("clic WhatsApp", { page, source: href === adviceUrl ? "conseil" : "ecrire" });
      } else if (href.startsWith("mailto:")) {
        track("clic e-mail", { page });
      } else if (link.textContent?.trim() === primaryLabel) {
        track("clic Demander mon press kit", { page });
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, [primaryLabel, quoteUrl, adviceUrl]);

  return null;
}
