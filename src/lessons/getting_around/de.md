<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/getting_around.de.md
tutilis-locale: de translated
-->
# Die App kennenlernen

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Getting around the app
  document-id: getting_around
  locale: de
  lifecycle: Initial
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported locale twin from public dossiers/getting_around.de.md
  port-source: dossiers/getting_around.de.md
  source-file: getting_around.md
-->

<!--- α <lesson_body> -->
**Hier starten**, wenn Sie das Learning Center oder den Desktop-Planer zum ersten Mal nutzen.

Das ist keine Finanzlektion. Es ist eine Karte, **wo die Dinge liegen**, damit spätere Lektionen
„öffnen Sie Forecaster → Simulation Summary“ sagen können und Sie den Weg schon kennen. Hilfe-Icons
(**?**) auf den Panels gehen tiefer, wenn Sie das möchten; diese Seite ist die **Tour, die Sie
machen, bevor Sie neugierig oder stecken geblieben sind**.

Der Live-Plan rechts ist der Haushalt **Springfield** — dieselbe Besetzung wie in
[Meet the Springfield household](/learn/springfield_baseline). Sie müssen ihre Finanzen noch nicht
verstehen; behandeln Sie sie als vollständig geladenes Beispiel, damit jedes Panel etwas Echtes
zeigen kann.

**Hinweis:** Was Sie rechts sehen, ist unsere Finanzplanungsanwendung, hier im **Browser**
ausgeliefert. Es ist **dieselbe Anwendung** wie das Desktop-Produkt — dieselben Bereiche, dieselben
Bezeichnungen, dieselben Diagramme. Alles in dem Rundgang unten gilt für **beide** Auslieferungswege.
Der wichtige Unterschied in dieser Learning-Center-Umgebung: Die Web-Canvas lässt Sie das
**Dossier nicht so bearbeiten**, wie es Desktop tut. Lektionen bringen ihre eigenen Daten mit, damit
Sie erkunden können, ohne den Haushalt von Hand neu aufzubauen.

Hier ist die **Desktop**-App auf einem Beispielhaushalt — auffallend ähnlich zum Plan
rechts:

[[img:ga-desktop-dossier]]

**Ein paar Unterschiede, die Sie bemerken sollten:** Erstens dienen die linken Desktop-Karten
**People**, **Balance Sheet** und **Cash Flows** dem **Bearbeiten** — Abschnitt wählen, dann den
Haushalt ändern. Zweitens sehen Sie im Desktop-Bild weiterhin **Bearbeiten**-Steuerungen (den
**Bleistift**) neben Personen und **+ Add person**, um Haushaltsmitglieder hinzuzufügen. Darauf
stützen Sie sich hier nicht. Learning-Center-Dossiers erzählen eine **pädagogische Geschichte**; wir
nutzen den Plan so, wie er geladen ist, und steuern What-ifs vor allem über [[nav:transforms]] (plus
schreibgeschützte Inspektion), nicht indem wir Springfield Zeile für Zeile umschreiben.

Auf dem Desktop öffnen Sie den Sample-Katalog und wählen **Springfield Baseline** für denselben
Haushalt im Vollbild. Es gibt kein separates „Getting around“-Dossier — diese Seite ist nur
Lektionstext; die Canvas nutzt Springfield erneut.

---

## Wie das Learning Center aufgebaut ist {#layout}

| Bereich | Rolle |
|---------|-------|
| **Links** | Lektionstext (dieses Dokument) |
| **Rechts** | Live-Plan — dasselbe Sample, über das der Text spricht |
| **Kopfzeile** | Zurück zum Katalog (einklappbar — ausblenden, um vertikalen Platz freizugeben) |

Ziehen Sie den Teiler, wenn Sie mehr Platz zum Lesen oder für Diagramme möchten.

In der **Desktop-App** gibt es keinen linken Textbereich: Sie öffnen ein Sample (oder Ihren eigenen
Plan) und arbeiten im Vollbild. Die **Namen der Bereiche** entsprechen dem, was Sie hier sehen.

---

## Globales Chrome: Kopieren, Theme und Tooltips {#global-chrome-copy-theme-and-tooltips}

<a id="global-chrome-copy-theme-and-tooltips"></a>
<a id="globales-chrome-kopieren-theme-und-tooltips"></a>

Drei Gewohnheiten gelten **überall** in der App (Desktop und Learning-Center-Canvas). Lernen Sie sie
einmal; Sie werden sie in jeder späteren Lektion nutzen.

### Nützliches kopieren (auch in Ihr AI-Setup) {#copy-anything-useful}

Wir bemühen uns, **generierte Ausgaben** leicht mitnehmbar zu machen: Diagramme, Tabellen,
Zusammenfassungen und ähnliche Oberflächen. Derselbe Geist gilt für **Eingaben und Referenzmaterial**
— Steuertabellen, Wachstumsannahmen und andere Modelldetails — damit Sie außerhalb der App prüfen,
einfügen und vergleichen können.

**Suchen Sie nach**
[[img:ga-copy-icon]]
— der **Kopieren**-Steuerung in Diagrammköpfen, Tabellen und vielen Listen (zwei überlappende Seiten).
Ein Klick legt Markdown- oder Bilddaten in die Zwischenablage, damit Sie in Notizen oder einen Chat
einfügen können.

Wenn Ihnen das hilft, einen **AI-Workflow** zu fahren (eine Tabelle in einen Chat einfügen, eine
Kopie eines Plans neben einer Frage bereithalten), ist das beabsichtigt. Bevorzugen Sie die
Kopier-Möglichkeiten des Produkts gegenüber dem Abtippen von einem Screenshot.

### Helles und dunkles Theme {#light-and-dark-theme}

**Helle** und **dunkle** Themes steuern Sie über das Chrome **oben rechts** im Live-Plan (Sonne /
Mond). Auf einer Lektionsseite ist das die **einzige** Theme-Steuerung: die kompakte Kopfzeile über
dem Text trägt die Marke, den Zurück-zum-Katalog-Link und die Sprachauswahl — keine Sonne / Mond.

Eine zweite brauchen Sie nicht. Die Lektionsseite **folgt dem Live-Plan**: Wechseln Sie das Theme in
der App, wechselt der Text mit, sodass beide Bereiche im Takt bleiben und Sie nie eine dunkle
Lektion neben einer hellen App lesen. Die Synchronisierung läuft nur in eine Richtung, von der App
zum Text. (Anderswo auf der Website — Startseite, Preise, der `/learn`-Index — trägt die
Website-Kopfzeile ihre eigene Sonne / Mond.)

Das Erscheinungsbild ist nur eine Präferenz; es ändert die Planrechnung nicht.

### Kontextsensitive Tooltips — und wann man sie dämpft {#tooltips}

Um möglichst viel Detail ohne überfülltes Layout zu zeigen, setzen wir stark auf
**kontextsensitive Tooltips**. Viele erscheinen, wenn Sie Diagramme, Tabellen, Zeilen und andere
Steuerungen überfahren; ein großer Teil dieser Tipps ist ebenfalls **kopierbar**. Manche Diagramm-
und Tabellenregionen existieren vor allem, damit Hover dieses Detail zeigen kann.

