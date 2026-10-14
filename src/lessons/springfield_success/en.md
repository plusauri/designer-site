<!--
tutilis-return: kotlin/website/src/main/resources/content/dossiers/springfield_success.md
tutilis-locale: en source
-->
# What does success mean?

<!---
  GENERATED lesson shell — not learner-facing meta. Regenerated chrome is
  outside α/ω; teaching prose lives only in the protect block.
  outline-id: household.success_guardrails.success_definition
  outline-path: Household planning › Success and guardrails › What does success mean?
  document-id: springfield_success
  locale: en
  lifecycle: Source
  status: Shipped
  lesson-status: PortedFromPublic
  host-hint: Dossier
  intent: Ported from public dossiers/springfield_success.md — teaching body unchanged.
  port-source: dossiers/springfield_success.md
-->

<!--- α <lesson_body> -->
A **success rate** is only as meaningful as the **rule that labels a path a success**. Change the
rule, and the same [[term:monte-carlo|Monte Carlo]] cloud can look safer or scarier — without changing a single dollar of
spend or a single return draw.

This lesson uses a **lean teaching sample** (solo retired Homer, house + taxable equities + Social
Security + retirement spending) sized so different success definitions **feel different**. It is
**not** the full dual-earner Springfield Baseline from earlier lessons; the cast name is continuity,
not an identical household.

The live plan on the right is **Springfield Success Definition** (`springfield_success`).

---

## What you will learn

<aside class="lesson-plan">
<p class="lesson-plan-label">Today's lesson</p>
<div class="lesson-plan-body">

By the end of this lesson you should be able to answer these questions. Each one links to the
section that answers it.

