import { LEGAL } from "@/lib/legal";

export type FaqEntry = { question: string; answer: string };

const pricingAnswer = `À partir de 300 €, livré en ${LEGAL.deliveryDays} jours ouvrés maximum, ${LEGAL.revisionRounds} allers-retours inclus.`;

export const categoryFaqs: Record<string, FaqEntry[]> = {
  dj: [
    {
      question: "Press kit DJ, EPK ou dossier de presse : c'est pareil ?",
      answer:
        "Oui. EPK (electronic press kit) est le terme anglais, dossier de presse le terme français. Ici, c'est une page web à jour plutôt qu'un PDF à renvoyer à chaque nouvelle date.",
    },
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
      question: "Press kit ou book photographe : quelle différence ?",
      answer:
        "Le book montre tes images. Le press kit y ajoute tes prestations, tes références et la demande de devis, sur une seule page.",
    },
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
      question: "Je suis maquilleuse professionnelle, c'est fait pour moi ?",
      answer:
        "Oui : maquillage beauté, mariée, mode ou effets spéciaux, la page s'adapte à ta spécialité.",
    },
    {
      question: "Quelles photos choisir pour mon portfolio ?",
      answer:
        "Tes meilleurs maquillages par spécialité : mariée, shooting, mode ou effets spéciaux. Mieux vaut quinze photos nettes et variées que cinquante images proches. Les avant/après rassurent les futures mariées, toujours publiés avec l'accord de tes clientes.",
    },
    {
      question: "Puis-je ajouter de nouvelles réalisations après la livraison ?",
      answer:
        "Oui, avec l'option « Mise à jour de contenu » : tu nous envoies tes nouvelles photos et on les ajoute à ta galerie. Pratique après une saison de mariages ou un nouveau shooting.",
    },
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
      question: "Un press kit peut-il remplacer mon book de danseur ?",
      answer:
        "Oui : book photo, showreel et parcours sont réunis sur une seule page, plus simple à envoyer pour un casting qu'un PDF ou une liste de liens.",
    },
    {
      question: "Quels contenus préparer avant de commencer ?",
      answer:
        "Ton showreel ou deux à trois vidéos, une dizaine de photos en haute définition, ta bio et la liste de tes collaborations. S'il manque un élément, on construit la page avec ce que tu as, et on l'ajoute plus tard avec l'option de mise à jour.",
    },
    {
      question: "Comment envoyer mon press kit à un directeur de casting ?",
      answer:
        "Tu colles le lien dans un e-mail, un message privé ou un formulaire de candidature. La page s'ouvre sur mobile comme sur ordinateur, sans application ni téléchargement, et ton showreel se lance tout de suite.",
    },
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
      question: "Je suis coach à domicile, c'est adapté ?",
      answer:
        "Oui : ta zone d'intervention, tes créneaux et la prise de rendez-vous apparaissent dès le haut de la page.",
    },
    {
      question: "Quels contenus préparer avant de commencer ?",
      answer:
        "Ta bio, tes diplômes, tes formules et tes tarifs, quelques photos de séances et, si tes clients sont d'accord, leurs avis ou leurs transformations. On t'aide à trier et à formuler le reste pendant le brief.",
    },
    {
      question: "Je coache en salle et en visio, je peux présenter les deux ?",
      answer:
        "Oui. Chaque format a sa place : séance en salle, à domicile ou en visio, en individuel ou en petit groupe. Le client voit tout de suite ce qui lui correspond et comment réserver.",
    },
    {
      question: "Puis-je afficher mes diplômes et certifications ?",
      answer:
        "Oui. Tes diplômes (BPJEPS, licence STAPS, certifications spécialisées) apparaissent dans une section dédiée. Ils rassurent un client qui hésite entre plusieurs coachs et justifient tes tarifs.",
    },
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
      question: "Quelle différence avec un dossier de sponsoring PDF ?",
      answer:
        "Le contenu est le même, mais la page se met à jour après chaque édition, se lit sur mobile et se partage en un lien.",
    },
    {
      question: "Quels chiffres montrer à un sponsor ?",
      answer:
        "Le nombre de participants par édition, le taux de remplissage, les billets vendus, ton audience sur les réseaux et le profil de ton public. Un sponsor veut savoir qui il va toucher : quelques chiffres clairs suffisent.",
    },
    {
      question: "Mon événement n'a eu qu'une édition, ça vaut le coup ?",
      answer:
        "Oui. Une première édition bien présentée, avec photos, aftermovie et retours du public, suffit pour convaincre un lieu ou une marque. Tu ajoutes les chiffres des éditions suivantes au fil du temps.",
    },
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
