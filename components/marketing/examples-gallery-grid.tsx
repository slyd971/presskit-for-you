"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { categories, examples } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

export function ExamplesGalleryGrid() {
  const galleryExamples = examples.filter((example) => example.category !== "Chef / Traiteur");
  const filterOptions = [
    { value: "all", label: "Tous les métiers" },
    ...categories
      .filter((category) => category.slug !== "chef")
      .map((category) => ({ value: category.shortName, label: category.shortName })),
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
    Artiste: "Editorial premium",
    "Coach sportif": "Offre claire",
    Photographe: "Portfolio premium",
    "Make up artist": "Image haut de gamme",
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
                "rounded-full border px-4 py-2 text-sm font-medium transition duration-300",
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
            const imagePosition = example.imagePosition ?? category?.heroImagePosition;

            return (
              <Link
                key={`${activeFilter}-${example.slug}`}
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="panel-premium group rounded-[2rem] p-5"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8">
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt={example.title}
                        className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                        style={imagePosition ? { objectPosition: imagePosition } : undefined}
                      />
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
                    <span className="rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                      {galleryBadges[example.category] ?? "Premium"}
                    </span>
                    {index === 1 ? (
                      <span className="rounded-full border border-white/12 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                        Le plus demande
                      </span>
                    ) : null}
                  </div>
                  <div className="absolute inset-x-4 bottom-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-white/60">{example.category}</p>
                    <p className="mt-2 text-xl font-semibold text-white">{example.title}</p>
                  </div>
                </div>
                <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/44">{example.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{example.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{example.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(category?.sampleHighlights ?? []).slice(0, 2).map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/58"
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
