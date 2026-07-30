export type PricingTier = {
  name: string;
  price: string;
  tagline: string;
  description: string;
  features: string[];
  badge: string;
};

export type PricingOption = {
  name: string;
  price: string;
  description: string;
};

export const pricingTiers: PricingTier[] = [
  {
    name: "Press Kit Premium",
    price: "À partir de 300 €",
    tagline: "pour lancer ton image pro",
    description: "L’offre idéale pour créer un press kit clair, premium et prêt à partager.",
    features: [
      "Page press kit sur-mesure",
      "Adaptation mobile",
      "Jusqu’à 5 sections",
      "Galerie photos / vidéos",
      "Intégration réseaux sociaux",
      "CTA contact intégré",
      "Livraison rapide",
    ],
    badge: "Le plus demandé",
  },
  {
    name: "Studio Custom",
    price: "Sur devis",
    tagline: "pour un projet plus ambitieux",
    description: "Pour une expérience plus éditoriale, multi-pages ou entièrement sur mesure.",
    features: [
      "Architecture complète",
      "Pages supplémentaires",
      "Direction artistique plus poussée",
      "Fonctionnalités spécifiques",
      "SEO avancé",
      "Accompagnement contenu",
    ],
    badge: "Projet avancé",
  },
];

export const pricingOptions: PricingOption[] = [
  {
    name: "Nom de domaine personnalisé",
    price: "+30 €",
    description: "Pour partager une adresse courte et crédible, reliée à votre nom ou votre marque.",
  },
  {
    name: "Maintenance annuelle",
    price: "+60 €/an",
    description: "Pour assurer les mises à jour, les corrections et le bon fonctionnement de votre press kit.",
  },
  {
    name: "Mise à jour de contenu",
    price: "+30 €",
    description: "Pour remplacer une photo, ajouter une date, modifier un texte ou mettre à jour vos liens.",
  },
  {
    name: "Séance photo professionnelle",
    price: "Sur devis",
    description: "Pour créer les visuels manquants quand vos photos actuelles ne rendent pas justice au projet.",
  },
];
