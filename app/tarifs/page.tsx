import { CTA, pricingFaqItems } from "@/content/site";
import type { Metadata } from "next";

import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { MetiersLinks } from "@/components/marketing/metiers-links";
import { PricingTable } from "@/components/marketing/pricing-table";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/layout/page-shell";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Tarifs",
  absoluteTitle: "Tarifs press kit digital dès 300 € | PressKit For You",
  description:
    "Press kit digital sur mesure dès 300 €, livré en 7 jours, 5 allers-retours inclus, paiement en 2 fois sans abonnement. Options à la carte.",
  path: "tarifs",
  keywords: ["tarifs press kit", "prix press kit digital", "formules press kit"],
});

export default function TarifsPage() {
  return (
    <>
      <PageJsonLd path="tarifs" name="Tarifs PressKit For You" breadcrumbName="Tarifs PressKit For You" description="Tarifs et formules de création de press kits digitaux premium." />
      <section className="section-wash relative overflow-hidden pb-6 pt-28 md:pb-8 md:pt-32">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.055),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.04),transparent_18%)]"
          aria-hidden="true"
        />
        <PageShell className="relative">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
            Tarifs du press kit digital
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-white/[0.64] md:text-lg md:leading-8">
            Deux niveaux d’accompagnement selon l’ambition, le contenu et le niveau de personnalisation de ton projet.
          </p>
        </PageShell>
      </section>

      <PricingTable variant="highlight" showHeading={false} sectionId={null} contactHref="#contact" />

      <MetiersLinks id="metiers-title" title="Press kit par métier" />
      <Faq items={pricingFaqItems} />

      <section className="section-divider section-tone-lift py-16 md:py-20" aria-labelledby="pricing-help-title">
        <PageShell className="max-w-5xl">
          <div className="grid gap-7 border-y border-white/[0.12] py-8 md:grid-cols-[1fr_auto] md:items-center md:py-10">
            <div>
              <h2 id="pricing-help-title" className="text-3xl font-semibold leading-tight tracking-tighter2 text-white md:text-4xl">
                Tu hésites entre les deux formules ?
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/[0.64] md:text-base md:leading-8">
                Le bon choix dépend surtout du niveau de personnalisation attendu, de la quantité de contenu à intégrer et de l’accompagnement nécessaire sur la direction artistique.
              </p>
            </div>
            <Button arrow href="#contact" className="min-h-12 justify-center px-7 py-4 text-[15px]">
              {CTA.primary}
            </Button>
          </div>
        </PageShell>
      </section>

      <FinalCta />
    </>
  );
}
