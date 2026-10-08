# Ark Capital

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

## Brand and theme

Metadata and social preview text use Ark Capital. The favicon uses the symbol from the supplied logo. Set the production domain for `metadataBase`, canonical URLs, and a sitemap once the domain is confirmed, and refine the description when the company positioning is available.

The theme follows the device's `prefers-color-scheme` setting, with light mode as the fallback. Tailwind's `dark:` utilities use the same device setting. Use `logo-black.svg` on light backgrounds and `logo-white.svg` on dark backgrounds.

## Motion and page metadata

The navigation remains fixed and switches to a white background after 24px of scrolling. Capability cards stack with desktop-only sticky positioning; mobile uses a normal vertical layout. Images outside the home content and the shared PreFooter use a three-second top-to-bottom reveal. All motion components respect reduced-motion preferences.

Route navigation shows the Ark Capital logo while the incoming page and above-fold images become ready, with a bounded wait. This does not wait for every video or below-fold image to download.

Set `NEXT_PUBLIC_SITE_URL` to the confirmed production origin to enable canonical URLs and absolute social preview URLs in the main page metadata.
