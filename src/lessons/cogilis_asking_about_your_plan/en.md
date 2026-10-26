<!--
tutilis-return: lessons/cogilis_asking_about_your_plan/prose/en.md
tutilis-locale: en source
-->
# Asking about your plan: can we retire at 62?

Cogilis is the AI workspace in Tutilis Pro. You open a terminal in its folder, start the assistant you already use, and ask it about your own plan. The assistant does not answer from memory. It runs the same forecast engine the Tutilis application runs, on your plan, and every number it gives you comes with the command that produced it.

This lesson follows one question from start to finish. Homer and Marge Springfield, the household on the [[term:canvas]], plan to stop working at 65 and 67. They ask whether both of them could stop at 62 instead. Each step below shows what the assistant runs and what the engine prints back, so you can see how an answer is built rather than only what it says.

The commands here use `--sample`, which names a plan built into the engine, so you can paste any of them into a Cogilis folder and get exactly the output shown. In your own session the assistant names your plan with `--dossier` instead, and the steps are the same.

## Asking the question

A good question for Cogilis is a question about your plan in your own words. The Springfields ask it like this.

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">The Springfields ask</p>
<div class="lesson-your-turn-body">

We plan to retire at 65 and 67. Could we both stop at 62 instead? What happens to our chance of success, and which years get tight?

</div>
</aside>

The question has two parts, and a good answer covers both. The chance of success says how often the plan works across a thousand simulated markets. The tight years say where the strain comes from, which is what the Springfields would need to plan around if they went ahead.

Before it runs anything, the assistant starts the session the way the workspace's own instructions tell it to. It says which build of Cogilis it is running and finds the plan in the library. The lesson *Your first session* covers those first steps.

## The plan as it stands

The assistant runs the plan as it is before it changes anything. A change only means something next to the plan it changes, so this run is the baseline that every later number is compared with.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant runs the plan as it stands</p>
<div class="lesson-ai-reply-body">

First, your plan as it stands, before any change:

[[cli:outcome-as-planned]]

</div>
</aside>

The two lines above the table say what the run stood on. **Assumptions** names the market assumptions, here the catalog built into the engine. **Money** says the figures are in each year's own dollars rather than today's. An honest answer keeps both lines with any number it quotes, because a figure without them cannot be compared with anything.

The row to read for this question is **User-defined success**: the share of simulated paths on which the plan meets the definition of success it states. On the Springfields' plan as it stands, about two paths in three succeed. The rows under it divide the same paths by how they ended.

You can see the same plan on the canvas. The **As planned** chip is the plan this run used, and the **Simulation Summary** in its [[nav:forecaster]] shows the plan's simulated outcomes.

## Trying it on a copy

The assistant never changes the plan you made. To try retiring at 62, it copies the plan to a file in the folder's `my-work/` directory, changes the two retirement ages in the copy, and leaves everything else exactly as it was. A comparison where two things moved at once cannot tell you which one mattered.

This lesson ships that copy as its second plan, so the commands stay pasteable. Switch the canvas to the **Retire at 62** chip to see it. Before forecasting the copy, the assistant checks that the edit left the plan whole.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant checks the copy</p>
<div class="lesson-ai-reply-body">

I moved both retirement ages to 62 on a copy of your plan. Before forecasting it, I checked that the edit left the plan whole:

[[cli:issues-retire-62]]

</div>
</aside>

An empty table means the engine found nothing missing or contradictory. If it had listed anything, the assistant would tell you before going on, because a forecast runs straight past a hole in a plan and its numbers would quietly be wrong.

Then it runs the same command on the copy, with the same flags.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant runs the copy</p>
<div class="lesson-ai-reply-body">

Here is the copy, run with the same flags as your plan:

[[cli:outcome-retire-62]]

</div>
</aside>

The **Assumptions** line is the same as before, so the two runs differ only by the edit. **User-defined success** falls by about ten points, from about two paths in three to a little over half.

## The years that get tight

The success rate says how much retiring early costs. It does not say why. For the mechanism, the assistant looks at how hard the plan leans on its portfolio in each year. The engine's measure is the [[term:withdrawal-rate|withdrawal rate]]: what the plan sells and spends from its investments in a year, less what it puts back in, as a share of what was invested at the start of that year.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant looks year by year</p>
<div class="lesson-ai-reply-body">

To see where the strain comes from, I looked at how hard the copy draws on your investments in each year:

[[cli:withdrawal-rate-retire-62]]

</div>
</aside>

Read down the **Rate** column. It stays low while either of them is still working, and it jumps in 2040, the year Marge stops. For three years it sits between about 4.5% and 5%, and then it eases when Homer's Social Security begins. In the plan as it stands, the same column stays under 2% until 2045. Retiring at 62 moves the start of full retirement five years earlier, from 2045 to 2040, and the first three of those years have no income at all. They also come early, when a fall in the markets would do the most damage.

The assistant can show what one of those years looks like.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">One of the tight years</p>
<div class="lesson-ai-reply-body">

Here is 2041, one of the three years with no wages and no Social Security yet:

[[cli:cash-flow-2041]]

</div>
</aside>

**Total inflows** is zero. Every expense that year, the mortgage and Medicare included, is paid by selling holdings, and the **Sales** rows list which ones. The cash flow chart on the canvas shows the same gap across the whole plan:

[[img:cogilis-asking-cash-flow-retire-62]]

*The Retire at 62 plan's cash flow. Wages end in 2038 and 2040, and the income bars do not return until Homer's Social Security starts in 2043.*

Switch the canvas between the two chips and look at the [[nav:cf-chart]] for each. In the plan as it stands the gap is much shorter, because both of them are still working in 2041 and 2042.

## The answer, written down

The assistant finishes by writing the answer to a file in the folder's `answers/` directory, so it can be read again and checked later. A good answer has the same parts every time: the question as asked, the plan it is about, the commands exactly as they ran, what they showed, how sure the answer can be, and what would change it. For the Springfields it reads something like this:

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant’s answer</p>
<div class="lesson-ai-reply-body">

**Could we both retire at 62?** You could, but the plan works less often. On the forecast, the chance of success falls by about ten points, from about two in three to a little over half. The strain comes from 2040 to 2042, when neither of you is earning and Social Security has not started, and your investments pay for everything. Those are the years to plan around. Working one more year, or earning part-time through those three years, are the changes worth trying next. Both runs used the built-in market assumptions and [[term:nominal|nominal]] dollars, and the commands are listed below so you can run them again.

*Tutilis is a planning tool, and this is not financial, tax, or legal advice. Check a decision like this with a qualified professional.*

</div>
</aside>

Every number in that answer appears in a transcript above it. The last line is there because the answer points toward a decision, and the workspace's instructions tell the assistant to say so whenever it does.

If your assistant ever gives you a figure without the command behind it, ask for the command. The lesson *Checking the answer* covers how to re-run one yourself and how to tell when a number did not come from the engine.
