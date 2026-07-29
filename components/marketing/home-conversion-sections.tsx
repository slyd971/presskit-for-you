import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

const comparisonRows = [
  {
    title: "Le PDF donne des infos. La page donne envie.",
    current: "Un PDF présente quelques infos, mais reste statique, vite daté et peu engageant sur mobile.",
    presskit: "Une page web qui centralise votre bio, vos photos, vos vidéos, vos liens et vos coordonnées dans un format clair et structuré.",
  },
  {
    title: "Un lien ne suffit pas quand il faut convaincre.",
    current: "Un Linktree aligne des liens, mais ne donne pas d'information en profondeur.",
    presskit: "Un press kit guide naturellement le visiteur à travers votre univers, vos réalisations, vos références et vos coordonnées.",
  },
  {
    title: "Le visiteur doit comprendre avant de chercher.",
    current: "Instagram montre ce que vous publiez.",
    presskit: "Un press kit montre qui vous êtes.",
  },
];

export function ComparisonSection() {
  return (
    <section className="section-divider section-tone-cool py-20 md:py-32" aria-labelledby="comparison-title">
      <PageShell>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
            <h2 id="comparison-title" className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
              Faire impression dès les premières secondes
            </h2>
            <div className="mt-9 hidden max-w-md border-y border-white/[0.1] py-6 lg:block">
              <div className="grid grid-cols-[0.82fr_1.18fr] items-center gap-5">
                <div className="comparison-pdf-fade space-y-3 border border-white/[0.1] bg-white/[0.035] p-4">
                  <span className="block h-3 w-20 bg-white/56" />
                  <span className="block h-2 w-32 bg-white/22" />
                  <span className="block h-2 w-28 bg-white/16" />
                  <span className="block h-2 w-24 bg-white/14" />
                </div>
                <div className="comparison-kit-rise border border-white/[0.16] bg-white/[0.07] p-4">
                  <span className="block h-3 w-28 bg-white" />
                  <span className="mt-3 block h-2 w-36 bg-white/28" />
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    <span className="h-14 bg-white/[0.13]" />
                    <span className="h-14 bg-white/[0.09]" />
                  </div>
                  <span className="mt-4 block h-7 w-24 bg-white" />
                </div>
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/[0.42]">
                Du fichier consulté au lien qui convainc
              </p>
            </div>
          </div>
          <Reveal delay={0.08}>
            <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
              {comparisonRows.map((row, index) => (
                <article
                  key={row.current}
                  className="w-[84vw] max-w-[21.5rem] shrink-0 snap-start border-y border-white/[0.12] bg-white/[0.045] px-5 py-6"
                >
                  <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-white/[0.48]">
                    <p>Cas {String(index + 1).padStart(2, "0")}</p>
                    <span className="h-px w-12 bg-white/[0.18]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 max-w-[17rem] text-2xl font-semibold leading-tight tracking-tighter2 text-white">
                    {row.title}
                  </h3>
                  <div className="mt-7 space-y-5">
                    <div>
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/[0.44]">
                        Support classique
                      </p>
                      <p className={index === 2 ? "text-lg font-semibold leading-7 text-white/[0.86]" : "text-sm leading-7 text-white/[0.68]"}>{row.current}</p>
                    </div>
                    <div className="border-t border-white/[0.14] pt-5">
                      <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
                        Press kit
                      </p>
                      <p className={index === 2 ? "text-xl font-semibold leading-8 text-white" : "text-base font-semibold leading-7 text-white"}>{row.presskit}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="hidden border-y border-white/[0.12] md:block">
              {comparisonRows.map((row, index) => (
                <div
                  key={row.current}
                  className="motion-line grid gap-6 border-b border-white/[0.08] py-7 last:border-b-0 md:grid-cols-[5rem_1fr_1.08fr] md:py-8"
                >
                  <p className="editorial-number text-4xl font-semibold leading-none tracking-tighter2 md:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/[0.54]">
                      Supports classiques
                    </p>
                    <p className={index === 2 ? "text-xl font-semibold leading-8 text-white md:max-w-sm md:text-2xl md:leading-9" : "text-sm leading-7 text-white/[0.7] md:max-w-sm"}>{row.current}</p>
                  </div>
                  <div className="relative border-l border-white/[0.22] pl-5 md:pl-7">
                    <span className="absolute left-0 top-1 h-10 w-px bg-white/60" aria-hidden="true" />
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                      Press kit premium
                    </p>
                    <p className={index === 2 ? "text-xl font-semibold leading-8 text-white md:text-2xl md:leading-9" : "text-[clamp(1rem,1.6vw,1.25rem)] font-semibold leading-8 text-white"}>{row.presskit}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </PageShell>
    </section>
  );
}
