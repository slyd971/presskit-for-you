# Audit SEO PressKit

Audit realise selon `agents/seo-reviewer.md` apres inspection du code source et validation par `npm run build`. Les corrections appliquees sont uniquement techniques/performance/metadata et ne modifient pas le design.

## Verdict

**VALIDÉ AVEC RÉSERVES**

Le site est indexable, statique, proprement route, avec metadata, canonical, robots, sitemap, images OG/Twitter et JSON-LD presents. Les principales reserves concernent la performance image, le poids potentiel de fonts/assets, l'E-E-A-T incomplet et quelques donnees structurees qui peuvent etre enrichies sans sur-optimisation.

## Score SEO

| Domaine | Score |
|----------|------:|
| SEO Technique | 88 |
| SEO On-page | 82 |
| Performance | 72 |
| Contenu | 80 |
| Données structurées | 76 |
| Indexation | 92 |
| Core Web Vitals | 70 |
| IA Search Readiness | 78 |

Score global estime: **80/100**.

## Corrections appliquees

### Metadata sociales

- Gravite: P1
- Fichiers: `lib/seo.ts`, `app/layout.tsx`
- Cause: les pages utilisant `createPageMetadata` redefinissaient `openGraph` et `twitter` sans image, ce qui pouvait supprimer l'image sociale heritee.
- Correction: ajout d'images OG/Twitter centralisees (`socialImage`, `twitterImage`) et reutilisation dans le layout racine.
- Impact SEO: meilleurs snippets sociaux, meilleure coherence de partage.
- Impact UX: nul.
- Risque: faible.

### Robots Google

- Gravite: P2
- Fichier: `app/layout.tsx`
- Cause: robots global minimal.
- Correction: ajout de directives Googlebot `max-image-preview: large`, `max-snippet: -1`, `max-video-preview: -1`.
- Impact SEO: snippets et previews images plus riches.
- Impact UX: nul.
- Risque: faible.

### JSON-LD Service

- Gravite: P1
- Fichier: `app/layout.tsx`
- Cause: `Service.url` pointait vers `/contact`, route inexistante; le contact reel est l'ancre `/#contact`.
- Correction: URL corrigee vers `https://www.presskit.fr/#contact`.
- Impact SEO: donnees structurees plus coherentes, moins de signal vers une URL 404.
- Impact UX: nul.
- Risque: faible.

### JSON-LD WebPage

- Gravite: P2
- Fichier: `app/layout.tsx`
- Cause: le graphe declarait `Organization`, `WebSite`, `Service`, mais les pages principales etaient peu explicites.
- Correction: ajout de noeuds `WebPage` pour l'accueil, `/exemples` et les pages metiers publiees, relies au `WebSite` et au `Service`.
- Impact SEO/IA Search: meilleure comprehension de la structure du site.
- Impact UX: nul.
- Risque: faible.

### Sitemap stable

- Gravite: P1
- Fichier: `app/sitemap.ts`
- Cause: `lastModified: new Date()` changeait a chaque build, meme sans changement editorial.
- Correction: date stable `2026-07-28T00:00:00.000Z`.
- Impact SEO: evite d'envoyer de faux signaux de fraicheur.
- Impact UX: nul.
- Risque: faible; a mettre a jour lors d'une vraie evolution de contenu.

### Lazy loading images

- Gravite: P1
- Fichiers: `components/marketing/examples-gallery-grid.tsx`, `components/marketing/examples-showcase.tsx`, `components/marketing/preview-loop-card.tsx`, `components/marketing/process-timeline.tsx`
- Cause: plusieurs previews hors hero etaient rendues en `<img>` sans `loading="lazy"` ni `decoding="async"`. Sur `/exemples`, cela generait beaucoup de preloads image.
- Correction: ajout de `loading="lazy"` et `decoding="async"` sur les images concernees.
- Impact SEO/Core Web Vitals: reduction de pression reseau, meilleure chance LCP/INP sur les pages avec beaucoup de previews.
- Impact UX: neutre a positif.
- Risque: faible.

## Validation technique

- Build: `npm run build` OK.
- Routes statiques generees: `/`, `/_not-found`, `/artiste`, `/coach-sportif`, `/danseur`, `/dj`, `/exemples`, `/make-up-artist`, `/organisateur`, `/photographe`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`, `/twitter-image`.
- Sitemap valide: accueil, `/exemples` et pages metiers publiees, lastmod stable, priorities coherentes.
- Robots valide: `Allow: /`, `Disallow: /api/`, sitemap declare.
- Metadata valide: title, description, canonical, robots, Googlebot, OG image, Twitter image verifies dans le HTML genere.
- Canonical coherents: `https://www.presskit.fr`, `https://www.presskit.fr/exemples` et pages metiers publiees.
- Duplicate title: aucun detecte sur les routes principales.
- Duplicate description: aucune duplication critique entre accueil, exemples et pages metiers.
- JSON-LD present et parseable par construction `JSON.stringify`.
- HTML semantique: `html lang="fr"`, skip link, `main`, `header`, `nav`, `section`, `article`, `footer`.
- Images exemples: lazy/async verifies dans le HTML genere.
- Regression design: aucune modification de classe visuelle ou structure UX.

