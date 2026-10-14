<!--
tutilis-return: lessons/working_fast_in_tutilis/prose/en.md
tutilis-locale: en source
-->
# Working fast: the shortcuts and why they exist

A financial plan is dense. One screen can hold a cash flow chart, a balance sheet and a forecast of a thousand possible futures, and every number on it rests on a rule, a rate or an item somewhere else in the plan. Tutilis is built so that the answer to "what is this, and where did it come from?" is never more than one key or one hover away.

The sections below cover the habits that make that true, one at a time, and each one comes with the reason it works the way it does. The Springfield household on the [[term:canvas]] is a plan you already know, so the attention can stay on the tools.

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the section that answers it.

1. **How do I look up a word or a published figure without leaving the field I am typing in?** See [Glossary and Reference](#glossary-and-reference).
2. **How do I find out what a bar or a number on a chart means?** See [Hover for the details](#hover-for-the-details).
3. **How do I look up one account or holding while I am reading a chart?** See [Bird's Eye for any item](#birds-eye-for-any-item).
4. **How do I test a concern without changing the plan itself?** See [Test it in Transforms](#test-it-in-transforms).
5. **How do I switch between Forecast Detail and the Simulation Summary?** See [Swap the two sections](#swap-the-two-sections).
6. **How do I make more room on a laptop screen?** See [Make room for the answer](#make-room-for-the-answer).
7. **How do I type a large amount without counting zeros?** See [Type amounts quickly](#type-amounts-quickly).
8. **Where do I find every keyboard shortcut?** See [Every key in one place](#every-key-in-one-place).

</div>
</aside>

## Glossary and Reference

Planning has its own vocabulary, and a forecast runs on hundreds of published figures such as tax brackets, contribution limits and Medicare premiums. Tutilis keeps both a keystroke away. The **Glossary** explains what the words mean, and the **Reference** lists every table, rate and rule the forecast uses, with its source and its limits. They look alike on purpose, because they are the same kind of thing: one holds the vocabulary and the other holds the numbers.

**[[key:Glossary]]** opens the Glossary and **[[key:Reference]]** opens the Reference. These two keys work even while you are typing in a field. That is deliberate. The moment you most want a definition is when the caret sits in the field that used the word, and it would be a poor design that made you click away and lose your place to look it up.

When the question is where something lives rather than what it means, press **[[key:Search]]**. The caret goes to the **Quick Jump** box at the top of the window. Type a word such as roth, irmaa or 529, and the box lists the places in the app where that word is entered, tried as a what-if, or shown in the forecast. Use the arrow keys to pick a place and Enter to go there. This key also works while you are typing.

The shortcuts use **Ctrl on a Mac** too. The Cmd-letter keys belong to macOS and to habits you already have, such as Cmd-P to print and Cmd-G to find the next match. Ctrl-letter keys are free on a Mac outside of text fields, and the letters were chosen to avoid the Windows keys everyone relies on, which is why exchange rates are [[key:Fx]] rather than Ctrl-X.

The Learning Center has the same keys, with one change on Windows and Linux. There the browser already uses the Ctrl-letter keys to reload the page, find text, print and open tabs, so the Learning Center takes the same letters with **Alt** instead: [[key:Alt+Glossary]] for the Glossary, [[key:Alt+BirdsEye]] for Bird's Eye, and so on. On a Mac the keys are the same Ctrl keys as in the app, and Option works as well, which helps when another app on your Mac has already claimed a Ctrl key for itself. They work whether the lesson text or the canvas has the focus.

## Hover for the details

The [[nav:forecaster]] is designed so that every mark on it can explain itself. Rest the pointer on a bar, a row or a label and a tip tells you what it is, what it is made of and how it was computed. [[term:hover|Hovering]] is the fastest way to answer a question about a number, and it leaves the chart exactly as it was.

## Bird's Eye for any item

Sometimes the question is about one item rather than one year. When you are looking at a chart and want to know about a particular account or holding, press **[[key:BirdsEye]]** to open [[nav:birds-eye]] over whatever you were doing. Bird's Eye lists the whole household as [[term:present-value|present values]] on one beam, assets on one side and obligations on the other.

[[img:working-fast-birds-eye-account]]

Hover any item in Bird's Eye and its card appears. The card is the plan's own description of that item. For an account it names the owner and lists each fund or stock the account holds, with its category, value and cost. Press **[[key:BirdsEye]]** again and you are back on the chart you left.

[[img:working-fast-card-brokerage]]

## Peek at every view

The **Peek** menu does for the whole forecast what Bird's Eye does for one item. Press **[[key:Peek]]** and then a letter to see every chart, every table, or each chart beside its table. Peek opens over the app and leaves your chip selection alone, so you can glance at everything and return to the view you had arranged.

## Spot a concern

Most planning starts in the Forecaster. You read the charts and look for the years that seem wrong. On the Springfield household the [[nav:cf-chart]] makes one stretch stand out. The **Health** segment grows steadily for decades and then roughly quintuples for the three years from 2064 to 2066, when the plan's long-term care costs arrive.

[[img:working-fast-cash-flow-chart]]

## Test it in Transforms

A concern like the long-term care years is a question about risk, and [[nav:transforms]] is where you test it. Transforms lets you change the plan without touching the plan itself. You might raise the cost of care, retire two years later or scale back the lifestyle spending. The results appear in the same two sections you already know from the Forecaster, **Forecast Detail** and the **Simulation Summary**, so nothing about reading them is new.

## Swap the two sections

Forecast Detail and the Simulation Summary sit one above the other, and the one on top gets the room. Each section's header has a small pair of up and down arrows at its right-hand end, just before the chevron that opens it. The picture below shows Transforms as it first opens, with every section folded.

[[img:working-fast-transforms-sections|control]]

When you have made a change in Forecast Detail and want to see what it does to the [[term:monte-carlo]] summary, click the **down arrow** on Forecast Detail. It moves below the Simulation Summary, which rises to the top and opens. When you are done with the summary, push it back down the same way and Forecast Detail returns to the top.

The keyboard does the same thing. **[[key:ForecastDetail]]** opens Forecast Detail and moves it above the Simulation Summary, and **[[key:SimulationSummary]]** (M for Monte Carlo) does the reverse. In the Forecaster they act on the Forecaster's pair, in Transforms they act on Transforms' pair, and in Region they act on Region's. Pressing [[key:SimulationSummary]] and [[key:ForecastDetail]] in turn is the quickest way to see a change as a picture and then as a probability. Press the same key once more while its section is already on top and open, and the section closes.

Apart from the Glossary, Reference and Search keys and [[key:RunSimulation]], the shortcuts give way to a text field that has the focus. On a Mac, Ctrl with B, F, P and several other letters moves the caret inside a text field, and a keystroke should never pull you away from something you have half typed. Click outside the field, or press Tab until the focus leaves it, and the shortcuts work again.

## Run it from the keyboard

After a change in Transforms, the modified side waits for you to run the simulation again. **[[key:RunSimulation]]** runs it. It presses **Re-simulate** in the panel you are looking at, so it obeys every rule the button does and does nothing when there is nothing new to run.

[[key:RunSimulation]] works even with the caret in a field. It first saves what the field holds, exactly as leaving the field would, and then runs. That makes the natural rhythm type, [[key:RunSimulation]], read. The caret leaves the field when the run starts, which is the price of making sure the run uses the number you just typed.

If you press [[key:RunSimulation]] while a run is still under way, the request waits for that run to finish and then runs again only if something is still out of date.

## Make room for the answer

A laptop screen is never tall enough for a forecast, so Tutilis lets you put away whatever you are not reading. Everything you put away comes back with one click or one key.

The desktop app has three bars around its content: the navigation rail on the left, the header at the top and the tools bar at the bottom. **Ctrl-Shift** with an arrow key hides or shows each one, and the arrow points at the bar it moves. [[key:NavRail]] is the rail, [[key:Header]] is the header and [[key:ToolsBar]] is the tools bar. **[[key:Zoom]]** is zoom, which hides all three at once and brings them all back on the second press. The plain Ctrl-arrow keys are left alone because macOS uses them to switch desktops.

Inside the Forecaster the same idea works row by row. Every row of Forecast Detail, and the row of forecast ID, Year and detail selectors above it, ends in a seam with a small pill at its center. Click the seam and the row folds to a single line that still carries its name, and click it again to bring the row back. Folding a row does not switch off the charts in it, so it returns exactly as it was.

The panels' own keys fold sections as well. Pressed inside Transforms, **[[key:Transforms]]** opens or closes Modifications, and pressed inside Region, **[[key:Region]]** does the same for Region Selection. Coming from another panel, each key only takes you there.

### Power features

A few of these controls are more than most people want, so they sit behind a switch. Turn on **Power features** on the Application side of Advanced, and three more things work.

- Drag a Forecast Detail seam to give that row a fixed height. The row scrolls inside the room you gave it, and a restore button on the seam puts it back.
- Alt-click a seam to fold every other row and keep only that one. Alt-click it again and the others come back.
- Add Shift to [[key:ForecastDetail]], [[key:SimulationSummary]], [[key:Transforms]] or [[key:Region]] to open only that section and fold the rest. The same keys again bring the others back. Shift plays the part that Alt plays for a click.

If a layout ever gets away from you, **Restore default layout** puts every fold, seam and bar back where it started. It sits on the Application side of Advanced, and in the desktop app it is also under **View** in the menu bar. It leaves your language, theme and other choices alone.

## Type amounts quickly

Every amount field in the app accepts a few keys that save counting zeros. They work in the desktop app and in the Learning Center alike.

| Key | What it does |
| --- | --- |
| `[[key:Thousands]]` | Multiplies the value by a thousand, so `250[[key:Thousands]]` becomes 250,000 |
| `[[key:Millions]]` | Multiplies by a million, so `1.2[[key:Millions]]` becomes 1,200,000 |
| `[[key:Billions]]` | Multiplies by a billion |
| `[[key:Shift+Thousands]]`, `[[key:Shift+Millions]]`, `[[key:Shift+Billions]]` | Divide by the same amounts, which undoes a key pressed once too often |
| `[[key:Negate]]` | Flips the sign of the whole value, wherever the caret is |
| [[key:Up]], [[key:Down]] | Step the value up or down |
| [[key:Shift+Up]], [[key:Shift+Down]] | Raise or lower the digit just left of the caret |

The scale keys act the moment you press them, so `2` followed by `[[key:Millions]]` shows 2,000,000 before you have finished the thought. Clicking into a field or tabbing to it selects its whole value, so you can type a new amount straight over the old one.

[[key:Shift+Up]] and [[key:Shift+Down]] are the ones worth practicing. With the caret just after the 2 in 250000, one [[key:Shift+Up]] gives 350000 and one [[key:Shift+Down]] gives 150000. That is how to walk a value through a range when you want to see where a result changes.

You can try all of this without a plan of your own. Open [[nav:annuity]] from the bar at the bottom of the canvas, click into the purchase amount and type `300[[key:Thousands]]`.

## Every key in one place

**[[key:Shortcuts]]** opens the full list of shortcuts in a window of its own, and pressing it again closes it. The same list is the **Shortcuts** section of **Help** ([[key:Help]], or the button near the foot of the left rail), which opens on **General** and has **Symbols & Tips** beside it. Help shows one section at a time, so pick Shortcuts from the row at its top. Each key is written with the modifier your platform uses. In the Learning Center on Windows and Linux, read Alt for Ctrl in the table below.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — every shortcut</summary>
<div class="lesson-reference-body">

| Key | What it does |
| --- | --- |
| [[key:Glossary]] | Glossary |
| [[key:Reference]] | Reference |
| [[key:Search]] | Search the app and go to a place |
| [[key:Help]] | Help |
| [[key:Peek]] | Peek, then a letter for charts, tables or pairs |
| [[key:BirdsEye]] | Bird's Eye |
| [[key:Fx]] | Exchange rates |
| [[key:Dossier]] | Dossier |
| [[key:Assumptions]] | Assumptions |
| [[key:Risk]] | Risk |
| [[key:ForecastDetail]] | Forecast Detail, moved to the top |
| [[key:SimulationSummary]] | Simulation Summary, moved to the top |
| [[key:Transforms]] | Transforms |
| [[key:Region]] | Region |
| [[key:NavRail]] | Show or hide the navigation rail |
| [[key:Header]] | Show or hide the header |
| [[key:ToolsBar]] | Show or hide the tools bar |
| [[key:Zoom]] | Zoom: hide all three bars, or bring them back |
| [[key:Shortcuts]] | The list of shortcuts |
| [[key:RunSimulation]] | Run the simulation |
| [[key:NextMissing]] | In an open entry, go to the next field it still needs |
| [[key:FoldRows]] | Fold every Forecast Detail and Simulation Summary row to its name; again, restore them |

</div>
</details>

The list in the app is drawn from the same table that makes the keys work, so a key cannot work without appearing in it.

The lessons have keys of their own. On a lesson page, **[[key:Next]]** opens the next section and **[[key:Previous]]** the previous one, so a whole lesson can be read without the mouse. **[[key:Shift+Next]]** and **[[key:Shift+Previous]]** step through the smaller folds inside the open section. These keys work in the lesson text beside the plan, and they do nothing while you are typing in a field.

For a guided walk through every area of the app, see [Getting around the app](/learn/getting_around).
