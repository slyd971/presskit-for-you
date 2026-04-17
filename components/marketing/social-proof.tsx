import { testimonials } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

export function SocialProof() {
  return (
    <section className="section-divider section-wash py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Réassurance"
          title="Un service conçu pour inspirer confiance avant même le premier échange."
          description="Même sans énorme volume d’avis publics, le site peut déjà installer sérieux, clarté et niveau de gamme."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="panel-premium h-full rounded-[1.8rem] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <span key={starIndex} className="h-2.5 w-2.5 rounded-full bg-[#f4c26b]/90" />
                    ))}
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/55">
                    Avis client
                  </span>
                </div>
                <p className="mt-5 text-base leading-8 text-white/76">“{item.quote}”</p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 text-sm font-semibold text-white">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-white/48">{item.role}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
