import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Comment ça marche",
  description: "Decouvre le process de creation d un press kit digital premium, du brief a la livraison, avec une methode simple et rapide.",
  path: "comment-ca-marche",
  keywords: ["process creation press kit", "comment creer un press kit digital", "methode press kit premium"],
});

export default function ProcessPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-6 md:pt-18 md:pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,145,82,0.12),transparent_22%),radial-gradient(circle_at_82%_12%,rgba(255,255,255,0.05),transparent_18%)]" />
        <PageShell className="relative max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
            Comment ça marche
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.68] md:text-lg">
            Un déroulé simple pour cadrer vite, construire la bonne direction et mettre ton press kit en ligne sans friction.
          </p>
        </PageShell>
      </section>
      <ProcessTimeline showHeading={false} />
      <FinalCta />
    </>
  );
}
