import { testimonials } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const proofStats = [
  { value: "7 jours", label: "ouvrés maximum pour la livraison" },
  { value: "+ de 10", label: "exemples réels déjà en ligne" },
  { value: "1 lien", label: "prêt à envoyer aux bons contacts" },
];

export function ProofStats() {
  return (
    <section className="bg-white py-10 text-[#10141d] md:py-10" aria-labelledby="proof-stats-title">
      <PageShell>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="proof-stats-title" className="mx-auto max-w-3xl text-3xl font-semibold leading-[1.04] tracking-tighter2 text-[#10141d] md:text-5xl">
            Des clients qui repartent avec un lien clair, pro et prêt à envoyer.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#4d5561] md:text-lg">
            Le press kit doit ressembler à la personne qu'il présente, tout en donnant un cadre plus professionnel à son activité.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl gap-5 text-center md:mt-9 md:grid-cols-3">
          {proofStats.map((stat) => (
            <div key={stat.value} className="px-4 py-3">
              <p className="text-5xl font-semibold leading-none tracking-tighter2 text-[#10141d] md:text-6xl">{stat.value}</p>
              <p className="mx-auto mt-3 max-w-44 text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#5d6470]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </PageShell>
    </section>
  );
}

export function SocialProof() {
  return (
    <section id="avis" className="section-divider section-wash scroll-mt-28 py-20 md:py-32" aria-labelledby="social-proof-title">
      <PageShell>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeading
            eyebrow="Témoignages"
            title="Témoignages de nos clients"
            description="Ils parlent de clarté, de crédibilité et d'un rendu plus professionnel pour présenter leur travail."
            id="social-proof-title"
            align="center"
          />
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-12 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.05}
              className="w-[86vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <article className="motion-line flex h-full min-h-[24rem] flex-col border-y border-white/[0.12] bg-white/[0.035] px-5 py-6 md:min-h-[28rem] md:border md:border-white/[0.1] md:px-6 md:py-7">
                <div className="border-b border-white/[0.1] pb-5">
                  <p className="text-lg font-semibold leading-tight text-white">{item.name}</p>
                </div>
                <p className="flex-1 pt-7 text-[1.05rem] font-medium leading-8 text-white/[0.84] md:text-[1.12rem] md:leading-9">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-8 border-t border-white/[0.1] pt-5">
                  <p className="text-sm font-medium text-white/[0.58]">{item.role}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
