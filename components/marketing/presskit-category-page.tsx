import type { Category } from "@/content/site";
import { CategoryContent } from "@/components/marketing/category-content";
import { CategoryGuides } from "@/components/marketing/category-guides";
import { CategoryHero } from "@/components/marketing/category-hero";
import { CategoryOffer } from "@/components/marketing/category-offer";
import { MetiersLinks } from "@/components/marketing/metiers-links";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { categoryFaqs } from "@/content/category-faqs";
import { categoryGuides } from "@/content/category-guides";
import { categorySeo } from "@/content/seo-pages";
import { pricingTiers, siteConfig } from "@/content/site";
import { pageJsonLdNodes, serviceJsonLdNode } from "@/lib/json-ld";

type PresskitCategoryPageProps = {
  category: Category;
};

export function PresskitCategoryPage({ category }: PresskitCategoryPageProps) {
  const label = categorySeo[category.slug]?.label ?? category.shortName.toLowerCase();
  const faqItems = categoryFaqs[category.slug];
  const pageUrl = `${siteConfig.url}/${category.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...pageJsonLdNodes({
        path: category.slug,
        name: category.name,
        breadcrumbName: category.shortName,
        description: category.heroDescription,
      }),
      serviceJsonLdNode({
        id: `${pageUrl}#service`,
        name: `Press kit ${label}`,
        serviceType: `Press kit ${label}`,
        description: categorySeo[category.slug]?.description ?? category.heroDescription,
        url: pageUrl,
        // Press Kit Premium, la formule d'entrée.
        tier: pricingTiers[0],
      }),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CategoryHero category={category} />
      <CategoryContent category={category} />
      <CategoryGuides sections={categoryGuides[category.slug] ?? []} />
      <CategoryOffer slug={category.slug} />
      {faqItems ? (
        <Faq
          id={`faq-${category.slug}`}
          items={faqItems}
          title={`Questions fréquentes : press kit ${label}`}
          description="Contenus, formats, tarif et délais : l’essentiel avant de commencer."
        />
      ) : null}
      <MetiersLinks id="metiers-title" currentSlug={category.slug} title="Press kits pour d’autres métiers" />
      <FinalCta />
    </>
  );
}
