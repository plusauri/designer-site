<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/nw_distribution_compression.es.md
tutilis-locale: es translated
-->
# Cuando la nube necesita Reveal

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.reading.reveal_compression
  outline-path: Using Tutilis › Reading the plan › When the outcome cloud needs Reveal
  document-id: nw_distribution_compression
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/nw_distribution_compression.md
-->

<!--- α <lesson_body> -->
**Reveal**, bajo **Distribución del patrimonio neto**, **no** cambia el plan ni los sorteos de [[term:monte-carlo|Monte Carlo]].
Solo cambia la **escala horizontal**, para que unos pocos finales extremos no aplasten la masa de trayectorias
en un pico ilegible cerca de cero (o cerca de la izquierda del eje).

Esta lección usa la muestra **Banks Baseline**: un hogar **[[term:hnw]]** con saldos grandes y una
posición de renta variable concentrada y de **alta volatilidad**. Esa mezcla es donde **Previsiones clave → Max** (y el
extremo derecho de la nube) suele quedar **lejos** de la [[term:median]], de modo que la escala lineal duele más.

[[jump:key-forecasts]]

| Etiqueta | Por qué |
|----------|---------|
| **hnw** | Patrimonio absoluto alto; las trayectorias Max pueden llegar a decenas de millones |
| **reveal** | Control de visualización para leer la nube, no una palanca del plan |

