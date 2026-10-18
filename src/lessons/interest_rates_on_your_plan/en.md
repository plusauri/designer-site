<!--
tutilis-return: lessons/interest_rates_on_your_plan/prose/en.md
tutilis-locale: en source
-->
# Interest rates: the price of money in your plan

An [[term:interest-rate|interest rate]] is the price of money. A borrower pays it to a lender each year for the use of the money, as a share of the amount borrowed. When you put savings in a money-market fund, you are the lender, and the rate is what you are paid. When you take out a mortgage, you are the borrower, and the rate is what you pay.

It helps to think of money as something you can buy. If you walk into a bank and say "I'd like to buy some money," the bank will sell it to you, and the interest rate is the price tag. Some years money is cheap, and some years it is expensive. That is a different question from the one in [Currency risk in the forecast](/learn/currency_risk_in_the_forecast), where you say "I'd like to exchange some money" and the exchange rate decides how many euros a dollar buys.

The price of money reaches a plan through every holding at once, and not in the same direction. A rise makes a bond fund worth less this year and pays it more in every year after. Cash earns more right away. Stocks may fall too, or may shrug it off, depending on why rates moved. A bond held to maturity does not change at all. This lesson puts a rate rise and a rate cut on one household and follows each of those effects through the plan.

Morgan is 59 and plans to retire in 2030, at 63. There is about $1.24 million saved. The [[term:401k|401(k)]] holds a total-market stock fund, a long-term Treasury fund and an intermediate Treasury fund. A [[term:brokerage]] account holds more of the stock fund and one 10-year Treasury note bought at issue, which Morgan intends to hold until it matures in 2036. A money-market account holds $100,000 of cash. Spending is $80,000 a year in today's dollars, and Social Security starts at full retirement age.

The lesson opens two plans:

