# No Judge Story — Design System

> **No Judge Story** (wordmark: *No Judge* **STORY**) is a Romanian community platform
> where women read and share **real, anonymous life stories — without judgment**.
> Tagline: *„Un spațiu sigur pentru povești fără judecată.”*

This repository is the brand's design system: tokens, fonts, reusable React
primitives, foundation specimen cards, and full-screen UI recreations. An
automated compiler bundles the components and indexes the CSS — link `styles.css`
to consume the whole system.

**Language:** the product and all copy are **Romanian only**.

> **Scope note (per brand owner):** this system intentionally **omits any
> "earn an income / turn writing into money" messaging**. Even though the
> concept exists in the company, it must not appear in the product surface.
> Keep CTAs focused on *belonging, expression and safety* — never monetization.

---

## Sources

- **Figma:** `Untitled.fig` (mounted virtual file) — landing page concept for
  No Judge Story / "NoJudgeStory". Page-1 › `Frame 1` (node `10:5`) is the full
  marketing page; categories, testimonials, founder letter and hero live there.
- No codebase or live site was provided. Visuals, colors, type and copy were
  reconstructed from the Figma file. If you have access, open the original frame
  for pixel reference.

---

## CONTENT FUNDAMENTALS

How No Judge Story writes.

- **Voice:** warm, intimate, sisterly. It speaks *to* the reader as a peer
  ("tu"), never corporate "we-the-company". The founder (Laura) appears in the
  first person in a personal, handwritten note ("Abia aștept să-ți citesc povestea").
- **Address:** second-person singular informal — **„tu"** ("Intră pe listă",
  "povestea ta", "Cum să-ți spunem?"). Inclusive, female-centered.
- **Tone:** safe, encouraging, non-judgmental, lightly emotional. Reassurance is
  a recurring beat: *anonim, fără critici, fără judecată, spațiu safe*.
- **Casing:** sentence case everywhere in body and buttons. Only the **STORY**
  wordmark and tiny eyebrow labels use uppercase. No Title Case headlines.
- **Headlines:** short, editorial, emotional fragments set in EB Garamond, often
  with one italic word for emphasis (*fără judecată*).
- **Emoji:** **none.** The brand never uses emoji. Warmth comes from typography
  (the Gaegu handwriting) and the rose→coral palette, not symbols.
- **Romanian diacritics** are always correct (ă, â, î, ș, ț).
- **Example copy:**
  - Hero: *„Un spațiu sigur pentru povești fără judecată."*
  - Sub: *„Citește și împărtășește experiențe reale într-un spațiu anonim, fără critici, doar experiențe sincere."*
  - CTA: *„Vreau acces anticipat"*, *„Intră pe listă"*, *„Devino autoare"* (expression, not income).
  - Trust: *„Fără spam. Anonimat garantat. Te anunțăm doar la lansare."*
  - Founder: *„Ola chichas! … Fă-ți curaj și deschide-te, aici e un spațiu safe. With love, Laura."*
- **Story categories:** relații · familie · carieră · prietenii · copilărie ·
  călătorii · căsnicie · beauty · artă · viața de mămică · business.

---

## VISUAL FOUNDATIONS

