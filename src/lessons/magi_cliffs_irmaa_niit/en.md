<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/magi_cliffs_irmaa_niit.md
tutilis-locale: en source
-->
# MAGI cliffs — IRMAA, NIIT, and friends

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.magi_cliffs.hub
  outline-path: Taxes, benefits, and retirement systems › MAGI and cliffs › MAGI cliffs (IRMAA / NIIT)
  document-id: magi_cliffs_irmaa_niit
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Ported from public dossiers/magi_cliffs_irmaa_niit.md — teaching body unchanged.
  port-source: dossiers/magi_cliffs_irmaa_niit.md
-->

<!--- α <lesson_body> -->
**Adjusted gross income ([[term:agi]])** is not just a report line. **Modified AGI ([[term:magi]])** drives later
costs that are **not** “just the tax brackets.” This lesson names those mechanisms, shows where
each appears, and walks a live sample where income is high enough for the cliffs to matter.

| Mechanism | What it is | Where you see it |
|-----------|------------|------------------|
| **AGI / MAGI** | Sparse worksheet AGI; MAGI ≈ AGI + tax-exempt interest | Federal tax statement |
| **IRMAA** | Medicare Part B/D **premium steps** from MAGI **two years prior** | Cash flow — **healthcare surcharge** (not a tax line) |
| **Additional Medicare (0.9%)** | Extra tax on high **earned** income | Federal tax statement, next to base Medicare |
| **NIIT (3.8%)** | Surtax on net investment income above a MAGI threshold | Federal tax statement — explicit line |
| **ACA marketplace** | Premium tax credits move with MAGI | Priced for a healthcare phase marked as a marketplace plan; otherwise a **warning** only |
| **AMT** | Sparse Form 6251–shaped floor (AMTI ≈ AGI) | Explicit AMT line when owed (often $0) |

