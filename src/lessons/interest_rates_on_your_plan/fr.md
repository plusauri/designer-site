<!--
tutilis-return: lessons/interest_rates_on_your_plan/prose/fr.md
tutilis-locale: fr translated
-->
# Les taux d'intérêt, le prix de l'argent

Un [[term:interest-rate|taux d'intérêt]] est le prix de l'argent. Un emprunteur le paie à un prêteur chaque année pour l'usage de cet argent, en part du montant emprunté. Quand vous placez de l'épargne dans un fonds monétaire, vous êtes le prêteur, et le taux est ce qu'on vous paie. Quand vous prenez un prêt immobilier, vous êtes l'emprunteur, et le taux est ce que vous payez.

Il est utile de voir l'argent comme quelque chose que l'on peut acheter. Si vous entrez dans une banque et que vous dites « je voudrais acheter de l'argent », la banque vous en vend, et le taux d'intérêt est l'étiquette du prix. Certaines années l'argent est bon marché, et certaines années il est cher. C'est une autre question que celle de [Le risque de change dans la prévision](/learn/currency_risk_in_the_forecast), où vous dites « je voudrais échanger de l'argent » et où le taux de change décide combien d'euros un dollar achète.

Le prix de l'argent atteint un plan par tous les placements à la fois, et pas dans le même sens. Une hausse rend un fonds obligataire moins précieux cette année, et le paie davantage chaque année suivante. Les liquidités rapportent plus tout de suite. Les actions peuvent baisser aussi, ou presque ne pas bouger, selon la raison du mouvement des taux. Une obligation détenue jusqu'à l'échéance ne change pas du tout. Cette leçon pose une hausse des taux et une baisse des taux sur un même foyer, et suit chacun de ces effets à travers le plan.

Morgan a 59 ans et compte prendre sa retraite en 2030, à 63 ans. L'épargne est d'environ $1.24 million. Le [[term:401k|401(k)]] détient un fonds d'actions de l'ensemble du marché, un fonds de Trésor à long terme et un fonds de Trésor à moyen terme. Un [[term:brokerage]] détient davantage du fonds d'actions et un bon du Trésor à 10 ans acheté à l'émission, que Morgan compte garder jusqu'à son échéance en 2036. Un compte de marché monétaire détient $100,000 de liquidités. Les dépenses sont de $80,000 par an en dollars d'aujourd'hui, et la Social Security commence à l'âge de la retraite à taux plein.

La leçon ouvre deux plans :

- [Obligations longues](#canvas-dossier:rates_bond_heavy) est le plan de Morgan tel qu'il est.
- [Obligations plus courtes](#canvas-dossier:rates_short_bonds) est le même plan, avec le fonds de Trésor à long terme remplacé par un fonds de Trésor à court terme de la même taille. Tout le reste est inchangé.

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Qui décide du niveau des taux d'intérêt ?** Voir [Le prix de l'argent](#the-price-of-money).
2. **Comment voyez-vous ce qu'une hausse des taux ferait à votre plan ?** Voir [Poser un choc de taux sur un plan](#put-a-rate-shock-on-a-plan).
3. **Pourquoi un fonds obligataire perd-il de l'argent quand les taux montent, et le récupère-t-il ?** Voir [Les fonds obligataires baissent, puis paient](#bond-funds-fall-then-pay).
4. **Une obligation que vous détenez jusqu'à l'échéance est-elle plus sûre qu'un fonds obligataire ?** Voir [Une obligation détenue jusqu'à l'échéance](#a-bond-held-to-maturity).
5. **Qu'arrive-t-il à vos liquidités et à vos actions ?** Voir [Les liquidités et les actions](#cash-and-stocks).
6. **Une baisse des taux est-elle une bonne nouvelle, et la durée d'une hausse compte-t-elle ?** Voir [Hausses, baisses et durée](#rises-cuts-and-how-long).
7. **Des obligations plus courtes vous protégeraient-elles ?** Voir [Des obligations plus courtes](#shorter-bonds).
8. **Qu'est-ce que le choc n'inclut pas ?** Voir [Ce que le choc laisse de côté](#what-the-shock-leaves-out).

</div>
</aside>

## Le prix de l'argent {#the-price-of-money}

Les taux d'intérêt sont fixés en partie par une banque centrale et en partie par le marché. Aux États-Unis, la Réserve fédérale fixe directement le taux le plus court. Son taux des fonds fédéraux est ce que les banques se facturent entre elles au jour le jour, et les fonds monétaires et les comptes d'épargne le suivent en quelques semaines. La Fed le relève pour refroidir une économie qui tourne trop vite, et le baisse pour soutenir une économie qui ralentit.

Les taux plus longs ne sont fixés par personne. Le [[term:yield]] d'un bon du Trésor à 10 ans est ce sur quoi acheteurs et vendeurs se mettent d'accord, et il reflète trois choses : où ils attendent que les taux courts aillent au cours de ces dix années, quelle [[term:inflation]] ils attendent, et combien de supplément ils veulent pour immobiliser leur argent plus longtemps. La Fed influence surtout les taux longs en disant ce qu'elle compte faire. Quand elle indique à l'avance une trajectoire pour son taux, ce qu'on appelle la forward guidance, les taux longs bougent souvent dès l'annonce, bien avant que le taux court lui-même change. Les taux longs ont donc une vie propre. Ils peuvent monter pendant que la Fed baisse, si le marché attend davantage d'inflation ou davantage d'emprunts publics.

L'offre de dette publique compte aussi. Quand le Trésor emprunte davantage par des obligations longues plutôt que par des bons courts, les acheteurs ont plus d'obligations longues à absorber et peuvent vouloir un rendement plus élevé pour les prendre. Depuis 2024, le Trésor rachète aussi, selon un calendrier régulier, une partie de ses propres obligations plus anciennes, ce qui aide ces obligations à s'échanger sans à-coups. Ni l'un ni l'autre n'est un levier qu'un foyer peut actionner, mais les deux sont des raisons pour lesquelles un taux long peut bouger alors que la Fed n'a rien fait.

Tutilis part des taux d'aujourd'hui. Les hypothèses de croissance des catégories de liquidités et d'obligations sont construites à partir de la courbe des taux du Trésor : la catégorie marché monétaire attend 3.80% par an parce que c'est à peu près ce que paie un bon du Trésor à 3 mois, et la catégorie Trésor à long terme attend 5.18% parce que c'est à peu près ce que paie un Trésor à 30 ans. Vous voyez l'attente de chaque placement dans la colonne **Spéc.** du contrôle des rendements réalisés<!-- term-skip: realized-gain — the name of the returns check, not a realized gain --> plus loin dans cette leçon. Une prévision maintient ces attentes stables. Un choc de taux est la façon de demander ce qui se passe si elles bougent.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Référence — jusqu'où les taux ont bougé</summary>
<div class="lesson-reference-body">

| Période | Ce qui s'est passé |
|---|---|
| 1979–1981 | La Fed, sous Paul Volcker, a poussé le taux des fonds fédéraux près de 20% pour casser l'inflation. Le rendement du Trésor à 10 ans a dépassé 15% en 1981. |
| 1994 | La Fed a relevé son taux de 3% à 5.5% dans une année de croissance régulière. Les obligations ont connu une de leurs pires années, et le S&P 500 a fini à peu près stable. |
| 2008–2015 | La Fed a maintenu son taux près de zéro après la crise financière. |
| 2020–2021 | De nouveau près de zéro. Le rendement à 10 ans est tombé près d'un demi pour cent en 2020. |
| 2022 | La Fed a relevé son taux de près de zéro à plus de 4% pour combattre l'inflation. Les fonds de Trésor à long terme ont perdu environ 30%, et le S&P 500 a perdu environ 18%. |

Les historiques de taux sont sur FRED, le site de données de la Fed de Saint-Louis : le [taux des fonds fédéraux](https://fred.stlouisfed.org/series/FEDFUNDS) et le [rendement du Trésor à 10 ans](https://fred.stlouisfed.org/series/DGS10).

</div>
</details>

## Poser un choc de taux sur un plan {#put-a-rate-shock-on-a-plan}

Un choc de taux est un cas « et si » que vous posez sur le plan dans [[nav:transforms]], de la même façon que vous y poseriez un krach historique. Ouvrez Transformations, dépliez **Modifications**, et dans l'onglet **Global** de la carte Modifiables sélectionnez **Choc de taux d'intérêt** :

[[jump:interest-rate]]

[[img:rates-modifiables|control]]

L'éditeur à côté de la carte contient le choc. Activez-le et réglez quatre choses :

[[img:rates-editor|control]]

- **Variation de taux**, c'est l'ampleur du mouvement des taux, en points de pourcentage, par pas d'un quart de point. Un nombre négatif est une baisse.
- **Actions** dit pourquoi les taux ont bougé, ce qui décide de ce que font les actions. *Baissent aussi* est une hausse tirée par l'inflation, comme en 2022, quand les actions ont baissé avec les obligations. *Tiennent* est une hausse dans une économie en croissance, comme en 1994, quand les actions ont fini l'année à peu près là où elles avaient commencé.
- **Début de la variation** est l'année où les taux bougent. Il s'ouvre sur la première année du plan, parce que « et si les taux montaient à partir d'ici ? » est la question habituelle.
- **Durée de la variation** est le nombre d'années pendant lesquelles les taux restent déplacés avant de revenir là où les hypothèses du plan les placent.

Rien ne change dans le plan. Transformations montre le plan tel qu'il a été écrit d'un côté et le plan avec le choc de l'autre, et les années du choc sont ombrées sur l'axe des années de chaque graphique. Voici le plan de Morgan avec une hausse de deux points à partir de 2027, tirée par l'inflation et durant cinq ans :

[[img:rates-bs-hike]]

Le patrimoine net baisse d'environ $139,000 en 2027, de $1,278,000 à $1,139,000. Puis il se redresse, et en 2032, l'année où les taux reviennent, le plan avec le choc est légèrement devant le plan sans choc. Le reste de cette leçon démonte cette image, un type de placement à la fois.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau seulement</summary>
<div class="lesson-desktop-only-body">

Posez le même choc sur votre propre plan. Ouvrez votre plan, allez dans **Transformations**, sélectionnez **Choc de taux d'intérêt** et activez-le. Essayez une hausse et une baisse de la même ampleur, et essayez les deux réponses sous **Actions**. Les plans qui bougent le plus sont ceux qui ont des fonds d'obligations longues, beaucoup de liquidités ou beaucoup d'actions, et la plupart des plans en détiennent au moins un.

</div>
</details>

## Les fonds obligataires baissent, puis paient {#bond-funds-fall-then-pay}

Un fonds obligataire perd de la valeur quand les taux montent, parce que les obligations qu'il détient déjà paient l'ancien taux, plus bas. Personne ne paiera le plein prix d'une obligation qui rapporte 5% quand les obligations neuves rapportent 7%, donc son prix baisse jusqu'à ce que son rendement rejoigne le nouveau taux. L'ampleur de la baisse dépend de la [[term:duration]] de l'obligation, qui est à peu près le nombre d'années de paiements encore à venir. Un fonds dont la duration est de 5 perd environ 5% quand les taux montent d'un point. Le fonds de Trésor à long terme de Morgan a une duration d'environ 14.5, donc une hausse de deux points lui coûte environ 29%.

La perte n'est que la moitié de l'histoire. Le fonds continue d'acheter des obligations neuves à mesure que les anciennes arrivent à échéance, et les neuves paient le taux plus élevé, donc à partir de là il gagne environ deux points de plus chaque année. Quand les taux redescendent, la perte de prix s'inverse. Le contrôle **Rendements réalisés** montre les trois phases. Il s'ouvre par un bouton de la barre d'outils du graphique de bilan, et un clic sur le chemin ci-dessous vous y mène directement, sur le plan à côté de cette leçon :

[[jump:return|output__forecaster__forecaster.forecast-detail__bs-chart__bs-chart.return-check]]

Le contrôle y montre le plan tel qu'il a été écrit. Avec le choc, il s'ouvre par le même bouton, du côté *Modifié* de Transformations. [Vérifier les rendements du krach](/learn/sequence_of_returns_crash_timing#check-the-crashs-returns) explique comment lire le contrôle. Voici le fonds de Trésor à long terme dans le 401(k) de Morgan, avec le choc à partir de 2027 :

[[img:rates-returns-long]]

Le fonds rapporte −21.8% en 2027, ce qui est son 5.18% habituel, plus deux points de rendement nouveau, moins la baisse de prix de 29 points. Il rapporte ensuite 7.2% par an de 2028 à 2031, deux points au-dessus de son rendement habituel. En 2032, quand les taux reviennent, il gagne 34.2% à mesure que le prix revient. La bande **Croissance de 1** sous le graphique, réglée sur la fenêtre **Choc**, suit un dollar à travers ces six années. Il tombe à 78 cents en 2027 et finit à 1.38, un peu devant le 1.35 que le fonds aurait atteint sans le choc.

Ainsi, une hausse des taux qui s'inverse ensuite ne coûte rien, au bout du compte, à un fonds obligataire, tant que vous n'avez pas à vendre pendant la mauvaise année. Le danger est le même que pour un krach : une personne à la retraite qui vend des obligations en 2027 pour payer les factures les vend à 78 cents pour un dollar, et ces dollars ne sont plus là quand le prix revient.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de maths — le décalage que Tutilis applique</summary>
<div class="lesson-math-body">

Pour une catégorie d'obligations de duration \(D\), un mouvement de taux \(\Delta\) change le rendement de la catégorie, en plus de l'attente propre du plan, de

\[
\text{première année : } \Delta - D\,\Delta, \qquad \text{chaque année où les taux restent déplacés : } \Delta, \qquad \text{l'année où ils reviennent : } D\,\Delta.
\]

Le terme de la première année est la perte de prix \(D\,\Delta\), plus une année au nouveau rendement. Avec \(D = 14.5\) et \(\Delta = 0.02\), la première année bouge de \(0.02 - 0.29 = -0.27\), donc le 5.18% du fonds à long terme devient −21.8%. Le décalage s'ajoute au rendement de l'année sans changer l'ampleur des variations de la catégorie, et il ne déplace aucune autre catégorie. Les actions ne bougent que selon ce que dit le choix **Actions**, et les dépenses ne bougent pas du tout.

</div>
</details>

## Une obligation détenue jusqu'à l'échéance {#a-bond-held-to-maturity}

Une obligation détenue jusqu'à l'échéance ne se soucie pas de ce que font les taux entre-temps. Son émetteur paie le coupon chaque année et la valeur nominale à la date d'échéance, quel que soit le prix que le marché en donnerait un jour quelconque avant cette date. Son prix sur le papier baisse encore quand les taux montent, mais le propriétaire n'a jamais à accepter ce prix. Un [[term:bond-fund]] n'a pas de date d'échéance, donc il n'a pas de jour de ce genre à attendre.

Tutilis modélise les deux différemment, précisément pour cette raison. Le bon du Trésor à 10 ans de Morgan est une obligation individuelle, avec un coupon contractuel et une échéance en 2036, donc le choc de taux le laisse de côté. Voici le tableau de bilan pour 2027, avec le plan tel qu'il a été écrit à gauche et le plan avec le choc à droite :

[[img:rates-table-2027]]

Le fonds de Trésor à long terme finit 2027 à $148,000 avec le choc, contre $199,100 sans lui. Le fonds de Trésor à moyen terme finit à $180,500, contre $196,300. Le bon du Trésor finit à $105,600, contre $105,300. C'est le même bon dans les deux plans. Les quelques centaines de dollars d'écart sont des liquidités que le plan a réinvesties différemment, et ce que vaut le bon lui-même n'a pas changé.

<aside class="lesson-saying" data-saying="free-lunch">

Le bon paie son coupon que les taux montent ou baissent, donc après une hausse il continue de payer l'ancien taux, plus bas, pendant que le fonds rejoint le nouveau. Détenir jusqu'à l'échéance retire l'oscillation du prix, et cela abandonne le revenu plus élevé qu'un fonds gagnerait après une hausse.

</aside>

Détenir jusqu'à l'échéance n'aide, en outre, que si l'argent n'est pas nécessaire avant la date d'échéance.

## Les liquidités et les actions {#cash-and-stocks}

Les liquidités sont le cas le plus simple. Un fonds monétaire détient des bons qui arrivent à échéance en quelques semaines, donc son rendement suit le nouveau taux presque aussitôt et son prix bouge à peine. Voici le compte de marché monétaire de Morgan sous le même choc :

[[img:rates-returns-cash]]

Il gagne 5.6% en 2027 et 5.8% par an jusqu'en 2031, contre son 3.8% habituel. En 2032 les taux reviennent, et son rendement aussi. Une hausse des taux est une bonne nouvelle pour les liquidités, et c'est la principale raison pour laquelle en détenir est une défense contre la hausse des taux.

Les actions sont plus difficiles, parce que leur réaction dépend de la raison du mouvement des taux. Un taux plus élevé rend les bénéfices futurs d'une entreprise moins précieux aujourd'hui, ce qui pousse les prix vers le bas. Mais si les taux montent parce que l'économie est forte, les bénéfices peuvent croître assez vite pour compenser. C'est la différence entre 2022, où l'inflation a fait monter les taux et où les actions ont baissé avec les obligations, et 1994, où c'est la croissance qui l'a fait et où les actions ont fini à peu près stables.

Le choix **Actions** dans l'éditeur est cette question. Avec *Baissent aussi*, les fonds d'actions américaines perdent environ 6% pour chaque point de hausse des taux, et le récupèrent quand les taux reviennent. Avec *Tiennent*, les actions gardent l'attente propre du plan. Voici le plan de Morgan avec la même hausse de deux points, mais tirée par la croissance :

[[img:rates-bs-growth]]

Sans la perte sur les actions, le patrimoine net en 2027 ne descend qu'à $1,213,000. Les fonds obligataires baissent encore, et les liquidités rapportent encore davantage. À la fin du plan, cette version est environ $97,000 devant le plan sans choc, parce que les obligations et les liquidités ont passé cinq ans à gagner davantage pendant que les actions ne perdaient rien.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

Pendant la plus grande partie des vingt années avant 2022, les actions et les obligations de haute qualité tendaient à bouger en sens opposés, ce qui explique pourquoi les obligations ont été un si bon coussin en 2008. En 2022, elles ont baissé ensemble, et c'était aussi le schéma habituel dans les années 1970 et 1980. La relation entre les deux dépend de ce qui mène l'économie, l'inflation ou la croissance, et elle peut se retourner en l'espace d'une année.

</div>
</aside>

Les corrélations bougent aussi dans un krach. En temps ordinaire, les différentes sortes d'actions et les obligations plus risquées suivent chacune leurs propres nouvelles. Dans une panique, les investisseurs vendent tout ce qu'ils peuvent et regardent ce que les autres vendent, si bien que des actifs qui d'habitude s'écartent se mettent à bouger ensemble. Les corrélations de l'ensemble du plan, dans Tutilis, sont des moyennes sur de nombreuses années, et ni le choc de taux ni le rejeu du krach ne les relève pendant les années du choc. [Choisir le moment d'un krach](/learn/sequence_of_returns_crash_timing) montre ce qu'un krach fait à travers les corrélations que le plan a déjà.

## Hausses, baisses et durée {#rises-cuts-and-how-long}

Une baisse des taux est l'image inversée d'une hausse. Les fonds obligataires gagnent la première année, les liquidités rapportent moins, et avec *Baissent aussi* les actions gagnent. Au cours des années qui suivent, tout rapporte moins qu'il n'aurait rapporté. Voici le plan de Morgan avec une baisse d'un point et demi à partir de 2027, tirée par une économie qui ralentit, de sorte que les actions tiennent :

[[img:rates-bs-cut]]

Le patrimoine net est environ $49,000 plus haut en 2027, à $1,327,000. En 2032, il est de $46,000 plus bas que le plan sans la baisse, et en 2058 il est environ $143,000 plus bas, à $366,000 contre $510,000. Une personne à la retraite qui vit de son épargne est un prêteur, et une baisse abaisse le prix que ce prêteur reçoit. Le gain de la première année est réel, mais c'est un gain de prix, et le revenu plus bas dure des années.

La durée du mouvement compte autant que son sens. Réglez **Durée de la variation** sur son maximum, et la hausse de deux points ne s'inverse jamais à l'intérieur du plan. Alors la perte sur les actions n'est jamais rattrapée, les fonds obligataires ne récupèrent jamais leur prix, et le revenu supplémentaire ne compense pas. Sur le plan de Morgan, une hausse permanente laisse le patrimoine net à $461,000 en 2058, contre $533,000 quand les taux reviennent après cinq ans, et $510,000 sans aucun choc.

## Des obligations plus courtes {#shorter-bonds}

La défense habituelle contre la hausse des taux, ce sont des obligations plus courtes, parce qu'une duration courte signifie un petit changement de prix. Le plan [Obligations plus courtes](#canvas-dossier:rates_short_bonds) remplace le fonds de Trésor à long terme de Morgan, dont la duration est d'environ 14.5, par un fonds de Trésor à court terme dont la duration est d'environ 2.3. Voici ce plan sous la même hausse de deux points, tirée par l'inflation :

[[img:rates-bs-short-hike]]

Le patrimoine net baisse d'environ $93,000 en 2027, contre $139,000 pour le plan de Morgan avec le fonds long. Le fonds court se réinvestit aussi au nouveau taux en un an ou deux, donc il encaisse le revenu plus élevé presque tout de suite. En 2058, le plan aux obligations plus courtes, avec le choc, finit à $478,000, bien au-dessus de ses propres $385,000 sans le choc.

La protection a un prix, et il apparaît dans les deux autres cas. On attend des obligations courtes qu'elles rapportent moins, donc sans aucun choc le plan aux obligations plus courtes finit à $385,000, contre $510,000 pour le plan aux obligations longues. Et quand les taux baissent, les obligations courtes ne gagnent presque rien en prix et se réinvestissent bientôt au taux plus bas. Sous la baisse d'un point et demi, le plan aux obligations plus courtes ne gagne qu'environ $14,000 en 2027 et finit à $261,000, contre $366,000 pour le plan aux obligations longues.

Aucun placement ne gagne donc dans tous les cas, et le choix porte sur le risque que vous préférez porter :

- **Contre la hausse des taux :** des fonds obligataires plus courts, des liquidités, et des obligations détenues jusqu'à l'échéance, qui ne peuvent pas être forcées à une perte si vous pouvez attendre la date.
- **Contre la baisse des taux :** des obligations longues, et des obligations individuelles ou des annuités qui verrouillent le taux d'aujourd'hui pour des années, et qui continuent de le payer après une baisse.

Une échelle d'obligations individuelles, qui arrivent à échéance une année après l'autre, se place entre les deux. Chaque année, un barreau arrive à échéance et est réinvesti aux taux du moment, si bien que l'échelle ne verrouille jamais tout son argent à un seul taux et n'a jamais à vendre une obligation avant sa date. Passez d'un plan à l'autre sur le [[term:canvas]] et posez une hausse et une baisse sur chacun dans Transformations, pour voir le compromis par vous-même.

## Ce que le choc laisse de côté {#what-the-shock-leaves-out}

Le choc de taux déplace les rendements et rien d'autre, et trois choses qu'il laisse de côté comptent pour la planification.

**L'inflation ne bouge pas.** Quand les taux montent parce que l'inflation a monté, comme en 2022, les prix montent aussi, et les dépenses de Morgan montent avec eux. Le choc relève ce que rapportent les obligations et les liquidités, mais il laisse l'inflation du plan là où elle était. Sur une longue hausse, cela fait ressembler les rendements plus élevés à un gain pur, alors que dans la vie réelle une grande part du rendement supplémentaire serait dépensée en prix plus élevés. Pour mettre les deux sous tension ensemble, ajoutez le choc ici et relevez la croissance de vos dépenses, comme le montre [L'inflation dans votre plan](/learn/inflation_on_your_plan).

**Les prêts immobiliers et les autres emprunts ne sont pas réévalués.** Un prêt immobilier à taux fixe garde son taux quoi que fasse le marché, et c'est pourquoi un foyer qui a verrouillé un taux bas est protégé d'une hausse. Un emprunt à taux variable, une ligne de crédit sur la [[term:home-equity|valeur nette du logement]], ou un nouveau prêt immobilier pris après une hausse, coûte plus cher. Une baisse est l'occasion de renégocier. Rien de tout cela n'est un rendement sur un placement, donc le choc n'y touche pas. Un emprunt dans votre plan garde les paiements que vous avez saisis.

**Toutes les échéances bougent ensemble.** Le choc déplace les taux courts et les taux longs du même montant. Les mouvements réels sont rarement aussi nets. Les taux courts bougent souvent davantage que les taux longs quand la Fed agit, et les taux longs peuvent monter pendant que les taux courts baissent. Le choc est une seule question, claire, plutôt qu'une prévision de la façon dont la courbe des taux va se plier.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Référence — les durations et les sensibilités des actions que le choc utilise</summary>
<div class="lesson-reference-body">

| Catégorie | Duration (années) |
|---|---:|
| Marché monétaire | 0.1 |
| Certificat de dépôt | 0.5 |
| Trésor à court terme | 2.3 |
| Obligation d'entreprise à court terme | 2.7 |
| Obligations à haut rendement | 3.2 |
| Trésor à moyen terme | 5.2 |
| TIPS | 6.8 |
| Obligations internationales | 7.0 |
| Obligation d'entreprise à long terme | 12.8 |
| Trésor à long terme | 14.5 |

Les obligations internationales ne subissent que la moitié d'un mouvement des taux américains, parce que les taux étrangers ne suivent les taux américains qu'en partie. Les [[term:tips|TIPS]] ne subissent que la moitié d'un mouvement tiré par l'inflation, parce qu'une part de ce mouvement est une inflation attendue plus élevée, que les TIPS sont conçues pour absorber.

| Catégorie | Baissent aussi (par point) | Tiennent (par point) |
|---|---:|---:|
| Fonds d'actions américaines | −6% | 0 |
| Actions des marchés développés | −5% | 0 |
| Actions des marchés émergents | −6% | 0 |
| Immobilier | −8% | −3% |

Les durations sont arrondies à partir du fonds de référence de chaque catégorie. Les chiffres des actions sont arrondis à partir de 2022 et de 1994. Les deux sont des approximations, destinées à donner à chaque effet une ampleur et un sens raisonnables.

</div>
</details>
