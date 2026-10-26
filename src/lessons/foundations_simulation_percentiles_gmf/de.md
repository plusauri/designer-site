<!--
tutilis-return: lessons/foundations_simulation_percentiles_gmf/prose/de.md
tutilis-locale: de translated
-->
# Monte Carlo, vom Nordstern zur Streuung

Jordan ist sechzig, plant, 2031 in den Ruhestand zu gehen, und hat 1,34 Millionen Dollar investiert, etwa 70/30 verteilt auf einen [[term:401k|401(k)]], ein [[term:brokerage]] und etwas Bargeld. Die Prognose für diesen Plan zeigt zwei Dinge zugleich. Die Diagramme ziehen eine einzige glatte Linie durch die Jahre, und die Simulationszusammenfassung daneben meldet tausend verschiedene Enden, von einem tiefen Loch bis zu mehreren zehn Millionen Dollar.

Beide sind die Prognose, und sie beantworten verschiedene Fragen. Diese Lektion nimmt die Prognose Schraube für Schraube auseinander: woher die einzelne Linie kommt, woher die tausend kommen, die Arithmetik unter jeder von ihnen, warum die tausend Enden so weit nach rechts neigen, und was die ganze Methode nicht sehen kann.

Zwei Pläne sind auf der [[term:canvas]] geöffnet. [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) ist der Ruhestandsplan, mit einem Gehalt, Social Security und Lebenshaltungskosten. [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) ist 100.000 $ in einem S&P-500-Fonds innerhalb eines [[term:roth|Roth]]-[[term:ira|IRA]], und sonst nichts im Plan, sodass sich die Form seiner Ergebnisse lesen lässt, ohne dass etwas sie verwischt. Die schwerere Mathematik steht in den Tafelblöcken mit der Markierung **Für Mathematikfreunde**. Nichts ist verborgen, und die Lektion lässt sich vollständig lesen, wenn jeder von ihnen geschlossen ist.

## Was Sie lernen werden {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt, der sie beantwortet.

