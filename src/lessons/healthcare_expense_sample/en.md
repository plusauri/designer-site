<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/healthcare_expense_sample.md
tutilis-locale: en source
-->
# Healthcare expense phases (employer → Medicare)

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.cash_flow.healthcare_phases
  outline-path: Household planning › Cash flow and lifestyle › Healthcare expense phases
  document-id: healthcare_expense_sample
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Ported from public dossiers/healthcare_expense_sample.md — teaching body unchanged.
  port-source: dossiers/healthcare_expense_sample.md
-->

<!--- α <lesson_body> -->
**Healthcare** in a US plan is usually **not one number for life**. Costs change when employer
coverage ends, when marketplace or private coverage fills a pre-Medicare gap, and when **Medicare**
starts around age **65**. This lesson shows that handoff as **phases** on a medical cash-flow
template so the forecast does not pretend medical spend is free until someone notices.

This lesson uses the same household as [Meet the Springfield household](/learn/springfield_baseline),
Homer and Marge, and the plan already carries a few medical lines: one **family health plan** that
covers both of them, and a **Medicare** line for each. The amounts are **planning placeholders**
rather than quotes.

A couple crosses 65 **twice**, so the handoff is a chain of three phases across three templates
rather than one step:

| Phase | Years on Springfield | Template · label |
|-------|----------------------|------------------|
| Family policy, both covered | Plan start → **2041** (Homer 65) | **Family health plan** · Employer / private, family |
| Self-only policy for Marge | **2041** → **2043** (Marge 65) | **Family health plan** · Employer / private, self-only (Marge) |
| Medicare, per person | From each owner's own 65 | **Homer Medicare**, **Marge Medicare** · Medicare |

The boundaries are each owner's **Medicare year**, picked by name in the phase's active years
rather than typed — correct a birth year and the handoff moves with it.

If the left/right layout feels unfamiliar, skim
 MAGI-driven **[[term:premium]] cliffs** after 65:
[MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit).

