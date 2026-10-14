<!--
tutilis-return: lessons/currency_on_every_amount/prose/en.md
tutilis-locale: en source
-->
# Why every amount carries a currency

Noor lives and works in the United States. The salary is in dollars, the living expenses are in
dollars, the brokerage account is in dollars. But Noor also owns a condo in Tokyo that is let to a
tenant, a savings account left behind after a few years in Frankfurt, and a small villa in Costa
Rica bought for retirement. Four currencies, one household, one plan.

If you have only ever planned in one currency, the currency dropdown beside every amount in the
plan editor can look like overkill. You type `500,000`, and there is a `$ USD` sitting next to it
that you never touch. Why is it there at all?

This lesson is the answer. Switch between the two plans on the [[term:canvas]] as you read: they
hold the **same digits**. The only difference is whether each amount says what it is counted in.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power user</p>
<div class="lesson-power-user-body">

A plan in several currencies is a **Power user** feature. A typical user's plan keeps every amount in one currency, so the currency beside each amount and the Currency tab of Assumptions appear only with Power user on. Turn it on under [[nav:advanced]] → Application → **Power user**.

</div>
</aside>

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **Why does every amount carry a currency beside its number?** See
   [A number is not an amount](#a-number-is-not-an-amount).
2. **How does a plan store amounts that are in several currencies?** See
   [What the plan records](#what-the-plan-records).
3. **Where are foreign amounts converted, and how are they taxed?** See
   [Where the conversion happens](#where-the-conversion-happens).
4. **What goes wrong when a foreign amount is typed without its currency?** See
   [Same digits, no tag](#same-digits-no-tag).
5. **Why is there no single currency setting for the whole plan?** See
   [Why not one setting](#why-not-one-setting-for-the-plan).
6. **Where do the exchange rates come from, and can they move during the forecast?** See
   [Rates today, and rates that move](#rates-today-and-rates-that-move).

</div>
</aside>

## A number is not an amount

The Tokyo condo is worth `65,000,000`. Sixty-five million of *what* is the whole question. Sixty-five
million yen is a modest apartment; sixty-five million dollars is a skyscraper. The digits are the
same, and nothing about them tells you which.

So an amount in Tutilis is three things, not one: a **year** it was quoted in, a **currency** it
is counted in, and the number. The year is what makes a 2024 appraisal mean 2024 money rather than
whatever year the plan starts. The currency is what makes `65,000,000` mean an apartment rather
than a skyscraper. Neither is decoration; leave either out and the number is a guess.

For a household that only ever deals in dollars, the currency costs nothing. It is the default,
so you never pick it, and when the plan is saved a dollar amount does not even record a currency —
"no currency stated" *means* US dollars. The dropdown you never touch is the whole price of the
feature.

## What the plan records

Open **Dossier** on the tagged plan and look at what each item says about itself. Every item
carries its own currency, and nothing is converted where it is stored:

| Item | Recorded as |
| --- | --- |
| Tokyo condo | ¥65,000,000, quoted in 2024 |
| Tokyo condo · building management fee | ¥360,000 a year, quoted in 2024 |
| Tokyo condo rent | ¥2,400,000 gross a year, quoted in 2026 |
| Frankfurt savings | €60,000, quoted in 2026 |
| Costa Rica villa | ₡55,000,000, quoted in 2025 |
| Brokerage, salary, living expenses | dollars |

Two details are easy to miss. The condo's **cost basis** is a bare number, `52,000,000`, with no
currency of its own — it borrows the valuation's. A basis is only meaningful against the value
it will be compared with, so the two are kept in one currency by construction, and when you change
the valuation's currency in the editor the basis follows at once. And the **rent** is not a
property of the condo at all; it is its own item, a rental-income generator, with its own
currency. A yen apartment could in principle be let for dollars, so the model does not assume.

"Recorded, not converted" is the rule. The plan you typed is the plan on disk. Every conversion
you will ever see is computed from these native amounts and a rate, on the way to the screen.

## Where the conversion happens

The **Bird's Eye** is the first place the four currencies meet. It shows the plan's items as one
list of present values, and it has to pick a single currency to do that — your display currency,
dollars here:

| Item | Present value |
| --- | ---: |
| Tokyo condo | ≈ $489,000 |
| Costa Rica villa | ≈ $95,000 |
| Brokerage | $500,000 |
| Frankfurt savings | ≈ $64,000 |

The yen condo is worth a bit less than the dollar brokerage account; the colón villa is a small
fraction of either. Each converted line carries a marker — `(¥↔$)`, the currency it was modeled
in and then the one it is shown in — so a converted figure never passes as a native one. The
**FX** button on the rail lists every currency the plan holds and the rate behind each marker.

The forecast does the same thing, one level deeper. The engine simulates each item **in its own
currency** — the condo appreciates in yen, the rent grows in yen, the management fee inflates in
yen — and converts only at the edges, where a year's cash flows are netted and where a balance
sheet is totaled. Set the forecaster to **2027** and read the cash-flow statement: the rent
arrives as about **$12,500** net of the property's expenses, beside a salary of about $160,000.
That $12,500 is a yen figure that crossed the boundary once, at the plan's rate.

Taxes cross the same boundary. Noor files in the US, so the yen rent is taxed as US passive
income, in dollars, on the same statement as the salary. The tax calculator picks its unit of
account from the jurisdiction, not from the item — which is why the item has to say what it is
in.

## Same digits, no tag

Now switch to **Same digits, no tag**. Nothing was retyped. Each amount simply stopped saying
which currency it is in — which, as above, means the plan reads every one of them as dollars.

| | Every amount tagged | Same digits, no tag |
| --- | ---: | ---: |
| Tokyo condo on the Bird's Eye | ≈ $489,000 | $65,000,000 |
| Net worth, end of 2027 | ≈ $1.3 million | ≈ $126 million |
| Tokyo condo rent in 2027 | ≈ $12,500 | ≈ $1.7 million |

Noor is now a nine-figure household on paper, with a condo that earns more in rent each year
than the salary does in a decade. Success is a perfect 100%. Every table is internally
consistent; every table is wrong.

Nothing in the software can catch this. `65,000,000` is a perfectly legal dollar amount, and a
plan cannot tell an untagged yen figure from a real one — they are the same bytes. The only
defense is that the amount says what it is *at the moment it is typed*, by the one person who
knows. That is what the dropdown is for.

This is not a hypothetical. The engine once had exactly this bug — a yen valuation read at face
value as dollars, on the forecast side only, so the Bird's Eye and the forecaster disagreed by
more than a hundred to one. The fix was not to convert more cleverly; it was to make every item carry
its currency all the way through the simulation, and a test now holds the engine to that.

## Why not one setting for the plan

The obvious cheaper design is a single currency for the whole plan: one dropdown, in the settings, and every amount inherits it. It works exactly as long as every amount really is in that currency, and it fails the day one isn't.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

That dropdown is the plan's currency choice. On this plan it is set to multiple currencies, and the picker under it only seeds the next amount you type.

[[img:currency-on-policy|control]]

*The currency choice on [Every amount tagged](#canvas-dossier:currency_tagged).*

</div>
</details>

Noor's plan has no honest answer to "what currency is this plan in". It is in four. The moment a
single foreign item appears, a plan-level setting has to become a per-item one, and every amount
already typed has to be gone back over and tagged — by someone who may no longer remember which
appraisal was in which money. Amounts entered before the change and amounts entered after it are
indistinguishable on disk. That is the lock-in: not that it is hard to add the field later, but
that nothing entered before it can be trusted afterward.

Attaching the currency to the amount from the first day is the honest shape. It says nothing a
single-currency household has to think about, and it costs a default value that is not even
written down. What it buys is that the first foreign item is one more row, not a migration.

## Rates today, and rates that move

The rates behind every conversion above live on the plan. Open **Assumptions → Currency** to see them: one rate per currency against the dollar, so no combination of edits can be inconsistent with itself. These two plans carry no rates of their own and ride the bundled snapshot; a real plan can type its own, or press **Get latest FX** and fine-tune.

[[jump:fx]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

[[img:currency-on-fx-rates|control]]

*Assumptions → Currency on [Every amount tagged](#canvas-dossier:currency_tagged). One row per currency against the dollar, and Exchange rates set to Fixed.*

</div>
</details>

By default the rates do not move. Every year of the forecast converts at the same rate, which
means a plan that has not asked otherwise treats currency as a unit and not as a risk: the yen
condo grows at a real-estate rate, and the fact that the yen itself will wander against the dollar
over forty years is not part of the spread. That default is deliberate, and it is exactly what
every plan did before the currency-risk model existed.

The model is there when you want it. Under the rate table, the same panel offers **Exchange rates:
Fixed | Modeled**. Choose *Modeled* and each rate becomes part of the simulation: it drifts with
its region's [[term:inflation]] relative to the US and wanders with a real rate that mean-reverts over a
few years, sampled per path, so the forecast can say how much of a household's spread comes from
its currencies. Because every item already carries its currency through the whole simulation, the
model slots in at the conversion boundary and changes nothing about how a plan is written. The
lesson *Currency risk in the forecast* walks through it on a household built for the purpose.

Two smaller levers exist today under [[term:transforms]]. **Convert** re-expresses an item in
another currency at the plan's rate, so you can ask what the household looks like if the condo is
sold and the proceeds brought home. **Redenominate** relabels the currency without converting —
which is the honest name for what the second plan on this page did by accident.

## What to take away

- An amount is a number, a year, and a currency. Leave any of the three out and it is a guess.
- The currency is free when you do not need it. Dollars are the default, and a dollar amount
  does not even record one.
- Nothing is converted where it is stored. Conversion happens on the way to the screen and at
  the edges of the forecast, always from the native amount and a rate you can see.
- The same digits under the wrong tag are not a small error. They are a different household.
- Recording the currency from the first day is what makes the first foreign item a row instead
  of a migration — and what lets the currency-risk model slot in at the conversion boundary
  without touching how a plan is written.
