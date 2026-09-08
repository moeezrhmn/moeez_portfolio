# Redesign Implementation Plan

**Branch:** `redesign/obsidian` · **Started:** 8 Sep 2026 · **Target:** moeezrehman.com

Porting the validated static design in [`obsidian/`](obsidian/) into the Next.js app.
The static files are the reference implementation: when this document and the HTML
disagree, the HTML wins.

---

## 1. Why this redesign

The previous site was dark background + one neon accent + glassmorphism + glow borders +
rounded cards. Research into 2026 portfolio conventions found that this is now the
*single most recognisable signature of an AI-generated site*, and also the shape of the
most-cloned developer portfolio template in circulation. It read as generic to exactly
the audience it needed to impress.

The replacement commits to a different point of view: warm bone paper, hairline rules
instead of card shadows, a three-role type system, one restrained brass accent, and zero
border radius anywhere.

The positioning also changed. The site now sells **Full Stack AI Engineer**, not backend
generalist, matching the résumé and the last two years of work.

---

## 2. Locked decisions

These are settled. Reopen only with a reason.

| Decision | Choice | Why |
|---|---|---|
| Direction | Obsidian (of four explored) | Highest ceiling; the other three are archived in `obsidian/`-adjacent root HTML files |
| Default theme | **Light**, with a toggle | Explicit user choice; OS preference deliberately ignored |
| Domain | `moeezrehman.com` (live) | Purchased and ready |
| Email | `contact@moeezrehman.com` | Domain is live, so no fallback needed |
| Phone | `+92 312 662 2545` | Business line, not personal |
| Content architecture | Split by repetition (§5) | Duplicated facts drift; that is a credibility bug |
| `/projects`, `/blog` | Removed, redirect → `/work` | `/projects` duplicated `/work`; an empty blog costs credibility |
| Em dashes | None, anywhere | Reads as machine-written |
| Icon set | None | Text arrows and hairlines only; `react-icons` is dropped entirely |

---

## 3. Design system

### 3.1 Palette

Every colour is a CSS variable so the theme switch is one attribute on `<html>`.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--void` | `#F4F1EA` | `#0A0A0B` | Page ground |
| `--deep` | `#EAE6DC` | `#0F0F11` | Alternating band |
| `--raised` | `#E1DCD0` | `#141416` | Cards, inputs |
| `--bone` | `#15140F` | `#EDEAE3` | Primary text |
| `--ash` | `#5C574C` | `#8A867E` | Secondary text |
| `--dim` | `#6F6A5C` | `#5A564E` | Tertiary |
| `--line` | `#D7D1C1` | `#1F1E1C` | Hairlines |
| `--brass` | `#8A6620` | `#C9A45C` | The single accent |
| `--onbrass` | `#F4F1EA` | `#0A0A0B` | Text on brass |

Brass is deepened in light mode so the accent still passes contrast on a pale ground.

**Measured contrast (light, on `#F4F1EA`):** bone 16.35:1, ash 6.37:1, dim 4.78:1,
brass 4.65:1, text-on-brass 4.65:1. All clear WCAG AA. Re-run the check if any value moves.

### 3.2 Type

Three roles, three faces. Loaded via `next/font/google`, not a CDN link.

| Role | Face | Applied to |
|---|---|---|
| Display | **Archivo** 600 | `.disp`, `h1`–`h6`, buttons, form inputs |
| Reading | **Literata** 400/500/600 + italic | `body`; every paragraph, list, table cell, quote |
| Data | **JetBrains Mono** 400/500 | `.meta`, nav, labels, figures, tags |

Literata is requested with optical sizing (`opsz 7..72`). It was engineered for extended
screen reading, which is why the long prose on About and the case study is comfortable in
it and was not in Archivo.

`--font-body` is the single switch if this ever needs revisiting.

### 3.3 Rules

