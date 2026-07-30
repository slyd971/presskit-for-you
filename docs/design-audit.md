# Audit du langage visuel PressKit

Audit realise sur le code source Next/Tailwind actuel, sans modification des fichiers de production. Sources inspectees: `app/globals.css`, `tailwind.config.ts`, `app/layout.tsx`, pages `app/page.tsx`, `app/galerie/page.tsx`, `app/not-found.tsx`, composants `components/layout`, `components/ui`, `components/marketing`, `content/site.ts`, `lib/motion.ts`, `lib/og-image.tsx`, dependances `package.json`.

## Synthese

PressKit utilise une direction artistique sombre, editoriale et premium, basee sur des surfaces noires bleutees, des blancs translucides, des grilles fines, des halos radiaux et des mockups desktop/mobile. Le site ne cherche pas une neutralite SaaS stricte: il alterne volontairement entre sections sombres immersives et ruptures blanches tres editoriales pour la preuve, la citation, le pricing et le contact.

Le langage le plus fort vient de quatre motifs recurrents:

- Fond sombre stratifie: `#0d1118`, `#111620`, `#171d28`, `#1d2430`, plus grilles et bruit lumineux.
- Surfaces premium translucides: `bg-white/[0.03]` a `bg-white/[0.075]`, bordures blanches faibles, ombres noires profondes.
- Mockups produit: cadres noirs, desktop incline, mobile superpose, reflets via `.mockup-surface`.
- Typographie display serree: Manrope, poids `semibold`, `tracking-tighter2`, line-height tres compacte.

Le risque principal n'est pas l'absence d'identite: elle existe deja. Le risque est sa dispersion: beaucoup de valeurs proches sont codees localement, avec des variantes de surfaces, bordures, shadows, tailles et espacements qui se ressemblent sans etre nommees.

## Inventaire visuel

### Couleurs

Palette recurrente:

- Fonds sombres globaux: `#0d1118`, `#111620`, `#171d28`, `#1d2430`.
- Noirs de mockup: `#080b11`, `#07090e`, `#050609`, `#0b0e14`, `#0a0c12`.
- Texte clair: `#f7f5f0`, `#ffffff`, `text-white`, `text-white/[0.62]` a `text-white/[0.84]`.
- Texte sombre sur sections claires: `#10141d`, `#11151d`, `#303744`, `#3d4551`, `#4d5561`, `#5d6470`.
- Surfaces claires: `#ffffff`, `#f6f7f8`, `#f7f6f1`, `#f5f5f1`, `#f2efe8`, `#F4EFE7`.
- Accents artistiques: `#FF9152`, `#CE5DFF`, `#F4C26B`, `#F46B8D`, `#D5A928`, `#63E6BE`, `#5FA8FF`, `#FF8DAA`, `#FFD37A`, `#C8BBAE`, `#D04C57`, `#4B6CFF`, `#D7A86E`, `#E25E3E`.
- Accent fonctionnel unique: WhatsApp `#25D366`, hover `#1fbd59`, texte `#07140c`.

Transparences recurrentes:

- Blanc surface: `white/[0.03]`, `white/[0.04]`, `white/[0.045]`, `white/[0.055]`, `white/[0.07]`, `white/[0.075]`, `white/[0.095]`.
- Blanc bordure: `white/[0.08]`, `white/[0.1]`, `white/[0.12]`, `white/[0.14]`, `white/[0.16]`, `white/[0.18]`, `white/[0.22]`, `white/[0.24]`.
- Texte secondaire sombre: `#10141d` avec alpha entre `0.03` et `0.32`.

Gradients recurrentes:

- `body`: radiaux blancs/acier tres faibles + linear sombre.
- `.section-wash`, `.section-tone-cool`, `.section-tone-lift`, `.section-contact`: fonds composes avec halos radiaux et linear gradients.
- Footer et hero: fonds sombres radiaux + linear.
- Mockups mobile: `linear-gradient(145deg,#343a4b,#07090e_42%,#171b25)`.
- Accents categorie: gradients Tailwind `from-[accent]/28-30 via-[accent2]/12 to-transparent`.

Incoherences probables:

