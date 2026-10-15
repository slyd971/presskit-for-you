import { LEGAL } from "@/lib/legal";

export type FaqEntry = { question: string; answer: string };

const pricingAnswer = `À partir de 300 €, livré en ${LEGAL.deliveryDays} jours ouvrés maximum, ${LEGAL.revisionRounds} allers-retours inclus.`;

export const categoryFaqs: Record<string, FaqEntry[]> = {
  dj: [
    {
      question: "Puis-je intégrer mes mixes SoundCloud ou Mixcloud ?",
      answer: "Oui, tes sets sont intégrés dans la page : le booker écoute sans quitter ton press kit.",
    },
    {
      question: "Quelle différence avec un Linktree pour un DJ ?",
      answer:
        "Un Linktree aligne des liens ; le press kit met en avant tes références de clubs, tes vidéos live et tes styles, ce qu'un booker regarde avant de programmer.",
    },
    {
      question: "Je joue en club et en événementiel privé, je peux présenter les deux ?",
      answer: "Oui, on peut séparer les formats (club, mariage, corporate) avec des médias adaptés à chacun.",
    },
    {
      question: "Combien coûte un press kit DJ ?",
      answer: `À partir de 300 €, livré en ${LEGAL.deliveryDays} jours ouvrés maximum, avec ${LEGAL.revisionRounds} allers-retours de modifications inclus.`,
    },
  ],
  photographe: [
    {
      question: "Mes photos seront-elles affichées en haute qualité ?",
      answer: "Oui, la galerie est optimisée pour rester nette sur mobile comme sur grand écran, sans ralentir la page.",
    },
    {
      question: "Puis-je présenter mes prestations et mes tarifs ?",
      answer: "Oui, une section services peut détailler tes formules (shooting, événementiel, corporate).",
    },
    {
      question: "Quelle différence avec Instagram pour un photographe ?",
      answer: "Instagram compresse et mélange tout ; le press kit présente une sélection, tes références et un contact direct.",
    },
    {
      question: "Combien coûte un press kit photographe ?",
      answer: pricingAnswer,
    },
  ],
  "make-up-artist": [
    {
      question: "Puis-je présenter mes prestations mariée, shooting et événementiel ?",
      answer: "Oui, chaque prestation peut avoir sa description et son contact de réservation.",
    },
    {
      question: "Puis-je indiquer ma zone de déplacement ?",
      answer: "Oui, une section dédiée précise ta zone de déplacement, par exemple partout en Île-de-France.",
    },
    {
      question: "Combien coûte un press kit make-up artist ?",
      answer: pricingAnswer,
    },
  ],
  danseur: [
    {
      question: "Puis-je intégrer mes vidéos de performances ?",
      answer: "Oui, tes vidéos sont intégrées directement dans la page.",
    },
    {
      question: "Je fais partie d'un collectif, puis-je le présenter ?",
      answer: "Oui, une section peut présenter le collectif, ses projets et ses membres.",
    },
    {
      question: "Puis-je proposer des ateliers ou des cours ?",
      answer: "Oui, avec leur description et un contact direct.",
    },
    {
      question: "Combien coûte un press kit danseur ?",
      answer: pricingAnswer,
    },
  ],
  "coach-sportif": [
    {
      question: "Puis-je présenter mes offres et programmes ?",
      answer: "Oui, chaque offre peut avoir sa description et son appel à l'action.",
    },
    {
      question: "Puis-je montrer les résultats de mes clients ?",
      answer: "Oui, avec leur accord : témoignages, transformations, chiffres.",
    },
    {
      question: "Mes clients peuvent-ils me contacter directement ?",
      answer: "Oui, via WhatsApp, email ou un lien de prise de rendez-vous.",
    },
    {
      question: "Combien coûte un press kit coach sportif ?",
      answer: pricingAnswer,
    },
  ],
  organisateur: [
    {
      question: "Puis-je présenter les chiffres de ma communauté ?",
      answer: "Oui : abonnés, participants, éditions passées, des preuves que les sponsors regardent en premier.",
    },
    {
      question: "Le press kit peut-il servir de dossier sponsor ?",
      answer: "Oui, il remplace un PDF statique par une page à jour, avec galerie et contact partenaires.",
    },
    {
      question: "Puis-je ajouter les flyers et photos de mes soirées ?",
      answer: "Oui, dans une galerie dédiée.",
    },
    {
      question: "Combien coûte un press kit organisateur ?",
      answer: pricingAnswer,
    },
  ],
  artiste: [
    {
      question: "Puis-je présenter mes œuvres et ma démarche ?",
      answer: "Oui, une galerie et une section démarche mettent ton travail en scène.",
    },
    {
      question: "Puis-je lister mes expositions et ma presse ?",
      answer: "Oui, dans une section références.",
    },
    {
      question: "Quelle différence avec un PDF de dossier artistique ?",
      answer: "Le press kit se consulte bien sur mobile, se met à jour facilement et se partage en un lien.",
    },
    {
      question: "Combien coûte un press kit artiste ?",
      answer: pricingAnswer,
    },
  ],
};
