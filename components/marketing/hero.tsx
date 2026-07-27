"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { PageShell } from "@/components/layout/page-shell";

const heroKits = [
  {
    title: "MelyMelow",
    category: "Artiste peintre",
    desktopImage: "/gallery-previews/home-desktop/melymelow.png",
    mobileImage: "/gallery-previews/home-mobile/melymelow.png",
    accent: "#F4C26B",
    result: "Un univers artistique lisible, prêt à envoyer aux galeries et partenaires.",
  },
  {
    title: "Sherin",
    category: "Chanteuse",
    desktopImage: "/gallery-previews/home-desktop/sherin.png",
    mobileImage: "/gallery-previews/home-mobile/sherin.png",
    accent: "#F46B8D",
    result: "Sortie, médias, chiffres et booking réunis dans un récit clair.",
  },
  {
    title: "DJ SLY'D",
    category: "DJ",
    desktopImage: "/gallery-previews/home-desktop/dj-slyd.png",
    mobileImage: "/gallery-previews/home-mobile/dj-slyd.png",
    accent: "#FF9152",
    result: "Un support net pour présenter univers, médias, résidences et contact booking.",
  },
  {
    title: "KRIMO",
    category: "Danseur",
    desktopImage: "/gallery-previews/home-desktop/krimo.png",
    mobileImage: "/gallery-previews/home-mobile/krimo.png",
    accent: "#D5A928",
    result: "Une présence vidéo-first pour performer, convaincre et collaborer.",
  },
  {
    title: "DJ MACK",
    category: "DJ & MC",
    desktopImage: "/gallery-previews/home-desktop/dj-mack.png",
    mobileImage: "/gallery-previews/home-mobile/dj-mack.png",
    accent: "#CE5DFF",
    result: "Un support premium pour rassurer bookers, marques et scènes internationales.",
  },
  {
    title: "Soyumi",
    category: "DJ",
    desktopImage: "/gallery-previews/home-desktop/soyumi.png",
    mobileImage: "/gallery-previews/home-mobile/soyumi.png",
    accent: "#FF9152",
    result: "Une énergie club traduite dans un lien rapide à comprendre.",
  },
  {
    title: "La Bringue",
    category: "Organisateur",
    desktopImage: "/gallery-previews/home-desktop/la-bringue.png",
    mobileImage: "/gallery-previews/home-mobile/la-bringue.png",
    accent: "#63E6BE",
    result: "Communauté, sponsors et preuves de traction mis en scène.",
  },
  {
    title: "Arthur Chaps",
    category: "DJ",
    desktopImage: "/gallery-previews/home-desktop/arthur-chaps.png",
    mobileImage: "/gallery-previews/home-mobile/arthur-chaps.png",
    accent: "#5FA8FF",
    result: "Un positionnement club plus net, plus mémorable, plus facile à partager.",
  },
];

