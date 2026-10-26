<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/guardrail_for_me.de.md
tutilis-locale: de translated
-->
# Guardrails für mich

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.guardrail_for_me
  outline-path: Household planning › Success and guardrails › Guardrail for me
  document-id: guardrail_for_me
  locale: de
  lifecycle: TranslationComplete
  status: Shipped
  lesson-status: Blessed
  host-hint: Dossier
  intent: Full German of the current English lesson. Same image ids and anchors.
  port-source: dossiers/guardrail_for_me.md
-->

<!--- α <lesson_body> -->
Ruheständler und Forscher haben Jahrzehnte mit einer trügerisch einfachen Frage verbracht: *wie viel kann ich
aus einem Portfolio ausgeben, ohne dass das Geld ausgeht?* Keine einzelne Antwort passt zu jedem Haushalt, aber eine Handvoll
bekannter Ansätze hat geprägt, wie Menschen über „sicheres“ Ausgeben sprechen. Diese Lektion lädt Sie ein,
diesen Ansätzen **an Ihrem eigenen Plan** zu begegnen — nicht als abstrakte Prozentsätze, sondern als Pfade nebeneinander,
die Sie mit dem Lebensstil vergleichen können, den Sie modelliert haben.

### Mit Dank {#with-gratitude}

Die sechs Studien in **Guardrails** ruhen auf der harten Arbeit anderer Menschen: historische Marktanalyse,
Entwurf von Entscheidungsregeln, versicherungsmathematische Tafeln und klare Sprache, die diese Ideen nutzbar machte.
**Wir sind dankbar** den Autoren und Verlagen unten. Unsere Sandbox ist eine lehrende
*Illustration* ihrer Regeln im veröffentlichten Stil unter einem gemeinsamen Pfad — sie ist **kein** Nachdruck
ihrer Aufsätze, **keine** Zertifizierung ihrer Ergebnisse und **kein** Rat. Wo ein öffentlicher Link
verfügbar ist, zeigen wir darauf, damit Sie zur Quelle gehen können.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Zitierte Werke — die sechs Studien</summary>
<div class="lesson-bibliography-body">

