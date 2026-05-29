"use client";

import Link from "next/link";

import { categories } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

export function CategoriesGrid() {
  const categoryBySlug = Object.fromEntries(categories.map((category) => [category.slug, category]));
  const categoryCards = [
    {
      ...categoryBySlug.dj,
      shortName: "DJ",
      exampleName: "DJ SLY'D",
      description: "Une vitrine DJ premium pour présenter l'univers, les médias et le contact booking.",
      mobileImage: "/mobile-dj.jpg",
      externalDemoUrl: "https://djslyd.presskit.fr",
    },
    {
      ...categoryBySlug.artiste,
      shortName: "Artiste",
      exampleName: "SLY'D",
      description: "Une présence éditoriale pour valoriser les sorties, les contenus et les demandes de collaboration.",
      mobileImage: "/mobile.artist.png",
      externalDemoUrl: "https://artist-presskit.vercel.app/",
    },
    {
      ...categoryBySlug.photographe,
      shortName: "Photographe",
      exampleName: "Lokko",
      description: "Un portfolio premium pour montrer un regard, des formats et des références en quelques secondes.",
      mobileImage: "/mobile-photographe.jpg",
      externalDemoUrl: "https://lokko-tv.vercel.app/",
    },
    {
      ...categoryBySlug["coach-sportif"],
      shortName: "Coach",
      exampleName: "Coach Momar",
      description: "Une vitrine claire pour expliquer une méthode, rassurer et faciliter la prise de contact.",
      heroImage: "/gallery-previews/coach-momar.png",
      mobileImage: "/gallery-previews/coach-momar.png",
      externalDemoUrl: "https://coach-momar.vercel.app/",
    },
    {
      ...categoryBySlug["make-up-artist"],
      shortName: "Make-up Artist",
      exampleName: "Ishma",
      description: "Un portfolio premium pour présenter des looks, des prestations et une signature visuelle.",
      mobileImage: "/mobile-makeupartist.jpg",
      externalDemoUrl: "https://ishma-makeupartist.vercel.app/",
    },
  ];
  const mobilePreviewImages: Record<string, string> = {
    dj: "/mobile-dj.jpg",
    artiste: "/mobile.artist.png",
    "make-up-artist": "/mobile-makeupartist.jpg",
    photographe: "/mobile-photographe.jpg",
  };
  const desktopPreviewImages: Record<string, string> = {
    "coach-sportif": "/gallery-previews/coach-momar.png",
  };
  const mobileCropClasses: Record<string, string> = {
    dj: "h-[124%] -translate-y-[13%] object-cover",
    artiste: "h-[118%] -translate-y-[9%] object-cover",
    "coach-sportif": "h-full object-cover",
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
        <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {categoryCards.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <Link
                href={category.externalDemoUrl ?? `/presskit/${category.slug}`}
                target={category.externalDemoUrl ? "_blank" : undefined}
                rel={category.externalDemoUrl ? "noreferrer" : undefined}
                className="panel-premium group flex h-full min-h-[31.5rem] flex-col overflow-visible rounded-[1.9rem] p-5"
              >
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
                              category.mobileImage ??
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
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/[0.44]">
                  Exemple : {category.exampleName}
                </p>
                <p className="mt-3 flex-1 text-sm leading-6 text-white/[0.66]">
                  {category.description}
                </p>
                <div className="mt-6 flex items-center justify-between text-sm font-medium text-white/80">
                  <span>Voir l’exemple live</span>
                  <span className="transition group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/galerie" variant="secondary">
            Voir tous les exemples
          </Button>
        </div>
      </PageShell>
    </section>
  );
}
