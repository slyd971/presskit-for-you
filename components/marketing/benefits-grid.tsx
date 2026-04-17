import { Sparkles, Link2, ShieldCheck, Gauge, Layers3, PenSquare } from "lucide-react";

import { benefits } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const icons = [Sparkles, Link2, ShieldCheck, Gauge, Layers3, PenSquare];

export function BenefitsGrid() {
  return (
    <section className="section-divider section-wash py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Pourquoi ça fonctionne"
          title="Un press kit pensé pour l’impact, pas juste pour faire joli."
          description="L’objectif est simple: rendre ta présentation plus forte, plus claire et plus facile à envoyer à la bonne personne."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <article className="panel-premium group h-full rounded-[1.75rem] p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 transition duration-300 group-hover:border-white/16 group-hover:bg-white/10">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mt-5 text-[11px] uppercase tracking-[0.24em] text-white/42">
                    Valeur percue
                  </p>
                  <h3 className="mt-5 text-xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/64">{benefit.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}
