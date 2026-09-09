# Phase 3 Remediation Plan

This prioritized plan addresses the findings of the Phase 3 Audits. No feature additions are included.

## P0: Must fix before demo/customer presentation

| Issue | Why it matters | Component/Page | Recommended Solution | Effort | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Fabricated UI Metrics** | Violates core "Content Truth" directive. Extrapolated numbers (120 slots, 480 attendance) look like false claims. | All `/features/*` pages | Abstract the UI components. Remove hardcoded numerical data and replace with generic placeholders or relative charts. | Low | P0 |
| **Missing SEO Base** | Site cannot be properly indexed by Google without a sitemap and robots. | Global | Create `app/sitemap.ts` and `app/robots.ts`. Add `metadataBase` to `layout.tsx`. | Low | P0 |

## P1: Strongly Recommended

| Issue | Why it matters | Component/Page | Recommended Solution | Effort | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Book Demo Form Quality** | Primary conversion goal needs to feel like an enterprise B2B qualification process, not a simple contact form. | `/book-demo` | Upgrade form to include specific school qualification fields (role, student count) and proper validation states. | Medium | P1 |
| **RTL (Arabic) Preparation** | Middle East market requires Arabic support. Modifying layouts later is expensive. | Global `layout.tsx` | Ensure all flex/grid layouts use logical properties (e.g., `ms-`, `me-` instead of `ml-`, `mr-`) and `dir="auto"`. | Medium | P1 |

## P2: Improvement

| Issue | Why it matters | Component/Page | Recommended Solution | Effort | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **AEO Readiness (FAQ Schema)** | Answer Engines (SearchGPT/Perplexity) need structured answers. | `/solutions/*` | Add JSON-LD FAQ schema to solution pages answering core capability questions. | Low | P2 |
| **Internal Breadcrumbs** | Improves site depth indexing and user navigation tracking. | All deep routes | Add a Breadcrumb component to the layout of `/features/*` and `/solutions/*`. | Low | P2 |

## P3: Future Enhancement

| Issue | Why it matters | Component/Page | Recommended Solution | Effort | Priority |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Case Studies Directory** | Need authentic proof. | `/case-studies` | Await verified customer assets from the business team to replace the placeholder page. | High | P3 |
