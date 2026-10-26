<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/risk_and_return.es.md
tutilis-locale: es translated
-->
# Riesgo y rentabilidad

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.risk_return.tradeoff
  outline-path: Foundations › Risk and return › Risk and return tradeoff
  document-id: risk_and_return
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/risk_and_return.md
-->

<!--- α <lesson_body> -->
Una rentabilidad sin riesgo está incompleta. Un riesgo sin rentabilidad es ruido. Este producto pone **ambos** en la
**misma imagen**, para que vea el intercambio que está suponiendo antes de planificar en torno a él.

El plan que se ve a la derecha es una **muestra didáctica centrada en las participaciones** (`holdings_portfolio`): tres
posiciones distintas, con distinta rentabilidad esperada ([[term:mu|μ]]) y [[term:volatility]] ([[term:sigma|σ]]), para que la nube se
lea de un vistazo, más **una vivienda y dos flujos de caja**: lo mínimo que da a cada uno de los
tres chips de encima del gráfico algo que mostrar. Sigue sin ser un hogar completo; todo lo que hay en él está
ahí para que un control se pueda leer.

---

## Cómo leer el diagrama de dispersión {#how-to-read-the-scatter}

Camino exacto (el gráfico está dentro de un **plegable cerrado** al entrar):

1. [[nav:risk]] (sección principal)
2. **Riesgo actual** — la izquierda de las dos vistas de Riesgo
3. Abra **Riesgo analítico** — despliegue este plegable o no verá los gráficos
4. Diagrama de dispersión **Riesgo vs. retorno** dentro de Riesgo analítico

**La otra vista, Sensibilidades**, no es un desvío que se esté saltando por accidente. Riesgo actual pregunta
*qué tan accidentado es lo que tengo, ahora mismo*: una instantánea, sin tiempo dentro. Sensibilidades hace una
pregunta distinta: *qué dato único mueve más el resultado* — empuja una hipótesis cada vez
y ordena lo que el plan sintió. La misma sección, otra pregunta; todavía ninguna lección la cubre.

| Eje / marca | Significado |
|-------------|-------------|
| **Horizontal** | Riesgo — por lo general **σ** (volatilidad de la hipótesis) |
| **Vertical** | Rentabilidad — por lo general **μ** (rentabilidad media esperada / supuesta) |
| **Cada punto** | Una participación (o un elemento comparable) en su propio (σ, μ) |
| **Cartera ★** | La **mezcla** — dónde se sienta todo el libro como un solo punto |

**El rincón que todos quieren** es alta rentabilidad y bajo riesgo: **arriba y a la izquierda**. Los mercados rara vez
lo entregan gratis. La mayoría de los libros reales se sientan en un intercambio: más rentabilidad supuesta suele venir con
más rebote supuesto.

**Honestidad:** μ y σ son **hipótesis** (a menudo valores por defecto estudiados que usted puede sustituir), no promesas
y no una previsión del camino del año que viene. El gráfico enseña el **intercambio**, no una predicción.

Al entrar, las dos secciones están **plegadas**: abra **Riesgo analítico** o la nube no aparece nunca:

<div class="lesson-img-stack">

[[img:risk-return-collapsibles-closed]]

<p class="lesson-img-caption"><strong>Cerrado al entrar</strong> — los chips van a lo largo de arriba, y Riesgo analítico y Riesgo tabular siguen plegados hasta que usted los abre.</p>

[[img:risk-return-scatter]]

<p class="lesson-img-caption"><strong>Riesgo analítico, primer gráfico</strong> — Riesgo vs. retorno: cada elemento mostrado en su propio (σ, μ), con la ★ de la cartera en la mezcla de las participaciones y, con Activos reales encendido, de la vivienda.</p>

[[img:risk-return-band]]

<p class="lesson-img-caption"><strong>Riesgo analítico, segundo gráfico</strong> — Rango del portafolio en el tiempo: el camino de la [[term:median]], una línea de promedio discontinua que se queda por encima, y un cono de resultados que sigue ensanchándose cuanto más lejos mira.</p>

</div>

