<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/sheltering_money.fr.md
tutilis-locale: fr translated
-->
# Protéger son argent — taxable, traditional et Roth

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: taxes_benefits.account_character.sheltering
  outline-path: Taxes, benefits, and retirement systems › Tax character of accounts › Sheltering money
  document-id: sheltering_money
  locale: fr
  lifecycle: Initial
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported locale twin from public dossiers/sheltering_money.fr.md
  port-source: dossiers/sheltering_money.fr.md
  source-file: sheltering_money.md
-->

<!--- α <lesson_body> -->
**Où** vous détenez des placements peut compter autant que **ce** que vous détenez. Le même
rendement boursier se comporte différemment dans un compte-titres taxable, un 401(k) traditional,
un Roth 401(k) et un Roth IRA — pour l’impôt aujourd’hui, à la retraite, les distributions
obligatoires, et la facilité d’accès à l’argent.

Cette leçon nomme ces quatre **types de comptes**, compare les règles qui diffèrent vraiment, et
pointe le foyer live **Banks** pour les voir sur un bilan réel. Elle est **centrée sur le
contenu** : la prévision n’invente pas de formulaires IRS pour vous, mais le produit **impose**
bien l’impôt selon le **compartiment fiscal** (tax bucket) de chaque type, force les RMD
traditional quand l’âge et le solde l’exigent, et traite les retraits Roth comme un revenu de
retraite exonéré d’impôt fédéral.

| Compte (ce plan) | Glyphe de compartiment | Rôle en une ligne |
|------------------|------------------------|-------------------|
| **Brokerage** | 🧾 Taxable | Dollars après impôt ; coût de base ; plus-values à la vente |
| **Traditional 401(k)** | 🛡️ Report d’impôt | Entrée avant impôt ; sortie en revenu ordinaire ; **RMD** plus tard |
| **Roth 401(k)** | 💎 Impôt déjà payé | Entrée après impôt (souvent) ; croissance qualifiée exonérée |
| **Roth IRA** | 💎 Impôt déjà payé | Même histoire Roth ; autres plafonds / règles d’accès |

Le plan live à droite est **Banks Baseline** (`banks_baseline`) — Philip et Vivian avec les quatre
comptes (plus **Cash** et une résidence sans hypothèque). Continuité de casting avec les autres
leçons Banks ; l’échelle de patrimoine est HNW, mais les **mécaniques fiscales** sont les mêmes
qu’un plan mass-affluent.

> **À propos des chiffres :** les montants du plan live (et ceux cités ici) doivent paraître
> **similaires** à ce que vous voyez en ouvrant cet échantillon, sans **correspondre au dollar
> près**. Détail de prévision, mises à jour de modèle et correctifs peuvent déplacer les figures.
> Suivez **l’histoire** — compartiments fiscaux, libellés et ordre de grandeur — pas chaque total.

Carte de l’app : [Getting around the app](/learn/getting_around). Lié :
[Forced traditional RMD](/learn/banks_forced_rmd) ·
[Roth conversion in the window](/learn/roth_conversion_window) ·
[Tax-account order vs pro-rata](/learn/springfield_tax_order) ·
[Financial plan glossary](/learn/financial_plan_glossary) (concepts de compartiments fiscaux) ; glyphes produit dans le [Tutilis glossary](/learn/tutilis_glossary).

---

## La question

Devant un foyer avec des comptes **taxable**, **traditional** et **Roth**, puis-je :

1. Nommer comment **cotisations**, **croissance** et **retraits** sont imposés dans chaque
   **compartiment fiscal** (et pour chacun de ces quatre types) ?
2. Pointer les **quatre comptes nommés** sur [[nav:birds-eye]] / [[nav:bs-table]] et lire leurs glyphes de
   compartiment ?
3. Expliquer les **required minimum distributions (RMD)** — à qui elles s’appliquent, quand elles
   commencent, et comment le montant est approximativement déterminé — sans les confondre avec la
   stratégie résiduelle « dépenser ceci d’abord » ?
4. Laisser la **conversion Roth** comme suite volontaire et brève, pas une leçon de politique
   complète ?

---

## Trois compartiments, quatre comptes

Pensez d’abord en **compartiments**, puis en noms de produits :

| Compartiment | Idée produit | Cotisation (typique) | Croissance détenue | Retrait (chemin qualifié / ordinaire) |
|--------------|--------------|----------------------|--------------------|---------------------------------------|
| **Taxable** | Brokerage (et similaires) | Liquidités après impôt | Dividendes / intérêts souvent imposés au fil ; plus-values latentes en attente | **Plus-value** sur (prix de vente − base), pas le solde entier |
| **Report d’impôt (traditional)** | Traditional 401(k), traditional IRA, … | Souvent **avant impôt** (ou déductible) | Non imposée dans le compte | **Revenu ordinaire** sur le montant distribué |
| **Impôt déjà payé (Roth)** | Roth 401(k), Roth IRA, … | **Après impôt** | Non imposée dans le compte | **Exonéré d’impôt fédéral** si règles de distribution qualifiée respectées |

