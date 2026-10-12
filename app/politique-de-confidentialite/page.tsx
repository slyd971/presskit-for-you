import type { Metadata } from "next";

import { LegalDocument, type LegalSection } from "@/components/layout/legal-document";
import { LEGAL } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description: "Comment PressKit For You collecte, utilise et protège vos données personnelles.",
  path: "politique-de-confidentialite",
  keywords: ["politique de confidentialité PressKit For You", "RGPD"],
});

const sections: LegalSection[] = [
  {
    title: "Responsable du traitement",
    paragraphs: [
      `Le responsable du traitement est ${LEGAL.publisher}, ${LEGAL.legalForm}, exerçant sous le nom commercial « ${LEGAL.tradeName} », SIREN ${LEGAL.siren}, ${LEGAL.address}. Contact : contact@presskit.fr.`,
    ],
  },
  {
    title: "Données collectées",
    paragraphs: ["Nous collectons uniquement les données que vous nous transmettez volontairement ou qui sont nécessaires à la prestation :"],
    items: [
      "Contact : nom, adresse email, numéro de téléphone, messages échangés par email, téléphone ou WhatsApp.",
      "Prestation : informations, textes, photos, vidéos et liens que vous nous fournissez pour réaliser votre press kit.",
      "Facturation : informations de facturation et historique des paiements.",
    ],
  },
  {
    title: "Finalités et bases légales",
    items: [
      "Répondre à vos demandes et établir un devis : mesures précontractuelles prises à votre demande.",
      "Réaliser, livrer et suivre la prestation : exécution du contrat.",
      "Facturation et comptabilité : obligation légale.",
      "Présenter nos réalisations comme références : intérêt légitime, avec possibilité de vous y opposer à tout moment.",
    ],
  },
  {
    title: "Durées de conservation",
    items: [
      "Demandes sans suite : 3 ans après le dernier contact.",
      "Données clients : durée de la prestation, puis 5 ans.",
      "Pièces comptables : 10 ans.",
    ],
  },
  {
    title: "Destinataires et sous-traitants",
    paragraphs: [
      "Vos données ne sont ni vendues ni cédées. Elles ne sont accessibles qu'au Prestataire et aux services techniques strictement nécessaires : hébergement du site (Vercel Inc., États-Unis), messagerie, et services de paiement ou de facturation.",
      "Lorsque ces prestataires sont situés hors de l'Union européenne, le transfert est encadré par des garanties appropriées, notamment les clauses contractuelles types de la Commission européenne ou le cadre de protection des données UE–États-Unis.",
    ],
  },
  {
    title: "Cookies et mesure d'audience",
    paragraphs: [
      "Le site n'utilise pas de cookies publicitaires. Si des outils de mesure d'audience ou des contenus tiers intégrés (vidéos, réseaux sociaux) sont utilisés, ils le sont dans les conditions prévues par la réglementation, avec votre consentement lorsqu'il est requis.",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      "Vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, d'opposition et de portabilité de vos données, ainsi que du droit de définir des directives sur leur sort après votre décès. Pour les exercer, écrivez à contact@presskit.fr ; une réponse vous est apportée dans un délai d'un mois.",
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr.",
    ],
  },
  {
    title: "Sécurité",
    paragraphs: [
      "Nous mettons en œuvre des mesures raisonnables pour protéger vos données (accès restreint, services reconnus, connexions sécurisées). Aucune méthode de transmission n'étant infaillible, nous ne pouvons toutefois garantir une sécurité absolue.",
    ],
  },
];

export default function PrivacyPage() {
  return <LegalDocument title="Politique de confidentialité" updatedAt="12 octobre 2026" sections={sections} />;
}
