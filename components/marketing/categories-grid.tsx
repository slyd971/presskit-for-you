"use client";

import { EXAMPLE_URLS } from "@/content/example-urls";
import { CTA } from "@/content/site";
import Link from "next/link";
import type { CSSProperties } from "react";

import { ExampleMockup } from "@/components/marketing/example-mockup";
import { Button } from "@/components/ui/button";
import type { PreviewAssets } from "@/lib/preview-assets";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

const homeExamples = [
  {
    slug: "melymelow",
    title: "MelyMelow",
    category: "Artiste peintre",
    exampleName: "MelyMelow",
    description: "Un press kit artiste peintre avec œuvres, démarche, médias et contact pro.",
    context: "Artiste peintre avec un univers très visuel.",
    objective: "Présenter œuvres, démarche et contact sans diluer l’image.",
    result: "Une vitrine contemplative, claire et plus crédible pour les opportunités.",
    desktopImage: "/gallery-previews/home-desktop/melymelow.webp",
    mobileImage: "/gallery-previews/hero-mobile/Mobile-melymelow.jpeg",
    externalDemoUrl: EXAMPLE_URLS.melymelow,
    accent: "#F4C26B",
    gradient: "from-[#F4C26B]/[0.28] via-[#F46B8D]/[0.12] to-transparent",
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
    desktopImage: "/gallery-previews/home-desktop/sherin.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-sherin.webp",
    externalDemoUrl: EXAMPLE_URLS.sherin,
    accent: "#F4C26B",
    gradient: "from-[#F4C26B]/[0.28] via-[#F46B8D]/[0.12] to-transparent",
  },
  {
    slug: "krimo",
    title: "KRIMO",
    category: "Danseur",
    exampleName: "KRIMO",
    description: "Un press kit danseur avec performances, collectif, engagement social et collaborations.",
    context: "Danseur et projet culturel à forte dimension humaine.",
    objective: "Faire sentir l’énergie, le propos et les possibilités de collaboration.",
    result: "Une présence plus incarnée, pensée pour convaincre au-delà d’une vidéo.",
    desktopImage: "/gallery-previews/home-desktop/krimo.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-krimo.webp",
    externalDemoUrl: EXAMPLE_URLS.krimo,
    accent: "#D5A928",
    gradient: "from-[#D5A928]/[0.28] via-[#63E6BE]/[0.12] to-transparent",
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
    desktopImage: "/gallery-previews/home-desktop/dj-mack.webp",
    mobileImage: "/gallery-previews/home-mobile/dj-mack.webp",
    externalDemoUrl: EXAMPLE_URLS.djMack,
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/[0.12] to-transparent",
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
    desktopImage: "/gallery-previews/home-desktop/soyumi.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-soyumi.webp",
    externalDemoUrl: EXAMPLE_URLS.soyumi,
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/[0.12] to-transparent",
  },
  {
    slug: "flo",
    title: "DJ FLO",
    category: "DJ",
    exampleName: "DJ FLO",
    description: "Un press kit DJ open format pour hôtels, marques, rooftops et événements corporate.",
    context: "Profil DJ orienté hôtels, marques et événements privés.",
    objective: "Installer une image élégante, lisible et corporate-ready.",
    result: "Une présentation directe qui clarifie le niveau et les références.",
    desktopImage: "/gallery-previews/home-desktop/flo.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-djflo.webp",
    externalDemoUrl: EXAMPLE_URLS.flo,
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/[0.12] to-transparent",
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
    desktopImage: "/gallery-previews/home-desktop/la-bringue.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-labringueparty.webp",
    externalDemoUrl: EXAMPLE_URLS.laBringue,
    accent: "#FF8DAA",
    gradient: "from-[#FF8DAA]/[0.28] via-[#FFD37A]/[0.12] to-transparent",
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
    desktopImage: "/gallery-previews/home-desktop/arthur-chaps.webp",
    mobileImage: "/gallery-previews/home-mobile/arthur-chaps.webp",
    externalDemoUrl: EXAMPLE_URLS.arthurChaps,
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/[0.12] to-transparent",
  },
  {
    slug: "dj-slyd",
    title: "DJ SLY'D",
    category: "DJ",
    exampleName: "DJ SLY'D",
    description: "Conçu pour valoriser ton image auprès des clubs, festivals et organisateurs.",
    context: "DJ avec besoin d’un lien clair pour bookers et clubs.",
    objective: "Remplacer les envois dispersés par une page complète.",
    result: "Un support plus net pour présenter univers, médias et contact.",
    desktopImage: "/gallery-previews/home-desktop/dj-slyd.webp",
    mobileImage: "/gallery-previews/home-mobile/dj-slyd.webp",
    externalDemoUrl: EXAMPLE_URLS.djSlyd,
    accent: "#FF9152",
    gradient: "from-[#FF9152]/30 via-[#CE5DFF]/[0.12] to-transparent",
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
    desktopImage: "/gallery-previews/home-desktop/black-moz.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-blackmoz.webp",
    externalDemoUrl: EXAMPLE_URLS.blackMoz,
    accent: "#C8BBAE",
    gradient: "from-[#C8BBAE]/[0.28] via-[#FFFFFF]/10 to-transparent",
  },
];

