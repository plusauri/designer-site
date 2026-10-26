<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/exponential_growth.md
tutilis-locale: en source
-->
# Exponential growth

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.time_value.compound_growth
  outline-path: Foundations › Time value of money › Compound / exponential growth
  document-id: exponential_growth
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: ProsePrimary
  intent: Compound growth and the rate bend.
  port-source: dossiers/exponential_growth.md
-->

<!--- α <lesson_body> -->
Compound growth is the slow bend that becomes a steep one. A few percentage points of **mean return**,
held for decades, change the shape of a plan more than almost any one-year surprise.

This lesson uses the **Springfield** household as scenery so the live plan has real accounts and
years. You do not need their full story yet — if the app map is still new, take
[Getting around](/learn/getting_around) first and come back.

The live plan on the right is **Springfield Baseline** (`springfield_baseline`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What is compound growth, and why does a small difference in rate matter so much over
   decades?** See [The idea in one picture](#the-idea-in-one-picture).
2. **How much larger does the end total get when I raise the growth rate?** See
   [The Growth tool](#the-growth-tool-rate-time).
3. **Why can two growth charts look alike when their totals are very different?** See
   [The Growth tool](#the-growth-tool-rate-time).
4. **How does the same growth show up on a real holding in the plan?** See
   [Sparklines on real holdings](#sparklines-on-real-holdings).
5. **How can I read thousands of market paths without drowning in lines?** See
   [Endings, not path spaghetti](#endings-not-path-spaghetti).

</div>
</aside>

---

## The idea in one picture

Suppose you invest a lump of money and leave it alone. Each year the **balance** (not just the original
[[term:principal]]) grows by roughly the same *rate*. That is **[[term:compounding]]**: last year’s growth becomes part
of this year’s base.

On a chart of dollars vs years, low growth looks almost linear for a long time, then quietly curves.
Raise the rate and the curve does not merely get “a bit taller early on” — over a long horizon the
**gap between paths explodes**. That is why people call compounding the “eighth wonder” in finance
rhetoric: small rate differences, long time, large dollar difference.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Over forty years, a dollar that grows at 3% a year becomes about **\$3.26**. At 7% the same dollar
becomes about **\$15**. The rate is a little more than twice as high, and the money at the end is more
than four times as much.

</div>
</aside>

**Honesty:** markets bounce. The smooth curve is the **on-trend / typical** path (what the product’s
growth math often shows as a geometric-mean line). Real paths zigzag around it. The lesson here is
the **shape of compounding**, not a promise of a smooth ride.

The three sections that follow are the same curve in three places in the product, from the cleanest
to the messiest: the sandboxed [[nav:growth-calculator]], where you type the rate; a **real holding**,
where the product supplies it; and the **whole plan**, where spending and market luck are in the
picture too.

---

## The Growth tool: rate × time

On the live plan, open the **bottom tool bar**
([[nav:fx]] · [[nav:growth]] · [[nav:annuity]] · [[nav:peek]])
and choose [[nav:growth]]. That opens the [[nav:growth-calculator]]: pick an amount, a growth rate and
a year range, and read the **projected total** on the on-trend path. In **Grow to total** the amount
is a figure *each year*, so the total is the whole stream compounded — not one deposit left alone.

[[jump:compounding|output__growth-calculator]]

The numbers here are assumptions you type rather than Springfield’s live holdings, and that is the
point: the [[nav:growth-calculator]] is a sandbox, so it isolates **rate × time** with no taxes, no spend and no
rebalancing in the way, and the only thing that can move the answer is the rate.

### Try this — the whole point of the lesson

1. Set a simple yearly amount (e.g. $1,000) and a multi-decade year range.
2. Run at about **3%** mean growth. Note the end figure.
3. Change only the rate to about **6–7%**. Watch how much larger the end is — read the **number**,
   not the curve. It is not a linear “double the rate, double the dollars” story over long
   horizons; compounding is nonlinear.
4. Optionally try **0%** (flat face value) vs a mild positive rate so the curve shape is obvious.

⚠️ **Read the y-axis before you read the shape.** The two pictures below are the same control at two
rates, and the arrows finish at roughly the same height on the page. Each chart scales its
**y-axis to its own numbers**. Read the axis labels and the projected total on each picture. Those
are the comparison. The silhouette hides the compounding.

<div class="lesson-img-stack">

[[img:exponential-growth-calc-3pct]]

<p class="lesson-img-caption"><strong>3% mean</strong> — $1,000 a year. Read the projected total and where the y-axis tops out.</p>

[[img:exponential-growth-calc-7pct]]

<p class="lesson-img-caption"><strong>7% mean</strong> — the same $1,000 a year over the same years. The axis and the total are both larger. Read them off the picture.</p>

</div>

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — the compounding formula and the rule of 72</summary>
<div class="lesson-math-body">

A lump \(P\) growing at rate \(r\) for \(n\) years becomes

\[
FV = P\,(1+r)^n
\]

The exponent is why the gap explodes. At \(n = 40\), \(1.03^{40} \approx 3.26\) while
\(1.07^{40} \approx 14.97\).

**The rule of 72.** Money doubles when \((1+r)^n = 2\), so \(n = \ln 2 / \ln(1+r)\). For small rates
\(\ln(1+r) \approx r\), which gives a doubling time of roughly \(72 / (\text{rate in \%})\) years.
That is about 24 years at 3% and about 10 at 7%, so over forty years the 3% dollar doubles less than
twice and the 7% dollar doubles almost four times.

</div>
</details>

---

## Sparklines on real holdings

In [[nav:birds-eye]] with **Holding** selected (or [[nav:dossier]] → Assets), holdings can show a **growth
sparkline**: a [[term:median]] path with a **risk cone**. The **line** is the compounding idea applied to that
item’s assumed [[term:mu|μ]]; the **band** shows spread from [[term:sigma|σ]]. [[term:hover|Hover]] a holding — e.g. a **US Equity** position
such as Target Date Equity — for assumptions and the cone detail.

You are not “proving” Springfield’s returns here — you are seeing that **every multi-year line in
the plan is built from the same growth language** the [[nav:growth-calculator]] uses in the open. The
difference is who supplies the rate: in the calculator you typed it, here the product resolved it.

[[img:exponential-growth-sparkline-cone]]

*[[nav:path:birds-eye|holding]], hover on a US Equity holding: median path plus a risk cone to the plan horizon —
compounding with uncertainty, not just a single line.*

[[jump:compounding|output__birds-eye__birds-eye.mode.holdings__birds-eye.assets-liabilities__line.birds-eye.holding-sparkline]]

---

## Endings, not path spaghetti

Other planning tools often show **all scenario paths** as lines from the **start year** through to
the **final year** — a full fan of journeys over time. That is a typical standard view: every year of
every path, drawn end to end. It is honest about [[term:sequence-of-returns]], but easy to drown in ink.

**This is that same idea, but only showing where net worth ends up on that last year.** The product
calls it a **Net Worth Distribution** — a **distribution diagram** (or **histogram**):

- Instead of drawing every path year by year, it keeps **only the ending value** of each path on the
  **last year**.
- Those endings form a cloud / histogram: how many paths land poor, typical, or rich at the horizon.
- Quartiles, [[term:gmf]], min/max, and success % sit next to that cloud so you can read the spread without
  tracing thousands of lines.

So: other tools often show **the journey**; this summary chart shows **where the journeys finish**.
Both are compounding **with** [[term:volatility]] and plan cash flows — the distribution is just the
end-of-horizon cut.

Open [[nav:forecaster]] → Simulation Summary (after a sim) to see it:

[[img:exponential-growth-nw-distribution]]

*Net Worth Distribution — each mark is roughly one path’s **ending** net worth on the last year (not
the full path over time). Red/orange mass near zero vs green further right is the spread of compounded
outcomes under spend, markets, and assumptions. Compounding also produces the lone path far to the
right: past the break the axis is log-scaled — the chart’s own caption says from where — so that path
stays in the picture without flattening everyone else into the left edge.*

[[jump:terminal-wealth|output__forecaster__forecaster.simulation-summary__simulation-summary.distribution__line.distribution.final-net-worth]]

Note what has been added at each step. The [[nav:growth-calculator]] had a rate and a horizon. The
sparkline added a **σ**, so one line became a cone. This chart adds the rest of the plan — spending, taxes, the
sequence markets happen to deal — so the cone becomes a cloud of endings. It is the same compounding
underneath all three.

---

## What to take away

| Idea | Plain meaning |
|------|----------------|
| **Compound growth** | Growth applies to a growing base, not only the original deposit. |
| **Rate × time** | Small rate gaps over long horizons dominate most one-year surprises. |
| **One line vs many** | A single smooth line is the easiest way to see the bend. It is not a forecast — real markets give you a range, and the plan shows you that range. |
| **Paths vs distribution** | Full path fans show every year of every scenario. We prefer to show you where those scenarios **end up**, as a distribution — it is the same information without the ink. |
| [[nav:assumptions]] | μ (and σ) are model inputs — researched or typed — not guarantees. |

---

## Where to go next

| Topic | Lesson |
|-------|--------|
| The scatter and the bands | [Risk and return](/learn/risk_and_return) |
| Two jumpy assets, one smoother ride | [Diversification and correlation](/learn/diversification_correlation) |
| The app map | [Getting around](/learn/getting_around) |

Take **Risk and return** next if the cloud in the last section is still the unfamiliar part: it is
the same spread, drawn as a trade-off rather than as an ending.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: ProsePrimary — Prose primary — teaching left; canvas scenery or omitted. -->
