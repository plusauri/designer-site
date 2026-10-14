<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_college_529.es.md
tutilis-locale: es translated
-->
# Ahorrar para la universidad con un 529

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.education.college_529
  outline-path: Household planning › Education funding › Saving for college with a 529
  document-id: springfield_college_529
  locale: es
  lifecycle: Initial
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported locale twin from public dossiers/springfield_college_529.es.md
  port-source: dossiers/springfield_college_529.es.md
  source-file: springfield_college_529.md
-->

<!--- α <lesson_body> -->
La universidad suele ser el **mayor flujo de salida plurianual** de un hogar después de la vivienda.
Esta lección cubre **órdenes de magnitud de costes**, cómo funciona un **plan 529** en el producto y
en las reglas reales, y algunos puntos de **titularidad** y **dinero sobrante** que cambian la
planificación más de lo que mucha gente espera.

El plan en vivo a la derecha es **Springfield College 529** — el mismo hogar de Homer y Marge que
[Meet the Springfield household](/learn/springfield_baseline), con **Bart** y **Lisa** como
dependientes, cada uno con un **529 de titularidad parental** y una plantilla de flujo **college
expense** enlazada a esa cuenta.

Si el diseño izquierda/derecha es nuevo, lea primero
[Getting around the app](/learn/getting_around).

---

## La pregunta

Cuando esta familia modela la universidad:

1. ¿Puedo ver **personas** (hijos), **cuentas 529** y plantillas de flujo **college** en el dossier?
2. ¿Puedo usar **costes anuales** aproximados (matrícula + vida) sin fingir que un precio de lista es
   destino?
3. ¿Entiendo **owner vs beneficiary**, por qué los padres suelen ser titulares del 529, y el vínculo
   con la **ayuda financiera** (FAFSA) — con cuidado, no como mito?
4. ¿El dinero previsto para un hijo puede **ayudar a un hermano** si cambian los planes?
5. ¿Qué pasa con el **529 sobrante** (incluido un camino limitado hacia un **Roth IRA**)?
6. ¿Por qué las **comisiones de inversión** de algunos planes estatales pueden cambiar cómo se
   diversifica entre dos cuentas de hijos?

---

## Qué es un 529 (en lenguaje sencillo)

Un **plan 529** es una cuenta con ventaja fiscal para el ahorro educativo (y algunos usos
relacionados bajo la ley actual). En resumen:

| Idea | Significado sencillo |
|------|----------------------|
| **Aportaciones** | Dinero después de impuestos (sin deducción federal del IRPF; algunos estados ofrecen un beneficio — **específico del estado**) |
| **Crecimiento** | Los rendimientos pueden crecer **diferidos del impuesto federal** dentro del plan |
| **Retiros cualificados** | Para gastos educativos cualificados, los rendimientos pueden salir **libres de impuesto federal** (y a menudo de impuesto estatal) |
| **Retiros no cualificados** | Los rendimientos pueden tributar y enfrentar un **impuesto adicional** — hay reglas y excepciones; consulte la IRS actual |
| **Inversiones** | Elige en el **menú del plan** (a menudo por edad o fondos estáticos) — no toda la oferta de un bróker |

Este producto modela un **tipo de cuenta 529** y puede **enlazar el gasto college** a holdings 529
para que la previsión **saque primero de esas cuentas** en los años enlazados. **No** simula cada
deducción estatal, tabla de comisiones ni fórmula de ayuda.

**Dónde mirar:** [[nav:dossier]] → Assets — **Bart College 529** y **Lisa College 529** (tipo
**College 529**). Cada blend de renta variable es una **prefinanciación parcial**, no un billete
completo.

---

## Costes aproximados

Los precios “de lista” son solo el punto de partida. Muchos estudiantes pagan menos tras becas, y el
**coste de la vida** importa tanto como la matrícula. En el producto, una plantilla college toma un
**presupuesto anual completo** (matrícula + vivienda/comida o equivalente de commuter), un **año de
inicio** (a menudo cerca de los 18 del estudiante vinculado), **años de asistencia** y una hipótesis
de **crecimiento de costes** que compone la serie. El **precio neto tras ayuda** puede quedar muy por
debajo del de lista de la misma escuela — la tabla es orden de magnitud, no una afirmación sobre el
paquete de ayuda de un hogar.