Les comptes **Cash / demand** de ce produit suivent le compartiment taxable pour le traitement
fiscal : pas d’abri retraite, pas de moteur RMD.

Sur Banks vous voyez **à la fois** un **Roth 401(k)** et un **Roth IRA**. Même **histoire fiscale
Roth** dans la prévision (croissance impôts payés, caractère retraite exonéré). **Plomberie réelle**
différente : paie employeur vs IRA individuel, plafonds de cotisation, et plafonds de revenu pour
les cotisations Roth IRA **directes**. Le plan n’applique pas automatiquement chaque plafond IRS —
il **applique** le compartiment fiscal quand l’argent est vendu ou retiré.

Les plans collège **529** sont un autre véhicule style impôts payés, orienté éducation (avec parfois
des chemins limités vers la retraite). Cette histoire est séparée de ces quatre types de comptes.

---

## Les quatre comptes côte à côte

Le tableau ci-dessous est la **comparaison principale** de la leçon — revenez-y pour les différences en un coup
d’œil. Les plafonds annuels de cotisation bougent avec l’inflation et la législation — les lignes
décrivent **comment les limites fonctionnent**, pas un montant figé d’une année civile.

| Axe | **🧾 Brokerage** (taxable) | **🛡️ Traditional 401(k)** | **💎 Roth 401(k)** | **💎 Roth IRA** |
|-----|----------------------------|---------------------------|--------------------|-----------------|
| **Qui l’offre** | Courtier / dépositaire | Plan employeur | Plan employeur (si proposé) | IRA individuel chez un dépositaire |
| **Argent qui entre** | Après impôt | Souvent deferrals électifs avant impôt (+ cotisation employeur possible) | Souvent deferrals après impôt ; le match tombe souvent en traditional (selon le plan) | Après impôt ; les cotisations Roth IRA **directes** peuvent s’éteindre à MAGI élevé |
| **Plafond annuel** | Rien de spécial (vous déposez ce que vous avez) | Plafond **elective deferral** employé partagé avec le Roth 401(k) de la même famille de plan ; catch-up selon l’âge | Même famille de deferral employé que le traditional 401(k) | Plafond **IRA** plus bas (traditional + Roth IRA partagent un plafond) ; séparé des deferrals 401(k) |
| **Croissance dans le compte** | Événements taxables possibles (dividendes, intérêts, plus-values réalisées) | Abri | Abri | Abri |
| **Vente / retrait** | Plus-values au-dessus du **coût de base** | Revenu **traditional retirement** ordinaire | Retirement Roth (exonéré fédéral si qualifié) | Même histoire Roth |
| **RMD (titulaire d’origine)** | Non | **Oui** après l’âge de début RMD (**72 / 73 / 75** selon l’année de naissance sous SECURE 2.0 — tableau ci-dessous) | **Non** de RMD à vie sous les règles SECURE 2.0 actuelles pour Roth employeur | **Non** de RMD à vie pour le titulaire d’origine |
| **Friction d’accès anticipé** | Grande flexibilité (l’impôt s’applique encore) | Règles du plan + possible taxe **additionnelle 10 %** avant 59½ sur beaucoup de distributions traditional | Règles du plan ; *cotisations* vs *gains* Roth diffèrent | Plus portable ; encore tests cotisation vs gains et 5 ans / âge pour gains pleinement exonérés |

**Où les glyphes apparaissent :** [[nav:birds-eye]] et les bilans décorent les noms de comptes avec 🧾 /
🛡️ / 💎 pour lire le compartiment d’un coup d’œil. Même vocabulaire que le
[Financial plan glossary](/learn/financial_plan_glossary) / [Tutilis glossary](/learn/tutilis_glossary).

---

## Règles qui comptent

### Required minimum distributions (RMD)

**Ce qu’elles sont.** Une fois l’âge RMD atteint et un solde de retraite **traditional** (report
d’impôt) en main, l’IRS attend une distribution **minimale** chaque année — que vous ayez besoin
ou non de l’argent pour vivre. Le montant est en général du **revenu ordinaire**. Manquer un RMD
peut déclencher une grosse **excise tax** sur le manquant (ce produit modélise un taux de pénalité
par défaut ; les taux réduits de « correction en temps utile » ne sont pas le sujet ici).

**Quand elles commencent (SECURE 2.0, par année de naissance — approximation du moteur) :**

