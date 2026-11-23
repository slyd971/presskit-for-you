import type { PricingTier } from "@/content/pricing";
import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

export const FRANCE = { "@type": "Country", name: "France" };
export const ILE_DE_FRANCE = { "@type": "AdministrativeArea", name: "Île-de-France" };

type ServiceNodeOptions = {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  url: string;
  // Formule vendue par ce service. Sans prix de départ (sur devis), pas d'offre chiffrée.
  tier: PricingTier;
};

export function serviceJsonLdNode({ id, name, serviceType, description, url, tier }: ServiceNodeOptions) {
  return {
    "@type": "Service",
    "@id": id,
    name,
    serviceType,
    description,
    url,
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: FRANCE,
    ...(tier.minPrice
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "EUR",
            price: tier.minPrice,
            priceSpecification: {
              "@type": "PriceSpecification",
              priceCurrency: "EUR",
              minPrice: tier.minPrice,
              // « À partir de … » : le texte affiché sur le site.
              description: tier.price,
            },
            url: absoluteUrl("tarifs"),
          },
        }
      : {}),
  };
}

type PageNodeOptions = {
  // Chemin sans slash initial, comme `path` dans createPageMetadata. Vide pour l'accueil.
  path?: string;
  name: string;
  // Libellé du fil d'Ariane si différent de `name`.
  breadcrumbName?: string;
  description?: string;
};

// WebPage de la page (url = canonical) et, hors accueil, son unique BreadcrumbList.
export function pageJsonLdNodes({ path = "", name, breadcrumbName, description }: PageNodeOptions) {
  const url = absoluteUrl(path);

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
  };

  if (!path) {
    return [webPage];
  }

  return [
    webPage,
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: breadcrumbName ?? name, item: url },
      ],
    },
  ];
}
