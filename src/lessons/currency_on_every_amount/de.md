<!--
tutilis-return: lessons/currency_on_every_amount/prose/de.md
tutilis-locale: de translated
-->
# Warum jeder Betrag eine Währung trägt

Noor lebt und arbeitet in den Vereinigten Staaten. Das Gehalt ist in Dollar, die Lebenshaltungskosten sind in Dollar, das Depot ist in Dollar. Aber Noor besitzt auch eine Eigentumswohnung in Tokio, die an einen Mieter vermietet ist, ein Sparkonto, das nach ein paar Jahren in Frankfurt zurückblieb, und eine kleine Villa in Costa Rica, gekauft für den Ruhestand. Vier Währungen, ein Haushalt, ein Plan.

Wenn Sie immer nur in einer Währung geplant haben, kann die Währungsauswahl neben jedem Betrag im Planeditor nach zu viel aussehen. Sie tippen `500,000`, und daneben sitzt ein `$ USD`, das Sie nie anfassen. Warum ist es überhaupt da?

Diese Lektion ist die Antwort. Wechseln Sie beim Lesen zwischen den beiden Plänen auf der [[term:canvas]]: Sie halten **dieselben Ziffern**. Der einzige Unterschied ist, ob jeder Betrag sagt, worin er gezählt wird.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Power-Nutzer</p>
<div class="lesson-power-user-body">

Ein Plan in mehreren Währungen ist eine Funktion für **Power-Nutzer**. Der Plan eines typischen Nutzers hält jeden Betrag in einer Währung, sodass die Währung neben jedem Betrag und der Reiter Währung unter Annahmen nur erscheinen, wenn Power-Nutzer an ist. Schalten Sie ihn ein unter [[nav:advanced]] → Anwendungseinstellungen → **Power-Nutzer**.

</div>
</aside>

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den Abschnitt, der sie beantwortet.

