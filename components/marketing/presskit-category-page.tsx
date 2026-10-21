import type { Category } from "@/content/site";
import { CategoryContent } from "@/components/marketing/category-content";
import { CategoryHero } from "@/components/marketing/category-hero";
import { CategoryOffer } from "@/components/marketing/category-offer";
import { MetiersLinks } from "@/components/marketing/metiers-links";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { categoryFaqs } from "@/content/category-faqs";
import { categorySeo } from "@/content/seo-pages";
import { siteConfig } from "@/content/site";
import { pageJsonLdNodes } from "@/lib/json-ld";

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
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        serviceType: `Press kit ${label}`,
        name: `Press kit ${label}`,
        description: categorySeo[category.slug]?.description ?? category.heroDescription,
        url: pageUrl,
        areaServed: "FR",
        provider: { "@id": `${siteConfig.url}/#organization` },
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: "300",
          priceSpecification: {
            "@type": "PriceSpecification",
            minPrice: 300,
            priceCurrency: "EUR",
          },
          url: `${siteConfig.url}/tarifs`,
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CategoryHero category={category} />
      <CategoryContent category={category} />
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
