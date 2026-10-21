---
name: insta-visuel
description: Fabrique les visuels et vidéos Instagram de @presskit_for_you - captures des sites clients, slides de carrousel et couvertures en PNG, Reels et stories en MP4 - exclusivement avec le référentiel Instagram (DA, tokens extraits automatiquement, polices Anton et Manrope, gabarits Canva) et un contrôle automatique de conformité. Utilise ce skill dès que David veut des images, un PNG, une couverture, un montage, un Reel, une vidéo, une story animée ou « fais les visuels », ou après insta-post quand le post doit être produit.
---

# Visuels Instagram : @presskit_for_you

Tu fabriques les images et vidéos du compte. Le texte vient d'`insta-post` (ou de David) ; toi, tu le mets en forme sans rien improviser.

## Rien au hasard

| Quoi | Source unique |
| --- | --- |
| Couleurs, polices, tailles, formats, zones de sécurité, compositions, mouvements | `docs/instagram/da.md` (la §19, relevée dans Canva, prime sur le reste) |
| Valeurs CSS et constantes vidéo | `scripts/da-tokens.mjs` (dans ce dossier), qui les extrait de la DA : jamais retapées |
| Polices | `assets/fonts/` (Anton, Manrope) : jamais de police système ou de remplacement |
| Contenu d'un client | son site `*.presskit.fr`, jamais retouché, ou ce que David fournit |

Si une valeur manque dans la DA (une couleur, une taille, l'accent d'un client absent de la palette §3.6), n'en invente pas : demande à David, puis ajoute-la à `docs/instagram/da.md` avant de l'utiliser. Une valeur improvisée finit sur la grille et casse la cohérence construite dans Canva.

Lis la DA en entier avant de produire.

## Images (carrousels, couvertures, stories)

1. **Dossier de travail** temporaire, jamais dans `app/` ni `public/` (ces visuels ne font pas partie du site), avec un sous-dossier `captures/`.
2. **Captures** du site client selon la DA §7.1. Pleines pages : `node scripts/capture-fullpage.mjs <slug> --out <dossier>/captures` (script du site, à lancer depuis la racine du repo, toujours avec `--out`, sinon il écrase les aperçus du site).
3. **Une page HTML par slide** (`01-couverture.html`, `02-duo.html`…), avec `<meta name="canvas" content="1080x1350">` ou `"1080x1920"` et `<link rel="stylesheet" href="tokens.css">`. Dans le CSS, uniquement les variables de `tokens.css` (`var(--cover-black)`, `var(--blue-insta)`, `var(--font-display)`…). Compositions : DA §5 à §8 et §19.
4. **Rendu** : `node .claude/skills/insta-visuel/scripts/render.mjs <dossier>`. Le script régénère `tokens.css` depuis la DA, copie les polices, refuse l'export si Anton ou Manrope n'est pas chargée, écrit les PNG dans `export/`, puis lance `check-da.mjs`, qui rejette toute couleur, police ou dimension absente du référentiel.
5. **Si le contrôle échoue**, reviens aux tokens ; une valeur nouvelle passe d'abord par David et par la DA.
6. **Regarde chaque PNG** et passe la checklist de la DA (§17) : le script vérifie les valeurs, pas la composition ni l'orthographe.
7. **Canva** : fournis aussi les textes séparés pour que David puisse retravailler les couvertures. S'il le demande, pars d'une copie de ses designs existants avec son Brand Kit (`kAFC_yIvevI`).

## Vidéo (Reels, stories animées)

Projet Remotion dans `video/` (séparé du site, pour ne pas alourdir son déploiement). Une composition par Reel dans `video/src/`, enregistrée dans `video/src/Root.tsx`, sur le modèle de `video/src/TestCouverture.tsx`.

- Constantes (cadence, format, easing, durées, zones de sécurité) : `video/src/da.ts` ; couleurs et polices : `video/src/tokens.css`. Les deux sont régénérés depuis la DA à chaque `npm run studio` ou `npm run render` : ne jamais les modifier à la main, ni écrire une valeur en dur dans une composition.
- `useDaFonts()` annule le rendu si Anton ou Manrope n'est pas chargée.
- Rendu aux réglages de la DA (§12.1), depuis `video/` : `npm run render -- <Composition> out/<nom>.mp4 --codec=h264 --pixel-format=yuv420p --crf=18`.
- Contrôle : `ffprobe -v error -show_entries stream=codec_name,width,height,r_frame_rate,pix_fmt -of compact out/<nom>.mp4` doit donner h264, 1080 × 1920, 30/1, yuv420p. FFmpeg et ffprobe sont installés via Homebrew ; à défaut, `npm run ffmpeg` et `npm run ffprobe` (fournis par Remotion).
- Le rendu Remotion ne fonctionne pas dans le bac à sable de Claude Code : s'il se bloque sur « Waiting for root component to load », demande à David de lancer la commande dans son terminal.
- Pas de musique commerciale dans le fichier (DA §12.7).

## Rendre

```
Fichiers : [chemins des PNG ou MP4]
Gabarits DA utilisés : [§…]
Accent client : [hex, relevé sur …, présent dans DA §3.6 : oui / à valider]
Contrôle référentiel : [sortie de render.mjs ou de ffprobe]
Hors référentiel : [aucun, ou ce que David doit trancher]
```
