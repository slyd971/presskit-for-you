import type { Metadata } from "next";
import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";
import { LEGAL, VAT_MENTION } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mentions légales",
  description: "Informations légales, éditeur, hébergement et contact de PressKit For You.",
  path: "mentions-legales",
  keywords: ["mentions légales PressKit For You", "éditeur PressKit For You"],
});

const linkClass = "text-white underline decoration-white/30 underline-offset-4 hover:decoration-white";
const h2Class = "text-2xl font-semibold tracking-tighter2 text-white";

export default function LegalPage() {
  return (
    <section className="section-wash relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.055),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.04),transparent_18%)]"
        aria-hidden="true"
      />
      <PageShell className="relative max-w-4xl">
        <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
          Mentions légales
        </h1>

        <div className="mt-10 grid gap-8 border-y border-white/[0.12] py-8 text-white/[0.72]">
          <section className="overflow-visible">
            <h2 className={h2Class}>Éditeur du site</h2>
            <p className="mt-4 leading-8">
              Ce site est édité par {LEGAL.publisher}, {LEGAL.legalForm}, exerçant sous le nom commercial «&nbsp;{LEGAL.tradeName}&nbsp;».
            </p>
            <p className="mt-2 leading-8">SIREN : {LEGAL.siren}</p>
            <p className="mt-2 leading-8">Adresse : {LEGAL.address}</p>
            <p className="mt-2 leading-8">
              Téléphone :{" "}
              <a className={linkClass} href={`tel:${LEGAL.phone.replace(/\s/g, "")}`}>
                {LEGAL.phone}
              </a>
            </p>
            <p className="mt-2 leading-8">
              Email :{" "}
              <a className={linkClass} href={`mailto:${LEGAL.email}`}>
                {LEGAL.email}
              </a>
            </p>
            <p className="mt-2 leading-8">{VAT_MENTION}.</p>
          </section>

          <section className="overflow-visible">
            <h2 className={h2Class}>Directeur de la publication</h2>
            <p className="mt-4 leading-8">{LEGAL.publicationDirector}</p>
          </section>

          <section className="overflow-visible">
            <h2 className={h2Class}>Hébergeur</h2>
            <p className="mt-4 leading-8">
              Le site est hébergé par {LEGAL.host.name}, {LEGAL.host.address}. Contact :{" "}
              <a className={linkClass} href={LEGAL.host.contactUrl}>
                {LEGAL.host.contactUrl}
              </a>
              .
            </p>
            {LEGAL.host.phone.startsWith("[") ? null : <p className="mt-2 leading-8">Téléphone : {LEGAL.host.phone}</p>}
          </section>

          <section className="overflow-visible">
            <h2 className={h2Class}>Propriété intellectuelle</h2>
            <p className="mt-4 leading-8">
              Les textes, visuels, interfaces et éléments graphiques présents sur ce site sont protégés. Toute reproduction
              ou réutilisation non autorisée est interdite.
            </p>
          </section>

          <section className="overflow-visible">
            <h2 className={h2Class}>Documents associés</h2>
            <p className="mt-4 leading-8">
              <Link className={linkClass} href="/cgv">
                Conditions générales de prestation
              </Link>
              {" · "}
              <Link className={linkClass} href="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </p>
          </section>
        </div>
      </PageShell>
    </section>
  );
}
