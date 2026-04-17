import { Check } from "lucide-react";

import { pricingTiers } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function PricingTable() {
  return (
    <section className="py-16 md:py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Tarifs"
          title="Des formats clairs selon le niveau d’ambition du projet."
          description="Les tarifs donnent un cadre. Le rendu final dépend ensuite du volume de contenu, du niveau de custom et du nombre de pages."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <article
              key={tier.name}
              className={`rounded-[2rem] border p-7 ${
                index === 1
                  ? "border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))]"
                  : "border-white/10 bg-white/[0.035]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                <span className="rounded-full border border-white/12 bg-white/6 px-3 py-1 text-xs text-white/70">
                  {tier.badge}
                </span>
              </div>
              <p className="mt-6 text-4xl font-semibold text-white">{tier.price}</p>
              <p className="mt-4 text-sm leading-7 text-white/66">{tier.description}</p>
              <ul className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-white/78">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button href="/contact" className="mt-8 w-full justify-center">
                Demander mon press kit
              </Button>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
