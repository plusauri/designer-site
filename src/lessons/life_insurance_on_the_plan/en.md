<!--
tutilis-return: lessons/life_insurance_on_the_plan/prose/en.md
tutilis-locale: en source
-->
# Life insurance on the plan

Alex has two life policies. One is a twenty-year term policy bought at 57, the other is a
whole-life policy that has been building cash value for years. Neither belongs in an account, and
neither is a real asset in the way a house is, but both cost money every year, one of them is worth
something today, and each promises a payment at a death the plan already has a year for. This
lesson shows where each of those three things lands.

Open the [[nav:dossier]]. On the Bird's Eye, each policy has a row under **Assets**, and hovering
the row raises the policy's card. The whole-life policy's row is its cash value, which is net worth;
the term policy's row carries no value at all, because a term policy is not worth anything until it
pays. In the desktop app the same cards sit under **Insurance** on the balance sheet.

[[jump:birds-eye]]

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **How do a term policy and a whole-life policy differ on the plan?** See
   [Two policies, two shapes](#two-policies-two-shapes).
2. **Where does a premium show up, and when does it stop?** See
   [The premium is an expense](#the-premium-is-an-expense).
3. **Does a policy's cash value count toward net worth?** See
   [The cash value is an asset](#the-cash-value-is-an-asset).
4. **When is a death benefit paid, who receives it, and is it taxed?** See
   [When a policy pays](#when-a-policy-pays).
5. **What does this plan leave out about life insurance?** See
   [What this plan is not showing](#what-this-plan-is-not-showing).

</div>
</aside>

## Two policies, two shapes

The term policy is the simpler one. It has a death benefit, a premium, and **coverage years**. If
Alex dies inside those years, it pays; if the years run out first, it has cost its premiums and
pays nothing, which is what most term policies do.

[[img:life-insurance-card-term]]

The card says so plainly. Its **Pays** row reads *Expires before the insured's death*, because the
coverage ends in 2046 and Alex's death age puts the death after the plan's last year.

The whole-life policy is permanent. It covers Alex for life while the premium is paid, and it has a
**cash value** that grows at a modest crediting rate.

[[img:life-insurance-card-whole]]

Its **Pays** row names Alex's death year, and the card carries the cash value and its growth as
well as the benefit and the premium.

## The premium is an expense

Open the [[nav:cf-table]] on any year before 2046 and both premiums are there among the expenses,
each under the policy's own name.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:life-insurance-cf-table-2045]]

The year after, only the whole-life premium remains. A term policy's premium stops with its
coverage. A permanent policy's premium stops when the insured dies, or earlier if its **premium
years** say the policy is paid up.

## The cash value is an asset

Open the [[nav:bs-table]]. The whole-life policy's cash value is listed among the real assets, under
the policy's name, and it counts toward net worth from the first year.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:life-insurance-bs-table-2027]]

It grows at its own rate, four percent a year unless the policy says otherwise, and the forecast
never sells it or borrows against it. A term policy has no line here, because it has no cash value.

## When a policy pays

A death benefit is paid in the year the insured dies. Who receives it depends on who is left. When
one of two owners dies first, the benefit is the survivor's cash, and the plan invests it like any
other surplus. When the insured is the last owner, the plan ends at that death, and the benefit
lands in the plan's final year, which is where an estate reads it.

Alex is the only owner here, so the whole-life benefit lands in **2058**, the last year of the plan.

[[img:life-insurance-cf-table-2058]]

It is the year's only inflow, and no tax is assessed on it. A life-insurance death benefit is not
income, and the tax pass leaves it alone.

## Try this

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

Open the term policy and push its coverage end past 2059. Its **Pays** row changes to name Alex's death year, and the final year's statement gains a second benefit line.

[[img:life-insurance-policy-term|control]]

*The term policy, Alex 20-year term. Coverage years are what you push past 2059.*

Then open the whole-life policy and set **Owned by** to *Irrevocable trust*. Nothing on the cash-flow statement changes; the benefit still arrives. What changes is the estate: on the Net Worth Distribution card, with estate tax on, the trust-owned proceeds are left out of the taxable estate and pass to heirs untaxed.

[[img:life-insurance-policy-whole|control]]

*The whole-life policy. Owned by is the toggle at the bottom of the editor.*

</div>
</details>

## What this plan is not showing

The plan never draws on the cash value. A policy loan, or surrendering the policy for its cash
value, are both real choices, and neither is modeled yet. The benefit is level, so a decreasing-term
policy is entered at its average, and a policy on a dependent's life pays in that person's death
year like any other.
