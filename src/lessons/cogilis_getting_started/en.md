<!--
tutilis-return: lessons/cogilis_getting_started/prose/en.md
tutilis-locale: en source
-->
# Your first session: starting Cogilis on your own plan

Cogilis is the AI workspace in Tutilis Pro. It is a folder on your computer that holds the same forecast engine the Tutilis application runs, the commands to drive it, and the instructions an AI assistant needs to answer questions about your plan. You bring the assistant. Cogilis gives it a real engine to answer with, so that its numbers come from a forecast of your plan instead of from memory.

This lesson covers your first session: what is in the folder, how to start, and the three things the assistant does before it answers anything. Philip and Vivian Banks, the household on the [[term:canvas]], stand in for you. Their plan plays the part of the plan in your own library.

## What is in the folder

Everything Cogilis needs is inside one folder, and there is nothing to install. These are the parts you will meet:

- **`bin/`** holds the commands. `bin/engine-cli` is the engine, and `bin/kit-version` says which build the folder is. `bin/tutilis` opens the Tutilis user interface, which is called the *Desktop Application*. It is the same application that is shown in the canvas beside this lesson.
- **`docs/`** is the engine's reference, the plan format, and a guide to asking a question well.
- **`my-work/`** is where the assistant puts copies of plans when it tries a change, along with any scratch files.
- **`answers/`** is where the assistant writes each question and its answer, one file each, so you can read them again later.
- **`AGENTS.md`** is the working agreement the assistant reads when it starts. It says what the folder is for and the rules the assistant follows in it. `CLAUDE.md` points at the same file, because Claude looks for that name.
- **`START-HERE.md`** is the same introduction for you.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

The README files and the documentation in the folder are written in Markdown, a simple and very popular *markup* language. You can use it to write notes of your own too, about your plans or anything else in your life. [Obsidian](https://obsidian.md) is a free app that is good for reading and editing Markdown files. We have no connection with Obsidian and earn nothing from mentioning it.

</div>
</aside>

## Starting a session

Open the Tutilis application once and check that the plan you want to ask about is there. Cogilis reads the same plan library the application saves to, so a plan you have built in the application is already available to it.

Then start the assistant you already use, such as Claude or Codex, in the Cogilis folder. It reads `AGENTS.md` on its own, so you do not need to explain anything before your first question.

<details class="lesson-advanced" open>
<summary class="lesson-advanced-label">Advanced topic — starting the assistant from a shell</summary>
<div class="lesson-advanced-body">

In the application, **File → Open Cogilis Shell** opens a terminal that is already in the Cogilis folder. Type `claude` or `codex` there to start the assistant. Any terminal works as well, as long as it is in that folder, because the assistant reads its instructions from the folder it starts in.

</div>
</details>

If you would rather use a chat app such as Claude Desktop than a terminal, the lesson [*Chat apps and privacy*](/learn/ask-ai-chat-apps-and-privacy) covers how it connects to the same engine.

## What the assistant does first

The working agreement tells the assistant to start every session the same way, before it answers your first question. There are three steps.

**It says which build it is running.** `bin/kit-version` prints the product version and the commit the folder was built from, and the assistant states them in its first reply. The application's about card shows the same version. A number is only meaningful against a known build, and when a figure ever surprises you, the first thing to ask is which build produced it.

**It finds your plan.** `bin/engine-cli dossiers` lists the plans in your library, each with the short name the commands use to reach it. This lesson cannot show you that list, because it is a list of your own plans. If the command says there is no library yet, the application has not been opened on this computer. The assistant asks you to open it and add a plan. It does not make one up.

Once it has the plan, the assistant can read who is in it.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant reads who is in the plan</p>
<div class="lesson-ai-reply-body">

I start with who is in the plan, so we both know which plan I have open:

[[cli:people-banks]]

</div>
</aside>

**It asks what kind of plan this is.** Before it reads any forecast numbers, the assistant runs the engine's classifiers. Each one looks at one property of the plan and places it in a band, with the measure the band was cut from.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant asks what kind of plan this is</p>
<div class="lesson-ai-reply-body">

Before I read any forecast numbers, this is what the engine's classifiers say about your plan:

[[cli:classifiers-banks]]

</div>
</aside>

For the Banks plan, the rows about strain on the portfolio are Low. They carry no debt, and their first retired years, from 2041, draw lightly on their investments. Two rows stand out. **PortfolioDependence** is High, because about three quarters of their retirement spending will come from the portfolio. **RothConversionPotential** is Moderate, because the tax rate on converting in the first retired years is well below the rate their [[term:rmd|required distributions]] would face later. The lesson *What kind of plan is this?* shows how the assistant uses these bands to decide what to read next.

## A good first reply

After those three steps, the assistant's first reply should tell you what it is working with before it tells you anything else. For the Banks household it reads something like this:

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant’s first reply</p>
<div class="lesson-ai-reply-body">

This session is running Cogilis *(the version and commit `bin/kit-version` printed)*. Your library has one plan, *Banks household*, for Philip and Vivian. Before reading any forecast numbers, I asked the engine what kind of plan it is. On the measures of strain it looks comfortable: you carry no debt, and the first retired years, from 2041, draw lightly on your investments. Two things stand out. About three quarters of your retirement spending will come from the portfolio rather than from Social Security, and from 2041 there is a window when converting to a Roth account may cost less tax than your required distributions would owe later. What would you like to know about the plan?

*Tutilis is a planning tool, and this is not financial, tax, or legal advice. Check a decision like this with a qualified professional.*

</div>
</aside>

Each part has a job. The build makes every later number traceable. The plan's name and the people in it confirm the assistant is looking at the plan you meant. The classifier summary tells you what the engine thinks is unusual about the plan, which is often a better first question than the one you came with. The last line appears in the first answer of every session, and again whenever an answer points toward a decision.

If the first reply skips the build or names a plan you do not recognize, stop and say so before you ask anything else.

## Looking around for yourself

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Did you know?</p>
<div class="lesson-did-you-know-body">

You can run the commands yourself too. `bin/engine-cli help` lists everything the engine can do. To see what a well-built plan looks like, the engine carries a reference shelf of model plans, built in and separate from your library.

</div>
</aside>

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">You look at the reference shelf</p>
<div class="lesson-your-turn-body">

[[cli:samples-reference]]

</div>
</aside>

The **key** column is the name to pass to `--sample`. Every Cogilis lesson uses `--sample` on plans like these, so that you can paste any command from a lesson into your own folder and get exactly the output it shows.

## Your plans stay yours

The commands only read your library. They never change a plan you made. When the assistant tries a change, it copies the plan to a file in `my-work/` and changes the copy. It adds a plan to your library only when you want to look at a variant in the application, and it gives that plan a name of its own.

The engine itself never connects to the network, so nothing it computes leaves your computer. What your assistant does with the answers depends on the assistant you chose, and the lesson [*Chat apps and privacy*](/learn/ask-ai-chat-apps-and-privacy) covers what that means.

If you or your assistant ever wanted something the commands or the docs could not give, write it in `FEEDBACK.md` in the folder, and leave your own figures out. That file is how the workspace gets better.
