# PressKit For You

Site vitrine de presskit.fr : press kits digitaux premium pour artistes, talents et indépendants. Next.js 16 (App Router), React 19, Tailwind CSS 3, Framer Motion, icônes Lucide.

- `npm run dev` : serveur local sur http://127.0.0.1:3000
- `npm run lint` : ESLint ; `npx tsc --noEmit` pour les types
- Textes et données : `content/` (`site.ts` pour la config, la nav et les CTA)
- Pages par métier : `app/<metier>/`, construites avec `components/marketing/presskit-category-page.tsx`

## Design system

Avant toute modification visuelle, lire `design-system/presskit/README.md` : ton, couleurs, typo, mise en page, mockups, motion et logo.

- Utiliser les tokens Tailwind de `tailwind.config.ts` (`bg-surface-900`, `text-paper`, `text-ink-editorial`, `border-steel`, `shadow-panel`, `rounded-mockup-desktop`, `tracking-label`, `duration-hover`, `ease-presskit`…). Ne pas introduire de nouvelle couleur, opacité, ombre ou durée en dur.
- Opacités : uniquement les échelles listées dans la section « Dans le code » du README, toujours entre crochets (`text-white/[0.74]`). Tailwind ignore silencieusement `text-white/72`.
- Valeurs de référence : `design-system/presskit/tokens.json` (variables CSS dans `design-system/presskit/tokens.css`).
- Réutiliser les primitives de `components/ui/` (`Button`, `Badge`, `SectionHeading`, `Reveal`) et `PageShell` avant d'en créer de nouvelles.
- Alterner sections sombres (par défaut) et sections claires éditoriales. Réserver les accents de couleur aux cartes d'exemples clients et le vert WhatsApp au CTA WhatsApp.
- Écrire en français, en vouvoyant, avec des phrases courtes ; CTA à la première personne (« Créer mon press kit »).
- Respecter `prefers-reduced-motion` et garder un contraste d'au moins 4,5:1 (texte blanc à 64 % minimum sur fond sombre).
- Version en ligne du design system : https://claude.ai/artifact/MPrpVjKP3g2j4LpMAzTiE2. En cas de changement de charte, mettre à jour les deux.
