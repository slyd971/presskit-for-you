"use client";

import { Mail, MessageCircle } from "lucide-react";
import { useState, type ReactNode } from "react";

import { siteConfig, whatsappLink } from "@/content/site";
import { cn } from "@/lib/utils";

type BriefFormProps = {
  titleId: string;
  title: string;
  description: string;
  metiers: string[];
  formules: string[];
  defaultMetier?: string;
};

// Numéro et libellé d'une étape (micro-label de la charte).
function StepLabel({ step, children }: { step: number; children: ReactNode }) {
  return (
    <span className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-label text-text-muted-light">
      <span className="grid h-6 w-6 place-items-center rounded-md border border-ink-editorial/[0.24] tracking-normal text-ink-editorial">{step}</span>
      {children}
    </span>
  );
}

type ChoiceGroupProps = {
  step: number;
  legend: string;
  name: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
};

// Boutons radio natifs (clavier compris). Sur mobile : rail horizontal jusqu'aux bords du panneau.
function ChoiceGroup({ step, legend, name, options, value, onChange }: ChoiceGroupProps) {
  return (
    <fieldset className="min-w-0">
      <legend>
        <StepLabel step={step}>{legend}</StepLabel>
      </legend>
      <div className="-mx-5 mt-3 flex gap-2 overflow-x-auto px-5 py-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 [&::-webkit-scrollbar]:hidden">
        {options.map((option) => (
          <label key={option} className="relative shrink-0 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="peer absolute inset-0 cursor-pointer opacity-0"
            />
            <span className="inline-flex min-h-11 items-center rounded-lg border border-ink-editorial/[0.24] bg-white px-4 text-sm font-semibold text-ink-editorial transition-colors duration-hover ease-presskit hover:border-ink-editorial peer-checked:border-ink-editorial peer-checked:bg-ink-editorial peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink-editorial">
              {option}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

// Panneau de contact : compose le message WhatsApp (ou l'e-mail) à partir des choix.
// Rien n'est envoyé ni enregistré par le site.
export function BriefForm({ titleId, title, description, metiers, formules, defaultMetier = "" }: BriefFormProps) {
  const [metier, setMetier] = useState(metiers.includes(defaultMetier) ? defaultMetier : "");
  const [formule, setFormule] = useState("");
  const [name, setName] = useState("");

  const fields = [
    { label: "Métier", value: metier },
    { label: "Formule", value: formule },
    { label: "Nom ou Instagram", value: name.trim() },
  ];
  const lines = fields.filter((field) => field.value).map((field) => `${field.label} : ${field.value}`);
  const message = ["Salut, je voudrais un press kit.", ...lines].join("\n");

  // Aucun choix : liens habituels du site.
  const whatsappHref = lines.length > 0 ? whatsappLink(message) : siteConfig.whatsappUrl;
  const mailHref =
    lines.length > 0
      ? `mailto:contact@presskit.fr?subject=${encodeURIComponent("Demande de press kit")}&body=${encodeURIComponent(message)}`
      : "mailto:contact@presskit.fr";

  return (
    <div className="text-ink-editorial">
      <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-start lg:gap-16">
        <div className="min-w-0">
          <h2 id={titleId} className="max-w-xl text-4xl font-semibold leading-[1.04] tracking-tighter2 text-ink-editorial md:text-6xl md:leading-[1.04]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-text-secondary-light md:mt-5 md:text-lg md:leading-8">{description}</p>

          <div className="mt-8 grid min-w-0 grid-cols-[minmax(0,1fr)] border-b border-ink-editorial/[0.12] md:mt-12 [&>*]:min-w-0 [&>*]:border-t [&>*]:border-ink-editorial/[0.12] [&>*]:py-6 md:[&>*]:py-7">
            <div>
              <ChoiceGroup step={1} legend="Ton métier" name="metier" options={metiers} value={metier} onChange={setMetier} />
            </div>
            <div>
              <ChoiceGroup step={2} legend="La formule" name="formule" options={formules} value={formule} onChange={setFormule} />
            </div>
            <div>
              <label htmlFor="brief-name">
                <StepLabel step={3}>Ton nom ou ton Instagram</StepLabel>
              </label>
              <input
                id="brief-name"
                type="text"
                value={name}
                maxLength={60}
                autoComplete="off"
                onChange={(event) => setName(event.target.value)}
                placeholder="@ton_compte"
                className="mt-3 block min-h-12 w-full rounded-lg border border-ink-editorial/[0.24] bg-white px-4 text-base text-ink-editorial transition-colors duration-hover ease-presskit placeholder:text-text-muted-light hover:border-ink-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-editorial"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full min-w-0 flex-col rounded-lg bg-[linear-gradient(160deg,var(--surface-760),var(--surface-900)_62%)] p-4 text-white shadow-panel sm:p-0 lg:sticky lg:top-28">
          <div className="hidden items-center gap-3 border-b border-white/[0.12] px-5 py-4 sm:flex">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-white/[0.18] text-sm font-semibold tracking-tighter2" aria-hidden="true">
              PK
            </span>
            <p className="min-w-0 text-sm font-semibold leading-5">{siteConfig.name}</p>
          </div>

          {/* Aperçu du message (sous les boutons sur mobile) : les champs vides restent visibles en gris, mais ne sont pas envoyés. */}
          <div className="order-last mt-6 flex flex-col gap-4 sm:order-none sm:mt-0 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-label text-white/[0.64]">Aperçu de ton message</p>
            <div className="rounded-lg rounded-br-sm bg-paper px-5 py-4 text-[15px] leading-7 text-ink-editorial">
              <p>Salut, je voudrais un press kit.</p>
              <ul className="mt-2 border-t border-ink-editorial/[0.12] pt-2">
                {fields.map((field) => (
                  <li key={field.label} className={cn("break-words", field.value ? "font-semibold" : "text-text-muted-light")}>
                    {field.label} : {field.value || "…"}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="sm:border-t sm:border-white/[0.12] sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="button-cycle cta-shine inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-whatsapp bg-whatsapp px-2 py-[1.125rem] text-base font-semibold text-whatsapp-ink hover:border-whatsapp-hover hover:bg-whatsapp-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Écrire sur WhatsApp
              </a>
              <a
                href={mailHref}
                className="button-cycle cta-shine inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-lg border border-steel bg-white/[0.04] px-2 py-[1.125rem] text-base font-semibold text-white hover:border-white hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Envoyer un e-mail
              </a>
            </div>
            <p className="mt-4 text-center text-xs leading-5 text-white/[0.64]">Tu peux modifier le message avant de l’envoyer.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
