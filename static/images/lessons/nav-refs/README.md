# Nav-ref chip images (Bird's Eye ALV modes)

Official crops used by `LessonNavRefs` for **screenshot** shortcodes.

| File | Shortcode | Notes |
|------|-----------|--------|
| `birds-eye.png` | `[[nav:birds-eye]]` | Glyph only; label is HTML text |
| `cash-flow-sum.png` | `[[nav:cash-flow]]` | Full chip including Σ badge |
| `account.png` | `[[nav:account]]` | Full chip |
| `holding.png` | `[[nav:holding]]` | Full chip |
| `year-axis.svg` | `[[nav:year-axis]]` (`calendar`) | Calendar glyph; label is HTML text |
| `year-axis-menu.png` | tip image on `year-axis` | CF Chart with the calendar menu open |

**Rail, tab, tool and Forecast Detail chip glyphs** (and Bird's Eye's) are no longer copied by
hand: `kotlin/gradlew -p kotlin :chart-render:regenerateWherePaths` paints them from the app's own
composables into `/static/images/lessons/where/icons/<step id>.png`, and `LessonNavRefs` uses those.
`detail-chips/` and `/static/icons/` stay for pages and figures that still name them.

Replace files in place when product chrome changes; keep filenames stable. See
`planning/design-notes/lesson-nav-refs.md`.
