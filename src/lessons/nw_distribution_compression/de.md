<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/nw_distribution_compression.de.md
tutilis-locale: de translated
-->
# Wenn die Wolke Reveal braucht

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.reading.reveal_compression
  outline-path: Using Tutilis › Reading the plan › When the outcome cloud needs Reveal
  document-id: nw_distribution_compression
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/nw_distribution_compression.md
-->

<!--- α <lesson_body> -->
**Reveal** unter **Nettovermögensverteilung** ändert den Plan **nicht** und auch nicht die [[term:monte-carlo|Monte Carlo]]-Ziehungen.
Es ändert nur die **horizontale Skala**, damit ein paar extreme Enden die Masse der Pfade
nicht zu einer unlesbaren Spitze nahe null (oder nahe dem linken Achsenrand) zusammendrücken.

Diese Lektion nutzt das Beispiel **Banks Baseline** — einen **[[term:hnw]]**-Haushalt mit großen Salden und einer
**hochvolatilen** konzentrierten Aktienposition. Genau diese Mischung ist es, bei der **Schlüsselprognosen → Max** (und das
rechte Ende der Wolke) oft **weit** vom [[term:median]] entfernt liegt, sodass die lineare Skala am meisten schadet.

[[jump:key-forecasts]]

| Kennzeichnung | Warum |
|---------------|-------|
| **hnw** | Hohes absolutes Vermögen; Max-Pfade können in die zig Millionen laufen |
| **reveal** | Anzeigesteuerung, um die Wolke zu lesen — kein Planhebel |

