import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Badge>{eyebrow}</Badge>
      <h2 id={id} className="mt-6 text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.68] md:text-lg">{description}</p>
    </div>
  );
}
