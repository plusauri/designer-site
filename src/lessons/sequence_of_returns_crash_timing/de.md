<!--
tutilis-return: lessons/sequence_of_returns_crash_timing/prose/de.md
tutilis-locale: de translated
-->
# Wann der Crash kommt

Jordan ist 60 und plant, 2031 in den Ruhestand zu gehen, mit 65. Gespart sind $1.34 million: $900,000 in einem [[term:401k|401(k)]], $400,000 in einem [[term:brokerage]] und $40,000 auf einem Geldmarktkonto. Das angelegte Geld ist in beiden Konten etwa 70/30 auf einen S&P-500-Indexfonds und einen mittelfristigen Treasury-Fonds aufgeteilt. Die Ausgaben betragen $72,000 im Jahr in heutigen Dollar, und die Social Security beginnt mit 67.

Jordan hat gelesen, dass der Crash zu fürchten ist, der genau dann kommt, wenn die Gehaltszahlungen aufhören. Vor dem Ruhestand ist ein Marktrückgang etwas, das man aussitzen kann. Danach muss der Aufwand jedes Jahres aus dem verkauft werden, was das Portfolio in diesem Jahr wert ist, und Anteile, die am Tief verkauft werden, nehmen an der Erholung nie teil. Das ist das [[term:sequence-of-returns|Risiko der Renditereihenfolge]]: Dieselben Renditen in einer anderen Reihenfolge lassen einem Ruheständler einen anderen Geldbetrag.

Zwei Abwehrmaßnahmen kommen in jedem Gespräch darüber vor. Die erste ist, eine große Barreserve zu halten, ein paar Jahre Ausgaben im Geldmarkt, und während eines Crashs davon zu leben, statt Aktien zu verkaufen. Die zweite ist, etwas weniger Aktien zu halten und eine Regel dazu anzunehmen, was jedes Jahr verkauft wird. Diese Lektion prüft beide am selben Haushalt, mit einem echten Crash, der in jedes Jahr von 2027 bis 2046 gelegt wird.

Sie öffnet drei Pläne, die mit denselben $1.34 million beginnen:

