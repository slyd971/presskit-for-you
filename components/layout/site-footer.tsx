import Link from "next/link";

import { siteConfig } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.1] bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.07),transparent_20%),radial-gradient(circle_at_85%_15%,rgba(255,255,255,0.055),transparent_20%),linear-gradient(180deg,#171d28_0%,#1d2430_100%)]">
      <div className="mx-auto grid max-w-8xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.35fr_0.65fr_0.65fr] lg:py-24">
        <div className="border-b border-white/[0.1] pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
          <Link
            href="/"
            className="block h-16 w-72 max-w-full opacity-95 transition hover:opacity-80"
            aria-label={siteConfig.name}
          >
            <img
              src="/logo/logo-presskitforyou-cropped.png"
              alt=""
              className="h-full w-full object-contain object-left"
            />
          </Link>
          <p className="mt-7 max-w-xl text-[clamp(1.05rem,2vw,1.5rem)] leading-9 text-white/[0.68]">
            Press kits digitaux premium pour mieux présenter ton univers, centraliser tes infos
            et convertir plus proprement.
          </p>
          <p className="mt-8 inline-flex rounded-lg border border-white/[0.12] bg-white/[0.06] px-4 py-2 text-sm text-white/[0.68] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Réponse rapide • Brief cadré • Déploiement propre
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.58]">Navigation</p>
          <div className="mt-6 space-y-4">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="block text-sm text-white/[0.64] transition duration-300 hover:translate-x-1 hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/galerie" className="block text-sm text-white/[0.64] transition duration-300 hover:translate-x-1 hover:text-white">
              Tous les exemples
            </Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.58]">Contact</p>
          <div className="mt-6 space-y-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="block text-sm text-white/[0.64] transition duration-300 hover:translate-x-1 hover:text-white"
            >
              WhatsApp
            </a>
            <span className="block text-sm text-white/[0.64]">
              {siteConfig.phone}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
