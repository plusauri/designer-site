<!--
tutilis-return: lessons/growth_rates_yours_and_the_systems/prose/en.md
tutilis-locale: en source
-->
# Growth rates: the system's, and yours

Priya is forty-four. She earns a salary, lets a condo to a tenant, pays child support under a court order, and keeps the rest of her savings in a broad US stock fund. Every one of those numbers grows over the years of her plan, and every one of them needs a growth rate before the plan can say anything about her future.

Two plans are open on the [[term:canvas]]: [General](#canvas-dossier:growth_rates_general) and [Advanced](#canvas-dossier:growth_rates_advanced). They describe the same household with the same amounts. The difference is one setting, and how much of the growth Priya decided for herself because of it.

The product is built so that both kinds of planner get what they need. Someone who only wants a sound plan should never have to think about the expected return of a stock fund. Someone who has a considered view of their own local housing market should be able to put it in the plan and see what it costs. This lesson shows how one plan serves both.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power user</p>
<div class="lesson-power-user-body">

Setting your own growth rates is a **Power user** feature. A typical user's plan takes the system's growth rates, which is the General plan in this lesson. To set rates of your own, as the Advanced plan does, turn on **Power user** under [[nav:advanced]] → Application.

</div>
</aside>

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Where do a plan's growth rates come from, and what is the one choice every plan makes about them?** See [One choice, made up front](#one-choice-made-up-front).
2. **Which growth rates can I state myself even when the system supplies the rest?** See [Rates you know better](#rates-you-know-better).
3. **When I state my own rate, which part of it stays the system's?** See [What stays the system's](#what-stays-the-systems).
4. **How do I take over every growth assumption, including the volatility?** See [Taking over every assumption](#taking-over-every-assumption).
5. **How much can one changed market rate move a plan's outcome?** See [What the changes cost](#what-the-changes-cost).
6. **What happens to my rates if I change the setting later?** See [Moving between the two](#moving-between-the-two).

</div>
</aside>

## One choice, made up front

Every growing number in a plan has two parts. The first is its average rate, such as 3.5% a year for a salary. The second is how much that rate varies from year to year, which the product calls [[term:volatility]]. The forecast is a [[term:monte-carlo]] run of a thousand possible futures, and the volatility is what makes those futures differ: in some of them stocks boom early, and in others pay rises stall for a few years. The product supplies both parts for every kind of item from published sources. Spending grows with consumer prices, raises follow the national wage index, and a stock fund follows the long-run record of its market.

Each plan then makes one choice about those rates, and makes it once. The setting is called **Growth assumptions**, and it lives with the plan's other uncommon settings in the **Advanced** panel, on its **Dossier Settings** side.

[[img:growth-rates-advanced-panel-general|control]]

*The Advanced panel for [General](#canvas-dossier:growth_rates_general), with Growth assumptions set to System growths.*

- **System growths** lets the system supply the growth rates. A new plan starts here. You do not have to think about how fast a stock fund or a house should grow, and the plan cannot be pushed off course by a rate typed in by accident. The few rates that are facts about your own household stay yours to state, as the next section shows.
- **Growth overrides** puts every growth rate in your hands, both the average and the volatility. It is the setting for someone with a real reason to disagree with the system.

The reason new plans start on System growths is that a typed growth rate is the easiest way to make a plan say something untrue. A stock fund entered at 10% instead of the system's figure can turn a tight retirement into a comfortable one with no change to anything the household controls. The default keeps that decision out of reach until someone chooses to take it on.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Open **Advanced** at the bottom of the left rail, choose **Dossier Settings**, and pick **System growths** or **Growth overrides** under **Growth assumptions**. The choice is saved with the plan, so each plan in your library can make its own.

</div>
</details>

## Rates you know better

Some growth rates are not a view on the market. They are facts about the household, and the household knows them better than any index can. When a plan accepts the system's growth rates, these four still take a rate from you:

| What grows | Why the household knows it |
| --- | --- |
| Pay from work | You know whether your raises have been fast or slow. |
| Living expenses | You know how your own spending has changed. |
| Rent you collect | The lease says how the rent escalates. |
| Support you pay or receive | The order or agreement says whether it changes. |

The [General](#canvas-dossier:growth_rates_general) plan accepts the system's growth rates, and Priya stated three of these. Her salary grows at 5% a year, because her last several raises have been about that. Her rent rises 3% a year, which is what her lease says. Her child support grows at 0%, because the order fixes the amount. She left her living expenses on the system's rate, since she has no reason to think her spending will run ahead of prices. Her stock fund and her condo are market numbers, and they stay on the system's rates.

You can see every one of these rates without opening an editor. On **Bird's Eye**, select **Cash Flow** at the top. Each income and expense then joins the balance sheet as the present value of its future amounts, and each value sits in a chip. Hover the chip beside **Salary**, **Condo rent**, **Living expenses** or **Child support** to open that item's card, which shows the growth rate it runs at.

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

[[img:growth-rates-birds-eye-cash-flow-general]]

*Bird's Eye in [General](#canvas-dossier:growth_rates_general) with **Cash Flow** selected. Each value is a chip that opens the item's card.*

The salary's card lists the rate Priya stated as an override. It shows her 5% average with the system's 1.5% volatility beside it, which is the distribution the forecast draws her raises from.

[[img:growth-rates-card-salary-general]]

*The card for Priya's salary in [General](#canvas-dossier:growth_rates_general): $140,000 a year in 2026 money, growing at the 5% she stated.*

On the cash-flow statement the salary is about $154,000 in 2027 and about $187,000 in 2031, which is her 5% a year. The rent, net of the property's running costs, grows at the 3% her lease sets.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

To state one of these rates, open the item under **Cash Flows**. Its **Growth** line shows the system's rate with a pencil beside it. Click the pencil, type your own rate, and the plan uses it. The arrow beside the field puts the system's rate back.

[[img:growth-rates-salary-editor-general|control]]

*Priya's salary editor in [General](#canvas-dossier:growth_rates_general). The growth field holds her 5%, with the system's 3.5% shown beneath it for reference.*

</div>
</details>

## What stays the system's

When you state one of these rates, you state its average. How much it varies from year to year stays the system's figure for that kind of item.

That can seem odd for a salary, but it is what keeps the forecast honest. Across a thousand futures, some of Priya's years bring a bigger raise than 5% and some bring a smaller one, and the forecasts where her pay did unusually well or badly sit in her range of outcomes alongside the market's good and bad runs. A volatility of zero would mean that her pay rises by exactly 5% every year in every future, which nobody can promise.

The child support shows the limit of this. Priya's 0% is only the average, so on the General plan the payment still varies a little from one future to the next. A court order does not vary at all. Fixing that takes the other setting.

## Taking over every assumption

Now switch to [Advanced](#canvas-dossier:growth_rates_advanced). This plan is set to **Growth overrides**, and every growth in it can be changed, both the average and the volatility.

Priya made three changes:

- Her salary keeps the 5% average, but its volatility is 4% instead of the system's 1.5%. Much of her pay is a bonus, and a bonus swings from year to year far more than a base salary does.
- Her child support keeps its 0% average with a volatility of zero. The payment is exactly $14,400 in every year of every future, which is what the order says.
- Her condo appreciates at 2% a year instead of the system's 4%. She has watched prices in her neighborhood stay flat for years and expects that to continue.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

With Growth overrides, the growth field on pay, spending, rent and support gains a **Volatility** box beside the rate. Opening the field fills in the system's numbers, and clearing the volatility hands it back to the system. Market items such as the condo and the stock fund open the full growth editor, where both numbers are yours.

[[img:growth-rates-salary-editor-advanced|control]]

*Priya's salary editor in [Advanced](#canvas-dossier:growth_rates_advanced): her 5% rate with the 4% volatility of a bonus-heavy salary.*

</div>
</details>

## What the changes cost

Priya's three changes on the Advanced plan were a wider swing on her bonus-heavy salary, a support payment fixed at exactly $14,400, and a slower 2% view of her condo's appreciation. The first two mostly reshape the range of outcomes: the salary widens it, and the fixed support narrows it a little. The third moves the plan itself. On the balance sheet for 2046 the condo is worth about $648,000 on the General plan and about $438,000 on the Advanced plan.

**Key forecasts** show what that does to Priya's final net worth. The Advanced plan is lower at every point the table reports, from the worst future to the best.

[[jump:key-forecasts]]

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:growth-rates-key-forecasts-general]]

*Key forecasts for [General](#canvas-dossier:growth_rates_general): Priya's final net worth at named points across a thousand futures.*

</div>
<div class="lesson-img-cell">

[[img:growth-rates-key-forecasts-advanced]]

*Key forecasts for [Advanced](#canvas-dossier:growth_rates_advanced): every point sits below the General plan's.*

</div>
</div>

The **net worth distribution** shows the same thing across all thousand futures at once. The two are drawn on the same axis so they can be compared by eye. The Advanced cloud sits further to the left, and the share of futures that succeed falls from 98% to 95%.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:growth-rates-nw-distribution-general]]

*Net worth distribution for [General](#canvas-dossier:growth_rates_general): 98% of futures succeed.*

</div>
<div class="lesson-img-cell">

[[img:growth-rates-nw-distribution-advanced]]

*Net worth distribution for [Advanced](#canvas-dossier:growth_rates_advanced), on the same axis: 95% of futures succeed.*

</div>
</div>

That is the reason full control is a deliberate choice. A single typed market rate can move a plan by hundreds of thousands of dollars. When the view behind it is well founded, that is exactly what the plan should show. When it is a guess, the plan now rests on the guess. The system's rates are there so that nobody takes on that risk by accident.

## Moving between the two

A plan can change its mind. Moving from **Growth overrides** back to **System growths** removes every market override, because that is what choosing the system's rates means. Rates stated for pay, spending, rent and support are kept, and any volatility set on them returns to the system's figure. If Priya moved her Advanced plan back, her condo would return to 4%, her salary and support would keep their 5% and 0% averages, and her support would pick up the small variation described above.

Moving the other way removes nothing. Every rate stays where it was and becomes editable.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Before it removes anything, the app lists the overrides that will go and asks you to confirm. The change is saved with the plan like any other edit.

</div>
</details>

## What to take away

Each plan decides once how its growth rates are set. The system's rates are the right starting point for almost every plan. They come from published sources, they are consistent with one another, and they keep a typed number from quietly deciding the plan's answer.

Your raises, your spending, your rent and your support payments are yours to state under either setting. Stating a rate sets its average, and the year-to-year variation stays the system's until you choose otherwise.

**Growth overrides** gives full control of every assumption, both the average and the volatility. It is the right choice when you have a real reason to disagree with the system, and the forecast will show you exactly what that disagreement is worth.
