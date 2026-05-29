import { categories } from "@/content/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

export function Hero() {
  const featured = categories.find((item) => item.slug === "dj") ?? categories[0];

  return (
    <section className="section-wash relative overflow-hidden py-12 md:py-[4.5rem] md:pb-24" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,145,82,0.24),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(255,216,158,0.14),transparent_28%),radial-gradient(circle_at_64%_78%,rgba(255,255,255,0.045),transparent_24%),linear-gradient(180deg,#080a10,rgba(10,13,19,0.97))]" />
      <div className="absolute left-[-14%] top-16 h-[30rem] w-[30rem] rounded-full bg-[#ff9152]/10 blur-3xl" />
      <div className="absolute right-[-2%] top-6 h-[34rem] w-[34rem] rounded-full bg-[#f4c26b]/[0.075] blur-3xl" />
      <div className="absolute right-[16%] top-24 h-56 w-56 rounded-full bg-white/[0.055] blur-3xl" />
      <PageShell className="relative grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
        <Reveal>
          <div className="max-w-[42rem] pt-0">
            <Badge className="border-white/[0.14] bg-white/[0.075] text-white/[0.82] shadow-[0_14px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.1)]">
              ✨ Un simple lien. Toute votre activité.
            </Badge>
            <h1 id="hero-title" className="mt-5 max-w-[39rem] text-4xl font-semibold leading-[0.94] tracking-tighter2 text-white md:text-[3.75rem] lg:text-[4.28rem]">
              <span className="block">Plus pro qu&apos;Instagram.</span>
              <span className="block text-white/[0.92]">Plus impactant qu&apos;un PDF.</span>
            </h1>
            <p className="mt-5 max-w-[36rem] text-base leading-7 text-white/[0.72] md:text-lg md:leading-8">
              Présentez votre activité, vos réalisations, vos contenus et vos références dans une expérience premium pensée pour convaincre en quelques secondes.
            </p>
            <p className="mt-4 max-w-[34rem] text-sm leading-7 text-white/[0.58] md:text-base">
              Pensé pour les artistes, créateurs, entrepreneurs et organisateurs qui vivent de leur image.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={featured.externalDemoUrl ?? `/presskit/${featured.slug}`}
                className="w-full px-7 py-4 text-[15px] shadow-[0_26px_80px_rgba(255,255,255,0.2),0_10px_40px_rgba(255,145,82,0.14),inset_0_-1px_0_rgba(13,16,22,0.16)] sm:w-auto"
              >
                Voir un exemple
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                className="w-full px-6 py-4 text-[15px] text-white/[0.88] sm:w-auto"
              >
                Lancer mon projet
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative isolate pt-0">
            <div className="absolute -inset-10 rounded-[3.5rem] bg-[radial-gradient(circle_at_52%_38%,rgba(255,145,82,0.22),transparent_38%),radial-gradient(circle_at_70%_62%,rgba(255,255,255,0.12),transparent_32%)] blur-3xl" />
            <div className="relative min-h-[27rem] sm:min-h-[31rem] lg:min-h-[35rem]">
              <a
                href={featured.externalDemoUrl ?? `/presskit/${featured.slug}`}
                target={featured.externalDemoUrl ? "_blank" : undefined}
                rel={featured.externalDemoUrl ? "noreferrer" : undefined}
                className="group absolute left-0 top-0 block w-[96%] sm:w-[90%]"
                aria-label={`${featured.name} - aperçu desktop`}
              >
                <div className="hero-device-float relative transition duration-500 group-hover:-translate-y-1">
                  <div className="relative overflow-hidden rounded-t-[1.45rem] border border-white/[0.18] bg-[#07090e] p-2 shadow-[0_42px_140px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-500 group-hover:border-white/[0.28] md:rounded-t-[1.75rem] md:p-2.5">
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
                href={featured.externalDemoUrl ?? `/presskit/${featured.slug}`}
                target={featured.externalDemoUrl ? "_blank" : undefined}
                rel={featured.externalDemoUrl ? "noreferrer" : undefined}
                className="group absolute bottom-0 right-0 block w-[38%] min-w-[9.25rem] max-w-[14.5rem] sm:w-[31%] lg:w-[29%]"
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
