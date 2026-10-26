<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/getting_around.de.md
tutilis-locale: de translated
-->
# Sich in der App zurechtfinden

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Reading Lesson (Getting Around)
  document-id: getting_around
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full German of the current English Getting Around lesson. Same image ids; the page serves name.de.png when that snapshot exists.
  port-source: dossiers/getting_around.md
  source-file: getting_around.md
-->

<!--- α <lesson_body> -->
**Hier starten.** Diese Seite ist eine **Karte der App**. Sie zeigt, welche Schaltfläche wohin führt
und wofür jeder Bereich da ist. Es ist keine Finanzlektion, und sie ist nicht zum Durchlesen von
Anfang bis Ende gedacht. Jede Überschrift unten ist eine Zeile, die Sie öffnen können. Öffnen Sie
die Zeile, die Sie brauchen, und schließen Sie sie wieder.

Lieber zusehen? Die [Screencast-Lektion (Sich zurechtfinden)](/learn/getting_around_screencast)
geht dieselbe Karte in wenigen Minuten durch.

Der [[term:live-plan]] neben dieser Lektion ist der Haushalt **Springfield**, dieselbe Besetzung wie
in [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline). Sie müssen ihr Geld
noch nicht verstehen. Nehmen Sie sie als vollständig geladenes Beispiel, damit jedes Panel etwas
Echtes zeigen kann. Die Beispiele hier sind **schreibgeschützt**. Was-wäre-wenn-Fälle laufen über
[[term:transforms]], nicht indem Sie Springfield Zeile für Zeile umschreiben.

---

## Zuerst Platz schaffen {#make-room}

Der Plan neben einer Lektion ist die ganze App, deshalb ist er dicht. Sie können Platz schaffen.
Jede Leiste hat an ihrem Rand einen kleinen blauen Griff mit einem Pfeil. Klicken Sie einen Griff,
um seine Leiste wegzulegen, und klicken Sie ihn erneut, um die Leiste zurückzuholen. Ein Griff sagt
erst, was er tut, wenn Sie den Zeiger darauf ruhen lassen, wie dieser an der Kopfzeile:

[[img:ga-header-handle|control]]

