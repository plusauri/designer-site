(function () {
  function bindSeenPriority(root) {
    var qid = root.getAttribute("data-survey-seen-priority");
    if (!qid) return;
    var none = root.querySelector("[data-survey-seen-none]");
    var seens = Array.prototype.slice.call(root.querySelectorAll("[data-survey-seen]"));
    var priorities = Array.prototype.slice.call(root.querySelectorAll("[data-survey-priority]"));

    function sync() {
      var noneOn = none && none.checked;
      seens.forEach(function (box) {
        box.disabled = noneOn;
        if (noneOn) box.checked = false;
      });
      priorities.forEach(function (radio) {
        var seenBox = seens.filter(function (b) {
          return b.getAttribute("data-survey-seen") === radio.getAttribute("data-survey-priority");
        })[0];
        var allowed = !noneOn && seenBox && seenBox.checked;
        radio.disabled = !allowed;
        if (!allowed) radio.checked = false;
      });
    }

    if (none) none.addEventListener("change", sync);
    seens.forEach(function (box) {
      box.addEventListener("change", function () {
        if (box.checked && none) none.checked = false;
        sync();
      });
    });
    sync();
  }

  document.querySelectorAll("[data-survey-seen-priority]").forEach(bindSeenPriority);
})();
