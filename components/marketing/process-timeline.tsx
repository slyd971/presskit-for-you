import { processSteps } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

export function ProcessTimeline() {
  return (
    <section className="section-divider py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Process"
          title="Un déroulé simple, fluide et cadré du brief à la mise en ligne."
          description="Le service est pensé pour aller droit au but, avec un rendu premium sans complexifier le parcours."
        />
        <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
          <div className="absolute left-10 right-10 top-10 hidden h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,145,82,0.25),rgba(255,255,255,0.05))] lg:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="panel-premium relative h-full rounded-[1.8rem] p-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,145,82,0.16),rgba(255,255,255,0.04))] text-xl font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div className="h-px flex-1 bg-white/10 lg:hidden" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
