<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/diversification_correlation.es.md
tutilis-locale: es translated
-->
# Correlación y diversificación

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.diversification.correlation
  outline-path: Foundations › Diversification › Correlation and diversification
  document-id: diversification_correlation
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/diversification_correlation.md
-->

<!--- α <lesson_body> -->
**La mayor parte del tiempo, las grandes clases de activos se mueven juntas, no unas contra otras.** La [[term:correlation|Correlación]] ([[term:rho|ρ]])
es ese ir juntas. La [[term:diversification|diversificación]] no es «tener más tickers»; es **tener riesgos que no
se mueven siempre como uno solo**. Cuando ρ es positivo (el caso habitual), una mezcla sigue teniendo riesgo **compartido** en la
cuenta. Hacer como si las participaciones fueran independientes **esconde** ese riesgo.

El producto tiene un interruptor exactamente para esto. **ρ incluido** (el valor por defecto) cuenta el movimiento conjunto;
**ρ no incluido** lo deja fuera y trata las participaciones como independientes. Esta lección trata de lo que ese
interruptor hace a un plan cuyas participaciones de verdad se mueven juntas.

El plan que se ve a la derecha es una **muestra mínima de dos participaciones** (`two_correlated_assets`):

| Participación | Qué es | Valor / [[term:basis\|base de costo]] | Rentabilidad supuesta ([[term:mu\|μ]]) | Volatilidad supuesta ([[term:sigma\|σ]]) |
|---------------|--------|----------------------------------------|-----------------------------------------|-------------------------------------------|
| **US Equity** | Una cesta amplia de acciones de Estados Unidos ([[term:equity\|renta variable]]) | $500k / $300k | ~7% | ~16% |
| **US High Yield** | Bonos de [[term:high-yield\|alto rendimiento]] — deuda de empresas peor calificadas, que tiende a caer junto con las acciones | $500k / $300k | ~6% | ~10% |

Participaciones iguales → **$1M** en total. En la propia tabla de correlación del producto, US Equity × [[term:yield]] alta
de EE. UU. se sitúa en **ρ ≈ +0.69** — fuertemente **positivo**. Así que **ρ no incluido** subestima el riesgo de este plan: en
el gráfico de riesgo, la ★ de la cartera suele deslizarse hacia la **izquierda**, hacia «más tranquila».

[[jump:correlation|output__risk__risk.correlations]]

**Living Expense** es de **$40k/yr** ([[term:cola]] suave) — la clásica [[term:withdrawal-rate|tasa de retiro]] inicial de **~4%** sobre
$1M. No cambia dónde se sitúan las participaciones en el gráfico de riesgo; crea un [[term:drawdown]], de modo que
el éxito de [[term:monte-carlo|Monte Carlo]] en Plata suele quedar **por debajo de 100%** con ρ incluido — y entonces **ρ no
incluido** a menudo **sube** el éxito hacia 100%. Esa subida es lo que «esconder el riesgo» significa en el lenguaje
de la previsión.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Lo sabía?</p>
<div class="lesson-did-you-know-body">

La palabra «bono» en una participación no dice si diversifica una cartera de acciones. En la
tabla de correlación del producto, los bonos de alto rendimiento de EE. UU. se mueven con las acciones de EE. UU. en torno a **+0.69**, así que tienden
a caer cuando caen las acciones. Los [[term:treasury-security|bonos del Tesoro]] se sitúan en torno a **−0.31** y a menudo *han subido* cuando
las acciones cayeron. Esta lección empareja las acciones con el alto rendimiento porque ese es el caso común, en el que dos
participaciones tienden a caer juntas.

</div>
</aside>

---

## Qué aprenderá {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la
sección que la responde.

