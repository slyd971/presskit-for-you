"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import { categories, examples } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { ExampleMockup } from "@/components/marketing/example-mockup";
import type { PreviewAssets } from "@/lib/preview-assets";
import { cn } from "@/lib/utils";

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
          {filteredExamples.map((example) => {
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
                <ExampleMockup
                  title={example.title}
                  desktopImage={image}
                  mobileImage={mobileImage}
                  imagePosition={imagePosition}
                  accent={example.accent}
                  boxClassName="h-[22rem] rounded-lg md:h-[27rem] xl:h-[22rem]"
                  desktopSizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 74vw"
                  mobileSizes="(min-width: 1280px) 8vw, (min-width: 768px) 12vw, 22vw"
                  preview={previewAssets[example.slug]}
                />
                <p className="mt-5 text-xs uppercase tracking-[0.28em] text-white/44">{example.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{example.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/64">{example.description}</p>
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
