<!--
tutilis-return: lessons/sequence_of_returns_crash_timing/prose/fr.md
tutilis-locale: fr translated
-->
# Quand survient le krach

Jordan a 60 ans et prévoit de prendre sa retraite en 2031, à 65 ans. Il y a $1.34 million d'épargne : $900,000 dans un [[term:401k|401(k)]], $400,000 dans un [[term:brokerage]] et $40,000 sur un compte de marché monétaire. L'argent investi est réparti environ 70/30 entre un fonds indiciel S&P 500 et un fonds d'obligations du Trésor à échéance intermédiaire, dans les deux comptes. Les dépenses sont de $72,000 par an en dollars d'aujourd'hui, et la Social Security commence à 67 ans.

Jordan a lu que le krach à craindre est celui qui arrive juste au moment où les salaires s'arrêtent. Avant la retraite, une baisse du marché est quelque chose que l'on peut laisser passer. Après, les dépenses de chaque année doivent être vendues à partir de ce que vaut le portefeuille cette année-là, et les parts vendues au plus bas ne participent jamais à la reprise. C'est le [[term:sequence-of-returns|risque de séquence des rendements]] : les mêmes rendements, dans un ordre différent, laissent à un retraité une somme d'argent différente.

Deux défenses reviennent dans chaque conversation sur le sujet. La première consiste à détenir une large réserve de liquidités, quelques années de dépenses en marché monétaire, et à en vivre pendant un krach au lieu de vendre des actions. La seconde consiste à détenir un peu moins d'actions et à adopter une règle sur ce qui est vendu chaque année. Cette leçon teste les deux sur le même ménage, avec un vrai krach placé à chaque année de 2027 à 2046.

Elle ouvre trois plans qui partent du même $1.34 million :

