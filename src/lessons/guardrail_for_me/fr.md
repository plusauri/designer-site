<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/guardrail_for_me.fr.md
tutilis-locale: fr translated
-->
# Le garde-fou pour moi

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.guardrail_for_me
  outline-path: Household planning › Success and guardrails › Guardrail for me
  document-id: guardrail_for_me
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/guardrail_for_me.md
-->

<!--- α <lesson_body> -->
Les retraités et les chercheurs ont passé des décennies à poser une question d'apparence simple : *combien puis-je
dépenser d'un portefeuille sans tomber à court ?* Aucune réponse unique ne convient à chaque foyer, mais une poignée
d'approches connues a façonné la façon dont on parle d'une dépense « sûre ». Cette leçon vous invite à
rencontrer ces approches **sur votre propre plan** — non comme des pourcentages abstraits, mais comme des trajectoires côte à côte
que vous pouvez comparer au train de vie que vous avez modélisé.

### Avec gratitude {#with-gratitude}

Les six études de **Guardrails** reposent sur le travail dur d'autres personnes : analyse historique des marchés,
conception de règles de décision, tables actuarielles, et une écriture claire qui a rendu ces idées utilisables.
**Nous sommes reconnaissants** aux auteurs et aux éditeurs ci-dessous. Notre bac à sable est une
*illustration* pédagogique de leurs règles de style publié sous une trajectoire partagée — ce n'est **pas** une réimpression de
leurs articles, **pas** une certification de leurs résultats, et **pas** un conseil. Là où un lien public est
disponible, nous le donnons pour que vous puissiez aller à la source.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Ouvrages cités — les six études</summary>
<div class="lesson-bibliography-body">