**Suchen Sie nach**
[[img:ga-help-question]]
— dem **?** auf vielen Panel- und Kartentiteln. Öffnen Sie es für eine kurze Erklärung dieser
Oberfläche. Hover steuert weiterhin die kleineren Tipps auf einzelnen Zeilen, Balken und Punkten.

Diese Aggressivität ist großartig, wenn Sie eine Oberfläche **lernen**. Sie kann stören, wenn Sie
**präsentieren** — jemanden durch einen Pfad führen und die Popups feuern weiter, während der
Zeiger sich bewegt.

**Halten Sie Alt** gedrückt, während Sie mit der Maus über diese Steuerungen fahren: Mit der
Standardeinstellung erscheinen Tooltips **nicht**, solange Alt unten ist. Das ist die schnelle,
vorübergehende Stille für eine Demo oder einen sorgfältigen Klick.

Wenn Ihnen der Standard immer noch zu gesprächig ist, kehren Sie die globale Regel um. Neben der
Hell/Dunkel-Theme-Steuerung sitzt ein kleiner **gefüllter / hohler Kreis** (Hover-Details). Klicken
Sie ihn, um den Modus umzuschalten:

[[img:ga-hover-details-toggle]]

| Modus (Tooltip auf der Steuerung) | Normaler Hover | **Alt** halten beim Hover |
|-----------------------------------|----------------|---------------------------|
| **Details on hover** (Standard) | Tooltips werden angezeigt | Tooltips bleiben **verborgen** |
| **Reversed** (nach Umschalten des Kreises) | Tooltips bleiben **verborgen** | Tooltips werden **angezeigt** |

Also: Standard ist „hilf mir, es sei denn, ich halte Alt.“ Umgekehrt ist „lass mich in Ruhe, es sei
denn, ich halte Alt.“ Wählen Sie den Modus, der passt, ob Sie erkunden oder präsentieren; Alt gibt
Ihnen immer das Gegenteil mit einer Geste.

Eine bewusste Ausnahme: Die **unverzichtbaren** Tipps ignorieren all das und erscheinen immer. Das
sind die kurzen Einzeiler-Hinweise auf Icon-Buttons und die Enthüllung eines Labels, das zu schmal
ist, um den eigenen Text zu fassen. Ein abgeschnittenes Label ohne Lesemöglichkeit ist eine Sackgasse
statt eine Ablenkung — Alt dämpft die reichhaltigen Erklärungskarten, die eine Demo tatsächlich
unterbrechen.

---

## Die Hauptnavigation {#main-navigation}

Links liegt eine **Icon-Werkzeugleiste**.

**Hauptbereiche** (jeder übernimmt das Hauptpanel):

Das erste Icon ist ein **Ordner** — das ist [[nav:dossier]]. Darunter liegen die anderen großen Bereiche:
Assumptions, Risk, Forecaster, Transforms, Region.

Wenn Sie einen Bereich wählen, ist das **Hauptpanel** dieser Funktion gewidmet. Sie stapeln keine
unverwandten Editoren auf einem Bildschirm; Sie wechseln den Fokus des Arbeitsbereichs.

