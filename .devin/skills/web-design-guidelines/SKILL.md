---
name: web-design-guidelines
description: Review UI code for Web Interface Guidelines compliance. Use when asked to review UI, check accessibility, audit design, review UX, or check the site against best practices.
metadata:
  author: vercel
  version: "1.0.0"
---

# Web Interface Guidelines

Review files for compliance with Vercel's Web Interface Guidelines.

## Guidelines source

Fetch fresh guidelines before each review:

https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md

## How to use

1. Fetch the latest rules from the source URL above.
2. Read the specified files (or ask which files to review if none specified).
3. Check against all rules in the fetched guidelines.
4. Output findings in terse `file:line` format, grouped by file.

## Rules summary (refresh from source)

### Accessibility
- Icon-only buttons need `aria-label`; decorative icons `aria-hidden="true"`
- Form controls need `<label>` or `aria-label`; semantic HTML before ARIA
- Hierarchical headings + skip link; async updates use `aria-live`/`role="status|alert"`
- Meaningful media needs captions/descriptions; keyboard support for media controls

### Focus & Interaction
- Visible `:focus-visible` on all interactive elements; never remove outline without replacement
- `touch-action: manipulation`; intentional tap-highlight; no gesture-only actions

### Forms
- Correct `type`/`autocomplete`/`inputmode`; `spellCheck={false}` on email/name
- Inline errors next to fields; focus first error on submit; submit spinner pattern
- Never block paste

### Animation
- Honor `prefers-reduced-motion` (incl. muted looping video)
- Animate transform/opacity only; never `transition: all`
- Autoplay loops >5s need pause/stop/hide control

### Typography & Copy
- Ellipsis `…` (not `...`); curly quotes; loading states end in `…`
- `text-wrap: balance` on headings, `text-pretty` on paragraphs
- `tabular-nums` for numeric comparisons; active voice; specific button labels

### Images, Video & Performance
- `<img>` needs explicit `width`/`height` (CLS); lazy below the fold; priority above the fold
- Prefer muted `<video>` over GIF; provide poster/still fallback
- Font loading via `<link>` with `font-display: swap` + `preconnect`; no CSS `@import` for webfonts

### Dark Mode & Theming
- `color-scheme` set for both themes (class-based: `html.dark { color-scheme: dark }`)
- `<meta name="theme-color">` matches page background

### Anti-patterns to flag
- `user-scalable=no`, `transition: all`, `outline-none` without focus replacement
- `div`/`span` click handlers, images without dimensions, inputs without labels
- Icon buttons without `aria-label`, hardcoded date/number formats (use `Intl.*`)
