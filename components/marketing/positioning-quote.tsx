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
        </div>
      </PageShell>
    </section>
  );
}
