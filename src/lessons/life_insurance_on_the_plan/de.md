<!--
tutilis-return: lessons/life_insurance_on_the_plan/prose/de.md
tutilis-locale: de translated
-->
# Lebensversicherung im Plan

Alex hat zwei Lebenspolicen. Die eine ist eine zwanzigjährige Risikopolice, gekauft mit 57, die andere eine lebenslange Police, die seit Jahren einen Rückkaufswert aufbaut. Keine gehört in ein Konto, und keine ist ein echtes Vermögen in der Art eines Hauses, aber beide kosten jedes Jahr Geld, eine von ihnen ist heute etwas wert, und jede verspricht eine Zahlung bei einem Tod, für den der Plan schon ein Jahr hat. Diese Lektion zeigt, wo jedes dieser drei Dinge landet.

Öffnen Sie das [[nav:dossier]]. In der Vogelperspektive hat jede Police eine Zeile unter **Vermögen**, und das Zeigen auf die Zeile hebt die Karte der Police. Die Zeile der lebenslangen Police ist ihr Rückkaufswert, und der ist Nettovermögen; die Zeile der Risikopolice trägt gar keinen Wert, weil eine Risikopolice nichts wert ist, bis sie zahlt. In der Desktop-App sitzen dieselben Karten unter **Versicherung** in der Bilanz.

[[jump:birds-eye]]

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt, der sie beantwortet.

1. **Wie unterscheiden sich eine Risikopolice und eine lebenslange Police im Plan?** Siehe [Zwei Policen, zwei Formen](#two-policies-two-shapes).
2. **Wo erscheint eine Prämie, und wann hört sie auf?** Siehe [Die Prämie ist eine Ausgabe](#the-premium-is-an-expense).
3. **Zählt der Rückkaufswert einer Police zum Nettovermögen?** Siehe [Der Rückkaufswert ist ein Vermögenswert](#the-cash-value-is-an-asset).
4. **Wann wird eine Todesfallleistung gezahlt, wer erhält sie, und wird sie besteuert?** Siehe [Wenn eine Police zahlt](#when-a-policy-pays).
5. **Was lässt dieser Plan bei der Lebensversicherung aus?** Siehe [Was dieser Plan nicht zeigt](#what-this-plan-is-not-showing).

</div>
</aside>

## Zwei Policen, zwei Formen {#two-policies-two-shapes}

Die Risikopolice ist die einfachere. Sie hat eine Todesfallleistung, eine Prämie und **Deckungsjahre**. Stirbt Alex innerhalb dieser Jahre, zahlt sie; laufen die Jahre zuerst ab, hat sie ihre Prämien gekostet und zahlt nichts, was die meisten Risikopolicen tun.

[[img:life-insurance-card-term]]

Die Karte sagt es deutlich. Ihre Zeile **Zahlt** liest *Läuft vor dem Tod der versicherten Person ab*, weil die Deckung 2046 endet und das Sterbealter von Alex den Tod nach dem letzten Jahr des Plans legt.

Die lebenslange Police ist dauerhaft. Sie deckt Alex lebenslang, solange die Prämie gezahlt wird, und sie hat einen **Rückkaufswert**, der mit einem bescheidenen Gutschriftsatz wächst.

[[img:life-insurance-card-whole]]

Ihre Zeile **Zahlt** nennt das Todesjahr von Alex, und die Karte trägt den Rückkaufswert und sein Wachstum ebenso wie die Leistung und die Prämie.

## Die Prämie ist eine Ausgabe {#the-premium-is-an-expense}

Öffnen Sie die [[nav:cf-table]] in einem beliebigen Jahr vor 2046, und beide Prämien stehen dort unter den Ausgaben, jede unter dem eigenen Namen der Police.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:life-insurance-cf-table-2045]]

Im Jahr danach bleibt nur die Prämie der lebenslangen Police. Die Prämie einer Risikopolice endet mit ihrer Deckung. Die Prämie einer dauerhaften Police endet, wenn die versicherte Person stirbt, oder früher, wenn ihre **Prämienjahre** sagen, dass die Police beitragsfrei ist.

## Der Rückkaufswert ist ein Vermögenswert {#the-cash-value-is-an-asset}

Öffnen Sie die [[nav:bs-table]]. Der Rückkaufswert der lebenslangen Police steht unter den echten Vermögenswerten, unter dem Namen der Police, und er zählt vom ersten Jahr an zum Nettovermögen.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:life-insurance-bs-table-2027]]

Er wächst mit seiner eigenen Rate, vier Prozent im Jahr, sofern die Police nicht anders sagt, und die Prognose verkauft ihn nie und beleiht ihn nie. Eine Risikopolice hat hier keine Zeile, weil sie keinen Rückkaufswert hat.

## Wenn eine Police zahlt {#when-a-policy-pays}

Eine Todesfallleistung wird in dem Jahr gezahlt, in dem die versicherte Person stirbt. Wer sie erhält, hängt davon ab, wer übrig ist. Stirbt einer von zwei Eigentümern zuerst, ist die Leistung das Geld der überlebenden Person, und der Plan legt sie an wie jeden anderen Überschuss. Ist die versicherte Person der letzte Eigentümer, endet der Plan mit diesem Tod, und die Leistung landet im letzten Jahr des Plans, wo ein Nachlass sie liest.

Alex ist hier der einzige Eigentümer, also landet die Leistung der lebenslangen Police in **2058**, dem letzten Jahr des Plans.

[[img:life-insurance-cf-table-2058]]

Sie ist der einzige Zufluss des Jahres, und darauf wird keine Steuer festgesetzt. Eine Todesfallleistung der Lebensversicherung ist kein Einkommen, und der Steuerdurchlauf lässt sie in Ruhe.

## Probieren Sie dies {#try-this}

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur in der Desktop-App</summary>
<div class="lesson-desktop-only-body">

Öffnen Sie die Risikopolice und schieben Sie das Ende ihrer Deckung über 2059 hinaus. Ihre Zeile **Zahlt** ändert sich und nennt das Todesjahr von Alex, und die Rechnung des letzten Jahres gewinnt eine zweite Leistungszeile.

[[img:life-insurance-policy-term|control]]

*Die Risikopolice, Alex 20-year term. Die Deckungsjahre sind das, was Sie über 2059 hinaus schieben.*

Dann öffnen Sie die lebenslange Police und setzen **Im Besitz von** auf *Unwiderruflicher Trust*. An der Cashflow-Rechnung ändert sich nichts; die Leistung kommt weiter an. Was sich ändert, ist der Nachlass: Auf der Karte Nettovermögensverteilung, mit Erbschaftsteuer an, bleiben die Erlöse im Besitz des Trusts aus dem steuerpflichtigen Nachlass heraus und gehen unversteuert an die Erben.

[[img:life-insurance-policy-whole|control]]

*Die lebenslange Police. Im Besitz von ist der Schalter unten im Editor.*

</div>
</details>

## Was dieser Plan nicht zeigt {#what-this-plan-is-not-showing}

Der Plan greift nie auf den Rückkaufswert zu. Ein Policendarlehen oder die Police gegen ihren Rückkaufswert aufzugeben sind beides echte Wahlmöglichkeiten, und keine ist bisher modelliert. Die Leistung ist gleichbleibend, also wird eine fallende Risikopolice mit ihrem Durchschnitt erfasst, und eine Police auf das Leben einer unterhaltsberechtigten Person zahlt im Todesjahr dieser Person wie jede andere.
