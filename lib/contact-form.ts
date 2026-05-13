export const profileOptions = [
  "DJ",
  "Artiste / chanteur",
  "Photographe",
  "Vidéaste",
  "Créateur de contenu",
  "Coach sportif",
  "Make up artist",
  "Chef / traiteur",
  "Entrepreneur",
  "Freelance",
  "Marque",
  "Autre",
] as const;

export const pressKitOptions = [
  "Press kit simple / one page",
  "Press kit premium",
  "Portfolio pro",
  "Site vitrine",
  "Je ne sais pas encore",
] as const;

export const goalOptions = [
  "Trouver des clients",
  "Trouver des bookings",
  "Démarcher des marques",
  "Présenter mon activité proprement",
  "Avoir une image plus premium",
  "Centraliser mes contenus",
  "Autre",
] as const;

export const deadlineOptions = [
  "Le plus vite possible",
  "Sous 7 jours",
  "Sous 2 semaines",
  "Sous 1 mois",
  "Pas de deadline précise",
] as const;

export const budgetOptions = [
  "Moins de 200€",
  "200€ à 300€",
  "300€ à 500€",
  "500€+",
  "Je préfère en discuter",
] as const;

export type ContactFormValues = {
  lastName: string;
  firstName: string;
  stageName: string;
  email: string;
  phone: string;
  city: string;
  activityName: string;
  jobTitle: string;
  pressKitType: string;
  mainGoal: string;
  visualStyle: string;
  deadline: string;
  budget: string;
  message: string;
};

export type ContactFormField = keyof ContactFormValues;
export type ContactFormErrors = Partial<Record<ContactFormField, string>>;

export const initialContactFormValues: ContactFormValues = {
  lastName: "",
  firstName: "",
  stageName: "",
  email: "",
  phone: "",
  city: "",
  activityName: "",
  jobTitle: "",
  pressKitType: "",
  mainGoal: "",
  visualStyle: "",
  deadline: "",
  budget: "",
  message: "",
};

function normalizeValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function normalizeContactFormPayload(payload: Record<string, unknown>): ContactFormValues {
  return {
    lastName: normalizeValue(payload.lastName),
    firstName: normalizeValue(payload.firstName),
    stageName: normalizeValue(payload.stageName),
    email: normalizeValue(payload.email),
    phone: normalizeValue(payload.phone),
    city: normalizeValue(payload.city),
    activityName: normalizeValue(payload.activityName),
    jobTitle: normalizeValue(payload.jobTitle),
    pressKitType: normalizeValue(payload.pressKitType),
    mainGoal: normalizeValue(payload.mainGoal),
    visualStyle: normalizeValue(payload.visualStyle),
    deadline: normalizeValue(payload.deadline),
    budget: normalizeValue(payload.budget),
    message: normalizeValue(payload.message),
  };
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.lastName) {
    errors.lastName = "Le nom est requis.";
  }

  if (!values.firstName) {
    errors.firstName = "Le prénom est requis.";
  }

  if (!values.stageName) {
    errors.stageName = "Le nom de scène est requis.";
  }

  if (!values.email) {
    errors.email = "L’adresse email est requise.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Entre une adresse email valide.";
  }

  if (!values.activityName) {
    errors.activityName = "Le nom de l’activité ou du projet est requis.";
  }

  if (!values.jobTitle) {
    errors.jobTitle = "Choisis un métier.";
  }

  if (!values.pressKitType) {
    errors.pressKitType = "Choisis un type de press kit.";
  }

  if (!values.mainGoal) {
    errors.mainGoal = "Choisis ton objectif principal.";
  }

  if (!values.visualStyle) {
    errors.visualStyle = "Décris l’univers ou le style recherché.";
  }

  if (!values.deadline) {
    errors.deadline = "Choisis une deadline.";
  }

  if (!values.budget) {
    errors.budget = "Choisis un budget.";
  }

  return errors;
}

export function hasContactFormErrors(errors: ContactFormErrors) {
  return Object.keys(errors).length > 0;
}
