import { PageShell } from "@/components/layout/page-shell";

export type LegalSection = {
  title: string;
  paragraphs?: string[];
  items?: string[];
};

type LegalDocumentProps = {
  title: string;
  updatedAt: string;
  intro?: string;
  sections: LegalSection[];
  annex?: { title: string; paragraphs: string[] };
};

export function LegalDocument({ title, updatedAt, intro, sections, annex }: LegalDocumentProps) {
  return (
    <section className="section-wash relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(255,255,255,0.055),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(255,255,255,0.04),transparent_18%)]"
        aria-hidden="true"
      />
      <PageShell className="relative max-w-4xl">
        <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] tracking-tighter2 text-white md:text-5xl">{title}</h1>
        <p className="mt-4 text-sm text-white/[0.64]">Dernière mise à jour : {updatedAt}</p>
        {intro ? <p className="mt-6 leading-8 text-white/[0.74]">{intro}</p> : null}

        <div className="mt-10 grid gap-8 border-y border-white/[0.12] py-8 text-white/[0.74]">
          {sections.map((section, index) => (
            <section key={section.title} className="overflow-visible">
              <h2 className="text-2xl font-semibold tracking-tighter2 text-white">
                {index + 1}. {section.title}
              </h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8">
                  {paragraph}
                </p>
              ))}
              {section.items ? (
                <ul className="mt-4 list-disc space-y-2 pl-5 leading-8">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          {annex ? (
            <section id="annexe" className="overflow-visible">
              <h2 className="text-2xl font-semibold tracking-tighter2 text-white">{annex.title}</h2>
              {annex.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 leading-8">
                  {paragraph}
                </p>
              ))}
            </section>
          ) : null}
        </div>
      </PageShell>
    </section>
  );
}
