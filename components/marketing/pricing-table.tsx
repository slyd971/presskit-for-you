import Link from "next/link";
import { pricingOptions, pricingTiers } from "@/content/pricing";
import { CTA } from "@/content/site";
import { VAT_MENTION } from "@/lib/vat";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const hasAmount = (price: string) => price.includes("€");

type PricingTableProps = {
  variant?: "default" | "highlight";
  showHeading?: boolean;
  sectionId?: string | null;
  contactHref?: string;
  // Lien « Voir le détail des tarifs » sous les formules (accueil).
  showDetailsLink?: boolean;
};

export function PricingTable({
  variant = "default",
  showHeading = true,
  sectionId = "tarifs",
  contactHref = "/#contact",
  showDetailsLink = false,
}: PricingTableProps) {
  const isHighlight = variant === "highlight";
  const spacingClass = showHeading ? "pt-16 pb-12 md:pt-32 md:pb-14" : "pt-0 pb-14 md:pt-0 md:pb-20";
  const offerTone = {
    title: "text-ink-editorial",
    border: "border-ink-editorial/[0.12]",
    tierBorder: "border-ink-editorial/[0.12]",
    tierAccent: "bg-ink-editorial/[0.035]",
    tierSubtle: "bg-ink-editorial/[0.018]",
    headingMeta: "text-text-muted-light",
    body: "text-[#303744]",
    feature: "text-[#1f2632]",
    rule: "bg-ink-editorial/30",
  };

  return (
    <section
      id={sectionId ?? undefined}
      className={cn(
        "scroll-mt-28",
        spacingClass,
        isHighlight &&
          "section-divider overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.055),transparent_20%),linear-gradient(180deg,#171d28_0%,#1d2430_100%)]",
      )}
    >
      <PageShell>
        {!showHeading ? <h2 className="sr-only">Nos formules et options</h2> : null}
        {showHeading ? (
          <SectionHeading
            eyebrow="Tarifs"
            title="Investis dans une présentation à la hauteur de ton activité."
            description="Deux niveaux simples : un press kit premium prêt à partager, ou une expérience plus poussée pour les projets qui demandent une direction sur mesure."
          />
        ) : null}
        <div className={`grid overflow-hidden rounded-lg border bg-white lg:grid-cols-[1.15fr_0.85fr] ${offerTone.border} ${showHeading ? "mt-6 md:mt-16" : "mt-0"}`}>
          {pricingTiers.map((tier, index) => {
            const isQuote = !hasAmount(tier.price);
            const featureList = (
              <ul className="relative grid grid-cols-2 gap-x-3 border-y border-ink-editorial/[0.12] md:mt-9 md:flex-1 md:grid-cols-1 md:gap-x-0">
                {tier.features.slice(0, 5).map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 border-b border-ink-editorial/[0.08] py-1.5 text-xs last:border-b-0 md:gap-4 md:py-3.5 md:text-sm ${offerTone.feature}`}>
                    <span className={`hidden h-px shrink-0 md:block md:w-7 ${offerTone.rule}`} aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            );

            return (
              <article
                key={tier.name}
                className={`motion-line group relative flex h-full flex-col border-b px-4 py-4 last:border-b-0 md:px-7 md:py-10 lg:border-b-0 lg:border-r lg:px-9 lg:py-12 lg:last:border-r-0 ${offerTone.tierBorder} ${
                  index === 0 ? offerTone.tierAccent : offerTone.tierSubtle
                }`}
              >
                <div className="relative flex items-start justify-between gap-4">
                  <h3 className={`max-w-sm text-2xl font-semibold leading-none tracking-tighter2 md:text-[clamp(2.15rem,3.8vw,4.2rem)] ${offerTone.title}`}>{tier.name}</h3>
                  <span className={`text-right text-[10px] font-semibold uppercase tracking-label-tight ${offerTone.headingMeta}`}>
                    {tier.badge}
                  </span>
                </div>
                <div className={`relative mt-4 border-y py-3 md:mt-10 md:py-8 ${offerTone.tierBorder}`}>
                  <p className={`text-[2rem] font-semibold leading-none tracking-tighter2 md:text-[clamp(2.6rem,5.4vw,5.4rem)] ${offerTone.title}`}>{tier.price}</p>
                  <p className={`mt-2 text-xs font-medium tracking-wide md:mt-4 ${offerTone.headingMeta} hidden md:block`}>{tier.tagline}</p>
                </div>
                <p className={`relative mt-3 max-w-md text-sm leading-6 md:mt-7 md:text-base md:leading-8 ${offerTone.body}`}>{tier.description}</p>
                {isQuote ? <div className="hidden md:contents">{featureList}</div> : <div className="mt-3 flex flex-1 flex-col md:contents">{featureList}</div>}
                <Button
                  href={contactHref}
                  variant="primaryOnLight"
                  arrow={!isQuote}
                  className="relative mx-auto mt-3 min-h-12 w-full max-w-sm justify-center px-6 py-3.5 md:mt-10"
                >
                  {isQuote ? CTA.quote : CTA.primary}
                </Button>
                {isQuote ? (
                  <details className="acc group relative mt-3 border-t border-ink-editorial/[0.12] md:hidden">
                    <summary className={`flex cursor-pointer list-none items-center justify-between gap-4 py-2.5 text-sm font-semibold [&::-webkit-details-marker]:hidden ${offerTone.feature}`}>
                      Voir ce qui est inclus
                      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="acc-body">{featureList}</div>
                  </details>
                ) : null}
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-xs text-white/[0.64] md:mt-6">{VAT_MENTION}</p>
        {showDetailsLink ? (
          <Link href="/tarifs" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
            Voir le détail des tarifs
          </Link>
        ) : null}
        <div className="mt-4 py-3 md:mt-12 md:py-10">
          <div className="grid gap-3 md:gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-label text-white/[0.64]">Options</p>
              <h3 className="mt-3 max-w-lg text-2xl font-semibold leading-tight tracking-tighter2 text-white md:mt-4 md:text-4xl">
                À ajouter seulement si ton projet en a besoin.
              </h3>
              <p className="mt-2 text-sm leading-6 text-white/[0.64] md:mt-4 md:leading-7">
                Pas de pack forcé : on ajoute ce qui sert vraiment à la mise en ligne, à la mise à jour ou à la qualité des visuels.
              </p>
            </div>
            <div className="grid md:grid-cols-2 md:border-l md:border-white/[0.08]">
              {pricingOptions.map((option) => (
                <div key={option.name}>
                  <details className="acc group border-b border-white/[0.08] py-3 md:hidden">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                      <span>
                        <span className="block text-base font-semibold leading-snug text-white">{option.name}</span>
                        <span className="mt-0.5 block text-sm font-semibold tracking-tighter2 text-white/[0.74]">
                          {option.price}
                        </span>
                      </span>
                      <ChevronDown className="h-4 w-4 shrink-0 text-white/[0.64] transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                    </summary>
                    <div className="acc-body">
                      <p className="pr-8 pt-3 text-sm leading-6 text-white/[0.64]">{option.description}</p>
                    </div>
                  </details>
                  <article className="motion-line hidden border-b border-white/[0.08] py-5 md:block md:border-r md:px-5 md:last:border-r">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-base font-semibold leading-snug text-white">{option.name}</h4>
                      <span className="shrink-0 text-lg font-semibold tracking-tighter2 text-white">{option.price}</span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-white/[0.64]">{option.description}</p>
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
