<!--
tutilis-return: lessons/safer_approaching_retirement/prose/fr.md
tutilis-locale: fr translated
-->
# Réduire le risque avant la retraite

Morgan a 63 ans et compte prendre sa retraite en 2028, à 65 ans. Il y a 1,5 million de dollars d'épargne : 1 million de dollars dans un [[term:ira|IRA]] [[term:traditional]], 450 000 $ sur un [[term:brokerage]] et 50 000 $ sur un compte de marché monétaire. L'argent investi est réparti à peu près 80/20 entre un fonds indiciel S&P 500 et un fonds de bons du Trésor à moyen terme. Morgan gagne 120 000 $ par an jusqu'à la retraite, dépense 84 000 $ par an en dollars d'aujourd'hui et demande la Social Security à 67 ans.

Le conseil habituel, pour quelqu'un dans la situation de Morgan, est de devenir plus prudent à l'approche de la date de retraite. Les conseillers entendent par là plusieurs choses différentes : détenir moins d'actions, construire une échelle d'obligations ou de TIPS, acheter une [[term:annuity]], garder un fonds d'urgence plus important et s'appuyer sur une pension s'il y en a une. Cette leçon montre que tous ces mouvements font la même chose. Chacun déplace de l'argent vers le cash sur le graphique **Risque vs rendement**, vers le bas et vers la gauche, et abandonne une part du rendement attendu pour y arriver.

Elle ouvre trois plans pour le même épargnant, avec les mêmes 1,5 million de dollars :