Dos cosas de esa segunda imagen merecen una frase, porque las dos parecen errores y ninguna
lo es. La línea de promedio discontinua se queda **por encima** del camino de en medio, y se queda ahí: no es el
gráfico contando dos veces. Unos pocos resultados muy buenos tiran de un promedio hacia arriba de un modo en que no pueden tirar
de un resultado de en medio hacia arriba, y cuanto más rebotan las participaciones, más se abre esa brecha. El camino de en medio es
aquel contra el que hay que planificar. Y el cono sigue ensanchándose para siempre en lugar de asentarse, porque
la incertidumbre de cada año se apila sobre la anterior; el plan no se vuelve más arriesgado, la pregunta simplemente
llega más adelante.

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes aman las matemáticas — por qué el promedio queda arriba y por qué el cono se ensancha</summary>
<div class="lesson-math-body">

**La brecha tiene nombre.** La [[term:compounding|capitalización compuesta]] multiplica las rentabilidades en lugar de sumarlas, así que aquello a lo que un saldo
de verdad crece a lo largo de muchos años es la [[term:geometric-mean]], y esa queda siempre en o por debajo
del promedio aritmético de las mismas rentabilidades. El faltante crece con σ: más o menos la mitad de la varianza,
de modo que un libro a σ 16% cede del orden de 1.3 puntos al año frente a su propio promedio. Esto se llama
por lo general [[term:volatility-drag|lastre de volatilidad]], y por eso el camino que el producto toma como norte es el de la
[[term:geometric-mean]] y no el de la [[term:amf|previsión con la media aritmética]].

**El cono se ensancha como √t.** Si la rentabilidad de cada año es un sorteo independiente, las varianzas se suman a lo largo
de los años mientras la rentabilidad esperada solo se acumula en línea recta, así que la dispersión crece con la *raíz
cuadrada* del horizonte, σ√t, no con el horizonte mismo. Cuatro veces más largo es el doble de ancho, no
cuatro veces. Esa es la forma que está mirando, y por eso un horizonte largo ensancha el cono
sin significar que las participaciones hayan cambiado.

Los dos números salen de la misma σ en el eje horizontal de la nube de arriba: un control, dos
imágenes.

</div>
</details>

---

## Recorrido guiado (3 a 5 minutos) {#guided-walk-35-minutes}

1. Siga el camino de arriba: [[nav:risk]] → Riesgo actual → abra Riesgo analítico → Riesgo vs. retorno.
2. **Marque el chip Participaciones** para que cada posición sea un punto aparte (el valor por defecto puede mostrar solo cuentas).
3. **Encuentre la más tranquila** (a la izquierda, σ más baja) y la **más nerviosa** (a la derecha, σ más alta). En esta
   muestra es más o menos así: posiciones más tranquilas a la izquierda y abajo; μ más alta **y** σ más alta **arriba y a la
   derecha**: más rentabilidad esperada, más riesgo.
4. **Encuentre la estrella de la cartera**: una **mezcla que tiene en cuenta los pesos**, no simplemente el nombre más salvaje.
5. Alterne **Comparar con categorías** si está disponible: los puntos de referencia por categoría ayudan a responder «¿esta
   participación es agresiva respecto de toda una clase de activo?»
6. Alterne **Tamaño por valor** si está disponible: los puntos más grandes son pesos en dólares más grandes; la estrella la
   tira lo que usted de verdad posee, no cada ticker por igual.
7. Abra **Riesgo tabular** (el otro plegable de Riesgo actual) para la tabla **Riesgo y retorno por elemento**
   — los mismos datos, ordenables. Ordene por σ y luego por μ.
8. **Recorra los tres chips**: la sección siguiente dice qué pone cada uno en el gráfico.

### Qué ponen los tres chips en el gráfico {#what-the-three-chips-put-on-the-chart}

Cinco chips se sientan encima de la nube. Dos cambian *cómo se dibujan* los puntos: **Comparar con
categorías** y **Tamaño por valor**, ambos cubiertos en el recorrido de arriba. Los otros tres cambian *qué hay
en el gráfico*: **Activos reales**, **Flujos de caja**, **Participaciones**. No son tres vistas de lo
mismo: cada uno añade un *tipo* distinto de elemento, dibujado en su propio color, y solo algunos
cuentan para la ★.

| Chip | Añade | Color |
|------|-------|-------|
| **Activos reales** | la vivienda | marrón |
| **Participaciones** | las tres posiciones por separado (en lugar de un solo punto de cuenta) | azul |
| **Flujos de caja** | salario (entrada) y gasto de vida (salida) | verde / rosa |

[[img:risk-return-all-chips]]

