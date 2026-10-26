<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_glide.es.md
tutilis-locale: es translated
-->
# Glide o a prorrata

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.withdrawal.glide
  outline-path: Household planning › Withdrawal and longevity › Glide rebalance vs pro-rata
  document-id: springfield_glide
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: FirstPass
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_glide.md
-->

<!--- α <lesson_body> -->
Una [[term:glide-path]] es una combinación objetivo de acciones, bonos y efectivo que cambia con los años. La escribe una vez, y cuando la estrategia de retiro es **Rebalanceo de senda** ([[term:rebalance]]), el efectivo que sobra cada año y el faltante de cada año se orientan hacia ella. Bajo la estrategia por defecto, **A prorrata**, el plan vende e invierte en proporción a lo que ya tiene, así que la combinación con la que empieza tiende a quedarse.

El plan de esta lección empieza con muchos más bonos que acciones y lleva un objetivo que se inclina al otro lado. Esa brecha es de lo que trata la lección. Encontrará dónde se fija el objetivo, lo leerá y luego cambiará la estrategia para ver qué le hace a la previsión seguirlo.

Es la hermana de [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order). Las dos lecciones cambian el mismo control, la estrategia de retiro, y cada muestra está construida para que un solo cambio sea fácil de leer.

El plan en vivo de la derecha es **Springfield Glide** (`springfield_glide`). El éxito se juzga como **Plata**, salvo que usted lo cambie, como explica [¿Qué significa el éxito?](/learn/springfield_success).

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Qué hay en esta muestra, y por qué el prorrateo la mantiene cargada de bonos?** Vea [Qué hay en la muestra](#what-is-in-the-sample).
2. **¿Dónde fijo la combinación objetivo de la senda, y cómo la leo?** Vea [Fijar el objetivo](#set-the-target).
3. **¿Qué vistas muestran si la parte de acciones crece con el tiempo?** Vea [Dónde mirar](#where-to-look).
4. **¿Dónde cambio la estrategia de a prorrata a rebalanceo de senda?** Vea [La palanca](#the-lever).
5. **Con el mismo hogar y el mismo gasto, ¿qué cambia seguir el objetivo?** Vea [Pruebe esto](#try-this).

</div>
</aside>

---

## Qué hay en la muestra {#what-is-in-the-sample}

Homer nació en 1965. Trabaja hasta que se jubila a los 65 en 2030, solicita el Seguro Social a su edad plena de jubilación de 67, y el plan llega hasta que tiene 90. Su ahorro está en una sola [[term:brokerage]] imponible que tiene dos fondos: **Growth Equity**, que crece como el mercado de acciones de EE. UU., y **Ballast Bond**, que crece como los Treasuries intermedios. El fondo de bonos es más de cinco veces el tamaño del fondo de acciones. Sus gastos de vida continúan hasta el final del plan.

La estrategia de retiro del plan es **A prorrata**. Cada año vende, o invierte, en los dos fondos en proporción a su tamaño, así que la cartera se queda sobre todo en bonos mientras el plan corre.

El plan también lleva una senda de inversión que todavía no usa. El objetivo es 75 % de acciones y 25 % de bonos hasta la jubilación, y luego se mueve en línea recta hasta 50/50 en el año en que Homer cumple 90. La tabla al pie de esta lección lista cada ajuste, objetivo incluido.

---

## Fijar el objetivo {#set-the-target}

El objetivo vive bajo la **Estrategia de movimientos de dinero** en [[nav:assumptions]]. Seleccione **Rebalanceo de senda** y aparece debajo la cuadrícula **Objetivo de la senda**. Un plan que ya tiene un objetivo muestra la cuadrícula bajo cualquier estrategia, con una nota cuando la estrategia no lo va a leer.

[[jump:glide-path|input__assumptions__assumptions-sell-invest__control.residual-capital-strategy__control.glide-rebalance]]

[[img:sfglide-glide-target|control]]

*El objetivo de Springfield Glide bajo la Estrategia de movimientos de dinero. El plan está en A prorrata, así que el objetivo está guardado pero no se lee, y la nota de al lado lo dice.*

La cuadrícula tiene una columna por año y una fila por clase de inversión: acciones nacionales, acciones internacionales, bonos y efectivo. Cada columna dice cómo debería repartirse la cartera ese año, y debería sumar 100 %. El total bajo cada columna se pone rojo cuando no lo hace, y **Normalizar a 100%** devuelve cada columna en ese caso al 100 %.

- **Definir una combinación objetivo** enciende el objetivo. Un objetivo nuevo empieza con una columna para este año, rellena con lo que el plan tiene hoy. Desmarcarlo borra el objetivo, cada columna y la casilla bajo la cuadrícula, así que pregunta primero.
- **Agregar año** añade una columna diez años después de la última, con la misma combinación, que usted luego edita.
- La papelera bajo una columna la quita.

Entre dos columnas el objetivo se mueve en línea recta. Antes de la primera columna se aplica la combinación de la primera, y después de la última, la de la última. Springfield Glide tiene dos columnas, 2030 y 2055, así que su objetivo es 75/25 cada año hasta 2030 y llega a 50/50 en 2055.

El objetivo se enuncia por clase de inversión, y Tutilis decide de qué clase es cada fondo a partir de la categoría de crecimiento a la que está fijado para crecer. Cuando una clase tiene varios fondos, su parte se reparte entre ellos en proporción a su valor. Un fondo cuya categoría no es ninguna de las cuatro, como el oro, el inmobiliario o un fondo solo con su propio supuesto de crecimiento, aparece bajo la cuadrícula como **Fuera de la senda**. La regla nunca lo compra ni lo vende para alcanzar el objetivo.

---

## Dónde mirar {#where-to-look}

### Definitorio {#definitional}

1. [[nav:birds-eye]] → Activos muestra **Growth Equity** y **Ballast Bond** lado a lado en la cuenta de corretaje.
2. La **Estrategia de movimientos de dinero** bajo [[nav:assumptions]] empieza en **A prorrata**, y la cuadrícula **Objetivo de la senda** descrita arriba está debajo.

### Proyectado — [[nav:forecaster]] (ya poblado) {#projected-navforecaster-already-populated}

Seleccione [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]] y [[nav:si-table]]. El Resumen de simulación ya está en **Plata**.

| Vista previa | Vista | Qué muestra aquí |
|--------------|-------|------------------|
| [[img:sfglide-bs-chart|preview]] | [[nav:bs-chart]] | Si la parte de acciones crece con el tiempo. |
| [[img:sfglide-bs-table|preview]] | [[nav:bs-table]] | Los dos fondos en un año seleccionado. |
| [[img:sfglide-cf-chart|preview]] | [[nav:cf-chart]] | El ingreso mientras Homer trabaja, los gastos de vida y los años en que el plan invierte o vende. |
| [[img:sfglide-si-table|preview]] | [[nav:si-table]] | Por qué ocurrió cada operación. Las operaciones a prorrata lo dicen, y las de senda dicen *Rebalanceo de senda*. |
| [[img:sfglide-nw-distribution|preview]] | **Distribución del patrimonio neto** | La dispersión del patrimonio neto final tras un cambio de estrategia. |
| [[img:sfglide-key-forecasts|preview]] | **Previsiones clave** | El patrimonio neto final en la trayectoria GMF y a través de las trayectorias. |

[[jump:glide-path|output__forecaster__forecaster.forecast-detail__si-table__line.reason.glide-rebalance]]

Lea primero la trayectoria **[[term:fid-gmf|FID 0 / GMF]]**. Los controles de los gráficos se explican en [Controles de los gráficos: Ampliar, zoom y Revelar](/learn/getting_around#chart-chrome).

---

## La palanca {#the-lever}

| Lugar | Uso |
|-------|-----|
| La **Estrategia de movimientos de dinero** en [[nav:assumptions]] | Cambia la estrategia del plan para siempre. |
| [[nav:transforms]] → Movimientos de dinero, en los modificables | Prueba la otra estrategia como un qué pasaría si, y luego **Re-simular**. |

[[jump:withdrawal-order|modifiable]]

Cambie **A prorrata** a **Rebalanceo de senda** y deje las cuentas y el gasto quietos para el primer experimento. El objetivo ya está puesto, así que el cambio es la única diferencia.

Hasta que cambie, la lista de problemas del plan lleva un aviso de que la senda de inversión no la usa la estrategia de retiro. Ese es el punto de esta lección: bajo el prorrateo el objetivo está escrito, pero nada lo lee. El aviso desaparece cuando la estrategia es rebalanceo de senda.

---

## Pruebe esto {#try-this}

1. Confirme que **Ballast Bond** es mucho mayor que **Growth Equity** al principio, en [[nav:birds-eye]] o [[nav:bs-table]].
2. Note que la estrategia es **A prorrata**, y note el patrimonio neto del plan en su último año en la trayectoria GMF.
3. Abra [[nav:assumptions]] y lea la cuadrícula **Objetivo de la senda** bajo la **Estrategia de movimientos de dinero**. Luego cambie la estrategia a **Rebalanceo de senda** y **Re-simule**.
4. Desplace [[nav:bs-chart]] o [[nav:bs-table]] a través de los años. Bajo el prorrateo, las acciones se quedan cerca de un quinto de la cartera durante todo el plan. Bajo el rebalanceo de senda, el efectivo que sobra cada año y el faltante de cada año se orientan hacia el objetivo, así que la parte de acciones sube a más de un cuarto en 2035 y a unos dos quintos en 2040. Alcanza el objetivo a finales de la década de 2040 y luego lo sigue hacia abajo, hacia 50/50.
5. Compare los finales. El plan se mantiene [[term:solvent]] hasta el final bajo las dos estrategias, y bajo el rebalanceo de senda termina con cerca de un tercio más de patrimonio neto, porque una parte mayor del dinero pasó esos años creciendo a rendimientos de acciones.
6. Edite el objetivo y vuelva a simular. Pruebe una segunda columna más tardía, o un punto final 60/40, y observe cuánto se mueve el final. El sentido de la cuadrícula es que puede decir qué combinación quiere sin tocar un solo fondo.

Lea la dirección, no los dólares. En una cartera cargada de bonos, con un objetivo que pide más acciones, orientar el efectivo sobrante hacia el objetivo ayuda.

---

## Lecciones hermanas {#sibling-lessons}

| Lección | Qué cambia la estrategia |
|---------|--------------------------|
| [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order) | Qué cesta fiscal paga primero (efectivo imponible y un Roth de crecimiento rápido). |
| **Esta página** | La combinación de las inversiones, a través de una senda (una cuenta cargada de bonos y un objetivo inclinado a las acciones). |
| [Sendas de inversión a lo largo de la jubilación](/learn/glide_paths_through_retirement) | Una senda que cambia con los años: la tienda de bonos, el rebalanceo dentro de la IRA y un desplome en la jubilación. |

Las tres estrategias responden preguntas distintas, y cada muestra está afinada para que un solo cambio sea fácil de leer.

---

## Adónde ir después {#where-to-go-next}

| Tema | Lección |
|------|---------|
| Una trayectoria que cambia a lo largo de la jubilación | [Sendas de inversión a lo largo de la jubilación](/learn/glide_paths_through_retirement) |
| Orden de cuentas fiscales | [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order) |
| El hogar completo de dos ingresos | [El hogar Springfield](/learn/springfield_baseline) |
| Edad de solicitud y longevidad | [Solicitar pronto o vivir mucho](/learn/springfield_claim_longevity) |
| Un RMD tradicional forzado | [RMD tradicional forzada frente al orden fiscal del residual](/learn/banks_forced_rmd) |
| Un mapa de la aplicación | [Orientarse en la aplicación](/learn/getting_around) |

---

*Las cantidades son ilustrativas. Lo que enseña la lección es que, en una cartera cargada de bonos con un objetivo que pide más acciones, el rebalanceo de senda mueve la combinación hacia el objetivo y deja el plan mejor que el prorrateo. La dirección es la lección, y los dólares son solo una ilustración.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
