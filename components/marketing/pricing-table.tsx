import { pricingTiers } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type PricingTableProps = {
  variant?: "default" | "highlight";
  showHeading?: boolean;
};

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

export function PricingTable({ variant = "default", showHeading = true }: PricingTableProps) {
  const isHighlight = variant === "highlight";
  const spacingClass = showHeading ? "py-24 md:py-32" : "pt-0 pb-16 md:pt-0 md:pb-20";
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
            title="Choisissez le niveau d’image dont votre projet a besoin."
            description="Deux formats lisibles. Le bon dépend surtout du volume de contenu, du nombre de pages et du niveau de personnalisation."
          />
        ) : null}
        <div className={`grid overflow-hidden rounded-lg border bg-[#f7f5f0] lg:grid-cols-[1.15fr_0.85fr] ${offerTone.border} ${showHeading ? "mt-16" : "mt-0"}`}>
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`motion-line group relative flex h-full flex-col border-b px-0 py-8 last:border-b-0 md:px-7 md:py-10 lg:border-b-0 lg:border-r lg:px-9 lg:py-12 lg:last:border-r-0 ${offerTone.tierBorder} ${
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
                <p className={`mt-1.5 text-xs font-medium tracking-wide ${offerTone.headingMeta}`}>{tier.tagline}</p>
              </div>
              <p className={`relative mt-7 max-w-lg text-base leading-8 ${offerTone.body}`}>{tier.description}</p>
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
                className="relative mt-10 min-h-12 w-full justify-center py-3.5"
              >
                Demander mon press kit
              </Button>
            </article>
          ))}
        </div>
        <div className="mt-10 border-y border-white/[0.12] py-8 md:mt-12 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.52]">Options</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tighter2 text-white md:text-4xl">
                Les compléments possibles, sans page tarif séparée.
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/[0.66]">
                On ajoute uniquement ce qui sert vraiment au projet : domaine, suivi, contenus ou visuels.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {complementaryOptions.map((option) => (
                <article key={option.name} className="motion-line border-t border-white/[0.12] pt-4">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-base font-semibold leading-snug text-white">{option.name}</h4>
                    <span className="shrink-0 text-sm font-semibold text-white/[0.86]">{option.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/[0.62]">{option.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
