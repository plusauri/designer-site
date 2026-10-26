<!--
tutilis-return: lessons/safer_approaching_retirement/prose/es.md
tutilis-locale: es translated
-->
# Menos riesgo antes de la jubilación

Morgan tiene 63 años y planea jubilarse en 2028, a los 65. Hay 1,5 millones de dólares ahorrados: 1 millón de dólares en un [[term:ira|IRA]] [[term:traditional]], 450.000 $ en una [[term:brokerage]] y 50.000 $ en una cuenta de mercado monetario. El dinero invertido se reparte cerca de 80/20 entre un fondo indexado del S&P 500 y un fondo de bonos del Tesoro a medio plazo. Morgan gana 120.000 $ al año hasta la jubilación, gasta 84.000 $ al año en dólares de hoy y solicita el Seguro Social a los 67.

El consejo habitual para alguien en la situación de Morgan es volverse más seguro a medida que se acerca la fecha de jubilación. Los asesores quieren decir varias cosas distintas con eso: tener menos acciones, construir una escalera de bonos o de TIPS, comprar una [[term:annuity]], guardar un fondo de emergencia más grande y apoyarse en una pensión si la hay. Esta lección muestra que todos esos movimientos hacen lo mismo. Cada uno desplaza dinero hacia el efectivo en el gráfico **Riesgo vs. retorno**, hacia abajo y hacia la izquierda, y renuncia a parte del rendimiento esperado para llegar allí.

Abre tres planes para el mismo ahorrador, con los mismos 1,5 millones de dólares:

