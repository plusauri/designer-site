<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/cliff_radar_forecaster.md
tutilis-locale: en source
-->
# Cliff radar in the Forecaster

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.magi_cliffs.radar
  outline-path: Taxes, benefits, and retirement systems › MAGI and cliffs › Cliff radar
  document-id: cliff_radar_forecaster
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Product read-out of cliffs + tax teaching.
  port-source: dossiers/cliff_radar_forecaster.md
-->

<!--- α <lesson_body> -->
[[term:magi]] cliffs are easy to **understand in principle** and easy to **lose on a busy year**: [[term:irmaa]] lives
on cash flow as a healthcare [[term:surcharge]], [[term:niit]] and Additional Medicare sit on the federal tax
statement, [[term:aca]] subsidy response is only a warning, and a [[term:roth-conversion]] can move MAGI **now** while
IRMAA may bite **two years later**.

The **[[term:cliff]] radar** is the Forecaster strip that keeps those facts **scannable for the year you
selected** — without a scavenger hunt through Taxes, cash-flow segments, and Money Movements

| Idea | Plain meaning | Where in the app |
|------|---------------|------------------|
| [[nav:cliffs]] view | Shows or hides the radar card (default **on**) | [[nav:forecaster]] → Custom (view picker) |
| **Cliff radar** | Year-reactive list of cliffs **in play**, **nearby**, or **not modeled** | Card under the FID / Year controls |
| **In play** | This year already crossed the line (tax or surcharge applies) | Row status on the card |
| **Nearby** | Still under the next line, within a fixed **$25,000** band | Row status — not a score |
| **Not modeled** | We name the cliff but do not price the response | Always includes **ACA subsidy** |
| **Lookback MAGI** | IRMAA uses MAGI from **two years earlier** | IRMAA row detail |
| **Conversion note** | Policy/trades this year (or in the lookback year) move MAGI | Card footer / IRMAA detail |

The live plan on the right is **Banks MAGI Cliffs** (`magi_cliffs_sample`): **Philip and Vivian**
already on Medicare, with income high enough for cliffs to matter. Run the forecast and pick a year
where healthcare and taxes both look busy — the radar should summarize what is near without opening
every table.

