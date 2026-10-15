# Designer site

This folder is a snapshot of the public Plusauri pages for visual work. The interactive plan is absent on purpose. Where the product shows the live plan, the page has one sentence: "The interactive plan is not in this copy."

## Your job

Change the look by editing `static/site.css` only. That is the file the browser loads.

The person previews with `python3 preview.py` and opens the address it prints. On this copy that address is http://127.0.0.1:4173/designer-site/. After you edit the stylesheet, ask them to refresh.

## Leave these alone

HTML files. The next snapshot replaces them.

`src/site.css`. The browser does not load it.

`src/lessons/`. The wording lives in the product.

`static/vendor/`.

Glossary pages and reference pages.

## Paths

Font and image paths start with `/designer-site`. Keep that prefix on every `url(...)` that points at a file in this site.

## Saving

Commit only `static/site.css` on the branch `design`, then push that branch. Leave `main` as the published snapshot.
