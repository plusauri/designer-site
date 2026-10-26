<!--
tutilis-return: lessons/charts_and_tables/prose/en.md
tutilis-locale: en source
-->
# Reading the charts and tables

A forecast is a story about a household, told one year at a time. The [[nav:forecaster]] tells it through a handful of views, and each view answers a different question. The balance sheet says what the household is worth. The cash flow says what came in and what went out. Money Movements says which accounts paid for the difference, and the tax cards say where each tax came from.

This lesson is a tour of those views. It is mostly about the tool, and it touches the finance only where the finance tells you which card to open. The Springfield household on the [[term:canvas]] is a married couple in Ohio who both work, own a house with a mortgage, and draw Social Security in retirement, so every view has something on both of its sides.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Where do the charts and tables live, and how do I turn them on?** See [Where the views live](#where-the-views-live).
2. **Why does every chart have a top half and a bottom half?** See [Two charts in one](#two-charts-in-one).
3. **What story does the balance sheet tell?** See [Balance sheet: net worth](#balance-sheet-net-worth).
4. **What story does the cash flow tell?** See [Cash flow: in and out](#cash-flow-in-and-out).
5. **How do the two connect?** See [Money Movements joins them](#money-movements-joins-them).
6. **How do these views compare with an accountant's statements?** See [Three statements](#three-statements).
7. **What do the tables add that the charts do not?** See [Tables and their hovers](#tables-and-their-hovers).
8. **Where do I see what changes in a given year?** See [The year card](#the-year-card).
9. **Where do I look for a particular tax?** See [The tax cards](#the-tax-cards).
10. **How do I get from a word to the card that shows it?** See [Find a card by its word](#find-a-card-by-its-word).

</div>
</aside>

## Where the views live

Every view in this lesson is a card in **Forecast Detail**, the first section of the [[nav:forecaster]]. **[[key:ForecastDetail]]** opens it. Along its header runs a row of chips, one per card, and each chip turns its card on or off. The first row holds the core views: [[nav:bs-chart]] and [[nav:bs-table]] for the balance sheet, [[nav:cf-chart]] and [[nav:cf-table]] for the cash flow, [[nav:si-chart]] and [[nav:si-table]] for Money Movements, [[nav:rec]] for the reconciliation, and **Yr** for the year card. The second row holds the tax lenses: [[nav:taxes]], [[nav:brackets]] and [[nav:cliffs]].

[[img:charts-tables-fd-chips|control]]

The 📈 chips are charts that cover every year of the plan, and the ▦ chips are tables that show one year in full. The two work as a pair. You spot a year on a chart, click its bar to select it, and the tables below switch to that year. The chips you turn on are remembered, so the Forecaster opens the way you left it.

When you want to see everything without rearranging your chips, the [[nav:peek]] menu opens every chart, every table, or each chart beside its table over the app. Press **[[key:Peek]]** and then a letter.

## Two charts in one

Many planning tools draw net worth as one chart, income as a second and spending as a third. Tutilis draws the balance sheet and the cash flow as two-sided charts instead. What the household has, or what comes in, grows up from the year axis. What it owes, or what goes out, grows down from the same axis on the same dollar scale. A thin black net line runs between the two halves.

Each chart carries both halves of its subject, and the net between them is the story.

Reading one chart instead of two or three has a practical advantage. A tall bar on top does not reassure you unless you also see what sits under it, and on a two-sided chart you cannot see one without the other. The net line then does the arithmetic for you, year after year.

Both charts share two habits that are worth learning once. The 📅 button at the left end of the year axis switches the labels from calendar years to each person's age, which is usually the more natural way to read a retirement. And every bar explains itself when you rest the pointer on it. Hold **Alt** to hide the tips while you move across a chart.

## Balance sheet: net worth

The [[nav:bs-chart]] answers the question "what is the household worth?" for every year of the plan. Its subject is [[term:net-worth]], everything owned minus everything owed.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-chart]]

[[img:charts-tables-bs-chart]]

Above the axis, each year's assets are stacked by kind. For Springfield the [[term:brokerage]] account is green, the [[term:traditional]] [[term:401k|401(k)]] is blue, the remaining accounts are gray, and the house sits on top in amber. Below the axis the mortgage hangs in red. It is short, because the loan is small next to the assets, and it shrinks every year until it disappears after 2047. A thin black bar stands beside each year's stack for as long as there is a liability to subtract, and the black net-worth line connects the tops.

The shape of that line is the story. Net worth climbs through the working years and keeps climbing well into retirement, because the accounts grow faster than the household draws on them. It peaks in 2063 and then bends down. The drop that follows is the plan's [[term:ltc|long-term care]], which arrives in 2064, and the cash flow chart in the next section shows it plainly.

Rest the pointer on a year and the tip lists the whole balance sheet for that year, from net worth at the top to each kind of asset and each kind of debt below it.

[[img:charts-tables-bs-chart-hover]]

The dollar figures on the chart are [[term:nominal]], so part of the climb is [[term:inflation]]. The Display menu in the top bar shows the same chart in today's dollars when you want the real picture.

## Cash flow: in and out

The [[nav:cf-chart]] answers a different question: "how did the household live this year?" Inflows grow up from the axis and outflows grow down, and the net is income minus expenses minus taxes.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

[[img:charts-tables-cf-chart]]

For Springfield the income bars are tall while both people work. They step down in 2041, when Homer retires, and again in 2045, when Marge does, and after that Social Security is the only income. Below the axis, living costs are amber, health costs are violet and taxes are red. The violet band swells in 2064, when long-term care begins.

The net line tells you something the balance sheet chart does not. It sits below the axis in every year, even in the working years, because this household spends more than its paychecks bring home. The balance sheet chart still climbs over those years, because the accounts earn more than the household draws from them. Reading the two charts together is how you see both facts at once.

Rest the pointer on a year and the tip names the year and each person's age, then the net, then the money in and the money out with each part on its own line.

[[img:charts-tables-cf-chart-hover]]

Which incomes and expenses get a band of their own is up to you. The **Segments** control in the card's toolbar picks the categories to break out, such as Social Security or college costs, and everything else is gathered into a "remaining" band. Choose the breakouts that tell the story you are reading.

## Money Movements joins them

When the cash flow is negative, the money has to come from somewhere, and when it is positive, it has to go somewhere. [[nav:si-chart]] shows where. Its card is called **Money Movements**, and it is the bridge between the two big charts. It shows the cash raised by selling holdings above the axis, and the cash parked by investing below it.

[[img:charts-tables-si-chart]]

The Springfield picture follows the story the cash flow chart told. Sales are small while both people work, grow after the retirements, and are joined in 2051 by the [[term:rmd|required minimum distributions]], the sales the tax law forces from the 401(k) once Homer turns 75. They are tallest in the long-term care years, when the household sells the most to pay for care. Every sale comes out of an account, so a cash shortfall on the cash flow chart becomes a shorter stack on the balance sheet chart.

The [[nav:si-table]] shows one year account by account and holding by holding: what was sold, what was invested, the balance after, and each one's share of the year's activity. Its last column, **Why**, gives the reason for every movement.

[[img:charts-tables-si-table-2030]]

The Why column is where a surprising number gets explained. In 2030 the plan sells a little from every account in proportion to its size, which is what its pro-rata withdrawal rule asks for. Homer is 54 that year, so the share that comes from the traditional 401(k) is an early withdrawal. Rest the pointer on that row's Why pill and the reasons are listed in full, the early withdrawal among them. The tax card later in this lesson shows the penalty it costs, and [Tax-account order vs pro-rata](/learn/springfield_tax_order) compares this rule with one that draws on the taxable accounts first.

## Three statements

Accountants describe a business with three standard statements, and the Forecaster's views line up with them closely.

- The **balance sheet** lists what is owned and what is owed at one moment. The [[nav:bs-chart]] draws one at the end of every year.
- The **income statement** lists what came in and what went out over a period, and its bottom line is what was saved. The net on the [[nav:cf-chart]] is that bottom line for a household.
- The **statement of cash flows** explains why the cash changed. It has three parts: operating activity, investing activity, and financing activity. The cash flow chart is the operating part. Money Movements is the investing part (sales and investments) and the financing part (borrowing).

A household's books are simpler than a company's, so the income statement and the operating part of the statement of cash flows nearly coincide. That is why Tutilis draws them as one chart.

The [[nav:rec]] card puts all three together for one year. It writes the year as a balance equation, every source of cash on the left and every use on the right, and draws the same year below it as a flow from each source, through the year's cash, to each use.

[[img:charts-tables-rec-2030]]

In 2030 Springfield's incomes, reinvested distributions and sales add up to exactly its expenses, taxes and investments. The equation always balances, which is what makes it useful. When a number on another card seems not to add up, this card shows where every dollar of the year went.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Companies publish a fourth statement too, the statement of changes in equity, which explains how the owners' stake moved during the year. For a household the owners' stake is net worth, and the black line on the balance sheet chart already traces how it moves from one year to the next.

</div>
</aside>

## Tables and their hovers

The tables show one year in full. They are where you read an exact amount, and where every line can tell you where it came from.

The [[nav:bs-table]] starts with net worth, then splits the assets into real assets and accounts, and ends with the liabilities. The **Holdings** chip in its toolbar opens each account into the funds it holds.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:charts-tables-bs-table-2030]]

Many amounts sit on a small pill marked **i**. Rest the pointer on the pill and the item's card opens beside it. On the balance sheet the card shows the end balance to the dollar, which the table rounds, above the item as the plan describes it. For an account that means its owner and each fund it holds, with its category, value and cost.

[[img:charts-tables-bs-row-card]]

The [[nav:cf-table]] does the same for the cash flow. It starts with the net, lists every income and every expense under its category, and lists the taxes by kind. Below the outflows it lists the sales that covered the year's shortfall, which are the same sales Money Movements explains.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:charts-tables-cf-table-2030]]

[[term:hover|Hover]] the pill on a cash flow line and you see the card that line was built from. When the line came from a generator, such as a salary or a living-expense phase, the card shows the generator's inputs. Hover a dividend or interest line and the card shows the calculation behind it: the holding's value times each of its yields.

Every table card also has a copy button, which copies the table as text you can paste into a spreadsheet or a note.

## The year card

The year card, **Yr** on the chip row, lists what changes in the selected year. It is grouped into life events, cash flows that start or end, and the contribution limits that apply. It is the card to open when a bar on a chart steps up or down and you want to know why.

[[img:charts-tables-year-events-2041]]

In 2041 Homer retires at 65 and starts Medicare, the retirement living costs replace the working ones, and Marge picks up a health plan of her own until she reaches Medicare age. That one card explains the step down in the income bars and the change in the health band on the cash flow chart. The same list appears in a tip when you rest the pointer on a year's label under either chart.

## The tax cards

The [[nav:taxes]] card shows how each of the year's taxes was worked out. In the app its title reads like **Taxes — 2030 (balance paid 2031)**. The tax on a year's wages is withheld during that year, and the rest of the year's tax, such as the tax on gains and withdrawals, is settled the following year. That is why the card's total does not match the Taxes line on the same year's cash flow, which shows what was actually paid in that year: its own withholding plus the previous year's balance.

[[img:charts-tables-tax-statements-2030]]

The card holds up to three statements, side by side when the card is wide enough, and each one answers different questions.

- **The federal statement** builds [[term:agi|adjusted gross income]] from its sources, shows [[term:magi]] beneath it, subtracts the [[term:standard-deduction]], and lists each tax with the amount it was charged on and the amount assessed. Look here for the income behind a Medicare [[term:surcharge]], for payroll taxes, for the [[term:niit|net investment income tax]], and for penalties. In 2030 the last line is the 10% [[term:early-withdrawal-penalty]] on the 401(k) sale that Money Movements explained.
- **The state statement** starts from the state's own base income and lists the adjustments the state makes. Ohio subtracts the interest on US Treasuries, which states may not tax, and adds a [[term:local-income-tax|local income tax]] on wages. Look here when moving to another state is the question, or when a source of income is taxed differently by the state than by the IRS.
- **The property statement** lists each home or other real estate at its market value with the rate it is taxed at, so the rate in effect is on the label of its row. Look here when a home is a large part of the plan, because [[term:property-tax]] is owed whether the home earns anything or not. [Property tax: the silent killer](/learn/property_tax_the_silent_killer) follows it across a retirement.

Under the statements, **Inspect US tax tables** opens the year's federal and state schedules, so you can check a [[term:bracket]] or a limit against the number it produced.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules]]

Two more lenses sit beside the Taxes chip, and each has a lesson of its own. [[nav:brackets]] stacks the year's income against the federal brackets and shows how much room is left before the next rate, which is the tool for planning conversions and withdrawals. [Filling the cheap buckets](/learn/filling_the_cheap_buckets) teaches it. [[nav:cliffs]] measures how close the year's income runs to each threshold where a cost jumps all at once, which Tutilis calls a [[term:cliff]]. A Medicare surcharge tier is one. [Cliff radar](/learn/cliff_radar_forecaster) teaches that one.

## Find a card by its word

All of these cards are only useful if you can find the right one quickly, and the Glossary is built for that. **[[key:Glossary]]** opens it, even while you are typing in a field. Search for a word and you get its definition, and below the definition a gold card titled **Where it is in the app**.

[[img:charts-tables-glossary-net-worth]]

The Where card lists the paths to every place the word appears. Some words have only an output. Net worth shows in the balance sheet table's top row and in Bird's Eye. Other words have up to three kinds of path: where you enter the value in the plan, where you try a change as a what-if in Transforms, and where the result shows in the forecast. Click a path and the Glossary closes, the app walks the path, and the card it names opens in close-up. With no plan open the paths are shown but cannot be followed.

[[img:charts-tables-glossary-property-tax]]

Property tax shows all three. It is entered on a real asset in the plan, tried as a what-if in Transforms, and shown in two places in the forecast, on the property statement of the Taxes card and on the Property tax line of the cash flow table. That makes the Glossary the quickest way into an unfamiliar card. Look up the word you know, and let the Where card take you to the place that shows it.

[[jump:property-tax]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

The **Where you enter it** paths lead to the plan's own editors, and only the desktop app has those. The plans in the Learning Center are read-only teaching plans, so on the canvas beside this lesson those paths have nowhere to go. In the desktop app, where you enter your own household's figures, the same path opens the field where the value is set, such as the property tax on your home in the Dossier.

</div>
</details>
