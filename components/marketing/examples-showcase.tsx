import Link from "next/link";

import { categories, examples } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

export function ExamplesShowcase() {
  const exampleBadges = [
    "Le plus demande",
    "Editorial premium",
    "Ideal conversion",
    "Image haut de gamme",
  ];

  return (
    <section className="section-divider section-wash py-20">
      <PageShell>
        <SectionHeading
          eyebrow="Exemples"
          title="Quelques directions possibles selon l’univers et le niveau de gamme."
          description="Le site présente des démos par catégorie pour aider à se projeter rapidement dans un rendu concret."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {examples.slice(0, 4).map((example, index) => (
            <Reveal key={example.slug} delay={index * 0.05}>
              {(() => {
                const category = categories.find((item) => item.shortName === example.category);
                const href = example.externalDemoUrl ?? category?.externalDemoUrl ?? example.href;
                const isExternal = href.startsWith("http");
                const image = example.image ?? category?.heroImage;
                const imagePosition = example.imagePosition ?? category?.heroImagePosition;

                return (
                  <Link
                    href={href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noreferrer" : undefined}
                    className="panel-premium group grid gap-5 rounded-lg p-5 lg:grid-cols-[0.9fr_1.1fr]"
                  >
                <div className="relative min-h-56 overflow-hidden rounded-lg border border-white/8">
                  {image ? (
                    <>
                      <img
                        src={image}
                        alt={example.title}
                        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                        style={imagePosition ? { objectPosition: imagePosition } : undefined}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                    </>
                  ) : (
                    <div
                      className="h-full w-full"
                      style={{
                        background: `linear-gradient(135deg, ${example.accent}33, rgba(255,255,255,0.05))`,
                      }}
                    />
                  )}
                  <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                    <span className="rounded-lg border border-white/12 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                      {exampleBadges[index]}
                    </span>
                    {isExternal ? (
                      <span className="rounded-lg border border-white/12 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                        Demo live
                      </span>
                    ) : null}
                  </div>
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-white/58">
                        {example.category}
                      </p>
                      <p className="mt-2 text-lg font-medium text-white">{example.title}</p>
                    </div>
                    <span className="rounded-lg border border-white/12 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/74 backdrop-blur-md">
                      Premium
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">{example.category}</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">{example.title}</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-white/65">{example.description}</p>
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
                  </div>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm text-white">
                    {isExternal ? "Ouvrir la demo" : "Découvrir la catégorie"}{" "}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </div>
                </div>
                  </Link>
                );
              })()}
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
