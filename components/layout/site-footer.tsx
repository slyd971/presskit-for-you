import Link from "next/link";
import Image from "next/image";

import { CTA, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { VAT_MENTION } from "@/lib/vat";
import { footerCategoryLinks } from "@/lib/presskit-categories";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[radial-gradient(circle_at_14%_0%,rgba(255,255,255,0.065),transparent_24%),linear-gradient(180deg,#171d28_0%,#0d1118_100%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:132px_132px] opacity-32" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-8xl gap-14 px-5 py-20 md:px-8 lg:grid-cols-[1.5fr_0.5fr_0.5fr] lg:py-28">
        <div className="border-b border-white/[0.12] pb-10 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-12">
          <Link
            href="/"
            className="relative block h-20 w-[24rem] max-w-full opacity-95 transition hover:opacity-80 md:h-24 md:w-[32rem]"
            aria-label={siteConfig.name}
          >
            <Image
              src="/logo/logo-presskitforyou-cropped.png"
              alt=""
              fill
              sizes="(min-width: 768px) 32rem, min(24rem, 100vw)"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-10 max-w-3xl text-[clamp(2.45rem,5.6vw,6.4rem)] font-semibold leading-[0.94] tracking-tighter2 text-white">
            {"L'image que tu envoies avant même de parler."}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button arrow href="/#contact" className="justify-center px-7 py-4 text-[15px]">
              {CTA.primary}
            </Button>
            <Button href="/exemples" variant="secondary" className="justify-center px-7 py-4 text-[15px]">
              {CTA.secondary}
            </Button>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-label text-white">Navigation</p>
          <div className="mt-6 space-y-4">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link text-sm text-white/[0.64] hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-label text-white">Métiers</p>
          <div className="mt-6 space-y-4">
            {footerCategoryLinks.map((item) => (
              <Link key={item.href} href={item.href} className="footer-link text-sm text-white/[0.64] hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-label text-white">Contact</p>
          <div className="mt-6 space-y-4">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="footer-link text-sm text-white/[0.64] hover:text-white"
            >
              Écrire sur WhatsApp
            </a>
            <a
              href="mailto:contact@presskit.fr"
              className="footer-link text-sm text-white/[0.64] hover:text-white"
            >
              Envoyer un e-mail
            </a>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-label text-white">Informations légales</p>
          <div className="mt-6 space-y-4">
            <Link href="/mentions-legales" className="footer-link text-sm text-white/[0.64] hover:text-white">
              Mentions légales
            </Link>
            <Link href="/cgv" className="footer-link text-sm text-white/[0.64] hover:text-white">
              CGV
            </Link>
            <Link href="/politique-de-confidentialite" className="footer-link text-sm text-white/[0.64] hover:text-white">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
      <div className="relative border-t border-white/[0.08] px-5 py-6 text-center text-xs text-white/[0.64] md:px-8">
        <p>{VAT_MENTION}</p>
      </div>
    </footer>
  );
}
