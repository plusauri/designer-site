<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/banks_baseline.fr.md
tutilis-locale: fr translated
-->
# Le foyer Banks

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.meet.banks
  outline-path: Household planning › Meet a household › Meet the Banks household (HNW)
  document-id: banks_baseline
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/banks_baseline.md
-->

<!--- α <lesson_body> -->
Cette leçon présente un exemple à deux revenus et à **patrimoine élevé** pour explorer le risque
de concentration, les queues droites épaisses et les suites de la famille Banks (un [[term:rmd]]
forcé, Révéler). La même distribution, Philip et Vivian, apparaît dans chacune de ces leçons. Leur
histoire n'est **pas** celle du foyer Springfield à deux revenus, parce que l'échelle de la
richesse et la forme du portefeuille sont différentes.

| Étiquette | Rôle |
|-----------|------|
| **hnw** | Maison + portefeuille à plusieurs compartiments, dans la zone des plusieurs millions |
| **family-banks** | Sœur de [RMD traditionnel forcé](/learn/banks_forced_rmd) |
| **baseline** | Plan de foyer complet (travail → retraite → soins de longue durée) |

Le plan en direct à droite est **Banks Baseline** (`banks_baseline`).

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Qui compose le foyer Banks, et en quoi diffère-t-il de Springfield ?** Voir
   [Qui est ici](#who-is-here).
2. **Quand un foyer aisé détient une position actions concentrée et très volatile à côté de
   compartiments diversifiés, comment les résultats se dispersent-ils ?** Voir
   [L'histoire de la concentration](#the-concentration-story).
3. **Pourquoi le patrimoine net final moyen peut-il se situer bien au-dessus de la médiane ?** Voir
   [L'histoire de la concentration](#the-concentration-story).
4. **Où regarder d'abord pour que Max ne possède pas l'histoire ?** Voir
   [Où regarder](#where-to-look).
5. **Comment lire une queue droite qui écrase le reste du nuage de résultats ?** Voir
   [À essayer](#try-this).

</div>
</aside>

---

## Qui est ici {#who-is-here}

Le foyer a deux personnes qui gagnent, Philip et Vivian.

| Personne | Rôle (illustratif) |
|----------|--------------------|
| **Philip** | Revenu principal ; SS ; générateurs de santé / soins de longue durée |
| **Vivian** | Revenu secondaire |

**Maison :** **Bel-Air Residence** (actif réel payé, pas de prêt qui court dans le plan comme
Springfield en a un).

**Travail → retraite :** double [[term:earned-income]], phases de train de vie, Social Security,
passage de la santé, soins de fin de vie. Les mêmes *sortes* de générateurs que Springfield, à des
niveaux **absolus plus élevés**.

---

## L'histoire de la concentration {#the-concentration-story}

Le [[term:brokerage]] imposable comprend **Bel-Air Tech**, une grande position unique avec une
**[[term:volatility]] élevée** (la saisie utilise une hypothèse de croissance actions à forte
volatilité), par-dessus des positions actions et obligations diversifiées, du traditionnel, **les
deux** [[term:roth|Roth 401(k)]]<!-- term-skip: traditional, 401k — one pill per account phrase --> et un Roth [[term:ira]], et des liquidités.

| À chercher | Où |
|------------|----|
| **Bel-Air Tech** | [[nav:birds-eye]] → Actifs / titres ; [[nav:bs-table]] de l'année sélectionnée |
| Répartition à plusieurs compartiments | Actions et obligations imposables, 401(k) traditionnel, Roth 401(k), Roth IRA, liquidités |
| Richesse absolue élevée | Distribution du patrimoine net / Prévisions clés (ordre de grandeur) |
| Carte des compartiments fiscaux | [Protéger son argent](/learn/sheltering_money), le même plan, centré sur les règles |

**Affirmation pédagogique :** concentration et volatilité **élargissent** le nuage
[[term:monte-carlo|Monte Carlo]]. Le **patrimoine net final moyen** se situe souvent **bien
au-dessus de la [[term:median]]** (queue droite épaisse). **Prévisions clés → Max** peut être loin
de la **GMF**. C'est alors que [Révéler](/learn/nw_distribution_compression) devient un outil de
lecture, pas une décoration.

La forme ci-dessous est illustrative, pas une cible. Sur une exécution de quelques centaines de
trajectoires, le patrimoine net final médian des Banks tombe dans la fourchette des $MM à un
chiffre élevé jusqu'aux $MM à deux chiffres bas, tandis que le p90 et la moyenne courent bien plus
haut, le même motif que montre la leçon Révéler.

---

## Où regarder {#where-to-look}

Les données du plan sont dans les vues définitionnelles, et les résultats à travers les
trajectoires sont dans le Prévisionniste et le Résumé de simulation.

### Définitionnel {#definitional}

1. [[nav:birds-eye]] → Personnes. Philip et Vivian ; hypothèses de retraite et de longévité.
2. **Actifs**. **Bel-Air Residence**, comptes à plusieurs compartiments, **Bel-Air Tech**.
3. Mode **Flux de trésorerie**. Phases de vie, [[term:ss]], santé, [[term:ltc]].

[[jump:birds-eye]]

### Projeté {#projected}

Sélectionnez [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]. Ouvrez le
**Résumé de simulation**.

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Aperçu | Vue | Rôle ici |
|--------|-----|----------|
| [[img:banks-bs-chart|preview]] | [[nav:bs-chart]] | L'échelle de la richesse sur l'horizon ; maison + comptes. |
| [[img:banks-bs-table|preview]] | [[nav:bs-table]] | Trouver **Bel-Air Tech** et les totaux par compartiment. |
| [[img:banks-cf-chart|preview]] | [[nav:cf-chart]] | Double revenu → passage à la retraite ; soins de longue durée tardifs. |
| [[img:banks-nw-distribution|preview]] | **Distribution du patrimoine net** | Queue droite ; essayez **Révéler**. |
| [[img:banks-key-forecasts|preview]] | **Prévisions clés** | Min / GMF / Max. Un Max très loin est le signal de concentration. |
| [[img:banks-si-table|preview]] | [[nav:si-table]] | Années de décaissement : ventes résiduelles (défaut au prorata). |

Préférez **[[term:fid-gmf|FID 0 / GMF]]**. Commandes de graphique :
[Agrandir / zoom / Révéler](/learn/getting_around#chart-chrome).

---

## À essayer {#try-this}

Faites ces étapes sur le plan de droite.

1. Orientez-vous sur **Bel-Air Residence** et **Bel-Air Tech** ([[nav:birds-eye]] / [[nav:bs-table]]).
2. **Résumé de simulation**. Notez la réussite sous **Argent** (souvent confortable sur cet
   exemple) et l'**écart** entre les résultats proches de la GMF et **Max**.
3. **Révélez** la distribution si la masse est écrasée à gauche. Voir
   [Quand le nuage de résultats a besoin de Révéler](/learn/nw_distribution_compression).
4. Facultatif : **Prévisions clés → Max**, puis ouvrez [[nav:bs-chart]] / [[nav:cf-chart]] sur ce
   [[term:fid]] pour une année profonde dans le plan. C'est l'histoire d'une « trajectoire
   chanceuse », pas le plan que vous souscrivez.
5. Contraste facultatif : ouvrez [Springfield Baseline](/learn/springfield_baseline). Les mêmes
   *mécanismes*, une échelle absolue plus basse, et pas de position concentrée du genre Bel-Air.

[[jump:key-forecasts]]

Préférez « la concentration **élargit les queues** » au fait de figer un pourcentage ou un montant
en dollars.

---

## La suite de la famille Banks {#banks-family-next}

| Sujet | Leçon |
|-------|-------|
| Règles imposable / traditionnel / Roth | [Protéger son argent](/learn/sheltering_money) |
| RMD forcé contre l'ordre fiscal du résiduel | [RMD traditionnel forcé](/learn/banks_forced_rmd) |
| Lire les queues droites épaisses | [Quand le nuage de résultats a besoin de Révéler](/learn/nw_distribution_compression) |
| Visite du foyer à deux revenus de la classe aisée | [Le foyer Springfield](/learn/springfield_baseline) |
| Stratégies résiduelles | [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) · [Glide ou au prorata](/learn/springfield_glide) |

---

*Quantités illustratives. Affirmation pédagogique : un patrimoine élevé plus une action concentrée à forte volatilité élargit la dispersion du patrimoine net final. Max est une histoire de queue. Utilisez Révéler et la GMF pour la masse.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