- **No border radius.** Anywhere. Sharp corners are the design.
- **No shadows, no gradients, no glow.** Hairline rules do the separating work.
- **One motion motif:** an arrow that nudges on hover. Reused everywhere.
- **One theatrical moment per page:** the masked headline reveal on load. Everything after is calm.
- **Brass is scarce.** Roughly six appearances per page. Scarcity is what makes it read as expensive.
- **Tabular numerals** on every figure (`.tnum`).
- `prefers-reduced-motion` disables all of it.

### 3.4 Shared primitives

Port these from [`obsidian/assets/site.css`](obsidian/assets/site.css):

`.disp` · `.meta` · `.tnum` · `.prose` · `.ln` · `.arw` / `.grp` · `.btn` · `.btn-ghost` ·
`.mask` (headline reveal) · `.fade` (scroll reveal) · `.marq` (marquee) · `.prog` (reading
progress) · `.site-head` · `.nav-a` · `.theme-btn` · `.drawer` / `.burger` · `.idx` +
`.panel` (accordion, `0fr→1fr` height animation) · `.card` · `.hair` · `.gridline` ·
`.field` · `.portrait` · `.grain` (film-grain overlay) · `.d-*` (diagram classes)

---

## 4. Route map

| Before | After | Notes |
|---|---|---|
| `/` | `/` | Rebuilt |
| `/about` | `/about` | Rebuilt |
| `/work` | `/work` | Rebuilt, now holds all 9 cases |
| `/contact` | `/contact` | Rebuilt, form wired to `/api/contact` |
| `/projects` | → `/work` | Permanent redirect in `next.config.ts` |
| `/blog` | → `/work` | Permanent redirect |
| — | `/services` | **New** |
| — | `/work/catalogue-sync` | **New** — deep case study |

---

## 5. Content architecture

> **Single-source anything that appears twice, or that someone could hold you to.
> Colocate anything written once.**

This deliberately supersedes the old "all content in `portfolio-data.ts`" rule.
Inventing a schema for prose that appears exactly once buys nothing and produces
`caseStudy.sections[2].paragraphs[1]`.

### In `lib/` (structured, repeated, or a claim)

| File | Holds | Consumed by |
|---|---|---|
| `config.ts` ✅ | Identity, contact, location, socials, availability | Every page, footer, JSON-LD, OG |
| `data/cases.ts` | 9 case records | Home (5), `/work` (9), case study header |
| `data/services.ts` | 3 engagements **incl. prices** | Home teaser, `/services` |
| `data/metrics.ts` | 300k / 40-a-day / 80% / 5+ | Home, `/work`, case study |
| `data/stack.ts` | 6 toolkit groups | Home, `/about` |
| `data/experience.ts` | 6 roles + education | `/about`, `Person` JSON-LD |
| `data/faqs.ts` | FAQ sets keyed by page | Home, `/services`, `/contact`, `FAQPage` JSON-LD |

### In the page (prose written once)

Hero copy · section headings · the About narrative · the case study's brief, constraints,
five decisions and hindsight · FAQ answer bodies.

---

## 6. File plan

### Create
```
lib/data/{cases,services,metrics,stack,experience,faqs}.ts
components/layout/ThemeToggle.tsx
components/ui/{Accordion,Reveal,Marquee,Portrait}.tsx
app/services/page.tsx        + layout.tsx
app/work/[slug]/page.tsx     (catalogue-sync)
public/profile.jpeg
```

### Rewrite
```
app/globals.css              tokens → @theme, primitives, both themes
app/layout.tsx               next/font, no-flash theme script, metadata
app/page.tsx  app/about/page.tsx  app/work/page.tsx  app/contact/page.tsx
app/sitemap.ts               new routes
app/opengraph-image.tsx      Stage D
components/layout/{Header,Footer}.tsx
components/ui/Button.tsx
next.config.ts               redirects
CLAUDE.md                    currently documents a theme that no longer exists
public/manifest.json ✅
```

