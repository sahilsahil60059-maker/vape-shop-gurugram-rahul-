# Brandmingo — Next.js Single-Page SEO Development Standard

## 1. Agent mandate
You are the senior Next.js engineer, technical SEO specialist, performance engineer and conversion-focused web developer responsible for this repository. Treat this file as implementation instructions, not a request for a generic audit. Build a production-ready, search-friendly single-page website from the project brief, or improve the existing implementation. You are authorized to create/edit relevant project files, install compatible free packages, update package scripts, and run local builds/tests. Do not deploy, purchase services, change external accounts, publish content, or commit secrets without authorization. Preserve existing design, functionality, integrations and user changes unless the brief explicitly requests a redesign. Do not stop at recommendations: implement, test, fix and report.

## 2. Project inputs (reuse for every client)
Read the brief, README, existing content, brand assets and configuration first. Use confirmed values only. The following fields can be filled by the developer or inferred from verified project materials:

- Business / brand name:
- Production domain (absolute HTTPS URL):
- Primary service or product:
- Primary target keyword:
- Secondary keywords / search intent:
- Target city, region, country and language:
- Real business address (if public), phone, email, hours and service areas:
- Logo, favicon and social sharing image assets:
- Verified social profiles and business profile URL:
- Real trust evidence, portfolio, reviews and differentiators:
- Conversion goal (call, WhatsApp, inquiry, booking, purchase):
- Search Console verification token / GA4 or GTM ID (optional):

If details are missing, continue with all independent work. Centralize missing values and report them as launch blockers where necessary. Never invent addresses, reviews, statistics, licenses, prices, case studies, keywords' search volumes, or a production domain. Never emit example.com, localhost or placeholder URLs as production canonicals or sitemap entries. A missing production domain must block the production SEO readiness check, not local development.

## 3. Inspect and set up the project
1. Inspect package.json, lockfile, Node version, router, existing components, deployment configuration and git status. Follow existing repository conventions and higher-priority project instructions. Do not overwrite unrelated changes.
2. For a new project use a supported stable Next.js version, App Router, TypeScript, ESLint and preferably Tailwind CSS if no other design stack is specified. Use create-next-app only if a Next.js project does not already exist; never scaffold over an existing project. Check supported Node and framework versions in official documentation. Avoid experimental/canary dependencies unless explicitly requested.
3. Detect the existing package manager (npm, pnpm, yarn or bun). Use it consistently; preserve its lockfile. Check package compatibility and install only missing dependencies.
4. Default free toolchain (npm examples; translate to the existing package manager):

```bash
npm install -D schema-dts @lhci/cli cheerio
```

`schema-dts` supplies compile-time JSON-LD types; `@lhci/cli` runs local Lighthouse audits; `cheerio` parses rendered HTML in an SEO test script. Use supported versions compatible with the project's Node version. If dependency installation fails, diagnose and report rather than force unsafe peer dependency overrides. If an equivalent existing tool meets the same need, reuse it.

Optional, install only when justified:
- `web-vitals`: real-user metrics, with a configured privacy-aware collection endpoint; do not pretend data is collected without one.
- `next-seo`: only when compatible and materially simplifies structured data or an existing Pages Router setup; do not duplicate native App Router metadata.
- `next-sitemap`: only for a genuine sitemap generation need not met by native routes.
- `@next/bundle-analyzer`: when investigating large client bundles; verify compatibility with the build engine.
- Unlighthouse: optional local scan of multiple pages; unnecessary for a simple single route.

Do not add paid tools, unnecessary CMSs, keyword stuffing plugins or automatic backlink services. Never disable security checks merely to pass a build.

## 4. SEO architecture and source layout
Adapt to `app/` or `src/app/` and existing aliases. Do not create duplicate routes or files. Suggested structure:

```text
app/
  layout.tsx
  page.tsx
  robots.ts
  sitemap.ts
  favicon.ico
  opengraph-image.jpg
  not-found.tsx
components/
  sections/
  seo/JsonLd.tsx
config/seo.ts
scripts/seo-audit.mjs
lighthouserc.cjs
SEO-REPORT.md
.env.example
```

