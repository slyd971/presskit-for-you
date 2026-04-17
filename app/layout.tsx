import type { Metadata } from "next";
import { Manrope, Cormorant_Garamond } from "next/font/google";

import { siteConfig } from "@/content/site";
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
  title: {
    default: "Press kits digitaux premium | PressKit Studio",
    template: "%s | PressKit Studio",
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
    title: "PressKit Studio",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "PressKit Studio",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PressKit Studio",
    description: siteConfig.description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
