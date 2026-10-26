/**
 * "Join our community" (CommunityInvite.kt): the sticker opens its <dialog>, and the form posts to
 * /api/community/join. Delegated from the document, because a lesson's /prose swap replaces the
 * sticker and dialog after this script has run. Without this script the sticker is a plain link to
 * the forum.
 */
(function () {
  const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function reset(dialog) {
    const form = dialog.querySelector("form");
    const sent = dialog.querySelector(".community-join-sent");
    form.hidden = false;
    sent.hidden = true;
    sent.querySelectorAll("[data-status]").forEach(function (p) { p.hidden = true; });
    showError(form, null);
  }

  function showError(form, message) {
    const err = form.querySelector(".community-join-error");
    err.textContent = message || "";
    err.hidden = !message;
  }

  function showSent(dialog, status) {
    const sent = dialog.querySelector(".community-join-sent");
    dialog.querySelector("form").hidden = true;
    const line = sent.querySelector('[data-status="' + status + '"]') ||
      sent.querySelector('[data-status="queued"]');
    line.hidden = false;
    sent.hidden = false;
    const done = sent.querySelector("button");
    if (done) done.focus();
  }

  document.addEventListener("click", function (e) {
    const opener = e.target.closest("[data-community-join]");
    if (opener) {
      const dialog = document.getElementById(opener.getAttribute("data-community-join"));
      if (!dialog || typeof dialog.showModal !== "function") return; // fall back to the link
      e.preventDefault();
      reset(dialog);
      dialog.showModal();
      const email = dialog.querySelector('input[name="email"]');
      if (email) email.focus();
      return;
    }
    const closer = e.target.closest("[data-community-join-close]");
    if (closer) {
      const dialog = closer.closest("dialog");
      if (dialog) dialog.close();
      return;
    }
    // A click on the backdrop lands on the <dialog> itself.
    if (e.target.matches && e.target.matches("dialog.community-join")) e.target.close();
  });

  document.addEventListener("submit", function (e) {
    const form = e.target.closest(".community-join-form");
    if (!form) return;
    e.preventDefault();
    const dialog = form.closest("dialog");
    const data = new FormData(form);
    const email = String(data.get("email") || "").trim();
    if (!EMAIL.test(email)) {
      showError(form, form.dataset.msgInvalid);
      form.querySelector('input[name="email"]').focus();
      return;
    }
    showError(form, null);
    const submit = form.querySelector('button[type="submit"]');
    const label = submit.innerHTML; // per-mode spans; site.css shows the one for the checked mode
    submit.disabled = true;
    submit.setAttribute("aria-busy", "true");
    submit.textContent = form.dataset.msgSending;
    const body = {
      email: email,
      mode: String(data.get("mode") || "Participant"),
      // The box is hidden, not removed, for a lurker; the server ignores it for that mode.
      news: data.get("news") === "on",
      firstName: String(data.get("firstName") || "").trim() || null,
      stage: data.get("stage") || null, // optional; nothing checked by default
      language: document.body.getAttribute("data-lang") || document.documentElement.lang || null,
      page: location.pathname,
      website: String(data.get("website") || ""),
    };
    fetch(form.getAttribute("action"), {
      method: "POST",
      headers: { "Content-Type": "application/json", "Accept": "application/json" },
      body: JSON.stringify(body),
    })
      .then(function (r) { return r.json().catch(function () { return { ok: false }; }); })
      .then(function (result) {
        if (result && result.ok) {
          showSent(dialog, result.status);
        } else if (result && result.message === "invalid-email") {
          showError(form, form.dataset.msgInvalid);
        } else {
          showError(form, form.dataset.msgFailed);
        }
      })
      .catch(function () { showError(form, form.dataset.msgFailed); })
      .finally(function () {
        submit.disabled = false;
        submit.removeAttribute("aria-busy");
        submit.innerHTML = label;
      });
  });
})();