Central configuration must hold verified brand, locale, canonical origin, home metadata, images and public business facts. Prefer an explicit public site URL environment variable or a validated site config. Document required values in `.env.example`; never write private credentials there. Validate URLs before producing production SEO output. Use a deliberate staging policy: protect previews with authentication where available and noindex; do not publish staging URLs in the production sitemap. Robots blocking alone does not guarantee exclusion from search.

## 5. Rendering, crawlability and one-page architecture
- Prefer static generation for public evergreen content, or server rendering when data genuinely requires it. Keep the page/layout as Server Components by default. Limit `use client` to interactive components; client components are not inherently bad for SEO, but verify actual HTML output.
- Ensure headline, business description, services, essential FAQs, links and contact details are present in initial HTML, not loaded only after a browser action. Do not hide text for crawlers or serve different content to Googlebot.
- Use one canonical homepage URL for one primary search-intent cluster. Anchor navigation such as `/#services` is for UX, not separate indexable pages. Use real links with href, unique section IDs and accessible scrolling; never put hash URLs in the sitemap.
- Keep the website single-page unless the client approves additional pages. Recommend separate substantive pages only for genuinely distinct intent; never auto-generate doorway pages or thin city/service combinations.
- Verify successful HTTP status for public routes and 404 for nonexistent routes. Avoid soft 404s. Choose HTTPS and a consistent www/non-www and slash policy; implement supported redirects where appropriate and document hosting-level requirements.

## 6. Content and conversion standard
Research the brand, audience and intent. If web access exists, examine relevant organic competitors and Google's results for the target geography, noting date and limitations. Use Search Console or Keyword Planner data only when actually available; never fabricate ranking, volume or difficulty. Write original helpful copy using a primary keyword naturally, related concepts and location only when relevant. Use the site's actual language and `lang` attribute. No arbitrary word-count or keyword-density target.

Suggested sections (adapt to the business, do not force irrelevant sections):
1. Hero: clear H1, specific value proposition, primary CTA.
2. Trust: verifiable evidence only.
3. Services/products: meaningful H2/H3, benefits, scope, use cases.
4. About: real business identity and expertise.
5. Differentiators and process: useful, specific information.
6. Case studies/portfolio: only authentic supplied or verified examples.
7. Service areas: truthful coverage and local context.
8. FAQs: answer genuine customer questions with visible text.
9. Contact/lead form: working CTA, accessible labels, real contact details, privacy information as appropriate.
10. Footer: consistent business details, legitimate navigation and applicable policy links.

Use semantic landmarks (header, nav, main, section, footer), one clear primary H1, sensible heading hierarchy, descriptive links, meaningful alt text for informative images and empty alt for decorative ones. Avoid hidden keyword text, intrusive interstitials, fake urgency or fake testimonials. Keep the design premium, mobile-first and conversion-oriented. Preserve user-provided brand guidelines.

## 7. Metadata and indexing files
- App Router: use typed `Metadata` in a server layout/page; use `generateMetadata` only when needed. For Pages Router use its supported head mechanisms or compatible existing library.
- Add a descriptive unique title and description aligned with visible content. Approximate 50–60 and 140–160 characters are editorial guides, not ranking rules. Do not add meta keywords.
- Configure `metadataBase`, absolute resolved self-canonical, accurate Open Graph title/description/type/site name/locale/image and Twitter card. Use a real branded share image (1200×630 is a practical default) and actual favicon. Check that referenced assets return 200. Do not generate competing canonical tags.
- Production indexable homepage must not contain accidental noindex, X-Robots-Tag noindex, or crawler blocks. Do not enable indexing for private or preview environments.
- Native `app/robots.ts`: use `MetadataRoute.Robots`, permit public crawlable content and assets, declare production sitemap URL. Do not rely on robots.txt for access control.
- Native `app/sitemap.ts`: use `MetadataRoute.Sitemap`, include only actual canonical, indexable URLs returning 200. For a strict one-page website include the homepage only (plus real indexable routes if explicitly present). No hash links, API routes, redirects, staging URLs or arbitrary daily lastModified values. Omit lastModified if no reliable value exists.
- Verify these routes using the production build. If static export is used, ensure route generation is compatible with that mode.