1. **¿Una participación etiquetada «bono» diversifica automáticamente una cartera de acciones?** Véase
   [Cómo se ven los datos](#what-the-data-looks-like).
2. **¿Cómo cambia la fuerza de la correlación lo nerviosa que es una mezcla?** Véase
   [El enigma](#the-puzzle-positive-correlation).
3. **¿Cómo se combinan las volatilidades de dos participaciones en una sola cifra de riesgo de la cartera?** Véase
   [Cómo se combinan dos volatilidades](#how-two-volatilities-combine).
4. **¿Qué le pasa a la cifra de riesgo cuando se apaga el interruptor ρ del producto?** Véase
   [Cómo se combinan dos volatilidades](#how-two-volatilities-combine).
5. **¿Tiene en cuenta la previsión que las correlaciones suben en una caída?** Véase
   [Honestidad en la crisis](#crisis-honesty).

</div>
</aside>

---

## Cómo se ven los datos {#what-the-data-looks-like}

| Tipo de par | ρ típica (a ojo) | Qué llevarse para el plan |
|-------------|------------------|---------------------------|
| **Renta variable contra renta variable** (regiones, estilos, sectores) | A menudo **fuertemente positiva** | El movimiento conjunto **suma** al riesgo de la cartera |
| **Renta variable contra alto rendimiento** | A menudo **fuertemente positiva** (~0.6–0.8 en muchas tablas) | La etiqueta «bono» no significa diversificador |
| **Renta variable contra bonos públicos de alta calidad** | Varía según la época: puede ser baja o ligeramente **negativa** | Diversificador útil *cuando* ρ es baja |
| [[term:market-crash\|periodos de estrés o de caída]] | Muchos pares **suben hacia +1** | El movimiento conjunto se intensifica cuando más duele |

**Sobre esa última fila.** Un periodo de estrés o de caída es una bajada rara y brusca en todos los mercados — 2008 y
marzo de 2020 son los recientes — que dura de meses a un par de años y llega quizá una vez por
década. No es el caso de cada día, y la fila no es una predicción. Está ahí porque esos son
los momentos *para* los que existe la diversificación, y también cuando menos hace: participaciones que
suelen diferir tienden a caer juntas. Planificarlas es cuestión de tamaño, no de inquietud — **Honestidad
en la crisis**, más abajo, dice qué hace el producto al respecto y qué no hace.

Lea la tabla en un solo sentido: la **etiqueta** de una participación no dice si diversifica. Solo ρ
lo dice, y solo frente a lo que usted ya tiene.

**De dónde sale ρ.** El producto resuelve ρ a partir de su tabla integrada de pares de *categorías* (renta
variable de EE. UU. × alto rendimiento de EE. UU., y así sucesivamente), más cualquier sustitución de la ejecución. Un dossier también puede guardar su propia
`dossier_correlation_matrix`, pero la ruta real de Riesgo / previsión todavía no lee ese campo. Esta
muestra está cableada para que las **propias categorías** lleven una ρ positiva.

---

## El enigma: ρ positivo (correlación) {#the-puzzle-positive-correlation}

ρ es la correlación del resumen: cuánto se mueven juntas dos participaciones, desde −1 (en sentido opuesto),
pasando por 0 (sin relación), hasta +1 (al unísono). Importan tres tramos:

- ρ cerca de **+1**: la mezcla es casi tan nerviosa como sus ingredientes.
- ρ **positiva pero &lt; 1** (esta muestra, y la mayoría de las carteras reales): algo de diversificación respecto
  de +1, pero las dos siguen compartiendo riesgo — deje fuera esa parte compartida y la cartera parece **demasiado
  segura**.
- ρ cerca de **0** o **negativa**: una gran calma gratis — casos especiales (por ejemplo algunas épocas de acciones / Tesoro),
  no el valor por defecto de cada día.

---

## Cómo se combinan dos volatilidades {#how-two-volatilities-combine}

No hace falta una fórmula para la idea. Piense el riesgo de la cartera como **dos montones**:

1. **El riesgo propio de cada participación**, reducido según qué parte de la cartera es. La mitad de su dinero en una
   participación con 16% de volatilidad no aporta 16 puntos de riesgo a la mezcla: aporta mucho menos, porque
   la otra mitad está haciendo otra cosa.
2. **Un montón de movimiento conjunto**: riesgo de más que solo existe porque las dos participaciones tienden a caer los
   mismos días. Es el **único sitio donde aparece ρ**. Una ρ positiva agranda el montón; una ρ de cero
   lo hace desaparecer; una ρ negativa lo convierte en una *resta*.

| ρ entre las dos | Montón de movimiento conjunto | Riesgo de la cartera |
|-----------------|-------------------------------|----------------------|
| **+1** | Tan grande como puede ser | El **promedio** ponderado de las dos volatilidades — ninguna diversificación |
| **Positiva, &lt; 1** (**típica**) | Todavía **suma** riesgo | Esta muestra; la mayoría de los pares de acciones / alto rendimiento |
| **0** | Nada | Las participaciones son independientes |
| **Negativa** | **Resta** | Una prima de diversificación, cuando se sostiene |

**Esta muestra, en números.** Mitad en US Equity (σ 16%), mitad en US High Yield (σ 10%), ρ = +0.69.
Los montones están en unidades de «[[term:volatility]] al cuadrado», por eso el último paso saca una raíz cuadrada:

<table class="lesson-table-ledger">
<thead>
<tr><th>Pieza</th><th>Importe</th></tr>
</thead>
<tbody>
<tr><td>Montones de riesgo propio, ambas participaciones</td><td>89</td></tr>
<tr><td>Montón de movimiento conjunto, ρ = +0.69</td><td><strong>+55</strong></td></tr>
<tr><td>Total → σ de la cartera</td><td>144 → √144 ≈ <strong>12.0%</strong></td></tr>
<tr><td>Las mismas participaciones, <strong>ρ no incluido</strong></td><td>89 → √89 ≈ <strong>9.4%</strong></td></tr>
</tbody>
</table>

Esos dos números son donde se sitúa la ★ en las dos imágenes de **Dónde mirar** (salvo el
redondeo de σ 16 y σ 10: las participaciones siguen las propias hipótesis de categoría del producto, que llevan
unos decimales más). Nada cambió en las participaciones; simplemente se dejó fuera un montón.

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes aman las matemáticas — la fórmula</summary>
<div class="lesson-math-body">

Los dos montones son la **varianza de cartera** de dos activos, con pesos \(w\), volatilidades \(\sigma\) y
correlación \(\rho\):

\[
\sigma_p^2 = w_1^2\,\sigma_1^2 + w_2^2\,\sigma_2^2 + 2\,w_1 w_2\,\sigma_1\sigma_2\,\rho_{12}
\]

| Término | Papel |
|---------|-------|
| \(w_1^2\sigma_1^2\), \(w_2^2\sigma_2^2\) | Los montones de riesgo propio — la varianza de cada participación, escalada por el cuadrado de su peso |
| \(2 w_1 w_2 \sigma_1 \sigma_2 \rho_{12}\) | El montón de movimiento conjunto — el único sitio donde aparece ρ |

Con \(w_1 = w_2 = 0.5\), \(\sigma_1 = 16\), \(\sigma_2 = 10\), \(\rho_{12} = 0.69\):

\[
\sigma_p^2 = 64 + 25 + 2 \cdot 0.25 \cdot 16 \cdot 10 \cdot 0.69 \approx 89 + 55 = 144
\qquad\Rightarrow\qquad \sigma_p \approx 12.0\%
\]

Poner \(\rho_{12} = 0\) (**ρ no incluido**) quita el último término: \(\sigma_p = \sqrt{89} \approx 9.4\%\). En
\(\rho_{12} = 1\) la expresión es un cuadrado perfecto, \((w_1\sigma_1 + w_2\sigma_2)^2\), así que la σ de la cartera es el
promedio ponderado, 13% — ninguna diversificación en absoluto.

</div>
</details>

### ρ incluido frente a ρ no incluido {#included-vs-not-included}

El interruptor del producto se etiqueta **ρ incluido** y arranca **encendido** (verde): el montón de movimiento conjunto se
cuenta. Apáguelo y la etiqueta dice **ρ no incluido**: la previsión trata las participaciones
como independientes y el montón se deja fuera.

| ρ verdadera | Efecto de **ρ no incluido** |
|-------------|------------------------------|
| **Positiva** (esta muestra) | Quita un montón que suma riesgo → **demasiado tranquila**; la ★ a menudo se desliza a la **izquierda** |
| **Negativa** | Quita un beneficio → parece más arriesgada; la ★ se desliza a la **derecha** |

**Regla de planificación:** una cartera cuyas participaciones se mueven juntas debe mantener **ρ incluido** para una cifra
de riesgo honesta.

---

## Honestidad en la crisis {#crisis-honesty}

La ρ real **cambia con el tiempo**, y las caídas empujan muchos pares **hacia +1**: el movimiento conjunto se intensifica
justo cuando más duele. El producto usa por defecto una tabla de categorías **estática**: una palanca
de planificación clara, no un motor completo de crisis. No se dispara solo en un pánico, así que un plan que ya
se ve ajustado con la ρ de hoy está más ajustado de lo que se lee en uno de esos momentos. Es un límite de honestidad del modelo
actual, dicho y no escondido.

<aside class="lesson-saying" data-saying="free-lunch">

La diversificación es lo más parecido a un almuerzo gratis, y se encoge justo cuando más se la quiere. En una caída, las correlaciones suben hacia 1, y el riesgo que la mezcla estaba ahorrando vuelve.

</aside>

---

## Dónde mirar {#where-to-look}

### 1. Camino del diagrama de dispersión {#1-scatter-path}

1. [[nav:risk]] → **Riesgo actual**
2. Abra **Riesgo analítico** (cerrado al entrar)
3. **Riesgo vs. retorno**
4. Encienda **Participaciones** para que las dos participaciones sean puntos separados (no solo el agregado de la cuenta)

| Participación | Dónde | Por qué |
|---------------|-------|---------|
| **US Equity** | Arriba y a la derecha | μ y σ más altos |
| **US High Yield** | A media izquierda de la renta variable | μ / σ más bajos, pero sigue moviéndose con las acciones |
| **★ Cartera** | Entre las dos | Mezcla 50/50 con **ρ ≈ +0.69** cuando ρ está incluido |

### 2. Alternar ρ (mire la ★) {#2-toggle-watch-the}

- **ρ incluido** (encendido, verde): el montón de movimiento conjunto se cuenta — la σ honesta de la cartera es **más alta**.
- **ρ no incluido** (apagado): el montón se deja fuera — la ★ / σ suelen moverse a la **izquierda** (más rosado).

Las dos figuras de abajo son el propio gráfico de la aplicación, redibujado a partir de esta muestra con el **mismo ancho**, así que la
única diferencia entre ellas es el interruptor, y el movimiento horizontal de la ★ es lo único que
se mueve. En esta muestra, hoy la estrella pasa de cerca de **12.0%** de σ a cerca de **9.4%**, con la *misma*
rentabilidad de 6.0%: a la izquierda, no hacia abajo.

<div class="lesson-img-stack">

[[img:diversification-risk-rho-included]]

<p class="lesson-img-caption"><strong>ρ incluido</strong> (verde): movimiento conjunto honesto — la ★ se sitúa en la σ de la <strong>covarianza completa</strong>, la mezcla honesta de las dos participaciones.</p>

[[img:diversification-risk-rho-not-included]]

<p class="lesson-img-caption"><strong>ρ no incluido</strong> (apagado): solo volatilidades independientes — la ★ se desliza a la <strong>izquierda</strong>. Las mismas participaciones, la misma rentabilidad, un riesgo de cartera declarado más bajo.</p>

</div>

### 3. Transformaciones → Correlaciones (ρ) + % de éxito {#3-transforms-correlations-success}

1. Abra [[nav:transforms]].
2. Encuentre el interruptor **Correlaciones (ρ)**. Arranca **encendido**, lo que significa que la ejecución *cuenta*
   el movimiento conjunto: el mismo estado **ρ incluido** que el gráfico de riesgo. Apáguelo para ejecutar el plan
   como si las participaciones fueran independientes (**ρ no incluido**), y luego **vuelva a simular**.
3. Compare el éxito del **Resumen de simulación** en [[term:medals|Plata]]: **Original** (interruptor encendido) frente a
   **Modificado** (interruptor apagado).

[[jump:correlation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.correlations]]

En esta muestra de $1M / $40k, el último punto o los dos últimos se mueven con el sorteo. Lea la cuota de éxito que imprime cada mitad:

| Estado | Qué cambia |
|--------|------------|
| **ρ incluido** (Original) | Movimiento conjunto honesto + gasto |
| **ρ no incluido** (Modificado) | Éxito más alto: la previsión subestimó el riesgo |

Original y Modificado quedan uno al lado del otro para que las nubes y las cuotas de éxito se comparen con claridad:

[[img:diversification-transforms-rho-on-vs-off]]

*La conclusión: quitar una ρ positiva hace que el plan parezca más seguro (el éxito sube, la cola izquierda es menos dura) sin cambiar un dólar de gasto.*

Nada del plan cambió entre esas dos ejecuciones: ni las participaciones, ni el gasto, ni el
horizonte. Solo si al modelo se le permitió admitir que las dos participaciones caen juntas. Por eso
esta es la última palabra de la lección y no una nota al pie: **el riesgo que esconde no se va; deja
de contarse.**

---

## Qué conviene retener {#what-to-take-away}

- Empiece por la **ρ positiva**: el valor por defecto de cada día para una cartera con más de un tipo de riesgo.
- **Renta variable de EE. UU. × alto rendimiento** es un par positivo de verdad; los bonos del Tesoro son otra historia.
- **ρ no incluido** con una ρ verdadera &gt; 0 **subestima** el riesgo.
- Las crisis pueden empujar ρ **hacia +1**.
- Camino: Riesgo → Riesgo actual → **Riesgo analítico**; **Participaciones**; alterne **ρ incluido** (etiqueta a la izquierda del interruptor).

### Palabras usadas en esta lección {#words-used-in-this-lesson}

| Palabra | En una línea |
|---------|--------------|
| **Correlación (ρ)** | Cuánto se mueven juntas dos participaciones, de −1 a +1. Lo positivo es el caso de cada día. [Más](/glossary/correlation) |
| **Diversificación** | Tener riesgos que no se mueven todos como uno solo, no simplemente tener más cosas. [Más](/glossary/diversification) |
| **Volatilidad (σ)** | Cuánto rebotan de un año a otro las rentabilidades de una participación. [Más](/glossary/volatility) |
| **Renta variable de EE. UU.** | Acciones de Estados Unidos: participaciones en la propiedad de empresas, no el «equity» de su casa. [Más](/glossary/equity) |
| **Alto rendimiento** | Bonos de empresas peor calificados: más interés, y caídas parecidas a las de las acciones en una venta masiva. [Más](/glossary/high-yield) |
| **Tesoro** | Deuda del gobierno de Estados Unidos: la participación clásica que a menudo ha subido cuando cayeron las acciones. [Más](/glossary/treasury-security) |
| **Periodo de estrés / de caída** | Una bajada rara y brusca en todos los mercados, cuando las correlaciones suben hacia +1. [Más](/glossary/market-crash) |
| **ρ incluido / ρ no incluido** | El interruptor del producto: contar el movimiento conjunto, o hacer como si las participaciones fueran independientes. |

## Adónde ir después {#where-to-go-next}

| Tema | Lección |
|------|---------|
| Primero el diagrama de riesgo y rentabilidad | [Riesgo y rentabilidad](/learn/risk_and_return) |
| Lista de palabras | [Glosario del plan financiero](/learn/financial_plan_glossary) · [Glosario de Tutilis](/learn/tutilis_glossary) |
| Recorrido del hogar completo | [Conozca al hogar Springfield](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