- [Long bonds](#canvas-dossier:rates_bond_heavy) is Morgan's plan as it stands.
- [Shorter bonds](#canvas-dossier:rates_short_bonds) is the same plan with the long-term Treasury fund replaced by a short-term Treasury fund of the same size. Everything else is unchanged.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Who decides what interest rates are?** See [The price of money](#the-price-of-money).
2. **How do I see what a rate rise would do to my plan?** See [Put a rate shock on a plan](#put-a-rate-shock-on-a-plan).
3. **Why does a bond fund lose money when rates rise, and does it get it back?** See [Bond funds fall, then pay](#bond-funds-fall-then-pay).
4. **Is a bond I hold to maturity safer than a bond fund?** See [A bond held to maturity](#a-bond-held-to-maturity).
5. **What happens to my cash and my stocks?** See [Cash and stocks](#cash-and-stocks).
6. **Is a rate cut good news, and does it matter how long a rise lasts?** See [Rises, cuts and how long](#rises-cuts-and-how-long).
7. **Would shorter bonds protect me?** See [Shorter bonds](#shorter-bonds).
8. **What does the shock not include?** See [What the shock leaves out](#what-the-shock-leaves-out).

</div>
</aside>

## The price of money

Interest rates are set partly by a central bank and partly by the market. In the United States, the Federal Reserve sets the shortest rate directly. Its federal funds rate is what banks charge each other overnight, and money-market funds and savings accounts follow it within weeks. The Fed raises it to cool an economy that is running hot, and lowers it to support one that is slowing.

Longer rates are not set by anyone. The [[term:yield]] on a 10-year Treasury note is whatever buyers and sellers agree on, and it reflects three things: where they expect short rates to go over those ten years, what they expect [[term:inflation]] to be, and how much extra they want for tying their money up for longer. The Fed influences long rates mostly by saying what it plans to do. When it signals a path for its rate in advance, which is called forward guidance, long rates often move on the announcement, well before the short rate itself changes. So long rates have a life of their own. They can rise while the Fed is cutting, if the market expects more inflation or more government borrowing.

The supply of government debt matters too. When the Treasury borrows more through long bonds rather than short bills, buyers have more long bonds to absorb and may want a higher yield to take them. Since 2024 the Treasury has also bought back some of its own older bonds on a regular schedule, which helps those bonds trade smoothly. Neither of these is a lever a household can pull, but both are reasons a long rate can move when the Fed has done nothing.

Tutilis starts from today's rates. The growth assumptions for cash and bond categories are built from the Treasury yield curve: the money-market category expects 3.80% a year because that is roughly what a 3-month Treasury bill pays, and the long-term Treasury category expects 5.18% because that is roughly what a 30-year Treasury pays. You can see each holding's expectation in the **Spec.** column of the realized-returns check<!-- term-skip: realized-gain — the name of the returns check, not a realized gain --> later in this lesson. A forecast holds those expectations steady. A rate shock is how you ask what happens if they move.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — how far rates have moved</summary>
<div class="lesson-reference-body">

| Period | What happened |
|---|---|
| 1979–1981 | The Fed under Paul Volcker pushed the federal funds rate close to 20% to break inflation. The 10-year Treasury yield passed 15% in 1981. |
| 1994 | The Fed raised its rate from 3% to 5.5% in a year of steady growth. Bonds had one of their worst years, and the S&P 500 ended roughly flat. |
| 2008–2015 | The Fed held its rate near zero after the financial crisis. |
| 2020–2021 | Near zero again. The 10-year yield fell close to half a percent in 2020. |
| 2022 | The Fed raised its rate from near zero to above 4% to fight inflation. Long-term Treasury funds lost roughly 30%, and the S&P 500 lost about 18%. |

The rate histories are on FRED, the St. Louis Fed's data site: the [federal funds rate](https://fred.stlouisfed.org/series/FEDFUNDS) and the [10-year Treasury yield](https://fred.stlouisfed.org/series/DGS10).

</div>
</details>

## Put a rate shock on a plan

A rate shock is a what-if you lay over the plan in [[nav:transforms]], the same way you would lay a historical crash over it. Open Transforms, unfold **Modifications**, and on the Modifiables card's **Global** tab select **Interest-rate shock**:

[[img:rates-modifiables|control]]

The editor beside the card holds the shock. Switch it on and set four things:

[[img:rates-editor|control]]

- **Rate change** is how far rates move, in percentage points, in steps of a quarter point. A negative number is a cut.
- **Stocks** says why rates moved, which decides what stocks do. *Fall too* is a rise driven by inflation, like 2022, when stocks fell with bonds. *Hold* is a rise into a growing economy, like 1994, when stocks ended the year about where they started.
- **Move start** is the year rates move. It opens on the plan's first year, because "what if rates rise from here?" is the usual question.
- **Move duration** is how many years rates stay moved before they return to where the plan's assumptions have them.

Nothing in the plan changes. Transforms shows the plan as authored on one side and the plan with the shock on the other, and the shock's years are shaded on the year axis of every chart. Here is Morgan's plan with a two-point rise from 2027, driven by inflation and lasting five years:

[[img:rates-bs-hike]]

Net worth drops by about $139,000 in 2027, from $1,278,000 to $1,139,000. Then it recovers, and by 2032, the year rates return, the plan with the shock is slightly ahead of the plan without it. The rest of this lesson takes that picture apart, one kind of holding at a time.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Put the same shock on your own plan. Open your plan, go to **Transforms**, select **Interest-rate shock** and switch it on. Try a rise and a cut of the same size, and try both answers under **Stocks**. The plans that move the most are the ones with long bond funds, a lot of cash, or a lot of stock, and most plans hold at least one of those.

</div>
</details>

## Bond funds fall, then pay

A bond fund loses value when rates rise because the bonds it already holds pay the old, lower rate. Nobody will pay full price for a bond paying 5% when new bonds pay 7%, so its price falls until its yield matches the new rate. How far it falls depends on the bond's [[term:duration]], which is roughly the number of years of payments still to come. A fund with a duration of 5 loses about 5% when rates rise one point. Morgan's long-term Treasury fund has a duration of about 14.5, so a two-point rise costs it about 29%.

The loss is only half of the story. The fund keeps buying new bonds as old ones mature, and the new ones pay the higher rate, so from then on it earns about two points more each year. When rates come back down, the price loss reverses. The **Realized returns** check shows all three phases. It opens from a button on the balance-sheet chart's toolbar, and a click on the path below takes you straight there on the plan beside this lesson:

[[jump:return|output__forecaster__forecaster.forecast-detail__bs-chart__bs-chart.return-check]]

The check there shows the plan as authored. With the shock, it opens from the same button on the *Modified* side of Transforms. [Check the crash's returns](/learn/sequence_of_returns_crash_timing#check-the-crashs-returns) explains how to read the check. Here is the long-term Treasury fund in Morgan's 401(k), with the shock from 2027:

[[img:rates-returns-long]]

The fund returns −21.8% in 2027, which is its usual 5.18% plus two points of new yield, minus the 29-point price drop. It then returns 7.2% a year from 2028 through 2031, two points above its usual return. In 2032, when rates return, it gains 34.2% as the price comes back. The **Growth of 1** strip below the chart, set to the **Shock** window, follows one dollar through those six years. It falls to 78 cents in 2027 and ends at 1.38, a little ahead of the 1.35 the fund would have reached without the shock.

So a rate rise that later reverses costs a bond fund nothing in the end, as long as you do not have to sell in the bad year. The danger is the same as with a crash: a retiree who sells bonds in 2027 to pay the bills sells them at 78 cents on the dollar, and those dollars are not there when the price comes back.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — the shift Tutilis applies</summary>
<div class="lesson-math-body">

For a bond category with duration \(D\), a rate move of \(\Delta\) changes the category's return, on top of the plan's own expectation, by

\[
\text{first year: } \Delta - D\,\Delta, \qquad \text{each year rates stay moved: } \Delta, \qquad \text{the year they return: } D\,\Delta.
\]

The first-year term is the price loss \(D\,\Delta\) plus a year at the new yield. With \(D = 14.5\) and \(\Delta = 0.02\), the first year moves by \(0.02 - 0.29 = -0.27\), so the long-term fund's 5.18% becomes −21.8%. The shift is added to the year's return without changing how much the category varies, and it moves no other category. Stocks move only by what the **Stocks** choice says, and expenses do not move at all.

</div>
</details>

## A bond held to maturity

A bond held to maturity does not care what rates do in between. Its issuer pays the coupon every year and the face value on the maturity date, whatever the market would pay for it on any day before then. Its price on paper still falls when rates rise, but the owner never has to accept that price. A [[term:bond-fund]] has no maturity date, so it has no such day to wait for.

Tutilis models the two differently for exactly this reason. Morgan's 10-year Treasury note is an individual bond with a contractual coupon and a maturity in 2036, so the rate shock leaves it alone. Here is the balance-sheet table for 2027, with the plan as authored on the left and the plan with the shock on the right:

[[img:rates-table-2027]]

The long-term Treasury fund ends 2027 at $148,000 with the shock, against $199,100 without it. The intermediate Treasury fund ends at $180,500 against $196,300. The Treasury note ends at $105,600 against $105,300. It is the same note in both plans. The few hundred dollars between them is cash the plan reinvested differently, and what the note itself is worth did not change.

<aside class="lesson-saying" data-saying="free-lunch">

The note pays its coupon whether rates rise or fall, so after a rise it keeps paying the old, lower rate while the fund moves up to the new one. Holding to maturity removes the price swing, and it gives up the higher income a fund would earn after a rise.

</aside>

Holding to maturity also only helps if the money is not needed before the maturity date.

## Cash and stocks

Cash is the simplest case. A money-market fund holds bills that mature within weeks, so its yield follows the new rate almost at once and its price barely moves. Here is Morgan's money-market account under the same shock:

[[img:rates-returns-cash]]

It earns 5.6% in 2027 and 5.8% a year through 2031, against its usual 3.8%. In 2032 rates return and so does its yield. A rate rise is good news for cash, and that is the main reason holding some cash is a defense against rising rates.

Stocks are harder, because their reaction depends on why rates moved. A higher rate makes a company's future profits worth less today, which pushes prices down. But if rates are rising because the economy is strong, profits may grow fast enough to make up for it. That is the difference between 2022, when inflation drove rates up and stocks fell with bonds, and 1994, when growth did and stocks ended roughly flat.

The **Stocks** choice in the editor is that question. With *Fall too*, US stock funds lose about 6% for each point rates rise, and get it back when rates return. With *Hold*, stocks keep the plan's own expectation. Here is Morgan's plan with the same two-point rise, but driven by growth:

[[img:rates-bs-growth]]

Without the stock loss, net worth in 2027 drops only to $1,213,000. The bond funds still fall, and the cash still earns more. By the end of the plan this version is about $97,000 ahead of the plan with no shock, because the bonds and cash spent five years earning more while the stocks never lost anything.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

For most of the twenty years before 2022, stocks and high-quality bonds tended to move in opposite directions, which is why bonds were such a good cushion in 2008. In 2022 they fell together, and that had also been the usual pattern in the 1970s and 1980s. The relationship between them depends on whether inflation or growth is driving the economy, and it can flip within a year.

</div>
</aside>

Correlations move in a crash too. In ordinary times, different kinds of stocks and riskier bonds each follow their own news. In a panic, investors sell whatever they can and watch what everyone else is selling, so assets that usually move apart start to move together. Tutilis's plan-wide correlations are averages over many years, and neither the rate shock nor the crash replay raises them inside the shock's years. [Timing a crash](/learn/sequence_of_returns_crash_timing) shows what a crash does through the correlations the plan already has.

## Rises, cuts and how long

A rate cut is the mirror image of a rise. Bond funds gain in the first year, cash earns less, and with *Fall too* stocks gain. Over the years that follow, everything earns less than it would have. Here is Morgan's plan with a cut of one and a half points from 2027, driven by a slowing economy, so stocks hold:

[[img:rates-bs-cut]]

Net worth is about $49,000 higher in 2027, at $1,327,000. By 2032 it is $46,000 lower than the plan without the cut, and by 2058 it is about $143,000 lower, at $366,000 against $510,000. A retiree living on savings is a lender, and a cut lowers the price that lender is paid. The gain in the first year is real, but it is a gain in price, and the lower income lasts for years.

How long the move lasts matters as much as its direction. Set **Move duration** to its maximum and the two-point rise never reverses inside the plan. Then the stock loss is never made back and the bond funds never get their price back, and the extra income does not make up for it. On Morgan's plan, a permanent rise leaves net worth at $461,000 in 2058, against $533,000 when rates return after five years and $510,000 with no shock at all.

## Shorter bonds

The usual defense against rising rates is shorter bonds, because a short duration means a small price change. The [Shorter bonds](#canvas-dossier:rates_short_bonds) plan replaces Morgan's long-term Treasury fund, with a duration of about 14.5, by a short-term Treasury fund with a duration of about 2.3. Here is that plan under the same two-point, inflation-driven rise:

[[img:rates-bs-short-hike]]

Net worth drops by about $93,000 in 2027, against $139,000 for Morgan's plan with the long fund. The short fund also reinvests at the new rate within a couple of years, so it collects the higher income almost at once. By 2058 the shorter-bond plan with the shock ends at $478,000, well above its own $385,000 without the shock.

The protection has a price, and it shows up in the other two cases. Short bonds are expected to earn less, so with no shock at all the shorter-bond plan ends at $385,000 against $510,000 for the long-bond plan. And when rates fall, short bonds gain almost nothing in price and soon reinvest at the lower rate. Under the one-and-a-half-point cut, the shorter-bond plan gains only about $14,000 in 2027 and ends at $261,000, against $366,000 for the long-bond plan.

So there is no holding that wins in every case, and the choice is about which risk you would rather carry:

- **Against rising rates:** shorter bond funds, some cash, and bonds held to maturity, which cannot be forced into a loss if you can wait for the date.
- **Against falling rates:** long bonds, and individual bonds or annuities that lock in today's rate for years, which keep paying it after a cut.

A ladder of individual bonds maturing one year after another sits between the two. Each year one rung matures and is reinvested at whatever rates are then, so the ladder never locks in all of its money at one rate and never has to sell a bond before its date. Switch between the two plans on the [[term:canvas]] and put a rise and a cut on each in Transforms to see the trade for yourself.

## What the shock leaves out

The rate shock moves returns and nothing else, and three things it leaves out matter for planning.

**Inflation does not move.** When rates rise because inflation has risen, as in 2022, prices rise too, and Morgan's spending rises with them. The shock raises what bonds and cash earn but leaves the plan's inflation where it was. Over a long rise that makes higher yields look like pure gain, when in real life much of the extra yield would be spent on higher prices. To stress both together, add the shock here and raise the growth of your expenses as [Inflation on your plan](/learn/inflation_on_your_plan) shows.

**Mortgages and other loans are not repriced.** A fixed-rate mortgage keeps its rate whatever the market does, which is why a household that locked in a low rate is protected from a rise. A variable-rate loan, a [[term:home-equity|home equity]] line, or a new mortgage taken after a rise costs more. A cut is the chance to refinance. None of these is a return on a holding, so the shock does not touch them. A loan in your plan keeps the payments you entered.

**Every maturity moves together.** The shock moves short and long rates by the same amount. Real moves are rarely so tidy. Short rates often move more than long ones when the Fed acts, and long rates can rise while short ones fall. The shock is a single, clear question rather than a forecast of how the yield curve will bend.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — the durations and stock sensitivities the shock uses</summary>
<div class="lesson-reference-body">

| Category | Duration (years) |
|---|---:|
| Money market | 0.1 |
| Certificate of deposit | 0.5 |
| Short-term Treasury | 2.3 |
| Short-term corporate bond | 2.7 |
| High-yield bonds | 3.2 |
| Intermediate-term Treasury | 5.2 |
| TIPS | 6.8 |
| International bonds | 7.0 |
| Long-term corporate bond | 12.8 |
| Long-term Treasury | 14.5 |

International bonds see half of a US rate move, because foreign rates follow US rates only partly. [[term:tips|TIPS]] see half of an inflation-driven move, because part of that move is higher expected inflation, which TIPS are built to absorb.

| Category | Fall too (per point) | Hold (per point) |
|---|---:|---:|
| US stock funds | −6% | 0 |
| Developed-market stocks | −5% | 0 |
| Emerging-market stocks | −6% | 0 |
| Real estate | −8% | −3% |

Durations are rounded from each category's proxy fund. The stock figures are rounded from 2022 and 1994. Both are approximations, meant to give each effect a sensible size and direction.

</div>
</details>
