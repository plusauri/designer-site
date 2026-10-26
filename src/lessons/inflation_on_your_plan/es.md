<!--
tutilis-return: lessons/inflation_on_your_plan/prose/es.md
tutilis-locale: es translated
-->
# Los precios en su plan

La [[term:inflation|inflación]] es un aumento de los precios de las cosas que compra un hogar. Los precios suben cuando la gente intenta comprar más de lo que se produce, cuando fabricar las cosas cuesta más, o cuando la gente sube los precios porque espera que los precios suban. [El hogar Reyes](#canvas-dossier:reyes_prices) parte de un valor histórico predeterminado para cada tasa de crecimiento del plan. Esos valores predeterminados son lecturas razonables del pasado. El futuro puede diferir de esa historia, y cada tasa de este plan es una que usted puede leer y una que usted puede cambiar.

Abra el plan y [[term:hover|pase el cursor]] sobre **Sam's college** en [[nav:cf-table]]. La tarjeta nombra el **Crecimiento del costo** de esa factura. Living expenses, Maya's wages y la hipoteca llevan cada una su propia tasa, y la sección siguiente las enumera junto a la tarjeta de la universidad. Una noticia que cita una sola cifra de inflación está citando una sola cesta. Este plan es la lista propia de Maya.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Por qué las facturas de este plan crecen a tasas distintas?** Véase [Varias facturas, varias tasas](#several-bills-several-rates).
2. **¿Por qué la hipoteca se ve plana en [[term:nominal|Nominal]] y más pequeña en $ de hoy?** Véase [Nominal y dólares de hoy](#nominal-and-todays-dollars).
3. **¿Cómo estreso solo la factura de la universidad?** Véase [Cambiar una sola factura](#change-one-bill).
4. **¿Hasta dónde puede llegar un año duro en el control de la compra?** Véase [Un año más rápido](#a-faster-year).

</div>
</aside>

## Varias facturas, varias tasas {#several-bills-several-rates}

Cada factura de este plan crece a su propia tasa. El gráfico de flujo de caja dibuja los dólares de un año, y la tasa misma está en la tarjeta de la partida. La tasa se lee con más facilidad en la tarjeta que en el gráfico. Mire las barras por encima del eje. Esos son los ingresos, y se hacen más grandes de año en año, con una leve curva a lo largo de sus cimas. Las barras por debajo del eje crecen hacia abajo, y sus cimas forman también una leve curva. Una barra más grande es el crecimiento, y el porcentaje de ese crecimiento es el número de la tarjeta. La leve curva es la [[term:compounding]]. El crecimiento de cada año se suma al crecimiento que vino antes.

[[img:prices-cash-flow]]

Aquí está 2028, con Sam en la universidad. Las barras son los dólares de ese año. [[term:hover|Pase el cursor]] sobre **Sam's college** en [[nav:cf-table]] y lea **Crecimiento del costo**.

[[img:prices-college-card]]

El **Crecimiento del costo** de esa tarjeta se lee N(4.5%, 2%, μg=4.5%). Esa es la tasa del catálogo para los precios universitarios. El 4,5 por ciento es el promedio, el 2 por ciento es la volatilidad, y μg<!-- term-skip: volatility — the same sentence says what the 2 percent is --> es la tasa a la que se capitaliza la factura, alrededor de un 4,5 por ciento al año a lo largo de los cuatro años en que está en el plan, a partir de 2027. Los precios universitarios han ido por delante de la cesta de la compra durante mucho tiempo, y el catálogo conserva esa brecha. El control **Crecimiento del costo** de **Sam's college** en [[nav:transforms]] se abre cerca del 4,5 por ciento.

Living expenses sube alrededor de un 2,8 por ciento al año. La tarjeta de **Living expenses** nombra esa fila **Crecimiento del gasto**, y se lee N(2.8%, 1.5%, μg=2.8%). Esa es la tasa de largo plazo del [[term:cpi|CPI-U]] que el catálogo usa para el gasto ordinario de un hogar. Seleccione **Living expenses** en [[nav:transforms]] y el control **Crecimiento del gasto** se abre en esa tasa. La imagen de la fila está más abajo, en [Un año más rápido](#a-faster-year).

Maya's wages sube alrededor de un 3,5 por ciento al año hasta que Maya se jubila. La tarjeta de **Maya's wages** nombra esa fila **Crecimiento**, y se lee N(3.5%, 1.5%, μg=3.5%). De 2027 a su último año de trabajo, el sueldo se duplica aproximadamente, que es lo que hace alrededor de un 3,5 por ciento al año a lo largo de esos veinte años. El control **Crecimiento** de **Maya's wages** se abre en esa tasa.

[Tasas de crecimiento: las del sistema y las suyas](/learn/growth_rates_yours_and_the_systems) es la lección para una tasa que el hogar conoce mejor que el catálogo y que quiere escribir.

La hipoteca es la excepción. Pase el cursor sobre **Home mortgage** en [[nav:cf-table]]. La fila **Pago** es de unos $17,000 cada año en que el préstamo está en el plan. Debajo, el [[term:principal]] sube y los intereses bajan, y los dos intercambian el lugar mientras la suma se queda quieta. El pago sigue el calendario de amortización, así que la hipoteca se queda fuera de los controles de crecimiento. [A quién favorece la inflación](/learn/inflation_who_it_helps) es donde ese pago plano se convierte en el punto de la historia.

El balance tiene también su propia lista. La casa, el fondo de acciones del 401(k)<!-- term-skip: 401k — an account name in a list --> y el fondo [[term:tips]] llevan cada uno la tasa del catálogo de su propia clase. La lección siguiente dedica tiempo al fondo TIPS.

No hay una sola cifra de inflación en el modelo, y no hay una sola cifra de inflación en los precios que paga un hogar. Los costos tienden a subir juntos con el tiempo, y suben a tasas distintas.

## Nominal y dólares de hoy {#nominal-and-todays-dollars}

El pago de la hipoteca es el mismo número de dólares cada año, y esos dólares compran menos de la cesta de la compra a medida que suben los precios.

El menú **Visualización** de la barra superior tiene dos maneras de leer un dólar, bajo **Poder adquisitivo**. **Nominal** muestra cada importe en el dinero de su propio año. **$ de hoy** reexpresa cada importe futuro al poder adquisitivo de hoy.<!-- term-skip: real — the sentence is the definition, and display basis is already pilled --> La elección es la [[term:display-basis|base de visualización]]. Cambia la imagen y deja el plan en paz. [Rendimientos reales y nominales](/learn/foundations_time_value_real_vs_nominal) es la visita más larga al mismo par de lecturas.

[[img:prices-display-basis|control]]

Quédese en Nominal y abra [[nav:cf-chart]]. Pase el cursor sobre un año. La tarjeta lista **Home mortgage** como un solo pago, unos $17,000, con el principal y los intereses en las líneas de debajo. Ese total es el mismo en 2027 y en un año posterior, como 2035. La fila **Pago** de la tarjeta de la hipoteca es el mismo número, escrito una vez para todo el préstamo.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

Cambie a $ de hoy. Pase el cursor sobre un año posterior. El mismo pago se dibuja como menos dólares de hoy. Este plan reexpresa los dólares futuros al 3,5 por ciento al año, la tasa de presentación de sus supuestos. Un dólar prometido dentro de veinte años se dibuja como menos de un dólar hoy, así que un pago que es plano en la chequera se ve más ligero en la compra de hoy.

Esa es la semilla de la lección siguiente. El importe en dólares del préstamo se quedó quieto. El sueldo de Maya subió. El peso del pago bajó. Los precios pueden ayudar a la persona que debe una pila fija de dólares.

Las imágenes de esta lección son el gráfico Nominal. Elija $ de hoy en el menú Visualización cuando quiera la lectura en poder adquisitivo.

## Cambiar una sola factura {#change-one-bill}

La universidad es la factura que usted puede empujar por su cuenta, y el resto del plan se queda en las tasas que ya tenía.

Maya puede preocuparse por los cuatro años de Sam sin decidir que la compra, los salarios y la hipoteca deban acelerar todos juntos. [[nav:transforms]] es el lugar para probar eso. Despliegue **Modificaciones**. En la tarjeta Modificables, seleccione **Sam's college**.

[[jump:inflation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.cash-flows]]

[[img:prices-college-modifiable|control]]

El editor junto a la tarjeta tiene un control **Crecimiento del costo**. Se abre cerca del 4,5 por ciento y va de 0 a 25 por ciento. Muévalo al 12 por ciento.

[[img:prices-college-editor|control]]

Esa es una subida rápida en esta sola factura. El gráfico de flujo de caja dibuja el plan guardado bajo Original y ese ensayo bajo Modificado, para los años en que Sam está en la universidad. Sam's college es la banda azul bajo el eje. En el gráfico Modificado esas barras son más altas, porque esa factura creció más deprisa. Living expenses, los salarios, el Seguro Social, la pensión y la hipoteca se quedan en sus propias tasas.

[[img:prices-college-growth]]

Cierre Transformaciones, o borre el cambio, y el plan guardado es el que usted abrió. La prueba de estrés nunca tuvo que convertirse en un dossier nuevo.

Un hogar con tres hijos que se encaminan a la universidad hace lo mismo en su propio plan: seleccione la línea de la universidad, mueva solo ese control y lea el gráfico. Las otras facturas conservan las tasas que tenían.

## Un año más rápido {#a-faster-year}

Un año duro para los precios es algo que usted puede tender sobre la factura de la compra, y el control muestra hasta dónde llevará este plan ese ensayo.

Seleccione **Living expenses** en la misma tarjeta Modificables.

[[img:prices-living-modifiable|control]]

**Crecimiento del gasto** se abre cerca del 2,8 por ciento. El control llega a unas tres veces esa tasa a cada lado del punto en que se abrió, así que esta factura de la compra puede fijarse cerca del 8 por ciento, o cerca de un 8 por ciento por debajo de cero. Deslícelo hacia arriba y observe la línea de gastos de vida en Nominal. Todo lo demás se mantiene. Eso es un hogar que pregunta qué le haría un tramo de precios más rápido a su propia factura de la compra.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Sabía que…?</p>
<div class="lesson-did-you-know-body">

La variación de doce meses del CPI-U fue del 9,1 por ciento en junio de 2022, y del 14,8 por ciento en marzo de 1980. Lo alto de este control, cerca del 8 por ciento, queda en la vecindad de ese pico de 2022 para un solo año, y se detiene antes de 1980. La [[term:hyperinflation|hiperinflación]], en la definición de Philip Cagan de 1956, empieza en un mes en que los precios suben un 50 por ciento o más. Alemania en 1923, Hungría en 1946, Zimbabue en 2008 y Venezuela en la década de 2010 cruzaron esa línea. El control es un estrés para la factura de la compra de Maya. Un mes como aquellos queda muy por encima. [A quién favorece la inflación](/learn/inflation_who_it_helps) escribe las causas presuntas de una subida y de una bajada, y la caída de los precios al consumo de Estados Unidos desde 1930 hasta 1933.

</div>
</aside>

La otra dirección del mismo control es una caída de los precios. [A quién favorece la inflación](/learn/inflation_who_it_helps) lo usa, junto con el sueldo de Maya, la pensión y el Seguro Social, para preguntar quién gana cuando los precios suben y quién gana cuando bajan.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Obras citadas — las publicaciones detrás de las cifras</summary>
<div class="lesson-bibliography-body">

- Oficina de Estadísticas Laborales de EE. UU., [comunicado del índice de precios al consumidor de junio de 2022](https://www.bls.gov/news.release/archives/cpi_07132022.htm). El CPI-U subió un 9,1 por ciento en los doce meses que terminaron en junio de 2022.
- Oficina de Estadísticas Laborales de EE. UU., [Los precios al consumidor subieron un 8,5 por ciento en el año terminado en marzo de 2022](https://www.bls.gov/opub/ted/2022/consumer-prices-up-8-5-percent-for-year-ended-march-2022.htm). La tabla de variaciones anteriores de doce meses incluye marzo de 1980 en un 14,8 por ciento.
- Philip Cagan, «The Monetary Dynamics of Hyperinflation», en Milton Friedman, editor, *Studies in the Quantity Theory of Money*, University of Chicago Press, 1956. La hiperinflación empieza en el mes en que los precios suben más de un 50 por ciento.

</div>
</details>
