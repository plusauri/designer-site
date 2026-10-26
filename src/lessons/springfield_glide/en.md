<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/springfield_glide.md
tutilis-locale: en source
-->
# Glide rebalance vs pro-rata

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.withdrawal.glide
  outline-path: Household planning › Withdrawal and longevity › Glide rebalance vs pro-rata
  document-id: springfield_glide
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: FirstPass
  host-hint: Dossier
  intent: Ported from public dossiers/springfield_glide.md — teaching body unchanged.
  port-source: dossiers/springfield_glide.md
-->

<!--- α <lesson_body> -->
A [[term:glide-path]] is a target mix of stocks, bonds and cash that changes over the years. You write it down once, and when the withdrawal strategy is **Glide [[term:rebalance]]**, every year's leftover cash and every year's shortfall are steered toward it. Under the default strategy, **Pro-rata**, the plan sells and invests in proportion to what it already holds, so whatever mix it starts with tends to stay.

This lesson's plan starts with far more in bonds than in stocks and carries a target that leans the other way. That gap is what the lesson is about. You will find where the target is set, read it, and then switch the strategy to see what following it does to the forecast.

This is the sibling of [Tax-account order vs pro-rata](/learn/springfield_tax_order). Both lessons change the same control, the withdrawal strategy, and each sample is built so that one switch is easy to read.

