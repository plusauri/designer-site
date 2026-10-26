<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/springfield_success.fr.md
tutilis-locale: fr translated
-->
# Que signifie la réussite ?

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.success_definition
  outline-path: Household planning › Success and guardrails › What does success mean?
  document-id: springfield_success
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/springfield_success.md
-->

<!--- α <lesson_body> -->
Un **taux de réussite** n'a de sens que par la **règle qui étiquette une trajectoire comme une réussite**. Changez la
règle, et le même nuage [[term:monte-carlo|Monte Carlo]] peut paraître plus sûr ou plus inquiétant — sans changer un seul dollar de
dépense ni un seul tirage de rendement.

Cette leçon utilise un **exemple d'enseignement maigre** (Homer seul, à la retraite, maison + actions imposables + Sécurité
sociale + dépenses de retraite) calibré pour que des définitions de réussite différentes **se sentent différentes**. Ce n'est
**pas** le Springfield Baseline complet à deux revenus des leçons précédentes ; le nom de la distribution est une continuité,
pas un foyer identique.

Le plan actif à droite est **Springfield Success Definition** (`springfield_success`).

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Quand le Résumé de simulation dit quelque chose comme « ~70 % de réussite à Argent », quelle règle a décidé quelles
   trajectoires comptaient ?** Voir [Or, Argent et Bronze](#gold-silver-and-bronze).
2. **Où vois-je quelles trajectoires ont réussi et lesquelles ont échoué ?** Voir
   [Où regarder](#where-to-look).
3. **Pourquoi une trajectoire qui finit avec un patrimoine net positif peut-elle encore compter comme un échec ?** Voir
   [Où regarder](#where-to-look).
4. **Où est-ce que je change la définition de la réussite ?** Voir
   [Où changer la définition](#where-to-change-the-definition).
5. **Qu'arrive-t-il au taux de réussite si je relève la barre à Or ou si je l'assouplis à Bronze ?** Voir
   [À essayer](#try-this).
6. **Pourquoi dois-je toujours lire la médaille à côté d'un taux de réussite ?** Voir
   [Pourquoi cela compte partout](#why-it-matters-everywhere).

</div>
</aside>

---

## Or, Argent et Bronze {#gold-silver-and-bronze}

Les médailles du produit correspondent à trois définitions sous [[nav:assumptions]] → Réussite (et le même libellé dans
les Transformations quand vous remplacez les critères de succès) :

[[jump:success-definition]]

| Médaille | Définition (libellés du produit) | Sens clair |
|----------|----------------------------------|------------|
| [[img:std-medal-gold]] **Or** | **Strict** | Ne jamais emprunter et ne jamais avoir de patrimoine net négatif. Barre la plus haute → en général **plus** d'échecs. |
| [[img:std-medal-silver]] **Argent** | **Crises de liquidité autorisées** (défaut) | Peut **emprunter** pour rester à flot s'il reste solvable ; un PN négatif temporaire n'est **pas** autorisé. Le défaut habituel du produit. |
| [[img:std-medal-bronze]] **Bronze** | **Patrimoine net négatif temporaire autorisé** | Finir avec un patrimoine net **positif** compte même si la trajectoire a emprunté ou est passée en négatif en cours de plan. Barre la plus basse → en général **moins** d'échecs. |

Ainsi, le « % de réussite » n'est **pas** un seul vrai nombre. C'est « la fraction des trajectoires simulées qui passent **cette**
porte ».

---

## Où regarder {#where-to-look}

Le plan à droite porte déjà tout ce dont cette leçon a besoin, du foyer jusqu'à un Résumé de simulation rempli.

### Le foyer (définitionnel) {#household-definitional}

1. [[nav:birds-eye]] — **Evergreen Terrace**, [[term:brokerage]] / portefeuille d'actions, dépenses de retraite, [[term:ss]].
2. Ce plan est déjà en [[term:drawdown]] de **style retraite** (maigre exprès, pour que les paliers comptent).

### Puces du Détail de prévision {#forecast-detail-chips}

Sélectionnez [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]] si vous voulez le détail d'une trajectoire (ordre de l'application).
Pour cette leçon, la vedette est le **Résumé de simulation**, pas chaque carte du Détail.

### Résumé de simulation (déjà rempli) {#simulation-summary-already-populated}

| Aperçu | Vue | Rôle dans cette leçon |
|--------|-----|------------------------|
| [[img:sfsuccess-nw-distribution|preview]] | **Distribution du patrimoine net** | Nuage des fins ; % de réussite à la médaille / au seuil actif. Points colorés par quartile ; **bande rouge** = PN final négatif (échec toujours). La trajectoire clé active est **mise en évidence**. |
| [[img:sfsuccess-key-forecasts|preview]] | **Prévisions clés** | Min / GMF / Max / quartiles. Cliquez une ligne pour focaliser cette trajectoire **partout** et surligner sa marque sur la distribution. Les valeurs de l'image type peuvent être floues. |

**Note :** les chiffres de l'instantané ne sont **pas** des cibles. Cet exemple est réglé pour la **sensibilité aux paliers**, pas
pour coller à la bande de réussite de Springfield Baseline.

### Agrandir et Reveal (cette leçon) {#close-up-and-reveal-this-lesson}

Quand **Distribution** et **Prévisions clés** partagent la zone du Résumé — ou quand [[nav:transforms]] montre
les distributions **original vs modifié** après une nouvelle simulation — les cartes peuvent sembler serrées. Utilisez **Agrandir**
(icône d'expansion sur la carte) sur le nuage qui vous intéresse : mêmes points, fenêtre plus grande, indications au **[[term:hover]] qui fonctionnent
encore** (y compris les libellés Succès / Échec / Échec de liquidité). Sous chaque distribution, **Reveal**
ouvre la masse des fins si des valeurs extrêmes écrasent le graphique ; avec deux distributions côte à côte, **Lier
Reveal** (activé par défaut) garde les deux échelles comparables.

[[jump:reveal]]

Carte du chrome de base (aussi le zoom vertical BS/CF et la fusion de comparaison jointe) :
[Commandes de graphique — Agrandir, zoom et Reveal](/learn/getting_around#chart-chrome).

### Prévisions clés ↔ Distribution (à quoi la réussite *ressemble*) {#key-forecasts-distribution-how-success-looks}

Sélectionner une ligne des **Prévisions clés** (**Min**, **Max**, **[[term:gmf]]**, quartiles, …) rend cette trajectoire **active
partout** — le Détail de prévision la suit, et la marque correspondante sur la **Distribution du patrimoine net**
est **mise en évidence**.

[[jump:key-forecasts]]

1. Sélectionnez **Min**. Le minimum est toujours le point **le plus à gauche** de la distribution (**Max** est toujours
   le **plus à droite**). Survolez Min — l'indication étiquette en général la trajectoire comme un **Échec** (sur cet
   exemple maigre, Min est une fin en échec dur). Préférez **Agrandir** sur la distribution si le parcours est
   à l'étroit.
2. Parcourez **beaucoup** de points. Certains réussissent, d'autres échouent — le nuage n'est pas un seul verdict.
3. **La couleur du point suit le quartile** (bandes de fin de faible → forte), pas « réussite vs échec » à elle seule.
4. La **bande rectangulaire rouge** (quand elle est présente) est un **patrimoine net final négatif**. **Quel que soit
   Or / Argent / Bronze**, finir en négatif est un **échec** — chaque marque dans cette bande échoue.
5. **Toutes les marques à droite de la bande rouge ne sont pas des réussites.** Juste à l'extérieur du rouge, vous pouvez survoler
   des trajectoires dont l'indication dit **Échec de liquidité** (ou l'équivalent) : à court de liquidités une année, **emprunt**
   pour rester à flot, puis rebond. Le plan a facturé cet emprunt via le **Coût du capital**
   (à côté de la **Définition du succès** sous [[nav:assumptions]]). Sous **Argent**, ces trajectoires
   rétablies peuvent encore compter comme une réussite ; sous **Or (Strict)** elles ne comptent **pas** — un stress
   de liquidité intermédiaire suffit à échouer même si le PN final a l'air correct.

C'est tout l'enjeu du palier : **Or** est la barre ultra-sûre / conservatrice — **aucun**
type d'échec intermédiaire n'est autorisé. Le % de réussite **baisse**, mais le nombre que vous gardez devrait paraître
**plus** digne de confiance, parce que la porte est plus stricte.

---

## Où changer la définition {#where-to-change-the-definition}

La définition de la réussite peut se changer à deux endroits, Hypothèses et Transformations. Les aperçus ci-dessous sont en pleine largeur, parce que les cellules de tableau rétrécissent trop le chrome pour lire les trois choix
de réussite.

### La définition de la réussite {#the-definition-of-success}

[[img:std-assumptions-success]]

**Définition du succès** durable sur le dossier. Choisissez **Strict**, **Crises de liquidité autorisées**, ou
**Patrimoine net négatif temporaire autorisé**. Le **Coût du capital** est sur le même panneau — le taux
annuel facturé quand le plan doit emprunter pour couvrir un manque.

[[jump:cost-of-capital|input__assumptions__assumptions-success__control.cost-of-capital]]

### Transformations → Modifiables → Critères de succès {#transforms-modifiables-success-criteria}

[[img:std-transforms-success-criteria]]

Un remplacement de type « et si », sans traiter la modification du dossier comme permanente. Sélectionnez la ligne **Critères de succès**
dans Modifiables ; le panneau **Modification — Critères de succès** montre les mêmes trois choix.
Puis **Re-simulez** pour original vs modifié (Distribution du PN côte à côte).

Le Learning Center peut limiter l'édition du dossier ; si Hypothèses est disponible, utilisez-le. Sinon préférez
les Transformations quand la ligne Critères de succès est listée.

---

## À essayer {#try-this}

1. Ouvrez [[nav:forecaster]] → Résumé de simulation. Notez la réussite sous la médaille **actuelle** (cet exemple
   commence à **Argent** / crises de liquidité autorisées). Ordre de grandeur seulement.
2. Ouvrez **Prévisions clés** et **Distribution** côte à côte (ou basculez de l'une à l'autre). Si le nuage
   est difficile à lire, **Agrandissez** la distribution (ou utilisez **Reveal** en dessous) — les indications au survol fonctionnent
   encore en grand.
3. Cliquez **Min** — le minimum est toujours le point **le plus à gauche** de la distribution (**Max** est toujours
   le **plus à droite**). Confirmez que cette marque de gauche se surligne. Survolez-la : l'indication doit montrer **Échec**
   (fin en échec dur).
4. Parcourez beaucoup d'autres points. Surveillez les indications **Succès** vs **Échec** vs **Échec de liquidité**. Notez
   que **couleur = quartile**, et que la **bande rouge** (s'il y en a une) est faite d'**échecs à PN négatif**.
5. Survolez plusieurs marques **juste à droite de la bande rouge**. Trouvez au moins un **Échec de liquidité** —
   emprunt en cours de plan, rétablissement à la fin. C'est le type de trajectoire qu'Or va reclasser.
6. Ouvrez [[nav:assumptions]] → Réussite (ou [[nav:transforms]] Critères de succès). Jetez un œil au **Coût du
   capital** à côté de la définition — c'est le taux facturé quand le plan finance un manque.
7. Passez à **Or (Strict)**. **Re-simulez**. Attendez-vous à une réussite **en baisse** (plus difficile à passer) — les trajectoires
   de liquidité rétablies ne comptent plus. Sur cet exemple maigre, la chute est spectaculaire : mêmes trajectoires, mêmes
   dollars, **porte plus stricte seulement**. Avec les distributions **original vs modifié** côte à côte, Agrandissez
   l'un ou l'autre nuage si besoin ; **Lier Reveal** garde les deux lisibles sur une seule échelle.

   [[img:std-success-silver-vs-gold|preview]]

   *Paire illustrative (pas une cible) : à gauche, **Argent** / crises de liquidité autorisées ; à droite, le
   même nuage re-noté sous **Or** / Strict. Lisez la **médaille** à côté du taux.*

8. Facultatif : après Or, reparcourez les points juste à droite du rouge — les fins sont encore positives, les indications plus souvent
   **pas** Succès sous Strict.
9. Passez à **Bronze** (PN négatif temporaire autorisé). Re-simulez si besoin. Attendez-vous à une réussite
   **en hausse** par rapport à Or — seule la porte du PN **final** compte.
10. Revenez à **Argent**. C'est la conversation par défaut du produit pour la plupart des autres leçons.
11. Facultatif : avec une ligne clé sous stress active, ouvrez [[nav:cf-chart]] / [[nav:bs-chart]] pour ce [[term:fid]] afin de **voir**
    l'année où la trajectoire a emprunté — pas seulement le pourcentage.

Préférez : « définition plus stricte → taux de réussite plus bas sur le même nuage » plutôt que de figer un pourcentage.
L'arbitrage est la **confiance** : Or est plus difficile à passer et plus conservateur.

---

## Pourquoi cela compte partout {#why-it-matters-everywhere}

Les leçons Springfield précédentes disaient « quasi-échec sous Argent » et « ne traitez pas un seul % comme une écriture sainte »,
parce que la définition de la réussite, à elle seule, peut déplacer le taux :

| Si vous changez les critères de succès… | Le % de réussite peut beaucoup bouger tandis que… |
|------------------------------------------|-----------------------------------------------------|
| **La définition seulement** | Dépenses, rendements et foyer restent fixes. Vous ne changez que la façon dont nous **classons** les prévisions qui rencontrent des difficultés et peuvent encore s'en sortir (emprunt en cours de plan, rétablissement, etc.) — pas les trajectoires elles-mêmes. |
| **La dépense ou la retraite** (autres leçons) | La définition reste fixe (en général Argent) |

Lisez toujours la **médaille / la définition** à côté du taux.

---

## Et ensuite {#where-to-go-next}

| Sujet | Leçon / exemple |
|-------|-----------------|
| Foyer complet à deux revenus | [À la rencontre du foyer Springfield](/learn/springfield_baseline) |
| Levier de dépense de vie | [Plier le plan avec la dépense de vie](/learn/springfield_living_spend) |
| Avec crédit ou sans | [Avec crédit ou sans](/learn/mortgage_on_vs_paid_off) |
| Demande de Sécurité sociale × longévité | [Demander tôt ou vivre longtemps](/learn/springfield_claim_longevity) |
| Ordre par compte fiscal vs pro rata | [Ordre par compte fiscal vs pro rata](/learn/springfield_tax_order) |
| Carte de l'application | [S'orienter dans l'application](/learn/getting_around) |

---

*Les quantités sont illustratives. Ce que la leçon enseigne, c'est que la règle de réussite façonne le taux.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
