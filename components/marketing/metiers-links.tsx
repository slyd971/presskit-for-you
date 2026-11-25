import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

// `description` : version courte du chapeau de la page métier (heroDescription dans content/site.ts).
const metiers = [
  {
    slug: "artiste",
    label: "Press kit artiste",
    description: "Ta bio, tes sons, tes clips, tes dates et ton contact booking",
  },
  {
    slug: "dj",
    label: "Press kit DJ",
    description: "Tes styles, tes vidéos, tes liens d'écoute, tes références et ton contact booking",
  },
  {
    slug: "danseur",
    label: "Press kit danseur",
    description: "Tes vidéos, tes références et ton contact, pour les compagnies et les marques",
  },
  {
    slug: "photographe",
    label: "Press kit photographe",
    description: "Ton portfolio, tes formats photo ou vidéo, tes zones d'intervention et ton contact",
  },
  {
    slug: "coach-sportif",
    label: "Press kit coach sportif",
    description: "Ta méthode, tes prestations, tes résultats et ta prise de rendez-vous",
  },
  {
    slug: "make-up-artist",
    label: "Press kit make-up artist",
    description: "Ton portfolio, tes prestations et tes références, pour les clientes, marques ou productions",
  },
  {
    slug: "organisateur",
    label: "Press kit organisateur de soirée",
    description: "Tes photos, ta communauté, tes chiffres, tes partenaires et ton contact",
  },
  {
    slug: "createur-de-contenu",
    label: "Press kit créateur de contenu",
    description: "Tes vidéos, tes chiffres, tes formats et ton contact, pour les marques et les agences",
  },
];

type MetiersLinksProps = {
  currentSlug?: string;
  // Sans titre, seuls les liens sont rendus (sous le H1 de /exemples).
  title?: string;
  id?: string;
  // Une phrase sous chaque lien, en grille (accueil). Sans elle, les liens restent des pastilles.
  withDescriptions?: boolean;
};

export function MetiersLinks({ currentSlug, title, id, withDescriptions = false }: MetiersLinksProps) {
  const visibleMetiers = metiers.filter((metier) => metier.slug !== currentSlug);

  const links = (
    <nav {...(title ? { "aria-labelledby": id } : { "aria-label": "Press kits par métier" })}>
      {withDescriptions ? (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {visibleMetiers.map((metier) => (
            <li
              key={metier.slug}
              className="group relative rounded-lg border border-white/[0.12] p-5 pr-12 transition duration-hover ease-presskit hover:border-white/[0.24] hover:bg-white/[0.08]"
            >
              {/* Le lien couvre toute la carte, son texte reste le seul nom du métier. */}
              <Link
                href={`/${metier.slug}`}
                className="text-base font-semibold text-white after:absolute after:inset-0 after:rounded-lg focus-visible:outline-none focus-visible:after:outline focus-visible:after:outline-2 focus-visible:after:outline-offset-4 focus-visible:after:outline-white/70"
              >
                {metier.label}
              </Link>
              <ArrowUpRight
                className="absolute right-5 top-5 h-4 w-4 text-white/[0.64] transition duration-hover ease-presskit group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                aria-hidden="true"
              />
              <p className="mt-2 text-sm leading-6 text-white/[0.74]">{metier.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="flex flex-wrap gap-3">
          {visibleMetiers.map((metier) => (
            <li key={metier.slug}>
              <Link
                href={`/${metier.slug}`}
                className="inline-flex min-h-11 items-center rounded-lg border border-white/[0.12] px-4 text-sm font-semibold text-white transition duration-hover ease-presskit hover:border-white/[0.24] hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white/70"
              >
                {metier.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );

  if (!title) {
    return <div className="mt-6">{links}</div>;
  }

  return (
    <section className="section-divider py-16 md:py-20" aria-labelledby={id}>
      <PageShell>
        <h2 id={id} className="max-w-3xl text-3xl font-semibold leading-[1.08] md:leading-[1.08] tracking-tighter2 text-white md:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{links}</div>
      </PageShell>
    </section>
  );
}
