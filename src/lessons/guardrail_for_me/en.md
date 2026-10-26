<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/guardrail_for_me.md
tutilis-locale: en source
-->
# Guardrail For Me

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.guardrail_for_me
  outline-path: Household planning › Success and guardrails › Guardrail for me
  document-id: guardrail_for_me
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Ported from public dossiers/guardrail_for_me.md — teaching body unchanged.
  port-source: dossiers/guardrail_for_me.md
-->

<!--- α <lesson_body> -->
Retirees and researchers have spent decades asking a deceptively simple question: *how much can I
spend from a portfolio without running out?* No single answer fits every household, but a handful of
well-known approaches have shaped how people talk about “safe” spending. This lesson invites you to
meet those approaches **on your own plan** — not as abstract percentages, but as side-by-side paths
you can compare to the lifestyle you modeled.

### With gratitude

The six studies in **Guardrails** rest on other people’s hard work: historical market analysis,
decision-rule design, actuarial tables, and plain-language writing that made those ideas usable.
**We are grateful** to the authors and publishers below. Our sandbox is an educational
*illustration* of their published-style rules under one shared path — it is **not** a reprint of
their papers, **not** a certification of their results, and **not** advice. Where a public link is
available, we point to it so you can go to the source.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Works cited — the six studies</summary>
<div class="lesson-bibliography-body">

