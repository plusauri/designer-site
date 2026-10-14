<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/i18n/germany_starter.de.md
tutilis-locale: de translated
-->
# Germany Starter

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.place.germany_starter
  outline-path: Household planning › Place and region › Germany starter vehicles
  document-id: germany_starter
  locale: de
  lifecycle: Initial
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported locale twin from public dossiers/germany_starter.de.md
  port-source: dossiers/germany_starter.de.md
  source-file: germany_starter.md
-->

<!--- α <lesson_body> -->
Das ist der **erste europäische Plan** im Learning Center: ein deutscher Haushalt mit **EUR**-
Beständen, **deutschen Kontotypen**, einem Generator für die **Gesetzliche Rente** und einer
**TaxesDe**-Einkommensteuer-Skizze — kein US-Dossier mit anderen Etiketten.

Der Live-Plan rechts ist **Germany Starter** (`germany_starter`): Lukas und Mia, mitten im
Berufsleben in Deutschland. Nutzen Sie ihn, um zu sehen, wie die **Planungsregion** die
Produktpersönlichkeit formt, bevor Sie einzelne Vehikel vertiefen.

Den US-Vergleich, bei dem ein Produktwort zwei getrennte Steuersysteme bezeichnet, zeigt die Lektion
[Social Security treatment](/learn/social_security_treatment) (englische Quelle).

---

## Die Frage

Wenn ein Plan auf **Germany** steht, kann ich ein Sample öffnen und sehen:

1. **Planungsregion** als Produktpersönlichkeit — nicht dasselbe wie die UI-Sprache?
2. Eine **EUR**-Bilanz mit deutschen Altersvorsorge-**Vehikeln** (keine IRA-/401(k)-Klone)?
3. **Gesetzliche Rente** als nationalen Renten-**Generator**, getrennt von betrieblichen / privaten Töpfen?
4. Eine **deutsche** Steuerauswertung Jahr für Jahr — mit ehrlichen „Skizzen“-Grenzen — statt eines
   US-Bundessteuer-Worksheets?

---

## Sprache vs. Planungsregion

Die Sprache der App und das Land, das der Plan modelliert, sind zwei getrennte Einstellungen, und
man vermischt sie leicht.

| Konzept | Was es ist | Wo Sie es spüren |
|---------|------------|------------------|
| **UI-Sprache** | EN / DE / FR / ES für Labels und Hilfe | Sprachwahl in der Chrome |
| **Planungsregion** | Welche **Produktpersönlichkeit** des Landes der Plan nutzt | Toolbar-Chip [[nav:region]]; Kataloge; Steuer-Plugin |

Sie können die App auf **Englisch** lesen und trotzdem einen **deutschen** Haushalt planen. Sprache
ist, wie die Hülle spricht; Planungsregion ist, **welche Regeln und Vehikel** das Dossier trägt.
Die Region dieses Samples ist **Germany**; die Anzeigewährung ist **EUR**.

---

## Wer steckt in diesem Plan?

Der Plan modelliert zwei Personen, Lukas und Mia.

| Person | Rolle | Geburtsjahr | Geplanter Ruhestand | Plan modelliert Leben bis |
|--------|-------|-------------|---------------------|---------------------------|
| **Lukas** | Primäre Person | 1980 | Alter 67 | Alter 92 |
| **Mia** | Zweite Person | 1982 | Alter 67 | Alter 94 |

Beide zielen im Plan auf **67** — eine übliche gesetzliche-Renten-Erzählung für ein erstes
deutsches Sample, kein Anspruch, dass jeder Haushalt im Gleichschritt in Rente geht.

**Wohin schauen:** [[nav:birds-eye]] → People (oder der Personenbereich im Dossier). Karte hovern für
Geburtsjahr und die Paarung Alter · Kalenderjahr, wenn die UI sie zeigt.

---

## Säulen auf einer Bilanz

Die deutsche Altersvorsorge-Erzählung läuft oft über **Säulen**. Dieses Sample legt mehrere davon
in einen Plan, damit Sie **Produktidentität** sehen — nicht nur einen weiteren Spartopf mit
anderem Namen.

| Schicht | In diesem Sample | Wofür |
|---------|------------------|--------|
| **Steuerpflichtiges Depot + Giro** | Brokerage-ETFs + Girokonto | Verfügbares / steuerpflichtiges Vermögen und Cash |
| **Säule 1 — gesetzlich** | Generator **Gesetzliche Rente (Lukas)** | Nationale öffentliche Rente (Cashflow-Vorlage) |
| **Säule 2 — betrieblich** | **bAV** (Direktversicherung-Skizze) | Betriebliche Altersversorgung |
| **Säule 3 — privat** | **Rürup** (Basisrente) + **Riester** | Private / geförderte Verträge |

