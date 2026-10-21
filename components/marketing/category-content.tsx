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

type ChecklistItem = { title: string; description?: string };

type PageCopy = {
  promiseTitle: string;
  promiseDescription: string;
  benefits: { title: string; description: string }[];
  examplesTitle: string;
  detailsTitle: string;
  detailsDescription: string;
  // Remplace la liste « includes » + « modules » par une liste numérotée (titre + phrase).
  checklist?: ChecklistItem[];
  checklistNote?: string;
  // Section checklist supplémentaire, ajoutée après la section détails (sans la remplacer).
  extraChecklist?: { title: string; description: string; items: ChecklistItem[] };
  // Description propre à cette page pour un exemple (sinon celle de content/site.ts).
  exampleDescriptions?: Record<string, string>;
};

const pageCopy: Record<string, PageCopy> = {
  artiste: {
    promiseTitle: "Un dossier de presse en ligne, sans perdre ton identité artistique.",
    promiseDescription:
      "Chanteur, rappeur, musicien ou groupe : ta page réunit ta bio, ta musique, tes clips, tes dates et ta presse. Un programmateur comprend ton projet en une minute et sait comment te booker.",
    benefits: [
      {
        title: "Centralise ton projet",
        description: "Bio courte et longue, liens Spotify, YouTube, SoundCloud, réseaux et contact dans une seule page.",
      },
      {
        title: "Fais écouter le meilleur",
        description: "Tes meilleurs titres, ton dernier clip et tes lives en tête, sans faire chercher.",
      },
      {
        title: "Facilite le booking",
        description: "Dates, scènes, fiche technique et contact direct pour les salles, les festivals et les médias.",
      },
    ],
    examplesTitle: "D'autres exemples d'artistes.",
    exampleDescriptions: {
      "black-moz": "Un press kit rap et slam avec bio, écoute, médias et booking.",
      melymelow:
        "Un press kit artiste peintre avec œuvres, démarche et contact pro : le même format fonctionne pour les artistes visuels.",
    },
    detailsTitle: "Que mettre dans un press kit artiste ?",
    detailsDescription:
      "Un programmateur, un journaliste ou un label doit trouver ces éléments en moins d'une minute, sur mobile.",
    checklist: [
      { title: "Bio courte et bio longue", description: "trois lignes à copier dans une programmation, et une version complète pour la presse." },
      { title: "Photos presse", description: "en haute définition, téléchargeables, avec le crédit du photographe." },
      { title: "Musique à écouter", description: "un lecteur Spotify, SoundCloud ou YouTube, tes deux ou trois meilleurs titres en premier." },
      { title: "Clips et vidéos live", description: "la preuve de ce que tu donnes sur scène." },
      { title: "Actualité", description: "ta dernière sortie, ton prochain projet, tes dates à venir." },
      { title: "Références", description: "concerts, festivals, premières parties, collaborations." },
      { title: "Presse et chiffres", description: "articles, interviews, passages radio, auditeurs mensuels, abonnés." },
      { title: "Fiche technique et rider", description: "pour les salles et les festivals." },
      { title: "Liens officiels", description: "réseaux sociaux, plateformes de streaming, site." },
      {
        title: "Contact booking et presse",
        description: "un e-mail ou un numéro direct, et ton manager ou ton tourneur si tu en as un.",
      },
    ],
    checklistNote: "Artiste visuel ? Remplace l'écoute par une galerie d'œuvres et une section démarche.",
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
    detailsTitle: "Que mettre dans un press kit DJ ?",
    detailsDescription:
      "Un booker, un club ou une agence doit trouver ces éléments en moins d'une minute, sur mobile. C'est ce qu'on appelle aussi un EPK DJ (electronic press kit) ou un dossier de presse DJ.",
    checklist: [
      { title: "Bio courte et bio longue", description: "trois lignes pour un flyer ou une programmation, et une version complète pour les médias." },
      { title: "Styles et formats de set", description: "genres joués (house, afro, hip-hop, open format…), durée, warm-up, peak time ou closing." },
      { title: "Mixes à écouter", description: "SoundCloud, Mixcloud ou YouTube, ton mix le plus récent en premier." },
      { title: "Vidéos de sets", description: "un extrait filmé en club ou en festival vaut plus qu'une description." },
      { title: "Références", description: "clubs, festivals, résidences, premières parties, événements privés." },
      { title: "Photos presse et logo", description: "en haute définition, téléchargeables, en version claire et sombre." },
      { title: "Rider et fiche technique", description: "matériel attendu (platines, table de mixage, retours) et conditions d'accueil." },
      { title: "Chiffres", description: "abonnés, écoutes, dates jouées par an." },
      { title: "Zone et disponibilités", description: "ville de base, déplacements, délai de réservation." },
      { title: "Contact booking", description: "un e-mail ou un numéro direct, et ton agence si tu en as une." },
    ],
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
    detailsTitle: "Que mettre dans un press kit danseur ?",
    detailsDescription:
      "Un chorégraphe, une compagnie, une marque ou un directeur de casting doit trouver ces éléments en moins d'une minute.",
    checklist: [
      { title: "Bio et parcours", description: "formation, styles (hip-hop, afro, contemporain…), années de pratique." },
      { title: "Showreel", description: "une vidéo d'une à deux minutes avec tes meilleurs passages, en haut de page." },
      { title: "Vidéos de performances", description: "battles, spectacles, clips, scènes." },
      { title: "Collaborations", description: "artistes, compagnies, marques, clips tournés." },
      { title: "Collectif ou compagnie", description: "qui vous êtes et ce que vous proposez ensemble." },
      { title: "Ateliers, cours et stages", description: "publics, formats, tarifs ou « sur demande »." },
      { title: "Photos presse en haute définition." },
      { title: "Contact direct pour les castings, les spectacles et les marques." },
    ],
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
    extraChecklist: {
      title: "Que mettre dans un press kit photographe ?",
      description:
        "Photographe ou vidéaste : un client doit comprendre ce que tu fais, pour qui et à quel prix, avant de demander un devis.",
      items: [
          { title: "Portfolio par spécialité", description: "mariage, portrait, corporate, événementiel, mode, une galerie par type de prestation." },
          { title: "Images en haute qualité, optimisées pour le mobile." },
          { title: "Prestations et formules", description: "ce qui est inclus, durée, délai de livraison des photos." },
          { title: "Tarifs ou prix « à partir de », pour filtrer les demandes." },
          { title: "Zone d'intervention et déplacements." },
          { title: "Références", description: "clients, publications, expositions." },
          { title: "Avis clients." },
          { title: "Demande de devis en un clic." },
      ],
    },
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
    detailsTitle: "Que mettre dans un press kit coach sportif ?",
    detailsDescription:
      "Un futur client doit comprendre ton coaching et réserver sans échanger dix messages.",
    checklist: [
      { title: "Ta spécialité", description: "remise en forme, perte de poids, préparation physique, renforcement musculaire…" },
      { title: "Tes formats", description: "coaching à domicile, en salle, en extérieur ou en visio, en individuel ou en petit groupe." },
      { title: "Ta méthode", description: "comment se passent une séance et un programme." },
      { title: "Diplômes et certifications." },
      { title: "Résultats", description: "transformations et avis clients, publiés avec leur accord." },
      { title: "Offres et tarifs", description: "séance à l'unité, carnets, abonnements." },
      { title: "Zone d'intervention." },
      { title: "Prise de rendez-vous", description: "un lien ou un numéro direct." },
    ],
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
    detailsTitle: "Que mettre dans un press kit make-up artist ?",
    detailsDescription:
      "Une future mariée, une marque ou une production doit trouver ces éléments en moins d'une minute.",
    checklist: [
      { title: "Portfolio par type de maquillage", description: "mariée, shooting, mode, événementiel, effets spéciaux." },
      { title: "Photos avant/après, publiées avec l'accord de tes clientes." },
      { title: "Prestations", description: "maquillage mariée avec essai, maquillage shooting, cours d'auto-maquillage…" },
      { title: "Tarifs ou prix « à partir de »." },
      { title: "Zone de déplacement et frais." },
      { title: "Références", description: "marques, défilés, tournages, magazines." },
      { title: "Avis clientes." },
      { title: "Contact et disponibilités, surtout pour les dates de mariage." },
    ],
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
    detailsTitle: "Que mettre dans un press kit organisateur (dossier de sponsoring) ?",
    detailsDescription:
      "Un lieu, une marque ou un sponsor doit comprendre ton événement et ce qu'il y gagne avant de répondre.",
    checklist: [
      { title: "Le concept", description: "format, ambiance, musique, public visé." },
      { title: "Les éditions passées", description: "dates, lieux, nombre de participants." },
      { title: "Les chiffres", description: "audience, abonnés, billets vendus, taux de remplissage." },
      { title: "Photos et aftermovie." },
      { title: "Le line-up", description: "DJs et artistes programmés." },
      { title: "Les partenaires déjà engagés", description: "lieux, marques, médias." },
      { title: "Les offres de sponsoring", description: "visibilité proposée, contreparties, formats de partenariat." },
      { title: "Le contact partenariats." },
    ],
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
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">
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
                      <p className="mt-4 max-w-2xl text-sm leading-7 text-white/[0.64] md:text-base md:leading-8">
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
                        category={example.category}
                        desktopImage={example.image}
                        mobileImage={example.mobileImage}
                        imagePosition={example.imagePosition}
                        accent={example.accent}
                        boxClassName="h-[18rem] md:h-[27rem]"
                        desktopSizes="(min-width: 1024px) 40vw, (min-width: 768px) 74vw, 74vw"
                        mobileSizes="(min-width: 1024px) 13vw, (min-width: 768px) 22vw, 22vw"
                        preview={previewAssets[example.slug]}
                      />
                      <div className="relative mt-2 border-y border-white/[0.12] py-5">
                        <h3 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                          {example.title}
                        </h3>
                      </div>
                      <p className="mt-5 flex-1 text-sm leading-7 text-white/[0.64]">
                        {copy.exampleDescriptions?.[example.slug] ?? example.description}
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
                        className="absolute inset-0 z-20 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-850"
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
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">
              {copy.detailsDescription}
            </p>
          </div>
          <div className="grid gap-8">
            {copy.checklist ? (
              <div>
                <Checklist items={copy.checklist} />
                {copy.checklistNote ? <p className="mt-6 text-sm leading-6 text-white/[0.74]">{copy.checklistNote}</p> : null}
              </div>
            ) : (
              <div className="border-y border-white/[0.12]">
                {category.includes.map((item) => (
                  <div key={item} className="motion-line grid grid-cols-[1.25rem_1fr] gap-4 border-b border-white/[0.08] py-4 last:border-b-0">
                    <span className="mt-2 h-px w-5 bg-white/[0.32]" aria-hidden="true" />
                    <p className="text-sm font-medium leading-6 text-white/[0.74]">{item}</p>
                  </div>
                ))}
              </div>
            )}
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

      {copy.extraChecklist ? (
        <section className="section-divider py-20 md:py-28">
          <PageShell className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
              <h2 className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
                {copy.extraChecklist.title}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">
                {copy.extraChecklist.description}
              </p>
            </div>
            <Checklist items={copy.extraChecklist.items} />
          </PageShell>
        </section>
      ) : null}
    </>
  );
}

// Liste numérotée « titre en gras : phrase » des sections « Que mettre dans un press kit … ? ».
function Checklist({ items }: { items: ChecklistItem[] }) {
  return (
    <ol className="border-y border-white/[0.12]">
      {items.map((item, index) => (
        <li key={item.title} className="motion-line grid grid-cols-[1.75rem_1fr] gap-4 border-b border-white/[0.08] py-4 last:border-b-0">
          <span className="text-sm font-semibold leading-6 text-white/[0.64]">{String(index + 1).padStart(2, "0")}</span>
          <p className="text-sm font-medium leading-6 text-white/[0.74]">
            {item.description ? (
              <>
                <strong className="font-semibold text-white">{item.title} :</strong> {item.description}
              </>
            ) : (
              <strong className="font-semibold text-white">{item.title}</strong>
            )}
          </p>
        </li>
      ))}
    </ol>
  );
}
