import { testimonials } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

export function SocialProof() {
  return (
    <section className="section-divider section-wash py-24 md:py-32" aria-labelledby="social-proof-title">
      <PageShell>
        <SectionHeading
          eyebrow="Crédibilité"
          title="Des retours clients qui parlent surtout de justesse."
          description="Le press kit doit ressembler à la personne qu'il présente, tout en donnant un cadre plus professionnel à son activité."
          id="social-proof-title"
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.05}>
              <article className="border-t border-white/[0.12] pt-7">
                <p className="mt-5 text-[15px] leading-9 text-white/[0.84]">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-8">
                  <p className="font-medium text-white">{item.name}</p>
                  <p className="mt-1 text-sm text-white/48">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
