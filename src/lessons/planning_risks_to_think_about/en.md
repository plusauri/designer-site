<!--
tutilis-return: lessons/planning_risks_to_think_about/prose/en.md
tutilis-locale: en source
-->
# The risks to think about

A financial plan is a bet on one future, and the future it bets on will not arrive exactly as written. Markets fall, prices rise, people live longer than they expected, and laws change. Each of these is a risk, and every plan is exposed to all of them, but not equally: the shape of a plan decides which ones can do it real harm. This lesson lays out the risks worth thinking about, the kinds of plans each one hits hardest, and where to test each one in Tutilis. It starts with two retirees who have the same budget and very different weak spots.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Who are Dana and Lee, and how do their plans differ?** See [Dana and Lee](#dana-and-lee).
2. **How do I test a risk on a plan?** See [Test a risk](#test-a-risk).
3. **Why does the same crash hurt one plan and barely touch the other?** See [The same crash, twice](#the-same-crash-twice).
4. **Which risk is each plan's weak spot?** See [Where each plan is weak](#where-each-plan-is-weak).
5. **What are the risks to think about, and which plans do they hit hardest?** See [The map of risks](#the-map-of-risks).
6. **What can a forecast not test?** See [What a forecast cannot test](#what-a-forecast-cannot-test).

</div>
</aside>

## Dana and Lee

Dana and Lee are both 60, both single, and both plan to retire at 62, in 2028, and to spend $70,000 a year, rising with prices. Both will claim Social Security at 67. The rest of their plans differ.

| | Dana - Savings Alone | Lee - Fixed Pension |
|---|---|---|
| Saved | About $1.3 million | About $590,000 |
| Stocks in the mix | About 80% | About 37% |
| Pension | None | $42,000 a year for life, with no cost-of-living raise |

- [Dana - Savings Alone](#canvas-dossier:risks_savings_alone) is Dana's plan. Everything Dana spends before Social Security, and most of it after, comes out of savings.
- [Lee - Fixed Pension](#canvas-dossier:risks_fixed_pension) is Lee's plan. A pension from a former employer covers more than half of Lee's spending at first, so Lee's savings are smaller and held mostly in bonds.

As planned, the two plans are about equally sound. Over 1,000 simulated futures, **Dana - Savings Alone** succeeds on about 84% of paths and **Lee - Fixed Pension** on about 86%. The plans have no state selected, so every tax in this lesson is federal.

## Test a risk

A forecast already carries ordinary uncertainty: each simulated future draws its own returns, and the spread of outcomes shows it. Some risks are not ordinary years, though. They are one specific bad event, and they are tested by laying that event over the plan. That is what [[nav:transforms]] is for. Its Modifiables card lists the events you can lay over a plan without changing the plan itself.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

[[img:risks-modifiables|control]]

</div>
</details>

This lesson uses four of them on both plans:

- **Sequence-of-returns risk** (the **Crashes/SOR Risk** row) with the dot-com bust of 2000, starting in 2028, the year both retire. The episode replays three falling years for stocks, then the recovery.
- **Interest-rate shock**, with rates two points higher from 2028 for five years.
- **Social Security shortfall**, paying 83% of every benefit from 2034, the Trustees' projection for the combined trust funds. [Will Social Security be there?](/learn/social_security_solvency) explains where that number comes from.
- **Retirement & forecast end**, with the death age moved from 92 to 100.

## The same crash, twice

Turn on the dot-com bust for [Dana - Savings Alone](#canvas-dossier:risks_savings_alone). Transforms draws the plan as written beside the plan with the crash.

[[img:risks-bs-savings-crash]]

*Dana - Savings Alone, as planned (left) and with the dot-com bust from 2028 (right), on one scale. The crash takes about $550,000 off net worth by 2030, and on this path Dana ends the plan with about $410,000 instead of about $2 million.*

The crash lands in the worst possible years for Dana. Dana has just stopped earning, Social Security is five years away, and every dollar spent comes from a portfolio that is mostly stocks and falling. Selling shares at low prices to pay the bills leaves fewer shares to recover. That is [[term:sequence-of-returns|sequence-of-returns risk]], and it is largest for an early retiree with a large stock share and no other income.

Now switch to [Lee - Fixed Pension](#canvas-dossier:risks_fixed_pension) and turn on the same crash.

[[img:risks-bs-pension-crash]]

*Lee - Fixed Pension, as planned and with the same crash, on one scale. The gap is about $45,000 in 2030.*

Lee barely notices. The pension pays most of the bills in the crash years, so Lee sells little, and most of what Lee owns is bonds, which held up while stocks fell. Over 1,000 futures, the crash lowers Lee's success rate by less than two points and Dana's by about nineteen.

## Where each plan is weak

Run all four tests on both plans and read the success rate from the outcome cards each time.

| Test | Dana - Savings Alone | Lee - Fixed Pension |
|---|---:|---:|
| As planned | 84% | 86% |
| Dot-com bust at retirement | 65% | 85% |
| Rates two points higher for five years | 82% | 88% |
| Social Security paid at 83% from 2034 | 78% | 66% |
| Living to 100 | 68% | 52% |

Each plan has its own weak spot. Dana's is a crash at the start of retirement. Lee's is a long life and a Social Security cut, and both of those come back to one thing about Lee's pension.

[[img:risks-cf-pension]]

*Lee - Fixed Pension's cash flows. From 2028 to 2032 the pension is the only income, and it is the same $42,000 every year. Living expenses grow from about $76,000 in 2029 to about $135,000 in 2050, so the share the pension covers shrinks every year, and the sales from savings grow from about $16,000 in 2034 to about $55,000 in 2050.*

The pension pays for life, but it pays the same number of dollars each year, and each year those dollars buy less. That is [[term:inflation|inflation]] working slowly, and it is why a longer life costs Lee more than it costs Dana: every extra year is a year when the pension covers less and Lee's smaller savings cover more. A Social Security cut lands on the same gap. Dana's savings, mostly in stocks, are expected to grow faster than prices, so Dana has more room for both.

The rate shock barely moves either plan, and it nudges Lee's up. Bond prices fall when rates rise, but cash and bonds then earn more for the years that follow, and Lee holds a lot of both. [Interest rates: the price of money in your plan](/learn/interest_rates_on_your_plan) shows the same thing on a bond-heavy plan.

<aside class="lesson-saying" data-saying="free-lunch">

Lee's pension and bonds are what made the crash harmless, and they are also what leave Lee exposed to inflation and a long life. Every protection against one risk is paid for with exposure to another.

</aside>

None of this says one plan is better. It says a plan's shape decides which risks matter for it, and those are the ones to test first.

## The map of risks

The table lists the risks most worth thinking about in a long-range plan. Each risk's name is a glossary word: [[term:hover|hover]] it for the definition. The second column names the plans each risk hits hardest, the third says where to test it, and the fourth links to the lesson that treats it on a plan.

| Risk | Plans most exposed | Test it in Tutilis | Lesson |
|---|---|---|---|
| [[term:volatility\|Market risk]] | A large stock share and a short time until the money is needed | Risk panel, and the spread of outcomes | [Risk and return](/learn/risk_and_return) |
| [[term:sequence-of-returns\|Sequence of returns]] | Early retirees with a large stock share and no pension | Sequence-of-returns risk, at retirement | [Timing a crash](/learn/sequence_of_returns_crash_timing) |
| [[term:retirement-date-risk\|Retirement-date risk]] | Savers in their last five to ten working years, mostly in stocks | Sequence-of-returns risk, before retirement | [Getting safer as retirement approaches](/learn/safer_approaching_retirement) |
| [[term:behavior-risk\|Behavior risk]] | Investors with no written rule for a fall | The plan's glide path, written down in advance | [Stay the course](/learn/bogleheads_stay_the_course) |
| [[term:longevity-risk\|Longevity risk]] | Single people on savings alone, and anyone whose lifetime income is flat | Retirement & forecast end, with a later death age | [Claim early vs live long](/learn/springfield_claim_longevity) |
| [[term:inflation\|Inflation]] | Fixed pensions, long retirements, and large cash holdings | Each bill's growth rate | [Prices on your plan](/learn/inflation_on_your_plan), [Who inflation helps](/learn/inflation_who_it_helps) |
| [[term:interest-rate\|Interest-rate risk]] | Long-term bond funds, variable-rate debt, and savers who live on interest | Interest-rate shock | [Interest rates](/learn/interest_rates_on_your_plan) |
| [[term:credit-risk\|Credit risk]] | Bond holdings in corporate or high-yield bonds, or in one state's municipal bonds | Not modeled as a default; a bond category carries price swings only | [When bracket-filling stops working](/learn/hnw_when_bracket_filling_stops) |
| [[term:fx\|Currency risk]] | Income, savings or spending in another currency, including a retirement abroad | The currency-risk model | [Currency risk in the forecast](/learn/currency_risk_in_the_forecast) |
| [[term:concentration-risk\|Concentration risk]] | Households with stock awards, a business, or one large inherited holding | Risk panel, item by item | [Equity compensation as it vests](/learn/equity_compensation_vesting), [Selling the business](/learn/business_sale_at_retirement) |
| [[term:liquidity\|Liquidity risk]] | Wealth held in a home or a business, and early retirees whose savings are in retirement accounts | A cash reserve in the plan | [The five-year retirement runway](/learn/camp_five_year_retirement_runway) |
| [[term:policy-risk\|Policy risk]] | Plans that lean on Social Security, large [[term:traditional\|traditional]] balances, and high-net-worth households | Social Security shortfall, Wealth tax | [Will Social Security be there?](/learn/social_security_solvency), [A wealth tax on your plan](/learn/wealth_tax_what_if) |
| Health and [[term:ltc\|long-term care]] | Early retirees before Medicare, and single people without family nearby | Healthcare expenses by phase | [Healthcare expense phases](/learn/healthcare_expense_sample) |
| [[term:survivor-risk\|Survivor risk]] | Couples whose income depends on one pension or one large Social Security benefit | An earlier death age for one partner | [Life insurance on the plan](/learn/life_insurance_on_the_plan) |
| [[term:counterparty-risk\|Counterparty risk]] | A large pension from one employer, or a large annuity from one insurer | Not modeled | None yet |

Two things on the list are not risks at all, and they are worth naming because they are often confused with one. A fund's fees and the tax on its distributions are **certain**: they come out every year whatever the market does. [Costs you keep paying](/learn/bogleheads_costs_you_keep) treats them as what they are, a cost you can measure and choose.

Most of the risks above are handled the same few ways. [[term:diversification|Diversification]] spreads market and concentration risk, and a simple diversified portfolio is in [The three-fund portfolio](/learn/three_fund_portfolio). Income that lasts for life and rises with prices, such as Social Security claimed later, protects against longevity and inflation. A cash reserve handles liquidity, and a written rule handles behavior. Each of these costs something, so the plan's own weak spots decide which are worth paying for.

## What a forecast cannot test

Some risks on the map have no test in a forecast, and some have no lesson yet.

- **A default or a failure.** Tutilis models a bond's price swings but not a borrower failing to pay, and a pension or annuity always pays as written. Credit and counterparty risk are judged outside the plan: by spreading bonds across many issuers, and [[term:annuity|annuities]] across insurers, and by knowing the limits of the guarantees behind them.
- **Long-term care.** A plan can carry a late-life care expense, but the Learning Center has no lesson on it yet, and it is one of the largest costs a retirement can face.
- **Losing a job or the ability to work** before the planned retirement date. Moving the retirement age earlier in **Retirement & forecast end** comes close, and it is a good test for anyone in their last working decade.
- **Several risks at once.** The four tests above were run one at a time. A real decade can bring a crash, high inflation and a benefit cut together. Transforms lets you stack a crash with a rate shock, and the hardest test of a plan is the combination its own weak spots point to.
- **The rate shock moves returns, not prices.** It shifts what bonds, cash and stocks earn. It does not raise what your bills cost, which is each bill's own growth rate.

## What to take away

Every plan carries every risk, but not equally. A plan that pays for retirement from a stock-heavy portfolio is most exposed to a crash in its first years. A plan built on a flat pension shrugs off the crash and is exposed instead to inflation, a long life and changes in the law. Find your plan's weak spots by its shape, test those first in Transforms, and pay for protection against the risks that can actually hurt it.
