# Plusauri designer site

This repository is a generated snapshot of the public Plusauri pages, kept for visual work. `main` is replaced when tutilis publishes the next snapshot. An edit to an HTML file lasts until that publish.

The interactive plan is absent on purpose. Where the product shows the live plan, this copy has one sentence: "The interactive plan is not in this copy."

## Work on a Mac

Use a GitHub account that has been invited to the plusauri organization. Clone the repository and start a branch named `design`:

```
git clone https://github.com/plusauri/designer-site.git
cd designer-site
git checkout -b design
```

The first time you run `git`, macOS may offer to install the command-line tools. Accept that install. If `python3` is not found, install Python 3 from https://www.python.org/downloads/macos/ and run the preview again.

Start the preview, and open the address it prints:

```
python3 preview.py
```

Leave that window open. Edit `static/site.css`, save, and refresh the browser. That local preview is how you see each change. The GitHub Pages address shows `main`, which updates when the next snapshot is published.

Opening `index.html` from the Finder leaves the stylesheet unloaded, because the pages point at site paths.

## Change the look

Edit `static/site.css`. That is the file the pages load.

Font and image paths start with `/designer-site`. Keep that prefix on every `url(...)` that points at a file in this site.

`src/site.css` is a copy kept for the trip back into the product, with a return comment on the first line. The browser does not load it.

Lesson files under `src/lessons/` carry the path they return to. Leave that prose as published. Leave the glossary and the reference wording as published. Those words live in the product.

## Save the work

Commit on the `design` branch and push it. The product reads `static/site.css` from that branch. A later snapshot replaces `main`, so design work stays on `design`.

```
git add static/site.css
git commit -m "Describe the look you changed."
git push -u origin design
```

## Claude

Open this folder in Claude. The file `CLAUDE.md` has the same rules, and Claude reads it.

## Where it is on the web

GitHub Pages serves the last snapshot on `main` at https://plusauri.github.io/designer-site/.
Pages hosts a project site under `/designer-site`, so the published files use that prefix.
From this directory, `python3 preview.py` serves the same layout at http://127.0.0.1:4173/designer-site/.

## Changes from outside the org

Style changes come from people in the plusauri organization. A pull request opened from outside the org will be closed.
