# Rio Coffee and Restaurant

Frontend website for Rio Coffee and Restaurant (@riocoffee.ke), a responsive single-page site.

## Stack

- React 19
- Vite
- Tailwind CSS 4
- Node.js 22

## Requirements

Install Node.js before you start.

Node.js 22 (see `client/.nvmrc`). With nvm, run `nvm use` inside `client`.

## Getting started

Clone the repo, then follow these steps.

```bash
cd client
npm install
npm run dev
```

## Scripts

All scripts are defined in `client/package.json`.

Run these from the `client` folder.

| Command           | What it does                      |
| ----------------- | --------------------------------- |
| `npm run dev`     | Start the Vite dev server         |
| `npm run build`   | Build the site for production     |
| `npm run preview` | Preview the production build      |

## Production build

Run the build from the `client` folder.

`npm run build` writes the static site to `client/dist`. Serve that folder from any static host.

## Images

Keep images compressed before adding them.

Photos live in `client/public/images` as WebP pairs named `<name>-800.webp` and `<name>-1600.webp`. Pass the shared `<name>` to the `Photo` component in `client/src/components/Photo.jsx` and it builds the responsive `srcSet` for both sizes.

## Business details

Update these before launch.

Contact info, opening hours and socials are kept in `client/src/data/site.js`. Fields left as empty strings are treated as unconfirmed, and the UI hides or softens anything blank, so fill them in only with confirmed details.

## Design tokens

Change tokens in one place so the whole site stays consistent.

Colors and fonts are defined in the Tailwind `@theme` block in `client/src/index.css`: espresso, espresso-deep, ivory, paper, bean, crema, burgundy and logo for color, with Newsreader (serif) and Hanken Grotesk (sans) loaded from Google Fonts.

## Project layout

The site lives entirely in the `client` folder.

```
client/
  public/     Static assets and optimized images
  src/        React components and app entry
  index.html  Vite entry HTML
```

## Local preview

After `npm run dev`, open the URL Vite prints, usually http://localhost:5173.

## Contributing

Open a pull request with a short description of your change.

## Browser support

The site targets current versions of Chrome, Safari, Firefox and Edge.

## Contact

Follow Rio Coffee on Instagram at @riocoffee.ke.

## Deployment

Upload the contents of `client/dist` to any static host.
