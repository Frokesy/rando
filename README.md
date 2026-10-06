# Rando

Next.js App Router project with TypeScript, Tailwind CSS, ESLint, Framer Motion, and GSAP.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit `src/app/page.tsx` to build the home page.

## Checks and production

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

`npm start` serves the production build after `npm run build`.

In environments that restrict Turbopack worker ports, use `npm run build -- --webpack` to build with Webpack.

The initial npm audit reports five high-severity findings in the ESLint development dependency chain. The suggested automatic fix downgrades `eslint-config-next` to Next.js 14; review upstream fixes rather than applying `npm audit fix --force`.

## Project structure

- `src/app/layout.tsx`: root layout and default SEO metadata.
- `src/app/page.tsx`: home page.
- `src/app/globals.css`: Tailwind import and global styles.
- `public/`: static assets.

The `@/*` import alias points to `src/*`. Add routes inside `src/app`, including a future `blog` route. Update the default metadata before launch and supply route-specific metadata for posts.

## Animations

Use Framer Motion and GSAP inside components marked with `"use client"`.

```tsx
"use client";

import { motion } from "framer-motion";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{children}</motion.div>;
}
```

Import GSAP with `import { gsap } from "gsap"`. Initialize animations in a React effect and use `gsap.context()` with `context.revert()` on cleanup. Respect reduced-motion preferences when adding animations.
