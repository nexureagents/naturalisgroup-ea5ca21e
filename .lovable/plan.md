# Naturalis Water & Beverages — Premium Site Build Plan

The scope you've shared (25+ routes, full ecommerce, cart/checkout, blog, careers, multi-page founder story, gallery, GSAP + Framer Motion cinematic system, dark/light theme, distributor & export flows, ~60+ products across 6 categories) is roughly 3–5 full build sessions of work. To deliver something that actually feels **premium and finished** rather than 25 half-done pages, I'd like to ship it in phases. Each phase is independently shippable and visually complete.

## Phase 1 — Foundation + Hero Experience (this turn)

Goal: nail the visual language, design system, and the most-seen pages so the brand reads "international premium" immediately.

- **Design system** in `src/styles.css`: deep ocean blue + emerald + matte white + soft silver + orange accent, oklch tokens, light/dark themes, premium shadows, gradients, glassmorphism utilities, motion tokens.
- **Typography**: Satoshi-feel via Inter Tight (display) + Inter (body) from Google Fonts; refined tracking + hierarchy.
- **Premium loader** with animated logo + water-flow motion.
- **Sticky glass navbar** with theme toggle (persisted) and mobile drawer.
- **Luxury footer**.
- **Homepage** — full cinematic build: hero with parallax product bottle, brand trust counters, product ecosystem grid (9 categories), manufacturing storytelling timeline, certifications strip, export/global section, founder teaser, testimonials, CTA band.
- **About** + **Founder (Mr. Suman Roy)** cinematic story page with timeline.
- **Products index** (/products) with filterable category grid.
- **Contact** page with inquiry + distributor + export forms, WhatsApp CTA.
- Framer Motion (already-friendly) for reveals, micro-interactions, page transitions. GSAP added if/when scroll-pinned sections need it in phase 2.
- Asset wiring: your logo, NWB mark, 4 Purelyf bottle shots, 4 certificates — used in nav, hero, product cards, certifications section.

## Phase 2 — Product depth + commerce

- Category pages (water-beverages, alkaline, sodas, ketchup-sauces, fresh-vegetables, fresh-fruits, jams-juices, ready-to-eat).
- Dynamic `/product/$slug` template with gallery, specs, related products, bulk inquiry.
- Cart + checkout + order flow (localStorage cart; checkout submits inquiry — true payments would need Lovable Cloud + Stripe, ask separately).
- Web-sourced premium vegetable/fruit imagery via generated hero images (consistent color grading).

## Phase 3 — Trust + content surfaces

- /processing cinematic workflow page
- /certifications full page (with your 4 cert images)
- /export + /distributors lead-gen pages
- /gallery masonry with lightbox
- /blog, /careers, /faq, /privacy-policy, /terms-and-conditions

## Technical notes

- Stack stays TanStack Start (not Next.js as you mentioned — this template is TanStack Start, which gives the same SSR/SEO benefits). File-based routes in `src/routes/`, separate route files per page (no hash anchors) so each page gets its own SEO head.
- Theme: class-based `.dark` on `<html>`, toggle persists in localStorage, pre-hydration ScriptOnce prevents flash.
- Real Stripe checkout requires enabling Lovable Cloud + Stripe — for Phase 2 I'll build the cart UX and route "checkout" to an inquiry submission unless you confirm you want full payments.
- Web-extracted vegetable photos: I'll generate consistent premium product photography via the image tool rather than hotlink random web images (legally safer + visually consistent).

## What ships in this turn (Phase 1)

Homepage, About, Founder, Products index, Contact, plus the full design system, loader, navbar, footer, theme toggle. All other routes get clean placeholder pages with proper SEO heads so navigation works and the site feels complete — then we deepen them in Phase 2 and 3.

Approve to start Phase 1, or tell me to reorder priorities (e.g. "do product pages before founder").