*Los tres chips encendidos. Todos los tipos de elemento a la vez: la vivienda marrón, las tres participaciones azules extendidas desde
el bono hasta la acción concentrada, y — bien a la izquierda, donde las hipótesis de crecimiento están tranquilas — el salario verde y
el gasto de vida rosa.*

**Activos reales mueve la ★.** La estrella es la mezcla de sus participaciones y, cuando Activos reales está encendido,
también de sus activos reales. La vivienda espera menos rentabilidad que los fondos de acciones y no sube ni
baja con ellos, así que encenderla tira de la estrella hacia abajo y a la izquierda. Encender Participaciones solo
parte el punto de la cuenta en sus posiciones. La mezcla es el mismo dinero de las dos maneras, así que la estrella
se queda donde está.

**Los flujos de caja están en el gráfico, pero nunca en la mezcla.** La μ y la σ de un flujo son su hipótesis de *crecimiento*:
qué tan rápido sube el salario y qué tan rápido se infla el gasto. Es una cantidad
distinta de la rentabilidad esperada de una acción, aunque las dos queden en estos ejes. Lea los puntos de flujo
como lo incierto que es el crecimiento de cada corriente. No dicen cuánto gana cosa alguna. Una corriente de pagos
también se gasta según llega, así que no es un saldo que se pueda promediar con sus inversiones.
Lo que Flujos de caja añade debajo del gráfico es una línea: cuántas veces sus activos y sus ingresos,
contados a valor actual, cubren su gasto previsto. Es el mismo equilibrio que pesa Bird's Eye
cuando su vista incluye los flujos de caja.

**El cono de abajo sigue el mismo chip.** Debajo de la nube, **Rango del portafolio en el tiempo** proyecta
la cartera marcada con la estrella hacia adelante como un cono que se ensancha. Con Activos reales apagado, el cono son solo sus participaciones.
Con él encendido, la vivienda se suma y se proyecta todo lo que usted posee. Son dos respuestas honestas
a dos preguntas distintas: *qué tan arriesgado es lo que invierto* y *qué tan arriesgado es lo que poseo*. El chip
elige qué pregunta responden los dos gráficos.

### Participaciones activadas {#holdings-on}

[[img:risk-return-holdings-on]]

*Chip Participaciones encendido: cada participación es su propio punto (esta muestra: lo parecido a un bono a la izquierda, renta variable amplia al centro-derecha, acción concentrada bien a la derecha). La ★ es la mezcla de la cartera.*

**Lo que este gráfico no es:** no es una lista de ventas. Un punto bien a la derecha no es un error que
corregir, y nada aquí ordena sus participaciones como quedarse o soltar. Dos razones, y cualquiera de las dos sola
basta. Primero, los ejes son **hipótesis** — una μ y una σ de largo plazo que usted, o un valor por defecto estudiado, aportó
—, así que un punto **no** se mueve porque el mercado cayó el trimestre pasado, y un gráfico que ignora los precios
recientes no puede estar diciéndole que actúe sobre ellos. Segundo, el riesgo no es un daño: una participación de σ alta hace
su trabajo si a usted le pagan el rebote y puede quedarse sentado mientras dura. Para lo que la imagen *sirve* es
para notar que posee algo cuyo riesgo supuesto no había registrado, y eso es una pregunta que conviene ir a hacer, no una respuesta.

### Tamaño por valor {#size-by-value}

[[img:risk-return-size-by-value]]

*Tamaño por valor: el peso en dólares aparece como el tamaño del punto — la ★ la tira lo que usted de verdad posee, no un peso igual en cada ticker.*

### Riesgo tabular {#tabular-risk}

[[img:risk-return-tabular]]

*Abra **Riesgo tabular** para dos tarjetas una al lado de la otra:*

1. **Riesgo y retorno por elemento** — el `N(μ, σ)` y el valor de cada participación (ordenable; el gráfico para ver,
   la tabla para ordenar).
2. **Correlaciones de activos modeladas** — el mismo formato de pares que Supuestos → Correlaciones de activos
   modeladas, filtrado a las **categorías que este plan de verdad usa**. Cuando esa lista es larga, la
   tarjeta iguala la altura de la tabla de elementos y se desplaza con un fundido.

[[jump:correlation|output__risk__risk.correlations]]

### Nómbrelo, sin profundizar: ρ incluido {#name-dont-deep-dive-included}

