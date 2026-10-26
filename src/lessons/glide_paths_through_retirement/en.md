<!--
tutilis-return: lessons/glide_paths_through_retirement/prose/en.md
tutilis-locale: en source
-->
# Glide paths through retirement

Morgan is 63 and retires in 2028, at 65. There is $1.5 million saved: $1 million in a [[term:traditional]] [[term:ira|IRA]], $450,000 in a [[term:brokerage]] account, and $50,000 in a money-market account. About 77% of it is in an S&P 500 index fund and the rest is in an intermediate Treasury fund and cash. This is the same household as the lesson [Getting safer as retirement approaches](/learn/safer_approaching_retirement), which compares constant mixes. This lesson lets the mix change with the years.

A [[term:glide-path|glide path]] is a target mix that changes with time. The one this lesson studies is the **bond tent**. It holds the least stock at the retirement date, when a crash does the most damage, and adds stock back as retirement goes on. The lesson opens three plans for Morgan:

- [Bond tent](#canvas-dossier:glide_bond_tent) aims for 40% stocks at retirement in 2028, then rises to 70% by 2043. The box **Rebalance inside tax-sheltered accounts** is ticked, so the IRA trades to follow the path.
- [Constant 60/40](#canvas-dossier:glide_constant_sixty_forty) holds one mix for the whole plan, also rebalanced inside the IRA.
- [Steering only](#canvas-dossier:glide_tent_steering_only) has the same bond tent with the box unticked. The path is written down, but the IRA never trades to follow it.

**A glide path is a plan for trades you have to make yourself.** When the bond tent shows a better result in this lesson, that result assumes that every year Morgan logs into the IRA and sells or buys funds to match the target. Tutilis cannot make those trades. If the trades are not made, the real portfolio behaves like the *Steering only* plan, and that plan does worse than either of the others in every crash this lesson tests. The section [Only if you trade](#only-if-you-trade) comes back to this.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **What is a glide path, and why would one rise after retirement?** See [What a glide path is](#what-a-glide-path-is).
2. **How do I set a glide path in Tutilis?** See [Set a path](#set-a-path).
3. **Why does a path need trades inside the IRA?** See [Steering alone lags](#steering-alone-lags).
4. **What does the bond tent do year by year?** See [The tent year by year](#the-tent-year-by-year).
5. **Does the tent help when a crash lands at retirement?** See [When a crash comes](#when-a-crash-comes).
6. **What does the tent cost when markets are kind?** See [What the tent costs](#what-the-tent-costs).
7. **What has to happen in real life for any of this to be true?** See [Only if you trade](#only-if-you-trade).
8. **What did Pfau and Kitces find?** See [What the research says](#what-the-research-says).

</div>
</aside>

## What a glide path is

A glide path is a schedule of target mixes, one for each year of the plan. Target-date funds use one. A 2030 fund holds mostly stock when its owners are young and moves toward bonds as 2030 approaches, and the fund's managers make the trades. Most glide paths only move in one direction, toward bonds, and keep going after the target date.

The years around the retirement date are when a fall in the market does the most damage. Before retirement a paycheck covers spending, so a crash is something to wait out. After it, every year's spending is sold from the portfolio, and shares sold near the bottom of a crash miss the recovery. This is [[term:sequence-of-returns|sequence-of-returns risk]], and the lesson [Timing a crash](/learn/sequence_of_returns_crash_timing) measures it.

That risk is largest in the first years of retirement and fades after them. By the time Morgan is 80, a crash still hurts, but there are fewer years left to fund and Social Security covers more of each one. Wade Pfau and Michael Kitces asked what follows from that. If the danger peaks at the retirement date, the least stock should be held there, and stock can rise again afterward. The shape that results, falling toward retirement and rising after it, is what Kitces calls a bond tent: the share of bonds rises to a peak at retirement and falls away on both sides.

## Set a path

Morgan's path is set in the **Money movement strategy** under [[nav:assumptions]]. The withdrawal strategy is **Glide rebalance**, the only strategy whose sales and purchases steer toward a glide path. The **Rebalance inside tax-sheltered accounts** box under the grid also reads the path, and it does so under any strategy. Under Glide rebalance, the grid has one column per year, and each column gives the share of domestic stocks, international stocks, bonds and cash. Between two columns the target moves in a straight line, so the bond tent needs only three: 2026 at Morgan's current mix, 2028 at 40% stocks, and 2043 at 70% stocks.

[[jump:glide-path|input__assumptions__assumptions-sell-invest__control.residual-capital-strategy__control.glide-rebalance]]

[[img:glide-paths-editor-tent|control]]

*The bond tent under the Money movement strategy. Three columns describe the whole path, and the box under the grid is ticked.*

The box under the grid, **Rebalance inside tax-sheltered accounts**, decides whether the path trades on its own. The next section shows what happens without it. The constant plan uses the same controls with a single column, which holds that mix for every year:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-editor-constant|control]]

*Constant 60/40: one column, box ticked.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-editor-steering|control]]

*Steering only: the same tent as the first plan, box unticked.*

</div>
</div>

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

To set a path on your own plan, open [[nav:assumptions]], set the **Money movement strategy** to **Glide rebalance**, and tick **Set a target mix**. The first column starts at your plan's current mix. Use **Add year** for each point of the path, type the year and the four shares, and tick **Rebalance inside tax-sheltered accounts** if your path lowers stock over time.

</div>
</details>

## Steering alone lags

Without the box, a glide path steers only money that moves anyway. Each year's leftover cash buys whatever is below its target, and each year's shortfall is sold from whatever is above it. That is enough to follow a path that adds stock. Stocks usually grow faster than bonds, and while stock sits below its target each year's spending is sold from bonds, so both push the mix the way the path is going. It is not enough to follow a path that takes stock away.

Open [[nav:si-chart]] and switch its header from **Moves** to **Glide Path**. Each asset class gets a strip with one bar per year, and a dark tick across each year's bar marks the path's target. The line above the strips says how the plan reads the path. Here is the steering-only plan:

[[jump:glide-path|output__forecaster__forecaster.forecast-detail__si-chart__si-chart.allocations]]

[[img:glide-paths-alloc-steering]]

*Steering only. The stock bars stay near 76% at retirement in 2028, while the target ticks dip to 40%.*

The target falls 37 points in two years, and the portfolio barely moves. Morgan's salary still covers spending in 2027, so nothing needs to be sold, and the leftover cash is small next to $1.5 million. After retirement the yearly sales come from stock first, because stock is the class furthest above its target, and the stock share falls only about a point a year. It reaches the target in the early 2040s only because the target has risen to meet it. Here is the same path with the box ticked:

[[img:glide-paths-alloc-tent]]

*Bond tent, box ticked. Each year's stock bar reaches its target tick, down to 40% in 2028 and back up to 70% by 2043.*

The difference is a trade inside the IRA. [[nav:si-table]] for 2027 shows it. The plan sells about $322,000 of the S&P 500 fund inside the IRA and buys the same amount of the Treasury fund there, and both lines give **Rebalance · Traditional IRA** as their reason:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-si-tent-2027]]

*Bond tent, 2027. The IRA swaps stock for Treasuries. No money leaves the account.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-si-steering-2027]]

*Steering only, 2027. Nothing is sold, and the path moves only the small amount of leftover cash.*

</div>
</div>

[[jump:rebalance|output__forecaster__forecaster.forecast-detail__si-table__line.reason.sheltered-rebalance]]

A trade inside an IRA is not a withdrawal. No money leaves the account, so there is no tax to pay and no early-withdrawal penalty, and the cash-flow statement leaves the swap out. That is why Tutilis rebalances only inside tax-sheltered accounts: traditional and [[term:roth|Roth]] IRAs and 401(k)s, 529 plans and HSAs. Selling in the brokerage account to rebalance would realize capital gains, so the plan never does it. An account can only swap between funds it already holds, so the path is reached as far as the sheltered balances allow. Morgan's IRA holds two-thirds of the money, which is plenty.

The **Glide Path** switch also works on the Movements table, which then lists each class's value, share, target and gap for the selected year.

## The tent year by year

The bond tent has two sides, and the box makes both of them happen. On the way down, from 2026 to 2028, the IRA sells stock and buys Treasuries each year until the portfolio is 40% stock on Morgan's retirement date. On the way up, from 2028 to 2043, the target adds two points of stock a year, and the trades run in the other direction.

[[img:glide-paths-si-tent-2035]]

*Bond tent, 2035. The year's spending is sold mostly from Treasuries, and a small swap inside the IRA buys stock.*

By 2035 the target is about 54% stock. Most of the year's spending comes from the Treasury funds, which are the class above target, so the spending itself moves the mix toward more stock. The IRA makes up what is left with a small swap. On the rising side the path is easy to follow, because withdrawals do most of the work. The falling side is where the trades are large.

The constant plan does the same thing around a fixed point. It rebalances to 60/40 every year, selling whatever has grown past its share:

[[img:glide-paths-alloc-constant]]

*Constant 60/40. The stock bars sit on the 60% target every year.*

## When a crash comes

A glide path is meant to pay off when a crash lands near the retirement date. Transforms can lay a historical crash over the plan. Open [[nav:transforms]], select **Sequence-of-returns risk**, choose the Dot-com bust of 2000, and start it in 2028, Morgan's first year without a salary:

[[img:glide-paths-sor-editor|control]]

[[jump:sequence-of-returns|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.sor-risk]]

The Dot-com bust replays seven years of stock returns, with the market down about 39% at its lowest. Transforms then draws each plan twice on one scale, as authored under *Original* and with the crash under *Modified*:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-bs-dotcom-tent]]

*Bond tent with the Dot-com bust from 2028.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-bs-dotcom-steering]]

