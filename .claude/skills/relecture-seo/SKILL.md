---
name: relecture-seo
description: Audit SEO de presskit.fr - métadonnées (title, meta description), H1/H2, sitemap, redirections, canonical, JSON-LD, alt des images, maillage interne, rendu serveur - avec des corrections classées par priorité. Utilise ce skill pour toute nouvelle page ou page métier, un changement de titre, de meta ou de structure, une question sur Google, le référencement, l'indexation ou la Search Console, ou un audit ponctuel ; pas pour une simple correction de texte dans une page existante.
---

# Relecture SEO

Tu améliores la façon dont Google (et les moteurs de réponse IA) comprend le site, sans bourrer de mots-clés et sans jamais dégrader le design, la lisibilité ou la conversion. Tu ne crées aucune donnée mensongère.

## 1. Périmètre

- Par défaut : les pages touchées par `git diff`. Pour un audit complet : toutes les routes de `app/`.
- Faire `npm run build` puis lire le HTML généré dans `.next/server/app/<page>.html` : c'est ce que Google reçoit.

## 2. Métadonnées

- Chaque page passe par `createPageMetadata` (`lib/seo.ts`) ; les pages métiers par `content/seo-pages.ts` via `createPresskitCategoryMetadata`.
- Title et meta description présents, uniques sur le site, fidèles à la page. Description de 140 à 160 caractères environ, avec une promesse concrète.
- Canonical cohérent, Open Graph et image de partage (`opengraph-image.tsx`) présents.
- Les chiffres cités (délai, prix, nombre d'exemples) viennent des constantes : `LEGAL`, `liveExamplesCount`, `content/pricing.ts`.

## 3. Structure HTML

- Un seul H1 par page, H2 puis H3 dans l'ordre, sans saut de niveau. H2 sans point final.
- Landmarks : `header`, `nav`, `main`, `footer` ; `section` avec `aria-labelledby` quand elle a un titre.
- Le texte important est dans le HTML serveur, pas seulement injecté côté client.

## 4. Indexation et maillage

- Nouvelle page : ajoutée à `app/sitemap.ts`, non bloquée par `app/robots.ts`, reliée depuis la nav, le footer ou `MetiersLinks`.
- Anciennes URL : redirections 301 dans `next.config.ts`, pas de chaîne de redirections.
- Liens internes avec des ancres descriptives (« Voir la page press kit DJ » plutôt que « cliquez ici »). Aucun lien cassé.

## 5. Données structurées

- `PageJsonLd` (WebPage + fil d'Ariane) sur chaque page ; FAQPage générée par `Faq` ; Service sur `/tarifs` ; Organization dans `app/layout.tsx`.
- Contenu du JSON-LD identique à ce qui est affiché. Jamais d'avis, de note ou de prix inventés.

## 6. Images et performance

- Images via `next/image`, avec `sizes` adapté et `priority` seulement sur l'image principale au-dessus de la ligne de flottaison.
- `alt` descriptif sur les captures : « Press kit d'Arthur Chaps, DJ, version desktop » (avec `withDe()`).
- Formats WebP ou AVIF, pas d'image lourde inutile.
- Garder les composants côté serveur quand ils n'ont pas besoin d'interactivité ; signaler un `"use client"` superflu.

## 7. Contenu

- Une intention de recherche claire par page (ex. « press kit DJ »), le mot-clé principal dans le H1, le title et le début du texte, sans répétition forcée.
- Pas de contenu dupliqué d'une page métier à l'autre.
- Réponses courtes et structurées (listes, FAQ) que Google et les IA peuvent citer telles quelles.
- Toute réécriture proposée respecte la charte de rédaction d'`AGENTS.md` : en cas de doute, lancer `relecture-contenu`.

## 8. Rapport

- **Verdict** : Validé, Validé avec réserves, Corrections requises, ou Bloqué.
- **Problèmes classés** : P0 (empêche l'indexation), P1 (impact fort), P2 (optimisation), P3 (confort). Pour chacun : `fichier:ligne`, cause, correction, impact sur l'utilisateur.
- **Validé** : ce qui a été contrôlé et est correct.

Ne modifie les fichiers que si l'utilisateur le demande. Refuse toute optimisation qui abîme le design ou la lecture.
