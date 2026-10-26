<!--
tutilis-return: lessons/currency_risk_in_the_forecast/prose/en.md
tutilis-locale: en source
-->
# Currency risk in the forecast

Ines is retired in the United States and spends in dollars. Her income is a pension from the years
she worked in Lisbon, paid in euros. Most of her savings sit in a ladder of British government
bonds, in pounds, and the rest is a savings account in Tokyo, in yen. A modest US [[term:brokerage]]
account is the only thing she owns that is priced in the currency she lives in.

This is a household whose retirement is a bet on three exchange rates, whether or not anyone
thought of it that way. This lesson is about what a forecast can say about that bet, and about the
one thing this forecast can say that a fixed-rate forecast cannot: how much of her spread is the
currencies themselves.

The [[term:canvas]] holds three plans that are the same household. The first converts every year at
today's rates, which is what every plan does unless it asks otherwise. The second turns the
currency-risk model on. The third turns it on and states one belief about the pound. Switch between
them as you read.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power user</p>
<div class="lesson-power-user-body">

This lesson sets exchange rates and lets them move, on the Currency tab of Assumptions. That tab, and plans in several currencies, belong to a **Power user**. Turn it on under [[nav:advanced]] → Application → **Power user** to follow along on your own plans.

</div>
</aside>

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How do I turn on moving exchange rates for a plan?** See
   [Nothing moves until you ask](#nothing-moves-until-you-ask).
2. **How much of my plan is exposed to foreign currencies?** See
   [What she owns, and in what](#what-she-owns-and-in-what).
3. **What drives an exchange rate from one year to the next in the model?** See
   [What a moving rate is made of](#what-a-moving-rate-is-made-of).
4. **Why is the expected rate flat, and what happens when I state an [[term:inflation]] belief?** See
   [Flat until you state a belief](#the-expected-path-is-flat-until-you-state-a-belief).
5. **What does currency risk look like inside a single forecast path?** See
   [One path](#one-path).
6. **How much of the spread in my outcomes comes from the currencies?** See
   [How much is currency risk](#how-much-of-the-spread-is-the-currencies).
7. **What does the currency model leave out?** See
   [What the model does not do](#what-the-model-does-not-do).

</div>
</aside>

## Nothing moves until you ask

Open **Assumptions → Currency** on the first plan. Under the rate table there is a two-way choice, **Exchange rates: Fixed | Modeled**, and it is set to *Fixed*. That setting is the whole opt-in. A plan that has never touched it converts every year of every path at the rates in the table, exactly as it did before the model existed, and its forecast does not change by a cent.

[[jump:fx|input]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

[[img:currency-risk-fx-fixed|control]]

*Assumptions → Currency on the fixed plan. Exchange rates is Fixed.*

[[img:currency-risk-fx-modeled|control]]

*The same panel on the modeled plan. Exchange rates is Modeled, and each rate becomes a path of its own.*

</div>
</details>

The model changes nothing about how a plan is written, either. The pension is still recorded in
euros, the bond ladder in pounds, the savings in yen. What *Modeled* changes is the rate the
forecast uses when it converts those amounts to dollars in a given year of a given path. With
*Fixed*, that rate is the same number every time. With *Modeled*, it is a path of its own.

## What she owns, and in what

Before asking whether the rates matter, look at how much of the plan they touch. The forecast
reports [[term:exposure]] whether or not the rates are modeled, because it is a fact of the plan
rather than of the model.

[[img:currency-risk-exposure]]

About two thirds of her assets are pounds, a fifth are yen, and a sixth are dollars. The dollar
slice grows a little as the US equities compound and the rest is drawn down, but the shape holds to
the horizon. Her income is starker still: every euro of it is the Lisbon pension, and every dollar
she spends has to be bought with one of the three foreign currencies first.

That is the shape of her currency risk. The assets that fund her retirement are foreign; the
retirement they fund is in dollars. Nothing about it is unusual for someone who has lived and worked
in more than one country, and nothing about it shows up in a forecast that holds the rates still.

## What a moving rate is made of

The model does not draw an exchange rate out of thin air, and it does not simply give each currency
a return and a [[term:volatility]] the way a fund gets one. It builds each year's change from two
pieces that economists have argued about for a century and mostly agree on over long horizons.

The first piece is **drift from inflation**. If prices in one country rise faster than prices in
another, that country's currency tends to lose value against the other's by about the difference.
This is relative purchasing power parity, and over decades it is the most reliable thing anyone can
say about where a currency is headed. In the model, every region's inflation is stated relative to
the plan's own reporting inflation for the United States. A region with a zero spread is believed to
inflate at the same pace as the US, and its currency has no drift. This is also why a high-inflation
currency cannot stay strong by accident: the drift is tied to the inflation the rest of the forecast
already uses.

The second piece is the **real exchange rate**, which is the rate after both countries' price levels
are taken out. It is where the genuine currency risk lives. Real rates swing, sometimes by a quarter
or more, but they do not swing forever. They tend to come back toward a long-run level over a few
years. The model states this as a half-life: the number of years it takes for half of a deviation to
close, four years for the major floating currencies. Each year the real rate takes a random step and
then leans back toward its long-run level, so a forty-year path cannot wander off to a valuation no
currency has ever held.

The [[term:nominal]] rate you see is the product of the two. It is not given a volatility of its own,
which is deliberate: if the nominal rate and the real rate were sampled separately they could tell
contradictory stories. Every number the model uses, per currency, is listed under **Assumptions →
Currency** and printed by `assumptions.fx-model`. Most of them are shared-world assumptions, like the
rate at which tax brackets are indexed, rather than something each household is asked to type. The
one exception is the inflation spread, which is a belief a household can reasonably hold for itself,
and the next section shows where to state it.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — the drift and the half-life</summary>
<div class="lesson-math-body">

**Drift.** With US inflation \(\pi_{US}\) and the other region's inflation \(\pi_c\), the expected yearly change in the rate, in logs, is

\[
\ln\frac{1+\pi_{US}}{1+\pi_c}
\]

so over many years the expected rate is simply the ratio of the two price levels.

**The real rate.** Write the real rate's log distance from its long-run level as \(x_t\). Each year it keeps a share \(\rho\) of that distance and takes a random step:

\[
x_{t+1} = \rho\,x_t + \sigma_q\,\varepsilon_{t+1}, \qquad \rho = 0.5^{1/h}
\]

A deviation shrinks to \(\rho^h = 0.5\) of itself after \(h\) years, which is what a half-life means. With a four-year half-life, \(\rho = 0.5^{1/4} \approx 0.84\).

The nominal rate you see is the real rate carried along by the price-level ratio, so it gets no volatility of its own.

</div>
</details>

## Flat until you state a belief {#the-expected-path-is-flat-until-you-state-a-belief}

The deterministic forecast, the [[term:gmf|GMF]], draws no random steps. On the second plan its
exchange-rate path is flat: a pound is worth the same in dollars in 2053 as in 2027. That is not the
model declining to work. It is the model saying that, with no stated inflation differential and
today's rate taken as fair value, the expected rate is today's rate. The spread you will see in a
moment comes entirely from the paths around that expectation.

The third plan states one belief: Britain inflates 1.5 points a year faster than the United States.
Nothing else is different. The belief lives in the rate table on **Assumptions → Currency**, in the
**Inflation vs US** column, which is editable once Exchange rates is *Modeled*. The pound's row reads
1.5% there, and every other row reads zero. In the parameter table below it, the pound's source
changes from the system default to the plan itself. Now the GMF path of the pound tilts. Each year the pound loses about 1.4%
of its dollar value, which is exactly the ratio of the two inflation rates, and by 2053 it sits
almost a third below where it started. The euro and the yen, with no stated spread, stay flat beside
it.

Because two thirds of what Ines owns is pounds, that one belief takes the expected terminal net
worth from a little under a million dollars to a little over half of one. Nothing in the plan
changed but a single assumption about two countries' inflation, and the forecast moved by more than
most edits to the plan itself would move it. You can read the path off `forecast.fx-path` for the
expected forecast, and it is the cleanest way to check what a stated spread does before trusting a
[[term:monte-carlo|Monte Carlo]] built on it.

## One path

Every stochastic path draws its own rates. On the second plan, forecast 7 has the pound about 8%
below today in the mid-2030s, a quarter above it through the late 2040s, and back to about 15% above
at the horizon. The euro spends the same decades a quarter strong and returns to today by 2053. The
yen ends a fifth stronger than it started. The three do not move independently: the model correlates
real-rate surprises across currencies, so a year in which the dollar strengthens tends to strengthen
it against all three, and it correlates each region's inflation surprises with its own currency's
real rate.

That is what currency risk looks like inside one path: rates that wander a long way, come back, and
wander again, tied together loosely by a common dollar factor. No path is a prediction. The point is
that every path is economically possible, which a random walk on the nominal rate would not manage
over a retirement.

## How much is currency risk {#how-much-of-the-spread-is-the-currencies}

The question Ines actually asked is how much of her spread is the currencies themselves, and a
fixed-rate forecast cannot answer it. To answer it, the forecast runs the same Monte Carlo twice, once with the rates modeled and once with them held at
today's, and compares the ending net worth. The **Currency risk** table in the FX quick view does
this on demand; `forecast.currency-risk` prints the same comparison.

[[jump:fx|output__fx]]

[[img:currency-risk-nw-distribution-fixed]]

[[img:currency-risk-nw-distribution-modeled]]

With the rates held still, the cloud of outcomes is what her bond ladder, her savings rate and her
equities make it. With the rates modeled, the cloud is wider on both sides: a higher ninetieth
[[term:percentile]], because a strong pound or euro is as possible as a weak one, and a lower tenth
percentile, because a weak one is too. The standard deviation of her ending net worth is a fifth
higher, the floor at the tenth percentile is tens of thousands of dollars lower, and the success rate
is a couple of points lower. The last row of the table puts one number on it: **about three tenths
of the variance in her ending net worth comes from the exchange rates.** The rest is the assets.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — how a fifth more spread becomes three tenths of the variance</summary>
<div class="lesson-math-body">

Variance is the square of the standard deviation. If the modeled rates make the standard deviation \(1.2\) times the fixed-rate one, the variance is \(1.2^2 = 1.44\) times as large, and the share that the exchange rates add is

\[
1 - \frac{\sigma_{fixed}^2}{\sigma_{modeled}^2} = 1 - \frac{1}{1.44} \approx 0.31
\]

</div>
</details>

Read that number the way it is meant. It is not a forecast of which way the currencies will go; the
expected path is flat. It is a measure of how much of her uncertainty she is carrying in the
currencies rather than in the markets, which is what would tell her whether hedging, or holding more
of her savings in dollars, is worth its cost. A household with the same foreign share held in
equities would find the currencies a smaller part of a larger spread; a household holding foreign
bonds and cash, as she does, finds them a large part of a modest one.

Two things make this measurement possible here and not in a spreadsheet with a rate column. The
rates live inside the simulation, so every path carries its own rate history alongside its own
returns, rather than one static rate multiplied through afterward. And the plan can be run with the
rates frozen, so the attribution is a comparison of two honest forecasts rather than a guess about
what the currencies contributed.

## What the model does not do

The currency model does not change how any item grows. The bond ladder still earns what a bond ladder earns, in
pounds; the model only changes the rate used to state that pound value in dollars. It does not change
US inflation, which stays the plan's own reporting inflation and is the same curve every
today's-dollars figure in the app is discounted along. And it does not yet correlate a currency's
moves with the returns of the assets held in it. Those are the next steps, and the model is built so
they slot in without changing what a plan says.

## What to take away

- Exchange rates can be part of the simulation, but only for a plan that opts in. A plan that never
  touches the switch forecasts exactly as before.
- A moving rate is two things: a drift from the inflation differential between regions, and a real
  rate that wanders and comes back. The nominal rate follows from both, so no currency can stay
  strong by accident or wander to an impossible level.
- The expected path is flat until you state a differential. State one, and the drift is the ratio of
  the two inflation rates, year after year, and a household that is mostly in that currency moves
  with it.
- The forecast can say how much of a household's spread is its currencies by running the same Monte
  Carlo with the rates modeled and with them held still. For a retiree living on foreign income and
  foreign bonds, that share is large, and it is the number that says whether the currency risk is
  worth doing something about.
