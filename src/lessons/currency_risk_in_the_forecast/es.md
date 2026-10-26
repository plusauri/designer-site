<!--
tutilis-return: lessons/currency_risk_in_the_forecast/prose/es.md
tutilis-locale: es translated
-->
# El riesgo de divisa en la previsión

Ines está jubilada en Estados Unidos y gasta en dólares. Su ingreso es una pensión de los años en que trabajó en Lisboa, pagada en euros. La mayor parte de sus ahorros está en una escalera de bonos del gobierno británico, en libras, y el resto es una cuenta de ahorro en Tokio, en yenes. Una modesta [[term:brokerage]] estadounidense es lo único que posee cotizado en la divisa en la que vive.

Este es un hogar cuya jubilación es una apuesta sobre tres tipos de cambio, lo haya pensado alguien así o no. Esta lección trata de lo que una previsión puede decir de esa apuesta, y de lo único que esta previsión puede decir y una previsión a tipo fijo no: cuánto de su dispersión son las propias divisas.

El [[term:canvas]] contiene tres planes que son el mismo hogar. El primero convierte cada año a los tipos de hoy, que es lo que hace cada plan salvo que pida otra cosa. El segundo enciende el modelo de riesgo de divisa. El tercero lo enciende e indica una creencia sobre la libra. Cambie de uno a otro mientras lee.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Usuario avanzado</p>
<div class="lesson-power-user-body">

Esta lección fija tipos de cambio y los deja moverse, en la pestaña Moneda de Supuestos. Esa pestaña, y los planes en varias divisas, pertenecen a un **Usuario avanzado**. Actívelo en [[nav:advanced]] → Ajustes de la aplicación → **Usuario avanzado** para seguirlo en sus propios planes.

</div>
</aside>

