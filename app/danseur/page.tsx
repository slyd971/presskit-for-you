import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PresskitCategoryPage } from "@/components/marketing/presskit-category-page";
import { createPresskitCategoryMetadata, getPresskitCategory } from "@/lib/presskit-categories";

const slug = "danseur";

export const metadata: Metadata = createPresskitCategoryMetadata(slug);

export default function DanseurPage() {
  const category = getPresskitCategory(slug);

  if (!category) {
    notFound();
  }

  return <PresskitCategoryPage category={category} />;
}
