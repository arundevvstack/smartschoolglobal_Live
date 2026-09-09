# HOMEPAGE UI/UX AUDIT

## Overview
This audit evaluates the Smart School AI Global homepage against the required premium enterprise EdTech visual system (Blue + White + Navy), content truth guidelines, and responsive/accessibility requirements.

## 1. Visual Hierarchy & Rhythm
**Current State:**
- Hero is Deep Blue (`bg-[#0A192F]` with gradient).
- Problems/Solutions is Deep Blue (`bg-[#0A192F]`).
- Feature Grid is White (`bg-white`).
- Solutions Tabs is White/Surface (`bg-surface`).
- Trust Section is White (`bg-white`).
- CTA Section is Deep Blue (`bg-brand-900`).

**Issues:**
- The transition from Feature Grid (White) to Solutions Tabs (White) to Trust Section (White) lacks visual rhythm.
- The requested pacing includes a Light Blue segment for Proof/Solutions.

**Fix Required:**
- Change `SolutionsTabs` background to `bg-brand-50` (Very Light Blue) to create alternating rhythm: White (Features) -> Light Blue (Solutions) -> White (Trust) -> Deep Blue (CTA).

## 2. Color System & Tokens
**Current State:**
- `globals.css` defines `--color-brand-900` as `#1a237e` and `--navy` as `#0f172a`.
- Sections use raw hex codes (e.g., `#0A192F`, `#020617`) instead of the semantic design tokens, leading to slight color mismatches.

**Fix Required:**
- Normalize Hero and Problems/Solutions to use `bg-brand-950` or the established `bg-slate-950` instead of raw hex values to ensure a unified Deep Blue.
- Ensure all primary buttons use `bg-blue-600 hover:bg-blue-500` consistently.

## 3. Typography & Spacing
**Current State:**
- Some sections use `text-base font-semibold leading-7 text-brand-600 uppercase tracking-wide` (Trust Section) while others use `text-xs font-bold ... tracking-widest` (Solutions).
- Padding varies (`py-24` is standard, but internal spacing inside cards/metrics is inconsistent).

**Fix Required:**
- Standardize section eyebrows to: `text-sm font-bold tracking-widest uppercase text-blue-600` (or `text-blue-400` on dark backgrounds).
- Standardize H2 headings to: `text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight`.

## 4. Content Truth Check
**Current State:**
- `trust-section.tsx` contains two unverified claims: "3x Earlier identification" and "60% Improved parent engagement".
- `cta-section.tsx` contains "20-Min AI Demo" which is unverified.

**Fix Required:**
- Remove the two unverified metrics from `trust-section.tsx`.
- Change "20-Min AI Demo" to "Personalised Demo" in `cta-section.tsx`.

## 5. Interaction & Motion System
**Current State:**
- Features Grid uses a hover/click feature selector.
- Problems/Solutions uses a 3D scroll transformation.
- Solutions Tabs uses keyboard-accessible tabs.

**Fix Required:**
- Ensure all interactive cards have a subtle `hover:-translate-y-1 hover:shadow-lg` transition.
- Standardize transition durations to `300ms` for hover states.
- Ensure `prefers-reduced-motion` is respected across all `framer-motion` instances.

## 6. Accessibility & Responsive
**Current State:**
- Mobile navigation was fixed in a previous task.
- Keyboard navigation works in Solutions Tabs.
- Contrast on some "white text on light blue" might be an issue.

**Fix Required:**
- Audit color contrast on the CTA section buttons and Trust Section metric text. Ensure all text meets WCAG AA standards.
- Ensure 320px screens do not have horizontal scroll bars in the Feature Grid mobile scroller.

## Action Plan
Proceed to implement fixes systematically across `hero.tsx`, `problems-solutions.tsx`, `features-grid.tsx`, `solutions-tabs.tsx`, `trust-section.tsx`, and `cta-section.tsx`.
