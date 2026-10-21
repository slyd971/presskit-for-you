# Ligne éditoriale Instagram : @presskit_for_you

Référence commune aux skills `strategie-social`, `post-social` et `community`. Avec `docs/da-instagram.md`, elle forme le **référentiel Instagram** : tout ce qui est publié ou proposé en vient. Ce qui n'y figure pas ne s'invente pas : on demande à David, puis on l'ajoute au référentiel.

- **Visuels et vidéos** : source unique `docs/da-instagram.md` (DA validée par David ; sa §19, relevée dans Canva, prime sur le reste).
- **Textes** : ce fichier, plus les règles de rédaction d'`AGENTS.md` (section « Rédaction »).

## Pour qui on publie

Tous les indépendants créatifs qui peuvent commander un presskit : DJs (la majorité des clients), artistes, danseurs, photographes et vidéastes, coachs, make-up artists, organisateurs d'événements. Univers : scène musicale et événementielle, notamment afro-caribéenne et Antilles. Nuit, club, énergie, mais traités de façon éditoriale et premium, jamais « flyer de soirée ».

Ce qu'on veut qu'ils ressentent : « ce site fait passer l'artiste dans une autre catégorie ».

## Objectif du compte

Des abonnés qualifiés et des demandes (DM, lien en bio vers presskit.fr), en crédibilisant l'offre par les réalisations. Un post qui génère deux DM de DJs vaut mieux qu'un post viral hors cible.

## Rythme et répartition

2 posts par semaine, soit 8 à 9 par mois. Créneaux par défaut : mardi et jeudi en fin de journée, remplacés par les meilleurs créneaux Metricool dès qu'ils sont disponibles.

**Un post = un client** : le cœur du feed, c'est le travail réalisé.

| Type | Part par mois | Ce que c'est | Format |
| --- | --- | --- | --- |
| Réalisation client | 6 à 7 posts | Le presskit d'un client montré en détail : hero, sections, mobile et desktop | Carrousel client (DA §11.3) ou Reel client (DA §12.5), en alternance |
| Conseil | 1 au plus | Ce qu'un booker ou une marque veut voir, toujours habillé d'un visuel | Carrousel conseil (DA §11.5) |
| Preuve ou offre | 1 | Témoignage cité mot pour mot, ou ce qui est inclus et comment demander | Carrousel |

Formules de couverture : celles de la DA (§11, §16, §19), sans variante maison.

## Clients

**Validés pour publication** (DA §15) : DJ Soyumi, Paul Keranne, DJ Mack, Silver DJ, La Bringue (soirée réservée aux femmes), Lokko TV (photographe-vidéaste), DJ SLY'D, DJ GDC.

**Demander à David avant** : DJ Pirate, La MIF, et tout client absent de la liste ci-dessus (Arthur Chaps, DJ FLO, Yoruboy, KRIMO, Sherin, Black Moz, MelyMelow, Coach Momar, Ishma, Sophie Beauty, Julia).

La matière vient uniquement du site du client et de ce que David fournit, jamais de l'imagination :
- liste, métiers et liens : `content/site.ts` (`examples`) ;
- contenu réel : le site `*.presskit.fr` du client (textes, sections, photos, couleur d'accent) ;
- conseils : checklists de `components/marketing/category-content.tsx`, `content/category-faqs.ts` ;
- témoignages : `content/site.ts` (`testimonials`), mot pour mot ;
- offre : `content/pricing.ts`, `lib/legal.ts`.

## Cohérence de la grille (DA §13)

- Couvertures en damier noir / blanc : jamais trois du même fond côte à côte.
- Jamais deux posts consécutifs du même client.
- Alterner carrousel et Reel, et les deux modèles de couverture de Reel (photo « confiance » / téléphone).
- Pas deux accents clients proches côte à côte (deux oranges, par exemple).
- Avant de proposer un post, regarder les 3 à 6 derniers publiés (Metricool, métriques `IGPO02` date, `IGPO05` image, `IGPO06` lien) et justifier sa place.

## Visuels : aucun chiffre ici

Ce fichier ne contient volontairement aucune valeur visuelle (couleur, police, taille, format) : elles vivent uniquement dans `docs/da-instagram.md`, pour qu'il n'existe jamais deux versions d'une même valeur. Pour produire, suivre `post-social` (étape 4), qui extrait les tokens de la DA et contrôle chaque export.

Repères dans la DA : formats §9, zones de sécurité §10, gabarits de posts §11, couvertures Canva §19, couleurs §3, polices §4, mockups §7, vidéo §12, grille §13, checklist §17.

## Ton des légendes

- Tutoiement, phrases courtes, langage parlé, comme David qui parle à un DJ après un set. Premium, direct, proche des artistes.
- Parler résultats : image pro, bookings, crédibilité auprès des organisateurs, marques et médias. Pas de jargon technique (« responsive », « SEO »).
- Une idée par post, du concret : on nomme le client, son métier, ce que contient son presskit.
- Pas de vocabulaire creux (« sublimer ton image », « expérience premium », « passer au niveau supérieur »), pas de promesse de résultat.
- Emoji : 0 à 2 dans la légende, aucun dans les visuels.
- Vocabulaire : « presskit » dans les visuels et les légendes Instagram (c'est le mot du compte), « press kit » sur le site.
- Typographie française : apostrophe ’, guillemets « » , espace insécable avant `: ; ! ?`.

## Règles Instagram

- La première ligne de la légende est la seule visible avant « plus » : moins de 125 caractères, elle doit donner envie à elle seule.
- 5 hashtags au maximum, choisis pour la cible du post, en fin de légende.
- Une seule action : « Écris PRESSKIT en DM », « Lien en bio », ou presskit.fr.
- Un texte alternatif pour chaque visuel.
- Identifier un client (@) seulement s'il a accepté ; dans le doute, citer son nom sans l'identifier et le signaler à David.

## Banque de hashtags

- Général : #presskit #epk #electronicpresskit #dossierdepresse
- DJ : #djbooking #djfrance #djlife #djparis
- Artistes : #artisteindependant #musiqueindependante #rapfr
- Image : #photographe #videaste
- Événementiel : #organisateurdesoiree #soireeparis
- Beauté : #makeupartist #mua

## Ce qu'on ne publie jamais

- Une info client inventée : date, chiffre, club, festival, citation, même « pour illustrer ».
- Une photo de banque d'images pour représenter un client.
- Un prix ou un délai différent du site (dès 300 €, 7 jours, 5 allers-retours). Pas de « retouches illimitées », pas de « TTC » (TVA non applicable).
- Une promo non validée par David, une critique d'un concurrent nommé, les coordonnées d'un client sans son accord.
- Une note interne laissée dans une légende : relire la légende finale telle qu'elle sera collée.

## Points ouverts (DA §18)

Radius sur canvas, nom de la police du surtitre (réf. Canva `YAFdJvSyp_k`), accent officiel de chaque client, fichier et emplacement du logo, source musicale. Tant qu'ils ne sont pas tranchés : appliquer la valeur par défaut de la DA et le signaler à David.
