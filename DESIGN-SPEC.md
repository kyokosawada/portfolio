# Portfolio Hub Page — Design Specification

**Owner:** Giusippi Maria II D. Apa — Freelance Web Developer
**Site type:** Single-page personal portfolio
**Stack:** Next.js 16 (App Router), Tailwind CSS v4, TypeScript
**Aesthetic:** Dark, minimal, developer-focused

---

## 1. Global Design Tokens

### Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--bg-primary` | `#0a0a0a` | Page background |
| `--bg-surface` | `#111111` | Cards, elevated surfaces |
| `--bg-surface-hover` | `#1a1a1a` | Card hover state |
| `--border` | `#1e1e1e` | Subtle borders on cards/dividers |
| `--border-hover` | `#2a2a2a` | Border hover state |
| `--text-primary` | `#ededed` | Headings, primary text |
| `--text-secondary` | `#a0a0a0` | Body copy, descriptions |
| `--text-muted` | `#666666` | Captions, labels, footer text |
| `--accent` | `#14b8a6` | Primary accent — teal (Tailwind `teal-500`) |
| `--accent-hover` | `#0d9488` | Accent hover state (Tailwind `teal-600`) |
| `--accent-glow` | `rgba(20, 184, 166, 0.15)` | Subtle glow effects behind accent elements |

### Typography

| Element | Font | Weight | Size (mobile / desktop) | Line Height | Letter Spacing |
|---------|------|--------|-------------------------|-------------|----------------|
| H1 (Hero name) | Inter | 700 (Bold) | 2.5rem / 4rem | 1.1 | `-0.02em` |
| H2 (Section title) | Inter | 600 (Semibold) | 1.75rem / 2.25rem | 1.2 | `-0.01em` |
| H3 (Card title) | Inter | 600 (Semibold) | 1.125rem / 1.25rem | 1.3 | `0` |
| Body | Inter | 400 (Regular) | 1rem | 1.7 | `0` |
| Small / Caption | Inter | 400 (Regular) | 0.875rem | 1.5 | `0` |
| Code / Tech badge | Inter Mono or Geist Mono | 500 (Medium) | 0.8rem | 1 | `0.02em` |

**Font loading:** Use `next/font/google` to load Inter (weights: 400, 500, 600, 700). Keep Geist Mono from the existing layout for code/monospace contexts.

### Spacing Scale

Base unit: `4px`. Use Tailwind's default spacing scale.

| Context | Value |
|---------|-------|
| Section vertical padding | `py-24` (96px) mobile, `py-32` (128px) desktop |
| Section max width | `max-w-5xl` (1024px), centered with `mx-auto` |
| Section horizontal padding | `px-6` (24px) mobile, `px-8` (32px) desktop |
| Between section heading and content | `mb-12` (48px) mobile, `mb-16` (64px) desktop |
| Card padding | `p-6` (24px) |
| Card gap (grid) | `gap-6` (24px) |

### Border Radius

| Element | Value |
|---------|-------|
| Cards | `rounded-xl` (12px) |
| Buttons | `rounded-lg` (8px) |
| Tech badges | `rounded-md` (6px) |
| Input fields | `rounded-lg` (8px) |

### Transitions

All interactive elements: `transition-all duration-300 ease-in-out`

---

## 2. Layout & Navigation

### Page Structure

Single-page layout. All sections stack vertically. Navigation is a fixed top bar.

```
[Nav]
[Hero]
[About]
[Skills]
[Projects]
[Contact]
[Footer]
```

### Navigation Bar

- **Position:** `fixed top-0` with `z-50`, full width
- **Background:** `bg-[#0a0a0a]/80 backdrop-blur-md` — semi-transparent with blur
- **Border:** `border-b border-[#1e1e1e]`
- **Height:** `h-16` (64px)
- **Inner container:** `max-w-5xl mx-auto px-6` — flex, items-center, justify-between
- **Left:** Name/logo text — "G." in accent color, semibold, text-lg
- **Right:** Navigation links — `text-sm font-medium text-[#a0a0a0]` with `hover:text-[#ededed]` transition
  - Links: About, Skills, Projects, Contact
