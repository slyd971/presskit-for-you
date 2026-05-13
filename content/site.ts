export type Category = {
  slug: string;
  name: string;
  shortName: string;
  eyebrow: string;
  description: string;
  audience: string;
  tone: string;
  accent: string;
  accentSoft: string;
  gradient: string;
  heroTitle: string;
  heroDescription: string;
  valueProps: string[];
  benefits: { title: string; description: string }[];
  includes: string[];
  modules: string[];
  sampleHighlights: string[];
  stats: { label: string; value: string }[];
  heroImage?: string;
  heroImageAlt?: string;
  heroImagePosition?: string;
  previewImage?: string;
  previewImagePosition?: string;
  previewImageOffsetY?: string;
  heroKicker?: string;
  heroOverlayTitle?: string;
  externalDemoUrl?: string;
};

export type Example = {
  slug: string;
  category: string;
  title: string;
  description: string;
  href: string;
  accent: string;
  image?: string;
  imagePosition?: string;
  externalDemoUrl?: string;
};

export const siteConfig = {
  name: "PressKit For You",
  description:
    "Press kits digitaux premium pour artistes, talents et indépendants qui veulent une présentation claire, crédible et pensée pour convertir.",
  url: "https://www.presskit.fr",
  email: "hello@presskitstudio.fr",
  phone: "+33 6 12 45 88 10",
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/comment-ca-marche", label: "Comment ça marche" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/galerie", label: "Exemples" },
    { href: "/contact", label: "Contact" },
  ],
  ctas: {
    primary: "Créer mon press kit",
    secondary: "Voir les tarifs",
    call: "Créer mon presskit",
    launch: "Lancer mon projet",
  },
};

export const heroStats = [
  { value: "48h", label: "pour cadrer le brief et la direction" },
  { value: "1 lien", label: "pour centraliser médias, infos et contact" },
  { value: "Sur mesure", label: "pour coller à ton univers et à ta cible" },
];

export const benefits = [
  {
    title: "Une image plus forte",
    description:
      "Un univers visuel cohérent qui crédibilise dès le premier clic.",
  },
  {
    title: "Un lien unique à envoyer",
    description:
      "Bio, médias, chiffres, prestations et contact regroupés au même endroit.",
  },
  {
    title: "Plus simple à partager",
    description:
      "Pour les bookings, partenariats, collabs, la presse et les prises de contact rapides.",
  },
  {
    title: "Pensé pour convertir",
    description:
      "Le design ne sert pas seulement à faire beau, il guide vers l’action.",
  },
  {
    title: "Modulable selon le métier",
    description:
      "Chaque press kit s’adapte aux codes d’un DJ, d’un artiste, d’un photographe ou d’un créatif.",
  },
  {
    title: "Base scalable",
    description:
      "Une structure claire pour faire évoluer le site, le contenu et les démos dans le temps.",
  },
];

export const heroProofs = [
  "Brief cadré rapidement",
  "Design premium adapté à ton métier",
  "Lien prêt à partager pour booking, presse et prospects",
];

export const testimonials = [
  {
    name: "Ishma N.",
    role: "Make-up artist",
    quote:
      "Une expérience incroyable ! En tant que make-up artist, j’ai senti que l’équipe avait tout de suite saisi ma signature. Le résultat me ressemble totalement et reflète parfaitement ma façon de travailler. La page est intuitive, très professionnelle et va bien au-delà de mes attentes. Un immense merci.",
  },
  {
    name: "Yed D.",
    role: "DJ",
    quote:
      "Merci SlyD pour ton sérieux et ta réactivité sur la création de mon site DJ. Franchement, le résultat est au-delà de mes attentes : ultra qualitatif, propre et professionnel. Tu as su comprendre exactement ce que je voulais et le retranscrire parfaitement. Encore merci pour ton taf et ton efficacité, c’est un vrai plaisir de bosser avec quelqu’un d’aussi fiable !",
  },
];

export const processSteps = [
  {
    title: "Brief",
    description:
      "On clarifie ton positionnement, tes objectifs, tes contenus clés et l’ambiance visuelle.",
  },
  {
    title: "Direction créative",
    description:
      "On construit un univers premium aligné avec ton métier, ta cible et ton niveau de gamme.",
  },
  {
    title: "Intégration",
    description:
      "Le press kit est intégré proprement, responsive et structuré pour convertir.",
  },
  {
    title: "Livraison",
    description:
      "Tu reçois un lien prêt à partager, pensé pour inspirer confiance et générer plus d’opportunités.",
  },
];

