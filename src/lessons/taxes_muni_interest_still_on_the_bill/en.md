<!--
tutilis-return: lessons/taxes_muni_interest_still_on_the_bill/prose/en.md
tutilis-locale: en source
-->
# When tax-exempt interest still shows up on the bill

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.interest_character.muni_still_on_the_bill
  outline-path: Taxes, benefits, and retirement systems › Interest character › When tax-exempt interest still shows up on the bill
  document-id: taxes_muni_interest_still_on_the_bill
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: FirstPass
  host-hint: MultiDossier
  intent: Industry “tax-exempt” (munis) is a federal AGI label, not MAGI or state.
  related: magi_cliffs_irmaa_niit,sheltering_money
-->

<!--- α <lesson_body> -->
Brokers, fund names, and 1099s call [[term:municipal-bond|municipal-bond]] interest
**tax-exempt**. That label is a **federal [[term:agi|AGI]]** fact: the interest does not go on Form 1040 as [[term:ordinary-income]]. It is
**not** a complete tax picture.

The same dollars still count in **[[term:magi|modified AGI]]** — the figure that drives
[[term:irmaa|IRMAA]] Medicare premiums, the 3.8% [[term:niit|net investment income tax]], and how
much of a Social Security check is taxable. And most states that levy an income tax **add
out-of-state municipal interest back** onto their own return. California, used on these live
plans, is one of them.

US [[term:treasury-security|Treasuries]] are the inverse special case: **federally taxable,
state-exempt**, because federal law bars states from taxing that interest.

Stay on this page. Switch the live plan with the chips above (or the links below). The household
and the **$200k** taxable holding stay put; only the **character of the interest** changes.

