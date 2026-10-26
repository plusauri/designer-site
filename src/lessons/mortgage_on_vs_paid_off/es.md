<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/mortgage_on_vs_paid_off.es.md
tutilis-locale: es translated
-->
# Con hipoteca o sin ella

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.housing.mortgage_vs_paid_off
  outline-path: Household planning › Housing and debt › Mortgage on vs paid off
  document-id: mortgage_on_vs_paid_off
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: Blessed
  host-hint: MultiDossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/mortgage_on_vs_paid_off.md
-->

<!--- α <lesson_body> -->
Esta lección es un **contraste**, no un hogar nuevo. Compara dos muestras calibradas:

| Muestra | Vivienda | Papel |
|---------|----------|-------|
| **Springfield Baseline** (panel derecho) | Casa **con** hipoteca (principal + interés) | El lado de la hipoteca en la historia |
| **Johnsons Baseline** | Casa **pagada** (solo capital neto; sin drenaje de principal e interés) | Contrapunto pagado |

Las dos son planes de mitad de carrera, de dos ingresos y patrimonio medio-alto, en el mismo estado fiscal, apuntados a una banda de éxito
de **casi fallo** parecida bajo los valores predeterminados del producto. Es deliberado: libre de cargas **no** es
un «usted ya ganó» automático, y una hipoteca **no** es una falta moral: los dos siguen teniendo palancas.

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la
sección que la responde.

