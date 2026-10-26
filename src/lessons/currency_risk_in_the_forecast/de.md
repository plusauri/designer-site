<!--
tutilis-return: lessons/currency_risk_in_the_forecast/prose/de.md
tutilis-locale: de translated
-->
# Währungsrisiko in der Prognose

Ines ist in den Vereinigten Staaten im Ruhestand und gibt in Dollar aus. Ihr Einkommen ist eine Rente aus den Jahren, in denen sie in Lissabon gearbeitet hat, gezahlt in Euro. Der größte Teil ihrer Ersparnisse liegt in einer Leiter britischer Staatsanleihen, in Pfund, und der Rest ist ein Sparkonto in Tokio, in Yen. Ein bescheidenes amerikanisches [[term:brokerage]] ist das Einzige, das sie besitzt und das in der Währung bepreist ist, in der sie lebt.

Das ist ein Haushalt, dessen Ruhestand eine Wette auf drei Wechselkurse ist, ob es jemand so gedacht hat oder nicht. Diese Lektion handelt davon, was eine Prognose über diese Wette sagen kann, und von dem einen, das diese Prognose sagen kann und eine Prognose mit festem Kurs nicht: wie viel ihrer Streuung die Währungen selbst sind.

Die [[term:canvas]] hält drei Pläne, die derselbe Haushalt sind. Der erste rechnet jedes Jahr zu den heutigen Kursen um, was jeder Plan tut, sofern er nicht anders bittet. Der zweite schaltet das Währungsrisikomodell ein. Der dritte schaltet es ein und nennt eine Überzeugung über das Pfund. Wechseln Sie beim Lesen zwischen ihnen.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power-Nutzer</p>
<div class="lesson-power-user-body">

Diese Lektion setzt Wechselkurse und lässt sie sich bewegen, auf dem Reiter Währung unter Annahmen. Dieser Reiter, und Pläne in mehreren Währungen, gehören zu einem **Power-Nutzer**. Schalten Sie ihn ein unter [[nav:advanced]] → Anwendungseinstellungen → **Power-Nutzer**, um an Ihren eigenen Plänen mitzugehen.

</div>
</aside>

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt, der sie beantwortet.

