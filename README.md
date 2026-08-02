# Pradyum — 3D Developer Portfolio

Premium, bright, highly interactive developer portfolio built with **React + Vite** and **plain CSS only**
(no Tailwind, no CSS frameworks, no animation libraries).

## Run

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build && npm run preview
```

## Structure

- `src/components` — page sections (Navbar, Hero, About, Skills, Experience, Projects, Services, Testimonials, Contact, Footer)
- `src/ui` — reusable primitives (Button, Card, AnimatedTitle, SectionHeading, FloatingShapes, MouseFollower, ScrollIndicator, Reveal)
- `src/hooks` — `useMousePosition`, `useScrollProgress`, `useReveal`, `useCounter`
- `src/data` — all content lives here (projects, skills, experience, services, socials, testimonials)
- `src/styles` — modular CSS: `variables.css`, `global.css`, per-section files, `animations.css`, `utils.css`, `responsive.css`

Fake 3D is achieved with CSS `perspective`, `rotateX/rotateY`, `translateZ` and layered shadows driven by
pointer position — no WebGL, no external 3D runtime.
