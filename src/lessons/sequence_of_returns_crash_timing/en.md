<!--
tutilis-return: lessons/sequence_of_returns_crash_timing/prose/en.md
tutilis-locale: en source
-->
# Timing a crash: cash reserve or rebalancing?

Jordan is 60 and plans to retire in 2031, at 65. There is $1.34 million saved: $900,000 in a [[term:401k|401(k)]], $400,000 in a [[term:brokerage]] account, and $40,000 in a money-market account. The invested money is split about 70/30 between an S&P 500 index fund and an intermediate Treasury fund, in both accounts. Spending is $72,000 a year in today's dollars, and Social Security starts at 67.

Jordan has read that the crash to fear is the one that arrives just as the paychecks stop. Before retirement, a fall in the market is something to wait out. After it, every year's spending has to be sold from whatever the portfolio is worth that year, and shares sold at the bottom never take part in the recovery. This is [[term:sequence-of-returns|sequence-of-returns risk]]: the same returns in a different order leave a retiree with a different amount of money.

Two defenses come up in every conversation about it. The first is to hold a large cash reserve, a few years of spending in money market, and live on it through a crash instead of selling stocks. The second is to hold a little less stock and adopt a rule about what gets sold each year. This lesson tests both on the same household, with a real crash placed at every year from 2027 to 2046.

It opens three plans that start with the same $1.34 million:

