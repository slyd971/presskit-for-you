import { categoryOgSize, createCategoryOgImage } from "@/lib/category-og";

export const alt = "Press kit coach-sportif - PressKit For You";
export const size = categoryOgSize;
export const contentType = "image/png";

export default function Image() {
  return createCategoryOgImage("coach-sportif");
}
