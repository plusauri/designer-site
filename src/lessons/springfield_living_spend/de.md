<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_living_spend.de.md
tutilis-locale: de translated
-->
# Den Plan über die Ausgaben biegen

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.cash_flow.living_spend
  outline-path: Household planning › Cash flow and lifestyle › Bend the plan with living spend
  document-id: springfield_living_spend
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_living_spend.md
-->

<!--- α <lesson_body> -->
Diese Lektion nutzt denselben Haushalt wie [Der Haushalt Springfield](/learn/springfield_baseline),
Homer und Marge, zieht aber einen **anderen Hebel**. Die Frage hier ist nicht, *wann* sie aufhören
zu arbeiten. Sie ist, **wie viel sie ausgeben**, während sie arbeiten und im Ruhestand, und wie
stark das am Portfolio zieht.

Der [[term:live-plan]] rechts ist wieder **Springfield Baseline**.

---

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Warum sind Lebenshaltungsausgaben ein Hebel, den es zu prüfen lohnt, und wo prüfe ich ihn,
   ohne den Plan neu zu bauen?** Siehe [Die Frage](#the-question).
2. **Wie wird eine Lebenshaltungsausgabe als Phase Work und Phase Retire modelliert, verbunden
   durch das Ruhestandsdatum?** Siehe
   [Was „Lebenshaltungsausgaben“ in diesem Beispiel bedeuten](#what-living-spend-means-in-this-sample).
3. **Warum zeigt die Cashflow-Tabelle größere Lebensstilbeträge als die erfassten?** Siehe
   [Was „Lebenshaltungsausgaben“ in diesem Beispiel bedeuten](#what-living-spend-means-in-this-sample).
4. **Wo sehe ich, wie die Lebensstilphasen modelliert wurden, und wie sie sich in der Prognose
   ausspielen?** Siehe [Wohin schauen](#where-to-look).
5. **Wo ändere ich den Betrag einer Lebensstilphase, um ein höheres oder niedrigeres Budget zu
   probieren?** Siehe [Der Hebel](#the-lever-transforms-lifestyle-phases).
6. **Wie reagieren Erfolg und Vermögen spät im Leben, wenn die Ruhestandsausgaben steigen oder
   fallen?** Siehe [Probieren Sie dies](#try-this).
7. **Wie unterscheidet sich eine Änderung der Ausgaben davon, zu ändern, wann jemand in Rente
   geht?** Siehe
   [Wie das zum Ruhestandszeitpunkt gehört](#how-this-relates-to-retirement-timing).

</div>
</aside>

---

## Die Frage {#the-question}

Wenn ich die **Lebensstilausgaben** erhöhe oder senke, in den Jahren **Work**, den Jahren
**Retire** oder in beiden, antwortet der Plan dann so, dass ich es **sehen** kann (Cashflow-Balken,
Erfolgsquote, Vermögen spät im Leben)?

Lebenshaltungsausgaben sind einer der wenigen Hebel, die Haushalte im Alltag wirklich steuern.
Das Ruhestandsalter ist schwer zu verschieben. Ein paar Prozent am Budget sind ein Gespräch, das
Sie diesen Monat führen können.

[[nav:transforms]] ist der Ort, an dem diese Analyse lebt, ohne den Plan neu zu bauen. Öffnen Sie
[[nav:transforms]], ändern Sie den Betrag einer Phase **Lifestyle** unter **Änderbare**, und sehen
Sie zu, wie sich [[term:forecast]] und [[term:simulation]] aktualisieren, **Original** gegen
**Geändert** nebeneinander, damit Sie sehen, wie viel mehr (oder weniger) Ausgaben das Portfolio
tragen kann.

---

## Was „Lebenshaltungsausgaben“ in diesem Beispiel bedeuten {#what-living-spend-means-in-this-sample}

Springfield nutzt ein Cashflow-Muster **Lifestyle** mit **zwei Phasen**:

| Phase | Grobe Idee | Erfasster Betrag (heutige Dollar) | Wann sie läuft (in diesem Beispiel) |
|-------|------------|-----------------------------------|--------------------------------------|
| **Work** | Ein höheres Budget, solange beide verdienen und sparen | etwa **$138,000**/Jahr | Planbeginn → Homers **primäre Rente** (**2041**) |
| **Retire** | Ein niedrigeres, stetigeres Budget, sobald die Gehaltsschecks aufhören, dieselbe Lebenshaltungsausgabe, neu formuliert für die Jahre nach der Arbeit | etwa **$92,000**/Jahr | **2041** → Ende des Haushaltsplans |

Beide Beträge sind in heutigen Dollar geschrieben, und die Prognose lässt sie wachsen. Was Sie an
der Cashflow-Tabelle am Übergang lesen, ist also größer als diese Tabelle: Das letzte Work-Jahr
(**2040**) stellt etwa **$200k** in Rechnung, das erste Retire-Jahr (**2041**) etwa **$136k**.
Dieselben zwei Zahlen, mit fünfzehn Jahren Wachstum obendrauf.

Der Zweck dieser Lektion ist zu sehen, wie eine einzige Idee der Lebenshaltungsausgabe als **zwei
Phasen** modelliert werden kann, eine vor dem Ruhestand und eine danach, **verbunden durch dieses
Ruhestandsdatum**. Diese Verbindung erscheint als Steuerung, die Sie in [[nav:transforms]] →
**Änderbare** verschieben können.

---

## Wohin schauen {#where-to-look}

### Zuerst: wie die Cashflows modelliert wurden {#first-how-the-cash-flows-were-modeled}

Zuerst schauen wir, wie die Cashflows modelliert wurden. Bedenken Sie, dass die
[[term:canvas]]-App sich nicht um das Erfassen von Cashflows kümmern muss, so wie es die volle
**Desktop**-App tut. Sie erkunden ein Lehrbeispiel, statt jede Zeile zu bauen. Trotzdem hilft es
zu sehen, wie die Lebenshaltungsausgabe dieser Lektion aufgesetzt wurde.

Der Cashflow der Lebenshaltungsausgabe ist hier in **zwei getrennte, aber verbundene Stücke**
zerlegt. Am leichtesten sehen Sie das, wenn Sie [[nav:dossier]] → [[nav:birds-eye]] öffnen und auf
die beiden zugehörigen Abflüsse **Lifestyle (Work)** und **Lifestyle (Retire)** zeigen
([[term:hover|Darüberhalten]]). Achten Sie darauf, dass [[nav:cash-flow]] auf [[nav:birds-eye]]
ausgewählt ist, damit diese Ströme auf der Seite **Verbindlichkeiten** der Tabellen erscheinen:

[[img:springfield-living-spend-birds-eye-cf-table]]

*[[nav:path:birds-eye|cash-flow]] ausgewählt, mit der Aufrollung **Σ** (Summe der Jahre) an.
**Lifestyle (Retire)** und **Lifestyle (Work)** stehen oben bei den **Verbindlichkeiten**, der
lange Strom von Abflüssen, den dieser Haushalt plant, und die beiden größten Posten auf dem Blatt.*

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

Zeigen Sie dann auf eine der beiden Zeilen. Beide stammen von einem Lebenshaltungs-Posten mit zwei
Phasen, also öffnen beide dieselbe Karte:

[[img:springfield-living-spend-lifestyle-work-hover]]

*Die Karte **Lifestyle**. **Flusswert** listet die zwei Phasen, die der Posten erzeugt: **Work**
für **2027–2040** und **Retire** für **2041–2069**. **Phase 1** und **Phase 2** darunter nennen
den Jahresbetrag jeder Phase, ihre aktiven Jahre und das Wachstum ihrer Ausgaben. Die Jahre jeder
Phase hängen an benannten Lebensereignissen, also endet Work mit Homers Ruhestand und Retire
beginnt dort.*

Im Pfaddiagramm unten ist die Phase Work für die Jahre **vor** dem Ruhestand gezeichnet, und die
Phase Retire setzt **dort an, wo die Arbeit aufgehört hat**. Die zwei Zeilen erzählen eine
verbundene Geschichte.

### Projiziert — [[nav:forecaster]] (schon gefüllt) {#projected-navforecaster-already-populated}

Im **Prognosedetail** steuern Chips, welche Karten erscheinen (Reihenfolge der Leiste:
[[nav:bs-chart]] → [[nav:bs-table]] → [[nav:cf-chart]] → [[nav:cf-table]]). **Für diese Lektion
wählen Sie diese vier** und lassen Steuern / Verkäufe und Anlagen / Abstimmung aus, außer Sie
graben weiter.

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Vorschau | Ort | Was bei den Lebenshaltungsausgaben auffällt |
|----------|-----|-----------------------------------------------|
| [[img:sfb-bs-chart|preview]] | [[nav:bs-chart]] | Ob höhere Ausgaben die Salden in Entnahmejahren schneller abtragen. |
| [[img:sfb-bs-table|preview]] | [[nav:bs-table]] | Konten des ausgewählten Jahres und Nettovermögen nach einer Ausgabenänderung. |
| [[img:sfb-cf-chart|preview]] | [[nav:cf-chart]] | Abflussstapel über die Jahre; Übergang nahe am Ruhestand. |
| [[img:sfb-cf-table|preview]] | [[nav:cf-table]] | Ausgewähltes Jahr: Lebensstilzeile gegen Einkommen und andere Ausgaben. |
| [[img:sfb-nw-distribution|preview]] | **Nettovermögensverteilung** | Wolke der Simulationszusammenfassung plus Erfolgsquote (Silber). |
| [[img:sfb-key-forecasts|preview]] | **Schlüsselprognosen** | Min / [[term:gmf]] / Max nach einer Ausgabenänderung. |

Detail und Simulationszusammenfassung sind schon angezeigt. **Neu simulieren** nach einer
Transformation, wenn Sie einen frischen Vergleich über viele Pfade wollen. Schieben Sie **Jahr**
über den Übergang Work → Retire.

**Welchen Pfad sehen Sie?** Die Karten Jahr für Jahr zeigen eine Prognose auf einmal, gewählt mit
der Steuerung **FID**. **FID 0** ist der Referenzpfad, die eine Prognose, in der jede Position
jedes Jahr mit ihrer erwarteten Rate wächst, ohne Glücksjahrzehnt und ohne Crash, und das Produkt
nennt ihn [[term:fid-gmf]]. Jede andere FID-Nummer ist ein einzelner zufälliger Pfad aus der
Simulation. Bleiben Sie auf FID 0, während Sie einen Hebel bewegen, damit das, was sich auf dem
Bildschirm ändert, der Hebel ist und nicht das Glück. Wechseln Sie die FID nur, wenn Sie
ausdrücklich andere Pfade ansehen wollen.

---

## Der Hebel: Transformationen → Lifestyle-Phasen {#the-lever-transforms-lifestyle-phases}

Öffnen Sie [[nav:transforms]] → Änderungen.

1. Wählen Sie unter **Änderbare** den Posten **Lifestyle** (der Generator der
   Lebenshaltungsphasen), nicht Prognoseende (das war Ruhestand und Tod) und für diese Lektion
   nicht eine einzelne Personenzeile.
2. Sie sollten Steuerungen für den **Jahresbetrag je Phase** sehen (zum Beispiel **Work** und
   **Retire**).
3. Einen Phasenbetrag zu ändern fügt die Bearbeitung automatisch dem **Änderungssatz** hinzu.
4. Diagramme und Tabellen sollten sich **live aktualisieren**, während Sie eine Steuerung bewegen.
5. **Neu simulieren**, wenn Sie Original und Geändertes als [[term:monte-carlo|Monte Carlo]]
   nebeneinander wollen.

[[jump:transforms]]

**Ehrlicher Rahmen:** Diese Schieber zeigen, was ein höherer oder niedrigerer Lebensstil mit
*diesem* Plan unter *dieser* Erfolgsdefinition macht. Sie sind kein Rat, was Sie ausgeben
„sollten“.

---

## Probieren Sie dies {#try-this}

Arbeiten Sie am Springfield-Plan rechts.

1. Öffnen Sie [[nav:forecaster]] → Simulationszusammenfassung. Notieren Sie den Erfolg unter
   **Silber**, etwa **65 %** in diesem Plan, ein knappes Verfehlen, und genau das macht den Hebel
   sichtbar, und ein grobes Gefühl für das [[term:terminal-wealth]] (**nur Richtung und
   Größenordnung**).

   > **Zur Zeile Abwärts (P10).** In diesem Plan liest sie sich als tiefes Minus, Millionen unter
   > null. Das ist kein Saldo, den jemand halten würde. So führt das Modell die Rechnung, sobald
   > einem Pfad das Geld ausgeht. Unter null leiht der Plan weiter zu seinen
   > [[term:cost-of-capital]], statt anzuhalten. Ein P10 so weit darunter misst, *wie weit* das
   > schlechteste Zehntel der Pfade zu kurz kommt, nicht was ein Haushalt tatsächlich hätte. Lesen
   > Sie das Vorzeichen und den Abstand, nicht die Zahl.

2. Öffnen Sie [[nav:cf-chart]] / [[nav:cf-table]]. Schieben Sie **Jahr** auf **2040**, das letzte
   Work-Jahr. **Lifestyle (Work)** liegt bei etwa **$200k**. Dann **2041**, Homers Ruhestand und
   das erste Retire-Jahr. **Lifestyle (Retire)** liegt bei etwa **$136k**, und Marges
   Arbeitseinkommen ist noch da. Diese Stufe nach unten am Übergang ist die Form mit zwei Phasen.
3. Öffnen Sie [[nav:transforms]] → Änderungen. Wählen Sie **Lifestyle**. Die zwei Schieber lesen
   **Work $138,000** und **Retire $92,000**, die erfassten Beträge in heutigen Dollar. Wenn Ihre
   etwas anderes lesen, steckt schon eine Änderung im Änderungssatz. Setzen Sie sie zuerst zurück.
4. **Heben Sie Retire auf $110,000**, etwa ein Fünftel höher. Beobachten Sie [[nav:cf-chart]] und
   das Bilanzdetail **live**: Im Jahr **2041** sollte die Zeile Lifestyle (Retire) jetzt etwa
   **$163k** statt $136k lesen. Erwarten Sie mehr Druck auf das Portfolio in Jahren mit
   [[term:drawdown]].
5. **Neu simulieren**. Vergleichen Sie Erfolg und Vermögen spät im Leben, Original gegen
   Geändertes. Erwarten Sie eine **härtere** Richtung, weil Sie die Ruhestandsausgaben auf einer
   Basis angehoben haben, die schon knapp daneben lag.
6. **Senken Sie Retire auf $80,000** (zuerst zurücksetzen, oder denselben Schieber durch die Basis
   ziehen). Erwarten Sie Entlastung bei Erfolg und Endvermögen. Lesen Sie trotzdem die Diagramme.
   Steuern und Anlagerenditen zählen.
7. Optional: Schieben Sie die Phase **Work** nach oben oder unten, während Retire fest bleibt.
   Arbeitsjahre haben noch doppeltes [[term:earned-income]]. Die Geschichte ist „können sie mehr
   oder weniger sparen, während sie verdienen?“, nicht nur die Entnahme im Ruhestand.
8. Optional: Kehren Sie zu [[nav:path:birds-eye|cash-flow]] zurück und zeigen Sie nach einer
   Änderung auf Lifestyle, die Definition gegen den projizierten Pfad im Prognosemodul.

[[jump:birds-eye]]

Die Dollarzielwerte oben sind da, damit Sie prüfen können, dass Sie auf denselben Zahlen sind wie
dieser Text, nicht weil $110,000 für sich etwas bedeutet. Mitnehmen sollen Sie die Richtung:
Ruhestandsausgaben rauf, Erfolg runter; Ruhestandsausgaben runter, Erfolg rauf.

---

## Wie das zum Ruhestandszeitpunkt gehört {#how-this-relates-to-retirement-timing}

| Lektion | Haupthebel |
|---------|------------|
| [Der Haushalt Springfield](/learn/springfield_baseline) | **Wann** die Arbeit endet (Ruhestand unter **Prognoseende**) |
| **Diese Lektion** | **Wie viel** der Lebensstil kostet (Phasen **Lifestyle** Work / Retire) |

Beides kann Erfolg und Endvermögen bewegen. Es sind **verschiedene Gespräche**: Jahre des
Verdienens gegen Dollar des Verbrauchs. In echter Planung berühren Sie oft beides. Hier halten wir
einen Hebel im Blick.

---

## Wohin als Nächstes {#where-to-go-next}

| Thema | Lektion / Beispiel |
|-------|--------------------|
| Orientierung und Ruhestandszeitpunkt | [Der Haushalt Springfield](/learn/springfield_baseline) |
| Karte der App (wenn Sie sich verirren) | [Sich in der App zurechtfinden](/learn/getting_around) |
| Hypothek läuft oder abbezahlt | [Hypothek läuft oder abbezahlt](/learn/mortgage_on_vs_paid_off) |
| Was „Erfolg“ bedeutet (Stufen) | [Was heißt Erfolg?](/learn/springfield_success) |
| Antragszeitpunkt der Social Security | [Früh beantragen oder lange leben](/learn/springfield_claim_longevity) |

---

*Die Mengen sind illustrativ. Was die Lektion lehrt, ist der Mechanismus und die Richtung, in die jeder Hebel bewegt.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
