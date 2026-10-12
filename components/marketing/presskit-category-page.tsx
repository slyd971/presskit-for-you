import type { Category } from "@/content/site";
import { CategoryContent } from "@/components/marketing/category-content";
import { CategoryHero } from "@/components/marketing/category-hero";
import { CategoryOffer } from "@/components/marketing/category-offer";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { categoryFaqs } from "@/content/category-faqs";
import { categorySeo } from "@/content/seo-pages";
import { siteConfig } from "@/content/site";

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
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "EUR",
            minPrice: "300",
          },
          url: `${siteConfig.url}/tarifs`,
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: category.shortName, item: pageUrl },
        ],
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
      <FinalCta />
    </>
  );
}
