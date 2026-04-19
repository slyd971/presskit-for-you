import Link from "next/link";

import { categories } from "@/content/site";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

export function CategoriesGrid() {
  const displayCategories = categories.filter((category) => category.slug !== "chef");
  const badges: Record<string, string> = {
    dj: "Ideal pour booking",
    artiste: "Le plus editorial",
    "coach-sportif": "Conversion premium",
    "make-up-artist": "Tres demande",
    photographe: "Portfolio premium",
  };

  return (
    <section className="section-divider py-20" aria-labelledby="categories-title">
      <PageShell>
        <SectionHeading
          eyebrow="Par métier"
          title="Des modèles premium conçus pour des besoins réels."
          description="Chaque univers a ses codes, ses contenus et ses déclencheurs de confiance. Le site s’adapte au métier, pas l’inverse."
          id="categories-title"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {displayCategories.map((category, index) => (
            <Reveal key={category.slug} delay={index * 0.06}>
              <Link
                href={`/presskit/${category.slug}`}
                className="panel-premium group block overflow-hidden rounded-[1.9rem] p-5"
              >
                <div className="mb-4 flex justify-end">
                  <span className="rounded-full border border-white/10 bg-white/6 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/62">
                    {badges[category.slug] ?? "Sur mesure"}
                  </span>
                </div>
                {category.heroImage ? (
                  <div className="relative overflow-hidden rounded-[1.5rem] border border-white/8">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                    <img
                      src={category.heroImage}
                      alt={category.heroImageAlt ?? category.name}
                      className="h-44 w-full object-cover object-top transition duration-500 group-hover:scale-[1.04]"
                      style={category.heroImagePosition ? { objectPosition: category.heroImagePosition } : undefined}
                    />
                    <div className="absolute inset-x-4 bottom-4 z-20">
                      <span className="rounded-full border border-white/12 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/72 backdrop-blur-md">
                        Preview
                      </span>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`h-44 rounded-[1.5rem] bg-gradient-to-br ${category.gradient} ring-1 ring-inset ring-white/10`}
                  />
                )}
                <h3 className="mt-5 text-2xl font-semibold text-white">{category.shortName}</h3>
                <p className="mt-3 text-sm leading-7 text-white/65">{category.description}</p>
                <div className="mt-6 flex items-center justify-between text-sm text-white/78">
                  <span>Découvrir ce format</span>
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