### Delete
```
app/projects/  app/blog/
components/home/{Terminal,BackgroundEffects,HomeSections,HeroClient}.tsx
lib/data/portfolio-data.ts
public/apple-touch-icon.svg ✅   (SVG never worked for iOS)
```
Drop `react-icons` from `package.json` once no import remains.

---

## 7. Stages

Each stage ends green: `npx tsc --noEmit` and `npm run build` both pass.

### Stage A — foundation ✅
- [x] `globals.css`: both palettes, `@theme` mapping, all §3.4 primitives
- [x] `layout.tsx`: three fonts via `next/font`, no-flash theme script, updated metadata
- [x] `ThemeToggle`, `Header` (nav + live Lahore clock + mobile drawer), `Footer`, `Button`
- [x] `Reveal` and `Accordion` primitives
- [x] `/projects` and `/blog` deleted, redirects added to `next.config.ts`
- **Accept:** toggle persists across reload, no flash of wrong theme, drawer traps focus and closes on Escape

### Stage B — data ✅
- [x] Six `lib/data/*.ts` files, typed, no prose
- [x] `lib/rich.ts` + `RichText` for the `**bold**` / `[link](/href)` convention
- [x] Deleted `portfolio-data.ts`
- **Accept:** no duplicated fact anywhere; every price and metric has exactly one definition

### Stage C — pages ✅
- [x] Home, `/work` (filter), `/services`, `/about`, `/contact`, `/work/catalogue-sync`
- [x] Deleted `components/home/*`; dropped `react-icons`
- **Accept:** every internal link resolves; filter works with JS disabled (all cases visible)

### Stage D — finish ✅
- [x] Contact form → `/api/contact`, with validation, error and success states
- [x] JSON-LD: `Person` on `/about`, `FAQPage` on home, `/services`, `/contact`
- [x] **`opengraph-image.tsx` rebuilt** — this is what renders when the link is pasted into
      LinkedIn or WhatsApp, so it does more work than most of the site while job hunting.
      Name, title, one metric, brass rule, on the bone ground.
- [x] `sitemap.ts`, `CLAUDE.md`, `deploy.sh` domain
- **Accept:** OG image renders at `/opengraph-image`; Lighthouse ≥ 95 on performance and accessibility

---

## 8. Blockers

These ship broken or false unless resolved. **None of them are mine to answer.**

| # | Item | Where | Status |
|---|---|---|---|
| 1 | **Real prices** — current figures are invented placeholders | Home teaser, `/services` | ⬜ |
| 2 | ~~Real testimonials~~ — resolved: two verbatim Upwork reviews now on the home page, plus a factual employment record | — | ✅ |
| 3 | ~~Booking link~~ — resolved: `https://cal.com/moeezrhmn` was already in the old code and is now in `siteConfig` | — | ✅ |
| 4 | **Updated résumé** — `public/Moeez-Rehman-Resume.pdf` is the March version and still lists the old email and `+92 322` number. A recruiter comparing it to the site sees two different people | `/`, all footers | ⬜ |
| 5 | **MCP case detail** — written conservatively from one sentence. Which tools did the server expose, to which agent, replacing what? | `/work` case 05 | ⬜ |
| 6 | **Host env var** — `NEXT_PUBLIC_SITE_URL=https://moeezrehman.com` must be set on the host; `.env` is gitignored | Production | ⬜ |
| 7 | ~~Mailbox / Resend~~ — resolved: domain verified, live form test stored and delivered | — | ✅ |

Items 1–3 can be deferred behind `TODO` markers during the port. **Items 2, 4 and 7 must
be closed before the site goes public.**

---

## 9. Pre-launch checklist

- [ ] Every `TODO` in `app/` and `lib/` resolved or consciously accepted
- [ ] Testimonial placeholders replaced or the section removed entirely
- [ ] Résumé PDF replaced; contact details match the site exactly
- [ ] Booking link live and tested on mobile
- [ ] Contact form sends a real email end to end
- [ ] Favicon renders in a real tab; iOS home-screen icon is the mark, not a screenshot
- [ ] OG image checked in LinkedIn's post inspector and WhatsApp
- [ ] Both themes checked at 375 px, 768 px, 1440 px
- [ ] Keyboard-only pass: nav, drawer, accordions, form
- [ ] `prefers-reduced-motion` on: nothing animates
- [ ] Lighthouse ≥ 95 performance and accessibility

