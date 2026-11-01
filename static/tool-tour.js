/**
 * The homepage tool tour (`[data-tool-tour]` in content/home*.md): app screenshots that crossfade,
 * with a caption list beside them that doubles as the controls.
 *
 * The timer is the active caption's progress bar. Its CSS animation fills over one slide's time and
 * `animationend` advances the slide, so every way of holding a slide is a CSS state, not a second
 * clock to keep in step: hovering the captions or keyboard focus pauses the bar (site.css),
 * `is-idle` pauses it while the tour is off screen or the tab is hidden, and `is-stopped` removes it. Choosing a caption or the
 * pause button stops the tour for good; the play button starts it again. With reduced motion the
 * tour starts stopped.
 *
 * Without this script the first slide shows on its own and the captions still read as a list.
 */
(function () {
  document.querySelectorAll("[data-tool-tour]").forEach(function (tour) {
    const buttons = Array.from(tour.querySelectorAll(".tool-tour-captions button"));
    const slides = Array.from(tour.querySelectorAll(".tool-tour-slides figure"));
    const toggle = tour.querySelector(".tool-tour-toggle");
    if (buttons.length === 0 || buttons.length !== slides.length) return;

    let current = 0;
    let offscreen = false;

    buttons.forEach(function (button) {
      const bar = document.createElement("span");
      bar.className = "tool-tour-progress";
      bar.setAttribute("aria-hidden", "true");
      button.appendChild(bar);
    });

    function show(index) {
      current = (index + slides.length) % slides.length;
      slides.forEach(function (slide, i) {
        const on = i === current;
        slide.classList.toggle("is-active", on);
        slide.setAttribute("aria-hidden", on ? "false" : "true");
      });
      buttons.forEach(function (button, i) {
        const on = i === current;
        button.classList.toggle("is-active", on);
        if (on) button.setAttribute("aria-current", "true");
        else button.removeAttribute("aria-current");
      });
    }

    function setStopped(stopped) {
      tour.classList.toggle("is-stopped", stopped);
      if (!toggle) return;
      const label = stopped ? toggle.dataset.labelPlay : toggle.dataset.labelPause;
      toggle.setAttribute("aria-label", label);
      toggle.title = label;
    }

    function updateIdle() {
      tour.classList.toggle("is-idle", offscreen || document.hidden);
    }

    tour.addEventListener("animationend", function (event) {
      if (event.target.classList.contains("tool-tour-progress")) show(current + 1);
    });

    buttons.forEach(function (button, i) {
      button.addEventListener("click", function () {
        show(i);
        setStopped(true);
      });
      button.addEventListener("keydown", function (event) {
        const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
        if (!step) return;
        event.preventDefault();
        show(current + step);
        setStopped(true);
        buttons[current].focus();
      });
    });

    if (toggle) {
      toggle.addEventListener("click", function () {
        setStopped(!tour.classList.contains("is-stopped"));
      });
    }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        offscreen = !entries[0].isIntersecting;
        updateIdle();
      }).observe(tour);
    }
    document.addEventListener("visibilitychange", updateIdle);

    show(0);
    setStopped(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  });
})();
