<!--
tutilis-return: lessons/hnw_portfolio_insurance/prose/en.md
tutilis-locale: en source
-->
# Portfolio insurance with puts and collars

A household that holds most of its money in stocks can buy protection against a crash, much as it buys insurance on a house. The protection is an index [[term:protective-put|put option]]: a contract that pays when the market ends the year below a chosen floor. Like any insurance it costs a [[term:premium]] every year, including the years nothing goes wrong, and the premium is priced so that on average the buyer pays more than the protection returns. This lesson follows one [[term:hnw]] couple through three plans to show what the insurance pays in a crash, what it costs over a lifetime of quiet years, how a [[term:collar]] trades away the best years to pay for it, and how the gains and losses are taxed.

The lesson is advanced because it leans on two ideas from elsewhere: a distribution of outcomes over many random futures, and [[term:sequence-of-returns|sequence-of-returns risk]]. [Timing a crash](/learn/sequence_of_returns_crash_timing) introduces both.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Who are Dana and Lee, and what do the three plans change?** See [Meet Dana and Lee](#meet-dana-and-lee).
2. **What does a put pay, and what does it cost?** See [What a put pays](#what-a-put-pays).
3. **What does a collar give up in exchange for a cheap put?** See [What a collar gives up](#what-a-collar-gives-up).
4. **What happens to each plan in a crash?** See [A crash in year two](#a-crash-in-year-two).
5. **What happens in a crash that lasts three years, like 1929?** See [A longer crash](#a-longer-crash).
6. **What does the insurance do across a thousand futures?** See [A thousand futures](#a-thousand-futures).
7. **How is the hedge taxed, and which account should it sit in?** See [How the hedge is taxed](#how-the-hedge-is-taxed).
8. **Who might consider this, and what comes first?** See [Who might consider it](#who-might-consider-it).
9. **What does the forecast leave out?** See [What the plan leaves out](#what-the-plan-leaves-out).

</div>
</aside>

## Meet Dana and Lee

Dana is 63 and Lee is 61, and both retire next year. They have about $13 million and spend about $420,000 a year. Most of it sits in one S&P 500 index fund, and the $8 million of it in their taxable [[term:brokerage]] account cost them $2.4 million, their [[term:basis]]. Selling stock to hold less of it would [[term:realized-gain|realize]] most of a $5.6 million gain, so the simplest way to take less risk is an expensive one for them.

| Account | Balance | What it holds |
|---|---:|---|
| Joint brokerage | $10 million | An S&P 500 index fund ($8 million, basis $2.4 million) and an intermediate Treasury fund ($2 million) |
| Dana's [[term:traditional]] [[term:ira\|IRA]] | $3 million | The same S&P 500 index fund ($1.8 million) and the Treasury fund ($1.2 million) |
| Cash | $400,000 | A money market fund |

The three plans are the same household with one thing changed.

- [No hedge](#canvas-dossier:whitcomb_unhedged) holds the portfolio as it is.
- [Index puts](#canvas-dossier:whitcomb_puts) buys one-year puts on the S&P 500 at a floor 10% below the market, on the whole $9.8 million of the index fund, and rolls them every year from 2027 through 2032. The puts sit in the brokerage account.
- [Collar](#canvas-dossier:whitcomb_collar) holds the same puts and pays for them by selling one-year calls 20% above the market, which gives away any return past 20% in a year.

The hedge covers the six years around retirement on purpose. Those are the years in which a crash does the most lasting damage to a plan that has started to spend, and after them the couple goes back to holding the portfolio unhedged.

## What a put pays

A put with a floor of −10% pays whatever the index loses past 10% in the year. In a year the S&P 500 falls 35%, it pays 25% of the value it insures, and in a year the index falls 8% or rises it pays nothing. The plan settles the puts once a year, so the payoff for a year is the return the forecast draws for the index fund that year, and the puts pay exactly when the holding they insure has a bad year.

The price comes from the same forecast. The plan's assumption for large US stocks is a mean return of about 7.6% with a [[term:volatility]] of about 16.4%, and on that distribution a put 10% below the market pays back about 1.2% of the insured value in an average year. Tutilis charges twice that by default, about 2.4% a year, because index puts have historically cost well more than they went on to pay. From 1990 to 2018 the option market's expected swing in the S&P 500, the VIX, averaged 19.3% a year, while the swing that followed averaged 15.1% ([Bondarenko, for Cboe, 2019](https://cdn.cboe.com/resources/education/research_publications/PutWriteCBOE19_v14_by_Prof_Oleg_Bondarenko_as_of_June_14.pdf)). Priced at that ratio, this put costs about twice what it pays back on average. That gap is called the volatility risk premium, and it is why insurance is a cost rather than a free lunch. In 2027 the premium on **Index puts** is about $249,000, and it is charged every year the puts are held, whatever the market does.

The 100% markup is an assumption, and it sits at the low end of the evidence. Markets also price options on the risk-free rate rather than on the stock's expected return, and they charge more for puts far below the market, and counting both puts this put at up to about 270% over its average payoff. You can change the markup on the hedge in the account editor, or try other values in Transforms.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — what a put pays on average</summary>
<div class="lesson-math-body">

If the year's return \(r\) is normal with mean \(\mu\) and volatility \(\sigma\), a put with floor \(F\) pays on average

\[ E[\max(F - r, 0)] = (F - \mu)\,\Phi(d) + \sigma\,\varphi(d), \qquad d = \frac{F - \mu}{\sigma}, \]

where \(\Phi\) and \(\varphi\) are the standard normal distribution and density. With \(\mu = 7.56\%\), \(\sigma = 16.42\%\) and \(F = -10\%\), \(d\) is about \(-1.07\) and the expected payoff is about 1.2% of the insured value. A call with cap \(C\) is the mirror image:

\[ E[\max(r - C, 0)] = (\mu - C)\,\Phi(e) + \sigma\,\varphi(e), \qquad e = \frac{\mu - C}{\sigma}. \]

A bought put and a sold call at the same strike together pay \(F - \mu\) on average, which is how the two formulas check each other.

</div>
</details>

## What a collar gives up

A collar pays for the puts by selling calls. The buyer of a call collects whatever the index gains past the cap, so the couple keeps every return up to 20% and gives away the rest. Calls are priced much closer to what they pay back than puts are, so Tutilis sells the call for 20% less than its average payoff. On the plan's own distribution that covers most of the put, and the [Collar](#canvas-dossier:whitcomb_collar) plan's net premium is about 0.69% a year, a little over a quarter of what the puts alone cost.

All of this sits on the brokerage account, in the Hedges section of its editor: what the hedge insures, its floor and cap, the years it is held, how it is taxed, and its price.

[[img:hnw-insurance-hedges-collar]]

The cost has not gone away. It has moved from the cash flow into the best years. A year the index gains 30% is a 20% year on **Collar**, and those are the years a portfolio recovers in after a crash. The next two sections show where that matters.

## A crash in year two

The plainest test of insurance is the accident it is bought for. Turn on the **Sequence-of-returns risk** modifiable in Transforms, choose the Global Financial Crisis of 2007, and start it in 2027. Each plan then lives through the crisis's yearly returns from its first year of retirement, and its deepest year, a fall of about 41%, lands in 2028. The year after it is a gain of about 56%.

Open the cash flow for 2028 on [Index puts](#canvas-dossier:whitcomb_puts). The puts pay about $2.9 million into the brokerage account, against a premium of about $225,000. The plan has more cash than it can spend, so it invests about $2.2 million, which buys stock at the bottom of the crash.

[[img:hnw-insurance-cash-flow-puts-2028]]

The same year on [No hedge](#canvas-dossier:whitcomb_unhedged) has no income at all. The plan sells about $529,000 to pay for living expenses and taxes, and about $296,000 of that is the S&P 500 fund, sold after it has fallen.

[[img:hnw-insurance-cash-flow-unhedged-2028]]

That one year is most of the difference. Over a thousand random futures with the crisis placed at 2027, the [[term:median]] **Index puts** plan ends with about $35 million, and the median **No hedge** plan with about $24 million. The puts' cash was invested at the low and rode the recovery that followed. **Collar** ends in between, at about $25 million. Its puts paid in the crash just as **Index puts** did, and then in 2029, when the index gained about 56%, it kept 20%.

## A longer crash

The crisis of 2008 fell for about a year and a half. The crash that began in 1929 fell for three years. In Transforms, choose the Great Crash of 1929 and start it in 2027. The S&P 500 then loses about 23% in 2027, 28% in 2028 and 61% in 2029, and gains about 140% in 2030.

| Plan | Success | 10th percentile at the end | Median at the end |
|---|---:|---:|---:|
| No hedge | 19.5% | −$7.2 million | −$3.1 million |
| Index puts | 100% | $9.3 million | $20.3 million |
| Collar | 75.9% | −$1.7 million | $2.9 million |

Without a hedge, about four futures in five fail. The plan sells stock in each of the three falling years to pay for living expenses, so little of it is left for the recovery. **Index puts** pays in each of the three years, and every future succeeds.

**Collar** owns the same puts, and they pay just as much. In 2030 the index more than doubles, and the calls the plan sold take everything above 20%. The plan pays about $4.2 million on its calls that year, and it sells about $5.5 million of its holdings to do so. A collar pays for its protection with the recovery, and after a crash this deep the recovery is most of what the plan needs.

This replay is an illustration. The random futures in the next section already contain crashes at about the rate history suggests, so adding one on top counts it twice. A replay shows which way the hedge pushes and how hard, and the thousand futures show what it is worth.

## A thousand futures

A replayed crisis is the case the insurance is bought for, and most futures do not contain one. Without the crisis, the three plans compare like this over a thousand random futures each.

| Plan | Success | 10th percentile at the end | Median at the end | Mean at the end |
|---|---:|---:|---:|---:|
| No hedge | 96.2% | $5.1 million | $31.0 million | $53.4 million |
| Index puts | 96.8% | $5.1 million | $28.4 million | $48.3 million |
| Collar | 97.4% | $5.8 million | $28.4 million | $45.9 million |

[[img:hnw-insurance-key-forecasts-unhedged]]

[[img:hnw-insurance-key-forecasts-puts]]

Both hedged plans lower the average, which is what insurance does when it costs more than it pays back. At this price the puts' trade is close to even at the bottom. **Index puts** pays about 2.4% in every year it is held and collects only in the bad ones, so its 10th percentile barely moves while its median falls by about $2.6 million and its mean by about $5 million. Its success rate still rises a little, because the plans that fail are the ones a crash catches, and those are the ones the puts pay in. **Collar** raises the 10th percentile the most and costs the most on average, because the plan's prices work against it twice: it pays more than fair value for the puts, and it receives less than fair value for the calls. A cheap collar is cheap in cash, and it is paid for in upside.

<aside class="lesson-saying" data-saying="free-lunch">

Every hedged plan gives up some of its average outcome to buy a better bad one.

</aside>

## How the hedge is taxed

Options on a broad-based index such as the S&P 500 index itself are [[term:section-1256-contract|Section 1256 contracts]]. They are marked to market every December, so each year's gain or loss is taxed that year whether or not the position was closed, and 60% of it is treated as long-term and 40% as short-term regardless of how long it was held. Options on an exchange-traded fund or a single stock are taxed as ordinary equity options instead, and a one-year option's gain or loss is short-term.

Tutilis taxes a hedge in a taxable account this way. A year's net gain adds 60% to long-term gains and 40% to [[term:ordinary-income|ordinary income]]. A year's net loss, which is the usual year because the premium is spent, offsets that year's other capital gains and then up to $3,000 of ordinary income. The plan keeps no capital-loss carryforward, so the rest of a large loss goes unused, which understates the hedge's tax benefit rather than overstating it.

A hedge held in an IRA settles inside the IRA. Nothing is taxed, the premium comes out of the account's balance, and a payoff stays in the account. That keeps the taxes simple, and it means the payoff cannot be spent outside the account without a taxable distribution. Many custodians allow an IRA to buy puts and sell covered calls, and fewer allow anything more.

<aside class="lesson-reference" open>
<p class="lesson-reference-label">Rules that limit hedging a low-basis position</p>
<div class="lesson-reference-body">

- **[[term:constructive-sale|Constructive sale]] (IRC §1259).** A hedge that removes nearly all of a position's risk and reward can be treated as a sale, which realizes the gain the hedge was meant to defer. There is no bright-line test for a collar; practitioners keep the put and call strikes well apart.
- **Straddles (IRC §1092).** An option that offsets a position in substantially similar property can defer the option's loss until the position is sold, and can suspend the holding period. An index option hedging an index fund that tracks it is the kind of pair these rules can reach.
- **Covered calls the straddle rules exempt.** Some calls sold against stock fall outside the straddle rules, and whether one does depends on its strike and its term.

These rules turn on facts the forecast does not model. A tax advisor who works with options is the right person to read them for a particular position.

</div>
</aside>

## Who might consider it

Portfolio insurance answers a narrow question: how to keep a large stock position through a dangerous stretch without selling it. It suits a household like the Whitcombs, whose basics are in place, whose stock carries a large gain, and for whom a crash in the first years of retirement would change the plan for good. It also suits an owner of a single concentrated stock who cannot sell yet, where a collar is the usual tool.

Most households have better places to look first, and each of them costs nothing a year:

- **An emergency reserve** in cash covers a bad year's spending without selling anything.
- **An allocation and a [[term:glide-path|glide path]]** decide how much stock to hold. Holding less stock is the cheapest insurance there is, and in a [[term:traditional]] or [[term:roth]] account it costs no tax to change.
- **Taxes**, and in particular where each holding sits and the order accounts are drawn from.
- **Insurance on lives, health and property**, which covers losses a portfolio cannot.
- **Estate basics**: wills, beneficiaries and powers of attorney.

Options strategies are a specialist's work, and a household can approach them either way. Some work with an advisor who runs a hedging program, and others place the trades themselves. Tutilis models both the same way: a hedge on an account, with a floor, a cap and a price.

A third way to hedge is a short index future, which costs no premium and gives up the gains along with the losses. [Hedging a stock position with index futures](/learn/hnw_hedging_with_futures) follows the Whitcombs through it, and through the constructive-sale rule it raises.

## What the plan leaves out

- **The skew in real option prices.** Markets charge more for puts far below the market than the normal distribution the forecast uses suggests. A collar with a −10% floor usually costs nothing at a cap well below 20%, so real collars give up more of the upside than **Collar** does.
- **The markup is one assumption.** The 100% markup on puts and the 20% discount on calls stand for the volatility risk premium in every year. The real premium varies, and it is highest right after a crash, when insurance is most wanted. Both can be changed on the hedge, or tried in Transforms.
- **The year is the step.** The forecast settles the puts once a year on the year's return. A market that falls 30% in March and recovers by December pays nothing here, though a real put could have been sold at a profit in March.
- **Trading costs and timing.** Rolling options every year costs commissions and bid-ask spreads that the plan does not charge.
- **The tax rules that limit hedging.** The constructive-sale and straddle rules above, and the option to carry a Section 1256 loss back three years, are not modeled.

## What to take away

- A put pays in the years the market falls past its floor and costs a premium in every year. Across many futures it raises the bad outcomes and lowers the average.
- A collar makes the put cheap in cash by giving away the best years, which are the years a portfolio recovers in.
- Index options are Section 1256 contracts, taxed 60% long-term and 40% short-term every year. Where the hedge sits decides whether it is taxed at all.
- Holding less stock is the simplest insurance. Options earn their cost when selling stock would cost more, as it does for a large low-basis position.
