import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { categories } from "@/content/site";
import { CategoryContent } from "@/components/marketing/category-content";
import { CategoryHero } from "@/components/marketing/category-hero";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <>
      <CategoryHero category={category} />
      <CategoryContent category={category} />
    </>
  );
}
