import { siteConfig } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { MessageCircle, Phone } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="section-divider section-contact scroll-mt-28 py-12 md:py-20" aria-labelledby="final-cta-title">
      <PageShell className="max-w-5xl">
        <div className="mx-auto max-w-4xl py-4 text-center md:py-8">
          <h2 id="final-cta-title" className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tighter2 text-[#10141d] md:text-7xl">
            Parlez-nous de votre univers.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-9 text-[#3d4551] md:text-xl md:leading-10">
            On vous aide à cadrer le bon format, le bon niveau de design et les contenus qui feront vraiment la différence.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:mt-8">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="cta-shine inline-flex items-center justify-center gap-2 rounded-lg bg-[#10141d] px-8 py-[1.125rem] text-base font-semibold text-white shadow-[0_18px_50px_rgba(13,17,24,0.18),inset_0_-1px_0_rgba(255,255,255,0.12)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#1b2230]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Écrire sur WhatsApp
            </a>
            <a
              href="tel:0663907888"
              className="cta-shine inline-flex items-center justify-center gap-2 rounded-lg border border-[#10141d]/20 bg-white/55 px-8 py-[1.125rem] text-base font-semibold text-[#10141d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#10141d]/32 hover:bg-white/78"
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