Si los controles de los gráficos son nuevos para usted, recorra primero
[Controles de los gráficos — Ampliar, zoom y Reveal](/learn/getting_around#chart-chrome).

El plan activo a la derecha es **Banks Baseline** (`banks_baseline`).

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la
sección que la responde.

1. **¿Por qué un plan acaudalado con posiciones volátiles aplasta el gráfico de distribución en un pico?**
   Véase [Por qué el HNW necesita más Reveal](#why-hnw-needs-reveal-more).
2. **¿Por qué Reveal importa menos en un plan de patrimonio medio-alto como Springfield?** Véase
   [Por qué el HNW necesita más Reveal](#why-hnw-needs-reveal-more).
3. **¿Cómo sé, por las Previsiones clave, que la nube está aplastada?** Véase
   [Dónde mirar](#where-to-look).
4. **¿Cómo leo la nube principal sin perder los valores atípicos de la corrida?** Véase
   [Dónde mirar](#where-to-look).
5. **¿Qué deja Reveal sin cambiar en el plan y en la corrida de Monte Carlo?** Véase
   [Lo que Reveal no es](#what-reveal-is-not).
6. **¿Qué me pierdo si solo leo el gráfico lineal?** Véase [Por qué importa](#why-this-matters).

</div>
</aside>

---

## Por qué el HNW necesita más Reveal {#why-hnw-needs-reveal-more}

El patrimonio neto final en un horizonte largo es, en bruto, «patrimonio × trayectoria compuesta». Con:

- **patrimonio inicial grande** (vivienda + cartera de varias cestas en la muestra Banks), y
- **posiciones de alta volatilidad** (por ejemplo una posición concentrada al estilo «Bel-Air Tech» con [[term:volatility]] elevada),

una **pequeña fracción** de las trayectorias puede terminar **órdenes de magnitud** por encima de la mediana. En un eje
horizontal **lineal**, el gráfico tiene que abarcar de Min a Max, así que el **centro** de la distribución (donde a la mayoría
de las lecciones les importa el éxito en Plata) se aplasta en unos pocos píxeles.

Las muestras de **patrimonio medio-alto** (Springfield, por ejemplo) siguen teniendo cola derecha, pero el Max absoluto está más cerca
del grueso de la nube: Reveal ayuda menos a menudo, o con menos dramatismo.

La forma de Monte Carlo de abajo es ilustrativa, con unas 500 trayectorias bajo Plata. Lea la dirección, no las cifras:

| Muestra | PN final mediano, orden de magnitud | Cola de extrema derecha (p. ej. p90 / media frente a mediana) |
|---------|-------------------------------------|---------------------------------------------------------------|
| **Banks Baseline** (HNW) | Millones de un dígito, lado alto → millones de dos dígitos, lado bajo | Media **muy por encima** de la mediana; p90 **mucho** mayor que la mediana |
| Springfield Baseline | Millones de un dígito, lado medio | Sesgada, pero con un Max absoluto menor |
| Muestras de arranque magras | Seis cifras, bajas / medias | El ruido relativo puede ser grande; el eje absoluto suele ser más corto |

Afirmación de la lección: **Reveal es más útil cuando Max (y la cola derecha) dominan la escala**, algo habitual
en carteras HNW de alta volatilidad.

---

## Dónde mirar {#where-to-look}

1. [[nav:forecaster]] → Resumen de simulación → Distribución: nube lineal por defecto.
2. **Previsiones clave**: anote **Min**, **GMF**, **Max** (y los cuartiles). Si **Max** es enorme frente a
   **GMF** / las filas cercanas a la mediana, espere una nube aplastada.
3. Control deslizante **Reveal** bajo la distribución (el producto puede sugerir «¿Valores atípicos aplastan los puntos?»).
4. Opcional: **Amplíe** la distribución para que sea más fácil recorrer los puntos
   ([controles de los gráficos](/learn/getting_around#chart-chrome)).

[[jump:reveal]]

| Vista previa | Vista | Papel aquí |
|--------------|-------|------------|
| [[img:banks-nw-distribution|preview]] | **Distribución del PN** | Nube lineal; Reveal vive bajo el gráfico. |
| [[img:banks-key-forecasts|preview]] | **Previsiones clave** | Min / GMF / Max: un Max muy alejado es la señal de Reveal. |

Prefiera **[[term:fid-gmf|FID 0 / GMF]]** para el detalle de una trayectoria después de elegir una fila clave. Los dólares de la instantánea **no** son objetivos.

---

## Pruebe esto {#try-this}

1. Abra esta muestra Banks. El Resumen de simulación ya está poblado (o **Vuelva a simular** si está desactualizado).
2. En **Previsiones clave**, compare **Max** con **GMF** (o con la media): solo el orden de magnitud. Con HNW más
   volatilidad, Max suele ser **dramáticamente** mayor.
3. Mire la **Distribución** con Reveal **del todo a la izquierda** (lineal). Note lo poco del
   ancho del gráfico que usa el grueso de los puntos.
4. Deslice **Reveal** hacia un estilo logarítmico. La **nube principal** debería abrirse; los finales extremos siguen
   existiendo: no se borran de la corrida.
5. Opcional: abra **Springfield Baseline** (u otra muestra de patrimonio medio-alto) en una segunda pestaña. El mismo
   control, y por lo general una necesidad **menos** dramática de Reveal, porque el Max absoluto está más cerca del grupo.
6. Opcional: **Amplíe** la distribución Banks y recorra los puntos cerca de Min / GMF / justo a la derecha de la
   banda roja: las pistas al [[term:hover]] siguen funcionando bajo Reveal.

Prefiera «Reveal abre el grueso cuando Max se queda con el eje» a cualquier posición fija del control.

---

## Lo que Reveal *no* es {#what-reveal-is-not}

| No es | En cambio |
|-------|-----------|
| Cambiar la definición de éxito | [¿Qué significa el éxito?](/learn/springfield_success) |
| Cambiar la política de venta residual | [Orden por cuenta fiscal](/learn/springfield_tax_order) / [Deslizamiento](/learn/springfield_glide) |
| Quitar las trayectorias atípicas de Monte Carlo | Los atípicos siguen en la muestra; solo cambia la **vista** |
| Necesario en cada lección | Las nubes de patrimonio medio-alto a menudo se leen en lineal |

---

## Por qué importa {#why-this-matters}

| Si solo… | Puede perderse… |
|----------|-----------------|
| Mira fijamente una nube HNW lineal | Dónde aterrizan **la mayoría** de las trayectorias |
| Trata Max como «el» resultado | Max es una historia de **cola**; GMF / los cuartiles describen el grueso |
| Nunca usa Reveal | El % de éxito y la medalla se calculan igual de bien, pero la **imagen** miente por aplastamiento |

---

## Adónde ir después {#where-to-go-next}

| Tema | Lección / muestra |
|------|-------------------|
| Mapa de controles de los gráficos | [Orientarse — controles de los gráficos](/learn/getting_around#chart-chrome) |
| RMD forzada en la familia Banks | [RMD tradicional forzada](/learn/banks_forced_rmd) |
| Definición de éxito | [¿Qué significa el éxito?](/learn/springfield_success) |
| Orientación Banks HNW | [Conozca al hogar Banks (HNW)](/learn/banks_baseline) |
| Recorrido de pareja con dos ingresos y patrimonio medio-alto | [Conozca al hogar Springfield](/learn/springfield_baseline) |

---

*Cantidades ilustrativas. Afirmación de la lección: las carteras HNW de alta volatilidad a menudo necesitan Reveal porque Max y
la cola derecha dominan un eje lineal de PN. Solo visualización, no un cambio del plan.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
