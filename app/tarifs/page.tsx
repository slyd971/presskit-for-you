import type { Metadata } from "next";

import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { PricingTable } from "@/components/marketing/pricing-table";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

const complementaryOptions = [
  {
    name: "Nom de domaine personnalisé",
    price: "+30 €",
    description: "Une adresse web professionnelle à votre nom.",
  },
  {
    name: "Maintenance annuelle",
    price: "+60 €/an",
    description: "Corrections mineures, mises à jour techniques et assistance sur l’année.",
  },
  {
    name: "Mise à jour de contenu",
    price: "+30 €",
    description: "Modification ponctuelle de textes, images, vidéos ou liens.",
  },
  {
    name: "Séance photo professionnelle",
    price: "+100 €",
    description: "Une séance photo pour obtenir des visuels de qualité professionnelle.",
  },
];

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
            Deux formats clairs pour lancer ton press kit ou cadrer un projet plus ambitieux.
          </p>
        </PageShell>
      </section>
      <PricingTable showHeading={false} />
      <section className="pb-20 md:pb-24">
        <PageShell>
          <div className="mx-auto max-w-5xl">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.42]">
                Options
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tighter2 text-white md:text-4xl">
                Options complémentaires
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/[0.66] md:text-base">
                Vous pouvez enrichir votre press kit avec des options adaptées à vos besoins.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {complementaryOptions.map((option) => (
                <article
                  key={option.name}
                  className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.1] bg-white/[0.045] p-5 shadow-[0_18px_60px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.055)] md:p-6"
                >
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-20 bg-gradient-to-b from-white/[0.08] to-transparent blur-2xl" />
                  <div className="relative flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold leading-snug text-white">{option.name}</h3>
                    <span className="shrink-0 rounded-full border border-white/[0.12] bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/74">
                      {option.price}
                    </span>
                  </div>
                  <p className="relative mt-4 text-sm leading-6 text-white/[0.62]">{option.description}</p>
                </article>
              ))}
            </div>
          </div>
        </PageShell>
      </section>
      <Faq />
      <FinalCta />
    </>
  );
}