- `#10141d` est un quasi-token central mais coexiste avec `ink: #0D1016`, `#11151d`, `#0d1016`, `#10141b`.
- Les noirs de mockup sont tres proches et parfois interchangeables.
- Les surfaces blanches faibles utilisent de nombreuses opacites proches sans seuils definis.
- `tailwind.config.ts` declare `mist`, `line`, `panel`, `panelStrong`, `shadow.glow`, `backgroundImage.noise`, mais ces tokens sont peu ou pas utilises dans les composants actuels.

Exceptions artistiques a conserver:

- Les accents par exemple/client dans `Hero`, `CategoriesGrid`, `content/site.ts`.
- Les ruptures blanches pleine section, qui donnent un rythme editorial.
- Le vert WhatsApp du CTA contact, fonctionnellement reconnaissable.

### Typographie

Familles:

- Sans: Manrope via `--font-sans`, appliquee au `body`.
- Serif: Cormorant Garamond via `--font-serif`, chargee mais non observee dans les composants inspectes.

Styles recurrents:

- Titres: `font-semibold`, `tracking-tighter2`, line-height entre `0.91` et `1.08`.
- H2 standard: `text-3xl md:text-5xl`, `leading-[1.04]`, `tracking-tighter2`.
- Hero: `text-[clamp(2.28rem,9.5vw,5.45rem)]`, `leading-[0.91]`.
- Grandes citations/stats: clamps entre `2.45rem` et `12rem`, line-height `0.78` a `1.08`.
- Paragraphes: `text-sm` a `text-lg`, `leading-7`, `leading-8`, `leading-9`.
- Labels/microcopies: `text-[8px]`, `text-[9px]`, `text-[10px]`, `text-[11px]`, `text-xs`, uppercase, tracking `0.12em` a `0.28em`.

Incoherences probables:

- `letterSpacing.tighter2 = -0.05em` est tres fort et applique a beaucoup de titres; `lib/og-image.tsx` utilise aussi `-0.045em` et `-0.08em` en inline.
- Beaucoup de microcopies ont des trackings voisins: `0.16em`, `0.18em`, `0.2em`, `0.22em`, `0.24em`, `0.28em`.
- Le serif est charge mais semble inutilise: cout visuel/performance potentiel ou intention future non exprimee.
- Certains composants anciens (`category-*`, `faq`) sont moins precis typographiquement que la home.

### Espacements et grille

Containers:

- Primitive principale: `PageShell` avec `max-w-8xl` = `92rem`, `px-5 sm:px-6 md:px-8`.
- Header/Footer: `max-w-8xl`, header `px-4 md:px-8`, footer `px-5 md:px-8`.
- Largeurs de texte mobile controlees: `max-w-[17.5rem]`, `min-[375px]:max-w-[20rem]`, `sm:max-w-3xl`.

Sections:

- Home sombre/editorial: `py-20 md:py-28/32/36`.
- Hero: `pt-28 md:pt-32`, `pb-10 md:pb-20`.
- Contact: `py-14 md:py-24`.
- Galerie intro: `pt-16 pb-6 md:pt-18 md:pb-8`.

Grilles:

- Layout hero: `lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]`.
- Comparison: `lg:grid-cols-[0.78fr_1.22fr]`, lignes desktop `md:grid-cols-[5rem_1fr_1.08fr]`.
- Pricing: `lg:grid-cols-[1.15fr_0.85fr]`.
- Process: `md:grid-cols-3`.
- Footer: `lg:grid-cols-[1.5fr_0.5fr_0.5fr]`.
- Rail mobile recurrent: `-mx-5`, `snap-x`, `overflow-x-auto`, `w-[84vw]` ou `w-[86vw]`.

Incoherences probables:

- Plusieurs ratios de grille arbitraires coexistent sans nommage.
- Espacements section similaires mais non tokenises: `py-20 md:py-28`, `py-20 md:py-32`, `pb-28 pt-18 md:pb-36 md:pt-24`.
- Rails mobiles tres similaires mais codes localement dans Hero, Categories, Comparison, SocialProof.

### Formes et effets

Radius:

- Standard dominant: `rounded-lg`.
- Badges et boutons: `rounded-lg`, skip link `rounded-full`.
- Mockups desktop: `rounded-t-[0.9rem]`, inner `rounded-t-[0.62rem]`.
- Mockups mobile: `rounded-[0.85rem]`, `rounded-[1.1rem]`, `rounded-[1.35rem]`, inner `0.58rem`, `0.78rem`, `1rem`.
- `tailwind.config.ts` declare `4xl: 2rem`; usage limite observe.

