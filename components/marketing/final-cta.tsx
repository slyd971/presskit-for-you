import { siteConfig } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="py-24 md:py-28" aria-labelledby="final-cta-title">
      <PageShell>
        <div className="relative overflow-hidden rounded-[2.35rem] border border-white/[0.13] bg-[radial-gradient(circle_at_20%_0%,rgba(255,145,82,0.23),transparent_26%),radial-gradient(circle_at_88%_8%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.105),rgba(255,255,255,0.032))] p-8 shadow-[0_38px_130px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.08)] md:p-12 lg:p-14">
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.24] to-transparent" />
          <div className="pointer-events-none absolute -right-20 top-8 h-56 w-56 rounded-full bg-[#ff9152]/20 blur-3xl" />
          <p className="relative text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.54]">Passer à l’action</p>
          <h2 id="final-cta-title" className="relative mt-5 max-w-3xl text-4xl font-semibold leading-[1.03] tracking-tighter2 text-white md:text-5xl">
            Un press kit digital premium pour mieux te présenter, mieux rassurer et mieux convertir.
          </h2>
          <p className="relative mt-6 max-w-2xl text-base leading-8 text-white/[0.72]">
            Si tu veux une présentation plus nette, plus actuelle et plus crédible qu’un simple PDF ou une page improvisée, on peut lancer une version pensée pour ton activité.
          </p>
          <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" className="px-7 py-4 text-[15px]">{siteConfig.ctas.launch}</Button>
            <Button href="/tarifs" variant="secondary" className="px-7 py-4 text-[15px]">
              Voir les tarifs
            </Button>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
