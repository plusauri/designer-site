<!--
tutilis-return: lessons/currency_on_every_amount/prose/fr.md
tutilis-locale: fr translated
-->
# Pourquoi chaque montant a une devise

Noor vit et travaille aux États-Unis. Le salaire est en dollars, les dépenses de la vie courante sont en dollars, le compte-titres est en dollars. Mais Noor possède aussi un appartement à Tokyo loué à un locataire, un compte d'épargne laissé après quelques années à Francfort, et une petite villa au Costa Rica achetée pour la retraite. Quatre devises, un ménage, un plan.

Si vous n'avez jamais planifié que dans une seule devise, la liste déroulante de devise à côté de chaque montant dans l'éditeur du plan peut sembler excessive. Vous tapez `500,000`, et il y a un `$ USD` juste à côté que vous ne touchez jamais. Pourquoi est-il là ?

Cette leçon est la réponse. Basculez entre les deux plans sur le [[term:canvas]] en lisant : ils contiennent les **mêmes chiffres**. La seule différence est si chaque montant dit dans quoi il est compté.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Utilisateur avancé</p>
<div class="lesson-power-user-body">

Un plan en plusieurs devises est une fonction **Utilisateur avancé**. Le plan d'un utilisateur typique garde chaque montant dans une seule devise, de sorte que la devise à côté de chaque montant et l'onglet Devise des Hypothèses n'apparaissent qu'avec Utilisateur avancé activé. Activez-le sous [[nav:advanced]] → Paramètres de l'application → **Utilisateur avancé**.

