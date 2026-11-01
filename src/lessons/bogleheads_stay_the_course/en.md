<!--
tutilis-return: lessons/bogleheads_stay_the_course/prose/en.md
tutilis-locale: en source
-->
# Stay the course

"Stay the course" is the advice [[term:bogleheads|John Bogle]] gave for market falls, and it is easy to agree with on a calm day. It is harder in a year like 2008, when a balanced portfolio loses a fifth of its value and every headline says it could get worse. This lesson puts that crash into a saving couple's plan five years before they retire, and compares two versions of them: one that keeps contributing and rebalancing, and one that moves its retirement accounts to cash after the fall and buys back in once things feel safe. Then it slides the crash to other years, to ask whether selling on a schedule ever works.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **Who are the Marshes, and what do the two plans do differently?** See [Two versions of the Marshes](#two-versions-of-the-marshes).
2. **How do I put a crash into a plan?** See [Put the crash in](#put-the-crash-in).
3. **What does sitting through it look like?** See [Sitting through it](#sitting-through-it).
4. **What does selling cost, and when does the cost arrive?** See [Selling it](#selling-it).
5. **Would selling ever have worked?** See [Move the crash](#move-the-crash).
6. **How do I make staying the course easier?** See [Write the rule down](#write-the-rule-down).
7. **What does the plan leave out?** See [What the plan leaves out](#what-the-plan-leaves-out).

</div>
</aside>

## Two versions of the Marshes

Robin and Jae Marsh are the couple from [Costs you keep paying](/learn/bogleheads_costs_you_keep). They are 52 and 50, they save about $45,000 a year, and they hold about $1.1 million in three index funds: roughly 61% US stocks, 16% international stocks, 22% bonds and a little cash. Robin retires in 2036.

- [Stayed the course](#canvas-dossier:marsh_stay_the_course) holds that mix every year. When a fall leaves stocks below their share, it [[term:rebalance|rebalances]] inside the [[term:401k|401(k)s]] and [[term:roth|Roth]] IRAs, selling some bonds to buy stocks.
- [Sold after the fall](#canvas-dossier:marsh_sold_after_the_fall) is the same plan until the fall. Then it moves the 401(k)s and IRAs to cash for three years, and in 2035 it goes back to the original mix.

The second plan sells inside the retirement accounts, which is where most savers' money is and where a sale owes no tax. The brokerage account stays invested in both. The difference between the plans is the decision, not a tax bill.

## Put the crash in

The plans contain no crash of their own. A crash is laid over a plan in [[nav:transforms]], with the **Sequence-of-returns risk** modifiable: pick a historical episode and the year it starts.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

[[img:stay-sor-editor|control]]

</div>
</details>

Choose the Global Financial Crisis of 2007 and start it in 2031. Its first year is 2007, the market's last good year, so the large fall lands in 2032, and the recovery years of 2009 and 2010 follow. [[term:market-crash|Market crash]] episodes replay real years in order, for every simulated path. [Timing a crash](/learn/sequence_of_returns_crash_timing) shows the same tool on a household that is already retired.

## Sitting through it

Here is the plan that stays the course, with the crash in place.

[[img:stay-bs-stay]]

*Stayed the course, with the 2007 crisis starting in 2031 (the red years on the axis). Net worth falls sharply in 2032 and is back above its pre-crash level by 2034. Robin retires in 2036 with about $2.8 million.*

Two things work for the Marshes while prices are low. Their contributions keep buying, and each dollar buys more shares than it did before the fall. And the rebalancing sells bonds, which held up, to buy stocks, which fell. Both are a purchase at a discount, and both are repaid in the recovery years. On this plan the crash leaves the Marshes slightly *better* off at the [[term:median|median]] than a plan with no crash at all, because the episode ends with years of strong recovery that they were fully invested for.

## Selling it

Switch to [Sold after the fall](#canvas-dossier:marsh_sold_after_the_fall). The fall is the same. What follows is not.

[[img:stay-alloc-sold]]

*The asset mix of Sold after the fall. From 2032 to 2034 about 70% of the portfolio is cash: the retirement accounts were sold after the fall, while the brokerage stayed invested. In 2035 the mix returns to its targets.*

[[img:stay-bs-sold]]

*Sold after the fall, with the same crash. The fall in 2032 is the same, but the recovery years pass the cash by. Robin retires in 2036 with about $2.1 million, about $600,000 less than the plan that stayed, and the gap keeps widening for the rest of their lives.*

The cost did not come in the year they sold. In 2031 the two plans were worth exactly the same, and the fall in 2032 hit both. The cost came in the years they were out: the recovery that followed the bottom happened without them, and when they bought back in, they bought at higher prices than they sold at. A temporary fall became a permanent loss.

Over 1,000 simulated futures with the same crash, the difference shows on the outcome cards.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:stay-nw-stay]]

*Stayed the course: a median ending net worth of about $7.3 million, and success on about 90% of paths.*

</div>
<div class="lesson-img-cell">

[[img:stay-nw-sold]]

*Sold after the fall, on the same axis: a median of about $3.1 million, and success on about 74% of paths.*

</div>
</div>

## Move the crash

The plan that sold has its dates written in: cash from 2032 to 2034, whatever the market does. Slide the crash and see what that rule does when the fall comes at another time.

| Crash starts | Stayed the course (median) | Sold after the fall (median) |
|---|---:|---:|
| 2029 | about $7.3 million | about $5.6 million |
| 2031 | about $7.3 million | about $3.1 million |
| 2033 | about $7.3 million | about $7.4 million |

With the crash in 2029, the fall lands in 2030 and the plan sells two years later, into the recovery, and misses the rest of it. With the crash in 2033, the crash happens to arrive while the plan is already in cash, and it does slightly better. That one row is market timing working, and it works only because the crash landed inside the one window when the plan was out. Nobody gets to choose that window in advance. A decision made during a fall is made after the fall, which is the row that costs the most.

## Write the rule down

The plan that stayed the course did nothing clever. It held a written target and rebalanced back to it every year. That is the whole of an investment policy statement, a plan many do-it-yourself investors write before they need it: a target mix, when to rebalance, and what they will do in a crash. In Tutilis the target is the plan's glide path, under [[nav:assumptions]], so the rule lives in the plan itself.

<aside class="lesson-saying" data-saying="stay-the-course">

On the Marshes' plan the saying is worth about $4 million at the median: the version that held its mix ends near $7.3 million, and the version that sold ends near $3.1 million.

</aside>

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Desktop app only</summary>
<div class="lesson-desktop-only-body">

[[img:stay-glide-path|control]]

</div>
</details>

[[jump:glide-path]]

A [[term:glide-path|glide path]] with one target held every year is a constant mix; one that steps down toward retirement is the usual shape for a household that wants less risk later. [Glide paths through retirement](/learn/glide_paths_through_retirement) compares those shapes.

## What the plan leaves out

- **The crash is one historical episode.** Other falls have been shallower, deeper, quicker or slower to recover. The Sequence-of-returns risk modifiable offers several.
- **The sale is inside the retirement accounts only.** Selling in a [[term:brokerage|taxable account]] would also [[term:realized-gain|realize]] gains and owe tax on them.
- **Cash earns the money market rate,** and the plan buys back at the year's price. Buying back in happens on a particular day, often after the best days of a recovery have already passed.
- **People are not plans.** The hardest part of staying the course is the year itself, which no forecast can make easier. Writing the rule down beforehand is the closest thing to it.

## What to take away

A crash that arrives while you are still saving is a sale you get to buy into, as long as you keep buying and rebalancing. Selling after the fall turns a temporary loss into a permanent one, and the cost arrives in the recovery years you sit out. A rule to sell on a schedule wins only when the next crash happens to land while you are out of the market, which is a window nobody can pick.
