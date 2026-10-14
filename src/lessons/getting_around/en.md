<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/getting_around.md
tutilis-locale: en source
-->
# Getting around the app

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Reading Lesson (Getting Around)
  document-id: getting_around
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Start-here map of Dossier, Bird's Eye, Forecaster, Transforms.
  port-source: dossiers/getting_around.md
-->

<!--- α <lesson_body> -->
**Start here.** This page is a **map of the app** — which button leads where, and what each area is
for. It is not a finance lesson, and it is not meant to be read end to end. Every heading below is a
row you can open; open the one you need and shut it again.

Prefer to watch? The [Screencast Lesson (Getting Around)](/learn/getting_around_screencast) covers
the same map in a few minutes.

The [[term:live-plan]] beside this lesson is the **Springfield** household, the same cast used in
[Meet the Springfield household](/learn/springfield_baseline). You do not need to understand their
money yet — treat them as a fully loaded example so every panel has something real to show. Samples
here are **read-only**; what-ifs go through [[term:transforms]], not by rewriting Springfield line
by line.

---

## Make room first {#make-room}

The plan beside a lesson is the whole app, so it is dense. You can make room. Each bar has a small
blue handle on its edge with an arrow on it. Click a handle to put its bar away, and click it again
to bring the bar back. A handle says what it does only when you rest the pointer on it, like this
one on the header:

[[img:ga-header-handle|control]]

