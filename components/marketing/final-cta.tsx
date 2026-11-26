import { BriefForm } from "@/components/marketing/brief-form";
import { PageShell } from "@/components/layout/page-shell";
import { categories, pricingTiers } from "@/content/site";

type FinalCtaProps = {
  // Métier présélectionné dans le brief (pages métiers) : `shortName` de la catégorie.
  metier?: string;
};

// Chefs et traiteurs n'ont pas de page métier en ligne : ils passent par « Autre ».
const metiers = [...categories.filter((category) => category.slug !== "chef").map((category) => category.shortName), "Autre"];
const formules = [
  ...pricingTiers.map((tier) => `${tier.name} (${tier.minPrice ? `dès ${tier.minPrice}\u00a0€` : tier.price.toLowerCase()})`),
  "Je ne sais pas encore",
];

export function FinalCta({ metier }: FinalCtaProps) {
  return (
    <section id="contact" className="section-contact scroll-mt-16 py-20 md:scroll-mt-20 md:py-28" aria-labelledby="final-cta-title">
      <PageShell>
        <BriefForm
          titleId="final-cta-title"
          title="Parle-nous de ton univers"
          description="Dis-nous ce que tu fais et à qui tu veux l’envoyer : on te répond avec le format et le prix."
          metiers={metiers}
          formules={formules}
          defaultMetier={metier}
        />
      </PageShell>
    </section>
  );
}
