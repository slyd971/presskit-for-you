"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

import { Badge } from "@/components/ui/badge";
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

const kitPositions = [
  { left: "7%", top: "7%", width: "46%", rotate: -8 },
  { left: "48%", top: "3%", width: "43%", rotate: 7 },
  { left: "27%", top: "25%", width: "52%", rotate: 1 },
  { left: "4%", top: "48%", width: "40%", rotate: 8 },
  { left: "56%", top: "43%", width: "37%", rotate: -6 },
  { left: "34%", top: "66%", width: "34%", rotate: 5 },
  { left: "70%", top: "67%", width: "24%", rotate: -4 },
];

export function Hero() {
  const [orderSeed, setOrderSeed] = useState(0);
  const [selectedKit, setSelectedKit] = useState<(typeof heroKits)[number] | null>(null);
  const [previewMode, setPreviewMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const interval = window.setInterval(() => {
      setOrderSeed((current) => current + 1);
    }, 5200);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!selectedKit) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedKit(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedKit]);

  return (
    <section className="section-wash relative overflow-hidden pb-20 pt-14 md:pb-28 md:pt-24" aria-labelledby="hero-title">
      <div className="signature-thread absolute left-[8%] top-8 h-[72%] w-px opacity-70" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.09),transparent_24%),radial-gradient(circle_at_78%_26%,rgba(206,93,255,0.09),transparent_28%),radial-gradient(circle_at_64%_78%,rgba(255,145,82,0.075),transparent_24%),linear-gradient(180deg,#0d1118,rgba(17,22,32,0.97))]" />
      <PageShell className="relative grid items-center gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
        <Reveal>
          <div className="w-full max-w-[17.5rem] min-w-0 pt-0 min-[375px]:max-w-[20rem] sm:max-w-[46rem] lg:pb-10">
            <Badge className="border-white/[0.14] bg-white/[0.075] text-white/[0.82] shadow-[0_14px_50px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.1)]">
              Galerie digitale pour talents premium.
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
              Le visiteur ne parcourt plus une liste d’informations : il entre dans votre univers, comprend votre niveau et sait comment vous contacter.
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
          <div className="relative isolate min-h-[31rem] min-w-0 overflow-visible sm:min-h-[38rem] lg:min-h-[44rem]">
            <div className="ambient-shift pointer-events-none absolute inset-8 bg-[radial-gradient(circle_at_52%_42%,rgba(255,255,255,0.16),transparent_45%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-8 top-1/2 h-px bg-gradient-to-r from-transparent via-white/[0.24] to-transparent" />
            {heroKits.map((kit, index) => {
              const position = kitPositions[(index + orderSeed) % kitPositions.length];
              const zIndex = 20 + ((heroKits.length - index + orderSeed) % heroKits.length);

              return (
                <motion.button
                  key={kit.title}
                  type="button"
                  aria-label={`Prévisualiser ${kit.title}`}
                  className="group absolute hidden cursor-pointer text-left outline-none sm:block"
                  style={{
                    left: position.left,
                    top: position.top,
                    width: position.width,
                    zIndex,
                  }}
                  animate={{
                    rotate: position.rotate,
                    y: [0, index % 2 === 0 ? -9 : 8, 0],
                  }}
                  transition={{
                    rotate: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
                    y: { duration: 7 + index * 0.45, repeat: Infinity, ease: "easeInOut" },
                  }}
                  whileHover={{ scale: 1.055, y: -12, rotate: position.rotate * 0.55 }}
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
                  <span className="relative block overflow-hidden border border-white/[0.14] bg-[#080b11] p-1.5 shadow-[0_28px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-500 group-hover:border-white/[0.28] group-hover:shadow-[0_42px_130px_rgba(0,0,0,0.58)]">
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

            <button
              type="button"
              className="group absolute inset-x-0 top-8 mx-auto block w-[92%] text-left sm:hidden"
              onClick={() => {
                setSelectedKit(heroKits[0]);
                setPreviewMode("desktop");
              }}
            >
              <span className="relative block overflow-hidden border border-white/[0.16] bg-[#080b11] p-2 shadow-[0_28px_90px_rgba(0,0,0,0.42),inset_0_1px_0_rgba(255,255,255,0.12)]">
                <span className="block aspect-[1.58/1] overflow-hidden bg-black">
                  <img src={heroKits[0].desktopImage} alt="Aperçu PressKit MelyMelow" className="h-full w-full object-cover object-top" />
                </span>
                <span className="mt-3 flex items-center justify-between text-sm text-white">
                  <span>Ouvrir la preview</span>
                  <span>→</span>
                </span>
              </span>
            </button>
          </div>
        </Reveal>
      </PageShell>

      <AnimatePresence>
        {selectedKit ? (
          <motion.div
            className="fixed inset-0 z-[90] bg-[#05070b]/82 p-4 backdrop-blur-2xl md:p-8"
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
                      style={{ "--preview-travel": previewMode === "desktop" ? "4rem" : "7rem" } as CSSProperties}
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