- **Palette:** ink-black editorial type on paper-white, lifted by a signature
  **rose (#F3486D) → coral (#EA8954)** gradient. Logo accent red **#ED4E51**.
  Greys (#484848 / #585858 / #D9D9D9) for secondary text and hairlines. Warmth,
  never cold; no blues or purples.
- **Signature gradient:** `linear-gradient(90deg,#F3486D,#EA8954)` on every
  primary CTA and accent pill. Low-opacity (10–16%) tri-stop washes
  (rose→red→coral) back highlight panels and section bands.
- **Type:** **EB Garamond** for display/editorial headings (frequently italic for
  one emphasized word); **Geist** for all UI and body; **Gaegu** (handwritten)
  reserved strictly for the founder's personal voice — never UI. Headlines sit
  tight (~100% line-height); body relaxes to 1.55.
- **Spacing:** generous and airy. 4px base scale; sections breathe with large
  vertical rhythm.
- **Corner radii:** **30px** on cards (the signature softness), 20px on inner
  panels, full-round pills for chips/buttons/avatar frames.
- **Cards:** two flavors — (1) *outline cards*: white fill with a 1px rose
  hairline (`inset 0 0 0 1px rose`), no drop shadow; (2) *image cards*: photo
  with a bottom-up black scrim (`--scrim`) so white EB Garamond quotes stay legible.
- **Shadows:** soft and diffuse — `--shadow-md/lg` for elevated cards;
  `--shadow-brand` (rose-tinted) under gradient CTAs.
- **Imagery:** warm, natural-light lifestyle photography of women — writing,
  reflecting, at home. Soft, slightly desaturated, intimate. Often masked into
  30px-radius cards or circles. Decorative soft bokeh/ellipses float in the hero.
- **Backgrounds:** mostly paper-white with faint radial rose/coral glows in
  corners; occasional full-width 16% wash bands. No heavy gradients, no noise.
- **Borders:** 1–1.5px hairlines; rose for active/brand, grey-300 for neutral.
- **Motion:** gentle and minimal. Soft ease `cubic-bezier(0.22,0.61,0.36,1)`,
  140–280ms. Buttons lift 2px on hover and nudge their arrow; press scales to
  0.99. Success content fades up. No bounces, no looping decoration.
- **Hover/press:** hover = lift + subtle saturation / soft wash fill on outlines;
  press = slight shrink. Focus = 4px soft rose ring (`--focus-ring`).
- **Transparency & blur:** used sparingly — scrims for legibility and 10–16%
  color washes. No glassmorphism.

---

## ICONOGRAPHY

- The source design is **nearly icon-free** — it leans on typography and photos.
  The only icons present are Material-Symbols-style line glyphs (`arrow_forward`,
  `arrow_left`, `keyboard_arrow_up`). `assets/icons/arrow-left.svg` is copied in.
- **Approach:** thin (≈2px), rounded line icons, monochrome, inheriting
  `currentColor`. Used only for direction (arrows) and the occasional lock
  (trust). Inline SVG, no icon font.
- **Substitution:** for any icon not in the file, use **Lucide**
  (lucide.dev — 2px round line) which matches the stroke weight. Flag any
  substitution to the brand owner.
- **No emoji. No unicode pictographs.** Decorative warmth is delivered by the
  Gaegu handwriting and rose→coral accents instead.
- Brand wordmark is type, not a logo file — recompose with the `Logo` component.

---

## Index / manifest

**Root**
- `styles.css` — global entry (import this); `@import`s all tokens + fonts.
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for portable use.

**tokens/**
- `fonts.css` — EB Garamond / Geist / Gaegu (Google Fonts).
- `colors.css` — base palette, gradients, semantic aliases.
- `typography.css` — font families, type scale, weights, line-heights.
- `spacing.css` — spacing scale, radii, shadows, motion.

**components/core/** — reusable primitives (`<Name>.jsx` + `.d.ts` + `.prompt.md`)
- `Button` · `TopicChip` · `Input` · `AvatarStack` · `Logo`
- `core.card.html` — Design-System tab specimen.

**guidelines/** — foundation specimen cards (Colors, Type, Spacing, Brand).

**ui_kits/waitlist/** — pre-register / waitlist landing screen (the conversion
form): `index.html` + `Waitlist.jsx`. Marked as a Starting Point.

**assets/** — `images/` (lifestyle photos + avatars), `icons/` (arrow SVG).

---

## Caveats

- **Fonts** load from **Google Fonts** (EB Garamond, Geist, Gaegu) rather than
  self-hosted binaries. All three match the Figma usage exactly. If you need
  offline/self-hosted fonts, drop the `.woff2` files into `assets/fonts/` and
  swap the `@import` in `tokens/fonts.css` for local `@font-face` rules.
- The Figma file uses Lorem Ipsum placeholder body text; real editorial copy is
  not yet written. Headlines, categories and the founder letter are real.
