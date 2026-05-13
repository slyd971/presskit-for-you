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
    <section className="section-divider bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,145,82,0.08),transparent_58%)] py-16 md:py-20" aria-labelledby="process-title">
      <PageShell>
        {showHeading ? (
          <SectionHeading
            eyebrow="Process"
            title="Un déroulé simple, fluide et cadré du brief à la mise en ligne."
            description="Le service est pensé pour aller droit au but, avec un rendu premium sans complexifier le parcours."
            id="process-title"
          />
        ) : null}
        <div className={`relative grid gap-5 lg:grid-cols-4 ${showHeading ? "mt-14" : "mt-0"}`}>
          <div className="absolute left-10 right-10 top-10 hidden h-px bg-[linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,145,82,0.28),rgba(255,255,255,0.05))] lg:block" />
          {processSteps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.06}>
              <div className="panel-premium group relative h-full rounded-[1.8rem] p-7">
                <div className="pointer-events-none absolute -right-4 -top-5 text-8xl font-semibold tracking-tighter2 text-white/[0.035] transition duration-300 group-hover:text-white/[0.06]">
                  0{index + 1}
                </div>
                <div className="relative flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.14] bg-[linear-gradient(180deg,rgba(255,145,82,0.2),rgba(255,255,255,0.055))] text-xl font-semibold text-white shadow-[0_16px_40px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.08)]">
                    0{index + 1}
                  </div>
                  <div className="h-px flex-1 bg-white/10 lg:hidden" />
                </div>
                <p className="relative mt-7 text-[10px] font-semibold uppercase tracking-[0.24em] text-white/[0.45]">
                  {stepLabels[index]}
                </p>
                <h3 className="relative mt-3 text-2xl font-semibold leading-tight text-white">{step.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-white/[0.68]">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
