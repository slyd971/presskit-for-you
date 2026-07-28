import { processSteps } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";
import { ChevronDown } from "lucide-react";

const stepLabels = ["Cadrage", "Style", "Build", "Live"];

type ProcessTimelineProps = {
  showHeading?: boolean;
};

export function ProcessTimeline({ showHeading = true }: ProcessTimelineProps) {
  return (
    <section id="methode" className="scroll-mt-28 bg-white py-16 text-[#10141d] md:py-18" aria-labelledby="process-title">
      <PageShell>
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          {showHeading ? (
            <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
              <h2 id="process-title" className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-[#10141d] md:text-5xl">
                On part de vos contenus, puis on construit la page.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#4d5561] md:text-lg">
                Brief, direction visuelle, intégration et mise en ligne : chaque étape sert à transformer vos textes, images et liens en press kit prêt à envoyer.
              </p>
            </div>
          ) : null}
          <div className="relative border-y border-[#10141d]/[0.12]">
            {processSteps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.06}>
                <details className="motion-line group border-b border-[#10141d]/[0.08] py-5 [--motion-line-color:rgba(16,20,29,0.32)] [--motion-line-hover:rgba(16,20,29,0.035)] last:border-b-0 md:px-4 md:py-6">
                  <summary className="grid cursor-pointer list-none gap-3 pr-1 [&::-webkit-details-marker]:hidden md:grid-cols-[4.5rem_7.5rem_1fr_1.5rem] md:gap-4">
                    <div className="flex items-center gap-3 md:block">
                      <p className="text-3xl font-semibold leading-none tracking-tighter2 text-[#10141d]/35 md:text-4xl">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5d6470] md:hidden">
                        {stepLabels[index]}
                      </p>
                    </div>
                    <p className="hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-[#5d6470] md:block md:pt-1">
                      {stepLabels[index]}
                    </p>
                    <h3 className="text-xl font-semibold leading-tight text-[#10141d]">{step.title}</h3>
                    <ChevronDown className="h-5 w-5 self-center text-[#10141d]/45 transition duration-300 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[#4d5561] md:ml-[12rem] md:mt-3 md:pr-10">
                    {step.description}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </PageShell>
    </section>
  );
}