Es gibt vier Griffe. **Navigation ausblenden** legt die Spalte der Bereichsschaltflächen links weg
(die [Navigationsleiste](#main-navigation)). **Kopfsteuerungen ausblenden** legt die Kopfzeile oben
weg. **Werkzeugleiste ausblenden** legt die Leiste unten weg. **Über dieses Dossier ausblenden**
legt das Panel rechts von der Haushaltsübersicht in [[nav:dossier]] weg. Dieses Panel startet
weggelegt, außer der Plan hat ein Problem. Dann öffnet es sich von selbst, und sein Griff wird rot
oder bernsteinfarben. Nichts, was Sie weglegen, geht verloren, und der Plan bleibt, wie er war.

Lassen Sie die Spalte der Bereichsschaltflächen offen, während Sie einer Lektion folgen. Die
Lektionen sagen Ihnen, wo Sie klicken sollen, indem sie diese Schaltflächen benennen.

Eine Arbeitsweise passt den meisten. Ziehen Sie den Teiler, sodass die Lektion schmal ist und nicht
im Weg steht. Sehen Sie sich dann im Plan um und klicken Sie eine Sache nach der anderen, um zu
sehen, was sie tut. Das Beispiel ist schreibgeschützt, deshalb kann nichts, was Sie klicken, es
beschädigen.

---

## Was Sie lernen

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt,
der sie beantwortet.

1. **Was sind die Bereiche auf der Navigationsleiste, und wofür ist jeder da?** Siehe
   [Die Navigationsleiste](#main-navigation).
2. **Wo sehe ich die Personen, Konten und Cashflows des Haushalts durch?** Siehe
   [Dossier](#dossier).
3. **Wie sehe ich den ganzen Haushalt auf einen Blick, von überall in der App?** Siehe
   [Vogelperspektive](#birds-eye).
4. **Wo ändere ich die Regeln, nach denen die Prognose rechnet, etwa Wachstum und Steuern?** Siehe
   [Annahmen](#assumptions).
5. **Wie rechne ich den Plan vor und lese einen Pfad oder tausend davon?** Siehe
   [Prognosemodul](#forecaster).
6. **Wie probiere ich eine Was-wäre-wenn-Änderung, ohne den Basisplan anzufassen?** Siehe
   [Transformationen](#transforms).
7. **Was tun die Werkzeuge auf der unteren Leiste?** Siehe [Die untere Leiste](#bottom-bar).
8. **Wie vergrößere, zoome oder öffne ich ein Diagramm, das schwer zu lesen ist?** Siehe
   [Diagrammsteuerungen](#chart-chrome).

</div>
</aside>

---

## Die Navigationsleiste: sieben Bereiche {#main-navigation}

Am linken Rand liegt eine Spalte von Symbolen. Klicken Sie eines, und das Hauptpanel **wird**
dieser Bereich. Sie wechseln den Fokus des Arbeitsbereichs, statt unverwandte Editoren auf einem
Bildschirm zu stapeln.

| Bereich | Wofür er da ist |
|------|----------------|
| [[nav:dossier]] | Wo der Haushalt definiert wird: Personen, Vermögen und Verbindlichkeiten, Cashflows. [Mehr](#dossier) |
| [[nav:assumptions]] | Die Regeln, nach denen die Prognose rechnet: Steuern, Geldbewegungen, Roth-Umwandlungen und was als Erfolg zählt. [Mehr](#assumptions) |
| [[nav:risk]] | Wie Positionen und Kategorien auf Risiko und Rendite liegen. Später nützlich. Beim ersten Durchgang können Sie den Bereich überspringen. |
| [[nav:forecaster]] | Den Plan Jahr für Jahr rechnen und tausend Läufe zu einer Erfolgswahrscheinlichkeit zusammenfassen. [Mehr](#forecaster) |
| [[nav:transforms]] | Was-wäre-wenn-Änderungen an einer **Kopie** des Plans, gelesen gegen das Original. [Mehr](#transforms) |
| [[nav:region]] | Derselbe Plan, als lebten Sie woanders. Heute sind das US-Bundesstaaten. [Mehr](#region) |
| [[nav:guardrails]] | Veröffentlichte Regeln für dynamische Entnahmen, nebeneinander auf einem gemeinsamen Pfad. Der Vergleich ist deterministisch und bleibt lokal. Er schreibt nichts in Ihren Plan. |

**Ein Bereich liegt nicht auf der Leiste.** [[nav:birds-eye]] sitzt in der **oberen Leiste**, und
nur, wenn Sie nicht im Dossier sind. Siehe [Vogelperspektive](#birds-eye).

Unten sitzen kleine Werkzeuge, die sich **über** Ihre Arbeit öffnen, statt sie zu ersetzen. Siehe
[die untere Leiste](#bottom-bar). **Hilfe**, **Reach Out** und **Erweitert** sind die Ausnahme. Sie
sitzen am Fuß der Leiste selbst, nicht auf der unteren Leiste.

---

## [[nav:dossier]] — wo der Haushalt definiert wird {#dossier}

[[nav:dossier]] hält die Quelldaten des Plans: Personen, Vermögen und Verbindlichkeiten, Cashflows.
[[nav:birds-eye]] ist oben darin eingebettet, sodass Sie hier alles sehen, was erfasst wurde.

**In diesen Lektionen tippen Sie keine Finanzdaten.** Der Haushalt Springfield ist zum Lehren schon
gebaut. Sie lesen ihn. Wenn eine Lektion eine Änderung will, schickt sie Sie zu
[[nav:transforms]]. In der Desktop-App ist es umgekehrt. Das Dossier ist der Ort, an dem Ihr echter
Plan erfasst und auf dem Laufenden gehalten wird.

Im Alltag braucht ein bereits erfasster Plan wenig Besuche. Die Bilanz schreibt sich über Nacht
nicht von selbst um. Was sich ändert, sind Ihre Fragen, und die leben in [[nav:forecaster]],
[[nav:transforms]] und [[nav:region]]. [[nav:birds-eye]] ist der Weg, „Was habe ich eingetragen?“
zu prüfen, ohne diese Bereiche zu verlassen.

---

## [[nav:birds-eye]] — der Haushalt in einer Einblendung {#birds-eye}

Der ganze Haushalt auf einen Blick: Personen, Vermögen und Verbindlichkeiten, die Cashflow-Reihen
und eine Zeitleiste der Lebensereignisse.

Weil die Übersicht **oben in [[nav:dossier]] bereits eingebettet** ist, erscheint die Steuerung
nicht, solange Sie dort sind. Überall sonst ist es eine Schaltfläche in der **oberen Leiste**, die
eine **Einblendung** über dem öffnet, was Sie gerade tun. Schlagen Sie etwas nach, schließen Sie
die Einblendung, und Pfad, Jahr und Diagrammfokus sind genau dort, wo Sie sie verlassen haben.

**Probieren Sie es.** Klicken Sie [[nav:forecaster]] auf der Leiste und sehen Sie zu, wie
[[nav:birds-eye]] in der oberen Leiste erscheint.

[[jump:birds-eye]]

### Was darin ist {#birds-eye-what-you-will-see}

**Personen.** Wer zum Haushalt gehört, Geburtsjahre, Ruhestand und Langlebigkeit, und die Rollen.
Zeigen Sie auf eine Person ([[term:hover|Darüberhalten]]), um die modellierten Alter zu sehen. Springfield
hat einen **gestaffelten Ruhestand**. Homer und Marge hören in verschiedenen Jahren auf zu arbeiten.
Auf der Zeitleiste sehen Sie das als [[term:earned-income]]-Spannen unterschiedlicher Länge.

**Vermögen und Verbindlichkeiten.** Konten, Positionen, Haus, Hypotheken. Bei Springfield heißt das
Haus **Evergreen Terrace**, damit Sie es schnell finden.

[[img:ga-birds-eye-assets-liabilities]]

**Cashflows.** Die Liste der wiederkehrenden Reihen: Gehälter, Lebensstilphasen, Social Security,
Gesundheitskosten, Schuldendienst. Die meisten sind **Muster**, etwa Erwerbseinkommen bis zum
Ruhestand dieser Person, und kein eingetippter Betrag je Jahr. Sie in Jahresbeträge aufzulösen ist
der Weg, auf dem das Prognosemodul Diagramme über mehrere Jahrzehnte zeichnet.

**Lebensereignisse.** Arbeitsjahre, Ruhestandsspannen, Marken für den Leistungsantrag und einmalige
Ereignisse, je Person. Die schnelle Antwort auf die Frage, wann die Arbeit aufhört und ob das
Einkommen dazu passt.

### Die drei Modus-Chips {#birds-eye-modes}

[[nav:path:account|holding|cash-flow]]

[[nav:account]] und [[nav:holding]] geben eine gewöhnliche Bilanz. [[nav:cash-flow]] ist auf
Lehrbeispielen oft die Voreinstellung. Er webt wiederkehrende Geldbewegung **in** dieses Bild.
Zuflüsse lesen Sie bei **Vermögen**, Abflüsse bei **Verbindlichkeiten**, und das Zeichen **Σ**
rollt eine mehrjährige Reihe zu einem einzelnen Barwert auf der passenden Seite zusammen.

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

Das ist bewusst keine klassische Bilanzbuchhaltung. Eine Bilanz behandelt künftige
Gehaltszahlungen nicht als Vermögen. Hier geht es um Planungsintuition. Stellen Sie „was das Leben
finanziert“ neben „was wir besitzen“, und „was wir zahlen müssen“ neben „was wir schulden“.
Wechseln Sie zu [[nav:account]], wenn Sie die übliche Ansicht zurückwollen.

---

## [[nav:assumptions]] — die Regeln, nach denen die Prognose rechnet {#assumptions}

Die andere Hälfte der Planeingaben, neben den Haushaltsdaten. Sie können sie **lesen und
schreiben**, auch hier im Learning Center, wenn Sie etwas ausprobieren wollen.

[[img:ga-assumptions]]

Die meisten Pläne brauchen nur die vier Steuerungen auf dieser Seite:

| Steuerung | Ungefähr… |
|---------|----------|
| **Wohnsitzbundesstaat** und **Steuerstatus** | Welche Steuerregeln die Prognose anwendet. |
| **Strategie für Geldbewegungen** | Was mit überschüssigem Geld geschieht und wie Fehlbeträge aus dem Portfolio gedeckt werden, einschließlich eines Glidepaths. |
| **Roth-Umwandlung** | Ob jedes Jahr ein Teil eines vorsteuerlichen Guthabens nach Roth verschoben wird, und wie viel. |
| **Erfolgsdefinition** | Welche Prognosen als Erfolg zählen. Daraus wird aus den Pfaden eine Erfolgsquote. |

Alles andere nutzt geprüfte Standardwerte, und **Alle Annahmen anzeigen** öffnet sie zum Lesen.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power-Nutzer</p>
<div class="lesson-power-user-body">

Ein **Power-Nutzer**, eingeschaltet unter [[nav:advanced]] → Anwendungseinstellungen, sieht
stattdessen das volle Panel in Reitern. Dort lassen sich Wachstumsraten,
[[term:correlation\|Korrelationen]] und die Währungen des Plans setzen. Hier sind die Annahmen
desselben Plans mit eingeschaltetem Power-Nutzer, geöffnet auf dem Reiter Wachstum.

[[img:ga-assumptions-power]]

</div>
</aside>

Sie brauchen keine dieser Steuerungen zu beherrschen, um den Lektionen zu folgen. Wenn eine zählt,
nennt die Lektion die Steuerung und verlinkt sie. Veröffentlichte [[term:cliff|MAGI-Klippe]]<!-- term-skip: magi — one pill for the phrase "MAGI cliff" -->-Tabellen ([[term:irmaa]], [[term:niit]]) sind
**Gesetz, keine Planeinstellung**. Sie liegen im Werkzeug **Referenz**.

---

## [[nav:forecaster]] — die Zukunft rechnen {#forecaster}

Zwei Aufgaben teilen sich diesen Bereich. Den Teiler dazwischen können Sie ziehen, sodass eine der
beiden den Platz beherrscht:

- **Prognosedetail.** Ein Pfad, ein Jahr, jede Oberfläche der Projektion.
- **Simulationszusammenfassung.** Viele Pfade, oft etwa tausend, zusammengefasst zu einer
  Verteilung und einer Erfolgswahrscheinlichkeit.

### Die Ansicht wählen {#controlling-what-you-see}

| Steuerung | Was sie wählt |
|---------|---------------|
| **Prognose-ID (FID)** | Welchen **einzelnen Pfad** durch die Wolke das Prognosedetail zeigt. **0** ist der repräsentative [[term:gmf\|GMF]]-Pfad, ein stabiler Polarstern. Er ist keine Vorhersage. |
| **Jahr** | Welches Jahr die Tabellen und die jahresbezogenen Karten füllt. Die Diagramme zeigen weiterhin den ganzen Horizont. |
| **Chips** | Welche Karten überhaupt erscheinen. Schalten Sie aus, was Sie gerade nicht erkunden. |
| [[nav:year-axis]] | Beschriftet auf einem Diagramm die Jahreslinie als Kalenderjahre oder als Alter einer Person. Das gewählte Jahr ändert sich dadurch nicht. |

Unter dem Label **FID**<!-- term-skip: fid — this paragraph explains the control --> liegt eine Reihe farbiger Marken. Das sind **Schnellsprünge** zu den Schlüsselprognosen des Laufs,
geordnet **vom schlechtesten zum besten** Ergebnis. Das goldene **✦** (die GMF) sitzt in dieser
Ordnung und nicht daneben. Die Marken stehen *nicht* an ihren Prognosezahlen. Eine ID ist ein Name.
Sie ist keine Messung.

[[jump:fid]]

[[img:ga-fid-quick-jumps]]

Machen Sie sich das zur Gewohnheit. Starten Sie auf dem **✦**, gehen Sie mit denselben Chips und
demselben Jahr nach links Richtung Min und nach rechts Richtung Max, und Sie spüren die
**Streuung** der Wolke statt nur ihre Mitte.

### Die Chips, je eine Zeile {#forecast-detail}

Kern: [[nav:path:bs-chart|bs-table|cf-chart|cf-table|si-chart|si-table|rec]] —
Steuerlinse: [[nav:path:taxes|cliffs|brackets]]

[[img:std-forecaster-chip-bar]]

| Chip | Zeigt |
|------|-------|
| [[nav:bs-chart]] | Vermögen über der Linie, Verbindlichkeiten darunter, Jahr für Jahr. Die dicke schwarze **Nettolinie** ist das Nettovermögen. |
| [[nav:bs-table]] | Die Bilanz für das gewählte Jahr. |
| [[nav:cf-chart]] | Geld herein über der Linie, Geld hinaus darunter, nach Kategorie. Die dicke schwarze Nettolinie ist der Netto-Cashflow. |
| [[nav:cf-table]] | Einkommen, Ausgaben, Steuern und die Verwendung des Saldos für das gewählte Jahr. |
| [[nav:si-chart]] | Was über die Jahre verkauft, angelegt oder geliehen wurde. |
| [[nav:si-table]] | Geschäfte auf Positionsebene für das gewählte Jahr, mit einem **Warum** für jedes. |
| [[nav:taxes]] | Was das Jahr tatsächlich schuldete, Bund und Bundesstaat. Die Steuer auf die Erträge eines Jahres wird in dem Jahr gezahlt, der Rest der Festsetzung aber **im nächsten Jahr**. Deshalb muss sie nicht zur Zeile Steuern im Cashflow desselben Jahres passen. |
| [[nav:rec]] | Der Beweis, dass das Jahr aufgeht: Geldquellen gleich Geldverwendungen. Öffnen Sie diese Karte, wenn ein Cashflow-Jahr falsch aussieht. |
| [[nav:brackets]] | Das Einkommen eines Jahres, in die gewöhnlichen Steuerstufen gestapelt, und der **Restspielraum** unter einer Obergrenze, die Sie wählen. |
| [[nav:cliffs]] | Wie nah das Jahr an jede modellierte Schwelle herankommt, die Untergrenze von [[term:niit]] und die IRMAA-Linie, über den ganzen Horizont. |

### Die vier Kernoberflächen {#core-surfaces}

[[img:sfb-bs-chart]]

[[img:sfb-bs-table]]

[[img:sfb-cf-chart]]

[[img:sfb-cf-table]]

Zeigen Sie auf einem der beiden Diagramme auf ein Jahr, um die Aufschlüsselung zu sehen.
**Klicken** Sie ein Jahr, um es in die Tabellen zu laden.

### Verkäufe und Anlagen {#sales-and-investments}

[[img:ga-si-chart]]

[[img:ga-si-table]]

In Jahren mit [[term:drawdown]] beantworten diese Karten, **welche** Konten die Ausgaben finanziert
haben und nach welcher Regel: [[term:rmd]] gegen anteiligen Rest gegen die
Steuerkonten-Reihenfolge. Zeigen Sie auf einen **Name**, um das volle Detail zu sehen,
einschließlich des vorherigen Werts.

### Die Steuerlinse {#tax-lens}

[[img:ga-brackets]]

[[img:ga-cliffs]]

Beide sind auf **2038** festgelegt, ein Jahr mit etwas zu sagen. Die Karte der Steuerstufen zeigt,
wie viel ordentliches Einkommen noch unter die von Ihnen gewählte Obergrenze passt. Das Radar nennt
die Schwellen, die in diesem Jahr tatsächlich **aktiv** sind, wie weit das Jahr über der Linie
liegt und was das Überschreiten kostet.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__brackets]]

[[jump:cliff-radar]]

### Simulationszusammenfassung {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

Die andere Hälfte der Teilung beantwortet andere Fragen: die Form des **End-Nettovermögens**, die
**Erfolgsquote** unter Ihrer Erfolgsdefinition und die **Schlüsselprognosen** (Min, Quartile,
Mittel, Max, GMF). Klicken Sie eine Schlüsselzeile, und das Prognosedetail fokussiert diesen Pfad,
sodass Sie nachlesen können, *warum* er extrem war.

[[jump:key-forecasts]]

Lesen Sie die **Streuung**. Achten Sie mehr auf die **Richtung**, in die eine Änderung die
Erfolgsquote schiebt, als auf den Prozentsatz selbst.

---

## [[nav:transforms]] — eine Änderung ausprobieren, ohne den Basisplan zu zerstören {#transforms}

[[img:working-fast-transforms-sections|control]]

1. Öffnen Sie **Änderungen**.
2. Wählen Sie etwas unter **Änderbare**, oft eine Person oder einen Cashflow-Posten wie
   Erwerbseinkommen.
3. Bearbeiten Sie eine Steuerung: Ruhestandsjahr, aktive Jahre, Ausgaben. Das Bearbeiten **ist**
   das Hinzufügen zum **Änderungssatz**. Es gibt keinen eigenen Schritt zum Hinzufügen.
4. Diagramme und Tabellen aktualisieren sich **live**, sodass Sie den Plan reagieren sehen, bevor
   eine neue Simulation läuft.
5. **Neu simulieren**, wenn Sie den vollen Vergleich von Original und geändertem Plan wollen.

[[jump:transforms]]

Transformationen sind zum Erkunden da, und sie sind das richtige Werkzeug für ein Was-wäre-wenn,
auch in der Desktop-App, wo das Dossier Ihre echten Daten hält.

---

## [[nav:region]] — derselbe Plan an einem anderen Ort {#region}

Ein Vergleich im Stil der Lebenshaltungskosten: Wie sähe dieser Plan aus, wenn der Haushalt
woanders lebte? Heute heißt das **US-Bundesstaaten**. Andere Länder folgen. Greifen Sie danach,
wenn die Frage den **Ort** betrifft. Für die Portfoliorechnung ist der Bereich nicht da.

[[img:ga-region-sections|control]]

---

## Die untere Leiste: Werkzeuge, die sich über Ihre Arbeit öffnen {#bottom-bar}

Sie kommen in drei Gruppen, und die Gruppierung ist der Punkt. Jede Gruppe beantwortet eine andere
Art von Frage.

[[img:ga-tools-bar|control]]

| Werkzeug | Rolle |
|------|------|
| [[nav:fx]] | Anzeigewährung und Kurse. |
| [[nav:growth]] | Wachstumsrechner als Notizblock. |
| [[nav:annuity]] | Notizblock zum Erkunden einer [[term:annuity\|Leibrente]]. |
| [[nav:peek]] | Ein Menü mit drei Ansichten des Prognosedetails, jede über der App geöffnet. [[nav:charts]] zeigt jedes Diagramm, [[nav:tables]] zeigt jede Tabelle, und [[nav:pairs]] zeigt jedes Diagramm neben seiner Tabelle. Ihre Chip-Auswahl ändert sich nicht. |
| [[nav:reference]] | Jede veröffentlichte Tabelle, jeder Satz und jede Regel, auf denen die Prognose läuft, durchsuchbar, mit Quelle und Grenzen. Schreibgeschützt. |
| [[nav:glossary]] | Was die Wörter bedeuten. Dasselbe Buch wie die Referenz, in der kühlen Farbgebung, denn beides ist dieselbe Art von Sache. Die Referenz hält die veröffentlichten Zahlen, das Glossar das Vokabular. |

**Hilfe liegt nicht hier unten.** Sie liegt auf der **Navigationsleiste**, unten, zusammen mit
**Reach Out** und **Erweitert**.

### Zwei Gewohnheiten, die sich einmal zu lernen lohnen {#two-habits}

**Kopieren.** Das Symbol mit zwei überlappenden Seiten an Diagrammköpfen, Tabellen und vielen Listen
legt Markdown oder Bilddaten in die Zwischenablage. Es sitzt auf erzeugten Ausgaben *und* auf
Eingaben wie Steuertarifen und Wachstumsannahmen, mit Absicht. Fügen Sie sie in Notizen oder einen
Chat ein, statt sie von einem Bildschirmfoto abzutippen.

**Alt gedrückt halten, um die Kurzinfos zu beruhigen.** Erklärungen beim Zeigen sind überall. Das
wollen Sie beim Lernen, und nicht, während Sie etwas vorführen. Solange Sie **Alt** gedrückt
halten, bleiben sie aus. Wenn Ihnen der Standard zu gesprächig ist, kehrt der kleine gefüllte oder
hohle Kreis neben der Steuerung für hell und dunkel die Regel um. Dann erscheinen Kurzinfos
**nur**, solange Alt gedrückt ist. Kurze Hinweise auf Symbolschaltflächen und der volle Text eines
abgeschnittenen Labels erscheinen immer, in beiden Richtungen. Ein unlesbares Label ist eine
Sackgasse, keine Ablenkung.

---

## Diagrammsteuerungen: Heranzoomen, Zoom und Aufdecken {#chart-chrome}

Diagramme und Verteilungskarten teilen eine kleine Gruppe von Steuerungen. Zeigen Sie auf ein
Symbol, um seinen Hinweis zu sehen.

| Steuerung | Wo | Was sie tut |
|---------|-------|--------------|
| **Heranzoomen** | Die meisten Diagramm- und Tabellenkarten | Öffnet diese Ansicht groß über der App. Hinweise beim Zeigen funktionieren weiter. Schließen Sie mit **Esc**, einem Klick daneben oder **✕**. |
| **Vertikaler Zoom** | [[nav:bs-chart]], [[nav:cf-chart]] | Vergrößert hohe Balken, damit kleine Jahre vergleichbar werden. Ganz links ist 1×. |
| **Aufdecken** | Nettovermögensverteilung | Öffnet die Masse der Punkte, wenn ein paar extreme Enden alles nahe null zusammendrücken. |
| **Reveal koppeln** | Zwei Verteilungen nebeneinander | Standardmäßig an, damit beide Diagramme vergleichbar bleiben. Schalten Sie es aus, um jede Seite einzeln aufzudecken. |
| **Diagrammskalen koppeln** | Gepaarte Bilanz- oder Cashflow-Diagramme | Eine gemeinsame Y-Achse, skaliert auf die höhere Seite, sodass der kleinere Plan sichtbar schrumpft, statt sich automatisch auf gleiche Höhe zu skalieren. |
| **Diagramme zusammenführen** | Dieselben gepaarten Diagramme | Faltet beide Seiten in ein Diagramm, Balken nebeneinander auf einer gemeinsamen Skala. |

Keine dieser Steuerungen startet die Simulation neu oder fasst den Plan an. Sie ändern nur, **wie
Sie hinsehen**. Wenn speziell ein langer rechter Schwanz das Problem ist, gibt es dafür eine
Lektion: [Wenn die Ergebniswolke „Aufdecken“ braucht](/learn/nw_distribution_compression).

---

## Learning Center und die Desktop-App {#layout}

Es ist dasselbe Produkt, mit denselben Bereichen und denselben Bezeichnungen. Zwei Unterschiede
sollten Sie kennen:

| | Learning Center | Desktop-App |
|---|---|---|
| **Aufbau** | Lektionstext neben einem Live-Plan. Ziehen Sie den Teiler, oder blenden Sie die Kopfzeile aus, wenn Sie Höhe brauchen | Der Plan im Vollbild. Kein Lektionsbereich |
| **Dossier** | Beispiele sind schreibgeschützt. Sie lesen sie | Ihr echter Plan. Sie erfassen und bearbeiten ihn |

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur die Desktop-App</summary>
<div class="lesson-desktop-only-body">

Den Dossier-Editor, in dem Sie Ihre eigenen Finanzdaten erfassen, gibt es nur in der Desktop-App.

[[img:ga-desktop-dossier]]

Das Desktop-Bild zeigt die Bearbeitungssteuerungen, die das Learning Center nicht braucht: den
**Bleistift** neben einer Person und **+ Person hinzufügen**.

</div>
</details>

Die Namen der Bereiche sind dieselben, deshalb gilt alles auf dieser Seite auch dort.

---

## Eine Tour in fünf Minuten {#practice-tour}

1. [[nav:dossier]]: Stöbern Sie im Beispiel, und lesen Sie [[nav:birds-eye]] oben darin.
2. Wechseln Sie in [[nav:birds-eye]] zwischen [[nav:account]] und [[nav:cash-flow]], und probieren
   Sie **Σ**.
3. Klicken Sie [[nav:forecaster]] auf der Leiste. Sehen Sie zu, wie [[nav:birds-eye]] in die obere
   Leiste wandert. Öffnen Sie sie, schließen Sie sie, und beachten Sie, dass Sie das Prognosemodul
   nie verlassen haben.
4. Lassen Sie im **Prognosedetail** nur [[nav:bs-chart]] und [[nav:cf-chart]] an, und bewegen Sie
   dann **Jahr**.
5. Klicken Sie die linkeste (rote) Schnellsprung-Marke unter **FID**, um auf dem schlechtesten Pfad
   zu landen, dann das goldene **✦**, um zurückzukehren.
6. [[nav:transforms]] → **Änderungen**: Rücken Sie ein Ruhestandsjahr ein wenig, und sehen Sie zu,
   wie die Diagramme live reagieren. Gehen Sie ohne neue Simulation, wenn Sie nur die Karte wollten.

---

## Wohin als Nächstes {#where-to-go-next}

| Reihenfolge | Lektion |
|-------|--------|
| **0 (Sie sind hier)** | Sich in der App zurechtfinden |
| **1** | [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline) |
| **Später** | Lebenshaltungsausgaben, Hypothekenvergleich, Erfolgsdefinitionen, Antrag auf Social Security, Entnahmestrategie, Vertiefungen zu den Annahmen |

Spätere Lektionen verweisen mit kurzen Hinweisen auf den Ort hierher zurück, statt die Karte neu
zu erklären.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