Bordures:

- Dominante sombre: `border-white/[0.08]` a `border-white/[0.18]`.
- Etats hover: souvent `white/[0.22]` ou `white/[0.24]`.
- Sections claires: `border-[#10141d]/[0.08]` a `[0.28]`.

Ombres:

- Bouton primary: blanc diffus `0 18px 50px rgba(255,255,255,0.16)`.
- Panels: noirs profonds `0 12px 42px`, `0 18px 58px`.
- Case study hover: `0 28px 90px rgba(0,0,0,0.34)`, halo blanc faible.
- Mockups: `0 24px/28px 70px/90px rgba(0,0,0,0.38-0.55)`.
- Process cards: `0 24px 80px`, hover `0 34px 110px`.

Effets:

- `backdrop-blur-xl` header, `backdrop-blur-md` badges.
- `blur-2xl`, `blur-3xl` halos mockups.
- `mix-blend-mode: screen` sur bruit global, `multiply` sur contact.
- `brightness-0` logo header compact.
- `filter: saturate(1.02)` mockup hover.

Incoherences probables:

- `.editorial-panel` et `.panel-premium` sont presque identiques.
- `.panel-premium` utilise transition `300ms ease`, tandis que `.case-study-card` utilise les tokens CSS `420ms`.
- Les pseudo-elements `.editorial-panel::before`, `.case-study-card::after`, `.section-contact::before`, `.accent-ring::after` ont `content: none`; ils ressemblent a des restes de direction precedente.

## Composants

### Layout

Header:

- Deux etats: transparent/sombre au top, compact blanc apres `scrollY > 24`.
- Desktop: nav `gap-8`, liens `text-[15px] font-semibold`.
- Mobile: menu framer-motion, liens en blocs `rounded-lg`, CTA pleine largeur.
- Hover: changement de couleur/fond; focus visible sur boutons via primitive `Button`.
- Incoherence: header compact inverse fortement le theme vers blanc, mais sans token dedie de navigation claire.

Footer:

- Fond sombre radial + grille, tres grand logo, baseline display clamp.
- Liens avec underline anime via `.footer-link`.
- CTA reutilise `Button`.
- Identitaire: footer agit comme un second hero final sombre.

PageShell:

- Primitive stable et bien recurrente.

### UI primitives

Button:

- Variantes: `primary`, `secondary`, `ghost`, `primaryOnLight`, `secondaryOnLight`.
- Etats: hover lift `-translate-y-0.5`, shine via `.cta-shine`, active via `.button-cycle:active`, focus visible.
- Disabled absent.
- Incoherence: CTA WhatsApp et email du `FinalCta` recodent des boutons en liens inline au lieu d'utiliser une variante ou une primitive etendue.

Badge:

- Un seul style: glass sombre, uppercase, tracking `0.22em`, `backdrop-blur-md`.
- Etats absents.

SectionHeading:

- H2 et paragraphe standardises.
- Prop `eyebrow` declaree mais non rendue: dette fonctionnelle/design probable.
- Variantes: `left` et `center`.

Reveal:

- Animation CSS `.reveal-up`, delay inline.
- Prop `distance` declaree mais non utilisee.

### Marketing

Hero:

- Principal moment identitaire: carousel desktop superpose avec depth, rail mobile horizontal, mockups desktop/mobile et halos.
- Motion: rotation/opacite/scale via Framer Motion, interval 7600ms, `useReducedMotion` respecte pour le carousel.
- Responsive: desktop scene riche, mobile snap carousel.
- Duplication: mockup desktop/mobile similaire a CategoriesGrid et ExamplesGalleryGrid.

PositioningQuote:

- Section blanche minimale, citation display.
- Identitaire: respiration editoriale forte.

ProofStats:

- Section blanche avec stat monumentale, mockup incline sombre.
- Rupture claire coherente avec quote/pricing/contact.

ComparisonSection:

- Desktop: lignes editoriales avec numerotation et separation verticale.
- Mobile: cartes snap horizontales.
- Motion: mini animations `comparison-pdf-fade` et `comparison-kit-rise`.
- Duplication: rail mobile proche de Categories/SocialProof.

CategoriesGrid:

- Cartes `case-study-card` avec mockups desktop/mobile et meta Contexte/Objectif/Resultat.
- Etats: hover tilt, shadow, mockup lift, arrow translate.
- Responsive: rail mobile, grid desktop.
- Identitaire fort: angle leger, superposition, storytelling projet.

