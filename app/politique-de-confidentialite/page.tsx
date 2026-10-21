// TODO: relecture juridique avant mise en ligne
import type { Metadata } from "next";

import { LegalDocument, type LegalSection } from "@/components/layout/legal-document";
import { LEGAL } from "@/lib/legal";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Politique de confidentialité",
  description: "Comment PressKit For You collecte, utilise et protège vos données personnelles.",
  path: "politique-de-confidentialite",
  keywords: ["politique de confidentialité PressKit For You", "RGPD"],
});

const sections: LegalSection[] = [
  {
    title: "Responsable de traitement",
    paragraphs: [
      `Le responsable de traitement est ${LEGAL.publisher}, ${LEGAL.legalForm}, exerçant sous le nom commercial « ${LEGAL.tradeName} », SIREN ${LEGAL.siren}, ${LEGAL.address}. Contact : ${LEGAL.email}.`,
    ],
  },
  {
    title: "Données collectées",
    items: [
      "Échanges par email et WhatsApp (canal optionnel opéré par Meta) : nom, coordonnées et contenu de vos messages.",
      "Données de projet transmises par le client : textes, photos, vidéos, liens et informations nécessaires à la réalisation du press kit.",
      "Journaux techniques de l'hébergeur, dont l'adresse IP.",
      "Mesure d'audience : statistiques de fréquentation anonymisées (pages vues, pays, type d'appareil) collectées par Vercel Web Analytics, sans cookie et sans identification des visiteurs.",
    ],
  },
  {
    title: "Finalités et bases légales",
    items: [
      "Répondre à vos demandes : mesures précontractuelles prises à votre demande.",
      "Réaliser et livrer la prestation : exécution du contrat.",
      "Tenir la comptabilité et la facturation : obligations comptables.",
      "Mesurer la fréquentation du site et l'améliorer : intérêt légitime, sur des données anonymisées.",
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
    title: "Sous-traitants et transferts",
    paragraphs: [
      `Le site est hébergé par ${LEGAL.host.name} (États-Unis), certifié EU-US Data Privacy Framework, qui encadre le transfert de données hors de l'Union européenne.`,
    ],
  },
  {
    title: "Cookies",
    paragraphs: [
      "Aucun cookie ni traceur non essentiel n'est déposé sur ce site. La mesure d'audience (Vercel Web Analytics) fonctionne sans cookie et ne permet pas d'identifier les visiteurs.",
    ],
  },
  {
    title: "Vos droits",
    paragraphs: [
      `Vous disposez d'un droit d'accès, de rectification, d'effacement, d'opposition et de portabilité de vos données. Pour les exercer, écrivez à ${LEGAL.email}.`,
      "Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL : www.cnil.fr.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageJsonLd path="politique-de-confidentialite" name="Politique de confidentialité" description="Traitement et protection des données personnelles par PressKit For You." />
      <LegalDocument title="Politique de confidentialité" updatedAt="12 octobre 2026" sections={sections} />
    </>
  );
}
