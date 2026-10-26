<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/risk_and_return.fr.md
tutilis-locale: fr translated
-->
# Risque et rendement

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: foundations.risk_return.tradeoff
  outline-path: Foundations › Risk and return › Risk and return tradeoff
  document-id: risk_and_return
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/risk_and_return.md
-->

<!--- α <lesson_body> -->
Un rendement sans risque est incomplet. Un risque sans rendement n'est que du bruit. Ce produit met **les deux** sur la
**même image**, pour que vous voyiez l'arbitrage que vous supposez avant de construire un plan autour.

Le plan affiché à droite est un **échantillon pédagogique centré sur les titres** (`holdings_portfolio`) : trois
positions distinctes, avec un rendement attendu ([[term:mu|μ]]) et une [[term:volatility]] ([[term:sigma|σ]]) différents, pour que le nuage se
lise d'un coup d'œil, plus **un logement et deux flux de trésorerie** — le moins d'éléments qui donne à chacune des
trois puces au-dessus du graphique quelque chose à montrer. Ce n'est toujours pas un foyer complet ; tout ce qu'il contient est
là pour rendre un contrôle lisible.

---

## Comment lire le nuage de points {#how-to-read-the-scatter}

Chemin exact (le graphique est dans un **repliable fermé** à l'entrée) :

1. [[nav:risk]] (section principale)
2. **Risque actuel** — la gauche des deux vues Risque
3. Ouvrez **Risque analytique** — dépliez ce repliable, sinon vous ne verrez pas les graphiques
4. Nuage **Risque vs rendement** à l'intérieur de Risque analytique

**L'autre vue, Sensibilités**, n'est pas un détour que vous sauteriez par accident. Risque actuel demande
*à quel point ce que je détiens est cahoteux, maintenant* — un instantané, sans temps dedans. Sensibilités pose une
autre question : *quelle donnée unique déplace le plus le résultat* — elle pousse une hypothèse à la fois
et classe ce que le plan a ressenti. Même section, autre question ; aucune leçon ne la couvre encore.

| Axe / marque | Sens |
|--------------|------|
| **Horizontal** | Risque — en général **σ** (volatilité de l'hypothèse) |
| **Vertical** | Rendement — en général **μ** (rendement moyen attendu / supposé) |
| **Chaque point** | Un titre (ou un élément comparable) à son propre (σ, μ) |
| **Portefeuille ★** | Le **mélange** — là où l'ensemble du livre se tient en un seul point |

**Le coin que tout le monde veut** est un rendement élevé et un risque faible — **en haut et à gauche**. Les marchés le
donnent rarement gratis. La plupart des livres réels sont sur un arbitrage : plus de rendement supposé vient en général avec
plus de rebond supposé.

**Honnêteté :** μ et σ sont des **hypothèses** (souvent des valeurs par défaut documentées que vous pouvez forcer), pas des promesses
et pas une prévision du chemin de l'année prochaine. Le graphique enseigne l'**arbitrage**, pas une prédiction.

À l'entrée, les deux sections sont **repliées** — ouvrez **Risque analytique**, sinon le nuage n'apparaît jamais :

<div class="lesson-img-stack">

[[img:risk-return-collapsibles-closed]]

<p class="lesson-img-caption"><strong>Fermé à l'entrée</strong> — les puces sont le long du haut, et Risque analytique et Risque tabulaire restent repliés jusqu'à ce que vous les ouvriez.</p>

[[img:risk-return-scatter]]

<p class="lesson-img-caption"><strong>Risque analytique, premier graphique</strong> — Risque vs rendement : chaque élément affiché à son propre (σ, μ), avec le ★ du portefeuille au mélange des titres et, si Actifs réels est allumé, du logement.</p>

[[img:risk-return-band]]

<p class="lesson-img-caption"><strong>Risque analytique, second graphique</strong> — Plage du portefeuille dans le temps : le chemin de la [[term:median]], une ligne moyenne en tirets qui se tient au-dessus, et un cône de résultats qui continue de s'élargir à mesure que vous regardez plus loin.</p>

</div>

Deux choses dans cette seconde image méritent une phrase, parce que les deux ont l'air d'erreurs et qu'aucune
ne l'est. La ligne moyenne en tirets se tient **au-dessus** du chemin du milieu, et elle y reste — ce n'est pas le
graphique qui compte deux fois. Quelques très bons résultats tirent une moyenne vers le haut d'une façon dont ils ne peuvent pas tirer
un résultat du milieu vers le haut, et plus les titres rebondissent, plus cet écart s'élargit. Le chemin du milieu est
celui contre lequel planifier. Et le cône continue de s'élargir pour toujours au lieu de se calmer, parce que
l'incertitude de chaque année s'empile sur la précédente ; le plan ne devient pas plus risqué, la question
atteint simplement plus loin devant.

<details class="lesson-math">
<summary class="lesson-math-label">Pour ceux qui aiment les maths — pourquoi la moyenne se tient haut, et pourquoi le cône s'élargit</summary>
<div class="lesson-math-body">

**L'écart a un nom.** La [[term:compounding|capitalisation composée]] multiplie les rendements au lieu de les additionner, donc ce à quoi un solde
croît vraiment sur de nombreuses années est la [[term:geometric-mean]], et elle est toujours au niveau ou en dessous
de la moyenne arithmétique des mêmes rendements. Le manque grandit avec σ : environ la moitié de la variance,
si bien qu'un livre à σ 16% abandonne de l'ordre de 1.3 point par an face à sa propre moyenne. On appelle
cela d'habitude le [[term:volatility-drag|frein de volatilité]], et c'est pourquoi le chemin polaire du produit est celui de la
[[term:geometric-mean]] plutôt que celui de la [[term:amf|prévision à la moyenne arithmétique]].

**Le cône s'élargit en √t.** Si le rendement de chaque année est un tirage indépendant, les variances s'ajoutent au fil
des années tandis que le rendement attendu ne s'accumule que linéairement — donc l'écart grandit avec la *racine
carrée* de l'horizon, σ√t, et non avec l'horizon lui-même. Quatre fois plus long est deux fois plus large, pas
quatre fois. C'est la forme que vous regardez, et c'est pourquoi un long horizon élargit le cône
sans vouloir dire que les titres ont changé.

Les deux nombres viennent du même σ sur l'axe horizontal du nuage ci-dessus — un contrôle, deux
images.

</div>
</details>

---

## Parcours guidé (3 à 5 minutes) {#guided-walk-35-minutes}

1. Suivez le chemin ci-dessus : [[nav:risk]] → Risque actuel → ouvrez Risque analytique → Risque vs rendement.
2. **Cochez la puce Titres** pour que chaque position soit un point séparé (le défaut peut ne montrer que les comptes).
3. **Trouvez le plus calme** des titres (à gauche, σ plus bas) et le **plus nerveux** (à droite, σ plus haut). Sur cet
   échantillon, c'est à peu près : positions plus calmes à gauche / plus bas ; μ plus haut **et** σ plus haut **en haut et à
   droite** — plus de rendement attendu, plus de risque.
4. **Trouvez l'étoile du portefeuille** — un **mélange conscient des poids**, pas simplement le nom le plus sauvage.
5. Basculez **Comparer aux catégories** si c'est disponible — des points de référence par catégorie aident à répondre « ce
   titre est-il agressif par rapport à toute une classe d'actifs ? »
6. Basculez **Taille par valeur** si c'est disponible — les points plus gros sont des poids en dollars plus gros ; l'étoile est
   tirée par ce que vous possédez vraiment, pas par chaque ticker à égalité.
7. Ouvrez **Risque tabulaire** (l'autre repliable de Risque actuel) pour le tableau **Risque et rendement par élément**
   — les mêmes données, triables. Triez par σ, puis par μ.
8. **Parcourez les trois puces** — la section suivante dit ce que chacune met sur le graphique.

### Ce que les trois puces mettent sur le graphique {#what-the-three-chips-put-on-the-chart}

Cinq puces se tiennent au-dessus du nuage. Deux d'entre elles changent la façon dont les points sont *dessinés* — **Comparer aux
catégories** et **Taille par valeur**, toutes deux vues dans le parcours ci-dessus. Les trois autres changent *ce qu'il y a
sur le graphique* : **Actifs réels**, **Flux de trésorerie**, **Titres**. Ce ne sont pas trois vues de la
même chose — chacune ajoute un *genre* d'élément différent, dessiné dans sa propre couleur, et seules certaines
comptent pour le ★.

| Puce | Ajoute | Couleur |
|------|--------|---------|
| **Actifs réels** | le logement | brun |
| **Titres** | les trois positions séparément (au lieu d'un seul point de compte) | bleu |
| **Flux de trésorerie** | salaire (entrée) et dépense de vie (sortie) | vert / rose |

[[img:risk-return-all-chips]]

*Les trois puces allumées. Tous les types d'éléments à la fois : le logement brun, les trois titres bleus étalés de
l'obligation à l'action concentrée, et — tout à gauche, là où les hypothèses de croissance sont calmes — le salaire vert et
la dépense de vie rose.*

**Actifs réels déplace le ★.** L'étoile est le mélange de vos titres et, quand Actifs réels est allumé,
de vos actifs réels aussi. Le logement attend moins de rendement que les fonds d'actions et ne monte ni ne
baisse avec eux, donc l'allumer tire l'étoile vers le bas et vers la gauche. Allumer Titres ne fait que
séparer le point du compte en ses positions. Le mélange est le même argent dans les deux cas, donc l'étoile
reste où elle est.

**Les flux de trésorerie sont sur le graphique mais jamais dans le mélange.** Le μ et le σ d'un flux sont son hypothèse de *croissance* :
à quelle vitesse le salaire monte et à quelle vitesse la dépense s'inflate. C'est une quantité
différente du rendement attendu d'une action, même si les deux atterrissent sur ces axes. Lisez les points de flux
comme le degré d'incertitude de la croissance de chaque courant. Ils ne disent pas ce que quoi que ce soit rapporte. Un courant de versements
est aussi dépensé à mesure qu'il arrive, donc ce n'est pas un solde que l'on peut moyenner avec vos placements.
Ce que Flux de trésorerie ajoute sous le graphique est une ligne : combien de fois vos actifs et vos revenus,
comptés en valeur actuelle, couvrent votre dépense prévue. C'est le même équilibre que Bird's Eye pèse
quand sa vue inclut les flux de trésorerie.

**Le cône en dessous suit la même puce.** Sous le nuage, **Plage du portefeuille dans le temps** projette
le portefeuille étoilé vers l'avant comme un cône qui s'élargit. Avec Actifs réels éteint, le cône est vos titres
seuls. Avec la puce allumée, le logement se joint et tout ce que vous possédez est projeté. Ce sont deux réponses honnêtes
à deux questions différentes : *quel est le risque de ce que j'investis*, et *quel est le risque de ce que je possède*. La puce
choisit à quelle question les deux graphiques répondent.

### Titres activés {#holdings-on}

[[img:risk-return-holdings-on]]

*Puce Titres allumée : chaque titre est son propre point (cet échantillon : ce qui ressemble à une obligation à gauche, actions larges au milieu-droite, action concentrée tout à droite). Le ★ est le mélange du portefeuille.*

**Ce que ce graphique n'est pas :** ce n'est pas une liste de ventes. Un point loin à droite n'est pas une erreur à
corriger, et rien ici ne classe vos titres en garder ou vendre. Deux raisons, et chacune seule
suffit. D'abord, les axes sont des **hypothèses** — un μ et un σ de long terme que vous, ou une valeur par défaut documentée, avez fournis
— donc un point ne **bouge pas** parce que le marché a baissé le trimestre dernier, et un graphique qui ignore les prix
récents ne peut pas vous dire d'agir sur eux. Ensuite, le risque n'est pas un dommage : un titre à σ élevé fait
son travail si vous êtes payé pour le rebond et si vous pouvez rester assis pendant qu'il dure. Ce à quoi l'image *sert*, c'est
remarquer que vous possédez quelque chose dont vous n'aviez pas enregistré le risque supposé — ce qui est une question à
aller poser, pas une réponse.

### Taille par valeur {#size-by-value}

[[img:risk-return-size-by-value]]

*Taille par valeur : le poids en dollars apparaît comme la taille du point — le ★ est tiré par ce que vous possédez vraiment, pas par un poids égal sur chaque ticker.*

### Risque tabulaire {#tabular-risk}

[[img:risk-return-tabular]]

*Ouvrez **Risque tabulaire** pour deux cartes côte à côte :*

1. **Risque et rendement par élément** — le `N(μ, σ)` et la valeur de chaque titre (triable ; le graphique pour voir,
   le tableau pour classer).
2. **Corrélations d'actifs modélisées** — le même format de paires que Hypothèses → Corrélations d'actifs
   modélisées, filtré aux **catégories que ce plan utilise vraiment**. Quand cette liste est longue, la
   carte épouse la hauteur du tableau des éléments et défile avec un fondu.

[[jump:correlation|output__risk__risk.correlations]]

### Le nommer, sans approfondir : ρ inclus {#name-dont-deep-dive-included}

À côté de la lecture du ★ du portefeuille, vous verrez **[[term:rho|ρ]] inclus** (défaut, interrupteur allumé) ou **ρ non
inclus** quand il est coupé. Cela porte sur la façon dont les titres bougent **ensemble**, pas sur le σ propre d'un titre.
Traitement complet : [Corrélation et diversification](/learn/diversification_correlation). Ici : sachez que cela
existe — et que couper ρ est ce que beaucoup d'outils font en **ignorant** entièrement la [[term:correlation]] entre titres.

Pour un ρ d'actions **positif** typique, ignorer ces termes croisés **sous-estime** le risque du portefeuille : σₚ
tombe vers √(Σ wᵢ²σᵢ²) et le ★ **glisse** souvent **vers la gauche**. Un ρ négatif travaille dans l'autre sens
(abandonner la [[term:diversification]] peut pousser le risque vers le haut). La carte de corrélation ci-dessus, ce sont les termes croisés que
l'interrupteur inclut ou met à zéro.

**Pourquoi le ★ se tient à gauche de ses ingrédients.** C'est le seul morceau d'arithmétique qui vaut d'être emporté
hors de cette leçon. Chaque fois que les titres sont moins que parfaitement corrélés — tout ρ **en dessous de 1** — le σ du portefeuille
arrive **en dessous de la moyenne pondérée par la valeur** des σ individuels, tandis que le μ du portefeuille est exactement
la moyenne pondérée par la valeur des μ individuels. Le rendement s'additionne ; le risque non. Cet écart est tout le
contenu mécanique de la [[term:diversification]], et vous pouvez le voir sur le graphique : le ★ se tient à
**gauche** de l'endroit où un mélange en ligne droite des points le mettrait, et plus les ρ sont bas, plus il se tient à gauche.
Mettez chaque ρ à 1 et l'écart se ferme — le ★ atterrit sur la moyenne pondérée et le repas
gratuit a disparu.

<aside class="lesson-saying" data-saying="free-lunch" data-saying-exception>

Le ★ se tient à gauche de ses ingrédients parce que le rendement s'additionne et le risque non. Le mélange garde le rendement moyen et paie pour cela moins que le risque moyen.

</aside>

C'est de l'arithmétique de variance, pas un conseil : cela dit ce que le mélange **fait**, et ne dit rien sur
les titres que quiconque devrait détenir.

---

## À quoi ressemblent le « bon » et le « toxique » {#what-good-and-toxic-look-like}

| Région (ordre de grandeur) | À lire comme |
|----------------------------|--------------|
| **En haut à gauche** | Hypothèses attirantes — μ élevé, σ bas. Examinez si les hypothèses sont honnêtes. |
| **En bas à droite** | Hypothèses douloureuses — μ bas, σ élevé. « Pourquoi détenir ceci à ces données ? » |
| **Le long d'une frontière** | Espace d'arbitrage normal ; le ★ du portefeuille doit avoir un sens vu les poids. |

Si un seul titre concentré se tient loin à droite et qu'il est gros en valeur, l'étoile et les bandes
[[term:monte-carlo|Monte Carlo]] du plan sentiront cette concentration même quand le reste du livre a l'air calme.

---

## À retenir {#what-to-take-away}

- Le risque et le rendement appartiennent à **une** image pour le livre que vous détenez vraiment.
- **Chemin :** Risque → Risque actuel → **ouvrez Risque analytique** ; cochez **Titres**.
- L'**étoile** est le portefeuille ; les points sont les ingrédients — et elle se tient à **gauche** de leur moyenne
  pondérée chaque fois que ρ < 1. Mélanger fait la moyenne du rendement et *moins* que la moyenne du risque ; cet écart
  est ce qu'est la diversification.
- Les hypothèses pilotent le tracé — changez μ/σ (ou les catégories de croissance) et l'image bouge. Ce n'est
  **pas** une liste de ventes, et cela ne réagit pas aux prix du trimestre dernier.
- Le ★ est toujours le mélange de vos **titres** — les puces ajoutent des points, elles ne le déplacent pas. Le **cône**
  sous le nuage est le graphique qui suit la puce Actifs réels.
- La corrélation est un **second** axe d'honnêteté ; traitez-la ensuite.

[[jump:sigma|output]]

## Où aller ensuite {#where-to-go-next}

| Sujet | Leçon |
|-------|-------|
| Honnêteté de la corrélation / de ρ | [Corrélation et diversification](/learn/diversification_correlation) |
| La capitalisation sans le nuage | [Croissance exponentielle](/learn/exponential_growth) |
| Visite du foyer complet | [À la rencontre du foyer Springfield](/learn/springfield_baseline) |
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