*Steering only with the same crash.*

</div>
</div>

The two plans have the same path written in the same grid. The bond tent enters the crash at 40% stock and falls to about $1.37 million in 2030. The steering-only plan enters it at 76% stock and falls to about $1.10 million. The tent ends the plan with about $1.05 million and the steering-only plan with about $210,000, a fifth as much. The constant 60/40 plan sits between them and ends with about $840,000.

The tent also keeps trading through the crash. When stocks fall, the stock share drops below the target, and the IRA swap buys stock back up to it at low prices. In 2030, the crash's lowest year, the plan sells no stock at all. It sells Treasuries inside the IRA, pays the year's spending from them, and uses about $141,000 of the proceeds to buy the S&P 500 fund:

[[img:glide-paths-si-dotcom-tent-2030]]

*Bond tent in 2030 with the Dot-com bust from 2028. Treasuries pay for the year and buy stock at the bottom.*

One crash on one path is a single story. Here are the same plans over 1,000 market paths, with each crash replayed from 2028, as the share of paths that succeed:

| Crash from 2028 | Constant 60/40 | Bond tent | Steering only |
|---|---:|---:|---:|
| None | 88% | 89% | 83% |
| Dot-com bust (2000) | 81% | 85% | 63% |
| Oil-shock bear market (1973) | 83% | 85% | 70% |
| Global Financial Crisis (2007) | 92% | 94% | 78% |
| Great Crash (1929) | 32% | 65% | 1% |

