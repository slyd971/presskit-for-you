import Link from "next/link";

import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.1] bg-[radial-gradient(circle_at_12%_0%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(255,255,255,0.055),transparent_20%),linear-gradient(180deg,#171d28_0%,#0d1118_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] bg-[size:108px_108px] opacity-45" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-8xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.45fr_0.55fr_0.55fr] lg:py-24">
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
          <p className="mt-8 max-w-3xl text-[clamp(2.2rem,5.2vw,5.8rem)] font-semibold leading-[0.96] tracking-tighter2 text-white">
            L'image que vous envoyez avant même de parler.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
