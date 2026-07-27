import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";

import { siteConfig } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";
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
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PressKit For You - press kits digitaux premium",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PressKit For You",
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
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
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
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
      url: absoluteUrl("contact"),
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
