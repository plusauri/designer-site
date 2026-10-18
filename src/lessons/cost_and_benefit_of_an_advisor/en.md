<!--
tutilis-return: lessons/cost_and_benefit_of_an_advisor/prose/en.md
tutilis-locale: en source
-->
# Cost and benefit of an advisor

Nadia is 61 and Owen is 59. They have saved $1.66 million across two 401(k)s, a [[term:roth|Roth]] [[term:ira|IRA]], a joint [[term:brokerage]] account and a savings account, with about two thirds of it in stocks. Both plan to stop working in 2030, and they spend about $110,000 a year. A friend has introduced them to an advisor she trusts, who charges 1% of [[term:aum|assets under management]] each year.

They have two questions. What does a fee like that add up to over a whole retirement? And what would they get for it? This lesson answers the first with a what-if in [[nav:transforms]], which shows the fee as its own line in the plan's cash flow and shows what it does to the money left at the end. It answers the second with the same plan, by pricing one of the common, expensive mistakes that good advice exists to prevent. It closes with the practical side of hiring someone: the kinds of advisors, how each is paid, how to tell when a recommendation earns a commission, and what the letters after a name mean.

The lesson is not an argument for or against advisors. Many people do very well with one, and many do very well without one. The point is that both the fee and the mistakes have a price, and a plan can show you both.

It opens two plans:

