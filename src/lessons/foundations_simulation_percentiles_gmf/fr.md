<!--
tutilis-return: lessons/foundations_simulation_percentiles_gmf/prose/fr.md
tutilis-locale: fr translated
-->
# Monte Carlo, de l'étoile polaire à la dispersion

Jordan a soixante ans, compte prendre sa retraite en 2031, et a 1,34 million de dollars investis à environ 70/30 entre un [[term:401k|401(k)]], un [[term:brokerage]] et un peu de liquidités. La prévision de ce plan montre deux choses à la fois. Les graphiques tracent une seule ligne lisse au fil des années, et le Résumé de simulation à côté d'eux rapporte mille issues différentes, d'un trou profond jusqu'à des dizaines de millions de dollars.

Les deux sont la prévision, et elles répondent à des questions différentes. Cette leçon démonte la prévision de la vis jusqu'au boulon : d'où vient la ligne unique, d'où viennent les mille, l'arithmétique sous chacune, pourquoi les mille issues penchent si fort vers la droite, et ce que la méthode entière ne peut pas voir.

Deux plans sont ouverts sur le [[term:canvas]]. [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) est le plan de retraite, avec un salaire, la Social Security et des dépenses de vie. [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund), c'est 100 000 $ dans un fonds S&P 500 à l'intérieur d'un [[term:ira|IRA]] [[term:roth|Roth]], sans rien d'autre dans le plan, de sorte que la forme de ses résultats se lit sans que rien ne la brouille. Les mathématiques plus lourdes sont rangées dans les blocs d'ardoise marqués **Pour les amateurs de mathématiques**. Rien n'est caché, et la leçon se lit entièrement avec chacun d'eux fermé.

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **D'où vient Monte Carlo, et pourquoi porte-t-il le nom d'un casino ?** Voir [D'où vient Monte Carlo](#where-monte-carlo-came-from).
2. **Pourquoi un planificateur a-t-il besoin à la fois d'une prévision unique et d'un millier ?** Voir [Deux façons de lire un avenir](#two-ways-to-read-a-future).
3. **Qu'est-ce que la trajectoire de l'étoile polaire, et pourquoi est-elle construite à partir de la moyenne géométrique ?** Voir [La trajectoire de l'étoile polaire](#the-north-star-path).
4. **D'où vient chaque avenir aléatoire, et qu'est-ce qui, dans mon plan, est aléatoire ?** Voir [Un tirage par poste et par année](#one-draw-per-item-per-year).
5. **Comment les actions, les obligations et les dépenses évoluent-elles ensemble au cours d'une année simulée ?** Voir [Bouger ensemble](#moving-together).
6. **Dois-je choisir moi-même l'un de ces nombres ?** Voir [Des valeurs par défaut que vous pouvez laisser](#defaults-you-can-leave-alone).
7. **Comment lire les mille issues : percentiles, médiane, taux de réussite ?** Voir [Lire les mille avenirs](#reading-the-thousand-futures).
8. **Pourquoi la dispersion du patrimoine net est-elle asymétrique, et le serait-elle après un an ?** Voir [Pourquoi le résultat penche vers la droite](#why-the-outcome-leans-right).
9. **Une série de dix mille avenirs vaut-elle mieux qu'une série d'un millier ?** Voir [Combien d'avenirs lancer](#how-many-futures-to-run).
10. **Que peut ne pas me dire Monte Carlo ?** Voir [Ce que Monte Carlo ne peut pas voir](#what-monte-carlo-cannot-see).

</div>
</aside>

## D'où vient Monte Carlo {#where-monte-carlo-came-from}

La méthode a commencé par une réussite. En 1946, le mathématicien Stanislaw Ulam se remettait d'une maladie et passait le temps avec des cartes, et il se demanda quelle était la chance qu'une main de réussite Canfield aboutisse. La combinatoire était sans espoir. Il lui vint à l'esprit qu'il serait bien plus simple de disposer cent mains et de compter combien réussissaient.

Ulam travaillait à Los Alamos, où les problèmes difficiles portaient sur des neutrons qui traversent la matière, et il vit que le même tour s'appliquait. Avec John von Neumann, il mit au point la façon de suivre de nombreux neutrons simulés, chacun faisant des pas aléatoires, et de compter ce qui leur arrivait. Leur collègue Nicholas Metropolis suggéra le nom de code **Monte Carlo**, d'après le casino de Monaco où l'oncle d'Ulam aimait jouer. Les premières exécutions eurent lieu sur l'ordinateur ENIAC en 1948, et Metropolis et Ulam publièrent la méthode sous ce nom en 1949.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

Monte Carlo fut un nom de code avant d'être une méthode. Le travail à Los Alamos était secret, il lui fallait donc un nom qui ne disait rien à un étranger, et le nom du casino est resté parce que toute l'idée est de laisser le hasard jouer de nombreuses fois et de compter les résultats.

</div>
</aside>

La finance a repris l'idée lentement. Phelim Boyle s'en servit pour évaluer des options en 1977, et à la fin des années 1990 les logiciels de planification de la retraite avaient commencé à remplacer un rendement unique supposé par de nombreux rendements simulés. L'idée n'a pas changé depuis la réussite d'Ulam. Quand une question est trop enchevêtrée pour se résoudre par une formule, on la joue de nombreuses fois avec le hasard dans la boucle et l'on compte combien de fois chaque issue se produit.

Un plan de retraite est exactement ce genre de question. Le salaire, les dépenses, les impôts, les retraits et les rendements s'alimentent les uns les autres année après année, et il n'existe aucune formule pour « la chance que ce plan tienne ». La [[term:monte-carlo]] déroule le plan mille fois et compte.

## Deux façons de lire un avenir {#two-ways-to-read-a-future}

La prévision offre deux vues du même plan, et un planificateur a besoin des deux.

La première est une trajectoire unique, sans chance dedans. Chaque placement croît à son taux composé attendu, chaque flux de trésorerie à son taux attendu, et chaque année est une année moyenne. Tutilis appelle cela la prévision **étoile polaire**, le [[term:gmf]], et c'est la trajectoire que dessinent les graphiques de bilan et de flux de trésorerie à l'ouverture de la prévision. C'est l'**ID de prévision 0**, [[term:fid-gmf]], et l'entrée de prévision dans la bande en haut du prévisionniste affiche **Étoile polaire ✦** tant qu'elle est sélectionnée.

[[jump:fid|output__forecaster__forecaster.forecast-detail__forecast-detail.fid]]

[[img:mc-balance-sheet-jordan]]

*Le bilan de Jordan sur la trajectoire de l'étoile polaire dans [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). Le patrimoine net monte jusqu'à la retraite en 2031, se stabilise pendant un an pendant que le salaire s'arrête et que les retraits commencent, puis remonte jusqu'à environ 3 millions de dollars en 2057. Il n'y a aucune mauvaise année nulle part sur cette trajectoire.*

La vue étoile polaire est le bon outil pour les questions de type « et si ». Parce qu'elle ne contient aucun hasard, une modification du plan est la seule chose qui la déplace. Si Jordan prend sa retraite un an plus tard, dépense 5 000 $ de moins, ou passe le compte-titres en obligations, la différence sur la trajectoire de l'étoile polaire est l'effet de ce changement et rien d'autre. Elle répond *dans quel sens* un levier pousse le plan et *jusqu'où*, et elle répond en dollars exacts sur un graphique que l'on peut lire année par année. Comme les sections suivantes le montrent, la trajectoire de l'étoile polaire se situe aussi près du milieu des mille avenirs, de sorte que ses ordres de grandeur sont représentatifs.

Ce que la vue étoile polaire ne peut pas montrer, c'est le risque. Un plan qui tient sur une trajectoire moyenne peut encore échouer quand les mauvaises années arrivent tôt, et une trajectoire unique sans mauvaise année n'a aucun moyen de dire combien de fois cela arrive. Il faut pour cela la seconde vue : mille avenirs, chacun avec sa propre chance, posés côte à côte. Le risque est un énoncé sur la dispersion des issues, et seule la dispersion peut le mesurer.

Les deux vues se partagent donc le travail. Servez-vous de la trajectoire de l'étoile polaire pour comprendre le plan et pour comparer une version de celui-ci à une autre. Servez-vous des mille avenirs pour demander combien le plan peut supporter.

## La trajectoire de l'étoile polaire {#the-north-star-path}

La trajectoire de l'étoile polaire est construite à partir de la [[term:geometric-mean]] du rendement de chaque poste. La raison pour laquelle elle est construite ainsi, et non à partir de la moyenne simple, vaut quelques paragraphes, parce qu'elle explique un écart qui apparaît partout dans la prévision.

Chaque poste qui croît dans un plan porte deux nombres. Le premier est son rendement annuel moyen, noté [[term:mu]]. Le second est l'ampleur avec laquelle ce rendement varie d'une année à l'autre, sa [[term:volatility]], notée [[term:sigma]]. Ensemble, ils décrivent une loi normale, N(μ, σ), la courbe en cloche d'où est tiré le rendement annuel du poste. Le fonds S&P 500 du plan de Jordan tourne sur les chiffres du système pour les actions de grandes sociétés américaines, N(7.56%, 16.42%).

Le rendement moyen n'est pas le taux auquel un placement se capitalise. Perdez 50 % une année et gagnez 50 % l'année suivante, et le rendement moyen est nul, mais 100 $ sont devenus 75 $. Les oscillations coûtent de la croissance, et le coût augmente avec la taille des oscillations. C'est le [[term:volatility-drag]], et une bonne approximation en est la moitié du carré de la volatilité. Pour le fonds d'actions, c'est 16,42 % élevé au carré puis divisé par deux, environ 1,35 point, de sorte que le taux auquel on peut s'attendre à ce qu'il se capitalise est 7,56 % − 1,35 % = **6,21 %** par an.

Ce taux composé, μ − σ²/2, est celui auquel croît chaque poste de la trajectoire de l'étoile polaire. Le nom **GMF** signifie *geometric mean forecast*, prévision par moyenne géométrique. Sur quarante ans, l'écart avec la moyenne simple est grand, et le plan [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund) le montre sans que rien d'autre ne gêne. Ses 100 000 $ sont évalués en 2026, de sorte que la fin de **2065** représente quarante ans de croissance. Ouvrez ce plan et réglez **Année** dans la bande en haut du prévisionniste sur **2065**.

[[img:mc-balance-sheet-one-fund-2065]]

*Le graphique de bilan de [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund) sur la trajectoire de l'étoile polaire, avec 2065 sélectionné.*

Le graphique monte sans un seul creux. Chaque barre est de 6,21 % plus haute que la précédente, de sorte que les barres s'élèvent en une courbe lisse, incurvée vers le haut. Cette régularité est l'aspect d'une trajectoire sans chance. Un compte réel, et chacun des mille avenirs aléatoires, zigzague en montant.

Le tableau de bilan pour 2065 donne le nombre. L'IRA Roth, qui ne détient que le fonds S&P 500, termine l'année à environ **1,12 million de dollars**, ce qui correspond à 100 000 $ par [[term:compounding]] à 6,21 % pendant quarante ans. Capitaliser à la moyenne simple de 7,56 % à la place donnerait environ 1,85 million de dollars, deux tiers de plus, pour le même fonds sur les mêmes années.

[[img:mc-balance-sheet-table-one-fund-2065]]

*Le bilan pour 2065 dans [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund). Le tableau arrondit à 1,1 M$.*

Le tableau arrondit ses montants pour garder les colonnes étroites. Survolez la pastille ⓘ à côté de **Roth IRA** pour voir le solde de fin au dollar près.

[[img:mc-balance-sheet-row-roth-2065]]

*La ligne 2065 de l'IRA Roth, survolée. Le solde de fin est de 1 115 434 $, et la carte en dessous indique les 100 000 $ avec lesquels le fonds a commencé en 2026.*

La prévision peut tracer cette seconde trajectoire aussi. L'[[term:amf]], la *prévision par moyenne arithmétique*, fait croître chaque poste à sa moyenne simple μ. C'est une ligne facultative dans le **Résumé de simulation**, sous ses réglages **Avancé**, et elle est là comme repoussoir. Posée à côté de la trajectoire de l'étoile polaire, l'écart entre les deux est le frein de volatilité du plan entier.

[[jump:amf|output__forecaster__forecaster.simulation-summary__simulation-summary.advanced__advanced.include-amf]]

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de mathématiques — pourquoi μ − σ²/2</summary>
<div class="lesson-math-body">

Le patrimoine après \(n\) années est un produit, \(W_n = W_0 \prod_{t=1}^{n} (1 + r_t)\), de sorte que le taux qui compte est la moyenne des logarithmes, \(g = \mathbb{E}[\ln(1+r)]\). Un développement au second ordre de \(\ln(1+r)\) autour de \(\mu\) donne

\[ \mathbb{E}[\ln(1+r)] \approx \ln(1+\mu) - \frac{\sigma^2}{2(1+\mu)^2} \]

et pour des rendements de quelques pour cent, cela est proche de \(\mu - \sigma^2/2\), le taux que le moteur utilise. Il est calculé dans `GeometricMeanReturnSampler`, sous la forme `means[i] - stdDevs[i]² / 2`, sans aucun tirage aléatoire.

Pour le fonds d'actions, la forme plus précise donne 6,12 % par an et \(\mu - \sigma^2/2\) donne 6,21 %. La médiane des mille avenirs simulés croît au premier taux, de sorte que la trajectoire de l'étoile polaire se situe un cheveu **en dessous** de la médiane, du côté prudent. Sur le plan à un seul fonds, sur quarante ans, elle se classe environ 473e sur 1 000, et sur le plan de Jordan environ 492e.

La moyenne des mille croît à la moyenne simple, \(\mathbb{E}[W_n] = W_0 (1+\mu)^n\), parce que les tirages annuels sont indépendants et que l'espérance d'un produit de facteurs indépendants est le produit de leurs espérances. C'est l'AMF. La moyenne d'une distribution asymétrique n'est pas l'endroit où atterrit un résultat typique, ce qui est le sujet d'une section plus loin.

</div>
</details>

## Un tirage par poste et par année {#one-draw-per-item-per-year}

Toute prévision sauf l'étoile polaire est une prévision aléatoire. Chacun de ces mille avenirs, numérotés de 1 à 1 000, est une exécution complète du plan, année par année, le rendement de chaque poste étant tiré au hasard. Dans chaque année simulée, le moteur tire un rendement pour chaque poste dans la courbe en cloche de ce poste, N(μ, σ). Un fonds d'actions peut gagner 21 % une année et perdre 9 % la suivante. Le plan fait ensuite tout ce qu'il fait sur la trajectoire de l'étoile polaire avec ces rendements : il verse le salaire, dépense, paie les impôts, retire, rééquilibre si le plan le dit, et reporte le résultat sur l'année suivante.

Pour en voir un, restez sur le plan bleu [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund) avec **Année** à 2065, et tapez **100** dans l'entrée de prévision de la bande en haut du prévisionniste.

[[img:mc-balance-sheet-one-fund-fid100]]

*Le graphique de bilan de [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund) sur l'ID de prévision 100, avec 2065 sélectionné. Le même fonds et les mêmes années que le graphique de l'étoile polaire ci-dessus, avec la chance remise dedans.*

La prévision 100 n'est faite que d'arêtes irrégulières. Le fonds gagne 33 % en 2030 et 27 % en 2036. Puis il perd 27 % en 2041, et après un bref rebond il perd 12 % en 2043 et 24 % en 2044, de sorte que le compte tombe d'environ 479 000 $ à la fin de 2039 à environ 259 000 $ à la fin de 2044. Il gagne 42 % l'année suivante, et 36 % à la fois en 2055 et en 2057. Il termine 2065 à environ 1,22 million de dollars, pas loin des 1,12 million de dollars de l'étoile polaire, par une route qui ne ressemble en rien à la courbe lisse. Les années après 2065 ne sont pas plus calmes. Le compte dépasse 2,1 millions de dollars en 2074 et redescend à environ 840 000 $ cinq ans plus tard.

Les nombres sont aléatoires, mais ils ne sont pas nouveaux à chaque fois que vous regardez. Les tirages de chaque prévision sont amorcés à partir de son ID de prévision, de sorte que taper 100 à nouveau, demain ou sur un autre ordinateur, peint cette même image. C'est ce qui vous permet de revenir à un avenir particulier, de le montrer à quelqu'un d'autre, ou de regarder ce qu'une modification du plan lui fait.

Ce ne sont pas seulement les placements qui sont tirés. Les flux de trésorerie portent la même paire de nombres, et ils sont tirés de la même façon. Sur le plan de Jordan, le salaire croît selon N(3.5%, 1.5%), de sorte que certaines années apportent une augmentation plus forte que d'autres. Les dépenses de vie croissent selon N(2.8%, 1.5%), parce que le coût de la vie n'augmente pas du même montant chaque année. La Social Security croît selon N(2.5%, 0%), sans volatilité propre, parce que le système traite son ajustement annuel au coût de la vie comme un taux régulier.

[[img:mc-card-living-expenses-jordan]]

*La carte des dépenses de vie de Jordan dans [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan). La croissance des dépenses se lit N(2.8%, 1.5%), la même paire que porte chaque placement. Le μg à côté est le taux composé qu'utilise la trajectoire de l'étoile polaire, qui, avec une volatilité aussi faible, s'arrondit aux mêmes 2,8 %.*

**Risque vs rendement** dans le panneau **Risque** place chaque poste du plan sur un seul graphique, à sa volatilité en abscisse et à son taux moyen en ordonnée. Avec la pastille des flux de trésorerie allumée, le salaire, la Social Security et les dépenses de vie apparaissent à côté des fonds. Le fonds d'actions se tient haut et loin à droite. Le fonds de Treasuries se tient au milieu, et le fonds monétaire et les trois flux de trésorerie se regroupent dans le coin inférieur gauche, stables et lents. L'étoile, c'est le portefeuille dans son ensemble.

[[jump:volatility|output__risk__line.risk.risk]]

[[img:mc-risk-scatter-jordan]]

*Risque vs rendement pour [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan), avec les placements et les flux de trésorerie affichés. Chaque point est un poste pour lequel la prévision tire un rendement chaque année.*

Deux autres faits sur les tirages comptent pour tout ce qui suit.

Le premier est qu'un tirage ne peut pas perdre plus que tout. Un rendement annuel a un plancher à −100 %, de sorte qu'un placement peut aller à zéro mais jamais en dessous. Il n'y a pas de plafond.

Le second est que les années sont indépendantes les unes des autres. Une mauvaise année ne rend l'année suivante ni pire ni meilleure, et une suite de bonnes années n'augmente pas la chance d'une correction. Les statisticiens appellent de tels tirages [[term:iid]], *indépendants et identiquement distribués* : le rendement de chaque année vient de la même courbe en cloche, sans mémoire des années d'avant. C'est un choix de modélisation qui a des conséquences, et la dernière section y revient.

La prévision vous laisse aussi vérifier que les tirages font ce qu'ils prétendent. Sur les mille avenirs de Jordan, la moyenne mesurée du fonds d'actions est de 7,64 % contre les 7,56 % qui lui ont été donnés, et sa volatilité mesurée est de 16,49 % contre 16,42 %. Le salaire arrive à 3,49 % contre 3,5 %. Chaque nombre tombe dans l'erreur d'échantillonnage de sa spécification.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de mathématiques — comment un rendement est tiré</summary>
<div class="lesson-math-body">

Chaque année, pour chaque poste \(i\), le moteur forme

\[ r_i = \max\bigl(-1,\; \mu_i + \sigma_i\, z_i\bigr) \]

où \(z_i\) est un tirage d'une loi normale centrée réduite. Les normales centrées réduites viennent de la transformation de Box–Muller (Box et Muller, 1958), qui transforme deux nombres aléatoires uniformes \(u_1, u_2\) en un nombre normal, \(z = \sqrt{-2 \ln u_1}\, \cos(2\pi u_2)\). Les \(z_i\) sont amenés à évoluer ensemble par l'étape de la section suivante, et l'argent du poste est multiplié par \(1 + r_i\).

Chaque avenir est reproductible. Chacun est amorcé à partir de son ID de prévision et du nom du flux dans lequel il tire, de sorte que le même plan produit toujours les mêmes mille avenirs, et qu'une modification d'un poste laisse les tirages de tous les autres postes là où ils étaient. Lancez un plan deux fois, et l'ID de prévision 100 est le même avenir les deux fois.

</div>
</details>

## Bouger ensemble {#moving-together}

Les actions, les obligations et les dépenses ne bougent pas indépendamment au sein d'une année. Quand les actions chutent fort, les obligations de haute qualité ont eu tendance à tenir ou à monter, et dans une année d'inflation les dépenses et certains actifs bougent ensemble. Une prévision qui tirerait chaque poste séparément manquerait cela, et elle sous-estimerait à quel point un portefeuille [[term:diversification|diversifié]] lisse la trajectoire.

La prévision tire donc les rendements de chaque année *ensemble*, avec la [[term:correlation]] de chaque paire intégrée. Dans les chiffres du système, les actions de grandes sociétés américaines et les Treasuries à échéance intermédiaire ont une corrélation de −0,31, ce qui signifie que, dans une année où les actions font pire que d'habitude, le fonds de Treasuries a tendance à faire un peu mieux. Les dépenses de vie ont une corrélation de +0,25 avec les actions, une tendance modeste d'une économie vive à élever à la fois les rendements et les prix. Les corrélations mesurées sur les mille avenirs de Jordan reviennent comme spécifié : −0,31 pour les actions contre les Treasuries et 0,26 pour les actions contre les dépenses de vie.

L'étape qui fait bouger les tirages ensemble est une **décomposition de Cholesky**, nommée d'après André-Louis Cholesky, un géomètre de l'armée française qui l'a mise au point pour la cartographie il y a environ un siècle. Elle prend le tableau des corrélations et le factorise sous une forme qui transforme des nombres aléatoires indépendants en nombres corrélés. L'étape de [[term:cholesky]] s'exécute une fois, avant le premier avenir, puis chaque année de chaque avenir s'en sert.

L'étape a un point fragile. Un tableau de corrélations doit être cohérent en interne. Si A bouge étroitement avec B et B bouge étroitement avec C, alors A ne peut pas bouger à l'opposé de C. Un tableau assemblé à partir de sources différentes, ou modifié à la main une paire à la fois, peut enfreindre cette règle sans que personne ne le remarque, et alors l'étape de Cholesky n'a pas de réponse. Quand cela arrive, Tutilis ne s'arrête pas et n'abandonne pas discrètement les corrélations. Il trouve le tableau le plus proche qui *est* cohérent et s'en sert, et le panneau Hypothèses avertit des paires qui entraient en conflit avant qu'aucune simulation ne tourne.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de mathématiques — Cholesky, et la réparation quand elle échoue</summary>
<div class="lesson-math-body">

Soit \(C\) la matrice de corrélation des facteurs du plan. Si \(C\) est définie positive, elle se factorise de façon unique en \(C = L L^{\mathsf T}\) avec \(L\) triangulaire inférieure. Tirez un vecteur \(z\) de lois normales centrées réduites indépendantes et posez \(y = L z\). Alors

\[ \operatorname{Cov}(y) = L\, \mathbb{E}[z z^{\mathsf T}]\, L^{\mathsf T} = L I L^{\mathsf T} = C, \]

de sorte que les composantes de \(y\) ont exactement les corrélations de \(C\). Ces \(y_i\) sont les \(z_i\) du bloc précédent.

Une matrice de corrélation construite paire par paire peut ne pas être semi-définie positive : une certaine combinaison des actifs aurait une variance négative, ce qui est impossible. Alors aucun \(L\) n'existe. La correction d'erreur du moteur se déroule en trois étapes (`Cholesky.decompose`, stratégie `AUTO`) :

1. **Essayer la factorisation simple.** La plupart des plans s'arrêtent ici.
2. **Réparer vers la matrice de corrélation la plus proche.** En cas d'échec, elle calcule la matrice de corrélation la plus proche de \(C\) au sens de la norme de Frobenius, par la méthode des projections alternées de Higham (Higham, 2002). Elle alterne entre la projection sur les matrices à valeurs propres non négatives (en les coupant à \(10^{-8}\)) et la projection sur les matrices à diagonale unitaire, avec la correction de Dykstra pour que l'alternance converge vers le vrai point le plus proche. Elle va jusqu'à une tolérance de \(10^{-10}\) ou 200 itérations.
3. **Ajouter une petite perturbation en dernier recours.** Si l'arrondi défait encore la factorisation, elle ajoute une quantité infime à la diagonale, en partant de \(10^{-10}\) et en croissant d'un facteur dix, jusqu'à huit fois.

La matrice réparée et sa distance à l'originale sont conservées avec l'exécution, et la même réparation tourne avant toute simulation pour nommer les paires en conflit dans l'avertissement du panneau.

</div>
</details>

## Des valeurs par défaut que vous pouvez laisser {#defaults-you-can-leave-alone}

Chaque poste d'un plan a besoin de son μ et de son σ, et chaque paire de postes a besoin d'une corrélation. Un plan d'une douzaine de postes a besoin de dizaines de nombres avant de pouvoir dire quoi que ce soit. Tutilis s'efforce pour que vous n'ayez jamais à en taper un.

Le système les fournit tous à partir de sources publiées, pour chaque sorte de poste : chaque classe d'actifs, chaque sorte de revenu et de dépense, et les corrélations entre eux. C'est pourquoi le plan de Jordan fonctionne dès qu'il s'ouvre, et pourquoi le plan [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) de cette leçon n'énonce aucun taux qui lui soit propre. Pour presque chaque foyer, le bon temps à passer sur ces nombres est aucun.

Pour le planificateur qui a bel et bien une vue réfléchie, un **Utilisateur avancé** peut remplacer chacun d'eux, à la fois la moyenne et la volatilité. La leçon *Taux de croissance : ceux du système, et les vôtres* le parcourt sur un foyer et montre ce qu'un seul taux modifié fait au résultat.

Dans les deux cas, les quelques taux qui sont des faits sur votre propre foyer restent les vôtres à énoncer, par exemple la vitesse à laquelle votre paie a augmenté.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

Une vue du marché que vous voulez que chaque plan partage appartient à un **ensemble d'hypothèses** plutôt qu'à un seul plan. Sur la page d'accueil de l'application de bureau, à côté de **Dossiers**, la page **Ensembles d'hypothèses** garde vos ensembles avec la bibliothèque. **Nouvel ensemble** en démarre un à partir d'un catalogue de base, et vous ne changez que les catégories avec lesquelles vous n'êtes pas d'accord, par exemple un rendement attendu plus bas pour les actions américaines. **Utiliser pour mes plans** en fait la valeur par défaut de la bibliothèque, de sorte que chaque plan de la bibliothèque tourne dessus, et qu'une modification ultérieure de l'ensemble les atteint tous à la fois. **Cesser d'utiliser** renvoie chaque plan aux chiffres du système.

</div>
</details>

## Lire les mille avenirs {#reading-the-thousand-futures}

Le **Résumé de simulation** réduit les mille avenirs à quelques nombres sur l'endroit où ils finissent. Les **Prévisions clés** nomment les points le long de la ligne de tous les mille patrimoines nets finaux, triés du pire au meilleur, et donnent l'ID de prévision de l'avenir à chaque point.

[[jump:key-forecasts]]

[[img:mc-key-forecasts-jordan]]

*Prévisions clés pour [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) : le pire avenir, les quartiles, la trajectoire de l'étoile polaire (✦), la moyenne et le meilleur avenir.*

Un [[term:percentile]] est une position le long de cette ligne triée. Le 10e percentile, P10, est l'issue en dessous de laquelle un seul avenir sur dix tombe. Le 50e percentile est la [[term:median]], l'avenir du milieu. Le 90e percentile est l'issue qu'un seul sur dix dépasse. Pour Jordan, l'issue médiane est d'environ **3,21 millions de dollars**, P10 est d'environ **580 000 $** et P90 est d'environ **13,0 millions de dollars**.

La trajectoire de l'étoile polaire, marquée ✦, se termine à environ **3,10 millions de dollars**, la 492e des mille. Elle se situe juste sous la médiane, comme le prédit le calcul de la section précédente. La **moyenne** est d'environ **5,18 millions de dollars**, très au-dessus de la médiane, et la section suivante explique pourquoi.

Le **Résultat** indique Baisse (P10) et Hausse (P90) à côté de la médiane, et la prévision se sert de cette paire partout pour une raison. Le risque vit dans la queue. Une issue mauvaise d'une fois sur dix est ce à quoi un plan prudent doit être prêt, et une paire plus étroite telle que P30 et P70 décrirait le milieu confortable tout en ne disant rien des avenirs qui font mal. P10 peut sortir en dessous de zéro sur un plan qui dépense fort, parce que dans ces avenirs le plan continue de dépenser après que l'argent a disparu et emprunte pour couvrir le manque. Ce nombre négatif est une information réelle. C'est la taille du trou dans un mauvais avenir d'une fois sur dix.

Le [[term:success-rate]] compte les avenirs qui se terminent avec un patrimoine net supérieur à zéro. Le plan de Jordan réussit dans **96,4 %** d'entre eux. C'est un décompte d'avenirs simulés, et la dernière section dit ce que cela signifie et ne signifie pas pour une vie réelle.

Chaque point des Prévisions clés est un avenir entier que vous pouvez ouvrir. Cliquez une ligne et chaque vue se concentre sur cette prévision : les graphiques de bilan et de flux de trésorerie se redessinent pour cet avenir, mauvaises années comprises. L'entrée de prévision dans la bande en haut du prévisionniste prend n'importe quel ID de prévision de la même façon, et le remettre à 0 ramène à la trajectoire de l'étoile polaire.

[[img:mc-nw-distribution-jordan]]

*La Distribution du patrimoine net pour [Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) : les mille patrimoines nets finaux à la fois. La bande ombrée à gauche est en dessous de zéro, et l'axe devient logarithmique au-delà d'environ 31 millions de dollars pour que la plus longue queue tienne encore.*

## Pourquoi le résultat penche vers la droite {#why-the-outcome-leans-right}

Les mille issues de Jordan sont asymétriques. La moitié d'entre elles se terminent entre environ 1,42 million de dollars et 6,73 millions de dollars, quelques-unes s'étirent jusqu'à des dizaines de millions, et le côté gauche s'arrête bien plus tôt. La moyenne se tient loin à droite de la médiane parce que ces quelques issues énormes l'y tirent. Cette forme n'est pas une bizarrerie de ce plan. C'est ce que la capitalisation fait à l'aléatoire, et le plan [Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund) le montre sans que rien d'autre ne gêne.

Commencez par une année. Le rendement du fonds pour l'année est tiré d'une courbe en cloche, de sorte que sa valeur après un an est une courbe en cloche aussi. Les mille issues s'étalent presque également de chaque côté d'environ 107 000 $. La médiane est de 107 500 $, la moyenne est de 107 400 $, et la moitié centrale va de 96 500 $ à 118 100 $, environ 11 000 $ de chaque côté. **Après un an, la distribution est normale**, parce que le rendement lui-même est tiré d'une loi normale et que rien ne s'est encore capitalisé.

Lancez maintenant le même fonds pendant quarante ans. Chaque année multiplie le solde par un facteur aléatoire, et quarante facteurs aléatoires multipliés ensemble ne font pas une courbe en cloche. Un avenir qui a quelques bonnes années de plus que d'habitude ne finit pas un peu plus haut. Il finit plusieurs fois plus haut, parce que chaque bonne année se capitalise sur celles d'avant. Une mauvaise série ne peut pas faire l'image miroir, parce que le solde peut descendre vers zéro mais jamais en dessous. La médiane après quarante ans est d'environ 1,18 million de dollars et la moyenne d'environ 1,94 million de dollars. La moitié centrale va d'environ 600 000 $ à 2,34 millions de dollars, ce qui est 580 000 $ sous la médiane et 1,17 million de dollars au-dessus, et le meilleur avenir atteint environ 29,5 millions de dollars.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-one-year]]

*[Un fonds d'actions](#canvas-dossier:monte_carlo_one_fund) après un an : une cloche symétrique autour de 107 000 $.*

</div>
<div class="lesson-img-cell">

[[img:mc-nw-one-fund-forty-years]]

*Le même fonds après quarante ans : un groupe haut à gauche et une longue queue vers la droite. L'axe devient logarithmique au-delà d'environ 7 millions de dollars pour que la queue tienne tout court.*

</div>
</div>

Cette forme qui penche vers la droite a un nom, la distribution [[term:lognormal]]. Cela signifie que le *logarithme* de l'issue suit une courbe en cloche, même si l'issue elle-même ne la suit pas. Multiplier des facteurs additionne leurs logarithmes, et additionner beaucoup de morceaux aléatoires indépendants produit une courbe en cloche quelle que soit l'allure des morceaux. C'est le théorème de la limite centrale, l'un des faits les plus sûrs des probabilités, et c'est pourquoi le patrimoine à long horizon sort log-normal dans presque chaque modèle qui capitalise des rendements aléatoires.

La moyenne, la médiane et la trajectoire de l'étoile polaire racontent trois histoires différentes sur une distribution log-normale. La moyenne est tirée vers le haut par une poignée d'issues énormes que presque personne ne verra. La médiane est l'avenir typique, et la trajectoire de l'étoile polaire se situe juste en dessous. C'est pourquoi la prévision met en avant la médiane et la trajectoire de l'étoile polaire, et pourquoi la moyenne est montrée mais jamais utilisée comme titre.

Le plan de Jordan n'est pas purement log-normal, parce que Jordan dépense. Les retraits prennent un montant d'argent fixe chaque année quoi qu'ait fait le marché, de sorte qu'ils mordent le plus fort dans les avenirs qui vont déjà mal. Cela étire le côté gauche de la distribution, et dans les pires avenirs cela porte le patrimoine net en dessous de zéro, ce qu'un fonds acheté et conservé ne peut jamais faire. Le côté droit s'étire encore de la façon que la capitalisation produit.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de mathématiques — le théorème de la limite centrale à l'œuvre</summary>
<div class="lesson-math-body">

Prenez les logarithmes du produit de patrimoine :

\[ \ln W_n = \ln W_0 + \sum_{t=1}^{n} \ln(1 + r_t). \]

Les termes \(\ln(1+r_t)\) sont i.i.d. de moyenne \(g \approx \mu - \sigma^2/2\) et d'écart-type \(s \approx \sigma/(1+\mu)\). Par le théorème de la limite centrale, leur somme est approximativement normale pour un grand \(n\), de moyenne \(n g\) et d'écart-type \(s\sqrt{n}\). Donc \(W_n\) est approximativement log-normal :

\[ \text{median}(W_n) \approx W_0\, e^{n g}, \qquad \mathbb{E}[W_n] = W_0 (1+\mu)^n. \]

Pour le fonds d'actions, \(g = 6.12\%\) et \(n = 40\) donnent une médiane d'environ 1,16 million de dollars, contre 1,18 million de dollars dans la simulation, et \((1.0756)^{40}\) donne une moyenne d'environ 1,85 million de dollars, contre 1,94 million de dollars. La dispersion de \(\ln W_n\) croît comme \(\sqrt{n}\), de sorte que la pente vers la droite se renforce à mesure que l'horizon s'allonge.

À \(n = 1\), il n'y a rien à additionner. \(W_1 = W_0 (1 + r_1)\) est une fonction linéaire d'un seul tirage normal, donc elle est elle-même normale, à part le plancher à −100 % qu'un tirage d'un an n'atteint presque jamais. La forme log-normale est entièrement un produit de la capitalisation sur de nombreuses années.

</div>
</details>

## Combien d'avenirs lancer {#how-many-futures-to-run}

La prévision lance **1 000** avenirs par défaut, un choix courant dans les logiciels de planification. Un millier suffit à placer la médiane et les quartiles dans un endroit stable et à mesurer un taux de réussite à un point ou deux près.

Vous pouvez en demander davantage. **Simulations** se trouve dans la bande en haut du prévisionniste, à côté de l'entrée de prévision et d'**Année**, et il prend n'importe quel compte de 1 000 à 10 000 par pas d'un millier. Le nouveau compte prend effet quand vous appuyez sur **Re-simuler**.

[[img:mc-simulations-entry-7000]]

*La bande en haut du prévisionniste avec Simulations réglé sur 7 000. L'entrée est teintée presque jusqu'au rouge, à côté du bouton Re-simuler qui l'applique.*

À mesure que le compte monte, l'entrée se teinte de sa couleur habituelle vers le rouge. La teinte est une prudence délibérée, pour deux raisons.

La première raison est le temps. Dix mille avenirs prennent environ dix fois plus longtemps qu'un millier, chaque fois que le plan est re-simulé.

La seconde raison compte davantage. Une exécution plus grande n'est pas une meilleure réponse. Le milieu de la distribution bouge à peine, tandis que les extrêmes continuent de grandir. Lancez le plan de Jordan avec dix mille avenirs et la médiane passe de 3,21 millions de dollars à 3,20 millions de dollars, et le taux de réussite de 96,4 % à 96,2 %. Le meilleur avenir, lui, passe d'environ 40 millions de dollars à environ 93 millions de dollars. Dix fois plus d'avenirs signifie dix fois plus de chances de tirer une suite d'années stupéfiante, et la plus extrême d'entre elles atterrit plus loin.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan]]

*[Jordan, 70/30](#canvas-dossier:monte_carlo_jordan) avec 1 000 avenirs.*

</div>
<div class="lesson-img-cell">

[[img:mc-key-forecasts-jordan-10000]]

*Le même plan avec 10 000 avenirs. Les quartiles et la médiane bougent à peine, et le maximum fait plus que doubler.*

</div>
</div>

Les mathématiques derrière ces avenirs extrêmes sont solides. Un avenir dans lequel les actions rapportent bien au-dessus de la moyenne pendant des décennies est possible sous les hypothèses du plan, et parmi dix mille avenirs quelques-uns apparaissent. De tels nombres sont pourtant difficiles à raisonner. Un plan qui rapporte un meilleur cas de 90 millions de dollars pour un foyer qui a 1,34 million de dollars n'a pas tort, mais il invite l'attention vers un avenir autour duquel le plan n'a aucune raison d'être construit. Les nombres qui valent l'attention d'un planificateur sont la médiane, la baisse et le taux de réussite, et un millier d'avenirs les fixe déjà.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de mathématiques — ce que des avenirs supplémentaires achètent</summary>
<div class="lesson-math-body">

Un taux de réussite mesuré à partir de \(N\) avenirs a une erreur type de \(\sqrt{p(1-p)/N}\). Pour \(p = 0.964\) et \(N = 1{,}000\), cela fait environ 0,59 point, de sorte que le vrai taux sous les hypothèses du modèle se trouve à environ ±1,2 point du taux rapporté 95 % du temps. Dix mille avenirs ramènent cela à environ ±0,4 point. La précision ne s'améliore qu'avec \(\sqrt{N}\), de sorte que chaque chiffre supplémentaire de précision coûte cent fois les exécutions.

Les extrêmes se comportent autrement. Pour une loi normale, le plus grand de \(N\) tirages se situe à environ \(\sqrt{2 \ln N}\) écarts-types au-dessus de la moyenne, de sorte qu'il continue de ramper vers l'extérieur à mesure que \(N\) grandit, sans limite. Sur une distribution log-normale, ce rampement se produit dans le logarithme, de sorte que chaque pas vers l'extérieur multiplie le maximum par un grand facteur. Sur le plan à un seul fonds sur quarante ans, le logarithme du patrimoine a un écart-type d'environ 0,97. Passer du plus grand d'un millier au plus grand de dix mille ajoute environ 0,57 écart-type dans le logarithme, ce qui multiplie en moyenne le maximum par environ 1,7. Une exécution donnée varie largement autour de cela, parce qu'un maximum est un seul tirage. La médiane ne bouge pas du tout, parce qu'elle n'a jamais été dans la queue.

</div>
</details>

## Ce que Monte Carlo ne peut pas voir {#what-monte-carlo-cannot-see}

Une prévision Monte Carlo est une façon soigneuse de raisonner sur le hasard. C'est encore un modèle, et ses réponses portent les limites de ce qu'on y a mis.

**Elle ne vaut que ce que valent ses hypothèses.** Chaque avenir est tiré des μ, σ et corrélations sur lesquels le plan tourne. Si le rendement attendu des actions sur les quarante prochaines années est plus bas que le chiffre de long terme, chacun des mille avenirs est trop optimiste, et en lancer davantage n'aide pas. Les chiffres du système viennent de sources publiées, mais ils restent des estimations d'un avenir que personne n'a vu.

**Les années n'ont pas de mémoire.** Parce que les tirages sont indépendants, la prévision n'a aucun momentum, aucun retour à la moyenne et aucun régime. Sur les marchés réels, de longues périodes de valorisations élevées ont eu tendance à être suivies de rendements plus faibles, et les périodes calmes et agitées ont tendance à venir par grappes. Dans la prévision, un krach dans les premières années de la retraite n'arrive que lorsque le hasard en place un là. Le modifiable **Risque de séquence des rendements** dans **Transformations** existe exactement pour cette raison. Il place un krach historique dans les années que vous choisissez, de sorte que vous pouvez stresser le plan délibérément plutôt que d'attendre les dés. La leçon *Caler un krach : réserve de liquidités ou rééquilibrage ?* s'en sert sur le même foyer.

[[jump:sequence-of-returns|modifiable]]

**Les queues sont plus fines que celles de l'histoire.** Une courbe en cloche rend les très grandes pertes sur un an plus rares que les marchés ne les ont réellement produites. Un modèle à tirages normaux traite 1931 ou 2008 comme des événements presque impossibles, alors que l'histoire dit qu'ils sont seulement peu communs.

**Les règles sont fixes pour tout l'horizon.** Chaque poste garde les mêmes μ, σ et corrélations pendant quarante ans. Dans les crises réelles, les corrélations entre actifs risqués ont tendance à monter juste au moment où la diversification est le plus nécessaire.

**Le plan suit son script.** Dans chaque avenir, le foyer dépense ce que le plan dit et retire de la façon que le plan dit. Les personnes réelles s'ajustent, en réduisant après une mauvaise année et en dépensant davantage après une bonne série, et cette souplesse est l'une des protections les plus fortes qu'ait un retraité.

**Un taux de réussite n'est pas une promesse.** Jordan vivra un avenir, pas un millier. Un taux de réussite de 96,4 % dit que 964 des mille avenirs simulés se sont terminés au-dessus de zéro sous ces hypothèses. Il ne dit pas que l'avenir réel a une chance de 96,4 %, et il ne dit rien de la gravité des 36 autres avenirs. Lisez le taux de réussite à côté de la baisse, qui montre jusqu'où vont les échecs.

Rien de tout cela ne rend la prévision moins utile. Cela en fait un outil dont on connaît la forme. Servez-vous de la trajectoire de l'étoile polaire pour comprendre le plan, des mille avenirs pour voir sa dispersion, et de Transformations pour pousser sur les risques que les dés traitent comme rares.

## Ce qu'il faut retenir {#what-to-take-away}

Une prévision peut se lire de deux façons, et chacune répond à une question que l'autre ne peut pas. La trajectoire de l'étoile polaire fait croître chaque poste à son taux composé, μ − σ²/2, sans chance dedans. C'est l'endroit où demander ce que fait un changement et quelle est la taille de l'effet, et ses issues se situent près du milieu de ce que le plan peut attendre.

Les mille avenirs remettent la chance dedans. Chaque année, chaque poste tire son rendement dans sa propre courbe en cloche, les tirages bougent ensemble par l'étape de Cholesky, et les années sont indépendantes les unes des autres. Posés côte à côte, les avenirs mesurent le risque : la baisse, la dispersion et le taux de réussite.

La capitalisation fait pencher vers la droite le patrimoine à long horizon. Après un an les issues forment une cloche, et après quarante elles sont log-normales, avec une médiane bien en dessous de la moyenne et une longue queue de fortunes rares. C'est pourquoi la prévision met en avant la médiane et la trajectoire de l'étoile polaire.

Un millier d'avenirs suffit. Davantage d'entre eux aiguisent un peu le taux de réussite et poussent les extrêmes plus loin, sans changer ce qu'un planificateur devrait conclure. Les nombres sous tout cela viennent du système, et vous pouvez les laisser tranquilles à moins d'avoir une vraie raison d'être en désaccord.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Ouvrages cités — la méthode et les mathématiques</summary>
<div class="lesson-bibliography-body">

- Nicholas Metropolis et S. Ulam, [*The Monte Carlo Method*](https://doi.org/10.1080/01621459.1949.10483310), Journal of the American Statistical Association 44 (247), 1949.
- Phelim P. Boyle, [*Options: A Monte Carlo Approach*](https://doi.org/10.1016/0304-405X%2877%2990005-8), Journal of Financial Economics 4 (3), 1977.
- G. E. P. Box et Mervin E. Muller, [*A Note on the Generation of Random Normal Deviates*](https://doi.org/10.1214/aoms/1177706645), Annals of Mathematical Statistics 29 (2), 1958.
- Nicholas J. Higham, [*Computing the Nearest Correlation Matrix — A Problem from Finance*](https://doi.org/10.1093/imanum/22.3.329), IMA Journal of Numerical Analysis 22 (3), 2002.

</div>
</details>
