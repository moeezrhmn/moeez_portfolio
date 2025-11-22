# Portfolio Design System

## Design Philosophy
Modern, dark, creative design with a hacker/developer aesthetic. Clean, professional, and highly readable despite the dark theme.

---

## Color Palette

### Primary Colors
- **Background Primary:** `#0a0a0a` (Deep Black)
- **Background Secondary:** `#000000` (Pure Black)
- **Background Card/Elevated:** `#111111` (Slightly lighter black)
- **Background Hover:** `#1a1a1a`

### Accent Colors
- **Primary Accent (Neon Green):** `#00ff41` (Bright glowing green)
- **Secondary Accent:** `#00dd38` (Slightly darker green)
- **Accent Glow:** `rgba(0, 255, 65, 0.5)` (For glow effects)

### Text Colors
- **Text Primary:** `#ffffff` (White)
- **Text Secondary:** `#a0a0a0` (Light gray)
- **Text Muted:** `#666666` (Dark gray)
- **Text Accent:** `#00ff41` (Neon green for highlights)

### Utility Colors
- **Border:** `#222222`
- **Border Hover:** `#333333`
- **Success:** `#00ff41`
- **Warning:** `#ffaa00`
- **Error:** `#ff4444`

---

## Typography

### Font Families
- **Primary Font (Body):** `'Inter', 'SF Pro Display', -apple-system, sans-serif`
- **Monospace/Code Font:** `'JetBrains Mono', 'Fira Code', 'Consolas', monospace`
- **Heading Font:** `'Inter', sans-serif` (Bold weights)

### Font Sizes
- **Hero Title:** `4xl - 6xl` (64px - 96px)
- **Page Title (h1):** `3xl - 5xl` (48px - 72px)
- **Section Title (h2):** `2xl - 4xl` (36px - 56px)
- **Subsection (h3):** `xl - 2xl` (24px - 36px)
- **Body Large:** `lg` (18px)
- **Body:** `base` (16px)
- **Body Small:** `sm` (14px)
- **Caption:** `xs` (12px)

### Font Weights
- **Regular:** 400
- **Medium:** 500
- **Semibold:** 600
- **Bold:** 700
- **Extrabold:** 800

---

## Spacing Scale
Following Tailwind's spacing scale (4px base):
- **xs:** 0.5rem (8px)
- **sm:** 1rem (16px)
- **md:** 1.5rem (24px)
- **lg:** 2rem (32px)
- **xl:** 3rem (48px)
- **2xl:** 4rem (64px)
- **3xl:** 6rem (96px)
- **4xl:** 8rem (128px)

---

## Effects & Animations

### Glow Effects
```css
/* Button Glow */
box-shadow: 0 0 20px rgba(0, 255, 65, 0.5);

/* Text Glow */
text-shadow: 0 0 10px rgba(0, 255, 65, 0.8);

/* Card Hover Glow */
box-shadow: 0 0 30px rgba(0, 255, 65, 0.3);
```

### Transitions
- **Fast:** 150ms
- **Normal:** 300ms
- **Slow:** 500ms
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

### Animations
- **Fade In:** Opacity 0 → 1
- **Slide Up:** translateY(20px) → 0
- **Scale:** scale(0.95) → 1
- **Glow Pulse:** Subtle pulsing on interactive elements
- **Cursor Trail:** Optional glowing cursor effect
- **Text Type:** Typing animation for hero section

---

## Components

### Buttons
- **Primary Button:**
  - Background: Neon green (#00ff41)
  - Text: Black (#0a0a0a)
  - Hover: Glow effect + slight scale
  - Border radius: 8px

- **Secondary Button:**
  - Background: Transparent
  - Border: 2px solid neon green
  - Text: Neon green
  - Hover: Background neon green, text black

- **Ghost Button:**
  - Background: Transparent
  - Text: White
  - Hover: Background #1a1a1a

### Cards
- Background: `#111111`
- Border: `1px solid #222222`
- Border radius: 12px
- Padding: 24px - 32px
- Hover: Border glow + slight elevation

### Inputs
- Background: `#111111`
- Border: `1px solid #222222`
- Focus: Neon green border + glow
- Text: White
- Placeholder: `#666666`

### Links
- Default: White
- Hover: Neon green + underline
- Active: Neon green

---

## Layout Structure

### Pages (3-4 pages)
1. **Home** (`/`)
   - Hero section with animated intro
   - Brief introduction
   - Call-to-action buttons

2. **About** (`/about`)
   - About me section
   - Skills showcase (grid/cards)
   - Services offered

3. **Work** (`/work`)
   - Experience timeline
   - Projects showcase (grid/cards with hover effects)

4. **Contact** (`/contact`)
   - Contact form
   - Social links
   - Email/phone info

### Navigation
- Fixed/sticky header
- Logo/name on left
- Menu items on right
- Mobile: Hamburger menu
- Hover: Neon green underline/indicator

### Grid System
- Max width: 1280px (container)
- Padding: 16px (mobile) - 24px (desktop)
- Columns: 12-column grid
- Gap: 24px - 32px

---

## Tech Stack

### Core
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS

### Libraries
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Forms:** React Hook Form (for contact form)
- **Validation:** Zod (optional, for form validation)

### Development Tools
- **Linting:** ESLint
- **Formatting:** Prettier
- **Version Control:** Git

---

## Responsive Breakpoints
Following Tailwind's default breakpoints:
- **sm:** 640px (Mobile landscape)
- **md:** 768px (Tablet)
- **lg:** 1024px (Desktop)
- **xl:** 1280px (Large desktop)
- **2xl:** 1536px (Extra large)

---

## Accessibility
- High contrast ratio (WCAG AAA compliant where possible)
- Keyboard navigation support
- Focus indicators with neon green outline
- Semantic HTML
- ARIA labels where necessary
- Alt text for images

---

## Special Features

### Hero Section
- Typing animation for title/tagline
- Glowing cursor effect
- Particle background (optional)
- Smooth scroll to sections

### Animations
- Fade in on scroll for sections
- Hover effects on cards/buttons
- Loading states with skeleton screens
- Page transitions

### Interactive Elements
- Smooth scrolling
- Parallax effects (subtle)
- Hover states with glow
- Click animations

---

## File Structure
```
/portfolio
├── app/
│   ├── page.tsx (Home)
│   ├── about/page.tsx
│   ├── work/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/ (buttons, cards, inputs, etc.)
│   ├── layout/ (header, footer, navigation)
│   ├── sections/ (hero, about, experience, etc.)
│   └── animations/
├── lib/
│   ├── data/ (portfolio content)
│   └── utils/
├── public/
│   ├── images/
│   └── icons/
└── styles/
```

---

## Notes
- Maintain consistent spacing throughout
- Use glow effects sparingly for emphasis
- Ensure readability with proper contrast
- Test on multiple devices/browsers
- Optimize images and assets
- Keep animations smooth (60fps)