The live plan on the right is **Springfield Glide** (`springfield_glide`). Success is judged as **Silver** unless you change it, as explained in [What does success mean?](/learn/springfield_success).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **What is in this sample, and why does pro-rata keep it bond-heavy?** See [What is in the sample](#what-is-in-the-sample).
2. **Where do I set the glide path's target mix, and how do I read it?** See [Set the target](#set-the-target).
3. **Which views show whether the stock share grows over time?** See [Where to look](#where-to-look).
4. **Where do I switch the strategy from pro-rata to glide rebalance?** See [The lever](#the-lever).
5. **With the same household and spending, what does following the target change?** See [Try this](#try-this).

</div>
</aside>

---

## What is in the sample

Homer was born in 1965. He works until he retires at 65 in 2030, claims Social Security at his full retirement age of 67, and the plan runs until he is 90. His savings sit in one taxable [[term:brokerage]] account that holds two funds: **Growth Equity**, which grows like the US stock market, and **Ballast Bond**, which grows like intermediate Treasuries. The bond fund is more than five times the size of the stock fund. His living expenses continue through the end of the plan.

The plan's withdrawal strategy is **Pro-rata**. Each year it sells from, or invests in, both funds in proportion to their size, so the portfolio stays mostly bonds for as long as the plan runs.

The plan also carries a glide path that it does not use yet. The target is 75% stocks and 25% bonds through retirement, and it then moves in a straight line to 50/50 by the year Homer turns 90. The table at the foot of this lesson lists every setting, the target included.

---

## Set the target

The target lives under the **Money movement strategy** in [[nav:assumptions]]. Select **Glide rebalance** and the **Glide path target** grid appears beneath it. A plan that already has a target shows the grid under any strategy, with a note when the strategy will not read it.

[[jump:glide-path|input__assumptions__assumptions-sell-invest__control.residual-capital-strategy__control.glide-rebalance]]

[[img:sfglide-glide-target|control]]

*Springfield Glide's target under the Money movement strategy. The plan is on Pro-rata, so the target is stored but not read, and the note beside it says so.*

The grid has one column per year and one row per kind of investment: domestic stocks, international stocks, bonds and cash. Each column says how the portfolio should be split in that year, and it should add up to 100%. The total under each column turns red when it does not, and **Normalize shares** scales every such column back to 100%.

- **Set a target mix** turns the target on. A new target starts with one column for this year, filled in with what the plan holds today. Unticking it deletes the target, every column and the box under the grid, so it asks first.
- **Add year** adds a column ten years after the last one, with the same mix, which you then edit.
- The bin under a column removes it.

Between two columns the target moves in a straight line. Before the first column the first column's mix applies, and after the last column the last one's does. Springfield Glide has two columns, 2030 and 2055, so its target is 75/25 every year up to 2030 and reaches 50/50 in 2055.

The target is stated by kind of investment, and Tutilis decides which kind each fund is from the growth category it is set to grow at. When a class holds several funds, its share is spread across them in proportion to their value. A fund whose category is none of the four, such as gold, real estate or a fund with only its own growth assumption, is listed under the grid as **Not in the glide**. The rule never buys or sells it to reach the target.

---

## Where to look

### Definitional

1. [[nav:birds-eye]] → Assets shows **Growth Equity** and **Ballast Bond** side by side in the brokerage account.
2. The **Money movement strategy** under [[nav:assumptions]] starts on **Pro-rata**, and the **Glide path target** grid described above sits beneath it.

### Projected — [[nav:forecaster]] (already populated)

Select [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]] and [[nav:si-table]]. The Simulation Summary is already set to **Silver**.

| Preview | View | What it shows here |
|---------|------|-----------|
| [[img:sfglide-bs-chart|preview]] | [[nav:bs-chart]] | Whether the stock share grows over time. |
| [[img:sfglide-bs-table|preview]] | [[nav:bs-table]] | The two funds in a selected year. |
| [[img:sfglide-cf-chart|preview]] | [[nav:cf-chart]] | Income while Homer works, living expenses, and the years the plan invests or sells. |
| [[img:sfglide-si-table|preview]] | [[nav:si-table]] | Why each trade happened. Pro-rata trades say so, and glide trades say *Glide rebalance*. |
| [[img:sfglide-nw-distribution|preview]] | **NW Distribution** | The spread of ending net worth after a strategy switch. |
| [[img:sfglide-key-forecasts|preview]] | **Key Forecasts** | Ending net worth on the GMF path and across paths. |

[[jump:glide-path|output__forecaster__forecaster.forecast-detail__si-table__line.reason.glide-rebalance]]

Read the **[[term:fid-gmf|FID 0 / GMF]]** path first. The chart controls are explained in [Close up, zoom and Reveal](/learn/getting_around#chart-chrome).

---

## The lever

| Place | Use |
|-------|-----|
| The **Money movement strategy** in [[nav:assumptions]] | Changes the plan's strategy for good. |
| [[nav:transforms]] → Money movements modifiable | Tries the other strategy as a what-if, then **Re-simulate**. |

[[jump:withdrawal-order|modifiable]]

Switch **Pro-rata** to **Glide rebalance** and leave the accounts and the spending alone for the first experiment. The target is already in place, so the switch is the only change.

Until you switch, the plan's issue list carries a warning that the glide path is not used by the withdrawal strategy. That is the point this lesson makes: under pro-rata the target is written down but nothing reads it. The warning goes away once the strategy is glide rebalance.

---

## Try this

1. Confirm that **Ballast Bond** is much larger than **Growth Equity** at the start, in [[nav:birds-eye]] or [[nav:bs-table]].
2. Note that the strategy is **Pro-rata**, and note the plan's net worth in its last year on the GMF path.
3. Open [[nav:assumptions]] and read the **Glide path target** grid under the **Money movement strategy**. Then switch the strategy to **Glide rebalance** and **Re-simulate**.
4. Scrub [[nav:bs-chart]] or [[nav:bs-table]] through the years. Under pro-rata, stocks stay around a fifth of the portfolio for the whole plan. Under glide rebalance, each year's leftover cash and each year's shortfall are steered toward the target, so the stock share climbs to more than a quarter by 2035 and about two fifths by 2040. It meets the target in the late 2040s and then follows it down toward 50/50.
5. Compare the endings. The plan stays [[term:solvent]] to the end under both strategies, and under glide rebalance it ends with about a third more net worth, because more of the money spent those years growing at stock returns.
6. Edit the target and re-simulate. Try a later second column, or a 60/40 end point, and watch how much the ending moves. The point of the grid is that you can say what mix you want without touching a single fund.

Read the direction rather than the dollars. On a bond-heavy portfolio with a target that asks for more stock, steering the leftover cash toward the target helps.

---

## Sibling lessons

| Lesson | What the strategy changes |
|--------|----------------|
| [Tax-account order vs pro-rata](/learn/springfield_tax_order) | Which tax bucket pays first (taxable cash and a fast-growing Roth). |
| **This page** | The mix of investments, through a glide path (a bond-heavy account and a stock-leaning target). |
| [Glide paths through retirement](/learn/glide_paths_through_retirement) | A glide path that changes with the years: the bond tent, rebalancing inside the IRA, and a crash at retirement. |

The three strategies answer different questions, and each sample is tuned so that one switch is easy to read.

---

## Where to go next

| Topic | Lesson |
|-------|-----------------|
| A path that changes over retirement | [Glide paths through retirement](/learn/glide_paths_through_retirement) |
| Tax-account order | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| The full dual-earner household | [Meet the Springfield household](/learn/springfield_baseline) |
| Claiming age and longevity | [Claim early vs live long](/learn/springfield_claim_longevity) |
| A forced traditional RMD | [Forced traditional RMD vs residual tax order](/learn/banks_forced_rmd) |
| A map of the app | [Getting around the app](/learn/getting_around) |

---

*The quantities are illustrative. What the lesson teaches is that on a bond-heavy portfolio with a target that asks for more stock, glide rebalance moves the mix toward the target and leaves the plan better off than pro-rata. The direction is the lesson, and the dollars are only an illustration.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
