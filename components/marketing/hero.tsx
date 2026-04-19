import { siteConfig, heroStats, heroProofs, categories } from "@/content/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PreviewLoopCard } from "@/components/marketing/preview-loop-card";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

export function Hero() {
  const featured = categories.filter((item) =>
    ["dj", "artiste", "make-up-artist", "photographe"].includes(item.slug),
  );

  return (
    <section className="section-wash relative overflow-hidden py-16 md:py-24 md:pb-28" aria-labelledby="hero-title">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,145,82,0.24),transparent_24%),radial-gradient(circle_at_78%_18%,rgba(153,119,255,0.16),transparent_24%),radial-gradient(circle_at_60%_68%,rgba(255,255,255,0.04),transparent_18%),linear-gradient(180deg,#0b0e14,rgba(11,14,20,0.94))]" />
      <div className="absolute left-[-8%] top-24 h-72 w-72 rounded-full bg-[#ff9152]/10 blur-3xl" />
      <div className="absolute right-[12%] top-10 h-60 w-60 rounded-full bg-white/6 blur-3xl" />
      <PageShell className="relative grid items-end gap-12 lg:grid-cols-[1fr_1.02fr] lg:gap-14">
        <Reveal>
          <div className="max-w-3xl">
            <Badge className="bg-white/[0.07] text-white/78">Press kits digitaux premium</Badge>
            <h1 id="hero-title" className="mt-6 text-4xl font-semibold tracking-tighter2 text-white md:text-7xl">
              Donne à ton talent une présentation à la hauteur de ton ambition.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 md:text-xl">
              Des press kits pensés pour les artistes, talents et indépendants qui veulent mieux
              se présenter, rassurer plus vite et décrocher plus d’opportunités concrètes.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/74">
                Plus clair pour booking, presse et collabs
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white/74">
                Pensé comme un outil de conversion
              </span>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">{siteConfig.ctas.primary}</Button>
              <Button href="/tarifs" variant="secondary">
                {siteConfig.ctas.secondary}
              </Button>
            </div>
            <ul className="mt-6 grid gap-2 text-sm text-white/64 sm:grid-cols-3">
              {heroProofs.map((item) => (
                <li key={item} className="rounded-2xl bg-white/[0.03] px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {heroStats.map((stat) => (
                <div key={stat.label} className="panel-premium rounded-3xl p-4 hover:translate-y-0">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-6 text-white/58">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative isolate">
            <div className="absolute -inset-8 rounded-[2.8rem] bg-gradient-to-br from-white/10 via-white/0 to-[#ff9152]/8 blur-3xl" />
            <div className="absolute right-4 top-4 h-24 w-24 rounded-full bg-[#ff9152]/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.2rem] bg-[#10141d]/90 p-5 shadow-[0_32px_100px_rgba(0,0,0,0.32)] md:p-6">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
              <div className="relative grid gap-4">
                <div className="relative overflow-hidden rounded-[1.8rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6 md:p-7">
                  <div className="absolute right-[-10%] top-[-30%] h-36 w-36 rounded-full bg-white/8 blur-3xl" />
                  <div className="relative">
                    <p className="max-w-xl text-3xl font-semibold leading-tight text-white">
                      Une présence digitale premium
                      <br />
                      pour booking, presse et prospects.
                    </p>
                    <p className="mt-3 max-w-lg text-sm leading-7 text-white/60">
                      Des aperçus concrets par univers pour montrer le niveau de rendu, pas juste l’expliquer.
                    </p>
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {featured.map((item, index) => (
                    <PreviewLoopCard
                      key={item.slug}
                      href={item.externalDemoUrl ?? `/presskit/${item.slug}`}
                      image={item.previewImage ?? item.heroImage ?? ""}
                      imagePosition={item.previewImagePosition}
                      imageOffsetY={item.previewImageOffsetY}
                      label={item.shortName}
                      title={item.name}
                      delayClassName={
                        index === 1
                          ? "[animation-delay:-2.8s]"
                          : index === 2
                            ? "[animation-delay:-5.2s]"
                            : index === 3
                              ? "[animation-delay:-1.4s]"
                              : ""
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </PageShell>
    </section>
  );
}
