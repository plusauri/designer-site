<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/mortgage_on_vs_paid_off.fr.md
tutilis-locale: fr translated
-->
# Avec crédit ou sans

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.housing.mortgage_vs_paid_off
  outline-path: Household planning › Housing and debt › Mortgage on vs paid off
  document-id: mortgage_on_vs_paid_off
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: Blessed
  host-hint: MultiDossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/mortgage_on_vs_paid_off.md
-->

<!--- α <lesson_body> -->
Cette leçon est un **contraste** plutôt qu'un nouveau foyer. Elle compare deux exemples calibrés :

| Exemple | Logement | Rôle |
|---------|----------|------|
| **Springfield Baseline** (volet de droite) | Maison **avec** un crédit (principal + intérêts) | Côté crédit de l'histoire |
| **Johnsons Baseline** | Maison **payée** (valeur nette seulement ; pas de drain capital + intérêts) | Contrepoint payé |

Les deux sont des plans de milieu de carrière, à deux revenus, aisés intermédiaires, dans le même État fiscal, visés sur une bande de réussite
**quasi ratée** semblable sous les défauts du produit. C'est voulu : être libre de dette n'est **pas**
un « vous avez déjà gagné » automatique, et un crédit n'est **pas** une faute morale — les deux ont encore des leviers.

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Où la maison et le crédit apparaissent-ils dans le plan ?** Voir
   [Springfield : avec crédit](#springfield-mortgage-on).
2. **Pourquoi la part d'intérêts d'un paiement rétrécit-elle tandis que la part de principal grandit ?** Voir
   [Springfield : avec crédit](#springfield-mortgage-on).
3. **Comment un paiement de crédit apparaît-il au bilan, dans les flux de trésorerie, et dans la réussite sur un
   long plan ?** Voir [Springfield : avec crédit](#springfield-mortgage-on).
4. **Qu'est-ce qui change pour un foyer qui possède une maison semblable sans ce paiement ?** Voir
   [Johnsons : payée](#johnsons-paid-off).
5. **Pourquoi une maison payée n'est-elle pas une victoire automatique ?** Voir
   [Johnsons : payée](#johnsons-paid-off).
6. **La valeur nette d'une maison payée est-elle la même chose que l'argent des comptes ?** Voir
   [Ce qu'il faut retenir](#what-to-take-away).

</div>
</aside>

Nous ne classons pas « toujours rembourser la maison » contre « toujours investir ». Nous apprenons à **voir**
la dette de logement dans le produit et à **comparer** deux bases honnêtes.

---

## Springfield : avec crédit {#springfield-mortgage-on}

Le volet de droite est **Springfield Baseline**.

### Où vivent la maison et la dette {#where-the-house-and-the-debt-live}

1. Ouvrez [[nav:birds-eye]] (en haut de [[nav:dossier]], ou la commande [[nav:birds-eye]] sur la barre d'outils).
2. Choisissez [[nav:path:birds-eye|account]] ou [[nav:path:birds-eye|holding]] — trouvez
   **Evergreen Terrace** (le logement ; actif réel / valeur nette).
3. Passez à [[nav:path:birds-eye|cash-flow]] — cherchez **Home mortgage ([[term:principal]])** et
   **Home mortgage (intérêts)** parmi les sorties. Ces lignes sont le battement pédagogique de cet exemple.

[[jump:home-equity]]

[[jump:principal|output__birds-eye__birds-eye.mode.cash-flows__birds-eye.assets-liabilities__line.birds-eye.debt-principal-interest]]

**[[term:hover|Survolez]]** l'une ou l'autre ligne du crédit. Les deux lignes viennent du même prêt, donc les deux ouvrent la même carte. Le haut de la carte tient les conditions du prêt : le solde restant, le taux, la mensualité et le logement qu'il finance. La section **Valeur du flux** en dessous liste le paiement et ses deux moitiés, chacune avec sa première et sa dernière année. La **courbe miniature** en bas dessine les deux moitiés sur la vie du prêt.

- Le **principal** commence **plus bas** et **monte**. Les années tardives mettent davantage de chaque paiement au remboursement du prêt.
- Les **intérêts** commencent **plus haut** et **descendent**. Les premières années sont lourdes en intérêts, et à mesure que le solde rétrécit, moins d'intérêts sont dus.

[[img:mortgage-principal-hover]]

*La carte Home mortgage. Dans la courbe miniature, les deux lignes se croisent à mi-parcours du prêt : les intérêts tombent vers zéro tandis que le principal monte jusqu'à faire presque tout le paiement.*

C'est à cela que « rembourser un crédit » ressemble en forme de flux de trésorerie : vous commencez sous le **poids des
intérêts**, et vous **finissez** en remboursant le **principal**. Même engagement mensuel dans l'esprit ; le
*mélange* des deux sorties se retourne sur la vie du prêt.

<details class="lesson-math">
<summary class="lesson-math-label">Pour les amateurs de maths — pourquoi les intérêts baissent et le principal monte</summary>
<div class="lesson-math-body">

Un prêt à taux fixe de \(P\) remboursé sur \(n\) mois au taux mensuel \(r\) a un paiement constant

\[
M = P\,\frac{r}{1-(1+r)^{-n}}
\]

Les intérêts de chaque mois sont le taux fois ce qui est encore dû, \(I_k = r\,B_{k-1}\), et le reste du
paiement rembourse le principal. Le solde ne fait que baisser, donc les intérêts ne font que baisser. La part de principal
croît d'un facteur \(1+r\) chaque mois :

\[
P_k = (M - rP)\,(1+r)^{k-1}
\]

Sur un prêt de 30 ans à 6,5 %, les intérêts font environ 86 % du premier paiement, et le principal dépasse
les intérêts pour la première fois vers le mois 233, dans la vingtième année.

</div>
</details>

Avec [[nav:cash-flow]] sélectionné, ces sorties peuvent aussi siéger avec les **Passifs** sur l'image de
patrimoine — une comptabilité peu conventionnelle, utile pour « que devons-nous financer ? » à côté de « que possédons-nous ? ».

### Trajectoire projetée — [[nav:forecaster]] {#projected-path-navforecaster}

Déjà remplie quand vous ouvrez [[nav:forecaster]] (pas de « lancer la prévision » manuel pour commencer).

Dans le **Détail de prévision**, une rangée de **puces** choisit quelles cartes sont affichées. Vous contrôlez la disposition —
allumez les puces des vues qui vous intéressent et éteignez le reste pour que le panneau reste lisible. L'ordre
dans le produit est [[nav:path:bs-chart|bs-table|cf-chart|cf-table]] (puis [[nav:taxes]] /
[[nav:si-chart]] / [[nav:rec]] si vous les activez).

**Pour cette leçon, ne sélectionnez que ces puces** (et laissez Impôts / Ventes et investissements / Réconc. éteints sauf si vous
explorez plus loin) :

- [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]]

Les aperçus ci-dessous correspondent à ces puces à la **taille de référence complète** (structure seulement — les chiffres en direct à
droite peuvent différer) :

| Aperçu | Endroit | Ce qu'il faut remarquer |
|--------|---------|-------------------------|
| [[img:mortgage-bs-chart|preview]] | [[nav:bs-chart]] | Valeur du logement vs prêts ; la valeur nette grandit à mesure que le principal est payé (**Evergreen Terrace** vs **Home mortgage**). |
| [[img:mortgage-bs-table|preview]] | [[nav:bs-table]] | Année choisie : actifs réels, comptes, et la ligne du prêt immobilier. |
| [[img:mortgage-cf-chart|preview]] | [[nav:cf-chart]] | Piles de sorties qui incluent le service du crédit jusqu'au remboursement du prêt. |
| [[img:mortgage-cf-table|preview]] | [[nav:cf-table]] | Année choisie : lignes de principal et d'intérêts, copiables. |

Le **Résumé de simulation** (sous / à côté du Détail — pas des puces du Détail de prévision) tient déjà le calcul
multi-trajectoires :

| Aperçu | Endroit | Ce qu'il faut remarquer |
|--------|---------|-------------------------|
| [[img:mortgage-nw-distribution|preview]] | **Distribution du PN** | Nuage des fins + réussite à Argent. |
| [[img:mortgage-key-forecasts|preview]] | **Prévisions clés** | Min / GMF / Max et métriques liées. |

Parcourez **Année** à travers les années tôt et tard du plan. Préférez **[[term:fid-gmf|FID 0 / GMF]]** sauf si vous visitez
des trajectoires. **Re-simulez** seulement après un changement de Transformation, quand vous voulez un calcul multi-trajectoires frais.

### Cadre honnête pour Springfield {#honest-frame-for-springfield}

Le crédit est un **drain de trésorerie matériel** pendant le travail et souvent dans les années d'horizon de planification
de la retraite — assez grand pour concurrencer le train de vie et l'épargne, pas une ligne négligeable. Ce n'est
pas toute l'histoire — les deux revenus, le portefeuille et les phases de vie dominent encore le drame.

---

## Johnsons : payée {#johnsons-paid-off}

Restez sur cette leçon. Utilisez les puces **Plan actif** au-dessus (ou le lien ci-dessous) pour mettre les Johnsons sur le
[[term:canvas]] de droite — même prose, foyer différent.

**[Montrer les Johnsons (payée) à droite →](#canvas-dossier:johnsons_baseline)**

[Retour à Springfield (crédit) →](#canvas-dossier:springfield_baseline)

Chez les Johnsons vous ne devriez **pas** trouver une série principal/intérêts de crédit immobilier. Vous avez toujours une
maison de valeur au bilan — nommée **Cul-de-Sac Home** — de la valeur nette sans le paiement.

### Pourquoi les Johnsons ne sont pas « Springfield moins le prêt » {#why-johnsons-are-not-springfield-minus-the-loan}

Si nous ne faisions que supprimer le crédit de Springfield et laisser tous les autres chiffres égaux, le payé aurait l'air
d'une victoire gratuite. Ces exemples sont **recalibrés** exprès :

- Les Johnsons portent souvent un **train de vie plus élevé** (surtout à la retraite) et un portefeuille **un peu plus maigre**
  pour que la réussite reste dans une bande quasi ratée comparable.
- Même État / même forme de déclaration, pour que le pivot logement ne soit pas confondu avec une carte fiscale différente.

Donc : comparez les **mécanismes** (capital + intérêts présent vs absent, liquidités laissées pour investir / dépenser), pas
« quelle famille est plus riche ».

---

## À essayer {#try-this}

### Sur Springfield (cette page) {#on-springfield-this-page}

1. [[nav:path:birds-eye|cash-flow]] — trouvez le principal et les intérêts de **Home mortgage** ; survolez chacun
   et comparez les courbes miniatures (intérêts en baisse dans le temps, principal en hausse).
2. [[nav:path:forecaster|cf-table]] — choisissez une année de travail ; notez les lignes du crédit sous les dépenses.
3. Avancez **Année** — regardez principal/intérêts évoluer (ou finir) par rapport au train de vie et aux
   revenus.
4. Jetez un œil au **Résumé de simulation** sous Argent — ordre de grandeur seulement.

[[jump:cash-flow|output]]

### Sur les Johnsons (même leçon, canevas changé) {#on-johnsons-same-lesson-switched-canvas}

1. Changez avec **[Johnsons (payée)](#canvas-dossier:johnsons_baseline)** ou la puce Plan actif.
2. [[nav:path:birds-eye|cash-flow]] — confirmez **l'absence** de série capital + intérêts de crédit immobilier ; voyez encore le train de vie
   et les deux revenus.
3. [[nav:cf-chart]] / [[nav:cf-table]] — des sorties sans cette pile de crédit ; **Cul-de-Sac Home** toujours au bilan
   comme valeur nette.
4. **Résumé de simulation** — la réussite est encore du genre quasi ratée, pas « payé = 100 % automatique ».

### Et si facultatif (Springfield seulement) {#optional-what-if-springfield-only}

Revenez à **[Springfield (crédit)](#canvas-dossier:springfield_baseline)**, puis
[[nav:transforms]] → Modifiables. Vous pouvez explorer le train de vie ou la **Fin de prévision** comme dans les leçons précédentes ;
l'observation vedette de cette leçon est la **présence du crédit**, pas une Transformation obligatoire. Si
vous changez quelque chose, **Re-simulez** pour une comparaison multi-trajectoires complète.

---

## Ce qu'il faut retenir {#what-to-take-away}

| Idée | En clair |
|------|----------|
| **Voir capital + intérêts** | Le mode Flux de trésorerie + [[nav:cf-chart]]/Tableau rendent le principal et les intérêts de premier plan. |
| **Maison ≠ liquidités** | La valeur nette d'une maison payée est une vraie richesse, mais pas la même chose que des comptes liquides. |
| **Le contrepoint est calibré** | Les Johnsons ne sont pas une victoire gratuite ; Springfield n'est pas condamné par le seul prêt. |
| **Un levier à la fois** | Leçons précédentes : calendrier de retraite, dépense de vie. Ici : visibilité de la dette de logement. |

---

## Et ensuite {#where-to-go-next}

| Sujet | Leçon / exemple |
|-------|-----------------|
| Distribution Springfield + retraite | [À la rencontre du foyer Springfield](/learn/springfield_baseline) |
| Phases de dépense de vie | [Plier le plan avec la dépense de vie](/learn/springfield_living_spend) |
| Contrepoint payé seul | [Rencontrez le foyer Johnsons](/learn/johnsons_baseline) |
| Ce que « réussite » veut dire | [Que signifie la réussite ?](/learn/springfield_success) |
| Carte de l'application | [S'orienter dans l'application](/learn/getting_around) |

---

*Les quantités sont illustratives. Ce que la leçon enseigne, c'est le mécanisme et le contraste.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: MultiDossier — Multi-plan switch — primary + alternate dossier ids. -->
