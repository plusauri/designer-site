<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/banks_forced_rmd.md
tutilis-locale: en source
-->
# Forced traditional RMD vs residual tax order

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.withdrawal.rmd
  outline-path: Household planning › Withdrawal and longevity › Forced traditional RMDs
  document-id: banks_forced_rmd
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/banks_forced_rmd.md — teaching body unchanged.
  port-source: dossiers/banks_forced_rmd.md
-->

<!--- α <lesson_body> -->
**Required minimum distributions (RMDs)** are not a residual preference — they are a **statutory
force**. Once the owner is past [[term:rmd]] age and holds a **[[term:traditional]]** ([[term:pre-tax]]) retirement account,
the plan must sell enough from that account each year (or pay a penalty model) **whether or not**
your residual strategy would rather spend taxable cash first.

This lesson uses a **Banks-family lean sample** ([[term:hnw]] cast continuity — **Philip**, not Springfield):

| Piece | Why it is here |
|-------|----------------|
| Philip born **1950** | In **2026** he is about **76** — **past** typical RMD start |
| Large **Traditional IRA** (~equity) | Source of **forced annual RMD** sales |
| Large **Brokerage Cash** (taxable MM) | What **tax-account order** would prefer to drain first for living spend |
| Smaller **Roth IRA** | Tax-free account residual may leave alone longer |
| Residual default | **Tax-account order** (taxable → deferred → tax-free) |
| Spend | Modest **Retirement Living** through death |

**Teaching claim:** even with residual set to **tax-account order**, **Movements** still shows
**RMD · Traditional [[term:ira]]** (or similar) forced sales. Residual policy does **not** waive the RMD.

For background on the account types, read [Sheltering money](/learn/sheltering_money). For background
on residual tax order, read [Tax-account order vs pro-rata](/learn/springfield_tax_order). Success is
judged under **Silver** unless you change it.

