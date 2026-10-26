<!--
tutilis-return: lessons/working_fast_in_tutilis/prose/fr.md
tutilis-locale: fr translated
-->
# Travailler vite : les raccourcis

Un plan financier est dense. Un seul écran peut contenir un graphique de flux de trésorerie, un bilan et une prévision de mille avenirs possibles, et chaque chiffre qui s'y trouve repose sur une règle, un taux ou un élément ailleurs dans le plan. Tutilis est construit pour que la réponse à « qu'est-ce que c'est, et d'où est-ce venu ? » ne soit jamais à plus d'une touche ou d'un survol.

Les sections ci-dessous couvrent les habitudes qui rendent cela vrai, une à la fois, et chacune vient avec la raison pour laquelle elle fonctionne ainsi. Le foyer Springfield sur le [[term:canvas]] est un plan que vous connaissez déjà, donc l'attention peut rester sur les outils.

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **Comment chercher un mot ou un chiffre publié sans quitter le champ dans lequel je tape ?** Voir [Glossaire et Référence](#glossary-and-reference).
2. **Comment savoir ce que signifie une barre ou un chiffre sur un graphique ?** Voir [Survoler pour le détail](#hover-for-the-details).
3. **Comment consulter un compte ou un titre pendant que je lis un graphique ?** Voir [Vue d'ensemble pour n'importe quel élément](#birds-eye-for-any-item).
4. **Comment tester une inquiétude sans changer le plan lui-même ?** Voir [L'essayer dans Transformations](#test-it-in-transforms).
5. **Comment passer du Détail de prévision au Résumé de simulation ?** Voir [Échanger les deux sections](#swap-the-two-sections).
6. **Comment faire plus de place sur l'écran d'un ordinateur portable ?** Voir [Faire de la place pour la réponse](#make-room-for-the-answer).
7. **Comment taper un gros montant sans compter les zéros ?** Voir [Saisir les montants vite](#type-amounts-quickly).
8. **Où trouver chaque raccourci clavier ?** Voir [Toutes les touches au même endroit](#every-key-in-one-place).

</div>
</aside>

## Glossaire et Référence {#glossary-and-reference}

La planification a son propre vocabulaire, et une prévision tourne sur des centaines de chiffres publiés, comme les tranches d'imposition, les plafonds de versement et les primes Medicare. Tutilis garde les deux à une touche. Le **Glossaire** explique ce que les mots veulent dire, et la **Référence** liste chaque tableau, taux et règle que la prévision utilise, avec sa source et ses limites. Ils se ressemblent exprès, parce qu'ils sont la même sorte de chose : l'un tient le vocabulaire et l'autre tient les chiffres.

**[[key:Glossary]]** ouvre le Glossaire et **[[key:Reference]]** ouvre la Référence. Ces deux touches marchent même pendant que vous tapez dans un champ. C'est voulu. Le moment où vous voulez le plus une définition est celui où le curseur de texte est dans le champ qui a utilisé le mot, et ce serait une mauvaise conception que de vous faire cliquer ailleurs et perdre votre place pour aller la chercher.

Quand la question est où quelque chose se trouve plutôt que ce que cela veut dire, appuyez sur **[[key:Search]]**. Le curseur de texte va dans la boîte **Saut rapide** en haut de la fenêtre. Tapez un mot comme roth, irmaa ou 529, et la boîte liste les endroits de l'application où ce mot est saisi, essayé comme un « et si », ou montré dans la prévision. Utilisez les flèches pour choisir un endroit et Entrée pour y aller. Cette touche marche aussi pendant que vous tapez.

Les raccourcis utilisent **Ctrl sur un Mac** aussi. Les touches Cmd-lettre appartiennent à macOS et à des habitudes que vous avez déjà, comme Cmd-P pour imprimer et Cmd-G pour trouver l'occurrence suivante. Les touches Ctrl-lettre sont libres sur un Mac en dehors des champs de texte, et les lettres ont été choisies pour éviter les touches Windows sur lesquelles tout le monde compte, ce qui explique pourquoi les taux de change sont [[key:Fx]] plutôt que Ctrl-X.

Le Centre d'apprentissage a les mêmes touches, avec un changement sous Windows et Linux. Là, le navigateur utilise déjà les touches Ctrl-lettre pour recharger la page, chercher du texte, imprimer et ouvrir des onglets, donc le Centre d'apprentissage prend les mêmes lettres avec **Alt** à la place : [[key:Alt+Glossary]] pour le Glossaire, [[key:Alt+BirdsEye]] pour la Vue d'ensemble, et ainsi de suite. Sur un Mac, les touches sont les mêmes touches Ctrl que dans l'application, et Option marche aussi, ce qui aide quand une autre application sur votre Mac a déjà pris une touche Ctrl pour elle. Elles marchent que le texte de la leçon ou le canevas ait le focus.

## Survoler pour le détail {#hover-for-the-details}

Le [[nav:forecaster]] est conçu pour que chaque marque dessus puisse s'expliquer. Posez le pointeur sur une barre, une ligne ou une étiquette et une infobulle vous dit ce que c'est, de quoi c'est fait et comment cela a été calculé. Le [[term:hover|survol]] est le moyen le plus rapide de répondre à une question sur un chiffre, et il laisse le graphique exactement comme il était.

## Vue d'ensemble pour n'importe quel élément {#birds-eye-for-any-item}

Parfois la question porte sur un élément plutôt que sur une année. Quand vous regardez un graphique et voulez en savoir plus sur un compte ou un titre en particulier, appuyez sur **[[key:BirdsEye]]** pour ouvrir [[nav:birds-eye]] par-dessus ce que vous étiez en train de faire. La Vue d'ensemble liste tout le foyer en [[term:present-value|valeurs actuelles]] sur une seule barre, les actifs d'un côté et les obligations de l'autre.

[[jump:birds-eye]]

[[img:working-fast-birds-eye-account]]

Survolez n'importe quel élément de la Vue d'ensemble et sa carte apparaît. La carte est la description propre du plan pour cet élément. Pour un compte, elle nomme le titulaire et liste chaque fonds ou action que le compte détient, avec sa catégorie, sa valeur et son coût. Appuyez de nouveau sur **[[key:BirdsEye]]** et vous êtes de retour sur le graphique que vous aviez quitté.

[[img:working-fast-card-brokerage]]

## Aperçu de toutes les vues {#peek-at-every-view}

Le menu **Aperçu** fait pour toute la prévision ce que la Vue d'ensemble fait pour un élément. Appuyez sur **[[key:Peek]]** puis sur une lettre pour voir chaque graphique, chaque tableau, ou chaque graphique à côté de son tableau. Aperçu s'ouvre par-dessus l'application et laisse votre choix de puces tranquille, pour que vous puissiez jeter un œil à tout et revenir à la vue que vous aviez arrangée.

## Repérer une inquiétude {#spot-a-concern}

La plupart des planifications commencent dans le Prévisionniste. Vous lisez les graphiques et vous cherchez les années qui semblent fausses. Sur le foyer Springfield, le [[nav:cf-chart]] fait ressortir une période. Le segment **Santé et médical** grandit régulièrement pendant des décennies, puis est à peu près multiplié par cinq pendant les trois années de 2064 à 2066, quand arrivent les coûts de soins de longue durée du plan.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-chart]]

[[img:working-fast-cash-flow-chart]]

## L'essayer dans Transformations {#test-it-in-transforms}

Une inquiétude comme les années de soins de longue durée est une question de risque, et [[nav:transforms]] est l'endroit où vous la testez. Transformations vous laisse changer le plan sans toucher au plan lui-même. Vous pouvez augmenter le coût des soins, prendre votre retraite deux ans plus tard ou réduire les dépenses de mode de vie. Les résultats apparaissent dans les deux mêmes sections que vous connaissez déjà depuis le Prévisionniste, le **Détail de prévision** et le **Résumé de simulation**, donc rien dans la façon de les lire n'est nouveau.

[[jump:transforms]]

## Échanger les deux sections {#swap-the-two-sections}

Le Détail de prévision et le Résumé de simulation sont l'un au-dessus de l'autre, et celui du dessus a la place. L'en-tête de chaque section a une petite paire de flèches haut et bas à son extrémité droite, juste avant le chevron qui l'ouvre. L'image ci-dessous montre Transformations tel qu'il s'ouvre la première fois, avec chaque section repliée.

[[img:working-fast-transforms-sections|control]]

Quand vous avez fait un changement dans le Détail de prévision et voulez voir ce qu'il fait au résumé de la [[term:monte-carlo]], cliquez la **flèche vers le bas** du Détail de prévision. Il passe sous le Résumé de simulation, qui monte en haut et s'ouvre. Quand vous en avez fini avec le résumé, repoussez-le vers le bas de la même façon et le Détail de prévision revient en haut.

Le clavier fait la même chose. **[[key:SimulationSummary]]** (M pour Monte Carlo) ouvre le Résumé de simulation et le place au-dessus du Détail de prévision. Appuyez encore et le résumé redescend, avec le Détail de prévision ouvert au-dessus. Dans le Prévisionniste, il agit sur la paire du Prévisionniste, dans Transformations sur la paire de Transformations, et dans Région sur celle de Région. Appuyer sur [[key:SimulationSummary]] encore et encore est le moyen le plus rapide de voir un changement comme une image, puis comme une probabilité.

À part les touches Glossaire, Référence et Recherche et [[key:RunSimulation]], les raccourcis cèdent la place à un champ de texte qui a le focus. Sur un Mac, Ctrl avec B, F, P et plusieurs autres lettres déplace le curseur de texte à l'intérieur d'un champ, et une frappe ne devrait jamais vous arracher à quelque chose que vous avez tapé à moitié. Cliquez en dehors du champ, ou appuyez sur Tab jusqu'à ce que le focus le quitte, et les raccourcis marchent de nouveau.

## Lancer depuis le clavier {#run-it-from-the-keyboard}

Après un changement dans Transformations, le côté modifié attend que vous relanciez la simulation. **[[key:RunSimulation]]** la lance. Il appuie sur **Re-simuler** dans le panneau que vous regardez, donc il obéit à chaque règle du bouton et ne fait rien quand il n'y a rien de nouveau à lancer. Il ouvre aussi le Résumé de simulation au-dessus du Détail de prévision, là où le résultat apparaît, et [[key:SimulationSummary]] remet le Détail de prévision en haut quand vous avez fini de le lire.

[[key:RunSimulation]] marche même avec le curseur de texte dans un champ. Il enregistre d'abord ce que le champ contient, exactement comme le ferait le fait de quitter le champ, puis il lance. Cela fait le rythme naturel taper, [[key:RunSimulation]], lire. Le curseur de texte quitte le champ quand le calcul commence, ce qui est le prix pour s'assurer que le calcul utilise le chiffre que vous venez de taper.

Si vous appuyez sur [[key:RunSimulation]] pendant qu'un calcul est encore en cours, la demande attend que ce calcul finisse, puis ne relance que si quelque chose est encore périmé.

## Faire de la place pour la réponse {#make-room-for-the-answer}

L'écran d'un ordinateur portable n'est jamais assez haut pour une prévision, donc Tutilis vous laisse ranger ce que vous n'êtes pas en train de lire. Tout ce que vous rangez revient d'un clic ou d'une touche.

L'application de bureau a trois barres autour de son contenu : le rail de navigation à gauche, l'en-tête en haut et la barre d'outils en bas. **Ctrl-Maj** avec une touche fléchée masque ou montre chacune, et la flèche pointe vers la barre qu'elle déplace. [[key:NavRail]] est le rail, [[key:Header]] est l'en-tête et [[key:ToolsBar]] est la barre d'outils. **[[key:Zoom]]** est le zoom, qui masque les trois d'un coup et les ramène toutes au deuxième appui. Les simples touches Ctrl-flèche sont laissées tranquilles parce que macOS s'en sert pour changer de bureau.

Dans le Prévisionniste, la même idée marche ligne par ligne. Chaque ligne du Détail de prévision, et la ligne des sélecteurs d'identifiant de prévision, d'Année et de détail au-dessus, se termine par un joint avec une petite pastille en son centre. Cliquez le joint et la ligne se replie sur une seule ligne qui porte encore son nom, et cliquez-le de nouveau pour ramener la ligne. Replier une ligne n'éteint pas les graphiques qu'elle contient, donc elle revient exactement comme elle était. Les puces choisissent quelles cartes sont allumées du tout. Alt-clic sur une puce pour ne montrer que sa carte, et Alt-clic de nouveau pour ramener toutes les autres cartes.

**[[key:FoldRows]]** replie chaque ligne de la section où vous êtes jusqu'à son nom, et un nouvel appui les ramène. **[[key:Transforms]]** et **[[key:Region]]** vont au bouton de leur panneau sur le rail de navigation, et [[key:Enter]] là ouvre les en-têtes de ses sections.

### Utilisateur avancé {#power-user}

Quelques-unes de ces commandes sont plus que ce que la plupart des gens veulent, donc elles se tiennent derrière un interrupteur. Activez **Utilisateur avancé** du côté Paramètres de l'application d'Avancé, et trois choses de plus marchent.

- Faites glisser un joint du Détail de prévision pour donner à cette ligne une hauteur fixe. La ligne défile dans la place que vous lui avez donnée, et un bouton de restauration sur le joint la remet.
- Alt-clic sur un joint pour replier toutes les autres lignes et ne garder que celle-là. Alt-clic de nouveau et les autres reviennent.
- Ajoutez Maj à [[key:ForecastDetail]], [[key:SimulationSummary]], [[key:Transforms]] ou [[key:Region]] pour n'ouvrir que cette section et replier le reste. Les mêmes touches de nouveau ramènent les autres. Maj joue le rôle qu'Alt joue pour un clic.

Si une disposition vous échappe, **Restaurer la disposition par défaut** remet chaque repli, joint et barre là où ils ont commencé. Il se trouve du côté Paramètres de l'application d'Avancé, et dans l'application de bureau il est aussi sous **Affichage** dans la barre de menus. Il laisse votre langue, votre thème et vos autres choix tranquilles.

## Saisir les montants vite {#type-amounts-quickly}

Chaque champ de montant de l'application accepte quelques touches qui évitent de compter les zéros. Elles marchent dans l'application de bureau et dans le Centre d'apprentissage de la même façon.

| Touche | Ce qu'elle fait |
| --- | --- |
| `[[key:Thousands]]` | Multiplie la valeur par mille, donc `250[[key:Thousands]]` devient 250,000 |
| `[[key:Millions]]` | Multiplie par un million, donc `1.2[[key:Millions]]` devient 1,200,000 |
| `[[key:Billions]]` | Multiplie par un milliard |
| `[[key:Shift+Thousands]]`, `[[key:Shift+Millions]]`, `[[key:Shift+Billions]]` | Divise par les mêmes quantités, ce qui annule une touche appuyée une fois de trop |
| `[[key:Negate]]` | Inverse le signe de toute la valeur, où que soit le curseur de texte |
| [[key:Up]], [[key:Down]] | Fait monter ou descendre la valeur d'un pas |
| [[key:Shift+Up]], [[key:Shift+Down]] | Augmente ou diminue le chiffre juste à gauche du curseur de texte |

Les touches d'échelle agissent à l'instant où vous les appuyez, donc `2` suivi de `[[key:Millions]]` affiche 2,000,000 avant que vous ayez fini la pensée. Cliquer dans un champ ou y arriver par tabulation sélectionne toute sa valeur, donc vous pouvez taper un nouveau montant directement par-dessus l'ancien.

[[key:Shift+Up]] et [[key:Shift+Down]] sont celles qui valent la peine d'être pratiquées. Avec le curseur de texte juste après le 2 de 250000, un [[key:Shift+Up]] donne 350000 et un [[key:Shift+Down]] donne 150000. C'est ainsi que l'on promène une valeur à travers une plage quand on veut voir où un résultat change.

Vous pouvez essayer tout cela sans plan à vous. Ouvrez [[nav:annuity]] depuis la barre en bas du canevas, cliquez dans le montant d'achat et tapez `300[[key:Thousands]]`.

[[jump:annuity|output__annuity]]

## Toutes les touches au même endroit {#every-key-in-one-place}

**[[key:Shortcuts]]** ouvre la liste complète des raccourcis dans une fenêtre à elle, et un nouvel appui la ferme. La même liste est la section **Raccourcis** de l'**Aide** ([[key:Help]], ou le bouton près du pied du rail de gauche), qui s'ouvre sur **Général** et a **Astuces et légende des symboles** à côté. L'Aide montre une section à la fois, donc choisissez Raccourcis dans la rangée en haut. Chaque touche est écrite avec le modificateur que votre plateforme utilise. Dans le Centre d'apprentissage sous Windows et Linux, lisez Alt à la place de Ctrl dans le tableau ci-dessous.

<details class="lesson-reference" open>
<summary class="lesson-reference-label">Référence — tous les raccourcis</summary>
<div class="lesson-reference-body">

| Touche | Ce qu'elle fait |
| --- | --- |
| [[key:Glossary]] | Glossaire |
| [[key:Reference]] | Référence |
| [[key:Search]] | Chercher dans l'application et aller à un endroit |
| [[key:Help]] | Aide |
| [[key:Peek]] | Aperçu, puis une lettre pour les graphiques, les tableaux ou les paires |
| [[key:BirdsEye]] | Vue d'ensemble |
| [[key:Fx]] | Taux de change |
| [[key:Dossier]] | Dossier, sur le rail de navigation |
| [[key:Assumptions]] | Hypothèses |
| [[key:Risk]] | Risque |
| [[key:ForecastDetail]] | Prévisionniste, sur le rail de navigation |
| [[key:SimulationSummary]] | Résumé de simulation, amené en haut ; de nouveau, redescendu sous le Détail de prévision |
| [[key:Transforms]] | Transformations, sur le rail de navigation |
| [[key:Region]] | Région, sur le rail de navigation |
| [[key:NavRail]] | Montrer ou masquer le rail de navigation |
| [[key:Header]] | Montrer ou masquer l'en-tête |
| [[key:ToolsBar]] | Montrer ou masquer la barre d'outils |
| [[key:Zoom]] | Zoom : masquer les trois barres, ou les ramener |
| [[key:Shortcuts]] | La liste des raccourcis |
| [[key:RunSimulation]] | Lancer la simulation, avec le Résumé de simulation en haut |
| [[key:NextMissing]] | Dans une fiche ouverte, aller au prochain champ qu'il lui manque encore |
| [[key:FoldRows]] | Replier chaque ligne du Détail de prévision et du Résumé de simulation jusqu'à son nom ; de nouveau, les restaurer |

</div>
</details>

La liste dans l'application est dessinée à partir du même tableau qui fait marcher les touches, donc une touche ne peut pas marcher sans y apparaître.

Les leçons ont des touches à elles. Sur une page de leçon, **[[key:Next]]** ouvre la section suivante et **[[key:Previous]]** la précédente, de sorte qu'une leçon entière peut se lire sans la souris. **[[key:Shift+Next]]** et **[[key:Shift+Previous]]** avancent dans les plus petits replis à l'intérieur de la section ouverte. Ces touches marchent dans le texte de la leçon à côté du plan, et elles ne font rien pendant que vous tapez dans un champ.

Pour une visite guidée de chaque zone de l'application, voir [S'orienter dans l'application](/learn/getting_around).
