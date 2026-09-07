import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  Download,
  Headphones,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Music2,
  Play,
  Radio,
} from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

const contact = {
  email: "dj.pirate.wolidey@gmail.com",
  phone: "06 28 03 12 13",
  whatsapp: "https://wa.me/33628031213",
  instagram: "https://www.instagram.com/djpirate_wi/",
  instagramHandle: "DJPIRATE_WI",
  soundcloud: "https://soundcloud.com/djpirate-13",
};

const kpis = [
  { value: "15K", label: "socials medias" },
  { value: "24K", label: "audiences médias mensuels" },
  { value: "52K", label: "visites médias mensuelles" },
  { value: "1,4M", label: "audiences SoundCloud" },
];

const references = [
  "Paris",
  "Lyon",
  "Annecy",
  "Bordeaux",
  "Toulouse",
  "Rennes",
  "St-Brieuc",
  "Limoges",
  "Le Mans",
  "Tours",
  "Suisse",
  "Belgique",
  "Guadeloupe",
  "Martinique",
];

const styles = ["Hip-hop", "Old school", "RNB", "Trap US & FR", "House", "Caribbean music"];

const riderItems = [
  "DDJ REV 5 ou DJM S11 / S7 / S9",
  "CDJ 2000 ou CDJ 3000",
  "Micro HF",
  "Support ordinateur",
];

const socialHandles = ["DJPIRATE_WI", "DJPIRATE", "DJPIRATE97"];

const galleryImages = [
  "pirate-gallery-1.webp",
  "pirate-gallery-2.webp",
  "pirate-gallery-3.webp",
  "pirate-gallery-4.webp",
  "pirate-gallery-5.webp",
  "pirate-gallery-7.webp",
  "pirate-gallery-8.webp",
  "pirate-gallery-10.webp",
  "pirate-gallery-12.webp",
  "pirate-gallery-13.webp",
  "pirate-gallery-14.webp",
  "pirate-gallery-15.webp",
];

export const metadata: Metadata = createPageMetadata({
  title: "DJ Pirate",
  description:
    "Press kit officiel de DJ Pirate, DJ antillais basé à Paris, spécialisé hip-hop, RNB, trap, house et sonorités caribéennes.",
  path: "dj-pirate",
  keywords: ["DJ Pirate", "press kit DJ Pirate", "DJ antillais Paris", "DJ hip-hop RNB trap"],
});