- **Mobile:** Hamburger menu icon (3 horizontal lines). Opens a full-screen overlay with nav links centered vertically, large text, `bg-[#0a0a0a]/95 backdrop-blur-lg`.
- **Scroll behavior:** Smooth scroll to sections via anchor links (`scroll-behavior: smooth` on `<html>`)
- **Active link:** When section is in viewport, corresponding nav link gets `text-[#ededed]` color. Use Intersection Observer.

---

## 3. Section Specifications

### 3.1 Hero Section

**Purpose:** Immediate identity and value proposition.

- **Layout:** Centered content, full viewport height (`min-h-screen`), flex column, items-center, justify-center
- **Content stack (centered, `text-center`):**
  1. **Greeting line:** `text-sm font-medium text-[#14b8a6] tracking-wider uppercase mb-4` — Text: `"Hello, I'm"`
  2. **Name:** `text-4xl md:text-6xl lg:text-7xl font-bold text-[#ededed] mb-4` — Text: `"Giusippi Maria II D. Apa"`
  3. **Title:** `text-xl md:text-2xl font-medium text-[#a0a0a0] mb-6` — Text: `"Freelance Web Developer"`
  4. **Tagline:** `text-base md:text-lg text-[#666666] max-w-lg mx-auto mb-10` — Text: `"Building modern, polished web experiences for businesses that want to stand out."`
  5. **CTA Button:** Links to `#projects` section
     - Style: `inline-flex items-center gap-2 px-6 py-3 bg-[#14b8a6] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0d9488] transition-all duration-300`
     - Text: `"View My Work"`
     - Include a subtle arrow-down icon (Heroicons `ArrowDownIcon` or chevron)
  6. **Scroll indicator:** Small animated chevron at bottom of viewport, pulsing opacity animation, `absolute bottom-8`

**Animations:**
- Elements fade-in and slide-up on page load with staggered delays (100ms between each element)
- Use CSS `@keyframes` — `opacity: 0 → 1`, `translateY(20px) → 0`
- Delay sequence: greeting 0ms, name 100ms, title 200ms, tagline 300ms, CTA 400ms

---

### 3.2 About Section

**ID:** `#about`

**Layout:**
- Section wrapper: `py-24 md:py-32`
- Content: `max-w-5xl mx-auto px-6 md:px-8`
- Two-column on desktop: `grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center`

**Left column:**
- Section label: `text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3` — Text: `"About"`
- Heading: `text-3xl md:text-4xl font-bold text-[#ededed] mb-6` — Text: `"Crafting Digital Experiences"`
- Body paragraphs: `text-[#a0a0a0] leading-relaxed space-y-4`
  - Paragraph 1: Brief intro about being a freelance developer who partners with businesses to build web experiences
  - Paragraph 2: Focus on clean code, modern frameworks, and attention to detail
- Optional accent underline beneath heading: `w-12 h-0.5 bg-[#14b8a6] mt-2 mb-6`

**Right column:**
- A subtle decorative element: a rounded rectangle (`rounded-2xl`) with `border border-[#1e1e1e]` and `bg-[#111111]`
- Inside: A few key stats or highlights, styled as a mini-card:
  - `"4+ Project Types"` — with icon
  - `"Modern Stack"` — Next.js, React, Tailwind
  - `"Pixel-Perfect"` — Responsive across all devices
- Stats use `text-2xl font-bold text-[#ededed]` for the number/label and `text-sm text-[#666666]` for the description

**Scroll animation:** Fade-in-up when section enters viewport (Intersection Observer, `threshold: 0.2`)

---

### 3.3 Skills Section

**ID:** `#skills`

**Layout:**
- Section wrapper: `py-24 md:py-32 border-t border-[#1e1e1e]`
- Content: `max-w-5xl mx-auto px-6 md:px-8 text-center`

**Header:**
- Section label: `text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3` — Text: `"Skills"`
- Heading: `text-3xl md:text-4xl font-bold text-[#ededed] mb-4` — Text: `"Technologies I Work With"`
- Subtext: `text-[#a0a0a0] max-w-md mx-auto mb-12` — Text: `"My core toolkit for building fast, modern web applications."`

