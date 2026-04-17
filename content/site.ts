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

export const siteConfig = {
  name: "PressKit Studio",
  description:
    "Press kits digitaux premium pour artistes, talents et indépendants qui veulent une présentation nette, crédible et orientée opportunités.",
  url: "https://presskit-studio.example",
  nav: [
    { href: "/", label: "Accueil" },
    { href: "/comment-ca-marche", label: "Comment ça marche" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ],
  ctas: {
    primary: "Créer mon press kit",
    secondary: "Voir les exemples",
    call: "Réserver un appel",
    launch: "Lancer mon projet",
  },
};

export const heroStats = [
  { value: "48h", label: "pour cadrer le brief et la direction" },
  { value: "1 lien", label: "pour centraliser infos, médias et contact" },
  { value: "Premium", label: "dans le fond, la forme et l’expérience" },
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
      "Pour les bookings, partenariats, collabs, presse et prises de contact rapides.",
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
      "Une structure claire pour faire évoluer le site, le contenu et les démos plus tard.",
  },
];

export const testimonials = [
  {
    name: "Lina M.",
    role: "Artiste indépendante",
    quote:
      "J’avais besoin d’un lien propre pour les bookers et les médias. Le rendu élève instantanément mon projet.",
  },
  {
    name: "Nicolas R.",
    role: "Photographe événementiel",
    quote:
      "J’ai enfin un lien qui pose mon univers, mes images et ma disponibilité avec un vrai niveau premium.",
  },
  {
    name: "Camille D.",
    role: "Make up artist",
    quote:
      "Le press kit pose mon univers, mes prestations et mes visuels avec une vraie sensation haut de gamme.",
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
      "Le press kit est développé proprement, responsive et structuré pour convertir.",
  },
  {
    title: "Livraison",
    description:
      "Tu reçois un lien prêt à partager, pensé pour inspirer confiance et générer des opportunités.",
  },
];

export const pricingTiers = [
  {
    name: "Starter Signature",
    price: "300€",
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
      "Non. Le press kit est pensé comme un outil de présentation stratégique: image, clarté, rassurance et passage à l’action.",
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
    externalDemoUrl: "https://djslyd-presskit.vercel.app/",
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
    name: "Press kit videaste / photographe",
    shortName: "Photographe",
    eyebrow: "Image, nightlife, evenements premium",
    description:
      "Un press kit premium pour presenter ton regard, tes images, tes formats de couverture et faciliter les demandes de booking.",
    audience: "Photographes, videastes, createurs event, nightlife et marques",
    tone: "editorial",
    accent: "#D04C57",
    accentSoft: "rgba(208,76,87,0.18)",
    gradient:
      "from-[#D04C57]/28 via-[#4B6CFF]/12 to-transparent",
    heroTitle: "Un press kit photographe qui donne envie de te confier l’image d’un evenement.",
    heroDescription:
      "Portfolio, univers visuel, formats photo/video, zones d’intervention et contact booking reunis dans une presentation claire, premium et immediate.",
    valueProps: ["Portfolio plus fort", "Positionnement plus net", "Booking simplifie"],
    benefits: [
      {
        title: "Univers visuel plus memorable",
        description: "Tes images, ton energie et ton style se lisent des les premiers scrolls.",
      },
      {
        title: "Offre plus simple a projeter",
        description: "Events, prive, nightlife ou brand content: le prospect comprend vite ou tu apportes le plus.",
      },
      {
        title: "Prise de contact plus directe",
        description: "Le site cadre l’essentiel pour passer plus vite du coup d’oeil au booking.",
      },
    ],
    includes: [
      "Bio videaste / photographe",
      "Showreel ou video hero",
      "Galerie photo premium",
      "Services et formats de couverture",
      "Reseaux et zones d’intervention",
      "Contact booking direct",
    ],
    modules: ["Hero video", "Portfolio gallery", "Service blocks", "Booking panel"],
    sampleHighlights: ["Ambiance nightlife", "Portfolio tres visuel", "CTA booking immediat"],
    stats: [
      { label: "Usage", value: "Events • Nightlife • Brand" },
      { label: "Base", value: "Paris • FR • Intl" },
      { label: "Format", value: "Photo • Video • Booking" },
    ],
    heroImage: "/photographe.png",
    heroImageAlt: "Apercu du profil videaste photographe Lokko TV",
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
    heroOverlayTitle: "Coaching prive premium",
    externalDemoUrl: "https://coaching-presskit.vercel.app/",
  },
  {
    slug: "make-up-artist",
    name: "Press kit make up artist",
    shortName: "Make up artist",
    eyebrow: "Portfolio, prestations, image",
    description:
      "Un écrin digital élégant pour montrer ton style, tes looks, tes prestations et faciliter les prises de contact.",
    audience: "MUA, beauty artists, bridal, mode et événementiel",
    tone: "beauty",
    accent: "#FF8DAA",
    accentSoft: "rgba(255,141,170,0.18)",
    gradient:
      "from-[#FF8DAA]/28 via-[#FFD37A]/12 to-transparent",
    heroTitle: "Un press kit make up artist pensé pour sublimer ton portfolio.",
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
    heroImageAlt: "Visuel hero premium make up artist",
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
      { label: "Impact", value: "Image + réassurance" },
    ],
  },
];

export const examples = [
  {
    slug: "dj-afterhours",
    category: "DJ",
    title: "Afterhours Signal",
    description: "Un press kit taillé pour la nuit, le booking et les résidences premium.",
    href: "/presskit/dj",
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
    description: "Une presentation editoriale pour booking, portfolio et univers nightlife premium.",
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
