# PressKit For You : structure du code

Site vitrine de **presskit.fr** : press kits digitaux premium pour artistes, talents et indépendants.
Repo : `slyd971/presskit-for-you` · déployé sur Vercel · branches `main` (production) et `staging`.

## Stack

| Outil | Version | Rôle |
| --- | --- | --- |
| Next.js (App Router) | 16 | Pages, métadonnées SEO, images Open Graph, redirections |
| React | 19 | UI |
| Tailwind CSS | 3.4 | Styles, avec les tokens du design system dans `tailwind.config.ts` |
| Framer Motion | 11 | Animations (header, hero, process) |
| lucide-react | 0.468 | Icônes |
| clsx + tailwind-merge | | Helper `cn()` dans `lib/utils.ts` |
| @vercel/analytics | 2 | Mesure d'audience |

Police : Manrope via `next/font/google` (`app/layout.tsx`, variable `--font-sans`).

Commandes : `npm run dev` (http://127.0.0.1:3000), `npm run build`, `npm run start`, `npm run lint`, `npx tsc --noEmit`.

## Arborescence

```
presskit-for-you/
├── app/                      Routes Next.js (App Router)
│   ├── layout.tsx            Layout racine : police, métadonnées globales, JSON-LD, header, footer, analytics
│   ├── globals.css           Fond global, classes de section et panneaux, animations, reduced-motion
│   ├── page.tsx              Accueil
│   ├── exemples/             Galerie des press kits réalisés
│   ├── tarifs/               Page tarifs
│   ├── artiste/ dj/ danseur/ photographe/ coach-sportif/ make-up-artist/ organisateur/
│   │                         Une page par métier (page.tsx + opengraph-image.tsx + twitter-image.tsx)
│   ├── cgv/ mentions-legales/ politique-de-confidentialite/   Pages légales
│   ├── not-found.tsx         Page 404
│   ├── opengraph-image.tsx, twitter-image.tsx                 Images de partage de l'accueil
│   └── robots.ts, sitemap.ts
├── components/
│   ├── layout/               Structure commune
│   ├── marketing/            Sections des pages
│   ├── seo/                  `PageJsonLd` : WebPage + fil d'Ariane de la page
│   └── ui/                   Primitives réutilisables
├── content/                  Textes et données (aucune UI)
├── lib/                      Helpers : SEO, catégories, OG, motion, légal
├── design-system/presskit/   Design system : charte, tokens.json, tokens.css
├── docs/                     Audits design et SEO, référentiel Instagram (instagram/), contexte Claude Desktop, ce fichier
├── AGENTS.md                 Instructions du projet, importé par CLAUDE.md
├── .claude/skills/           Skills : relecture-* (contenu, QA, SEO) et insta-* (stratégie, post, visuel, community)
├── scripts/                  Scripts zsh de capture des previews
├── public/                   Images (logos, previews, OG, témoignages)
├── tailwind.config.ts        Thème Tailwind et tokens du design system
├── next.config.ts            Redirections 301 des anciennes URLs /presskit/* et /galerie
└── CLAUDE.md                 Règles pour Claude Code
```

## Pages

| Route | Fichier | Composition |
| --- | --- | --- |
| `/` | `app/page.tsx` | `Hero` → `ProofStats` → `ComparisonSection` → `CategoriesGrid` → `PricingTable` (highlight) → `ProcessTimeline` → `SocialProof` → `Faq` → `FinalCta` |
| `/exemples` | `app/exemples/page.tsx` | Intro + `ExamplesGalleryGrid` (filtres par catégorie) |
| `/tarifs` | `app/tarifs/page.tsx` | Intro + `PricingTable` + `Faq` + bloc CTA + `FinalCta` |
| `/<metier>` | `app/<metier>/page.tsx` | `PresskitCategoryPage` : `CategoryHero` → `CategoryContent` → `CategoryOffer` → `Faq` (FAQ du métier) → `FinalCta` |
| `/cgv`, `/politique-de-confidentialite` | | `LegalDocument` |
| `/mentions-legales` | | Page dédiée, données de `lib/legal.ts` |

Une page métier fait une dizaine de lignes : elle déclare son `slug`, appelle `createPresskitCategoryMetadata(slug)` et `getPresskitCategory(slug)`, puis rend `PresskitCategoryPage`. Ses images de partage passent par `createCategoryOgImage(slug)`.

**Ajouter un métier** : ajouter la catégorie dans `content/site.ts` (`categories`), sa FAQ dans `content/category-faqs.ts`, son SEO dans `content/seo-pages.ts`, puis créer `app/<slug>/` en copiant `app/dj/` (3 fichiers). Le sitemap et les liens du footer se mettent à jour seuls à partir des catégories.

## Composants

### `components/layout/`

| Fichier | Rôle |
| --- | --- |
| `site-header.tsx` | Header fixe. Transparent en haut de page, compact et blanc après 24px de scroll. Menu mobile animé. |
| `site-footer.tsx` | Grand footer sombre : logo, baseline, liens métiers (`footerCategoryLinks`), CTA. |
| `page-shell.tsx` | Conteneur `max-w-8xl` (92rem) avec les marges latérales. À utiliser pour toute section. |
| `legal-document.tsx` | Mise en page des pages légales. |

### `components/ui/`

| Fichier | Rôle |
| --- | --- |
| `button.tsx` | Lien-bouton, variantes `primary`, `secondary`, `ghost`, `primaryOnLight`, `secondaryOnLight`. |
| `section-heading.tsx` | Titre `h2` + description, `left` ou `center` (la prop `eyebrow` n'est pas affichée). |
| `reveal.tsx` | Apparition au scroll (classe `reveal-up`, délai en prop). |
| `badge.tsx` | Label en verre sombre. Pas utilisé actuellement. |

### `components/marketing/`

| Fichier | Utilisé par | Rôle |
| --- | --- | --- |
| `hero.tsx` | `/` | Titre, CTA, carrousel de mockups desktop/mobile (3,5 s, en pause au survol souris et au focus clavier, coupé en reduced-motion). |
| `social-proof.tsx` | `/` | `ProofStats` (stat monumentale), `SocialProof` et `TestimonialCard` (témoignages). |
| `home-conversion-sections.tsx` | `/` | `ComparisonSection` : press kit vs PDF/Instagram. |
| `categories-grid.tsx` | `/` | Cartes d'études de cas par métier avec mockups. |
| `pricing-table.tsx` | `/`, `/tarifs` | Offre principale + options (accordéon sur mobile). Données dans `content/pricing.ts`. |
| `process-timeline.tsx` | `/` | Méthode en 3 étapes (une seule liste responsive : frise sur mobile, cartes sur desktop). |
| `metiers-links.tsx` | `/`, `/exemples`, `/tarifs`, métiers | `MetiersLinks` : liens internes vers les 7 pages métiers (sans la page courante via `currentSlug`). |
| `faq.tsx` | `/`, `/tarifs`, métiers | FAQ en accordéon. |
| `final-cta.tsx` | Toutes les pages | Section contact claire, CTA WhatsApp et email. |
| `examples-gallery-grid.tsx` | `/exemples` | Grille filtrable des exemples. |
| `presskit-category-page.tsx` | Pages métier | Assemble la page métier. |
| `category-hero.tsx`, `category-content.tsx`, `category-offer.tsx` | Pages métier | Hero, contenu et offre d'un métier. |
| `examples-showcase.tsx`, `preview-loop-card.tsx` | Aucune page | Anciennes sections, plus importées. |

## Données : `content/`

| Fichier | Contenu |
| --- | --- |
| `site.ts` | `siteConfig` (nom, URL, téléphone, WhatsApp, nav), `CTA`, `heroStats`, `heroProofs`, `benefits`, `testimonials`, `processSteps`, `faqItems`, `categories` (un objet par métier : textes, accent, gradient, visuels), `examples` (press kits réalisés), `liveExamplesCount`. |
| `pricing.ts` | `pricingTiers`, `pricingOptions`. |
| `category-faqs.ts` | FAQ par slug de métier. |
| `seo-pages.ts` | Titre, description et mots-clés par métier. |
| `example-urls.ts` | URLs des démos en ligne. |

Les textes du site se modifient ici, pas dans les composants.

## Helpers : `lib/`

| Fichier | Rôle |
| --- | --- |
| `seo.ts` | `createPageMetadata()`, `absoluteUrl()`, images sociales par défaut. |
| `json-ld.ts` | `pageJsonLdNodes()` : WebPage (url = canonical) et BreadcrumbList d'une page. Le layout ne garde que Organization et WebSite. |
| `presskit-categories.ts` | Catégories publiées (sans `chef`), `getPresskitCategory()`, `getExamplesForPresskitCategory()`, `createPresskitCategoryMetadata()`, liens du footer. |
| `category-og.tsx`, `og-image.tsx` | Génération des images Open Graph (1200 × 630). |
| `motion.ts` | Tokens d'animation pour Framer Motion (durées, distances, easings). |
| `legal.ts`, `vat.ts` | Données légales (éditeur, SIREN, adresse) et mention TVA. |
| `utils.ts` | `cn()` pour fusionner les classes Tailwind. |

## Design system

- Charte : `design-system/presskit/README.md`. À lire avant toute modification visuelle.
- Tokens : `design-system/presskit/tokens.json`, avec `tokens.css` généré depuis ce fichier, et les mêmes tokens dans `tailwind.config.ts` (`surface-*`, `mockup`, `paper`, `ink-editorial`, `steel`, `whatsapp`, `accent-*`, `shadow-panel`, `rounded-mockup-*`, `tracking-label`, `duration-*`, `ease-*`).
- Opacités autorisées, toujours entre crochets (`text-white/[0.74]`) : texte blanc 0.64 / 0.74 / 0.84 / 0.92, verre 0.04 / 0.055 / 0.08 / 0.1, bordures 0.08 / 0.12 / 0.18 / 0.24.
- Classes CSS maison dans `app/globals.css` : `section-wash`, `section-tone-cool`, `section-tone-lift`, `section-contact`, `panel-premium`, `editorial-panel`, `case-study-card`, `motion-line`, `button-cycle`, `cta-shine`, `reveal-up`.
- Version en ligne : https://claude.ai/artifact/MPrpVjKP3g2j4LpMAzTiE2

## Conventions

- Imports avec l'alias `@/` (`@/components/...`, `@/lib/...`, `@/content/...`).
- Composants en fonctions nommées exportées (`export function Hero()`), fichiers en kebab-case.
- Textes en français, vouvoiement, CTA à la première personne (« Demander mon press kit »).
- Chaque page exporte ses `metadata` via `createPageMetadata()` ou `createPresskitCategoryMetadata()`.
- Animations : respecter `prefers-reduced-motion` (CSS global et `useReducedMotion` côté Framer).
- `.env.example` déclare des variables Airtable, mais aucun code ne les utilise actuellement.
