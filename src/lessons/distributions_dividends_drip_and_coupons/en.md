<!--
tutilis-return: lessons/distributions_dividends_drip_and_coupons/prose/en.md
tutilis-locale: en source
-->
# The dividend you never see

Alex holds $200,000 in a dividend fund. The fund yields 3%, so it distributes about $6,000 in the
first year and more as the fund grows. Alex has two choices, and most brokerages present them as a
single checkbox: take the dividend as cash, or reinvest it.

The checkbox looks like it is about convenience. It is not. It changes what shows up on the cash
flow statement, what the reconciliation has to account for, and — in the case of a bond — whether
the household ends the year better off at all.

Switch between the first two plans on the [[term:canvas]]. They are the same household, the same fund, the
same [[term:yield]]. Only the checkbox moves.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

The checkbox is the holding's **Distributions** choice, under fund or stock yields.

[[img:distributions-holding-cash|control]]

*The Dividend Fund on [Dividend as cash](#canvas-dossier:distributions_dividend_cash). Distributions is Spendable, so the dividend arrives as cash the household can spend.*

[[img:distributions-holding-drip|control]]

*The same fund on [Dividend reinvested](#canvas-dossier:distributions_dividend_drip). Distributions is Reinvested, so the dividend buys more of the fund and never becomes cash.*

</div>
</details>

## Taking it as cash

With **Dividend as cash**, the dividend arrives. It shows up in the year's income beside the
salary, and the household can spend it, save it, or let the plan reinvest it as ordinary surplus.

What is easy to miss is where the money came from. A fund's published return is a *total* return —
the price appreciation and the yield together. When the fund pays a dividend, the share price drops
by what was paid. The fund handed over value it was already holding on Alex's behalf. Nothing was
created.

That is why a plan built on chasing yield is not a plan. A 6% yielding fund and a 3% yielding fund
with the same total return leave the household in exactly the same place; the first one just hands
back more of itself each year.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — why yield is a split of the return</summary>
<div class="lesson-math-body">

Write the share price at the start of the year as \(P_0\), at the end as \(P_1\), and the dividend per share as \(D\). The total return is

\[
R = \frac{P_1 + D - P_0}{P_0} = \frac{P_1 - P_0}{P_0} + \frac{D}{P_0}
\]

The first term is the price return and the second is the yield. The price falls by \(D\) when the dividend is paid, so for the same \(R\), every point of extra yield is a point less of price return.

</div>
</details>

## Reinvesting it

Switch to **Dividend reinvested**. The salary is unchanged. Living expenses are unchanged. But the
year's income falls by the whole dividend, because no dividend arrived.

Look at the reconciliation — the panel that proves the year's money adds up. Set the forecaster to
**2030**, which is the year every table below is read from. It grows a new source:

| Side | Segment | Amount |
| --- | --- | ---: |
| source | Incomes | $138,978 |
| source | **Reinvested Distributions** | **$7,030** |
| source | Sales | $9,674 |
| use | Expenses | $115,899 |
| use | Taxes | $32,753 |
| use | **Investments** | **$7,030** |

The dividend and the shares it bought are the same $7,030, entered on both sides. It is a source
because something had to pay for those shares. It is not *income* — it never reached the household,
so the cash flow statement is right not to list it. The reconciliation is where the two facts are
allowed to coexist.

And notice the third line. Alex's spending did not change, but the salary alone no longer covers it,
so the plan sells $9,674 of the fund to make up the difference — after buying $7,030 of the same
fund with the dividend. Reinvesting a distribution you were going to need anyway is a round trip
with a tax bill attached.

## The bill arrives either way

Open the tax statements on the **Dividend reinvested** plan and stay on 2030:

| | Basis | Assessed |
| --- | ---: | ---: |
| Qualified dividends | $7,030 | $1,054 |

The dividend Alex never saw is taxed exactly like the dividend Alex did see. Reinvestment is a
decision about *where the money goes*, not about whether it counts. In a [[term:brokerage|taxable account]], the [[term:drip]]
checkbox creates a bill that has to be paid out of something else.

This is the single most useful thing to know about reinvestment, and it is invisible on a
brokerage statement that only shows the share count going up.

<aside class="lesson-saying" data-saying="small-leak">

The reinvested dividend still costs Alex about $1,054 of tax in 2030, paid from somewhere else. A bill like that comes back every year the holding pays a dividend, and every dollar of it stops compounding.

</aside>

## A bond is a different animal

Now switch to **Coupon reinvested**. Alex holds a $200,000 corporate bond at a 5% coupon instead of
the fund, and the coupon is reinvested. The reconciliation for 2030 reads:

| Side | Segment | Amount |
| --- | --- | ---: |
| source | **Reinvested Distributions** | **$10,000** |
| use | **Investments** | **$10,000** |

The shape is the same as the dividend, and the meaning is completely different. A bond coupon is paid by the
*issuer*, out of the issuer's pocket, on top of the [[term:principal]]. The bond's price is not reduced by
it, the way a fund's share price is. So when the coupon is reinvested, the position grows by
$10,000 that did not previously exist anywhere in Alex's plan. That is real new net worth.

For a dividend, "reinvest" moves money from one pocket to the same pocket. For a coupon,
"reinvest" is the only combination in the whole grid where the reinvestment itself adds something.

The tax statement is different too:

| | Basis | Assessed |
| --- | ---: | ---: |
| Portfolio ordinary (interest) | $10,000 | — |

The coupon is [[term:ordinary-income]]. Alex's [[term:qualified-dividend]] was taxed at the preferential 15% rate;
the coupon is taxed at the marginal ordinary rate, which for this household is higher. Same
$10,000-ish of "income from the portfolio", meaningfully different bills.

## What to take away

- A dividend is not free money. The fund's price falls by what it pays. Yield is a *split* of the
  total return, not an addition to it.
- Reinvesting does not make it disappear. In a taxable account you owe tax on a distribution you
  never received.
- A bond coupon is the exception, and it is the exception because of *who pays it*. The issuer
  pays; the position is untouched; reinvesting it genuinely compounds.
- If you are going to need the cash anyway, reinvesting it just means selling something else later.
