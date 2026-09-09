# Phase 4: RTL Component Audit

This audit dictates how conceptual product visualizations and interactive elements should behave when the direction shifts to RTL (`dir="rtl"`).

### 1. Conceptual Dashboards
* **Sidebar Navigation:** Must mirror to the right side of the screen.
* **Progress Bars (e.g., Fee Collection Target):** The filled portion must originate from the right and grow leftward.
* **Timetable Matrix:** Days of the week (columns) should sequence from right to left. Time blocks should align to the start edge (right).

### 2. Time-Series Charts (Analytics)
* **X-Axis (Time):** Unlike UI elements, chronological time often continues to flow Left-to-Right in modern Arabic dashboards to preserve universal chart readability. However, Y-Axis labels must move to the right side.
* **Legends:** Align right.

### 3. Typography & Icons
* **Chevrons & Arrows:** Any icon indicating "Next", "Forward", or "Continue" (e.g., `ArrowRight`) MUST flip to point left.
* **Alignment:** `text-start` ensures text correctly aligns right in Arabic and left in English.

### 4. Animations (Framer Motion)
* Fixed X-axis translations (e.g., `x: 20` for slide-in) will break the visual flow in RTL. 
* **Recommendation:** Bind Framer Motion X-values to a directionality context hook, or replace explicit X-translations with CSS logical transforms or opacity fades where strict directionality is not critical.