**Skills Grid:**
- Layout: `flex flex-wrap justify-center gap-3 md:gap-4`
- Each badge is a pill/chip:

**Tech Badge Component:**
- Container: `inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] border border-[#1e1e1e] rounded-md hover:border-[#14b8a6]/50 hover:bg-[#1a1a1a] transition-all duration-300`
- Icon: 20x20px SVG icon or emoji placeholder (grayscale, `opacity-70`)
- Text: `text-sm font-medium text-[#a0a0a0] hover:text-[#ededed]`

**Skills list with icons:**

| Skill | Icon approach |
|-------|--------------|
| Next.js | Next.js logo SVG or text glyph |
| React | React atom SVG |
| TypeScript | TS logo SVG |
| Tailwind CSS | Tailwind logo SVG |
| Node.js | Node.js logo SVG |
| Git | Git logo SVG |

Optional additional skills to flesh out the grid (if desired): JavaScript, HTML5, CSS3, Figma, Vercel, REST APIs.

**Scroll animation:** Badges fade in with stagger (50ms delay between each), sliding up 10px.

---

### 3.4 Projects Section

**ID:** `#projects`

**Layout:**
- Section wrapper: `py-24 md:py-32 border-t border-[#1e1e1e]`
- Content: `max-w-5xl mx-auto px-6 md:px-8`

**Header:**
- Section label: `text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3` — Text: `"Projects"`
- Heading: `text-3xl md:text-4xl font-bold text-[#ededed] mb-4` — Text: `"Featured Work"`
- Subtext: `text-[#a0a0a0] max-w-lg mb-12 md:mb-16` — Text: `"A selection of showcase sites built to demonstrate modern web development capabilities."`

**Projects Grid:**
- Layout: `grid grid-cols-1 md:grid-cols-2 gap-6`
- 4 cards, 2x2 on desktop, stacked on mobile

**Project Card Component:**

```
┌─────────────────────────────────────┐
│  [Image placeholder — 16:9 ratio]   │
│                                     │
├─────────────────────────────────────┤
│  Category tag          →  arrow     │
│  Project Title                      │
│  Description text                   │
│                                     │
│  [tech] [tech] [tech]               │
└─────────────────────────────────────┘
```

- **Container:** `group bg-[#111111] border border-[#1e1e1e] rounded-xl overflow-hidden hover:border-[#2a2a2a] transition-all duration-300`
- **Image area:** `relative w-full aspect-video bg-[#0a0a0a] overflow-hidden`
  - Placeholder: A gradient or solid color block for now, styled with `bg-gradient-to-br from-[#1a1a1a] to-[#111111]`
  - On hover: subtle scale-up on image `group-hover:scale-105 transition-transform duration-500`
- **Content area:** `p-6`
  - **Top row:** flex, justify-between, items-center, `mb-3`
    - Category tag: `text-xs font-medium text-[#14b8a6] uppercase tracking-wider`
    - Arrow icon: `text-[#666666] group-hover:text-[#14b8a6] group-hover:translate-x-1 transition-all duration-300` — use `→` or ArrowUpRight icon
  - **Title:** `text-lg font-semibold text-[#ededed] mb-2`
  - **Description:** `text-sm text-[#a0a0a0] leading-relaxed mb-4`
  - **Tech tags:** `flex flex-wrap gap-2`
    - Each tag: `text-xs px-2 py-1 bg-[#0a0a0a] text-[#666666] rounded font-mono`

**Project Data:**

| # | Name | Category | Description | Tech Tags |
|---|------|----------|-------------|-----------|
| 1 | Ember & Oak | Restaurant | An upscale dining experience with online reservations, seasonal menus, and an immersive gallery showcasing the ambiance. | Next.js, Tailwind, TypeScript |
| 2 | Pulse Analytics | SaaS | A conversion-focused landing page for a startup analytics platform, featuring interactive demos and tiered pricing. | Next.js, React, Tailwind |
| 3 | Maison | E-Commerce | A luxury jewelry storefront with curated collections, smooth product filtering, and a refined shopping experience. | Next.js, TypeScript, Tailwind |
| 4 | Hartwell & Associates | Professional | A sophisticated web presence for a law firm, highlighting attorney profiles, practice areas, and client testimonials. | Next.js, Tailwind, TypeScript |

