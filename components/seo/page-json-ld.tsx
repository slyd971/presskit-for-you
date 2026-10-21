import { pageJsonLdNodes } from "@/lib/json-ld";

type PageJsonLdProps = Parameters<typeof pageJsonLdNodes>[0];

export function PageJsonLd(props: PageJsonLdProps) {
  const data = { "@context": "https://schema.org", "@graph": pageJsonLdNodes(props) };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
