import { categoryOgSize, createCategoryOgImage } from "@/lib/category-og";

export const alt = "Press kit organisateur - PressKit For You";
export const size = categoryOgSize;
export const contentType = "image/png";

export default function Image() {
  return createCategoryOgImage("organisateur");
}