- [Reste à 80/20](#canvas-dossier:safer_stays_eighty_twenty) est le portefeuille de Morgan tel qu'il est, maintenu à 80/20 pendant la retraite.
- [Descend](#canvas-dossier:safer_moves_down) réorganise l'IRA avant la retraite. Il détient moins d'actions et ajoute des [[term:tips|TIPS]] et des bons du Trésor à court terme, de sorte que l'ensemble du portefeuille est d'environ 55/45. Le compte-titres est laissé tel quel, pour ne rien vendre avec une plus-value imposable.
- [Plancher de rente](#canvas-dossier:safer_income_floor) utilise 300 000 $ de l'IRA pour acheter une rente de revenu qui verse 2 050 $ par mois à vie à partir de 65 ans. Le reste du portefeuille reste à 80/20.

Les trois plans suivent la même règle pour ce qu'ils vendent. Chacun maintient une allocation cible constante avec la stratégie de retrait **Rééquilibrage glissant**. Elle [[term:rebalance|rééquilibre]] en retirant, en vendant ce qui se trouve au-dessus de sa cible lorsque le plan a besoin d'argent. La leçon [Le moment d'un krach](/learn/sequence_of_returns_crash_timing) montre pourquoi cette règle compte, elle est donc tenue fixe ici, et seule la quantité de risque change.

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Pourquoi les années juste avant la retraite appellent-elles moins de risque ?** Voir [Pourquoi les dernières années comptent](#why-the-last-years-matter).
2. **Où mon portefeuille se place-t-il sur le graphique de risque, et qu'est-ce qui le déplace ?** Voir [Lire le graphique de risque](#read-the-risk-chart).
3. **Que coûte le fait de détenir moins d'actions, et qu'est-ce que cela achète ?** Voir [Descendre sur le graphique](#moving-down-the-chart).
4. **En quoi une poche sûre aide-t-elle lors d'un long krach ?** Voir [Quelque chose de sûr à vendre](#something-safe-to-sell).
5. **Où se place une rente de revenu, et que coûte-t-elle ?** Voir [Un plancher de revenu](#an-income-floor).
6. **L'un de ces mouvements est-il vraiment sûr ?** Voir [Rien n'est entièrement sûr](#nothing-is-fully-safe).
7. **Où se placent les dividendes, le cash, les pensions et les échelles d'obligations ?** Voir [D'autres mouvements, le même axe](#other-moves-same-axis).
8. **Que dit la recherche de Wade Pfau sur la construction d'un plancher sûr ?** Voir [Ce que dit la recherche](#what-the-research-says).

</div>
</aside>

## Pourquoi les dernières années comptent {#why-the-last-years-matter}

Les années autour de la date de retraite sont celles où une baisse du marché fait le plus de dégâts. Avant la retraite, un salaire couvre les dépenses et un krach est quelque chose que l'on peut attendre. Après, les dépenses de chaque année doivent venir de la vente de quelque chose, et les parts vendues près du creux d'un krach ne participent jamais à la reprise. C'est le [[term:sequence-of-returns|risque de séquence des rendements]], et la leçon [Le moment d'un krach](/learn/sequence_of_returns_crash_timing) le mesure en détail.

Vous pouvez regarder cela se produire dans le plan de Morgan en y plaçant un krach historique. Le plan lui-même ne contient jamais de krach, parce que ses rendements viennent d'hypothèses de croissance qui décrivent une année moyenne. Un krach précis est posé sur le plan dans [[nav:transforms]]. Ouvrez Transformations, dépliez **Modifications** et sélectionnez **Krachs/Risque SOR**, la dernière ligne de l'onglet **Global** :

[[jump:sequence-of-returns|modifiable]]

[[img:safer-sor-modifiables|control]]

Activez-le dans l'éditeur à côté de la carte, choisissez l'épisode 2007, la crise financière mondiale, et déplacez l'année de début à 2027. Le curseur s'ouvre sur l'année de retraite de Morgan, 2028, et cette section porte sur l'année d'avant :

[[img:safer-sor-editor-gfc|control]]

Transformations dessine maintenant le plan deux fois. Regardez la comparaison de bilan, avec le plan tel qu'il est rédigé sous *Original* et le plan avec le krach sous *Modifié*, sur une échelle commune :

[[img:safer-bs-gfc-8020]]

*Reste à 80/20 avec la crise financière mondiale à partir de 2027. Les années de krach sont marquées sur l'axe des années du côté Modifié.*

En 2027, Morgan touche encore un salaire, et la petite perte de la première année de la crise se voit à peine. Sa profonde deuxième année tombe en 2028, la première année où Morgan vit du portefeuille, et le patrimoine net passe d'environ 1,58 million de dollars à environ 1,04 million de dollars. Il ne retrouve son niveau de 2027 qu'en 2032, et il ne rattrape jamais le plan qui n'a pas eu de krach.

Pour prendre du recul, passez l'épisode à 1929 et laissez le début en 2027 :

[[img:safer-bs-1929-2027-8020]]

*Reste à 80/20 avec le Grand Krach de 1929 à partir de 2027.*

La crise financière mondiale se rétablit dans les six années qu'elle rejoue. Le Grand Krach en rejoue seize, et il fait passer le plan à 80/20 de 1,5 million de dollars au départ à environ 460 000 $ à la fin de 2029. Le portefeuille ne se rétablit jamais, et le plan se retrouve à court d'argent en 2046. La section [Quelque chose de sûr à vendre](#something-safe-to-sell) revient sur cet épisode et y met à l'épreuve les plans plus prudents. Revenez à 2007 avant de continuer.

Gardez maintenant le krach activé et déplacez son année de début. Ouvrez [[nav:bs-table]] sur 2055, la dernière année de la prévision, et suivez la ligne de patrimoine net du côté Modifié pendant que le curseur bouge. Le krach reste en vigueur lorsque vous changez de plan avec les puces au-dessus du canevas, vous pouvez donc lire la colonne de chaque plan sans le remettre en place. Voici le patrimoine net final pour les années de début qui méritent un regard :

| Début du krach | Reste à 80/20 | Descend | Plancher de rente |
|---|---:|---:|---:|
| Pas de krach | 1,88 M$ | 1,47 M$ | 1,81 M$ |
| **2027** | **1,25 M$** | **1,13 M$** | **1,32 M$** |
| 2028 | 1,26 M$ | 1,13 M$ | 1,34 M$ |
| 2029 | 1,29 M$ | 1,16 M$ | 1,37 M$ |
| 2030 | 1,32 M$ | 1,18 M$ | 1,39 M$ |
| 2033 | 1,38 M$ | 1,20 M$ | 1,42 M$ |

Le pire début, dans chaque plan, est 2027, l'année avant la retraite, parce qu'il place l'année la plus profonde de la crise sur la première année sans salaire. Les débuts plus tardifs font encore mal, et un peu moins chaque année, parce que le portefeuille a eu plus de temps pour croître et que la Social Security, qui commence en 2030, porte une plus grande part des dépenses. À son pire placement, le krach coûte au plan à 80/20 environ un tiers de son patrimoine net final.

Les conseillers ne peuvent pas voir venir le prochain krach, ils réduisent donc les dégâts qu'il peut faire pendant ces quelques années. Il y a deux façons de le faire. L'une est de détenir des actifs qui ne chutent pas avec les actions, pour avoir autre chose à vendre. L'autre est d'avoir un revenu qui continue d'arriver, pour avoir moins à vendre. Chaque mouvement de cette leçon fait l'un, l'autre, ou les deux.

## Lire le graphique de risque {#read-the-risk-chart}

Tutilis dessine le risque du portefeuille sur un seul graphique. Ouvrez [[nav:risk]] et regardez **Risque vs rendement**. Chaque point est un élément placé selon son rendement annuel attendu, [[term:mu|μ]], sur l'axe vertical, et sa [[term:volatility|volatilité]], [[term:sigma|σ]], sur l'axe horizontal. L'étoile est l'ensemble du portefeuille. Activez la puce **Titres** pour voir chaque fonds à part.

[[jump:volatility|output__risk__line.risk.risk]]

Voici le plan [Reste à 80/20](#canvas-dossier:safer_stays_eighty_twenty) :

[[img:safer-risk-8020]]

Le fonds S&P 500 se trouve en haut à droite, avec un rendement d'environ 7,6 % et un σ d'environ 16 %. Le fonds du Trésor se trouve plus bas et plus à gauche, et le fonds de marché monétaire est le plus à gauche de tous. L'étoile est un mélange pondéré par la valeur, de sorte qu'un portefeuille à 80 % d'actions se trouve presque tout près du fonds d'actions, à un σ d'environ 12,4 % et un rendement d'environ 6,9 %.

Voici le plan [Descend](#canvas-dossier:safer_moves_down), avec le même fonds d'actions et deux nouvelles positions près du bas à gauche :

[[img:safer-risk-down]]

Le fonds de bons du Trésor à court terme se trouve à côté du cash, et le fonds de TIPS se trouve près du fonds du Trésor avec un rendement un peu plus élevé. L'étoile s'est déplacée vers le bas et vers la gauche, à un σ d'environ 8,6 % et un rendement d'environ 6,2 %. Chaque mouvement plus prudent de cette leçon est un déplacement dans cette direction. Le portefeuille abandonne une part du rendement attendu et devient, en échange, beaucoup moins volatil.

Les deux étoiles ne se déplacent pas autant sur les deux axes. Le risque baisse d'environ un tiers, tandis que le rendement attendu ne baisse que d'environ un dixième. Les positions plus sûres rapportent un peu moins que les actions, mais oscillent beaucoup moins. Elles n'évoluent pas non plus au même pas que les actions, ce que mesure la [[term:correlation]], de sorte qu'un mélange des deux oscille moins que la moyenne de leurs oscillations. La leçon [Risque et rendement](/learn/risk_and_return) explique le graphique plus en profondeur.

Si vous suivez, cliquez ensuite sur [Plancher de rente](#canvas-dossier:safer_income_floor). Les puces se transportent d'un plan à l'autre, donc Titres reste activé. Cette fois, l'étoile ne bouge pas. Elle se trouve à peu près au même risque et au même rendement que celle du plan à 80/20, parce que le portefeuille qui reste est encore à 80/20. Il est simplement plus petit, 1,2 million de dollars au lieu de 1,5 million, parce que 300 000 $ ont servi à acheter la rente. La rente est un flux de trésorerie plutôt qu'une position, donc l'étoile, qui décrit les positions, ne peut pas la voir. Activez la puce **Flux de trésorerie** pour la placer sur le graphique :

[[img:safer-risk-floor]]

La rente se trouve à l'origine. Elle n'a pas de volatilité, et un versement constant n'a pas de croissance. La Social Security se trouve à côté, sur l'axe vertical, sans volatilité et avec une croissance égale à son ajustement au coût de la vie. Le salaire et les dépenses de vie apparaissent eux aussi comme des flux de trésorerie.

Le plan de rente réduit donc le risque d'une autre façon que le plan Descend. Il sort 300 000 $ du portefeuille vers un produit proche du cash, avec presque pas de risque et presque pas de croissance, et il laisse le reste du portefeuille exactement aussi risqué qu'il l'était. Le graphique avec Flux de trésorerie activé montre les deux moitiés à la fois.

## Descendre sur le graphique {#moving-down-the-chart}

Descendre sur le graphique a un coût, et ce coût est le patrimoine attendu. Sans krach sur la trajectoire [[term:gmf|GMF]], le plan Descend finit à 1,47 million de dollars, contre 1,88 million pour le 80/20. L'argent placé en bons du Trésor se capitalise plus lentement que l'argent placé en actions, et l'écart s'accumule sur trois décennies.

<aside class="lesson-saying" data-saying="free-lunch">

Sur la trajectoire GMF, le plan Descend paie environ 410 000 $ de patrimoine final pour ses issues défavorables plus sûres. Le reste de cette section montre ce que cet argent achète.

</aside>

Ce que le mouvement achète apparaît à travers de nombreux avenirs possibles. La [[term:monte-carlo|simulation de Monte-Carlo]] parcourt un millier de trajectoires dont les rendements sont tirés au hasard. Voici les patrimoines nets finaux des deux plans, tracés sur un même axe :

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:safer-nw-8020]]

*Reste à 80/20. La dispersion est large, avec une longue queue de très bons résultats vers la droite.*

</div>
<div class="lesson-img-cell">

[[img:safer-nw-down]]

*Descend. La dispersion est plus étroite, et moins de trajectoires finissent sous zéro.*

</div>
</div>

Le plan à 80/20 réussit sur environ 83 % des trajectoires. Sa [[term:median]] de patrimoine net final est d'environ 2,12 millions de dollars, et son résultat du mauvais dixième est d'environ 500 000 $ de dette, ce qui veut dire que l'argent s'est épuisé des années avant la fin du plan. Le plan Descend réussit sur environ 90 % des trajectoires. Sa médiane est plus basse, à environ 1,78 million de dollars, mais son résultat du mauvais dixième n'est que d'environ 60 000 $ de dette.

C'est l'échange sous sa forme la plus simple. Descendre sur le graphique abandonne une part des bons résultats pour rétrécir les mauvais. Un retraité qui a déjà assez épargné se soucie bien davantage des mauvais résultats. Il n'y a pas de seconde carrière pour s'en remettre, tandis que les bons résultats changent surtout la taille de ce qui sera transmis.

## Quelque chose de sûr à vendre {#something-safe-to-sell}

Une poche sûre est précieuse parce qu'elle donne au plan quelque chose à vendre qui n'a pas chuté. La crise financière mondiale s'est rétablie en quelques années, et tout plan qui avait quelques obligations pouvait vendre celles-ci en attendant. Le Grand Krach de 1929 est l'épreuve plus dure. Son marché d'actions a chuté pendant trois ans et a mis bien plus d'une décennie à se rétablir.

Pour le placer dans le plan, retournez à **Krachs/Risque SOR** dans [[nav:transforms]], choisissez l'épisode 1929 et réglez l'année de début sur 2028, la première année de Morgan sans salaire :

[[img:safer-sor-editor-1929|control]]

Regardez d'abord la comparaison de bilan. C'est le moyen le plus rapide de se repérer dans n'importe quel krach, parce qu'elle montre le plan tel qu'il est rédigé sous *Original* à côté du plan avec le krach sous *Modifié*, sur une échelle commune, avec les années de krach ombrées sur l'axe.

[[img:safer-bs-1929-8020]]

*Reste à 80/20, tel qu'il est rédigé à gauche et avec le krach de 1929 à partir de 2028 à droite.*

[[img:safer-bs-1929-down]]

*Descend, la même comparaison.*

Sur la trajectoire GMF, le patrimoine net du plan à 80/20 passe d'environ 1,69 million de dollars à la fin de 2027 à environ 450 000 $ à la fin de 2030, une chute de près des trois quarts. Le plan Descend passe d'environ 1,68 million de dollars à environ 780 000 $, un peu plus de la moitié. Aucun des deux plans ne remonte jusqu'à sa ligne Original. Le plan à 80/20 se retrouve à court d'argent en 2046, quand Morgan a 83 ans, et le plan Descend en 2051, cinq ans plus tard.

Pour voir d'où vient la différence, ouvrez [[nav:si-table]] sur 2031. À cette date, un dollar d'actions du début de 2028 vaut environ 52 cents, même après une année de rebond de 140 %.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:safer-sales-1929-8020]]

*Reste à 80/20 en 2031. Après l'année de rebond, le fonds d'actions est revenu au-dessus de sa cible de 80 %, donc le plan le vend depuis les deux comptes.*

</div>
<div class="lesson-img-cell">

[[img:safer-sales-1929-down]]

*Descend en 2031. Le fonds d'actions est encore sous sa cible, donc aucune action n'est vendue et l'année est payée avec les bons du Trésor, les TIPS et les bons du Trésor à court terme.*

</div>
</div>

Année après année, la différence est grande :

| Plan | Premières années où il vend des actions | Actions vendues, 2028–2038 |
|---|---|---:|
| Reste à 80/20 | Un peu en 2028 et 2029, puis chaque année à partir de 2031 | environ 515 000 $ |
| Descend | Un peu en 2028, puis à partir de 2033 | environ 250 000 $ |
| Plancher de rente | Un peu en 2028 et 2029, puis chaque année à partir de 2031 | environ 340 000 $ |

Les plans à 80/20 et Descend suivent la même règle, qui vend ce qui se trouve au-dessus de sa cible. La cible du plan à 80/20 est surtout des actions, donc la première bonne année ramène les actions au-dessus d'elle, et la règle commence à vendre des actions alors qu'elles valent encore environ la moitié de ce qu'elles valaient en 2028. La cible du plan Descend détient beaucoup moins d'actions, il paie donc les cinq premières années du krach presque entièrement avec ses positions sûres, les années où les actions valaient le moins. Il vend environ 11 000 $ d'actions en 2028, lorsque la facture de l'année est plus grande que le montant dont ses positions sûres dépassent leur cible, puis plus rien du tout jusqu'en 2033. Ses fonds du Trésor n'ont pas chuté avec le marché, et ses TIPS et ses bons du Trésor à court terme ont gardé leur valeur. Lorsqu'il vend enfin des actions, il en vend moins de la moitié de ce que vend le plan à 80/20.

Le plan de rente vend des actions les mêmes années que le plan à 80/20, parce que le reste de son portefeuille est encore à 80/20. Il en vend environ un tiers de moins au total, parce que la rente paie une partie de la facture de chaque année.

Aucun des trois plans n'est sûr dans un krach aussi profond et aussi long que celui de 1929, au niveau de dépenses de Morgan. Le plan à 80/20 réussit sur environ 2 % des trajectoires avec ce krach à la retraite, et les deux autres sur environ 12 à 14 %. Les plans plus prudents échouent moins souvent, et un krach de cette sorte est une raison de prévoir des dépenses que l'on peut réduire. La leçon [Le moment d'un krach](/learn/sequence_of_returns_crash_timing) en dit plus sur la façon dont Transformations place un krach.

## Un plancher de revenu {#an-income-floor}

Une rente de revenu transforme une somme d'épargne en un salaire à vie. Le plan [Plancher de rente](#canvas-dossier:safer_income_floor) de Morgan paie 300 000 $ pour une rente achetée en 2026 qui verse 2 050 $ par mois, 24 600 $ par an, de 65 ans jusqu'au décès. C'est environ 8,2 % de la [[term:premium]] chaque année. Les devis publiés au début de 2026 pour un homme de 65 ans achetant une rente immédiate tournaient autour de 7,5 % par an, et attendre deux ans le premier versement relève le taux. Votre propre devis dépend de l'âge, du sexe, des taux d'intérêt et de l'assureur.

Dans Tutilis, une rente est un flux de trésorerie, ajouté depuis **Flux de trésorerie** comme une pension ou la Social Security.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Seulement dans l'application de bureau</summary>
<div class="lesson-desktop-only-body">

Ouvrez **Flux de trésorerie**, ajoutez une rente, et réglez le versement mensuel, l'ajustement au coût de la vie et les années pendant lesquelles elle paie. La rente de Morgan paie de 2028 jusqu'à la fin du plan, sans ajustement, donc le versement reste le même chaque année.

[[img:safer-annuity-editor|control]]

L'outil **Rente** de la barre du bas est un brouillon pour la même décision. Il compare une prime au fait de garder l'argent investi, avant que quoi que ce soit n'entre dans le plan.

</div>
</details>

Comme l'a montré [Lire le graphique de risque](#read-the-risk-chart), la rente ne déplace pas l'étoile du portefeuille. Elle se trouve à l'origine du graphique, en tant que flux de trésorerie. Le risque n'a pas disparu. Il est sorti du portefeuille pour entrer dans une promesse d'assureur.

L'effet sur le plan est différent de celui du plan Descend. Le plan de rente réussit sur environ 88 % des trajectoires, ce qui est proche de Descend. Son patrimoine net final médian est d'environ 2,01 millions de dollars, bien plus proche de celui du plan à 80/20. La rente couvre une partie des dépenses de chaque année, le plan vend donc moins, et le portefeuille restant peut garder davantage de ses actions.

Ce résultat a des conditions. La prévision suppose que Morgan vit jusqu'à 93 ans, et la rente verse davantage plus son titulaire vit longtemps. Les acheteurs qui meurent tôt laissent de l'argent dans le pool de l'assureur, et ceux qui vivent longtemps le collectent : c'est de là que vient le versement élevé. Si Morgan mourait à 70 ans, le plan aurait payé 300 000 $ pour environ 120 000 $ de revenu. Les 300 000 $ ont aussi disparu du bilan le jour de l'achat. On ne peut pas les vendre en cas d'urgence, et ils ne passent pas aux héritiers.

Le versement constant a lui aussi un coût. Les dépenses de Morgan croissent avec l'[[term:inflation]], et en 2055 elles valent environ 2,1 fois leur montant de 2028. La rente verse les mêmes 24 600 $ chaque année, donc à cette date elle achète environ la moitié de ce qu'elle achetait au départ. Une rente avec un ajustement au coût de la vie évite cela, mais commence avec un versement beaucoup plus petit.

## Rien n'est entièrement sûr {#nothing-is-fully-safe}

Chaque actif plus prudent de cette leçon porte un certain risque. Ces risques sont plus petits que le risque de détenir des actions, et ils sont d'une autre nature.

- **Une rente dépend de l'assureur.** Si l'assureur fait faillite, une association de garantie de l'État couvre les prestations de rente jusqu'à un plafond, qui dans la plupart des États est d'au moins 250 000 $ par personne et par assureur. La prime de 300 000 $ de Morgan est au-dessus de ce plafond, elle pourrait donc être répartie entre deux assureurs.
- **Une pension dépend de l'employeur et du régime.** La Pension Benefit Guaranty Corporation assure la plupart des pensions privées, mais seulement jusqu'à un plafond légal, et les pensions publiques sont garanties par leur État ou leur ville.
- **La Social Security dépend du Congrès.** Le fonds fiduciaire devrait manquer de ressources dans les années 2030, ce qu'explore la leçon [La solvabilité de la Social Security](/learn/social_security_solvency).
- **Les bons du Trésor peuvent perdre de la valeur.** Un fonds de bons du Trésor à moyen terme baisse lorsque les taux d'intérêt montent, comme en 2022, et une obligation [[term:nominal]] perd du pouvoir d'achat face à l'inflation. Les TIPS protègent contre l'inflation, mais leur prix bouge encore jusqu'à l'échéance.
- **Le cash perd face à l'inflation, lentement.** Un marché monétaire détenu pendant de nombreuses années ne rapporte guère plus que l'inflation.

L'intérêt de descendre sur le graphique est de détenir des actifs dont les risques ne sont pas ceux du marché d'actions. Dans une année où les actions chutent de 40 %, il importe beaucoup de savoir si le reste du portefeuille chute avec elles.

## D'autres mouvements, le même axe {#other-moves-same-axis}

Plusieurs autres mouvements courants sont plus faciles à juger une fois qu'on les voit sur le même graphique.

**Une échelle d'obligations** est un ensemble d'obligations qui arrivent à échéance l'une après l'autre, une pour chaque année de dépenses. Une échelle de TIPS verse chaque année un montant connu d'argent ajusté de l'inflation, tant que chaque obligation est détenue jusqu'à son échéance. Le plan Descend approche une échelle avec ses fonds de TIPS et de bons du Trésor à court terme, qui se trouvent dans le même coin du graphique. Tutilis peut détenir une obligation directement et verse son coupon chaque année, mais la prévision ne ramène pas encore le prix d'une obligation à sa valeur faciale lorsqu'elle arrive à échéance, donc une vraie échelle est montrée ici avec des fonds.

**Les actions à dividendes** sont encore des actions. Un fonds de sociétés à fort dividende se trouve près du fonds S&P 500 sur le graphique, et dans un krach les dividendes sont coupés en même temps que les prix. Les sociétés du S&P 500 ont réduit leurs dividendes d'environ un cinquième de 2008 à 2009. Un dividende ne déplace pas le portefeuille vers le cash. La leçon [Trop d'actions ? Cessez de réinvestir](/learn/too_much_equity_stop_reinvesting) montre un autre usage des dividendes : les prendre en cash au lieu de les réinvestir, ce qui abaisse lentement la part d'actions.

**Un fonds d'urgence** se trouve avec le marché monétaire tout à gauche du graphique. C'est la position la plus stable qui s'y trouve, et celle qui rapporte le moins. La leçon [Le moment d'un krach](/learn/sequence_of_returns_crash_timing) montre qu'une grande réserve de cash, sans règle sur le moment de la dépenser, fait peu dans un krach. Une règle permanente sur ce qu'il faut vendre fait davantage.

**Une pension** est une rente qui est venue avec un emploi. Si vous en avez une, vous avez déjà une partie d'un plancher de revenu, et votre portefeuille peut porter plus de risque que celui de quelqu'un qui n'en a pas.

**Retarder la Social Security** est souvent la rente la moins chère qui soit. Chaque année de report au-delà de l'âge de la retraite à taux plein relève la prestation de 8 %, et la prestation est ajustée de l'inflation. Dépenser depuis le portefeuille pour retarder la demande achète davantage de ce revenu.

## Ce que dit la recherche {#what-the-research-says}

Wade Pfau a beaucoup écrit sur cette question. Dans *Safety-First Retirement Planning* (2019) et le *Retirement Planning Guidebook* (2021, deuxième édition 2023), il décrit deux façons de penser le revenu de retraite. Une approche fondée sur les probabilités garde un portefeuille diversifié et fixe un taux de dépenses qu'il peut probablement soutenir. Une approche de sécurité d'abord construit d'abord un plancher de revenu fiable, à partir de la Social Security, des pensions, des rentes et des échelles d'obligations, assez grand pour couvrir les dépenses essentielles, puis investit le reste pour la croissance.

Pfau soutient qu'une rente de revenu peut prendre la place d'une partie d'une allocation en obligations. Les obligations et les rentes fournissent toutes deux un revenu régulier, mais la rente ajoute une mutualisation du risque, qui paie davantage à ceux qui vivent longtemps. C'est le schéma du plan Plancher de rente de Morgan, où la rente couvre une partie des dépenses et le reste du portefeuille garde ses actions.

Pfau et Michael Kitces, dans *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014), ont trouvé que le risque de séquence se concentre dans les années autour de la date de retraite. Un portefeuille qui détient le moins d'actions à la retraite et en ajoute ensuite a survécu plus souvent qu'un portefeuille qui gardait une part constante. C'est pourquoi le conseil de devenir plus prudent vise les années juste avant la date de retraite.

L'économiste Menahem Yaari a montré en 1965 qu'un retraité qui ne se soucie que de ses propres dépenses et qui fait face à une durée de vie incertaine devrait, sous des hypothèses simples, transformer toute son épargne en rentes. Peu de gens le font, ce que les économistes appellent l'énigme de la rente. Les raisons comprennent le souhait de laisser de l'argent aux héritiers, le besoin de cash en cas d'urgence, et le fait que la Social Security est déjà une grande rente ajustée de l'inflation.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Ouvrages cités — les publications derrière les chiffres</summary>
<div class="lesson-bibliography-body">

- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.
- Wade D. Pfau, *Retirement Planning Guidebook: Navigating the Important Decisions for Retirement Success*, Retirement Researcher Media, 2021 ; deuxième édition 2023.
- Wade D. Pfau et Michael E. Kitces, « Reducing Retirement Risk with a Rising Equity Glide Path », *Journal of Financial Planning*, janvier 2014.
- Menahem E. Yaari, « Uncertain Lifetime, Life Insurance, and the Theory of the Consumer », *The Review of Economic Studies*, 1965.

</div>
</details>

## Ce que ceci ne peut pas vous dire {#what-this-cannot-tell-you}

Cette analyse a des limites, et elles comptent pour savoir jusqu'où lui faire confiance.

- **La rente est un achat déjà fait.** Tutilis modélise le revenu qu'une rente verse et n'a pas d'étape pour en acheter une. Le plan commence avec les 300 000 $ déjà dépensés, et le taux de versement est une estimation plutôt qu'un devis.
- **Chaque plan ne bouge qu'une fois.** Les vrais conseillers abaissent souvent la part d'actions progressivement sur les cinq ou dix années avant la retraite, et certains la relèvent ensuite. Un plan peut le faire avec une [[term:glide-path|trajectoire d'allocation]] de plusieurs allocations cibles, mais le graphique de risque ne montre que l'endroit où se trouve le portefeuille au début de la prévision.
- **Les krachs sont des rejeux.** Chaque épisode répète une trajectoire historique. Le prochain krach aura un autre visage, et l'inflation n'est pas rejouée, ce qui compte le plus pour une rente à versement constant.
- **Un seul foyer.** Un épargnant qui a une pension, un portefeuille bien plus grand, ou des dépenses bien plus basses a besoin d'un plancher moins important que Morgan.

## À retenir {#what-to-take-away}

- Les années juste avant et juste après la retraite sont celles où un krach fait le plus de dégâts, parce que les dépenses doivent venir de la vente d'un portefeuille qui baisse. Pour Morgan, la pire année de début de la crise financière mondiale est l'année avant la retraite.
- Chaque façon courante de devenir plus prudent déplace de l'argent vers le cash sur le graphique Risque vs rendement. Moins d'actions, des TIPS, des bons du Trésor à court terme et du cash déplacent l'étoile du portefeuille vers le bas et vers la gauche. Une rente sort une partie de l'argent du portefeuille et la transforme en un revenu qui se trouve à l'origine. Toutes abandonnent une part du rendement attendu.
- Descendre sur le graphique abandonne une part des bons résultats pour rétrécir les mauvais. Pour un retraité qui a déjà assez épargné, les mauvais résultats comptent davantage.
- Une poche sûre donne à un plan quelque chose à vendre qui n'a pas chuté. Dans un long krach, elle retarde le jour où le plan doit vendre des actions à perte.
- Une rente de revenu réduit ce qu'il faut vendre, tout court. Elle coûte de la liquidité, l'argent qu'elle aurait laissé aux héritiers, et du pouvoir d'achat lorsque son versement est constant, et elle dépend de l'assureur.
- Rien n'est entièrement sûr. Les actifs plus prudents portent des risques plus petits, d'une autre nature, et c'est exactement ce qui les rend utiles à côté des actions.
