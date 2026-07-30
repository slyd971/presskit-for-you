import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";

import { siteConfig } from "@/content/site";
import { publishedPresskitCategories } from "@/lib/presskit-categories";
import { absoluteUrl, socialImage, twitterImage } from "@/lib/seo";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "PressKit For You",
  alternates: {
    canonical: siteConfig.url,
  },
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      inLanguage: "fr-FR",
      description: siteConfig.description,
      hasPart: [
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
        ...publishedPresskitCategories.map((category) => ({
          "@type": "WebPage",
          "@id": `${siteConfig.url}/${category.slug}#webpage`,
          url: `${siteConfig.url}/${category.slug}`,
          name: category.name,
          description: category.heroDescription,
        })),
      ],
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/#webpage`,
      url: siteConfig.url,
      name: "PressKit For You",
      description: siteConfig.description,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#service`,
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/exemples#webpage`,
      url: `${siteConfig.url}/exemples`,
      name: "Exemples de press kits",
      description: "Exemples réels de press kits digitaux déjà en ligne.",
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#service`,
      },
    },
    ...publishedPresskitCategories.map((category) => ({
      "@type": "WebPage",
      "@id": `${siteConfig.url}/${category.slug}#webpage`,
      url: `${siteConfig.url}/${category.slug}`,
      name: category.name,
      description: category.heroDescription,
      isPartOf: {
        "@id": `${siteConfig.url}/#website`,
      },
      about: {
        "@id": `${siteConfig.url}/#service`,
      },
    })),
    {
      "@type": "SiteNavigationElement",
      "@id": `${siteConfig.url}/#navigation-exemples`,
      name: "Exemples",
      url: `${siteConfig.url}/exemples`,
    },
    ...publishedPresskitCategories.map((category) => ({
      "@type": "SiteNavigationElement",
      "@id": `${siteConfig.url}/#navigation-${category.slug}`,
      name: category.name,
      url: `${siteConfig.url}/${category.slug}`,
    })),
    {
      "@type": "Service",
      "@id": `${siteConfig.url}/#service`,
      serviceType: "Creation de press kits digitaux premium",
      name: "Creation de press kits digitaux premium",
      description: siteConfig.description,
      provider: {
        "@id": `${siteConfig.url}/#organization`,
      },
      areaServed: "FR",
      url: absoluteUrl("#contact"),
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
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
      </body>
    </html>
  );
}
