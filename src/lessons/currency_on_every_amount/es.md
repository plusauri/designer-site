<!--
tutilis-return: lessons/currency_on_every_amount/prose/es.md
tutilis-locale: es translated
-->
# Por qué cada importe lleva una divisa

Noor vive y trabaja en Estados Unidos. El salario está en dólares, los gastos de vida están en dólares, la cuenta de corretaje está en dólares. Pero Noor también posee un condominio en Tokio alquilado a un inquilino, una cuenta de ahorro que quedó tras unos años en Fráncfort y una villa pequeña en Costa Rica comprada para la jubilación. Cuatro divisas, un hogar, un plan.

Si solo ha planificado alguna vez en una divisa, el desplegable de divisa junto a cada importe en el editor del plan puede parecer excesivo. Escribe `500,000`, y hay un `$ USD` al lado que nunca toca. ¿Por qué está ahí?

Esta lección es la respuesta. Cambie entre los dos planes del [[term:canvas]] mientras lee: contienen los **mismos dígitos**. La única diferencia es si cada importe dice en qué se cuenta.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Usuario avanzado</p>
<div class="lesson-power-user-body">

Un plan en varias divisas es una función de **Usuario avanzado**. El plan de un usuario típico mantiene cada importe en una divisa, de modo que la divisa junto a cada importe y la pestaña Moneda de Supuestos solo aparecen con Usuario avanzado activado. Actívelo en [[nav:advanced]] → Ajustes de la aplicación → **Usuario avanzado**.

</div>
</aside>