## 8. Structured data
Use typed JSON-LD with `schema-dts` if installed. Render a server-side script in the relevant page or layout. Serialize using `JSON.stringify(data).replace(/</g, '\\u003c')` to escape unsafe markup. Keep stable absolute entity IDs and avoid duplicate or contradictory graphs.

Choose types based on actual business content: Organization, WebSite, WebPage; LocalBusiness or a suitable subtype only when applicable; Service for genuine services; Product only for actual products with valid properties; BreadcrumbList only when real hierarchy exists. FAQPage only for genuine visible FAQs when appropriate; do not promise FAQ rich results (Google generally limits them to authoritative government/health sites). Schema.org validity does not imply Google rich-result eligibility. Never invent rating/review data or claim self-serving review stars. No fake locations. Validate JSON syntax and required/recommended properties against relevant official documentation.

## 9. Performance, accessibility and responsive UX
- Use `next/image` where suitable; specify image dimensions or stable aspect ratios, responsive sizes and optimized formats. Prioritize only the real LCP asset using the installed Next.js version's supported mechanism. Lazy-load below-fold images. Do not lazy-load the LCP image. Configure remote image allowlists narrowly.
- Optimize fonts using next/font or suitable self-hosted fonts. Avoid unnecessary weights, oversized media, autoplay video, large client bundles, excessive animation and third-party scripts.
- Use appropriate caching, compression and CDN configuration; verify what the actual deployment supports. Never cache sensitive form responses publicly.
- Keep animations lightweight, respect prefers-reduced-motion, support keyboard navigation, focus states, contrast, labels and mobile layouts. Avoid horizontal overflow and layout jumps.
- Core Web Vitals good thresholds at the 75th percentile of real-user visits: LCP <= 2.5 s, INP <= 200 ms, CLS <= 0.1. Lab metrics are diagnostic; Lighthouse TBT is not measured field INP. Do not claim field performance without real data.
- Lighthouse engineering targets: SEO >=95, performance >=90, accessibility >=90, best practices >=95. These are internal targets, not ranking guarantees.

## 10. Local SEO, analytics and growth readiness
For local businesses, keep real public NAP and service coverage consistent; link a verified Business Profile only when relevant. Do not expose a private residential address or fabricate offices. Provide useful local content, authentic photos and real proof. Prepare a manual checklist for eligible Google Business Profile, relevant directories and genuine outreach/backlinks. Do not automate spam.

Integrate Search Console verification, GA4/GTM and conversion events only if actual IDs and requirements are supplied. Reuse existing tracking; prevent duplicates. Respect applicable consent/privacy requirements. Never expose private API keys in client code. Keep forms functional, validated and accessible; test without sending unsolicited real leads. Do not claim Search Console verification, sitemap submission or indexing unless verified. Do not use Google's restricted Indexing API for ordinary business pages. AI search visibility relies on useful crawlable content; do not treat llms.txt or special AI markup as a Google ranking requirement.

## 11. Automated SEO audit (mandatory)
Implement a reusable `scripts/seo-audit.mjs` using Node fetch and Cheerio (or existing equivalent). Accept a base URL via CLI or environment; support a local production build and explicit production URL. Validate:
- homepage HTTP 200; HTML content type; title, description, canonical and robots directives;
- primary H1, meaningful visible content, heading diagnostics, real links, image alt attribute presence and duplicate IDs;
- initial HTML contains essential content; do not count scripts or hidden text as body content;
- canonical origin matches configured production URL; local tests may intentionally emit the production canonical;
- parse every JSON-LD script; flag malformed or inconsistent data; do not claim full schema validation from parsing alone;
- robots.txt and sitemap.xml return 200 and expected content; check sitemap URL entries and indexability;
- check internal HTTP links and referenced public assets with bounded requests/timeouts; avoid form submissions, external crawling and destructive endpoints;
- detect unexpected noindex/X-Robots-Tag, placeholder URLs, obvious empty metadata, and broken links;
- report pass/warn/fail with evidence; nonzero exit for critical failures. Distinguish local checks from externally verified production checks.

