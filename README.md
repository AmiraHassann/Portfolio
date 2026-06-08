# Portfolio (React)

Minimal React + Vite conversion of a static portfolio site.

Quick start

```bash
npm install
npm run dev
```

Build

```bash
npm run build
npm run preview
```

Project overview

- `index.html`, `styles.css`, `img/` (assets)
- `src/main.jsx` mounts `App`
- `src/components/` contains `Header`, `Hero`, `PortfolioGrid`, etc.

Notes

- Images currently live in `img/`. For production, consider moving them to `src/assets` and importing.
- If VS Code terminal fails on Windows, see `.vscode/settings.json` (conpty fix).
- To review reported vulnerabilities:

```bash
npm audit
npm audit fix
```

If you'd like, I can move images into `src/assets`, update imports, and tidy the project for production.
---

If you'd like, I can update the repository now to move images into `src/assets` and change imports (recommended). Tell me which next step you'd like.