- **Bengen SAFEMAX.** William P. Bengen, [“Determining Withdrawal Rates Using Historical Data”](https://www.financialplanningassociation.org/sites/default/files/2021-04/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf), *Journal of Financial Planning*, 1994 (reprint). The later valuation-aware framing is in *A Richer Retirement*.
- **Kitces ratchet.** Michael Kitces, [“The Ratcheting Safe Withdrawal Rate”](https://www.kitces.com/blog/the-ratcheting-safe-withdrawal-rate-a-more-dominant-version-of-the-4-rule/), Kitces.com, 2015.
- **Guyton–Klinger.** Jonathan Guyton and William Klinger, [“Decision Rules and Maximum Initial Withdrawal Rates”](https://www.financialplanningassociation.org/sites/default/files/2021-11/2006%20-%20Guyton%20and%20Klinger%20-%20Decision%20Rules%20and%20SWR%20%281%29.PDF), *Journal of Financial Planning*, 2006.
- **Maggiulli 3.65%.** Nick Maggiulli, [*Of Dollars And Data*](https://ofdollarsanddata.com/), and *The Wealth Ladder*. Spending 0.01% a day comes to about 3.65% a year.
- **Modified RMD.** Internal Revenue Service, [Publication 590-B](https://www.irs.gov/publications/p590b), Uniform Lifetime Table. The product extends it as a planning table for ages before RMDs start.
- **Safety-first.** Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019. Pfau's safety-first approach covers essential spending with guaranteed income first, from Social Security, pensions and annuities, and invests the rest. The product rule follows that shape: essentials are covered by guaranteed income, and a discretionary rate is spent from the portfolio that is left. It is an illustration of the approach, not a rule taken from a single table in the book.

</div>
</details>

**Guardrails** then runs those published-style rules against **your** portfolio size, horizon, and
lifestyle needs under **one shared sandbox path**. This lesson is about **personalizing** that
comparison: start from the Springfield household nest egg, see what each study would spend, and set
it next to the plan’s own incomes and needs. It is not a [[term:monte-carlo|Monte Carlo]] survival score and not
investment advice.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Nick Maggiulli's rule of thumb is to spend **0.01%** of your portfolio each day. That sounds tiny,
but over a year it adds up to **3.65%**, a little under the famous 4% rule. On a \$1 million
portfolio it comes to about \$100 a day.

</div>
</aside>

The live plan on the right is **Springfield Baseline** (`springfield_baseline`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What does Guardrails compare, and how is it different from a Monte Carlo forecast?** See
   [What Guardrails is](#what-guardrails-is-and-is-not).
2. **Why does study spending sit near zero until retirement, and why does the default return start
   at 8%?** See [What Guardrails is](#what-guardrails-is-and-is-not).
3. **Given my net worth and plan horizon, what spending path would each published withdrawal rule
   allow?** See [Where to look](#where-to-look).
4. **How does each rule's spending sit next to my lifestyle needs and my non-portfolio income?** See
   [Where to look](#where-to-look).
5. **How much starting portfolio would each rule need so a study-bound funding buffer stays
   non-negative?** See [Where to look](#where-to-look).
6. **Why can the coverage buffer be green while Monte Carlo success is well below 100%?** See
   [Where to look](#where-to-look).
7. **What does this sandbox deliberately not claim?** See [What this is not](#what-this-is-not).

</div>
</aside>

---

## What Guardrails is (and is not)

| | Guardrails | <span class="product-mark product-mark-on-dark"><span class="product-mark-label">Tutilis Simulation</span></span> |
|:---|:---|:---|
| **Your forecast** | **Never applied.** Each rule runs here only, on the side path, so you can compare them. | Spends what your cash flows and residual sell/invest strategy say. It applies **no** withdrawal rule from this page. |
| **How markets work** | One **fixed** path: constant inflation and nominal return. The researchers already did their own Monte Carlo and extensive analysis and published **safe** spend functions (or decision rules). We **use those fruits** — we do **not** re-run or re-validate their studies here. | **Monte Carlo** clouds over many random paths, plus residual policy, taxes, and the rest of the full plan loop. |
| **What you compare** | Side-by-side study recurrences for **Bengen SAFEMAX**, **Kitces ratchet**, **Guyton–Klinger**, **Maggiulli 3.65%**, **Modified RMD**, and **Safety-first**. Before primary retirement the sandbox **grows only**; from retirement each rule computes spend \(S_t\), then grows the remainder. | Path-by-path success of **your** plan under **your** success definition (Gold / Silver / Bronze). |
| **What you input** | A **small** set of driving sandbox inputs — portfolio size, inflation, arithmetic **portfolio return [[term:mu\|μ]]**, **volatility [[term:sigma\|σ]]** (Set B path growth), CAPE (**Bengen SAFEMAX**), essential / guaranteed (**Safety-first**), study years. That is the tradeoff: the studies do the hard work and hand you a simpler, more back-of-envelope rule for what they claim you can spend. Edits stay here; nothing is written to the dossier. | Durable **dossier** assumptions (growth, taxes, residual sell/invest, success rule, and the household itself). |

Each year after retirement onset the engine withdraws the rule’s allowable spend (capped at cash),
then grows the remainder. **Set A** rules (Bengen SAFEMAX, Kitces, Guyton–Klinger) grow at arithmetic
**μ**. **Set B** rules (Maggiulli, Modified [[term:rmd]], Safety-first) grow at a simple vol-drag rate
\(r_{\mathrm{adj}} \approx \mu - \tfrac12\sigma^2\) so percent-of-portfolio paths are not
sugar-coated on a risk-free μ line — methodological fairness, **not** a full Monte Carlo re-run of
the papers.

### Study onset at primary retirement

Published rules are framed for **someone who is retiring** (or already retired). Guardrails matches
that footing:

1. **Before primary retirement** — the sandbox portfolio **only grows**. There is no study withdrawal
   \(S_t\). The nest egg that appears at retirement is what the rule would start with if you opened
   Guardrails that year.
2. **From retirement onward** — each rule’s first draw year is rule-relative year 0 (seed rates, [[term:cape]]
   cell, Kitces base, and so on land once, on the grown nest egg).
3. **Already retired** (or no retirement year on the primary owner) — draws start at forecast start
   (“now”).

On Springfield, retirement is still years ahead, so early years on **Spending paths** sit near **\$0
study spend** while the portfolio compounds. That is intentional, not a broken chart.

### Portfolio return is nominal

The **Return μ** knob is a **constant [[term:nominal]]** annual rate after each withdrawal (default **8%**,
with default [[term:inflation]] **2.5%** ≈ mid-single-digit real for a balanced book). The sandbox keeps both
knobs in a **reasonable multiyear band** (non-negative through about **15%**) so the path stays an
illustration of published rules, not a deflation or “50% forever” toy.

Why not 5% or even 7% as the default? At **5% nominal** (~2.5% real) both **Bengen SAFEMAX** and
**Kitces ratchet** tend to **spend the whole portfolio** on multi-decade horizons. At **7%**,
**Bengen SAFEMAX** still often **depletes** near year 40 under its valuation-based starting rate
(~5.1% at CAPE 22) with pure [[term:cola]] — common when the study horizon matches a long plan. That is
arithmetic, not a UI bug: study-style starting rates assume something closer to historical balanced
returns (roughly **7–8% nominal / ~4–5% real** for a 50/50–60/40 mix). The default sits at the
**upper** end of that band so the first open does not look like “every rule fails.”

You can still set **7%** or **5%** within the slider to see which paths drain — that is a useful
experiment, not a bug.

### Sequence-of-returns caveat (read this)

**Bengen SAFEMAX** comes from **historical return sequences**, not from a single average return.
A constant 8% path can only **illustrate the mechanism** of the rule (COLA, valuation-based initial
rate, depletion markers). It **cannot** reproduce SAFEMAX or prove a safe spending rate. Treat the
chart as a **comparison sandbox**, not a historical replay.

### Is 4% still safe?

William Bengen's 1994 study found that an inflation-adjusted 4% withdrawal survived every 30-year period in US history, and the Trinity study of 1998 reached a similar answer with a different method. Wade Pfau did much of the research that tested how far that answer travels. In 2010 he ran the same kind of test on 109 years of market data from 17 developed countries, and a 4% real withdrawal would have been safe in only 4 of them. In 2013, with Michael Finke and David Blanchett, he showed that when bond returns are set to the low yields of that year rather than their historical average, the estimated failure rate of a 4% plan with half in stocks rises from about 6% to 57%.

Neither paper says 4% is wrong for every household. Both say that a safe rate depends on the returns the next decades deliver, and that the US past was unusually kind. That is the reason the **Return μ** knob in this sandbox matters, and the reason to try the lower settings in [Try this](#try-this). Pfau's later answer to the problem is the safety-first approach that the **Safety-first** rule illustrates: build a floor of guaranteed income for essential spending, so less depends on any [[term:withdrawal-rate|withdrawal rate]] being safe.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Related research — studies that test the 4% rule</summary>
<div class="lesson-bibliography-body">

- Philip L. Cooley, Carl M. Hubbard and Daniel T. Walz, "Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable," *AAII Journal*, February 1998 (the Trinity study).
- Wade D. Pfau, ["An International Perspective on Safe Withdrawal Rates: The Demise of the 4 Percent Rule?"](https://www.financialplanningassociation.org/article/journal/DEC10-international-perspective-safe-withdrawal-rates-demise-4-percent-rule), *Journal of Financial Planning*, December 2010.
- Michael Finke, Wade D. Pfau and David M. Blanchett, ["The 4 Percent Rule Is Not Safe in a Low-Yield World"](https://www.financialplanningassociation.org/article/4-percent-rule-not-safe-low-yield-world), *Journal of Financial Planning*, June 2013. Winner of the FPA's 2014 Montgomery-Warschauer Award.
- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.

</div>
</details>

---

## Where to look

### Open Guardrails

1. On the left **nav rail**, choose **Guardrails** (health/shield icon with a gold accent — with
   Region and the tools cluster, not inside Forecaster).
2. The panel is one scrollable page in two bands: a **top sandbox** (scenario, rule summary,
   spending paths) and a **bottom personalization** band (one study against your plan). Drag the
   horizontal grabber under the top band to reclaim height after you set the knobs; the personal
   charts stay below.

[[jump:guardrails|output__guardrails__guardrails.rule-summary]]

### Top section — shared studies

Contents in the **top section** (Shared scenario · Rule summary · Spending paths):

[[img:guardrails-top-band]]

*Sized so the main knobs and Rule summary sit with Spending paths — change a control and the paths
update in the same view. Shrink the top band with the grabber when you want more room for
personalization below.*

**Shared scenario** (left) and **Rule summary** (right) sit side by side when the window is wide —
drag the vertical splitter between them. **Spending paths** sits under both; multi-select chips in
the chart title show or hide curves. Scenario edits stay in this sandbox — nothing is written to the
dossier.

### Bottom personalization — your plan

Contents in the **bottom personalization** band (study chips · three CF views · coverage buffer):

[[img:guardrails-personalization-band]]

*Personalization and coverage share the lower band so you can pick a study, switch views, and read
the buffer without leaving the page. On Springfield under defaults the buffer is often green /
[[term:solvent]].*

Maps **one** selected study against your plan. Study chips above this band pick which rule feeds
**Personalization of the Study** and the **coverage buffer** (separate from which curves show on
Spending paths).

**Personalization of the Study** is one Cash Flow chart with three exclusive views:

| View | What it shows |
|------|----------------|
| **Study Capacity** | Only the selected study’s portfolio spend along the shared path (pre-retirement years near \$0 by design) |
| **Modeled Inc/Exp (No Portfolio)** | Plan non-portfolio incomes and lifestyle expenses as category stacks — no study overlay |
| **Modeled with study income** | Plan stacks **plus** study portfolio spend — the year-by-year twin of the funding story the coverage buffer tallies |

Read the **net cash-flow line** as on the Forecaster [[nav:cf-chart]]: **above** the year legend is
positive / surplus; **below** is negative / shortfall. The coverage buffer under the chart is a
purchase-power running tally of those same nets (green solvent above zero; red unfunded below).

### Shared scenario (controls)

| Control | Role |
|---------|------|
| **Portfolio** | Starts from dossier net worth; slider / edit for “what if this size?” |
| **Liquid NW** | **On by default** — seed from investable accounts minus liabilities (same idea as [[nav:birds-eye]] liquid net worth). Turn off to include house and other real assets. |
| **Inflation** | Constant COLA / onset inflation for valuation rules (non-negative through ~15%) |
| **Return μ** | Constant post-withdrawal growth — see above (0% through ~15%) |
| **Vol σ** | Set B path-growth drag only |
| **CAPE** | **Bengen SAFEMAX** valuation matrix at **retirement onset** only |
| **Essential / Guaranteed** | **Safety-first** rule only |
| **Study years** | From forecast start through the end you choose (default = plan horizon). Study **withdrawals** still begin at primary retirement when that year is ahead. |

Edits stay in the sandbox — **nothing is written** to the dossier. Open **How it works** on the
panel for the shared-path equations and page map.

### Spending paths

Each study is a year series of **actual cash withdrawn** (portfolio-capped). A rule-colored marker
shows **depletion** when the portfolio ends empty. Multi-select chips in the chart title show or
hide curves. Move the pointer **anywhere** in the plot: the tip follows the nearest year and lists,
for each visible rule, **portfolio** at year start, **total spend** over the path, and this year’s
actual (or target vs actual when the cash cap binds). The year/age control at the bottom-left of the
plot is the same axis menu used on Balance Sheet and Cash Flow charts.

### Rule summary and min portfolio for coverage

| Table | Role |
|-------|------|
| **Rule summary** | Onset spend / onset rate (first **draw** year, not a pre-retirement zero), total spend, terminal portfolio, plus **Min portfolio** and **Extra needed** for coverage: smallest starting nest egg so the **coverage buffer** stays non-negative under these sandbox knobs and your plan stacks (**withdraw to need**). Extra needed is vs the portfolio control above. An em dash means unsolvable (for example a working-year plan shortfall that study spend cannot fix because pre-onset \(S_t = 0\)). Open the table’s **?** for a column-by-column reading. Click a row to select that study for personalization. |

On Springfield Baseline under defaults you will often see **extra needed = \$0** for every rule and a
**green (solvent)** coverage buffer — the household nest egg already clears the buffer under these
knobs. Drop the portfolio or return to watch the table recompute and the buffer tighten, or open
[When Guardrails says you need a bigger nest egg](/learn/springfield_guardrail_gap) for a near-retire
foil where extra needed is positive and growing the nest egg is the lesson.

[[jump:guardrails|output__guardrails__guardrails.rule-summary__line.guardrails.min-portfolio,output__guardrails__guardrails.rule-summary__line.guardrails.extra-needed]]

### Bottom band pieces

| Piece | Role |
|-------|------|
| **Study chips** (above personalization) | Which study’s path spend feeds personalization and the buffer |
| **Personalization of the Study** | Three views of plan stacks and/or study capacity (table above) |
| **Coverage buffer** | Purchase-power running tally of funding nets; **withdraw to need** on the toolbar |

Capacity moves with the portfolio knob and study onset; **need and incomes stay dossier-authored**.
That separation is the point of the personalization half of the screen.

### Coverage buffer vs Monte Carlo success

On **Springfield Baseline** under defaults the coverage buffer is usually **green / solvent** and
**Extra needed** is **\$0** for every rule — a comfortable nest egg clears the study-bound funding
story. Forecaster **Monte Carlo** on the same household often still reports something like
**two in three** paths succeeding at the default **Silver** threshold (not 100%). Those results can both be true —
they answer different questions. A green buffer is not “MC is wrong,” and a high Silver % is not
“every published rule always funds this lifestyle.”

To see a **tight or red** buffer **while** Monte Carlo still looks livable, **lower the portfolio**
control here, or open
[When Guardrails says you need a bigger nest egg](/learn/springfield_guardrail_gap) (near-retire foil
with a thinner nest egg). On that foil, growing liquid capital toward a study’s **min portfolio** can
lift residual Monte Carlo success without equating the two scores:

[[img:guardrail-gap-transforms-mc-before-after]]

*From the gap foil lesson: grow **Traditional [[term:401k]] → Target Date Equity**<!-- term-skip: traditional — a Transform's name, not prose --> toward a study min and
read **Simulation Summary** Original vs Modified under Silver. Same asset as that walkthrough —
baseline Springfield here often starts green / Extra needed \$0, so the lift story lives on the
foil.*

| | **Coverage buffer** (Guardrails) | **Monte Carlo success** (Forecaster) |
|---|---|---|
| **Question** | If portfolio draws are **capped by this study’s** allowable spend \(S_t\) (from retirement onset), do plan incomes + that capacity fund **lifestyle need** year by year (order-aware running buffer over the **full** horizon)? | Under the **full plan** — residual capital policy, taxes, many random market paths — does the path “make it” under your success definition? |
| **Who may draw from the portfolio?** | Only what the **study rule** allows after onset (optionally only the gap after other income — *withdraw to need*). Pre-retirement years bank plan surplus/deficit with **no** study spend. | The plan’s **residual** policy can sell what the household still needs (pro-rata, tax order, glide, …) |
| **“Trouble”** | Buffer balance \(B_t < 0\) any year (and it need not recover for the strip to stay red) | Under **Silver**, temporary **liquidity** stress that later recovers can still count as success; only harder outcomes are failure |
| **Markets** | One constant μ / Set-B drag path | Cloud of sequences |

So:

- **Buffer red** ≈ “this rule’s allowable spend never fully funds the modeled lifestyle under the
  sandbox path,” including years when plan stacks alone run short before the rule starts drawing.
- **High Silver success** ≈ “most engine paths still fund the *plan* under residual draws and markets”
  — and the outcome mix still matters (clean success vs liquidity recovery vs failure; left-tail net
  worth).
- **Buffer green + Extra needed \$0** on Springfield defaults ≈ the study-bound lifestyle story clears
  under these knobs — still not the same as Monte Carlo plan survival.

**Which picture for “risk of failure”?**

- For **“will this plan survive as the app actually forecasts it?”** prefer **Monte Carlo** (success
  mix + downside tail — not the headline % alone). See [What does success mean?](/learn/springfield_success).
- For **“if I discipline draws to this published rule, is lifestyle still funded?”** prefer the
  **coverage buffer**, **Modeled with study income**, and **Min portfolio** / **Extra needed** on
  Rule summary. That question is intentionally stricter.
- Neither alone is complete. Do not read high MC success as “a 4% study always funds this lifestyle,”
  and do not read a red buffer as “Monte Carlo is lying.”

Toolbar on the coverage buffer: **Withdraw to need** (default on) banks only the study spend needed
after other incomes cover lifestyle — leave it on for a lifestyle-funding story. There is no separate
“start buffer at retirement” switch: onset already lives in the study path, and the buffer carries
full-horizon plan nets.

[[jump:guardrails|output__guardrails__guardrails.personalization__line.guardrails.coverage-buffer]]

---

## Try this

1. Open **Guardrails**. Confirm **Liquid NW** is **on** (default investable nest egg), **Return μ**
   is **8%**, **Vol σ** is about **15%**, and the portfolio amount looks like accounts − debt rather
   than full household NW with the house. Note the line under the knobs: Set A growth vs Set B after
   vol drag.
2. Scan **Spending paths** with several studies visible. Early years should show little or no study
   spend until primary retirement; later years fan out by rule. Note depletion diamonds if any. Move
   the pointer across the plot — the tip should follow without needing to hit a dot.
3. Drop **Return μ** to **7%**, then **5%**. At 7%, **Bengen SAFEMAX** may still drain on a long
   horizon; at 5%, **Bengen SAFEMAX** and **Kitces ratchet** often both drain. Restore **8%**.
   Optional: raise **σ** and watch Set B paths thin relative to Set A.
4. Optional: raise **CAPE** (expensive market) and watch **Bengen SAFEMAX** onset spend change; other
   rules ignore CAPE.
5. Read **Rule summary** — **Min portfolio** and **Extra needed**. On Springfield under defaults,
   extra needed is often \$0 and the buffer is green. Lower the **Portfolio** control until some rows
   show positive extra (and the buffer may go red) — then restore.
6. In the **bottom personalization** band, pick one study with the chips. Cycle the three
   personalization views. On **Modeled with study income**, watch the **net line** vs the year axis.
   Leave the **coverage buffer** on: green means solvent; red means the running funding buffer went
   negative. Confirm **Withdraw to need** is on for a lifestyle-funding story.
7. Optional: open [[nav:forecaster]], run Monte Carlo on the same Springfield plan, and compare success
   % + outcome mix to the buffer story — different questions (see above).

---

## What this is not

- **Not** a spending policy in your forecast. The Forecaster never applies any of these rules; it
  spends what your cash flows and residual strategy say.
- **Not** a claim that 8% (or any μ) will be earned every year.
- **Not** SAFEMAX from history — sequences matter; this path does not.
- **Not** tax-aware residual strategy or RMD *policy* in the full plan sense (those live in
  Assumptions / Forecaster).
- **Not** the same score as Monte Carlo success: study-limited lifestyle coverage ≠ residual-funded
  plan survival under Silver/Gold/Bronze.
- **Not** advice to spend a study’s dollar figure or the min-portfolio solve as a recommendation.

An in-depth study lesson (rule parameters, more households, deeper research notes) can follow once
this personalization walkthrough is familiar.

---

## Where to go next

| Lesson | Relationship |
|--------|----------------|
| [When Guardrails says you need a bigger nest egg](/learn/springfield_guardrail_gap) | Near-retire foil: buffer fails → min \(P_0\) → fatten → MC improves |
| [Meet the Springfield household](/learn/springfield_baseline) | Same canvas household (comfortable nest egg) |
| [What does success mean?](/learn/springfield_success) | Monte Carlo success tiers — different surface |
| [Tax-account order vs pro-rata](/learn/springfield_tax_order) | Residual **sell/invest** policy, not study rules |
| [Glide rebalance vs pro-rata](/learn/springfield_glide) | Residual mix targeting |

---

## Honest takeaway

Use Guardrails to ask: **if these published rules grew my investable nest egg until retirement, then ran
on that balance under a clear return assumption, how would spending paths compare to each other and
to my plan’s needs — including whether a study-bound funding buffer stays non-negative, and how much
starting capital each rule would need to keep it so?** Then take that intuition back to Forecaster
Monte Carlo (plan survival under residual policy and markets) and your own judgment — with sequence
risk and taxes still in view.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
