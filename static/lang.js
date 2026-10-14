/**
 * Plusauri site language — shared host preference for Learning Center prose + canvas AppLang.
 *
 * - Persistence: localStorage + cookie `plusauri.lang` (`en` | `fr` | `de` | `es`).
 * - Application: `data-lang` / `data-prose-lang` on <html> and <body>.
 * - Controls: any `[data-lang-select]` <select> or buttons `[data-lang-set]`.
 * - Events: `plusauri-lang` CustomEvent on window with `{ lang }` so lesson-split can
 *   swap prose and postMessage the canvas iframe.
 *
 * Same key as canvas wasm toolbar and lesson-split.js — one preference across the site.
 */
(function () {
  var KEY = "plusauri.lang";
  var COOKIE = "plusauri.lang";
  var SUPPORTED = { en: true, fr: true, de: true, es: true };
  var FLAGS = { en: "🇺🇸", fr: "🇫🇷", de: "🇩🇪", es: "🇪🇸" };
  var LABELS = { en: "English", fr: "Français", de: "Deutsch", es: "Español" };

  function normalize(raw) {
    if (!raw) return null;
    var code = String(raw).trim().toLowerCase().split(/[-_]/)[0];
    return SUPPORTED[code] ? code : null;
  }

  function readCookie() {
    try {
      var parts = String(document.cookie || "").split(";");
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i].trim();
        if (p.indexOf(COOKIE + "=") === 0) {
          return normalize(decodeURIComponent(p.slice(COOKIE.length + 1)));
        }
      }
    } catch (_) {
      /* ignore */
    }
    return null;
  }

  function resolveLang() {
    // URL is strongest (shareable lesson links).
    try {
      var q = normalize(new URL(window.location.href).searchParams.get("lang"));
      if (q) return q;
    } catch (_) {
      /* ignore */
    }
    try {
      var fromStore = normalize(localStorage.getItem(KEY));
      if (fromStore) return fromStore;
    } catch (_) {
      /* private mode */
    }
    var fromCookie = readCookie();
    if (fromCookie) return fromCookie;
    var attr =
      (document.body && document.body.getAttribute("data-prose-lang")) ||
      document.documentElement.getAttribute("data-prose-lang") ||
      document.documentElement.getAttribute("data-lang");
    return normalize(attr) || "en";
  }

  function currentLang() {
    var attr =
      (document.body && document.body.getAttribute("data-prose-lang")) ||
      document.documentElement.getAttribute("data-prose-lang") ||
      document.documentElement.getAttribute("data-lang");
    return normalize(attr) || resolveLang();
  }

  function persistCookie(lang) {
    try {
      document.cookie =
        COOKIE +
        "=" +
        encodeURIComponent(lang) +
        "; path=/; max-age=" +
        60 * 60 * 24 * 365 +
        "; SameSite=Lax";
    } catch (_) {
      /* ignore */
    }
  }

  function updateControls(lang) {
    document.querySelectorAll("[data-lang-select]").forEach(function (sel) {
      if (sel.value !== lang) sel.value = lang;
    });
    document.querySelectorAll("[data-lang-set]").forEach(function (btn) {
      var code = btn.getAttribute("data-lang-set") || "";
      var on = code === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    document.querySelectorAll("[data-lang-face]").forEach(function (el) {
      el.textContent = (FLAGS[lang] || "") + " " + (lang || "en").toUpperCase();
      el.setAttribute("title", LABELS[lang] || lang);
    });
  }

  /**
   * @param {string} lang
   * @param {{ persist?: boolean, broadcast?: boolean, updateUrl?: boolean }} [opts]
   */
  function setLang(lang, opts) {
    var code = normalize(lang);
    if (!code) return;
    var options = opts || {};
    var persist = options.persist !== false;
    var broadcast = options.broadcast !== false;
    var updateUrl = options.updateUrl === true;

    document.documentElement.setAttribute("data-lang", code);
    document.documentElement.setAttribute("data-prose-lang", code);
    if (document.body) {
      document.body.setAttribute("data-prose-lang", code);
      document.body.setAttribute("data-lang", code);
    }
    updateControls(code);

    if (persist) {
      try {
        localStorage.setItem(KEY, code);
      } catch (_) {
        /* private mode */
      }
      persistCookie(code);
    }

    if (updateUrl) {
      try {
        var url = new URL(window.location.href);
        if (url.searchParams.get("lang") !== code) {
          url.searchParams.set("lang", code);
          window.history.replaceState(null, "", url.toString());
        }
      } catch (_) {
        /* ignore */
      }
    }

    if (broadcast) {
      window.dispatchEvent(
        new CustomEvent("plusauri-lang", { detail: { lang: code } }),
      );
    }
  }

  function onReady() {
    // Prefer URL / host storage / cookie over a bare default; server stamp is a fallback.
    // On lesson pages, lesson-split.js re-asserts and loads prose if needed.
    var initial = resolveLang();
    setLang(initial, { broadcast: false, updateUrl: false });

    function navigateOrBroadcast(code) {
      setLang(code, { updateUrl: true, broadcast: true });
      // Marketing / learn index: bodies are server-rendered per locale — reload so home/pricing
      // markdown and nav chrome switch. Lesson split pages keep the iframe warm and only swap prose.
      var onLessonSplit = !!document.getElementById("lesson-prose");
      if (!onLessonSplit) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.set("lang", code);
          window.location.assign(url.toString());
        } catch (_) {
          window.location.reload();
        }
      }
    }

    document.addEventListener("change", function (ev) {
      var t = ev.target;
      if (!t || !t.getAttribute) return;
      if (t.hasAttribute("data-lang-select")) {
        navigateOrBroadcast(t.value);
      }
    });
    document.addEventListener("click", function (ev) {
      var btn =
        ev.target &&
        ev.target.closest &&
        ev.target.closest("[data-lang-set]");
      if (!btn) return;
      ev.preventDefault();
      navigateOrBroadcast(btn.getAttribute("data-lang-set"));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady);
  } else {
    onReady();
  }

  window.PlusauriLang = {
    KEY: KEY,
    COOKIE: COOKIE,
    FLAGS: FLAGS,
    LABELS: LABELS,
    normalize: normalize,
    resolve: resolveLang,
    current: currentLang,
    set: setLang,
  };
})();
