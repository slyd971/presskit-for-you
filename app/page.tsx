import type { Metadata } from "next";

import { CategoriesGrid } from "@/components/marketing/categories-grid";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { ComparisonSection } from "@/components/marketing/home-conversion-sections";
import { PricingTable } from "@/components/marketing/pricing-table";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { ProofStats, SocialProof } from "@/components/marketing/social-proof";
import { createPageMetadata } from "@/lib/seo";

const homeMetadata = createPageMetadata({
  title: "Press kit digital premium pour artistes et créateurs",
  description:
    "Crée un press kit digital premium : ton activité, tes contenus et tes références en un lien, plus clair qu'Instagram et plus impactant qu'un PDF.",
  keywords: [
    "press kit digital",
    "creation press kit artiste",
    "press kit dj",
    "site vitrine artiste",
    "portfolio photographe premium",
    "site make up artist",
  ],
});

export const metadata: Metadata = {
  ...homeMetadata,
  title: { absolute: "Press kit digital premium pour artistes | PressKit For You" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStats />
      <ComparisonSection />
      <CategoriesGrid />
      <PricingTable variant="highlight" />
      <ProcessTimeline />
      <SocialProof />
      <Faq />
      <FinalCta />
    </>
  );
}
