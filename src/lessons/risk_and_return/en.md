<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/risk_and_return.md
tutilis-locale: en source
-->
# Risk and return

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.risk_return.tradeoff
  outline-path: Foundations › Risk and return › Risk and return tradeoff
  document-id: risk_and_return
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Higher expected return usually means rougher paths.
  port-source: dossiers/risk_and_return.md
-->

<!--- α <lesson_body> -->
Return without risk is incomplete. Risk without return is noise. This product puts **both** on the
**same picture** so you can see the trade-off you are assuming before you plan around it.

The live plan on the right is a **holdings-focused teaching sample** (`holdings_portfolio`): three
distinct positions with different expected return ([[term:mu|μ]]) and [[term:volatility]] ([[term:sigma|σ]]) so the scatter is
readable at a glance, plus **one home and two cash flows** — the fewest items that give each of the
three chips above the chart something to show. It is still not a full household; everything in it is
there to make one control legible.

---

## How to read the scatter

Exact path (the chart is inside a **closed collapsible** on entry):

1. [[nav:risk]] (main section)
2. **Current Risk** — the left of the two Risk views
3. Open **Analytic Risk** — expand this collapsible or you will not see the charts
4. **Risk vs. Return** scatter inside Analytic Risk

**The other view, Sensitivities**, is not a detour you are skipping by accident. Current Risk asks
*how bumpy are the things I hold, right now* — one snapshot, no time in it. Sensitivities asks a
different question: *which single input moves the outcome most* — it nudges one assumption at a time
and ranks what the plan felt. Same section, different question; no lesson covers it yet.

| Axis / mark | Meaning |
|-------------|---------|
| **Horizontal** | Risk — typically **σ** (volatility of the assumption) |
| **Vertical** | Return — typically **μ** (expected / assumed mean return) |
| **Each dot** | A holding (or comparable item) at its own (σ, μ) |
| **Portfolio ★** | The **blend** — where the whole book sits as one point |

**The corner everyone wants** is high return and low risk — **up and to the left**. Markets rarely
hand that out freely. Most real books sit on a trade-off: more assumed return usually comes with
more assumed bounce.

**Honesty:** μ and σ are **assumptions** (often researched defaults you can override), not promises
and not a forecast of next year’s path. The chart teaches the **trade-off**, not a prediction.

On entry both sections are **collapsed** — open **Analytic Risk** or the scatter never appears:

<div class="lesson-img-stack">

[[img:risk-return-collapsibles-closed]]

<p class="lesson-img-caption"><strong>Closed on entry</strong> — the chips are along the top, and Analytic Risk and Tabular Risk stay folded until you open them.</p>

[[img:risk-return-scatter]]

<p class="lesson-img-caption"><strong>Analytic Risk, first chart</strong> — Risk vs. Return: every shown item at its own (σ, μ), with the portfolio ★ at the blend of the holdings and, with Real Assets on, the home.</p>

[[img:risk-return-band]]

<p class="lesson-img-caption"><strong>Analytic Risk, second chart</strong> — Portfolio Range Over Time: the [[term:median]] path, a dashed average line sitting above it, and a cone of outcomes that keeps widening the further out you look.</p>

</div>

Two things in that second picture are worth a sentence, because both look like mistakes and neither
is. The dashed average line sits **above** the middle path, and it stays above it — that is not the
chart double-counting. A few very good outcomes pull an average up in a way they cannot pull a
middle outcome up, and the more the holdings bounce, the wider that gap gets. The middle path is
the one to plan against. And the cone keeps widening forever rather than settling down, because
each year's uncertainty stacks on the last; the plan is not getting riskier, the question is simply
reaching further ahead.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — why the average sits high, and why the cone widens</summary>
<div class="lesson-math-body">

**The gap has a name.** [[term:compounding|Compounding]] multiplies returns rather than adding them, so what a balance
actually grows at over many years is the [[term:geometric-mean]], and that is always at or below
the arithmetic average of the same returns. The shortfall grows with σ: roughly half the variance,
so a book at σ 16% gives up on the order of 1.3 points a year against its own average. This is
usually called [[term:volatility-drag|volatility drag]], and it is why the product's north-star path is the
[[term:geometric-mean]] one rather than the [[term:amf|arithmetic mean forecast]].

