# Plusauri designer site

This repository is a generated snapshot of the public Plusauri pages, kept for visual work. `main` is replaced when tutilis publishes the next snapshot. An edit to an HTML file lasts until that publish.

The interactive plan is absent on purpose. Where the product shows the live plan, this copy has one sentence: "The interactive plan is not in this copy."

## Work on a Mac (The Easy Way)

Open Claude on your Mac and paste this. Claude runs the steps. You describe the look.

```
Clone https://github.com/plusauri/designer-site.git onto this Mac. Put it on the Desktop if I have not named a folder. Check out a branch named design. Start the preview with python3 preview.py and tell me the address it prints. Read CLAUDE.md and follow it. I will describe style changes in plain language. Edit only static/site.css. When I say save, commit that file on the design branch and push it. Run the git commands yourself. Leave main alone.
```

Open the address Claude prints, and refresh the browser after each change. When you like a look, tell Claude to save. Claude commits `static/site.css` on the `design` branch and pushes it.

Use a GitHub account that has been invited to the plusauri organization, so the push can succeed. If the Mac asks you to install the command-line tools, or GitHub asks you to sign in, click through that prompt. Claude continues from there.

Opening `index.html` from the Finder leaves the stylesheet unloaded, because the pages point at site paths.

## Work on a Mac (The Hard Way)

These are the same steps, typed by hand.

```
git clone https://github.com/plusauri/designer-site.git
cd designer-site
git checkout -b design
python3 preview.py
```

The first time you run `git`, macOS may offer to install the command-line tools. Accept that install. If `python3` is not found, install Python 3 from https://www.python.org/downloads/macos/ and run the preview again.

Leave that window open. Edit `static/site.css`, save, and refresh the browser. That local preview is how you see each change. The GitHub Pages address shows `main`, which updates when the next snapshot is published.

When you want to keep a change, commit it on `design` and push that branch. The product reads `static/site.css` from that branch. A later snapshot replaces `main`, so design work stays on `design`.

```
git add static/site.css
git commit -m "Describe the look you changed."
git push -u origin design
```

## Change the look

Edit `static/site.css`. That is the file the pages load.

Font and image paths start with `/designer-site`. Keep that prefix on every `url(...)` that points at a file in this site.

`src/site.css` is a copy kept for the trip back into the product, with a return comment on the first line. The browser does not load it.

Lesson files under `src/lessons/` carry the path they return to. Leave that prose as published. Leave the glossary and the reference wording as published. Those words live in the product.

## Where it is on the web

GitHub Pages serves the last snapshot on `main` at https://plusauri.github.io/designer-site/.
Pages hosts a project site under `/designer-site`, so the published files use that prefix.
From this directory, `python3 preview.py` serves the same layout at http://127.0.0.1:4173/designer-site/.

## Changes from outside the org

Style changes come from people in the plusauri organization. A pull request opened from outside the org will be closed.
