import type { Metadata } from "next";

import { ContactPanel } from "@/components/marketing/contact-panel";
import { PageShell } from "@/components/layout/page-shell";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description: "Contacte PressKit For You pour lancer un press kit digital premium sur-mesure pour artiste, DJ, photographe ou independant.",
  path: "contact",
  keywords: ["contact press kit digital", "devis press kit", "creation site artiste sur mesure"],
});

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-16 pb-6 md:pt-18 md:pb-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_0%,rgba(255,145,82,0.12),transparent_24%),radial-gradient(circle_at_84%_12%,rgba(255,255,255,0.05),transparent_18%)]" />
        <PageShell className="max-w-4xl">
          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">
            Contact
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-white/[0.68] md:text-lg">
            Un brief rapide suffit pour cadrer ton besoin, ton niveau de gamme et la bonne direction pour ton press kit.
          </p>
        </PageShell>
      </section>
      <ContactPanel />
    </>
  );
}
