<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/getting_around.es.md
tutilis-locale: es translated
-->
# Cómo moverse por la aplicación

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Getting around the app
  document-id: getting_around
  locale: es
  lifecycle: Initial
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported locale twin from public dossiers/getting_around.es.md
  port-source: dossiers/getting_around.es.md
  source-file: getting_around.md
-->

<!--- α <lesson_body> -->
**Empiece aquí** si es su primera vez con el Learning Center o con el planificador de escritorio.

Esto no es una lección de finanzas. Es un mapa de **dónde viven las cosas** para que las lecciones
posteriores puedan decir «abra Forecaster → Simulation Summary» y usted ya conozca el camino. Los
iconos de ayuda (**?**) en los paneles profundizan cuando lo desee; esta página es el **tour que se
recorre antes de tener curiosidad o de quedarse atascado**.

El plan en vivo a la derecha es el hogar **Springfield** — el mismo elenco que se usa en
[Meet the Springfield household](/learn/springfield_baseline). No necesita entender todavía su
dinero; trátelos como un ejemplo completamente cargado para que cada panel tenga algo real que
mostrar.

**Nota:** Lo que ve a la derecha es nuestra aplicación de planificación financiera, entregada aquí
en el **navegador**. Es la **misma aplicación** que el producto de escritorio — las mismas áreas,
las mismas etiquetas, los mismos gráficos. Todo el recorrido de abajo aplica a **ambos** mecanismos
de entrega. La diferencia importante en este shell del Learning Center es que el canvas web **no**
le permite **editar el dossier** como lo hace el escritorio. Las lecciones se entregan con sus
propios datos para que pueda explorar sin reconstruir el hogar a mano.

Aquí está la app de **escritorio** en un hogar de ejemplo — notablemente similar al
plan de la derecha:

[[img:ga-desktop-dossier]]

**Un par de diferencias a notar:** primero, las tarjetas de la izquierda en la app de escritorio —
**People**, **Balance Sheet** y **Cash Flows** — están ahí **para editar**: elija una sección y
luego cambie el hogar. Segundo, en la imagen de escritorio sigue viendo controles de **edición**
(el **lápiz**) junto a las personas, y **+ Add person** para agregar miembros del hogar. Aquí no
dependerá de esos. Los dossiers del Learning Center cuentan una **historia educativa**; usamos el
plan tal como está cargado y conducimos los qué-pasaría-si principalmente a través de [[nav:transforms]]
(más inspección de solo lectura), no reescribiendo Springfield línea por línea.

En el escritorio, abra el catálogo de muestras y elija **Springfield Baseline** para el mismo hogar
a pantalla completa. No hay un dossier aparte de «Cómo moverse» — esta página es solo prosa de
lección; el canvas reutiliza Springfield.

---

## Cómo está dispuesto el Learning Center {#layout}

| Panel | Rol |
|------|------|
| **Izquierda** | Prosa de la lección (este documento) |
| **Derecha** | Plan en vivo — la misma muestra de la que habla la prosa |
| **Cabecera** | Volver al catálogo (colapsable — ocúltela para liberar espacio vertical) |

Arrastre el divisor si quiere más espacio para leer o para los gráficos.

En la **app de escritorio** no hay panel de prosa a la izquierda: abre una muestra (o su propio plan)
y trabaja a pantalla completa. Los **nombres de las áreas** coinciden con lo que ve aquí.

---

<a id="global-chrome-copy-theme-and-tooltips"></a>

## Chrome global: copiar, tema y tooltips {#global-chrome-copy-theme-and-tooltips}

Tres hábitos aplican **en todas partes** de la app (escritorio y canvas del Learning Center).
Apréndalos una vez; los usará en cada lección posterior.

### Copie cualquier cosa útil (incluso hacia su configuración de IA) {#copy-anything-useful}

Nos esforzamos por que las **salidas generadas** sean fáciles de llevarse: gráficos, tablas,
resúmenes y superficies similares. El mismo espíritu aplica a **entradas y material de referencia**
— calendarios fiscales, supuestos de crecimiento y otros detalles del modelo — para que pueda
inspeccionar, pegar y comparar fuera de la app.

**Busque**
[[img:ga-copy-icon]]
— el control de **copiar** en encabezados de gráficos, tablas y muchas listas (dos páginas
superpuestas). Un clic pone Markdown o datos de imagen en el portapapeles para pegarlos en notas o
en un chat.

Si eso le ayuda a impulsar un **flujo de trabajo con IA** (pegar una tabla en un chat, guardar una
copia de un calendario junto a una pregunta), es intencional. Prefiera las facilidades de copiar del
producto antes que reescribir desde una captura de pantalla.

### Tema claro y oscuro {#light-and-dark-theme}

Los temas **claro** y **oscuro** se controlan desde el chrome de la **esquina superior derecha** del
plan en vivo (sol / luna). En una página de lección ese es el **único** control de tema: la cabecera
compacta sobre la prosa lleva la marca, el enlace de vuelta al catálogo y el selector de idioma — sin
sol / luna.

No hace falta un segundo. La página de lección **sigue al plan en vivo**: cambie el tema en la app y
la prosa lo acompaña, de modo que ambos paneles se mantienen sincronizados y nunca lee una lección
oscura junto a una app clara. La sincronización va en un solo sentido, de la app a la prosa. (En el
resto del sitio — inicio, precios, el índice `/learn` — la cabecera del sitio lleva su propio sol /
luna.)

La apariencia es solo una preferencia; no cambia la matemática del plan.

### Tooltips contextuales — y cuándo silenciarlos {#tooltips}

Para mostrar el mayor detalle posible sin saturar el diseño, dependemos mucho de **tooltips
contextuales**. Muchos aparecen al pasar el cursor por gráficos, tablas, filas y otros controles;
una gran parte de esos consejos también se pueden **copiar**. Algunas regiones de gráficos y tablas
existen principalmente para que el hover muestre ese detalle.

