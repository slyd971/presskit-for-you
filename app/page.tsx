import type { Metadata } from "next";

import { CategoriesGrid } from "@/components/marketing/categories-grid";
import { Faq } from "@/components/marketing/faq";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { ComparisonSection } from "@/components/marketing/home-conversion-sections";
import { MetiersLinks } from "@/components/marketing/metiers-links";
import { PricingTable } from "@/components/marketing/pricing-table";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { ProofStats, SocialProof } from "@/components/marketing/social-proof";
import { PageJsonLd } from "@/components/seo/page-json-ld";
import { getPreviewAssets } from "@/lib/preview-assets";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Press kit digital premium pour artistes",
  absoluteTitle: "Press kit digital premium pour artistes | PressKit For You",
  description:
    "Ton press kit digital premium, conçu pour toi : ton activité, tes contenus et tes références en un lien, plus clair qu'Instagram et plus impactant qu'un PDF.",
});

export default function HomePage() {
  return (
    <>
      <PageJsonLd name="PressKit For You" description={siteConfig.description} />
      <Hero />
      <ProofStats />
      <ComparisonSection />
      <CategoriesGrid previewAssets={getPreviewAssets()} />
      <MetiersLinks id="metiers-title" title="Un press kit pensé pour ton métier" />
      <PricingTable variant="highlight" showDetailsLink />
      <ProcessTimeline />
      <SocialProof />
      <Faq />
      <FinalCta />
    </>
  );
}