## Audit detaille

### Phase 1 - SEO technique

Points forts:

- App Router Next.js avec routes statiques.
- `metadataBase` defini.
- Canonicals presents.
- OG/Twitter images dynamiques via `next/og`.
- Robots et sitemap fournis par MetadataRoute.
- URLs propres: `/`, `/exemples`, pages metiers publiees et ancres home.

Points de vigilance:

- Pas de `manifest.ts` observe. Ce n'est pas bloquant SEO, mais utile pour coherence mobile/PWA.
- Pas de `hreflang`; acceptable pour un site uniquement francophone, a ajouter seulement si versions multilingues futures.
- `sitemap.ts` contient l'accueil, `/exemples` et les pages metiers publiees.
- Les liens de navigation combinent une page exemples, des ancres d'accueil et des liens metiers en footer.

### Phase 2 - HTML

Accueil:

- Un seul H1 dans `Hero`.
- H2 structurants pour preuve, comparaison, exemples, pricing, methode, avis, CTA.
- Articles utilises pour pricing, process, testimonials.
- Navigation et footer semantiques.

Exemples:

- Un H1 unique `Exemples`.
- Les cards utilisent des H2 par projet, logique pour une page exemples.
- Filtres en boutons, correct UX.

Points de vigilance:

- Certains composants secondaires (`Faq`, `ExamplesShowcase`) existent dans le code mais ne sont pas montes dans les routes actuelles.
- La FAQ n'est pas exposee sur la home actuelle; donc pas de schema FAQ a ajouter tant qu'elle n'est pas visible.

### Phase 3 - Contenu

Intentions actuelles:

- Accueil: "creation de press kit digital premium / site vitrine artiste en un lien".
- Exemples: "exemples de press kits digitaux".
- Pages metiers: "press kit artiste", "press kit DJ", "press kit danseur", "press kit photographe", "press kit coach sportif", "press kit make-up artist", "press kit organisateur".

Points forts:

- Positionnement clair: plus pro qu'Instagram, plus impactant qu'un PDF.
- Preuves concretes: exemples reels, temoignages, delai, pricing, methode.
- Champ lexical naturel: press kit, artistes, DJs, photographes, coachs, createurs, booking, medias, vitrine, lien.

Risques:

- Les pages metiers sont publiees; leur contenu devra etre enrichi dans le temps avec preuves, exemples et FAQ visibles si l'objectif SEO devient prioritaire.
- Mentions legales, identite editeur, zone d'activite, SIRET/raison sociale non observees: reserve E-E-A-T, surtout pour conversion et confiance.
- Quelques titres sont tres marketing et moins explicites pour moteurs de reponse IA; le contexte compense en partie via paragraphes.

### Phase 4 - Images

Points forts:

- La plupart des images informatives des exemples ont des alt descriptifs.
- Images testimonials decoratives en alt vide, acceptable si le nom est adjacent dans le texte.
- Favicon et apple-touch-icon presents.

Risques:

- Beaucoup d'images lourdes dans `public`: `yoruboy.jpeg` 6.1M, `coach.png` 3.1M, `dj-yoruboy-desktop.png` 2.6M, plusieurs previews autour de 2.1M.
- Les images sont rendues avec `<img>` et non `next/image`; il n'y a pas d'optimisation automatique, dimensions, `sizes` ou placeholders.
- Plusieurs PNG pourraient etre convertis en WebP/AVIF.
- Le logo crop fait 164K et le logo original 1.1M; verifier si l'original est encore necessaire.

### Phase 5 - Performance SEO / Core Web Vitals

Points forts:

- Routes prerendered statiques.
- `lucide-react` optimise via `optimizePackageImports`.
- Images hors hero maintenant en lazy/async lorsque pertinent.
- `prefers-reduced-motion` gere globalement.

Risques:

