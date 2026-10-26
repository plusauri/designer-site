<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/getting_around.fr.md
tutilis-locale: fr translated
-->
# S'orienter dans l'application

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Reading Lesson (Getting Around)
  document-id: getting_around
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English Getting Around lesson. Same image ids; the page serves name.fr.png when that snapshot exists.
  port-source: dossiers/getting_around.md
  source-file: getting_around.md
-->

<!--- α <lesson_body> -->
**Commencez ici.** Cette page est une **carte de l'application** : quel bouton mène où, et à quoi sert
chaque zone. Ce n'est pas une leçon de finance, et elle n'est pas faite pour être lue d'un bout à
l'autre. Chaque titre ci-dessous est une section que vous pouvez ouvrir. Ouvrez celle dont vous avez
besoin, puis refermez-la.

Vous préférez regarder ? La [Leçon vidéo (S'orienter)](/learn/getting_around_screencast) présente
la même carte en quelques minutes.

Le [[term:live-plan]] à côté de cette leçon est le foyer **Springfield**, les mêmes personnages que
dans [À la rencontre du foyer Springfield](/learn/springfield_baseline). Vous n'avez pas encore
besoin de comprendre leur argent. Traitez-les comme un exemple déjà complet, pour que chaque
panneau ait quelque chose de réel à montrer. Les exemples ici sont en **lecture seule**. Les cas
« et si » passent par [[term:transforms]], et non en réécrivant Springfield ligne par ligne.

---

## Faites d'abord de la place {#make-room}

Le plan à côté d'une leçon, c'est toute l'application, donc c'est dense. Vous pouvez faire de la
place. Chaque barre a une petite poignée bleue sur son bord, avec une flèche. Cliquez une poignée
pour ranger sa barre, et cliquez-la de nouveau pour la ramener. Une poignée ne dit ce qu'elle fait
que lorsque vous posez le pointeur dessus, comme celle-ci sur l'en-tête :

[[img:ga-header-handle|control]]

Il y a quatre poignées. **Masquer la navigation** range la colonne de boutons de zone à gauche
(la [barre de navigation](#main-navigation)). **Masquer les commandes d'en-tête** range l'en-tête
du haut. **Masquer la barre d'outils** range la barre le long du bas. **Masquer À propos de ce
dossier** range le panneau à droite de l'aperçu du foyer dans [[nav:dossier]]. Ce panneau commence
rangé, sauf si le plan a un problème. Dans ce cas, il s'ouvre tout seul et sa poignée devient rouge
ou ambre. Rien de ce que vous rangez n'est perdu, et le plan reste tel qu'il était.

Gardez la colonne de boutons de zone ouverte pendant que vous suivez une leçon. Les leçons vous
disent où cliquer en nommant ces boutons.

Une façon de travailler convient à la plupart des gens. Faites glisser le séparateur pour que la
leçon soit étroite et hors de votre chemin, puis regardez le plan et cliquez une chose à la fois
pour voir ce qu'elle fait. L'exemple est en lecture seule, donc rien de ce que vous cliquez ne peut
le casser.

---

## Ce que vous allez apprendre

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section
qui y répond.

1. **Quelles sont les zones de la barre de navigation, et à quoi sert chacune ?** Voir
   [La barre de navigation](#main-navigation).
2. **Où parcourez-vous les personnes, les comptes et les flux de trésorerie du foyer ?** Voir
   [Dossier](#dossier).
3. **Comment voyez-vous tout le foyer d'un coup d'œil, depuis n'importe où dans l'application ?** Voir
   [Vue d'ensemble](#birds-eye).
4. **Où changez-vous les règles sous lesquelles tourne la prévision, comme la croissance et les impôts ?** Voir
   [Hypothèses](#assumptions).
5. **Comment faites-vous avancer le plan, et comment lisez-vous une trajectoire ou un millier ?** Voir
   [Prévisionniste](#forecaster).
6. **Comment essayez-vous un changement « et si » sans toucher au plan de base ?** Voir
   [Transformations](#transforms).
7. **À quoi servent les outils de la barre du bas ?** Voir [La barre du bas](#bottom-bar).
8. **Comment agrandissez-vous, zoomez-vous ou ouvrez-vous un graphique difficile à lire ?** Voir
   [Commandes de graphique](#chart-chrome).

</div>
</aside>

---

## La barre de navigation : sept zones {#main-navigation}

Le long du bord gauche se trouve une colonne d'icônes. Cliquez-en une et le panneau principal
**devient** cette zone. Vous changez le focus de l'espace de travail, plutôt que d'empiler des
éditeurs sans rapport sur un seul écran.

| Zone | À quoi elle sert |
|------|------------------|
| [[nav:dossier]] | Là où le foyer est défini : personnes, actifs et passifs, flux de trésorerie. [La suite](#dossier) |
| [[nav:assumptions]] | Les règles sous lesquelles tourne la prévision : impôts, mouvements d'argent, conversions Roth et ce qui compte comme un succès. [La suite](#assumptions) |
| [[nav:risk]] | Comment les titres et les catégories se placent en risque face au rendement. Utile plus tard. Passez cette zone lors d'un premier tour. |
| [[nav:forecaster]] | Faites avancer le plan année par année, et résumez un millier de prévisions en une probabilité de succès. [La suite](#forecaster) |
| [[nav:transforms]] | Des changements « et si » sur une **copie** du plan, lus en regard de l'original. [La suite](#transforms) |
| [[nav:region]] | Le même plan comme si vous viviez ailleurs. Aujourd'hui, les États américains. [La suite](#region) |
| [[nav:guardrails]] | Des règles de retrait dynamique publiées, comparées côte à côte sur une trajectoire partagée. Déterministe, et local : cela n'écrit rien dans votre plan. |

**Une zone n'est pas sur la barre.** [[nav:birds-eye]] se trouve dans la **barre du haut**, et
seulement quand vous n'êtes pas dans le Dossier. Voir [Vue d'ensemble](#birds-eye).

Le long du **bas** se trouvent de petits outils qui s'ouvrent **par-dessus** votre travail au lieu
de le remplacer. Voir [la barre du bas](#bottom-bar). **Aide**, **Reach Out** et **Avancé** sont
l'exception : ils sont au pied de la barre elle-même, pas sur la barre du bas.

---

## [[nav:dossier]] — là où le foyer est défini {#dossier}

Le [[nav:dossier]] contient les données source du plan : personnes, actifs et passifs, flux de
trésorerie. [[nav:birds-eye]] est intégré en haut, donc arriver ici vous montre tout ce que vous
avez saisi.

**Vous ne saisirez pas de données financières dans ces leçons.** Le foyer Springfield est déjà
construit pour enseigner. Vous le lisez. Quand une leçon veut un changement, elle vous envoie vers
[[nav:transforms]]. Dans l'application de bureau, c'est l'inverse : le Dossier est l'endroit où
votre vrai plan est saisi et tenu à jour.

Au jour le jour, un plan déjà saisi n'a pas besoin de beaucoup de visites. Votre bilan ne se
réécrit pas tout seul d'un jour à l'autre. Ce qui change, ce sont vos questions, et elles vivent
dans [[nav:forecaster]], [[nav:transforms]] et [[nav:region]]. [[nav:birds-eye]] est la façon de
vérifier « qu'est-ce que j'ai mis dans le plan ? » sans les quitter.

---

## [[nav:birds-eye]] — le foyer dans une seule fenêtre {#birds-eye}

Tout le foyer d'un coup d'œil : les personnes, les actifs et les passifs, les séries de flux de
trésorerie, et une chronologie des événements de vie.

Parce qu'il est **déjà intégré en haut de [[nav:dossier]]**, la commande n'apparaît pas tant que
vous y êtes. Partout ailleurs, c'est un bouton de la **barre du haut** qui ouvre une **fenêtre**
par-dessus ce que vous faites. Consultez quelque chose, fermez-la, et votre trajectoire, votre
année et le focus du graphique sont exactement là où vous les avez laissés.

**Essayez :** cliquez [[nav:forecaster]] sur la barre et regardez [[nav:birds-eye]] apparaître dans
la barre du haut.

[[jump:birds-eye]]

### Ce qu'il contient {#birds-eye-what-you-will-see}

**Personnes** : qui est dans le foyer, les années de naissance, la retraite et la longévité, et les
rôles. [[term:hover|Survolez]] une personne pour voir ses âges modélisés. Springfield a une **retraite
décalée** : Homer et Marge arrêtent de travailler des années différentes, visibles comme des plages
[[term:earned-income]] de longueurs différentes sur la chronologie.

**Actifs et passifs** : comptes, titres, maison, hypothèques. Sur Springfield, la maison s'appelle
**Evergreen Terrace**, pour que vous la trouviez vite.

[[img:ga-birds-eye-assets-liabilities]]

**Flux de trésorerie** : la liste des séries récurrentes, salaires, phases de train de vie, Social
Security, santé, service de la dette. La plupart sont des **motifs** (« revenu du travail jusqu'à
la retraite de cette personne ») plutôt qu'un montant saisi pour chaque année. Les déployer, c'est
ainsi que le Prévisionniste dessine des graphiques sur plusieurs décennies.

**Événements de vie** : années de travail, plages de retraite, marqueurs de demande et événements
ponctuels, par personne. La réponse rapide à « quand le travail s'arrête-t-il, et le revenu
s'aligne-t-il là-dessus ? »

### Les trois puces de mode {#birds-eye-modes}

[[nav:path:account|holding|cash-flow]]

[[nav:account]] et [[nav:holding]] donnent un bilan ordinaire. [[nav:cash-flow]], souvent le défaut
sur les exemples pédagogiques, tisse le mouvement d'argent récurrent **dans** cette image : les
entrées se lisent avec les **Actifs**, les sorties avec les **Passifs**, et le badge **Σ** ramène
une série sur plusieurs années à un seul chiffre en valeur actuelle, du côté qui correspond.

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

Ce n'est volontairement pas une comptabilité d'expert-comptable. Un bilan ne traite pas les futurs
salaires comme des actifs. Le but ici est l'intuition de planification : mettre « ce qui finance la
vie » à côté de « ce que nous possédons », et « ce que nous devons payer » à côté de « ce que nous
devons ». Revenez à [[nav:account]] quand vous voulez retrouver la vue conventionnelle.

---

## [[nav:assumptions]] — les règles sous lesquelles tourne la prévision {#assumptions}

L'autre moitié des entrées du plan, à côté des données du foyer. **Lecture et écriture**, y compris
ici dans le Learning Center quand vous voulez expérimenter.

[[img:ga-assumptions]]

La plupart des plans n'ont besoin que des quatre commandes de cette page :

| Commande | En gros… |
|----------|----------|
| **État de résidence** et **Situation fiscale** | Quelles règles fiscales la prévision applique. |
| **Stratégie de mouvements de fonds** | Ce qui arrive à l'excédent de trésorerie, et comment les déficits sont financés depuis le portefeuille, y compris une trajectoire d'allocation. |
| **Conversion Roth** | S'il faut transférer chaque année une partie d'un solde avant impôt vers un Roth, et de combien. |
| **Définition du succès** | Quelles prévisions comptent comme un succès, ce qui transforme les trajectoires en un taux de succès. |

Tout le reste utilise des valeurs par défaut déjà vérifiées, et **Afficher toutes les hypothèses**
les ouvre pour les lire.

<aside class="lesson-power-user">
<p class="lesson-power-user-label">Utilisateur avancé</p>
<div class="lesson-power-user-body">

Un **Utilisateur avancé** (activé sous [[nav:advanced]] → Paramètres de l'application) voit à la place le panneau complet en onglets, où se règlent les taux de croissance, les [[term:correlation\|corrélations]] et les devises du plan. Voici les Hypothèses du même plan avec Utilisateur avancé activé, ouvertes sur l'onglet Croissance.

[[img:ga-assumptions-power]]

</div>
</aside>

Vous n'avez pas besoin de maîtriser tout cela pour suivre les leçons. Quand une commande compte,
la leçon la nomme et y renvoie. Les tableaux publiés de l'[[term:cliff|effet de seuil MAGI]]<!-- term-skip: magi — one pill for the phrase "MAGI cliff" --> ([[term:irmaa]], [[term:niit]]) sont
**la loi, pas un réglage du plan**. Ils vivent dans l'outil **Référence**.

---

## [[nav:forecaster]] — faire tourner l'avenir {#forecaster}

Deux rôles partagent cette zone, dans un partage que vous pouvez faire glisser pour que l'un ou
l'autre domine :

- **Détail de prévision** : une trajectoire, une année, chaque vue de la projection.
- **Résumé de simulation** : de nombreuses trajectoires (souvent environ un millier), résumées en
  une distribution et une probabilité de succès.

### Choisir ce que vous regardez {#controlling-what-you-see}

| Commande | Ce qu'elle choisit |
|----------|--------------------|
| **ID de prévision (FID)** | Quelle **trajectoire unique** du nuage le Détail affiche. **0** est la trajectoire [[term:gmf\|GMF]] représentative : une étoile polaire stable, pas une prédiction. |
| **Année** | Quelle année remplit les tableaux et les cartes liées à l'année. Les graphiques montrent toujours tout l'horizon. |
| **Puces** | Quelles cartes apparaissent. Éteignez ce que vous n'explorez pas. |
| [[nav:year-axis]] | Sur un graphique, étiqueter la ligne des années en années civiles ou en âge d'une personne. Cela ne change pas l'année sélectionnée. |

Sous le libellé **FID**<!-- term-skip: fid — this paragraph explains the control --> se trouve une bande de marques colorées : des **sauts rapides** vers les prévisions clés de cette prévision,
classées **du pire au meilleur**, le **✦** doré (le GMF) restant dans cet ordre plutôt que sur le
côté. Elles ne sont *pas* placées sur leurs numéros de prévision : un ID est un nom, pas une mesure.

[[jump:fid]]

[[img:ga-fid-quick-jumps]]

Prenez-en l'habitude. Partez du **✦**, avancez vers la gauche jusqu'à Min et vers la droite jusqu'à
Max, avec les mêmes puces et la même année, et vous sentez la **dispersion** du nuage au lieu de
son seul milieu.

### Les puces, une ligne chacune {#forecast-detail}

Noyau : [[nav:path:bs-chart|bs-table|cf-chart|cf-table|si-chart|si-table|rec]] —
volet fiscal : [[nav:path:taxes|cliffs|brackets]]

[[img:std-forecaster-chip-bar]]

| Puce | Affiche |
|------|---------|
| [[nav:bs-chart]] | Les actifs au-dessus de la ligne, les passifs en dessous, année par année. La **ligne nette** noire et épaisse est le patrimoine net. |
| [[nav:bs-table]] | Le bilan de l'année sélectionnée. |
| [[nav:cf-chart]] | L'argent qui entre au-dessus de la ligne, l'argent qui sort en dessous, par catégorie. La ligne nette noire et épaisse est le flux net. |
| [[nav:cf-table]] | Revenus, dépenses, impôts et disposition nette pour l'année sélectionnée. |
| [[nav:si-chart]] | Ce qui a été vendu, investi ou emprunté au fil des années. |
| [[nav:si-table]] | Les opérations au niveau du titre pour l'année sélectionnée, avec un **Pourquoi** pour chacune. |
| [[nav:taxes]] | Ce que l'année a réellement dû, au fédéral et à l'État. L'impôt sur les revenus d'une année est payé cette année-là, mais le reste de l'imposition est **payé l'année suivante**, donc il n'a pas à correspondre à la ligne Impôts du flux de trésorerie de cette année. |
| [[nav:rec]] | La preuve que l'année s'équilibre : les sources de trésorerie égalent les emplois. Ouvrez ceci quand une année de flux de trésorerie semble fausse. |
| [[nav:brackets]] | Le revenu d'une année, empilé dans les tranches ordinaires, et la **marge restante** sous un plafond que vous choisissez. |
| [[nav:cliffs]] | À quelle distance l'année passe de chaque seuil modélisé, le plancher [[term:niit]], la ligne IRMAA, sur tout l'horizon. |

### Les quatre vues de base {#core-surfaces}

[[img:sfb-bs-chart]]

[[img:sfb-bs-table]]

[[img:sfb-cf-chart]]

[[img:sfb-cf-table]]

Survolez une année sur l'un ou l'autre graphique pour un détail. **Cliquez** une année pour la
charger dans les tableaux.

### Ventes et investissements {#sales-and-investments}

[[img:ga-si-chart]]

[[img:ga-si-table]]

Dans les années de [[term:drawdown]], elles répondent à **quels** comptes ont financé la dépense,
et selon quelle règle : [[term:rmd]], résiduel au prorata, ou ordre des comptes fiscaux. Survolez
un **Nom** pour le détail complet, y compris la valeur antérieure.

### Le volet fiscal {#tax-lens}

[[img:ga-brackets]]

[[img:ga-cliffs]]

Les deux sont calés sur **2038**, une année qui a quelque chose à dire. La carte des tranches
montre combien de revenu ordinaire tient encore sous le plafond que vous choisissez, et le radar
nomme les seuils réellement **en jeu** cette année-là, de combien l'année dépasse la ligne, et ce
que coûte le franchissement.

[[jump:bracket|output__forecaster__forecaster.forecast-detail__brackets]]

[[jump:cliff-radar]]

### Résumé de simulation {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

L'autre moitié du partage répond à d'autres questions : la forme du **patrimoine net final**, le
**taux de succès** selon votre définition du succès, et les **Prévisions clés** (Min, quartiles,
moyenne, Max, GMF). Cliquez une ligne clé et le Détail de prévision focalise cette trajectoire,
pour que vous puissiez lire *pourquoi* elle était extrême.

[[jump:key-forecasts]]

Lisez la **dispersion**, pas une ligne isolée. Attachez-vous à la **direction** dans laquelle un
changement déplace le taux de succès, plus qu'au pourcentage lui-même.

---

## [[nav:transforms]] — essayer un changement sans abîmer le plan de base {#transforms}

[[img:working-fast-transforms-sections|control]]

1. Ouvrez **Modifications**.
2. Choisissez quelque chose dans **Modifiables**, souvent une personne, ou un élément de flux tel
   que le revenu du travail.
3. Modifiez une commande : année de retraite, années actives, dépense. La modifier, **c'est**
   l'ajouter au **Jeu de modifications**. Il n'y a pas d'étape « ajouter » séparée.
4. Les graphiques et les tableaux se mettent à jour **en direct**, pour que vous voyiez le plan
   réagir avant toute nouvelle simulation.
5. **Re-simulez** quand vous voulez la comparaison complète entre l'original et le modifié.

[[jump:transforms]]

Les Transformations servent à l'exploration, et c'est le bon outil pour un « et si », même dans
l'application de bureau, où le Dossier contient vos vraies données.

---

## [[nav:region]] — le même plan ailleurs {#region}

Une comparaison dans l'esprit du coût de la vie : à quoi ce plan ressemblerait-il si le foyer
vivait ailleurs ? Aujourd'hui, cela veut dire les **États américains**. Les autres pays viendront
plus tard. Prenez cette zone quand la question porte sur le **lieu**, pas sur le calcul du
portefeuille.

[[img:ga-region-sections|control]]

---

## La barre du bas : des outils qui s'ouvrent par-dessus votre travail {#bottom-bar}

Ils sont en trois groupes, et le regroupement est le sujet. Chaque groupe répond à un type de
question différent.

[[img:ga-tools-bar|control]]

| Outil | Rôle |
|-------|------|
| [[nav:fx]] | Devise d'affichage et taux. |
| [[nav:growth]] | Calculateur de croissance, en brouillon. |
| [[nav:annuity]] | Explorateur de [[term:annuity\|rente viagère]], en brouillon. |
| [[nav:peek]] | Un menu de trois vues du Détail de prévision, chacune ouverte par-dessus l'application. [[nav:charts]] montre tous les graphiques, [[nav:tables]] montre tous les tableaux, et [[nav:pairs]] montre chaque graphique à côté de son tableau. Votre choix de puces ne change pas. |
| [[nav:reference]] | Chaque tableau, taux et règle publiés sur lesquels tourne la prévision, consultables, avec leur source et leurs limites. Lecture seule. |
| [[nav:glossary]] | Ce que les mots veulent dire. Le même livre que Référence, dans la variante aux couleurs froides, parce qu'ils sont de la même nature : Référence contient les chiffres publiés, le Glossaire contient le vocabulaire. |

**L'aide n'est pas ici.** Elle est sur la **barre de navigation**, en bas, avec **Reach Out** et
**Avancé**.

### Deux habitudes à apprendre une fois {#two-habits}

**Copier.** L'icône de deux pages qui se chevauchent, sur les en-têtes de graphiques, les tableaux
et de nombreuses listes, place du Markdown ou des données d'image dans le presse-papiers. Elle est
sur les sorties générées *et* sur les entrées, comme les barèmes fiscaux et les hypothèses de
croissance, volontairement. Collez-les dans des notes ou une discussion, plutôt que de les retaper
depuis une capture d'écran.

**Maintenez Alt pour faire taire les info-bulles.** Les explications au survol sont partout. C'est
ce que vous voulez en apprenant, et pas ce que vous voulez en présentant. Maintenir **Alt** les
supprime tant que vous le maintenez. Si le défaut est trop bavard, le petit cercle plein ou creux à
côté de la commande de thème inverse la règle, de sorte que les info-bulles n'apparaissent **que**
pendant que Alt est enfoncé. Les courtes indications sur les boutons-icônes, et le dévoilement d'un
libellé tronqué, s'affichent toujours dans les deux cas. Un libellé illisible est une impasse, pas
une distraction.

---

## Commandes de graphique : Agrandir, zoom et Révéler {#chart-chrome}

Les graphiques et les cartes de distribution partagent un petit groupe de commandes. Survolez
n'importe quelle icône pour son indication.

| Commande | Où | Ce qu'elle fait |
|----------|-----|-----------------|
| **Agrandir** | La plupart des cartes de graphique et de tableau | Ouvre cette vue en grand, par-dessus l'application. Les indications au survol fonctionnent encore. Fermez avec **Esc**, un clic à l'extérieur, ou **✕**. |
| **Zoom vertical** | [[nav:bs-chart]], [[nav:cf-chart]] | Grossit les barres hautes pour que les petites années soient comparables. Tout à gauche est 1×. |
| **Révéler** | Distribution du patrimoine net | Ouvre la masse des points quand quelques fins extrêmes écrasent tout près de zéro. |
| **Lier la révélation** | Deux distributions côte à côte | Activé par défaut, pour que les deux graphiques restent comparables. Désactivez-le pour révéler chaque côté séparément. |
| **Lier les échelles des graphiques** | Graphiques de bilan ou de flux appariés | Un axe des ordonnées partagé, mis à l'échelle du côté le plus haut, pour que le plan plus petit rétrécisse visiblement au lieu de s'échelonner tout seul pour paraître égal. |
| **Fusionner les graphiques** | Les mêmes graphiques appariés | Plie les deux côtés en un seul graphique, barres côte à côte sur une échelle partagée. |

Aucune de ces commandes ne relance la simulation ni ne touche au plan. Elles ne changent que **la
façon dont vous regardez**. Quand une longue queue à droite est précisément le problème, une leçon
y est consacrée :
[Quand le nuage de résultats a besoin de Révéler](/learn/nw_distribution_compression).

---

## Learning Center et application de bureau {#layout}

C'est le même produit, avec les mêmes zones et les mêmes libellés. Deux différences valent d'être
connues :

| | Learning Center | Application de bureau |
|---|-----------------|------------------------|
| **Disposition** | Le texte de la leçon à côté d'un plan actif. Faites glisser le séparateur, ou repliez l'en-tête pour gagner en hauteur. | Le plan en plein écran, sans volet de leçon. |
| **Dossier** | Les exemples sont en lecture seule. Vous les lisez. | Votre vrai plan. Vous le saisissez et vous le modifiez. |

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Seulement dans l'application de bureau</summary>
<div class="lesson-desktop-only-body">

L'éditeur de Dossier, où vous saisissez vos propres données financières, n'existe que dans l'application de bureau.

[[img:ga-desktop-dossier]]

La capture de bureau montre les commandes d'édition dont le Learning Center n'a pas besoin : le **crayon** à côté d'une personne, et **+ Ajouter une personne**.

</div>
</details>

Les noms de zones sont les mêmes, donc tout ce qui est sur cette page se transpose.

---

## Un tour de cinq minutes {#practice-tour}

1. [[nav:dossier]] : parcourez l'exemple, et lisez [[nav:birds-eye]] en haut.
2. Dans [[nav:birds-eye]], basculez entre [[nav:account]] et [[nav:cash-flow]]. Essayez **Σ**.
3. Cliquez [[nav:forecaster]] sur la barre. Regardez [[nav:birds-eye]] passer dans la barre du haut.
   Ouvrez-le, fermez-le, et remarquez que vous n'avez jamais quitté le Prévisionniste.
4. Dans le **Détail de prévision**, ne laissez allumés que [[nav:bs-chart]] et [[nav:cf-chart]],
   puis déplacez **Année**.
5. Cliquez la marque de saut rapide la plus à gauche (rouge) sous **FID** pour atterrir sur la pire
   trajectoire, puis le **✦** doré pour revenir.
6. [[nav:transforms]] → **Modifications** : poussez une année de retraite et regardez les graphiques
   réagir en direct. Partez sans re-simuler si vous ne vouliez que la carte.

---

## Où aller ensuite {#where-to-go-next}

| Ordre | Leçon |
|-------|-------|
| **0 (vous êtes ici)** | S'orienter dans l'application |
| **1** | [À la rencontre du foyer Springfield](/learn/springfield_baseline) |
| **Plus tard** | Dépenses de vie courante, contraste d'hypothèque, définitions du succès, demande de Social Security, stratégie de retrait, approfondissements des hypothèses |

Les leçons suivantes renvoient ici par de courts rappels de « où », plutôt que de réenseigner la
carte.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