**Scroll animation:** Cards fade in and slide up with stagger (150ms between cards).

---

### 3.5 Contact Section

**ID:** `#contact`

**Layout:**
- Section wrapper: `py-24 md:py-32 border-t border-[#1e1e1e]`
- Content: `max-w-5xl mx-auto px-6 md:px-8`
- Two-column on desktop: `grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16`

**Left column — Info:**
- Section label: `text-sm font-medium text-[#14b8a6] uppercase tracking-wider mb-3` — Text: `"Contact"`
- Heading: `text-3xl md:text-4xl font-bold text-[#ededed] mb-4` — Text: `"Let's Work Together"`
- Body: `text-[#a0a0a0] leading-relaxed mb-8` — Text: `"Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your vision to life."`
- **Social links:** vertical stack, `space-y-4`
  - Each link: `flex items-center gap-3 text-[#a0a0a0] hover:text-[#14b8a6] transition-colors duration-300`
  - Icon (20x20 SVG) + label text
  - Links:
    - GitHub: `github.com/gcpaps`
    - LinkedIn: `linkedin.com/in/giusippiapa`
    - Email: `giusippi.apa@email.com` (placeholder)

**Right column — Form:**
- Form container: `bg-[#111111] border border-[#1e1e1e] rounded-xl p-6 md:p-8`
- Fields stack vertically: `space-y-5`

**Form fields:**

| Field | Type | Placeholder |
|-------|------|-------------|
| Name | text | `"Your name"` |
| Email | email | `"your@email.com"` |
| Message | textarea (4 rows) | `"Tell me about your project..."` |

**Input styling:**
- `w-full px-4 py-3 bg-[#0a0a0a] border border-[#1e1e1e] rounded-lg text-[#ededed] placeholder:text-[#666666] focus:outline-none focus:border-[#14b8a6] focus:ring-1 focus:ring-[#14b8a6]/50 transition-all duration-300`
- Label: `block text-sm font-medium text-[#a0a0a0] mb-2`

**Submit button:**
- `w-full py-3 bg-[#14b8a6] text-[#0a0a0a] font-medium rounded-lg hover:bg-[#0d9488] transition-all duration-300`
- Text: `"Send Message"`

**Note:** The form is presentational for the portfolio. No backend wiring needed. It can use a simple `e.preventDefault()` with a placeholder success state.

**Scroll animation:** Fade-in-up when entering viewport.

---

### 3.6 Footer

**Layout:**
- `py-8 border-t border-[#1e1e1e]`
- Content: `max-w-5xl mx-auto px-6 md:px-8`
- Flex row on desktop, column on mobile: `flex flex-col md:flex-row items-center justify-between gap-4`

**Left:** Copyright text
- `text-sm text-[#666666]` — Text: `"© 2025 Giusippi Maria II D. Apa. All rights reserved."`

**Right:** Footer links
- `flex items-center gap-6`
- Each link: `text-sm text-[#666666] hover:text-[#a0a0a0] transition-colors duration-300`
- Links: GitHub, LinkedIn, Email (same destinations as contact section)

---

## 4. Animation System

### Scroll Reveal (Intersection Observer)

Implement a reusable scroll-reveal mechanism:

1. Create a custom hook or utility: `useScrollReveal` or a `<RevealOnScroll>` wrapper component
2. Uses `IntersectionObserver` with `threshold: 0.15` and `rootMargin: "0px 0px -50px 0px"`
3. Default animation: `opacity 0→1`, `translateY(20px)→0`, `duration: 600ms`, `ease-out`
4. Stagger support: pass a `delay` prop for sequential reveals (e.g., project cards)
5. `once: true` — only animate on first intersection

### CSS Keyframes

