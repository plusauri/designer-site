<!--
tutilis-return: lessons/cogilis_what_kind_of_plan/prose/en.md
tutilis-locale: en source
-->
# What kind of plan is this? Where the classifiers say to look

A forecast prints hundreds of numbers, and most of them are fine. When you ask a Cogilis assistant to look over your plan, it does not start by reading all of them. It first asks the engine what kind of plan it is looking at, and lets the answer choose the few tables worth reading.

This lesson shows that first step on two households with very different shapes. The Springfields are a married couple with three kinds of account and Social Security ahead. Maya Reyes is a single parent whose home is half of what she owns, and her son Sam starts college next year. Both are on the [[term:canvas]], and both ask their assistant the same thing: look over the plan and tell me what matters.

As in the other Cogilis lessons, the commands name built-in plans with `--sample`, so you can paste any of them into a Cogilis folder and get exactly the output shown. In your own session the assistant names your plan with `--dossier`.

## Asking what kind of plan it is

The engine's answer is a table of classifiers. Each classifier looks at one property of the plan and places it in exactly one band. The assistant runs it before anything else.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant asks what kind of plan this is</p>
<div class="lesson-ai-reply-body">

Before I read any forecast numbers, I asked the engine what kind of plan yours is:

[[cli:classifiers-springfield]]

</div>
</aside>

Every row has the same five columns. **Band** is where the plan landed. **Measure** is the number the band was cut from, and **Why** says how that number was computed and gives the cut points, so you can see how close the plan sits to the next band. **Cost** says what the classifier had to read. The balance sheet rows read only what the plan owns and owes today. The plan sketch rows read its income and spending year by year, in today's dollars. The forecast and sweep rows read a forecast of the plan on the [[term:gmf|GMF]] path.

The assistant reads the bands as a list of places to look. It does not read them as a verdict on the plan.

## The Springfields

Start with the rows about strain on the portfolio. **WithdrawalStrain** and **SequenceOfReturnRisk** are both Low: the first retired years ask little of the Springfields' investments. **TaxDiversification** is AllThree, so they hold money in taxable, [[term:tax-deferred]] and [[term:tax-free]] accounts and can choose which to draw from.

Two rows are High. **PortfolioDependence** is High because once they retire, Social Security covers only about a quarter of their spending, and the portfolio pays the rest. Its own Why column says that reliance on its own is not a concern. It only matters if the portfolio cannot carry the spending, and the two strain rows say that it can.

That leaves **CliffProximity**, also High. Its measure lists the years the Springfields' income sits just under a line where a tax or a premium steps up: an [[term:irmaa|IRMAA]] tier on Medicare [[term:premium|premiums]] in six years from 2047, and the [[term:niit|NIIT]] floor and the Additional Medicare floor in a few more. The workspace's instructions pair this band with the [[term:cliff]] radar for one of the years it names, so the assistant looks at 2047.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant checks the tax lines in 2047</p>
<div class="lesson-ai-reply-body">

Your income comes close to a tax line in 2047, so I checked how much room is left under it:

[[cli:cliff-radar-springfield-2047]]

</div>
</aside>

The **Distance** column is the room left under the IRMAA tier that year. A [[term:roth-conversion|Roth conversion]] or a large sale in 2047 would use that room up, and going over a tier raises the year's Medicare premiums by the whole step. **RothConversionPotential** is Moderate for the same household, so the two rows point at one question. For the Springfields, what matters is when they take income in retirement, and from which account.

## Maya Reyes

The same command on Maya's plan reads very differently.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The same question about Maya's plan</p>
<div class="lesson-ai-reply-body">

Before I read any forecast numbers, I asked the engine what kind of plan yours is:

[[cli:classifiers-reyes]]

</div>
</aside>

**Liquidity** is High: about half of Maya's gross assets are her home, and a home cannot pay a bill without being sold. **LeverageExposure** is Moderate because what she still owes on the mortgage is about a quarter of her gross assets. Neither row is a problem on its own, but together they say that the money she can actually spend is a smaller share of her wealth than her net worth suggests.

**WithdrawalStrain** is High, with a measure of 6.2% drawn in 2048, her first year without wages. For a plan that leans on its investments like that, the workspace's instructions say to look at how hard the plan draws on them in each year.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant looks year by year</p>
<div class="lesson-ai-reply-body">

Your plan leans on its investments, so I looked at how hard it draws on them in each year:

[[cli:withdrawal-rate-reyes]]

</div>
</aside>

The table tells a different story from the band. The sketch behind the band is a quick estimate that runs no forecast, and the forecast's own rate for 2048 is about half of it. The heavy years are elsewhere. From 2027 to 2030 the rate runs between 7% and 9.5%, and from the early 2050s it climbs every year as the balance shrinks, passing 7% in 2062. The negative rates in between are the years when she puts more into her investments than she takes out.

The heavy years start next year, so the assistant shows one of them.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">One of the heavy years</p>
<div class="lesson-ai-reply-body">

Here is 2028, the second of Sam's four college years:

[[cli:cash-flow-reyes-2028]]

</div>
</aside>

Maya's wages fall short of her spending and taxes by about the cost of **Sam's college**. The gap is paid by selling holdings, and the **Sales** rows list which ones. You can see the same four years on the canvas. Switch to the **Maya Reyes** chip and look at the [[nav:cf-chart]].

The band was right that the plan leans on its investments. The forecast showed where. The first strain comes two decades sooner than the band's measure suggested. For Maya, what matters is paying for college without drawing down the savings that her retirement depends on.

## A band is where to look

The two households asked the same question and got two different first answers, one about taxes and one about cash. That is what the classifiers are for. They let the assistant spend its attention where the plan is unusual, instead of reading every number and judging each one itself.

The workspace's instructions hold the assistant to three rules when it uses them:

- **It quotes a band with its measure** and says which cut point the plan fell under. "CliffProximity is High" says much less than "income sits just under an IRMAA tier in six years from 2047".
- **It never offers a band as an answer.** A band says where to look, and the answer comes from the table it points to. Maya's plan shows why: the band's year was the wrong year.
- **It explains `Undetermined`.** A classifier that could not decide says why in its Why column, often because the plan leaves something out. The assistant passes that on rather than skipping the row.

There is a faster version of the same table. `dossier.classifiers` skips the forecast, so its forecast and sweep rows read `Undetermined` with the measure `no forecast`, and the rest are identical. The assistant uses it for a quick look across several plans, and `forecast.classifiers` once it has picked the one to work on.

The lesson *Asking about your plan* follows one question from start to finish, and *Checking the answer* covers how to re-run any of these commands yourself.
