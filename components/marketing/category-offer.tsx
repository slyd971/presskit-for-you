import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { TestimonialCard } from "@/components/marketing/social-proof";
import { CTA, testimonials } from "@/content/site";
import { LEGAL, VAT_MENTION } from "@/lib/legal";

type CategoryOfferProps = {
  slug: string;
};

export function CategoryOffer({ slug }: CategoryOfferProps) {
  const testimonial = testimonials.find((item) => item.categorySlug === slug);

  return (
    <section className="section-divider py-16 md:py-20" aria-label="Tarif et témoignage">
      <PageShell className="max-w-5xl">
        <div className="grid gap-7 border-y border-white/[0.12] py-8 md:grid-cols-[1fr_auto] md:items-center md:py-10">
          <div>
            <p className="text-2xl font-semibold leading-tight tracking-tighter2 text-white md:text-3xl">
              À partir de 300 € · livré en {LEGAL.deliveryDays} jours ouvrés · {LEGAL.revisionRounds} allers-retours inclus
            </p>
            <p className="mt-3 text-xs text-white/[0.64]">{VAT_MENTION}</p>
          </div>
          <Button arrow href="/#contact" className="min-h-12 justify-center px-7 py-4 text-[15px]">
            {CTA.primary}
          </Button>
        </div>
        {testimonial ? (
          <div className="mx-auto mt-10 max-w-xl">
            <TestimonialCard item={testimonial} />
          </div>
        ) : null}
      </PageShell>
    </section>
  );
}
