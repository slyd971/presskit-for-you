"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { categories } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

export function CategoriesGrid() {
  const displayCategories = categories.filter((category) => category.slug !== "chef");
  const categoryCards = displayCategories.flatMap((category) => {
    if (category.slug !== "dj") {
      return [{ ...category, filterSlug: category.slug }];
    }

    return [
      { ...category, filterSlug: category.slug },
      {
        ...category,
        slug: "dj-yoruboy",
        name: "Yoruboy DJ",
        shortName: "Yoruboy",
        description: "Une vitrine DJ premium, directe et prête à envoyer aux bookers.",
        heroImage: "/dj-yoruboy-desktop.png",
        heroImageAlt: "Aperçu desktop du press kit DJ Yoruboy",
        externalDemoUrl: "https://yoruboy-dj.presskit.fr",
        filterSlug: "dj",
      },
    ];
  });
  const [activeCategory, setActiveCategory] = useState("all");
  const filteredCategories = useMemo(
    () =>
      activeCategory === "all"
        ? categoryCards
        : categoryCards.filter((category) => category.filterSlug === activeCategory),
    [activeCategory, categoryCards],
  );
  const badges: Record<string, string> = {
    dj: "Booking",
    "dj-yoruboy": "Exemple live",
    artiste: "Éditorial",
    "coach-sportif": "Conversion",
    "make-up-artist": "Beauty",
    photographe: "Portfolio",
  };
  const cardDescriptions: Record<string, string> = {
    dj: "Un lien clair pour montrer ton univers, tes médias et ton contact booking.",
    "dj-yoruboy": "Exemple Yoruboy : une vitrine DJ premium, directe et prête à envoyer aux bookers.",
    artiste: "Une vitrine élégante pour poser ton image, tes sorties et tes demandes de collab.",
    "coach-sportif": "Une présentation nette pour rendre ton offre plus crédible et plus facile à choisir.",
    "make-up-artist": "Un portfolio premium pour valoriser tes looks, tes prestations et tes demandes de booking.",
    photographe: "Un aperçu visuel fort pour présenter ton style, tes formats et tes projets.",
  };
  const mobilePreviewImages: Record<string, string> = {
    dj: "/mobile-dj.jpg",
    "dj-yoruboy": "/mobile-dj-ypruboy.jpg",
    artiste: "/mobile.artist.png",
    "make-up-artist": "/mobile-makeupartist.jpg",
    photographe: "/mobile-photographe.jpg",
  };
  const desktopPreviewImages: Record<string, string> = {
    "dj-yoruboy": "/dj-yoruboy-desktop.png",
    "coach-sportif": "/coach.png",
  };
  const demoLinks: Record<string, string> = Object.fromEntries(
    categoryCards
      .filter((category) => category.externalDemoUrl)
      .map((category) => [category.slug, category.externalDemoUrl as string]),
  );
  const mobileCropClasses: Record<string, string> = {
    dj: "h-[124%] -translate-y-[13%] object-cover",
    "dj-yoruboy": "h-[124%] -translate-y-[13%] object-cover",
    artiste: "h-[118%] -translate-y-[9%] object-cover",
    "make-up-artist": "h-[122%] -translate-y-[11%] object-cover",
    photographe: "h-[122%] -translate-y-[11%] object-cover",
  };

  return (
    <section className="section-divider py-24 md:py-28" aria-labelledby="categories-title">
      <PageShell>
        <SectionHeading
          eyebrow="Par métier"
          title="Des modèles premium conçus pour des besoins réels."
          description="Chaque univers a ses codes, ses contenus et ses déclencheurs de confiance. Le site s’adapte au métier, pas l’inverse."
          id="categories-title"
        />
        <div className="mt-10 flex flex-wrap gap-2.5">
          <button
            type="button"
            onClick={() => setActiveCategory("all")}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition duration-300",
              activeCategory === "all"
                ? "border-white/[0.24] bg-white text-ink shadow-[0_18px_48px_rgba(255,255,255,0.14)]"
                : "border-white/10 bg-white/[0.045] text-white/[0.68] hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white",
            )}
          >
            Tous les métiers
          </button>
          {displayCategories.map((category) => (
            <button
              key={category.slug}
              type="button"
              onClick={() => setActiveCategory(category.slug)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition duration-300",
                activeCategory === category.slug
                  ? "border-white/[0.24] bg-white text-ink shadow-[0_18px_48px_rgba(255,255,255,0.14)]"
                  : "border-white/10 bg-white/[0.045] text-white/[0.68] hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white",
              )}
            >
              {category.shortName}
            </button>
          ))}
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {filteredCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <Link
                href={demoLinks[category.slug] ?? `/presskit/${category.slug}`}
                target={demoLinks[category.slug] ? "_blank" : undefined}
                rel={demoLinks[category.slug] ? "noreferrer" : undefined}
                className="panel-premium group flex h-full min-h-[31.5rem] flex-col overflow-visible rounded-[1.9rem] p-5"
              >
                <div className="mb-4 flex justify-end">
                  <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/[0.62]">
                    {badges[category.slug] ?? "Sur mesure"}
                  </span>
                </div>
                {category.heroImage ? (
                  <div className="relative h-56 rounded-[1.5rem]">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-25 blur-2xl`} />
                    <div className="absolute left-1/2 top-3 z-10 w-[82%] -translate-x-1/2 transition duration-500 group-hover:-translate-y-1">
                      <div className="overflow-hidden rounded-t-[0.9rem] border border-white/[0.16] bg-[#07090e] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.1)]">
                        <div className="relative aspect-[1.58/1] overflow-hidden rounded-t-[0.62rem] bg-black">
                          <img
                            src={
                              desktopPreviewImages[category.slug] ??
                              category.previewImage ??
                              category.heroImage
                            }
                            alt={category.heroImageAlt ?? category.name}
                            className={cn(
                              "h-full w-full object-top transition duration-700 group-hover:scale-[1.025]",
                              category.slug === "dj" ? "object-contain" : "object-cover",
                            )}
                            style={
                              category.previewImagePosition || category.heroImagePosition
                                ? { objectPosition: category.previewImagePosition ?? category.heroImagePosition }
                                : undefined
                            }
                          />
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_24%,transparent_72%,rgba(255,255,255,0.06))]" />
                        </div>
                      </div>
                      <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
                    </div>
                    <div className="absolute -bottom-5 right-4 z-20 w-[24%] min-w-[4.45rem] transition duration-500 group-hover:-translate-y-1">
                      <div className="relative rounded-[1.35rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)]">
                        <div className="relative aspect-[0.48/1] overflow-hidden rounded-[1rem] bg-black">
                          <div className="absolute left-1/2 top-1.5 z-20 h-2.5 w-8 -translate-x-1/2 rounded-full bg-[#050609]" />
                          <img
                            src={
                              mobilePreviewImages[category.slug] ??
                              desktopPreviewImages[category.slug] ??
                              category.previewImage ??
                              category.heroImage
                            }
                            alt={`${category.name} en version mobile`}
                            className={cn(
                              "w-full object-top transition duration-700 group-hover:scale-[1.03]",
                              mobileCropClasses[category.slug] ?? "h-full",
                            )}
                            style={
                              !mobilePreviewImages[category.slug] &&
                              (category.previewImagePosition || category.heroImagePosition)
                                ? { objectPosition: category.previewImagePosition ?? category.heroImagePosition }
                                : undefined
                            }
                          />
                          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.14),transparent_28%,transparent_76%,rgba(255,255,255,0.055))]" />
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className={`h-48 rounded-[1.5rem] bg-gradient-to-br ${category.gradient} ring-1 ring-inset ring-white/10`} />
                )}
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">{category.shortName}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/[0.66]">
                  {cardDescriptions[category.slug] ?? category.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm font-medium text-white/80">
                  <span>{demoLinks[category.slug] ? "Voir l’exemple live" : "Découvrir ce format"}</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
