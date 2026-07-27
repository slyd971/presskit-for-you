import { Category } from "@/content/site";
import { Button } from "@/components/ui/button";
import { PageShell } from "@/components/layout/page-shell";

type CategoryHeroProps = {
  category: Category;
};

export function CategoryHero({ category }: CategoryHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b0e14,rgba(11,14,20,0.92))]" />
      <PageShell className="relative grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white md:text-7xl">
            {category.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">{category.heroDescription}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/#contact">Demander mon press kit</Button>
            <Button href="/galerie" variant="secondary">
              Voir les exemples
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-soft">
          <div
            className={`rounded-lg bg-gradient-to-br ${category.gradient} p-3 ring-1 ring-inset ring-white/10 md:p-4`}
          >
            <div className="rounded-lg border border-white/10 bg-[#10141b]/80 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-white/48">Preview structure</p>
              <div className="mt-6 grid gap-4">
                <div className="rounded-lg border border-white/8 bg-white/[0.04] p-4">
                  <p className="text-sm text-white/46">Audience</p>
                  <p className="mt-2 text-lg text-white">{category.audience}</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  {category.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg border border-white/8 bg-white/[0.03] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-white/42">{stat.label}</p>
                      <p className="mt-2 text-sm leading-6 text-white/78">{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
