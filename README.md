# Mill Creek Bakery

A headless WordPress + Next.js frontend built as a portfolio project to demonstrate modern full-stack web development practices. Fictional bakery — not a real client.

## Live Demo

See it live: **[bakery.tonyschappaugh.com](https://bakery.tonyschappaugh.com)**

## Skills Demonstrated

### Headless WordPress / GraphQL Backend
- **WPGraphQL** integration exposing WordPress content via a typed GraphQL API
- **Custom post type** (`bread`) with a hand-rolled PHP plugin — no CPT UI dependency
- **Custom taxonomy** (`breadCategories`) registered with full WPGraphQL support
- **GraphQL queries** for both archive (all breads) and single (by slug) data shapes
- **`generateStaticParams`** for static generation of all bread detail pages at build time

### Next.js / React Frontend
- **App Router** architecture — Server Components by default, `'use client'` only where genuinely needed
- **`generateMetadata`** on bread detail pages for dynamic `<title>`, `<meta description>`, and Open Graph tags per bread
- **`revalidate = 3600`** on all data-fetching pages — GraphQL responses cached and revalidated hourly without redeployment
- **Prev/next navigation** on bread detail pages with alphabetical sort wrapping
- **Category filter** on breads archive and home page bread grid — client-side filtering with no additional API calls
- **`fetchGraphQL<T>`** generic utility wrapping all GraphQL fetches with typed responses and error handling
- **`sanitizeHtml`** via `isomorphic-dompurify` applied to all WordPress-sourced HTML before rendering
- **`SafeBread` type guard** (`filterSafeBreads`) filtering out breads with missing featured images before render, with server-terminal warnings

### TypeScript
- Strict typing throughout — no `any`
- GraphQL response shapes typed in `lib/types.ts` mirroring the WPGraphQL schema
- `SafeBread` utility type using `NonNullable<T>` to narrow `featuredImage` from `null | FeaturedImage` to `FeaturedImage`
- Generic `fetchGraphQL<T>` with typed return values and typed `GraphQLResponse<T>` wrapper

### Component Library Integration
- Consumes `@tschappaugh/mill-creek-ui` — a separate private npm package built with Vite, Storybook, and Tailwind v4
- Tailwind v4 configured to scan the component library's dist output so utility classes from `mill-creek-ui` are included in the generated CSS
- ReactNode prop pattern — the app owns `<Image>` and `<Link>` instances passed into `Nav`, `Hero`, and `Footer` components, keeping the library framework-agnostic

### Accessibility
- Skip-to-content link in the root layout
- Semantic HTML throughout — `<main>`, `<nav>`, `<section>`, `<article>` used appropriately
- `aria-label` on bread prev/next navigation
- All images include descriptive `alt` text sourced from WordPress media fields
- Keyboard navigable — all interactive elements reachable and operable without a mouse
- WCAG 2.2 / Section 508 compliant color contrast across all design tokens

### CSS / Design System
- **Tailwind v4** utility classes throughout — no custom CSS
- Custom design tokens (`mill-background`, `mill-brand`, `mill-text-primary`, etc.) defined in the Tailwind config and used consistently across the app
- Responsive layouts at mobile, tablet, and desktop breakpoints

## Features

- Home page with hero, featured bread grid (up to 6), and location/hours section
- Breads archive with full grid and category filter bar
- Bread detail pages with featured image, content, category badge, and prev/next navigation
- Dynamic `<title>` and Open Graph metadata per bread detail page
- Our Process coming-soon page
- Privacy Policy page
- Custom 404 page
- App-level error boundary

## Requirements

- Node.js 18+
- A WordPress installation with WPGraphQL and the Mill Creek CPT plugin active

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env.local` in the project root:
   ```
   WORDPRESS_API_URL=http://mill-creek-bakery.local/graphql
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
   The site runs at `localhost:3000`.

## Environment Variables

| Variable | Description |
|----------|-------------|
| `WORDPRESS_API_URL` | Full URL to the WPGraphQL endpoint — server-only, no `NEXT_PUBLIC_` prefix |

## Deployment

Deployed to Vercel. Set `WORDPRESS_API_URL` in the Vercel project's environment variables pointing to the production WPGraphQL endpoint.

## Project Structure

```
app/
├── breads/
│   ├── BreadsContent.tsx     # Client component — FilterBar + card grid
│   ├── page.tsx              # Breads archive page
│   └── [slug]/page.tsx       # Bread detail page — generateMetadata + generateStaticParams
├── components/
│   ├── HomeBreadGrid.tsx     # Client component — FilterBar + card grid for home (limit 6)
│   ├── Logo.tsx              # Image-based logo, light/dark variant
│   └── NavWrapper.tsx        # Client component — active link detection
├── error.tsx                 # App-level error boundary
├── not-found.tsx             # Custom 404 page
├── layout.tsx                # Root layout — Nav, skip link, Footer
├── page.tsx                  # Home page
├── process/page.tsx          # Our Process — coming soon
└── privacy/page.tsx          # Privacy Policy
lib/
├── config/site.ts            # Centralized nav, footer, and social link config
├── graphql-client.ts         # fetchGraphQL<T> + sanitizeHtml
├── queries.ts                # All GraphQL query strings
├── types.ts                  # TypeScript interfaces + SafeBread type
└── utils.ts                  # stripHtml, filterSafeBreads
public/
├── hero.jpg                  # Home page hero image
├── logo.svg                  # Dark logo for light backgrounds
└── logo-reverse.svg          # Light logo for dark footer
```

## Related Repos

| Repo | Purpose |
|------|---------|
| [mill-creek-ui](https://github.com/tschappaugh/mill-creek-ui) | React component library — Vite, Storybook, Tailwind v4 |
| [mill-creek-bakery-wp](https://github.com/tschappaugh/mill-creek-bakery-wp) | WordPress backend — CPT plugin and WPGraphQL configuration |
