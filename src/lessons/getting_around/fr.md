<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/getting_around.fr.md
tutilis-locale: fr translated
-->
# Prise en main de l'application

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.orientation.getting_around
  outline-path: Using Tutilis › Orientation › Getting around the app
  document-id: getting_around
  locale: fr
  lifecycle: Initial
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported locale twin from public dossiers/getting_around.fr.md
  port-source: dossiers/getting_around.fr.md
  source-file: getting_around.md
-->

<!--- α <lesson_body> -->
**Commencez ici** si c'est votre première visite du Learning Center ou du planificateur de bureau.

Ce n'est pas une leçon de finance. C'est une carte de **où se trouvent les choses**, pour que les
leçons suivantes puissent dire « ouvrez Forecaster → Simulation Summary » et que vous connaissiez
déjà le chemin. Les icônes d'aide (**?**) sur les panneaux vont plus loin quand vous le souhaitez ;
cette page est le **parcours à faire avant d'être curieux ou bloqué**.

Le plan live à droite est le foyer **Springfield** — le même casting que
[Meet the Springfield household](/learn/springfield_baseline). Vous n'avez pas encore besoin de
comprendre leur argent ; traitez-les comme un exemple pleinement chargé pour que chaque panneau ait
quelque chose de réel à montrer.

**Note :** Ce que vous voyez à droite est notre application de planification financière, livrée ici
dans le **navigateur**. C'est la **même application** que le produit de bureau — mêmes zones, mêmes
libellés, mêmes graphiques. Tout le parcours ci-dessous s'applique aux **deux** modes de livraison.
La différence importante dans cette coque Learning Center est que le canevas web ne vous laisse
**pas** **éditer le dossier** comme le bureau. Les leçons arrivent avec leurs propres données pour
que vous puissiez explorer sans reconstruire le foyer à la main.

Voici l'app de **bureau** sur un foyer d'exemple — remarquablement proche du plan à
droite :

[[img:ga-desktop-dossier]]

