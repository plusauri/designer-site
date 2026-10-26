<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/filling_the_cheap_buckets.md
tutilis-locale: en source
-->
# Filling the cheap buckets

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.account_character.cheap_buckets
  outline-path: Taxes, benefits, and retirement systems › Tax character of accounts › Filling the cheap buckets
  document-id: filling_the_cheap_buckets
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Ported from public dossiers/filling_the_cheap_buckets.md — teaching body unchanged.
  port-source: dossiers/filling_the_cheap_buckets.md
-->

<!--- α <lesson_body> -->
Federal [[term:ordinary-income]] is taxed in **brackets** — the first slice of [[term:taxable-income]] at 10%, the
next at 12%, then 22%, and up. The low brackets are the **cheap buckets**, and every year you get a
fresh set. Room you do not use does not roll over.

That creates a question no single number answers: **how full are my cheap buckets each year, and who
is filling them — me, or the rules?** Two very different kinds of income compete for the same space.
**Required minimum distributions (RMDs)** are forced out of [[term:traditional]] accounts by statute. A
**[[term:roth-conversion]]** is wholly your choice.

And it is not a one-off decision you model by hand. [[nav:assumptions]] → Movements → Roth conversion
states a **policy** — a fixed dollar amount *or* a [[term:bracket]] to fill, plus the range of years it runs —
and the engine then executes it **every year of the forecast**, sizing each year's conversion against
that year's actual income and that year's bracket edges. The [[nav:brackets]] lens draws the result
alongside the forced income it competes with, one column per year, so you can see the competition
instead of inferring it.

### First, know which chart you are looking at

Whether a conversion policy is enabled changes what the picture is *telling* you, so it is worth
settling before reading a single column. The card states it in plain text directly under the chart —
including the mode and the year range — so you never have to go back to Assumptions to find out.

| Assumptions | What the columns show | The question it answers |
|---|---|---|
| **No conversion policy** | Base income and forced RMDs only — no teal segment. Everything left over is hatched. | *"How much cheap-bracket room am I leaving unused, and when do RMDs start consuming it?"* — a **diagnosis**. |
| **Conversion policy on** | A third, teal segment: the dollars the engine actually converted that year under your policy. | *"Is my policy filling the bucket it promised, and how much is left for it after forced income takes its share?"* — a **readout of a decision already made**. |

Both readings are useful, and they are not the same lesson. With no policy, the hatched cap is
**opportunity**. With a policy on, the hatched cap is **whether the policy did its job** — and the
teal segment is the part of the column you can still change by editing an assumption.

One thing the status line gives you that the chart cannot: the **configured** window, which is not
the same as the years conversions actually happen. A policy can be active for years in which nothing
converts — because the traditional balance ran dry, or forced income already filled the target. Seeing
"active 2026–2055" above a stretch of columns with no teal segment is information, not a bug.

### Where the policy is set

[[nav:assumptions]] → Movements → Roth conversion. Four controls produce everything this lesson
draws:

| Control | On this plan | What it changes on the chart |
|---------|--------------|------------------------------|
| **Enable Roth conversions** | on | Off removes the teal segment entirely — that is the foil later in this lesson |
| **Fixed annual amount** / **Fill ordinary bracket** | Fill ordinary bracket | Fixed draws a constant band; fill-to-bracket draws whatever room is left after forced income |
| **Fill to the top of** | `12%` | Which edge the conversion stops at — and the rate the **Room to** control starts on. The ladder offers every bracket but the top one, which has no top to fill to |
| **Active from / until year (exclusive)** | 2026 → 2056 | The window in the status line. Half-open, so the last converting year is **2055** |

[[jump:roth-conversion|input__assumptions__assumptions-sell-invest__control.roth-conversions]]

Note the range is **half-open**: "until 2056 (exclusive)" means the policy's last active year is
2055, which is why the card's status line reads *active 2026–2055*. Leave both years `0` for every
forecast year.

[[img:filling-buckets-roth-policy|control]]

*The policy behind every chart in this lesson. **Fill ordinary bracket** is a mode, not a number —
the **Fill to the top of** pick of `12%` beneath it is the edge conversions stop at, and it is
what the Brackets card's **Room to** control starts on. **Active until year** is **exclusive**, so
2056 here means the last converting year is 2055 — which is why the card reads* active 2026–2055.

This lesson runs with the policy **on**, and later turns it **off** as a foil, so you see both charts.

The policy is one of several settings that live outside any card. The full list for this plan, read from the plan itself rather than typed here, is the **Rebuild this plan by hand** table at the foot of this lesson: the residual withdrawal strategy (tax-account order, which keeps the base band to the pension during the window years), the state of residence, the filing status, and both owners' ages.

