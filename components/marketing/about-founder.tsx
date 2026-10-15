import { existsSync } from "node:fs";
import path from "node:path";

import Image from "next/image";

import { PageShell } from "@/components/layout/page-shell";
import { examples, founder, isFilled, liveExamplesCount } from "@/content/site";

const normalize = (value: string) => value.trim().toLowerCase();

function findFounderExample() {
  if (!isFilled(founder.stageName)) return null;
  return examples.find((example) => example.externalDemoUrl && normalize(example.title) === normalize(founder.stageName)) ?? null;
}

export function AboutFounder() {
  const hasPhoto = existsSync(path.join(process.cwd(), "public", founder.photo));
  const hasStageName = isFilled(founder.stageName);
  const hasBio = isFilled(founder.bio);
  const founderExample = findFounderExample();
  const landmarks = [
    `${liveExamplesCount} press kits livrés`,
    "Brief en rendez-vous en Île-de-France ou en visio",
    "Paiement unique, sans abonnement",
  ];

  return (
    <section className="section-divider section-wash relative overflow-hidden py-14 md:py-24" aria-labelledby="about-title">
      <PageShell className="relative">
        <div className="mx-auto max-w-4xl">
          <h2 id="about-title" className="max-w-xl text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-5xl">
            Fait pour toi, par quelqu&apos;un de la scène
          </h2>
          <div className="mt-7 grid grid-cols-[5rem_1fr] items-center gap-x-5 gap-y-4 md:mt-10 md:grid-cols-[11rem_1fr] md:items-start md:gap-x-8 md:gap-y-3">
            <div className="relative aspect-square overflow-hidden rounded-lg border border-white/[0.12] bg-white/[0.045] md:row-span-2">
              {hasPhoto ? (
                <Image src={founder.photo} alt={`${founder.firstName}, fondateur de PressKit For You`} fill sizes="(min-width: 768px) 11rem, 5rem" className="object-cover object-center" />
              ) : (
                <span className="flex h-full w-full items-center justify-center text-3xl font-semibold text-white/[0.64]" aria-hidden="true">
                  {founder.firstName.charAt(0)}
                </span>
              )}
            </div>
            <div className="min-w-0 md:col-start-2">
              <p className="text-xl font-semibold leading-tight tracking-tighter2 text-white md:text-2xl">
                {founder.firstName}
                {hasStageName ? <span className="text-white/[0.64]"> · {founder.stageName}</span> : null}
              </p>
              {founderExample ? (
                <a
                  href={founderExample.externalDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-white/[0.72] underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
                >
                  Voir mon press kit
                </a>
              ) : null}
            </div>
            {hasBio ? <p className="col-span-2 text-sm leading-6 text-white/[0.72] md:col-span-1 md:col-start-2 md:text-base md:leading-8">{founder.bio}</p> : null}
          </div>
          <ul className="mt-7 grid gap-3 border-y border-white/[0.12] py-5 sm:grid-cols-3 sm:gap-6 md:mt-10">
            {landmarks.map((landmark) => (
              <li key={landmark} className="flex items-start gap-3 text-sm font-medium leading-6 text-white/[0.84]">
                <span className="mt-3 h-px w-4 shrink-0 bg-steel" aria-hidden="true" />
                <span>{landmark}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageShell>
    </section>
  );
}