1. **Warum trägt jeder Betrag eine Währung neben seiner Zahl?** Siehe [Eine Zahl ist kein Betrag](#a-number-is-not-an-amount).
2. **Wie speichert ein Plan Beträge, die in mehreren Währungen sind?** Siehe [Was der Plan festhält](#what-the-plan-records).
3. **Wo werden fremde Beträge umgerechnet, und wie werden sie besteuert?** Siehe [Wo die Umrechnung geschieht](#where-the-conversion-happens).
4. **Was geht schief, wenn ein fremder Betrag ohne seine Währung getippt wird?** Siehe [Dieselben Ziffern, ohne Kennzeichnung](#same-digits-no-tag).
5. **Warum gibt es keine einzelne Währungseinstellung für den ganzen Plan?** Siehe [Warum nicht eine Einstellung](#why-not-one-setting-for-the-plan).
6. **Woher kommen die Wechselkurse, und können sie sich während der Prognose bewegen?** Siehe [Kurse heute, und Kurse, die sich bewegen](#rates-today-and-rates-that-move).

</div>
</aside>

## Eine Zahl ist kein Betrag {#a-number-is-not-an-amount}

Die Wohnung in Tokio ist `65,000,000` wert. Fünfundsechzig Millionen *wovon* ist die ganze Frage. Fünfundsechzig Millionen Yen sind eine bescheidene Wohnung; fünfundsechzig Millionen Dollar sind ein Hochhaus. Die Ziffern sind dieselben, und nichts an ihnen sagt Ihnen, welche.

Ein Betrag in Tutilis ist also drei Dinge, nicht eines: ein **Jahr**, in dem er notiert wurde, eine **Währung**, in der er gezählt wird, und die Zahl. Das Jahr macht aus einer Schätzung von 2024 Geld von 2024 und nicht das Jahr, in dem der Plan beginnt. Die Währung macht aus `65,000,000` eine Wohnung und kein Hochhaus. Beides ist keine Dekoration; lassen Sie eines weg, und die Zahl ist eine Vermutung.

Für einen Haushalt, der nur mit Dollar zu tun hat, kostet die Währung nichts. Sie ist die Vorgabe, also wählen Sie sie nie, und wenn der Plan gespeichert wird, hält ein Dollarbetrag nicht einmal eine Währung fest: „keine Währung angegeben“ *bedeutet* US-Dollar. Die Auswahl, die Sie nie anfassen, ist der ganze Preis der Funktion.

## Was der Plan festhält {#what-the-plan-records}

Öffnen Sie **Dossier** im gekennzeichneten Plan und sehen Sie, was jeder Posten über sich selbst sagt. Jeder Posten trägt seine eigene Währung, und nichts wird dort umgerechnet, wo es gespeichert ist:

| Posten | Festgehalten als |
| --- | --- |
| Tokyo condo | ¥65,000,000, notiert in 2024 |
| Tokyo condo · building management fee | ¥360,000 im Jahr, notiert in 2024 |
| Tokyo condo rent | ¥2,400,000 brutto im Jahr, notiert in 2026 |
| Frankfurt savings | €60,000, notiert in 2026 |
| Costa Rica villa | ₡55,000,000, notiert in 2025 |
| Brokerage, salary, living expenses | Dollar |

Zwei Einzelheiten sind leicht zu übersehen. Die **Anschaffungskosten** der Wohnung sind eine nackte Zahl, `52,000,000`, ohne eigene Währung: Sie leihen sich die der Bewertung. Anschaffungskosten haben nur Sinn gegenüber dem Wert, mit dem sie verglichen werden, also werden die beiden von vornherein in einer Währung gehalten, und wenn Sie die Währung der Bewertung im Editor ändern, folgen die Anschaffungskosten sofort. Und die **Miete** ist überhaupt keine Eigenschaft der Wohnung; sie ist ihr eigener Posten, ein Generator für Mieteinnahmen, mit eigener Währung. Eine Wohnung in Yen könnte grundsätzlich gegen Dollar vermietet werden, also nimmt das Modell das nicht an.

„Festgehalten, nicht umgerechnet“ ist die Regel. Der Plan, den Sie getippt haben, ist der Plan auf der Platte. Jede Umrechnung, die Sie je sehen, wird aus diesen ursprünglichen Beträgen und einem Kurs berechnet, auf dem Weg zum Bildschirm.

## Wo die Umrechnung geschieht {#where-the-conversion-happens}

Die **Vogelperspektive** ist der erste Ort, an dem die vier Währungen zusammentreffen. Sie zeigt die Posten des Plans als eine Liste von Barwerten, und sie muss dafür eine einzelne Währung wählen: Ihre Anzeigewährung, hier Dollar:

| Posten | Barwert |
| --- | ---: |
| Tokyo condo | ≈ $489,000 |
| Costa Rica villa | ≈ $95,000 |
| Brokerage | $500,000 |
| Frankfurt savings | ≈ $64,000 |

Die Wohnung in Yen ist etwas weniger wert als das Depot in Dollar; die Villa in Colón ist ein kleiner Bruchteil von beidem. Jede umgerechnete Zeile trägt eine Markierung, `(¥↔$)`, die Währung, in der sie modelliert wurde, und dann die, in der sie gezeigt wird, sodass eine umgerechnete Zahl nie als ursprüngliche durchgeht. Die Schaltfläche **FX** in der Leiste listet jede Währung, die der Plan hält, und den Kurs hinter jeder Markierung.

Die Prognose tut dasselbe, eine Ebene tiefer. Die Engine simuliert jeden Posten **in seiner eigenen Währung** — die Wohnung legt in Yen zu, die Miete wächst in Yen, die Verwaltungsgebühr inflationiert in Yen — und rechnet nur an den Rändern um, wo die Cashflows eines Jahres saldiert werden und wo eine Bilanz summiert wird. Stellen Sie das Prognosemodul auf **2027** und lesen Sie die Cashflow-Rechnung: Die Miete kommt als etwa **$12,500** netto der Kosten der Immobilie an, neben einem Gehalt von etwa $160,000. Diese $12,500 sind eine Yen-Zahl, die die Grenze einmal überschritten hat, zum Kurs des Plans.

[[jump:passive-income|output__forecaster__forecaster.forecast-detail__cf-table__line.cf.rental-business]]

Steuern überschreiten dieselbe Grenze. Noor veranlagt in den USA, also wird die Miete in Yen als passives US-Einkommen besteuert, in Dollar, auf derselben Rechnung wie das Gehalt. Der Steuerrechner nimmt seine Rechnungseinheit aus der Jurisdiktion, nicht aus dem Posten — und deshalb muss der Posten sagen, worin er ist.

## Dieselben Ziffern, ohne Kennzeichnung {#same-digits-no-tag}

Wechseln Sie nun zu **Same digits, no tag**. Nichts wurde neu getippt. Jeder Betrag hat einfach aufgehört zu sagen, in welcher Währung er ist — was, wie oben, bedeutet, dass der Plan jeden von ihnen als Dollar liest.

| | Every amount tagged | Same digits, no tag |
| --- | ---: | ---: |
| Tokyo condo in der Vogelperspektive | ≈ $489,000 | $65,000,000 |
| Nettovermögen, Ende 2027 | ≈ 1,3 Millionen $ | ≈ 126 Millionen $ |
| Tokyo condo rent in 2027 | ≈ $12,500 | ≈ 1,7 Millionen $ |

Noor ist auf dem Papier nun ein Haushalt mit neun Stellen, mit einer Wohnung, die jedes Jahr mehr Miete einbringt, als das Gehalt in einem Jahrzehnt. Der Erfolg ist ein perfektes 100 %. Jede Tabelle ist in sich stimmig; jede Tabelle ist falsch.

Nichts in der Software kann das fangen. `65,000,000` ist ein vollkommen zulässiger Dollarbetrag, und ein Plan kann eine ungekennzeichnete Yen-Zahl nicht von einer echten unterscheiden — es sind dieselben Bytes. Die einzige Verteidigung ist, dass der Betrag sagt, was er ist, *in dem Moment, in dem er getippt wird*, durch die eine Person, die es weiß. Dafür ist die Auswahl da.

Das ist kein Gedankenspiel. Die Engine hatte genau diesen Fehler: eine Yen-Bewertung zum Nennwert als Dollar gelesen, nur auf der Prognoseseite, sodass Vogelperspektive und Prognosemodul um mehr als hundert zu eins auseinanderlagen. Die Korrektur war nicht, klüger umzurechnen; sie war, jeden Posten seine Währung durch die ganze Simulation tragen zu lassen, und ein Test hält die Engine nun daran.

## Warum nicht eine Einstellung {#why-not-one-setting-for-the-plan}

Der naheliegende billigere Entwurf ist eine einzelne Währung für den ganzen Plan: eine Auswahl, in den Einstellungen, und jeder Betrag erbt sie. Er funktioniert genau so lange, wie jeder Betrag wirklich in dieser Währung ist, und er scheitert an dem Tag, an dem einer es nicht ist.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur in der Desktop-App</summary>
<div class="lesson-desktop-only-body">

Diese Auswahl ist die Währungswahl des Plans. In diesem Plan steht sie auf mehreren Währungen, und die Auswahl darunter setzt nur den nächsten Betrag, den Sie tippen.

[[img:currency-on-policy|control]]

*Die Währungswahl bei [Every amount tagged](#canvas-dossier:currency_tagged).*

</div>
</details>

Noors Plan hat keine ehrliche Antwort auf „in welcher Währung ist dieser Plan“. Er ist in vier. In dem Moment, in dem ein einzelner fremder Posten auftaucht, muss eine Einstellung auf Planebene zu einer je Posten werden, und jeder schon getippte Betrag muss noch einmal durchgegangen und gekennzeichnet werden — von jemandem, der sich vielleicht nicht mehr erinnert, welche Schätzung in welchem Geld war. Beträge, die vor der Änderung erfasst wurden, und Beträge, die danach erfasst wurden, sind auf der Platte nicht zu unterscheiden. Das ist die Festlegung: nicht, dass es schwer wäre, das Feld später hinzuzufügen, sondern dass nichts, was davor erfasst wurde, danach noch vertraut werden kann.

Die Währung vom ersten Tag an am Betrag zu führen ist die ehrliche Form. Sie sagt nichts, worüber ein Haushalt mit einer Währung nachdenken müsste, und sie kostet einen Vorgabewert, der nicht einmal aufgeschrieben wird. Was sie einbringt, ist, dass der erste fremde Posten eine weitere Zeile ist, keine Migration.

## Kurse heute, und Kurse, die sich bewegen {#rates-today-and-rates-that-move}

Die Kurse hinter jeder Umrechnung oben leben auf dem Plan. Öffnen Sie **Annahmen → Währung**, um sie zu sehen: ein Kurs je Währung gegen den Dollar, sodass keine Kombination von Bearbeitungen mit sich selbst unvereinbar sein kann. Diese beiden Pläne tragen keine eigenen Kurse und reiten auf dem mitgelieferten Schnappschuss; ein echter Plan kann seine eigenen tippen oder **Aktuelle FX holen** drücken und feinjustieren.

[[jump:fx]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Nur in der Desktop-App</summary>
<div class="lesson-desktop-only-body">

[[img:currency-on-fx-rates|control]]

*Annahmen → Währung bei [Every amount tagged](#canvas-dossier:currency_tagged). Eine Zeile je Währung gegen den Dollar, und Wechselkurse auf Fest.*

</div>
</details>

Standardmäßig bewegen sich die Kurse nicht. Jedes Jahr der Prognose rechnet zum selben Kurs um, was bedeutet, dass ein Plan, der nicht anders gebeten hat, Währung als Einheit behandelt und nicht als Risiko: Die Wohnung in Yen wächst mit einer Immobilienrate, und die Tatsache, dass der Yen selbst über vierzig Jahre gegen den Dollar wandern wird, ist nicht Teil der Streuung. Diese Vorgabe ist bewusst, und es ist genau das, was jeder Plan tat, bevor das Währungsrisikomodell existierte.

Das Modell ist da, wenn Sie es wollen. Unter der Kurstabelle bietet dasselbe Panel **Wechselkurse: Fest | Modelliert**. Wählen Sie *Modelliert*, und jeder Kurs wird Teil der Simulation: Er driftet mit der [[term:inflation]] seiner Region relativ zu den USA und wandert mit einem realen Kurs, der über ein paar Jahre zum Mittel zurückkehrt, je Pfad gezogen, sodass die Prognose sagen kann, wie viel der Streuung eines Haushalts von seinen Währungen kommt. Weil jeder Posten seine Währung schon durch die ganze Simulation trägt, setzt sich das Modell an der Umrechnungsgrenze ein und ändert nichts daran, wie ein Plan geschrieben wird. Die Lektion *Währungsrisiko in der Prognose* geht es an einem Haushalt durch, der dafür gebaut ist.

Zwei kleinere Hebel gibt es heute unter [[term:transforms]]. **Umrechnen** drückt einen Posten in einer anderen Währung zum Kurs des Plans aus, sodass Sie fragen können, wie der Haushalt aussieht, wenn die Wohnung verkauft und der Erlös nach Hause gebracht wird. **Umbenennen** beschriftet die Währung neu, ohne umzurechnen — und das ist der ehrliche Name für das, was der zweite Plan auf dieser Seite aus Versehen getan hat.

## Was Sie mitnehmen {#what-to-take-away}

- Ein Betrag ist eine Zahl, ein Jahr und eine Währung. Lassen Sie eines der drei weg, und er ist eine Vermutung.
- Die Währung ist umsonst, wenn Sie sie nicht brauchen. Dollar sind die Vorgabe, und ein Dollarbetrag hält nicht einmal eine fest.
- Nichts wird dort umgerechnet, wo es gespeichert ist. Die Umrechnung geschieht auf dem Weg zum Bildschirm und an den Rändern der Prognose, immer aus dem ursprünglichen Betrag und einem Kurs, den Sie sehen können.
- Dieselben Ziffern unter der falschen Kennzeichnung sind kein kleiner Fehler. Sie sind ein anderer Haushalt.
- Die Währung vom ersten Tag an festzuhalten macht aus dem ersten fremden Posten eine Zeile statt einer Migration — und lässt das Währungsrisikomodell an der Umrechnungsgrenze einsetzen, ohne anzufassen, wie ein Plan geschrieben wird.