| Idea | Plain meaning | Where in the app |
|------|---------------|------------------|
| **Bracket fill** | How much of each year's ladder your income occupies | [[nav:path:forecaster|brackets]] |
| **Base income** | Everything you modeled — pension, wages, taxable SS, interest — **after the standard deduction**. Traditional distributions are not missing from it; they get their own two segments — **RMD (forced)** and **Roth conversion** | Dark blue-gray segment |
| **RMD (forced)** | Traditional dollars the rules compel out | Indigo segment |
| **Roth conversion** | Traditional → Roth dollars *you* chose to realize | Teal segment |
| **Unfilled room** | Cheap-bucket space left over this year | Hatched cap above the column |
| **RMD required** | The statutory obligation, vs the taxable band | Indigo **outline** over the forced segment |
| **Bracket edges** | Where each rate starts, grown into that year | Dashed step lines behind the columns |

The live plan on the right is **Banks Bracket Fill** (`bracket_fill_sample`): **Philip** (born 1959)
and **Vivian**, filing jointly, a flat company pension, a large traditional [[term:ira]], a taxable [[term:brokerage]],
an existing [[term:roth]] — and a conversion policy set to **fill ordinary income to the top of the 12%
bracket**, running every year of the plan rather than stopping at [[term:rmd]] age.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How do I read one year's column, and what do its colors mean?** See
   [Reading one column](#reading-one-column).
2. **Before RMDs start, how much does a fill-to-12% policy convert, and why does it grow each
   year?** See [Act 1: the window](#act-1-the-window-you-fill-the-bucket).
3. **What happens to my conversions in the year RMDs begin?** See
   [Act 2: the crossover](#act-2-the-crossover-the-rules-fill-it).
4. **What does unused cheap-bracket room cost me if I never convert?** See
   [The foil](#the-foil-turn-the-policy-off).
5. **Why can the RMD the rules require differ from the RMD that gets taxed?** See
   [The outline](#the-outline-required-vs-taxed).
6. **How do I see how much room is left up to a bracket I choose?** See
   [Room to pick your own ceiling](#room-to-pick-your-own-ceiling).

</div>
</aside>

To follow along, open [[nav:path:forecaster|brackets]] and scrub the years.

[[jump:bracket]]

---

## Reading one column

Turn on the [[nav:brackets]] chip. Each year is a single stacked column measured against that year's
ordinary ladder, drawn behind it as dashed steps.

The stack is ordered by **how much choice you had**, bottom to top:

```
   ░░░  unfilled room (hatched)          ← cheap-bucket space left this year
   ▒▒▒  Roth conversion   (you chose)    ─── 12% edge
   ▓▓▓  RMD              (rules forced)  ┃ ← outline = statutory requirement
   ███  base income      (already yours) ─── 10% edge
   ────────────────────────────────────────
     2027   2031   2032   …   2048
```

Two conventions carry most of the meaning:

- **Color means source, never rate.** The rate is already encoded by *height* — where the column top
  sits against the step lines. Coloring by bracket would say the same thing twice; coloring by
  source says the thing nothing else does.
- **Solid means it happened; hatched means it is schedule.** The hatched cap is not income. It is
  published statute — room the law leaves open — so it gets the same treatment as every other
  "machine knowledge" mark in the Forecaster.

[[img:filling-cheap-buckets-three-sources-2032]]

*The whole lesson in one frame. Read left to right: **'27–'31** are window years — dark base income
with a fat teal conversion above it and no forced band at all. At **'32** the indigo **RMD (forced)**
band appears and the teal collapses to a fraction of its former height. Nothing about the policy
changed; forced income simply took the room first. From there the indigo grows year over year while
the dark base band thins, because a flat pension keeps losing ground to an inflating [[term:deduction]].*

---

## Act 1 — the window: you fill the bucket

Philip is retired and not yet at RMD age. Base income is the pension alone, and after the standard
deduction it occupies only a corner of the 12% bracket. Everything above it is hatched.

The policy converts exactly enough to close that gap — no more:

| Year | Base | RMD | Conversion | Taxable ordinary | Marginal |
|------|-----:|----:|-----------:|-----------------:|---------:|
| 2027 | $27,387 | — | **$71,471** | $98,858 | 12% |
| 2031 | $24,167 | — | **$85,087** | $109,254 | 12% |

Two things are worth noticing before RMDs ever appear.

**The conversion segment grows every year.** Not because the policy got more aggressive — it is the
same "fill to 12%" instruction — but because the *base* segment is shrinking. The pension is flat in
[[term:nominal]] dollars while the [[term:standard-deduction]] inflates, so less of it survives to be taxed each year.
The room that opens up gets handed to the conversion automatically.

**The hatched cap is essentially zero.** That is what a filled bucket looks like. Compare it to any
year on a plan with no policy, where the hatch is most of the column.

---

## Act 2 — the crossover: the rules fill it

Philip was born in 1959, so under [[term:secure|SECURE]] 2.0 his RMDs begin at **73** — calendar year **2032**. Watch
what happens to the segment he actually controls:

| Year | Base | RMD (forced) | Conversion (chosen) | Taxable ordinary | Marginal |
|------|-----:|-------------:|--------------------:|-----------------:|---------:|
| 2031 | $24,167 | — | **$85,087** | $109,254 | 12% |
| 2032 | $23,311 | **$63,829** | **$24,881** | $112,020 | 12% |

The conversion **more than halves** in a single year — and nothing
about the conversion policy changed. The bracket did not get smaller. Forced income simply took its
share first, and the discretionary segment is whatever is left.

This is the sentence the lens exists to make visible: **RMDs and conversions are not two separate
stories. They are two claims on one bucket, and the forced one has priority.**

From here the pattern is steady for two decades — forced income keeps climbing as the Uniform
Lifetime divisor shrinks, base keeps eroding under the growing deduction, and the conversion is the
residual:

| Year | Base | RMD | Conversion | Taxable ordinary |
|------|-----:|----:|-----------:|-----------------:|
| 2036 | $19,662 | $75,340 | $28,799 | $123,802 |
| 2040 | $15,630 | $87,527 | $33,665 | $136,822 |
| 2048 | $6,250 | $105,384 | $55,481 | $167,115 |
| 2053 | $0 | $89,200 | $100,165 | $189,366 |

Late in the plan the conversion segment grows again — because sustained converting has drawn the
traditional balance *down*, so the RMD it throws off starts shrinking. Filling the bucket on purpose
is partly self-correcting.

---

## The foil: turn the policy off

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Open [[nav:assumptions]] → Movements → Roth conversion and turn it **off**, then re-run and come back to Brackets. This is the comparison that gives the hatched room a price.

[[img:filling-buckets-roth-policy|control]]

*The Roth conversion policy on this plan: on, and set to fill the 12% ordinary bracket. Turning that checkbox off is the foil in the table below.*

</div>
</details>

| | Policy **on** (fill to 12%) | Policy **off** |
|---|---|---|
| Marginal rate across the plan | **12% every year** | 10% → 12% → **22% from 2037 on** |
| Years at 22% | 0 | **18** |
| Peak RMD | $105,384 | **$262,303** |
| Cheap-bracket room never used | ~$0 | **$415,576** |

With no policy, the window years show a column that is mostly hatch — **$71,471** of unused 12% room
in 2027 alone. Nothing bad happens that year. The bill arrives in **2037**, when the untouched
traditional balance has compounded to the point that the RMD *by itself* pushes past the 12% edge.
From that year to the end of the plan, Philip is in the 22% bracket on income he never chose to
[[term:realized-gain|realize]], and the conversion he might once have made at 12% is no longer available at that price.

**The unused hatched room is not free. It is a cheap bucket you declined to fill, and the rules will
eventually fill an expensive one in its place.**

### …but do not read that as "converting wins"

On this same path, honestly:

- Total taxes paid are **higher** with the policy on: **$682,350** vs **$632,419**.
- Terminal net worth is **lower** with the policy on: **$8.03M** vs **$8.33M**.

Converting pays tax *earlier*, out of the taxable brokerage, and those dollars stop [[term:compounding]].
That is a real cost, and this chart does not net it out for you.

The terminal comparison is also not apples to apples: net worth counts a [[term:pre-tax]] traditional dollar
at face value. The un-converted path still holds roughly **$2.3M** of traditional money at the end
(implied by its 2054 requirement of $262,303 and the age-95 Uniform Lifetime divisor of 8.9), against
about **$0.7M** on the converted path — and every one of those extra dollars carries an unpaid tax
bill at 22% or more. Adjust for that and the gap closes and reverses.

<details class="lesson-math">
<summary class="lesson-math-label">For the math lovers — adjusting net worth for the unpaid tax</summary>
<div class="lesson-math-body">

A required withdrawal is the prior year-end traditional balance divided by the Uniform Lifetime
divisor, so the balance behind the un-converted path's 2054 requirement is

\[
B \approx 262{,}303 \times 8.9 \approx \$2.33\text{M}
\]

The converted path holds about \$0.7M, so the un-converted path carries about \$1.6M more
[[term:pre-tax]] money. At a 22% rate, the tax still owed on that difference is

\[
0.22 \times \$1.6\text{M} \approx \$0.36\text{M}
\]

The raw gap in net worth is \$8.33M − \$8.03M = \$0.30M. The unpaid tax is larger than the gap, so
once it is counted, the policy-on path comes out ahead.

</div>
</details>

The Brackets lens answers **"who is filling my brackets, and at what rate?"** It does not answer
**"should I convert?"** For that, read **success**, **taxes paid**, and **terminal** together, as
[Roth conversion in the window](/learn/roth_conversion_window) sets out.

---

## The outline: required vs taxed

Inside the indigo RMD band there is a second mark — an **outline** showing what the rules actually
**required** that year. The filled band is what got **taxed**.

They come apart when base income stops covering the standard deduction, because the leftover
deduction is then absorbed out of the forced dollars instead.

**On this plan they come apart only at the very end — and that is worth knowing before you go
looking.** Base income covers the deduction for most of the horizon: first the pension, then, once
it is gone, the interest and dividends the taxable holdings keep paying. So for year after year the
outline sits flush on the fill:

| Year | Base | RMD required | RMD taxable | Sheltered | As a share of the column |
|------|-----:|-------------:|------------:|----------:|-------------------------:|
| 2049 | $776 | $86,381 | $86,381 | — | — |
| 2050 | $0 | $81,825 | $81,153 | $672 | 0.8% |
| 2051 | $0 | $75,475 | $73,317 | $2,158 | 2.9% |

A 1% gap on a full-height column is **two or three pixels**. Do not expect to see daylight there. The
number is in the tooltip and the table; the *drawing* only separates visibly once far more of the
deduction spills into the forced dollars.

**Where it does show.** Keep going to the **last columns ('52–'54)**. Base income is gone for good
by then, the account is being run down, and the whole of the standard deduction is being absorbed
out of a shrinking requirement — so the outline lifts off and **widens every year after**, from a few
percent when it opens to a clearly visible slice by the final year, when close to a fifth of what
the rules require is no longer being taxed at all. That is the picture this mark exists to draw, and
the reason it only appears on a plan that runs its account down with nothing else left to tax.

So read the flush outline through the middle of the plan as the *other* half of the lesson: **your
own income is still covering the deduction, so every forced dollar is landing in a bracket.** The
year the outline lifts off is the year that stops being true.

[[term:hover|Hover]] any RMD year for `RMD required: …` and, when they differ, `… absorbed by the standard
deduction`. The **RMD required** and **RMD taxable** columns in the copied table carry the same pair,
and the table is where a sub-pixel gap is still perfectly readable.

[[img:filling-cheap-buckets-rmd-outline-late-years]]

***The final years of this plan.** Two places to look. In the **tooltip**: `RMD (forced)` sits
below `RMD required`, and the line beneath names the difference outright — *“…absorbed by the
standard deduction.”* On the **last columns ('53–'54)**, the same fact as a picture: the navy
outline floats visibly above the solid band beneath it, and the daylight between them widens every
year as the requirement shrinks with nothing left beside it.*

*(This is why there is no separate RMD chart. A chart of required dollars alone shows a number
without its consequence; the outline shows the same number **and** what the bracket did with it.)*

---

## Room to: pick your own ceiling

Above the chart, **Room to** chooses what the hatched cap is measured against:

```
Room to:  [ Current bracket ]  [ 10% ]  [ 12% ]  [ 22% ]  [ 24% ]  [ 32% ]  [ 35% ]
```

**Current bracket** measures to the top of whatever class this year's income landed in — "how much
before the next rate?" Picking a **rate** measures to the top of that class instead — "how much room
to the 22% line?" — which is the question you ask when deciding how far to convert. A plan carrying a
fill-to-bracket policy starts on its own rate; every other plan starts on **Current bracket**.

The cap is not a parallel calculation. It is the **same** figure the conversion strategy fills to,
read from the engine, so the room you see and the room a policy targets cannot drift apart.

### On this plan, 12% and Current bracket look identical — that is the readout

Select **12%** here and then **Current bracket**, and nothing moves. That is not a broken control.
A fill-to-bracket policy converts until income sits *exactly on* the top of its target class, and
that edge is simultaneously the top of the class the income lands in. Both ceilings are the same
number, both caps are zero, and neither draws a hatch.

**Two settings agreeing is the pass condition** — the policy filled its bucket precisely, with
nothing spilled into the next rate up. The interesting move is to pick a *different* rate:

| Pick | What you learn on this plan |
|------|------------------------------|
| **12%** (the policy's own) | Flat zero cap — the policy is doing exactly what it said |
| **24%** | A large hatched cap appears: how much *further* you could convert if you were willing to pay 24% |
| **10%** | An **overshoot** band appears — the plan is already well past the 10% line, which is what filling to 12% means |

That last one is the fastest way to see the overshoot band without editing any assumption.

The three figures below are the same plan under three settings. Watch the **income stack stay identical** while only the cap above it
changes:

[[img:filling-cheap-buckets-room-to-current]]

***Current bracket.*** *No hatched cap anywhere — this plan's policy parks income right on its
class top every year, so there is no room left before the next rate. Same reason **12%** looks
identical.*

[[img:filling-cheap-buckets-room-to-24]]

***24%.*** *Same columns, same income — now with an enormous hatched **Unfilled room** cap. This is
how much further you could convert if you were willing to pay 24%. Note the Y axis rescales
to fit the taller ceiling; the colored stack at the bottom is unchanged.*

[[img:filling-cheap-buckets-room-to-10-overshoot]]

***10%.*** *The red **Past target** band — the plan blew through the 10% line long ago, which is
exactly what filling to 12% means. This is the fastest way to see the overshoot band without editing
an assumption.*

The **Tables** button in the left rail opens the published bracket and deduction schedules for the
selected year, so "room to *what*" is always one click from the chart that depends on it.

---

## Reading guide (audit checklist)

| Check | Pass looks like |
|-------|-----------------|
| Chip on | [[nav:brackets]] selected; one stacked column per year |
| Sources | Three colors possible in one column — base, RMD, conversion |
| Window years | No indigo band before RMD age; conversion sits under a near-zero hatch |
| Crossover | The year RMDs begin, the teal conversion segment drops sharply |
| Priority | Forced income is below chosen income in the stack, never above |
| Outline | Indigo outline over the forced band; lifts off only when base is fully absorbed |
| Edges | Dashed steps rise year over year (edges are inflated into each year) |
| Room to | Toggling changes the hatched cap only — never a segment height |
| Foil | With the policy off, hatch is large early and the marginal rate climbs later |
| Gains | Capital gains / qualified dividends stack **above** ordinary and do not shrink its room |

---

## What we deliberately do **not** claim

- That filling a bracket is **advice**. There are no rankings, recommended amounts, or optimum
  markers — the chart reports consequences of a policy you stated.
- A **solved** multi-year conversion schedule. Fill-to-bracket is a single-pass estimate per year,
  not a fixed point with every [[term:cliff]] re-solved.
- That **later-year bracket edges are published tables.** Only the shipped schedule year is real;
  every later edge is that ladder grown along the plan's bracket-inflation assumption. The card says
  which year it grew from — read "the 12% edge is $189K in 2053" as a projection.
- That the **capital-gains stacking is exactly what the engine charged.** The column draws gains and
  [[term:qualified]] dividends stacked on ordinary income, which is how the statute picks their 0/15/20 class;
  the engine assesses each against ordinary income separately, so a year holding both is charged
  slightly less than the picture implies. The shape is the statute; the tax is the engine's. The card
  carries this note permanently.
- That **[[term:irmaa]], [[term:niit]], or state tax** are visible here. Filling a bracket raises [[term:magi]], which can move
  those later — that is the [cliff radar](/learn/cliff_radar_forecaster)'s job, and the two cards are
  designed to stack so the same year lines up.
- Anything at all on a **non-US** plan. The ordinary ladder is a US federal construct; the card says
  so rather than drawing a foreign plan against American brackets.

---

## Try next

| Lesson | Why go there |
|--------|----------------|
| [Roth conversion in the window](/learn/roth_conversion_window) | How to state the policy, and what conversions do to Movements, tax, and MAGI |
| [Forced traditional RMD vs residual tax order](/learn/banks_forced_rmd) | Why the forced segment cannot be strategized away |
| [Cliff radar in the Forecaster](/learn/cliff_radar_forecaster) | Stack it under Brackets — filling a bracket moves MAGI, and MAGI moves cliffs |
| [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) | What a raised MAGI costs two years later |
| [Sheltering money](/learn/sheltering_money) | Why traditional, Roth, and taxable dollars are not interchangeable |

One habit worth keeping: read the **hatched cap** as a *use-it-or-lose-it* quantity, and the
**indigo band** as the part of next decade's cap that has already been spoken for.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
