<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_success.es.md
tutilis-locale: es translated
-->
# ¿Qué significa el éxito?

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.success_definition
  outline-path: Household planning › Success and guardrails › What does success mean?
  document-id: springfield_success
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_success.md
-->

<!--- α <lesson_body> -->
Una **tasa de éxito** solo significa tanto como la **regla que etiqueta una trayectoria como éxito**. Cambie la
regla, y la misma nube de [[term:monte-carlo|Monte Carlo]] puede verse más segura o más inquietante, sin cambiar un solo dólar de
gasto ni un solo sorteo de rendimiento.

Esta lección usa una **muestra de enseñanza magra** (Homer solo, jubilado, casa + renta variable imponible + Seguro
Social + gasto de jubilación) calibrada para que distintas definiciones de éxito **se sientan distintas**. **No** es
el Springfield Baseline completo de dos ingresos de lecciones anteriores; el nombre del reparto es continuidad,
no un hogar idéntico.

El plan activo a la derecha es **Springfield Success Definition** (`springfield_success`).

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la
sección que la responde.

1. **Cuando el Resumen de simulación dice algo como «~70 % de éxito en Plata», ¿qué regla decidió qué
   trayectorias contaban?** Véase [Oro, Plata y Bronce](#gold-silver-and-bronze).
2. **¿Dónde veo qué trayectorias tuvieron éxito y cuáles fallaron?** Véase
   [Dónde mirar](#where-to-look).
3. **¿Por qué una trayectoria que termina con patrimonio neto positivo puede contar aun así como un fallo?** Véase
   [Dónde mirar](#where-to-look).
4. **¿Dónde cambio la definición de éxito?** Véase
   [Dónde cambiar la definición](#where-to-change-the-definition).
5. **¿Qué le pasa a la tasa de éxito si subo el listón a Oro o lo aflojo a Bronce?** Véase
   [Pruebe esto](#try-this).
6. **¿Por qué debo leer siempre la medalla junto a una tasa de éxito?** Véase
   [Por qué importa en todas partes](#why-it-matters-everywhere).

</div>
</aside>

---

## Oro, Plata y Bronce {#gold-silver-and-bronze}

Las medallas del producto corresponden a tres definiciones bajo [[nav:assumptions]] → Éxito (y el mismo texto en
Transformaciones cuando sustituye los criterios de éxito):

[[jump:success-definition]]

| Medalla | Definición (etiquetas del producto) | Sentido llano |
|---------|-------------------------------------|---------------|
| [[img:std-medal-gold]] **Oro** | **Estricto** | Nunca pedir prestado y nunca tener patrimonio neto negativo. El listón más alto → por lo general **más** fallos. |
| [[img:std-medal-silver]] **Plata** | **Crisis de liquidez permitidas** (predeterminado) | Puede **pedir prestado** para mantenerse a flote si sigue solvente; un PN negativo temporal **no** está permitido. El predeterminado habitual del producto. |
| [[img:std-medal-bronze]] **Bronce** | **Patrimonio neto negativo temporal permitido** | Terminar con patrimonio neto **positivo** cuenta aunque la trayectoria haya pedido prestado o haya caído en negativo a mitad del plan. El listón más bajo → por lo general **menos** fallos. |

Así, el «% de éxito» **no** es un único número verdadero. Es «la fracción de trayectorias simuladas que pasan **esta**
puerta».

---

## Dónde mirar {#where-to-look}

El plan de la derecha ya trae todo lo que esta lección necesita, desde el hogar hasta un Resumen de simulación poblado.

### El hogar (definitorio) {#household-definitional}

1. [[nav:birds-eye]] — **Evergreen Terrace**, [[term:brokerage]] / cartera de renta variable, gasto de jubilación, [[term:ss]].
2. Este plan ya está en una [[term:drawdown]] de **estilo jubilación** (magra a propósito, para que los niveles importen).

### Fichas del Detalle de previsión {#forecast-detail-chips}

Seleccione [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]] si quiere el detalle de una trayectoria (orden de la aplicación).
En esta lección la estrella es el **Resumen de simulación**, no cada tarjeta del Detalle.

### Resumen de simulación (ya poblado) {#simulation-summary-already-populated}

| Vista previa | Vista | Papel en esta lección |
|--------------|-------|------------------------|
| [[img:sfsuccess-nw-distribution|preview]] | **Distribución del patrimonio neto** | Nube de finales; % de éxito en la medalla / el umbral activo. Puntos coloreados por cuartil; **banda roja** = PN final negativo (siempre fallo). La trayectoria clave activa está **resaltada**. |
| [[img:sfsuccess-key-forecasts|preview]] | **Previsiones clave** | Min / GMF / Max / cuartiles. Pulse una fila para enfocar esa trayectoria **en todas partes** y resaltar su marca en la distribución. Los valores de la imagen tipo pueden estar borrosos. |

**Nota:** las cifras de la instantánea **no** son objetivos. Esta muestra está afinada para la **sensibilidad a los niveles**, no
para coincidir con la banda de éxito de Springfield Baseline.

### Ampliar y Reveal (esta lección) {#close-up-and-reveal-this-lesson}

Cuando **Distribución** y **Previsiones clave** comparten el área del Resumen, o cuando [[nav:transforms]] muestra
distribuciones **original frente a modificado** tras una nueva simulación, las tarjetas pueden sentirse apretadas. Use **Ampliar**
(icono de expansión en la tarjeta) en la nube que le importe: los mismos puntos, ventana más grande, pistas al **[[term:hover]] que siguen
funcionando** (incluidas las etiquetas Éxito / Fallo / Fallo de liquidez). Bajo cada distribución, **Reveal**
abre la masa de finales si los valores extremos aplastan el gráfico; con dos distribuciones una junto a la otra, **Vincular
Reveal** (activado por defecto) mantiene ambas escalas comparables.

[[jump:reveal]]

Mapa del cromo básico (también el zoom vertical de balance y flujo de caja, y la fusión de la comparación unida):
[Controles de los gráficos — Ampliar, zoom y Reveal](/learn/getting_around#chart-chrome).

### Previsiones clave ↔ Distribución (cómo *se ve* el éxito) {#key-forecasts-distribution-how-success-looks}

Seleccionar una fila de **Previsiones clave** (**Min**, **Max**, **[[term:gmf]]**, cuartiles, …) hace esa trayectoria **activa
en todas partes**: el Detalle de previsión la sigue, y la marca correspondiente en la **Distribución del patrimonio neto**
queda **resaltada**.

[[jump:key-forecasts]]

1. Seleccione **Min**. El mínimo es siempre el punto **más a la izquierda** de la distribución (**Max** es siempre
   el **más a la derecha**). Pase el puntero por Min: la pista suele etiquetar la trayectoria como un **Fallo** (en esta
   muestra magra, Min es un final de fallo duro). Prefiera **Ampliar** la distribución si el recorrido queda
   apretado.
2. Recorra **muchos** puntos. Unos tienen éxito, otros fallan: la nube no es un solo veredicto.
3. **El color del punto sigue el cuartil** (bandas de final de débil a fuerte), no «éxito frente a fallo» por sí solo.
4. La **banda rectangular roja** (cuando está) es **patrimonio neto final negativo**. **Sea cual sea
   Oro / Plata / Bronce**, terminar en negativo es un **fallo**: cada marca dentro de esa banda falla.
5. **No toda marca a la derecha de la banda roja es un éxito.** Justo fuera del rojo puede pasar el puntero por
   trayectorias cuya pista dice **Fallo de liquidez** (o algo parecido): sin efectivo en algún año, **prestado**
   para mantenerse a flote y luego recuperado. El plan cobró ese préstamo mediante el **Costo de capital**
   (junto a la **Definición de éxito** bajo [[nav:assumptions]]). Bajo **Plata**, esas trayectorias
   recuperadas pueden contar aún como éxito; bajo **Oro (Estricto)** **no** cuentan: un estrés
   de liquidez intermedio basta para fallar aunque el PN final se vea bien.

Ese es todo el sentido del nivel: **Oro** es el listón superseguro / conservador. **No** se permite
ningún tipo de fallo intermedio. El % de éxito **baja**, pero el número que conserva debería sentirse
**más** digno de confianza, porque la puerta es más estricta.

---

## Dónde cambiar la definición {#where-to-change-the-definition}

La definición de éxito se puede cambiar en dos sitios, Supuestos y Transformaciones. Las vistas previas de abajo van a ancho completo, porque las celdas de tabla encogen demasiado el cromo para leer las tres opciones
de éxito.

### La definición de éxito {#the-definition-of-success}

[[img:std-assumptions-success]]

**Definición de éxito** duradera en el dossier. Elija **Estricto**, **Crisis de liquidez permitidas** o
**Patrimonio neto negativo temporal permitido**. El **Costo de capital** está en el mismo panel: la tasa
anual que se cobra cuando el plan tiene que pedir prestado para cubrir un faltante.

[[jump:cost-of-capital|input__assumptions__assumptions-success__control.cost-of-capital]]

### Transformaciones → Modificables → Criterios de éxito {#transforms-modifiables-success-criteria}

[[img:std-transforms-success-criteria]]

Una sustitución de tipo «qué pasaría si», sin tratar la edición del dossier como permanente. Seleccione la fila **Criterios de éxito**
en Modificables; el panel **Modificación — Criterios de éxito** muestra las mismas tres opciones.
Luego **Vuelva a simular** para original frente a modificado (Distribución del PN una junto a la otra).

El Learning Center puede limitar la edición del dossier; si Supuestos está disponible, úselo. Si no, prefiera
Transformaciones cuando la fila Criterios de éxito esté en la lista.

---

## Pruebe esto {#try-this}

1. Abra [[nav:forecaster]] → Resumen de simulación. Anote el éxito bajo la medalla **actual** (esta muestra
   empieza en **Plata** / crisis de liquidez permitidas). Solo el orden de magnitud.
2. Abra **Previsiones clave** y **Distribución** una junto a la otra (o alterne entre ellas). Si la nube
   es difícil de leer, **Amplíe** la distribución (o use **Reveal** debajo): las pistas al pasar el puntero siguen
   funcionando a tamaño completo.
3. Pulse **Min**: el mínimo es siempre el punto **más a la izquierda** de la distribución (**Max** es siempre
   el **más a la derecha**). Confirme que esa marca de la izquierda se resalta. Pase el puntero: la pista debe mostrar **Fallo**
   (final de fallo duro).
4. Recorra muchos otros puntos. Vigile las pistas de **Éxito** frente a **Fallo** frente a **Fallo de liquidez**. Note
   que **color = cuartil**, y que la **banda roja** (si la hay) son todos **fallos de PN negativo**.
5. Pase el puntero por varias marcas **justo a la derecha de la banda roja**. Encuentre al menos un **Fallo de liquidez**:
   préstamo a mitad del plan, recuperación al final. Ese es el tipo de trayectoria que Oro reclasificará.
6. Abra [[nav:assumptions]] → Éxito (o [[nav:transforms]] Criterios de éxito). Eche un vistazo al **Costo de
   capital** junto a la definición: es la tasa que se cobra cuando el plan financia un faltante.
7. Pase a **Oro (Estricto)**. **Vuelva a simular**. Espere un éxito **a la baja** (más difícil de pasar): las trayectorias
   de liquidez recuperadas ya no cuentan. En esta muestra magra la caída es dramática: las mismas trayectorias, los mismos
   dólares, **solo una puerta más estricta**. Con las distribuciones **original frente a modificado** una junto a la otra, Amplíe
   cualquiera de las nubes si hace falta; **Vincular Reveal** mantiene ambas legibles en una sola escala.

   [[img:std-success-silver-vs-gold|preview]]

   *Par ilustrativo (no un objetivo): la izquierda conserva **Plata** / crisis de liquidez permitidas; la derecha es la
   misma nube reevaluada bajo **Oro** / Estricto. Lea la **medalla** junto a la tasa.*

8. Opcional: después de Oro, vuelva a recorrer los puntos justo a la derecha del rojo: los finales siguen siendo positivos, las pistas más a menudo
   **no** son Éxito bajo Estricto.
9. Pase a **Bronce** (PN negativo temporal permitido). Vuelva a simular si hace falta. Espere un éxito
   **al alza** respecto de Oro: solo importa la puerta del PN **final**.
10. Vuelva a **Plata**. Esta es la conversación predeterminada del producto para la mayoría de las demás lecciones.
11. Opcional: con una fila clave tensionada activa, abra [[nav:cf-chart]] / [[nav:bs-chart]] para ese [[term:fid]] para **ver**
    el año en que la trayectoria pidió prestado, no solo el porcentaje.

Prefiera: «definición más estricta → tasa de éxito más baja en la misma nube» antes que fijar cualquier porcentaje.
La contrapartida es la **confianza**: Oro es más difícil de pasar y más conservador.

---

## Por qué importa en todas partes {#why-it-matters-everywhere}

Lecciones anteriores de Springfield decían «casi fallo bajo Plata» y «no trate un solo % como escritura»,
porque la definición de éxito por sí sola puede mover la tasa:

| Si cambia los criterios de éxito… | El % de éxito puede moverse mucho mientras… |
|------------------------------------|-----------------------------------------------|
| **Solo la definición** | El gasto, los rendimientos y el hogar se quedan fijos. Solo cambia cómo **clasificamos** las previsiones que se meten en problemas y aun así pueden salir (préstamo a mitad del plan, recuperación, etc.), no las trayectorias mismas. |
| **El gasto o la jubilación** (otras lecciones) | La definición se queda fija (por lo general Plata) |

Lea siempre la **medalla / la definición** junto a la tasa.

---

## Adónde ir después {#where-to-go-next}

| Tema | Lección / muestra |
|------|-------------------|
| Hogar completo de dos ingresos | [Conozca al hogar Springfield](/learn/springfield_baseline) |
| Palanca del gasto de vida | [Doblar el plan con el gasto de vida](/learn/springfield_living_spend) |
| Con hipoteca o sin ella | [Con hipoteca o sin ella](/learn/mortgage_on_vs_paid_off) |
| Solicitud del Seguro Social × longevidad | [Solicitar pronto o vivir mucho](/learn/springfield_claim_longevity) |
| Orden por cuenta fiscal frente a prorrata | [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order) |
| Mapa de la aplicación | [Orientarse en la aplicación](/learn/getting_around) |

---

*Las cantidades son ilustrativas. Lo que la lección enseña es que la regla de éxito da forma a la tasa.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
