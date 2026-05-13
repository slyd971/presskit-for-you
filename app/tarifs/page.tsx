import type { Metadata } from "next";

import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { PricingTable } from "@/components/marketing/pricing-table";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tarifs",
  description: "Decouvre les tarifs et formules de creation de press kits digitaux premium pour artistes, talents et independants.",
  path: "tarifs",
  keywords: ["tarif press kit digital", "prix site artiste", "offre press kit premium"],
});

export default function PricingPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-6 md:pt-18 md:pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,145,82,0.12),transparent_24%),radial-gradient(circle_at_84%_14%,rgba(255,255,255,0.05),transparent_20%)]" />
        <PageShell className="relative max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
            Tarifs
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.68] md:text-lg">
            Trois niveaux d’offre pour lancer ton press kit, renforcer ton image ou cadrer un projet plus ambitieux.
          </p>
        </PageShell>
      </section>
      <PricingTable showHeading={false} />
      <Faq />
      <FinalCta />
    </>
  );
}
