<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/erin_on_wage_cap.md
tutilis-locale: en source
-->
# Erin On The Wage Cap

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.social_security.erin_wage_cap
  outline-path: Taxes, benefits, and retirement systems › Social Security › Erin on the wage cap
  document-id: erin_on_wage_cap
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: Blessed
  host-hint: MultiDossier
  intent: Ported from public dossiers/erin_on_wage_cap.md — teaching body unchanged.
  port-source: dossiers/erin_on_wage_cap.md
-->

<!--- α <lesson_body> -->
A common proposal for funding Social Security is to **remove the payroll wage base**, so that high earners pay [[term:oasdi]] on every dollar they earn. This lesson builds the same **$300,000 single filer** twice, once as a **W-2 employee** and once as **self-employed**. For each one, you read the tax under today's law and then use [[nav:transforms]] to see what changes if the cap is gone.

You can stay on this page the whole time. Switch the live plan with the chips above or with the links below.

| Live plan | Role |
|-----------|------|
| **[W-2 $300k](#canvas-dossier:ss_wage_cap_w2_sample)** (default) | Alex pays only the employee's **6.2%** OASDI. Removing the cap costs about **$7,161** more a year. |
| **[Self-employed $300k](#canvas-dossier:ss_wage_cap_se_sample)** | Alex pays **both** halves of payroll tax, so removing the cap costs more. |

Both plans share this setup:

| Setup | Value |
|-------|-------|
| Tax tables | **2026**. The forecast starts in **2027**, so live figures run a little higher. |
| Filing status | **Single** |
| Person | **Alex** |
| Earned income | **$300,000** a year |
| Social Security wage base (the cap) | **$184,500** in 2026. Social Security tax is charged only on wages up to this amount. You can look it up in the [Reference section](/reference/us-social-security-wage-base) on the website or in the app. |
| Removing the cap | [[nav:transforms]] → Social Security wage base → Eliminate |
| State | **Illinois**, a flat rate of about 4.95% |

> The figures in the app will be **close to** the tables in this lesson, but not identical to the dollar. Rounding and the year both move them a little. Watch which lines move and roughly by how much.

---


## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Under today's law, why does Social Security [[term:fica|payroll tax]] stop at the wage base while Medicare tax keeps going?** See [Part 1 — W-2 $300k](#part-1-w-2-300k-employee-only).
2. **If the cap were eliminated, which tax line moves for a W-2 employee, and when does the extra tax show up in cash flow and in the success rate?** See [Part 1 — W-2 $300k](#part-1-w-2-300k-employee-only).
3. **Why does a self-employed person with the same $300k take a larger hit when the cap is gone?** See [Part 2 — Self-employed](#part-2-self-employed-both-halves).
4. **How do the W-2 and self-employed payroll rules compare side by side?** See [Same income, different payroll rules](#same-income-different-payroll-rules).
5. **How can I use the same Original and Modified comparison to price a wealth tax or an advisor fee?** See [The same lever, other policies](#the-same-lever-other-policies).

</div>
</aside>

---

## Part 1 — W-2 $300k (employee only)

**Live plan:** [W-2 $300k](#canvas-dossier:ss_wage_cap_w2_sample)

**Alex** is the only person in the plan. He earns **$300k** a year as an employee.

### Find the wages in [[nav:birds-eye]]

Open [[nav:dossier]] in the nav rail, then expand [[nav:birds-eye]] and **Detail**. On the ledger toolbar, choose [[nav:cash-flow]]. Under **Assets & liabilities → Assets**, find the **W-2 wages** line:

[[img:sswb-birds-eye-cash-flow]]

*Cash Flow is selected on the ledger strip, with Σ on. **W-2 wages** is the line with the briefcase icon. It reads in the millions.*

[[term:hover|Hover]] over **W-2 wages** to open its detail card. The card shows what the wages were entered as: the type (**Wages (W-2)**), whose pay it is, the growth, and the working years. Its **Annual gross wages** row reads **$300.0K/yr**, which is Alex's yearly pay. Below that, **Flow value** gives the first and last year of pay the forecast counts, and a small chart draws them:

[[img:sswb-w2-hover-detail]]

The ledger line reads in the millions because **Σ (sum mode)** is on. With Σ on, the ledger adds up every year of a flow into one figure. Twenty-three years of wages comes to millions. The total is stated in the plan's start-year dollars, its [[term:real|purchasing power]], so a wage paid years from now is counted in today's prices. Hover over the Σ badge on the Cash Flow chip to see the same explanation.

Turn Σ **off**, and the line shows the first year's amount instead. That is the **$300k** that every table in this lesson starts from:

[[img:sswb-birds-eye-cash-flow-annual]]

*Σ off. **W-2 wages** shows the first-year amount.*

[[jump:earned-income|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.earned-income]]

### Same income on the cash-flow chart and table

Open [[nav:forecaster]]. On the Forecast Detail chips, turn on only the two **CF** chips, [[nav:cf-chart]] and [[nav:cf-table]]:

[[img:sswb-cf-chips-on]]

The **Cash Flows chart** for a working year shows wages as green inflows, with living costs and taxes as outflows below:

[[img:sswb-cf-chart]]

The **Cash Flows table** for the same year lists **W-2 wages** under **Total Inflows**:

[[img:sswb-cf-table]]

Now turn on [[nav:taxes]]. You can leave the CF chips on or turn them off.

[[img:sswb-tax-chip-on]]

### Reading today’s law ([[nav:path:forecaster|taxes]])

The tax statement needs to show a year when Alex is working. Use the [[term:gmf]], our North Star scenario. It is the one steady forecast, with no random [[term:monte-carlo|Monte Carlo]] ups and downs.

[[jump:wage-base]]

> **Set the forecast and the year**
>
> 1. Click the **gold star** under **FID**. This selects the GMF.
> 2. Click the **red flag** at the left end of the **Year** bar. This jumps to **2027**, the first year of the forecast and the first year with wages.
>
> [[img:sswb-fid-gmf-year-jumps-callouts]]
>
> *The gold star under FID and the red flag under Year. The checkered flag at the right end of the Year bar jumps to the plan's last year.*

Under today's law, the federal tax statement looks like this:

[[img:sswb-tax-statement-2027]]

| Line | About (2027) | Where it comes from |
|------|--------------|---------------------|
| Ordinary income tax | **~$67k** | $300k minus the [[term:standard-deduction]] leaves about $283k. The tax brackets turn that into about $67k. |
| **Social Security payroll (FICA)** | **~$11.7k** | 6.2% of the first **$184.5k** of wages, which is the cap. Wages above the cap are not taxed. |
| Medicare | **~$4,350** | 1.45% of all **$300k**. Medicare has no cap. |
| Additional Medicare tax (0.9%) | **~$900** | 0.9% of the wages above $200k |

**What to check:** Social Security tax is about 6.2% of the cap, while Medicare is charged on the full $300k.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — why the live figures differ from the 2026 tables</summary>
<div class="lesson-reference-body">

Worked by hand on the 2026 tables, with a $16,100 [[term:standard-deduction]] and a $184,500 wage base, the figures come to **$68,134** of ordinary tax and **$11,439** of Social Security tax.

The app's figures differ a little because the forecast starts in **2027**. Each year the app grows the tax [[term:bracket|brackets]], the standard deduction, and the wage base by the plan's schedule growth. This plan uses **2.5%** a year, set under [[nav:assumptions]] → Taxes → [[term:bracket]] [[term:inflation]] / schedule growth. If that field is blank, the app still uses 2.5%. So in 2027 the standard deduction is about **$16,500** and Social Security tax is about **$11,700**. The cap rises every year, but there is always a cap.

</div>
</details>

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — the standard deduction or itemizing?</summary>
<div class="lesson-reference-body">

Before the tax brackets apply, every filer subtracts a [[term:deduction]]. You take whichever is larger: the **standard deduction**, a flat amount set each year ($16,100 for a single filer in 2026), or the total of your **itemized deductions**. The main itemized deductions are state and local taxes (including property tax, up to a cap), mortgage interest, and gifts to charity.

Alex's Illinois income tax, about $15k, would count as an itemized deduction. On its own it is still less than the standard deduction, so Alex would take the standard deduction anyway. A mortgage or a large property tax bill could tip a real household like this one toward itemizing.

The forecast always uses the standard deduction. It does not itemize, which matters most for households with a large mortgage or high state and property taxes. [Property tax, the silent killer](/learn/property_tax_the_silent_killer) shows what that leaves out.

</div>
</details>

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

When the Social Security payroll tax began in 1937, it stopped at the first **\$3,000** of wages. Since 1975 the cap has risen automatically each year with the national average wage. In 2026 it stands at **\$184,500**.

</div>
</aside>

Under the tax statement is an outlined button labeled **Inspect US tax tables (2027)**, with a small ladder icon. Press it to open that year's tax schedules. The Social Security schedule shows 6.2% up to the wage base and nothing above it.

[[jump:wage-base|output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules__inspect-schedules.social-security]]

Illinois tax comes out close to 5% of [[term:taxable-income]], though it will not match a hand calculation exactly.

### What if the cap were gone? (Transforms)

[[nav:transforms]] answers this question without a second saved plan. It runs a **what-if** beside the plan you already have. One of the what-ifs it offers is **Social Security wage base**.

> **Transforms opens on the last year of the plan**, often **2076**. By then Alex has stopped working, so there is no payroll tax to compare. Step 5 below moves it to **2027**. Every figure in this section is for 2027.

1. Open [[nav:transforms]] in the nav rail.
2. Select **Social Security wage base** in **Modifiables**. Its value reads **Regulated cap**:

[[img:sswb-transforms-ss-wage-base-selected]]

3. Check **Eliminate Social Security wage base**, so the value reads **Cap eliminated**. You can click the label as well as the box. The **Change Set** chip shows the same what-if.
4. **Stay on Transforms.** Transforms shows the **Original** plan beside the **Modified** plan for the same [[term:fid]] and year. Forecaster does not show the what-if. Most views sit side by side, but some wide ones, such as taxes, stack one above the other instead.
5. **Open** the **Forecast Detail** panel. Turn **off** every chip except **Tax**. Then **set the year**: click the **gold star** under FID and the **red flag** under Year, as in Forecaster. The panel header should now read **2027**.

[[img:sswb-transforms-forecast-detail-tax-only]]

   Compare the **Original** federal tax statement with the **Modified** one below it:

[[img:sswb-transforms-tax-original-vs-modified]]

*Original, with the cap, charges about **$11.7k** of Social Security tax. Modified, without the cap, charges **$18,600**, which is 6.2% of all $300k. Now read the line above it. **[[term:ordinary-income]] tax is $67,201 on both sides.** Removing the cap changes the payroll line and nothing else.*

6. On **each** side, press **Inspect US tax tables** under that side's statement and scroll to **Social Security**. The two schedules should differ.

**Original** still has a cap. It charges 6.2% from $0, then **0%** above the wage base. The second rung is the wage base, grown to 2027:

[[img:sswb-transforms-inspect-ss-capped]]

**Modified** has no cap. It charges 6.2% from $0, with **no second [[term:ss]] rung**:

[[img:sswb-transforms-inspect-ss-uncapped]]

| Line | Original (cap) | Modified (no cap) |
|------|----------------|-------------------|
| Ordinary income tax | ~$67k | **Same.** W-2 payroll tax is not deductible. |
| Social Security payroll (FICA) | ~$11.7k | **~$18,600**, which is 6.2% × $300k |
| Medicare and Additional Medicare | unchanged | unchanged |
| Inspect → Social Security | 6.2%, then **0%** above the wage base | **6.2%** all the way up |

#### The dollar that moves (W-2)

On the 2026 tables, the extra Social Security tax each year is 6.2% × ($300,000 − $184,500) = **$7,161**. In the app the gap is a little smaller, because the 2027 cap is a little higher. Either way, only the Social Security line moves.

### Cash flows under the what-if (Transforms → Cash Flow table)

Social Security tax is withheld from every paycheck, so the app pays it in the year it is charged, along with the rest of the tax on wages. The higher Social Security tax on the Modified side reaches cash flow right away.

Stay on Transforms with the cap eliminated. Turn **off** every Forecast Detail chip except the **Cash Flow table**, and move to **2028**, a full working year. Alex's tax is higher on the Modified side. The extra Social Security tax is part of the **Income tax** line, not a separate row:

[[img:sswb-transforms-cf-2028-withheld]]

> **Notice the color.** When the Modified side differs from the Original, its card gets a soft colored wash. The wash tells you at a glance whether a number moved. For a **table**, the app compares only the **selected year**, so step through the years and watch for the wash.

| Year | Original Income tax | Modified Income tax |
|------|---------------------|---------------------|
| 2028 | e.g. ~$98.3k | **Higher**, e.g. ~$104.8k |

The first forecast year, 2027, is different. It pays the plan's own estimate of the year's tax, $100,000, unless the tax withheld from that year's paychecks is more. On the Modified side it is more, so 2027 is higher there too, but by less than the extra Social Security tax.

From **2027** until Alex retires around **2050**, **Income tax** stays higher on the Modified side, because the extra Social Security tax comes due every working year. If both sides still match, the what-if did not apply. Check the box again and wait for the Modified side to recompute.

### Same story in Monte Carlo (Simulation Summary)

Stay on Transforms with the cap eliminated. **Close** the **Forecast Detail** panel and **open** the **Simulation Summary** panel:

[[img:sswb-transforms-simulation-summary]]

Then press **Re-simulate** to compare the chance of success on the two sides. Extra Social Security tax every working year drains cash, so fewer paths reach the **Silver** success threshold. The **Net Worth Distribution** cards sit side by side, **Original** and **Modified**:

[[img:sswb-transforms-nw-distribution]]

Each card shows its own success rate. Read the rates from the cards. They change a little with the number of paths and the random seed, so this page does not quote them. What does **not** change is the direction:

| Side | What you see |
|------|--------------|
| **Original** (cap) | The left tail is already heavy, but the tax load is lighter |
| **Modified** (no cap) | Same plan with more payroll tax each year, so less wealth at the end and a **lower** success rate |

On this plan, more Social Security tax means a lower chance of success. You did not need a second plan to see it. The what-if was enough.

### Marginal rate on the next dollar (employee side)

Alex earns above the wage base and is in the **35%** federal bracket, with about 5% state tax on top:

| Rate | Cap | No cap |
|------|-----|--------|
| Rough combined tax on the next dollar | **~42%** | **~49%** |

These are the employee's shares only. Next, the **self-employed** version of Alex earns the same $300k but pays **both** halves of payroll tax, so the hit is larger. Switch the live plan without leaving this page.

---

## Part 2 — Self-employed (both halves)

**Live plan:** [Self-employed $300k](#canvas-dossier:ss_wage_cap_se_sample)

The setup is the same: single, **$300k**, 2026 tables, Illinois. This time the income is **net [[term:seca|self-employment]] earnings**. A self-employed person pays both the employer and the employee halves of payroll tax: **12.4%** for Social Security and **2.9%** for Medicare. That is why removing the cap costs more.

| Setup | Value |
|-------|-------|
| Net self-employment income | **$300,000** |
| Self-employment tax base | **92.35% × $300k = $277,050** |
| Removing the cap | The same Transforms control as Part 1 |

### Find the SE income in [[nav:birds-eye]]

Open [[nav:dossier]], expand [[nav:birds-eye]] and **Detail**, and choose [[nav:cash-flow]]. Under **Assets & liabilities → Assets**, find the self-employment inflow. This is the same walk as Part 1.

Hover over that line to see its type, direction (**In**), amount, and growth:

[[img:sswb-se-hover-detail]]

Keep **Σ off** on the Cash Flow tab, so the line shows the yearly amount.

[[jump:seca|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.self-employment]]

### Same income on [[nav:forecaster]] cash flows

Open [[nav:forecaster]]. On the Forecast Detail chips, turn on only [[nav:cf-table]] (and [[nav:cf-chart]] if you like). Confirm that **self-employment** appears under **Total Inflows**.

Then turn on [[nav:taxes]]. The CF chips can stay on or go off.

### Reading today’s law ([[nav:path:forecaster|taxes]])

With **Tax** on, move to the first working year of the GMF, as in Part 1. Click the **gold star** under FID, then the **red flag** under Year:

[[img:sswb-fid-gmf-year-jumps-callouts]]

#### Why this statement does *not* look like the W-2 $300k card

On the W-2 plan, [[term:agi]] and [[term:earned-income]] are both **$300,000**, and payroll tax starts from the full wages. Self-employment works differently in three ways:

1. **A smaller tax base.** Self-employment tax is charged on **92.35%** of net earnings: 0.9235 × $300,000 = **$277,050**. That is the [[term:basis|**Basis**]] on the Social Security and Medicare lines.
2. **Half of it is [[term:deductible]].** Half of the self-employment Social Security and Medicare tax comes off income before income tax. (The Additional Medicare tax does not.) That pulls AGI **below** $300k.
3. **Lower income tax.** A lower AGI means lower ordinary income tax: about **$62k** here, against about **$67k** on the W-2 plan. Total federal tax is still higher, because of the larger payroll tax.

A 2027 GMF statement looks like this:

[[img:sswb-se-tax-statement-regulated]]

| Item | Basis (2027) | Tax | Where it comes from |
|------|--------------|-----|---------------------|
| Adjusted gross income | **~$284k** | — | $300k minus the deductible half of self-employment tax |
| Ordinary taxable income | **~$268k** | — | AGI minus the standard deduction (about $16.5k in 2027) |
| Ordinary income tax | ~$268k | **~$61.7k** | Lower than the W-2 plan's ~$67k, because AGI is lower |
| Social Security (SE) | **$277,050** | **~$23.5k** | **12.4%** of the base, up to the wage base |
| Medicare (SE) | **$277,050** | **~$8.0k** | **2.9%** of the whole base. Medicare has no cap. |
| Additional Medicare (0.9%) | **~$77k** | **~$0.7k** | 0.9% of the base above $200k |
| **Total tax** | — | **~$94k** | Income tax plus the three payroll lines |

Here is why AGI is about $284k instead of $300k:

1. Self-employment Social Security tax is about **$23.5k**.
2. Self-employment Medicare tax is about **$8.0k**.
3. Together that is about **$31.5k**. Half of it, about **$15.7k**, is deductible.
4. $300,000 − $15,700 leaves about **$284k** of AGI.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — the same figures on the 2026 tables</summary>
<div class="lesson-reference-body">

Worked by hand on the 2026 tables, with no yearly growth, self-employment tax comes to about **$31.6k** and ordinary income tax to about **$62.7k**. The app's 2027 figures differ a little because the standard deduction and the wage base both grow each year.

</div>
</details>

**What to check:** Self-employment Social Security tax stops at the **wage base**, and Medicare does not. **Inspect US tax tables** shows the employee schedule (**6.2%** up to the cap). A self-employed person pays both halves, 12.4%, up to that same cap.

### What if the cap were gone? (Transforms)

The control is the same one Part 1 used, and there is no second saved plan.

1. Open [[nav:transforms]].
2. Select **Social Security wage base** in **Modifiables**:

[[img:sswb-se-transforms-ss-wage-base-selected]]

3. Check **Eliminate Social Security wage base**.
4. **Stay on Transforms**, which shows Original beside Modified.
5. **Open Forecast Detail** with only the **Tax** chip on. **Check the year in the panel header.** If it does not read **2027**, click the gold star under FID and the red flag under Year.

[[img:sswb-se-transforms-tax-original-vs-modified]]

*The same comparison as Part 1, on the self-employed plan. On the **Original** side, ordinary income tax is about **$62k**, and self-employment tax appears as three lines rather than one. On the **Modified** side, the Social Security line jumps while the two Medicare lines stay put. Unlike the W-2 plan, **ordinary income tax falls a little**, because half of a larger self-employment tax is deductible. The Modified card carries the colored wash, because something really did move.*

The statement has no single "SE tax" line. The **self-employment tax total** is the sum of three lines under Total tax:

| Statement line | Original (cap) | Modified (no cap) |
|----------------|----------------|-------------------|
| Social Security payroll (FICA), 12.4% | e.g. **$23,457** | e.g. **$34,354** |
| Medicare, 2.9% | e.g. **$8,034** | **Same**, **$8,034** |
| Additional Medicare (0.9%) | e.g. **$693** | **Same**, **$693** |
| **Self-employment tax total** | **~$32.2k** | **~$43.1k** |
| Ordinary income tax | e.g. **$61,690** | e.g. **$59,795**, a little **lower** |
| Total federal tax | e.g. **$93,875** | e.g. **$102,877**, **higher** overall |

**Only the Social Security line moves** when the cap is removed. Its jump of about **$11k** is almost the whole change in self-employment tax.

6. On **each** side, open **Inspect US tax tables** → **Social Security**. The schedules read the same as in Part 1: **Original** has the cap rung (6.2%, then **0%** above the wage base), and **Modified** does not. It is worth opening them to confirm the what-if applied on this plan too. The pictures are [up in Part 1](#what-if-the-cap-were-gone-transforms).

#### The dollar that moves (SE)

With no cap, the **12.4%** Social Security rate keeps going above the wage base. That costs more each year than the employee's **$7,161**, because the self-employed person pays both halves. Ordinary income tax falls a little, because half of the extra tax is deductible.

### Cash flows: paid the same year

Self-employment tax works the same way as the W-2 withholding. It is paid during the year in quarterly estimates, so it reaches cash in the year it is charged. On Transforms with the cap eliminated, turn on only the **CF table** and move to **2028**:

[[img:sswb-se-transforms-cf-year2-withheld]]

*2028: The wash appears, and **Income tax** is the line that changed. The extra self-employment tax never gets its own row. It arrives inside the year's tax payment.*

In every working year, the Modified tax outflow stays higher until the self-employment income stops.

### Monte Carlo (Simulation Summary)

Close **Forecast Detail**, open **Simulation Summary**, and press **Re-simulate**. Compare the two **Net Worth Distribution** cards under Silver. Expect a **lower** success rate on the Modified side. The direction matters more than the exact rates, which change with the number of paths and the random seed.

[[img:sswb-se-transforms-nw-original-vs-modified]]

*Both sides on one axis, each showing its own success rate under Silver. As in Part 1, read the rates from the cards.*

| Side | What you see |
|------|--------------|
| **Original** (cap) | The same plan under today's rules |
| **Modified** (no cap) | More self-employment tax every working year, so less wealth at the end and a **lower** success rate |

The success rate is lower here than on the W-2 plan even before the what-if, because self-employment tax is heavier to begin with. The point is still the same: Modified does worse than Original.

---

## Same income, different payroll rules

Switch between **[W-2](#canvas-dossier:ss_wage_cap_w2_sample)** and **[Self-employed](#canvas-dossier:ss_wage_cap_se_sample)** at any time to check the live statements again.

| Factor | W-2 | Self-employed |
|--------|-----|---------------|
| Social Security rate | Employee **6.2%** only | **12.4%** of the self-employment base |
| Extra cost if the cap is removed | **~$7,161** a year (2026 tables) | **Larger**, about $9k or more after the deduction |
| Ordinary income tax when the cap is removed | **Unchanged** | Can **fall** a little |
| Half of payroll tax deductible? | No | Yes, for Social Security and Medicare |

---

## What this lesson does *not* claim

| Point | Why it matters |
|-------|----------------|
| **Tax side only** | The lesson does not add any extra future Social Security **benefit** when the cap is removed. |
| **Not the tax on benefits** | Taxing Social Security **checks** is a different system. See [Social Security treatment](/learn/social_security_treatment). |
| **Illinois is not exactly 5%** | State figures may differ a little from a hand calculation. |
| **One income stream** | No investments, QBI, or itemizing. This keeps the self-employment tax easy to follow. |

---

## What to check

### W-2 plan

| Area | You should have seen |
|------|----------------------|
| [[nav:birds-eye]] | Cash Flow view, the **W-2 wages** line, Σ **off** |
| Hover card | Wages (W-2), Alex's pay, $300k a year |
| CF table | **W-2 wages** under **Total Inflows** |
| GMF and first year | Gold star under FID, red flag under Year, **2027** |
| Forecaster Taxes | Social Security tax ~**$11.4–11.7k** (capped), Medicare on the **full** $300k |
| Transforms and Tax, on **2027** | Modified Social Security tax ~**$18.6k**, ordinary income tax unchanged |
| Transforms CF table | 2028 Modified **Income tax** higher, the same year |
| Transforms Monte Carlo | Modified success rate lower than Original under Silver |

### Self-employed plan

| Area | You should have seen |
|------|----------------------|
| [[nav:birds-eye]] / CF | The **SE net earnings** line, Σ **off** |
| Forecaster Taxes | AGI **below** $300k (~$284k), Social Security and Medicare basis **$277,050**, ordinary income tax ~**$62k** |
| Transforms and Tax, on **2027** | Modified Social Security tax up, ordinary income tax a little **lower**, total tax **higher** |
| Inspect schedules | Cap rung on Original, **6.2%** all the way up on Modified |
| CF table | 2028 Modified taxes higher, the same year |
| Monte Carlo | Modified success rate lower than Original under Silver |

---

## The same lever, other policies

The wage cap is a rule you do not control. You applied it to a plan and read the result as **Original** beside **Modified**. Once you have done that, the same steps work for other rules. Two of the other what-ifs in the **Modifiables** list answer questions most planning tools never ask.

### A wealth tax, if one arrives

There is **no US federal wealth tax today**, but the **Wealth tax** what-if in **Modifiables** prices one against your plan the same way: rate, exemption, whether the exemption rises with inflation, how often it is charged, and whether the home and retirement accounts count. Erin's plan sits far below any exemption a real proposal uses, so it shows nothing here. [A wealth tax on your plan](/learn/wealth_tax_what_if) walks through it on a $110 million household, with the proposals, the history and the revenue studies behind it.

### What an advisor actually costs

An advisor fee is not a policy, but the same Original and Modified comparison prices it. The **Advisor fee** what-if in **Modifiables** charges either a share of [[term:aum|assets under management]] each year or a fixed yearly amount. **You set the rate.** It starts at **1%**, and you can change it to any rate, such as **0.5%** for an advisor who gives you a discount. The fee shows up as its own line in cash flow, and the money that pays it stops [[term:compounding]] for the rest of the plan. [Cost and benefit of an advisor](/learn/cost_and_benefit_of_an_advisor) walks through it in full, including what good advice can be worth.

---

## Where to go next

| Lesson | Why |
|--------|-----|
| [Social Security treatment](/learn/social_security_treatment) | Payroll tax compared with the tax on Social Security **benefits**, a different IRS system |
| [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) | The Additional Medicare tax in a broader plan |
| [Getting around the app](/learn/getting_around) | Finding your way around Forecaster, Taxes, and Transforms |
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: MultiDossier — Live plan canvas — Bind sample dossiers on the right. -->
