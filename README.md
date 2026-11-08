# mrk-frontend

Next.js (App Router, TypeScript) frontend built on the [Røde Kors designsystem](https://designsystem.lunix.cloud).

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Design system

- Components: `@norwegianredcross/designsystem` ([Storybook](https://storybook.lunix.cloud))
- Styles are imported once in `src/app/layout.tsx` via `@norwegianredcross/designsystem/styles`
  (includes the Digdir base, Røde Kors theme, component styles and the Source Sans 3 font).
- Style your own components with CSS Modules and `--ds-*` tokens
  ([token reference](https://designsystem.lunix.cloud/tokens)).

See `CLAUDE.md` for the full conventions.
