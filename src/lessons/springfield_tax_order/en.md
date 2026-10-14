<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/springfield_tax_order.md
tutilis-locale: en source
-->
# Tax-account order vs pro-rata

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.withdrawal.tax_order
  outline-path: Household planning › Withdrawal and longevity › Tax-account order vs pro-rata
  document-id: springfield_tax_order
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/springfield_tax_order.md — teaching body unchanged.
  port-source: dossiers/springfield_tax_order.md
-->

<!--- α <lesson_body> -->
In pure **[[term:drawdown]]**, something has to fund living spend when cash flow is short. After any
**linked** funding rules fire, the plan’s **residual capital strategy** decides *which accounts*
supply the rest — and that choice can change **[[term:terminal-wealth]]** a lot even when returns and spend
are fixed.

This lesson uses a **lean solo retired Homer** sample sized so two strategies diverge:

| Strategy | Plain idea |
|----------|------------|
| **Pro-rata** (this sample’s default) | Sell residual need **market-value pro-rata** across holdings. Honest baseline; does not prefer tax buckets. |
| **Tax-account order** | Drain **taxable** first, then **tax-deferred** (e.g. traditional IRA), then **tax-free** (Roth / 529). Protects high-growth tax-free accounts longer. |

The sample is built so that, with large **taxable cash** and a large **high-growth [[term:roth]]**,
**tax-account order should beat pro-rata on terminal net worth** when you flip the strategy and
re-simulate.

This is **not** the full dual-earner Springfield Baseline. The cast name carries over for continuity.

