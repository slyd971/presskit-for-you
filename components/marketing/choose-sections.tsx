import type { ReactNode } from "react";
import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

function MetierLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white">
      {children}
    </Link>
  );
}

const choices: { title: string; text: ReactNode }[] = [
  {
    title: "Elle veut t'écouter ou te voir sur scène",
    text: (
      <>
        commence par tes sons et tes vidéos, comme sur un <MetierLink href="/dj">press kit DJ</MetierLink> ou un{" "}
        <MetierLink href="/artiste">press kit artiste</MetierLink>.
      </>
    ),
  },
  {
    title: "Elle cherche un profil pour un projet",
    text: (
      <>
        mets ton showreel et ton parcours en tête, comme sur un <MetierLink href="/danseur">press kit danseur</MetierLink>.
      </>
    ),
  },
  {
    title: "Elle veut juger ton travail en images",
    text: (
      <>
        ouvre avec ton portfolio, puis tes prestations, comme sur un <MetierLink href="/photographe">press kit photographe</MetierLink> ou un{" "}
        <MetierLink href="/make-up-artist">press kit make-up artist</MetierLink>.
      </>
    ),
  },
  {
    title: "Elle compare des offres",
    text: (
      <>
        présente tes formules et ta prise de rendez-vous, comme sur un <MetierLink href="/coach-sportif">press kit coach sportif</MetierLink>.
      </>
    ),
  },
  {
    title: "Elle représente une marque ou un lieu",
    text: (
      <>
        montre ton public, tes chiffres et tes formats, comme sur un <MetierLink href="/organisateur">press kit organisateur</MetierLink> ou un{" "}
        <MetierLink href="/createur-de-contenu">media kit de créateur de contenu</MetierLink>.
      </>
    ),
  },
];

// Section finale de /exemples, même présentation que CategoryGuides.
export function ChooseSections() {
  return (
    <section className="section-divider section-tone-lift py-20 md:py-28" aria-labelledby="choose-sections-title">
      <PageShell className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
          <h2 id="choose-sections-title" className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
            Comment choisir les sections de ton press kit
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">
            Pars de la personne qui reçoit ton lien : ce qu&apos;elle cherche en premier va en haut de la page. Le Press Kit Premium compte jusqu&apos;à 5 sections, donc choisis celles qui l&apos;aident à décider.
          </p>
        </div>
        <div className="min-w-0">
          <ul className="border-y border-white/[0.12]">
            {choices.map((choice) => (
              <li key={choice.title} className="border-b border-white/[0.08] py-4 text-sm leading-6 text-white/[0.74] last:border-b-0">
                <strong className="font-semibold text-white">{choice.title} : </strong>
                {choice.text}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-l border-white/[0.18] pl-4 text-sm leading-7 text-white/[0.84] md:text-base md:leading-8">
            Dans tous les cas, garde une présentation courte et un contact visible sans chercher.
          </p>
        </div>
      </PageShell>
    </section>
  );
}