<table class="lesson-table-aside">
<thead>
<tr><th>Année de naissance</th><th>Âge de début RMD (approx.)</th></tr>
</thead>
<tbody>
<tr><td>1950 ou avant</td><td>72</td></tr>
<tr><td>1951–1959</td><td>73</td></tr>
<tr><td>1960 ou après</td><td>75</td></tr>
</tbody>
</table>

Philip et Vivian sur **Banks Baseline** sont encore en milieu de carrière dans l’année du plan —
ils ne sont **pas** encore en années RMD. Le gros compte traditional reste l’histoire RMD
**future**. Pour voir des **ventes** RMD forcées chaque année avec codes de raison, ouvrez
l’échantillon dédié :
[Forced traditional RMD vs residual tax order](/learn/banks_forced_rmd) (Philip au-delà de l’âge
RMD, gros traditional IRA, résiduel encore réglé pour préférer le cash taxable).

**Comment le montant est déterminé.** Pour une année civile, une règle empirique courante est :

> **solde de fin d’année précédente ÷ diviseur d’espérance de vie** (Uniform Lifetime Table pour
> beaucoup de titulaires)

Le diviseur augmente avec l’âge (la fraction requise du compte croît). Ce produit peut afficher
une **série RMD projetée** et des lignes **Why** de Money Movements du type **RMD · Traditional …**
quand la contrainte est active.

**Lequel de ces quatre types de comptes ?**

<table class="lesson-table-aside">
<thead>
<tr><th>Compte</th><th>RMD titulaire d’origine ?</th></tr>
</thead>
<tbody>
<tr><td>🧾 Brokerage</td><td>Non</td></tr>
<tr><td>🛡️ Traditional 401(k)</td><td><strong>Oui</strong></td></tr>
<tr><td>💎 Roth 401(k)</td><td><strong>Non</strong> (droit actuel / modèle produit)</td></tr>
<tr><td>💎 Roth IRA</td><td>Non</td></tr>
</tbody>
</table>

Comptes hérités et règles de conjoint hors périmètre ici.

### Retraits anticipés (bref)

Avant **59½**, beaucoup de distributions de **dépense** de retraite **traditional** peuvent subir
une taxe additionnelle de base de **10 %** en plus du revenu ordinaire (exceptions ; le produit
modélise le cas de base). Une **conversion Roth** est un **transfert**, pas une dépense — voir la
leçon conversion. Les ventes de brokerage taxable ne sont pas des « pénalités de retrait anticipé » ;
ce sont des événements de plus-values.

### Cotisation et éligibilité (à retenir)

<table class="lesson-table-aside">
<thead>
<tr><th>Référence IRS 2026</th><th>Montant</th></tr>
</thead>
<tbody>
<tr><td>Deferral électif 401(k) / Roth 401(k)</td><td>$24,500</td></tr>
<tr><td>Catch-up (50 ans et +)</td><td>$8,000</td></tr>
<tr><td>Catch-up plus élevé (60–63 ans)</td><td>$11,250</td></tr>
<tr><td>Traditional + Roth IRA (combinés)</td><td>$7,500</td></tr>
<tr><td>Catch-up IRA (50 ans et +)</td><td>$1,100</td></tr>
</tbody>
</table>

- **401(k) traditional vs Roth 401(k) :** même famille de plan, **timing fiscal** différent du
  deferral employé. Un plafond employé partagé (plus catch-up si éligible). Match employeur selon
  le plan.
- **Roth IRA :** des phase-outs de revenu peuvent bloquer les cotisations **directes** même si un
  Roth 401(k) reste disponible au travail. Stratégies « backdoor » et conversion = sujets avancés.
- **Les plafonds bougent.** Le tableau latéral n’est qu’une référence calendaire **2026** IRS —
  confirmez l’avis ou les documents du plan quand vous cotisez.
- **Dans l’app :** réglez les **types** de compte pour le bon **compartiment fiscal** ; les
  **flux** de cotisation se modélisent là où vous les saisissez.

---

## Conversion Roth, en bref

Une **conversion Roth** déplace le solde **traditional** → **Roth**. Vous payez l’impôt sur le
revenu ordinaire du montant converti **maintenant** pour que croissance et retraits qualifiés
ultérieurs puissent être exonérés — et pour éventuellement réduire les **RMD traditional** futurs.

Ce trade est surtout intéressant les **années à faible revenu** (souvent après l’arrêt des
salaires et avant que les RMD forcent de gros retraits traditional). Les planificateurs appellent
cette plage la **fenêtre de conversion**.

Cette leçon **ne** déroule **pas** la politique de conversion, le **Why: Roth conversion** de
Money Movements, ni les pièges MAGI / IRMAA année par année. Utilisez :

