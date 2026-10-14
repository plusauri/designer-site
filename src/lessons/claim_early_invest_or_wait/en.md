<!--
tutilis-return: lessons/claim_early_invest_or_wait/prose/en.md
tutilis-locale: en source
-->
# Claim early and invest, or wait?

Homer was born in 1965. He turns 62 next year, which is the first age Social Security retirement benefits can start, and his [[term:fra|full retirement age]] is 67. His statement puts his benefit at about $2,500 a month at 67, in today's dollars. He lives alone on $50,000 a year, and a $1.1 million portfolio covers that spending whether or not Social Security has started.

A reader of the Learning Center asked the question Homer is asking himself: *is it better to take Social Security when I become eligible, or wait, given that the money I could get sooner could be invested?* The usual answer is a break-even age that counts checks. That answer leaves out what the reader asked about. An early check is a check Homer does not have to sell investments for, so more of his portfolio stays invested and keeps earning.

This lesson runs the choice through the forecast, which counts both the checks and what the portfolio earns, and taxes on all of it. It opens two plans that differ in one thing:

- [Treasury fund](#canvas-dossier:claim_invest_treasuries) is Homer claiming at 62 with his portfolio in a short-term Treasury fund, a low-return and low-risk place for money to sit.
- [Stock index fund](#canvas-dossier:claim_invest_stocks) is the same plan with the portfolio in a US stock index fund.

In both plans Homer lives to 85. That lifespan sits between the two plans in [Claim early vs live long](/learn/springfield_claim_longevity), which runs the claim decision against a short life and a long one.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **What does claiming at 62 or at 70 do to the check?** See [62 against 70](#62-against-70).
2. **What does a break-even calculator leave out?** See [Counting checks only](#counting-checks-only).
3. **How do I try a different claim age on a plan?** See [Wait to 70 in Transforms](#wait-to-70-in-transforms).
4. **How much do the early checks put the portfolio ahead, and does waiting catch up?** See [Head start and catch-up](#head-start-and-catch-up).
5. **Does a stock portfolio change the answer?** See [With a stock portfolio](#with-a-stock-portfolio).
6. **What happens to that answer in a poor market?** See [Good markets and poor](#good-markets-and-poor).
7. **At what lifespan does waiting start to win?** See [Where the break-even lands](#where-the-break-even-lands).
8. **How do I test my own portfolio's return?** See [Try your own return](#try-your-own-return).

</div>
</aside>

## 62 against 70

Social Security sets the check by the [[term:claim-age|age you claim at]]. Claiming at 62, five years before a full retirement age of 67, pays 70% of the full benefit for life. Each year of waiting past 67 adds 8%, so claiming at 70 pays 124% of it. The check from waiting is about three quarters larger than the check from claiming at 62, and both rise with [[term:inflation|inflation]] every year after they start.

For Homer that is roughly $21,000 a year from 62 or roughly $37,200 a year from 70, in today's dollars. Claiming at 62 pays him for eight more years. Waiting pays him nothing for those eight years and much more after them. The question is which stream is worth more, and it depends on how long he lives and on what the money does in the meantime.

## Counting checks only

The app has a quick answer built into the Social Security editor. On the [Treasury fund](#canvas-dossier:claim_invest_treasuries) plan, open **Dossier → Cash Flows → Homer Social Security** and unfold **Claim vs lifespan (benefit cash only)**. It adds up the checks Homer collects by any death age you choose, and it shows the age at which claiming one year later would catch up:

[[img:claim-invest-ss-editor-breakeven|control]]

*The Social Security editor with Claim vs lifespan open. Counting checks only, a claim one year later catches up if Homer lives to 76. The panel says plainly that it ignores taxes and portfolio reinvestment.*

That panel gives the answer most break-even calculators give, and it is a sound first look. It treats a dollar received at 62 as worth the same as a dollar received at 80, though. A check that arrives early lets Homer leave a dollar of his portfolio invested that year, and that dollar keeps earning. The forecast counts it, so the forecast's answer moves with the portfolio's return.

## Wait to 70 in Transforms

[[nav:transforms]] is where you change a plan for a what-if and see the result beside the original. On the [Treasury fund](#canvas-dossier:claim_invest_treasuries) plan, open Transforms, pick **Homer Social Security** under Modifiables → Cash Flows, and set the claim to age 70:

[[jump:claim-age]]

[[img:claim-invest-modifiables-70|control]]

*Modifiables with Homer Social Security selected after moving the claim to 70. The value column now shows about $37,200 a year, the larger check the later claim pays.*

Compare **Original** and **Modified** on the [[nav:cf-chart]] at 2027. On the left the checks start at once. On the right nothing arrives until 2035, so the portfolio pays all of the living spend for eight years:

[[img:claim-invest-cash-flow-2027]]

*The [[nav:cf-chart]], claim at 62 under Original beside claim at 70 under Modified. The green Social Security bars start in 2027 on the left. On the right they start in 2035 and stay taller for the rest of the plan.*

## Head start and catch-up

Move to the [[nav:bs-chart]] and scrub to 2035, the year Homer turns 70. This is the head start the reader was asking about. Eight years of early checks have left the claim-at-62 portfolio about $170,000 larger, at roughly $1.37 million against $1.20 million:

[[img:claim-invest-balance-sheet-2035]]

*The [[nav:bs-chart]] at 2035 on one shared scale. On the left the portfolio grows gently from the start. On the right it shrinks for eight years while it pays every bill, then climbs faster once the larger checks begin.*

From 70 on, the larger check does the work. Each year it pays about $16,000 more in today's dollars than the early claim does, and that gap grows with inflation. **Re-simulate** and read **Key Forecasts** to see where the race ends. At 85 the larger checks have more than closed the gap. On the [[term:gmf|North Star]] row, waiting to 70 ends ahead by about $70,000, at roughly $1.59 million against $1.52 million:

[[jump:key-forecasts]]

[[img:claim-invest-treasuries-key-forecasts]]

*Key Forecasts, claim at 62 beside claim at 70, on the Treasury portfolio. The card rounds both sides to whole millions, so click a row, or [[term:hover|hover]] it, for the exact figure. Every row is higher on the right.*

A short-term Treasury fund earns too little for the early checks to pay for the smaller check over a life that runs to 85.

## With a stock portfolio

Switch the [[term:canvas]] to the [Stock index fund](#canvas-dossier:claim_invest_stocks) plan. Everything is the same as the Treasury plan except the [[term:brokerage|brokerage]] holding, which is a stock index fund in the US total market growth category. The holding's growth category is where its expected return comes from:

[[img:claim-invest-stocks-holding|control]]

*The holding editor for Stock Index Fund. Its growth category is US total market, and the return that category is expected to earn is shown beside it.*

Make the same move in Transforms: set Homer Social Security to claim at 70, **Re-simulate**, and read Key Forecasts side by side.

[[img:claim-invest-stocks-key-forecasts]]

*Key Forecasts, claim at 62 beside claim at 70, on the stock portfolio. The card rounds both sides to the same millions, so click each row for the exact figures in the table below.*

The answer on the North Star path has turned around. With the early checks staying invested in stocks, claiming at 62 ends about $50,000 ahead, at roughly $3.31 million against $3.26 million. The reader's instinct holds on the middle path: in stocks, the money the early checks keep invested out-earns the larger check for a life that ends at 85.

## Good markets and poor

The North Star is one path. Key Forecasts also shows where the other simulated futures land, and the rows that matter most here are Q4, the 75th [[term:percentile|percentile]], where markets were kind, and Q2, the 25th percentile, where they were not:

| Key Forecasts row | Claim at 62 | Wait to 70 | Which ends ahead |
|---|---:|---:|---|
| Q4, a good market | about $6.11 million | about $5.87 million | Claiming at 62, by about $240,000 |
| North Star | about $3.31 million | about $3.26 million | Claiming at 62, by about $50,000 |
| Q2, a poor market | about $1.73 million | about $1.81 million | Waiting to 70, by about $75,000 |

In a good market the early checks were invested in a rising portfolio, and they win by a wide margin. In a poor market they were invested in a falling one, and the larger check from waiting is what holds the plan up. The Net Worth Distribution shows the same split from the far end. Success is 99% with the claim at 62 and 100% with the claim at 70, because the few paths that run out of money belong to the early claim:

[[img:claim-invest-stocks-distribution]]

*The Net Worth Distribution, claim at 62 beside claim at 70, on the stock portfolio. The two clouds look alike in the middle. The early claim reaches further right in the best markets and has the failing paths at the far left.*

The early checks can earn a return, but the bigger check from waiting is paid for life. It rises with inflation and it does not fall when the market does. Waiting works like insurance against a poor market and a long life, and the good-market upside it gives up is what that insurance costs.

## Where the break-even lands

Running the same pair at other lifespans shows where waiting starts to win on the North Star path. With the Treasury fund, waiting to 70 ends ahead for anyone who lives to about 82 or longer. With the stock index fund, waiting ends ahead only from about 88 on.

| Portfolio | Waiting to 70 wins on the North Star from about |
|---|---:|
| Short-term Treasury fund | 82 |
| US stock index fund | 88 |

A higher return moved the break-even about six years later. That is the reader's point, and it is a real one. It is also a statement about the middle path only. On the Q2 row the stock plan's break-even is earlier, because a poor market takes back the return the argument rests on.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

The 8% a year that waiting past full retirement age adds is called a delayed retirement credit, and it stops at 70. Waiting past 70 earns nothing more, which is why 70 is the latest age worth comparing.

</div>
</aside>

## Try your own return

Your portfolio is probably neither all Treasuries nor all stocks. You can test a return of your own without editing the plan. In [[nav:transforms]], pick the portfolio holding under Modifiables → Holdings and scale its growth up or down, then make the claim edit again:

[[jump:mu|modifiable]]

If a modest change in return flips which claim age wins, the decision is close, and other things deserve more of the weight. How is your health, and how long did your parents live? Would a spouse inherit the larger check? How much would a poor market early in retirement hurt?

## What this does not claim

This lesson does not say that everyone should wait, or that everyone should claim early and invest. It shows how the answer depends on lifespan, on the return the early checks earn, and on how bad a bad market is.

The plans are lean on purpose. Homer is single, so there is no spousal or survivor benefit, and for a married couple the survivor keeps the larger of the two checks, which is a common reason for the higher earner to wait. Tutilis models each person's own benefit but not spousal or survivor benefits. Homer has no wages after 62, so the earnings test that can hold back an early benefit while someone is still working does not apply to him.

The forecast also counts taxes. A Treasury fund in a taxable account pays interest that is taxed every year, while a stock index fund pays a small dividend and defers most of its gain, so part of the stock plan's advantage is a tax advantage. Your own accounts may hold the portfolio differently.

## Sources

The claim-age percentages come from the Social Security Administration:

- Social Security Administration, [Starting your retirement benefits early](https://www.ssa.gov/benefits/retirement/planner/agereduction.html), for the 70% paid at 62 when full retirement age is 67.
- Social Security Administration, [Delayed retirement credits](https://www.ssa.gov/benefits/retirement/planner/delayret.html), for the 8% a year added between full retirement age and 70.

## Where to go next

| Topic | Lesson |
|---|---|
| The same decision against a short life and a long one | [Claim early vs live long](/learn/springfield_claim_longevity) |
| What Q2, Q4 and the North Star are | [Monte Carlo, from the North Star to the spread](/learn/foundations_simulation_percentiles_gmf) |
| A crash in the first years of retirement | [Timing a crash: cash reserve or rebalancing?](/learn/sequence_of_returns_crash_timing) |
| Whether Social Security will pay in full | [Will Social Security be there?](/learn/social_security_solvency) |
