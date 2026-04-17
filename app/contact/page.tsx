import type { Metadata } from "next";

import { ContactPanel } from "@/components/marketing/contact-panel";
import { PageShell } from "@/components/layout/page-shell";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacte PressKit Studio pour créer un press kit digital premium sur-mesure.",
};

export default function ContactPage() {
  return (
    <>
      <section className="py-16 md:py-24">
        <PageShell className="max-w-4xl">
          <Badge>Projet</Badge>
          <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white md:text-7xl">
            Parlons de ton press kit et de l’image que tu veux envoyer.
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Que tu partes de zéro ou d’un univers déjà bien défini, on peut cadrer une base solide,
            premium et prête à être partagée.
          </p>
        </PageShell>
      </section>
      <ContactPanel />
    </>
  );
}
