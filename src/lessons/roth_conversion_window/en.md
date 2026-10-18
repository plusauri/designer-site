<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/roth_conversion_window.md
tutilis-locale: en source
-->
# Roth conversion in the window

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.roth.window
  outline-path: Taxes, benefits, and retirement systems › Roth and conversions › Roth conversion in the window
  document-id: roth_conversion_window
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Rebuilt 2026-10-03 after a CFP review — a household where conversion pays (Alex at 60, filling the 12% bracket before Social Security and RMDs). The reviewed version is roth_conversion_window_deprecated.
  port-source: dossiers/roth_conversion_window.md
-->

<!--- α <lesson_body> -->
A **[[term:roth-conversion]]** moves money from a **[[term:traditional]]** ([[term:pre-tax]]) retirement account into a
**[[term:roth]]** ([[term:after-tax]]) account. You pay [[term:ordinary-income]] tax on the amount converted **now**, so
future growth and [[term:qualified]] withdrawals can come out federally [[term:tax-free]].

That trade is most attractive in **low-income years** — after paychecks stop and before required
minimum distributions (RMDs) force large traditional withdrawals. Planners call that span the
**conversion window**. This lesson shows how the plan **states a conversion policy**, how the
forecast **executes** it without treating it like ordinary spending, and how the conversion
**shows up on tax, [[term:magi]], and Movements**

| Idea | Plain meaning | Where in the app |
|------|---------------|------------------|
| **Conversion policy** | How much to convert, in which years | [[nav:assumptions]] → Movements → Roth conversion |
| **Roth destination** | A Roth account must already exist (no auto-create) | **Assets** — add Roth IRA / Roth 401(k) / … |
| **Balance transfer** | Traditional down, Roth up by the same dollars | **Assets** balances over years; **Movements** |
| **Why: Roth conversion** | Not residual spend, not RMD | [[nav:forecaster]] → Movements Why column |
| **Tax on conversion** | Converted amount is ordinary **traditional retirement** income | [[nav:path:forecaster|taxes]] (federal statement) |
| **MAGI this year** | Conversion raises MAGI (cliff input) | Federal statement **MAGI** row |
| **IRMAA later** | High MAGI at *t* can raise Medicare premiums at *t+2* | **Cash flow** surcharge; [[nav:forecaster]] cliff radar (Custom → [[nav:cliffs]]; see cliff radar / MAGI cliffs) |

The live plan on the right is **Roth Conversion Window** (`roth_conversion_sample`). **Alex** is 60,
single, and retired. Alex has $450,000 in a taxable brokerage account, $1.1 million in a traditional
[[term:ira]], and $50,000 in a Roth IRA, and spends $64,000 a year. Until Medicare at 65, Alex also buys
health coverage on the [[term:aca]] marketplace for about $12,000 a year. Alex will claim Social Security at 70,
in 2036, and required minimum distributions begin at 75, in 2041. The plan already carries a
conversion policy that fills the 12% bracket each year from 2026 through 2035.

The plan has no state selected, so every tax figure in this lesson is federal only. That keeps the
arithmetic easy to follow. A state income tax would add to the cost of each conversion, and you can
see by how much by choosing a state in [[nav:region]].


