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
    <section className="section-divider py-16 md:py-20" aria-labelledby="process-title">
      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          {showHeading ? (
            <SectionHeading
              eyebrow="Méthode"
              title="Un cadre court, assez précis pour avancer sans friction."
              description="Chaque étape sert à clarifier l’image, sélectionner les contenus utiles et livrer une page prête à partager."
              id="process-title"
            />
          ) : null}
          <div className="border-y border-white/[0.1]">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="grid gap-4 border-b border-white/[0.075] py-6 last:border-b-0 md:grid-cols-[7.5rem_1fr]">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/[0.38]">
                    {stepLabels[index]}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold leading-tight text-white">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/[0.66]">{step.description}</p>
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
