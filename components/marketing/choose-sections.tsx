import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

type Choice = {
  title: string;
  advice: string;
  links: { href: string; label: string }[];
};

const choices: Choice[] = [
  {
    title: "Elle veut t'écouter ou te voir sur scène",
    advice: "Commence par tes sons et tes vidéos.",
    links: [
      { href: "/dj", label: "Press kit DJ" },
      { href: "/artiste", label: "Press kit artiste" },
    ],
  },
  {
    title: "Elle cherche un profil pour un projet",
    advice: "Mets ton showreel et ton parcours en tête.",
    links: [{ href: "/danseur", label: "Press kit danseur" }],
  },
  {
    title: "Elle veut juger ton travail en images",
    advice: "Ouvre avec ton portfolio, puis tes prestations.",
    links: [
      { href: "/photographe", label: "Press kit photographe" },
      { href: "/make-up-artist", label: "Press kit make-up artist" },
    ],
  },
  {
    title: "Elle compare des offres",
    advice: "Présente tes formules et ta prise de rendez-vous.",
    links: [{ href: "/coach-sportif", label: "Press kit coach sportif" }],
  },
  {
    title: "Elle représente une marque ou un lieu",
    advice: "Montre ton public, tes chiffres et tes formats.",
    links: [
      { href: "/organisateur", label: "Press kit organisateur" },
      { href: "/createur-de-contenu", label: "Media kit de créateur de contenu" },
    ],
  },
];

// Section finale de /exemples : titre à gauche (fixe sur desktop), situations numérotées à droite.
export function ChooseSections() {
  return (
    <section className="section-divider section-tone-lift py-20 md:py-28" aria-labelledby="choose-sections-title">
      <PageShell className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start lg:gap-16">
        <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl lg:sticky lg:top-28">
          <h2 id="choose-sections-title" className="max-w-full break-words text-3xl font-semibold leading-[1.08] md:leading-[1.08] tracking-tighter2 text-white md:text-5xl">
            Comment choisir les sections de ton press kit
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">
            Pars de la personne qui reçoit ton lien : ce qu&apos;elle cherche en premier va en haut de la page. Le Press Kit Premium compte jusqu&apos;à 5 sections, donc choisis celles qui l&apos;aident à décider.
          </p>
        </div>

        <div className="min-w-0">
          <ol className="border-b border-white/[0.12]">
            {choices.map((choice, index) => (
              <li key={choice.title} className="grid grid-cols-[2.5rem_1fr] gap-x-3 border-t border-white/[0.12] py-6 md:grid-cols-[3.5rem_1fr] md:py-7">
                <span className="pt-1 text-[11px] font-semibold tabular-nums tracking-label-tight text-white/[0.64]" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-snug tracking-tighter2 text-white md:text-xl">{choice.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/[0.74] md:text-base">{choice.advice}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {choice.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-white/[0.12] bg-white/[0.04] px-3 text-[13px] font-semibold text-white transition-colors duration-hover ease-presskit hover:border-white/[0.24] hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                        >
                          {link.label}
                          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-hover ease-presskit group-hover:translate-x-0.5" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 rounded-lg border border-white/[0.12] bg-white/[0.04] p-5 text-sm leading-7 text-white/[0.84] md:p-6 md:text-base md:leading-8">
            <strong className="font-semibold text-white">Dans tous les cas : </strong>
            garde une présentation courte et un contact visible sans chercher.
          </p>
        </div>
      </PageShell>
    </section>
  );
}
