import Link from "next/link";

import { categories, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.08] bg-[radial-gradient(circle_at_top_left,rgba(255,145,82,0.12),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.07),transparent_20%),linear-gradient(180deg,#121721_0%,#171c26_100%)]">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8 lg:py-20">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.26em] text-white/[0.45]">{siteConfig.name}</p>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/[0.68]">
            Press kits digitaux premium pour mieux présenter ton univers, centraliser tes infos
            et convertir plus proprement.
          </p>
          <p className="mt-6 inline-flex rounded-full border border-white/[0.1] bg-white/[0.045] px-4 py-2 text-sm text-white/[0.56] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Réponse rapide • Brief cadré • Déploiement propre
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.46]">Navigation</p>
          <div className="mt-5 space-y-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-white/[0.64] transition duration-300 hover:translate-x-1 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.46]">Catégories</p>
          <div className="mt-5 space-y-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/presskit/${category.slug}`}
                className="block text-sm text-white/[0.64] transition duration-300 hover:translate-x-1 hover:text-white"
              >
                {category.shortName}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
