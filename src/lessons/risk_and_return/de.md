<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/risk_and_return.de.md
tutilis-locale: de translated
-->
# Risiko und Rendite

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.risk_return.tradeoff
  outline-path: Foundations › Risk and return › Risk and return tradeoff
  document-id: risk_and_return
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/risk_and_return.md
-->

<!--- α <lesson_body> -->
Rendite ohne Risiko ist unvollständig. Risiko ohne Rendite ist Rauschen. Dieses Produkt setzt **beides** auf
**dasselbe Bild**, damit Sie den Ausgleich sehen, den Sie annehmen, bevor Sie darum herum planen.

Der Plan rechts ist eine **Lehrstichprobe, die auf Positionen schaut** (`holdings_portfolio`): drei
verschiedene Positionen mit unterschiedlicher erwarteter Rendite ([[term:mu|μ]]) und [[term:volatility]] ([[term:sigma|σ]]), damit die Punktwolke
auf einen Blick lesbar ist, plus **ein Zuhause und zwei Cashflows** — die wenigsten Posten, die jedem der
drei Chips über dem Diagramm etwas zu zeigen geben. Es ist immer noch kein voller Haushalt; alles darin ist
da, damit eine Steuerung lesbar wird.

---

## So lesen Sie das Streudiagramm {#how-to-read-the-scatter}

Genauer Pfad (das Diagramm liegt beim Einstieg in einem **geschlossenen Einklappbereich**):

1. [[nav:risk]] (Hauptabschnitt)
2. **Aktuelles Risiko** — die linke der beiden Risiko-Ansichten
3. Öffnen Sie **Analytisches Risiko** — klappen Sie diesen Bereich auf, sonst sehen Sie die Diagramme nicht
4. Streudiagramm **Risiko vs. Rendite** innerhalb von Analytischem Risiko

**Die andere Ansicht, Sensitivitäten**, ist kein Umweg, den Sie aus Versehen überspringen. Aktuelles Risiko fragt,
*wie holprig das ist, was ich gerade halte* — ein Schnappschuss, ohne Zeit darin. Sensitivitäten stellt eine
andere Frage: *welche einzelne Eingabe bewegt das Ergebnis am meisten* — sie stößt eine Annahme nach der anderen an
und ordnet, was der Plan gespürt hat. Derselbe Abschnitt, andere Frage; noch keine Lektion behandelt sie.

| Achse / Marke | Bedeutung |
|---------------|-----------|
| **Waagerecht** | Risiko — typischerweise **σ** (Volatilität der Annahme) |
| **Senkrecht** | Rendite — typischerweise **μ** (erwartete / angenommene mittlere Rendite) |
| **Jeder Punkt** | Eine Position (oder ein vergleichbarer Posten) bei ihrem eigenen (σ, μ) |
| **Portfolio ★** | Die **Mischung** — wo das ganze Buch als ein Punkt sitzt |

**Die Ecke, die alle wollen**, ist hohe Rendite und niedriges Risiko — **oben und links**. Märkte geben das
selten frei heraus. Die meisten echten Bücher sitzen auf einem Ausgleich: mehr angenommene Rendite kommt gewöhnlich mit
mehr angenommenem Schwanken.

**Ehrlichkeit:** μ und σ sind **Annahmen** (oft recherchierte Vorgaben, die Sie überschreiben können), keine Versprechen
und keine Prognose des Pfads im nächsten Jahr. Das Diagramm lehrt den **Ausgleich**, nicht eine Vorhersage.

Beim Einstieg sind beide Abschnitte **eingeklappt** — öffnen Sie **Analytisches Risiko**, sonst erscheint die Punktwolke nie:

<div class="lesson-img-stack">

[[img:risk-return-collapsibles-closed]]

<p class="lesson-img-caption"><strong>Beim Einstieg geschlossen</strong> — die Chips liegen oben entlang, und Analytisches Risiko und Tabellarisches Risiko bleiben zugeklappt, bis Sie sie öffnen.</p>

[[img:risk-return-scatter]]

