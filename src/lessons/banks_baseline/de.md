<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/banks_baseline.de.md
tutilis-locale: de translated
-->
# Der Haushalt Banks

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.meet.banks
  outline-path: Household planning › Meet a household › Meet the Banks household (HNW)
  document-id: banks_baseline
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/banks_baseline.md
-->

<!--- α <lesson_body> -->
Diese Lektion stellt ein Doppelverdiener-Beispiel mit **hohem Nettovermögen** vor, um
Konzentrationsrisiko, fette rechte Ränder und die Folgen der Familie Banks zu erkunden (ein
erzwungenes [[term:rmd]], Aufdecken). Dieselbe Besetzung, Philip und Vivian, erscheint in jeder
dieser Lektionen. Ihre Geschichte ist **nicht** die Doppelverdiener-Geschichte von Springfield,
weil die Vermögensskala und die Form des Portfolios anders sind.

| Etikett | Rolle |
|---------|-------|
| **hnw** | Haus + Mehrtopf-Portfolio im mehrstelligen Millionenbereich |
| **family-banks** | Geschwister von [Erzwungenes traditionelles RMD](/learn/banks_forced_rmd) |
| **baseline** | Voller Haushaltsplan (Arbeit → Ruhestand → Langzeitpflege) |

Der Live-Plan rechts ist **Banks Baseline** (`banks_baseline`).

