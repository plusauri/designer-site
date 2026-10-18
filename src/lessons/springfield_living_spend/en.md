<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/springfield_living_spend.md
tutilis-locale: en source
-->
# Bend the plan with living spend

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.cash_flow.living_spend
  outline-path: Household planning › Cash flow and lifestyle › Bend the plan with living spend
  document-id: springfield_living_spend
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/springfield_living_spend.md — teaching body unchanged.
  port-source: dossiers/springfield_living_spend.md
-->

<!--- α <lesson_body> -->
This lesson uses the same household as [Meet the Springfield household](/learn/springfield_baseline),
Homer and Marge, but pulls a **different lever**. The question here is not *when* they stop working.
It is **how much they spend** while working and in retirement, and how hard that pulls on the
portfolio.

The [[term:live-plan]] on the right is **Springfield Baseline** again.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Why is living spend a lever worth testing, and where do I test it without rebuilding the
   plan?** See [The question](#the-question).
2. **How is one living expense modeled as a Work phase and a Retire phase linked by the retirement
   date?** See [What living spend means](#what-living-spend-means-in-this-sample).
3. **Why does the cash-flow table show larger lifestyle amounts than the authored ones?** See
   [What living spend means](#what-living-spend-means-in-this-sample).
4. **Where do I see how the lifestyle phases were modeled, and how they play out in the
   forecast?** See [Where to look](#where-to-look).
5. **Where do I change a lifestyle phase amount to try a higher or lower budget?** See
   [The lever](#the-lever-transforms-lifestyle-phases).
6. **How do success and late-life wealth respond when retirement spending goes up or down?** See
   [Try this](#try-this).
7. **How is changing spend different from changing when someone retires?** See
   [How this relates to retirement timing](#how-this-relates-to-retirement-timing).

</div>
</aside>

---

## The question

If I raise or lower **lifestyle spend** — in the **Work** years, the **Retire** years, or both —
does the plan respond in a way I can **see** (cash-flow bars, success rate, late-life wealth)?

Living spend is one of the few levers households actually control day to day. Retirement age is
hard to move; a few percent on the budget is a conversation you can have this month.

[[nav:transforms]] is where that analysis lives without rebuilding the plan. Open
[[nav:transforms]], change a **Lifestyle** phase amount under **Modifiables**, and watch the
[[term:forecast]] and [[term:simulation]] update — **original** vs **modified** side by side —
so you can see how much more (or less) spend the portfolio can carry.

---

## What “living spend” means in this sample

Springfield uses a **Lifestyle** cash-flow pattern with **two phases**:

| Phase | Rough idea | Authored amount (today's dollars) | When it runs (in this sample) |
|-------|------------|-----------------------------------|--------------------------------|
| **Work** | A higher budget while both are earning and saving | about **$138,000**/yr | Plan start → Homer's **primary retirement** (**2041**) |
| **Retire** | A lower, steadier budget once the paychecks stop — the same living expense, restated for the years after work | about **$92,000**/yr | **2041** → end of household plan |

Both amounts are written in today's dollars and the forecast grows them, so what you will read on
the cash-flow table at the handoff is larger than this table: the last Work year (**2040**) bills
about **$200k** and the first Retire year (**2041**) about **$136k**. Same two numbers, fifteen
years of growth on top.

The purpose of this lesson is to see how a single living-expense idea can be modeled as **two
phases** — one pre-retirement and one post-retirement — **linked by that retirement date**. That
link shows up as a control you can move in [[nav:transforms]] → **Modifiables**.

---

## Where to look

### First: how the cash flows were modeled

First we will look at how the cash flows were modeled. Keep in mind the [[term:canvas]] app does not
need to worry about authoring cash flows the way the full **desktop** app does — you explore a
teaching sample rather than building every line. Still, it helps to see how this lesson’s living
expense was set up.

The living-expense cash flow here is broken into **two separate, but linked, pieces**. The easiest
way to see that is to open [[nav:dossier]] → [[nav:birds-eye]] and [[term:hover|hover]] over the two
related outflows **Lifestyle (Work)** and **Lifestyle (Retire)**. Make sure [[nav:cash-flow]] is
selected on [[nav:birds-eye]] so those flows appear on the **Liabilities** side of the tables:

[[img:springfield-living-spend-birds-eye-cf-table]]

*[[nav:path:birds-eye|cash-flow]] selected, with the **Σ** (sum-of-years) rollup on. **Lifestyle
(Retire)** and **Lifestyle (Work)** sit at the top of **Liabilities** — the long stream of outflows
this household is planning for, and the two largest things on the sheet.*

Then hover either one. Both rows come from one living-expense item with two phases, so both raise the same card:

[[img:springfield-living-spend-lifestyle-work-hover]]

*The **Lifestyle** card. **Flow value** lists the two phases the item produces: **Work** for **2027–2040** and **Retire** for **2041–2069**. **Phase 1** and **Phase 2** below it give each phase's annual amount, its active years and its spending growth. Each phase's years are tied to named life events, so Work stops at Homer's retirement and Retire starts there.*

In the path chart at the bottom, the Work phase is drawn for the years **before** retirement, and the Retire phase picks up **where work left off**. The two rows tell one linked story.

### Projected — [[nav:forecaster]] (already populated)

In **Forecast Detail**, chips control which cards appear (toolbar order: [[nav:bs-chart]] →
[[nav:bs-table]] → [[nav:cf-chart]] → [[nav:cf-table]]). **For this lesson, select those four** and
leave Taxes / Sales-Inv / Rec off unless you dig further.

| Preview | Place | What to notice for living spend |
|---------|-------|----------------------------------|
| [[img:sfb-bs-chart|preview]] | [[nav:bs-chart]] | Whether higher spend erodes balances faster in drawdown years. |
| [[img:sfb-bs-table|preview]] | [[nav:bs-table]] | Selected-year accounts and net worth after a spend change. |
| [[img:sfb-cf-chart|preview]] | [[nav:cf-chart]] | Outflow stacks across years; handoff near retirement. |
| [[img:sfb-cf-table|preview]] | [[nav:cf-table]] | Selected year: lifestyle line vs incomes and other expenses. |
| [[img:sfb-nw-distribution|preview]] | **NW Distribution** | Simulation Summary cloud + success rate (Silver). |
| [[img:sfb-key-forecasts|preview]] | **Key Forecasts** | Min / [[term:gmf]] / Max after a spend change. |

Detail and Simulation Summary are already on display. **Re-simulate** after a Transform when you
want a fresh multi-path comparison. Scrub **Year** across the Work → Retire handoff.

**Which path are you looking at?** The year-by-year cards show one forecast at a time, picked by the
**FID** control. **FID 0** is the reference path — the one forecast where every holding grows at its
expected rate every year, with no lucky decade and no crash — and the product calls it
[[term:fid-gmf]]. Every other FID number is a single randomized path from the simulation. Stay on
FID 0 while you move a lever, so what changes on screen is the lever and not the luck; switch FIDs
only when you mean to tour other paths.

---

## The lever: Transforms → Lifestyle phases

Open [[nav:transforms]] → Modifications.

1. In **Modifiables**, select the **Lifestyle** item (living-expense phases generator) — not
   Forecast End (that was retirement/death) and not a single person row for this lesson.
2. You should see **per-phase annual amount** controls (e.g. **Work** and **Retire**).
3. Changing a phase amount adds the edit to the **Change Set** automatically.
4. Charts and tables should **update live** as you move a control.
5. **Re-simulate** when you want original vs modified [[term:monte-carlo|Monte Carlo]] side by side.

**Honest frame:** these sliders show what a higher or lower lifestyle does to *this* plan under
*this* success definition. They are not advice on what you “should” spend.

---

## Try this

Work on the right-hand Springfield plan.

1. Open [[nav:forecaster]] → Simulation Summary. Note success under **Silver** — about **65%** on
   this plan, a near-miss, which is exactly what makes the lever visible — and a rough sense of
   [[term:terminal-wealth]] (**direction and order of magnitude only**).

   > **About the Downside (P10) row.** On this plan it reads as a deep negative — millions below
   > zero. That is not a balance anyone would hold; it is how the model keeps score once a path
   > runs out of money. Below zero the plan keeps borrowing at its [[term:cost-of-capital]] rather
   > than stopping, so a P10 that far under measures *how far short* the worst tenth of paths fall,
   > not what a household would actually have. Read the sign and the distance, not the figure.

2. Open [[nav:cf-chart]] / [[nav:cf-table]]. Scrub **Year** to **2040**, the last Work year —
   **Lifestyle (Work)** is about **$200k**. Then **2041**, Homer's retirement and the first Retire
   year — **Lifestyle (Retire)** is about **$136k**, and Marge's earned income is still there. That
   step down at the handoff is the two-phase shape.
3. Open [[nav:transforms]] → Modifications. Select **Lifestyle**. The two sliders read
   **Work $138,000** and **Retire $92,000** — the authored today's-dollar amounts. If yours read
   something else, a change is already in the Change Set; revert it first.
4. **Raise Retire to $110,000** — about a fifth higher. Watch [[nav:cf-chart]] / balance-sheet
   detail **live**: at **2041** the Lifestyle (Retire) line should now read about **$163k** instead
   of $136k. Expect more stress on the portfolio in [[term:drawdown]] years.
5. **Re-simulate**. Compare original vs modified success and late-life wealth — expect a
   **tougher** direction, since you raised retire spend on a near-miss baseline.
6. **Lower Retire to $80,000** (revert first, or drag the same slider through the baseline). Expect
   relief on success / terminal wealth — still read the charts; taxes and investment returns matter.
7. Optional: nudge **Work** phase up or down while retire stays fixed. Work years still have dual
   [[term:earned-income]]; the story is “can they save more / less while earning?” not only retirement
   drawdown.
8. Optional: return to [[nav:path:birds-eye|cash-flow]] and hover Lifestyle after a change — definition
   vs the projected path in Forecaster.

[[jump:birds-eye]]

The dollar targets above are there so you can check you are on the same numbers as this text —
not because $110,000 means anything. What to take away is the direction: retire spend up, success
down; retire spend down, success up.

---

## How this relates to retirement timing

| Lesson | Main lever |
|--------|------------|
| [Meet the Springfield household](/learn/springfield_baseline) | **When** work ends (**Forecast End** retirement) |
| **This lesson** | **How much** lifestyle costs (**Lifestyle** Work / Retire phases) |

Both can move success and terminal wealth. They are **different conversations**: years of earnings
vs dollars of consumption. In real planning you often touch both; here we keep one lever in focus.

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| Orientation + retirement timing | [Meet the Springfield household](/learn/springfield_baseline) |
| App map (if lost) | [Getting around the app](/learn/getting_around) |
| Mortgage on vs paid off | [Mortgage on vs paid off](/learn/mortgage_on_vs_paid_off) |
| What “success” means (tiers) | [What does success mean?](/learn/springfield_success) |
| Social Security claim timing | [Claim early vs live long](/learn/springfield_claim_longevity) |

---

*The quantities are illustrative. What the lesson teaches is the mechanism and the direction each lever moves.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