export const pricingTiers = [
  {
    name: "Starter Signature",
    price: "300€",
    tagline: "pour démarrer vite",
    description: "Pour lancer une présentation propre, claire et déjà premium.",
    features: [
      "Page press kit sur-mesure",
      "Adaptation mobile",
      "Jusqu’à 5 sections",
      "CTA contact intégré",
      "Livraison rapide",
    ],
    badge: "Le plus rapide",
  },
  {
    name: "Deluxe Kit",
    price: "400€",
    tagline: "pour scaler ton image",
    description:
      "Le meilleur équilibre pour vendre ton image, ton univers et tes opportunités.",
    features: [
      "Direction artistique plus poussée",
      "Jusqu’à 8 sections",
      "Blocs métier personnalisés",
      "Intégration d’exemples médias",
      "SEO de base + structure évolutive",
    ],
    badge: "Le plus demandé",
  },
  {
    name: "Studio Custom",
    price: "Sur devis",
    tagline: "pour un projet ultra custom",
    description:
      "Pour une expérience plus éditoriale, plus ambitieuse ou multi-pages.",
    features: [
      "Architecture complète",
      "Pages supplémentaires",
      "Narration visuelle plus poussée",
      "Déclinaisons par activité",
      "Accompagnement de contenu",
    ],
    badge: "Projet avancé",
  },
];

export const faqItems = [
  {
    question: "À qui s’adresse ce service ?",
    answer:
      "Aux artistes, créatifs, freelances et indépendants qui ont besoin d’un lien premium pour mieux se présenter et convertir.",
  },
  {
    question: "Est-ce un simple mini-site ?",
    answer:
      "Non. Le press kit est pensé comme un outil de présentation stratégique : image, clarté, crédibilité et passage à l’action.",
  },
  {
    question: "Puis-je faire évoluer le contenu plus tard ?",
    answer:
      "Oui. La structure est pensée pour accueillir d’autres sections, catégories, références ou un futur CMS.",
  },
];