</div>
</aside>

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Pourquoi chaque montant porte-t-il une devise à côté de son nombre ?** Voir [Un nombre n'est pas un montant](#a-number-is-not-an-amount).
2. **Comment un plan enregistre-t-il des montants qui sont en plusieurs devises ?** Voir [Ce que le plan enregistre](#what-the-plan-records).
3. **Où les montants étrangers sont-ils convertis, et comment sont-ils imposés ?** Voir [Où la conversion a lieu](#where-the-conversion-happens).
4. **Qu'est-ce qui tourne mal lorsqu'un montant étranger est saisi sans sa devise ?** Voir [Les mêmes chiffres, sans étiquette](#same-digits-no-tag).
5. **Pourquoi n'y a-t-il pas un seul réglage de devise pour tout le plan ?** Voir [Pourquoi pas un seul réglage](#why-not-one-setting-for-the-plan).
6. **D'où viennent les taux de change, et peuvent-ils bouger pendant la prévision ?** Voir [Les taux d'aujourd'hui, et les taux qui bougent](#rates-today-and-rates-that-move).

</div>
</aside>

## Un nombre n'est pas un montant {#a-number-is-not-an-amount}

L'appartement de Tokyo vaut `65,000,000`. Soixante-cinq millions *de quoi*, voilà toute la question. Soixante-cinq millions de yens, c'est un appartement modeste ; soixante-cinq millions de dollars, c'est un gratte-ciel. Les chiffres sont les mêmes, et rien en eux ne vous dit lesquels.

Ainsi, un montant dans Tutilis est trois choses, pas une : une **année** dans laquelle il a été coté, une **devise** dans laquelle il est compté, et le nombre. L'année est ce qui fait qu'une estimation de 2024 signifie de la monnaie de 2024 plutôt que l'année où le plan commence. La devise est ce qui fait que `65,000,000` signifie un appartement plutôt qu'un gratte-ciel. Ni l'une ni l'autre n'est une décoration ; omettez l'une ou l'autre et le nombre est une conjecture.

Pour un ménage qui ne traite jamais qu'en dollars, la devise ne coûte rien. C'est la valeur par défaut, donc vous ne la choisissez jamais, et lorsque le plan est enregistré un montant en dollars n'enregistre même pas de devise : « aucune devise indiquée » *signifie* des dollars américains. La liste déroulante que vous ne touchez jamais est tout le prix de la fonction.

## Ce que le plan enregistre {#what-the-plan-records}

Ouvrez **Dossier** sur le plan étiqueté et regardez ce que chaque poste dit de lui-même. Chaque poste porte sa propre devise, et rien n'est converti là où il est stocké :

| Poste | Enregistré comme |
| --- | --- |
| Tokyo condo | ¥65,000,000, coté en 2024 |
| Tokyo condo · building management fee | ¥360,000 par an, coté en 2024 |
| Tokyo condo rent | ¥2,400,000 brut par an, coté en 2026 |
| Frankfurt savings | €60,000, coté en 2026 |
| Costa Rica villa | ₡55,000,000, coté en 2025 |
| Brokerage, salary, living expenses | dollars |

Deux détails sont faciles à manquer. Le **coût de revient** de l'appartement est un nombre nu, `52,000,000`, sans devise propre : il emprunte celle de l'évaluation. Un coût de revient n'a de sens que face à la valeur à laquelle il sera comparé, donc les deux sont tenus dans une seule devise par construction, et lorsque vous changez la devise de l'évaluation dans l'éditeur le coût de revient suit aussitôt. Et le **loyer** n'est pas du tout une propriété de l'appartement ; c'est son propre poste, un générateur de revenu locatif, avec sa propre devise. Un appartement en yens pourrait en principe être loué en dollars, donc le modèle ne le suppose pas.

« Enregistré, pas converti » est la règle. Le plan que vous avez saisi est le plan sur le disque. Chaque conversion que vous verrez jamais est calculée à partir de ces montants d'origine et d'un taux, sur le chemin de l'écran.

## Où la conversion a lieu {#where-the-conversion-happens}

La **Vue d'ensemble** est le premier endroit où les quatre devises se rencontrent. Elle montre les postes du plan comme une seule liste de valeurs actuelles, et elle doit choisir une seule devise pour le faire : votre devise d'affichage, ici des dollars :

| Poste | Valeur actuelle |
| --- | ---: |
| Tokyo condo | ≈ $489,000 |
| Costa Rica villa | ≈ $95,000 |
| Brokerage | $500,000 |
| Frankfurt savings | ≈ $64,000 |

L'appartement en yens vaut un peu moins que le compte-titres en dollars ; la villa en colóns est une petite fraction de l'un ou de l'autre. Chaque ligne convertie porte un marqueur, `(¥↔$)`, la devise dans laquelle elle a été modélisée puis celle dans laquelle elle est affichée, de sorte qu'un chiffre converti ne passe jamais pour un chiffre d'origine. Le bouton **FX** du rail liste chaque devise que le plan détient et le taux derrière chaque marqueur.

La prévision fait la même chose, un niveau plus profond. Le moteur simule chaque poste **dans sa propre devise** : l'appartement s'apprécie en yens, le loyer croît en yens, les frais de gestion s'inflatent en yens, et il ne convertit qu'aux bords, là où les flux de trésorerie d'une année sont soldés et là où un bilan est totalisé. Réglez le prévisionniste sur **2027** et lisez l'état des flux de trésorerie : le loyer arrive à environ **$12,500** net des charges du bien, à côté d'un salaire d'environ $160,000. Ces $12,500 sont un chiffre en yens qui a franchi la frontière une fois, au taux du plan.

[[jump:passive-income|output__forecaster__forecaster.forecast-detail__cf-table__line.cf.rental-business]]

Les impôts franchissent la même frontière. Noor déclare aux États-Unis, donc le loyer en yens est imposé comme un revenu passif américain, en dollars, sur le même état que le salaire. Le calculateur d'impôt choisit son unité de compte d'après la juridiction, pas d'après le poste, et c'est pourquoi le poste doit dire dans quoi il est.

## Les mêmes chiffres, sans étiquette {#same-digits-no-tag}

Passez maintenant à **Same digits, no tag**. Rien n'a été ressaisi. Chaque montant a simplement cessé de dire dans quelle devise il est, ce qui, comme ci-dessus, signifie que le plan lit chacun d'eux comme des dollars.

| | Every amount tagged | Same digits, no tag |
| --- | ---: | ---: |
| Tokyo condo sur la Vue d'ensemble | ≈ $489,000 | $65,000,000 |
| Patrimoine net, fin 2027 | ≈ 1,3 million $ | ≈ 126 millions $ |
| Tokyo condo rent en 2027 | ≈ $12,500 | ≈ 1,7 million $ |

Noor est désormais un ménage à neuf chiffres sur le papier, avec un appartement qui rapporte plus de loyer chaque année que le salaire en une décennie. La réussite est un 100 % parfait. Chaque tableau est cohérent en interne ; chaque tableau est faux.

Rien dans le logiciel ne peut attraper cela. `65,000,000` est un montant en dollars parfaitement légal, et un plan ne peut pas distinguer un chiffre en yens sans étiquette d'un vrai : ce sont les mêmes octets. La seule défense est que le montant dit ce qu'il est *au moment où il est saisi*, par la seule personne qui le sait. C'est à cela que sert la liste déroulante.

Ce n'est pas une hypothèse. Le moteur a eu exactement ce bogue : une évaluation en yens lue pour sa valeur faciale comme des dollars, du côté de la prévision seulement, de sorte que la Vue d'ensemble et le prévisionniste divergeaient de plus de cent pour un. La correction n'a pas été de convertir plus habilement ; elle a été de faire porter à chaque poste sa devise tout au long de la simulation, et un test tient désormais le moteur à cela.

## Pourquoi pas un seul réglage {#why-not-one-setting-for-the-plan}

La conception moins chère et évidente est une seule devise pour tout le plan : une liste déroulante, dans les réglages, et chaque montant en hérite. Elle fonctionne exactement aussi longtemps que chaque montant est vraiment dans cette devise, et elle échoue le jour où l'un ne l'est pas.

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

Cette liste déroulante est le choix de devise du plan. Sur ce plan elle est réglée sur plusieurs devises, et le sélecteur en dessous ne fait qu'amorcer le prochain montant que vous saisissez.

[[img:currency-on-policy|control]]

*Le choix de devise sur [Every amount tagged](#canvas-dossier:currency_tagged).*

</div>
</details>

Le plan de Noor n'a pas de réponse honnête à « dans quelle devise est ce plan ». Il est dans quatre. Dès qu'un seul poste étranger apparaît, un réglage au niveau du plan doit devenir un réglage par poste, et chaque montant déjà saisi doit être repris et étiqueté, par quelqu'un qui ne se souvient peut-être plus quelle estimation était dans quelle monnaie. Les montants saisis avant le changement et les montants saisis après sont indiscernables sur le disque. C'est le verrouillage : non pas qu'il soit difficile d'ajouter le champ plus tard, mais que rien de saisi avant ne puisse être cru ensuite.

Attacher la devise au montant dès le premier jour est la forme honnête. Elle ne dit rien qu'un ménage à devise unique doive penser, et elle coûte une valeur par défaut qui n'est même pas écrite. Ce qu'elle achète, c'est que le premier poste étranger est une ligne de plus, pas une migration.

## Les taux d'aujourd'hui, et les taux qui bougent {#rates-today-and-rates-that-move}

Les taux derrière chaque conversion ci-dessus vivent sur le plan. Ouvrez **Hypothèses → Devise** pour les voir : un taux par devise contre le dollar, de sorte qu'aucune combinaison de modifications ne peut être incohérente avec elle-même. Ces deux plans ne portent aucun taux propre et suivent l'instantané fourni ; un vrai plan peut saisir les siens, ou appuyer sur **Obtenir le dernier FX** et affiner.

[[jump:fx]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

[[img:currency-on-fx-rates|control]]

*Hypothèses → Devise sur [Every amount tagged](#canvas-dossier:currency_tagged). Une ligne par devise contre le dollar, et Taux de change réglé sur Fixes.*

</div>
</details>

Par défaut les taux ne bougent pas. Chaque année de la prévision convertit au même taux, ce qui signifie qu'un plan qui n'a pas demandé autre chose traite la devise comme une unité et non comme un risque : l'appartement en yens croît à un taux immobilier, et le fait que le yen lui-même va errer face au dollar sur quarante ans ne fait pas partie de la dispersion. Cette valeur par défaut est délibérée, et c'est exactement ce que faisait chaque plan avant que le modèle de risque de change existe.

Le modèle est là quand vous le voulez. Sous le tableau des taux, le même panneau offre **Taux de change : Fixes | Modélisés**. Choisissez *Modélisés* et chaque taux devient une partie de la simulation : il dérive avec l'[[term:inflation]] de sa région par rapport aux États-Unis et erre avec un taux réel qui revient vers sa moyenne sur quelques années, tiré par trajectoire, de sorte que la prévision peut dire quelle part de la dispersion d'un ménage vient de ses devises. Parce que chaque poste porte déjà sa devise à travers toute la simulation, le modèle s'insère à la frontière de conversion et ne change rien à la façon dont un plan est écrit. La leçon *Le risque de change dans la prévision* le parcourt sur un ménage construit pour cela.

Deux leviers plus petits existent aujourd'hui sous [[term:transforms]]. **Convertir** réexprime un poste dans une autre devise au taux du plan, de sorte que vous pouvez demander à quoi ressemble le ménage si l'appartement est vendu et le produit ramené. **Redénominer** réétiquette la devise sans convertir, ce qui est le nom honnête de ce que le second plan de cette page a fait par accident.

## À retenir {#what-to-take-away}

- Un montant est un nombre, une année et une devise. Omettez l'un des trois et c'est une conjecture.
- La devise est gratuite lorsque vous n'en avez pas besoin. Les dollars sont la valeur par défaut, et un montant en dollars n'en enregistre même pas une.
- Rien n'est converti là où il est stocké. La conversion a lieu sur le chemin de l'écran et aux bords de la prévision, toujours à partir du montant d'origine et d'un taux que vous pouvez voir.
- Les mêmes chiffres sous la mauvaise étiquette ne sont pas une petite erreur. Ils sont un autre ménage.
- Enregistrer la devise dès le premier jour est ce qui fait du premier poste étranger une ligne plutôt qu'une migration, et ce qui laisse le modèle de risque de change s'insérer à la frontière de conversion sans toucher à la façon dont un plan est écrit.
