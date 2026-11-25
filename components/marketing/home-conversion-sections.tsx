import { Check } from "lucide-react";

import { CTA } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

const comparisonRows = [
  {
    criterion: "Clarté",
    current: "Des informations dispersées ou figées dans un PDF.",
    presskit: "Le visiteur comprend vite qui tu es, ce que tu fais et comment te contacter.",
  },
  {
    criterion: "Crédibilité",
    current: "Une présentation basique, souvent trop courte pour convaincre.",
    presskit: "Un univers premium qui montre ton niveau dès le premier clic.",
  },
  {
    criterion: "Mobile",
    current: "Un PDF s'ouvre dans un lecteur à part, une page de liens renvoie vers d'autres sites.",
    presskit: "Une page responsive, propre sur mobile, tablette et ordinateur.",
  },
  {
    criterion: "Référencement",
    current: "Un profil Instagram, un PDF ou un Linktree sont peu visibles dans Google.",
    presskit: "Une vraie page web, que Google peut afficher quand on cherche ton nom.",
  },
  {
    criterion: "Mise à jour",
    current: "Un PDF déjà envoyé garde l'ancienne version.",
    presskit: "Le même lien affiche toujours ta dernière version.",
  },
];

export function ComparisonSection() {
  return (
    <section className="section-divider section-tone-cool py-16 md:py-32" aria-labelledby="comparison-title">
      <PageShell>
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <h2 id="comparison-title" className="text-3xl font-semibold leading-[1.08] md:leading-[1.08] tracking-tighter2 text-white md:text-5xl">
              Faire impression dès les premières secondes
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-8 text-white/[0.64] md:text-lg">
              Un press kit transforme tes infos en présentation claire, crédible et prête à convaincre.
            </p>
          </div>

          <Reveal delay={0.08}>
            {/* Une seule liste : rail de cartes sur mobile, tableau à partir de md. */}
            <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 pb-5 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-14 md:block md:snap-none md:overflow-hidden md:rounded-lg md:border md:border-white/[0.12] md:p-0 [&::-webkit-scrollbar]:hidden">
              <div className="hidden grid-cols-[minmax(11rem,0.52fr)_1fr_1fr] border-b border-white/[0.12] text-xs font-semibold uppercase tracking-label md:grid" aria-hidden="true">
                <p className="px-6 py-5 text-white/[0.64]">Critère</p>
                <p className="border-l border-white/[0.12] px-6 py-5 text-white/[0.64]">Supports classiques</p>
                <p className="border-l border-white/[0.24] bg-white/[0.055] px-6 py-5 text-white">Press kit premium</p>
              </div>
              {comparisonRows.map((row) => (
                <article
                  key={row.criterion}
                  className="w-[84vw] max-w-[21.5rem] shrink-0 snap-start border-y border-white/[0.12] bg-white/[0.04] px-5 py-6 md:grid md:w-auto md:max-w-none md:grid-cols-[minmax(11rem,0.52fr)_1fr_1fr] md:border-t-0 md:border-white/[0.08] md:bg-transparent md:p-0 md:last:border-b-0"
                >
                  <h3 className="max-w-[17rem] text-2xl font-semibold leading-tight tracking-tighter2 text-white md:px-6 md:py-7 md:text-lg md:leading-7 md:tracking-normal">
                    {row.criterion}
                  </h3>
                  <div className="mt-7 md:mt-0 md:border-l md:border-white/[0.12] md:px-6 md:py-7">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-label text-white/[0.64] md:sr-only">
                      Support classique
                    </p>
                    <p className="text-sm leading-7 text-white/[0.64] md:text-base md:leading-8">{row.current}</p>
                  </div>
                  <div className="mt-5 border-t border-white/[0.12] pt-5 md:mt-0 md:border-l md:border-t-0 md:border-white/[0.24] md:bg-white/[0.055] md:px-6 md:py-7">
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-label text-white md:sr-only">Press kit</p>
                    <div className="flex items-start gap-3">
                      <Check className="mt-1.5 h-4 w-4 shrink-0 text-white md:mt-2" strokeWidth={2.5} aria-hidden="true" />
                      <p className="text-base font-semibold leading-7 text-white md:text-[clamp(1rem,1.45vw,1.18rem)] md:leading-8">{row.presskit}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <Button arrow href="#contact" className="min-h-12 w-full justify-center px-7 py-4 text-[15px] sm:w-auto">
                {CTA.primary}
              </Button>
            </div>
          </Reveal>
        </div>
      </PageShell>
    </section>
  );
}
