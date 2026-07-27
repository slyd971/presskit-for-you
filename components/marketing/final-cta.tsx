import { siteConfig } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { MessageCircle, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="section-divider section-contact scroll-mt-28 py-18 md:py-28" aria-labelledby="final-cta-title">
      <PageShell className="max-w-5xl">
        <div className="py-8 text-center md:py-16">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/[0.56]">Prochain échange</p>
          <h2 id="final-cta-title" className="mx-auto mt-5 max-w-2xl text-4xl font-semibold leading-[1.03] tracking-tighter2 text-white md:text-6xl">
            Parlez-nous de votre univers.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/[0.7]">
            On vous aide à cadrer le bon format, le bon niveau de design et les contenus qui feront vraiment la différence.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:mt-10">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-shine inline-flex items-center justify-center gap-2 rounded-lg bg-white px-7 py-4 text-[15px] font-semibold text-[#10141d] shadow-[0_18px_50px_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(13,16,22,0.14)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f4efe4]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Écrire sur WhatsApp
            </a>
            <a
              href="tel:0663907888"
              className="cta-shine inline-flex items-center justify-center gap-2 rounded-lg border border-white/[0.18] bg-white/[0.075] px-7 py-4 text-[15px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-white/[0.28] hover:bg-white/[0.12]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
