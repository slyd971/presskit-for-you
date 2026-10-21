# PressKit For You : instructions pour les agents

Site vitrine de presskit.fr, tenu par David (micro-entreprise PressKit For You). On y vend des press kits digitaux premium : une page web à l'image du client, avec sa présentation, ses médias, ses références et son contact, partagée en un seul lien. Clients : DJs, artistes, danseurs, photographes et vidéastes, coachs sportifs, make-up artists, organisateurs de soirée, créateurs de contenu.

## Offre (source : `content/pricing.ts`, `lib/legal.ts`)

- Press Kit Premium : à partir de 300 €, une page, jusqu'à 5 sections. Studio Custom : sur devis, plusieurs pages.
- Options : nom de domaine +30 €, mise à jour de contenu +30 €, maintenance +60 €/an, séance photo sur devis.
- Délai 7 jours après réception des contenus, 5 allers-retours inclus, paiement 50 % à la commande et 50 % à la livraison.
- TVA non applicable, art. 293 B du CGI (`VAT_MENTION`). Contact : contact@presskit.fr, WhatsApp 06 63 90 78 88.

## Stack et commandes

Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS 3, Framer Motion, icônes Lucide.

- `npm run dev` : serveur local sur http://localhost:3000. Pas 127.0.0.1 : Next bloque alors ses ressources de dev et la page ne s'anime plus.
- `npm run lint` (ESLint), `npx tsc --noEmit` (types), `npm run build` (avant tout push).
- Déploiement : un push sur `main` (github.com/slyd971/presskit-for-you) met le site en ligne via Vercel.
- `next-env.d.ts` est réécrit par le serveur de dev : ne pas le commiter.

## Où sont les choses

- `content/site.ts` : config (`siteConfig`, nav, `CTA`), FAQ, pages métiers (`categories`), exemples clients (`examples`), témoignages. `liveExamplesCount` donne le nombre de press kits en ligne : ne jamais l'écrire en dur.
- `content/pricing.ts`, `content/category-faqs.ts`, `content/seo-pages.ts` : formules, FAQ et SEO des pages métiers.
- `app/<metier>/` : pages métiers, construites avec `components/marketing/presskit-category-page.tsx`. Leurs textes longs sont dans `components/marketing/category-content.tsx`.
- `lib/presskit-categories.ts` : lien entre la catégorie d'un exemple et une page métier (sert aussi au filtre de `/exemples`).
- `lib/legal.ts` : mentions légales, délai, acompte, nombre d'allers-retours.
- `components/ui/` : primitives (`Button`, `Badge`, `SectionHeading`, `Reveal`) ; `components/layout/` : `PageShell`, header, footer.
- `design-system/presskit/` : charte (`README.md`), `tokens.json`, `tokens.css`. Version en ligne : https://claude.ai/artifact/MPrpVjKP3g2j4LpMAzTiE2. En cas de changement de charte, mettre à jour les deux.
- `docs/da-instagram.md` : DA des visuels et vidéos Instagram, source de vérité (validée par David).
- `docs/claude-projet-instructions.md` et `docs/claude-projet-connaissances.md` : contexte pour le projet Claude Desktop de David. Les régénérer si l'offre, les textes ou la liste des clients changent.

## Rédaction

- Français, tutoiement, phrases courtes, promesse concrète : « Plus pro qu'Instagram. Plus impactant qu'un PDF. »
- CTA à la première personne : « Demander mon press kit » (`CTA.primary`), « Voir des exemples », « Demander un devis ».
- Contact : « Écrire sur WhatsApp » avec `siteConfig.whatsappUrl` (message pré-rempli inclus) et « Envoyer un e-mail » en `mailto:contact@presskit.fr`.
- Délai : « 7 jours », sans « ouvrés ». Seules les CGV (`app/cgv/page.tsx`) gardent « 7 jours ouvrés » : c'est contractuel, ne pas y toucher sans l'accord de David.
- « sur mesure » sans trait d'union, « e-mail » avec. Titres H2 sans point final.
- Devant un nom de client, utiliser `withDe()` de `lib/utils.ts` : « d'Arthur Chaps », « de DJ FLO ».
- Ne jamais modifier le texte des témoignages clients.

