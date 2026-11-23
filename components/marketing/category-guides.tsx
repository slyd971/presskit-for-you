import { PageShell } from "@/components/layout/page-shell";
import type { GuideBlock, GuideSection } from "@/content/category-guides";
import { cn } from "@/lib/utils";

type CategoryGuidesProps = {
  sections: GuideSection[];
};

// Sections longues d'une page métier : titre à gauche, contenu à droite, comme « Que mettre dans un press kit … ? ».
export function CategoryGuides({ sections }: CategoryGuidesProps) {
  return sections.map((section, index) => (
    <section
      key={section.id}
      id={section.id}
      className={cn("section-divider scroll-mt-28 py-20 md:py-28", index % 2 === 0 && "section-tone-lift")}
      aria-labelledby={`${section.id}-title`}
    >
      <PageShell className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <div className="w-full max-w-[17.5rem] min-[375px]:max-w-[20rem] sm:max-w-3xl">
          <h2 id={`${section.id}-title`} className="max-w-full break-words text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
            {section.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/[0.74] md:text-lg">{section.intro}</p>
        </div>
        <div className="min-w-0">
          {section.parts.map((part, partIndex) => (
            <div key={part.title ?? partIndex} className={cn(partIndex > 0 && "mt-8 border-t border-white/[0.12] pt-8")}>
              {part.title ? <h3 className="mb-4 text-xl font-semibold leading-tight text-white md:text-2xl">{part.title}</h3> : null}
              <div className="grid gap-5">
                {part.blocks.map((block, blockIndex) => (
                  <Block key={blockIndex} block={block} />
                ))}
              </div>
            </div>
          ))}
          {section.note ? (
            <p className="mt-8 border-l border-white/[0.18] pl-4 text-sm leading-7 text-white/[0.84] md:text-base md:leading-8">
              {section.note.title ? <strong className="font-semibold text-white">{section.note.title} : </strong> : null}
              {section.note.text}
            </p>
          ) : null}
        </div>
      </PageShell>
    </section>
  ));
}

function Block({ block }: { block: GuideBlock }) {
  if (block.type === "text") {
    return <p className="text-sm leading-7 text-white/[0.74] md:text-base md:leading-8">{block.text}</p>;
  }

  if (block.type === "template") {
    return (
      <div className="grid gap-4 rounded-lg border border-white/[0.12] bg-white/[0.04] p-5 md:p-6">
        {block.paragraphs.map((paragraph) => (
          <p key={paragraph} className="whitespace-pre-line text-sm leading-7 text-white/[0.84] md:text-base">
            {paragraph}
          </p>
        ))}
      </div>
    );
  }

  return (
    <ul className="border-y border-white/[0.12]">
      {block.items.map((item) => (
        <li key={item.description} className="border-b border-white/[0.08] py-4 text-sm leading-6 text-white/[0.74] last:border-b-0">
          {item.title ? <strong className="font-semibold text-white">{item.title} : </strong> : null}
          {item.description}
        </li>
      ))}
    </ul>
  );
}
