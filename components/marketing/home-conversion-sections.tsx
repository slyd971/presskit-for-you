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
            <h2 id="comparison-title" className="text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
              Faire impression dès les premières secondes
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/[0.64] md:text-lg">
              Un press kit transforme tes infos en présentation claire, crédible et prête à convaincre.
            </p>
          </div>

          {/* Page A4 figée -> carte de press kit responsive, pilotée par le scroll (CSS view()). Décoratif. */}
          <div className="compare-visual relative mx-auto mt-8 h-[200px] w-full max-w-[22rem] md:mt-10" aria-hidden="true">
            <div className="compare-pdf absolute inset-0 items-center justify-center">
              <div className="flex aspect-[1/1.414] h-full flex-col gap-2 rounded-lg border border-white/[0.12] bg-mist p-3">
                <span className="block h-2.5 w-3/5 rounded-sm bg-ink-editorial/[0.55]" />
                <span className="block h-1.5 w-full rounded-sm bg-ink-editorial/[0.28]" />
                <span className="block h-1.5 w-11/12 rounded-sm bg-ink-editorial/[0.28]" />
                <span className="block h-1.5 w-4/5 rounded-sm bg-ink-editorial/[0.28]" />
                <span className="mt-1 block h-14 w-full rounded-sm bg-ink-editorial/[0.16]" />
                <span className="block h-1.5 w-full rounded-sm bg-ink-editorial/[0.28]" />
                <span className="block h-1.5 w-2/3 rounded-sm bg-ink-editorial/[0.28]" />
              </div>
            </div>
            <div className="compare-kit absolute inset-0">
              <div className="relative h-full overflow-visible rounded-mockup-desktop border border-white/[0.12] bg-surface-800 p-3 shadow-panel">
                <div className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-steel" />
                  <span className="h-1.5 w-8 rounded-sm bg-white/[0.24]" />
                  <span className="h-1.5 w-8 rounded-sm bg-white/[0.24]" />
                  <span className="h-1.5 w-8 rounded-sm bg-white/[0.24]" />
                </div>
                <div className="mt-3 grid grid-cols-[1fr_0.8fr] gap-3">
                  <div>
                    <span className="block h-3 w-4/5 rounded-sm bg-white/[0.9]" />
                    <span className="mt-2 block h-1.5 w-full rounded-sm bg-white/[0.36]" />
                    <span className="mt-1.5 block h-1.5 w-3/4 rounded-sm bg-white/[0.36]" />
                    <span className="mt-3 block h-5 w-20 rounded-lg bg-paper" />
                  </div>
                  <span className="block h-20 rounded-sm bg-white/[0.1]" />
                </div>
                <div className="mt-3 grid grid-cols-3 gap-2">
                  <span className="block h-10 rounded-sm bg-white/[0.08]" />
                  <span className="block h-10 rounded-sm bg-white/[0.08]" />
                  <span className="block h-10 rounded-sm bg-white/[0.08]" />
                </div>
                <div className="absolute -bottom-3 right-4 h-24 w-12 rounded-lg border border-steel bg-surface-900 p-1.5">
                  <span className="block h-1.5 w-3/5 rounded-sm bg-white/[0.9]" />
                  <span className="mt-1.5 block h-8 rounded-sm bg-white/[0.1]" />
                  <span className="mt-1.5 block h-1 w-full rounded-sm bg-white/[0.36]" />
                  <span className="mt-1 block h-1 w-4/5 rounded-sm bg-white/[0.36]" />
                  <span className="mt-2 block h-3 w-full rounded-sm bg-paper" />
                </div>
              </div>
            </div>
          </div>

          <Reveal delay={0.08}>
            <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 pb-5 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
              {comparisonRows.map((row) => (
                <article
                  key={row.current}
                  className="w-[84vw] max-w-[21.5rem] shrink-0 snap-start border-y border-white/[0.12] bg-white/[0.04] px-5 py-6"
                >
                  <h3 className="max-w-[17rem] text-2xl font-semibold leading-tight tracking-tighter2 text-white">
                    {row.criterion}
                  </h3>
                  <div className="mt-7 space-y-5">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-label text-white/[0.64]">
                        Support classique
                      </p>
                      <p className="text-sm leading-7 text-white/[0.64]">{row.current}</p>
                    </div>
                    <div className="border-t border-white/[0.12] pt-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-label text-white">
                        Press kit
                      </p>
                      <p className="text-base font-semibold leading-7 text-white">{row.presskit}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 hidden overflow-hidden border-y border-white/[0.12] md:block">
              <div className="grid grid-cols-[0.52fr_1fr_1fr] border-b border-white/[0.12]">
                <div className="px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-label text-white/[0.64]">
                    Critère
                  </p>
                </div>
                <div className="border-l border-white/[0.12] px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-label text-white/[0.64]">
                    Supports classiques
                  </p>
                </div>
                <div className="border-l border-white/[0.18] bg-white/[0.04] px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-label text-white">
                    Press kit premium
                  </p>
                </div>
              </div>
              {comparisonRows.map((row) => (
                <div
                  key={row.current}
                  className="motion-line grid grid-cols-[0.52fr_1fr_1fr] border-b border-white/[0.08] last:border-b-0"
                >
                  <div className="px-6 py-7">
                    <p className="text-lg font-semibold leading-7 text-white">
                      {row.criterion}
                    </p>
                  </div>
                  <div className="border-l border-white/[0.12] px-6 py-7">
                    <p className="text-base leading-8 text-white/[0.64]">{row.current}</p>
                  </div>
                  <div className="relative border-l border-white/[0.18] bg-white/[0.04] px-6 py-7 shadow-[inset_1px_0_0_rgba(255,255,255,0.12)]">
                    <span className="absolute left-0 top-7 h-8 w-px bg-white/70" aria-hidden="true" />
                    <p className="text-[clamp(1rem,1.45vw,1.18rem)] font-semibold leading-8 text-white">{row.presskit}</p>
                  </div>
                </div>
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