1. **Wie schalte ich bewegliche Wechselkurse für einen Plan ein?** Siehe [Nichts bewegt sich, bis Sie darum bitten](#nothing-moves-until-you-ask).
2. **Wie viel meines Plans ist fremden Währungen ausgesetzt?** Siehe [Was sie besitzt, und worin](#what-she-owns-and-in-what).
3. **Was treibt im Modell einen Wechselkurs von einem Jahr zum nächsten?** Siehe [Woraus ein beweglicher Kurs besteht](#what-a-moving-rate-is-made-of).
4. **Warum ist der erwartete Kurs flach, und was geschieht, wenn ich eine Überzeugung zur [[term:inflation]] angebe?** Siehe [Flach, bis Sie eine Überzeugung angeben](#the-expected-path-is-flat-until-you-state-a-belief).
5. **Wie sieht Währungsrisiko innerhalb eines einzelnen Prognosepfads aus?** Siehe [Ein Pfad](#one-path).
6. **Wie viel der Streuung meiner Ergebnisse kommt von den Währungen?** Siehe [Wie viel ist Währungsrisiko](#how-much-of-the-spread-is-the-currencies).
7. **Was lässt das Währungsmodell aus?** Siehe [Was das Modell nicht tut](#what-the-model-does-not-do).

</div>
</aside>

## Nichts bewegt sich, bis Sie darum bitten {#nothing-moves-until-you-ask}

Öffnen Sie **Annahmen → Währung** im ersten Plan. Unter der Kurstabelle gibt es eine Wahl in zwei Richtungen, **Wechselkurse: Fest | Modelliert**, und sie steht auf *Fest*. Diese Einstellung ist die ganze Einwilligung. Ein Plan, der sie nie berührt hat, rechnet jedes Jahr jedes Pfads zu den Kursen in der Tabelle um, genau wie vor der Existenz des Modells, und seine Prognose ändert sich nicht um einen Cent.

[[jump:fx|input]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur in der Desktop-App</summary>
<div class="lesson-desktop-only-body">

[[img:currency-risk-fx-fixed|control]]

*Annahmen → Währung im Plan mit festen Kursen. Wechselkurse steht auf Fest.*

[[img:currency-risk-fx-modeled|control]]

*Dasselbe Panel im modellierten Plan. Wechselkurse steht auf Modelliert, und jeder Kurs wird ein eigener Pfad.*

</div>
</details>

Das Modell ändert auch nichts daran, wie ein Plan geschrieben wird. Die Rente ist weiter in Euro erfasst, die Anleihenleiter in Pfund, die Ersparnisse in Yen. Was *Modelliert* ändert, ist der Kurs, den die Prognose benutzt, wenn sie diese Beträge in einem gegebenen Jahr eines gegebenen Pfads in Dollar umrechnet. Bei *Fest* ist dieser Kurs jedes Mal dieselbe Zahl. Bei *Modelliert* ist er ein eigener Pfad.

## Was sie besitzt, und worin {#what-she-owns-and-in-what}

Bevor Sie fragen, ob die Kurse zählen, sehen Sie, wie viel des Plans sie berühren. Die Prognose weist die [[term:exposure]] aus, ob die Kurse modelliert sind oder nicht, weil sie eine Tatsache des Plans ist und nicht des Modells.

[[img:currency-risk-exposure]]

Etwa zwei Drittel ihrer Vermögenswerte sind Pfund, ein Fünftel ist Yen, und ein Sechstel ist Dollar. Die Dollar-Scheibe wächst ein wenig, während die US-Aktien sich aufzinsen und der Rest abgebaut wird, aber die Form hält bis zum Horizont. Ihr Einkommen ist noch schärfer: Jeder Euro davon ist die Lissaboner Rente, und jeder Dollar, den sie ausgibt, muss zuerst mit einer der drei fremden Währungen gekauft werden.

Das ist die Form ihres Währungsrisikos. Die Vermögenswerte, die ihren Ruhestand finanzieren, sind fremd; der Ruhestand, den sie finanzieren, ist in Dollar. Nichts daran ist ungewöhnlich für jemanden, der in mehr als einem Land gelebt und gearbeitet hat, und nichts daran zeigt sich in einer Prognose, die die Kurse stillhält.

## Woraus ein beweglicher Kurs besteht {#what-a-moving-rate-is-made-of}

Das Modell zieht einen Wechselkurs nicht aus der Luft, und es gibt jeder Währung nicht einfach eine Rendite und eine [[term:volatility]], wie ein Fonds eine bekommt. Es baut die Änderung jedes Jahres aus zwei Stücken, über die Ökonomen seit einem Jahrhundert streiten und über lange Horizonte meist einig sind.

Das erste Stück ist die **Drift aus der Inflation**. Wenn die Preise in einem Land schneller steigen als die Preise in einem anderen, verliert die Währung dieses Landes gegen die andere tendenziell etwa um die Differenz an Wert. Das ist relative Kaufkraftparität, und über Jahrzehnte ist es das Verlässlichste, was jemand darüber sagen kann, wohin eine Währung steuert. Im Modell wird die Inflation jeder Region relativ zur eigenen Berichtsinflation des Plans für die Vereinigten Staaten angegeben. Eine Region mit einem Spread von null wird so verstanden, dass sie im selben Tempo inflationiert wie die USA, und ihre Währung hat keine Drift. Deshalb kann auch eine Hochinflationswährung nicht aus Versehen stark bleiben: Die Drift ist an die Inflation gebunden, die der Rest der Prognose schon benutzt.

Das zweite Stück ist der **reale Wechselkurs**, also der Kurs, nachdem die Preisniveaus beider Länder herausgenommen sind. Dort lebt das eigentliche Währungsrisiko. Reale Kurse schwanken, manchmal um ein Viertel oder mehr, aber sie schwanken nicht ewig. Sie tendieren dazu, über ein paar Jahre zu einem langfristigen Niveau zurückzukehren. Das Modell sagt das als Halbwertszeit: die Zahl der Jahre, die es dauert, bis sich die Hälfte einer Abweichung schließt, vier Jahre für die großen frei schwankenden Währungen. Jedes Jahr macht der reale Kurs einen zufälligen Schritt und lehnt sich dann zurück zu seinem langfristigen Niveau, sodass ein Pfad von vierzig Jahren nicht zu einer Bewertung abwandern kann, die keine Währung je gehalten hat.

Der Kurs [[term:nominal]], den Sie sehen, ist das Produkt der beiden. Er bekommt keine eigene Volatilität, und das ist Absicht: Würden Nominalkurs und Realkurs getrennt gezogen, könnten sie widersprüchliche Geschichten erzählen. Jede Zahl, die das Modell benutzt, je Währung, steht unter **Annahmen → Währung** und wird von `assumptions.fx-model` gedruckt. Die meisten sind Annahmen der gemeinsamen Welt, wie der Satz, mit dem Steuerklassen indexiert werden, und nicht etwas, das jeder Haushalt tippen soll. Die eine Ausnahme ist der Inflationsspread, eine Überzeugung, die ein Haushalt vernünftigerweise für sich selbst halten kann, und der nächste Abschnitt zeigt, wo man sie angibt.

<details class="lesson-math">
<summary class="lesson-math-label">Für die Mathematikfreunde — die Drift und die Halbwertszeit</summary>
<div class="lesson-math-body">

**Drift.** Mit der US-Inflation \(\pi_{US}\) und der Inflation der anderen Region \(\pi_c\) ist die erwartete jährliche Änderung des Kurses, in Logarithmen,

\[
\ln\frac{1+\pi_{US}}{1+\pi_c}
\]

sodass über viele Jahre der erwartete Kurs einfach das Verhältnis der beiden Preisniveaus ist.

**Der reale Kurs.** Schreiben Sie den logarithmischen Abstand des realen Kurses von seinem langfristigen Niveau als \(x_t\). Jedes Jahr behält er einen Anteil \(\rho\) dieses Abstands und macht einen zufälligen Schritt:

\[
x_{t+1} = \rho\,x_t + \sigma_q\,\varepsilon_{t+1}, \qquad \rho = 0.5^{1/h}
\]

Eine Abweichung schrumpft auf \(\rho^h = 0.5\) ihrer selbst nach \(h\) Jahren, und das ist, was eine Halbwertszeit bedeutet. Bei einer Halbwertszeit von vier Jahren ist \(\rho = 0.5^{1/4} \approx 0.84\).

Der Nominalkurs, den Sie sehen, ist der reale Kurs, getragen vom Verhältnis der Preisniveaus, also bekommt er keine eigene Volatilität.

</div>
</details>

## Flach, bis Sie eine Überzeugung angeben {#the-expected-path-is-flat-until-you-state-a-belief}

Die deterministische Prognose, der [[term:gmf|GMF ✦]], zieht keine zufälligen Schritte. Im zweiten Plan ist ihr Wechselkurspfad flach: Ein Pfund ist 2053 in Dollar so viel wert wie 2027. Das ist nicht das Modell, das sich weigert zu arbeiten. Es ist das Modell, das sagt: Ohne angegebenes Inflationsgefälle und mit dem heutigen Kurs als fairem Wert ist der erwartete Kurs der heutige Kurs. Die Streuung, die Sie gleich sehen, kommt ganz aus den Pfaden um diese Erwartung.

Der dritte Plan nennt eine Überzeugung: Großbritannien inflationiert 1,5 Punkte im Jahr schneller als die Vereinigten Staaten. Sonst ist nichts anders. Die Überzeugung lebt in der Kurstabelle unter **Annahmen → Währung**, in der Spalte **Inflation vs. USA**, die editierbar ist, sobald Wechselkurse auf *Modelliert* steht. Die Zeile des Pfunds liest dort 1,5 %, und jede andere Zeile liest null. In der Parametertabelle darunter wechselt die Quelle des Pfunds von der Systemvorgabe zum Plan selbst. Nun neigt sich der GMF-Pfad des Pfunds. Jedes Jahr verliert das Pfund etwa 1,4 % seines Dollarwerts, genau das Verhältnis der beiden Inflationsraten, und 2053 sitzt es fast ein Drittel unter seinem Start. Euro und Yen, ohne angegebenen Spread, bleiben daneben flach.

Weil zwei Drittel dessen, was Ines besitzt, Pfund sind, nimmt diese eine Überzeugung das erwartete Endnettovermögen von etwas unter einer Million Dollar auf etwas über die Hälfte davon. Nichts im Plan hat sich geändert außer einer einzelnen Annahme über die Inflation zweier Länder, und die Prognose hat sich um mehr bewegt, als die meisten Bearbeitungen am Plan selbst sie bewegen würden. Den Pfad lesen Sie an `forecast.fx-path` für die erwartete Prognose ab, und das ist der sauberste Weg zu prüfen, was ein angegebener Spread tut, bevor Sie einem darauf gebauten [[term:monte-carlo|Monte Carlo]] vertrauen.

## Ein Pfad {#one-path}

Jeder stochastische Pfad zieht seine eigenen Kurse. Im zweiten Plan liegt das Pfund in Prognose 7 Mitte der 2030er etwa 8 % unter heute, durch die späten 2040er ein Viertel darüber, und am Horizont wieder bei etwa 15 % darüber. Der Euro verbringt dieselben Jahrzehnte ein Viertel stark und kehrt bis 2053 auf heute zurück. Der Yen endet ein Fünftel stärker, als er begonnen hat. Die drei bewegen sich nicht unabhängig: Das Modell korreliert Überraschungen des realen Kurses über die Währungen, sodass ein Jahr, in dem der Dollar stärker wird, ihn tendenziell gegen alle drei stärkt, und es korreliert die Inflationsüberraschungen jeder Region mit dem realen Kurs ihrer eigenen Währung.

So sieht Währungsrisiko innerhalb eines Pfads aus: Kurse, die weit wandern, zurückkommen und wieder wandern, lose verbunden durch einen gemeinsamen Dollar-Faktor. Kein Pfad ist eine Vorhersage. Der Punkt ist, dass jeder Pfad ökonomisch möglich ist, was ein Random Walk auf dem Nominalkurs über einen Ruhestand nicht schaffen würde.

## Wie viel ist Währungsrisiko {#how-much-of-the-spread-is-the-currencies}

Die Frage, die Ines tatsächlich gestellt hat, ist, wie viel ihrer Streuung die Währungen selbst sind, und eine Prognose mit festem Kurs kann sie nicht beantworten. Um sie zu beantworten, lässt die Prognose denselben Monte Carlo zweimal laufen, einmal mit modellierten Kursen und einmal mit den heutigen festgehalten, und vergleicht das Endnettovermögen. Die Tabelle **Währungsrisiko** in der FX-Schnellansicht tut das auf Abruf; `forecast.currency-risk` druckt denselben Vergleich.

[[jump:fx|output__fx]]

[[img:currency-risk-nw-distribution-fixed]]

[[img:currency-risk-nw-distribution-modeled]]

Mit stillgehaltenen Kursen ist die Wolke der Ergebnisse das, was ihre Anleihenleiter, ihre Sparquote und ihre Aktien daraus machen. Mit modellierten Kursen ist die Wolke auf beiden Seiten breiter: ein höheres neunzigstes [[term:percentile]], weil ein starkes Pfund oder ein starker Euro so möglich ist wie ein schwaches, und ein niedrigeres zehntes Perzentil, weil ein schwaches es auch ist. Die Standardabweichung ihres Endnettovermögens ist ein Fünftel höher, der Boden am zehnten Perzentil ist Zehntausende Dollar niedriger, und die Erfolgsquote ist ein paar Punkte niedriger. Die letzte Zeile der Tabelle setzt eine Zahl darauf: **Etwa drei Zehntel der Varianz ihres Endnettovermögens kommen von den Wechselkursen.** Der Rest sind die Vermögenswerte.

<details class="lesson-math">
<summary class="lesson-math-label">Für die Mathematikfreunde — wie ein Fünftel mehr Streuung zu drei Zehnteln der Varianz wird</summary>
<div class="lesson-math-body">

Die Varianz ist das Quadrat der Standardabweichung. Machen die modellierten Kurse die Standardabweichung \(1.2\)-mal so groß wie die bei festem Kurs, ist die Varianz \(1.2^2 = 1.44\)-mal so groß, und der Anteil, den die Wechselkurse hinzufügen, ist

\[
1 - \frac{\sigma_{fixed}^2}{\sigma_{modeled}^2} = 1 - \frac{1}{1.44} \approx 0.31
\]

</div>
</details>

Lesen Sie diese Zahl so, wie sie gemeint ist. Sie ist keine Prognose, wohin die Währungen gehen; der erwartete Pfad ist flach. Sie ist ein Maß dafür, wie viel ihrer Unsicherheit sie in den Währungen trägt statt in den Märkten, und das würde ihr sagen, ob Absichern oder mehr Ersparnisse in Dollar zu halten seinen Preis wert ist. Ein Haushalt mit demselben fremden Anteil in Aktien fände die Währungen einen kleineren Teil einer größeren Streuung; ein Haushalt, der fremde Anleihen und Bargeld hält, wie sie, findet sie einen großen Teil einer bescheidenen.

Zwei Dinge machen diese Messung hier möglich und nicht in einer Tabelle mit einer Kursspalte. Die Kurse leben in der Simulation, sodass jeder Pfad seine eigene Kurshistorie neben seinen eigenen Renditen trägt, statt dass ein statischer Kurs hinterher durchmultipliziert wird. Und der Plan kann mit eingefrorenen Kursen laufen, sodass die Zuordnung ein Vergleich zweier ehrlicher Prognosen ist und keine Vermutung darüber, was die Währungen beigetragen haben.

## Was das Modell nicht tut {#what-the-model-does-not-do}

Das Währungsmodell ändert nicht, wie ein Posten wächst. Die Anleihenleiter verdient weiter, was eine Anleihenleiter verdient, in Pfund; das Modell ändert nur den Kurs, mit dem dieser Pfundwert in Dollar ausgedrückt wird. Es ändert nicht die US-Inflation, die die eigene Berichtsinflation des Plans bleibt und dieselbe Kurve ist, entlang derer jede Heutige-Dollar-Zahl in der App abgezinst wird. Und es korreliert die Bewegungen einer Währung noch nicht mit den Renditen der darin gehaltenen Vermögenswerte. Das sind die nächsten Schritte, und das Modell ist so gebaut, dass sie sich einsetzen, ohne zu ändern, was ein Plan sagt.

## Was Sie mitnehmen {#what-to-take-away}

- Wechselkurse können Teil der Simulation sein, aber nur für einen Plan, der sich dafür entscheidet. Ein Plan, der den Schalter nie berührt, prognostiziert genau wie zuvor.
- Ein beweglicher Kurs ist zwei Dinge: eine Drift aus dem Inflationsgefälle zwischen Regionen, und ein realer Kurs, der wandert und zurückkommt. Der Nominalkurs folgt aus beiden, sodass keine Währung aus Versehen stark bleiben oder auf ein unmögliches Niveau abwandern kann.
- Der erwartete Pfad ist flach, bis Sie ein Gefälle angeben. Geben Sie eines an, und die Drift ist das Verhältnis der beiden Inflationsraten, Jahr für Jahr, und ein Haushalt, der vor allem in dieser Währung ist, bewegt sich mit ihr.
- Die Prognose kann sagen, wie viel der Streuung eines Haushalts seine Währungen sind, indem sie denselben Monte Carlo mit modellierten Kursen und mit stillgehaltenen Kursen laufen lässt. Für eine Ruheständlerin, die von fremdem Einkommen und fremden Anleihen lebt, ist dieser Anteil groß, und es ist die Zahl, die sagt, ob das Währungsrisiko es wert ist, etwas dagegen zu tun.
