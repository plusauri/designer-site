<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/mortgage_on_vs_paid_off.md
tutilis-locale: en source
-->
# Mortgage on vs paid off

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.housing.mortgage_vs_paid_off
  outline-path: Household planning › Housing and debt › Mortgage on vs paid off
  document-id: mortgage_on_vs_paid_off
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: MultiDossier
  intent: Ported from public dossiers/mortgage_on_vs_paid_off.md — teaching body unchanged.
  port-source: dossiers/mortgage_on_vs_paid_off.md
-->

<!--- α <lesson_body> -->
This lesson is a **contrast** rather than a new household. It compares two calibrated samples:

| Sample | Housing | Role |
|--------|---------|------|
| **Springfield Baseline** (right pane) | House **with** a mortgage (principal + interest) | Mortgage side of the story |
| **Johnsons Baseline** | House **paid off** (equity only; no P&I drain) | Paid-off foil |

Both are mid-career dual-earner mass-affluent plans in the same tax state, aimed at a similar
**near-miss** success band under product defaults. That is deliberate: free-and-clear is **not** an
automatic “you already won,” and a mortgage is **not** a moral failing — both still have levers.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Where do the house and the mortgage show up in the plan?** See
   [Springfield: mortgage on](#springfield-mortgage-on).
2. **Why does the interest part of a payment shrink while the principal part grows?** See
   [Springfield: mortgage on](#springfield-mortgage-on).
3. **How does a mortgage payment show up on the balance sheet, in cash flows, and in success over a
   long plan?** See [Springfield: mortgage on](#springfield-mortgage-on).
4. **What changes for a household that owns a similar house without that payment?** See
   [Johnsons: paid off](#johnsons-paid-off).
5. **Why is a paid-off house not an automatic win?** See
   [Johnsons: paid off](#johnsons-paid-off).
6. **Is equity in a paid-off house the same as money in the accounts?** See
   [What to take away](#what-to-take-away).

</div>
</aside>

We are not ranking “always pay off the house” vs “always invest.” We are learning to **see** the
housing debt in the product and to **compare** two honest baselines.

---

## Springfield: mortgage on

The right pane is **Springfield Baseline**.

### Where the house and the debt live

1. Open [[nav:birds-eye]] (top of [[nav:dossier]], or the [[nav:birds-eye]] control on the tool rail).
2. Choose [[nav:path:birds-eye|account]] or [[nav:path:birds-eye|holding]] — find
   **Evergreen Terrace** (the home; real asset / equity).
3. Switch to [[nav:path:birds-eye|cash-flow]] — look for **Home mortgage ([[term:principal]])** and
   **Home mortgage (interest)** among outflows. Those lines are the teaching heartbeat of this sample.

[[jump:home-equity]]

[[jump:principal|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.debt-principal-interest]]

**[[term:hover|Hover]]** either mortgage row. Both rows come from the same loan, so both raise the same card. The top of the card holds the loan's terms: the remaining balance, the rate, the monthly payment and the home it finances. The **Flow value** section below them lists the payment and its two halves, each with its first and last year. The **sparkline** at the bottom draws both halves over the life of the loan.

- **Principal** starts **lower** and **trends up**. Later years put more of each payment toward paying off the loan.
- **Interest** starts **higher** and **trends down**. Early years are interest-heavy, and as the balance shrinks, less interest is due.

[[img:mortgage-principal-hover]]

*The Home mortgage card. In the sparkline, the two lines cross partway through the loan: interest falls toward zero while principal rises to make up nearly the whole payment.*

That is what “paying off a mortgage” looks like in cash-flow form: you begin under the **burden of
interest**, and you **end** by retiring the **principal**. Same monthly commitment in spirit; the
*mix* of the two outflows flips over the life of the loan.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — why interest falls and principal rises</summary>
<div class="lesson-math-body">

A fixed-rate loan of \(P\) repaid over \(n\) months at monthly rate \(r\) has a constant payment

\[
M = P\,\frac{r}{1-(1+r)^{-n}}
\]

Each month's interest is the rate times what is still owed, \(I_k = r\,B_{k-1}\), and the rest of the
payment retires principal. The balance only falls, so the interest only falls. The principal part
grows by a factor of \(1+r\) every month:

\[
P_k = (M - rP)\,(1+r)^{k-1}
\]

On a 30-year loan at 6.5%, interest is about 86% of the first payment, and principal first exceeds
interest around month 233, in the twentieth year.

</div>
</details>

With [[nav:cash-flow]] selected, those outflows can also sit with **Liabilities** on the wealth
picture — unconventional bookkeeping, useful for “what must we fund?” next to “what do we own?”

### Projected path — [[nav:forecaster]]

Already populated when you open [[nav:forecaster]] (no manual “run forecast” to start).

In **Forecast Detail**, a row of **chips** chooses which cards are shown. You control the layout —
turn chips on for the views you care about and off for the rest so the panel stays readable. Order
in the product is [[nav:path:bs-chart|bs-table|cf-chart|cf-table]] (then [[nav:taxes]] /
[[nav:si-chart]] / [[nav:rec]] if you enable them).

**For this lesson, select only these chips** (and leave Taxes / Sales-Inv / Rec off unless you are
exploring further):

- [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]

Previews below match those chips at **full reference size** (structure only — live numbers on the
right may differ):

| Preview | Place | What to notice |
|---------|-------|----------------|
| [[img:mortgage-bs-chart|preview]] | [[nav:bs-chart]] | Home value vs loans; equity growing as principal is paid (**Evergreen Terrace** vs **Home mortgage**). |
| [[img:mortgage-bs-table|preview]] | [[nav:bs-table]] | Selected year: real assets, accounts, and the mortgage loan line. |
| [[img:mortgage-cf-chart|preview]] | [[nav:cf-chart]] | Outflow stacks that include mortgage service until the loan is paid down. |
| [[img:mortgage-cf-table|preview]] | [[nav:cf-table]] | Selected year: principal and interest lines, copyable. |

**Simulation Summary** (below / beside Detail — not Forecast Detail chips) already holds the multi-path
run:

| Preview | Place | What to notice |
|---------|-------|----------------|
| [[img:mortgage-nw-distribution|preview]] | **NW Distribution** | Cloud of endings + success at Silver. |
| [[img:mortgage-key-forecasts|preview]] | **Key Forecasts** | Min / GMF / Max and related metrics. |

Scrub **Year** through early and later plan years. Prefer **[[term:fid-gmf|FID 0 / GMF]]** unless you are touring
paths. **Re-simulate** only after a Transform change when you want a fresh multi-path run.

### Honest frame for Springfield

The mortgage is a **material cash-flow drain** during work and often into retirement planning
horizon years — large enough to compete with lifestyle and savings, not a trivial line item. It is
not the whole story — dual incomes, portfolio, and living phases still dominate the drama.

---

## Johnsons: paid off

Stay on this lesson. Use the **Live plan** chips above (or the link below) to put Johnsons on the
right-hand [[term:canvas]] — same prose, different household.

**[Show Johnsons (paid off) on the right →](#canvas-dossier:johnsons_baseline)**

[Back to Springfield (mortgage) →](#canvas-dossier:springfield_baseline)

On Johnsons you should **not** find a home-mortgage principal/interest series. You still have a
valuable house on the balance sheet — named **Cul-de-Sac Home** — equity without the payment.

### Why Johnsons are not “Springfield minus the loan”

If we only deleted Springfield’s mortgage and left every other number equal, paid-off would look
like a free win. These samples are **recalibrated** on purpose:

- Johnsons often carry a **higher lifestyle** (especially in retirement) and a **slightly leaner**
  portfolio so success stays in a comparable near-miss band.
- Same state / filing shape so the housing pivot is not confounded by a different tax map.

So: compare **mechanisms** (P&I present vs absent, cash left for investing / spending), not
“which family is richer.”

---

## Try this

### On Springfield (this page)

1. [[nav:path:birds-eye|cash-flow]] — find **Home mortgage** principal and interest; hover each
   and compare sparklines (interest down over time, principal up).
2. [[nav:path:forecaster|cf-table]] — pick a work year; note mortgage lines under expenses.
3. Scrub **Year** forward — watch principal/interest evolve (or end) relative to lifestyle and
   incomes.
4. Glance at **Simulation Summary** under Silver — order of magnitude only.

[[jump:cash-flow|output]]

### On Johnsons (same lesson, switched canvas)

1. Switch with **[Johnsons (paid off)](#canvas-dossier:johnsons_baseline)** or the Live plan chip.
2. [[nav:path:birds-eye|cash-flow]] — confirm **no** home-mortgage P&I series; still see lifestyle
   and dual earn.
3. [[nav:cf-chart]] / [[nav:cf-table]] — outflows without that mortgage stack; **Cul-de-Sac Home** still on the BS
   as equity.
4. **Simulation Summary** — success still near-miss-ish, not “paid off = automatic 100%.”

### Optional what-if (Springfield only)

Switch back to **[Springfield (mortgage)](#canvas-dossier:springfield_baseline)**, then
[[nav:transforms]] → Modifiables. You can explore lifestyle or **Forecast End** as in earlier lessons;
this lesson’s star observation is the **presence of the mortgage**, not a required Transform. If
you change something, **Re-simulate** for a full multi-path compare.

---

## What to take away

| Idea | Plain language |
|------|----------------|
| **See P&I** | Cash Flow mode + [[nav:cf-chart]]/Table make principal and interest first-class. |
| **House ≠ free cash** | Paid-off equity is real wealth but not the same as liquid accounts. |
| **Foil is calibrated** | Johnsons are not a free win; Springfield is not doomed by the loan alone. |
| **One lever at a time** | Earlier lessons: retirement timing, living spend. Here: housing debt visibility. |

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| Springfield cast + retirement | [Meet the Springfield household](/learn/springfield_baseline) |
| Living spend phases | [Bend the plan with living spend](/learn/springfield_living_spend) |
| Paid-off foil alone | [Meet the Johnsons household](/learn/johnsons_baseline) |
| What “success” means | [What does success mean?](/learn/springfield_success) |
| App map | [Getting around the app](/learn/getting_around) |

---

*The quantities are illustrative. What the lesson teaches is the mechanism and the contrast.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: MultiDossier — Multi-plan switch — primary + alternate dossier ids. -->
