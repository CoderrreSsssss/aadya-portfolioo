# Aadya Singh | Photography Portfolio
React + Vite + Tailwind + Framer Motion. No backend or paid services.

## Your photos
Put photographs in `public/images/` (JPG, JPEG, PNG, WEBP). The site finds them automatically on every `npm run dev` / `npm run build` (and on Vercel). No filenames to type.
- Only files starting with `IMG_` are shown. Change `includePattern` at the top of `src/data/portfolioData.js` to use other names.
- Categories, titles and descriptions are **auto-filled drafts**. Edit the `details` block at the top of `portfolioData.js` to set the real category, title and one-line description for each photo (an example line is included).
- Big images: set `heroFile`, `aboutFile`, `featuredFile` to exact filenames, or leave '' to auto-pick.
- Keep each photo under about 1 MB (about 1600px wide) for fast loading. Only publish photographs you took yourself.

## Run locally (PowerShell)
```
npm install
npm run dev
npm run build
```

## Publish
Push to GitHub, import the repo in Vercel, keep default Vite settings, click Deploy. Later updates: `git add .`, `git commit -m "Update"`, `git push`.

## Colours
`theme: 'light'`, `'blush'` or `'sage'` in `src/data/portfolioData.js`. Palettes are in `src/index.css`.

## Other editable content
Name, headline, intro, email, Instagram, society link, journey timeline and toolkit are all in `portfolioData.js`. Leave contact values as '' to show "To be added".
