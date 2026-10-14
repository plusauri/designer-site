<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/banks_baseline.md
tutilis-locale: en source
-->
# Meet the Banks household (HNW)

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.meet.banks
  outline-path: Household planning › Meet a household › Meet the Banks household (HNW)
  document-id: banks_baseline
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/banks_baseline.md — teaching body unchanged.
  port-source: dossiers/banks_baseline.md
-->

<!--- α <lesson_body> -->
This lesson introduces a **high-net-worth** dual-earner sample for exploring concentration risk, fat
right tails, and Banks-family follow-ons (forced [[term:rmd]], Reveal). The same cast, Philip and
Vivian, appears in each of those lessons. Their story is **not** the Springfield dual-earner story, because the
wealth scale and the portfolio shape are different.

| Tag | Role |
|-----|------|
| **hnw** | Home + multi-bucket portfolio in the multi‑million range |
| **family-banks** | Sibling of [Forced traditional RMD](/learn/banks_forced_rmd) |
| **baseline** | Full household plan (work → retirement → LTC) |

The live plan on the right is **Banks Baseline** (`banks_baseline`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Who is in the Banks household, and how does it differ from Springfield?** See
   [Who is here](#who-is-here).
2. **When a wealthy household holds a concentrated, high-volatility equity position alongside
   diversified buckets, how do outcomes spread?** See
   [The concentration story](#the-concentration-story).
3. **Why can the mean ending net worth sit far above the median?** See
   [The concentration story](#the-concentration-story).
4. **Where do I look first so that Max does not own the story?** See
   [Where to look](#where-to-look).
5. **How do I read a right tail that crushes the rest of the outcome cloud?** See
   [Try this](#try-this).

</div>
</aside>

---

## Who is here

The household has two earners, Philip and Vivian.

| Person | Role (illustrative) |
|--------|---------------------|
| **Philip** | Primary earner; SS; healthcare / LTC generators |
| **Vivian** | Secondary earner |

**Home:** **Bel-Air Residence** (paid-off real asset — no mortgage running through the plan the way Springfield has one).

**Work → retirement:** dual [[term:earned-income]], lifestyle phases, Social Security, healthcare
handoff, late-life care. Same *kinds* of generators as Springfield, **higher absolute** levels.

---

## The concentration story

Taxable [[term:brokerage]] includes **Bel-Air Tech** — a large single holding with **elevated [[term:volatility]]**
(authoring uses a high-vol equity growth assumption) on top of diversified equity and bond holdings,
traditional, **both** [[term:roth|Roth 401(k)]]<!-- term-skip: traditional, 401k — one pill per account phrase --> and Roth [[term:ira]], and cash.

| Look for | Where |
|----------|--------|
| **Bel-Air Tech** | [[nav:birds-eye]] → Assets / holdings; [[nav:bs-table]] selected year |
| Multi-bucket mix | Taxable equities + bonds, traditional 401(k), Roth 401(k), Roth IRA, cash |
| High absolute wealth | NW Distribution / Key Forecasts (order of magnitude) |
| Tax-bucket map | [Sheltering money](/learn/sheltering_money) — same plan, rules focus |

**Teaching claim:** concentration + vol **widens** the [[term:monte-carlo|Monte Carlo]] cloud. **Mean terminal NW** often
sits **well above the [[term:median]]** (fat right tail). **Key Forecasts → Max** can sit far from **GMF** —
that is when [Reveal](/learn/nw_distribution_compression) becomes a reading tool, not decoration.

The shape below is illustrative rather than a target. On a few-hundred-path run, the Banks median
terminal net worth lands in the high single-digit to low double-digit $MM range while the p90 and
the mean run much higher, which is the same pattern the Reveal lesson shows.

---

## Where to look

The plan’s inputs sit in the definitional views, and the results across paths sit in the
Forecaster and the Simulation Summary.

### Definitional

1. [[nav:birds-eye]] → People — Philip and Vivian; retire / longevity assumptions.
2. **Assets** — **Bel-Air Residence**, multi-bucket accounts, **Bel-Air Tech**.
3. **Cash Flow** mode — living phases, [[term:ss]], healthcare, [[term:ltc]].

### Projected

Select [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]. Open **Simulation Summary**.

| Preview | View | Role here |
|---------|------|-----------|
| [[img:banks-bs-chart|preview]] | [[nav:bs-chart]] | Wealth scale over the horizon; house + accounts. |
| [[img:banks-bs-table|preview]] | [[nav:bs-table]] | Find **Bel-Air Tech** and bucket totals. |
| [[img:banks-cf-chart|preview]] | [[nav:cf-chart]] | Dual earn → retirement handoff; LTC late. |
| [[img:banks-nw-distribution|preview]] | **NW Distribution** | Right tail; try **Reveal**. |
| [[img:banks-key-forecasts|preview]] | **Key Forecasts** | Min / GMF / Max — Max far out is the concentration cue. |
| [[img:banks-si-table|preview]] | [[nav:si-table]] | Drawdown years: residual sells (pro-rata default). |

Prefer **[[term:fid-gmf|FID 0 / GMF]]**. Chart controls:
[Close up / zoom / Reveal](/learn/getting_around#chart-chrome).

---

## Try this

Work these steps on the plan on the right.

1. Orient on **Bel-Air Residence** and **Bel-Air Tech** ([[nav:birds-eye]] / [[nav:bs-table]]).
2. **Simulation Summary** — note success under **Silver** (often comfortable on this sample) and the
   **spread** between GMF-ish outcomes and **Max**.
3. **Reveal** the distribution if the bulk is crushed left — see
   [When the outcome cloud needs Reveal](/learn/nw_distribution_compression).
4. Optional: **Key Forecasts → Max**, then open [[nav:bs-chart]] / [[nav:cf-chart]] on that [[term:fid]] for a year deep
   in the plan — a “lucky path” story, not the plan you underwrite.
5. Optional contrast: open [Springfield Baseline](/learn/springfield_baseline) — same *mechanisms*,
   lower absolute scale and no Bel-Air-style concentrated position.

[[jump:key-forecasts]]

Prefer “concentration **widens tails**” over locking any percentage or dollar figure.

---

## Banks family next

| Topic | Lesson |
|-------|--------|
| Taxable / traditional / Roth rules | [Sheltering money](/learn/sheltering_money) |
| Forced RMD vs residual tax order | [Forced traditional RMD](/learn/banks_forced_rmd) |
| Reading fat right tails | [When the outcome cloud needs Reveal](/learn/nw_distribution_compression) |
| Mass-affluent dual-earner tour | [Meet the Springfield household](/learn/springfield_baseline) |
| Residual strategies | [Tax-account order](/learn/springfield_tax_order) · [Glide](/learn/springfield_glide) |

---

*Illustrative quantities. Teaching claim: HNW + concentrated high-vol equity widens terminal NW
spread; Max is a tail story — use Reveal and GMF for the bulk.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
