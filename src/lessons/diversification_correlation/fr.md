<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/diversification_correlation.fr.md
tutilis-locale: fr translated
-->
# Corrélation et diversification

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.diversification.correlation
  outline-path: Foundations › Diversification › Correlation and diversification
  document-id: diversification_correlation
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/diversification_correlation.md
-->

<!--- α <lesson_body> -->
**La plupart du temps, les grandes classes d'actifs évoluent ensemble — pas l'une contre l'autre.** La [[term:correlation|Corrélation]] ([[term:rho|ρ]])
est cette tendance à aller ensemble. La [[term:diversification|Diversification]] n'est pas « détenir davantage de tickers » ; c'est **détenir des risques qui ne
bougent pas toujours comme un seul**. Quand ρ est positif (le cas habituel), un mélange a encore un risque **partagé** dans le
calcul. Faire comme si les positions étaient indépendantes **cache** ce risque.

Le produit a un interrupteur exactement pour cela. **ρ inclus** (le réglage par défaut) compte le mouvement commun ;
**ρ non inclus** l'abandonne et traite les positions comme indépendantes. Cette leçon porte sur ce que cet
interrupteur fait à un plan dont les positions bougent vraiment ensemble.

Le plan affiché à droite est un **échantillon minimal à deux positions** (`two_correlated_assets`) :

| Position | Ce que c'est | Valeur / [[term:basis\|base de coût]] | Rendement supposé ([[term:mu\|μ]]) | Volatilité supposée ([[term:sigma\|σ]]) |
|----------|--------------|----------------------------------------|-------------------------------------|------------------------------------------|
| **US Equity** | Un large panier d'actions américaines ([[term:equity\|actions]]) | $500k / $300k | ~7% | ~16% |
| **US High Yield** | Obligations [[term:high-yield\|à haut rendement]] — dette d'entreprises moins bien notées, qui a tendance à baisser en même temps que les actions | $500k / $300k | ~6% | ~10% |

Positions égales → **$1M** au total. Dans le tableau de corrélation du produit, US Equity × [[term:yield]] élevé
US se situe à **ρ ≈ +0.69** — fortement **positif**. Donc **ρ non inclus** sous-estime le risque de ce plan : sur
le graphique de risque, le ★ du portefeuille glisse en général vers la **gauche**, vers « plus calme ».

[[jump:correlation|output__risk__risk.correlations]]

**Living Expense** est de **$40k/yr** ([[term:cola]] modéré) — le classique **~4%** de [[term:withdrawal-rate|taux de retrait]] initial sur
$1M. Cela ne change pas l'endroit où les positions se placent sur le graphique de risque ; cela crée un [[term:drawdown]], si bien que
le succès [[term:monte-carlo|Monte Carlo]] au niveau Argent est en général **en dessous de 100%** avec ρ inclus — puis **ρ non
inclus** **relève** souvent le succès vers 100%. Cette hausse, c'est ce que « cacher le risque » veut dire dans le langage
de la prévision.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Le saviez-vous ?</p>
<div class="lesson-did-you-know-body">

Le mot « obligation » sur une position ne dit pas si elle diversifie un portefeuille d'actions. Dans le
tableau de corrélation du produit, les obligations américaines à haut rendement évoluent avec les actions américaines à environ **+0.69**, donc elles ont tendance
à baisser quand les actions baissent. Les [[term:treasury-security|titres du Trésor américain]] se situent à environ **−0.31** et ont souvent *monté* quand
les actions baissaient. Cette leçon associe les actions au haut rendement parce que c'est le cas courant, celui où deux
positions ont tendance à baisser ensemble.

