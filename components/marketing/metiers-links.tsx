import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

const metiers = [
  { slug: "artiste", label: "Press kit artiste" },
  { slug: "dj", label: "Press kit DJ" },
  { slug: "danseur", label: "Press kit danseur" },
  { slug: "photographe", label: "Press kit photographe" },
  { slug: "coach-sportif", label: "Press kit coach sportif" },
  { slug: "make-up-artist", label: "Press kit make-up artist" },
  { slug: "organisateur", label: "Press kit organisateur de soirée" },
];

type MetiersLinksProps = {
  currentSlug?: string;
  // Sans titre, seuls les liens sont rendus (sous le H1 de /exemples).
  title?: string;
  id?: string;
};

export function MetiersLinks({ currentSlug, title, id }: MetiersLinksProps) {
  const links = (
    <nav {...(title ? { "aria-labelledby": id } : { "aria-label": "Press kits par métier" })}>
      <ul className="flex flex-wrap gap-3">
        {metiers
          .filter((metier) => metier.slug !== currentSlug)
          .map((metier) => (
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
    </nav>
  );

  if (!title) {
    return <div className="mt-6">{links}</div>;
  }

  return (
    <section className="section-divider py-16 md:py-20" aria-labelledby={id}>
      <PageShell>
        <h2 id={id} className="max-w-3xl text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-4xl">
          {title}
        </h2>
        <div className="mt-8">{links}</div>
      </PageShell>
    </section>
  );
}
