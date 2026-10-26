<!--
tutilis-return: lessons/cogilis_chat_apps_and_privacy/prose/en.md
tutilis-locale: en source
-->
# Chat apps and privacy: Cogilis in Claude Desktop, and what leaves your computer

The other Cogilis lessons run the engine from a terminal, with an assistant such as Claude Code or Codex typing the commands. Many people would rather ask their questions in a chat app such as Claude Desktop, and Cogilis works there too. The folder's `bin/engine-mcp` offers the same engine to a chat app as a set of tools, and the app's assistant calls them the way a terminal assistant runs commands.

This lesson connects a chat app, asks it one question, and then looks closely at what leaves your computer when it answers. Philip and Vivian Banks, the household on the [[term:canvas]], stand in for you. They want to know what a chat app would send before they let it near their plan.

## How a chat app reaches the engine

Chat apps call tools on your computer through the Model Context Protocol, usually shortened to MCP. `bin/engine-mcp` is an MCP server: a small program the chat app starts and talks to while it runs. Each of its tools runs one of the same commands that `bin/engine-cli` runs, on the same plan library the Tutilis application saves to, and hands back what the command printed. A chat app and a terminal assistant therefore get the same numbers for the same question.

Connecting an app takes one change to its settings. The steps for Claude Desktop, Claude Code and Codex are below, and `docs/03-ai-chat-apps.md` in the folder has the same steps.

<details class="lesson-advanced" open>
<summary class="lesson-advanced-label">Advanced topic — connecting Claude Desktop, Claude Code or Codex</summary>
<div class="lesson-advanced-body">

**Find the folder's path.** In the Tutilis application, **File → Open Cogilis Shell** opens a terminal in the Cogilis folder, and `pwd` prints its path. In the steps below, replace `<this folder>` with that path.

**Claude Desktop.** Open **Settings → Developer → Edit config**. Finder shows `claude_desktop_config.json`. Open it in a text editor and add this beside the settings already there:

```json
"mcpServers": {
  "tutilis": { "command": "<this folder>/bin/engine-mcp" }
}
```

Save the file, quit Claude Desktop with Cmd-Q, and open it again. **Settings → Developer** then lists `tutilis` as Running. If it does not start, its log is `~/Library/Logs/Claude/mcp-server-tutilis.log`.

**Claude Code or Codex.** Run `claude mcp add tutilis -- "<this folder>/bin/engine-mcp"`, or the same line with `codex` in place of `claude`.

To check that it works, ask "Using tutilis, list the sample plans."

</div>
</details>

The tools cover what the commands cover. An assistant can list your plans and the sample plans, read a plan, produce any table or chart the application shows, run a forecast, and check a changed plan before using it.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Reference — the tools engine-mcp offers</summary>
<div class="lesson-reference-body">

| Tool | What it does |
| --- | --- |
| `list_samples` | Lists the built-in sample plans |
| `list_plans` | Lists your saved plans |
| `get_plan` | Reads a whole plan |
| `check_plan` | Checks a changed plan before it is used |
| `save_plan_draft` | Saves a changed plan as a new plan for you to review in the application |
| `replace_account_holdings` | Replaces one account's holdings in your plan, after keeping the plan as it was |
| `plan_format_help` | The guide to writing plans, and which category each fund belongs in |
| `list_artifacts` | Lists every table and chart the engine can produce |
| `get_artifact` | Produces one table or chart's data for a plan |
| `run_forecast` | Runs a forecast: Monte Carlo, one path, or year by year |
| `cli_help` | Shows every engine option |

</div>
</details>

## A question in the chat

With the tools connected, Vivian asks a question in Claude Desktop.

<aside class="lesson-your-turn">
<p class="lesson-your-turn-label">Vivian asks</p>
<div class="lesson-your-turn-body">

Using tutilis, what is our chance of success on the Banks plan?

</div>
</aside>

