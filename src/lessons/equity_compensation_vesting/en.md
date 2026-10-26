<!--
tutilis-return: lessons/equity_compensation_vesting/prose/en.md
tutilis-locale: en source
-->
# Equity compensation as it vests

Alex's employer granted 1,200 restricted stock units and 2,000 stock options at the start of 2026,
both in the company's stock, both vesting a quarter at a time over four years after a one-year
cliff. None of it is Alex's yet. A plan that counted it as wealth today would be counting shares
that vanish if Alex leaves; a plan that ignored it would miss four years of income. This lesson
shows the middle: unvested shares are a memo, and each vest is booked in its year as the wages it
is.

Open the [[nav:dossier]]. On the Bird's Eye, each grant has a row under **Assets** with no value
beside it, and hovering the row raises the grant's card. In the desktop app the same cards sit under
**Equity compensation** on the balance sheet.

[[jump:birds-eye]]

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How are unvested stock units and options valued, and why are they not yet net worth?** See
   [Two grants, one stock](#two-grants-one-stock).
2. **How is a vest taxed, and in which year?** See [A vest is wages](#a-vest-is-wages).
3. **What happens to the shares once they vest?** See [Where the shares go](#where-the-shares-go).
4. **What does the plan look like after the last grant has vested?** See
   [Four years, then wages alone](#four-years-then-wages-alone).
5. **What does this plan leave out about stock options and stock purchase plans?** See
   [What this plan is not showing](#what-this-plan-is-not-showing).

</div>
</aside>

## Two grants, one stock

Both grants name the same stock, which is also the brokerage's own *US Equity Market* position. That
matters: the grants follow the stock's simulated price, so a forecast path where the market does
well is a path where the vests are worth more too.

[[img:equity-comp-card-rsu]]

The RSU card values the unvested shares at today's price, $180,000, and says they are **forfeited
if Alex leaves**, **held** into the Brokerage as they vest, and vest in four tranches of 300 from
2027 to 2030. That unvested value is a memo beside net worth, not part of it.

[[img:equity-comp-card-nso]]

The option card is the same shape with a **strike price**. An option is worth the spread between the
stock and the strike, $50 a share today, so 2,000 options are $100,000 unvested. These are **sold**
as they vest, and they expire in 2036.

## A vest is wages

Open the [[nav:cf-table]] on **2027**, the first year after the cliff.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:equity-comp-cf-table-2027]]

Three income lines: Alex's salary, the RSU tranche, and the option tranche. Each vest arrives as
wages, which is how it is taxed. Payroll tax and ordinary income tax apply to it in the year it
vests, whatever Alex does with the shares afterward. The RSU line is 300 shares at that year's
simulated price; the option line is 500 options times the spread over the $100 strike.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Vested shares are taxed as wages on the day they vest, whether you sell them or keep them. Keeping them is the same, for tax purposes, as being paid in cash and using it to buy your employer's stock that day. Only the change in price after the vest is a capital gain.

</div>
</aside>

## Where the shares go

The two grants answer that question differently, and the [[nav:si-table]] for the same year shows
both answers.

[[img:equity-comp-si-table-2027]]

The RSU vest appears as a **linked investment** into the brokerage's *US Equity Market* position:
the wages arrived and were bought straight into the stock, with a cost basis equal to the vest
value. From there the shares are an ordinary holding, growing with the stock and sold when the plan
needs cash, with the gain from the vest price onward taxed as a capital gain.

The option vest has no linked line. It was sold at vest, so its spread is spendable cash, and it is
invested wherever the plan's residual strategy puts surplus.

## Four years, then wages alone

[[img:equity-comp-cf-chart]]

The [[nav:cf-chart]] shows the shape: four taller years while the grants vest, then the salary on
its own from 2031. The grants are gone from the balance sheet's Equity compensation section once
the last tranche has vested.

## Try this

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Open **Transforms** and select **Retirement & forecast end**. Move Alex's retirement to 2029. The grants say unvested shares are forfeited when Alex leaves, so the 2029 and 2030 tranches disappear from the cash flows. Change either grant's **If they leave** to *Vests at retirement* and the remaining shares vest together in the retirement year instead.

[[img:equity-comp-modifiables|control]]

*Transforms → Modifiables on this plan, Global tab, with Retirement & forecast end selected. That row is where the retirement age moves.*

Then open the option grant and set the strike to $200. The stock is at $150, so every tranche is under water at today's price and books nothing. On the paths where the stock climbs past $200 by 2027, the vest reappears.

</div>
</details>

## What this plan is not showing

Incentive stock options are modeled as if they were non-qualified: the spread is taxed as wages at
vest. The alternative minimum tax and the capital-gains treatment of a qualifying disposition are
not modeled, so a plan holding ISOs should read its vest-year tax as the conservative case. An
employee stock purchase plan is not modeled at all.
