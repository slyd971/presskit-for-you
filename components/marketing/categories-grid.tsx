"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const homeExamples = [
  {
    slug: "melymelow",
    title: "MelyMelow",
    category: "Artiste peintre",
    exampleName: "MelyMelow",
    description: "Un press kit artiste peintre pour exposer un univers résine, acrylique, œuvres et contact pro.",
    desktopImage: "/gallery-previews/home-desktop/melymelow.png",
    mobileImage: "/gallery-previews/home-mobile/melymelow.png",
    externalDemoUrl: "https://presskit.melymelow.art/",
    accent: "#F4C26B",
    gradient: "from-[#F4C26B]/28 via-[#F46B8D]/12 to-transparent",
  },
  {
    slug: "sherin",
    title: "Sherin",
    category: "Chanteuse",
    exampleName: "Sherin",
    description: "Un press kit chanteuse pour annoncer une sortie, présenter les médias, les chiffres et le booking.",
    desktopImage: "/gallery-previews/home-desktop/sherin.png",
    mobileImage: "/gallery-previews/home-mobile/sherin.png",
    externalDemoUrl: "https://sherin.presskit.fr/",
    accent: "#F4C26B",
    gradient: "from-[#F4C26B]/28 via-[#F46B8D]/12 to-transparent",
  },
  {
    slug: "krimo",
    title: "KRIMO",
    category: "Danseur",
    exampleName: "KRIMO",
    description: "Un press kit danseur immersif pour performance, collectif, engagement social et collaborations.",
    desktopImage: "/gallery-previews/home-desktop/krimo.png",
    mobileImage: "/gallery-previews/home-mobile/krimo.png",
    externalDemoUrl: "https://krimo-dancer.presskit.fr/",
    accent: "#D5A928",
    gradient: "from-[#D5A928]/28 via-[#63E6BE]/12 to-transparent",
  },
  {
    slug: "dj-mack",
    title: "DJ MACK",
    category: "DJ",
    exampleName: "DJ MACK",
    description: "Un press kit DJ & MC international pour références, médias, SoundCloud et booking événementiel.",
    desktopImage: "/gallery-previews/home-desktop/dj-mack.png",
    mobileImage: "/gallery-previews/home-mobile/dj-mack.png",
    externalDemoUrl: "https://dj-mack.presskit.fr/",
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
  },
  {
    slug: "soyumi",
    title: "Soyumi",
    category: "DJ",
    exampleName: "Soyumi",
    description: "Un press kit DJ international entre énergie afro-caribéenne, open format et clubs premium.",
    desktopImage: "/gallery-previews/home-desktop/soyumi.png",
    mobileImage: "/gallery-previews/home-mobile/soyumi.png",
    externalDemoUrl: "https://soyumi.presskit.fr/",
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
  },
  {
    slug: "flo",
    title: "FLO",
    category: "DJ",
    exampleName: "FLO",
    description: "Un press kit DJ open format pour hôtels, marques, rooftops et événements corporate.",
    desktopImage: "/gallery-previews/home-desktop/flo.png",
    mobileImage: "/gallery-previews/home-mobile/flo.png",
    externalDemoUrl: "https://www.djfloparis.com/",
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
  },
  {
    slug: "la-bringue",
    title: "La Bringue",
    category: "Organisateur de soirée",
    exampleName: "La Bringue",
    description: "Un press kit organisateur de soirée pour communauté, chiffres, sponsors et partenaires.",
    desktopImage: "/gallery-previews/home-desktop/la-bringue.png",
    mobileImage: "/gallery-previews/home-mobile/la-bringue.png",
    externalDemoUrl: "https://labringue-party.vercel.app/",
    accent: "#FF8DAA",
    gradient: "from-[#FF8DAA]/28 via-[#FFD37A]/12 to-transparent",
  },
  {
    slug: "arthur-chaps",
    title: "Arthur Chaps",
    category: "DJ",
    exampleName: "Arthur Chaps",
    description: "Un press kit DJ et directeur artistique pour culture club, références et expérience dancefloor.",
    desktopImage: "/gallery-previews/home-desktop/arthur-chaps.png",
    mobileImage: "/gallery-previews/home-mobile/arthur-chaps.png",
    externalDemoUrl: "https://arthur-chaps.presskit.fr/",
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
  },
  {
    slug: "dj-slyd",
    title: "DJ SLY'D",
    category: "DJ",
    exampleName: "DJ SLY'D",
    description: "Un press kit taillé pour la nuit, le booking et les résidences premium.",
    desktopImage: "/gallery-previews/home-desktop/dj-slyd.png",
    mobileImage: "/gallery-previews/home-mobile/dj-slyd.png",
    externalDemoUrl: "https://djslyd.presskit.fr/",
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
  },
];

export function CategoriesGrid() {
  return (
    <section id="exemples" className="section-divider section-tone-lift scroll-mt-28 py-24 md:py-28" aria-labelledby="categories-title">
      <PageShell>
        <SectionHeading
          eyebrow="Exemples"
          title="Inspirez-vous de press kits déjà en ligne."
          description="Chaque exemple montre un rendu réel, avec ses images, ses sections, ses boutons de contact et son adaptation mobile."
          id="categories-title"
        />
        <div className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-2 xl:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {homeExamples.slice(0, 9).map((example, index) => (
            <Reveal
              key={example.slug}
              delay={index * 0.06}
              className="w-[86vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <Link
                href={example.externalDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="panel-premium group flex h-full min-h-[28.5rem] flex-col overflow-visible rounded-lg p-4 md:min-h-[31.5rem] md:p-5"
              >
                <span
                  className="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.22] to-transparent opacity-70 transition duration-300 group-hover:opacity-100 md:left-5 md:right-5"
                  aria-hidden="true"
                />
                <div className="relative h-52 md:h-56">
                  <div className="absolute left-1/2 top-3 z-10 w-[82%] -translate-x-1/2 transition duration-500 group-hover:-translate-y-1">
                    <div className="overflow-hidden rounded-t-[0.9rem] border border-white/[0.16] bg-[#07090e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <div className="relative aspect-[1.58/1] overflow-hidden rounded-t-[0.62rem] bg-black">
                        <img
                          src={example.desktopImage}
                          alt={`${example.title} en version desktop`}
                          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_24%,transparent_72%,rgba(255,255,255,0.06))]" />
                      </div>
                    </div>
                    <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
                  </div>
                  <div className="absolute -bottom-4 right-3 z-20 w-[22%] min-w-[3.75rem] transition duration-500 group-hover:-translate-y-1 md:-bottom-5 md:right-4 md:w-[24%] md:min-w-[4.45rem]">
                    <div className="relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
                      <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                        <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                        <img
                          src={example.mobileImage}
                          alt={`${example.title} en version mobile`}
                          className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14),transparent_28%,transparent_76%,rgba(255,255,255,0.055))]" />
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="relative mt-5 text-xl font-semibold leading-tight text-white md:text-2xl">{example.title}</h3>
                <p className="relative mt-2 text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.14em] text-white/[0.58] md:text-xs md:tracking-[0.18em]">
                  {example.category} · Exemple : {example.exampleName}
                </p>
                <p className="relative mt-3 flex-1 text-sm leading-6 text-white/[0.74]">
                  {example.description}
                </p>
                <div className="relative mt-6 flex items-center justify-between text-sm font-medium text-white/80">
                  <span>Voir l’exemple live</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/galerie" variant="secondary">
            Voir plus d’exemples
          </Button>
        </div>
      </PageShell>
    </section>
  );
}
