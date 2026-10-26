<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/getting_around.es.md
tutilis-locale: es translated
-->
# Orientarse en la aplicación

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Reading Lesson (Getting Around)
  document-id: getting_around
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English Getting Around lesson. Same image ids; the page serves name.es.png when that snapshot exists.
  port-source: dossiers/getting_around.md
  source-file: getting_around.md
-->

<!--- α <lesson_body> -->
**Empiece aquí.** Esta página es un **mapa de la aplicación**: qué botón lleva adónde y para qué
sirve cada zona. No es una lección de finanzas, y no está pensada para leerse de principio a fin.
Cada encabezado de abajo es una fila que puede abrir. Abra la que necesite y ciérrela otra vez.

¿Prefiere verlo? La [Lección en vídeo (Orientarse)](/learn/getting_around_screencast) recorre el
mismo mapa en unos minutos.

El [[term:live-plan]] junto a esta lección es el hogar **Springfield**, el mismo reparto que se usa
en [Conozca al hogar Springfield](/learn/springfield_baseline). Aún no necesita entender su dinero.
Trátelos como un ejemplo completamente cargado, para que cada panel tenga algo real que mostrar.
Las muestras de aquí son de **solo lectura**. Los qué pasaría si pasan por [[term:transforms]], no
por reescribir Springfield línea por línea.

---

## Haga sitio primero {#make-room}

El plan junto a una lección es la aplicación entera, así que es denso. Puede hacer sitio. Cada
barra tiene un pequeño asidero azul en el borde, con una flecha. Haga clic en un asidero para
guardar su barra, y haga clic otra vez para traerla de vuelta. Un asidero dice lo que hace solo
cuando deja el puntero encima, como este del encabezado:

[[img:ga-header-handle|control]]

