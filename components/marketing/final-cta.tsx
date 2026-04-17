import { siteConfig } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-20">
      <PageShell>
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,145,82,0.18),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-12">
          <p className="text-xs uppercase tracking-[0.28em] text-white/52">Offre claire</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tighter2 text-white md:text-5xl">
            Un press kit digital premium pour mieux te présenter, mieux rassurer et mieux convertir.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
            Si tu veux une présentation plus nette, plus actuelle et plus crédible qu’un simple PDF ou une page improvisée, on peut lancer une version pensée pour ton activité.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact">{siteConfig.ctas.launch}</Button>
            <Button href="/tarifs" variant="secondary">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