export const categories: Category[] = [
  {
    slug: "dj",
    name: "Press kit DJ",
    shortName: "DJ",
    eyebrow: "Nuit, booking, impact visuel",
    description:
      "Une présentation pensée pour envoyer ton univers, tes styles, tes médias et ton contact booking en un seul lien.",
    audience: "DJs, producteurs, collectifs, résidents et artistes club",
    tone: "after-dark",
    accent: "#FF9152",
    accentSoft: "rgba(255,145,82,0.18)",
    gradient:
      "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
    heroTitle: "Un press kit DJ qui donne envie de te programmer.",
    heroDescription:
      "Styles, live energy, photos, vidéos, chiffres, réseaux et contact booking: tout ce qu’un booker veut voir, sans friction.",
    valueProps: ["Booking plus fluide", "Image club premium", "Lien unique à partager"],
    benefits: [
      {
        title: "Positionnement lisible",
        description: "Ton identité musicale est comprise en quelques secondes.",
      },
      {
        title: "Meilleur support booking",
        description: "Un lien propre pour clubs, événements, agences et marques.",
      },
      {
        title: "Médias bien mis en scène",
        description: "Photos, reels et live sets valorisés dans une vraie direction visuelle.",
      },
    ],
    includes: [
      "Bio courte + version booking",
      "Styles musicaux",
      "Photos presse",
      "Vidéos live / teaser",
      "Liens SoundCloud / Spotify / Instagram",
      "Contact booking direct",
    ],
    modules: ["Hero immersif", "Stats audience", "Track highlights", "Booking card"],
    sampleHighlights: ["Dark gradient UI", "Cards éditoriales", "CTA booking always visible"],
    stats: [
      { label: "Formats joués", value: "Club • Event • Private" },
      { label: "Focus", value: "Image + booking" },
      { label: "Usage", value: "Link-in-bio premium" },
    ],
    heroImage: "/dj.png",
    heroImageAlt: "Hero du press kit DJ inspiré de la référence DJ SLY'D",
    heroOverlayTitle: "Paris to international stages",
    externalDemoUrl: "https://djslyd.presskit.fr/",
  },
  {
    slug: "artiste",
    name: "Press kit artiste / chanteur",
    shortName: "Artiste",
    eyebrow: "Univers, sorties, visibilité",
    description:
      "Une page élégante pour présenter ton identité artistique, tes titres, tes visuels et tes demandes de booking ou collab.",
    audience: "Artistes, chanteurs, auteurs-compositeurs, projets live",
    tone: "editorial",
    accent: "#F4C26B",
    accentSoft: "rgba(244,194,107,0.18)",
    gradient:
      "from-[#F4C26B]/28 via-[#F46B8D]/12 to-transparent",
    heroTitle: "Une présence digitale à la hauteur de ton univers artistique.",
    heroDescription:
      "Ta direction visuelle, tes releases, tes photos presse et tes prises de contact réunies dans un format simple à envoyer.",
    valueProps: ["Présence éditoriale", "Clips et sons intégrés", "Prise de contact claire"],
    benefits: [
      {
        title: "Univers plus mémorable",
        description: "Ton image, tes mots et tes visuels racontent la même histoire.",
      },
      {
        title: "Press et partenaires rassurés",
        description: "Ils trouvent rapidement les éléments utiles sans te relancer.",
      },
      {
        title: "Plus simple à promouvoir",
        description: "Le lien devient une base propre pour teaser, pitcher et partager.",
      },
    ],
    includes: [
      "Bio artiste",
      "Clips / sorties / embeds",
      "Photos presse téléchargeables",
      "Dates ou actualités",
      "Collabs / presse",
      "Contact booking / management",
    ],
    modules: ["Hero éditorial", "Discographie", "Video highlights", "Press quotes"],
    sampleHighlights: ["Typo plus mode", "Mise en scène des sorties", "Narration visuelle"],
    stats: [
      { label: "Objectif", value: "Booking • Presse • Collab" },
      { label: "Style", value: "Editorial premium" },
      { label: "Contenus", value: "Audio • Video • Photos" },
    ],
    heroImage: "/artist.png",
    heroImageAlt: "Hero premium pour un press kit artiste",
    heroOverlayTitle: "Editorial artist press kit",
    externalDemoUrl: "https://artist-presskit.vercel.app/",
  },
  {
    slug: "photographe",
    name: "Press kit vidéaste / photographe",
    shortName: "Photographe",
    eyebrow: "Image, nightlife, événements premium",
    description:
      "Un press kit premium pour présenter ton regard, tes images, tes formats de couverture et faciliter les demandes de booking.",
    audience: "Photographes, vidéastes, créateurs event, nightlife et marques",
    tone: "editorial",
    accent: "#D04C57",
    accentSoft: "rgba(208,76,87,0.18)",
    gradient:
      "from-[#D04C57]/28 via-[#4B6CFF]/12 to-transparent",
    heroTitle: "Un press kit photographe qui donne envie de te confier l’image d’un événement.",
    heroDescription:
      "Portfolio, univers visuel, formats photo/vidéo, zones d’intervention et contact booking réunis dans une présentation claire, premium et immédiate.",
    valueProps: ["Portfolio plus fort", "Positionnement plus net", "Booking simplifié"],
    benefits: [
      {
        title: "Univers visuel plus mémorable",
        description: "Tes images, ton énergie et ton style se lisent dès les premiers scrolls.",
      },
      {
        title: "Offre plus simple à projeter",
        description: "Events, privé, nightlife ou brand content : le prospect comprend vite où tu apportes le plus.",
      },
      {
        title: "Prise de contact plus directe",
        description: "Le site cadre l’essentiel pour passer plus vite du coup d’œil au booking.",
      },
    ],
    includes: [
      "Bio vidéaste / photographe",
      "Showreel ou vidéo hero",
      "Galerie photo premium",
      "Services et formats de couverture",
      "Réseaux et zones d’intervention",
      "Contact booking direct",
    ],
    modules: ["Hero vidéo", "Portfolio gallery", "Service blocks", "Booking panel"],
    sampleHighlights: ["Ambiance nightlife", "Portfolio très visuel", "CTA booking immédiat"],
    stats: [
      { label: "Usage", value: "Events • Nightlife • Brand" },
      { label: "Base", value: "Paris • FR • Intl" },
      { label: "Format", value: "Photo • Video • Booking" },
    ],
    heroImage: "/photographe.png",
    heroImageAlt: "Aperçu du profil vidéaste photographe Lokko TV",
    heroImagePosition: "center 22%",
    previewImage: "/photographe.png",
    previewImagePosition: "center 22%",
    previewImageOffsetY: "-12%",
    heroOverlayTitle: "Lokko TV photographer profile",
    externalDemoUrl: "https://lokko-tv.vercel.app/",
  },
  {
    slug: "coach-sportif",
    name: "Press kit coach sportif",
    shortName: "Coach sportif",
    eyebrow: "Confiance, méthode, résultats",
    description:
      "Une présentation claire et premium pour rendre ton offre lisible, crédible et facile à contacter.",
    audience: "Coachs sportifs, préparateurs, studios, profils wellness",
    tone: "performance",
    accent: "#63E6BE",
    accentSoft: "rgba(99,230,190,0.18)",
    gradient:
      "from-[#63E6BE]/28 via-[#4DA6FF]/12 to-transparent",
    heroTitle: "Un press kit qui transforme ton expertise en confiance immédiate.",
    heroDescription:
      "Méthode, prestations, résultats, réseaux et prise de contact: tout est structuré pour rassurer vite et faire passer à l’action.",
    valueProps: ["Offres plus lisibles", "Preuve sociale mieux cadrée", "Contact direct"],
    benefits: [
      {
        title: "Services mieux compris",
        description: "Tes formules et ton approche deviennent plus simples à choisir.",
      },
      {
        title: "Crédibilité renforcée",
        description: "Tes résultats, ton expertise et ton ton de marque sont plus alignés.",
      },
      {
        title: "Plus de demandes qualifiées",
        description: "Le parcours met en avant les infos qui déclenchent un premier échange.",
      },
    ],
    includes: [
      "Présentation du coach",
      "Services et accompagnements",
      "Résultats / transformations",
      "Philosophie ou méthode",
      "Réseaux sociaux",
      "Prise de rendez-vous",
    ],
    modules: ["Offer cards", "Proof metrics", "Transformation grid", "Call booking block"],
    sampleHighlights: ["Visuel clean et athlétique", "Rassurance rapide", "CTA très lisibles"],
    stats: [
      { label: "Usage", value: "Prospection • Instagram • Ads" },
      { label: "Priorité", value: "Clarté + conversion" },
      { label: "Positionnement", value: "Coaching premium" },
    ],
    heroImage: "https://coaching-presskit.vercel.app/images/hero-main.jpg",
    heroImageAlt: "Aperçu du press kit coach sportif",
    heroOverlayTitle: "Coaching privé premium",
    externalDemoUrl: "https://coaching-presskit.vercel.app/",
  },
  {
    slug: "make-up-artist",
    name: "Press kit make-up artist",
    shortName: "Make-up artist",
    eyebrow: "Portfolio, prestations, image",
    description:
      "Un écrin digital élégant pour montrer ton style, tes looks, tes prestations et faciliter les prises de contact.",
    audience: "MUA, beauty artists, bridal, mode et événementiel",
    tone: "beauty",
    accent: "#FF8DAA",
    accentSoft: "rgba(255,141,170,0.18)",
    gradient:
      "from-[#FF8DAA]/28 via-[#FFD37A]/12 to-transparent",
    heroTitle: "Un press kit make-up artist pensé pour sublimer ton portfolio.",
    heroDescription:
      "Galerie, prestations, avant/après, style visuel et demande de booking: ton expertise devient immédiatement plus premium.",
    valueProps: ["Portfolio valorisé", "Offres plus nettes", "Prise de rendez-vous simplifiée"],
    benefits: [
      {
        title: "Galerie mieux mise en valeur",
        description: "Tes visuels respirent et installent un niveau de gamme supérieur.",
      },
      {
        title: "Prestations plus désirables",
        description: "Le service paraît plus structuré, plus fiable et plus professionnel.",
      },
      {
        title: "Image de marque cohérente",
        description: "Tu présentes un univers clair du premier scroll jusqu’au contact.",
      },
    ],
    includes: [
      "Présentation de l’univers",
      "Portfolio / galerie",
      "Prestations",
      "Avant / après",
      "Références ou collaborations",
      "Prise de rendez-vous",
    ],
    modules: ["Beauty gallery", "Service matrix", "Mood section", "Contact ribbon"],
    sampleHighlights: ["Palette plus lumineuse", "Cards soft premium", "Forte place à l’image"],
    stats: [
      { label: "Cible", value: "Mariage • Editorial • Events" },
      { label: "Atout", value: "Portfolio premium" },
      { label: "Format", value: "Simple à partager" },
    ],
    heroImage: "/makeup.png",
    heroImageAlt: "Visuel hero premium make-up artist",
    heroOverlayTitle: "Portfolio beauty premium",
    externalDemoUrl: "https://ishma-makeupartist.vercel.app/",
  },
  {
    slug: "chef",
    name: "Press kit chef / traiteur",
    shortName: "Chef / Traiteur",
    eyebrow: "Signature culinaire, événements, devis",
    description:
      "Une vitrine haut de gamme pour présenter ton concept, tes prestations, tes visuels et faciliter les demandes de devis.",
    audience: "Chefs privés, traiteurs, concepts food et événementiel",
    tone: "culinary",
    accent: "#D7A86E",
    accentSoft: "rgba(215,168,110,0.18)",
    gradient:
      "from-[#D7A86E]/28 via-[#E25E3E]/12 to-transparent",
    heroTitle: "Un press kit culinaire qui ouvre l’appétit et rassure tes clients.",
    heroDescription:
      "Concept, prestations, galerie plats, formats événementiels et contact devis réunis dans une présentation premium.",
    valueProps: ["Image haut de gamme", "Offre compréhensible", "Demandes mieux qualifiées"],
    benefits: [
      {
        title: "Concept plus clair",
        description: "Ton identité culinaire est comprise rapidement et donne envie d’en savoir plus.",
      },
      {
        title: "Galerie plus impactante",
        description: "Tes plats et ton univers gagnent en désirabilité avec une meilleure mise en scène.",
      },
      {
        title: "Devis mieux préparés",
        description: "Les prospects arrivent avec une compréhension plus nette de ce que tu proposes.",
      },
    ],
    includes: [
      "Présentation du concept",
      "Prestations et formats",
      "Galerie plats",
      "Références événements",
      "Zone géographique",
      "Contact devis",
    ],
    modules: ["Editorial hero", "Menu-style sections", "Event formats", "Quote request CTA"],
    sampleHighlights: ["Ambiance matière", "Palette chaude", "Éditorial premium"],
    stats: [
      { label: "Usage", value: "Devis • Events • Brand dinners" },
      { label: "Style", value: "Warm editorial" },
      { label: "Impact", value: "Image + crédibilité" },
    ],
  },
];

