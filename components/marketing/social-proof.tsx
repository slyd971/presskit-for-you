import Image from "next/image";

import { testimonials } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const proofStats = [
  { value: "7", label: "jours ouvrés maximum pour la livraison" },
  { value: "+ de 10", label: "exemples réels déjà en ligne" },
  { value: "1 lien", label: "prêt à envoyer aux bons contacts" },
  { value: "100%", label: "responsive mobile, tablette et desktop" },
  { value: "SEO", label: "structure optimisée pour le référencement" },
  { value: "MAJ", label: "contenus faciles à faire évoluer" },
];

export function ProofStats() {
  return (
    <section className="relative overflow-hidden bg-white py-14 text-[#10141d] md:py-18" aria-labelledby="proof-stats-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,20,29,0.075),transparent_28%)]" aria-hidden="true" />
      <PageShell>
        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 id="proof-stats-title" className="max-w-3xl text-3xl font-semibold leading-[1.04] tracking-tighter2 text-[#10141d] md:text-5xl">
              Une carte de visite digitale, accessible en un seul lien, prête à être partagée.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#4d5561] md:text-lg">
              {"Le press kit doit refléter la personnalité de la personne qu'il présente, tout en renforçant la crédibilité de son activité"}
            </p>

            <div className="mt-9 grid gap-7 border-y border-[#10141d]/[0.1] py-7 text-left sm:grid-cols-[0.92fr_1.08fr] md:mt-10">
              <div>
                <p className="text-[clamp(7rem,18vw,12rem)] font-semibold leading-[0.78] tracking-tighter2 text-[#10141d]">{proofStats[0].value}</p>
                <p className="mt-4 max-w-40 text-xs font-semibold uppercase leading-5 tracking-[0.18em] text-[#5d6470]">
                  {proofStats[0].label}
                </p>
              </div>
              <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
                {proofStats.slice(1).map((stat) => (
                  <div key={stat.value}>
                    <p className="text-4xl font-semibold leading-none tracking-tighter2 text-[#10141d] md:text-5xl">{stat.value}</p>
                    <p className="mt-3 max-w-44 text-xs font-medium uppercase leading-5 tracking-[0.18em] text-[#5d6470]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[18rem] lg:min-h-[22rem]">
            <div className="product-drift absolute left-0 top-6 w-[82%] rotate-[-1.5deg] border border-[#10141d]/[0.12] bg-[#080b11] p-2 shadow-[0_26px_80px_rgba(16,20,29,0.2)]">
              <div className="relative aspect-[91/60] overflow-hidden bg-black">
                <Image
                  src="/gallery-previews/home-desktop/dj-slyd.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 42vw, 82vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="product-drift-slow absolute bottom-0 right-4 w-[26%] min-w-[5rem] rotate-[4deg] border border-[#10141d]/[0.16] bg-[#080b11] p-1.5 shadow-[0_22px_60px_rgba(16,20,29,0.22)]">
              <div className="relative aspect-[0.48/1] overflow-hidden bg-black">
                <Image
                  src="/gallery-previews/home-mobile/dj-slyd.webp"
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 13vw, 26vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}

export function SocialProof() {
  return (
    <section id="avis" className="section-divider section-wash scroll-mt-28 overflow-hidden py-20 md:py-32" aria-labelledby="social-proof-title">
      <div
        className="pointer-events-none absolute inset-0 opacity-45"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 18% 22%, rgba(255,255,255,0.08) 0 1px, transparent 1.5px), radial-gradient(circle at 74% 64%, rgba(255,255,255,0.045) 0 1px, transparent 1.5px), linear-gradient(135deg, rgba(255,255,255,0.05) 0 1px, transparent 1px)",
          backgroundSize: "17px 19px, 29px 31px, 86px 86px",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-44 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.09),transparent_68%)]" aria-hidden="true" />
      <PageShell className="relative">
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
              <article className="motion-line group flex h-full min-h-[24rem] flex-col border-y border-white/[0.12] bg-white/[0.045] px-5 py-6 shadow-[0_16px_54px_rgba(0,0,0,0.12)] hover:border-white/[0.24] hover:bg-white/[0.075] hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:min-h-[28rem] md:border md:border-white/[0.1] md:px-6 md:py-7">
                <div className="flex items-center gap-4 border-b border-white/[0.1] pb-5">
                  {"image" in item && item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      width={56}
                      height={56}
                      className="h-14 w-14 shrink-0 rounded-full object-cover object-center ring-1 ring-white/15"
                    />
                  ) : null}
                  <div>
                    <p className="text-lg font-semibold leading-tight text-white">{item.name}</p>
                    <p className="mt-1 text-sm font-medium text-white/[0.58]">{item.role}</p>
                  </div>
                </div>
                <p className="flex-1 pt-7 text-[1.05rem] font-medium leading-8 text-white/[0.84] md:text-[1.12rem] md:leading-9">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