<p class="lesson-img-caption"><strong>Analytisches Risiko, erstes Diagramm</strong> — Risiko vs. Rendite: jeder gezeigte Posten bei seinem eigenen (σ, μ), mit dem Portfolio-★ bei der Mischung der Positionen und, wenn Realvermögen an ist, des Zuhauses.</p>

[[img:risk-return-band]]

<p class="lesson-img-caption"><strong>Analytisches Risiko, zweites Diagramm</strong> — Portfolio-Bandbreite über die Zeit: der [[term:median]]-Pfad, eine gestrichelte Durchschnittslinie darüber, und ein Kegel von Ergebnissen, der sich weiter öffnet, je weiter Sie hinausschauen.</p>

</div>

Zwei Dinge in diesem zweiten Bild verdienen einen Satz, weil beide wie Fehler aussehen und keines
einer ist. Die gestrichelte Durchschnittslinie sitzt **über** dem mittleren Pfad, und sie bleibt darüber — das ist nicht das
Diagramm, das doppelt zählt. Ein paar sehr gute Ergebnisse ziehen einen Durchschnitt so nach oben, wie sie ein
mittleres Ergebnis nicht nach oben ziehen können, und je mehr die Positionen schwanken, desto breiter wird diese Lücke. Der mittlere Pfad ist
der, gegen den Sie planen. Und der Kegel öffnet sich immer weiter, statt sich zu beruhigen, weil
die Unsicherheit jedes Jahres sich auf die vorige stapelt; der Plan wird nicht riskanter, die Frage reicht
einfach weiter nach vorn.

<details class="lesson-math">
<summary class="lesson-math-label">Für die Mathematikfreunde — warum der Durchschnitt hoch sitzt und warum der Kegel sich öffnet</summary>
<div class="lesson-math-body">

**Die Lücke hat einen Namen.** Der [[term:compounding|Zinseszinseffekt]] multipliziert Renditen, statt sie zu addieren, also wächst ein Saldo
über viele Jahre tatsächlich mit dem [[term:geometric-mean]], und das liegt immer auf oder unter
dem arithmetischen Durchschnitt derselben Renditen. Der Fehlbetrag wächst mit σ: ungefähr die halbe Varianz,
sodass ein Buch bei σ 16% in der Größenordnung von 1.3 Punkten im Jahr gegen seinen eigenen Durchschnitt abgibt. Das heißt
gewöhnlich [[term:volatility-drag|Volatilitätsverlust]], und deshalb ist der Leitpfad des Produkts der
[[term:geometric-mean]] und nicht die [[term:amf|Prognose zum arithmetischen Mittel]].

**Der Kegel öffnet sich mit √t.** Wenn die Rendite jedes Jahres eine unabhängige Ziehung ist, addieren sich die Varianzen über die
Jahre, während die erwartete Rendite nur linear aufläuft — also wächst die Streuung mit der *Quadratwurzel* des Horizonts, σ√t, nicht mit dem Horizont selbst. Viermal so lang ist doppelt so breit, nicht
viermal. Das ist die Form, die Sie ansehen, und deshalb öffnet ein langer Horizont den Kegel,
ohne dass die Positionen sich geändert hätten.

Beide Zahlen kommen aus demselben σ auf der waagerechten Achse der Punktwolke oben — eine Steuerung, zwei
Bilder.

</div>
</details>

---

## Geführter Gang (3–5 Minuten) {#guided-walk-35-minutes}

1. Folgen Sie dem Pfad oben: [[nav:risk]] → Aktuelles Risiko → öffnen Sie Analytisches Risiko → Risiko vs. Rendite.
2. **Setzen Sie den Haken beim Chip Positionen**, damit jede Position ein eigener Punkt ist (die Vorgabe kann nur Konten zeigen).
3. **Finden Sie die ruhigste** Position (links, niedrigeres σ) und die **sprunghaftere** (rechts, höheres σ). In dieser
   Stichprobe ist das ungefähr: ruhigere Positionen links/unten; höheres μ **und** höheres σ **oben und
   rechts** — mehr erwartete Rendite, mehr Risiko.
