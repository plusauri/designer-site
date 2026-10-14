# Lesson UI standards (`standardize.*`)

Shared full-size screenshots for Learning Center lesson prose. Prefer these paths over one-off
sample captures so every lesson shows the same chrome.

## Full-size

| Class | Use |
|-------|-----|
| `ui-std-preview` | Table “Place / Chip” previews (capped ~18–22rem in cells) |
| `ui-std-preview-wide` | Block-level chrome outside tables (up to ~40rem) — Assumptions / Transforms dialogs, wide compares |

**Frame (all LC screenshots):** `site.css` styles `.lesson-pane img:not(.nav-icon)` as a
non-interactive capture — matte ring, soft shadow, `pointer-events: none` — so images do not read as
live canvas chrome. No per-image class required for the frame.

| File | Use when mentioning |
|------|---------------------|
| `standardize.bs-chart.png` | **BS Chart** / Assets & Liabilities chart |
| `standardize.bs-table.png` | **BS Table** (value column blurred) |
| `standardize.cf-chart.png` | **CF Chart** / Cash flows chart |
| `standardize.cf-table.png` | **CF Table** (value column blurred) |
| `standardize.nw-distribution.png` | **Net Worth Distribution** (Simulation Summary) |
| `standardize.key-forecasts.png` | **Key Forecasts** (Simulation Summary; values blurred) |
| `standardize.mortgage-principal-hover.png` | Home mortgage (principal) hover / sparkline |
| `standardize.mortgage-interest-hover.png` | Home mortgage (interest) hover / sparkline |
| `standardize.assumptions-success.png` | **Assumptions → Success** (definition of success + cost of capital) |
| `standardize.transforms-success-criteria.png` | **Transforms → Modification — Success Criteria** (modifiables + compare) |
| `standardize.success-silver-vs-gold.png` | **Original vs modified NW Distribution** after Gold (Strict) success criteria |
| `standardize.sales-inv-chart.png` | **Money Movements** chart (stacked sales / invest / borrow over years) |
| `standardize.sales-inv.png` | **Money Movements** table (Sold / After Sale / % / Why) |

## Icons (`icons/standardize.*`)

56×56 thumbnails for denser contexts (nav-weight chips, compact lists). Lesson “Place / Chip”
tables currently use **full-size** previews because icons were too small there.

| File | Use |
|------|-----|
| `icons/standardize.medal-gold.svg` | Gold / Strict (Material **MilitaryTech**, `#D4AF37`) |
| `icons/standardize.medal-silver.svg` | Silver / Liquidity crises (`#C0C0C0`) |
| `icons/standardize.medal-bronze.svg` | Bronze / Temporary negative NW (`#CD7F32`) |

Same glyph and tints as product `Icons.Filled.MilitaryTech` + `scenarioSuccessMedalColor`.

## Naming

Prefix every asset with `standardize.` so greps and deploys stay unambiguous.