Hay cuatro asideros. **Ocultar navegación** guarda la columna de botones de área de la izquierda
(la [barra de navegación](#main-navigation)). **Ocultar controles de encabezado** guarda el
encabezado de la parte superior. **Ocultar barra de herramientas** guarda la barra de la parte
inferior. **Ocultar Acerca de este dossier** guarda el panel de la derecha en la vista del hogar,
en [[nav:dossier]]. Ese panel empieza guardado, salvo que el plan tenga un problema. En ese caso
se abre solo y su asidero se pone rojo o ámbar. Nada de lo que guarda se pierde, y el plan sigue
como estaba.

Deje abierta la columna de botones de área mientras sigue una lección. Las lecciones le dicen
dónde hacer clic nombrando esos botones.

Una forma de trabajar le sirve a la mayoría de las personas. Arrastre el divisor para que la
lección quede estrecha y apartada. Luego mire el plan y haga clic en una cosa cada vez para ver
qué hace. La muestra es de solo lectura, así que nada de lo que pulse puede estropearla.

---

## Qué va a aprender

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al terminar esta lección debería poder responder estas preguntas. Cada una enlaza con la sección
que la responde.

1. **¿Cuáles son las áreas de la barra de navegación y para qué sirve cada una?** Vea
   [La barra de navegación](#main-navigation).
2. **¿Dónde se recorren las personas, las cuentas y los flujos de caja del hogar?** Vea
   [Dossier](#dossier).
3. **¿Cómo se ve el hogar entero de un vistazo desde cualquier sitio de la aplicación?** Vea
   [Vista general](#birds-eye).
4. **¿Dónde se cambian las reglas con las que se ejecuta la previsión, como el crecimiento y los impuestos?** Vea
   [Supuestos](#assumptions).
5. **¿Cómo se ejecuta el plan hacia adelante y se lee una trayectoria, o mil de ellas?** Vea
   [Previsor](#forecaster).
6. **¿Cómo se prueba un cambio de qué pasaría si sin tocar el plan base?** Vea
   [Transformaciones](#transforms).
7. **¿Qué hacen las herramientas de la barra inferior?** Vea [La barra inferior](#bottom-bar).
8. **¿Cómo se amplía, se hace zoom o se abre un gráfico que resulta difícil de leer?** Vea
   [Controles de los gráficos](#chart-chrome).

</div>
</aside>

---

## La barra de navegación: siete áreas {#main-navigation}

En el borde izquierdo hay una columna de iconos. Haga clic en uno y el panel principal **se
convierte** en esa área. Cambia el foco del espacio de trabajo, en lugar de apilar editores sin
relación en una sola pantalla.

| Área | Para qué sirve |
|------|----------------|
| [[nav:dossier]] | Donde se define el hogar: personas, activos y pasivos, flujos de caja. [Más](#dossier) |
| [[nav:assumptions]] | Las reglas con las que se ejecuta la previsión: impuestos, movimientos de dinero, conversiones Roth y qué cuenta como éxito. [Más](#assumptions) |
| [[nav:risk]] | Cómo se sitúan las participaciones y las categorías en riesgo frente a rentabilidad. Útil más adelante; sáltelo en una primera pasada. |
| [[nav:forecaster]] | Ejecute el plan año a año y resuma mil previsiones en una probabilidad de éxito. [Más](#forecaster) |
| [[nav:transforms]] | Cambios de qué pasaría si sobre una **copia** del plan, leídos frente al original. [Más](#transforms) |
| [[nav:region]] | El mismo plan como si viviera en otro lugar. Hoy, estados de EE. UU. [Más](#region) |
| [[nav:guardrails]] | Reglas publicadas de retiro dinámico, comparadas una junto a otra sobre una trayectoria compartida. Es determinista y local: no escribe nada en su plan. |

**Hay un área que no está en la barra.** [[nav:birds-eye]] está en la **barra superior**, y solo
cuando está fuera del Dossier. Vea [Vista general](#birds-eye).

En la parte **inferior** hay herramientas pequeñas que se abren **sobre** su trabajo, en lugar de
sustituirlo. Vea [la barra inferior](#bottom-bar). **Ayuda**, **Reach Out** y **Avanzado** son la
excepción: están al pie de la propia barra, no en la barra inferior.

---

## [[nav:dossier]] — dónde se define el hogar {#dossier}

[[nav:dossier]] guarda los datos de origen del plan: personas, activos y pasivos, flujos de caja.
[[nav:birds-eye]] va incrustada en la parte superior, así que al llegar aquí ve todo lo que se
introdujo.

**En estas lecciones no va a teclear datos financieros.** El hogar Springfield ya está construido
para enseñar, y usted lo lee. Cuando una lección quiere un cambio, lo envía a [[nav:transforms]].
En la aplicación de escritorio es al revés: el Dossier es donde se introduce su plan real y se
mantiene al día.

En el día a día, un plan que ya está introducido no necesita muchas visitas. Su balance general no
se reescribe solo de la noche a la mañana. Lo que cambia son sus preguntas, y esas viven en
[[nav:forecaster]], [[nav:transforms]] y [[nav:region]]. [[nav:birds-eye]] es como comprueba «¿qué
puse?» sin salir de ellas.

---

## [[nav:birds-eye]] — el hogar en una ventana emergente {#birds-eye}

El hogar entero de un vistazo: personas, activos y pasivos, la serie de flujos de caja y una línea
de tiempo de acontecimientos de la vida.

Como **ya va incrustada en la parte superior de [[nav:dossier]]**, el control no aparece mientras
está ahí. En cualquier otro sitio es un botón de la **barra superior** que abre una **ventana
emergente** sobre lo que está haciendo. Consulte algo, ciérrela, y su trayectoria, su año y el foco
del gráfico siguen exactamente donde los dejó.

**Pruébelo:** haga clic en [[nav:forecaster]] en la barra y observe cómo [[nav:birds-eye]] aparece
en la barra superior.

[[jump:birds-eye]]

### Qué contiene {#birds-eye-what-you-will-see}

**Personas.** Aquí ve quién está en el hogar, los años de nacimiento, la jubilación y la
longevidad, y los roles. [[term:hover|Pase el cursor sobre]] una persona para ver las edades que el modelo le
asigna. Springfield tiene una **jubilación escalonada**: Homer y Marge dejan de trabajar en años
distintos, y eso se ve como tramos de [[term:earned-income]] de distinta longitud en la línea de
tiempo.

**Activos y pasivos.** Cuentas, participaciones, la casa y las hipotecas. En Springfield la casa se
llama **Evergreen Terrace**, para que pueda encontrarla rápido.

[[img:ga-birds-eye-assets-liabilities]]

**Flujos de caja.** La lista de series recurrentes: salarios, fases de estilo de vida, Seguro
Social, sanidad y servicio de la deuda. La mayoría son **patrones** («ingreso del trabajo hasta que
esta persona se jubila») y no un importe tecleado cada año. Expandirlos es como el Previsor dibuja
gráficos de varias décadas.

**Acontecimientos de la vida.** Años de trabajo, tramos de jubilación, marcadores de solicitud y
acontecimientos puntuales, por persona. Es la respuesta rápida a cuándo se acaba el trabajo y si el
ingreso se alinea con eso.

### Los tres chips de modo {#birds-eye-modes}

[[nav:path:account|holding|cash-flow]]

[[nav:account]] y [[nav:holding]] dan un balance general ordinario. [[nav:cash-flow]], a menudo el
predeterminado en las muestras didácticas, teje el movimiento recurrente de dinero **dentro** de
esa imagen. Las entradas se leen con **Activos**, las salidas con **Pasivos**, y la insignia **Σ**
resume una serie de varios años en una sola cifra de valor actual, en el lado que corresponde.

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

Eso no es, a propósito, la contabilidad de un contable. Un balance general no trata las nóminas
futuras como activos. El objetivo aquí es la intuición de planificación: poner «lo que financia la
vida» junto a «lo que tenemos», y «lo que tenemos que pagar» junto a «lo que debemos». Vuelva a
[[nav:account]] cuando quiera la vista convencional.

---

## [[nav:assumptions]] — las reglas con las que se ejecuta la previsión {#assumptions}

La otra mitad de las entradas del plan, junto a los datos del hogar. Es de **lectura y escritura**,
también aquí en el Centro de aprendizaje cuando quiera experimentar.

[[img:ga-assumptions]]

La mayoría de los planes solo necesitan los cuatro controles de esta página:

| Control | A grandes rasgos… |
|---------|----------|
| **Estado de residencia** y **Estado civil fiscal** | Qué reglas fiscales aplica la previsión. |
| **Estrategia de movimientos de dinero** | Qué ocurre con el efectivo sobrante y cómo se financian los déficits desde la cartera, incluida una senda de inversión. |
| **Conversión Roth** | Si cada año se traslada a Roth una parte de un saldo antes de impuestos, y cuánto. |
| **Definición de éxito** | Qué previsiones cuentan como un éxito, lo que convierte las trayectorias en una tasa de éxito. |

Todo lo demás usa valores predeterminados que ya se han comprobado, y **Mostrar todos los
supuestos** los abre para leerlos.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Usuario avanzado</p>
<div class="lesson-power-user-body">

Un **Usuario avanzado** (se activa en [[nav:advanced]] → Ajustes de la aplicación) tiene en su
lugar el panel completo en pestañas, donde se pueden fijar las tasas de crecimiento, las
[[term:correlation\|correlaciones]] y las monedas del plan. Aquí están los Supuestos del mismo plan
con Usuario avanzado activado, abiertos en la pestaña Crecimiento.

[[img:ga-assumptions-power]]

</div>
</aside>

No necesita dominar ninguno de estos para seguir las lecciones. Cuando uno importa, la lección
nombra el control y lo enlaza. Las tablas publicadas del [[term:cliff|umbral del MAGI]]<!-- term-skip: magi — one pill for the phrase "MAGI cliff" --> ([[term:irmaa]], [[term:niit]]) son
**ley, no un ajuste del plan**. Viven en la herramienta **Referencia**.

---

## [[nav:forecaster]] — proyectar el futuro {#forecaster}

Dos tareas comparten esta área, en un separador que puede arrastrar para que una u otra domine:

- **Detalle de previsión.** Una trayectoria, un año y cada superficie de la proyección.
- **Resumen de simulación.** Muchas trayectorias, a menudo cerca de mil, resumidas en una
  distribución y una probabilidad de éxito.

### Elegir lo que mira {#controlling-what-you-see}

| Control | Qué elige |
|---------|---------------|
| **ID de previsión (FID)** | Qué **trayectoria única** de la nube muestra el Detalle. **0** es la trayectoria representativa [[term:gmf\|GMF]]: una estrella polar estable, no una predicción. |
| **Año** | Qué año llena las tablas y las tarjetas acotadas al año. Los gráficos siguen mostrando todo el horizonte. |
| **Chips** | Qué tarjetas aparecen. Apague lo que no esté explorando. |
| [[nav:year-axis]] | En un gráfico, etiqueta la línea de años como años de calendario o como la edad de una persona. No cambia el año seleccionado. |

Bajo la etiqueta **FID**<!-- term-skip: fid — this paragraph explains the control --> hay una franja de marcas de color. Son **saltos rápidos** a las previsiones clave de la previsión,
ordenados de peor a mejor, con la **✦** dorada (el GMF) en ese orden y no apartada a un lado. No
están colocados en sus números de previsión: un ID es un nombre, no una medida.

[[jump:fid]]

[[img:ga-fid-quick-jumps]]

Acostúmbrese a usarlos. Empiece en la **✦**, avance a la izquierda hacia Mín y a la derecha hacia
Máx con los mismos chips y el mismo año, y sentirá la **dispersión** de la nube en lugar de solo
su centro.

### Los chips, una línea cada uno {#forecast-detail}

El núcleo es [[nav:path:bs-chart|bs-table|cf-chart|cf-table|si-chart|si-table|rec]].
La lente fiscal es [[nav:path:taxes|cliffs|brackets]].

[[img:std-forecaster-chip-bar]]

| Chip | Muestra |
|------|-------|
| [[nav:bs-chart]] | Activos por encima de la línea y pasivos por debajo, año a año. La **línea neta** negra y gruesa es el patrimonio neto. |
| [[nav:bs-table]] | El balance general del año seleccionado. |
| [[nav:cf-chart]] | El dinero que entra por encima de la línea y el que sale por debajo, por categoría. La línea neta negra y gruesa es el flujo de caja neto. |
| [[nav:cf-table]] | Ingresos, gastos, impuestos y disposición neta del año seleccionado. |
| [[nav:si-chart]] | Lo que se vendió, se invirtió o se pidió prestado a lo largo de los años. |
| [[nav:si-table]] | Operaciones a nivel de participación del año seleccionado, con un **Por qué** para cada una. |
| [[nav:taxes]] | Lo que el año debía en realidad, federal y estatal. El impuesto sobre las ganancias de un año se paga ese mismo año, pero el resto de su liquidación **se paga al año siguiente**, así que no tiene por qué coincidir con la línea de Impuestos del flujo de caja de ese año. |
| [[nav:rec]] | La prueba de que el año cuadra: las fuentes de efectivo igualan los usos. Ábrala cuando un año del flujo de caja parezca mal. |
| [[nav:brackets]] | El ingreso de un año apilado en los tramos ordinarios, y el **margen que queda** bajo un tope que usted elige. |
| [[nav:cliffs]] | Lo cerca que queda el año de cada umbral modelado — el suelo del [[term:niit]], la línea de IRMAA — a lo largo de todo el horizonte. |

### Las cuatro superficies centrales {#core-surfaces}

[[img:sfb-bs-chart]]

[[img:sfb-bs-table]]

[[img:sfb-cf-chart]]

[[img:sfb-cf-table]]

Pase el puntero por un año en cualquiera de los dos gráficos para ver el desglose. **Haga clic** en
un año para cargarlo en las tablas.

### Ventas e inversiones {#sales-and-investments}

[[img:ga-si-chart]]

[[img:ga-si-table]]

En los años de [[term:drawdown]], estas vistas responden **qué** cuentas financiaron el gasto y bajo
qué regla: [[term:rmd]] frente al residual a prorrata frente al orden de cuentas fiscales. Pase el
puntero por un **Nombre** para ver el detalle completo, incluido el valor anterior.

### La lente fiscal {#tax-lens}

[[img:ga-brackets]]

[[img:ga-cliffs]]

Ambas están fijadas en **2038**, un año que tiene algo que decir. La tarjeta de tramos muestra
cuánto ingreso ordinario aún cabe bajo el tope que usted elige. El radar nombra los umbrales que de
verdad están **en juego** ese año, cuánto se pasa el año de la línea y qué cuesta cruzarla.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__brackets]]

[[jump:cliff-radar]]

### Resumen de simulación {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

La otra mitad del separador responde a preguntas distintas: la forma del **patrimonio neto
final**, la **tasa de éxito** según su definición de éxito y las **Previsiones clave** (Mín,
cuartiles, media, Máx y GMF). Haga clic en una fila clave y el Detalle de previsión enfoca esa
trayectoria, para que pueda ir a leer *por qué* fue extrema.

[[jump:key-forecasts]]

Lea la **dispersión**, no una sola fila. Y fíjese más en la **dirección** en la que un cambio mueve
la tasa de éxito que en el porcentaje en sí.

---

## [[nav:transforms]] — pruebe un cambio sin estropear el plan base {#transforms}

[[img:working-fast-transforms-sections|control]]

1. Abra **Modificaciones**.
2. Elija algo en **Modificables**. A menudo es una persona, o un elemento de flujo de caja como el
   ingreso del trabajo.
3. Edite un control: el año de jubilación, los años activos o el gasto. Editarlo **es** añadirlo al
   **Conjunto de cambios**. No hay un paso aparte de «añadir».
4. Los gráficos y las tablas se actualizan **en vivo**, así que vea cómo reacciona el plan antes de
   cualquier nueva simulación.
5. Pulse **Re-simular** cuando quiera la comparación completa de original frente a modificado.

[[jump:transforms]]

Transformaciones sirve para explorar, y es la herramienta adecuada para un «qué pasaría si» incluso
en la aplicación de escritorio, donde el Dossier guarda sus datos reales.

---

## [[nav:region]] — el mismo plan en otro lugar {#region}

Comparación al estilo del coste de la vida: qué aspecto tendría este plan si el hogar viviera en
otro lugar. Hoy eso significa **estados de EE. UU.** Otros países quedan para más adelante. Acuda
a esta área cuando la pregunta sea sobre el **lugar**, no sobre la matemática de la cartera.

[[img:ga-region-sections|control]]

---

## La barra inferior: herramientas que se abren sobre su trabajo {#bottom-bar}

Vienen en tres grupos, y el agrupamiento es lo importante. Cada grupo responde a un tipo distinto
de pregunta.

[[img:ga-tools-bar|control]]

| Herramienta | Función |
|------|------|
| [[nav:fx]] | Moneda de visualización y tipos de cambio. |
| [[nav:growth]] | Calculadora de crecimiento, a modo de bloc de notas. |
| [[nav:annuity]] | Explorador de [[term:annuity\|renta vitalicia]], a modo de bloc de notas. |
| [[nav:peek]] | Un menú con tres vistas del Detalle de previsión, cada una abierta sobre la aplicación. [[nav:charts]] muestra todos los gráficos, [[nav:tables]] muestra todas las tablas y [[nav:pairs]] muestra cada gráfico junto a su tabla. Su selección de chips no cambia. |
| [[nav:reference]] | Cada tabla, tasa y regla publicada con la que se ejecuta la previsión. Se puede buscar, con su fuente y sus límites. Solo lectura. |
| [[nav:glossary]] | Qué significan las palabras. Es el mismo libro que Referencia, en la gama de colores fríos, porque son el mismo tipo de cosa: Referencia guarda los números publicados y el Glosario guarda el vocabulario. |

**Ayuda no está aquí abajo.** Está en la **barra de navegación**, al pie, junto a **Reach Out** y
**Avanzado**.

### Dos hábitos que conviene aprender una vez {#two-habits}

**Copiar.** El icono de dos páginas superpuestas, en los encabezados de los gráficos, en las tablas
y en muchas listas, pone datos Markdown o de imagen en el portapapeles. Está en las salidas
generadas *y* en entradas como las tablas fiscales y los supuestos de crecimiento, a propósito.
Péguelos en unas notas o en un chat, en lugar de volver a teclearlos desde una captura de pantalla.

**Mantenga pulsada Alt para silenciar las sugerencias.** Las explicaciones al pasar el puntero
están en todas partes. Eso es lo que quiere mientras aprende, y no lo que quiere mientras presenta.
Mantener pulsada **Alt** las suprime mientras la mantiene. Si el valor predeterminado le resulta
demasiado hablador, el pequeño círculo relleno o vacío junto al control de tema invierte la regla,
de modo que las sugerencias aparecen **solo** mientras Alt está pulsada. Las pistas cortas de los
botones de icono, y el texto que revela una etiqueta recortada, se muestran siempre de un modo u
otro. Una etiqueta ilegible es un callejón sin salida, no una distracción.

---

## Controles de los gráficos: Ampliar, zoom y Revelar {#chart-chrome}

Los gráficos y las tarjetas de distribución comparten un pequeño grupo de controles. Pase el
puntero por cualquier icono para ver su pista.

| Control | Dónde | Qué hace |
|---------|-------|--------------|
| **Ampliar** | La mayoría de las tarjetas de gráficos y de tablas | Abre esa vista en grande, sobre la aplicación. Las pistas al pasar el puntero siguen funcionando. Ciérrela con **Esc**, un clic fuera o **✕**. |
| **Zoom vertical** | [[nav:bs-chart]], [[nav:cf-chart]] | Amplía las barras altas para que los años pequeños se puedan comparar. Todo a la izquierda es 1×. |
| **Revelar** | Distribución del patrimonio neto | Abre la masa de puntos cuando unos pocos finales extremos aplastan todo cerca de cero. |
| **Vincular revelación** | Dos distribuciones una junto a la otra | Activado por defecto, para que ambos gráficos sigan siendo comparables. Desactívelo para revelar cada lado por separado. |
| **Vincular escalas de gráficos** | Gráficos emparejados de balance general o de flujo de caja | Un solo eje Y compartido, escalado al lado más alto, para que el plan más pequeño se encoja a la vista en lugar de autoescalarse y parecer igual. |
| **Combinar gráficos** | Los mismos gráficos emparejados | Pliega ambos lados en un solo gráfico, con las barras una junto a la otra en una escala compartida. |

Ninguno de estos vuelve a ejecutar la simulación ni toca el plan. Solo cambian **cómo mira**.
Cuando el problema es en concreto una cola derecha larga, hay una lección para eso:
[Cuando la nube de resultados necesita Revelar](/learn/nw_distribution_compression).

---

## Centro de aprendizaje frente a la aplicación de escritorio {#layout}

Es el mismo producto, con las mismas áreas y las mismas etiquetas. Hay dos diferencias que conviene
conocer:

| | Centro de aprendizaje | Aplicación de escritorio |
|---|---|---|
| **Disposición** | El texto de la lección junto a un plan en vivo. Arrastre el divisor, o contraiga el encabezado para ganar altura | El plan a pantalla completa, sin panel de lección |
| **Dossier** | Las muestras son de solo lectura; usted las lee | Su plan real; usted lo introduce y lo edita |

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

El editor del Dossier, donde introduce sus propios datos financieros, solo está en la aplicación de
escritorio.

[[img:ga-desktop-dossier]]

La captura de escritorio muestra los controles de edición que el Centro de aprendizaje no necesita:
el **lápiz** junto a una persona y **+ Agregar persona**.

</div>
</details>

Los nombres de las áreas son idénticos, así que todo lo de esta página se traslada.

---

## Un recorrido de cinco minutos {#practice-tour}

1. [[nav:dossier]]. Recorra la muestra y lea [[nav:birds-eye]] en la parte superior.
2. En [[nav:birds-eye]], alterne entre [[nav:account]] y [[nav:cash-flow]], y pruebe **Σ**.
3. Haga clic en [[nav:forecaster]] en la barra. Observe cómo [[nav:birds-eye]] pasa a la barra
   superior. Ábrala, ciérrela y note que nunca salió del Previsor.
4. En el **Detalle de previsión**, deje encendidos solo [[nav:bs-chart]] y [[nav:cf-chart]], y
   luego mueva **Año**.
5. Haga clic en la marca de salto rápido de más a la izquierda (roja), bajo **FID**, para caer en
   la peor trayectoria, y luego en la **✦** dorada para volver.
6. [[nav:transforms]] → **Modificaciones**. Mueva un poco un año de jubilación y vea cómo los
   gráficos reaccionan en vivo. Salga sin volver a simular si solo quería el mapa.

---

## Adónde ir después {#where-to-go-next}

| Orden | Lección |
|-------|--------|
| **0 (usted está aquí)** | Orientarse en la aplicación |
| **1** | [Conozca al hogar Springfield](/learn/springfield_baseline) |
| **Más adelante** | Gasto de vida, contraste de hipoteca, definiciones de éxito, solicitud del Seguro Social, estrategia de retiro, profundización en los supuestos |

Las lecciones posteriores apuntan de vuelta aquí con recordatorios cortos de «dónde», en lugar de
volver a enseñar el mapa.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
