<!--
tutilis-return: lessons/currency_risk_in_the_forecast/prose/fr.md
tutilis-locale: fr translated
-->
# Le risque de change dans la prévision

Ines est retraitée aux États-Unis et dépense en dollars. Son revenu est une pension des années où elle a travaillé à Lisbonne, versée en euros. L'essentiel de son épargne se trouve dans une échelle d'obligations du gouvernement britannique, en livres, et le reste est un compte d'épargne à Tokyo, en yens. Un modeste [[term:brokerage]] américain est la seule chose qu'elle possède qui soit cotée dans la devise dans laquelle elle vit.

C'est un ménage dont la retraite est un pari sur trois taux de change, que quelqu'un l'ait pensé ainsi ou non. Cette leçon porte sur ce qu'une prévision peut dire de ce pari, et sur la seule chose que cette prévision peut dire qu'une prévision à taux fixe ne peut pas : quelle part de sa dispersion vient des devises elles-mêmes.

Le [[term:canvas]] contient trois plans qui sont le même ménage. Le premier convertit chaque année aux taux d'aujourd'hui, ce que fait chaque plan sauf s'il demande autre chose. Le deuxième active le modèle de risque de change. Le troisième l'active et énonce une conviction sur la livre. Basculez de l'un à l'autre en lisant.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Utilisateur avancé</p>
<div class="lesson-power-user-body">

Cette leçon fixe des taux de change et les laisse bouger, sur l'onglet Devise des Hypothèses. Cet onglet, et les plans en plusieurs devises, appartiennent à un **Utilisateur avancé**. Activez-le sous [[nav:advanced]] → Paramètres de l'application → **Utilisateur avancé** pour suivre sur vos propres plans.

