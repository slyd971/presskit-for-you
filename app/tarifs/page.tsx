import type { Metadata } from "next";

import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { PricingTable } from "@/components/marketing/pricing-table";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Tarifs",
  description: "Découvre les formules de création de press kits digitaux premium.",
};

export default function PricingPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <PageShell className="max-w-4xl">
          <Badge>Offres</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white md:text-7xl">
            Des tarifs cadrés pour transformer ton image en outil de présentation premium.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Le niveau de finition reste élevé dans tous les cas. Ce qui varie, c’est le degré de
            personnalisation, de narration et de profondeur du projet.
          </p>
        </PageShell>
      </section>
      <PricingTable />
      <Faq />
      <FinalCta />
    </>
  );
}
