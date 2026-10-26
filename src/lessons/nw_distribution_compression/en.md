<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/nw_distribution_compression.md
tutilis-locale: en source
-->
# When the outcome cloud needs Reveal

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.reading.reveal_compression
  outline-path: Using Tutilis › Reading the plan › When the outcome cloud needs Reveal
  document-id: nw_distribution_compression
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/nw_distribution_compression.md — teaching body unchanged.
  port-source: dossiers/nw_distribution_compression.md
-->

<!--- α <lesson_body> -->
**Reveal** under **Net Worth Distribution** does **not** change the plan or the [[term:monte-carlo|Monte Carlo]] draws.
It only changes the **horizontal scale** so a few extreme endings do not squash the mass of paths
into an unreadable spike near zero (or near the left of the axis).

This lesson uses the **Banks Baseline** sample — an **[[term:hnw]]** household with large balances and a
**high-volatility** concentrated equity position. That mix is where **Key Forecasts → Max** (and the
far right of the cloud) often sits **far** from the [[term:median]], so linear scale hurts the most.

[[jump:key-forecasts]]

| Tag | Why |
|-----|-----|
| **hnw** | High absolute wealth; Max paths can run to tens of millions |
| **reveal** | Display control for reading the cloud — not a plan lever |

If chart controls are new to you, skim
[Chart controls — Close up, zoom, and Reveal](/learn/getting_around#chart-chrome) first.

The live plan on the right is **Banks Baseline** (`banks_baseline`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Why does a wealthy plan with volatile holdings squash the distribution chart into a spike?**
   See [Why HNW needs Reveal more](#why-hnw-needs-reveal-more).
2. **Why does Reveal matter less on a mass-affluent plan like Springfield?** See
   [Why HNW needs Reveal more](#why-hnw-needs-reveal-more).
3. **How can I tell from Key Forecasts that the cloud is squashed?** See
   [Where to look](#where-to-look).
4. **How do I read the main cloud without losing the outliers from the run?** See
   [Where to look](#where-to-look).
5. **What does Reveal leave unchanged in the plan and the Monte Carlo run?** See
   [What Reveal is not](#what-reveal-is-not).
6. **What do I miss if I only read the linear chart?** See [Why this matters](#why-this-matters).

</div>
</aside>

---

## Why HNW needs Reveal more

Terminal net worth on a long horizon is roughly “wealth × compounded path.” With:

- **Large starting wealth** (home + multi-bucket portfolio in the Banks sample), and  
- **High-vol holdings** (e.g. a concentrated “Bel-Air Tech” style holding with elevated [[term:volatility]]),

a **small fraction** of paths can finish **orders of magnitude** above the median. On a **linear**
horizontal axis the chart must span Min → Max, so the **middle** of the distribution (where most
lessons care about success at Silver) collapses into a few pixels.

**Mass-affluent** samples (e.g. Springfield) still have right tails, but absolute Max is closer to
the bulk of the cloud — Reveal helps less often, or less dramatically.

The Monte Carlo shape below is illustrative, on roughly 500 paths under Silver. Read the direction rather than the numbers:

| Sample | Rough median terminal NW | Far-right tail (e.g. p90 / mean vs median) |
|--------|--------------------------|--------------------------------------------|
| **Banks Baseline** (HNW) | High single-digit → low double-digit $MM | Mean **well above** median; p90 **much** larger than median |
| Springfield Baseline | Mid single-digit $MM | Skewed, but smaller absolute Max |
| Lean starter samples | Low / mid six figures | Relative noise can be large; absolute axis often shorter |

Teaching claim: **Reveal is most useful when Max (and the right tail) dominate the scale** — common
on HNW + high-vol books.

---

## Where to look

1. [[nav:forecaster]] → Simulation Summary → Distribution — linear cloud by default.
2. **Key Forecasts** — note **Min**, **GMF**, **Max** (and quartiles). If **Max** is enormous vs
   **GMF** / median-ish rows, expect a squashed cloud.
3. **Reveal** slider under the distribution (product may nudge “Outliers squashing the dots?”).
4. Optional: **Close up** the distribution so scrubbing dots is easier
   ([chart controls](/learn/getting_around#chart-chrome)).

[[jump:reveal]]

| Preview | View | Role here |
|---------|------|-----------|
| [[img:banks-nw-distribution|preview]] | **NW Distribution** | Linear cloud; Reveal lives under the chart. |
| [[img:banks-key-forecasts|preview]] | **Key Forecasts** | Min / GMF / Max — Max far out is the Reveal cue. |

Prefer **[[term:fid-gmf|FID 0 / GMF]]** for path detail after you pick a key row. Snapshot dollars are **not** targets.

---

## Try this

1. Open this Banks sample. Simulation Summary is already populated (or **Re-simulate** if stale).
2. On **Key Forecasts**, compare **Max** to **GMF** (or Mean) — order of magnitude only. On HNW +
   vol, Max is often **dramatically** larger.
3. Glance at **Distribution** with Reveal **full left** (linear). Note how little of the plot
   width the bulk of the dots use.
4. Slide **Reveal** toward log-style. The **main cloud** should open up; extreme endings still
   exist — they are not deleted from the run.
5. Optional: open **Springfield Baseline** (or another mass-affluent sample) in a second tab. Same
   control, usually **less** dramatic need for Reveal because absolute Max is closer to the pack.
6. Optional: **Close up** the Banks distribution and scrub dots near Min / GMF / just right of the
   red band — [[term:hover]] tips still work under Reveal.

Prefer “Reveal opens the bulk when Max owns the axis” over any fixed slider position.

---

## What Reveal is *not*

| Not | Instead |
|-----|---------|
| Changing success definition | [What does success mean?](/learn/springfield_success) |
| Changing residual sell policy | [Tax-account order](/learn/springfield_tax_order) / [Glide](/learn/springfield_glide) |
| Dropping outlier paths from Monte Carlo | Outliers stay in the sample; only the **view** changes |
| Required for every lesson | Mass-affluent clouds are often readable linear |

---

## Why this matters

| If you only… | You can miss… |
|--------------|---------------|
| Stare at a linear HNW cloud | Where **most** paths actually land |
| Treat Max as “the” outcome | Max is a **tail** story; GMF / quartiles describe the bulk |
| Never Reveal | Success % and medal still compute correctly, but the **picture** lies by squash |

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| App chart controls map | [Getting around — chart controls](/learn/getting_around#chart-chrome) |
| Forced RMD on Banks family | [Forced traditional RMD](/learn/banks_forced_rmd) |
| Success definition | [What does success mean?](/learn/springfield_success) |
| Banks HNW orientation | [Meet the Banks household (HNW)](/learn/banks_baseline) |
| Mass-affluent dual-earner tour | [Meet the Springfield household](/learn/springfield_baseline) |

---

*Illustrative quantities. Teaching claim: HNW + high-vol books often need Reveal because Max and
the right tail dominate a linear NW axis. Display only — not a plan change.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
