"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

type HeroKit = {
  title: string;
  category: string;
  desktopImage: string;
  mobileImage?: string;
  heroMobileImage?: string;
  externalDemoUrl: string;
  accent: string;
};

const heroKits: HeroKit[] = [
  {
    title: "MelyMelow",
    category: "Artiste peintre",
    desktopImage: "/gallery-previews/home-desktop/melymelow.png",
    mobileImage: "/gallery-previews/hero-mobile/Mobile-melymelow.jpeg",
    heroMobileImage: "/gallery-previews/hero-mobile/Mobile-melymelow.jpeg",
    externalDemoUrl: "https://presskit.melymelow.art/",
    accent: "#F4C26B",
  },
  {
    title: "Sherin",
    category: "Chanteuse",
    desktopImage: "/gallery-previews/home-desktop/sherin.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-sherin.jpg",
    heroMobileImage: "/gallery-previews/hero-mobile/Mobile-sherin.jpg",
    externalDemoUrl: "https://sherin.presskit.fr/",
    accent: "#F46B8D",
  },
  {
    title: "DJ SLY'D",
    category: "DJ",
    desktopImage: "/gallery-previews/home-desktop/dj-slyd.png",
    mobileImage: "/gallery-previews/home-mobile/dj-slyd.png",
    externalDemoUrl: "https://djslyd.presskit.fr/",
    accent: "#FF9152",
  },
  {
    title: "KRIMO",
    category: "Danseur",
    desktopImage: "/gallery-previews/home-desktop/krimo.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-krimo.jpg",
    heroMobileImage: "/gallery-previews/hero-mobile/Mobile-krimo.jpg",
    externalDemoUrl: "https://krimo-dancer.presskit.fr/",
    accent: "#D5A928",
  },
  {
    title: "DJ MACK",
    category: "DJ & MC",
    desktopImage: "/gallery-previews/home-desktop/dj-mack.png",
    mobileImage: "/gallery-previews/home-mobile/dj-mack.png",
    externalDemoUrl: "https://dj-mack.presskit.fr/",
    accent: "#CE5DFF",
  },
  {
    title: "Soyumi",
    category: "DJ",
    desktopImage: "/gallery-previews/home-desktop/soyumi.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-soyumi.jpg",
    heroMobileImage: "/gallery-previews/hero-mobile/Mobile-soyumi.jpg",
    externalDemoUrl: "https://soyumi.presskit.fr/",
    accent: "#FF9152",
  },
  {
    title: "La Bringue",
    category: "Organisateur",
    desktopImage: "/gallery-previews/home-desktop/la-bringue.png",
    mobileImage: "/gallery-previews/home-mobile/Mobile-labringueparty.jpg",
    heroMobileImage: "/gallery-previews/hero-mobile/Mobile-labringueparty.jpg",
    externalDemoUrl: "https://labringue-party.vercel.app/",
    accent: "#63E6BE",
  },
  {
    title: "Arthur Chaps",
    category: "DJ",
    desktopImage: "/gallery-previews/home-desktop/arthur-chaps.png",
    mobileImage: "/gallery-previews/home-mobile/arthur-chaps.png",
    externalDemoUrl: "https://arthur-chaps.presskit.fr/",
    accent: "#5FA8FF",
  },
];

