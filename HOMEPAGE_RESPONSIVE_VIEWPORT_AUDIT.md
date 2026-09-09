# HOMEPAGE RESPONSIVE + VIEWPORT AUDIT

## 1. Existing Viewport Issues
- **Hero & Problems/Solutions:** Both sections rely on `h-[100svh] overflow-hidden` for their sticky storytelling stages. On short mobile viewports (e.g., iPhone SE at 667px height), stacking the text and a `420px`/`460px` minimum-height product visual causes severe vertical clipping.
- **Product Stages:** Hardcoded minimum heights (e.g., `min-h-[500px]` in Feature Grid, `min-h-[450px]` in Solutions) squeeze mobile layouts and cause overflow.
- **Section Spacing:** Universal use of `py-24` creates excessive whitespace on mobile devices, breaking the feeling of a dense, intentional mobile product.

## 2. Section-by-Section Height Strategy
- **Hero (Sticky Stage):** Keep `100svh` but aggressively scale down the mobile product fallback (`min-h-[420px]` -> `min-h-[280px] lg:min-h-[420px]`) and use `clamp()` for typography to guarantee no clipping occurs.
- **Problems/Solutions (Sticky Stage):** Same as Hero. Reduce product stage on mobile from `460px` to `280px`.
- **Feature Grid:** Natural height. Reduce padding to `py-16 lg:py-24`. Reduce mobile product stage to `min-h-[350px]`.
- **Solutions Tabs:** Natural height. Reduce padding to `py-16 lg:py-24`. Reduce product stage to `min-h-[300px]`.
- **Trust Section:** Natural height. `py-16 lg:py-24`.
- **CTA Section:** Natural height. `py-16 lg:py-24`.

## 3. 100svh / 100dvh Usage
- Sticky stages will use `h-[100svh]` to handle dynamic mobile browser chrome safely.
- We will remove `overflow-hidden` if it risks clipping text, opting instead for `overflow-x-hidden` combined with careful flexbox scaling.

## 4. Responsive Breakpoint Strategy
- **Mobile (< 768px):** Stacked content, reduced product heights (`280px`-`350px`), `py-16` spacing, smaller text (`text-3xl` max for H1/H2).
- **Tablet (768px - 1024px):** Two-column layouts where they fit, otherwise comfortably wide single columns. Medium product heights.
- **Desktop (> 1024px):** Full two-column storytelling, full `450px+` product heights, `py-24` spacing, expansive typography.

## 5. 3D Overflow Audit
- 3D transforms (`rotateY`, `rotateX`) in Hero and Problems/Solutions can cause edges of the dashboard to bleed horizontally.
- **Fix:** Wrap 3D containers in an outer `overflow-x-hidden` utility where necessary, or restrict the `rotateY` limits to prevent bounding box overflow.

## 6. Accessibility & Performance
- Ensure `prefers-reduced-motion` is actively disabling 3D transforms.
- Ensure all text remains visible and scales without wrapping awkwardly or clipping.

## 7. Remaining Defects
- Colors and Content Truth fixes from the previous UI/UX Refinement phase must be applied concurrently with these responsive updates.
