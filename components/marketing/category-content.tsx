import Link from "next/link";
import type { CSSProperties } from "react";

import { CTA, type Category } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { ExampleMockup } from "@/components/marketing/example-mockup";
import { Reveal } from "@/components/ui/reveal";
import { getPreviewAssets } from "@/lib/preview-assets";
import { getExamplesForPresskitCategory } from "@/lib/presskit-categories";

type CategoryContentProps = {
  category: Category;
};

type PageCopy = {
  promiseTitle: string;
  promiseDescription: string;
  benefits: { title: string; description: string }[];
  examplesTitle: string;
  detailsTitle: string;
  detailsDescription: string;
};

const pageCopy: Record<string, PageCopy> = {
  artiste: {
    promiseTitle: "Une présentation claire, sans perdre la sensibilité de ton travail.",
    promiseDescription:
      "La page rassemble ta bio, tes œuvres, tes médias et tes références. Un média ou une galerie comprend vite ta démarche et sait comment te joindre.",
    benefits: [
      {
        title: "Centralise tes informations pro",
        description: "Bio, liens, références et contact sont accessibles depuis une seule page.",
      },
      {
        title: "Montre ce qui compte vraiment",
        description: "Sélectionne les œuvres, photos, vidéos ou sons qui représentent le mieux ton travail.",
      },
      {
        title: "Facilite la prise de contact",
        description: "Un média, un lieu ou une galerie sait rapidement comment te joindre.",
      },
    ],
    examplesTitle: "D'autres exemples d'artistes.",
    detailsTitle: "Ce qu’une galerie, un média ou un lieu doit trouver.",
    detailsDescription:
      "Le press kit évite les messages dispersés. Tu partages une page qui présente ton travail, tes références et ton contact.",
  },
  dj: {
    promiseTitle: "Un support clair pour parler aux clubs, agences et organisateurs.",
    promiseDescription:
      "Ton press kit présente tes styles, tes médias, tes références et ton contact booking dans une page facile à consulter.",
    benefits: [
      {
        title: "Clarifie tes formats de set",
        description: "Styles musicaux, ambiances et liens d’écoute aident le booker à te situer rapidement.",
      },
      {
        title: "Montre tes références de scène",
        description: "Photos, vidéos, clubs et événements passés montrent où tu as déjà joué.",
      },
      {
        title: "Facilite le booking",
        description: "Un club ou une agence trouve rapidement ton contact et tes réseaux professionnels.",
      },
    ],
    examplesTitle: "Des exemples DJ déjà en ligne.",
    detailsTitle: "Ce qu’un booker doit trouver avant de te programmer.",
    detailsDescription:
      "Le press kit donne les informations attendues avant un booking : styles, médias, références, réseaux et contact.",
  },
  danseur: {
    promiseTitle: "Présenter ton parcours, tes vidéos et tes collaborations.",
    promiseDescription:
      "La page rassemble tes performances, tes photos, tes références et les formats pour lesquels on peut te contacter.",
    benefits: [
      {
        title: "Montre tes performances",
        description: "Un lieu, une marque ou un projet culturel peut consulter plusieurs vidéos au même endroit.",
      },
      {
        title: "Situe ton parcours",
        description: "Scènes, clips, collectifs, ateliers et collaborations donnent du contexte à ton travail.",
      },
      {
        title: "Cadre les demandes",
        description: "La page précise les formats possibles : scène, clip, atelier, collaboration ou projet culturel.",
      },
    ],
    examplesTitle: "Un exemple danseur à consulter.",
    detailsTitle: "Ce qu’un lieu, une marque ou un projet culturel doit comprendre.",
    detailsDescription:
      "Le press kit présente ton travail sans renvoyer vers une seule vidéo ou un profil social incomplet.",
  },
  photographe: {
    promiseTitle: "Montrer ton portfolio et expliquer tes prestations.",
    promiseDescription:
      "La page présente tes images, tes formats photo ou vidéo, tes zones d’intervention et ton contact.",
    benefits: [
      {
        title: "Sélectionne tes meilleures images",
        description: "Les photos importantes sont visibles sans demander un PDF ou un lien de drive.",
      },
      {
        title: "Clarifie tes prestations",
        description: "Photo, vidéo, événement, nightlife ou marque : le prospect sait ce qu’il peut demander.",
      },
      {
        title: "Prépare la demande de devis",
        description: "La personne trouve tes formats, ta zone d’intervention et ton contact avant d’écrire.",
      },
    ],
    examplesTitle: "Un exemple photographe à consulter.",
    detailsTitle: "Ce qui manque souvent dans un simple portfolio.",
    detailsDescription:
      "Le press kit ajoute les services, les formats, les zones d’intervention et le contact à côté des images.",
  },
  "coach-sportif": {
    promiseTitle: "Expliquer ton coaching sans multiplier les messages.",
    promiseDescription:
      "La page présente ta méthode, tes offres, tes résultats, tes réseaux et la prise de rendez-vous.",
    benefits: [
      {
        title: "Clarifie tes accompagnements",
        description: "Le visiteur voit les accompagnements proposés et comprend à qui ils s’adressent.",
      },
      {
        title: "Montre tes preuves",
        description: "Transformations, avis ou contenus pédagogiques peuvent être consultés avant le premier contact.",
      },
      {
        title: "Reçois des demandes plus précises",
        description: "La personne sait ce qu’elle peut réserver et comment te contacter.",
      },
    ],
    examplesTitle: "Un exemple coach sportif à consulter.",
    detailsTitle: "Ce qu’un prospect doit comprendre avant de te contacter.",
    detailsDescription:
      "Le press kit évite les explications répétées en message privé. Il présente les offres, les preuves et le contact.",
  },
  "make-up-artist": {
    promiseTitle: "Montrer tes looks et expliquer tes prestations.",
    promiseDescription:
      "La page présente ton portfolio, tes prestations, tes références et ton contact.",
    benefits: [
      {
        title: "Mets tes looks en avant",
        description: "Les photos importantes sont réunies dans une page claire, hors du flux des réseaux sociaux.",
      },
      {
        title: "Clarifie tes prestations",
        description: "Mariage, mode, éditorial ou événement : chaque service peut être présenté simplement.",
      },
      {
        title: "Facilite les demandes",
        description: "Une cliente, une marque ou une production trouve ton portfolio et ton contact au même endroit.",
      },
    ],
    examplesTitle: "Un exemple make-up artist à consulter.",
    detailsTitle: "Ce qui aide une cliente, une marque ou une prod à décider.",
    detailsDescription:
      "Le press kit réunit les looks, les prestations, les références et les informations de contact.",
  },
  organisateur: {
    promiseTitle: "Présenter ton événement à un lieu, un sponsor ou un partenaire.",
    promiseDescription:
      "La page regroupe le format de l’événement, les photos, les vidéos, les chiffres, les partenaires et le contact.",
    benefits: [
      {
        title: "Explique le format",
        description: "Le visiteur voit le public, le format, les éditions passées et les informations utiles.",
      },
      {
        title: "Présente tes chiffres",
        description: "Communauté, fréquentation, médias et partenaires peuvent être consultés sans demander un dossier séparé.",
      },
      {
        title: "Ouvre la discussion partenaire",
        description: "Un lieu, une marque ou un sponsor trouve rapidement comment engager la discussion.",
      },
    ],
    examplesTitle: "Un exemple événementiel à consulter.",
    detailsTitle: "Ce qu’un partenaire doit trouver avant de répondre.",
    detailsDescription:
      "Le press kit donne les informations nécessaires avant un échange : format, médias, chiffres, partenaires et contact.",
  },
};

