import { faqItems } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { ChevronDown } from "lucide-react";

type FaqEntry = { question: string; answer: string };

type FaqProps = {
  items?: FaqEntry[];
  title?: string;
  description?: string;
  id?: string;
};

export function Faq({
  items = faqItems,
  title = "Les questions les plus fréquentes avant de lancer un projet",
  description = "Délais, contenus, modifications, options et paiement : l’essentiel avant de commencer.",
  id = "faq",
}: FaqProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section id={id} className="scroll-mt-28 py-16 md:py-20" aria-labelledby={`${id}-title`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageShell>
        <SectionHeading eyebrow="FAQ" title={title} description={description} id={`${id}-title`} />
        <div className="mt-12 border-y border-white/[0.12]">
          {items.map((item) => (
            <details key={item.question} className="acc group border-b border-white/[0.08] last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg font-semibold text-white md:text-xl">{item.question}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-white/[0.64] transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="acc-body">
                <p className="pb-6 pr-9 text-sm leading-7 text-white/[0.64]">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
