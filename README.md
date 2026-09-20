# Venkat Yanapothula — Portfolio

Personal site for Venkat Yanapothula, DevOps Lead Engineer. Built with Vite, React, TypeScript, and CSS for GitHub Pages.

## Local development

From this folder:

```bash
npm install
npm run dev
```

Open the URL Vite prints, usually `http://localhost:5173/venkat-portfolio/`. The `/venkat-portfolio/` base path is required for GitHub Pages and for `vite preview`.

## Production build

```bash
npm run build
npm run preview
```

`npm run build` outputs static files to `dist/`. Preview serves that production bundle locally at `http://localhost:4173/venkat-portfolio/` because the GitHub Pages base path is included in the production build.

## GitHub Pages

This project is published as a **project site** at:

https://yanova-labs.github.io/venkat-portfolio/

The production `base` path is `/venkat-portfolio/`. If the GitHub repository name is different, change `base` in `vite.config.ts` to match `"/<repo-name>/"`.

Suggested publish steps after you review locally:

1. Create a GitHub repository named `venkat-portfolio`.
2. Push this project.
3. Run `npm run build`.
4. Publish the `dist/` folder with GitHub Pages, or add a GitHub Action that builds and deploys `dist/`.

Do not use a contact form until there is a working delivery method. Email, phone, and LinkedIn links are already live.

## Design notes

- Dark navy theme with violet and cyan accents
- `VY` monogram in place of a headshot
- Skill cards expand on selection
- Experience is a timeline, not a résumé dump
- Motion is CSS-only and disabled when `prefers-reduced-motion` is set