## Design system

Avant toute modification visuelle, lire `design-system/presskit/README.md`.

- Utiliser les tokens Tailwind de `tailwind.config.ts` (`bg-surface-900`, `text-paper`, `text-ink-editorial`, `border-steel`, `shadow-panel`, `rounded-mockup-desktop`, `tracking-label`, `duration-hover`, `ease-presskit`…). Pas de nouvelle couleur, opacité, ombre ou durée en dur.
- Opacités : uniquement les échelles de la section « Dans le code » du README, toujours entre crochets (`text-white/[0.74]`). Tailwind ignore sans prévenir `text-white/72`.
- Réutiliser `components/ui/` et `PageShell` avant de créer un composant.
- Alterner sections sombres (par défaut) et sections claires éditoriales. Accents de couleur réservés aux cartes d'exemples clients, vert WhatsApp réservé au CTA WhatsApp.
- Respecter `prefers-reduced-motion` ; contraste d'au moins 4,5:1 (texte blanc à 64 % minimum sur fond sombre).

## Méthode de travail

1. Comprendre la demande et son périmètre. « Corriger un texte » ne veut pas dire retoucher le design : lors d'une passe de texte, aucune `className`, aucun style, aucun élément visuel ajouté ou retiré.
2. Lire les fichiers concernés et chercher toutes les occurrences avant de modifier (`app/`, `components/`, `content/`, `lib/`, et la doc si une règle y est citée).
3. Faire la plus petite modification qui répond à la demande, dans le style du code autour.
4. Faire les relectures adaptées (voir plus bas), puis rendre compte.
5. Ne commiter et ne pousser que sur demande.

En cas de conflit entre deux consignes (par exemple « supprime cet élément » alors que ça casse la mise en page), ne pas trancher seul : le signaler. Un changement de layout se propose d'abord, avec ses risques, et ne s'applique qu'après accord.

## Skills (`.claude/skills/`)

- Texte ajouté ou modifié : `/relecture-contenu` (vocabulaire creux, phrases vides, charte).
- Avant tout commit ou push : `/relecture-qa` (types, lint, build, diff, layout, responsive, liens).
- Nouvelle page, meta, titres ou maillage : `/relecture-seo` (métadonnées, H1/H2, sitemap, JSON-LD, alt).
- Instagram @presskit_for_you : `/strategie-social` (planning du mois, bilan Metricool), `/post-social` (carrousels, Reels, légendes), `/community` (réponses aux commentaires et DM, relances, objections). Ligne éditoriale commune : `.claude/skills/strategie-social/references/ligne-editoriale.md`.
- Sans Claude Code : faire au minimum `npx tsc --noEmit`, `npm run lint`, `npm run build`, relire `git diff` et vérifier le rendu sur http://localhost:3000 en desktop et à 375 px.

## Décisions en attente

- CGV : « 7 jours ouvrés » contre « 7 jours » partout ailleurs. À trancher par David.
- Liste numérotée de la méthode (`components/marketing/process-timeline.tsx`) : le `<li aria-hidden>` vide dessine la ligne de la timeline mobile. Il reste en place tant qu'aucune solution sans changement visuel n'est validée.

## Tenir ce fichier à jour

Source unique des instructions du projet (`CLAUDE.md` ne fait que l'importer). 200 lignes maximum : pour ajouter une règle, en condenser ou en retirer une autre. Pas de détail que le code dit déjà.

## Compte rendu

Terminer par un résumé court :

- ce qui a changé et où (liens vers les fichiers) ;
- ce qui a été vérifié, avec le résultat (build, lint, recherche dans le code, rendu) ;
- ce qui n'a pas été fait ou pas pu être vérifié, et pourquoi ;
- les décisions qui reviennent à David.
