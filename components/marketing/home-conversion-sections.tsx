import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const comparisonRows = [
  {
    current: "Un profil social disperse l'information dans les posts, les stories et la bio.",
    presskit: "Un press kit donne le contexte, les médias et le contact dans un ordre pensé pour décider vite.",
  },
  {
    current: "Un PDF rassure peu, circule mal sur mobile et devient vite obsolète.",
    presskit: "Une page vivante reste partageable, lisible et alignée avec votre image actuelle.",
  },
  {
    current: "Une liste de liens laisse le prospect reconstruire seul votre valeur.",
    presskit: "Une narration courte montre le niveau, les preuves et la prochaine action.",
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
                <span>Support classique</span>
                <span className="text-white/[0.78]">Press kit</span>
              </div>
              {comparisonRows.map((row) => (
                <div key={row.current} className="grid gap-5 border-b border-white/[0.07] py-6 last:border-b-0 md:grid-cols-2 md:gap-7">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/[0.36] md:hidden">
                      Support classique
                    </p>
                    <p className="text-sm leading-7 text-white/[0.54]">{row.current}</p>
                  </div>
                  <div className="relative border-l border-white/[0.14] pl-4 md:border-white/[0.2] md:pl-7">
                    <span className="absolute left-0 top-1 hidden h-6 w-px bg-white md:block" aria-hidden="true" />
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/[0.68] md:hidden">
                      Press kit
                    </p>
                    <p className="text-[15px] font-medium leading-7 text-white md:text-base md:leading-8">{row.presskit}</p>
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
