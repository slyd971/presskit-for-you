---
name: post-social
description: Crée les posts Instagram de @presskit_for_you - carrousels client slide par slide, scripts de Reels, couvertures, légendes, hashtags, textes alternatifs - et produit les visuels PNG en passant exclusivement par le référentiel Instagram (DA, tokens, polices, gabarits Canva), à partir des vrais presskits clients. Utilise ce skill dès que David veut un post, un carrousel, un Reel, une couverture, une story, une légende, une accroche, des hashtags, des visuels Instagram ou « le post de mardi », même s'il ne dit pas « post ».
---

# Posts Instagram : @presskit_for_you

Tu crées les posts du compte. Le cœur du feed, c'est le travail réalisé : un post montre le presskit d'un client en détail, pour qu'un indépendant se dise « je veux le même ».

## Le principe : rien au hasard

Tout ce que tu produis vient du **référentiel Instagram**, et de rien d'autre :

| Quoi | Source unique |
| --- | --- |
| Couleurs, polices, tailles, formats, zones de sécurité, compositions, mouvements | `docs/da-instagram.md` (la §19, relevée dans Canva, prime sur le reste) |
| Valeurs CSS | `.claude/skills/post-social/scripts/da-tokens.mjs`, qui les extrait de la DA (§14.1) : jamais retapées |
| Polices | `.claude/skills/post-social/assets/fonts/` (Anton, Manrope) : jamais de police système ou de remplacement |
| Clients publiables, répartition, grille, ton et règles des légendes, hashtags, interdits | `.claude/skills/strategie-social/references/ligne-editoriale.md` |
| Textes sur un client | son site `*.presskit.fr` ou David |
| Formules d'accroche | DA §11 et §16, gabarits Canva (§19) |

Si une décision n'est couverte par aucune de ces sources (une couleur, une taille, une formule, un fait client), ne l'invente pas : demande à David, ou applique la valeur par défaut marquée `À CONFIRMER` dans la DA et signale-la. Une valeur improvisée finit sur la grille et casse la cohérence que David a construite dans Canva.

Lis la DA en entier et la ligne éditoriale avant de commencer.

## 1. Choisir le client et réunir la matière

- Le client figure dans la liste des clients validés de la ligne éditoriale ; sinon, accord de David d'abord.
- Pas deux posts consécutifs du même client (vérifie les derniers posts dans Metricool si tu peux).
- Sur son site `*.presskit.fr` (lien dans `content/site.ts`), relève ce qui s'y trouve vraiment : nom tel qu'il l'écrit, métier, sections, photos, et **couleur d'accent** (boutons, soulignés, halos). Si cet accent ne figure pas dans la palette de la DA (§3.6), demande à David de le valider pour l'ajouter au référentiel.
- Tout texte affiché vient du site du client ou de David : un club, une date ou une citation inventés peuvent mettre le client dans l'embarras devant ses bookers.

## 2. Choisir le format et le gabarit

Le format suit la DA, sans variante maison :

- carrousel client : DA §11.3 ;
- Reel client : DA §12.5 ;
- couverture de Reel ou de carrousel : gabarit Canva de la DA §19 (titre = nom du client, sous-titre = formule de référence) ;
- avant / après : DA §11.4, avec une capture « avant » fournie par David ;
- conseil : DA §11.5.

Place dans la grille : DA §13 (fond de couverture, client, format, modèle de couverture de Reel).

## 3. Écrire

- **Couverture** : le nom du client en titre, la formule de référence en sous-titre (« DÉCOUVRE SON PRESSKIT. », « NOUVELLE COLLAB PRESSKIT DÉBLOQUÉE », « IL NOUS A FAIT CONFIANCE »), le métier tel que le site l'écrit. Si tu proposes une autre accroche, signale-la comme hors gabarit pour que David tranche.
- **Slides intérieures** : limite de mots et micro-labels selon la DA (§0.2, §8).
- **Script de Reel** : tableau temps / image / texte à l'écran / mouvement, en suivant les durées, mouvements et textes de la DA (§12). Le premier frame doit pouvoir servir de couverture.
- **Légende, hashtags, texte alternatif** : règles de la ligne éditoriale (première ligne, longueur, action unique, nombre de hashtags pris dans la banque, élision).

## 4. Produire les visuels

Quand David demande les visuels, et pas seulement le texte :

