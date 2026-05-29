import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const comparisonRows = [
  {
    current: "Un PDF présente quelques infos, mais reste statique, vite daté et peu engageant sur mobile.",
    presskit: "Un site vitrine met en scène votre univers, vos médias et vos preuves avec le bon niveau d'image.",
  },
  {
    current: "Un dossier classique liste un parcours, des dates, des visuels et des contacts.",
    presskit: "Un portfolio premium construit une perception : style, crédibilité, concept et envie de vous contacter.",
  },
  {
    current: "Un lien PDF demande au lecteur de reconstruire seul votre valeur ou celle de votre événement.",
    presskit: "Une page pensée pour convertir guide le regard vers l'essentiel : niveau, proposition, preuves, action.",
  },
];

export function ComparisonSection() {
  return (
    <section className="section-divider py-20 md:py-24" aria-labelledby="comparison-title">
      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Positionnement"
            title="Le bon lien ne liste pas vos contenus. Il met votre niveau en scène."
            description="Un booker, un client ou un partenaire doit comprendre vite qui vous êtes, ce que vous proposez, ou le concept que vous voulez faire vivre."
            id="comparison-title"
          />
          <Reveal delay={0.08}>
            <div className="border-y border-white/[0.1]">
              <div className="hidden grid-cols-2 border-b border-white/[0.1] py-4 text-[11px] font-semibold uppercase tracking-[0.22em] md:grid">
                <span className="text-white/[0.5]">Supports classiques</span>
                <span className="text-white">Press kit premium</span>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.current} className="grid gap-5 border-b border-white/[0.07] py-6 last:border-b-0 md:grid-cols-2 md:gap-7">
                  <div className="md:pr-4">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/[0.36] md:hidden">
                      Supports classiques
                    </p>
                    <p className="text-sm leading-7 text-white/[0.62]">{row.current}</p>
                  </div>
                  <div className="relative border-l border-white/[0.22] pl-4 md:border-white/[0.36] md:pl-7">
                    <span className="absolute left-0 top-1 hidden h-8 w-px bg-white md:block" aria-hidden="true" />
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:hidden">
                      Press kit premium
                    </p>
                    <p className="text-[15px] font-semibold leading-7 text-white md:text-[1.05rem] md:leading-8">{row.presskit}</p>
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
