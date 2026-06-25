# Website Launch Workflow

Use this checklist to replicate the Shadow Web Digital website for another business.

## 1. Create The Project

1. Duplicate the template folder.
2. Rename the folder for the new business.
3. Delete old generated folders if present:

```bash
rm -rf node_modules dist .vercel
```

4. Keep these files:

```text
index.html
package.json
package-lock.json
public/
src/
templates/
.gitignore
```

## 2. Customize The Website

1. Fill out `templates/business-brief.md`.
2. Replace `public/shadowWeb.png` with the business logo.
3. Update `index.html` SEO metadata.
4. Update business content in:

```text
src/data.jsx
src/sections.jsx
src/layout.jsx
```

5. Update colors and visual styling in:

```text
src/styles/
```

## 3. Run Locally

```bash
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

Check:

- Logo loads.
- Navigation scrolls to the right sections.
- Mobile menu opens.
- Contact form layout works.
- No horizontal scrolling on mobile.
- Text fits on desktop and mobile.
- Images/assets load.

## 4. Build Locally

```bash
npm run build
```

Fix any build errors before continuing.

## 5. Push To GitHub

Create an empty GitHub repo first. Then run:

```bash
git init
git add .
git commit -m "Build business website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

If this is an existing repo:

```bash
git status
git add .
git commit -m "Update website"
git push
```

## 6. Deploy On Vercel

Recommended path:

1. Go to Vercel.
2. Import the GitHub repo.
3. Use these settings:

```text
Framework Preset: Vite
Install Command: npm install
Build Command: npm run build
Output Directory: dist
```

4. Deploy.

CLI path:

```bash
npx vercel link
npx vercel env pull
npx vercel --prod
```

Do not commit:

```text
.env.local
.vercel/
```

## 7. Verify The Live Site

Open the Vercel production URL and check:

- Homepage loads.
- Logo and visuals display.
- Main CTA buttons work.
- Mobile layout works.
- Contact form is visible and usable.
- SEO title appears in browser tab.
- No missing images.
- No broken console errors.

## 8. Smooth Handoff

Save these links:

- GitHub repo:
- Vercel dashboard:
- Production URL:
- Custom domain:

Final checks:

```bash
git status
npm run build
```

The git status should be clean before handoff.