1. **¿Dónde aparecen la casa y la hipoteca en el plan?** Véase
   [Springfield: con hipoteca](#springfield-mortgage-on).
2. **¿Por qué la parte de interés de un pago se encoge mientras crece la parte de principal?** Véase
   [Springfield: con hipoteca](#springfield-mortgage-on).
3. **¿Cómo se ve un pago de hipoteca en el balance, en los flujos de caja y en el éxito a lo largo de un
   plan largo?** Véase [Springfield: con hipoteca](#springfield-mortgage-on).
4. **¿Qué cambia para un hogar que posee una casa parecida sin ese pago?** Véase
   [Johnsons: pagada](#johnsons-paid-off).
5. **¿Por qué una casa pagada no es una victoria automática?** Véase
   [Johnsons: pagada](#johnsons-paid-off).
6. **¿El capital neto de una casa pagada es lo mismo que el dinero de las cuentas?** Véase
   [Qué conviene llevarse](#what-to-take-away).

</div>
</aside>

No estamos ordenando «pagar siempre la casa» frente a «invertir siempre». Estamos aprendiendo a **ver**
la deuda de la vivienda en el producto y a **comparar** dos bases honestas.

---

## Springfield: con hipoteca {#springfield-mortgage-on}

El panel derecho es **Springfield Baseline**.

### Dónde viven la casa y la deuda {#where-the-house-and-the-debt-live}

1. Abra [[nav:birds-eye]] (arriba de [[nav:dossier]], o el control [[nav:birds-eye]] en la barra de herramientas).
2. Elija [[nav:path:birds-eye|account]] o [[nav:path:birds-eye|holding]]: encuentre
   **Evergreen Terrace** (la vivienda; activo real / capital neto).
3. Pase a [[nav:path:birds-eye|cash-flow]]: busque **Home mortgage ([[term:principal]])** y
   **Home mortgage (interés)** entre las salidas. Esas líneas son el pulso didáctico de esta muestra.

[[jump:home-equity]]

[[jump:principal|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.debt-principal-interest]]

**[[term:hover|Pase el cursor sobre]]** cualquiera de las dos filas de la hipoteca. Las dos filas vienen del mismo préstamo, así que las dos abren la misma tarjeta. La parte de arriba de la tarjeta guarda las condiciones del préstamo: el saldo restante, la tasa, el pago mensual y la vivienda que financia. La sección **Valor del flujo**, debajo, lista el pago y sus dos mitades, cada una con su primer y su último año. El **minigráfico** de abajo dibuja las dos mitades a lo largo de la vida del préstamo.

- El **principal** empieza **más bajo** y **tiende al alza**. Los años tardíos ponen más de cada pago en amortizar el préstamo.
- El **interés** empieza **más alto** y **tiende a la baja**. Los primeros años pesan en interés, y a medida que el saldo se encoge, se debe menos interés.

[[img:mortgage-principal-hover]]

*La tarjeta Home mortgage. En el minigráfico, las dos líneas se cruzan a mitad del préstamo: el interés cae hacia cero mientras el principal sube hasta formar casi todo el pago.*

Así se ve «pagar una hipoteca» en forma de flujo de caja: se empieza bajo la **carga del
interés**, y se **termina** retirando el **principal**. El mismo compromiso mensual en espíritu; la
*mezcla* de las dos salidas se da la vuelta a lo largo de la vida del préstamo.

<details class="lesson-math">
<summary class="lesson-math-label">Para quienes gustan de las matemáticas — por qué baja el interés y sube el principal</summary>
<div class="lesson-math-body">

Un préstamo a tasa fija de \(P\) reembolsado en \(n\) meses a la tasa mensual \(r\) tiene un pago constante

\[
M = P\,\frac{r}{1-(1+r)^{-n}}
\]

El interés de cada mes es la tasa por lo que todavía se debe, \(I_k = r\,B_{k-1}\), y el resto del
pago amortiza principal. El saldo solo baja, así que el interés solo baja. La parte de principal
crece por un factor de \(1+r\) cada mes:

\[
P_k = (M - rP)\,(1+r)^{k-1}
\]

En un préstamo a 30 años al 6,5 %, el interés es cerca del 86 % del primer pago, y el principal supera
al interés por primera vez alrededor del mes 233, en el vigésimo año.

</div>
</details>

Con [[nav:cash-flow]] seleccionado, esas salidas también pueden sentarse con los **Pasivos** en la imagen de
patrimonio: una contabilidad poco convencional, útil para «¿qué tenemos que financiar?» junto a «¿qué poseemos?».

### Trayectoria proyectada — [[nav:forecaster]] {#projected-path-navforecaster}

Ya poblada cuando abre [[nav:forecaster]] (no hace falta un «ejecutar previsión» manual para empezar).

En el **Detalle de previsión**, una fila de **fichas** elige qué tarjetas se muestran. Usted controla la disposición:
encienda las fichas de las vistas que le importan y apague el resto para que el panel siga siendo legible. El orden
en el producto es [[nav:path:bs-chart|bs-table|cf-chart|cf-table]] (luego [[nav:taxes]] /
[[nav:si-chart]] / [[nav:rec]] si las activa).

**Para esta lección, seleccione solo estas fichas** (y deje Impuestos / Ventas e inversiones / Concil. apagados salvo que esté
explorando más):

- [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]

Las vistas previas de abajo coinciden con esas fichas a **tamaño de referencia completo** (solo la estructura: los números en vivo a la
derecha pueden diferir):

| Vista previa | Lugar | Qué notar |
|--------------|-------|-----------|
| [[img:mortgage-bs-chart|preview]] | [[nav:bs-chart]] | Valor de la vivienda frente a préstamos; el capital neto crece a medida que se paga el principal (**Evergreen Terrace** frente a **Home mortgage**). |
| [[img:mortgage-bs-table|preview]] | [[nav:bs-table]] | Año elegido: activos reales, cuentas y la línea del préstamo hipotecario. |
| [[img:mortgage-cf-chart|preview]] | [[nav:cf-chart]] | Pilas de salidas que incluyen el servicio de la hipoteca hasta que el préstamo se paga. |
| [[img:mortgage-cf-table|preview]] | [[nav:cf-table]] | Año elegido: líneas de principal e interés, copiables. |

El **Resumen de simulación** (debajo / al lado del Detalle, no son fichas del Detalle de previsión) ya guarda la corrida
de múltiples trayectorias:

| Vista previa | Lugar | Qué notar |
|--------------|-------|-----------|
| [[img:mortgage-nw-distribution|preview]] | **Distribución del PN** | Nube de finales + éxito en Plata. |
| [[img:mortgage-key-forecasts|preview]] | **Previsiones clave** | Min / GMF / Max y métricas relacionadas. |

Recorra **Año** por los años tempranos y tardíos del plan. Prefiera **[[term:fid-gmf|FID 0 / GMF]]** salvo que esté recorriendo
trayectorias. **Vuelva a simular** solo después de un cambio en Transformaciones, cuando quiera una corrida fresca de múltiples trayectorias.

### Marco honesto para Springfield {#honest-frame-for-springfield}

La hipoteca es un **drenaje material de flujo de caja** durante el trabajo y a menudo dentro de los años del horizonte de planificación
de la jubilación: lo bastante grande para competir con el estilo de vida y el ahorro, no una línea trivial. No es
toda la historia: los dos ingresos, la cartera y las fases de vida siguen dominando el drama.

---

## Johnsons: pagada {#johnsons-paid-off}

Quédese en esta lección. Use las fichas de **Plan activo** de arriba (o el enlace de abajo) para poner a los Johnson en el
[[term:canvas]] de la derecha: la misma prosa, otro hogar.

**[Mostrar a los Johnson (pagada) a la derecha →](#canvas-dossier:johnsons_baseline)**

[Volver a Springfield (hipoteca) →](#canvas-dossier:springfield_baseline)

En los Johnson **no** debería encontrar una serie de principal/interés de hipoteca de la vivienda. Sigue habiendo una
casa valiosa en el balance, llamada **Cul-de-Sac Home**: capital neto sin el pago.

### Por qué los Johnson no son «Springfield menos el préstamo» {#why-johnsons-are-not-springfield-minus-the-loan}

Si solo borráramos la hipoteca de Springfield y dejáramos igual cada otro número, lo pagado parecería
una victoria gratis. Estas muestras están **recalibradas** a propósito:

- Los Johnson suelen llevar un **estilo de vida más alto** (sobre todo en la jubilación) y una cartera **un poco más magra**
  para que el éxito se quede en una banda de casi fallo comparable.
- El mismo estado / la misma forma de declaración, para que el giro de la vivienda no se confunda con un mapa fiscal distinto.

Así que: compare **mecanismos** (principal e interés presentes o ausentes, efectivo que queda para invertir / gastar), no
«qué familia es más rica».

---

## Pruebe esto {#try-this}

### En Springfield (esta página) {#on-springfield-this-page}

1. [[nav:path:birds-eye|cash-flow]]: encuentre el principal y el interés de **Home mortgage**; pase el puntero por cada uno
   y compare los minigráficos (interés a la baja con el tiempo, principal al alza).
2. [[nav:path:forecaster|cf-table]]: elija un año de trabajo; note las líneas de la hipoteca bajo los gastos.
3. Avance **Año**: vea cómo evolucionan (o terminan) principal/interés respecto del estilo de vida y de los
   ingresos.
4. Eche un vistazo al **Resumen de simulación** bajo Plata: solo el orden de magnitud.

[[jump:cash-flow|output]]

### En los Johnson (la misma lección, lienzo cambiado) {#on-johnsons-same-lesson-switched-canvas}

1. Cambie con **[Johnsons (pagada)](#canvas-dossier:johnsons_baseline)** o la ficha Plan activo.
2. [[nav:path:birds-eye|cash-flow]]: confirme que **no** hay serie de principal e interés de hipoteca de la vivienda; sigue viendo el estilo de vida
   y los dos ingresos.
3. [[nav:cf-chart]] / [[nav:cf-table]]: salidas sin esa pila de hipoteca; **Cul-de-Sac Home** sigue en el balance
   como capital neto.
4. **Resumen de simulación**: el éxito sigue siendo de casi fallo, no «pagada = 100 % automático».

### Qué pasaría si, opcional (solo Springfield) {#optional-what-if-springfield-only}

Vuelva a **[Springfield (hipoteca)](#canvas-dossier:springfield_baseline)**, luego
[[nav:transforms]] → Modificables. Puede explorar el estilo de vida o el **Fin de la previsión** como en lecciones anteriores;
la observación estrella de esta lección es la **presencia de la hipoteca**, no una Transformación obligatoria. Si
cambia algo, **Vuelva a simular** para una comparación completa de múltiples trayectorias.

---

## Qué conviene llevarse {#what-to-take-away}

| Idea | En lenguaje llano |
|------|-------------------|
| **Ver principal e interés** | El modo Flujo de caja + [[nav:cf-chart]]/Tabla hacen del principal y del interés algo de primera clase. |
| **Casa ≠ efectivo libre** | El capital neto de una casa pagada es riqueza real, pero no lo mismo que cuentas líquidas. |
| **El contrapunto está calibrado** | Los Johnson no son una victoria gratis; Springfield no está condenado solo por el préstamo. |
| **Una palanca cada vez** | Lecciones anteriores: calendario de jubilación, gasto de vida. Aquí: visibilidad de la deuda de la vivienda. |

---

## Adónde ir después {#where-to-go-next}

| Tema | Lección / muestra |
|------|-------------------|
| Reparto Springfield + jubilación | [Conozca al hogar Springfield](/learn/springfield_baseline) |
| Fases del gasto de vida | [Doblar el plan con el gasto de vida](/learn/springfield_living_spend) |
| Contrapunto pagado solo | [Conozca al hogar Johnsons](/learn/johnsons_baseline) |
| Qué significa «éxito» | [¿Qué significa el éxito?](/learn/springfield_success) |
| Mapa de la aplicación | [Orientarse en la aplicación](/learn/getting_around) |

---

*Las cantidades son ilustrativas. Lo que la lección enseña es el mecanismo y el contraste.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: MultiDossier — Multi-plan switch — primary + alternate dossier ids. -->
