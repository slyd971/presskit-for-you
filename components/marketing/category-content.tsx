import Link from "next/link";
import type { CSSProperties } from "react";

import type { Category } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
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
    promiseTitle: "Une présentation claire, sans perdre la sensibilité de votre travail.",
    promiseDescription:
      "La page rassemble votre bio, vos œuvres, vos médias et vos références. Un média ou une galerie comprend vite votre démarche et sait comment vous joindre.",
    benefits: [
      {
        title: "Centralisez vos informations pro",
        description: "Bio, liens, références et contact sont accessibles depuis une seule page.",
      },
      {
        title: "Montrez ce qui compte vraiment",
        description: "Sélectionnez les œuvres, photos, vidéos ou sons qui représentent le mieux votre travail.",
      },
      {
        title: "Facilitez la prise de contact",
        description: "Un média, un lieu ou une galerie sait rapidement comment vous joindre.",
      },
    ],
    examplesTitle: "D'autres exemples d'artistes.",
    detailsTitle: "Ce qu’une galerie, un média ou un lieu doit trouver.",
    detailsDescription:
      "Le press kit évite les messages dispersés. Vous partagez une page qui présente votre travail, vos références et votre contact.",
  },
  dj: {
    promiseTitle: "Un support clair pour parler aux clubs, agences et organisateurs.",
    promiseDescription:
      "Votre press kit présente vos styles, vos médias, vos références et votre contact booking dans une page facile à consulter.",
    benefits: [
      {
        title: "Clarifiez vos formats de set",
        description: "Styles musicaux, ambiances et liens d’écoute aident le booker à vous situer rapidement.",
      },
      {
        title: "Montrez vos références de scène",
        description: "Photos, vidéos, clubs et événements passés montrent où vous avez déjà joué.",
      },
      {
        title: "Facilitez le booking",
        description: "Un club ou une agence trouve rapidement votre contact et vos réseaux professionnels.",
      },
    ],
    examplesTitle: "Des exemples DJ déjà en ligne.",
    detailsTitle: "Ce qu’un booker doit trouver avant de vous programmer.",
    detailsDescription:
      "Le press kit donne les informations attendues avant un booking : styles, médias, références, réseaux et contact.",
  },
  danseur: {
    promiseTitle: "Présenter votre parcours, vos vidéos et vos collaborations.",
    promiseDescription:
      "La page rassemble vos performances, vos photos, vos références et les formats pour lesquels on peut vous contacter.",
    benefits: [
      {
        title: "Montrez vos performances",
        description: "Un lieu, une marque ou un projet culturel peut consulter plusieurs vidéos au même endroit.",
      },
      {
        title: "Situez votre parcours",
        description: "Scènes, clips, collectifs, ateliers et collaborations donnent du contexte à votre travail.",
      },
      {
        title: "Cadrez les demandes",
        description: "La page précise les formats possibles : scène, clip, atelier, collaboration ou projet culturel.",
      },
    ],
    examplesTitle: "Un exemple danseur à consulter.",
    detailsTitle: "Ce qu’un lieu, une marque ou un projet culturel doit comprendre.",
    detailsDescription:
      "Le press kit présente votre travail sans renvoyer vers une seule vidéo ou un profil social incomplet.",
  },
  photographe: {
    promiseTitle: "Montrer votre portfolio et expliquer vos prestations.",
    promiseDescription:
      "La page présente vos images, vos formats photo ou vidéo, vos zones d’intervention et votre contact.",
    benefits: [
      {
        title: "Sélectionnez vos meilleures images",
        description: "Les photos importantes sont visibles sans demander un PDF ou un lien de drive.",
      },
      {
        title: "Clarifiez vos prestations",
        description: "Photo, vidéo, événement, nightlife ou marque : le prospect sait ce qu’il peut demander.",
      },
      {
        title: "Préparez la demande de devis",
        description: "La personne trouve vos formats, votre zone d’intervention et votre contact avant d’écrire.",
      },
    ],
    examplesTitle: "Un exemple photographe à consulter.",
    detailsTitle: "Ce qui manque souvent dans un simple portfolio.",
    detailsDescription:
      "Le press kit ajoute les services, les formats, les zones d’intervention et le contact à côté des images.",
  },
  "coach-sportif": {
    promiseTitle: "Expliquer votre coaching sans multiplier les messages.",
    promiseDescription:
      "La page présente votre méthode, vos offres, vos résultats, vos réseaux et la prise de rendez-vous.",
    benefits: [
      {
        title: "Clarifiez vos accompagnements",
        description: "Le visiteur voit les accompagnements proposés et comprend à qui ils s’adressent.",
      },
      {
        title: "Montrez vos preuves",
        description: "Transformations, avis ou contenus pédagogiques peuvent être consultés avant le premier contact.",
      },
      {
        title: "Recevez des demandes plus précises",
        description: "La personne sait ce qu’elle peut réserver et comment vous contacter.",
      },
    ],
    examplesTitle: "Un exemple coach sportif à consulter.",
    detailsTitle: "Ce qu’un prospect doit comprendre avant de vous contacter.",
    detailsDescription:
      "Le press kit évite les explications répétées en message privé. Il présente les offres, les preuves et le contact.",
  },
  "make-up-artist": {
    promiseTitle: "Montrer vos looks et expliquer vos prestations.",
    promiseDescription:
      "La page présente votre portfolio, vos prestations, vos avant/après, vos références et votre contact.",
    benefits: [
      {
        title: "Mettez vos looks en avant",
        description: "Les photos importantes sont réunies dans une page claire, hors du flux des réseaux sociaux.",
      },
      {
        title: "Clarifiez vos prestations",
        description: "Mariage, mode, éditorial ou événement : chaque service peut être présenté simplement.",
      },
      {
        title: "Facilitez les demandes",
        description: "Une cliente, une marque ou une production trouve votre portfolio et votre contact au même endroit.",
      },
    ],
    examplesTitle: "Un exemple make-up artist à consulter.",
    detailsTitle: "Ce qui aide une cliente, une marque ou une prod à décider.",
    detailsDescription:
      "Le press kit réunit les looks, les prestations, les références et les informations de contact.",
  },
  organisateur: {
    promiseTitle: "Présenter votre événement à un lieu, un sponsor ou un partenaire.",
    promiseDescription:
      "La page regroupe le format de l’événement, les photos, les vidéos, les chiffres, les partenaires et le contact.",
    benefits: [
      {
        title: "Expliquez le format",
        description: "Le visiteur voit le public, le format, les éditions passées et les informations utiles.",
      },
      {
        title: "Présentez vos chiffres",
        description: "Communauté, fréquentation, médias et partenaires peuvent être consultés sans demander un dossier séparé.",
      },
      {
        title: "Ouvrez la discussion partenaire",
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
                  >
                    <Link
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      className="case-study-card group flex h-full min-h-[34rem] flex-col overflow-visible p-4 outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111620] md:min-h-[42rem] md:p-5"
                      style={{ "--case-accent": example.accent } as CSSProperties}
                    >
                      <div className="relative h-[18rem] overflow-visible md:h-[27rem]">
                        <div className="absolute left-1/2 top-4 z-10 w-[86%] -translate-x-1/2 rotate-[-1.4deg] transition duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.4deg]">
                          <div className="mockup-surface relative overflow-hidden rounded-t-[0.9rem] border border-white/[0.14] bg-[#07090e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.08)]">
                            <div className="relative aspect-[91/60] overflow-hidden rounded-t-[0.62rem] bg-black">
                              {example.image ? (
                                <img
                                  src={example.image}
                                  alt={`${example.title} en version desktop`}
                                  loading="lazy"
                                  decoding="async"
                                  className="h-full w-full object-contain object-center"
                                  style={example.imagePosition ? { objectPosition: example.imagePosition } : undefined}
                                />
                              ) : (
                                <div
                                  className="h-full w-full"
                                  style={{
                                    background: `linear-gradient(135deg, ${example.accent}33, rgba(255,255,255,0.05))`,
                                  }}
                                />
                              )}
                            </div>
                          </div>
                          <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
                          {example.mobileImage ? (
                            <div className="absolute -bottom-5 -right-8 z-20 w-[30%] min-w-[4.35rem] rotate-[5deg] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[2deg] md:-bottom-6 md:-right-10 md:w-[31%] md:min-w-[5rem]">
                              <div className="mockup-surface relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
                                <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                                  <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                                  <img
                                    src={example.mobileImage}
                                    alt={`${example.title} en version mobile`}
                                    loading="lazy"
                                    decoding="async"
                                    className="phone-preview-scroll"
                                  />
                                </div>
                              </div>
                            </div>
                          ) : null}
                        </div>
                      </div>
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
                    </Link>
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-10 flex justify-center md:mt-12">
              <Button href="/exemples" variant="secondary" className="min-h-12 w-full px-6 py-4 text-[15px] sm:w-auto">
                Voir tous les exemples
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
