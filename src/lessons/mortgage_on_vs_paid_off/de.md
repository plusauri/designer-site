<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/mortgage_on_vs_paid_off.de.md
tutilis-locale: de translated
-->
# Mit Hypothek oder abbezahlt

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.housing.mortgage_vs_paid_off
  outline-path: Household planning › Housing and debt › Mortgage on vs paid off
  document-id: mortgage_on_vs_paid_off
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: Blessed
  host-hint: MultiDossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/mortgage_on_vs_paid_off.md
-->

<!--- α <lesson_body> -->
Diese Lektion ist ein **Kontrast**, kein neuer Haushalt. Sie vergleicht zwei kalibrierte Beispiele:

| Beispiel | Wohnen | Rolle |
|----------|--------|-------|
| **Springfield Baseline** (rechte Seite) | Haus **mit** Hypothek (Tilgung + Zinsen) | Hypothekenseite der Geschichte |
| **Johnsons Baseline** | Haus **abbezahlt** (nur Eigenkapital; kein Abfluss aus Tilgung und Zinsen) | Abbezahltes Gegenstück |

Beide sind Pläne der wohlhabenden Mitte in der Mitte der Berufslaufbahn, mit zwei Verdienenden, im selben Steuerstaat, auf ein ähnliches
Band eines **knappen Verfehlens** unter den Produktstandards gezielt. Das ist Absicht: lastenfrei ist **kein**
automatisches „Sie haben schon gewonnen“, und eine Hypothek ist **kein** moralisches Versagen — beide haben weiter Hebel.

