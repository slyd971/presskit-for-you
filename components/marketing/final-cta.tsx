import { siteConfig } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { Mail, MessageCircle } from "lucide-react";

export function FinalCta() {
  return (
    <section id="contact" className="section-contact scroll-mt-28 py-16 md:py-24" aria-labelledby="final-cta-title">
      <PageShell className="max-w-5xl">
        <div className="mx-auto max-w-4xl py-2 text-center md:py-4">
          <h2 id="final-cta-title" className="mx-auto max-w-3xl text-5xl font-semibold leading-[1.04] md:leading-[1.04] tracking-tighter2 text-ink-editorial md:text-7xl">
            Parle-nous de ton univers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-lg leading-9 text-[#3d4551] md:text-xl md:leading-10">
            Dis-nous ce que tu fais et à qui tu veux l’envoyer : on te répond avec le format et le prix.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row md:mt-8">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-cycle cta-shine inline-flex items-center justify-center gap-2 rounded-lg border border-whatsapp bg-whatsapp px-8 py-[1.125rem] text-base font-semibold text-whatsapp-ink hover:border-whatsapp-hover hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Écrire sur WhatsApp
            </a>
            <a
              href="mailto:contact@presskit.fr"
              className="button-cycle cta-shine inline-flex items-center justify-center gap-2 rounded-lg border border-ink-editorial/[0.24] bg-white px-8 py-[1.125rem] text-base font-semibold text-ink-editorial hover:border-ink-editorial hover:bg-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Envoyer un e-mail
            </a>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
