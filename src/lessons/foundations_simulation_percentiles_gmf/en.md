<!--
tutilis-return: lessons/foundations_simulation_percentiles_gmf/prose/en.md
tutilis-locale: en source
-->
# Monte Carlo, from the North Star to the spread

Jordan is sixty, plans to retire in 2031, and has $1.34 million invested about 70/30 across a [[term:401k|401(k)]], a [[term:brokerage]] account and a little cash. The forecast for that plan shows two things at once. The charts draw a single smooth line through the years, and the Simulation Summary beside them reports a thousand different endings, from a deep hole to tens of millions of dollars.

Both are the forecast, and they answer different questions. This lesson takes the forecast apart from nuts to bolts: where the single line comes from, where the thousand come from, the arithmetic underneath each, why the thousand endings lean so far to the right, and what the whole method cannot see.

Two plans are open on the [[term:canvas]]. [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) is the retirement plan, with a salary, Social Security and living expenses. [One stock fund](#canvas-dossier:monte_carlo_one_fund) is $100,000 in an S&P 500 fund inside a [[term:roth|Roth]] [[term:ira|IRA]] with nothing else in the plan, so the shape of its outcomes can be read with nothing blurring it. The heavier math is kept in the chalkboard blocks marked **For the math lovers**. Nothing is hidden, and the lesson reads completely with every one of them shut.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Where did Monte Carlo come from, and why is it named after a casino?** See [Where Monte Carlo came from](#where-monte-carlo-came-from).
2. **Why does a planner need both a single forecast and a thousand of them?** See [Two ways to read a future](#two-ways-to-read-a-future).
3. **What is the North Star path, and why is it built from the geometric mean?** See [The North Star path](#the-north-star-path).
4. **Where does each random future come from, and what in my plan is random?** See [One draw per item per year](#one-draw-per-item-per-year).
5. **How do stocks, bonds and spending move together in a simulated year?** See [Moving together](#moving-together).
6. **Do I have to choose any of these numbers myself?** See [Defaults you can leave alone](#defaults-you-can-leave-alone).
7. **How do I read the thousand endings: percentiles, the median, the success rate?** See [Reading the thousand futures](#reading-the-thousand-futures).
8. **Why is the spread of net worth lopsided, and would it be after one year?** See [Why the outcome leans right](#why-the-outcome-leans-right).
9. **Is a run of ten thousand futures better than a run of a thousand?** See [How many futures to run](#how-many-futures-to-run).
10. **What can Monte Carlo not tell me?** See [What Monte Carlo cannot see](#what-monte-carlo-cannot-see).

</div>
</aside>

## Where Monte Carlo came from

The method began with a game of solitaire. In 1946 the mathematician Stanislaw Ulam was recovering from an illness and passing the time with cards, and he wondered what the chance was that a hand of Canfield solitaire would come out. The combinatorics were hopeless. It occurred to him that it would be far easier to lay out a hundred hands and count how many succeeded.

Ulam was working at Los Alamos, where the hard problems were about neutrons moving through material, and he saw that the same trick applied. With John von Neumann he worked out how to follow many simulated neutrons, each taking random steps, and count what happened to them. Their colleague Nicholas Metropolis suggested the code name **Monte Carlo**, after the casino in Monaco where Ulam's uncle liked to gamble. The first runs went on the ENIAC computer in 1948, and Metropolis and Ulam published the method under that name in 1949.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Monte Carlo was a code name before it was a method. The work at Los Alamos was secret, so it needed a name that told an outsider nothing, and the casino's name stuck because the whole idea is to let chance play many times and count the results.

</div>
</aside>

Finance took the idea up slowly. Phelim Boyle used it to price options in 1977, and by the late 1990s retirement-planning software had begun to replace a single assumed return with many simulated ones. The idea has not changed since Ulam's solitaire. When a question is too tangled to solve with a formula, you play it out many times with chance in the loop and count how often each outcome happens.

A retirement plan is exactly that kind of question. The salary, the spending, the taxes, the withdrawals and the returns all feed each other year after year, and no formula for "the chance this plan works" exists. The [[term:monte-carlo]] forecast plays the plan out a thousand times and counts.

## Two ways to read a future

The forecast offers two views of the same plan, and a planner needs both of them.

The first is a single path with no luck in it. Every holding grows at its expected compound rate, every cash flow at its expected rate, and every year is an average year. Tutilis calls this the **North Star** forecast, the [[term:gmf]], and it is the path the balance-sheet and cash-flow charts draw when the forecast opens. It is **Forecast ID 0**, [[term:fid-gmf]], and the forecast entry in the strip at the top of the forecaster reads **North Star ✦** while it is selected.

[[jump:fid|output__forecaster__forecaster.forecast-detail__forecast-detail.fid]]

[[img:mc-balance-sheet-jordan]]

*Jordan's balance sheet on the North Star path in [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). Net worth climbs to retirement in 2031, levels off for a year while the paycheck stops and withdrawals begin, then climbs again to about $3 million by 2057. There is no bad year anywhere on it.*

The North Star view is the right tool for what-if questions. Because it carries no randomness, a change to the plan is the only thing that moves it. If Jordan retires a year later, spends $5,000 less, or moves the brokerage into bonds, the difference on the North Star path is the effect of that change and nothing else. It answers *which direction* a lever pushes the plan and *how far*, and it answers in exact dollars on a chart you can read year by year. As the next sections show, the North Star path also sits close to the middle of the thousand futures, so its magnitudes are representative ones.

What the North Star view cannot show is risk. A plan that works on an average path can still fail when the bad years arrive early, and a single path with no bad years has no way to say how often that happens. That takes the second view: a thousand futures, each with its own luck, laid side by side. Risk is a statement about the spread of outcomes, and only the spread can measure it.

So the two views divide the work. Use the North Star path to understand the plan and to compare one version of it with another. Use the thousand futures to ask how much the plan can withstand.

## The North Star path

The North Star path is built from the [[term:geometric-mean]] of each item's return. The reason it is built that way, and not from the plain average, is worth a few paragraphs, because it explains a gap that appears all through the forecast.

Every growing item in a plan carries two numbers. The first is its average yearly return, written [[term:mu]] (μ). The second is how much that return varies from year to year, its [[term:volatility]], written [[term:sigma]] (σ). Together they describe a normal distribution, N(μ, σ), the bell curve the item's yearly return is drawn from. The S&P 500 fund in Jordan's plan runs on the system's figures for US large-company stocks, N(7.56%, 16.42%).

The average return is not the rate an investment compounds at. Lose 50% one year and gain 50% the next, and the average return is zero, but $100 has become $75. Swings cost growth, and the cost rises with the size of the swings. This is [[term:volatility-drag]], and a good approximation of it is half the square of the volatility. For the stock fund that is 16.42% squared and halved, about 1.35 points, so the rate it can be expected to compound at is 7.56% − 1.35% = **6.21%** a year.

That compound rate, μ − σ²/2, is what every item on the North Star path grows at. The name **GMF** stands for *geometric mean forecast*. Over forty years the difference from the plain average is large, and the [One stock fund](#canvas-dossier:monte_carlo_one_fund) plan shows it with nothing else in the way. Its $100,000 is valued in 2026, so the end of **2065** is forty years of growth. Open that plan and set **Year** in the strip at the top of the forecaster to **2065**.

[[img:mc-balance-sheet-one-fund-2065]]

*The balance-sheet chart for [One stock fund](#canvas-dossier:monte_carlo_one_fund) on the North Star path, with 2065 selected.*

The chart rises without a single dip. Every bar is 6.21% taller than the one before it, so the bars climb in one smooth, upward-bending curve. That smoothness is what a path with no luck looks like. A real account, and every one of the thousand random futures, zig-zags on the way up.

The balance-sheet table for 2065 gives the number. The Roth IRA, holding only the S&P 500 fund, ends the year at about **$1.12 million**, which is $100,000 [[term:compounding]] at 6.21% for forty years. Compounding at the plain average of 7.56% instead would give about $1.85 million, two-thirds more, for the same fund over the same years.

[[img:mc-balance-sheet-table-one-fund-2065]]

*The balance sheet for 2065 in [One stock fund](#canvas-dossier:monte_carlo_one_fund). The table rounds to $1.1MM.*

The table rounds its amounts to keep the columns narrow. Hover the ⓘ chip beside **Roth IRA** to see the end balance to the dollar.

[[img:mc-balance-sheet-row-roth-2065]]

*The Roth IRA's 2065 row, hovered. The end balance is $1,115,434, and the card beneath it lists the $100,000 the fund started with in 2026.*

The forecast can draw that second path too. The [[term:amf]], the *arithmetic mean forecast*, grows every item at its plain average μ. It is an opt-in row in **Simulation Summary**, under its **Advanced** settings, and it is there as a foil. Set beside the North Star path, the gap between the two is the volatility drag of the whole plan.

[[jump:amf|output__forecaster__forecaster.simulation-summary__simulation-summary.advanced__advanced.include-amf]]

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — why μ − σ²/2</summary>
<div class="lesson-math-body">

Wealth after \(n\) years is a product, \(W_n = W_0 \prod_{t=1}^{n} (1 + r_t)\), so the rate that matters is the average of the logarithms, \(g = \mathbb{E}[\ln(1+r)]\). A second-order expansion of \(\ln(1+r)\) around \(\mu\) gives

\[ \mathbb{E}[\ln(1+r)] \approx \ln(1+\mu) - \frac{\sigma^2}{2(1+\mu)^2} \]

and for returns of a few percent this is close to \(\mu - \sigma^2/2\), the rate the engine uses. It is computed in `GeometricMeanReturnSampler`, as `means[i] - stdDevs[i]² / 2`, with no random draw at all.

For the stock fund, the closer form gives 6.12% a year and \(\mu - \sigma^2/2\) gives 6.21%. The median of the thousand simulated futures grows at the first rate, so the North Star path sits a hair **below** the median, on the cautious side. On the one-fund plan over forty years it ranks about 473rd of 1,000, and on Jordan's plan about 492nd.

The mean of the thousand grows at the plain average, \(\mathbb{E}[W_n] = W_0 (1+\mu)^n\), because the yearly draws are independent and the expectation of a product of independent factors is the product of their expectations. That is the AMF. The mean of a skewed distribution is not where a typical outcome lands, which is the subject of a later section.

</div>
</details>

## One draw per item per year

Every forecast except the North Star is a randomized one. Each of those thousand futures, numbered 1 to 1,000, is a complete run of the plan, year by year, with every item's return drawn at random. In each simulated year the engine draws one return for every item from that item's bell curve, N(μ, σ). A stock fund might gain 21% one year and lose 9% the next. The plan then does everything it does on the North Star path with those returns: it pays the salary, spends, pays taxes, withdraws, rebalances if the plan says to, and carries the result into the next year.

To see one, stay on the blue [One stock fund](#canvas-dossier:monte_carlo_one_fund) plan with **Year** at 2065, and type **100** into the forecast entry in the strip at the top of the forecaster.

[[img:mc-balance-sheet-one-fund-fid100]]

*The balance-sheet chart for [One stock fund](#canvas-dossier:monte_carlo_one_fund) on Forecast ID 100, with 2065 selected. The same fund and the same years as the North Star chart above, with luck put back in.*

Forecast 100 is all jagged edges. The fund gains 33% in 2030 and 27% in 2036. Then it loses 27% in 2041, and after a brief rebound it loses 12% in 2043 and 24% in 2044, so the account falls from about $479,000 at the end of 2039 to about $259,000 at the end of 2044. It gains 42% the next year, and 36% in both 2055 and 2057. It ends 2065 at about $1.22 million, not far from the North Star's $1.12 million, by a road that looks nothing like the smooth curve. The years after 2065 are no calmer. The account passes $2.1 million in 2074 and is down to about $840,000 five years later.

The numbers are random, but they are not new each time you look. Each forecast's draws are seeded from its Forecast ID, so typing 100 again, tomorrow or on another computer, paints this same picture. That is what lets you come back to a particular future, point someone else at it, or watch what an edit to the plan does to it.

It is not only the investments that are drawn. Cash flows carry the same pair of numbers, and they are drawn the same way. On Jordan's plan the salary grows at N(3.5%, 1.5%), so some years bring a bigger raise than others. Living expenses grow at N(2.8%, 1.5%), because the cost of living does not rise by the same amount every year. Social Security grows at N(2.5%, 0%), with no volatility of its own, because the system treats its yearly cost-of-living adjustment as a steady rate.

[[img:mc-card-living-expenses-jordan]]

*The card for Jordan's living expenses in [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). Spending growth reads N(2.8%, 1.5%), the same pair every investment carries. The μg beside them is the compound rate the North Star path uses, which with a volatility this small rounds to the same 2.8%.*

**Risk vs. Return** in the **Risk** panel puts every item in the plan on one chart, at its volatility across and its average rate up. With the cash-flow chip lit, the salary, Social Security and living expenses appear beside the funds. The stock fund sits high and far to the right. The Treasury fund sits in the middle, and the money-market fund and the three cash flows cluster in the lower-left corner, steady and slow. The star is the portfolio as a whole.

[[jump:volatility|output__risk__line.risk.risk]]

[[img:mc-risk-scatter-jordan]]

*Risk vs. Return for [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan), with holdings and cash flows shown. Every dot is an item the forecast draws a return for each year.*

Two more facts about the draws matter for everything that follows.

The first is that a draw cannot lose more than everything. A yearly return is floored at −100%, so a holding can go to zero but never below it. There is no ceiling.

The second is that the years are independent of one another. A bad year makes the next year neither worse nor better, and a run of good years does not raise the chance of a correction. Statisticians call draws like these [[term:iid]], *independent and identically distributed*: every year's return comes from the same bell curve, with no memory of the years before it. That is a modeling choice with consequences, and the last section comes back to it.

The forecast also lets you check that the draws do what they claim. Across Jordan's thousand futures, the stock fund's measured average is 7.64% against the 7.56% it was given, and its measured volatility is 16.49% against 16.42%. The salary comes in at 3.49% against 3.5%. Each number lands within sampling error of its specification.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — how one return is drawn</summary>
<div class="lesson-math-body">

Each year, for each item \(i\), the engine forms

\[ r_i = \max\bigl(-1,\; \mu_i + \sigma_i\, z_i\bigr) \]

where \(z_i\) is a standard normal draw. The standard normals come from the Box–Muller transform (Box and Muller, 1958), which turns two uniform random numbers \(u_1, u_2\) into a normal one, \(z = \sqrt{-2 \ln u_1}\, \cos(2\pi u_2)\). The \(z_i\) are made to move together through the step in the next section, and the item's money is multiplied by \(1 + r_i\).

Every future is reproducible. Each one is seeded from its Forecast ID and the name of the stream it draws for, so the same plan always produces the same thousand futures, and an edit to one item leaves the draws of every other item where they were. Run a plan twice and Forecast ID 100 is the same future both times.

</div>
</details>

## Moving together

Stocks, bonds and spending do not move independently within a year. When stocks fall hard, high-quality bonds have tended to hold up or rise, and in an inflationary year both spending and some assets move together. A forecast that drew every item separately would miss this, and it would understate how much a [[term:diversification|diversified]] portfolio smooths the ride.

So the forecast draws each year's returns *together*, with the [[term:correlation]] between each pair built in. In the system's figures, US large-company stocks and intermediate-term Treasuries have a correlation of −0.31, which means that in a year when stocks do worse than usual the Treasury fund tends to do a little better. Living expenses have a correlation of +0.25 with stocks, a modest tendency for a hot economy to raise both returns and prices. The measured correlations across Jordan's thousand futures come back as specified: −0.31 for stocks against Treasuries and 0.26 for stocks against living expenses.

The step that makes the draws move together is a **Cholesky decomposition**, named for André-Louis Cholesky, a French army surveyor who worked it out for map-making about a century ago. It takes the table of correlations and factors it into a form that turns independent random numbers into correlated ones. The [[term:cholesky]] step runs once, before the first future, and then every year of every future uses it.

The step has one fragile point. A table of correlations has to be internally consistent. If A moves closely with B and B moves closely with C, then A cannot move opposite to C. A table assembled from different sources, or edited by hand one pair at a time, can break that rule without anyone noticing, and then the Cholesky step has no answer. When that happens Tutilis does not stop or quietly drop the correlations. It finds the nearest table that *is* consistent and uses that, and the Assumptions panel warns about the pairs that conflicted before any simulation runs.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — Cholesky, and the repair when it fails</summary>
<div class="lesson-math-body">

Let \(C\) be the correlation matrix of the plan's factors. If \(C\) is positive definite it factors uniquely as \(C = L L^{\mathsf T}\) with \(L\) lower triangular. Draw a vector \(z\) of independent standard normals and set \(y = L z\). Then

\[ \operatorname{Cov}(y) = L\, \mathbb{E}[z z^{\mathsf T}]\, L^{\mathsf T} = L I L^{\mathsf T} = C, \]

so the components of \(y\) have exactly the correlations in \(C\). These \(y_i\) are the \(z_i\) of the previous block.

A correlation matrix built pair by pair can fail to be positive semidefinite: some combination of the assets would have negative variance, which is impossible. Then no \(L\) exists. The engine's error correction runs in three stages (`Cholesky.decompose`, strategy `AUTO`):

1. **Try the plain factorization.** Most plans stop here.
2. **Repair to the nearest correlation matrix.** On failure it computes the correlation matrix closest to \(C\) in the Frobenius norm, by Higham's alternating-projections method (Higham, 2002). It alternates between projecting onto matrices with non-negative eigenvalues (clipping them at \(10^{-8}\)) and onto matrices with a unit diagonal, with Dykstra's correction so the alternation converges to the true nearest point. It runs to a tolerance of \(10^{-10}\) or 200 iterations.
3. **Add jitter as a last resort.** If rounding still defeats the factorization, it adds a tiny amount to the diagonal, starting at \(10^{-10}\) and growing tenfold, up to eight times.

The repaired matrix and its distance from the original are kept with the run, and the same repair runs before any simulation to name the conflicting pairs in the panel's warning.

</div>
</details>

## Defaults you can leave alone

Every item in a plan needs its μ and σ, and every pair of items needs a correlation. A plan with a dozen items needs dozens of numbers before it can say anything. Tutilis works hard so that you never have to type one of them.

The system supplies all of them from published sources, for every kind of item: each asset class, each kind of income and expense, and the correlations between them. That is why Jordan's plan works the moment it opens, and why the [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) plan in this lesson states no rate of its own. For almost every household, the right amount of time to spend on these numbers is none.

For the planner who does have a considered view, a **Power user** can override every one of them, both the average and the volatility. The lesson *Growth rates: the system's, and yours* walks through that on one household and shows what a single changed rate does to the outcome.

Either way, the few rates that are facts about your own household stay yours to state, such as how fast your pay has been rising.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

A view of the market that you want every plan to share belongs in an **assumption set** rather than in one plan. On the desktop app's front page, beside **Dossiers**, the **Assumption sets** page keeps your sets with the library. **New set** starts one from a base catalog, and you change only the categories you disagree with, such as a lower expected return for US stocks. **Use for my plans** makes it the library's default, so every plan in the library runs on it, and a later edit to the set reaches all of them at once. **Stop using** returns every plan to the system's figures.

</div>
</details>

## Reading the thousand futures

The **Simulation Summary** reduces the thousand futures to a few numbers about where they end. **Key Forecasts** names the points along the line of all thousand ending net worths, sorted from worst to best, and gives the Forecast ID of the future at each point.

[[jump:key-forecasts]]

[[img:mc-key-forecasts-jordan]]

*Key Forecasts for [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan): the worst future, the quartiles, the North Star path (✦), the mean, and the best future.*

A [[term:percentile]] is a position along that sorted line. The 10th percentile, P10, is the ending that only one future in ten falls below. The 50th percentile is the [[term:median]], the middle future. The 90th percentile is the ending that only one in ten beats. For Jordan, the median ending is about **$3.21 million**, P10 is about **$580,000** and P90 is about **$13.0 million**.

The North Star path, marked ✦, ends at about **$3.10 million**, the 492nd of the thousand. It sits just below the median, as the math in the earlier section predicts. The **mean** is about **$5.18 million**, far above the median, and the next section explains why.

The **Outcome** reports Downside (P10) and Upside (P90) beside the median, and the forecast uses that pair everywhere for a reason. Risk lives in the tail. A one-in-ten bad outcome is what a careful plan should be ready for, and a narrower pair such as P30 and P70 would describe the comfortable middle while saying nothing about the futures that hurt. P10 can come out below zero on a plan that spends hard, because in those futures the plan keeps spending after the money is gone and borrows to cover the shortfall. That negative number is real information. It is the size of the hole in a bad one-in-ten future.

The [[term:success-rate]] counts the futures that end with net worth above zero. Jordan's plan succeeds in **96.4%** of them. It is a count of simulated futures, and the last section says what it does and does not mean for one real life.

Every point in Key Forecasts is a whole future you can open. Click a row and every view focuses on that forecast: the balance-sheet and cash-flow charts redraw for that future, bad years and all. The forecast entry in the strip at the top of the forecaster takes any Forecast ID the same way, and setting it back to 0 returns to the North Star path.

[[img:mc-nw-distribution-jordan]]

*The Net worth distribution for [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan): all thousand ending net worths at once. The shaded band at the left is below zero, and the axis turns logarithmic past about $31 million so the longest tail still fits.*

## Why the outcome leans right

Jordan's thousand endings are lopsided. Half of them end between about $1.42 million and $6.73 million, a few stretch out to tens of millions, and the left side stops much sooner. The mean sits far to the right of the median because those few huge outcomes pull it there. That shape is not a quirk of this plan. It is what compounding does to randomness, and the [One stock fund](#canvas-dossier:monte_carlo_one_fund) plan shows it with nothing else in the way.

Start with one year. The fund's return for the year is drawn from a bell curve, so its value after one year is a bell curve too. The thousand outcomes spread almost evenly either side of about $107,000. The median is $107,500, the mean is $107,400, and the middle half runs from $96,500 to $118,100, about $11,000 either side. **After one year, the distribution is normal**, because the return itself is drawn from a normal distribution and nothing has compounded yet.

Now run the same fund for forty years. Each year multiplies the balance by a random factor, and forty random factors multiplied together do not make a bell curve. A future with a few more good years than usual does not end up a little higher. It ends up several times higher, because each good year compounds on the ones before it. A bad run cannot do the mirror image, because the balance can fall toward zero but never below it. The median after forty years is about $1.18 million and the mean is about $1.94 million. The middle half runs from about $600,000 to $2.34 million, which is $580,000 below the median and $1.17 million above it, and the best future reaches about $29.5 million.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-one-year]]

*[One stock fund](#canvas-dossier:monte_carlo_one_fund) after one year: a symmetric bell around $107,000.*

</div>
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-forty-years]]

*The same fund after forty years: a tall bunch at the left and a long tail to the right. The axis turns logarithmic past about $7 million to fit the tail at all.*

</div>
</div>

That right-leaning shape has a name, [[term:lognormal]]. It means that the *logarithm* of the outcome follows a bell curve, even though the outcome itself does not. Multiplying factors adds their logarithms, and adding up many independent random pieces produces a bell curve whatever the pieces look like. That is the central limit theorem, one of the most reliable facts in probability, and it is why long-horizon wealth comes out lognormal in nearly every model that compounds random returns.

The mean, the median and the North Star path tell three different stories on a lognormal distribution. The mean is pulled up by a handful of enormous outcomes that almost nobody will see. The median is the typical future, and the North Star path sits just below it. This is why the forecast leads with the median and the North Star path, and why the mean is shown but never used as the headline.

Jordan's plan is not purely lognormal, because Jordan spends. Withdrawals take a fixed amount of money each year whatever the market did, so they bite hardest in the futures that are already doing badly. That stretches the left side of the distribution, and in the worst futures it carries net worth below zero, which a buy-and-hold fund can never do. The right side still stretches out the way compounding makes it.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — the central limit theorem at work</summary>
<div class="lesson-math-body">

Take logarithms of the wealth product:

\[ \ln W_n = \ln W_0 + \sum_{t=1}^{n} \ln(1 + r_t). \]

The terms \(\ln(1+r_t)\) are i.i.d. with mean \(g \approx \mu - \sigma^2/2\) and standard deviation \(s \approx \sigma/(1+\mu)\). By the central limit theorem, their sum is approximately normal for large \(n\), with mean \(n g\) and standard deviation \(s\sqrt{n}\). So \(W_n\) is approximately lognormal:

\[ \text{median}(W_n) \approx W_0\, e^{n g}, \qquad \mathbb{E}[W_n] = W_0 (1+\mu)^n. \]

For the stock fund, \(g = 6.12\%\) and \(n = 40\) give a median of about $1.16 million, against $1.18 million in the simulation, and \((1.0756)^{40}\) gives a mean of about $1.85 million, against $1.94 million. The spread of \(\ln W_n\) grows like \(\sqrt{n}\), so the lean to the right gets stronger the longer the horizon.

At \(n = 1\) there is nothing to add up. \(W_1 = W_0 (1 + r_1)\) is a linear function of one normal draw, so it is itself normal, apart from the floor at −100% that a one-year draw almost never reaches. The lognormal shape is entirely a product of compounding over many years.

</div>
</details>

## How many futures to run

The forecast runs **1,000** futures by default, a common choice in planning software. A thousand is enough to put the median and the quartiles in a stable place and to measure a success rate to within a point or two.

You can ask for more. **Simulations** sits in the strip at the top of the forecaster, beside the forecast entry and **Year**, and it takes any count from 1,000 to 10,000 in steps of a thousand. The new count takes effect when you press **Re-simulate**.

[[img:mc-simulations-entry-7000]]

*The strip at the top of the forecaster with Simulations set to 7,000. The entry is shaded most of the way to red, beside the Re-simulate button that applies it.*

As the count climbs, the entry shades from its usual color toward red. The shading is a deliberate caution, for two reasons.

The first reason is time. Ten thousand futures take about ten times as long as a thousand, every time the plan is re-simulated.

The second reason matters more. A bigger run is not a better answer. The middle of the distribution barely moves, while the extremes keep growing. Run Jordan's plan with ten thousand futures and the median moves from $3.21 million to $3.20 million, and the success rate from 96.4% to 96.2%. The best future, though, goes from about $40 million to about $93 million. Ten times as many futures means ten times as many chances to draw one astonishing run of years, and the most extreme of them lands somewhere further out.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan]]

*[Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) with 1,000 futures.*

</div>
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan-10000]]

*The same plan with 10,000 futures. The quartiles and the median hardly move, and the maximum more than doubles.*

</div>
</div>

The math behind those extreme futures is sound. A future in which stocks return well above average for decades is possible under the plan's assumptions, and among ten thousand futures a few of them turn up. Such numbers are hard to reason about, though. A plan that reports a best case of $90 million for a household with $1.34 million is not wrong, but it invites attention to a future that the plan has no business being built around. The numbers worth a planner's attention are the median, the downside and the success rate, and a thousand futures already pin those down.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — what more futures buy</summary>
<div class="lesson-math-body">

A success rate measured from \(N\) futures has a standard error of \(\sqrt{p(1-p)/N}\). For \(p = 0.964\) and \(N = 1{,}000\) that is about 0.59 points, so the true rate under the model's assumptions is within about ±1.2 points of the reported one 95% of the time. Ten thousand futures shrink that to about ±0.4 points. Precision improves only with \(\sqrt{N}\), so each extra digit of precision costs a hundred times the runs.

The extremes behave differently. For a normal distribution, the largest of \(N\) draws sits about \(\sqrt{2 \ln N}\) standard deviations above the mean, so it keeps creeping outward as \(N\) grows, with no limit. On a lognormal distribution that creep happens in the logarithm, so each step outward multiplies the maximum by a large factor. On the one-fund plan over forty years, the log of wealth has a standard deviation of about 0.97. Moving from the largest of a thousand to the largest of ten thousand adds about 0.57 standard deviations in the log, which on average multiplies the maximum by about 1.7. Any one run varies widely around that, because a maximum is a single draw. The median does not move at all, because it was never in the tail.

</div>
</details>

## What Monte Carlo cannot see

A Monte Carlo forecast is a careful way to reason about chance. It is still a model, and its answers carry the limits of what was put into it.

**It is only as good as its assumptions.** Every future is drawn from the μ, σ and correlations the plan runs on. If the expected return on stocks over the next forty years is lower than the long-run figure, every one of the thousand futures is too optimistic, and running more of them does not help. The system's figures come from published sources, but they remain estimates of a future nobody has seen.

**The years have no memory.** Because the draws are independent, the forecast has no momentum, no mean reversion and no regimes. In real markets, long stretches of high valuations have tended to be followed by weaker returns, and calm and turbulent periods tend to come in clusters. In the forecast, a crash in the first years of retirement happens only when chance puts one there. The **Sequence-of-returns risk** modifiable in **Transforms** exists for exactly that reason. It places a historical crash in the years you choose, so you can stress the plan deliberately rather than waiting for the dice. The lesson *Timing a crash: cash reserve or rebalancing?* uses it on the same household.

[[jump:sequence-of-returns|modifiable]]

**The tails are thinner than history's.** A bell curve makes very large one-year losses rarer than markets have actually produced them. A model with normal draws treats a 1931 or a 2008 as nearly impossible events, when history says they are merely uncommon.

**The rules are fixed for the whole horizon.** Each item keeps the same μ, σ and correlations for forty years. In real crises, correlations between risky assets tend to rise just when diversification is needed most.

**The plan follows its script.** In every future the household spends what the plan says and withdraws the way the plan says. Real people adjust, cutting back after a bad year and spending more after a good run, and that flexibility is one of the strongest protections a retiree has.

**A success rate is not a promise.** Jordan will live one future, not a thousand. A 96.4% success rate says that 964 of the thousand simulated futures ended above zero under these assumptions. It does not say that the real future has a 96.4% chance, and it says nothing about how bad the other 36 futures were. Read the success rate beside the downside, which shows how deep the failures go.

None of this makes the forecast less useful. It makes it a tool with a known shape. Use the North Star path to understand the plan, the thousand futures to see its spread, and Transforms to push on the risks that the dice treat as rare.

## What to take away

A forecast can be read two ways, and each answers a question the other cannot. The North Star path grows every item at its compound rate, μ − σ²/2, with no luck in it. It is the place to ask what a change does and how big the effect is, and its endings sit near the middle of what the plan can expect.

The thousand futures put luck back in. Each year, each item draws its return from its own bell curve, the draws move together through the Cholesky step, and the years are independent of one another. Laid side by side, the futures measure risk: the downside, the spread and the success rate.

Compounding makes long-horizon wealth lean to the right. After one year the outcomes form a bell, and after forty they are lognormal, with a median well below the mean and a long tail of rare fortunes. That is why the forecast leads with the median and the North Star path.

A thousand futures are enough. More of them sharpen the success rate a little and push the extremes further out, without changing what a planner should conclude. The numbers underneath all of it come from the system, and you can leave them alone unless you have a real reason to disagree.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Works cited — the method and the math</summary>
<div class="lesson-bibliography-body">

- Nicholas Metropolis and S. Ulam, [*The Monte Carlo Method*](https://doi.org/10.1080/01621459.1949.10483310), Journal of the American Statistical Association 44 (247), 1949.
- Phelim P. Boyle, [*Options: A Monte Carlo Approach*](https://doi.org/10.1016/0304-405X%2877%2990005-8), Journal of Financial Economics 4 (3), 1977.
- G. E. P. Box and Mervin E. Muller, [*A Note on the Generation of Random Normal Deviates*](https://doi.org/10.1214/aoms/1177706645), Annals of Mathematical Statistics 29 (2), 1958.
- Nicholas J. Higham, [*Computing the Nearest Correlation Matrix — A Problem from Finance*](https://doi.org/10.1093/imanum/22.3.329), IMA Journal of Numerical Analysis 22 (3), 2002.

</div>
</details>
