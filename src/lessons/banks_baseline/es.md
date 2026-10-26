<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/banks_baseline.es.md
tutilis-locale: es translated
-->
# El hogar Banks

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.meet.banks
  outline-path: Household planning › Meet a household › Meet the Banks household (HNW)
  document-id: banks_baseline
  locale: es
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full Spanish of the current English lesson. Same image ids and anchors.
  port-source: dossiers/banks_baseline.md
-->

<!--- α <lesson_body> -->
Esta lección presenta una muestra de dos ingresos y **alto patrimonio** para explorar el riesgo de
concentración, las colas derechas gruesas y las continuaciones de la familia Banks (un [[term:rmd]]
forzado, Revelar). El mismo reparto, Philip y Vivian, aparece en cada una de esas lecciones. Su
historia **no** es la historia de dos ingresos de Springfield, porque la escala de la riqueza y la
forma de la cartera son distintas.

| Etiqueta | Papel |
|----------|-------|
| **hnw** | Casa + cartera de varias cestas, en el rango de los varios millones |
| **family-banks** | Hermana de [RMD tradicional forzada](/learn/banks_forced_rmd) |
| **baseline** | Plan de hogar completo (trabajo → jubilación → cuidados de larga duración) |

El plan en vivo de la derecha es **Banks Baseline** (`banks_baseline`).

---

## Qué va a aprender {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">La lección de hoy</p>
<div class="lesson-plan-body">

Al final de esta lección debería poder responder estas preguntas. Cada una enlaza con la sección
que la responde.