The live plan on the right is **Springfield [[term:hsa]]** — the family baseline plus a **health savings
account** that pays those medical phases. Shaping the expense is half the story; the other half is
what pays for it.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How do I model medical costs that change when employer coverage ends and Medicare starts?**
   See [Where to look](#where-to-look).
2. **Why does a couple cross 65 twice, and why is each policy its own line in the plan?** See
   [Where to look](#where-to-look).
3. **What happens to healthcare costs if I retire before 65, reach Medicare, or still have a high
   income?** See [Where to look](#where-to-look).
4. **Does the product warn me when someone has no coverage for part of the plan?** See
   [Where to look](#where-to-look).
5. **How does an HSA pay for these medical phases, and why do its contributions stop at 65?** See
   [Paying for it](#paying-for-it-the-hsa).
6. **How far into the Medicare years does the HSA actually carry?** See
   [Paying for it](#paying-for-it-the-hsa).
7. **Which HSA tax advantage does the forecast leave out?** See
   [Paying for it](#paying-for-it-the-hsa).

</div>
</aside>

---

## Where to look

### Definitional — [[nav:birds-eye]] with **Cash Flow** selected

1. Stay on [[nav:dossier]] ([[nav:birds-eye]] at the top), or open [[nav:birds-eye]] from the tool rail.
2. Select **Cash Flow**.
3. Look for **four** 🩺 Medical outflows (not one). **[[term:hover|Hover]]** for phase attributes and a sparkline of
   when each stream runs.

**Three medical templates → four outflow line items.** A phased healthcare *generator* expands to
one cash-flow outflow **per phase**, and Springfield carries three of them:

- 🩺 Family health plan (Employer / private, family) — both owners, to Homer's Medicare year
- 🩺 Family health plan (Employer / private, self-only (Marge)) — the two years between the
  couple's 65ths
- 🩺 Homer Medicare (Medicare) — from 2041
- 🩺 Marge Medicare (Medicare) — from 2043

They sort independently by [[term:present-value]] with other outflows (largest first within outflows) —
which is why the two Medicare lines sit high and the two-year self-only phase sits last.

[[img:healthcare-birds-eye-cash-flow-medical]]

*[[nav:birds-eye]] → **Cash Flow**. Three healthcare templates expand into **four** 🩺 outflow rows — the family policy's two phases and a Medicare line per owner — plus other outflows. Present values are multi-year sums (or your selected amount mode), sorted largest first within outflows.*

[[jump:premium|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.health-care]]

### What changes at each milestone

The three templates are not a modeling flourish. They are the three policies a US couple actually
buys between mid-career and old age, and each one starts and stops on a different trigger.

- **While someone is still employed**, the household is usually on one **family plan** with one
  premium. The number you see on a pay stub is the employee share; the employer pays the rest, and
  that subsidy is the first thing that disappears at retirement.
- **Retiring before 65 opens a gap.** COBRA continues the employer plan for up to 18 months, at the
  *full* premium rather than the employee share. After that, the choices are a spouse's plan or the
  [[term:aca]] marketplace, where the premium depends on age and on income. For a couple who retires
  early these are typically the most expensive healthcare years of their lives per person, and they
  are the years a plan most often leaves out, because the family plan "just continued" in the
  planner's head.
- **Medicare starts at 65, per person, not per household.** Part B and Part D carry monthly
  premiums, a Medigap or Medicare Advantage policy sits on top, and all of it is enrolled and billed
  under one person's name. A couple therefore crosses 65 **twice**: one spouse moves to Medicare
  while the other stays on whatever covered them before, then the second follows. Springfield's
  version is Homer in 2041 and Marge in 2043, with Marge on a self-only tail of the family plan in
  between.
- **Income raises the Medicare bill.** The [IRMAA](/learn/magi_cliffs_irmaa_niit) surcharge is set
  from [[term:magi]] two years back and charged **per enrollee**, so a spouse who is still working when
  the other enrolls can push the retiree's premium up for the first Medicare years. The surcharge
  fades on its own once the lookback sees retirement income.
- **Medical costs grow faster than general prices.** Premiums, deductibles and drug costs have
  outrun headline [[term:inflation]] for decades, which is why each phase carries its own growth rate
  rather than the plan-wide one. Commonly cited estimates for what a 65-year-old will spend on
  healthcare over retirement run into the low hundreds of thousands of dollars per person, before
  [[term:ltc|long-term care]].

**Model one policy as one line**, because that is how the bills arrive and how they end. A family
plan is one premium covering two people, so it is one line that names both. Medicare is one
premium per person, so it is one line per spouse with that spouse's own start year. You could
squash the whole household into a single four-phase chain and the forecast would charge the same
money, but "what does Homer's Medicare cost" would stop being a number in the plan, and the IRMAA
surcharge would no longer sit beside the premium it surcharges.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

**Where the policies are authored.** Each medical line is a **healthcare template** with a
**Covers** set (the people the policy is for, one name or both), an ordered chain of **phases**
with annual cost, optional growth and **active years**, and a **Funded by** link (the HSA, below).
The active-years dropdown offers each owner's **Medicare** year by name, beside their retirement
and death, so a phase boundary follows a birth year rather than a year someone typed. The US
ballpark help beside the cost field is guidance, not a quote engine.

**The coverage check** reads per covered person across every template covering them: Homer needs
pre-Medicare coverage for any year he is retired before 65 and a Medicare-era phase from 65 on,
and so does Marge. The family plan satisfies the first for both; each Medicare line satisfies the
second for one. Delete "Marge Medicare" and only Marge's line lights up, which is the reason to
keep one template per policy: a merged four-phase chain says "both covered" for every phase, so
the check can no longer tell whose coverage is missing.

</div>
</details>

### Projected — [[nav:forecaster]]

Turn on [[nav:cf-chart]] / [[nav:cf-table]]. Healthcare should appear as **health** outflows in years the phases
are active. Prefer **[[term:fid-gmf|FID 0 / GMF]]**.

| View | Role here |
|------|-----------|
| [[nav:cf-chart]] | Medical spend steps when phases hand off (e.g. at 65). |
| [[nav:cf-table]] | Selected year: health expense line. |
| [[nav:taxes]] | Not the home of IRMAA — that is a **healthcare surcharge** on cash flow when modeled (see MAGI lesson). |

[[img:healthcare-cf-medicare-age-65]]

*The Medicare hand-off year — **2041, Homer 65** — with the hover tip splitting the outflow into its
parts. **Health & medical** is its own line, separate from **Living & general** and from
**Taxes**, which is the point: healthcare is a modeled expense category, not a tax and not a lump in
general spending. Scrub the year across 65 and the amount **steps** as one phase hands off to the
next, while the category stays put.*

*One more row hides inside that **Health & medical** figure: an [[term:irmaa|IRMAA surcharge]]<!-- term-skip: surcharge — one pill for the phrase -->. Open [[nav:cf-table]] for
2041 and it sits beside Homer's Medicare premium as its own line. It is there because Medicare
looks back two years for [[term:magi]], and two years before 2041 this household still had two salaries.
The surcharge runs until two years after Marge's last paycheck, then drops away on its own — a
fact about this plan's income, not a constant of Medicare. See
[MAGI cliffs](/learn/magi_cliffs_irmaa_niit).*

---

## Paying for it: the HSA

Phases say **how much** medical costs and **when**. They say nothing about **where the money comes
from** — and for healthcare there is an account built for precisely this expense.

**On the [[term:canvas]]:** [[nav:birds-eye]] → **Assets & liabilities** with **Cash Flow** on. The **Health
Savings Account** sits on the Assets side; hover any **medical** row — the family policy or either
Medicare line, since all three templates draw on it — and its tip carries a **Funded by** section
naming that account. That link is why medical spend draws the HSA first and pools whatever it cannot
cover with every other obligation.

[[jump:hsa]]

[[img:healthcare-hsa-medical-funded-by]]

*The family health plan's card. Its first phase is the family policy, which runs until Homer's Medicare year. Its second phase is Marge's self-only coverage, which bridges the two years until her own Medicare starts. The **Funded by** section at the bottom points both phases at the **Health Savings Account**. Two separate facts, "medical costs this" and "we hold an HSA," become one story the forecast acts on.*

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

**Where the account and the link are authored.** On the desktop app: **Assets → Health Savings
Account** for the balance and the **\$8,000/yr** contribution, near the family limit; and the
**Family health plan** template's **Funded by** control for the link itself (and its **Covers**
row, naming Homer and Marge). The live plan beside this lesson
is read-only for structure, so both are described here rather than practised — everything above and
below reads on the canvas.

</div>
</details>

### What an HSA is, in the real world

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

A health savings account is the only account in the US tax code with a **triple** tax advantage.
Contributions go in before tax, growth is never taxed along the way, and withdrawals for qualified
medical costs come out tax free. A [[term:401k]] gets the first two and taxes the third, and a
[[term:roth]] gets the last two and taxes the first.

</div>
</aside>

The three legs, side by side:

| Leg | Real-world treatment |
|-----|----------------------|
| **Going in** | Contributions are deductible (or pre-tax via payroll) |
| **While invested** | Growth is not taxed year to year |
| **Coming out** | Withdrawals for **qualified medical** are tax free |


### Contributions stop at 65 — and that is not a modeling shortcut

Open the contribution and look at **Active years**: it ends in **2041**, the year Homer turns 65.
**HSA eligibility ends when Medicare enrolment begins** — you may spend an HSA for the rest of your
life, but you may not put money in once you are on Medicare.

That real rule lands on the very year this lesson's employer → Medicare handoff already turns on.
The same birthday that changes what medical costs also closes the account that was funding it.

[[img:healthcare-hsa-contribution-transfer-hover]]

*[[nav:birds-eye]] → **Transfers**, hovering the HSA contribution. **Direction: Transfer** — money
moving between the household's own accounts, so it sits outside Assets and Liabilities. The window
runs to **2041** and the last year money actually goes in is **2040**: the year range is half-open,
so the end year is the first year the contribution no longer runs.*

### How far does it carry?

Because the account is funded during working years and drawn on for life, its balance has a shape
worth reading. Scrub the [[nav:forecaster]] year and watch the HSA **rise, turn, and empty**:

| Watch for | What is happening |
|---|---|
| **Rising** | The \$8k contribution outruns current medical spend |
| **The turn** | Medical inflation overtakes the contribution — before Homer reaches 65 |
| **Contributions stop** | The Medicare year: the account can no longer be fed, only drawn on |
| **Empty** | Ordinary assets take the medical expense back |

The years those happen in depend on which forecast path you are viewing — scrub to find them rather
than taking a date from this page. On the default **GMF** path the account is spent in the
**mid-2040s**, so it carries the first handful of Medicare years and no more.

That is the useful planning answer, and it is not a tax number: **how many years of a known, dated,
lifelong expense does this account absorb before the rest of the plan has to?**

> **Reading the numbers.** Balances on the canvas move with the display settings — today's-dollars
> vs nominal — and with the forecast path selected. Watch the **shape** (rise, turn, empty) and read
> your own dates off the plan; a figure quoted in prose would be wrong for half the views you can
> put the canvas in.

### What the forecast does **not** give the HSA

Be careful reading a benefit into the net-worth line here. This product models an HSA as a
**[[term:tax-deferred]]** account — the same treatment a [[term:traditional]] 401(k) gets. Growth is not taxed year to
year, but the third leg, **[[term:tax-free]] withdrawal for [[term:qualified]] medical**, is **not modeled**, and no
[[term:deduction]] is modeled going in either.

So the plan is **conservative** about an HSA: a real one is worth more than this forecast shows. Use
this canvas for the *mechanics* — the contribution, the 65 cut-off, the funding link, the years
covered — and treat the tax advantage as a real-world reason to prefer the account, not as something
you can read off the chart.

That is also why the balance above is the honest headline rather than a net-worth comparison: what
the account demonstrably does here is **absorb an expense**, and absorbing an expense is worth
knowing about on its own.

---

## Try this

### A. Read the default handoff (this plan)

1. On the right, open [[nav:path:birds-eye|cash-flow]] (or inspect cash flows on the canvas).
2. Find the **four** Medical lines — the **Family health plan**'s two phases and **Homer Medicare**
   / **Marge Medicare** — not a single combined Medical row. The family phase ends at Homer's
   **65** (2041); the self-only phase runs to Marge's (2043); each Medicare line starts at its
   owner's.
3. Scrub Forecaster **Year** across **2041** and again across **2043** — outflow character should
   still be healthcare, with a step in **amount** at each handoff.

### A2. Read the account that pays for it

4. [[nav:dossier]] → Assets → **Health Savings Account** — note the **Contributions** row
   (\$8,000/yr) and its **Active years** ending **2041**, the year Homer turns 65 and HSA
   eligibility ends.
5. Open the **Medical** template and find **Funded by** → the HSA holding. That link is why medical
   draws this account before anything else.
6. [[nav:birds-eye]] → Assets & liabilities with **Cash Flow** — open **Transfers**. The HSA
   contribution is there, in neither Assets nor Liabilities: putting money into your own account is
   not a cost, it is a change of pocket.
7. [[nav:forecaster]] — scrub forward and find two years for yourself: where the HSA balance **turns
   over**, and where it is **spent**. The gap between the Medicare year and that second date is how
   many Medicare years this account absorbed.

### B. See the coverage check catch a gap

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

1. Open **Springfield Baseline** (or any plan with early retirement).
2. Delete the **Family health plan** template, leaving only the two Medicare lines, with
   retirement age **&lt; 65** on a person.
3. Expect an inline warning on each Medicare template: that owner's pre-65 years have **no**
   marketplace / employer / private phase — coverage would look **free** until 65. The check reads
   every template covering a person, so a family plan that stops at 65 and a Medicare line that
   starts there satisfy it together.
4. Add a pre-Medicare template (a new healthcare entry seeds US defaults ending at the primary's
   Medicare year; set **Covers** to both owners) — the warning should clear.
5. Symmetric check: delete an owner's **Medicare** template while their death age **&gt; 65** —
   warning that the plan runs past 65 without a Medicare-era boundary for that person.

</div>
</details>

### C. Related cliffs (not this lesson’s focus)

IRMAA, [[term:niit]], and [[term:aca]] **warnings** are about income thresholds and premiums — see
[MAGI cliffs](/learn/magi_cliffs_irmaa_niit). This lesson only checks that **coverage phases** are
present for the ages you model, not premium math.

---

## What this is *not*

| Not this lesson | Where that lives |
|-----------------|------------------|
| IRMAA Part B/D steps from lookback MAGI | [MAGI cliffs](/learn/magi_cliffs_irmaa_niit) |
| ACA premium tax credit **dollars** | Not modeled — honesty warning only when marketplace-shaped HC is active |
| LTC custodial care | Long-term care on the family plan / LTC generators |
| The HSA's tax-free **withdrawal** for qualified medical | Not modeled — the engine treats an HSA as tax-deferred, so the plan **understates** a real HSA |
| SS benefit taxation | [Social Security treatment](/learn/social_security_treatment) |

---

## Why this matters

| If you only… | You can miss… |
|--------------|---------------|
| Enter one flat medical number forever | Pre-65 private / marketplace costs vanish from the plan |
| Retire at 58 with only a Medicare phase | Years 58–64 look **underfunded** for real coverage |
| Skip Medicare after 65 | Post-65 medical spend understated while IRMAA samples still look fine |
| Model medical without saying what pays it | How many years an HSA actually absorbs — and the year it runs out |

Phases are the cheap honesty layer; MAGI cliffs are the next layer once the person is on Medicare.

---

## Where to go next

| Lesson | Why |
|--------|-----|
| [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) | Premium steps and surtaxes on high MAGI |
| [Social Security treatment](/learn/social_security_treatment) | FICA vs benefit inclusion; statement paste warning |
| [Forced traditional RMD](/learn/banks_forced_rmd) | Forced sales, and the required RMD path on the Brackets chart |
| [Meet the Springfield household](/learn/springfield_baseline) | Full household plan (living, SS, medical, LTC) |
| [Getting around the app](/learn/getting_around) | Forecaster chips and CF surfaces |

---

*Illustrative phase shape. Prefer “handoff at 65 is modeled” and “gaps get a warning” over any
placeholder dollar amount.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