export default function DjPiratePage() {
  return (
    <>
      <section className="relative isolate min-h-[92svh] overflow-hidden bg-[#050506] pt-24 text-white md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_66%_18%,rgba(255,184,0,0.19),transparent_30%),radial-gradient(circle_at_18%_64%,rgba(236,36,36,0.17),transparent_26%),linear-gradient(180deg,#070707_0%,#101010_58%,#050506_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:96px_96px] opacity-50" />
        <PageShell className="relative grid min-h-[calc(92svh-8rem)] max-w-[100vw] items-center gap-12 pb-16 lg:grid-cols-[0.86fr_1.14fr]">
          <div className="w-full max-w-[21.875rem] min-w-0 sm:max-w-none">
            <div className="relative h-20 w-40 md:h-24 md:w-48">
              <Image src="/pirate/logo/pirate-logo.webp" alt="DJ Pirate" fill priority sizes="12rem" className="object-contain object-left" />
            </div>
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">DJ & voix off · Paris</p>
            <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-none text-white md:text-7xl lg:text-8xl">
              DJ Pirate
            </h1>
            <p className="mt-6 max-w-2xl break-words text-base leading-8 text-white/[0.72] md:text-lg md:leading-9">
              DJ antillais originaire de la Martinique, basé à Paris, avec 9 ans d’expérience derrière les platines et une signature urbaine entre hip-hop, RNB, trap, house et Caribbean music.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="button-cycle cta-shine inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#f4c13a] px-7 py-4 text-sm font-semibold text-black shadow-[0_18px_60px_rgba(244,193,58,0.24)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f4c13a]"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Booking WhatsApp
              </Link>
              <Link
                href="#video"
                className="button-cycle inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/[0.16] bg-white/[0.055] px-7 py-4 text-sm font-semibold text-white hover:border-white/[0.28] hover:bg-white/[0.095] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Play className="h-4 w-4" aria-hidden="true" />
                Voir la vidéo
              </Link>
            </div>
          </div>
          <div className="relative w-full max-w-[21.875rem] min-w-0 overflow-visible sm:max-w-none md:min-h-[42rem]">
            <div className="absolute inset-10 rounded-full bg-[#f4c13a]/20 blur-3xl" />
            <div className="relative mx-auto w-[82%] max-w-[24rem] rotate-[2deg] overflow-hidden rounded-[1.65rem] border border-white/[0.14] bg-white/[0.04] p-2 shadow-[0_36px_110px_rgba(0,0,0,0.52)] md:absolute md:left-1/2 md:top-0 md:w-[66%] md:max-w-[31rem] md:-translate-x-1/2">
              <div className="relative aspect-[1023/1537] overflow-hidden rounded-[1.25rem] bg-black">
                <Image
                  src="/pirate/hero/pirate-hero.webp"
                  alt="Portrait de DJ Pirate"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 82vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="relative z-10 mt-4 grid w-full min-w-0 grid-cols-2 gap-3 md:absolute md:bottom-8 md:left-0 md:mt-0 md:grid-cols-4">
              {kpis.map((item) => (
                <div key={item.label} className="min-w-0 border border-white/[0.12] bg-black/[0.48] p-4 backdrop-blur-md">
                  <p className="text-3xl font-semibold leading-none text-[#f4c13a] md:text-4xl">{item.value}</p>
                  <p className="mt-2 break-words text-[10px] font-semibold uppercase leading-4 tracking-[0.16em] text-white/[0.62]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
        <Link href="#bio" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-white/[0.55] transition hover:text-white md:block" aria-label="Descendre vers la bio">
          <ArrowDown className="h-5 w-5" aria-hidden="true" />
        </Link>
      </section>

      <section id="bio" className="section-divider bg-[#09090a] py-20 text-white md:py-28">
        <PageShell className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">En quelques mots</p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-5xl">Une énergie antillaise, taillée pour les scènes urbaines.</h2>
          </div>
          <div className="grid gap-8 text-base leading-8 text-white/70 md:text-lg md:leading-9">
            <p>
              DJ Pirate commence par le piano puis la batterie avant de se tourner vers le mixage. Son ascension démarre en Guadeloupe à partir de 2016, dans un univers caribéen, avant de se poursuivre en France.
            </p>
            <p>
              En 2019, après deux années de régularité, il se produit sur la scène de la All Day In, l’un des grands festivals caribéens. Il s’impose ensuite parmi les DJs réguliers de sa génération, reconnu pour son originalité, sa technique et ses capacités de speaker.
            </p>
            <p>
              En 2025, il crée l’émission Urban Session pour mettre en lumière la culture et les talents de la scène urbaine.
            </p>
          </div>
        </PageShell>
      </section>

      <section className="bg-[#101010] py-20 text-white md:py-28">
        <PageShell>
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">Direction artistique</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Hip-hop, RNB, trap, house et Caribbean music.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {styles.map((style) => (
                <div key={style} className="border border-white/10 bg-white/[0.035] p-5">
                  <Music2 className="h-5 w-5 text-[#f4c13a]" aria-hidden="true" />
                  <p className="mt-5 text-xl font-semibold">{style}</p>
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section className="section-divider bg-[#080809] py-20 text-white md:py-28">
        <PageShell>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">Références</p>
              <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">Scènes, villes et territoires déjà traversés.</h2>
            </div>
            <a href="/pirate/bio/press-kit-dj-pirate.pdf" className="inline-flex items-center gap-2 text-sm font-semibold text-white/[0.72] hover:text-white">
              <Download className="h-4 w-4" aria-hidden="true" />
              Télécharger le press kit PDF
            </a>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {references.map((reference) => (
              <div key={reference} className="flex items-center gap-3 border border-white/10 bg-white/[0.035] px-4 py-4">
                <MapPin className="h-4 w-4 shrink-0 text-[#f4c13a]" aria-hidden="true" />
                <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white/[0.78]">{reference}</span>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="bg-[#101010] py-16 text-white md:py-20">
        <PageShell className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">Rider technique</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Configuration demandée.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {riderItems.map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.035] px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-white/[0.78]">{item}</p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="bg-[#101010] py-20 text-white md:py-28">
        <PageShell>
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">Galerie</p>
              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Photos presse et moments live.</h2>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {galleryImages.map((image, index) => (
                <div key={image} className={`relative overflow-hidden bg-black ${index % 5 === 0 ? "row-span-2 aspect-[4/5]" : "aspect-[4/5]"}`}>
                  <Image
                    src={`/pirate/gallery/${image}`}
                    alt={`DJ Pirate en live ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 26vw, 50vw"
                    className="object-cover transition duration-500 hover:scale-[1.035]"
                  />
                </div>
              ))}
            </div>
          </div>
        </PageShell>
      </section>

      <section id="video" className="section-divider bg-[#080809] py-20 text-white md:py-28">
        <PageShell className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">Vidéo</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">L’énergie du set, en mouvement.</h2>
          </div>
          <div className="overflow-hidden border border-white/10 bg-black p-2 shadow-[0_28px_90px_rgba(0,0,0,0.42)]">
            <video controls playsInline poster="/pirate/videos/pirate-live-poster.jpg" className="aspect-video w-full bg-black object-cover">
              <source src="/pirate/videos/pirate-live.mp4" type="video/mp4" />
            </video>
          </div>
        </PageShell>
      </section>

      <section className="bg-[#101010] py-20 text-white md:py-28">
        <PageShell className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">SoundCloud</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Urban Session et sélections DJ Pirate.</h2>
          </div>
          <div className="overflow-hidden border border-white/10 bg-white/[0.035] p-2">
            <iframe
              title="DJ Pirate sur SoundCloud"
              width="100%"
              height="420"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/djpirate-13&color=%23f4c13a&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true"
              className="block bg-black"
            />
          </div>
        </PageShell>
      </section>

      <section className="section-divider bg-[#080809] py-16 text-white md:py-20">
        <PageShell className="grid gap-8 md:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4c13a]">Réseaux</p>
            <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Handles officiels.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {socialHandles.map((handle) => (
              <div key={handle} className="border border-white/10 bg-white/[0.035] px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/[0.76]">{handle}</p>
              </div>
            ))}
          </div>
        </PageShell>
      </section>

      <section className="section-contact py-20 md:py-28" aria-labelledby="pirate-contact-title">
        <PageShell className="max-w-6xl">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#5d6470]">Booking</p>
              <h2 id="pirate-contact-title" className="mt-5 text-4xl font-semibold leading-tight text-[#10141d] md:text-6xl">Contacter DJ Pirate.</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer" className="button-cycle cta-shine inline-flex min-h-14 items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-4 text-sm font-semibold text-[#07140c] hover:bg-[#1fbd59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
              <a href={`mailto:${contact.email}`} className="button-cycle inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#10141d]/20 bg-white/[0.55] px-6 py-4 text-sm font-semibold text-[#10141d] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Email
              </a>
              <a href={contact.instagram} target="_blank" rel="noreferrer" className="button-cycle inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#10141d]/20 bg-white/[0.55] px-6 py-4 text-sm font-semibold text-[#10141d] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
              <a href={contact.soundcloud} target="_blank" rel="noreferrer" className="button-cycle inline-flex min-h-14 items-center justify-center gap-2 rounded-lg border border-[#10141d]/20 bg-white/[0.55] px-6 py-4 text-sm font-semibold text-[#10141d] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
                <Headphones className="h-4 w-4" aria-hidden="true" />
                SoundCloud
              </a>
            </div>
          </div>
          <div className="mt-10 grid gap-4 border-t border-[#10141d]/10 pt-8 text-sm font-semibold text-[#303744] md:grid-cols-4">
            <p className="flex items-center gap-2"><Mic2 className="h-4 w-4" aria-hidden="true" /> DJ & voix off</p>
            <p className="flex items-center gap-2"><Radio className="h-4 w-4" aria-hidden="true" /> {contact.instagramHandle}</p>
            <p>{contact.email}</p>
            <p>{contact.phone}</p>
          </div>
        </PageShell>
      </section>
    </>
  );
}