**Quelques différences à remarquer :** d'abord, les cartes de gauche de l'app de bureau —
**People**, **Balance Sheet** et **Cash Flows** — servent à **éditer** : choisissez une section,
puis modifiez le foyer. Ensuite, dans l'image de bureau vous voyez encore des commandes d'**édition**
(le **crayon**) à côté des personnes, et **+ Add person** pour ajouter des membres du foyer. Vous
ne vous appuierez pas sur celles-ci ici. Les dossiers du Learning Center racontent une **histoire
pédagogique** ; nous utilisons le plan tel qu'il est chargé et pilotons les scénarios surtout via
[[nav:transforms]] (plus l'inspection en lecture seule), pas en réécrivant Springfield ligne par ligne.

Sur le bureau, ouvrez le catalogue d'échantillons et choisissez **Springfield Baseline** pour le
même foyer en plein écran. Il n'existe pas de dossier séparé « Getting around » — cette page est
uniquement de la prose de leçon ; le canevas réutilise Springfield.

---

## Disposition du Learning Center {#layout}

| Volet | Rôle |
|-------|------|
| **Gauche** | Texte de la leçon (ce document) |
| **Droite** | Plan live — le même échantillon dont parle le texte |
| **En-tête** | Retour au catalogue (repliable — masquez pour libérer de la hauteur) |

Faites glisser le séparateur si vous voulez plus d'espace pour lire ou pour les graphiques.

Dans l'**application de bureau**, il n'y a pas de volet de prose à gauche : vous ouvrez un
échantillon (ou votre propre plan) et travaillez en plein écran. Les **noms des zones**
correspondent à ce que vous voyez ici.

---

## Chrome global : copier, thème et info-bulles {#global-chrome-copy-theme-and-tooltips}

<a id="global-chrome-copy-theme-and-tooltips"></a>

Trois habitudes s'appliquent **partout** dans l'app (bureau et canevas Learning Center).
Apprenez-les une fois ; vous les utiliserez dans chaque leçon suivante.

### Copier tout ce qui est utile (y compris vers votre configuration IA) {#copy-anything-useful}

Nous nous efforçons de rendre les **sorties générées** faciles à emporter : graphiques, tableaux,
synthèses et surfaces similaires. Le même esprit s'applique aux **entrées et au matériel de
référence** — barèmes fiscaux, hypothèses de croissance et autres détails du modèle — pour que
vous puissiez inspecter, coller et comparer hors de l'app.

**Repérez**
[[img:ga-copy-icon]]
— la commande **copy** sur les en-têtes de graphiques, les tableaux et de nombreuses listes (deux
pages qui se chevauchent). Un clic place du Markdown ou des données d'image dans le presse-papiers
pour coller dans des notes ou un chat.

Si cela vous aide à piloter un **flux de travail IA** (coller un tableau dans un chat, garder une
copie d'un barème à côté d'une question), c'est intentionnel. Préférez les commandes de copie du
produit à la retape depuis une capture d'écran.

### Thème clair et sombre {#light-and-dark-theme}

Les thèmes **clair** et **sombre** se commandent depuis le chrome en **haut à droite** du plan live
(soleil / lune). Sur une page de leçon, c'est la **seule** commande de thème : l'en-tête compact
au-dessus de la prose porte la marque, le lien de retour au catalogue et le sélecteur de langue —
pas de soleil / lune.

Vous n'en avez pas besoin d'une seconde. La page de leçon **suit le plan live** : changez le thème
dans l'app et la prose suit, de sorte que les deux volets restent synchronisés et que vous ne lisez
jamais une leçon sombre à côté d'une app claire. La synchronisation va dans un seul sens, de l'app
vers la prose. (Ailleurs sur le site — accueil, tarifs, l'index `/learn` — l'en-tête du site porte
son propre soleil / lune.)

L'apparence est uniquement une préférence ; elle ne change pas les calculs du plan.

### Info-bulles contextuelles — et quand les faire taire {#tooltips}

Pour faire remonter autant de détail que possible sans encombrer la disposition, nous nous appuyons
beaucoup sur des **info-bulles contextuelles**. Beaucoup apparaissent au survol des graphiques,
tableaux, lignes et autres commandes ; une grande part de ces bulles est aussi **copiable**.
Certaines zones de graphique et de tableau existent surtout pour que le survol puisse afficher ce
détail.

**Repérez**
[[img:ga-help-question]]
— le **?** sur de nombreux titres de panneau et de carte. Ouvrez-le pour une courte explication de
cette surface. Le survol pilote toujours les bulles plus petites sur les lignes, barres et points
individuels.

Cette abondance est excellente quand vous **apprenez** une surface. Elle peut gêner quand vous
**présentez** — vous guidez quelqu'un sur un chemin et les pop-ups se déclenchent sans cesse au
mouvement du pointeur.

**Maintenez Alt** pendant que vous survolez ces commandes : avec le réglage par défaut, les
info-bulles **n'apparaissent pas** tant que Alt est enfoncé. C'est le silence rapide et temporaire
pour une démo ou un clic soigneux.

Si le défaut reste encore trop bavard, inversez la règle globale. À côté de la commande thème
clair/sombre se trouve un petit **cercle plein / creux** (hover details). Cliquez pour basculer le
mode :

[[img:ga-hover-details-toggle]]

| Mode (info-bulle sur la commande) | Survol normal | Maintenir **Alt** en survolant |
|-----------------------------------|---------------|--------------------------------|
| **Details on hover** (défaut) | Les info-bulles s'affichent | Les info-bulles restent **masquées** |
| **Reversed** (après bascule du cercle) | Les info-bulles restent **masquées** | Les info-bulles **s'affichent** |

Donc : le défaut est « aidez-moi sauf si je maintiens Alt ». Inversé, c'est « laissez-moi tranquille
sauf si je maintiens Alt ». Choisissez le mode selon que vous explorez ou présentez ; Alt vous donne
toujours l'opposé d'un seul geste.

Une exception volontaire : les bulles **indispensables** ignorent tout cela et s'affichent toujours.
Ce sont les courtes hints d'une ligne sur les boutons-icônes, et le reveal d'un libellé trop étroit
pour tenir son propre texte. Un libellé tronqué sans moyen de le lire est une impasse plutôt qu'une
distraction — Alt fait taire les riches cartes explicatives, qui sont ce qui interrompt vraiment une
démo.

---

## La navigation principale {#main-navigation}

À gauche se trouve une **barre d'outils d'icônes**.

**Zones principales** (chacune prend le panneau principal) :

La première icône est un **dossier** — c'est [[nav:dossier]]. En dessous se trouvent les autres zones
majeures : Assumptions, Risk, Forecaster, Transforms, Region.

Quand vous choisissez une zone, le **panneau principal** est dédié à cette fonction. Vous n'empilez
pas d'éditeurs sans rapport sur un seul écran ; vous changez le focus de l'espace de travail.

| Zone | À quoi elle sert |
|------|------------------|
| [[nav:dossier]] | Là où les finances du foyer sont définies — personnes, actifs et passifs, flux de trésorerie. Voir [Dossier](#dossier) pour leçon vs bureau. |
| [[nav:assumptions]] | Croissance, impôts, politique sell & invest, définition du succès, localité, devise — les règles sous lesquelles tourne la prévision. **Lecture et écriture.** |
| [[nav:risk]] | Vues analytiques du risque (comment les holdings et catégories se placent en risque/rendement). Utile plus tard ; pas requis pour les premiers tours. |
| [[nav:forecaster]] | Deux rôles : (1) faire tourner le plan année par année et inspecter chaque surface de projection, et (2) **Simulation Summary** — de nombreux chemins résumés en quelque chose comme une **probabilité de succès**. |
| [[nav:transforms]] | Changements hypothétiques sur une **copie** du plan ; comparer original vs modifié sans réécrire le dossier permanent. |
| [[nav:region]] | Explorer le plan « comme si » vous viviez ailleurs (aujourd'hui : **États américains** ; d'autres pays sont du travail futur). Le libellé du rail est [[nav:region]]. |

**Outils** (sous les icônes de zone ; ne remplacent pas durablement le panneau principal) :

| Outil | Rôle |
|-------|------|
| [[nav:birds-eye]] | Vue d'ensemble du foyer en **modale** (masquée quand vous êtes déjà sur Dossier — voir ci-dessous). |
| **Growth** / **Annuity** | Calculateurs optionnels — brouillons ; ce tour ne s'y attarde pas. |
| **Reference** | Chaque tableau, taux et règle publiés sur lesquels tourne la prévision — consultable, avec sa source et ses limites. Lecture seule. |
| **Help** | Courte carte de l'app et conseils. |

Les icônes du tableau des zones correspondent à l'art du rail (même famille pastel-flat que la
navigation produit).

---

## [[nav:dossier]] {#dossier}

<a id="dossier"></a>

Le [[nav:dossier]] est l'endroit où les finances du foyer sont **définies** — personnes, actifs et
passifs, flux de trésorerie, et le reste des données source du plan.

Le comportement de cette zone dépend légèrement de **où** vous travaillez :

| Où vous êtes | Ce que vous faites dans Dossier |
|--------------|---------------------------------|
| **Ces leçons / Learning Center** | Les finances ont déjà été **conçues pour enseigner une leçon**. Vous les **consultez** surtout (et [[nav:birds-eye]] montre le même tableau). On ne vous demande pas de saisir des données financières. |
| **App de bureau (votre propre plan)** | Vous **saisissez et éditez** de vraies informations — onboarding, puis mises à jour quand la vie change. C'est le plan durable que vous maintenez dans le temps. |

Pour le cursus : **aucune saisie de données de dossier n'est requise.** Si une leçon veut un
changement, elle vous enverra en général vers [[nav:transforms]] (ou nommera explicitement une commande),
pas vous demander de reconstruire Springfield à la main.

### Quand vous ouvrez vraiment Dossier au quotidien {#dossier-day-to-day}

Dans l'app de bureau, [[nav:birds-eye]] est ce que vous voyez en arrivant sur Dossier après l'onboarding —
un aperçu rapide de tout ce que vous avez saisi. Une fois ces données stables, vous n'avez souvent
**pas** besoin de Dossier chaque jour : votre bilan ne se réécrit pas tout seul du jour au lendemain.

Ce qui **change** au quotidien, ce sont vos **préoccupations**, idées de planification et questions.
Cette exploration vit surtout dans [[nav:forecaster]], [[nav:transforms]] et [[nav:region]]. Vous avez tout de
même besoin d'un moyen de rafraîchir la mémoire sur « qu'est-ce que j'ai mis dans le plan ? » sans
abandonner ce travail — c'est [[nav:birds-eye]] (section suivante).

---

## [[nav:birds-eye]] — le même contenu de foyer, en modale {#birds-eye}

[[nav:birds-eye]] est une icône d'**outil** sur la partie basse du rail (avec les calculateurs et Help)
— pas l'une des icônes de zone principale au-dessus. Hors Dossier, elle ouvre une **boîte de
dialogue modale** par-dessus ce que vous êtes en train de faire.

**Important :** Quand vous êtes dans la zone [[nav:dossier]], l'icône [[nav:birds-eye]] sur le rail n'est
**pas** présente. C'est intentionnel : le contenu [[nav:birds-eye]] est **déjà intégré** en haut de
Dossier, bien en évidence. Il n'y a aucune raison de naviguer ailleurs pour voir ce que vous regardez
déjà.

**Essayez ceci :** cliquez [[nav:forecaster]] sur le rail — vous devriez voir l'icône [[nav:birds-eye]]
**apparaître** parmi les outils. Cliquez cette icône : vous obtenez la **même information** qui
siège en haut de la zone Dossier (personnes, actifs et passifs, présentation des flux, timeline des
événements de vie, et aperçu associé). Fermez la modale et vous êtes toujours sur Forecaster, place
intacte.

Nous décrivons ce contenu de foyer **une seule fois**, ci-dessous — que vous le rencontriez intégré
dans Dossier ou via la modale depuis Forecaster, Transforms ou Region.

### Pourquoi utiliser [[nav:birds-eye]] depuis [[nav:forecaster]] / Transforms / Region ? {#why-birds-eye-from-elsewhere}

Vous pouvez ouvrir [[nav:birds-eye]] **sans quitter** la zone où vous êtes. Consultez une personne, un
compte ou la timeline des événements de vie, fermez la modale, et **revenez au même endroit** —
curseur d'année, scénario ou focus graphique intacts. Vous n'avez pas à basculer vers Dossier et
perdre votre place.

[[img:ga-birds-eye-from-forecaster]]

*[[nav:birds-eye]] en modale sur [[nav:forecaster]] (outil du rail, pas une zone principale). Forecaster reste
en dessous ; fermez la boîte de dialogue et vous êtes toujours sur la même vue de prévision.
Sélecteur Account / Holding / **Cash Flow** en haut ; résumé du foyer et Assets & Liabilities en
dessous.*

Nous n'entrerons **pas** en profondeur dans les calculateurs Growth ou Annuity dans ce tour ; ce
sont des brouillons optionnels. L'outil **Help** du rail les cartographie brièvement si vous en avez
besoin plus tard.

### Ce que vous verrez (personnes, patrimoine, mouvement d'argent, événements de vie) {#birds-eye-what-you-will-see}

> **Note :** Si vous avez cliqué vers [[nav:forecaster]], c'est un bon moment pour revenir à [[nav:dossier]]
> afin de suivre le [[nav:birds-eye]] intégré en haut de cette zone.

#### People

Qui est dans le foyer, années de naissance, hypothèses de retraite et de longévité, et rôles
(primary / secondary / dependent).

- **Survolez** une personne pour une bulle avec les âges modélisés et le détail associé.
- Les leçons disent souvent **retraite décalée** — deux personnes avec des âges de retraite
  **différents**, tous deux visibles ici. Sur Springfield vous le voyez aussi sur la timeline des
  événements de vie : les plages vertes de **earned income** de Homer et de Marge se terminent des
  années différentes parce qu'ils arrêtent de travailler à des âges différents.

#### Assets & Liabilities

Comptes, holdings, maison, hypothèques et autres éléments de bilan — la vue familière « ce que nous
possédons / ce que nous devons » que montrent la plupart des outils de planification. Sur
Springfield, la maison s'appelle **Evergreen Terrace** pour que vous la trouviez vite dans la liste.

[[img:ga-birds-eye-assets-liabilities]]

*[[nav:birds-eye]] **Assets & liabilities** (mode Cash Flow sur cet échantillon) : actifs à gauche, passifs
à droite, chiffres style valeur actuelle. Notez les petites commandes **copy** sur chaque en-tête de
colonne — même famille que l'habitude de copie globale ci-dessus.*

##### La commande Cash Flow ([[nav:birds-eye]])

En haut de [[nav:birds-eye]] vous verrez un sélecteur **Account / Holding / Cash Flow** (libellés comme
dans l'UI). **Cash Flow** mérite qu'on s'y arrête. [[nav:birds-eye]] est souvent par défaut en mode Cash
Flow pour que les échantillons pédagogiques montrent tout de suite le mouvement d'argent.

Quand **Cash Flow** est sélectionné, le mouvement d'argent récurrent est tissé dans le tableau
Assets & Liabilities — non seulement comme une liste séparée, mais comme partie de la façon dont le
patrimoine est *présenté* :

| Côté de la vue | Ce que les flux peuvent apparaître comme |
|----------------|------------------------------------------|
| **Assets** | **Entrées** — de l'argent qui alimente le foyer (par exemple earned income). |
| **Liabilities** | **Sorties** — de l'argent que le plan doit couvrir (par exemple living expenses, service de l'hypothèque). |

C'est une **comptabilité non conventionnelle** à dessein. Un bilan CPA ne traite pas les futurs
chèques de paie comme des actifs ni une vie de coûts de vie comme une seule ligne de passif. Ici le
but est l'intuition de planification : mettre « ce qui finance la vie » à côté de « ce que nous
possédons », et « ce que nous devons payer » à côté de « ce que nous devons ».

**Somme (Σ) sur Cash Flow :** avec Cash Flow actif, la commande **Σ** sur ce sélecteur peut
agréger une série multi-années en un **total style valeur actuelle en dollars d'aujourd'hui** et
placer ce total du côté associé du bilan. Exemple : living expenses — sorties sur de nombreuses
années — sommées en un chiffre à côté de **Liabilities**. Vous n'inventez pas un nouveau prêt
bancaire ; vous répondez « de quelle ampleur est ce flux d'obligations si je le regarde en un chiffre
à côté de ma maison et de mon portefeuille ? »

**Essayez :**

1. Restez sur [[nav:dossier]] (ou ouvrez [[nav:birds-eye]] depuis Forecaster).
2. Dans [[nav:birds-eye]], sélectionnez **Cash Flow** (et essayez **Σ** s'il est proposé).
3. Remarquez le **principal** et les **intérêts** de l'hypothèque, le lifestyle et les salaires lus
   comme partie du même tableau patrimonial.
4. Revenez à **Account** / **Holding** pour un bilan plus propre et plus traditionnel sans ce
   mélange cash-flow.

Le principal et les intérêts d'hypothèque sont souvent plus faciles à repérer avec **Cash Flow**
activé. Les leçons suivantes utiliseront cette vue quand l'histoire est « combien pèse le côté
dépenses ? », pas seulement « qu'y a-t-il dans les comptes aujourd'hui ? »

#### Cash flows (la liste des séries)

Séparément de cette commande de présentation, le plan a toujours une **liste de séries de flux** :
salaires, phases de lifestyle, Social Security, santé, service de la dette, et plus. Dans Dossier
vous les atteignez via le côté cash-flows de l'éditeur ; [[nav:birds-eye]] est la vue d'ensemble.

Beaucoup d'éléments sont des **motifs** (modèles) plutôt qu'un montant saisi à la main pour chaque
année — par exemple « earned income jusqu'à la retraite de cette personne ». Développer ces motifs
en montants annuels est la façon dont le Forecaster dessine des graphiques multi-décennies. Les
leçons diront **où** regarder ; vous n'avez pas besoin d'écrire un modèle le premier jour.

#### Life-events timeline

Par personne : années de travail, plages de retraite, marqueurs de claim Social Security, grands
événements ponctuels (par exemple un achat immobilier). Une réponse rapide à : « Quand le travail
s'arrête-t-il ? Quand court la retraite ? Le revenu s'aligne-t-il sur ces dates ? »

---

## [[nav:assumptions]] {#assumptions}

Cette zone est en **lecture et écriture** — y compris dans le Learning Center quand vous voulez
expérimenter.

Les Assumptions sont l'**autre moitié** des règles du plan à côté des données du foyer : comment
les marchés sont échantillonnés, comment l'impôt est traité, comment l'excédent de trésorerie est
investi, ce que signifie le « succès », et où / dans quelle devise vous rapportez.

[[img:ga-assumptions]]

*Assumptions ouvert sur [[nav:assumptions-growth]] (premier onglet). La rangée d'onglets est
[[nav:assumptions-growth]] · [[nav:assumptions-taxes]] ·
[[nav:assumptions-sell-invest]] · [[nav:assumptions-success]] ·
[[nav:assumptions-currency]] — mêmes sous-sections que le tableau. Survolez un chip d'onglet pour
le distinguer de la commande Forecast Detail ou barre du bas du même nom.*

**Vous n'avez pas besoin de maîtriser pleinement chaque levier pour la plupart des leçons.** Nous
en couvrirons beaucoup dans de futures leçons. Pour l'instant, sachez que les **sous-sections**
existent et à quoi chacune sert approximativement :

| Sous-section | Approximativement… |
|--------------|--------------------|
| [[nav:assumptions-growth]] | Croissance attendue et volatilité (et corrélations associées) pour actifs et flux — le carburant statistique du Monte Carlo. |
| [[nav:assumptions-taxes]] | Régime fiscal et réglages associés que la prévision utilise quand les impôts sont activés. |
| [[nav:assumptions-sell-invest]] | Ce qui arrive à l'excédent de trésorerie et comment les déficits sont financés depuis le portefeuille après satisfaction des besoins liés (stratégie résiduelle). |
| [[nav:assumptions-success]] | Coût du capital et la **définition du succès** (par exemple Gold / Silver / Bronze) qui transforme les chemins en taux de succès. |
| [[nav:assumptions-currency]] | La table des taux de change du plan — éditez un taux, récupérez les derniers, ou réinitialisez le cliché inclus. La devise d'affichage est l'outil FX de la barre du bas. |

Les tables MAGI publiées (IRMAA, NIIT, et les autres) vivent dans l'outil **Référence** — ce
sont les barèmes de la loi, pas un réglage du plan. Les résultats de chemin restent sur le radar
de falaises du Prévisionniste.

Si une leçon a besoin d'un changement d'hypothèse, elle nommera la sous-section et la commande.
Sinon, laissez les défauts et concentrez-vous sur l'histoire dans Forecaster ou Transforms.

---

## [[nav:forecaster]] — faire tourner l'avenir {#forecaster}

Ouvrez [[nav:forecaster]]. Pensez à **deux fonctions distinctes** qui partagent une zone :

1. **Forecast Detail** — faire avancer le plan sur les années de prévision et plonger dans
   **chaque aspect** des projections pour un chemin et une année choisis.
2. **Simulation Summary** — résultats des **nombreuses** prévisions (souvent de l'ordre d'un
   millier) résumés en une distribution et une **probabilité de succès** (et stats associées). C'est
   ainsi que cet outil — et d'autres comme lui — aboutissent à un seul chiffre style succès à partir
   d'un nuage de résultats.

Les deux vivent dans un **split redimensionnable** (accordéon) : vous pouvez donner presque toute la
hauteur au Detail, presque toute au Summary, ou les équilibrer. Cette puissance de disposition
compte quand vous creusez (voir [Creuser un résultat difficile](#drill-into-a-tough-outcome)
ci-dessous).

### Forecast Detail — les livrables {#forecast-detail}

[[img:ga-forecast-detail]]

*Forecast Detail en un cadre : l'en-tête montre **FID GMF** et l'**année** sélectionnée, avec des
surfaces ouvertes ensemble (ici graphiques **Balance Sheet** et **Cash Flows** en haut, **Balance
Equation** / **Sankey** et **Cliff radar** en bas). Utilisez les **puces** pour n'afficher que ce
qui compte — vous voulez rarement toutes les cartes à la fois.*

L'ordre des puces correspond à l'app : [[nav:path:bs-chart|bs-table|cf-chart|cf-table]], puis [[nav:si-chart]] /
[[nav:si-table]], Rec, Taxes, et **RMD** (série projetée de minimums requis).

Les quatre surfaces de base ci-dessous utilisent les mêmes **aperçus de leçon standard** que les
leçons suivantes réutilisent.

#### [[nav:bs-chart]] — Assets & Liabilities dans le temps

[[img:sfb-bs-chart]]

**Actifs au-dessus** de la ligne, **passifs en dessous**, année par année. La **ligne nette**,
tracée en noir épais, est le **patrimoine net** — souvent ce que vous cherchez. Survolez une année pour un détail ;
**cliquez une année** pour la charger dans les tableaux et autres vues liées à l'année. Utilisez
**Close up** et le **zoom vertical** quand les barres paraissent petites
([chrome des graphiques](#chart-chrome)).

#### [[nav:bs-table]] — bilan pour l'année sélectionnée

[[img:sfb-bs-table]]

État à un instant pour l'**année sélectionnée** : actifs réels, comptes, passifs, valeur nette. Cet
aperçu a **Holdings** sélectionné (puce activée) pour développer les comptes en holdings — basculez
cette puce pour ne voir que les totaux de compte.

#### [[nav:cf-chart]] — flux de trésorerie dans le temps

[[img:sfb-cf-chart]]

Argent **entrant** au-dessus de la ligne, argent **sortant** en dessous, coloré par catégorie. La
**ligne nette**, tracée en noir épais, est le **flux net** — souvent ce que vous cherchez. Survol/clic des années comme
sur le BS chart. Bonne première lecture pour « quand le earned income s'arrête-t-il ? » et les
paliers de lifestyle.

#### [[nav:cf-table]] — flux de trésorerie pour l'année sélectionnée

[[img:sfb-cf-table]]

État pour l'**année sélectionnée** : revenus, dépenses, impôts, et disposition nette (totaux invest
/ sell / borrow). Souvent le compagnon **copiable** du graphique.

#### [[nav:si-chart]] / [[nav:si-table]] — ce qui a été vendu ou investi (et pourquoi)

[[img:ga-si-chart]]

*[[nav:si-chart]] — ventes, investissement et emprunt sur les années de prévision (disposition du net
d'exploitation). Mêmes tags FID / année et chrome d'en-tête que les autres surfaces Forecast Detail.*

[[img:ga-si-table]]

*[[nav:si-table]] — opérations au niveau holding pour l'année sélectionnée. Colonnes compactes : **Sold**
(ou **Invested**) avec **After Sale** / **After Invest**, **%**, et **Why**. Survolez un **Name** pour
un détail vertical copiable (y compris **Prior Value**). **Why** porte les raisons de répartition
en dollars — RMD vs résiduel pro-rata vs ordre des comptes fiscaux, etc.*

#### Autres puces

| Puce | Nom complet | Objectif |
|------|-------------|----------|
| [[nav:si-chart]] | Money Movements chart | Ventes, investissement, emprunt sur les années (disposition du net d'exploitation). |
| [[nav:si-table]] | Money Movements table | Opérations au niveau holding et codes **Why** (RMD vs résiduel). |
| [[nav:taxes]] | Tax statements | Détail d'imposition pour l'année sélectionnée (fédéral, État quand modélisé, propriété). Note : l'imposition d'une année est souvent **payée l'année suivante**, donc elle peut ne pas correspondre à la ligne Taxes du cash flow de cette année. |
| **Rec** | Reconciliation | Preuve que l'année équilibre : sources de trésorerie égalent les emplois (équation ou Sankey). |

**Quoi regarder par surface (intuition de départ) :**

- [[nav:bs-chart]] / [[nav:bs-table]] — Le patrimoine monte-t-il ou s'érode-t-il ? Quand les passifs se réduisent-ils ?
  La maison est-elle grande face aux comptes flexibles ?
- [[nav:cf-chart]] / [[nav:cf-table]] — Quand le earned income s'arrête-t-il ? Le lifestyle baisse-t-il d'un palier ?
  Des pics d'impôts ou de santé sont-ils visibles ?
- **Taxes** — L'histoire fiscale est-elle matérielle dans les années de retraite, ou un à-côté ?
- **Money Movements** — Dans les années de drawdown, **quels** comptes financent les dépenses, et sous
  quelles règles ?
- **RMD** — Quelle ampleur prennent les distributions traditionnelles requises sur l'horizon ?
- **Rec** — Contrôle de cohérence quand quelque chose « ne s'additionne pas » sur le graphique
  cash-flow.

### Contrôler ce que vous voyez — puces, année et prévision {#controlling-what-you-see}

Il y a une **richesse d'information pour chaque scénario (chemin de prévision) et chaque année**.
Deux curseurs (ou commandes équivalentes) règlent cela :

| Commande | Rôle |
|----------|------|
| **Forecast ID (FID)** | Quel **chemin unique** dans le nuage Monte Carlo vous inspectez en Detail. L'ID **0** est le chemin moyenne géométrique / représentatif (une « étoile polaire » stable, pas une promesse du futur le plus probable). Les autres ID sont des chemins simulés individuels. |
| **Year** | Quelle année civile de ce chemin remplit les tableaux, la carte fiscale, le plan de ventes et la réconciliation. Les graphiques montrent toujours l'horizon complet ; l'année sélectionnée est mise en évidence / chargée dans le détail. |
| [[nav:year-axis]] | Sur le **graphique** (icône calendrier, bas gauche) : étiqueter la ligne d'années en années civiles ou **âge d'une personne**. Distinct du curseur **Année** de l'en-tête — ne change pas l'année sélectionnée. |

Les **puces** choisissent ensuite **quelles cartes** apparaissent pour ce chemin et cette année.
Désactivez ce que vous n'explorez pas pour que le panneau reste lisible.

[[img:ga-year-slider]]

*Contrôle **Year** : boîte de valeur sur l'année civile ; sous la piste, une timeline dorée dont les
marqueurs **s'asseyent à leurs vraies années** — début de plan (🚩), retraites, fin de plan (🏁).
Contrairement aux sauts Forecast ID, ces positions signifient quelque chose sur l'axe.*

Les graphiques portent aussi [[nav:year-axis]] — une **icône calendrier** en bas à gauche de
[[nav:bs-chart]], [[nav:cf-chart]] et des autres graphiques à axe d'années. Utilisez-la pour lire
la ligne d'années comme **l'âge de quelqu'un**. L'**Année** de l'en-tête choisit toujours l'année
des tableaux. Survolez le chip quand vous voulez le rappel.

#### Sauts rapides vers les prévisions clés {#quick-jumps-to-the-key-forecasts}

<a id="quick-jumps-to-the-key-forecasts"></a>

Sous le libellé **Forecast ID** se trouve une petite règle dorée avec une rangée de marques. Ce sont
des **sauts rapides** : cliquez-en une et le Forecast ID se pose sur cette prévision.

Chaque triangle coloré est l'une des **prévisions clés** de l'exécution, dessiné dans la **même
couleur que cette prévision** dans le tableau Key Forecasts et dans le nuage de distribution — donc
le rouge est Min partout où vous le rencontrez. Survolez-en un pour voir de quelle prévision il
s'agit, son ID, et ce que le point signifie.

Deux choses sur cette bande méritent d'être comprises, car elles sont volontaires :

- **Les marques se lisent du pire résultat au meilleur, de gauche à droite** — Min, Q2, **GMF ✦**,
  Q3, Mean, Q4, Max, le même ordre que les lignes du tableau Key Forecasts. Le **✦** doré est
  l'étoile polaire déterministe **dans cet ordre**, pour que vous voyiez *où le GMF se place parmi
  les issues nommées* — pas garé sur le côté.
- **Ils ne sont *pas* positionnés à leurs Forecast ID.** Un Forecast ID est un **nom**, pas une
  mesure : l'exécution peut placer son pire chemin sur l'ID 366 et son meilleur sur l'ID 12, et cela
  ne vous dit rien sur l'un ni l'autre. La bande consacre donc sa largeur à l'ordre qui a un sens.
  (Les triangles du curseur **Year** sont le cas inverse — une année *est* une position, donc ils
  s'assoient exactement où ils tombent sur la timeline.)

Avant d'avoir lancé une simulation, il n'y a que le **✦** vers lequel sauter, ce qui est honnête :
il n'y a pas encore d'autres prévisions. Lancez-en une et la bande complète apparaît.

[[img:ga-fid-quick-jumps]]

*Contrôle Forecast ID après une run : libellé court **FID** plus le nom clé actif (**GMF ✦** ici),
boîte de valeur sur le numéro de chemin (**0**), et sous le libellé la règle dorée avec sauts
assortis en couleur (pire → meilleur) et le **✦** GMF à sa place dans cet ordre. Cliquez une marque
ou une ligne Key Forecasts et le libellé reprend ce nom, comme les titres de graphiques.*

**Essayez ceci** (à droite, **Forecast Detail** — une run est déjà chargée) :

1. Cliquez le triangle **rouge** (le plus à gauche) sous **FID** — vous devriez atterrir sur **Min**,
   le libellé devient **FID Min**, et graphiques / tableaux se recentrent sur ce chemin.
2. Cliquez le **✦** doré *dans la bande de sauts* (entre les issues précoces et tardives) — retour à
   l'étoile polaire GMF (**FID GMF ✦** / chemin **0**). Remarquez **où** il se place parmi les
   autres marques.
3. Sur **Year**, cliquez un marqueur de timeline (🚩 début de plan, un triangle de retraite, ou 🏁
   fin de plan) — l'année saute à ce calendrier ; tableaux et cartes liées à l'année suivent.

Ces sauts sont parmi les commandes les plus utiles de l'app : ils nomment un chemin ou un jalon
sans frotter le curseur à l'aveugle.

### Simulation Summary — le nuage (aperçus standard) {#simulation-summary}

[[img:sfb-nw-distribution]]

[[img:sfb-key-forecasts]]

*Simulation Summary : compte **Simulations**, puces **Distribution** / **Key Forecasts** /
**Success Summary**, **Re-simulate**, le nuage de patrimoine final (succès à **Silver**), le
tableau clé (Min … Max, GMF sélectionné), et les métriques d'issue en dessous. Cliquez une ligne
clé pour focaliser ce chemin partout.*

**Simulation Summary** (l'autre moitié de l'accordéon) répond à d'autres questions : forme de la
**valeur nette terminale**, **taux de succès** sous votre définition de succès (Gold / Silver /
Bronze), et **Key Forecasts** (Min, quartiles, mean, Max, …). Cliquer une ligne clé **focalise**
typiquement **Forecast Detail** sur ce chemin pour que vous puissiez inspecter *pourquoi* il était
extrême.

#### Net Worth Distribution

[[img:sfb-nw-distribution]]

Chaque marque est un chemin simulé par **valeur nette finale**. Le % de succès se place sous le
graphique au médaille/seuil actif. **Reveal** et **Close up** aident quand le nuage est difficile à
lire ([chrome des graphiques](#chart-chrome)).

#### Key Forecasts

[[img:sfb-key-forecasts]]

Min / quartiles / GMF / Max (et métriques associées). Sélectionnez une ligne pour focaliser ce chemin
**partout** et le mettre en évidence sur la distribution.

Le taux de succès dépend de la **définition du succès** sous Assumptions → Success. Les leçons se
soucient davantage de la **direction du changement** que d'un pourcentage unique.

<a id="chart-chrome"></a>

### Chrome des graphiques — Close up, zoom et Reveal {#chart-chrome}

Les graphiques et cartes de distribution partagent un petit **groupe d'en-tête** (même famille de
commandes dans Forecaster et Transforms). Survolez n'importe quelle icône pour son tip produit. Les
leçons pointent ici plutôt que de réenseigner le chrome à chaque fois.

| Commande | Où | Ce qu'elle fait |
|----------|-----|-----------------|
| **Close up** (icône agrandir / open-in-full) | La plupart des cartes graphique et tableau (BS, CF, Distribution, Key Forecasts, …) | Ouvre **cette** vue en plus grand dans une modale focalisée — même contenu, la plupart de l'écran — pour creuser sans le panneau environnant. Les **tips au survol fonctionnent encore** dans la modale (détails d'année, points de distribution, libellés de résultat). Fermez avec **Esc**, clic sur le scrim, ou **✕**. La modale est **redimensionnable en largeur** (poignée du bord droit). |
| **Vertical zoom** (curseur de zoom dans l'en-tête) | [[nav:bs-chart]] et [[nav:cf-chart]] | Grossit les barres hautes pour que les plus petites tranches année après année soient plus faciles à comparer. Tout à **gauche** = **1×** (pas de zoom). Ne **change pas** le plan — seulement l'échelle verticale des barres. |
| **Reveal** (curseur sous le graphique) | **Net Worth Distribution** | Compresse l'échelle horizontale vers une vue style log quand quelques fins extrêmes **écrasent** le nuage principal de points. Utilisez-le quand la masse des résultats est difficile à lire. Le produit peut pousser « Outliers squashing the dots ? » vers cette commande. |
| **Link reveal** | Deux distributions côte à côte (p. ex. original vs modifié) | **On** (défaut) : un seul réglage Reveal pour les deux graphiques afin qu'ils restent comparables. **Off** : révéler chaque côté indépendamment. |
| **Link chart scales** | Graphiques **BS** ou **CF** appariés (baseline \| comparison) | Partagent un **axe y** entre les deux cellules, mis à l'échelle du côté le plus haut — le plan plus petit **rétrécit visiblement** au lieu que chaque côté s'auto-échelle pour paraître aussi haut. |
| **Merge charts** | Même comparaison BS / CF appariée | Plie les deux côtés en **un** graphique : chaque année montre la barre gauche puis la barre droite côte à côte sur une échelle partagée (comparaison jointe). Le survol donne encore le détail de chaque côté. Fermez la modale quand c'est fait. |

#### Exemple : Close up


*Close up sur **Net Worth Distribution** — même nuage et ligne de succès, plus grande modale sur
Forecaster. **Reveal** et le survol fonctionnent encore ici ; fermez avec **✕** / Esc / scrim.*

**Quand faire Close up**

- [[nav:bs-chart]] / [[nav:cf-chart]] semblent à l'étroit dans une disposition Detail multi-puces — ouvrez celui
  qui vous intéresse.
- **Distribution** à côté de **Key Forecasts**, ou **deux distributions** dans Transforms après une
  re-sim — Close up du nuage (ou de chaque côté) pour balayer les points confortablement ; tips et
  mise en évidence fonctionnent encore.
- Les tableaux et autres cartes denses utilisent le même motif Close-up quand il est proposé.

#### Exemple : zoom vertical

[[img:ga-vertical-zoom]]

*Cash Flows avec le curseur **vertical zoom** dans l'en-tête (tip : tout à gauche = 1× / pas de
zoom). Les hautes années d'entrées n'écrasent plus le reste de la série. Les calculs du plan sont
inchangés.*

**Quand zoomer (BS / CF)**

- La pile d'une année est si haute que les autres années paraissent plates — montez un peu le zoom,
  puis survolez les années qui vous intéressent.

#### Exemple : Reveal

[[img:ga-compress]]

***Reveal** sous la distribution ouvre la masse des fins quand une longue queue à droite écraserait
sinon tout près de zéro. Les outliers restent dans l'exécution ; seule l'échelle horizontale
change.*

**Quand utiliser Reveal (distribution)**

- Quelques fins ultra-riches (ou ultra-pauvres) pincent la masse de points en une fine bande —
  Reveal étale le milieu lisible sans supprimer ces outliers de l'exécution.
- Les livres **HNW + haute vol** (Max loin du GMF) en ont le plus besoin — leçon dédiée :
  [When the outcome cloud needs Reveal](/learn/nw_distribution_compression).

Aucune de ces commandes ne relance le Monte Carlo ni n'édite le dossier ; elles changent seulement
**comment** vous regardez.

### Creuser un résultat difficile {#drill-into-a-tough-outcome}

<a id="drill-into-a-tough-outcome"></a>

Supposons que votre objectif final soit : **comprendre les pires chemins**, pas seulement le taux
de succès en une ligne.

1. Ouvrez [[nav:forecaster]] — Forecast Detail et **Simulation Summary** sont déjà peuplés (la
   simulation par défaut est souvent de l'ordre de **1 000** chemins sauf si l'UI dit autrement).
   Re-simulez seulement si vous avez changé le plan et avez besoin d'une nouvelle exécution multi-
   chemins.
2. **Redimensionnez** l'accordéon : donnez à **Simulation Summary** assez de place pour travailler
   (faites glisser le split pour que Summary soit haut).
3. Dans Summary, ouvrez **Key Forecasts** (et **Distribution** si vous voulez l'image du nuage).
4. Sélectionnez **Min** (pire résultat terminal de l'exécution) — ou **Q2** si vous voulez un
   chemin mauvais-mais-pas-seul-outlier (à peu près la frontière du quartile bas).
   *Raccourci : la [bande de sauts rapides](#quick-jumps-to-the-key-forecasts) sous le libellé
   **Forecast ID** fait la même chose sans quitter Detail — le triangle le plus à gauche (rouge) est
   **Min**, le suivant (orange) est **Q2**. Pratique une fois que Detail domine et que Summary est
   compressé.*
5. Cette sélection devrait focaliser **Forecast Detail** sur cet id de prévision. **Redimensionnez**
   à nouveau si vous voulez maintenant Detail dominant.
6. Réglez **Year** sur un jalon stressant (première année de retraite, grande année de dépense, soins
   en fin de vie).
7. Activez les puces qui répondent à votre question, par exemple :
   - [[nav:cf-chart]] + [[nav:cf-table]] — quel argent a bougé cette année ?
   - **Money Movements** — qu'est-ce qui a été vendu pour le financer ?
   - [[nav:bs-chart]] — le portefeuille a-t-il baissé d'un cran net ?
   - **Taxes** — l'impôt a-t-il amplifié la douleur ?
8. Balayez **Year** en avant/arrière le long de ce même mauvais chemin pour voir si le stress était
   une année ou un long grind.
9. Optionnellement comparez au chemin représentatif (**FID 0**, la ligne clé GMF, ou le **✦** doré
   de la bande de sauts rapides) avec la même année et les mêmes puces — même caméra, film différent.

Vous n'avez pas changé le foyer ; vous avez **choisi quelle histoire** du nuage lire de près.

---

## [[nav:transforms]] — essayer un changement sans casser la baseline {#transforms}

Ouvrez [[nav:transforms]].

Chemin typique utilisé dans les leçons :

1. Ouvrez **Modifications** (l'espace de travail what-if).
2. Choisissez quelque chose dans **Modifiables** (souvent une **Person**, ou un élément de flux
   comme earned income).
3. Éditez une commande (année de retraite, **Active years**, dépenses, …).
4. Changer l'un des contrôles de modification l'ajoute au **Change Set** — vous n'avez pas besoin
   d'une étape séparée « ajouter cette édition » pour le changement lui-même.
5. **Re-simulate** quand vous voulez une comparaison Monte Carlo complète original vs modifié.
6. Lisez **original vs modifié** dans les vues de comparaison Transforms / Forecaster et dans
   **Simulation Summary** après une re-sim.

**Note :** En changeant une commande de modification, les graphiques et tableaux devraient **se
mettre à jour en direct** pour que vous voyiez le plan réagir avant (ou sans) une re-sim complète.
Par exemple, augmentez **Active years** sur un élément earned-income et regardez le tableau de
bilan grandir avec les entrées supplémentaires ; diminuez ces années et regardez-le rétrécir.

Transforms sert à l'**exploration**. Enregistrer un second plan permanent est un choix séparé quand
le produit l'offre. Préférez Transforms à l'édition de Dossier quand la leçon est un « et si »,
surtout dans l'app de bureau où Dossier est vos vraies données.

---

## [[nav:region]] {#region}

[[nav:region]] (libellé du rail) est aujourd'hui le foyer de l'exploration **État américain** « et si
nous vivions là ? » — comparaison style coût de la vie contre le réglage de votre plan. Le nom du
produit est volontairement plus large : **le travail futur inclura d'autres pays** ; les États-Unis
sont le focus actuel.

Utilisez-le quand une leçon (ou votre propre curiosité) porte sur le **lieu**, pas quand vous n'avez
besoin que des graphiques de portefeuille — ceux-ci restent dans Forecaster.

---

## L'aide toujours à portée {#help-nearby}

- Les icônes **?** sur les panneaux ouvrent une aide focalisée pour ce graphique ou éditeur.
- L'outil **Help** sur le rail ouvre une courte carte de l'app (sections + conseils).
- Les leçons sont le **chemin guidé** ; l'aide in-app est la **référence** quand vous creusez.
- Pour **copie**, **thème** et comportement des **info-bulles / Alt**, voir
  [Chrome global](#global-chrome-copy-theme-and-tooltips) ci-dessus.

Si une leçon et un pop-up d'aide divergent sur un petit libellé, faites confiance au **chrome de
l'UI** — le texte peut se resserrer dans le temps. Les **emplacements** (Dossier, Assumptions,
Forecaster, Transforms, Region, [[nav:birds-eye]]) sont la carte durable.

---

## Un tour pratique de 5 minutes {#practice-tour}

1. Jetez un œil en **haut à droite** : thème (soleil/lune) et le cercle **hover-details** ; essayez
   **Alt** une fois sur un graphique ou un tableau pour que le silence des info-bulles paraisse
   naturel.
2. [[nav:dossier]] (icône dossier) — parcourez l'échantillon ; rappelez-vous : **consultation seule**
   pour les leçons, pas de saisie de données.
3. Dans [[nav:birds-eye]] (haut de Dossier) : personnes, puis essayez **Cash Flow** (et **Σ**) sur Assets &
   Liabilities ; revenez à **Account** / **Holding**.
4. Passez à [[nav:forecaster]] — remarquez l'icône d'**outil** [[nav:birds-eye]] apparaître sur le rail
   (masquée sur Dossier).
5. Ouvrez [[nav:birds-eye]] depuis cet outil — confirmez qu'il correspond à l'aperçu de Dossier ;
   fermez et restez sur Forecaster.
6. Dans Forecaster, jetez un œil à **Simulation Summary** (déjà exécuté) — succès sous Silver.
7. Dans **Forecast Detail**, ne laissez que [[nav:bs-chart]] et [[nav:cf-chart]] allumés ; déplacez le
   curseur **Year**.
8. Essayez **Key Forecasts → Min** (ou Q2), puis ouvrez **Money Movements** pour une année un peu
   drawdown.
9. [[nav:transforms]] → Modifications — choisissez un flux ou une personne ; poussez **Active years** ou
   la retraite et regardez la réaction **live** des graphiques ; notez le **Change Set**. Partez sans
   re-sim complète si vous ne vouliez que la carte.
10. Optionnellement ouvrez [[nav:assumptions]] et parcourez Growth / Taxes / Success une fois — pas besoin
    de rien changer.
11. Optionnellement ouvrez [[nav:region]] et voyez que c'est sur le lieu, pas sur le calcul de
    portefeuille.

Quand ce chemin est confortable, continuez vers
[Meet the Springfield household](/learn/springfield_baseline) pour la première vraie leçon de
planification sur ce même échantillon.

---

## Où cela se place dans le cursus {#where-to-go-next}

| Ordre | Leçon |
|-------|-------|
| **0 (vous êtes ici)** | Getting around the app (**Start here**) |
| **1** | [Meet the Springfield household](/learn/springfield_baseline) (orientation + timing de retraite) |
| **Later** | Living spend, contraste d'hypothèque, définitions de succès, claim Social Security, stratégie de retrait, plongées dans les assumptions, … |

Les leçons suivantes continueront de pointer ici avec de courts rappels de « où » plutôt que de
réenseigner toute la carte.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
