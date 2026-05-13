import Link from "next/link";

import { PageShell } from "@/components/layout/page-shell";

export default function NotFound() {
  return (
    <section className="py-24">
      <PageShell className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-[0.28em] text-white/45">404</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white">
          Cette page n’existe pas encore.
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/68">
          Reviens vers l’accueil ou explore les catégories de press kits disponibles.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm text-white"
        >
          Retour à l’accueil
        </Link>
      </PageShell>
    </section>
  );
}