**The cone widens as √t.** If each year's return is an independent draw, variances add across
years while the expected return only accumulates linearly — so the spread grows with the *square
root* of the horizon, σ√t, not with the horizon itself. Four times as long is twice as wide, not
four times. That is the shape you are looking at, and it is why a long horizon widens the cone
without meaning the holdings changed.

Both numbers come from the same σ on the horizontal axis of the scatter above — one control, two
pictures.

</div>
</details>

---

## Guided walk (3–5 minutes)

1. Follow the path above: [[nav:risk]] → Current Risk → open Analytic Risk → Risk vs. Return.
2. **Check the Holdings chip** so each position is a separate dot (default may show accounts only).
3. **Find the calmest** holding (left, lower σ) and the **jumpier** one (right, higher σ). On this
   sample that is roughly: calmer positions left/lower; higher μ **and** higher σ **up and to the
   right** — more expected return, more risk.
4. **Find the portfolio star** — a **weight-aware mix**, not simply the wildest name.
5. Toggle **Compare to categories** if available — category reference points help answer “is this
   holding aggressive relative to a whole asset class?”
6. Toggle **Size by value** if available — larger dots are larger dollar weights; the star is
   pulled by what you actually own, not by every ticker equally.
7. Open **Tabular Risk** (the other Current Risk collapsible) for the **Risk & Return by Item**
   table — same data, sortable. Sort by σ, then by μ.
8. **Walk the three chips** — the next section is about what each one puts on the chart.

### What the three chips put on the chart

Five chips sit above the scatter. Two of them change how dots are *drawn* — **Compare to
categories** and **Size by value**, both covered in the walk above. The other three change *what is
on the chart at all*: **Real Assets**, **Cash Flows**, **Holdings**. They are not three views of the
same thing — each adds a different *kind* of item, drawn in its own color, and only some of them
count toward the ★.

| Chip | Adds | Color |
|------|------|-------|
| **Real Assets** | the home | brown |
| **Holdings** | the three positions separately (instead of one account dot) | blue |
| **Cash Flows** | salary (in) and living expense (out) | green / rose |

[[img:risk-return-all-chips]]

*All three chips on. Every item type at once: the brown home, the three blue holdings spread from
bond to concentrated stock, and — far left, where growth assumptions are calm — the green salary and
rose living expense.*

**Real Assets moves the ★.** The star is the blend of your holdings and, when Real Assets is on,
your real assets as well. The home expects less return than the stock funds and does not rise and
fall with them, so turning it on pulls the star down and to the left. Turning Holdings on only
splits the account dot into its positions. The blend is the same money either way, so the star
stays where it is.

**Cash flows are on the chart but never in the blend.** A flow's μ and σ are its *growth*
assumption: how fast the salary rises and how fast the expense inflates. That is a different
quantity from an equity's expected return, even though both land on these axes. Read the flow dots
as how uncertain each stream's growth is. They do not say what anything earns. A stream of payments
is also spent as it arrives, so it is not a balance that can be averaged in with your investments.
What Cash Flows adds below the chart is one line: how many times your assets and your incomes,
counted at present value, cover your planned spending. It is the same balance Bird's Eye weighs
when its view includes cash flows.

**The cone below follows the same chip.** Below the scatter, **Portfolio Range Over Time** projects
the starred portfolio forward as a widening cone. With Real Assets off, the cone is your holdings
alone. With it on, the home joins and everything you own is projected. Those are two honest answers
to two different questions: *how risky is what I invest*, and *how risky is what I own*. The chip
chooses which question both charts answer.

### Holdings on

[[img:risk-return-holdings-on]]

*Holdings chip on: each holding is its own dot (this sample: bond-like left, broad equity mid-right, concentrated stock far right). The ★ is the portfolio blend.*

