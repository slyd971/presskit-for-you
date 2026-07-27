import { Category } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type CategoryContentProps = {
  category: Category;
};

export function CategoryContent({ category }: CategoryContentProps) {
  return (
    <>
      <section className="py-20">
        <PageShell>
          <SectionHeading
            eyebrow={`Pourquoi ${category.shortName}`}
            title={`Ce que ce format change concrètement pour un profil ${category.shortName.toLowerCase()}.`}
            description={category.description}
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {category.benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={index * 0.06}>
                <div className="rounded-lg border border-white/10 bg-white/[0.04] p-6">
                  <h3 className="text-2xl font-semibold text-white">{benefit.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/66">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="py-20">
        <PageShell className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/46">Inclus dans le press kit</p>
            <ul className="mt-6 space-y-4">
              {category.includes.map((item) => (
                <li key={item} className="rounded-lg border border-white/8 bg-white/[0.03] px-4 py-3 text-sm text-white/76">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-7">
            <p className="text-xs uppercase tracking-[0.28em] text-white/46">Exemples de blocs</p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {category.modules.map((module) => (
                <div key={module} className="rounded-lg border border-white/8 bg-[#0d1016] p-5">
                  <p className="text-lg font-medium text-white">{module}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-white/8 bg-white/[0.03] p-5">
              <p className="text-sm uppercase tracking-[0.22em] text-white/44">Direction visuelle</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {category.sampleHighlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 px-4 py-2 text-sm text-white/72"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </PageShell>
      </section>

      <section className="py-20">
        <PageShell>
          <div className="rounded-lg border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:flex md:items-end md:justify-between md:gap-10">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">Passer à l’action</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tighter2 text-white">
                Prêt à créer un press kit {category.shortName.toLowerCase()} plus crédible et plus premium ?
              </h2>
              <p className="mt-4 text-base leading-8 text-white/66">
                On peut cadrer une version adaptée à ton activité, tes contenus et l’image que tu veux envoyer.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <Button href="/#contact">Lancer mon projet</Button>
            </div>
          </div>
        </PageShell>
      </section>
    </>
  );
}
