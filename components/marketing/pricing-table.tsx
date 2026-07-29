import { pricingTiers } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

type PricingTableProps = {
  variant?: "default" | "highlight";
  showHeading?: boolean;
};

const complementaryOptions = [
  {
    name: "Nom de domaine personnalisé",
    price: "+30 €",
    description: "Pour partager une adresse courte et crédible, reliée à votre nom ou votre marque.",
  },
  {
    name: "Maintenance annuelle",
    price: "+60 €/an",
    description: "Pour assurer les mises à jour, les corrections et le bon fonctionnement de votre press kit.",
  },
  {
    name: "Mise à jour de contenu",
    price: "+30 €",
    description: "Pour remplacer une photo, ajouter une date, modifier un texte ou mettre à jour vos liens.",
  },
  {
    name: "Séance photo professionnelle",
    price: "Sur devis",
    description: "Pour créer les visuels manquants quand vos photos actuelles ne rendent pas justice au projet.",
  },
];

export function PricingTable({ variant = "default", showHeading = true }: PricingTableProps) {
  const isHighlight = variant === "highlight";
  const spacingClass = showHeading ? "pt-20 pb-12 md:pt-32 md:pb-14" : "pt-0 pb-14 md:pt-0 md:pb-20";
  const offerTone = {
    title: "text-[#10141d]",
    border: "border-[#10141d]/[0.14]",
    tierBorder: "border-[#10141d]/[0.1]",
    tierAccent: "bg-[#10141d]/[0.035]",
    tierSubtle: "bg-[#10141d]/[0.018]",
    headingMeta: "text-[#5d6470]",
    body: "text-[#303744]",
    feature: "text-[#1f2632]",
    rule: "bg-[#10141d]/30",
  };

  return (
    <section
      id="tarifs"
      className={cn(
        "scroll-mt-28",
        spacingClass,
        isHighlight &&
          "section-divider overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.055),transparent_20%),linear-gradient(180deg,#171d28_0%,#1d2430_100%)]",
      )}
    >
      <PageShell>
        {showHeading ? (
          <SectionHeading
            eyebrow="Tarifs"
            title="Investissez dans une présentation à la hauteur de votre activité."
            description="Deux niveaux simples : un press kit premium prêt à partager, ou une expérience plus poussée pour les projets qui demandent une direction sur mesure."
          />
        ) : null}
        <div className={`grid overflow-hidden rounded-lg border bg-white lg:grid-cols-[1.15fr_0.85fr] ${offerTone.border} ${showHeading ? "mt-10 md:mt-16" : "mt-0"}`}>
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`motion-line group relative flex h-full flex-col border-b px-5 py-8 last:border-b-0 md:px-7 md:py-10 lg:border-b-0 lg:border-r lg:px-9 lg:py-12 lg:last:border-r-0 ${offerTone.tierBorder} ${
                index === 0 ? offerTone.tierAccent : offerTone.tierSubtle
              }`}
            >
              <div className="relative flex items-start justify-between gap-4">
                <h3 className={`max-w-sm text-[clamp(2.15rem,3.8vw,4.2rem)] font-semibold leading-none tracking-tighter2 ${offerTone.title}`}>{tier.name}</h3>
                <span className={`text-right text-[10px] font-semibold uppercase tracking-[0.18em] ${offerTone.headingMeta}`}>
                  {tier.badge}
                </span>
              </div>
              <div className={`relative mt-10 border-y py-8 ${offerTone.tierBorder}`}>
                <p className={`text-[clamp(3.2rem,7vw,6.7rem)] font-semibold leading-none tracking-tighter2 ${offerTone.title}`}>{tier.price}</p>
                <p className={`mt-4 text-xs font-medium tracking-wide ${offerTone.headingMeta}`}>{tier.tagline}</p>
              </div>
              <p className={`relative mt-7 max-w-md text-base leading-8 ${offerTone.body}`}>{tier.description}</p>
              <ul className="relative mt-9 grid flex-1 gap-0 border-y border-[#10141d]/[0.1]">
                {tier.features.slice(0, 5).map((feature) => (
                  <li key={feature} className={`flex items-center gap-4 border-b border-[#10141d]/[0.08] py-3.5 text-sm last:border-b-0 ${offerTone.feature}`}>
                    <span className={`h-px w-7 shrink-0 ${offerTone.rule}`} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                href="/#contact"
                variant="primaryOnLight"
                className="relative mx-auto mt-10 min-h-12 w-full max-w-sm justify-center px-6 py-3.5"
              >
                Demander mon press kit
              </Button>
            </article>
          ))}
        </div>
        <div className="mt-10 py-8 md:mt-12 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.52]">Options</p>
              <h3 className="mt-4 max-w-lg text-3xl font-semibold leading-tight tracking-tighter2 text-white md:text-4xl">
                À ajouter seulement si votre projet en a besoin.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.66]">
                Pas de pack forcé : on ajoute ce qui sert vraiment à la mise en ligne, à la mise à jour ou à la qualité des visuels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 md:border-l md:border-white/[0.08]">
              {complementaryOptions.map((option) => (
                <div key={option.name}>
                  <details className="group border-b border-white/[0.09] py-4 md:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="block text-base font-semibold leading-snug text-white">{option.name}</span>
                        <span className="mt-1 block text-sm font-semibold tracking-tighter2 text-white/[0.76]">{option.price}</span>
                      </span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-white/[0.62] transition duration-300 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <p className="mt-3 pr-8 text-sm leading-6 text-white/[0.62]">{option.description}</p>
                  </details>
                  <article className="motion-line hidden border-b border-white/[0.09] py-5 md:block md:border-r md:px-5 md:last:border-r">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-base font-semibold leading-snug text-white">{option.name}</h4>
                      <span className="shrink-0 text-lg font-semibold tracking-tighter2 text-white">{option.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/[0.62]">{option.description}</p>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