export const examples: Example[] = [
  {
    slug: "dj-afterhours",
    category: "DJ",
    title: "Afterhours Signal",
    description: "Un press kit taillé pour la nuit, le booking et les résidences premium.",
    href: "/presskit/dj",
    accent: "#FF9152",
  },
  {
    slug: "yoruboy-dj",
    category: "DJ",
    title: "Yoruboy",
    description: "Un press kit DJ direct, premium et prêt à envoyer aux bookers.",
    href: "/presskit/dj",
    externalDemoUrl: "https://yoruboy-dj.presskit.fr",
    image: "/dj-yoruboy-desktop.png",
    accent: "#FF9152",
  },
  {
    slug: "artist-editorial",
    category: "Artiste",
    title: "Velvet Echo",
    description: "Une présence éditoriale pour sorties, presse et collaborations.",
    href: "/presskit/artiste",
    accent: "#F4C26B",
  },
  {
    slug: "coach-performance",
    category: "Photographe",
    title: "Lokko Nights",
    description: "Une présentation éditoriale pour booking, portfolio et univers nightlife premium.",
    href: "/presskit/photographe",
    accent: "#D04C57",
  },
  {
    slug: "mua-signature",
    category: "Make up artist",
    title: "Soft Focus Signature",
    description: "Un portfolio premium pour installer une image plus haut de gamme.",
    href: "/presskit/make-up-artist",
    accent: "#FF8DAA",
  },
  {
    slug: "chef-event",
    category: "Chef / Traiteur",
    title: "Table Story",
    description: "Un press kit chaleureux et précis pour événements et prestations privées.",
    href: "/presskit/chef",
    accent: "#D7A86E",
  },
];
