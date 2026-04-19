import Link from "next/link";

import { categories, siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#090c11]">
      <div className="mx-auto grid max-w-8xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr] md:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.26em] text-white/45">{siteConfig.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/68">
            Press kits digitaux premium pour mieux présenter ton univers, centraliser tes infos
            et convertir plus proprement.
          </p>
          <p className="mt-4 text-sm text-white/46">Réponse rapide • Brief cadré • Déploiement propre</p>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Navigation</p>
          <div className="mt-4 space-y-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-white/64 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-white">Catégories</p>
          <div className="mt-4 space-y-3">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/presskit/${category.slug}`}
                className="block text-sm text-white/64 hover:text-white"
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
