# Chris Lim — Portfolio

Personal portfolio built with **Next.js 14**, **React**, **TypeScript**, and **Tailwind CSS**. Content is driven from `src/data/` so copy and sections stay easy to update before deploy.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve production build
npm run lint
```

## Project structure

```
src/
  app/              # App Router layout, page, global styles
  components/       # Shared UI (hero, messaging, projects, sidebar)
  data/             # Profile, experience, projects, skills (edit here)
  hooks/            # Carousel viewport hook
  lib/              # Utilities and motion helpers
  sections/         # Page sections (About, Projects, Experience, …)
public/
  profile.png       # Avatar
  hero-banner.png   # Hero banner
  companies/        # Employer & school logos
  projects/         # Project thumbnails
```

## Deploy

Works on [Vercel](https://vercel.com) and any Node host that supports Next.js 14:

1. Push the repo to GitHub.
2. Import the project in Vercel (framework preset: Next.js).
3. Deploy — no environment variables required for the static content site.

## Updating content

| What to change | File |
|----------------|------|
| Name, links, headline | `src/data/profile.ts` |
| About summary | `src/data/profile.ts` (`about`) |
| Live sidebar card | `src/data/sidebar.ts` |
| Jobs | `src/data/experience.ts` |
| Education | `src/data/education.ts` |
| Projects | `src/data/projects.ts` |
| Skills & certifications | `src/data/skills.ts` |

Add images under `public/companies/` or `public/projects/` and reference them with paths like `/companies/example.png`.
