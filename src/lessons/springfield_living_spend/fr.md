<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_living_spend.fr.md
tutilis-locale: fr translated
-->
# Infléchir le plan par les dépenses

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.cash_flow.living_spend
  outline-path: Household planning › Cash flow and lifestyle › Bend the plan with living spend
  document-id: springfield_living_spend
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_living_spend.md
-->

<!--- α <lesson_body> -->
Cette leçon utilise le même foyer que [Le foyer Springfield](/learn/springfield_baseline), Homer et
Marge, mais elle tire un **autre levier**. La question ici n'est pas *quand* ils s'arrêtent de
travailler. C'est **combien ils dépensent** pendant le travail et à la retraite, et à quel point
cela tire sur le portefeuille.

Le [[term:live-plan]] à droite est de nouveau **Springfield Baseline**.

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Pourquoi les dépenses de vie sont-elles un levier qui vaut d'être testé, et où les tester
   sans reconstruire le plan ?** Voir [La question](#the-question).
2. **Comment une dépense de vie est-elle modélisée comme une phase Work et une phase Retire,
   reliées par la date de retraite ?** Voir
   [Ce que « dépenses de vie » veut dire dans cet exemple](#what-living-spend-means-in-this-sample).
3. **Pourquoi le tableau de flux de trésorerie montre-t-il des montants de train de vie plus
   grands que ceux qui ont été saisis ?** Voir
   [Ce que « dépenses de vie » veut dire dans cet exemple](#what-living-spend-means-in-this-sample).
4. **Où vois-je comment les phases de train de vie ont été modélisées, et comment elles se
   déroulent dans la prévision ?** Voir [Où regarder](#where-to-look).
5. **Où change-t-on le montant d'une phase de train de vie pour essayer un budget plus haut ou
   plus bas ?** Voir [Le levier](#the-lever-transforms-lifestyle-phases).
6. **Comment la réussite et le patrimoine de fin de vie répondent-ils quand les dépenses de
   retraite montent ou descendent ?** Voir [À essayer](#try-this).
7. **En quoi changer les dépenses diffère-t-il de changer le moment où quelqu'un prend sa
   retraite ?** Voir
   [Lien avec le calendrier de la retraite](#how-this-relates-to-retirement-timing).

</div>
</aside>

---

## La question {#the-question}

Si j'augmente ou je baisse les **dépenses de train de vie**, dans les années **Work**, les années
**Retire**, ou les deux, est-ce que le plan répond d'une façon que je peux **voir** (barres de
flux de trésorerie, taux de réussite, patrimoine de fin de vie) ?

Les dépenses de vie sont l'un des rares leviers que les foyers contrôlent vraiment au jour le
jour. L'âge de la retraite est difficile à bouger. Quelques pour cent sur le budget, c'est une
conversation que l'on peut avoir ce mois-ci.

[[nav:transforms]] est l'endroit où cette analyse vit sans reconstruire le plan. Ouvrez
[[nav:transforms]], changez le montant d'une phase **Lifestyle** sous **Modifiables**, et regardez
la [[term:forecast]] et la [[term:simulation]] se mettre à jour, **original** contre **modifié**
côte à côte, pour voir combien de dépenses en plus (ou en moins) le portefeuille peut porter.

---

## Ce que « dépenses de vie » veut dire dans cet exemple {#what-living-spend-means-in-this-sample}

Springfield utilise un motif de flux de trésorerie **Lifestyle** avec **deux phases** :

| Phase | Idée approximative | Montant saisi (dollars d'aujourd'hui) | Quand elle court (dans cet exemple) |
|-------|--------------------|----------------------------------------|--------------------------------------|
| **Work** | Un budget plus élevé tant que les deux gagnent et épargnent | environ **$138,000**/an | Début du plan → **retraite principale** d'Homer (**2041**) |
| **Retire** | Un budget plus bas et plus stable une fois les salaires arrêtés, la même dépense de vie, reformulée pour les années après le travail | environ **$92,000**/an | **2041** → fin du plan du foyer |

Les deux montants sont écrits en dollars d'aujourd'hui et la prévision les fait croître. Ce que
vous lirez sur le tableau de flux de trésorerie au passage est donc plus grand que ce tableau : la
dernière année Work (**2040**) facture environ **$200k**, et la première année Retire (**2041**)
environ **$136k**. Les mêmes deux nombres, avec quinze années de croissance par-dessus.

Le but de cette leçon est de voir comment une seule idée de dépense de vie peut être modélisée en
**deux phases**, une avant la retraite et une après, **reliées par cette date de retraite**. Ce
lien apparaît comme une commande que vous pouvez déplacer dans [[nav:transforms]] →
**Modifiables**.

---

## Où regarder {#where-to-look}

### D'abord : comment les flux de trésorerie ont été modélisés {#first-how-the-cash-flows-were-modeled}

Nous regardons d'abord comment les flux de trésorerie ont été modélisés. Gardez en tête que
l'application [[term:canvas]] n'a pas à se soucier de saisir les flux de trésorerie comme le fait
l'application **de bureau** complète. Vous explorez un exemple pédagogique plutôt que de construire
chaque ligne. Il aide tout de même de voir comment la dépense de vie de cette leçon a été montée.

Le flux de la dépense de vie est ici découpé en **deux pièces séparées, mais liées**. Le plus
simple pour le voir est d'ouvrir [[nav:dossier]] → [[nav:birds-eye]] et de
[[term:hover|survoler]] les deux sorties liées **Lifestyle (Work)** et **Lifestyle (Retire)**.
Assurez-vous que [[nav:cash-flow]] est sélectionné sur [[nav:birds-eye]], pour que ces flux
apparaissent du côté **Passifs** des tableaux :

[[img:springfield-living-spend-birds-eye-cf-table]]

*[[nav:path:birds-eye|cash-flow]] sélectionné, avec le cumul **Σ** (somme des années) activé.
**Lifestyle (Retire)** et **Lifestyle (Work)** sont en haut des **Passifs**, le long flux de
sorties que ce foyer prévoit, et les deux plus grandes choses de la feuille.*

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

Puis survolez l'une ou l'autre. Les deux lignes viennent d'un seul poste de dépense de vie à deux
phases, donc les deux ouvrent la même carte :

[[img:springfield-living-spend-lifestyle-work-hover]]

*La carte **Lifestyle**. **Valeur du flux** liste les deux phases que le poste produit : **Work**
pour **2027–2040** et **Retire** pour **2041–2069**. **Phase 1** et **Phase 2** en dessous donnent
le montant annuel de chaque phase, ses années actives et la croissance de ses dépenses. Les années
de chaque phase sont liées à des événements de vie nommés, donc Work s'arrête à la retraite
d'Homer et Retire y commence.*

Dans le graphique de trajectoire en bas, la phase Work est dessinée pour les années **avant** la
retraite, et la phase Retire reprend **là où le travail s'est arrêté**. Les deux lignes racontent
une seule histoire liée.

### Projeté — [[nav:forecaster]] (déjà rempli) {#projected-navforecaster-already-populated}

Dans le **Détail de prévision**, les puces commandent quelles cartes apparaissent (ordre de la
barre : [[nav:bs-chart]] → [[nav:bs-table]] → [[nav:cf-chart]] → [[nav:cf-table]]). **Pour cette
leçon, sélectionnez ces quatre** et laissez Impôts / Ventes et investissements / Réconciliation
éteints, sauf si vous creusez plus loin.

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Aperçu | Endroit | Ce qu'il faut remarquer pour les dépenses de vie |
|--------|---------|--------------------------------------------------|
| [[img:sfb-bs-chart|preview]] | [[nav:bs-chart]] | Si des dépenses plus hautes érodent les soldes plus vite dans les années de décaissement. |
| [[img:sfb-bs-table|preview]] | [[nav:bs-table]] | Les comptes de l'année sélectionnée et le patrimoine net après un changement de dépenses. |
| [[img:sfb-cf-chart|preview]] | [[nav:cf-chart]] | Les piles de sorties au fil des années ; le passage près de la retraite. |
| [[img:sfb-cf-table|preview]] | [[nav:cf-table]] | Année sélectionnée : la ligne de train de vie face aux revenus et aux autres dépenses. |
| [[img:sfb-nw-distribution|preview]] | **Distribution du patrimoine net** | Le nuage du Résumé de simulation et le taux de réussite (Argent). |
| [[img:sfb-key-forecasts|preview]] | **Prévisions clés** | Min / [[term:gmf]] / Max après un changement de dépenses. |

Le détail et le Résumé de simulation sont déjà affichés. **Re-simulez** après une transformation
quand vous voulez une comparaison fraîche sur plusieurs trajectoires. Faites défiler **Année** à
travers le passage Work → Retire.

**Quelle trajectoire regardez-vous ?** Les cartes année par année montrent une prévision à la
fois, choisie par la commande **FID**. **FID 0** est la trajectoire de référence, la seule
prévision où chaque position croît à son taux attendu chaque année, sans décennie chanceuse et
sans krach, et le produit l'appelle [[term:fid-gmf]]. Tout autre numéro de FID est une seule
trajectoire aléatoire de la simulation. Restez sur FID 0 pendant que vous bougez un levier, pour
que ce qui change à l'écran soit le levier et non la chance. Ne changez de FID que lorsque vous
voulez vraiment visiter d'autres trajectoires.

---

## Le levier : Transformations → phases Lifestyle {#the-lever-transforms-lifestyle-phases}

Ouvrez [[nav:transforms]] → Modifications.

1. Dans **Modifiables**, sélectionnez le poste **Lifestyle** (le générateur des phases de dépense
   de vie), pas Fin de prévision (c'était la retraite et le décès) et pas une seule ligne de
   personne pour cette leçon.
2. Vous devriez voir des commandes de **montant annuel par phase** (par exemple **Work** et
   **Retire**).
3. Changer le montant d'une phase ajoute la modification au **Jeu de modifications**
   automatiquement.
4. Les graphiques et les tableaux doivent **se mettre à jour en direct** quand vous bougez une
   commande.
5. **Re-simulez** quand vous voulez l'original et le modifié en [[term:monte-carlo|Monte Carlo]]
   côte à côte.

[[jump:transforms]]

**Cadre honnête :** ces curseurs montrent ce qu'un train de vie plus haut ou plus bas fait à *ce*
plan sous *cette* définition de la réussite. Ce n'est pas un conseil sur ce que vous « devriez »
dépenser.

---

## À essayer {#try-this}

Travaillez sur le plan Springfield de droite.

1. Ouvrez [[nav:forecaster]] → Résumé de simulation. Notez la réussite sous **Argent**, environ
   **65 %** sur ce plan, un quasi-échec, ce qui est exactement ce qui rend le levier visible, et
   un ordre de grandeur du [[term:terminal-wealth]] (**direction et ordre de grandeur seulement**).

   > **À propos de la ligne Baisse (P10).** Sur ce plan elle se lit comme un négatif profond, des
   > millions sous zéro. Ce n'est pas un solde que quelqu'un détiendrait. C'est la façon dont le
   > modèle tient le score une fois qu'une trajectoire n'a plus d'argent. Sous zéro, le plan
   > continue d'emprunter à son [[term:cost-of-capital]] au lieu de s'arrêter. Un P10 aussi loin
   > en dessous mesure *de combien* le pire dixième des trajectoires est en deçà, pas ce qu'un
   > foyer aurait réellement. Lisez le signe et la distance, pas le chiffre.

2. Ouvrez [[nav:cf-chart]] / [[nav:cf-table]]. Faites défiler **Année** jusqu'à **2040**, la
   dernière année Work. **Lifestyle (Work)** est d'environ **$200k**. Puis **2041**, la retraite
   d'Homer et la première année Retire. **Lifestyle (Retire)** est d'environ **$136k**, et le
   revenu du travail de Marge est encore là. Cette marche descendante au passage, c'est la forme
   à deux phases.
3. Ouvrez [[nav:transforms]] → Modifications. Sélectionnez **Lifestyle**. Les deux curseurs
   affichent **Work $138,000** et **Retire $92,000**, les montants saisis en dollars d'aujourd'hui.
   S'ils affichent autre chose, un changement est déjà dans le Jeu de modifications. Annulez-le
   d'abord.
4. **Montez Retire à $110,000**, environ un cinquième de plus. Regardez [[nav:cf-chart]] et le
   détail du bilan **en direct** : en **2041**, la ligne Lifestyle (Retire) devrait maintenant
   afficher environ **$163k** au lieu de $136k. Attendez-vous à plus de tension sur le
   portefeuille dans les années de [[term:drawdown]].
5. **Re-simulez**. Comparez la réussite et le patrimoine de fin de vie, original contre modifié.
   Attendez-vous à une direction **plus dure**, puisque vous avez augmenté les dépenses de
   retraite sur une base déjà en quasi-échec.
6. **Baissez Retire à $80,000** (annulez d'abord, ou faites glisser le même curseur à travers la
   base). Attendez-vous à un soulagement sur la réussite et le patrimoine final. Lisez tout de
   même les graphiques. Les impôts et les rendements des placements comptent.
7. Facultatif : poussez la phase **Work** vers le haut ou vers le bas pendant que Retire reste
   fixe. Les années de travail ont encore un double [[term:earned-income]]. L'histoire est «
   peuvent-ils épargner plus ou moins pendant qu'ils gagnent ? », pas seulement le décaissement
   de la retraite.
8. Facultatif : revenez à [[nav:path:birds-eye|cash-flow]] et survolez Lifestyle après un
   changement, la définition face à la trajectoire projetée dans le Prévisionniste.

[[jump:birds-eye]]

Les cibles en dollars ci-dessus sont là pour que vous vérifiiez que vous êtes sur les mêmes
nombres que ce texte, pas parce que $110,000 veut dire quelque chose en soi. Ce qu'il faut retenir,
c'est la direction : dépenses de retraite en hausse, réussite en baisse ; dépenses de retraite en
baisse, réussite en hausse.

---

## Lien avec le calendrier de la retraite {#how-this-relates-to-retirement-timing}

| Leçon | Levier principal |
|-------|------------------|
| [Le foyer Springfield](/learn/springfield_baseline) | **Quand** le travail s'arrête (retraite dans **Fin de prévision**) |
| **Cette leçon** | **Combien** coûte le train de vie (phases **Lifestyle** Work / Retire) |

Les deux peuvent déplacer la réussite et le patrimoine final. Ce sont des **conversations
différentes** : des années de revenus contre des dollars de consommation. Dans une vraie
planification, on touche souvent les deux. Ici, nous gardons un seul levier en vue.

---

## Où aller ensuite {#where-to-go-next}

| Sujet | Leçon / exemple |
|-------|-----------------|
| Orientation et calendrier de la retraite | [Le foyer Springfield](/learn/springfield_baseline) |
| Carte de l'application (si vous êtes perdu) | [S'orienter dans l'application](/learn/getting_around) |
| Prêt en cours ou maison payée | [Prêt en cours ou maison payée](/learn/mortgage_on_vs_paid_off) |
| Ce que « réussir » veut dire (paliers) | [Que signifie réussir ?](/learn/springfield_success) |
| Moment de la demande de Social Security | [Demander tôt ou vivre longtemps](/learn/springfield_claim_longevity) |

---

*Les quantités sont illustratives. Ce que la leçon enseigne, c'est le mécanisme et la direction dans laquelle chaque levier déplace le plan.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
