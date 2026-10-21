# DA PressKit For You — Référentiel visuels Instagram & montages vidéo

> **À l'attention de Claude Code.** Ce document est la source de vérité pour produire les visuels (carrousels, couvertures, stories) et les montages vidéo (Reels, stories animées) du compte Instagram **@presskit_for_you**.
> Lis-le en entier avant toute production. En cas de conflit entre ce document et une intuition « design », **ce document gagne**. En cas de doute sur un contenu client ou un point marqué `À CONFIRMER`, **demande à David** au lieu d'improviser.

**Légende des valeurs**
- Valeur sans marque = valeur canonique (issue du site presskit.fr ou validée par David). Ne pas modifier.
- `≈` = valeur de calibrage proposée pour l'adaptation Instagram. Tu peux l'ajuster de ±15 % si le rendu l'exige, sans changer l'intention.
- `À CONFIRMER` = point non tranché : produire la version par défaut indiquée et le signaler à David.

---

## 0. Règles non négociables (à relire avant chaque export)

1. **Un post = un client.** Le cœur du feed, c'est le travail réalisé : le site presskit du client, montré en détail (hero, sections, mobile/desktop). Les posts « conseil » sont minoritaires et toujours habillés visuellement.
2. **Le feed reste visuel.** Jamais plus de ~12 mots de texte affiché par slide (hors slide conseil). Le texte long va dans la légende, pas dans l'image.
3. **Deux polices, deux rôles, jamais d'autre :**
   - **Anton** → titres de couverture et gros titres d'accroche de la grille (majuscules).
   - **Manrope** → tout le reste (sous-titres secondaires, micro-labels, corps, chiffres, UI).
   - Interdit : Cormorant Garamond (chargée sur le site mais inutilisée), polices système, scripts, polices « fun ».
4. **Le bleu Instagram est `#1794e4`** pour les sous-titres de couverture, y compris sur fond clair. `#1677ff` et `#3983dc` ne servent qu'à reproduire fidèlement l'UI du site.
5. **Couvertures :** titre blanc sur fond noir (ou titre noir sur fond clair) + sous-titre `#1794e4`. Une autre police ou une autre couleur casse la cohérence de la grille.
6. **Coins 8px, bordures 1px** sur toutes les cartes, badges, cadres. (Exception : coques de téléphone, voir §7.)
7. **Ne jamais inventer d'info client** (dates, chiffres, résidences, références, citations). Uniquement ce qui figure sur son site ou ce que David fournit.
8. **Le vert WhatsApp `#25D366` est réservé au CTA contact.** Jamais comme couleur décorative.
9. **Animations lentes et douces.** Pas de glitch, pas de shake, pas de zoom punchy, pas de transitions « TikTok template ».
10. **Zones de sécurité respectées** sur chaque format (§10). Aucun texte ni logo hors zone.

---

## 1. Contexte de marque (ce qu'on vend, à qui)

- **PressKit For You (presskit.fr)** : sites presskit premium sur-mesure pour artistes, DJs, danseurs, photographes, coachs, maquilleurs, organisateurs d'événements, et plus largement créatifs et indépendants.
- **Univers** : scène musicale et événementielle, notamment afro-caribéenne et Antilles. Nuit, club, énergie — mais traité de façon **éditoriale et premium**, pas « flyer de soirée ».
- **Cible du compte** : tous les indépendants créatifs susceptibles de commander un presskit (pas seulement les organisateurs de soirées).
- **Ce que le visuel doit faire ressentir** : « ce site fait passer l'artiste dans une autre catégorie » → image pro, bookings, crédibilité auprès des organisateurs, marques et médias.
- **Objectifs** : abonnés qualifiés, crédibiliser l'offre en montrant les réalisations, générer des demandes (DM, lien en bio vers presskit.fr).

---

## 2. Direction artistique — l'intention

**DA sombre, éditoriale et premium.** Surfaces noires bleutées, blancs translucides, grilles fines, halos radiaux, mockups desktop/mobile.

**Tension structurante : sombre immersif ↔ rupture blanche éditoriale.**
- Le sombre porte l'immersion (le travail, le produit, l'ambiance).
- Le blanc arrive en rupture pour les moments de preuve, de citation, de chiffre, de CTA/contact.
- Sur un carrousel ou dans un Reel, cette alternance crée le rythme. Sur la grille, elle crée le damier.

**Les 4 motifs signature (à retrouver dans quasi tous les visuels) :**
1. **Fond sombre stratifié** : dégradés entre `#0d1118`, `#111620`, `#171d28`, `#1d2430` + grille fine + bruit.
2. **Surfaces glass** : blanc à 3–7,5 % d'opacité, bordures blanches faibles, ombres noires profondes.
3. **Mockups produit** : cadres noirs, desktop incliné, mobile superposé, reflets.
4. **Typo display serrée** : Manrope semibold, tracking −0.05em, interlignage très compact (et Anton pour les couvertures, §4).

**Autres signatures à réutiliser :** micro-labels espacés en majuscules, animations lentes, un accent couleur propre à chaque client, mini-schémas de process (dossier → maquette → livraison).

**Ce que la DA n'est PAS :** néon saturé partout, dégradés arc-en-ciel, stickers, emojis dans l'image, ombres portées grises molles, coins très arrondis type « bulle », photos détourées avec contour blanc, texte en contour (outline), effets 3D chromés.

