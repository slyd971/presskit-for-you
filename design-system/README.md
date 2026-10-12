# Design systems

## LA MIF (`la-mif/`)

Copie locale du design system LA MIF publié sur claude.ai :
https://claude.ai/artifact/Wz3mPmorPSCe8xHds8xx5B (version du 29/09/2026).

- `README.md` : la charte (voix, couleurs, typo, formats, logo, calendrier de com).
- `tokens.json` : les tokens source (couleurs en ambiances Crème / Bordeaux, typo, espacements, rayons).
- `tokens.css` : les mêmes tokens en variables CSS, générés depuis `tokens.json`.
- `components/` : un dossier par gabarit (guidelines `README.md` + aperçu `preview.html`) et `bundle.css`, le style partagé des gabarits.
- `assets/Logos/`, `assets/Textures/` : logos (PNG détourés + original) et textures velours.
- `design-system.json` : l'index du design system côté claude.ai.

Les `preview.html` attendent `tokens.css` et `components/bundle.css` déjà chargés (c'est le cas sur claude.ai).
Pour les ouvrir en local, ajouter dans leur `<head>` :

```html
<link rel="stylesheet" href="../../tokens.css">
<link rel="stylesheet" href="../bundle.css">
```

La source de vérité reste l'artifact sur claude.ai : toute modification de la charte se fait là-bas, puis se recopie ici.
