import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Manrope } from "next/font/google";

import { CTA, siteConfig } from "@/content/site";
import { LEGAL } from "@/lib/legal";
import { absoluteUrl, socialImage, twitterImage } from "@/lib/seo";
import "@/app/globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ClickTracking } from "@/components/layout/click-tracking";
import { MotionProvider } from "@/components/layout/motion-provider";

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
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: LEGAL.publisher,
      url: siteConfig.url,
      logo: absoluteUrl("logo/logo-presskitforyou-cropped.png"),
      email: LEGAL.email,
      telephone: "+33663907888",
      areaServed: "FR",
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
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={sans.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
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
        <MotionProvider>
          <div className="relative min-h-screen">
            {/* Sentinelle observée par l'en-tête : au-delà de 80 px de scroll, l'en-tête se compacte. */}
            <div id="header-sentinel" aria-hidden="true" className="pointer-events-none absolute left-0 top-0 h-20 w-px" />
            <SiteHeader />
            <main id="main-content">{children}</main>
            <SiteFooter />
          </div>
        </MotionProvider>
        <Analytics />
        <ClickTracking primaryLabel={CTA.primary} quoteUrl={siteConfig.whatsappQuoteUrl} adviceUrl={siteConfig.whatsappAdviceUrl} />
      </body>
    </html>
  );
}
