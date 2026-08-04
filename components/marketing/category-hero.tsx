import Link from "next/link";
import Image from "next/image";

import type { Category } from "@/content/site";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/layout/page-shell";
import { Reveal } from "@/components/ui/reveal";
import { getExamplesForPresskitCategory } from "@/lib/presskit-categories";

type CategoryHeroProps = {
  category: Category;
};

export function CategoryHero({ category }: CategoryHeroProps) {
  const examples = getExamplesForPresskitCategory(category.slug);
  const heroExample = examples[0];
  const href = heroExample?.externalDemoUrl ?? category.externalDemoUrl ?? "/exemples";
  const isExternal = href.startsWith("http");
  const image = heroExample?.image ?? category.heroImage;
  const mobileImage = heroExample?.mobileImage;
  const imagePosition = heroExample?.imagePosition ?? category.heroImagePosition;

  return (
    <section className="section-wash relative overflow-hidden pb-12 pt-24 md:pb-20 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(circle at 72% 18%, ${category.accentSoft}, transparent 32%), radial-gradient(circle at 18% 0%, rgba(255,255,255,0.06), transparent 24%)`,
        }}
      />
      <PageShell className="relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)] lg:gap-16">
        <Reveal>
          <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl lg:pb-10">
            <h1 className="max-w-[45rem] break-words text-[clamp(2.35rem,7.2vw,5.45rem)] font-semibold leading-[0.94] tracking-tighter2 text-white">
              {category.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-[0.95rem] leading-7 text-white/[0.72] md:text-lg md:leading-9">
              {category.heroDescription}
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/#contact" className="min-h-12 px-7 py-4 text-[15px]">
                Créer mon press kit
              </Button>
              <Button href={href} variant="secondary" className="min-h-12 px-6 py-4 text-[15px]">
                Voir une démo
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="group block overflow-visible outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#111620]"
          >
            <div className="relative min-h-[21rem] overflow-visible sm:min-h-[36rem]">
              <div
                className="ambient-shift pointer-events-none absolute inset-8 rounded-full opacity-80 blur-3xl"
                style={{ background: category.accentSoft }}
              />
              <div className="absolute left-1/2 top-8 w-[96%] -translate-x-1/2 rotate-[-1.2deg] transition duration-500 group-hover:-translate-y-1.5 group-hover:rotate-[-0.35deg] sm:top-10">
                <div className="mockup-surface relative overflow-hidden rounded-t-[0.9rem] border border-white/[0.14] bg-[#07090e] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.12)]">
                  <div className="relative aspect-[91/60] overflow-hidden rounded-t-[0.62rem] bg-black">
                    {image ? (
                      <Image
                        src={image}
                        alt={heroExample ? `${heroExample.title} en version desktop` : category.heroImageAlt ?? category.name}
                        fill
                        priority
                        sizes="(min-width: 1024px) 52vw, 96vw"
                        className="object-contain object-center"
                        style={imagePosition ? { objectPosition: imagePosition } : undefined}
                      />
                    ) : (
                      <div className={`h-full w-full bg-gradient-to-br ${category.gradient}`} />
                    )}
                  </div>
                </div>
                <div className="mx-auto h-2.5 w-[106%] -translate-x-[3%] rounded-b-xl border border-white/[0.1] bg-[linear-gradient(180deg,#2b3040,#0a0c12)] shadow-[0_10px_28px_rgba(0,0,0,0.34)]" />
                {mobileImage ? (
                  <div className="absolute -bottom-5 -right-5 z-20 w-[27%] min-w-[4.7rem] rotate-[5deg] transition duration-500 group-hover:-translate-y-2 group-hover:rotate-[2deg] md:-bottom-8 md:-right-8 md:min-w-[5.6rem]">
                    <div className="mockup-surface relative rounded-[1.1rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_50px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.14)] md:rounded-[1.35rem]">
                      <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.78rem] bg-black md:rounded-[1rem]">
                        <div className="absolute left-1/2 top-1.5 z-20 h-2 w-6 -translate-x-1/2 rounded-full bg-[#050609] md:h-2.5 md:w-8" />
                        <Image
                          src={mobileImage}
                          alt={heroExample ? `${heroExample.title} en version mobile` : `${category.name} en version mobile`}
                          fill
                          sizes="(min-width: 768px) 15vw, 24vw"
                          className="object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div className="border-t border-white/[0.1] pt-5">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <h2 className="text-2xl font-semibold leading-tight text-white md:text-3xl">
                  {heroExample?.title ?? category.heroOverlayTitle ?? category.name}
                </h2>
                <span className="text-sm font-semibold text-white">Voir le projet →</span>
              </div>
            </div>
          </Link>
        </Reveal>
      </PageShell>
    </section>
  );
}