const carouselSlots = [
  { offset: 0, x: "-2%", y: "10%", width: "73%", rotate: 0, scale: 1, opacity: 1, zIndex: 40 },
  { offset: 1, x: "35%", y: "20%", width: "54%", rotate: 3.5, scale: 0.88, opacity: 0.72, zIndex: 28 },
  { offset: -1, x: "-28%", y: "24%", width: "52%", rotate: -3.5, scale: 0.86, opacity: 0.58, zIndex: 24 },
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedKit, setSelectedKit] = useState<(typeof heroKits)[number] | null>(null);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");
  const activeKit = heroKits[activeIndex % heroKits.length];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroKits.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedKit) return;
    const scrollY = window.scrollY;
    const previousBodyOverflow = document.body.style.overflow;
    const previousBodyPosition = document.body.style.position;
    const previousBodyTop = document.body.style.top;
    const previousBodyWidth = document.body.style.width;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedKit(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
      document.body.style.position = previousBodyPosition;
      document.body.style.top = previousBodyTop;
      document.body.style.width = previousBodyWidth;
      window.scrollTo(0, scrollY);
    };
  }, [selectedKit]);

  return (
    <section className="section-wash relative overflow-hidden pb-16 pt-10 md:pb-28 md:pt-24" aria-labelledby="hero-title">
      <div className="signature-thread absolute left-[8%] top-8 h-[72%] w-px opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(206,93,255,0.09),transparent_28%),radial-gradient(circle_at_64%_78%,rgba(255,145,82,0.075),transparent_24%),linear-gradient(180deg,#0d1118,rgba(17,22,32,0.97))]" />
      <PageShell className="relative grid items-center gap-9 md:gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
        <Reveal>
          <div className="w-full max-w-[17.5rem] min-w-0 pt-0 min-[375px]:max-w-[20rem] sm:max-w-[46rem] lg:pb-10">
            <h1 id="hero-title" className="max-w-[22rem] break-words text-[clamp(2.28rem,9.5vw,5.45rem)] font-semibold leading-[0.91] tracking-tighter2 text-white sm:max-w-[44rem] sm:text-[clamp(3rem,6.2vw,5.45rem)]">
              <span className="block">Plus pro qu&apos;Instagram.</span>
              <span className="block text-white/[0.92]">Plus impactant</span>
              <span className="block text-white/[0.92]">qu&apos;un PDF.</span>
            </h1>
            <p className="mt-6 max-w-[35rem] text-[0.95rem] leading-7 text-white/[0.72] md:mt-7 md:text-lg md:leading-9">
              Présentez votre activité, vos réalisations, vos contenus et vos références dans une expérience premium pensée pour convaincre en quelques secondes.
            </p>
            <p className="mt-5 hidden max-w-[31rem] text-sm leading-7 text-white/[0.68] sm:block md:text-base">
              Le visiteur ne parcourt plus une liste d’informations : il entre dans votre univers, comprend votre niveau et sait comment vous contacter.
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
            <div className="ambient-shift pointer-events-none absolute inset-8 bg-[radial-gradient(circle_at_52%_42%,rgba(255,255,255,0.16),transparent_45%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.24] to-transparent" />
            {carouselSlots.map((slot) => {
              const kitIndex = (activeIndex + slot.offset + heroKits.length) % heroKits.length;
              const kit = heroKits[kitIndex];

              return (
                <motion.button
                  key={`${slot.offset}-${kit.title}`}
                  type="button"
                  aria-label={`Prévisualiser ${kit.title}`}
                  className="group absolute hidden cursor-pointer text-left outline-none sm:block"
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
                    duration: 1.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ scale: slot.scale + 0.05, y: -10, rotate: slot.rotate * 0.55 }}
                  onClick={() => {
                    setSelectedKit(kit);
                    setPreviewMode("desktop");
                  }}
                >
                  <span
                    className="absolute -inset-8 rounded-full opacity-0 blur-3xl transition duration-700 group-hover:opacity-70"
                    style={{ background: kit.accent }}
                    aria-hidden="true"
                  />
                  <span className="relative block -translate-x-1/2 overflow-hidden border border-white/[0.14] bg-[#080b11] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-500 group-hover:border-white/[0.28] group-hover:shadow-[0_42px_130px_rgba(0,0,0,0.58)]">
                    <span className="block aspect-[1.58/1] overflow-hidden bg-black">
                      <img
                        src={kit.desktopImage}
                        alt=""
                        className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.035]"
                      />
                    </span>
                    <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.2),transparent_22%,transparent_74%,rgba(255,255,255,0.07))]" />
                    <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 border-t border-white/[0.12] bg-black/30 px-3 py-2 text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                      <span>
                        <span className="block text-xs font-semibold">{kit.title}</span>
                        <span className="block text-[10px] uppercase tracking-[0.16em] text-white/56">{kit.category}</span>
                      </span>
                      <span className="rounded-lg bg-white px-3 py-1.5 text-[11px] font-semibold text-[#10141d]">Explorer</span>
                    </span>
                  </span>
                </motion.button>
              );
            })}
            <motion.button
              type="button"
              aria-label={`Prévisualiser ${activeKit.title} en mobile`}
              className="group absolute right-[23%] top-[42%] z-50 hidden w-[18%] min-w-[5.9rem] cursor-pointer text-left outline-none sm:block"
              initial={false}
              animate={{ y: [0, -8, 0], rotate: -2 }}
              transition={{ y: { duration: 6.4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 0.8 } }}
              whileHover={{ scale: 1.05, y: -12 }}
              onClick={() => {
                setSelectedKit(activeKit);
                setPreviewMode("mobile");
              }}
            >
              <span
                className="absolute -inset-5 rounded-full opacity-35 blur-2xl transition duration-500 group-hover:opacity-60"
                style={{ background: activeKit.accent }}
                aria-hidden="true"
              />
              <span className="relative block rounded-[1.35rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.16)]">
                <span className="relative block aspect-[0.48/1] overflow-hidden rounded-[1rem] bg-black">
                  <span className="absolute left-1/2 top-1.5 z-20 h-2 w-7 -translate-x-1/2 rounded-full bg-[#050609]" />
                  <img
                    src={activeKit.mobileImage}
                    alt=""
                    className="h-full w-full object-cover object-center"
                  />
                </span>
              </span>
            </motion.button>

            <div className="-mx-5 block overflow-hidden sm:hidden">
              <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-5 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {heroKits.slice(0, 5).map((kit, index) => (
                  <button
                    key={kit.title}
                    type="button"
                    aria-label={`Prévisualiser ${kit.title}`}
                    className="group w-[82vw] max-w-[21rem] shrink-0 snap-start text-left outline-none"
                    onClick={() => {
                      setSelectedKit(kit);
                      setPreviewMode("desktop");
                    }}
                  >
                    <span
                      className="relative block border border-white/[0.16] bg-[#080b11] p-1.5 shadow-[0_24px_78px_rgba(0,0,0,0.48),inset_0_1px_0_rgba(255,255,255,0.12)]"
                      style={{ "--case-accent": kit.accent } as CSSProperties}
                    >
                      <span className="absolute -inset-x-1 bottom-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--case-accent)_64%,white),transparent)] opacity-70" aria-hidden="true" />
                      <span className="relative block aspect-[1.54/1] overflow-hidden bg-black">
                        <img src={kit.desktopImage} alt="" className="h-full w-full object-cover object-top" />
                      </span>
                      <span className="absolute bottom-9 right-3 block w-[23%] min-w-[3.8rem] rotate-[3deg] rounded-[0.85rem] border border-white/[0.18] bg-[#080b11] p-1 shadow-[0_14px_40px_rgba(0,0,0,0.52)]">
                        <span className="relative block aspect-[0.48/1] overflow-hidden rounded-[0.58rem] bg-black">
                          <span className="absolute left-1/2 top-1 z-20 h-1.5 w-5 -translate-x-1/2 rounded-full bg-[#050609]" />
                          <img src={kit.mobileImage} alt="" className="h-full w-full object-cover object-center" />
                        </span>
                      </span>
                      <span className="flex items-center justify-between gap-3 border-t border-white/[0.1] px-1 py-3 text-white">
                        <span>
                          <span className="block text-sm font-semibold leading-none">{kit.title}</span>
                          <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-white/50">{kit.category}</span>
                        </span>
                        <span className="text-lg leading-none">{index === 0 ? "→" : ""}</span>
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </PageShell>

      <AnimatePresence>
        {selectedKit ? (
          <motion.div
            className="fixed inset-0 z-[200] overflow-hidden bg-[#05070b]/88 p-4 backdrop-blur-2xl md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Preview ${selectedKit.title}`}
          >
            <motion.div
              className="mx-auto flex h-full max-w-7xl flex-col border border-white/[0.14] bg-[#0d1118] shadow-[0_40px_160px_rgba(0,0,0,0.68)]"
              initial={{ y: 28, scale: 0.97, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 18, scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.12] px-4 py-4 md:px-6">
                <div>
                  <p className="text-lg font-semibold text-white">{selectedKit.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-white/[0.48]">{selectedKit.category}</p>
                </div>
                <div className="flex items-center gap-2">
                  {(["desktop", "mobile"] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setPreviewMode(mode)}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                        previewMode === mode
                          ? "border-white/30 bg-white text-[#10141d]"
                          : "border-white/[0.14] bg-white/[0.05] text-white/70 hover:bg-white/[0.09] hover:text-white"
                      }`}
                    >
                      {mode === "desktop" ? "Desktop" : "Mobile"}
                    </button>
                  ))}
                  <button
                    type="button"
                    aria-label="Fermer la preview"
                    onClick={() => setSelectedKit(null)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.14] bg-white/[0.05] text-white transition hover:bg-white/[0.1]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="grid flex-1 min-h-0 gap-0 lg:grid-cols-[0.34fr_0.66fr]">
                <div className="border-b border-white/[0.12] p-5 lg:border-b-0 lg:border-r lg:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.46]">Résultat</p>
                  <p className="mt-5 text-2xl font-semibold leading-tight text-white md:text-3xl">{selectedKit.result}</p>
                  <p className="mt-6 text-sm leading-7 text-white/[0.62]">
                    La preview se scrolle automatiquement pour montrer la page comme un produit vivant, pas comme une capture plate.
                  </p>
                </div>
                <div className="flex min-h-0 items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_42%)] p-4 md:p-8">
                  <div
                    className={`relative overflow-hidden border border-white/[0.16] bg-black shadow-[0_34px_120px_rgba(0,0,0,0.54)] ${
                      previewMode === "desktop"
                        ? "aspect-[1.58/1] w-full max-w-4xl"
                        : "aspect-[0.48/1] h-full max-h-[68vh] w-auto rounded-[1.6rem] p-1.5"
                    }`}
                  >
                    <img
                      src={previewMode === "desktop" ? selectedKit.desktopImage : selectedKit.mobileImage}
                      alt={`Preview ${previewMode} ${selectedKit.title}`}
                      className="preview-scroll"
                      style={{
                        "--preview-travel": previewMode === "desktop" ? "4rem" : "7rem",
                        objectPosition: previewMode === "desktop" ? "center top" : "center top",
                      } as CSSProperties}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
