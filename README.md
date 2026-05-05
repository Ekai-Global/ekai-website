# Ekai Global Website

Static, SEO-first marketing website built with Astro and Tailwind CSS.

## Tech Stack

- Astro static output
- Tailwind CSS v4 (via Vite plugin)
- TypeScript strict config
- ESLint + Prettier
- Astro sitemap integration

## Local Development

```sh
npm install
npm run dev
```

## Quality Checks

```sh
npm run format:check
npm run lint
npm run astro -- check
npm run build
```

## Project Structure

```text
src/
  components/
    sections/
    ui/
  config/
    site.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
    about.astro
    services.astro
    contact.astro
    privacy.astro
  styles/
    global.css
public/
  robots.txt
  favicon.*
  logo.svg
  og-default.svg
```

## SEO Features

- Unique title and description per page
- Canonical URL per page
- Open Graph and Twitter metadata
- JSON-LD structured data (`Organization`, `WebSite`, `Service`, `AboutPage`, `ContactPage`)
- Generated sitemap (`/sitemap-index.xml`)
- `robots.txt` with sitemap reference

## Theme Behavior

- Light mode default baseline
- Honors user system preference on first visit
- Theme toggle in header
- Preference persisted via `localStorage`

## Deployment

Deploy the repository to Cloudflare Pages, Netlify, or Vercel with:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `>=22.12.0`

## Launch Checklist

- Replace placeholder contact form endpoint in `src/config/site.ts`
- Set production `site` URL in `astro.config.mjs` if domain changes
- Validate JSON-LD in Google Rich Results Test
- Submit sitemap URL to Google Search Console
- Verify robots and canonical URLs on production
