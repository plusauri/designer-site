<!--
tutilis-return: lessons/charts_and_tables/prose/de.md
tutilis-locale: de translated
-->
# Diagramme und Tabellen lesen

Eine Prognose ist die Geschichte eines Haushalts, Jahr für Jahr erzählt. Das [[nav:forecaster]] erzählt sie durch eine Handvoll Ansichten, und jede Ansicht beantwortet eine andere Frage. Die Bilanz sagt, was der Haushalt wert ist. Der Cashflow sagt, was hereinkam und was hinausging. Geldbewegungen sagt, welche Konten die Differenz bezahlt haben, und die Steuerkarten sagen, woher jede Steuer kam.

Diese Lektion ist eine Führung durch diese Ansichten. Sie handelt vor allem vom Werkzeug und berührt die Finanzen nur dort, wo die Finanzen Ihnen sagen, welche Karte Sie öffnen sollen. Der Haushalt Springfield auf der [[term:canvas]] ist ein verheiratetes Paar in Ohio, das beide arbeitet, ein Haus mit Hypothek besitzt und im Ruhestand Social Security bezieht, sodass jede Ansicht auf beiden Seiten etwas zu zeigen hat.

## Was Sie lernen werden {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt, der sie beantwortet.

1. **Wo liegen die Diagramme und Tabellen, und wie schalte ich sie ein?** Siehe [Wo die Ansichten liegen](#where-the-views-live).
2. **Warum hat jedes Diagramm eine obere und eine untere Hälfte?** Siehe [Zwei Diagramme in einem](#two-charts-in-one).
3. **Welche Geschichte erzählt die Bilanz?** Siehe [Bilanz: Nettovermögen](#balance-sheet-net-worth).
4. **Welche Geschichte erzählt der Cashflow?** Siehe [Cashflow: rein und raus](#cash-flow-in-and-out).
5. **Wie hängen die beiden zusammen?** Siehe [Geldbewegungen verbinden sie](#money-movements-joins-them).
6. **Wie vergleichen sich diese Ansichten mit den Aufstellungen eines Buchhalters?** Siehe [Drei Aufstellungen](#three-statements).
7. **Was fügen die Tabellen hinzu, was die Diagramme nicht zeigen?** Siehe [Tabellen und ihre Hover](#tables-and-their-hovers).
8. **Wo sehe ich, was sich in einem bestimmten Jahr ändert?** Siehe [Die Jahreskarte](#the-year-card).
9. **Wo suche ich eine bestimmte Steuer?** Siehe [Die Steuerkarten](#the-tax-cards).
10. **Wie komme ich von einem Wort zu der Karte, die es zeigt?** Siehe [Eine Karte über ihr Wort finden](#find-a-card-by-its-word).

</div>
</aside>

## Wo die Ansichten liegen {#where-the-views-live}

Jede Ansicht in dieser Lektion ist eine Karte im **Prognosedetail**, dem ersten Abschnitt des [[nav:forecaster]]. **[[key:ForecastDetail]]** öffnet ihn. Entlang seiner Kopfzeile läuft eine Reihe von Chips, einer je Karte, und jeder Chip schaltet seine Karte ein oder aus. Die erste Reihe trägt die Kernansichten: [[nav:bs-chart]] und [[nav:bs-table]] für die Bilanz, [[nav:cf-chart]] und [[nav:cf-table]] für den Cashflow, [[nav:si-chart]] und [[nav:si-table]] für Geldbewegungen, [[nav:rec]] für den Abgleich und **Yr** für die Jahreskarte. Die zweite Reihe trägt die Steuerlinsen: [[nav:taxes]], [[nav:brackets]] und [[nav:cliffs]].

[[img:charts-tables-fd-chips|control]]

Die Chips 📈 sind Diagramme, die jedes Jahr des Plans abdecken, und die Chips ▦ sind Tabellen, die ein Jahr vollständig zeigen. Die beiden arbeiten als Paar. Sie entdecken ein Jahr in einem Diagramm, klicken seinen Balken an, um es auszuwählen, und die Tabellen darunter wechseln zu diesem Jahr. Die Chips, die Sie einschalten, werden gemerkt, sodass das Prognosemodul sich so öffnet, wie Sie es verlassen haben.

Wenn Sie alles sehen wollen, ohne Ihre Chips umzubauen, öffnet das Menü [[nav:peek]] jedes Diagramm, jede Tabelle oder jedes Diagramm neben seiner Tabelle über der App. Drücken Sie **[[key:Peek]]** und dann einen Buchstaben.

## Zwei Diagramme in einem {#two-charts-in-one}

Viele Planungswerkzeuge zeichnen das Nettovermögen als ein Diagramm, die Einnahmen als ein zweites und die Ausgaben als ein drittes. Tutilis zeichnet die Bilanz und den Cashflow stattdessen als zweiseitige Diagramme. Was der Haushalt hat, oder was hereinkommt, wächst von der Jahresachse nach oben. Was er schuldet, oder was hinausgeht, wächst von derselben Achse nach unten, auf derselben Dollarskala. Eine dünne schwarze Saldolinie läuft zwischen den beiden Hälften.

Jedes Diagramm trägt beide Hälften seines Themas, und der Saldo dazwischen ist die Geschichte.

Ein Diagramm statt zwei oder drei zu lesen hat einen praktischen Vorteil. Ein hoher Balken oben beruhigt Sie nur, wenn Sie auch sehen, was darunter liegt, und auf einem zweiseitigen Diagramm können Sie das eine nicht ohne das andere sehen. Die Saldolinie erledigt dann die Rechnung für Sie, Jahr für Jahr.

Beide Diagramme teilen zwei Gewohnheiten, die sich einmal zu lernen lohnen. Die Schaltfläche 📅 am linken Ende der Jahresachse schaltet die Beschriftungen von Kalenderjahren auf das Alter jeder Person um, was meist die natürlichere Art ist, einen Ruhestand zu lesen. Und jeder Balken erklärt sich, wenn Sie den Zeiger darauf ruhen lassen. Halten Sie **Alt**, um die Tipps auszublenden, während Sie über ein Diagramm fahren.

## Bilanz: Nettovermögen {#balance-sheet-net-worth}

Das [[nav:bs-chart]] beantwortet die Frage „Was ist der Haushalt wert?“ für jedes Jahr des Plans. Sein Thema ist das [[term:net-worth]], alles Besessene minus alles Geschuldete.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-chart]]

[[img:charts-tables-bs-chart]]

Über der Achse sind die Vermögenswerte jedes Jahres nach Art gestapelt. Bei Springfield ist das [[term:brokerage]] grün, der [[term:401k|401(k)]] in der Form [[term:traditional]] blau, die übrigen Konten grau, und das Haus sitzt oben in Bernstein. Unter der Achse hängt die Hypothek in Rot. Sie ist kurz, weil das Darlehen neben den Vermögenswerten klein ist, und sie schrumpft jedes Jahr, bis sie nach 2047 verschwindet. Ein dünner schwarzer Balken steht neben dem Stapel jedes Jahres, solange eine Verbindlichkeit abzuziehen ist, und die schwarze Nettovermögenslinie verbindet die Spitzen.

Die Form dieser Linie ist die Geschichte. Das Nettovermögen steigt durch die Erwerbsjahre und steigt weit in den Ruhestand hinein weiter, weil die Konten schneller wachsen, als der Haushalt aus ihnen entnimmt. Es erreicht 2063 seinen Höhepunkt und knickt dann nach unten. Der folgende Rückgang ist die [[term:ltc|Langzeitpflege]] des Plans, die 2064 einsetzt, und das Cashflow-Diagramm im nächsten Abschnitt zeigt sie deutlich.

Lassen Sie den Zeiger auf einem Jahr ruhen, und der Tipp listet die ganze Bilanz dieses Jahres, vom Nettovermögen oben bis zu jeder Art von Vermögenswert und jeder Art von Schuld darunter.

[[img:charts-tables-bs-chart-hover]]

Die Dollarbeträge im Diagramm sind [[term:nominal]], ein Teil des Anstiegs ist also [[term:inflation]]. Das Menü **Anzeige** in der oberen Leiste zeigt dasselbe Diagramm in heutigen Dollar, wenn Sie das reale Bild wollen.

## Cashflow: rein und raus {#cash-flow-in-and-out}

Das [[nav:cf-chart]] beantwortet eine andere Frage: „Wie hat der Haushalt dieses Jahr gelebt?“ Zuflüsse wachsen von der Achse nach oben und Abflüsse nach unten, und der Saldo ist Einnahmen minus Ausgaben minus Steuern.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

[[img:charts-tables-cf-chart]]

Bei Springfield sind die Einkommensbalken hoch, solange beide Personen arbeiten. Sie treten 2041 eine Stufe hinunter, wenn Homer in den Ruhestand geht, und noch einmal 2045, wenn Marge es tut, und danach ist Social Security das einzige Einkommen. Unter der Achse sind die Lebenshaltungskosten bernsteinfarben, die Gesundheitskosten violett und die Steuern rot. Das violette Band schwillt 2064 an, wenn die Langzeitpflege beginnt.

Die Saldolinie sagt Ihnen etwas, das das Bilanzdiagramm nicht sagt. Sie liegt in jedem Jahr unter der Achse, auch in den Erwerbsjahren, weil dieser Haushalt mehr ausgibt, als die Gehaltsschecks nach Hause bringen. Das Bilanzdiagramm steigt über diese Jahre trotzdem, weil die Konten mehr verdienen, als der Haushalt aus ihnen entnimmt. Die beiden Diagramme zusammen zu lesen ist die Art, beide Tatsachen auf einmal zu sehen.

Lassen Sie den Zeiger auf einem Jahr ruhen, und der Tipp nennt das Jahr und das Alter jeder Person, dann den Saldo, dann das Geld hinein und das Geld hinaus, jeden Teil auf seiner eigenen Zeile.

[[img:charts-tables-cf-chart-hover]]

Welche Einnahmen und Ausgaben ein eigenes Band bekommen, entscheiden Sie. Das Steuerelement **Segmente** in der Werkzeugleiste der Karte wählt die Kategorien, die ausgebrochen werden, etwa Social Security oder Studienkosten, und alles andere wird in einem Band „verbleibend“ gesammelt. Wählen Sie die Ausbrüche, die die Geschichte erzählen, die Sie gerade lesen.

## Geldbewegungen verbinden sie {#money-movements-joins-them}

Wenn der Cashflow negativ ist, muss das Geld irgendwoher kommen, und wenn er positiv ist, muss es irgendwohin gehen. [[nav:si-chart]] zeigt wohin. Seine Karte heißt **Geldbewegungen**, und sie ist die Brücke zwischen den beiden großen Diagrammen. Sie zeigt das durch Verkäufe von Positionen beschaffte Geld über der Achse und das durch Anlagen geparkte Geld darunter.

[[img:charts-tables-si-chart]]

Das Bild von Springfield folgt der Geschichte, die das Cashflow-Diagramm erzählt hat. Die Verkäufe sind klein, solange beide Personen arbeiten, wachsen nach den Ruheständen und werden 2051 von den [[term:rmd|Mindestentnahmen]] begleitet, den Verkäufen, die das Steuerrecht aus dem 401(k) erzwingt, sobald Homer 75 wird. Am höchsten sind sie in den Jahren der Langzeitpflege, wenn der Haushalt am meisten verkauft, um die Pflege zu bezahlen. Jeder Verkauf kommt aus einem Konto, sodass ein Kassenfehlbetrag im Cashflow-Diagramm zu einem kürzeren Stapel im Bilanzdiagramm wird.

Die [[nav:si-table]] zeigt ein Jahr Konto für Konto und Position für Position: was verkauft wurde, was angelegt wurde, der Saldo danach und der Anteil jedes Postens an der Aktivität des Jahres. Ihre letzte Spalte, **Warum**, nennt den Grund jeder Bewegung.

[[img:charts-tables-si-table-2030]]

Die Spalte Warum ist der Ort, an dem eine überraschende Zahl erklärt wird. 2030 verkauft der Plan aus jedem Konto ein wenig im Verhältnis zu seiner Größe, genau das, was seine Pro-rata-Entnahmeregel verlangt. Homer ist in diesem Jahr 54, der Anteil aus dem traditionellen 401(k) ist also eine vorzeitige Entnahme. Lassen Sie den Zeiger auf der Warum-Pille dieser Zeile ruhen, und die Gründe werden vollständig aufgeführt, die vorzeitige Entnahme darunter. Die Steuerkarte später in dieser Lektion zeigt die Strafe, die sie kostet, und [Reihenfolge nach Steuerkonto vs. pro rata](/learn/springfield_tax_order) vergleicht diese Regel mit einer, die zuerst aus den steuerpflichtigen Konten entnimmt.

## Drei Aufstellungen {#three-statements}

Buchhalter beschreiben ein Unternehmen mit drei Standardaufstellungen, und die Ansichten des Prognosemoduls liegen eng daneben.

- Die **Bilanz** listet, was zu einem Zeitpunkt besessen und geschuldet wird. Das [[nav:bs-chart]] zeichnet eine am Ende jedes Jahres.
- Die **Gewinn- und Verlustrechnung** listet, was über einen Zeitraum hereinkam und hinausging, und ihre unterste Zeile ist das, was gespart wurde. Der Saldo im [[nav:cf-chart]] ist diese unterste Zeile für einen Haushalt.
- Die **Kapitalflussrechnung** erklärt, warum sich die Kasse verändert hat. Sie hat drei Teile: die laufende Geschäftstätigkeit, die Investitionstätigkeit und die Finanzierungstätigkeit. Das Cashflow-Diagramm ist der laufende Teil. Geldbewegungen ist der Investitionsteil (Verkäufe und Anlagen) und der Finanzierungsteil (Kreditaufnahme).

Die Bücher eines Haushalts sind einfacher als die eines Unternehmens, deshalb fallen die Gewinn- und Verlustrechnung und der laufende Teil der Kapitalflussrechnung fast zusammen. Darum zeichnet Tutilis sie als ein Diagramm.

Die Karte [[nav:rec]] setzt alle drei für ein Jahr zusammen. Sie schreibt das Jahr als Bilanzgleichung, jede Quelle von Geld links und jede Verwendung rechts, und zeichnet dasselbe Jahr darunter als einen Fluss von jeder Quelle durch die Kasse des Jahres zu jeder Verwendung.

[[img:charts-tables-rec-2030]]

2030 addieren sich Springfields Einnahmen, reinvestierte Ausschüttungen und Verkäufe genau zu seinen Ausgaben, Steuern und Anlagen. Die Gleichung geht immer auf, und genau das macht sie nützlich. Wenn eine Zahl auf einer anderen Karte sich nicht zu addieren scheint, zeigt diese Karte, wohin jeder Dollar des Jahres ging.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Wussten Sie schon?</p>
<div class="lesson-did-you-know-body">

Unternehmen veröffentlichen auch eine vierte Aufstellung, die Eigenkapitalveränderungsrechnung, die erklärt, wie sich der Anteil der Eigentümer im Laufe des Jahres bewegt hat. Für einen Haushalt ist der Anteil der Eigentümer das Nettovermögen, und die schwarze Linie im Bilanzdiagramm zeichnet bereits nach, wie es sich von einem Jahr zum nächsten bewegt.

</div>
</aside>

## Tabellen und ihre Hover {#tables-and-their-hovers}

Die Tabellen zeigen ein Jahr vollständig. Dort lesen Sie einen genauen Betrag, und dort kann jede Zeile Ihnen sagen, woher sie kommt.

Die [[nav:bs-table]] beginnt mit dem Nettovermögen, teilt die Vermögenswerte dann in Sachwerte und Konten und endet mit den Verbindlichkeiten. Der Chip **Positionen** in ihrer Werkzeugleiste öffnet jedes Konto in die Fonds, die es hält.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:charts-tables-bs-table-2030]]

Viele Beträge sitzen auf einer kleinen Pille mit der Markierung **i**. Lassen Sie den Zeiger auf der Pille ruhen, und die Karte des Postens öffnet sich daneben. In der Bilanz zeigt die Karte den Endsaldo auf den Dollar, den die Tabelle rundet, über dem Posten, wie der Plan ihn beschreibt. Bei einem Konto bedeutet das seinen Eigentümer und jeden Fonds, den es hält, mit Kategorie, Wert und Kosten.

[[img:charts-tables-bs-row-card]]

Die [[nav:cf-table]] tut dasselbe für den Cashflow. Sie beginnt mit dem Saldo, listet jede Einnahme und jede Ausgabe unter ihrer Kategorie und listet die Steuern nach Art. Unter den Abflüssen listet sie die Verkäufe, die den Fehlbetrag des Jahres gedeckt haben, dieselben Verkäufe, die Geldbewegungen erklärt.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:charts-tables-cf-table-2030]]

[[term:hover|Hover]] auf die Pille einer Cashflow-Zeile, und Sie sehen die Karte, aus der diese Zeile gebaut wurde. Kam die Zeile aus einem Generator, etwa einem Gehalt oder einer Phase der Lebenshaltungskosten, zeigt die Karte die Eingaben des Generators. Ein Hover auf eine Dividenden- oder Zinszeile zeigt die Rechnung dahinter: den Wert der Position mal jeder ihrer Renditen.

Jede Tabellenkarte hat außerdem eine Kopierschaltfläche, die die Tabelle als Text kopiert, den Sie in eine Tabelle oder eine Notiz einfügen können.

## Die Jahreskarte {#the-year-card}

Die Jahreskarte, **Yr** in der Chip-Reihe, listet, was sich im ausgewählten Jahr ändert. Sie ist gegliedert in Lebensereignisse, Cashflows, die beginnen oder enden, und die Beitragsgrenzen, die gelten. Das ist die Karte, die Sie öffnen, wenn ein Balken in einem Diagramm eine Stufe hinauf- oder hinuntertritt und Sie wissen wollen, warum.

[[img:charts-tables-year-events-2041]]

2041 geht Homer mit 65 in den Ruhestand und beginnt Medicare, die Lebenshaltungskosten des Ruhestands ersetzen die der Erwerbsjahre, und Marge nimmt einen eigenen Krankenversicherungsplan auf, bis sie das Medicare-Alter erreicht. Diese eine Karte erklärt die Stufe nach unten in den Einkommensbalken und die Änderung im Gesundheitsband des Cashflow-Diagramms. Dieselbe Liste erscheint in einem Tipp, wenn Sie den Zeiger auf der Jahresbeschriftung unter einem der beiden Diagramme ruhen lassen.

## Die Steuerkarten {#the-tax-cards}

Die Karte [[nav:taxes]] zeigt, wie jede der Steuern des Jahres ermittelt wurde. In der App liest sich ihr Titel wie **Steuern — 2030 (Saldo gezahlt 2031)**. Die Steuer auf den Lohn eines Jahres wird in diesem Jahr einbehalten, und der Rest der Steuer des Jahres, etwa die Steuer auf Gewinne und Entnahmen, wird im folgenden Jahr beglichen. Darum stimmt die Summe der Karte nicht mit der Zeile Steuern im Cashflow desselben Jahres überein, die zeigt, was in diesem Jahr tatsächlich gezahlt wurde: der eigene Einbehalt plus der Saldo des Vorjahres.

[[img:charts-tables-tax-statements-2030]]

Die Karte hält bis zu drei Aufstellungen, nebeneinander, wenn die Karte breit genug ist, und jede beantwortet andere Fragen.

- **Die Bundesaufstellung** baut das [[term:agi|bereinigte Bruttoeinkommen]] aus seinen Quellen auf, zeigt das [[term:magi]] darunter, zieht den [[term:standard-deduction]] ab und listet jede Steuer mit dem Betrag, auf den sie erhoben wurde, und dem festgesetzten Betrag. Schauen Sie hier nach dem Einkommen hinter einem Medicare-[[term:surcharge]], nach Lohnabgaben, nach der [[term:niit|Steuer auf Nettokapitalerträge]] und nach Strafen. 2030 ist die letzte Zeile die [[term:early-withdrawal-penalty]] von 10 % auf den 401(k)-Verkauf, den Geldbewegungen erklärt hat.
- **Die Aufstellung des Bundesstaats** geht vom eigenen Basiseinkommen des Bundesstaats aus und listet die Anpassungen, die der Bundesstaat vornimmt. Ohio zieht die Zinsen auf US-Staatsanleihen ab, die Bundesstaaten nicht besteuern dürfen, und addiert eine [[term:local-income-tax|lokale Einkommensteuer]] auf Löhne. Schauen Sie hier, wenn ein Umzug in einen anderen Bundesstaat die Frage ist oder wenn eine Einkommensquelle vom Bundesstaat anders besteuert wird als vom IRS.
- **Die Grundsteueraufstellung** listet jedes Haus oder andere Immobilien zum Marktwert mit dem Satz, zu dem sie besteuert werden, sodass der geltende Satz auf der Beschriftung ihrer Zeile steht. Schauen Sie hier, wenn ein Haus ein großer Teil des Plans ist, denn die [[term:property-tax]] ist geschuldet, ob das Haus etwas einbringt oder nicht. [Grundsteuer: der stille Killer](/learn/property_tax_the_silent_killer) verfolgt sie durch einen Ruhestand.

Unter den Aufstellungen öffnet **US-Steuertabellen ansehen** die bundesweiten und bundesstaatlichen Tarife des Jahres, sodass Sie eine [[term:bracket]] oder eine Grenze gegen die Zahl prüfen können, die sie erzeugt hat.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules]]

Zwei weitere Linsen sitzen neben dem Chip Steuern, und jede hat eine eigene Lektion. [[nav:brackets]] stapelt das Einkommen des Jahres gegen die Bundesstufen und zeigt, wie viel Raum bis zum nächsten Satz bleibt, das Werkzeug für die Planung von Umwandlungen und Entnahmen. [Die günstigen Stufen füllen](/learn/filling_the_cheap_buckets) lehrt es. [[nav:cliffs]] misst, wie nah das Einkommen des Jahres an jede Schwelle heranläuft, an der ein Kosten sprunghaft steigt, was Tutilis eine [[term:cliff]] nennt. Eine Stufe des Medicare-Zuschlags ist eine. [Schwellenradar](/learn/cliff_radar_forecaster) lehrt diese.

## Eine Karte über ihr Wort finden {#find-a-card-by-its-word}

All diese Karten nützen nur, wenn Sie die richtige schnell finden, und das Glossar ist dafür gebaut. **[[key:Glossary]]** öffnet es, sogar während Sie in einem Feld tippen. Suchen Sie ein Wort, und Sie bekommen seine Definition, und unter der Definition eine goldene Karte mit dem Titel **Wo es in der App ist**.

[[img:charts-tables-glossary-net-worth]]

Die Wo-Karte listet die Pfade zu jedem Ort, an dem das Wort erscheint. Manche Wörter haben nur eine Ausgabe. Das Nettovermögen zeigt sich in der obersten Zeile der Bilanztabelle und in der Vogelperspektive. Andere Wörter haben bis zu drei Arten von Pfaden: wo Sie den Wert im Plan eingeben, wo Sie eine Änderung als Was-wäre-wenn in Transformationen ausprobieren und wo das Ergebnis in der Prognose erscheint. Klicken Sie einen Pfad, und das Glossar schließt sich, die App geht den Pfad ab, und die Karte, die er nennt, öffnet sich in Großaufnahme. Ohne geöffneten Plan werden die Pfade gezeigt, lassen sich aber nicht verfolgen.

[[img:charts-tables-glossary-property-tax]]

Die Grundsteuer zeigt alle drei. Sie wird an einem Sachwert im Plan eingegeben, als Was-wäre-wenn in Transformationen ausprobiert und an zwei Stellen in der Prognose gezeigt, auf der Grundsteueraufstellung der Karte Steuern und in der Zeile Grundsteuer der Cashflow-Tabelle. Das macht das Glossar zum schnellsten Weg in eine unbekannte Karte. Schlagen Sie das Wort nach, das Sie kennen, und lassen Sie die Wo-Karte Sie an den Ort bringen, der es zeigt.

[[jump:property-tax]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur in der Desktop-App</summary>
<div class="lesson-desktop-only-body">

Die Pfade **Wo Sie es eingeben** führen zu den eigenen Editoren des Plans, und nur die Desktop-App hat diese. Die Pläne im Lernzentrum sind schreibgeschützte Lehrpläne, also haben diese Pfade auf der Zeichenfläche neben dieser Lektion keinen Ort, an den sie führen. In der Desktop-App, wo Sie die Zahlen Ihres eigenen Haushalts eingeben, öffnet derselbe Pfad das Feld, in dem der Wert gesetzt wird, etwa die Grundsteuer Ihres Hauses im Dossier.

</div>
</details>
