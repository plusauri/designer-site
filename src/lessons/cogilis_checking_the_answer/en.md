<!--
tutilis-return: lessons/cogilis_checking_the_answer/prose/en.md
tutilis-locale: en source
-->
# Checking the answer: every number has a command

A Cogilis assistant is held to one rule above the others: it never states a number it did not get from the engine. Every number in its answer comes with the command that produced it, written so you can paste it. That rule is only worth something if you can use it, and this lesson shows how.

The Springfields, the household on the [[term:canvas]], asked their assistant two things. How much tax will we pay in our first year of retirement, and does the plan have room to spare? This is the answer it gave:

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant’s answer</p>
<div class="lesson-ai-reply-body">

**Your first retired year and your margin.** On your plan as it stands, about two simulated paths in three succeed (`forecast.outcome`). In 2045, your first year without wages, you pay about $30,000 in tax (`forecast.cash-flow --year 2045`). The usual rule of thumb is that a retiree can safely spend 4% of their portfolio a year, and your spending is under that, so you have plenty of room.

</div>
</aside>

The answer reads well, and it has three numbers in it. One of them checks out exactly. One matches its command, but the command answers a different question from the one the Springfields asked. The third never came from the engine at all. The sections below check each one.

As in the other Cogilis lessons, the commands name a built-in plan with `--sample`, so you can paste any of them into a Cogilis folder and get exactly the output shown.

## Re-running a command

Start with the chance of success. The answer names the table it came from, so run that table yourself.

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">You re-run the chance of success</p>
<div class="lesson-your-turn-body">

[[cli:outcome-check]]

</div>
</aside>

**User-defined success** says about two paths in three, which is what the answer said. Before you count the number as checked, read the two lines above the table. **Assumptions** names the market assumptions the run used, and **Money** says whether the figures are in each year's own dollars or in today's. Your run and the assistant's have to agree on both, or the two numbers are not the same measurement.

The engine gives the same table every time you run the same command on the same plan. Its simulated markets are seeded, so the thousand paths behind this table are the same thousand paths on every run. That makes a re-run a real test. If your table differs from the one the assistant quoted, something differs between the two runs: a flag, the plan itself, the assumptions, or the build of the engine. Ask the assistant which one it is before you rely on either number.

## Does the command answer the question?

The tax figure is harder. Run the command the answer named.

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">You run the command the answer named</p>
<div class="lesson-your-turn-body">

[[cli:cash-flow-2045]]

</div>
</aside>

The **Taxes** row says about $30,000, so the number matches its command. It is still the wrong number for the question. The cash flow table shows the cash that left the plan in 2045, and most tax is paid the year after the income that owes it. The Springfields' 2045 tax payments are the rest of their 2044 bill, from their last year of wages.

What their first retired year owes is a different table.

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">You run the first retired year's tax bill</p>
<div class="lesson-your-turn-body">

[[cli:tax-summary-2045]]

</div>
</aside>

Its title says how the bill is paid: tax on earnings is withheld in 2045, and the rest of 2045's bill is paid in 2046. With no wages in 2045, the year's income owes less than the cash flow table shows going out for tax that year. You can see where the cash flow figure came from in the bill for 2044.

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">You run the bill for 2044</p>
<div class="lesson-your-turn-body">

[[cli:tax-summary-2044]]

</div>
</aside>

The **Property** line here is the same amount as the **Property tax** row in the 2045 cash flow, because 2044's property tax is paid in 2045 along with the rest of that year's bill.

Neither table is wrong. The cash flow says what the Springfields will pay out in 2045, which matters for their budget that year. The tax summary says what retiring does to their tax bill, which is what they asked. A good answer gives the one that fits the question and says which it is. The workspace's instructions list this trap by name, *taxes paid is not taxes owed*, along with a few others that turn a correct table into a wrong answer:

- **One year is not a total.** A tax summary covers one year, and its title says which one. A total over a retirement means asking for each year.
- **Money is [[term:nominal]].** A figure is in that year's own dollars unless the Money line says today's. A balance in 2060 buys far less than the same number would today.
- **A single path is not an answer about risk.** One forecast path, the [[term:gmf|GMF]], is the middle of the road. A question about risk needs the spread across all the paths.

## A number with no command

The last sentence of the answer has a number in it, 4%, and no command after it. That is the first sign. The second is that the sentence is about retirees in general rather than about the Springfields. A rule of thumb like this one comes from the assistant's general knowledge, and the workspace's instructions tell it never to answer that way.

The plan's own run already disagrees with it. "Plenty of room" does not describe a plan on which about one path in three fails, which is what the table in the first section shows. A rule of thumb leaves out exactly the things this plan has: two retirement dates, a mortgage, Medicare [[term:premium|premiums]] and the taxes on every sale.

When you find a number like this, ask for the command. If the engine can answer the question, the assistant should run it and replace the number. If the engine cannot answer, the assistant should say so plainly. A gap it admits is better than a confident sentence that fills the gap with a guess.

## What to check, every time

You do not have to re-run every number in every answer. Re-run the ones a decision rests on, and for each of them check four things:

1. **There is a command**, and pasting it gives the number in the answer.
2. **The Assumptions and Money lines** match between your run and the one quoted.
3. **The table answers the question that was asked.** A tax question needs to say paid or owed, and a question about risk needs the spread.
4. **Nothing in the answer comes from outside the plan.** A rule of thumb, a remembered tax bracket or a round figure with no command behind it did not come from the engine.

The lesson *Asking about your plan* shows an answer built the right way from start to finish, and *What kind of plan is this?* shows how the assistant decides which tables to read first.
