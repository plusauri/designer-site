<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/exponential_growth.fr.md
tutilis-locale: fr translated
-->
# Croissance composée

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.time_value.compound_growth
  outline-path: Foundations › Time value of money › Compound / exponential growth
  document-id: exponential_growth
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: ProsePrimary
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/exponential_growth.md
-->

<!--- α <lesson_body> -->
La croissance composée est la courbe lente qui devient raide. Quelques points de pourcentage de
**rendement moyen**, tenus pendant des décennies, changent la forme d'un plan plus que presque
n'importe quelle surprise d'une seule année.

Cette leçon utilise le foyer **Springfield** comme décor, pour que le plan actif ait de vrais
comptes et de vraies années. Vous n'avez pas encore besoin de toute leur histoire. Si la carte de
l'application est encore nouvelle, prenez d'abord
[S'orienter dans l'application](/learn/getting_around) et revenez.

Le plan actif à droite est **Springfield Baseline** (`springfield_baseline`).

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Qu'est-ce que la croissance composée, et pourquoi une petite différence de taux compte-t-elle
   autant sur des décennies ?** Voir [L'idée en une image](#the-idea-in-one-picture).
2. **De combien le total final grossit-il lorsque j'augmente le taux de croissance ?** Voir
   [L'outil de croissance](#the-growth-tool-rate-time).
3. **Pourquoi deux graphiques de croissance peuvent-ils se ressembler alors que leurs totaux sont
   très différents ?** Voir [L'outil de croissance](#the-growth-tool-rate-time).
4. **Comment la même croissance apparaît-elle sur une position réelle du plan ?** Voir
   [Courbes miniatures sur de vraies positions](#sparklines-on-real-holdings).
5. **Comment lire des milliers de trajectoires de marché sans me noyer dans les lignes ?** Voir
   [Les fins, pas le spaghetti de trajectoires](#endings-not-path-spaghetti).

</div>
</aside>

---

## L'idée en une image {#the-idea-in-one-picture}

Supposez que vous investissiez une somme d'argent et que vous la laissiez tranquille. Chaque année,
le **solde** (pas seulement le [[term:principal]] d'origine) croît à peu près du même *taux*. C'est
la **[[term:compounding]]** : la croissance de l'an dernier devient une partie de la base de cette
année.

Sur un graphique des dollars en fonction des années, une croissance faible a l'air presque linéaire
pendant longtemps, puis s'incurve discrètement. Augmentez le taux, et la courbe ne devient pas
seulement « un peu plus haute au début ». Sur un long horizon, **l'écart entre les trajectoires
explose**. C'est pourquoi, dans la rhétorique financière, on appelle la capitalisation la
« huitième merveille » : de petites différences de taux, un long temps, une grande différence en
dollars.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

Sur quarante ans, un dollar qui croît de 3 % par an devient environ **\$3.26**. À 7 %, le même
dollar devient environ **\$15**. Le taux est un peu plus du double, et l'argent à la fin est plus
de quatre fois plus élevé.

</div>
</aside>

**Honnêteté :** les marchés oscillent. La courbe lisse est la trajectoire **sur la tendance /
typique** (ce que le calcul de croissance du produit montre souvent comme une ligne de moyenne
géométrique). Les trajectoires réelles zigzag autour d'elle. La leçon ici est la **forme de la
capitalisation**, pas la promesse d'un parcours lisse.

Les trois sections qui suivent sont la même courbe à trois endroits du produit, du plus propre au
plus encombré : le [[nav:growth-calculator]] en bac à sable, où vous tapez le taux ; une **vraie
position**, où le produit le fournit ; et le **plan entier**, où les dépenses et la chance des
marchés sont aussi dans l'image.

---

## L'outil de croissance : taux × temps {#the-growth-tool-rate-time}

Sur le plan actif, ouvrez la **barre d'outils du bas**
([[nav:fx]] · [[nav:growth]] · [[nav:annuity]] · [[nav:peek]])
et choisissez [[nav:growth]]. Cela ouvre le [[nav:growth-calculator]] : choisissez un montant, un
taux de croissance et une plage d'années, et lisez le **total projeté** sur la trajectoire sur la
tendance. Dans **Croître jusqu'au total**, le montant est un chiffre *chaque année*, de sorte que
le total est tout le flux capitalisé — et non un seul dépôt laissé tranquille.

[[jump:compounding|output__growth-calculator]]

Les nombres ici sont des hypothèses que vous tapez, plutôt que les positions actives de
Springfield, et c'est le point : le [[nav:growth-calculator]] est un bac à sable, donc il isole
**taux × temps** sans impôts, sans dépenses et sans rééquilibrage sur le chemin, et la seule chose
qui peut faire bouger la réponse est le taux.

### À essayer — tout l'enjeu de la leçon {#try-this-the-whole-point-of-the-lesson}

1. Réglez un montant annuel simple (par exemple $1,000) et une plage d'années de plusieurs
   décennies.
2. Lancez à environ **3 %** de croissance moyenne. Notez le chiffre de fin.
3. Ne changez que le taux, vers environ **6 à 7 %**. Regardez à quel point la fin est plus grande.
   Lisez le **nombre**, pas la courbe. Ce n'est pas une histoire linéaire du genre « doublez le
   taux, doublez les dollars » sur de longs horizons ; la capitalisation n'est pas linéaire.
4. Essayez facultativement **0 %** (valeur faciale plate) face à un taux positif modéré, pour que
   la forme de la courbe soit évidente.

⚠️ **Lisez l'axe des y avant de lire la forme.** Les deux images ci-dessous sont la même commande
à deux taux, et les flèches finissent à peu près à la même hauteur sur la page. Chaque graphique
met son **axe des y à l'échelle de ses propres nombres**. Lisez les libellés de l'axe et le total
projeté sur chaque image. Ce sont eux la comparaison. La silhouette cache la capitalisation.

<div class="lesson-img-stack">

[[img:exponential-growth-calc-3pct]]

<p class="lesson-img-caption"><strong>Moyenne de 3 %</strong> — $1,000 par an. Lisez le total projeté et le sommet de l'axe des y.</p>

[[img:exponential-growth-calc-7pct]]

<p class="lesson-img-caption"><strong>Moyenne de 7 %</strong> — les mêmes $1,000 par an sur les mêmes années. L'axe et le total sont tous les deux plus grands. Lisez-les sur l'image.</p>

</div>

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de maths — la formule de capitalisation et la règle de 72</summary>
<div class="lesson-math-body">

Un capital \(P\) qui croît au taux \(r\) pendant \(n\) années devient

\[
FV = P\,(1+r)^n
\]

L'exposant est la raison pour laquelle l'écart explose. À \(n = 40\), \(1.03^{40} \approx 3.26\) tandis que
\(1.07^{40} \approx 14.97\).

**La règle de 72.** L'argent double lorsque \((1+r)^n = 2\), donc \(n = \ln 2 / \ln(1+r)\). Pour les petits taux,
\(\ln(1+r) \approx r\), ce qui donne un temps de doublement d'environ \(72 / (\text{taux en \%})\) années.
C'est environ 24 ans à 3 % et environ 10 ans à 7 %, de sorte que sur quarante ans le dollar à 3 % double moins de
deux fois et le dollar à 7 % double presque quatre fois.

</div>
</details>

---

## Courbes miniatures sur de vraies positions {#sparklines-on-real-holdings}

Dans [[nav:birds-eye]], avec **Holding** sélectionné (ou [[nav:dossier]] → Actifs), les positions
peuvent montrer une **courbe miniature de croissance** : une trajectoire [[term:median]] avec un
**cône de risque**. La **ligne** est l'idée de capitalisation appliquée au [[term:mu|μ]] supposé de
cet élément ; la **bande** montre l'étalement issu de [[term:sigma|σ]]. [[term:hover|Survolez]] une
position — par exemple une position **Actions US** telle que Target Date Equity — pour les
hypothèses et le détail du cône.

Vous ne « prouvez » pas ici les rendements de Springfield. Vous voyez que **chaque ligne
pluriannuelle du plan est bâtie dans le même langage de croissance** que le
[[nav:growth-calculator]] utilise au grand jour. La différence est de savoir qui fournit le taux :
dans le calculateur, vous l'avez tapé ; ici, le produit l'a résolu.

[[img:exponential-growth-sparkline-cone]]

*[[nav:path:birds-eye|holding]], survol d'une position Actions US : trajectoire médiane plus un cône de risque jusqu'à l'horizon du plan — capitalisation avec incertitude, et non une seule ligne.*

[[jump:compounding|output__birds-eye__birds-eye.mode.holdings__birds-eye.assets-liabilities__line.birds-eye.holding-sparkline]]

---

## Les fins, pas le spaghetti de trajectoires {#endings-not-path-spaghetti}

D'autres outils de planification montrent souvent **toutes les trajectoires de scénario** comme des
lignes depuis l'**année de départ** jusqu'à l'**année finale** — un éventail complet de voyages
dans le temps. C'est une vue standard typique : chaque année de chaque trajectoire, tracée de bout
en bout. C'est honnête sur la [[term:sequence-of-returns]], mais facile de s'y noyer dans l'encre.

**C'est la même idée, mais en ne montrant que là où le patrimoine net aboutit cette dernière
année.** Le produit l'appelle une **distribution du patrimoine net** — un **diagramme de
distribution** (ou un **histogramme**) :

- Au lieu de tracer chaque année de chaque trajectoire, il ne garde **que la valeur finale** de
  chaque trajectoire la **dernière année**.
- Ces fins forment un nuage / un histogramme : combien de trajectoires atterrissent pauvres,
  typiques ou riches à l'horizon.
- Les quartiles, [[term:gmf]], le min/max et le pourcentage de réussite siègent à côté de ce
  nuage, pour que vous lisiez l'étalement sans suivre des milliers de lignes.

Donc : les autres outils montrent souvent **le voyage** ; ce graphique de résumé montre **où les
voyages finissent**. Les deux sont de la capitalisation **avec** de la [[term:volatility]] et les
flux de trésorerie du plan — la distribution n'est que la coupe en fin d'horizon.

Ouvrez [[nav:forecaster]] → Résumé de simulation (après une simulation) pour le voir :

[[img:exponential-growth-nw-distribution]]

*Distribution du patrimoine net — chaque marque est à peu près le patrimoine net **final** d'une trajectoire la dernière année (pas la trajectoire entière dans le temps). La masse rouge/orange près de zéro face au vert plus à droite est l'étalement des issues capitalisées sous les dépenses, les marchés et les hypothèses. La capitalisation produit aussi la trajectoire isolée loin à droite : au-delà de la rupture, l'axe est en échelle logarithmique — la légende du graphique dit elle-même à partir d'où — pour que cette trajectoire reste dans l'image sans aplatir tous les autres contre le bord gauche.*

[[jump:terminal-wealth|output__forecaster__forecaster.simulation-summary__simulation-summary.distribution__line.distribution.final-net-worth]]

Notez ce qui a été ajouté à chaque étape. Le [[nav:growth-calculator]] avait un taux et un
horizon. La courbe miniature a ajouté un **σ**, de sorte qu'une ligne est devenue un cône. Ce
graphique ajoute le reste du plan — dépenses, impôts, la séquence que les marchés se trouvent
distribuer — de sorte que le cône devient un nuage de fins. C'est la même capitalisation sous les
trois.

---

## Ce qu'il faut retenir {#what-to-take-away}

| Idée | Sens simple |
|------|-------------|
| **Croissance composée** | La croissance s'applique à une base qui grandit, et pas seulement au dépôt d'origine. |
| **Taux × temps** | De petits écarts de taux sur de longs horizons dominent la plupart des surprises d'une seule année. |
| **Une ligne ou plusieurs** | Une seule ligne lisse est la façon la plus simple de voir la courbe. Ce n'est pas une prévision : les marchés réels vous donnent une fourchette, et le plan vous montre cette fourchette. |
| **Trajectoires ou distribution** | Les éventails de trajectoires complets montrent chaque année de chaque scénario. Nous préférons vous montrer où ces scénarios **aboutissent**, sous forme de distribution : c'est la même information, sans l'encre. |
| [[nav:assumptions]] | μ (et σ) sont des entrées du modèle — recherchées ou tapées — et non des garanties. |

---

## Où aller ensuite {#where-to-go-next}

| Sujet | Leçon |
|-------|-------|
| Le nuage de points et les bandes | [Risque et rendement](/learn/risk_and_return) |
| Deux actifs nerveux, un parcours plus lisse | [Diversification et corrélation](/learn/diversification_correlation) |
| La carte de l'application | [S'orienter dans l'application](/learn/getting_around) |

Prenez ensuite **Risque et rendement** si le nuage de la dernière section est encore la partie
peu familière : c'est le même étalement, dessiné comme un arbitrage plutôt que comme une fin.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: ProsePrimary — Prose primary — teaching left; canvas scenery or omitted. -->
