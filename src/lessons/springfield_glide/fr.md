<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_glide.fr.md
tutilis-locale: fr translated
-->
# Glide ou au prorata

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.withdrawal.glide
  outline-path: Household planning › Withdrawal and longevity › Glide rebalance vs pro-rata
  document-id: springfield_glide
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: FirstPass
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_glide.md
-->

<!--- α <lesson_body> -->
Une [[term:glide-path]] est une répartition cible entre actions, obligations et liquidités qui change au fil des années. Vous l'écrivez une fois, et quand la stratégie de retrait est le **Rééquilibrage glissant** ([[term:rebalance]]), l'excédent de trésorerie de chaque année et le manque de chaque année sont orientés vers elle. Sous la stratégie par défaut, **Au prorata**, le plan vend et investit en proportion de ce qu'il détient déjà, si bien que la répartition de départ a tendance à rester.

Le plan de cette leçon commence avec bien plus d'obligations que d'actions, et porte une cible qui penche dans l'autre sens. Cet écart est le sujet de la leçon. Vous trouverez où la cible est réglée, vous la lirez, puis vous changerez de stratégie pour voir ce que la suivre fait à la prévision.

C'est la sœur de [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order). Les deux leçons changent la même commande, la stratégie de retrait, et chaque exemple est construit pour qu'un seul basculement soit facile à lire.