---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **When is a conversion worth doing, and how can I tell whether it paid off?** See
   [Why convert at all](#why-convert-at-all).
2. **What does a Roth conversion do to my accounts, and why is it not money I can spend?** See
   [What conversion is](#what-conversion-is-and-is-not).
3. **Why does converting before 59½ avoid the 10% early-withdrawal penalty?** See
   [What conversion is](#what-conversion-is-and-is-not).
4. **Where do I set how much to convert and in which years?** See
   [Policy first](#policy-first-then-the-year-loop).
5. **How do I tell a conversion apart from sales that fund living spend on Movements?** See
   [Policy first](#policy-first-then-the-year-loop).
6. **How does a conversion show up on the federal tax statement, in [[term:agi]], and in MAGI?** See
   [Policy first](#policy-first-then-the-year-loop).
7. **How can this year's conversion raise [[term:irmaa]] premiums two years later?** See
   [Policy first](#policy-first-then-the-year-loop).
8. **When one traditional sale has several reasons, how do I tell them apart?** See
   [Three layers of why we sold](#three-layers-of-why-we-sold).

</div>
</aside>

---

## Why convert at all

For the next ten years Alex has no paycheck, no Social Security, and no required withdrawals, so the
12% bracket is almost empty. That changes later. From 2036 Social Security arrives, and from 2041 the
required minimum distributions come out of a traditional IRA that will have grown past $2 million if
nothing is converted. Together they push Alex into the 22% bracket, and late in life into 24%. A
conversion moves traditional dollars out while they can still be taxed at 12%, so fewer of them are
left to be taxed at 22% or 24% later.

The plan shows the result directly. The same household with the policy turned off is its own sample
(`roth_conversion_off_sample`), and the two can be compared in the Simulator.

| What changes | With conversions | Without |
|---|---|---|
| Taxes paid over the plan (Simulator, median path) | about $400,000 | about $570,000 |
| Chance the plan succeeds | about 94% | about 93% |
| Median net worth at the end | about the same | about the same |
| Traditional IRA still untaxed at the end (projected path) | about $1.3 million | about $2.4 million |

The two plans end with about the same net worth, but they do not leave the same amount to spend.
The plan without conversions still holds about $1 million more in its traditional IRA, and every
dollar of it will be taxed as ordinary income when Alex or an heir takes it out. Net worth counts
those dollars at full value, which is why it hides the difference. The lower tax bill is the benefit,
and it is real money.

A conversion is not always worth it. If Alex's later income would land in the same bracket as the
conversion, prepaying the tax gains nothing. The lesson's household was chosen because the gap is
large: 12% now against 22% to 24% later.

---

## What conversion is — and is not

### Is

| Behavior | Why it matters |
|----------|----------------|
| Moves **balance** traditional → Roth | Portfolio tax location changes; the same wealth sits in a different tax bucket |
| Books the converted amount as **ordinary income** this year | You “pay tax to fill” the window |
| Records Movements trades with Why **Roth conversion** | You can audit the decision separately from RMD and residual strategy |
| Raises **MAGI** in conversion years | Cliffs (IRMAA, NIIT, ACA warnings) read MAGI |

### Is not

| Not this | Why the product separates it |
|----------|------------------------------|
| Free cash to spend | Conversion does **not** fund living expenses; tax is still funded with the year’s tax bill (usually next year) |
| A residual “sell strategy” choice | Residual pro-rata / tax-account order still run for deficits; conversion is a **policy** after those trades |
| An optimal solver | You state a policy (fixed dollars or fill a bracket); the engine shows **consequences**, not a solved “best path” |
| Early-withdrawal penalty on the conversion itself | Penalty applies to early **spending** distributions from traditional; conversion is treated differently |

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Converting a traditional IRA to a Roth before age 59½ does not trigger the 10% early-withdrawal
penalty. The IRS treats a conversion as a move between two of your own accounts, not a withdrawal
you spend. The penalty can come back only if you are under 59½ and take the converted dollars out of
the Roth within five years of converting them.

</div>
</aside>

---

## Policy first, then the year loop

### 1. State the policy (definitional)

1. Open [[nav:assumptions]] → Movements (the side-by-side arrows chip).
2. Below residual strategy, find **Roth conversion**.
3. On this sample the policy is **on**. It fills the **12%** ordinary bracket each year, active from
   **2026** until **2036** (the end year is exclusive, so 2035 is the last conversion year).
4. The plan must already include a **Roth** account. If you remove it, conversion amount is
   **zero** and Assumptions shows a warning — the app does **not** invent accounts.

[[img:roth-window-policy|control]]

*Assumptions → **Movements**. The residual withdrawal strategy stays separate; this plan draws
in tax-account order, taxable first. **Roth conversion** is the engine policy: enable, a fixed amount
or fill an ordinary [[term:bracket]], and active years. This sample fills the **12%** bracket.*

Optional modes on the control:

| Mode | Meaning |
|------|---------|
| **Fixed annual amount** | Convert up to this many dollars each active year (capped by traditional balance) |
| **Fill ordinary bracket** | Convert enough (single-pass estimate) to fill ordinary taxable income up to the top of a chosen federal bracket rate (e.g. 22%) |

Fill-to-bracket is an **estimate** for the year (it does not re-solve every tax [[term:cliff]] feedback in
a loop). Filling a bracket is the way a planner usually sizes a conversion, because the bracket edge
is the line that matters. A fixed amount is easier to read in a table but can spill into the next
bracket in a year when other income is higher.

**To *see* a bracket being filled**, open
**[Filling the cheap buckets](/learn/filling_the_cheap_buckets)**. This lesson tells you the
conversion becomes ordinary income; that one draws it — one stacked column per year showing how much
of the bracket your base income, your forced RMDs, and your conversion each occupy, with the unfilled
room hatched on top. It is also where fill-to-bracket stops being abstract: on that plan the
conversion segment **more than halves in a single year** when RMDs begin, because forced income
claims the room first.

### 2. Watch the transfer (projected)

First, glance at the **balance sheet** so the tax buckets are clear: taxable [[term:brokerage]], **traditional**
IRA, and **Roth** IRA. Conversion moves balance **between** traditional and Roth — it is not a
new deposit from outside the plan.

Then set the Forecaster chips for the most useful view of conversions: turn on
[[nav:cf-table]] and [[nav:si-table]] (and keep [[nav:si-chart]] if you want the multi-year
disposition story). [[nav:taxes]] (with [[nav:cliffs]] / [[nav:brackets]] when you audit MAGI
and ordinary brackets) sit on the tax-lens group for later checks.

[[img:roth-conversion-forecaster-chips]]

#### With conversion on

Run a year inside the active window (e.g. **2027** on [[term:gmf]]). In 2027 Alex lives on the
taxable account, so the only traditional dollars sold are the conversion's. You should see:

| Surface | What to notice |
|---------|----------------|
| [[nav:cf-table]] → Sales | A traditional line tagged with the conversion marker (**🔁** next to the tax icon) for the converted dollars — separate from residual sales of the same holding |
| [[nav:cf-table]] → Investments | Matching dollars into Roth (when the transfer invests the other side of the conversion) |
| [[nav:si-table]] | Traditional **Sold** and Roth **Invested**; hover **Why** for **Roth conversion · …** next to any residual / early-withdrawal segments |
| [[nav:si-chart]] | Disposition over years — conversion years still show the same story as the tables |

[[img:roth-window-si-policy-on]]

*Policy **on**, Movements at **2027**. The traditional holding sells about $68,000 for the conversion
and the Roth holding receives the same $68,000, both marked **🔁**. The Roth's **Invested** is a few
hundred dollars more than that, because every holding also buys back its own dividends; the **Why**
column names those dollars **Reinvested distributions**, and they are why the traditional and taxable
rows show something **Invested** as well as **Sold**. Nothing is rebalanced. The taxable account pays
the year's living costs. Price growth shows in **After**, not in **Sold** or **Invested**. The figure
is drawn from the plan, so these are the plan's own numbers. Each **Why** pill names the row's first
reason and how many more there are; [[term:hover|hover]] it in the app for every reason with its
dollars, as a table you can copy.*

#### Without conversion (toggle off and re-run)

Turn **Enable Roth conversions** **off** in Assumptions, re-run, and pick the same year.

| Surface | What changes |
|---------|----------------|
| [[nav:cf-table]] | No conversion-sized traditional sale; no matching conversion invest into Roth |
| [[nav:si-table]] | Traditional sells nothing in 2027; Roth **Invested** for conversion disappears; Why loses **Roth conversion** lines |
| **Balances** | Traditional stays higher; Roth stays lower than the conversion-on path |

[[img:roth-window-si-policy-off]]

*Policy **off**, same surface, same year, and nothing else in the plan changed. There is no **🔁**,
and the traditional IRA sells nothing.
Read the **After** column across the two pictures: traditional ends about **$68,000 higher** here and
Roth ends lower by the same amount. That is the transfer in arithmetic. The money moved between tax buckets; it
was neither spent nor deposited from outside the plan.*

Turn conversion **back on** before the tax / IRMAA steps.

#### Years when the policy has nothing to do

Scrub forward through the window. The taxable account runs out at the end of 2033, and in 2034 and
2035 Alex lives on withdrawals from the traditional IRA instead. Those withdrawals are ordinary
income, and at $64,000 a year plus inflation they fill the 12% bracket on their own. The policy
converts nothing in those years because there is no room left to fill. This is the same competition
for one bracket that [Filling the cheap buckets](/learn/filling_the_cheap_buckets) draws: income the
plan cannot avoid claims the cheap room first.

### 3. Read the tax statement

On a conversion year (policy on):

1. [[nav:path:forecaster|taxes]] (sample / GMF year).
2. Under US federal, find **traditional retirement** (or equivalent ordinary bucket) including the
   converted amount — not only “spending withdrawals.”
3. Confirm **AGI** and **MAGI** moved with that ordinary income. MAGI is the cliff input
   ([MAGI cliffs](/learn/magi_cliffs_irmaa_niit)).

[[jump:traditional|output__forecaster__forecaster.forecast-detail__taxes__taxes.federal-statement__line.tax.traditional-retirement]]

[[img:roth-window-tax-statement]]

*Taxes for the same conversion year. **Traditional retirement** of about $68,000 appears under
**Adjusted gross income** and again under **Ordinary [[term:taxable-income]]**, where the standard
[[term:deduction]] of about $16,500 brings it down to the top of the 12% bracket. **MAGI** tracks AGI here and is the
input for later cliffs. Notice one cost of a full bracket. Alex's long-term capital gains, about $26,000
this year, now sit above the 0% gains threshold and are taxed at 15%. A planner weighs that against the 22%
the converted dollars would pay later. There is no early-withdrawal penalty line, because Alex is
past 59½.*

### 4. Look ahead to IRMAA (and the Cliffs strip)

IRMAA is a **[[term:surcharge|Medicare premium surcharge]]<!-- term-skip: premium — one pill for the phrase -->** driven by **MAGI from two years earlier** — a
**healthcare** cash outflow, not a federal tax-statement line. The honest version is simple: a
conversion that lifts MAGI in year *t* can raise premiums in year *t*+2 **once** someone is on
Medicare (planning anchor: age **65**). Example: convert at **63** → IRMAA risk at **65**.

**On this sample the surcharge appears, and then it shrinks.** Alex turns 65 in **2031**. The
conversions of 2029 to 2032 lift MAGI over the first IRMAA threshold, so the cash-flow table shows an
IRMAA surcharge in 2031 to 2034. Over the whole plan, though, conversions **lower** the IRMAA Alex
pays. Without them, the larger RMDs keep MAGI high for the rest of Alex's life, and the plan pays
about twice as much in surcharges. Paying a small surcharge for four years buys a smaller one for
twenty.

Still open [[nav:forecaster]] → cliff radar ([[nav:cliffs]] view **on** by default; toggle under **Custom**
if needed) on a conversion year and on a later Medicare-age year:

| What you should see | What you should **not** see |
|---------------------|-----------------------------|
| Note that **Roth conversion** is active in a conversion year (MAGI moves **now**) | An invented IRMAA **surcharge** when cash flow has none |
| On later years with an IRMAA radar row whose lookback year was a conversion year: a **lookback conversion** note (*t* → *t*+2) | Optimum conversion markers or cliff “scores” |
| **Not modeled · ACA subsidy** honesty row, because this plan's marketplace phase is not marked as a marketplace plan | Silent omission of known gaps |

Full strip vocabulary (in play / nearby / honest empty):
**[Cliff radar in the Forecaster](/learn/cliff_radar_forecaster)**.

To **see** IRMAA **cash** and statement depth on a path that lights the surcharge: open
**[MAGI cliffs](/learn/magi_cliffs_irmaa_niit)** (sample already on Medicare with higher MAGI).
There, [[nav:cf-table]] / [[nav:cf-chart]] shows **IRMAA (Medicare surcharge)** under healthcare — still not
Taxes — and the same year’s cliff radar should agree when surcharge > 0.

Conversion is not free tax arbitrage, because MAGI cliffs can bite in the conversion years. This
sample teaches the **cause chain** (conversion → ordinary income → MAGI) and the trade it creates.
Cliff radar keeps the **scan** on your path; MAGI cliffs teaches the **cash line** and statement audit.

<aside class="lesson-saying" data-saying="free-lunch">

A conversion moves tax into years you choose, but the converted dollars are income in those years. They raise MAGI, and a cliff the plan crosses can charge more than the tax the conversion was meant to save.

</aside>

---

## Three layers of “why we sold”

You already met forced [[term:rmd]] with the RMD lesson. Conversions add a **policy** lane:

| Layer | Who decides | Example Why / marker |
|-------|-------------|----------------------|
| **Forced / statutory** | RMD rules | **RMD · Traditional IRA** (⚖️ on forced sales) |
| **Conversion policy** | Roth conversion settings | **Roth conversion · Roth IRA** (🔁 on conversion sales / invest) |
| **Residual strategy** | Pro-rata / tax-account order / glide | **Pro-rata residual**, **Tax-account order · taxable**, … |

A single year can show **more than one** layer on the same holding. Do not read every traditional
sale as “living expenses” or “the residual strategy alone.”

---

## Reading guide (audit checklist)

| Check | Pass looks like |
|-------|-----------------|
| Policy on | [[nav:assumptions]] → Movements → Roth conversion enabled with amount + years (see screenshot above) |
| Chip view | [[nav:cf-table]] + [[nav:si-table]] (and optional [[nav:si-chart]]) so conversion lines are visible |
| CF marker | Conversion traditional sale carries **🔁** (and the tax icon) — distinct from residual of the same name |
| Movements Why | **Roth conversion** on traditional sell **and** Roth invest; residual Why (if any) is separate |
| Toggle foil | With policy **off**, conversion sales/invest and Why lines disappear |
| Tax | Conversion year ordinary / traditional retirement includes conversion, landing at the top of the 12% bracket |
| MAGI | Conversion year MAGI higher than the no-conversion what-if |
| Does it pay | Simulator taxes paid lower with the policy on than with it off; success and median net worth about the same |
| Cliff radar | [[nav:forecaster]] cliff radar notes conversion this year; no invented IRMAA surcharge |
| IRMAA (later) | A surcharge in 2032–2034 from conversion-year MAGI; less IRMAA over the whole plan than with the policy off |

---

## What we deliberately do **not** claim

- A multi-year **optimal** conversion schedule (dynamic program / “max wealth” solver)
- Full **Roth 5-year** seasoning / ordering rules for every distribution type
- Paying conversion tax **from** the converted dollars vs from taxable cash as separate strategies
  (tax still lands on the ordinary bill; funding is via the usual tax/cash path)
- The **[[term:aca]]** subsidy response when MAGI moves in a marketplace year. Tutilis prices the [[term:premium-tax-credit]] for a phase marked as a marketplace plan, but this plan's phase is deliberately left unmarked, so its conversion years show the warning only.
- That fill-to-bracket is a closed-form fixed point with every cliff re-solved

Those are honesty boundaries, not missing polish for this lesson.

---

## Try next

| Lesson | Why go there |
|--------|----------------|
| [Filling the cheap buckets](/learn/filling_the_cheap_buckets) | See the bracket being filled — forced RMDs vs chosen conversion competing for one bucket |
| [Cliff radar in the Forecaster](/learn/cliff_radar_forecaster) | Year-reactive strip: cliffs in play / nearby / not modeled |
| [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) | IRMAA lookback, NIIT, MAGI audit rows in depth |
| [Forced traditional RMD vs residual tax order](/learn/banks_forced_rmd) | Another “Why” layer that is not residual strategy |
| [Social Security treatment](/learn/social_security_treatment) | Ordinary income and AGI ingredients that share the bracket with conversions |
| [Getting around the app](/learn/getting_around) | Forecaster chips and Assumptions map |

When you change conversion aggressiveness, re-read **success**, **taxes paid**, and **terminal**
direction together — one lever, many surfaces.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