</div>
</aside>

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Comment activer des taux de change qui bougent pour un plan ?** Voir [Rien ne bouge tant que vous ne le demandez pas](#nothing-moves-until-you-ask).
2. **Quelle part de mon plan est exposée aux devises étrangères ?** Voir [Ce qu'elle possède, et dans quoi](#what-she-owns-and-in-what).
3. **Qu'est-ce qui fait passer un taux de change d'une année à la suivante dans le modèle ?** Voir [De quoi est fait un taux qui bouge](#what-a-moving-rate-is-made-of).
4. **Pourquoi le taux attendu est-il plat, et que se passe-t-il lorsque j'énonce une conviction d'[[term:inflation]] ?** Voir [Plat jusqu'à ce que vous énonciez une conviction](#the-expected-path-is-flat-until-you-state-a-belief).
5. **À quoi ressemble le risque de change à l'intérieur d'une seule trajectoire de prévision ?** Voir [Une trajectoire](#one-path).
6. **Quelle part de la dispersion de mes résultats vient des devises ?** Voir [Quelle part est du risque de change](#how-much-of-the-spread-is-the-currencies).
7. **Qu'est-ce que le modèle de change laisse de côté ?** Voir [Ce que le modèle ne fait pas](#what-the-model-does-not-do).

</div>
</aside>

## Rien ne bouge tant que vous ne le demandez pas {#nothing-moves-until-you-ask}

Ouvrez **Hypothèses → Devise** sur le premier plan. Sous le tableau des taux il y a un choix à deux voies, **Taux de change : Fixes | Modélisés**, et il est réglé sur *Fixes*. Ce réglage est tout l'opt-in. Un plan qui ne l'a jamais touché convertit chaque année de chaque trajectoire aux taux du tableau, exactement comme il le faisait avant que le modèle existe, et sa prévision ne change pas d'un centime.

[[jump:fx|input]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

[[img:currency-risk-fx-fixed|control]]

*Hypothèses → Devise sur le plan à taux fixes. Taux de change est sur Fixes.*

[[img:currency-risk-fx-modeled|control]]

*Le même panneau sur le plan modélisé. Taux de change est sur Modélisés, et chaque taux devient une trajectoire à part.*

</div>
</details>

Le modèle ne change rien non plus à la façon dont un plan est écrit. La pension est toujours enregistrée en euros, l'échelle d'obligations en livres, l'épargne en yens. Ce que *Modélisés* change, c'est le taux que la prévision utilise lorsqu'elle convertit ces montants en dollars dans une année donnée d'une trajectoire donnée. Avec *Fixes*, ce taux est le même nombre à chaque fois. Avec *Modélisés*, c'est une trajectoire à part.

## Ce qu'elle possède, et dans quoi {#what-she-owns-and-in-what}

Avant de demander si les taux comptent, regardez quelle part du plan ils touchent. La prévision indique l'[[term:exposure]] que les taux soient modélisés ou non, parce que c'est un fait du plan plutôt que du modèle.

[[img:currency-risk-exposure]]

Environ les deux tiers de ses actifs sont en livres, un cinquième en yens, et un sixième en dollars. La part en dollars grandit un peu à mesure que les actions américaines se capitalisent et que le reste est tiré, mais la forme tient jusqu'à l'horizon. Son revenu est plus tranché encore : chaque euro en est la pension de Lisbonne, et chaque dollar qu'elle dépense doit d'abord être acheté avec l'une des trois devises étrangères.

C'est la forme de son risque de change. Les actifs qui financent sa retraite sont étrangers ; la retraite qu'ils financent est en dollars. Rien de tout cela n'est inhabituel pour quelqu'un qui a vécu et travaillé dans plus d'un pays, et rien de tout cela n'apparaît dans une prévision qui tient les taux immobiles.

## De quoi est fait un taux qui bouge {#what-a-moving-rate-is-made-of}

Le modèle ne tire pas un taux de change de nulle part, et il ne donne pas simplement à chaque devise un rendement et une [[term:volatility]] comme un fonds en reçoit. Il construit le changement de chaque année à partir de deux pièces dont les économistes discutent depuis un siècle et sur lesquelles ils s'accordent surtout sur les longs horizons.

La première pièce est la **dérive venue de l'inflation**. Si les prix dans un pays montent plus vite que les prix dans un autre, la devise de ce pays tend à perdre de la valeur face à l'autre d'environ la différence. C'est la parité de pouvoir d'achat relative, et sur des décennies c'est la chose la plus fiable que quiconque puisse dire sur la direction d'une devise. Dans le modèle, l'inflation de chaque région est énoncée par rapport à l'inflation de présentation propre au plan pour les États-Unis. Une région avec un écart de zéro est censée s'inflater au même rythme que les États-Unis, et sa devise n'a pas de dérive. C'est aussi pourquoi une devise à forte inflation ne peut pas rester forte par accident : la dérive est liée à l'inflation que le reste de la prévision utilise déjà.

La seconde pièce est le **taux de change réel**, qui est le taux une fois les niveaux de prix des deux pays retirés. C'est là que vit le vrai risque de change. Les taux réels oscillent, parfois d'un quart ou plus, mais ils n'oscillent pas éternellement. Ils tendent à revenir vers un niveau de long terme sur quelques années. Le modèle énonce cela comme une demi-vie : le nombre d'années qu'il faut pour que la moitié d'un écart se referme, quatre ans pour les grandes devises flottantes. Chaque année le taux réel fait un pas aléatoire puis se penche de nouveau vers son niveau de long terme, de sorte qu'une trajectoire de quarante ans ne peut pas s'égarer vers une valorisation qu'aucune devise n'a jamais tenue.

Le taux [[term:nominal]] que vous voyez est le produit des deux. Il ne reçoit pas de volatilité propre, ce qui est délibéré : si le taux nominal et le taux réel étaient tirés séparément, ils pourraient raconter des histoires contradictoires. Chaque nombre que le modèle utilise, par devise, est listé sous **Hypothèses → Devise** et imprimé par `assumptions.fx-model`. La plupart sont des hypothèses du monde partagé, comme le rythme auquel les tranches d'impôt sont indexées, plutôt que quelque chose que chaque ménage est invité à saisir. La seule exception est l'écart d'inflation, qui est une conviction qu'un ménage peut raisonnablement tenir pour lui-même, et la section suivante montre où l'énoncer.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de maths — la dérive et la demi-vie</summary>
<div class="lesson-math-body">

**Dérive.** Avec l'inflation américaine \(\pi_{US}\) et l'inflation de l'autre région \(\pi_c\), le changement annuel attendu du taux, en logarithmes, est

\[
\ln\frac{1+\pi_{US}}{1+\pi_c}
\]

donc sur de nombreuses années le taux attendu est simplement le rapport des deux niveaux de prix.

**Le taux réel.** Écrivez la distance logarithmique du taux réel à son niveau de long terme comme \(x_t\). Chaque année il conserve une part \(\rho\) de cette distance et fait un pas aléatoire :

\[
x_{t+1} = \rho\,x_t + \sigma_q\,\varepsilon_{t+1}, \qquad \rho = 0.5^{1/h}
\]

Un écart se réduit à \(\rho^h = 0.5\) de lui-même après \(h\) années, ce que signifie une demi-vie. Avec une demi-vie de quatre ans, \(\rho = 0.5^{1/4} \approx 0.84\).

Le taux nominal que vous voyez est le taux réel emporté par le rapport des niveaux de prix, donc il ne reçoit pas de volatilité propre.

</div>
</details>

## Plat jusqu'à ce que vous énonciez une conviction {#the-expected-path-is-flat-until-you-state-a-belief}

La prévision déterministe, le [[term:gmf|GMF ✦]], ne tire aucun pas aléatoire. Sur le deuxième plan, sa trajectoire de taux de change est plate : une livre vaut le même nombre de dollars en 2053 qu'en 2027. Ce n'est pas le modèle qui refuse de travailler. C'est le modèle qui dit que, sans écart d'inflation énoncé et avec le taux d'aujourd'hui pris comme juste valeur, le taux attendu est le taux d'aujourd'hui. La dispersion que vous verrez dans un instant vient entièrement des trajectoires autour de cette attente.

Le troisième plan énonce une conviction : la Grande-Bretagne s'inflate de 1,5 point par an plus vite que les États-Unis. Rien d'autre n'est différent. La conviction vit dans le tableau des taux sous **Hypothèses → Devise**, dans la colonne **Inflation vs États-Unis**, qui est modifiable une fois que Taux de change est sur *Modélisés*. La ligne de la livre y indique 1,5 %, et chaque autre ligne indique zéro. Dans le tableau des paramètres en dessous, la source de la livre passe de la valeur par défaut du système au plan lui-même. Maintenant la trajectoire GMF de la livre s'incline. Chaque année la livre perd environ 1,4 % de sa valeur en dollars, ce qui est exactement le rapport des deux taux d'inflation, et en 2053 elle se situe presque un tiers en dessous de son point de départ. L'euro et le yen, sans écart énoncé, restent plats à côté.

Parce que les deux tiers de ce qu'Ines possède sont en livres, cette seule conviction fait passer le patrimoine net terminal attendu d'un peu moins d'un million de dollars à un peu plus de la moitié. Rien dans le plan n'a changé qu'une seule hypothèse sur l'inflation de deux pays, et la prévision a bougé de plus que la plupart des modifications du plan lui-même ne la feraient bouger. Vous pouvez lire la trajectoire sur `forecast.fx-path` pour la prévision attendue, et c'est le moyen le plus net de vérifier ce que fait un écart énoncé avant de faire confiance à un [[term:monte-carlo|Monte Carlo]] construit dessus.

## Une trajectoire {#one-path}

Chaque trajectoire stochastique tire ses propres taux. Sur le deuxième plan, la prévision 7 a la livre environ 8 % sous aujourd'hui au milieu des années 2030, un quart au-dessus à travers la fin des années 2040, et de retour à environ 15 % au-dessus à l'horizon. L'euro passe les mêmes décennies un quart plus fort et revient à aujourd'hui en 2053. Le yen finit un cinquième plus fort qu'il n'a commencé. Les trois ne bougent pas indépendamment : le modèle corrèle les surprises de taux réel entre les devises, de sorte qu'une année où le dollar se renforce tend à le renforcer face aux trois, et il corrèle les surprises d'inflation de chaque région avec le taux réel de sa propre devise.

C'est à quoi ressemble le risque de change à l'intérieur d'une trajectoire : des taux qui s'éloignent longtemps, reviennent, et s'éloignent encore, liés de façon lâche par un facteur dollar commun. Aucune trajectoire n'est une prédiction. Le point est que chaque trajectoire est économiquement possible, ce qu'une marche aléatoire sur le taux nominal ne tiendrait pas sur une retraite.

## Quelle part est du risque de change {#how-much-of-the-spread-is-the-currencies}

La question qu'Ines a vraiment posée est quelle part de sa dispersion vient des devises elles-mêmes, et une prévision à taux fixe ne peut pas y répondre. Pour y répondre, la prévision exécute le même Monte Carlo deux fois, une fois avec les taux modélisés et une fois en les tenant aux taux d'aujourd'hui, et compare le patrimoine net final. Le tableau **Risque de change** dans la vue rapide FX le fait à la demande ; `forecast.currency-risk` imprime la même comparaison.

[[jump:fx|output__fx]]

[[img:currency-risk-nw-distribution-fixed]]

[[img:currency-risk-nw-distribution-modeled]]

Avec les taux tenus immobiles, le nuage des résultats est ce que son échelle d'obligations, son taux d'épargne et ses actions en font. Avec les taux modélisés, le nuage est plus large des deux côtés : un 90e [[term:percentile]] plus haut, parce qu'une livre ou un euro fort est aussi possible qu'un faible, et un 10e percentile plus bas, parce qu'un faible l'est aussi. L'écart-type de son patrimoine net final est un cinquième plus haut, le plancher au 10e percentile est plus bas de dizaines de milliers de dollars, et le taux de réussite est plus bas de quelques points. La dernière ligne du tableau met un nombre dessus : **environ trois dixièmes de la variance de son patrimoine net final viennent des taux de change.** Le reste, ce sont les actifs.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de maths — comment un cinquième de dispersion en plus devient trois dixièmes de la variance</summary>
<div class="lesson-math-body">

La variance est le carré de l'écart-type. Si les taux modélisés rendent l'écart-type \(1.2\) fois celui à taux fixe, la variance est \(1.2^2 = 1.44\) fois plus grande, et la part que les taux de change ajoutent est

\[
1 - \frac{\sigma_{fixed}^2}{\sigma_{modeled}^2} = 1 - \frac{1}{1.44} \approx 0.31
\]

</div>
</details>

Lisez ce nombre comme il est conçu. Ce n'est pas une prévision du sens dans lequel les devises iront ; la trajectoire attendue est plate. C'est une mesure de la part de son incertitude qu'elle porte dans les devises plutôt que dans les marchés, ce qui lui dirait si couvrir, ou détenir davantage de son épargne en dollars, vaut son coût. Un ménage avec la même part étrangère détenue en actions trouverait les devises une plus petite part d'une plus grande dispersion ; un ménage qui détient des obligations et des liquidités étrangères, comme elle, les trouve une grande part d'une dispersion modeste.

Deux choses rendent cette mesure possible ici et pas dans un tableur avec une colonne de taux. Les taux vivent à l'intérieur de la simulation, de sorte que chaque trajectoire porte son propre historique de taux à côté de ses propres rendements, plutôt qu'un taux statique multiplié après coup. Et le plan peut être exécuté avec les taux gelés, de sorte que l'attribution est une comparaison de deux prévisions honnêtes plutôt qu'une conjecture sur ce que les devises ont apporté.

## Ce que le modèle ne fait pas {#what-the-model-does-not-do}

Le modèle de change ne change pas la façon dont un poste croît. L'échelle d'obligations rapporte toujours ce qu'une échelle d'obligations rapporte, en livres ; le modèle ne change que le taux utilisé pour énoncer cette valeur en livres en dollars. Il ne change pas l'inflation américaine, qui reste l'inflation de présentation propre au plan et est la même courbe le long de laquelle chaque chiffre en dollars d'aujourd'hui de l'application est actualisé. Et il ne corrèle pas encore les mouvements d'une devise avec les rendements des actifs détenus dans cette devise. Ce sont les prochaines étapes, et le modèle est construit pour qu'elles s'insèrent sans changer ce qu'un plan dit.

## À retenir {#what-to-take-away}

- Les taux de change peuvent faire partie de la simulation, mais seulement pour un plan qui opte pour cela. Un plan qui ne touche jamais le commutateur prévoit exactement comme avant.
- Un taux qui bouge est deux choses : une dérive venue de l'écart d'inflation entre les régions, et un taux réel qui erre et revient. Le taux nominal suit des deux, de sorte qu'aucune devise ne peut rester forte par accident ni errer vers un niveau impossible.
- La trajectoire attendue est plate jusqu'à ce que vous énonciez un écart. Énoncez-en un, et la dérive est le rapport des deux taux d'inflation, année après année, et un ménage qui est surtout dans cette devise bouge avec elle.
- La prévision peut dire quelle part de la dispersion d'un ménage vient de ses devises en exécutant le même Monte Carlo avec les taux modélisés et en les tenant immobiles. Pour une retraitée qui vit d'un revenu étranger et d'obligations étrangères, cette part est grande, et c'est le nombre qui dit si le risque de change vaut qu'on fasse quelque chose.