Junto a la lectura de la ★ de la cartera verá **[[term:rho|ρ]] incluido** (por defecto, interruptor encendido) o **ρ no
incluido** cuando se apaga. Eso trata de cómo las participaciones se mueven **juntas**, no de la σ propia de una participación.
Tratamiento completo: [Correlación y diversificación](/learn/diversification_correlation). Aquí: sepa que
existe, y que apagar ρ es lo que hacen muchas herramientas al **ignorar** por completo la [[term:correlation]] entre participaciones.

Con una ρ de renta variable **positiva** típica, ignorar esos términos cruzados **subestima** el riesgo de la cartera: σₚ
cae hacia √(Σ wᵢ²σᵢ²) y la ★ a menudo **se desliza a la izquierda**. Una ρ negativa trabaja al revés
(dejar fuera la [[term:diversification]] puede empujar el riesgo hacia arriba). La tarjeta de correlación de arriba muestra los términos cruzados que
el interruptor incluye o pone a cero.

**Por qué la ★ se sienta a la izquierda de sus ingredientes.** Este es el único trozo de aritmética que vale la pena llevarse
de esta lección. Siempre que las participaciones estén menos que perfectamente correlacionadas — cualquier ρ **por debajo de 1** — la σ de la cartera
queda **por debajo del promedio ponderado por valor** de las σ individuales, mientras que la μ de la cartera es exactamente
el promedio ponderado por valor de las μ individuales. La rentabilidad se suma; el riesgo no. Esa brecha es todo el
contenido mecánico de la [[term:diversification]], y puede verla en el gráfico: la ★ se sienta a la
**izquierda** de donde la pondría una mezcla en línea recta de los puntos, y cuanto más bajas las ρ, más a la izquierda
se sienta. Ponga cada ρ en 1 y la brecha se cierra: la ★ cae en el promedio ponderado y el almuerzo
gratis se acabó.

<aside class="lesson-saying" data-saying="free-lunch" data-saying-exception>

La ★ se sienta a la izquierda de sus ingredientes porque la rentabilidad se suma y el riesgo no. La mezcla conserva la rentabilidad media y paga por ella menos que el riesgo medio.

</aside>

Esto es aritmética de la varianza, no un consejo: dice lo que la mezcla **hace**, y no dice nada sobre
qué participaciones debería tener nadie.

---

## Cómo se ven lo «bueno» y lo «tóxico» {#what-good-and-toxic-look-like}

| Región (a ojo) | Léalo como |
|----------------|-------------|
| **Arriba a la izquierda** | Hipótesis atractivas: μ alta, σ baja. Examine si las hipótesis son honestas. |
| **Abajo a la derecha** | Hipótesis dolorosas: μ baja, σ alta. «¿Por qué tener esto con estas entradas?» |
| **A lo largo de una frontera** | Espacio normal de intercambio; la ★ de la cartera debería tener sentido dados los pesos. |

Si una sola participación concentrada se sienta bien a la derecha y es grande por valor, la estrella y las bandas
[[term:monte-carlo|Monte Carlo]] del plan sentirán esa concentración aunque el resto del libro se vea tranquilo.

---

## Qué conviene retener {#what-to-take-away}

- El riesgo y la rentabilidad pertenecen a **una** imagen para el libro que usted de verdad tiene.
- **Camino:** Riesgo → Riesgo actual → **abra Riesgo analítico**; marque **Participaciones**.
- La **estrella** es la cartera; los puntos son los ingredientes, y se sienta a la **izquierda** de su promedio
  ponderado siempre que ρ < 1. Mezclar promedia la rentabilidad y *menos* que promedia el riesgo; esa brecha
  es lo que es la diversificación.
- Las hipótesis mueven el trazado: cambie μ/σ (o las categorías de crecimiento) y la imagen se mueve. **No** es
  una lista de ventas, y no reacciona a los precios del trimestre pasado.
- La ★ es siempre la mezcla de sus **participaciones**: los chips añaden puntos, no la mueven. El **cono**
  debajo de la nube es el gráfico que sigue al chip Activos reales.
- La correlación es un **segundo** eje de honestidad; trátela después.

[[jump:sigma|output]]

## Adónde ir después {#where-to-go-next}

| Tema | Lección |
|------|---------|
| Honestidad de la correlación / de ρ | [Correlación y diversificación](/learn/diversification_correlation) |
| La capitalización sin la nube | [Crecimiento exponencial](/learn/exponential_growth) |
| Recorrido del hogar completo | [Conozca al hogar Springfield](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
