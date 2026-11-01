/**
 * "See every feature" (FeatureList.kt): each link opens the feature-list <dialog> on the same page.
 * Without this script, or without <dialog> support, the links go to /features.
 */
(function () {
  document.addEventListener("click", function (e) {
    const opener = e.target.closest("[data-feature-list]");
    if (opener) {
      const dialog = document.getElementById(opener.getAttribute("data-feature-list"));
      if (!dialog || typeof dialog.showModal !== "function") return; // fall back to the page
      e.preventDefault();
      dialog.showModal();
      const body = dialog.querySelector(".feature-list-body");
      if (body) body.scrollTop = 0;
      return;
    }
    if (e.target.closest("[data-feature-list-close]")) {
      const dialog = e.target.closest("dialog");
      if (dialog) dialog.close();
      return;
    }
    // A click on the backdrop lands on the <dialog> itself.
    if (e.target.matches && e.target.matches("dialog.feature-list")) e.target.close();
  });
})();
