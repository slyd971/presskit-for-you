"use client";

import { CTA } from "@/content/site";
import { motion } from "framer-motion";
import { FileImage, Mail, Phone, Video } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { motionTokens } from "@/lib/motion";

type ProcessTimelineProps = {
  showHeading?: boolean;
};

const dossierCards = [
  {
    status: "BRIEF RECU",
    title: "On récupère tes contenus.",
    description: "Tu envoies tes textes, photos, vidéos, liens et références. On trie ce qui sert vraiment à présenter ton activité. Le brief se fait en rendez-vous en Île-de-France, ou en visio pour les clients plus éloignés.",
    meta: "Jour 01 / Notes client",
    when: "Jour 1",
    summary: "Tu envoies tes textes, photos, vidéos, liens et références.",
    visual: "brief",
  },
  {
    status: "MAQUETTE",
    title: "On prépare la maquette.",
    description: "On choisit la direction artistique, l'organisation des informations et la hiérarchisation des boutons d'action",
    meta: "Jour 02-03 / Maquette",
    when: "Jours 2-3",
    summary: "On choisit la direction artistique, l'organisation des informations et la hiérarchisation des boutons d'action.",
    visual: "direction",
  },
  {
    status: "MISE EN LIGNE",
    title: "Tu reçois le lien final.",
    description: "Le press kit est intégré, adapté au mobile, testé puis livré avec un lien prêt à partager.",
    meta: "7 jours max / Final",
    when: "7 jours max",
    summary: "Le press kit est intégré, adapté au mobile, testé puis livré avec un lien prêt à partager.",
    visual: "final",
  },
];