**What this chart is not:** it is not a sell list. A dot far to the right is not a mistake to
correct, and nothing here ranks your holdings as keep-or-drop. Two reasons, and either alone is
enough. First, the axes are **assumptions** — long-run μ and σ you or a researched default supplied
— so a dot does **not** move because the market fell last quarter, and a chart that ignores recent
prices cannot be telling you to act on them. Second, risk is not damage: a high-σ holding is doing
its job if you are paid for the bounce and you can sit through it. What the picture *is* good for is
noticing that you own something whose assumed risk you had not registered — which is a question to
go ask, not an answer.

### Size by value

[[img:risk-return-size-by-value]]

*Size by value: dollar weight shows up as dot size — the ★ is pulled by what you actually own, not equal weight on every ticker.*

### Tabular Risk

[[img:risk-return-tabular]]

*Open **Tabular Risk** for two side-by-side cards:*

1. **Risk & Return by Item** — each holding’s `N(μ, σ)` and value (sortable; chart for seeing,
   table for ranking).
2. **Modeled Asset Correlations** — the same pair format as Assumptions → Modeled Asset
   Correlations, filtered to **categories this plan actually uses**. When that list is long, the
   card matches the items table height and scrolls with a fade.

### Name, don’t deep-dive: ρ included

Next to the portfolio ★ readout you will see **[[term:rho|ρ]] included** (default, switch on) or **ρ not
included** when toggled off. That is about how holdings move **together**, not one holding’s own σ.
Full treatment: [Diversification and correlation](/learn/diversification_correlation). Here: know it
exists — and that turning ρ **off** is what many tools do by **ignoring** cross-holding [[term:correlation]]
entirely.

For typical **positive** equity ρ, ignoring those cross terms **understates** portfolio risk: σₚ
falls toward √(Σ wᵢ²σᵢ²) and the ★ often **slides left**. Negative ρ works the other way
(dropping [[term:diversification]] can push risk up). The correlation card above is the cross terms the
toggle is including or zeroing.

**Why the ★ sits left of its ingredients.** This is the one piece of arithmetic worth carrying out
of this lesson. Whenever holdings are less than perfectly correlated — any ρ **below 1** — portfolio
σ comes in **below the value-weighted average** of the individual σs, while portfolio μ is exactly
the value-weighted average of the individual μs. Return adds; risk does not. That gap is the entire
mechanical content of [[term:diversification]], and you can watch it on the chart: the ★ sits to the
**left** of where a straight blend of the dots would put it, and the lower the ρs, the further left
it sits. Set every ρ to 1 and the gap closes — the ★ lands on the weighted average and the free
lunch is gone.

This is variance arithmetic, not counsel: it says what the blend **does**, and says nothing about
which holdings anyone should own.

---

## What “good” and “toxic” look like

| Region (rough) | Read as |
|----------------|---------|
| **Top-left** | Attractive assumptions — high μ, low σ. Scrutinize whether the assumptions are honest. |
| **Bottom-right** | Painful assumptions — low μ, high σ. “Why own this at these inputs?” |
| **Along a frontier** | Normal trade-off space; portfolio ★ should make sense given weights. |

If a single concentrated holding sits far right and is large by value, the star and the plan’s
[[term:monte-carlo|Monte Carlo]] bands will feel that concentration even when the rest of the book looks calm.

---

## What to take away

- Risk and return belong on **one** picture for the book you actually hold.
- **Path:** Risk → Current Risk → **open Analytic Risk**; check **Holdings**.
- The **star** is the portfolio; dots are the ingredients — and it sits **left** of their weighted
  average whenever ρ < 1. Blending averages the return and *less* than averages the risk; that gap
  is what diversification is.
- Assumptions drive the plot — change μ/σ (or growth categories) and the picture moves. It is
  **not** a sell list, and it does not react to last quarter’s prices.
- The ★ is always your **holdings** blend — the chips add dots, they do not move it. The **cone**
  below the scatter is the chart that follows the Real Assets chip.
- Correlation is a **second** axis of honesty; handle it next.

[[jump:sigma|output]]

## Where to go next

| Topic | Lesson |
|-------|--------|
| Correlation / ρ honesty | [Diversification and correlation](/learn/diversification_correlation) |
| Compounding without the scatter | [Exponential growth](/learn/exponential_growth) |
| Full household tour | [Meet the Springfield household](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