| Trayectoria | Matrícula y tasas (orden de magnitud) | Todo incluido aprox. |
|-------------|----------------------------------------|----------------------|
| Community college | ~4 mil $ | ~15–22 mil $ |
| Universidad estatal (in-state) | ~12 mil $ | ~28–35 mil $ |
| Privada (media) | ~45 mil $ | ~60–65 mil $ |
| Elite / muy selectiva | ~65–75 mil $+ | ~85–95 mil $+ |

Cifras ballpark de EE. UU. ~2025–26 (mismo orden de magnitud que la ayuda **College expense** de la
app). **No** son previsiones de lo que pagarán Bart o Lisa.

**En esta muestra:** cada plantilla college usa unos **32 mil $/año** en dólares del año del plan —
en la banda **state all-in** — durante **cuatro** años académicos. Bart empieza hacia **2032**, Lisa
hacia **2034**. Los importes crecen con la hipótesis de crecimiento de costes de la plantilla.

### Dónde aparece college en [[nav:birds-eye]]

**People & events** — abra [[nav:dossier]] → [[nav:birds-eye]] → People & events. Homer y Marge mantienen el
eje trabajo/jubilación/fallecimiento; Bart y Lisa tienen cada uno un tramo corto **college** en la
línea temporal de eventos de vida (barras moradas a mediados de los 2030).

[[img:springfield-college-529-people-events-timeline]]

*[[nav:birds-eye]] → **People & events**. Lista de personas a la izquierda (Homer, Marge, Bart, Lisa).
Eventos de vida a la derecha: trabajo en verde, jubilación en azul, marcadores de claim/fallecimiento
— y tramos cortos **college** en las filas de Bart y Lisa.*

**Assets & liabilities con Cash Flow** — ruta:
[[nav:dossier]] → [[nav:birds-eye]] → Assets & liabilities, con el modo que incluye **Cash Flow** para que las
salidas college aparezcan en el lado de pasivos junto a lifestyle, hipoteca y médico.

Pase el cursor por **Bart college** (o Lisa) para el tip de detalle: tipo, años activos, importe
anual, crecimiento, valores de primer/último año y **Funded by** el holding 529 enlazado (con
sparkline).

[[img:springfield-college-529-bart-college-hovertip]]

*[[nav:birds-eye]] → **Assets & liabilities** (Cash Flow activado). Activos: **Bart College 529** y
**Lisa College 529**. Pasivos: **Bart college** / **Lisa college**. El tip muestra la serie college
expandida y **Funded by** → el holding de renta variable 529 de ese hijo.*

Pase el cursor por el **529 en el lado Assets** para otro tip: holdings, base de coste, crecimiento
esperado y una **sparkline simple del crecimiento del fondo** en el horizonte (no la serie de gasto
college).

[[img:springfield-college-529-bart-529-asset-hovertip]]

*Hover en **Bart College 529** en Assets. Tabla de instrumentos, crecimiento esperado y sparkline de
saldo 529 — la manga de financiación, no la salida college.*

### Valor presente de la salida (mismas filas, dos agregados)

**Ruta:** [[nav:dossier]] → [[nav:birds-eye]] → Assets & liabilities (Cash Flow activado), la misma vista.

Aquí está el tablero de dos columnas: activos (incluidos ambos **College 529**) a la izquierda,
pasivos (incluidos **Bart college** / **Lisa college**) a la derecha, con cifras de valor presente.

[[img:springfield-college-529-birds-eye-assets-liabilities]]

*Dossier → [[nav:birds-eye]] → **Assets & liabilities**. El círculo rojo marca el control **copy** de la
columna **Liabilities** (dos páginas superpuestas). Copia una **tabla markdown** de la lista de
pasivos — la misma forma que la tabla de primer año abajo. (Assets tiene su propio copy.)*

[[nav:birds-eye]] puede mostrar cada pasivo nombrado como **importe del primer año** o como **suma a lo
largo de los años**. College es una serie plurianual corta: los dos agregados responden preguntas
distintas. Use **copy** cuando quiera la lista en markdown pegable (notas o chat de IA).

**Estilo primer año** (escala de un año — lo que copy suele capturar en el agregado por defecto):

