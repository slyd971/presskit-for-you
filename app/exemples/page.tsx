import type { Metadata } from "next";

import { ExamplesGalleryGrid } from "@/components/marketing/examples-gallery-grid";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Exemples",
  description: "Explore plusieurs exemples de press kits digitaux pour artistes, DJs, photographes, coachs et make-up artists.",
  path: "exemples",
  keywords: ["exemple press kit", "exemples press kit", "demo press kit digital"],
});

export default function ExamplesPage() {
  return (
    <>
      <section className="section-wash relative overflow-hidden pb-6 pt-28 md:pb-8 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.055),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.04),transparent_18%)]" />
        <PageShell className="relative max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
            Exemples
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.68] md:text-lg">
            Inspirez-vous de réalisations conçues pour différents profils, métiers et objectifs.
          </p>
        </PageShell>
      </section>
      <ExamplesGalleryGrid />
      <FinalCta />
    </>
  );
}
