# PressKit For You

Site vitrine de presskit.fr : press kits digitaux premium pour artistes, talents et indépendants. Next.js 16 (App Router), React 19, Tailwind CSS 3, Framer Motion, icônes Lucide.

- `npm run dev` : serveur local sur http://localhost:3000 (pas 127.0.0.1 : Next bloque alors ses ressources de dev et la page ne s'anime plus)
- `npm run lint` : ESLint ; `npx tsc --noEmit` pour les types
- Textes et données : `content/` (`site.ts` pour la config, la nav et les CTA)
- Pages par métier : `app/<metier>/`, construites avec `components/marketing/presskit-category-page.tsx`
- Exemples clients : tableau `examples` de `content/site.ts` ; `liveExamplesCount` donne le nombre de press kits en ligne (ne jamais l'écrire en dur)
- Déploiement : un push sur `main` (github.com/slyd971/presskit-for-you) déclenche le déploiement Vercel

## Rédaction

- CTA : « Demander mon press kit » (`CTA.primary`), « Voir des exemples ». Contact : « Écrire sur WhatsApp » et « Envoyer un e-mail » (`mailto:contact@presskit.fr`).
- `siteConfig.whatsappUrl` contient déjà le message pré-rempli : le réutiliser pour tout lien WhatsApp.
- Délai : « 7 jours », sans « ouvrés », sauf dans les CGV (texte contractuel). Paiement : « 50 % à la commande, 50 % à la livraison ».
- « sur mesure » sans trait d'union ; titres H2 sans point final.
- Devant un nom de client, utiliser `withDe()` de `lib/utils.ts` (« d'Arthur Chaps », « de DJ FLO »).
- Corrections de texte : ne toucher ni aux `className`, ni aux styles, ni au layout, ni aux témoignages clients.

## Design system

Avant toute modification visuelle, lire `design-system/presskit/README.md` : ton, couleurs, typo, mise en page, mockups, motion et logo.

- Utiliser les tokens Tailwind de `tailwind.config.ts` (`bg-surface-900`, `text-paper`, `text-ink-editorial`, `border-steel`, `shadow-panel`, `rounded-mockup-desktop`, `tracking-label`, `duration-hover`, `ease-presskit`…). Ne pas introduire de nouvelle couleur, opacité, ombre ou durée en dur.
- Opacités : uniquement les échelles listées dans la section « Dans le code » du README, toujours entre crochets (`text-white/[0.74]`). Tailwind ignore silencieusement `text-white/72`.
- Valeurs de référence : `design-system/presskit/tokens.json` (variables CSS dans `design-system/presskit/tokens.css`).
- Réutiliser les primitives de `components/ui/` (`Button`, `Badge`, `SectionHeading`, `Reveal`) et `PageShell` avant d'en créer de nouvelles.
- Alterner sections sombres (par défaut) et sections claires éditoriales. Réserver les accents de couleur aux cartes d'exemples clients et le vert WhatsApp au CTA WhatsApp.
- Écrire en français, en tutoyant, avec des phrases courtes ; CTA à la première personne (« Demander mon press kit »).
- Respecter `prefers-reduced-motion` et garder un contraste d'au moins 4,5:1 (texte blanc à 64 % minimum sur fond sombre).
- Version en ligne du design system : https://claude.ai/artifact/MPrpVjKP3g2j4LpMAzTiE2. En cas de changement de charte, mettre à jour les deux.
