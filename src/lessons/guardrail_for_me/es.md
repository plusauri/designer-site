<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/guardrail_for_me.es.md
tutilis-locale: es translated
-->
# Las barreras de protección para mí

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.guardrail_for_me
  outline-path: Household planning › Success and guardrails › Guardrail for me
  document-id: guardrail_for_me
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/guardrail_for_me.md
-->

<!--- α <lesson_body> -->
Jubilados e investigadores han pasado décadas con una pregunta engañosamente simple: *¿cuánto puedo
gastar de una cartera sin quedarme sin dinero?* Ninguna respuesta única vale para cada hogar, pero un puñado
de enfoques conocidos ha dado forma a cómo se habla de un gasto «seguro». Esta lección le invita a
encontrar esos enfoques **en su propio plan**, no como porcentajes abstractos, sino como trayectorias una junto a la otra
que puede comparar con el estilo de vida que modeló.

### Con gratitud {#with-gratitude}

Los seis estudios de **Guardrails** descansan en el trabajo duro de otras personas: análisis histórico de los mercados,
diseño de reglas de decisión, tablas actuariales y una escritura clara que hizo usables esas ideas.
**Estamos agradecidos** a los autores y editores de abajo. Nuestro entorno de pruebas es una
*ilustración* didáctica de sus reglas al estilo publicado bajo una trayectoria compartida: **no** es una reimpresión de
sus artículos, **no** es una certificación de sus resultados y **no** es un consejo. Donde hay un enlace público,
lo señalamos para que pueda ir a la fuente.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Obras citadas — los seis estudios</summary>
<div class="lesson-bibliography-body">