1. **Dossier de travail** temporaire (jamais dans `app/` ni `public/` : ces visuels ne font pas partie du site), avec un sous-dossier `captures/`.
2. **Captures** du site client selon la DA §7.1. Pour les pleines pages : `node scripts/capture-fullpage.mjs <slug> --out <dossier>/captures`, toujours avec `--out`, sinon il écrase les aperçus du site.
3. **Une page HTML par slide** (`01-couverture.html`, `02-duo.html`…), avec `<meta name="canvas" content="1080x1350">` ou `"1080x1920"` et `<link rel="stylesheet" href="tokens.css">`. Dans le CSS, uniquement les variables de `tokens.css` (`var(--cover-black)`, `var(--blue-insta)`, `var(--font-display)`…) : aucune couleur, police ou taille écrite en dur. Les compositions suivent la DA (§5 à §8).
4. **Rendu** : `node .claude/skills/post-social/scripts/render.mjs <dossier>`. Le script régénère `tokens.css` depuis la DA, copie les polices, refuse l'export si Anton ou Manrope n'est pas chargée, écrit les PNG dans `export/`, puis lance `check-da.mjs`, qui rejette toute couleur, police ou dimension absente du référentiel.
5. **Si le contrôle échoue**, corrige la page pour revenir aux tokens. Une valeur nouvelle n'entre que si David la valide, et elle s'ajoute alors à `docs/da-instagram.md` avant d'être utilisée.
6. **Regarde chaque PNG** et passe la checklist de la DA (§17) : le script vérifie les valeurs, pas la composition ni l'orthographe.
7. **Canva** : fournis aussi les textes séparés pour que David puisse retravailler les couvertures. Si David le demande, pars de ses designs Canva existants (copie d'un gabarit plutôt que création depuis zéro) avec son Brand Kit (`kAFC_yIvevI`).
8. **Vidéo** : projet Remotion dans `.claude/skills/post-social/video/` (séparé du site, pour ne pas alourdir son déploiement). Une composition par Reel dans `src/`, enregistrée dans `src/Root.tsx`, sur le modèle de `src/TestCouverture.tsx`.
   - Constantes (cadence, format, easing, durées, zones de sécurité) : `src/da.ts` ; couleurs et polices : `src/tokens.css`. Les deux sont régénérés depuis la DA à chaque `npm run studio` ou `npm run render` : ne jamais les modifier à la main, ni écrire une valeur en dur dans une composition.
   - `useDaFonts()` annule le rendu si Anton ou Manrope n'est pas chargée.
   - Rendu aux réglages de la DA (§12.1) : `npm run render -- <Composition> out/<nom>.mp4 --codec=h264 --pixel-format=yuv420p --crf=18`.
   - FFmpeg et ffprobe (assemblage, contrôle) : `npm run ffmpeg -- …` et `npm run ffprobe -- …`, fournis par Remotion. Contrôle d'un export : `npm run ffprobe -- -v error -show_entries stream=codec_name,width,height,r_frame_rate,pix_fmt -of compact out/<nom>.mp4` doit donner h264, 1080 × 1920, 30/1, yuv420p.
   - Le rendu Remotion ne fonctionne pas dans le bac à sable de Claude Code (le navigateur ne joint pas le serveur local de Remotion) : si la commande se bloque sur « Waiting for root component to load », demande à David de la lancer dans son terminal.
   - Pas de musique commerciale dans le fichier (DA §12.7).

## 5. Se relire

Passe la légende au crible de `.claude/skills/relecture-contenu/SKILL.md`, puis vérifie les interdits de la ligne éditoriale (prix, délai, « retouches illimitées », « TTC », note de travail oubliée dans le texte à coller).

## 6. Rendre

```
**Post du [date] : [client] · [carrousel / Reel]**
Place dans la grille : [fond de couverture, client précédent, pourquoi maintenant] (DA §13)

Couverture : [titre] / [sous-titre] / [métier] — gabarit DA §19
[Slides une par une : gabarit DA utilisé, captures, texte] ou [script du Reel]

Légende :
[texte prêt à coller]

Hashtags : #… #… #…
Textes alternatifs : [un par visuel]
Accent client : [hex, relevé sur …, présent dans DA §3.6 : oui / à valider]
Contrôle référentiel : [sortie de render.mjs, ou « texte seul, pas de visuel »]
Hors référentiel : [aucun, ou la liste de ce que David doit trancher]
À fournir par David : [photos, capture « avant », son, accord client]
```

## 7. Programmer (seulement sur demande)

Ne publie jamais directement. Si David demande de programmer : `getBrandSettings` (marque `presskit_for_you`), puis `createScheduledPostForReview` avec la date validée et David en relecteur. Si l'outil refuse (offre Metricool sans validation d'équipe), donne le contenu prêt à coller et dis pourquoi.
