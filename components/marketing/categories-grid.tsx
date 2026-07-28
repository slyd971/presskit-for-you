"use client";

import Link from "next/link";
import type { CSSProperties } from "react";

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
    context: "Artiste peintre avec un univers très visuel.",
    objective: "Présenter œuvres, démarche et contact sans diluer l’image.",
    result: "Une vitrine contemplative, claire et plus crédible pour les opportunités.",
    desktopImage: "/gallery-previews/home-desktop/melymelow.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-melymelow.jpg",
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
    context: "Lancement artistique avec besoin de centraliser médias et preuves.",
    objective: "Donner envie d’écouter, comprendre et contacter rapidement.",
    result: "Une page musicale plus structurée qu’un lien bio classique.",
    desktopImage: "/gallery-previews/home-desktop/sherin.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-sherin.jpg",
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
    context: "Danseur et projet culturel à forte dimension humaine.",
    objective: "Faire sentir l’énergie, le propos et les possibilités de collaboration.",
    result: "Une présence plus incarnée, pensée pour convaincre au-delà d’une vidéo.",
    desktopImage: "/gallery-previews/home-desktop/krimo.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-krimo.jpg",
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
    context: "DJ & MC avec références internationales.",
    objective: "Rassurer les bookers avec un support immédiatement professionnel.",
    result: "Booking, médias et univers réunis dans un format premium.",
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
    context: "DJ open format avec une signature club identifiable.",
    objective: "Transformer l’énergie de scène en argument de booking.",
    result: "Un lien vivant, plus simple à envoyer aux lieux et organisateurs.",
    desktopImage: "/gallery-previews/home-desktop/soyumi.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-soyumi.jpg",
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
    context: "Profil DJ orienté hôtels, marques et événements privés.",
    objective: "Installer une image élégante, lisible et corporate-ready.",
    result: "Une présentation directe qui clarifie le niveau et les références.",
    desktopImage: "/gallery-previews/home-desktop/flo.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-djflo.jpg",
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
    context: "Concept événementiel avec communauté et partenaires.",
    objective: "Montrer la traction, l’ambiance et le potentiel sponsor.",
    result: "Un dossier digital plus convaincant qu’un PDF statique.",
    desktopImage: "/gallery-previews/home-desktop/la-bringue.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-labringueparty.jpg",
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
    context: "DJ et directeur artistique avec culture club forte.",
    objective: "Faire ressortir la crédibilité, le style et les références.",
    result: "Un positionnement plus haut de gamme, prêt pour le booking.",
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
    context: "DJ avec besoin d’un lien clair pour bookers et clubs.",
    objective: "Remplacer les envois dispersés par une page complète.",
    result: "Un support plus net pour présenter univers, médias et contact.",
    desktopImage: "/gallery-previews/home-desktop/dj-slyd.png",
    mobileImage: "/gallery-previews/home-mobile/dj-slyd.png",
    externalDemoUrl: "https://djslyd.presskit.fr/",
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
  },
  {
    slug: "black-moz",
    title: "Black Moz",
    category: "Chanteur / Rap",
    exampleName: "Black Moz",
    description: "Un press kit rap, slam et poésie engagée pour présenter univers, écoute et booking.",
    context: "Artiste rap/slam avec un univers éditorial affirmé.",
    objective: "Mettre en avant la signature artistique, les médias et le contact booking.",
    result: "Une présence sobre, premium et mémorable, prête à partager.",
    desktopImage: "/gallery-previews/home-desktop/black-moz.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-blackmoz.jpg",
    externalDemoUrl: "https://black-moz.presskit.fr/",
    accent: "#C8BBAE",
    gradient: "from-[#C8BBAE]/28 via-[#FFFFFF]/10 to-transparent",
  },
];

export function CategoriesGrid() {
  return (
    <section id="exemples" className="section-divider section-tone-lift scroll-mt-28 py-18 md:py-28" aria-labelledby="categories-title">
      <PageShell>
        <SectionHeading
          eyebrow="Exemples"
          title="Inspirez-vous de press kits déjà en ligne."
          description="Chaque exemple montre un rendu réel, avec ses images, ses sections, ses boutons de contact et son adaptation mobile."
          id="categories-title"
        />
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-2 [&::-webkit-scrollbar]:hidden">
          {homeExamples.slice(0, 10).map((example, index) => (
            <Reveal
              key={example.slug}
              delay={index * 0.06}
              className="w-[86vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
            >
              <Link
                href={example.externalDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="case-study-card group flex h-full min-h-[36rem] flex-col overflow-visible p-4 md:min-h-[40rem] md:p-5"
                style={{ "--case-accent": example.accent } as CSSProperties}
              >
                <span
                  className="absolute left-4 right-4 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.22] to-transparent opacity-70 transition duration-300 group-hover:opacity-100 md:left-5 md:right-5"
                  aria-hidden="true"
                />
                <div className="relative h-60 overflow-visible pb-10 md:h-72 md:pb-12">
                  <div className="absolute left-1/2 top-2 z-10 w-[86%] -translate-x-1/2 rotate-[-1.4deg] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[-0.4deg]">
                    <div className="overflow-hidden rounded-t-[0.9rem] border border-white/[0.16] bg-[#07090e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)]">
                      <div className="relative aspect-[1.58/1] overflow-hidden rounded-t-[0.62rem] bg-black">
                        <img
                          src={example.desktopImage}
                          alt={`${example.title} en version desktop`}
                          className="h-full w-full object-contain object-center transition duration-700 group-hover:scale-[1.025]"
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_24%,transparent_72%,rgba(255,255,255,0.06))]" />
                      </div>
                    </div>
                    <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
                  </div>
                  {example.mobileImage ? (
                    <div className="absolute -bottom-1 -right-2 z-20 w-[27%] min-w-[4.1rem] rotate-[5deg] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[2deg] md:-bottom-2 md:-right-3 md:w-[28%] md:min-w-[4.85rem]">
                      <div className="relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
                        <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                          <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                          <img
                            src={example.mobileImage}
                            alt={`${example.title} en version mobile`}
                            className="phone-preview-scroll transition duration-700 group-hover:scale-[1.03]"
                          />
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14),transparent_28%,transparent_76%,rgba(255,255,255,0.055))]" />
                        </div>
                      </div>
                    </div>
                  ) : null}
                </div>
                <div className="relative mt-4 border-y border-white/[0.1] py-5">
                  <p className="text-[0.66rem] font-semibold uppercase leading-5 tracking-[0.16em] text-white/[0.56] md:text-xs">
                    {example.category}
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">{example.title}</h3>
                  </div>
                </div>
                <dl className="relative mt-5 grid flex-1 gap-4 text-sm leading-6">
                  {[
                    ["Contexte", example.context],
                    ["Objectif", example.objective],
                    ["Résultat", example.result],
                  ].map(([label, value]) => (
                    <div key={label} className="grid gap-1 border-b border-white/[0.075] pb-4 last:border-b-0 last:pb-0">
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/[0.42]">{label}</dt>
                      <dd className="text-white/[0.76]">{value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="relative mt-6 flex items-center justify-between text-sm font-semibold text-white">
                  <span>Voir le projet</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center md:mt-12">
          <Button href="/galerie" variant="secondary">
            Voir plus d’exemples
          </Button>
        </div>
      </PageShell>
    </section>
  );
}
