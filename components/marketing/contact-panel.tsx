"use client";

import { Mail, Phone } from "lucide-react";
import { useState } from "react";

import {
  budgetOptions,
  deadlineOptions,
  goalOptions,
  hasContactFormErrors,
  initialContactFormValues,
  pressKitOptions,
  profileOptions,
  type ContactFormErrors,
  type ContactFormField,
  type ContactFormValues,
  validateContactForm,
} from "@/lib/contact-form";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type SubmitState =
  | { status: "idle"; message: "" }
  | { status: "success"; message: string }
  | { status: "error"; message: string };

const fieldBaseClassName =
  "w-full rounded-2xl border border-white/10 bg-[#0d1016] px-4 py-3 text-white outline-none transition placeholder:text-white/28 focus:border-white/20 focus:bg-[#11151d]";

type FieldProps = {
  id: ContactFormField;
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
};

function Field({ id, label, error, required, children }: FieldProps) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="text-sm text-white/72">
        {label}
        {required ? <span className="ml-1 text-white/42">*</span> : null}
      </label>
      {children}
      <p id={`${id}-error`} className={cn("text-xs text-[#ffb4b4]", !error && "invisible")}>
        {error ?? " "}
      </p>
    </div>
  );
}

function SelectField({
  id,
  label,
  value,
  options,
  placeholder,
  error,
  onChange,
}: {
  id: ContactFormField;
  label: string;
  value: string;
  options: readonly string[];
  placeholder: string;
  error?: string;
  onChange: (field: ContactFormField, value: string) => void;
}) {
  return (
    <Field id={id} label={label} error={error} required>
      <select
        id={id}
        value={value}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-error`}
        className={cn(fieldBaseClassName, !value && "text-white/38")}
        onChange={(event) => onChange(id, event.target.value)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#0d1016] text-white">
            {option}
          </option>
        ))}
      </select>
    </Field>
  );
}

export function ContactPanel() {
  const [values, setValues] = useState<ContactFormValues>(initialContactFormValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: ContactFormField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });
    if (submitState.status !== "idle") {
      setSubmitState({ status: "idle", message: "" });
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validateContactForm(values);
    if (hasContactFormErrors(validationErrors)) {
      setErrors(validationErrors);
      setSubmitState({
        status: "error",
        message: "Merci de corriger les champs indiqués avant d’envoyer ta demande.",
      });
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setSubmitState({ status: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        errors?: ContactFormErrors;
      };

      if (!response.ok || !result.ok) {
        setErrors(result.errors ?? {});
        setSubmitState({
          status: "error",
          message:
            result.message ?? "Impossible d’envoyer la demande pour le moment. Réessaie plus tard.",
        });
        return;
      }

      setValues(initialContactFormValues);
      setSubmitState({
        status: "success",
        message: result.message ?? "Ta demande a bien été envoyée.",
      });
    } catch {
      setSubmitState({
        status: "error",
        message: "Une erreur est survenue pendant l’envoi. Réessaie dans un instant.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-16 md:py-20" aria-labelledby="contact-panel-title">
      <PageShell className="grid gap-6 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="lg:pr-6">
          <div className="max-w-2xl">
            <p id="contact-panel-title" className="text-xs font-semibold uppercase tracking-[0.24em] text-white/[0.46]">
              Prochaine etape
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.04] tracking-tighter2 text-white md:text-4xl">
              Un brief simple suffit pour lancer le bon niveau de press kit.
            </h2>
            <p className="mt-4 text-base leading-7 text-white/[0.68]">
              Tu remplis l’essentiel, on clarifie rapidement le besoin, puis on te guide vers la bonne formule et la bonne direction.
            </p>
          </div>
          <div className="mt-8 grid gap-3">
            <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-white/72">
              <Mail className="h-4 w-4 text-white/54" aria-hidden="true" />
              hello@presskitstudio.fr
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-white/72">
              <Phone className="h-4 w-4 text-white/54" aria-hidden="true" />
              +33 6 12 45 88 10
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-white/72">
              <span className="h-px w-4 bg-white/30" aria-hidden="true" />
              Reponse rapide, brief simple, accompagnement clair.
            </div>
          </div>
          <div className="mt-8 rounded-[1.8rem] bg-white/[0.03] p-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-white/44">
              Ce qu’on cadre ensemble
            </p>
            <ul className="mt-4 grid gap-3 text-sm leading-7 text-white/66">
              <li>Ton métier, ton objectif et le type de page dont tu as besoin</li>
              <li>La direction visuelle recherchée et l’univers à installer</li>
              <li>Le bon niveau de prestation selon ton délai et ton budget</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 md:p-8">
          <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 md:grid-cols-2">
              <Field id="lastName" label="Nom" error={errors.lastName} required>
                <input
                  id="lastName"
                  name="lastName"
                  autoComplete="family-name"
                  value={values.lastName}
                  onChange={(event) => updateField("lastName", event.target.value)}
                  aria-invalid={Boolean(errors.lastName)}
                  aria-describedby="lastName-error"
                  className={fieldBaseClassName}
                  placeholder="Ton nom"
                />
              </Field>
              <Field id="firstName" label="Prénom" error={errors.firstName} required>
                <input
                  id="firstName"
                  name="firstName"
                  autoComplete="given-name"
                  value={values.firstName}
                  onChange={(event) => updateField("firstName", event.target.value)}
                  aria-invalid={Boolean(errors.firstName)}
                  aria-describedby="firstName-error"
                  className={fieldBaseClassName}
                  placeholder="Ton prénom"
                />
              </Field>
            </div>

            <Field id="stageName" label="Nom de scène" error={errors.stageName} required>
              <input
                id="stageName"
                name="stageName"
                value={values.stageName}
                onChange={(event) => updateField("stageName", event.target.value)}
                aria-invalid={Boolean(errors.stageName)}
                aria-describedby="stageName-error"
                className={fieldBaseClassName}
                placeholder="Ton nom de scène, nom public ou nom de marque"
              />
            </Field>

            <div className="grid gap-4 md:grid-cols-2">
              <Field id="email" label="Email" error={errors.email} required>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby="email-error"
                  className={fieldBaseClassName}
                  placeholder="nom@email.com"
                />
              </Field>
              <Field id="phone" label="Téléphone / WhatsApp" error={errors.phone}>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby="phone-error"
                  className={fieldBaseClassName}
                  placeholder="+33 6 00 00 00 00"
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field id="city" label="Ville" error={errors.city}>
                <input
                  id="city"
                  name="city"
                  autoComplete="address-level2"
                  value={values.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby="city-error"
                  className={fieldBaseClassName}
                  placeholder="Paris, Lyon, Marseille..."
                />
              </Field>
              <Field
                id="activityName"
                label="Nom de l’activité / projet / marque"
                error={errors.activityName}
                required
              >
                <input
                  id="activityName"
                  name="activityName"
                  autoComplete="organization"
                  value={values.activityName}
                  onChange={(event) => updateField("activityName", event.target.value)}
                  aria-invalid={Boolean(errors.activityName)}
                  aria-describedby="activityName-error"
                  className={fieldBaseClassName}
                  placeholder="Nom de ton activité ou projet"
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                id="jobTitle"
                label="Métier"
                value={values.jobTitle}
                options={profileOptions}
                placeholder="Choisir un métier"
                error={errors.jobTitle}
                onChange={updateField}
              />
              <SelectField
                id="pressKitType"
                label="Type de press kit recherché"
                value={values.pressKitType}
                options={pressKitOptions}
                placeholder="Choisir un format"
                error={errors.pressKitType}
                onChange={updateField}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                id="mainGoal"
                label="Objectif principal"
                value={values.mainGoal}
                options={goalOptions}
                placeholder="Choisir un objectif"
                error={errors.mainGoal}
                onChange={updateField}
              />
              <Field id="visualStyle" label="Univers / style recherché" error={errors.visualStyle} required>
                <input
                  id="visualStyle"
                  name="visualStyle"
                  value={values.visualStyle}
                  onChange={(event) => updateField("visualStyle", event.target.value)}
                  aria-invalid={Boolean(errors.visualStyle)}
                  aria-describedby="visualStyle-error"
                  className={fieldBaseClassName}
                  placeholder="Éditorial, nightlife, clean, luxe, minimal…"
                />
              </Field>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <SelectField
                id="deadline"
                label="Deadline"
                value={values.deadline}
                options={deadlineOptions}
                placeholder="Choisir une deadline"
                error={errors.deadline}
                onChange={updateField}
              />
              <SelectField
                id="budget"
                label="Budget"
                value={values.budget}
                options={budgetOptions}
                placeholder="Choisir un budget"
                error={errors.budget}
                onChange={updateField}
              />
            </div>

            <Field id="message" label="Message libre" error={errors.message}>
              <textarea
                id="message"
                name="message"
                value={values.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={Boolean(errors.message)}
                aria-describedby="message-error"
                className={cn(fieldBaseClassName, "min-h-36 resize-y")}
                placeholder="Décris ton besoin, ce que tu veux mettre en avant, ou ce que tu veux éviter."
              />
            </Field>

            <div className="grid gap-4 pt-1">
              <p className="text-xs leading-6 text-white/45">
                En envoyant ce formulaire, tu partages uniquement les informations utiles pour cadrer ton projet.
              </p>

              {submitState.status !== "idle" ? (
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm",
                    submitState.status === "success"
                      ? "bg-[#153022] text-[#d5f8e5]"
                      : "bg-[#31191b] text-[#ffd8d8]",
                  )}
                >
                  {submitState.message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 hover:bg-[#f2f2f2] disabled:cursor-not-allowed disabled:opacity-65"
              >
                {isSubmitting ? "Envoi en cours..." : "Recevoir un retour rapide"}
              </button>
            </div>
          </form>
        </div>
      </PageShell>
    </section>
  );
}
