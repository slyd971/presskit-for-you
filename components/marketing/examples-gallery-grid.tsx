"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { categories, examples } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

export function ExamplesGalleryGrid() {
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

  const galleryBadges: Record<string, string> = {
    DJ: "Ideal pour booking",
    "Artiste peintre": "Editorial premium",
    Chanteuse: "Sortie musicale",
    Danseur: "Video-first",
    Organisateur: "Sponsors ready",
    "Coach sportif": "Offre claire",
    Photographe: "Portfolio premium",
    "Make-up artist": "Image haut de gamme",
  };

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
                "rounded-lg border px-4 py-2 text-sm font-medium transition duration-300",
                activeFilter === filter.value
                  ? "border-white/[0.24] bg-white text-ink shadow-[0_18px_48px_rgba(255,255,255,0.14)]"
                  : "border-white/10 bg-white/[0.045] text-white/[0.68] hover:border-white/[0.18] hover:bg-white/[0.08] hover:text-white",
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredExamples.map((example, index) => {
            const category = categories.find((item) => item.shortName === example.category);
            const href = example.externalDemoUrl ?? category?.externalDemoUrl ?? example.href;
            const isExternal = href.startsWith("http");
            const image = example.image ?? category?.heroImage;
            const mobileImage = example.mobileImage;
            const imagePosition = example.imagePosition ?? category?.heroImagePosition;

            return (
              <Link
                key={`${activeFilter}-${example.slug}`}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="panel-premium group rounded-lg p-5"
              >
                <div className="relative h-64 overflow-hidden rounded-lg border border-white/8 bg-[#07090e]">
                  {image ? (
                    <>
                      <div className="absolute left-4 top-8 w-[82%] rotate-[-1.5deg] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-0.4deg]">
                        <div className="overflow-hidden rounded-t-[0.85rem] border border-white/[0.14] bg-black p-1.5 shadow-[0_22px_70px_rgba(0,0,0,0.42)]">
                          <div className="aspect-[1.58/1] overflow-hidden rounded-t-[0.55rem] bg-black">
                            <img
                              src={image}
                              alt={`${example.title} en version desktop`}
                              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                              style={imagePosition ? { objectPosition: imagePosition } : undefined}
                            />
                          </div>
                        </div>
                        <div className="mx-auto h-2 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)]" />
                      </div>
                      {mobileImage ? (
                        <div className="absolute bottom-5 right-4 w-[23%] min-w-[4.2rem] rotate-[4deg] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[2deg]">
                          <div className="rounded-[1.05rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_52px_rgba(0,0,0,0.48)]">
                            <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black">
                              <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609]" />
                              <img
                                src={mobileImage}
                                alt={`${example.title} en version mobile`}
                                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                              />
                            </div>
                          </div>
                        </div>
                      ) : null}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    </>
                  ) : (
                    <div
                      className="h-56"
                      style={{
                        background: `linear-gradient(135deg, ${example.accent}30, rgba(255,255,255,0.04))`,
                      }}
                    />
                  )}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-white/12 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                      {galleryBadges[example.category] ?? "Premium"}
                    </span>
                    {index === 1 ? (
                      <span className="rounded-lg border border-white/12 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                        Le plus demande
                      </span>
                    ) : null}
                  </div>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/44">{example.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{example.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{example.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(category?.sampleHighlights ?? []).slice(0, 2).map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-lg border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/58"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-sm font-medium text-white/80">
                  {isExternal ? "Voir le rendu en live" : "Decouvrir ce format"}{" "}
                  <span className="transition group-hover:translate-x-1 inline-block">→</span>
                </p>
              </Link>
            );
          })}
        </div>
      </PageShell>
    </section>
  );
}
