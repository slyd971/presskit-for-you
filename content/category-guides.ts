// Sections longues des pages métiers (comparatifs, modèles, listes), affichées par CategoryGuides.

export type GuideBlock =
  | { type: "text"; text: string }
  | { type: "list"; items: { title?: string; description: string }[] }
  // Modèle à copier : un élément par paragraphe, « \n » pour un retour à la ligne.
  | { type: "template"; paragraphs: string[] };

export type GuideSection = {
  id: string;
  title: string;
  intro: string;
  parts: { title?: string; blocks: GuideBlock[] }[];
  note?: { title?: string; text: string };
};

export const categoryGuides: Record<string, GuideSection[]> = {
  dj: [
    {
      id: "press-kit-linktree-pdf",
      title: "Press kit, Linktree ou PDF : lequel envoyer à un booker ?",
      intro: "Un booker ouvre souvent ton lien sur son téléphone. Il veut t'écouter, voir où tu as joué et savoir comment te réserver. Les trois formats n'y répondent pas de la même façon.",
      parts: [
        {
          title: "Linktree : pratique pour ton public",
          blocks: [
            { type: "text", text: "Un Linktree aligne tes liens : SoundCloud, Instagram, billetterie. Il se crée vite et va bien dans une bio Instagram. Mais le booker doit ouvrir chaque lien pour te situer. Ta bio, tes références et ton rider restent à chercher ailleurs." },
          ],
        },
        {
          title: "PDF : utile en pièce jointe, vite dépassé",
          blocks: [
            { type: "text", text: "Un dossier de presse DJ en PDF se joint à un e-mail et se lit hors connexion. Mais chaque nouvelle date demande un nouveau fichier. Les versions déjà envoyées ne changent plus, et tes sets s'ouvrent dans une autre application." },
          ],
        },
        {
          title: "Press kit en ligne : tout sur une page",
          blocks: [
            { type: "text", text: "Un EPK DJ en ligne réunit ta bio, tes mixes, tes vidéos, tes références, ton rider et ton contact. Le booker écoute sans quitter la page. Quand une date change, la page est mise à jour et le lien reste le même. C'est aussi un site booking DJ : une adresse à mettre dans ta bio, tes e-mails et tes messages." },
          ],
        },
      ],
      note: { title: "Notre conseil", text: "garde ton Linktree pour ton public, et un PDF si un lieu te le demande. Au booker, envoie le lien de ton press kit." },
    },
    {
      id: "bio-dj",
      title: "Exemple de bio DJ : version courte et version longue",
      intro: "Une bio DJ dit qui tu es, ce que tu joues et où tu as joué. Ces deux textes sont des modèles fictifs : remplace chaque information par la tienne.",
      parts: [
        {
          title: "Modèle de bio courte (trois lignes)",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "DJ Exemple joue house, afro house et disco, du warm-up au closing.\nBasé à Lyon, résident au [nom du club] depuis [année].\nBooking : [ton e-mail]",
              ],
            },
            { type: "text", text: "À utiliser pour un flyer, une programmation ou une bio Instagram." },
          ],
        },
        {
          title: "Modèle de bio longue",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "DJ Exemple commence à mixer à 16 ans, sur les platines de son grand frère. Il joue d'abord dans les soirées étudiantes de Lyon, puis devient résident au [nom du club] en [année].",
                "Ses sets vont de la house à l'afro house, avec des classiques disco en fin de nuit. En warm-up, il laisse la salle se remplir. En peak time, il accélère. En closing, il ressort les morceaux que tout le monde connaît.",
                "Il a joué au [nom du festival], au [nom du club] et en première partie de [nom de l'artiste]. Il mixe aussi pour des marques et des mariages, avec une sélection adaptée à chaque date.",
                "Son dernier mix, [titre], s'écoute sur SoundCloud. Basé à Lyon, il se déplace dans toute la France.",
              ],
            },
          ],
        },
        {
          title: "Trois règles pour écrire la tienne",
          blocks: [
            {
              type: "list",
              items: [
                { description: "Écris à la troisième personne : un organisateur pourra la copier telle quelle." },
                { description: "Cite des lieux et des dates vérifiables, plutôt que « DJ incontournable »." },
                { description: "Relis-la à chaque nouvelle résidence ou date importante." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "rider-dj",
      title: "Ce qu'un rider DJ doit contenir",
      intro: "Le rider DJ liste ce dont tu as besoin pour jouer. Le lieu prépare la soirée, et tu évites les surprises en arrivant. Reste réaliste : une petite salle n'a pas le matériel d'un festival.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Platines", description: "nombre, modèle souhaité et modèle accepté en remplacement." },
                { title: "Table de mixage", description: "modèle et nombre de voies." },
                { title: "Branchements", description: "USB, ordinateur, vinyles, câbles à fournir, prises électriques." },
                { title: "Retours de scène", description: "un ou deux, réglables depuis la cabine." },
                { title: "Micro", description: "si tu animes ou si un MC t'accompagne." },
                { title: "Cabine", description: "taille de la table, hauteur, éclairage, protection en extérieur." },
                { title: "Horaires", description: "arrivée, installation, balances, début et fin du set." },
                { title: "Accueil", description: "transport, hôtel, repas, boissons, nombre d'invités." },
                { title: "Contact sur place", description: "un nom et un numéro, côté lieu et côté artiste." },
              ],
            },
          ],
        },
      ],
      note: { text: "Le cachet et les conditions de paiement vont dans le devis ou le contrat, pas dans le rider. Sur ton press kit, place le rider près de ton contact booking." },
    },
  ],
  artiste: [
    {
      id: "chanteur-rappeur-musicien",
      title: "Chanteur, rappeur, musicien : ce que ton press kit met en avant",
      intro: "La base est la même pour tous : bio, écoute, vidéos, dates, contact. L'ordre change selon ton projet et la personne qui reçoit le lien.",
      parts: [
        {
          title: "Dossier de presse chanteur ou chanteuse",
          blocks: [
            { type: "text", text: "Place ta voix tout en haut : ton titre le plus récent, puis une vidéo live sans montage. Un dossier de presse de chanteur annonce aussi la prochaine sortie, avec sa date et sa pochette. Le press kit de Sherin présente une sortie, ses médias, ses chiffres et son booking sur une seule page." },
          ],
        },
        {
          title: "Press kit rappeur",
          blocks: [
            { type: "text", text: "Commence par le clip ou le freestyle que tu veux montrer. Ajoute tes collaborations, tes passages radio et tes chiffres d'écoute à jour. Précise qui t'accompagne sur scène : DJ, backeur ou musiciens. Le press kit de Black Moz, entre rap et slam, réunit bio, écoute, médias et booking." },
          ],
        },
        {
          title: "EPK musicien ou groupe",
          blocks: [
            { type: "text", text: "Présente chaque membre avec son instrument. Montre une captation de concert où l'on entend tout le groupe. Dans un EPK de musicien, indique tes formats : solo, duo, formation complète. Une salle sait ainsi ce qu'elle peut accueillir." },
          ],
        },
      ],
    },
    {
      id: "envoyer-ton-epk",
      title: "Quand envoyer ton EPK, et à qui",
      intro: "Le lien est le même, mais ton message change. Dis en deux phrases pourquoi tu écris, puis indique la section à regarder.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "À un programmateur", description: "ta ville, tes formats, ta durée de concert et une vidéo live. Envoie-le bien avant la saison ou le festival visé." },
                { title: "À un média", description: "ta sortie, sa date, tes photos presse créditées et ta bio longue. Donne un contact disponible pour une interview." },
                { title: "À un label", description: "deux titres, tes chiffres et tes prochaines dates. Dis ce que tu cherches : distribution, édition ou accompagnement." },
                { title: "À une marque ou un lieu privé", description: "tes formats, tes références et ta zone de déplacement." },
              ],
            },
          ],
        },
        {
          title: "Modèle de message à un programmateur",
          blocks: [
            { type: "text", text: "Ce texte est un modèle : remplace les crochets par tes informations." },
            {
              type: "template",
              paragraphs: [
                "Bonjour [prénom],",
                "Je suis [nom], [style] à [ville]. J'aimerais jouer au [lieu ou festival] en [période].\nMon press kit, avec une vidéo live et ma fiche technique : [lien].",
                "Bonne journée,\n[nom et numéro]",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "bio-artiste",
      title: "Exemple de bio artiste : courte et longue",
      intro: "Ces deux bios sont fictives. Elles montrent la structure : garde l'ordre, change tout le reste.",
      parts: [
        {
          title: "Modèle de bio courte (trois lignes)",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "Artiste Exemple chante une pop en français, entre piano et machines.\nPremier EP, [titre], sorti en [mois et année].\nEn concert à [ville] le [date].",
              ],
            },
          ],
        },
        {
          title: "Modèle de bio longue",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "Artiste Exemple grandit à Nantes et apprend le piano à huit ans. Les premières chansons s'écrivent dans une chambre, avec un clavier et un téléphone pour enregistrer.",
                "En [année], Artiste Exemple publie [titre], un premier single écrit et produit à la maison. Un EP de cinq titres suit en [année], enregistré avec [nom du producteur ou de la productrice].",
                "Sur scène, le projet se joue en duo : voix et piano d'un côté, batterie de l'autre. Le duo a joué au [nom de la salle], au [nom du festival] et en première partie de [nom de l'artiste].",
                "Le prochain titre, [titre], sort le [date]. Une tournée est prévue en [période].",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fiche-technique",
      title: "Fiche technique : ce qu'une salle te demandera",
      intro: "Une salle prépare ton concert à partir de ta fiche technique. Elle tient en général sur une ou deux pages.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Formation", description: "qui est sur scène, à quel instrument." },
                { title: "Plan de scène", description: "la place de chacun, des retours et des prises électriques." },
                { title: "Patch", description: "la liste des entrées, micros et boîtiers de direct." },
                { title: "Backline", description: "ce que tu apportes, et ce que la salle doit fournir." },
                { title: "Son", description: "retours par musicien, système intra-auriculaire, bandes lancées depuis un ordinateur." },
                { title: "Lumière", description: "ambiance souhaitée, vidéo éventuelle." },
                { title: "Timing", description: "installation, balances, durée du concert, changement de plateau." },
                { title: "Accueil", description: "nombre de personnes, repas, loge, hébergement." },
              ],
            },
          ],
        },
      ],
      note: { text: "Ajoute la date de la version en haut du document. Dans ton press kit, propose-la en téléchargement, à côté du contact booking." },
    },
  ],
  "createur-de-contenu": [
    {
      id: "createur-ou-ugc",
      title: "Créateur de contenu ou créateur UGC : deux media kits différents",
      intro: "Les deux travaillent avec des marques, mais elles n'achètent pas la même chose. Ton media kit doit le montrer dès le haut de la page.",
      parts: [
        {
          title: "Media kit créateur de contenu : ton audience compte",
          blocks: [
            { type: "text", text: "La marque paie pour apparaître sur ton compte. Elle regarde tes abonnés, ton engagement et le profil de ton audience. Place tes chiffres en haut, puis tes collaborations les plus proches de son secteur." },
          ],
        },
        {
          title: "Media kit UGC : tes vidéos comptent",
          blocks: [
            { type: "text", text: "La marque diffuse tes vidéos sur ses propres comptes ou dans ses publicités. Ton nombre d'abonnés passe après la qualité de tes contenus. Place ton portfolio en haut, classé par secteur ou par format : démonstration, témoignage, déballage." },
          ],
        },
        {
          title: "Tu fais les deux ?",
          blocks: [
            { type: "text", text: "Sépare les deux offres sur la page, avec des exemples pour chacune. Le press kit de Julia, créatrice de contenu et UGC, réunit parcours, thèmes, chiffres clés, références, portfolio vidéo et contact." },
          ],
        },
      ],
    },
    {
      id: "media-kit-profil-pdf",
      title: "Media kit, profil Instagram ou PDF : que regarde une marque ?",
      intro: "Une marque compare plusieurs créateurs avant de choisir. Elle veut les mêmes informations pour chacun, vite.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Profil Instagram ou TikTok", description: "il montre ton style au quotidien. Mais tes formats, ton audience et tes conditions n'y sont pas." },
                { title: "PDF", description: "il se joint à un e-mail. Mais tes vidéos ne s'y lancent pas toujours, et tes chiffres datent du jour de l'export." },
                { title: "Media kit en ligne", description: "tes vidéos, tes chiffres et ton contact sont sur une page. Tes chiffres changent, le lien reste le même." },
              ],
            },
          ],
        },
      ],
      note: { text: "Indique toujours le mois de tes statistiques : une marque veut savoir de quand elles datent." },
    },
    {
      id: "message-marque",
      title: "Modèle de message à une marque",
      intro: "Ce texte est un modèle. Garde-le court et remplace les crochets.",
      parts: [
        {
          blocks: [
            {
              type: "template",
              paragraphs: [
                "Bonjour [prénom],",
                "Je suis [nom], je crée des vidéos [thème] à [ville]. J'ai une idée pour [produit] : [une phrase].\nMon media kit, avec mes vidéos et mes formats : [lien].",
                "Est-ce que le sujet vous intéresse ce mois-ci ?\n[nom et e-mail]",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "droits-utilisation",
      title: "Droits d'utilisation : ce que ton media kit doit préciser",
      intro: "Une vidéo livrée à une marque peut servir longtemps. Annonce tes règles avant le devis.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Supports", description: "comptes de la marque, site, publicités en ligne, affichage." },
                { title: "Durée", description: "nombre de mois ou d'années d'utilisation." },
                { title: "Zone", description: "France, Europe ou monde." },
                { title: "Publicité", description: "si la marque peut sponsoriser la vidéo, et à quel prix." },
                { title: "Retouches", description: "nombre de modifications comprises." },
                { title: "Exclusivité", description: "si tu t'engages à ne pas travailler avec un concurrent, et combien de temps." },
              ],
            },
          ],
        },
      ],
      note: { text: "Les conditions exactes vont dans le contrat. Le media kit donne le cadre." },
    },
  ],
};
