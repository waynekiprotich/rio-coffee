# Rio Coffee and Restaurant

Frontend website for Rio Coffee and Restaurant (@riocoffee.ke).

## Stack

- React 19
- Vite
- Tailwind CSS 4

## Requirements

Node.js 22 (see `client/.nvmrc`). With nvm, run `nvm use` inside `client`.

## Getting started

```bash
cd client
npm install
npm run dev
```

## Scripts

Run these from the `client` folder.

| Command           | What it does                      |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite dev server         |
| `npm run build`   | Build the site for production     |
| `npm run preview` | Preview the production build      |

## Production build

`npm run build` writes the static site to `client/dist`. Serve that folder from any static host.

## Images

Photos live in `client/public/images` as WebP pairs named `<name>-800.webp` and `<name>-1600.webp`. Pass the shared `<name>` to the `Photo` component in `client/src/components/Photo.jsx` and it builds the responsive `srcSet` for both sizes.

## Business details

Contact info, opening hours and socials are kept in `client/src/data/site.js`. Fields left as empty strings are treated as unconfirmed, and the UI hides or softens anything blank, so fill them in only with confirmed details.

## Design tokens

Colors and fonts are defined in the Tailwind `@theme` block in `client/src/index.css`: espresso, espresso-deep, ivory, paper, bean, crema, burgundy and logo for color, with Newsreader (serif) and Hanken Grotesk (sans) loaded from Google Fonts.

## Project layout

```
client/
  public/     Static assets and optimized images
  src/        React components and app entry
  index.html  Vite entry HTML
```