The live plan on the right is **Banks MAGI Cliffs** (`magi_cliffs_sample`): **Philip and Vivian**
(Banks [[term:hnw]] cast) already on Medicare, with high [[term:traditional]] retirement withdrawals and portfolio
income, plus **Ohio** state tax like other Banks roots. Run the forecast several years so year *t*
can read MAGI from *t−2* for [[term:irmaa]].

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What is MAGI, and how does it differ from AGI?** See
   [AGI and MAGI](#agi-and-magi-as-inputs).
2. **How can a large withdrawal at 63 raise Medicare premiums at 65?** See
   [IRMAA](#irmaa-a-premium-cliff).
3. **Why does IRMAA show up as a healthcare cost instead of a tax?** See
   [IRMAA](#irmaa-a-premium-cliff).
4. **When does the 3.8% tax on investment income apply?** See
   [NIIT and Additional Medicare](#niit-and-additional-medicare).
5. **Who pays the extra 0.9% Medicare tax?** See
   [NIIT and Additional Medicare](#niit-and-additional-medicare).
6. **What should a high-income year look like on the tax statement and in cash flow?** See
   [Audit checklist](#audit-checklist).

</div>
</aside>

---

## The question

When retirement income is large, can I open the **federal tax statement** and **cash flow** and see:

1. **AGI** and **MAGI** as audit rows (MAGI equals AGI when there is no tax-exempt interest)?
2. **NIIT** and **Additional Medicare** as **explicit** assessed lines — not folded into ordinary tax?
3. **IRMAA** as a **healthcare** outflow driven by **two-year-lookback** MAGI — not as “more income tax”?
4. An honest note that **[[term:aca]] subsidies** are **not** modeled when marketplace-shaped healthcare is active but not marked as a marketplace plan?

---

## AGI and MAGI as inputs

The federal statement reports AGI as a total, and MAGI builds on it as the named input that later
cliff math reads.

### 1. AGI on the statement

The federal statement shows **Adjusted gross income** with non-zero ingredients (earned, pensions,
traditional retirement, taxable [[term:ss]] inclusion, [[term:ltcg]], portfolio ordinary, …). That figure is the
sparse worksheet AGI for the year.

### 2. MAGI

**Modified AGI (MAGI)** ≈ AGI + tax-exempt interest. When tax-exempt interest is zero (the usual
case in our samples), **MAGI equals AGI**. The statement still labels MAGI so cliff math has a
named input.

MAGI feeds:

- **NIIT** (same year)
- **IRMAA** (year *t* uses MAGI from year *t−2*)
- **ACA warning** (same year, when pre-Medicare / marketplace healthcare is active)

[[img:magi-cliffs-agi-magi-tax-statement]]

*[[nav:path:forecaster|taxes]] ([[term:gmf]], a settled year on this sample). Under **US federal tax**,
**Adjusted gross income** carries the AGI total and its ingredients; the next audit row is
**Modified AGI (MAGI)** — the same number, because tax-exempt interest is zero here. Dollar amounts
vary by year and [[term:fid]]; match the **row labels and the AGI = MAGI story**, not the exact figures. The
state statement below is context only for this lesson.*

[[jump:magi|output__forecaster__forecaster.forecast-detail__taxes__taxes.federal-statement__line.tax.magi]]

---

## IRMAA, a premium cliff

IRMAA is the clearest cliff on this sample, and it arrives as a Medicare premium rather than as a
tax.

### Mechanism

Medicare **Part B** and **Part D** premiums step up at income brackets. The [[term:bracket]] is based on
**MAGI from two years prior**. Being one dollar over a line costs the full step for the year — for
**each** Medicare enrollee (age 65+).

A conversion or large withdrawal at **63** can raise premiums at **65**. That is the lookback.

### Where it appears in this product

| Surface | Treatment |
|---------|-----------|
| Federal **tax** total | **Does not** include IRMAA |
| Cash flow | **IRMAA (Medicare surcharge)** — same-year healthcare outflow |
| **Cliff radar** | **In play / Nearby** with lookback year + MAGI (see [Cliff radar](/learn/cliff_radar_forecaster)) |
| Annual detail | Lookback MAGI + surcharge amount for audit |

**Why not a tax line?** IRMAA is a **[[term:premium]]**, not Form 1040 income tax. Keeping it out of
`totalTaxes` matches how money leaves the plan: as healthcare cost, next to other medical spend.

### What to look for on the sample

1. Run the forecast at least **three** years so year 3 has a lookback MAGI from year 1.
2. Confirm persons are **Medicare age** (65+).
3. On cash flow for a later year, find **IRMAA (Medicare [[term:surcharge]])** when lookback MAGI is above
   the first bracket.
4. On the federal statement for a high-income year, confirm **MAGI** is large — that is what will
   bite premiums **two years later**.

Dollar amounts on your run may differ (seed, year, FID). The point is to see the **same medical
story in both places**:

| On the [[nav:cf-chart]] (hover a year) | On the [[nav:cf-table]] (same year) |
|------------------------------------|----------------------------------|
| **Philip Medicare (Medicare)** and **Vivian Medicare (Medicare)** as health outflows — one per enrollee | Matching **Medicare** lines |
| **IRMAA (Medicare surcharge)** as its own healthcare line — **not** under Income tax | Matching **IRMAA** line under outflows, separate from **Income tax** |

[[img:magi-cliffs-cf-medical-irmaa]]

[[img:magi-cliffs-cf-table-medical-irmaa]]

*Forecaster → [[nav:cf-chart]] + [[nav:cf-table]] (GMF example year). [[term:hover|Hover]] the chart year to list outflows;
confirm the two **Medicare** lines and **IRMAA (Medicare surcharge)** appear on both the chart and the
table, while **Income tax** stays a separate red tax line. Figures are illustrative — match the
**labels and placement**, not the exact dollars.*

[[jump:surcharge|output__forecaster__forecaster.forecast-detail__cf-table__line.cf.irmaa-surcharge]]

---

## NIIT and Additional Medicare

Several other income-driven rules sit beside IRMAA. Two of them, NIIT and the Additional Medicare
tax, are explicit lines on the federal statement, and the others get a short note each.

### Additional Medicare tax (0.9%)

- Applies to **[[term:earned-income]]** above a filing-status threshold (e.g. $200k single / $250k joint).
- Thresholds are **not inflation-indexed** — held [[term:nominal]] in the engine (same honesty choice as
  Social Security provisional-income thresholds).
- Base Medicare **1.45%** remains its own line; the 0.9% is **additional** and explicit.

[[jump:additional-medicare|output__forecaster__forecaster.forecast-detail__taxes__taxes.federal-statement__line.tax.additional-medicare]]

This sample’s income is mostly **retirement** distributions, so Additional Medicare may be **$0**
while NIIT and IRMAA still matter — that contrast is intentional.

### NIIT (3.8%)

- Tax = 3.8% × **min**(net investment income, MAGI − threshold).
- Thresholds match the Additional Medicare statutory dollars (also **not** indexed).
- Sparse NII: LTCG, dividends, interest, [[term:passive-income]] — not wages, not traditional [[term:ira]]
  distributions, not Social Security.
- Explicit **Net investment income tax (3.8%)** line on the federal statement.

[[jump:niit|output__forecaster__forecaster.forecast-detail__taxes__taxes.federal-statement__line.tax.niit]]

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

The \$200,000 single and \$250,000 joint thresholds for the 3.8% net investment income tax have
not changed since the tax began in 2013. Congress wrote them as fixed dollar amounts with no
[[term:inflation]] adjustment. As prices and incomes rise, more households cross them every year without
being any richer in real terms.

</div>
</aside>

### Early-withdrawal penalty (honesty)

The base **10%** early-withdrawal additional tax on pre-59½ traditional distributions is modeled.
Statutory **exemptions** (rule of 55, 72(t), …) are **not** modeled — the statement label says so.
This sample is Medicare-age, so the early-penalty line should stay dark.

### AMT (footnote)

Sparse AMT ([[term:amti]] ≈ AGI, no preference add-backs) may appear when tentative minimum exceeds regular
income tax. On many realistic samples it is **$0**. It is **not** the star of this lesson.

### ACA

When a healthcare phase is marked as a marketplace plan, the engine prices the premium tax credit
from the household's income, the poverty line and the benchmark premium, and the year's Cash Flow
shows it as its own income line. The [five-year runway](/learn/camp_five_year_retirement_runway)
lesson walks through one. When a marketplace-looking phase is not marked, the engine records an
honesty note instead: MAGI can change premium tax credits, and this phase gets none. This sample is
on Medicare, so neither applies to it.

---

## Audit checklist

Use this checklist to audit a high-income year on the sample.

| Check | Pass looks like |
|-------|-----------------|
| AGI block | Parent total + non-zero ingredients |
| MAGI row | Present under AGI; equals AGI if no tax-exempt interest |
| NIIT | Own line under Total tax when basis > 0 |
| Additional Medicare | Own line only when earned income exceeds threshold |
| IRMAA | Cash-flow healthcare surcharge in years with lookback + enrollees + high prior MAGI |
| Early penalty | Label admits exemptions not modeled; $0 when not early |
| ACA | No credit on this Medicare sample; priced only for a marked marketplace plan, a note for an unmarked one |

---

## What we do not claim

This lesson deliberately makes no claim about the following:

- Full Form 8960 / 8959 / 6251 fidelity
- IRMAA life-changing-event appeals
- ACA [[term:premium-tax-credit]] dollars for a healthcare phase not marked as a marketplace plan, or Medicaid
- Early-withdrawal exemption matrix

Those omissions are product honesty, not missing polish.

---

## Try next

- [Cliff radar in the Forecaster](/learn/cliff_radar_forecaster) — year-reactive strip: in play /
  nearby / not modeled without a CF scavenger hunt
- [Social Security treatment](/learn/social_security_treatment) — another AGI-adjacent federal rule
  (plus statement-paste vs early-retirement honesty)
- [Healthcare expense phases (employer → Medicare)](/learn/healthcare_expense_sample) — employer → Medicare phases and
  pre-65 / Medicare-at-65 coverage warnings (phase shape, not IRMAA dollars)
- [Forced traditional RMD](/learn/banks_forced_rmd) — forced sales + projected [[term:rmd]] series chip
- [Roth conversion in the window](/learn/roth_conversion_window) — conversion policy, Money Movements Why, MAGI,
  and why IRMAA makes “fill the bracket” not free
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
