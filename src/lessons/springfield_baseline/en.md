<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/springfield_baseline.md
tutilis-locale: en source
-->
# Meet the Springfield household

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.meet.springfield
  outline-path: Household planning › Meet a household › Meet the Springfield household
  document-id: springfield_baseline
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/springfield_baseline.md — teaching body unchanged.
  port-source: dossiers/springfield_baseline.md
-->

<!--- α <lesson_body> -->
This lesson uses one sample plan — Homer and Marge in Springfield — for two related goals:

1. **Orient you** to a realistic household we reuse (sometimes with small changes) across many
   lessons, so you learn the cast once and keep returning to familiar people and charts.
2. **Focus on a critical planning lever:** how choosing **when** someone retires changes **their**
   whole plan — income, lifestyle, and [[term:drawdown]] — without retyping every date by hand.

If this is your first time in the Learning Center, skim
[Getting around](/learn/getting_around) first. Come back here when the left/right layout and
main screens feel familiar.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Who is in the Springfield household, and when does each person plan to retire?** See
   [Who is in this plan](#who-is-in-this-plan).
2. **What do Homer and Marge own and owe, and why can recurring cash flows appear beside the
   balance sheet?** See [What they own and what they owe](#what-they-own-and-what-they-owe).
3. **How is the money that moves every year modeled, and why can one date change move many
   lines?** See [Money that moves every year](#money-that-moves-every-year).
4. **Where do I see those flows as they were authored, and where do I see them forecast?** See
   [Money that moves every year](#money-that-moves-every-year).
5. **How should I read the plan's Monte Carlo success rate?** See
   [How good does the plan look](#how-good-does-the-plan-look).
6. **Where is the control that moves a retirement date?** See
   [When retirement age moves the plan](#when-does-retirement-age-move-the-plan).
7. **How does retiring a few years earlier or later change the whole plan?** See
   [When retirement age moves the plan](#when-does-retirement-age-move-the-plan).

</div>
</aside>

---

## Who is in this plan?

Here we have a mid-career couple (**Homer** and **Marge**), each with their own [[term:earned-income]] and
**staggered** retirement ages — they do not stop working in the same year.

| Person | About now (plan year) | Plans to retire | Plan models life to about |
|--------|------------------------|-----------------|---------------------------|
| Homer  | ~50                    | age 65          | age 90                    |
| Marge  | ~48                    | age 67          | age 92                    |

Those ages are part of each person on the dossier, not hidden elsewhere.

**Where to look:** on the right, open [[nav:dossier]] → People (or the people area on [[nav:birds-eye]]).
[[term:hover|Hover]] a person — the tip shows birth year, retirement age, and related modeled details.

The plan runs through the **later** of the two deaths so the household horizon covers both lives.

---

## What they own and what they owe

They have a **house with a mortgage** — the real-asset name is **Evergreen Terrace** — and savings
in a few kinds of account: a taxable [[term:brokerage]], two kinds of **retirement account**
([[term:traditional]] and [[term:roth]] — the difference is *when* the tax is paid), and cash. Most
*flexible* wealth is in the accounts; the house is real but not something you casually spend year
to year. Which account a dollar sits in matters later, when money starts coming *out*; that is its
own lesson, not this one.

**Where to look:**

1. [[nav:dossier]] → Assets & Liabilities (or [[nav:birds-eye]] balance sheet).
2. Find **Evergreen Terrace** (the home) and the investment accounts.
3. Set [[nav:birds-eye]] to **Cash Flow** (not only Account or Holding) when you want recurring money
   movement mixed into that picture.

**Note on the Cash Flow selector:** with **Cash Flow** selected, recurring **inflows** can appear
with assets and **outflows** with liabilities. That is unconventional bookkeeping — and
deliberately so. It is a way to see “what funds the life” next to “what we own,” not a claim that
a paycheck is an asset on a CPA statement. For this household, [[term:principal]] and interest on the
mortgage often show up most clearly **with Cash Flow selected**.

---

## Money that moves every year

While both are working, salaries support a higher **lifestyle** spend and room to save. After each
person retires, their earned income stops. Living spend is modeled in **phases** (work years →
retire years) so lifestyle can step down when work ends — a common planning pattern, not a hard
rule for every real household.

The plan also carries:

- **One Social Security** benefit on the primary (Homer) — claim timing is a *later* lesson.
- Light **healthcare** phases.
- **[[term:ltc|Long-term care]]** in the last years of primary life so late-life cost is not left blank.

**A word on “templates” (we sometimes call these generators):** many cash-flow lines are not typed
year-by-year. You describe a pattern — “salary until *primary retirement*,” “lifestyle phase from
*retirement* to *death*” — and the plan expands that into yearly amounts. That is why changing
one retirement age can move many series together. You do not need the implementation detail; you
need the habit: **look for what a line is pinned to** (a calendar year vs a life event).

### Where to look

There is **no** separate [[nav:dossier]] → Cash flows editor in this Learning Center view. To *see*
the flows, use [[nav:birds-eye]] and Forecaster.

#### Definitional view — [[nav:birds-eye]] with **Cash Flow** selected

1. Stay on [[nav:dossier]] ([[nav:birds-eye]] is embedded at the top), or open [[nav:birds-eye]] from the tool
   rail if you are elsewhere.
2. Set the selector to **Cash Flow** (not only Account or Holding).

That is the **definitional** view of the series: each cash-flow row is what was authored for the
lesson. **Hover** a flow for a short description — basic attributes of the definition plus a small
**sparkline** showing where that stream hits the timeline (when it starts, runs, and ends).

On the **life-events timeline** (same [[nav:birds-eye]] / people area), green spans are **earned income
years**; blue spans are **retirement through end of life**. Magenta markers are Social Security
claim points when modeled.

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

#### Projected view — [[nav:forecaster]]

You do **not** manually “run a forecast” to open these views. When you enter [[nav:forecaster]], the
representative path and detail are already computed and on display (and keep updating as the plan
changes). **Simulation Summary** likewise already holds a [[term:monte-carlo|Monte Carlo]] run for the current plan;
you only **Re-simulate** later if you change something and want a fresh multi-path comparison.

In **Forecast Detail**, **chips** choose which cards are shown (product order: [[nav:path:bs-chart|bs-table|cf-chart|cf-table]], then optional Taxes / Sales-Inv / Rec). Turn on only what you need.

**For this section, select:** [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]].

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Preview | Place | What you get |
|---------|-------|----------------|
| [[img:sfb-bs-chart|preview]] | [[nav:path:forecaster|bs-chart]] | Really a **net worth** chart: assets above, liabilities below, and the thick black **net line** is assets minus liabilities. The **mortgage is the only liability** this plan carries, so once it is paid off the bottom lane is empty and the net line simply traces the top of the asset stack. |
| [[img:sfb-bs-table|preview]] | [[nav:path:forecaster|bs-table]] | Selected-year balance sheet (look for **Evergreen Terrace** and loans). |
| [[img:sfb-cf-chart|preview]] | [[nav:path:forecaster|cf-chart]] | In above / out below; watch the **net line**, drawn in thick black (**net cash flow**). |
| [[img:sfb-cf-table|preview]] | [[nav:path:forecaster|cf-table]] | The **selected year** broken out of that chart into a clear, **copyable** table. |

**Note:** Dollar amounts and exact year labels in these snapshots may **not** match what you see
on the right. Use the images for **layout and controls**, not as fixed targets to match.

**If you also turn on the Taxes card:** the federal brackets, [[term:standard-deduction]], and related
thresholds start from the **published tables for the plan's first year** (currently the 2026 IRS
tables). They are not frozen there — each later year grows them along the plan's
**bracket-indexing** assumption (read on [[nav:assumptions]] → Growth, under **Standard Curves**; product default **2.5%/year**), so
the schedule the card reveals for a far-off year is a projection of that ladder, not a real table.
When a newer year's tables are published, plans starting in that year pick them up.

[[jump:bracket|output__assumptions__assumptions-growth__assumptions.standard-curves__line.standard-curves.bracket-indexing,output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules]]

**Chart controls (first use):** on [[nav:bs-chart]] and [[nav:cf-chart]], try **Close up** (expand
icon in the card header) when the bars feel small, and the **vertical zoom** slider when tall years
crush the rest. Hover tips still work in Close up. Full map:
[Chart controls — Close up, zoom, and Reveal](/learn/getting_around#chart-chrome)
in Getting around.

**Year slider:** scroll the **Year** control to deep-dive how amounts **grow or shrink** over time
as salaries, lifestyle, taxes, and other series change.

**Forecast ID (FID) slider (optional):**<!-- term-skip: fid — expanded inline, self-defining --> if you are adventurous, slide through different simulated
paths. When you want a *representative* middle-of-the-road picture of the future — the one to
reach for when thinking about “the” plan path — use the **GMF** ([[term:geometric-mean]] forecast),
typically **FID 0**, our **north star**. Like every other single path, it is **not** guaranteed
to happen; it is a stable, non-random representative of the middle of the cloud, not a prophecy.

---

## How “good” does the plan look?

Under default product settings (taxes on, sample growth as authored), Monte Carlo **success** for
this household is meant to sit in a **near-miss** band: interesting for levers, not a free win and
not a wipeout.

Do **not** treat any single percentage as scripture. The model, your **success definition**
(Gold / Silver / Bronze), and random paths all move the number. In these lessons, prefer:

- **direction** (“later retirement usually helps”), and  
- **order of magnitude** (“combined earnings in the low-to-mid six figures; lifestyle a step below
  while working”),  

over memorizing a quoted rate or dollar figure.

**Where to look:** [[nav:forecaster]] → Simulation Summary — Monte Carlo success and [[term:terminal-wealth]]
under the tier you care about (**Silver** is the usual product default).

### Sample Simulation Summary views

| Preview | View | What it is |
|---------|------|------------|
| [[img:sfb-nw-distribution|preview]] | **Net Worth Distribution** | Cloud of ending outcomes, with success rate at the Silver threshold. |
| [[img:sfb-key-forecasts|preview]] | **Key Forecasts** | Min / quartiles / GMF / Max (and related metrics). Click a row to focus Forecast Detail on that path. |

**Note:** Your numbers may vary (Key Forecasts values are blurred in the standard so you focus on
layout). We are going for **understanding**, not matching a frozen percentage or dollar figure.

---

## Try this — get oriented

Work these steps on the **right-hand plan** (Learning Center) or the same sample in the desktop
app.

1. [[nav:dossier]] → People (or [[nav:birds-eye]] people) — confirm Homer and Marge; hover each for retire
   ages (65 and 67).
2. [[nav:birds-eye]] → Assets & Liabilities — find **Evergreen Terrace** (the home) and the account
   accounts; switch the selector between **Account** / **Holding** and **Cash Flow** and notice
   principal / interest and other recurring items with **Cash Flow** on.
3. [[nav:path:birds-eye|cash-flow]] — hover dual earned income, lifestyle phases, mortgage-related
   items, Social Security, healthcare, and late-life care; use the sparkline tip as the
   definitional read.
4. **Life-events timeline** — green work years should end near each person’s retirement; blue
   spans cover retirement through death.
5. [[nav:path:forecaster|cf-chart]] and [[nav:cf-table]] — already on display when you open [[nav:forecaster]]; scrub
   **Year** to see flows grow or shrink; stay on **[[term:fid-gmf|FID 0 / GMF]]** unless you mean to tour other
   paths.
6. **Simulation Summary** (also already populated) — note success under Silver as a *starting*
   picture only. Re-simulate only if you have changed the plan and want an updated multi-path run.
7. When that feels solid, continue to the retirement-timing section below **without** switching
   samples — it is the half of this lesson that matters most.

[[jump:birds-eye]]

---

## When does retirement age move the plan?

**This is the section to land.** A year or two more (or less) of work is one of the largest single
levers in a plan — it changes income, the lifestyle phases, and how many years the portfolio has to
carry — and here it is one control, not a dozen retyped dates.

**Where the control is:** [[nav:transforms]] → **Modifications** → **Modifiables** → **Forecast
End**. Retirement and death dates for both people (primary and secondary) live there. Moving
**primary retirement** adds it to the **Change Set**, and the charts update live.

[[jump:horizon|modifiable]]

### The question

If you change **when** Homer (or Marge) stops working, does the **whole** plan respond — income,
lifestyle phase, drawdown years — **without** you retyping every cash-flow date?

That is the star idea of this half of the lesson: life-event pins (especially **retirement**) plus
one control that re-resolves dependent money.

### Why this matters

Most tools let you edit a retirement age. The fluid feel here comes from pinning many series to
**named life events** (for example primary retirement) instead of hard-coding the same calendar
year on every line. Salary can end at retirement; the **Retire** living phase can start there;
other ranges that use the same names move with one change.

A second product habit: [[nav:transforms]] holds a lightweight **what-if** over this baseline. You
compare original vs modified, then **Re-simulate** for a full side-by-side Monte Carlo. A scenario
comparison is for reading the delta — it is not a second permanent dossier unless you choose to
keep it.

One thing the control does *not* do: it shows what a given retirement year does to the picture.
It does **not** announce when someone is “allowed” to retire.

### Try this — move retirement

1. Stay on this Springfield sample. Note baseline Monte Carlo success and a rough sense of
   terminal wealth (**direction and order of magnitude only**).
2. Open [[nav:transforms]] → Modifications.
3. In **Modifiables**, select **Forecast End** (not a person row). That is where you control
   **retirement** and **death** dates for the household (primary and secondary), including the
   shared plan horizon.
4. Move **primary retirement later** by a few years (the retirement control for Homer / primary
   under Forecast End). Changing the control adds it to the **Change Set**. Charts and tables in
   the Transforms / Forecaster workspace should **update live** — earned income should extend; the
   lifestyle **Work → Retire** handoff should move with it.
5. **Re-simulate** for a full Monte Carlo side-by-side. Compare original vs modified:
   - Later retirement often **helps** success and late-life wealth (more earn years, shorter
     draw) — still read the charts; taxes and spend matter.
6. Try the opposite: **earlier** primary retirement. Expect more stress on the portfolio if the
   baseline was already near-miss.
7. Optional: under the same **Forecast End** editor, nudge **Marge’s (secondary) retirement** the
   other way and watch staggered dual income on the timeline.
8. Optional: open the cash-flow chart and scrub the year axis across the old and new retirement
   years so the handoff is visible, not only the success percentage.

**Screencast (no audio):** short walkthrough of the Forecast End / retirement move on Springfield.
Use the player controls to pause and match the steps above.

<video controls playsinline muted preload="metadata" class="lesson-video"
  src="/static/videos/lessons/springfield-move-retirement.mp4"></video>

**Note:** The recording is illustrative. Labels and exact dollar paths may differ slightly as the
sample evolves; follow the live UI on the right.

### Reading the result

- Prefer “a few years later / earlier” over a single magic retirement age.
- Prefer “success up / down” and “terminal wealth more / less comfortable” over locking a
  percentage.
- Moving only Homer’s retirement still leaves Marge’s income until **her** retire year — that is
  part of the story, not a bug.

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| Living spend as the main lever | [Bend the plan with living spend](/learn/springfield_living_spend) |
| Mortgage on vs paid off | [Mortgage on vs paid off](/learn/mortgage_on_vs_paid_off) |
| What “success” means (tiers) | [What does success mean?](/learn/springfield_success) |
| Social Security claim timing | [Claim early vs live long](/learn/springfield_claim_longevity) |
| Tax-account order vs pro-rata | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| Glide / rebalance | Springfield glide sample |

---

*The quantities are illustrative. What the lesson teaches is the mechanism and the direction each lever moves.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