export function CategoryContent({ category }: CategoryContentProps) {
  const previewAssets = getPreviewAssets();
  const categoryExamples = getExamplesForPresskitCategory(category.slug);
  const displayedExamples = categoryExamples.slice(1, category.slug === "dj" ? 5 : 4);
  const copy = pageCopy[category.slug] ?? {
    promiseTitle: "Présenter les informations utiles dans un seul lien.",
    promiseDescription: category.description,
    benefits: category.benefits,
    examplesTitle: "Des exemples concrets pour se projeter.",
    detailsTitle: "Les informations essentielles, dans le bon ordre.",
    detailsDescription: category.description,
  };

  return (
    <>
      <section className="section-divider section-tone-lift py-20 md:py-28">
        <PageShell>
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
              <h2 className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
                {copy.promiseTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.72] md:text-lg">
                {copy.promiseDescription}
              </p>
            </div>
            <div className="border-y border-white/[0.12]">
              {copy.benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 0.06}>
                  <article className="motion-line grid gap-5 border-b border-white/[0.08] py-7 last:border-b-0 md:grid-cols-[5rem_1fr] md:py-8">
                    <p className="editorial-number text-4xl font-semibold leading-none tracking-tighter2 md:text-5xl">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div>
                      <h3 className="text-[clamp(1.45rem,2.4vw,2.25rem)] font-semibold leading-tight tracking-tighter2 text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.66] md:text-base md:leading-8">
                        {benefit.description}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      {displayedExamples.length > 0 ? (
        <section className="section-divider section-wash py-20 md:py-28" aria-labelledby={`${category.slug}-examples`}>
          <PageShell>
            <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
              <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
                <h2 id={`${category.slug}-examples`} className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
                  {copy.examplesTitle}
                </h2>
              </div>
            </div>
            <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:mt-14 md:grid md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-2 [&::-webkit-scrollbar]:hidden">
              {displayedExamples.map((example, index) => {
                const href = example.externalDemoUrl ?? example.href;
                const isExternal = href.startsWith("http");

                return (
                  <Reveal
                    key={example.slug}
                    delay={index * 0.06}
                    className="w-[86vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
              threshold={0.1}
                  >
                    <div
                      className="case-study-card group flex h-full min-h-[34rem] flex-col overflow-visible p-4 md:min-h-[42rem] md:p-5"
                      style={{ "--case-accent": example.accent } as CSSProperties}
                    >
                      <ExampleMockup
                        id={example.slug}
                        title={example.title}
                        desktopImage={example.image}
                        mobileImage={example.mobileImage}
                        imagePosition={example.imagePosition}
                        accent={example.accent}
                        boxClassName="h-[18rem] md:h-[27rem]"
                        desktopSizes="(min-width: 1024px) 40vw, (min-width: 768px) 74vw, 74vw"
                        mobileSizes="(min-width: 1024px) 13vw, (min-width: 768px) 22vw, 22vw"
                        preview={previewAssets[example.slug]}
                      />
                      <div className="relative mt-2 border-y border-white/[0.1] py-5">
                        <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                          {example.title}
                        </h3>
                      </div>
                      <p className="mt-5 flex-1 text-sm leading-7 text-white/[0.68]">
                        {example.description}
                      </p>
                      <div className="relative mt-6 flex items-center justify-between text-sm font-semibold text-white">
                        <span>Voir le projet</span>
                        <span className="transition group-hover:translate-x-1">→</span>
                      </div>
                      <Link
                        href={href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noreferrer" : undefined}
                        aria-label={`${example.title} : ouvrir la démo${isExternal ? " (nouvel onglet)" : ""}`}
                        className="absolute inset-0 z-20 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111620]"
                      />
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center md:mt-12">
              <Button href="/exemples" variant="secondary" className="min-h-12 w-full px-6 py-4 text-[15px] sm:w-auto">
                {CTA.secondary}
              </Button>
            </div>
          </PageShell>
        </section>
      ) : null}

      <section className="section-divider py-20 md:py-28">
        <PageShell className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
            <h2 className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
              {copy.detailsTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.72] md:text-lg">
              {copy.detailsDescription}
            </p>
          </div>
          <div className="grid gap-8">
            <div className="border-y border-white/[0.12]">
              {category.includes.map((item, index) => (
                <div key={item} className="motion-line grid grid-cols-[1.25rem_1fr] gap-4 border-b border-white/[0.08] py-4 last:border-b-0">
                  <span className="mt-2 h-px w-5 bg-white/[0.32]" aria-hidden="true" />
                  <p className="text-sm font-medium leading-6 text-white/[0.76]">{item}</p>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {category.modules.map((module) => (
                <div key={module} className="border-l border-white/[0.18] pl-4">
                  <p className="text-lg font-semibold leading-7 text-white">{module}</p>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

    </>
  );
}
