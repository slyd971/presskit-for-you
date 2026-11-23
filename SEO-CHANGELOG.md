# Journal SEO de presskit.fr

Branche `seo-optimisation`. Une ligne par modification, phase par phase.

## Phase 1 : technique (23/11/2026)

Texte visible et classes CSS identiques avant et après sur les 13 pages du sitemap.

| Fichier | Avant | Après |
| --- | --- | --- |
| `app/layout.tsx` | `Organization` : `areaServed: "FR"` | `areaServed` : Île-de-France et France |
| `lib/json-ld.ts` | Pas de générateur de `Service` | `serviceJsonLdNode()` : prestataire, zone France, offre avec `minPrice` et mention « À partir de 300 € » |
| `content/pricing.ts` | Prix écrit seulement dans le texte | `minPrice` ajouté à la formule Premium, le texte affiché en découle |
| `components/marketing/presskit-category-page.tsx` | `Service` avec prix écrit en dur | `Service` généré depuis la formule Press Kit Premium (7 pages métiers) |
| `app/tarifs/page.tsx` | 1 `Service` générique, prix en dur | 2 `Service` : Press Kit Premium (`minPrice` 300), Studio Custom (sans prix) |
| `components/layout/site-header.tsx`, `site-footer.tsx` | Logo `alt=""`, nom porté par l'`aria-label` du lien | Logo `alt="PressKit For You"`, `aria-label` devenu inutile retiré |
| `components/marketing/hero.tsx` (ordinateur) | « Voir le rendu live {nom} » | « Voir le press kit de {nom} (nouvel onglet) » |
| `components/marketing/categories-grid.tsx` | « {nom} : ouvrir la démo (nouvel onglet) » | « Voir le press kit de {nom} (nouvel onglet) » |
| `components/marketing/category-content.tsx` | « {nom} : ouvrir la démo » | « Voir le press kit de {nom} » |
| `public/témoignages/` (8 fichiers) | `/témoignages/` | `/temoignages/` |
| `content/site.ts` | 5 chemins `/témoignages/…` | 5 chemins `/temoignages/…` (aucun texte touché) |
| `next.config.ts` | Pas de redirection | 301 de `/témoignages/:file` vers `/temoignages/:file` |
| `app/sitemap.ts` | Dates écrites à la main | Dates lues dans `content/last-modified.json` |
| `content/last-modified.json` | Absent | Date et empreinte du contenu de chaque page |
| `scripts/sitemap-dates.mjs`, `package.json` | Absent | Script lancé après chaque build local (`postbuild`) |
| `AGENTS.md` | Absent | Une ligne sur `content/last-modified.json` |

Déjà en place, vérifié sans changement : `WebSite`, `FAQPage` (générée depuis la FAQ affichée), `BreadcrumbList`, redirection vers www, filtres de `/exemples`, canonical.

## Phase 2 : balises et titres (23/11/2026)

| Fichier | Avant | Après |
| --- | --- | --- |
| `components/marketing/hero.tsx` | H1 : phrase masquée (`sr-only`) + slogan | H1 visible en sur-titre : « Press kit digital pour DJs, artistes, créateurs et indépendants ». Slogan dans un `<p>`, même style |
| `content/seo-pages.ts` (`/artiste`) | Press kit artiste : ton EPK en un lien \| PressKit For You | Press kit artiste : ton EPK musique \| PressKit For You |
| `content/seo-pages.ts` (`/danseur`) | Press kit danseur : tes vidéos en un lien \| PressKit For You | Press kit danseur : ton book en ligne \| PressKit For You |
| `content/seo-pages.ts` (`/make-up-artist`) | Press kit make-up artist : ton portfolio \| PressKit For You | Press kit make-up artist : ton portfolio maquillage |
| `content/seo-pages.ts` (`/organisateur`) | Press kit organisateur : dossier sponsors \| PressKit For You | Press kit organisateur : ton dossier de sponsoring |
| `components/marketing/metiers-links.tsx` | Pastilles de liens partout | Option `withDescriptions` : grille de cartes avec une phrase par métier |
| `app/page.tsx` | Bloc métiers en pastilles | Bloc métiers avec `withDescriptions` (accueil seulement) |
| `content/last-modified.json` | `/` au 22/10/2026 | `/` au 23/11/2026 (nouvelles empreintes pour les 4 pages métiers) |

Titles de `/dj`, `/photographe` et `/coach-sportif` inchangés.

## Phase 3 : contenu de /dj et /artiste (23/11/2026)

Textes validés dans `seo-drafts/dj.md` et `seo-drafts/artiste.md`, intégrés mot pour mot.

