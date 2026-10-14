<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/springfield_claim_longevity.md
tutilis-locale: en source
-->
# Claim early vs live long

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.social_security.claim_longevity
  outline-path: Taxes, benefits, and retirement systems › Social Security › Claim timing and longevity
  document-id: springfield_claim_longevity
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: MultiDossier
  intent: Ported from public dossiers/springfield_claim_longevity.md — teaching body unchanged.
  port-source: dossiers/springfield_claim_longevity.md
-->

<!--- α <lesson_body> -->
**Social Security claim timing** is not a free lunch. Claiming **one year before**
[[term:fra|full retirement age (FRA)]] raises the check a little sooner but **permanently reduces**
the monthly benefit. When you **delay** Social Security, you are making a bet — and **how long you
live** often decides how good that choice was (along with everything else that funds the years
after work).

This lesson contrasts two lean sample [[term:dossier|dossiers]]: a **longer-lived** Homer household
and a **shorter-lived** counterpart, so you can see how claim selection plays out under different
longevity. Both use solo Homer with a taxable portfolio, cash, living spend, and Social Security —
not the full dual-earner Springfield Baseline. The setups stay small on purpose so **claim year ×
death age** is easy to follow.

| Counterpart | [[term:live-plan]] on this page | Longevity |
|-------------|-------------------------------|-----------|
| **Long life** (default on the right) | [Long life (death 95)](#canvas-dossier:springfield_claim_long) | Death age **95** (~2060) |
| **Short life** | [Short life (death 74)](#canvas-dossier:springfield_claim_short) | Death age **74** (~2039) |

**Only death age differs.** Same birth year (**1965**), same retirement **67** ([[term:fra]] calendar
**2032**), same [[term:pia]], same portfolio, same living spend. Both start at **claim at**
[[term:fra]].

Use the [[term:live-plan]] chips above (or the links in the table) to switch the [[term:canvas]]
**without leaving this page**.

The [[term:live-plan]] on the right starts as **Springfield Claim (Long Life)**.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What is the same in the two sample plans, and what is the one thing that differs?** See
   [What is fixed](#what-is-fixed-in-both-counterparts).
2. **How can I try an earlier claim without changing the plan itself?** See
   [The lever](#the-lever-claim-timing-in-transforms).
3. **On a long life, does claiming a year early leave more or less money at the end?** See
   [Try this: long life first](#try-this-long-life-first).
4. **On a short life, does the same early claim help or hurt?** See
   [The short-life counterpart](#then-the-short-life-counterpart).
5. **Why is "always delay Social Security" too simple a rule?** See
   [Why this matters](#why-this-matters).

</div>
</aside>

---

## The question

If I claim Social Security **one year early** (here: **2031**, age **66**) instead of at [[term:fra]]
(**2032**, age **67**):

- On a **long** life, does **terminal wealth** usually get **worse** (you collect reduced benefits for
  many years)?
- On a **short** life, does **terminal wealth** often get **better** (you collect sooner while the
  short horizon still captures those early checks)?

Direction of change matters more than any single dollar figure.

---

## What is fixed in both counterparts

| Piece | Order of magnitude |
|-------|--------------------|
| Person | Homer, born **1965**, retires **67**, single filer |
| SS | **[[term:pia]] at [[term:fra]]** ≈ **$2,500/month**; claim timing starts at [[term:fra]] |
| Portfolio | Taxable **brokerage** (a short-term Treasury sleeve, at the product's own category assumptions) + **money-market cash** |
| Spend | **Living expenses** growing modestly through primary death |
| Taxes | US taxes on |

There are no dual earners, no mortgage and no late-life care here, because those are separate
lessons. The primary concern is **claim year × longevity**.

---

## Where to look

### Definitional

1. [[nav:birds-eye]] → **People** — confirm retirement **67** and **death age** (**95** on the long-life
   plan).
2. **Life-events timeline** — the retirement span runs long on this plan; the Social Security claim
   marker sits near [[term:fra]] when modeled.
3. [[nav:path:birds-eye|cash-flow]] — find **Homer Social Security** and **Living Expenses**.
   [[term:hover|Hover]] the Social Security row to see what the benefit was built from: whose it is,
   the monthly estimate at [[term:fra]], when it is claimed and how it grows. Below those inputs sit
   the benefit's first and last year and a small path chart. Hovering needs a desktop pointer, so it
   does not work on a tablet:

[[jump:horizon|output__birds-eye__birds-eye.people-events]]

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

[[img:springfield-claim-homer-ss-hover]]

*Cash Flow mode with **Homer Social Security** selected. The card shows the estimate at full retirement age, the claim timing and the COLA. Its **Flow value** row runs from the first check, about $34k a year, to the last year of the plan, and the path chart rises with the COLA the whole way.*

### Projected — [[nav:forecaster]] (already populated)

Select Forecast Detail chips in toolbar order — [[nav:bs-chart]], [[nav:bs-table]],
[[nav:cf-chart]], [[nav:cf-table]] — for path detail. Simulation Summary is already run under
**Silver**.

| Preview | View | Role here |
|---------|------|-----------|
| [[img:sfclaim-bs-chart|preview]] | [[nav:bs-chart]] | Whether drawdown is gentle or steep under a long horizon. |
| [[img:sfclaim-bs-table|preview]] | [[nav:bs-table]] | Selected year: brokerage, cash, and related balances. |
| [[img:sfclaim-cf-chart|preview]] | [[nav:cf-chart]] | When **Social Security** inflows start; living spend outflows across the long retirement. |
| [[img:sfclaim-cf-table|preview]] | [[nav:cf-table]] | Selected year: SS line vs living spend — copyable. |
| [[img:springfield-claim-long-nw-distribution-98|preview]] | **NW Distribution** | Terminal cloud + success at Silver. |
| [[img:springfield-claim-long-key-forecasts-gmf|preview]] | **Key Forecasts** | Min / [[term:gmf]] / Max — the north-star path and extremes. |

Prefer [[term:fid-gmf]] unless you mean to tour other paths.

If charts feel tight, use **Close up** / **vertical zoom** / **Reveal**
([chart controls](/learn/getting_around#chart-chrome)).

---

## The lever: claim timing in [[nav:transforms]] {#the-lever-claim-timing-in-transforms}

It is in the [[nav:transforms]] area that we make **modifications** to some aspects of the
[[term:dossier]] so you can see the effect of that **modification** side by side with the
**original**. That is a perfect setup for how changing the claim year affects the
[[term:forecast]] and the [[term:simulation|Monte Carlo simulation]].

Below, in the two **Try this** walks, you will open [[nav:transforms]], pick the **Homer Social
Security** row under Modifiables, and change **claim timing** from [[term:fra]] to a **custom**
claim year or age **one year early** (calendar **2031** or age **66** — product labels may say
“claim year” or “custom [[term:claim-age]]”). Charts update for the path so you can compare **original** vs
**modified** side by side; **Re-simulate** when you want the multi-path cloud and success rate
under **Silver** as well. Read [[term:terminal-wealth]] and success for **direction** and order of
magnitude.

You can also edit claim on the [[term:ss]] generator in the [[term:dossier]] when the Learning Center allows full
editing; Transforms is the safer what-if for this lesson.

---

## Try this — long life first

1. Stay on **[Long life (death 95)](#canvas-dossier:springfield_claim_long)**. Confirm **death age
   95** by [[term:hover|hovering]] over **Homer** in the **People & events** detail’s **People**
   table (and confirm claim starts at [[term:fra]]).
2. [[nav:forecaster]] → [[nav:cf-chart]] — scrub **Year** through **2031–2035**. Note when SS
   inflows begin under FRA (~**2032**):

[[img:springfield-claim-long-cf-chart-2032]]

*[[nav:cf-chart]] at year **2032** ([[term:fid-gmf]]). Green inflows start when benefits begin;
outflows continue through the long retirement.*

3. Note success at Silver and [[term:terminal-wealth]] on the [[term:gmf]] row (order of magnitude only):

[[img:springfield-claim-long-nw-distribution-98]]

*Simulation Summary — **Net Worth Distribution** under the **Silver** threshold (example ~**100%**
success — a conservative sleeve on a comfortable plan leaves almost no failing paths, so on this
sample the claim decision shows up in terminal wealth, not in the success figure).*

[[img:springfield-claim-long-key-forecasts-gmf]]

***Key Forecasts** at the horizon year. The highlighted [[term:gmf]] row is [[term:terminal-wealth]]
on the north-star path (example ~**$1.8M** here — the card rounds it to $2MM). Min / percentiles / Max frame the cloud.*

4. [[nav:transforms]] — set claim **one year early** (**2031** / age **66**):

[[img:springfield-claim-long-transforms-claim-2031]]

***Modification — Homer Social Security.** Claim year set to **2031** (one year before FRA on this
sample). Monthly benefit and [[term:cola]] stay as authored; only claim timing moves for this experiment.*

5. **Re-simulate** and compare Original vs Modified on Simulation Summary. On this **long-life**
   plan, expect [[term:terminal-wealth]] **down** vs FRA (reduced benefit for many years usually
   dominates the “one extra early year of checks”); success stays pinned near 100% either way, because
   the sleeve is too calm to fail:

[[img:springfield-claim-long-transforms-nw-side-by-side]]

*Side-by-side **Original** | **Modified** Net Worth Distribution after the early claim — success
~100% on both sides, so the clouds barely move. The decision is not in this card on this plan.*

[[img:springfield-claim-long-transforms-kf-side-by-side]]

*The same pair on **Key Forecasts**. The card rounds to whole millions, so both halves print **$2MM** —
click the [[term:gmf]] row (or hover it) for the exact figure. Example: [[term:terminal-wealth]]
on the [[term:gmf]] row, **~$1.83M → ~$1.78M**, a step down of several tens of thousands. Direction
matters more than the exact digits.*

6. Optional: open [[nav:cf-chart]] on both sides and confirm SS starts a year sooner on Modified at
   a lower permanent level:

[[img:springfield-claim-long-transforms-cf-side-by-side]]

***Original** | **Modified** cash-flow charts. Early claim shifts the green inflow start left and
changes the long-run benefit level — the permanent cut is what weighs on a long life.*

---

## Then the short-life counterpart

Stay on this lesson. Switch the [[term:canvas]] to
**[Short life (death 74)](#canvas-dossier:springfield_claim_short)** (or the [[term:live-plan]] chip).
The same claim experiment on the short-lived twin shows that an early claim tends to **help** when
the horizon is short:

1. Baseline claim at [[term:fra]]; note the **short** retirement span (death **74** / plan end near
   **2039**). Cash flows only cover a handful of benefit years:

[[img:springfield-claim-short-cf-chart]]

*[[nav:cf-chart]] on the short-life [[term:dossier]] ([[term:fid-gmf]]). Benefits run for far fewer
years than on the long-life counterpart — so early checks matter more relative to the permanent cut.*

2. Open [[nav:transforms]], set claim **one year early** (**2031**), and compare **Original** |
   **Modified** cash flows (SS starts sooner on the modified side):

[[img:springfield-claim-short-transforms-cf-side-by-side]]

***Original** | **Modified** cash flows on the short-life plan. Green inflows begin a year earlier
on Modified.*

3. **Re-simulate** and read [[term:terminal-wealth]] on **Key Forecasts**. Expect the **opposite**
   direction from the long-life walk: early claim often **raises** ending wealth when life is short:

[[img:springfield-claim-short-key-forecasts-side-by-side]]

*Both halves round to **$1MM** on the card; click the [[term:gmf]] row for the exact figure. Example:
[[term:terminal-wealth]] on the [[term:gmf]] row, **~$1.36M → ~$1.38M** after claiming one year early. You
capture more years of checks relative to the reduced monthly amount.*

Switch back to **[Long life (death 95)](#canvas-dossier:springfield_claim_long)** anytime to
re-check the long-horizon direction.

That contrast is the whole lesson: **claim timing and longevity are a pair**, not two separate
knobs you can optimize in isolation.

---

## Why this matters

| If you only… | You can miss… |
|--------------|---------------|
| Optimize claim year for max monthly check | That a short horizon may prefer earlier cash |
| Assume “always delay SS” | Portfolio + spend + taxes + longevity jointly decide |
| Read one success % | Claim changes cash flow shape; success definition still matters ([What does success mean?](/learn/springfield_success)) |

Other levers (living spend, retirement age, housing) still move the plan; this sample isolates
**SS claim × death age**.

Lifespan is half of the bet. The other half is what the early checks earn while they let the
portfolio stay invested, and [Claim early and invest, or wait?](/learn/claim_early_invest_or_wait)
runs claiming at 62 against waiting to 70 on a Treasury portfolio and a stock portfolio.

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| Short-life counterpart (same page) | [Short life (death 74)](#canvas-dossier:springfield_claim_short) |
| Claim at 62 and invest, or wait to 70 | [Claim early and invest, or wait?](/learn/claim_early_invest_or_wait) |
| Full dual-earner household | [Meet the Springfield household](/learn/springfield_baseline) |
| What “success” means | [What does success mean?](/learn/springfield_success) |
| Living spend lever | [Bend the plan with living spend](/learn/springfield_living_spend) |
| Tax-account order vs pro-rata | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| App map | [Getting around the app](/learn/getting_around) |

---

*Illustrative quantities. Teaching claim: early claim vs FRA — long life tends to hurt terminal NW;
short life often helps. Directions over dollars.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: MultiDossier — Multi-plan switch — primary + alternate dossier ids. -->