Le plan en direct à droite est **Springfield Glide** (`springfield_glide`). La réussite est jugée **Argent**, sauf si vous la changez, comme l'explique [Que signifie réussir ?](/learn/springfield_success).

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Qu'y a-t-il dans cet exemple, et pourquoi le prorata le garde-t-il chargé d'obligations ?** Voir [Ce qu'il y a dans l'exemple](#what-is-in-the-sample).
2. **Où règle-t-on la répartition cible de la trajectoire, et comment la lire ?** Voir [Régler la cible](#set-the-target).
3. **Quelles vues montrent si la part d'actions grandit avec le temps ?** Voir [Où regarder](#where-to-look).
4. **Où bascule-t-on la stratégie du prorata vers le rééquilibrage glissant ?** Voir [Le levier](#the-lever).
5. **Avec le même foyer et les mêmes dépenses, que change le fait de suivre la cible ?** Voir [À essayer](#try-this).

</div>
</aside>

---

## Ce qu'il y a dans l'exemple {#what-is-in-the-sample}

Homer est né en 1965. Il travaille jusqu'à sa retraite à 65 ans en 2030, demande la Social Security à son âge de retraite à taux plein de 67 ans, et le plan court jusqu'à ses 90 ans. Son épargne est dans un seul compte [[term:brokerage]] imposable qui détient deux fonds : **Growth Equity**, qui croît comme le marché actions américain, et **Ballast Bond**, qui croît comme les Treasuries intermédiaires. Le fonds obligataire fait plus de cinq fois la taille du fonds actions. Ses dépenses de vie continuent jusqu'à la fin du plan.

La stratégie de retrait du plan est **Au prorata**. Chaque année il vend, ou investit, dans les deux fonds en proportion de leur taille, si bien que le portefeuille reste surtout obligataire aussi longtemps que le plan court.

Le plan porte aussi une trajectoire d'allocation qu'il n'utilise pas encore. La cible est 75 % d'actions et 25 % d'obligations jusqu'à la retraite, puis elle se déplace en ligne droite vers 50/50 l'année où Homer a 90 ans. Le tableau au pied de cette leçon liste chaque réglage, cible comprise.

---

## Régler la cible {#set-the-target}

La cible vit sous la **Stratégie de mouvements de fonds** dans [[nav:assumptions]]. Sélectionnez **Rééquilibrage glissant** et la grille **Cible de trajectoire** apparaît en dessous. Un plan qui a déjà une cible montre la grille sous n'importe quelle stratégie, avec une note quand la stratégie ne la lira pas.

[[jump:glide-path|input__assumptions__assumptions-sell-invest__control.residual-capital-strategy__control.glide-rebalance]]

[[img:sfglide-glide-target|control]]

*La cible de Springfield Glide sous la Stratégie de mouvements de fonds. Le plan est sur Au prorata, donc la cible est stockée mais pas lue, et la note à côté le dit.*

La grille a une colonne par année et une ligne par sorte de placement : actions nationales, actions internationales, obligations et liquidités. Chaque colonne dit comment le portefeuille devrait être réparti cette année-là, et elle doit totaliser 100 %. Le total sous chaque colonne passe au rouge quand ce n'est pas le cas, et **Normaliser à 100 %** ramène chaque colonne dans ce cas à 100 %.

- **Définir une répartition cible** active la cible. Une nouvelle cible commence avec une colonne pour cette année, remplie avec ce que le plan détient aujourd'hui. La décocher supprime la cible, chaque colonne et la case sous la grille, donc elle demande d'abord.
- **Ajouter une année** ajoute une colonne dix ans après la dernière, avec la même répartition, que vous modifiez ensuite.
- La corbeille sous une colonne la retire.

Entre deux colonnes, la cible se déplace en ligne droite. Avant la première colonne, la répartition de la première s'applique, et après la dernière, celle de la dernière. Springfield Glide a deux colonnes, 2030 et 2055, donc sa cible est 75/25 chaque année jusqu'à 2030 et atteint 50/50 en 2055.

La cible est énoncée par sorte de placement, et Tutilis décide de quelle sorte est chaque fonds d'après la catégorie de croissance à laquelle il est réglé pour croître. Quand une classe détient plusieurs fonds, sa part est répartie entre eux en proportion de leur valeur. Un fonds dont la catégorie n'est aucune des quatre, comme l'or, l'immobilier ou un fonds qui n'a que sa propre hypothèse de croissance, est listé sous la grille comme **Hors trajectoire**. La règle ne l'achète ni ne le vend jamais pour atteindre la cible.

---

## Où regarder {#where-to-look}

### Définitionnel {#definitional}

1. [[nav:birds-eye]] → Actifs montre **Growth Equity** et **Ballast Bond** côte à côte dans le compte-titres.
2. La **Stratégie de mouvements de fonds** sous [[nav:assumptions]] commence sur **Au prorata**, et la grille **Cible de trajectoire** décrite plus haut est en dessous.

### Projeté — [[nav:forecaster]] (déjà rempli) {#projected-navforecaster-already-populated}

Sélectionnez [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]] et [[nav:si-table]]. Le Résumé de simulation est déjà réglé sur **Argent**.

| Aperçu | Vue | Ce que cela montre ici |
|--------|-----|------------------------|
| [[img:sfglide-bs-chart|preview]] | [[nav:bs-chart]] | Si la part d'actions grandit avec le temps. |
| [[img:sfglide-bs-table|preview]] | [[nav:bs-table]] | Les deux fonds dans une année sélectionnée. |
| [[img:sfglide-cf-chart|preview]] | [[nav:cf-chart]] | Le revenu pendant que Homer travaille, les dépenses de vie, et les années où le plan investit ou vend. |
| [[img:sfglide-si-table|preview]] | [[nav:si-table]] | Pourquoi chaque opération a eu lieu. Les opérations au prorata le disent, et les opérations de glide disent *Rééquilibrage glissant*. |
| [[img:sfglide-nw-distribution|preview]] | **Distribution du patrimoine net** | La dispersion du patrimoine net final après un changement de stratégie. |
| [[img:sfglide-key-forecasts|preview]] | **Prévisions clés** | Le patrimoine net final sur la trajectoire GMF et à travers les trajectoires. |

[[jump:glide-path|output__forecaster__forecaster.forecast-detail__si-table__line.reason.glide-rebalance]]

Lisez d'abord la trajectoire **[[term:fid-gmf|FID 0 / GMF]]**. Les commandes de graphique sont expliquées dans [Commandes de graphique : Agrandir, zoom et Révéler](/learn/getting_around#chart-chrome).

---

## Le levier {#the-lever}

| Endroit | Usage |
|---------|-------|
| La **Stratégie de mouvements de fonds** dans [[nav:assumptions]] | Change la stratégie du plan pour de bon. |
| [[nav:transforms]] → Mouvements de fonds, dans les modifiables | Essaie l'autre stratégie comme un et si, puis **Re-simuler**. |

[[jump:withdrawal-order|modifiable]]

Basculez **Au prorata** vers **Rééquilibrage glissant** et laissez les comptes et les dépenses tranquilles pour la première expérience. La cible est déjà en place, donc le basculement est le seul changement.

Tant que vous n'avez pas basculé, la liste des problèmes du plan porte un avertissement : la trajectoire d'allocation n'est pas utilisée par la stratégie de retrait. C'est le point que fait cette leçon. Sous le prorata, la cible est écrite, mais rien ne la lit. L'avertissement disparaît une fois que la stratégie est le rééquilibrage glissant.

---

## À essayer {#try-this}

1. Confirmez que **Ballast Bond** est beaucoup plus grand que **Growth Equity** au départ, dans [[nav:birds-eye]] ou [[nav:bs-table]].
2. Notez que la stratégie est **Au prorata**, et notez le patrimoine net du plan dans sa dernière année sur la trajectoire GMF.
3. Ouvrez [[nav:assumptions]] et lisez la grille **Cible de trajectoire** sous la **Stratégie de mouvements de fonds**. Puis basculez la stratégie vers **Rééquilibrage glissant** et **Re-simulez**.
4. Faites défiler [[nav:bs-chart]] ou [[nav:bs-table]] à travers les années. Sous le prorata, les actions restent autour d'un cinquième du portefeuille pendant tout le plan. Sous le rééquilibrage glissant, l'excédent de trésorerie de chaque année et le manque de chaque année sont orientés vers la cible, si bien que la part d'actions monte à plus d'un quart en 2035 et à environ deux cinquièmes en 2040. Elle rejoint la cible à la fin des années 2040, puis la suit vers le bas jusqu'à 50/50.
5. Comparez les fins. Le plan reste [[term:solvent]] jusqu'au bout sous les deux stratégies, et sous le rééquilibrage glissant il finit avec environ un tiers de patrimoine net en plus, parce qu'une plus grande part de l'argent a passé ces années à croître aux rendements des actions.
6. Modifiez la cible et re-simulez. Essayez une seconde colonne plus tardive, ou un point d'arrivée 60/40, et regardez de combien la fin bouge. Le sens de la grille est que vous pouvez dire quelle répartition vous voulez sans toucher un seul fonds.

Lisez la direction plutôt que les dollars. Sur un portefeuille chargé d'obligations, avec une cible qui demande plus d'actions, orienter l'excédent de trésorerie vers la cible aide.

---

## Leçons sœurs {#sibling-lessons}

| Leçon | Ce que la stratégie change |
|-------|----------------------------|
| [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) | Quel compartiment fiscal paie en premier (trésorerie imposable et un Roth à croissance rapide). |
| **Cette page** | La répartition des placements, à travers une trajectoire d'allocation (un compte chargé d'obligations et une cible qui penche vers les actions). |
| [Trajectoires d'allocation à travers la retraite](/learn/glide_paths_through_retirement) | Une trajectoire qui change avec les années : la tente obligataire, le rééquilibrage à l'intérieur de l'IRA, et un krach à la retraite. |

Les trois stratégies répondent à des questions différentes, et chaque exemple est réglé pour qu'un seul basculement soit facile à lire.

---

## Où aller ensuite {#where-to-go-next}

| Sujet | Leçon |
|-------|-------|
| Une trajectoire qui change au cours de la retraite | [Trajectoires d'allocation à travers la retraite](/learn/glide_paths_through_retirement) |
| Ordre des comptes fiscaux | [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) |
| Le foyer à deux revenus au complet | [Le foyer Springfield](/learn/springfield_baseline) |
| Âge de la demande et longévité | [Demander tôt ou vivre longtemps](/learn/springfield_claim_longevity) |
| Un RMD traditionnel forcé | [RMD traditionnel forcé contre l'ordre fiscal du résiduel](/learn/banks_forced_rmd) |
| Une carte de l'application | [S'orienter dans l'application](/learn/getting_around) |

---

*Les quantités sont illustratives. Ce que la leçon enseigne, c'est que, sur un portefeuille chargé d'obligations avec une cible qui demande plus d'actions, le rééquilibrage glissant déplace la répartition vers la cible et laisse le plan en meilleure position que le prorata. La direction est la leçon, et les dollars ne sont qu'une illustration.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
