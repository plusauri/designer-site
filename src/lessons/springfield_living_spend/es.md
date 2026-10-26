<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_living_spend.es.md
tutilis-locale: es translated
-->
# Doblar el plan con el gasto

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.cash_flow.living_spend
  outline-path: Household planning › Cash flow and lifestyle › Bend the plan with living spend
  document-id: springfield_living_spend
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_living_spend.md
-->

<!--- α <lesson_body> -->
Esta lección usa el mismo hogar que [El hogar Springfield](/learn/springfield_baseline), Homer y
Marge, pero tira de **otra palanca**. La pregunta aquí no es *cuándo* dejan de trabajar. Es
**cuánto gastan** mientras trabajan y en la jubilación, y cuánto tira eso de la cartera.

El [[term:live-plan]] de la derecha vuelve a ser **Springfield Baseline**.

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección
que la responde.

1. **¿Por qué el gasto de vida es una palanca que vale la pena probar, y dónde la pruebo sin
   reconstruir el plan?** Vea [La pregunta](#the-question).
2. **¿Cómo se modela un gasto de vida como una fase Work y una fase Retire unidas por la fecha de
   jubilación?** Vea
   [Qué significa «gasto de vida» en esta muestra](#what-living-spend-means-in-this-sample).
3. **¿Por qué la tabla de flujo de caja muestra importes de estilo de vida mayores que los
   redactados?** Vea
   [Qué significa «gasto de vida» en esta muestra](#what-living-spend-means-in-this-sample).
4. **¿Dónde veo cómo se modelaron las fases de estilo de vida, y cómo se desarrollan en la
   previsión?** Vea [Dónde mirar](#where-to-look).
5. **¿Dónde cambio el importe de una fase de estilo de vida para probar un presupuesto más alto o
   más bajo?** Vea [La palanca](#the-lever-transforms-lifestyle-phases).
6. **¿Cómo responden el éxito y el patrimonio tardío cuando el gasto de jubilación sube o baja?**
   Vea [Pruebe esto](#try-this).
7. **¿En qué se diferencia cambiar el gasto de cambiar cuándo se jubila alguien?** Vea
   [Cómo se relaciona esto con el calendario de jubilación](#how-this-relates-to-retirement-timing).

</div>
</aside>

---

## La pregunta {#the-question}

Si subo o bajo el **gasto de estilo de vida**, en los años **Work**, en los años **Retire**, o en
ambos, ¿responde el plan de una forma que pueda **ver** (barras de flujo de caja, tasa de éxito,
patrimonio tardío)?

El gasto de vida es una de las pocas palancas que los hogares controlan de verdad en el día a día.
La edad de jubilación es difícil de mover. Unos pocos puntos porcentuales del presupuesto son una
conversación que puede tener este mes.

[[nav:transforms]] es donde vive ese análisis sin reconstruir el plan. Abra [[nav:transforms]],
cambie el importe de una fase **Lifestyle** bajo **Modificables**, y observe cómo se actualizan el
[[term:forecast]] y la [[term:simulation]], **original** frente a **modificado** lado a lado, para
ver cuánto gasto de más (o de menos) puede sostener la cartera.

---

## Qué significa «gasto de vida» en esta muestra {#what-living-spend-means-in-this-sample}

Springfield usa un patrón de flujo de caja **Lifestyle** con **dos fases**:

| Fase | Idea aproximada | Importe redactado (dólares de hoy) | Cuándo corre (en esta muestra) |
|------|-----------------|------------------------------------|--------------------------------|
| **Work** | Un presupuesto más alto mientras ambos ganan y ahorran | unos **$138,000**/año | Inicio del plan → **jubilación principal** de Homer (**2041**) |
| **Retire** | Un presupuesto más bajo y más estable cuando paran las nóminas, el mismo gasto de vida, reformulado para los años después del trabajo | unos **$92,000**/año | **2041** → fin del plan del hogar |

Los dos importes están escritos en dólares de hoy y la previsión los hace crecer, así que lo que
leerá en la tabla de flujo de caja en el relevo es mayor que esta tabla: el último año Work
(**2040**) factura unos **$200k** y el primer año Retire (**2041**) unos **$136k**. Los mismos dos
números, con quince años de crecimiento encima.

El propósito de esta lección es ver cómo una sola idea de gasto de vida puede modelarse como **dos
fases**, una antes de la jubilación y otra después, **unidas por esa fecha de jubilación**. Ese
enlace aparece como un control que puede mover en [[nav:transforms]] → **Modificables**.

---

## Dónde mirar {#where-to-look}

### Primero: cómo se modelaron los flujos de caja {#first-how-the-cash-flows-were-modeled}

Primero veremos cómo se modelaron los flujos de caja. Tenga presente que la aplicación
[[term:canvas]] no tiene que ocuparse de redactar flujos de caja como lo hace la aplicación de
**escritorio** completa. Usted explora una muestra de enseñanza en lugar de construir cada línea.
Aun así, ayuda ver cómo se armó el gasto de vida de esta lección.

El flujo de caja del gasto de vida está aquí partido en **dos piezas separadas, pero enlazadas**.
La forma más fácil de verlo es abrir [[nav:dossier]] → [[nav:birds-eye]] y
[[term:hover|pasar el cursor sobre]] las dos salidas relacionadas **Lifestyle (Work)** y
**Lifestyle (Retire)**. Asegúrese de que [[nav:cash-flow]] está seleccionado en [[nav:birds-eye]]
para que esos flujos aparezcan en el lado de **Pasivos** de las tablas:

[[img:springfield-living-spend-birds-eye-cf-table]]

*[[nav:path:birds-eye|cash-flow]] seleccionado, con el acumulado **Σ** (suma de años) activo.
**Lifestyle (Retire)** y **Lifestyle (Work)** están arriba de **Pasivos**, la larga corriente de
salidas que este hogar está planificando, y las dos cosas más grandes de la hoja.*

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

Luego pase el cursor sobre cualquiera de las dos. Ambas filas salen de un solo concepto de gasto
de vida con dos fases, así que ambas abren la misma tarjeta:

[[img:springfield-living-spend-lifestyle-work-hover]]

*La tarjeta **Lifestyle**. **Valor del flujo** lista las dos fases que produce el concepto:
**Work** para **2027–2040** y **Retire** para **2041–2069**. **Fase 1** y **Fase 2**, debajo, dan
el importe anual de cada fase, sus años activos y el crecimiento de su gasto. Los años de cada
fase están atados a acontecimientos vitales con nombre, así que Work se detiene en la jubilación
de Homer y Retire empieza ahí.*

En el gráfico de trayectoria de abajo, la fase Work se dibuja para los años **antes** de la
jubilación, y la fase Retire retoma **donde el trabajo lo dejó**. Las dos filas cuentan una sola
historia enlazada.

### Proyectado — [[nav:forecaster]] (ya poblado) {#projected-navforecaster-already-populated}

En el **Detalle de previsión**, las pastillas controlan qué tarjetas aparecen (orden de la barra:
[[nav:bs-chart]] → [[nav:bs-table]] → [[nav:cf-chart]] → [[nav:cf-table]]). **Para esta lección,
seleccione esas cuatro** y deje apagados Impuestos / Ventas e inversiones / Conciliación, salvo
que quiera profundizar.

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Vista previa | Lugar | Qué notar en el gasto de vida |
|--------------|-------|-------------------------------|
| [[img:sfb-bs-chart|preview]] | [[nav:bs-chart]] | Si un gasto más alto erosiona los saldos más deprisa en los años de retiro. |
| [[img:sfb-bs-table|preview]] | [[nav:bs-table]] | Las cuentas del año seleccionado y el patrimonio neto tras un cambio de gasto. |
| [[img:sfb-cf-chart|preview]] | [[nav:cf-chart]] | Pilas de salidas a lo largo de los años; el relevo cerca de la jubilación. |
| [[img:sfb-cf-table|preview]] | [[nav:cf-table]] | Año seleccionado: la línea de estilo de vida frente a ingresos y otros gastos. |
| [[img:sfb-nw-distribution|preview]] | **Distribución del patrimonio neto** | La nube del Resumen de simulación y la tasa de éxito (Plata). |
| [[img:sfb-key-forecasts|preview]] | **Previsiones clave** | Mín / [[term:gmf]] / Máx tras un cambio de gasto. |

El detalle y el Resumen de simulación ya están a la vista. **Re-simule** después de una
transformación cuando quiera una comparación fresca de muchas trayectorias. Desplace **Año** a
través del relevo Work → Retire.

**¿Qué trayectoria está mirando?** Las tarjetas año a año muestran una previsión cada vez, elegida
con el control **FID**. **FID 0** es la trayectoria de referencia, la única previsión en la que
cada posición crece a su tasa esperada cada año, sin una década de suerte y sin un desplome, y el
producto la llama [[term:fid-gmf]]. Cualquier otro número de FID es una sola trayectoria
aleatoria de la simulación. Quédese en FID 0 mientras mueve una palanca, para que lo que cambie
en pantalla sea la palanca y no la suerte. Cambie de FID solo cuando quiera recorrer otras
trayectorias.

---

## La palanca: Transformaciones → fases Lifestyle {#the-lever-transforms-lifestyle-phases}

Abra [[nav:transforms]] → Modificaciones.

1. En **Modificables**, seleccione el concepto **Lifestyle** (el generador de fases de gasto de
   vida), no Fin de previsión (eso era jubilación y muerte) y no una sola fila de persona para
   esta lección.
2. Debería ver controles de **importe anual por fase** (por ejemplo **Work** y **Retire**).
3. Cambiar el importe de una fase añade la edición al **Conjunto de cambios** de forma automática.
4. Los gráficos y las tablas deben **actualizarse en vivo** mientras mueve un control.
5. **Re-simule** cuando quiera el original y lo modificado en [[term:monte-carlo|Monte Carlo]]
   lado a lado.

[[jump:transforms]]

**Marco honesto:** estos controles muestran qué le hace un estilo de vida más alto o más bajo a
*este* plan bajo *esta* definición de éxito. No son un consejo sobre lo que «debería» gastar.

---

## Pruebe esto {#try-this}

Trabaje en el plan Springfield de la derecha.

1. Abra [[nav:forecaster]] → Resumen de simulación. Anote el éxito bajo **Plata**, cerca del
   **65 %** en este plan, un casi fallo, que es justo lo que hace visible la palanca, y una idea
   aproximada del [[term:terminal-wealth]] (**solo dirección y orden de magnitud**).

   > **Sobre la fila Baja (P10).** En este plan se lee como un negativo profundo, millones por
   > debajo de cero. No es un saldo que nadie tendría. Es cómo el modelo lleva la cuenta una vez
   > que a una trayectoria se le acaba el dinero. Por debajo de cero el plan sigue pidiendo
   > prestado a su [[term:cost-of-capital]] en lugar de detenerse, así que un P10 tan por debajo
   > mide *cuánto le falta* al peor décimo de las trayectorias, no lo que un hogar tendría de
   > verdad. Lea el signo y la distancia, no la cifra.

2. Abra [[nav:cf-chart]] / [[nav:cf-table]]. Desplace **Año** hasta **2040**, el último año Work.
   **Lifestyle (Work)** ronda los **$200k**. Luego **2041**, la jubilación de Homer y el primer
   año Retire. **Lifestyle (Retire)** ronda los **$136k**, y el ingreso del trabajo de Marge sigue
   ahí. Ese escalón hacia abajo en el relevo es la forma de dos fases.
3. Abra [[nav:transforms]] → Modificaciones. Seleccione **Lifestyle**. Los dos controles leen
   **Work $138,000** y **Retire $92,000**, los importes redactados en dólares de hoy. Si los suyos
   leen otra cosa, ya hay un cambio en el Conjunto de cambios. Reviértalo primero.
4. **Suba Retire a $110,000**, cerca de un quinto más. Observe [[nav:cf-chart]] y el detalle del
   balance **en vivo**: en **2041** la línea Lifestyle (Retire) debería leer ahora unos **$163k**
   en lugar de $136k. Espere más tensión sobre la cartera en los años de [[term:drawdown]].
5. **Re-simule**. Compare el éxito y el patrimonio tardío, original frente a modificado. Espere una
   dirección **más dura**, porque subió el gasto de jubilación sobre una base que ya era un casi
   fallo.
6. **Baje Retire a $80,000** (revierta primero, o arrastre el mismo control a través de la base).
   Espere alivio en el éxito y el patrimonio final. Lea igual los gráficos. Los impuestos y los
   rendimientos de la inversión importan.
7. Opcional: empuje la fase **Work** hacia arriba o hacia abajo mientras Retire se queda fijo. Los
   años de trabajo todavía tienen doble [[term:earned-income]]. La historia es «¿pueden ahorrar
   más o menos mientras ganan?», no solo el retiro de la jubilación.
8. Opcional: vuelva a [[nav:path:birds-eye|cash-flow]] y pase el cursor sobre Lifestyle después de
   un cambio, la definición frente a la trayectoria proyectada en el Previsor.

[[jump:birds-eye]]

Los objetivos en dólares de arriba están para que compruebe que está en los mismos números que
este texto, no porque $110,000 signifique algo por sí solo. Lo que hay que llevarse es la
dirección: gasto de jubilación arriba, éxito abajo; gasto de jubilación abajo, éxito arriba.

---

## Cómo se relaciona esto con el calendario de jubilación {#how-this-relates-to-retirement-timing}

| Lección | Palanca principal |
|---------|-------------------|
| [El hogar Springfield](/learn/springfield_baseline) | **Cuándo** termina el trabajo (jubilación en **Fin de previsión**) |
| **Esta lección** | **Cuánto** cuesta el estilo de vida (fases **Lifestyle** Work / Retire) |

Las dos pueden mover el éxito y el patrimonio final. Son **conversaciones distintas**: años de
ingresos frente a dólares de consumo. En una planificación real a menudo se tocan las dos. Aquí
mantenemos una sola palanca a la vista.

---

## Adónde ir después {#where-to-go-next}

| Tema | Lección / muestra |
|------|-------------------|
| Orientación y calendario de jubilación | [El hogar Springfield](/learn/springfield_baseline) |
| Mapa de la aplicación (si se pierde) | [Orientarse en la aplicación](/learn/getting_around) |
| Con hipoteca o pagada | [Con hipoteca o pagada](/learn/mortgage_on_vs_paid_off) |
| Qué significa «el éxito» (niveles) | [¿Qué significa el éxito?](/learn/springfield_success) |
| Momento de solicitud del Seguro Social | [Solicitar pronto o vivir mucho](/learn/springfield_claim_longevity) |

---

*Las cantidades son ilustrativas. Lo que enseña la lección es el mecanismo y la dirección en la que mueve cada palanca.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
