/**
 * The free-trial banner (TrialCallout.kt) pops in on the first page of a visit only. Later pages
 * in the same tab session show it already in place: a pop on every lesson would turn a nudge into
 * a nag. Storage can be blocked; the banner then simply pops each time.
 */
(function () {
  const KEY = "plusauri.trialCallout.seen";
  try {
    if (sessionStorage.getItem(KEY)) {
      document.querySelectorAll("[data-trial-callout]").forEach(function (el) {
        el.classList.add("is-settled");
      });
    } else {
      sessionStorage.setItem(KEY, "1");
    }
  } catch (e) {
    // Private mode or blocked storage: leave the animation as it is.
  }
})();
