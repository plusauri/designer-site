<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/exponential_growth.de.md
tutilis-locale: de translated
-->
# Zinseszins und exponentielles Wachstum

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.time_value.compound_growth
  outline-path: Foundations › Time value of money › Compound / exponential growth
  document-id: exponential_growth
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: ProsePrimary
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/exponential_growth.md
-->

<!--- α <lesson_body> -->
Zusammengesetztes Wachstum ist die langsame Biegung, die zu einer steilen wird. Ein paar
Prozentpunkte **Durchschnittsrendite**, über Jahrzehnte gehalten, ändern die Form eines Plans mehr
als fast jede Überraschung eines einzelnen Jahres.

Diese Lektion nutzt den Haushalt **Springfield** als Kulisse, damit der aktive Plan echte Konten
und Jahre hat. Sie brauchen ihre ganze Geschichte noch nicht. Wenn die Karte der App noch neu ist,
nehmen Sie zuerst [Sich in der App zurechtfinden](/learn/getting_around) und kommen Sie zurück.

Der aktive Plan rechts ist **Springfield Baseline** (`springfield_baseline`).

---

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Was ist zusammengesetztes Wachstum, und warum zählt ein kleiner Satzunterschied über
   Jahrzehnte so viel?** Siehe [Die Idee in einem Bild](#the-idea-in-one-picture).
2. **Wie viel größer wird die Endsumme, wenn ich den Wachstumssatz hebe?** Siehe
   [Das Wachstumswerkzeug](#the-growth-tool-rate-time).
3. **Warum können zwei Wachstumsdiagramme gleich aussehen, wenn ihre Summen sehr verschieden
   sind?** Siehe [Das Wachstumswerkzeug](#the-growth-tool-rate-time).
4. **Wie zeigt sich dasselbe Wachstum an einer echten Position im Plan?** Siehe
   [Sparklines an echten Positionen](#sparklines-on-real-holdings).
5. **Wie lese ich Tausende von Marktpfaden, ohne in Linien zu ertrinken?** Siehe
   [Enden, nicht Pfadspaghetti](#endings-not-path-spaghetti).

</div>
</aside>

---

## Die Idee in einem Bild {#the-idea-in-one-picture}

Nehmen Sie an, Sie legen eine Summe an und lassen sie in Ruhe. Jedes Jahr wächst der **Saldo**
(nicht nur das ursprüngliche [[term:principal]]) ungefähr mit demselben *Satz*. Das ist der
**[[term:compounding]]**: Das Wachstum des letzten Jahres wird Teil der Basis dieses Jahres.

In einem Diagramm von Dollar gegen Jahre sieht niedriges Wachstum lange fast linear aus und biegt
sich dann still. Heben Sie den Satz, und die Kurve wird nicht bloß „am Anfang ein bisschen
höher“. Über einen langen Horizont **explodiert die Lücke zwischen den Pfaden**. Deshalb nennen
Menschen den Zinseszins in der Finanzrhetorik das „achte Weltwunder“: kleine Satzunterschiede,
lange Zeit, großer Dollarunterschied.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Wussten Sie schon?</p>
<div class="lesson-did-you-know-body">

Über vierzig Jahre wird aus einem Dollar, der mit 3 % im Jahr wächst, etwa **\$3.26**. Bei 7 %
wird aus demselben Dollar etwa **\$15**. Der Satz ist etwas mehr als doppelt so hoch, und das Geld
am Ende ist mehr als viermal so viel.

</div>
</aside>

**Ehrlichkeit:** Märkte schwanken. Die glatte Kurve ist der **Trend- / typische** Pfad (was die
Wachstumsrechnung des Produkts oft als Linie des geometrischen Mittels zeigt). Echte Pfade zickzacken
um sie herum. Die Lektion hier ist die **Form des Zinseszinses**, kein Versprechen einer glatten
Fahrt.

Die drei folgenden Abschnitte sind dieselbe Kurve an drei Orten im Produkt, vom saubersten zum
unordentlichsten: der abgeschirmte [[nav:growth-calculator]], in den Sie den Satz tippen; eine
**echte Position**, bei der das Produkt ihn liefert; und der **ganze Plan**, in dem Ausgaben und
Marktglück mit im Bild sind.

---

## Das Wachstumswerkzeug: Satz × Zeit {#the-growth-tool-rate-time}

Öffnen Sie am aktiven Plan die **untere Werkzeugleiste**
([[nav:fx]] · [[nav:growth]] · [[nav:annuity]] · [[nav:peek]])
und wählen Sie [[nav:growth]]. Das öffnet den [[nav:growth-calculator]]: Wählen Sie einen Betrag,
einen Wachstumssatz und einen Jahresbereich, und lesen Sie die **projizierte Summe** auf dem
Trendpfad. In **Auf Summe wachsen** ist der Betrag eine Zahl *jedes Jahr*, sodass die Summe der
ganze aufgezinste Strom ist — nicht eine Einzahlung, die in Ruhe gelassen wurde.

[[jump:compounding|output__growth-calculator]]

Die Zahlen hier sind Annahmen, die Sie tippen, und nicht Springfields aktive Positionen, und das
ist der Punkt: Der [[nav:growth-calculator]] ist eine Sandbox, also isoliert er **Satz × Zeit**
ohne Steuern, ohne Ausgaben und ohne Umschichtung im Weg, und das Einzige, was die Antwort bewegen
kann, ist der Satz.

### Probieren Sie dies — der ganze Sinn der Lektion {#try-this-the-whole-point-of-the-lesson}

1. Setzen Sie einen einfachen Jahresbetrag (z. B. $1,000) und einen Jahresbereich über mehrere
   Jahrzehnte.
2. Rechnen Sie mit etwa **3 %** mittlerem Wachstum. Merken Sie sich die Endzahl.
3. Ändern Sie nur den Satz auf etwa **6–7 %**. Sehen Sie, wie viel größer das Ende ist — lesen Sie
   die **Zahl**, nicht die Kurve. Es ist über lange Horizonte keine lineare Geschichte von „Satz
   verdoppeln, Dollar verdoppeln“; Zinseszins ist nicht linear.
4. Versuchen Sie fakultativ **0 %** (flacher Nennwert) gegen einen milden positiven Satz, damit die
   Kurvenform offensichtlich ist.

⚠️ **Lesen Sie die y-Achse, bevor Sie die Form lesen.** Die beiden Bilder unten sind dieselbe
Steuerung bei zwei Sätzen, und die Pfeile enden ungefähr auf derselben Höhe der Seite. Jedes
Diagramm skaliert seine **y-Achse auf seine eigenen Zahlen**. Lesen Sie die Achsenbeschriftungen
und die projizierte Summe auf jedem Bild. Das ist der Vergleich. Die Silhouette versteckt den
Zinseszins.

<div class="lesson-img-stack">

[[img:exponential-growth-calc-3pct]]

<p class="lesson-img-caption"><strong>Mittel 3 %</strong> — $1,000 im Jahr. Lesen Sie die projizierte Summe und wo die y-Achse oben endet.</p>

[[img:exponential-growth-calc-7pct]]

<p class="lesson-img-caption"><strong>Mittel 7 %</strong> — dieselben $1,000 im Jahr über dieselben Jahre. Achse und Summe sind beide größer. Lesen Sie sie vom Bild ab.</p>

</div>

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — die Zinseszinsformel und die 72er-Regel</summary>
<div class="lesson-math-body">

Ein Kapital \(P\), das mit dem Satz \(r\) über \(n\) Jahre wächst, wird zu

\[
FV = P\,(1+r)^n
\]

Der Exponent ist der Grund, warum die Lücke explodiert. Bei \(n = 40\) ist \(1.03^{40} \approx 3.26\), während
\(1.07^{40} \approx 14.97\).

**Die 72er-Regel.** Geld verdoppelt sich, wenn \((1+r)^n = 2\), also \(n = \ln 2 / \ln(1+r)\). Für kleine Sätze gilt
\(\ln(1+r) \approx r\), was eine Verdopplungszeit von ungefähr \(72 / (\text{Satz in \%})\) Jahren ergibt.
Das sind etwa 24 Jahre bei 3 % und etwa 10 bei 7 %, sodass der 3-%-Dollar über vierzig Jahre weniger als
zweimal verdoppelt und der 7-%-Dollar fast viermal.

</div>
</details>

---

## Sparklines an echten Positionen {#sparklines-on-real-holdings}

In [[nav:birds-eye]] mit gewähltem **Holding** (oder [[nav:dossier]] → Vermögen) können Positionen
eine **Wachstums-Sparkline** zeigen: einen [[term:median]] Pfad mit einem **Risikokegel**. Die
**Linie** ist die Zinseszinsidee, angewandt auf das angenommene [[term:mu|μ]] dieses Elements; das
**Band** zeigt die Streuung aus [[term:sigma|σ]]. [[term:hover|Zeigen Sie auf]] eine Position — zum
Beispiel eine Position in **US-Aktien** wie Target Date Equity — für die Annahmen und das
Kegeldetail.

Sie „beweisen“ hier nicht Springfields Renditen. Sie sehen, dass **jede mehrjährige Linie im Plan
aus derselben Wachstumssprache gebaut ist**, die der [[nav:growth-calculator]] offen verwendet. Der
Unterschied ist, wer den Satz liefert: Im Rechner haben Sie ihn getippt, hier hat das Produkt ihn
aufgelöst.

[[img:exponential-growth-sparkline-cone]]

*[[nav:path:birds-eye|holding]], Zeiger auf einer US-Aktien-Position: Medianpfad plus ein Risikokegel bis zum Planungshorizont — Zinseszins mit Unsicherheit, nicht nur eine einzelne Linie.*

[[jump:compounding|output__birds-eye__birds-eye.mode.holdings__birds-eye.assets-liabilities__line.birds-eye.holding-sparkline]]

---

## Enden, nicht Pfadspaghetti {#endings-not-path-spaghetti}

Andere Planungswerkzeuge zeigen oft **alle Szenariopfade** als Linien vom **Startjahr** bis zum
**letzten Jahr** — einen vollen Fächer von Reisen über die Zeit. Das ist eine typische
Standardansicht: jedes Jahr jedes Pfades, von Ende zu Ende gezeichnet. Sie ist ehrlich zur
[[term:sequence-of-returns]], aber man ertrinkt leicht in der Tinte.

**Das ist dieselbe Idee, zeigt aber nur, wo das Nettovermögen in diesem letzten Jahr landet.** Das
Produkt nennt es eine **Nettovermögensverteilung** — ein **Verteilungsdiagramm** (oder ein
**Histogramm**):

- Statt jedes Pfadjahr zu zeichnen, behält es **nur den Endwert** jedes Pfades im **letzten Jahr**.
- Diese Enden bilden eine Wolke / ein Histogramm: wie viele Pfade am Horizont arm, typisch oder
  reich landen.
- Quartile, [[term:gmf]], Min/Max und die Erfolgsquote sitzen neben dieser Wolke, damit Sie die
  Streuung lesen können, ohne Tausende von Linien zu verfolgen.

Also: Andere Werkzeuge zeigen oft **die Reise**; dieses Zusammenfassungsdiagramm zeigt, **wo die
Reisen enden**. Beides ist Zinseszins **mit** [[term:volatility]] und den Zahlungsströmen des Plans
— die Verteilung ist nur der Schnitt am Horizontende.

Öffnen Sie [[nav:forecaster]] → Simulationszusammenfassung (nach einer Simulation), um sie zu sehen:

[[img:exponential-growth-nw-distribution]]

*Nettovermögensverteilung — jede Marke ist ungefähr das **End**-Nettovermögen eines Pfades im letzten Jahr (nicht der volle Pfad über die Zeit). Rote/orange Masse nahe null gegen Grün weiter rechts ist die Streuung der aufgezinsten Ergebnisse unter Ausgaben, Märkten und Annahmen. Der Zinseszins erzeugt auch den einzelnen Pfad weit rechts: jenseits des Bruchs ist die Achse logarithmisch skaliert — die eigene Beschriftung des Diagramms sagt, ab wo —, damit dieser Pfad im Bild bleibt, ohne alle anderen an den linken Rand zu drücken.*

[[jump:terminal-wealth|output__forecaster__forecaster.simulation-summary__simulation-summary.distribution__line.distribution.final-net-worth]]

Merken Sie, was bei jedem Schritt hinzugekommen ist. Der [[nav:growth-calculator]] hatte einen Satz
und einen Horizont. Die Sparkline hat ein **σ** hinzugefügt, sodass aus einer Linie ein Kegel
wurde. Dieses Diagramm fügt den Rest des Plans hinzu — Ausgaben, Steuern, die Reihenfolge, die die
Märkte gerade austeilen —, sodass der Kegel zu einer Wolke von Enden wird. Darunter liegt bei allen
dreien derselbe Zinseszins.

---

## Was Sie mitnehmen {#what-to-take-away}

| Idee | Schlichte Bedeutung |
|------|---------------------|
| **Zusammengesetztes Wachstum** | Wachstum gilt für eine wachsende Basis, nicht nur für die ursprüngliche Einzahlung. |
| **Satz × Zeit** | Kleine Satzlücken über lange Horizonte dominieren die meisten Überraschungen eines einzelnen Jahres. |
| **Eine Linie oder viele** | Eine einzelne glatte Linie ist der leichteste Weg, die Biegung zu sehen. Sie ist keine Prognose — echte Märkte geben Ihnen eine Spanne, und der Plan zeigt Ihnen diese Spanne. |
| **Pfade oder Verteilung** | Volle Pfadfächer zeigen jedes Jahr jedes Szenarios. Wir zeigen Ihnen lieber, wo diese Szenarien **enden**, als Verteilung — dieselbe Information ohne die Tinte. |
| [[nav:assumptions]] | μ (und σ) sind Modelleingaben — recherchiert oder getippt — keine Garantien. |

---

## Wohin als Nächstes {#where-to-go-next}

| Thema | Lektion |
|-------|---------|
| Die Punktwolke und die Bänder | [Risiko und Rendite](/learn/risk_and_return) |
| Zwei sprunghafte Anlagen, eine glattere Fahrt | [Diversifikation und Korrelation](/learn/diversification_correlation) |
| Die Karte der App | [Sich in der App zurechtfinden](/learn/getting_around) |

Nehmen Sie als Nächstes **Risiko und Rendite**, wenn die Wolke im letzten Abschnitt noch der
unvertraute Teil ist: Es ist dieselbe Streuung, gezeichnet als Abwägung und nicht als Ende.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: ProsePrimary — Prose primary — teaching left; canvas scenery or omitted. -->
