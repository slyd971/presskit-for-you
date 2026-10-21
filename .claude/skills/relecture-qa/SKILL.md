---
name: relecture-qa
description: Contrôle qualité et non-régression d'une modification du code de presskit.fr - types, lint, build, relecture du diff, layout intact pendant une passe de texte, composants partagés, rendu sur localhost à 375 px, liens WhatsApp/mailto, accessibilité - avec un verdict clair. Utilise ce skill avant chaque commit, push ou « déploie », après une série de modifications, et dès que David dit « vérifie », « t'as rien cassé ? », « c'est bon pour la prod ? » ou signale qu'un affichage est cassé.
---

# Relecture QA

Tu vérifies que la modification fait ce qui était demandé, sans rien casser ailleurs. Tu ne redesignes pas et tu n'ajoutes rien qui n'a pas été demandé. Ne conclus jamais qu'une chose marche parce que le code a l'air correct : vérifie.

## 1. Comprendre le changement

- Lire `git status` et `git diff` en entier (et `git diff --cached`).
- Résumer en trois lignes : objectif, fichiers touchés, composants impactés.
- Identifier le type de passe. Pour une **passe de texte**, aucune `className`, aucun `style`, aucun élément visuel ajouté ou retiré : David relit ces passes en supposant que la mise en page n'a pas bougé, donc un changement visuel glissé dedans passe inaperçu jusqu'en production.

## 2. Contrôles automatiques

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Sans erreur ni nouveau warning. Coller la sortie en cas d'échec.

## 3. Relire le diff

- Passe de texte : `git diff | grep -E "className|style="` ne doit montrer que des lignes où seul le texte a changé.
- Pas de contournement : `any`, `@ts-ignore`, `eslint-disable`, `try/catch` vide, valeur en dur à la place d'un token Tailwind ou d'une constante (`liveExamplesCount`, `LEGAL`, `CTA`, `siteConfig`).
- Opacités Tailwind toujours entre crochets (`text-white/[0.74]`) : `text-white/72` ne génère aucun CSS.
- Imports inutilisés, variables mortes, code commenté laissé en place.
- `next-env.d.ts` modifié par le serveur de dev : ne pas le commiter.

## 4. Chercher les effets de bord

- Composant partagé modifié (`FinalCta`, `SiteFooter`, `SiteHeader`, `Button`, `ExampleMockup`, `CategoryHero`, `Faq`, `PricingTable`…) : `grep` ses usages et vérifier chaque page concernée.
- Donnée modifiée dans `content/site.ts` : la catégorie d'un exemple sert au filtre de `/exemples`, à `getExamplesForPresskitCategory` (`lib/presskit-categories.ts`) et aux recherches `categories.find(...)`.
- Texte remplacé : chercher les anciennes formulations restantes dans `app/`, `components/`, `content/`, `lib/` et la doc.

## 5. Vérifier le rendu

- `npm run dev`, puis http://localhost:3000. Pas 127.0.0.1 : Next 16 y bloque ses ressources de dev, la page ne s'anime plus et a l'air cassée alors que le code est bon.
- Desktop et 375 px de large : boutons principaux sur une ligne, pas de débordement horizontal, carrousel du hero et animations au scroll qui tournent.
- Dans le HTML généré (`.next/server/app/*.html` après un build) : liens WhatsApp en `siteConfig.whatsappUrl` avec `?text=`, e-mail en `mailto:contact@presskit.fr`.
- Si le rendu ne peut pas être vérifié (pas de navigateur), le dire et lister ce que l'utilisateur doit regarder.

## 6. Accessibilité

- `alt` utile sur les images de contenu, `alt=""` ou `aria-hidden="true"` sur le décoratif.
- Contraste d'au moins 4,5:1 (texte blanc à 64 % minimum sur fond sombre).
- `prefers-reduced-motion` respecté par les nouvelles animations.
- Un seul H1, titres dans l'ordre.

## 7. Rapport

- **Verdict** : Validé, Validé avec réserves, Corrections requises, ou Bloqué.
- **Contrôles** : tsc, lint, build, diff, rendu, chacun avec son résultat réel.
- **Problèmes** : gravité (bloquant, important, mineur), `fichier:ligne`, cause, correction proposée.
- **Non vérifié** : ce qui n'a pas pu l'être, et pourquoi.

Corrige toi-même seulement les problèmes bloquants et évidents (import oublié, faute de frappe dans un nom de variable). Pour le reste, propose et laisse décider. Une correction de layout ne s'applique jamais sans accord.
