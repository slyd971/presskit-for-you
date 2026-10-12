# PressKit For You : design system

Press kits digitaux premium pour artistes, talents et indépendants. Le site doit paraître **sombre, éditorial et haut de gamme**, avec des mockups produit au centre et des ruptures blanches pour les moments de preuve.

Ce dossier rassemble ce qui existe déjà dans le code du site. Il ne modifie rien en production.

- `tokens.json` : les tokens par rôle (couleurs en deux thèmes, typo, espacements, rayons, ombres, motion), avec leur usage.
- `tokens.css` : les mêmes tokens en variables CSS, générés depuis `tokens.json`.
- Sources : `tailwind.config.ts`, `app/globals.css`, `app/layout.tsx`, `lib/motion.ts`, `components/ui`, `components/marketing`, `content/site.ts`. Audit détaillé : `docs/design-audit.md` et `docs/design-inventory.json`.

## 1. Voix

- **« Vous »**, phrases courtes, promesse concrète : « Plus pro qu'Instagram. Plus impactant qu'un PDF. »
- On parle de résultat (crédibilité, conversion, un lien unique), pas de technique.
- CTA à la première personne : « Créer mon press kit », « Voir des exemples ».
- Micro-labels en capitales très espacées (`label`), jamais de phrase entière en capitales.

## 2. Couleurs

Deux thèmes qui alternent sur la page :

| Thème | Fond | Texte | Pour |
| --- | --- | --- | --- |
| **Sombre premium** (défaut) | `surface-900` → `surface-800` → `surface-850` en dégradé, plus grille et grain discrets | `paper` #F7F5F0 | Hero, exemples, méthode, avis, footer |
| **Clair éditorial** | `white` → `light-section-end` | `ink-editorial` #10141D | Citation, chiffres, tarifs, contact |

Rôles (voir `tokens.json`) : `bg`, `text`, `text-secondary`, `text-muted`, `surface-glass`, `surface-glass-strong`, `border-subtle`, `border`, `border-hover`.

- Le texte blanc translucide ne descend pas sous `0.64` d'opacité (8:1). À `0.42` on tombe à 4,1:1, trop faible pour du texte courant.
- `whatsapp` #25D366 est réservé au CTA WhatsApp, avec le texte en `whatsapp-ink`.
- Les **accents de catégorie** (`accent-gold`, `accent-orange`, `accent-ochre`, `accent-red`, `accent-mint`, `accent-pink`, `accent-tan`) habillent uniquement les cartes d'exemples clients, en dégradé doux (`accent` à 28-30 % vers transparent) ou en `accentSoft` (18 %). Ils ne servent jamais pour l'interface : boutons, liens et navigation restent noir et blanc.
- À éviter : ajouter un nouveau noir ou une nouvelle opacité de blanc. Utiliser un rôle existant.

## 3. Typographie

Une seule famille : **Manrope** (`--font-sans`, chargée par `next/font` dans `app/layout.tsx`).

- **Titres** : poids 600, interlettrage `-0.05em` (`tracking-tighter2`), interlignage serré (0.91 à 1.08). `hero` en clamp(2.28rem, 9.5vw, 5.45rem), `h2` en 1.875rem puis 3rem à partir de md.
- **Texte** : `lead` 1.125rem et `body` 1rem, interlignage 2rem.
- **Boutons** : 0.875rem (15px dans le hero), poids 600.
- **Labels** : 11px, 600, capitales, interlettrage `0.22em`. Ne pas descendre sous 11px.

## 4. Mise en page

- Conteneur `PageShell` : `container-max` 92rem, marges 1.25rem / 1.5rem / 2rem (mobile / sm / md).
- Sections : `section-y` 5rem sur mobile, 7rem et plus à partir de md.
- Sur mobile, les grilles de cartes deviennent un **rail horizontal** qui défile (`snap-x`, cartes à 84-86vw).

## 5. Formes, ombres, effets

- Rayon dominant `radius-lg` (0.5rem) partout : boutons, badges, cartes, panneaux.
- Panneaux en verre : `surface-glass` + `border` + ombre noire profonde (`shadow-panel`). Au survol : `border-hover`, `shadow-panel-hover`, léger lift.
- Mockups desktop inclinés et mobile superposé : c'est le motif le plus identitaire du site. On le garde dans toute nouvelle présentation d'exemple.
- Fond global : dégradé sombre + grille de 80px à 2,5 % + grain en `screen`. Les sections ajoutent des halos radiaux blancs très faibles (`section-wash`, `section-tone-cool`, `section-tone-lift`).

## 6. Composants existants

| Composant | Fichier | Variantes |
| --- | --- | --- |
| Button | `components/ui/button.tsx` | `primary` (blanc sur sombre), `secondary` (contour `steel`), `ghost`, `primaryOnLight`, `secondaryOnLight` |
| Badge | `components/ui/badge.tsx` | un style : verre sombre, label capitales |
| SectionHeading | `components/ui/section-heading.tsx` | `left`, `center` |
| Reveal | `components/ui/reveal.tsx` | apparition au scroll (`reveal-up`) |
| Header / Footer / PageShell | `components/layout/` | header transparent en haut de page, compact blanc après 24px de scroll |
| Sections marketing | `components/marketing/` | Hero, ComparisonSection, CategoriesGrid, PricingTable, ProcessTimeline, SocialProof, FinalCta… |

## 7. Motion

- Durées : `duration-feedback` 180ms, `duration-hover` 420ms, `duration-reveal` 480ms (plus `fast` 320ms et `slow` 720ms dans `lib/motion.ts`).
- Easings : `ease-presskit` pour les interactions, `ease-presskit-out` pour les entrées, `ease-exit` pour les sorties.
- Mouvements doux et lents : lift de 2 à 5px, légère rotation 3D des cartes, carrousel du hero toutes les 7,6s.
- `prefers-reduced-motion` coupe toutes les animations (CSS global + `useReducedMotion` dans le hero).

## 8. Logo

- Fichiers : `public/logo/logo-presskitforyou-cropped.png` (1120 × 360, utilisé dans le header, le footer et les données structurées) et `public/logo/logo-presskitforyou.png` (1536 × 1024). Favicon : `public/favicon/`.
- Monogramme « PK » au trait + « PRESSKIT » en capitales fines + « FOR YOU » entre deux filets. Version blanche au trait, sur fond sombre. Dans le header compact (fond blanc), il passe en noir via `brightness-0`.
- Pas de version vectorielle dans le repo : à ajouter (SVG) pour l'impression et les grands formats.

## 9. Points à harmoniser (repris de l'audit)

- Noirs très proches à fusionner : `#0d1016`, `#10141d`, `#11151d`, `#10141b` → `ink` / `ink-editorial`.
- Opacités de surfaces et bordures à ramener aux rôles `surface-glass*` et `border*`.
- `.panel-premium` en 300ms alors que le reste est en `duration-hover` (420ms).
- Le CTA WhatsApp de `FinalCta` recode un bouton au lieu d'une variante de `Button`.
- Prop `eyebrow` de `SectionHeading` déclarée mais jamais affichée.