const carouselSlots = [
  { offset: 0, x: "-2%", y: "10%", width: "73%", rotate: 0, scale: 1, opacity: 1, zIndex: 40 },
  { offset: 1, x: "35%", y: "20%", width: "54%", rotate: 3.5, scale: 0.88, opacity: 0.72, zIndex: 28 },
  { offset: -1, x: "-28%", y: "24%", width: "52%", rotate: -3.5, scale: 0.86, opacity: 0.58, zIndex: 24 },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const activeKit = heroKits[activeIndex % heroKits.length];
  const activeMobileImage = activeKit.heroMobileImage ?? activeKit.mobileImage;

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroKits.length);
    }, 7600);

    return () => window.clearInterval(interval);
  }, [shouldReduceMotion]);

  return (
    <section className="section-wash relative overflow-hidden pb-10 pt-28 md:pb-20 md:pt-32" aria-labelledby="hero-title">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: "radial-gradient(circle at 16% 12%, rgba(255,255,255,0.09), transparent 24%), radial-gradient(circle at 78% 26%, rgba(184,193,205,0.08), transparent 28%), radial-gradient(circle at 64% 78%, rgba(255,255,255,0.045), transparent 24%), linear-gradient(180deg,#0d1118,rgba(17,22,32,0.97))",
        }}
        transition={{ duration: 1.8, ease: "easeInOut" }}
      />
      <PageShell className="relative grid items-center gap-9 md:gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
        <Reveal>
          <div className="w-full max-w-[17.5rem] min-w-0 pt-0 min-[375px]:max-w-[20rem] sm:max-w-[46rem] lg:pb-10">
            <h1 id="hero-title" className="max-w-[22rem] break-words text-[clamp(2.28rem,9.5vw,5.45rem)] font-semibold leading-[0.91] tracking-tighter2 text-white sm:max-w-[44rem] sm:text-[clamp(3rem,6.2vw,5.45rem)]">
              <span className="block">Plus pro qu&apos;Instagram.</span>
              <span className="block text-white/[0.92]">Plus impactant</span>
              <span className="block text-white/[0.92]">qu&apos;un PDF.</span>
            </h1>
            <p className="mt-6 max-w-[35rem] text-[0.95rem] leading-7 text-white/[0.72] md:mt-7 md:text-lg md:leading-9">
              Valorisez votre image grâce à une expérience premium, déjà adoptée par des artistes, DJs, photographes et créateurs.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center">
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
          <div className="relative isolate min-h-[19rem] min-w-0 overflow-visible sm:min-h-[38rem] lg:min-h-[44rem]">
            <div className="ambient-shift pointer-events-none absolute inset-8 bg-[radial-gradient(circle_at_52%_42%,rgba(255,255,255,0.12),transparent_45%)] blur-3xl" />
            {carouselSlots.map((slot) => {
              const kitIndex = (activeIndex + slot.offset + heroKits.length) % heroKits.length;
              const kit = heroKits[kitIndex];

              return (
                <motion.a
                  key={`${slot.offset}-${kit.title}`}
                  href={kit.externalDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le rendu live ${kit.title}`}
                  className="group absolute hidden cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d1118] sm:block"
                  style={{
                    left: "50%",
                    top: slot.y,
                    width: slot.width,
                    zIndex: slot.zIndex,
                  }}
                  initial={false}
                  animate={{
                    x: slot.x,
                    rotate: slot.rotate,
                    scale: slot.scale,
                    opacity: slot.opacity,
                  }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 1.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8, rotate: slot.rotate * 0.64 }}
                >
                  <span className="absolute -inset-8 rounded-full bg-white opacity-0 blur-3xl transition duration-700 group-hover:opacity-10" aria-hidden="true" />
                  <span className="mockup-surface relative block -translate-x-1/2 overflow-hidden border border-white/[0.14] bg-[#080b11] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14)]">
                    <span className="block aspect-[91/60] overflow-hidden bg-black">
                      <img
                        src={kit.desktopImage}
                        alt=""
                        className="h-full w-full object-contain object-center"
                      />
                    </span>
                  </span>
                </motion.a>
              );
            })}
            {activeMobileImage ? (
              <motion.a
                href={activeKit.externalDemoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Voir le rendu live ${activeKit.title}`}
                className="group absolute right-[23%] top-[42%] z-50 hidden w-[18%] min-w-[5.9rem] cursor-pointer text-left outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d1118] sm:block"
                initial={false}
                animate={shouldReduceMotion ? { y: 0, rotate: -2 } : { y: [0, -6, 0], rotate: -2 }}
                transition={{ y: { duration: 7.4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 1 } }}
                whileHover={{ y: -10 }}
              >
                <span className="absolute -inset-5 rounded-full bg-white opacity-10 blur-2xl transition duration-500 group-hover:opacity-16" aria-hidden="true" />
                <span className="mockup-surface relative block rounded-[1.35rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.16)]">
                  <span className="relative block aspect-[0.48/1] overflow-hidden rounded-[1rem] bg-black">
                    <span className="absolute left-1/2 top-1.5 z-20 h-2 w-7 -translate-x-1/2 rounded-full bg-[#050609]" />
                    <img src={activeMobileImage} alt="" className="phone-preview-scroll" />
                  </span>
                </span>
              </motion.a>
            ) : null}

            <div className="-mx-5 block overflow-hidden sm:hidden">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {heroKits.slice(0, 5).map((kit, index) => (
                  <a
                    key={kit.title}
                    href={kit.externalDemoUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Voir le rendu live ${kit.title}`}
                    className="group w-[82vw] max-w-[21rem] shrink-0 snap-start text-left outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-4 focus-visible:ring-offset-[#0d1118]"
                  >
                    <span
                      className="relative block border border-white/[0.16] bg-[#080b11] p-1.5 shadow-[0_24px_78px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.12)]"
                    >
                      <span className="absolute -inset-x-1 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.42),transparent)] opacity-70" aria-hidden="true" />
                      <span className="relative block aspect-[91/60] overflow-hidden bg-black">
                        <img src={kit.desktopImage} alt="" className="h-full w-full object-contain object-center" />
                      </span>
                      {kit.heroMobileImage || kit.mobileImage ? (
                        <span className="absolute bottom-9 right-3 block w-[23%] min-w-[3.8rem] rotate-[3deg] rounded-[0.85rem] border border-white/[0.18] bg-[#080b11] p-1 shadow-[0_14px_40px_rgba(0,0,0,0.52)]">
                          <span className="relative block aspect-[0.48/1] overflow-hidden rounded-[0.58rem] bg-black">
                            <span className="absolute left-1/2 top-1 z-20 h-1.5 w-5 -translate-x-1/2 rounded-full bg-[#050609]" />
                            <img src={kit.heroMobileImage ?? kit.mobileImage} alt="" className="phone-preview-scroll" />
                          </span>
                        </span>
                      ) : null}
                      <span className="flex items-center justify-between gap-3 border-t border-white/[0.1] px-1 py-3 text-white">
                        <span>
                          <span className="block text-sm font-semibold leading-none">{kit.title}</span>
                          <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/50">{kit.category}</span>
                        </span>
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </PageShell>
    </section>
  );
}
