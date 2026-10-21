import Link from "next/link";
import type { Metadata } from "next";

import { PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section className="py-24">
      <PageShell className="max-w-3xl text-center">
        <p className="text-sm uppercase tracking-label text-white/[0.64]">404</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tighter2 text-white">
          Cette page n’existe pas encore.
        </h1>
        <p className="mt-5 text-lg leading-8 text-white/[0.64]">
          Reviens vers l’accueil ou explore les exemples disponibles.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-lg border border-white/[0.12] bg-white/[0.055] px-5 py-3 text-sm text-white"
        >
          Retour à l’accueil
        </Link>
      </PageShell>
    </section>
  );
}
