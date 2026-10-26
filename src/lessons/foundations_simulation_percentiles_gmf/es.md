<!--
tutilis-return: lessons/foundations_simulation_percentiles_gmf/prose/es.md
tutilis-locale: es translated
-->
# Monte Carlo, de la estrella polar a la dispersión

Jordan tiene sesenta años, piensa jubilarse en 2031 y tiene 1,34 millones de dólares invertidos, aproximadamente 70/30, entre un [[term:401k|401(k)]], una [[term:brokerage]] y un poco de efectivo. La previsión de ese plan muestra dos cosas a la vez. Los gráficos trazan una sola línea suave a lo largo de los años, y el Resumen de simulación junto a ellos informa de mil desenlaces distintos, desde un agujero profundo hasta decenas de millones de dólares.

Las dos son la previsión, y responden a preguntas distintas. Esta lección desmonta la previsión tuerca a tuerca: de dónde sale la línea única, de dónde salen las mil, la aritmética debajo de cada una, por qué los mil desenlaces se inclinan tanto a la derecha y qué no puede ver el método entero.

Hay dos planes abiertos en el [[term:canvas]]. [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) es el plan de jubilación, con un salario, el Seguro Social y gastos de vida. [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) es 100.000 $ en un fondo del S&P 500 dentro de un [[term:ira|IRA]] [[term:roth|Roth]], sin nada más en el plan, de modo que la forma de sus resultados se puede leer sin que nada la empañe. La matemática más pesada queda en los bloques de pizarra marcados **Para los amantes de las matemáticas**. Nada está oculto, y la lección se lee por completo con cada uno de ellos cerrado.

## Qué aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder a estas preguntas. Cada una enlaza con la sección que la responde.