4. **Finden Sie den Portfolio-Stern** — eine **gewichtsbewusste Mischung**, nicht einfach der wildeste Name.
5. Schalten Sie **Mit Kategorien vergleichen** um, falls vorhanden — Referenzpunkte der Kategorien helfen bei der Frage „ist diese
   Position aggressiv gegenüber einer ganzen Anlageklasse?“
6. Schalten Sie **Größe nach Wert** um, falls vorhanden — größere Punkte sind größere Dollar-Gewichte; der Stern wird
   von dem gezogen, was Sie wirklich besitzen, nicht von jedem Ticker gleich.
7. Öffnen Sie **Tabellarisches Risiko** (der andere Einklappbereich von Aktuellem Risiko) für die Tabelle **Risiko & Rendite nach Posten**
   — dieselben Daten, sortierbar. Sortieren Sie nach σ, dann nach μ.
8. **Gehen Sie die drei Chips durch** — der nächste Abschnitt sagt, was jeder auf das Diagramm setzt.

### Was die drei Chips auf das Diagramm setzen {#what-the-three-chips-put-on-the-chart}

Fünf Chips sitzen über der Punktwolke. Zwei davon ändern, *wie* Punkte gezeichnet werden — **Mit Kategorien
vergleichen** und **Größe nach Wert**, beide im Gang oben. Die anderen drei ändern, *was überhaupt
auf dem Diagramm ist*: **Realvermögen**, **Cashflows**, **Positionen**. Das sind nicht drei Ansichten desselben
Dings — jeder fügt eine andere *Art* von Posten hinzu, in eigener Farbe gezeichnet, und nur manche
zählen zum ★.

| Chip | Fügt hinzu | Farbe |
|------|------------|-------|
| **Realvermögen** | das Zuhause | braun |
| **Positionen** | die drei Positionen getrennt (statt eines Kontopunkts) | blau |
| **Cashflows** | Gehalt (herein) und Lebenshaltung (hinaus) | grün / rosa |

[[img:risk-return-all-chips]]

*Alle drei Chips an. Jede Postenart auf einmal: das braune Zuhause, die drei blauen Positionen von
Anleihe bis zur konzentrierten Aktie gestreut, und — ganz links, wo die Wachstumsannahmen ruhig sind — das grüne Gehalt und
die rosa Lebenshaltung.*

**Realvermögen bewegt den ★.** Der Stern ist die Mischung Ihrer Positionen und, wenn Realvermögen an ist,
auch Ihres Realvermögens. Das Zuhause erwartet weniger Rendite als die Aktienfonds und steigt und
fällt nicht mit ihnen, also zieht es den Stern nach unten und nach links, wenn Sie es einschalten. Positionen einzuschalten
spaltet nur den Kontopunkt in seine Positionen. Die Mischung ist so oder so dasselbe Geld, also bleibt der Stern,
wo er ist.

**Cashflows stehen auf dem Diagramm, aber nie in der Mischung.** μ und σ eines Stroms sind seine *Wachstumsannahme*: wie schnell das Gehalt steigt und wie schnell die Ausgabe inflationiert. Das ist eine andere
Größe als die erwartete Rendite einer Aktie, auch wenn beide auf diesen Achsen landen. Lesen Sie die Strom-Punkte
als das, wie unsicher das Wachstum jedes Stroms ist. Sie sagen nicht, was irgendetwas verdient. Ein Strom von Zahlungen
wird auch ausgegeben, während er ankommt, also ist er kein Saldo, den man mit Ihren Anlagen mitteln kann.
Was Cashflows unter dem Diagramm hinzufügt, ist eine Zeile: wie oft Ihre Vermögen und Ihre Einkommen,
zum Barwert gezählt, Ihre geplante Ausgabe decken. Es ist dieselbe Balance, die Bird's Eye wiegt,
wenn seine Ansicht Cashflows einschließt.