| Bereich | Wofür er da ist |
|------|----------------|
| [[nav:dossier]] | Wo die Finanzen des Haushalts definiert werden — Personen, Assets & Liabilities, Cash Flows. Siehe [Dossier](#dossier) für Lektion vs. Desktop. |
| [[nav:assumptions]] | Wachstum, Steuern, Sell-&-Invest-Politik, Erfolgsdefinition, Ort, Währung — die Regeln, unter denen die Prognose läuft. **Lesen und schreiben.** |
| [[nav:risk]] | Analytische Risikodarstellungen (wie Holdings und Kategorien auf Risiko/Rendite sitzen). Später nützlich; für erste Touren nicht nötig. |
| [[nav:forecaster]] | Zwei Aufgaben: (1) den Plan Jahr für Jahr laufen lassen und jede Projektionsoberfläche prüfen, und (2) **Simulation Summary** — viele Pfade zusammengefasst zu etwas wie einer **Erfolgswahrscheinlichkeit**. |
| [[nav:transforms]] | What-if-Änderungen an einer **Kopie** des Plans; Original vs. geändert vergleichen, ohne das dauerhafte Dossier umzuschreiben. |
| [[nav:region]] | Den Plan „als ob“ Sie woanders lebten erkunden (heute: **US-Bundesstaaten**; andere Länder sind künftige Arbeit). Das Rail-Label ist [[nav:region]]. |

**Werkzeuge** (unter den Bereichs-Icons; ersetzen das Hauptpanel nicht dauerhaft):

| Werkzeug | Rolle |
|----------|-------|
| [[nav:birds-eye]] | Haushaltsübersicht als **Modal** (verborgen, solange Sie schon auf Dossier sind — siehe unten). |
| **Growth** / **Annuity** | Optionale Rechner — Notizblöcke; dieser Rundgang geht nicht tief hinein. |
| **Reference** | Jede veröffentlichte Tabelle, jeder Satz und jede Regel, auf denen die Prognose läuft — durchsuchbar, mit Quelle und Grenzen. Nur lesen. |
| **Help** | Kurze App-Karte und Tipps. |

Icons in der Bereichstabelle entsprechen der Rail-Grafik (dieselbe pastel-flat-Familie wie die
Produkt-Navigation).

---

## [[nav:dossier]] {#dossier}

<a id="dossier"></a>

Das [[nav:dossier]] ist der Ort, an dem die Finanzen des Haushalts **definiert** werden — Personen,
Assets und Liabilities, Cash Flows und die übrigen Quelldaten des Plans.

Wie sich dieser Bereich verhält, hängt leicht davon ab, **wo** Sie arbeiten:

| Wo Sie sind | Was Sie im Dossier tun |
|-------------|------------------------|
| **Diese Lektionen / Learning Center** | Die Finanzen wurden bereits **für eine Lektion gestaltet**. Sie **betrachten** sie vor allem (und [[nav:birds-eye]] zeigt dasselbe Bild). Sie werden nicht gebeten, Finanzdaten einzugeben. |
| **Desktop-App (Ihr eigener Plan)** | Sie **erfassen und bearbeiten** echte Informationen — Onboarding, dann Aktualisierungen, wenn sich das Leben ändert. Das ist der dauerhafte Plan, den Sie über die Zeit pflegen. |

Für den Lehrplan: **Keine Dossier-Dateneingabe ist erforderlich.** Wenn eine Lektion eine Änderung
möchte, schickt sie Sie in der Regel zu [[nav:transforms]] (oder nennt eine Steuerung ausdrücklich),
statt Sie zu bitten, Springfield von Hand neu aufzubauen.

### Wann Sie Dossier im Alltag tatsächlich öffnen {#dossier-day-to-day}

In der Desktop-App ist [[nav:birds-eye]] das, was Sie sehen, wenn Sie nach dem Onboarding zum ersten Mal
auf Dossier landen — ein schneller Blick auf alles, was Sie eingegeben haben. Sobald diese Daten
stabil sind, brauchen Sie Dossier oft **nicht** jeden Tag: Ihre Bilanz schreibt sich über Nacht nicht
selbst um.

Was sich **täglich** ändert, sind Ihre **Sorgen**, Planungsideen und Fragen. Diese Erkundung lebt
vor allem in [[nav:forecaster]], [[nav:transforms]] und [[nav:region]]. Sie brauchen trotzdem einen Weg, sich
aufzufrischen: „Was habe ich in den Plan gesteckt?“ — ohne diese Arbeit aufzugeben. Das ist Bird's
Eye (nächster Abschnitt).

---

## [[nav:birds-eye]] — derselbe Haushaltsinhalt, als Modal {#birds-eye}

[[nav:birds-eye]] ist ein **Werkzeug**-Icon im unteren Teil der Rail (bei den Rechnern und Help) — nicht
eines der Hauptbereichs-Icons oben. Außerhalb von Dossier öffnet es einen **Modal-Dialog** über dem,
was Sie gerade tun.

**Wichtig:Wenn Sie im Bereich [[nav:dossier]] sind, ist das Bird's-Eye-Icon auf der Railnicht**
vorhanden. Das ist beabsichtigt: Der Bird's-Eye-Inhalt ist **bereits eingebettet** oben im Dossier,
vordergründig und mittig. Es gibt keinen Grund, wegzunavigieren, um zu sehen, was Sie ohnehin schon
betrachten.

**Probieren Sie das:** Klicken Sie [[nav:forecaster]] auf der Rail — Sie sollten das Bird's-Eye-Icon
**erscheinen** sehen, unter den Werkzeugen. Klicken Sie dieses Icon: Sie erhalten **dieselben
Informationen**, die oben im Dossier-Bereich sitzen (Personen, Assets & Liabilities, Cash-Flow-
Darstellung, Life-Events-Timeline und verwandte Übersicht). Schließen Sie das Modal und Sie sind
weiterhin auf Forecaster, Platz unberührt.

Diesen Haushaltsinhalt beschreiben wir **einmal** unten — ob Sie ihn eingebettet im Dossier oder
über das Modal von Forecaster, Transforms oder Region treffen.

### Warum [[nav:birds-eye]] von [[nav:forecaster]] / Transforms / Region nutzen? {#why-birds-eye-from-elsewhere}

Sie können [[nav:birds-eye]] öffnen, **ohne den Bereich zu verlassen**, in dem Sie sind. Schlagen Sie eine
Person, ein Konto oder die Life-Events-Timeline nach, schließen Sie das Modal und **kehren Sie zum
selben Ort zurück** — Jahres-Slider, What-if oder Diagrammfokus intakt. Sie müssen nicht zu Dossier
wechseln und Ihren Platz verlieren.

[[img:ga-birds-eye-from-forecaster]]

*[[nav:birds-eye]] als Modal über [[nav:forecaster]] (Rail-Werkzeug, kein Hauptbereich). Forecaster bleibt
darunter; schließen Sie den Dialog und Sie sind weiterhin auf derselben Prognoseansicht. Account /
Holding / **Cash Flow**-Selektor oben; Haushaltsübersicht und Assets & Liabilities darunter.*

Wir gehen in diesem Rundgang **nicht** tief in die Growth- oder Annuity-Rechner; sie sind optionale
Notizblöcke. Das Rail-Werkzeug **Help** ordnet sie kurz ein, falls Sie sie später brauchen.

### Was Sie sehen (Personen, Vermögen, Geldflüsse, Lebensereignisse) {#birds-eye-what-you-will-see}

> **Hinweis:** Wenn Sie zu [[nav:forecaster]] weggeklickt haben, ist jetzt ein guter Zeitpunkt, zurück
> zu [[nav:dossier]] zu klicken, damit Sie dem eingebetteten [[nav:birds-eye]] oben in diesem Bereich folgen
> können.

#### Personen

Wer im Haushalt ist, Geburtsjahre, Renten- und Langlebigkeitsannahmen und Rollen (primary /
secondary / dependent).

- **Hover** über eine Person für einen Tipp mit modellierten Altern und verwandten Details.
- Lektionen sagen oft **gestaffelte Rente** — zwei Personen mit **unterschiedlichen** Rentenaltern,
  beide hier sichtbar. Auf Springfield sehen Sie das auch auf der Life-Events-Timeline: Homers und
  Marges grüne **Earned-Income**-Spannen enden in unterschiedlichen Jahren, weil sie in
  unterschiedlichen Altern aufhören zu arbeiten.

#### Assets & Liabilities

Konten, Holdings, Haus, Hypotheken und andere Bilanzposten — die vertraute Ansicht „was wir besitzen
/ was wir schulden“, die die meisten Planungswerkzeuge zeigen. Auf Springfield heißt das Haus
**Evergreen Terrace**, damit Sie es in der Liste schnell finden.

[[img:ga-birds-eye-assets-liabilities]]

*[[nav:birds-eye]] **Assets & liabilities** (Cash-Flow-Modus in diesem Sample): Assets links, Liabilities
rechts, barwertähnliche Zahlen. Beachten Sie die kleinen **Kopieren**-Steuerungen an jedem Spaltenkopf
— dieselbe Familie wie die globale Kopier-Gewohnheit oben.*

##### Die Cash-Flow-Steuerung ([[nav:birds-eye]])

Oben in [[nav:birds-eye]] sehen Sie einen Selektor **Account / Holding / Cash Flow** (Labels wie in der
UI). **Cash Flow** ist der, bei dem es sich lohnt innezuhalten. [[nav:birds-eye]] startet oft standardmäßig
im Cash-Flow-Modus, damit die Lehrsamples Geldflüsse sofort zeigen.

Wenn **Cash Flow** ausgewählt ist, wird wiederkehrende Geldbewegung in das Bild von Assets &
Liabilities verwoben — nicht nur als separate Liste, sondern als Teil der *Darstellung* von Vermögen:

| Seite der Ansicht | Was Cash Flows als erscheinen können |
|-------------------|--------------------------------------|
| **Assets** | **Zuflüsse** — Geld, das den Haushalt speist (zum Beispiel Earned Income). |
| **Liabilities** | **Abflüsse** — Geld, das der Plan decken muss (zum Beispiel Lebenshaltungskosten, Hypothekendienst). |

Das ist **bewusst unkonventionelle Buchhaltung**. Eine CPA-Bilanz behandelt künftige Gehaltszahlungen
nicht als Assets und eine Lebenszeit von Lebenshaltungskosten nicht als einzelne Liability-Zeile.
Hier geht es um Planungsintuition: „was das Leben finanziert“ neben „was wir besitzen“, und „was wir
bezahlen müssen“ neben „was wir schulden“.

**Summation (Σ) bei Cash Flow:** Mit aktivem Cash Flow kann die **Σ**-Steuerung an diesem Selektor
eine mehrjährige Reihe zu einem **barwertähnlichen Gesamtwert in heutigen Dollars** zusammenfassen und
diese Summe der zugehörigen Seite des Sheets zuordnen. Beispiel: Lebenshaltungskosten — Abflüsse über
viele Jahre — summiert zu einer Zahl neben **Liabilities**. Sie erfinden keinen neuen Bankkredit; Sie
beantworten: „Wie groß ist dieser Verpflichtungsstrom, wenn ich ihn in einer Figur neben Haus und
Portfolio betrachte?“

**Probieren Sie es:**

1. Bleiben Sie auf [[nav:dossier]] (oder öffnen Sie [[nav:birds-eye]] von Forecaster).
2. Wählen Sie in [[nav:birds-eye]] **Cash Flow** (und versuchen Sie **Σ**, falls angeboten).
3. Beachten Sie, wie Hypotheken-**Principal** und **-Interest**, Lifestyle und Gehälter als Teil
   desselben Vermögensbilds lesbar werden.
4. Wechseln Sie zurück zu **Account** / **Holding** für eine klarere, traditionellere Bilanz ohne
   diese Cash-Flow-Mischung.

Hypotheken-Principal und -Interest sind oft am leichtesten mit **Cash Flow** an zu erkennen.
Spätere Lektionen nutzen diese Ansicht, wenn die Geschichte „wie schwer ist die Ausgabenseite?“ ist —
nicht nur „was steckt heute in den Konten?“

#### Cash Flows (die Liste der Reihen)

Unabhängig von dieser Darstellungssteuerung hat der Plan weiterhin eine **Liste von Cash-Flow-
Reihen**: Gehälter, Lifestyle-Phasen, Social Security, Healthcare, Schuldendienst und mehr. Im
Dossier erreichen Sie sie über die Cash-Flows-Seite des Editors; [[nav:birds-eye]] ist die Übersicht.

Viele Einträge sind **Muster** (Vorlagen) statt eines handgetippten Betrags für jedes Jahr — zum
Beispiel „Earned Income bis zur Rente dieser Person“. Diese Muster in jährliche Beträge aufzulösen
ist, wie der Forecaster mehrdekadige Diagramme zeichnet. Lektionen sagen **wo** Sie hinschauen
sollen; Sie müssen am ersten Tag keine Vorlage selbst schreiben.

#### Life-events timeline

Pro Person: Arbeitsjahre, Rentenspannen, Social-Security-Claim-Marker, große Einmalereignisse (zum
Beispiel ein Hauskauf). Eine schnelle Antwort auf: „Wann hört die Arbeit auf? Wann läuft die Rente?
Passt das Einkommen zu diesen Daten?“

---

## [[nav:assumptions]] {#assumptions}

Dieser Bereich ist **lesen und schreiben** — auch im Learning Center, wenn Sie experimentieren
möchten.

Assumptions sind die **andere Hälfte** der Planregeln neben den Haushaltsdaten: wie Märkte
gesampelt werden, wie Steuern behandelt werden, wie überschüssiges Bargeld investiert wird, was
„Erfolg“ bedeutet und wo / in welcher Währung Sie berichten.

[[img:ga-assumptions]]

*Assumptions geöffnet auf [[nav:assumptions-growth]] (erster Tab). Die Tab-Reihe ist
[[nav:assumptions-growth]] · [[nav:assumptions-taxes]] ·
[[nav:assumptions-sell-invest]] · [[nav:assumptions-success]] ·
[[nav:assumptions-currency]] — dieselben Unterabschnitte wie in der Tabelle unten. Hover über einen
Tab-Chip, um ihn vom gleichnamigen Forecast-Detail- oder unteren-Leisten-Steuerelement zu
unterscheiden.*

**Sie brauchen keine vollständige Beherrschung jedes Hebels für die meisten Lektionen.** Viele
davon behandeln wir in künftigen Lektionen. Für jetzt: Wissen Sie, dass die **Unterabschnitte**
existieren und wofür jeder ungefähr da ist:

| Unterabschnitt | Ungefähr… |
|----------------|-----------|
| [[nav:assumptions-growth]] | Erwartetes Wachstum und Volatilität (und verwandte Korrelationen) für Assets und Flows — der statistische Treibstoff von Monte Carlo. |
| [[nav:assumptions-taxes]] | Steuerregime und verwandte Einstellungen, die die Prognose nutzt, wenn Steuern an sind. |
| [[nav:assumptions-sell-invest]] | Was mit überschüssigem Bargeld passiert und wie Defizite aus dem Portfolio finanziert werden, nachdem verknüpfte Bedarfe gedeckt sind (Residualstrategie). |
| [[nav:assumptions-success]] | Kapitalkosten und die **Erfolgsdefinition** (zum Beispiel Gold / Silver / Bronze), die Pfade in eine Erfolgsrate verwandelt. |
| [[nav:assumptions-currency]] | Die Wechselkurstabelle des Plans — Kurs bearbeiten, aktuelle holen oder auf den gebündelten Snapshot zurücksetzen. Die Anzeigewährung ist das FX-Werkzeug der unteren Leiste. |

Veröffentlichte MAGI-Klippen-Tabellen (IRMAA, NIIT und die anderen) leben im **Referenz**-Werkzeug —
das sind Schedules des Gesetzes, keine Planeinstellung. Pfad-Ergebnisse bleiben auf dem
Forecaster-Cliff-Radar.

Wenn eine Lektion eine Assumptions-Änderung braucht, nennt sie den Unterabschnitt und die
Steuerung. Sonst lassen Sie die Defaults und konzentrieren sich auf die Geschichte in Forecaster
oder Transforms.

---

## [[nav:forecaster]] — die Zukunft laufen lassen {#forecaster}

Öffnen Sie [[nav:forecaster]]. Denken Sie an **zwei unterschiedliche Funktionen**, die einen Bereich
teilen:

1. **Forecast Detail** — den Plan über die Prognosejahre vorwärts laufen lassen und **jeden Aspekt**
   der Projektionen für einen gewählten Pfad und ein Jahr eintauchen.
2. **Simulation Summary** — Ergebnisse der **vielen** Prognosen (oft in der Größenordnung von
   tausend), zusammengefasst zu einer Verteilung und einer **Erfolgswahrscheinlichkeit** (und
   verwandten Statistiken). So kommt dieses Werkzeug — und ähnliche — von einer Wolke von
   Ergebnissen zu einer einzelnen erfolgsartigen Zahl.

Beide leben in einem **größenveränderbaren Split** (Akkordeon): Sie können fast die ganze Höhe dem
Detail, fast die ganze der Summary geben oder sie ausbalancieren. Diese Layout-Macht zählt, wenn Sie
bohren (siehe [In ein schwieriges Ergebnis bohren](#drill-into-a-tough-outcome) unten).

### Forecast Detail — die Liefergegenstände {#forecast-detail}

[[img:ga-forecast-detail]]

*Forecast Detail in einem Frame: die Kopfzeile zeigt **FID GMF** und das gewählte **Jahr**, mit
gleichzeitig offenen Oberflächen (hier **Balance Sheet**- und **Cash Flows**-Diagramme oben,
**Balance Equation** / **Sankey** und **Cliff radar** unten). Nutzen Sie die **Chips**, um nur das
zu zeigen, was zählt — selten wollen Sie alle Karten auf einmal.*

Die Chip-Reihenfolge entspricht der App: [[nav:path:bs-chart|bs-table|cf-chart|cf-table]], dann [[nav:si-chart]]
/ [[nav:si-table]], Rec, Taxes und **RMD** (projizierte Required-Minimum-Reihe).

Die vier Kernoberflächen unten nutzen dieselben **Standard-Lektionsvorschauen**, die spätere
Lektionen wiederverwenden.

#### [[nav:bs-chart]] — Assets & Liabilities über die Zeit

[[img:sfb-bs-chart]]

Projizierte **Assets oberhalb** der Linie, **Liabilities unterhalb**, Jahr für Jahr. Die
**Nettolinie**, dick schwarz gezeichnet, ist das **Nettovermögen** — oft das, worum es Ihnen geht. Hover über ein Jahr für
eine Aufschlüsselung; **klicken Sie ein Jahr**, um es in die Tabellen und andere jahresbezogene
Ansichten zu laden. Nutzen Sie **Close up** und **vertikalen Zoom**, wenn Balken klein wirken
([Chart-Chrome](#chart-chrome)).

#### [[nav:bs-table]] — Bilanz für das gewählte Jahr

[[img:sfb-bs-table]]

Punkt-in-Zeit-Ausweis für das **gewählte Jahr**: Realvermögen, Konten, Liabilities, Net Worth.
Diese Vorschau hat **Holdings** aktiv (Chip an), sodass Konten in Holdings expandieren — schalten
Sie den Chip um, wenn Sie nur Kontosummen wollen.

#### [[nav:cf-chart]] — Cash Flows über die Zeit

[[img:sfb-cf-chart]]

Geld **rein** oberhalb der Linie, Geld **raus** unterhalb, nach Kategorie gefärbt. Die
**Nettolinie**, dick schwarz gezeichnet, ist der **Netto-Cashflow** — oft das, worum es Ihnen geht. Hover/Klick auf Jahre
wie beim [[nav:bs-chart]]. Gute erste Lesart für „wann endet Earned Income?“ und Lifestyle-Stufen.

#### [[nav:cf-table]] — Cash Flows für das gewählte Jahr

[[img:sfb-cf-table]]

Ausweis für das **gewählte Jahr**: Einkommen, Ausgaben, Steuern und Net Disposition (Invest / Sell /
Borrow-Summen). Oft der **kopierbare** Begleiter zum Diagramm.

#### [[nav:si-chart]] / [[nav:si-table]] — was verkauft oder investiert wurde (und warum)

[[img:ga-si-chart]]

*[[nav:si-chart]] — Verkäufe, Investition und Kredit über die Prognosejahre (Disposition des Operating
Net). Dieselben FID-/Jahr-Tags und Header-Chrome wie die anderen Forecast-Detail-Oberflächen.*

[[img:ga-si-table]]

*[[nav:si-table]] — Holding-Trades für das gewählte Jahr. Platzsparende Spalten: **Sold** (oder
**Invested**) mit **After Sale** / **After Invest**, **%**, und **Why**. Hover über einen **Name**
für ein vertikales kopierbares Detail (einschließlich **Prior Value**). **Why** trägt
Dollar-Split-Gründe — RMD vs. pro-rata Residual vs. Tax-Account-Order usw.*

#### Weitere Chips

| Chip | Vollständiger Name | Zweck |
|------|--------------------|-------|
| [[nav:si-chart]] | Money Movements chart | Sales, Invest, Borrow über die Jahre (Disposition des Operating Net). |
| [[nav:si-table]] | Money Movements table | Holding-level Trades und **Why**-Codes (RMD vs. Residual). |
| [[nav:taxes]] | Tax statements | Assessment-Detail für das gewählte Jahr (federal, state wenn modelliert, property). Hinweis: Das Assessment eines Jahres wird oft **im Folgejahr bezahlt**, sodass es nicht mit der Taxes-Zeile im Cash Flow desselben Jahres übereinstimmen muss. |
| **Rec** | Reconciliation | Beweis, dass das Jahr bilanziert: Cash-Quellen = Verwendungen (Gleichung oder Sankey). |

**Wonach Sie je Oberfläche schauen sollten (Starter-Intuition):**

- [[nav:bs-chart]] / [[nav:bs-table]] — Steigt oder erodiert Vermögen? Wann schrumpfen Liabilities? Ist das Haus
  groß vs. flexible Konten?
- [[nav:cf-chart]] / [[nav:cf-table]] — Wann endet Earned Income? Stuft der Lifestyle ab? Sind Steuer- oder
  Healthcare-Spitzen sichtbar?
- **Taxes** — Ist die Steuergeschichte in den Rentenjahren materiell, oder eine Nebensache?
- **Money Movements** — In Drawdown-Jahren: **welche** Konten finanzieren Ausgaben, und unter welchen
  Regeln?
- **RMD** — Wie groß werden erforderliche traditionelle Ausschüttungen über den Horizont?
- **Rec** — Plausibilitätscheck, wenn auf dem Cash-Flow-Diagramm etwas „nicht aufgeht“.

### Die Ansicht steuern — Chips, Jahr und Prognose {#controlling-what-you-see}

Es gibt einen **Reichtum an Information für jedes Szenario (Prognosepfad) und jedes Jahr**. Zwei
Slider (oder gleichwertige Steuerungen) stellen das ein:

| Steuerung | Rolle |
|-----------|-------|
| **Forecast ID (FID)** | Welchen **einzelnen Pfad** durch die Monte-Carlo-Wolke Sie im Detail inspizieren. ID **0** ist der geometrische-Mittel- / repräsentative Pfad (ein stabiler „Nordstern“, kein Versprechen der wahrscheinlichsten Zukunft). Andere IDs sind einzelne simulierte Pfade. |
| **Year** | Welches Kalenderjahr dieses Pfads die Tabellen, die Tax Card, den Sales Plan und die Reconciliation füllt. Diagramme zeigen weiterhin den vollen Horizont; das gewählte Jahr ist hervorgehoben / in Detail geladen. |
| [[nav:year-axis]] | Auf dem **Diagramm** (Kalender-Icon, unten links): Jahreslinie als Kalenderjahre oder **Alter einer Person**. Getrennt vom **Jahr**-Regler in der Kopfzeile — ändert nicht, welches Jahr gewählt ist. |

Die **Chips** wählen dann **welche Karten** für diesen Pfad und dieses Jahr erscheinen. Schalten Sie
aus, was Sie nicht erkunden, damit das Panel lesbar bleibt.

[[img:ga-year-slider]]

***Year**-Steuerung: Wertebox mit dem Kalenderjahr; unter der Spur eine goldene Timeline, deren
Marker **auf ihren echten Jahren sitzen** — Planstart (🚩), Renten, Planende (🏁). Anders als die
Forecast-ID-Sprünge bedeuten diese Positionen etwas auf der Achse.*

Diagramme tragen außerdem [[nav:year-axis]] — ein **Kalender-Icon** unten links an [[nav:bs-chart]],
[[nav:cf-chart]] und den anderen Jahresachsen-Diagrammen. Nutzen Sie es, wenn die Jahreslinie
**jemandes Alter** zeigen soll. Der **Jahr**-Regler in der Kopfzeile wählt weiterhin das Jahr für
die Tabellen. Hover über den Chip, wenn Sie die Erinnerung brauchen.

#### Schnellsprünge zu den Key Forecasts {#quick-jumps-to-the-key-forecasts}

<a id="quick-jumps-to-the-key-forecasts"></a>

Unter dem Label **Forecast ID** liegt eine kleine goldene Linie mit einer Reihe von Marken. Das sind
**Schnellsprünge**: Klicken Sie eine und die Forecast ID landet auf dieser Prognose.

Jedes farbige Dreieck ist eine der **Key Forecasts** des Laufs, in **derselben Farbe gezeichnet, die
diese Prognose** in der Key-Forecasts-Tabelle und in der Verteilungswolke hat — also ist Rot überall
Min. Hover über eines, um zu sehen, welche Prognose es ist, ihre ID und was der Punkt bedeutet.

Zwei Dinge über diesen Streifen lohnen Verständnis, weil sie beabsichtigt sind:

- **Die Marken lesen schlechtestes Ergebnis → bestes, von links nach rechts** — Min, Q2, **GMF ✦**,
  Q3, Mean, Q4, Max, dieselbe Reihenfolge wie die Zeilen der Key-Forecasts-Tabelle. Das goldene **✦**
  ist der deterministische Nordstern **in dieser Ordnung**, damit Sie sehen, *wo die GMF unter den
  benannten Outcomes sitzt* — nicht seitlich abgestellt.
- **Sie sind *nicht* an ihren Forecast-IDs positioniert.** Eine Forecast ID ist ein **Name**, keine
  Messung: Der Lauf kann seinen schlechtesten Pfad auf ID 366 und seinen besten auf ID 12 landen, und
  das sagt Ihnen nichts über beides. Also nutzt der Streifen seine Breite für die Ordnung, die etwas
  bedeutet. (Die Dreiecke des **Year**-Sliders sind der umgekehrte Fall — ein Jahr *ist* eine
  Position, also sitzen sie genau dort, wo sie auf der Timeline fallen.)

Bevor Sie eine Simulation laufen gelassen haben, gibt es nur das **✦** zum Springen, was ehrlich
ist: Es gibt noch keine anderen Prognosen. Lassen Sie eine laufen und der volle Streifen erscheint.

[[img:ga-fid-quick-jumps]]

*Forecast-ID-Steuerung nach einem Lauf: kurzes Label **FID** plus aktiver Key-Name (**GMF ✦** hier),
Wertebox mit der Pfadnummer (**0**), und unter dem Label die goldene Linie mit farblich passenden
Sprüngen (schlechtester → bester) und dem GMF-**✦** an seinem Platz in dieser Ordnung. Klicken Sie
eine Marke oder eine Key-Forecasts-Zeile, und das Label übernimmt denselben Namen wie die
Diagrammtitel.*

**Probieren Sie das** (rechts, **Forecast Detail** — ein Lauf ist schon geladen):

1. Klicken Sie das **rote** (linkeste) Dreieck unter **FID** — Sie landen auf **Min**, das Label wird
   **FID Min**, und Diagramme/Tabellen zielen auf diesen Pfad.
2. Klicken Sie das goldene **✦** *im Sprungstreifen* (zwischen frühen und späteren Outcomes) — zurück
   zum GMF-Nordstern (**FID GMF ✦** / Pfad **0**). Achten Sie darauf, **wo** es unter den anderen
   Marken sitzt.
3. Bei **Year** klicken Sie einen Timeline-Marker (🚩 Planstart, ein Renten-Dreieck oder 🏁 Planende)
   — das Jahr springt auf dieses Kalenderjahr; Tabellen und jahresbezogene Karten folgen.

Diese Sprünge gehören zu den handlichsten Chrome-Features der App: sie benennen einen Pfad oder
Meilenstein, ohne blind zu schrubben.

### Simulation Summary — die Wolke (Standardvorschauen) {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

*Simulation Summary: **Simulations**-Anzahl, Chips **Distribution** / **Key Forecasts** /
**Success Summary**, **Re-simulate**, die Endvermögens-Wolke (Erfolg bei **Silver**), die
Key-Tabelle (Min … Max, GMF ausgewählt) und Outcome-Metriken darunter. Klicken Sie eine Key-Zeile,
um diesen Pfad überall zu fokussieren.*

**Simulation Summary** (die andere Hälfte des Akkordeons) beantwortet andere Fragen: Form des
**terminalen Net Worth**, **Erfolgsrate** unter Ihrer Erfolgsdefinition (Gold / Silver / Bronze) und
**Key Forecasts** (Min, Quartile, Mean, Max, …). Das Klicken einer Key-Zeile fokussiert typischerweise
**Forecast Detail** auf diesen Pfad, damit Sie inspizieren können, *warum* er extrem war.

#### Net Worth Distribution

[[img:sfb-nw-distribution]]

Jeder Markierungspunkt ist ein simulierter Pfad nach **End-Net-Worth**. Success % sitzt unter dem
Diagramm an der aktiven Medaille/Schwelle. **Reveal** und **Close up** helfen, wenn die Wolke schwer
lesbar ist ([Chart-Chrome](#chart-chrome)).

#### Key Forecasts

[[img:sfb-key-forecasts]]

Min / Quartile / GMF / Max (und verwandte Metriken). Wählen Sie eine Zeile, um diesen Pfad
**überall** zu fokussieren und ihn auf der Verteilung hervorzuheben.

Die Erfolgsrate hängt von der **Erfolgsdefinition** unter Assumptions → Success ab. Lektionen
interessieren sich mehr für die **Richtung der Änderung** als für einen einzelnen Prozentsatz.

<a id="chart-chrome"></a>

### Chart-Chrome — Close up, Zoom und Reveal {#chart-chrome}

Diagramme und Verteilungskarten teilen einen kleinen **Header-Cluster** (dieselbe Steuerungsfamilie
über Forecaster und Transforms). Hover über jedes Icon für seinen Produkt-Tipp. Lektionen verlinken
hierher, statt das Chrome jedes Mal neu zu lehren.

| Steuerung | Wo | Was sie tut |
|-----------|-----|-------------|
| **Close up** (Expand- / Open-in-full-Icon) | Die meisten Diagramm- und Tabellenkarten (BS, CF, Distribution, Key Forecasts, …) | Öffnet **diese** Ansicht größer in einem fokussierten Modal — derselbe Inhalt, der größte Teil des Bildschirms — damit Sie graben können, ohne das umgebende Panel. **Hover-Tipps funktionieren weiterhin** im Modal (Jahres-Aufschlüsselungen, Verteilungspunkte, Outcome-Labels). Schließen mit **Esc**, Scrim-Klick oder **✕**. Das Modal ist **in der Breite veränderbar** (Greifer am rechten Rand). |
| **Vertical zoom** (Zoom-Slider im Header) | [[nav:bs-chart]] und [[nav:cf-chart]] | Vergrößert hohe Balken, damit kleinere Jahr-zu-Jahr-Scheiben leichter zu vergleichen sind. Ganz **links** ist **1×** (kein Zoom). Ändert **nicht** den Plan — nur die vertikale Skala der Balken. |
| **Reveal** (Slider unter dem Diagramm) | **Net Worth Distribution** | Drückt die horizontale Skala zu einer log-ähnlichen Ansicht, wenn wenige extreme Enden die Hauptwolke der Punkte **zusammendrücken**. Nutzen Sie es, wenn die Masse der Outcomes schwer lesbar ist. Das Produkt kann „Outliers squashing the dots?“ zu dieser Steuerung hinweisen. |
| **Link reveal** | Zwei Verteilungen nebeneinander (z. B. Original vs. geändert) | **On** (Standard): eine Reveal-Einstellung für beide Diagramme, damit sie vergleichbar bleiben. **Off**: Reveal jede Seite unabhängig. |
| **Link chart scales** | Gepaarte **BS**- oder **CF**-Diagramme (Baseline \| Vergleich) | Teilen eine **y-Achse** über beide Zellen, skaliert auf die höhere Seite — der kleinere Plan **schrumpft sichtbar**, statt dass jede Seite auto-skaliert und gleich hoch wirkt. |
| **Merge charts** | Derselbe gepaarte BS- / CF-Vergleich | Faltet beide Seiten in **ein** Diagramm: jedes Jahr zeigt linken Balken dann rechten Balken nebeneinander auf gemeinsamer Skala (joined compare). Hover gibt weiterhin die Aufschlüsselung jeder Seite. Schließen Sie das Modal, wenn fertig. |

#### Beispiel: Close up


*Close up auf **Net Worth Distribution** — dieselbe Wolke und Erfolgsline, größeres Modal über
Forecaster. **Reveal** und Hover funktionieren hier weiterhin; schließen mit **✕** / Esc / Scrim.*

**Wann Close up**

- [[nav:bs-chart]] / [[nav:cf-chart]] wirken in einem Multi-Chip-Detail-Layout eng — öffnen Sie das, das Sie
  interessiert.
- **Distribution** neben **Key Forecasts**, oder **zwei Verteilungen** in Transforms nach einem
  Re-sim — Close up die Wolke (oder eine Seite), damit das Scrubben von Punkten bequem ist; Tipps und
  Highlight funktionieren weiter.
- Tabellen und andere dichte Karten nutzen dasselbe Close-up-Muster, wenn angeboten.

#### Beispiel: vertikaler Zoom

[[img:ga-vertical-zoom]]

*Cash Flows mit dem **Vertical-Zoom**-Slider im Header (Tipp: ganz links = 1× / kein Zoom). Hohe
Zuflussjahre zerdrücken den Rest der Reihe nicht mehr. Die Planrechnung bleibt unverändert.*

**Wann zoomen (BS / CF)**

- Der Stack eines Jahres ist so hoch, dass andere Jahre flach wirken — Zoom etwas hochschieben, dann
  Hover über die Jahre, die Sie interessieren.

#### Beispiel: Reveal

[[img:ga-compress]]

***Reveal** unter der Verteilung öffnet die Masse der Enden, wenn ein langer rechter Schwanz sonst
alles nahe null zusammendrücken würde. Outlier bleiben im Lauf; nur die horizontale Skala ändert
sich.*

**Wann Reveal (Verteilung)**

- Wenige ultra-reiche (oder ultra-arme) Enden pressen die Masse der Punkte in ein dünnes Band —
  Reveal spreizt die lesbare Mitte, ohne diese Outlier aus dem Lauf zu löschen.
- **HNW + high-vol**-Bücher (Max weit von GMF) brauchen es am meisten — eigene Lektion:
  [When the outcome cloud needs Reveal](/learn/nw_distribution_compression).

Keine dieser Steuerungen startet Monte Carlo neu oder bearbeitet das Dossier; sie ändern nur,
**wie** Sie schauen.

### In ein schwieriges Ergebnis bohren {#drill-into-a-tough-outcome}

<a id="drill-into-a-tough-outcome"></a>

Angenommen, Ihr Endziel ist: **die schlechtesten Pfade verstehen**, nicht nur die Headline-
Erfolgsrate.

1. Öffnen Sie [[nav:forecaster]] — Forecast Detail und **Simulation Summary** sind bereits befüllt
   (Standard-Simulation oft in der Größenordnung von **1.000** Pfaden, sofern die UI nichts anderes
   sagt). Re-simulieren Sie nur, wenn Sie den Plan geändert haben und einen frischen Multi-Pfad-Lauf
   brauchen.
2. **Größe ändern** am Akkordeon: Geben Sie **Simulation Summary** genug Raum zum Arbeiten (ziehen
   Sie den Split, sodass Summary hoch ist).
3. In Summary öffnen Sie **Key Forecasts** (und **Distribution**, wenn Sie das Wolkenbild möchten).
4. Wählen Sie **Min** (schlechtestes Terminal-Outcome im Lauf) — oder **Q2**, wenn Sie einen
   schlechten, aber nicht Einzel-Outlier-Pfad wollen (ungefähr die untere Quartilgrenze).
   *Abkürzung: Der [Schnellsprung-Streifen](#quick-jumps-to-the-key-forecasts) unter dem Label
   **Forecast ID** macht dasselbe, ohne Detail zu verlassen — das linkeste (rote) Dreieck ist
   **Min**, das nächste (orange) ist **Q2**. Praktisch, sobald Detail dominant und Summary eng
   ist.*
5. Diese Auswahl sollte **Forecast Detail** auf diese Forecast-ID fokussieren. **Größe ändern**
   erneut, wenn Sie Detail jetzt dominant möchten.
6. Setzen Sie **Year** auf einen stressigen Meilenstein (erstes Rentenjahr, ein großes Ausgabenjahr,
   Care im späten Leben).
7. Aktivieren Sie Chips, die Ihre Frage beantworten, zum Beispiel:
   - [[nav:cf-chart]] + [[nav:cf-table]] — welches Geld hat sich in diesem Jahr bewegt?
   - **Money Movements** — was wurde verkauft, um es zu finanzieren?
   - [[nav:bs-chart]] — ist das Portfolio scharf abgestiegen?
   - **Taxes** — hat Steuer den Schmerz verstärkt?
8. Scrubben Sie **Year** vor/zurück entlang desselben schlechten Pfads, um zu sehen, ob der Stress
   ein Jahr oder ein langer Grind war.
9. Optional vergleichen Sie mit dem repräsentativen Pfad (**FID 0**, die GMF-Key-Zeile oder das
   goldene **✦** auf dem Schnellsprung-Streifen) mit demselben Jahr und denselben Chips — dieselbe
   Kamera, anderer Film.

Sie haben den Haushalt nicht geändert; Sie haben **gewählt, welche Geschichte** in der Wolke Sie
genau lesen.

---

## [[nav:transforms]] — eine Änderung ausprobieren, ohne die Baseline zu ruinieren {#transforms}

Öffnen Sie [[nav:transforms]].

Typischer Pfad in Lektionen:

1. Öffnen Sie **Modifications** (der What-if-Arbeitsbereich).
2. Wählen Sie etwas in **Modifiables** (oft eine **Person**, oder ein Cash-Flow-Element wie Earned
   Income).
3. Bearbeiten Sie eine Steuerung (Rentenjahr, **Active years**, Ausgaben, …).
4. Das Ändern einer der Modification-Eingaben fügt sie dem **Change Set** hinzu — Sie brauchen keinen
   separaten „diese Bearbeitung hinzufügen“-Schritt für die Änderung selbst.
5. **Re-simulate**, wenn Sie einen vollen Monte-Carlo-Vergleich Original vs. geändert möchten.
6. Lesen Sie **Original vs. geändert** in den Transforms- / Forecaster-Vergleichsansichten und in
   **Simulation Summary** nach einem Re-sim.

**Hinweis:** Wenn Sie eine Modification-Steuerung ändern, sollten Diagramme und Tabellen **live
aktualisieren**, damit Sie den Plan reagieren sehen, bevor (oder ohne) ein volles Re-sim. Zum
Beispiel: Erhöhen Sie **Active years** auf einem Earned-Income-Element und beobachten Sie, wie das
Bilanzbild mit den zusätzlichen Zuflüssen wächst; verringern Sie diese Jahre und beobachten Sie das
Schrumpfen.

Transforms ist für **Erkundung**. Einen permanenten zweiten Plan zu speichern ist eine separate
Wahl, wenn das Produkt sie anbietet. Bevorzugen Sie Transforms gegenüber dem Bearbeiten von Dossier,
wenn die Lektion „was wäre wenn“ ist — besonders in der Desktop-App, wo Dossier Ihre echten Daten
sind.

---

## [[nav:region]] {#region}

[[nav:region]] (Rail-Label) ist heute die Heimat für **US-Bundesstaat**-Erkundung „was wäre, wenn wir
dort lebten?“ — ein Vergleich im Stil der Lebenshaltungskosten gegen die Einstellung Ihres Plans.
Der Produktname ist absichtlich breiter: **künftige Arbeit wird andere Länder einschließen**; die
USA sind der aktuelle Fokus.

Nutzen Sie es, wenn eine Lektion (oder Ihre eigene Neugier) um **Ort** geht, nicht wenn Sie nur
Portfolio-Diagramme brauchen — die bleiben in Forecaster.

---

## Hilfe, die immer in der Nähe ist {#help-nearby}

- **?**-Icons auf Panels öffnen fokussierte Hilfe für dieses Diagramm oder diesen Editor.
- Das **Help**-Werkzeug auf der Rail öffnet eine kurze App-Karte (Abschnitte + Tipps).
- Lektionen sind der **geführte Pfad**; In-App-Hilfe ist die **Referenz**, wenn Sie tiefer gehen.
- Für **Kopieren**, **Theme** und **Tooltip- / Alt**-Verhalten siehe [Globales Chrome](#global-chrome-copy-theme-and-tooltips) oben.

Wenn eine Lektion und ein Hilfe-Popup bei einem winzigen Label auseinanderliegen, vertrauen Sie dem
**UI-Chrome** — Copy kann sich im Laufe der Zeit straffen. Die **Orte** (Dossier, Assumptions,
Forecaster, Transforms, Region, [[nav:birds-eye]]) sind die dauerhafte Karte.

---

## Eine 5-Minuten-Übungstour {#practice-tour}

1. Blick nach **oben rechts**: Theme (Sonne/Mond) und der **Hover-Details**-Kreis; versuchen Sie
   einmal **Alt** über einem Diagramm oder einer Tabelle, damit Tooltip-Stille sich natürlich anfühlt.
2. [[nav:dossier]] (Ordner-Icon) — Sample durchstöbern; merken: **nur ansehen** für Lektionen, keine
   Dateneingabe.
3. In [[nav:birds-eye]] (oben im Dossier): Personen, dann **Cash Flow** (und **Σ**) auf Assets &
   Liabilities versuchen; zurück zu **Account** / **Holding** wechseln.
4. Wechseln Sie zu [[nav:forecaster]] — bemerken Sie, dass das Bird's-Eye-**Werkzeug**-Icon auf der Rail
   erscheint (auf Dossier verborgen).
5. Öffnen Sie [[nav:birds-eye]] von diesem Werkzeug — bestätigen Sie, dass es der Dossier-Übersicht
   entspricht; schließen und auf Forecaster bleiben.
6. In Forecaster einen Blick auf **Simulation Summary** (bereits gelaufen) — Erfolg unter Silver.
7. In **Forecast Detail** nur [[nav:bs-chart]] und [[nav:cf-chart]] an lassen; den **Year**-Slider bewegen.
8. Versuchen Sie **Key Forecasts → Min** (oder Q2), dann **Money Movements** für ein drawdown-ähnliches
   Jahr öffnen.
9. [[nav:transforms]] → Modifications — einen Cash Flow oder eine Person wählen; **Active years** oder
   Rente anstupsen und die **live** Diagrammreaktion beobachten; den **Change Set** notieren. Ohne
   volles Re-sim gehen, wenn Sie nur die Karte wollten.
10. Optional [[nav:assumptions]] öffnen und einmal durch Growth / Taxes / Success klicken — nichts
    ändern müssen.
11. Optional [[nav:region]] öffnen und sehen, dass es um Ort geht, nicht um Portfolio-Mathematik.

Wenn dieser Pfad vertraut ist, fahren Sie fort mit
[Meet the Springfield household](/learn/springfield_baseline) für die erste echte Planungslektion
auf demselben Sample.

---

## Wo das im Lehrplan sitzt {#where-to-go-next}

| Reihenfolge | Lektion |
|-------------|---------|
| **0 (Sie sind hier)** | Die App kennenlernen (**Hier starten**) |
| **1** | [Meet the Springfield household](/learn/springfield_baseline) (Orientierung + Renten-Timing) |
| **Später** | Living spend, Hypotheken-Kontrast, Erfolgsdefinitionen, Social-Security-Claim, Entnahmestrategie, Assumptions-Deep-Dives, … |

Spätere Lektionen werden weiter hierher mit kurzen „wo“-Erinnerungen zeigen, statt die ganze Karte
neu zu lehren.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
