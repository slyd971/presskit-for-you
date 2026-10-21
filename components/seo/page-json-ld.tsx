import { pageJsonLdNodes } from "@/lib/json-ld";

type PageJsonLdProps = Parameters<typeof pageJsonLdNodes>[0] & {
  // Nœuds propres à la page (ex. Service sur /tarifs), ajoutés au graphe.
  extraNodes?: Record<string, unknown>[];
};

export function PageJsonLd({ extraNodes = [], ...props }: PageJsonLdProps) {
  const data = { "@context": "https://schema.org", "@graph": [...pageJsonLdNodes(props), ...extraNodes] };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
