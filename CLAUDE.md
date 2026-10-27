# Designer site

This folder is a snapshot of the public Plusauri pages for visual work. The interactive plan is absent on purpose. Where the product shows the live plan, the page has one sentence: "The interactive plan is not in this copy."

## Your job

The person pasted a prompt so she would not type git commands. You run them. Clone this repository if the folder is not already a checkout, check out the branch `design`, and start `python3 preview.py`. Tell her the address it prints. On this copy that address is http://127.0.0.1:4173/designer-site/.

Change the look by editing `static/site.css`. That is the file the browser loads. A new picture goes under `static/images/`, as WebP when you can. After you edit the stylesheet, ask her to refresh.

Words come from the HTML, and the site has four languages. Do not hide page text and draw other words with CSS `content:`: the drawn words would show in every language. If she wants different wording, tell her it changes in the product and write down what she wants.

Do not clip `body > header` with `clip-path` or `overflow`. Its menus drop below it.

When she starts a new round after a snapshot is published, reset `design` onto `origin/main` first, so her work starts from the current pages.

Do not hand her git commands to type. When she says save, commit `static/site.css` and anything she added under `static/images/` on `design`, and push that branch. If git or `python3` is missing, start the install and tell her the one prompt she has to click. Then continue.

## Leave these alone

HTML files. The next snapshot replaces them.

`src/site.css` and `src/return-manifest.txt`. The browser does not load them, and the trip back into the product reads them as published.

`src/lessons/`. The wording lives in the product.

`static/vendor/`.

Glossary pages and reference pages.

## Paths

Font and image paths start with `/designer-site`. Keep that prefix on every `url(...)` that points at a file in this site.

## Saving

Commit `static/site.css` and anything added under `static/images/` on the branch `design`, then push that branch. Leave `main` as the published snapshot.
