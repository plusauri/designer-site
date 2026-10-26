<!--
tutilis-return: lessons/charts_and_tables/prose/fr.md
tutilis-locale: fr translated
-->
# Lire les graphiques et les tableaux

Une prévision est l'histoire d'un foyer, racontée une année à la fois. Le [[nav:forecaster]] la raconte à travers une poignée de vues, et chaque vue répond à une question différente. Le bilan dit ce que vaut le foyer. Le flux de trésorerie dit ce qui est entré et ce qui est sorti. Mouvements de fonds dit quels comptes ont payé la différence, et les cartes fiscales disent d'où vient chaque impôt.

Cette leçon est une visite de ces vues. Elle porte surtout sur l'outil, et elle n'aborde la finance que là où la finance vous dit quelle carte ouvrir. Le foyer Springfield sur le [[term:canvas]] est un couple marié dans l'Ohio dont les deux membres travaillent, qui possède une maison avec un prêt immobilier et qui perçoit la Social Security à la retraite, de sorte que chaque vue a quelque chose des deux côtés.

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Où se trouvent les graphiques et les tableaux, et comment les allumer ?** Voir [Où se trouvent les vues](#where-the-views-live).
2. **Pourquoi chaque graphique a-t-il une moitié haute et une moitié basse ?** Voir [Deux graphiques en un](#two-charts-in-one).
3. **Quelle histoire raconte le bilan ?** Voir [Bilan : patrimoine net](#balance-sheet-net-worth).
4. **Quelle histoire raconte le flux de trésorerie ?** Voir [Flux de trésorerie : entrées et sorties](#cash-flow-in-and-out).
5. **Comment les deux se relient-ils ?** Voir [Les Mouvements de fonds relient les deux](#money-movements-joins-them).
6. **Comment ces vues se comparent-elles aux états d'un comptable ?** Voir [Trois états](#three-statements).
7. **Qu'ajoutent les tableaux que les graphiques ne montrent pas ?** Voir [Les tableaux et leurs survols](#tables-and-their-hovers).
8. **Où voir ce qui change au cours d'une année donnée ?** Voir [La carte de l'année](#the-year-card).
9. **Où chercher un impôt en particulier ?** Voir [Les cartes fiscales](#the-tax-cards).
10. **Comment passer d'un mot à la carte qui le montre ?** Voir [Trouver une carte par son mot](#find-a-card-by-its-word).

</div>
</aside>

## Où se trouvent les vues {#where-the-views-live}

Chaque vue de cette leçon est une carte du **Détail de prévision**, la première section du [[nav:forecaster]]. **[[key:ForecastDetail]]** l'ouvre. Le long de son en-tête court une rangée de puces, une par carte, et chaque puce allume ou éteint sa carte. La première rangée porte les vues centrales : [[nav:bs-chart]] et [[nav:bs-table]] pour le bilan, [[nav:cf-chart]] et [[nav:cf-table]] pour le flux de trésorerie, [[nav:si-chart]] et [[nav:si-table]] pour les Mouvements de fonds, [[nav:rec]] pour le rapprochement, et **Yr** pour la carte de l'année. La deuxième rangée porte les angles fiscaux : [[nav:taxes]], [[nav:brackets]] et [[nav:cliffs]].

[[img:charts-tables-fd-chips|control]]

Les puces 📈 sont des graphiques qui couvrent chaque année du plan, et les puces ▦ sont des tableaux qui montrent une année en entier. Les deux fonctionnent en paire. Vous repérez une année sur un graphique, vous cliquez sa barre pour la sélectionner, et les tableaux en dessous passent à cette année. Les puces que vous allumez sont mémorisées, de sorte que le Prévisionniste s'ouvre tel que vous l'avez laissé.

Quand vous voulez tout voir sans réarranger vos puces, le menu [[nav:peek]] ouvre chaque graphique, chaque tableau, ou chaque graphique à côté de son tableau, par-dessus l'application. Appuyez sur **[[key:Peek]]**, puis sur une lettre.

## Deux graphiques en un {#two-charts-in-one}

Beaucoup d'outils de planification dessinent le patrimoine net sur un graphique, les revenus sur un deuxième et les dépenses sur un troisième. Tutilis dessine le bilan et le flux de trésorerie comme des graphiques à deux côtés. Ce que le foyer possède, ou ce qui entre, monte depuis l'axe des années. Ce qu'il doit, ou ce qui sort, descend depuis le même axe, sur la même échelle en dollars. Une fine ligne noire de solde court entre les deux moitiés.

Chaque graphique porte les deux moitiés de son sujet, et le solde entre elles est l'histoire.

Lire un seul graphique au lieu de deux ou trois a un avantage pratique. Une barre haute en haut ne vous rassure que si vous voyez aussi ce qui se trouve en dessous, et sur un graphique à deux côtés vous ne pouvez pas voir l'un sans l'autre. La ligne de solde fait ensuite l'arithmétique pour vous, année après année.

Les deux graphiques partagent deux habitudes qui valent la peine d'être apprises une fois. Le bouton 📅 à l'extrémité gauche de l'axe des années fait passer les étiquettes des années civiles à l'âge de chaque personne, ce qui est en général la façon la plus naturelle de lire une retraite. Et chaque barre s'explique quand vous posez le pointeur dessus. Maintenez **Alt** pour masquer les infobulles pendant que vous traversez un graphique.

## Bilan : patrimoine net {#balance-sheet-net-worth}

Le [[nav:bs-chart]] répond à la question « que vaut le foyer ? » pour chaque année du plan. Son sujet est le [[term:net-worth]], tout ce qui est possédé moins tout ce qui est dû.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-chart]]

[[img:charts-tables-bs-chart]]

Au-dessus de l'axe, les actifs de chaque année sont empilés par nature. Pour Springfield, le [[term:brokerage]] est vert, le [[term:401k|401(k)]] [[term:traditional]] est bleu, les autres comptes sont gris, et la maison est posée au sommet en ambre. Sous l'axe, le prêt immobilier pend en rouge. Il est court, parce que l'emprunt est petit à côté des actifs, et il rétrécit chaque année jusqu'à disparaître après 2047. Une fine barre noire se tient à côté de l'empilement de chaque année tant qu'il reste un passif à soustraire, et la ligne noire de patrimoine net relie les sommets.

La forme de cette ligne est l'histoire. Le patrimoine net monte pendant les années de travail et continue de monter bien avant dans la retraite, parce que les comptes croissent plus vite que le foyer n'y puise. Il culmine en 2063, puis s'infléchit vers le bas. La baisse qui suit est les [[term:ltc|soins de longue durée]] du plan, qui arrivent en 2064, et le graphique de flux de trésorerie de la section suivante le montre clairement.

Posez le pointeur sur une année et l'infobulle liste tout le bilan de cette année, du patrimoine net en haut jusqu'à chaque nature d'actif et chaque nature de dette en dessous.

[[img:charts-tables-bs-chart-hover]]

Les montants en dollars du graphique sont en [[term:nominal]], donc une partie de la montée est de l'[[term:inflation]]. Le menu **Affichage** de la barre du haut montre le même graphique en dollars d'aujourd'hui quand vous voulez l'image réelle.

## Flux de trésorerie : entrées et sorties {#cash-flow-in-and-out}

Le [[nav:cf-chart]] répond à une autre question : « comment le foyer a-t-il vécu cette année ? » Les entrées montent depuis l'axe et les sorties descendent, et le solde est les revenus moins les dépenses moins les impôts.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

[[img:charts-tables-cf-chart]]

Pour Springfield, les barres de revenu sont hautes tant que les deux personnes travaillent. Elles descendent d'un cran en 2041, quand Homer prend sa retraite, et encore en 2045, quand Marge le fait, et après cela la Social Security est le seul revenu. Sous l'axe, le coût de la vie est ambre, les coûts de santé sont violets et les impôts sont rouges. La bande violette enfle en 2064, quand les soins de longue durée commencent.

La ligne de solde vous dit quelque chose que le graphique du bilan ne dit pas. Elle se tient sous l'axe chaque année, même pendant les années de travail, parce que ce foyer dépense plus que ce que les salaires rapportent à la maison. Le graphique du bilan continue pourtant de monter sur ces années, parce que les comptes rapportent plus que ce que le foyer en retire. Lire les deux graphiques ensemble, c'est voir les deux faits à la fois.

Posez le pointeur sur une année et l'infobulle nomme l'année et l'âge de chaque personne, puis le solde, puis l'argent entré et l'argent sorti, chaque partie sur sa propre ligne.

[[img:charts-tables-cf-chart-hover]]

Quels revenus et quelles dépenses ont une bande à eux, c'est vous qui le décidez. La commande **Segments** dans la barre d'outils de la carte choisit les catégories à détacher, comme la Social Security ou les frais d'études, et tout le reste est rassemblé dans une bande « restant ». Choisissez les détachements qui racontent l'histoire que vous lisez.

## Les Mouvements de fonds relient les deux {#money-movements-joins-them}

Quand le flux de trésorerie est négatif, l'argent doit venir de quelque part, et quand il est positif, il doit aller quelque part. [[nav:si-chart]] montre où. Sa carte s'appelle **Mouvements de fonds**, et c'est le pont entre les deux grands graphiques. Elle montre la trésorerie levée en vendant des titres au-dessus de l'axe, et la trésorerie garée en investissant en dessous.

[[img:charts-tables-si-chart]]

L'image de Springfield suit l'histoire que le graphique de flux de trésorerie a racontée. Les ventes sont petites tant que les deux personnes travaillent, grandissent après les départs à la retraite, et sont rejointes en 2051 par les [[term:rmd|distributions minimales obligatoires]], les ventes que la loi fiscale impose depuis le 401(k) une fois qu'Homer atteint 75 ans. Elles sont les plus hautes pendant les années de soins de longue durée, quand le foyer vend le plus pour payer les soins. Chaque vente sort d'un compte, de sorte qu'un manque de trésorerie sur le graphique de flux de trésorerie devient un empilement plus court sur le graphique du bilan.

Le [[nav:si-table]] montre une année compte par compte et titre par titre : ce qui a été vendu, ce qui a été investi, le solde après, et la part de chacun dans l'activité de l'année. Sa dernière colonne, **Pourquoi**, donne la raison de chaque mouvement.

[[img:charts-tables-si-table-2030]]

La colonne Pourquoi est l'endroit où un chiffre surprenant s'explique. En 2030, le plan vend un peu de chaque compte en proportion de sa taille, ce que demande sa règle de retrait au prorata. Homer a 54 ans cette année-là, donc la part qui vient du 401(k) traditionnel est un retrait anticipé. Posez le pointeur sur la pastille Pourquoi de cette ligne et les raisons sont listées en entier, le retrait anticipé parmi elles. La carte fiscale, plus loin dans cette leçon, montre la pénalité que cela coûte, et [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) compare cette règle avec une règle qui puise d'abord dans les comptes imposables.

## Trois états {#three-statements}

Les comptables décrivent une entreprise avec trois états standard, et les vues du Prévisionniste s'alignent de près sur eux.

- Le **bilan** liste ce qui est possédé et ce qui est dû à un instant. Le [[nav:bs-chart]] en dessine un à la fin de chaque année.
- Le **compte de résultat** liste ce qui est entré et ce qui est sorti sur une période, et sa dernière ligne est ce qui a été épargné. Le solde du [[nav:cf-chart]] est cette dernière ligne pour un foyer.
- Le **tableau des flux de trésorerie** explique pourquoi la trésorerie a changé. Il a trois parties : l'activité d'exploitation, l'activité d'investissement et l'activité de financement. Le graphique de flux de trésorerie est la partie exploitation. Mouvements de fonds est la partie investissement (ventes et investissements) et la partie financement (emprunts).

Les livres d'un foyer sont plus simples que ceux d'une entreprise, donc le compte de résultat et la partie exploitation du tableau des flux de trésorerie coïncident presque. C'est pourquoi Tutilis les dessine comme un seul graphique.

La carte [[nav:rec]] réunit les trois pour une année. Elle écrit l'année comme une équation de bilan, chaque source de trésorerie à gauche et chaque emploi à droite, et dessine la même année en dessous comme un flux depuis chaque source, à travers la trésorerie de l'année, vers chaque emploi.

[[img:charts-tables-rec-2030]]

En 2030, les revenus de Springfield, les distributions réinvesties et les ventes s'additionnent exactement à ses dépenses, ses impôts et ses investissements. L'équation est toujours équilibrée, et c'est ce qui la rend utile. Quand un chiffre sur une autre carte semble ne pas tomber juste, cette carte montre où est allé chaque dollar de l'année.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

Les entreprises publient aussi un quatrième état, l'état des variations des capitaux propres, qui explique comment la part des propriétaires a bougé pendant l'année. Pour un foyer, la part des propriétaires est le patrimoine net, et la ligne noire du graphique de bilan trace déjà comment il passe d'une année à la suivante.

</div>
</aside>

## Les tableaux et leurs survols {#tables-and-their-hovers}

Les tableaux montrent une année en entier. C'est là que vous lisez un montant exact, et là que chaque ligne peut vous dire d'où elle vient.

Le [[nav:bs-table]] commence par le patrimoine net, puis sépare les actifs en actifs réels et en comptes, et finit par les passifs. La puce **Titres** dans sa barre d'outils ouvre chaque compte sur les fonds qu'il détient.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:charts-tables-bs-table-2030]]

Beaucoup de montants reposent sur une petite pastille marquée **i**. Posez le pointeur sur la pastille et la carte de l'élément s'ouvre à côté. Sur le bilan, la carte montre le solde de fin au dollar, que le tableau arrondit, au-dessus de l'élément tel que le plan le décrit. Pour un compte, cela veut dire son titulaire et chaque fonds qu'il détient, avec sa catégorie, sa valeur et son coût.

[[img:charts-tables-bs-row-card]]

Le [[nav:cf-table]] fait la même chose pour le flux de trésorerie. Il commence par le solde, liste chaque revenu et chaque dépense sous sa catégorie, et liste les impôts par nature. Sous les sorties, il liste les ventes qui ont couvert le manque de l'année, qui sont les mêmes ventes que Mouvements de fonds explique.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:charts-tables-cf-table-2030]]

[[term:hover|Survolez]] la pastille d'une ligne de flux de trésorerie et vous voyez la carte à partir de laquelle cette ligne a été construite. Quand la ligne vient d'un générateur, comme un salaire ou une phase de dépenses de vie, la carte montre les entrées du générateur. Survolez une ligne de dividende ou d'intérêt et la carte montre le calcul derrière : la valeur du titre multipliée par chacun de ses rendements.

Chaque carte de tableau a aussi un bouton de copie, qui copie le tableau comme du texte que vous pouvez coller dans un tableur ou une note.

## La carte de l'année {#the-year-card}

La carte de l'année, **Yr** sur la rangée de puces, liste ce qui change dans l'année sélectionnée. Elle est groupée en événements de vie, flux de trésorerie qui commencent ou finissent, et plafonds de versement qui s'appliquent. C'est la carte à ouvrir quand une barre d'un graphique monte ou descend d'un cran et que vous voulez savoir pourquoi.

[[img:charts-tables-year-events-2041]]

En 2041, Homer prend sa retraite à 65 ans et commence Medicare, les dépenses de vie de la retraite remplacent celles du travail, et Marge prend un régime de santé à elle jusqu'à ce qu'elle atteigne l'âge de Medicare. Cette seule carte explique la descente des barres de revenu et le changement de la bande de santé sur le graphique de flux de trésorerie. La même liste apparaît dans une infobulle quand vous posez le pointeur sur l'étiquette d'une année sous l'un ou l'autre graphique.

## Les cartes fiscales {#the-tax-cards}

La carte [[nav:taxes]] montre comment chacun des impôts de l'année a été calculé. Dans l'application, son titre se lit comme **Impôts — 2030 (solde payé 2031)**. L'impôt sur les salaires d'une année est retenu pendant cette année, et le reste de l'impôt de l'année, comme l'impôt sur les gains et les retraits, est réglé l'année suivante. C'est pourquoi le total de la carte ne correspond pas à la ligne Impôts du flux de trésorerie de la même année, qui montre ce qui a été réellement payé cette année-là : sa propre retenue plus le solde de l'année précédente.

[[img:charts-tables-tax-statements-2030]]

La carte contient jusqu'à trois relevés, côte à côte quand la carte est assez large, et chacun répond à des questions différentes.

- **Le relevé fédéral** construit le [[term:agi|revenu brut ajusté]] à partir de ses sources, montre le [[term:magi]] en dessous, soustrait la [[term:standard-deduction]], et liste chaque impôt avec le montant sur lequel il a été calculé et le montant établi. Regardez ici le revenu derrière une [[term:surcharge]] Medicare, les cotisations sociales, l'[[term:niit|impôt sur le revenu net de placement]], et les pénalités. En 2030, la dernière ligne est la [[term:early-withdrawal-penalty]] de 10 % sur la vente du 401(k) que Mouvements de fonds a expliquée.
- **Le relevé de l'État** part du revenu de base propre à l'État et liste les ajustements que l'État fait. L'Ohio soustrait les intérêts des bons du Trésor américain, que les États n'ont pas le droit d'imposer, et ajoute un [[term:local-income-tax|impôt local sur le revenu]] sur les salaires. Regardez ici quand déménager dans un autre État est la question, ou quand une source de revenu est imposée autrement par l'État que par l'IRS.
- **Le relevé de la taxe foncière** liste chaque logement ou autre bien immobilier à sa valeur de marché avec le taux auquel il est imposé, de sorte que le taux en vigueur est sur l'étiquette de sa ligne. Regardez ici quand un logement est une grande part du plan, parce que la [[term:property-tax]] est due que le logement rapporte quelque chose ou non. [Taxe foncière : le tueur silencieux](/learn/property_tax_the_silent_killer) la suit à travers une retraite.

Sous les relevés, **Consulter les barèmes fiscaux américains** ouvre les barèmes fédéraux et de l'État de l'année, pour que vous puissiez vérifier une [[term:bracket]] ou un plafond contre le chiffre qu'il a produit.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules]]

Deux autres angles se tiennent à côté de la puce Impôts, et chacun a sa propre leçon. [[nav:brackets]] empile le revenu de l'année contre les tranches fédérales et montre combien de place reste avant le taux suivant, ce qui est l'outil pour planifier les conversions et les retraits. [Remplir les tranches bon marché](/learn/filling_the_cheap_buckets) l'enseigne. [[nav:cliffs]] mesure à quel point le revenu de l'année s'approche de chaque seuil où un coût saute d'un coup, ce que Tutilis appelle un [[term:cliff]]. Un palier de surprime Medicare en est un. [Radar de seuils](/learn/cliff_radar_forecaster) enseigne celui-là.

## Trouver une carte par son mot {#find-a-card-by-its-word}

Toutes ces cartes ne sont utiles que si vous pouvez trouver la bonne vite, et le Glossaire est fait pour cela. **[[key:Glossary]]** l'ouvre, même pendant que vous tapez dans un champ. Cherchez un mot et vous obtenez sa définition, et sous la définition une carte dorée intitulée **Où le trouver dans l'application**.

[[img:charts-tables-glossary-net-worth]]

La carte Où liste les chemins vers chaque endroit où le mot apparaît. Certains mots n'ont qu'une sortie. Le patrimoine net s'affiche dans la ligne du haut du tableau de bilan et dans la Vue d'ensemble. D'autres mots ont jusqu'à trois sortes de chemins : où vous saisissez la valeur dans le plan, où vous essayez un changement comme un « et si » dans Transformations, et où le résultat s'affiche dans la prévision. Cliquez un chemin et le Glossaire se ferme, l'application suit le chemin, et la carte qu'il nomme s'ouvre en gros plan. Sans plan ouvert, les chemins sont montrés mais ne peuvent pas être suivis.

[[img:charts-tables-glossary-property-tax]]

La taxe foncière montre les trois. Elle est saisie sur un actif réel dans le plan, essayée comme un « et si » dans Transformations, et montrée à deux endroits dans la prévision, sur le relevé de la taxe foncière de la carte Impôts et sur la ligne Taxe foncière du tableau de flux de trésorerie. Cela fait du Glossaire le chemin le plus rapide vers une carte que vous ne connaissez pas. Cherchez le mot que vous connaissez, et laissez la carte Où vous mener à l'endroit qui le montre.

[[jump:property-tax]]

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

Les chemins **Où le saisir** mènent aux éditeurs propres au plan, et seule l'application de bureau les a. Les plans du Centre d'apprentissage sont des plans pédagogiques en lecture seule, donc sur le canevas à côté de cette leçon ces chemins n'ont nulle part où aller. Dans l'application de bureau, là où vous saisissez les chiffres de votre propre foyer, le même chemin ouvre le champ où la valeur est fixée, comme la taxe foncière de votre logement dans le Dossier.

</div>
</details>