---

## 3. Couleurs

### 3.1 Fonds sombres (base du feed)
| Token | Hex | Usage |
|---|---|---|
| `--bg-0` | `#0d1118` | Fond le plus profond |
| `--bg-1` | `#111620` | Fond principal |
| `--bg-2` | `#171d28` | Couche intermédiaire / cartes pleines |
| `--bg-3` | `#1d2430` | Couche haute / zones éclairées |
| `--cover-black` | `#000000` | Fond des couvertures noires (relevé dans Canva, couvertures de Reel d'octobre 2026) |

### 3.2 Noirs de mockup
| Token | Hex |
|---|---|
| `--mockup-0` | `#050609` |
| `--mockup-1` | `#0b0e14` |
| `--phone-shell` | `linear-gradient(145deg, #343a4b, #07090e 42%, #171b25)` |

### 3.3 Surfaces claires (ruptures blanches)
| Token | Hex | Usage |
|---|---|---|
| `--light-0` | `#ffffff` | Blanc pur (couvertures claires, cartes) |
| `--light-1` | `#f6f7f8` | Blanc froid |
| `--light-2` | `#f7f6f1` | Blanc cassé chaud |
| `--light-3` | `#f2efe8` | Crème |
| `--light-4` | `#F4EFE7` | Crème éditorial |
| `--cover-light` | `#f4f3ef` | Fond des couvertures claires (relevé dans Canva : Julia, Soyumi) |

### 3.4 Texte
| Contexte | Couleur |
|---|---|
| Texte principal sur sombre | `#f7f5f0` (ou `#ffffff` pour les titres de couverture) |
| Texte secondaire sur sombre | blanc à 62 % → 84 % d'opacité |
| Texte principal sur clair | `#10141d` (token central) |
| Texte secondaire sur clair | `#303744` → `#5d6470` |
| Titre de couverture sur fond clair | `#000000` (relevé dans Canva) |

### 3.5 Bleus (attention, trois bleus, trois rôles)
| Hex | Rôle | Où l'utiliser |
|---|---|---|
| **`#1794e4`** | **Bleu de marque Instagram** | Sous-titres de couverture (fond noir ET fond clair), accents de texte Instagram |
| `#1677ff` | Bleu UI du site (mode clair) | Uniquement pour reproduire l'UI presskit.fr à l'identique |
| `#3983dc` | Bleu UI du site (mode sombre) | Idem, en contexte sombre |

### 3.6 Accents artistiques par client
Palette d'accents utilisée sur les sites, un accent par client/métier, **non uniformisés** :
`#FF9152` `#CE5DFF` `#F4C26B` `#F46B8D` `#D5A928` `#63E6BE` `#5FA8FF` `#FF8DAA` `#FFD37A` `#C8BBAE` `#D04C57` `#4B6CFF` `#D7A86E` `#E25E3E`

**Règles :**
- Chaque post client prend **l'accent de son propre site**. Pour le trouver : lire la couleur d'accent dominante dans le CSS/le rendu du site `*.presskit.fr` du client (boutons, soulignés, halos). Si ambigu → demander à David. Ne jamais attribuer une couleur « au feeling ».
- L'accent client sert à : halo radial derrière les mockups, petit trait/puce, micro-label, reflet. **Jamais** comme couleur de titre de couverture (titres = blanc/noir, sous-titre = `#1794e4`).
- Dose : l'accent client ne dépasse pas ~10 % de la surface visible.

### 3.7 Couleur fonctionnelle
- Vert WhatsApp `#25D366` (hover/appuyé `#1fbd59`) : uniquement sur un CTA « contact / WhatsApp ».

### 3.8 Alphas de référence (sur sombre)
| Niveau | Valeur |
|---|---|
| Surface glass faible | `rgba(255,255,255,0.03)` |
| Surface glass moyenne | `rgba(255,255,255,0.05)` |
| Surface glass forte | `rgba(255,255,255,0.075)` |
| Bordure faible | `rgba(255,255,255,0.08)` |
| Bordure standard | `rgba(255,255,255,0.12)` |
| Bordure forte / état actif | `rgba(255,255,255,0.18)` → `0.24` |
| Bordure sur clair | `rgba(16,20,29,0.08)` → `0.28` |

---

## 4. Typographie

### 4.1 Familles
| Police | Graisses | Source | Rôle |
|---|---|---|---|
| **Anton** | Regular (400, déjà très gras) | Google Fonts | Titres de couverture, gros titres d'accroche, majuscules uniquement |
| **Manrope** | 400, 500, 600 (semibold = graisse display), 700, 800 | Google Fonts | Tout le reste |

Charger les fontes localement (fichiers `.woff2`/`.ttf` dans le projet) pour que les rendus headless et vidéo soient identiques. Vérifier que la police est bien chargée avant capture (`document.fonts.ready`).

### 4.2 Règle de conversion web → canvas Instagram
Un canvas de 1080 px de large s'affiche sur ~390 pt de large sur téléphone → **facteur ≈ 2,75**. Pour transposer une taille du site : `taille_canvas ≈ taille_web × 2,75`.

### 4.3 Hiérarchie sur canvas 1080 px
| Niveau | Police | Taille ≈ | Interlignage | Tracking | Casse |
|---|---|---|---|---|---|
| Titre de couverture | Anton | 130–190 px | 0.92–0.98 | 0 à −0.01em | MAJUSCULES |
| Sous-titre de couverture | Même police que le titre, en gras (relevé dans Canva) — couleur `#1794e4` | 84 px (Canva) | 0.70 | −0.019em | MAJUSCULES |
| Titre display Manrope (slides intérieures) | Manrope 600 | 88–140 px | 0.91–1.0 | −0.05em | Phrase |
| Titre H2 Manrope | Manrope 600 | 64–84 px | 1.04 | −0.04em | Phrase |
| Stat / citation monumentale | Manrope 600 | 220–360 px | 0.85–0.9 | −0.06em | — |
| Corps | Manrope 500 | 34–42 px | 1.3–1.4 | −0.01em | Phrase |
| Micro-label (signature) | Manrope 600–700 | 22–30 px | 1 | **0.12em → 0.28em** | MAJUSCULES |
| Mentions / crédits | Manrope 500 | 22–26 px | 1.3 | 0.02em | Phrase |

Repères du site (pour reproduire l'UI) : hero `clamp(2.28rem, 9.5vw, 5.45rem)` interlignage 0.91 ; H2 `text-3xl → text-5xl` interlignage 1.04 ; stats jusqu'à 12rem ; micro-labels 8–11px, tracking 0.12–0.28em.

### 4.4 Règles typo
- Couvertures : 3 à 6 mots en Anton, sur 2–4 lignes, centrés. Couper les lignes à la main pour un gris typographique équilibré (pas de mot orphelin).
- Pas plus de 2 niveaux typographiques par slide (+ micro-label).
- Pas d'italique synthétique, pas de souligné, pas de texte en contour, pas d'ombre portée sur le texte (sauf ombre très diffuse `0 2px 24px rgba(0,0,0,.35)` sur photo, si nécessaire à la lisibilité).
- Alignement : centré pour couvertures ; à gauche (fer à gauche) pour slides éditoriales.
- Apostrophes typographiques (’), guillemets français « » avec espaces insécables, espace insécable avant `: ; ! ?`.

---

## 5. Fonds & textures

### 5.1 Fond sombre stratifié (fond par défaut)
Composé de 4 couches, du bas vers le haut :
1. **Dégradé de base** vertical : `#111620` (haut) → `#0d1118` (bas), avec une zone `#171d28`/`#1d2430` au tiers haut.
2. **Halo radial** : un halo blanc très doux (`rgba(255,255,255,0.06)`) ou teinté de l'accent client (alpha ≈ 0.14–0.22), centré derrière le sujet principal (mockup), rayon ≈ 60–80 % du canvas.
3. **Grille fine** ≈ : lignes 1 px `rgba(255,255,255,0.035)`, pas de 72 px, masquée par un dégradé radial (visible au centre, fondue vers les bords).
4. **Bruit** ≈ : grain fin (feTurbulence, `baseFrequency ≈ 0.8`), opacité 0.04–0.07, mode `overlay` ou `soft-light`. Indispensable pour éviter le banding en export JPEG/H.264.

### 5.2 Fond clair éditorial (ruptures)
- Aplat `#ffffff`, `#f6f7f8` ou crème `#F4EFE7`/`#f2efe8`.
- Optionnel : grille fine `rgba(16,20,29,0.05)` + bruit très léger (0.03).
- Texte `#10141d`. Pas de halo coloré sur fond clair (ou très discret, alpha < 0.10).

### 5.3 Fond couverture
- **Noire** : aplat noir pur `#000000` — fond sobre, éventuellement avec grain léger.
- **Claire** : aplat `#f4f3ef`, titre `#000000`, sous-titre `#1794e4`.
- **Photo** (modèle « Il nous a fait confiance ») : photo du client (fournie/issue de son site), assombrie par un dégradé noir bas → haut (`rgba(0,0,0,0.75)` → `0`) pour garantir la lisibilité du titre.

---

## 6. Formes, surfaces, ombres

| Élément | Spécification |
|---|---|
| Radius standard | **8 px** (web) → **≈ 16–22 px sur canvas 1080** pour garder la même perception. `À CONFIRMER` si David veut 8 px littéraux sur canvas. |
| Bordures | 1 px web → **2 px sur canvas 1080** (≈ même rendu perçu) ; couleur selon §3.8 |
| Carte glass | fond `rgba(255,255,255,0.05)`, bordure `rgba(255,255,255,0.12)`, `backdrop-filter: blur(16–24px)`, ombre `0 24px 70px rgba(0,0,0,0.45)` |
| Ombre mockup | `0 24px 70px rgba(0,0,0,0.38)` → `0 40px 120px rgba(0,0,0,0.55)` (sur canvas, multiplier offsets/flous par ~1,5–2) |
| Halo bouton primaire | `0 18px 50px rgba(255,255,255,0.16)` |
| Badge glass | pastille : fond glass, bordure faible, flou d'arrière-plan, micro-label en majuscules espacées |

Pas d'ombres grises (`#999`), pas d'ombres colorées vives, pas de biseau.

---

## 7. Mockups (le cœur des posts clients)

### 7.1 Captures des sites clients
- Source : le site `*.presskit.fr` du client, en production.
- **Desktop** : viewport 1440×900, `deviceScaleFactor: 2`. **Mobile** : viewport 390×844, `deviceScaleFactor: 3`.
- Attendre le chargement complet (fontes, images, animations d'apparition terminées ≈ +1,5 s) avant capture.
- Masquer/fermer bannières cookies et éléments parasites. Ne jamais retoucher le contenu du client (textes, chiffres, photos).
- Captures utiles : hero, sections clés (bio, mixes/vidéos, galerie, références, contact), version mobile du hero, et une capture pleine page pour les scrolls vidéo.

### 7.2 Mockup desktop
- Cadre noir `#050609`–`#0b0e14`, coins arrondis, fine bordure `rgba(255,255,255,0.12)`.
- **Incliné** ≈ : `perspective(2400px) rotateY(-14deg) rotateX(6deg) rotateZ(1.5deg)` — inclinaison sobre, jamais « vue de dessus » exagérée.
- Reflet ≈ : dégradé linéaire blanc 0 → 0.06 → 0 en diagonale sur l'écran.
- Ombre profonde (§6).

### 7.3 Mockup mobile
- Coque : `linear-gradient(145deg, #343a4b, #07090e 42%, #171b25)`.
- Rayon coque ≈ 56–64 px, bezel ≈ 12–16 px, rayon écran ≈ 44–50 px (sur canvas 1080). Pas d'encoche détaillée ni de logo de marque de téléphone.
- **Superposé** au desktop : placé devant, décalé en bas à droite (ou à gauche, alterner), recouvrant ≈ 15–25 % du desktop, légèrement moins incliné que le desktop.

### 7.4 Compositions types
| Nom | Description |
|---|---|
| **Duo** | Desktop incliné + mobile superposé, halo accent client derrière. Composition signature. |
| **Mobile seul héroïque** | Un téléphone droit ou légèrement incliné, centré, 70–80 % de la hauteur utile. Idéal couverture Reel « téléphone avec le site ». |
| **Trio mobile** | 3 téléphones (3 sections du site) en éventail, celui du centre devant. |
| **Section plein cadre** | Capture d'une section dans un cadre desktop droit, plein largeur, pour montrer un détail. |
| **Détail zoomé** | Recadrage serré sur un élément (nom de l'artiste, bouton booking, grille photo) dans une carte glass. |

---

## 8. Composants graphiques réutilisables

- **Micro-label** : Manrope 600–700, 22–30 px, MAJUSCULES, tracking 0.18–0.28em, couleur blanc 62 % (sur sombre) ou `#5d6470` (sur clair). Ex. : `PRESSKIT · DJ`, `VERSION MOBILE`, `NOUVEAU SITE`, `01 / 05`.
- **Badge glass** : pastille arrondie (radius plein ou 8 px ≈ 16–22 px), fond glass, micro-label dedans. Ex. : nom du client + métier.
- **Pagination de carrousel** : micro-label `01 / 06` en haut à gauche ou à droite, constant d'une slide à l'autre.
- **Signature de marque** : `presskit.fr` ou `@presskit_for_you` en micro-label discret, bas de slide, dans la zone de sécurité. Pas de gros logo sur chaque slide.
- **CTA final** : bloc clair (rupture blanche) ou carte glass : « Ton presskit, c'est par ici » ≈ + micro-label `LIEN EN BIO` ou `ÉCRIS-NOUS EN DM`. Vert WhatsApp seulement si le CTA est explicitement « WhatsApp ».
- **Mini-schémas process** : 3 pictos linéaires 2 px (dossier → maquette → livraison), reliés par une ligne fine, micro-labels dessous. Style trait, blanc 84 % ou `#10141d`, jamais d'icônes remplies colorées.
- **Flèche « swipe »** (slide 1 de carrousel uniquement) : petite flèche trait 2 px ou micro-label `GLISSE →`, discret.

Vocabulaire dans les visuels : parler de **« presskit »** ou **« portfolio »**, pas systématiquement de « lien ». Tutoiement autorisé.

---

## 9. Formats Instagram & dimensions

| Format | Canvas d'export | Ratio | Notes |
|---|---|---|---|
| Carrousel / post image | **1080 × 1350** | 4:5 | Toutes les slides au même format |
| Reel | **1080 × 1920** | 9:16 | 30 fps |
| Couverture de Reel | **1080 × 1920** | 9:16 | Conçue centrée (recadrée en 4:5 dans le fil et 3:4 sur la grille) |
| Story | **1080 × 1920** | 9:16 | — |

---

## 10. Zones de sécurité

### Carrousel 1080 × 1350
- Marges intérieures : **≥ 72 px** sur les côtés, **≥ 80 px** haut et bas.
- **Zone grille 3:4** : la grille du profil n'affiche que la bande centrale ≈ **1012 × 1350** → la slide 1 ne doit rien avoir d'important dans les 34 px de chaque côté (et en pratique on garde 72 px).

### Reel 1080 × 1920
- **Zone de travail sûre : 1080 × 1440 centrée** (y = 240 → 1680) pour le titre et tout élément clé — c'est elle qui survit au recadrage 3:4 de la grille.
- **Interface Instagram** : réserver ≈ 250 px en haut, ≈ 400 px en bas (légende, son, pseudo) et ≈ 140 px à droite (boutons j'aime/commenter/partager) pour les textes affichés pendant la vidéo.
- Sous-titres : entre y ≈ 1180 et y ≈ 1480, centrés, largeur max ≈ 860 px.

### Couverture de Reel 1080 × 1920
- Titre 3–6 mots **centré verticalement et horizontalement**, dans les **60 % centraux**. Tout ce qui est hors du rectangle 1080 × 1350 central doit être sacrifiable (fond, prolongement du mockup).

### Story 1080 × 1920
- Éviter les **250 px du haut et du bas**. Laisser de la place pour stickers (sondage, lien) au tiers bas, ≈ y 1250–1550.

---

## 11. Templates de posts

### 11.1 Couverture « Nouvelle collab » (slide 1 de carrousel ou couverture de Reel)
- Fond noir (ou blanc en alternance de grille).
- Titre Anton, blanc (noir sur fond clair), ex. **« NOUVELLE COLLAB PRESSKIT DÉBLOQUÉE »**.
- Sous-titre `#1794e4` : nom du client / métier, ex. « DJ SOYUMI ».
- Optionnel : petit mockup ou téléphone sous le titre, sans gêner la zone centrale de lecture.

### 11.2 Couvertures de Reels — deux modèles à alterner
1. **Photo « Il nous a fait confiance »** : photo du client + titre Anton + sous-titre `#1794e4`.
2. **Téléphone avec le site** : mockup mobile héroïque affichant le site + titre ex. « DÉCOUVRE SON PRESSKIT ».
- Garder le mix fonds noirs / fonds blancs déjà en place sur la grille. Tutoiement dans les accroches.
- David veut aussi ces couvertures dans son **Canva** : exporter en PNG 1080 × 1920 + fournir les textes séparément pour qu'il puisse les reproduire/éditer.

### 11.3 Carrousel client — structure de référence (5 à 8 slides)
| Slide | Fond | Contenu |
|---|---|---|
| 1 | Couverture (§11.1) | Accroche + nom du client |
| 2 | Sombre stratifié + halo accent client | Duo desktop incliné + mobile superposé (hero du site) |
| 3 | Sombre | Hero desktop plein cadre + micro-label `HERO` ou nom de section |
| 4 | Clair (rupture) | Version mobile : 1 ou 3 téléphones |
| 5 | Sombre | Section clé (mixes, vidéos, galerie, références) en détail zoomé |
| 6 (opt.) | Sombre | Autre section clé |
| 7 (opt.) | Clair | Citation ou fait **issu du site du client** (jamais inventé) en typo monumentale |
| Dernière | Clair ou glass | CTA : presskit/portfolio + `LIEN EN BIO` / `DM` |

Continuité : la pagination, les marges et la position du micro-label restent identiques d'une slide à l'autre. Un élément peut « déborder » d'une slide à la suivante (mockup coupé au bord) pour inciter au swipe — uniquement entre slides intérieures.

### 11.4 Avant / après
- Split vertical ou deux slides consécutives. « Avant » (capture fournie par David : ancien site, linktree, profil Insta) désaturé, opacité 70 %, micro-label `AVANT`. « Après » en pleine couleur, mockup, micro-label `APRÈS` en accent client.

### 11.5 Post conseil (minoritaire)
- Fond sombre stratifié ou clair éditorial, un titre Manrope display court, 3 points max, toujours accompagné d'un visuel (mockup, mini-schéma, détail de site). Jamais un pavé de texte sur aplat.

### 11.6 Stories
- Coulisses (captures du travail en cours, avec accord), sondages, lancement d'un nouveau site, repartage des clients.
- Même fond, mêmes polices, micro-labels. Stickers natifs Instagram posés dans la zone prévue (§10).

---

## 12. Montage vidéo (Reels & stories animées)

### 12.1 Paramètres techniques
| Paramètre | Valeur |
|---|---|
| Résolution | 1080 × 1920 |
| Cadence | 30 fps (constante) |
| Codec | H.264 (High), `yuv420p`, `+faststart` |
| Débit vidéo | ≈ 12–16 Mb/s (CRF ≈ 18 si encodage FFmpeg) |
| Audio | AAC 48 kHz, ≈ 256 kb/s |
| Durée cible | ≈ 12–30 s pour un Reel client ; 7–15 s par story |
| Grain | conserver le bruit du fond (évite le banding après recompression Instagram) |

### 12.2 Courbes & durées (issues du site)
| Usage | Durée | Frames @30fps |
|---|---|---|
| Feedback / micro-interaction | 180 ms | 5–6 |
| Survol / changement d'état | 420 ms | 13 |
| Apparition (reveal) | 480 ms | 14–15 |
| Apparition longue | 720 ms | 22 |
| Reflet « shine » | 760 ms | 23 |
| Rotation hero (une diapo) | 7,6 s | 228 |
| Scroll lent d'un site | 8 s | 240 |

**Easing d'entrée : `cubic-bezier(0.16, 1, 0.3, 1)`** (sortie rapide, atterrissage très doux). Sorties : même courbe inversée ou fondu simple 180–320 ms.

### 12.3 Mouvements autorisés (vocabulaire)
- **Reveal doux** : opacité 0 → 1 + translation verticale 24–40 px (canvas) → 0, easing ci-dessus.
- **Scroll lent du site** : capture pleine page qui défile dans le cadre du téléphone ou du desktop, vitesse constante ou easing très doux, ≈ 8 s pour une page.
- **Dérive des mockups** : légère rotation/translation continue (≤ 2° / ≤ 30 px sur toute la durée du plan), effet « objet qui flotte ».
- **Push-in lent** : zoom 1.00 → 1.06 max sur 3–5 s.
- **Shine** : reflet diagonal qui traverse un écran ou un bouton en 760 ms, une fois par plan max.
- **Transitions** : fondu enchaîné (240–480 ms), raccord par masque (un mockup qui glisse et révèle le plan suivant), coupe franche sur le temps fort de la musique. Bascule sombre → blanc = le moment fort (preuve, CTA).
- **Texte** : apparition ligne par ligne ou mot par mot en reveal doux ; micro-labels qui apparaissent avec un léger décalage (stagger 60–90 ms).

### 12.4 Interdits en vidéo
Glitch, RGB split, shake, flash blanc stroboscopique, zoom « punch », whip pan agressif, rotations 3D de cube, emojis animés, texte qui rebondit (bounce/elastic), transitions préfabriquées d'apps, sous-titres karaoké multicolores.

### 12.5 Structure type d'un Reel client (≈ 15–20 s)
| Temps | Plan |
|---|---|
| 0–1,5 s | Accroche : titre Anton (ou téléphone avec le site déjà en mouvement). Le premier frame doit déjà être lisible et beau (= couverture potentielle). |
| 1,5–5 s | Duo desktop + mobile, halo accent client, dérive lente |
| 5–12 s | Scroll lent du site dans le téléphone, coupes sur les sections clés (rythmées sur la musique) |
| 12–15 s | Rupture blanche : détail fort ou micro-labels du métier du client |
| 15–18 s | CTA : « Découvre son presskit » / « Ton presskit, c'est par ici » + `LIEN EN BIO` |

### 12.6 Sous-titres / textes à l'écran
- Manrope 600, 44–56 px, blanc `#f7f5f0`, sur pastille glass si le fond est chargé. Max 2 lignes, ≈ 32 caractères/ligne.
- Mots-clés éventuellement en `#1794e4` (un seul par phrase) — pas d'accent client sur le texte courant.

### 12.7 Audio
- Univers afro-caribéen / club, cohérent avec le client montré. Ne pas intégrer de musique commerciale dans le fichier exporté : soit un son libre de droits fourni par David, soit export **sans musique** + note pour que David ajoute le son depuis la bibliothèque Instagram au moment de publier. Si le client fournit un de ses propres mixes avec son accord, c'est le meilleur choix.
- Si coupes rythmées : caler les coupes sur les temps forts ; les reveals démarrent légèrement avant le temps fort (≈ 2–3 frames).

### 12.8 Outillage conseillé
- Visuels fixes : HTML/CSS (tokens §14) rendus en PNG via Playwright, `deviceScaleFactor: 1` sur un viewport de la taille exacte du canvas (ou 2 puis réduction si besoin de netteté).
- Vidéo : Remotion (React) avec les mêmes tokens, ou FFmpeg pour assembler/encoder. Courbe Remotion : `Easing.bezier(0.16, 1, 0.3, 1)`.
- Respecter le même fichier de tokens pour l'image et la vidéo afin que les couleurs soient identiques.

---

## 13. Cohérence de la grille

- **Alternance fond noir / fond blanc** des couvertures en damier (éviter 3 couvertures de même fond côte à côte sur une ligne).
- **Alternance des clients** : jamais deux posts du même client consécutifs.
- **Alternance des formats** : carrousel / Reel / (rare) post conseil.
- **Alternance des modèles de couverture Reel** : photo « confiance » / téléphone.
- **Accents clients** : éviter deux accents proches (ex. deux oranges) côte à côte.
- Avant de proposer un nouveau post, vérifier les 3–6 derniers posts publiés (si David les fournit) et justifier la place du nouveau dans la grille.

---

## 14. Tokens prêts à l'emploi

### 14.1 CSS
```css
@font-face { font-family: "Manrope"; src: url("./fonts/Manrope-Variable.woff2") format("woff2"); font-weight: 200 800; }
@font-face { font-family: "Anton"; src: url("./fonts/Anton-Regular.woff2") format("woff2"); font-weight: 400; }

:root {
  /* Fonds sombres */
  --bg-0: #0d1118; --bg-1: #111620; --bg-2: #171d28; --bg-3: #1d2430;
  --mockup-0: #050609; --mockup-1: #0b0e14;
  --phone-shell: linear-gradient(145deg, #343a4b, #07090e 42%, #171b25);

  /* Surfaces claires */
  --light-0: #ffffff; --light-1: #f6f7f8; --light-2: #f7f6f1; --light-3: #f2efe8; --light-4: #F4EFE7;

  /* Texte */
  --text-on-dark: #f7f5f0;
  --text-on-dark-2: rgba(255,255,255,0.72);   /* plage 0.62 → 0.84 */
  --text-on-light: #10141d;
  --text-on-light-2: #5d6470;                 /* plage #303744 → #5d6470 */

  /* Couvertures (relevé dans Canva, §19) */
  --cover-black: #000000;
  --cover-light: #f4f3ef;
  --cover-ink-dark: #ffffff;   /* titre, surtitre et métier sur fond noir */
  --cover-ink-light: #000000;  /* titre, surtitre et métier sur fond clair */
  --cover-title-size: 189px;   --cover-title-tracking: -0.052em;
  --cover-sub-size: 84px;      --cover-sub-tracking: -0.019em;
  --cover-label-size: 32px;    --cover-label-tracking: 0.134em;
  --cover-leading: 0.70;

  /* Bleus */
  --blue-insta: #1794e4;     /* sous-titres de couverture, accent Instagram */
  --blue-site-light: #1677ff;
  --blue-site-dark: #3983dc;

  /* Fonctionnel */
  --whatsapp: #25D366; --whatsapp-press: #1fbd59;

  /* Accent client — à surcharger par post */
  --accent: #5FA8FF;

  /* Glass & bordures */
  --glass-1: rgba(255,255,255,0.03); --glass-2: rgba(255,255,255,0.05); --glass-3: rgba(255,255,255,0.075);
  --border-1: rgba(255,255,255,0.08); --border-2: rgba(255,255,255,0.12); --border-3: rgba(255,255,255,0.18);
  --border-light: rgba(16,20,29,0.12);

  /* Formes (canvas 1080) */
  --radius: 18px;          /* ≈ 8px web perçu */
  --stroke: 2px;           /* ≈ 1px web perçu */
  --shadow-mockup: 0 40px 120px rgba(0,0,0,0.5);
  --shadow-glow: 0 18px 50px rgba(255,255,255,0.16);

  /* Typo */
  --font-display: "Anton", sans-serif;
  --font-ui: "Manrope", sans-serif;
  --tracking-tight: -0.05em;
  --tracking-label: 0.22em;

  /* Motion */
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
  --dur-feedback: 180ms; --dur-hover: 420ms; --dur-reveal: 480ms; --dur-long: 720ms; --dur-shine: 760ms;
}
```

### 14.2 Fond stratifié (HTML/CSS)
```html
<div class="bg-stratified">
  <div class="halo"></div>
  <div class="grid"></div>
  <div class="noise"></div>
</div>
<style>
.bg-stratified { position:absolute; inset:0; overflow:hidden;
  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 28%, var(--bg-1) 55%, var(--bg-0) 100%); }
.bg-stratified .halo { position:absolute; inset:-20%;
  background: radial-gradient(circle at 50% 45%, color-mix(in srgb, var(--accent) 20%, transparent) 0%, transparent 55%); }
.bg-stratified .grid { position:absolute; inset:0;
  background-image:
    linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
  background-size: 72px 72px;
  -webkit-mask-image: radial-gradient(ellipse at 50% 45%, #000 30%, transparent 75%);
          mask-image: radial-gradient(ellipse at 50% 45%, #000 30%, transparent 75%); }
.bg-stratified .noise { position:absolute; inset:0; opacity:0.06; mix-blend-mode:overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>"); }
</style>
```

### 14.3 Couverture (squelette)
```html
<section class="cover cover--dark"> <!-- ou cover--light -->
  <h1 class="cover-title">NOUVELLE COLLAB<br>PRESSKIT<br>DÉBLOQUÉE</h1>
  <p class="cover-sub">NOM DU CLIENT</p>
</section>
<style>
.cover { width:1080px; height:1350px; display:grid; place-content:center; text-align:center; gap:28px; padding:80px 72px; }
.cover--dark { background:#000; color:#fff; }          /* relevé dans Canva */
.cover--light { background:#f4f3ef; color:#000; }      /* relevé dans Canva */
.cover-title { font-family:var(--font-display); font-size:160px; line-height:0.94; text-transform:uppercase; margin:0; }
.cover-sub { font-family:var(--font-display); font-size:68px; line-height:1; color:var(--blue-insta); text-transform:uppercase; margin:0; }
</style>
```

### 14.4 Micro-label & carte glass
```css
.micro-label { font-family:var(--font-ui); font-weight:700; font-size:24px; letter-spacing:var(--tracking-label);
  text-transform:uppercase; color:var(--text-on-dark-2); }
.glass-card { background:var(--glass-2); border:var(--stroke) solid var(--border-2); border-radius:var(--radius);
  backdrop-filter:blur(20px); box-shadow:0 24px 70px rgba(0,0,0,0.45); }
```

### 14.5 Constantes Remotion
```ts
import { Easing } from "remotion";
export const FPS = 30;
export const SIZE = { width: 1080, height: 1920 };
export const EASE_OUT = Easing.bezier(0.16, 1, 0.3, 1);
export const DUR = { feedback: 6, hover: 13, reveal: 15, long: 22, shine: 23, heroSlide: 228, slowScroll: 240 }; // en frames
export const SAFE = { top: 240, bottom: 1680, uiTop: 250, uiBottom: 1520, uiRight: 940 }; // px
```

---

## 15. Contenu & clients

- **Clients validés pour publication** : DJ Soyumi, Paul-Kéranne (DJ), DJ Mack, Silver DJ, La Bringue (soirée réservée aux femmes), Lokko (photographe-vidéaste), Lokko TV (lokko-tv.presskit.fr), DJ SLY D (djslyd.presskit.fr), DJ GDC (dj-gdc.presskit.fr).
- **Demander à David avant toute publication** : DJ PIRATE (dj-pirate.presskit.fr), LA MIF (lamifparis.presskit.fr, soirée appart Paris).
- Tout texte affiché sur un visuel client provient de son site ou de David. Pas de chiffres, dates, clubs, festivals, citations inventés — même « pour illustrer ».
- Photos : uniquement celles présentes sur le site du client ou fournies par David. Pas de photos de banque d'images pour représenter un client.

---

## 16. Ton des textes dans les visuels

- Premium, moderne, direct, proche des artistes. Tutoiement OK.
- Parler résultats : image pro, bookings, crédibilité auprès des organisateurs, marques et médias.
- Pas de jargon technique (pas de « responsive », « SEO », « Next.js » dans les visuels).
- « Presskit » / « portfolio » plutôt que « lien ».
- Formules de référence : « Nouvelle collab presskit débloquée », « Découvre son presskit », « Il nous a fait confiance ».

---

## 17. Checklist QA avant export

- [ ] Format et dimensions exacts (§9), toutes les slides d'un carrousel identiques.
- [ ] Textes et éléments clés dans les zones de sécurité (§10) ; slide 1 / couverture lisible en recadrage 3:4.
- [ ] Polices : Anton (couvertures) + Manrope (reste), réellement chargées (pas de fallback).
- [ ] Sous-titre de couverture en `#1794e4` ; titre blanc sur noir ou noir sur clair.
- [ ] Accent client = celui de son site ; ≤ ~10 % de la surface.
- [ ] Radius et bordures conformes ; aucune ombre grise ou colorée vive.
- [ ] Aucune info client inventée ; orthographe et typographie françaises vérifiées (espaces insécables, « »).
- [ ] Alternance de grille respectée (fond, client, format, modèle de couverture).
- [ ] Vidéo : 30 fps, H.264 yuv420p, easing `cubic-bezier(0.16,1,0.3,1)`, aucun effet interdit (§12.4), premier frame présentable, audio conforme (§12.7).
- [ ] Visualiser l'export final (ouvrir le PNG/MP4) avant de le livrer.

---

## 18. Points à confirmer avec David

Tranchés par les couvertures Canva d'octobre 2026 (voir §19) : fond des couvertures noires (`#000000`), police du sous-titre (celle du titre, en gras).

1. ~~Fond exact des couvertures noires~~ → `#000000`.
2. ~~Police du sous-titre de couverture~~ → même police que le titre, en gras.
3. Radius sur canvas : 8 px littéral ou ≈ 18 px (équivalent perçu, défaut) ?
4. Accent couleur officiel de chaque client (à lister une fois pour toutes).
5. Logo / signature presskit.fr : version fichier à utiliser et emplacement fixe.
6. Musique : source libre de droits préférée, ou export sans musique par défaut.

---

## 19. Référence Canva : couvertures de Reel (octobre 2026)

Valeurs relevées dans le design Canva « Couverture de Reel Instagram DJ SLY'D. » (`DAHXG4WP4IY`, 7 pages : DJ SLY'D, DJ Pirate, DJ GDC, Lokko TV, Julia, Soyumi). Ce sont les derniers designs validés : en cas d'écart avec les sections précédentes, **ces valeurs gagnent**.

| Élément | Police (réf. Canva) | Taille | Couleur | Interlignage / tracking | Position (y sur 1920) |
|---|---|---|---|---|---|
| Fond | — | 1080 × 1920 | noir `#000000` ou clair `#f4f3ef` | — | — |
| Surtitre « PRESS KIT FOR YOU » (ou « PRESS KIT FOR YOU × CLIENT ») | `YAFdJvSyp_k`, medium | 32 px | `#ffffff` sur noir, `#000000` sur clair | 0.70 / +0.134em, MAJUSCULES | 108 |
| Titre : nom du client | `YACgEcYqQ-A` (Anton), normal | 189 px | `#ffffff` sur noir, `#000000` sur clair | 0.70 / −0.052em, MAJUSCULES | ≈ 230 |
| Sous-titre : « DÉCOUVRE SON PRESSKIT. » | `YACgEcYqQ-A`, gras | 84 px | `#1794e4` | 0.70 / −0.019em, MAJUSCULES | 462 |
| Métier (ex. « DJ & PRODUCTEUR », « PHOTOGRAPHE & VIDÉASTE ») | `YAFdJvSyp_k`, medium | 32 px | `#ffffff` sur noir, `#000000` sur clair | 0.70 / +0.134em, MAJUSCULES | sous le visuel (≈ 1610–1720) sur noir, sous le sous-titre (≈ 583) sur clair |
| Visuel | — | téléphone ≈ 520 × 1007 centré, ou photo du client pleine largeur (détourée sur fond clair) | — | — | ≈ 460–1640 |

Tout est centré horizontalement. Le titre est placé dans le tiers haut (pas centré verticalement comme le suggère §10) : c'est la composition en place sur la grille, à garder pour la cohérence.

`À CONFIRMER` :
- le nom de la police `YAFdJvSyp_k` (surtitre et métier). La DA prévoit Manrope ; vérifier dans Canva qu'il s'agit bien de Manrope ;
- l'interlettrage du titre : la valeur Canva (−0.052) reportée en `em` dans le navigateur donne un titre plus serré que dans Canva. Comparer le premier rendu à l'export PNG de Canva avant de figer `--cover-title-tracking`.
