import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";

import { siteConfig } from "@/content/site";
import { pricingOptions, pricingTiers } from "@/content/pricing";
import { LEGAL } from "@/lib/legal";
import { publishedPresskitCategories } from "@/lib/presskit-categories";
import { absoluteUrl, socialImage, twitterImage } from "@/lib/seo";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "PressKit For You",
  title: {
    default: "Press kits digitaux premium | PressKit For You",
    template: "%s | PressKit For You",
  },
  description: siteConfig.description,
  keywords: [
    "press kit digital",
    "site vitrine artiste",
    "press kit dj",
    "press kit coach sportif",
    "press kit photographe",
    "press kit make up artist",
  ],
  openGraph: {
    title: "PressKit For You",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "PressKit For You",
    locale: "fr_FR",
    type: "website",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "PressKit For You",
    description: siteConfig.description,
    images: [twitterImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-presskitforyou-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const webPages = [
  {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/#webpage`,
    url: siteConfig.url,
    name: "PressKit For You",
    description: siteConfig.description,
  },
  {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/exemples#webpage`,
    url: `${siteConfig.url}/exemples`,
    name: "Exemples de press kits",
    description: "Exemples réels de press kits digitaux déjà en ligne.",
  },
  {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/tarifs#webpage`,
    url: `${siteConfig.url}/tarifs`,
    name: "Tarifs PressKit For You",
    description: "Tarifs et formules de création de press kits digitaux premium.",
  },
  {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/mentions-legales#webpage`,
    url: `${siteConfig.url}/mentions-legales`,
    name: "Mentions légales",
    description: "Informations légales, éditeur et contact de PressKit For You.",
  },
  {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/cgv#webpage`,
    url: `${siteConfig.url}/cgv`,
    name: "Conditions générales de prestation",
    description: "Conditions générales de prestation de création de press kits digitaux.",
  },
  {
    "@type": "WebPage",
    "@id": `${siteConfig.url}/politique-de-confidentialite#webpage`,
    url: `${siteConfig.url}/politique-de-confidentialite`,
    name: "Politique de confidentialité",
    description: "Traitement et protection des données personnelles par PressKit For You.",
  },
  ...publishedPresskitCategories.map((category) => ({
    "@type": "WebPage",
    "@id": `${siteConfig.url}/${category.slug}#webpage`,
    url: `${siteConfig.url}/${category.slug}`,
    name: category.name,
    description: category.heroDescription,
  })),
];

const pageNodes = webPages.map((page) => ({
  ...page,
  isPartOf: {
    "@id": `${siteConfig.url}/#website`,
  },
  about: {
    "@id": `${siteConfig.url}/#service`,
  },
}));

const navigationNodes = [
  {
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#navigation-exemples`,
    name: "Exemples",
    url: `${siteConfig.url}/exemples`,
  },
  {
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#navigation-tarifs`,
    name: "Tarifs",
    url: `${siteConfig.url}/tarifs`,
  },
  {
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#navigation-mentions-legales`,
    name: "Mentions légales",
    url: `${siteConfig.url}/mentions-legales`,
  },
  {
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#navigation-cgv`,
    name: "CGV",
    url: `${siteConfig.url}/cgv`,
  },
  {
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#navigation-politique-de-confidentialite`,
    name: "Politique de confidentialité",
    url: `${siteConfig.url}/politique-de-confidentialite`,
  },
  ...publishedPresskitCategories.map((category) => ({
    "@type": "SiteNavigationElement",
    "@id": `${siteConfig.url}/#navigation-${category.slug}`,
    name: category.name,
    url: `${siteConfig.url}/${category.slug}`,
  })),
];

const breadcrumbNodes = [
  ...webPages
    // Trade pages emit their own BreadcrumbList (see PresskitCategoryPage).
    .filter((page) => page.url !== siteConfig.url && !publishedPresskitCategories.some((category) => page.url === `${siteConfig.url}/${category.slug}`))
    .map((page) => ({
      "@type": "BreadcrumbList",
      "@id": `${page.url}#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.name,
          item: page.url,
        },
      ],
    })),
];

const priceFrom = (price: string) => price.match(/\d+/)?.[0];

const offerCatalog = {
  "@type": "OfferCatalog",
  name: "Formules et options PressKit For You",
  itemListElement: [...pricingTiers, ...pricingOptions].flatMap((item) => {
    const amount = priceFrom(item.price);

    if (!amount) {
      return [];
    }

    return [
      {
        "@type": "Offer",
        name: item.name,
        description: item.description,
        priceCurrency: "EUR",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          ...(item.price.includes("partir") ? { minPrice: amount } : { price: amount }),
        },
        url: absoluteUrl("tarifs"),
      },
    ];
  }),
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: LEGAL.publisher,
      url: siteConfig.url,
      logo: absoluteUrl("logo/logo-presskitforyou-cropped.png"),
      email: LEGAL.email,
      telephone: "+33663907888",
      areaServed: "Île-de-France",
      sameAs: ["https://www.instagram.com/presskit_for_you"],
      taxID: LEGAL.siren,
      founder: { "@type": "Person", name: LEGAL.publisher },
      address: {
        "@type": "PostalAddress",
        streetAddress: "17 rue de l'Église",
        postalCode: "93800",
        addressLocality: "Épinay-sur-Seine",
        addressCountry: "FR",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fr-FR",
      description: siteConfig.description,
      hasPart: webPages,
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    ...pageNodes,
    ...navigationNodes,
    ...breadcrumbNodes,
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      serviceType: "Création de press kits digitaux premium",
      name: "Création de press kits digitaux premium",
      description: siteConfig.description,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: "FR",
      hasOfferCatalog: offerCatalog,
      url: absoluteUrl("#contact"),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={sans.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a
          href="#main-content"
          className="absolute left-4 top-4 z-[100] -translate-y-20 rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition focus:translate-y-0"
        >
          Aller au contenu
        </a>
        <div className="relative min-h-screen">
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