Wenn Diagrammsteuerungen neu für Sie sind, überfliegen Sie zuerst
[Diagrammsteuerungen — Heranzoomen, Zoom und Reveal](/learn/getting_around#chart-chrome).

Der aktive Plan rechts ist **Banks Baseline** (`banks_baseline`).

---

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Warum drückt ein wohlhabender Plan mit volatilen Positionen das Verteilungsdiagramm zu einer Spitze zusammen?**
   Siehe [Warum HNW Reveal stärker braucht](#why-hnw-needs-reveal-more).
2. **Warum zählt Reveal auf einem wohlhabenden Mittelstandsplan wie Springfield weniger?** Siehe
   [Warum HNW Reveal stärker braucht](#why-hnw-needs-reveal-more).
3. **Woran erkenne ich in den Schlüsselprognosen, dass die Wolke zusammengedrückt ist?** Siehe
   [Wohin schauen](#where-to-look).
4. **Wie lese ich die Hauptwolke, ohne die Ausreißer aus dem Lauf zu verlieren?** Siehe
   [Wohin schauen](#where-to-look).
5. **Was lässt Reveal im Plan und im Monte-Carlo-Lauf unverändert?** Siehe
   [Was Reveal *nicht* ist](#what-reveal-is-not).
6. **Was entgeht mir, wenn ich nur das lineare Diagramm lese?** Siehe [Warum das zählt](#why-this-matters).

</div>
</aside>

---

## Warum HNW Reveal stärker braucht {#why-hnw-needs-reveal-more}

Das Endnettovermögen auf einem langen Horizont ist ungefähr „Vermögen × zusammengesetzter Pfad“. Mit:

- **großem Startvermögen** (Wohnimmobilie + Mehrtopf-Portfolio im Banks-Beispiel) und
- **Positionen mit hoher Volatilität** (zum Beispiel eine konzentrierte Position im Stil „Bel-Air Tech“ mit erhöhter [[term:volatility]]),

kann ein **kleiner Anteil** der Pfade **Größenordnungen** über dem Median enden. Auf einer **linearen**
horizontalen Achse muss das Diagramm von Min bis Max reichen, sodass die **Mitte** der Verteilung (dort, wo die meisten
Lektionen den Erfolg bei Silber interessiert) auf wenige Pixel zusammenschrumpft.

**Wohlhabende Mittelstandsbeispiele** (etwa Springfield) haben weiterhin einen rechten Schwanz, aber das absolute Max liegt näher
am Großteil der Wolke — Reveal hilft seltener oder weniger dramatisch.

Die Monte-Carlo-Form unten ist illustrativ, auf etwa 500 Pfaden unter Silber. Lesen Sie die Richtung, nicht die Zahlen:

| Beispiel | Grobes medianes End-NV | Rechter Schwanz (z. B. p90 / Mittel vs. Median) |
|----------|------------------------|-------------------------------------------------|
| **Banks Baseline** (HNW) | Hoher einstelliger → niedriger zweistelliger Millionenbereich | Mittel **deutlich über** dem Median; p90 **viel** größer als der Median |
| Springfield Baseline | Mittlerer einstelliger Millionenbereich | Schief, aber kleineres absolutes Max |
| Magere Starterbeispiele | Niedrige / mittlere sechs Stellen | Relatives Rauschen kann groß sein; die absolute Achse ist oft kürzer |

Lehrbehauptung: **Reveal ist am nützlichsten, wenn Max (und der rechte Schwanz) die Skala beherrschen** — häufig
bei HNW-Büchern mit hoher Volatilität.

---

## Wohin schauen {#where-to-look}

1. [[nav:forecaster]] → Simulationszusammenfassung → Verteilung — standardmäßig eine lineare Wolke.
2. **Schlüsselprognosen** — notieren Sie **Min**, **GMF**, **Max** (und die Quartile). Wenn **Max** enorm gegenüber
   **GMF** / mediannahen Zeilen ist, erwarten Sie eine zusammengedrückte Wolke.
3. **Reveal**-Schieber unter der Verteilung (das Produkt kann anstoßen: „Ausreißer drücken die Punkte zusammen?“).
4. Optional: die Verteilung **heranzoomen**, damit das Abtasten der Punkte leichter ist
   ([Diagrammsteuerungen](/learn/getting_around#chart-chrome)).

[[jump:reveal]]

| Vorschau | Ansicht | Rolle hier |
|----------|---------|------------|
| [[img:banks-nw-distribution|preview]] | **NV-Verteilung** | Lineare Wolke; Reveal sitzt unter dem Diagramm. |
| [[img:banks-key-forecasts|preview]] | **Schlüsselprognosen** | Min / GMF / Max — ein weit draußen liegendes Max ist das Reveal-Signal. |

Bevorzugen Sie **[[term:fid-gmf|FID 0 / GMF]]** für Pfaddetails, nachdem Sie eine Schlüsselzeile gewählt haben. Momentaufnahmen in Dollar sind **keine** Ziele.

---

## Probieren Sie dies {#try-this}

1. Öffnen Sie dieses Banks-Beispiel. Die Simulationszusammenfassung ist schon gefüllt (oder **Neu simulieren**, wenn sie veraltet ist).
2. Vergleichen Sie in den **Schlüsselprognosen** **Max** mit **GMF** (oder dem Mittel) — nur die Größenordnung. Bei HNW plus
   Volatilität ist Max oft **dramatisch** größer.
3. Werfen Sie einen Blick auf die **Verteilung** mit Reveal **ganz links** (linear). Beachten Sie, wie wenig der
   Diagrammbreite der Großteil der Punkte nutzt.
4. Schieben Sie **Reveal** in Richtung logarithmisch. Die **Hauptwolke** sollte sich öffnen; extreme Enden gibt es
   weiter — sie werden nicht aus dem Lauf gelöscht.
5. Optional: öffnen Sie **Springfield Baseline** (oder ein anderes wohlhabendes Mittelstandsbeispiel) in einem zweiten Tab. Dieselbe
   Steuerung, meist ein **weniger** dramatischer Bedarf an Reveal, weil das absolute Max näher am Feld liegt.
6. Optional: zoomen Sie die Banks-Verteilung **heran** und tasten Sie Punkte nahe Min / GMF / knapp rechts vom
   roten Band ab — [[term:hover]]-Hinweise funktionieren unter Reveal weiter.

Bevorzugen Sie „Reveal öffnet die Masse, wenn Max die Achse besitzt“ gegenüber jeder festen Schieberposition.

---

## Was Reveal *nicht* ist {#what-reveal-is-not}

| Nicht | Stattdessen |
|-------|-------------|
| Die Erfolgsdefinition ändern | [Was bedeutet Erfolg?](/learn/springfield_success) |
| Die verbleibende Verkaufspolitik ändern | [Reihenfolge nach Steuerkonto](/learn/springfield_tax_order) / [Gleitpfad](/learn/springfield_glide) |
| Ausreißerpfade aus Monte Carlo streichen | Ausreißer bleiben in der Stichprobe; nur die **Ansicht** ändert sich |
| Für jede Lektion nötig | Wolken der wohlhabenden Mitte sind linear oft lesbar |

---

## Warum das zählt {#why-this-matters}

| Wenn Sie nur… | Können Sie verpassen… |
|---------------|------------------------|
| Eine lineare HNW-Wolke anstarren | Wo **die meisten** Pfade tatsächlich landen |
| Max als „das“ Ergebnis behandeln | Max ist eine **Schwanz**-Geschichte; GMF / Quartile beschreiben die Masse |
| Reveal nie nutzen | Erfolgsquote und Medaille rechnen weiter korrekt, aber das **Bild** lügt durch Zusammendrücken |

---

## Wohin als Nächstes {#where-to-go-next}

| Thema | Lektion / Beispiel |
|-------|--------------------|
| Karte der Diagrammsteuerungen | [Sich zurechtfinden — Diagrammsteuerungen](/learn/getting_around#chart-chrome) |
| Erzwungene RMD in der Banks-Familie | [Erzwungene traditionelle RMD](/learn/banks_forced_rmd) |
| Erfolgsdefinition | [Was bedeutet Erfolg?](/learn/springfield_success) |
| Banks-HNW-Orientierung | [Lernen Sie den Haushalt Banks kennen (HNW)](/learn/banks_baseline) |
| Tour des Doppelverdiener-Haushalts der wohlhabenden Mitte | [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline) |

---

*Illustrative Größen. Lehrbehauptung: HNW-Bücher mit hoher Volatilität brauchen oft Reveal, weil Max und
der rechte Schwanz eine lineare NV-Achse beherrschen. Nur Anzeige — keine Planänderung.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
