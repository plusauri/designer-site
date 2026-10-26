<!--
tutilis-return: lessons/business_sale_at_retirement/prose/en.md
tutilis-locale: en source
-->
# Selling the business when you retire

Alex is a dentist who owns the practice. The practice pays the household's bills today, and it is
also the largest thing Alex owns. A plan that only carried the earnings would say the income stops at
retirement and nothing else happens. A plan that only carried the practice as an asset would let it
sit on the balance sheet forever, growing quietly, never sold. This lesson carries both, and ties
them together: the practice is a real asset with a **planned sale** in the retirement year, and the
earnings are linked to it, so the sale ends them.

Open the [[nav:dossier]] and look at the balance sheet first, then the cash flows. The rest of the
lesson walks the forecast through the year of the sale and the year after it.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How does a plan carry a business as something it owns and will sell?** See
   [The practice as an asset](#the-practice-as-an-asset).
2. **How does selling the business end the income it paid?** See
   [The earnings, linked to it](#the-earnings-linked-to-it).
3. **Why does the sale price appear under Sales rather than as income?** See
   [The year of the sale](#the-year-of-the-sale).
4. **When is the tax on the sale paid, and how is it paid without a paycheck?** See
   [The year after the sale](#the-year-after-the-sale).
5. **How does an inheritance enter the plan, and is it taxed?** See
   [A lump sum on top](#a-lump-sum-on-top).
6. **What does this plan leave out that a real sale would include?** See
   [What this plan is not showing](#what-this-plan-is-not-showing).

</div>
</aside>

## The practice as an asset

Under **Other real assets** on the balance sheet there is a **Dental practice** with the category
*Business interest*. It is valued at what it could be sold for, and it carries a purchase amount,
which is what the gain on a sale is measured against.

[[img:business-sale-card-practice]]

The card's last row is the point of this lesson. **Planned sale** says the practice sells in the
year Alex retires, with five percent of the price going to a broker. The year is anchored to the
retirement rather than typed as a number, so moving the retirement age moves the sale with it.

## The earnings, linked to it

Under **Cash Flows**, the household's income is a single **Self-employment** line, *Practice
earnings*, of $180,000 a year in today's money. There is no wage line beside it. A dentist who owns
the practice draws its net earnings, and that is the whole of the income.

The earnings editor has a **Business** picker, and it names the dental practice. That link is what
lets the sale end the income. Without it the plan would sell the practice and keep collecting its
earnings, which is the kind of quiet contradiction a plan should not be able to hold.

## The year before the sale

Open the [[nav:cf-table]] on **2033**. The practice earnings are the only income line, and the year
looks like every year before it: the earnings come in, living expenses and taxes go out, and what is
left is invested.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

## The year of the sale

Now move to **2034**, the retirement year.

[[img:business-sale-cf-table-2034]]

Three things have changed. There is no income at all, because the earnings ended the year before the
sale. The expenses include a new line, **Dental practice (selling costs)**, the broker's five
percent. And the price of the practice appears under **Sales** rather than under incomes, because a
sale is not income: the household swapped an asset for cash, and its net worth moved by the costs
alone. Almost all of that cash is reinvested the same year, which is the large **Investments**
line.

[[img:business-sale-si-chart]]

The [[nav:si-table]] shows the same year as one tall bar above the axis, the sale, and the
reinvested proceeds below it.

## The year after the sale

Move one more year, to **2035**.

[[img:business-sale-cf-table-2035]]

The tax on the sale arrives here. The forecast pays the tax on earnings during the year they are
earned, the way withholding and quarterly estimates do, which is why 2034 has almost no tax line:
the practice's last year was paid for in 2033. Tax on income that nobody withholds from, such as a
sale, is settled with the next year's tax payment, and the gain on the practice, the price less the
costs and the purchase amount, is a long-term capital gain on the 2034 return. There is still no income, so the bill is paid the way any retiree pays a
bill with no paycheck: holdings are sold. The **Sales** section in 2035 lists the funds that were
sold to cover it, and most of them were bought with the practice's own proceeds the year before.

## A lump sum on top

The plan also carries an **Inheritance** of $250,000 in today's money, arriving in 2038. It is
authored as a **Windfall** cash flow: one amount, one year, and a choice of whether the tax pass sees
it. An inheritance is not income, so it arrives untaxed and is invested like any other surplus.

[[img:business-sale-cf-chart]]

On the [[nav:cf-chart]] the shape of the whole plan is visible at once: the practice earnings as the
only inflow until 2033, nothing at all for four years, the inheritance as a lone bar in 2038, and a
tall tax bar in 2035 that is the sale's bill arriving.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

## Try this

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Open **Transforms** and select **Retirement & forecast end**. Move Alex's retirement age. The sale year moves with it, the earnings end one year earlier or later, and the tax bill follows one year behind the sale.

[[img:business-sale-modifiables|control]]

*Transforms → Modifiables on this plan, Global tab, with Retirement & forecast end selected. Moving that retirement age moves the year the practice sells.*

Then open the practice on the balance sheet and set **Share sold** to fifty percent. Half the practice sells, half keeps growing, and the earnings keep running, because only a full sale ends what the asset carries.

</div>
</details>

[[jump:horizon|modifiable]]

## What this plan is not showing

The plan has no Social Security and no pension, so the years after the sale live entirely on the
portfolio. That is deliberate here, to keep the sale legible, and it is not how a real household
would leave things. A real plan adds the Social Security generator, and the household's living
expenses after retirement usually change too.

The gain is treated as a long-term capital gain in full. A real sale of a practice is often part
goodwill and part equipment, and the equipment part can be taxed differently. The plan does not
split it.
