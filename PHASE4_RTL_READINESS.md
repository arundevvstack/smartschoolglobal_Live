# Phase 4: RTL (Right-to-Left) Readiness Audit

To prepare for future Arabic localization, the current Tailwind architecture must be audited for RTL compatibility.

### Current Status
The codebase heavily utilizes physical directional utility classes rather than logical properties.

### Components Identified as High-Risk for RTL:
1. **Margins & Padding:** Widespread use of `ml-`, `mr-`, `pl-`, `pr-`. These will not flip in RTL mode.
2. **Borders:** Use of `border-l-`, `border-r-`, `rounded-l-`, `rounded-r-`.
3. **Positioning:** Use of `left-`, `right-` for absolute positioning (e.g., in relative wrappers, modals, or decorative elements).
4. **Icons:** Directional icons (e.g., `ChevronRight`, `ArrowRight`) need to conditionally flip.
5. **Animations:** Framer Motion animations currently translate along the X-axis using fixed positive/negative values (e.g., `x: 20`). These will animate in the wrong direction in RTL.
6. **Flexbox:** `flex-row-reverse` or implicit LTR ordering might conflict if not managed by `dir="rtl"` at the root.

### Required Architectural Shift:
Tailwind CSS supports logical properties natively. 

**Migration Path:**
* Replace `ml-*` with `ms-*` (margin-inline-start)
* Replace `mr-*` with `me-*` (margin-inline-end)
* Replace `pl-*` with `ps-*`
* Replace `pr-*` with `pe-*`
* Replace `border-l-*` with `border-s-*`
* Replace `border-r-*` with `border-e-*`

**Conclusion:**
RTL support is currently **POOR**. A dedicated logical property migration refactor is required before Arabic localization can be attempted. This is a technical debt item that should be addressed as a P1-G improvement.
