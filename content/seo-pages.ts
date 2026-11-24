// SEO titles and descriptions for the trade pages. Titles are absolute: 60 characters max,
// so the brand is left out when it does not fit.
export type CategorySeo = {
  title: string;
  description: string;
  // Trade label used in headings, e.g. "Questions fréquentes : press kit {label}".
  label: string;
};

const deliveryPitch = "Livré en 7 jours, dès 300 €.";

export const categorySeo: Record<string, CategorySeo> = {
  dj: {
    title: "Press kit DJ : ton site booking pro | PressKit For You",
    description: `Un press kit DJ clair pour les bookers et les clubs : styles, mixes, vidéos, références et contact booking, en un seul lien. ${deliveryPitch}`,
    label: "DJ",
  },
  artiste: {
    title: "Press kit artiste : ton EPK musique | PressKit For You",
    description: `Bio, sons, clips, presse et booking dans un press kit artiste (EPK) clair pour programmateurs, médias et labels. ${deliveryPitch}`,
    label: "artiste",
  },
  danseur: {
    title: "Press kit danseur : ton book en ligne | PressKit For You",
    description: `Vidéos de performance, parcours et collectif réunis dans un press kit danseur pensé pour les lieux et les marques. ${deliveryPitch}`,
    label: "danseur",
  },
  photographe: {
    title: "Press kit photographe : ton portfolio pro | PressKit For You",
    description: `Tes meilleures images, tes prestations et ton contact réunis dans un press kit photographe qui donne envie de te réserver. ${deliveryPitch}`,
    label: "photographe",
  },
  "coach-sportif": {
    title: "Press kit coach sportif : ta page pro | PressKit For You",
    description: `Ta méthode, tes offres et tes résultats présentés clairement dans un press kit coach sportif qui facilite la prise de rendez-vous. ${deliveryPitch}`,
    label: "coach sportif",
  },
  "make-up-artist": {
    title: "Press kit make-up artist : ton portfolio maquillage",
    description: `Tes looks, prestations et zone de déplacement réunis dans un press kit make-up artist qui donne envie de réserver. ${deliveryPitch}`,
    label: "make-up artist",
  },
  organisateur: {
    title: "Press kit organisateur : ton dossier de sponsoring",
    description: `Chiffres de communauté, photos et partenaires réunis dans un dossier sponsors digital pour ta soirée, prêt à envoyer aux marques. ${deliveryPitch}`,
    label: "organisateur",
  },
  "createur-de-contenu": {
    title: "Media kit UGC et créateur de contenu | PressKit For You",
    description: `Ton media kit de créateur de contenu ou UGC : présentation, chiffres, vidéos, marques et contact réunis en un seul lien. ${deliveryPitch}`,
    label: "créateur de contenu",
  },
};
