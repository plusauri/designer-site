<!--
tutilis-return: lessons/fpl_under_the_subsidy_cliffs/prose/en.md
tutilis-locale: en source
-->
# %FPL: the number under the subsidy cliffs

Many public programs ask the same question about a household's income: how large is it next to the federal poverty line for a household of this size? The answer is a percentage, written [[term:fpl|%FPL]]. The [[term:aca|ACA]] [[term:premium-tax-credit|premium tax credit]], Medicaid, and Medicare's Extra Help all read it. Because it is a ratio, it can change from either end. Income can rise, or the household can get smaller, and a smaller household has a lower poverty line. For the marketplace, the federal poverty level the ACA reads also sets the ACA subsidy cliff, the income at which its help stops.

This lesson follows one family through a year in which the second change happens alone. Kim and Lee's income keeps pace with prices and no faster, yet in 2032 they cross the [[term:cliff|cliff]] where the marketplace [[term:premium|premium]] credit ends. The second plan shows one way they could have stayed under it.

## What %FPL measures

%FPL is household income divided by the poverty guideline for the household's size, as a percentage. Each year the Department of Health and Human Services publishes the guidelines. For 2026 the line is $15,960 for one person and $5,680 more for each additional person, so a household of four has a line of $33,000 and a household of two a line of $21,640. An income of $99,000 is 300% of the line for four and 457% of the line for two.

The marketplace measures income in a particular way. It uses [[term:magi|MAGI]], with untaxed Social Security and tax-exempt interest added back, and it divides by the **previous year's** guideline, because enrollment for a year opens before that year's guidelines are published. The household is the people on the tax return: the filers and the dependents they claim.

Under the rules in force for 2026, the credit is the premium of a benchmark silver plan minus an expected contribution, which rises from 2.10% of income at the bottom of the scale to 9.96% from 300% of the line. Above 400% of the line there is no credit at all. The credit does not taper away near the line. A household one dollar over it loses the whole year's credit.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Lines that read %FPL</summary>
<div class="lesson-reference-body">

| %FPL | What it decides | In Tutilis |
|---|---|---|
| 100% | The lowest income that earns the marketplace credit in a state that did not expand Medicaid | Priced |
| 138% | Medicaid eligibility in states that expanded it | Not modeled |
| 150% | Medicare Part D Extra Help | Not modeled |
| 200% to 250% | Cost-sharing reductions on silver plans | Not modeled |
| 400% | The end of the marketplace premium credit | Priced |

</div>
</details>

In Tutilis the ratio appears on the [[nav:cliffs]] card. The headline under MAGI gives the household's %FPL against the same year's guideline, and the ACA row gives the marketplace's own ratio, how far income sits from the 400% line, and the year's credit.

## The household shrinks

The household's size in the plan is its owners plus its dependents who are under 19 that year. For Kim and Lee that is four people through 2028, three from 2029, when Maya turns 19, and two from 2032, when Theo does. Their wages rise 2.5% a year, about as fast as the guideline, so in a year when nobody leaves, their ratio barely moves.

| Year | Household | MAGI | ACA %FPL | Premium credit |
|---|---|---|---|---|
| 2028 | 4 | about $97,600 | 288% | about $14,300 |
| 2029 | 3 | about $100,500 | 350% | about $11,200 |
| 2031 | 3 | about $106,800 | 354% | about $12,300 |
| 2032 | 2 | about $109,900 | 448% | none |

The table comes from the forecast's year-by-year rows. The ratio jumps about 62 points in 2029 and about 95 points in 2032, and neither jump has anything to do with income. Each one is the line moving down.

The first jump costs the family little. Between 300% and 400% the expected contribution is the same 9.96% of income, so a higher ratio inside that band does not raise what they pay. The credit is smaller in 2029 because the plan's premium for three people is lower than the premium for four, and the credit covers part of whatever the benchmark costs.

The second jump crosses the line. The Year events card marks the year Theo leaves the household count:

[[img:fpl-year-events-2032]]

The plan counts a dependent until 19. A dependent who is a full-time student can count until 24, but the plan has no way to say a child is a student, so it always uses 19. If Theo were in college and still claimed by his parents, the household would stay at three, and the family would stay under the line.

## A credit lost in one year

The Cliff radar shows the same step in dollars. In 2031 the ACA row reads 354% of FPL, with income about $14,000 below the line and a credit of about $12,300:

[[img:fpl-cliff-radar-2031]]

A year later their income is about $3,200 higher, as it is every year. The line, 400% of the guideline for two people instead of three, has fallen from about $120,800 to about $98,100, so the row reads 448% of FPL and about $11,900 over the line:

[[img:fpl-cliff-radar-2032]]

The row shows a credit lost of about $9,000, which is the credit the family would have had in 2032 at an income exactly on the line. That is what crossing it costs them that year. With their income still keeping pace with the guideline, they stay about 450% of the line every year after that and receive no credit until Kim reaches Medicare in 2043.

## Raising the deferral

The only part of the ratio the family controls is the income at the top of it. A [[term:traditional|traditional]] [[term:401k|401(k)]] deferral is taken out of pay before tax, so it lowers MAGI dollar for dollar. The second plan, [Deferral raised in 2032](#canvas-dossier:fpl_cliff_family_deferral), is the same family raising each deferral from $4,000 to $15,000 a year from 2032, which moves $22,000 more of their pay into the 401(k)s each year.

That brings 2032's MAGI down to about $88,000, about 360% of the line. From then until Medicare the ratio stays between about 355% and 375%, and the credit comes back at about $10,000 in 2032, rising to about $15,500 by 2042, or about $138,000 over those eleven years.

[[img:fpl-cliff-radar-2033-deferral]]

The extra saving is not free. The family takes home less pay, but the credit and the income tax saved on the deferral together cover more than half of the $22,000. The rest is still theirs, in the 401(k)s.

The first year has a delay. The plan sizes each year's advance credit on the previous year's income, and 2031's income, measured against a household of two, is over the line. So in 2032 the plan pays no advance, and the family pays the full premium. The return for 2032 reconciles the credit on the year's real income, and about $10,000 comes back as a refund in 2033. A real family can avoid that wait by telling the marketplace at enrollment what income it expects, including the higher deferral. The plan cannot be told that.

The margin is worth watching. The Cliff radar marks the ACA row as nearby in each of those years, because income sits within $25,000 of the line. The family is about $10,400 under it in 2033, and the gap narrows to about $8,200 by 2042. A bonus, a sale in a [[term:brokerage|taxable account]], or a [[term:roth-conversion|Roth conversion]] could still push a year over it.

## What the plan leaves out

The plan computes the credit from its own people, income and premium. Several parts of the real rules are not in it.

- **Students.** The plan counts dependents until 19 and cannot extend that to 24 for a full-time student. Counting too few people only raises %FPL, so the error never makes a household look more eligible for help than it is.
- **The benchmark premium.** Unless a phase gives a benchmark of its own, the plan treats its premium as the benchmark silver plan. The dollars are an estimate of the credit and not a quote.
- **Medicaid, cost-sharing reductions, and state subsidies.** None is modeled, nor is an employer offer of coverage that would rule the credit out.
- **Who is in the tax household.** The plan's household is its people. Two owners who do not file jointly would really be two households, and the plan cannot tell whether a second owner is a spouse.
- **The law after 2026.** The 400% line returned for 2026 when the larger credits of 2021 to 2025 expired. Congress could change it again, and the plan follows the rules in force for 2026 in every later year.
