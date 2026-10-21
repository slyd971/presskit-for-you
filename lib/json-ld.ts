import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

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