The bond tent beats the constant plan in every crash, and by the most in the deepest one. The Global Financial Crisis row is higher than the row with no crash because that replay ends with a strong recovery, which lifts every plan. The steering-only column is the lowest in every row.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-nw-dotcom-constant]]

*Constant 60/40, 1,000 paths with the Dot-com bust from 2028.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-nw-dotcom-tent]]

*Bond tent, the same crash, on the same axis.*

</div>
</div>

## What the tent costs

When markets are kind, more stock ends richer. On the expected path with no crash, which Tutilis draws as the GMF, the steering-only plan ends with about $1.70 million, the constant 60/40 plan with about $1.55 million, and the bond tent with about $1.49 million. Holding 40% stock for the first years of retirement gives up some growth, and the tent ends about 4% below the constant plan.

The trade is the same one as in [Getting safer as retirement approaches](/learn/safer_approaching_retirement). The tent gives up a little in the average future to do much better in the bad ones. Over 1,000 paths with no crash it still succeeds slightly more often than the constant plan, about 89% against 88%, because the bad paths count against success and the good ones do not.

## Only if you trade

Every result in this lesson for the bond tent and the constant plan assumes the trades in [[nav:si-table]] really happen. In 2027 that means Morgan sells about $322,000 of the S&P 500 fund in the IRA and buys the Treasury fund with it. In a crash year it means buying stock while the news is at its worst. Tutilis models those trades. It cannot make them, and neither can your plan.

If the trades are not made, the real portfolio is the *Steering only* plan. The path is still in the plan, and the real portfolio does not follow it. As the crash table shows, that is worse than never having a path at all and holding 60/40, because the portfolio enters retirement near 76% stock and then sells stock at the bottom to pay for each year.

A few things make the trades more likely to happen:

- **Put a date on them.** Rebalance once a year on a fixed date, and use the Glide Path view of the Movements table for that year as the list of trades.
- **Trade inside the IRA.** The trades cost no tax there, which is why the plan makes them there. Selling in a brokerage account to rebalance can realize capital gains that the forecast does not assume.
- **Let a fund do it.** A target-date or balanced fund rebalances on its own. A target-date fund's path usually keeps falling after the target date, so it is not a bond tent.
- **Check that the box matches your behavior.** If you know you will not rebalance, untick the box, and the forecast will show you the steering-only result instead of a result you will not get.

## What the research says

Wade Pfau and Michael Kitces tested glide paths in "Reducing Retirement Risk with a Rising Equity Glide Path" (2014). They simulated retirements with paths that started with little stock and added more each year, and compared them with constant mixes and with paths that kept falling. Paths that started at about 30% stock and rose to about 60% did better than a constant 60%. They failed less often, and when they failed they failed by less. The falling paths that many advisors used did worse than both.

Their explanation is the one this lesson shows. The worst outcomes come from a crash early in retirement, so the least stock should be held then. Later, when a crash matters less, rising stock adds growth. Kitces later named the whole shape, from the years before retirement through the rise after it, the bond tent.

Morgan's tent is a gentler version of theirs, 40% rising to 70%, and the crash table above shows the same pattern on Morgan's plan. The research makes the same assumption as the forecast: the portfolio is rebalanced to the path every year.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Works cited — the publications behind the figures</summary>
<div class="lesson-bibliography-body">

- Wade D. Pfau and Michael E. Kitces, "Reducing Retirement Risk with a Rising Equity Glide Path," *Journal of Financial Planning* 27, no. 1 (January 2014): 38–45, for the rising-equity result and the comparison with constant and falling paths.

</div>
</details>
