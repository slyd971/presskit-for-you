import type { Metadata } from "next";
import Link from "next/link";

import { examples, categories } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Explore plusieurs démos de press kits digitaux premium par métier.",
};

export default function GalleryPage() {
  const galleryExamples = examples.filter((example) => example.category !== "Chef / Traiteur");
  const galleryBadges: Record<string, string> = {
    DJ: "Ideal pour booking",
    Artiste: "Editorial premium",
    "Coach sportif": "Le plus rassurant",
    Photographe: "Portfolio premium",
    "Make up artist": "Portfolio premium",
  };

  return (
    <>
      <section className="section-wash py-16 md:py-24">
        <PageShell className="max-w-4xl">
          <Badge className="bg-white/[0.07] text-white/78">Galerie</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white md:text-7xl">
            Des exemples pour se projeter rapidement dans le bon niveau de rendu.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Cette galerie montre différentes directions visuelles et différents usages selon les métiers.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
              Demos premium par univers
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/72">
              Vrais exemples orientés conversion
            </span>
          </div>
        </PageShell>
      </section>
      <section className="section-divider pb-20">
        <PageShell className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {galleryExamples.map((example, index) => {
            const category = categories.find((item) => item.shortName === example.category);
            const href = category?.externalDemoUrl ?? example.href;

            return (
              <Link
                key={example.slug}
                href={href}
                target={category?.externalDemoUrl ? "_blank" : undefined}
                rel={category?.externalDemoUrl ? "noreferrer" : undefined}
                className="panel-premium group rounded-[2rem] p-5"
              >
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8">
                  {category?.heroImage ? (
                    <>
                      <img
                        src={category.heroImage}
                        alt={example.title}
                        className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                        style={category.heroImagePosition ? { objectPosition: category.heroImagePosition } : undefined}
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
                    {index < 2 ? (
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
                {category ? (
                  <p className="mt-6 text-sm text-white/76">
                    {category.externalDemoUrl ? "Ouvrir la demo live" : `Explorer ${category.name.toLowerCase()}`} →
                  </p>
                ) : null}
              </Link>
            );
          })}
        </PageShell>
      </section>
    </>
  );
}