| Live plan | What the holding pays | Federal income tax | MAGI | California |
|-----------|----------------------|--------------------|------|------------|
| **[National muni](#canvas-dossier:interest_character_muni)** (default) | Tax-exempt (municipal) yield | Out of AGI | **AGI + the munis** | **Added back** |
| **[Treasury](#canvas-dossier:interest_character_treasury)** | Taxable Treasury interest | In AGI | Equals AGI | **Subtracted** |
| **[Corporate](#canvas-dossier:interest_character_corporate)** | Ordinary corporate interest | In AGI | Equals AGI | Taxed like other interest |

Shared setup:

| Setup | Value |
|-------|-------|
| Person | **Alex**, single, California |
| Wages | **$120k** |
| Taxable bond holding | **$200k**, **3%** yield (~$6k of interest) |
| Living spend | **$80k** |
| Holding return | **Pinned** at [[term:mu\|μ]] 3.5% / [[term:sigma\|σ]] 5% on all three plans |

Watch **labels and which lines appear**, not the exact cents. Schedule growth and the selected year
will move the dollars; they should not change those labels.

The return is pinned deliberately. The three holdings carry different instrument categories —
intermediate Treasury, long-term corporate, other — and each plan overrides that category with the
**same** expected return and [[term:volatility]], so switching chips cannot move net worth for any reason
except the tax. This is a comparison of character, not of return.

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **If muni interest is tax-exempt, which taxes can it still show up in?** See
   [Why the industry label is incomplete](#why-the-industry-label-is-incomplete).
2. **How can I tell from a holding's card whether its interest is muni, Treasury, or corporate?**
   See [Where you see the character](#where-you-see-the-character).
3. **Which fields on a holding decide how its interest is taxed?** See
   [Where you set the character](#where-you-set-the-character).
4. **Where on the tax statement do I see MAGI move and the state add back or subtract interest?**
   See [Where you read it](#where-you-read-it).
5. **Does it matter which account a muni or Treasury fund sits in?** See
   [Placement](#placement-not-just-rates).
6. **What else does muni interest raise through MAGI?** See [MAGI cousins](#magi-cousins).

</div>
</aside>

---

## The question

On a taxable bond holding of the same size, can I open the **tax statement** and see:

1. **National muni** — federal **MAGI above AGI**, and a California line **Municipal bond interest
   added back**?
2. **Treasury** — MAGI **equals** AGI, federal still taxes the interest, and California
   **subtracts** it?
3. **Corporate** — neither special line; interest is ordinary at both levels?

---

## Why the industry label is incomplete

“Tax-exempt” on a muni is answering one question: *does this interest enter federal AGI?* For a
normal municipal bond, no.

Three other questions still have answers, and they are not “no”:

| Question | Municipal interest | Treasury interest | Corporate interest |
|----------|--------------------|-------------------|--------------------|
| On federal **AGI**? | No | Yes | Yes |
| In **MAGI** (IRMAA, NIIT, taxable Social Security)? | **Yes** — added to AGI | Yes (already in AGI) | Yes |
| On a typical **state** return? | **Usually yes if the issuer is another state**; usually no if it is yours | **No** (federal law) | Yes |

A **California-only** muni fund would keep the in-state slice off the California return. A
**national** fund is mostly other states. These live plans do not split issuers [[term:cusip|CUSIP]] by CUSIP, so
they treat municipal interest the way a national fund works: added back in California. That is
the conservative reading for a mixed or unknown issuer mix — it will **overstate** California tax
on a pure in-state fund.

Illinois, Iowa, and Wisconsin tax their **own** munis as well. North Dakota does not add other
states’ munis back. States with no income tax (Texas, Florida, …) only care about the MAGI half.

---

## Where you see the character

Start on the [[term:canvas]] beside this lesson — no install, and it is the same data the desktop app edits.

**First, switch the beam to Holding.** Open [[nav:birds-eye]] and pick **Holding** from the
**Account / Holding / Cash Flow** selector. On **Account** the [[term:brokerage]] is one rolled-up row and
the fund inside it is not drawn at all — and the fund is the thing this lesson is about. **Holding**
opens accounts into the individual securities they contain.

[[img:taxes-muni-beam-holding]]

*Bird's Eye with **Holding** picked. Under **Assets**, the Brokerage account has opened into the
fund it holds — on **Account** that second row is not drawn, and the [[term:hover]] below is impossible.*

Now hover the bond holding under **Brokerage**. The card that comes up is the plan's own description
of that instrument, and the [[term:yield]] rows are where the character lives:

[[img:taxes-muni-card-muni]]

*The National Muni Fund's canonical card. **Tax-exempt interest 3%** is the whole of what makes this
plan a muni plan — the fund's name is just a name.*

Now switch to the **Treasury** chip and hover the same row:

[[img:taxes-muni-card-treasury]]

*The Treasury holding. Same $200K, same pinned N(3.5%, 5%) — and a completely different pair of yield
rows.*

Tax-exempt interest is gone. **Interest yield** is 3%, and **US government obligation % is 100%** —
which no line in the plan file states. It comes from the instrument's growth **category**
(`Intermediate Treasury`), and it is the entire mechanism behind the state subtraction you are about to read
on the tax statement.

The **Corporate** chip is the third case, and it is defined by what is *missing*. Its card carries
`Long-term corporate bonds`, the same **Interest yield 3%** — and **no US government obligation row at all**. A
corporate bond has no federal-obligation slice, so the card does not offer one: nothing here is
subtracted by any state.

Read the three side by side and the whole lesson is four rows:

| Card row | National muni | Treasury | Corporate |
|----------|---------------|----------|-----------|
| **Category** | Other | Intermediate Treasury | Long-term corporate bonds |
| **Tax-exempt interest** | **3%** | — | — |
| **Interest yield** | — | **3%** | **3%** |
| **US government obligation %** | — | **100%** | *(no such row)* |

Every other row on all three cards — Value, Cost, Override, Source, and the whole **Expected
growth** block down to `$613K – $973K` at 2074 — is identical. That is the controlled comparison:
the only things that move are the two yield rows.

## Where you set the character

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">


On the dossier, open the holding and the **fund or stock yields** section. Two fields do the work:

- **Tax-exempt interest** — municipal yield. Federally excluded; California adds it back.
- **Interest yield** plus **US government obligation %** — taxable interest, of which that
  percentage is Treasuries (subtracted on the state return). Treasury and [[term:tips]] growth categories
  default to **100%**. A total-bond fund is some other percentage; you set it.

[[img:taxes-muni-holding-treasury|control]]

*The Treasury Fund editor on [Treasury](#canvas-dossier:interest_character_treasury), with yields open. Interest yield is 3%, and US government obligation % is 100% because the growth category is intermediate Treasury.*

[[img:taxes-muni-holding-muni|control]]

*The National Muni Fund editor on [National muni](#canvas-dossier:interest_character_muni). Tax-exempt interest is 3%, and the taxable interest fields are empty.*

Note the panel header: **shared by this name in every account**. Yields hang off the instrument
name, so two accounts holding the same fund cannot disagree about what it pays.

The **National muni** plan has a 3% tax-exempt yield and no taxable interest. **Treasury** has a
3% taxable yield on an intermediate-Treasury growth category. **Corporate** has the same 3%
taxable yield on a [[term:corporate-bond|corporate-bond]] category, so none of it is subtracted.

Authoring is desktop-only because the canvas beside this lesson is read-only for structure. What the
fields *do* you can read on the canvas card above.

</div>
</details>

---

## Where you read it

[[nav:forecaster]] → tax statement (Taxes chip). Pick a year with wages running — **2027** on
these plans is enough (the first forecast year).

[[jump:municipal-bond]]

### National muni

**Live plan:** [National muni](#canvas-dossier:interest_character_muni)

On the **federal** statement, **Modified AGI (MAGI)** sits above **Adjusted gross income** by the
muni interest (~$6k). AGI itself does not include it. That is the MAGI add-back the IRMAA and
NIIT lessons assume is usually zero.

On the **California** statement, **Municipal bond interest added back** is a positive adjustment.

[[img:taxes-muni-statement-muni]]

*Tax statements, 2027, National muni plan. Federal MAGI is above AGI; California adds the muni
interest back. Match the **row labels**, not the exact dollars.*

### Treasury

**Live plan:** [Treasury](#canvas-dossier:interest_character_treasury)

Federal AGI **includes** the interest — Treasuries are not a federal exclusion. MAGI equals AGI.
California shows **US Treasury interest subtracted**. The federal bill is higher than on the muni
plan; the state bill is not.

[[img:taxes-muni-statement-treasury]]

*The same household holding the Treasury instead. MAGI equals AGI, and California subtracts the Treasury interest.*

### Corporate (the control)

**Live plan:** [Corporate](#canvas-dossier:interest_character_corporate)

Ordinary taxable interest: in federal AGI, in MAGI, and in the California base. No add-back, no
subtraction. This is what a corporate bond fund — and the taxable slice of a total-bond fund —
looks like.

[[img:taxes-muni-statement-corporate]]

*Corporate holding: neither special line. Interest is ordinary at both levels.*

---

## Placement, not just rates

Municipal interest’s federal exclusion is **account-sensitive**. In a **taxable** brokerage it
does what this lesson shows. Inside a **[[term:ira|traditional IRA]] or 401(k)**<!-- term-skip: 401k, traditional — one pill for the phrase, not three in five words --> the exclusion never happens:
withdrawals are ordinary income regardless of what the fund held. Putting munis in [[term:tax-deferred]]
accounts throws away the one exclusion the industry name is pointing at.

Treasuries in taxable get the **state** subtraction. In a 401(k) that subtraction never comes up
— the state is taxing the withdrawal, not the coupon.

The live plans keep the holding in **taxable** on purpose. For the account-type contrast see
[Sheltering money](/learn/sheltering_money).

---

## MAGI cousins

The same municipal dollars that skip Form 1040 still feed:

- **IRMAA** (Medicare [[term:premium]] steps, from MAGI two years prior)
- **NIIT** (3.8% on net investment income above a MAGI threshold)
- **Taxable Social Security** ([[term:provisional-income]] includes tax-exempt interest)

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Interest from a tax-exempt municipal bond can make more of your Social Security taxable. When the IRS works out how much of a benefit to tax, it adds that interest back in. The interest never appears as [[term:taxable-income]] on Form 1040, yet it can still raise the tax on your benefits.

</div>
</aside>

This page is the **character** of the interest. [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit)
is where those later costs show up as their own lines. On that sample MAGI usually equals AGI
because there is no tax-exempt interest. Switch back here when you want MAGI to move **without**
AGI.

---

## What these plans are not showing

- **Issuer-by-issuer** in-state vs out-of-state munis. A California-only fund would keep more off
  the California return than a national fund.
- **Private-activity** municipal bonds that can appear on the federal AMT.
- **Automatic** federal-obligation percentages for a total-bond index — that percentage is an
  input (the 1099 / annual report figure), not a look-up.

---

## Where to go next

| Lesson | Why |
|--------|-----|
| [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) | The later costs MAGI drives, once you have seen MAGI diverge from AGI |
| [Sheltering money](/learn/sheltering_money) | Which **account** the holding sits in — taxable vs traditional vs Roth |
| [Filling the cheap buckets](/learn/filling_the_cheap_buckets) | Ordinary brackets the Treasury and corporate coupons compete for |

<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: MultiDossier — Multi-plan switch — Register primary + alternate dossier ids so learners switch plans without leaving `/learn/{id}`. -->
