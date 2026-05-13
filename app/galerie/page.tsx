import type { Metadata } from "next";

import { ExamplesGalleryGrid } from "@/components/marketing/examples-gallery-grid";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Exemples",
  description: "Explore plusieurs exemples de press kits digitaux premium pour artistes, DJs, photographes, coachs et make-up artists.",
  path: "galerie",
  keywords: ["exemple press kit", "galerie site artiste", "demo press kit digital"],
});

export default function GalleryPage() {
  return (
    <>
      <section className="section-wash relative overflow-hidden pt-16 pb-6 md:pt-18 md:pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,145,82,0.13),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.055),transparent_18%)]" />
        <PageShell className="relative max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
            Exemples
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.68] md:text-lg">
            Des rendus concrets pour te projeter vite dans le bon niveau d'image, selon ton métier et le type de présence que tu veux envoyer.
          </p>
        </PageShell>
      </section>
      <ExamplesGalleryGrid />
    </>
  );
}
