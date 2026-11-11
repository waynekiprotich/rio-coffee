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

## Project layout

```
client/
  public/     Static assets and optimized images
  src/        React components and app entry
  index.html  Vite entry HTML
```
