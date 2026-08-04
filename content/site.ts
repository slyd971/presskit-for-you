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
  mobileImage?: string;
  imagePosition?: string;
  externalDemoUrl?: string;
};

export { pricingTiers } from "@/content/pricing";

export const siteConfig = {
  name: "PressKit For You",
  description:
    "Press kits digitaux premium pour artistes, talents et indépendants qui veulent une présentation claire, crédible et pensée pour convertir.",
  url: "https://www.presskit.fr",
  phone: "06 63 90 78 88",
  whatsappUrl: "https://wa.me/33663907888",
  nav: [
    { href: "/exemples", label: "Exemples" },
    { href: "/#tarifs", label: "Tarifs" },
    { href: "/#methode", label: "Méthode" },
    { href: "/#avis", label: "Avis" },
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
    name: "Izzy Lokko",
    role: "Vidéaste",
    image: "/témoignages/izzy-profil.webp",
    quote:
      "Très satisfait du press kit : c’est une mise en avant qualitative de mon travail professionnel, qui me démarque directement de la concurrence. Ça porte déjà ses fruits et m’a permis de décrocher de nouveaux clients.",
  },
  {
    name: "Ishma N.",
    role: "Make-up artist",
    image: "/témoignages/ishma.webp",
    quote:
      "Une expérience incroyable ! En tant que make-up artist, j’ai senti que l’équipe avait tout de suite saisi ma signature. Le résultat me ressemble totalement et reflète parfaitement ma façon de travailler. La page est intuitive, très professionnelle et va bien au-delà de mes attentes. Un immense merci.",
  },
  {
    name: "Yed D.",
    role: "DJ",
    image: "/témoignages/yoruboy.webp",
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
    slug: "artiste",
    name: "Press kit artiste",
    shortName: "Artiste",
    eyebrow: "Univers, œuvres, médias, booking",
    description:
      "Une page pour présenter vos œuvres, vos médias, vos références et votre contact.",
    audience: "Artistes, chanteurs, danseurs, peintres, créateurs et projets culturels",
    tone: "artist",
    accent: "#F4C26B",
    accentSoft: "rgba(244,194,107,0.18)",
    gradient:
      "from-[#F4C26B]/28 via-[#F46B8D]/12 to-transparent",
    heroTitle: "Valorisez votre image, en tant qu'artiste",
    heroDescription:
      "Utilisez votre press kit comme une carte de visite digitale pour les médias, sponsors et futurs partenaires.",
    valueProps: ["Travail plus clair", "Médias regroupés", "Contact direct"],
    benefits: [
      {
        title: "Travail plus lisible",
        description: "Le visiteur comprend rapidement votre démarche, vos œuvres et vos références.",
      },
      {
        title: "Médias mieux organisés",
        description: "Photos, vidéos, œuvres, sons et références sont réunis dans une page claire.",
      },
      {
        title: "Plus simple à envoyer",
        description: "Un seul lien pour la presse, les lieux, les galeries, les bookers et les collaborations.",
      },
    ],
    includes: [
      "Bio artiste",
      "Photos presse ou œuvres",
      "Vidéos / écoutes / médias",
      "Références et chiffres clés",
      "Liens sociaux",
      "Contact professionnel direct",
    ],
    modules: ["Présentation courte", "Galerie médias", "Références", "Contact pro"],
    sampleHighlights: ["Œuvres visibles", "Médias regroupés", "Contact clair"],
    stats: [
      { label: "Usage", value: "Presse • Booking • Collabs" },
      { label: "Focus", value: "Univers + crédibilité" },
      { label: "Format", value: "Lien à partager" },
    ],
    heroImage: "/artist.webp",
    heroImageAlt: "Aperçu d'un press kit artiste",
    heroOverlayTitle: "Profil artiste",
    externalDemoUrl: "https://presskit.melymelow.art/",
  },
  {
    slug: "dj",
    name: "Press kit DJ",
    shortName: "DJ",
    eyebrow: "Nuit, booking, médias",
    description:
      "Une page pour présenter vos styles, vos médias et votre contact booking.",
    audience: "DJs, producteurs, collectifs, résidents et artistes club",
    tone: "after-dark",
    accent: "#FF9152",
    accentSoft: "rgba(255,145,82,0.18)",
    gradient:
      "from-[#FF9152]/30 via-[#CE5DFF]/12 to-transparent",
    heroTitle: "Votre profil DJ, clair pour les bookers.",
    heroDescription:
      "Présentez vos styles, vos photos, vos vidéos, vos liens d’écoute, vos références et votre contact booking.",
    valueProps: ["Booking plus simple", "Médias regroupés", "Lien unique à partager"],
    benefits: [
      {
        title: "Styles identifiés",
        description: "Le booker comprend rapidement vos styles musicaux et vos formats de set.",
      },
      {
        title: "Références visibles",
        description: "Clubs, événements, photos et vidéos donnent du contexte à votre profil.",
      },
      {
        title: "Contact booking clair",
        description: "Les clubs, agences et organisateurs savent comment vous joindre.",
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
    modules: ["Présentation DJ", "Styles musicaux", "Photos et vidéos", "Contact booking"],
    sampleHighlights: ["Photos visibles", "Liens d'écoute", "Contact booking"],
    stats: [
      { label: "Formats joués", value: "Club • Event • Private" },
      { label: "Focus", value: "Image + booking" },
      { label: "Usage", value: "Lien à partager" },
    ],
    heroImage: "/dj.webp",
    heroImageAlt: "Hero du press kit DJ inspiré de la référence DJ SLY'D",
    heroOverlayTitle: "Paris to international stages",
    externalDemoUrl: "https://djslyd.presskit.fr",
  },
  {
    slug: "danseur",
    name: "Press kit danseur",
    shortName: "Danseur",
    eyebrow: "Performance, énergie, collaborations",
    description:
      "Une page pour présenter vos vidéos, vos références et vos formats d’intervention.",
    audience: "Danseurs, chorégraphes, performers, collectifs et projets culturels",
    tone: "movement",
    accent: "#D5A928",
    accentSoft: "rgba(213,169,40,0.18)",
    gradient:
      "from-[#D5A928]/28 via-[#63E6BE]/12 to-transparent",
    heroTitle: "Votre parcours de danseur, plus facile à comprendre.",
    heroDescription:
      "Présentez vos vidéos, vos photos, vos références, vos collaborations et votre contact aux lieux, marques et projets culturels.",
    valueProps: ["Vidéos regroupées", "Parcours lisible", "Contact clair"],
    benefits: [
      {
        title: "Performances accessibles",
        description: "Vos vidéos montrent votre travail sans dépendre d’un seul post social.",
      },
      {
        title: "Parcours situé",
        description: "Scènes, clips, collectifs et collaborations donnent du contexte à votre profil.",
      },
      {
        title: "Demandes cadrées",
        description: "Scène, clip, atelier ou collaboration : les formats possibles sont explicités.",
      },
    ],
    includes: [
      "Bio danseur / chorégraphe",
      "Vidéos de performance",
      "Photos scène ou studio",
      "Références et collaborations",
      "Styles et formats d’intervention",
      "Contact booking direct",
    ],
    modules: ["Présentation danseur", "Vidéos", "Références scène", "Contact"],
    sampleHighlights: ["Vidéos visibles", "Parcours clair", "Contact direct"],
    stats: [
      { label: "Usage", value: "Scène • Clips • Culture" },
      { label: "Focus", value: "Énergie + crédibilité" },
      { label: "Format", value: "Portfolio vivant" },
    ],
    heroImage: "/artist.webp",
    heroImageAlt: "Aperçu d'un press kit danseur",
    heroOverlayTitle: "Profil danseur",
    externalDemoUrl: "https://krimo-dancer.presskit.fr/",
  },
  {
    slug: "photographe",
    name: "Press kit vidéaste / photographe",
    shortName: "Photographe",
    eyebrow: "Image, nightlife, événements",
    description:
      "Une page pour présenter votre portfolio, vos services et votre contact.",
    audience: "Photographes, vidéastes, créateurs event, nightlife et marques",
    tone: "editorial",
    accent: "#D04C57",
    accentSoft: "rgba(208,76,87,0.18)",
    gradient:
      "from-[#D04C57]/28 via-[#4B6CFF]/12 to-transparent",
    heroTitle: "Votre regard, vos images, vos prestations.",
    heroDescription:
      "Présentez votre portfolio, vos formats photo ou vidéo, vos zones d’intervention et votre contact.",
    valueProps: ["Portfolio clair", "Services lisibles", "Contact direct"],
    benefits: [
      {
        title: "Portfolio sélectionné",
        description: "Vos meilleures images donnent rapidement une idée de votre style.",
      },
      {
        title: "Prestations lisibles",
        description: "Événement, privé, nightlife ou marque : le prospect sait ce qu’il peut demander.",
      },
      {
        title: "Devis facilité",
        description: "Formats, zone d’intervention et contact sont disponibles avant le premier message.",
      },
    ],
    includes: [
      "Bio vidéaste / photographe",
      "Showreel ou vidéo hero",
      "Galerie photo",
      "Services et formats de couverture",
      "Réseaux et zones d’intervention",
      "Contact booking direct",
    ],
    modules: ["Présentation photo", "Portfolio", "Services", "Contact"],
    sampleHighlights: ["Images visibles", "Services clairs", "Contact direct"],
    stats: [
      { label: "Usage", value: "Events • Nightlife • Brand" },
      { label: "Base", value: "Paris • FR • Intl" },
      { label: "Format", value: "Photo • Video • Booking" },
    ],
    heroImage: "/photographe.webp",
    heroImageAlt: "Aperçu du profil vidéaste photographe Lokko TV",
    heroImagePosition: "center 22%",
    previewImage: "/photographe.webp",
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
      "Une page pour expliquer votre coaching, vos offres et vos résultats.",
    audience: "Coachs sportifs, préparateurs, studios, profils wellness",
    tone: "performance",
    accent: "#63E6BE",
    accentSoft: "rgba(99,230,190,0.18)",
    gradient:
      "from-[#63E6BE]/28 via-[#4DA6FF]/12 to-transparent",
    heroTitle: "Votre coaching, vos offres, vos résultats.",
    heroDescription:
      "Présentez votre méthode, vos prestations, vos résultats, vos réseaux et votre prise de rendez-vous.",
    valueProps: ["Offres lisibles", "Résultats visibles", "Contact direct"],
    benefits: [
      {
        title: "Accompagnements lisibles",
        description: "Les formules et publics concernés sont présentés clairement.",
      },
      {
        title: "Preuves visibles",
        description: "Résultats, avis et contenus pédagogiques aident le prospect à se faire une idée.",
      },
      {
        title: "Demandes plus précises",
        description: "La personne sait quoi réserver et comment vous contacter.",
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
    modules: ["Présentation du coach", "Offres", "Résultats", "Prise de contact"],
    sampleHighlights: ["Méthode claire", "Offres lisibles", "Contact direct"],
    stats: [
      { label: "Usage", value: "Prospection • Instagram • Ads" },
      { label: "Priorité", value: "Clarté + conversion" },
      { label: "Positionnement", value: "Coaching privé" },
    ],
    heroImage: "https://coaching-presskit.vercel.app/images/hero-main.jpg",
    heroImageAlt: "Aperçu du press kit coach sportif",
    heroOverlayTitle: "Coaching privé",
    externalDemoUrl: "https://coaching-presskit.vercel.app/",
  },
  {
    slug: "make-up-artist",
    name: "Press kit make-up artist",
    shortName: "Make-up artist",
    eyebrow: "Portfolio, prestations, image",
    description:
      "Une page pour montrer vos looks, vos prestations et votre contact.",
    audience: "MUA, beauty artists, bridal, mode et événementiel",
    tone: "beauty",
    accent: "#FF8DAA",
    accentSoft: "rgba(255,141,170,0.18)",
    gradient:
      "from-[#FF8DAA]/28 via-[#FFD37A]/12 to-transparent",
    heroTitle: "Vos looks, vos prestations, votre contact.",
    heroDescription:
      "Présentez votre portfolio, vos prestations, vos avant/après, vos références et votre contact aux clientes, marques ou productions.",
    valueProps: ["Portfolio clair", "Prestations lisibles", "Contact direct"],
    benefits: [
      {
        title: "Looks sélectionnés",
        description: "Vos photos montrent votre style hors du flux des réseaux sociaux.",
      },
      {
        title: "Prestations claires",
        description: "Mariage, mode, éditorial ou événement : chaque service est facile à comprendre.",
      },
      {
        title: "Contact direct",
        description: "Clientes, marques et productions trouvent rapidement comment vous joindre.",
      },
    ],
    includes: [
      "Présentation de votre style",
      "Portfolio / galerie",
      "Prestations",
      "Avant / après",
      "Références ou collaborations",
      "Prise de rendez-vous",
    ],
    modules: ["Présentation MUA", "Galerie", "Prestations", "Contact"],
    sampleHighlights: ["Looks visibles", "Prestations claires", "Contact direct"],
    stats: [
      { label: "Cible", value: "Mariage • Editorial • Events" },
      { label: "Atout", value: "Portfolio clair" },
      { label: "Format", value: "Simple à partager" },
    ],
    heroImage: "/makeup.webp",
    heroImageAlt: "Aperçu d'un press kit make-up artist",
    heroOverlayTitle: "Portfolio make-up",
    externalDemoUrl: "https://ishma-makeupartist.vercel.app/",
  },
  {
    slug: "organisateur",
    name: "Press kit organisateur de soirée",
    shortName: "Organisateur",
    eyebrow: "Événement, communauté, sponsors",
    description:
      "Une page pour présenter votre événement, vos chiffres et vos partenaires.",
    audience: "Organisateurs de soirées, collectifs, événements et communautés",
    tone: "event",
    accent: "#FF8DAA",
    accentSoft: "rgba(255,141,170,0.18)",
    gradient:
      "from-[#FF8DAA]/28 via-[#FFD37A]/12 to-transparent",
    heroTitle: "Votre événement, lisible pour les lieux et sponsors.",
    heroDescription:
      "Présentez votre événement, vos photos, vos vidéos, votre communauté, vos chiffres, vos partenaires et votre contact.",
    valueProps: ["Événement lisible", "Chiffres regroupés", "Contact partenaire"],
    benefits: [
      {
        title: "Format expliqué",
        description: "Le visiteur voit l’ambiance, le public, le format et les éditions passées.",
      },
      {
        title: "Chiffres visibles",
        description: "Communauté, fréquentation, médias et partenaires sont présentés clairement.",
      },
      {
        title: "Contact partenaire direct",
        description: "Lieux, sponsors et marques savent comment engager la discussion.",
      },
    ],
    includes: [
      "Présentation de l’événement",
      "Photos et vidéos d’événements",
      "Chiffres communauté",
      "Sponsors et partenaires",
      "Éditions ou dates clés",
      "Contact partenariat direct",
    ],
    modules: ["Présentation événement", "Photos et vidéos", "Chiffres", "Contact partenaires"],
    sampleHighlights: ["Photos visibles", "Chiffres clairs", "Contact partenaire"],
    stats: [
      { label: "Usage", value: "Lieux • Sponsors • Médias" },
      { label: "Focus", value: "Traction + ambiance" },
      { label: "Format", value: "Dossier digital" },
    ],
    heroImage: "/gallery-previews/home-desktop/la-bringue.webp",
    heroImageAlt: "Aperçu d'un press kit organisateur de soirée",
    heroOverlayTitle: "Événement",
    externalDemoUrl: "https://labringue-party.vercel.app/",
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
    slug: "melymelow",
    category: "Artiste peintre",
    title: "MelyMelow",
    description: "Un press kit artiste peintre avec œuvres, démarche, médias et contact pro.",
    href: "/exemples",
    externalDemoUrl: "https://presskit.melymelow.art/",
    image: "/gallery-previews/home-desktop/melymelow.webp",
    mobileImage: "/gallery-previews/hero-mobile/Mobile-melymelow.jpeg",
    accent: "#F4C26B",
  },
  {
    slug: "sherin",
    category: "Chanteuse",
    title: "Sherin",
    description: "Un press kit chanteuse pour annoncer une sortie, présenter les médias, les chiffres et le booking.",
    href: "/exemples",
    externalDemoUrl: "https://sherin.presskit.fr/",
    image: "/gallery-previews/home-desktop/sherin.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-sherin.webp",
    accent: "#F4C26B",
  },
  {
    slug: "krimo",
    category: "Danseur",
    title: "KRIMO",
    description: "Un press kit danseur avec performances, collectif, références et contact.",
    href: "/exemples",
    externalDemoUrl: "https://krimo-dancer.presskit.fr/",
    image: "/gallery-previews/home-desktop/krimo.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-krimo.webp",
    accent: "#D5A928",
  },
  {
    slug: "dj-mack",
    category: "DJ",
    title: "DJ MACK",
    description: "Un press kit DJ & MC international pour références, médias, SoundCloud et booking événementiel.",
    href: "/#contact",
    externalDemoUrl: "https://dj-mack.presskit.fr/",
    image: "/gallery-previews/home-desktop/dj-mack.webp",
    mobileImage: "/gallery-previews/home-mobile/dj-mack.webp",
    accent: "#FF9152",
  },
  {
    slug: "soyumi",
    category: "DJ",
    title: "Soyumi",
    description: "Un press kit DJ avec styles, photos, vidéos, références et booking.",
    href: "/#contact",
    externalDemoUrl: "https://soyumi.presskit.fr/",
    image: "/gallery-previews/home-desktop/soyumi.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-soyumi.webp",
    accent: "#FF9152",
  },
  {
    slug: "flo",
    category: "DJ",
    title: "FLO",
    description: "Un press kit DJ open format pour hôtels, marques, rooftops et événements corporate.",
    href: "/#contact",
    externalDemoUrl: "https://www.djfloparis.com/",
    image: "/gallery-previews/home-desktop/flo.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-djflo.webp",
    accent: "#FF9152",
  },
  {
    slug: "la-bringue",
    category: "Organisateur",
    title: "La Bringue",
    description: "Un press kit organisateur de soirée pour communauté, chiffres, sponsors et partenaires.",
    href: "/exemples",
    externalDemoUrl: "https://labringue-party.vercel.app/",
    image: "/gallery-previews/home-desktop/la-bringue.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-labringueparty.webp",
    accent: "#FF8DAA",
  },
  {
    slug: "arthur-chaps",
    category: "DJ",
    title: "Arthur Chaps",
    description: "Un press kit DJ et directeur artistique avec références, médias et contact.",
    href: "/#contact",
    externalDemoUrl: "https://arthur-chaps.presskit.fr/",
    image: "/gallery-previews/home-desktop/arthur-chaps.webp",
    mobileImage: "/gallery-previews/home-mobile/arthur-chaps.webp",
    accent: "#FF9152",
  },
  {
    slug: "dj-afterhours",
    category: "DJ",
    title: "DJ SLY'D",
    description: "Un press kit DJ pour présenter médias, références et contact aux clubs.",
    href: "/#contact",
    externalDemoUrl: "https://djslyd.presskit.fr",
    image: "/gallery-previews/home-desktop/dj-slyd.webp",
    mobileImage: "/gallery-previews/home-mobile/dj-slyd.webp",
    accent: "#FF9152",
  },
  {
    slug: "yoruboy-dj",
    category: "DJ",
    title: "Yoruboy",
    description: "Un press kit DJ direct, prêt à envoyer aux bookers.",
    href: "/#contact",
    externalDemoUrl: "https://yoruboy-dj.presskit.fr",
    image: "/dj-yoruboy-desktop.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-yoruboy.webp",
    accent: "#FF9152",
  },
  {
    slug: "black-moz",
    category: "Chanteur / Rap",
    title: "Black Moz",
    description: "Un press kit rap et slam avec bio, écoute, médias et booking.",
    href: "/#contact",
    externalDemoUrl: "https://black-moz.presskit.fr/",
    image: "/gallery-previews/home-desktop/black-moz.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-blackmoz.webp",
    accent: "#C8BBAE",
  },
  {
    slug: "silver-dj",
    category: "DJ",
    title: "Silver DJ",
    description: "Un exemple DJ avec médias, liens d’écoute et contact booking.",
    href: "/#contact",
    externalDemoUrl: "https://silver-dj.presskit.fr/",
    image: "/gallery-previews/silver-dj.webp",
    mobileImage: "/gallery-previews/home-mobile/silver-dj.webp",
    imagePosition: "center 72%",
    accent: "#FF9152",
  },
  {
    slug: "paul-keranne",
    category: "DJ",
    title: "Paul Keranne",
    description: "Un press kit DJ avec médias, références et contact booking.",
    href: "/#contact",
    externalDemoUrl: "https://paul-keranne.presskit.fr/",
    image: "/gallery-previews/paul-keranne.png",
    mobileImage: "/gallery-previews/home-mobile/paul-keranne.png",
    imagePosition: "center 42%",
    accent: "#FF9152",
  },
  {
    slug: "coach-performance",
    category: "Photographe",
    title: "Lokko TV",
    description: "Un press kit photographe avec portfolio, services et contact booking.",
    href: "/#contact",
    externalDemoUrl: "https://lokko-tv.vercel.app/",
    image: "/gallery-previews/home-desktop/lokko-tv.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-izzylokko.webp",
    accent: "#D04C57",
  },
  {
    slug: "coach-momar",
    category: "Coach sportif",
    title: "Coach Momar",
    description: "Un press kit coaching avec offres, résultats, méthode et contact.",
    href: "/#contact",
    externalDemoUrl: "https://coach-momar.vercel.app/",
    image: "/gallery-previews/coach-momar.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-coachhmomar.webp",
    imagePosition: "center 52%",
    accent: "#63E6BE",
  },
  {
    slug: "mua-signature",
    category: "Make-up artist",
    title: "Ishma Make Up Artist",
    description: "Un press kit make-up artist avec looks, prestations et contact.",
    href: "/#contact",
    externalDemoUrl: "https://ishma-makeupartist.vercel.app/",
    image: "/makeup.webp",
    mobileImage: "/gallery-previews/home-mobile/Mobile-ishma.webp",
    imagePosition: "center 30%",
    accent: "#FF8DAA",
  },
  {
    slug: "chef-event",
    category: "Chef / Traiteur",
    title: "Chef / Traiteur",
    description: "Un press kit chaleureux et précis pour événements et prestations privées.",
    href: "/#contact",
    accent: "#D7A86E",
  },
];
