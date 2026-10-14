/*
 * Click-to-play for the entry-speed intro clip (IntroVideoPoster.kt).
 *
 * The server emits a Start-here card (as a <template> that learn-index.js clones into its grid)
 * and a <dialog> with no <video> element in it. Pressing the card opens the dialog and builds the
 * player on first open, so a visitor who never watches downloads zero video bytes. That is the
 * whole point of the pattern: this sits on /learn, the front door, and most visitors are not
 * here for a video.
 *
 * Closing the dialog (× button, Esc, or a click on the backdrop) pauses the clip; reopening
 * resumes from where it stopped rather than rebuilding.
 */
(function () {
  "use strict";

  function playerFor(dialog) {
    var frame = dialog.querySelector(".intro-video-frame");
    if (!frame) return null;
    var existing = frame.querySelector("video");
    if (existing) return existing;
    var src = dialog.getAttribute("data-src");
    if (!src) return null;

    var video = document.createElement("video");
    video.className = "intro-video-player";
    video.src = src;
    var poster = dialog.getAttribute("data-poster");
    if (poster) video.poster = poster;
    video.controls = true;
    video.playsInline = true;
    // Not muted: the clip carries soft music (no narration). The press that opened the dialog
    // is the user gesture browsers require for sound, so play() is allowed to start audibly.
    video.preload = "auto";
    video.setAttribute("playsinline", "");
    frame.textContent = "";
    frame.appendChild(video);
    return video;
  }

  function open(dialog) {
    if (typeof dialog.showModal !== "function") {
      // No <dialog> support: fall back to the clip alone, which is still the honest answer.
      window.location.href = dialog.getAttribute("data-src");
      return;
    }
    if (!dialog.open) dialog.showModal();
    var video = playerFor(dialog);
    if (!video) return;
    // The press was the consent to play; a dialog that opens on a paused player wastes the click.
    var started = video.play();
    if (started && typeof started.catch === "function") started.catch(function () {});
    video.focus({ preventScroll: true });
  }

  function wireDialog(dialog) {
    dialog.addEventListener("close", function () {
      var video = dialog.querySelector("video");
      if (video && !video.paused) video.pause();
    });
    // Backdrop click closes: the dialog element receives the click with a target of itself
    // (its children cover the panel), so anything landing on the element proper is outside.
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
  }

  function wire() {
    var dialogs = document.querySelectorAll("dialog[data-intro-video]");
    for (var i = 0; i < dialogs.length; i++) wireDialog(dialogs[i]);
    // The card is inserted by learn-index.js after this script may have run — delegate.
    document.addEventListener("click", function (e) {
      var opener = e.target && e.target.closest && e.target.closest("[data-intro-video-open]");
      if (!opener) return;
      var dialog = document.getElementById(opener.getAttribute("data-intro-video-open"));
      if (!dialog) return;
      e.preventDefault();
      open(dialog);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wire);
  } else {
    wire();
  }
})();
