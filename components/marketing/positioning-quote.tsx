import { PageShell } from "@/components/layout/page-shell";

export function PositioningQuote() {
  return (
    <section className="bg-white py-20 text-[#10141d] md:py-28" aria-label="Positionnement PressKit">
      <PageShell>
        <div className="mx-auto max-w-4xl text-center">
          <blockquote>
            <p className="text-[clamp(2.55rem,7.2vw,6.7rem)] font-semibold leading-[1.08] tracking-tighter2">
              <span className="quote-line block">Le bon lien ne liste pas vos contenus.</span>
              <span className="quote-line quote-line-delay block">Il met votre niveau en scène.</span>
            </p>
          </blockquote>
          <p className="quote-line quote-proof-delay mx-auto mt-9 max-w-xl text-[11px] font-semibold uppercase leading-5 tracking-[0.2em] text-[#5d6470] md:mt-11">
            Déjà adopté par des artistes, DJs, photographes et créateurs.
          </p>
        </div>
      </PageShell>
    </section>
  );
}
