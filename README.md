# Shadow Web Digital Website Template

This repo is a reusable Vite + React template for building premium small-business websites, pushing them to GitHub, and deploying them on Vercel.

Use it when you want to replicate this website for a different business while keeping the same proven workflow:

1. Customize the business content.
2. Run and test the website locally.
3. Commit and push to GitHub.
4. Deploy through Vercel.
5. Verify the live site.

## Quick Start

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually:

```text
http://127.0.0.1:5173/
```

Build before deploying:

```bash
npm run build
```

## Customize For A New Business

Start by copying and filling out:

```text
templates/business-brief.md
```

Then update these files:

- `index.html`: SEO title, description, keywords, Open Graph image/title.
- `public/shadowWeb.png`: replace with the new business logo.
- `src/data.jsx`: navigation labels, services, portfolio/project examples, testimonials, FAQs.
- `src/sections.jsx`: hero copy, why-choose copy, contact copy, stats labels.
- `src/layout.jsx`: logo text, footer text, social/contact links.
- `src/styles/*.css`: colors, spacing, visual theme, responsive polish.

## Template Workflow

Full repeatable instructions live here:

```text
templates/website-launch-workflow.md
```

Use that checklist every time you create a new business site from this template.

## Vercel Settings

When importing this project into Vercel:

- Framework Preset: `Vite`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`

## GitHub Flow

For a brand-new client repo:

```bash
git init
git add .
git commit -m "Build business website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

For future updates:

```bash
git status
git add .
git commit -m "Update website"
git push
```

## Local Vercel CLI

You do not need Vercel installed globally. Use:

```bash
npx vercel link
npx vercel env pull
npx vercel --prod
```

Never commit `.env.local` or `.vercel/`. They are intentionally ignored.