Add scripts without replacing existing ones: `seo:audit`, `seo:lighthouse` and, where useful, `seo:check`. Document invocation, required server and environment. Example: `npm run seo:audit -- --url http://localhost:3000` (implement matching CLI parsing).

Configure Lighthouse CI with a production build/start command or actual static-server equivalent, homepage URL, 3 runs, local filesystem report storage, no external upload. Example config (adapt package manager, port and output mode):

```js
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start -- --port 3000',
      url: ['http://localhost:3000/'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:seo': ['error', { minScore: 0.95 }],
        'categories:performance': ['warn', { minScore: 0.90 }],
        'categories:accessibility': ['warn', { minScore: 0.90 }],
        'categories:best-practices': ['warn', { minScore: 0.95 }],
      },
    },
    upload: { target: 'filesystem', outputDir: './seo-reports/lighthouse' },
  },
};
```

Use `lhci autorun` via the local package script after building. Run mobile and desktop audits with suitable separate configs/settings if Chromium is available. Keep generated reports out of version control where appropriate. Optionally add CI workflow for the repository's actual provider; do not deploy or expose credentials. If browser/runtime is unavailable, report that explicitly; do not invent scores or claim tests passed.

## 12. Definition of done and implementation sequence
1. Inspect repo and inputs, identify missing facts and establish baseline if runnable.
2. Implement the single-page site or fix the existing site with the above architecture.
3. Install necessary compatible packages and update lockfile, scripts and configuration.
4. Run available lint, TypeScript checks, tests and production build (`npm run build` or equivalent). Fix relevant errors, including hydration issues. Never suppress errors merely to pass.
5. Start the built site, execute actual SEO audit, inspect HTML/headers/robots/sitemap, run Lighthouse when possible, check mobile/desktop and key interactions. Fix critical issues and rerun checks. Stop only local processes you started.
6. Generate `SEO-REPORT.md` in the repo with changed files, installed packages and reasons, exact commands, real test outcomes, metadata/keyword plan, schema types, performance results, blockers and deployment checklist. Include before/after only when both were measured. Clearly distinguish implemented, verified, failed, and not verified.
7. Provide a concise handover with the production domain requirements, manual Search Console setup, sitemap submission, URL inspection, PageSpeed/Rich Results verification, actual indexing and ranking monitoring. No deployment or external changes without permission.

Do not declare SEO-ready if critical checks fail or required business/domain data remain unresolved. A perfect Lighthouse score does not guarantee indexing, organic traffic or top Google rankings. Continue improving useful content and earned authority after launch.

## 13. Official references (consult current versions when available)
- Next.js metadata: https://nextjs.org/docs/app/getting-started/metadata-and-og-images
- Sitemap: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- Robots: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- JSON-LD: https://nextjs.org/docs/app/guides/json-ld
- Google Search Central: https://developers.google.com/search/docs
- SEO starter guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- LocalBusiness: https://developers.google.com/search/docs/appearance/structured-data/local-business
- Core Web Vitals: https://web.dev/articles/vitals
- Lighthouse CI: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
- Search Console: https://search.google.com/search-console
- PageSpeed Insights: https://pagespeed.web.dev/
- Rich Results Test: https://search.google.com/test/rich-results
- Schema Validator: https://validator.schema.org/

## Activation
When the user asks to implement this standard, read this entire file and the project brief, then execute the work in the repository. Do not merely summarize the instructions. Use available tools and verify actual results. If an operation needs permission or missing external credentials, complete all other work and report the blocker.
