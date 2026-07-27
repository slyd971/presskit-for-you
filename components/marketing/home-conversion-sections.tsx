import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const comparisonRows = [
  {
    current: "Un PDF présente quelques infos, mais reste statique, vite daté et peu engageant sur mobile.",
    presskit: "Une page web rassemble votre bio, vos photos, vos vidéos, vos liens et votre contact dans un format agréable à consulter.",
  },
  {
    current: "Un Linktree aligne des boutons. Il aide à sortir, mais ne raconte pas votre niveau.",
    presskit: "Un press kit met vos preuves dans le bon ordre : univers, médias, chiffres, références, contact.",
  },
  {
    current: "Un lien PDF demande au lecteur de reconstruire seul votre valeur ou celle de votre événement.",
    presskit: "Le visiteur ressent d’abord la crédibilité, puis trouve naturellement l’action à faire.",
  },
];

export function ComparisonSection() {
  return (
    <section className="section-divider section-tone-cool py-24 md:py-32" aria-labelledby="comparison-title">
      <PageShell>
        <div className="grid gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <SectionHeading
            eyebrow="Positionnement"
            title="Votre visiteur doit comprendre vite qui vous êtes et pourquoi vous contacter."
            description="Un booker, un client ou un partenaire doit comprendre vite qui vous êtes, ce que vous proposez, ou le concept que vous voulez faire vivre."
            id="comparison-title"
          />
          <Reveal delay={0.08}>
            <div className="border-y border-white/[0.12]">
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
                    <p className="text-sm leading-7 text-white/[0.7] md:max-w-sm">{row.current}</p>
                  </div>
                  <div className="relative border-l border-white/[0.22] pl-5 md:pl-7">
                    <span className="absolute left-0 top-1 h-10 w-px bg-white/60" aria-hidden="true" />
                    <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
                      Press kit premium
                    </p>
                    <p className="text-[clamp(1rem,1.6vw,1.25rem)] font-semibold leading-8 text-white">{row.presskit}</p>
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
