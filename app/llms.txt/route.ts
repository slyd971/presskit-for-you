import { pricingOptions, pricingTiers } from "@/content/pricing";
import { categorySeo } from "@/content/seo-pages";
import { examples, liveExamplesCount, siteConfig } from "@/content/site";
import { LEGAL, VAT_MENTION } from "@/lib/legal";
import { publishedPresskitCategories } from "@/lib/presskit-categories";
import { absoluteUrl } from "@/lib/seo";

// /llms.txt : résumé du site en Markdown pour les IA (format llmstxt.org), généré au build.
export const dynamic = "force-static";

const link = (title: string, url: string, description: string) => `- [${title}](${url}): ${description}`;

export function GET() {
  const tiers = pricingTiers.map((tier) => `- ${tier.name} (${tier.price}) : ${tier.features.join(", ")}.`);
  const options = pricingOptions.map((option) => `- ${option.name} (${option.price}) : ${option.description}`);
  const categoryPages = publishedPresskitCategories.map((category) =>
    link(category.name, absoluteUrl(category.slug), categorySeo[category.slug]?.description ?? category.description),
  );
  const liveExamples = examples.flatMap((example) =>
    example.externalDemoUrl ? [link(`${example.title} (${example.category})`, example.externalDemoUrl, example.description)] : [],
  );

  const body = `# ${siteConfig.name}

> Création de press kits digitaux (EPK, media kits) sur mesure : une page web avec la présentation, les médias, les références et le contact d'un professionnel, partagée en un seul lien. Pour DJs, artistes, danseurs, photographes, vidéastes, coachs sportifs, make-up artists, organisateurs de soirée et créateurs de contenu.

${siteConfig.name} est tenu par ${LEGAL.publisher}, en Île-de-France. Le brief se fait en rendez-vous en Île-de-France, ou en visio ailleurs.

Conditions de la formule Press Kit Premium :

- Délai : ${LEGAL.deliveryDays} jours après réception des contenus.
- ${LEGAL.revisionRounds} allers-retours de modifications inclus.
- Paiement : ${LEGAL.depositPercent} % à la commande, ${100 - LEGAL.depositPercent} % à la livraison. Sans abonnement.
- ${VAT_MENTION}.

Formules :

${tiers.join("\n")}

Options :

${options.join("\n")}

Contact : ${LEGAL.email}, WhatsApp ${siteConfig.phone}.

## Pages principales

${link("Accueil", siteConfig.url, "présentation, méthode, avis clients et questions fréquentes.")}
${link("Exemples", absoluteUrl("exemples"), `${liveExamplesCount} press kits clients en ligne, classés par métier.`)}
${link("Tarifs", absoluteUrl("tarifs"), "formules, options et questions sur les prix.")}

## Pages métiers

${categoryPages.join("\n")}

## Exemples clients en ligne

${liveExamples.join("\n")}

## Optional

${link("CGV", absoluteUrl("cgv"), "conditions générales de prestation.")}
${link("Mentions légales", absoluteUrl("mentions-legales"), "éditeur, hébergement et contact.")}
${link("Politique de confidentialité", absoluteUrl("politique-de-confidentialite"), "données collectées et droits.")}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
