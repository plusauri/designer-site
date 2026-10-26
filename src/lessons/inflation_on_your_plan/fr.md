<!--
tutilis-return: lessons/inflation_on_your_plan/prose/fr.md
tutilis-locale: fr translated
-->
# Les prix dans votre plan

L'[[term:inflation|inflation]] est une hausse des prix des choses qu'un ménage achète. Les prix montent quand les gens essaient d'acheter plus que ce qui est produit, quand fabriquer les choses coûte plus cher, ou quand les gens augmentent les prix parce qu'ils s'attendent à ce que les prix montent. [Le foyer Reyes](#canvas-dossier:reyes_prices) part d'une valeur historique par défaut pour chaque taux de croissance du plan. Ces valeurs par défaut sont des lectures raisonnables du passé. L'avenir peut différer de cette histoire, et chaque taux de ce plan est un taux que vous pouvez lire et un taux que vous pouvez changer.

Ouvrez le plan et [[term:hover|survolez]] **Sam's college** sur [[nav:cf-table]]. La fiche nomme la **Croissance des coûts** de cette facture. Living expenses, Maya's wages et l'hypothèque portent chacun un taux qui leur est propre, et la section suivante les liste à côté de la fiche universitaire. Un article qui cite un seul chiffre d'inflation cite un seul panier. Ce plan est la liste propre de Maya.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Pourquoi les factures de ce plan croissent-elles à des taux différents ?** Voir [Plusieurs factures, plusieurs taux](#several-bills-several-rates).
2. **Pourquoi l'hypothèque paraît-elle plate en [[term:nominal|Nominal]] et plus petite en $ d'aujourd'hui ?** Voir [Nominal et dollars d'aujourd'hui](#nominal-and-todays-dollars).
3. **Comment ne stresser que la facture universitaire ?** Voir [Changer une seule facture](#change-one-bill).
4. **Jusqu'où une année difficile peut-elle aller sur le curseur des courses ?** Voir [Une année plus rapide](#a-faster-year).

</div>
</aside>

## Plusieurs factures, plusieurs taux {#several-bills-several-rates}

Chaque facture de ce plan croît à son propre taux. Le graphique de flux de trésorerie dessine les dollars d'une année, et le taux lui-même se trouve sur la fiche de la ligne. Le taux est plus facile à lire sur la fiche que sur le graphique. Regardez les barres au-dessus de l'axe. Ce sont les revenus, et ils grandissent d'année en année, avec une légère courbe le long de leur sommet. Les barres au-dessous de l'axe grandissent vers le bas, et leur sommet forme aussi une légère courbe. Une barre plus grande, c'est la croissance, et le pourcentage de cette croissance est le nombre inscrit sur la fiche. La légère courbe, c'est la [[term:compounding]]. La croissance de chaque année s'ajoute à la croissance qui l'a précédée.

[[img:prices-cash-flow]]

Voici 2028, avec Sam à l'université. Les barres sont les dollars de cette année-là. [[term:hover|Survolez]] **Sam's college** sur [[nav:cf-table]] et lisez **Croissance des coûts**.

[[img:prices-college-card]]

La **Croissance des coûts** de cette fiche se lit N(4.5%, 2%, μg=4.5%). C'est le taux du catalogue pour les prix universitaires. Les 4,5 pour cent sont la moyenne, les 2 pour cent sont la volatilité, et μg<!-- term-skip: volatility — the same sentence says what the 2 percent is --> est le taux auquel la facture se capitalise, environ 4,5 pour cent par an sur les quatre années où elle figure au plan, à partir de 2027. Les prix universitaires ont devancé le panier des courses pendant longtemps, et le catalogue conserve cet écart. Le curseur **Croissance des coûts** de **Sam's college** dans [[nav:transforms]] s'ouvre près de 4,5 pour cent.

Living expenses augmente d'environ 2,8 pour cent par an. La fiche de **Living expenses** nomme cette ligne **Croissance des dépenses**, et elle se lit N(2.8%, 1.5%, μg=2.8%). C'est le taux de long terme du [[term:cpi|CPI-U]] que le catalogue utilise pour les dépenses ordinaires d'un ménage. Sélectionnez **Living expenses** dans [[nav:transforms]] et le curseur **Croissance des dépenses** s'ouvre sur ce taux. L'image de la ligne est plus bas, dans [Une année plus rapide](#a-faster-year).

Maya's wages augmente d'environ 3,5 pour cent par an jusqu'à ce que Maya prenne sa retraite. La fiche de **Maya's wages** nomme cette ligne **Croissance**, et elle se lit N(3.5%, 1.5%, μg=3.5%). De 2027 à sa dernière année de travail, la paie double à peu près, ce que font environ 3,5 pour cent par an sur ces vingt années. Le curseur **Croissance** de **Maya's wages** s'ouvre sur ce taux.

[Taux de croissance : ceux du système, et les vôtres](/learn/growth_rates_yours_and_the_systems) est la leçon pour un taux que le ménage connaît mieux que le catalogue et qu'il veut saisir lui-même.

L'hypothèque est l'exception. Survolez **Home mortgage** sur [[nav:cf-table]]. La ligne **Paiement** est d'environ $17,000 chaque année où le prêt figure au plan. Au-dessous, le [[term:principal]] augmente et les intérêts baissent, et les deux échangent leur place tandis que la somme reste en place. Le paiement suit le tableau d'amortissement, donc l'hypothèque reste en dehors des curseurs de croissance. [Qui l'inflation avantage](/learn/inflation_who_it_helps) est l'endroit où ce paiement plat devient le point de l'histoire.

Le bilan a lui aussi sa propre liste. La maison, le fonds d'actions du 401(k)<!-- term-skip: 401k — an account name in a list -->, et le fonds [[term:tips]] portent chacun le taux du catalogue de leur propre catégorie. La leçon suivante prend le temps du fonds TIPS.

Il n'y a pas un seul chiffre d'inflation dans le modèle, et il n'y a pas un seul chiffre d'inflation dans les prix qu'un ménage paie. Les coûts ont tendance à monter ensemble au fil du temps, et ils montent à des taux différents.

## Nominal et dollars d'aujourd'hui {#nominal-and-todays-dollars}

Le paiement de l'hypothèque est le même nombre de dollars chaque année, et ces dollars achètent moins du panier des courses à mesure que les prix montent.

Le menu **Affichage** de la barre du haut a deux façons de lire un dollar, sous **Pouvoir d'achat**. **Nominal** montre chaque montant dans la monnaie de sa propre année. **$ d'aujourd'hui** réexprime chaque montant futur en pouvoir d'achat d'aujourd'hui.<!-- term-skip: real — the sentence is the definition, and display basis is already pilled --> Ce choix est la [[term:display-basis|base d'affichage]]. Il change l'image et laisse le plan tel quel. [Rendements réels et nominaux](/learn/foundations_time_value_real_vs_nominal) est la visite plus longue de la même paire de lectures.

[[img:prices-display-basis|control]]

Restez sur Nominal et ouvrez [[nav:cf-chart]]. Survolez une année. L'infobulle liste **Home mortgage** comme un seul paiement, environ $17,000, avec le principal et les intérêts sur les lignes au-dessous. Ce total est le même en 2027 et dans une année plus tardive, comme 2035. La ligne **Paiement** de la fiche de l'hypothèque est le même nombre, écrit une fois pour tout le prêt.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

Passez à $ d'aujourd'hui. Survolez une année plus tardive. Le même paiement est dessiné comme moins de dollars d'aujourd'hui. Ce plan réexprime les dollars futurs à 3,5 pour cent par an, le taux de présentation de ses hypothèses. Un dollar promis dans vingt ans est dessiné comme moins d'un dollar aujourd'hui, donc un paiement qui est plat dans le carnet de chèques paraît plus léger dans les courses d'aujourd'hui.

C'est le germe de la leçon suivante. Le montant en dollars du prêt est resté immobile. La paie de Maya a monté. Le poids du paiement a baissé. Les prix peuvent aider la personne qui doit une pile fixe de dollars.

Les images de cette leçon sont le graphique Nominal. Choisissez $ d'aujourd'hui dans le menu Affichage quand vous voulez la lecture en pouvoir d'achat.

## Changer une seule facture {#change-one-bill}

L'université est la facture que vous pouvez pousser seule, et le reste du plan reste sur les taux qu'il avait déjà.

Maya peut s'inquiéter des quatre années de Sam sans décider que les courses, les salaires et l'hypothèque doivent tous accélérer ensemble. [[nav:transforms]] est l'endroit pour essayer cela. Dépliez **Modifications**. Sur la carte Modifiables, sélectionnez **Sam's college**.

[[jump:inflation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.cash-flows]]

[[img:prices-college-modifiable|control]]

L'éditeur à côté de la fiche a un curseur **Croissance des coûts**. Il s'ouvre près de 4,5 pour cent et va de 0 à 25 pour cent. Amenez-le à 12 pour cent.

[[img:prices-college-editor|control]]

C'est une hausse rapide sur cette seule facture. Le graphique de flux de trésorerie dessine le plan enregistré sous Original et cet essai sous Modifié, pour les années où Sam est à l'université. Sam's college est la bande bleue sous l'axe. Sur le graphique Modifié, ces barres sont plus hautes, parce que cette facture a crû plus vite. Living expenses, les salaires, la Social Security, la pension et l'hypothèque restent sur leurs propres taux.

[[img:prices-college-growth]]

Fermez Transformations, ou effacez le changement, et le plan enregistré est celui que vous avez ouvert. Le test de stress n'a jamais eu à devenir un nouveau dossier.

Un ménage avec trois enfants qui se dirigent vers l'université fait la même chose sur son propre plan : sélectionnez la ligne universitaire, déplacez ce seul curseur, et lisez le graphique. Les autres factures gardent les taux qu'elles avaient.

## Une année plus rapide {#a-faster-year}

Une année difficile pour les prix est quelque chose que vous pouvez poser sur la facture des courses, et le curseur montre jusqu'où ce plan emmène cet essai.

Sélectionnez **Living expenses** sur la même carte Modifiables.

[[img:prices-living-modifiable|control]]

**Croissance des dépenses** s'ouvre près de 2,8 pour cent. Le curseur va jusqu'à environ trois fois ce taux de chaque côté de l'endroit où il s'est ouvert, donc cette facture de courses peut être réglée près de 8 pour cent, ou près de 8 pour cent au-dessous de zéro. Faites-le glisser vers le haut et regardez la ligne des dépenses de vie en Nominal. Tout le reste tient. C'est un ménage qui demande ce qu'une période de prix plus rapide ferait à sa propre facture de courses.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

La variation sur douze mois du CPI-U était de 9,1 pour cent en juin 2022, et de 14,8 pour cent en mars 1980. Le haut de ce curseur, près de 8 pour cent, se situe dans le voisinage de ce pic de 2022 pour une seule année, et il s'arrête avant 1980. L'[[term:hyperinflation|hyperinflation]], dans la définition de Philip Cagan de 1956, commence un mois où les prix augmentent de 50 pour cent ou plus. L'Allemagne en 1923, la Hongrie en 1946, le Zimbabwe en 2008 et le Venezuela dans les années 2010 ont franchi cette ligne. Le curseur est un stress pour la facture de courses de Maya. Un mois comme ceux-là se situe bien au-dessus. [Qui l'inflation avantage](/learn/inflation_who_it_helps) écrit les causes présumées d'une hausse et d'une baisse, et la chute des prix à la consommation des États-Unis de 1930 à 1933.

</div>
</aside>

L'autre sens du même curseur est une baisse des prix. [Qui l'inflation avantage](/learn/inflation_who_it_helps) s'en sert, avec la paie de Maya, la pension et la Social Security, pour demander qui gagne quand les prix montent et qui gagne quand ils baissent.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Ouvrages cités — les publications derrière les chiffres</summary>
<div class="lesson-bibliography-body">

- Bureau of Labor Statistics des États-Unis, [communiqué de l'indice des prix à la consommation de juin 2022](https://www.bls.gov/news.release/archives/cpi_07132022.htm). Le CPI-U a augmenté de 9,1 pour cent sur les douze mois se terminant en juin 2022.
- Bureau of Labor Statistics des États-Unis, [Les prix à la consommation en hausse de 8,5 pour cent pour l'année terminée en mars 2022](https://www.bls.gov/opub/ted/2022/consumer-prices-up-8-5-percent-for-year-ended-march-2022.htm). Le tableau des variations antérieures sur douze mois inclut mars 1980 à 14,8 pour cent.
- Philip Cagan, « The Monetary Dynamics of Hyperinflation », dans Milton Friedman, dir., *Studies in the Quantity Theory of Money*, University of Chicago Press, 1956. L'hyperinflation commence le mois où les prix augmentent de plus de 50 pour cent.

</div>
</details>