The assistant calls a tool rather than answering from memory. Claude Desktop shows each call in the conversation, and you can open it to see what was sent and what came back.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant calls get_artifact</p>
<div class="lesson-ai-reply-body">

I called `get_artifact` with the id `forecast.outcome` on your plan. It runs this command and returns what it prints:

[[cli:outcome-banks]]

</div>
</aside>

The tool's answer is the table itself, with the two lines above it that say which market assumptions the run used and which dollars it is in. The command is shown so that you can run it in the Cogilis folder and get exactly this output, the same as in every other Cogilis lesson. The assistant then writes its answer from that table.

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant's answer</p>
<div class="lesson-ai-reply-body">

About three simulated paths in four succeed on your plan as it stands (**User-defined success** in `forecast.outcome`). That figure uses the built-in market assumptions and [[term:nominal|nominal]] dollars, each year's own.

*Tutilis is a planning tool, and this is not financial, tax, or legal advice. Check a decision like this with a qualified professional.*

</div>
</aside>

## What leaves your computer

Two programs took part in that answer, and they handle your plan very differently.

**The engine sends nothing.** `bin/engine-mcp` runs on your computer, reads your plan from your library, computes the forecast there, and opens no network connection. Nothing it computes leaves your computer on its own.

**The chat app sends the conversation.** The assistant in a chat app is a model that runs on its provider's servers. For the model to read a tool's answer, the chat app sends that answer to the provider, along with your question and the rest of the conversation. So the outcome table above traveled to the provider when the assistant read it. A tool that reads more sends more. Here is what the people table holds for the Banks plan:

<aside class="lesson-ai-reply">
<p class="lesson-ai-reply-label">The assistant reads who is in the plan</p>
<div class="lesson-ai-reply-body">

I called `get_artifact` with the id `dossier.people`, which runs this command:

[[cli:people-banks]]

</div>
</aside>

That is Philip's and Vivian's first names and birth years, now part of a conversation on the provider's servers. `get_plan` returns the whole plan, with every account, balance and holding in it, and a screenshot you paste into the chat travels with the conversation like anything else you type.

The same is true of a terminal assistant. Claude Code and Codex also send each command's output to their providers, because that is how their models read it. Cogilis is bring-your-own-AI: the engine is Tutilis, and the assistant is yours. What the assistant's provider keeps, and what it may use to train its models, is set by your agreement with that provider and by the settings in your account there. Tutilis does not see the conversation at all.

A few habits keep what you send to what the question needs:

- **Try a sample plan first.** Ask about a built-in plan with `sample` until you are comfortable with how the tools answer. A sample plan holds no one's real figures.
- **Ask for what you need.** One table, such as `forecast.outcome`, sends one table. A question that makes the assistant read the whole plan sends the whole plan.
- **Read your provider's settings.** Most providers let you choose whether your conversations are kept and whether they are used for training.
- **Consider a local model.** Some chat apps can run a model on your own computer and still call MCP tools. With one of those, the conversation stays on your computer too.

## Your plans stay yours

The tools change your library in only two ways, and both leave the plan you made recoverable. When the assistant tries a change, it works on a copy, and `save_plan_draft` only ever adds a new plan under a name of its own. A name already in use is refused.

`replace_account_holdings` is the one tool that changes a plan you made. It replaces one account's holdings, for example after you paste a screenshot of the account and ask for the plan to be brought up to date, and nothing else in the plan changes. Before it changes anything, it saves the plan as it was as a new plan named "*your plan* — before *today's date*", so you can compare the two in the application or go back to the old one. The plans that come with Tutilis cannot be changed.

The sample plans are free to ask about. Reading your own plans needs Cogilis or the free trial, the same as the commands in `bin/`. The lesson [*Your first session*](/learn/ask-ai-your-first-session) covers the folder and the commands, and [*Checking the answer*](/learn/ask-ai-check-the-answer) covers how to re-run any number an assistant gives you.
