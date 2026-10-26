<!--
tutilis-return: lessons/charts_and_tables/prose/es.md
tutilis-locale: es translated
-->
# Leer los gráficos y las tablas

Una previsión es la historia de un hogar, contada un año cada vez. El [[nav:forecaster]] la cuenta a través de un puñado de vistas, y cada vista responde a una pregunta distinta. El balance dice cuánto vale el hogar. El flujo de caja dice qué entró y qué salió. Movimientos de dinero dice qué cuentas pagaron la diferencia, y las tarjetas de impuestos dicen de dónde salió cada impuesto.

Esta lección es un recorrido por esas vistas. Trata sobre todo de la herramienta, y toca las finanzas solo donde las finanzas le dicen qué tarjeta abrir. El hogar Springfield en el [[term:canvas]] es un matrimonio en Ohio en el que ambos trabajan, tienen una casa con hipoteca y cobran el Seguro Social en la jubilación, de modo que cada vista tiene algo en sus dos lados.

## Lo que aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Dónde viven los gráficos y las tablas, y cómo los enciendo?** Véase [Dónde viven las vistas](#where-the-views-live).
2. **¿Por qué cada gráfico tiene una mitad superior y una mitad inferior?** Véase [Dos gráficos en uno](#two-charts-in-one).
3. **¿Qué historia cuenta el balance?** Véase [Balance: patrimonio neto](#balance-sheet-net-worth).
4. **¿Qué historia cuenta el flujo de caja?** Véase [Flujo de caja: entradas y salidas](#cash-flow-in-and-out).
5. **¿Cómo se conectan los dos?** Véase [Los movimientos de dinero los unen](#money-movements-joins-them).
6. **¿Cómo se comparan estas vistas con los estados de un contable?** Véase [Tres estados](#three-statements).
7. **¿Qué añaden las tablas que los gráficos no muestran?** Véase [Las tablas y sus pasadas de cursor](#tables-and-their-hovers).
8. **¿Dónde veo qué cambia en un año dado?** Véase [La tarjeta del año](#the-year-card).
9. **¿Dónde busco un impuesto concreto?** Véase [Las tarjetas de impuestos](#the-tax-cards).
10. **¿Cómo paso de una palabra a la tarjeta que la muestra?** Véase [Encontrar una tarjeta por su palabra](#find-a-card-by-its-word).

</div>
</aside>

## Dónde viven las vistas {#where-the-views-live}

Cada vista de esta lección es una tarjeta del **Detalle de previsión**, la primera sección del [[nav:forecaster]]. **[[key:ForecastDetail]]** la abre. A lo largo de su encabezado corre una fila de chips, uno por tarjeta, y cada chip enciende o apaga su tarjeta. La primera fila lleva las vistas centrales: [[nav:bs-chart]] y [[nav:bs-table]] para el balance, [[nav:cf-chart]] y [[nav:cf-table]] para el flujo de caja, [[nav:si-chart]] y [[nav:si-table]] para Movimientos de dinero, [[nav:rec]] para la conciliación, y **Yr** para la tarjeta del año. La segunda fila lleva las lentes fiscales: [[nav:taxes]], [[nav:brackets]] y [[nav:cliffs]].

[[img:charts-tables-fd-chips|control]]

Los chips 📈 son gráficos que cubren cada año del plan, y los chips ▦ son tablas que muestran un año entero. Los dos funcionan en pareja. Usted localiza un año en un gráfico, hace clic en su barra para seleccionarlo, y las tablas de abajo cambian a ese año. Los chips que enciende se recuerdan, de modo que el Previsor se abre tal como lo dejó.

Cuando quiere verlo todo sin reordenar sus chips, el menú [[nav:peek]] abre cada gráfico, cada tabla, o cada gráfico junto a su tabla, por encima de la aplicación. Pulse **[[key:Peek]]** y después una letra.

## Dos gráficos en uno {#two-charts-in-one}

Muchas herramientas de planificación dibujan el patrimonio neto como un gráfico, los ingresos como un segundo y el gasto como un tercero. Tutilis dibuja el balance y el flujo de caja como gráficos de dos lados. Lo que el hogar tiene, o lo que entra, crece hacia arriba desde el eje de los años. Lo que debe, o lo que sale, crece hacia abajo desde el mismo eje, en la misma escala de dólares. Una línea negra fina de saldo corre entre las dos mitades.

Cada gráfico lleva las dos mitades de su tema, y el saldo entre ellas es la historia.

Leer un gráfico en lugar de dos o tres tiene una ventaja práctica. Una barra alta arriba no le tranquiliza a menos que también vea lo que hay debajo, y en un gráfico de dos lados no puede ver una cosa sin la otra. La línea de saldo hace entonces la aritmética por usted, año tras año.

Los dos gráficos comparten dos hábitos que vale la pena aprender una vez. El botón 📅 en el extremo izquierdo del eje de los años cambia las etiquetas de años naturales a la edad de cada persona, que suele ser la forma más natural de leer una jubilación. Y cada barra se explica cuando deja el puntero sobre ella. Mantenga pulsada **Alt** para ocultar las sugerencias mientras recorre un gráfico.

## Balance: patrimonio neto {#balance-sheet-net-worth}

El [[nav:bs-chart]] responde a la pregunta «¿cuánto vale el hogar?» para cada año del plan. Su tema es el [[term:net-worth]], todo lo que se posee menos todo lo que se debe.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-chart]]

[[img:charts-tables-bs-chart]]

Por encima del eje, los activos de cada año se apilan por clase. En Springfield, la [[term:brokerage]] es verde, el [[term:401k|401(k)]] [[term:traditional]] es azul, las demás cuentas son grises, y la casa se sienta arriba en ámbar. Por debajo del eje, la hipoteca cuelga en rojo. Es corta, porque el préstamo es pequeño al lado de los activos, y se encoge cada año hasta desaparecer después de 2047. Una barra negra fina se mantiene junto a la pila de cada año mientras haya un pasivo que restar, y la línea negra de patrimonio neto une las cimas.

La forma de esa línea es la historia. El patrimonio neto sube durante los años de trabajo y sigue subiendo bien entrada la jubilación, porque las cuentas crecen más deprisa de lo que el hogar retira de ellas. Alcanza su máximo en 2063 y luego se dobla hacia abajo. La caída que sigue son los [[term:ltc|cuidados de larga duración]] del plan, que llegan en 2064, y el gráfico de flujo de caja de la sección siguiente lo muestra con claridad.

Deje el puntero sobre un año y la sugerencia lista todo el balance de ese año, desde el patrimonio neto arriba hasta cada clase de activo y cada clase de deuda debajo.

[[img:charts-tables-bs-chart-hover]]

Las cifras en dólares del gráfico están en [[term:nominal]], así que parte de la subida es [[term:inflation]]. El menú **Visualización** de la barra superior muestra el mismo gráfico en dólares de hoy cuando quiere la imagen real.

## Flujo de caja: entradas y salidas {#cash-flow-in-and-out}

El [[nav:cf-chart]] responde a otra pregunta: «¿cómo vivió el hogar este año?» Las entradas crecen hacia arriba desde el eje y las salidas hacia abajo, y el saldo es ingresos menos gastos menos impuestos.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

[[img:charts-tables-cf-chart]]

En Springfield, las barras de ingresos son altas mientras las dos personas trabajan. Bajan un escalón en 2041, cuando Homer se jubila, y otra vez en 2045, cuando lo hace Marge, y después de eso el Seguro Social es el único ingreso. Por debajo del eje, el costo de vida es ámbar, los costos de salud son violeta y los impuestos son rojos. La banda violeta se hincha en 2064, cuando empiezan los cuidados de larga duración.

La línea de saldo le dice algo que el gráfico del balance no dice. Se queda por debajo del eje todos los años, incluso en los años de trabajo, porque este hogar gasta más de lo que los cheques de nómina traen a casa. El gráfico del balance sigue subiendo en esos años, porque las cuentas ganan más de lo que el hogar retira de ellas. Leer los dos gráficos juntos es la forma de ver ambos hechos a la vez.

Deje el puntero sobre un año y la sugerencia nombra el año y la edad de cada persona, luego el saldo, luego el dinero que entra y el dinero que sale, cada parte en su propia línea.

[[img:charts-tables-cf-chart-hover]]

Qué ingresos y gastos tienen una banda propia depende de usted. El control **Segmentos** de la barra de herramientas de la tarjeta elige las categorías que se separan, como el Seguro Social o los costos universitarios, y todo lo demás se reúne en una banda «restante». Elija las separaciones que cuentan la historia que está leyendo.

## Los movimientos de dinero los unen {#money-movements-joins-them}

Cuando el flujo de caja es negativo, el dinero tiene que salir de algún sitio, y cuando es positivo, tiene que ir a algún sitio. [[nav:si-chart]] muestra dónde. Su tarjeta se llama **Movimientos de dinero**, y es el puente entre los dos gráficos grandes. Muestra el efectivo obtenido al vender posiciones por encima del eje, y el efectivo aparcado al invertir por debajo.

[[img:charts-tables-si-chart]]

La imagen de Springfield sigue la historia que contó el gráfico de flujo de caja. Las ventas son pequeñas mientras las dos personas trabajan, crecen después de las jubilaciones, y en 2051 se les unen las [[term:rmd|distribuciones mínimas obligatorias]], las ventas que la ley fiscal obliga desde el 401(k) una vez que Homer cumple 75 años. Son más altas en los años de cuidados de larga duración, cuando el hogar vende más para pagar los cuidados. Cada venta sale de una cuenta, de modo que un faltante de efectivo en el gráfico de flujo de caja se convierte en una pila más corta en el gráfico del balance.

La [[nav:si-table]] muestra un año cuenta por cuenta y posición por posición: qué se vendió, qué se invirtió, el saldo posterior y la parte de cada una en la actividad del año. Su última columna, **Por qué**, da el motivo de cada movimiento.

[[img:charts-tables-si-table-2030]]

La columna Por qué es donde se explica un número sorprendente. En 2030 el plan vende un poco de cada cuenta en proporción a su tamaño, que es lo que pide su regla de retiro a prorrata. Homer tiene 54 años ese año, así que la parte que sale del 401(k) tradicional es un retiro anticipado. Deje el puntero sobre la pastilla Por qué de esa fila y los motivos se listan enteros, el retiro anticipado entre ellos. La tarjeta de impuestos, más adelante en esta lección, muestra la penalización que cuesta, y [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order) compara esta regla con una que tira primero de las cuentas sujetas a impuestos.

## Tres estados {#three-statements}

Los contables describen un negocio con tres estados estándar, y las vistas del Previsor se alinean de cerca con ellos.

- El **balance** lista lo que se posee y lo que se debe en un momento. El [[nav:bs-chart]] dibuja uno al final de cada año.
- El **estado de resultados** lista lo que entró y lo que salió durante un periodo, y su última línea es lo que se ahorró. El saldo del [[nav:cf-chart]] es esa última línea para un hogar.
- El **estado de flujos de efectivo** explica por qué cambió el efectivo. Tiene tres partes: la actividad de explotación, la actividad de inversión y la actividad de financiación. El gráfico de flujo de caja es la parte de explotación. Movimientos de dinero es la parte de inversión (ventas e inversiones) y la parte de financiación (endeudamiento).

Los libros de un hogar son más simples que los de una empresa, así que el estado de resultados y la parte de explotación del estado de flujos de efectivo casi coinciden. Por eso Tutilis los dibuja como un solo gráfico.

La tarjeta [[nav:rec]] junta los tres para un año. Escribe el año como una ecuación de balance, cada origen de efectivo a la izquierda y cada uso a la derecha, y dibuja el mismo año debajo como un flujo desde cada origen, a través del efectivo del año, hasta cada uso.

[[img:charts-tables-rec-2030]]

En 2030, los ingresos de Springfield, las distribuciones reinvertidas y las ventas suman exactamente sus gastos, impuestos e inversiones. La ecuación siempre cuadra, y eso es lo que la hace útil. Cuando un número de otra tarjeta parece no sumar, esta tarjeta muestra a dónde fue cada dólar del año.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Lo sabía?</p>
<div class="lesson-did-you-know-body">

Las empresas publican también un cuarto estado, el estado de cambios en el patrimonio neto, que explica cómo se movió la participación de los propietarios durante el año. Para un hogar, la participación de los propietarios es el patrimonio neto, y la línea negra del gráfico del balance ya traza cómo se mueve de un año al siguiente.

</div>
</aside>

## Las tablas y sus pasadas de cursor {#tables-and-their-hovers}

Las tablas muestran un año entero. Ahí lee un importe exacto, y ahí cada línea puede decirle de dónde salió.

La [[nav:bs-table]] empieza por el patrimonio neto, luego separa los activos en activos reales y cuentas, y termina con los pasivos. El chip **Participaciones** de su barra de herramientas abre cada cuenta en los fondos que tiene.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:charts-tables-bs-table-2030]]

Muchos importes se apoyan en una pastilla pequeña marcada con una **i**. Deje el puntero sobre la pastilla y la tarjeta del elemento se abre al lado. En el balance, la tarjeta muestra el saldo final al dólar, que la tabla redondea, por encima del elemento tal como lo describe el plan. Para una cuenta, eso significa su titular y cada fondo que tiene, con su categoría, su valor y su costo.

[[img:charts-tables-bs-row-card]]

La [[nav:cf-table]] hace lo mismo con el flujo de caja. Empieza por el saldo, lista cada ingreso y cada gasto bajo su categoría, y lista los impuestos por clase. Debajo de las salidas lista las ventas que cubrieron el faltante del año, que son las mismas ventas que explica Movimientos de dinero.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:charts-tables-cf-table-2030]]

[[term:hover|Pase el cursor]] sobre la pastilla de una línea de flujo de caja y verá la tarjeta a partir de la cual se construyó esa línea. Cuando la línea salió de un generador, como un salario o una fase de gasto de vida, la tarjeta muestra las entradas del generador. Pase el cursor sobre una línea de dividendo o de interés y la tarjeta muestra el cálculo que hay detrás: el valor de la posición por cada uno de sus rendimientos.

Cada tarjeta de tabla tiene también un botón de copia, que copia la tabla como texto que puede pegar en una hoja de cálculo o en una nota.

## La tarjeta del año {#the-year-card}

La tarjeta del año, **Yr** en la fila de chips, lista lo que cambia en el año seleccionado. Está agrupada en acontecimientos vitales, flujos de caja que empiezan o terminan, y los límites de aportación que se aplican. Es la tarjeta que hay que abrir cuando una barra de un gráfico sube o baja un escalón y usted quiere saber por qué.

[[img:charts-tables-year-events-2041]]

En 2041 Homer se jubila a los 65 años y empieza Medicare, los costos de vida de la jubilación sustituyen a los del trabajo, y Marge toma un plan de salud propio hasta que alcanza la edad de Medicare. Esa sola tarjeta explica el escalón hacia abajo de las barras de ingresos y el cambio de la banda de salud en el gráfico de flujo de caja. La misma lista aparece en una sugerencia cuando deja el puntero sobre la etiqueta de un año bajo cualquiera de los dos gráficos.

## Las tarjetas de impuestos {#the-tax-cards}

La tarjeta [[nav:taxes]] muestra cómo se calculó cada uno de los impuestos del año. En la aplicación, su título se lee como **Impuestos — 2030 (saldo pagado 2031)**. El impuesto sobre los salarios de un año se retiene durante ese año, y el resto del impuesto del año, como el impuesto sobre las ganancias y los retiros, se liquida al año siguiente. Por eso el total de la tarjeta no coincide con la línea Impuestos del flujo de caja del mismo año, que muestra lo que realmente se pagó ese año: su propia retención más el saldo del año anterior.

[[img:charts-tables-tax-statements-2030]]

La tarjeta contiene hasta tres estados, uno al lado del otro cuando la tarjeta es lo bastante ancha, y cada uno responde a preguntas distintas.

- **El estado federal** construye el [[term:agi|ingreso bruto ajustado]] a partir de sus fuentes, muestra el [[term:magi]] debajo, resta la [[term:standard-deduction]] y lista cada impuesto con el importe sobre el que se calculó y el importe liquidado. Mire aquí los ingresos que hay detrás de un [[term:surcharge]] de Medicare, los impuestos sobre la nómina, el [[term:niit|impuesto sobre las rentas netas de inversión]] y las penalizaciones. En 2030, la última línea es la [[term:early-withdrawal-penalty]] del 10 % sobre la venta del 401(k) que explicó Movimientos de dinero.
- **El estado estatal** parte de la renta base propia del estado y lista los ajustes que hace el estado. Ohio resta los intereses de los bonos del Tesoro de EE. UU., que los estados no pueden gravar, y suma un [[term:local-income-tax|impuesto local sobre la renta]] sobre los salarios. Mire aquí cuando mudarse a otro estado es la pregunta, o cuando una fuente de ingresos tributa de forma distinta en el estado que ante el IRS.
- **El estado del impuesto predial** lista cada vivienda u otro inmueble a su valor de mercado con la tasa a la que se grava, de modo que la tasa vigente está en la etiqueta de su fila. Mire aquí cuando una vivienda es una parte grande del plan, porque el [[term:property-tax]] se debe tanto si la vivienda produce algo como si no. [Impuesto predial: el asesino silencioso](/learn/property_tax_the_silent_killer) lo sigue a lo largo de una jubilación.

Bajo los estados, **Consultar las tablas fiscales de EE. UU.** abre los baremos federales y estatales del año, para que pueda comprobar un [[term:bracket]] o un límite contra el número que produjo.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules]]

Dos lentes más se sientan junto al chip Impuestos, y cada una tiene una lección propia. [[nav:brackets]] apila los ingresos del año contra los tramos federales y muestra cuánto espacio queda antes de la tasa siguiente, que es la herramienta para planificar conversiones y retiros. [Llenar los tramos baratos](/learn/filling_the_cheap_buckets) la enseña. [[nav:cliffs]] mide lo cerca que los ingresos del año pasan de cada umbral en el que un costo salta de golpe, lo que Tutilis llama un [[term:cliff]]. Un nivel de recargo de Medicare es uno. [Radar de umbrales](/learn/cliff_radar_forecaster) enseña ese.

## Encontrar una tarjeta por su palabra {#find-a-card-by-its-word}

Todas estas tarjetas solo sirven si puede encontrar la correcta deprisa, y el Glosario está hecho para eso. **[[key:Glossary]]** lo abre, incluso mientras escribe en un campo. Busque una palabra y obtiene su definición, y debajo de la definición una tarjeta dorada titulada **Dónde está en la aplicación**.

[[img:charts-tables-glossary-net-worth]]

La tarjeta Dónde lista las rutas hasta cada lugar en el que aparece la palabra. Algunas palabras solo tienen una salida. El patrimonio neto se muestra en la fila superior de la tabla del balance y en la Vista general. Otras palabras tienen hasta tres clases de ruta: dónde introduce el valor en el plan, dónde prueba un cambio como un «y si» en Transformaciones, y dónde se muestra el resultado en la previsión. Haga clic en una ruta y el Glosario se cierra, la aplicación recorre la ruta, y la tarjeta que nombra se abre en primer plano. Sin un plan abierto, las rutas se muestran pero no se pueden seguir.

[[img:charts-tables-glossary-property-tax]]

El impuesto predial muestra las tres. Se introduce en un activo real del plan, se prueba como un «y si» en Transformaciones, y se muestra en dos lugares de la previsión, en el estado del impuesto predial de la tarjeta Impuestos y en la línea Impuesto predial de la tabla de flujo de caja. Eso hace del Glosario el camino más rápido hacia una tarjeta que no conoce. Busque la palabra que conoce, y deje que la tarjeta Dónde le lleve al lugar que la muestra.

[[jump:property-tax]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

Las rutas **Dónde se ingresa** llevan a los editores propios del plan, y solo la aplicación de escritorio los tiene. Los planes del Centro de aprendizaje son planes didácticos de solo lectura, así que en el lienzo junto a esta lección esas rutas no tienen a dónde ir. En la aplicación de escritorio, donde introduce las cifras de su propio hogar, la misma ruta abre el campo en el que se fija el valor, como el impuesto predial de su vivienda en el Dossier.

</div>
</details>
