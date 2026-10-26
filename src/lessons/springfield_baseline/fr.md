<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_baseline.fr.md
tutilis-locale: fr translated
-->
# Le foyer Springfield

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.meet.springfield
  outline-path: Household planning › Meet a household › Meet the Springfield household
  document-id: springfield_baseline
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_baseline.md
-->

<!--- α <lesson_body> -->
Cette leçon utilise un seul plan d'exemple, Homer et Marge à Springfield, pour deux objectifs liés :

1. **Vous orienter** dans un foyer réaliste que nous réutilisons (parfois avec de petits changements)
   dans beaucoup de leçons, pour que vous appreniez la distribution une fois et retrouviez des
   personnes et des graphiques familiers.
2. **Mettre en avant un levier de planification décisif :** choisir **quand** quelqu'un prend sa
   retraite change **tout son** plan, le revenu, le train de vie et le [[term:drawdown]], sans
   ressaisir chaque date à la main.

Si c'est votre première fois dans le Centre d'apprentissage, parcourez d'abord
[S'orienter dans l'application](/learn/getting_around). Revenez ici quand la disposition
gauche/droite et les écrans principaux vous seront familiers.

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Qui compose le foyer Springfield, et quand chaque personne compte-t-elle prendre sa retraite ?**
   Voir [Qui est dans ce plan](#who-is-in-this-plan).
2. **Que possèdent Homer et Marge, que doivent-ils, et pourquoi des flux de trésorerie récurrents
   peuvent-ils apparaître à côté du bilan ?** Voir
   [Ce qu'ils possèdent et ce qu'ils doivent](#what-they-own-and-what-they-owe).
3. **Comment l'argent qui circule chaque année est-il modélisé, et pourquoi un seul changement de
   date peut-il déplacer beaucoup de lignes ?** Voir
   [L'argent qui circule chaque année](#money-that-moves-every-year).
4. **Où vois-je ces flux tels qu'ils ont été saisis, et où les vois-je projetés ?** Voir
   [L'argent qui circule chaque année](#money-that-moves-every-year).
5. **Comment dois-je lire le taux de réussite Monte Carlo du plan ?** Voir
   [À quel point le plan a-t-il l'air « bon »](#how-good-does-the-plan-look).
6. **Où est la commande qui déplace une date de retraite ?** Voir
   [Quand l'âge de la retraite déplace le plan](#when-does-retirement-age-move-the-plan).
7. **Comment prendre sa retraite quelques années plus tôt ou plus tard change-t-il l'ensemble du
   plan ?** Voir
   [Quand l'âge de la retraite déplace le plan](#when-does-retirement-age-move-the-plan).

</div>
</aside>

---

## Qui est dans ce plan ? {#who-is-in-this-plan}

Nous avons ici un couple en milieu de carrière (**Homer** et **Marge**), chacun avec son propre
[[term:earned-income]], et des âges de retraite **décalés** : ils ne s'arrêtent pas de travailler
la même année.

| Personne | À peu près maintenant (année du plan) | Compte prendre sa retraite | Le plan modélise la vie jusqu'à environ |
|----------|----------------------------------------|----------------------------|------------------------------------------|
| Homer    | ~50                                    | 65 ans                     | 90 ans                                   |
| Marge    | ~48                                    | 67 ans                     | 92 ans                                   |

Ces âges font partie de chaque personne dans le dossier. Ils ne sont pas cachés ailleurs.

**Où regarder :** à droite, ouvrez [[nav:dossier]] → Personnes (ou la zone des personnes sur
[[nav:birds-eye]]). [[term:hover|Survolez]] une personne. L'infobulle montre l'année de naissance,
l'âge de la retraite et d'autres détails modélisés.

Le plan court jusqu'au **plus tardif** des deux décès, pour que l'horizon du foyer couvre les deux vies.

---

## Ce qu'ils possèdent et ce qu'ils doivent {#what-they-own-and-what-they-owe}

Ils ont une **maison avec un prêt immobilier**. Le nom de l'actif réel est **Evergreen Terrace**.
Ils ont aussi de l'épargne dans quelques types de comptes : un [[term:brokerage]] imposable, deux
sortes de **compte de retraite** ([[term:traditional]] et [[term:roth]] ; la différence est *quand*
l'impôt est payé) et des liquidités. L'essentiel de la richesse *souple* est dans les comptes. La
maison est réelle, mais ce n'est pas quelque chose que l'on dépense au fil des années. Dans quel
compte se trouve un dollar comptera plus tard, quand l'argent commencera à *sortir*. C'est une
autre leçon, pas celle-ci.

**Où regarder :**

1. [[nav:dossier]] → Actifs et passifs (ou le bilan de [[nav:birds-eye]]).
2. Trouvez **Evergreen Terrace** (la maison) et les comptes de placement.
3. Réglez [[nav:birds-eye]] sur **Flux de trésorerie** (pas seulement Compte ou Titre) quand vous
   voulez que les mouvements d'argent récurrents entrent dans cette image.

**Note sur le sélecteur Flux de trésorerie :** avec **Flux de trésorerie** sélectionné, les
**entrées** récurrentes peuvent apparaître avec les actifs et les **sorties** avec les passifs.
C'est une comptabilité inhabituelle, et c'est voulu. C'est une façon de voir « ce qui finance la
vie » à côté de « ce que nous possédons », et non l'affirmation qu'un salaire est un actif sur un
état d'expert-comptable. Pour ce foyer, le [[term:principal]] et les intérêts du prêt apparaissent
souvent le plus clairement **avec Flux de trésorerie sélectionné**.

---

## L'argent qui circule chaque année {#money-that-moves-every-year}

Tant que les deux travaillent, les salaires soutiennent un train de vie plus élevé et une marge
pour épargner. Quand une personne prend sa retraite, son revenu du travail s'arrête. Les dépenses
de vie sont modélisées en **phases** (années de travail → années de retraite) pour que le train de
vie puisse descendre d'un cran quand le travail s'arrête. C'est un schéma de planification courant,
pas une règle dure pour chaque foyer réel.

Le plan porte aussi :

- **Une prestation de Social Security** sur la personne principale (Homer). Le moment de la demande
  est une leçon *ultérieure*.
- Des phases légères de **santé**.
- Des [[term:ltc|soins de longue durée]] dans les dernières années de la vie de la personne
  principale, pour que le coût de fin de vie ne reste pas vide.

**Un mot sur les « modèles » (nous les appelons parfois des générateurs) :** beaucoup de lignes de
flux de trésorerie ne sont pas saisies année par année. Vous décrivez un motif, « salaire jusqu'à
la *retraite de la personne principale* », « phase de train de vie de la *retraite* jusqu'au
*décès* », et le plan le déploie en montants annuels. C'est pourquoi changer un seul âge de
retraite peut déplacer plusieurs séries ensemble. Vous n'avez pas besoin du détail
d'implémentation. Vous avez besoin de l'habitude : **regarder à quoi une ligne est accrochée**
(une année civile, ou un événement de vie).

### Où regarder {#where-to-look}

Il n'y a **pas** d'éditeur séparé [[nav:dossier]] → Flux de trésorerie dans cette vue du Centre
d'apprentissage. Pour *voir* les flux, utilisez [[nav:birds-eye]] et le Prévisionniste.

#### Vue définitionnelle — [[nav:birds-eye]] avec **Flux de trésorerie** sélectionné

1. Restez sur [[nav:dossier]] ([[nav:birds-eye]] est intégré en haut), ou ouvrez [[nav:birds-eye]]
   depuis la barre d'outils si vous êtes ailleurs.
2. Réglez le sélecteur sur **Flux de trésorerie** (pas seulement Compte ou Titre).

C'est la vue **définitionnelle** des séries : chaque ligne de flux est ce qui a été saisi pour la
leçon. **Survolez** un flux pour une courte description. Elle donne les attributs de base de la
définition, plus une petite **mini-courbe** qui montre où ce flux touche la chronologie (quand il
commence, court et s'arrête).

Sur la **chronologie des événements de vie** (la même zone [[nav:birds-eye]] / personnes), les
plages vertes sont les **années de revenu du travail**. Les plages bleues sont la **retraite
jusqu'à la fin de vie**. Les marqueurs magenta sont les points de demande de Social Security,
quand ils sont modélisés.

[[jump:cash-flow|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities]]

#### Vue projetée — [[nav:forecaster]]

Vous ne « lancez » **pas** une prévision à la main pour ouvrir ces vues. Quand vous entrez dans
[[nav:forecaster]], la trajectoire représentative et le détail sont déjà calculés et affichés (et
continuent de se mettre à jour quand le plan change). Le **Résumé de simulation** contient déjà
une exécution [[term:monte-carlo|Monte Carlo]] pour le plan actuel. Vous ne **Re-simulez** plus
tard que si vous changez quelque chose et voulez une comparaison fraîche sur plusieurs trajectoires.

Dans le **Détail de prévision**, des **puces** choisissent les cartes affichées (ordre du produit :
[[nav:path:bs-chart|bs-table|cf-chart|cf-table]], puis Impôts / Ventes et investissements / Réconciliation
en option). N'allumez que ce dont vous avez besoin.

**Pour cette section, sélectionnez :** [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]].

[[jump:balance-sheet|output]]

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table,output__forecaster__forecaster.forecast-detail__cf-chart]]

| Aperçu | Endroit | Ce que vous obtenez |
|--------|---------|---------------------|
| [[img:sfb-bs-chart|preview]] | [[nav:path:forecaster|bs-chart]] | En réalité un graphique de **patrimoine net** : les actifs au-dessus, les passifs en dessous, et la **ligne nette** noire et épaisse est les actifs moins les passifs. Le **prêt immobilier est le seul passif** de ce plan, donc une fois qu'il est remboursé la voie du bas est vide et la ligne nette suit simplement le haut de la pile d'actifs. |
| [[img:sfb-bs-table|preview]] | [[nav:path:forecaster|bs-table]] | Le bilan de l'année sélectionnée (cherchez **Evergreen Terrace** et les prêts). |
| [[img:sfb-cf-chart|preview]] | [[nav:path:forecaster|cf-chart]] | Les entrées au-dessus, les sorties en dessous. Surveillez la **ligne nette**, tracée en noir épais (**flux de trésorerie net**). |
| [[img:sfb-cf-table|preview]] | [[nav:path:forecaster|cf-table]] | L'**année sélectionnée**, extraite de ce graphique dans un tableau clair et **copiable**. |

**Note :** les montants en dollars et les années exactes de ces instantanés peuvent **ne pas**
correspondre à ce que vous voyez à droite. Utilisez les images pour la **disposition et les
commandes**, pas comme des cibles fixes à égaler.

**Si vous allumez aussi la carte Impôts :** les tranches fédérales, la [[term:standard-deduction]]
et les seuils associés partent des **tables publiées pour la première année du plan** (aujourd'hui
les tables IRS 2026). Elles ne restent pas figées là. Chaque année suivante les fait croître selon
l'hypothèse d'**indexation des tranches** du plan (à lire sur [[nav:assumptions]] → Croissance,
sous **Courbes standard** ; la valeur par défaut du produit est **2.5 % par an**). Le barème que la
carte révèle pour une année lointaine est donc une projection de cette échelle, pas une vraie
table. Quand les tables d'une année plus récente sont publiées, les plans qui commencent cette
année-là les reprennent.

[[jump:bracket|output__assumptions__assumptions-growth__assumptions.standard-curves__line.standard-curves.bracket-indexing,output__forecaster__forecaster.forecast-detail__taxes__taxes.inspect-schedules]]

**Commandes de graphique (première utilisation) :** sur [[nav:bs-chart]] et [[nav:cf-chart]],
essayez **Agrandir** (l'icône d'expansion dans l'en-tête de la carte) quand les barres semblent
petites, et le curseur de **zoom vertical** quand des années très hautes écrasent le reste. Les
infobulles au survol fonctionnent encore dans Agrandir. Carte complète :
[Commandes de graphique : Agrandir, zoom et Révéler](/learn/getting_around#chart-chrome)
dans S'orienter dans l'application.

**Curseur Année :** faites défiler la commande **Année** pour voir en détail comment les montants
**croissent ou diminuent** dans le temps, à mesure que les salaires, le train de vie, les impôts
et les autres séries changent.

**Curseur d'identifiant de prévision (FID) (facultatif) :**<!-- term-skip: fid — expanded inline, self-defining --> si vous êtes aventureux, faites défiler différentes trajectoires simulées.
Quand vous voulez une image *représentative* du milieu de la route, celle à prendre quand on
pense à « la » trajectoire du plan, utilisez la **GMF** (prévision à la [[term:geometric-mean]]),
en général **FID 0**, notre **étoile polaire**. Comme toute autre trajectoire unique, elle n'est
**pas** garantie. C'est un représentant stable et non aléatoire du milieu du nuage, pas une
prophétie.

---

## À quel point le plan a-t-il l'air « bon » ? {#how-good-does-the-plan-look}

Avec les réglages par défaut du produit (impôts activés, croissance de l'exemple telle qu'elle a
été saisie), la **réussite** Monte Carlo de ce foyer est faite pour se situer dans une bande de
**quasi-échec** : intéressante pour les leviers, ni une victoire offerte ni un effondrement.

Ne traitez **pas** un pourcentage isolé comme une écriture sainte. Le modèle, votre **définition
de la réussite** (Or / Argent / Bronze) et les trajectoires aléatoires font tous bouger le nombre.
Dans ces leçons, préférez :

- la **direction** (« une retraite plus tardive aide en général »), et
- l'**ordre de grandeur** (« des revenus combinés dans le bas ou le milieu des six chiffres ; un
  train de vie un cran en dessous pendant le travail »),

plutôt que de mémoriser un taux ou un montant cité.

**Où regarder :** [[nav:forecaster]] → Résumé de simulation. La réussite Monte Carlo et le
[[term:terminal-wealth]] sous le palier qui vous intéresse (**Argent** est le défaut habituel du
produit).

### Vues d'exemple du Résumé de simulation {#sample-simulation-summary-views}

| Aperçu | Vue | Ce que c'est |
|--------|-----|--------------|
| [[img:sfb-nw-distribution|preview]] | **Distribution du patrimoine net** | Le nuage des résultats finaux, avec le taux de réussite au seuil Argent. |
| [[img:sfb-key-forecasts|preview]] | **Prévisions clés** | Min / quartiles / GMF / Max (et les indicateurs liés). Cliquez une ligne pour focaliser le Détail de prévision sur cette trajectoire. |

**Note :** vos nombres peuvent varier (les valeurs des Prévisions clés sont floutées dans la
présentation standard, pour que vous regardiez la disposition). Nous visons la **compréhension**,
pas l'égalité avec un pourcentage ou un montant figé.

---

## À essayer — s'orienter {#try-this-get-oriented}

Faites ces étapes sur le **plan de droite** (Centre d'apprentissage) ou sur le même exemple dans
l'application de bureau.

1. [[nav:dossier]] → Personnes (ou les personnes de [[nav:birds-eye]]). Confirmez Homer et Marge.
   Survolez chacun pour les âges de retraite (65 et 67).
2. [[nav:birds-eye]] → Actifs et passifs. Trouvez **Evergreen Terrace** (la maison) et les comptes.
   Basculez le sélecteur entre **Compte** / **Titre** et **Flux de trésorerie**, et remarquez le
   principal, les intérêts et les autres postes récurrents quand **Flux de trésorerie** est actif.
3. [[nav:path:birds-eye|cash-flow]]. Survolez le double revenu du travail, les phases de train de
   vie, les postes liés au prêt, la Social Security, la santé et les soins de fin de vie.
   Utilisez l'infobulle à mini-courbe comme lecture définitionnelle.
4. **Chronologie des événements de vie.** Les années de travail vertes doivent s'arrêter près de
   la retraite de chaque personne. Les plages bleues couvrent la retraite jusqu'au décès.
5. [[nav:path:forecaster|cf-chart]] et [[nav:cf-table]] sont déjà affichés quand vous ouvrez
   [[nav:forecaster]]. Faites défiler **Année** pour voir les flux croître ou diminuer. Restez sur
   **[[term:fid-gmf|FID 0 / GMF]]** sauf si vous voulez vraiment visiter d'autres trajectoires.
6. **Résumé de simulation** (déjà rempli lui aussi). Notez la réussite sous Argent comme une image
   de *départ* seulement. Re-simulez seulement si vous avez changé le plan et voulez une
   exécution multi-trajectoires à jour.
7. Quand cela vous semble solide, continuez vers la section sur le calendrier de retraite
   ci-dessous **sans** changer d'exemple. C'est la moitié de cette leçon qui compte le plus.

[[jump:birds-eye]]

---

## Quand l'âge de la retraite déplace-t-il le plan ? {#when-does-retirement-age-move-the-plan}

**C'est la section où il faut atterrir.** Une année ou deux de travail en plus (ou en moins) est
l'un des plus grands leviers isolés d'un plan. Cela change le revenu, les phases de train de vie
et le nombre d'années que le portefeuille doit porter, et ici c'est une seule commande, pas une
douzaine de dates ressaisies.

**Où est la commande :** [[nav:transforms]] → **Modifications** → **Modifiables** → **Fin de
prévision**. Les dates de retraite et de décès des deux personnes (principale et secondaire) s'y
trouvent. Déplacer la **retraite de la personne principale** l'ajoute au **Jeu de modifications**,
et les graphiques se mettent à jour en direct.

[[jump:horizon|modifiable]]

### La question {#the-question}

Si vous changez **quand** Homer (ou Marge) s'arrête de travailler, est-ce que **tout** le plan
répond, le revenu, la phase de train de vie, les années de décaissement, **sans** que vous
ressaisissiez chaque date de flux de trésorerie ?

C'est l'idée centrale de cette moitié de leçon : des accroches à des événements de vie (surtout la
**retraite**) plus une commande qui recalcule l'argent qui en dépend.

### Pourquoi cela compte {#why-this-matters}

La plupart des outils vous laissent modifier un âge de retraite. La fluidité ici vient du fait que
beaucoup de séries sont accrochées à des **événements de vie nommés** (par exemple la retraite de
la personne principale) au lieu de coder en dur la même année civile sur chaque ligne. Le salaire
peut s'arrêter à la retraite. La phase de vie **Retire** peut y commencer. Les autres plages qui
utilisent les mêmes noms bougent avec un seul changement.

Une deuxième habitude du produit : [[nav:transforms]] porte un **et si** léger par-dessus cette
base. Vous comparez l'original et le modifié, puis vous **Re-simulez** pour un Monte Carlo complet
côte à côte. Une comparaison de scénarios sert à lire l'écart. Ce n'est pas un second dossier
permanent, sauf si vous choisissez de le garder.

Une chose que la commande ne fait *pas* : elle montre ce qu'une année de retraite donnée fait à
l'image. Elle n'annonce **pas** quand quelqu'un est « autorisé » à prendre sa retraite.

### À essayer — déplacer la retraite {#try-this-move-retirement}

1. Restez sur cet exemple Springfield. Notez la réussite Monte Carlo de base et un ordre de
   grandeur du patrimoine final (**direction et ordre de grandeur seulement**).
2. Ouvrez [[nav:transforms]] → Modifications.
3. Dans **Modifiables**, sélectionnez **Fin de prévision** (pas une ligne de personne). C'est là
   que vous commandez les dates de **retraite** et de **décès** du foyer (personne principale et
   secondaire), y compris l'horizon partagé du plan.
4. Reculez la **retraite de la personne principale** de quelques années (la commande de retraite
   pour Homer / la personne principale, sous Fin de prévision). Changer la commande l'ajoute au
   **Jeu de modifications**. Les graphiques et les tableaux de l'espace Transformations /
   Prévisionniste doivent **se mettre à jour en direct**. Le revenu du travail doit s'allonger.
   Le passage de train de vie **Work → Retire** doit bouger avec lui.
5. **Re-simulez** pour un Monte Carlo complet côte à côte. Comparez l'original et le modifié :
   - Une retraite plus tardive **aide** souvent la réussite et le patrimoine de fin de vie
     (plus d'années de revenu, un décaissement plus court). Lisez tout de même les graphiques.
     Les impôts et les dépenses comptent.
6. Essayez l'inverse : une retraite de la personne principale **plus tôt**. Attendez-vous à plus
   de tension sur le portefeuille si la base était déjà un quasi-échec.
7. Facultatif : sous le même éditeur **Fin de prévision**, poussez la **retraite de Marge (personne
   secondaire)** dans l'autre sens et regardez le double revenu décalé sur la chronologie.
8. Facultatif : ouvrez le graphique de flux de trésorerie et faites défiler l'axe des années à
   travers l'ancienne et la nouvelle année de retraite, pour que le passage se voie, et pas
   seulement le pourcentage de réussite.

**Vidéo (sans son) :** courte démonstration du déplacement Fin de prévision / retraite sur
Springfield. Utilisez les commandes du lecteur pour mettre en pause et suivre les étapes
ci-dessus.

<video controls playsinline muted preload="metadata" class="lesson-video"
  src="/static/videos/lessons/springfield-move-retirement.mp4"></video>

**Note :** l'enregistrement est illustratif. Les libellés et les trajectoires exactes en dollars
peuvent différer un peu à mesure que l'exemple évolue. Suivez l'interface en direct à droite.

### Lire le résultat {#reading-the-result}

- Préférez « quelques années plus tard / plus tôt » à un âge de retraite magique unique.
- Préférez « la réussite monte / descend » et « le patrimoine final est plus / moins confortable »
  au fait de figer un pourcentage.
- Déplacer seulement la retraite d'Homer laisse le revenu de Marge jusqu'à **son** année de
  retraite. Cela fait partie de l'histoire, ce n'est pas un défaut.

---

## Où aller ensuite {#where-to-go-next}

| Sujet | Leçon / exemple |
|-------|-----------------|
| Les dépenses de vie comme levier principal | [Infléchir le plan par les dépenses](/learn/springfield_living_spend) |
| Prêt en cours ou maison payée | [Prêt en cours ou maison payée](/learn/mortgage_on_vs_paid_off) |
| Ce que « réussir » veut dire (paliers) | [Que signifie réussir ?](/learn/springfield_success) |
| Moment de la demande de Social Security | [Demander tôt ou vivre longtemps](/learn/springfield_claim_longevity) |
| Ordre des comptes fiscaux ou au prorata | [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) |
| Glide / rééquilibrage | Exemple Springfield Glide |

---

*Les quantités sont illustratives. Ce que la leçon enseigne, c'est le mécanisme et la direction dans laquelle chaque levier déplace le plan.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
