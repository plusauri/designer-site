/*
 * Start Here decision map (/start-here; markup from StartHerePage.kt).
 *
 * The page works without this: each route is an anchor to its rung, and each rung opens by click.
 * This adds the routing — choosing an answer opens that rung, marks the rungs above it "worth a
 * look", and remembers the choice in the URL (#from-5) — plus open-all / close-all, and opening a
 * closed rung when a link elsewhere on the page points at it.
 */
(function () {
  "use strict";
  var root = document.querySelector(".start-here");
  if (!root) return;
  var rungs = Array.prototype.slice.call(root.querySelectorAll(".sh-ladder .sh-rung"));
  var routes = Array.prototype.slice.call(root.querySelectorAll(".sh-route"));

  function rungNumber(el) {
    return Number(el.getAttribute("data-rung"));
  }

  function scrollTo(el) {
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function route(start, scroll) {
    rungs.forEach(function (d) {
      var n = rungNumber(d);
      d.open = n === start;
      d.classList.toggle("is-earlier", n < start);
    });
    routes.forEach(function (r) {
      r.classList.toggle("is-active", Number(r.getAttribute("data-start")) === start);
    });
    if (scroll) scrollTo(document.getElementById("rung-" + start));
  }

  function openRungFromHash(scroll) {
    var hash = window.location.hash;
    var from = /^#from-(\d+)$/.exec(hash);
    if (from) {
      route(Number(from[1]), scroll);
      return;
    }
    var target = /^#rung-(\d+)$/.test(hash) ? document.getElementById(hash.slice(1)) : null;
    if (target && target.tagName === "DETAILS") {
      target.open = true;
      if (scroll) scrollTo(target);
    }
  }

  routes.forEach(function (r) {
    r.addEventListener("click", function (e) {
      e.preventDefault();
      var start = Number(r.getAttribute("data-start"));
      history.replaceState(null, "", "#from-" + start);
      route(start, true);
    });
  });

  function setAll(open) {
    return function (e) {
      e.preventDefault();
      rungs.forEach(function (d) { d.open = open; });
    };
  }
  var openAll = root.querySelector("[data-sh-open-all]");
  var closeAll = root.querySelector("[data-sh-close-all]");
  if (openAll) openAll.addEventListener("click", setAll(true));
  if (closeAll) closeAll.addEventListener("click", setAll(false));

  // Rail and "Also on rung N" links point at a rung that may be closed.
  window.addEventListener("hashchange", function () { openRungFromHash(true); });
  openRungFromHash(true);
})();
