# Self-hosted lesson callout fonts

The display faces behind the Learning Center's mood-breaker callouts (`.lesson-did-you-know`, `.lesson-reference`, `.lesson-math` in `../site.css`). They are self-hosted rather than linked from Google Fonts so a lesson page makes no third-party font request, and a browser fetches a face only when an element on the page uses it.

All are licensed under the **SIL Open Font License 1.1**, which permits bundling and redistribution with software. Files are the Latin subset `woff2` builds published by [Fontsource](https://fontsource.org/).

| File | Family | Used for | Upstream |
|------|--------|----------|----------|
| `cinzel-latin-700-normal.woff2` | Cinzel 700 | "Did you know?" label, Roman-inscription capitals | https://github.com/NDISCOVER/Cinzel |
| `im-fell-english-latin-400-normal.woff2` | IM Fell English | Did-you-know scroll text | https://iginomarini.com/fell/ |
| `im-fell-english-latin-400-italic.woff2` | IM Fell English Italic | Emphasis on the scroll | https://iginomarini.com/fell/ |
| `special-elite-latin-400-normal.woff2` | Special Elite | Reference label and table headers, typewriter | https://fonts.google.com/specimen/Special+Elite |
| `cabin-sketch-latin-700-normal.woff2` | Cabin Sketch 700 | Chalk-drawn math callout label | https://github.com/impallari/Cabin-Sketch |