- [Sigue en 80/20](#canvas-dossier:safer_stays_eighty_twenty) es la cartera de Morgan tal como está, mantenida en 80/20 durante la jubilación.
- [Baja](#canvas-dossier:safer_moves_down) reordena la IRA antes de la jubilación. Tiene menos acciones y añade [[term:tips|TIPS]] y bonos del Tesoro a corto plazo, de modo que toda la cartera queda cerca de 55/45. La cuenta de corretaje se deja como está, para no vender nada con una ganancia gravable.
- [Suelo de renta](#canvas-dossier:safer_income_floor) usa 300.000 $ de la IRA para comprar una renta de ingresos que paga 2.050 $ al mes de por vida desde los 65 años. El resto de la cartera sigue en 80/20.

Los tres planes usan la misma regla para lo que se vende. Cada uno mantiene una asignación objetivo constante con la estrategia de retiro **Rebalanceo de senda**. [[term:rebalance|Reequilibra]] al retirar, vendiendo lo que está por encima de su objetivo cuando el plan necesita dinero. La lección [El momento de una caída](/learn/sequence_of_returns_crash_timing) muestra por qué esa regla importa, así que aquí se mantiene fija, y solo cambia la cantidad de riesgo.

## Lo que aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Por qué los años justo antes de la jubilación piden menos riesgo?** Vea [Por qué importan los últimos años](#why-the-last-years-matter).
2. **¿Dónde se sitúa mi cartera en el gráfico de riesgo, y qué la mueve?** Vea [Leer el gráfico de riesgo](#read-the-risk-chart).
3. **¿Qué cuesta tener menos acciones, y qué compra?** Vea [Bajar en el gráfico](#moving-down-the-chart).
4. **¿Cómo ayuda un tramo seguro en una caída larga?** Vea [Algo seguro que vender](#something-safe-to-sell).
5. **¿Dónde encaja una renta de ingresos, y qué cuesta?** Vea [Un suelo de ingresos](#an-income-floor).
6. **¿Alguno de estos movimientos es de verdad seguro?** Vea [Nada es del todo seguro](#nothing-is-fully-safe).
7. **¿Dónde encajan los dividendos, el efectivo, las pensiones y las escaleras de bonos?** Vea [Otros movimientos, el mismo eje](#other-moves-same-axis).
8. **¿Qué dice la investigación de Wade Pfau sobre construir un suelo seguro?** Vea [Lo que dice la investigación](#what-the-research-says).

</div>
</aside>

## Por qué importan los últimos años {#why-the-last-years-matter}

Los años alrededor de la fecha de jubilación son el momento en que una caída del mercado hace más daño. Antes de la jubilación, un sueldo cubre el gasto y una caída es algo que se puede esperar. Después, el gasto de cada año tiene que salir de vender algo, y las participaciones vendidas cerca del fondo de una caída nunca participan en la recuperación. Esto es el [[term:sequence-of-returns|riesgo de secuencia de rendimientos]], y la lección [El momento de una caída](/learn/sequence_of_returns_crash_timing) lo mide en detalle.

Puede verlo ocurrir en el plan de Morgan metiendo en él una caída histórica. El plan mismo nunca contiene una caída, porque sus rendimientos vienen de hipótesis de crecimiento que describen un año medio. Una caída concreta se superpone al plan en [[nav:transforms]]. Abra Transformaciones, despliegue **Modificaciones** y seleccione **Caídas/Riesgo SOR**, la última fila de la pestaña **Global**:

[[jump:sequence-of-returns|modifiable]]

[[img:safer-sor-modifiables|control]]

Actívelo en el editor junto a la tarjeta, elija el episodio de 2007, la crisis financiera mundial, y mueva el año de inicio a 2027. El control se abre en el año de jubilación de Morgan, 2028, y esta sección trata del año anterior:

[[img:safer-sor-editor-gfc|control]]

Transformaciones dibuja ahora el plan dos veces. Mire la comparación del balance, con el plan tal como está escrito bajo *Original* y el plan con la caída bajo *Modificado*, en una escala compartida:

[[img:safer-bs-gfc-8020]]

*Sigue en 80/20 con la crisis financiera mundial desde 2027. Los años de la caída están marcados en el eje de años del lado Modificado.*

En 2027 Morgan todavía cobra un sueldo, y la pequeña pérdida del primer año de la crisis apenas se nota. Su segundo año, el profundo, cae en 2028, el primer año en que Morgan vive de la cartera, y el patrimonio neto baja de unos 1,58 millones de dólares a unos 1,04 millones. No vuelve a su nivel de 2027 hasta 2032, y nunca alcanza al plan que no tuvo caída.

Para tener perspectiva, cambie el episodio a 1929 y deje el inicio en 2027:

[[img:safer-bs-1929-2027-8020]]

*Sigue en 80/20 con el Gran Crac de 1929 desde 2027.*

La crisis financiera mundial se recupera dentro de los seis años que reproduce. El Gran Crac reproduce dieciséis, y lleva el plan 80/20 de 1,5 millones de dólares al principio a unos 460.000 $ al final de 2029. La cartera nunca se recupera, y al plan se le acaba el dinero en 2046. La sección [Algo seguro que vender](#something-safe-to-sell) vuelve a este episodio y pone a prueba los planes más seguros. Vuelva a 2007 antes de seguir leyendo.

Ahora deje la caída encendida y mueva su año de inicio. Abra [[nav:bs-table]] en 2055, el último año de la previsión, y observe la línea de patrimonio neto del lado Modificado mientras se mueve el control. La caída sigue en vigor cuando cambia de plan con los chips de encima del lienzo, así que puede leer la columna de cada plan sin volver a prepararlo. Este es el patrimonio neto final para los años de inicio que merecen una mirada:

| La caída empieza | Sigue en 80/20 | Baja | Suelo de renta |
|---|---:|---:|---:|
| Sin caída | 1,88 M$ | 1,47 M$ | 1,81 M$ |
| **2027** | **1,25 M$** | **1,13 M$** | **1,32 M$** |
| 2028 | 1,26 M$ | 1,13 M$ | 1,34 M$ |
| 2029 | 1,29 M$ | 1,16 M$ | 1,37 M$ |
| 2030 | 1,32 M$ | 1,18 M$ | 1,39 M$ |
| 2033 | 1,38 M$ | 1,20 M$ | 1,42 M$ |

El peor inicio en cada plan es 2027, el año anterior a la jubilación, porque pone el año más profundo de la crisis en el primer año sin sueldo. Los inicios posteriores siguen doliendo, y duelen un poco menos cada año, porque la cartera ha tenido más tiempo para crecer y el Seguro Social, que empieza en 2030, carga con más del gasto. En su peor colocación, la caída le cuesta al plan 80/20 cerca de un tercio de su patrimonio neto final.

Los asesores no pueden ver venir la próxima caída, así que reducen el daño que puede hacer en esos pocos años. Hay dos maneras de hacerlo. Una es tener activos que no caen con las acciones, para que haya otra cosa que vender. La otra es tener un ingreso que sigue llegando, para tener que vender menos. Cada movimiento de esta lección hace una de las dos, o las dos.

## Leer el gráfico de riesgo {#read-the-risk-chart}

Tutilis dibuja el riesgo de la cartera en un solo gráfico. Abra [[nav:risk]] y mire **Riesgo vs. retorno**. Cada punto es un elemento colocado por su rendimiento anual esperado, [[term:mu|μ]], en el eje vertical, y su [[term:volatility|volatilidad]], [[term:sigma|σ]], en el eje horizontal. La estrella es toda la cartera. Encienda el chip **Participaciones** para ver cada fondo por separado.

[[jump:volatility|output__risk__line.risk.risk]]

Este es el plan [Sigue en 80/20](#canvas-dossier:safer_stays_eighty_twenty):

[[img:safer-risk-8020]]

El fondo del S&P 500 está arriba a la derecha, con un rendimiento de cerca del 7,6 % y una σ de cerca del 16 %. El fondo del Tesoro está más abajo y más a la izquierda, y el fondo de mercado monetario es el que está más a la izquierda de todos. La estrella es una mezcla ponderada por el valor, así que una cartera con un 80 % en acciones se sitúa casi todo el camino hacia el fondo de acciones, con una σ de cerca del 12,4 % y un rendimiento de cerca del 6,9 %.

Este es el plan [Baja](#canvas-dossier:safer_moves_down), con el mismo fondo de acciones y dos posiciones nuevas cerca de abajo a la izquierda:

[[img:safer-risk-down]]

El fondo de bonos del Tesoro a corto plazo está junto al efectivo, y el fondo de TIPS está cerca del fondo del Tesoro con un rendimiento un poco más alto. La estrella se ha movido hacia abajo y hacia la izquierda, a una σ de cerca del 8,6 % y un rendimiento de cerca del 6,2 %. Cada movimiento más seguro de esta lección es un movimiento en esa dirección. La cartera renuncia a parte del rendimiento esperado y, a cambio, se vuelve mucho menos volátil.

Las dos estrellas no se mueven igual en los dos ejes. El riesgo baja cerca de un tercio, mientras que el rendimiento esperado baja solo cerca de un décimo. Las posiciones más seguras rinden algo menos que las acciones, pero oscilan mucho menos. Tampoco se mueven al unísono con las acciones, que es lo que mide la [[term:correlation]], así que una mezcla de ellas oscila menos que el promedio de sus oscilaciones. La lección [Riesgo y rendimiento](/learn/risk_and_return) explica el gráfico con más profundidad.

Si va siguiendo, pulse a continuación [Suelo de renta](#canvas-dossier:safer_income_floor). Los chips se trasladan de un plan a otro, así que Participaciones sigue encendido. Esta vez la estrella no se mueve. Se sitúa en un riesgo y un rendimiento parecidos a los del plan 80/20, porque la cartera que queda sigue en 80/20. Simplemente es más pequeña, 1,2 millones de dólares en lugar de 1,5 millones, porque 300.000 $ de ella compraron la renta. La renta es un flujo de caja y no una posición, así que la estrella, que describe las posiciones, no puede verla. Encienda el chip **Flujos de caja** para ponerla en el gráfico:

[[img:safer-risk-floor]]

La renta está en el origen. No tiene volatilidad, y un pago nivelado no tiene crecimiento. El Seguro Social está a su lado en el eje vertical, sin volatilidad y con un crecimiento igual a su ajuste por costo de vida. El sueldo y los gastos de vida aparecen también como flujos de caja.

Así, el plan de renta baja el riesgo de una manera distinta al plan Baja. Saca 300.000 $ de la cartera hacia un producto parecido al efectivo, con casi ningún riesgo y casi ningún crecimiento, y deja el resto de la cartera exactamente tan arriesgado como estaba. El gráfico con Flujos de caja encendido muestra las dos mitades a la vez.

## Bajar en el gráfico {#moving-down-the-chart}

Bajar en el gráfico tiene un costo, y el costo es la riqueza esperada. Sin caída en la trayectoria [[term:gmf|GMF]], el plan Baja termina en 1,47 millones de dólares, frente a 1,88 millones del 80/20. El dinero en bonos del Tesoro se capitaliza más despacio que el dinero en acciones, y la brecha se acumula a lo largo de tres décadas.

<aside class="lesson-saying" data-saying="free-lunch">

En la trayectoria GMF, el plan Baja paga unos 410.000 $ de patrimonio final por sus malos resultados más seguros. El resto de esta sección muestra qué compra ese dinero.

</aside>

Lo que el movimiento compra aparece a través de muchos futuros posibles. La [[term:monte-carlo|simulación de Montecarlo]] recorre mil trayectorias con rendimientos extraídos al azar. Estos son los patrimonios netos finales de los dos planes, dibujados en un mismo eje:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:safer-nw-8020]]

*Sigue en 80/20. La dispersión es amplia, con una cola larga de resultados muy buenos hacia la derecha.*

</div>
<div class="lesson-img-cell">

[[img:safer-nw-down]]

*Baja. La dispersión es más estrecha, y menos trayectorias terminan por debajo de cero.*

</div>
</div>

El plan 80/20 tiene éxito en cerca del 83 % de las trayectorias. La [[term:median]] de su patrimonio neto final es de unos 2,12 millones de dólares, y su resultado del décimo peor es de unos 500.000 $ de deuda, lo que significa que el dinero se acabó años antes del final del plan. El plan Baja tiene éxito en cerca del 90 % de las trayectorias. Su mediana es más baja, de unos 1,78 millones de dólares, pero su resultado del décimo peor es solo de unos 60.000 $ de deuda.

Este es el intercambio en su forma más simple. Bajar en el gráfico renuncia a parte de los buenos resultados para encoger los malos. Un jubilado que ya ha ahorrado bastante se preocupa mucho más por los malos resultados. No hay una segunda carrera con la que recuperarse de ellos, mientras que los buenos resultados sobre todo cambian el tamaño de lo que se deja.

## Algo seguro que vender {#something-safe-to-sell}

Un tramo seguro vale porque le da al plan algo que vender que no ha caído. La crisis financiera mundial se recuperó en unos pocos años, y cualquier plan con algunos bonos podía venderlos mientras esperaba. El Gran Crac de 1929 es la prueba más dura. Su mercado de acciones cayó durante tres años y tardó bastante más de una década en recuperarse.

Para ponerlo en el plan, vuelva a **Caídas/Riesgo SOR** en [[nav:transforms]], elija el episodio de 1929 y fije el año de inicio en 2028, el primer año de Morgan sin sueldo:

[[img:safer-sor-editor-1929|control]]

Mire primero la comparación del balance. Es la forma más rápida de orientarse en cualquier caída, porque muestra el plan tal como está escrito bajo *Original* junto al plan con la caída bajo *Modificado*, en una escala compartida, con los años de la caída sombreados en el eje.

[[img:safer-bs-1929-8020]]

*Sigue en 80/20, tal como está escrito a la izquierda y con la caída de 1929 desde 2028 a la derecha.*

[[img:safer-bs-1929-down]]

*Baja, la misma comparación.*

En la trayectoria GMF, el patrimonio neto del plan 80/20 baja de unos 1,69 millones de dólares al final de 2027 a unos 450.000 $ al final de 2030, una caída de casi tres cuartas partes. El plan Baja baja de unos 1,68 millones de dólares a unos 780.000 $, algo más de la mitad. Ninguno de los dos planes vuelve a su línea Original. Al plan 80/20 se le acaba el dinero en 2046, cuando Morgan tiene 83 años, y al plan Baja en 2051, cinco años después.

Para ver de dónde sale la diferencia, abra [[nav:si-table]] en 2031. Para entonces, un dólar de acciones del comienzo de 2028 vale unos 52 centavos, incluso después de un año de rebote del 140 %.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:safer-sales-1929-8020]]

*Sigue en 80/20 en 2031. Después del año de rebote, el fondo de acciones ha vuelto por encima de su objetivo del 80 %, así que el plan lo vende desde las dos cuentas.*

</div>
<div class="lesson-img-cell">

[[img:safer-sales-1929-down]]

*Baja en 2031. El fondo de acciones sigue por debajo de su objetivo, así que no se vende ninguna acción y el año se paga con bonos del Tesoro, TIPS y bonos del Tesoro a corto plazo.*

</div>
</div>

Año tras año, la diferencia es grande:

| Plan | Primeros años en que vende acciones | Acciones vendidas, 2028–2038 |
|---|---|---:|
| Sigue en 80/20 | Un poco en 2028 y 2029, y luego cada año desde 2031 | unos 515.000 $ |
| Baja | Un poco en 2028, y luego desde 2033 | unos 250.000 $ |
| Suelo de renta | Un poco en 2028 y 2029, y luego cada año desde 2031 | unos 340.000 $ |

El plan 80/20 y el plan Baja siguen la misma regla, que vende lo que está por encima de su objetivo. El objetivo del plan 80/20 es sobre todo acciones, así que el primer año bueno vuelve a subir las acciones por encima de él, y la regla empieza a vender acciones cuando todavía valen cerca de la mitad de lo que valían en 2028. El objetivo del plan Baja tiene muchas menos acciones, así que paga los primeros cinco años de la caída casi por completo con sus posiciones seguras, los años en que las acciones valían menos. Vende unos 11.000 $ de acciones en 2028, cuando la cuenta del año es mayor que el importe en que sus posiciones seguras están por encima de su objetivo, y luego ninguna en absoluto hasta 2033. Sus fondos del Tesoro no cayeron con el mercado, y sus TIPS y sus bonos del Tesoro a corto plazo mantuvieron su valor. Cuando por fin vende acciones, vende menos de la mitad de lo que vende el plan 80/20.

El plan de renta vende acciones en los mismos años que el plan 80/20, porque el resto de su cartera sigue en 80/20. Vende cerca de un tercio menos en total, porque la renta paga parte de la cuenta de cada año.

Ninguno de los tres planes es seguro en una caída tan profunda y tan larga como la de 1929, al nivel de gasto de Morgan. El plan 80/20 tiene éxito en cerca del 2 % de las trayectorias con esa caída en la jubilación, y los otros dos en cerca del 12 al 14 %. Los planes más seguros fallan con menos frecuencia, y una caída así es una razón para prever un gasto que se pueda recortar. La lección [El momento de una caída](/learn/sequence_of_returns_crash_timing) dice más sobre cómo Transformaciones coloca una caída.

## Un suelo de ingresos {#an-income-floor}

Una renta de ingresos convierte un bloque de ahorro en un sueldo de por vida. El plan [Suelo de renta](#canvas-dossier:safer_income_floor) de Morgan paga 300.000 $ por una renta comprada en 2026 que paga 2.050 $ al mes, 24.600 $ al año, desde los 65 años hasta la muerte. Eso es cerca del 8,2 % de la [[term:premium]] cada año. Las cotizaciones publicadas a principios de 2026 para un hombre de 65 años que compraba una renta inmediata rondaban el 7,5 % al año, y esperar dos años el primer pago sube la tasa. Su propia cotización depende de la edad, el sexo, los tipos de interés y la aseguradora.

En Tutilis una renta es un flujo de caja, añadido desde **Flujos de caja** como una pensión o el Seguro Social.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

Abra **Flujos de caja**, añada una renta y fije el pago mensual, el ajuste por costo de vida y los años en que paga. La renta de Morgan paga desde 2028 hasta el final del plan, sin ajuste, así que el pago se queda igual cada año.

[[img:safer-annuity-editor|control]]

La herramienta **Anualidad** de la barra inferior es un bloc de notas para la misma decisión. Compara una prima con dejar el dinero invertido, antes de que nada entre en el plan.

</div>
</details>

Como mostró [Leer el gráfico de riesgo](#read-the-risk-chart), la renta no mueve la estrella de la cartera. Se sitúa en el origen del gráfico como un flujo de caja. El riesgo no ha desaparecido. Se ha salido de la cartera y ha pasado a una promesa de una aseguradora.

El efecto sobre el plan es distinto del plan Baja. El plan de renta tiene éxito en cerca del 88 % de las trayectorias, cerca de Baja. La mediana de su patrimonio neto final es de unos 2,01 millones de dólares, mucho más cerca de la del plan 80/20. La renta cubre parte del gasto de cada año, así que el plan vende menos, y la cartera que queda puede conservar más de sus acciones.

Ese resultado tiene condiciones. La previsión supone que Morgan vive hasta los 93, y la renta paga más cuanto más vive su titular. Quienes mueren pronto dejan dinero en el fondo común de la aseguradora, y quienes viven mucho lo cobran, y de ahí sale el pago alto. Si Morgan muriera a los 70, el plan habría pagado 300.000 $ por unos 120.000 $ de ingreso. Los 300.000 $ también desaparecen del balance el día de la compra. No se pueden vender en una emergencia y no pasan a los herederos.

El pago nivelado también tiene un costo. El gasto de Morgan crece con la [[term:inflation]], y en 2055 es cerca de 2,1 veces su importe de 2028. La renta paga los mismos 24.600 $ cada año, así que para entonces compra cerca de la mitad de lo que compraba al principio. Una renta con ajuste por costo de vida evita eso, pero empieza con un pago mucho más pequeño.

## Nada es del todo seguro {#nothing-is-fully-safe}

Cada activo más seguro de esta lección lleva algún riesgo. Los riesgos son menores que el riesgo de tener acciones, y son de otra clase.

- **Una renta depende de la aseguradora.** Si la aseguradora quiebra, una asociación estatal de garantía cubre las prestaciones de la renta hasta un límite, que en la mayoría de los estados es de al menos 250.000 $ por persona y por aseguradora. La prima de 300.000 $ de Morgan está por encima de ese límite, así que podría repartirse entre dos aseguradoras.
- **Una pensión depende del empleador y del plan.** La Pension Benefit Guaranty Corporation asegura la mayoría de las pensiones privadas, pero solo hasta un límite legal, y las pensiones públicas las respalda su estado o su ciudad.
- **El Seguro Social depende del Congreso.** Se proyecta que el fondo fiduciario se quede corto en la década de 2030, lo que explora la lección [La solvencia del Seguro Social](/learn/social_security_solvency).
- **Los bonos del Tesoro pueden perder valor.** Un fondo de bonos del Tesoro a medio plazo baja cuando suben los tipos de interés, como ocurrió en 2022, y un bono [[term:nominal]] pierde poder adquisitivo frente a la inflación. Los TIPS protegen contra la inflación, pero su precio sigue moviéndose hasta que vencen.
- **El efectivo pierde frente a la inflación, despacio.** Un mercado monetario tenido durante muchos años gana poco más que la inflación.

El sentido de bajar en el gráfico es tener activos cuyos riesgos no son los del mercado de acciones. En un año en que las acciones caen un 40 %, importa mucho si el resto de la cartera cae con ellas.

## Otros movimientos, el mismo eje {#other-moves-same-axis}

Varios otros movimientos habituales son más fáciles de juzgar una vez que se ven en el mismo gráfico.

**Una escalera de bonos** es un conjunto de bonos que vencen uno tras otro, uno por cada año de gasto. Una escalera de TIPS paga cada año una cantidad conocida de dinero ajustado por la inflación, siempre que cada bono se tenga hasta su vencimiento. El plan Baja se aproxima a una escalera con sus fondos de TIPS y de bonos del Tesoro a corto plazo, que están en el mismo rincón del gráfico. Tutilis puede tener un bono directamente y paga su cupón cada año, pero la previsión todavía no devuelve el precio de un bono a su valor nominal cuando vence, así que una escalera de verdad se muestra aquí con fondos.

**Las acciones de dividendo** siguen siendo acciones. Un fondo de empresas con dividendo alto se sitúa cerca del fondo del S&P 500 en el gráfico, y en una caída los dividendos se recortan junto con los precios. Las empresas del S&P 500 recortaron sus dividendos cerca de un quinto de 2008 a 2009. Un dividendo no mueve la cartera hacia el efectivo. La lección [¿Demasiadas acciones? Deje de reinvertir](/learn/too_much_equity_stop_reinvesting) muestra otro uso de los dividendos: tomarlos como efectivo en lugar de reinvertirlos, lo que baja despacio la parte en acciones.

**Un fondo de emergencia** está con el mercado monetario en el extremo izquierdo del gráfico. Es la posición más estable que hay allí, y la que menos rinde. La lección [El momento de una caída](/learn/sequence_of_returns_crash_timing) muestra que una reserva grande de efectivo, sin una regla de cuándo gastarla, hace poco en una caída. Una regla fija sobre qué vender hace más.

**Una pensión** es una renta que vino con un empleo. Si tiene una, ya tiene parte de un suelo de ingresos, y su cartera puede llevar más riesgo que la de alguien que no la tiene.

**Retrasar el Seguro Social** suele ser la renta más barata disponible. Cada año de retraso pasado la edad plena de jubilación sube la prestación un 8 %, y la prestación se ajusta por la inflación. Gastar de la cartera para retrasar la solicitud compra más de ese ingreso.

## Lo que dice la investigación {#what-the-research-says}

Wade Pfau ha escrito mucho sobre esta pregunta. En *Safety-First Retirement Planning* (2019) y la *Retirement Planning Guidebook* (2021, segunda edición 2023), describe dos maneras de pensar el ingreso de la jubilación. Un enfoque basado en la probabilidad mantiene una cartera diversificada y fija una tasa de gasto que probablemente pueda sostener. Un enfoque de seguridad primero construye primero un suelo de ingreso fiable a partir del Seguro Social, las pensiones, las rentas y las escaleras de bonos, lo bastante grande para cubrir el gasto esencial, y luego invierte el resto para crecer.

Pfau sostiene que una renta de ingresos puede ocupar el lugar de parte de una asignación a bonos. Los bonos y las rentas dan los dos un ingreso estable, pero la renta añade un reparto del riesgo, que paga más a quienes viven mucho. Ese es el patrón del plan Suelo de renta de Morgan, donde la renta cubre parte del gasto y el resto de la cartera conserva sus acciones.

Pfau y Michael Kitces, en *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014), encontraron que el riesgo de secuencia se concentra en los años alrededor de la fecha de jubilación. Una cartera que tiene sus mínimas acciones en la jubilación y añade acciones después sobrevivió con más frecuencia que una que mantenía una parte constante. Por eso el consejo de volverse más seguro apunta a los años justo antes de la fecha de jubilación.

El economista Menahem Yaari mostró en 1965 que un jubilado al que solo le importa su propio gasto y que enfrenta una vida de duración incierta debería, bajo supuestos simples, convertir todo su ahorro en rentas. Poca gente lo hace, lo que los economistas llaman el enigma de la renta. Las razones incluyen el deseo de dejar dinero a los herederos, la necesidad de efectivo en una emergencia y el hecho de que el Seguro Social ya es una renta grande ajustada por la inflación.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Obras citadas — las publicaciones detrás de las cifras</summary>
<div class="lesson-bibliography-body">

- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.
- Wade D. Pfau, *Retirement Planning Guidebook: Navigating the Important Decisions for Retirement Success*, Retirement Researcher Media, 2021; segunda edición 2023.
- Wade D. Pfau y Michael E. Kitces, «Reducing Retirement Risk with a Rising Equity Glide Path», *Journal of Financial Planning*, enero de 2014.
- Menahem E. Yaari, «Uncertain Lifetime, Life Insurance, and the Theory of the Consumer», *The Review of Economic Studies*, 1965.

</div>
</details>

## Lo que esto no puede decirle {#what-this-cannot-tell-you}

Este análisis tiene límites, y cuentan para saber hasta dónde confiar en él.

- **La renta es una compra ya hecha.** Tutilis modela el ingreso que paga una renta y no tiene un paso para comprar una. El plan empieza con los 300.000 $ ya gastados, y la tasa de pago es una estimación y no una cotización.
- **Cada plan se mueve una vez.** Los asesores de verdad suelen bajar la parte en acciones poco a poco a lo largo de los cinco o diez años anteriores a la jubilación, y algunos la vuelven a subir después. Un plan puede hacerlo con una [[term:glide-path|senda de inversión]] de varias asignaciones objetivo, pero el gráfico de riesgo solo muestra dónde está la cartera al comienzo de la previsión.
- **Las caídas son reproducciones.** Cada episodio repite una trayectoria histórica. La próxima caída se verá distinta, y la inflación no se reproduce, lo que más importa para una renta de pago nivelado.
- **Un solo hogar.** Un ahorrador con una pensión, una cartera mucho mayor o un gasto mucho menor necesita menos suelo que Morgan.

## Qué conviene recordar {#what-to-take-away}

- Los años justo antes y justo después de la jubilación son el momento en que una caída hace más daño, porque el gasto tiene que salir de vender una cartera que baja. Para Morgan, el peor año de inicio de la crisis financiera mundial es el año anterior a la jubilación.
- Cada forma habitual de volverse más seguro desplaza dinero hacia el efectivo en el gráfico Riesgo vs. retorno. Menos acciones, TIPS, bonos del Tesoro a corto plazo y efectivo mueven la estrella de la cartera hacia abajo y hacia la izquierda. Una renta saca parte del dinero de la cartera y lo convierte en un ingreso que se sitúa en el origen. Todas renuncian a parte del rendimiento esperado.
- Bajar en el gráfico renuncia a parte de los buenos resultados para encoger los malos. Para un jubilado que ya ha ahorrado bastante, los malos resultados importan más.
- Un tramo seguro le da a un plan algo que vender que no ha caído. En una caída larga retrasa el día en que el plan tiene que vender acciones con pérdida.
- Una renta de ingresos reduce cuánto hay que vender en absoluto. Cuesta liquidez, el dinero que habría dejado a los herederos y poder adquisitivo cuando su pago es nivelado, y depende de la aseguradora.
- Nada es del todo seguro. Los activos más seguros llevan riesgos más pequeños y de otra clase, que es justo lo que los hace útiles junto a las acciones.
