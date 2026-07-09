---
name: Self-hosting AI/YouTube video as a section background
description: Workaround for downloading YouTube clips via yt-dlp, and the reduced-motion pattern used for autoplay background video sections.
---

**YouTube download client workaround:** YouTube's SABR streaming restrictions block many `yt-dlp` client modes from returning downloadable progressive/dash formats. Tried tv, ios, web, mweb, android_embedded, etc. — most failed. The `android_vr` client mode succeeded when others didn't. If a future task needs to download a YouTube clip via yt-dlp and standard client modes fail, try `--extractor-args "youtube:player_client=android_vr"`.

Trim/compress with ffmpeg afterward (scale down, h264, strip audio if unused) — a 15s 1280x720 clip compressed to ~1.4MB is a reasonable target for a hero/section background video.

**Reduced-motion pattern for background video:** For any full-bleed autoplay `<video>` background (hero, section backgrounds), pair it with a `prefers-reduced-motion` check via `matchMedia('(prefers-reduced-motion: reduce)')` in a `useEffect`, and swap to a static poster `<img>` when the user prefers reduced motion. This pattern was applied consistently to both the Hero and Fleet sections in the drybulk-pioneer artifact — reuse the same `allowMotion` state shape when adding more video backgrounds so the codebase stays consistent.