PricingTable:

- Offre principale en grand bloc blanc encadre, dans une section sombre.
- Options: accordion mobile via `details`, grille desktop.
- Variantes: `default` et `highlight`, `showHeading`.
- Etats: hover via `.motion-line`; accordion mobile avec chevron rotate.
- Incoherence: ton clair interne local `offerTone`, pas partage avec autres sections claires.

ProcessTimeline:

- Cartes claires façon dossier/maquette, mini-illustrations construites en divs.
- Motion: reveal au scroll, hover lift/rotate.
- Identitaire: le langage "dossier / maquette / livraison" visualise le service sans assets externes.
- Incoherence: nombreuses valeurs `#10141d` alpha et micro tailles tres locales.

SocialProof:

- Section sombre avec grain/dots inline, cartes testimonials glass.
- Responsive: rail mobile, grid desktop.
- Etats: hover sur `motion-line`, avatar rond.

FinalCta:

- Section claire `section-contact`, grand titre sombre, deux CTA.
- Etats: hover bouton WhatsApp/email via classes inline et `.button-cycle`.
- Incoherence: recode des styles proches de `Button` et ajoute une couleur de marque isolee.

ExamplesGalleryGrid:

- Filtres en boutons; actif blanc, inactif glass sombre.
- Cards `panel-premium` avec mockups identiques aux case studies.
- Responsive: grid `md:2 xl:3`.
- Duplication importante avec `CategoriesGrid`.

ExamplesShowcase, CategoryHero, CategoryContent, Faq:

- Semblent moins centraux ou plus anciens.
- Utilisent beaucoup de `rounded-lg border-white/10 bg-white/[0.04]`.
- Moins d'effets premium que les sections home recentes.
- Risque: si remis en circulation, ils peuvent paraitre moins raffines que la home.

OG image:

- Reprend fond sombre, grille, mockup et contrastes blancs.
- Beaucoup de styles inline, normal pour une image OG mais inventaire a garder synchronise.

## Motion design

Dependances:

- `framer-motion` pour header, hero, process, preview cards.
- `lucide-react` pour icones.

Tokens:

- `lib/motion.ts`: `feedback 0.18`, `fast 0.32`, `normal 0.48`, `slow 0.72`; distances `8/12/16`; delays `0.07/0.09`; easings `enter [0.16,1,0.3,1]`, `interaction [0.22,1,0.36,1]`, `exit [0.4,0,1,1]`.
- CSS variables: `--duration-feedback 180ms`, `--duration-hover 420ms`, `--duration-reveal 480ms`; easings equivalents.

Animations:

- Reveal: `reveal-up` 480ms, delay par composant.
- Quote: `quote-line-reveal` 520ms + delays 80/160ms.
- Button shine: 760ms.
- Signature thread: 9s infinite alternate.
- Preview scroll: 8s infinite alternate.
- Comparison mini animation: 720ms/840ms.

Reduced motion:

- Global `@media (prefers-reduced-motion: reduce)` force animations/transitions a `0.01ms`.
- Hero utilise aussi `useReducedMotion` pour stopper l'interval carousel et mettre la transition a `0`.
- Certains `whileHover` Framer Motion subsistent mais seront largement neutralises par le media CSS pour les transitions CSS; a verifier pour animations JS futures.

Incoherences probables:

- Melange de tokens Framer, variables CSS et durees Tailwind hardcodees `duration-300/500/700`.
- `panel-premium` en 300ms alors que le systeme hover principal est plutot 420ms.
- Certaines classes vides avec transform-origin (`hero-device-float`, `product-drift`) ne portent pas d'animation.

## Incoherences et duplications

Valeurs presque identiques:

- Noirs: `#07090e`, `#080b11`, `#0b0e14`, `#0d1016`, `#0d1118`, `#10141b`, `#10141d`, `#11151d`.
- Blancs surfaces: `0.035`, `0.04`, `0.045`, `0.05`, `0.055`, `0.06`, `0.07`, `0.074`, `0.075`.
- Bordures: `white/8`, `white/10`, `white/[0.1]`, `white/[0.12]`, `white/12`, `white/[0.14]`, `white/[0.16]`.
- Trackings micro: `0.16em`, `0.18em`, `0.2em`, `0.22em`, `0.24em`, `0.28em`.
- Radius mockup mobile: `0.85rem`, `1rem`, `1.1rem`, `1.35rem`, `1.4rem`.

