# Project

This repository contains a landing page for an independent electrical design consultant providing external electrical design support.

The page must communicate engineering competence, ownership of a clearly defined scope, support for design teams, B2B design subcontracting, and the ability to take over separated parts of larger projects.

Do not position the offer as:

- a junior freelancer portfolio;
- an electrical contractor, installer, or maintenance service;
- a SaaS product;
- a lowest-price offer;
- work performed “after hours”.

The repository may initially contain documentation only. Never assume that application files, dependencies, or npm scripts exist: inspect the current tree and `package.json` before acting.

# Source of truth

Product and UI documentation lives in `docs/landing-page/`.

Read these global specifications before every UI implementation or material UI change:

- `00_project-overview.md` — product, positioning, page architecture, copy strategy, anchors;
- `01_design-system.md` — visual system and tokens;
- `13_responsive.md` — global responsive behaviour and test matrix;
- `14_implementation-rules.md` — technical implementation contract.

Additionally, read the specification for every section in scope:

- Header → `02_header.md`
- Hero → `03_hero.md`
- Proof Bar → `04_proof-bar.md`
- Services → `05_services.md`
- Process → `06_process.md`
- Who I Work With / Audience → `07_who-i-work-with.md`
- Experience → `08_experience.md`
- About → `09_about.md`
- FAQ → `10_faq.md`
- Contact → `11_contact.md`
- Footer → `12_footer.md`

A section specification refines the global documents but must not arbitrarily override the global design system. Source decisions take precedence over items labelled `REKOMENDACJA`.

When documents conflict, do not guess or invent a product decision. Identify the conflicting passages for the user and wait for direction when the conflict blocks correct implementation.

Do not duplicate detailed section copy, layout rules, or acceptance criteria here; keep them in their source documents.

# Product positioning and copy

- Write in a concrete, calm, technical, professional register.
- Emphasize scope, responsibility, coordination, collaboration, and deliverables—not hours sold.
- Preserve approved copy unless a task explicitly requires a copy change.
- For implementation tasks, exact copy in the relevant specification is authoritative.
- Keep the visible language strategy defined in `00_project-overview.md`; do not add a language switcher before complete EN copy exists.
- Avoid claims such as “best”, “world-class”, “innovative solutions”, “passionate about electricity”, or generic “tailored comprehensive solutions”.
- Never imply installation, construction, service, or maintenance work.
- Do not silently “improve” product decisions based on personal taste. Implement a valid specification or give the user a short, explicit recommendation.

# Content, evidence, and NDA

Never invent client or project names, locations, project values, technical parameters, years of experience, project counts, certifications, business metrics, software beyond confirmed BIM/CAD, or NDA-covered facts.

If required data is absent, use a clearly neutral placeholder or request confirmed data. Never ship placeholders as active production contact links.

CAD/SLD motifs may be decorative, but they must not imply that they show a real project. Do not commit unreviewed drawings, models, screenshots, metadata, filenames, or labels that could identify confidential work.

Use only authentic, supplied portrait or project assets. Do not create fake case studies, testimonials, client logos, certifications, or stock imagery presented as evidence.

# Tech stack

The required implementation stack is:

- Vite
- React
- TypeScript
- CSS Modules

Do not add Next.js, Tailwind, Material UI, Ant Design, shadcn, styled-components, or another UI framework without an explicit change of direction.

Start without large UI or motion dependencies. Use `lucide-react` only for genuine UI icons and only after checking existing dependencies. Use `framer-motion` only for a concrete interaction that CSS cannot express cleanly. Do not add a dependency for a simple CSS effect.

# Design rules

The visual direction is **Technical Minimal**: premium engineering consultancy, controlled whitespace, strong typography, a light background, graphite text, one cool-blue accent, thin separators, small radii, and restrained motifs derived from technical documentation.

`01_design-system.md` is the visual contract. Colors, spacing, typography, radii, buttons, and focus states must come from global design tokens. Use CSS custom properties as the token source; do not introduce arbitrary local values when a suitable token exists.

- Headings: Manrope.
- Body, labels, and technical captions: IBM Plex Sans.
- Primary accent: `#1F57E7`.
- Keep one light theme in v1.
- Prefer whitespace, grid, and separators over cards.
- Use lightweight semantic HTML, CSS, or SVG for technical motifs.
- Decorative SVG must use `aria-hidden="true"` and `focusable="false"`.

