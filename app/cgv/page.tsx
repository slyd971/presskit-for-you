import type { Metadata } from "next";

import { LegalDocument, type LegalSection } from "@/components/layout/legal-document";
import { LEGAL, VAT_MENTION } from "@/lib/legal";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Conditions générales de vente",
  description: "Conditions générales de vente des prestations de création de press kits digitaux PressKit For You.",
  path: "cgv",
  keywords: ["CGV PressKit For You", "conditions générales de vente press kit"],
});

const sections: LegalSection[] = [
  {
    title: "Identification du prestataire et objet",
    paragraphs: [
      `Les présentes conditions générales de vente (CGV) s'appliquent à toute commande de prestation passée auprès de ${LEGAL.publisher}, ${LEGAL.legalForm}, exerçant sous le nom commercial « ${LEGAL.tradeName} », SIREN ${LEGAL.siren}, ${LEGAL.address} (ci-après « le Prestataire »).`,
      "Elles encadrent la création et la livraison de press kits digitaux (pages web de présentation) pour des artistes, talents, créatifs et indépendants (ci-après « le Client »), ainsi que les options associées. Toute commande implique l'acceptation sans réserve des présentes CGV.",
    ],
  },
  {
    title: "Prix",
    paragraphs: [
      `Les prix sont ceux affichés sur la page Tarifs au jour de la commande. Ils sont exprimés en euros et sont nets : ${VAT_MENTION} (franchise en base de TVA).`,
      "Les prestations « Studio Custom » et « Séance photo professionnelle » font l'objet d'un devis personnalisé et gratuit, qui précise le périmètre, le prix et les délais. Le prix du devis accepté est ferme.",
    ],
    items: [
      "Press Kit Premium : à partir de 300 €",
      "Nom de domaine personnalisé : +30 €",
      "Maintenance annuelle : +60 € par an",
      "Mise à jour de contenu : +30 €",
    ],
  },
  {
    title: "Commande et paiement",
    paragraphs: [
      "La commande est ferme lorsque le Client a accepté le devis ou l'offre par écrit (email, message ou signature) et réglé l'acompte.",
      "Le paiement s'effectue en deux temps : un acompte de 50 % à la commande, et le solde de 50 % à la livraison du press kit. Le travail démarre à réception de l'acompte.",
      "Le règlement s'effectue par virement bancaire ou par tout autre moyen indiqué sur la facture. En cas de retard de paiement, des pénalités de retard au taux de trois fois le taux d'intérêt légal sont exigibles, ainsi qu'une indemnité forfaitaire de 40 € pour frais de recouvrement pour les clients professionnels.",
    ],
  },
  {
    title: "Déroulement, contenus et délais",
    paragraphs: [
      "Le Client fournit les textes, photos, vidéos, liens et informations nécessaires dans les délais convenus. Il garantit disposer des droits sur les contenus transmis (droit d'auteur, droit à l'image, musique, marques) et dégage le Prestataire de toute responsabilité à ce titre.",
      "Les délais de livraison sont indiqués à titre prévisionnel lors de la commande. Ils courent à compter de la réception de l'acompte et de l'ensemble des contenus nécessaires, et peuvent être décalés si le Client tarde à fournir ou à valider ses contenus.",
    ],
  },
  {
    title: "Modifications et validation",
    paragraphs: [
      "Le prix du Press Kit Premium inclut 5 allers-retours de modifications, c'est-à-dire cinq séries de retours groupés du Client sur les maquettes ou la version de travail.",
      "Au-delà, ou pour toute demande qui sort du périmètre initialement défini (nouvelles sections, refonte de la direction artistique, changement de contenu majeur), le Prestataire propose un devis complémentaire.",
      "La livraison est effectuée par la remise du lien du press kit en ligne. Sans retour du Client dans les 7 jours suivant la livraison, la prestation est réputée acceptée.",
    ],
  },
  {
    title: "Options : nom de domaine et maintenance",
    paragraphs: [
      "L'option « Nom de domaine personnalisé » comprend l'achat et la configuration d'une adresse reliée au press kit du Client, selon la formule affichée dans les tarifs.",
      "L'option « Maintenance annuelle » comprend, pour une année, les mises à jour, corrections et le suivi du bon fonctionnement du press kit, dans la limite de ce qui est décrit dans les tarifs. Elle est facturée à l'année et n'est pas reconduite tacitement sans accord du Client.",
      "L'option « Mise à jour de contenu » couvre une demande ponctuelle de modification (remplacement d'une photo, ajout d'une date, modification d'un texte ou de liens).",
    ],
  },
  {
    title: "Propriété intellectuelle",
    paragraphs: [
      "Les contenus fournis par le Client restent sa propriété. Il concède au Prestataire le droit de les utiliser pour réaliser la prestation.",
      "Après paiement intégral du prix, le Client dispose du droit d'utiliser le press kit livré pour son activité. Le Prestataire conserve la propriété de ses outils, composants et méthodes de conception.",
      "Sauf opposition écrite du Client, le Prestataire peut présenter le press kit réalisé (capture, lien) comme référence sur son site et ses supports de communication.",
    ],
  },
  {
    title: "Droit de rétractation",
    paragraphs: [
      "Si le Client est un consommateur (personne agissant à des fins qui n'entrent pas dans le cadre de son activité professionnelle) et que la commande est conclue à distance, il dispose d'un délai de 14 jours à compter de la commande pour se rétracter, sans avoir à motiver sa décision, en écrivant à contact@presskit.fr.",
      "Le Client qui demande expressément que la prestation commence avant la fin de ce délai, ce que le paiement de l'acompte vaut pour demande, devra payer un montant proportionnel au travail déjà réalisé au moment de la rétractation. Une fois la prestation pleinement exécutée, avec l'accord exprès du Client et renoncement à son droit de rétractation, ce droit ne peut plus être exercé.",
      "Les clients professionnels ne bénéficient pas du droit de rétractation.",
    ],
  },
  {
    title: "Annulation",
    paragraphs: [
      "En cas d'annulation par le Client après le début de la prestation et hors droit de rétractation, l'acompte reste acquis au Prestataire en contrepartie du travail engagé. Si le travail réalisé dépasse la valeur de l'acompte, le surplus reste dû.",
    ],
  },
  {
    title: "Responsabilité",
    paragraphs: [
      "Le Prestataire est tenu à une obligation de moyens. Sa responsabilité est limitée aux dommages directs et ne saurait excéder le montant payé par le Client pour la prestation concernée.",
      "Le Prestataire n'est pas responsable des contenus fournis par le Client, des interruptions dues aux services tiers (hébergeur, registrar, réseaux sociaux, plateformes d'écoute ou de vidéo) ni des cas de force majeure.",
    ],
  },
  {
    title: "Données personnelles",
    paragraphs: [
      "Les données personnelles collectées pour la gestion de la commande sont traitées conformément à la politique de confidentialité, accessible depuis le site.",
    ],
  },
  {
    title: "Droit applicable et litiges",
    paragraphs: [
      "Les présentes CGV sont soumises au droit français. En cas de litige, le Client est invité à contacter d'abord le Prestataire à contact@presskit.fr afin de rechercher une solution amiable.",
      "Le Client consommateur peut également recourir à la plateforme européenne de règlement en ligne des litiges : https://ec.europa.eu/consumers/odr.",
    ],
  },
];

export default function CgvPage() {
  return <LegalDocument title="Conditions générales de vente" updatedAt="12 octobre 2026" sections={sections} />;
}