The live plan on the right is **Springfield Tax Order** (`springfield_tax_order`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What is in this sample, and why does it pair taxable cash with a high-growth Roth?** See
   [What is in the sample](#what-is-in-the-sample).
2. **Where do I see which account was sold in a given year, and why it was sold?** See
   [Where to look](#where-to-look).
3. **Where do I switch the residual strategy from pro-rata to tax-account order?** See
   [The lever](#the-lever-residual-strategy).
4. **Does tax-account order improve ending wealth on this sample, and how can I confirm it?** See
   [Try this](#try-this).
5. **Why does the order of selling matter when returns and spending stay the same?** See
   [Why this matters](#why-this-matters).

</div>
</aside>

---

## The question

If I keep the same household, same spend, and same [[term:monte-carlo|Monte Carlo]] draws, but switch residual sell
policy from **pro-rata** to **tax-account order**, does **ending wealth** improve — and can I **see
why** in Movements (which account was sold)?

---

## What is in the sample

| Piece | Authoring (order of magnitude) |
|-------|--------------------------------|
| Person | Homer, born **1960**, retired **65**, death **90** — already in drawdown |
| **Brokerage Cash** (taxable) | Large **money-market** holding (~high basis cash) |
| **Traditional IRA** | Smaller **bond** holding |
| **Roth IRA** | Large **US equity** holding (high expected growth) |
| Spend | **Retirement Living** growing modestly through death |
| Residual strategy (default) | **Pro-rata** |
| Taxes | US single filer |

The teaching contrast is deliberate: **cash-like taxable** vs **high-growth Roth**. Pro-rata keeps
nibbling the Roth; tax-account order tries to empty taxable first and leave the Roth [[term:compounding]].

---

## Where to look

### Definitional

1. [[nav:birds-eye]] → Assets — **[[term:brokerage|Brokerage]] Cash**, **Traditional [[term:ira]]**<!-- term-skip: traditional — an account name -->, **Roth IRA**.
2. [[nav:assumptions]] → Movements — residual strategy selector (**Pro-rata** / **Tax-account order**
   / **Glide [[term:rebalance]]**). This sample starts on **Pro-rata**.
3. [[nav:path:birds-eye|cash-flow]] — **Retirement Living** outflow.

[[jump:birds-eye]]

### Projected — [[nav:forecaster]] (already populated)

Select [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]], and turn on [[nav:si-table]] for the
reason codes. Simulation Summary is already run under **Silver**.

[[img:sftax-si-table]]

*Canonical **Movements** chrome (values blurred). This lesson lives in the **Why** column —
**Pro-rata residual** vs **Tax-account order · …**. [[term:hover|Hover]] **Name** for Prior and full detail.*

| Preview | View | Role here |
|---------|------|-----------|
| [[img:sftax-bs-chart|preview]] | [[nav:bs-chart]] | How balances shrink over the horizon under each residual policy. |
| [[img:sftax-bs-table|preview]] | [[nav:bs-table]] | Selected year: which accounts still hold value. |
| [[img:sftax-cf-chart|preview]] | [[nav:cf-chart]] | Living spend vs inflows; sales show up in disposition. |
| [[img:sftax-cf-table|preview]] | [[nav:cf-table]] | Selected year: net sell / invest totals. |
| [[img:sftax-si-table|preview]] | [[nav:si-table]] | **Which** holdings sold and **why** — look for **Pro-rata residual** vs **Tax-account order · …** reasons. |
| [[img:sftax-nw-distribution|preview]] | **NW Distribution** | Terminal cloud + success at Silver after a strategy flip. |
| [[img:sftax-key-forecasts|preview]] | **Key Forecasts** | Min / GMF / Max — compare GMF terminal NW before vs after. |

Prefer **[[term:fid-gmf|FID 0 / GMF]]**. Snapshot dollars are **not** targets — read **direction**. Chart controls:
[Close up / zoom / Reveal](/learn/getting_around#chart-chrome).

---

## The lever: residual strategy

The residual policy can be set in two equivalent places, from the same control family as the success criteria:

| Place | Use when |
|-------|----------|
| [[nav:assumptions]] → Movements | Durable policy on the dossier |
| [[nav:transforms]] → Modifiables → residual / sell-invest row (product label **Money movements**) | What-if without treating the edit as permanent; then **Re-simulate** |

Flip **Pro-rata → Tax-account order**. Do **not** change spend or accounts for the first experiment.

[[jump:withdrawal-order]]

Linked funding (if any) always applies **before** residual policy — this lean sample is mostly
residual drawdown.

---

## Try this

1. Stay on **Springfield Tax Order**. Confirm default residual is **Pro-rata** (Assumptions → Sell
   & invest).
2. [[nav:forecaster]] → Movements on a mid-plan year with spending. Note sales reasons —
   **Pro-rata residual** (or similar) on both cash and Roth slices is the baseline story.
3. Note **GMF** terminal wealth and success at Silver (order of magnitude only).
4. [[nav:transforms]] (or Assumptions): switch residual to **Tax-account order**. **Re-simulate**.
5. Expect **terminal net worth up** vs pro-rata on this sample (Roth equity left to compound longer;
   taxable cash drained first).
6. Open **Movements** again — reasons should mention **Tax-account order** (and a tier such as
   taxable / deferred / [[term:tax-free]]) more than pure pro-rata across everything.
7. Optional: [[nav:bs-chart]] side-by-side in Transforms original vs modified — Roth balance should stay
   higher longer under tax-account order.

Prefer “tax-aware residual **helps** terminal wealth on this account mix” over locking a percentage.

---

## What this is *not*

| Not this lesson | Where that lives |
|-----------------|------------------|
| Full household with dual earn / mortgage | [Springfield baseline](/learn/springfield_baseline) |
| Glide rebalance vs pro-rata (bond-heavy taxable) | `springfield_glide` sample (later / catalog) |
| RMD-forced sales on traditional IRAs | Banks / RMD family samples |
| Success definition alone | [What does success mean?](/learn/springfield_success) |

Glide is a **third** residual mode — useful later; do not conflate it with tax-account order here.

---

## Why this matters

| If you only… | You can miss… |
|--------------|---------------|
| Maximize portfolio return assumptions | **Which** account pays living spend year by year |
| Treat all accounts as one undifferentiated pot | Tax buckets change **after-tax** compounding |
| Read one success % | Same cloud of returns, different residual policy → different endings |

Living spend and retirement timing still dominate many plans; this lever is about **order of
sacrifice** once you are already spending.

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| Full dual-earner household | [Meet the Springfield household](/learn/springfield_baseline) |
| Living spend lever | [Bend the plan with living spend](/learn/springfield_living_spend) |
| Claim timing × longevity | [Claim early vs live long](/learn/springfield_claim_longevity) |
| What “success” means | [What does success mean?](/learn/springfield_success) |
| Glide residual | [Glide rebalance vs pro-rata](/learn/springfield_glide) |
| Forced RMD vs residual | [Forced traditional RMD vs residual tax order](/learn/banks_forced_rmd) |
| App map | [Getting around the app](/learn/getting_around) |

---

*Illustrative quantities. Teaching claim: on this taxable-cash + high-growth Roth mix, tax-account
order residual tends to beat pro-rata on terminal NW. Directions over dollars.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
