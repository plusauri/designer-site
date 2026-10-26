<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/sheltering_money.md
tutilis-locale: en source
-->
# Sheltering money — taxable, traditional, and Roth

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.account_character.sheltering
  outline-path: Taxes, benefits, and retirement systems › Tax character of accounts › Sheltering money
  document-id: sheltering_money
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Ported from public dossiers/sheltering_money.md — teaching body unchanged.
  port-source: dossiers/sheltering_money.md
-->

<!--- α <lesson_body> -->
Where you **hold** investments can matter as much as **what** you hold. The same stock market
return behaves differently in a taxable [[term:brokerage]], a traditional [[term:401k]], a [[term:roth]] 401(k)<!-- term-skip: traditional — five pills in one sentence is the cap -->, and a Roth
[[term:ira]] — for taxes today, taxes in retirement, required distributions, and how freely you can reach
the money.

This lesson names those four **account types**, compares the rules that actually differ, and points
at the live **Banks** household so you can see each type on a real balance sheet. It is
**content-first**: the forecast will not invent IRS forms for you, but the product **does** tax each
account type according to its **[[term:tax-bucket]]**, force traditional RMDs when age and balance require
them, and treat Roth withdrawals as federally [[term:tax-free]] retirement income.

| Account (this plan) | Tax bucket icon | Role in one line |
|---------------------|------------------|------------------|
| **Brokerage** | 🧾 Taxable | After-tax dollars; cost basis; gains taxed when sold |
| **Traditional 401(k)** | 🛡️ Tax-deferred | Pre-tax in; ordinary income out; **RMD** later |
| **Roth 401(k)** | 💎 Taxes already paid | After-tax in (usually); qualified growth tax-free |
| **Roth IRA** | 💎 Taxes already paid | Same Roth tax story; different contribution / access rules |

The live plan on the right is **Banks Baseline** (`banks_baseline`) — Philip and Vivian with all
four accounts (plus **Cash** and a paid-off home). Cast continuity with other Banks lessons; wealth
scale is [[term:hnw]], but the **tax mechanics** are the same ones a mass-affluent plan uses.