| Nombre | Valor presente |
|--------|---------------:|
| ↓ Lifestyle (Work) | 138,0 mil $ |
| ↓ Lifestyle (Retire) | 92,0 mil $ |
| 🩺 Long-term care | 55,0 mil $ |
| ↓ Bart college | 32,0 mil $ |
| ↓ Lisa college | 32,0 mil $ |
| ↓ Home mortgage (interest) | 13,5 mil $ |
| 🩺 Medical (Employer / private) | 7,5 mil $ |
| 🩺 Medical (Medicare) | 5,5 mil $ |
| ↓ Home mortgage (principal) | 4,1 mil $ |

**Estilo suma de años** (agregado plurianual — cambie el modo PV si está disponible):

| Nombre | Valor presente |
|--------|---------------:|
| ↓ Lifestyle (Retire) | 3,8 M$ |
| ↓ Lifestyle (Work) | 2,3 M$ |
| 🩺 Medical (Medicare) | 341,6 mil $ |
| ↓ Home mortgage (principal) (lifetime) | 205,9 mil $ |
| ↓ Home mortgage (interest) (lifetime) | 181,6 mil $ |
| 🩺 Long-term care | 171,7 mil $ |
| 🩺 Medical (Employer / private) | 146,8 mil $ |
| ↓ Bart college | 128,0 mil $ |
| ↓ Lisa college | 128,0 mil $ |

En la vista de **primer año**, cada línea college es unos **32 mil $** — un año al presupuesto de la
plantilla. En la vista de **suma**, unos **128 mil $** — los cuatro años con crecimiento (solo orden
de magnitud). El lifestyle sigue dominando el plan largo; college es un **bloque visible a
medio horizonte**, no toda la historia.

**También útil**

1. [[nav:dossier]] → People — las mismas cuatro personas sin la línea temporal.
2. [[nav:dossier]] → Cash flows (o generators / flujos especializados) — editar **Bart college** /
   **Lisa college** (estudiante, coste anual, años, enlace de financiación).

---

## Owner, beneficiary y control

| Rol | Quién suele ser | Qué significa |
|-----|-----------------|---------------|
| **Owner** (titular) | A menudo un **padre/madre** | Controla inversiones, aportaciones y **quién es el beneficiary** |
| **Beneficiary** | El estudiante **previsto** | La persona cuya educación se pretende financiar |

*Puede* estructurar cuentas en las que el hijo esté más cerca del control (p. ej. algunos esquemas
custodiales). Eso puede **sacar a los padres del bucle** cuando el hijo pueda actuar — elección
familiar y legal, no solo fiscal.

**Por qué los padres suelen seguir como owner**

- Mantener la capacidad de **cambiar el beneficiary** entre familiares elegibles si un hijo no
  necesita todo el saldo.
- Mantener las decisiones de **inversión y retiro** en quienes financian el plan.

Los 529 de la muestra están en el balance del **hogar** con las demás cuentas de los padres — la
historia didáctica «padres owner, hijo beneficiary».

---

## Ayuda financiera: lo que dice la FAFSA

Un consejo antiguo decía «un 529 del estudiante aplastará la ayuda». El **tratamiento federal
actual de la FAFSA es más matizado:**

| Situación (estudiante dependiente en la FAFSA) | Tratamiento típico de activos FAFSA |
|------------------------------------------------|-------------------------------------|
| **529 de titularidad parental** para el estudiante | Activo de los **padres** |
| **529 del estudiante dependiente** | También activo de los **padres** (no un activo estudiantil de alta tasa) |
| **UGMA/UTMA** y muchos otros activos del **estudiante** | Siguen siendo activos del **estudiante**, valorados a una tasa **mucho mayor** |
| Estudiante **independiente** que posee un 529 | Activo del **estudiante** |

Los activos de los padres se valoran a una **tasa máxima baja** (a menudo se cita ~**5,6 %** de los
activos contables en la fórmula federal — tramos y exenciones cambian). Los activos del estudiante
se valoran de forma mucho más agresiva (a menudo se cita ~**20 %**).

**Ideas clave de esta lección**

1. Para un estudiante **dependiente**, 529 parental vs 529 del estudiante **no** es la vieja
   historia «5,6 % vs 20 %» en la FAFSA — ambas formas 529 suelen contar como activos de los
   **padres**.
