<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/diversification_correlation.de.md
tutilis-locale: de translated
-->
# Korrelation und Diversifikation

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.diversification.correlation
  outline-path: Foundations › Diversification › Correlation and diversification
  document-id: diversification_correlation
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/diversification_correlation.md
-->

<!--- α <lesson_body> -->
**Die meiste Zeit bewegen sich die großen Anlageklassen miteinander — nicht gegeneinander.** Die [[term:correlation|Korrelation]] ([[term:rho|ρ]])
ist dieses Miteinander. [[term:diversification|Diversifikation]] heißt nicht „mehr Ticker besitzen“; sie heißt **Risiken besitzen, die sich nicht
immer als eines bewegen**. Wenn ρ positiv ist (der übliche Fall), hat eine Mischung in der
Rechnung immer noch **gemeinsames** Risiko. So zu tun, als wären die Positionen unabhängig, **versteckt** dieses Risiko.

Das Produkt hat genau dafür einen Schalter. **ρ enthalten** (die Voreinstellung) zählt die gemeinsame Bewegung;
**ρ nicht enthalten** lässt sie weg und behandelt die Positionen als unabhängig. Diese Lektion handelt davon, was dieser
Schalter mit einem Plan macht, dessen Positionen sich wirklich gemeinsam bewegen.

Der Plan rechts ist eine **minimale Stichprobe mit zwei Positionen** (`two_correlated_assets`):

| Position | Was es ist | Wert / [[term:basis\|Kostenbasis]] | Angenommene Rendite ([[term:mu\|μ]]) | Angenommene Volatilität ([[term:sigma\|σ]]) |
|----------|------------|-------------------------------------|---------------------------------------|----------------------------------------------|
| **US Equity** | Ein breiter Korb US-amerikanischer Aktien ([[term:equity\|Aktien]]) | $500k / $300k | ~7% | ~16% |
| **US High Yield** | [[term:high-yield\|Hochzins]]-Anleihen — schlechter bewertete Unternehmensschulden, die tendenziell zusammen mit Aktien fallen | $500k / $300k | ~6% | ~10% |

Gleiche Positionen → **$1M** insgesamt. In der eigenen Korrelationstabelle des Produkts liegt US Equity × US High [[term:yield]]
bei **ρ ≈ +0.69** — stark **positiv**. **ρ nicht enthalten** unterschätzt also das Risiko dieses Plans: auf
dem Risikodiagramm rutscht der Portfolio-★ typischerweise nach **links**, in Richtung „ruhiger“.

[[jump:correlation|output__risk__risk.correlations]]

**Living Expense** beträgt **$40k/yr** (mildes [[term:cola]]) — die klassische anfängliche [[term:withdrawal-rate|Entnahmerate]] von **~4%** auf
$1M. Sie ändert nicht, wo die Positionen auf dem Risikodiagramm sitzen; sie erzeugt einen [[term:drawdown]], sodass
der [[term:monte-carlo|Monte Carlo]]-Erfolg bei Silber mit enthaltenem ρ gewöhnlich **unter 100%** liegt — und **ρ nicht
enthalten** den Erfolg dann oft **in Richtung 100% anhebt**. Dieser Anstieg ist es, was „Risiko verstecken“ in der Sprache
der Prognose bedeutet.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Wussten Sie das?</p>
<div class="lesson-did-you-know-body">

Das Wort „Anleihe“ an einer Position sagt nicht, ob sie ein Aktienportfolio diversifiziert. In der
Korrelationstabelle des Produkts bewegen sich US-Hochzinsanleihen mit US-Aktien bei etwa **+0.69**, sie fallen also tendenziell,
wenn Aktien fallen. [[term:treasury-security|US-Staatsanleihen]] liegen bei etwa **−0.31** und sind oft *gestiegen*, wenn
Aktien fielen. Diese Lektion paart Aktien mit Hochzins, weil das der gewöhnliche Fall ist, in dem zwei
Positionen tendenziell zusammen fallen.

</div>
</aside>

---