- **Bengen SAFEMAX.** William P. Bengen, [“Determining Withdrawal Rates Using Historical Data”](https://www.financialplanningassociation.org/sites/default/files/2021-04/MAR04%20Determining%20Withdrawal%20Rates%20Using%20Historical%20Data.pdf), *Journal of Financial Planning*, 1994 (Nachdruck). Die spätere, bewertungsbewusste Fassung steht in *A Richer Retirement*.
- **Kitces ratchet.** Michael Kitces, [“The Ratcheting Safe Withdrawal Rate”](https://www.kitces.com/blog/the-ratcheting-safe-withdrawal-rate-a-more-dominant-version-of-the-4-rule/), Kitces.com, 2015.
- **Guyton–Klinger.** Jonathan Guyton und William Klinger, [“Decision Rules and Maximum Initial Withdrawal Rates”](https://www.financialplanningassociation.org/sites/default/files/2021-11/2006%20-%20Guyton%20and%20Klinger%20-%20Decision%20Rules%20and%20SWR%20%281%29.PDF), *Journal of Financial Planning*, 2006.
- **Maggiulli 3.65%.** Nick Maggiulli, [*Of Dollars And Data*](https://ofdollarsanddata.com/), und *The Wealth Ladder*. 0.01% am Tag auszugeben kommt auf etwa 3.65% im Jahr.
- **Modified RMD.** Internal Revenue Service, [Publication 590-B](https://www.irs.gov/publications/p590b), Uniform Lifetime Table. Das Produkt verlängert sie als Planungstafel für Alter vor dem Beginn der RMDs.
- **Safety-first.** Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019. Pfaus Safety-first-Ansatz deckt wesentliche Ausgaben zuerst mit garantiertem Einkommen, aus Social Security, Pensionen und Annuitäten, und legt den Rest an. Die Produktregel folgt dieser Form: Wesentliches wird durch garantiertes Einkommen gedeckt, und eine diskretionäre Rate wird aus dem Portfolio ausgegeben, das übrig ist. Sie ist eine Illustration des Ansatzes, keine Regel aus einer einzelnen Tabelle des Buches.

</div>
</details>

**Guardrails** lässt diese Regeln im veröffentlichten Stil dann gegen **Ihre** Portfoliogröße, Ihren Horizont und
Ihre Lebensstilbedürfnisse unter **einem gemeinsamen Sandbox-Pfad** laufen. Diese Lektion handelt davon, diesen
Vergleich zu **personalisieren**: vom Polster des Springfield-Haushalts ausgehen, sehen, was jede Studie ausgeben würde, und es
neben die eigenen Einkommen und Bedürfnisse des Plans setzen. Es ist kein [[term:monte-carlo|Monte Carlo]]-Überlebenspunktestand und kein
Anlage-Rat.

<aside class="lesson-did-you-know">
<p class="lesson-did-you-know-label">Wussten Sie schon?</p>
<div class="lesson-did-you-know-body">

Nick Maggiullis Faustregel ist, jeden Tag **0.01%** Ihres Portfolios auszugeben. Das klingt winzig,
aber über ein Jahr summiert es sich auf **3.65%**, etwas unter der berühmten 4%-Regel. Bei einem Portfolio von \$1 Million
sind das etwa \$100 am Tag.

</div>
</aside>

Der aktive Plan rechts ist **Springfield Baseline** (`springfield_baseline`).

---

## Was Sie lernen {#what-you-will-learn}

<aside class="lesson-plan">
<p class="lesson-plan-label">Heutige Lektion</p>
<div class="lesson-plan-body">

Am Ende dieser Lektion sollten Sie diese Fragen beantworten können. Jede verweist auf den
Abschnitt, der sie beantwortet.

1. **Was vergleicht Guardrails, und wie unterscheidet es sich von einer Monte-Carlo-Prognose?** Siehe
   [Was Guardrails ist](#what-guardrails-is-and-is-not).
2. **Warum sitzt die Studienausgabe bis zum Ruhestand nahe null, und warum startet die Standardrendite
   bei 8%?** Siehe [Was Guardrails ist](#what-guardrails-is-and-is-not).
3. **Welche Ausgabepfade würde jede veröffentlichte Entnahmeregel bei meinem Nettovermögen und meinem Planhorizont
   erlauben?** Siehe [Wohin schauen](#where-to-look).
4. **Wie sitzt die Ausgabe jeder Regel neben meinen Lebensstilbedürfnissen und meinem Einkommen außerhalb des Portfolios?** Siehe
   [Wohin schauen](#where-to-look).
5. **Wie viel Startportfolio bräuchte jede Regel, damit ein studiengebundener Finanzierungspuffer
   nicht negativ wird?** Siehe [Wohin schauen](#where-to-look).
6. **Warum kann der Deckungspuffer grün sein, während der Monte-Carlo-Erfolg deutlich unter 100% liegt?** Siehe
   [Wohin schauen](#where-to-look).
7. **Was behauptet diese Sandbox bewusst nicht?** Siehe [Was dies nicht ist](#what-this-is-not).

</div>
</aside>

---

## Was Guardrails ist (und was es nicht ist) {#what-guardrails-is-and-is-not}

| | Guardrails | <span class="product-mark product-mark-on-dark"><span class="product-mark-label">Tutilis-Simulation</span></span> |
|:---|:---|:---|
| **Ihre Prognose** | **Nie angewendet.** Jede Regel läuft nur hier, auf dem Nebenpfad, damit Sie sie vergleichen können. | Gibt aus, was Ihre Cashflows und Ihre verbleibende Verkaufs-/Anlagestrategie sagen. Sie wendet **keine** Entnahmeregel von dieser Seite an. |
| **Wie Märkte funktionieren** | Ein **fester** Pfad: konstante Inflation und nominale Rendite. Die Forscher haben ihr eigenes Monte Carlo und eine umfangreiche Analyse schon gemacht und **sichere** Ausgabefunktionen (oder Entscheidungsregeln) veröffentlicht. Wir **nutzen diese Früchte** — wir führen ihre Studien hier **nicht** erneut aus und **validieren** sie nicht neu. | **Monte-Carlo**-Wolken über viele Zufallspfade, plus verbleibende Politik, Steuern und der Rest der vollen Planschleife. |
| **Was Sie vergleichen** | Studienwiederholungen nebeneinander für **Bengen SAFEMAX**, **Kitces ratchet**, **Guyton–Klinger**, **Maggiulli 3.65%**, **Modified RMD** und **Safety-first**. Vor dem primären Ruhestand **wächst** die Sandbox **nur**; ab dem Ruhestand berechnet jede Regel die Ausgabe \(S_t\) und lässt dann den Rest wachsen. | Pfadweiser Erfolg **Ihres** Plans unter **Ihrer** Erfolgsdefinition (Gold / Silber / Bronze). |
| **Was Sie eingeben** | Eine **kleine** Menge treibender Sandbox-Eingaben — Portfoliogröße, Inflation, arithmetische **Portfoliorendite [[term:mu\|μ]]**, **Volatilität [[term:sigma\|σ]]** (Pfadwachstum von Satz B), CAPE (**Bengen SAFEMAX**), wesentlich / garantiert (**Safety-first**), Studienjahre. Das ist der Kompromiss: die Studien leisten die harte Arbeit und reichen Ihnen eine einfachere Überschlagsregel für das, was sie als ausgebbar behaupten. Änderungen bleiben hier; nichts wird ins Dossier geschrieben. | Dauerhafte **Dossier**-Annahmen (Wachstum, Steuern, verbleibendes Verkaufen/Anlegen, Erfolgsregel und der Haushalt selbst). |

Jedes Jahr nach Beginn des Ruhestands entnimmt die Engine die von der Regel erlaubte Ausgabe (gedeckelt auf Bargeld)
und lässt dann den Rest wachsen. Regeln von **Satz A** (Bengen SAFEMAX, Kitces, Guyton–Klinger) wachsen mit arithmetischem
**μ**. Regeln von **Satz B** (Maggiulli, modifizierte [[term:rmd]], Safety-first) wachsen mit einer einfachen Volatilitätsschlepp-Rate
\(r_{\mathrm{adj}} \approx \mu - \tfrac12\sigma^2\), damit Prozent-vom-Portfolio-Pfade nicht
auf einer risikofreien μ-Linie beschönigt werden — methodische Fairness, **kein** voller Monte-Carlo-Neulauf
der Aufsätze.

### Studienbeginn beim primären Ruhestand {#study-onset-at-primary-retirement}

Veröffentlichte Regeln sind für **jemanden gerahmt, der in den Ruhestand geht** (oder schon im Ruhestand ist). Guardrails nimmt
denselben Stand ein:

1. **Vor dem primären Ruhestand** — das Sandbox-Portfolio **wächst nur**. Es gibt keine Studienentnahme
   \(S_t\). Das Polster, das im Ruhestand erscheint, ist das, womit die Regel starten würde, wenn Sie
   Guardrails in jenem Jahr öffneten.
2. **Ab dem Ruhestand** — das erste Entnahmejahr jeder Regel ist das regelrelative Jahr 0 (Saatraten, [[term:cape]]-
   Zelle, Kitces-Basis und so weiter landen einmal, auf dem gewachsenen Polster).
3. **Schon im Ruhestand** (oder kein Ruhestandsjahr beim primären Inhaber) — Entnahmen starten am Prognosebeginn
   („jetzt“).

Bei Springfield liegt der Ruhestand noch Jahre voraus, also sitzen frühe Jahre auf den **Ausgabepfaden** nahe **\$0
Studienausgabe**, während das Portfolio sich verzinst. Das ist Absicht, kein kaputtes Diagramm.

### Die Portfoliorendite ist nominal {#portfolio-return-is-nominal}

Der Regler **Rendite μ** ist eine **konstante [[term:nominal]]** Jahresrate nach jeder Entnahme (Standard **8%**,
bei Standard-[[term:inflation]] **2.5%** ≈ real im mittleren einstelligen Bereich für ein ausgewogenes Buch). Die Sandbox hält beide
Regler in einem **vernünftigen Mehrjahresband** (nicht negativ bis etwa **15%**), damit der Pfad eine
Illustration veröffentlichter Regeln bleibt, kein Deflations- oder „50% für immer“-Spielzeug.

Warum nicht 5% oder sogar 7% als Standard? Bei **5% nominal** (~2.5% real) neigen sowohl **Bengen SAFEMAX** als auch
**Kitces ratchet** dazu, das **ganze Portfolio** über mehrdekadige Horizonte **auszugeben**. Bei **7%**
**leert** **Bengen SAFEMAX** unter seiner bewertungsbasierten Startrate
(~5.1% bei CAPE 22) mit reinem [[term:cola]] oft noch nahe Jahr 40 — üblich, wenn der Studienhorizont zu einem langen Plan passt. Das ist
Arithmetik, kein Oberflächenfehler: studienartige Startraten setzen etwas näher an historischen ausgewogenen
Renditen voraus (etwa **7–8% nominal / ~4–5% real** für eine 50/50–60/40-Mischung). Der Standard sitzt am
**oberen** Ende dieses Bandes, damit das erste Öffnen nicht wie „jede Regel scheitert“ aussieht.

Sie können im Schieber weiter **7%** oder **5%** setzen, um zu sehen, welche Pfade sich leeren — das ist ein nützliches
Experiment, kein Fehler.

### Vorbehalt zur Renditereihenfolge (lesen Sie dies) {#sequence-of-returns-caveat-read-this}

**Bengen SAFEMAX** kommt aus **historischen Renditesequenzen**, nicht aus einer einzelnen Durchschnittsrendite.
Ein konstanter 8%-Pfad kann nur den **Mechanismus** der Regel **illustrieren** (COLA, bewertungsbasierte Anfangsrate,
Leerungsmarken). Er **kann** SAFEMAX nicht reproduzieren und keine sichere Ausgaberate beweisen. Behandeln Sie das
Diagramm als **Vergleichs-Sandbox**, nicht als historische Wiederholung.

### Ist 4% noch sicher? {#is-4-still-safe}

William Bengens Studie von 1994 fand, dass eine inflationsangepasste 4%-Entnahme jede 30-Jahres-Periode der US-Geschichte überstand, und die Trinity-Studie von 1998 kam mit einer anderen Methode zu einer ähnlichen Antwort. Wade Pfau hat viel von der Forschung geleistet, die prüfte, wie weit diese Antwort reist. 2010 ließ er dieselbe Art von Test über 109 Jahre Marktdaten aus 17 entwickelten Ländern laufen, und eine reale 4%-Entnahme wäre nur in 4 von ihnen sicher gewesen. 2013 zeigte er mit Michael Finke und David Blanchett, dass die geschätzte Fehlerrate eines 4%-Plans mit der Hälfte in Aktien von etwa 6% auf 57% steigt, wenn Anleiherenditen auf die niedrigen Renditen jenes Jahres gesetzt werden statt auf ihren historischen Durchschnitt.

Keiner der beiden Aufsätze sagt, 4% sei für jeden Haushalt falsch. Beide sagen, dass eine sichere Rate von den Renditen abhängt, die die nächsten Jahrzehnte liefern, und dass die US-Vergangenheit ungewöhnlich freundlich war. Das ist der Grund, warum der Regler **Rendite μ** in dieser Sandbox zählt, und der Grund, die niedrigeren Einstellungen in [Probieren Sie dies](#try-this) zu versuchen. Pfaus spätere Antwort auf das Problem ist der Safety-first-Ansatz, den die Regel **Safety-first** illustriert: einen Boden aus garantiertem Einkommen für wesentliche Ausgaben bauen, damit weniger davon abhängt, dass irgendeine [[term:withdrawal-rate|Entnahmerate]] sicher ist.

<details class="lesson-bibliography" open>
<summary class="lesson-bibliography-label">Weiterführende Forschung — Studien, die die 4%-Regel prüfen</summary>
<div class="lesson-bibliography-body">

- Philip L. Cooley, Carl M. Hubbard und Daniel T. Walz, "Retirement Savings: Choosing a Withdrawal Rate That Is Sustainable," *AAII Journal*, Februar 1998 (die Trinity-Studie).
- Wade D. Pfau, ["An International Perspective on Safe Withdrawal Rates: The Demise of the 4 Percent Rule?"](https://www.financialplanningassociation.org/article/journal/DEC10-international-perspective-safe-withdrawal-rates-demise-4-percent-rule), *Journal of Financial Planning*, Dezember 2010.
- Michael Finke, Wade D. Pfau und David M. Blanchett, ["The 4 Percent Rule Is Not Safe in a Low-Yield World"](https://www.financialplanningassociation.org/article/4-percent-rule-not-safe-low-yield-world), *Journal of Financial Planning*, Juni 2013. Preisträger des Montgomery-Warschauer Award 2014 der FPA.
- Wade D. Pfau, *Safety-First Retirement Planning: An Integrated Approach for a Worry-Free Retirement*, Retirement Researcher Media, 2019.

</div>
</details>

---

## Wohin schauen {#where-to-look}

### Guardrails öffnen {#open-guardrails}

1. Wählen Sie in der linken **Navigationsleiste** **Guardrails** (Gesundheit/Schild-Symbol mit goldenem Akzent — bei
   Region und der Werkzeuggruppe, nicht im Prognosemodul).
2. Das Panel ist eine scrollbare Seite in zwei Bändern: eine **obere Sandbox** (Szenario, Regelübersicht,
   Ausgabepfade) und ein **unteres Personalisierungsband** (eine Studie gegen Ihren Plan). Ziehen Sie den
   horizontalen Griff unter dem oberen Band, um Höhe zurückzuholen, nachdem Sie die Regler gesetzt haben; die persönlichen
   Diagramme bleiben darunter.

[[jump:guardrails|output__guardrails__guardrails.rule-summary]]

### Oberer Abschnitt — gemeinsame Studien {#top-section-shared-studies}

Inhalt im **oberen Abschnitt** (Gemeinsames Szenario · Regelübersicht · Ausgabepfade):

[[img:guardrails-top-band]]

*So bemessen, dass die Hauptregler und die Regelübersicht bei den Ausgabepfaden sitzen — ändern Sie eine Steuerung, und die Pfade
aktualisieren sich in derselben Ansicht. Schrumpfen Sie das obere Band mit dem Griff, wenn Sie mehr Raum für
die Personalisierung darunter wollen.*

**Gemeinsames Szenario** (links) und **Regelübersicht** (rechts) sitzen nebeneinander, wenn das Fenster breit ist —
ziehen Sie den vertikalen Teiler zwischen ihnen. **Ausgabepfade** sitzt unter beiden; Mehrfachauswahl-Chips im
Diagrammtitel zeigen oder verbergen Kurven. Szenarioänderungen bleiben in dieser Sandbox — nichts wird ins
Dossier geschrieben.

### Untere Personalisierung — Ihr Plan {#bottom-personalization-your-plan}

Inhalt im **unteren Personalisierungsband** (Studien-Chips · drei Cashflow-Ansichten · Deckungspuffer):

[[img:guardrails-personalization-band]]

*Personalisierung und Deckung teilen das untere Band, damit Sie eine Studie wählen, Ansichten wechseln und den
Puffer lesen können, ohne die Seite zu verlassen. Bei Springfield unter den Standards ist der Puffer oft grün /
[[term:solvent]].*

Legt **eine** gewählte Studie gegen Ihren Plan. Studien-Chips über diesem Band wählen, welche Regel die
**Personalisierung der Studie** und den **Deckungspuffer** speist (getrennt davon, welche Kurven auf den
Ausgabepfaden sichtbar sind).

**Personalisierung der Studie** ist ein Cashflow-Diagramm mit drei sich ausschließenden Ansichten:

| Ansicht | Was sie zeigt |
|------|----------------|
| **Studienkapazität** | Nur die Portfolioausgabe der gewählten Studie entlang des gemeinsamen Pfads (Jahre vor dem Ruhestand nahe \$0 von Entwurf her) |
| **Modellierte Ein-/Ausgaben (ohne Portfolio)** | Nicht-Portfolio-Einkommen des Plans und Lebensstilausgaben als Kategoriestapel — keine Studienüberlagerung |
| **Modelliert mit Studieneinkommen** | Planstapel **plus** Studien-Portfolioausgabe — das Jahr-für-Jahr-Gegenstück der Finanzierungsgeschichte, die der Deckungspuffer aufsummiert |

Lesen Sie die **Netto-Cashflow-Linie** wie im [[nav:cf-chart]] des Prognosemoduls: **über** der Jahreslegende ist
positiv / Überschuss; **darunter** ist negativ / Fehlbetrag. Der Deckungspuffer unter dem Diagramm ist eine
laufende Kaufkraft-Summe derselben Nettobeträge (grün solvent über null; rot ungedeckt darunter).

### Gemeinsames Szenario (Steuerungen) {#shared-scenario-controls}

| Steuerung | Rolle |
|---------|------|
| **Portfolio** | Startet vom Dossier-Nettovermögen; Schieber / Bearbeitung für „was, wenn diese Größe?“ |
| **Liquides NV** | **Standardmäßig an** — Saat aus anlegbaren Konten minus Verbindlichkeiten (dieselbe Idee wie liquides Nettovermögen in [[nav:birds-eye]]). Ausschalten, um Haus und andere Sachwerte einzubeziehen. |
| **Inflation** | Konstanter COLA / Beginn-Inflation für Bewertungsregeln (nicht negativ bis ~15%) |
| **Rendite μ** | Konstantes Wachstum nach der Entnahme — siehe oben (0% bis ~15%) |
| **Vol σ** | Nur die Pfadwachstumsbremse von Satz B |
| **CAPE** | Bewertungsmatrix von **Bengen SAFEMAX** nur beim **Ruhestandsbeginn** |
| **Wesentlich / Garantiert** | Nur die Regel **Safety-first** |
| **Studienjahre** | Vom Prognosebeginn bis zu dem Ende, das Sie wählen (Standard = Planhorizont). Studien-**Entnahmen** beginnen weiter beim primären Ruhestand, wenn dieses Jahr voraus liegt. |

Änderungen bleiben in der Sandbox — **nichts wird** ins Dossier **geschrieben**. Öffnen Sie **So funktioniert es** am
Panel für die Gleichungen des gemeinsamen Pfads und die Seitenkarte.

### Ausgabepfade {#spending-paths}

Jede Studie ist eine Jahresserie von **tatsächlich entnommenem Bargeld** (auf das Portfolio gedeckelt). Eine regelgefärbte Marke
zeigt die **Leerung**, wenn das Portfolio leer endet. Mehrfachauswahl-Chips im Diagrammtitel zeigen oder
verbergen Kurven. Bewegen Sie den Zeiger **irgendwo** in der Darstellung: der Hinweis folgt dem nächsten Jahr und listet
für jede sichtbare Regel das **Portfolio** zum Jahresbeginn, die **Gesamtausgabe** über den Pfad und das tatsächliche dieses Jahres
(oder Ziel gegen tatsächlich, wenn die Bargelddecke greift). Die Jahr/Alter-Steuerung unten links in der
Darstellung ist dasselbe Achsenmenü wie bei Bilanz- und Cashflow-Diagrammen.

### Regelübersicht und Mindestportfolio für die Deckung {#rule-summary-and-min-portfolio-for-coverage}

| Tabelle | Rolle |
|-------|------|
| **Regelübersicht** | Beginn-Ausgabe / Beginn-Rate (erstes **Entnahme**jahr, nicht eine Null vor dem Ruhestand), Gesamtausgabe, Endportfolio, plus **Min.-Portfolio** und **Zusätzlich nötig** für die Deckung: kleinstes Startpolster, damit der **Deckungspuffer** unter diesen Sandbox-Reglern und Ihren Planstapeln nicht negativ bleibt (**entnehmen bis zum Bedarf**). Zusätzlich nötig ist gegenüber der Portfoliosteuerung darüber. Ein Geviertstrich heißt unlösbar (zum Beispiel ein Fehlbetrag in Arbeitsjahren, den Studienausgabe nicht heilen kann, weil vor Beginn \(S_t = 0\)). Öffnen Sie das **?** der Tabelle für eine spaltenweise Lesart. Klicken Sie eine Zeile, um diese Studie für die Personalisierung zu wählen. |

Unter Springfield Baseline mit den Standards sehen Sie oft **zusätzlich nötig = \$0** für jede Regel und einen
**grünen (solventen)** Deckungspuffer — das Haushalts-Polster räumt den Puffer unter diesen
Reglern schon. Senken Sie Portfolio oder Rendite, um die Tabelle neu rechnen und den Puffer enger werden zu sehen, oder öffnen Sie
[Wenn Guardrails mehr verlangen](/learn/springfield_guardrail_gap) für ein Gegenstück kurz vor dem Ruhestand,
bei dem zusätzlich nötig positiv ist und das Aufstocken des Polsters die Lektion ist.

[[jump:guardrails|output__guardrails__guardrails.rule-summary__line.guardrails.min-portfolio,output__guardrails__guardrails.rule-summary__line.guardrails.extra-needed]]

### Stücke des unteren Bands {#bottom-band-pieces}

| Stück | Rolle |
|-------|------|
| **Studien-Chips** (über der Personalisierung) | Wessen Pfadausgabe Personalisierung und Puffer speist |
| **Personalisierung der Studie** | Drei Ansichten von Planstapeln und/oder Studienkapazität (Tabelle oben) |
| **Deckungspuffer** | Laufende Kaufkraft-Summe der Finanzierungsnettobeträge; **entnehmen bis zum Bedarf** in der Werkzeugleiste |

Die Kapazität bewegt sich mit dem Portfolioregler und dem Studienbeginn; **Bedarf und Einkommen bleiben vom Dossier geschrieben**.
Diese Trennung ist der Sinn der Personalisierungshälfte des Bildschirms.

### Deckungspuffer gegen Monte-Carlo-Erfolg {#coverage-buffer-vs-monte-carlo-success}

Bei **Springfield Baseline** unter den Standards ist der Deckungspuffer meist **grün / solvent**, und
**Zusätzlich nötig** ist **\$0** für jede Regel — ein bequemes Polster räumt die studiengebundene
Finanzierungsgeschichte. **Monte Carlo** im Prognosemodul am selben Haushalt meldet oft noch etwas wie
**zwei von drei** Pfaden, die an der Standardschwelle **Silber** bestehen (nicht 100%). Beide Ergebnisse können wahr sein —
sie beantworten verschiedene Fragen. Ein grüner Puffer ist nicht „MC irrt“, und ein hoher Silber-% ist nicht
„jede veröffentlichte Regel finanziert diesen Lebensstil immer“.

Um einen **engen oder roten** Puffer zu sehen, **während** Monte Carlo noch lebbar aussieht, **senken Sie das Portfolio**
hier, oder öffnen Sie
[Wenn Guardrails mehr verlangen](/learn/springfield_guardrail_gap) (Gegenstück kurz vor dem Ruhestand
mit dünnerem Polster). An diesem Gegenstück kann liquides Kapital zum **Mindestportfolio** einer Studie aufzustocken den
verbleibenden Monte-Carlo-Erfolg heben, ohne die beiden Punktestände gleichzusetzen:

[[img:guardrail-gap-transforms-mc-before-after]]

*Aus der Lücken-Gegenstück-Lektion: stocken Sie **Traditional [[term:401k]] → Target Date Equity**<!-- term-skip: traditional — a Transform's name, not prose --> zu einem Studienminimum auf und
lesen Sie die **Simulationszusammenfassung** Original vs. Geändert unter Silber. Derselbe Vermögenswert wie in jenem Gang —
Baseline-Springfield startet hier oft grün / Zusätzlich nötig \$0, also lebt die Hebungsgeschichte am
Gegenstück.*

| | **Deckungspuffer** (Guardrails) | **Monte-Carlo-Erfolg** (Prognosemodul) |
|---|---|---|
| **Frage** | Wenn Portfolioentnahmen durch die zulässige Ausgabe \(S_t\) **dieser Studie** gedeckelt sind (ab Ruhestandsbeginn), finanzieren Planeinkommen + diese Kapazität den **Lebensstilbedarf** Jahr für Jahr (reihenfolgebewusster laufender Puffer über den **vollen** Horizont)? | Unter dem **vollen Plan** — verbleibende Kapitalpolitik, Steuern, viele zufällige Marktpfade — „schafft“ es der Pfad unter Ihrer Erfolgsdefinition? |
| **Wer darf aus dem Portfolio entnehmen?** | Nur das, was die **Studienregel** nach Beginn erlaubt (optional nur die Lücke nach anderem Einkommen — *entnehmen bis zum Bedarf*). Jahre vor dem Ruhestand buchen Planüberschuss/-defizit **ohne** Studienausgabe. | Die **verbleibende** Politik des Plans kann verkaufen, was der Haushalt noch braucht (pro rata, Steuerreihenfolge, Gleitpfad, …) |
| **„Schwierigkeit“** | Puffersaldo \(B_t < 0\) in irgendeinem Jahr (und er muss sich nicht erholen, damit der Streifen rot bleibt) | Unter **Silber** kann vorübergehender **Liquiditäts**stress, der sich später erholt, weiter als Erfolg zählen; nur härtere Ergebnisse sind Misserfolg |
| **Märkte** | Ein konstantes μ / Schlepppfad von Satz B | Wolke von Sequenzen |

Also:

- **Puffer rot** ≈ „die zulässige Ausgabe dieser Regel finanziert den modellierten Lebensstil unter dem
  Sandbox-Pfad nie ganz“, einschließlich Jahren, in denen Planstapel allein zu kurz sind, bevor die Regel zu entnehmen beginnt.
- **Hoher Silber-Erfolg** ≈ „die meisten Engine-Pfade finanzieren den *Plan* unter verbleibenden Entnahmen und Märkten noch“
  — und die Ergebnismischung zählt weiter (sauberer Erfolg vs. Liquiditätserholung vs. Misserfolg; linkes
  Nettovermögens-Schwanzende).
- **Puffer grün + Zusätzlich nötig \$0** bei Springfield-Standards ≈ die studiengebundene Lebensstilgeschichte geht auf
  unter diesen Reglern — immer noch nicht dasselbe wie das Überleben des Plans unter Monte Carlo.

**Welches Bild für das „Risiko des Scheiterns“?**

- Für **„wird dieser Plan überleben, so wie die App ihn tatsächlich prognostiziert?“** bevorzugen Sie **Monte Carlo** (Erfolgs-
  mischung + Abwärtsschwanz — nicht der Überschriften-% allein). Siehe [Was bedeutet Erfolg?](/learn/springfield_success).
- Für **„wenn ich Entnahmen auf diese veröffentlichte Regel diszipliniere, ist der Lebensstil noch finanziert?“** bevorzugen Sie den
  **Deckungspuffer**, **Modelliert mit Studieneinkommen** und **Min.-Portfolio** / **Zusätzlich nötig** in der
  Regelübersicht. Diese Frage ist absichtlich strenger.
- Keines allein ist vollständig. Lesen Sie hohen MC-Erfolg nicht als „eine 4%-Studie finanziert diesen Lebensstil immer“,
  und lesen Sie einen roten Puffer nicht als „Monte Carlo lügt“.

Werkzeugleiste am Deckungspuffer: **Entnehmen bis zum Bedarf** (standardmäßig an) bucht nur die Studienausgabe, die nötig ist,
nachdem anderes Einkommen den Lebensstil deckt — lassen Sie es an für eine Geschichte der Lebensstilfinanzierung. Es gibt keinen separaten
Schalter „Puffer beim Ruhestand starten“: der Beginn lebt schon im Studienpfad, und der Puffer trägt
Plannettobeträge über den vollen Horizont.

[[jump:guardrails|output__guardrails__guardrails.personalization__line.guardrails.coverage-buffer]]

---

## Probieren Sie dies {#try-this}

1. Öffnen Sie **Guardrails**. Bestätigen Sie, dass **Liquides NV** **an** ist (standardmäßiges anlegbares Polster), **Rendite μ**
   **8%** ist, **Vol σ** etwa **15%** ist und der Portfoliobetrag wie Konten − Schulden aussieht statt
   wie das volle Haushalts-NV mit dem Haus. Beachten Sie die Zeile unter den Reglern: Wachstum von Satz A gegen Satz B nach
   Volatilitätsschlepp.
2. Überfliegen Sie die **Ausgabepfade** mit mehreren sichtbaren Studien. Frühe Jahre sollten wenig oder keine Studien-
   ausgabe bis zum primären Ruhestand zeigen; spätere Jahre fächern sich nach Regel auf. Beachten Sie Leerungsrauten, falls vorhanden. Bewegen Sie
   den Zeiger über die Darstellung — der Hinweis sollte folgen, ohne dass Sie einen Punkt treffen müssen.
3. Senken Sie **Rendite μ** auf **7%**, dann auf **5%**. Bei 7% kann **Bengen SAFEMAX** auf einem langen
   Horizont noch leer laufen; bei 5% laufen **Bengen SAFEMAX** und **Kitces ratchet** oft beide leer. Stellen Sie **8%** wieder her.
   Optional: heben Sie **σ** und sehen Sie, wie Pfade von Satz B relativ zu Satz A dünner werden.
4. Optional: heben Sie **CAPE** (teurer Markt) und sehen Sie, wie sich die Beginn-Ausgabe von **Bengen SAFEMAX** ändert; andere
   Regeln ignorieren CAPE.
5. Lesen Sie die **Regelübersicht** — **Min.-Portfolio** und **Zusätzlich nötig**. Bei Springfield unter den Standards
   ist zusätzlich nötig oft \$0 und der Puffer grün. Senken Sie die Steuerung **Portfolio**, bis einige Zeilen
   positiven Zusatz zeigen (und der Puffer kann rot werden) — dann stellen Sie wieder her.
6. Wählen Sie im **unteren Personalisierungsband** eine Studie mit den Chips. Schalten Sie durch die drei
   Personalisierungsansichten. Beobachten Sie bei **Modelliert mit Studieneinkommen** die **Nettozeile** gegen die Jahresachse.
   Lassen Sie den **Deckungspuffer** an: grün heißt solvent; rot heißt, der laufende Finanzierungspuffer wurde
   negativ. Bestätigen Sie, dass **Entnehmen bis zum Bedarf** an ist, für eine Geschichte der Lebensstilfinanzierung.
7. Optional: öffnen Sie [[nav:forecaster]], lassen Sie Monte Carlo am selben Springfield-Plan laufen und vergleichen Sie Erfolgs-
   % plus Ergebnismischung mit der Puffergeschichte — verschiedene Fragen (siehe oben).

---

## Was dies nicht ist {#what-this-is-not}

- **Keine** Ausgabepolitik in Ihrer Prognose. Das Prognosemodul wendet keine dieser Regeln an; es
  gibt aus, was Ihre Cashflows und Ihre verbleibende Strategie sagen.
- **Keine** Behauptung, dass 8% (oder irgendein μ) jedes Jahr verdient wird.
- **Nicht** SAFEMAX aus der Geschichte — Sequenzen zählen; dieser Pfad tut das nicht.
- **Keine** steuerbewusste verbleibende Strategie und keine RMD-*Politik* im Sinn des vollen Plans (die leben in
  Annahmen / Prognosemodul).
- **Nicht** derselbe Punktestand wie Monte-Carlo-Erfolg: studienbegrenzte Lebensstildeckung ≠ verbleibend finanziertes
  Überleben des Plans unter Silber/Gold/Bronze.
- **Kein** Rat, die Dollarziffer einer Studie oder die Mindestportfolio-Lösung als Empfehlung auszugeben.

Eine tiefer gehende Studienlektion (Regelparameter, mehr Haushalte, tiefere Forschungsnotizen) kann folgen, sobald
dieser Personalisierungs-Gang vertraut ist.

---

## Wohin als Nächstes {#where-to-go-next}

| Lektion | Beziehung |
|--------|----------------|
| [Wenn Guardrails mehr verlangen](/learn/springfield_guardrail_gap) | Gegenstück kurz vor dem Ruhestand: Puffer reißt → min \(P_0\) → aufstocken → MC verbessert sich |
| [Lernen Sie den Haushalt Springfield kennen](/learn/springfield_baseline) | Derselbe Zeichenflächen-Haushalt (bequemes Polster) |
| [Was bedeutet Erfolg?](/learn/springfield_success) | Monte-Carlo-Erfolgsstufen — andere Oberfläche |
| [Reihenfolge nach Steuerkonto vs. pro rata](/learn/springfield_tax_order) | Verbleibende **Verkaufs-/Anlage**politik, nicht Studienregeln |
| [Gleitpfad-Rebalancing vs. pro rata](/learn/springfield_glide) | Ziel des verbleibenden Mixes |

---

## Ehrliches Fazit {#honest-takeaway}

Nutzen Sie Guardrails, um zu fragen: **wenn diese veröffentlichten Regeln mein anlegbares Polster bis zum Ruhestand wachsen ließen und dann
auf diesem Saldo unter einer klaren Renditeannahme liefen, wie würden sich die Ausgabepfade untereinander und
mit den Bedürfnissen meines Plans vergleichen — einschließlich dessen, ob ein studiengebundener Finanzierungspuffer nicht negativ bleibt, und wie viel
Startkapital jede Regel bräuchte, um ihn so zu halten?** Nehmen Sie diese Intuition dann zurück zum Monte Carlo des Prognosemoduls
(Überleben des Plans unter verbleibender Politik und Märkten) und zu Ihrem eigenen Urteil — mit Reihenfolgerisiko
und Steuern weiter im Blick.
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