**Der Kegel darunter folgt demselben Chip.** Unter der Punktwolke projiziert **Portfolio-Bandbreite über die Zeit**
das mit dem Stern markierte Portfolio als sich öffnenden Kegel nach vorn. Mit Realvermögen aus ist der Kegel nur Ihre Positionen.
Mit ihm an kommt das Zuhause dazu, und alles, was Sie besitzen, wird projiziert. Das sind zwei ehrliche Antworten
auf zwei verschiedene Fragen: *wie riskant ist, was ich anlege*, und *wie riskant ist, was ich besitze*. Der Chip
wählt, welche Frage beide Diagramme beantworten.

### Positionen an {#holdings-on}

[[img:risk-return-holdings-on]]

*Chip Positionen an: jede Position ist ihr eigener Punkt (diese Stichprobe: anleiheähnlich links, breite Aktien mitte-rechts, konzentrierte Aktie ganz rechts). Der ★ ist die Portfolio-Mischung.*

**Was dieses Diagramm nicht ist:** es ist keine Verkaufsliste. Ein Punkt weit rechts ist kein Fehler zum
Korrigieren, und nichts hier ordnet Ihre Positionen als behalten oder abstoßen. Zwei Gründe, und jeder allein
reicht. Erstens sind die Achsen **Annahmen** — langfristiges μ und σ, das Sie oder eine recherchierte Vorgabe geliefert haben
—, also bewegt sich ein Punkt **nicht**, weil der Markt im letzten Quartal fiel, und ein Diagramm, das jüngere
Preise ignoriert, kann Ihnen nicht sagen, darauf zu handeln. Zweitens ist Risiko kein Schaden: eine Position mit hohem σ tut
ihre Arbeit, wenn Sie für das Schwanken bezahlt werden und es aussitzen können. Wozu das Bild *taugt*, ist
zu bemerken, dass Sie etwas besitzen, dessen angenommenes Risiko Sie nicht registriert hatten — das ist eine Frage zum
Nachfragen, keine Antwort.

### Größe nach Wert {#size-by-value}

[[img:risk-return-size-by-value]]

*Größe nach Wert: das Dollar-Gewicht zeigt sich als Punktgröße — der ★ wird von dem gezogen, was Sie wirklich besitzen, nicht von gleichem Gewicht auf jedem Ticker.*

### Tabellarisches Risiko {#tabular-risk}

[[img:risk-return-tabular]]

*Öffnen Sie **Tabellarisches Risiko** für zwei Karten nebeneinander:*

1. **Risiko & Rendite nach Posten** — `N(μ, σ)` und Wert jeder Position (sortierbar; Diagramm zum Sehen,
   Tabelle zum Ordnen).
2. **Modellierte Vermögenskorrelationen** — dasselbe Paarformat wie Annahmen → Modellierte Vermögenskorrelationen, gefiltert auf **Kategorien, die dieser Plan wirklich nutzt**. Wenn die Liste lang ist, nimmt die
   Karte die Höhe der Postentabelle an und rollt mit einem Ausblenden.

[[jump:correlation|output__risk__risk.correlations]]

### Nur benennen, nicht vertiefen: ρ enthalten {#name-dont-deep-dive-included}

Neben der Anzeige des Portfolio-★ sehen Sie **[[term:rho|ρ]] enthalten** (Vorgabe, Schalter an) oder **ρ nicht
enthalten**, wenn er aus ist. Das handelt davon, wie Positionen sich **gemeinsam** bewegen, nicht vom eigenen σ einer Position.
Volle Behandlung: [Korrelation und Diversifikation](/learn/diversification_correlation). Hier: wissen Sie, dass es
das gibt — und dass ρ **auszuschalten** das ist, was viele Werkzeuge tun, indem sie die [[term:correlation]] zwischen Positionen
ganz **ignorieren**.

Bei typischem **positivem** Aktien-ρ unterschätzt das Ignorieren dieser Kreuzterme das Portfoliorisiko: σₚ
fällt gegen √(Σ wᵢ²σᵢ²), und der ★ **rutscht** oft **nach links**. Negatives ρ arbeitet andersherum
(die [[term:diversification]] wegzulassen kann das Risiko nach oben schieben). Die Korrelationskarte oben zeigt die Kreuzterme, die
der Schalter einschließt oder auf null setzt.

