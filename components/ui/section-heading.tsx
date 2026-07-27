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
    <div className={align === "center" ? "mx-auto w-full max-w-[17.5rem] text-center min-[375px]:max-w-[20rem] sm:max-w-3xl" : "w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl"}>
      <Badge>{eyebrow}</Badge>
      <h2 id={id} className="mt-6 max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">{description}</p>
    </div>
  );
}
