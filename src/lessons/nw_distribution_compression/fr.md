<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/nw_distribution_compression.fr.md
tutilis-locale: fr translated
-->
# Quand le nuage a besoin de Reveal

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: using_tutilis.reading.reveal_compression
  outline-path: Using Tutilis › Reading the plan › When the outcome cloud needs Reveal
  document-id: nw_distribution_compression
  locale: fr
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Full French of the current English lesson. Same image ids and anchors.
  port-source: dossiers/nw_distribution_compression.md
-->

<!--- α <lesson_body> -->
**Reveal**, sous **Distribution du patrimoine net**, ne change **pas** le plan ni les tirages [[term:monte-carlo|Monte Carlo]].
Il ne change que l'**échelle horizontale**, pour que quelques fins extrêmes n'écrasent pas la masse des trajectoires
en une pointe illisible près de zéro (ou près de la gauche de l'axe).

Cette leçon utilise l'exemple **Banks Baseline** — un foyer **[[term:hnw]]** aux soldes élevés et à une
position en actions **concentrée et très volatile**. C'est dans ce mélange que **Prévisions clés → Max** (et l'extrême
droite du nuage) se trouve souvent **loin** de la [[term:median]], si bien que l'échelle linéaire fait le plus mal.

[[jump:key-forecasts]]

| Étiquette | Pourquoi |
|-----------|----------|
| **hnw** | Patrimoine absolu élevé ; les trajectoires Max peuvent atteindre des dizaines de millions |
| **reveal** | Commande d'affichage pour lire le nuage — pas un levier du plan |