const featuredHomeExampleSlugs = ["melymelow", "sherin", "krimo"];
const featuredHomeExamples = featuredHomeExampleSlugs
  .map((slug) => homeExamples.find((example) => example.slug === slug))
  .filter((example): example is (typeof homeExamples)[number] => Boolean(example));

type CategoriesGridProps = {
  previewAssets?: Record<string, PreviewAssets>;
};

export function CategoriesGrid({ previewAssets = {} }: CategoriesGridProps) {
  return (
    <section id="exemples" className="section-divider section-tone-lift scroll-mt-28 py-16 md:py-28" aria-labelledby="categories-title">
      <PageShell>
        <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
          <h2 id="categories-title" className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
            Découvre quelques réalisations
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">
            Chaque press kit est un projet sur mesure, pensé à partir de ton univers, de tes contenus et de tes objectifs.
          </p>
        </div>
        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pr-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 md:grid-cols-3 [&::-webkit-scrollbar]:hidden">
          {featuredHomeExamples.map((example, index) => (
            <Reveal
              key={example.slug}
              delay={index * 0.06}
              className="w-[86vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
              threshold={0.1}
            >
              <div
                className="case-study-card group flex h-full min-h-[30rem] flex-col overflow-visible p-4 md:min-h-[32rem] md:p-5 lg:min-h-[34rem]"
                style={{ "--case-accent": example.accent } as CSSProperties}
              >
                <ExampleMockup
                  id={example.slug}
                  title={example.title}
                  category={example.category}
                  desktopImage={example.desktopImage}
                  mobileImage={example.mobileImage}
                  boxClassName="h-[18rem] md:h-[16rem] lg:h-[18rem]"
                  desktopSizes="(min-width: 1024px) 40vw, (min-width: 768px) 74vw, 74vw"
                  mobileSizes="(min-width: 1024px) 13vw, (min-width: 768px) 22vw, 22vw"
                  preview={previewAssets[example.slug]}
                />
                <div className="relative mt-2 border-y border-white/[0.12] py-5">
                  <p className="text-[0.66rem] font-semibold uppercase leading-5 tracking-label-tight text-white/[0.64] md:text-xs">
                    {example.category}
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">{example.title}</h3>
                  </div>
                </div>
                <p className="relative mt-5 flex-1 text-sm leading-6 text-white/[0.74]">{example.description}</p>
                <div className="relative mt-6 flex items-center justify-between text-sm font-semibold text-white">
                  <span>Voir le projet</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
                <Link
                  href={example.externalDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${example.title} : ouvrir la démo (nouvel onglet)`}
                  className="absolute inset-0 z-20 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-850"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center md:mt-12">
          <Button href="/exemples" variant="secondary">
            {CTA.secondary}
          </Button>
        </div>
      </PageShell>
    </section>
  );
}
