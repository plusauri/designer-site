<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/roth_conversion_window_deprecated.md
tutilis-locale: en source
-->
# Roth conversion in the window

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.roth.window
  outline-path: Taxes, benefits, and retirement systems › Roth and conversions › Roth conversion in the window
  document-id: roth_conversion_window_deprecated
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Deprecated
  host-hint: Dossier
  intent: Frozen copy of roth_conversion_window as reviewed on 2026-10-03, kept for side-by-side comparison with the rebuilt lesson. Do not edit; delete with LessonDeprecation before public release.
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

The live plan on the right is **Roth Conversion Window (deprecated)** (`roth_conversion_sample_deprecated`): early-retired
**Alex**, large traditional [[term:ira]], existing Roth, modest living spend, and a **fixed annual**
conversion policy already on the plan.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **What does a Roth conversion do to my accounts, and why is it not money I can spend?** See
   [What conversion is](#what-conversion-is-and-is-not).
2. **Why does converting before 59½ avoid the 10% early-withdrawal penalty?** See
   [What conversion is](#what-conversion-is-and-is-not).
3. **Where do I set how much to convert and in which years?** See
   [Policy first](#policy-first-then-the-year-loop).
4. **How do I tell a conversion apart from sales that fund living spend on Movements?** See
   [Policy first](#policy-first-then-the-year-loop).
5. **How does a conversion show up on the federal tax statement, in [[term:agi]], and in MAGI?** See
   [Policy first](#policy-first-then-the-year-loop).
6. **How can this year's conversion raise [[term:irmaa]] premiums two years later?** See
   [Policy first](#policy-first-then-the-year-loop).
7. **When one traditional sale has several reasons, how do I tell them apart?** See
   [Three layers of why we sold](#three-layers-of-why-we-sold).

</div>
</aside>

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
3. On this sample the policy is **on**: fixed **$50,000** per year for a half-open year range
   (e.g. active from **2026**, until **2036** exclusive).
4. The plan must already include a **Roth** account. If you remove it, conversion amount is
   **zero** and Assumptions shows a warning — the app does **not** invent accounts.

[[img:roth-conversion-assumptions-sell-invest|control]]

*Assumptions → **Movements**. Residual withdrawal strategy (pro-rata / tax-account order /
glide) stays separate. **Roth conversion** is the engine policy: enable, fixed amount or fill
ordinary [[term:bracket]], and active years. This sample uses **$50,000** fixed annual.*

Optional modes on the control:

| Mode | Meaning |
|------|---------|
| **Fixed annual amount** | Convert up to this many dollars each active year (capped by traditional balance) |
| **Fill ordinary bracket** | Convert enough (single-pass estimate) to fill ordinary taxable income up to the top of a chosen federal bracket rate (e.g. 22%) |

Fill-to-bracket is an **estimate** for the year (it does not re-solve every tax [[term:cliff]] feedback in
a loop). Prefer fixed dollars when you want a transparent teaching trail.

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

Run a year inside the active window (e.g. **2027** on [[term:gmf]]). You should see:

| Surface | What to notice |
|---------|----------------|
| [[nav:cf-table]] → Sales | A traditional line tagged with the conversion marker (**🔁** next to the tax icon) for the converted dollars — separate from residual sales of the same holding |
| [[nav:cf-table]] → Investments | Matching dollars into Roth (when the transfer invests the other side of the conversion) |
| [[nav:si-table]] | Traditional **Sold** and Roth **Invested**; hover **Why** for **Roth conversion · …** next to any residual / early-withdrawal segments |
| [[nav:si-chart]] | Disposition over years — conversion years still show the same story as the tables |

[[img:roth-conversion-si-policy-on]]

*Policy **on**, Movements at **2027**. Both the traditional and the Roth holding carry the
conversion marker **🔁**, and an **Invested** column appears carrying the converted dollars into
Roth. Drawn from the plan rather than captured, so these are the plan's own numbers — and the
**Why** column here shows only each row's first reason, because the table draws one line per row.
[[term:hover|Hover]] **Why** in the app for the full stack.*

#### Without conversion (toggle off and re-run)

Turn **Enable Roth conversions** **off** in Assumptions, re-run, and pick the same year.

| Surface | What changes |
|---------|----------------|
| [[nav:cf-table]] | No conversion-sized traditional sale; no matching conversion invest into Roth |
| [[nav:si-table]] | Traditional sold amount falls (only residual / other needs); Roth **Invested** for conversion disappears; Why loses **Roth conversion** lines |
| **Balances** | Traditional stays higher; Roth stays lower than the conversion-on path |

[[img:roth-conversion-si-policy-off]]

*Policy **off**, same surface, same year. No **🔁**; the traditional **Sold** falls by the
conversion; and the **Invested** / **% Invested** columns are gone entirely — with nothing being
invested the table swaps them for **After Sale**. The clearest read is the **After** column across
the two pictures: traditional ends **$50,000 higher** here and Roth **$50,000 lower**. That is
the transfer, arithmetically — money moved between tax buckets, not spent and not deposited.*

*This foil is its own sample (`roth_conversion_off_sample_deprecated`): the conversion plan with the policy
cleared and **nothing else changed**, so the only thing that can differ between the two pictures is
the conversion.*

Turn conversion **back on** before the tax / IRMAA steps.

### 3. Read the tax statement

On a conversion year (policy on):

1. [[nav:path:forecaster|taxes]] (sample / GMF year).
2. Under US federal, find **traditional retirement** (or equivalent ordinary bucket) including the
   converted amount — not only “spending withdrawals.”
3. Confirm **AGI** and **MAGI** moved with that ordinary income. MAGI is the cliff input
   ([MAGI cliffs](/learn/magi_cliffs_irmaa_niit)).

[[img:roth-conversion-tax-statement]]

*Taxes for the same conversion year. **Traditional retirement** appears under **Adjusted gross
income** and again under **Ordinary [[term:taxable-income]]** — the same ordinary bucket, carrying need plus
conversion dollars rather than spending alone. **MAGI** tracks AGI here and is the input for later
cliffs. Look at the last line too: the **early withdrawal penalty** is charged, and its **[[term:basis]] is
the traditional dollars sold less the converted ones** — the engine excluding the conversion, in
the same year, from the same account.*

### 4. Look ahead to IRMAA (and the Cliffs strip)

IRMAA is a **[[term:surcharge|Medicare premium surcharge]]<!-- term-skip: premium — one pill for the phrase -->** driven by **MAGI from two years earlier** — a
**healthcare** cash outflow, not a federal tax-statement line. The honest version is simple: a
conversion that lifts MAGI in year *t* can raise premiums in year *t*+2 **once** someone is on
Medicare (planning anchor: age **65**). Example: convert at **63** → IRMAA risk at **65**.

**On this sample, do not expect to find IRMAA cash on the cash-flow table every year.** Alex turns
65 in **2033** (mid-horizon), but on the GMF path the lookback MAGI that would feed a surcharge may
never sit above the floor while Alex is Medicare age — so the CF line can stay dark even if you
scrub every year. That is a property of *this* calibration (and the plan is already stressed by
then), not proof that IRMAA is “off.”

Still open [[nav:forecaster]] → cliff radar ([[nav:cliffs]] view **on** by default; toggle under **Custom**
if needed) on a conversion year and on a later Medicare-age year:

| What you should see | What you should **not** see |
|---------------------|-----------------------------|
| Note that **Roth conversion** is active in a conversion year (MAGI moves **now**) | An invented IRMAA **surcharge** when cash flow has none |
| On later years with an IRMAA radar row whose lookback year was a conversion year: a **lookback conversion** note (*t* → *t*+2) | Optimum conversion markers or cliff “scores” |
| **Not modeled · ACA subsidy** honesty row on US plans | Silent omission of known gaps |

Full strip vocabulary (in play / nearby / honest empty):
**[Cliff radar in the Forecaster](/learn/cliff_radar_forecaster)**.

To **see** IRMAA **cash** and statement depth on a path that lights the surcharge: open
**[MAGI cliffs](/learn/magi_cliffs_irmaa_niit)** (sample already on Medicare with higher MAGI).
There, [[nav:cf-table]] / [[nav:cf-chart]] shows **IRMAA (Medicare surcharge)** under healthcare — still not
Taxes — and the same year’s cliff radar should agree when surcharge > 0.

Conversion is not free tax arbitrage when MAGI cliffs bite later; this sample teaches the
**cause chain** (conversion → ordinary income → MAGI). Cliff radar keeps the **scan** on your
path; MAGI cliffs teaches the **cash line** and statement audit.

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
| Tax | Conversion year ordinary / traditional retirement includes conversion |
| MAGI | Conversion year MAGI higher than the no-conversion what-if |
| Early penalty | Conversion is **not** the same as early *spending* distributions (Why may still list early-withdrawal on residual trad sales) |
| Cliff radar | [[nav:forecaster]] cliff radar notes conversion this year; no invented IRMAA surcharge |
| IRMAA (later) | Medicare-age year may show IRMAA healthcare surcharge when lookback MAGI is high; radar can flag conversion in lookback |

---

## What we deliberately do **not** claim

- A multi-year **optimal** conversion schedule (dynamic program / “max wealth” solver)
- Full **Roth 5-year** seasoning / ordering rules for every distribution type
- Paying conversion tax **from** the converted dollars vs from taxable cash as separate strategies
  (tax still lands on the ordinary bill; funding is via the usual tax/cash path)
- Full **[[term:aca]]** subsidy response when MAGI moves in a marketplace year (warning only today)
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