## Qué aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿Por qué cada importe lleva una divisa junto a su número?** Véase [Un número no es un importe](#a-number-is-not-an-amount).
2. **¿Cómo guarda un plan importes que están en varias divisas?** Véase [Lo que registra el plan](#what-the-plan-records).
3. **¿Dónde se convierten los importes extranjeros, y cómo se gravan?** Véase [Dónde ocurre la conversión](#where-the-conversion-happens).
4. **¿Qué sale mal cuando un importe extranjero se teclea sin su divisa?** Véase [Los mismos dígitos, sin etiqueta](#same-digits-no-tag).
5. **¿Por qué no hay un único ajuste de divisa para todo el plan?** Véase [Por qué no un solo ajuste](#why-not-one-setting-for-the-plan).
6. **¿De dónde salen los tipos de cambio, y pueden moverse durante la previsión?** Véase [Tipos de hoy, y tipos que se mueven](#rates-today-and-rates-that-move).

</div>
</aside>

## Un número no es un importe {#a-number-is-not-an-amount}

El condominio de Tokio vale `65,000,000`. Sesenta y cinco millones *de qué* es toda la pregunta. Sesenta y cinco millones de yenes son un apartamento modesto; sesenta y cinco millones de dólares son un rascacielos. Los dígitos son los mismos, y nada en ellos le dice cuáles.

Así, un importe en Tutilis son tres cosas, no una: un **año** en el que se cotizó, una **divisa** en la que se cuenta y el número. El año es lo que hace que una tasación de 2024 signifique dinero de 2024 y no el año en que empieza el plan. La divisa es lo que hace que `65,000,000` signifique un apartamento y no un rascacielos. Ninguna de las dos es adorno; deje fuera cualquiera y el número es una conjetura.

Para un hogar que solo trata en dólares, la divisa no cuesta nada. Es el valor predeterminado, así que nunca la elige, y cuando el plan se guarda un importe en dólares ni siquiera registra una divisa: «ninguna divisa indicada» *significa* dólares de Estados Unidos. El desplegable que nunca toca es todo el precio de la función.

## Lo que registra el plan {#what-the-plan-records}

Abra **Dossier** en el plan etiquetado y mire lo que cada partida dice de sí misma. Cada partida lleva su propia divisa, y nada se convierte donde se guarda:

| Partida | Registrado como |
| --- | --- |
| Tokyo condo | ¥65,000,000, cotizado en 2024 |
| Tokyo condo · building management fee | ¥360,000 al año, cotizado en 2024 |
| Tokyo condo rent | ¥2,400,000 brutos al año, cotizado en 2026 |
| Frankfurt savings | €60,000, cotizado en 2026 |
| Costa Rica villa | ₡55,000,000, cotizado en 2025 |
| Brokerage, salary, living expenses | dólares |

Dos detalles son fáciles de pasar por alto. La **base de costo** del condominio es un número desnudo, `52,000,000`, sin divisa propia: toma prestada la de la tasación. Una base solo tiene sentido frente al valor con el que se comparará, así que las dos se mantienen en una sola divisa por construcción, y cuando cambia la divisa de la tasación en el editor la base la sigue de inmediato. Y el **alquiler** no es en absoluto una propiedad del condominio; es su propia partida, un generador de ingreso por alquiler, con su propia divisa. Un apartamento en yenes podría en principio alquilarse en dólares, así que el modelo no lo supone.

«Registrado, no convertido» es la regla. El plan que tecleó es el plan en el disco. Cada conversión que verá jamás se calcula a partir de estos importes nativos y de un tipo, de camino a la pantalla.

## Dónde ocurre la conversión {#where-the-conversion-happens}

La **Vista general** es el primer lugar donde se encuentran las cuatro divisas. Muestra las partidas del plan como una sola lista de valores actuales, y tiene que elegir una sola divisa para hacerlo: su moneda de visualización, aquí dólares:

| Partida | Valor actual |
| --- | ---: |
| Tokyo condo | ≈ $489,000 |
| Costa Rica villa | ≈ $95,000 |
| Brokerage | $500,000 |
| Frankfurt savings | ≈ $64,000 |

El condominio en yenes vale un poco menos que la cuenta de corretaje en dólares; la villa en colones es una fracción pequeña de cualquiera de las dos. Cada línea convertida lleva un marcador, `(¥↔$)`, la divisa en la que se modeló y luego aquella en la que se muestra, de modo que una cifra convertida nunca pasa por nativa. El botón **FX** de la barra lista cada divisa que tiene el plan y el tipo que hay detrás de cada marcador.

La previsión hace lo mismo, un nivel más hondo. El motor simula cada partida **en su propia divisa** — el condominio se revaloriza en yenes, el alquiler crece en yenes, la cuota de administración se infla en yenes — y solo convierte en los bordes, donde se netean los flujos de caja de un año y donde se totaliza un balance. Ponga el previsor en **2027** y lea el estado de flujos de caja: el alquiler llega como unos **$12,500** netos de los gastos del inmueble, junto a un salario de unos $160,000. Esos $12,500 son una cifra en yenes que cruzó la frontera una vez, al tipo del plan.

[[jump:passive-income|output__forecaster__forecaster.forecast-detail__cf-table__line.cf.rental-business]]

Los impuestos cruzan la misma frontera. Noor declara en Estados Unidos, así que el alquiler en yenes se grava como renta pasiva de EE. UU., en dólares, en el mismo estado que el salario. La calculadora de impuestos toma su unidad de cuenta de la jurisdicción, no de la partida, y por eso la partida tiene que decir en qué está.

## Los mismos dígitos, sin etiqueta {#same-digits-no-tag}

Pase ahora a **Same digits, no tag**. No se volvió a teclear nada. Cada importe simplemente dejó de decir en qué divisa está, lo que, como arriba, significa que el plan lee cada uno como dólares.

| | Every amount tagged | Same digits, no tag |
| --- | ---: | ---: |
| Tokyo condo en la Vista general | ≈ $489,000 | $65,000,000 |
| Patrimonio neto, fin de 2027 | ≈ 1,3 millones $ | ≈ 126 millones $ |
| Tokyo condo rent en 2027 | ≈ $12,500 | ≈ 1,7 millones $ |

Noor es ahora un hogar de nueve cifras sobre el papel, con un condominio que gana más de alquiler cada año de lo que el salario gana en una década. El éxito es un 100 % perfecto. Cada tabla es coherente por dentro; cada tabla está mal.

Nada en el software puede atrapar esto. `65,000,000` es un importe en dólares perfectamente legal, y un plan no puede distinguir una cifra en yenes sin etiqueta de una real: son los mismos bytes. La única defensa es que el importe diga lo que es *en el momento en que se teclea*, por la única persona que lo sabe. Para eso está el desplegable.

Esto no es un supuesto. El motor tuvo exactamente este fallo: una tasación en yenes leída a valor facial como dólares, solo del lado de la previsión, de modo que la Vista general y el previsor discrepaban en más de cien a uno. La corrección no fue convertir con más ingenio; fue hacer que cada partida llevara su divisa a lo largo de toda la simulación, y una prueba mantiene ahora al motor en eso.

## Por qué no un solo ajuste {#why-not-one-setting-for-the-plan}

El diseño más barato y obvio es una sola divisa para todo el plan: un desplegable, en los ajustes, y cada importe la hereda. Funciona exactamente mientras cada importe esté de verdad en esa divisa, y falla el día en que uno no lo está.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

Ese desplegable es la elección de divisa del plan. En este plan está en varias monedas, y el selector de debajo solo siembra el siguiente importe que teclee.

[[img:currency-on-policy|control]]

*La elección de divisa en [Every amount tagged](#canvas-dossier:currency_tagged).*

</div>
</details>

El plan de Noor no tiene una respuesta honesta a «en qué divisa está este plan». Está en cuatro. En el momento en que aparece una sola partida extranjera, un ajuste a nivel de plan tiene que volverse uno por partida, y cada importe ya tecleado tiene que repasarse y etiquetarse, por alguien que quizá ya no recuerde qué tasación estaba en qué dinero. Los importes introducidos antes del cambio y los introducidos después son indistinguibles en el disco. Ese es el cierre: no que sea difícil añadir el campo más tarde, sino que nada introducido antes puede fiarse después.

Adjuntar la divisa al importe desde el primer día es la forma honesta. No dice nada en lo que tenga que pensar un hogar de una sola divisa, y cuesta un valor predeterminado que ni siquiera se escribe. Lo que compra es que la primera partida extranjera sea una fila más, no una migración.

## Tipos de hoy, y tipos que se mueven {#rates-today-and-rates-that-move}

Los tipos que hay detrás de cada conversión de arriba viven en el plan. Abra **Supuestos → Moneda** para verlos: un tipo por divisa frente al dólar, de modo que ninguna combinación de ediciones puede ser incoherente consigo misma. Estos dos planes no llevan tipos propios y van con la instantánea incluida; un plan real puede teclear los suyos, o pulsar **Obtener FX reciente** y afinar.

[[jump:fx]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

[[img:currency-on-fx-rates|control]]

*Supuestos → Moneda en [Every amount tagged](#canvas-dossier:currency_tagged). Una fila por divisa frente al dólar, y Tipos de cambio en Fijos.*

</div>
</details>

De forma predeterminada los tipos no se mueven. Cada año de la previsión convierte al mismo tipo, lo que significa que un plan que no ha pedido otra cosa trata la divisa como una unidad y no como un riesgo: el condominio en yenes crece a una tasa inmobiliaria, y el hecho de que el propio yen vaya a vagar frente al dólar a lo largo de cuarenta años no forma parte de la dispersión. Ese valor predeterminado es deliberado, y es exactamente lo que hacía cada plan antes de que existiera el modelo de riesgo de divisa.

El modelo está ahí cuando lo quiera. Bajo la tabla de tipos, el mismo panel ofrece **Tipos de cambio: Fijos | Modelados**. Elija *Modelados* y cada tipo pasa a formar parte de la simulación: deriva con la [[term:inflation]] de su región respecto a EE. UU. y vaga con un tipo real que revierte a la media en unos años, muestreado por trayectoria, de modo que la previsión puede decir qué parte de la dispersión de un hogar procede de sus divisas. Como cada partida ya lleva su divisa a través de toda la simulación, el modelo encaja en la frontera de conversión y no cambia nada de cómo se escribe un plan. La lección *El riesgo de divisa en la previsión* lo recorre en un hogar hecho para ello.

Hoy existen dos palancas más pequeñas bajo [[term:transforms]]. **Convertir** reexpresa una partida en otra divisa al tipo del plan, de modo que puede preguntar cómo se ve el hogar si el condominio se vende y el producto se trae a casa. **Redenominar** reetiqueta la divisa sin convertir, que es el nombre honesto de lo que el segundo plan de esta página hizo por accidente.

## Qué llevarse {#what-to-take-away}

- Un importe es un número, un año y una divisa. Deje fuera cualquiera de los tres y es una conjetura.
- La divisa es gratis cuando no la necesita. Los dólares son el valor predeterminado, y un importe en dólares ni siquiera registra una.
- Nada se convierte donde se guarda. La conversión ocurre de camino a la pantalla y en los bordes de la previsión, siempre a partir del importe nativo y de un tipo que puede ver.
- Los mismos dígitos bajo la etiqueta equivocada no son un error pequeño. Son un hogar distinto.
- Registrar la divisa desde el primer día es lo que hace de la primera partida extranjera una fila en lugar de una migración, y lo que deja que el modelo de riesgo de divisa encaje en la frontera de conversión sin tocar cómo se escribe un plan.
