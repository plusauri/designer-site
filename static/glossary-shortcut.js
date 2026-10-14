/**
 * The glossary key → the glossary, from any page on the site.
 *
 * **Ctrl-G (or Option-G) on a Mac, Alt+G elsewhere** — the web's rule for every app shortcut. On Windows and
 * Linux the browser owns Ctrl-letter (Ctrl-R is reload, Ctrl-G is Find Again in Firefox), and
 * Alt+letter is already this product's web-side convention there — Alt+L / Alt+F / Alt+C switch
 * Learning Center surfaces. On macOS the browser's chords are on Cmd, so Ctrl-G is free and matches
 * the desktop app. The canvas follows the same rule (tutil-ui `WebShortcuts`).
 *
 * Loaded on every page rather than only on /learn: the moment a reader needs a definition is
 * whenever they meet the word, and that includes the home and pricing copy. On a lesson page with a
 * canvas, lesson-split.js forwards the key to the canvas instead, which opens the glossary beside
 * the lesson rather than navigating away from it.
 *
 * KEEP the modifier rules in sync with learn-index.js — the two listen on the same document and
 * must not both claim a chord.
 */
(function () {
  var platform = navigator.platform || "";
  var mac = platform.indexOf("Mac") === 0 || (!platform && /Macintosh/.test(navigator.userAgent || ""));
  document.addEventListener("keydown", function (ev) {
    if (ev.defaultPrevented || ev.metaKey || ev.shiftKey) return;
    // On a Mac, Option-G works as well as Ctrl-G: an app can claim Ctrl-G system-wide (an AI
    // assistant does on some machines), and a page can never win a global hotkey back.
    var held = mac ? (ev.ctrlKey !== ev.altKey) : (ev.altKey && !ev.ctrlKey);
    if (!held) return;
    // Never steal the chord from someone typing.
    var t = ev.target;
    if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) return;
    // Physical key: on macOS Option+G, event.key is "©", not the letter.
    var isG = (ev.code || "") === "KeyG" || (ev.key || "").toLowerCase() === "g";
    if (!isG) return;
    // A lesson page forwards it to the canvas (lesson-split.js).
    if (document.querySelector(".app-pane iframe")) return;
    // Already here — let the reader keep whatever they typed rather than reloading it away.
    if (window.location.pathname.indexOf("/designer-site/glossary") === 0) return;
    ev.preventDefault();
    window.location.href = "/designer-site/glossary";
  });
})();
