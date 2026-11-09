# Toba Martins Portfolio

Dual-experience personal portfolio with a shared content layer and two presentation systems:

- **Graphic Experience** — bold, colourful, expressive
- **Interactive Experience** — minimal, elegant, animation-led

## Stack

- Next.js (Pages Router)
- React 18
- Tailwind CSS
- Framer Motion

## Scripts

```bash
npm run dev
npm run build
npm start
```

## Structure

- `data/` — shared content (projects, writing, timeline, site copy)
- `contexts/ExperienceContext.js` — experience state + localStorage persistence
- `components/experiences/` — graphic and interactive presentation components
- `pages/` — routes for home, projects, case studies, about, writing, contact

Experience preference is stored under `toba-portfolio-experience`.
