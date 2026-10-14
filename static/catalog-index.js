/**
 * Live search for a catalog hub — /reference and /glossary both run this file.
 *
 * It used to be reference-index.js, hardcoded to one surface. The glossary needs the same behavior
 * down to the details that were expensive to get right (bfcache restore, Safari clearing an
 * autocomplete="off" field after first paint, the explicit Tab walk), and a second copy would have
 * drifted from this one within a release. So the surface-specific parts — element id prefix, URL
 * base, class names, which fields are searched and shown — come from a config the page emits, and
 * the behavior lives here once.
 *
 * The page also ships its whole catalog as JSON, because the server matches on fields that appear
 * on no card: `keywords` on /reference ("millage", "etr", "death tax") and `aliases` on /glossary
 * ("bell curve", "sigma", "tax-account order"). Filtering the rendered DOM would answer "nothing
 * matches" to exactly the queries each empty state tells people to try.
 *
 * Progressive enhancement: the server renders a correct list and `?q=` deep links resolve with no
 * JavaScript. This takes over on load, suppresses the form submit, and re-renders in place.
 *
 * KEEP IN SYNC with the server matchers: ReferenceEntry.searchCorpus and GlossaryEntry.searchCorpus
 * (reference-data/.../catalog/ReferenceCatalog.kt, .../glossary/GlossaryEntry.kt).
 */
