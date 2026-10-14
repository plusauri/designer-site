<!--
tutilis-return: lessons/safer_approaching_retirement/prose/en.md
tutilis-locale: en source
-->
# Getting safer as retirement approaches

Morgan is 63 and plans to retire in 2028, at 65. There is $1.5 million saved: $1 million in a [[term:traditional]] [[term:ira|IRA]], $450,000 in a [[term:brokerage]] account, and $50,000 in a money-market account. The invested money is split about 80/20 between an S&P 500 index fund and an intermediate Treasury fund. Morgan earns $120,000 a year until retirement, spends $84,000 a year in today's dollars, and claims Social Security at 67.

The usual advice to someone in Morgan's position is to get safer as the retirement date approaches. Advisors mean several different things by that: holding less stock, building a ladder of bonds or TIPS, buying an [[term:annuity]], keeping a larger emergency fund, and leaning on a pension if there is one. This lesson shows that all of those moves do the same thing. Each one moves money toward cash on the **Risk vs. Return** chart, down and to the left, and gives up some expected return to get there.

It opens three plans for the same saver with the same $1.5 million:

- [Stays 80/20](#canvas-dossier:safer_stays_eighty_twenty) is Morgan's portfolio as it stands, held at 80/20 through retirement.
- [Moves down](#canvas-dossier:safer_moves_down) rearranges the IRA before retirement. It holds less stock and adds [[term:tips|TIPS]] and short-term Treasuries, so the whole portfolio is about 55/45. The brokerage account is left alone so that nothing is sold at a taxable gain.
- [Annuity floor](#canvas-dossier:safer_income_floor) uses $300,000 of the IRA to buy an income annuity that pays $2,050 a month for life from age 65. The rest of the portfolio stays 80/20.

All three plans use the same rule for what to sell. Each holds a constant target allocation with the **Glide rebalance** withdrawal strategy. It [[term:rebalance|rebalances]] as it withdraws, selling whatever sits above its target when the plan needs money. The lesson [Timing a crash](/learn/sequence_of_returns_crash_timing) shows why that rule matters, so it is held fixed here, and only the amount of risk changes.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Why do the years just before retirement call for less risk?** See [Why the last years matter](#why-the-last-years-matter).
2. **Where does my portfolio sit on the risk chart, and what moves it?** See [Read the risk chart](#read-the-risk-chart).
3. **What does holding less stock cost, and what does it buy?** See [Moving down the chart](#moving-down-the-chart).
4. **How does a safe sleeve help in a long crash?** See [Something safe to sell](#something-safe-to-sell).
5. **Where does an income annuity fit, and what does it cost?** See [An income floor](#an-income-floor).
6. **Are any of these moves truly safe?** See [Nothing is fully safe](#nothing-is-fully-safe).
7. **Where do dividends, cash, pensions and bond ladders fit?** See [Other moves, same axis](#other-moves-same-axis).
8. **What does Wade Pfau's research say about building a safe floor?** See [What the research says](#what-the-research-says).

</div>
</aside>

## Why the last years matter

The years around the retirement date are when a fall in the market does the most damage. Before retirement, a paycheck covers spending and a crash is something to wait out. After it, every year's spending has to come from selling something, and shares sold near the bottom of a crash never take part in the recovery. This is [[term:sequence-of-returns|sequence-of-returns risk]], and the lesson [Timing a crash](/learn/sequence_of_returns_crash_timing) measures it in detail.

You can watch this happen in Morgan's plan by putting a historical crash into it. The plan itself never contains a crash, because its returns come from growth assumptions that describe an average year. A specific crash is laid over the plan in [[nav:transforms]]. Open Transforms, unfold **Modifications**, and select **Sequence-of-returns risk**, the last row on the **Global** tab:

[[img:safer-sor-modifiables|control]]

Switch it on in the editor beside the card, choose the 2007 episode, the Global Financial Crisis, and move the start year to 2027. The slider opens on Morgan's retirement year, 2028, and this section is about the year before it:

[[img:safer-sor-editor-gfc|control]]

Transforms now draws the plan twice. Look at the balance-sheet comparison, with the plan as authored under *Original* and the plan with the crash under *Modified*, on one shared scale:

[[img:safer-bs-gfc-8020]]

*Stays 80/20 with the Global Financial Crisis from 2027. The crash years are marked on the Modified side's year axis.*

In 2027 Morgan is still earning a salary, and the crisis's small first-year loss barely shows. Its deep second year lands on 2028, the first year Morgan lives on the portfolio, and net worth falls from about $1.58 million to about $1.01 million. It does not climb back to its 2027 level until 2035, and it never catches up with the plan that had no crash.

For perspective, switch the episode to 1929 and leave the start in 2027:

[[img:safer-bs-1929-2027-8020]]

*Stays 80/20 with the Great Crash of 1929 from 2027.*

The Global Financial Crisis recovers within the six years it replays. The Great Crash replays sixteen, and it takes the 80/20 plan from $1.5 million at the start to about $430,000 at the end of 2029. The portfolio never recovers, and the plan runs out of money in 2045. The section [Something safe to sell](#something-safe-to-sell) comes back to this episode and tests the safer plans against it. Switch back to 2007 before reading on.

Now keep the crash on and move its start year. Open [[nav:bs-table]] on 2055, the last year of the forecast, and watch the net-worth line on the Modified side as the slider moves. The crash stays in force when you switch plans with the chips above the canvas, so you can read each plan's column without setting it up again. Here is the ending net worth for the start years worth a look:

| Crash starts | Stays 80/20 | Moves down | Annuity floor |
|---|---:|---:|---:|
| No crash | $1.88M | $1.47M | $1.81M |
| **2027** | **$1.25M** | **$1.13M** | **$1.32M** |
| 2028 | $1.26M | $1.13M | $1.34M |
| 2029 | $1.29M | $1.16M | $1.37M |
| 2030 | $1.32M | $1.18M | $1.39M |
| 2033 | $1.38M | $1.20M | $1.42M |

The worst start in every plan is 2027, the year before retirement, because it puts the crisis's deepest year on the first year without a salary. Later starts still hurt, and they hurt a little less each year, because the portfolio has had longer to grow and Social Security, which starts in 2030, carries more of the spending. At its worst placement the crash costs the 80/20 plan about a third of its ending net worth.

Advisors cannot see the next crash coming, so they reduce the damage it can do in those few years. There are two ways to do that. One is to hold assets that do not fall with stocks, so there is something else to sell. The other is to have income that keeps arriving, so less has to be sold. Every move in this lesson does one or both.

## Read the risk chart

Tutilis draws the portfolio's risk on one chart. Open [[nav:risk]] and look at **Risk vs. Return**. Each dot is one item placed by its expected yearly return, [[term:mu|μ]], on the vertical axis and its [[term:volatility|volatility]], [[term:sigma|σ]], on the horizontal axis. The star is the whole portfolio. Turn on the **Holdings** chip to see each fund on its own.

Here is the [Stays 80/20](#canvas-dossier:safer_stays_eighty_twenty) plan:

[[img:safer-risk-8020]]

The S&P 500 fund sits at the top right, with a return of about 7.6% and a σ of about 16%. The Treasury fund sits lower and further left, and the money-market fund sits furthest left of all. The star is a blend weighted by value, so an 80% stock portfolio sits most of the way toward the stock fund, at a σ of about 12.4% and a return of about 6.9%.

Here is the [Moves down](#canvas-dossier:safer_moves_down) plan, with the same stock fund and two new holdings near the bottom left:

[[img:safer-risk-down]]

The short-term Treasury fund sits beside cash, and the TIPS fund sits near the Treasury fund with a slightly higher return. The star has moved down and to the left, to a σ of about 8.6% and a return of about 6.2%. Every safer move in this lesson is a move in that direction. The portfolio gives up some expected return and becomes much less volatile in exchange.

The two stars do not move equally on the two axes. Risk falls by about a third, while expected return falls by only about a tenth. The safer holdings earn somewhat less than stocks but swing far less. They also do not move in lockstep with stocks, which is what [[term:correlation]] measures, so a blend of them swings less than the average of their swings. The lesson [Risk and return](/learn/risk_and_return) explains the chart in more depth.

If you are following along, click [Annuity floor](#canvas-dossier:safer_income_floor) next. The chips carry over from plan to plan, so Holdings stays on. This time the star does not move. It sits at about the same risk and return as the 80/20 plan's, because the portfolio that remains is still 80/20. It is simply smaller, $1.2 million instead of $1.5 million, because $300,000 of it bought the annuity. The annuity is a cash flow rather than a holding, so the star, which describes the holdings, cannot see it. Turn on the **Cash Flows** chip to put it on the chart:

[[img:safer-risk-floor]]

The annuity sits at the origin. It has no volatility, and a level payment has no growth. Social Security sits beside it on the vertical axis, with no volatility and growth equal to its cost-of-living adjustment. Salary and living expenses appear as cash flows too.

So the annuity plan lowers risk in a different way from the Moves down plan. It moves $300,000 out of the portfolio into a cash-like product with almost no risk and almost no growth, and it leaves the rest of the portfolio exactly as risky as it was. The chart with Cash Flows on shows both halves at once.

## Moving down the chart

Moving down the chart has a cost, and the cost is expected wealth. With no crash on the GMF path, the Moves down plan ends at $1.47 million against $1.88 million for 80/20. Money in Treasuries compounds more slowly than money in stocks, and the gap adds up over three decades.

What the move buys shows up across many possible futures. The [[term:monte-carlo|Monte Carlo]] simulation runs a thousand paths with returns drawn at random. Here are the ending net worths of the two plans, drawn on one axis:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:safer-nw-8020]]

*Stays 80/20. The spread is wide, with a long tail of very good outcomes to the right.*

</div>
<div class="lesson-img-cell">

[[img:safer-nw-down]]

*Moves down. The spread is narrower, and fewer paths end below zero.*

</div>
</div>

The 80/20 plan succeeds on about 83% of paths. Its [[term:median]] ending net worth is about $2.12 million, and its bad-tenth outcome is about $500,000 of debt, which means the money ran out years before the end of the plan. The Moves down plan succeeds on about 90% of paths. Its median is lower, at about $1.78 million, but its bad-tenth outcome is only about $60,000 of debt.

This is the trade in its plainest form. Moving down the chart gives up some of the good outcomes to shrink the bad ones. A retiree who has already saved enough cares much more about the bad outcomes. There is no second career to recover from them, while the good outcomes mostly change the size of an estate.

## Something safe to sell

A safe sleeve is valuable because it gives the plan something to sell that has not fallen. The Global Financial Crisis recovered within a few years, and any plan with some bonds could sell those while it waited. The Great Crash of 1929 is the harder test. Its stock market fell for three years and took well over a decade to recover.

To put it in the plan, go back to **Sequence-of-returns risk** in [[nav:transforms]], choose the 1929 episode, and set the start year to 2028, Morgan's first year without a salary:

[[img:safer-sor-editor-1929|control]]

Look at the balance-sheet comparison first. It is the quickest way to get your bearings in any crash, because it shows the plan as authored under *Original* beside the plan with the crash under *Modified*, on one shared scale, with the crash years shaded on the axis.

[[img:safer-bs-1929-8020]]

*Stays 80/20, as authored on the left and with the 1929 crash from 2028 on the right.*

[[img:safer-bs-1929-down]]

*Moves down, the same comparison.*

On the GMF path, the 80/20 plan's net worth falls from about $1.69 million at the end of 2027 to about $440,000 at the end of 2030, a drop of nearly three quarters. The Moves down plan falls from about $1.68 million to about $750,000, a little more than half. Neither plan climbs back to its Original line. The 80/20 plan runs out of money in 2045, when Morgan is 82, and the Moves down plan runs out in 2050, five years later.

To see where the difference comes from, open [[nav:si-table]] on 2031. By then a dollar of stock from the start of 2028 is worth about 52 cents, even after a 140% rebound year.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:safer-sales-1929-8020]]

*Stays 80/20 in 2031. After the rebound year the stock fund is back above its 80% target, so the plan sells it from both accounts.*

</div>
<div class="lesson-img-cell">

[[img:safer-sales-1929-down]]

*Moves down in 2031. The stock fund is still below its target, so no stock is sold and the year is paid from Treasuries, TIPS and short-term Treasuries.*

</div>
</div>

Year by year, the difference is large:

| Plan | First years it sells stock | Stock sold, 2028–2038 |
|---|---|---:|
| Stays 80/20 | A little in 2028 and 2029, then every year from 2031 | about $515,000 |
| Moves down | A little in 2028, then from 2033 | about $250,000 |
| Annuity floor | A little in 2028 and 2029, then every year from 2031 | about $340,000 |

The 80/20 and Moves down plans follow the same rule, which sells whatever sits above its target. The 80/20 plan's target is mostly stock, so the first good year lifts stock back above it, and the rule starts selling stock while it is still worth about half of what it was in 2028. The Moves down plan's target holds much less stock, so it pays for the first five years of the crash almost entirely from its safe holdings, the years when stock was worth least. It sells about $11,000 of stock in 2028, when the year's bill is larger than the amount its safe holdings sit above their target, and then none at all until 2033. Its Treasury funds did not fall with the market, and its TIPS and short-term Treasuries held their value. When it finally sells stock, it sells less than half as much as the 80/20 plan does.

The annuity plan sells stock in the same years as the 80/20 plan, because the rest of its portfolio is still 80/20. It sells about a third less in all, because the annuity pays part of each year's bill.

None of the three plans is safe in a crash as deep and long as 1929 at Morgan's level of spending. The 80/20 plan succeeds on about 2% of paths with that crash at retirement, and the other two on about 12 to 14%. The safer plans fail less often, and a crash like that is a reason to plan for spending that can be cut. The lesson [Timing a crash](/learn/sequence_of_returns_crash_timing) has more on how Transforms places a crash.

## An income floor

An income annuity turns a lump of savings into a paycheck for life. Morgan's [Annuity floor](#canvas-dossier:safer_income_floor) plan pays $300,000 for an annuity bought in 2026 that pays $2,050 a month, $24,600 a year, from age 65 until death. That is about 8.2% of the [[term:premium]] each year. Published quotes in early 2026 for a 65-year-old man buying an immediate annuity ran near 7.5% a year, and waiting two years for the first payment raises the rate. Your own quote depends on age, sex, interest rates and the insurer.

In Tutilis an annuity is a cash flow, added from **Cash Flows** like a pension or Social Security.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Open **Cash Flows**, add an annuity, and set the monthly payment, the cost-of-living adjustment, and the years it pays. Morgan's annuity pays from 2028 until the end of the plan, with no adjustment, so the payment stays the same every year.

[[img:safer-annuity-editor|control]]

The **Annuity** tool in the bottom bar is a scratch pad for the same decision. It compares a premium against keeping the money invested before anything goes into the plan.

</div>
</details>

As [Read the risk chart](#read-the-risk-chart) showed, the annuity does not move the portfolio's star. It sits at the origin of the chart as a cash flow. The risk has not disappeared. It has moved off the portfolio and into a promise from an insurer.

The effect on the plan is different from the Moves down plan. The annuity plan succeeds on about 88% of paths, which is close to Moves down. Its median ending net worth is about $2.01 million, which is much closer to the 80/20 plan's. The annuity covers part of every year's spending, so the plan sells less, and the remaining portfolio can keep more of its stock.

That result has conditions. The forecast assumes Morgan lives to 93, and the annuity pays more the longer its owner lives. Buyers who die early leave money behind in the insurer's pool, and those who live long collect it, which is where the high payout comes from. If Morgan died at 70, the plan would have paid $300,000 for about $120,000 of income. The $300,000 is also gone from the balance sheet on the day of purchase. It cannot be sold in an emergency and it does not pass to heirs.

The level payment has a cost too. Morgan's spending grows with [[term:inflation]], and by 2055 it is about 2.1 times its 2028 amount. The annuity pays the same $24,600 every year, so by then it buys about half of what it bought at the start. An annuity with a cost-of-living adjustment avoids that but starts with a much smaller payment.

## Nothing is fully safe

Every safer asset in this lesson carries some risk. The risks are smaller than the risk of holding stock, and they are different in kind.

- **An annuity depends on the insurer.** If the insurer fails, a state guaranty association covers annuity benefits up to a limit, which in most states is at least $250,000 per person per insurer. Morgan's $300,000 premium is above that, so it could be split between two insurers.
- **A pension depends on the employer and the plan.** The Pension Benefit Guaranty Corporation insures most private pensions, but only up to a legal limit, and public pensions are backed by their state or city.
- **Social Security depends on Congress.** The trust fund is projected to run short in the 2030s, which the lesson [Social Security solvency](/learn/social_security_solvency) explores.
- **Treasuries can lose value.** An intermediate Treasury fund falls when interest rates rise, as it did in 2022, and a [[term:nominal]] bond loses buying power to inflation. TIPS protect against inflation, but their price still moves until they mature.
- **Cash loses to inflation slowly.** Money market held for many years earns little more than inflation.

The point of moving down the chart is to hold assets whose risks are not the stock market's. In a year when stocks fall 40%, it matters a great deal whether the rest of the portfolio falls with them.

## Other moves, same axis

Several other common moves are easier to judge once you see them on the same chart.

**A bond ladder** is a set of bonds that mature one after another, one for each year of spending. A ladder of TIPS pays a known amount of inflation-adjusted money each year, as long as each bond is held until it matures. The Moves down plan approximates a ladder with its TIPS and short-term Treasury funds, which sit in the same corner of the chart. Tutilis can hold a bond directly and pays its coupon each year, but the forecast does not yet return a bond's price to its face value when it matures, so a true ladder is shown here with funds.

**Dividend stocks** are still stocks. A fund of high-dividend companies sits near the S&P 500 fund on the chart, and in a crash dividends are cut along with prices. S&P 500 companies cut their dividends by about a fifth from 2008 to 2009. A dividend does not move the portfolio toward cash. The lesson [Too much equity? Stop reinvesting](/learn/too_much_equity_stop_reinvesting) shows a different use for dividends, taking them as cash instead of reinvesting them, which slowly lowers the stock share.

**An emergency fund** sits with money market at the far left of the chart. It is the steadiest holding there, and it earns the least. The lesson [Timing a crash](/learn/sequence_of_returns_crash_timing) shows that a large cash reserve with no rule for when to spend it does little in a crash. A standing rule about what to sell does more.

**A pension** is an annuity that came with a job. If you have one, you already have part of an income floor, and your portfolio can carry more risk than someone's without one.

**Delaying Social Security** is often the cheapest annuity available. Each year of delay past full retirement age raises the benefit by 8%, and the benefit is adjusted for inflation. Spending from the portfolio to delay the claim buys more of that income.

## What the research says

Wade Pfau has written extensively about this question. In *Safety-First Retirement Planning* (2019) and the *Retirement Planning Guidebook* (2021, second edition 2023), he describes two ways of thinking about retirement income. A probability-based approach keeps a diversified portfolio and sets a spending rate it can probably sustain. A safety-first approach first builds a floor of reliable income from Social Security, pensions, annuities and bond ladders, large enough to cover essential spending, and then invests the rest for growth.

Pfau argues that an income annuity can take the place of part of a bond allocation. Bonds and annuities both provide steady income, but the annuity adds risk pooling, which pays more to those who live long. That is the pattern in Morgan's Annuity floor plan, where the annuity covers part of the spending and the rest of the portfolio keeps its stock.

Pfau and Michael Kitces, in *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014), found that sequence risk is concentrated in the years around the retirement date. A portfolio that holds its least stock at retirement and adds stock afterward survived more often than one that held a constant share. That is why the advice to get safer is aimed at the years just before the retirement date.

The economist Menahem Yaari showed in 1965 that a retiree who cares only about their own spending and faces an uncertain lifespan should, under simple assumptions, turn all of their savings into annuities. Few people do, which economists call the annuity puzzle. The reasons include the wish to leave money to heirs, the need for cash in an emergency, and the fact that Social Security is already a large inflation-adjusted annuity.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Works cited — the publications behind the figures</summary>
<div class="lesson-bibliography-body">

- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.
- Wade D. Pfau, *Retirement Planning Guidebook: Navigating the Important Decisions for Retirement Success*, Retirement Researcher Media, 2021; second edition 2023.
- Wade D. Pfau and Michael E. Kitces, "Reducing Retirement Risk with a Rising Equity Glide Path," *Journal of Financial Planning*, January 2014.
- Menahem E. Yaari, "Uncertain Lifetime, Life Insurance, and the Theory of the Consumer," *The Review of Economic Studies*, 1965.

</div>
</details>

## What this cannot tell you

This analysis has limits, and they matter for how far to trust it.

- **The annuity is a purchase already made.** Tutilis models the income an annuity pays and has no step for buying one. The plan starts with the $300,000 already spent, and the payout rate is an estimate rather than a quote.
- **Each plan moves once.** Real advisors often lower the stock share gradually over the five or ten years before retirement, and some raise it again afterward. A plan can do that with a [[term:glide-path|glide path]] of several target allocations, but the risk chart shows only where the portfolio stands at the start of the forecast.
- **The crashes are replays.** Each episode repeats one historical path. The next crash will look different, and inflation is not replayed, which matters most for a level annuity.
- **One household.** A saver with a pension, a much larger portfolio, or much lower spending needs less of a floor than Morgan does.

## What to take away

- The years just before and after retirement are when a crash does the most damage, because spending has to come from selling a falling portfolio. For Morgan, the worst start year for the Global Financial Crisis is the year before retirement.
- Every common way of getting safer moves money toward cash on the Risk vs. Return chart. Less stock, TIPS, short-term Treasuries and cash move the portfolio's star down and to the left. An annuity takes part of the money off the portfolio and turns it into income that sits at the origin. All of them give up some expected return.
- Moving down the chart gives up some of the good outcomes to shrink the bad ones. For a retiree who has already saved enough, the bad outcomes matter more.
- A safe sleeve gives a plan something to sell that has not fallen. In a long crash it delays the day the plan has to sell stock at a loss.
- An income annuity reduces how much has to be sold at all. It costs liquidity, the money it would leave to heirs, and buying power when its payment is level, and it depends on the insurer.
- Nothing is fully safe. Safer assets carry smaller risks of a different kind, which is exactly what makes them useful beside stocks.
