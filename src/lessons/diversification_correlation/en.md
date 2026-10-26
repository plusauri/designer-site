<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/diversification_correlation.md
tutilis-locale: en source
-->
# Diversification and correlation

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.diversification.correlation
  outline-path: Foundations › Diversification › Correlation and diversification
  document-id: diversification_correlation
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/diversification_correlation.md — teaching body unchanged.
  port-source: dossiers/diversification_correlation.md
-->

<!--- α <lesson_body> -->
**Most of the time, major asset classes move together — not against each other.** [[term:correlation|Correlation]] ([[term:rho|ρ]])
is that together-ness. [[term:diversification|Diversification]] is not “own more tickers”; it is **own risks that do not
always move as one**. When ρ is positive (the usual case), a mix still has **shared** risk in the
math. Pretending holdings are independent **hides** that risk.

The product has a switch for exactly this. **ρ included** (the default) counts the co-movement;
**ρ not included** drops it and treats the holdings as independent. This lesson is about what that
switch does to a plan whose holdings really do move together.

The live plan on the right is a **minimal two-holding sample** (`two_correlated_assets`):

| Holding | What it is | Value / [[term:basis\|cost basis]] | Assumed return ([[term:mu\|μ]]) | Assumed volatility ([[term:sigma\|σ]]) |
|---------|------------|-----------------------------------|--------------------------------|---------------------------------------|
| **US Equity** | A broad basket of US stocks ([[term:equity\|equity]]) | $500k / $300k | ~7% | ~16% |
| **US High Yield** | [[term:high-yield\|High-yield]] bonds — lower-rated company debt that tends to fall alongside stocks | $500k / $300k | ~6% | ~10% |

Equal holdings → **$1M** in total. In the product's own correlation table, US equity × US high [[term:yield]]
sits at **ρ ≈ +0.69** — strongly **positive**. So **ρ not included** understates this plan's risk: on
the risk chart, the portfolio ★ typically slides **left**, toward “calmer”.

[[jump:correlation|output__risk__risk.correlations]]

**Living Expense** is **$40k/yr** (mild [[term:cola]]) — the classic **~4%** initial [[term:withdrawal-rate|withdrawal rate]] on
$1M. It does not change where the holdings sit on the risk chart; it creates [[term:drawdown]], so
[[term:monte-carlo|Monte Carlo]] success at Silver is usually **below 100%** with ρ included — and then **ρ not
included** often **raises** success toward 100%. That rise is what “hiding risk” means in forecast
language.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

The word "bond" on a holding does not tell you whether it diversifies a stock portfolio. In the
product's correlation table, US high-yield bonds move with US stocks at about **+0.69**, so they tend
to fall when stocks fall. US [[term:treasury-security|Treasuries]] sit at about **−0.31** and have often *risen* when
stocks fell. This lesson pairs stocks with high yield because that is the common case, where two
holdings tend to fall together.