</div>
</aside>

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Une position étiquetée « obligation » diversifie-t-elle automatiquement un portefeuille d'actions ?** Voir
   [À quoi ressemblent les données](#what-the-data-looks-like).
2. **Comment la force de la corrélation change-t-elle le caractère nerveux d'un mélange ?** Voir
   [L'énigme](#the-puzzle-positive-correlation).
3. **Comment les volatilités de deux positions se combinent-elles en un seul chiffre de risque de portefeuille ?** Voir
   [Comment deux volatilités se combinent](#how-two-volatilities-combine).
4. **Qu'arrive-t-il au chiffre de risque quand l'interrupteur ρ du produit est coupé ?** Voir
   [Comment deux volatilités se combinent](#how-two-volatilities-combine).
5. **La prévision tient-elle compte des corrélations qui montent dans un krach ?** Voir
   [Honnêteté en crise](#crisis-honesty).

</div>
</aside>

---

## À quoi ressemblent les données {#what-the-data-looks-like}

| Type de paire | ρ typique (ordre de grandeur) | À retenir pour le plan |
|---------------|-------------------------------|------------------------|
| **Actions contre actions** (régions, styles, secteurs) | Souvent **fortement positif** | Le mouvement commun **ajoute** au risque du portefeuille |
| **Actions contre haut rendement** | Souvent **fortement positif** (~0.6–0.8 dans beaucoup de tableaux) | L'étiquette « obligation » ne veut pas dire diversifiant |
| **Actions contre obligations d'État de haute qualité** | Variable selon l'époque — peut être faible ou légèrement **négatif** | Diversifiant utile *quand* ρ est bas |
| [[term:market-crash\|périodes de stress ou de krach]] | Beaucoup de paires **montent vers +1** | Le mouvement commun s'intensifie quand il fait le plus mal |

**À propos de cette dernière ligne.** Une période de stress ou de krach est une chute rare et brutale sur l'ensemble des marchés — 2008 et
mars 2020 sont les exemples récents — qui dure de quelques mois à deux ou trois ans et arrive peut-être une fois par
décennie. Ce n'est pas le cas de tous les jours, et la ligne n'est pas une prédiction. Elle est là parce que ce sont
les moments *pour lesquels* la diversification existe, et ce sont aussi ceux où elle fait le moins : des positions qui
diffèrent d'habitude ont tendance à baisser ensemble. Les prévoir est une affaire de dimensionnement, pas d'inquiétude — **Honnêteté
en crise**, plus bas, dit ce que le produit fait et ne fait pas à ce sujet.

Lisez le tableau dans un seul sens : l'**étiquette** d'une position ne dit pas si elle diversifie. Seul ρ
le dit, et seulement par rapport à ce que vous détenez déjà.

**D'où vient ρ.** Le produit détermine ρ à partir de son tableau intégré de paires de *catégories* (actions
US × haut rendement US, et ainsi de suite), plus les éventuels forçages de l'exécution. Un dossier peut aussi stocker sa propre
`dossier_correlation_matrix`, mais le chemin réel Risque / prévision ne lit pas encore ce champ. Cet
échantillon est câblé pour que les **catégories elles-mêmes** portent un ρ positif.

---

## L'énigme : un ρ positif (corrélation) {#the-puzzle-positive-correlation}

ρ est la corrélation de l'aperçu — à quel point deux positions bougent ensemble, de −1 (sens opposé)
en passant par 0 (sans lien) jusqu'à +1 (au pas). Trois plages comptent :

- ρ proche de **+1** : le mélange est presque aussi nerveux que ses ingrédients.
- ρ **positif mais &lt; 1** (cet échantillon, et la plupart des portefeuilles réels) : un peu de diversification par rapport
  à +1, mais les deux partagent encore du risque — laissez cette part partagée de côté et le portefeuille paraît **trop
  sûr**.
- ρ proche de **0** ou **négatif** : un grand apaisement gratuit — des cas particuliers (par exemple certaines époques actions / Trésor),
  pas le réglage de tous les jours.

---

## Comment deux volatilités se combinent {#how-two-volatilities-combine}

Pas besoin de formule pour l'idée. Pensez au risque du portefeuille comme à **deux tas** :

1. **Le risque propre de chaque position**, réduit selon la part du portefeuille qu'elle représente. La moitié de votre argent dans une
   position à 16% de volatilité n'apporte pas 16 points de risque au mélange — elle en apporte beaucoup moins, parce que
   l'autre moitié fait autre chose.
2. **Un tas de mouvement commun** : du risque en plus qui n'existe que parce que les deux positions ont tendance à baisser les
   mêmes jours. C'est le **seul endroit où ρ apparaît**. Un ρ positif agrandit le tas ; un ρ de zéro
   le fait disparaître ; un ρ négatif le transforme en *soustraction*.

| ρ entre les deux | Tas de mouvement commun | Risque du portefeuille |
|------------------|-------------------------|------------------------|
| **+1** | Aussi grand qu'il peut l'être | La **moyenne** pondérée des deux volatilités — aucune diversification |
| **Positif, &lt; 1** (**typique**) | **Ajoute** encore du risque | Cet échantillon ; la plupart des paires actions / haut rendement |
| **0** | Rien | Les positions sont indépendantes |
| **Négatif** | **Soustrait** | Un bonus de diversification, quand il tient |

**Cet échantillon, en chiffres.** Moitié en US Equity (σ 16%), moitié en US High Yield (σ 10%), ρ = +0.69.
Les tas sont en unités de « [[term:volatility]] au carré », ce qui explique que la dernière étape prenne une racine carrée :

<table class="lesson-table-ledger">
<thead>
<tr><th>Morceau</th><th>Montant</th></tr>
</thead>
<tbody>
<tr><td>Tas de risque propre, les deux positions</td><td>89</td></tr>
<tr><td>Tas de mouvement commun, ρ = +0.69</td><td><strong>+55</strong></td></tr>
<tr><td>Total → σ du portefeuille</td><td>144 → √144 ≈ <strong>12.0%</strong></td></tr>
<tr><td>Mêmes positions, <strong>ρ non inclus</strong></td><td>89 → √89 ≈ <strong>9.4%</strong></td></tr>
</tbody>
</table>

Ces deux chiffres sont l'endroit où se trouve le ★ dans les deux images sous **Où regarder** (à l'arrondi près
de σ 16 et σ 10 — les positions suivent les hypothèses de catégorie du produit, qui portent
quelques décimales de plus). Rien n'a changé dans les positions ; un tas a simplement été laissé de côté.

<details class="lesson-math">
<summary class="lesson-math-label">Pour ceux qui aiment les maths — la formule</summary>
<div class="lesson-math-body">

Les deux tas sont la **variance de portefeuille** à deux actifs, avec les poids \(w\), les volatilités \(\sigma\) et
la corrélation \(\rho\) :

\[
\sigma_p^2 = w_1^2\,\sigma_1^2 + w_2^2\,\sigma_2^2 + 2\,w_1 w_2\,\sigma_1\sigma_2\,\rho_{12}
\]

| Terme | Rôle |
|-------|------|
| \(w_1^2\sigma_1^2\), \(w_2^2\sigma_2^2\) | Les tas de risque propre — la variance de chaque position, mise à l'échelle par le carré de son poids |
| \(2 w_1 w_2 \sigma_1 \sigma_2 \rho_{12}\) | Le tas de mouvement commun — le seul endroit où ρ apparaît |

Avec \(w_1 = w_2 = 0.5\), \(\sigma_1 = 16\), \(\sigma_2 = 10\), \(\rho_{12} = 0.69\) :

\[
\sigma_p^2 = 64 + 25 + 2 \cdot 0.25 \cdot 16 \cdot 10 \cdot 0.69 \approx 89 + 55 = 144
\qquad\Rightarrow\qquad \sigma_p \approx 12.0\%
\]

Poser \(\rho_{12} = 0\) (**ρ non inclus**) retire le dernier terme : \(\sigma_p = \sqrt{89} \approx 9.4\%\). À
\(\rho_{12} = 1\) l'expression est un carré parfait, \((w_1\sigma_1 + w_2\sigma_2)^2\), donc le σ du portefeuille est la
moyenne pondérée, 13% — aucune diversification du tout.

</div>
</details>

### ρ inclus contre ρ non inclus {#included-vs-not-included}

L'interrupteur du produit est libellé **ρ inclus** et démarre **allumé** (vert) : le tas de mouvement commun est
compté. Coupez-le et le libellé devient **ρ non inclus** : la prévision traite les positions
comme indépendantes et le tas est abandonné.

| ρ vrai | Effet de **ρ non inclus** |
|--------|---------------------------|
| **Positif** (cet échantillon) | Retire un tas qui ajoute du risque → **trop calme** ; le ★ glisse souvent vers la **gauche** |
| **Négatif** | Retire un avantage → paraît plus risqué ; le ★ glisse vers la **droite** |

**Règle de planification :** un portefeuille dont les positions bougent ensemble doit garder **ρ inclus** pour un chiffre
de risque honnête.

---

## Honnêteté en crise {#crisis-honesty}

Le ρ réel **varie dans le temps**, et les krachs poussent beaucoup de paires **vers +1** — le mouvement commun s'intensifie
exactement quand il fait le plus mal. Le produit utilise par défaut un tableau de catégories **statique** : un levier
de planification clair, pas un moteur de crise complet. Il ne monte pas tout seul dans une panique, donc un plan qui paraît déjà
tendu avec le ρ d'aujourd'hui est plus tendu qu'il ne se lit dans un tel moment. C'est une limite d'honnêteté du modèle
actuel, dite plutôt que cachée.

<aside class="lesson-saying" data-saying="free-lunch">

La diversification est ce qui se rapproche le plus d'un repas gratuit, et elle se réduit juste quand on la veut le plus. Dans un krach, les corrélations montent vers 1, et le risque que le mélange économisait revient.

</aside>

---

## Où regarder {#where-to-look}

### 1. Chemin du nuage de points {#1-scatter-path}

1. [[nav:risk]] → **Risque actuel**
2. Ouvrez **Risque analytique** (fermé à l'entrée)
3. **Risque vs rendement**
4. Activez **Titres** pour que les deux positions soient des points séparés (et pas seulement le regroupement du compte)

| Position | Où | Pourquoi |
|----------|----|----------|
| **US Equity** | En haut et à droite | μ et σ plus élevés |
| **US High Yield** | Au milieu-gauche des actions | μ / σ plus bas, mais bouge encore avec les actions |
| **★ Portefeuille** | Entre les deux | Mélange 50/50 avec **ρ ≈ +0.69** quand ρ est inclus |

### 2. Basculer ρ (surveiller le ★) {#2-toggle-watch-the}

- **ρ inclus** (allumé, vert) : le tas de mouvement commun est compté — le σ honnête du portefeuille est **plus élevé**.
- **ρ non inclus** (éteint) : le tas est abandonné — le ★ / σ se déplace en général vers la **gauche** (plus rose).

Les deux figures ci-dessous sont le graphique de l'application, redessiné à partir de cet échantillon à la **même largeur**, donc la
seule différence entre elles est l'interrupteur — et le déplacement horizontal du ★ est la seule chose qui
bouge. Sur cet échantillon aujourd'hui, l'étoile passe d'environ **12.0%** de σ à environ **9.4%**, au *même*
rendement de 6.0% : vers la gauche, pas vers le bas.

<div class="lesson-img-stack">

[[img:diversification-risk-rho-included]]

<p class="lesson-img-caption"><strong>ρ inclus</strong> (vert) : mouvement commun honnête — le ★ se trouve au σ de la <strong>covariance complète</strong> — le mélange honnête des deux positions.</p>

[[img:diversification-risk-rho-not-included]]

<p class="lesson-img-caption"><strong>ρ non inclus</strong> (éteint) : volatilités indépendantes seulement — le ★ glisse vers la <strong>gauche</strong>. Mêmes positions, même rendement, risque de portefeuille déclaré plus bas.</p>

</div>

### 3. Transformations → Corrélations (ρ) + % de succès {#3-transforms-correlations-success}

1. Ouvrez [[nav:transforms]].
2. Trouvez l'interrupteur **Corrélations (ρ)**. Il démarre **allumé**, ce qui veut dire que l'exécution *compte*
   le mouvement commun — le même état **ρ inclus** que le graphique de risque. Coupez-le pour exécuter le plan
   comme si les positions étaient indépendantes (**ρ non inclus**), puis **relancez la simulation**.
3. Comparez le succès du **Résumé de simulation** au niveau [[term:medals|Argent]] : **Original** (interrupteur allumé) contre
   **Modifié** (interrupteur éteint).

[[jump:correlation|modifiable__transforms__transforms.modifications__transforms.modifiables__modifiables.global__modifiables.correlations]]

Sur cet échantillon à $1M / $40k, le dernier point ou les deux derniers bougent avec le tirage. Lisez la part de succès que chaque moitié affiche :

| État | Ce qui change |
|------|---------------|
| **ρ inclus** (Original) | Mouvement commun honnête + dépense |
| **ρ non inclus** (Modifié) | Succès plus élevé — la prévision a sous-estimé le risque |

Original et Modifié sont côte à côte pour que les nuages et les parts de succès se comparent nettement :

[[img:diversification-transforms-rho-on-vs-off]]

*L'essentiel : retirer un ρ positif fait paraître le plan plus sûr (succès en hausse, queue de gauche moins sévère) sans changer un dollar de dépense.*

Rien dans le plan n'a changé entre ces deux exécutions — ni les positions, ni la dépense, ni
l'horizon. Seulement le fait que le modèle ait été autorisé à admettre que les deux positions baissent ensemble. C'est pourquoi
c'est le dernier mot de la leçon plutôt qu'une note de bas de page : **le risque que vous cachez ne part pas ; il cesse
d'être compté.**

---

## À retenir {#what-to-take-away}

- Commencez par le **ρ positif** — le réglage de tous les jours pour un portefeuille qui a plus d'un genre de risque.
- **Actions US × haut rendement** est une vraie paire positive ; les titres du Trésor sont une autre histoire.
- **ρ non inclus** avec un ρ vrai &gt; 0 **sous-estime** le risque.
- Les crises peuvent pousser ρ **vers +1**.
- Chemin : Risque → Risque actuel → **Risque analytique** ; **Titres** ; basculez **ρ inclus** (libellé à gauche de l'interrupteur).

### Mots employés dans cette leçon {#words-used-in-this-lesson}

| Mot | En une ligne |
|-----|--------------|
| **Corrélation (ρ)** | À quel point deux positions bougent ensemble, de −1 à +1. Le positif est le cas de tous les jours. [Plus](/glossary/correlation) |
| **Diversification** | Détenir des risques qui ne bougent pas tous comme un seul — pas simplement détenir davantage de choses. [Plus](/glossary/diversification) |
| **Volatilité (σ)** | À quel point les rendements d'une position oscillent d'une année à l'autre. [Plus](/glossary/volatility) |
| **Actions US** | Actions des États-Unis — des parts de propriété dans des entreprises, pas la « valeur nette » de votre logement. [Plus](/glossary/equity) |
| **Haut rendement** | Obligations d'entreprises moins bien notées : plus d'intérêt, et des chutes proches de celles des actions dans une vente massive. [Plus](/glossary/high-yield) |
| **Trésor** | Dette du gouvernement des États-Unis — la position classique qui a souvent monté quand les actions baissaient. [Plus](/glossary/treasury-security) |
| **Période de stress / de krach** | Une chute rare et brutale sur l'ensemble des marchés, quand les corrélations montent vers +1. [Plus](/glossary/market-crash) |
| **ρ inclus / ρ non inclus** | L'interrupteur du produit : compter le mouvement commun, ou faire comme si les positions étaient indépendantes. |

## Où aller ensuite {#where-to-go-next}

| Sujet | Leçon |
|-------|-------|
| D'abord le nuage risque/rendement | [Risque et rendement](/learn/risk_and_return) |
| Liste de mots | [Glossaire du plan financier](/learn/financial_plan_glossary) · [Glossaire Tutilis](/learn/tutilis_glossary) |
| Visite du foyer complet | [À la rencontre du foyer Springfield](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
