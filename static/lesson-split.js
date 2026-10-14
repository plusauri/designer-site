/**
 * Lesson split page:
 * - Draggable gutter between lesson prose (left/top) and live app iframe (right/bottom).
 * - Collapsible top header (saves vertical space for the panes).
 * Remembers split fraction + header collapsed state in sessionStorage, and the
 * "How this page works" fold in localStorage — see INTRO_CHROME_STORAGE_KEY for why
 * that one outlives the session.
 */
(function () {
  const STORAGE_KEY = "plusauri.lessonSplit.fraction";
  const HEADER_KEY = "plusauri.lessonSplit.headerCollapsed";
  const MIN = 0.18;
  const MAX = 0.72;
  const STACK_MQ = "(max-width: 900px)";

  function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
  }

  function loadFraction() {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    const n = raw != null ? parseFloat(raw) : NaN;
    return Number.isFinite(n) ? clamp(n, MIN, MAX) : 0.38;
  }

  function saveFraction(f) {
    try {
      sessionStorage.setItem(STORAGE_KEY, String(f));
    } catch (_) {
      /* private mode / quota — ignore */
    }
  }

  function loadHeaderCollapsed() {
    try {
      return sessionStorage.getItem(HEADER_KEY) === "1";
    } catch (_) {
      return false;
    }
  }

  function saveHeaderCollapsed(collapsed) {
    try {
      sessionStorage.setItem(HEADER_KEY, collapsed ? "1" : "0");
    } catch (_) {
      /* private mode / quota — ignore */
    }
  }

  function isStacked() {
    return window.matchMedia(STACK_MQ).matches;
  }

  function gutterTrackPx(_split) {
    // Keep 6px for all splits; multi-dossier uses color on the gutter, not extra width.
    return "6px";
  }

  function applyFraction(split, lesson, fraction) {
    const f = clamp(fraction, MIN, MAX);
    const g = gutterTrackPx(split);
    if (isStacked()) {
      split.style.gridTemplateColumns = "";
      split.style.gridTemplateRows =
        "minmax(8rem, " + f * 100 + "%) " + g + " minmax(12rem, 1fr)";
      lesson.style.width = "";
      lesson.style.flex = "";
    } else {
      split.style.gridTemplateRows = "";
      split.style.gridTemplateColumns =
        "minmax(12rem, " + f * 100 + "%) " + g + " minmax(16rem, 1fr)";
      lesson.style.width = "";
      lesson.style.flex = "";
    }
    return f;
  }

  function initHeaderCollapse() {
    const header = document.getElementById("lesson-split-header");
    const collapseBtn = document.querySelector(".lesson-header-collapse");
    const expandBtn = document.getElementById("lesson-header-expand");
    if (!header || !collapseBtn || !expandBtn) return;

    function setCollapsed(collapsed) {
      header.classList.toggle("collapsed", collapsed);
      collapseBtn.setAttribute("aria-expanded", collapsed ? "false" : "true");
      if (collapsed) {
        expandBtn.removeAttribute("hidden");
      } else {
        expandBtn.setAttribute("hidden", "hidden");
      }
      saveHeaderCollapsed(collapsed);
    }

    collapseBtn.addEventListener("click", function () {
      setCollapsed(true);
    });
    expandBtn.addEventListener("click", function () {
      setCollapsed(false);
    });

    setCollapsed(loadHeaderCollapsed());
  }

  function initGutter() {
    const split = document.querySelector(".lesson-split");
    const gutter = document.querySelector(".lesson-split-gutter");
    const lesson = document.querySelector(".lesson-pane");
    if (!split || !gutter || !lesson) return;

    let fraction = loadFraction();
    applyFraction(split, lesson, fraction);

    let dragging = false;

    function onPointerDown(ev) {
      dragging = true;
      gutter.classList.add("is-dragging");
      document.body.classList.add("lesson-split-dragging");
      gutter.setPointerCapture?.(ev.pointerId);
      ev.preventDefault();
    }

    function onPointerMove(ev) {
      if (!dragging) return;
      const rect = split.getBoundingClientRect();
      if (rect.width < 1 || rect.height < 1) return;
      if (isStacked()) {
        fraction = clamp((ev.clientY - rect.top) / rect.height, MIN, MAX);
      } else {
        fraction = clamp((ev.clientX - rect.left) / rect.width, MIN, MAX);
      }
      applyFraction(split, lesson, fraction);
    }

    function onPointerUp(ev) {
      if (!dragging) return;
      dragging = false;
      gutter.classList.remove("is-dragging");
      document.body.classList.remove("lesson-split-dragging");
      try {
        gutter.releasePointerCapture?.(ev.pointerId);
      } catch (_) {
        /* already released */
      }
      saveFraction(fraction);
    }

    gutter.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    window.matchMedia(STACK_MQ).addEventListener("change", function () {
      applyFraction(split, lesson, fraction);
    });
  }

  function canvasOriginFor(iframe) {
    try {
      return new URL(iframe.src, window.location.href).origin;
    } catch (_) {
      return "*";
    }
  }

  /**
   * Commands for the canvas (`dossier:`, `whatif:`, `pick:`, `riskchips:`, `modrow:`, `birdseye:`, `where:`, `shortcut:`), held until it is
   * listening. A message posted before the wasm app has registered its listener is simply lost, so a
   * figure or jump-to click in the first seconds of a lesson used to do nothing. The canvas announces
   * itself with `theme:` once its listener is up (see initThemeSync); the queue flushes then, in order,
   * or after CANVAS_READY_FALLBACK_MS from the iframe's load in case that announce was missed. The
   * canvas in turn holds a jump until its plan is up, so a click is never dropped on either side.
   */
  const CANVAS_READY_FALLBACK_MS = 15000;
  var canvasReady = false;
  var canvasQueue = [];

  function flushCanvasQueue(iframe) {
    canvasReady = true;
    const pending = canvasQueue;
    canvasQueue = [];
    pending.forEach(function (msg) {
      postToCanvas(iframe, msg);
    });
  }

  function postToCanvas(iframe, msg) {
    if (!iframe) return false;
    if (!canvasReady) {
      canvasQueue.push(msg);
      return true;
    }
    if (!iframe.contentWindow) return false;
    const origin = canvasOriginFor(iframe);
    iframe.contentWindow.postMessage(msg, origin === "*" ? "*" : origin);
    return true;
  }

  function initCanvasReady() {
    const iframe = document.querySelector(".app-pane iframe");
    if (!iframe) return;
    window.addEventListener("message", function (ev) {
      if (canvasReady || ev.source !== iframe.contentWindow) return;
      const msg = typeof ev.data === "string" ? ev.data : "";
      if (msg.indexOf("theme:") === 0) flushCanvasQueue(iframe);
    });
    iframe.addEventListener("load", function () {
      setTimeout(function () {
        if (!canvasReady) flushCanvasQueue(iframe);
      }, CANVAS_READY_FALLBACK_MS);
    });
  }

  /**
   * Theme: canvas toolbar is the only control. Host applies `theme:light|dark` from the
   * iframe (PlusauriTheme + localStorage) so prose chrome matches. No host sun/moon on
   * the lesson page; no host→canvas push (canvas announces on ready).
   */
  function initThemeSync() {
    const iframe = document.querySelector(".app-pane iframe");
    if (!iframe) return;

    function currentTheme() {
      if (window.PlusauriTheme && typeof window.PlusauriTheme.current === "function") {
        return window.PlusauriTheme.current();
      }
      const attr = document.documentElement.getAttribute("data-theme");
      return attr === "dark" || attr === "light" ? attr : "light";
    }

    window.addEventListener("message", function (ev) {
      const msg = typeof ev.data === "string" ? ev.data.trim() : "";
      if (!msg.startsWith("theme:")) return;
      const expected = canvasOriginFor(iframe);
      if (expected !== "*" && ev.origin && ev.origin !== expected) return;
      const theme = msg.slice("theme:".length);
      if (theme !== "light" && theme !== "dark") return;
      if (currentTheme() === theme) return;
      if (window.PlusauriTheme && typeof window.PlusauriTheme.set === "function") {
        // broadcast:false — nothing host-side should re-post into the canvas.
        window.PlusauriTheme.set(theme, { broadcast: false });
      } else {
        document.documentElement.setAttribute("data-theme", theme);
        try {
          localStorage.setItem("plusauri.theme", theme);
        } catch (_) {
          /* private mode */
        }
      }
    });
  }

  /**
   * Canvas Reach Out → same-origin `POST /api/reach-out`. The frame cannot record
   * the message itself; the parent page does. Protocol: canvas posts `reachout:<json>`,
   * parent replies `reachout-result:<json>` (`{ok, message}`).
   */
  function initReachOutBridge() {
    const iframe = document.querySelector(".app-pane iframe");
    if (!iframe) return;

    function replyToCanvas(payload) {
      if (!iframe.contentWindow) return;
      const origin = canvasOriginFor(iframe);
      try {
        iframe.contentWindow.postMessage(
          "reachout-result:" + payload,
          origin === "*" ? "*" : origin,
        );
      } catch (err) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("reach-out result post failed", err);
        }
      }
    }

    window.addEventListener("message", function (ev) {
      const msg = typeof ev.data === "string" ? ev.data.trim() : "";
      if (!msg.startsWith("reachout:")) return;
      if (msg.startsWith("reachout-result:")) return;
      const expected = canvasOriginFor(iframe);
      if (expected !== "*" && ev.origin && ev.origin !== expected) return;
      const json = msg.slice("reachout:".length);
      if (!json) {
        replyToCanvas('{"ok":false,"message":"Empty message."}');
        return;
      }
      fetch("/designer-site/api/reach-out", {
        method: "POST",
        credentials: "same-origin",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: json,
      })
        .then(function (res) {
          return res.text().then(function (text) {
            if (text && text.trim()) return text;
            return JSON.stringify({
              ok: false,
              message: "The site returned HTTP " + res.status + " with no body.",
            });
          });
        })
        .then(function (text) {
          replyToCanvas(text);
        })
        .catch(function (err) {
          const detail = err && err.message ? err.message : "network error";
          replyToCanvas(
            '{"ok":false,"message":"Could not save the message (' +
              String(detail).replace(/"/g, '\\"') +
              ')."}',
          );
        });
    });
  }

  /**
   * Language: host chrome + canvas toolbar share `plusauri.lang` (see /static/lang.js).
   * Host swaps `#lesson-prose` via GET /learn/{id}/prose?lang= without reloading the iframe,
   * and posts `lang:` into the canvas so AppLang stays aligned.
   */
  function initLangSync() {
    const iframe = document.querySelector(".app-pane iframe");
    const proseEl = document.getElementById("lesson-prose");
    if (!iframe && !proseEl) return;

    var proseFetchSeq = 0;
    /** Last locale successfully painted into #lesson-prose (or server first paint). */
    var loadedLang = null;
    /** In-flight target; cleared on failure so retries work. */
    var pendingLang = null;

    function normalizeLang(raw) {
      if (window.PlusauriLang && typeof window.PlusauriLang.normalize === "function") {
        return window.PlusauriLang.normalize(raw);
      }
      if (!raw) return null;
      const code = String(raw).trim().toLowerCase().split(/[-_]/)[0];
      return { en: 1, fr: 1, de: 1, es: 1 }[code] ? code : null;
    }

    function currentLang() {
      if (window.PlusauriLang && typeof window.PlusauriLang.current === "function") {
        return window.PlusauriLang.current();
      }
      const attr =
        (document.body && document.body.getAttribute("data-prose-lang")) ||
        document.documentElement.getAttribute("data-prose-lang");
      return normalizeLang(attr) || "en";
    }

    function persistLang(lang, opts) {
      if (window.PlusauriLang && typeof window.PlusauriLang.set === "function") {
        window.PlusauriLang.set(lang, {
          broadcast: false,
          updateUrl: !opts || opts.updateUrl !== false,
          persist: true,
        });
        return;
      }
      if (document.body) document.body.setAttribute("data-prose-lang", lang);
      document.documentElement.setAttribute("data-prose-lang", lang);
      try {
        localStorage.setItem("plusauri.lang", lang);
      } catch (_) {
        /* private mode */
      }
      try {
        document.cookie =
          "plusauri.lang=" +
          encodeURIComponent(lang) +
          "; path=/; max-age=" +
          60 * 60 * 24 * 365 +
          "; SameSite=Lax";
      } catch (_) {
        /* ignore */
      }
      try {
        const url = new URL(window.location.href);
        if (url.searchParams.get("lang") !== lang) {
          url.searchParams.set("lang", lang);
          window.history.replaceState(null, "", url.toString());
        }
      } catch (_) {
        /* ignore */
      }
    }

    function postLangToCanvas(lang) {
      if (!iframe || !iframe.contentWindow) return;
      const origin = canvasOriginFor(iframe);
      try {
        iframe.contentWindow.postMessage(
          "lang:" + lang,
          origin === "*" ? "*" : origin,
        );
      } catch (err) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("canvas lang push failed", err);
        }
      }
    }

    function enhanceProse(root) {
      if (!root) return;
      try {
        if (typeof renderMathInElement === "function") {
          renderMathInElement(root, {
            delimiters: [
              { left: "\\(", right: "\\)", display: false },
              { left: "\\[", right: "\\]", display: true },
              { left: "$$", right: "$$", display: true },
            ],
            throwOnError: false,
          });
        }
      } catch (_) {
        /* katex not loaded on this lesson */
      }
      try {
        if (window.PlusauriMermaid && typeof window.PlusauriMermaid.runIn === "function") {
          window.PlusauriMermaid.runIn(root);
        }
      } catch (_) {
        /* mermaid not loaded */
      }
      // Re-apply after /prose?lang= swaps (fresh details default to open in HTML).
      wireIntroChrome(root);
      wireLessonAccordion(root);
      wireTermTips(root);
    }

    /**
     * Fetch and paint lesson body for [lang]. Returns a Promise<boolean> success.
     * Does **not** set loadedLang until the response is applied (so failed swaps retry).
     */
    function loadProse(lang) {
      if (!proseEl) return Promise.resolve(false);
      const lessonId = proseEl.getAttribute("data-lesson-id");
      if (!lessonId) return Promise.resolve(false);
      const code = normalizeLang(lang);
      if (!code) return Promise.resolve(false);
      const seq = ++proseFetchSeq;
      pendingLang = code;
      proseEl.setAttribute("aria-busy", "true");
      // Cache-bust so a prior EN fragment cannot stick in aggressive browser caches.
      const url =
        "/designer-site/learn/" +
        encodeURIComponent(lessonId) +
        "/prose?lang=" +
        encodeURIComponent(code) +
        "&_=" +
        Date.now();
      return fetch(url, {
        credentials: "same-origin",
        cache: "no-store",
        headers: { Accept: "text/html" },
      })
        .then(function (res) {
          if (!res.ok) throw new Error("prose " + res.status);
          return res.text();
        })
        .then(function (html) {
          if (seq !== proseFetchSeq) return false;
          if (!html || !String(html).trim()) {
            throw new Error("prose empty");
          }
          proseEl.innerHTML = html;
          proseEl.setAttribute("data-loaded-lang", code);
          loadedLang = code;
          pendingLang = null;
          enhanceProse(proseEl);
          if (
            window.PlusauriLessonPlans &&
            typeof window.PlusauriLessonPlans.decorateProseLinks === "function"
          ) {
            window.PlusauriLessonPlans.decorateProseLinks();
          } else {
            decorateLeaveLinks();
          }
          return true;
        })
        .catch(function (err) {
          if (seq === proseFetchSeq) pendingLang = null;
          if (typeof console !== "undefined" && console.warn) {
            console.warn("lesson prose lang swap failed", err);
          }
          return false;
        })
        .then(function (ok) {
          if (seq === proseFetchSeq) proseEl.removeAttribute("aria-busy");
          return !!ok;
        });
    }

    /**
     * Apply a language from host control or canvas toolbar.
     * @param {string} lang
     * @param {{ fromCanvas?: boolean, force?: boolean }} [opts]
     */
    function applyLang(lang, opts) {
      const code = normalizeLang(lang);
      if (!code) return;
      const options = opts || {};
      const painted =
        (proseEl && proseEl.getAttribute("data-loaded-lang")) || loadedLang;
      // Skip only when this locale is already successfully painted (not merely requested).
      if (!options.force && painted === code && pendingLang !== code) {
        persistLang(code);
        if (!options.fromCanvas) postLangToCanvas(code);
        return;
      }
      persistLang(code);
      if (!options.fromCanvas) postLangToCanvas(code);
      loadProse(code);
    }

    // Server first paint: stamp loaded lang so we do not re-fetch needlessly until change.
    loadedLang =
      normalizeLang(proseEl && proseEl.getAttribute("data-loaded-lang")) ||
      normalizeLang(
        (document.body && document.body.getAttribute("data-prose-lang")) ||
          document.documentElement.getAttribute("data-prose-lang"),
      ) ||
      "en";
    if (proseEl && !proseEl.getAttribute("data-loaded-lang")) {
      proseEl.setAttribute("data-loaded-lang", loadedLang);
    }

    /**
     * Website (e.g. :8092) and canvas webpack (e.g. :8083) have **separate** localStorage.
     * The canvas announces its seed on ready via postMessage — that used to overwrite a DE host
     * choice with EN from the canvas origin. Host is authoritative during bootstrap; afterward
     * either control (nav select or canvas toolbar) may change language.
     */
    var hostPreferred = loadedLang;
    var bootstrapUntil = Date.now() + 4000;

    function resolveHostPreferred() {
      // 1) URL  2) host-origin storage/cookie (PlusauriLang)  3) server first-paint stamp
      try {
        var q = normalizeLang(new URL(window.location.href).searchParams.get("lang"));
        if (q) return q;
      } catch (_) {
        /* ignore */
      }
      if (window.PlusauriLang && typeof window.PlusauriLang.resolve === "function") {
        var stored = normalizeLang(window.PlusauriLang.resolve());
        if (stored) return stored;
      }
      return loadedLang || "en";
    }

    function assertHostLangToCanvas() {
      var lang = hostPreferred || currentLang();
      postLangToCanvas(lang);
    }

    // Push host language when the iframe finishes loading (canvas may miss early posts).
    if (iframe) {
      iframe.addEventListener("load", function () {
        assertHostLangToCanvas();
        setTimeout(assertHostLangToCanvas, 300);
        setTimeout(assertHostLangToCanvas, 1200);
      });
    }

    // Canvas → host. During bootstrap, push host preference back; do not wipe prose.
    window.addEventListener("message", function (ev) {
      const msg = typeof ev.data === "string" ? ev.data.trim() : "";
      if (!msg.startsWith("lang:")) return;
      if (iframe) {
        const expected = canvasOriginFor(iframe);
        if (expected !== "*" && ev.origin && ev.origin !== expected) return;
      }
      const code = normalizeLang(msg.slice("lang:".length));
      if (!code) return;
      if (Date.now() < bootstrapUntil) {
        // Canvas ready-seed from a different origin's localStorage — ignore if it fights host.
        if (code !== hostPreferred) {
          assertHostLangToCanvas();
          return;
        }
        return;
      }
      // After bootstrap: toolbar change is intentional.
      hostPreferred = code;
      applyLang(code, { fromCanvas: true });
    });

    // Host chrome (site lang select) → prose + canvas.
    window.addEventListener("plusauri-lang", function (ev) {
      var detail = ev && ev.detail;
      var code = normalizeLang(detail && detail.lang);
      if (!code) return;
      hostPreferred = code;
      bootstrapUntil = 0; // user acted on host — no longer protect first paint
      applyLang(code, { fromCanvas: false, force: true });
    });

    // Establish host preference (URL / host storage / server stamp), paint if needed, drive canvas.
    hostPreferred = resolveHostPreferred();
    if (hostPreferred !== loadedLang) {
      applyLang(hostPreferred, { force: true, fromCanvas: false });
    } else {
      persistLang(hostPreferred);
      assertHostLangToCanvas();
    }
    // Canvas may boot slowly — re-assert host lang a few times while it loads.
    var pulses = 0;
    var pulseTimer = setInterval(function () {
      assertHostLangToCanvas();
      if (++pulses >= 8) clearInterval(pulseTimer);
    }, 500);
  }

  /**
   * Multi-dossier lessons: switch the live canvas plan without leaving /learn/{documentId}.
   * Allow-list from #lesson-canvas-dossiers (server). Authors use
   * <a href="#canvas-dossier:sample_id">…</a> or .lesson-plan-chip buttons.
   * Slot colors (plan-slot-0 green, 1 blue, 2 amber) are shared across chips, prose links,
   * and the app-pane border so the loaded plan is obvious.
   * Canvas protocol: postMessage("dossier:" + id) — already implemented in tutil-learning-center.
   */
  function initCanvasDossierSwitch() {
    const split = document.querySelector(".lesson-split");
    const appPane = document.querySelector(".app-pane");
    const gutter = document.querySelector(".lesson-split-gutter");
    const iframe = appPane ? appPane.querySelector("iframe") : null;
    const allowEl = document.getElementById("lesson-canvas-dossiers");
    if (!iframe || !allowEl) return;

    var allow = { primary: null, alternates: [], order: [] };
    try {
      allow = JSON.parse(allowEl.textContent || "{}") || allow;
    } catch (_) {
      /* ignore bad JSON */
    }
    const primary = allow.primary ? String(allow.primary) : null;
    var order = [];
    if (allow.order && allow.order.length) {
      order = allow.order.map(String);
    } else {
      if (primary) order.push(primary);
      (allow.alternates || []).forEach(function (id) {
        if (id) order.push(String(id));
      });
    }
    const slotById = {};
    order.forEach(function (id, i) {
      slotById[id] = i;
    });
    const allowed = {};
    order.forEach(function (id) {
      allowed[id] = true;
    });
    if (!primary || order.length < 1) return;

    var activeId = primary;
    var chipLabelById = {};
    document.querySelectorAll(".lesson-plan-chip[data-canvas-dossier]").forEach(function (btn) {
      const bid = btn.getAttribute("data-canvas-dossier");
      if (bid) chipLabelById[bid] = (btn.textContent || "").trim();
    });

    function decorateProseLinks() {
      const prose = document.getElementById("lesson-prose");
      if (!prose) return;
      prose.querySelectorAll('a[href^="#canvas-dossier:"]').forEach(function (a) {
        const href = a.getAttribute("href") || "";
        const id = href.slice("#canvas-dossier:".length).trim();
        if (!id || slotById[id] === undefined) return;
        const slot = slotById[id];
        a.classList.add("canvas-dossier-link", "plan-slot-" + slot);
        a.setAttribute("data-canvas-dossier", id);
        a.setAttribute("data-plan-slot", String(slot));
        a.classList.toggle("is-active-plan", id === activeId);
      });
    }

    function setActivePlan(id) {
      activeId = id;
      const slot = slotById[id];
      document.querySelectorAll(".lesson-plan-chip").forEach(function (btn) {
        const bid = btn.getAttribute("data-canvas-dossier");
        const on = bid === id;
        btn.classList.toggle("is-active", on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      });
      document.querySelectorAll("a.canvas-dossier-link").forEach(function (a) {
        const bid = a.getAttribute("data-canvas-dossier");
        a.classList.toggle("is-active-plan", bid === id);
      });
      if (slot !== undefined) {
        const slotStr = String(slot);
        if (appPane) {
          appPane.setAttribute("data-plan-slot", slotStr);
          appPane.setAttribute("data-canvas-dossier", id);
        }
        // Gutter + split carry the same slot so the bar *between* prose and canvas
        // matches chip/link underbars (the visual bridge).
        if (gutter) gutter.setAttribute("data-plan-slot", slotStr);
        if (split) {
          split.setAttribute("data-plan-slot", slotStr);
          split.classList.add("has-plan-slots");
        }
      }
      const showing = document.getElementById("lesson-plan-showing-label");
      if (showing) {
        showing.textContent = chipLabelById[id] || id;
      }
      try {
        const url = new URL(window.location.href);
        if (id === primary) {
          url.searchParams.delete("canvas");
        } else {
          url.searchParams.set("canvas", id);
        }
        window.history.replaceState(null, "", url.toString());
      } catch (_) {
        /* ignore */
      }
    }

    function switchDossier(id) {
      if (!id || !allowed[id]) return false;
      if (activeId === id) {
        setActivePlan(id);
        return true;
      }
      try {
        postToCanvas(iframe, "dossier:" + id);
      } catch (err) {
        if (typeof console !== "undefined" && console.warn) {
          console.warn("canvas dossier switch failed", err);
        }
        return false;
      }
      setActivePlan(id);
      return true;
    }

    // Expose for lang prose swap (re-tag links after #lesson-prose HTML replace).
    window.PlusauriLessonPlans = {
      decorateProseLinks: decorateProseLinks,
      switchDossier: switchDossier,
      /** Whether the canvas may show plan [id]: one of this lesson's plans. */
      isCanvasPlan: function (id) {
        return !!id && !!allowed[id];
      },
    };

    decorateProseLinks();
    setActivePlan(primary);

    document.addEventListener("click", function (ev) {
      const chip = ev.target && ev.target.closest
        ? ev.target.closest(".lesson-plan-chip[data-canvas-dossier]")
        : null;
      if (chip) {
        ev.preventDefault();
        switchDossier(chip.getAttribute("data-canvas-dossier"));
        return;
      }
      const link = ev.target && ev.target.closest
        ? ev.target.closest('a[href^="#canvas-dossier:"]')
        : null;
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const id = href.slice("#canvas-dossier:".length).trim();
      if (!id) return;
      ev.preventDefault();
      switchDossier(id);
    });

    // Shareable secondary plan: /learn/{id}?canvas=other_sample
    try {
      const q = new URL(window.location.href).searchParams.get("canvas");
      if (q && allowed[q] && q !== primary) {
        window.setTimeout(function () {
          switchDossier(q);
        }, 800);
      }
    } catch (_) {
      /* ignore */
    }
  }

  /**
   * Collapsible intro chrome (orientation + product relationship). Server ships <details open>;
   * remember open/closed for this tab so collapsing once keeps the walk-through tall on the next
   * lesson. KEEP STORAGE_KEY in sync with LessonIntroChrome.STORAGE_KEY.
   */
  /**
   * "How this page works" open/closed, in **localStorage** rather than sessionStorage.
   *
   * It explains the split layout and the live plan, which is a thing you learn once. Kept per
   * session, a reader who had shut it met it open again on their next visit and had to shut it
   * again to reach the lesson — the drag being that the callout is at the very top, above the
   * teaching, on every lesson in the corpus.
   *
   * The server default is now **closed** (it read as the lesson's first paragraphs when open), so
   * this key mostly runs the other way: it remembers a reader who *opened* the orientation.
   *
   * This is the one lesson collapsible that persists across visits. The desktop-only callouts
   * deliberately do not: those are per-lesson asides, and a reader who folds one is answering
   * "not this one", not "never again".
   */
  var INTRO_CHROME_STORAGE_KEY = "plusauri.learn.introChromeOpen.v1";

  /**
   * Keep glossary term tips (and tipped nav chips) inside the lesson pane (never under
   * the live-plan iframe). Uses position:fixed + clamp to pane bounds on hover/focus.
   */
  function wireTermTips(root) {
    const scope = root && root.querySelectorAll ? root : document;
    const terms = scope.querySelectorAll
      ? scope.querySelectorAll(".lesson-term, .lesson-nav-ref--tipped")
      : [];
    terms.forEach(function (term) {
      if (term.getAttribute("data-term-tip-wired") === "1") return;
      term.setAttribute("data-term-tip-wired", "1");
      const tip = term.querySelector(".lesson-term-tip");
      if (!tip) return;

      function clearPlacement() {
        term.classList.remove("is-tip-open");
        tip.classList.remove("is-positioned");
        tip.style.left = "";
        tip.style.top = "";
        tip.style.right = "";
        tip.style.bottom = "";
        tip.style.maxWidth = "";
        tip.style.width = "";
      }

      function placeTip() {
        const pane =
          term.closest(".lesson-pane") ||
          document.getElementById("lesson-prose") ||
          term.parentElement;
        if (!pane) return;
        const pad = 8;
        const paneRect = pane.getBoundingClientRect();
        const termRect = term.getBoundingClientRect();
        const maxW = Math.max(120, Math.min(22 * 16, paneRect.width - pad * 2));

        // Measure with fixed + temporary visibility (CSS may still have opacity 0).
        tip.classList.add("is-positioned");
        tip.style.maxWidth = maxW + "px";
        tip.style.width = "max-content";
        tip.style.left = "0px";
        tip.style.top = "0px";
        tip.style.right = "auto";
        tip.style.bottom = "auto";
        // Force layout for measurement.
        const tipW = Math.min(tip.offsetWidth || maxW, maxW);
        const tipH = tip.offsetHeight || 80;

        let left = termRect.left;
        // Prefer aligning to the pill; if it would spill past the lesson pane, shift left.
        if (left + tipW > paneRect.right - pad) {
          left = paneRect.right - pad - tipW;
        }
        if (left < paneRect.left + pad) {
          left = paneRect.left + pad;
        }
        // Never wider than the pane: pin maxWidth to remaining width if needed.
        const roomRight = paneRect.right - pad - left;
        if (roomRight < tipW) {
          tip.style.maxWidth = Math.max(120, roomRight) + "px";
        }

        let top = termRect.bottom + 6;
        const remeasureH = tip.offsetHeight || tipH;
        if (top + remeasureH > window.innerHeight - pad) {
          // Flip above the pill when near the bottom of the viewport.
          top = Math.max(pad, termRect.top - remeasureH - 6);
        }
        // Also keep within the lesson pane vertically when possible.
        if (top + remeasureH > paneRect.bottom - pad && termRect.top - remeasureH - 6 >= paneRect.top + pad) {
          top = termRect.top - remeasureH - 6;
        }

        tip.style.left = Math.round(left) + "px";
        tip.style.top = Math.round(top) + "px";
        term.classList.add("is-tip-open");
      }

      term.addEventListener("mouseenter", placeTip);
      term.addEventListener("focusin", placeTip);
      term.addEventListener("mouseleave", clearPlacement);
      term.addEventListener("focusout", function (ev) {
        // Keep open when focus moves into the tip (if ever focusable).
        if (term.contains(ev.relatedTarget)) return;
        clearPlacement();
      });
      window.addEventListener(
        "scroll",
        function () {
          if (term.classList.contains("is-tip-open")) placeTip();
        },
        true,
      );
      window.addEventListener("resize", function () {
        if (term.classList.contains("is-tip-open")) placeTip();
      });
    });
  }

  function wireIntroChrome(root) {
    var scope = root || document;
    var nodes = scope.querySelectorAll
      ? scope.querySelectorAll("details.lesson-intro-chrome")
      : [];
    if (!nodes.length && scope.matches && scope.matches("details.lesson-intro-chrome")) {
      nodes = [scope];
    }
    nodes.forEach(function (el) {
      if (el.getAttribute("data-intro-chrome-wired") === "1") return;
      el.setAttribute("data-intro-chrome-wired", "1");
      try {
        var saved = localStorage.getItem(INTRO_CHROME_STORAGE_KEY);
        if (saved === "0") {
          el.open = false;
        } else if (saved === "1") {
          el.open = true;
        }
        // else: leave server default (closed — see LessonIntroChrome "Why closed")
      } catch (e) {
        /* private mode */
      }
      el.addEventListener("toggle", function () {
        try {
          localStorage.setItem(INTRO_CHROME_STORAGE_KEY, el.open ? "1" : "0");
        } catch (e2) {
          /* ignore */
        }
      });
    });
  }

  /**
   * Lesson sticky accordion (see LessonOutline.kt).
   *
   * The pinning itself is pure CSS — each `##` heading carries `--i`/`--j` and sticks to
   * `top: i × row` / `bottom: j × row`. What is left for script is the part CSS cannot express:
   *
   *  - only one section open at a time, which is what keeps the two piles adding up to the whole
   *    outline no matter where the reader is;
   *  - a jump has to *open* the section that owns its target before scrolling, because a browser
   *    will not scroll to something that is not laid out;
   *  - the top pile has to clear the plan switcher on a multi-plan lesson, and only the browser
   *    knows how tall that band actually is.
   */
  function accordionRoot(scope) {
    var root = scope && scope.querySelector ? scope : document;
    return root.querySelector(".lesson-accordion");
  }

  function accordionSections(root) {
    return root ? root.querySelectorAll(".lesson-section-head") : [];
  }

  function bodyOf(head) {
    var btn = head.querySelector(".lesson-section-toggle");
    var id = btn && btn.getAttribute("aria-controls");
    return id ? document.getElementById(id) : null;
  }

  /**
   * Open `head`'s section and shut every other one.
   *
   * Passing null shuts them all, which is a legitimate resting state: the pane is then exactly the
   * outline and nothing else. That is this accordion's "collapse all" — it needed no button.
   */
  function openSection(root, head) {
    var open = -1;
    accordionSections(root).forEach(function (el, i) {
      var on = el === head;
      var btn = el.querySelector(".lesson-section-toggle");
      var body = bodyOf(el);
      if (btn) btn.setAttribute("aria-expanded", on ? "true" : "false");
      if (body) body.hidden = !on;
      if (on) open = i;
    });
    // Which row is open is the origin the piles are measured from: CSS pins the
    // `--lesson-accordion-pile` rows either side of `--open` and parks the rest off the pane. With
    // nothing open there is no origin and no pinning — the pane is the plain outline.
    if (open < 0) root.style.removeProperty("--open");
    else root.style.setProperty("--open", String(open));
  }

  /** The pinning heading that owns `el`, if any. */
  function ownerHead(el) {
    var body = el.closest ? el.closest(".lesson-section-body") : null;
    if (!body) return null;
    var node = body.previousElementSibling;
    while (node && !node.classList.contains("lesson-section-head")) {
      node = node.previousElementSibling;
    }
    return node;
  }

  /** Open whatever has to be open for `el` to be laid out: its section, then any shut subsection. */
  function revealSection(el) {
    var root = accordionRoot(document.getElementById("lesson-prose") || document);
    // A link may point at a section's own heading ("see [Dossier](#dossier)") rather than at
    // something inside it. `ownerHead` answers "which body is this in" and a heading is in none, so
    // it returns null there — which used to mean the jump landed on a *shut* row and stopped. The
    // heading is its own owner.
    var head = el.classList && el.classList.contains("lesson-section-head") ? el : ownerHead(el);
    if (root && head) openSection(root, head);
    var node = el;
    while (node && node !== document.body) {
      if (node.tagName === "DETAILS") node.open = true;
      node = node.parentElement;
    }
  }

  /**
   * Measure the plan switcher into `--lesson-accordion-top` so the pinned rows stack beneath it
   * rather than under it. Single-plan lessons have no switcher and the value stays 0.
   */
  function syncAccordionTop() {
    var pane = document.querySelector(".lesson-pane");
    if (!pane) return;
    var band = document.querySelector(".lesson-plan-switcher");
    var h = band ? Math.round(band.getBoundingClientRect().height) : 0;
    pane.style.setProperty("--lesson-accordion-top", h + "px");
  }

  /** Nearest ancestor that actually scrolls, else the document scroller. */
  function scrollParent(el) {
    var node = el ? el.parentElement : null;
    while (node && node !== document.body && node !== document.documentElement) {
      var oy = getComputedStyle(node).overflowY;
      if ((oy === "auto" || oy === "scroll") && node.scrollHeight > node.clientHeight) return node;
      node = node.parentElement;
    }
    return document.scrollingElement || document.documentElement;
  }

  /** A `--custom-property` on `el` resolved to pixels. */
  function pxVar(el, name, fallback) {
    var raw = getComputedStyle(el).getPropertyValue(name).trim();
    var n = parseFloat(raw);
    if (!raw || isNaN(n)) return fallback;
    if (raw.indexOf("rem") >= 0) {
      var rootPx = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      return n * rootPx;
    }
    return n;
  }

  /**
   * Put the just-opened row in its pinned slot with the **first line of its body** directly beneath
   * it, rather than under the band.
   *
   * `scrollIntoView` cannot do this job: the row is `position: sticky`, so the browser resolves
   * "put this at the start" against a box that moves as the scroll happens — the row un-pins from
   * the bottom pile on the way up. The offset is computed once, not iteratively, so the scroll
   * overshoots and comes to rest deep inside the section.
   *
   * Computing the destination ourselves works because a sticky element's `offsetTop` is its *flow*
   * position (sticky is a paint-time offset and does not move the layout box) and the accordion
   * container is not sticky, so its rect is honest.
   *
   * ## Two traps, both of which bit
   *
   * **`--pile-top` is not a number.** It computes to the string `"min(2, 5)"`: an unregistered
   * custom property keeps its unresolved token stream, so `parseFloat` returns NaN. Reading it that
   * way silently yielded a pile of 0 and scrolled the band's height too far, hiding the section's
   * opening lines underneath it — which is the bug this comment exists to stop coming back. The
   * pile is counted here instead, from the row's index and the cap (`--lesson-accordion-pile` *is*
   * a bare integer and does parse). The row height comes off `offsetHeight` for the same reason:
   * measure, do not parse.
   *
   * **Arithmetic alone is a model of the CSS, and models drift.** So the landing is *checked* on
   * the next frame: if the body's first line still sits above the open row's bottom edge, the row
   * is stuck over it, and the difference is scrolled back. When the arithmetic is right this
   * corrects nothing and is invisible.
   */
  function scrollRowToTop(root, head) {
    var scroller = scrollParent(root);
    var pane = document.querySelector(".lesson-pane") || root;
    var rows = Array.prototype.slice.call(accordionSections(root));
    var index = rows.indexOf(head);
    if (index < 0) return;

    var row = head.offsetHeight || 27;
    var cap = parseFloat(getComputedStyle(pane).getPropertyValue("--lesson-accordion-pile"));
    if (isNaN(cap)) cap = 2;
    // Rows that actually pin above this one: the cap, or all there are when it sits near the top.
    var pileTop = Math.min(cap, index);
    var bandTop = pxVar(pane, "--lesson-accordion-top", 0);

    var isDoc = scroller === document.scrollingElement || scroller === document.documentElement;
    var scrollerTop = isDoc ? 0 : scroller.getBoundingClientRect().top + scroller.clientTop;
    var scrollTopOf = function () {
      return isDoc ? window.scrollY : scroller.scrollTop;
    };
    var scrollToY = function (y) {
      var max = scroller.scrollHeight - scroller.clientHeight;
      y = Math.max(0, Math.min(y, max));
      // Instant, not smooth. A smooth scroll is still animating when the correction below runs, and
      // the animation then finishes to its *original* target and undoes it — which is how a row
      // opened straight from the outline landed correctly while the same row opened after another
      // one did not. The content swap under the cursor is instant anyway; the scroll matching it is
      // not the jarring half.
      if (isDoc) window.scrollTo({ top: y, behavior: "auto" });
      else scroller.scrollTo({ top: y, behavior: "auto" });
    };

    var containerTop =
      root.getBoundingClientRect().top - scrollerTop + scrollTopOf();
    // The band above the body is the pinned rows plus the open row itself; the body starts one row
    // after the head in flow, so those two cancel down to this.
    scrollToY(containerTop + head.offsetTop - (bandTop + pileTop * row));

    // Verify where it actually landed. `getBoundingClientRect` on the head reports its *stuck*
    // position, which is exactly what has to be cleared.
    var body = bodyOf(head);
    if (!body) return;
    requestAnimationFrame(function () {
      // A negative gap means the row is *stuck over* the body's opening lines: scrolling back by
      // exactly that much drops the row onto its slot un-stuck, where its bottom edge and the
      // body's first line meet. One pass converges — the row cannot re-stick once its natural
      // position has reached its sticky offset.
      var gap = body.getBoundingClientRect().top - head.getBoundingClientRect().bottom;
      if (gap < -1) scrollToY(scrollTopOf() + gap);
    });
  }

  function wireLessonAccordion(scope) {
    var prose = document.getElementById("lesson-prose") || document;
    var root = accordionRoot(scope && scope.querySelector ? scope : prose);
    if (!root) return;

    accordionSections(root).forEach(function (head) {
      var btn = head.querySelector(".lesson-section-toggle");
      if (!btn || btn.getAttribute("data-accordion-wired") === "1") return;
      btn.setAttribute("data-accordion-wired", "1");
      btn.addEventListener("click", function () {
        var wasOpen = btn.getAttribute("aria-expanded") === "true";
        openSection(root, wasOpen ? null : head);
        // Land on the row you just opened, under whatever is stacked above it.
        if (!wasOpen) scrollRowToTop(root, head);
      });
    });

    // In-prose cross-references ("see [Chart chrome](#chart-chrome)") point into sections that may
    // be shut. Open the owner first, then let the browser do the jump.
    prose.querySelectorAll("a[href^='#']").forEach(function (a) {
      if (a.getAttribute("data-accordion-wired") === "1") return;
      a.setAttribute("data-accordion-wired", "1");
      a.addEventListener("click", function (ev) {
        var id = a.getAttribute("href").slice(1);
        var target = id ? document.getElementById(id) : null;
        if (!target) return;
        ev.preventDefault();
        revealSection(target);
        var root = accordionRoot(prose);
        if (root && target.classList.contains("lesson-section-head")) {
          // Same landing as clicking the row itself, and for the same reason: `scrollIntoView` on a
          // sticky row overshoots into the section.
          scrollRowToTop(root, target);
        } else {
          target.scrollIntoView({ block: "start", behavior: "smooth" });
        }
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", "#" + id);
        }
      });
    });

    syncAccordionTop();
    if (window.ResizeObserver) {
      var band = document.querySelector(".lesson-plan-switcher");
      if (band && !band.getAttribute("data-accordion-observed")) {
        band.setAttribute("data-accordion-observed", "1");
        new ResizeObserver(syncAccordionTop).observe(band);
      }
    }
  }

  /**
   * **j / k — next and previous section**, for a reader who keeps their hands on the keys.
   *
   * `j` opens the next `##` section and `k` the previous one, landing exactly as a click on the row
   * does (`scrollRowToTop`), and focus moves to that row's toggle so Enter and Space still work on
   * it. With nothing open, either key opens the first section. `Shift+J` / `Shift+K` do the same
   * for the `###` folds inside the open section, one open at a time.
   *
   * Plain letters, the reading-app convention (Gmail, GitHub, feed readers), rather than a chord:
   * the app's own shortcuts are Ctrl/Option + letter and are forwarded to the canvas above, so a
   * bare letter cannot collide with them. Any modifier, and any focused field, leaves the key alone.
   */
  function isTypingTarget(t) {
    return !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
  }

  function stepSection(root, delta) {
    var heads = Array.prototype.slice.call(accordionSections(root));
    if (!heads.length) return false;
    var open = heads.findIndex(function (h) {
      var btn = h.querySelector(".lesson-section-toggle");
      return btn && btn.getAttribute("aria-expanded") === "true";
    });
    var next = open < 0 ? 0 : Math.max(0, Math.min(heads.length - 1, open + delta));
    if (next === open) return false;
    openSection(root, heads[next]);
    scrollRowToTop(root, heads[next]);
    var btn = heads[next].querySelector(".lesson-section-toggle");
    if (btn) btn.focus({ preventScroll: true });
    return true;
  }

  function stepSubsection(root, delta) {
    var head = Array.prototype.slice.call(accordionSections(root)).find(function (h) {
      var btn = h.querySelector(".lesson-section-toggle");
      return btn && btn.getAttribute("aria-expanded") === "true";
    });
    var body = head ? bodyOf(head) : null;
    if (!body) return false;
    var folds = Array.prototype.slice.call(body.querySelectorAll("details.lesson-section"));
    if (!folds.length) return false;
    var open = folds.findIndex(function (d) { return d.open; });
    var next = open < 0 ? 0 : Math.max(0, Math.min(folds.length - 1, open + delta));
    if (next === open) return false;
    folds.forEach(function (d, i) { d.open = i === next; });
    var summary = folds[next].querySelector("summary");
    folds[next].scrollIntoView({ block: "center", behavior: "auto" });
    if (summary) summary.focus({ preventScroll: true });
    return true;
  }

  function initSectionKeys() {
    document.addEventListener("keydown", function (ev) {
      if (ev.defaultPrevented || ev.repeat || ev.ctrlKey || ev.metaKey || ev.altKey) return;
      // The keys are the page's (data-next-key / data-previous-key, from ControlKey in :shortcuts).
      var prose = document.getElementById("lesson-prose");
      if (!prose) return;
      var code = ev.code || "";
      var next = prose.getAttribute("data-next-key");
      var previous = prose.getAttribute("data-previous-key");
      if (!code || (code !== next && code !== previous)) return;
      if (isTypingTarget(ev.target)) return;
      var root = accordionRoot(prose);
      if (!root) return;
      var delta = code === next ? 1 : -1;
      var moved = ev.shiftKey ? stepSubsection(root, delta) : stepSection(root, delta);
      if (moved) ev.preventDefault();
    });
  }

  /** A deep link (/learn/x#chart-chrome) lands before any of this runs — open it once. */
  function revealHashTarget() {
    var id = (window.location.hash || "").slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    revealSection(target);
    target.scrollIntoView({ block: "start" });
  }

  /**
   * Mark links that leave the current lesson document so CSS can prefix 🛫 (departure).
   * Stay-on-page: #canvas-dossier:, same-document #anchors, /learn/{thisId}.
   * Glyph/size live only in site.css (.lesson-leave-link::before) — one paint site.
   * Design: planning/design-notes/lesson-cross-linking-and-leave-links.md
   */
  function decorateLeaveLinks() {
    const prose = document.getElementById("lesson-prose");
    if (!prose) return;
    const lessonId = prose.getAttribute("data-lesson-id") || "";
    prose.querySelectorAll("a[href]").forEach(function (a) {
      const href = (a.getAttribute("href") || "").trim();
      a.classList.remove("lesson-leave-link");
      if (!href || href.charAt(0) === "#") {
        // #canvas-dossier: and in-page anchors stay; no departure mark.
        return;
      }
      if (href.indexOf("/designer-site/learn/") === 0 || href.indexOf("learn/") === 0) {
        const path = href.replace(/^https?:\/\/[^/]+/, "");
        const m = path.match(/^\/?learn\/([^/?#]+)/);
        const targetId = m ? m[1] : "";
        if (targetId && targetId === lessonId) return;
        a.classList.add("lesson-leave-link");
        return;
      }
      // Other site paths, absolute URLs, mailto, etc.
      if (
        href.charAt(0) === "/" ||
        href.indexOf("http://") === 0 ||
        href.indexOf("https://") === 0 ||
        href.indexOf("mailto:") === 0
      ) {
        a.classList.add("lesson-leave-link");
      }
    });
  }

  /**
   * The app's keyboard shortcuts, pressed while the lesson prose has focus. The canvas listens for
   * them itself (`rememberWebShortcuts`), but it is an iframe: a key pressed in the prose never
   * reaches it. So the page applies the same rule — **Ctrl (or Option) on a Mac, Alt elsewhere**, the letter
   * alone, matched on `event.code` because macOS Option+letter reports a symbol in `event.key` —
   * and forwards the letter as `shortcut:<letter>`.
   *
   * Focus then moves into the canvas, because what the key opened lives there: Peek's second letter
   * and Esc have to reach it too. A focused field in the prose keeps every key.
   *
   * KEEP `SHORTCUT_LETTERS` equal to `AppShortcut.entries`' letters (tutil-ui `AppShortcuts.kt`);
   * `AppShortcutsTest` (tutil-ui) holds the two together.
   */
  const SHORTCUT_LETTERS = "GRHPBEDIKFMTLU";

  function isMacBrowser() {
    const platform = (navigator.platform || "");
    return platform.indexOf("Mac") === 0 || (!platform && /Macintosh/.test(navigator.userAgent || ""));
  }

  /**
   * Jump-to callouts (`LessonJumpRefs`): a click on a path sends `where:<locationId>` to the canvas,
   * which goes there as clicking that path in the app's Glossary would. Delegated on the document,
   * so prose swapped in by a language change needs no rewiring. With no canvas on the page the
   * cards are marked inert and stay pictures.
   */
  function initJumpTo() {
    const iframe = document.querySelector(".app-pane iframe");
    if (!iframe) {
      document.documentElement.classList.add("lesson-jump-inert");
      return;
    }
    document.addEventListener("click", function (ev) {
      const go = ev.target && ev.target.closest ? ev.target.closest(".lesson-jump-go") : null;
      if (!go) return;
      const id = go.getAttribute("data-where");
      if (!id) return;
      ev.preventDefault();
      postToCanvas(iframe, "where:" + id);
      iframe.focus();
    });
  }

  /**
   * Lesson figures a click opens in the canvas (`LessonMediaRefs`, `lesson-figure-go`). The figure
   * names the plan it draws and the card it is a picture of: the plan comes up first when the
   * canvas is showing another of the lesson's plans, then the card, by the same `where:<id>`
   * message the jump-to callout sends. The canvas defers a `where:` a few frames, so the switch
   * lands before the jump. A figure of a what-if (`data-what-if`) sends `whatif:` between the two, so
   * it opens under Transforms with that what-if on, and every figure sends `pick:` (`data-pick`), the
   * year and Forecast ID it is drawn at, just before the jump; a Current Risk figure also sends
   * `riskchips:` (`data-risk-chips`), the chips it is drawn with, and a figure of the Modifiables list `modrow:`
   * (`data-mod-row`), the row it is drawn with selected, and a Bird's Eye figure `birdseye:` (`data-birds-eye`),
   * its Σ chip and open folds. A figure whose plan this canvas cannot show, or a
   * page with no canvas, is left a plain picture.
   */
  /** The mark [initFigureJumps] puts on a figure a click opens in the canvas. */
  const FIGURE_JUMP_BADGE = "\uD83C\uDFC3\u200D\u2642\uFE0F\u200D\u27A1\uFE0F"; // 🏃‍♂️‍➡️ man running, facing right: "this figure goes somewhere"

  function initFigureJumps() {
    const iframe = document.querySelector(".app-pane iframe");
    const plans = window.PlusauriLessonPlans;
    function canOpen(img) {
      return !!iframe && !!plans && plans.isCanvasPlan(img.getAttribute("data-canvas-dossier"));
    }
    function arm(root) {
      (root || document).querySelectorAll("img.lesson-figure-go").forEach(function (img) {
        if (!canOpen(img)) {
          img.classList.remove("lesson-figure-go");
          return;
        }
        img.setAttribute("tabindex", "0");
        img.setAttribute("role", "link");
        const tip = img.getAttribute("data-jump-tip");
        if (tip) img.setAttribute("title", tip);
        badge(img);
      });
    }
    /**
     * A corner badge on every armed figure, so a reader (and a reviewer) sees at a glance which
     * pictures open in the canvas. A sibling pinned to the image's top-right corner rather than a
     * wrapper: lesson images size against their paragraph (`width: 100%`, `max-width`), and wrapping
     * them would change that. It takes no pointer, so a click on it is a click on the figure.
     */
    function badge(img) {
      if (img.nextElementSibling && img.nextElementSibling.classList.contains("lesson-figure-jump-badge")) return;
      const mark = document.createElement("span");
      mark.className = "lesson-figure-jump-badge" + (img.hasAttribute("data-what-if") ? " is-what-if" : "");
      mark.setAttribute("aria-hidden", "true");
      mark.textContent = FIGURE_JUMP_BADGE;
      img.insertAdjacentElement("afterend", mark);
      if (img.parentElement) img.parentElement.classList.add("lesson-figure-jump-host");
      function place() {
        mark.style.top = img.offsetTop + 6 + "px";
        mark.style.left = img.offsetLeft + img.offsetWidth - mark.offsetWidth - 6 + "px";
      }
      place();
      img.addEventListener("load", place);
      if (typeof ResizeObserver === "function") new ResizeObserver(place).observe(img);
      else window.addEventListener("resize", place);
    }
    function go(img) {
      plans.switchDossier(img.getAttribute("data-canvas-dossier"));
      // A figure of a what-if: switch it on first, so the place opens showing it.
      const whatIf = img.getAttribute("data-what-if");
      if (whatIf) postToCanvas(iframe, "whatif:" + whatIf);
      // The year and Forecast ID the figure is drawn at, so the card opens on the same pair.
      const pick = img.getAttribute("data-pick");
      if (pick) postToCanvas(iframe, "pick:" + pick);
      // A Current Risk figure: the chips it is drawn with, so the panel shows the same marks.
      const riskChips = img.getAttribute("data-risk-chips");
      if (riskChips) postToCanvas(iframe, "riskchips:" + riskChips);
      // A figure of the Modifiables list: the row it is drawn with selected, so the list opens on it.
      const modRow = img.getAttribute("data-mod-row");
      if (modRow) postToCanvas(iframe, "modrow:" + modRow);
      const birdsEye = img.getAttribute("data-birds-eye");
      if (birdsEye) postToCanvas(iframe, "birdseye:" + birdsEye);
      postToCanvas(iframe, "where:" + img.getAttribute("data-where"));
      iframe.focus();
    }
    function figureAt(ev) {
      return ev.target && ev.target.closest ? ev.target.closest("img.lesson-figure-go") : null;
    }
    arm(document);
    if (plans) {
      // A language change replaces the prose; arm its figures again.
      const prev = plans.decorateProseLinks;
      plans.decorateProseLinks = function () {
        if (typeof prev === "function") prev();
        arm(document.getElementById("lesson-prose"));
      };
    }
    document.addEventListener("click", function (ev) {
      const img = figureAt(ev);
      if (!img) return;
      ev.preventDefault();
      go(img);
    });
    document.addEventListener("keydown", function (ev) {
      if (ev.key !== "Enter" && ev.key !== " ") return;
      const img = figureAt(ev);
      if (!img) return;
      ev.preventDefault();
      go(img);
    });
  }

  function initShortcutForwarding() {
    const iframe = document.querySelector(".app-pane iframe");
    if (!iframe) return;
    const mac = isMacBrowser();
    document.addEventListener("keydown", function (ev) {
      if (ev.defaultPrevented || ev.repeat || ev.shiftKey || ev.metaKey) return;
      // On a Mac, Option works as well as Ctrl: another app can claim a Ctrl chord system-wide,
      // which no page can win back (see webAppShortcut in AppShortcuts.kt).
      const held = mac ? (ev.ctrlKey !== ev.altKey) : (ev.altKey && !ev.ctrlKey);
      if (!held) return;
      const code = ev.code || "";
      if (code.length !== 4 || code.indexOf("Key") !== 0) return;
      const letter = code.charAt(3);
      if (SHORTCUT_LETTERS.indexOf(letter) < 0) return;
      const t = ev.target;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable)) return;
      ev.preventDefault();
      postToCanvas(iframe, "shortcut:" + letter);
      iframe.focus();
    });
  }

  /**
   * The intro card is drawn smaller than its file (site.css), which loses its fine lettering.
   * Click, Enter or Space opens it in a modal at the file's own size, capped to the viewport;
   * any click or Esc closes it. The dialog lives on <body> so the lesson-pane image rules
   * (border, width) do not reach it.
   */
  function wireIntroCardZoom(root) {
    const imgs = root.querySelectorAll(".lesson-intro-card img");
    if (!imgs.length || typeof HTMLDialogElement !== "function") return;
    let dialog = null;
    function open(img) {
      if (!dialog) {
        dialog = document.createElement("dialog");
        dialog.className = "lesson-card-zoom";
        dialog.addEventListener("click", function () { dialog.close(); });
        dialog.addEventListener("close", function () {
          const from = dialog.zoomedFrom;
          dialog.textContent = "";
          if (from) from.focus({ preventScroll: true });
        });
        document.body.appendChild(dialog);
      }
      const big = document.createElement("img");
      big.src = img.currentSrc || img.src;
      big.alt = img.alt || "";
      dialog.textContent = "";
      dialog.appendChild(big);
      dialog.zoomedFrom = img;
      dialog.showModal();
    }
    imgs.forEach(function (img) {
      // A frame the size of the card, so the magnifier badge sits on the card's own corner.
      const frame = document.createElement("span");
      frame.className = "lesson-card-zoom-frame";
      img.parentNode.insertBefore(frame, img);
      frame.appendChild(img);
      const badge = document.createElement("span");
      badge.className = "lesson-card-zoom-badge";
      badge.setAttribute("aria-hidden", "true");
      badge.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" ' +
        'stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/>' +
        '<path d="M10.5 7.5v6M7.5 10.5h6"/></svg>';
      frame.appendChild(badge);
      img.classList.add("lesson-card-zoomable");
      img.setAttribute("tabindex", "0");
      img.setAttribute("role", "button");
      img.addEventListener("click", function () { open(img); });
      img.addEventListener("keydown", function (ev) {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          open(img);
        }
      });
    });
  }

  function init() {
    initHeaderCollapse();
    initGutter();
    initCanvasReady();
    initThemeSync();
    initLangSync();
    initReachOutBridge();
    initCanvasDossierSwitch();
    initShortcutForwarding();
    initJumpTo();
    initFigureJumps();
    initSectionKeys();
    const proseRoot = document.getElementById("lesson-prose") || document;
    wireIntroChrome(proseRoot);
    wireIntroCardZoom(proseRoot);
    wireLessonAccordion(proseRoot);
    wireTermTips(proseRoot);
    decorateLeaveLinks();
    revealHashTarget();
    window.addEventListener("resize", syncAccordionTop);
    // Re-run after multi-dossier tags prose links.
    if (window.PlusauriLessonPlans) {
      const prev = window.PlusauriLessonPlans.decorateProseLinks;
      window.PlusauriLessonPlans.decorateProseLinks = function () {
        if (typeof prev === "function") prev();
        decorateLeaveLinks();
      };
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