- **Bengen SAFEMAX.** William P. Bengen, [“Determining Withdrawal Rates Using Historical Data”](https://www.financialplanningassociation.org/sites/default/files/2021-04/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf), *Journal of Financial Planning*, 1994 (reimpresión). El encuadre posterior, atento a la valoración, está en *A Richer Retirement*.
- **Kitces ratchet.** Michael Kitces, [“The Ratcheting Safe Withdrawal Rate”](https://www.kitces.com/blog/the-ratcheting-safe-withdrawal-rate-a-more-dominant-version-of-the-4-rule/), Kitces.com, 2015.
- **Guyton–Klinger.** Jonathan Guyton y William Klinger, [“Decision Rules and Maximum Initial Withdrawal Rates”](https://www.financialplanningassociation.org/sites/default/files/2021-11/2006%20-%20Guyton%20and%20Klinger%20-%20Decision%20Rules%20and%20SWR%20%281%29.PDF), *Journal of Financial Planning*, 2006.
- **Maggiulli 3.65%.** Nick Maggiulli, [*Of Dollars And Data*](https://ofdollarsanddata.com/), y *The Wealth Ladder*. Gastar 0.01% al día sale a cerca de 3.65% al año.
- **Modified RMD.** Internal Revenue Service, [Publication 590-B](https://www.irs.gov/publications/p590b), Uniform Lifetime Table. El producto la extiende como tabla de planificación para edades anteriores al inicio de las RMD.
- **Safety-first.** Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019. El enfoque de seguridad primero de Pfau cubre primero el gasto esencial con ingreso garantizado, a partir del Seguro Social, las pensiones y las rentas vitalicias, e invierte el resto. La regla del producto sigue esa forma: lo esencial lo cubre el ingreso garantizado, y una tasa discrecional se gasta de la cartera que queda. Es una ilustración del enfoque, no una regla tomada de una sola tabla del libro.

</div>
</details>

**Guardrails** hace correr luego esas reglas al estilo publicado contra **su** tamaño de cartera, su horizonte y
sus necesidades de estilo de vida bajo **una trayectoria compartida del entorno de pruebas**. Esta lección trata de **personalizar** esa
comparación: partir del colchón del hogar Springfield, ver qué gastaría cada estudio y ponerlo
junto a los ingresos y las necesidades propias del plan. No es una puntuación de supervivencia de [[term:monte-carlo|Monte Carlo]] ni
un consejo de inversión.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Sabía que…?</p>
<div class="lesson-did-you-know-body">

La regla práctica de Nick Maggiulli es gastar **0.01%** de su cartera cada día. Suena minúsculo,
pero a lo largo de un año suma **3.65%**, un poco por debajo de la famosa regla del 4%. En una cartera de \$1 millón
sale a unos \$100 al día.

</div>
</aside>

El plan activo a la derecha es **Springfield Baseline** (`springfield_baseline`).

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la
sección que la responde.

1. **¿Qué compara Guardrails, y en qué se diferencia de una previsión de Monte Carlo?** Véase
   [Qué son las barreras de protección](#what-guardrails-is-and-is-not).
2. **¿Por qué el gasto del estudio se queda cerca de cero hasta la jubilación, y por qué el rendimiento predeterminado empieza
   en el 8%?** Véase [Qué son las barreras de protección](#what-guardrails-is-and-is-not).
3. **Dado mi patrimonio neto y el horizonte del plan, ¿qué trayectoria de gasto permitiría cada regla de retiro publicada?**
   Véase [Dónde mirar](#where-to-look).
4. **¿Cómo se sitúa el gasto de cada regla junto a mis necesidades de estilo de vida y a mi ingreso fuera de la cartera?** Véase
   [Dónde mirar](#where-to-look).
5. **¿Cuánta cartera inicial necesitaría cada regla para que un colchón de financiación atado al estudio se quede
   no negativo?** Véase [Dónde mirar](#where-to-look).
6. **¿Por qué el colchón de cobertura puede estar en verde mientras el éxito de Monte Carlo está muy por debajo del 100%?** Véase
   [Dónde mirar](#where-to-look).
7. **¿Qué deja de afirmar a propósito este entorno de pruebas?** Véase [Qué no es esto](#what-this-is-not).

</div>
</aside>

---

## Qué son las barreras de protección (y qué no son) {#what-guardrails-is-and-is-not}

| | Guardrails | <span class="product-mark product-mark-on-dark"><span class="product-mark-label">Simulación Tutilis</span></span> |
|:---|:---|:---|
| **Su previsión** | **Nunca se aplica.** Cada regla corre solo aquí, en la trayectoria lateral, para que pueda compararlas. | Gasta lo que dicen sus flujos de caja y su estrategia residual de venta/inversión. No aplica **ninguna** regla de retiro de esta página. |
| **Cómo funcionan los mercados** | Una trayectoria **fija**: inflación y rendimiento nominal constantes. Los investigadores ya hicieron su propio Monte Carlo y un análisis amplio, y publicaron funciones de gasto **seguras** (o reglas de decisión). **Usamos esos frutos**: aquí **no** volvemos a ejecutar ni a validar sus estudios. | Nubes de **Monte Carlo** sobre muchas trayectorias aleatorias, más la política residual, los impuestos y el resto del bucle completo del plan. |
| **Qué compara** | Recurrencias de estudio una junto a la otra para **Bengen SAFEMAX**, **Kitces ratchet**, **Guyton–Klinger**, **Maggiulli 3.65%**, **Modified RMD** y **Safety-first**. Antes de la jubilación principal, el entorno de pruebas **solo crece**; desde la jubilación, cada regla calcula el gasto \(S_t\) y luego hace crecer el resto. | El éxito trayectoria por trayectoria de **su** plan bajo **su** definición de éxito (Oro / Plata / Bronce). |
| **Qué introduce** | Un conjunto **pequeño** de entradas que mueven el entorno de pruebas: tamaño de la cartera, inflación, **rendimiento aritmético de la cartera [[term:mu\|μ]]**, **volatilidad [[term:sigma\|σ]]** (crecimiento de la trayectoria del conjunto B), CAPE (**Bengen SAFEMAX**), esencial / garantizado (**Safety-first**), años de estudio. Esa es la contrapartida: los estudios hacen el trabajo duro y le entregan una regla más simple, más de sobre, para lo que afirman que puede gastar. Las ediciones se quedan aquí; no se escribe nada en el dossier. | Hipótesis duraderas del **dossier** (crecimiento, impuestos, venta/inversión residual, regla de éxito y el hogar mismo). |

Cada año después del inicio de la jubilación, el motor retira el gasto permitido por la regla (con tope en el efectivo)
y luego hace crecer el resto. Las reglas del **conjunto A** (Bengen SAFEMAX, Kitces, Guyton–Klinger) crecen al
**μ** aritmético. Las reglas del **conjunto B** (Maggiulli, [[term:rmd]] modificada, Safety-first) crecen a una tasa simple de lastre de volatilidad
\(r_{\mathrm{adj}} \approx \mu - \tfrac12\sigma^2\), para que las trayectorias de porcentaje de la cartera no queden
endulzadas sobre una línea μ sin riesgo: equidad metodológica, **no** una nueva corrida completa de Monte Carlo
de los artículos.

### Inicio del estudio en la jubilación principal {#study-onset-at-primary-retirement}

Las reglas publicadas están encuadradas para **alguien que se jubila** (o que ya está jubilado). Guardrails toma
ese mismo pie:

1. **Antes de la jubilación principal**, la cartera del entorno de pruebas **solo crece**. No hay retiro de estudio
   \(S_t\). El colchón que aparece en la jubilación es con el que la regla empezaría si abriera
   Guardrails ese año.
2. **Desde la jubilación**, el primer año de retiro de cada regla es el año 0 relativo a la regla (tasas semilla, celda [[term:cape]],
   base de Kitces y lo demás aterrizan una vez, sobre el colchón ya crecido).
3. **Ya jubilado** (o sin año de jubilación en el titular principal), los retiros empiezan al inicio de la previsión
   («ahora»).

En Springfield la jubilación sigue a años de distancia, así que los primeros años de las **Trayectorias de gasto** se quedan cerca de **\$0
de gasto de estudio** mientras la cartera se compone. Es intencional, no un gráfico roto.

### El rendimiento de la cartera es nominal {#portfolio-return-is-nominal}

El control **Rendimiento μ** es una tasa anual **[[term:nominal]] constante** después de cada retiro (predeterminado **8%**,
con [[term:inflation]] predeterminada de **2.5%** ≈ un real de un dígito medio para un libro equilibrado). El entorno de pruebas mantiene ambos
controles en una **banda plurianual razonable** (no negativa hasta cerca del **15%**) para que la trayectoria siga siendo una
ilustración de reglas publicadas, no un juguete de deflación o de «50% para siempre».

¿Por qué no 5% o incluso 7% como predeterminado? Al **5% nominal** (~2.5% real), tanto **Bengen SAFEMAX** como
**Kitces ratchet** tienden a **gastar toda la cartera** en horizontes de varias décadas. Al **7%**,
**Bengen SAFEMAX** a menudo **se agota** cerca del año 40 bajo su tasa inicial basada en la valoración
(~5.1% con CAPE 22) con un [[term:cola]] puro, algo habitual cuando el horizonte del estudio coincide con un plan largo. Es
aritmética, no un fallo de la interfaz: las tasas iniciales al estilo de los estudios suponen algo más cercano a los rendimientos equilibrados históricos
(más o menos **7–8% nominal / ~4–5% real** para una mezcla 50/50–60/40). El predeterminado se sienta en el
extremo **alto** de esa banda para que la primera apertura no parezca «todas las reglas fallan».

Aun así puede poner **7%** o **5%** en el control para ver qué trayectorias se vacían: es un experimento
útil, no un fallo.

### Reserva sobre la secuencia de rendimientos (lea esto) {#sequence-of-returns-caveat-read-this}

**Bengen SAFEMAX** viene de **secuencias históricas de rendimientos**, no de un solo rendimiento medio.
Una trayectoria constante al 8% solo puede **ilustrar el mecanismo** de la regla (COLA, tasa inicial basada en la valoración,
marcas de agotamiento). **No puede** reproducir SAFEMAX ni demostrar una tasa de gasto segura. Trate el
gráfico como un **entorno de pruebas de comparación**, no como una repetición histórica.

### ¿Sigue siendo seguro el 4%? {#is-4-still-safe}

El estudio de 1994 de William Bengen encontró que un retiro del 4% ajustado por la inflación sobrevivió a cada período de 30 años de la historia de Estados Unidos, y el estudio Trinity de 1998 llegó a una respuesta parecida con un método distinto. Wade Pfau hizo gran parte de la investigación que probó hasta dónde viaja esa respuesta. En 2010 corrió el mismo tipo de prueba sobre 109 años de datos de mercado de 17 países desarrollados, y un retiro real del 4% habría sido seguro solo en 4 de ellos. En 2013, con Michael Finke y David Blanchett, mostró que, cuando los rendimientos de los bonos se fijan en los bajos rendimientos de ese año en lugar de en su media histórica, la tasa de fallo estimada de un plan del 4% con la mitad en acciones sube de cerca del 6% al 57%.

Ninguno de los dos artículos dice que el 4% esté mal para cada hogar. Los dos dicen que una tasa segura depende de los rendimientos que entreguen las próximas décadas, y que el pasado de Estados Unidos fue inusualmente benigno. Esa es la razón de que el control **Rendimiento μ** de este entorno de pruebas importe, y la razón de probar los ajustes más bajos en [Pruebe esto](#try-this). La respuesta posterior de Pfau al problema es el enfoque de seguridad primero que ilustra la regla **Safety-first**: construir un suelo de ingreso garantizado para el gasto esencial, de modo que menos dependa de que alguna [[term:withdrawal-rate|tasa de retiro]] sea segura.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Investigación relacionada — estudios que ponen a prueba la regla del 4%</summary>
<div class="lesson-bibliography-body">

- Philip L. Cooley, Carl M. Hubbard y Daniel T. Walz, "Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable," *AAII Journal*, febrero de 1998 (el estudio Trinity).
- Wade D. Pfau, ["An International Perspective on Safe Withdrawal Rates: The Demise of the 4 Percent Rule?"](https://www.financialplanningassociation.org/article/journal/DEC10-international-perspective-safe-withdrawal-rates-demise-4-percent-rule), *Journal of Financial Planning*, diciembre de 2010.
- Michael Finke, Wade D. Pfau y David M. Blanchett, ["The 4 Percent Rule Is Not Safe in a Low-Yield World"](https://www.financialplanningassociation.org/article/4-percent-rule-not-safe-low-yield-world), *Journal of Financial Planning*, junio de 2013. Ganador del Montgomery-Warschauer Award 2014 de la FPA.
- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.

</div>
</details>

---

## Dónde mirar {#where-to-look}

### Abrir Guardrails {#open-guardrails}

1. En la **barra de navegación** de la izquierda, elija **Guardrails** (icono de salud/escudo con un acento dorado, con
   Región y el grupo de herramientas, no dentro del Previsor).
2. El panel es una página con desplazamiento en dos bandas: un **entorno de pruebas de arriba** (escenario, resumen de reglas,
   trayectorias de gasto) y una banda de **personalización de abajo** (un estudio frente a su plan). Arrastre el
   asidero horizontal bajo la banda de arriba para recuperar altura después de fijar los controles; los gráficos
   personales se quedan debajo.

[[jump:guardrails|output__guardrails__guardrails.rule-summary]]

### Sección de arriba — estudios compartidos {#top-section-shared-studies}

Contenido de la **sección de arriba** (Escenario compartido · Resumen de reglas · Trayectorias de gasto):

[[img:guardrails-top-band]]

*Dimensionado para que los controles principales y el Resumen de reglas se sienten con las Trayectorias de gasto: cambie un control y las trayectorias
se actualizan en la misma vista. Encoja la banda de arriba con el asidero cuando quiera más sitio para
la personalización de abajo.*

El **Escenario compartido** (izquierda) y el **Resumen de reglas** (derecha) se sientan uno junto al otro cuando la ventana es ancha:
arrastre el separador vertical entre ellos. Las **Trayectorias de gasto** quedan bajo ambos; fichas de selección múltiple en
el título del gráfico muestran u ocultan curvas. Las ediciones del escenario se quedan en este entorno de pruebas: no se escribe nada en el
dossier.

### Personalización de abajo — su plan {#bottom-personalization-your-plan}

Contenido de la banda de **personalización de abajo** (fichas de estudio · tres vistas de flujo · colchón de cobertura):

[[img:guardrails-personalization-band]]

*La personalización y la cobertura comparten la banda inferior para que pueda elegir un estudio, cambiar de vista y leer
el colchón sin salir de la página. En Springfield, con los valores predeterminados, el colchón suele estar en verde /
[[term:solvent]].*

Pone **un** estudio seleccionado frente a su plan. Las fichas de estudio sobre esta banda eligen qué regla alimenta
la **Personalización del estudio** y el **colchón de cobertura** (aparte de qué curvas se muestran en
las Trayectorias de gasto).

**Personalización del estudio** es un gráfico de flujo de caja con tres vistas excluyentes:

| Vista | Qué muestra |
|------|----------------|
| **Capacidad del estudio** | Solo el gasto de cartera del estudio seleccionado a lo largo de la trayectoria compartida (años previos a la jubilación cerca de \$0 por diseño) |
| **Ingresos/gastos modelados (sin cartera)** | Ingresos del plan fuera de la cartera y gastos de estilo de vida como pilas de categorías, sin superposición del estudio |
| **Modelado con el ingreso del estudio** | Pilas del plan **más** el gasto de cartera del estudio: el gemelo año por año de la historia de financiación que totaliza el colchón de cobertura |

Lea la **línea de flujo de caja neto** como en el [[nav:cf-chart]] del Previsor: **por encima** de la leyenda de años es
positivo / superávit; **por debajo** es negativo / faltante. El colchón de cobertura bajo el gráfico es un
acumulado en poder adquisitivo de esos mismos netos (verde solvente por encima de cero; rojo sin financiar por debajo).

### Escenario compartido (controles) {#shared-scenario-controls}

| Control | Papel |
|---------|------|
| **Cartera** | Arranca del patrimonio neto del dossier; control deslizante / edición para «¿y si este tamaño?» |
| **PN líquido** | **Activado por defecto**: semilla a partir de cuentas invertibles menos pasivos (la misma idea que el patrimonio neto líquido de [[nav:birds-eye]]). Apáguelo para incluir la casa y otros activos reales. |
| **Inflación** | COLA constante / inflación de inicio para las reglas de valoración (no negativa hasta ~15%) |
| **Rendimiento μ** | Crecimiento constante después del retiro: véase arriba (0% hasta ~15%) |
| **Vol σ** | Solo el lastre de crecimiento de la trayectoria del conjunto B |
| **CAPE** | Matriz de valoración de **Bengen SAFEMAX** solo en el **inicio de la jubilación** |
| **Esencial / Garantizado** | Solo la regla **Safety-first** |
| **Años de estudio** | Desde el inicio de la previsión hasta el final que elija (predeterminado = horizonte del plan). Los **retiros** del estudio siguen empezando en la jubilación principal cuando ese año está por delante. |

Las ediciones se quedan en el entorno de pruebas: **no se escribe nada** en el dossier. Abra **Cómo funciona** en el
panel para las ecuaciones de la trayectoria compartida y el mapa de la página.

### Trayectorias de gasto {#spending-paths}

Cada estudio es una serie anual de **efectivo realmente retirado** (con tope en la cartera). Un marcador del color de la regla
muestra el **agotamiento** cuando la cartera termina vacía. Fichas de selección múltiple en el título del gráfico muestran u
ocultan curvas. Mueva el puntero a **cualquier sitio** del gráfico: la pista sigue el año más cercano y lista,
para cada regla visible, la **cartera** al inicio del año, el **gasto total** a lo largo de la trayectoria y lo real de este año
(o el objetivo frente a lo real cuando el tope de efectivo ata). El control de año/edad abajo a la izquierda del
gráfico es el mismo menú de eje que se usa en los gráficos de balance y de flujo de caja.

### Resumen de reglas y cartera mínima para la cobertura {#rule-summary-and-min-portfolio-for-coverage}

| Tabla | Papel |
|-------|------|
| **Resumen de reglas** | Gasto de inicio / tasa de inicio (primer año de **retiro**, no un cero previo a la jubilación), gasto total, cartera terminal, más **Cartera mín.** y **Extra necesario** para la cobertura: el colchón inicial más pequeño para que el **colchón de cobertura** se quede no negativo bajo estos controles del entorno de pruebas y las pilas de su plan (**retirar hasta la necesidad**). El extra necesario es frente al control de cartera de arriba. Una raya larga significa que no se puede resolver (por ejemplo un faltante de los años de trabajo que el gasto del estudio no puede arreglar porque antes del inicio \(S_t = 0\)). Abra el **?** de la tabla para una lectura columna por columna. Pulse una fila para seleccionar ese estudio para la personalización. |

En Springfield Baseline, con los valores predeterminados, verá a menudo **extra necesario = \$0** para cada regla y un
colchón de cobertura **verde (solvente)**: el colchón del hogar ya supera el colchón bajo estos
controles. Baje la cartera o el rendimiento para ver cómo la tabla se recalcula y el colchón se aprieta, o abra
[Cuando las barreras de protección piden más](/learn/springfield_guardrail_gap) para un contrapunto cerca de la jubilación
en el que el extra necesario es positivo y hacer crecer el colchón es la lección.

[[jump:guardrails|output__guardrails__guardrails.rule-summary__line.guardrails.min-portfolio,output__guardrails__guardrails.rule-summary__line.guardrails.extra-needed]]

### Piezas de la banda de abajo {#bottom-band-pieces}

| Pieza | Papel |
|-------|------|
| **Fichas de estudio** (sobre la personalización) | El gasto de trayectoria de qué estudio alimenta la personalización y el colchón |
| **Personalización del estudio** | Tres vistas de las pilas del plan y/o de la capacidad del estudio (tabla de arriba) |
| **Colchón de cobertura** | Acumulado en poder adquisitivo de los netos de financiación; **retirar hasta la necesidad** en la barra de herramientas |

La capacidad se mueve con el control de cartera y el inicio del estudio; **la necesidad y los ingresos siguen escritos por el dossier**.
Esa separación es el sentido de la mitad de personalización de la pantalla.

### Colchón de cobertura frente al éxito de Monte Carlo {#coverage-buffer-vs-monte-carlo-success}

En **Springfield Baseline**, con los valores predeterminados, el colchón de cobertura suele estar **verde / solvente** y
el **Extra necesario** es **\$0** para cada regla: un colchón cómodo supera la historia de financiación
atada al estudio. El **Monte Carlo** del Previsor en el mismo hogar a menudo sigue informando algo así como
**dos de cada tres** trayectorias con éxito en el umbral predeterminado de **Plata** (no el 100%). Los dos resultados pueden ser ciertos:
responden a preguntas distintas. Un colchón verde no es «el MC se equivoca», y un % alto en Plata no es
«cada regla publicada financia siempre este estilo de vida».

Para ver un colchón **apretado o rojo** **mientras** Monte Carlo sigue pareciendo viable, **baje la cartera**
aquí, o abra
[Cuando las barreras de protección piden más](/learn/springfield_guardrail_gap) (contrapunto cerca de la jubilación
con un colchón más fino). En ese contrapunto, hacer crecer el capital líquido hacia la **cartera mínima** de un estudio puede
subir el éxito residual de Monte Carlo sin igualar las dos puntuaciones:

[[img:guardrail-gap-transforms-mc-before-after]]

*De la lección contrapunto de la brecha: haga crecer **Traditional [[term:401k]] → Target Date Equity**<!-- term-skip: traditional — a Transform's name, not prose --> hacia un mínimo de estudio y
lea el **Resumen de simulación** Original frente a Modificado bajo Plata. El mismo activo que en ese recorrido:
Springfield de base aquí suele empezar en verde / Extra necesario \$0, así que la historia de la subida vive en el
contrapunto.*

| | **Colchón de cobertura** (Guardrails) | **Éxito de Monte Carlo** (Previsor) |
|---|---|---|
| **Pregunta** | Si los retiros de la cartera están **limitados por el gasto permitido \(S_t\) de este estudio** (desde el inicio de la jubilación), ¿los ingresos del plan + esa capacidad financian la **necesidad de estilo de vida** año por año (colchón corrido atento al orden sobre el horizonte **completo**)? | Bajo el **plan completo** — política de capital residual, impuestos, muchas trayectorias de mercado aleatorias — ¿la trayectoria «sale adelante» bajo su definición de éxito? |
| **¿Quién puede retirar de la cartera?** | Solo lo que permite la **regla del estudio** después del inicio (opcionalmente solo la brecha después de otros ingresos: *retirar hasta la necesidad*). Los años previos a la jubilación anotan el superávit/déficit del plan **sin** gasto de estudio. | La política **residual** del plan puede vender lo que el hogar todavía necesita (prorrata, orden fiscal, deslizamiento, …) |
| **«Problema»** | Saldo del colchón \(B_t < 0\) en cualquier año (y no hace falta que se recupere para que la franja siga en rojo) | Bajo **Plata**, un estrés de **liquidez** temporal que luego se recupera puede contar aún como éxito; solo los resultados más duros son fallo |
| **Mercados** | Una μ constante / trayectoria de lastre del conjunto B | Nube de secuencias |

Así que:

- **Colchón rojo** ≈ «el gasto permitido de esta regla nunca financia del todo el estilo de vida modelado bajo la
  trayectoria del entorno de pruebas», incluidos los años en que las pilas del plan solas se quedan cortas antes de que la regla empiece a retirar.
- **Éxito alto en Plata** ≈ «la mayoría de las trayectorias del motor siguen financiando el *plan* bajo retiros residuales y mercados»,
  y la mezcla de resultados sigue importando (éxito limpio frente a recuperación de liquidez frente a fallo; patrimonio neto
  de la cola izquierda).
- **Colchón verde + Extra necesario \$0** en los valores predeterminados de Springfield ≈ la historia de estilo de vida atada al estudio sale adelante
  bajo estos controles, y sigue sin ser lo mismo que la supervivencia del plan en Monte Carlo.

**¿Qué imagen para el «riesgo de fallo»?**

- Para **«¿sobrevivirá este plan tal como la aplicación lo prevé de verdad?»**, prefiera **Monte Carlo** (mezcla de
  éxito + cola a la baja, no el % del titular solo). Véase [¿Qué significa el éxito?](/learn/springfield_success).
- Para **«si disciplino los retiros a esta regla publicada, ¿el estilo de vida sigue financiado?»**, prefiera el
  **colchón de cobertura**, **Modelado con el ingreso del estudio** y **Cartera mín.** / **Extra necesario** en el
  Resumen de reglas. Esa pregunta es a propósito más estricta.
- Ninguno solo está completo. No lea un éxito alto de MC como «un estudio del 4% financia siempre este estilo de vida»,
  y no lea un colchón rojo como «Monte Carlo miente».

Barra de herramientas del colchón de cobertura: **Retirar hasta la necesidad** (activado por defecto) solo anota el gasto de estudio necesario
después de que otros ingresos cubren el estilo de vida: déjelo activado para una historia de financiación del estilo de vida. No hay un interruptor aparte
de «empezar el colchón en la jubilación»: el inicio ya vive en la trayectoria del estudio, y el colchón lleva
los netos del plan de todo el horizonte.

[[jump:guardrails|output__guardrails__guardrails.personalization__line.guardrails.coverage-buffer]]

---

## Pruebe esto {#try-this}

1. Abra **Guardrails**. Confirme que el **PN líquido** está **activado** (colchón invertible predeterminado), que el **Rendimiento μ**
   es **8%**, que la **Vol σ** es de cerca del **15%** y que el importe de la cartera parece cuentas − deuda y no
   el PN completo del hogar con la casa. Note la línea bajo los controles: crecimiento del conjunto A frente al conjunto B después
   del lastre de volatilidad.
2. Recorra las **Trayectorias de gasto** con varios estudios visibles. Los primeros años deberían mostrar poco o ningún gasto
   de estudio hasta la jubilación principal; los años posteriores se abren en abanico según la regla. Note los rombos de agotamiento si los hay. Mueva
   el puntero por el gráfico: la pista debe seguir sin que tenga que acertar un punto.
3. Baje el **Rendimiento μ** al **7%** y luego al **5%**. Al 7%, **Bengen SAFEMAX** puede seguir vaciándose en un horizonte
   largo; al 5%, **Bengen SAFEMAX** y **Kitces ratchet** a menudo se vacían los dos. Restaure el **8%**.
   Opcional: suba **σ** y mire cómo las trayectorias del conjunto B se adelgazan respecto del conjunto A.
4. Opcional: suba el **CAPE** (mercado caro) y mire cómo cambia el gasto de inicio de **Bengen SAFEMAX**; las demás
   reglas ignoran el CAPE.
5. Lea el **Resumen de reglas**: **Cartera mín.** y **Extra necesario**. En Springfield, con los valores predeterminados,
   el extra necesario suele ser \$0 y el colchón está en verde. Baje el control **Cartera** hasta que algunas filas
   muestren extra positivo (y el colchón puede ponerse rojo), y luego restaure.
6. En la banda de **personalización de abajo**, elija un estudio con las fichas. Recorra las tres
   vistas de personalización. En **Modelado con el ingreso del estudio**, mire la **línea neta** frente al eje de años.
   Deje el **colchón de cobertura** activado: verde significa solvente; rojo significa que el colchón de financiación corrido se puso
   negativo. Confirme que **Retirar hasta la necesidad** está activado para una historia de financiación del estilo de vida.
7. Opcional: abra [[nav:forecaster]], ejecute Monte Carlo en el mismo plan Springfield y compare el %
   de éxito más la mezcla de resultados con la historia del colchón: preguntas distintas (véase arriba).

---

## Qué no es esto {#what-this-is-not}

- **No** es una política de gasto en su previsión. El Previsor nunca aplica ninguna de estas reglas; 
  gasta lo que dicen sus flujos de caja y su estrategia residual.
- **No** es la afirmación de que el 8% (o cualquier μ) se ganará cada año.
- **No** es SAFEMAX sacado de la historia: las secuencias importan; esta trayectoria no.
- **No** es una estrategia residual atenta a los impuestos ni una *política* de RMD en el sentido del plan completo (esas viven en
  Supuestos / Previsor).
- **No** es la misma puntuación que el éxito de Monte Carlo: la cobertura del estilo de vida limitada por el estudio ≠ la supervivencia del plan
  financiada en residual bajo Plata/Oro/Bronce.
- **No** es un consejo de gastar la cifra en dólares de un estudio o la solución de cartera mínima como recomendación.

Una lección de estudio más a fondo (parámetros de las reglas, más hogares, notas de investigación más profundas) puede seguir cuando
este recorrido de personalización resulte familiar.

---

## Adónde ir después {#where-to-go-next}

| Lección | Relación |
|--------|----------------|
| [Cuando las barreras de protección piden más](/learn/springfield_guardrail_gap) | Contrapunto cerca de la jubilación: el colchón falla → mín \(P_0\) → engordar → el MC mejora |
| [Conozca al hogar Springfield](/learn/springfield_baseline) | El mismo hogar del lienzo (colchón cómodo) |
| [¿Qué significa el éxito?](/learn/springfield_success) | Niveles de éxito de Monte Carlo, otra superficie |
| [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order) | Política residual de **venta/inversión**, no reglas de estudio |
| [Reequilibrio deslizante frente a prorrata](/learn/springfield_glide) | Objetivo de la mezcla residual |

---

## Conclusión honesta {#honest-takeaway}

Use Guardrails para preguntar: **si estas reglas publicadas hicieran crecer mi colchón invertible hasta la jubilación y luego corrieran
sobre ese saldo bajo una hipótesis de rendimiento clara, ¿cómo se compararían las trayectorias de gasto entre sí y
con las necesidades de mi plan, incluido si un colchón de financiación atado al estudio se queda no negativo, y cuánto
capital inicial necesitaría cada regla para mantenerlo así?** Luego lleve esa intuición de vuelta al Monte Carlo del Previsor
(supervivencia del plan bajo la política residual y los mercados) y a su propio juicio, con el riesgo de secuencia
y los impuestos todavía a la vista.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
