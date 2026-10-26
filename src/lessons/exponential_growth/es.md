<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/exponential_growth.es.md
tutilis-locale: es translated
-->
# Crecimiento compuesto

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.time_value.compound_growth
  outline-path: Foundations › Time value of money › Compound / exponential growth
  document-id: exponential_growth
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: ProsePrimary
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/exponential_growth.md
-->

<!--- α <lesson_body> -->
El crecimiento compuesto es la curva lenta que se vuelve empinada. Unos pocos puntos porcentuales
de **rendimiento medio**, sostenidos durante décadas, cambian la forma de un plan más que casi
cualquier sorpresa de un solo año.

Esta lección usa el hogar **Springfield** como escenario, para que el plan activo tenga cuentas y
años reales. Aún no necesita toda su historia. Si el mapa de la aplicación todavía es nuevo, tome
primero [Orientarse en la aplicación](/learn/getting_around) y vuelva.

El plan activo de la derecha es **Springfield Baseline** (`springfield_baseline`).

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección
que la responde.

1. **¿Qué es el crecimiento compuesto, y por qué una diferencia pequeña de tasa importa tanto a lo
   largo de décadas?** Vea [La idea en una imagen](#the-idea-in-one-picture).
2. **¿Cuánto más grande se vuelve el total final cuando subo la tasa de crecimiento?** Vea
   [La herramienta de crecimiento](#the-growth-tool-rate-time).
3. **¿Por qué dos gráficos de crecimiento pueden parecerse cuando sus totales son muy distintos?**
   Vea [La herramienta de crecimiento](#the-growth-tool-rate-time).
4. **¿Cómo aparece el mismo crecimiento en una posición real del plan?** Vea
   [Minigráficos en posiciones reales](#sparklines-on-real-holdings).
5. **¿Cómo puedo leer miles de trayectorias de mercado sin ahogarme en líneas?** Vea
   [Los finales, no el espagueti de trayectorias](#endings-not-path-spaghetti).

</div>
</aside>

---

## La idea en una imagen {#the-idea-in-one-picture}

Suponga que invierte una suma de dinero y la deja en paz. Cada año el **saldo** (no solo el
[[term:principal]] original) crece más o menos a la misma *tasa*. Eso es la
**[[term:compounding]]**: el crecimiento del año pasado pasa a formar parte de la base de este año.

En un gráfico de dólares frente a años, un crecimiento bajo parece casi lineal durante mucho
tiempo y luego se curva en silencio. Suba la tasa y la curva no se limita a ponerse «un poco más
alta al principio». En un horizonte largo, **la brecha entre las trayectorias explota**. Por eso,
en la retórica financiera, la gente llama a la capitalización la «octava maravilla»: diferencias
pequeñas de tasa, mucho tiempo, una diferencia grande en dólares.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">¿Lo sabía?</p>
<div class="lesson-did-you-know-body">

A lo largo de cuarenta años, un dólar que crece al 3 % anual se convierte en unos **\$3.26**. Al
7 %, el mismo dólar se convierte en unos **\$15**. La tasa es un poco más del doble, y el dinero al
final es más de cuatro veces mayor.

</div>
</aside>

**Honestidad:** los mercados oscilan. La curva lisa es la trayectoria **en la tendencia / típica**
(lo que la matemática de crecimiento del producto suele mostrar como una línea de media
geométrica). Las trayectorias reales zigzaguean a su alrededor. La lección aquí es la **forma de
la capitalización**, no la promesa de un viaje liso.

Las tres secciones que siguen son la misma curva en tres lugares del producto, del más limpio al
más revuelto: la [[nav:growth-calculator]] aislada, donde usted escribe la tasa; una **posición
real**, donde el producto la aporta; y el **plan entero**, donde el gasto y la suerte del mercado
también están en la imagen.

---

## La herramienta de crecimiento: tasa × tiempo {#the-growth-tool-rate-time}

En el plan activo, abra la **barra de herramientas inferior**
([[nav:fx]] · [[nav:growth]] · [[nav:annuity]] · [[nav:peek]])
y elija [[nav:growth]]. Eso abre la [[nav:growth-calculator]]: elija un importe, una tasa de
crecimiento y un rango de años, y lea el **total proyectado** en la trayectoria en la tendencia. En
**Crecer hasta el total**, el importe es una cifra *cada año*, de modo que el total es toda la
corriente capitalizada, y no un solo depósito dejado en paz.

[[jump:compounding|output__growth-calculator]]

Los números de aquí son hipótesis que usted escribe, y no las posiciones activas de Springfield, y
ese es el punto: la [[nav:growth-calculator]] es una caja de pruebas, así que aísla **tasa ×
tiempo** sin impuestos, sin gasto y sin reequilibrio de por medio, y lo único que puede mover la
respuesta es la tasa.

### Pruebe esto — el sentido de toda la lección {#try-this-the-whole-point-of-the-lesson}

1. Fije un importe anual sencillo (por ejemplo, $1,000) y un rango de años de varias décadas.
2. Ejecute con cerca de un **3 %** de crecimiento medio. Anote la cifra final.
3. Cambie solo la tasa a cerca del **6–7 %**. Mire cuánto más grande es el final: lea el
   **número**, no la curva. No es una historia lineal de «doble la tasa, doble los dólares» en
   horizontes largos; la capitalización no es lineal.
4. Pruebe, si quiere, el **0 %** (valor facial plano) frente a una tasa positiva suave, para que la
   forma de la curva sea obvia.

⚠️ **Lea el eje y antes de leer la forma.** Las dos imágenes de abajo son el mismo control a dos
tasas, y las flechas terminan más o menos a la misma altura de la página. Cada gráfico escala su
**eje y a sus propios números**. Lea las etiquetas del eje y el total proyectado en cada imagen.
Esa es la comparación. La silueta esconde la capitalización.

<div class="lesson-img-stack">

[[img:exponential-growth-calc-3pct]]

<p class="lesson-img-caption"><strong>Media del 3 %</strong> — $1,000 al año. Lea el total proyectado y dónde termina el eje y.</p>

[[img:exponential-growth-calc-7pct]]

<p class="lesson-img-caption"><strong>Media del 7 %</strong> — los mismos $1,000 al año durante los mismos años. El eje y el total son ambos mayores. Léalos en la imagen.</p>

</div>

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes gustan de las matemáticas — la fórmula de capitalización y la regla del 72</summary>
<div class="lesson-math-body">

Un capital \(P\) que crece a la tasa \(r\) durante \(n\) años se convierte en

\[
FV = P\,(1+r)^n
\]

El exponente es la razón de que la brecha explote. Con \(n = 40\), \(1.03^{40} \approx 3.26\), mientras que
\(1.07^{40} \approx 14.97\).

**La regla del 72.** El dinero se duplica cuando \((1+r)^n = 2\), así que \(n = \ln 2 / \ln(1+r)\). Para tasas pequeñas,
\(\ln(1+r) \approx r\), lo que da un tiempo de duplicación de aproximadamente \(72 / (\text{tasa en \%})\) años.
Eso es unos 24 años al 3 % y unos 10 al 7 %, de modo que a lo largo de cuarenta años el dólar al 3 % se duplica menos de
dos veces y el dólar al 7 % se duplica casi cuatro veces.

</div>
</details>

---

## Minigráficos en posiciones reales {#sparklines-on-real-holdings}

En [[nav:birds-eye]], con **Holding** seleccionado (o [[nav:dossier]] → Activos), las posiciones
pueden mostrar un **minigráfico de crecimiento**: una trayectoria [[term:median]] con un **cono de
riesgo**. La **línea** es la idea de capitalización aplicada a la [[term:mu|μ]] supuesta de ese
elemento; la **banda** muestra la dispersión que viene de [[term:sigma|σ]]. [[term:hover|Pase el cursor]]
sobre una posición — por ejemplo una posición de **renta variable de EE. UU.** como Target Date
Equity — para las hipótesis y el detalle del cono.

Aquí no está «demostrando» los rendimientos de Springfield. Está viendo que **cada línea de varios
años del plan está construida con el mismo lenguaje de crecimiento** que la
[[nav:growth-calculator]] usa a la vista. La diferencia es quién aporta la tasa: en la calculadora
usted la escribió; aquí el producto la resolvió.

[[img:exponential-growth-sparkline-cone]]

*[[nav:path:birds-eye|holding]], cursor sobre una posición de renta variable de EE. UU.: trayectoria mediana más un cono de riesgo hasta el horizonte del plan — capitalización con incertidumbre, no una sola línea.*

[[jump:compounding|output__birds-eye__birds-eye.mode.holdings__birds-eye.assets-liabilities__line.birds-eye.holding-sparkline]]

---

## Los finales, no el espagueti de trayectorias {#endings-not-path-spaghetti}

Otras herramientas de planificación suelen mostrar **todas las trayectorias de escenario** como
líneas desde el **año inicial** hasta el **año final**: un abanico completo de viajes a lo largo
del tiempo. Es una vista estándar típica: cada año de cada trayectoria, dibujado de punta a punta.
Es honesta respecto de la [[term:sequence-of-returns]], pero es fácil ahogarse en la tinta.

**Esta es la misma idea, pero mostrando solo dónde termina el patrimonio neto en ese último año.**
El producto lo llama una **distribución del patrimonio neto**: un **diagrama de distribución** (o
un **histograma**):

- En lugar de dibujar cada año de cada trayectoria, guarda **solo el valor final** de cada
  trayectoria en el **último año**.
- Esos finales forman una nube o un histograma: cuántas trayectorias aterrizan pobres, típicas o
  ricas en el horizonte.
- Los cuartiles, [[term:gmf]], el mín/máx y el porcentaje de éxito se sientan junto a esa nube,
  para que pueda leer la dispersión sin seguir miles de líneas.

Así que otras herramientas suelen mostrar **el viaje**; este gráfico de resumen muestra **dónde
terminan los viajes**. Ambos son capitalización **con** [[term:volatility]] y los flujos de
efectivo del plan. La distribución es solo el corte al final del horizonte.

Abra [[nav:forecaster]] → Resumen de simulación (después de una simulación) para verlo:

[[img:exponential-growth-nw-distribution]]

*Distribución del patrimonio neto: cada marca es aproximadamente el patrimonio neto **final** de una trayectoria en el último año (no la trayectoria completa a lo largo del tiempo). La masa roja/naranja cerca de cero frente al verde más a la derecha es la dispersión de los resultados capitalizados bajo el gasto, los mercados y las hipótesis. La capitalización también produce la trayectoria solitaria lejos a la derecha: pasado el corte, el eje está en escala logarítmica — el propio pie del gráfico dice desde dónde — para que esa trayectoria siga en la imagen sin aplastar a las demás contra el borde izquierdo.*

[[jump:terminal-wealth|output__forecaster__forecaster.simulation-summary__simulation-summary.distribution__line.distribution.final-net-worth]]

Fíjese en lo que se ha añadido en cada paso. La [[nav:growth-calculator]] tenía una tasa y un
horizonte. El minigráfico añadió una **σ**, de modo que una línea se convirtió en un cono. Este
gráfico añade el resto del plan — gasto, impuestos, la secuencia que los mercados resulta que
reparten — de modo que el cono se convierte en una nube de finales. Debajo de los tres está la
misma capitalización.

---

## Qué llevarse {#what-to-take-away}

| Idea | Significado llano |
|------|-------------------|
| **Crecimiento compuesto** | El crecimiento se aplica a una base que crece, no solo al depósito original. |
| **Tasa × tiempo** | Las brechas pequeñas de tasa en horizontes largos dominan la mayoría de las sorpresas de un solo año. |
| **Una línea o muchas** | Una sola línea lisa es la forma más fácil de ver la curva. No es un pronóstico: los mercados reales le dan un rango, y el plan le muestra ese rango. |
| **Trayectorias o distribución** | Los abanicos completos de trayectorias muestran cada año de cada escenario. Preferimos mostrarle dónde **terminan** esos escenarios, como una distribución: es la misma información, sin la tinta. |
| [[nav:assumptions]] | μ (y σ) son entradas del modelo — investigadas o escritas — no garantías. |

---

## Adónde ir después {#where-to-go-next}

| Tema | Lección |
|------|---------|
| La nube de puntos y las bandas | [Riesgo y rendimiento](/learn/risk_and_return) |
| Dos activos nerviosos, un trayecto más liso | [Diversificación y correlación](/learn/diversification_correlation) |
| El mapa de la aplicación | [Orientarse en la aplicación](/learn/getting_around) |

Tome a continuación **Riesgo y rendimiento** si la nube de la última sección sigue siendo la parte
poco familiar: es la misma dispersión, dibujada como un intercambio y no como un final.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: ProsePrimary — Prose primary — teaching left; canvas scenery or omitted. -->
