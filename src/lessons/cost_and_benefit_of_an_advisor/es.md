<!--
tutilis-return: lessons/cost_and_benefit_of_an_advisor/prose/es.md
tutilis-locale: es translated
-->
# Coste y beneficio de un asesor

Nadia tiene 61 años y Owen tiene 59. Han ahorrado $1.66 million en dos 401(k), una [[term:roth|Roth]] [[term:ira|IRA]], una [[term:brokerage]] conjunta y una cuenta de ahorro, con cerca de dos tercios en acciones. Los dos piensan dejar de trabajar en 2030, y gastan unos $110,000 al año. Una amiga les ha presentado a un asesor en quien ella confía, que cobra cada año el 1 % de los [[term:aum|activos bajo gestión]].

Tienen dos preguntas. ¿A cuánto asciende una comisión así a lo largo de toda una jubilación? ¿Y qué obtendrían a cambio? Esta lección responde a la primera con una hipótesis en [[nav:transforms]], que muestra la comisión como su propia línea en el flujo de caja del plan y muestra qué hace con el dinero que queda al final. Responde a la segunda con el mismo plan, al poner precio a uno de los errores comunes y caros que el buen asesoramiento existe para evitar. Cierra con el lado práctico de contratar a alguien: los tipos de asesores, cómo se paga a cada uno, cómo saber cuándo una recomendación genera una comisión y qué significan las letras después de un nombre.

La lección no es un argumento a favor ni en contra de los asesores. Muchas personas lo hacen muy bien con uno, y muchas lo hacen muy bien sin uno. Lo importante es que tanto la comisión como los errores tienen un precio, y un plan puede mostrarle ambos.

Abre dos planes:

- [Invertido](#canvas-dossier:advisor_fee_invested) es el plan de Nadia y Owen tal como está, sin asesor y sin comisión.
- [En efectivo](#canvas-dossier:advisor_fee_cash) es la misma pareja después de un susto de mercado, con cada cuenta trasladada a un fondo del mercado monetario y dejada allí. Siguen sin asesor y no pagan comisión.

## Lo que aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder a estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Cómo se cobra una comisión típica de asesor, y qué tamaño tiene en dólares?** Véase [Cómo se ve una comisión](#what-a-fee-looks-like).
2. **¿Dónde pruebo una comisión de asesor en mi propio plan?** Véase [Encontrar la hipótesis](#find-the-what-if).
3. **¿Dónde aparece la comisión en el pronóstico?** Véase [La comisión en su propia línea](#the-fee-as-its-own-line).
4. **¿Por qué una comisión del 1 % cuesta mucho más que el 1 % de mis ahorros?** Véase [Lo que añade la capitalización](#what-compounding-adds).
5. **¿Qué cambia si la comisión es del 0,5 %, o un importe fijo?** Véase [Una comisión más baja](#a-smaller-fee) y [En su lugar, una comisión fija](#a-flat-fee-instead).
6. **¿Qué puede costar un error en comparación con la comisión?** Véase [Lo que cuestan los errores](#what-mistakes-cost).
7. **¿Cuánto vale de verdad el asesoramiento, según la investigación?** Véase [Lo que puede valer el asesoramiento](#what-advice-can-be-worth).
8. **¿Qué tipos de asesores hay, y cómo se les paga?** Véase [Tipos de asesores](#kinds-of-advisors) y [Cómo se paga a los asesores](#how-advisors-are-paid).
9. **¿Cómo puedo saber si un asesor cobra comisiones de venta?** Véase [Detectar las comisiones](#spotting-commissions).

</div>
</aside>

## Cómo se ve una comisión {#what-a-fee-looks-like}

La mayoría de los asesores que gestionan inversiones cobran una parte del dinero que gestionan. La regla práctica habitual es el 1 % al año, y Kitces Research encontró que la comisión [[term:median]] es de verdad de alrededor del 1 % para carteras de hasta $1 million. Las comisiones suelen bajar por tramos en saldos mayores, de modo que la mediana para los hogares con más de $1 million se acerca más al 0,85 %. Los asesores también hacen descuento a los clientes que conocen bien o por relaciones más amplias, así que el 0,5 % también es una cifra real.

La comisión se factura normalmente cada trimestre y se toma directamente de la cuenta. Se cobra sobre el saldo, así que se debe en un año en que el mercado cae igual que en un año en que sube. A medida que la cartera crece, la comisión crece con ella en dólares.

Para Nadia y Owen, el 1 % de sus ahorros en el primer año del plan es de unos $18,500. En 2035, cuando los dos están jubilados y solicitan el Seguro Social, es de unos $22,600 al año. Ninguna de las dos cifras parece alarmante junto a $110,000 de gasto. El resto de esta lección muestra por qué el total a lo largo de una jubilación es mucho mayor de lo que esas cifras anuales sugieren.

## Encontrar la hipótesis {#find-the-what-if}

Para probar una comisión en un plan, abra [[nav:transforms]] y despliegue **Modificaciones**. La tarjeta Modificables se abre en la pestaña **Global**, que lista las hipótesis que se aplican a todo el plan. Una de ellas es **Comisión de asesor**. Selecciónela:

[[jump:aum]]

[[img:advisor-fee-modifiables|control]]

El editor junto a la tarjeta contiene la comisión. Actívela y se abre en el modo **% AUM** al 1 %. Puede cambiar la tasa a cualquier cifra que le hayan indicado, como el 0,5 % para una comisión con descuento o el 1,25 % para una cuenta más pequeña.

[[img:advisor-fee-editor-aum|control]]

El otro modo, **Fijo / a**, cobra un importe fijo en dólares cada año y lo hace crecer a una tasa que usted elige. Así factura un asesor de comisión fija o de iguala, y la sección [En su lugar, una comisión fija](#a-flat-fee-instead) lo usa.

Nada en el plan mismo cambia. Transformaciones muestra el plan tal como fue escrito bajo *Original* y el plan con la comisión bajo *Modificado*, de modo que la comisión es la única diferencia entre los dos lados.

## La comisión en su propia línea {#the-fee-as-its-own-line}

La comisión se paga como cualquier otra factura. Cada año se suma a las salidas del plan, y el dinero para pagarla sale del mismo sitio que el resto del gasto: primero los ingresos, luego ventas de las cuentas. Esta es la comparación de flujo de caja con 2035 seleccionado:

[[img:advisor-fee-cash-flow]]

El lado Modificado tiene una banda gris **Comisión de asesor** bajo el gasto en cada año del plan. En 2035 el estado de flujo de caja la lista como su propia línea, $22,594, junto a $144,827 de gastos de manutención en dólares de ese año. Mientras Nadia y Owen trabajan, sus sueldos la cubren. Una vez jubilados, cada dólar de ella se vende de sus ahorros.

Una tabla de comisiones muestra la tasa. Esta línea muestra los dólares, año tras año, en el plan que usted tiene de verdad.

## Lo que añade la capitalización {#what-compounding-adds}

La línea anual es solo la mitad del coste. Un dólar que paga la comisión en 2030 es un dólar que no vuelve a crecer, y tampoco lo hacen los rendimientos que habría producido en 2031 y en cada año posterior. La comparación de balances muestra ese segundo coste:

[[img:advisor-fee-balance-sheet]]

Los dos lados empiezan cerca el uno del otro, y la brecha entre ellos se ensancha cada año. En la trayectoria [[term:gmf|GMF]], el pronóstico que toma el rendimiento esperado de cada año, el patrimonio neto al final del plan en 2059 es de unos $3.51 million sin comisión y de unos $1.27 million con una comisión del 1 %. Las comisiones mismas suman unos $715,000 a lo largo de esos 33 años. La brecha al final es de unos $2.24 million, aproximadamente tres veces lo pagado, porque cada dólar de comisión se lleva también su crecimiento futuro.

<aside class="lesson-saying" data-saying="small-leak">

Una comisión del 1 % es de unos $18,500 el primer año, pequeña junto a $110,000 de gasto. Cobrada cada año durante 33 años, suma unos $715,000 pagados y unos $2.24 million menos al final.

</aside>

<details class="lesson-math">
<summary class="lesson-math-label">Las cuentas — por qué una comisión del 1 % se lleva más del 1 %</summary>
<div class="lesson-math-body">

Suponga que una cartera obtiene un rendimiento \(g\) cada año y paga una comisión \(f\) sobre su saldo. Al cabo de un año un dólar se convierte en \((1+g)(1-f)\) en lugar de \(1+g\), de modo que al cabo de \(n\) años la cartera es más pequeña según el factor

\[
(1-f)^n
\]

Para \(f = 1\%\) y \(n = 33\) años, \(0.99^{33} \approx 0.72\). Una cartera dejada sola durante todo ese tiempo termina alrededor de un 28 % más pequeña de lo que habría sido sin la comisión, haga lo que haga el mercado. La brecha de Nadia y Owen es mayor que el 28 % porque también gastan de la cartera, de modo que la comisión se lleva una parte creciente de un saldo que se reduce además por otras razones.

</div>
</details>

La trayectoria esperada es solo una de muchas. La [[term:monte-carlo]] hace pasar el plan por 1.000 historias de mercado posibles y cuenta cuántas terminan con el dinero durando. Este es ese recuento, la [[term:success-rate]], sin comisión y con una comisión del 1 %:

[[img:advisor-fee-odds-one]]

La probabilidad de éxito cae de alrededor del 92 % a alrededor del 73 %. Es un cambio grande, y es honesto decirlo. Este plan gasta unos $110,000 al año bastante completos, así que cualquier coste nuevo y constante lo mueve. Un hogar que gastara menos de los mismos ahorros sentiría menos la misma comisión, y uno que gastara más la sentiría más.

## Una comisión más baja {#a-smaller-fee}

Ponga ahora la tasa en el 0,5 %, el tipo de comisión que un asesor podría cobrar a un cliente más grande o a alguien a quien conoce bien:

[[img:advisor-fee-odds-half]]

La probabilidad de éxito cae de alrededor del 92 % a alrededor del 83 %, menos de la mitad de la caída que causa el 1 %. En la trayectoria esperada el plan termina con unos $2.39 million en lugar de $3.51 million, y las comisiones pagadas suman unos $425,000.

Cada hipótesis que esta lección prueba en el plan invertido está en una sola tabla, con 1.000 trayectorias para cada fila:

| Comisión de asesor | Probabilidad de éxito | Patrimonio neto en 2059, trayectoria esperada | Comisiones pagadas a lo largo del plan, trayectoria esperada |
|---|---:|---:|---:|
| Ninguna | 92 % | $3.51 million | $0 |
| 0,5 % de los activos | 83 % | $2.39 million | unos $425,000 |
| 1 % de los activos | 73 % | $1.27 million | unos $715,000 |
| 1,5 % de los activos | 61 % | $0.42 million | unos $895,000 |
| $6,000 al año, con un crecimiento del 3 % | 83 % | $2.76 million | unos $330,000 |

Cada medio punto de comisión le cuesta a este plan unos diez puntos de éxito. Cuando un asesor ofrece una tasa más baja, esa es la escala de lo que vale el descuento a lo largo de una jubilación como esta.

## En su lugar, una comisión fija {#a-flat-fee-instead}

No todos los asesores cobran un porcentaje. Un planificador de comisión fija o de iguala cobra un importe fijo cada año, a menudo unos miles de dólares, sea cual sea el tamaño de la cartera. Cambie el editor a **Fijo / a** para probar una. Aquí cobra $6,000 el primer año y hace crecer el importe un 3 % al año:

[[img:advisor-fee-editor-fixed|control]]

[[img:advisor-fee-odds-fixed]]

Para Nadia y Owen esto cae cerca de la comisión del 0,5 %: alrededor de un 83 % de éxito, y unos $2.76 million al final de la trayectoria esperada. Una comisión fija no crece cuando crece la cartera, así que tiende a favorecer a las carteras más grandes. Tampoco se reduce cuando cae el mercado, así que en una década mala se lleva una parte mayor de lo que queda. Qué estructura es más barata para usted depende del tamaño de sus ahorros, y el editor responde a eso para su propio plan en unos segundos.

## Lo que cuestan los errores {#what-mistakes-cost}

Las cifras hasta aquí muestran solo un lado de la decisión. A un asesor se le paga para ayudar a un hogar a evitar errores, y los errores también tienen un precio. Uno de los más comunes y de los más caros es vender y salir del mercado después de una caída que asusta y no volver a entrar nunca.

Pase a [En efectivo](#canvas-dossier:advisor_fee_cash). Es la misma pareja, con los mismos ahorros, los mismos ingresos y el mismo gasto, pero cada cuenta está en un fondo del mercado monetario. No tienen asesor y no pagan comisión. Aquí están los dos planes lado a lado, el plan en efectivo a la izquierda y el plan invertido *con una comisión del 1 %* a la derecha:

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:advisor-fee-cash-odds]]

*[En efectivo](#canvas-dossier:advisor_fee_cash), sin comisión: alrededor del 69 % de los futuros tienen éxito.*

</div>
<div class="lesson-img-cell">

[[img:advisor-fee-invested-odds]]

*[Invertido](#canvas-dossier:advisor_fee_invested) con una comisión del 1 %: alrededor del 73 % de los futuros tienen éxito.*

</div>
</div>

Los dos planes están cerca en una medida y muy lejos en la otra, y la diferencia entre las medidas importa. La probabilidad de éxito solo pregunta si el dinero dura hasta el final del plan. Por esa medida el plan invertido con una comisión del 1 % va por delante, 73 % frente a 69 %. El plan en efectivo rara vez se derrumba, porque el efectivo no se desploma, pero tampoco crece casi nunca, así que fracasa despacio en una gran parte de los futuros. La otra medida es cuánto queda. En la trayectoria esperada el plan en efectivo termina con unos $382,000 y el plan invertido con comisión termina con unos $1.27 million, más de tres veces más:

[[img:advisor-fee-cash-balance-sheet]]

Poner las tres versiones de la pareja lado a lado muestra dónde aterriza cada elección:

| Nadia y Owen | Probabilidad de éxito | Patrimonio neto en 2059, trayectoria esperada |
|---|---:|---:|
| Invertido, sin asesor, sin error | 92 % | $3.51 million |
| Invertido, pagando una comisión de asesor del 1 % | 73 % | $1.27 million |
| En efectivo, sin asesor, sin comisión | 69 % | $0.38 million |

El mejor resultado de la tabla es la primera fila. Un hogar que se mantiene invertido a través de cada desplome y no paga comisión lo hace mejor que cualquiera de los otros dos, y muchos inversores que se gestionan solos hacen exactamente eso. La comisión es el precio de la segunda fila, y el error es el precio de la tercera. Leída así, la comparación es una especie de pregunta de seguro. Pagar el 1 % le cuesta a esta pareja unos $2.21 million frente a su mejor caso. Cometer este único error y mantenerlo cuesta unos $3.1 million. Un asesor vale la comisión para un hogar que de otro modo aterrizaría en la tercera fila, y no para uno que se quedaría en la primera.

Cada fila de la tabla paga algo [[saying:free-lunch]]. La comisión cuesta unos $2.21 million frente al mejor caso, y la seguridad del efectivo cuesta unos $3.1 million. La primera fila evita ambos, y su precio es la entereza de seguir invertido a través de cada desplome.

Esta comparación no afirma que un asesor habría mantenido con seguridad a Nadia y Owen invertidos, ni que todo el que prescinde de un asesor entra en pánico. Es una manera de poner los dos precios lado a lado en el mismo plan, para que usted pueda juzgar con honestidad en qué fila es probable que termine.

Otros errores tienen sus propios precios, y el producto puede mostrar varios de ellos:

- **Vender en el suelo de un desplome.** [El momento de un desplome](/learn/sequence_of_returns_crash_timing) reproduce un desplome real sobre un plan, que es el momento en que ocurre la venta por pánico.
- **Perder una ventana de [[term:roth-conversion|Conversión Roth]].** Los años entre la jubilación y la primera distribución obligatoria suelen ser los años más baratos que un hogar tendrá jamás para mover dinero a una cuenta Roth. [Conversión Roth en la ventana](/learn/roth_conversion_window) pone precio a esos años.
- **Llevar demasiado riesgo a la jubilación.** [Ganar seguridad al acercarse la jubilación](/learn/safer_approaching_retirement) compara planes que bajan su parte en acciones y planes que no lo hacen.
- **Dejar un patrimonio sucesorio sin planificar.** Las designaciones de beneficiarios, la titularidad y un testamento cuestan poco si se hacen bien y muchísimo si se hacen mal, y quedan fuera de cualquier pronóstico.

## Lo que puede valer el asesoramiento {#what-advice-can-be-worth}

Varios investigadores han intentado poner una cifra a lo que añade un asesor. Sus respuestas son útiles y hay que leerlas con cuidado, porque algunas vienen de firmas que venden asesoramiento.

- **El Advisor's Alpha de Vanguard** estima que un asesor que sigue buenas prácticas puede añadir «alrededor del 3 %» al año en rendimientos netos. La pieza individual más grande, hasta 1,5 puntos, es el acompañamiento conductual que evita que un cliente abandone el plan. Vanguard deja claro que este valor no se gana de forma pareja cada año. Llega sobre todo en unos pocos momentos de pánico o de euforia.
- **La investigación del «gamma» de Morningstar**, de David Blanchett y Paul Kaplan, estimó que mejores decisiones de ingreso en la jubilación, como la estrategia de retiro, la ubicación de los activos y el uso de una renta vitalicia, podrían producir alrededor de un 22,6 % más de ingreso de jubilación, lo que equipararon a unos 1,59 puntos de rendimiento extra al año.
- **El estudio «Mind the Gap» de Morningstar** mide cuánto pierden los inversores por su propio timing. Su edición de 2025 encontró que el inversor medio en fondos ganó alrededor de 1,1 puntos al año menos que los fondos que poseía durante los diez años hasta 2024, porque el dinero tendía a llegar después de las ganancias y a irse después de las pérdidas.

Hay un desacuerdo honesto sobre estas cifras. Un artículo de 2026 en el *Financial Analysts Journal* volvió a examinar el método de Mind the Gap y situó el coste del mal timing más cerca de 0,1 punto al año. El 3 % de Vanguard supone un cliente que de otro modo cometería cada uno de los errores que describe el documento, y muchas personas no lo harían.

La conclusión justa es más estrecha que cualquier estimación aislada. El asesoramiento vale más para el hogar que de otro modo cometería un error caro, y menos para uno que no lo haría. Las hipótesis de esta lección le permiten poner precio a los dos lados en su propio plan, con sus propios números.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Sabía que…?</p>
<div class="lesson-did-you-know-body">

Desde octubre de 2019, el Code of Ethics del CFP Board exige que cada profesional CFP actúe como fiduciario siempre que dé asesoramiento financiero a un cliente. Eso incluye el asesoramiento sobre seguros y rentas vitalicias, que muchas otras reglas no cubren. El Board empezó a hacer cumplir el estándar en junio de 2020.

</div>
</aside>

## Tipos de asesores {#kinds-of-advisors}

«Financial advisor» no es un título protegido en los Estados Unidos. Cualquiera puede usarlo, así que el título por sí solo dice muy poco. Lo que dice más es cómo está registrada la persona, porque eso decide el estándar legal bajo el que trabaja y cómo se le permite cobrar.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Referencia — tipos de asesores</summary>
<div class="lesson-reference-body">

| Tipo | Registrado como | Estándar de diligencia | Cómo se le paga habitualmente |
|---|---|---|---|
| Asesor de inversiones registrado (registered investment adviser, RIA) | Asesor de inversiones ante la SEC o un estado | Fiduciario durante toda la relación | Una parte de los activos, una comisión fija, una iguala o por hora |
| Representante de un broker-dealer | Representante registrado de una firma miembro de FINRA | Mejor interés en el momento de cada recomendación (Regulation Best Interest) | Comisiones de venta, cargas de suscripción (sales loads) y otras comisiones de transacción |
| Híbrido, o con doble registro | Los dos de arriba | Depende del papel en el que actúa la persona para cada cuenta | Unas cuentas con comisiones de asesoría, otras con comisiones de venta |
| Robo-advisor | Normalmente un RIA | Fiduciario, aplicado mediante software | Una parte pequeña de los activos, a menudo un cuarto de punto porcentual o menos |
| Agente de seguros | Con licencia del departamento de seguros del estado | Varía según el estado y según el producto | Comisiones de la aseguradora |
| CPA o abogado | Con licencia de un colegio estatal | Deberes profesionales de la licencia | Por hora o por proyecto |

</div>
</details>

Un [[term:fiduciary]] debe anteponer sus intereses a los propios a lo largo de toda la relación, y los formularios de [Detectar las comisiones](#spotting-commissions) dicen a qué estándar está sujeta una firma. Ninguno de estos arreglos es bueno o malo en sí mismo. Un bróker pagado por comisión de venta puede ser la opción más barata para alguien que compra unos pocos fondos y los mantiene durante décadas, y un planificador que solo cobra honorarios puede ser la opción más cara para alguien que necesita muy poca ayuda. Lo que importa es saber en qué arreglo está, para poder juzgar el asesoramiento con los incentivos a la vista.

## Cómo se paga a los asesores {#how-advisors-are-paid}

La comisión es de lo que vive el asesor, y cada forma de pagar tiene sus propias fortalezas y su propio tirón sobre el asesoramiento.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Referencia — cómo se paga a los asesores</summary>
<div class="lesson-reference-body">

| Estructura | Cómo funciona | Fortaleza | Qué vigilar |
|---|---|---|---|
| Parte de los activos (AUM) | Un porcentaje de la cartera cada año, a menudo alrededor del 1 % | Al asesor le va mejor cuando a la cartera le va mejor | Es cara en saldos grandes, y puede desincentivar el consejo de pagar una hipoteca o de comprar una renta vitalicia, ya que ambas reducen los activos gestionados |
| Comisión fija o iguala | Un importe fijo cada año, sea cual sea la cartera | El coste es previsible y no crece con la riqueza | Puede ser cara para una cartera pequeña |
| Por hora o por proyecto | Se paga un plan o una pregunta, y luego se lleva a cabo uno mismo | Solo paga la ayuda que usa | Nadie vigila el plan entre reuniones |
| Comisión de venta | La paga la empresa del producto cuando usted compra | Puede no haber ninguna factura aparte | Hay un tirón hacia los productos que pagan más, y el coste puede quedar oculto dentro del producto |
| Suscripción | Una cuota mensual por planificación continua, habitual con clientes más jóvenes | El coste es bajo y constante | El nivel de servicio varía mucho |

</div>
</details>

El editor de Transformaciones cubre las dos primeras de forma directa, porque son las que se repiten cada año: **% AUM** para una comisión basada en los activos, y **Fijo / a** para una comisión fija o una iguala. Un encargo por horas es un coste único que puede introducir como un solo gasto en el plan. Una comisión de venta suele estar incorporada al precio de un producto, así que aparece como un coste más alto o un rendimiento más bajo de esa posición.

<details class="lesson-advanced">
<summary class="lesson-advanced-label">Para ir más lejos — los costes que una tabla de comisiones deja fuera</summary>
<div class="lesson-advanced-body">

La comisión de asesoría a menudo no es todo el coste. Los fondos que usa un asesor cobran sus propios ratios de gastos, y algunas plataformas añaden comisiones de negociación o de custodia. Kitces Research estima que, una vez contados esos, el coste total típico de una cartera asesorada es de alrededor del 1,65 % al año en lugar del 1 %. Para probarlo en un plan, ponga la tasa de AUM en la comisión de su asesor más el ratio de gastos ponderado de los fondos que tendría.

</div>
</details>

## Detectar las comisiones {#spotting-commissions}

La mayoría de la gente nunca pregunta cómo se le paga a su asesor, y la mayoría de los asesores se alegran de decírselo. Estos son los sitios donde mirar, y cada uno de ellos es gratuito.

**Form CRS.** Cada asesor de inversiones registrado en la SEC y cada broker-dealer debe entregar a los clientes minoristas un resumen breve de la relación, normalmente de dos a cuatro páginas. Dice si la firma ofrece cuentas de asesoría, cuentas de corretaje o ambas, cómo se le paga, qué estándar de diligencia le debe y si tiene un historial disciplinario. También lista arranques de conversación para que usted pregunte, como «¿Cómo podrían afectarme sus conflictos de interés, y cómo los abordará?». Puede encontrar el Form CRS de cualquier firma en [Investor.gov](https://www.investor.gov/CRS).

**Form ADV Part 2A.** Un asesor de inversiones registrado presenta además un folleto más largo que lista su tabla de comisiones y describe sus conflictos con detalle. Está en el sitio [Investment Adviser Public Disclosure](https://adviserinfo.sec.gov/) de la SEC.

**FINRA BrokerCheck.** [BrokerCheck](https://brokercheck.finra.org/) muestra los registros de una persona, las licencias, el historial laboral y las quejas de clientes o las medidas disciplinarias. Si alguien está registrado como bróker, puede cobrar comisiones de venta.

**«Fee-only» y «fee-based».** Suenan parecido y significan cosas distintas. Un asesor fee-only solo lo pagan los clientes y no toma comisiones de venta de nadie. Un asesor fee-based cobra honorarios *y* también puede ganar comisiones de venta, normalmente porque tiene doble registro. Ninguna de las dos etiquetas está definida en el derecho de valores, así que los formularios de arriba son los que zanjan la pregunta.

Tres preguntas sencillas cubren casi todo:

1. ¿Es usted fiduciario para todo lo que me recomienda, todo el tiempo?
2. ¿Cómo se le paga, en total, y le paga alguien además de mí?
3. ¿Qué pagaré cada año en dólares, incluidos los fondos que usaría?

Un asesor que responde a las tres con claridad y por escrito le está diciendo algo bueno sobre cómo trabaja.

## Credenciales {#credentials}

Las credenciales varían mucho en lo que exigen. Algunas requieren años de estudio, un examen y formación continua, y algunas un curso de fin de semana. La base [Professional Designations](https://www.finra.org/investors/professional-designations) de FINRA lista cientos de ellas, con lo que exige cada una y cómo comprobarla.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Referencia — credenciales y licencias habituales</summary>
<div class="lesson-reference-body">

| Letras | Qué es | La expide | Qué señala |
|---|---|---|---|
| CFP | Certified Financial Planner | CFP Board | Planificación financiera personal amplia. Exige un título de grado (bachelor's degree), cursos, un examen, varios años de experiencia y un deber fiduciario al dar asesoramiento |
| CPA | Certified Public Accountant | Colegios estatales de contabilidad | Pericia fiscal y contable |
| PFS | Personal Financial Specialist | AICPA, solo para CPA | Un CPA que ha añadido formación y experiencia en planificación financiera |
| ChFC | Chartered Financial Consultant | The American College | Cursos de planificación financiera, de alcance parecido al CFP |
| CFA | Chartered Financial Analyst | CFA Institute | Análisis de inversión en profundidad. Tres exámenes exigentes, orientados más a la gestión de carteras que a la planificación de un hogar |
| RICP | Retirement Income Certified Professional | The American College | Planificación del ingreso de jubilación, incluido el Seguro Social y la estrategia de retiro |
| Series 7 | Licencia General Securities Representative | FINRA | Autorizado a vender valores y a ganar comisiones de venta sobre ellos |
| Series 65 | Examen Uniform Investment Adviser Law | NASAA, administrado por FINRA | Autorizado a dar asesoramiento de inversión a cambio de una comisión como representante de un asesor de inversiones |
| Series 66 | Examen Uniform Combined State Law | NASAA, administrado por FINRA | Se hace junto con la Series 7. Permite actuar a la vez como bróker y como asesor |

Una licencia es un permiso para ejercer y una credencial es una pretensión de pericia, y las dos responden a preguntas distintas. Una Series 7 dice cómo se le puede pagar a alguien. Un CFP o un CFA dice qué ha estudiado. Tener el CFP, el ChFC, el CFA o el PFS permite a una persona saltarse el examen Series 65 en la mayoría de los estados.

</div>
</details>

## Fuentes {#sources}

Las cifras y las reglas de esta lección proceden de estas publicaciones. Las encuestas de comisiones y la investigación sobre el valor del asesoramiento se actualizan con regularidad, así que una edición más nueva puede mover un poco los números.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Obras citadas — las publicaciones detrás de las cifras</summary>
<div class="lesson-bibliography-body">

- Michael Kitces, [«Financial Advisor Fees Comparison: All-In Costs for the Typical Financial Advisor»](https://www.kitces.com/blog/independent-financial-advisor-fees-comparison-typical-aum-wealth-management-fee/), para la comisión AUM mediana según el tamaño de la cartera y el coste total del asesoramiento.
- Vanguard, [*Putting a Value on Your Value: Quantifying Vanguard Advisor's Alpha*](https://corporate.vanguard.com/content/dam/corp/articles/pdf/putting_value_on_your_value_quantifying_vanguard_advisors_alpha.pdf), julio de 2022.
- David Blanchett y Paul Kaplan, «Alpha, Beta, and Now… Gamma», *The Journal of Retirement*, 2013. Resumido por Morningstar en [«What Is Gamma?»](https://www.morningstar.ca/ca/news/190932/what-is-gamma.aspx).
- Morningstar, *Mind the Gap 2025*, para la brecha de rendimiento del inversor durante los diez años hasta 2024.
- Jon A. Fulkerson, Bradford Jordan, Timothy Brandon Riley y Qing Yan, [«Bad Timing Does Not Cost Investors 15% of Their Funds' Returns: An Examination of Morningstar's 'Mind the Gap' Study»](https://rpc.cfainstitute.org/research/financial-analysts-journal/2026/bad-timing-does-not-cost-investors-funds-returns), *Financial Analysts Journal* 82, n.º 3, mayo de 2026.
- U.S. Securities and Exchange Commission, [Relationship summaries (Form CRS or Form ADV Part 3): Investor Bulletin](https://www.investor.gov/introduction-investing/general-resources/news-alerts/alerts-bulletins/investor-bulletins/relationship-summaries-form-crs-or-form-adv-part-3-investor-bulletin), e [Investor.gov](https://www.investor.gov/CRS) para el resumen de cualquier firma.
- SEC, [Investment Adviser Public Disclosure](https://adviserinfo.sec.gov/), para el Form ADV.
- FINRA, [BrokerCheck](https://brokercheck.finra.org/) y [Professional Designations](https://www.finra.org/investors/professional-designations).
- FINRA, [Series 66 — Uniform Combined State Law Exam](https://www.finra.org/registration-exams-ce/qualification-exams/series66), para las licencias Series 7, 65 y 66.
- CFP Board, [Code of Ethics and Standards of Conduct](https://www.cfp.net/ethics/code-of-ethics-and-standards-of-conduct), para el deber fiduciario de los profesionales CFP.

</div>
</details>

## Adónde ir después {#where-to-go-next}

| Lección | Por qué |
|---|---|
| [Erin y el tope salarial](/learn/erin_on_wage_cap) | La misma comparación de Original y Modificado, usada para poner precio a un cambio de regla |
| [El momento de un desplome: ¿reserva de efectivo o reequilibrio?](/learn/sequence_of_returns_crash_timing) | Un desplome real de mercado puesto sobre un plan, el momento en que un asesor más se gana el puesto |
| [Conversión Roth en la ventana](/learn/roth_conversion_window) | Una de las decisiones de planificación más fáciles de pasar por alto sin ayuda |
| [Ganar seguridad al acercarse la jubilación](/learn/safer_approaching_retirement) | Cuántas acciones mantener cuando se acerca la fecha de jubilación |