1. **When Simulation Summary says something like “~70% success at Silver,” what rule decided which
   paths counted?** See [Gold, Silver, and Bronze](#gold-silver-and-bronze).
2. **Where do I see which paths succeeded and which failed?** See
   [Where to look](#where-to-look).
3. **Why can a path that ends with positive net worth still count as a failure?** See
   [Where to look](#where-to-look).
4. **Where do I change the definition of success?** See
   [Where to change the definition](#where-to-change-the-definition).
5. **What happens to the success rate if I raise the bar to Gold or loosen it to Bronze?** See
   [Try this](#try-this).
6. **Why should I always read the medal next to a success rate?** See
   [Why it matters everywhere](#why-it-matters-everywhere).

</div>
</aside>

---

## Gold, Silver, and Bronze

Product medals map to three definitions under [[nav:assumptions]] → Success (and the same wording in
Transforms when you override success criteria):

[[jump:success-definition]]

| Medal | Definition (product labels) | Plain meaning |
|-------|----------------------------|---------------|
| [[img:std-medal-gold]] **Gold** | **Strict** | Never borrow and never go negative net worth. Highest bar → usually **more** failures. |
| [[img:std-medal-silver]] **Silver** | **Liquidity crises allowed** (default) | May **borrow** to stay afloat if still solvent; temporary negative NW is **not** allowed. The usual product default. |
| [[img:std-medal-bronze]] **Bronze** | **Temporary negative net worth allowed** | Finishing with **positive** net worth counts even if the path borrowed or dipped negative mid-plan. Lowest bar → usually **fewer** failures. |

So “success %” is **not** a single true number. It is “fraction of simulated paths that pass **this**
gate.”

---

## Where to look

The plan on the right already carries everything this lesson needs, from the household to a populated Simulation Summary.

### Household (definitional)

1. [[nav:birds-eye]] — **Evergreen Terrace**, [[term:brokerage]] / equity portfolio, retirement spending, [[term:ss]].
2. This plan is already in **retirement-style** [[term:drawdown]] (lean on purpose so tiers matter).

### Forecast Detail chips

Select [[nav:bs-chart]], [[nav:bs-table]], [[nav:cf-chart]], [[nav:cf-table]] if you want path detail (app order).
For this lesson the star is **Simulation Summary**, not every Detail card.

### Simulation Summary (already populated)

| Preview | View | Role in this lesson |
|---------|------|---------------------|
| [[img:sfsuccess-nw-distribution|preview]] | **Net Worth Distribution** | Cloud of endings; success % at the active medal/threshold. Quartile-colored dots; **red band** = negative ending NW (always fail). Active key path is **highlighted**. |
| [[img:sfsuccess-key-forecasts|preview]] | **Key Forecasts** | Min / GMF / Max / quartiles. Click a row to focus that path **everywhere** and highlight its mark on the distribution. Values in the standard image may be blurred. |

**Note:** Snapshot numbers are **not** targets. This sample is tuned for **tier sensitivity**, not
to match Springfield Baseline’s ~success band.

### Close up and Reveal (this lesson)

When **Distribution** and **Key Forecasts** share the Summary area — or when [[nav:transforms]] shows
**original vs modified** distributions after a re-sim — the cards can feel tight. Use **Close up**
(expand icon on the card) on the cloud you care about: same dots, larger pop-up, **[[term:hover]] tips still
work** (including Success / Failure / Liquidity Failure labels). Under each distribution, **Reveal**
opens the mass of endings if outliers squash the plot; with two distributions side by side, **Link
reveal** (on by default) keeps both scales comparable.

Core chrome map (also BS/CF vertical zoom and joined compare merge):
[Chart controls — Close up, zoom, and Reveal](/learn/getting_around#chart-chrome).

### Key Forecasts ↔ Distribution (how success *looks*)

Selecting a **Key Forecasts** row (**Min**, **Max**, **[[term:gmf]]**, quartiles, …) makes that path **active
everywhere** — Forecast Detail follows it, and the matching mark on the **Net Worth Distribution**
is **highlighted**.

1. Select **Min**. The minimum is always the **leftmost** dot in the distribution (**Max** is always
   the **rightmost**). Hover Min — the tip typically labels the path a **Failure** (on this lean
   sample, Min is a hard-fail ending). Prefer **Close up** on the distribution if scrubbing is
   cramped.
2. Scrub across **many** dots. Some succeed, some fail — the cloud is not one verdict.
3. **Dot color tracks quartile** (poor → strong ending bands), not “success vs fail” by itself.
4. The **red rectangular band** (when present) is **negative ending net worth**. **Regardless of
   Gold / Silver / Bronze**, finishing negative is a **failure** — every mark inside that band fails.
5. **Not every mark to the right of the red band is a success.** Just outside the red you may hover
   paths whose tip says **Liquidity Failure** (or similar): short of cash in some year, **borrowed**
   to stay afloat, then bounced back. The plan charged for that borrowing via **Cost of capital**
   (next to the **Definition of success** under [[nav:assumptions]]). Under **Silver**, those recovered
   paths can still count as success; under **Gold (Strict)** they do **not** — intermediate
   liquidity stress is enough to fail even if the ending NW looks fine.

That is the whole point of the tier: **Gold** is the super-safe / conservative bar — **no**
intermediate failure types allowed. Success % **falls**, but the number you keep should feel
**more** trustworthy because the gate is stricter.

---

## Where to change the definition

The definition of success can be changed in two places, Assumptions and Transforms. The previews below are full-width, because table cells shrink the chrome too much to read the three success
choices.

### The definition of success

[[img:std-assumptions-success]]

Durable **definition of success** on the dossier. Pick **Strict**, **Liquidity crises allowed**, or
**Temporary negative net worth allowed**. **Cost of capital** sits on the same panel — the annual
rate charged when the plan must borrow to cover a shortfall.

### Transforms → Modifiables → Success Criteria

[[img:std-transforms-success-criteria]]

What-if override without treating the dossier edit as permanent. Select the **Success Criteria**
row in Modifiables; the **Modification — Success Criteria** panel shows the same three choices.
Then **Re-simulate** for original vs modified (NW Distribution side by side).

Learning Center may limit dossier editing; if Assumptions is available, use it. Otherwise prefer
Transforms when the Success Criteria row is listed.

---

## Try this

1. Open [[nav:forecaster]] → Simulation Summary. Note success under the **current** medal (this sample
   starts at **Silver** / liquidity crises allowed). Order of magnitude only.
2. Open **Key Forecasts** and **Distribution** side by side (or toggle between them). If the cloud
   is hard to read, **Close up** the distribution (or use **Reveal** under it) — hover tips still
   work full-size.
3. Click **Min** — the minimum is always the **leftmost** dot in the distribution (**Max** is always
   the **rightmost**). Confirm that leftmost mark highlights. Hover it: tip should show **Failure**
   (hard-fail ending).
4. Scrub many other dots. Watch tips for **Success** vs **Failure** vs **Liquidity Failure**. Note
   that **color = quartile**, and the **red band** (if any) is all **negative-NW failures**.
5. Hover several marks **just right of the red band**. Find at least one **Liquidity Failure** —
   borrowed mid-plan, recovered by the end. That is the path type Gold will reclassify.
6. Open [[nav:assumptions]] → Success (or [[nav:transforms]] Success Criteria). Glance at **Cost of
   capital** next to the definition — that is the rate charged when the plan finances a shortfall.
7. Switch to **Gold (Strict)**. **Re-simulate**. Expect success **down** (harder to pass) — recovered
   liquidity paths no longer count. On this lean sample the drop is dramatic: same paths, same
   dollars, **stricter gate only**. With **original vs modified** distributions side by side, Close
   up either cloud if needed; **Link reveal** keeps both readable on one scale.

   [[img:std-success-silver-vs-gold|preview]]

   *Illustrative pair (not a target): left keeps **Silver** / liquidity crises allowed; right is the
   same cloud re-scored under **Gold** / Strict. Read the **medal** next to the rate.*

8. Optional: after Gold, scrub just-right-of-red dots again — endings still positive, tips more often
   **not** Success under Strict.
9. Switch to **Bronze** (temporary negative NW allowed). Re-simulate if needed. Expect success
   **up** relative to Gold — only the **ending** NW gate matters.
10. Return to **Silver**. This is the default product conversation for most other lessons.
11. Optional: with a stressed key row active, open [[nav:cf-chart]] / [[nav:bs-chart]] for that [[term:fid]] to **see**
    the year the path borrowed — not just the percentage.

Prefer: “stricter definition → lower success rate on the same cloud” over locking any percentage.
The trade-off is **confidence**: Gold is harder to pass and more conservative.

---

## Why it matters everywhere

Earlier Springfield lessons said “near-miss under Silver” and “don’t treat a single % as scripture,”
because the success definition alone can move the rate:

| If you change Success criteria… | Success % can move a lot while… |
|---------------------------------|----------------------------------|
| **Definition only** | Spend, returns, and household stay fixed. You are only changing how we **classify** forecasts that run into trouble and may still make it out (borrow mid-plan, recover, etc.) — not the paths themselves. |
| **Spend or retirement** (other lessons) | Definition stays fixed (usually Silver) |

Always read the **medal / definition** next to the rate.

---

## Where to go next

| Topic | Lesson / sample |
|-------|-----------------|
| Full dual-earner household | [Meet the Springfield household](/learn/springfield_baseline) |
| Living spend lever | [Bend the plan with living spend](/learn/springfield_living_spend) |
| Mortgage vs paid off | [Mortgage on vs paid off](/learn/mortgage_on_vs_paid_off) |
| Social Security claim × longevity | [Claim early vs live long](/learn/springfield_claim_longevity) |
| Tax-account order vs pro-rata | [Tax-account order vs pro-rata](/learn/springfield_tax_order) |
| App map | [Getting around the app](/learn/getting_around) |

---

*The quantities are illustrative. What the lesson teaches is that the success rule shapes the rate.*
<!--- ω <lesson_body> -->


<!-- GENERATED host-hint: Dossier — Live plan canvas — Bind a sample dossier on the right. -->
