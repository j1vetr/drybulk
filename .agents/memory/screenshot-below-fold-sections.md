---
name: Screenshotting below-the-fold sections
description: How to visually verify a section that sits below a full-viewport-height hero when the Screenshot tool can't scroll.
---

The `Screenshot` tool (appPreview) only captures the current viewport at a fixed size — it cannot scroll to a hash anchor or a given Y-offset. If a page has a hero/section using `min-h-[100dvh]` (or similar full-viewport-height styling), increasing the requested viewport height just makes that section taller too; the section below it never becomes visible in the capture, no matter how tall the viewport is set.

Anchor-hash URLs (`/#section-id`) also do not reliably work around this: global `scroll-behavior: smooth` CSS can cause the scroll to still be animating (or not yet triggered) at the moment the screenshot is captured, so the capture shows the wrong scroll position.

**How to apply:** Add a temporary route in the router (e.g. `/__preview-<name>`) that renders just the target component in isolation, screenshot that route directly, then remove the temporary route once verified. This is fast, reliable, and avoids fighting scroll timing. Always delete the temporary route (and confirm no trace of it remains) before finishing the task.