> **About numbers:** Amounts on the live plan (and any dollars mentioned here) should look
> **similar** to what you see when you open this sample, but they may **not match exactly**.
> Forecast detail, model updates, and fixes can move figures. Watch the **story** — tax buckets,
> labels, and order of magnitude — not every total to the dollar.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How is money taxed going in, while it grows, and coming out of each tax bucket?** See
   [Three buckets, four accounts](#three-buckets-four-accounts).
2. **How do a brokerage, a traditional 401(k), a Roth 401(k), and a Roth IRA differ?** See
   [The four accounts side by side](#the-four-accounts-side-by-side).
3. **What is a required minimum distribution, when does it start, and which accounts have one?**
   See [Regulations that matter](#regulations-that-matter).
4. **What happens if I take money out of a traditional account before 59½?** See
   [Regulations that matter](#regulations-that-matter).
5. **How much can I put into each account this year?** See
   [Regulations that matter](#regulations-that-matter).
6. **What is a Roth conversion, and when is it worth a look?** See
   [Roth conversion, briefly](#roth-conversion-briefly).

</div>
</aside>

---

## The question

Looking at a household with **taxable**, **traditional**, and **Roth** accounts, can I:

1. Name how **contributions**, **growth**, and **withdrawals** are taxed in each **tax bucket**
   (and in each of these four account types)?
2. Point to the **four named accounts** on [[nav:birds-eye]] / [[nav:bs-table]] and read their tax-bucket icons?
3. Explain **required minimum distributions (RMDs)** — who they apply to, when they start, and how
   the amount is roughly determined — without confusing them with residual “spend this first”
   strategy?
4. Leave **[[term:roth-conversion]]** as a deliberate, brief next step rather than a full policy lesson?

---

## Three buckets, four accounts

Think in **buckets** first, then in product names:

| Bucket | Product idea | Contribution (typical) | Growth while held | Withdrawal (qualified / ordinary path) |
|--------|--------------|------------------------|-------------------|----------------------------------------|
| **Taxable** | Brokerage (and similar) | After-tax cash | Dividends / interest may be taxed as they occur; unrealized gains wait | **Capital gain** on (sale price − basis), not the whole balance |
| **Tax-deferred (traditional)** | Traditional 401(k), traditional IRA, … | Often **pre-tax** (or deductible) | Not taxed inside the account | **Ordinary income** on the amount distributed |
| **Taxes paid (Roth)** | Roth 401(k), Roth IRA, … | **After-tax** | Not taxed inside the account | **Federally tax-free** when rules for a qualified distribution are met |

**Cash / demand** accounts in this product sit with the taxable bucket for tax treatment: no
retirement shelter, no [[term:rmd]] engine.

On Banks you see **both** a **Roth 401(k)** and a **Roth IRA**. Same **Roth tax story** in the
forecast (taxes-paid growth and tax-free retirement character). Different **real-world plumbing**:
employer payroll vs individual IRA, contribution ceilings, and income limits for **direct** Roth
IRA contributions. The plan does not auto-enforce every IRS contribution cap — it **does** apply
the tax bucket when money is sold or withdrawn.

College **529** plans are another taxes-paid-style vehicle aimed at education (and, in some cases,
limited later paths into retirement accounts). That story is separate from these four account types.

---

## The four accounts side by side

The table below is the **main comparison** for the lesson — return here when you need the differences in one
place. Annual contribution ceilings change with [[term:inflation]] and legislation — the rows describe
**how the limits work**, not a frozen calendar-year dollar amount.

| Axis | **🧾 Brokerage** (taxable) | **🛡️ Traditional 401(k)** | **💎 Roth 401(k)** | **💎 Roth IRA** |
|------|----------------------------|---------------------------|--------------------|-----------------|
| **Who offers it** | Brokerage / custodian | Employer plan | Employer plan (if offered) | Individual IRA at a custodian |
| **Money going in** | After-tax | Usually pre-tax elective deferrals (+ possible employer money) | Usually after-tax elective deferrals; match often lands traditional (plan-dependent) | After-tax; **direct** Roth IRA contributions can phase out at higher MAGI |
| **Annual ceiling** | None special (you can deposit what you have) | Shared **employee elective deferral** ceiling with Roth 401(k) under the same plan family; catch-up ages exist | Same employee-deferral family as traditional 401(k) | Lower **IRA** annual limit (traditional + Roth IRA share a limit); separate from 401(k) deferrals |
| **Growth in the account** | Taxable events possible (dividends, interest, realized gains) | Sheltered | Sheltered | Sheltered |
| **Selling / withdrawing** | Cap gains on gain above **cost basis** | Ordinary **traditional retirement** income | Roth retirement (federally tax-free when qualified) | Same Roth story |
| **RMD (original owner)** | No | **Yes** after RMD start age (**72 / 73 / 75** by birth year under SECURE 2.0 — see table below) | **No** lifetime RMD under current SECURE 2.0 rules for employer Roth | **No** lifetime RMD for the original owner |
| **Early access friction** | High flexibility (taxes still apply) | Plan rules + possible **10%** additional tax before 59½ on many traditional distributions | Plan rules; Roth *contributions* vs *earnings* rules differ | More portable; still contribution vs earnings and 5-year / age tests for fully tax-free earnings |

**Where the icons appear:** [[nav:birds-eye]] and balance-sheet tables decorate account names with 🧾 / 🛡️ /
💎 so the bucket is readable at a glance. Same vocabulary as the
[Financial plan glossary](/learn/financial_plan_glossary) / [Tutilis glossary](/learn/tutilis_glossary).

[[jump:tax-bucket-glyphs]]

---

## Regulations that matter

Three sets of rules separate these accounts in practice: required minimum distributions, early
withdrawals, and contribution eligibility.

### Required minimum distributions (RMDs)

**What they are.** Once you reach RMD age and hold a **traditional** ([[term:tax-deferred]]) retirement
balance, the IRS expects you to take a **minimum** distribution each year — whether or not you need
the cash for living expenses. The money is generally **[[term:ordinary-income]]**. Missing an RMD can
trigger a large **excise tax** on the shortfall (this product models a default penalty rate; reduced
“timely correction” rates are not the focus here).

**When they start ([[term:secure|SECURE]] 2.0, by birth year — the engine’s approximation):**

<table class="lesson-table-aside">
<thead>
<tr><th>Birth year</th><th>RMD start age (approx.)</th></tr>
</thead>
<tbody>
<tr><td>1950 or earlier</td><td>72</td></tr>
<tr><td>1951–1959</td><td>73</td></tr>
<tr><td>1960 or later</td><td>75</td></tr>
</tbody>
</table>

Philip and Vivian on **Banks Baseline** are still mid-career in the plan year — they are **not** in
RMD years yet. The large traditional account is still the **future** RMD story. To see forced RMD
**sales** every year with reason codes, open the dedicated sample:
[Forced traditional RMD vs residual tax order](/learn/banks_forced_rmd) (Philip aged past RMD start,
large traditional IRA, residual still set to prefer taxable cash).

**How the amount is determined.** For a calendar year, a common rule of thumb is:

> **prior year-end balance ÷ life-expectancy divisor** (Uniform Lifetime Table for many owners)

The divisor falls with age, so the required fraction of the account grows. When the force is
active, this product shows the required amount each year on the **Brackets** chart and Money Movements
**Why** lines such as **RMD · Traditional …**.

**Which of these four account types?**

<table class="lesson-table-aside">
<thead>
<tr><th>Account</th><th>Original-owner RMD?</th></tr>
</thead>
<tbody>
<tr><td>🧾 Brokerage</td><td>No</td></tr>
<tr><td>🛡️ Traditional 401(k)</td><td><strong>Yes</strong></td></tr>
<tr><td>💎 Roth 401(k)</td><td><strong>No</strong> (current law / product model)</td></tr>
<tr><td>💎 Roth IRA</td><td>No</td></tr>
</tbody>
</table>

Inherited accounts and spouse rules are out of scope here.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Until 2024, a Roth 401(k) came with required minimum distributions even though a Roth IRA never
did. SECURE 2.0 removed them starting in 2024, so the two Roth accounts now follow the same rule for
the original owner.

</div>
</aside>

### Early withdrawals (brief)

Before **59½**, many **traditional** retirement **spending** distributions can face a base
**10%** additional tax on top of ordinary income (exceptions exist; the product models the base
case). A **Roth conversion** is treated as a **transfer**, not spending — see the conversion
lesson. Taxable brokerage sales are not “early withdrawal penalties”; they are capital-gains
events.

### Contribution and eligibility (what to remember)

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — the 2026 contribution limits</summary>
<div class="lesson-reference-body">

<table>
<thead>
<tr><th>2026 IRS reference</th><th>Amount</th></tr>
</thead>
<tbody>
<tr><td>401(k) / Roth 401(k) elective deferral</td><td>$24,500</td></tr>
<tr><td>Catch-up (age 50+)</td><td>$8,000</td></tr>
<tr><td>Higher catch-up (ages 60–63)</td><td>$11,250</td></tr>
<tr><td>Traditional + Roth IRA (combined)</td><td>$7,500</td></tr>
<tr><td>IRA catch-up (age 50+)</td><td>$1,100</td></tr>
</tbody>
</table>

</div>
</details>

- **401(k) traditional vs Roth 401(k):** same plan family, different **tax timing** of the employee
  elective deferral. One shared employee ceiling (plus [[term:catch-up]] when eligible). Employer match
  rules are plan-specific.
- **Roth IRA:** income phaseouts can block **direct** contributions even when a Roth 401(k) is still
  available through work. “Backdoor” and conversion strategies are advanced topics.
- **Caps change.** The reference table above is calendar **2026** IRS figures only — confirm the current
  notice or plan documents when you contribute.
- **In the app:** set account **types** so the **tax bucket** is right; contribution **flows** are
  modeled where you author them.

---

## Roth conversion, briefly

A **Roth conversion** moves balance from **traditional** → **Roth**. You pay ordinary income tax on
the converted amount **now** so [[term:qualified]] later growth and withdrawals can be tax-free — and so you
may reduce future **traditional RMDs**.

That trade is most interesting in **lower-income years** (often after paychecks stop and before
RMDs force large traditional withdrawals). Planners call that span the **conversion window**.

This lesson does **not** walk conversion policy, Money Movements **Why: Roth conversion**, or [[term:magi]] /
[[term:irmaa]] traps year by year. Use:

| Next step | Lesson |
|-----------|--------|
| How the plan **states and executes** a conversion | [Roth conversion in the window](/learn/roth_conversion_window) |
| MAGI, IRMAA, NIIT when income is high | [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) |
| When conversion year choice hurts (later full lesson) | Coming separately — not required for this comparison |

---

## Where to look

Open **Banks Baseline** on the right and read it in two passes, definitional views first and
projected views second.

### Definitional

1. [[nav:birds-eye]] → People — Philip and Vivian; retirement ages still in the future relative to
   RMD start for their birth years.
2. [[nav:birds-eye]] → Assets (Account mode) — find **Brokerage**, **Traditional 401(k)**,
   **Roth 401(k)**, **Roth IRA**, and **Cash**. Read the tax-bucket emoji before each name.
3. **Account editor (optional)** — open an account’s type help for the plan-family comparison table
   (401(k), 403(b), IRA, …). That popover is the in-app reference twin of this lesson’s tables.
4. **Bel-Air Tech** on Brokerage is a **concentration** story for other Banks lessons — ignore it
   for tax-bucket mechanics.

[[jump:birds-eye]]

### Projected

Select [[nav:bs-chart]], [[nav:bs-table]], and optionally [[nav:taxes]] / [[nav:si-table]]. Prefer **[[term:fid-gmf|FID 0 / GMF]]**.

[[jump:balance-sheet]]

| Preview | View | Role here |
|---------|------|-----------|
| [[img:banks-bs-table|preview]] | [[nav:bs-table]] | Spot each account and tax-bucket totals in a selected year. |
| [[img:banks-bs-chart|preview]] | [[nav:bs-chart]] | Multi-bucket wealth over the horizon (home + accounts). |
| [[img:banks-si-table|preview]] | [[nav:si-table]] | Later drawdown years: residual reasons by account / tax bucket — **not** RMD force yet on this baseline. |
| [[img:sheltering-money-tax-statement|preview]] | [[nav:taxes]] | Federal / state / property statement. Mid-horizon work year is high **earned income**; later traditional distributions show as ordinary-income character — qualified Roth does not. |

You will **not** see annual **RMD · …** forced sales on this mid-career baseline. That is intentional.
Switch to [Forced traditional RMD](/learn/banks_forced_rmd) when the question is “does residual
strategy override the statute?”

Chart controls: [Close up / zoom / Reveal](/learn/getting_around#chart-chrome).

---

## Try this

1. On [[nav:birds-eye]], list the four accounts and say out loud: **when taxed in**, **when taxed out**.
2. Open [[nav:bs-table]] and confirm **Traditional 401(k)** is the large tax-deferred account that will
   drive future RMDs.
3. Contrast **Roth 401(k)** vs **Roth IRA** as two taxes-paid accounts with different real-world
   contribution rules — same forecast tax treatment.
4. Open [Forced traditional RMD](/learn/banks_forced_rmd) and find **RMD · …** on Money Movements — then
   return here for the definitional map.
5. Optional: [Roth conversion in the window](/learn/roth_conversion_window) if you want the policy
   → tax → MAGI path next.

The teaching claim is that **tax location** changes the **character** of withdrawals and
**whether** RMDs apply — not any particular balance on the Banks sample.

---

## Where to go next

| Topic | Lesson |
|-------|--------|
| Forced RMD vs residual tax-account order | [Forced traditional RMD](/learn/banks_forced_rmd) |
| Conversion policy and Money Movements Why | [Roth conversion in the window](/learn/roth_conversion_window) |
| Which tax bucket to spend first | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| MAGI cliffs (IRMAA, NIIT, …) | [MAGI cliffs](/learn/magi_cliffs_irmaa_niit) |
| Banks HNW orientation / concentration | [Meet the Banks household](/learn/banks_baseline) |
| Term lookup | [Financial plan glossary](/learn/financial_plan_glossary) · [Tutilis glossary](/learn/tutilis_glossary) |

---

*Not tax, legal, or investment advice. Contribution limits, RMD ages, and plan documents change;
verify current rules for real decisions. Educational framing matches the Learning Center
disclaimer on every lesson.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
