# Lesson images

Screenshots and chrome previews used by Learning Center markdown under
`content/dossiers/*.md`.

## `generated/` — derived figures, never hand-edited

Everything under `generated/` is rendered from a recipe by the app's own chart composables:

```
kotlin/gradlew -p kotlin :chart-render:regenerateLessonFigures
kotlin/gradlew -p kotlin :chart-render:regenerateLessonFigures --args="--check"   # report only
```

Recipes live in `tutil.chartrender.LessonFigureRecipes` (plan, this-year, horizon, selected year).
Register the output with `LessonMediaRefs.gen(...)`; tests on both sides fail if a file here has no
recipe, or a recipe has no file, or a generated figure no lesson cites.

**What belongs here:** a *data figure* — one whose numbers the prose reasons about. Rebuild it after
an engine change and read the diff: a figure that moved is the same signal a red lesson claim is.

**What does not:** interactive chrome — "click here, the panel opens there", and the `standardize.*`
captures with their toolbars and blurred value columns. There is nothing to derive, and a lesson
that teaches where a control lives is not claiming a number. Those stay screenshots.

## Locale-specific screenshots

Default (source) images have **no** language suffix:

```text
getting-around-assumptions.png          # EN UI chrome (source)
```

When a lesson body is localized and the shot shows **product chrome** that changes with UI
language, add a sibling file:

```text
getting-around-assumptions.es.png       # Spanish UI
getting-around-assumptions.fr.png       # French UI (when captured)
getting-around-assumptions.de.png       # German UI (when captured)
```

Wire the locale file only in `dossiers/<id>.<lang>.md`. EN / untranslated locales keep the
unprefixed path. There is no automatic path rewriting today — authors choose the file in markdown.

**Not** the same axis as planning region (US/DE vehicles). This is **UI language** only.

Standardized control previews under `standardize/` stay language-neutral (blurred chrome).
