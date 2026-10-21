---
name: insta-post
description: Écrit les posts Instagram de @presskit_for_you - choix du client, format, couverture, slides de carrousel, script de Reel, légende, hashtags, textes alternatifs - à partir des vrais presskits clients et du référentiel Instagram. Utilise ce skill dès que David veut un post, un carrousel, un Reel, une story, une légende, une accroche, des hashtags ou « le post de mardi », même s'il ne dit pas « post ». Pour fabriquer les images ou la vidéo, enchaîne avec insta-visuel.
---

# Posts Instagram : @presskit_for_you

Tu écris les posts du compte. Le cœur du feed, c'est le travail réalisé : un post montre le presskit d'un client en détail, pour qu'un indépendant se dise « je veux le même ».

## Rien au hasard

Tout ce que tu écris vient du **référentiel Instagram** (`docs/instagram/`) et des sources du site, et de rien d'autre :

| Quoi | Source unique |
| --- | --- |
| Clients publiables, répartition, grille, ton et règles des légendes, hashtags, interdits | `docs/instagram/ligne-editoriale.md` |
| Formats, gabarits de posts, couvertures, formules d'accroche | `docs/instagram/da.md` (§11, §16, §19 ; la §19, relevée dans Canva, prime) |
| Règles de rédaction générales | `AGENTS.md`, section « Rédaction » |
| Faits sur un client | son site `*.presskit.fr` ou David |
| Prix, délai, allers-retours | `content/pricing.ts`, `lib/legal.ts` |

Ce qui n'est couvert par aucune source (un fait client, une autre formule, un client non validé) ne s'invente pas : demande à David, ou signale-le comme « à valider ».

## 1. Choisir le client et réunir la matière

- Le client figure dans la liste des clients validés de la ligne éditoriale ; sinon, accord de David d'abord, car publier un client qui n'a pas donné son accord abîme la relation.
- Pas deux posts consécutifs du même client (derniers posts dans Metricool : voir la ligne éditoriale).
- Sur son site `*.presskit.fr` (lien dans `content/site.ts`, `examples`), relève ce qui s'y trouve vraiment : nom tel qu'il l'écrit, métier, sections, photos, couleur d'accent. Un club, une date ou une citation inventés peuvent mettre le client dans l'embarras devant ses bookers.

## 2. Choisir le format

Uniquement les gabarits de la DA : carrousel client (§11.3), Reel client (§12.5), couverture (§19), avant / après avec une capture fournie par David (§11.4), conseil (§11.5). Place dans la grille : DA §13.

## 3. Écrire

- **Couverture** : le nom du client en titre, une formule de référence en sous-titre, le métier tel que son site l'écrit. Une autre accroche se propose comme « hors gabarit », pour que David tranche.
- **Slides intérieures** : limite de mots et micro-labels de la DA (§0.2, §8). Le texte long va dans la légende.
- **Script de Reel** : tableau temps / image / texte à l'écran / mouvement, selon la DA (§12). Le premier frame doit pouvoir servir de couverture.
- **Légende, hashtags, textes alternatifs** : règles de la ligne éditoriale.

## 4. Visuels

Si David veut les images ou la vidéo, et pas seulement le texte, passe le relais à `insta-visuel` avec ce que tu as préparé (client, slides, script, accent).

## 5. Se relire

Passe la légende au crible de `relecture-contenu`, puis vérifie les interdits de la ligne éditoriale, notamment qu'aucune note de travail ne traîne dans le texte à coller.

## 6. Rendre

```
**Post du [date] : [client] · [carrousel / Reel]**
Place dans la grille : [fond de couverture, client précédent, pourquoi maintenant] (DA §13)

Couverture : [titre] / [sous-titre] / [métier] — gabarit DA §19
[Slides une par une : gabarit DA, captures à prévoir, texte] ou [script du Reel]

Légende :
[texte prêt à coller]

Hashtags : #… #… #…
Textes alternatifs : [un par visuel]
Hors référentiel : [aucun, ou ce que David doit trancher]
À fournir par David : [photos, capture « avant », son, accord client]
```

## 7. Programmer (seulement sur demande)

Ne publie jamais directement. Si David demande de programmer : `getBrandSettings` (marque `presskit_for_you`), puis `createScheduledPostForReview` avec la date validée et David en relecteur. Si l'outil refuse (offre Metricool sans validation d'équipe), donne le contenu prêt à coller et dis pourquoi.
