import { pricingTiers } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type PricingTableProps = {
  variant?: "default" | "highlight";
  showHeading?: boolean;
};

const tierAccents = [
  "from-[#ff9152]/25 via-white/[0.08] to-transparent",
  "from-white/[0.14] via-[#d8c49d]/10 to-transparent",
];

export function PricingTable({ variant = "default", showHeading = true }: PricingTableProps) {
  const isHighlight = variant === "highlight";
  const spacingClass = showHeading ? "py-24 md:py-28" : "pt-0 pb-16 md:pt-0 md:pb-20";

  return (
    <section
      className={cn(
        spacingClass,
        isHighlight &&
          "section-divider overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,145,82,0.13),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.075),transparent_20%),linear-gradient(180deg,#121721_0%,#171c26_100%)]",
      )}
    >
      <PageShell>
        {showHeading ? (
          <SectionHeading
            eyebrow="Tarifs"
            title="Des formats clairs selon le niveau d’ambition du projet."
            description="Les tarifs donnent un cadre. Le rendu final dépend ensuite du volume de contenu, du niveau de custom et du nombre de pages."
          />
        ) : null}
        <div className={`mx-auto grid max-w-5xl gap-5 lg:grid-cols-2 ${showHeading ? "mt-14" : "mt-0"}`}>
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 shadow-[0_28px_90px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_36px_120px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.08)] md:p-8 ${
                index === 0
                  ? "border-white/[0.26] bg-[radial-gradient(circle_at_top,rgba(255,145,82,0.22),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.15),rgba(255,255,255,0.052))] lg:-mt-4 lg:mb-4"
                  : isHighlight
                    ? "border-white/[0.12] bg-white/[0.052] hover:border-white/[0.18]"
                    : "border-white/10 bg-white/[0.035] hover:border-white/[0.16]"
              }`}
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.22] to-transparent" />
              <div className={`pointer-events-none absolute inset-x-8 top-0 h-28 bg-gradient-to-b ${tierAccents[index]} blur-2xl transition duration-500 group-hover:opacity-100 ${index === 0 ? "opacity-100" : "opacity-60"}`} />
              <div className="relative flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold leading-tight text-white">{tier.name}</h3>
                <span className="text-right text-[10px] font-semibold uppercase tracking-[0.18em] text-white/[0.42]">
                  {tier.badge}
                </span>
              </div>
              <div className="relative mt-7">
                <p className="text-4xl font-semibold tracking-tighter2 text-white md:text-[2.75rem]">{tier.price}</p>
                <p className="mt-1.5 text-xs font-medium text-white/[0.42] tracking-wide">{tier.tagline}</p>
              </div>
              <p className="relative mt-5 text-sm leading-7 text-white/[0.7]">{tier.description}</p>
              <div className="relative mt-8 h-px bg-gradient-to-r from-white/[0.18] via-white/[0.06] to-transparent" />
              <ul className="relative mt-8 flex-1 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/[0.78]">
                    <span className="mt-[0.65rem] h-px w-5 shrink-0 bg-white/[0.28]" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant={index === 0 ? "primary" : "secondary"} className="relative mt-9 w-full justify-center py-3.5">
                Demander mon press kit
              </Button>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
