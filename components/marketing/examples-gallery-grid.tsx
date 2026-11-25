"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { categories, examples } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { ExampleMockup } from "@/components/marketing/example-mockup";
import type { PreviewAssets } from "@/lib/preview-assets";
import { cn, withDe } from "@/lib/utils";

// Groupes par métier : ordre des cartes et lien vers la page métier sous chaque H2.
const exampleGroups = [
  {
    title: "Press kits DJ",
    intro: "Un booker veut écouter, voir les références et trouver un contact. Ces press kits y répondent, du club à l'événement corporate.",
    href: "/dj",
    linkLabel: "Voir la page press kit DJ",
    titles: ["DJ MACK", "Soyumi", "DJ FLO", "Arthur Chaps", "DJ SLY'D", "Yoruboy", "DJ Pirate", "DJ GDC", "Silver DJ", "Paul Keranne", "DJ Wayans"],
  },
  {
    title: "Press kits artistes",
    intro: "Chanson, rap, slam ou peinture : la base reste la même, l'ordre change. Compare ce que chacun place en premier.",
    href: "/artiste",
    linkLabel: "Voir la page press kit artiste",
    titles: ["Sherin", "Black Moz", "MelyMelow"],
  },
  {
    title: "Press kits danseurs",
    intro: "Un directeur de casting ou une marque veut voir la danse, puis comprendre le parcours. La page peut aussi présenter un collectif.",
    href: "/danseur",
    linkLabel: "Voir la page press kit danseur",
    titles: ["KRIMO"],
  },
  {
    title: "Press kits organisateurs de soirée",
    intro: "Un lieu ou un sponsor veut comprendre le concept avant de répondre. Chaque page le présente à sa façon.",
    href: "/organisateur",
    linkLabel: "Voir la page press kit organisateur",
    titles: ["La Bringue", "La MIF"],
  },
  {
    title: "Press kits photographes et vidéastes",
    intro: "Un client regarde d'abord les images, puis les prestations. Le press kit réunit les deux, avec le contact.",
    href: "/photographe",
    linkLabel: "Voir la page press kit photographe",
    titles: ["Lokko TV"],
  },
  {
    title: "Press kits coachs sportifs",
    intro: "Un futur client compare les offres avant de réserver. Le press kit les présente avec un contact direct.",
    href: "/coach-sportif",
    linkLabel: "Voir la page press kit coach sportif",
    titles: ["Coach Momar"],
  },
  {
    title: "Press kits beauté",
    intro: "Maquillage ou ongles : une cliente veut voir le travail, les prestations et la façon de réserver.",
    href: "/make-up-artist",
    linkLabel: "Voir la page press kit make-up artist",
    titles: ["Ishma Make Up Artist", "Sophie Beauty"],
  },
  {
    title: "Press kits créateurs de contenu",
    intro: "Une marque veut connaître le créateur, voir ses contenus et savoir à qui écrire. Le press kit sert aussi de portfolio UGC.",
    href: "/createur-de-contenu",
    linkLabel: "Voir la page press kit créateur de contenu",
    titles: ["Julia"],
  },
];

type ExamplesGalleryGridProps = {
  previewAssets?: Record<string, PreviewAssets>;
};

export function ExamplesGalleryGrid({ previewAssets = {} }: ExamplesGalleryGridProps) {
  const galleryExamples = examples.filter((example) => example.category !== "Chef / Traiteur");
  const galleryCategories = Array.from(new Set(galleryExamples.map((example) => example.category)));
  const filterOptions = [
    { value: "all", label: "Tous les métiers" },
    ...galleryCategories.map((category) => ({ value: category, label: category })),
  ];
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredExamples = useMemo(
    () =>
      activeFilter === "all"
        ? galleryExamples
        : galleryExamples.filter((example) => example.category === activeFilter),
    [activeFilter, galleryExamples],
  );
  const visibleGroups = exampleGroups
    .map((group) => ({
      ...group,
      examples: group.titles
        .map((title) => filteredExamples.find((example) => example.title === title))
        .filter((example): example is (typeof galleryExamples)[number] => Boolean(example)),
    }))
    .filter((group) => group.examples.length > 0);

  return (
    <section className="section-divider pb-20 pt-6 md:pt-8">
      <PageShell>
        <div className="flex flex-wrap gap-2.5">
          {filterOptions.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-lg border px-4 py-2 text-sm font-medium transition duration-fast",
                activeFilter === filter.value
                  ? "border-white/[0.24] bg-white text-ink shadow-[0_18px_48px_rgba(255,255,255,0.14)]"
                  : "border-white/[0.12] bg-white/[0.04] text-white/[0.64] hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {visibleGroups.map((group) => (
          <div key={group.title} className="mt-14">
            <h2 className="max-w-3xl text-3xl font-semibold leading-[1.08] md:leading-[1.08] tracking-tighter2 text-white md:text-4xl">{group.title}</h2>
            <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.64]">{group.intro}</p>
            {group.href ? (
              <Link
                href={group.href}
                className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
              >
                {group.linkLabel}
              </Link>
            ) : null}
            <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {group.examples.map((example) => {
                // startsWith : « Photographe-vidéaste » reprend la catégorie « Photographe ».
                const category = categories.find((item) => example.category.startsWith(item.shortName));
                const href = example.externalDemoUrl ?? category?.externalDemoUrl ?? example.href;
                const isExternal = href.startsWith("http");
                const image = example.image ?? category?.heroImage;
                const mobileImage = example.mobileImage;
                const imagePosition = example.imagePosition ?? category?.heroImagePosition;

                return (
                  <div key={`${activeFilter}-${example.slug}`} className="panel-premium group rounded-lg p-5">
                    <ExampleMockup
                      id={example.slug}
                      title={example.title}
                      category={example.category}
                      desktopImage={image}
                      mobileImage={mobileImage}
                      imagePosition={imagePosition}
                      accent={example.accent}
                      boxClassName="h-[22rem] rounded-lg sm:h-[25.5rem] md:h-[27rem] xl:h-[22rem]"
                      desktopSizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 74vw"
                      mobileSizes="(min-width: 1280px) 8vw, (min-width: 768px) 12vw, 22vw"
                      preview={previewAssets[example.slug]}
                    />
                    <p className="mt-5 text-xs uppercase tracking-label text-white/[0.64]">{example.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{example.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/[0.64]">{example.galleryLine ?? example.description}</p>
                    {example.testimonialHref ? (
                      <Link
                        href={example.testimonialHref}
                        className="relative z-30 mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
                      >
                        Voir son témoignage vidéo
                      </Link>
                    ) : null}
                    <p className="mt-6 text-sm font-medium text-white/[0.84]">
                      {isExternal ? `Voir le press kit ${withDe(example.title)}` : "Decouvrir ce format"}{" "}
                      <span className="transition group-hover:translate-x-1 inline-block">→</span>
                    </p>
                    <Link
                      href={href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                      aria-label={`Voir le press kit ${withDe(example.title)}${isExternal ? " (nouvel onglet)" : ""}`}
                      className="absolute inset-0 z-20 rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-850"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </PageShell>
    </section>
  );
}