---

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Wo zeigen sich Haus und Hypothek im Plan?** Siehe
   [Springfield: mit Hypothek](#springfield-mortgage-on).
2. **Warum schrumpft der Zinsanteil einer Zahlung, während der Tilgungsanteil wächst?** Siehe
   [Springfield: mit Hypothek](#springfield-mortgage-on).
3. **Wie zeigt sich eine Hypothekenzahlung in der Bilanz, in den Cashflows und im Erfolg über einen
   langen Plan?** Siehe [Springfield: mit Hypothek](#springfield-mortgage-on).
4. **Was ändert sich für einen Haushalt, der ein ähnliches Haus ohne diese Zahlung besitzt?** Siehe
   [Johnsons: abbezahlt](#johnsons-paid-off).
5. **Warum ist ein abbezahltes Haus kein automatischer Sieg?** Siehe
   [Johnsons: abbezahlt](#johnsons-paid-off).
6. **Ist das Eigenkapital in einem abbezahlten Haus dasselbe wie Geld auf den Konten?** Siehe
   [Was mitzunehmen ist](#what-to-take-away).

</div>
</aside>

Wir reihen nicht „das Haus immer abbezahlen“ gegen „immer anlegen“. Wir lernen, die
Wohnschuld im Produkt zu **sehen** und zwei ehrliche Baselines zu **vergleichen**.

---

## Springfield: mit Hypothek {#springfield-mortgage-on}

Die rechte Seite ist **Springfield Baseline**.

### Wo Haus und Schuld leben {#where-the-house-and-the-debt-live}

1. Öffnen Sie [[nav:birds-eye]] (oben auf [[nav:dossier]], oder die Steuerung [[nav:birds-eye]] in der Werkzeugleiste).
2. Wählen Sie [[nav:path:birds-eye|account]] oder [[nav:path:birds-eye|holding]] — finden Sie
   **Evergreen Terrace** (das Zuhause; Sachwert / Eigenkapital).
3. Wechseln Sie zu [[nav:path:birds-eye|cash-flow]] — suchen Sie **Home mortgage ([[term:principal]])** und
   **Home mortgage (Zinsen)** unter den Abflüssen. Diese Zeilen sind der Lehrpuls dieses Beispiels.

[[jump:home-equity]]

[[jump:principal|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.debt-principal-interest]]

**[[term:hover|Zeigen Sie auf]]** eine der beiden Hypothekenzeilen. Beide Zeilen kommen aus demselben Kredit, also öffnen beide dieselbe Karte. Oben auf der Karte stehen die Konditionen des Kredits: der Restsaldo, der Satz, die monatliche Zahlung und das Haus, das er finanziert. Der Abschnitt **Flusswert** darunter listet die Zahlung und ihre beiden Hälften, jede mit erstem und letztem Jahr. Die **Sparkline** unten zeichnet beide Hälften über die Laufzeit des Kredits.

- Der **Kapitalbetrag** beginnt **niedriger** und **steigt**. Spätere Jahre legen mehr von jeder Zahlung auf die Tilgung des Kredits.
- Die **Zinsen** beginnen **höher** und **fallen**. Frühe Jahre sind zinslastig, und wenn der Saldo schrumpft, sind weniger Zinsen fällig.

[[img:mortgage-principal-hover]]

*Die Karte Home mortgage. In der Sparkline kreuzen sich die beiden Linien auf halbem Weg durch den Kredit: die Zinsen fallen gegen null, während der Kapitalbetrag steigt, bis er fast die ganze Zahlung ausmacht.*

So sieht „eine Hypothek abbezahlen“ in Cashflow-Form aus: Sie beginnen unter der **Last der
Zinsen**, und Sie **enden**, indem Sie den **Kapitalbetrag** tilgen. Dieselbe monatliche Verpflichtung im Geist; die
*Mischung* der beiden Abflüsse kippt über die Laufzeit des Kredits.

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — warum die Zinsen fallen und der Kapitalbetrag steigt</summary>
<div class="lesson-math-body">

Ein Festzinskredit von \(P\), zurückgezahlt über \(n\) Monate zum Monatssatz \(r\), hat eine konstante Zahlung

\[
M = P\,\frac{r}{1-(1+r)^{-n}}
\]

Die Zinsen jedes Monats sind der Satz mal das, was noch geschuldet ist, \(I_k = r\,B_{k-1}\), und der Rest der
Zahlung tilgt Kapital. Der Saldo fällt nur, also fallen die Zinsen nur. Der Kapitalanteil
wächst jeden Monat um den Faktor \(1+r\):

\[
P_k = (M - rP)\,(1+r)^{k-1}
\]

Bei einem 30-Jahres-Kredit zu 6,5 % sind die Zinsen etwa 86 % der ersten Zahlung, und der Kapitalbetrag übersteigt
die Zinsen erstmals um Monat 233, im zwanzigsten Jahr.

</div>
</details>

Mit ausgewähltem [[nav:cash-flow]] können diese Abflüsse auch bei den **Verbindlichkeiten** im Vermögensbild
sitzen — unkonventionelle Buchhaltung, nützlich für „was müssen wir finanzieren?“ neben „was besitzen wir?“.

### Projizierter Pfad — [[nav:forecaster]] {#projected-path-navforecaster}

Schon gefüllt, wenn Sie [[nav:forecaster]] öffnen (kein manuelles „Prognose starten“ zum Beginn).

Im **Prognosedetail** wählt eine Reihe von **Chips**, welche Karten gezeigt werden. Sie steuern das Layout —
schalten Sie Chips für die Ansichten an, die Sie interessieren, und den Rest aus, damit das Panel lesbar bleibt. Die Reihenfolge
im Produkt ist [[nav:path:bs-chart|bs-table|cf-chart|cf-table]] (dann [[nav:taxes]] /
[[nav:si-chart]] / [[nav:rec]], wenn Sie sie einschalten).

**Für diese Lektion wählen Sie nur diese Chips** (und lassen Steuern / Verkäufe und Anlagen / Abstim. aus, außer Sie
erkunden weiter):

- [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]

Die Vorschauen unten passen zu diesen Chips in **voller Referenzgröße** (nur die Struktur — die Live-Zahlen rechts
können abweichen):

| Vorschau | Ort | Was auffällt |
|----------|-----|--------------|
| [[img:mortgage-bs-chart|preview]] | [[nav:bs-chart]] | Hauswert gegen Kredite; Eigenkapital wächst, während Kapital getilgt wird (**Evergreen Terrace** gegen **Home mortgage**). |
| [[img:mortgage-bs-table|preview]] | [[nav:bs-table]] | Gewähltes Jahr: Sachwerte, Konten und die Hypothekenzeile. |
| [[img:mortgage-cf-chart|preview]] | [[nav:cf-chart]] | Abflussstapel, die den Hypothekendienst enthalten, bis der Kredit getilgt ist. |
| [[img:mortgage-cf-table|preview]] | [[nav:cf-table]] | Gewähltes Jahr: Zeilen für Kapitalbetrag und Zinsen, kopierbar. |

Die **Simulationszusammenfassung** (unter / neben dem Detail — keine Chips des Prognosedetails) hält schon den Mehrpfad-
Lauf:

| Vorschau | Ort | Was auffällt |
|----------|-----|--------------|
| [[img:mortgage-nw-distribution|preview]] | **NV-Verteilung** | Wolke der Enden + Erfolg bei Silber. |
| [[img:mortgage-key-forecasts|preview]] | **Schlüsselprognosen** | Min / GMF / Max und verwandte Kennzahlen. |

Schieben Sie **Jahr** durch frühe und spätere Planjahre. Bevorzugen Sie **[[term:fid-gmf|FID 0 / GMF]]**, außer Sie besichtigen
Pfade. **Neu simulieren** nur nach einer Änderung in den Transformationen, wenn Sie einen frischen Mehrpfad-Lauf wollen.

### Ehrlicher Rahmen für Springfield {#honest-frame-for-springfield}

Die Hypothek ist ein **materieller Cashflow-Abfluss** während der Arbeit und oft in die Horizontjahre der Ruhestandsplanung
hinein — groß genug, um mit Lebensstil und Sparen zu konkurrieren, keine belanglose Zeile. Sie ist
nicht die ganze Geschichte — zwei Einkommen, Portfolio und Lebensphasen beherrschen das Drama weiter.

---

## Johnsons: abbezahlt {#johnsons-paid-off}

Bleiben Sie in dieser Lektion. Nutzen Sie die Chips **Aktiver Plan** oben (oder den Link unten), um die Johnsons auf die
rechte [[term:canvas]] zu legen — dieselbe Prosa, anderer Haushalt.

**[Johnsons (abbezahlt) rechts zeigen →](#canvas-dossier:johnsons_baseline)**

[Zurück zu Springfield (Hypothek) →](#canvas-dossier:springfield_baseline)

Bei den Johnsons sollten Sie **keine** Serie aus Hypothekentilgung und -zinsen finden. Sie haben weiter ein
wertvolles Haus in der Bilanz — namens **Cul-de-Sac Home** — Eigenkapital ohne die Zahlung.

### Warum die Johnsons nicht „Springfield minus den Kredit“ sind {#why-johnsons-are-not-springfield-minus-the-loan}

Wenn wir nur Springfields Hypothek löschten und jede andere Zahl gleich ließen, sähe abbezahlt aus
wie ein geschenkter Sieg. Diese Beispiele sind absichtlich **neu kalibriert**:

- Die Johnsons tragen oft einen **höheren Lebensstil** (besonders im Ruhestand) und ein **etwas magereres**
  Portfolio, damit der Erfolg in einem vergleichbaren Band des knappen Verfehlens bleibt.
- Derselbe Staat / dieselbe Veranlagungsform, damit die Wohnwende nicht von einer anderen Steuerkarte überlagert wird.

Also: vergleichen Sie **Mechanismen** (Tilgung und Zinsen da oder nicht, Geld übrig zum Anlegen / Ausgeben), nicht
„welche Familie reicher ist“.

---

## Probieren Sie dies {#try-this}

### Bei Springfield (diese Seite) {#on-springfield-this-page}

1. [[nav:path:birds-eye|cash-flow]] — finden Sie Tilgung und Zinsen von **Home mortgage**; zeigen Sie auf jede
   und vergleichen Sie die Sparklines (Zinsen über die Zeit runter, Kapitalbetrag rauf).
2. [[nav:path:forecaster|cf-table]] — wählen Sie ein Arbeitsjahr; notieren Sie die Hypothekenzeilen unter den Ausgaben.
3. Schieben Sie **Jahr** vor — beobachten Sie, wie Kapitalbetrag/Zinsen sich entwickeln (oder enden) relativ zu Lebensstil und
   Einkommen.
4. Werfen Sie einen Blick auf die **Simulationszusammenfassung** unter Silber — nur die Größenordnung.

[[jump:cash-flow|output]]

### Bei den Johnsons (dieselbe Lektion, andere Zeichenfläche) {#on-johnsons-same-lesson-switched-canvas}

1. Wechseln Sie mit **[Johnsons (abbezahlt)](#canvas-dossier:johnsons_baseline)** oder dem Chip Aktiver Plan.
2. [[nav:path:birds-eye|cash-flow]] — bestätigen Sie **keine** Serie aus Hypothekentilgung und -zinsen; Lebensstil
   und zwei Verdienende sind weiter da.
3. [[nav:cf-chart]] / [[nav:cf-table]] — Abflüsse ohne diesen Hypothekenstapel; **Cul-de-Sac Home** weiter in der Bilanz
   als Eigenkapital.
4. **Simulationszusammenfassung** — Erfolg weiter eher knappes Verfehlen, nicht „abbezahlt = automatisch 100 %“.

### Optionales Was-wäre-wenn (nur Springfield) {#optional-what-if-springfield-only}

Wechseln Sie zurück zu **[Springfield (Hypothek)](#canvas-dossier:springfield_baseline)**, dann
[[nav:transforms]] → Änderbare. Sie können Lebensstil oder **Prognoseende** erkunden wie in früheren Lektionen;
die Starbeobachtung dieser Lektion ist die **Anwesenheit der Hypothek**, nicht eine nötige Transformation. Wenn
Sie etwas ändern, **Neu simulieren** für einen vollen Mehrpfad-Vergleich.

---

## Was mitzunehmen ist {#what-to-take-away}

| Idee | In Klartext |
|------|-------------|
| **Tilgung und Zinsen sehen** | Cashflow-Modus + [[nav:cf-chart]]/Tabelle machen Kapitalbetrag und Zinsen zu eigenen Zeilen. |
| **Haus ≠ freies Geld** | Abbezahltes Eigenkapital ist echtes Vermögen, aber nicht dasselbe wie liquide Konten. |
| **Das Gegenstück ist kalibriert** | Die Johnsons sind kein geschenkter Sieg; Springfield ist nicht allein durch den Kredit verloren. |
| **Ein Hebel nach dem anderen** | Frühere Lektionen: Ruhestandszeitpunkt, Lebenshaltungsausgaben. Hier: Sichtbarkeit der Wohnschuld. |

---

## Wohin als Nächstes {#where-to-go-next}

| Thema | Lektion / Beispiel |
|-------|--------------------|
| Springfield-Besetzung + Ruhestand | [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline) |
| Phasen der Lebenshaltungsausgaben | [Den Plan mit Lebenshaltungsausgaben biegen](/learn/springfield_living_spend) |
| Abbezahltes Gegenstück allein | [Lernen Sie den Haushalt Johnsons kennen](/learn/johnsons_baseline) |
| Was „Erfolg“ bedeutet | [Was bedeutet Erfolg?](/learn/springfield_success) |
| Karte der App | [Sich in der App zurechtfinden](/learn/getting_around) |

---

*Die Größen sind illustrativ. Was die Lektion lehrt, ist der Mechanismus und der Kontrast.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: MultiDossier — Multi-plan switch — primary + alternate dossier ids. -->