**Warum der ★ links von seinen Bestandteilen sitzt.** Das ist das eine Stück Arithmetik, das sich lohnt, aus
dieser Lektion mitzunehmen. Immer wenn Positionen weniger als vollkommen korreliert sind — jedes ρ **unter 1** — kommt das Portfolio-σ **unter den wertgewichteten Durchschnitt** der einzelnen σ, während das Portfolio-μ genau
der wertgewichtete Durchschnitt der einzelnen μ ist. Rendite addiert sich; Risiko nicht. Diese Lücke ist der ganze
mechanische Inhalt der [[term:diversification]], und Sie können sie auf dem Diagramm sehen: der ★ sitzt
**links** von der Stelle, an die eine gerade Mischung der Punkte ihn setzen würde, und je niedriger die ρ, desto weiter links
sitzt er. Setzen Sie jedes ρ auf 1, und die Lücke schließt sich — der ★ landet auf dem gewichteten Durchschnitt, und das Gratisessen ist weg.

<aside class="lesson-saying" data-saying="free-lunch" data-saying-exception>

Der ★ sitzt links von seinen Bestandteilen, weil die Rendite sich addiert und das Risiko nicht. Die Mischung behält die durchschnittliche Rendite und zahlt dafür weniger als das durchschnittliche Risiko.

</aside>

Das ist Varianzarithmetik, kein Rat: es sagt, was die Mischung **tut**, und sagt nichts darüber,
welche Positionen jemand besitzen sollte.

---

## Wie „gut“ und „toxisch“ aussehen {#what-good-and-toxic-look-like}

| Gegend (grob) | Lesen als |
|---------------|-----------|
| **Oben links** | Attraktive Annahmen — hohes μ, niedriges σ. Prüfen Sie, ob die Annahmen ehrlich sind. |
| **Unten rechts** | Schmerzhafte Annahmen — niedriges μ, hohes σ. „Warum dies bei diesen Eingaben besitzen?“ |
| **Entlang einer Grenze** | Normaler Ausgleichsraum; der Portfolio-★ sollte angesichts der Gewichte Sinn ergeben. |

Wenn eine einzelne konzentrierte Position weit rechts sitzt und nach Wert groß ist, werden der Stern und die
[[term:monte-carlo|Monte Carlo]]-Bänder des Plans diese Konzentration spüren, auch wenn der Rest des Buches ruhig aussieht.

---

## Was Sie mitnehmen {#what-to-take-away}

- Risiko und Rendite gehören auf **ein** Bild für das Buch, das Sie wirklich halten.
- **Pfad:** Risiko → Aktuelles Risiko → **öffnen Sie Analytisches Risiko**; setzen Sie den Haken bei **Positionen**.
- Der **Stern** ist das Portfolio; die Punkte sind die Bestandteile — und er sitzt **links** von ihrem gewichteten
  Durchschnitt, wann immer ρ < 1. Mischen mittelt die Rendite und *weniger* als es das Risiko mittelt; diese Lücke
  ist, was Diversifikation ist.
- Annahmen treiben die Zeichnung — ändern Sie μ/σ (oder die Wachstumskategorien), und das Bild bewegt sich. Es ist
  **keine** Verkaufsliste, und es reagiert nicht auf die Preise des letzten Quartals.
- Der ★ ist immer die Mischung Ihrer **Positionen** — die Chips fügen Punkte hinzu, sie bewegen ihn nicht. Der **Kegel**
  unter der Punktwolke ist das Diagramm, das dem Chip Realvermögen folgt.
- Korrelation ist eine **zweite** Achse der Ehrlichkeit; behandeln Sie sie als Nächstes.

[[jump:sigma|output]]

## Wohin als Nächstes {#where-to-go-next}

| Thema | Lektion |
|-------|---------|
| Ehrlichkeit von Korrelation / ρ | [Korrelation und Diversifikation](/learn/diversification_correlation) |
| Zinseszins ohne die Punktwolke | [Exponentielles Wachstum](/learn/exponential_growth) |
| Rundgang durch den ganzen Haushalt | [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
