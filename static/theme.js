/**
 * Plusauri site theme — light/dark, aligned with the canvas app (PlusauriPaper / PlusauriDark).
 *
 * - Persistence: localStorage key `plusauri.theme` (`light` | `dark`).
 * - Application: `data-theme` on <html> (Pico + site.css).
 * - Toggle: any `[data-theme-toggle]` control.
 * - Events: `plusauri-theme` CustomEvent on window with `{ theme }` so lesson-split can
 *   postMessage the canvas iframe (and the reverse path can call setTheme).
 *
 * Early FOUC prevention is a tiny inline script in page heads; this file owns interactive
 * behavior and full apply (toggle labels, re-broadcast).
 */
(function () {
  const KEY = "plusauri.theme";

  function systemPrefersDark() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function resolveTheme() {
    try {
      const stored = localStorage.getItem(KEY);
      if (stored === "light" || stored === "dark") return stored;
    } catch (_) {
      /* private mode */
    }
    return systemPrefersDark() ? "dark" : "light";
  }

  function currentTheme() {
    const attr = document.documentElement.getAttribute("data-theme");
    if (attr === "light" || attr === "dark") return attr;
    return resolveTheme();
  }

  function updateToggleButtons(theme) {
    const dark = theme === "dark";
    const label = dark
      ? "Dark theme — click for light"
      : "Light theme — click for dark";
    const glyph = dark ? "☾" : "☀";
    document.querySelectorAll("[data-theme-toggle]").forEach(function (btn) {
      btn.textContent = glyph;
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
      btn.setAttribute("aria-pressed", dark ? "true" : "false");
    });
  }

  /**
   * @param {"light"|"dark"} theme
   * @param {{ persist?: boolean, broadcast?: boolean }} [opts]
   */
  function setTheme(theme, opts) {
    if (theme !== "light" && theme !== "dark") return;
    const options = opts || {};
    const persist = options.persist !== false;
    const broadcast = options.broadcast !== false;

    document.documentElement.setAttribute("data-theme", theme);
    updateToggleButtons(theme);

    if (persist) {
      try {
        localStorage.setItem(KEY, theme);
      } catch (_) {
        /* private mode / quota */
      }
    }
    if (broadcast) {
      window.dispatchEvent(
        new CustomEvent("plusauri-theme", { detail: { theme: theme } }),
      );
    }
  }

  function toggleTheme() {
    setTheme(currentTheme() === "dark" ? "light" : "dark");
  }

  function init() {
    // Re-apply in case the inline FOUC script was missing; don't re-broadcast on boot
    // (lesson-split posts to the canvas on iframe load instead).
    setTheme(resolveTheme(), { persist: false, broadcast: false });

    document.addEventListener("click", function (ev) {
      const btn = ev.target && ev.target.closest && ev.target.closest("[data-theme-toggle]");
      if (!btn) return;
      ev.preventDefault();
      toggleTheme();
    });
  }

  // Public API for lesson-split.js (canvas → host path).
  window.PlusauriTheme = {
    KEY: KEY,
    resolve: resolveTheme,
    current: currentTheme,
    set: setTheme,
    toggle: toggleTheme,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
