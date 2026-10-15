import { siteConfig } from "@/content/site";

export const LEGAL = {
  publisher: "David Mecorvin",
  legalForm: "Entrepreneur individuel (EI, micro-entreprise)",
  tradeName: "PressKit For You",
  siren: "798 970 091",
  address: "17 rue de l'Église, 93800 Épinay-sur-Seine, France",
  email: "contact@presskit.fr",
  phone: siteConfig.phone,
  publicationDirector: "David Mecorvin",
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    contactUrl: "https://vercel.com/contact",
    // TODO: Vercel Inc. phone number, to verify on vercel.com (not published on its legal pages). Hidden until filled.
    phone: "[À COMPLÉTER : téléphone de Vercel Inc.]",
  },
  depositPercent: 50,
  revisionRounds: 5,
  deliveryDays: 7,
};

// Médiateur de la consommation (art. L612-1 du Code de la consommation).
// Tant que `name` est vide, les blocs « Médiation » des CGV et des mentions légales ne s'affichent pas.
export const mediator = {
  name: "",
  address: "",
  website: "",
};

export { VAT_MENTION } from "@/lib/vat";