- `Hero` et `SiteHeader` sont Client Components avec Framer Motion; c'est justifie UX, mais a surveiller pour JS initial.
- `ExamplesGalleryGrid` est un Client Component uniquement pour les filtres; toute la page exemples est hydratee.
- Deux fonts Google sont prechargees, dont Cormorant Garamond qui ne semble pas utilisee visuellement.
- Plusieurs images au-dessus de la fold sur l'accueil sont encore prechargees; logique pour le hero carousel, mais a mesurer en Lighthouse.
- Absence de dimensions explicites sur `<img>`; le layout compense via wrappers `aspect-*`, mais `next/image` serait plus robuste.

### Phase 6 - Donnees structurees

Presents:

- `Organization`
- `WebSite`
- `WebPage` accueil, exemples et pages metiers publiees
- `Service`
- `SiteNavigationElement`

Manquants ou a discuter:

- `BreadcrumbList` pour `/exemples` et les pages metiers.
- `FAQPage` seulement si une FAQ visible est ajoutee.
- `LocalBusiness` uniquement si adresse/zone/service local verifiables sont fournis.
- `Offer` ou `OfferCatalog` possible pour les deux offres, mais a structurer prudemment car les prix incluent "a partir de" et "sur devis".

### Phase 7 - Maillage interne

Points forts:

- Header vers sections cles.
- Footer vers home, exemples, pages metiers et contact.
- CTA repetes vers exemples/contact.
- Exemples accessible depuis header/footer/home.

Risques:

- Les exemples menent surtout vers des sites externes; bon pour preuve, mais peu de pages internes detaillees.
- Ancres parfois generiques: "Voir le projet", "Voir le rendu en live"; UX OK, SEO interne limite.
- Pas encore de pages detaillees par exemple/client; les exemples menent surtout vers les sites live externes.

### Phase 8 - Indexabilite

Valide:

- Pas de `noindex`.
- Robots autorise le crawl.
- Sitemap coherent.
- Canonical coherents.
- 404 statique presente.

Reserve:

- Validation HTTP reelle non effectuee ici, car l'audit s'est fait localement apres build.

### Phase 9 - E-E-A-T

Points forts:

- Temoignages nommes.
- Exemples reels avec liens live.
- Contact direct.
- Pricing clair.
- Methode claire.

Risques:

- Pas de page mentions legales / confidentialite observee.
- Identite editeur limitee: telephone visible dans schema, email visible en footer, mais pas de bloc legal complet.
- Pas d'auteur, studio, equipe ou preuves business structurees.

### Phase 10 - IA Search readiness

Points forts:

- Proposition de valeur comprehensible.
- Sections bien nommees et contenu extractible.
- JSON-LD relie `WebSite`, `WebPage`, `Service`.
- Pricing et methode lisibles.

Risques:

- Peu de contenu sous forme definitionnelle/reponse directe: "Qu'est-ce qu'un press kit digital ?", "Pour qui ?", "Combien ?", "Delai ?", "Ce qui est inclus ?".
- FAQ non exposee; elle pourrait aider moteurs de reponse si integree proprement sans keyword stuffing.
- Pas de pages par intention metier.

## Priorites restantes

### P0 - Bloquant

Aucun bloquant detecte.

### P1 - Impact SEO fort

1. Optimiser les images les plus lourdes en WebP/AVIF et definir une strategie `next/image` pour hero, exemples et testimonials.
2. Ajouter une page mentions legales / politique de confidentialite si le site collecte ou affiche un service commercial.
3. Enrichir les pages metiers publiees avec FAQ visibles, preuves et contenus specifiques si elles deviennent des pages SEO prioritaires.

### P2 - Optimisation

1. Ajouter `BreadcrumbList` pour `/exemples` et les pages metiers.
2. Ajouter `Offer`/`OfferCatalog` si les offres restent stables et verifiables.
3. Revoir l'usage de Cormorant Garamond: l'utiliser intentionnellement ou retirer le chargement.
4. Ajouter une FAQ visible et utile avant tout schema `FAQPage`.
5. Enrichir `Organization` avec informations legales reelles si disponibles.

### P3 - Confort

1. Ajouter `app/manifest.ts`.
2. Renforcer les ancres internes avec des libelles plus descriptifs quand cela reste naturel.
3. Mesurer Lighthouse/PageSpeed sur production apres deploiement.

## Statut final de validation

- Sitemap valide: oui.
- Robots valide: oui.
- Metadata valide: oui.
- Aucun duplicate title critique: oui.
- Aucun duplicate description critique: oui.
- Canonical coherents: oui.
- JSON-LD coherent: oui, avec reserves d'enrichissement.
- Core Web Vitals non degrades: build OK et lazy loading ameliore; mesure terrain non disponible localement.
- HTML semantique: oui.
- Maillage coherent: oui, perfectible.
- Images optimisees: partiellement; attributs corriges, poids/formats encore a traiter.
- Aucune regression SEO detectee apres build: oui.
