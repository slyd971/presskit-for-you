import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { liveExamplesCount, testimonials, videoTestimonial } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const proofStats = [
  { value: String(liveExamplesCount), label: "press kits en ligne" },
  { value: "7 jours", label: "max, après réception de tes contenus" },
  { value: "dès 300 €", label: "pour un press kit premium" },
];

export function ProofStats() {
  return (
    <section className="relative overflow-hidden bg-white py-16 text-ink-editorial md:py-14" aria-labelledby="proof-stats-title">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(16,20,29,0.075),transparent_28%)]" aria-hidden="true" />
      <PageShell>
        <div className="relative mx-auto mb-14 max-w-4xl text-center md:mb-20">
          <p className="text-[clamp(2.2rem,6vw,5rem)] font-semibold leading-[1.08] tracking-tighter2">
            <Reveal as="span" className="block">Une page de liens empile tes contenus.</Reveal>{" "}
            <Reveal as="span" delay={0.06} className="block">Un press kit les met en valeur.</Reveal>
          </p>
        </div>
        <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <h2 id="proof-stats-title" className="max-w-3xl text-3xl font-semibold leading-[1.04] tracking-tighter2 text-ink-editorial md:text-5xl">
              Ton activité, tes médias et tes références dans un seul lien
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-text-secondary-light md:text-lg">
              Il reflète ta personnalité et renforce ta crédibilité.
            </p>

            <div className="mt-9 grid gap-7 border-y border-ink-editorial/[0.12] py-7 text-left sm:grid-cols-3 md:mt-10">
              {proofStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-4xl font-semibold leading-none tracking-tighter2 text-ink-editorial md:text-5xl">{stat.value}</p>
                  <p className="mt-3 max-w-44 text-xs font-medium uppercase leading-5 tracking-label-tight text-text-muted-light">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[18rem] lg:min-h-[22rem]">
            <div className="product-drift mockup-surface absolute left-0 top-6 w-[82%] rotate-[-1.5deg] rounded-mockup-desktop border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1.5 shadow-[0_26px_80px_rgba(16,20,29,0.2),inset_0_1px_0_rgba(255,255,255,0.14)]">
              <div className="relative aspect-[91/60] overflow-hidden rounded-[0.62rem] bg-black">
                <Image
                  src="/gallery-previews/home-desktop/dj-slyd.webp"
                  alt="Press kit de DJ SLY'D, DJ, version desktop"
                  fill
                  sizes="(min-width: 1024px) 42vw, 82vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="product-drift-slow absolute bottom-0 right-4 w-[26%] min-w-[5rem] rotate-[4deg]">
              <div className="mockup-surface relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_22px_60px_rgba(16,20,29,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
                <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                  <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                  <Image
                    src="/gallery-previews/home-mobile/dj-slyd.webp"
                    alt="Press kit de DJ SLY'D, DJ, version mobile"
                    fill
                    sizes="(min-width: 1024px) 13vw, 26vw"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}

type Testimonial = (typeof testimonials)[number];

type TestimonialHeaderProps = { name: string; role: string; date?: string; url: string; image?: string };

// En-tête commun aux avis écrits et au témoignage vidéo.
function TestimonialHeader({ name, role, date, url, image }: TestimonialHeaderProps) {
  return (
    <div className="flex items-center gap-4 border-b border-white/[0.12] pb-5">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="h-14 w-14 shrink-0 rounded-full object-cover object-center ring-1 ring-white/15"
        />
      ) : null}
      <div>
        <p className="text-lg font-semibold leading-tight text-white">{name}</p>
        <p className="mt-1 text-sm font-medium text-white/[0.64]">{role}</p>
        {date && date !== "TODO" ? <p className="mt-0.5 text-xs text-white/[0.64]">{date}</p> : null}
      </div>
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="ml-auto shrink-0 text-xs font-semibold text-white/[0.74] underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
      >
        Voir son press kit
      </a>
    </div>
  );
}

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
      <article className="motion-line group flex h-full min-h-[24rem] flex-col border-y border-white/[0.12] bg-white/[0.04] px-5 py-6 shadow-[0_16px_54px_rgba(0,0,0,0.12)] hover:border-white/[0.24] hover:bg-white/[0.08] hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:min-h-[28rem] md:border md:border-white/[0.12] md:px-6 md:py-7">
        <TestimonialHeader name={item.name} role={item.role} date={item.date} url={item.url} image={item.image} />
        <p className="flex-1 pt-7 text-[1.05rem] font-medium leading-8 text-white/[0.84] md:text-[1.12rem] md:leading-9">
          &ldquo;{item.quote}&rdquo;
        </p>
      </article>
  );
}

// Carte vidéo : lecture uniquement au clic (preload="none"), ratio 9:16 réservé pour éviter tout décalage.
// À partir de 1024 px : vidéo à gauche, transcription à droite, sur toute la largeur de la grille.
function VideoTestimonialCard() {
  const item = videoTestimonial;

  return (
      <article id={item.id} className="motion-line group flex h-full min-h-[24rem] scroll-mt-28 flex-col border-y border-white/[0.12] bg-white/[0.04] px-5 py-6 shadow-[0_16px_54px_rgba(0,0,0,0.12)] hover:border-white/[0.24] hover:bg-white/[0.08] hover:shadow-[0_28px_90px_rgba(0,0,0,0.28)] md:min-h-[28rem] md:border md:border-white/[0.12] md:px-6 md:py-7 lg:grid lg:min-h-0 lg:grid-cols-[20rem_minmax(0,1fr)] lg:items-start lg:gap-x-12 lg:[&>:not(video)]:col-start-2">
        <TestimonialHeader name={item.name} role={item.role} date={item.date} url={item.url} />
        <video
          controls
          playsInline
          preload="none"
          poster={item.poster}
          width={720}
          height={1280}
          aria-label={item.label}
          className="mt-7 block aspect-[9/16] h-auto w-full bg-black lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
        >
          <source src={item.video} type="video/mp4" />
        </video>
        {/* Ordinateur : transcription affichée à côté de la vidéo. Mobile et tablette : repliable. */}
        <p className="hidden pt-7 text-[1.12rem] font-medium leading-9 text-white/[0.84] lg:block">&ldquo;{item.transcript}&rdquo;</p>
        <details className="acc group/transcript mt-5 border-t border-white/[0.12] lg:hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-white [&::-webkit-details-marker]:hidden">
            Lire la transcription
            <ChevronDown className="h-4 w-4 shrink-0 text-white/[0.64] transition-transform duration-200 group-open/transcript:rotate-180" aria-hidden="true" />
          </summary>
          <div className="acc-body">
            <p className="pb-2 text-sm leading-7 text-white/[0.64]">{item.transcript}</p>
          </div>
        </details>
      </article>
  );
}

export function SocialProof() {
  return (
    <section id="avis" className="section-divider section-wash scroll-mt-28 overflow-hidden py-16 md:py-32" aria-labelledby="social-proof-title">
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

        <Reveal className="mx-auto mt-10 max-w-[22rem] md:mt-12 lg:max-w-none" threshold={0.1}>
          <VideoTestimonialCard />
        </Reveal>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-12 md:grid md:snap-none md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {testimonials.map((item, index) => (
            <Reveal
              key={item.name}
              delay={index * 0.05}
              className="w-[86vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
              threshold={0.1}
            >
              <TestimonialCard item={item} />
            </Reveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-white/[0.64]">
          Avis recueillis directement auprès de clients ayant commandé un press kit.
        </p>
      </PageShell>
    </section>
  );
}
