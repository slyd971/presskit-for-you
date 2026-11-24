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
  organisateur: [
    {
      id: "dossier-sponsoring",
      title: "Construire son dossier de sponsoring",
      intro: "Une marque qui soutient une soirée veut toucher un public. Ton dossier de sponsoring doit donc parler d'elle autant que de toi. Voici les éléments, dans l'ordre où une marque les cherche.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Ton événement en deux phrases", description: "le format, la ville, le rythme, l'ambiance. Si un ami ne comprend pas, une marque non plus." },
                { title: "Ton public", description: "âge, centres d'intérêt, d'où il vient, pourquoi il revient. Donne ce que tu sais, et dis comment tu le sais." },
                { title: "Tes preuves", description: "participants, éditions passées, abonnés, articles de presse. Indique une date à côté de chaque chiffre." },
                { title: "Tes images", description: "une vidéo courte et quelques photos où l'on voit la salle et le public." },
                { title: "Le projet à financer", description: "la prochaine édition, sa date, son lieu et ce que le partenaire rend possible." },
                { title: "Tes offres", description: "deux ou trois formats de partenariat, faciles à comparer." },
                { title: "Ton contact", description: "un nom, un e-mail, un numéro." },
              ],
            },
            { type: "text", text: "Le press kit de La MIF a une section pour chaque type de partenaire : sponsors et marques, lieux, organisateurs et collectifs. Chacun trouve sa place sans lire le reste." },
          ],
        },
        {
          title: "Dossier sponsor événement : PDF ou page en ligne ?",
          blocks: [
            { type: "text", text: "Un dossier sponsor d'événement part souvent en PDF, en pièce jointe. Il se transfère facilement, mais l'aftermovie reste dehors et les chiffres vieillissent. Une page en ligne montre la vidéo et se met à jour après chaque édition. Si une marque te demande un PDF, envoie-le avec le lien." },
          ],
        },
      ],
    },
    {
      id: "contreparties-sponsor",
      title: "Quelles contreparties proposer à un sponsor",
      intro: "Une contrepartie est ce que la marque reçoit en échange de son soutien. Choisis celles que tu peux vraiment tenir, puis détaille-les dans ton offre.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Visibilité avant l'événement", description: "logo sur l'affiche, la billetterie, les e-mails et les publications." },
                { title: "Visibilité pendant l'événement", description: "logo à l'entrée, sur les écrans, sur scène ou près du bar." },
                { title: "Contenus", description: "photos et vidéos où la marque apparaît, livrées après la soirée, avec le droit de les publier." },
                { title: "Activation sur place", description: "stand, photobooth, atelier, jeu ou distribution d'échantillons." },
                { title: "Invitations", description: "places, accès réservés, rencontre avec les artistes." },
                { title: "Parrainage", description: "une scène, un espace ou une édition qui porte le nom de la marque." },
                { title: "Dotation", description: "la marque offre des lots ou du matériel plutôt que de l'argent." },
              ],
            },
          ],
        },
        {
          title: "Présente tes formules sans te piéger",
          blocks: [
            { type: "text", text: "Deux ou trois formules suffisent. Pour chacune, écris ce qui est inclus, le nombre de publications et les dates. Laisse une place pour une demande particulière : une marque a souvent sa propre idée." },
            { type: "text", text: "Le montant peut rester dans l'échange, « sur demande ». Après la soirée, envoie un bilan : photos, chiffres réels, publications. Il te servira pour renouveler le partenariat, et pour convaincre le sponsor suivant." },
          ],
        },
      ],
    },
    {
      id: "presenter-a-un-lieu",
      title: "Présenter son événement à un lieu",
      intro: "Un lieu ne lit pas ton dossier comme un sponsor. Il veut savoir si sa salle sera remplie et si la soirée se passera bien. Mets en avant ces réponses :",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Le public", description: "combien de personnes, quel âge, quelles habitudes de sortie." },
                { title: "L'organisation", description: "qui gère la billetterie, la communication, l'accueil et la sécurité." },
                { title: "Les besoins", description: "son, lumière, horaires, scène, loges." },
                { title: "Les références", description: "les lieux qui t'ont déjà accueilli, et combien de fois." },
              ],
            },
            { type: "text", text: "Le press kit de La Bringue explique comment se passe une soirée classique : quand, comment, avec qui. Un établissement sait à quoi s'attendre avant d'appeler." },
          ],
        },
        {
          title: "Modèle de message à un lieu",
          blocks: [
            { type: "text", text: "Ce texte est un modèle : remplace les crochets par tes informations." },
            {
              type: "template",
              paragraphs: [
                "Bonjour [prénom],",
                "J'organise [nom de l'événement], une soirée [format] à [ville]. Je cherche un lieu pour [nombre] personnes, en [période].\nLe concept, les photos et nos éditions passées sont ici : [lien].",
                "Est-ce qu'on peut en parler cette semaine ?\n[nom et numéro]",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "premiere-edition",
      title: "Présenter une première édition",
      intro: "Sans édition passée, tu n'as pas encore de chiffres. Ne les invente pas : montre ton sérieux avec ce que tu as.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "L'équipe", description: "qui organise, et ce que chacun a déjà fait." },
                { title: "Le concept", description: "ce que le public ne trouve pas ailleurs dans ta ville." },
                { title: "La programmation", description: "artistes confirmés, ou en discussion si tu le précises." },
                { title: "Le lieu et la date", description: "confirmés, ou deux options." },
                { title: "Le public visé", description: "la communauté que tu touches déjà, sur les réseaux ou dans ton association." },
                { title: "Le plan de communication", description: "qui publie quoi, et quand." },
                { title: "L'affiche", description: "un visuel, même provisoire, aide à imaginer la soirée." },
              ],
            },
            { type: "text", text: "Pour un premier dossier de sponsoring de soirée, vise des partenaires proches : commerces du quartier, marques locales, médias de ta ville. Propose-leur un format simple, avec une seule contrepartie claire. Pendant la soirée, garde des photos, une vidéo et des retours du public. Ce sera la base de ton dossier pour la deuxième édition." },
          ],
        },
      ],
    },
  ],
  photographe: [
    {
      id: "press-kit-book-instagram",
      title: "Press kit, book ou Instagram : que regarde un client ?",
      intro: "Un client se pose trois questions : est-ce que j'aime ses images, est-ce qu'il a déjà fait ce dont j'ai besoin, combien ça coûte. Aucun support n'y répond de la même façon.",
      parts: [
        {
          title: "Instagram : pour se faire découvrir",
          blocks: [
            { type: "text", text: "Ton compte montre ton style et ton actualité. Mais les mariages, les portraits et les soirées s'y mélangent, et les anciens travaux disparaissent sous les nouveaux. Tes prestations et ta zone d'intervention n'y sont pas." },
          ],
        },
        {
          title: "Book photographe : pour juger tes images",
          blocks: [
            { type: "text", text: "Un book de photographe réunit ta meilleure sélection, en PDF, en tirage ou dans une galerie. Il convient à une agence ou à un directeur artistique qui sait déjà ce qu'il cherche. Un particulier ou un organisateur doit encore te demander tes formules et tes disponibilités." },
          ],
        },
        {
          title: "Press kit : pour décider de te contacter",
          blocks: [
            { type: "text", text: "Un press kit est un portfolio de photographe en ligne, avec le reste à côté : prestations, références, zone d'intervention, contact. Le client voit tes images, comprend ce que tu proposes et t'écrit depuis la même page. Le press kit de Lokko TV réunit bio, sélection vidéo, galerie photo, services et demande de booking." },
          ],
        },
      ],
      note: { title: "Notre conseil", text: "garde Instagram pour te faire découvrir, et un book si une agence te le demande. À un client, envoie ton press kit." },
    },
    {
      id: "choisir-images",
      title: "Choisir ses images selon le client",
      intro: "Montre ce que tu veux refaire. Dix photos du bon type valent mieux que cinquante photos variées.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Soirée ou événement", description: "ambiance, public, scène, détails, portraits. Un site de photographe événementiel doit prouver que tu travailles en basse lumière." },
                { title: "Mariage", description: "un reportage complet plutôt que les plus belles photos de dix mariages. Le couple veut voir une journée entière." },
                { title: "Entreprise", description: "portraits, équipes, conférences, lieux. Précise ton délai de livraison." },
                { title: "Marque ou artiste", description: "une série cohérente, avec le nom du projet et ton rôle." },
                { title: "Vidéaste", description: "un showreel court en haut de la page, puis deux ou trois films complets. Indique ce que tu as fait : tournage, montage, étalonnage." },
              ],
            },
            { type: "text", text: "Demande l'accord des personnes reconnaissables avant de publier leurs images, surtout pour un événement privé." },
          ],
        },
        {
          title: "Photographe et vidéaste à la fois ?",
          blocks: [
            { type: "text", text: "Sépare les deux dès le haut de la page. Un organisateur qui cherche un aftermovie ne doit pas traverser une galerie de portraits. Ajoute ensuite une formule photo et vidéo, si tu la proposes." },
          ],
        },
      ],
    },
    {
      id: "presentation-photographe",
      title: "Exemple de présentation courte de photographe",
      intro: "Une présentation dit ce que tu photographies, pour qui, où, et comment te joindre. Ces deux textes sont des modèles fictifs : garde l'ordre, remplace le reste.",
      parts: [
        {
          title: "Modèle photographe",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "[Nom], photographe événementiel à Nantes.\nJe couvre des soirées, des conférences et des lancements de marque.\nRéférences : [client], [lieu], [événement].\nPhotos livrées en [délai], retouchées et prêtes à publier.\nContact : [e-mail]",
              ],
            },
          ],
        },
        {
          title: "Modèle vidéaste",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "[Nom], vidéaste à Nantes.\nJe filme et je monte des aftermovies, des clips et des formats courts pour les réseaux.\nDerniers projets : [projet], [projet].\nDéplacements : [zone].\nContact : [e-mail]",
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
                { description: "Commence par ta spécialité et ta ville, pas par ta passion." },
                { description: "Cite trois références que le client peut reconnaître ou vérifier." },
                { description: "Reste sous six lignes : le client vient surtout voir tes images." },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "presenter-tarifs",
      title: "Comment présenter ses tarifs sans faire fuir",
      intro: "Sans aucun repère de prix, un client ne sait pas s'il peut t'écrire. Tu peux donner un ordre d'idée sans tout figer.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Un prix de départ", description: "« à partir de », pour chaque type de prestation. Il filtre les demandes hors budget." },
                { title: "Ce qui est inclus", description: "durée sur place, nombre de photos, retouches, délai, format de livraison." },
                { title: "Ce qui s'ajoute", description: "déplacement, heure supplémentaire, seconde caméra, livraison express." },
                { title: "Les droits d'utilisation", description: "usage privé, réseaux sociaux ou publicité. Une marque qui diffuse tes images en publicité n'achète pas la même chose qu'un particulier." },
                { title: "La réservation", description: "acompte, report, annulation, en une phrase chacun." },
              ],
            },
          ],
        },
        {
          title: "Limite-toi à trois formules",
          blocks: [
            { type: "text", text: "Présente peu de formules, avec un nom simple : demi-journée, journée, journée et vidéo. Place la plus demandée au milieu. Pour le reste, écris « sur devis » et dis ce dont tu as besoin pour répondre : date, lieu, durée, usage des images." },
            { type: "text", text: "Si tu ne veux afficher aucun prix, explique comment tu le calcules et sous combien de temps tu réponds. Le client sait alors à quoi s'attendre." },
          ],
        },
      ],
    },
  ],
  "make-up-artist": [
    {
      id: "portfolio-maquillage",
      title: "Préparer son portfolio maquillage",
      intro: "Ton portfolio de maquilleuse doit montrer ce que tu veux vendre demain. Si tu vises les mariages, les mariées passent avant les effets spéciaux. Voici comment trier.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Classe par prestation", description: "mariée, soirée, shooting, mode, effets spéciaux. Chaque cliente va droit à sa catégorie." },
                { title: "Varie les visages", description: "carnations, âges, types de peau, formes d'yeux. Une cliente cherche quelqu'un qui lui ressemble." },
                { title: "Soigne la lumière", description: "une photo nette près d'une fenêtre vaut mieux qu'une photo filtrée. Ne retouche pas la peau." },
                { title: "Montre de près et de loin", description: "un détail des yeux, un portrait, puis une photo en situation." },
                { title: "Ajoute une vidéo", description: "le maquillage y bouge et prend la lumière, sans filtre." },
                { title: "Crédite l'équipe", description: "photographe, modèle, coiffure, marque ou magazine." },
                { title: "Demande l'accord", description: "pour chaque visage reconnaissable, surtout en avant/après." },
              ],
            },
            { type: "text", text: "Le press kit d'Ishma classe ses photos par thème, dont le mariage, la soirée et la coiffure. Une autre section montre des avant/après." },
          ],
        },
        {
          title: "Book maquilleuse professionnelle : mode, clip et tournage",
          blocks: [
            { type: "text", text: "Une production ou un magazine regarde autre chose qu'une mariée. Dans un book de maquilleuse professionnelle, présente des séries complètes : trois à cinq images d'un même projet. Indique ton rôle, l'équipe et le média. Ajoute tes tournages, avec le titre du clip ou du film et ton poste : cheffe maquilleuse, assistante, effets spéciaux." },
          ],
        },
      ],
    },
    {
      id: "future-mariee",
      title: "Ce qu'une future mariée veut savoir avant de réserver",
      intro: "Une future mariée compare plusieurs maquilleuses. Si ta page répond à ses questions avant le premier message, tu lui fais gagner du temps. Mets-y ces réponses :",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Ta disponibilité", description: "jusqu'à quand réserver, et comment vérifier une date." },
                { title: "L'essai", description: "s'il est compris, où il se passe, combien de temps il dure." },
                { title: "Le jour J", description: "ton heure d'arrivée, la durée par personne, le nombre de personnes que tu peux maquiller." },
                { title: "Le déplacement", description: "tes villes, ton rayon, tes frais." },
                { title: "Les invitées", description: "mère, témoins, demoiselles d'honneur, et le prix par personne." },
                { title: "Les produits", description: "les marques que tu utilises, et ce que tu fais en cas d'allergie." },
                { title: "La tenue", description: "comment tu prépares la peau, et si tu prévois des retouches." },
                { title: "La réservation", description: "acompte, report et annulation, en une phrase chacun." },
              ],
            },
            { type: "text", text: "Affiche au moins un prix de départ. Pour une maquilleuse mariée, il évite les demandes trop loin de ses prix." },
          ],
        },
        {
          title: "Modèle de réponse à une future mariée",
          blocks: [
            { type: "text", text: "Ce texte est un modèle : remplace les crochets par tes informations." },
            {
              type: "template",
              paragraphs: [
                "Bonjour [prénom], et félicitations.",
                "Je suis disponible le [date] à [ville]. Mes formules mariée et mes photos sont ici : [lien].\nIl me faut l'heure de la cérémonie, le lieu des préparatifs et le nombre de personnes à maquiller.",
                "On peut fixer un essai dès que tu as choisi ta formule.\n[nom et numéro]",
              ],
            },
          ],
        },
        {
          title: "Les questions à poser avant l'essai",
          blocks: [
            { type: "text", text: "Demande une photo de la robe, une photo d'elle au naturel, ses allergies et deux ou trois images d'inspiration. L'essai sert alors à régler les détails. Ishma, par exemple, envoie un questionnaire avant l'essai." },
          ],
        },
      ],
    },
    {
      id: "presentation-maquilleuse",
      title: "Exemple de présentation courte de maquilleuse",
      intro: "Une présentation dit ce que tu fais, pour qui et où. Ces deux textes sont des modèles fictifs : garde l'ordre, remplace le reste.",
      parts: [
        {
          title: "Modèle maquilleuse mariée",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "[Nom], maquilleuse professionnelle à Lille.\nJe maquille des mariées et leurs invitées, avec un essai avant le jour J.\nMon style : [trois mots, par exemple teint léger, regard travaillé, tenue longue].\nDéplacements : [zone].\nRéservation : [lien ou numéro]",
              ],
            },
          ],
        },
        {
          title: "Modèle mode et tournage",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "[Nom], make-up artist mode et image à Lille.\nJe travaille sur des shootings, des clips et des défilés, en beauté et en effets spéciaux.\nDerniers projets : [projet, rôle], [projet, rôle].\nContact : [e-mail]",
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
                { description: "Dis ta spécialité dès la première ligne : une mariée et une production ne cherchent pas la même personne." },
                { description: "Cite tes formations et tes années de pratique, sans arrondir." },
                { description: "Décris ton style avec des mots que tes clientes utilisent." },
              ],
            },
          ],
        },
      ],
    },
  ],
  "coach-sportif": [
    {
      id: "site-ou-press-kit",
      title: "Site vitrine ou press kit : que choisir quand on est coach ?",
      intro: "Les deux te présentent en ligne. La différence tient au nombre de pages, au temps que tu veux y passer et à la façon dont tes clients te trouvent.",
      parts: [
        {
          title: "Le site vitrine : plusieurs pages à faire vivre",
          blocks: [
            { type: "text", text: "Un site de coach sportif en plusieurs pages convient si tu publies des articles ou si tu gères une salle. Il demande plus de textes, plus de photos et un suivi régulier." },
          ],
        },
        {
          title: "Le press kit : une page qui répond à l'essentiel",
          blocks: [
            { type: "text", text: "Un press kit est une page de coach sportif complète : présentation, formules, preuves, contact. Tu l'envoies à une personne qui te découvre sur Instagram, à une salle ou à une entreprise. Elle lit tout au même endroit, sur son téléphone." },
          ],
        },
        {
          title: "Le profil Instagram : utile, mais pas pour réserver",
          blocks: [
            { type: "text", text: "Tes vidéos montrent ta façon de coacher. Mais tes tarifs, ta zone et tes créneaux se perdent dans les stories et les messages. Garde Instagram pour te faire découvrir, et mets le lien de ta page dans ta bio." },
          ],
        },
      ],
      note: { title: "Notre conseil", text: "commence par une page si tu travailles en indépendant. Passe à plusieurs pages quand ton activité le demande." },
    },
    {
      id: "presenter-formules",
      title: "Présenter ses formules clairement",
      intro: "Un futur client compare des séances, des durées et des prix. Si tes formules se ressemblent, il repousse sa décision. Pour chacune, réponds aux mêmes questions :",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Pour qui", description: "débutant, reprise après une pause, objectif précis, petit groupe." },
                { title: "Le contenu", description: "bilan, séance, programme, suivi entre les séances." },
                { title: "Le format", description: "à domicile, en salle, en extérieur ou en visio." },
                { title: "La durée et la fréquence", description: "temps d'une séance, nombre par semaine ou par mois." },
                { title: "Le prix", description: "à la séance, au carnet ou au mois, avec ce qui est inclus." },
                { title: "La première étape", description: "séance d'essai, appel ou bilan, et comment réserver." },
              ],
            },
            { type: "text", text: "Trois formules suffisent dans la plupart des cas : une pour essayer, une régulière, une plus complète. Le press kit de Coach Momar suit cet ordre : séance découverte, coaching à domicile, pack sur devis." },
          ],
        },
        {
          title: "Donne un nom que le client comprend",
          blocks: [
            { type: "text", text: "« Reprise en douceur » ou « Deux séances par semaine » parle mieux que « Pack Gold ». Écris le nom, une phrase, puis trois ou quatre points inclus. Le reste se discute pendant la première séance." },
          ],
        },
        {
          title: "Annonce tes conditions avant la première séance",
          blocks: [
            { type: "text", text: "Durée de validité d'un carnet, délai pour annuler, déplacement au-delà de ta zone : une ligne pour chaque point évite les malentendus." },
          ],
        },
      ],
    },
    {
      id: "rassurer",
      title: "Rassurer sans promettre de résultats",
      intro: "Tu ne peux pas garantir un résultat : il dépend aussi de la personne, de son rythme et de sa santé. Tu peux montrer pourquoi on peut te faire confiance.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Tes diplômes", description: "nom exact, année et carte professionnelle d'éducateur sportif." },
                { title: "Ton expérience", description: "années de pratique, publics accompagnés, compétition si tu en as fait." },
                { title: "Tes avis", description: "un prénom, un objectif, une phrase. Publie-les avec l'accord de la personne, sans les réécrire." },
                { title: "Ta façon de travailler", description: "une vidéo courte d'une vraie séance, avec le son de tes consignes." },
                { title: "Tes limites", description: "ce que tu ne fais pas, et quand tu renvoies vers un médecin ou un kiné." },
              ],
            },
          ],
        },
        {
          title: "Photos avant/après : avec prudence",
          blocks: [
            { type: "text", text: "Demande un accord écrit, garde la même lumière et la même pose, et indique la durée du suivi. Si tu n'en as pas, une vidéo de progression technique fonctionne aussi." },
          ],
        },
      ],
    },
    {
      id: "presentation-coach",
      title: "Exemple de présentation courte de coach sportif",
      intro: "Une présentation de coach sportif tient en quelques lignes. Ces deux textes sont des modèles fictifs : garde l'ordre, remplace le reste.",
      parts: [
        {
          title: "Modèle coach à domicile",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "[Nom], coach sportif à domicile à Toulouse.\nJ'accompagne des adultes qui reprennent le sport, une à trois fois par semaine.\nDiplôme : [diplôme, année].\nPremière séance : [bilan ou essai].\nRéservation : [lien ou numéro]",
              ],
            },
          ],
        },
        {
          title: "Modèle coach spécialisé",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "[Nom], préparation physique pour [sport ou public] à Toulouse.\nJe travaille en salle et en extérieur, en individuel ou en petit groupe.\nParcours : [diplôme], [club ou structure], [compétition].\nCréneaux : [jours et horaires].\nContact : [e-mail ou numéro]",
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
                { description: "Commence par la personne que tu aides, puis par ta méthode." },
                { description: "Remplace « coach passionné et motivé » par un diplôme, un public ou une spécialité." },
                { description: "Termine par une seule action : réserver, appeler ou écrire." },
              ],
            },
          ],
        },
      ],
    },
  ],
  danseur: [
    {
      id: "book-danseur",
      title: "Book danseur : ce qu'un directeur de casting regarde",
      intro: "Un directeur de casting trie vite, souvent sur son téléphone. Il cherche un profil précis pour un projet précis. Ton book de danseur doit lui permettre de dire oui ou non sans t'écrire.",
      parts: [
        {
          blocks: [
            {
              type: "list",
              items: [
                { title: "Ta danse", description: "un showreel qui se lance tout de suite, avec ton style principal dès le début." },
                { title: "Ta silhouette", description: "une photo en pied et un portrait, récents, sans filtre." },
                { title: "Tes informations", description: "ville, taille, styles, langues, mobilité, permis si le projet le demande." },
                { title: "Tes références", description: "clips, scènes, compagnies, marques, avec l'année et ton rôle." },
                { title: "Tes autres compétences", description: "acrobatie, chant, comédie, chorégraphie, animation." },
                { title: "Ta disponibilité", description: "tes périodes libres, et ton statut si on te le demande." },
                { title: "Ton contact", description: "un numéro, un e-mail, et ton agent si tu en as un." },
              ],
            },
            { type: "text", text: "Garde ton adresse et ta date de naissance pour le dossier demandé par la production. Elles n'ont pas leur place sur une page publique." },
          ],
        },
        {
          title: "CV danseur : une page, toujours à jour",
          blocks: [
            { type: "text", text: "Un CV de danseur se lit en une minute. Classe tes expériences par type : scène, clip, publicité, événement, enseignement. Pour chacune, écris le projet, l'année, le chorégraphe et ton rôle. Termine par tes formations et tes stages. Dans ton press kit, le CV devient une section, et tes vidéos en sont la preuve." },
          ],
        },
        {
          title: "Modèle de message pour un casting",
          blocks: [
            { type: "text", text: "Ce texte est un modèle : remplace les crochets par tes informations." },
            {
              type: "template",
              paragraphs: [
                "Bonjour [prénom],",
                "Je suis [nom], [style] à [ville]. Je réponds à l'annonce [nom du projet] pour le profil [profil].\nMon showreel, mes photos et mon parcours sont ici : [lien].",
                "Je suis disponible du [date] au [date].\n[nom et numéro]",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "showreel",
      title: "Faire un bon showreel",
      intro: "Un showreel de danseur montre ce que tu sais faire aujourd'hui. Une bonne vidéo récente vaut mieux que cinq anciennes.",
      parts: [
        {
          title: "La durée",
          blocks: [
            { type: "text", text: "Vise une à deux minutes. Si tu hésites à garder un passage, enlève-le. Tes vidéos complètes restent plus bas dans la page, pour qui veut en voir plus." },
          ],
        },
        {
          title: "Les premières secondes",
          blocks: [
            { type: "text", text: "Place ton meilleur passage en ouverture, sans long titre ni logo. On doit te reconnaître tout de suite, surtout si tu danses en groupe. Ajoute une flèche ou un texte court pour indiquer où tu es." },
          ],
        },
        {
          title: "L'ordre",
          blocks: [
            {
              type: "list",
              items: [
                { title: "D'abord", description: "ton style principal, en pied, sans coupe rapide." },
                { title: "Ensuite", description: "un deuxième style ou un autre contexte, comme la scène, le clip ou le battle." },
                { title: "Puis", description: "un moment qui montre ta présence : regard, interaction avec le public, improvisation." },
                { title: "À la fin", description: "ton nom, ta ville et ton contact." },
              ],
            },
          ],
        },
        {
          title: "L'image et le son",
          blocks: [
            { type: "text", text: "Garde des plans larges : on doit voir les pieds. Évite les effets et les ralentis qui cachent la danse. Une vidéo bien éclairée au téléphone suffit. Si tu publies ta vidéo en ligne, vérifie les droits de la musique : elle peut être coupée ou bloquée." },
          ],
        },
      ],
    },
    {
      id: "bio-danseur",
      title: "Exemple de bio de danseur",
      intro: "Une bio dit ce que tu danses, avec qui et pour quoi on peut te contacter. Ces deux textes sont des modèles fictifs : remplace chaque information par la tienne.",
      parts: [
        {
          title: "Modèle de bio courte (trois lignes)",
          blocks: [
            {
              type: "template",
              paragraphs: [
                "Danseur Exemple mêle hip-hop et afro, en solo ou en collectif.\nBasé à Bordeaux, il a dansé pour [artiste], [compagnie] et [marque].\nCastings et collaborations : [e-mail]",
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
                "Danseur Exemple découvre le hip-hop à douze ans, dans une association de son quartier. Il se forme ensuite à [école ou stage], auprès de [chorégraphe].",
                "En [année], il rejoint [collectif], avec qui il participe à [battle] et à [spectacle]. Il danse aussi dans le clip [titre] de [artiste], chorégraphié par [nom].",
                "Son travail passe par l'improvisation et le rapport au public. Il donne des ateliers à [structure], pour les enfants et les adultes débutants.",
                "Basé à Bordeaux, il se déplace en France et à l'étranger. Il prépare [projet], prévu en [période].",
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
                { description: "Écris à la troisième personne : un festival pourra la copier telle quelle." },
                { description: "Cite des projets vérifiables, avec l'année et ton rôle." },
                { description: "Sépare l'artiste, le collectif et les ateliers si tu fais les trois." },
              ],
            },
            { type: "text", text: "Le press kit de KRIMO présente ainsi séparément l'artiste, le collectif La Tempête et l'association La Danse ou Rien." },
          ],
        },
      ],
    },
  ],
};