</div>
</aside>

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Does a holding labeled "bond" automatically diversify a stock portfolio?** See
   [What the data looks like](#what-the-data-looks-like).
2. **How does the strength of correlation change how jumpy a mix is?** See
   [The puzzle](#the-puzzle-positive-correlation).
3. **How do two holdings' volatilities combine into one portfolio risk figure?** See
   [How two volatilities combine](#how-two-volatilities-combine).
4. **What happens to the risk figure when the product's ρ switch is turned off?** See
   [How two volatilities combine](#how-two-volatilities-combine).
5. **Does the forecast account for correlations rising in a crash?** See
   [Crisis honesty](#crisis-honesty).

</div>
</aside>

---

## What the data looks like

| Pair type | Typical ρ (rough) | Planning takeaway |
|-----------|-------------------|-------------------|
| **Equity vs equity** (regions, styles, sectors) | Often **strongly positive** | Co-movement **adds** to the portfolio's risk |
| **Equity vs high yield** | Often **strongly positive** (~0.6–0.8 in many tables) | “Bond” label does not mean diversifier |
| **Equity vs high-quality government bonds** | Mixed by era — can be low or mildly **negative** | Useful diversifier *when* ρ is low |
| [[term:market-crash\|Stress / crash periods]] | Many pairs **rise toward +1** | Co-movement intensifies when it hurts most |

**About that last row.** A stress or crash period is a rare, sharp fall across markets — 2008 and
March 2020 are the recent ones — lasting months to a couple of years and arriving perhaps once a
decade. It is not the everyday case, and the row is not a prediction. It is there because those are
the moments diversification is *for*, and they are also when it does the least: holdings that
usually differ tend to fall together. Planning for them is a matter of sizing, not worry — **Crisis
honesty** below says what the product does and does not do about it.

Read the table one way: the **label** on a holding does not tell you whether it diversifies. Only ρ
does, and only against the thing you already own.

**Where ρ comes from.** The product resolves ρ from its built-in table of *category* pairs (US
equity × US high yield, and so on), plus any run overrides. A dossier can also store its own
`dossier_correlation_matrix`, but the live Risk / forecast path does not read that field yet. This
sample is wired so the **categories themselves** carry positive ρ.

---

## The puzzle: positive ρ (correlation)

ρ is the correlation from the overview — how much two holdings move together, from −1 (opposite)
through 0 (unrelated) to +1 (lockstep). Three ranges matter:

- ρ near **+1**: the mix is almost as jumpy as its ingredients.
- ρ **positive but &lt; 1** (this sample, and most real portfolios): some diversification compared
  with +1, but the two still share risk — leave that shared part out and the portfolio looks **too
  safe**.
- ρ near **0** or **negative**: a large free calm-down — special cases (e.g. some stock / Treasury
  eras), not the everyday default.

---

## How two volatilities combine

No formula needed for the idea. Think of portfolio risk as **two piles**:

1. **Each holding's own risk**, scaled down by how much of the portfolio it is. Half your money in a
   16%-volatility holding does not bring 16 points of risk to the mix — it brings much less, because
   the other half is doing something else.
2. **A together-ness pile**: extra risk that exists only because the two holdings tend to fall on
   the same days. This is the **only place ρ appears**. Positive ρ makes the pile bigger; ρ of zero
   makes it vanish; negative ρ turns it into a *subtraction*.

| ρ between the two | Together-ness pile | Portfolio risk |
|-------------------|--------------------|----------------|
| **+1** | As big as it gets | The weighted **average** of the two volatilities — no diversification |
| **Positive, &lt; 1** (**typical**) | Still **adds** risk | This sample; most stock / high-yield pairs |
| **0** | Nothing | The holdings are independent |
| **Negative** | **Subtracts** | A diversification bonus, when it holds |

**This sample, in numbers.** Half in US Equity (σ 16%), half in US High Yield (σ 10%), ρ = +0.69.
The piles are in “[[term:volatility]] squared” units, which is why the last step takes a square root:

<table class="lesson-table-ledger">
<thead>
<tr><th>Piece</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>Own-risk piles, both holdings</td><td>89</td></tr>
<tr><td>Together-ness pile, ρ = +0.69</td><td><strong>+55</strong></td></tr>
<tr><td>Total → portfolio σ</td><td>144 → √144 ≈ <strong>12.0%</strong></td></tr>
<tr><td>Same holdings, <strong>ρ not included</strong></td><td>89 → √89 ≈ <strong>9.4%</strong></td></tr>
</tbody>
</table>

Those two numbers are where the ★ sits in the two pictures under **Where to look** (to within the
rounding of σ 16 and σ 10 — the holdings ride the product's own category assumptions, which carry a
few more decimals). Nothing about the holdings changed; one pile was simply left out.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — the formula</summary>
<div class="lesson-math-body">

The two piles are the two-asset **portfolio variance**, with weights \(w\), volatilities \(\sigma\), and
correlation \(\rho\):

\[
\sigma_p^2 = w_1^2\,\sigma_1^2 + w_2^2\,\sigma_2^2 + 2\,w_1 w_2\,\sigma_1\sigma_2\,\rho_{12}
\]

| Term | Role |
|------|------|
| \(w_1^2\sigma_1^2\), \(w_2^2\sigma_2^2\) | The own-risk piles — each holding's variance, scaled by its weight squared |
| \(2 w_1 w_2 \sigma_1 \sigma_2 \rho_{12}\) | The together-ness pile — the only place ρ appears |

With \(w_1 = w_2 = 0.5\), \(\sigma_1 = 16\), \(\sigma_2 = 10\), \(\rho_{12} = 0.69\):

\[
\sigma_p^2 = 64 + 25 + 2 \cdot 0.25 \cdot 16 \cdot 10 \cdot 0.69 \approx 89 + 55 = 144
\qquad\Rightarrow\qquad \sigma_p \approx 12.0\%
\]

Setting \(\rho_{12} = 0\) (**ρ not included**) drops the last term: \(\sigma_p = \sqrt{89} \approx 9.4\%\). At
\(\rho_{12} = 1\) the expression is a perfect square, \((w_1\sigma_1 + w_2\sigma_2)^2\), so portfolio σ is the
weighted average, 13% — no diversification at all.

</div>
</details>

### ρ included vs ρ not included

The product's switch is labeled **ρ included** and starts **on** (green): the together-ness pile is
counted. Switch it **off** and the label reads **ρ not included**: the forecast treats the holdings
as independent and the pile is dropped.

| True ρ | Effect of **ρ not included** |
|--------|------------------------------|
| **Positive** (this sample) | Removes a risk-adding pile → **too calm**; ★ often slides **left** |
| **Negative** | Removes a benefit → looks riskier; ★ slides **right** |

**Planning rule:** a portfolio whose holdings move together must keep **ρ included** for an honest
risk figure.

---

## Crisis honesty

Real ρ is **time-varying**, and crashes push many pairs **toward +1** — co-movement intensifies
exactly when it hurts most. The product runs a **static** category table by default: a clear
planning lever, not a full crisis engine. It does not auto-spike in a panic, so a plan that already
looks tight with today's ρ is tighter than it reads in one. That is an honesty limit of the current
model, stated rather than hidden.

<aside class="lesson-saying" data-saying="free-lunch">

Diversification is the closest thing to a free lunch, and it shrinks when it is wanted most. In a crash correlations rise toward 1, and the risk the blend was saving comes back.

</aside>

---

## Where to look

### 1. Scatter path

1. [[nav:risk]] → **Current Risk**
2. Open **Analytic Risk** (closed on entry)
3. **Risk vs. Return**
4. Turn **Holdings** **on** so both holdings are separate dots (not only the account rollup)

| Holding | Where | Why |
|---------|-------|-----|
| **US Equity** | Up and right | Higher μ and σ |
| **US High Yield** | Mid-left of equity | Lower μ / σ, but still moves with stocks |
| **★ Portfolio** | Between them | 50/50 blend with **ρ ≈ +0.69** when ρ is included |

### 2. Toggle ρ (watch the ★)

- **ρ included** (on, green): the together-ness pile is counted — honest portfolio σ is **higher**.
- **ρ not included** (off): the pile is dropped — ★ / σ typically move **left** (rosier).

Both figures below are the app's own chart, redrawn from this sample at the **same width**, so the
only difference between them is the toggle — and the ★'s horizontal move is the only thing that
moves. On this sample today the star goes from about **12.0%** σ to about **9.4%**, at the *same*
6.0% return: left, not down.

<div class="lesson-img-stack">

[[img:diversification-risk-rho-included]]

<p class="lesson-img-caption"><strong>ρ included</strong> (green): honest co-movement — the ★ sits at the <strong>full covariance</strong> σ — the honest blend of the two holdings.</p>

[[img:diversification-risk-rho-not-included]]

<p class="lesson-img-caption"><strong>ρ not included</strong> (off): independent vols only — the ★ slides <strong>left</strong>. Same holdings, same return, lower reported portfolio risk.</p>

</div>

### 3. Transforms → Correlations (ρ) + success %

1. Open [[nav:transforms]].
2. Find the **Correlations (ρ)** switch. It starts **on**, which means the run *counts*
   co-movement — the same **ρ included** state as the risk chart. Switch it **off** to run the plan
   as if the holdings were independent (**ρ not included**), then **re-simulate**.
3. Compare the **Simulation Summary** success at [[term:medals|Silver]]: **Original** (switch on) vs
   **Modified** (switch off).

[[jump:correlation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.correlations]]

On this $1M / $40k sample the last point or two moves with the draw. Read the success share each half prints:

| State | What changes |
|-------|----------------|
| **ρ included** (Original) | Honest co-movement + spend |
| **ρ not included** (Modified) | Higher success — the forecast understated the risk |

Original vs Modified sit side by side so the clouds and the success shares compare cleanly:

[[img:diversification-transforms-rho-on-vs-off]]

*Punchline: dropping positive ρ makes the plan look safer (success up, left tail less harsh) without changing a dollar of spend.*

Nothing about the plan changed between those two runs — not the holdings, not the spend, not the
horizon. Only whether the model was allowed to admit that the two holdings fall together. That is why
this is the lesson's last word rather than a footnote: **the risk you hide does not leave; it stops
being counted.**

---

## What to take away

- Lead with **positive ρ** — the everyday default for a portfolio with more than one kind of risk.
- **US equity × high yield** is a real positive pair; Treasuries are a different story.
- **ρ not included** with true ρ &gt; 0 **understates** risk.
- Crises can push ρ **toward +1**.
- Path: Risk → Current Risk → **Analytic Risk**; **Holdings**; toggle **ρ included** (label left of switch).

### Words used in this lesson

| Word | In one line |
|------|-------------|
| **Correlation (ρ)** | How much two holdings move together, from −1 to +1. Positive is the everyday case. [More](/glossary/correlation) |
| **Diversification** | Owning risks that do not all move as one — not simply owning more things. [More](/glossary/diversification) |
| **Volatility (σ)** | How much a holding's returns bounce around from year to year. [More](/glossary/volatility) |
| **US equity** | US stocks — ownership shares in companies, not the “equity” in your house. [More](/glossary/equity) |
| **High yield** | Lower-rated company bonds: more interest, and stock-like falls in a sell-off. [More](/glossary/high-yield) |
| **Treasury** | US government debt — the classic holding that has often risen when stocks fell. [More](/glossary/treasury-security) |
| **Stress / crash period** | A rare, sharp fall across markets, when correlations rise toward +1. [More](/glossary/market-crash) |
| **ρ included / ρ not included** | The product's switch: count the co-movement, or pretend the holdings are independent. |

## Where to go next

| Topic | Lesson |
|-------|--------|
| Risk/return scatter first | [Risk and return](/learn/risk_and_return) |
| Word list | [Financial plan glossary](/learn/financial_plan_glossary) · [Tutilis glossary](/learn/tutilis_glossary) |
| Full household tour | [Meet the Springfield household](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
