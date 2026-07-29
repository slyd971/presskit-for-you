import Link from "next/link";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[radial-gradient(circle_at_14%_0%,rgba(255,255,255,0.065),transparent_24%),linear-gradient(180deg,#171d28_0%,#0d1118_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:132px_132px] opacity-32" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-8xl gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.5fr_0.5fr_0.5fr] lg:py-28">
        <div className="border-b border-white/[0.1] pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
          <Link
            href="/"
            className="block h-20 w-[24rem] max-w-full opacity-95 transition hover:opacity-80 md:h-24 md:w-[32rem]"
            aria-label={siteConfig.name}
          >
            <img
              src="/logo/logo-presskitforyou-cropped.png"
              alt=""
              className="h-full w-full object-contain object-left"
            />
          </Link>
          <p className="mt-10 max-w-3xl text-[clamp(2.45rem,5.6vw,6.4rem)] font-semibold leading-[0.94] tracking-tighter2 text-white">
            L'image que vous envoyez avant même de parler.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact" className="justify-center px-7 py-4 text-[15px]">
              Créer mon presskit
            </Button>
            <Button href="/galerie" variant="secondary" className="justify-center px-7 py-4 text-[15px]">
              Voir les exemples
            </Button>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/[0.58]">Navigation</p>
          <div className="mt-6 space-y-4">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link text-sm text-white/[0.64] hover:text-white">
                {item.label}
              </Link>
            ))}
            <Link href="/galerie" className="footer-link text-sm text-white/[0.64] hover:text-white">
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
              className="footer-link text-sm text-white/[0.64] hover:text-white"
            >
              Discuter du projet
            </a>
            <a
              href="mailto:david.mecorvin@hotmail.fr"
              className="footer-link text-sm text-white/[0.64] hover:text-white"
            >
              Envoyer un email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
