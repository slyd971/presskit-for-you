import { Link2 } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PageShell } from "@/components/layout/page-shell";

const kpis = [
  {
    icon: "📸",
    value: "Photos & vidéos",
    label: "Présentez votre univers",
  },
  {
    icon: "📊",
    value: "Chiffres clés",
    label: "Valorisez votre parcours",
  },
  {
    icon: "🤝",
    value: "Références",
    label: "Mettez en avant votre crédibilité",
  },
  {
    icon: "📩",
    value: "Contact direct",
    label: "Transformez les visites en opportunités",
  },
];

const problemCards = [
  {
    icon: "📸",
    title: "Instagram",
    detail: "Bio + posts + stories",
  },
  {
    icon: "📄",
    title: "PDF",
    detail: "Présentation statique",
  },
  {
    icon: "🔗",
    title: "Linktree",
    detail: "Simple liste de liens",
  },
];

const comparisonColumns = [
  {
    icon: "📸",
    title: "Instagram",
    items: [
      "Informations dispersées",
      "Peu adapté aux demandes professionnelles",
      "Pas conçu pour convaincre rapidement",
    ],
  },
  {
    icon: "📄",
    title: "PDF",
    items: ["Statique", "Peu immersif", "Difficile à mettre à jour"],
  },
  {
    icon: "🔗",
    title: "Linktree",
    items: ["Très limité", "Peu personnalisable", "Aucun storytelling"],
  },
  {
    icon: "✨",
    title: "Site Press Kit Premium",
    featured: true,
    items: [
      "Un seul lien",
      "Design premium",
      "Photos et vidéos",
      "Chiffres clés",
      "Références",
      "Contact direct",
      "Expérience immersive",
    ],
  },
];

export function KpiBenefits() {
  return (
    <section className="section-divider py-14 md:py-18" aria-label="Bénéfices clés">
      <PageShell>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((kpi, index) => (
            <Reveal key={kpi.value} delay={index * 0.05} distance={16}>
              <article className="panel-premium h-full rounded-[1.35rem] p-5">
                <p className="text-3xl leading-none" aria-hidden="true">{kpi.icon}</p>
                <p className="mt-5 text-2xl font-semibold leading-none tracking-tighter2 text-white md:text-3xl">{kpi.value}</p>
                <p className="mt-3 text-sm leading-6 text-white/[0.64]">{kpi.label}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}

export function ProblemSection() {
  return (
    <section className="section-divider section-wash overflow-hidden py-24 md:py-28" aria-labelledby="problem-title">
      <PageShell>
        <SectionHeading
          eyebrow="Le problème"
          title="Aujourd'hui, votre image se résume souvent à :"
          description="Des informations dispersées, plusieurs liens, peu de contexte et rarement une expérience réellement professionnelle."
          id="problem-title"
          align="center"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {problemCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.06}>
              <article className="panel-premium rounded-[1.6rem] p-6 text-center">
                <p className="text-4xl" aria-hidden="true">{card.icon}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/[0.58]">{card.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="section-divider py-24 md:py-28" aria-labelledby="comparison-title">
      <PageShell>
        <SectionHeading
          eyebrow="Comparatif"
          title="Pourquoi ne pas simplement utiliser Instagram ?"
          description="Parce qu'un profil social, un PDF ou une liste de liens montre rarement toute la valeur d'une activité au bon niveau."
          id="comparison-title"
        />
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {comparisonColumns.map((column, index) => (
            <Reveal key={column.title} delay={index * 0.05}>
              <article
                className={
                  column.featured
                    ? "panel-premium h-full rounded-[1.7rem] border-white/[0.22] bg-white/[0.07] p-6 shadow-[0_34px_110px_rgba(255,145,82,0.12),0_28px_80px_rgba(0,0,0,0.28),inset_0_1px_0_rgba(255,255,255,0.12)]"
                    : "h-full rounded-[1.7rem] border border-white/[0.09] bg-white/[0.028] p-6"
                }
              >
                <div className="flex items-center gap-3">
                  {column.featured ? (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink">
                      <Link2 className="h-4 w-4" />
                    </span>
                  ) : (
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-base">
                      {column.icon}
                    </span>
                  )}
                  <h3 className="text-xl font-semibold leading-tight text-white">{column.title}</h3>
                </div>
                <ul className="mt-6 space-y-3">
                  {column.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-white/[0.66]">
                      <span className={column.featured ? "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white" : "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/28"} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
