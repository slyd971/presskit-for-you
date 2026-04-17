# PressKit Studio

Landing page Next.js pour presenter des press kits digitaux premium pour artistes, talents et independants.

## Stack

- Next.js 15
- React 19
- Tailwind CSS
- Framer Motion

## Lancer le projet

```bash
npm install
npm run dev
```

Puis ouvrir `http://127.0.0.1:3000`.

## Scripts utiles

```bash
npm run dev
npm run build
npm run start
```

## Notes

- Le hero contient un effet d'autoscroll sur les cartes de preview.
- La section `Exemples` de la home a ete retiree.
- Le depot local est pret a etre pousse vers `https://github.com/slyd971/presskit-for-you`.

## Publication GitHub

Si l'authentification HTTPS GitHub n'est pas encore configuree sur la machine :

```bash
git remote set-url origin git@github.com:slyd971/presskit-for-you.git
git push -u origin HEAD:main
```
