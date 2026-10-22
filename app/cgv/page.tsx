// TODO: relecture juridique avant mise en ligne
import type { Metadata } from "next";

import { LegalDocument, type LegalSection } from "@/components/layout/legal-document";
import { pricingOptions, pricingTiers } from "@/content/pricing";
import { LEGAL, VAT_MENTION, mediator } from "@/lib/legal";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Conditions générales de prestation",
  description: "Conditions générales de prestation de création de press kits digitaux PressKit For You.",
  path: "cgv",
});

const optionByName = (name: string) => pricingOptions.find((option) => option.name === name);
const domainOption = optionByName("Nom de domaine personnalisé");
const maintenanceOption = optionByName("Maintenance annuelle");
const updateOption = optionByName("Mise à jour de contenu");

const sections: LegalSection[] = [
  {
    title: "Objet et champ d'application",
    paragraphs: [
      `Les présentes conditions générales de prestation s'appliquent à toute commande de création de press kit digital passée auprès de ${LEGAL.publisher}, ${LEGAL.legalForm}, exerçant sous le nom commercial « ${LEGAL.tradeName} », SIREN ${LEGAL.siren}, ${LEGAL.address} (ci-après « le Prestataire »).`,
      "Elles s'adressent aux clients particuliers (consommateurs) et aux clients professionnels (ci-après « le Client »). Toute commande implique l'acceptation sans réserve des présentes conditions.",
    ],
  },
  {
    title: "Offres et prix",
    paragraphs: [
      `Les prix sont exprimés en euros et sont nets : ${VAT_MENTION}.`,
      "Les formules et options proposées sont les suivantes :",
    ],
    items: [
      ...pricingTiers.map((tier) => `${tier.name} : ${tier.price}`),
      ...pricingOptions.map((option) => `${option.name} : ${option.price}`),
    ],
  },
  {
    title: "Commande et paiement",
    paragraphs: [
      `La commande est ferme lorsque le Client a accepté l'offre par écrit (email ou message) et réglé l'acompte. Un acompte de ${LEGAL.depositPercent} % du prix est dû à la commande ; le solde est dû à la livraison du press kit.`,
    ],
  },
  {
    title: "Déroulé et délais",
    paragraphs: [
      `Le Prestataire s'engage à livrer le press kit dans un délai de ${LEGAL.deliveryDays} jours ouvrés maximum à compter de la réception complète des contenus (textes, photos, vidéos, liens et références) nécessaires à la réalisation.`,
      "Le Client fournit ces contenus et garantit disposer des droits nécessaires sur ceux-ci (droit d'auteur, droit à l'image, musique, marques).",
    ],
  },
  {
    title: "Modifications",
    paragraphs: [
      `${LEGAL.revisionRounds} allers-retours de modifications sont inclus dans le prix. Au-delà, les modifications peuvent être commandées via l'option « ${updateOption?.name} » au tarif affiché (${updateOption?.price}).`,
    ],
  },
  {
    title: "Options",
    items: [
      `« ${domainOption?.name} » (${domainOption?.price}) : ${domainOption?.description}`,
      `« ${maintenanceOption?.name} » (${maintenanceOption?.price}) : ${maintenanceOption?.description}`,
    ],
    paragraphs: ["Ces options sont proposées aux tarifs affichés sur la page Tarifs au jour de la commande."],
  },
  {
    title: "Propriété intellectuelle et droits sur le site livré",
    paragraphs: [
      "Les contenus fournis par le Client restent sa propriété. Le Client concède au Prestataire le droit de les utiliser pour réaliser la prestation.",
      "Après paiement intégral, le Client dispose du droit d'utiliser le press kit livré pour son activité. Le Prestataire conserve la propriété de ses outils, composants et méthodes de conception.",
    ],
  },
  {
    title: "Référence et portfolio",
    paragraphs: [
      "Le Prestataire peut présenter la réalisation (captures et lien) sur presskit.fr et sur ses réseaux sociaux à titre de référence.",
    ],
  },
  {
    title: "Droit de rétractation",
    paragraphs: [
      "Le Client consommateur dispose d'un délai de 14 jours à compter de la conclusion du contrat pour se rétracter, sans avoir à motiver sa décision (article L221-18 du Code de la consommation). Ce droit est également applicable aux professionnels employant 5 salariés au plus lorsque l'objet du contrat n'entre pas dans le champ de leur activité principale (article L221-3).",
      "Pour l'exercer, le Client notifie sa décision au Prestataire par écrit à " + LEGAL.email + ", au moyen du modèle de formulaire figurant en annexe ou de toute déclaration dénuée d'ambiguïté.",
      "Si le Client demande expressément que la prestation commence avant la fin du délai de rétractation, il doit en faire la demande expresse (article L221-25) ; en cas de rétractation, il paie alors un montant proportionnel à ce qui a été fourni jusqu'à la communication de sa décision.",
    ],
  },
  ...(mediator.name
    ? [
        {
          title: "Médiation de la consommation",
          paragraphs: [
            "Conformément à l'article L612-1 du Code de la consommation, le Prestataire garantit au Client consommateur le recours effectif à un dispositif de médiation de la consommation.",
            `Médiateur : ${[mediator.name, mediator.address, mediator.website].filter(Boolean).join(", ")}.`,
          ],
        },
      ]
    : []),
  {
    title: "Droit applicable",
    paragraphs: ["Les présentes conditions sont soumises au droit français."],
  },
];

const annex = {
  title: "Annexe : modèle de formulaire de rétractation",
  paragraphs: [
    "(Veuillez compléter et renvoyer le présent formulaire uniquement si vous souhaitez vous rétracter du contrat.)",
    `À l'attention de ${LEGAL.publisher} (${LEGAL.tradeName}), ${LEGAL.address}, ${LEGAL.email} :`,
    "Je/Nous (*) vous notifie/notifions (*) par la présente ma/notre (*) rétractation du contrat portant sur la prestation de service ci-dessous :",
    "Commandé le (*) / reçu le (*) : ____________",
    "Nom du/des consommateur(s) : ____________",
    "Adresse du/des consommateur(s) : ____________",
    "Signature du/des consommateur(s) (uniquement en cas de notification du présent formulaire sur papier) : ____________",
    "Date : ____________",
    "(*) Rayez la mention inutile.",
  ],
};

export default function CgvPage() {
  return (
    <>
      <PageJsonLd path="cgv" name="Conditions générales de prestation" description="Conditions générales de prestation de création de press kits digitaux." />
      <LegalDocument title="Conditions générales de prestation" updatedAt="12 octobre 2026" sections={sections} annex={annex} />
    </>
  );
}
