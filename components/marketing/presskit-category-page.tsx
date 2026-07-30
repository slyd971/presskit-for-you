import type { Category } from "@/content/site";
import { CategoryContent } from "@/components/marketing/category-content";
import { CategoryHero } from "@/components/marketing/category-hero";
import { FinalCta } from "@/components/marketing/final-cta";

type PresskitCategoryPageProps = {
  category: Category;
};

export function PresskitCategoryPage({ category }: PresskitCategoryPageProps) {
  return (
    <>
      <CategoryHero category={category} />
      <CategoryContent category={category} />
      <FinalCta />
    </>
  );
}