| Fichier | Avant | Après |
| --- | --- | --- |
| `content/category-guides.ts` | Absent | 3 sections pour `/dj` (653 mots), 4 sections pour `/artiste` (661 mots) |
| `components/marketing/category-guides.tsx` | Absent | Affichage des sections, styles existants repris |
| `components/marketing/presskit-category-page.tsx` | Contenu, puis tarif | Contenu, sections longues, puis tarif |
| `content/category-faqs.ts` (`/dj`) | 5 questions | 6 : « Un press kit peut-il servir de site booking DJ ? » |
| `content/category-faqs.ts` (`/artiste`) | 5 questions | 6 : « Je n'ai pas encore d'EP ni d'album, un press kit est-il utile ? » |
| `scripts/claude-projet-connaissances.mjs`, `docs/claude-projet-connaissances.md` | Sans ces sections | Sections incluses |
| `content/last-modified.json` | | Nouvelles empreintes de `/dj` et `/artiste` |

Question « Vous pouvez m'aider à écrire ma bio DJ ? » : ajoutée ensuite, voir « Après la phase 4 ».
Témoignage de Yed D. : déjà sur `/dj`, inchangé.

## Phase 4 : page /createur-de-contenu en brouillon (23/11/2026)

| Fichier | Avant | Après |
| --- | --- | --- |
| `app/createur-de-contenu/` (page, opengraph-image, twitter-image) | Absent | Route au gabarit des pages métiers |
| `content/site.ts` | 7 métiers publiés | Métier `createur-de-contenu` ajouté avec `draft: true`, textes « À RÉDIGER » |
| `content/seo-pages.ts`, `content/category-faqs.ts`, `components/marketing/category-content.tsx` | Absent | Emplacements « À RÉDIGER » (la question sur le prix est déjà remplie) |
| `lib/presskit-categories.ts` | Pas de brouillon possible | `draft` : `noindex, nofollow`, hors sitemap, hors menus. Exemple de Julia relié |
| `scripts/claude-projet-connaissances.mjs` | Toutes les pages sauf chef | Brouillons exclus aussi |

Publiée ensuite dans la branche, voir « Publication de /createur-de-contenu ».

## Après la phase 4 (23/11/2026)

| Fichier | Avant | Après |
| --- | --- | --- |
| `components/marketing/category-content.tsx` (`/danseur`) | Intro sans le mot « book » | « C'est ton book de danseur en ligne : un lien à envoyer avant une audition. » ajouté |
| `app/layout.tsx`, `public/logo/logo-presskitforyou-512.png` | `logo` : version blanche sur fond transparent | Monogramme entier, blanc sur fond `#0d1118`, 512 × 512 |
| `content/category-faqs.ts` (`/dj`) | 6 questions | 7 : « Vous pouvez m'aider à écrire ma bio DJ ? » (aide incluse dans Press Kit Premium, réponse à relire) |
| `content/site.ts`, `content/seo-pages.ts`, `content/category-faqs.ts`, `components/marketing/category-content.tsx` (`/createur-de-contenu`) | « À RÉDIGER » | Textes de `seo-drafts/createur-de-contenu.md`. La page reste en `draft: true` |
| `content/category-guides.ts` (`/createur-de-contenu`) | Absent | 4 sections longues |
| `components/marketing/category-hero.tsx` | Pas de lien vers un témoignage vidéo | Lien « Voir son témoignage vidéo » quand l'exemple principal en a un (Julia) |

Hors mission SEO : l'ajout de DJ Wayans, fait en parallèle dans le même dossier, n'est pas détaillé ici.

## Publication de /createur-de-contenu (23/11/2026)

| Fichier | Avant | Après |
| --- | --- | --- |
| `content/site.ts` | `draft: true` | Retiré : page indexable, dans le sitemap et le pied de page |
| `components/marketing/metiers-links.tsx` | 7 métiers | 8, avec la phrase de l'accueil |
| `components/marketing/examples-gallery-grid.tsx` | « Press kits créateurs de contenu » sans lien | Lien vers `/createur-de-contenu` |
| `public/og-previews/createur-de-contenu.jpg` | Absent | Aperçu du press kit de Julia pour l'image de partage |
| `content/last-modified.json` | | 11 pages au 23/11/2026 (nouveau lien dans les blocs métiers) |
| `docs/STRUCTURE.md`, `docs/claude-projet-connaissances.md` | Sans la page | Page ajoutée |

## Hors repo

Les press kits clients ne sont pas dans ce repo. Liste des 22 crédits (DJ Wayans compris) à changer : `seo-drafts/credits-presskits.md`.