function CompactVisual({ type }: { type: string }) {
  if (type === "direction") {
    return (
      <div className="relative h-56 overflow-hidden bg-[#f5f5f1] p-4 text-ink-editorial md:h-64">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(16,20,29,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(16,20,29,0.055)_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="relative grid h-full grid-cols-[1fr_3.4rem] gap-3">
          <div className="grid grid-rows-[0.8fr_0.65fr_0.55fr] gap-3">
            <div className="relative border border-ink-editorial/[0.28] bg-white/[0.72] p-3">
              <span className="absolute right-2 top-2 text-[8px] font-semibold uppercase tracking-label-tight text-text-muted-light">Hero</span>
              <span className="block h-3 w-28 bg-ink-editorial" />
              <span className="mt-3 block h-2 w-40 bg-ink-editorial/[0.18]" />
              <span className="mt-2 block h-2 w-32 bg-ink-editorial/[0.14]" />
              <span className="mt-4 block h-5 w-20 bg-ink-editorial" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <span className="relative border border-ink-editorial/[0.18] bg-white/[0.58]">
                <span className="absolute left-2 top-2 text-[8px] font-semibold uppercase tracking-label-tight text-text-muted-light">Media</span>
              </span>
              <span className="relative border border-ink-editorial/[0.18] bg-white/[0.58]">
                <span className="absolute left-2 top-2 text-[8px] font-semibold uppercase tracking-label-tight text-text-muted-light">Preuves</span>
              </span>
            </div>
            <div className="relative border border-ink-editorial/[0.18] bg-ink-editorial/[0.08]">
              <span className="absolute left-2 top-2 text-[8px] font-semibold uppercase tracking-label-tight text-text-muted-light">Contact</span>
            </div>
          </div>
          <div className="border border-ink-editorial/[0.24] bg-white/80 p-1.5">
            <span className="mx-auto block h-1.5 w-5 rounded-full bg-ink-editorial/[0.32]" />
            <span className="mt-3 block h-8 border border-ink-editorial/[0.18]" />
            <span className="mt-2 block h-12 border border-ink-editorial/[0.18] bg-ink-editorial/[0.06]" />
            <span className="mt-2 block h-5 bg-ink-editorial" />
          </div>
        </div>
      </div>
    );
  }

  if (type === "final") {
    return (
      <div className="relative h-56 overflow-hidden bg-mockup p-3 md:h-64">
        <div className="mockup-surface relative rounded-mockup-desktop border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1">
          <div className="relative aspect-[91/60] overflow-hidden rounded-[0.62rem] bg-black">
          <Image
            src="/gallery-previews/home-desktop/dj-slyd.webp"
            alt="Press kit de DJ SLY'D, DJ, version desktop"
            fill
            sizes="(min-width: 1024px) 36vw, 82vw"
            className="object-contain object-center"
          />
          </div>
        </div>
        <div className="absolute bottom-5 right-5 w-[24%] min-w-[4rem] rotate-[3deg] rounded-[0.85rem] border border-white/[0.18] bg-[linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)] p-1 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <div className="relative aspect-[0.48/1] overflow-hidden rounded-[0.58rem] bg-black">
            <div className="absolute left-1/2 top-1 z-20 h-1.5 w-5 -translate-x-1/2 rounded-full bg-[#050609]" />
            <Image
              src="/gallery-previews/home-mobile/dj-slyd.webp"
              alt="Press kit de DJ SLY'D, DJ, version mobile"
              fill
              sizes="(min-width: 1024px) 10vw, 26vw"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-56 overflow-hidden bg-[#f2efe8] p-4 text-ink-editorial md:h-64">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,20,29,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(16,20,29,0.045)_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="relative grid h-full grid-cols-[0.95fr_1.05fr] gap-3">
        <div className="grid grid-rows-[1fr_0.75fr] gap-3">
          <div className="border border-ink-editorial/[0.18] bg-white/65 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-label text-text-muted-light">Bio</p>
            <p className="mt-3 max-w-[9rem] text-[9px] font-medium leading-[1.55] text-text-secondary-light">
              Artiste pluridisciplinaire, univers visuel fort, références live et projets récents.
            </p>
          </div>
          <div className="border border-ink-editorial/[0.18] bg-white/65 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-label text-text-muted-light">Réseaux</p>
            <div className="mt-3 flex gap-2">
              {["IG", "FB", "WA"].map((network) => (
                <span
                  key={network}
                  className="flex h-7 w-7 items-center justify-center border border-ink-editorial/[0.18] bg-ink-editorial/[0.07] text-[9px] font-semibold tracking-[-0.02em] text-text-secondary-light"
                >
                  {network}
                </span>
              ))}
            </div>
          </div>
        </div>
          <div className="grid grid-rows-[1.05fr_0.7fr] gap-3">
            <div className="grid grid-cols-2 gap-2">
              <span className="relative border border-ink-editorial/[0.18] bg-ink-editorial/10">
                <span className="absolute inset-0 flex items-center justify-center">
                  <FileImage className="h-4 w-4 text-text-muted-light" aria-hidden="true" />
                </span>
                <span className="absolute bottom-1 left-1 text-[8px] font-semibold uppercase tracking-label-tight text-text-muted-light">PNG</span>
              </span>
              <span className="relative border border-ink-editorial/[0.18] bg-ink-editorial/[0.06]">
                <span className="absolute inset-0 flex items-center justify-center">
                  <Video className="h-4 w-4 text-text-muted-light" aria-hidden="true" />
                </span>
                <span className="absolute bottom-1 left-1 text-[8px] font-semibold uppercase tracking-label-tight text-text-muted-light">Video</span>
              </span>
              <span className="border border-ink-editorial/[0.18] bg-ink-editorial/[0.07]" />
              <span className="border border-ink-editorial/[0.18] bg-ink-editorial/[0.12]" />
            </div>
          <div className="border border-ink-editorial/[0.18] bg-white/65 p-3">
            <p className="text-[9px] font-semibold uppercase tracking-label text-text-muted-light">Contact / liens</p>
            <div className="mt-3 flex gap-2">
              <span className="flex h-7 w-7 items-center justify-center border border-ink-editorial/[0.18] bg-ink-editorial/[0.07]">
                <Mail className="h-3.5 w-3.5 text-text-secondary-light" aria-hidden="true" />
              </span>
              <span className="flex h-7 w-7 items-center justify-center border border-ink-editorial/[0.18] bg-ink-editorial/[0.07]">
                <Phone className="h-3.5 w-3.5 text-text-secondary-light" aria-hidden="true" />
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
    <section id="methode" className="section-tone-cool scroll-mt-28 overflow-clip pb-16 pt-16 md:pb-36 md:pt-24" aria-labelledby="process-title">
      <PageShell>
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          {showHeading ? (
            <div className="max-w-2xl">
              <h2 id="process-title" className="text-4xl font-semibold leading-[0.98] tracking-tighter2 text-white md:text-6xl">
                Une méthode en trois temps.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/[0.64] md:text-lg">
                On part de tes contenus, on construit une maquette claire, puis on met en ligne un press kit prêt à envoyer.
              </p>
            </div>
          ) : null}

        </div>

        <ol className="relative mt-8 md:mt-12 md:grid md:grid-cols-3 md:gap-4">
          <li aria-hidden="true" className="timeline-line absolute bottom-2 left-[7px] top-2 w-px bg-steel md:hidden" />
          {dossierCards.map((card, index) => (
            <li key={card.status} className="timeline-step relative pb-7 pl-9 last:pb-0 md:p-0 md:[animation:none]">
              <span aria-hidden="true" className="timeline-dot absolute left-0 top-1 h-[15px] w-[15px] rounded-full border border-steel bg-surface-900 md:hidden" />
              <motion.article
                initial={{ y: motionTokens.distance.strong, opacity: 0, rotate: index === 1 ? 0.25 : -0.25 }}
                whileInView={{ y: 0, opacity: 1, rotate: index === 1 ? 0.1 : -0.1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: motionTokens.duration.normal, delay: index * motionTokens.delay.related, ease: motionTokens.easing.enter }}
                whileHover={{ y: -6, rotate: index === 1 ? 0.02 : -0.02 }}
                className="max-md:!transform-none max-md:!opacity-100 md:h-full md:overflow-hidden md:border md:border-ink-editorial/[0.12] md:bg-[#f7f6f1] md:text-ink-editorial md:shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:transition-colors md:duration-hover md:ease-out md:hover:border-ink-editorial/[0.18] md:hover:shadow-[0_34px_110px_rgba(0,0,0,0.32)]"
              >
                <div className="hidden md:block">
                  <CompactVisual type={card.visual} />
                </div>
                <div className="md:p-7">
                  <div className="hidden items-center justify-between gap-4 border-b border-ink-editorial/[0.12] pb-4 md:flex">
                    <p className="text-[10px] font-semibold uppercase tracking-label text-text-muted-light">{card.status}</p>
                    <p className="text-[10px] font-semibold uppercase tracking-label-tight text-text-muted-light">{card.meta}</p>
                  </div>
                  <p className="text-[11px] font-semibold uppercase leading-5 tracking-label text-white/[0.64] md:hidden">{card.when}</p>
                  <h3 className="mt-1 text-xl font-semibold leading-tight tracking-tighter2 text-white md:mt-6 md:text-5xl md:leading-none md:text-inherit">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/[0.64] md:hidden">{card.summary}</p>
                  <p className="mt-5 hidden text-sm leading-7 text-[#303744] md:block">{card.description}</p>
                  {index === dossierCards.length - 1 ? (
                    <div className="relative mt-4 aspect-[91/60] w-44 overflow-hidden rounded-mockup-desktop border border-steel bg-black md:hidden">
                      <Image
                        src="/gallery-previews/home-desktop/dj-slyd.webp"
                        alt="Press kit de DJ SLY'D, DJ, version desktop"
                        fill
                        sizes="176px"
                        className="object-contain object-center"
                      />
                    </div>
                  ) : null}
                </div>
              </motion.article>
            </li>
          ))}
        </ol>

        <motion.div
          initial={{ y: motionTokens.distance.standard, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: motionTokens.duration.normal, ease: motionTokens.easing.enter }}
          className="mt-10 flex justify-center md:mt-12"
        >
          <Button href="#exemples" variant="secondary" className="shrink-0 px-7 py-4 text-[15px]">
            {CTA.secondary}
          </Button>
        </motion.div>
      </PageShell>
    </section>
  );
}