**Busque**
[[img:ga-help-question]]
— el **?** en muchos títulos de paneles y tarjetas. Ábralo para una breve explicación de esa
superficie. El hover sigue impulsando los tips más pequeños en filas, barras y puntos individuales.

Esa agresividad es excelente cuando está **aprendiendo** una superficie. Puede estorbar cuando está
**presentando** — guiando a alguien por un camino y los popups siguen disparándose al mover el
puntero.

**Mantenga Alt** mientras pasa el mouse sobre esos controles: con el ajuste predeterminado, los
tooltips **no** aparecen mientras Alt está pulsado. Ese es el silencio rápido y temporal para una
demo o un clic cuidadoso.

Si aún encuentra el predeterminado demasiado hablador, invierta la regla global. Junto al control
de tema claro/oscuro hay un pequeño **círculo relleno / vacío** (hover details). Haga clic para
cambiar el modo:

[[img:ga-hover-details-toggle]]

| Modo (tooltip en el control) | Hover normal | Mantener **Alt** al pasar el cursor |
|-------------------------------|--------------|-------------------------------|
| **Details on hover** (predeterminado) | Los tooltips se muestran | Los tooltips se mantienen **ocultos** |
| **Reversed** (después de alternar el círculo) | Los tooltips se mantienen **ocultos** | Los tooltips se **muestran** |

Así: el predeterminado es «ayúdame a menos que mantenga Alt». Invertido es «déjame en paz a menos
que mantenga Alt». Elija el modo que coincida con si está explorando o presentando; Alt siempre le
da lo opuesto con un solo gesto.

Una excepción deliberada: los tips **imprescindibles** ignoran todo esto y siempre se muestran. Son
las pistas cortas de una línea en botones de icono, y la revelación en una etiqueta demasiado
estrecha para caber su propio texto. Una etiqueta truncada sin forma de leerla es un callejón sin
salida, no una distracción — Alt silencia las tarjetas explicativas ricas, que son las que
realmente interrumpen una demo.

---

## La navegación principal {#main-navigation}

A la izquierda hay una **barra de iconos**.

**Áreas principales** (cada una toma el panel principal):

El primer icono es una **carpeta** — ese es [[nav:dossier]]. Debajo están las otras áreas mayores:
Assumptions, Risk, Forecaster, Transforms, Region.

Cuando elige un área, el **panel principal** se dedica a esa función. No apila editores no
relacionados en una sola pantalla; cambia el foco del espacio de trabajo.

