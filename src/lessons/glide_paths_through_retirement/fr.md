<!--
tutilis-return: lessons/glide_paths_through_retirement/prose/fr.md
tutilis-locale: fr translated
-->
# Trajectoires de glide et retraite

Morgan a 63 ans et prend sa retraite en 2028, à 65 ans. Il y a $1.5 million d'épargne : $1 million dans un [[term:ira|IRA]] [[term:traditional]], $450,000 dans un [[term:brokerage]], et $50,000 dans un compte de marché monétaire. Environ 77 pour cent de cette somme sont dans un fonds indiciel S&P 500, et le reste dans un fonds de bons du Trésor à échéance intermédiaire et en liquidités. C'est le même ménage que dans la leçon [Plus de sécurité à l'approche de la retraite](/learn/safer_approaching_retirement), qui compare des répartitions constantes. Cette leçon laisse la répartition changer avec les années.

Une [[term:glide-path|trajectoire d'allocation]] est une répartition cible qui change avec le temps. Celle que cette leçon étudie est la **tente obligataire**. Elle détient le moins d'actions à la date de la retraite, quand un krach fait le plus de dégâts, et elle remet des actions à mesure que la retraite avance. La leçon ouvre trois plans pour Morgan :

- [Tente obligataire](#canvas-dossier:glide_bond_tent) vise 40 pour cent d'actions à la retraite en 2028, puis monte à 70 pour cent en 2043. La case **Rééquilibrer dans les comptes à fiscalité avantageuse** est cochée, donc l'IRA passe des ordres pour suivre la trajectoire.
- [60/40 constant](#canvas-dossier:glide_constant_sixty_forty) garde une seule répartition pour tout le plan, rééquilibrée elle aussi dans l'IRA.
- [Orientation seule](#canvas-dossier:glide_tent_steering_only) a la même tente obligataire, avec la case décochée. La trajectoire est écrite, mais l'IRA ne passe jamais d'ordre pour la suivre.

**Une trajectoire de glide est un plan d'opérations que vous devez faire vous-même.** Quand la tente obligataire montre un meilleur résultat dans cette leçon, ce résultat suppose que, chaque année, Morgan se connecte à l'IRA et vend ou achète des fonds pour s'aligner sur la cible. Tutilis ne peut pas passer ces ordres. S'ils ne sont pas passés, le portefeuille réel se comporte comme le plan *Orientation seule*, et ce plan fait pire que chacun des deux autres dans chaque krach que cette leçon teste. La section [Seulement si vous passez les ordres](#only-if-you-trade) y revient.

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Qu'est-ce qu'une trajectoire de glide, et pourquoi en ferait-on monter une après la retraite ?** Voir [Ce qu'est une trajectoire de glide](#what-a-glide-path-is).
2. **Comment est-ce que je définis une trajectoire de glide dans Tutilis ?** Voir [Définir une trajectoire](#set-a-path).
3. **Pourquoi une trajectoire a-t-elle besoin d'opérations dans l'IRA ?** Voir [L'orientation seule reste en retard](#steering-alone-lags).
4. **Que fait la tente obligataire année après année ?** Voir [La tente année après année](#the-tent-year-by-year).
5. **La tente aide-t-elle quand un krach tombe à la retraite ?** Voir [Quand un krach arrive](#when-a-crash-comes).
6. **Que coûte la tente quand les marchés sont favorables ?** Voir [Ce que coûte la tente](#what-the-tent-costs).
7. **Que faut-il qu'il se passe dans la vie réelle pour que tout cela soit vrai ?** Voir [Seulement si vous passez les ordres](#only-if-you-trade).
8. **Qu'ont trouvé Pfau et Kitces ?** Voir [Ce que dit la recherche](#what-the-research-says).

</div>
</aside>

## Ce qu'est une trajectoire de glide {#what-a-glide-path-is}

Une trajectoire de glide est un calendrier de répartitions cibles, une pour chaque année du plan. Les fonds à date cible en utilisent une. Un fonds 2030 détient surtout des actions quand ses porteurs sont jeunes et se déplace vers les obligations à l'approche de 2030, et les gérants du fonds passent les ordres. La plupart des trajectoires de glide ne vont que dans un sens, vers les obligations, et continuent après la date cible.

Les années autour de la date de retraite sont celles où une baisse du marché fait le plus de dégâts. Avant la retraite, un salaire couvre les dépenses, donc un krach est quelque chose que l'on peut attendre. Après, les dépenses de chaque année sont vendues depuis le portefeuille, et les parts vendues près du creux d'un krach manquent la reprise. C'est le [[term:sequence-of-returns|risque de séquence des rendements]], et la leçon [Le moment d'un krach](/learn/sequence_of_returns_crash_timing) le mesure.

Ce risque est le plus grand dans les premières années de retraite, et il s'estompe ensuite. Quand Morgan a 80 ans, un krach fait encore mal, mais il reste moins d'années à financer, et la Social Security en couvre une plus grande part. Wade Pfau et Michael Kitces ont demandé ce qui en découle. Si le danger culmine à la date de la retraite, c'est là qu'il faut détenir le moins d'actions, et les actions peuvent remonter ensuite. La forme qui en résulte, en baisse vers la retraite puis en hausse après, est ce que Kitces appelle une tente obligataire : la part des obligations monte jusqu'à un sommet à la retraite et redescend des deux côtés.

## Définir une trajectoire {#set-a-path}

La trajectoire de Morgan est définie dans la **Stratégie de mouvements de fonds**, sous [[nav:assumptions]]. La stratégie de retrait est le **Rééquilibrage glissant**, la seule stratégie dont les ventes et les achats s'orientent vers une trajectoire de glide. La case **Rééquilibrer dans les comptes à fiscalité avantageuse**, sous la grille, lit aussi la trajectoire, et elle le fait sous n'importe quelle stratégie. Sous le Rééquilibrage glissant, la grille a une colonne par année, et chaque colonne donne la part d'actions nationales, d'actions internationales, d'obligations et de liquidités. Entre deux colonnes, la cible se déplace en ligne droite, donc la tente obligataire n'a besoin que de trois colonnes : 2026 à la répartition actuelle de Morgan, 2028 à 40 pour cent d'actions, et 2043 à 70 pour cent d'actions.

[[jump:glide-path|input__assumptions__assumptions-sell-invest__control.residual-capital-strategy__control.glide-rebalance]]

[[img:glide-paths-editor-tent|control]]

*La tente obligataire sous la Stratégie de mouvements de fonds. Trois colonnes décrivent toute la trajectoire, et la case sous la grille est cochée.*

La case sous la grille, **Rééquilibrer dans les comptes à fiscalité avantageuse**, décide si la trajectoire passe des ordres d'elle-même. La section suivante montre ce qui se passe sans elle. Le plan constant utilise les mêmes commandes avec une seule colonne, qui maintient cette répartition pour chaque année :

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-editor-constant|control]]

*Le 60/40 constant tient en une seule colonne, et la case est cochée.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-editor-steering|control]]

*L'orientation seule a la même tente que le premier plan, et la case est décochée.*

</div>
</div>

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

Pour définir une trajectoire sur votre propre plan, ouvrez [[nav:assumptions]], réglez la **Stratégie de mouvements de fonds** sur **Rééquilibrage glissant**, et cochez **Définir une répartition cible**. La première colonne part de la répartition actuelle de votre plan. Utilisez **Ajouter une année** pour chaque point de la trajectoire, saisissez l'année et les quatre parts, et cochez **Rééquilibrer dans les comptes à fiscalité avantageuse** si votre trajectoire réduit les actions au fil du temps.

</div>
</details>

## L'orientation seule reste en retard {#steering-alone-lags}

Sans la case, une trajectoire de glide n'oriente que l'argent qui bouge de toute façon. Les liquidités restantes de chaque année achètent ce qui est sous sa cible, et le manque de chaque année est vendu à partir de ce qui est au-dessus. Cela suffit pour suivre une trajectoire qui ajoute des actions. Les actions croissent d'habitude plus vite que les obligations, et tant que les actions sont sous leur cible, les dépenses de chaque année sont vendues à partir des obligations, donc les deux poussent la répartition dans le sens de la trajectoire. Cela ne suffit pas pour suivre une trajectoire qui retire des actions.

Ouvrez [[nav:si-chart]] et passez son en-tête de **Mouvements** à **Allocations**. Chaque classe d'actifs a une bande avec une barre par année, et une fine barre noire à côté de chaque année marque la cible de la trajectoire. Voici le plan en orientation seule :

[[jump:glide-path|output__forecaster__forecaster.forecast-detail__si-chart__si-chart.allocations]]

[[img:glide-paths-alloc-steering]]

*En orientation seule, les barres d'actions restent près de 76 pour cent à la retraite en 2028, tandis que les barres noires de cible descendent à 40 pour cent.*

La cible baisse de 37 points en deux ans, et le portefeuille bouge à peine. Le salaire de Morgan couvre encore les dépenses en 2027, donc rien n'a besoin d'être vendu, et les liquidités restantes sont petites à côté de $1.5 million. Après la retraite, les ventes annuelles viennent d'abord des actions, parce que les actions sont la classe la plus au-dessus de sa cible, et la part d'actions ne baisse que d'environ un point par an. Elle n'atteint la cible qu'au début des années 2040, parce que la cible est remontée à sa rencontre. Voici la même trajectoire avec la case cochée :

[[img:glide-paths-alloc-tent]]

*Tente obligataire, case cochée. La barre d'actions de chaque année est posée sur sa barre noire de cible, jusqu'à 40 pour cent en 2028, puis de retour à 70 pour cent en 2043.*

La différence est une opération à l'intérieur de l'IRA. [[nav:si-table]] pour 2027 la montre. Le plan vend environ $322,000 du fonds S&P 500 dans l'IRA et achète le même montant du fonds du Trésor, et les deux lignes donnent **Rééquilibrage · Traditional IRA** comme motif :

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-si-tent-2027]]

*Tente obligataire, 2027. L'IRA échange des actions contre des bons du Trésor. Aucun argent ne sort du compte.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-si-steering-2027]]

*Orientation seule, 2027. Rien n'est vendu, et la trajectoire ne déplace que le petit montant de liquidités restantes.*

</div>
</div>

[[jump:rebalance|output__forecaster__forecaster.forecast-detail__si-table__line.reason.sheltered-rebalance]]

Une opération à l'intérieur d'un IRA n'est pas un retrait. Aucun argent ne sort du compte, donc il n'y a pas d'impôt à payer ni de pénalité de retrait anticipé, et le tableau des flux de trésorerie laisse l'échange de côté. C'est pourquoi Tutilis ne rééquilibre qu'à l'intérieur des comptes à fiscalité avantageuse : les IRA et les 401(k) traditionnels et [[term:roth|Roth]], les plans 529 et les HSA. Vendre dans le compte-titres pour rééquilibrer réaliserait des plus-values, donc le plan ne le fait jamais. Un compte ne peut échanger qu'entre des fonds qu'il détient déjà, donc la trajectoire n'est atteinte que dans la mesure où les soldes à fiscalité avantageuse le permettent. L'IRA de Morgan détient les deux tiers de l'argent, ce qui est largement assez.

Le commutateur **Allocations** fonctionne aussi sur le tableau des mouvements de fonds, qui liste alors la valeur, la part, la cible et l'écart de chaque classe pour l'année sélectionnée.

## La tente année après année {#the-tent-year-by-year}

La tente obligataire a deux versants, et la case fait advenir les deux. À la descente, de 2026 à 2028, l'IRA vend des actions et achète des bons du Trésor chaque année, jusqu'à ce que le portefeuille soit à 40 pour cent d'actions à la date de retraite de Morgan. À la montée, de 2028 à 2043, la cible ajoute deux points d'actions par an, et les opérations vont dans l'autre sens.

[[img:glide-paths-si-tent-2035]]

*Tente obligataire, 2035. Les dépenses de l'année sont vendues surtout à partir des bons du Trésor, et un petit échange dans l'IRA achète des actions.*

En 2035, la cible est d'environ 54 pour cent d'actions. La plus grande part des dépenses de l'année vient des fonds du Trésor, qui sont la classe au-dessus de la cible, donc les dépenses elles-mêmes déplacent la répartition vers plus d'actions. L'IRA complète ce qui manque par un petit échange. Sur le versant montant, la trajectoire est facile à suivre, parce que les retraits font l'essentiel du travail. Le versant descendant est celui où les opérations sont importantes.

Le plan constant fait la même chose autour d'un point fixe. Il se rééquilibre à 60/40 chaque année, en vendant ce qui a dépassé sa part :

[[img:glide-paths-alloc-constant]]

*60/40 constant. Les barres d'actions sont posées sur la cible de 60 pour cent chaque année.*

## Quand un krach arrive {#when-a-crash-comes}

Une trajectoire de glide est faite pour payer quand un krach tombe près de la date de retraite. Les Transformations peuvent poser un krach historique sur le plan. Ouvrez [[nav:transforms]], sélectionnez **Risque de séquence des rendements**, choisissez Éclatement de la bulle Internet (2000), et démarrez-le en 2028, la première année de Morgan sans salaire :

[[img:glide-paths-sor-editor|control]]

[[jump:sequence-of-returns|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.sor-risk]]

L'éclatement de la bulle Internet rejoue sept ans de rendements d'actions, le marché étant en baisse d'environ 39 pour cent à son plus bas. Les Transformations dessinent ensuite chaque plan deux fois sur une même échelle, tel qu'il est écrit sous *Original* et avec le krach sous *Modifié* :

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-bs-dotcom-tent]]

*La tente obligataire avec l'éclatement de la bulle Internet à partir de 2028.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-bs-dotcom-steering]]

*L'orientation seule avec le même krach.*

</div>
</div>

Les deux plans ont la même trajectoire écrite dans la même grille. La tente obligataire entre dans le krach à 40 pour cent d'actions et tombe à environ $1.37 million en 2030. Le plan en orientation seule y entre à 76 pour cent d'actions et tombe à environ $1.10 million. La tente termine le plan avec environ $1.05 million, et l'orientation seule avec environ $210,000, soit un cinquième. Le plan 60/40 constant se situe entre les deux et termine avec environ $840,000.

La tente continue aussi de passer des ordres pendant le krach. Quand les actions baissent, la part d'actions passe sous la cible, et l'échange dans l'IRA rachète des actions jusqu'à cette cible, à des prix bas. En 2030, l'année la plus basse du krach, le plan ne vend aucune action. Il vend des bons du Trésor dans l'IRA, paie les dépenses de l'année avec eux, et utilise environ $141,000 du produit pour acheter le fonds S&P 500 :

[[img:glide-paths-si-dotcom-tent-2030]]

*Tente obligataire en 2030, avec l'éclatement de la bulle Internet à partir de 2028. Les bons du Trésor paient l'année et achètent des actions au creux.*

Un krach sur une trajectoire n'est qu'une seule histoire. Voici les mêmes plans sur 1 000 trajectoires de marché, chaque krach étant rejoué à partir de 2028, comme la part des trajectoires qui réussissent :

| Krach à partir de 2028 | 60/40 constant | Tente obligataire | Orientation seule |
|---|---:|---:|---:|
| Aucun | 88 % | 89 % | 83 % |
| Éclatement de la bulle Internet (2000) | 81 % | 85 % | 63 % |
| Marché baissier du choc pétrolier (1973) | 83 % | 85 % | 70 % |
| Crise financière mondiale (2007) | 92 % | 94 % | 78 % |
| Grand Krach (1929) | 32 % | 65 % | 1 % |

La tente obligataire bat le plan constant dans chaque krach, et de l'écart le plus grand dans le plus profond. La ligne de la crise financière mondiale est plus haute que la ligne sans krach, parce que cette reprise se termine par un fort redressement, qui soulève chaque plan. La colonne Orientation seule est la plus basse sur chaque ligne.

<div class="lesson-img-row">
<div class="lesson-img-cell">

[[img:glide-paths-nw-dotcom-constant]]

*60/40 constant, 1 000 trajectoires avec l'éclatement de la bulle Internet à partir de 2028.*

</div>
<div class="lesson-img-cell">

[[img:glide-paths-nw-dotcom-tent]]

*Tente obligataire, le même krach, sur le même axe.*

</div>
</div>

## Ce que coûte la tente {#what-the-tent-costs}

Quand les marchés sont favorables, davantage d'actions laisse à la fin un patrimoine plus élevé. Sur la trajectoire attendue sans krach, que Tutilis trace comme le GMF, le plan en orientation seule termine avec environ $1.70 million, le plan 60/40 constant avec environ $1.55 million, et la tente obligataire avec environ $1.49 million. Détenir 40 pour cent d'actions pendant les premières années de retraite abandonne une part de croissance, et la tente termine environ 4 pour cent au-dessous du plan constant.

L'arbitrage est le même que dans [Plus de sécurité à l'approche de la retraite](/learn/safer_approaching_retirement). La tente abandonne un peu dans l'avenir moyen pour faire beaucoup mieux dans les mauvais. Sur 1 000 trajectoires sans krach, elle réussit encore un peu plus souvent que le plan constant, environ 89 pour cent contre 88 pour cent, parce que les mauvaises trajectoires comptent contre la réussite et que les bonnes ne comptent pas.

## Seulement si vous passez les ordres {#only-if-you-trade}

Chaque résultat de cette leçon pour la tente obligataire et le plan constant suppose que les opérations de [[nav:si-table]] ont vraiment lieu. En 2027, cela veut dire que Morgan vend environ $322,000 du fonds S&P 500 dans l'IRA et achète le fonds du Trésor avec. Dans une année de krach, cela veut dire acheter des actions pendant que les nouvelles sont au plus mal. Tutilis modélise ces opérations. Il ne peut pas les passer, et votre plan non plus.

Si les opérations ne sont pas passées, le portefeuille réel est le plan *Orientation seule*. La trajectoire est toujours dans le plan, et le portefeuille réel ne la suit pas. Comme le montre le tableau des krachs, c'est pire que de n'avoir jamais de trajectoire et de tenir 60/40, parce que le portefeuille entre en retraite près de 76 pour cent d'actions, puis vend des actions au creux pour payer chaque année.

Quelques choses rendent les opérations plus susceptibles d'avoir lieu :

- **Fixez-leur une date.** Rééquilibrez une fois par an à une date fixe, et servez-vous du tableau Allocations de cette année comme liste des opérations.
- **Passez les opérations dans l'IRA.** Elles n'y coûtent aucun impôt, et c'est pourquoi le plan les y fait. Vendre dans un compte-titres pour rééquilibrer peut réaliser des plus-values que la prévision ne suppose pas.
- **Laissez un fonds le faire.** Un fonds à date cible ou un fonds équilibré se rééquilibre tout seul. La trajectoire d'un fonds à date cible continue d'habitude à baisser après la date cible, donc ce n'est pas une tente obligataire.
- **Vérifiez que la case correspond à votre comportement.** Si vous savez que vous ne rééquilibrerez pas, décochez la case, et la prévision vous montrera le résultat de l'orientation seule au lieu d'un résultat que vous n'obtiendrez pas.

## Ce que dit la recherche {#what-the-research-says}

Wade Pfau et Michael Kitces ont testé des trajectoires de glide dans « Reducing Retirement Risk with a Rising Equity Glide Path » (2014). Ils ont simulé des retraites avec des trajectoires qui commençaient avec peu d'actions et en ajoutaient chaque année, et ils les ont comparées à des répartitions constantes et à des trajectoires qui continuaient de baisser. Les trajectoires qui partaient d'environ 30 pour cent d'actions et montaient jusqu'à environ 60 pour cent ont fait mieux qu'un 60 pour cent constant. Elles ont échoué moins souvent, et quand elles échouaient, elles échouaient de moins. Les trajectoires descendantes que beaucoup de conseillers utilisaient ont fait pire que les deux.

Leur explication est celle que cette leçon montre. Les pires issues viennent d'un krach tôt dans la retraite, donc c'est alors qu'il faut détenir le moins d'actions. Plus tard, quand un krach compte moins, des actions en hausse ajoutent de la croissance. Kitces a ensuite nommé toute la forme, des années avant la retraite jusqu'à la hausse qui la suit, la tente obligataire.

La tente de Morgan est une version plus douce de la leur, 40 pour cent qui montent à 70 pour cent, et le tableau des krachs ci-dessus montre le même schéma sur le plan de Morgan. La recherche fait la même hypothèse que la prévision : le portefeuille est rééquilibré sur la trajectoire chaque année.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Ouvrages cités — les publications derrière les chiffres</summary>
<div class="lesson-bibliography-body">

- Wade D. Pfau et Michael E. Kitces, « Reducing Retirement Risk with a Rising Equity Glide Path », *Journal of Financial Planning* 27, n° 1 (janvier 2014) : 38–45, pour le résultat d'une part d'actions croissante et la comparaison avec les trajectoires constantes et descendantes.

</div>
</details>