Define in `globals.css`:

```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse-soft {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}
```

### Hover Effects
- **Cards:** Border color shift `border-[#1e1e1e] → border-[#2a2a2a]`, subtle bg shift
- **Links:** Color transition `text-[#a0a0a0] → text-[#ededed]` or `→ text-[#14b8a6]`
- **Buttons:** Background darken on primary, border highlight on secondary
- **Project card images:** `scale(1) → scale(1.05)` on group hover
- **Project card arrow:** `translateX(0) → translateX(4px)` on group hover

---

## 5. Component Architecture

```
app/
├── layout.tsx            — Root layout, Inter font, metadata
├── globals.css           — Tailwind import, CSS variables, keyframes
├── page.tsx              — Main page, assembles all sections
└── components/
    ├── Navbar.tsx         — Fixed navigation bar + mobile menu
    ├── Hero.tsx           — Hero section
    ├── About.tsx          — About section
    ├── Skills.tsx         — Skills grid section
    ├── Projects.tsx       — Projects showcase grid
    ├── Contact.tsx        — Contact form + social links
    ├── Footer.tsx         — Footer
    ├── ProjectCard.tsx    — Individual project card
    ├── TechBadge.tsx      — Reusable skill/tech badge pill
    └── RevealOnScroll.tsx — Scroll animation wrapper (client component)
```

### Client vs Server Components

- **Server components (default):** `layout.tsx`, `page.tsx`, `About.tsx`, `Footer.tsx`
- **Client components** (need `"use client"`):
  - `Navbar.tsx` — mobile menu toggle, scroll spy
  - `Hero.tsx` — entry animations (or can be CSS-only, then server)
  - `RevealOnScroll.tsx` — IntersectionObserver
  - `Contact.tsx` — form state management

### Data

Project data should be defined as a typed array in `page.tsx` or a separate `data/projects.ts` file:

```ts
interface Project {
  title: string;
  category: string;
  description: string;
  techStack: string[];
  image?: string; // placeholder for now
  href?: string;  // link to project (future)
}
```

---

## 6. Responsive Breakpoints

Follow Tailwind defaults:

| Breakpoint | Width | Key layout changes |
|------------|-------|--------------------|
| Default (mobile) | < 640px | Single column, stacked layout, hamburger nav |
| `sm` | 640px | Minor spacing adjustments |
| `md` | 768px | Two-column grids (About, Projects, Contact), desktop nav links |
| `lg` | 1024px | Larger typography, more generous spacing |

---

## 7. Metadata & SEO

```tsx
export const metadata: Metadata = {
  title: "Giusippi Maria II D. Apa — Freelance Web Developer",
  description: "Freelance web developer specializing in modern, polished web experiences built with Next.js, React, and Tailwind CSS.",
  keywords: ["freelance web developer", "Next.js", "React", "portfolio", "web development"],
  openGraph: {
    title: "Giusippi Maria II D. Apa — Freelance Web Developer",
    description: "Building modern, polished web experiences for businesses that want to stand out.",
    type: "website",
  },
};
```

---

## 8. Accessibility Requirements

- All interactive elements must be keyboard-accessible
- Color contrast: `#a0a0a0` on `#0a0a0a` = 9.1:1 ratio (passes AAA)
- Color contrast: `#14b8a6` on `#0a0a0a` = 7.2:1 ratio (passes AAA)
- Focus states: `focus-visible:ring-2 focus-visible:ring-[#14b8a6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]`
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`
- Form labels properly associated with inputs
- Skip-to-content link (visually hidden, shows on focus)
- `prefers-reduced-motion: reduce` — disable all animations, show content immediately
- Images (when added): meaningful `alt` text

---

## 9. Performance Considerations

- Use `next/font/google` for Inter — zero layout shift
- Minimal client-side JavaScript — only for nav toggle, scroll observer, form state
- No heavy animation libraries (no Framer Motion) — pure CSS + IntersectionObserver
- Lazy-load project images below the fold when real images are added
- Target Lighthouse scores: Performance 95+, Accessibility 100, Best Practices 100, SEO 100