1. **¿Quién está en el hogar Banks, y en qué se diferencia de Springfield?** Vea
   [Quién está aquí](#who-is-here).
2. **Cuando un hogar con patrimonio tiene una posición de acciones concentrada y de alta
   volatilidad junto a cestas diversificadas, ¿cómo se dispersan los resultados?** Vea
   [La historia de la concentración](#the-concentration-story).
3. **¿Por qué el patrimonio neto final medio puede situarse muy por encima de la mediana?** Vea
   [La historia de la concentración](#the-concentration-story).
4. **¿Dónde miro primero para que Máx no se quede con la historia?** Vea
   [Dónde mirar](#where-to-look).
5. **¿Cómo leo una cola derecha que aplasta el resto de la nube de resultados?** Vea
   [Pruebe esto](#try-this).

</div>
</aside>

---

## Quién está aquí {#who-is-here}

El hogar tiene dos personas que ganan, Philip y Vivian.

| Persona | Papel (ilustrativo) |
|---------|---------------------|
| **Philip** | Ingreso principal; SS; generadores de sanidad / cuidados de larga duración |
| **Vivian** | Ingreso secundario |

**Casa:** **Bel-Air Residence** (activo real pagado; no hay una hipoteca que recorra el plan como
la que tiene Springfield).

**Trabajo → jubilación:** doble [[term:earned-income]], fases de estilo de vida, Seguro Social,
relevo de la sanidad, cuidado tardío. Las mismas *clases* de generadores que Springfield, a
niveles **absolutos más altos**.

---

## La historia de la concentración {#the-concentration-story}

La [[term:brokerage]] imponible incluye **Bel-Air Tech**, una posición única grande con
**[[term:volatility]] elevada** (la redacción usa un supuesto de crecimiento de acciones de alta
volatilidad), encima de posiciones diversificadas de acciones y bonos, tradicional, **ambas**
[[term:roth|Roth 401(k)]]<!-- term-skip: traditional, 401k — one pill per account phrase --> y Roth [[term:ira]], y efectivo.

| Qué buscar | Dónde |
|------------|-------|
| **Bel-Air Tech** | [[nav:birds-eye]] → Activos / participaciones; [[nav:bs-table]] del año seleccionado |
| Mezcla de varias cestas | Acciones y bonos imponibles, 401(k) tradicional, Roth 401(k), Roth IRA, efectivo |
| Riqueza absoluta alta | Distribución del patrimonio neto / Previsiones clave (orden de magnitud) |
| Mapa de cestas fiscales | [Resguardar el dinero](/learn/sheltering_money), el mismo plan, centrado en las reglas |

**Afirmación de enseñanza:** la concentración más la volatilidad **ensancha** la nube de
[[term:monte-carlo|Monte Carlo]]. El **patrimonio neto final medio** suele situarse **muy por
encima de la [[term:median]]** (cola derecha gruesa). **Previsiones clave → Máx** puede quedar
lejos del **GMF**. Ahí es cuando [Revelar](/learn/nw_distribution_compression) se vuelve una
herramienta de lectura, no un adorno.

La forma de abajo es ilustrativa, no un objetivo. En una ejecución de unos pocos cientos de
trayectorias, el patrimonio neto final mediano de los Banks cae en el rango de los $MM de un
dígito alto a los $MM de dos dígitos bajos, mientras el p90 y la media corren mucho más arriba, el
mismo patrón que muestra la lección Revelar.

---

## Dónde mirar {#where-to-look}

Las entradas del plan están en las vistas definitorias, y los resultados a través de las
trayectorias están en el Previsor y en el Resumen de simulación.

### Definitorio {#definitional}

1. [[nav:birds-eye]] → Personas. Philip y Vivian; supuestos de jubilación y longevidad.
2. **Activos**. **Bel-Air Residence**, cuentas de varias cestas, **Bel-Air Tech**.
3. Modo **Flujo de caja**. Fases de vida, [[term:ss]], sanidad, [[term:ltc]].

[[jump:birds-eye]]

### Proyectado {#projected}

Seleccione [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]. Abra el
**Resumen de simulación**.

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Vista previa | Vista | Papel aquí |
|--------------|-------|------------|
| [[img:banks-bs-chart|preview]] | [[nav:bs-chart]] | La escala de la riqueza a lo largo del horizonte; casa + cuentas. |
| [[img:banks-bs-table|preview]] | [[nav:bs-table]] | Encontrar **Bel-Air Tech** y los totales por cesta. |
| [[img:banks-cf-chart|preview]] | [[nav:cf-chart]] | Doble ingreso → relevo a la jubilación; cuidados de larga duración tarde. |
| [[img:banks-nw-distribution|preview]] | **Distribución del patrimonio neto** | Cola derecha; pruebe **Revelar**. |
| [[img:banks-key-forecasts|preview]] | **Previsiones clave** | Mín / GMF / Máx. Un Máx muy lejos es la señal de concentración. |
| [[img:banks-si-table|preview]] | [[nav:si-table]] | Años de retiro: ventas residuales (por defecto a prorrata). |

Prefiera **[[term:fid-gmf|FID 0 / GMF]]**. Controles de los gráficos:
[Ampliar / zoom / Revelar](/learn/getting_around#chart-chrome).

---

## Pruebe esto {#try-this}

Haga estos pasos en el plan de la derecha.

1. Oriéntese en **Bel-Air Residence** y **Bel-Air Tech** ([[nav:birds-eye]] / [[nav:bs-table]]).
2. **Resumen de simulación**. Anote el éxito bajo **Plata** (a menudo holgado en esta muestra) y la
   **dispersión** entre los resultados cercanos al GMF y **Máx**.
3. **Revele** la distribución si la masa está aplastada a la izquierda. Vea
   [Cuando la nube de resultados necesita Revelar](/learn/nw_distribution_compression).
4. Opcional: **Previsiones clave → Máx**, y luego abra [[nav:bs-chart]] / [[nav:cf-chart]] en ese
   [[term:fid]] para un año profundo del plan. Es la historia de una «trayectoria afortunada», no
   el plan que usted suscribe.
5. Contraste opcional: abra [Springfield Baseline](/learn/springfield_baseline). Los mismos
   *mecanismos*, una escala absoluta más baja y ninguna posición concentrada al estilo Bel-Air.

[[jump:key-forecasts]]

Prefiera «la concentración **ensancha las colas**» a fijar un porcentaje o una cifra en dólares.

---

## La familia Banks, a continuación {#banks-family-next}

| Tema | Lección |
|------|---------|
| Reglas de imponible / tradicional / Roth | [Resguardar el dinero](/learn/sheltering_money) |
| RMD forzada frente al orden fiscal del residual | [RMD tradicional forzada](/learn/banks_forced_rmd) |
| Leer colas derechas gruesas | [Cuando la nube de resultados necesita Revelar](/learn/nw_distribution_compression) |
| Recorrido de dos ingresos de la clase acomodada | [El hogar Springfield](/learn/springfield_baseline) |
| Estrategias residuales | [Orden por cuenta fiscal frente a prorrata](/learn/springfield_tax_order) · [Glide o a prorrata](/learn/springfield_glide) |

---

*Cantidades ilustrativas. Afirmación de enseñanza: alto patrimonio más una acción concentrada de alta volatilidad ensancha la dispersión del patrimonio neto final. Máx es una historia de cola. Use Revelar y el GMF para la masa.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
