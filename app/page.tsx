import type { Metadata } from "next";

import { BenefitsGrid } from "@/components/marketing/benefits-grid";
import { CategoriesGrid } from "@/components/marketing/categories-grid";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { PricingTable } from "@/components/marketing/pricing-table";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { SocialProof } from "@/components/marketing/social-proof";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Press kits digitaux premium pour artistes, DJs et independants",
  description:
    "Creation de press kits digitaux premium pour artistes, DJs, photographes, make-up artists et independants qui veulent une presentation claire et orientee conversion.",
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
      <BenefitsGrid />
      <CategoriesGrid />
      <PricingTable variant="highlight" />
      <ProcessTimeline />
      <SocialProof />
      <FinalCta />
    </>
  );
}
