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
      "Page press kit sur mesure",
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
      "Structure et navigation sur mesure",
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
    description: "Pour relier ton press kit à une adresse courte, à ton nom ou à celui de ta marque. Le domaine t'appartient, son renouvellement est à ta charge.",
  },
  {
    name: "Maintenance annuelle",
    price: "+60 €/an",
    description: "Tes mises à jour de contenu en illimité pendant un an (photos, dates, textes, liens), corrections techniques comprises. Avantageuse dès la deuxième mise à jour. Nouvelle section ou refonte : sur devis.",
  },
  {
    name: "Mise à jour de contenu",
    price: "+30 €",
    description: "Pour une modification ponctuelle : remplacer une photo, ajouter une date, modifier un texte ou mettre à jour tes liens.",
  },
  {
    name: "Séance photo professionnelle",
    price: "Sur devis",
    description: "Pour créer les visuels manquants quand tes photos actuelles ne rendent pas justice au projet.",
  },
];
