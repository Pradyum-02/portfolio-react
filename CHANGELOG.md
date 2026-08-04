# Changelog — Dark Mode

Plain React + Vite project (JSX, no framework migration). Only the files below changed
to add Dark Mode; everything else is your existing code, unchanged.

## Modified / added files

| File | Why it changed | Required? |
| --- | --- | --- |
| `src/ui/ThemeToggle.jsx` | **New.** Sun/Moon toggle button. Persists the choice in `localStorage` (`pradyum-theme`) and sets `data-theme="dark" \| "light"` on `<html>`. | Required |
| `src/ui/Icon.jsx` | Added `sun` and `moon` glyphs to the icon set used by the toggle. No existing icons touched. | Required |
| `src/components/Navbar.jsx` | Imports and renders `<ThemeToggle />` inside `.navbar__actions` (desktop + mobile header). Nothing else changed. | Required |
| `src/styles/navbar.css` | Added `.theme-toggle` styles (size, pill shape, hover rotate). | Required |
| `src/styles/variables.css` | Added the `:root[data-theme="dark"]` block that re-maps the palette (`--white`, `--soft-white`, `--light-grey`, `--ink*`, shadows, accent gradient) plus `color-scheme`. Light-mode values are untouched, so light mode looks exactly as before. | Required |
| `index.html` | Small inline script that reads the saved theme before paint to avoid a light flash on reload. | Optional but recommended |

## Not changed

Components, animations, hooks, data files, images, resume download, routing, all other CSS files.

## How dark mode works

1. `ThemeToggle` writes `data-theme` on `document.documentElement`.
2. `variables.css` overrides the CSS custom properties under `:root[data-theme="dark"]`.
3. Every component already consumes those variables, so no component styling had to change.

## Run

```bash
npm install
npm run dev
npm run build
```

All three verified working.