## Was Sie lernen werden {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Diversifiziert eine Position mit dem Etikett „Anleihe“ ein Aktienportfolio automatisch?** Siehe
   [Wie die Daten aussehen](#what-the-data-looks-like).
2. **Wie verändert die Stärke der Korrelation, wie sprunghaft eine Mischung ist?** Siehe
   [Das Rätsel](#the-puzzle-positive-correlation).
3. **Wie werden die Volatilitäten zweier Positionen zu einer Portfoliorisikozahl?** Siehe
   [Wie zwei Volatilitäten sich verbinden](#how-two-volatilities-combine).
4. **Was geschieht mit der Risikozahl, wenn der ρ-Schalter des Produkts aus ist?** Siehe
   [Wie zwei Volatilitäten sich verbinden](#how-two-volatilities-combine).
5. **Berücksichtigt die Prognose, dass Korrelationen in einem Crash steigen?** Siehe
   [Ehrlichkeit in der Krise](#crisis-honesty).

</div>
</aside>

---

## Wie die Daten aussehen {#what-the-data-looks-like}

| Paartyp | Typisches ρ (grob) | Was für die Planung zählt |
|---------|--------------------|---------------------------|
| **Aktien gegen Aktien** (Regionen, Stile, Sektoren) | Oft **stark positiv** | Gleichlauf **addiert** zum Risiko des Portfolios |
| **Aktien gegen Hochzins** | Oft **stark positiv** (~0.6–0.8 in vielen Tabellen) | Das Etikett „Anleihe“ heißt nicht Diversifikator |
| **Aktien gegen hochwertige Staatsanleihen** | Je nach Epoche gemischt — kann niedrig oder leicht **negativ** sein | Nützlicher Diversifikator, *wenn* ρ niedrig ist |
| [[term:market-crash\|Stress- oder Crashphasen]] | Viele Paare **steigen gegen +1** | Der Gleichlauf wird stärker, genau wenn er am meisten schmerzt |

**Zu dieser letzten Zeile.** Eine Stress- oder Crashphase ist ein seltener, scharfer Fall über die Märkte hinweg — 2008 und
März 2020 sind die jüngeren — sie dauert Monate bis ein paar Jahre und kommt vielleicht einmal in einem
Jahrzehnt. Sie ist nicht der Alltag, und die Zeile ist keine Vorhersage. Sie steht dort, weil das die
Momente sind, *für* die Diversifikation da ist, und zugleich die Momente, in denen sie am wenigsten leistet: Positionen, die
sich gewöhnlich unterscheiden, fallen dann zusammen. Für sie zu planen ist eine Frage der Größe, nicht der Sorge — **Ehrlichkeit
in der Krise** weiter unten sagt, was das Produkt dazu tut und was nicht.

Lesen Sie die Tabelle in einer Richtung: das **Etikett** einer Position sagt nicht, ob sie diversifiziert. Nur ρ
tut das, und nur gegenüber dem, was Sie schon besitzen.

**Woher ρ kommt.** Das Produkt ermittelt ρ aus seiner eingebauten Tabelle von *Kategorie*-Paaren (US-Aktien × US-Hochzins und so weiter), plus etwaigen Überschreibungen des Laufs. Ein Dossier kann auch eine eigene
`dossier_correlation_matrix` speichern, aber der echte Risiko- / Prognosepfad liest dieses Feld noch nicht. Diese
Stichprobe ist so verdrahtet, dass die **Kategorien selbst** ein positives ρ tragen.

---

## Das Rätsel: positives ρ (Korrelation) {#the-puzzle-positive-correlation}

ρ ist die Korrelation aus der Übersicht — wie stark sich zwei Positionen gemeinsam bewegen, von −1 (entgegengesetzt)
über 0 (ohne Zusammenhang) bis +1 (im Gleichschritt). Drei Bereiche zählen:

- ρ nahe **+1**: die Mischung ist fast so sprunghaft wie ihre Bestandteile.
- ρ **positiv, aber &lt; 1** (diese Stichprobe und die meisten echten Portfolios): etwas Diversifikation gegenüber
  +1, aber die beiden teilen noch Risiko — lassen Sie diesen gemeinsamen Teil weg, und das Portfolio wirkt **zu
  sicher**.
- ρ nahe **0** oder **negativ**: eine große kostenlose Beruhigung — Sonderfälle (zum Beispiel manche Aktien- / Treasury-Epochen),
  nicht die alltägliche Voreinstellung.

---

## Wie zwei Volatilitäten sich verbinden {#how-two-volatilities-combine}

Für die Idee braucht es keine Formel. Denken Sie das Portfoliorisiko als **zwei Haufen**:

1. **Das eigene Risiko jeder Position**, herunterskaliert danach, wie viel vom Portfolio sie ausmacht. Die Hälfte Ihres Geldes in einer
   Position mit 16% Volatilität bringt nicht 16 Risikopunkte in die Mischung — sie bringt viel weniger, weil
   die andere Hälfte etwas anderes tut.
2. **Ein Gleichlauf-Haufen**: zusätzliches Risiko, das es nur gibt, weil die beiden Positionen an denselben
   Tagen fallen. Das ist der **einzige Ort, an dem ρ vorkommt**. Positives ρ macht den Haufen größer; ein ρ von null
   lässt ihn verschwinden; negatives ρ macht daraus eine *Subtraktion*.

| ρ zwischen den beiden | Gleichlauf-Haufen | Portfoliorisiko |
|-----------------------|-------------------|-----------------|
| **+1** | So groß, wie er wird | Der gewichtete **Durchschnitt** der beiden Volatilitäten — keine Diversifikation |
| **Positiv, &lt; 1** (**typisch**) | **Addiert** noch Risiko | Diese Stichprobe; die meisten Aktien- / Hochzins-Paare |
| **0** | Nichts | Die Positionen sind unabhängig |
| **Negativ** | **Subtrahiert** | Ein Diversifikationsbonus, wenn er hält |

**Diese Stichprobe, in Zahlen.** Zur Hälfte US Equity (σ 16%), zur Hälfte US High Yield (σ 10%), ρ = +0.69.
Die Haufen sind in Einheiten von „[[term:volatility]] zum Quadrat“, deshalb zieht der letzte Schritt eine Quadratwurzel:

<table class="lesson-table-ledger">
<thead>
<tr><th>Stück</th><th>Betrag</th></tr>
</thead>
<tbody>
<tr><td>Eigene Risiko-Haufen, beide Positionen</td><td>89</td></tr>
<tr><td>Gleichlauf-Haufen, ρ = +0.69</td><td><strong>+55</strong></td></tr>
<tr><td>Summe → Portfolio-σ</td><td>144 → √144 ≈ <strong>12.0%</strong></td></tr>
<tr><td>Dieselben Positionen, <strong>ρ nicht enthalten</strong></td><td>89 → √89 ≈ <strong>9.4%</strong></td></tr>
</tbody>
</table>

Diese beiden Zahlen sind der Ort, an dem der ★ in den beiden Bildern unter **Wohin schauen** sitzt (bis auf die
Rundung von σ 16 und σ 10 — die Positionen folgen den eigenen Kategorieannahmen des Produkts, die ein
paar Dezimalen mehr tragen). An den Positionen hat sich nichts geändert; ein Haufen wurde einfach weggelassen.

<details class="lesson-math">
<summary class="lesson-math-label">Für die Mathematikfreunde — die Formel</summary>
<div class="lesson-math-body">

Die beiden Haufen sind die **Portfolio-Varianz** zweier Anlagen, mit Gewichten \(w\), Volatilitäten \(\sigma\) und
Korrelation \(\rho\):

\[
\sigma_p^2 = w_1^2\,\sigma_1^2 + w_2^2\,\sigma_2^2 + 2\,w_1 w_2\,\sigma_1\sigma_2\,\rho_{12}
\]

| Term | Rolle |
|------|-------|
| \(w_1^2\sigma_1^2\), \(w_2^2\sigma_2^2\) | Die eigenen Risiko-Haufen — die Varianz jeder Position, skaliert mit dem Quadrat ihres Gewichts |
| \(2 w_1 w_2 \sigma_1 \sigma_2 \rho_{12}\) | Der Gleichlauf-Haufen — der einzige Ort, an dem ρ vorkommt |

Mit \(w_1 = w_2 = 0.5\), \(\sigma_1 = 16\), \(\sigma_2 = 10\), \(\rho_{12} = 0.69\):

\[
\sigma_p^2 = 64 + 25 + 2 \cdot 0.25 \cdot 16 \cdot 10 \cdot 0.69 \approx 89 + 55 = 144
\qquad\Rightarrow\qquad \sigma_p \approx 12.0\%
\]

\(\rho_{12} = 0\) setzen (**ρ nicht enthalten**) lässt den letzten Term weg: \(\sigma_p = \sqrt{89} \approx 9.4\%\). Bei
\(\rho_{12} = 1\) ist der Ausdruck ein perfektes Quadrat, \((w_1\sigma_1 + w_2\sigma_2)^2\), also ist das Portfolio-σ der
gewichtete Durchschnitt, 13% — überhaupt keine Diversifikation.

</div>
</details>

### ρ enthalten gegen ρ nicht enthalten {#included-vs-not-included}

Der Schalter des Produkts heißt **ρ enthalten** und startet **an** (grün): der Gleichlauf-Haufen wird
gezählt. Schalten Sie ihn **aus**, und die Beschriftung lautet **ρ nicht enthalten**: die Prognose behandelt die Positionen
als unabhängig, und der Haufen fällt weg.

| Wahres ρ | Wirkung von **ρ nicht enthalten** |
|----------|-----------------------------------|
| **Positiv** (diese Stichprobe) | Entfernt einen risikoerhöhenden Haufen → **zu ruhig**; der ★ rutscht oft nach **links** |
| **Negativ** | Entfernt einen Vorteil → wirkt riskanter; der ★ rutscht nach **rechts** |

**Planungsregel:** ein Portfolio, dessen Positionen sich gemeinsam bewegen, muss **ρ enthalten** behalten, damit die Risikozahl
ehrlich ist.

---

## Ehrlichkeit in der Krise {#crisis-honesty}

Reales ρ ist **zeitveränderlich**, und Crashes schieben viele Paare **gegen +1** — der Gleichlauf wird stärker,
genau wenn er am meisten schmerzt. Das Produkt verwendet standardmäßig eine **statische** Kategorietabelle: ein klarer
Planungshebel, keine volle Krisenmaschine. Es schnellt in einer Panik nicht von selbst hoch, also ist ein Plan, der mit dem ρ von heute schon
eng aussieht, in einem solchen Moment enger, als er sich liest. Das ist eine Ehrlichkeitsschranke des aktuellen
Modells, ausgesprochen statt versteckt.

<aside class="lesson-saying" data-saying="free-lunch">

Diversifikation ist das, was einem Gratisessen am nächsten kommt, und sie schrumpft gerade dann, wenn man sie am meisten will. In einem Crash steigen die Korrelationen gegen 1, und das Risiko, das die Mischung erspart hatte, kommt zurück.

</aside>

---

## Wohin schauen {#where-to-look}

### 1. Weg zum Streudiagramm {#1-scatter-path}

1. [[nav:risk]] → **Aktuelles Risiko**
2. Öffnen Sie **Analytisches Risiko** (beim Einstieg geschlossen)
3. **Risiko vs. Rendite**
4. Schalten Sie **Positionen** **an**, damit beide Positionen eigene Punkte sind (nicht nur die Kontosumme)

| Position | Wo | Warum |
|----------|----|-------|
| **US Equity** | Oben und rechts | Höheres μ und σ |
| **US High Yield** | Mitte-links der Aktien | Niedrigeres μ / σ, bewegt sich aber noch mit Aktien |
| **★ Portfolio** | Dazwischen | 50/50-Mischung mit **ρ ≈ +0.69**, wenn ρ enthalten ist |

### 2. ρ umschalten (den ★ beobachten) {#2-toggle-watch-the}

- **ρ enthalten** (an, grün): der Gleichlauf-Haufen wird gezählt — das ehrliche Portfolio-σ ist **höher**.
- **ρ nicht enthalten** (aus): der Haufen fällt weg — ★ / σ wandern typischerweise nach **links** (rosiger).

Beide Figuren unten sind das eigene Diagramm der App, aus dieser Stichprobe in **derselben Breite** neu gezeichnet, also ist der
einzige Unterschied der Schalter — und die waagerechte Bewegung des ★ ist das Einzige, was sich
bewegt. In dieser Stichprobe geht der Stern heute von etwa **12.0%** σ auf etwa **9.4%**, bei *derselben*
Rendite von 6.0%: nach links, nicht nach unten.

<div class="lesson-img-stack">

[[img:diversification-risk-rho-included]]

<p class="lesson-img-caption"><strong>ρ enthalten</strong> (grün): ehrlicher Gleichlauf — der ★ sitzt beim σ der <strong>vollen Kovarianz</strong> — der ehrlichen Mischung der beiden Positionen.</p>

[[img:diversification-risk-rho-not-included]]

<p class="lesson-img-caption"><strong>ρ nicht enthalten</strong> (aus): nur unabhängige Volatilitäten — der ★ rutscht nach <strong>links</strong>. Dieselben Positionen, dieselbe Rendite, niedriger ausgewiesenes Portfoliorisiko.</p>

</div>

### 3. Transformationen → Korrelationen (ρ) + Erfolgsquote {#3-transforms-correlations-success}

1. Öffnen Sie [[nav:transforms]].
2. Finden Sie den Schalter **Korrelationen (ρ)**. Er startet **an**, das heißt, der Lauf *zählt*
   den Gleichlauf — derselbe Zustand **ρ enthalten** wie im Risikodiagramm. Schalten Sie ihn **aus**, um den Plan
   so laufen zu lassen, als wären die Positionen unabhängig (**ρ nicht enthalten**), und **simulieren Sie neu**.
3. Vergleichen Sie den Erfolg der **Simulationszusammenfassung** bei [[term:medals|Silber]]: **Original** (Schalter an) gegen
   **Geändert** (Schalter aus).

[[jump:correlation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.correlations]]

In dieser Stichprobe mit $1M / $40k bewegt sich der letzte Punkt oder die letzten zwei mit der Ziehung. Lesen Sie den Erfolgsanteil, den jede Hälfte ausgibt:

| Zustand | Was sich ändert |
|---------|-----------------|
| **ρ enthalten** (Original) | Ehrlicher Gleichlauf + Ausgabe |
| **ρ nicht enthalten** (Geändert) | Höherer Erfolg — die Prognose hat das Risiko unterschätzt |

Original und Geändert stehen nebeneinander, damit sich die Wolken und die Erfolgsanteile sauber vergleichen lassen:

[[img:diversification-transforms-rho-on-vs-off]]

*Die Pointe: positives ρ wegzulassen lässt den Plan sicherer aussehen (Erfolg nach oben, linker Schwanz weniger hart), ohne einen Dollar der Ausgabe zu ändern.*

Zwischen diesen beiden Läufen hat sich am Plan nichts geändert — nicht die Positionen, nicht die Ausgabe, nicht der
Horizont. Nur, ob das Modell zugeben durfte, dass die beiden Positionen zusammen fallen. Deshalb ist das
das letzte Wort der Lektion und keine Fußnote: **das Risiko, das Sie verstecken, geht nicht weg; es wird nur nicht mehr
gezählt.**

---

## Was Sie mitnehmen {#what-to-take-away}

- Fangen Sie mit **positivem ρ** an — der Alltag für ein Portfolio mit mehr als einer Art von Risiko.
- **US-Aktien × Hochzins** ist ein echtes positives Paar; Staatsanleihen sind eine andere Geschichte.
- **ρ nicht enthalten** bei wahrem ρ &gt; 0 **unterschätzt** das Risiko.
- Krisen können ρ **gegen +1** schieben.
- Pfad: Risiko → Aktuelles Risiko → **Analytisches Risiko**; **Positionen**; schalten Sie **ρ enthalten** um (Beschriftung links vom Schalter).

### Wörter in dieser Lektion {#words-used-in-this-lesson}

| Wort | In einer Zeile |
|------|----------------|
| **Korrelation (ρ)** | Wie stark sich zwei Positionen gemeinsam bewegen, von −1 bis +1. Positiv ist der Alltag. [Mehr](/glossary/correlation) |
| **Diversifikation** | Risiken besitzen, die sich nicht alle als eines bewegen — nicht einfach mehr Dinge besitzen. [Mehr](/glossary/diversification) |
| **Volatilität (σ)** | Wie stark die Renditen einer Position von Jahr zu Jahr schwanken. [Mehr](/glossary/volatility) |
| **US-Aktien** | Aktien aus den USA — Eigentumsanteile an Unternehmen, nicht das „Eigenkapital“ in Ihrem Haus. [Mehr](/glossary/equity) |
| **Hochzins** | Schlechter bewertete Unternehmensanleihen: mehr Zins, und aktienähnliche Fälle in einem Ausverkauf. [Mehr](/glossary/high-yield) |
| **Treasury** | Schulden der US-Regierung — die klassische Position, die oft gestiegen ist, wenn Aktien fielen. [Mehr](/glossary/treasury-security) |
| **Stress- / Crashphase** | Ein seltener, scharfer Fall über die Märkte hinweg, wenn die Korrelationen gegen +1 steigen. [Mehr](/glossary/market-crash) |
| **ρ enthalten / ρ nicht enthalten** | Der Schalter des Produkts: den Gleichlauf zählen oder so tun, als wären die Positionen unabhängig. |

## Wohin als Nächstes {#where-to-go-next}

| Thema | Lektion |
|-------|---------|
| Zuerst das Risiko-/Rendite-Streudiagramm | [Risiko und Rendite](/learn/risk_and_return) |
| Wortliste | [Glossar des Finanzplans](/learn/financial_plan_glossary) · [Tutilis-Glossar](/learn/tutilis_glossary) |
| Rundgang durch den ganzen Haushalt | [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
