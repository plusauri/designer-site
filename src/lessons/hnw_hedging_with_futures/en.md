<!--
tutilis-return: lessons/hnw_hedging_with_futures/prose/en.md
tutilis-locale: en source
-->
# Hedging a stock position with index futures

A household with a large stock holding can protect it with a [[term:short-future|short index future]] instead of buying insurance. The future costs no [[term:premium]]. In exchange it gives up the holding's gains along with its losses, so the hedged part of the holding earns about what cash earns, whatever the market does. This lesson follows the same [[term:hnw]] couple as [Portfolio insurance with puts and collars](/learn/hnw_portfolio_insurance) to show what that trade does in a sharp crash, a long one and a thousand random paths through the markets, and why the tax law may treat it as a sale. Holding less stock is still the simplest insurance, and the lesson comes back to that at the end.

The lesson is advanced because it builds on the puts lesson, which explains the Whitcombs, the replayed crashes and the [[term:section-1256-contract|Section 1256]] tax. Read that one first if those are new.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **What do the three plans change?** See [The three plans](#the-three-plans).
2. **What does a short future pay, and what does it cost?** See [What a short future does](#what-a-short-future-does).
3. **What happens in a crash that recovers quickly, like 2008?** See [A crash in year two](#a-crash-in-year-two).
4. **What happens in a crash that lasts three years, like 1929?** See [A longer crash](#a-longer-crash).
5. **What does the future do across a thousand random paths?** See [A thousand random paths](#a-thousand-random-paths).
6. **How is it taxed, and when could it count as a sale?** See [Taxes and the sale rule](#taxes-and-the-sale-rule).
7. **Who might consider it?** See [Who might consider it](#who-might-consider-it).
8. **What does the forecast leave out?** See [What the plan leaves out](#what-the-plan-leaves-out).

</div>
</aside>

## The three plans

Dana and Lee Whitcomb are 63 and 61 and retire next year with about $13 million. About $9.8 million of it sits in one S&P 500 index fund, and the $8 million of that in their taxable [[term:brokerage]] account carries a large unrealized gain. The puts lesson tells their story in full.

The three plans are the same household with one thing changed.

- [Short futures](#canvas-dossier:whitcomb_short_futures) shorts a fixed $5 million of S&P 500 index futures in the brokerage account, about half of the index fund, and rolls the position every year from 2027 through 2032.
- [No hedge](#canvas-dossier:whitcomb_unhedged) holds the portfolio as it is.
- [Index puts](#canvas-dossier:whitcomb_puts) buys one-year puts 10% below the market on the whole $9.8 million for the same six years, as in the puts lesson.

The future is sized in dollars on purpose. A futures position is a number of contracts, and it does not grow when the holding does, so the hedge in **Short futures** covers a smaller share of the fund as the fund grows. The account editor's Hedges section sizes a hedge either way, as a share of the holding or as a fixed number of dollars.

[[img:hnw-futures-hedges-editor]]

## What a short future does

A short future on an index pays what the index loses and costs what it gains. Its price is set so that the holding and the future together earn the cash rate. A buyer of the future skips paying for the stock and earns interest on the money instead, and gives up the dividends the stock would have paid, so the future's price builds in the cash rate less the dividend [[term:yield]]. The holding keeps its dividends, and the future hands back the rest of the holding's return in exchange for the cash rate.

In the forecast, each dollar the future covers settles every year at the cash rate minus the index fund's total return for that year. The plan's assumption for large US stocks is a mean return of about 7.6%, and its assumption for cash is about 3.8%, so a covered dollar gives up about 3.7% a year on average. On $5 million that is about $190,000 a year. It is never charged as a premium. It arrives as a large loss in a good year and a large gain in a bad one, and the 3.7% is only their average.

Per dollar covered, that average cost is higher than the puts' premium of about 2.4% a year, even though the puts are bought at a markup. The puts pay for protection in the bad years and keep every good year. The future gives up the good years in exchange for the same protection, and the good years are where most of a stock fund's return comes from.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — why the hedged holding earns the cash rate</summary>
<div class="lesson-math-body">

With an index at \(S\), a cash rate \(c\) and a dividend yield \(q\), a one-year future is priced at

\[ F = S\,(1 + c - q). \]

The short side receives \(F - S_T\) when it settles. Per dollar of index, that is \(c - q - r_p\), where \(r_p\) is the index's price return for the year. A holding's total return is \(r = r_p + q\), so the future pays

\[ c - r, \]

and the holding plus the future earns \(r + (c - r) = c\). On average the future pays \(c - \mu\), where \(\mu\) is the holding's expected return. With \(\mu = 7.56\%\) and \(c = 3.83\%\), that is about \(-3.7\%\) a year. This is the cost-of-carry rule for index futures that Hull sets out in *Options, Futures, and Other Derivatives*.

</div>
</details>

## A crash in year two

The plan can replay the 2008 financial crisis from 2027, so that 2028 is the deep year, and every plan sees the same returns. In 2028 the future in [Short futures](#canvas-dossier:whitcomb_short_futures) pays about $2.2 million into the brokerage account, and the plan invests most of it.

The cost comes in the rebound. In 2029 the replayed market rises sharply, and the future loses about $2.6 million that year. The plan has no premium saved to cover it, so it sells about $3.7 million of its holdings to pay the loss and the year's spending and taxes.

[[img:hnw-futures-cash-flow-2029]]

Across the thousand random paths that follow the replay, the [[term:median]] **Short futures** plan ends with about $19 million. The median [No hedge](#canvas-dossier:whitcomb_unhedged) plan ends with about $24 million and the median [Index puts](#canvas-dossier:whitcomb_puts) plan with about $35 million. The puts paid in the crash and kept the rebound. The future paid in the crash and gave the rebound back, and it gave back more than it had paid.

## A longer crash

The great crash of 1929 fell for three years before it turned, and the plan can replay it from 2027 too. Here the future earns its keep. Without a hedge, about four paths in five fail. With [Short futures](#canvas-dossier:whitcomb_short_futures), about three in five succeed, because the future pays in each of the three falling years.

The rebound still costs it. In 2030 the replayed market rises steeply, the future loses about $4.7 million, and the plan sells about $6.1 million of its holdings to pay for it. The median plan ends with about $900,000. [Index puts](#canvas-dossier:whitcomb_puts) covers twice as much of the fund, keeps the rebound, and every one of its paths succeeds.

A replay is an illustration. It shows which way a hedge pushes and how hard, and the thousand random paths in the next section, which contain crashes at about the rate history suggests, show what the hedge is worth.

| Plan | 2008 replayed: median | 1929 replayed: paths that succeed |
|---|---:|---:|
| No hedge | about $24 million | about 1 in 5 |
| Short futures | about $19 million | about 3 in 5 |
| Index puts | about $35 million | all of them |

## A thousand random paths

Without a replay, the forecast draws a thousand random paths for each plan. [Short futures](#canvas-dossier:whitcomb_short_futures) raises the 10th [[term:percentile]] of net worth the most, from about $5.1 million without a hedge to about $5.9 million, and it raises the success rate a little, from about 96% to about 98%. It also lowers the average the most, from about $53 million to about $45 million, because it gives up half the fund's gains in every good year.

| Plan | 10th percentile | Median | Mean | Success |
|---|---:|---:|---:|---:|
| No hedge | about $5.1 million | about $31 million | about $53 million | about 96% |
| Index puts | about $5.1 million | about $28 million | about $48 million | about 97% |
| Short futures | about $5.9 million | about $27 million | about $45 million | about 98% |

<aside class="lesson-saying" data-saying="free-lunch">

The future has no price tag, and it is still the most expensive hedge here on average, because what it pays with is the gains.

</aside>

## Taxes and the sale rule

Regulated futures on a broad-based index are Section 1256 contracts, like index options. Each year's gain or loss is taxed that year, 60% as long-term and 40% as short-term. Tutilis taxes every short future this way, and a hedge in an [[term:ira|IRA]] settles inside the account, untaxed. A year's net loss offsets that year's other capital gains and then up to $3,000 of [[term:ordinary-income|ordinary income]], and the plan keeps no carryforward, so in a strong year part of the future's loss goes unused.

A short future also raises a question puts do not. The [[term:constructive-sale]] rule, IRC §1259, treats a hedge that removes substantially all of a holding's risk and reward as a sale of the holding. The gain the hedge was meant to defer is then taxed in the year the hedge is opened. The statute names a short sale, and a futures or forward contract to deliver the same or substantially identical property. Whether an S&P 500 index fund and an S&P 500 future are substantially identical is a question about the particular fund and contract. That is why the account editor shows a warning under every short future in a taxable account.

A [[term:collar]] can be caught too. In 1997 Congress said Treasury regulations would set the line for collars, and none have been issued, so there is no bright-line test. Practitioners treat a collar whose floor and cap sit closer together than about 15% to 20% as exposed. Tutilis warns when a collar's floor and cap are less than 20 points apart, which is the cautious end of that range. A collar with a floor 10% below the market and a cap 20% above it is 30 points wide.

The warning is only a warning. The forecast does not tax a constructive sale, so a plan that would trigger one looks better in the forecast than it would on a tax return.

## Who might consider it

A short future answers a narrow question: how to take most of the risk out of a large stock position for a few years without selling it and without paying a premium. It suits a household that would otherwise pay a large tax to sell, that wants the protection more than the gains for a stretch of years, and that has the cash or bonds to meet a large loss in a strong year.

Holding less stock is the simplest insurance, and for most households it is the first thing to consider. In an IRA or a [[term:roth|Roth]] account it costs no tax at all to change, and even in a taxable account a household can move toward a lower stock share by spending from the stock first and buying bonds with new savings. A cash reserve, a sound allocation, tax placement and ordinary insurance on lives and property come before any hedge.

Futures are a specialist's tool, and a household can use them either way. Some work with an advisor who runs a hedging program, and others trade them in their own brokerage account. Tutilis models both the same way: a hedge on an account, sized in dollars or as a share, with its tax treatment.

## What the plan leaves out

- **Daily settlement.** A real future settles every day, so a rising market asks for cash during the year, and a broker can close a position that is short of margin. The forecast settles once a year.
- **Tracking.** The forecast's future tracks the insured fund exactly. A real index future and a real fund drift apart a little, and a future on an index hedging a single stock or a narrow fund drifts apart a lot.
- **The carry is an average.** The future earns the plan's average cash rate in every year, including replayed years when real rates were very different.
- **Rolling costs.** Commissions and the price of rolling from one contract to the next are small for index futures. A yearly cost can be entered on the hedge if you have a figure.
- **Loss carryforward and carryback.** A Section 1256 loss can be carried back three years against Section 1256 gains, and a capital loss carries forward. The plan uses neither, which understates the future's tax benefit.
- **The constructive sale.** The forecast warns about it and does not tax it.

## What to take away

- A short index future costs no premium and gives up the holding's gains and losses alike for about the cash rate.
- On average it costs the extra return stocks are expected to earn over cash, which is more per dollar than the puts' premium.
- It protects best in a long crash and worst in a crash that recovers quickly, because it gives back the rebound.
- A short future on the same or substantially identical holding may be taxed as a sale under Section 1259, and so may a tight collar.
- Holding less stock is the simplest insurance. A hedge earns its place when selling would cost more, as it does for a large position with a low [[term:basis]].
