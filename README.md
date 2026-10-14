# Plusauri designer site

This repository is a generated snapshot of the public Plusauri pages, kept for visual work. `main` is replaced when tutilis publishes the next snapshot. An edit to an HTML file lasts until that publish.

The interactive plan is absent on purpose. Where the product shows the live plan, this copy has one sentence: "The interactive plan is not in this copy."

## Change the look

Edit `static/site.css`. That is the file the pages load.

The same stylesheet returns to tutilis at `kotlin/website/src/main/resources/static/site.css`. `src/site.css` is that home copy, with a return comment on the first line. On a project-site publish, `static/site.css` carries the site prefix on its `url(...)` values and `src/site.css` does not. Bring a finished look home from the file that actually changed.

Lesson prose under `src/lessons/` carries the path it returns to. Style work leaves the prose, the glossary, and the reference wording as published. Those words live in tutilis.

## View it

GitHub Pages serves this repository at https://plusauri.github.io/designer-site/
Pages hosts a project site under `/designer-site`, so the published files use that prefix.

From this directory, `python3 preview.py` serves the same layout at http://127.0.0.1:4173/designer-site/.

Opening `index.html` from the Finder leaves the stylesheet unloaded, because the pages point at site paths.

## Changes from outside the org

Style changes come from people in the plusauri organization. A pull request opened from outside the org will be closed.
