# MRK frontend

Next.js (App Router, TypeScript) frontend built on the Røde Kors design system.

- Docs: https://designsystem.lunix.cloud (portal), https://storybook.lunix.cloud (Storybook)
- Component metadata: https://storybook.lunix.cloud/metadata.json — but the installed
  package in `node_modules/@norwegianredcross/designsystem` is the source of truth for
  export names and props (public Storybook may be a different version).

## Røde Kors designsystem

- Use components from `@norwegianredcross/designsystem` before building your own UI elements.
  Don't import from `@digdir/designsystemet-react` when a Røde Kors version exists.
- Use `--ds-*` tokens for design values, e.g. `--ds-size-*` for spacing (there are no
  `--ds-spacing-*` tokens), `--ds-color-*`, `--ds-font-size-*`, `--ds-border-radius-*`.
  Never hardcode colors, sizes or fonts.
- `@norwegianredcross/designsystem/styles` is imported once in `src/app/layout.tsx`; it includes
  the font. Don't add other Digdir/token CSS imports, Google Fonts or `next/font`.
- Don't install `@norwegianredcross/design-tokens` directly; it comes with the design system.
- Theming via data attributes: `data-color`, `data-size`, `data-color-scheme` (on `<html>`).
- Styling: CSS Modules + tokens. No Tailwind.
- Don't load the whole `AI_DESIGN_SYSTEM_GUIDE.md` as default context; read only what a task needs.
- Don't invent props or local replacements for missing components — flag gaps instead.
- When a Figma link is provided, read the frame through the Figma MCP tools.

## Checks

Run `npm run lint` and `npm run build` before finishing.
