import type { Metadata } from "next";

import { CategoriesGrid } from "@/components/marketing/categories-grid";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { ComparisonSection } from "@/components/marketing/home-conversion-sections";
import { PositioningQuote } from "@/components/marketing/positioning-quote";
import { PricingTable } from "@/components/marketing/pricing-table";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { ProofStats, SocialProof } from "@/components/marketing/social-proof";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Une vitrine premium en un lien pour artistes, créateurs et indépendants",
  description:
    "Présentez votre activité, vos contenus et vos références dans une expérience premium plus claire qu'Instagram, plus impactante qu'un PDF et prête à partager.",
  keywords: [
    "press kit digital",
    "creation press kit artiste",
    "press kit dj",
    "site vitrine artiste",
    "portfolio photographe premium",
    "site make up artist",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PositioningQuote />
      <ProofStats />
      <ComparisonSection />
      <CategoriesGrid />
      <PricingTable variant="highlight" />
      <ProcessTimeline />
      <SocialProof />
      <FinalCta />
    </>
  );
}