- [70/30](#canvas-dossier:sor_seventy_thirty) ist Jordans Plan, wie er steht. Entnahmen kommen aus jeder Position im Verhältnis zu ihrer Größe.
- [Barreserve](#canvas-dossier:sor_cash_reserve) verschiebt $200,000 aus dem Depot in den Geldmarkt, sodass die Reserve $240,000 hält, etwa drei Jahre Ausgaben im Ruhestand. Alles andere bleibt unverändert.
- [60/40 rebalanciert](#canvas-dossier:sor_sixty_forty_rebalanced) teilt das angelegte Geld 60/40 und setzt die Entnahmestrategie **Glidepath-Rebalancing** gegen ein konstantes Ziel.

Die beiden Abwehrmaßnahmen halten fast denselben Aktienbetrag. Der Reserveplan hält $770,000 im S&P-500-Fonds und der 60/40-Plan hält $780,000, sodass der Vergleich zwischen dem Parken des sicheren Geldes in Bar ohne Regel und dem Halten in Anleihen mit einer Regel steht.

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt, der sie beantwortet.

1. **Wie lege ich einen historischen Crash in meinen Plan?** Siehe [Einen Crash in den Plan legen](#put-a-crash-in-the-plan).
2. **Warum lässt mich ein großer Gewinn nach einem großen Verlust zurück?** Siehe [Die Renditen des Crashs prüfen](#check-the-crashs-returns).
3. **Welches Jahr ist das schlechteste Jahr, in dem ein Crash beginnen kann?** Siehe [Den Crash verschieben](#slide-the-crash).
4. **Schützen mich ein paar Jahre Ausgaben in Bar während eines Crashs?** Siehe [Eine Barreserve](#a-cash-reserve).
5. **Wie hält eine Rebalancing-Regel einen Plan davon ab, Aktien am Tief zu verkaufen?** Siehe [Weniger Aktien, und eine Regel](#less-stock-and-a-rule).
6. **Tut die Arbeit der geringere Aktienanteil oder die Regel?** Siehe [Welcher Teil die Arbeit tut](#which-part-does-the-work).
7. **Wie schneiden die drei Pläne über tausend Marktpfade ab?** Siehe [Tausend Pfade](#a-thousand-paths).
8. **Was sagt die veröffentlichte Forschung zu Eimerstrategien und Sequenzrisiko?** Siehe [Was die Forschung sagt](#what-the-research-says).

</div>
</aside>

## Einen Crash in den Plan legen {#put-a-crash-in-the-plan}

Der Plan selbst enthält nie einen Crash. Seine Renditen kommen aus den Wachstumsannahmen, die ein durchschnittliches Jahr beschreiben und wie weit ein Jahr davon abweichen kann. Um zu fragen, was ein bestimmter Crash täte, legt man einen über den Plan in [[nav:transforms]].

Öffnen Sie Transformationen und klappen Sie **Änderungen** auf. Die Karte Änderbare öffnet sich auf dem Reiter **Global**, der die Was-wäre-wenn-Annahmen auflistet, die für den ganzen Plan gelten und nicht für einen einzelnen Posten. **Sequenzrisiko** ist die letzte Zeile. Wählen Sie sie aus:

[[img:sor-crash-modifiables|control]]

Der Änderungseditor neben der Karte enthält den Crash selbst. Schalten Sie ihn ein, wählen Sie eine Episode nach dem Jahr, in dem ihr Markt den Höchststand erreichte, und setzen Sie das Jahr, in dem der Crash beginnt. Der Schieberegler öffnet sich auf dem ersten Ruhestandsjahr, und seine Anker markieren den Planbeginn, jeden Ruhestand und das Ende der Prognose.

[[img:sor-crash-editor|control]]

[[jump:sequence-of-returns|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.sor-risk]]

Jede Episode spielt gemessene Geschichte nach. Der S&P-500-Fonds nimmt die tatsächliche Gesamtrendite des Index Jahr für Jahr, vom Fall durch die Erholung, und der Treasury-Fonds nimmt die der 10-jährigen Treasury. Jede andere Position folgt über ihre [[term:correlation]] mit diesen beiden. Die globale Finanzkrise spielt sechs Jahre nach: einen kleinen Verlust, dann einen Fall von etwa 41%, dann eine Erholung von etwa 56% und drei weitere gute Jahre.

Nichts im Plan ändert sich. Transformationen zeigt den Plan, wie er verfasst wurde, auf der einen Seite und den Plan mit dem Crash auf der anderen. Im Bilanzdiagramm sind die Crash-Jahre entlang der Jahresachse rot schattiert, sodass Sie immer sehen, wo der Crash sitzt. Hier ist der Bilanzvergleich von Transformationen für den Plan 70/30, mit dem Crash dort, wo der Editor ihn zuerst hinlegt, beginnend 2031. Der Plan, wie er verfasst wurde, steht links unter *Original*, der Plan mit dem Crash rechts unter *Geändert*, und beide Seiten teilen eine Skala, so wie in der App:

[[img:sor-crash-balance-sheet-7030]]

Auf der Seite Geändert fällt das Nettovermögen 2032, in Jordans zweitem Ruhestandsjahr, um fast ein Drittel und steigt erst 2036 wieder auf sein Niveau von 2031. Die beiden Seiten treffen sich nie wieder. Bis 2057 endet der Plan mit dem Crash etwa $670,000 unter dem Plan ohne ihn.

## Die Renditen des Crashs prüfen {#check-the-crashs-returns}

Ein Crash lässt sich leichter fürchten als messen, und die Jahresrenditen, die er nachspielt, können das Auge täuschen. Tutilis zeigt sie Posten für Posten in der Prüfung **Realisierte Renditen**, die sich über diese Schaltfläche in der Symbolleiste des Bilanzdiagramms öffnet:

[[img:sor-crash-bs-toolbar]]

Die Schaltfläche sitzt auf dem Diagramm im Prognosemodul und auf beiden Seiten von Transformationen. Drücken Sie sie auf der Seite Geändert, um die Renditen mit dem Crash darin zu sehen.

[[jump:return|output__forecaster__forecaster.forecast-detail__bs-chart__bs-chart.return-check]]

Die Prüfung listet jede Position und jeden Zahlungsstrom, der wächst, mit dem, was er in jedem Jahr der Prognose erwirtschaftet hat. Wählen Sie eine Zeile, und ihre Renditen werden Jahr für Jahr unter der Liste gezeichnet, mit den Crash-Jahren auf der Achse schattiert. Darunter startet der Streifen **Wachstum von 1** eine Geldeinheit im ausgewählten Jahr und zinst sie durch die folgenden Renditen auf. Seine Schaltflächen legen fest, wie viele Jahre zu verfolgen sind, und **Crash** folgt genau den Jahren, die die Überlagerung nachspielt. Die Nähte zwischen den drei Teilen klappen einen mit einem Klick weg oder verschieben die Grenze, wenn man sie zieht, wenn Sie für die anderen mehr Platz wollen.

Hier ist der S&P-500-Fonds in Jordans Depot, mit der globalen Finanzkrise beginnend 2030:

[[img:sor-crash-returns-gfc]]

Das Renditediagramm lässt den Crash wie einen fairen Tausch aussehen. Der Fonds verliert 2031 etwa 41% und gewinnt 2032 etwa 56%, sodass der Gewinn größer aussieht als der Verlust. Der Streifen Wachstum von 1 sagt etwas anderes. Ein Dollar zu Beginn von 2030 ist nach dem Fall 56 Cent wert, und der Gewinn von 56% hebt ihn nur auf etwa 88 Cent. Ein Gewinn ist ein Prozentsatz dessen, was übrig ist, und nach einem Verlust von 41% ist viel weniger übrig, worauf er wirken kann. Es dauert bis 2033, dem vierten Jahr des Crashs, bis der Dollar wieder ganz ist.

Der Große Crash von 1929 macht denselben Punkt nachdrücklicher. Hier beginnt er 2031, in Jordans Ruhestandsjahr:

[[img:sor-crash-returns-1929]]

Die Jahresrenditen sehen nach den ersten drei Jahren fast heiter aus. Es gibt 2034 einen Gewinn von 140% und später zwei weitere Gewinne von mehr als 50%. Jahr für Jahr gemittelt bringen die sechzehn nachgespielten Jahre etwa 9% im Jahr, was besser ist als die gewöhnliche Erwartung des Fonds. Der Streifen Wachstum von 1 erzählt die wirkliche Geschichte. Die ersten drei Jahre drücken einen Dollar auf etwa 21 Cent, das Jahr mit 140% bringt ihn nur auf etwa 52 Cent zurück, und der Dollar überschreitet 1.0 erst wieder 2045, im fünfzehnten Jahr des Crashs. Sechzehn Jahre, die im Schnitt 9% im Jahr bringen, lassen den Dollar bei etwa 1.28, wo die gewöhnlichen Renditen des Fonds ihn auf etwa 2.6 hätten wachsen lassen.

Das ist die Falle beim Lesen eines Diagramms von Jahresrenditen. Große Ausschläge nach oben und unten scheinen sich aufzuheben, und die großen Erholungsjahre scheinen die Verluste mehr als auszugleichen. Das tun sie nicht, weil Verluste und Gewinne sich multiplizieren, statt sich zu addieren. Ein Ruheständler verkauft außerdem durch diese Jahre hindurch, sodass das nahe am Tief verkaufte Geld für die Erholung überhaupt nicht da ist. Deshalb misst der Rest dieser Lektion Crashs danach, was sie mit dem Nettovermögen tun, und deshalb lohnt der Streifen einen Blick, wann immer Sie einen testen.

<details class="lesson-math">
<summary class="lesson-math-label">Für die Mathematikfreunde — warum ein Gewinn von 56% einen Verlust von 41% nicht ungeschehen macht</summary>
<div class="lesson-math-body">

Wachstum multipliziert, sodass eine Folge von Jahresrenditen \(r_t\) aus einem Dollar macht

\[
G = \prod_t (1 + r_t)
\]

Im Nachspielen der globalen Finanzkrise steht der Dollar nach dem Fall bei etwa 0.56, und \(0.56 \times 1.56 \approx 0.88\).

Nach einem Verlust \(L\) löst der Gewinn \(g\), der wieder auf eins kommt, \((1-L)(1+g) = 1\):

\[
g = \frac{L}{1-L}
\]

Das sind 69% nach einem Verlust von 41%, 100% nach einem Verlust von 50% und 400% nach einem Verlust von 80%.

Der Durchschnitt, der Wachstum beschreibt, ist der geometrische, \(G^{1/n} - 1\). Die sechzehn Jahre von 1929 mitteln etwa 9% im Jahr, Jahr für Jahr aufaddiert, aber \(1.28^{1/16} - 1 \approx 1.6\%\) im Jahr verzinst. Die gewöhnlichen Renditen des Fonds verzinsen sich mit \(2.6^{1/16} - 1 \approx 6.2\%\). Die Lektion [Risiko und Rendite](/learn/risk_and_return) hat die Faustregel für diese Lücke: Das [[term:geometric-mean|geometrische Mittel]] liegt etwa eine halbe Varianz unter dem arithmetischen.

</div>
</details>

## Den Crash verschieben {#slide-the-crash}

Das Startjahr ist das Steuerelement, das diese Analyse lohnend macht. Öffnen Sie [[nav:bs-table]] auf dem letzten Jahr der Prognose, 2057, und lassen Sie es dort. Dann verschieben Sie den Crash-Start um jeweils ein Jahr und beobachten Sie die Nettovermögenszeile oben in der Tabelle.

[[jump:net-worth|output__forecaster__forecaster.forecast-detail__bs-table__line.bs.net-worth]]

Das sind die Nettovermögen am Ende der Prognose auf dem [[term:gmf|GMF]]-Pfad, der Prognose, die die erwartete Rendite jedes Jahres nimmt, mit der globalen Finanzkrise beginnend in jedem Jahr:

| Crash beginnt | 70/30 | Barreserve | 60/40 rebalanciert |
|---|---:|---:|---:|
| Kein Crash | $3.10M | $2.56M | $2.65M |
| 2027 | $2.63M | $2.17M | $2.60M |
| 2029 | $2.54M | $2.11M | $2.52M |
| **2030** | **$2.41M** | **$2.03M** | **$2.48M** |
| 2031 | $2.43M | $2.04M | $2.48M |
| 2033 | $2.52M | $2.11M | $2.50M |
| 2038 | $2.59M | $2.16M | $2.54M |
| 2045 | $2.65M | $2.21M | $2.51M |

In jedem Plan ist das schlechteste Jahr, den Crash zu beginnen, 2030, nicht 2031. Der Editor öffnet sich auf dem Ruhestandsjahr, aber der tiefe Verlust dieser Episode ist ihr *zweites* Jahr. Sie 2030 beginnen zu lassen, legt diesen Verlust auf 2031, das erste Jahr, in dem Jordan vom Portfolio lebt. Ein Crash, der 2027 trifft, kostet immer noch Geld, aber Jordan verdient durch den Fall und die Erholung ein Gehalt und verkauft am Tief nichts. Ein Crash 2045 trifft ein Portfolio, das schon Jahre zum Wachsen hatte und das die Social Security mitträgt.

Es lohnt sich, den Crash für jede Episode zu verschieben, die Sie testen, statt der Vorgabe zu vertrauen. Das schlechteste Startjahr ist das, das das schlechteste Jahr der Episode mit dem ersten Jahr der Entnahmen zur Deckung bringt, und das hängt von der Form der Episode ab.

## Eine Barreserve {#a-cash-reserve}

Der Plan [Barreserve](#canvas-dossier:sor_cash_reserve) ist die intuitivste Abwehr, und in dieser Analyse ist er die schwächste der drei.

Der erste Grund zeigt sich ganz ohne Crash. Geldmarkt wirft weniger ab als Aktien oder Anleihen, und $200,000 davon verzinsen sich 26 Jahre lang langsamer. Ohne Crash endet der Plan bei $2.56 million gegen $3.10 million für 70/30. Die Reserve ist eine Versicherung, und diese Lücke ist ihre Prämie, jedes Jahr gezahlt, ob ein Crash kommt oder nicht.

Der zweite Grund ist, dass die Reserve nicht so arbeitet, wie sie es soll. Hier ist, was der Plan verkauft, wenn der Crash an seiner schlechtesten Stelle liegt, beginnend 2030, sodass das Tief in 2031 fällt:

[[img:sor-crash-sales-2031-cash]]

Die Reserve liefert etwa $21,000 der $91,000 Verkäufe des Jahres, und etwa $37,000 des S&P-500-Fonds werden am Tief immer noch verkauft. Die Entnahmen des Plans sind anteilig, also verkauft er eine Scheibe von allem. Nichts sagt ihm, dass das Bargeld für schlechte Jahre da ist. Zum Vergleich verkauft der Plan [70/30](#canvas-dossier:sor_seventy_thirty) im selben Jahr etwa $46,000 Aktien:

[[img:sor-crash-sales-2031-7030]]

Das ist keine Eigenheit der Software. Eine Reserve hilft nur, wenn jemand mitten in einem Crash entscheidet, dass dies das Jahr ist, sie zu nutzen, und das jedes Jahr weiter entscheidet, bis sich der Markt erholt. Jemand muss auch entscheiden, wann sie wieder aufgefüllt wird. Tutilis hat keine Regel dieser Art, und der Ruheständler braucht ebenfalls eine aufgeschriebene. Ohne sie ist eine Reserve einfach eine Position mit niedriger Rendite.

## Weniger Aktien, und eine Regel {#less-stock-and-a-rule}

Der Plan [60/40 rebalanciert](#canvas-dossier:sor_sixty_forty_rebalanced) hält etwas weniger Aktien und trägt eine Regel. Seine Entnahmestrategie ist **Glidepath-Rebalancing**, gesetzt gegen ein konstantes Ziel 60/40. Jedes Jahr vergleicht der Plan seine Aktien-, Anleihen- und Baranteile mit dem Ziel. Wenn er Geld braucht, verkauft er aus dem, was *über* dem Ziel sitzt, und wenn Geld übrig bleibt, kauft er, was darunter sitzt.

In einem Crash fällt der Aktienanteil unter sein Ziel und der Anleihenanteil steigt darüber. Die Regel bezahlt das Jahr dann aus Anleihen, ohne dass irgendjemand etwas entscheidet:

[[img:sor-crash-sales-2031-6040]]

2031 wird kein S&P-500-Fonds verkauft. Das ganze Jahr kommt aus den Treasury-Fonds, jede Zeile markiert mit *Glidepath-Rebalancing*. Das ist, was die Barreserve tun sollte, und hier geschieht es automatisch.

Die Tabelle im vorherigen Abschnitt zeigt, was das wert ist. Der am schlechtesten platzierte Crash kostet den Plan 70/30 etwa $690,000 seines Endnettovermögens und den Reserveplan etwa $540,000. Den rebalancierten Plan 60/40 kostet er etwa $180,000. Die Spalte des rebalancierten Plans bewegt sich kaum, wohin der Crash auch gelegt wird. Wenn das tiefe Jahr des Crashs auf den Ruhestand fällt, mit dem Crash beginnend 2030 oder 2031, schließt er vor beiden anderen Plänen ab. Mit dem Crash beginnend 2029 schließt er knapp hinter dem Plan 70/30 ab.

## Welcher Teil die Arbeit tut {#which-part-does-the-work}

Der Plan 60/40 hat zwei Dinge auf einmal geändert: weniger Aktien, und die Regel. Sie können sie in Transformationen trennen. Schalten Sie den Crash für den Plan [60/40 rebalanciert](#canvas-dossier:sor_sixty_forty_rebalanced) ein, wählen Sie dann **Geldbewegungen** und setzen Sie ihn zurück auf **Anteilig**. Lesen Sie 2057 erneut.

[[img:sor-crash-modifiables-sell-invest|control]]

*Transformationen → Änderbare beim Plan 60/40, mit Geldbewegungen ausgewählt. Diese Zeile ist die Entnahmestrategie. Sie auf Anteilig zu setzen schaltet die Rebalancing-Regel aus und lässt den geringeren Aktienanteil bestehen.*

[[jump:withdrawal-order|modifiable]]

Mit dem Crash beginnend 2030 und anteiligen Entnahmen endet der Plan 60/40 bei etwa $2.33 million. Das liegt unter den $2.41 million des Plans 70/30. Auf diesem Pfad hat der geringere Aktienanteil allein nichts erkauft. Die Regel hat die Arbeit getan, weil sie den Plan davon abgehalten hat, Aktien am Tief zu verkaufen.

<details class="lesson-advanced">
<summary class="lesson-advanced-label">Fortgeschrittenes Thema — die Tabelle von der Befehlszeile aus nachbilden</summary>
<div class="lesson-advanced-body">

Jede Zahl in dieser Lektion kommt aus `engine-cli`, das denselben Crash als ein Paar von Optionen nimmt. Das ist die schlechteste Zelle des Plans 70/30 in der Tabelle:

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.balance-sheet --sample sor_seventy_thirty --this-year 2026 --year 2057 --overlay global-financial-crisis-2007 --overlay-start 2030 --format md"
```

Ändern Sie `--overlay-start`, um den Crash durch die Jahre zu schieben. Fügen Sie `--residual pro-rata` zum Befehl des Plans 60/40 hinzu, um die Regel auszuschalten, was die Änderung der Residualstrategie in der App tut.

Die Prüfung Realisierte Renditen hat eine eigene Tabelle. Dies druckt die Renditen jedes Postens für das Nachspielen von 1929, mit einer Wachstumsspalte über die sechzehn Crash-Jahre, die zum Streifen Wachstum von 1 passt:

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.item-returns --sample sor_seventy_thirty --this-year 2026 --overlay great-crash-1929 --overlay-start 2031 --year 2031 --window 16 --format md"
```

</div>
</details>

## Tausend Pfade {#a-thousand-paths}

Alles bisher nutzte einen einzelnen Pfad: erwartete Renditen in jedem Jahr außer dem Crash. Die [[term:monte-carlo|Monte-Carlo-Simulation]] rechnet tausend Pfade mit zufällig gezogenen Renditen, und die Crash-Überlagerung gilt für jeden von ihnen. Die Crash-Jahre sind überall dieselben, und jedes andere Jahr variiert.

Ohne Crash gelingen die drei Pläne auf 96%, 98% und 98% der Pfade. Das mediane Endnettovermögen des rebalancierten Plans 60/40 liegt innerhalb von etwa $100,000 von dem des Plans 70/30, und sein Ergebnis im schlechten Zehntel ist um etwa $220,000 besser. Über viele Pfade kostet ein rebalanciertes 60/40 viel weniger, als der einzelne Pfad nahelegte.

Die globale Finanzkrise verschiebt diese Erfolgsquoten kaum, und sie kann sie sogar leicht anheben. Die Überlagerung spielt die Erholung ebenso nach wie den Fall, und sechs Jahre mit einem bekannten, vollständig erholten Pfad ersetzen sechs Jahre, die überallhin hätten gehen können. Ein Crash, der sich innerhalb der Überlagerung erholt, zeigt sich nicht als Misserfolg.

Die Episode, die die Pläne trennt, ist der Große Crash von 1929. Er spielt sechzehn Jahre nach, mit einem Fall von fast 80% und einer langen, ungleichmäßigen Erholung. Auf Jordans Ruhestand 2031 gelegt, fällt der Erfolg auf etwa 52% für 70/30 und etwa 63% für die Barreserve. Der rebalancierte Plan 60/40 gelingt immer noch auf etwa 75% der Pfade. Dieselbe Aufteilung 60/40 mit anteiligen Entnahmen gelingt auf etwa 63%. In einem so tiefen und langen Crash verdienen der kleinere Aktienanteil und die Regel beide ihren Preis.

## Was die Forschung sagt {#what-the-research-says}

Diese Ergebnisse stimmen mit der veröffentlichten Arbeit zur Frage überein.

Javier Estrada hat in *The Bucket Approach for Retirement: A Suboptimal Behavioral Trick?* (2018) Eimerstrategien an 115 Jahren Daten aus 21 Ländern geprüft. Sie schnitten schlechter ab als einfache statische Allokationen, die nach jeder Entnahme rebalanciert werden, und ihre Ausfallquoten sahen aus wie die eines Portfolios mit etwa 90% Aktien. Eine Eimerstrategie verschiebt Geld von Aktien zu Anleihen zu Bar, aber nie zurück, sodass sie nie Aktien kauft, wenn Aktien billig sind. Rebalancing tut das.

Wade Pfau und Michael Kitces haben in *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014) gezeigt, dass sich das Sequenzrisiko in den Jahren um das Ruhestandsdatum konzentriert. Ein Portfolio, das im Ruhestand weniger Aktien hält und danach Aktien hinzufügt, überlebte häufiger als eines, das einen konstanten, höheren Anteil hielt. Das ist derselbe Befund wie der des Schiebereglers: Die Jahre um das Ruhestandsdatum sind die, die es zu schützen gilt.

Ein Eimer hat dennoch ein Argument für sich. Er gibt einem nervösen Ruheständler eine Geschichte, die es leichter macht, in einem Crash keine Aktien zu verkaufen, und Verhalten ist ein großer Teil dessen, wie Ruheständler tatsächlich abschneiden. Eine aufgeschriebene Rebalancing-Regel macht dasselbe Versprechen mit weniger Geld, das in Bar geparkt ist, und sie nimmt die Entscheidung weg, die der Eimer offenlässt.

## Was Ihnen das nicht sagen kann {#what-this-cannot-tell-you}

Diese Analyse hat Grenzen, und sie zählen dafür, wie weit man ihr trauen soll.

- **Glidepath-Rebalancing handelt nur das Geld des Jahres.** Es verkauft übergewichtete Positionen, wenn der Plan Geld braucht, und kauft untergewichtete, wenn Geld übrig bleibt. Es verkauft in einem Jahr ohne Nettoentnahme keine Anleihen, um Aktien zu kaufen, und es kauft nur in steuerpflichtigen Konten. Ein volles jährliches Rebalancing, wie in Estradas Studie, würde nach einem Crash auch Aktien innerhalb des 401(k) kaufen.
- **Es gibt keine Regel für „das Bargeld in einem Abschwungjahr nutzen“.** Tutilis kann eine Reserve noch nicht modellieren, die nur ausgegeben wird, wenn der Markt gefallen ist, und wieder aufgefüllt wird, wenn er sich erholt. Ein Haushalt, der eine solche Regel treu befolgen würde, kann besser abschneiden als der Reserveplan hier.
- **Die Crashs sind Wiederholungen.** Jede Episode wiederholt genau einen historischen Pfad. Der nächste Crash wird wie keiner von ihnen aussehen, und die [[term:inflation]] wird nicht nachgespielt, was insbesondere die Episode von 1973 unterschätzt.
- **Ein Haushalt.** Ein Plan, der sich stärker auf sein Portfolio stützt, oder der eine Pension hat, die den größten Teil seiner Ausgaben deckt, wird das Timing stärker oder schwächer spüren als Jordans Plan.

## Was Sie mitnehmen {#what-to-take-away}

- Jahresrenditen verbergen, was ein Crash kostet. Ein großer Gewinn nach einem großen Verlust macht ihn nicht ungeschehen, weil ein Gewinn nur wachsen lässt, was übrig ist. Lesen Sie den Streifen Wachstum von 1 in der Prüfung Realisierte Renditen, um zu sehen, was der Crash mit jedem Dollar tatsächlich getan hat.
- Sequenzrisiko ist eine Frage des Zeitpunkts. Ein Crash richtet den meisten Schaden an, wenn sein schlechtestes Jahr auf die ersten Jahre der Entnahmen fällt. Verschieben Sie den Crash in Transformationen, lassen Sie die Bilanz auf dem letzten Jahr, und finden Sie für jede Episode das Startjahr, das am meisten schadet.
- Eine Barreserve ohne Regel, wann sie auszugeben ist, ist eine Position mit niedriger Rendite. Sie kostet jedes Jahr Geld und tut wenig in dem Crash, für den sie gekauft wurde.
- Eine stehende Regel, das zu verkaufen, was übergewichtet ist, tut automatisch die Arbeit, die eine Reserve tun soll, und sie kauft Aktien wieder, während sich der Markt erholt.
- Etwas Risiko herauszunehmen hilft am meisten in tiefen, langen Crashs. Zusammen mit einer Regel gab es Jordan in fast jedem Crash-Test hier das beste Ergebnis, zu einem bescheidenen Preis in einem gewöhnlichen Markt.