| Área | Para qué sirve |
|------|----------------|
| [[nav:dossier]] | Donde se definen las finanzas del hogar — personas, activos y pasivos, flujos de efectivo. Vea [Dossier](#dossier) para lección vs escritorio. |
| [[nav:assumptions]] | Crecimiento, impuestos, política de vender e invertir, definición de éxito, localidad, moneda — las reglas bajo las que corre el pronóstico. **Lectura y escritura.** |
| [[nav:risk]] | Vistas analíticas de riesgo (cómo se sitúan holdings y categorías en riesgo/retorno). Útil más adelante; no es necesario para los primeros recorridos. |
| [[nav:forecaster]] | Dos trabajos: (1) ejecutar el plan año por año e inspeccionar cada superficie de proyección, y (2) **Simulation Summary** — muchas trayectorias resumidas en algo como una **probabilidad de éxito**. |
| [[nav:transforms]] | Cambios de qué-pasaría-si sobre una **copia** del plan; compare original vs modificado sin reescribir el dossier permanente. |
| [[nav:region]] | Explore el plan «como si» viviera en otro lugar (hoy: **estados de EE. UU.**; otros países son trabajo futuro). La etiqueta del riel es [[nav:region]]. |

**Herramientas** (debajo de los iconos de área; no reemplazan el panel principal de forma
permanente):

| Herramienta | Rol |
|------|------|
| [[nav:birds-eye]] | Resumen del hogar como **modal** (oculto mientras ya está en Dossier — vea más abajo). |
| **Growth** / **Annuity** | Calculadoras opcionales — bloc de notas; este recorrido no profundiza. |
| **Reference** | Cada tabla, tasa y regla publicada sobre la que corre el pronóstico — buscable, con su fuente y sus límites. Solo lectura. |
| **Help** | Mapa breve de la app y consejos. |

Los iconos de la tabla de áreas coinciden con el arte del riel (misma familia pastel-flat que la
navegación del producto).

---

## [[nav:dossier]] {#dossier}

El [[nav:dossier]] es donde se **definen** las finanzas del hogar — personas, activos y pasivos,
flujos de efectivo y el resto de los datos fuente del plan.

Cómo se comporta esa área depende un poco de **dónde** esté trabajando:

| Dónde está | Qué hace en Dossier |
|---------------|------------------------|
| **Estas lecciones / Learning Center** | Las finanzas ya se han **elaborado para enseñar una lección**. Principalmente las **ve** (y [[nav:birds-eye]] muestra la misma imagen). No se le pide escribir datos financieros. |
| **App de escritorio (su propio plan)** | **Ingresa y edita** información real — incorporación, luego actualizaciones cuando la vida cambia. Este es el plan durable que mantiene a lo largo del tiempo. |

Para el currículo: **no se requiere entrada de datos en el dossier.** Si una lección quiere un
cambio, normalmente lo enviará a [[nav:transforms]] (o nombrará un control de forma explícita), no le
pedirá reconstruir Springfield a mano.

### Cuándo abre realmente Dossier en el día a día {#dossier-day-to-day}

En la app de escritorio, [[nav:birds-eye]] es lo que ve al aterrizar por primera vez en Dossier después de
la incorporación — una vista rápida de todo lo que ingresó. Una vez que esos datos son estables, a
menudo **no** necesita Dossier todos los días: su balance general no se reescribe solo de la noche a
la mañana.

Lo que **sí** cambia día a día son sus **preocupaciones**, ideas de planificación y preguntas. Esa
exploración vive principalmente en [[nav:forecaster]], [[nav:transforms]] y [[nav:region]]. Aun así necesita una
forma de refrescar la memoria de «¿qué puse en el plan?» sin abandonar ese trabajo — eso es Bird's
Eye (siguiente sección).

---

## [[nav:birds-eye]] — el mismo contenido del hogar, como modal {#birds-eye}

[[nav:birds-eye]] es un icono de **herramienta** en la parte inferior del riel (con las calculadoras y
Help) — no uno de los iconos de área principal de arriba. Fuera de Dossier, abre un **diálogo
modal** sobre lo que esté haciendo.

**Importante:** Cuando está en el área [[nav:dossier]], el icono [[nav:birds-eye]] del riel **no** está
presente. Eso es intencional: el contenido de [[nav:birds-eye]] ya está **incrustado** en la parte superior
de Dossier, al frente y al centro. No hay razón para navegar a otro lado a ver lo que ya está
mirando.

**Pruebe esto:** haga clic en [[nav:forecaster]] en el riel — debería ver el icono [[nav:birds-eye]]
**aparecer** entre las herramientas. Haga clic en ese icono: obtiene la **misma información** que
está en la parte superior del área Dossier (personas, activos y pasivos, presentación de flujos de
efectivo, línea de tiempo de eventos de vida y resumen relacionado). Cierre el modal y sigue en
Forecaster, con el lugar intacto.

Describimos ese contenido del hogar **una sola vez**, más abajo — ya sea que lo encuentre incrustado
en Dossier o vía el modal desde Forecaster, Transforms o Region.

### ¿Por qué usar [[nav:birds-eye]] desde [[nav:forecaster]] / Transforms / Region? {#why-birds-eye-from-elsewhere}

Puede abrir [[nav:birds-eye]] **sin salir** del área en la que está. Busque una persona, una cuenta o la
línea de tiempo de eventos de vida, cierre el modal y **vuelva al mismo lugar** — control de año,
qué-pasaría-si o foco del gráfico intactos. No tiene que cambiar a Dossier y perder su lugar.

[[img:ga-birds-eye-from-forecaster]]

*[[nav:birds-eye]] como modal sobre [[nav:forecaster]] (herramienta del riel, no un área principal). Forecaster
se queda debajo; cierre el diálogo y sigue en la misma vista de pronóstico. Selector Account /
Holding / **Cash Flow** arriba; resumen del hogar y Assets & Liabilities abajo.*

**No** profundizaremos en las calculadoras Growth o Annuity en este recorrido; son blocs de notas
opcionales. La herramienta **Help** del riel las resume brevemente si las necesita más adelante.

### Lo que verá (personas, patrimonio, movimiento de dinero, eventos de vida) {#birds-eye-what-you-will-see}

> **Nota:** Si se fue a [[nav:forecaster]], ahora es un buen momento para volver a [[nav:dossier]] y poder
> seguir el [[nav:birds-eye]] incrustado en la parte superior de esa área.

#### People

Quién está en el hogar, años de nacimiento, supuestos de retiro y longevidad, y roles (primary /
secondary / dependent).

- **Pase el cursor** sobre una persona para un tip con edades modeladas y detalle relacionado.
- Las lecciones a menudo hablan de **retiro escalonado** — dos personas con edades de retiro
  **diferentes**, ambas visibles aquí. En Springfield también puede verlo en la línea de tiempo de
  eventos de vida: los tramos verdes de **ingreso ganado** de Homer y Marge terminan en años
  distintos porque dejan de trabajar a edades diferentes.

#### Assets & Liabilities

Cuentas, holdings, vivienda, hipotecas y otros ítems del balance — la vista familiar de «lo que
tenemos / lo que debemos» que muestran la mayoría de las herramientas de planificación. En
Springfield, la casa se llama **Evergreen Terrace** para que la encuentre rápido en la lista.

[[img:ga-birds-eye-assets-liabilities]]

*[[nav:birds-eye]] **Assets & liabilities** (modo Cash Flow en esta muestra): activos a la izquierda,
pasivos a la derecha, cifras estilo valor presente. Note los pequeños controles de **copiar** en
cada encabezado de columna — la misma familia que el hábito global de copiar de arriba.*

##### El control Cash Flow ([[nav:birds-eye]])

En la parte superior de [[nav:birds-eye]] verá un selector **Account / Holding / Cash Flow** (las
etiquetas coinciden con la UI). **Cash Flow** es el que vale la pena detenerse. [[nav:birds-eye]] a menudo
predetermina el modo Cash Flow para que las muestras de enseñanza muestren el movimiento de dinero
de inmediato.

Cuando **Cash Flow** está seleccionado, el movimiento recurrente de dinero se teje en la imagen de
Assets & Liabilities — no solo como una lista separada, sino como parte de cómo se *presenta* el
patrimonio:

| Lado de la vista | Qué flujos de efectivo pueden aparecer como |
|------------------|--------------------------------|
| **Assets** | **Entradas** — dinero que alimenta el hogar (por ejemplo ingreso ganado). |
| **Liabilities** | **Salidas** — dinero que el plan debe cubrir (por ejemplo gastos de vida, servicio de hipoteca). |

Esa es **contabilidad no convencional** a propósito. Un balance de un contador no trata cheques
futuros como activos ni una vida de costos de vida como una sola línea de pasivo. Aquí el objetivo
es la intuición de planificación: poner «lo que financia la vida» junto a «lo que tenemos», y «lo
que debemos pagar» junto a «lo que debemos».

**Sumatoria (Σ) en Cash Flow:** con Cash Flow activo, el control **Σ** de ese selector puede
resumir una serie de varios años en un **total estilo valor presente en dólares de hoy** y colocar
ese total en el lado relacionado de la hoja. Ejemplo: gastos de vida — salidas a lo largo de muchos
años — sumados en un número junto a **Liabilities**. No está inventando un nuevo préstamo bancario;
está respondiendo «¿qué tan grande es este flujo de obligaciones si lo miro en una sola cifra junto
a mi casa y mi cartera?»

**Pruébelo:**

1. Quédese en [[nav:dossier]] (o abra [[nav:birds-eye]] desde Forecaster).
2. En [[nav:birds-eye]], seleccione **Cash Flow** (y pruebe **Σ** si se ofrece).
3. Note el **principal** y el **interés** de la hipoteca, el estilo de vida y los salarios leídos
   como parte de la misma imagen de patrimonio.
4. Vuelva a **Account** / **Holding** para un balance más limpio y tradicional sin esa mezcla de
   flujos de efectivo.

El principal y el interés de la hipoteca a menudo se ven más fácil con **Cash Flow** activado. Las
lecciones posteriores usarán esta vista cuando la historia sea «¿qué tan pesado es el lado del
gasto?» y no solo «¿qué hay en las cuentas hoy?»

#### Flujos de efectivo (la lista de series)

Separado de ese control de presentación, el plan sigue teniendo una **lista de series de flujos de
efectivo**: salarios, fases de estilo de vida, Social Security, atención médica, servicio de deuda y
más. En Dossier llega a ellas por el lado de cash-flows del editor; [[nav:birds-eye]] es el resumen.

Muchos ítems son **patrones** (plantillas) en lugar de un monto escrito a mano para cada año — por
ejemplo «ingreso ganado hasta el retiro de esta persona». Expandir esos patrones en montos anuales
es cómo el Forecaster dibuja gráficos de varias décadas. Las lecciones dirán **dónde** mirar; no
necesita autorar una plantilla el primer día.

#### Línea de tiempo de eventos de vida

Por persona: años de trabajo, tramos de retiro, marcadores de reclamo de Social Security, eventos
únicos grandes (por ejemplo la compra de una casa). Una respuesta rápida a: «¿Cuándo termina el
trabajo? ¿Cuándo corre el retiro? ¿El ingreso se alinea con esas fechas?»

---

## [[nav:assumptions]] {#assumptions}

Esta área es de **lectura y escritura** — también en el Learning Center cuando quiera experimentar.

Los Assumptions son la **otra mitad** de las reglas del plan junto a los datos del hogar: cómo se
muestrean los mercados, cómo se tratan los impuestos, cómo se invierte el efectivo sobrante, qué
significa «éxito» y dónde / en qué moneda se reporta.

[[img:ga-assumptions-es]]

*Supuestos abierto en [[nav:assumptions-growth]] (primera pestaña). La fila de pestañas es
[[nav:assumptions-growth]] · [[nav:assumptions-taxes]] ·
[[nav:assumptions-sell-invest]] · [[nav:assumptions-success]] ·
[[nav:assumptions-currency]] — las mismas subsecciones que la tabla. Pase el puntero por un chip
de pestaña para distinguirlo del control Forecast Detail o de la barra inferior del mismo nombre.*

**No necesita dominio total de cada palanca para la mayoría de las lecciones.** Cubriremos muchas
de ellas en lecciones futuras. Por ahora, sepa que las **subsecciones** existen y para qué sirve
aproximadamente cada una:

| Subsección | Aproximadamente… |
|------------|----------|
| [[nav:assumptions-growth]] | Crecimiento esperado y volatilidad (y correlaciones relacionadas) para activos y flujos — el combustible estadístico de Monte Carlo. |
| [[nav:assumptions-taxes]] | Régimen fiscal y ajustes relacionados que usa el pronóstico cuando los impuestos están activos. |
| [[nav:assumptions-sell-invest]] | Qué pasa con el efectivo sobrante y cómo se financian los déficits desde la cartera después de cubrir las necesidades vinculadas (estrategia residual). |
| [[nav:assumptions-success]] | Costo de capital y la **definición de éxito** (por ejemplo Gold / Silver / Bronze) que convierte trayectorias en una tasa de éxito. |
| [[nav:assumptions-currency]] | La tabla de tipos de cambio del plan — edite un tipo, obtenga los recientes, o restablezca la instantánea incluida. La moneda de pantalla es la herramienta FX de la barra inferior. |

Las tablas MAGI publicadas (IRMAA, NIIT y las demás) viven en la herramienta **Referencia** —
son calendarios de la ley, no un ajuste del plan. Los resultados de trayectoria siguen en el
radar de acantilados del Previsor.

Si una lección necesita un cambio de supuesto, nombrará la subsección y el control. De lo
contrario, deje los valores predeterminados y céntrese en la historia en Forecaster o Transforms.

---

## [[nav:forecaster]] — ejecutar el futuro {#forecaster}

Abra [[nav:forecaster]]. Piense en **dos funciones distintas** que comparten un área:

1. **Forecast Detail** — ejecuta el plan hacia adelante a lo largo de los años del pronóstico y
   profundiza en **cada aspecto** de las proyecciones para una trayectoria y un año elegidos.
2. **Simulation Summary** — resultados de los **muchos** pronósticos (a menudo del orden de mil)
   resumidos en una distribución y una **probabilidad de éxito** (y estadísticas relacionadas). Así
   es como esta herramienta — y otras como ella — llegan a un solo número estilo éxito a partir de
   una nube de resultados.

Ambos viven en un **split redimensionable** (acordeón): puede dar casi toda la altura a Detail,
casi toda a Summary, o equilibrarlos. Ese poder de diseño importa cuando profundiza (vea
[Profundizar en un resultado difícil](#drill-into-a-tough-outcome) más abajo).

### Forecast Detail — los entregables {#forecast-detail}

[[img:ga-forecast-detail]]

*Forecast Detail en un solo cuadro: el encabezado muestra **FID GMF** y el **año** seleccionado,
con superficies abiertas a la vez (aquí gráficos **Balance Sheet** y **Cash Flows** arriba,
**Balance Equation** / **Sankey** y **Cliff radar** abajo). Use los **chips** para mostrar solo lo
que importa — rara vez querrá todas las tarjetas a la vez.*

El orden de los chips coincide con la app: [[nav:path:bs-chart|bs-table|cf-chart|cf-table]], luego [[nav:si-chart]] /
[[nav:si-table]], Rec, Taxes y **RMD** (serie proyectada de mínimos requeridos).

Las cuatro superficies centrales de abajo usan las mismas **vistas previas estándar de lección**
que reutilizan lecciones posteriores.

#### [[nav:bs-chart]] — Assets & Liabilities a lo largo del tiempo

[[img:sfb-bs-chart]]

**Activos proyectados por encima** de la línea, **pasivos por debajo**, año por año. La **línea
neta**, dibujada en negro grueso, es el **patrimonio neto** — a menudo lo que usted busca. Pase el cursor sobre un año para
un desglose; **haga clic en un año** para cargarlo en las tablas y otras vistas acotadas al año.
Use **Close up** y **zoom vertical** cuando las barras se sientan pequeñas
([chrome de gráficos](#chart-chrome)).

#### [[nav:bs-table]] — balance para el año seleccionado

[[img:sfb-bs-table]]

Estado en un punto en el tiempo para el **año seleccionado**: activos reales, cuentas, pasivos,
patrimonio neto. Esta vista previa tiene **Holdings** seleccionado (chip activo) para expandir las
cuentas en holdings — alterne ese chip cuando solo quiera totales de cuenta.

#### [[nav:cf-chart]] — flujos de efectivo a lo largo del tiempo

[[img:sfb-cf-chart]]

Dinero **que entra** por encima de la línea, dinero **que sale** por debajo, coloreado por
categoría. La **línea neta**, dibujada en negro grueso, es el **flujo neto** — a menudo lo que usted busca. Hover/clic en
años de la misma forma que el gráfico BS. Buena primera lectura para «¿cuándo termina el ingreso
ganado?» y los escalones de estilo de vida.

#### [[nav:cf-table]] — flujos de efectivo para el año seleccionado

[[img:sfb-cf-table]]

Estado para el **año seleccionado**: ingresos, gastos, impuestos y disposición neta (totales de
invertir / vender / pedir prestado). A menudo el compañero **copiable** del gráfico.

#### [[nav:si-chart]] / [[nav:si-table]] — lo que se vendió o invirtió (y por qué)

[[img:ga-si-chart]]

*[[nav:si-chart]] — ventas, inversión y préstamo a lo largo de los años del pronóstico (disposición del
neto operativo). Las mismas etiquetas FID / año y chrome de encabezado que las demás superficies de
Forecast Detail.*

[[img:ga-si-table]]

*[[nav:si-table]] — operaciones a nivel de holding para el año seleccionado. Columnas que ahorran
espacio: **Sold** (o **Invested**) con **After Sale** / **After Invest**, **%**, y **Why**. Pase el
cursor sobre un **Name** para un detalle vertical copiable (incluido **Prior Value**). **Why** lleva
razones con desglose en dólares — RMD vs residual pro-rata vs orden de cuentas fiscales, etc.*

#### Otros chips

| Chip | Nombre completo | Propósito |
|------|-----------|---------|
| [[nav:si-chart]] | Money Movements chart | Ventas, inversión, préstamo a lo largo de los años (disposición del neto operativo). |
| [[nav:si-table]] | Money Movements table | Operaciones a nivel de holding y códigos **Why** (RMD vs residual). |
| [[nav:taxes]] | Tax statements | Detalle de evaluación para el año seleccionado (federal, estatal cuando está modelado, propiedad). Nota: la evaluación de un año a menudo se **paga el año siguiente**, así que puede no coincidir con la línea Taxes del flujo de efectivo de ese año. |
| **Rec** | Reconciliation | Prueba de que el año cuadra: las fuentes de efectivo igualan los usos (ecuación o Sankey). |

**Qué buscar por superficie (intuición inicial):**

- [[nav:bs-chart]] / [[nav:bs-table]] — ¿El patrimonio sube o se erosiona? ¿Cuándo se encogen los pasivos? ¿Es la
  casa grande frente a cuentas flexibles?
- [[nav:cf-chart]] / [[nav:cf-table]] — ¿Cuándo termina el ingreso ganado? ¿El estilo de vida baja de escalón? ¿Se
  ven picos de impuestos o de atención médica?
- **Taxes** — ¿Es la historia fiscal material en los años de retiro, o un tema secundario?
- **Money Movements** — En años de desacumulación, **qué** cuentas financian el gasto, y bajo qué reglas?
- **RMD** — ¿Qué tan grandes se vuelven las distribuciones tradicionales requeridas a lo largo del
  horizonte?
- **Rec** — Chequeo de cordura cuando algo «no cuadra» en el gráfico de flujos de efectivo.

### Controlar lo que ve — chips, año y pronóstico {#controlling-what-you-see}

Hay una **riqueza de información para cada escenario (trayectoria de pronóstico) y cada año**. Dos
deslizadores (o controles equivalentes) lo afinan:

| Control | Rol |
|---------|------|
| **Forecast ID (FID)** | Qué **trayectoria individual** de la nube de Monte Carlo está inspeccionando en Detail. El ID **0** es la trayectoria de media geométrica / representativa (un «norte» estable, no una promesa del futuro más probable). Otros IDs son trayectorias simuladas individuales. |
| **Year** | Qué año calendario de esa trayectoria llena las tablas, la tarjeta fiscal, el plan de ventas y la reconciliación. Los gráficos siguen mostrando todo el horizonte; el año seleccionado se resalta / carga en el detalle. |
| [[nav:year-axis]] | En el **gráfico** (icono de calendario, abajo a la izquierda): etiquetar el eje como años civiles o **edad de una persona**. Distinto del deslizador **Año** del encabezado — no cambia qué año está seleccionado. |

Los **chips** eligen entonces **qué tarjetas** aparecen para esa trayectoria y ese año. Apague lo
que no está explorando para que el panel se mantenga legible.

[[img:ga-year-slider]]

*Control **Year**: caja de valor con el año calendario; bajo la pista, una línea de tiempo dorada
cuyos marcadores **se sientan en sus años reales** — inicio del plan (🚩), jubilaciones, fin del plan
(🏁). A diferencia de los saltos de Forecast ID, esas posiciones sí significan algo en el eje.*

Los gráficos también llevan [[nav:year-axis]] — un **icono de calendario** abajo a la izquierda de
[[nav:bs-chart]], [[nav:cf-chart]] y los demás gráficos con eje de años. Úselo cuando quiera la
línea de años como **edad de alguien**. El **Año** del encabezado sigue eligiendo qué año llena
las tablas. Pase el puntero por el chip cuando quiera el recordatorio.

<a id="quick-jumps-to-the-key-forecasts"></a>

#### Saltos rápidos a los pronósticos clave {#quick-jumps-to-the-key-forecasts}

Bajo la etiqueta **Forecast ID** hay una pequeña regla dorada con una fila de marcas. Son **saltos
rápidos**: haga clic en una y el Forecast ID aterriza en ese pronóstico.

Cada triángulo de color es uno de los **pronósticos clave** de la corrida, dibujado en el **mismo
color que ese pronóstico tiene** en la tabla Key Forecasts y en la nube de distribución — así que el
rojo es Min dondequiera que lo encuentre. Pase el cursor sobre uno para ver de qué pronóstico se
trata, su ID y qué significa el punto.

Dos cosas sobre esta franja valen la pena entender, porque son deliberadas:

- **Las marcas se leen del peor resultado al mejor, de izquierda a derecha** — Min, Q2, **GMF ✦**,
  Q3, Mean, Q4, Max, el mismo orden que las filas de la tabla Key Forecasts. El **✦** dorado es el
  norte determinista **en ese orden**, para que vea *dónde cae el GMF entre los resultados nombrados*
  — no aparcado a un lado.
- **No están *posicionados* en sus Forecast IDs.** Un Forecast ID es un **nombre**, no una
  medición: la corrida puede aterrizar su peor trayectoria en el ID 366 y la mejor en el ID 12, y
  eso no le dice nada de ninguna de las dos. Así que la franja gasta su ancho en el ordenamiento que
  sí significa algo. (Los triángulos del deslizador **Year** son el caso opuesto — un año *sí* es
  una posición, así que se sientan exactamente donde caen en la línea de tiempo.)

Antes de haber corrido una simulación solo hay el **✦** al que saltar, lo cual es honesto: todavía
no hay otros pronósticos. Corra una y aparece la franja completa.

[[img:ga-fid-quick-jumps]]

*Control Forecast ID tras una corrida: etiqueta corta **FID** más el nombre clave activo (**GMF ✦**
aquí), caja de valor con el número de trayectoria (**0**), y bajo la etiqueta la regla dorada con
saltos emparejados en color (peor → mejor) y el **✦** GMF en su lugar en ese orden. Haga clic en una
marca o en una fila de Key Forecasts y la etiqueta toma ese nombre, igual que los títulos de los
gráficos.*

**Pruébelo** (a la derecha, **Forecast Detail** — ya hay una corrida cargada):

1. Haga clic en el triángulo **rojo** (el de más a la izquierda) bajo **FID** — debería aterrizar en
   **Min**, la etiqueta pasa a **FID Min** y gráficos/tablas se centran en esa trayectoria.
2. Haga clic en el **✦** dorado *en la franja de saltos* (entre resultados tempranos y tardíos) —
   vuelta al norte GMF (**FID GMF ✦** / trayectoria **0**). Note **dónde** se sienta entre las
   demás marcas.
3. En **Year**, haga clic en un marcador de la línea de tiempo (🚩 inicio del plan, un triángulo de
   jubilación o 🏁 fin del plan) — el año salta a ese calendario; tablas y tarjetas del año siguen.

Estos saltos son de lo más útil del chrome de la app: nombran una trayectoria o un hito sin frotar
el deslizador a ciegas.

### Simulation Summary — la nube (vistas previas estándar) {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

*Simulation Summary: conteo de **Simulations**, chips **Distribution** / **Key Forecasts** /
**Success Summary**, **Re-simulate**, la nube de patrimonio terminal (éxito en **Silver**), la
tabla clave (Min … Max, GMF seleccionado) y métricas de resultado debajo. Haga clic en una fila
clave para enfocar esa trayectoria en todas partes.*

**Simulation Summary** (la otra mitad del acordeón) responde preguntas distintas: forma del
**patrimonio neto terminal**, **tasa de éxito** bajo su definición de éxito (Gold / Silver /
Bronze) y **Key Forecasts** (Min, cuartiles, media, Max, …). Hacer clic en una fila clave
típicamente **enfoca Forecast Detail** en esa trayectoria para que pueda inspeccionar *por qué* fue
extrema.

#### Net Worth Distribution

[[img:sfb-nw-distribution]]

Cada marca es una trayectoria simulada por **patrimonio neto final**. El % de éxito se sienta bajo
el gráfico en la medalla/umbral activos. **Reveal** y **Close up** ayudan cuando la nube es difícil
de leer ([chrome de gráficos](#chart-chrome)).

#### Key Forecasts

[[img:sfb-key-forecasts]]

Min / cuartiles / GMF / Max (y métricas relacionadas). Seleccione una fila para enfocar esa
trayectoria **en todas partes** y resaltarla en la distribución.

La tasa de éxito depende de la **definición de éxito** bajo Assumptions → Success. A las lecciones
les importa más la **dirección del cambio** que un porcentaje concreto.

<a id="chart-chrome"></a>

### Chrome de gráficos — Close up, zoom y Reveal {#chart-chrome}

Los gráficos y las tarjetas de distribución comparten un pequeño **cluster de encabezado** (la
misma familia de controles en Forecaster y Transforms). Pase el cursor sobre cualquier icono para su
tip de producto. Las lecciones enlazan aquí en lugar de re-enseñar el chrome cada vez.

| Control | Dónde | Qué hace |
|---------|--------|--------------|
| **Close up** (icono expandir / abrir a pantalla completa) | La mayoría de tarjetas de gráficos y tablas (BS, CF, Distribution, Key Forecasts, …) | Abre **esa** vista más grande en un modal enfocado — el mismo contenido, la mayor parte de la pantalla — para que pueda profundizar sin el panel circundante. Los **tips de hover siguen funcionando** en el modal (desgloses de año, puntos de distribución, etiquetas de resultado). Cierre con **Esc**, clic en el scrim o **✕**. El modal es **redimensionable en ancho** (agarre del borde derecho). |
| **Vertical zoom** (deslizador de zoom en el encabezado) | [[nav:bs-chart]] y [[nav:cf-chart]] | Amplía las barras altas para que las porciones más pequeñas año a año sean más fáciles de comparar. Todo a la **izquierda** es **1×** (sin zoom). **No** cambia el plan — solo la escala vertical de las barras. |
| **Reveal** (deslizador bajo el gráfico) | **Net Worth Distribution** | Comprime la escala horizontal hacia una vista estilo log cuando unos pocos finales extremos **aplastan** la nube principal de puntos. Úselo cuando la masa de resultados es difícil de leer. El producto puede empujar «Outliers squashing the dots?» hacia este control. |
| **Link reveal** | Dos distribuciones lado a lado (p. ej. original vs modificado) | **On** (predeterminado): un solo ajuste de Reveal para ambos gráficos para que se mantengan comparables. **Off**: revelar cada lado de forma independiente. |
| **Link chart scales** | Gráficos **BS** o **CF** emparejados (baseline \| comparación) | Comparten un **eje y** entre ambas celdas, escalado al lado más alto — el plan más pequeño se **encoge visiblemente** en lugar de que cada lado se autoescale para parecer igual de alto. |
| **Merge charts** | Misma comparación emparejada BS / CF | Pliega ambos lados en **un** gráfico: cada año muestra la barra izquierda y luego la derecha lado a lado en una escala compartida (comparación unida). El hover sigue dando el desglose de cada lado. Cierre el modal al terminar. |

#### Ejemplo: Close up


*Close up en **Net Worth Distribution** — la misma nube y línea de éxito, modal más grande sobre
Forecaster. **Reveal** y el hover siguen funcionando aquí; cierre con **✕** / Esc / scrim.*

**Cuándo usar Close up**

- [[nav:bs-chart]] / [[nav:cf-chart]] se sienten apretados en un layout de Detail con varios chips — abra el que
  le importa.
- **Distribution** junto a **Key Forecasts**, o **dos distribuciones** en Transforms después de un
  re-sim — haga Close up de la nube (o de cualquier lado) para que frotar puntos sea cómodo; los tips
  y el resaltado siguen funcionando.
- Las tablas y otras tarjetas densas usan el mismo patrón Close-up cuando se ofrece.

#### Ejemplo: zoom vertical

[[img:ga-vertical-zoom]]

*Cash Flows con el deslizador de **vertical zoom** en el encabezado (tip: todo a la izquierda = 1× /
sin zoom). Los años altos de entradas ya no aplastan el resto de la serie. La matemática del plan no
cambia.*

**Cuándo hacer zoom (BS / CF)**

- La pila de un año es tan alta que los otros años se ven planos — suba un poco el zoom y luego pase
  el cursor por los años que le importan.

#### Ejemplo: Reveal

[[img:ga-compress]]

***Reveal** bajo la distribución abre la masa de finales cuando una cola derecha larga aplastaría
todo cerca de cero. Los outliers siguen en la corrida; solo cambia la escala horizontal.*

**Cuándo usar Reveal (distribución)**

- Unos pocos finales ultra ricos (o ultra pobres) clavan la masa de puntos en una banda delgada —
  Reveal extiende el medio legible sin borrar esos outliers de la corrida.
- Los libros **HNW + alta volatilidad** (Max lejos de GMF) lo necesitan más — lección dedicada:
  [When the outcome cloud needs Reveal](/learn/nw_distribution_compression).

Ninguno de estos controles vuelve a correr Monte Carlo ni edita el dossier; solo cambian **cómo**
mira.

<a id="drill-into-a-tough-outcome"></a>

### Profundizar en un resultado difícil {#drill-into-a-tough-outcome}

Suponga que su meta final es: **entender las peores trayectorias**, no solo la tasa de éxito del
titular.

1. Abra [[nav:forecaster]] — Forecast Detail y **Simulation Summary** ya están poblados (la simulación
   predeterminada suele ser del orden de **1,000** trayectorias a menos que la UI diga otra cosa).
   Re-simule solo si cambió el plan y necesita una corrida multipath fresca.
2. **Redimensione** el acordeón: dé a **Simulation Summary** suficiente espacio para trabajar
   (arrastre el split para que Summary sea alto).
3. En Summary, abra **Key Forecasts** (y **Distribution** si quiere la imagen de la nube).
4. Seleccione **Min** (peor resultado terminal de la corrida) — o **Q2** si quiere una trayectoria
   mala pero no de un solo outlier (aproximadamente el límite del cuartil inferior).
   *Atajo: la [franja de saltos rápidos](#quick-jumps-to-the-key-forecasts) bajo la etiqueta
   **Forecast ID** hace lo mismo sin salir de Detail — el triángulo más a la izquierda (rojo) es
   **Min**, el siguiente (naranja) es **Q2**. Práctico una vez que Detail domina y Summary está
   apretado.*
5. Esa selección debería enfocar **Forecast Detail** en ese forecast id. **Redimensione** de nuevo
   si ahora quiere Detail dominante.
6. Ponga **Year** en un hito estresante (primer año de retiro, un año de gran gasto, cuidado de
   vejez).
7. Active chips que respondan su pregunta, por ejemplo:
   - [[nav:cf-chart]] + [[nav:cf-table]] — ¿qué dinero se movió ese año?
   - **Money Movements** — ¿qué se vendió para financiarlo?
   - [[nav:bs-chart]] — ¿la cartera bajó de escalón de forma abrupta?
   - **Taxes** — ¿el impuesto amplificó el dolor?
8. Desplace **Year** adelante/atrás a lo largo de esa misma mala trayectoria para ver si el estrés
   fue un año o un desgaste largo.
9. Opcionalmente compare con la trayectoria representativa (**FID 0**, la fila clave GMF, o el
   **✦** dorado de la franja de saltos rápidos) con el mismo año y chips — misma cámara, película
   distinta.

No ha cambiado el hogar; ha **elegido qué historia** de la nube leer de cerca.

---

## [[nav:transforms]] — pruebe un cambio sin arruinar la línea base {#transforms}

Abra [[nav:transforms]].

Ruta típica usada en las lecciones:

1. Abra **Modifications** (el espacio de trabajo de qué-pasaría-si).
2. Elija algo en **Modifiables** (a menudo una **Person**, o un ítem de flujo de efectivo como
   ingreso ganado).
3. Edite un control (año de retiro, **Active years**, gasto, …).
4. Cambiar cualquiera de las entradas de modificación la agrega al **Change Set** — no necesita un
   paso separado de «agregar esta edición» para el cambio en sí.
5. **Re-simulate** cuando quiera una comparación completa de Monte Carlo de original vs modificado.
6. Lea **original vs modificado** en las vistas de comparación de Transforms / Forecaster y en
   **Simulation Summary** después de un re-sim.

**Nota:** Al cambiar un control de modificación, los gráficos y tablas deberían **actualizarse en
vivo** para que pueda ver reaccionar el plan antes de (o sin) un re-sim completo. Por ejemplo,
aumente **Active years** en un ítem de ingreso ganado y vea crecer la imagen del balance con las
entradas extra; disminuya esos años y vea encogerse.

Transforms es para **exploración**. Guardar un segundo plan permanente es una elección aparte cuando
el producto la ofrece. Prefiera Transforms a editar Dossier cuando la lección es «qué pasaría si»,
especialmente en la app de escritorio donde Dossier es su data real.

---

## [[nav:region]] {#region}

[[nav:region]] (etiqueta del riel) es el hogar actual de la exploración de **estados de EE. UU.** «¿y
si viviéramos ahí?» — comparación estilo costo de vida contra el ajuste del plan. El nombre del
producto es intencionalmente más amplio: **el trabajo futuro incluirá otros países**; EE. UU. es el
foco actual.

Úselo cuando una lección (o su propia curiosidad) sea sobre **lugar**, no cuando solo necesite
gráficos de cartera — esos se quedan en Forecaster.

---

## Ayuda que siempre está cerca {#help-nearby}

- Los iconos **?** en los paneles abren ayuda enfocada para ese gráfico o editor.
- La herramienta **Help** del riel abre un mapa breve de la app (secciones + tips).
- Las lecciones son el **camino guiado**; la ayuda en la app es la **referencia** cuando profundiza.
- Para el comportamiento de **copiar**, **tema** y **tooltip / Alt**, vea
  [Chrome global](#global-chrome-copy-theme-and-tooltips) arriba.

Si una lección y un popup de ayuda discrepan en una etiqueta pequeña, confíe en el **chrome de la
UI** — el copy puede afinar con el tiempo. Las **ubicaciones** (Dossier, Assumptions, Forecaster,
Transforms, Region, [[nav:birds-eye]]) son el mapa durable.

---

## Un recorrido de práctica de 5 minutos {#practice-tour}

1. Mire la **esquina superior derecha**: tema (sol/luna) y el círculo de **hover-details**; pruebe
   **Alt** sobre un gráfico o tabla una vez para que el silencio de tooltips se sienta natural.
2. [[nav:dossier]] (icono de carpeta) — recorra la muestra; recuerde: **solo vista** para lecciones, no
   entrada de datos.
3. En [[nav:birds-eye]] (parte superior de Dossier): personas, luego pruebe **Cash Flow** (y **Σ**) en
   Assets & Liabilities; vuelva a **Account** / **Holding**.
4. Cambie a [[nav:forecaster]] — note que el icono de **herramienta** [[nav:birds-eye]] aparece en el riel
   (oculto en Dossier).
5. Abra [[nav:birds-eye]] desde esa herramienta — confirme que coincide con el resumen de Dossier;
   cierre y quédese en Forecaster.
6. En Forecaster, mire **Simulation Summary** (ya corrido) — éxito bajo Silver.
7. En **Forecast Detail**, deje solo [[nav:bs-chart]] y [[nav:cf-chart]] encendidos; mueva el deslizador
   **Year**.
8. Pruebe **Key Forecasts → Min** (o Q2), luego abra **Money Movements** para un año con pinta de
   desacumulación.
9. [[nav:transforms]] → Modifications — elija un flujo de efectivo o una persona; mueva un poco
   **Active years** o el retiro y mire la reacción **en vivo** de los gráficos; note el **Change
   Set**. Salga sin un re-sim completo si solo quería el mapa.
10. Opcionalmente abra [[nav:assumptions]] y haga clic por Growth / Taxes / Success una vez — no
    necesita cambiar nada.
11. Opcionalmente abra [[nav:region]] y vea que se trata de lugar, no de matemática de cartera.

Cuando ese camino se sienta cómodo, continúe a
[Meet the Springfield household](/learn/springfield_baseline) para la primera lección real de
planificación sobre esta misma muestra.

---

## Dónde se sitúa esto en el currículo {#where-to-go-next}

| Orden | Lección |
|-------|--------|
| **0 (usted está aquí)** | Cómo moverse por la aplicación (**Empiece aquí**) |
| **1** | [Meet the Springfield household](/learn/springfield_baseline) (orientación + timing de retiro) |
| **Más adelante** | Gasto de vida, contraste de hipoteca, definiciones de éxito, reclamo de Social Security, estrategia de retiros, profundizaciones de supuestos, … |

Las lecciones posteriores seguirán apuntando aquí con recordatorios cortos de «dónde» en lugar de
re-enseñar todo el mapa.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