| Étape suivante | Leçon |
|----------------|-------|
| Comment le plan **énonce et exécute** une conversion | [Roth conversion in the window](/learn/roth_conversion_window) |
| Falaises MAGI (IRMAA, NIIT, …) | [MAGI cliffs — IRMAA, NIIT, and friends](/learn/magi_cliffs_irmaa_niit) |
| Quand le choix d’année de conversion blesse (leçon complète plus tard) | À venir — pas requis pour cette comparaison |

---

## Où regarder

### Définitionnel

1. [[nav:birds-eye]] → People — Philip et Vivian ; âges de retraite encore avant le début RMD pour
   leurs années de naissance.
2. [[nav:birds-eye]] → Assets (mode Account) — trouvez **Brokerage**, **Traditional 401(k)**,
   **Roth 401(k)**, **Roth IRA** et **Cash**. Lisez l’emoji de compartiment avant chaque nom.
3. **Éditeur de compte (optionnel)** — ouvrez l’aide sur le type pour le tableau de familles de
   plans (401(k), 403(b), IRA, …). Ce popover est le jumeau de référence in-app de ces tableaux.
4. **Bel-Air Tech** sur Brokerage est une histoire de **concentration** pour d’autres leçons Banks
   — ignorez-la pour les mécaniques de compartiment fiscal.

### Projeté

Sélectionnez [[nav:bs-chart]], [[nav:bs-table]], et optionnellement [[nav:taxes]] / [[nav:si-table]]. Préférez
**FID 0 / GMF**.

| Aperçu | Vue | Rôle ici |
|--------|-----|----------|
| [[img:banks-bs-table|preview]] | [[nav:bs-table]] | Repérer chaque compte et les totaux de compartiment sur une année choisie. |
| [[img:banks-bs-chart|preview]] | [[nav:bs-chart]] | Patrimoine multi-compartiments sur l’horizon (maison + comptes). |
| [[img:banks-si-table|preview]] | [[nav:si-table]] | Années de drawdown plus tard : raisons résiduelles par compte / compartiment — **pas** encore de force RMD sur ce baseline. |
| [[img:sheltering-money-tax-statement|preview]] | [[nav:taxes]] | Relevé fédéral / État / foncier. Une année de travail en milieu d’horizon est riche en **revenu d’activité** ; les distributions traditional plus tard apparaissent en caractère revenu ordinaire — le Roth qualifié non. |

Vous ne verrez **pas** de ventes forcées annuelles **RMD · …** sur ce baseline de mi-carrière. C’est
voulu. Passez à [Forced traditional RMD](/learn/banks_forced_rmd) pour la question « la stratégie
résiduelle écrase-t-elle la loi ? ».

Chrome des graphiques : [Close up / zoom / Reveal](/learn/getting_around#chart-chrome).

---

## Essayez ceci

1. Sur [[nav:birds-eye]], listez les quatre comptes et dites à voix haute : **quand imposé à l’entrée**,
   **quand imposé à la sortie**.
2. Ouvrez [[nav:bs-table]] et confirmez que **Traditional 401(k)** est le gros compte en report
   d’impôt qui portera les RMD futurs.
3. Contrastez **Roth 401(k)** et **Roth IRA** comme deux comptes impôts payés avec des règles de
   cotisation réelles différentes — même traitement fiscal de prévision.
4. Ouvrez [Forced traditional RMD](/learn/banks_forced_rmd) et trouvez **RMD · …** sur Money Movements —
   puis revenez ici pour la carte définitionnelle.
5. Optionnel : [Roth conversion in the window](/learn/roth_conversion_window) pour la suite
   politique → impôt → MAGI.

La thèse pédagogique : la **localisation fiscale** change le **caractère** des retraits et
**si** les RMD s’appliquent — pas un solde particulier de l’échantillon Banks.

---

## Où aller ensuite

| Sujet | Leçon |
|-------|-------|
| RMD forcé vs ordre fiscal résiduel | [Forced traditional RMD](/learn/banks_forced_rmd) |
| Politique de conversion et Why Money Movements | [Roth conversion in the window](/learn/roth_conversion_window) |
| Quel compartiment dépenser en premier | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| Falaises MAGI (IRMAA, NIIT, …) | [MAGI cliffs](/learn/magi_cliffs_irmaa_niit) |
| Orientation Banks HNW / concentration | [Meet the Banks household](/learn/banks_baseline) |
| Lexique | [Financial plan glossary](/learn/financial_plan_glossary) · [Tutilis glossary](/learn/tutilis_glossary) |

---

*Pas un conseil fiscal, juridique ou d’investissement. Plafonds de cotisation, âges RMD et
documents de plan changent ; vérifiez les règles en vigueur pour de vraies décisions. Le cadre
éducatif rejoint le disclaimer Learning Center de chaque leçon.*
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
