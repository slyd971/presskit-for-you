import { siteConfig } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Mail, MessageCircle } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="section-contact scroll-mt-28 py-14 md:py-24" aria-labelledby="final-cta-title">
      <PageShell className="max-w-5xl">
        <div className="mx-auto max-w-4xl py-2 text-center md:py-4">
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
              className="button-cycle cta-shine inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-8 py-[1.125rem] text-base font-semibold text-[#07140c] shadow-[0_18px_50px_rgba(37,211,102,0.24),inset_0_-1px_0_rgba(7,20,12,0.14)] hover:bg-[#1fbd59] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Discuter du projet
            </a>
            <a
              href="mailto:david.mecorvin@hotmail.fr"
              className="button-cycle cta-shine inline-flex items-center justify-center gap-2 rounded-lg border border-[#10141d]/20 bg-white/55 px-8 py-[1.125rem] text-base font-semibold text-[#10141d] shadow-[inset_0_1px_0_rgba(255,255,255,0.72)] hover:border-[#10141d]/32 hover:bg-white/78 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Envoyer un email
            </a>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