Without explicit user direction, do not introduce gradients, glassmorphism, glow, large shadows, floating soft cards, pill UI, generic SaaS cards, fake dashboards, decorative icon clutter, dark feature bands, stock electricians, lightning bolts, plugs, or lightbulbs.

# Coding rules

- Keep TypeScript strict; avoid `any` and unjustified type assertions.
- Prefer small components with one clear responsibility.
- Do not create speculative abstractions; extract only after real repeated use.
- Store repeated content in typed readonly data rather than duplicating JSX.
- Use semantic HTML and a correct H1–H3 hierarchy; the page has one H1.
- Use CSS Modules for component styles. Keep only reset, fonts, tokens, and base typography global.
- Avoid inline styles except for truly dynamic values that cannot be represented by a class.
- Prefer CSS Grid for multicolumn layout and Flexbox for one-dimensional alignment.
- Prefer logical properties plus `clamp()`, `min()`, and `max()` for fluid layout.
- Prefer CSS/SVG over heavy raster assets when they can produce the same result.
- Keep stable anchor IDs aligned with `00_project-overview.md`.
- Do not add analytics, external integrations, or a contact form without separate privacy and implementation decisions.

# Scope discipline

For a task limited to one section, do not modify another section unless required for the requested result.

Before editing:

1. Read this file and the four global specifications.
2. Read every section specification in scope, including its acceptance criteria.
3. Inspect the current implementation, dependencies, styles, and shared usage.
4. Plan the smallest reasonable change.

If a shared component must change, inspect every call site and preserve its API unless an API change is necessary. Do not refactor unrelated code “while here”. Preserve unrelated user changes in a dirty worktree.

# Responsive behaviour

Follow `13_responsive.md`; do not design desktop-only. Use structural media queries and fluid values between breakpoints.

For each material UI change, check at minimum 360, 390, 768, 1024, and 1440 px. For a full responsive pass, use the complete documented matrix: 360×800, 390×844, 768×1024, 1024×768, 1280×800, 1440×900, and 1920×1080, plus 200% zoom and phone landscape.

Prioritize no horizontal overflow, readable type hierarchy, intentional stacking, reachable CTA, balanced spacing, stable font loading, and an uncluttered mobile layout. Do not force desktop line breaks on mobile. Technical diagrams must simplify or reflow rather than overflow or shrink into illegibility.

# Accessibility

Target WCAG 2.2 AA.

- Use semantic landmarks and accessible navigation names.
- Provide a skip link as the first focusable control.
- Preserve logical heading and DOM order across breakpoints.
- Support keyboard navigation and visible `:focus-visible` feedback.
- Keep interactive targets at least 44×44 px, preferably 48 px where specified.
- Verify contrast with a tool; do not rely only on visual judgment.
- Use ARIA only when native semantics are insufficient.
- Mobile menu must expose state, support Escape, lock background scroll, and return focus to its trigger.
- FAQ must expose expanded state; prefer native `details`/`summary` when it meets the design.
- Respect `prefers-reduced-motion`; never remove focus outlines without an equivalent replacement.

# Interaction and motion

Keep motion subtle and functional: hover/focus feedback, mobile-menu transitions, FAQ feedback, and short opacity/transform transitions.

Do not use word-by-word H1 animation, scroll-jacking, decorative parallax, long entrance sequences, or motion that obstructs access. Prefer animating `transform` and `opacity`; do not add JavaScript-driven scroll behaviour without a specified need.

# Validation and acceptance

Read available commands from the current `package.json`; never invent script names. After a material implementation, run the relevant scripts only when present: `lint`, `typecheck`, `test`, and `build`. Also run `git diff --check` where available.

If a validation script does not exist, report that fact instead of claiming it ran. Do not install tooling solely to satisfy an assumed command.

For UI changes, also check console errors, TypeScript errors, broken imports, anchors/routing, keyboard behaviour, responsive overflow, reduced motion, and affected shared-component call sites.

Before completion, review the relevant section acceptance criteria point by point. Never claim an unchecked criterion passed. Mark criteria that require visual or manual review explicitly.

# Task workflow

1. Inspect the repository and working tree.
2. Read `AGENTS.md`.
3. Read the relevant global specifications.
4. Read each section-specific specification in scope.
5. Inspect the current implementation and shared dependencies.
6. Plan the smallest reasonable change.
7. Implement only the required scope.
8. Run available validation.
9. Review documented acceptance criteria.
10. Summarize changes, checks performed, manual-review items, and unresolved issues.