- [70/30](#canvas-dossier:sor_seventy_thirty) is Jordan's plan as it stands. Withdrawals come from every holding in proportion to its size.
- [Cash reserve](#canvas-dossier:sor_cash_reserve) moves $200,000 of the brokerage into money market, so the reserve holds $240,000, about three years of spending at retirement. Everything else is unchanged.
- [60/40 rebalanced](#canvas-dossier:sor_sixty_forty_rebalanced) splits the invested money 60/40 and sets the **Glide rebalance** withdrawal strategy against a constant target.

The two defenses hold almost the same amount of stock. The reserve plan holds $770,000 in the S&P 500 fund and the 60/40 plan holds $780,000, so the comparison is between parking the safe money in cash with no rule and holding it in bonds with one.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **How do I put a historical crash into my plan?** See [Put a crash in the plan](#put-a-crash-in-the-plan).
2. **Why does a big gain after a big loss leave me behind?** See [Check the crash's returns](#check-the-crashs-returns).
3. **Which year is the worst year for a crash to start?** See [Slide the crash](#slide-the-crash).
4. **Does a few years of spending held in cash protect me in a crash?** See [A cash reserve](#a-cash-reserve).
5. **How does a rebalancing rule keep a plan from selling stock at the bottom?** See [Less stock, and a rule](#less-stock-and-a-rule).
6. **Is it the lower stock share or the rule that does the work?** See [Which part does the work](#which-part-does-the-work).
7. **How do the three plans fare across a thousand market paths?** See [A thousand paths](#a-thousand-paths).
8. **What does published research say about bucket strategies and sequence risk?** See [What the research says](#what-the-research-says).

</div>
</aside>

## Put a crash in the plan

The plan itself never contains a crash. Its returns come from the growth assumptions, which describe an average year and how far a year can stray from it. To ask what a specific crash would do, you lay one over the plan in [[nav:transforms]].

Open Transforms and unfold **Modifications**. Its Modifiables card opens on the **Global** tab, which lists the what-ifs that apply to the whole plan rather than to one item. **Sequence-of-returns risk** is the last row. Select it:

[[img:sor-crash-modifiables|control]]

The Modification editor beside the card holds the crash itself. Switch it on, pick an episode by the year its market peaked, and set the year the crash starts. The slider opens on the first retirement year, and its anchors mark the plan's start, each retirement and the end of the forecast.

[[img:sor-crash-editor|control]]

Each episode replays measured history. The S&P 500 fund takes the index's actual total return year by year, from the fall through the recovery, and the Treasury fund takes the 10-year Treasury's. Every other holding follows through its [[term:correlation]] with those two. The Global Financial Crisis replays six years: a small loss, then a fall of about 41%, then a rebound of about 56%, and three more good years.

Nothing in the plan changes. Transforms shows the plan as authored on one side and the plan with the crash on the other. On the balance-sheet chart the crash years are shaded red along the year axis, so you can always see where the crash sits. Here is Transforms' balance-sheet comparison for the 70/30 plan, with the crash where the editor first puts it, starting in 2031. The plan as authored is on the left under *Original*, the plan with the crash is on the right under *Modified*, and both sides share one scale, as they do in the app:

[[img:sor-crash-balance-sheet-7030]]

On the Modified side, net worth falls by nearly a third in 2032, Jordan's second year of retirement, and does not climb back to its 2031 level until 2036. The two sides never meet again. By 2057 the plan with the crash ends about $680,000 below the plan without it.

## Check the crash's returns

A crash is easier to fear than to measure, and the yearly returns it replays can mislead the eye. Tutilis shows them item by item in the **Realized returns** check, which opens from this button on the balance-sheet chart's toolbar:

[[img:sor-crash-bs-toolbar]]

The button is on the chart in the Forecaster and on both sides of Transforms. Press it on the Modified side to see the returns with the crash in them.

The check lists every holding, and every cash flow that grows, with what it earned in each year of the forecast. Select a row and its returns are charted year by year below the list, with the crash years shaded on the axis. Under that, the **Growth of 1** strip starts one unit of money at the selected year and compounds it through the returns that follow. Its buttons set how many years to follow, and **Crash** follows exactly the years the overlay replays. The seams between the three parts fold one away with a click, or move the boundary when dragged, when you want more room for the others.

Here is the S&P 500 fund in Jordan's brokerage, with the Global Financial Crisis starting in 2030:

[[img:sor-crash-returns-gfc]]

The returns chart makes the crash look like a fair trade. The fund loses about 41% in 2031 and gains about 56% in 2032, so the gain looks bigger than the loss. The Growth of 1 strip says otherwise. A dollar at the start of 2030 is worth 56 cents after the fall, and the 56% gain lifts it only to about 88 cents. A gain is a percentage of what is left, and after a 41% loss there is much less left for it to work on. It takes until 2033, the fourth year of the crash, for the dollar to be whole again.

The Great Crash of 1929 makes the same point more forcefully. Here it is starting in 2031, Jordan's retirement year:

[[img:sor-crash-returns-1929]]

The yearly returns look almost cheerful after the first three years. There is a gain of 140% in 2034 and two more gains of more than 50% later on. Averaged year by year, the sixteen replayed years return about 9% a year, which is better than the fund's ordinary expectation. The Growth of 1 strip tells the real story. The first three years take a dollar down to about 21 cents, the 140% year brings it back only to about 52 cents, and the dollar does not pass 1.0 again until 2045, the fifteenth year of the crash. Sixteen years that average 9% a year leave the dollar at about 1.28, where the fund's ordinary returns would have grown it to about 2.6.

This is the trap in reading a chart of yearly returns. Large swings up and down seem to cancel, and the big recovery years seem to more than pay for the losses. They do not, because losses and gains multiply rather than add. A retiree is also selling through those years, so the money sold near the bottom is not there for the recovery at all. That is why the rest of this lesson measures crashes by what they do to net worth, and why the strip is worth a look whenever you test one.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — why a 56% gain does not undo a 41% loss</summary>
<div class="lesson-math-body">

Growth multiplies, so a run of yearly returns \(r_t\) turns a dollar into

\[
G = \prod_t (1 + r_t)
\]

In the Global Financial Crisis replay the dollar is at about 0.56 after the fall, and \(0.56 \times 1.56 \approx 0.88\).

After a loss \(L\), the gain \(g\) that gets back to even solves \((1-L)(1+g) = 1\):

\[
g = \frac{L}{1-L}
\]

That is 69% after a 41% loss, 100% after a 50% loss and 400% after an 80% loss.

The average that describes growth is the geometric one, \(G^{1/n} - 1\). The sixteen 1929 years average about 9% a year added up year by year, but \(1.28^{1/16} - 1 \approx 1.6\%\) a year compounded. The fund's ordinary returns compound at \(2.6^{1/16} - 1 \approx 6.2\%\). The lesson [Risk and return](/learn/risk_and_return) has the rule of thumb for that gap: the [[term:geometric-mean|geometric mean]] sits about half the variance below the arithmetic one.

</div>
</details>

## Slide the crash

The start year is the control that makes this analysis worth doing. Open [[nav:bs-table]] on the last year of the forecast, 2057, and leave it there. Then move the crash start one year at a time and watch the net-worth line at the top of the table.

These are the end-of-forecast net worths on the [[term:gmf|GMF]] path, the forecast that takes each year's expected return, with the Global Financial Crisis starting in each year:

| Crash starts | 70/30 | Cash reserve | 60/40 rebalanced |
|---|---:|---:|---:|
| No crash | $3.11M | $2.56M | $2.67M |
| 2027 | $2.64M | $2.17M | $2.62M |
| 2029 | $2.54M | $2.10M | $2.52M |
| **2030** | **$2.37M** | **$2.00M** | **$2.49M** |
| 2031 | $2.43M | $2.04M | $2.50M |
| 2033 | $2.53M | $2.11M | $2.52M |
| 2038 | $2.60M | $2.16M | $2.55M |
| 2045 | $2.66M | $2.21M | $2.52M |

In every plan the worst year to start the crash is 2030, not 2031. The editor opens on the retirement year, but this episode's deep loss is its *second* year. Starting it in 2030 puts that loss on 2031, the first year Jordan lives on the portfolio. A crash that hits in 2027 still costs money, but Jordan is earning a salary through the fall and the rebound, and sells nothing at the bottom. A crash in 2045 lands on a portfolio that has already had years to grow and that Social Security is helping to support.

It pays to slide the crash for each episode you test rather than trusting the default. The worst start year is the one that lines up the episode's worst year with the first year of withdrawals, and that depends on the episode's shape.

## A cash reserve

The [Cash reserve](#canvas-dossier:sor_cash_reserve) plan is the most intuitive defense, and in this analysis it is the weakest of the three.

The first reason shows up with no crash at all. Money market earns less than stocks or bonds, and $200,000 of it compounds more slowly for 26 years. With no crash the plan ends at $2.56 million against $3.11 million for 70/30. The reserve is insurance, and that gap is its premium, paid every year whether or not a crash comes.

The second reason is that the reserve does not work the way it is meant to. Here is what the plan sells with the crash at its worst placement, starting in 2030, so that the bottom falls in 2031:

[[img:sor-crash-sales-2031-cash]]

The reserve supplies about $29,000 of the year's $120,000 of sales, and about $48,000 of S&P 500 fund is still sold at the bottom. The plan's withdrawals are pro-rata, so it sells a slice of everything. Nothing tells it that the cash is for bad years. For comparison, the [70/30](#canvas-dossier:sor_seventy_thirty) plan sells about $60,000 of stock in the same year:

[[img:sor-crash-sales-2031-7030]]

This is not a quirk of the software. A reserve only helps if someone decides, in the middle of a crash, that this is the year to use it, and keeps deciding each year until the market recovers. Somebody also has to decide when to refill it. Tutilis has no rule of that kind, and the retiree needs one written down too. Without it, a reserve is simply a low-return holding.

## Less stock, and a rule

The [60/40 rebalanced](#canvas-dossier:sor_sixty_forty_rebalanced) plan holds a little less stock and carries a rule. Its withdrawal strategy is **Glide rebalance**, set against a constant 60/40 target. Each year the plan compares its stock, bond and cash shares with the target. When it needs money it sells from whatever sits *above* target, and when it has money left over it buys whatever sits below.

In a crash the stock share falls below its target and the bond share rises above it. The rule then pays for the year from bonds, without anyone deciding anything:

[[img:sor-crash-sales-2031-6040]]

No S&P 500 fund is sold in 2031. The whole year comes from the Treasury funds, each line marked *Glide rebalance*. That is what the cash reserve was supposed to do, and here it happens automatically.

The table in the previous section shows what this is worth. The worst-placed crash costs the 70/30 plan about $730,000 of its final net worth and the reserve plan about $570,000. It costs the 60/40 rebalanced plan about $180,000. The rebalanced plan's column barely moves wherever the crash is placed. When the crash's deep year lands on retirement, with the crash starting in 2030 or 2031, it finishes ahead of both other plans. With the crash starting in 2029 it finishes just behind the 70/30 plan.

## Which part does the work

The 60/40 plan changed two things at once: less stock, and the rule. You can separate them in Transforms. Turn on the crash for the [60/40 rebalanced](#canvas-dossier:sor_sixty_forty_rebalanced) plan, then select **Money movements** and set it back to **Pro-rata**. Read 2057 again.

[[img:sor-crash-modifiables-sell-invest|control]]

*Transforms → Modifiables on the 60/40 plan, with Money movements selected. That row is the withdrawal strategy. Setting it to Pro-rata turns the rebalance rule off and leaves the lower stock share in place.*

With the crash starting in 2030 and pro-rata withdrawals, the 60/40 plan ends at about $2.31 million. That is below the 70/30 plan's $2.37 million. On this path the lower stock share alone bought nothing. The rule did the work, because it stopped the plan from selling stock at the bottom.

<details class="lesson-advanced">
<summary class="lesson-advanced-label">Advanced topic — reproduce the table from the command line</summary>
<div class="lesson-advanced-body">

Every number in this lesson comes from `engine-cli`, which takes the same crash as a pair of flags. This is the 70/30 plan's worst cell in the table:

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.balance-sheet --sample sor_seventy_thirty --this-year 2026 --year 2057 --overlay global-financial-crisis-2007 --overlay-start 2030 --format md"
```

Change `--overlay-start` to walk the crash through the years. Add `--residual pro-rata` to the 60/40 plan's command to turn off the rule, which is what the Residual strategy modification does in the app.

The Realized returns check has a table of its own. This prints every item's returns for the 1929 replay, with a growth column over the sixteen crash years that matches the Growth of 1 strip:

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.item-returns --sample sor_seventy_thirty --this-year 2026 --overlay great-crash-1929 --overlay-start 2031 --year 2031 --window 16 --format md"
```

</div>
</details>

## A thousand paths

Everything so far used a single path: expected returns in every year except the crash. The [[term:monte-carlo|Monte Carlo]] simulation runs a thousand paths with returns drawn at random, and the crash overlay applies to every one of them. The crash years are the same everywhere, and every other year varies.

Without a crash, the three plans succeed on 96%, 98% and 98% of paths. The 60/40 rebalanced plan's median ending net worth is within about $100,000 of the 70/30 plan's, and its bad-tenth outcome is better by about $220,000. Across many paths, a rebalanced 60/40 costs much less than the single path suggested.

The Global Financial Crisis barely moves those success rates, and it can even raise them slightly. The overlay replays the rebound as well as the fall, and six years with a known, fully recovered path replace six years that could have gone anywhere. A crash that recovers inside the overlay does not show up as failure.

The episode that separates the plans is the Great Crash of 1929. It replays sixteen years, with a fall of nearly 80% and a long, uneven recovery. Placed at Jordan's retirement in 2031, success falls to about 52% for 70/30 and about 64% for the cash reserve. The 60/40 rebalanced plan still succeeds on about 75% of paths. The same 60/40 split with pro-rata withdrawals succeeds on about 63%. In a crash that deep and long, the smaller stock share and the rule both earn their keep.

## What the research says

These results agree with the published work on the question.

Javier Estrada, in *The Bucket Approach for Retirement: A Suboptimal Behavioral Trick?* (2018), tested bucket strategies on 115 years of data from 21 countries. They did worse than simple static allocations that are rebalanced after each withdrawal, and their failure rates looked like those of a portfolio of about 90% stock. A bucket strategy moves money from stocks to bonds to cash but never back, so it never buys stock when stock is cheap. Rebalancing does.

Wade Pfau and Michael Kitces, in *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014), showed that sequence risk is concentrated in the years around the retirement date. A portfolio that holds less stock at retirement and adds stock afterward survived more often than one that held a constant, higher share. That is the same finding as the slider's: the years around the retirement date are the ones to protect.

A bucket still has a defense in its favor. It gives a nervous retiree a story that makes it easier not to sell stock in a crash, and behavior is a large part of how retirees actually fare. A written rebalancing rule makes the same promise with less money parked in cash, and it removes the decision that the bucket leaves open.

## What this cannot tell you

This analysis has limits, and they matter for how far to trust it.

- **Glide rebalance trades only the year's money.** It sells overweight holdings when the plan needs money and buys underweight ones when it has money left over. It does not sell bonds to buy stock in a year with no net withdrawal, and it buys only in taxable accounts. A full annual rebalance, as in Estrada's study, would also buy stock inside the 401(k) after a crash.
- **There is no rule for "use the cash in a down year."** Tutilis cannot yet model a reserve that is spent only when the market has fallen and refilled when it recovers. A household that would follow such a rule faithfully may do better than the reserve plan here.
- **The crashes are replays.** Each episode repeats one historical path exactly. The next crash will not look like any of them, and [[term:inflation]] is not replayed, which understates the 1973 episode in particular.
- **One household.** A plan that leans more heavily on its portfolio, or that has a pension covering most of its spending, will feel the timing more or less than Jordan's does.

## What to take away

- Yearly returns hide what a crash costs. A big gain after a big loss does not undo it, because a gain grows only what is left. Read the Growth of 1 strip in the Realized returns check to see what the crash actually did to each dollar.
- Sequence risk is about timing. A crash does the most damage when its worst year lands on the first years of withdrawals. Slide the crash in Transforms, keep the balance sheet on the last year, and find the start year that hurts most for each episode.
- A cash reserve with no rule for when to spend it is a low-return holding. It costs money every year and does little in the crash it was bought for.
- A standing rule to sell whatever is overweight does the job a reserve is meant to do, automatically, and it keeps buying stock back as the market recovers.
- Taking some risk off helps most in deep, long crashes. Paired with a rule, it gave Jordan the best result in almost every crash test here, at a modest cost in an ordinary market.