- [Invested](#canvas-dossier:advisor_fee_invested) is Nadia and Owen's plan as it stands, with no advisor and no fee.
- [Sat in cash](#canvas-dossier:advisor_fee_cash) is the same couple after a market scare, with every account moved into a money market fund and left there. They still have no advisor and pay no fee.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **How is a typical advisor fee charged, and how big is it in dollars?** See [What a fee looks like](#what-a-fee-looks-like).
2. **Where do I try an advisor fee on my own plan?** See [Find the what-if](#find-the-what-if).
3. **Where does the fee show up in the forecast?** See [The fee as its own line](#the-fee-as-its-own-line).
4. **Why does a 1% fee cost much more than 1% of my savings?** See [What compounding adds](#what-compounding-adds).
5. **What changes if the fee is 0.5%, or a flat amount?** See [A smaller fee](#a-smaller-fee) and [A flat fee instead](#a-flat-fee-instead).
6. **What can a mistake cost compared with the fee?** See [What mistakes cost](#what-mistakes-cost).
7. **What is advice actually worth, according to the research?** See [What advice can be worth](#what-advice-can-be-worth).
8. **What kinds of advisors are there, and how are they paid?** See [Kinds of advisors](#kinds-of-advisors) and [How advisors are paid](#how-advisors-are-paid).
9. **How can I tell whether an advisor earns commissions?** See [Spotting commissions](#spotting-commissions).

</div>
</aside>

## What a fee looks like

Most advisors who manage investments charge a share of the money they manage. The common rule of thumb is 1% a year, and Kitces Research found that the [[term:median]] fee really is about 1% for portfolios up to $1 million. Fees usually step down on larger balances, so the median for households with more than $1 million is closer to 0.85%. Advisors also discount for clients they know well or for larger relationships, so 0.5% is a real number too.

The fee is usually billed every quarter and taken straight from the account. It is charged on the balance, so it is owed in a year when the market falls as well as in a year when it rises. As the portfolio grows, the fee grows with it in dollars.

For Nadia and Owen, 1% of their savings in the first year of the plan is about $18,500. By 2035, when both are retired and claiming Social Security, it is about $22,600 a year. Neither figure looks alarming beside $110,000 of spending. The rest of this lesson shows why the total over a retirement is much larger than those yearly figures suggest.

## Find the what-if

To try a fee on a plan, open [[nav:transforms]] and unfold **Modifications**. The Modifiables card opens on the **Global** tab, which lists the what-ifs that apply to the whole plan. One of them is **Advisor fee**. Select it:

[[img:advisor-fee-modifiables|control]]

The editor beside the card holds the fee. Switch it on and it opens in **% of AUM** mode at 1%. You can change the rate to any figure you are quoted, such as 0.5% for a discounted fee or 1.25% for a smaller account.

[[img:advisor-fee-editor-aum|control]]

The other mode, **Fixed / yr**, charges a set dollar amount each year and grows it at a rate you choose. That is how a flat-fee or retainer advisor bills, and the section [A flat fee instead](#a-flat-fee-instead) uses it.

Nothing in the plan itself changes. Transforms shows the plan as authored under *Original* and the plan with the fee under *Modified*, so the fee is the only difference between the two sides.

## The fee as its own line

The fee is paid like any other bill. Each year it is added to the plan's outflows, and the money to pay it comes from the same place the rest of the spending comes from: income first, then sales from the accounts. Here is the cash-flow comparison with 2035 selected:

[[img:advisor-fee-cash-flow]]

The Modified side has a gray **Advisor fee** band under the spending in every year of the plan. In 2035 the cash-flow statement lists it as its own line, $22,594, beside $144,827 of living expenses in that year's dollars. While Nadia and Owen are working, their salaries cover it. Once they retire, every dollar of it is sold from their savings.

A fee schedule shows the rate. This line shows the dollars, year by year, in the plan you actually have.

## What compounding adds

The yearly line is only half of the cost. A dollar that pays the fee in 2030 is a dollar that never grows again, and neither do the returns it would have earned in 2031 and every year after that. The balance-sheet comparison shows that second cost:

[[img:advisor-fee-balance-sheet]]

The two sides start close together, and the gap between them widens every year. On the [[term:gmf|GMF]] path, the forecast that takes each year's expected return, net worth at the end of the plan in 2059 is about $3.51 million with no fee and about $1.27 million with a 1% fee. The fees themselves add up to about $715,000 over those 33 years. The gap at the end is about $2.24 million, roughly three times what was paid, because each dollar of fee also takes its future growth with it.

<aside class="lesson-saying" data-saying="small-leak">

A 1% fee is about $18,500 in the first year, small beside $110,000 of spending. Charged every year for 33 years, it adds up to about $715,000 paid and about $2.24 million less at the end.

</aside>

<details class="lesson-math">
<summary class="lesson-math-label">The math — why a 1% fee takes more than 1%</summary>
<div class="lesson-math-body">

Suppose a portfolio earns a return \(g\) each year and pays a fee \(f\) on its balance. After one year a dollar becomes \((1+g)(1-f)\) instead of \(1+g\), so after \(n\) years the portfolio is smaller by the factor

\[
(1-f)^n
\]

For \(f = 1\%\) and \(n = 33\) years, \(0.99^{33} \approx 0.72\). A portfolio left alone for that long ends about 28% smaller than it would have without the fee, whatever the market does. Nadia and Owen's gap is larger than 28% because they are also spending from the portfolio, so the fee takes a growing share of a balance that is shrinking for other reasons too.

</div>
</details>

The expected path is only one of many. The [[term:monte-carlo]] simulation runs the plan through 1,000 possible market histories and counts how many end with the money lasting. Here is that count, the [[term:success-rate]], with no fee and with a 1% fee:

[[img:advisor-fee-odds-one]]

The chance of success falls from about 92% to about 73%. That is a large change, and it is honest to say so. This plan spends a fairly full $110,000 a year, so any steady new cost moves it. A household spending less from the same savings would feel the same fee less, and one spending more would feel it more.

## A smaller fee

Now set the rate to 0.5%, the kind of fee an advisor might charge a larger client or someone they know well:

[[img:advisor-fee-odds-half]]

The chance of success falls from about 92% to about 83%, less than half the drop that 1% causes. On the expected path the plan ends with about $2.39 million instead of $3.51 million, and the fees paid add up to about $425,000.

Every what-if this lesson tries on the invested plan is in one table, with 1,000 paths for each row:

| Advisor fee | Chance of success | Net worth in 2059, expected path | Fees paid over the plan, expected path |
|---|---:|---:|---:|
| None | 92% | $3.51 million | $0 |
| 0.5% of assets | 83% | $2.39 million | about $425,000 |
| 1% of assets | 73% | $1.27 million | about $715,000 |
| 1.5% of assets | 61% | $0.42 million | about $895,000 |
| $6,000 a year, growing 3% | 83% | $2.76 million | about $330,000 |

Each half point of fee costs this plan roughly ten points of success. When an advisor offers a lower rate, that is the scale of what the discount is worth over a retirement like this one.

## A flat fee instead

Not every advisor charges a percentage. A flat-fee or retainer planner charges a set amount each year, often a few thousand dollars, whatever the size of the portfolio. Switch the editor to **Fixed / yr** to try one. Here it charges $6,000 in the first year and grows the amount 3% a year:

[[img:advisor-fee-editor-fixed|control]]

[[img:advisor-fee-odds-fixed]]

For Nadia and Owen this lands close to the 0.5% fee: about 83% success, and about $2.76 million at the end of the expected path. A flat fee does not grow when the portfolio grows, so it tends to favor larger portfolios. It also does not shrink when the market falls, so in a bad decade it takes a larger share of what is left. Which structure is cheaper for you depends on the size of your savings, and the editor answers that for your own plan in a few seconds.

## What mistakes cost

The numbers so far show only one side of the decision. An advisor is paid to help a household avoid mistakes, and mistakes have a price too. One of the most common and most expensive is selling out of the market after a frightening drop and never getting back in.

Switch to [Sat in cash](#canvas-dossier:advisor_fee_cash). This is the same couple, with the same savings, income and spending, but every account is in a money market fund. They have no advisor and pay no fee. Here are the two plans side by side, the cash plan on the left and the invested plan *with a 1% fee* on the right:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:advisor-fee-cash-odds]]

*[Sat in cash](#canvas-dossier:advisor_fee_cash), no fee: about 69% of futures succeed.*

</div>
<div class="lesson-img-cell">

[[img:advisor-fee-invested-odds]]

*[Invested](#canvas-dossier:advisor_fee_invested) with a 1% fee: about 73% of futures succeed.*

</div>
</div>

The two plans are close on one measure and far apart on the other, and the difference between the measures matters. The chance of success only asks whether the money lasts to the end of the plan. By that measure the invested plan with a 1% fee is ahead, 73% against 69%. The cash plan rarely collapses, because cash does not crash, but it rarely grows either, so it fails slowly in a large share of futures. The other measure is how much is left. On the expected path the cash plan ends with about $382,000 and the invested plan with a fee ends with about $1.27 million, more than three times as much:

[[img:advisor-fee-cash-balance-sheet]]

Putting all three versions of the couple side by side shows where each choice lands:

| Nadia and Owen | Chance of success | Net worth in 2059, expected path |
|---|---:|---:|
| Invested, no advisor, no mistake | 92% | $3.51 million |
| Invested, paying a 1% advisor fee | 73% | $1.27 million |
| Sat in cash, no advisor, no fee | 69% | $0.38 million |

The best outcome in the table is the first row. A household that stays invested through every crash and pays no fee does better than either of the others, and many self-directed investors do exactly that. The fee is the price of the second row, and the mistake is the price of the third. Read this way, the comparison is a kind of insurance question. Paying 1% costs this couple about $2.21 million against their best case. Making this one mistake and keeping it costs about $3.1 million. An advisor is worth the fee to a household that would otherwise land in the third row, and not to one that would stay in the first.

Every row in the table pays for something [[saying:free-lunch]]. The fee costs about $2.21 million against the best case, and the safety of cash costs about $3.1 million. The first row avoids both, and its price is the nerve to stay invested through every crash.

This comparison is not a claim that an advisor would certainly have kept Nadia and Owen invested, or that everyone who goes without an advisor panics. It is a way to put the two prices side by side on the same plan, so that you can judge honestly which row you are likely to end up in.

Other mistakes have their own prices, and the product can show several of them:

- **Selling at the bottom of a crash.** [Timing a crash](/learn/sequence_of_returns_crash_timing) replays a real crash over a plan, which is the moment panic selling happens.
- **Missing a [[term:roth-conversion|Roth conversion]] window.** The years between retirement and the first required distribution are often the cheapest years a household will ever have to move money into a Roth account. [Roth conversion in the window](/learn/roth_conversion_window) prices those years.
- **Carrying too much risk into retirement.** [Getting safer as retirement approaches](/learn/safer_approaching_retirement) compares plans that do and do not lower their stock share.
- **Leaving an estate unplanned.** Beneficiary designations, titling and a will cost little to get right and a great deal to get wrong, and they sit outside any forecast.

## What advice can be worth

Several researchers have tried to put a number on what an advisor adds. Their answers are useful and should be read with care, because some of them come from firms that sell advice.

- **Vanguard's Advisor's Alpha** estimates that an advisor following good practices can add "about 3%" a year in net returns. The largest single piece, up to 1.5 points, is behavioral coaching that keeps a client from abandoning the plan. Vanguard is clear that this value is not earned evenly every year. It arrives mostly in a few moments of panic or euphoria.
- **Morningstar's "gamma"** research by David Blanchett and Paul Kaplan estimated that better retirement-income decisions, such as withdrawal strategy, asset location and annuity use, could produce about 22.6% more retirement income, which they equated to about 1.59 points of extra return a year.
- **Morningstar's "Mind the Gap"** study measures how much investors lose to their own timing. Its 2025 edition found that the average fund investor earned about 1.1 points a year less than the funds they owned over the ten years through 2024, because money tended to arrive after gains and leave after losses.

There is honest disagreement about these numbers. A 2026 paper in the *Financial Analysts Journal* re-examined the Mind the Gap method and put the cost of bad timing closer to 0.1 point a year. Vanguard's 3% assumes a client who would otherwise make each of the mistakes the paper describes, and many people would not.

The fair conclusion is narrower than any single estimate. Advice is worth the most to the household that would otherwise make an expensive mistake, and the least to one that would not. The what-ifs in this lesson let you price both sides on your own plan, with your own numbers.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

Since October 2019, the CFP Board's Code of Ethics has required every CFP professional to act as a fiduciary whenever they give financial advice to a client. That includes advice about insurance and annuities, which many other rules do not cover. The Board began enforcing the standard in June 2020.

</div>
</aside>

## Kinds of advisors

"Financial advisor" is not a protected title in the United States. Anyone can use it, so the title alone tells you very little. What tells you more is how the person is registered, because that decides the legal standard they work under and how they are allowed to be paid.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — kinds of advisors</summary>
<div class="lesson-reference-body">

| Kind | Registered as | Standard of care | How usually paid |
|---|---|---|---|
| Registered investment adviser (RIA) | Investment adviser with the SEC or a state | Fiduciary for the whole relationship | A share of assets, a flat fee, a retainer or hourly |
| Broker-dealer representative | Registered representative of a FINRA member firm | Best interest at the time of each recommendation (Regulation Best Interest) | Commissions, sales loads and other transaction fees |
| Hybrid, or dual-registered | Both of the above | Depends on which role the person is acting in for each account | Some accounts on fees, some on commissions |
| Robo-advisor | Usually an RIA | Fiduciary, applied through software | A small share of assets, often a quarter of a percent or less |
| Insurance agent | Licensed by the state insurance department | Varies by state and by product | Commissions from the insurer |
| CPA or attorney | Licensed by a state board | Professional duties of the license | Hourly or per project |

</div>
</details>

A [[term:fiduciary]] must put your interests ahead of its own across the whole relationship, and the forms in [Spotting commissions](#spotting-commissions) say which standard a firm is held to. None of these arrangements is good or bad in itself. A commission-paid broker can be the cheapest choice for someone who buys a few funds and holds them for decades, and a fee-only planner can be the most expensive choice for someone who needs very little help. What matters is knowing which arrangement you are in, so that you can judge the advice with the incentives in view.

## How advisors are paid

The fee is how the advisor earns a living, and each way of paying has its own strengths and its own pull on the advice.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — how advisors are paid</summary>
<div class="lesson-reference-body">

| Structure | How it works | Strength | What to watch |
|---|---|---|---|
| Share of assets (AUM) | A percentage of the portfolio each year, often about 1% | The advisor does better when the portfolio does | It is costly on large balances, and it can discourage advice to pay off a mortgage or buy an annuity, since both shrink the managed assets |
| Flat fee or retainer | A set amount each year, whatever the portfolio | The cost is predictable and does not grow with wealth | It can be expensive for a small portfolio |
| Hourly or per project | Pay for a plan or a question, then carry it out yourself | You pay only for the help you use | Nobody is watching the plan between meetings |
| Commission | Paid by the product company when you buy | There may be no separate bill at all | There is a pull toward products that pay more, and the cost can be hidden inside the product |
| Subscription | A monthly fee for ongoing planning, common with younger clients | The cost is low and steady | The service level varies widely |

</div>
</details>

The Transforms editor covers the first two directly, because they are the ones that recur every year: **% of AUM** for an asset-based fee, and **Fixed / yr** for a flat fee or retainer. An hourly engagement is a one-time cost that you can enter as a single expense in the plan. A commission is usually built into a product's price, so it shows up as a higher cost or a lower return on that holding.

<details class="lesson-advanced">
<summary class="lesson-advanced-label">Going deeper — the costs a fee schedule leaves out</summary>
<div class="lesson-advanced-body">

The advisory fee is often not the whole cost. The funds an advisor uses charge their own expense ratios, and some platforms add trading or custody fees. Kitces Research estimates that once those are counted, the typical all-in cost of an advised portfolio is about 1.65% a year rather than 1%. To try that on a plan, set the AUM rate to your advisor's fee plus the weighted expense ratio of the funds you would hold.

</div>
</details>

## Spotting commissions

Most people never ask how their advisor is paid, and most advisors are glad to tell them. These are the places to look, and every one of them is free.

**Form CRS.** Every SEC-registered investment adviser and broker-dealer must give retail clients a short relationship summary, usually two to four pages. It says whether the firm offers advisory accounts, brokerage accounts or both, how it is paid, what standard of care it owes you, and whether it has a disciplinary history. It also lists conversation starters for you to ask, such as "How might your conflicts of interest affect me, and how will you address them?" You can find any firm's Form CRS on [Investor.gov](https://www.investor.gov/CRS).

**Form ADV Part 2A.** A registered investment adviser also files a longer brochure that lists its fee schedule and describes its conflicts in detail. It is on the SEC's [Investment Adviser Public Disclosure](https://adviserinfo.sec.gov/) site.

**FINRA BrokerCheck.** [BrokerCheck](https://brokercheck.finra.org/) shows a person's registrations, licenses, employment history and any customer complaints or disciplinary actions. If someone is registered as a broker, they can be paid commissions.

**"Fee-only" and "fee-based."** These sound alike and mean different things. A fee-only advisor is paid only by clients and takes no commissions from anyone. A fee-based advisor charges fees *and* can also earn commissions, usually because they are dual-registered. Neither label is defined in securities law, so the forms above are what settle the question.

Three plain questions cover most of it:

1. Are you a fiduciary for everything you recommend to me, all of the time?
2. How are you paid, in total, and does anyone other than me pay you?
3. What will I pay each year in dollars, including the funds you would use?

An advisor who answers all three clearly and in writing is telling you something good about how they work.

## Credentials

Credentials vary a great deal in what they require. Some take years of study, an exam and continuing education, and some take a weekend course. FINRA's [Professional Designations](https://www.finra.org/investors/professional-designations) database lists hundreds of them, with what each one requires and how to check it.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — common credentials and licenses</summary>
<div class="lesson-reference-body">

| Letters | What it is | Issued by | What it signals |
|---|---|---|---|
| CFP | Certified Financial Planner | CFP Board | Broad personal financial planning. Requires a bachelor's degree, coursework, an exam, several years of experience, and a fiduciary duty when giving advice |
| CPA | Certified Public Accountant | State boards of accountancy | Tax and accounting expertise |
| PFS | Personal Financial Specialist | AICPA, for CPAs only | A CPA who has added financial planning training and experience |
| ChFC | Chartered Financial Consultant | The American College | Financial planning coursework, similar in scope to the CFP |
| CFA | Chartered Financial Analyst | CFA Institute | Deep investment analysis. Three demanding exams, aimed more at portfolio management than at household planning |
| RICP | Retirement Income Certified Professional | The American College | Retirement income planning, including Social Security and withdrawal strategy |
| Series 7 | General Securities Representative license | FINRA | Allowed to sell securities and earn commissions on them |
| Series 65 | Uniform Investment Adviser Law exam | NASAA, given by FINRA | Allowed to give investment advice for a fee as an investment adviser representative |
| Series 66 | Uniform Combined State Law exam | NASAA, given by FINRA | Taken with the Series 7. Allows a person to act as both broker and adviser |

A license is a permission to do business and a credential is a claim of expertise, and the two answer different questions. A Series 7 says how someone can be paid. A CFP or CFA says what they have studied. Holding the CFP, ChFC, CFA or PFS lets a person skip the Series 65 exam in most states.

</div>
</details>

## Sources

The figures and rules in this lesson come from these publications. Fee surveys and research on the value of advice are updated regularly, so a newer edition may move the numbers a little.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Works cited — the publications behind the figures</summary>
<div class="lesson-bibliography-body">

- Michael Kitces, ["Financial Advisor Fees Comparison: All-In Costs for the Typical Financial Advisor"](https://www.kitces.com/blog/independent-financial-advisor-fees-comparison-typical-aum-wealth-management-fee/), for the median AUM fee by portfolio size and the all-in cost of advice.
- Vanguard, [*Putting a Value on Your Value: Quantifying Vanguard Advisor's Alpha*](https://corporate.vanguard.com/content/dam/corp/articles/pdf/putting_value_on_your_value_quantifying_vanguard_advisors_alpha.pdf), July 2022.
- David Blanchett and Paul Kaplan, "Alpha, Beta, and Now… Gamma," *The Journal of Retirement*, 2013. Summarized by Morningstar in ["What Is Gamma?"](https://www.morningstar.ca/ca/news/190932/what-is-gamma.aspx).
- Morningstar, *Mind the Gap 2025*, for the investor return gap over the ten years through 2024.
- Jon A. Fulkerson, Bradford Jordan, Timothy Brandon Riley and Qing Yan, ["Bad Timing Does Not Cost Investors 15% of Their Funds' Returns: An Examination of Morningstar's 'Mind the Gap' Study"](https://rpc.cfainstitute.org/research/financial-analysts-journal/2026/bad-timing-does-not-cost-investors-funds-returns), *Financial Analysts Journal* 82, no. 3, May 2026.
- U.S. Securities and Exchange Commission, [Relationship summaries (Form CRS or Form ADV Part 3): Investor Bulletin](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/relationship-summaries-form-crs-or-form-adv-part-3-investor-bulletin), and [Investor.gov](https://www.investor.gov/CRS) for any firm's summary.
- SEC, [Investment Adviser Public Disclosure](https://adviserinfo.sec.gov/), for Form ADV.
- FINRA, [BrokerCheck](https://brokercheck.finra.org/), and [Professional Designations](https://www.finra.org/investors/professional-designations).
- FINRA, [Series 66 — Uniform Combined State Law Exam](https://www.finra.org/registration-exams-ce/qualification-exams/series66), for the Series 7, 65 and 66 licenses.
- CFP Board, [Code of Ethics and Standards of Conduct](https://www.cfp.net/ethics/code-of-ethics-and-standards-of-conduct), for the fiduciary duty of CFP professionals.

</div>
</details>

## Where to go next

| Lesson | Why |
|---|---|
| [Erin On The Wage Cap](/learn/erin_on_wage_cap) | The same Original and Modified comparison, used to price a policy change |
| [Timing a crash: cash reserve or rebalancing?](/learn/sequence_of_returns_crash_timing) | A real market crash laid over a plan, which is the moment an advisor earns the most |
| [Roth conversion in the window](/learn/roth_conversion_window) | One of the planning decisions that is easiest to miss without help |
| [Getting safer as retirement approaches](/learn/safer_approaching_retirement) | How much stock to hold as the retirement date nears |
