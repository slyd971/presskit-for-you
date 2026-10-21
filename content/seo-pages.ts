// SEO titles and descriptions for the trade pages. Titles are absolute (the brand is already included).
export type CategorySeo = {
  title: string;
  description: string;
  // Trade label used in headings, e.g. "Questions fréquentes : press kit {label}".
  label: string;
};

const deliveryPitch = "Livré en 7 jours ouvrés, dès 300 €.";

export const categorySeo: Record<string, CategorySeo> = {
  dj: {
    title: "Press kit DJ en ligne : ton site booking pro | PressKit For You",
    description: `Un press kit DJ clair pour les bookers : styles, mixes, vidéos, références et contact booking. ${deliveryPitch}`,
    label: "DJ",
  },
  artiste: {
    title: "Press kit artiste : site vitrine pro en un lien | PressKit For You",
    description: `Présente tes œuvres, ta démarche et tes références dans un press kit artiste clair, partageable en un lien. ${deliveryPitch}`,
    label: "artiste",
  },
  danseur: {
    title: "Press kit danseur : présente tes performances | PressKit For You",
    description: `Vidéos de performance, parcours et collectif réunis dans un press kit danseur pensé pour les lieux et les marques. ${deliveryPitch}`,
    label: "danseur",
  },
  photographe: {
    title: "Press kit photographe : portfolio en un lien | PressKit For You",
    description: `Portfolio, prestations et contact réunis dans un press kit photographe qui donne envie de te réserver. ${deliveryPitch}`,
    label: "photographe",
  },
  "coach-sportif": {
    title: "Press kit coach sportif : site vitrine pro | PressKit For You",
    description: `Offres, méthode et résultats clairs dans un press kit coach sportif qui facilite la prise de rendez-vous. ${deliveryPitch}`,
    label: "coach sportif",
  },
  "make-up-artist": {
    title: "Press kit make-up artist : portfolio beauté pro | PressKit For You",
    description: `Tes looks, prestations et zone de déplacement réunis dans un press kit make-up artist qui donne envie de réserver. ${deliveryPitch}`,
    label: "make-up artist",
  },
  organisateur: {
    title: "Press kit organisateur : dossier sponsoring | PressKit For You",
    description: `Chiffres de communauté, photos et partenaires réunis dans un dossier sponsors digital pour ta soirée. ${deliveryPitch}`,
    label: "organisateur",
  },
};