The live plan on the right is **Banks Forced Traditional RMD** (`banks_forced_rmd`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What are the two layers that decide why an account was sold, and how does the Why column tell
   them apart?** See [Two layers of why we sold](#two-layers-of-why-we-sold).
2. **Where do I find the forced RMD sales in the forecast, and where do I see the required amount
   across the years?** See [Where to look](#where-to-look).
3. **If my residual strategy spends taxable cash first, does the engine still force RMD sales?** See
   [Try this](#try-this).
4. **Why does it matter that RMDs are forced, and what do the forced dollars cost in tax brackets?**
   See [Why this matters](#why-this-matters).

</div>
</aside>

---

## The question

If my residual strategy says “spend **taxable cash** before the traditional IRA,” will the engine
still **force traditional RMD sales** every year after RMD age — and can I **see the reason code**
separately from residual sells?

---

## Two layers of “why we sold”

Every sale on Movements is decided by one of two layers, and the **Why** column says which.

| Layer | Who decides | Example Why on Movements |
|-------|-------------|---------------------------|
| **Forced / statutory** | RMD rules (and similar) | **RMD · Traditional IRA** |
| **Residual strategy** | Pro-rata / tax-account order / glide | **Tax-account order · taxable**, **Pro-rata residual**, … |

The product can split a year into **both** (e.g. RMD amount from traditional + residual from cash).
Do not read every sell as “the residual strategy alone.”

When RMD rules are active, a **forced-sales / RMD detail** control (often a small balance / scale
icon on Movements) opens statutory context: owner age, RMD start age, required amount, sold for
RMD. Use it when the Why column is dense.

---

## Where to look

### Definitional

1. [[nav:birds-eye]] → People — Philip; birth **1950** → age **76** in a **2026** valuation year.
2. **Assets** — **Traditional IRA**, **[[term:brokerage|Brokerage]] Cash**, **[[term:roth]] IRA**.
3. [[nav:assumptions]] → Movements — residual is already **Tax-account order** (not the experiment
   to flip first; it is the **foil** that would prefer cash).

[[jump:rmd|output__birds-eye__birds-eye.people-events]]

[[jump:withdrawal-order|input]]

[[jump:birds-eye]]

### Projected — [[nav:forecaster]] (already populated)

Turn on **Movements** plus the usual BS/CF chips. Simulation Summary is under **Silver**.

[[img:rmd-si-table]]

*Canonical **Movements** chrome (values blurred). Hunt the **Why** column for **RMD · …** on
traditional vs residual reasons on other accounts — same table shape as every other Movements surface.*

| Preview | View | Role here |
|---------|------|-----------|
| [[img:rmd-cf-chart|preview]] | [[nav:cf-chart]] | Living spend; taxes may rise when RMD ordinary income hits. |
| [[img:rmd-cf-table|preview]] | [[nav:cf-table]] | Selected year: disposition / tax lines. |
| [[img:rmd-si-table|preview]] | [[nav:si-table]] | **RMD · …** reasons on traditional; residual reasons on other accounts. |
| | [[nav:brackets]] | Each year's ordinary income by source. The RMD segment sits against an outline of what the rules **required** that year. |
| | **Taxes** (optional) | RMD often shows as ordinary income character. |
| [[img:rmd-bs-chart|preview]] | [[nav:bs-chart]] | Traditional IRA declining under forced distributions. |
| [[img:rmd-nw-distribution|preview]] | **NW Distribution** | Terminal cloud (direction only). |

Prefer **[[term:fid-gmf|FID 0 / GMF]]**. Scrub **Year** through several post-2026 years — RMD should **repeat**.

### The required path across years

Movements answers “**what sold this year** and why.” The [[nav:brackets]] chip answers a different
question. It shows **what required minimum is coming** year by year. That is the statutory path that
keeps forcing [[term:ordinary-income]] whether spending needs the cash or not.

| View | Question |
|------|----------|
| [[nav:si-chart]] / [[nav:si-table]] | Forced **sales** this year (Why **RMD · …**); ⚖️ model popup for divisor math |
| [[nav:brackets]] | Each year's taxable ordinary income by source, with the **required** RMD outlined |

Turn on **Brackets** in the tax lens. Each year's bar carries an indigo RMD segment, and the outline
above it marks what the rules required. While Philip’s traditional IRA is large, that required
amount rises year after year. It runs well into five figures a year, whether or not he needs the
money.

Chart controls: [Close up / zoom / Reveal](/learn/getting_around#chart-chrome).

---

## Try this

1. Confirm Philip’s age is **past RMD** (People / life-events context; ~**76** in **2026**).
2. Confirm that the **Money movement strategy** under [[nav:assumptions]] is **Tax-account order**.
3. [[nav:forecaster]] → Movements for an early plan year (e.g. **2026** or **2027**).
4. Find at least one line with Why **RMD · Traditional IRA** (or the traditional account name).
   That sale is **not** “because residual preferred traditional.”
5. Look for separate residual activity on **Brokerage Cash** when living spend still needs funding
   after / beside the RMD — **tax-account order** may show on those residual slices.
6. Optional: open the **forced sales / RMD** detail (⚖️-style control when present) — required RMD
   vs sold for RMD for that year.
7. Turn on the **Brackets** chip and scan the indigo RMD segments across years. The outline shows
   the required minimum for each year, which is a series over the whole horizon rather than a
   single year's trade list.
8. Optional contrast: switch residual to **Pro-rata** and re-sim — RMD forced sales should
   **still** appear; residual *extra* sells change, the statutory RMD does not go away.

Prefer “RMD **overrides** residual preference on traditional balances” over memorizing a divisor
table.

---

## What this is *not*

| Not this lesson | Where that lives |
|-----------------|------------------|
| Choosing pro-rata vs tax-order for pure drawdown | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| Glide path residual | [Glide rebalance vs pro-rata](/learn/springfield_glide) |
| Full Banks dual-household story | [Meet the Banks household](/learn/banks_baseline) |
| Springfield dual-earner tour | [Meet the Springfield household](/learn/springfield_baseline) |
| SS statement paste vs early retirement | [Social Security treatment](/learn/social_security_treatment#statement-paste-vs-early-retirement) |
| Pre-65 / Medicare phase validation | [Healthcare expense phases (employer → Medicare)](/learn/healthcare_expense_sample) |

---

## Why this matters

| If you only… | You can miss… |
|--------------|---------------|
| Set residual to “taxable first” | Traditional RMD **still** forces pre-tax sales and ordinary income |
| Read total sells as one bucket | Forced RMD vs residual are **different Why codes** |
| Ignore age | RMD is **age-triggered** on traditional balances |

Living spend, taxes, and success definition still shape the plan; this sample isolates the
**forced-RMD seam**.

### The other half: what the forced dollars cost you

This lesson shows that RMDs **happen** regardless of strategy. It does not show what they do to your
**tax [[term:bracket]]** — and that is where the money is. Forced distributions consume cheap-bracket room
that a [[term:roth-conversion]] could otherwise have used, and they consume it **first**.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

In a year an RMD is due, the first dollars out of a traditional IRA count toward that RMD, and RMD
dollars cannot be converted to a Roth. Only money taken beyond the required amount can be converted.
That rule is why the forced dollars always claim the cheap brackets first.

</div>
</aside>

**[Filling the cheap buckets](/learn/filling_the_cheap_buckets)** draws that competition directly:
one stacked column per year, forced RMD below discretionary conversion, with the unfilled bracket
room hatched on top. It is also where the **statutory required** amount is separated from the
**taxable** band — the two diverge once base income stops covering the [[term:standard-deduction]], and the
gap is the [[term:deduction]] sheltering income the rules compelled.

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| What RMDs do to your bracket | [Filling the cheap buckets](/learn/filling_the_cheap_buckets) |
| Residual tax-account order | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| Glide residual | [Glide rebalance vs pro-rata](/learn/springfield_glide) |
| What “success” means | [What does success mean?](/learn/springfield_success) |
| App map | [Getting around the app](/learn/getting_around) |

---

*Illustrative quantities. Teaching claim: past RMD age, traditional IRA sales carry an RMD reason
even when residual tax-account order would prefer taxable cash. Directions over dollars.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