- **Bengen SAFEMAX.** William P. Bengen, [“Determining Withdrawal Rates Using Historical Data”](https://www.financialplanningassociation.org/sites/default/files/2021-04/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf), *Journal of Financial Planning*, 1994 (réimpression). Le cadrage ultérieur, sensible à la valorisation, est dans *A Richer Retirement*.
- **Kitces ratchet.** Michael Kitces, [“The Ratcheting Safe Withdrawal Rate”](https://www.kitces.com/blog/the-ratcheting-safe-withdrawal-rate-a-more-dominant-version-of-the-4-rule/), Kitces.com, 2015.
- **Guyton–Klinger.** Jonathan Guyton et William Klinger, [“Decision Rules and Maximum Initial Withdrawal Rates”](https://www.financialplanningassociation.org/sites/default/files/2021-11/2006%20-%20Guyton%20and%20Klinger%20-%20Decision%20Rules%20and%20SWR%20%281%29.PDF), *Journal of Financial Planning*, 2006.
- **Maggiulli 3.65%.** Nick Maggiulli, [*Of Dollars And Data*](https://ofdollarsanddata.com/), et *The Wealth Ladder*. Dépenser 0.01% par jour revient à environ 3.65% par an.
- **Modified RMD.** Internal Revenue Service, [Publication 590-B](https://www.irs.gov/publications/p590b), Uniform Lifetime Table. Le produit l'étend comme table de planification pour les âges d'avant le début des RMD.
- **Safety-first.** Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019. L'approche sécurité d'abord de Pfau couvre d'abord la dépense essentielle par un revenu garanti, à partir de la Sécurité sociale, des pensions et des rentes, et investit le reste. La règle du produit suit cette forme : l'essentiel est couvert par le revenu garanti, et un taux discrétionnaire est dépensé sur le portefeuille qui reste. C'est une illustration de l'approche, pas une règle tirée d'une seule table du livre.

</div>
</details>

**Guardrails** fait ensuite tourner ces règles de style publié contre **votre** taille de portefeuille, votre horizon et
vos besoins de train de vie sous **une trajectoire de bac à sable partagée**. Cette leçon porte sur la **personnalisation** de cette
comparaison : partir du pécule du foyer Springfield, voir ce que chaque étude dépenserait, et le poser
à côté des revenus et des besoins propres du plan. Ce n'est pas un score de survie [[term:monte-carlo|Monte Carlo]] et ce n'est pas
un conseil en investissement.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

La règle empirique de Nick Maggiulli est de dépenser **0.01%** de votre portefeuille chaque jour. Cela paraît minuscule,
mais sur un an cela fait **3.65%**, un peu sous la fameuse règle des 4%. Sur un portefeuille de \$1 million
cela fait environ \$100 par jour.

</div>
</aside>

Le plan actif à droite est **Springfield Baseline** (`springfield_baseline`).

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Que compare Guardrails, et en quoi est-ce différent d'une prévision Monte Carlo ?** Voir
   [Ce que sont les garde-fous](#what-guardrails-is-and-is-not).
2. **Pourquoi la dépense de l'étude reste-t-elle près de zéro jusqu'à la retraite, et pourquoi le rendement par défaut commence-t-il
   à 8% ?** Voir [Ce que sont les garde-fous](#what-guardrails-is-and-is-not).
3. **Étant donné mon patrimoine net et l'horizon du plan, quelle trajectoire de dépense chaque règle de retrait publiée
   autoriserait-elle ?** Voir [Où regarder](#where-to-look).
4. **Comment la dépense de chaque règle se situe-t-elle à côté de mes besoins de train de vie et de mon revenu hors portefeuille ?** Voir
   [Où regarder](#where-to-look).
5. **De quel portefeuille de départ chaque règle aurait-elle besoin pour qu'une marge de financement liée à l'étude reste
   non négative ?** Voir [Où regarder](#where-to-look).
6. **Pourquoi la marge de couverture peut-elle être verte alors que la réussite Monte Carlo est bien en dessous de 100% ?** Voir
   [Où regarder](#where-to-look).
7. **Qu'est-ce que ce bac à sable ne prétend délibérément pas ?** Voir [Ce que ce n'est pas](#what-this-is-not).

</div>
</aside>

---

## Ce que sont les garde-fous (et ce qu'ils ne sont pas) {#what-guardrails-is-and-is-not}

| | Guardrails | <span class="product-mark product-mark-on-dark"><span class="product-mark-label">Simulation Tutilis</span></span> |
|:---|:---|:---|
| **Votre prévision** | **Jamais appliquée.** Chaque règle tourne ici seulement, sur la trajectoire de côté, pour que vous puissiez les comparer. | Dépense ce que disent vos flux de trésorerie et votre stratégie résiduelle de vente/investissement. Elle n'applique **aucune** règle de retrait de cette page. |
| **Comment les marchés fonctionnent** | Une trajectoire **fixe** : inflation et rendement nominal constants. Les chercheurs ont déjà fait leur propre Monte Carlo et une analyse étendue, et ont publié des fonctions de dépense **sûres** (ou des règles de décision). Nous **utilisons ces fruits** — nous ne **relançons** ni ne **revalidons** leurs études ici. | Nuages **Monte Carlo** sur beaucoup de trajectoires aléatoires, plus la politique résiduelle, les impôts, et le reste de la boucle complète du plan. |
| **Ce que vous comparez** | Des récurrences d'étude côte à côte pour **Bengen SAFEMAX**, **Kitces ratchet**, **Guyton–Klinger**, **Maggiulli 3.65%**, **Modified RMD** et **Safety-first**. Avant la retraite principale, le bac à sable **ne fait que croître** ; à partir de la retraite, chaque règle calcule la dépense \(S_t\), puis fait croître le reste. | La réussite trajectoire par trajectoire de **votre** plan sous **votre** définition de la réussite (Or / Argent / Bronze). |
| **Ce que vous saisissez** | Un **petit** jeu d'entrées motrices du bac à sable — taille du portefeuille, inflation, **rendement arithmétique du portefeuille [[term:mu\|μ]]**, **volatilité [[term:sigma\|σ]]** (croissance de la trajectoire de l'ensemble B), CAPE (**Bengen SAFEMAX**), essentiel / garanti (**Safety-first**), années d'étude. C'est l'arbitrage : les études font le travail dur et vous remettent une règle plus simple, plus au coin de l'enveloppe, pour ce qu'elles prétendent que vous pouvez dépenser. Les modifications restent ici ; rien n'est écrit dans le dossier. | Hypothèses durables du **dossier** (croissance, impôts, vente/investissement résiduel, règle de réussite, et le foyer lui-même). |

Chaque année après le début de la retraite, le moteur retire la dépense autorisée par la règle (plafonnée au cash),
puis fait croître le reste. Les règles de l'**ensemble A** (Bengen SAFEMAX, Kitces, Guyton–Klinger) croissent au
**μ** arithmétique. Les règles de l'**ensemble B** (Maggiulli, [[term:rmd]] modifié, Safety-first) croissent à un taux simple de frein de volatilité
\(r_{\mathrm{adj}} \approx \mu - \tfrac12\sigma^2\), pour que les trajectoires en pourcentage du portefeuille ne soient pas
enjolivées sur une ligne μ sans risque — équité méthodologique, **pas** une nouvelle exécution Monte Carlo complète
des articles.

### Début de l'étude à la retraite principale {#study-onset-at-primary-retirement}

Les règles publiées sont cadrées pour **quelqu'un qui prend sa retraite** (ou qui est déjà à la retraite). Guardrails prend
ce même pied :

1. **Avant la retraite principale** — le portefeuille du bac à sable **ne fait que croître**. Il n'y a pas de retrait d'étude
   \(S_t\). Le pécule qui apparaît à la retraite est celui avec lequel la règle commencerait si vous ouvriez
   Guardrails cette année-là.
2. **À partir de la retraite** — la première année de prélèvement de chaque règle est l'année 0 relative à la règle (taux de graine, cellule [[term:cape]],
   base Kitces, et ainsi de suite, atterrissent une fois, sur le pécule déjà accru).
3. **Déjà à la retraite** (ou pas d'année de retraite sur le titulaire principal) — les prélèvements commencent au début de la prévision
   (« maintenant »).

Sur Springfield, la retraite est encore à des années, donc les premières années des **Trajectoires de dépense** restent près de **\$0
de dépense d'étude** pendant que le portefeuille se compose. C'est voulu, pas un graphique cassé.

### Le rendement du portefeuille est nominal {#portfolio-return-is-nominal}

Le bouton **Rendement μ** est un taux annuel **[[term:nominal]] constant** après chaque retrait (défaut **8%**,
avec une [[term:inflation]] par défaut de **2.5%** ≈ un réel à un chiffre du milieu pour un livre équilibré). Le bac à sable garde les deux
boutons dans une **bande pluriannuelle raisonnable** (non négative jusqu'à environ **15%**) pour que la trajectoire reste une
illustration des règles publiées, pas un jouet de déflation ou de « 50% pour toujours ».

Pourquoi pas 5% ou même 7% comme défaut ? À **5% nominal** (~2.5% réel), **Bengen SAFEMAX** et
**Kitces ratchet** tendent tous deux à **dépenser tout le portefeuille** sur des horizons de plusieurs décennies. À **7%**,
**Bengen SAFEMAX** **s'épuise** encore souvent vers l'année 40 sous son taux de départ fondé sur la valorisation
(~5.1% à CAPE 22) avec un [[term:cola]] pur — courant quand l'horizon de l'étude colle à un long plan. C'est
de l'arithmétique, pas un bug d'interface : les taux de départ de style étude supposent quelque chose de plus proche des rendements équilibrés historiques
(à peu près **7–8% nominal / ~4–5% réel** pour un mélange 50/50–60/40). Le défaut se situe au
**haut** de cette bande pour que la première ouverture ne ressemble pas à « chaque règle échoue ».

Vous pouvez encore régler **7%** ou **5%** dans le curseur pour voir quelles trajectoires se vident — c'est une expérience
utile, pas un bug.

### Réserve sur la séquence des rendements (lisez ceci) {#sequence-of-returns-caveat-read-this}

**Bengen SAFEMAX** vient de **séquences de rendements historiques**, pas d'un seul rendement moyen.
Une trajectoire constante à 8% ne peut qu'**illustrer le mécanisme** de la règle (COLA, taux initial fondé sur la valorisation,
marqueurs d'épuisement). Elle **ne peut pas** reproduire SAFEMAX ni prouver un taux de dépense sûr. Traitez le
graphique comme un **bac à sable de comparaison**, pas comme une rediffusion historique.

### 4% est-il encore sûr ? {#is-4-still-safe}

L'étude de 1994 de William Bengen a trouvé qu'un retrait de 4% ajusté de l'inflation survivait à chaque période de 30 ans de l'histoire des États-Unis, et l'étude Trinity de 1998 est arrivée à une réponse semblable avec une méthode différente. Wade Pfau a fait une grande partie de la recherche qui a testé jusqu'où cette réponse voyage. En 2010, il a fait le même genre de test sur 109 ans de données de marché de 17 pays développés, et un retrait réel de 4% n'aurait été sûr que dans 4 d'entre eux. En 2013, avec Michael Finke et David Blanchett, il a montré que, lorsque les rendements obligataires sont réglés sur les faibles rendements de cette année-là plutôt que sur leur moyenne historique, le taux d'échec estimé d'un plan à 4% avec moitié en actions passe d'environ 6% à 57%.

Aucun des deux articles ne dit que 4% est faux pour chaque foyer. Les deux disent qu'un taux sûr dépend des rendements que les prochaines décennies livrent, et que le passé des États-Unis a été inhabituellement clément. C'est la raison pour laquelle le bouton **Rendement μ** de ce bac à sable compte, et la raison d'essayer les réglages plus bas dans [À essayer](#try-this). La réponse ultérieure de Pfau au problème est l'approche sécurité d'abord que la règle **Safety-first** illustre : construire un plancher de revenu garanti pour la dépense essentielle, pour que moins de choses dépendent de la sûreté d'un [[term:withdrawal-rate|taux de retrait]] quelconque.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Travaux connexes — des études qui mettent la règle des 4% à l'épreuve</summary>
<div class="lesson-bibliography-body">

- Philip L. Cooley, Carl M. Hubbard et Daniel T. Walz, "Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable," *AAII Journal*, février 1998 (l'étude Trinity).
- Wade D. Pfau, ["An International Perspective on Safe Withdrawal Rates: The Demise of the 4 Percent Rule?"](https://www.financialplanningassociation.org/article/journal/DEC10-international-perspective-safe-withdrawal-rates-demise-4-percent-rule), *Journal of Financial Planning*, décembre 2010.
- Michael Finke, Wade D. Pfau et David M. Blanchett, ["The 4 Percent Rule Is Not Safe in a Low-Yield World"](https://www.financialplanningassociation.org/article/4-percent-rule-not-safe-low-yield-world), *Journal of Financial Planning*, juin 2013. Lauréat du Montgomery-Warschauer Award 2014 de la FPA.
- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.

</div>
</details>

---

## Où regarder {#where-to-look}

### Ouvrir Guardrails {#open-guardrails}

1. Sur la **barre de navigation** de gauche, choisissez **Guardrails** (icône santé/bouclier avec un accent doré — avec
   Région et le groupe d'outils, pas à l'intérieur du Prévisionniste).
2. Le panneau est une page déroulante en deux bandes : un **bac à sable du haut** (scénario, résumé des règles,
   trajectoires de dépense) et une bande de **personnalisation du bas** (une étude contre votre plan). Tirez la
   poignée horizontale sous la bande du haut pour récupérer de la hauteur après avoir réglé les boutons ; les graphiques
   personnels restent en dessous.

[[jump:guardrails|output__guardrails__guardrails.rule-summary]]

### Section du haut — études partagées {#top-section-shared-studies}

Contenu de la **section du haut** (Scénario partagé · Résumé des règles · Trajectoires de dépense) :

[[img:guardrails-top-band]]

*Dimensionné pour que les boutons principaux et le Résumé des règles siègent avec les Trajectoires de dépense — changez une commande et les trajectoires
se mettent à jour dans la même vue. Réduisez la bande du haut avec la poignée quand vous voulez plus de place pour
la personnalisation en dessous.*

Le **Scénario partagé** (à gauche) et le **Résumé des règles** (à droite) siègent côte à côte quand la fenêtre est large —
tirez le séparateur vertical entre eux. Les **Trajectoires de dépense** sont sous les deux ; des puces à sélection multiple dans
le titre du graphique montrent ou cachent les courbes. Les modifications du scénario restent dans ce bac à sable — rien n'est écrit dans le
dossier.

### Personnalisation du bas — votre plan {#bottom-personalization-your-plan}

Contenu de la bande de **personnalisation du bas** (puces d'étude · trois vues de flux · marge de couverture) :

[[img:guardrails-personalization-band]]

*La personnalisation et la couverture partagent la bande du bas pour que vous puissiez choisir une étude, changer de vue et lire
la marge sans quitter la page. Sur Springfield sous les défauts, la marge est souvent verte /
[[term:solvent]].*

Met en regard **une** étude sélectionnée et votre plan. Les puces d'étude au-dessus de cette bande choisissent quelle règle alimente
la **Personnalisation de l'étude** et la **marge de couverture** (séparé des courbes affichées sur
les Trajectoires de dépense).

**Personnalisation de l'étude** est un graphique de flux de trésorerie avec trois vues exclusives :

| Vue | Ce qu'elle montre |
|------|----------------|
| **Capacité de l'étude** | Seulement la dépense de portefeuille de l'étude sélectionnée le long de la trajectoire partagée (années d'avant retraite près de \$0 par conception) |
| **Revenus/dépenses modélisés (sans portefeuille)** | Revenus hors portefeuille du plan et dépenses de train de vie en piles de catégories — pas de superposition d'étude |
| **Modélisé avec le revenu de l'étude** | Piles du plan **plus** la dépense de portefeuille de l'étude — le jumeau année par année de l'histoire de financement que la marge de couverture totalise |

Lisez la **ligne de flux de trésorerie net** comme sur le [[nav:cf-chart]] du Prévisionniste : **au-dessus** de la légende des années, c'est
positif / excédent ; **en dessous**, c'est négatif / manque. La marge de couverture sous le graphique est un
cumul en pouvoir d'achat de ces mêmes nets (vert solvable au-dessus de zéro ; rouge non financé en dessous).

### Scénario partagé (commandes) {#shared-scenario-controls}

| Commande | Rôle |
|---------|------|
| **Portefeuille** | Part du patrimoine net du dossier ; curseur / édition pour « et si cette taille ? » |
| **PN liquide** | **Activé par défaut** — graine à partir des comptes investissables moins les passifs (même idée que le patrimoine net liquide de [[nav:birds-eye]]). Désactivez pour inclure la maison et les autres actifs réels. |
| **Inflation** | COLA constante / inflation de début pour les règles de valorisation (non négative jusqu'à ~15%) |
| **Rendement μ** | Croissance constante après retrait — voir plus haut (0% jusqu'à ~15%) |
| **Vol σ** | Frein de croissance de la trajectoire de l'ensemble B seulement |
| **CAPE** | Matrice de valorisation **Bengen SAFEMAX** au **début de la retraite** seulement |
| **Essentiel / Garanti** | Règle **Safety-first** seulement |
| **Années d'étude** | Du début de la prévision jusqu'à la fin que vous choisissez (défaut = horizon du plan). Les **retraits** de l'étude commencent encore à la retraite principale quand cette année est devant. |

Les modifications restent dans le bac à sable — **rien n'est écrit** dans le dossier. Ouvrez **Comment ça marche** sur le
panneau pour les équations de la trajectoire partagée et la carte de la page.

### Trajectoires de dépense {#spending-paths}

Chaque étude est une série annuelle de **cash réellement retiré** (plafonné au portefeuille). Un marqueur de la couleur de la règle
montre l'**épuisement** quand le portefeuille finit vide. Des puces à sélection multiple dans le titre du graphique montrent ou
cachent les courbes. Déplacez le pointeur **n'importe où** dans le graphique : l'indication suit l'année la plus proche et liste,
pour chaque règle visible, le **portefeuille** en début d'année, la **dépense totale** sur la trajectoire, et le réel de cette année
(ou cible vs réel quand le plafond de cash s'applique). La commande année/âge en bas à gauche du
graphique est le même menu d'axe que sur les graphiques de bilan et de flux de trésorerie.

### Résumé des règles et portefeuille minimal pour la couverture {#rule-summary-and-min-portfolio-for-coverage}

| Tableau | Rôle |
|-------|------|
| **Résumé des règles** | Dépense de début / taux de début (première année de **prélèvement**, pas un zéro d'avant retraite), dépense totale, portefeuille terminal, plus **Portefeuille min** et **Supplément nécessaire** pour la couverture : le plus petit pécule de départ pour que la **marge de couverture** reste non négative sous ces boutons de bac à sable et les piles de votre plan (**retirer selon le besoin**). Le supplément nécessaire est par rapport à la commande de portefeuille au-dessus. Un tiret cadratin veut dire insoluble (par exemple un manque des années de travail que la dépense d'étude ne peut pas corriger parce qu'avant le début \(S_t = 0\)). Ouvrez le **?** du tableau pour une lecture colonne par colonne. Cliquez une ligne pour sélectionner cette étude pour la personnalisation. |

Sous Springfield Baseline avec les défauts, vous verrez souvent **supplément nécessaire = \$0** pour chaque règle et une
marge de couverture **verte (solvable)** — le pécule du foyer franchit déjà la marge sous ces
boutons. Baissez le portefeuille ou le rendement pour voir le tableau se recalculer et la marge se resserrer, ou ouvrez
[Quand les garde-fous demandent plus](/learn/springfield_guardrail_gap) pour un contrepoint proche de la retraite
où le supplément nécessaire est positif et où faire grossir le pécule est la leçon.

[[jump:guardrails|output__guardrails__guardrails.rule-summary__line.guardrails.min-portfolio,output__guardrails__guardrails.rule-summary__line.guardrails.extra-needed]]

### Pièces de la bande du bas {#bottom-band-pieces}

| Pièce | Rôle |
|-------|------|
| **Puces d'étude** (au-dessus de la personnalisation) | La dépense de trajectoire de quelle étude alimente la personnalisation et la marge |
| **Personnalisation de l'étude** | Trois vues des piles du plan et/ou de la capacité de l'étude (tableau ci-dessus) |
| **Marge de couverture** | Cumul en pouvoir d'achat des nets de financement ; **retirer selon le besoin** sur la barre d'outils |

La capacité bouge avec le bouton de portefeuille et le début de l'étude ; **le besoin et les revenus restent écrits par le dossier**.
Cette séparation est le sens de la moitié personnalisation de l'écran.

### Marge de couverture vs réussite Monte Carlo {#coverage-buffer-vs-monte-carlo-success}

Sur **Springfield Baseline** sous les défauts, la marge de couverture est en général **verte / solvable** et
**Supplément nécessaire** est de **\$0** pour chaque règle — un pécule confortable franchit l'histoire de financement
liée à l'étude. Le **Monte Carlo** du Prévisionniste sur le même foyer rapporte encore souvent quelque chose comme
**deux trajectoires sur trois** qui réussissent au seuil **Argent** par défaut (pas 100%). Ces deux résultats peuvent être vrais —
ils répondent à des questions différentes. Une marge verte n'est pas « le MC a tort », et un % Argent élevé n'est pas
« chaque règle publiée finance toujours ce train de vie ».

Pour voir une marge **serrée ou rouge** **pendant que** Monte Carlo a encore l'air vivable, **baissez le portefeuille**
ici, ou ouvrez
[Quand les garde-fous demandent plus](/learn/springfield_guardrail_gap) (contrepoint proche de la retraite
avec un pécule plus mince). Sur ce contrepoint, faire grossir le capital liquide vers le **portefeuille min** d'une étude peut
faire monter la réussite Monte Carlo résiduelle sans égaler les deux scores :

[[img:guardrail-gap-transforms-mc-before-after]]

*Depuis la leçon contrepoint de l'écart : faites grossir **Traditional [[term:401k]] → Target Date Equity**<!-- term-skip: traditional — a Transform's name, not prose --> vers un minimum d'étude et
lisez le **Résumé de simulation** Original vs Modifié sous Argent. Le même actif que ce parcours —
Springfield de base ici commence souvent vert / Supplément nécessaire \$0, donc l'histoire de la hausse vit sur le
contrepoint.*

| | **Marge de couverture** (Guardrails) | **Réussite Monte Carlo** (Prévisionniste) |
|---|---|---|
| **Question** | Si les prélèvements du portefeuille sont **plafonnés par la dépense autorisée \(S_t\) de cette étude** (à partir du début de la retraite), est-ce que les revenus du plan + cette capacité financent le **besoin de train de vie** année par année (marge courante sensible à l'ordre sur l'horizon **complet**) ? | Sous le **plan complet** — politique de capital résiduelle, impôts, beaucoup de trajectoires de marché aléatoires — est-ce que la trajectoire « s'en sort » sous votre définition de la réussite ? |
| **Qui peut prélever sur le portefeuille ?** | Seulement ce que la **règle de l'étude** autorise après le début (facultativement seulement l'écart après les autres revenus — *retirer selon le besoin*). Les années d'avant retraite engrangent le surplus/déficit du plan **sans** dépense d'étude. | La politique **résiduelle** du plan peut vendre ce dont le foyer a encore besoin (pro rata, ordre fiscal, glissement, …) |
| **« Difficulté »** | Solde de marge \(B_t < 0\) n'importe quelle année (et il n'a pas besoin de se rétablir pour que la bande reste rouge) | Sous **Argent**, un stress de **liquidité** temporaire qui se rétablit plus tard peut encore compter comme une réussite ; seuls les résultats plus durs sont des échecs |
| **Marchés** | Une μ constante / trajectoire de frein de l'ensemble B | Nuage de séquences |

Donc :

- **Marge rouge** ≈ « la dépense autorisée de cette règle ne finance jamais tout à fait le train de vie modélisé sous la
  trajectoire du bac à sable », y compris les années où les piles du plan seules sont courtes avant que la règle commence à prélever.
- **Réussite Argent élevée** ≈ « la plupart des trajectoires du moteur financent encore le *plan* sous les prélèvements résiduels et les marchés »
  — et le mélange des résultats compte encore (réussite nette vs rétablissement de liquidité vs échec ; patrimoine net
  de queue gauche).
- **Marge verte + Supplément nécessaire \$0** sur les défauts de Springfield ≈ l'histoire de train de vie liée à l'étude passe
  sous ces boutons — toujours pas la même chose que la survie du plan en Monte Carlo.

**Quelle image pour le « risque d'échec » ?**

- Pour **« ce plan survivra-t-il tel que l'application le prévoit vraiment ? »**, préférez **Monte Carlo** (mélange de
  réussite + queue baissière — pas le % en titre seul). Voir [Que signifie la réussite ?](/learn/springfield_success).
- Pour **« si je discipline les prélèvements selon cette règle publiée, le train de vie est-il encore financé ? »**, préférez la
  **marge de couverture**, **Modélisé avec le revenu de l'étude**, et **Portefeuille min** / **Supplément nécessaire** dans le
  Résumé des règles. Cette question est volontairement plus stricte.
- Aucun des deux n'est complet à lui seul. Ne lisez pas une réussite MC élevée comme « une étude à 4% finance toujours ce train de vie »,
  et ne lisez pas une marge rouge comme « Monte Carlo ment ».

Barre d'outils de la marge de couverture : **Retirer selon le besoin** (activé par défaut) n'engrange que la dépense d'étude nécessaire
après que les autres revenus couvrent le train de vie — laissez-le activé pour une histoire de financement du train de vie. Il n'y a pas d'interrupteur séparé
« commencer la marge à la retraite » : le début vit déjà dans la trajectoire de l'étude, et la marge porte
les nets du plan sur tout l'horizon.

[[jump:guardrails|output__guardrails__guardrails.personalization__line.guardrails.coverage-buffer]]

---

## À essayer {#try-this}

1. Ouvrez **Guardrails**. Confirmez que le **PN liquide** est **activé** (pécule investissable par défaut), que le **Rendement μ**
   est de **8%**, que la **Vol σ** est d'environ **15%**, et que le montant du portefeuille ressemble à comptes − dette plutôt
   qu'au PN complet du foyer avec la maison. Notez la ligne sous les boutons : croissance de l'ensemble A vs ensemble B après
   le frein de volatilité.
2. Parcourez les **Trajectoires de dépense** avec plusieurs études visibles. Les premières années devraient montrer peu ou pas de dépense
   d'étude jusqu'à la retraite principale ; les années tardives s'éventent selon la règle. Notez les losanges d'épuisement s'il y en a. Déplacez
   le pointeur à travers le graphique — l'indication doit suivre sans que vous ayez à toucher un point.
3. Baissez le **Rendement μ** à **7%**, puis à **5%**. À 7%, **Bengen SAFEMAX** peut encore se vider sur un long
   horizon ; à 5%, **Bengen SAFEMAX** et **Kitces ratchet** se vident souvent tous les deux. Restaurez **8%**.
   Facultatif : montez **σ** et regardez les trajectoires de l'ensemble B s'amincir par rapport à l'ensemble A.
4. Facultatif : montez le **CAPE** (marché cher) et regardez la dépense de début de **Bengen SAFEMAX** changer ; les autres
   règles ignorent le CAPE.
5. Lisez le **Résumé des règles** — **Portefeuille min** et **Supplément nécessaire**. Sur Springfield sous les défauts,
   le supplément nécessaire est souvent de \$0 et la marge est verte. Baissez la commande **Portefeuille** jusqu'à ce que certaines lignes
   montrent un supplément positif (et la marge peut passer au rouge) — puis restaurez.
6. Dans la bande de **personnalisation du bas**, choisissez une étude avec les puces. Faites tourner les trois
   vues de personnalisation. Sur **Modélisé avec le revenu de l'étude**, regardez la **ligne nette** vs l'axe des années.
   Laissez la **marge de couverture** activée : vert veut dire solvable ; rouge veut dire que la marge de financement courante est passée
   en négatif. Confirmez que **Retirer selon le besoin** est activé pour une histoire de financement du train de vie.
7. Facultatif : ouvrez [[nav:forecaster]], lancez Monte Carlo sur le même plan Springfield, et comparez le %
   de réussite + le mélange des résultats à l'histoire de la marge — des questions différentes (voir plus haut).

---

## Ce que ce n'est pas {#what-this-is-not}

- **Pas** une politique de dépense dans votre prévision. Le Prévisionniste n'applique jamais aucune de ces règles ; il
  dépense ce que disent vos flux de trésorerie et votre stratégie résiduelle.
- **Pas** l'affirmation que 8% (ou n'importe quel μ) sera gagné chaque année.
- **Pas** SAFEMAX tiré de l'histoire — les séquences comptent ; cette trajectoire ne les reproduit pas.
- **Pas** une stratégie résiduelle sensible à l'impôt ni une *politique* de RMD au sens du plan complet (celles-là vivent dans
  Hypothèses / Prévisionniste).
- **Pas** le même score que la réussite Monte Carlo : couverture du train de vie limitée par l'étude ≠ survie du plan
  financée en résiduel sous Argent/Or/Bronze.
- **Pas** un conseil de dépenser le chiffre en dollars d'une étude ou la solution de portefeuille minimal comme une recommandation.

Une leçon d'étude plus approfondie (paramètres des règles, plus de foyers, notes de recherche plus poussées) peut suivre une fois
ce parcours de personnalisation familier.

---

## Et ensuite {#where-to-go-next}

| Leçon | Lien |
|--------|----------------|
| [Quand les garde-fous demandent plus](/learn/springfield_guardrail_gap) | Contrepoint proche de la retraite : la marge échoue → min \(P_0\) → grossir → le MC s'améliore |
| [À la rencontre du foyer Springfield](/learn/springfield_baseline) | Le même foyer de canevas (pécule confortable) |
| [Que signifie la réussite ?](/learn/springfield_success) | Paliers de réussite Monte Carlo — une autre surface |
| [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) | Politique résiduelle de **vente/investissement**, pas les règles d'étude |
| [Rééquilibrage glissant vs pro rata](/learn/springfield_glide) | Ciblage du mélange résiduel |

---

## L'essentiel, sans détour {#honest-takeaway}

Utilisez Guardrails pour demander : **si ces règles publiées faisaient croître mon pécule investissable jusqu'à la retraite, puis tournaient
sur ce solde sous une hypothèse de rendement claire, comment les trajectoires de dépense se compareraient-elles entre elles et
aux besoins de mon plan — y compris si une marge de financement liée à l'étude reste non négative, et de combien de
capital de départ chaque règle aurait besoin pour la garder ainsi ?** Puis ramenez cette intuition au Monte Carlo du Prévisionniste
(survie du plan sous la politique résiduelle et les marchés) et à votre propre jugement — avec le risque de séquence
et les impôts encore en vue.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