For the full mechanism behind each cliff, read [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit).
For a conversion that moves MAGI, read [Roth conversion in the window](/learn/roth_conversion_window).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Where is the cliff radar, and how do I turn it on for the year I selected?** See
   [Find the radar](#find-the-radar).
2. **What do In play, Nearby, and Not modeled mean on the radar?** See
   [The three statuses](#the-three-statuses).
3. **Which year's MAGI sets the IRMAA surcharge, and where does the radar show it?** See
   [IRMAA on this sample](#irmaa-on-this-sample).
4. **Which other cliffs can the radar show, and why is the ACA subsidy always listed as not
   modeled?** See [Siblings on the strip](#siblings-on-the-strip).
5. **What does the radar say when no cliff is in play or nearby?** See
   [Honest empty](#honest-empty).
6. **How does the radar flag a Roth conversion that raises MAGI now and IRMAA two years later?** See
   [Roth conversion and lookback](#roth-conversion-and-lookback).

</div>
</aside>

---

## Find the radar

Reading the radar takes three moves: turn the **Cliffs** view on, select a year, and read the strip.

1. Open the [[nav:forecaster]] (this sample is already loaded on the [[term:canvas]]).
2. Expand **Forecast Detail** if it is collapsed. The control row is **Forecast Id · Year · Charts |
   Tables | Custom**.
3. **Cliff radar** is **on by default**, so the card usually appears without hunting — next to the
   other year-reactive cards you have selected (Taxes, projected [[term:rmd]], cash-flow tables, and so on).
4. To show or hide it: choose **Custom**, click **Custom** again if you need the picker, and toggle
   **Cliffs**. (**Charts** and **Tables** quick modes also leave the radar on.)

You do not need a new nav destination. The radar lives **in place** on the path you already use to
read a year.

[[img:cliff-radar-lanes-niit-nearby]]

*The whole card. **Upper canvas:** MAGI and lookback MAGI as solid bars — your path — against
hatched threshold lines (NIIT floor, IRMAA line) that are published schedule, not your plan. That
solid-vs-hatch split is the card's grammar and the legend states it. **Lower canvas:** cliff cash
actually assessed, hanging below the axis so a cost never reads as income. **Lane chips** toggle
each series.*

*This year shows the **Nearby** status. MAGI is still under the NIIT line of $250,000, but by less
than $25,000, so the card names NIIT before the plan crosses it. Nothing is in play yet. **Not
modeled · ACA subsidy** is still listed, because a gap we know about is not the same as a gap we
hide.*

## The three statuses

Each modeled cliff uses one of three statuses:

| Status | Means |
|--------|--------|
| **In play** | Threshold already crossed for this year — modeled tax or IRMAA surcharge applies |
| **Nearby** | Still **under** the next line, within **$25,000** — explainable proximity, not a score |
| **Not modeled** | Known cliff we name honestly; we do **not** invent cash response |

There are **no** optimum markers, cliff scores, or “best conversion” badges. The strip reports
**where you stand relative to lines the engine already knows**, not which path is best.

## IRMAA on this sample

On **Banks MAGI Cliffs**, persons are Medicare age and lookback MAGI can sit above the first IRMAA
[[term:bracket]]. For a year with **IRMAA (Medicare surcharge)** on cash flow:

1. Select that year on the Forecaster.
2. On **Cliff radar**, find a row **In play · IRMAA**.
3. Detail should include:
   - **Lookback** calendar year (selected year − 2)
   - **Lookback MAGI** (the metric that set the tier)
   - **Surcharge** amount when the engine assessed one
4. Confirm the surcharge matches [[nav:cf-table]] / [[nav:cf-chart]] for the same year — still a **healthcare**
   outflow, not a federal tax-statement line.

Dollar amounts depend on seed, [[term:fid]], and year. Match the **labels and the lookback story**, not
exact figures.

[[img:cliff-radar-irmaa-in-play]]

*IRMAA in play. **Selected year** stacks the whole cause chain for one year in words: the tier, the
**lookback** calendar year, the **lookback MAGI** that actually decided the surcharge, how far this
year sits **below the next line**, and what the surcharge costs. NIIT is stated the same way on its
own row, against its own threshold, and ACA stays listed as not modeled.*

*The “below next line” figure is the part worth internalizing: it is how close this year sits to the
**next** tier, which is a decision input long before you cross it. This is the whole promise of the
card — the lookback story readable in one place, instead of reconstructed from a cash-flow table two
years apart.*

If you want the full IRMAA mechanism (why [[term:premium]] ≠ tax, Medicare enrollees, CF placement), open the
[MAGI cliffs](/learn/magi_cliffs_irmaa_niit) lesson next — same sample, deeper audit of Taxes and
cash flow.

## Siblings on the strip

Besides IRMAA, the radar can show these cliffs when data supports them for the selected year:

| Cliff | Metric | Modeled cash |
|-------|--------|--------------|
| **NIIT (3.8%)** | Same-year MAGI vs NIIT threshold | Federal tax line when basis > 0 |
| **Additional Medicare (0.9%)** | High **earned** income vs threshold | Federal tax line when applicable |
| **ACA subsidy** | Marketplace MAGI interaction | **Always not modeled** — honesty row |

This sample’s income is mostly **retirement** distributions, so Additional Medicare may stay quiet
while NIIT and IRMAA still appear — that contrast is intentional on the Banks cliff path.

**ACA** is always listed as **not modeled** on a US plan. Marketplace premium tax credits can move
with MAGI; we do **not** invent subsidy dollars. If the engine emitted an honesty note for the year,
the row still means the same thing: named gap, not a priced response.

## Honest empty

When **no** modeled cliff is in play or nearby, the card says so calmly — for example, that nothing
modeled is near this year — and **still** lists the ACA **not modeled** row so the gap is never
silently omitted. Quiet is a feature; fake urgency is not.

## Roth conversion and lookback

A conversion raises **same-year MAGI**. IRMAA, when Medicare age has arrived, reads MAGI from
**two years earlier**. The radar surfaces that link without forcing you to rebuild it:

| Situation | What the strip can show |
|-----------|-------------------------|
| Conversion **active this year** | Note that conversion raises same-year MAGI (and feeds IRMAA lookback two years later) |
| Conversion in the **IRMAA lookback year** | On the IRMAA row: conversion in lookback year feeds premiums for the selected year |

**On this Banks sample**, conversions may not be the star — use
[Roth conversion in the window](/learn/roth_conversion_window) (`roth_conversion_sample`) when you
want policy, Money Movements **Why**, and the conversion year trail. That sample may not light IRMAA cash
every year; the radar still must **not invent** a surcharge when the engine has none, and it should
still mark conversion lookback when Medicare ages in.

---

## Audit checklist

Use this checklist to audit the radar for a selected year.

| Check | Pass looks like |
|-------|-----------------|
| View | **Cliffs** on (default / Custom picker); **Cliff radar** card visible |
| Year | Changing the selected year changes the radar rows (year-reactive) |
| IRMAA (this sample) | When CF shows IRMAA surcharge > 0 → radar **In play · IRMAA** with same surcharge and lookback year |
| Nearby band | **Nearby** only when still under the next line within **$25,000** |
| ACA | Always a **Not modeled · ACA subsidy** honesty row on US tax plans |
| Honest empty | Calm copy when nothing in play/nearby; ACA still listed |
| No scores | No rankings, optimum markers, or “best path” badges |
| Conversion (Roth sample) | Conversion years scannable; no invented IRMAA cash; lookback flag when applicable |

---

## What we do not claim

This lesson deliberately makes no claim about the following:

- A multi-cliff **optimizer** or recommended conversion amount
- Full **ACA** [[term:premium-tax-credit]] dollars
- Estate, state, or non-MAGI cliffs on this strip
- That **Nearby** is a personalized risk score (it is a fixed dollar band under the next line)
- That every sample year will show IRMAA cash (depends on lookback MAGI, Medicare age, and path)

Those are honesty boundaries. The radar **names** what is in play; it does not solve the plan for
you.

---

## Try next

| Lesson | Why go there |
|--------|----------------|
| [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) | Mechanism depth: AGI/MAGI on the tax statement, IRMAA on CF, NIIT lines |
| [Roth conversion in the window](/learn/roth_conversion_window) | Policy, Money Movements Why, MAGI this year, and the conversion → cliff story |
| [Social Security treatment](/learn/social_security_treatment) | Another AGI-adjacent federal rule |
| [Getting around the app](/learn/getting_around) | Forecaster chips and area map |

When you change income, conversion aggressiveness, or retirement timing, re-check **Cliff radar**
for the years you care about — one strip, the same status language every time.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