Si les commandes de graphique sont nouvelles pour vous, parcourez d'abord
[Commandes de graphique — Agrandir, zoom et Reveal](/learn/getting_around#chart-chrome).

Le plan actif à droite est **Banks Baseline** (`banks_baseline`).

---

## Ce que vous allez apprendre {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Leçon du jour</p>
<div class="lesson-plan-body">

À la fin de cette leçon, vous devriez pouvoir répondre à ces questions. Chacune renvoie à la
section qui y répond.

1. **Pourquoi un plan fortuné aux positions volatiles écrase-t-il le graphique de distribution en une pointe ?**
   Voir [Pourquoi le HNW a davantage besoin de Reveal](#why-hnw-needs-reveal-more).
2. **Pourquoi Reveal compte-t-il moins sur un plan aisé intermédiaire comme Springfield ?** Voir
   [Pourquoi le HNW a davantage besoin de Reveal](#why-hnw-needs-reveal-more).
3. **Comment voir, dans les Prévisions clés, que le nuage est écrasé ?** Voir
   [Où regarder](#where-to-look).
4. **Comment lire le nuage principal sans perdre les valeurs extrêmes du calcul ?** Voir
   [Où regarder](#where-to-look).
5. **Qu'est-ce que Reveal laisse inchangé dans le plan et dans le calcul Monte Carlo ?** Voir
   [Ce que Reveal n'est pas](#what-reveal-is-not).
6. **Que manque-t-on si l'on ne lit que le graphique linéaire ?** Voir [Pourquoi c'est important](#why-this-matters).

</div>
</aside>

---

## Pourquoi le HNW a davantage besoin de Reveal {#why-hnw-needs-reveal-more}

Le patrimoine net final sur un long horizon est à peu près « patrimoine × trajectoire composée ». Avec :

- un **patrimoine de départ élevé** (logement + portefeuille multi-compartiments dans l'exemple Banks), et
- des **positions à forte volatilité** (par exemple une position concentrée de style « Bel-Air Tech » à [[term:volatility]] élevée),

une **petite fraction** des trajectoires peut finir **plusieurs ordres de grandeur** au-dessus de la médiane. Sur un axe
horizontal **linéaire**, le graphique doit couvrir de Min à Max, si bien que le **milieu** de la distribution (là où la plupart
des leçons s'intéressent à la réussite à Argent) s'effondre en quelques pixels.

Les exemples **aisés intermédiaires** (Springfield, par exemple) ont encore une queue à droite, mais le Max absolu est plus proche
du gros du nuage — Reveal aide moins souvent, ou moins fortement.

La forme Monte Carlo ci-dessous est illustrative, sur environ 500 trajectoires sous Argent. Lisez la direction plutôt que les chiffres :

| Exemple | PN final médian, ordre de grandeur | Queue d'extrême droite (p. ex. p90 / moyenne vs médiane) |
|---------|------------------------------------|----------------------------------------------------------|
| **Banks Baseline** (HNW) | Millions à un chiffre, côté haut → millions à deux chiffres, côté bas | Moyenne **nettement au-dessus** de la médiane ; p90 **beaucoup** plus grand que la médiane |
| Springfield Baseline | Millions à un chiffre, côté milieu | Asymétrique, mais Max absolu plus petit |
| Exemples de départ maigres | Six chiffres, bas / milieu | Le bruit relatif peut être grand ; l'axe absolu est souvent plus court |

Affirmation de la leçon : **Reveal est le plus utile quand Max (et la queue droite) dominent l'échelle** — fréquent
sur les livres HNW à forte volatilité.

---

## Où regarder {#where-to-look}

1. [[nav:forecaster]] → Résumé de simulation → Distribution — nuage linéaire par défaut.
2. **Prévisions clés** — notez **Min**, **GMF**, **Max** (et les quartiles). Si **Max** est énorme face à
   **GMF** / aux lignes proches de la médiane, attendez-vous à un nuage écrasé.
3. Curseur **Reveal** sous la distribution (le produit peut suggérer « Des valeurs aberrantes écrasent les points ? »).
4. Facultatif : **Agrandir** la distribution pour qu'il soit plus facile de parcourir les points
   ([commandes de graphique](/learn/getting_around#chart-chrome)).

[[jump:reveal]]

| Aperçu | Vue | Rôle ici |
|--------|-----|----------|
| [[img:banks-nw-distribution|preview]] | **Distribution du PN** | Nuage linéaire ; Reveal se trouve sous le graphique. |
| [[img:banks-key-forecasts|preview]] | **Prévisions clés** | Min / GMF / Max — un Max très loin est le signal de Reveal. |

Préférez **[[term:fid-gmf|FID 0 / GMF]]** pour le détail d'une trajectoire après avoir choisi une ligne clé. Les dollars de l'instantané ne sont **pas** des cibles.

---

## À essayer {#try-this}

1. Ouvrez cet exemple Banks. Le Résumé de simulation est déjà rempli (ou **Re-simulez** s'il est périmé).
2. Dans les **Prévisions clés**, comparez **Max** à **GMF** (ou à la moyenne) — ordre de grandeur seulement. En HNW plus
   volatilité, Max est souvent **spectaculairement** plus grand.
3. Jetez un œil à la **Distribution** avec Reveal **tout à gauche** (linéaire). Notez le peu de
   largeur du graphique qu'occupe le gros des points.
4. Glissez **Reveal** vers un style logarithmique. Le **nuage principal** doit s'ouvrir ; les fins extrêmes existent
   toujours — elles ne sont pas retirées du calcul.
5. Facultatif : ouvrez **Springfield Baseline** (ou un autre exemple aisé intermédiaire) dans un second onglet. Même
   commande, besoin de Reveal en général **moins** spectaculaire, parce que le Max absolu est plus proche du peloton.
6. Facultatif : **Agrandissez** la distribution Banks et parcourez les points près de Min / GMF / juste à droite de la
   bande rouge — les indications au [[term:hover]] fonctionnent encore sous Reveal.

Préférez « Reveal ouvre le gros du nuage quand Max possède l'axe » à toute position fixe du curseur.

---

## Ce que Reveal n'est *pas* {#what-reveal-is-not}

| Pas ceci | Plutôt |
|----------|--------|
| Changer la définition de la réussite | [Que signifie la réussite ?](/learn/springfield_success) |
| Changer la politique de vente résiduelle | [Ordre par compte fiscal](/learn/springfield_tax_order) / [Glissement](/learn/springfield_glide) |
| Retirer les trajectoires extrêmes du Monte Carlo | Les extrêmes restent dans l'échantillon ; seule la **vue** change |
| Nécessaire pour chaque leçon | Les nuages aisés intermédiaires sont souvent lisibles en linéaire |

---

## Pourquoi c'est important {#why-this-matters}

| Si vous vous contentez de… | Vous pouvez manquer… |
|----------------------------|----------------------|
| Fixer un nuage HNW linéaire | L'endroit où **la plupart** des trajectoires atterrissent vraiment |
| Traiter Max comme « le » résultat | Max est une histoire de **queue** ; GMF / les quartiles décrivent le gros |
| Ne jamais utiliser Reveal | Le % de réussite et la médaille se calculent encore correctement, mais l'**image** ment par écrasement |

---

## Et ensuite {#where-to-go-next}

| Sujet | Leçon / exemple |
|-------|-----------------|
| Carte des commandes de graphique | [S'orienter — commandes de graphique](/learn/getting_around#chart-chrome) |
| RMD forcé dans la famille Banks | [RMD traditionnel forcé](/learn/banks_forced_rmd) |
| Définition de la réussite | [Que signifie la réussite ?](/learn/springfield_success) |
| Orientation Banks HNW | [Rencontrez le foyer Banks (HNW)](/learn/banks_baseline) |
| Visite du couple à deux revenus, aisé intermédiaire | [À la rencontre du foyer Springfield](/learn/springfield_baseline) |

---

*Quantités illustratives. Affirmation de la leçon : les livres HNW à forte volatilité ont souvent besoin de Reveal, parce que Max et
la queue droite dominent un axe de PN linéaire. Affichage seulement — pas un changement du plan.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
