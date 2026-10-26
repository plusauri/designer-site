<!--
tutilis-return: lessons/sequence_of_returns_crash_timing/prose/es.md
tutilis-locale: es translated
-->
# Cuándo llega la caída

Jordan tiene 60 años y planea jubilarse en 2031, a los 65. Hay $1.34 million ahorrados: $900,000 en un [[term:401k|401(k)]], $400,000 en una [[term:brokerage]] y $40,000 en una cuenta de mercado monetario. El dinero invertido se reparte aproximadamente 70/30 entre un fondo indexado al S&P 500 y un fondo del Tesoro a plazo intermedio, en ambas cuentas. El gasto es de $72,000 al año en dólares de hoy, y el Seguro Social empieza a los 67.

Jordan ha leído que la caída que hay que temer es la que llega justo cuando dejan de llegar los sueldos. Antes de la jubilación, una bajada del mercado es algo que se puede dejar pasar. Después, el gasto de cada año tiene que venderse a partir de lo que valga la cartera ese año, y las participaciones vendidas en el mínimo no participan nunca en la recuperación. Esto es el [[term:sequence-of-returns|riesgo de secuencia de rendimientos]]: los mismos rendimientos en un orden distinto dejan a quien se jubila con una cantidad de dinero distinta.

En cada conversación sobre el tema aparecen dos defensas. La primera es mantener una reserva grande de efectivo, unos años de gasto en mercado monetario, y vivir de ella durante una caída en lugar de vender acciones. La segunda es tener un poco menos de acciones y adoptar una regla sobre lo que se vende cada año. Esta lección pone a prueba las dos en el mismo hogar, con una caída real colocada en cada año desde 2027 hasta 2046.

Abre tres planes que empiezan con los mismos $1.34 million:

