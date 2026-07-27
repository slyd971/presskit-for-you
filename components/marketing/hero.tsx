import { categories } from "@/content/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

export function Hero() {
  const featured = categories.find((item) => item.slug === "dj") ?? categories[0];

  return (
    <section className="section-wash relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(255,255,255,0.07),transparent_28%),radial-gradient(circle_at_64%_78%,rgba(255,255,255,0.052),transparent_24%),linear-gradient(180deg,#0d1118,rgba(17,22,32,0.97))]" />
      <PageShell className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal>
          <div className="w-full max-w-[17.5rem] min-w-0 pt-0 min-[375px]:max-w-[20rem] sm:max-w-[46rem] lg:pb-10">
            <Badge className="border-white/[0.14] bg-white/[0.075] text-white/[0.82] shadow-[0_14px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.1)]">
              Un simple lien. Toute votre activité.
            </Badge>
            <h1 id="hero-title" className="mt-7 max-w-[17.5rem] break-words text-[clamp(2.35rem,10vw,5.45rem)] font-semibold leading-[0.92] tracking-tighter2 text-white min-[375px]:max-w-[20rem] sm:max-w-[44rem] sm:text-[clamp(3rem,6.2vw,5.45rem)]">
              <span className="block">Plus pro qu&apos;Instagram.</span>
              <span className="block text-white/[0.92]">Plus impactant</span>
              <span className="block text-white/[0.92]">qu&apos;un PDF.</span>
            </h1>
            <p className="mt-7 max-w-[35rem] text-base leading-8 text-white/[0.72] md:text-lg md:leading-9">
              Présentez votre activité, vos réalisations, vos contenus et vos références dans une expérience premium pensée pour convaincre en quelques secondes.
            </p>
            <p className="mt-5 max-w-[31rem] text-sm leading-7 text-white/[0.68] md:text-base">
              Pensé pour les artistes, créateurs, entrepreneurs et organisateurs qui vivent de leur image.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="#exemples"
                className="min-h-12 w-full px-7 py-4 text-[15px] shadow-[0_26px_80px_rgba(255,255,255,0.2),inset_0_-1px_0_rgba(13,16,22,0.16)] sm:w-auto"
              >
                Voir des exemples
              </Button>
              <Button
                href="#contact"
                variant="secondary"
                className="min-h-12 w-full px-6 py-4 text-[15px] text-white/[0.88] sm:w-auto"
              >
                Lancer mon projet
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative isolate min-w-0 overflow-visible pt-8 sm:pt-10 lg:p-8">
            <div className="ambient-shift absolute inset-x-4 top-16 h-72 bg-[radial-gradient(circle_at_52%_38%,rgba(255,255,255,0.09),transparent_48%)] blur-3xl" />
            <div className="relative min-h-[24rem] sm:min-h-[31rem] lg:min-h-[39rem]">
              <a
                href={featured.externalDemoUrl ?? "#exemples"}
                target={featured.externalDemoUrl ? "_blank" : undefined}
                rel={featured.externalDemoUrl ? "noreferrer" : undefined}
                className="group absolute left-0 top-0 block w-[96%] sm:left-3 sm:w-[88%] lg:left-2"
                aria-label={`${featured.name} - aperçu desktop`}
              >
                <div className="hero-device-float relative transition duration-500 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-[1.45rem] border border-white/[0.2] bg-[#111620] p-2 shadow-[0_34px_110px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-500 group-hover:border-white/[0.3] md:rounded-t-[1.75rem] md:p-2.5">
                    <div className="pointer-events-none absolute inset-x-8 top-0 z-20 h-px bg-gradient-to-r from-transparent via-white/[0.38] to-transparent" />
                    <div className="absolute left-1/2 top-1.5 z-20 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/18" />
                    <div className="relative aspect-[1.58/1] overflow-hidden rounded-t-[1rem] bg-black md:rounded-t-[1.2rem]">
                      <img
                        src="/dj.png"
                        alt={featured.heroImageAlt ?? featured.name}
                        className="h-full w-full object-contain object-top transition duration-700 group-hover:scale-[1.015]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.16),transparent_18%,transparent_68%,rgba(255,255,255,0.055))]" />
                    </div>
                  </div>
                  <div className="relative mx-auto h-5 w-[106%] -translate-x-[3%] rounded-b-[1.4rem] border border-white/[0.14] bg-[linear-gradient(180deg,#303545,#0b0d13)] shadow-[0_18px_48px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14)]">
                    <div className="absolute left-1/2 top-0 h-1.5 w-24 -translate-x-1/2 rounded-b-xl bg-white/[0.12]" />
                  </div>
                  <div className="mx-auto h-2 w-[82%] rounded-b-full bg-black/45 blur-sm" />
                </div>
              </a>
              <a
                href={featured.externalDemoUrl ?? "#exemples"}
                target={featured.externalDemoUrl ? "_blank" : undefined}
                rel={featured.externalDemoUrl ? "noreferrer" : undefined}
                className="group absolute bottom-0 right-0 block w-[38%] min-w-[8.25rem] max-w-[14.5rem] sm:right-2 sm:w-[31%] lg:w-[28%]"
                aria-label={`${featured.name} - aperçu mobile`}
              >
                <div className="hero-device-float-slow relative rounded-[2.2rem] border border-white/[0.2] bg-[linear-gradient(145deg,#353b4d,#07090e_38%,#171b25)] p-1.5 shadow-[0_36px_110px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-500 group-hover:-translate-y-1 group-hover:border-white/[0.3] md:rounded-[2.45rem] md:p-2">
                  <div className="absolute inset-0 rounded-[2.2rem] bg-[linear-gradient(120deg,rgba(255,255,255,0.22),transparent_18%,transparent_72%,rgba(255,255,255,0.08))] opacity-60 md:rounded-[2.45rem]" />
                  <div className="relative aspect-[0.48/1] overflow-hidden rounded-[1.75rem] bg-black md:rounded-[2rem]">
                    <div className="absolute left-1/2 top-2 z-20 h-5 w-16 -translate-x-1/2 rounded-full bg-[#050609] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]" />
                    <img
                      src="/mobile-dj.jpg"
                      alt={`${featured.name} en version mobile`}
                      className="h-[132%] w-full -translate-y-[15%] object-cover object-top transition duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.18),transparent_22%,transparent_72%,rgba(255,255,255,0.06))]" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Reveal>
      </PageShell>
    </section>
  );
}
