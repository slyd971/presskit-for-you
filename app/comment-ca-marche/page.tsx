import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { FinalCta } from "@/components/marketing/final-cta";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description: "Découvre le process de création d’un press kit digital premium, du brief à la livraison.",
};

export default function ProcessPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <PageShell className="max-w-4xl">
          <Badge>Méthode</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white md:text-7xl">
            Un process simple pour livrer un rendu premium sans friction.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            L’objectif n’est pas de compliquer le projet, mais de cadrer vite, bien, puis de
            traduire ton image dans une expérience digitale claire, belle et utile.
          </p>
        </PageShell>
      </section>
      <ProcessTimeline />
      <section className="pb-10">
        <PageShell className="grid gap-5 lg:grid-cols-3">
          {[
            "Clarifier ce que tu veux montrer",
            "Choisir la bonne hiérarchie de contenu",
            "Créer une direction visuelle qui renforce la valeur perçue",
          ].map((item) => (
            <div key={item} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6 text-white/78">
              {item}
            </div>
          ))}
        </PageShell>
      </section>
      <FinalCta />
    </>
  );
}