- [70/30](#canvas-dossier:sor_seventy_thirty) es el plan de Jordan tal como está. Los retiros salen de cada posición en proporción a su tamaño.
- [Reserva de efectivo](#canvas-dossier:sor_cash_reserve) mueve $200,000 de la cuenta de corretaje al mercado monetario, de modo que la reserva tiene $240,000, unos tres años de gasto en la jubilación. Todo lo demás queda igual.
- [60/40 reequilibrado](#canvas-dossier:sor_sixty_forty_rebalanced) reparte el dinero invertido 60/40 y fija la estrategia de retiro **Rebalanceo de senda** contra un objetivo constante.

Las dos defensas tienen casi la misma cantidad de acciones. El plan con reserva tiene $770,000 en el fondo S&P 500 y el plan 60/40 tiene $780,000, así que la comparación es entre aparcar el dinero seguro en efectivo sin regla y tenerlo en bonos con una regla.

## Qué aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Cómo pongo una caída histórica en mi plan?** Véase [Poner una caída en el plan](#put-a-crash-in-the-plan).
2. **¿Por qué una ganancia grande después de una pérdida grande me deja atrás?** Véase [Comprobar los rendimientos de la caída](#check-the-crashs-returns).
3. **¿Cuál es el peor año para que empiece una caída?** Véase [Deslizar la caída](#slide-the-crash).
4. **¿Unos años de gasto guardados en efectivo me protegen en una caída?** Véase [Una reserva de efectivo](#a-cash-reserve).
5. **¿Cómo evita una regla de rebalanceo que un plan venda acciones en el mínimo?** Véase [Menos acciones, y una regla](#less-stock-and-a-rule).
6. **¿Es la menor proporción de acciones o la regla lo que hace el trabajo?** Véase [Qué parte hace el trabajo](#which-part-does-the-work).
7. **¿Cómo les va a los tres planes a lo largo de mil trayectorias de mercado?** Véase [Mil trayectorias](#a-thousand-paths).
8. **¿Qué dice la investigación publicada sobre las estrategias de cubos y el riesgo de secuencia?** Véase [Lo que dice la investigación](#what-the-research-says).

</div>
</aside>

## Poner una caída en el plan {#put-a-crash-in-the-plan}

El plan en sí nunca contiene una caída. Sus rendimientos vienen de las hipótesis de crecimiento, que describen un año medio y cuánto puede apartarse un año de ese promedio. Para preguntar qué haría una caída concreta, se superpone una al plan en [[nav:transforms]].

Abra Transformaciones y despliegue **Modificaciones**. Su tarjeta Modificables se abre en la pestaña **Global**, que lista los supuestos que se aplican a todo el plan y no a un solo elemento. **Riesgo de secuencia de rendimientos** es la última fila. Selecciónela:

[[img:sor-crash-modifiables|control]]

El editor de modificación junto a la tarjeta contiene la caída en sí. Actívelo, elija un episodio por el año en que su mercado alcanzó el máximo, y fije el año en que empieza la caída. El control deslizante se abre en el primer año de jubilación, y sus anclas marcan el inicio del plan, cada jubilación y el final de la previsión.

[[img:sor-crash-editor|control]]

[[jump:sequence-of-returns|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.sor-risk]]

Cada episodio reproduce la historia medida. El fondo S&P 500 toma el rendimiento total real del índice año por año, desde la caída hasta la recuperación, y el fondo del Tesoro toma el del Treasury a 10 años. Cada otra posición sigue a través de su [[term:correlation]] con esos dos. La crisis financiera global reproduce seis años: una pérdida pequeña, luego una caída de alrededor del 41%, luego un rebote de alrededor del 56%, y tres años buenos más.

Nada del plan cambia. Transformaciones muestra el plan tal como fue escrito a un lado y el plan con la caída al otro. En el gráfico del balance, los años de la caída van sombreados en rojo a lo largo del eje de años, de modo que siempre se ve dónde está la caída. Esta es la comparación de balance de Transformaciones para el plan 70/30, con la caída donde el editor la pone primero, empezando en 2031. El plan tal como fue escrito está a la izquierda bajo *Original*, el plan con la caída está a la derecha bajo *Modificado*, y ambos lados comparten una escala, como en la aplicación:

[[img:sor-crash-balance-sheet-7030]]

En el lado Modificado, el patrimonio neto cae casi un tercio en 2032, el segundo año de jubilación de Jordan, y no vuelve a su nivel de 2031 hasta 2036. Los dos lados no vuelven a encontrarse. En 2057 el plan con la caída termina unos $670,000 por debajo del plan que no la tiene.

## Comprobar los rendimientos de la caída {#check-the-crashs-returns}

Una caída es más fácil de temer que de medir, y los rendimientos anuales que reproduce pueden engañar a la vista. Tutilis los muestra elemento por elemento en la comprobación **Rendimientos realizados**, que se abre desde este botón de la barra de herramientas del gráfico de balance:

[[img:sor-crash-bs-toolbar]]

El botón está en el gráfico del Previsor y en ambos lados de Transformaciones. Púlselo en el lado Modificado para ver los rendimientos con la caída dentro.

[[jump:return|output__forecaster__forecaster.forecast-detail__bs-chart__bs-chart.return-check]]

La comprobación lista cada posición, y cada flujo de caja que crece, con lo que ganó en cada año de la previsión. Seleccione una fila y sus rendimientos se grafican año por año bajo la lista, con los años de la caída sombreados en el eje. Debajo, la franja **Crecimiento de 1** parte de una unidad de dinero en el año seleccionado y la capitaliza a través de los rendimientos que siguen. Sus botones fijan cuántos años seguir, y **Caída** sigue exactamente los años que reproduce la superposición. Las uniones entre las tres partes pliegan una con un clic, o mueven el límite al arrastrarlo, cuando quiere más sitio para las otras.

Este es el fondo S&P 500 en la cuenta de corretaje de Jordan, con la crisis financiera global empezando en 2030:

[[img:sor-crash-returns-gfc]]

El gráfico de rendimientos hace que la caída parezca un intercambio justo. El fondo pierde alrededor del 41% en 2031 y gana alrededor del 56% en 2032, así que la ganancia parece mayor que la pérdida. La franja Crecimiento de 1 dice lo contrario. Un dólar al inicio de 2030 vale 56 centavos después de la caída, y la ganancia del 56% solo lo sube a unos 88 centavos. Una ganancia es un porcentaje de lo que queda, y después de una pérdida del 41% queda mucho menos sobre lo que pueda actuar. Hay que esperar hasta 2033, el cuarto año de la caída, para que el dólar vuelva a estar entero.

La Gran Caída de 1929 hace el mismo argumento con más fuerza. Aquí empieza en 2031, el año de jubilación de Jordan:

[[img:sor-crash-returns-1929]]

Los rendimientos anuales parecen casi alegres después de los tres primeros años. Hay una ganancia del 140% en 2034 y dos ganancias más de más del 50% más adelante. Promediados año por año, los dieciséis años reproducidos rinden alrededor del 9% al año, lo que es mejor que la expectativa ordinaria del fondo. La franja Crecimiento de 1 cuenta la historia real. Los tres primeros años bajan un dólar a unos 21 centavos, el año del 140% solo lo devuelve a unos 52 centavos, y el dólar no vuelve a pasar de 1.0 hasta 2045, el decimoquinto año de la caída. Dieciséis años que promedian el 9% al año dejan el dólar en alrededor de 1.28, donde los rendimientos ordinarios del fondo lo habrían hecho crecer hasta alrededor de 2.6.

Esta es la trampa al leer un gráfico de rendimientos anuales. Las oscilaciones grandes hacia arriba y hacia abajo parecen cancelarse, y los grandes años de recuperación parecen pagar las pérdidas con creces. No lo hacen, porque las pérdidas y las ganancias se multiplican en lugar de sumarse. Quien se jubila también vende durante esos años, así que el dinero vendido cerca del mínimo no está ahí en absoluto para la recuperación. Por eso el resto de esta lección mide las caídas por lo que hacen al patrimonio neto, y por eso la franja merece una mirada cada vez que se pone a prueba una.

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes disfrutan las matemáticas — por qué una ganancia del 56% no deshace una pérdida del 41%</summary>
<div class="lesson-math-body">

El crecimiento multiplica, así que una serie de rendimientos anuales \(r_t\) convierte un dólar en

\[
G = \prod_t (1 + r_t)
\]

En la reproducción de la crisis financiera global el dólar está en alrededor de 0.56 después de la caída, y \(0.56 \times 1.56 \approx 0.88\).

Después de una pérdida \(L\), la ganancia \(g\) que vuelve al punto de partida resuelve \((1-L)(1+g) = 1\):

\[
g = \frac{L}{1-L}
\]

Eso es el 69% después de una pérdida del 41%, el 100% después de una pérdida del 50% y el 400% después de una pérdida del 80%.

El promedio que describe el crecimiento es el geométrico, \(G^{1/n} - 1\). Los dieciséis años de 1929 promedian alrededor del 9% al año sumados año por año, pero \(1.28^{1/16} - 1 \approx 1.6\%\) al año capitalizado. Los rendimientos ordinarios del fondo se capitalizan a \(2.6^{1/16} - 1 \approx 6.2\%\). La lección [Riesgo y rendimiento](/learn/risk_and_return) tiene la regla práctica para esa brecha: la [[term:geometric-mean|media geométrica]] queda alrededor de media varianza por debajo de la media aritmética.

</div>
</details>

## Deslizar la caída {#slide-the-crash}

El año de inicio es el control que hace que este análisis valga la pena. Abra [[nav:bs-table]] en el último año de la previsión, 2057, y déjelo ahí. Luego mueva el inicio de la caída un año cada vez y observe la línea de patrimonio neto en lo alto de la tabla.

[[jump:net-worth|output__forecaster__forecaster.forecast-detail__bs-table__line.bs.net-worth]]

Estos son los patrimonios netos al final de la previsión en la trayectoria [[term:gmf|GMF]], la previsión que toma el rendimiento esperado de cada año, con la crisis financiera global empezando en cada año:

| Empieza la caída | 70/30 | Reserva de efectivo | 60/40 reequilibrado |
|---|---:|---:|---:|
| Sin caída | $3.10M | $2.56M | $2.65M |
| 2027 | $2.63M | $2.17M | $2.60M |
| 2029 | $2.54M | $2.11M | $2.52M |
| **2030** | **$2.41M** | **$2.03M** | **$2.48M** |
| 2031 | $2.43M | $2.04M | $2.48M |
| 2033 | $2.52M | $2.11M | $2.50M |
| 2038 | $2.59M | $2.16M | $2.54M |
| 2045 | $2.65M | $2.21M | $2.51M |

En cada plan, el peor año para empezar la caída es 2030, no 2031. El editor se abre en el año de jubilación, pero la pérdida profunda de este episodio es su *segundo* año. Empezarla en 2030 pone esa pérdida en 2031, el primer año en que Jordan vive de la cartera. Una caída que golpea en 2027 sigue costando dinero, pero Jordan cobra un sueldo durante la bajada y el rebote, y no vende nada en el mínimo. Una caída en 2045 cae sobre una cartera que ya tuvo años para crecer y a la que el Seguro Social ayuda a sostener.

Conviene deslizar la caída para cada episodio que ponga a prueba, en lugar de fiarse del valor predeterminado. El peor año de inicio es el que alinea el peor año del episodio con el primer año de retiros, y eso depende de la forma del episodio.

## Una reserva de efectivo {#a-cash-reserve}

El plan [Reserva de efectivo](#canvas-dossier:sor_cash_reserve) es la defensa más intuitiva, y en este análisis es la más débil de las tres.

La primera razón aparece sin caída alguna. El mercado monetario rinde menos que las acciones o los bonos, y $200,000 de ese dinero se capitalizan más despacio durante 26 años. Sin caída, el plan termina en $2.56 million frente a $3.10 million del 70/30. La reserva es un seguro, y esa brecha es su prima, pagada cada año haya caída o no.

La segunda razón es que la reserva no funciona como se supone que debe hacerlo. Esto es lo que vende el plan con la caída en su peor colocación, empezando en 2030, de modo que el mínimo cae en 2031:

[[img:sor-crash-sales-2031-cash]]

La reserva aporta alrededor de $21,000 de los $91,000 de ventas del año, y todavía se venden alrededor de $37,000 del fondo S&P 500 en el mínimo. Los retiros del plan son a prorrata, así que vende una tajada de todo. Nada le dice que el efectivo es para los años malos. A modo de comparación, el plan [70/30](#canvas-dossier:sor_seventy_thirty) vende alrededor de $46,000 de acciones en el mismo año:

[[img:sor-crash-sales-2031-7030]]

Esto no es una rareza del programa. Una reserva solo ayuda si alguien decide, en medio de una caída, que este es el año de usarla, y sigue decidiéndolo cada año hasta que el mercado se recupera. Alguien también tiene que decidir cuándo rellenarla. Tutilis no tiene una regla de ese tipo, y quien se jubila también necesita una escrita. Sin ella, una reserva es simplemente una posición de bajo rendimiento.

## Menos acciones, y una regla {#less-stock-and-a-rule}

El plan [60/40 reequilibrado](#canvas-dossier:sor_sixty_forty_rebalanced) tiene un poco menos de acciones y lleva una regla. Su estrategia de retiro es **Rebalanceo de senda**, fijada contra un objetivo constante de 60/40. Cada año el plan compara sus proporciones de acciones, bonos y efectivo con el objetivo. Cuando necesita dinero vende de lo que esté *por encima* del objetivo, y cuando le sobra dinero compra lo que esté por debajo.

En una caída, la proporción de acciones cae por debajo de su objetivo y la de bonos sube por encima. La regla paga entonces el año con bonos, sin que nadie decida nada:

[[img:sor-crash-sales-2031-6040]]

No se vende ningún fondo S&P 500 en 2031. Todo el año sale de los fondos del Tesoro, cada línea marcada *Rebalanceo de senda*. Eso es lo que se suponía que haría la reserva de efectivo, y aquí ocurre automáticamente.

La tabla de la sección anterior muestra lo que esto vale. La caída peor colocada le cuesta al plan 70/30 alrededor de $690,000 de su patrimonio neto final y al plan con reserva alrededor de $540,000. Al plan 60/40 reequilibrado le cuesta alrededor de $180,000. La columna del plan reequilibrado apenas se mueve dondequiera que se coloque la caída. Cuando el año profundo de la caída cae en la jubilación, con la caída empezando en 2030 o en 2031, termina por delante de los otros dos planes. Con la caída empezando en 2029 termina justo detrás del plan 70/30.

## Qué parte hace el trabajo {#which-part-does-the-work}

El plan 60/40 cambió dos cosas a la vez: menos acciones, y la regla. Puede separarlas en Transformaciones. Active la caída para el plan [60/40 reequilibrado](#canvas-dossier:sor_sixty_forty_rebalanced), luego seleccione **Movimientos de dinero** y vuelva a ponerla en **A prorrata**. Lea 2057 otra vez.

[[img:sor-crash-modifiables-sell-invest|control]]

*Transformaciones → Modificables en el plan 60/40, con Movimientos de dinero seleccionado. Esa fila es la estrategia de retiro. Ponerla en A prorrata apaga la regla de rebalanceo y deja en su lugar la menor proporción de acciones.*

[[jump:withdrawal-order|modifiable]]

Con la caída empezando en 2030 y retiros a prorrata, el plan 60/40 termina en alrededor de $2.33 million. Eso está por debajo de los $2.41 million del plan 70/30. En esta trayectoria, la menor proporción de acciones, por sí sola, no compró nada. La regla hizo el trabajo, porque impidió que el plan vendiera acciones en el mínimo.

<details class="lesson-advanced">
<summary class="lesson-advanced-label">Tema avanzado — reproducir la tabla desde la línea de comandos</summary>
<div class="lesson-advanced-body">

Cada número de esta lección sale de `engine-cli`, que toma la misma caída como un par de opciones. Esta es la peor celda del plan 70/30 en la tabla:

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.balance-sheet --sample sor_seventy_thirty --this-year 2026 --year 2057 --overlay global-financial-crisis-2007 --overlay-start 2030 --format md"
```

Cambie `--overlay-start` para recorrer la caída a lo largo de los años. Añada `--residual pro-rata` al comando del plan 60/40 para apagar la regla, que es lo que hace en la aplicación la modificación de la estrategia residual.

La comprobación Rendimientos realizados tiene una tabla propia. Esto imprime los rendimientos de cada elemento para la reproducción de 1929, con una columna de crecimiento sobre los dieciséis años de la caída que coincide con la franja Crecimiento de 1:

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.item-returns --sample sor_seventy_thirty --this-year 2026 --overlay great-crash-1929 --overlay-start 2031 --year 2031 --window 16 --format md"
```

</div>
</details>

## Mil trayectorias {#a-thousand-paths}

Todo lo anterior usó una sola trayectoria: rendimientos esperados en cada año salvo la caída. La [[term:monte-carlo|simulación de Montecarlo]] recorre mil trayectorias con rendimientos extraídos al azar, y la superposición de la caída se aplica a cada una de ellas. Los años de la caída son los mismos en todas partes, y cada otro año varía.

Sin caída, los tres planes tienen éxito en el 96%, el 98% y el 98% de las trayectorias. El patrimonio neto final mediano del plan 60/40 reequilibrado queda a unos $100,000 del plan 70/30, y su resultado del décimo malo es mejor en unos $220,000. A lo largo de muchas trayectorias, un 60/40 reequilibrado cuesta mucho menos de lo que sugería la trayectoria única.

La crisis financiera global apenas mueve esas tasas de éxito, e incluso puede subirlas un poco. La superposición reproduce el rebote tanto como la caída, y seis años con una trayectoria conocida y del todo recuperada sustituyen a seis años que podrían haber ido a cualquier parte. Una caída que se recupera dentro de la superposición no aparece como un fracaso.

El episodio que separa los planes es la Gran Caída de 1929. Reproduce dieciséis años, con una caída de casi el 80% y una recuperación larga y desigual. Colocada en la jubilación de Jordan en 2031, el éxito baja a alrededor del 52% para el 70/30 y a alrededor del 63% para la reserva de efectivo. El plan 60/40 reequilibrado sigue teniendo éxito en alrededor del 75% de las trayectorias. El mismo reparto 60/40 con retiros a prorrata tiene éxito en alrededor del 63%. En una caída tan profunda y tan larga, la menor proporción de acciones y la regla se ganan ambas su sitio.

## Lo que dice la investigación {#what-the-research-says}

Estos resultados concuerdan con el trabajo publicado sobre la cuestión.

Javier Estrada, en *The Bucket Approach for Retirement: A Suboptimal Behavioral Trick?* (2018), puso a prueba estrategias de cubos con 115 años de datos de 21 países. Les fue peor que a asignaciones estáticas simples que se reequilibran después de cada retiro, y sus tasas de fracaso se parecían a las de una cartera de alrededor del 90% en acciones. Una estrategia de cubos mueve dinero de acciones a bonos y luego a efectivo, pero nunca de vuelta, así que nunca compra acciones cuando las acciones están baratas. El rebalanceo sí lo hace.

Wade Pfau y Michael Kitces, en *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014), mostraron que el riesgo de secuencia se concentra en los años alrededor de la fecha de jubilación. Una cartera que tiene menos acciones en la jubilación y añade acciones después sobrevivió más a menudo que una que mantenía una proporción constante y más alta. Es el mismo hallazgo que el del control deslizante: los años alrededor de la fecha de jubilación son los que hay que proteger.

Un cubo todavía tiene un argumento a su favor. Le da a quien se jubila con nervios una historia que hace más fácil no vender acciones en una caída, y la conducta es una parte grande de cómo les va en realidad a quienes se jubilan. Una regla de rebalanceo escrita hace la misma promesa con menos dinero aparcado en efectivo, y quita la decisión que el cubo deja abierta.

## Lo que esto no puede decirle {#what-this-cannot-tell-you}

Este análisis tiene límites, y cuentan para saber hasta dónde fiarse de él.

- **El rebalanceo de senda solo negocia el dinero del año.** Vende las posiciones sobreponderadas cuando el plan necesita dinero y compra las infraponderadas cuando le sobra dinero. No vende bonos para comprar acciones en un año sin retiro neto, y solo compra en cuentas sujetas a impuestos. Un rebalanceo anual completo, como en el estudio de Estrada, también compraría acciones dentro del 401(k) después de una caída.
- **No hay una regla para «usar el efectivo en un año de baja».** Tutilis todavía no puede modelar una reserva que se gasta solo cuando el mercado ha caído y se rellena cuando se recupera. Un hogar que siguiera una regla así con fidelidad puede hacerlo mejor que el plan con reserva de aquí.
- **Las caídas son reproducciones.** Cada episodio repite exactamente una trayectoria histórica. La próxima caída no se parecerá a ninguna de ellas, y la [[term:inflation]] no se reproduce, lo que subestima el episodio de 1973 en particular.
- **Un solo hogar.** Un plan que se apoya con más peso en su cartera, o que tiene una pensión que cubre la mayor parte de su gasto, sentirá el calendario más o menos que el de Jordan.

## Qué conviene llevarse {#what-to-take-away}

- Los rendimientos anuales esconden lo que cuesta una caída. Una ganancia grande después de una pérdida grande no la deshace, porque una ganancia solo hace crecer lo que queda. Lea la franja Crecimiento de 1 en la comprobación Rendimientos realizados para ver lo que la caída hizo de verdad con cada dólar.
- El riesgo de secuencia es cuestión de calendario. Una caída hace el mayor daño cuando su peor año cae en los primeros años de retiros. Deslice la caída en Transformaciones, deje el balance en el último año, y encuentre, para cada episodio, el año de inicio que más duele.
- Una reserva de efectivo sin una regla sobre cuándo gastarla es una posición de bajo rendimiento. Cuesta dinero cada año y hace poco en la caída para la que se compró.
- Una regla permanente de vender lo que esté sobreponderado hace automáticamente el trabajo que se supone que hace una reserva, y sigue volviendo a comprar acciones a medida que el mercado se recupera.
- Quitar algo de riesgo ayuda sobre todo en las caídas profundas y largas. Junto con una regla, le dio a Jordan el mejor resultado en casi cada prueba de caída de aquí, a un costo modesto en un mercado ordinario.
