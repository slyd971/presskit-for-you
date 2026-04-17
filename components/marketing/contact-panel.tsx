import { Mail, Phone, Sparkles } from "lucide-react";

import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

export function ContactPanel() {
  return (
    <section className="py-16 md:py-20">
      <PageShell className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Un brief rapide suffit pour cadrer ton press kit."
            description="Tu peux partir d’une idée simple, d’un univers déjà défini ou d’un besoin urgent de présentation plus premium."
          />
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 text-sm text-white/72">
              <Mail className="h-4 w-4" />
              hello@presskitstudio.fr
            </div>
            <div className="flex items-center gap-3 text-sm text-white/72">
              <Phone className="h-4 w-4" />
              +33 6 12 45 88 10
            </div>
            <div className="flex items-center gap-3 text-sm text-white/72">
              <Sparkles className="h-4 w-4" />
              Réponse rapide, cadrage simple, rendu premium.
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 md:p-8">
          <form className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm text-white/72">
                Nom
                <input
                  className="rounded-2xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none transition focus:border-white/20"
                  placeholder="Ton nom"
                />
              </label>
              <label className="grid gap-2 text-sm text-white/72">
                Email
                <input
                  type="email"
                  className="rounded-2xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none transition focus:border-white/20"
                  placeholder="nom@email.com"
                />
              </label>
            </div>
            <label className="grid gap-2 text-sm text-white/72">
              Activité
              <input
                className="rounded-2xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none transition focus:border-white/20"
                placeholder="DJ, artiste, photographe, make up artist, chef..."
              />
            </label>
            <label className="grid gap-2 text-sm text-white/72">
              Projet
              <textarea
                className="min-h-36 rounded-2xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none transition focus:border-white/20"
                placeholder="Décris brièvement ton besoin, ton univers et ce que tu veux mettre en avant."
              />
            </label>
            <p className="text-xs leading-6 text-white/45">
              Formulaire UI prêt à connecter plus tard à la solution de ton choix.
            </p>
            <Button href="mailto:hello@presskitstudio.fr" className="w-full justify-center">
              Envoyer ma demande
            </Button>
          </form>
        </div>
      </PageShell>
    </section>
  );
}
