<!--
tutilis-return: lessons/inflation_on_your_plan/prose/en.md
tutilis-locale: en source
-->
# Prices on your plan

[[term:inflation|Inflation]] is a rise in the prices of the things a household buys. Prices rise when people try to buy more than is being produced, when making things costs more, or when people raise prices because they expect prices to rise. [The Reyes household](#canvas-dossier:reyes_prices) starts from a historic default for every growth rate on the plan. Those defaults are reasonable readings of the past. The future can differ from that history, and each rate on this plan is one you can read and one you can change.

Open the plan and [[term:hover|hover]] **Sam's college** on [[nav:cf-table]]. The card names that bill's **Cost growth**. Living expenses, Maya's wages, and the mortgage each carry a rate of their own, and the next section lists them beside the college card. A news story that quotes one inflation number is quoting one basket. This plan is Maya's own list.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Why do the bills on this plan grow at different rates?** See [Several bills, several rates](#several-bills-several-rates).
2. **Why does the mortgage look flat in [[term:nominal|Nominal]] and smaller in Today's $?** See [Nominal and today's dollars](#nominal-and-todays-dollars).
3. **How do I stress only the college bill?** See [Change one bill](#change-one-bill).
4. **How far can one hard year go on the grocery slider?** See [A faster year](#a-faster-year).

</div>
</aside>

## Several bills, several rates

Each bill on this plan grows at its own rate. The cash-flow chart draws the dollars of one year, and the rate itself sits on the item's card. The rate is easier to read on the card than on the chart. Look at the bars above the axis. Those are the incomes, and they get bigger from year to year, with a slight curve along their tops. The bars below the axis grow downward, and their tops form a slight curve as well. A bigger bar is the growth, and the percent for that growth is the number on the card. The slight curve is [[term:compounding]]. Each year's growth is added to the growth that came before.

[[img:prices-cash-flow]]

Here is 2028, with Sam in college. The bars are that year's dollars. [[term:hover|Hover]] **Sam's college** on [[nav:cf-table]] and read **Cost growth**.

[[img:prices-college-card]]

**Cost growth** on that card reads N(4.5%, 2%, μg=4.5%). That is the catalog rate for college prices. The 4.5 percent is the average, the 2 percent is the volatility, and μg<!-- term-skip: volatility — the same sentence says what the 2 percent is --> is the rate the bill compounds at, about 4.5 percent a year across the four years it is on the plan, starting in 2027. College prices have run ahead of the grocery basket for a long time, and the catalog keeps that gap. The **Cost growth** slider on **Sam's college** in [[nav:transforms]] opens near 4.5 percent.

Living expenses rise about 2.8 percent a year. The card for **Living expenses** names that row **Spending growth**, and it reads N(2.8%, 1.5%, μg=2.8%). That is the long-run [[term:cpi|CPI-U]] rate the catalog uses for a household's ordinary spending. Select **Living expenses** in [[nav:transforms]] and the **Spending growth** slider opens on that rate. The picture of the row is below, in [A faster year](#a-faster-year).

Maya's wages rise about 3.5 percent a year until she retires. The card for **Maya's wages** names that row **Growth**, and it reads N(3.5%, 1.5%, μg=3.5%). From 2027 to her last working year the paycheck roughly doubles, which is what about 3.5 percent a year does over those twenty years. The **Growth** slider on **Maya's wages** opens on that rate.

[Growth rates: the system's, and yours](/learn/growth_rates_yours_and_the_systems) is the lesson for a rate the household knows better than the catalog and wants to type in.

The mortgage is the odd one. Hover **Home mortgage** on [[nav:cf-table]]. The **Payment** row is about $17,000 every year the loan is on the plan. Under it, [[term:principal]] rises and interest falls, and the two of them trade places while the sum stays put. The payment follows the amortization schedule, so the mortgage stays off the growth sliders. [Who inflation helps](/learn/inflation_who_it_helps) is where that flat payment becomes the point of the story.

The balance sheet has its own list too. The house, the stock fund in the 401(k), and the [[term:tips]] fund each carry<!-- term-skip: 401k — an account name in a list --> the catalog rate for their own kind. The next lesson spends time on the TIPS fund.

There is no single inflation number in the model, and there is no single inflation number in the prices a household pays. Costs tend to rise together over time, and they rise at different rates.

## Nominal and today's dollars

The mortgage payment is the same number of dollars every year, and those dollars buy less of the grocery basket as prices rise.

The **Display** menu in the top bar has two ways to read a dollar, under **Purchasing power**. **Nominal** shows each amount in the money of its own year. **Today's $** restates every future amount into today's purchasing power.<!-- term-skip: real — the sentence is the definition, and display basis is already pilled --> The choice is [[term:display-basis|display basis]]. It changes the picture and leaves the plan alone. [Real vs nominal returns](/learn/foundations_time_value_real_vs_nominal) is the longer visit to the same pair of readings.

[[img:prices-display-basis|control]]

Stay on Nominal and open [[nav:cf-chart]]. Hover a year. The tip lists **Home mortgage** as one payment, about $17,000, with the principal and the interest on the lines under it. That total is the same in 2027 and in a later year such as 2035. The **Payment** row on the mortgage card is the same number, written once for the whole loan.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

Switch to Today's $. Hover a later year. The same payment is drawn as fewer of today's dollars. This plan restates future dollars at 3.5 percent a year, the reporting rate in its assumptions. A dollar promised twenty years from now is drawn as less than a dollar today, so a payment that is flat in the checkbook looks lighter in today's groceries.

That is the seed of the next lesson. The loan's dollar amount held still. Maya's paycheck rose. The payment's weight fell. Prices can help the person who owes a fixed stack of dollars.

The pictures in this lesson are the Nominal chart. Pick Today's $ in the Display menu when you want the purchasing-power reading.

## Change one bill

College is the bill you can push on its own, and the rest of the plan stays on the rates it already had.

Maya can worry about Sam's four years without deciding that groceries, wages, and the mortgage should all speed up together. [[nav:transforms]] is the place to try that. Unfold **Modifications**. On the Modifiables card, select **Sam's college**.

[[jump:inflation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.cash-flows]]

[[img:prices-college-modifiable|control]]

The editor beside the card has a **Cost growth** slider. It opens near 4.5 percent and runs from 0 to 25 percent. Move it to 12 percent.

[[img:prices-college-editor|control]]

That is a fast rise on this one bill. The cash-flow chart draws the saved plan under Original and that trial under Modified, for the years Sam is in college. Sam's college is the blue band under the axis. On the Modified chart those bars are taller, because that bill grew faster. Living expenses, wages, Social Security, the pension, and the mortgage stay on their own rates.

[[img:prices-college-growth]]

Close Transforms, or clear the change, and the saved plan is the one you opened. The stress test never had to become a new dossier.

A household with three children heading toward college does the same thing on its own plan: select the college line, move that one slider, and read the chart. The other bills keep the rates they had.

## A faster year

A hard year for prices is something you can lay over the grocery bill, and the slider shows how far this plan will take that trial.

Select **Living expenses** on the same Modifiables card.

[[img:prices-living-modifiable|control]]

**Spending growth** opens near 2.8 percent. The slider runs to about three times that rate on either side of where it opened, so this grocery bill can be set near 8 percent, or near 8 percent below zero. Slide it toward the top and watch the living-expense line on Nominal. Everything else holds. That is a household asking what a faster spell of prices would do to its own grocery bill.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

The twelve-month change in CPI-U was 9.1 percent in June 2022, and 14.8 percent in March 1980. The top of this slider, near 8 percent, sits in the neighborhood of that 2022 peak for a single year, and it stops short of 1980. [[term:hyperinflation|Hyperinflation]], in Philip Cagan's 1956 definition, begins in a month when prices rise 50 percent or more. Germany in 1923, Hungary in 1946, Zimbabwe in 2008, and Venezuela in the 2010s passed that line. The slider is a stress for Maya's grocery bill. A month like those sits far above it. [Who inflation helps](/learn/inflation_who_it_helps) writes out the presumed causes of a rise and of a fall, and the drop in United States consumer prices from 1930 through 1933.

</div>
</aside>

The other direction of the same slider is a fall in prices. [Who inflation helps](/learn/inflation_who_it_helps) uses it, together with Maya's paycheck, the pension, and Social Security, to ask who gains when prices rise and who gains when they fall.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Works cited — the publications behind the figures</summary>
<div class="lesson-bibliography-body">

- U.S. Bureau of Labor Statistics, [Consumer Price Index news release for June 2022](https://www.bls.gov/news.release/archives/cpi_07132022.htm). CPI-U rose 9.1 percent over the twelve months ending June 2022.
- U.S. Bureau of Labor Statistics, [Consumer prices up 8.5 percent for the year ended March 2022](https://www.bls.gov/opub/ted/2022/consumer-prices-up-8-5-percent-for-year-ended-march-2022.htm). The table of earlier twelve-month changes includes March 1980 at 14.8 percent.
- Philip Cagan, "The Monetary Dynamics of Hyperinflation," in Milton Friedman, editor, *Studies in the Quantity Theory of Money*, University of Chicago Press, 1956. Hyperinflation begins in the month prices rise by more than 50 percent.

</div>
</details>