2. El **control y la flexibilidad del beneficiary** siguen favoreciendo una titularidad parental
   clara para la mayoría de las familias.
3. Poner el ahorro universitario en un **bróker taxable a nombre del estudiante**, o en
   **UGMA/UTMA**, aún puede golpear más la ayuda que un 529.
4. Los formularios **institucionales** (p. ej. CSS Profile) y las reglas **estatales** pueden
   diferir — verifique con la escuela y [StudentAid.gov](https://studentaid.gov/).
5. Esta app **no calcula** el SAI ni el paquete de ayuda; trate la ayuda como una **restricción de
   planificación**, no como un gráfico en este canvas.

---

## Un plan puede servir al siguiente hijo

Las reglas del 529 permiten cambiar el **beneficiary** a otro familiar elegible (hermanos son el
caso clásico; la lista IRS «member of the family» es más amplia). Si prefinancia a **Bart** y
necesita menos escuela — o ninguna — el sobrante a menudo puede redirigirse a **Lisa** (u otro
pariente elegible) en lugar de un retiro no cualificado.

**En esta muestra:** dos cuentas 529 y dos plantillas college hacen visible la historia **por hijo**.
En la vida real, una cuenta con cambio de beneficiary, o cuentas paralelas — los menús varían según
el programa estatal.

**Dónde mirar:** abra cada plantilla college y anote la persona **Student** y el enlace de
**funding** al holding 529 de ese hijo.

### Gráfico de cash flow: hacer de college un segmento

En el [[nav:forecaster]], abra el [[nav:cf-chart]]. Por defecto muchas categorías de gasto se agrupan o van
a «remaining». Use el **filtro** (segments) del gráfico y, bajo **Expenses**, active **College**
(puede dejar **Living & general** y **Health & medical** como contexto).

[[img:springfield-college-529-cf-segments-college]]

*[[nav:cf-chart]] → **Segments** (filtro). Bajo **Expenses**, seleccione **College** para que college tenga
su propio color de barra en lugar de fundirse en remaining.*

Con **College** seleccionado, la pila de salidas muestra una franja **azul** en los años en que Bart
y/o Lisa estudian. Los años de solapamiento (ambos en la escuela) son visiblemente **más altos** en
ese segmento azul — la salida college total **casi se duplica** cuando ambos están matriculados.

[[img:springfield-college-529-cf-chart-college-segment]]

*[[nav:cf-chart]] tras activar **College**. Los segmentos azules marcan años college; la pila de mediados de
los 2030 es más alta cuando ambos hijos están en la escuela.*

**Eje de años como edad de una persona** — en [[nav:cf-chart]], abra [[nav:year-axis]] y elija **Bart Age**
(o Lisa). Salte al primer año college y confirme que Bart tiene unos **18** cuando arranca su
plantilla.

[[img:springfield-college-529-cf-year-axis-bart-age]]

*[[nav:year-axis]] — **Bart Age** para alinear la ventana college con «edad ~18», no solo etiquetas
de calendario.*

**Gráfico + tabla** — active [[nav:cf-table]] junto a [[nav:cf-chart]] (layout Custom). Elija un año en que
ambos estén en la escuela (p. ej. **2035**): la tabla desglosa **College** con las filas
**Bart college** y **Lisa college** y los importes junto al resaltado del gráfico.

[[img:springfield-college-529-cf-chart-table-2035]]

*Forecaster [[nav:cf-chart]] + [[nav:cf-table]] (año de ejemplo **2035**). **College** totaliza a ambos
hijos; las filas **Bart college** / **Lisa college** muestran el reparto.*

---

## 529 sobrante → Roth IRA (válvula limitada)

Bajo **SECURE 2.0**, el dinero 529 no usado a veces puede pasar a un **Roth IRA del beneficiary**,
no como financiación Roth ilimitada. Condiciones típicas (verifique IRS / plan antes de actuar):

| Condición | Regla práctica típica |
|-----------|------------------------|
| **Antigüedad de la cuenta** | El 529 debe haberse mantenido para el beneficiary **al menos 15 años** |
| **Sazón del dinero** | Los importes (y rendimientos) de aportaciones de los **últimos cinco años** suelen ser **inelegibles** |
| **Límite anual** | El rollover cuenta para el **límite anual de aportación al Roth IRA** del beneficiary |
| **Tope vitalicio** | **35.000 $** de por vida por beneficiary (agregado 529 → Roth IRA) |
| **De quién es el Roth** | El Roth debe ser del **beneficiary del 529** |
| **Renta del trabajo** | El beneficiary aún necesita **compensation** (y otras reglas habituales del Roth) |

Un 529 sigue siendo **sobre todo** un vehículo educativo con una válvula de jubilación **limitada**
— útil frente a «¿y si no van?», no un sustituto de las cuentas de jubilación del trabajo.

Lección de producto relacionada sobre conversiones **tradicionales** (otro mecanismo):
[Roth conversion in the window](/learn/roth_conversion_window).

---

## Comisiones y diversificar entre dos hijos

Algunos **menús 529 estatales** cobran comisiones de forma que cada **opción de inversión** en la
cuenta resulte cara (varía mucho por programa — **lea siempre el cuadro de comisiones de su plan**).

**Idea:** quiere ~**60 % crecimiento / 40 % lastre** para dos hijos pequeños y el plan cobra una
comisión notable **por opción mantenida**. Poner **60/40 en la cuenta de cada hijo** puede significar
**cuatro** opciones con comisión. Poner **sobre todo crecimiento en una** y **sobre todo lastre en
la otra** puede mantener un mix de riesgo de **hogar** similar con **menos** opciones — si el diseño
de comisiones lo recompensa.

| Enfoque | Mix del hogar | Riesgo de comisiones (si hay comisión por opción) |
|---------|---------------|-----------------------------------------------------|
| 60/40 en el 529 de Bart **y** 60/40 en el de Lisa | Misma inclinación global | Más opciones → comisiones potencialmente **más altas** |
| ~100 % crecimiento en Bart + ~100 % lastre en Lisa | Inclinación global similar | Menos opciones → comisiones potencialmente **más bajas** |

Esta muestra **no modela** comisiones de plan; ambos holdings 529 son blends de renta variable para
enseñar estructura. El punto de comisiones es una **lista de comprobación real**, no una afirmación
de gráfico.

---

## Pruebe esto (a la derecha)

### Orientar el hogar

1. [[nav:birds-eye]] → People & events — encuentre las barras cortas college de Bart y Lisa en la
   línea temporal.
2. [[nav:birds-eye]] → Assets & liabilities con **Cash Flow** — los dos activos **College 529** y
   **Bart college** / **Lisa college** en pasivos; pase el cursor por el enlace de funding y la
   sparkline.
3. Alterne el agregado de **primer año** vs **suma** (o lifetime) en la lista de pasivos si el
   control está disponible — college pasa de ~32 mil $ cada uno a ~128 mil $ cada uno mientras el
   lifestyle sigue en millones.
4. [[nav:dossier]] → Assets — abra cada **College 529**; los saldos son una prefinanciación **parcial**.

### Ver college en la ruta de cash flow

5. [[nav:path:forecaster|cf-chart]] — abra **Segments** (filtro) y active **Expenses → College** para una
   franja azul, no solo «remaining».
6. [[nav:year-axis]] → **Bart Age**; vaya al primer año college — empieza cerca de los **18**.
7. Observe los años en que **ambos** hijos están en la escuela: la franja college es más o menos
   **el doble** de alta.
8. Abra [[nav:cf-table]] junto al gráfico y elija un año de solapamiento (p. ej. **2035**) para leer a
   Bart y Lisa línea a línea.

### Coste universitario vs margen de jubilación (Transforms)

El objetivo es **sentir** el trade-off entre salidas college, patrimonio neto posterior y éxito —
dirección del movimiento, no un único importe «correcto».

9. Abra [[nav:transforms]] → Modifications. Bajo **Modifiables**, seleccione **Bart college**. El panel
   de estrategia muestra coste anual, año de inicio y años de asistencia; una pequeña **vista previa
   de gasto** muestra los cuatro ticks rojos de salida en el horizonte.

[[img:springfield-college-529-transforms-bart-expense-preview]]

*Transforms → **Bart college**. Controles de estrategia (coste anual / inicio / años) y vista previa
compacta de cuándo el gasto golpea el plan.*

10. **Baje el coste anual** y vea el **balance sheet** del lado modified **doblarse hacia arriba**
    al final del horizonte — pagar menos por la universidad deja más margen después. Llévelo a
    **0 $** (como si Bart no fuera a la universidad). Los gráficos BS Original vs Modified muestran
    la pila de la era de jubilación más alta cuando esa salida desaparece.

[[img:springfield-college-529-transforms-bart-cost-zero-bs]]

*Coste anual **0 $** para Bart. Balance sheet **Original** (izquierda) vs **Modified** (derecha) —
el camino modificado termina más alto cuando se elimina ese bloque plurianual.*

11. Use el asa inferior del [[nav:forecaster]] para **acortar** Forecast Detail (o colapsarlo), luego
    abra **Simulation Summary** y simule / re-simule si hace falta. Compare **Original** vs
    **Modified** en éxito y en las distribuciones de patrimonio neto.

[[img:springfield-college-529-sim-bart-zero-success]]

*Simulation Summary tras coste Bart college → **0 $**. En esta ejecución el camino modificado mostró
una **tasa de éxito más alta** (ejemplo: unos **71 % → 77 %** en Silver) — más de la nube queda en
la región de éxito sin ese gasto.*

12. Si la distribución muestra **«Outliers squashing the dots? Reveal»**, pruebe **Reveal** cuando
    quiera ver mejor la forma (solo visualización; no cambia el plan).

13. Pulse el control **revert** del panel de modificación
    [[img:college-transforms-revert]]
    para restaurar la estrategia original de Bart college de la muestra.

14. Pregunta inversa: ¿y si Bart necesita **cinco o seis** años académicos? Ponga **Years** en
    **6**, re-simule y compare de nuevo éxito y camino de balance sheet. Los años extra suman coste,
    **bajan** el patrimonio neto y pueden **reducir** el éxito frente a la base de cuatro años.

[[img:springfield-college-529-sim-bart-six-years]]

*Ejemplo con **seis** años de Bart college al mismo coste anual: el éxito puede ir al otro sentido
(ejemplo: unos **71 % → 67 %** en Silver) mientras el balance sheet modificado crece más despacio.*

15. Los gráficos BS lado a lado pueden parecer **similares a simple vista**. Para una lectura más
    fina, abra el balance sheet en modo **combine** (un gráfico con chips **Original** /
    **Modified**). Pase el cursor o seleccione **Original** para el patrimonio en la base de cuatro
    años; luego **Modified** para el camino de seis. Alternar chips hace más visible el impacto de
    esos dos años extra en el NW terminal que dos paneles separados.

[[img:springfield-college-529-bs-combine-original-chip]]

*BS combinado → chip **Original**. Línea de patrimonio neto (aquí azul) antes de alargar la
universidad de Bart.*

[[img:springfield-college-529-bs-combine-modified-chip]]

*El mismo gráfico combinado → chip **Modified**. La línea NW (aquí naranja) queda más baja más
adelante — esos dos años college extra se leen como menos riqueza para la jubilación.*

Trate esto como **demos de sensibilidad** en esta muestra, no como predicciones para su hogar. Sus
saldos 529, la ayuda y el camino escolar mueven las cifras; el hábito del producto es el mismo —
cambie un palanca, lea la **dirección** del BS / del éxito.

---

## Lo que esta lección no es

| No es esto | Por qué |
|------------|---------|
| Una recomendación de un 529 estatal concreto | Menús, comisiones y fiscalidad estatal difieren |
| Una estimación de paquete de ayuda | FAFSA / Profile / escuelas fuera de este canvas |
| Una promesa de que 529→Roth siempre funciona | Aplican límites de 15 años, 5 años, anuales y 35 mil $ |
| Una simulación fiscal completa de cada regla 529 | El motor se centra en tipo de cuenta, crecimiento y funding enlazado |

---

## Dónde ir después

| Tema | Lección |
|------|---------|
| El hogar sin hijos en el plan | [Meet the Springfield household](/learn/springfield_baseline) |
| Lifestyle como palanca | [Bend the plan with living spend](/learn/springfield_living_spend) |
| Política de conversión traditional → Roth | [Roth conversion in the window](/learn/roth_conversion_window) |
| Mapa de la app | [Getting around the app](/learn/getting_around) |
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