## Qué aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Cómo enciendo tipos de cambio que se mueven para un plan?** Véase [Nada se mueve hasta que usted lo pide](#nothing-moves-until-you-ask).
2. **¿Qué parte de mi plan está expuesta a divisas extranjeras?** Véase [Lo que posee, y en qué](#what-she-owns-and-in-what).
3. **¿Qué impulsa un tipo de cambio de un año al siguiente en el modelo?** Véase [De qué está hecho un tipo que se mueve](#what-a-moving-rate-is-made-of).
4. **¿Por qué el tipo esperado es plano, y qué ocurre cuando indico una creencia de [[term:inflation]]?** Véase [Plano hasta que indique una creencia](#the-expected-path-is-flat-until-you-state-a-belief).
5. **¿Cómo se ve el riesgo de divisa dentro de una sola trayectoria de previsión?** Véase [Una trayectoria](#one-path).
6. **¿Cuánto de la dispersión de mis resultados viene de las divisas?** Véase [Cuánto es riesgo de divisa](#how-much-of-the-spread-is-the-currencies).
7. **¿Qué deja fuera el modelo de divisa?** Véase [Lo que el modelo no hace](#what-the-model-does-not-do).

</div>
</aside>

## Nada se mueve hasta que usted lo pide {#nothing-moves-until-you-ask}

Abra **Supuestos → Moneda** en el primer plan. Bajo la tabla de tipos hay una elección de dos vías, **Tipos de cambio: Fijos | Modelados**, y está en *Fijos*. Ese ajuste es toda la adhesión. Un plan que nunca lo ha tocado convierte cada año de cada trayectoria a los tipos de la tabla, exactamente como lo hacía antes de que existiera el modelo, y su previsión no cambia ni un céntimo.

[[jump:fx|input]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

[[img:currency-risk-fx-fixed|control]]

*Supuestos → Moneda en el plan de tipos fijos. Tipos de cambio está en Fijos.*

[[img:currency-risk-fx-modeled|control]]

*El mismo panel en el plan modelado. Tipos de cambio está en Modelados, y cada tipo se vuelve una trayectoria propia.*

</div>
</details>

El modelo tampoco cambia cómo se escribe un plan. La pensión sigue registrada en euros, la escalera de bonos en libras, el ahorro en yenes. Lo que cambia *Modelados* es el tipo que usa la previsión cuando convierte esos importes a dólares en un año dado de una trayectoria dada. Con *Fijos*, ese tipo es el mismo número cada vez. Con *Modelados*, es una trayectoria propia.

## Lo que posee, y en qué {#what-she-owns-and-in-what}

Antes de preguntar si los tipos importan, mire cuánto del plan tocan. La previsión informa la [[term:exposure]] estén o no modelados los tipos, porque es un hecho del plan y no del modelo.

[[img:currency-risk-exposure]]

Unos dos tercios de sus activos son libras, un quinto son yenes y un sexto son dólares. La porción en dólares crece un poco a medida que las acciones de EE. UU. se capitalizan y el resto se va gastando, pero la forma se mantiene hasta el horizonte. Su ingreso es aún más tajante: cada euro de él es la pensión de Lisboa, y cada dólar que gasta tiene que comprarse primero con una de las tres divisas extranjeras.

Esa es la forma de su riesgo de divisa. Los activos que financian su jubilación son extranjeros; la jubilación que financian está en dólares. Nada de ello es raro en alguien que ha vivido y trabajado en más de un país, y nada de ello aparece en una previsión que mantiene los tipos quietos.

## De qué está hecho un tipo que se mueve {#what-a-moving-rate-is-made-of}

El modelo no saca un tipo de cambio de la nada, y no le da simplemente a cada divisa un rendimiento y una [[term:volatility]] como se los da a un fondo. Construye el cambio de cada año a partir de dos piezas de las que los economistas discuten desde hace un siglo y en las que, en horizontes largos, casi coinciden.

La primera pieza es la **deriva por inflación**. Si los precios de un país suben más rápido que los de otro, la divisa de ese país tiende a perder valor frente a la otra aproximadamente en la diferencia. Eso es la paridad del poder adquisitivo relativa, y a lo largo de décadas es lo más fiable que se puede decir sobre adónde se dirige una divisa. En el modelo, la inflación de cada región se indica respecto a la inflación de presentación propia del plan para Estados Unidos. Una región con un diferencial de cero se cree que se infla al mismo ritmo que EE. UU., y su divisa no tiene deriva. Por eso tampoco una divisa de alta inflación puede quedarse fuerte por accidente: la deriva está atada a la inflación que el resto de la previsión ya usa.

La segunda pieza es el **tipo de cambio real**, que es el tipo una vez quitados los niveles de precios de ambos países. Ahí vive el verdadero riesgo de divisa. Los tipos reales oscilan, a veces un cuarto o más, pero no oscilan para siempre. Tienden a volver hacia un nivel de largo plazo en unos años. El modelo lo indica como una vida media: el número de años que tarda en cerrarse la mitad de una desviación, cuatro años para las grandes divisas flotantes. Cada año el tipo real da un paso aleatorio y luego se inclina de nuevo hacia su nivel de largo plazo, de modo que una trayectoria de cuarenta años no puede alejarse hasta una valoración que ninguna divisa haya tenido nunca.

El tipo [[term:nominal]] que ve es el producto de los dos. No recibe una volatilidad propia, y es a propósito: si el tipo nominal y el tipo real se muestrearan por separado, podrían contar historias contradictorias. Cada número que usa el modelo, por divisa, está listado en **Supuestos → Moneda** y lo imprime `assumptions.fx-model`. La mayoría son supuestos del mundo compartido, como el ritmo al que se indexan los tramos impositivos, y no algo que se le pida teclear a cada hogar. La única excepción es el diferencial de inflación, una creencia que un hogar puede sostener razonablemente para sí, y la sección siguiente muestra dónde indicarla.

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes aman las matemáticas — la deriva y la vida media</summary>
<div class="lesson-math-body">

**Deriva.** Con la inflación de EE. UU. \(\pi_{US}\) y la inflación de la otra región \(\pi_c\), el cambio anual esperado del tipo, en logaritmos, es

\[
\ln\frac{1+\pi_{US}}{1+\pi_c}
\]

así que a lo largo de muchos años el tipo esperado es simplemente el cociente de los dos niveles de precios.

**El tipo real.** Escriba la distancia logarítmica del tipo real a su nivel de largo plazo como \(x_t\). Cada año conserva una parte \(\rho\) de esa distancia y da un paso aleatorio:

\[
x_{t+1} = \rho\,x_t + \sigma_q\,\varepsilon_{t+1}, \qquad \rho = 0.5^{1/h}
\]

Una desviación se reduce a \(\rho^h = 0.5\) de sí misma después de \(h\) años, que es lo que significa una vida media. Con una vida media de cuatro años, \(\rho = 0.5^{1/4} \approx 0.84\).

El tipo nominal que ve es el tipo real arrastrado por el cociente de los niveles de precios, así que no recibe volatilidad propia.

</div>
</details>

## Plano hasta que indique una creencia {#the-expected-path-is-flat-until-you-state-a-belief}

La previsión determinista, el [[term:gmf|GMF ✦]], no extrae pasos aleatorios. En el segundo plan su trayectoria de tipos de cambio es plana: una libra vale los mismos dólares en 2053 que en 2027. No es que el modelo se niegue a trabajar. Es el modelo diciendo que, sin un diferencial de inflación indicado y con el tipo de hoy tomado como valor justo, el tipo esperado es el tipo de hoy. La dispersión que verá en un momento viene enteramente de las trayectorias alrededor de esa expectativa.

El tercer plan indica una creencia: Gran Bretaña se infla 1,5 puntos al año más rápido que Estados Unidos. Nada más es distinto. La creencia vive en la tabla de tipos de **Supuestos → Moneda**, en la columna **Inflación vs EE. UU.**, que se puede editar una vez que Tipos de cambio está en *Modelados*. La fila de la libra lee allí 1,5 %, y cada otra fila lee cero. En la tabla de parámetros de debajo, la fuente de la libra pasa del valor predeterminado del sistema al propio plan. Ahora la trayectoria GMF de la libra se inclina. Cada año la libra pierde cerca de un 1,4 % de su valor en dólares, que es exactamente el cociente de las dos tasas de inflación, y en 2053 queda casi un tercio por debajo de donde empezó. El euro y el yen, sin diferencial indicado, se quedan planos a su lado.

Como dos tercios de lo que posee Ines son libras, esa sola creencia lleva el patrimonio neto terminal esperado de poco menos de un millón de dólares a poco más de la mitad. Nada del plan cambió salvo un único supuesto sobre la inflación de dos países, y la previsión se movió más de lo que la moverían la mayoría de las ediciones del propio plan. Puede leer la trayectoria en `forecast.fx-path` para la previsión esperada, y es la forma más limpia de comprobar lo que hace un diferencial indicado antes de fiarse de un [[term:monte-carlo|Monte Carlo]] construido sobre él.

## Una trayectoria {#one-path}

Cada trayectoria estocástica extrae sus propios tipos. En el segundo plan, la previsión 7 tiene la libra cerca de un 8 % por debajo de hoy a mediados de la década de 2030, un cuarto por encima a lo largo de finales de la de 2040, y de vuelta a cerca de un 15 % por encima en el horizonte. El euro pasa las mismas décadas un cuarto fuerte y vuelve a hoy en 2053. El yen termina un quinto más fuerte de lo que empezó. Los tres no se mueven con independencia: el modelo correlaciona las sorpresas del tipo real entre divisas, de modo que un año en el que el dólar se fortalece tiende a fortalecerlo frente a las tres, y correlaciona las sorpresas de inflación de cada región con el tipo real de su propia divisa.

Así se ve el riesgo de divisa dentro de una trayectoria: tipos que se alejan mucho, vuelven y se alejan otra vez, atados de forma laxa por un factor dólar común. Ninguna trayectoria es una predicción. Lo que importa es que cada trayectoria es económicamente posible, cosa que un paseo aleatorio sobre el tipo nominal no sostendría a lo largo de una jubilación.

## Cuánto es riesgo de divisa {#how-much-of-the-spread-is-the-currencies}

La pregunta que Ines hizo de verdad es cuánto de su dispersión son las propias divisas, y una previsión a tipo fijo no puede responderla. Para responderla, la previsión ejecuta el mismo Monte Carlo dos veces, una con los tipos modelados y otra con ellos mantenidos en los de hoy, y compara el patrimonio neto final. La tabla **Riesgo cambiario** de la vista rápida de FX lo hace bajo demanda; `forecast.currency-risk` imprime la misma comparación.

[[jump:fx|output__fx]]

[[img:currency-risk-nw-distribution-fixed]]

[[img:currency-risk-nw-distribution-modeled]]

Con los tipos quietos, la nube de resultados es lo que hacen de ella su escalera de bonos, su tasa de ahorro y sus acciones. Con los tipos modelados, la nube es más ancha por los dos lados: un [[term:percentile]] 90 más alto, porque una libra o un euro fuerte es tan posible como uno débil, y un percentil 10 más bajo, porque uno débil también lo es. La desviación típica de su patrimonio neto final es un quinto más alta, el suelo en el percentil diez es decenas de miles de dólares más bajo, y la tasa de éxito es un par de puntos más baja. La última fila de la tabla pone un número: **cerca de tres décimas de la varianza de su patrimonio neto final vienen de los tipos de cambio.** El resto son los activos.

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes aman las matemáticas — cómo un quinto más de dispersión se vuelve tres décimas de la varianza</summary>
<div class="lesson-math-body">

La varianza es el cuadrado de la desviación típica. Si los tipos modelados hacen la desviación típica \(1.2\) veces la del tipo fijo, la varianza es \(1.2^2 = 1.44\) veces mayor, y la parte que añaden los tipos de cambio es

\[
1 - \frac{\sigma_{fixed}^2}{\sigma_{modeled}^2} = 1 - \frac{1}{1.44} \approx 0.31
\]

</div>
</details>

Lea ese número como está pensado. No es una previsión de hacia dónde irán las divisas; la trayectoria esperada es plana. Es una medida de cuánta de su incertidumbre lleva en las divisas y no en los mercados, que es lo que le diría si cubrir, o tener más de sus ahorros en dólares, vale lo que cuesta. Un hogar con la misma parte extranjera en acciones encontraría las divisas una parte menor de una dispersión mayor; un hogar que tiene bonos y efectivo extranjeros, como ella, las encuentra una parte grande de una modesta.

Dos cosas hacen posible esta medición aquí y no en una hoja de cálculo con una columna de tipos. Los tipos viven dentro de la simulación, de modo que cada trayectoria lleva su propio historial de tipos junto a sus propios rendimientos, en lugar de un tipo estático multiplicado después. Y el plan puede ejecutarse con los tipos congelados, de modo que la atribución es una comparación de dos previsiones honestas y no una conjetura sobre lo que aportaron las divisas.

## Lo que el modelo no hace {#what-the-model-does-not-do}

El modelo de divisa no cambia cómo crece ninguna partida. La escalera de bonos sigue ganando lo que gana una escalera de bonos, en libras; el modelo solo cambia el tipo usado para expresar ese valor en libras en dólares. No cambia la inflación de EE. UU., que sigue siendo la inflación de presentación propia del plan y es la misma curva a lo largo de la cual se descuenta cada cifra en dólares de hoy de la aplicación. Y todavía no correlaciona los movimientos de una divisa con los rendimientos de los activos tenidos en ella. Esos son los pasos siguientes, y el modelo está hecho para que encajen sin cambiar lo que dice un plan.

## Qué llevarse {#what-to-take-away}

- Los tipos de cambio pueden formar parte de la simulación, pero solo para un plan que se adhiere. Un plan que nunca toca el interruptor prevé exactamente como antes.
- Un tipo que se mueve son dos cosas: una deriva del diferencial de inflación entre regiones, y un tipo real que vaga y vuelve. El tipo nominal se sigue de ambos, así que ninguna divisa puede quedarse fuerte por accidente ni vagar hasta un nivel imposible.
- La trayectoria esperada es plana hasta que indique un diferencial. Indique uno, y la deriva es el cociente de las dos tasas de inflación, año tras año, y un hogar que está sobre todo en esa divisa se mueve con ella.
- La previsión puede decir cuánto de la dispersión de un hogar son sus divisas ejecutando el mismo Monte Carlo con los tipos modelados y con ellos quietos. Para una jubilada que vive de un ingreso extranjero y de bonos extranjeros, esa parte es grande, y es el número que dice si el riesgo de divisa merece que se haga algo.