---

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Wer gehört zum Haushalt Banks, und wie unterscheidet er sich von Springfield?** Siehe
   [Wer hier ist](#who-is-here).
2. **Wenn ein vermögender Haushalt eine konzentrierte, hochvolatile Aktienposition neben
   diversifizierten Töpfen hält, wie streuen die Ergebnisse?** Siehe
   [Die Konzentrationsgeschichte](#the-concentration-story).
3. **Warum kann das mittlere End-Nettovermögen weit über dem Median liegen?** Siehe
   [Die Konzentrationsgeschichte](#the-concentration-story).
4. **Wohin schaue ich zuerst, damit Max nicht die Geschichte besitzt?** Siehe
   [Wohin schauen](#where-to-look).
5. **Wie lese ich einen rechten Rand, der den Rest der Ergebniswolke plattmacht?** Siehe
   [Probieren Sie dies](#try-this).

</div>
</aside>

---

## Wer hier ist {#who-is-here}

Der Haushalt hat zwei Erwerbstätige, Philip und Vivian.

| Person | Rolle (illustrativ) |
|--------|---------------------|
| **Philip** | Primärer Verdiener; SS; Generatoren für Gesundheit / Langzeitpflege |
| **Vivian** | Sekundäre Verdienerin |

**Haus:** **Bel-Air Residence** (abbezahlter Sachwert, keine Hypothek, die durch den Plan läuft,
so wie Springfield eine hat).

**Arbeit → Ruhestand:** doppeltes [[term:earned-income]], Lebensstilphasen, Social Security,
Übergang der Gesundheitskosten, Pflege spät im Leben. Dieselben *Arten* von Generatoren wie
Springfield, **höhere absolute** Niveaus.

---

## Die Konzentrationsgeschichte {#the-concentration-story}

Das steuerpflichtige [[term:brokerage]] enthält **Bel-Air Tech**, eine große Einzelposition mit
**erhöhter [[term:volatility]]** (die Erfassung nutzt eine Aktien-Wachstumsannahme mit hoher
Volatilität), über diversifizierten Aktien- und Anleihenpositionen, Traditionellem, **beiden**
[[term:roth|Roth 401(k)]]<!-- term-skip: traditional, 401k — one pill per account phrase --> und Roth [[term:ira]], und Bargeld.

| Wonach suchen | Wo |
|---------------|----|
| **Bel-Air Tech** | [[nav:birds-eye]] → Vermögen / Positionen; [[nav:bs-table]] des ausgewählten Jahres |
| Mehrtopf-Mischung | Steuerpflichtige Aktien + Anleihen, traditionelles 401(k), Roth 401(k), Roth IRA, Bargeld |
| Hohes absolutes Vermögen | Nettovermögensverteilung / Schlüsselprognosen (Größenordnung) |
| Karte der Steuertöpfe | [Geld schützen](/learn/sheltering_money), derselbe Plan, Schwerpunkt Regeln |

**Lehrbehauptung:** Konzentration plus Volatilität **verbreitert** die
[[term:monte-carlo|Monte Carlo]]-Wolke. Das **mittlere End-Nettovermögen** liegt oft **deutlich
über dem [[term:median]]** (fetter rechter Rand). **Schlüsselprognosen → Max** kann weit von der
**GMF** entfernt liegen. Dann wird [Aufdecken](/learn/nw_distribution_compression) ein Lesewerkzeug,
keine Dekoration.

Die Form unten ist illustrativ, kein Ziel. In einem Lauf mit ein paar hundert Pfaden landet das
mediane End-Nettovermögen der Banks im Bereich hoher einstelliger bis niedriger zweistelliger $MM,
während p90 und Mittelwert viel höher laufen, dasselbe Muster, das die Lektion Aufdecken zeigt.

---

## Wohin schauen {#where-to-look}

Die Eingaben des Plans sitzen in den definitorischen Ansichten, und die Ergebnisse über die Pfade
sitzen im Prognosemodul und in der Simulationszusammenfassung.

### Definitorisch {#definitional}

1. [[nav:birds-eye]] → Personen. Philip und Vivian; Annahmen zu Ruhestand und Langlebigkeit.
2. **Vermögen**. **Bel-Air Residence**, Mehrtopf-Konten, **Bel-Air Tech**.
3. Modus **Cashflow**. Lebensphasen, [[term:ss]], Gesundheit, [[term:ltc]].

[[jump:birds-eye]]

### Projiziert {#projected}

Wählen Sie [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]. Öffnen Sie die
**Simulationszusammenfassung**.

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Vorschau | Ansicht | Rolle hier |
|----------|---------|------------|
| [[img:banks-bs-chart|preview]] | [[nav:bs-chart]] | Vermögensskala über den Horizont; Haus + Konten. |
| [[img:banks-bs-table|preview]] | [[nav:bs-table]] | **Bel-Air Tech** und Topfsummen finden. |
| [[img:banks-cf-chart|preview]] | [[nav:cf-chart]] | Doppeleinkommen → Übergang in den Ruhestand; Langzeitpflege spät. |
| [[img:banks-nw-distribution|preview]] | **Nettovermögensverteilung** | Rechter Rand; probieren Sie **Aufdecken**. |
| [[img:banks-key-forecasts|preview]] | **Schlüsselprognosen** | Min / GMF / Max. Ein weit außen liegendes Max ist das Konzentrationssignal. |
| [[img:banks-si-table|preview]] | [[nav:si-table]] | Entnahmejahre: Restverkäufe (Vorgabe anteilig). |

Bevorzugen Sie **[[term:fid-gmf|FID 0 / GMF]]**. Diagrammsteuerungen:
[Heranzoomen / Zoom / Aufdecken](/learn/getting_around#chart-chrome).

---

## Probieren Sie dies {#try-this}

Arbeiten Sie diese Schritte am Plan rechts ab.

1. Orientieren Sie sich an **Bel-Air Residence** und **Bel-Air Tech** ([[nav:birds-eye]] /
   [[nav:bs-table]]).
2. **Simulationszusammenfassung**. Notieren Sie den Erfolg unter **Silber** (auf diesem Beispiel
   oft bequem) und die **Streuung** zwischen GMF-nahen Ergebnissen und **Max**.
3. **Decken Sie** die Verteilung auf, wenn die Masse nach links gequetscht ist. Siehe
   [Wenn die Ergebniswolke „Aufdecken“ braucht](/learn/nw_distribution_compression).
4. Optional: **Schlüsselprognosen → Max**, dann öffnen Sie [[nav:bs-chart]] / [[nav:cf-chart]] auf
   dieser [[term:fid]] für ein Jahr tief im Plan. Das ist die Geschichte eines „Glückspfads“,
   nicht der Plan, den Sie zeichnen.
5. Optionaler Kontrast: Öffnen Sie [Springfield Baseline](/learn/springfield_baseline). Dieselben
   *Mechanismen*, niedrigere absolute Skala und keine konzentrierte Position im Stil von Bel-Air.

[[jump:key-forecasts]]

Ziehen Sie „Konzentration **verbreitert die Ränder**“ dem Festnageln eines Prozentsatzes oder
Dollarbetrags vor.

---

## Die Familie Banks als Nächstes {#banks-family-next}

| Thema | Lektion |
|-------|---------|
| Regeln für steuerpflichtig / traditionell / Roth | [Geld schützen](/learn/sheltering_money) |
| Erzwungenes RMD gegen die Steuerreihenfolge des Rests | [Erzwungenes traditionelles RMD](/learn/banks_forced_rmd) |
| Fette rechte Ränder lesen | [Wenn die Ergebniswolke „Aufdecken“ braucht](/learn/nw_distribution_compression) |
| Rundgang durch den wohlhabenden Doppelverdiener | [Der Haushalt Springfield](/learn/springfield_baseline) |
| Residualstrategien | [Reihenfolge nach Steuerkonto vs. pro rata](/learn/springfield_tax_order) · [Glide oder pro rata](/learn/springfield_glide) |

---

*Illustrative Mengen. Lehrbehauptung: Hohes Nettovermögen plus konzentrierte Aktien mit hoher Volatilität verbreitert die Streuung des End-Nettovermögens. Max ist eine Randgeschichte. Nutzen Sie Aufdecken und GMF für die Masse.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
