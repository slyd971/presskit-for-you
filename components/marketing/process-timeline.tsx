import { processSteps } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const stepLabels = ["Cadrage", "Style", "Build", "Live"];

type ProcessTimelineProps = {
  showHeading?: boolean;
};

export function ProcessTimeline({ showHeading = true }: ProcessTimelineProps) {
  return (
    <section id="methode" className="section-tone-cool scroll-mt-28 pt-10 pb-16 md:pt-12 md:pb-20" aria-labelledby="process-title">
      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          {showHeading ? (
            <SectionHeading
              eyebrow="Méthode"
              title="On part de vos contenus, puis on construit la page."
              description="Brief, direction visuelle, intégration et mise en ligne : chaque étape sert à transformer vos textes, images et liens en press kit prêt à envoyer."
              id="process-title"
            />
          ) : null}
          <div className="relative border-y border-white/[0.1]">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="motion-line group grid gap-3 border-b border-white/[0.075] py-5 last:border-b-0 md:grid-cols-[4.5rem_7.5rem_1fr] md:gap-4 md:px-4 md:py-6">
                  <div className="flex items-center gap-3 md:block">
                    <p className="editorial-number text-3xl font-semibold leading-none tracking-tighter2 md:text-4xl">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.56] md:hidden">
                      {stepLabels[index]}
                    </p>
                  </div>
                  <p className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.56] md:block md:pt-1">
                    {stepLabels[index]}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-white/[0.74] md:mt-3">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </PageShell>
    </section>
  );
}
