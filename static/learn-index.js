/**
 * Learning Center discovery on /learn: one catalog (no surface split since 2026-09-13), pinned Start here,
 * topic chips (without start-here), card grid results, client-side search.
 *
 * Catalog JSON from Kotlin PublishedCatalog. Selection policy (start-here pin, topic chips
 * excluding start-here) mirrors CatalogSelection / CatalogDiscovery in :tutil-search.
 */
(function () {
  /**
   * One catalog. Until 2026-09-13 rows were split by CatalogSurface (Lessons / Features /
   * Community) behind exclusive chips, and Lessons was the default — so the Features rows were
   * invisible to anyone who did not click. The surface is still on every row (the desktop app
   * keeps its front doors) but the website no longer filters or labels by it; sections come from
   * purpose alone. `?surface=` deep links are accepted and stripped for old bookmarks.
   */

  /**
   * KEEP IN SYNC with CatalogDiscovery.PRIORITY_TAGS
   * (kotlin/tutil-search/.../CatalogDiscovery.kt). start-here is listed for ranking completeness
   * but is stripped from topic chips (START_HERE_TAG).
   */
  const PRIORITY_TAGS = [
    "start-here",
    // KEEP IN SYNC with CatalogTags.TUTILIS_FEATURE
    "tutilis-feature",
    "research",
    "advanced",
    "fundamentals",
    "guardrails",
    "withdrawal-strategy",
    "success-definition",
    "social-security",
    "college",
    "529",
    "healthcare",
    "hnw",
    "living-spend",
    "mortgage",
    "rmd",
    "roth",
    "conversion",
    "brackets",
    "taxes",
    "magi",
    "irmaa",
    "reveal",
    "compression",
  ];
  /**
   * KEEP IN SYNC with CatalogDiscovery.TOPIC_CHIP_DENYLIST — stay on listings for search, not Topics.
   */
  const TOPIC_CHIP_DENYLIST = {
    baseline: true,
    "family-springfield": true,
    "family-banks": true,
    "family-johnsons": true,
    "tool-lesson": true,
  };
  /** KEEP IN SYNC with CatalogTags.TUTILIS_FEATURE / TUTILIS_FEATURE_LABEL. */
  const TUTILIS_FEATURE_TAG = "tutilis-feature";
  const TAG_DISPLAY_LABELS = {
    "tutilis-feature": "Tutilis feature",
  };
  function tagDisplayLabel(tag) {
    return TAG_DISPLAY_LABELS[tag] || tag;
  }
  /** KEEP IN SYNC with CatalogDiscovery.MAX_TAG_CHIPS. */
  const MAX_TAG_CHIPS = 12;
  /**
   * KEEP IN SYNC with CatalogSelection start-here constants + icons.
   * Two pinned Getting Around cards (reading = book, screencast = retro TV).
   */
  const START_HERE_TAG = "start-here";
  const START_HERE_READING_ID = "getting_around";
  const START_HERE_SCREENCAST_ID = "getting_around_screencast";
  const START_HERE_FALLBACK_ID = START_HERE_READING_ID;
  const START_HERE_ICONS = {
    Reading: "📖",
    Screencast: "📺",
  };

  /**
   * KEEP IN SYNC with DocumentPurpose titles. Purpose buckets for every row, whatever its
   * surface; the engineering group is only a fallback for a row with no purpose.
   */
  function discoverySectionTitle(row) {
    if (row.purpose === "fundamentals") return "Concepts to know first";
    if (row.purpose === "planning_concept") return "Case studies";
    if (row.purpose === "product_feature") return "Using the product";
    if (row.purpose === "family_introduction") return "Meet the families";
    return row.group || "Other";
  }

  function discoverySectionSortKey(title) {
    if (title === "Concepts to know first") return 0;
    if (title === "Case studies") return 1;
    if (title === "Using the product") return 2;
    if (title === "Meet the families") return 3;
    return 50;
  }

  /**
   * Sections that fold, and whether each starts open. Case studies is absent on purpose: it is
   * the catalog, so it never folds. Concepts starts open so a first visit meets it before the
   * case studies; the rest are reference and start folded. A reader's own open/close is kept
   * per viewer in localStorage and wins over these defaults.
   */
  var SECTION_FOLD_DEFAULT_OPEN = {
    "Concepts to know first": true,
    "Using the product": false,
    "Meet the families": false,
  };
  var SECTION_FOLD_STORAGE_KEY = "plusauri.learn.sectionsOpen.v1";

  function loadSectionFolds() {
    try {
      var parsed = JSON.parse(window.localStorage.getItem(SECTION_FOLD_STORAGE_KEY) || "{}");
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  function saveSectionFold(title, open) {
    try {
      var folds = loadSectionFolds();
      folds[title] = open;
      window.localStorage.setItem(SECTION_FOLD_STORAGE_KEY, JSON.stringify(folds));
    } catch (e) {
      // Storage blocked (private window, previews): the fold still works, it just is not kept.
    }
  }

  function sectionStartsOpen(title) {
    var saved = loadSectionFolds()[title];
    return typeof saved === "boolean" ? saved : SECTION_FOLD_DEFAULT_OPEN[title];
  }

  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();
  }

  function tokens(s) {
    return normalize(s).split(/\s+/).filter(Boolean);
  }

  /**
   * Split document / file-style ids so "foundations", "time", "value" hit
   * foundations_time_value_real_vs_nominal (underscores, dots, hyphens).
   */
  function idSearchText(id) {
    var raw = id || "";
    return raw + " " + raw.replace(/[_.\-]+/g, " ");
  }

  function haystack(row) {
    return normalize(
      [
        row.title,
        idSearchText(row.id),
        row.situation || "",
        row.description,
        row.group,
        row.planningRegionLabel || "",
        row.planningRegion || "",
        (row.tags || []).join(" "),
      ].join(" "),
    );
  }

  function matches(row, queryTokens) {
    if (queryTokens.length === 0) return true;
    const h = haystack(row);
    return queryTokens.every(function (t) {
      return h.indexOf(t) >= 0;
    });
  }

  function regionCueMeta(regionId) {
    if (!regionId) return null;
    if (regionId === "all") return { marker: "🌐", label: "Globe only" };
    if (regionId === "us") return { marker: "🇺🇸", label: "United States only" };
    if (regionId === "ca") return { marker: "🇨🇦", label: "Canada only" };
    if (regionId === "mx") return { marker: "🇲🇽", label: "Mexico — not available" };
    if (regionId === "de") return { marker: "🇩🇪", label: "Germany only" };
    if (regionId === "fr") return { marker: "🇫🇷", label: "France only" };
    if (regionId === "es") return { marker: "🇪🇸", label: "Spain only" };
    return { marker: "•", label: "Region filter" };
  }

  function hasTag(row, tag) {
    if (!tag) return true;
    var tags = row.tags || [];
    for (var i = 0; i < tags.length; i++) {
      if (tags[i] === tag) return true;
    }
    return false;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /**
   * Shared CatalogSelection.startHereListings policy — reading then screencast.
   * Both are pinned above the search grid and filtered out of results below.
   */
  function findStartHereRows(catalog) {
    var tagged = [];
    for (var i = 0; i < catalog.length; i++) {
      if (hasTag(catalog[i], START_HERE_TAG)) tagged.push(catalog[i]);
    }
    if (tagged.length === 0) {
      for (var j = 0; j < catalog.length; j++) {
        if (
          catalog[j].id === START_HERE_READING_ID ||
          catalog[j].id === START_HERE_SCREENCAST_ID
        ) {
          tagged.push(catalog[j]);
        }
      }
    }
    tagged.sort(function (a, b) {
      return startHereSortKey(a) - startHereSortKey(b);
    });
    return tagged;
  }

  function startHereSortKey(row) {
    if (row.id === START_HERE_READING_ID) return 0;
    if ((row.presentation || "") === "Reading") return 1;
    if (row.id === START_HERE_SCREENCAST_ID) return 2;
    if ((row.presentation || "") === "Screencast") return 3;
    return 10;
  }

  function startHereMediaGlyph(row) {
    if (
      row.id === START_HERE_SCREENCAST_ID ||
      (row.presentation || "") === "Screencast"
    ) {
      return START_HERE_ICONS.Screencast;
    }
    return START_HERE_ICONS.Reading;
  }

  function isStartHerePinnedId(id, startHereRows) {
    if (!id) return false;
    for (var i = 0; i < startHereRows.length; i++) {
      if (startHereRows[i].id === id) return true;
    }
    return id === START_HERE_READING_ID || id === START_HERE_SCREENCAST_ID;
  }

  function truncate(s, max) {
    s = s || "";
    if (s.length <= max) return s;
    return s.slice(0, max - 1).replace(/\s+\S*$/, "") + "…";
  }

  /**
   * Planning-region scope on each catalog row (KEEP IN SYNC with LessonPlanningRegion).
   * `all` = globe (region-agnostic); `us` / `ca` / `de` / `fr` / `es` = national systems;
   * `mx` = watch list (not a live planning region).
   */
  function regionId(row) {
    return (row && row.planningRegion) || "all";
  }

  function regionMarker(row) {
    if (row && row.planningRegionMarker) return row.planningRegionMarker;
    var id = regionId(row);
    if (id === "us") return "🇺🇸";
    if (id === "ca") return "🇨🇦";
    if (id === "mx") return "🇲🇽";
    if (id === "de") return "🇩🇪";
    if (id === "fr") return "🇫🇷";
    if (id === "es") return "🇪🇸";
    return "🌐";
  }

  function regionLabel(row) {
    if (row && row.planningRegionLabel) return row.planningRegionLabel;
    var id = regionId(row);
    if (id === "us") return "United States";
    if (id === "ca") return "Canada";
    if (id === "mx") return "Mexico";
    if (id === "de") return "Germany";
    if (id === "fr") return "France";
    if (id === "es") return "Spain";
    return "All regions";
  }

  function matchesRegion(row, regionFilter) {
    // Empty filter = any region. Non-empty = exact planningRegion id (all|us|ca|mx|de|fr|es).
    if (!regionFilter) return true;
    return regionId(row) === regionFilter;
  }

  /**
   * KEEP IN SYNC with tutil.search.curriculum.LessonStatus.
   * Not drawn on the card — only the ShellOnly filter and `data-lesson-status` read it. Status is
   * reported in doc/generated/lesson-attributes.md.
   */
  function lessonStatus(row) {
    return (row && row.lessonStatus) || "Blessed";
  }

  /**
   * KEEP IN SYNC with tutil.search.LessonLevel.
   * General = no badge at all. The absence is the message: nothing to know first.
   */
  function lessonLevel(row) {
    return (row && row.level) || "General";
  }

  // Localized badge copy from the page (#learn-level-labels): name -> [label, note]. English
  // source is the fallback, so the grid still draws if the tag is missing or unparseable.
  var LEVEL_LABELS_EN = {
    Intermediate: [
      "Intermediate",
      "Assumes one piece of machinery rather than building it from nothing.",
    ],
    Advanced: [
      "Advanced",
      "Carries real quantitative content. You do not need it to use the tool.",
    ],
    Power: [
      "Power user",
      "Teaches a Power user feature. Turn Power user on under Advanced \u2192 Application.",
    ],
  };
  var LEVEL_GLYPHS = { Intermediate: "\u25C7", Advanced: "\u25C6" };
  // All three tint their card, including General — a color you can sweep for beats a word you
  // have to read on a screen this dense. General is still silent in *words* (no badge): the tint
  // says "this one, too, is for you", not "you are a beginner". An unrecognized value gets no
  // class and therefore no tint, so a bad string can never imply a level.
  var LEVEL_CLASSES = { General: 1, Intermediate: 1, Advanced: 1 };

  var levelLabels = (function () {
    try {
      var el = document.getElementById("learn-level-labels");
      if (!el) return LEVEL_LABELS_EN;
      var parsed = JSON.parse(el.textContent || "{}");
      return {
        Intermediate: parsed.Intermediate || LEVEL_LABELS_EN.Intermediate,
        Advanced: parsed.Advanced || LEVEL_LABELS_EN.Advanced,
        Power: parsed.Power || LEVEL_LABELS_EN.Power,
      };
    } catch (e) {
      return LEVEL_LABELS_EN;
    }
  })();

  /**
   * KEEP IN SYNC with tutil.search.LessonUserMode. Typical = no badge, like General: the default
   * is never labeled. A Power lesson wears the app's own drill (the Power user mark), next to any
   * level badge.
   */
  function powerBadgeHtml(row) {
    if (!row || row.userMode !== "Power") return "";
    var copy = levelLabels.Power;
    return (
      '<span class="learn-card-power-badge learn-card-tipped" tabindex="0">' +
      '<span class="learn-card-power-mark" aria-hidden="true"></span>' +
      escapeHtml(copy[0]) +
      badgeTipHtml(copy[0], copy[1]) +
      "</span>"
    );
  }

  /**
   * A card badge's hover card: the lessons' own `.lesson-term-tip`, so a badge explains itself in
   * the same styled card as a glossary term or an app-place chip, not the browser's plain tooltip.
   * Its look lives in site.css under "Card badge hover cards".
   */
  function badgeTipHtml(name, note) {
    return (
      '<span class="lesson-term-tip learn-card-badge-tip" role="tooltip">' +
      '<span class="learn-card-badge-tip-name">' +
      escapeHtml(name) +
      "</span>" +
      escapeHtml(note) +
      "</span>"
    );
  }

  /** The card's badges in one row, so a Power badge sits beside the level badge rather than under it. */
  function badgesHtml(inner) {
    return inner ? '<span class="learn-card-badges">' + inner + "</span>" : "";
  }

  function levelBadge(level) {
    var copy = levelLabels[level];
    if (!copy) return null;
    return { label: copy[0], glyph: LEVEL_GLYPHS[level] || "", title: copy[1] };
  }

  /**
   * Card presentation (parity with desktop NamedDossier cards).
   * @param opts.mediaGlyph optional book/TV (or other) before the title
   * @param opts.kicker optional "Start here" line above the title row
   * @param opts.extraClass extra CSS classes on the <a>
   */
  function renderCard(row, opts) {
    opts = opts || {};
    const tags =
      row.tags && row.tags.length
        ? row.tags
            .filter(function (t) {
              return t !== START_HERE_TAG;
            })
            .filter(function (t) {
              // Process tags are not reader-facing; keep them out of the chips.
              return t.indexOf("status:") !== 0 && t !== "draft-shell" && t !== "codegen";
            })
            .slice(0, 6)
            .map(function (t) {
              return (
                '<span class="learn-chip learn-card-tag">' +
                escapeHtml(tagDisplayLabel(t)) +
                "</span>"
              );
            })
            .join(" ")
        : "";
    var marker = regionMarker(row);
    var rLabel = regionLabel(row);
    var st = lessonStatus(row);
    var lvl = lessonLevel(row);
    var lvlBadge = levelBadge(lvl);
    var levelClass = LEVEL_CLASSES[lvl] ? " learn-card-level-" + lvl : "";
    // A deprecated lesson is an earlier version kept beside its rebuild for a reviewer. It wears
    // its own tint and takes the level badge's place, so it cannot be mistaken for a live lesson.
    var deprecated = st === "Deprecated";
    if (deprecated) {
      levelClass += " learn-card-deprecated";
      lvlBadge = {
        label: "Deprecated",
        glyph: "\u2715",
        title: "Earlier version, kept for side-by-side review with the rebuilt lesson",
      };
    }
    var extraClass = opts.extraClass ? " " + opts.extraClass : "";
    var media = opts.mediaGlyph
      ? '<span class="learn-card-media" aria-hidden="true">' +
        escapeHtml(opts.mediaGlyph) +
        "</span>"
      : "";
    // Work-queue markers: each glyph marks what a lesson still LACKS, so the marked cards are the
    // queue and a finished lesson wears neither. 🪗 = not yet an accordion (body does not fold into
    // the sticky outline); 💥 = no illustrated intro card yet (LessonIntroCard). Both retire once
    // their queue is empty.
    var outline = row.outline
      ? ""
      : '<span class="learn-card-outline" title="Not yet in accordion form" aria-label="Not yet in accordion form">🪗</span>';
    var introCard = row.introCard
      ? ""
      : '<span class="learn-card-intro-card" title="Needs an intro-card image" aria-label="Needs an intro-card image">💥</span>';
    // Case-study kicker: a planning-concept row is a household with a question. Concept and
    // tool lessons are not case studies and get no kicker unless the caller passes one.
    var kickerText =
      opts.kicker || (row.purpose === "planning_concept" ? "Case study" : "");
    // The case study household's wealth band (LessonWealthBands), so a reader can tell at a
    // glance whether the case looks like theirs. Its hover says what the band means.
    var household = row.household
      ? '<span class="learn-card-household learn-card-tipped" tabindex="0">' +
        escapeHtml(row.household) +
        badgeTipHtml("Household: " + row.household, row.householdNote || "") +
        "</span>"
      : "";
    var kicker = kickerText || household
      ? '<span class="learn-card-kicker">' +
        escapeHtml(kickerText) +
        (kickerText && household ? '<span class="learn-card-kicker-sep" aria-hidden="true">·</span>' : "") +
        household +
        "</span>"
      : "";
    // Features: engineering group is already the section header — omit on the card.
    // Lessons: section is purpose; engineering group ("Typical cash flows") is noise here.
    var anchor =
      '<a class="learn-card' +
      levelClass +
      extraClass +
      '" href="/designer-site/learn/' +
      encodeURIComponent(row.slug || row.id) +
      '" data-id="' +
      escapeHtml(row.id) +
      '" data-planning-region="' +
      escapeHtml(regionId(row)) +
      '" data-lesson-status="' +
      escapeHtml(st) +
      '" data-presentation="' +
      escapeHtml(row.presentation || "Reading") +
      '" data-level="' +
      escapeHtml(lvl) +
      '" data-user-mode="' +
      escapeHtml(row.userMode || "Typical") +
      '">' +
      badgesHtml(
        (lvlBadge
          ? '<span class="learn-card-level-badge learn-card-tipped" tabindex="0">' +
            '<span class="learn-card-level-glyph" aria-hidden="true">' +
            lvlBadge.glyph +
            "</span>" +
            escapeHtml(lvlBadge.label) +
            badgeTipHtml(lvlBadge.label, lvlBadge.title) +
            "</span>"
          : "") + powerBadgeHtml(row),
      ) +
      kicker +
      '<span class="learn-card-title-row">' +
      '<span class="learn-card-region" title="' +
      escapeHtml(rLabel) +
      '" aria-label="' +
      escapeHtml(rLabel) +
      '">' +
      escapeHtml(marker) +
      "</span>" +
      media +
      '<span class="learn-card-title">' +
      escapeHtml(row.title) +
      "</span>" +
      outline +
      introCard +
      "</span>" +
      '<span class="learn-card-desc muted">' +
      // A case study leads with its situation (who, and what they are asking); the catalog
      // description is the fallback and is often engineering-flavored.
      escapeHtml(truncate(row.situation || row.description, 160)) +
      "</span>" +
      (tags ? '<span class="learn-card-tags">' + tags + "</span>" : "") +
      "</a>";

    // Paired lesson: one card, two formats. The card itself goes to the reading version (the
    // majority format — no audio, skims well), so clicking it is a sensible default rather than a
    // failure to choose. The screencast is an explicit second link, carrying its runtime, because
    // runtime is what actually makes someone pick video.
    //
    // It has to be a SIBLING of the card anchor, not a child: nesting <a> inside <a> is invalid
    // HTML and browsers will unnest it. The wrapper is the grid item; .learn-card still paints the
    // box.
    if (!row.screencastId) return anchor;
    var mins = row.screencastMinutes ? " · " + row.screencastMinutes + " min" : "";
    return (
      '<span class="learn-card-pair">' +
      anchor +
      '<a class="learn-card-watch" href="/designer-site/learn/' +
      encodeURIComponent(row.screencastSlug || row.screencastId) +
      '" title="Watch the screencast version">' +
      escapeHtml(START_HERE_ICONS.Screencast) +
      " Watch" +
      escapeHtml(mins) +
      "</a>" +
      "</span>"
    );
  }

  /**
   * Popular tags across the catalog; excludes START_HERE_TAG (CatalogSelection.topicChipTags).
   */
  function popularTags(catalog) {
    var counts = {};
    catalog.forEach(function (row) {
      (row.tags || []).forEach(function (t) {
        if (!t || t === START_HERE_TAG) return;
        if (TOPIC_CHIP_DENYLIST[t]) return;
        counts[t] = (counts[t] || 0) + 1;
      });
    });
    var used = Object.keys(counts);
    if (used.length === 0) return [];

    var priorityRank = {};
    PRIORITY_TAGS.forEach(function (t, i) {
      priorityRank[t] = i;
    });

    used.sort(function (a, b) {
      var pa = priorityRank.hasOwnProperty(a) ? priorityRank[a] : 1000;
      var pb = priorityRank.hasOwnProperty(b) ? priorityRank[b] : 1000;
      if (pa !== pb) return pa - pb;
      var ca = counts[b] - counts[a];
      if (ca !== 0) return ca;
      return a < b ? -1 : a > b ? 1 : 0;
    });

    return used.slice(0, MAX_TAG_CHIPS);
  }

  function init() {
    const root = document.querySelector(".learn-discovery");
    const catalogEl = document.getElementById("learn-catalog");
    const search = document.getElementById("learn-search");
    const regionChips = document.getElementById("learn-region-chips");
    const tagChips = document.getElementById("learn-tag-chips");
    const startHereEl = document.getElementById("learn-start-here");
    const results = document.getElementById("learn-results");
    const meta = document.getElementById("learn-result-meta");
    if (!root || !catalogEl || !search || !results || !meta) return;

    var catalog = [];
    try {
      catalog = JSON.parse(catalogEl.textContent || "[]");
    } catch (e) {
      results.innerHTML = "<p><em>Could not load the catalog.</em></p>";
      return;
    }

    /**
     * The browse tree (LearnBrowseTree in :tutil-search), drawn as the nav beside the cards.
     * Nodes: { id, title, note?, lessons: [id], children: [node], comingSoon }.
     */
    var treeEl = document.getElementById("learn-tree");
    var crumbEl = document.getElementById("learn-browse-crumb");
    var browseTree = [];
    try {
      var treeData = document.getElementById("learn-browse-tree");
      browseTree = treeData ? JSON.parse(treeData.textContent || "[]") : [];
    } catch (e) {
      browseTree = [];
    }
    var rowsById = {};
    catalog.forEach(function (row) {
      rowsById[row.id] = row;
    });
    /** Selected tree node id; "" = every lesson (the purpose sections). */
    var activeNode = "";
    /**
     * A lesson selected in the tree (single click): its card alone on the right. Paired with
     * activeNode, its parent group, because one lesson sits under many groups.
     */
    var activeLesson = "";

    var query = "";
    var activeTag = "";
    /** Empty = any region; otherwise LessonPlanningRegion id (all|us|ca|mx|de|fr|es). */
    var activeRegion = "";
    /** When true, drop rows tagged tutilis-feature (planning-first browse). */
    var hideTutilisFeature = false;
    /**
     * Draft process: ShellOnly hidden by default. Checkbox present only when draft banner
     * (learn-show-shell-only). When control missing, never hide by status (public LC).
     */
    var showShellOnly = false;
    var shellOnlyEl = document.getElementById("learn-show-shell-only");
    var lastFiltered = [];
    var startHereRows = findStartHereRows(catalog);
    var hideFeatureEl = document.getElementById("learn-hide-tutilis-feature");
    var searchClearBtn = document.getElementById("learn-search-clear");
    // Persist search + surface across chip switches and return from a lesson page (same tab).
    var STORAGE_KEY = "plusauri.learn.filters.v3";

    /**
     * `query` is the source of truth for filtering. The search box is a view of `query`.
     * Never overwrite a non-empty `query` from an empty box inside refresh/filterRows —
     * Safari often clears type=search/text after Back, which used to wipe the remembered
     * string and leave the grid/box out of sync.
     */
    function syncQueryFromSearch() {
      query = search.value || "";
    }

    /** Push `query` into the box (and clear button). Safe to call often. */
    function paintSearchBox() {
      if ((search.value || "") !== (query || "")) {
        search.value = query;
      }
      updateSearchClear();
    }

    function updateSearchClear() {
      if (!searchClearBtn) return;
      var hasText = !!(query && query.length);
      searchClearBtn.hidden = !hasText;
    }

    function clearSearch() {
      query = "";
      search.value = "";
      persistFilters();
      refresh();
      search.focus();
    }

    function loadFiltersFromStorage() {
      try {
        var saved = sessionStorage.getItem(STORAGE_KEY);
        if (!saved) return;
        var parsed = JSON.parse(saved);
        if (!parsed || typeof parsed !== "object") return;
        if (typeof parsed.query === "string") query = parsed.query;
        if (typeof parsed.activeTag === "string") activeTag = parsed.activeTag;
        if (typeof parsed.activeRegion === "string") activeRegion = parsed.activeRegion;
        if (typeof parsed.activeNode === "string") activeNode = parsed.activeNode;
        if (typeof parsed.activeLesson === "string") activeLesson = parsed.activeLesson;
        if (typeof parsed.hideTutilisFeature === "boolean") {
          hideTutilisFeature = parsed.hideTutilisFeature;
        }
        if (typeof parsed.showShellOnly === "boolean") {
          showShellOnly = parsed.showShellOnly;
        }
      } catch (e) {
        /* ignore */
      }
    }

    /**
     * Push remembered filters into the DOM (search box, checkboxes, chips).
     * Always paint the box from `query` — never the reverse — before refresh.
     */
    function applyFiltersToDom() {
      paintSearchBox();
      if (hideFeatureEl) hideFeatureEl.checked = hideTutilisFeature;
      if (shellOnlyEl) shellOnlyEl.checked = showShellOnly;
      setActiveRegionChip();
    }

    function isLearnIndexPath() {
      var p = window.location.pathname || "";
      return p === "/designer-site/learn" || p === "/designer-site/learn/";
    }

    /**
     * Keep the /learn history entry's ?q= in sync so Safari Back restores the query
     * even when sessionStorage or the input value is flaky.
     */
    function syncQueryToUrl() {
      if (!isLearnIndexPath()) return;
      try {
        var params = new URLSearchParams(window.location.search);
        var cur = params.get("q") || "";
        var curIn = params.get("in") || "";
        if ((query || "") === cur && (activeNode || "") === curIn) return;
        if (query) params.set("q", query);
        else params.delete("q");
        if (activeNode) params.set("in", activeNode);
        else params.delete("in");
        var nextQs = params.toString();
        var next =
          window.location.pathname + (nextQs ? "?" + nextQs : "") + window.location.hash;
        window.history.replaceState(null, "", next);
      } catch (e) {
        /* ignore */
      }
    }

    function persistFilters() {
      try {
        sessionStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({
            query: query,
            activeTag: activeTag,
            activeRegion: activeRegion,
            activeNode: activeNode,
            activeLesson: activeLesson,
            hideTutilisFeature: hideTutilisFeature,
            showShellOnly: showShellOnly,
          })
        );
      } catch (e) {
        /* ignore */
      }
      syncQueryToUrl();
    }

    /** Snapshot search + filters before leaving for a lesson (or bfcache). */
    function persistFiltersBeforeLeave() {
      // Prefer live box if it has text; otherwise keep in-memory query (Safari may already
      // have cleared the box by pagehide).
      var box = search.value || "";
      if (box) query = box;
      persistFilters();
    }

    /**
     * Full restore after navigation back to /learn.
     * Order: storage → URL ?q= (wins for this history entry) → paint box → filter.
     * Deferred passes defeat Safari clearing the input after first paint.
     */
    function restoreDiscoveryState() {
      loadFiltersFromStorage();
      try {
        var params = new URLSearchParams(window.location.search);
        var qParam = params.get("q");
        if (qParam !== null) query = qParam;
        var inParam = params.get("in");
        if (inParam !== null && inParam !== activeNode) {
          activeNode = inParam;
          activeLesson = "";
        }
      } catch (e) {
        /* ignore */
      }
      applyFiltersToDom();
      refresh();
      function reassert() {
        loadFiltersFromStorage();
        try {
          var params = new URLSearchParams(window.location.search);
          var qParam = params.get("q");
          if (qParam !== null) query = qParam;
          var inParam = params.get("in");
          if (inParam !== null) activeNode = inParam;
        } catch (e2) {
          /* ignore */
        }
        paintSearchBox();
        refresh();
      }
      window.setTimeout(reassert, 0);
      // Safari sometimes applies history form restore after the 0-timeout.
      window.setTimeout(reassert, 50);
      window.setTimeout(reassert, 200);
    }

    loadFiltersFromStorage();
    // Keep ?q= if present (search restore). A legacy ?surface= (old bookmarks, the former home
    // chips) is stripped: there is one catalog now and nothing to select.
    try {
      var params = new URLSearchParams(window.location.search);
      var qsQ = params.get("q");
      if (qsQ !== null) query = qsQ;
      var qsIn = params.get("in");
      if (qsIn !== null) activeNode = qsIn;
      if (params.has("surface")) {
        params.delete("surface");
        var nextQs = params.toString();
        var clean =
          window.location.pathname + (nextQs ? "?" + nextQs : "") + window.location.hash;
        window.history.replaceState(null, "", clean);
      }
    } catch (e) {
      /* ignore */
    }

    /**
     * A region chip with nothing published behind it is disabled rather than shown as an empty
     * list: the chip row is a promise about coverage, and a dead filter is a broken one. Counted
     * from the catalog the page was handed, so the markup never has to know which regions are
     * live. `all` (globe) counts rows scoped to every region; the Any chip is never disabled.
     */
    /** True while the region row is hidden in the markup — the filter is then pinned to Any. */
    function regionFilterHidden() {
      return !regionChips || regionChips.hidden;
    }

    function disableEmptyRegionChips() {
      if (!regionChips) return;
      var counts = {};
      catalog.forEach(function (row) {
        var r = row.planningRegion || "all";
        counts[r] = (counts[r] || 0) + 1;
      });
      regionChips.querySelectorAll("button[data-region]").forEach(function (btn) {
        var r = btn.getAttribute("data-region") || "";
        if (r === "") return;
        var empty = !(counts[r] > 0);
        btn.disabled = empty;
        btn.classList.toggle("is-under-development", empty);
        if (empty) {
          btn.setAttribute("title", "Under development");
          btn.setAttribute("aria-disabled", "true");
          if (activeRegion === r) activeRegion = "";
        } else {
          btn.removeAttribute("aria-disabled");
        }
      });
    }

    function setActiveRegionChip() {
      if (!regionChips) return;
      regionChips.querySelectorAll("button[data-region]").forEach(function (btn) {
        var r = btn.getAttribute("data-region") || "";
        var on = r === activeRegion;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      updateSearchRegionCue();
    }

    /** Flag/globe left of search when region ≠ Any (click clears filter). */
    function updateSearchRegionCue() {
      var cue = document.getElementById("learn-search-region-cue");
      if (!cue) return;
      var meta = regionCueMeta(activeRegion);
      if (!meta) {
        cue.hidden = true;
        cue.textContent = "";
        cue.removeAttribute("data-region");
        return;
      }
      cue.hidden = false;
      cue.textContent = meta.marker;
      cue.setAttribute("data-region", activeRegion);
      cue.setAttribute(
        "title",
        meta.label + " — click to show any region",
      );
      cue.setAttribute("aria-label", meta.label + ". Clear region filter");
    }

    /**
     * Pinned on every surface — two Getting Around cards (reading book + screencast TV).
     * Same card chrome as the grid below (globe + tags); filtered out of search results.
     */
    function renderStartHere() {
      if (!startHereEl) return;
      if (!startHereRows.length) {
        startHereEl.hidden = true;
        startHereEl.innerHTML = "";
        return;
      }
      startHereEl.hidden = false;
      var cards = startHereRows
        .map(function (row) {
          return renderCard(row, {
            // "Tour", not "Start here": the roadmap band above (/start-here) is the page's one
            // "start here", and it is about starting a plan. These start you in the tool.
            kicker: "Tour",
            mediaGlyph: startHereMediaGlyph(row),
            extraClass: "learn-card-start-here",
          });
        })
        .join("");
      startHereEl.innerHTML =
        '<div class="learn-start-here-heading muted">New to Tutilis? Take the tour</div>' +
        '<div class="learn-card-grid learn-start-here-grid">' +
        cards +
        "</div>";
      // Third card: the entry-speed clip (IntroVideoPoster.kt). Server-rendered as a <template>
      // so its copy is localized in Kotlin; cloned here so it wears the same card chrome and
      // sits in the same row as the two tours. intro-video.js owns what happens on press.
      var clipTemplate = document.getElementById("intro-video-card");
      var grid = startHereEl.querySelector(".learn-start-here-grid");
      if (clipTemplate && grid && "content" in clipTemplate) {
        grid.appendChild(clipTemplate.content.cloneNode(true));
      }
    }

    function renderTagChips() {
      if (!tagChips) return;
      var tags = popularTags(catalog);
      if (tags.length === 0) {
        tagChips.innerHTML = "";
        tagChips.hidden = true;
        activeTag = "";
        return;
      }
      if (activeTag && tags.indexOf(activeTag) < 0) {
        activeTag = "";
      }
      tagChips.hidden = false;
      var html =
        '<span class="learn-tag-chips-label muted">Topics</span>' +
        '<button type="button" data-tag="" class="learn-chip' +
        (activeTag === "" ? " is-active" : "") +
        '" aria-pressed="' +
        (activeTag === "" ? "true" : "false") +
        '">All</button>';
      tags.forEach(function (t) {
        var on = activeTag === t;
        html +=
          '<button type="button" data-tag="' +
          escapeHtml(t) +
          '" class="learn-chip' +
          (on ? " is-active" : "") +
          '" aria-pressed="' +
          (on ? "true" : "false") +
          '">' +
          escapeHtml(tagDisplayLabel(t)) +
          "</button>";
      });
      tagChips.innerHTML = html;
    }

    function filterRows(keepStartHere) {
      // Use in-memory `query` only. Callers that change the box (input, clear, chips) must
      // syncQueryFromSearch first. Do not read the box here — Safari Back often leaves it empty.
      var qTokens = tokens(query);
      return catalog.filter(function (row) {
        // Pinned Start here pair is always above the list — not in search-driven groups. The
        // tree keeps them: browsing Tutilis should list the tours too.
        if (
          !keepStartHere &&
          (isStartHerePinnedId(row.id, startHereRows) || hasTag(row, START_HERE_TAG))
        ) {
          return false;
        }
        if (hideTutilisFeature && hasTag(row, TUTILIS_FEATURE_TAG)) return false;
        // Draft only: hide ShellOnly unless toggle is on (control absent on public LC).
        if (shellOnlyEl && !showShellOnly && lessonStatus(row) === "ShellOnly") {
          return false;
        }
        if (!matchesRegion(row, activeRegion)) return false;
        // If user both hides Tutilis features and has that Topics chip on, show empty honestly.
        return matches(row, qTokens) && hasTag(row, activeTag);
      });
    }


    // ── Browse tree ────────────────────────────────────────────────────────────────────────
    //
    // Groups fold per viewer (localStorage, like the section folds). A first visit opens Case
    // studies and its Stage of life group, so the life stages (Early career, Accumulating, …) are
    // the first thing the tree offers, each still folded. While a search is on, every group with a match is shown
    // open and every group without one is hidden: the structure stays, filtered down. That forced
    // shape is not the reader's choice and is not saved; a caret clicked mid-search is remembered
    // only until the query changes.
    // v2 (2026-10-26): the default gained Stage of life. A saved fold beats the default, so the old
    // key would have hidden the new one from anyone who had already folded Case studies.
    var TREE_OPEN_KEY = "plusauri.learn.treeOpen.v2";
    var TREE_DEFAULT_OPEN = { "case-studies": true, "case-studies/stage": true };
    var narrowedToggles = {};
    var narrowedFor = null;

    function loadTreeOpen() {
      try {
        var parsed = JSON.parse(window.localStorage.getItem(TREE_OPEN_KEY) || "{}");
        return parsed && typeof parsed === "object" ? parsed : {};
      } catch (e) {
        return {};
      }
    }

    function saveTreeOpen(id, open) {
      try {
        var saved = loadTreeOpen();
        saved[id] = open;
        window.localStorage.setItem(TREE_OPEN_KEY, JSON.stringify(saved));
      } catch (e) {
        // Storage blocked: the fold still works for this page view.
      }
    }

    function findNode(id, nodes, trail) {
      nodes = nodes || browseTree;
      trail = trail || [];
      for (var i = 0; i < nodes.length; i++) {
        var path = trail.concat([nodes[i]]);
        if (nodes[i].id === id) return path;
        var deeper = findNode(id, nodes[i].children || [], path);
        if (deeper) return deeper;
      }
      return null;
    }

    function lessonsUnder(node) {
      var seen = {};
      var out = [];
      (function walk(n) {
        (n.lessons || []).forEach(function (id) {
          if (!seen[id]) {
            seen[id] = true;
            out.push(id);
          }
        });
        (n.children || []).forEach(walk);
      })(node);
      return out;
    }

    function hasBody(node) {
      return (node.children && node.children.length) || (node.lessons && node.lessons.length);
    }

    function nodeIsOpen(node, narrowed, selectedTrail) {
      if (narrowed) {
        var t = narrowedToggles[node.id];
        return typeof t === "boolean" ? t : true;
      }
      // Ancestors of the selected group are always open (the selection must be visible). The
      // selected group itself opens unless the reader has closed it.
      if (selectedTrail.indexOf(node.id) >= 0 && node.id !== activeNode) return true;
      var saved = loadTreeOpen()[node.id];
      if (typeof saved === "boolean") return saved;
      return node.id === activeNode || !!TREE_DEFAULT_OPEN[node.id];
    }

    function treeLessonHtml(id, depth, parentId) {
      var row = rowsById[id];
      if (!row) return "";
      var selected = id === activeLesson && parentId === activeNode;
      return (
        '<li class="learn-tree-lesson' +
        (selected ? " is-selected" : "") +
        '" style="--depth:' +
        depth +
        '"><a href="/designer-site/learn/' +
        encodeURIComponent(row.slug || row.id) +
        '" data-id="' +
        escapeHtml(row.id) +
        '" data-lesson="' +
        escapeHtml(row.id) +
        '" data-parent="' +
        escapeHtml(parentId) +
        '"' +
        (selected ? ' aria-current="true"' : "") +
        ' title="' +
        escapeHtml(row.title) +
        '">' +
        escapeHtml(row.title) +
        "</a></li>"
      );
    }

    function treeNodeHtml(node, depth, visible, narrowed, selectedTrail) {
      var ids = lessonsUnder(node).filter(function (id) {
        return visible[id];
      });
      // "Soon": a promised node with nothing published under it yet. A soon *branch* (Cogilis on
      // launch) still opens, so its planned sections are visible; a soon *leaf* has nothing to
      // open. A search hides both — they cannot match.
      var soon = node.comingSoon && lessonsUnder(node).length === 0;
      var soonLeaf = soon && !(node.children && node.children.length);
      if (!ids.length && !(soon && !narrowed)) return "";
      var open = !soonLeaf && nodeIsOpen(node, narrowed, selectedTrail);
      var selected = node.id === activeNode && !activeLesson;
      var inner = "";
      if (open) {
        (node.children || []).forEach(function (child) {
          inner += treeNodeHtml(child, depth + 1, visible, narrowed, selectedTrail);
        });
        (node.lessons || []).forEach(function (id) {
          if (visible[id]) inner += treeLessonHtml(id, depth + 1, node.id);
        });
      }
      var caret = hasBody(node)
        ? '<button type="button" class="learn-tree-caret" data-toggle="' +
          escapeHtml(node.id) +
          '" aria-expanded="' +
          (open ? "true" : "false") +
          '" aria-label="' +
          (open ? "Collapse " : "Expand ") +
          escapeHtml(node.title) +
          '"></button>'
        : '<span class="learn-tree-caret is-empty" aria-hidden="true"></span>';
      return (
        '<li class="learn-tree-node' +
        (depth === 0 ? " is-top" : "") +
        (open ? " is-open" : "") +
        (soon ? " is-soon" : "") +
        (soonLeaf ? " is-soon-leaf" : "") +
        '" data-node="' +
        escapeHtml(node.id) +
        '">' +
        '<div class="learn-tree-row' +
        (selected ? " is-selected" : "") +
        '" style="--depth:' +
        depth +
        '">' +
        caret +
        '<button type="button" class="learn-tree-label" data-select="' +
        escapeHtml(node.id) +
        '"' +
        (selected ? ' aria-current="true"' : "") +
        (node.note ? ' title="' + escapeHtml(node.note) + '"' : "") +
        (soonLeaf ? " disabled" : "") +
        ">" +
        '<span class="learn-tree-title">' +
        escapeHtml(node.title) +
        "</span>" +
        '<span class="learn-tree-count">' +
        (soon ? "soon" : ids.length) +
        "</span></button></div>" +
        (inner ? '<ul class="learn-tree-children">' + inner + "</ul>" : "") +
        "</li>"
      );
    }

    // ── Open / close one level ─────────────────────────────────────────────────────────────
    //
    // Two small buttons on the All lessons row stand in for "expand topics / collapse topics /
    // expand subtopics / collapse subtopics": one opens the shallowest level that still has a
    // closed group, the other closes the deepest open one. They adapt to however deep the tree is
    // and cost one row's corner. + and − do the same from the keyboard inside the tree.
    var CHEVRONS_DOWN =
      '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">' +
      '<path d="M4 3.5l4 4 4-4M4 8.5l4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"/></svg>';
    var CHEVRONS_UP =
      '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false">' +
      '<path d="M4 7.5l4-4 4 4M4 12.5l4-4 4 4" fill="none" stroke="currentColor" stroke-width="1.6" ' +
      'stroke-linecap="round" stroke-linejoin="round"/></svg>';

    /**
     * Every foldable group the reader can currently see, with its depth and fold state. A group is
     * foldable when it has something to show (children or lessons) and is not a "soon" leaf.
     */
    function visibleGroups(narrowed, trail, visibleIds) {
      var out = [];
      (function walk(nodes, depth) {
        nodes.forEach(function (node) {
          var ids = lessonsUnder(node).filter(function (id) {
            return !visibleIds || visibleIds[id];
          });
          var soon = node.comingSoon && lessonsUnder(node).length === 0;
          if (!ids.length && !(soon && !narrowed)) return;
          var hasKids = node.children && node.children.length;
          if (!hasKids && !(node.lessons && node.lessons.length)) return;
          var open = nodeIsOpen(node, narrowed, trail);
          out.push({ node: node, depth: depth, open: open });
          if (open && hasKids) walk(node.children, depth + 1);
        });
      })(browseTree, 0);
      return out;
    }

    var lastVisibleIds = null;

    function levelPlan(narrowed, trail) {
      var groups = visibleGroups(narrowed, trail, lastVisibleIds);
      var closed = groups.filter(function (g) {
        return !g.open;
      });
      var open = groups.filter(function (g) {
        return g.open;
      });
      var expandDepth = closed.length
        ? Math.min.apply(null, closed.map(function (g) { return g.depth; }))
        : -1;
      var collapseDepth = open.length
        ? Math.max.apply(null, open.map(function (g) { return g.depth; }))
        : -1;
      return {
        expand: closed.filter(function (g) { return g.depth === expandDepth; }),
        collapse: open.filter(function (g) { return g.depth === collapseDepth; }),
      };
    }

    function levelStepperHtml(narrowed, trail) {
      var plan = levelPlan(narrowed, trail);
      function btn(dir, svg, label) {
        var off = dir > 0 ? !plan.expand.length : !plan.collapse.length;
        return (
          '<button type="button" class="learn-tree-level" data-level="' +
          dir +
          '" title="' +
          label +
          '" aria-label="' +
          label +
          '"' +
          (off ? " disabled" : "") +
          ">" +
          svg +
          "</button>"
        );
      }
      return (
        '<span class="learn-tree-levels">' +
        btn(-1, CHEVRONS_UP, "Close one level (−)") +
        btn(1, CHEVRONS_DOWN, "Open one more level (+)") +
        "</span>"
      );
    }

    function stepLevel(dir) {
      var narrowed = tokens(query).length > 0;
      var trail = (findNode(activeNode) || []).map(function (n) { return n.id; });
      var plan = levelPlan(narrowed, trail);
      (dir > 0 ? plan.expand : plan.collapse).forEach(function (g) {
        setTreeOpen(g.node.id, dir > 0);
      });
      persistFilters();
      refresh();
    }

    function renderTree(visibleRows, narrowed) {
      if (!treeEl) return;
      if (!browseTree.length) {
        treeEl.hidden = true;
        return;
      }
      if (narrowedFor !== query) {
        narrowedToggles = {};
        narrowedFor = query;
      }
      var visible = {};
      visibleRows.forEach(function (row) {
        visible[row.id] = true;
      });
      lastVisibleIds = visible;
      var trail = (findNode(activeNode) || []).map(function (n) {
        return n.id;
      });
      var html =
        '<ul class="learn-tree-root">' +
        '<li class="learn-tree-node is-top is-all"><div class="learn-tree-row' +
        (activeNode ? "" : " is-selected") +
        '" style="--depth:0"><span class="learn-tree-caret is-empty" aria-hidden="true"></span>' +
        '<button type="button" class="learn-tree-label" data-select=""' +
        (activeNode ? "" : ' aria-current="true"') +
        '><span class="learn-tree-title">All lessons</span><span class="learn-tree-count">' +
        visibleRows.length +
        "</span></button>" +
        levelStepperHtml(narrowed, trail) +
        "</div></li>";
      browseTree.forEach(function (node) {
        html += treeNodeHtml(node, 0, visible, narrowed, trail);
      });
      html += "</ul>";
      // Re-drawing replaces every row; keep keyboard focus (and the list's scroll) on the same row.
      var focused = treeEl.contains(document.activeElement) ? itemKey(document.activeElement) : null;
      var oldList = treeEl.querySelector(".learn-tree-root");
      var scrollTop = oldList ? oldList.scrollTop : 0;
      treeEl.innerHTML = html;
      treeEl.hidden = false;
      var newList = treeEl.querySelector(".learn-tree-root");
      if (newList) newList.scrollTop = scrollTop;
      if (focused) {
        var again = treeEl.querySelector(focused);
        if (again) again.focus({ preventScroll: true });
      }
    }

    function renderCrumb(trail, lessonRow) {
      if (!crumbEl) return;
      if (!trail || !trail.length) {
        crumbEl.hidden = true;
        crumbEl.innerHTML = "";
        return;
      }
      var parts = ['<button type="button" class="learn-crumb-link" data-select="">All lessons</button>'];
      trail.forEach(function (node, i) {
        var last = i === trail.length - 1 && !lessonRow;
        parts.push(
          last
            ? '<span class="learn-crumb-here" aria-current="page">' + escapeHtml(node.title) + "</span>"
            : '<button type="button" class="learn-crumb-link" data-select="' +
                escapeHtml(node.id) +
                '">' +
                escapeHtml(node.title) +
                "</button>",
        );
      });
      if (lessonRow) {
        parts.push('<span class="learn-crumb-here" aria-current="page">' + escapeHtml(lessonRow.title) + "</span>");
      }
      var note = lessonRow ? "" : trail[trail.length - 1].note;
      crumbEl.innerHTML =
        '<nav class="learn-crumb-trail" aria-label="Where you are">' +
        parts.join('<span class="learn-crumb-sep" aria-hidden="true">›</span>') +
        "</nav>" +
        (note ? '<p class="learn-crumb-note muted">' + escapeHtml(note) + "</p>" : "");
      crumbEl.hidden = false;
    }

    /** A promised area with no lessons yet: its planned sections, so the shape reads as a plan. */
    function comingSoonHtml(node) {
      var parts = (node.children && node.children.length ? node.children : [node])
        .map(function (child) {
          return (
            '<li><span class="learn-soon-title">' +
            escapeHtml(child.title) +
            "</span>" +
            (child.note ? ' <span class="muted">— ' + escapeHtml(child.note) + "</span>" : "") +
            "</li>"
          );
        })
        .join("");
      return (
        '<div class="learn-soon"><p class="learn-soon-lede"><strong>Lessons are on the way.</strong> ' +
        "This is what they will cover:</p><ul>" +
        parts +
        "</ul></div>"
      );
    }

    /** Cards for one tree node: a section per child for a branch, one grid for a leaf. */
    function nodeResultsHtml(node, visible) {
      function grid(ids) {
        return (
          '<div class="learn-card-grid">' +
          ids
            .map(function (id) {
              return renderCard(rowsById[id]);
            })
            .join("") +
          "</div>"
        );
      }
      function shown(n) {
        return lessonsUnder(n).filter(function (id) {
          return visible[id];
        });
      }
      if (!node.children || !node.children.length) return grid(shown(node));
      var html = "";
      node.children.forEach(function (child) {
        var ids = shown(child);
        if (!ids.length) return;
        html +=
          '<h3 class="learn-group-title"><button type="button" class="learn-group-link" data-select="' +
          escapeHtml(child.id) +
          '">' +
          escapeHtml(child.title) +
          '</button> <span class="learn-section-count">' +
          ids.length +
          "</span></h3>" +
          grid(ids);
      });
      return html;
    }

    /**
     * Select a group. [open] (when given) is the fold it should end in — a row click toggles, so
     * the whole row is the fold control, not only the small caret.
     */
    function selectNode(id, open) {
      activeNode = id || "";
      activeLesson = "";
      if (activeNode && typeof open === "boolean") setTreeOpen(activeNode, open);
      persistFilters();
      refresh();
      var top = results.getBoundingClientRect().top;
      if (top < 0 && typeof results.scrollIntoView === "function") {
        (crumbEl && !crumbEl.hidden ? crumbEl : results).scrollIntoView({ block: "start" });
      }
    }

    function refresh() {
      if (regionFilterHidden()) activeRegion = "";
      // Topic chips and the hide-features toggle left the markup on 2026-09-13; a session that
      // remembers either must not keep filtering invisibly.
      if (!tagChips) activeTag = "";
      if (!hideFeatureEl) hideTutilisFeature = false;
      // Keep the box aligned with `query` (source of truth). Do not read empty box → query.
      paintSearchBox();
      setActiveRegionChip();
      renderStartHere();
      renderTagChips();
      var qTokens = tokens(query);
      // A remembered or linked node that no longer exists (renamed, emptied) falls back to all.
      var trail = activeNode ? findNode(activeNode) : null;
      if (activeNode && !trail) activeNode = "";
      var browsable = filterRows(true);
      // A selected lesson stays selected only while it is still listed under its group.
      if (
        activeLesson &&
        (!trail ||
          lessonsUnder(trail[trail.length - 1]).indexOf(activeLesson) < 0 ||
          !browsable.some(function (r) {
            return r.id === activeLesson;
          }))
      ) {
        activeLesson = "";
      }
      renderTree(browsable, qTokens.length > 0);
      var lessonRow = activeLesson ? rowsById[activeLesson] : null;
      renderCrumb(trail, lessonRow);
      if (lessonRow) {
        lastFiltered = [lessonRow];
        results.innerHTML =
          '<div class="learn-card-grid learn-card-single">' +
          renderCard(lessonRow) +
          '</div><p class="learn-open-lesson-line"><a class="learn-open-lesson" href="/designer-site/learn/' +
          encodeURIComponent(lessonRow.slug || lessonRow.id) +
          '">Open the lesson →</a> <span class="muted">or double-click it in the list</span></p>';
        meta.textContent = "";
        return;
      }
      var filtered = filterRows();
      if (trail) {
        var visible = {};
        browsable.forEach(function (row) {
          visible[row.id] = true;
        });
        var node = trail[trail.length - 1];
        filtered = lessonsUnder(node)
          .filter(function (id) {
            return visible[id];
          })
          .map(function (id) {
            return rowsById[id];
          });
        lastFiltered = filtered;
        if (!filtered.length && node.comingSoon && !qTokens.length) {
          results.innerHTML = comingSoonHtml(node);
          meta.textContent = "";
          return;
        }
        if (!filtered.length) {
          results.innerHTML =
            '<p class="learn-empty"><em>' +
            escapeHtml(qTokens.length ? "No lessons here match your search." : "Nothing here yet.") +
            "</em></p>";
          meta.textContent = "";
          return;
        }
        results.innerHTML = nodeResultsHtml(node, visible);
        var count = filtered.length;
        meta.textContent =
          count +
          (qTokens.length ? (count === 1 ? " match" : " matches") : count === 1 ? " lesson" : " lessons");
        return;
      }
      lastFiltered = filtered;

      if (filtered.length === 0) {
        var emptyMsg =
          qTokens.length ||
          activeTag ||
          activeRegion ||
          hideTutilisFeature ||
          (shellOnlyEl && !showShellOnly)
            ? "No topics match your search."
            : "Nothing published yet.";
        results.innerHTML = '<p class="learn-empty"><em>' + escapeHtml(emptyMsg) + "</em></p>";
        meta.textContent = "";
        return;
      }

      var narrowed = !!(qTokens.length || activeTag || activeRegion);

      // KEEP IN SYNC with CatalogSelection.groupByDiscoverySection.
      var bySection = {};
      filtered.forEach(function (row) {
        var g = discoverySectionTitle(row);
        if (!bySection[g]) bySection[g] = [];
        bySection[g].push(row);
      });
      var html = "";
      Object.keys(bySection)
        .sort(function (a, b) {
          var ka = discoverySectionSortKey(a);
          var kb = discoverySectionSortKey(b);
          if (ka !== kb) return ka - kb;
          return a < b ? -1 : a > b ? 1 : 0;
        })
        .forEach(function (g) {
          var grid = '<div class="learn-card-grid">';
          bySection[g].forEach(function (row) {
            grid += renderCard(row);
          });
          grid += "</div>";
          if (!(g in SECTION_FOLD_DEFAULT_OPEN)) {
            html += '<h3 class="learn-group-title">' + escapeHtml(g) + "</h3>" + grid;
            return;
          }
          // A search or filter opens every section it matched in, so no result sits folded
          // away. That forced open is not the reader's choice and is not saved.
          var open = narrowed || sectionStartsOpen(g);
          html +=
            '<details class="learn-section-fold" data-section="' +
            escapeHtml(g) +
            '"' +
            (open ? " open" : "") +
            '><summary><h3 class="learn-group-title">' +
            escapeHtml(g) +
            ' <span class="learn-section-count">' +
            bySection[g].length +
            "</span></h3></summary>" +
            grid +
            "</details>";
        });
      results.innerHTML = html;
      results.querySelectorAll("details.learn-section-fold").forEach(function (fold) {
        fold.addEventListener("toggle", function () {
          if (!narrowed) saveSectionFold(fold.getAttribute("data-section"), fold.open);
        });
      });
      var n = filtered.length;
      var label =
        qTokens.length || activeTag
          ? n + (n === 1 ? " match" : " matches")
          : n + (n === 1 ? " topic" : " topics");
      var regionMeta = "";
      if (activeRegion === "all") regionMeta = " · 🌐 globe";
      else if (activeRegion === "us") regionMeta = " · 🇺🇸 US";
      else if (activeRegion === "ca") regionMeta = " · 🇨🇦 Canada";
      else if (activeRegion === "mx") regionMeta = " · 🇲🇽 Mexico";
      else if (activeRegion === "de") regionMeta = " · 🇩🇪 Germany";
      else if (activeRegion === "fr") regionMeta = " · 🇫🇷 France";
      else if (activeRegion === "es") regionMeta = " · 🇪🇸 Spain";
      meta.textContent =
        label +
        regionMeta +
        (activeTag ? " · " + tagDisplayLabel(activeTag) : "") +
        (hideTutilisFeature ? " · planning focus" : "") +
        (shellOnlyEl && showShellOnly ? " · shells shown" : "");
    }

    function openFirstMatch() {
      if (!lastFiltered.length) return;
      var segment = lastFiltered[0].slug || lastFiltered[0].id;
      if (!segment) return;
      persistFiltersBeforeLeave();
      window.location.href = "/designer-site/learn/" + encodeURIComponent(segment);
    }

    /** Result cards in visual/filter order (section grids as rendered), skipping folded sections. */
    function resultCards() {
      return Array.prototype.filter.call(results.querySelectorAll("a.learn-card"), function (card) {
        var fold = card.closest("details.learn-section-fold");
        return !fold || fold.open;
      });
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

    /**
     * From search: Tab jumps to the first matching lesson card.
     * On cards: Tab / Shift+Tab walk the filtered list explicitly (native tab order was
     * skipping remaining cards and jumping to browser chrome after the first).
     */
    function focusFirstResultCard() {
      var cards = resultCards();
      if (!cards.length) return false;
      return focusResultCard(cards[0]);
    }

    function indexOfFocusedCard(cards) {
      var active = document.activeElement;
      if (!active) return -1;
      for (var i = 0; i < cards.length; i++) {
        if (cards[i] === active || cards[i].contains(active)) return i;
      }
      return -1;
    }

    // Chip mousedown steals focus from the search field before click fires. Remember if the user
    // was typing so we can put the caret back after filter/tag changes (space-saving discovery).
    var restoreSearchFocus = false;
    function markSearchFocusForChip(ev) {
      if (!ev.target.closest("button")) return;
      restoreSearchFocus = document.activeElement === search;
    }
    function maybeRestoreSearchFocus() {
      if (!restoreSearchFocus) return;
      restoreSearchFocus = false;
      // Defer past the click's default focus move so the caret actually lands in the field.
      window.setTimeout(function () {
        search.focus();
      }, 0);
    }

    /** Apply a chip-driven filter change and re-run discovery immediately. */
    function applyFiltersAndRefresh(opts) {
      opts = opts || {};
      syncQueryFromSearch();
      persistFilters();
      refresh();
      if (opts.restoreSearchFocus) maybeRestoreSearchFocus();
      if (opts.focusSearch) search.focus();
    }

    if (regionChips) {
      regionChips.addEventListener("mousedown", markSearchFocusForChip);
      regionChips.addEventListener("click", function (ev) {
        var btn = ev.target.closest("button[data-region]");
        if (!btn || !regionChips.contains(btn)) return;
        // data-region is always present ("" for Any). Prefer dataset so "" is not dropped.
        activeRegion =
          btn.dataset && typeof btn.dataset.region === "string"
            ? btn.dataset.region
            : btn.getAttribute("data-region") || "";
        applyFiltersAndRefresh({ restoreSearchFocus: true });
      });
    }

    var regionCueBtn = document.getElementById("learn-search-region-cue");
    if (regionCueBtn) {
      regionCueBtn.addEventListener("click", function () {
        activeRegion = "";
        applyFiltersAndRefresh({ focusSearch: true });
      });
    }

    if (tagChips) {
      tagChips.addEventListener("mousedown", markSearchFocusForChip);
      // Event delegation on the container — chips are rebuilt on each refresh.
      tagChips.addEventListener("click", function (ev) {
        var btn = ev.target.closest("button[data-tag]");
        if (!btn || !tagChips.contains(btn)) return;
        var t = btn.getAttribute("data-tag") || "";
        activeTag = t === activeTag ? "" : t;
        applyFiltersAndRefresh({ restoreSearchFocus: true });
      });
    }

    /** A fold the reader chose: remembered, unless a search is shaping the tree right now. */
    function setTreeOpen(id, open) {
      if (tokens(query).length) narrowedToggles[id] = open;
      else saveTreeOpen(id, open);
      // Closing a group that holds the selection moves the selection up to it, as a file
      // explorer does, so the selection is never hidden inside a closed group.
      if (!open) {
        var trail = (findNode(activeNode) || []).map(function (n) { return n.id; });
        var at = trail.indexOf(id);
        if (at >= 0 && (at < trail.length - 1 || activeLesson)) {
          activeNode = id;
          activeLesson = "";
        }
      }
    }

    /** Single click on a lesson in the tree: its card on the right, the row marked. */
    function selectLesson(id, parentId) {
      activeNode = parentId || "";
      activeLesson = id;
      persistFilters();
      refresh();
    }

    /** The tree's visible, focusable rows in reading order: group labels and lesson links. */
    function treeItems() {
      if (!treeEl) return [];
      return Array.prototype.slice.call(
        treeEl.querySelectorAll(".learn-tree-label:not([disabled]), a[data-lesson]"),
      );
    }

    function itemKey(el) {
      if (el.hasAttribute("data-level")) {
        return '[data-level="' + el.getAttribute("data-level") + '"]';
      }
      if (el.hasAttribute("data-toggle")) {
        return '[data-toggle="' + el.getAttribute("data-toggle") + '"]';
      }
      if (el.hasAttribute("data-lesson")) {
        return (
          'a[data-lesson="' +
          el.getAttribute("data-lesson") +
          '"][data-parent="' +
          el.getAttribute("data-parent") +
          '"]'
        );
      }
      return '.learn-tree-label[data-select="' + el.getAttribute("data-select") + '"]';
    }

    /** Select what a tree row stands for without folding anything, and keep focus on it. */
    function activateItem(el) {
      var key = itemKey(el);
      if (el.hasAttribute("data-lesson")) {
        selectLesson(el.getAttribute("data-lesson"), el.getAttribute("data-parent"));
      } else {
        selectNode(el.getAttribute("data-select") || "");
      }
      var again = treeEl.querySelector(key);
      if (again) {
        again.focus();
        if (typeof again.scrollIntoView === "function") again.scrollIntoView({ block: "nearest" });
      }
    }

    /**
     * Ctrl-N / Ctrl-P (and ↓ / ↑) walk the tree's visible rows and select as they go, like a file
     * explorer. Ctrl-N in the search box steps into the tree. On Windows and Linux a browser may
     * keep Ctrl-N for itself (new window); the arrows always work.
     */
    function treeStep(ev) {
      var ctrlOnly = ev.ctrlKey && !ev.metaKey && !ev.altKey && !ev.shiftKey;
      var plain = !ev.ctrlKey && !ev.metaKey && !ev.altKey && !ev.shiftKey;
      var k = (ev.key || "").toLowerCase();
      if ((ctrlOnly && k === "n") || (plain && ev.key === "ArrowDown")) return 1;
      if ((ctrlOnly && k === "p") || (plain && ev.key === "ArrowUp")) return -1;
      return 0;
    }

    if (treeEl) {
      treeEl.addEventListener("keydown", function (ev) {
        if (!ev.ctrlKey && !ev.metaKey && !ev.altKey) {
          if (ev.key === "+" || ev.key === "=") {
            ev.preventDefault();
            stepLevel(1);
            return;
          }
          if (ev.key === "-" || ev.key === "_") {
            ev.preventDefault();
            stepLevel(-1);
            return;
          }
        }
        // Enter on a lesson opens it, the keyboard's double click. The link's own Enter would
        // arrive as a click, which the click handler below keeps for showing the card.
        var leaf = ev.target.closest && ev.target.closest("a[data-lesson]");
        if (leaf && ev.key === "Enter" && !ev.ctrlKey && !ev.metaKey && !ev.altKey && !ev.shiftKey) {
          ev.preventDefault();
          window.location.href = leaf.href;
          return;
        }
        var step = treeStep(ev);
        if (!step) return;
        var items = treeItems();
        var idx = items.indexOf(document.activeElement);
        var next = items[idx < 0 ? 0 : Math.min(items.length - 1, Math.max(0, idx + step))];
        if (!next) return;
        ev.preventDefault();
        activateItem(next);
      });
    }

    // Tree and breadcrumb. In the tree a click anywhere on a group's row selects it AND toggles
    // its fold (the caret alone was too small a target to find); a caret folds without selecting.
    // A crumb or a section heading only selects, and opens what it selects.
    function onBrowseClick(ev) {
      var level = ev.target.closest("[data-level]");
      if (level) {
        if (!level.disabled) stepLevel(Number(level.getAttribute("data-level")));
        var same = treeEl && treeEl.querySelector('[data-level="' + level.getAttribute("data-level") + '"]');
        if (same && !same.disabled) same.focus();
        return;
      }
      // A lesson in the tree: one click shows its card, a double click opens it. The second click
      // of a double click arrives on a re-drawn row (the first click re-renders the tree), so it is
      // recognized by its click count rather than a dblclick event. A modified click (new tab) and
      // the second click both fall through to the link.
      var leaf = ev.target.closest("a[data-lesson]");
      if (leaf) {
        if (ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.altKey || ev.button !== 0) return;
        if (ev.detail >= 2) return;
        ev.preventDefault();
        selectLesson(leaf.getAttribute("data-lesson"), leaf.getAttribute("data-parent"));
        var sel = treeEl.querySelector(itemKey(leaf));
        if (sel) sel.focus();
        return;
      }
      var toggle = ev.target.closest("[data-toggle]");
      if (toggle) {
        var id = toggle.getAttribute("data-toggle");
        var isOpen = toggle.getAttribute("aria-expanded") === "true";
        setTreeOpen(id, !isOpen);
        refresh();
        var again = treeEl && treeEl.querySelector('[data-toggle="' + id + '"]');
        if (again) again.focus();
        return;
      }
      var pick = ev.target.closest("[data-select]");
      if (!pick) return;
      var target = pick.getAttribute("data-select") || "";
      var caret = treeEl && treeEl.contains(pick)
        ? pick.parentNode.querySelector("[data-toggle]")
        : null;
      if (caret) {
        selectNode(target, caret.getAttribute("aria-expanded") !== "true");
      } else {
        selectNode(target, target ? true : undefined);
      }
    }
    if (treeEl) treeEl.addEventListener("click", onBrowseClick);
    if (crumbEl) crumbEl.addEventListener("click", onBrowseClick);
    results.addEventListener("click", function (ev) {
      if (ev.target.closest(".learn-group-link")) onBrowseClick(ev);
    });

    search.addEventListener("input", function () {
      syncQueryFromSearch();
      persistFilters();
      refresh();
    });

    if (searchClearBtn) {
      searchClearBtn.addEventListener("click", function () {
        clearSearch();
      });
    }

    if (hideFeatureEl) {
      hideFeatureEl.addEventListener("change", function () {
        hideTutilisFeature = !!hideFeatureEl.checked;
        // Mutual exclusion: can't filter *to* Tutilis feature while hiding it.
        if (hideTutilisFeature && activeTag === TUTILIS_FEATURE_TAG) {
          activeTag = "";
        }
        applyFiltersAndRefresh({});
      });
    }

    if (shellOnlyEl) {
      shellOnlyEl.addEventListener("change", function () {
        showShellOnly = !!shellOnlyEl.checked;
        applyFiltersAndRefresh({});
      });
    }

    /**
     * Alt+letter accelerators only when host UI language is English.
     * On macOS, Option+letter produces characters international users need while typing
     * (and we preventDefault those sequences). Non-EN UI langs leave Option/Alt to the OS.
     * Decision: planning/design-notes/lc-discovery-alt-shortcuts-and-i18n.md
     * AltGr (Windows/Linux) already excluded via !ctrlKey below.
     */
    function altLetterShortcutsEnabled() {
      try {
        if (window.PlusauriLang && typeof window.PlusauriLang.current === "function") {
          return window.PlusauriLang.current() === "en";
        }
      } catch (e) {
        /* ignore */
      }
      var attr =
        (document.documentElement &&
          (document.documentElement.getAttribute("data-lang") ||
            document.documentElement.getAttribute("data-prose-lang"))) ||
        (document.body &&
          (document.body.getAttribute("data-lang") ||
            document.body.getAttribute("data-prose-lang"))) ||
        "";
      var code = String(attr).trim().toLowerCase().split(/[-_]/)[0];
      return !code || code === "en";
    }

    /**
     * Region filters (physical keys — on macOS Option+letter, event.key is a symbol, so match
     * KeyboardEvent.code). The keys are the chips' own data-key attributes, written from RegionKey
     * (:shortcuts); this script holds no table of them. A disabled region chip (nothing published)
     * ignores its shortcut.
     * Returns the data-region id ("" for Any) or null if not a region shortcut.
     * EN UI only — see altLetterShortcutsEnabled.
     */
    function regionFromShortcutEvent(ev) {
      if (!altLetterShortcutsEnabled()) return null;
      if (!ev.altKey || ev.metaKey || ev.ctrlKey || ev.shiftKey) return null;
      if (!regionChips) return null;
      // Each chip carries its key as data-key (RegionKey in :shortcuts). The physical key first;
      // then the typed letter, for a layout whose letters sit on other keys.
      var letter = /^[a-z]$/i.test(ev.key || "") ? "Key" + ev.key.toUpperCase() : "";
      var codes = [ev.code || "", letter];
      for (var i = 0; i < codes.length; i++) {
        if (!codes[i]) continue;
        var btn = regionChips.querySelector('button[data-key="' + codes[i] + '"]');
        if (btn) return btn.getAttribute("data-region") || "";
      }
      return null;
    }

    function regionChipEnabled(regionId) {
      if (regionFilterHidden()) return false;
      if (!regionChips || regionId === "") return true;
      var btn = regionChips.querySelector('button[data-region="' + regionId + '"]');
      return !!btn && !btn.disabled;
    }

    function applyRegionShortcut(regionId, keepSearchFocus) {
      // regionId is "" for Any — use !== null from the caller.
      if (!regionChipEnabled(regionId)) return;
      activeRegion = regionId;
      applyFiltersAndRefresh({
        restoreSearchFocus: !!keepSearchFocus,
        focusSearch: false,
      });
      if (keepSearchFocus) {
        window.setTimeout(function () {
          search.focus();
        }, 0);
      }
    }

    search.addEventListener("keydown", function (ev) {
      if (ev.ctrlKey && !ev.metaKey && !ev.altKey && !ev.shiftKey && (ev.key || "").toLowerCase() === "n") {
        var first = treeItems()[0];
        if (first) {
          ev.preventDefault();
          activateItem(first);
          return;
        }
      }
      // Region shortcuts: regionFromShortcutEvent returns "" for Any, so check !== null.
      if (ev.altKey && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey) {
        var regionWant = regionFromShortcutEvent(ev);
        if (regionWant !== null) {
          ev.preventDefault();
          applyRegionShortcut(regionWant, true);
          return;
        }
      }
      if (ev.key === "Escape") {
        if (search.value) {
          ev.preventDefault();
          clearSearch();
        }
        return;
      }
      // Tab → first matching lesson; leave Shift+Tab free to move backward in the page.
      if (ev.key === "Tab" && !ev.shiftKey) {
        if (focusFirstResultCard()) {
          ev.preventDefault();
        }
        return;
      }
      if (ev.key !== "Enter") return;
      ev.preventDefault();
      query = search.value || "";
      persistFilters();
      lastFiltered = filterRows();
      openFirstMatch();
    });

    // Walk filtered cards with Tab / Shift+Tab (do not rely on native order alone).
    results.addEventListener("keydown", function (ev) {
      if (ev.key !== "Tab") return;
      var cards = resultCards();
      if (!cards.length) return;
      var idx = indexOfFocusedCard(cards);
      if (idx < 0) return;
      if (ev.shiftKey) {
        ev.preventDefault();
        if (idx === 0) {
          search.focus();
        } else {
          focusResultCard(cards[idx - 1]);
        }
        return;
      }
      // Forward Tab: stay in the match list until the last card.
      if (idx < cards.length - 1) {
        ev.preventDefault();
        focusResultCard(cards[idx + 1]);
      }
      // Last card: allow default Tab (leave results / page chrome).
    });

    // Surface + region shortcuts when focus is elsewhere on the discovery page.
    document.addEventListener("keydown", function (ev) {
      if (ev.target && (ev.target.tagName === "INPUT" || ev.target.tagName === "TEXTAREA")) {
        // Search field has its own handler (keeps focus); leave other fields alone.
        if (ev.target.id === "learn-search") return;
        return;
      }
      if (ev.altKey && !ev.metaKey && !ev.ctrlKey && !ev.shiftKey) {
        var regionWant = regionFromShortcutEvent(ev);
        if (regionWant !== null) {
          ev.preventDefault();
          applyRegionShortcut(regionWant, false);
        }
      }
    });

    function syncFiltersFromDom() {
      // Prefer sessionStorage (return from lesson); fall back to live DOM if empty.
      if (!query && search.value) {
        query = search.value || "";
      }
      search.value = query;
      if (tagChips) {
        var activeTagBtn = tagChips.querySelector("button[data-tag].is-active");
        if (activeTagBtn) {
          activeTag = activeTagBtn.getAttribute("data-tag") || "";
        }
      }
      refresh();
    }

    disableEmptyRegionChips();
    restoreDiscoveryState();

    // Persist before navigating into a lesson (capture + mousedown: Safari may not bubble click).
    function isLessonHref(href) {
      if (!href) return false;
      try {
        // Absolute or relative → pathname
        var path = href;
        if (href.indexOf("http") === 0) {
          path = new URL(href, window.location.origin).pathname;
        }
        return path.indexOf("/designer-site/learn/") === 0 && path !== "/designer-site/learn/" && path !== "/designer-site/learn";
      } catch (e) {
        return href.indexOf("/designer-site/learn/") === 0;
      }
    }
    function persistOnLessonNavigate(ev) {
      var a = ev.target && ev.target.closest ? ev.target.closest("a[href]") : null;
      if (!a) return;
      if (!isLessonHref(a.getAttribute("href") || a.href || "")) return;
      persistFiltersBeforeLeave();
    }
    document.addEventListener("mousedown", persistOnLessonNavigate, true);
    document.addEventListener("click", persistOnLessonNavigate, true);

    // pagehide: bfcache or full navigation away — snapshot search before the box is cleared.
    window.addEventListener("pagehide", persistFiltersBeforeLeave);
    window.addEventListener("beforeunload", persistFiltersBeforeLeave);

    // Return from /learn/<id> (bfcache or reload): rehydrate search so it matches the grid.
    window.addEventListener("pageshow", function () {
      restoreDiscoveryState();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