(function () {
  var configEl = document.getElementById("catalog-index-config");
  if (!configEl) return;

  var cfg;
  try {
    cfg = JSON.parse(configEl.textContent || "null");
  } catch (e) {
    return;
  }
  if (!cfg || !cfg.prefix) return;

  function byId(suffix) {
    return document.getElementById(cfg.prefix + suffix);
  }

  var catalogEl = byId("-catalog");
  var input = byId("-search");
  var results = byId("-results");
  var meta = byId("-result-meta");
  if (!catalogEl || !input || !results || !meta) return;

  var catalog;
  try {
    catalog = JSON.parse(catalogEl.textContent || "[]");
  } catch (e) {
    return; // Leave the server-rendered list alone rather than blanking the page.
  }
  if (!Array.isArray(catalog) || catalog.length === 0) return;

  var form = byId("-search-form");
  var clearBtn = byId("-search-clear");
  var submitBtn = byId("-search-submit");
  var chips = Array.prototype.slice.call(
    document.querySelectorAll("." + cfg.classes.chips + " a[" + cfg.groupAttr + "]")
  );

  // The round trip is what this replaces, so the button that caused it goes away — but only now
  // that we know the script runs. It stays in the markup for the no-JS case.
  if (submitBtn) submitBtn.hidden = true;
  if (form) form.addEventListener("submit", function (ev) { ev.preventDefault(); });

  var activeGroup = "";
  var current = chips.filter(function (c) { return c.getAttribute("aria-current") === "true"; })[0];
  if (current) activeGroup = current.getAttribute(cfg.groupAttr) || "";

  // ── Survive a trip into an entry page and back ───────────────────────────────
  // Browser Back alone would mostly work, because syncUrl leaves `?q=` on the history entry and
  // the server re-renders from it. But the in-page crumb links to a bare hub, so returning that
  // way dropped the search — and the reader has not asked to start over, they have asked to come
  // back. sessionStorage covers every route back; the URL still wins when it carries a query,
  // since that is this history entry's own state.
  var STORAGE_KEY = cfg.storageKey;

  /**
   * The query, held here rather than read off the input on demand.
   *
   * The field is not a reliable place to keep it. It carries autocomplete="off", so browsers
   * settle form state after scripts run and may hand the box back empty on a history navigation —
   * and on a bfcache restore no script re-runs at all, so there is no load pass to repair it.
   * Keeping the value in the closure means it survives both, and repainting the box from it is
   * idempotent: every keystroke writes `query`, storage, and the URL together, so re-asserting can
   * only ever paint what is already true.
   */
  var query = input.value || "";

  function persist() {
    try {
      sessionStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ query: query, group: activeGroup })
      );
    } catch (e) {
      /* private mode / quota — the URL still carries the state */
    }
  }

  /**
   * Snapshot before leaving for an entry page (or into bfcache).
   *
   * Reads `query` rather than the box for the reason the box is not the truth: Safari can clear a
   * field before pagehide finishes, and persisting from it would save the emptiness.
   */
  function persistBeforeLeave() {
    persist();
  }

  /** Storage first, then the URL — which wins, being this history entry's own state. */
  function loadState() {
    var saved = null;
    try {
      saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "null");
    } catch (e) {
      saved = null;
    }
    if (saved && typeof saved.query === "string") query = saved.query;
    if (saved && typeof saved.group === "string") activeGroup = saved.group;
    try {
      var params = new URLSearchParams(window.location.search);
      var urlQuery = params.get("q");
      var urlGroup = params.get(cfg.groupParam);
      if (urlQuery !== null) query = urlQuery;
      if (urlGroup !== null) activeGroup = urlGroup;
    } catch (e) {
      /* ignore */
    }
    syncChips();
  }

  /** Push `query` into the box. Safe to call often — it only writes when they differ. */
  function paintField() {
    if ((input.value || "") !== query) input.value = query;
  }

  function syncChips() {
    chips.forEach(function (chip) {
      var on = (chip.getAttribute(cfg.groupAttr) || "") === activeGroup;
      chip.classList.toggle("is-active", on);
      if (on) chip.setAttribute("aria-current", "true");
      else chip.removeAttribute("aria-current");
    });
  }

  /** Same haystack the server lowercases at construction — including the fields no card renders. */
  function haystack(entry) {
    if (!entry._hay) {
      var parts = [];
      cfg.fields.search.forEach(function (field) {
        var value = entry[field];
        if (value == null) return;
        if (Array.isArray(value)) parts = parts.concat(value);
        else parts.push(value);
      });
      entry._hay = parts.join(" ").toLowerCase();
    }
    return entry._hay;
  }

  function matches(entry, terms) {
    if (terms.length === 0) return true;
    var hay = haystack(entry);
    for (var i = 0; i < terms.length; i++) {
      if (hay.indexOf(terms[i]) === -1) return false; // every term must land (AND), like the server
    }
    return true;
  }

  function metaText(entry) {
    var parts = [];
    cfg.fields.meta.forEach(function (field) {
      var value = entry[field];
      if (value) parts.push(value);
    });
    return parts.join(" · ");
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function render(hits) {
    results.textContent = "";
    if (hits.length === 0) {
      var h = el("h2", null, results.getAttribute("data-no-matches") || "Nothing matches");
      var p = el("p", null, results.getAttribute("data-no-matches-hint") || "");
      results.appendChild(h);
      results.appendChild(p);
      return;
    }
    // Grouped by walking the payload and emitting a heading whenever the group changes, so the
    // payload must already be group-major — see `glossaryCatalogJson`, which sorts for exactly
    // this reason. Nothing is sorted here: the order the server rendered is the order shipped,
    // which is what makes the hand-over to client-rendered markup invisible.
    var lastGroup = null;
    hits.forEach(function (entry) {
      var group = entry[cfg.fields.group];
      if (group !== lastGroup) {
        lastGroup = group;
        results.appendChild(el("h2", cfg.classes.heading, group));
      }
      var card = document.createElement("a");
      card.className = cfg.classes.card;
      card.href = cfg.basePath + "/" + entry.id;
      card.appendChild(el("span", cfg.classes.title, entry[cfg.fields.title]));
      card.appendChild(el("span", cfg.classes.summary, entry[cfg.fields.summary]));
      card.appendChild(el("span", cfg.classes.meta, metaText(entry)));
      results.appendChild(card);
    });
  }

  // Parameter is `q`, not `query`: shadowing the module-level source of truth inside the one
  // function that writes it to the URL is a trap worth not setting.
  function syncUrl(q) {
    if (!window.history || !window.history.replaceState) return;
    var params = new URLSearchParams();
    if (q) params.set("q", q);
    if (activeGroup) params.set(cfg.groupParam, activeGroup);
    var qs = params.toString();
    window.history.replaceState(null, "", qs ? cfg.basePath + "?" + qs : cfg.basePath);
  }

  /** Re-render for the current [query] + chip state. Pure paint; writes happen at the edges. */
  function apply() {
    var needle = query.trim().toLowerCase();
    var terms = needle ? needle.split(/\s+/) : [];
    var hits = catalog.filter(function (entry) {
      if (activeGroup && entry[cfg.fields.groupSlug] !== activeGroup) return false;
      return matches(entry, terms);
    });
    render(hits);
    meta.textContent = hits.length + " " + (cfg.countOf || "of") + " " + catalog.length;
    if (clearBtn) clearBtn.hidden = !query;
  }

  /** A real edit: the box is the truth, and both durable copies follow it. */
  function commit() {
    query = input.value || "";
    apply();
    syncUrl(query.trim());
    persist();
  }

  // ── Keyboard: reach the matches without walking the page chrome ──────────────
  // Mirrors /learn. Native tab order was not enough there — after the first card it jumped to
  // browser chrome instead of continuing down the list — so the walk is explicit here too.

  function resultCards() {
    return results.querySelectorAll("a." + cfg.classes.card);
  }

  function focusResultCard(card) {
    if (!card) return false;
    card.focus();
    if (typeof card.scrollIntoView === "function") {
      try {
        card.scrollIntoView({ block: "nearest", inline: "nearest" });
      } catch (e) {
        card.scrollIntoView(false);
      }
    }
    return true;
  }

  function indexOfFocusedCard(cards) {
    var active = document.activeElement;
    if (!active) return -1;
    for (var i = 0; i < cards.length; i++) {
      if (cards[i] === active || cards[i].contains(active)) return i;
    }
    return -1;
  }

  input.addEventListener("input", commit);

  input.addEventListener("keydown", function (ev) {
    // Tab → first match. Shift+Tab stays free to move backward out of the field.
    if (ev.key === "Tab" && !ev.shiftKey) {
      var cards = resultCards();
      if (cards.length && focusResultCard(cards[0])) ev.preventDefault();
      return;
    }
    // Enter used to submit the form and reload with `?q=`. Suppressing that submit would have
    // left the key dead, so it now opens the top match — same as /learn.
    if (ev.key === "Enter") {
      ev.preventDefault();
      var first = resultCards()[0];
      if (first) window.location.assign(first.href);
      return;
    }
    if (ev.key === "Escape" && input.value) {
      ev.preventDefault();
      input.value = "";
      commit();
    }
  });

  // Walk the filtered cards with Tab / Shift+Tab rather than trusting native order.
  results.addEventListener("keydown", function (ev) {
    if (ev.key !== "Tab") return;
    var cards = resultCards();
    if (!cards.length) return;
    var idx = indexOfFocusedCard(cards);
    if (idx < 0) return;
    if (ev.shiftKey) {
      ev.preventDefault();
      if (idx === 0) input.focus();
      else focusResultCard(cards[idx - 1]);
      return;
    }
    // Forward: stay in the list until the last card, then let Tab leave normally.
    if (idx < cards.length - 1) {
      ev.preventDefault();
      focusResultCard(cards[idx + 1]);
    }
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", function () {
      input.value = "";
      commit();
      input.focus();
    });
  }

  chips.forEach(function (chip) {
    chip.addEventListener("click", function (ev) {
      ev.preventDefault(); // the whole point: no round trip
      activeGroup = chip.getAttribute(cfg.groupAttr) || "";
      syncChips();
      apply();
      syncUrl(query.trim());
      persist();
    });
  });

  // Leaving for an entry page (or into bfcache): snapshot before the box can be cleared.
  window.addEventListener("pagehide", persistBeforeLeave);
  window.addEventListener("beforeunload", persistBeforeLeave);

  /**
   * Re-assert the saved state into the page.
   *
   * Unconditional on purpose. An earlier version skipped this once the reader had typed, to stop
   * deferred passes trampling a live edit — which broke the Back button precisely: a bfcache
   * restore hands back the same JS heap, so that "already typed" flag was still set, `pageshow`
   * was the only hook that runs, and it bailed. Nothing repainted and the search looked wiped.
   *
   * The guard is unnecessary anyway. Every edit writes `query`, storage, and the URL together, so
   * re-loading from them can only reproduce the current value.
   */
  function restoreAndRender() {
    loadState();
    paintField();
    apply();
  }

  // bfcache restore runs no scripts; this is the only hook that fires.
  window.addEventListener("pageshow", restoreAndRender);

  // First paint, then again on a short ladder. One pass is not enough: with autocomplete="off"
  // the browser settles form state *after* the document's scripts, so a single restore gets
  // overwritten a moment later. learn-index.js records the same finding — "deferred passes defeat
  // Safari clearing the input after first paint".
  restoreAndRender();
  window.setTimeout(restoreAndRender, 0);
  window.setTimeout(restoreAndRender, 50);
  window.setTimeout(restoreAndRender, 200);
})();