1. **¿De dónde vino Monte Carlo, y por qué lleva el nombre de un casino?** Véase [De dónde vino Monte Carlo](#where-monte-carlo-came-from).
2. **¿Por qué quien planifica necesita a la vez una sola previsión y mil de ellas?** Véase [Dos maneras de leer un futuro](#two-ways-to-read-a-future).
3. **¿Qué es la trayectoria de la estrella polar, y por qué se construye a partir de la media geométrica?** Véase [La trayectoria de la estrella polar](#the-north-star-path).
4. **¿De dónde sale cada futuro aleatorio, y qué hay de aleatorio en mi plan?** Véase [Un sorteo por partida y por año](#one-draw-per-item-per-year).
5. **¿Cómo se mueven juntas las acciones, los bonos y el gasto en un año simulado?** Véase [Moverse juntos](#moving-together).
6. **¿Tengo que elegir yo alguno de estos números?** Véase [Valores predeterminados que puede dejar quietos](#defaults-you-can-leave-alone).
7. **¿Cómo leo los mil desenlaces: percentiles, la mediana, la tasa de éxito?** Véase [Leer los mil futuros](#reading-the-thousand-futures).
8. **¿Por qué la dispersión del patrimonio neto es asimétrica, y lo sería después de un año?** Véase [Por qué el resultado se inclina a la derecha](#why-the-outcome-leans-right).
9. **¿Una serie de diez mil futuros es mejor que una serie de mil?** Véase [Cuántos futuros ejecutar](#how-many-futures-to-run).
10. **¿Qué no puede decirme Monte Carlo?** Véase [Qué no puede ver Monte Carlo](#what-monte-carlo-cannot-see).

</div>
</aside>

## De dónde vino Monte Carlo {#where-monte-carlo-came-from}

El método empezó con un solitario. En 1946 el matemático Stanislaw Ulam se recuperaba de una enfermedad y pasaba el tiempo con las cartas, y se preguntó cuál era la probabilidad de que una mano del solitario Canfield saliera. La combinatoria no tenía remedio. Se le ocurrió que sería mucho más fácil disponer cien manos y contar cuántas salían bien.

Ulam trabajaba en Los Alamos, donde los problemas difíciles trataban de neutrones que se mueven a través de la materia, y vio que el mismo truco servía. Con John von Neumann elaboró cómo seguir a muchos neutrones simulados, cada uno dando pasos aleatorios, y contar qué les ocurría. Su colega Nicholas Metropolis sugirió el nombre en clave **Monte Carlo**, por el casino de Mónaco donde al tío de Ulam le gustaba jugar. Las primeras ejecuciones corrieron en el ordenador ENIAC en 1948, y Metropolis y Ulam publicaron el método con ese nombre en 1949.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Lo sabía?</p>
<div class="lesson-did-you-know-body">

Monte Carlo fue un nombre en clave antes de ser un método. El trabajo en Los Alamos era secreto, así que necesitaba un nombre que no le dijera nada a un extraño, y el nombre del casino se quedó porque toda la idea es dejar que el azar juegue muchas veces y contar los resultados.

</div>
</aside>

Las finanzas adoptaron la idea despacio. Phelim Boyle la usó para valorar opciones en 1977, y a finales de los años 1990 el software de planificación de la jubilación había empezado a sustituir un solo rendimiento supuesto por muchos simulados. La idea no ha cambiado desde el solitario de Ulam. Cuando una pregunta está demasiado enredada para resolverla con una fórmula, se juega muchas veces con el azar dentro del bucle y se cuenta cuántas veces ocurre cada desenlace.

Un plan de jubilación es exactamente esa clase de pregunta. El salario, el gasto, los impuestos, los retiros y los rendimientos se alimentan unos a otros año tras año, y no existe ninguna fórmula para «la probabilidad de que este plan funcione». La [[term:monte-carlo]] desarrolla el plan mil veces y cuenta.

## Dos maneras de leer un futuro {#two-ways-to-read-a-future}

La previsión ofrece dos vistas del mismo plan, y quien planifica necesita las dos.

La primera es una sola trayectoria, sin suerte dentro. Cada posición crece a su tasa compuesta esperada, cada flujo de caja a su tasa esperada, y cada año es un año medio. Tutilis llama a esto la previsión **estrella polar**, la [[term:gmf]], y es la trayectoria que dibujan los gráficos de balance y de flujos de caja cuando se abre la previsión. Es el **ID de previsión 0**, [[term:fid-gmf]], y la entrada de previsión en la franja de arriba del previsor dice **Estrella polar ✦** mientras está seleccionada.

[[jump:fid|output__forecaster__forecaster.forecast-detail__forecast-detail.fid]]

[[img:mc-balance-sheet-jordan]]

*El balance de Jordan en la trayectoria de la estrella polar en [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). El patrimonio neto sube hasta la jubilación en 2031, se nivela durante un año mientras el sueldo se detiene y empiezan los retiros, y luego vuelve a subir hasta unos 3 millones de dólares en 2057. No hay ningún año malo en ningún punto de ella.*

La vista de la estrella polar es la herramienta adecuada para las preguntas del tipo «qué pasaría si». Como no lleva aleatoriedad, un cambio en el plan es lo único que la mueve. Si Jordan se jubila un año más tarde, gasta 5.000 $ menos o pasa la cuenta de corretaje a bonos, la diferencia en la trayectoria de la estrella polar es el efecto de ese cambio y nada más. Responde *en qué dirección* una palanca empuja el plan y *hasta dónde*, y responde en dólares exactos sobre un gráfico que se puede leer año por año. Como muestran las secciones siguientes, la trayectoria de la estrella polar también se sitúa cerca del centro de los mil futuros, de modo que sus magnitudes son representativas.

Lo que la vista de la estrella polar no puede mostrar es el riesgo. Un plan que funciona en una trayectoria media todavía puede fallar cuando los años malos llegan pronto, y una sola trayectoria sin años malos no tiene manera de decir cuántas veces ocurre eso. Para eso hace falta la segunda vista: mil futuros, cada uno con su propia suerte, puestos uno al lado del otro. El riesgo es una afirmación sobre la dispersión de los desenlaces, y solo la dispersión puede medirlo.

Así que las dos vistas se reparten el trabajo. Use la trayectoria de la estrella polar para entender el plan y para comparar una versión de él con otra. Use los mil futuros para preguntar cuánto puede aguantar el plan.

## La trayectoria de la estrella polar {#the-north-star-path}

La trayectoria de la estrella polar se construye a partir de la [[term:geometric-mean]] del rendimiento de cada partida. La razón de que se construya así, y no a partir del promedio llano, merece unos párrafos, porque explica una brecha que aparece por toda la previsión.

Cada partida que crece en un plan lleva dos números. El primero es su rendimiento anual medio, escrito [[term:mu]]. El segundo es cuánto varía ese rendimiento de un año a otro, su [[term:volatility]], escrita [[term:sigma]]. Juntos describen una distribución normal, N(μ, σ), la curva de campana de la que se sortea el rendimiento anual de la partida. El fondo del S&P 500 del plan de Jordan funciona con las cifras del sistema para las acciones de grandes empresas de Estados Unidos, N(7.56%, 16.42%).

El rendimiento medio no es la tasa a la que capitaliza una inversión. Pierda un 50 % un año y gane un 50 % el siguiente, y el rendimiento medio es cero, pero 100 $ se han convertido en 75 $. Los vaivenes cuestan crecimiento, y el coste sube con el tamaño de los vaivenes. Eso es el [[term:volatility-drag]], y una buena aproximación es la mitad del cuadrado de la volatilidad. Para el fondo de acciones eso es 16,42 % al cuadrado y partido por dos, unos 1,35 puntos, de modo que la tasa a la que cabe esperar que capitalice es 7,56 % − 1,35 % = **6,21 %** al año.

Esa tasa compuesta, μ − σ²/2, es la tasa a la que crece cada partida de la trayectoria de la estrella polar. El nombre **GMF** corresponde a *geometric mean forecast*, la previsión de media geométrica. A lo largo de cuarenta años la diferencia con el promedio llano es grande, y el plan [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) la muestra sin nada más por medio. Sus 100.000 $ están valorados en 2026, de modo que el final de **2065** son cuarenta años de crecimiento. Abra ese plan y ponga **Año** en la franja de arriba del previsor en **2065**.

[[img:mc-balance-sheet-one-fund-2065]]

*El gráfico de balance de [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) en la trayectoria de la estrella polar, con 2065 seleccionado.*

El gráfico sube sin un solo bache. Cada barra es un 6,21 % más alta que la anterior, de modo que las barras trepan en una curva suave, doblada hacia arriba. Esa suavidad es el aspecto de una trayectoria sin suerte. Una cuenta real, y cada uno de los mil futuros aleatorios, zigzaguea de camino hacia arriba.

La tabla de balance de 2065 da el número. El IRA Roth, que solo tiene el fondo del S&P 500, termina el año en unos **1,12 millones de dólares**, que son 100.000 $ por [[term:compounding]] al 6,21 % durante cuarenta años. Capitalizar al promedio llano del 7,56 % daría en cambio unos 1,85 millones de dólares, dos tercios más, para el mismo fondo a lo largo de los mismos años.

[[img:mc-balance-sheet-table-one-fund-2065]]

*El balance de 2065 en [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund). La tabla redondea a 1,1 M$.*

La tabla redondea sus importes para mantener estrechas las columnas. Pase el cursor sobre el chip ⓘ junto a **Roth IRA** para ver el saldo final al dólar.

[[img:mc-balance-sheet-row-roth-2065]]

*La fila de 2065 del IRA Roth, con el cursor encima. El saldo final es 1.115.434 $, y la tarjeta de debajo indica los 100.000 $ con los que el fondo empezó en 2026.*

La previsión también puede dibujar esa segunda trayectoria. La [[term:amf]], la *previsión de media aritmética*, hace crecer cada partida a su promedio llano μ. Es una fila opcional en el **Resumen de simulación**, bajo sus ajustes de **Avanzado**, y está ahí como contraste. Puesta al lado de la trayectoria de la estrella polar, la brecha entre las dos es el lastre de volatilidad del plan entero.

[[jump:amf|output__forecaster__forecaster.simulation-summary__simulation-summary.advanced__advanced.include-amf]]

<details class="lesson-math">
<summary class="lesson-math-label">Para los amantes de las matemáticas — por qué μ − σ²/2</summary>
<div class="lesson-math-body">

El patrimonio después de \(n\) años es un producto, \(W_n = W_0 \prod_{t=1}^{n} (1 + r_t)\), así que la tasa que importa es el promedio de los logaritmos, \(g = \mathbb{E}[\ln(1+r)]\). Un desarrollo de segundo orden de \(\ln(1+r)\) alrededor de \(\mu\) da

\[ \mathbb{E}[\ln(1+r)] \approx \ln(1+\mu) - \frac{\sigma^2}{2(1+\mu)^2} \]

y para rendimientos de unos pocos por ciento esto se acerca a \(\mu - \sigma^2/2\), la tasa que usa el motor. Se calcula en `GeometricMeanReturnSampler`, como `means[i] - stdDevs[i]² / 2`, sin sorteo aleatorio alguno.

Para el fondo de acciones, la forma más ajustada da un 6,12 % al año y \(\mu - \sigma^2/2\) da un 6,21 %. La mediana de los mil futuros simulados crece a la primera tasa, de modo que la trayectoria de la estrella polar se sitúa un pelo **por debajo** de la mediana, del lado prudente. En el plan de un solo fondo a lo largo de cuarenta años queda cerca del puesto 473 de 1.000, y en el plan de Jordan cerca del puesto 492.

La media de los mil crece al promedio llano, \(\mathbb{E}[W_n] = W_0 (1+\mu)^n\), porque los sorteos anuales son independientes y la esperanza de un producto de factores independientes es el producto de sus esperanzas. Esa es la AMF. La media de una distribución sesgada no es donde cae un desenlace típico, y ese es el tema de una sección posterior.

</div>
</details>

## Un sorteo por partida y por año {#one-draw-per-item-per-year}

Toda previsión salvo la estrella polar es una previsión aleatoria. Cada uno de esos mil futuros, numerados del 1 al 1.000, es una ejecución completa del plan, año por año, con el rendimiento de cada partida sorteado al azar. En cada año simulado el motor sortea un rendimiento para cada partida a partir de la curva de campana de esa partida, N(μ, σ). Un fondo de acciones puede ganar un 21 % un año y perder un 9 % el siguiente. El plan hace entonces con esos rendimientos todo lo que hace en la trayectoria de la estrella polar: paga el salario, gasta, paga impuestos, retira, reequilibra si el plan lo dice y lleva el resultado al año siguiente.

Para ver uno, quédese en el plan azul [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) con **Año** en 2065, y escriba **100** en la entrada de previsión de la franja de arriba del previsor.

[[img:mc-balance-sheet-one-fund-fid100]]

*El gráfico de balance de [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) en el ID de previsión 100, con 2065 seleccionado. El mismo fondo y los mismos años que el gráfico de la estrella polar de arriba, con la suerte puesta de nuevo.*

La previsión 100 no es más que bordes dentados. El fondo gana un 33 % en 2030 y un 27 % en 2036. Luego pierde un 27 % en 2041 y, tras un breve rebote, pierde un 12 % en 2043 y un 24 % en 2044, de modo que la cuenta cae de unos 479.000 $ al final de 2039 a unos 259.000 $ al final de 2044. Gana un 42 % al año siguiente, y un 36 % tanto en 2055 como en 2057. Termina 2065 en unos 1,22 millones de dólares, no lejos de los 1,12 millones de dólares de la estrella polar, por un camino que no se parece en nada a la curva suave. Los años posteriores a 2065 no son más tranquilos. La cuenta supera los 2,1 millones de dólares en 2074 y baja a unos 840.000 $ cinco años después.

Los números son aleatorios, pero no son nuevos cada vez que mira. Los sorteos de cada previsión se siembran a partir de su ID de previsión, de modo que escribir 100 otra vez, mañana o en otro ordenador, pinta esta misma imagen. Eso es lo que le permite volver a un futuro concreto, señalarlo a otra persona o ver qué le hace una edición del plan.

No solo se sortean las inversiones. Los flujos de caja llevan el mismo par de números, y se sortean de la misma manera. En el plan de Jordan el salario crece según N(3.5%, 1.5%), de modo que algunos años traen una subida mayor que otros. Los gastos de vida crecen según N(2.8%, 1.5%), porque el coste de la vida no sube la misma cantidad cada año. El Seguro Social crece según N(2.5%, 0%), sin volatilidad propia, porque el sistema trata su ajuste anual por el coste de la vida como una tasa constante.

[[img:mc-card-living-expenses-jordan]]

*La tarjeta de los gastos de vida de Jordan en [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). El crecimiento del gasto se lee N(2.8%, 1.5%), el mismo par que lleva cada inversión. El μg de al lado es la tasa compuesta que usa la trayectoria de la estrella polar, que con una volatilidad tan pequeña se redondea al mismo 2,8 %.*

**Riesgo vs. retorno** en el panel **Riesgo** pone cada partida del plan en un solo gráfico, con su volatilidad a lo ancho y su tasa media hacia arriba. Con el chip de flujos de caja encendido, el salario, el Seguro Social y los gastos de vida aparecen junto a los fondos. El fondo de acciones se sitúa alto y lejos a la derecha. El fondo de Treasuries se sitúa en el centro, y el fondo monetario y los tres flujos de caja se agrupan en la esquina inferior izquierda, estables y lentos. La estrella es la cartera en su conjunto.

[[jump:volatility|output__risk__line.risk.risk]]

[[img:mc-risk-scatter-jordan]]

*Riesgo vs. retorno para [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan), con posiciones y flujos de caja a la vista. Cada punto es una partida para la que la previsión sortea un rendimiento cada año.*

Hay dos hechos más sobre los sorteos que importan para todo lo que sigue.

El primero es que un sorteo no puede perder más que todo. Un rendimiento anual tiene un suelo en −100 %, de modo que una posición puede llegar a cero pero nunca por debajo. No hay techo.

El segundo es que los años son independientes entre sí. Un año malo no hace que el siguiente sea ni peor ni mejor, y una racha de años buenos no aumenta la probabilidad de una corrección. Los estadísticos llaman a sorteos como estos [[term:iid]], *independientes e idénticamente distribuidos*: el rendimiento de cada año sale de la misma curva de campana, sin memoria de los años anteriores. Es una elección de modelo con consecuencias, y la última sección vuelve a ella.

La previsión también le deja comprobar que los sorteos hacen lo que dicen. A lo largo de los mil futuros de Jordan, el promedio medido del fondo de acciones es del 7,64 % frente al 7,56 % que se le dio, y su volatilidad medida es del 16,49 % frente al 16,42 %. El salario queda en el 3,49 % frente al 3,5 %. Cada número cae dentro del error de muestreo de su especificación.

<details class="lesson-math">
<summary class="lesson-math-label">Para los amantes de las matemáticas — cómo se sortea un rendimiento</summary>
<div class="lesson-math-body">

Cada año, para cada partida \(i\), el motor forma

\[ r_i = \max\bigl(-1,\; \mu_i + \sigma_i\, z_i\bigr) \]

donde \(z_i\) es un sorteo de una normal estándar. Las normales estándar vienen de la transformada de Box–Muller (Box y Muller, 1958), que convierte dos números aleatorios uniformes \(u_1, u_2\) en uno normal, \(z = \sqrt{-2 \ln u_1}\, \cos(2\pi u_2)\). Los \(z_i\) se hacen mover juntos mediante el paso de la sección siguiente, y el dinero de la partida se multiplica por \(1 + r_i\).

Cada futuro es reproducible. Cada uno se siembra a partir de su ID de previsión y del nombre del flujo del que sortea, de modo que el mismo plan produce siempre los mismos mil futuros, y una edición de una partida deja los sorteos de todas las demás donde estaban. Ejecute un plan dos veces y el ID de previsión 100 es el mismo futuro las dos veces.

</div>
</details>

## Moverse juntos {#moving-together}

Las acciones, los bonos y el gasto no se mueven con independencia dentro de un año. Cuando las acciones caen con fuerza, los bonos de alta calidad han tendido a aguantar o a subir, y en un año inflacionario el gasto y algunos activos se mueven juntos. Una previsión que sorteara cada partida por separado se perdería esto, y subestimaría cuánto suaviza el recorrido una cartera [[term:diversification|diversificada]].

Así que la previsión sortea los rendimientos de cada año *juntos*, con la [[term:correlation]] de cada par incorporada. En las cifras del sistema, las acciones de grandes empresas de Estados Unidos y los Treasuries a medio plazo tienen una correlación de −0,31, lo que significa que, en un año en que las acciones van peor de lo habitual, el fondo de Treasuries tiende a ir un poco mejor. Los gastos de vida tienen una correlación de +0,25 con las acciones, una tendencia modesta de una economía caliente a subir a la vez los rendimientos y los precios. Las correlaciones medidas a lo largo de los mil futuros de Jordan vuelven tal como se especificaron: −0,31 para las acciones frente a los Treasuries y 0,26 para las acciones frente a los gastos de vida.

El paso que hace que los sorteos se muevan juntos es una **descomposición de Cholesky**, llamada así por André-Louis Cholesky, un topógrafo del ejército francés que la elaboró para hacer mapas hace cerca de un siglo. Toma la tabla de correlaciones y la factoriza en una forma que convierte números aleatorios independientes en números correlacionados. El paso de [[term:cholesky]] se ejecuta una vez, antes del primer futuro, y luego lo usa cada año de cada futuro.

El paso tiene un punto frágil. Una tabla de correlaciones tiene que ser coherente por dentro. Si A se mueve de cerca con B y B se mueve de cerca con C, entonces A no puede moverse al revés de C. Una tabla armada a partir de fuentes distintas, o editada a mano un par cada vez, puede romper esa regla sin que nadie lo note, y entonces el paso de Cholesky no tiene respuesta. Cuando eso ocurre, Tutilis no se detiene ni deja caer las correlaciones en silencio. Encuentra la tabla más cercana que *sí* es coherente y usa esa, y el panel Supuestos advierte de los pares que entraban en conflicto antes de que corra ninguna simulación.

<details class="lesson-math">
<summary class="lesson-math-label">Para los amantes de las matemáticas — Cholesky, y la reparación cuando falla</summary>
<div class="lesson-math-body">

Sea \(C\) la matriz de correlación de los factores del plan. Si \(C\) es definida positiva, se factoriza de forma única como \(C = L L^{\mathsf T}\) con \(L\) triangular inferior. Extraiga un vector \(z\) de normales estándar independientes y ponga \(y = L z\). Entonces

\[ \operatorname{Cov}(y) = L\, \mathbb{E}[z z^{\mathsf T}]\, L^{\mathsf T} = L I L^{\mathsf T} = C, \]

de modo que las componentes de \(y\) tienen exactamente las correlaciones de \(C\). Esos \(y_i\) son los \(z_i\) del bloque anterior.

Una matriz de correlación construida par a par puede no ser semidefinida positiva: alguna combinación de los activos tendría varianza negativa, lo cual es imposible. Entonces no existe ningún \(L\). La corrección de error del motor corre en tres etapas (`Cholesky.decompose`, estrategia `AUTO`):

1. **Probar la factorización llana.** La mayoría de los planes se detienen aquí.
2. **Reparar hacia la matriz de correlación más cercana.** Si falla, calcula la matriz de correlación más cercana a \(C\) en la norma de Frobenius, por el método de proyecciones alternadas de Higham (Higham, 2002). Alterna entre proyectar sobre matrices con autovalores no negativos (recortándolos en \(10^{-8}\)) y sobre matrices con diagonal unitaria, con la corrección de Dykstra para que la alternancia converja al verdadero punto más cercano. Corre hasta una tolerancia de \(10^{-10}\) o 200 iteraciones.
3. **Añadir una pequeña perturbación como último recurso.** Si el redondeo todavía vence a la factorización, añade una cantidad minúscula a la diagonal, empezando en \(10^{-10}\) y creciendo por diez, hasta ocho veces.

La matriz reparada y su distancia a la original se conservan con la ejecución, y la misma reparación corre antes de cualquier simulación para nombrar los pares en conflicto en el aviso del panel.

</div>
</details>

## Valores predeterminados que puede dejar quietos {#defaults-you-can-leave-alone}

Cada partida de un plan necesita su μ y su σ, y cada par de partidas necesita una correlación. Un plan con una docena de partidas necesita decenas de números antes de poder decir algo. Tutilis se esfuerza para que usted no tenga que escribir nunca ninguno.

El sistema los suministra todos a partir de fuentes publicadas, para cada clase de partida: cada clase de activo, cada clase de ingreso y de gasto, y las correlaciones entre ellos. Por eso el plan de Jordan funciona en el momento en que se abre, y por eso el plan [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) de esta lección no declara ninguna tasa propia. Para casi todos los hogares, el tiempo justo que hay que dedicar a estos números es ninguno.

Para quien planifica y sí tiene una opinión meditada, un **Usuario avanzado** puede sustituir cada uno de ellos, tanto el promedio como la volatilidad. La lección *Tasas de crecimiento: las del sistema y las suyas* lo recorre en un hogar y muestra qué le hace al desenlace una sola tasa cambiada.

De un modo u otro, las pocas tasas que son hechos de su propio hogar siguen siendo suyas de declarar, como lo rápido que ha venido subiendo su paga.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Solo en la aplicación de escritorio</summary>
<div class="lesson-desktop-only-body">

Una visión del mercado que quiera que comparta cada plan pertenece a un **conjunto de supuestos** y no a un solo plan. En la página de inicio de la aplicación de escritorio, junto a **Dossiers**, la página **Conjuntos de supuestos** guarda sus conjuntos con la biblioteca. **Nuevo conjunto** arranca uno a partir de un catálogo base, y usted cambia solo las categorías con las que no está de acuerdo, como un rendimiento esperado más bajo para las acciones de Estados Unidos. **Usar para mis planes** lo convierte en el predeterminado de la biblioteca, de modo que cada plan de la biblioteca corre con él, y una edición posterior del conjunto los alcanza a todos a la vez. **Dejar de usar** devuelve cada plan a las cifras del sistema.

</div>
</details>

## Leer los mil futuros {#reading-the-thousand-futures}

El **Resumen de simulación** reduce los mil futuros a unos pocos números sobre dónde terminan. Las **Previsiones clave** nombran los puntos a lo largo de la línea de los mil patrimonios netos finales, ordenados de peor a mejor, y dan el ID de previsión del futuro en cada punto.

[[jump:key-forecasts]]

[[img:mc-key-forecasts-jordan]]

*Previsiones clave para [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan): el peor futuro, los cuartiles, la trayectoria de la estrella polar (✦), la media y el mejor futuro.*

Un [[term:percentile]] es una posición a lo largo de esa línea ordenada. El percentil 10, P10, es el desenlace por debajo del cual cae solo un futuro de cada diez. El percentil 50 es la [[term:median]], el futuro del medio. El percentil 90 es el desenlace que solo uno de cada diez supera. Para Jordan, el desenlace mediano es de unos **3,21 millones de dólares**, P10 es de unos **580.000 $** y P90 es de unos **13,0 millones de dólares**.

La trayectoria de la estrella polar, marcada con ✦, termina en unos **3,10 millones de dólares**, la 492.ª de las mil. Se sitúa justo por debajo de la mediana, como predice la matemática de la sección anterior. La **media** es de unos **5,18 millones de dólares**, muy por encima de la mediana, y la sección siguiente explica por qué.

El **Resultado** informa de Baja (P10) y Alza (P90) junto a la mediana, y la previsión usa ese par en todas partes por una razón. El riesgo vive en la cola. Un desenlace malo de uno entre diez es aquello para lo que un plan cuidadoso debe estar preparado, y un par más estrecho como P30 y P70 describiría el centro cómodo sin decir nada de los futuros que duelen. P10 puede salir por debajo de cero en un plan que gasta con fuerza, porque en esos futuros el plan sigue gastando después de que el dinero se acaba y pide prestado para cubrir el faltante. Ese número negativo es información real. Es el tamaño del agujero en un futuro malo de uno entre diez.

La [[term:success-rate]] cuenta los futuros que terminan con patrimonio neto por encima de cero. El plan de Jordan tiene éxito en el **96,4 %** de ellos. Es un recuento de futuros simulados, y la última sección dice qué significa y qué no significa para una vida real.

Cada punto de Previsiones clave es un futuro entero que puede abrir. Haga clic en una fila y cada vista se enfoca en esa previsión: los gráficos de balance y de flujos de caja se vuelven a dibujar para ese futuro, años malos incluidos. La entrada de previsión en la franja de arriba del previsor acepta cualquier ID de previsión del mismo modo, y volver a ponerlo en 0 regresa a la trayectoria de la estrella polar.

[[img:mc-nw-distribution-jordan]]

*La Distribución del patrimonio neto para [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan): los mil patrimonios netos finales a la vez. La banda sombreada a la izquierda está por debajo de cero, y el eje se vuelve logarítmico pasados unos 31 millones de dólares para que la cola más larga todavía quepa.*

## Por qué el resultado se inclina a la derecha {#why-the-outcome-leans-right}

Los mil desenlaces de Jordan son asimétricos. La mitad termina entre unos 1,42 millones de dólares y 6,73 millones de dólares, unos pocos se estiran hasta decenas de millones, y el lado izquierdo se detiene mucho antes. La media se sitúa muy a la derecha de la mediana porque esos pocos desenlaces enormes la arrastran hasta allí. Esa forma no es una rareza de este plan. Es lo que la capitalización le hace al azar, y el plan [Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) lo muestra sin nada más por medio.

Empiece por un año. El rendimiento del fondo para el año se sortea de una curva de campana, de modo que su valor después de un año también es una curva de campana. Los mil desenlaces se extienden casi por igual a ambos lados de unos 107.000 $. La mediana es 107.500 $, la media es 107.400 $, y la mitad central va de 96.500 $ a 118.100 $, unos 11.000 $ a cada lado. **Después de un año, la distribución es normal**, porque el propio rendimiento se sortea de una distribución normal y todavía no se ha capitalizado nada.

Ahora deje correr el mismo fondo durante cuarenta años. Cada año multiplica el saldo por un factor aleatorio, y cuarenta factores aleatorios multiplicados entre sí no hacen una curva de campana. Un futuro con unos pocos años buenos más de lo habitual no termina un poco más arriba. Termina varias veces más arriba, porque cada año bueno capitaliza sobre los anteriores. Una racha mala no puede hacer la imagen especular, porque el saldo puede caer hacia cero pero nunca por debajo. La mediana después de cuarenta años es de unos 1,18 millones de dólares y la media de unos 1,94 millones de dólares. La mitad central va de unos 600.000 $ a 2,34 millones de dólares, que son 580.000 $ por debajo de la mediana y 1,17 millones de dólares por encima, y el mejor futuro llega a unos 29,5 millones de dólares.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-one-year]]

*[Un fondo de acciones](#canvas-dossier:monte_carlo_one_fund) después de un año: una campana simétrica alrededor de 107.000 $.*

</div>
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-forty-years]]

*El mismo fondo después de cuarenta años: un grupo alto a la izquierda y una cola larga hacia la derecha. El eje se vuelve logarítmico pasados unos 7 millones de dólares para que la cola quepa siquiera.*

</div>
</div>

Esa forma inclinada a la derecha tiene un nombre, la distribución [[term:lognormal]]. Significa que el *logaritmo* del desenlace sigue una curva de campana, aunque el propio desenlace no la siga. Multiplicar factores suma sus logaritmos, y sumar muchos trozos aleatorios independientes produce una curva de campana sea cual sea el aspecto de los trozos. Ese es el teorema central del límite, uno de los hechos más fiables de la probabilidad, y es la razón de que el patrimonio a largo horizonte salga lognormal en casi todos los modelos que capitalizan rendimientos aleatorios.

La media, la mediana y la trayectoria de la estrella polar cuentan tres historias distintas en una distribución lognormal. La media es arrastrada hacia arriba por un puñado de desenlaces enormes que casi nadie verá. La mediana es el futuro típico, y la trayectoria de la estrella polar se sitúa justo por debajo. Por eso la previsión encabeza con la mediana y la trayectoria de la estrella polar, y por eso la media se muestra pero nunca se usa como titular.

El plan de Jordan no es puramente lognormal, porque Jordan gasta. Los retiros toman una cantidad fija de dinero cada año haga lo que haga el mercado, así que muerden más fuerte en los futuros que ya van mal. Eso estira el lado izquierdo de la distribución, y en los peores futuros lleva el patrimonio neto por debajo de cero, algo que un fondo de comprar y mantener no puede hacer nunca. El lado derecho sigue estirándose del modo en que lo produce la capitalización.

<details class="lesson-math">
<summary class="lesson-math-label">Para los amantes de las matemáticas — el teorema central del límite en acción</summary>
<div class="lesson-math-body">

Tome logaritmos del producto del patrimonio:

\[ \ln W_n = \ln W_0 + \sum_{t=1}^{n} \ln(1 + r_t). \]

Los términos \(\ln(1+r_t)\) son i.i.d. con media \(g \approx \mu - \sigma^2/2\) y desviación típica \(s \approx \sigma/(1+\mu)\). Por el teorema central del límite, su suma es aproximadamente normal para un \(n\) grande, con media \(n g\) y desviación típica \(s\sqrt{n}\). Así que \(W_n\) es aproximadamente lognormal:

\[ \text{median}(W_n) \approx W_0\, e^{n g}, \qquad \mathbb{E}[W_n] = W_0 (1+\mu)^n. \]

Para el fondo de acciones, \(g = 6.12\%\) y \(n = 40\) dan una mediana de unos 1,16 millones de dólares, frente a 1,18 millones de dólares en la simulación, y \((1.0756)^{40}\) da una media de unos 1,85 millones de dólares, frente a 1,94 millones de dólares. La dispersión de \(\ln W_n\) crece como \(\sqrt{n}\), así que la inclinación a la derecha se hace más fuerte cuanto más largo es el horizonte.

En \(n = 1\) no hay nada que sumar. \(W_1 = W_0 (1 + r_1)\) es una función lineal de un solo sorteo normal, así que ella misma es normal, aparte del suelo en −100 % que un sorteo de un año casi nunca alcanza. La forma lognormal es por entero un producto de la capitalización a lo largo de muchos años.

</div>
</details>

## Cuántos futuros ejecutar {#how-many-futures-to-run}

La previsión ejecuta **1.000** futuros de manera predeterminada, una elección habitual en el software de planificación. Mil bastan para dejar la mediana y los cuartiles en un lugar estable y para medir una tasa de éxito con un margen de uno o dos puntos.

Puede pedir más. **Simulaciones** está en la franja de arriba del previsor, junto a la entrada de previsión y a **Año**, y acepta cualquier recuento de 1.000 a 10.000 en pasos de mil. El nuevo recuento surte efecto cuando pulsa **Re-simular**.

[[img:mc-simulations-entry-7000]]

*La franja de arriba del previsor con Simulaciones en 7.000. La entrada está sombreada casi hasta el rojo, junto al botón Re-simular que la aplica.*

A medida que el recuento sube, la entrada se sombrea desde su color habitual hacia el rojo. El sombreado es una cautela deliberada, por dos razones.

La primera razón es el tiempo. Diez mil futuros tardan unas diez veces más que mil, cada vez que el plan se vuelve a simular.

La segunda razón importa más. Una ejecución mayor no es una respuesta mejor. El centro de la distribución apenas se mueve, mientras los extremos siguen creciendo. Ejecute el plan de Jordan con diez mil futuros y la mediana pasa de 3,21 millones de dólares a 3,20 millones de dólares, y la tasa de éxito del 96,4 % al 96,2 %. El mejor futuro, en cambio, pasa de unos 40 millones de dólares a unos 93 millones de dólares. Diez veces más futuros significan diez veces más ocasiones de sortear una racha de años asombrosa, y la más extrema de ellas cae más afuera.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan]]

*[Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) con 1.000 futuros.*

</div>
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan-10000]]

*El mismo plan con 10.000 futuros. Los cuartiles y la mediana apenas se mueven, y el máximo hace más que duplicarse.*

</div>
</div>

La matemática detrás de esos futuros extremos es sólida. Un futuro en el que las acciones rinden bastante por encima del promedio durante décadas es posible bajo los supuestos del plan, y entre diez mil futuros aparecen unos pocos. Esos números, sin embargo, son difíciles de razonar. Un plan que informa de un mejor caso de 90 millones de dólares para un hogar con 1,34 millones de dólares no se equivoca, pero invita a prestar atención a un futuro alrededor del cual el plan no tiene por qué construirse. Los números que merecen la atención de quien planifica son la mediana, la baja y la tasa de éxito, y mil futuros ya los dejan fijados.

<details class="lesson-math">
<summary class="lesson-math-label">Para los amantes de las matemáticas — qué compran más futuros</summary>
<div class="lesson-math-body">

Una tasa de éxito medida a partir de \(N\) futuros tiene un error estándar de \(\sqrt{p(1-p)/N}\). Para \(p = 0.964\) y \(N = 1{,}000\) eso es unos 0,59 puntos, de modo que la tasa verdadera bajo los supuestos del modelo queda dentro de unos ±1,2 puntos de la informada el 95 % de las veces. Diez mil futuros reducen eso a unos ±0,4 puntos. La precisión solo mejora con \(\sqrt{N}\), de modo que cada dígito extra de precisión cuesta cien veces las ejecuciones.

Los extremos se comportan de otra manera. Para una distribución normal, el mayor de \(N\) sorteos se sitúa unos \(\sqrt{2 \ln N}\) desviaciones típicas por encima de la media, así que sigue arrastrándose hacia afuera a medida que \(N\) crece, sin límite. En una distribución lognormal ese arrastre ocurre en el logaritmo, de modo que cada paso hacia afuera multiplica el máximo por un factor grande. En el plan de un solo fondo a lo largo de cuarenta años, el logaritmo del patrimonio tiene una desviación típica de unos 0,97. Pasar del mayor de mil al mayor de diez mil añade unas 0,57 desviaciones típicas en el logaritmo, lo que de media multiplica el máximo por unos 1,7. Una ejecución cualquiera varía mucho alrededor de eso, porque un máximo es un solo sorteo. La mediana no se mueve en absoluto, porque nunca estuvo en la cola.

</div>
</details>

## Qué no puede ver Monte Carlo {#what-monte-carlo-cannot-see}

Una previsión de Monte Carlo es una manera cuidadosa de razonar sobre el azar. Sigue siendo un modelo, y sus respuestas llevan los límites de lo que se puso en él.

**Solo es tan buena como sus supuestos.** Cada futuro se sortea a partir de los μ, las σ y las correlaciones con los que corre el plan. Si el rendimiento esperado de las acciones durante los próximos cuarenta años es más bajo que la cifra de largo plazo, cada uno de los mil futuros es demasiado optimista, y ejecutar más no ayuda. Las cifras del sistema vienen de fuentes publicadas, pero siguen siendo estimaciones de un futuro que nadie ha visto.

**Los años no tienen memoria.** Como los sorteos son independientes, la previsión no tiene impulso, ni reversión a la media, ni regímenes. En los mercados reales, las rachas largas de valoraciones altas han tendido a ir seguidas de rendimientos más débiles, y los periodos calmos y turbulentos tienden a venir en racimos. En la previsión, un desplome en los primeros años de la jubilación solo ocurre cuando el azar pone uno ahí. El modificable **Riesgo de secuencia de rendimientos** en **Transformaciones** existe exactamente por esa razón. Coloca un desplome histórico en los años que usted elija, para que pueda tensionar el plan a propósito en lugar de esperar a los dados. La lección *Situar un desplome: ¿reserva de efectivo o reequilibrio?* lo usa en el mismo hogar.

[[jump:sequence-of-returns|modifiable]]

**Las colas son más delgadas que las de la historia.** Una curva de campana hace que las pérdidas muy grandes de un solo año sean más raras de lo que los mercados las han producido de verdad. Un modelo con sorteos normales trata 1931 o 2008 como sucesos casi imposibles, cuando la historia dice que solo son poco comunes.

**Las reglas están fijas para todo el horizonte.** Cada partida conserva los mismos μ, σ y correlaciones durante cuarenta años. En las crisis reales, las correlaciones entre activos de riesgo tienden a subir justo cuando más falta hace la diversificación.

**El plan sigue su guion.** En cada futuro el hogar gasta lo que el plan dice y retira del modo en que el plan dice. Las personas reales se ajustan, recortan después de un año malo y gastan más después de una buena racha, y esa flexibilidad es una de las protecciones más fuertes que tiene quien está jubilado.

**Una tasa de éxito no es una promesa.** Jordan vivirá un futuro, no mil. Una tasa de éxito del 96,4 % dice que 964 de los mil futuros simulados terminaron por encima de cero bajo estos supuestos. No dice que el futuro real tenga una probabilidad del 96,4 %, y no dice nada de lo malos que fueron los otros 36 futuros. Lea la tasa de éxito junto a la baja, que muestra hasta dónde llegan los fallos.

Nada de esto hace la previsión menos útil. La convierte en una herramienta de forma conocida. Use la trayectoria de la estrella polar para entender el plan, los mil futuros para ver su dispersión, y Transformaciones para empujar sobre los riesgos que los dados tratan como raros.

## Qué conviene llevarse {#what-to-take-away}

Una previsión se puede leer de dos maneras, y cada una responde a una pregunta que la otra no puede. La trayectoria de la estrella polar hace crecer cada partida a su tasa compuesta, μ − σ²/2, sin suerte dentro. Es el lugar donde preguntar qué hace un cambio y cuán grande es el efecto, y sus desenlaces se sitúan cerca del centro de lo que el plan puede esperar.

Los mil futuros vuelven a poner la suerte. Cada año, cada partida sortea su rendimiento de su propia curva de campana, los sorteos se mueven juntos a través del paso de Cholesky, y los años son independientes entre sí. Puestos uno al lado del otro, los futuros miden el riesgo: la baja, la dispersión y la tasa de éxito.

La capitalización hace que el patrimonio a largo horizonte se incline a la derecha. Después de un año los desenlaces forman una campana, y después de cuarenta son lognormales, con una mediana muy por debajo de la media y una cola larga de fortunas raras. Por eso la previsión encabeza con la mediana y la trayectoria de la estrella polar.

Mil futuros bastan. Más de ellos afinan un poco la tasa de éxito y empujan los extremos más afuera, sin cambiar lo que quien planifica debería concluir. Los números que hay debajo de todo esto vienen del sistema, y puede dejarlos quietos salvo que tenga una razón real para discrepar.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Obras citadas — el método y las matemáticas</summary>
<div class="lesson-bibliography-body">

- Nicholas Metropolis y S. Ulam, [*The Monte Carlo Method*](https://doi.org/10.1080/01621459.1949.10483310), Journal of the American Statistical Association 44 (247), 1949.
- Phelim P. Boyle, [*Options: A Monte Carlo Approach*](https://doi.org/10.1016/0304-405X%2877%2990005-8), Journal of Financial Economics 4 (3), 1977.
- G. E. P. Box y Mervin E. Muller, [*A Note on the Generation of Random Normal Deviates*](https://doi.org/10.1214/aoms/1177706645), Annals of Mathematical Statistics 29 (2), 1958.
- Nicholas J. Higham, [*Computing the Nearest Correlation Matrix — A Problem from Finance*](https://doi.org/10.1093/imanum/22.3.329), IMA Journal of Numerical Analysis 22 (3), 2002.

</div>
</details>
