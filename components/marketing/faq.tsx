import { faqItems } from "@/content/site";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";

export function Faq() {
  return (
    <section className="py-16 md:py-20">
      <PageShell>
        <SectionHeading
          eyebrow="FAQ"
          title="Les questions les plus fréquentes avant de lancer un projet."
          description="De quoi cadrer rapidement le service, la logique du format et son évolution future."
        />
        <div className="mt-12 grid gap-5">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-white">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-white/64">{item.answer}</p>
            </article>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
