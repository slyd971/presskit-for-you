import { Sparkles, Link2, ShieldCheck, Gauge, Layers3, PenSquare } from "lucide-react";

import { benefits } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const icons = [Sparkles, Link2, ShieldCheck, Gauge, Layers3, PenSquare];

export function BenefitsGrid() {
  return (
    <section className="section-divider py-24 md:py-28" aria-labelledby="benefits-title">
      <PageShell>
        <SectionHeading
          eyebrow="Pourquoi ça fonctionne"
          title="Un format pense pour rassurer vite et donner envie d'aller plus loin."
          description="Chaque detail sert la meme chose : mieux presenter, mieux projeter et mieux convertir."
          id="benefits-title"
        />
        <div className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index];
            return (
              <Reveal key={benefit.title} delay={index * 0.05}>
                <article className="border-l border-white/10 pl-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-white/[0.88]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium leading-snug text-white">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/[0.64]">{benefit.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}