There are four handles. **Hide navigation** puts away the column of area buttons on
the left (the [nav rail](#main-navigation)). **Hide header controls** puts away the header across
the top. **Hide tools bar** puts away the bar along the bottom. **Hide About this dossier** puts
away the panel on the right of the household overview in [[nav:dossier]]. That panel starts put
away unless the plan has a problem, in which case it opens by itself and its handle turns red or
amber. Nothing you put away is lost, and the plan stays as it was.

Keep the column of area buttons open while you follow a lesson. Lessons tell you where to click by
naming those buttons.

One way of working suits most people. Drag the divider so the lesson is narrow and out of your way,
then look around the plan and click one thing at a time to see what it does. The sample is
read-only, so nothing you click can break it.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What are the areas on the nav rail, and what is each one for?** See
   [The nav rail](#main-navigation).
2. **Where do I browse the household's people, accounts, and cash flows?** See
   [Dossier](#dossier).
3. **How do I see the whole household at a glance from anywhere in the app?** See
   [Bird's Eye](#birds-eye).
4. **Where do I change the rules the forecast runs under, such as growth and taxes?** See
   [Assumptions](#assumptions).
5. **How do I run the plan forward and read one path or a thousand of them?** See
   [Forecaster](#forecaster).
6. **How do I try a what-if change without touching the baseline plan?** See
   [Transforms](#transforms).
7. **What do the tools on the bottom bar do?** See [The bottom bar](#bottom-bar).
8. **How do I enlarge, zoom, or open up a chart that is hard to read?** See
   [Chart controls](#chart-chrome).

</div>
</aside>

---

## The nav rail: seven areas {#main-navigation}

Down the left edge is a column of icons. Click one and the main panel **becomes** that area — you
switch the focus of the workspace rather than stacking unrelated editors on one screen.

| Area | What it is for |
|------|----------------|
| [[nav:dossier]] | Where the household is defined — people, assets and liabilities, cash flows. [More](#dossier) |
| [[nav:assumptions]] | The rules the forecast runs under: taxes, money movements, Roth conversions and what counts as success. [More](#assumptions) |
| [[nav:risk]] | How holdings and categories sit on risk versus return. Useful later; skip it on a first pass. |
| [[nav:forecaster]] | Run the plan year by year, and summarize a thousand runs into a probability of success. [More](#forecaster) |
| [[nav:transforms]] | What-if changes on a **copy** of the plan, read against the original. [More](#transforms) |
| [[nav:region]] | The same plan as if you lived somewhere else — today, US states. [More](#region) |
| [[nav:guardrails]] | Published dynamic-withdrawal rules compared side by side on one shared path. Deterministic, and local — it writes nothing to your plan. |

**One area is not on the rail.** [[nav:birds-eye]] sits in the **top bar**, and only when you are
away from Dossier — see [Bird's Eye](#birds-eye).

Along the **bottom** sit small tools that open **over** your work instead of replacing it — see
[the bottom bar](#bottom-bar). **Help**, **Reach Out** and **Advanced** are the exception: they sit
at the foot of the rail itself, not on the bottom bar.

---

## [[nav:dossier]] — where the household is defined {#dossier}

The [[nav:dossier]] holds the plan's source data: people, assets and liabilities, cash flows.
[[nav:birds-eye]] is embedded at the top of it, so landing here shows you everything you entered.

**You will not type financial data in these lessons.** The Springfield household is already built to
teach; you read it. When a lesson wants a change, it sends you to [[nav:transforms]]. In the desktop
app this is the opposite: Dossier is where your real plan is entered and kept up to date.

Day to day, a plan that is already entered does not need much visiting — your balance sheet does not
rewrite itself overnight. What changes is your questions, and those live in [[nav:forecaster]],
[[nav:transforms]], and [[nav:region]]. [[nav:birds-eye]] is how you check "what did I put in?"
without leaving them.

---

## [[nav:birds-eye]] — the household in one pop-up {#birds-eye}

The whole household at a glance: people, assets and liabilities, the cash-flow series, and a
life-events timeline.

Because it is **already embedded at the top of [[nav:dossier]]**, the control does not appear while
you are there. Everywhere else it is a button in the **top bar** that opens a **pop-up** over what
you are doing. Look something up, dismiss it, and your path, year, and chart focus are exactly where
you left them.

**Try it:** click [[nav:forecaster]] on the rail and watch [[nav:birds-eye]] appear in the top bar.

### What is in it {#birds-eye-what-you-will-see}

**People** — who is in the household, birth years, retirement and longevity, and roles. [[term:hover|Hover]] a
person for their modeled ages. Springfield has **staggered retirement**: Homer and Marge stop working
in different years, visible as [[term:earned-income]] spans of different lengths on the timeline.

**Assets and liabilities** — accounts, holdings, home, mortgages. On Springfield the house is named
**Evergreen Terrace** so you can find it quickly.

[[img:ga-birds-eye-assets-liabilities]]

**Cash flows** — the list of recurring series: salaries, lifestyle phases, Social Security,
healthcare, debt service. Most are **patterns** ("earned income until this person retires") rather
than a typed amount per year; expanding them is how the Forecaster draws multi-decade charts.

**Life events** — work years, retirement spans, claim markers, and one-off events, per person. The
fast answer to "when does work stop, and does income line up with that?"

### The three mode chips {#birds-eye-modes}

[[nav:path:account|holding|cash-flow]]

[[nav:account]] and [[nav:holding]] give an ordinary balance sheet. [[nav:cash-flow]] — often the
default on teaching samples — weaves recurring money movement **into** that picture: inflows read
with **Assets**, outflows with **Liabilities**, and the **Σ** badge rolls a multi-year series into a
single present-value figure on the matching side.

That is deliberately not CPA bookkeeping. A balance sheet does not treat future paychecks as assets.
The goal here is planning intuition: put "what funds the life" next to "what we own," and "what we
must pay for" next to "what we owe." Switch to [[nav:account]] when you want the conventional view
back.

---

## [[nav:assumptions]] — the rules the forecast runs under {#assumptions}

The other half of the plan's inputs, next to household data. **Read and write**, including here in
the Learning Center when you want to experiment.

[[img:ga-assumptions]]

Most plans need only the four controls on this page:

| Control | Roughly… |
|---------|----------|
| **State of residence** and **Filing status** | Which tax rules the forecast applies. |
| **Money movement strategy** | What happens to surplus cash, and how deficits are funded from the portfolio, including a glide path. |
| **Roth conversion** | Whether to move part of a pre-tax balance into Roth each year, and how much. |
| **Definition of success** | Which forecasts count as a success, which turns the paths into a success rate. |

Everything else uses defaults that have been checked, and **Show all assumptions** opens them to read.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power user</p>
<div class="lesson-power-user-body">

A **Power user** (turned on under [[nav:advanced]] → Application) has the full panel in tabs instead, where growth rates, [[term:correlation\|correlations]] and the plan's currencies can be set. Here is the same plan's Assumptions with Power user on, open on the Growth tab.

[[img:ga-assumptions-power]]

</div>
</aside>

You do not need mastery of any of these to follow the lessons. When one matters, the lesson names
the control and links it. Published [[term:cliff|MAGI cliff]]<!-- term-skip: magi — one pill for the phrase "MAGI cliff" --> tables ([[term:irmaa]], [[term:niit]]) are
**law, not a plan setting** — they live in the **Reference** tool.

---

## [[nav:forecaster]] — run the future {#forecaster}

Two jobs share this area, in a split you can drag so either one dominates:

- **Forecast Detail** — one path, one year, every surface of the projection.
- **Simulation Summary** — many paths (often about a thousand) summarized into a distribution and a
  probability of success.

### Choosing what you look at {#controlling-what-you-see}

| Control | What it picks |
|---------|---------------|
| **Forecast ID (FID)** | Which **single path** through the cloud Detail is showing. **0** is the representative [[term:gmf\|GMF]] path — a stable north star, not a prediction. |
| **Year** | Which year fills the tables and year-scoped cards. Charts still show the whole horizon. |
| **Chips** | Which cards appear at all. Turn off what you are not exploring. |
| [[nav:year-axis]] | On a chart, label the year line as calendar years or as a person's age. It does not change the selected year. |

Under the **FID** label<!-- term-skip: fid — this paragraph explains the control --> is a strip of colored marks — **quick jumps** to the run's key forecasts,
ordered **worst to best**, with the gold **✦** (the GMF) sitting in that order rather than off to the
side. They are *not* placed at their forecast numbers: an ID is a name, not a measurement.

[[img:ga-fid-quick-jumps]]

Use them as a habit: start on the **✦**, step left toward Min and right toward Max with the same
chips and year, and you feel the **spread** of the cloud instead of only its middle.

### The chips, one line each {#forecast-detail}

Core: [[nav:path:bs-chart|bs-table|cf-chart|cf-table|si-chart|si-table|rec]] —
tax lens: [[nav:path:taxes|cliffs|brackets]]

[[img:std-forecaster-chip-bar]]

| Chip | Shows |
|------|-------|
| [[nav:bs-chart]] | Assets above the line, liabilities below, year by year. The thick black **net line** is net worth. |
| [[nav:bs-table]] | The balance sheet for the selected year. |
| [[nav:cf-chart]] | Money in above the line, money out below, by category. The thick black net line is net cash flow. |
| [[nav:cf-table]] | Incomes, expenses, taxes and net disposition for the selected year. |
| [[nav:si-chart]] | What was sold, invested, or borrowed across the years. |
| [[nav:si-table]] | Holding-level trades for the selected year, with a **Why** for each. |
| [[nav:taxes]] | What the year actually owed, federal and state. A year's assessment is often **paid the next year**, so it need not match that year's cash-flow Taxes line. |
| [[nav:rec]] | The proof the year adds up: sources of cash equal uses. Open this when a cash-flow year looks wrong. |
| [[nav:brackets]] | One year's income stacked into the ordinary brackets, and the **room left** under a ceiling you pick. |
| [[nav:cliffs]] | How close the year runs to each modeled threshold — the [[term:niit]] floor, the IRMAA line — across the whole horizon. |

### The four core surfaces {#core-surfaces}

[[img:sfb-bs-chart]]

[[img:sfb-bs-table]]

[[img:sfb-cf-chart]]

[[img:sfb-cf-table]]

Hover a year on either chart for a breakdown; **click** a year to load it into the tables.

### Sales and investments {#sales-and-investments}

[[img:ga-si-chart]]

[[img:ga-si-table]]

In [[term:drawdown]] years these answer **which** accounts funded the spending and under which rule
— [[term:rmd]] versus pro-rata residual versus tax-account order. Hover a **Name** for the full
detail, including the prior value.

### The tax lens {#tax-lens}

[[img:ga-brackets]]

[[img:ga-cliffs]]

Both are pinned to **2038**, a year with something to say: the brackets card shows how much ordinary
income still fits under the ceiling you pick, and the radar names the thresholds actually **in
play** that year, how far over the line the year lands, and what crossing costs.

### Simulation Summary {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

The other half of the split answers different questions: the shape of **terminal net worth**, the
**success rate** under your success definition, and the **Key Forecasts** (Min, quartiles, mean,
Max, GMF). Click a key row and Forecast Detail focuses that path, so you can go read *why* it was
extreme.

Read the **spread**, not any single row — and care about the **direction** a change moves the
success rate more than the percentage itself.

---

## [[nav:transforms]] — try a change without wrecking the baseline {#transforms}

[[img:working-fast-transforms-sections|control]]

1. Open **Modifications**.
2. Pick something in **Modifiables** — often a person, or a cash-flow item such as earned income.
3. Edit a control: retirement year, active years, spend. Editing it **is** adding it to the **Change
   Set**; there is no separate "add" step.
4. Charts and tables update **live**, so you see the plan react before any re-simulation.
5. **Re-simulate** when you want the full original-versus-modified comparison.

Transforms is for exploration, and it is the right tool for "what if" even in the desktop app, where
Dossier holds your real data.

---

## [[nav:region]] — the same plan somewhere else {#region}

Cost-of-living style comparison: what would this plan look like if the household lived elsewhere?
Today that means **US states**; other countries are future work. Reach for it when the question is
about **place**, not about portfolio math.

[[img:ga-region-sections|control]]

---

## The bottom bar: tools that open over your work {#bottom-bar}

They come in three groups, and the grouping is the point — each group answers a different kind of
question.

[[img:ga-tools-bar|control]]

| Tool | Role |
|------|------|
| [[nav:fx]] | Display currency and rates. |
| [[nav:growth]] | Scratch-pad growth calculator. |
| [[nav:annuity]] | Scratch-pad [[term:annuity\|annuity]] explorer. |
| [[nav:peek]] | A menu of three views of Forecast Detail, each opened over the app. [[nav:charts]] shows every chart, [[nav:tables]] shows every table, and [[nav:pairs]] shows each chart beside its table. Your chip selection does not change. |
| [[nav:reference]] | Every published table, rate, and rule the forecast runs on — searchable, with its source and its limits. Read-only. |
| [[nav:glossary]] | What the words mean. The same book as Reference in the cool colorway, because they are the same kind of thing: Reference holds the published numbers, Glossary holds the vocabulary. |

**Help is not down here** — it is on the **nav rail**, at the bottom, with **Reach Out** and
**Advanced**.

### Two habits worth learning once {#two-habits}

**Copy.** The two-overlapping-pages icon on chart headers, tables, and many lists puts Markdown or
image data on the clipboard. It is on generated outputs *and* on inputs like tax schedules and growth
assumptions, on purpose — paste them into notes or a chat rather than retyping from a screenshot.

**Hold Alt to quiet the tooltips.** Hover explanations are everywhere, which is what you want while
learning and not what you want while presenting. Holding **Alt** suppresses them for as long as you
hold it. If the default is too chatty, the small filled/hollow circle beside the theme control
reverses the rule, so tooltips appear **only** while Alt is down. Short hints on icon buttons and the
reveal on a truncated label always show either way — an unreadable label is a dead end, not a
distraction.

---

## Chart controls: Close up, zoom, and Reveal {#chart-chrome}

Charts and distribution cards share one small cluster of controls. Hover any icon for its tip.

| Control | Where | What it does |
|---------|-------|--------------|
| **Close up** | Most chart and table cards | Opens that view large, over the app. Hover tips still work. Dismiss with **Esc**, a click outside, or **✕**. |
| **Vertical zoom** | [[nav:bs-chart]], [[nav:cf-chart]] | Magnifies tall bars so small years are comparable. Full left is 1×. |
| **Reveal** | Net Worth Distribution | Opens up the mass of dots when a few extreme endings squash everything near zero. |
| **Link reveal** | Two distributions side by side | On by default, so both charts stay comparable. Turn it off to reveal each side separately. |
| **Link chart scales** | Paired BS or CF charts | One shared y-axis, scaled to the taller side, so the smaller plan visibly shrinks instead of auto-scaling to look equal. |
| **Merge charts** | The same paired charts | Folds both sides into one chart, bars side by side on a shared scale. |

None of these re-run the simulation or touch the plan. They only change **how you look**. When a long
right tail is the problem specifically, there is a lesson for it:
[When the outcome cloud needs Reveal](/learn/nw_distribution_compression).

---

## Learning Center versus the desktop app {#layout}

It is the same product, with the same areas and the same labels. Two differences are worth knowing:

| | Learning Center | Desktop app |
|---|---|---|
| **Layout** | Lesson text beside a live plan — drag the divider, or collapse the header for height | The plan full-screen; no lesson pane |
| **Dossier** | Samples are read-only; you read them | Your real plan; you enter and edit it |

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

The Dossier editor, where you enter your own financial details, is only in the desktop app.

[[img:ga-desktop-dossier]]

The desktop shot shows the editing controls the Learning Center does not need — the **pencil** beside
a person, **+ Add person**.

</div>
</details>

The area names are identical, so everything on this page transfers.

---

## A five-minute tour {#practice-tour}

1. [[nav:dossier]] — browse the sample, and read [[nav:birds-eye]] at the top of it.
2. In [[nav:birds-eye]], switch between [[nav:account]] and [[nav:cash-flow]]; try **Σ**.
3. Click [[nav:forecaster]] on the rail — watch [[nav:birds-eye]] move to the top bar. Open it,
   dismiss it, and notice you never left Forecaster.
4. In **Forecast Detail**, leave only [[nav:bs-chart]] and [[nav:cf-chart]] on, then move **Year**.
5. Click the leftmost (red) quick-jump mark under **FID** to land on the worst path, then the gold
   **✦** to come home.
6. [[nav:transforms]] → **Modifications** — nudge a retirement year and watch the charts react live.
   Leave without re-simulating if you only wanted the map.

---

## Where to go next {#where-to-go-next}

| Order | Lesson |
|-------|--------|
| **0 (you are here)** | Getting around the app |
| **1** | [Meet the Springfield household](/learn/springfield_baseline) |
| **Later** | Living spend, mortgage contrast, success definitions, Social Security claim, withdrawal strategy, assumption deep-dives |

Later lessons point back here with short "where" reminders rather than re-teaching the map.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
