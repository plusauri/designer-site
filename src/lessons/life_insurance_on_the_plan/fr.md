<!--
tutilis-return: lessons/life_insurance_on_the_plan/prose/fr.md
tutilis-locale: fr translated
-->
# L'assurance-vie dans le plan

Alex a deux polices d'assurance vie. L'une est une police temporaire de vingt ans achetée à 57 ans, l'autre est une police vie entière qui constitue une valeur de rachat depuis des années. Ni l'une ni l'autre n'appartient à un compte, et ni l'une ni l'autre n'est un actif réel à la façon d'une maison, mais les deux coûtent de l'argent chaque année, l'une d'elles vaut quelque chose aujourd'hui, et chacune promet un versement à un décès pour lequel le plan a déjà une année. Cette leçon montre où atterrit chacune de ces trois choses.

Ouvrez le [[nav:dossier]]. Sur la Vue d'ensemble, chaque police a une ligne sous **Actifs**, et survoler la ligne fait apparaître la fiche de la police. La ligne de la police vie entière est sa valeur de rachat, qui est du patrimoine net ; la ligne de la police temporaire ne porte aucune valeur, parce qu'une police temporaire ne vaut rien tant qu'elle ne paie pas. Dans l'application de bureau, les mêmes fiches se trouvent sous **Assurance** sur le bilan.

[[jump:birds-eye]]

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la section qui y répond.

1. **En quoi une police temporaire et une police vie entière diffèrent-elles sur le plan ?** Voir [Deux polices, deux formes](#two-policies-two-shapes).
2. **Où apparaît une prime, et quand s'arrête-t-elle ?** Voir [La prime est une dépense](#the-premium-is-an-expense).
3. **La valeur de rachat d'une police compte-t-elle dans le patrimoine net ?** Voir [La valeur de rachat est un actif](#the-cash-value-is-an-asset).
4. **Quand un capital décès est-il versé, qui le reçoit, et est-il imposé ?** Voir [Quand une police paie](#when-a-policy-pays).
5. **Qu'est-ce que ce plan laisse de côté sur l'assurance vie ?** Voir [Ce que ce plan ne montre pas](#what-this-plan-is-not-showing).

</div>
</aside>

## Deux polices, deux formes {#two-policies-two-shapes}

La police temporaire est la plus simple. Elle a un capital décès, une prime et des **années de couverture**. Si Alex meurt pendant ces années, elle paie ; si les années s'épuisent d'abord, elle a coûté ses primes et ne paie rien, ce que font la plupart des polices temporaires.

[[img:life-insurance-card-term]]

La fiche le dit clairement. Sa ligne **Paie** se lit *Expire avant le décès de l'assuré*, parce que la couverture se termine en 2046 et que l'âge de décès d'Alex place le décès après la dernière année du plan.

La police vie entière est permanente. Elle couvre Alex sa vie durant tant que la prime est payée, et elle a une **valeur de rachat** qui croît à un taux de crédit modeste.

[[img:life-insurance-card-whole]]

Sa ligne **Paie** nomme l'année de décès d'Alex, et la fiche porte la valeur de rachat et sa croissance aussi bien que le capital et la prime.

## La prime est une dépense {#the-premium-is-an-expense}

Ouvrez le [[nav:cf-table]] sur n'importe quelle année avant 2046 et les deux primes sont là parmi les dépenses, chacune sous le nom propre de la police.

[[jump:cash-flow|output__forecaster__forecaster.forecast-detail__cf-table]]

[[img:life-insurance-cf-table-2045]]

L'année d'après, seule la prime vie entière reste. La prime d'une police temporaire s'arrête avec sa couverture. La prime d'une police permanente s'arrête lorsque l'assuré meurt, ou plus tôt si ses **années de prime** disent que la police est libérée.

## La valeur de rachat est un actif {#the-cash-value-is-an-asset}

Ouvrez le [[nav:bs-table]]. La valeur de rachat de la police vie entière est listée parmi les actifs réels, sous le nom de la police, et elle compte dans le patrimoine net dès la première année.

[[jump:balance-sheet|output__forecaster__forecaster.forecast-detail__bs-table]]

[[img:life-insurance-bs-table-2027]]

Elle croît à son propre taux, quatre pour cent par an sauf si la police dit autrement, et la prévision ne la vend jamais ni n'emprunte dessus. Une police temporaire n'a pas de ligne ici, parce qu'elle n'a pas de valeur de rachat.

## Quand une police paie {#when-a-policy-pays}

Un capital décès est versé l'année où l'assuré meurt. Qui le reçoit dépend de qui reste. Lorsque l'un de deux propriétaires meurt le premier, le capital est la trésorerie du survivant, et le plan l'investit comme tout autre excédent. Lorsque l'assuré est le dernier propriétaire, le plan se termine à ce décès, et le capital atterrit dans la dernière année du plan, là où une succession le lit.

Alex est ici le seul propriétaire, donc le capital vie entière atterrit en **2058**, la dernière année du plan.

[[img:life-insurance-cf-table-2058]]

C'est la seule entrée de l'année, et aucun impôt n'est établi dessus. Un capital décès d'assurance vie n'est pas un revenu, et le passage fiscal le laisse de côté.

## Essayez ceci {#try-this}

<details class="lesson-desktop-only" open>
<summary class="lesson-desktop-only-label">Application de bureau uniquement</summary>
<div class="lesson-desktop-only-body">

Ouvrez la police temporaire et poussez la fin de sa couverture au-delà de 2059. Sa ligne **Paie** change pour nommer l'année de décès d'Alex, et l'état de la dernière année gagne une seconde ligne de capital.

[[img:life-insurance-policy-term|control]]

*La police temporaire, Alex 20-year term. Les années de couverture sont ce que vous poussez au-delà de 2059.*

Puis ouvrez la police vie entière et réglez **Détenue par** sur *Fiducie irrévocable*. Rien ne change sur l'état des flux de trésorerie ; le capital arrive toujours. Ce qui change, c'est la succession : sur la fiche Distribution du patrimoine net, avec l'impôt sur les successions activé, le produit détenu par la fiducie est laissé hors de la succession imposable et passe aux héritiers non imposé.

[[img:life-insurance-policy-whole|control]]

*La police vie entière. Détenue par est la bascule en bas de l'éditeur.*

</div>
</details>

## Ce que ce plan ne montre pas {#what-this-plan-is-not-showing}

Le plan ne puise jamais dans la valeur de rachat. Un prêt sur police, ou racheter la police pour sa valeur de rachat, sont deux choix réels, et ni l'un ni l'autre n'est encore modélisé. Le capital est constant, donc une police temporaire décroissante est saisie à sa moyenne, et une police sur la vie d'une personne à charge paie l'année du décès de cette personne comme n'importe quelle autre.