Composants proches codes separement:

- `CategoriesGrid` et `ExamplesGalleryGrid`: meme composition desktop/mobile mockup.
- `Button` et CTA inline de `FinalCta`.
- `editorial-panel`, `panel-premium`, cartes `motion-line` glass.
- Rails snap mobiles dans Hero, Categories, Comparison, SocialProof.
- Labels/badges glass dans Badge, ExamplesShowcase, PreviewLoopCard.

Styles hardcodes:

- Nombreux gradients arbitraires Tailwind dans les composants.
- Styles inline dans `Hero` pour slots carousel, dans `SocialProof` pour dots, dans `ExamplesGalleryGrid` pour fallback accent, dans `Reveal` pour delay, dans `lib/og-image.tsx`.
- Couleurs et alphas locaux dans `ProcessTimeline` et `PricingTable`.

Conventions contradictoires:

- Tokens Tailwind declares mais pas toujours utilises (`ink` vs `#10141d`, `panel` vs `bg-white/[...]`).
- `eyebrow` existe dans l'API de `SectionHeading` mais non rendu.
- `accent` et `gradient` existent dans plusieurs donnees mais tous les composants ne les exploitent pas.

Ecarts desktop/mobile:

- La home transforme plusieurs grids desktop en rails horizontaux mobiles; c'est coherent mais implemente plusieurs fois.
- Hero desktop tres riche, mobile plus simple mais conserve le mockup.
- Pricing options: `details` mobile, cards desktop; coherent mais styles differents.
- Process affiche des fleches inter-cartes seulement mobile.

Elements accidentels probables:

- Pseudo-elements avec `content: none`.
- Classes CSS sans animation associee visible: `.hero-device-float`, `.hero-device-float-slow`, `.product-drift`, `.product-drift-slow`.
- Props inutilisees: `SectionHeading.eyebrow`, `Reveal.distance`.
- Serif chargee mais inutilisee.

Elements singuliers a preserver:

- Le fond global stratifie avec grille/bruit discret.
- Les cartes/mockups inclines desktop + mobile superpose.
- La tension sombre premium / ruptures blanches editoriales.
- Les micro-labels uppercase tres espaces.
- Les animations lentes de preview et les reveals doux.
- Les accents par metier/projet, qui gardent le cote sur-mesure.
- Les mini schémas de `ProcessTimeline`, car ils racontent le service sans generique marketing.

## Risques

- Dette de design tokens: impossible de changer la DA finement sans chercher de nombreuses valeurs arbitraires.
- Drift visuel: chaque nouvelle section risque de choisir une opacite ou un noir supplementaire.
- Accessibilite: textes blancs a `0.42-0.58` et microcopies `8-10px` peuvent manquer de contraste/lisibilite selon contexte.
- Performance/polish: chargement du serif non utilise; beaucoup de gradients/blur fixes; images via `<img>` non optimisees Next.
- Maintenabilite: composants similaires non factorises rendent les corrections responsive et hover repetitives.
- Coherence future: composants anciens (`category-*`, `faq`, `ExamplesShowcase`) paraissent moins premium que la home.

## Recommandations preliminaires

Sans appliquer de changement maintenant:

- Definir des tokens de couleur par role: `bg.canvas`, `bg.section`, `surface.glass`, `surface.mockup`, `text.primary`, `text.secondary`, `border.subtle`, `border.strong`.
- Reduire les noirs a 4 ou 5 roles nommes, en conservant un noir special mockup si necessaire.
- Normaliser les alphas: surfaces 3 niveaux, bordures 3 niveaux, texte secondaire 3 niveaux.
- Formaliser deux themes de section: sombre premium et clair editorial.
- Creer une primitive future pour mockup desktop/mobile, car c'est le motif le plus identitaire et le plus duplique.
- Creer une primitive future pour rail mobile snap.
- Revoir `SectionHeading` avant systematisation: soit rendre `eyebrow`, soit retirer la prop.
- Decider du role de Cormorant Garamond: l'utiliser deliberement pour quelques moments editoriaux ou la retirer.
- Garder une zone "accent artistique" non uniformisee pour les projets clients; la controler par tokens de categorie plutot que la supprimer.
- Aligner motion CSS et Framer sur les memes noms de duree/easing.
