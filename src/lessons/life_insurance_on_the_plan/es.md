<!--
tutilis-return: lessons/life_insurance_on_the_plan/prose/es.md
tutilis-locale: es translated
-->
# El seguro de vida en el plan

Alex tiene dos pólizas de vida. Una es una póliza temporal a veinte años comprada a los 57, la otra es una póliza de vida entera que lleva años acumulando valor de rescate. Ninguna pertenece a una cuenta, y ninguna es un activo real como lo es una casa, pero ambas cuestan dinero cada año, una de ellas vale algo hoy, y cada una promete un pago en un fallecimiento para el que el plan ya tiene un año. Esta lección muestra dónde cae cada una de esas tres cosas.

Abra el [[nav:dossier]]. En la Vista general, cada póliza tiene una fila bajo **Activos**, y pasar el cursor sobre la fila levanta la ficha de la póliza. La fila de la póliza de vida entera es su valor de rescate, que es patrimonio neto; la fila de la póliza temporal no lleva valor alguno, porque una póliza temporal no vale nada hasta que paga. En la aplicación de escritorio las mismas fichas están bajo **Seguro** en el balance.

[[jump:birds-eye]]

## Qué aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿En qué difieren en el plan una póliza temporal y una de vida entera?** Véase [Dos pólizas, dos formas](#two-policies-two-shapes).
2. **¿Dónde aparece una prima, y cuándo se detiene?** Véase [La prima es un gasto](#the-premium-is-an-expense).
3. **¿El valor de rescate de una póliza cuenta para el patrimonio neto?** Véase [El valor de rescate es un activo](#the-cash-value-is-an-asset).
4. **¿Cuándo se paga una prestación por fallecimiento, quién la recibe y está gravada?** Véase [Cuando una póliza paga](#when-a-policy-pays).
5. **¿Qué deja fuera este plan sobre el seguro de vida?** Véase [Lo que este plan no está mostrando](#what-this-plan-is-not-showing).

</div>
</aside>

## Dos pólizas, dos formas {#two-policies-two-shapes}

La póliza temporal es la más sencilla. Tiene una prestación por fallecimiento, una prima y **años de cobertura**. Si Alex fallece dentro de esos años, paga; si los años se acaban primero, ha costado sus primas y no paga nada, que es lo que hacen la mayoría de las pólizas temporales.

[[img:life-insurance-card-term]]

La ficha lo dice con claridad. Su fila **Paga** se lee *Vence antes del fallecimiento del asegurado*, porque la cobertura termina en 2046 y la edad de fallecimiento de Alex sitúa el fallecimiento después del último año del plan.

La póliza de vida entera es permanente. Cubre a Alex de por vida mientras se paga la prima, y tiene un **valor de rescate** que crece a una tasa de acreditación modesta.

[[img:life-insurance-card-whole]]

Su fila **Paga** nombra el año de fallecimiento de Alex, y la ficha lleva el valor de rescate y su crecimiento además de la prestación y la prima.

## La prima es un gasto {#the-premium-is-an-expense}

Abra la [[nav:cf-table]] en cualquier año anterior a 2046 y ambas primas están ahí entre los gastos, cada una bajo el nombre propio de la póliza.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:life-insurance-cf-table-2045]]

Al año siguiente solo queda la prima de vida entera. La prima de una póliza temporal se detiene con su cobertura. La prima de una póliza permanente se detiene cuando fallece el asegurado, o antes si sus **años de prima** dicen que la póliza está liberada.

## El valor de rescate es un activo {#the-cash-value-is-an-asset}

Abra la [[nav:bs-table]]. El valor de rescate de la póliza de vida entera está listado entre los activos reales, bajo el nombre de la póliza, y cuenta para el patrimonio neto desde el primer año.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:life-insurance-bs-table-2027]]

Crece a su propia tasa, un cuatro por ciento al año salvo que la póliza diga otra cosa, y la previsión nunca la vende ni pide prestado contra ella. Una póliza temporal no tiene línea aquí, porque no tiene valor de rescate.

## Cuando una póliza paga {#when-a-policy-pays}

Una prestación por fallecimiento se paga el año en que fallece el asegurado. Quién la recibe depende de quién queda. Cuando uno de dos propietarios fallece primero, la prestación es el efectivo del superviviente, y el plan la invierte como cualquier otro excedente. Cuando el asegurado es el último propietario, el plan termina en ese fallecimiento, y la prestación cae en el último año del plan, que es donde la lee una herencia.

Alex es aquí el único propietario, así que la prestación de vida entera cae en **2058**, el último año del plan.

[[img:life-insurance-cf-table-2058]]

Es la única entrada del año, y no se liquida impuesto sobre ella. Una prestación por fallecimiento de un seguro de vida no es renta, y el paso fiscal la deja en paz.

## Pruebe esto {#try-this}

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

Abra la póliza temporal y empuje el fin de su cobertura más allá de 2059. Su fila **Paga** cambia para nombrar el año de fallecimiento de Alex, y el estado del último año gana una segunda línea de prestación.

[[img:life-insurance-policy-term|control]]

*La póliza temporal, Alex 20-year term. Los años de cobertura son lo que empuja más allá de 2059.*

Luego abra la póliza de vida entera y ponga **Propiedad de** en *Fideicomiso irrevocable*. Nada cambia en el estado de flujos de caja; la prestación sigue llegando. Lo que cambia es la herencia: en la ficha Distribución del patrimonio neto, con el impuesto sucesorio activado, el producto en propiedad del fideicomiso queda fuera del patrimonio gravable y pasa a los herederos sin gravar.

[[img:life-insurance-policy-whole|control]]

*La póliza de vida entera. Propiedad de es el interruptor al pie del editor.*

</div>
</details>

## Lo que este plan no está mostrando {#what-this-plan-is-not-showing}

El plan nunca tira del valor de rescate. Un préstamo sobre la póliza, o rescatarla por su valor de rescate, son ambas elecciones reales, y ninguna está modelada todavía. La prestación es nivelada, así que una póliza temporal decreciente se introduce por su media, y una póliza sobre la vida de una persona a cargo paga en el año de fallecimiento de esa persona como cualquier otra.
