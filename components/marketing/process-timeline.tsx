"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileImage, Mail, Phone, Video } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

type ProcessTimelineProps = {
  showHeading?: boolean;
};

const dossierCards = [
  {
    status: "BRIEF RECU",
    title: "On récupère vos contenus.",
    description: "Vous envoyez vos textes, photos, vidéos, liens et références. On trie ce qui sert vraiment à présenter votre activité.",
    meta: "Jour 01 / Notes client",
    visual: "brief",
  },
  {
    status: "MAQUETTE",
    title: "On prépare la maquette.",
    description: "On choisit le style, l'ordre des sections et les boutons importants pour que le visiteur comprenne vite quoi faire.",
    meta: "Jour 02-03 / Maquette",
    visual: "direction",
  },
  {
    status: "MISE EN LIGNE",
    title: "Vous recevez le lien final.",
    description: "Le press kit est intégré, adapté au mobile, testé puis livré avec un lien prêt à partager.",
    meta: "7 jours max / Final",
    visual: "final",
  },
];

function CompactVisual({ type }: { type: string }) {
  if (type === "direction") {
    return (
      <div className="relative h-56 overflow-hidden bg-[#f5f5f1] p-4 text-[#10141d] md:h-64">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,20,29,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(16,20,29,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative grid h-full grid-cols-[1fr_3.4rem] gap-3">
          <div className="grid grid-rows-[0.8fr_0.65fr_0.55fr] gap-3">
            <div className="relative border border-[#10141d]/28 bg-white/72 p-3">
              <span className="absolute right-2 top-2 text-[8px] font-semibold uppercase tracking-[0.16em] text-[#10141d]/34">Hero</span>
              <span className="block h-3 w-28 bg-[#10141d]" />
              <span className="mt-3 block h-2 w-40 bg-[#10141d]/18" />
              <span className="mt-2 block h-2 w-32 bg-[#10141d]/14" />
              <span className="mt-4 block h-5 w-20 bg-[#10141d]" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <span className="relative border border-[#10141d]/20 bg-white/58">
                <span className="absolute left-2 top-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#10141d]/30">Media</span>
              </span>
              <span className="relative border border-[#10141d]/20 bg-white/58">
                <span className="absolute left-2 top-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#10141d]/30">Preuves</span>
              </span>
            </div>
            <div className="relative border border-[#10141d]/20 bg-[#10141d]/8">
              <span className="absolute left-2 top-2 text-[8px] font-semibold uppercase tracking-[0.14em] text-[#10141d]/30">Contact</span>
            </div>
          </div>
          <div className="border border-[#10141d]/26 bg-white/80 p-1.5">
            <span className="mx-auto block h-1.5 w-5 rounded-full bg-[#10141d]/32" />
            <span className="mt-3 block h-8 border border-[#10141d]/16" />
            <span className="mt-2 block h-12 border border-[#10141d]/16 bg-[#10141d]/6" />
            <span className="mt-2 block h-5 bg-[#10141d]" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "final") {
    return (
      <div className="relative h-56 overflow-hidden bg-[#080b11] p-3 md:h-64">
        <div className="overflow-hidden border border-white/10 bg-black">
          <img src="/gallery-previews/home-desktop/dj-slyd.png" alt="" className="h-full w-full object-contain object-center" />
        </div>
        <div className="absolute bottom-5 right-5 w-[24%] min-w-[4rem] rotate-[3deg] border border-white/20 bg-[#080b11] p-1 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <div className="aspect-[0.48/1] overflow-hidden bg-black">
            <img src="/gallery-previews/home-mobile/dj-slyd.png" alt="" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden bg-[#f2efe8] p-4 text-[#10141d] md:h-64">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,20,29,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,20,29,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative grid h-full grid-cols-[0.95fr_1.05fr] gap-3">
        <div className="grid grid-rows-[1fr_0.75fr] gap-3">
          <div className="border border-[#10141d]/16 bg-white/65 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#10141d]/42">Bio</p>
            <p className="mt-3 max-w-[9rem] text-[9px] font-medium leading-[1.55] text-[#10141d]/58">
              Artiste pluridisciplinaire, univers visuel fort, références live et projets récents.
            </p>
          </div>
          <div className="border border-[#10141d]/16 bg-white/65 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#10141d]/42">Réseaux</p>
            <div className="mt-3 flex gap-2">
              {["IG", "FB", "WA"].map((network) => (
                <span
                  key={network}
                  className="flex h-7 w-7 items-center justify-center border border-[#10141d]/18 bg-[#10141d]/7 text-[9px] font-semibold tracking-[-0.02em] text-[#10141d]/58"
                >
                  {network}
                </span>
              ))}
            </div>
          </div>
        </div>
          <div className="grid grid-rows-[1.05fr_0.7fr] gap-3">
            <div className="grid grid-cols-2 gap-2">
              <span className="relative border border-[#10141d]/16 bg-[#10141d]/10">
                <span className="absolute inset-0 flex items-center justify-center">
                  <FileImage className="h-4 w-4 text-[#10141d]/42" aria-hidden="true" />
                </span>
                <span className="absolute bottom-1 left-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#10141d]/30">PNG</span>
              </span>
              <span className="relative border border-[#10141d]/16 bg-[#10141d]/6">
                <span className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-4 w-4 text-[#10141d]/42" aria-hidden="true" />
                </span>
                <span className="absolute bottom-1 left-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#10141d]/30">Video</span>
              </span>
              <span className="border border-[#10141d]/16 bg-[#10141d]/7" />
              <span className="border border-[#10141d]/16 bg-[#10141d]/12" />
            </div>
          <div className="border border-[#10141d]/16 bg-white/65 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#10141d]/42">Contact / liens</p>
            <div className="mt-3 flex gap-2">
              <span className="flex h-7 w-7 items-center justify-center border border-[#10141d]/18 bg-[#10141d]/7">
                <Mail className="h-3.5 w-3.5 text-[#10141d]/52" aria-hidden="true" />
              </span>
              <span className="flex h-7 w-7 items-center justify-center border border-[#10141d]/18 bg-[#10141d]/7">
                <Phone className="h-3.5 w-3.5 text-[#10141d]/52" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProcessTimeline({ showHeading = true }: ProcessTimelineProps) {
  return (
    <section id="methode" className="section-tone-cool scroll-mt-28 overflow-hidden py-18 md:py-24" aria-labelledby="process-title">
      <PageShell>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          {showHeading ? (
            <div className="max-w-2xl">
              <h2 id="process-title" className="text-4xl font-semibold leading-[0.98] tracking-tighter2 text-white md:text-6xl">
                Une méthode en trois temps.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.68] md:text-lg">
                On part de vos contenus, on construit une maquette claire, puis on met en ligne un press kit prêt à envoyer.
              </p>
            </div>
          ) : null}

        </div>

        <div className="mt-10 grid gap-9 md:mt-12 md:grid-cols-3 md:gap-4">
          {dossierCards.map((card, index) => (
            <div key={card.status} className="relative">
              <motion.article
                initial={{ y: 30, opacity: 0, rotate: index === 1 ? 0.25 : -0.25 }}
                whileInView={{ y: 0, opacity: 1, rotate: index === 1 ? 0.1 : -0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="h-full overflow-hidden border border-[#10141d]/10 bg-[#f7f6f1] text-[#10141d] shadow-[0_24px_80px_rgba(0,0,0,0.22)] transition-colors duration-500 ease-out hover:border-[#10141d]/20 hover:shadow-[0_34px_110px_rgba(0,0,0,0.32)]"
              >
                <CompactVisual type={card.visual} />
                <div className="p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 border-b border-[#10141d]/12 pb-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#10141d]/48">{card.status}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#10141d]/34">{card.meta}</p>
                  </div>
                  <h3 className="mt-6 text-4xl font-semibold leading-none tracking-tighter2 md:text-5xl">{card.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-[#303744]">{card.description}</p>
                </div>
              </motion.article>
              {index < dossierCards.length - 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: -8, scaleY: 0.55 }}
                  whileInView={{ opacity: 1, y: 0, scaleY: 1 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.65, delay: 0.2 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="pointer-events-none absolute left-1/2 top-full z-10 flex h-9 w-9 origin-top -translate-x-1/2 items-center justify-center md:hidden"
                  aria-hidden="true"
                >
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-white/55 via-white/34 to-transparent" />
                  <span className="relative flex h-7 w-7 items-center justify-center rounded-full border border-white/18 bg-white/[0.08] text-white shadow-[0_12px_34px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.14)]">
                    <ArrowDown className="h-3.5 w-3.5" />
                  </span>
                </motion.div>
              ) : null}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ y: 22, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex justify-center pb-4 md:mt-12 md:pb-0"
        >
          <Button href="#exemples" className="shrink-0 px-7 py-4 text-[15px]">
            Découvrir un exemple
          </Button>
        </motion.div>
      </PageShell>
    </section>
  );
}
