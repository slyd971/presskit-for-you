import { BenefitsGrid } from "@/components/marketing/benefits-grid";
import { CategoriesGrid } from "@/components/marketing/categories-grid";
import { FinalCta } from "@/components/marketing/final-cta";
import { Hero } from "@/components/marketing/hero";
import { ProcessTimeline } from "@/components/marketing/process-timeline";
import { SocialProof } from "@/components/marketing/social-proof";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BenefitsGrid />
      <CategoriesGrid />
      <ProcessTimeline />
      <SocialProof />
      <FinalCta />
    </>
  );
}
