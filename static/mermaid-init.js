/**
 * Render ```mermaid fences that flexmark emits as <pre><code class="language-mermaid">.
 * Loaded only on pages that carry such fences (see Layout.mermaidAssets / htmlNeedsMermaid).
 *
 * Mermaid's default startOnLoad looks for .mermaid nodes, not fenced code — so we promote each
 * language-mermaid block into a .mermaid div, then run once.
 *
 * [window.PlusauriMermaid.runIn(root)] re-runs after a live prose swap (language change).
 */
(function () {
  function preferDark() {
    try {
      // Honor the shared site theme (data-theme from theme.js) before OS preference.
      const attr = document.documentElement.getAttribute("data-theme");
      if (attr === "dark") return true;
      if (attr === "light") return false;
      return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch (_) {
      return false;
    }
  }

  function promoteFences(root) {
    var scope = root || document;
    scope.querySelectorAll("pre code.language-mermaid").forEach(function (el) {
      var pre = el.parentElement;
      if (!pre || !pre.parentNode) return;
      var div = document.createElement("div");
      div.className = "mermaid";
      div.textContent = el.textContent || "";
      pre.parentNode.replaceChild(div, pre);
    });
  }

  function go(root) {
    if (typeof mermaid === "undefined") return;
    promoteFences(root);
    mermaid.initialize({
      startOnLoad: false,
      theme: preferDark() ? "dark" : "neutral",
      securityLevel: "strict",
      flowchart: { htmlLabels: true, curve: "basis" },
    });
    var nodes = (root || document).querySelectorAll(".mermaid");
    if (!nodes.length) return;
    return mermaid.run({ nodes: nodes });
  }

  window.PlusauriMermaid = {
    run: function () {
      return go(document);
    },
    runIn: function (root) {
      return go(root || document);
    },
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      go(document);
    });
  } else {
    go(document);
  }
})();