### Konten zum Öffnen

1. **Depot (steuerpflichtiges Brokerage)** — Europa-nahe Sleeves: entwickelte Aktien **ex-US**,
   Emerging Markets, Euro-Aggregate-Anleihen (dünnes DE/EU-Marktpack — nutzt bestehende Wachstumstypen).
2. **Girokonto** — Demand-/Cash-Persönlichkeit.
3. **bAV (Direktversicherung-Skizze)** — betrieblicher Topf; jährlicher Beitrag bis Startalter **67**.
4. **Rürup (Basisrente-Skizze)** — höhere private Beitragsskizze; vorerst gleiche Vertragsform.
5. **Riester (Skizze)** — Eigenbeitrag **plus** jährliche **Zulagen**-Skizze (475 € gesamt —
   illustrativ Grund + ein Kind, **keine** vollständige gesetzliche Tabelle nach Steuerjahr).

bAV, Rürup und Riester teilen heute eine **Vertrags-Hülle** (Kapital, Beitrag, Startalter, COLA).
Das ist beabsichtigtes MVP-Reuse. **Labels und Sample-Story** tragen die Identität, bis
vehikelspezifische Steuer- und Förder-Tiefe wächst. Riester zeigt bereits eine **Zulagen**-Zeile
getrennt vom Eigenbeitrag.

### Cashflows und Generatoren

| Element | Rolle |
|---------|--------|
| **Primärgehalt** | Erwerbseinkommen bis in die Übergangsjahre |
| **Lebenshaltungskosten** | Laufende Haushaltsausgaben |
| **Gesetzliche Rente (Lukas)** | Monatliche Leistungs-Skizze → Jahresserien ab Startalter **67**, mit COLA |

**Arbeitgeber-bAV ist ein Konto**, kein zweiter portabler „Renten-Generator“. Die gesetzliche Rente
ist der **Generator**; betriebliches Kapital sitzt auf der **Bilanz**.

---

## Wohin schauen

Die Eingaben des Plans stehen in den definitorischen Ansichten, die Ergebnisse Jahr für Jahr im
Forecaster.

### Definitional

1. **Toolbar** — Plantitel neben [[nav:region]] (Germany) und **Anzeigewährung** (EUR).
2. [[nav:birds-eye]] / [[nav:dossier]] → Konten — Depot, Giro, bAV, Rürup, Riester.
3. **Cash-Flow**-Selektor auf [[nav:birds-eye]] — Gehalt, Lebenshaltungskosten und expandierte
   Vertragsbeiträge / Zulagen, sobald der Plan expandiert.
4. [[nav:assumptions]] / Taxes — **TaxesDe** ist installiert (leeres `TaxesDe {}` bedeutet gebackene
   Skizzen-Defaults). Es gibt auch einen Steuer-**Estimate**-Anker fürs erste Jahr; die
   Forecaster-Auswertung ist der Jahr-für-Jahr-Pfad.

### Projiziert — [[nav:forecaster]]

Bevorzugen Sie **FID 0 / GMF**. Mit **Year** zwischen einem **Arbeitsjahr** und einem **Jahr nach 67** springen.

| Ansicht | Rolle hier |
|---------|------------|
| [[nav:cf-chart]] / [[nav:cf-table]] | Gehalt während der Erwerbsphase; Gesetzliche Rente und Vertragsverhalten nach Startaltern. |
| **Taxes → Germany** | Zweispurige **Skizzen**-Auswertung (progressiv + Kapital flat + Soli) — kein US-Federal-Worksheet. |
| **Simulation Summary** | Mehrpfad-Outcomes auf einem EUR-nativen Buch. |

Chart-Chrome: [Close up / zoom / Reveal](/learn/getting_around#chart-chrome).

---

## Was dieses Sample *nicht* ist

- Keine vollständige **Riester**-Förderlogik nach Steuerjahr und Kindergeldsatz.
- Keine tiefen **bAV**- / **Rürup**-Sonderregeln (Unverfallbarkeit, Günstigerprüfung, …) — Hülle + Story.
- Kein Ersatz für Beratung zu **Gesetzlicher Rente**, Betriebsrente oder privater Vorsorge.

Es ist ein **erster Anker**: Region, Währung, Vehikel-Namen und eine ehrliche Steuer-Skizze in einem
Live-Plan — damit spätere Lektionen (Kataloge, Beiträge, Steuertiefe) einen gemeinsamen
Ausgangspunkt haben.
<!--- ω <lesson_body> -->

<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