1. **Woher kam Monte Carlo, und warum ist es nach einem Kasino benannt?** Siehe [Woher Monte Carlo kam](#where-monte-carlo-came-from).
2. **Warum braucht eine planende Person sowohl eine einzelne Prognose als auch tausend davon?** Siehe [Zwei Arten, eine Zukunft zu lesen](#two-ways-to-read-a-future).
3. **Was ist der Nordstern-Pfad, und warum wird er aus dem geometrischen Mittel gebaut?** Siehe [Der Nordstern-Pfad](#the-north-star-path).
4. **Woher kommt jede zufällige Zukunft, und was in meinem Plan ist zufällig?** Siehe [Eine Ziehung je Posten und Jahr](#one-draw-per-item-per-year).
5. **Wie bewegen sich Aktien, Anleihen und Ausgaben in einem simulierten Jahr gemeinsam?** Siehe [Gemeinsam bewegen](#moving-together).
6. **Muss ich eine dieser Zahlen selbst wählen?** Siehe [Vorgaben, die Sie in Ruhe lassen können](#defaults-you-can-leave-alone).
7. **Wie lese ich die tausend Enden: Perzentile, den Median, die Erfolgsquote?** Siehe [Die tausend Zukünfte lesen](#reading-the-thousand-futures).
8. **Warum ist die Streuung des Nettovermögens schief, und wäre sie es nach einem Jahr?** Siehe [Warum das Ergebnis nach rechts neigt](#why-the-outcome-leans-right).
9. **Ist ein Lauf von zehntausend Zukünften besser als ein Lauf von tausend?** Siehe [Wie viele Zukünfte laufen sollen](#how-many-futures-to-run).
10. **Was kann mir Monte Carlo nicht sagen?** Siehe [Was Monte Carlo nicht sehen kann](#what-monte-carlo-cannot-see).

</div>
</aside>

## Woher Monte Carlo kam {#where-monte-carlo-came-from}

Die Methode begann mit einem Patience-Spiel. 1946 erholte sich der Mathematiker Stanislaw Ulam von einer Krankheit und vertrieb sich die Zeit mit Karten, und er fragte sich, wie groß die Chance war, dass eine Hand Canfield-Patience aufgeht. Die Kombinatorik war hoffnungslos. Ihm fiel auf, dass es weit leichter wäre, hundert Hände auszulegen und zu zählen, wie viele gelingen.

Ulam arbeitete in Los Alamos, wo die schweren Probleme Neutronen betrafen, die sich durch Material bewegen, und er sah, dass derselbe Kunstgriff galt. Mit John von Neumann arbeitete er aus, wie man vielen simulierten Neutronen folgt, von denen jedes zufällige Schritte macht, und zählt, was ihnen geschieht. Ihr Kollege Nicholas Metropolis schlug den Decknamen **Monte Carlo** vor, nach dem Kasino in Monaco, in dem Ulams Onkel gern spielte. Die ersten Läufe liefen 1948 auf dem Computer ENIAC, und Metropolis und Ulam veröffentlichten die Methode 1949 unter diesem Namen.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Wussten Sie schon?</p>
<div class="lesson-did-you-know-body">

Monte Carlo war ein Deckname, bevor es eine Methode war. Die Arbeit in Los Alamos war geheim, also brauchte sie einen Namen, der einem Außenstehenden nichts verriet, und der Name des Kasinos blieb hängen, weil die ganze Idee darin besteht, den Zufall viele Male spielen zu lassen und die Ergebnisse zu zählen.

</div>
</aside>

Die Finanzwelt nahm die Idee langsam auf. Phelim Boyle nutzte sie 1977, um Optionen zu bewerten, und Ende der 1990er Jahre hatte Software für die Ruhestandsplanung begonnen, eine einzelne angenommene Rendite durch viele simulierte zu ersetzen. Die Idee hat sich seit Ulams Patience nicht geändert. Wenn eine Frage zu verwickelt ist, um sie mit einer Formel zu lösen, spielt man sie viele Male mit dem Zufall in der Schleife durch und zählt, wie oft jedes Ergebnis eintritt.

Ein Ruhestandsplan ist genau diese Art von Frage. Gehalt, Ausgaben, Steuern, Entnahmen und Renditen speisen einander Jahr für Jahr, und es gibt keine Formel für „die Chance, dass dieser Plan aufgeht“. Die [[term:monte-carlo]] rechnet den Plan tausendmal durch und zählt.

## Zwei Arten, eine Zukunft zu lesen {#two-ways-to-read-a-future}

Die Prognose bietet zwei Ansichten desselben Plans, und eine planende Person braucht beide.

Die erste ist ein einzelner Pfad ohne Glück darin. Jede Anlage wächst mit ihrer erwarteten Zinseszinsrate, jeder Zahlungsstrom mit seiner erwarteten Rate, und jedes Jahr ist ein durchschnittliches Jahr. Tutilis nennt dies die **Nordstern**-Prognose, den [[term:gmf]], und es ist der Pfad, den die Bilanz- und Zahlungsstromdiagramme zeichnen, wenn die Prognose aufgeht. Es ist die **Prognose-ID 0**, [[term:fid-gmf]], und der Prognoseeintrag in der Leiste oben im Prognosemodul lautet **Nordstern ✦**, solange er ausgewählt ist.

[[jump:fid|output__forecaster__forecaster.forecast-detail__forecast-detail.fid]]

[[img:mc-balance-sheet-jordan]]

*Jordans Bilanz auf dem Nordstern-Pfad in [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). Das Nettovermögen steigt bis zum Ruhestand 2031, bleibt ein Jahr lang eben, während der Gehaltsscheck aufhört und die Entnahmen beginnen, und steigt dann wieder auf etwa 3 Millionen Dollar bis 2057. Nirgendwo auf diesem Pfad gibt es ein schlechtes Jahr.*

Die Nordstern-Ansicht ist das richtige Werkzeug für Was-wäre-wenn-Fragen. Weil sie keinen Zufall trägt, ist eine Änderung am Plan das Einzige, was sie bewegt. Wenn Jordan ein Jahr später in den Ruhestand geht, 5.000 $ weniger ausgibt oder das Depot in Anleihen schiebt, ist der Unterschied auf dem Nordstern-Pfad die Wirkung dieser Änderung und nichts sonst. Die Ansicht beantwortet, *in welche Richtung* ein Hebel den Plan schiebt und *wie weit*, und sie antwortet in genauen Dollar auf einem Diagramm, das Sie Jahr für Jahr lesen können. Wie die nächsten Abschnitte zeigen, sitzt der Nordstern-Pfad auch nahe der Mitte der tausend Zukünfte, sodass seine Größenordnungen repräsentativ sind.

Was die Nordstern-Ansicht nicht zeigen kann, ist das Risiko. Ein Plan, der auf einem durchschnittlichen Pfad aufgeht, kann trotzdem scheitern, wenn die schlechten Jahre früh kommen, und ein einzelner Pfad ohne schlechte Jahre hat keine Möglichkeit zu sagen, wie oft das geschieht. Dafür braucht es die zweite Ansicht: tausend Zukünfte, jede mit ihrem eigenen Glück, nebeneinander gelegt. Risiko ist eine Aussage über die Streuung der Ergebnisse, und nur die Streuung kann es messen.

Die beiden Ansichten teilen sich also die Arbeit. Nutzen Sie den Nordstern-Pfad, um den Plan zu verstehen und eine Fassung von ihm mit einer anderen zu vergleichen. Nutzen Sie die tausend Zukünfte, um zu fragen, wie viel der Plan aushalten kann.

## Der Nordstern-Pfad {#the-north-star-path}

Der Nordstern-Pfad wird aus dem [[term:geometric-mean]] der Rendite jedes Postens gebaut. Der Grund, warum er so gebaut wird und nicht aus dem schlichten Durchschnitt, ist ein paar Absätze wert, denn er erklärt eine Lücke, die durch die ganze Prognose hindurch auftaucht.

Jeder wachsende Posten in einem Plan trägt zwei Zahlen. Die erste ist seine durchschnittliche Jahresrendite, geschrieben [[term:mu]]. Die zweite ist, wie stark diese Rendite von Jahr zu Jahr schwankt, ihre [[term:volatility]], geschrieben [[term:sigma]]. Zusammen beschreiben sie eine Normalverteilung, N(μ, σ), die Glockenkurve, aus der die Jahresrendite des Postens gezogen wird. Der S&P-500-Fonds in Jordans Plan läuft auf den Zahlen des Systems für Aktien großer US-Unternehmen, N(7.56%, 16.42%).

Die Durchschnittsrendite ist nicht die Rate, mit der eine Anlage aufzinst. Verlieren Sie in einem Jahr 50 % und gewinnen Sie im nächsten 50 %, dann ist die Durchschnittsrendite null, aber aus 100 $ sind 75 $ geworden. Schwankungen kosten Wachstum, und die Kosten steigen mit der Größe der Schwankungen. Das ist der [[term:volatility-drag]], und eine gute Näherung dafür ist die Hälfte des Quadrats der Volatilität. Für den Aktienfonds sind das 16,42 % zum Quadrat und halbiert, etwa 1,35 Punkte, sodass die Rate, mit der er erwartbar aufzinst, 7,56 % − 1,35 % = **6,21 %** im Jahr beträgt.

Diese Aufzinsungsrate, μ − σ²/2, ist die Rate, mit der jeder Posten auf dem Nordstern-Pfad wächst. Der Name **GMF** steht für *geometric mean forecast*, die Prognose zum geometrischen Mittel. Über vierzig Jahre ist der Unterschied zum schlichten Durchschnitt groß, und der Plan [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) zeigt ihn, ohne dass etwas anderes im Weg steht. Seine 100.000 $ sind 2026 bewertet, sodass das Ende von **2065** vierzig Jahre Wachstum sind. Öffnen Sie diesen Plan und stellen Sie **Jahr** in der Leiste oben im Prognosemodul auf **2065**.

[[img:mc-balance-sheet-one-fund-2065]]

*Das Bilanzdiagramm für [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) auf dem Nordstern-Pfad, mit ausgewähltem 2065.*

Das Diagramm steigt ohne einen einzigen Knick. Jeder Balken ist 6,21 % höher als der davor, sodass die Balken in einer glatten, nach oben gebogenen Kurve klettern. Diese Glätte ist das Aussehen eines Pfades ohne Glück. Ein echtes Konto, und jede der tausend zufälligen Zukünfte, zickzackt auf dem Weg nach oben.

Die Bilanz-Tabelle für 2065 gibt die Zahl. Das Roth-IRA, das nur den S&P-500-Fonds hält, beendet das Jahr bei etwa **1,12 Millionen Dollar**, das sind 100.000 $ durch [[term:compounding]] zu 6,21 % über vierzig Jahre. Aufzinsen mit dem schlichten Durchschnitt von 7,56 % ergäbe stattdessen etwa 1,85 Millionen Dollar, zwei Drittel mehr, für denselben Fonds über dieselben Jahre.

[[img:mc-balance-sheet-table-one-fund-2065]]

*Die Bilanz für 2065 in [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund). Die Tabelle rundet auf 1,1 Mio. $.*

Die Tabelle rundet ihre Beträge, damit die Spalten schmal bleiben. Fahren Sie über den ⓘ-Chip neben **Roth IRA**, um den Endsaldo auf den Dollar zu sehen.

[[img:mc-balance-sheet-row-roth-2065]]

*Die Zeile 2065 des Roth-IRA, mit dem Zeiger darüber. Der Endsaldo ist 1.115.434 $, und die Karte darunter nennt die 100.000 $, mit denen der Fonds 2026 begonnen hat.*

Die Prognose kann auch jenen zweiten Pfad zeichnen. Der [[term:amf]], die *Prognose zum arithmetischen Mittel*, lässt jeden Posten mit seinem schlichten Durchschnitt μ wachsen. Sie ist eine optionale Zeile in der **Simulationszusammenfassung**, unter ihren Einstellungen **Erweitert**, und sie steht dort als Kontrast. Neben den Nordstern-Pfad gesetzt, ist die Lücke zwischen den beiden der Volatilitätsverlust des ganzen Plans.

[[jump:amf|output__forecaster__forecaster.simulation-summary__simulation-summary.advanced__advanced.include-amf]]

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — warum μ − σ²/2</summary>
<div class="lesson-math-body">

Vermögen nach \(n\) Jahren ist ein Produkt, \(W_n = W_0 \prod_{t=1}^{n} (1 + r_t)\), also ist die Rate, auf die es ankommt, der Durchschnitt der Logarithmen, \(g = \mathbb{E}[\ln(1+r)]\). Eine Entwicklung zweiter Ordnung von \(\ln(1+r)\) um \(\mu\) ergibt

\[ \mathbb{E}[\ln(1+r)] \approx \ln(1+\mu) - \frac{\sigma^2}{2(1+\mu)^2} \]

und für Renditen von wenigen Prozent liegt das nahe bei \(\mu - \sigma^2/2\), der Rate, die die Engine verwendet. Sie wird in `GeometricMeanReturnSampler` berechnet, als `means[i] - stdDevs[i]² / 2`, ganz ohne Zufallsziehung.

Für den Aktienfonds gibt die genauere Form 6,12 % im Jahr und \(\mu - \sigma^2/2\) gibt 6,21 %. Der Median der tausend simulierten Zukünfte wächst mit der ersten Rate, sodass der Nordstern-Pfad ein Haar **unter** dem Median sitzt, auf der vorsichtigen Seite. Beim Ein-Fonds-Plan über vierzig Jahre liegt er etwa auf Platz 473 von 1.000, und bei Jordans Plan etwa auf Platz 492.

Der Mittelwert der tausend wächst mit dem schlichten Durchschnitt, \(\mathbb{E}[W_n] = W_0 (1+\mu)^n\), weil die jährlichen Ziehungen unabhängig sind und der Erwartungswert eines Produkts unabhängiger Faktoren das Produkt ihrer Erwartungswerte ist. Das ist die AMF. Der Mittelwert einer schiefen Verteilung ist nicht der Ort, an dem ein typisches Ergebnis landet, und das ist das Thema eines späteren Abschnitts.

</div>
</details>

## Eine Ziehung je Posten und Jahr {#one-draw-per-item-per-year}

Jede Prognose außer dem Nordstern ist eine zufällige. Jede dieser tausend Zukünfte, nummeriert von 1 bis 1.000, ist ein vollständiger Durchlauf des Plans, Jahr für Jahr, wobei die Rendite jedes Postens zufällig gezogen wird. In jedem simulierten Jahr zieht die Engine eine Rendite für jeden Posten aus der Glockenkurve dieses Postens, N(μ, σ). Ein Aktienfonds kann in einem Jahr 21 % gewinnen und im nächsten 9 % verlieren. Der Plan tut dann mit diesen Renditen alles, was er auf dem Nordstern-Pfad tut: Er zahlt das Gehalt, gibt aus, zahlt Steuern, entnimmt, gewichtet neu, wenn der Plan es sagt, und trägt das Ergebnis ins nächste Jahr.

Um eine zu sehen, bleiben Sie auf dem blauen Plan [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) mit **Jahr** auf 2065, und tippen Sie **100** in den Prognoseeintrag in der Leiste oben im Prognosemodul.

[[img:mc-balance-sheet-one-fund-fid100]]

*Das Bilanzdiagramm für [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) auf Prognose-ID 100, mit ausgewähltem 2065. Derselbe Fonds und dieselben Jahre wie im Nordstern-Diagramm oben, mit zurückgelegtem Glück.*

Prognose 100 besteht nur aus zackigen Kanten. Der Fonds gewinnt 2030 33 % und 2036 27 %. Dann verliert er 2041 27 %, und nach einem kurzen Rückprall verliert er 2043 12 % und 2044 24 %, sodass das Konto von etwa 479.000 $ am Ende von 2039 auf etwa 259.000 $ am Ende von 2044 fällt. Im nächsten Jahr gewinnt es 42 %, und 2055 wie 2057 jeweils 36 %. Es beendet 2065 bei etwa 1,22 Millionen Dollar, nicht weit von den 1,12 Millionen Dollar des Nordsterns, auf einem Weg, der der glatten Kurve in nichts gleicht. Die Jahre nach 2065 sind nicht ruhiger. Das Konto überschreitet 2074 2,1 Millionen Dollar und liegt fünf Jahre später bei etwa 840.000 $.

Die Zahlen sind zufällig, aber sie sind nicht jedes Mal neu, wenn Sie hinsehen. Die Ziehungen jeder Prognose werden aus ihrer Prognose-ID gesät, sodass die Eingabe von 100, morgen oder an einem anderen Computer, dasselbe Bild malt. Genau das lässt Sie zu einer bestimmten Zukunft zurückkehren, jemand anderen darauf zeigen oder zusehen, was eine Bearbeitung des Plans mit ihr macht.

Es sind nicht nur die Anlagen, die gezogen werden. Zahlungsströme tragen dasselbe Zahlenpaar, und sie werden auf dieselbe Weise gezogen. In Jordans Plan wächst das Gehalt mit N(3.5%, 1.5%), sodass manche Jahre eine größere Erhöhung bringen als andere. Die Lebenshaltungskosten wachsen mit N(2.8%, 1.5%), weil das Leben nicht jedes Jahr um denselben Betrag teurer wird. Social Security wächst mit N(2.5%, 0%), ohne eigene Volatilität, weil das System ihre jährliche Anpassung an die Lebenshaltungskosten als stetige Rate behandelt.

[[img:mc-card-living-expenses-jordan]]

*Die Karte für Jordans Lebenshaltungskosten in [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). Das Ausgabenwachstum liest sich N(2.8%, 1.5%), dasselbe Paar, das jede Anlage trägt. Das μg daneben ist die Aufzinsungsrate, die der Nordstern-Pfad verwendet, und die rundet sich bei einer so kleinen Volatilität auf dieselben 2,8 %.*

**Risiko vs. Rendite** im Bereich **Risiko** setzt jeden Posten des Plans auf ein Diagramm, mit seiner Volatilität quer und seiner Durchschnittsrate nach oben. Wenn der Zahlungsstrom-Chip leuchtet, erscheinen Gehalt, Social Security und Lebenshaltungskosten neben den Fonds. Der Aktienfonds sitzt hoch und weit rechts. Der Treasury-Fonds sitzt in der Mitte, und der Geldmarktfonds und die drei Zahlungsströme drängen sich in der unteren linken Ecke, stetig und langsam. Der Stern ist das Portfolio als Ganzes.

[[jump:volatility|output__risk__line.risk.risk]]

[[img:mc-risk-scatter-jordan]]

*Risiko vs. Rendite für [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan), mit Anlagen und Zahlungsströmen. Jeder Punkt ist ein Posten, für den die Prognose jedes Jahr eine Rendite zieht.*

Zwei weitere Tatsachen über die Ziehungen gelten für alles, was folgt.

Die erste ist, dass eine Ziehung nicht mehr verlieren kann als alles. Eine Jahresrendite ist bei −100 % nach unten begrenzt, sodass eine Anlage auf null gehen kann, aber nie darunter. Eine Obergrenze gibt es nicht.

Die zweite ist, dass die Jahre voneinander unabhängig sind. Ein schlechtes Jahr macht das nächste weder schlechter noch besser, und eine Folge guter Jahre hebt die Chance einer Korrektur nicht. Statistiker nennen solche Ziehungen [[term:iid]], *unabhängig und identisch verteilt*: Die Rendite jedes Jahres kommt aus derselben Glockenkurve, ohne Erinnerung an die Jahre davor. Das ist eine Modellwahl mit Folgen, und der letzte Abschnitt kommt darauf zurück.

Die Prognose lässt Sie auch prüfen, dass die Ziehungen tun, was sie behaupten. Über Jordans tausend Zukünfte liegt der gemessene Durchschnitt des Aktienfonds bei 7,64 % gegen die gegebenen 7,56 %, und seine gemessene Volatilität bei 16,49 % gegen 16,42 %. Das Gehalt kommt bei 3,49 % gegen 3,5 % an. Jede Zahl landet innerhalb des Stichprobenfehlers ihrer Vorgabe.

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — wie eine Rendite gezogen wird</summary>
<div class="lesson-math-body">

Jedes Jahr bildet die Engine für jeden Posten \(i\)

\[ r_i = \max\bigl(-1,\; \mu_i + \sigma_i\, z_i\bigr) \]

wobei \(z_i\) eine Ziehung aus der Standardnormalverteilung ist. Die Standardnormalen kommen aus der Box–Muller-Transformation (Box und Muller, 1958), die zwei gleichverteilte Zufallszahlen \(u_1, u_2\) in eine normale verwandelt, \(z = \sqrt{-2 \ln u_1}\, \cos(2\pi u_2)\). Die \(z_i\) werden durch den Schritt im nächsten Abschnitt dazu gebracht, sich gemeinsam zu bewegen, und das Geld des Postens wird mit \(1 + r_i\) multipliziert.

Jede Zukunft ist reproduzierbar. Jede wird aus ihrer Prognose-ID und dem Namen des Stroms gesät, aus dem sie zieht, sodass derselbe Plan immer dieselben tausend Zukünfte erzeugt und eine Bearbeitung eines Postens die Ziehungen jedes anderen Postens dort lässt, wo sie waren. Lassen Sie einen Plan zweimal laufen, und Prognose-ID 100 ist beide Male dieselbe Zukunft.

</div>
</details>

## Gemeinsam bewegen {#moving-together}

Aktien, Anleihen und Ausgaben bewegen sich innerhalb eines Jahres nicht unabhängig. Wenn Aktien hart fallen, haben hochwertige Anleihen dazu geneigt, zu halten oder zu steigen, und in einem inflationsreichen Jahr bewegen sich Ausgaben und manche Vermögenswerte gemeinsam. Eine Prognose, die jeden Posten getrennt zöge, würde das verfehlen, und sie würde unterschätzen, wie stark ein [[term:diversification|diversifiziertes]] Portfolio den Weg glättet.

Die Prognose zieht die Renditen jedes Jahres also *gemeinsam*, mit der [[term:correlation]] zwischen jedem Paar eingebaut. In den Zahlen des Systems haben Aktien großer US-Unternehmen und Treasuries mittlerer Laufzeit eine Korrelation von −0,31, was bedeutet, dass der Treasury-Fonds in einem Jahr, in dem Aktien schlechter abschneiden als gewöhnlich, tendenziell ein wenig besser abschneidet. Die Lebenshaltungskosten haben eine Korrelation von +0,25 mit Aktien, eine bescheidene Neigung einer heißen Wirtschaft, sowohl Renditen als auch Preise zu heben. Die gemessenen Korrelationen über Jordans tausend Zukünfte kommen wie vorgegeben zurück: −0,31 für Aktien gegen Treasuries und 0,26 für Aktien gegen Lebenshaltungskosten.

Der Schritt, der die Ziehungen gemeinsam bewegen lässt, ist eine **Cholesky-Zerlegung**, benannt nach André-Louis Cholesky, einem Vermessungsoffizier der französischen Armee, der sie vor etwa einem Jahrhundert für die Kartenherstellung ausarbeitete. Sie nimmt die Tabelle der Korrelationen und zerlegt sie in eine Form, die unabhängige Zufallszahlen in korrelierte verwandelt. Der Schritt der [[term:cholesky]] läuft einmal, vor der ersten Zukunft, und dann nutzt ihn jedes Jahr jeder Zukunft.

Der Schritt hat eine empfindliche Stelle. Eine Tabelle von Korrelationen muss in sich stimmig sein. Wenn A sich eng mit B bewegt und B sich eng mit C, dann kann sich A nicht entgegengesetzt zu C bewegen. Eine Tabelle, die aus verschiedenen Quellen zusammengesetzt oder von Hand ein Paar nach dem anderen bearbeitet wurde, kann diese Regel brechen, ohne dass es jemand merkt, und dann hat der Cholesky-Schritt keine Antwort. Wenn das geschieht, hält Tutilis nicht an und lässt die Korrelationen nicht stillschweigend fallen. Es findet die nächste Tabelle, die *stimmig ist*, und verwendet diese, und der Bereich Annahmen warnt vor den Paaren, die im Konflikt standen, bevor irgendeine Simulation läuft.

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — Cholesky und die Reparatur, wenn sie scheitert</summary>
<div class="lesson-math-body">

Sei \(C\) die Korrelationsmatrix der Faktoren des Plans. Wenn \(C\) positiv definit ist, faktorisiert sie eindeutig als \(C = L L^{\mathsf T}\) mit \(L\) unterer Dreiecksmatrix. Ziehen Sie einen Vektor \(z\) unabhängiger Standardnormaler und setzen Sie \(y = L z\). Dann gilt

\[ \operatorname{Cov}(y) = L\, \mathbb{E}[z z^{\mathsf T}]\, L^{\mathsf T} = L I L^{\mathsf T} = C, \]

sodass die Komponenten von \(y\) genau die Korrelationen in \(C\) haben. Diese \(y_i\) sind die \(z_i\) des vorherigen Blocks.

Eine paarweise gebaute Korrelationsmatrix kann daran scheitern, positiv semidefinit zu sein: Eine Kombination der Anlagen hätte negative Varianz, was unmöglich ist. Dann existiert kein \(L\). Die Fehlerkorrektur der Engine läuft in drei Stufen (`Cholesky.decompose`, Strategie `AUTO`):

1. **Die schlichte Faktorisierung versuchen.** Die meisten Pläne hören hier auf.
2. **Auf die nächste Korrelationsmatrix reparieren.** Bei einem Fehlschlag berechnet sie die Korrelationsmatrix, die \(C\) in der Frobenius-Norm am nächsten liegt, nach Highams Methode der alternierenden Projektionen (Higham, 2002). Sie wechselt zwischen der Projektion auf Matrizen mit nichtnegativen Eigenwerten (sie werden bei \(10^{-8}\) beschnitten) und der Projektion auf Matrizen mit Einsdiagonale, mit Dykstras Korrektur, damit der Wechsel zum wirklich nächsten Punkt konvergiert. Sie läuft bis zu einer Toleranz von \(10^{-10}\) oder 200 Iterationen.
3. **Als letztes Mittel Jitter hinzufügen.** Wenn Rundung die Faktorisierung immer noch verhindert, addiert sie einen winzigen Betrag auf die Diagonale, beginnend bei \(10^{-10}\) und jeweils verzehnfacht, bis zu achtmal.

Die reparierte Matrix und ihr Abstand zum Original bleiben beim Lauf erhalten, und dieselbe Reparatur läuft vor jeder Simulation, um die konfliktären Paare in der Warnung des Bereichs zu nennen.

</div>
</details>

## Vorgaben, die Sie in Ruhe lassen können {#defaults-you-can-leave-alone}

Jeder Posten in einem Plan braucht sein μ und sein σ, und jedes Paar von Posten braucht eine Korrelation. Ein Plan mit einem Dutzend Posten braucht Dutzende von Zahlen, bevor er irgendetwas sagen kann. Tutilis gibt sich Mühe, damit Sie nie eine davon tippen müssen.

Das System liefert sie alle aus veröffentlichten Quellen, für jede Art von Posten: jede Anlageklasse, jede Art von Einkommen und Ausgabe und die Korrelationen zwischen ihnen. Deshalb funktioniert Jordans Plan in dem Augenblick, in dem er aufgeht, und deshalb nennt der Plan [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) in dieser Lektion keine eigene Rate. Für fast jeden Haushalt ist die richtige Zeit, die man auf diese Zahlen verwendet, keine.

Für die planende Person, die tatsächlich eine durchdachte Sicht hat, kann ein **Power-Nutzer** jede davon überschreiben, sowohl den Durchschnitt als auch die Volatilität. Die Lektion *Wachstumsraten: die des Systems und Ihre* geht das an einem Haushalt durch und zeigt, was eine einzelne geänderte Rate mit dem Ergebnis macht.

So oder so bleiben die wenigen Raten, die Tatsachen über Ihren eigenen Haushalt sind, von Ihnen zu nennen, etwa wie schnell Ihr Gehalt gestiegen ist.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur in der Desktop-App</summary>
<div class="lesson-desktop-only-body">

Eine Sicht auf den Markt, die jeder Plan teilen soll, gehört in einen **Annahmesatz** und nicht in einen einzelnen Plan. Auf der Startseite der Desktop-App, neben **Dossiers**, hält die Seite **Annahmesätze** Ihre Sätze bei der Bibliothek. **Neuer Satz** startet einen aus einem Basiskatalog, und Sie ändern nur die Kategorien, denen Sie widersprechen, etwa eine niedrigere erwartete Rendite für US-Aktien. **Für meine Pläne verwenden** macht ihn zur Vorgabe der Bibliothek, sodass jeder Plan in der Bibliothek darauf läuft, und eine spätere Bearbeitung des Satzes alle zugleich erreicht. **Nicht mehr verwenden** bringt jeden Plan zu den Zahlen des Systems zurück.

</div>
</details>

## Die tausend Zukünfte lesen {#reading-the-thousand-futures}

Die **Simulationszusammenfassung** verdichtet die tausend Zukünfte auf ein paar Zahlen darüber, wo sie enden. **Schlüsselprognosen** benennt die Punkte entlang der Linie aller tausend End-Nettovermögen, sortiert vom schlechtesten zum besten, und gibt die Prognose-ID der Zukunft an jedem Punkt.

[[jump:key-forecasts]]

[[img:mc-key-forecasts-jordan]]

*Schlüsselprognosen für [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan): die schlechteste Zukunft, die Quartile, der Nordstern-Pfad (✦), das Mittel und die beste Zukunft.*

Ein [[term:percentile]] ist eine Position entlang dieser sortierten Linie. Das 10. Perzentil, P10, ist das Ende, unter das nur eine Zukunft von zehn fällt. Das 50. Perzentil ist der [[term:median]], die mittlere Zukunft. Das 90. Perzentil ist das Ende, das nur eine von zehn übertrifft. Für Jordan liegt das mittlere Ende bei etwa **3,21 Millionen Dollar**, P10 bei etwa **580.000 $** und P90 bei etwa **13,0 Millionen Dollar**.

Der Nordstern-Pfad, mit ✦ markiert, endet bei etwa **3,10 Millionen Dollar**, als 492. der tausend. Er sitzt knapp unter dem Median, wie die Mathematik im früheren Abschnitt vorhersagt. Das **Mittel** liegt bei etwa **5,18 Millionen Dollar**, weit über dem Median, und der nächste Abschnitt erklärt warum.

Das **Ergebnis** meldet Abwärts (P10) und Aufwärts (P90) neben dem Median, und die Prognose verwendet dieses Paar überall aus einem Grund. Risiko lebt im Rand. Ein schlechtes Ergebnis von eins zu zehn ist das, worauf ein sorgfältiger Plan gefasst sein sollte, und ein engeres Paar wie P30 und P70 würde die bequeme Mitte beschreiben und nichts über die Zukünfte sagen, die wehtun. P10 kann bei einem Plan, der hart ausgibt, unter null herauskommen, weil der Plan in diesen Zukünften weiter ausgibt, nachdem das Geld weg ist, und leiht, um die Lücke zu decken. Diese negative Zahl ist echte Information. Sie ist die Größe des Lochs in einer schlechten Zukunft von eins zu zehn.

Die [[term:success-rate]] zählt die Zukünfte, die mit einem Nettovermögen über null enden. Jordans Plan gelingt in **96,4 %** von ihnen. Es ist eine Zählung simulierter Zukünfte, und der letzte Abschnitt sagt, was sie für ein reales Leben bedeutet und was nicht.

Jeder Punkt in den Schlüsselprognosen ist eine ganze Zukunft, die Sie öffnen können. Klicken Sie eine Zeile, und jede Ansicht fokussiert diese Prognose: Die Bilanz- und Zahlungsstromdiagramme zeichnen sich für diese Zukunft neu, schlechte Jahre eingeschlossen. Der Prognoseeintrag in der Leiste oben im Prognosemodul nimmt jede Prognose-ID auf dieselbe Weise, und ihn auf 0 zurückzustellen kehrt zum Nordstern-Pfad zurück.

[[img:mc-nw-distribution-jordan]]

*Die Nettovermögensverteilung für [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan): alle tausend End-Nettovermögen auf einmal. Das schattierte Band links liegt unter null, und die Achse wird jenseits von etwa 31 Millionen Dollar logarithmisch, damit der längste Rand noch hineinpasst.*

## Warum das Ergebnis nach rechts neigt {#why-the-outcome-leans-right}

Jordans tausend Enden sind schief. Die Hälfte endet zwischen etwa 1,42 Millionen Dollar und 6,73 Millionen Dollar, ein paar ziehen sich bis in die mehreren zehn Millionen, und die linke Seite hört viel früher auf. Das Mittel sitzt weit rechts vom Median, weil diese wenigen riesigen Ergebnisse es dorthin ziehen. Diese Form ist keine Marotte dieses Plans. Es ist das, was Aufzinsen mit Zufall macht, und der Plan [Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) zeigt es, ohne dass etwas anderes im Weg steht.

Beginnen Sie mit einem Jahr. Die Rendite des Fonds für das Jahr wird aus einer Glockenkurve gezogen, also ist auch sein Wert nach einem Jahr eine Glockenkurve. Die tausend Ergebnisse streuen fast gleichmäßig zu beiden Seiten von etwa 107.000 $. Der Median ist 107.500 $, das Mittel ist 107.400 $, und die mittlere Hälfte läuft von 96.500 $ bis 118.100 $, etwa 11.000 $ auf jeder Seite. **Nach einem Jahr ist die Verteilung normal**, weil die Rendite selbst aus einer Normalverteilung gezogen wird und noch nichts aufgezinst hat.

Lassen Sie nun denselben Fonds vierzig Jahre laufen. Jedes Jahr multipliziert den Saldo mit einem zufälligen Faktor, und vierzig zufällige Faktoren, miteinander multipliziert, ergeben keine Glockenkurve. Eine Zukunft mit ein paar mehr guten Jahren als gewöhnlich endet nicht ein wenig höher. Sie endet um ein Vielfaches höher, weil jedes gute Jahr auf die davor aufzinst. Eine schlechte Serie kann nicht das Spiegelbild tun, weil der Saldo gegen null fallen kann, aber nie darunter. Der Median nach vierzig Jahren liegt bei etwa 1,18 Millionen Dollar und das Mittel bei etwa 1,94 Millionen Dollar. Die mittlere Hälfte läuft von etwa 600.000 $ bis 2,34 Millionen Dollar, das sind 580.000 $ unter dem Median und 1,17 Millionen Dollar darüber, und die beste Zukunft erreicht etwa 29,5 Millionen Dollar.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-one-year]]

*[Ein Aktienfonds](#canvas-dossier:monte_carlo_one_fund) nach einem Jahr: eine symmetrische Glocke um 107.000 $.*

</div>
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-forty-years]]

*Derselbe Fonds nach vierzig Jahren: ein hoher Haufen links und ein langer Rand nach rechts. Die Achse wird jenseits von etwa 7 Millionen Dollar logarithmisch, damit der Rand überhaupt hineinpasst.*

</div>
</div>

Diese rechtslastige Form hat einen Namen, [[term:lognormal]]. Das bedeutet, dass der *Logarithmus* des Ergebnisses einer Glockenkurve folgt, auch wenn das Ergebnis selbst es nicht tut. Faktoren zu multiplizieren addiert ihre Logarithmen, und viele unabhängige zufällige Stücke zu addieren erzeugt eine Glockenkurve, wie auch immer die Stücke aussehen. Das ist der zentrale Grenzwertsatz, eine der verlässlichsten Tatsachen der Wahrscheinlichkeit, und deshalb kommt Vermögen über einen langen Horizont in fast jedem Modell, das zufällige Renditen aufzinst, lognormal heraus.

Mittel, Median und Nordstern-Pfad erzählen auf einer lognormalen Verteilung drei verschiedene Geschichten. Das Mittel wird von einer Handvoll enormer Ergebnisse nach oben gezogen, die fast niemand sehen wird. Der Median ist die typische Zukunft, und der Nordstern-Pfad sitzt knapp darunter. Deshalb stellt die Prognose den Median und den Nordstern-Pfad nach vorn, und deshalb wird das Mittel gezeigt, aber nie als Überschrift verwendet.

Jordans Plan ist nicht rein lognormal, weil Jordan ausgibt. Entnahmen nehmen jedes Jahr einen festen Geldbetrag, was auch immer der Markt tat, also beißen sie am härtesten in den Zukünften, denen es schon schlecht geht. Das streckt die linke Seite der Verteilung, und in den schlechtesten Zukünften trägt es das Nettovermögen unter null, was ein Fonds, den man kauft und hält, nie kann. Die rechte Seite streckt sich weiter so, wie das Aufzinsen es macht.

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — der zentrale Grenzwertsatz bei der Arbeit</summary>
<div class="lesson-math-body">

Nehmen Sie die Logarithmen des Vermögensprodukts:

\[ \ln W_n = \ln W_0 + \sum_{t=1}^{n} \ln(1 + r_t). \]

Die Terme \(\ln(1+r_t)\) sind i.i.d. mit Mittel \(g \approx \mu - \sigma^2/2\) und Standardabweichung \(s \approx \sigma/(1+\mu)\). Nach dem zentralen Grenzwertsatz ist ihre Summe für großes \(n\) näherungsweise normal, mit Mittel \(n g\) und Standardabweichung \(s\sqrt{n}\). Also ist \(W_n\) näherungsweise lognormal:

\[ \text{median}(W_n) \approx W_0\, e^{n g}, \qquad \mathbb{E}[W_n] = W_0 (1+\mu)^n. \]

Für den Aktienfonds ergeben \(g = 6.12\%\) und \(n = 40\) einen Median von etwa 1,16 Millionen Dollar, gegen 1,18 Millionen Dollar in der Simulation, und \((1.0756)^{40}\) ergibt ein Mittel von etwa 1,85 Millionen Dollar, gegen 1,94 Millionen Dollar. Die Streuung von \(\ln W_n\) wächst wie \(\sqrt{n}\), also wird die Neigung nach rechts stärker, je länger der Horizont ist.

Bei \(n = 1\) gibt es nichts zu addieren. \(W_1 = W_0 (1 + r_1)\) ist eine lineare Funktion einer einzigen normalen Ziehung, also ist sie selbst normal, abgesehen von der Untergrenze bei −100 %, die eine Einjahresziehung fast nie erreicht. Die lognormale Form ist ganz und gar ein Produkt des Aufzinsens über viele Jahre.

</div>
</details>

## Wie viele Zukünfte laufen sollen {#how-many-futures-to-run}

Die Prognose lässt standardmäßig **1.000** Zukünfte laufen, eine übliche Wahl in Planungssoftware. Tausend reichen, um Median und Quartile an einen stabilen Ort zu setzen und eine Erfolgsquote auf ein bis zwei Punkte genau zu messen.

Sie können mehr verlangen. **Simulationen** sitzt in der Leiste oben im Prognosemodul, neben dem Prognoseeintrag und **Jahr**, und es nimmt jede Anzahl von 1.000 bis 10.000 in Schritten von tausend. Die neue Anzahl gilt, wenn Sie **Neu simulieren** drücken.

[[img:mc-simulations-entry-7000]]

*Die Leiste oben im Prognosemodul mit Simulationen auf 7.000. Der Eintrag ist fast bis zum Rot schattiert, neben der Schaltfläche Neu simulieren, die ihn anwendet.*

Während die Anzahl steigt, schattiert sich der Eintrag von seiner gewöhnlichen Farbe hin zum Rot. Die Schattierung ist eine bewusste Vorsicht, aus zwei Gründen.

Der erste Grund ist die Zeit. Zehntausend Zukünfte brauchen etwa zehnmal so lange wie tausend, jedes Mal, wenn der Plan neu simuliert wird.

Der zweite Grund wiegt mehr. Ein größerer Lauf ist keine bessere Antwort. Die Mitte der Verteilung bewegt sich kaum, während die Extreme weiter wachsen. Lassen Sie Jordans Plan mit zehntausend Zukünften laufen, und der Median wandert von 3,21 Millionen Dollar auf 3,20 Millionen Dollar, und die Erfolgsquote von 96,4 % auf 96,2 %. Die beste Zukunft dagegen geht von etwa 40 Millionen Dollar auf etwa 93 Millionen Dollar. Zehnmal so viele Zukünfte bedeuten zehnmal so viele Chancen, eine erstaunliche Folge von Jahren zu ziehen, und die extremste von ihnen landet weiter draußen.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan]]

*[Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) mit 1.000 Zukünften.*

</div>
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan-10000]]

*Derselbe Plan mit 10.000 Zukünften. Die Quartile und der Median bewegen sich kaum, und das Maximum verdoppelt sich mehr als.*

</div>
</div>

Die Mathematik hinter diesen extremen Zukünften ist solide. Eine Zukunft, in der Aktien jahrzehntelang deutlich über dem Durchschnitt rentieren, ist unter den Annahmen des Plans möglich, und unter zehntausend Zukünften tauchen ein paar davon auf. Solche Zahlen sind allerdings schwer zu durchdenken. Ein Plan, der einen besten Fall von 90 Millionen Dollar für einen Haushalt mit 1,34 Millionen Dollar meldet, liegt nicht falsch, aber er lenkt die Aufmerksamkeit auf eine Zukunft, um die herum der Plan nichts zu suchen hat. Die Zahlen, die die Aufmerksamkeit einer planenden Person wert sind, sind der Median, die Abwärtsseite und die Erfolgsquote, und tausend Zukünfte nageln diese bereits fest.

<details class="lesson-math">
<summary class="lesson-math-label">Für Mathematikfreunde — was mehr Zukünfte bringen</summary>
<div class="lesson-math-body">

Eine aus \(N\) Zukünften gemessene Erfolgsquote hat einen Standardfehler von \(\sqrt{p(1-p)/N}\). Für \(p = 0.964\) und \(N = 1{,}000\) sind das etwa 0,59 Punkte, sodass die wahre Quote unter den Annahmen des Modells in 95 % der Fälle innerhalb von etwa ±1,2 Punkten der gemeldeten liegt. Zehntausend Zukünfte schrumpfen das auf etwa ±0,4 Punkte. Die Genauigkeit verbessert sich nur mit \(\sqrt{N}\), sodass jede weitere Stelle Genauigkeit das Hundertfache der Läufe kostet.

Die Extreme verhalten sich anders. Bei einer Normalverteilung sitzt die größte von \(N\) Ziehungen etwa \(\sqrt{2 \ln N}\) Standardabweichungen über dem Mittel, also kriecht sie weiter nach außen, während \(N\) wächst, ohne Grenze. Auf einer lognormalen Verteilung geschieht dieses Kriechen im Logarithmus, sodass jeder Schritt nach außen das Maximum mit einem großen Faktor multipliziert. Beim Ein-Fonds-Plan über vierzig Jahre hat der Logarithmus des Vermögens eine Standardabweichung von etwa 0,97. Vom Größten von tausend zum Größten von zehntausend zu gehen fügt etwa 0,57 Standardabweichungen im Logarithmus hinzu, was das Maximum im Durchschnitt um etwa 1,7 multipliziert. Ein einzelner Lauf schwankt weit darum, weil ein Maximum eine einzelne Ziehung ist. Der Median bewegt sich überhaupt nicht, weil er nie im Rand lag.

</div>
</details>

## Was Monte Carlo nicht sehen kann {#what-monte-carlo-cannot-see}

Eine Monte-Carlo-Prognose ist eine sorgfältige Art, über den Zufall nachzudenken. Sie ist trotzdem ein Modell, und ihre Antworten tragen die Grenzen dessen, was hineingelegt wurde.

**Sie ist nur so gut wie ihre Annahmen.** Jede Zukunft wird aus den μ, σ und Korrelationen gezogen, auf denen der Plan läuft. Wenn die erwartete Aktienrendite über die nächsten vierzig Jahre niedriger ist als die langfristige Zahl, ist jede der tausend Zukünfte zu optimistisch, und mehr davon laufen zu lassen hilft nicht. Die Zahlen des Systems kommen aus veröffentlichten Quellen, aber sie bleiben Schätzungen einer Zukunft, die niemand gesehen hat.

**Die Jahre haben kein Gedächtnis.** Weil die Ziehungen unabhängig sind, hat die Prognose kein Momentum, keine Rückkehr zum Mittelwert und keine Regime. An realen Märkten folgten auf lange Strecken hoher Bewertungen tendenziell schwächere Renditen, und ruhige und turbulente Zeiten kommen tendenziell in Bündeln. In der Prognose geschieht ein Einbruch in den ersten Ruhestandsjahren nur, wenn der Zufall einen dorthin legt. Das Änderbare **Sequenzrisiko** in **Transformationen** gibt es genau aus diesem Grund. Es legt einen historischen Einbruch in die Jahre, die Sie wählen, sodass Sie den Plan absichtlich belasten können, statt auf die Würfel zu warten. Die Lektion *Einen Einbruch zeitlich legen: Barreserve oder Neugewichtung?* verwendet es am selben Haushalt.

[[jump:sequence-of-returns|modifiable]]

**Die Ränder sind dünner als die der Geschichte.** Eine Glockenkurve macht sehr große Verluste in einem Jahr seltener, als die Märkte sie tatsächlich hervorgebracht haben. Ein Modell mit normalen Ziehungen behandelt 1931 oder 2008 als nahezu unmögliche Ereignisse, während die Geschichte sagt, dass sie lediglich ungewöhnlich sind.

**Die Regeln stehen für den ganzen Horizont fest.** Jeder Posten behält vierzig Jahre lang dieselben μ, σ und Korrelationen. In realen Krisen steigen die Korrelationen zwischen riskanten Anlagen tendenziell gerade dann, wenn Diversifikation am nötigsten ist.

**Der Plan folgt seinem Skript.** In jeder Zukunft gibt der Haushalt aus, was der Plan sagt, und entnimmt so, wie der Plan es sagt. Wirkliche Menschen passen sich an, sie kürzen nach einem schlechten Jahr und geben nach einer guten Serie mehr aus, und diese Flexibilität ist einer der stärksten Schutze, die eine Person im Ruhestand hat.

**Eine Erfolgsquote ist kein Versprechen.** Jordan wird eine Zukunft leben, nicht tausend. Eine Erfolgsquote von 96,4 % sagt, dass 964 der tausend simulierten Zukünfte unter diesen Annahmen über null endeten. Sie sagt nicht, dass die reale Zukunft eine Chance von 96,4 % hat, und sie sagt nichts darüber, wie schlecht die anderen 36 Zukünfte waren. Lesen Sie die Erfolgsquote neben der Abwärtsseite, die zeigt, wie tief die Fehlschläge gehen.

Nichts davon macht die Prognose weniger nützlich. Es macht sie zu einem Werkzeug mit bekannter Form. Nutzen Sie den Nordstern-Pfad, um den Plan zu verstehen, die tausend Zukünfte, um seine Streuung zu sehen, und Transformationen, um auf die Risiken zu drücken, die die Würfel als selten behandeln.

## Was Sie mitnehmen {#what-to-take-away}

Eine Prognose lässt sich auf zwei Arten lesen, und jede beantwortet eine Frage, die die andere nicht kann. Der Nordstern-Pfad lässt jeden Posten mit seiner Aufzinsungsrate wachsen, μ − σ²/2, ohne Glück darin. Dort fragt man, was eine Änderung tut und wie groß die Wirkung ist, und seine Enden sitzen nahe der Mitte dessen, was der Plan erwarten kann.

Die tausend Zukünfte legen das Glück zurück. Jedes Jahr zieht jeder Posten seine Rendite aus seiner eigenen Glockenkurve, die Ziehungen bewegen sich durch den Cholesky-Schritt gemeinsam, und die Jahre sind voneinander unabhängig. Nebeneinander gelegt messen die Zukünfte das Risiko: die Abwärtsseite, die Streuung und die Erfolgsquote.

Aufzinsen lässt Vermögen über einen langen Horizont nach rechts neigen. Nach einem Jahr bilden die Ergebnisse eine Glocke, und nach vierzig sind sie lognormal, mit einem Median deutlich unter dem Mittel und einem langen Rand seltener Vermögen. Deshalb stellt die Prognose den Median und den Nordstern-Pfad nach vorn.

Tausend Zukünfte reichen. Mehr davon schärfen die Erfolgsquote ein wenig und schieben die Extreme weiter hinaus, ohne zu ändern, was eine planende Person schließen sollte. Die Zahlen unter allem davon kommen vom System, und Sie können sie in Ruhe lassen, sofern Sie keinen echten Grund haben, zu widersprechen.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Zitierte Werke — die Methode und die Mathematik</summary>
<div class="lesson-bibliography-body">

- Nicholas Metropolis und S. Ulam, [*The Monte Carlo Method*](https://doi.org/10.1080/01621459.1949.10483310), Journal of the American Statistical Association 44 (247), 1949.
- Phelim P. Boyle, [*Options: A Monte Carlo Approach*](https://doi.org/10.1016/0304-405X%2877%2990005-8), Journal of Financial Economics 4 (3), 1977.
- G. E. P. Box und Mervin E. Muller, [*A Note on the Generation of Random Normal Deviates*](https://doi.org/10.1214/aoms/1177706645), Annals of Mathematical Statistics 29 (2), 1958.
- Nicholas J. Higham, [*Computing the Nearest Correlation Matrix — A Problem from Finance*](https://doi.org/10.1093/imanum/22.3.329), IMA Journal of Numerical Analysis 22 (3), 2002.

</div>
</details>
