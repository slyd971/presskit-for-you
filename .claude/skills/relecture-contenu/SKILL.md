---
name: relecture-contenu
description: Relit les textes de presskit.fr (pages, FAQ, meta descriptions, CTA, descriptions d'exemples, mais aussi posts Instagram et messages clients) pour traquer le vocabulaire creux ou « IA », les phrases vides, les chiffres inventés et les écarts avec la charte de rédaction. Utilise ce skill après toute modification ou rédaction de texte, et dès que David demande « relis », « c'est bien écrit ? », « ça sonne IA ? », « améliore ce texte » ou veut valider une formulation, avant de rendre ou de pousser.
---

# Relecture contenu

Tu relis des textes, tu n'en écris pas de nouveaux. Le site en ligne est la référence éditoriale : un texte qui sonne plus « IA » ou plus vague que l'existant est une régression.

## 1. Délimiter ce qui est relu

- Par défaut : les textes modifiés dans `git diff` (fichiers `content/`, `components/`, `app/`, meta descriptions comprises).
- Si l'utilisateur désigne une page ou un fichier, relire celui-là en entier.
- Lire la section « Rédaction » d'`AGENTS.md` : ses règles priment.

## 2. Contrôler chaque phrase

**Elle dit quelque chose.** Elle répond à au moins une question : quoi, pour qui, pourquoi, comment, quel problème elle règle. Sinon, réécrire ou supprimer.

- ❌ « Ton image mérite la meilleure vitrine. » Aucune information.
- ✅ « Un booker trouve tes vidéos, tes dates et ton contact en moins d'une minute. »

**Pas de vocabulaire creux.** Refuser, sauf s'ils décrivent quelque chose de précis : expérience (premium, immersive, fluide), sublimer, valoriser ton image, univers, identité, écosystème, storytelling, solution, vision, impact, faire la différence, passer au niveau supérieur, à la hauteur de tes ambitions, vitrine digitale, pensé pour toi, unique, incontournable.

**Concret avant tout.** « Une page avec ta bio, tes photos, tes vidéos et ton contact booking » plutôt que « une présence digitale qui reflète ton identité ».

**Court.** 10 à 18 mots par phrase, une idée par phrase. Si deux phrases disent la même chose, en garder une. Un paragraphe qui peut perdre 30 % sans perdre de sens est trop long.

**Crédible.** Rien d'inventé : ni chiffre, ni client, ni résultat, ni témoignage. Pas de « le meilleur », « parfait », « révolutionnaire ». Les chiffres viennent du code (`liveExamplesCount`, `LEGAL`, `content/pricing.ts`).

**Lisible avant le SEO.** Un mot-clé qui rend la phrase bancale doit partir.

**À voix haute.** Si on ne dirait pas la phrase naturellement à un client, la réécrire.

## 3. Contrôler la charte

- Tutoiement partout, CTA à la première personne (« Demander mon press kit »).
- « 7 jours » sans « ouvrés » (sauf CGV), « sur mesure » sans trait d'union, « e-mail » avec.
- H2 sans point final, casse de phrase.
- Élision via `withDe()` devant un nom : « d'Arthur Chaps », « de DJ FLO ».
- Témoignages clients : jamais modifiés, même pour une faute.
- Une page d'accueil explique et rassure, elle ne force pas la vente. Une page métier dit ce qui est inclus, pour qui, et pourquoi c'est utile.

## 4. Rapport

Pour chaque problème, une ligne :

| Fichier:ligne | Texte actuel | Problème | Proposition |
| --- | --- | --- | --- |

Puis un verdict : **OK**, **À retoucher** (problèmes mineurs) ou **À réécrire** (texte creux ou hors charte).

Ne modifie les fichiers que si l'utilisateur le demande. Entre « plus impressionnant » et « plus compréhensible », propose toujours « plus compréhensible ».