- [70/30](#canvas-dossier:sor_seventy_thirty) est le plan de Jordan tel qu'il est. Les retraits proviennent de chaque position en proportion de sa taille.
- [Réserve de liquidités](#canvas-dossier:sor_cash_reserve) déplace $200,000 du compte-titres vers le marché monétaire, de sorte que la réserve détient $240,000, soit environ trois ans de dépenses à la retraite. Tout le reste est inchangé.
- [60/40 rééquilibré](#canvas-dossier:sor_sixty_forty_rebalanced) répartit l'argent investi 60/40 et règle la stratégie de retrait **Rééquilibrage glissant** sur une cible constante.

Les deux défenses détiennent presque la même quantité d'actions. Le plan avec réserve détient $770,000 dans le fonds S&P 500 et le plan 60/40 en détient $780,000, de sorte que la comparaison oppose le fait de garer l'argent sûr en liquidités sans règle et celui de le détenir en obligations avec une règle.

## Ce que vous apprendrez {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Comment placer un krach historique dans mon plan ?** Voir [Placer un krach dans le plan](#put-a-crash-in-the-plan).
2. **Pourquoi un gros gain après une grosse perte me laisse-t-il en retrait ?** Voir [Vérifier les rendements du krach](#check-the-crashs-returns).
3. **Quelle année est la pire pour qu'un krach commence ?** Voir [Faire glisser le krach](#slide-the-crash).
4. **Quelques années de dépenses détenues en liquidités me protègent-elles lors d'un krach ?** Voir [Une réserve de liquidités](#a-cash-reserve).
5. **Comment une règle de rééquilibrage empêche-t-elle un plan de vendre des actions au plus bas ?** Voir [Moins d'actions, et une règle](#less-stock-and-a-rule).
6. **Est-ce la part d'actions plus faible ou la règle qui fait le travail ?** Voir [Quelle partie fait le travail](#which-part-does-the-work).
7. **Comment les trois plans s'en sortent-ils sur mille trajectoires de marché ?** Voir [Mille trajectoires](#a-thousand-paths).
8. **Que dit la recherche publiée sur les stratégies par seaux et le risque de séquence ?** Voir [Ce que dit la recherche](#what-the-research-says).

</div>
</aside>

## Placer un krach dans le plan {#put-a-crash-in-the-plan}

Le plan lui-même ne contient jamais de krach. Ses rendements viennent des hypothèses de croissance, qui décrivent une année moyenne et jusqu'où une année peut s'en écarter. Pour demander ce que ferait un krach précis, on en superpose un au plan dans [[nav:transforms]].

Ouvrez Transformations et dépliez **Modifications**. Sa carte Modifiables s'ouvre sur l'onglet **Global**, qui liste les hypothèses qui s'appliquent à l'ensemble du plan plutôt qu'à un seul élément. **Risque de séquence des rendements** est la dernière ligne. Sélectionnez-la :

[[img:sor-crash-modifiables|control]]

L'éditeur de modification à côté de la carte contient le krach lui-même. Activez-le, choisissez un épisode par l'année où son marché a culminé, et fixez l'année où le krach commence. Le curseur s'ouvre sur la première année de retraite, et ses repères marquent le début du plan, chaque retraite et la fin de la prévision.

[[img:sor-crash-editor|control]]

[[jump:sequence-of-returns|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.sor-risk]]

Chaque épisode rejoue l'histoire mesurée. Le fonds S&P 500 prend le rendement total réel de l'indice, année par année, de la chute jusqu'à la reprise, et le fonds du Trésor prend celui du Trésor à 10 ans. Chaque autre position suit par sa [[term:correlation]] avec ces deux-là. La crise financière mondiale rejoue six années : une petite perte, puis une chute d'environ 41%, puis un rebond d'environ 56%, et trois autres bonnes années.

Rien dans le plan ne change. Transformations montre le plan tel qu'il a été rédigé d'un côté et le plan avec le krach de l'autre. Sur le graphique du bilan, les années de krach sont ombrées en rouge le long de l'axe des années, de sorte que l'on voit toujours où se situe le krach. Voici la comparaison de bilan de Transformations pour le plan 70/30, avec le krach là où l'éditeur le place d'abord, à partir de 2031. Le plan tel qu'il a été rédigé est à gauche sous *Original*, le plan avec le krach est à droite sous *Modifié*, et les deux côtés partagent une même échelle, comme dans l'application :

[[img:sor-crash-balance-sheet-7030]]

Du côté Modifié, le patrimoine net chute de près d'un tiers en 2032, la deuxième année de retraite de Jordan, et ne retrouve son niveau de 2031 qu'en 2036. Les deux côtés ne se rejoignent plus. En 2057, le plan avec le krach se termine environ $670,000 en dessous du plan qui n'en a pas.

## Vérifier les rendements du krach {#check-the-crashs-returns}

Un krach est plus facile à craindre qu'à mesurer, et les rendements annuels qu'il rejoue peuvent tromper l'œil. Tutilis les montre élément par élément dans le contrôle **Rendements réalisés**, qui s'ouvre depuis ce bouton de la barre d'outils du graphique de bilan :

[[img:sor-crash-bs-toolbar]]

Le bouton est sur le graphique dans le Prévisionniste et des deux côtés de Transformations. Appuyez dessus du côté Modifié pour voir les rendements qui contiennent le krach.

[[jump:return|output__forecaster__forecaster.forecast-detail__bs-chart__bs-chart.return-check]]

Le contrôle liste chaque position, et chaque flux de trésorerie qui croît, avec ce qu'il a rapporté chaque année de la prévision. Sélectionnez une ligne et ses rendements sont tracés année par année sous la liste, avec les années de krach ombrées sur l'axe. En dessous, la bande **Croissance de 1** part d'une unité d'argent à l'année sélectionnée et la capitalise à travers les rendements qui suivent. Ses boutons fixent combien d'années suivre, et **Krach** suit exactement les années que la superposition rejoue. Les jointures entre les trois parties en replient une d'un clic, ou déplacent la limite quand on la fait glisser, lorsque vous voulez plus de place pour les autres.

Voici le fonds S&P 500 dans le compte-titres de Jordan, avec la crise financière mondiale commençant en 2030 :

[[img:sor-crash-returns-gfc]]

Le graphique des rendements fait ressembler le krach à un échange équitable. Le fonds perd environ 41% en 2031 et gagne environ 56% en 2032, de sorte que le gain paraît plus grand que la perte. La bande Croissance de 1 dit le contraire. Un dollar au début de 2030 vaut 56 cents après la chute, et le gain de 56% ne le remonte qu'à environ 88 cents. Un gain est un pourcentage de ce qui reste, et après une perte de 41% il reste beaucoup moins sur quoi il puisse agir. Il faut attendre 2033, la quatrième année du krach, pour que le dollar soit de nouveau entier.

Le Grand Krach de 1929 fait le même constat avec plus de force. Le voici commençant en 2031, l'année de retraite de Jordan :

[[img:sor-crash-returns-1929]]

Les rendements annuels paraissent presque réjouissants après les trois premières années. Il y a un gain de 140% en 2034 et deux autres gains de plus de 50% plus tard. En moyenne, année par année, les seize années rejouées rapportent environ 9% par an, ce qui est mieux que l'attente ordinaire du fonds. La bande Croissance de 1 raconte la vraie histoire. Les trois premières années font descendre un dollar à environ 21 cents, l'année à 140% ne le ramène qu'à environ 52 cents, et le dollar ne repasse 1.0 qu'en 2045, la quinzième année du krach. Seize années qui font en moyenne 9% par an laissent le dollar à environ 1.28, là où les rendements ordinaires du fonds l'auraient fait croître jusqu'à environ 2.6.

C'est le piège quand on lit un graphique de rendements annuels. De larges oscillations vers le haut et vers le bas semblent s'annuler, et les grandes années de reprise semblent plus que payer les pertes. Ce n'est pas le cas, parce que les pertes et les gains se multiplient au lieu de s'additionner. Un retraité vend aussi pendant ces années, de sorte que l'argent vendu près du plus bas n'est pas là du tout pour la reprise. C'est pourquoi le reste de cette leçon mesure les krachs par ce qu'ils font au patrimoine net, et pourquoi la bande mérite un regard chaque fois que vous en testez un.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de maths — pourquoi un gain de 56% n'annule pas une perte de 41%</summary>
<div class="lesson-math-body">

La croissance multiplie, de sorte qu'une suite de rendements annuels \(r_t\) transforme un dollar en

\[
G = \prod_t (1 + r_t)
\]

Dans le rejeu de la crise financière mondiale, le dollar est à environ 0.56 après la chute, et \(0.56 \times 1.56 \approx 0.88\).

Après une perte \(L\), le gain \(g\) qui revient à l'équilibre résout \((1-L)(1+g) = 1\) :

\[
g = \frac{L}{1-L}
\]

C'est 69% après une perte de 41%, 100% après une perte de 50% et 400% après une perte de 80%.

La moyenne qui décrit la croissance est la moyenne géométrique, \(G^{1/n} - 1\). Les seize années de 1929 font en moyenne environ 9% par an additionnées année par année, mais \(1.28^{1/16} - 1 \approx 1.6\%\) par an en capitalisation. Les rendements ordinaires du fonds se capitalisent à \(2.6^{1/16} - 1 \approx 6.2\%\). La leçon [Risque et rendement](/learn/risk_and_return) donne la règle empirique pour cet écart : la [[term:geometric-mean|moyenne géométrique]] se situe environ une demi-variance en dessous de la moyenne arithmétique.

</div>
</details>

## Faire glisser le krach {#slide-the-crash}

L'année de début est la commande qui rend cette analyse utile. Ouvrez [[nav:bs-table]] sur la dernière année de la prévision, 2057, et laissez-la là. Puis déplacez le début du krach d'une année à la fois et regardez la ligne de patrimoine net en haut du tableau.

[[jump:net-worth|output__forecaster__forecaster.forecast-detail__bs-table__line.bs.net-worth]]

Voici les patrimoines nets de fin de prévision sur la trajectoire [[term:gmf|GMF]], la prévision qui prend le rendement attendu de chaque année, avec la crise financière mondiale commençant chaque année :

| Début du krach | 70/30 | Réserve de liquidités | 60/40 rééquilibré |
|---|---:|---:|---:|
| Sans krach | $3.10M | $2.56M | $2.65M |
| 2027 | $2.63M | $2.17M | $2.60M |
| 2029 | $2.54M | $2.11M | $2.52M |
| **2030** | **$2.41M** | **$2.03M** | **$2.48M** |
| 2031 | $2.43M | $2.04M | $2.48M |
| 2033 | $2.52M | $2.11M | $2.50M |
| 2038 | $2.59M | $2.16M | $2.54M |
| 2045 | $2.65M | $2.21M | $2.51M |

Dans chaque plan, la pire année pour faire commencer le krach est 2030, et non 2031. L'éditeur s'ouvre sur l'année de retraite, mais la perte profonde de cet épisode est sa *deuxième* année. Le faire commencer en 2030 place cette perte sur 2031, la première année où Jordan vit du portefeuille. Un krach qui frappe en 2027 coûte encore de l'argent, mais Jordan perçoit un salaire pendant la chute et le rebond, et ne vend rien au plus bas. Un krach en 2045 tombe sur un portefeuille qui a déjà eu des années pour croître et que la Social Security aide à soutenir.

Il vaut la peine de faire glisser le krach pour chaque épisode que vous testez, plutôt que de faire confiance au réglage par défaut. La pire année de début est celle qui aligne la pire année de l'épisode avec la première année de retraits, et cela dépend de la forme de l'épisode.

## Une réserve de liquidités {#a-cash-reserve}

Le plan [Réserve de liquidités](#canvas-dossier:sor_cash_reserve) est la défense la plus intuitive, et dans cette analyse c'est la plus faible des trois.

La première raison apparaît sans aucun krach. Le marché monétaire rapporte moins que les actions ou les obligations, et $200,000 de cet argent se capitalisent plus lentement pendant 26 ans. Sans krach, le plan se termine à $2.56 million contre $3.10 million pour le 70/30. La réserve est une assurance, et cet écart en est la prime, payée chaque année, qu'un krach arrive ou non.

La deuxième raison est que la réserve ne fonctionne pas comme elle est censée le faire. Voici ce que le plan vend avec le krach à son pire placement, commençant en 2030, de sorte que le plus bas tombe en 2031 :

[[img:sor-crash-sales-2031-cash]]

La réserve fournit environ $21,000 des $91,000 de ventes de l'année, et environ $37,000 de fonds S&P 500 sont encore vendus au plus bas. Les retraits du plan sont au prorata, de sorte qu'il vend une tranche de tout. Rien ne lui dit que les liquidités sont destinées aux mauvaises années. À titre de comparaison, le plan [70/30](#canvas-dossier:sor_seventy_thirty) vend environ $46,000 d'actions la même année :

[[img:sor-crash-sales-2031-7030]]

Ce n'est pas une bizarrerie du logiciel. Une réserve n'aide que si quelqu'un décide, au milieu d'un krach, que c'est l'année de s'en servir, et continue de le décider chaque année jusqu'à ce que le marché se rétablisse. Quelqu'un doit aussi décider quand la remplir de nouveau. Tutilis n'a pas de règle de ce genre, et le retraité doit lui aussi en écrire une. Sans elle, une réserve n'est qu'une position à faible rendement.

## Moins d'actions, et une règle {#less-stock-and-a-rule}

Le plan [60/40 rééquilibré](#canvas-dossier:sor_sixty_forty_rebalanced) détient un peu moins d'actions et porte une règle. Sa stratégie de retrait est le **Rééquilibrage glissant**, réglé sur une cible constante 60/40. Chaque année, le plan compare ses parts d'actions, d'obligations et de liquidités à la cible. Quand il a besoin d'argent, il vend ce qui se trouve *au-dessus* de la cible, et quand il lui reste de l'argent, il achète ce qui se trouve en dessous.

Lors d'un krach, la part d'actions tombe sous sa cible et la part d'obligations monte au-dessus. La règle paie alors l'année avec les obligations, sans que personne ne décide quoi que ce soit :

[[img:sor-crash-sales-2031-6040]]

Aucun fonds S&P 500 n'est vendu en 2031. Toute l'année vient des fonds du Trésor, chaque ligne marquée *Rééquilibrage glissant*. C'est ce que la réserve de liquidités était censée faire, et ici cela se produit automatiquement.

Le tableau de la section précédente montre ce que cela vaut. Le krach le plus mal placé coûte au plan 70/30 environ $690,000 de son patrimoine net final et au plan avec réserve environ $540,000. Il coûte au plan 60/40 rééquilibré environ $180,000. La colonne du plan rééquilibré bouge à peine, où que soit placé le krach. Lorsque l'année profonde du krach tombe sur la retraite, le krach commençant en 2030 ou en 2031, il termine devant les deux autres plans. Avec le krach commençant en 2029, il termine juste derrière le plan 70/30.

## Quelle partie fait le travail {#which-part-does-the-work}

Le plan 60/40 a changé deux choses à la fois : moins d'actions, et la règle. Vous pouvez les séparer dans Transformations. Activez le krach pour le plan [60/40 rééquilibré](#canvas-dossier:sor_sixty_forty_rebalanced), puis sélectionnez **Mouvements de fonds** et remettez-le sur **Au prorata**. Relisez 2057.

[[img:sor-crash-modifiables-sell-invest|control]]

*Transformations → Modifiables sur le plan 60/40, avec Mouvements de fonds sélectionné. Cette ligne est la stratégie de retrait. La régler sur Au prorata désactive la règle de rééquilibrage et laisse en place la part d'actions plus faible.*

[[jump:withdrawal-order|modifiable]]

Avec le krach commençant en 2030 et des retraits au prorata, le plan 60/40 se termine à environ $2.33 million. C'est en dessous des $2.41 million du plan 70/30. Sur cette trajectoire, la part d'actions plus faible, à elle seule, n'a rien acheté. La règle a fait le travail, parce qu'elle a empêché le plan de vendre des actions au plus bas.

<details class="lesson-advanced">
<summary class="lesson-advanced-label">Sujet avancé — reproduire le tableau depuis la ligne de commande</summary>
<div class="lesson-advanced-body">

Chaque nombre de cette leçon vient de `engine-cli`, qui prend le même krach sous la forme d'une paire d'options. Voici la pire cellule du plan 70/30 dans le tableau :

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.balance-sheet --sample sor_seventy_thirty --this-year 2026 --year 2057 --overlay global-financial-crisis-2007 --overlay-start 2030 --format md"
```

Changez `--overlay-start` pour faire avancer le krach au fil des années. Ajoutez `--residual pro-rata` à la commande du plan 60/40 pour désactiver la règle, ce que fait dans l'application la modification de stratégie résiduelle.

Le contrôle Rendements réalisés a un tableau à lui. Ceci imprime les rendements de chaque élément pour le rejeu de 1929, avec une colonne de croissance sur les seize années de krach qui correspond à la bande Croissance de 1 :

```
kotlin/gradlew -p kotlin :engine-cli:run --args="artifacts get forecast.item-returns --sample sor_seventy_thirty --this-year 2026 --overlay great-crash-1929 --overlay-start 2031 --year 2031 --window 16 --format md"
```

</div>
</details>

## Mille trajectoires {#a-thousand-paths}

Tout ce qui précède utilisait une seule trajectoire : les rendements attendus chaque année, sauf pendant le krach. La [[term:monte-carlo|simulation de Monte-Carlo]] exécute mille trajectoires dont les rendements sont tirés au hasard, et la superposition du krach s'applique à chacune d'elles. Les années de krach sont les mêmes partout, et chaque autre année varie.

Sans krach, les trois plans réussissent sur 96%, 98% et 98% des trajectoires. Le patrimoine net final médian du plan 60/40 rééquilibré est à environ $100,000 près de celui du plan 70/30, et son résultat du dixième défavorable est meilleur d'environ $220,000. Sur de nombreuses trajectoires, un 60/40 rééquilibré coûte beaucoup moins que la trajectoire unique ne le suggérait.

La crise financière mondiale déplace à peine ces taux de réussite, et elle peut même les relever légèrement. La superposition rejoue le rebond aussi bien que la chute, et six années au chemin connu, pleinement rétabli, remplacent six années qui auraient pu aller n'importe où. Un krach qui se rétablit à l'intérieur de la superposition n'apparaît pas comme un échec.

L'épisode qui sépare les plans est le Grand Krach de 1929. Il rejoue seize années, avec une chute de près de 80% et une reprise longue et irrégulière. Placé à la retraite de Jordan en 2031, la réussite tombe à environ 52% pour le 70/30 et à environ 63% pour la réserve de liquidités. Le plan 60/40 rééquilibré réussit encore sur environ 75% des trajectoires. Le même partage 60/40 avec des retraits au prorata réussit sur environ 63%. Dans un krach aussi profond et aussi long, la part d'actions plus petite et la règle gagnent toutes deux leur place.

## Ce que dit la recherche {#what-the-research-says}

Ces résultats concordent avec les travaux publiés sur la question.

Javier Estrada, dans *The Bucket Approach for Retirement: A Suboptimal Behavioral Trick?* (2018), a testé des stratégies par seaux sur 115 ans de données provenant de 21 pays. Elles ont fait moins bien que de simples allocations statiques rééquilibrées après chaque retrait, et leurs taux d'échec ressemblaient à ceux d'un portefeuille d'environ 90% d'actions. Une stratégie par seaux déplace l'argent des actions vers les obligations, puis vers les liquidités, mais jamais dans l'autre sens, de sorte qu'elle n'achète jamais d'actions quand les actions sont bon marché. Le rééquilibrage, lui, le fait.

Wade Pfau et Michael Kitces, dans *Reducing Retirement Risk with a Rising Equity Glide Path* (Journal of Financial Planning, 2014), ont montré que le risque de séquence se concentre dans les années autour de la date de retraite. Un portefeuille qui détient moins d'actions à la retraite et en ajoute ensuite a survécu plus souvent qu'un portefeuille qui détenait une part constante et plus élevée. C'est le même constat que celui du curseur : les années autour de la date de retraite sont celles qu'il faut protéger.

Un seau a tout de même un argument en sa faveur. Il donne à un retraité inquiet une histoire qui rend plus facile de ne pas vendre d'actions lors d'un krach, et le comportement compte pour une large part dans la façon dont les retraités s'en sortent réellement. Une règle de rééquilibrage écrite fait la même promesse avec moins d'argent garé en liquidités, et elle retire la décision que le seau laisse ouverte.

## Ce que ceci ne peut pas vous dire {#what-this-cannot-tell-you}

Cette analyse a des limites, et elles comptent pour savoir jusqu'où lui faire confiance.

- **Le rééquilibrage glissant n'échange que l'argent de l'année.** Il vend les positions en surpoids quand le plan a besoin d'argent et achète celles en sous-poids quand il lui reste de l'argent. Il ne vend pas d'obligations pour acheter des actions une année sans retrait net, et il n'achète que dans les comptes imposables. Un rééquilibrage annuel complet, comme dans l'étude d'Estrada, achèterait aussi des actions à l'intérieur du 401(k) après un krach.
- **Il n'existe pas de règle pour « utiliser les liquidités lors d'une année de baisse ».** Tutilis ne peut pas encore modéliser une réserve qui n'est dépensée que lorsque le marché a baissé et qui est rechargée lorsqu'il se rétablit. Un ménage qui suivrait une telle règle avec fidélité peut faire mieux que le plan avec réserve présenté ici.
- **Les krachs sont des rejeux.** Chaque épisode répète exactement une trajectoire historique. Le prochain krach ne ressemblera à aucun d'eux, et l'[[term:inflation]] n'est pas rejouée, ce qui sous-estime l'épisode de 1973 en particulier.
- **Un seul ménage.** Un plan qui s'appuie plus lourdement sur son portefeuille, ou qui dispose d'une pension couvrant la plupart de ses dépenses, ressentira le calendrier plus ou moins que celui de Jordan.

## À retenir {#what-to-take-away}

- Les rendements annuels cachent ce qu'un krach coûte. Un gros gain après une grosse perte ne l'annule pas, parce qu'un gain ne fait croître que ce qui reste. Lisez la bande Croissance de 1 dans le contrôle Rendements réalisés pour voir ce que le krach a réellement fait à chaque dollar.
- Le risque de séquence porte sur le calendrier. Un krach fait le plus de dégâts lorsque sa pire année tombe sur les premières années de retraits. Faites glisser le krach dans Transformations, gardez le bilan sur la dernière année, et trouvez, pour chaque épisode, l'année de début qui fait le plus mal.
- Une réserve de liquidités sans règle sur le moment de la dépenser est une position à faible rendement. Elle coûte de l'argent chaque année et fait peu lors du krach pour lequel elle a été constituée.
- Une règle permanente, qui consiste à vendre ce qui est en surpoids, fait automatiquement le travail qu'une réserve est censée faire, et elle continue de racheter des actions à mesure que le marché se rétablit.
- Retirer un peu de risque aide surtout lors des krachs profonds et longs. Associé à une règle, cela a donné à Jordan le meilleur résultat dans presque chaque test de krach présenté ici, pour un coût modeste dans un marché ordinaire.