---

## 10. Rollback

All work is on `redesign/obsidian`; `main` stays deployable throughout.

```bash
git checkout main                  # abandon
git branch -D redesign/obsidian
```

The four static design directions remain at the repo root (`index.html`,
`index-obsidian.html`, `index-schematic.html`, `index-broadsheet.html`) plus the
multi-page build in `obsidian/`. Delete them once the port is merged and settled.

---

## Progress

- [x] Branch created
- [x] Favicon set: `favicon.svg`, `.ico` (16/32/48), `apple-icon.png` 180, `icon-192/512`, maskable, manifest
- [x] Domain wired: `.env` → `moeezrehman.com`
- [x] `lib/config.ts` rewritten as single source for identity and contact
- [x] **Stage A** — tokens, fonts, theme toggle, Header, Footer, Button, Reveal, Accordion
- [x] **Stage B** — six typed data files, rich-text convention, old data file deleted
- [x] **Stage C** — all six pages, filter, case study diagram, dead code removed
- [x] **Stage D** — form wired, JSON-LD, OG image, sitemap, docs

**Port complete.** `npm run build` green, all 10 routes return 200, both redirects 308.

### Fixed along the way

Two pre-existing bugs surfaced during Stage A, unrelated to the redesign:

1. **`app/api/contact/route.ts` printed the live Resend API key to stdout** on every
   build and every cold start (`console.log('Resend API Key:', ...)` at module scope).
   Anyone with access to build or server logs had the key. Removed. **Rotate the key**
   if those logs were ever shipped anywhere shared.
2. **`app/icon.svg` and `app/apple-icon.svg` silently outranked the new favicons.**
   Next's `app/` file conventions take precedence over `metadata.icons`, so the site was
   still serving the old orange mark, and `apple-icon.svg` re-introduced the iOS bug the
   new PNG had just fixed. Both deleted; `public/` + `metadata.icons` is now authoritative.


---

## Post-port notes

**Fixed along the way (pre-existing, not redesign work):**

3. **`app/api/contact/route.ts` hardcoded the old domain** for both `from` and `to`, and
   interpolated submitted text straight into the email HTML. Now reads `siteConfig` and
   escapes input. **The `from` domain must be verified in Resend** or delivery fails
   with a 403 — `moeezrehman.com` needs adding there.
4. **`.next/` was tracked** despite being gitignored: 274 files, 83 MB, force-added in
   three commits. Untracked. History still carries the weight; shrinking that needs a
   rewrite, which has not been done.
5. **`react-icons` removed** — no imports left after the port.

**Added after the port: contact persistence**

Neon Postgres, for one purpose: enquiries survive a mail failure. The contact
route writes a row, then calls Resend, then records whether the send worked. It
returns 200 if either path succeeded. Everything else on the site stays static.

- Table lives in the **`portfolio`** database, not Neon's default `neondb`
  (`neon init` pointed `DATABASE_URL` at `neondb`; corrected, stray table dropped)
- `scripts/init-db.mjs` creates it, `scripts/submissions.mjs` reads recent
  enquiries, `scripts/retry-emails.mjs` clears the undelivered backlog
- Proven in practice: a live POST returned 200 and stored the enquiry while
  Resend rejected the send with "domain is not verified"

**Verified on the production build:**

- All 10 routes 200; `/projects` and `/blog` 308 to `/work`
- Fonts self-hosted from `/_next/static/media/*.woff2`, zero requests to Google
- Zero em dashes in any rendered page, including `<title>` and OG tags
- OG image renders at 1200×630
- `/opengraph-image` is now statically prerendered rather than edge-rendered per request
