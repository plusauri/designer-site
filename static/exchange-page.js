// The plan stays in this page. This file does not call fetch, and the page has no form to submit.
// The only network read is the converter itself, a static file this site already sent with the page.

const AS_OF = new Date().getFullYear();

function setStatus(id, message) {
  const node = document.getElementById(id);
  if (node) node.textContent = message;
}

function showNotes(listId, notes) {
  const list = document.getElementById(listId);
  if (!list) return;
  list.replaceChildren();
  for (const note of notes || []) {
    const item = document.createElement("li");
    const kind = note.kind === "approximated" ? "Approximated" : "Left out";
    item.textContent = kind + ": " + note.sentence;
    list.appendChild(item);
  }
}

function downloadLink(filename, blob) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.textContent = "Download " + filename;
  return link;
}

function placeDownload(id, link) {
  const slot = document.getElementById(id);
  if (!slot) return;
  slot.replaceChildren(link);
}

function bytesToBase64(bytes) {
  let binary = "";
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

function base64ToBytes(payload) {
  const binary = atob(payload);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return bytes;
}

async function loadConverter() {
  const loaded = globalThis.projectionlab;
  if (!loaded) throw new Error("The converter did not load. Reload the page.");
  const mod = await loaded;
  if (typeof mod.projectionLabToTutilis !== "function") {
    throw new Error("The converter did not load. Reload the page.");
  }
  return mod;
}

let converterPromise = null;
function converter() {
  if (!converterPromise) {
    converterPromise = loadConverter().catch((error) => {
      converterPromise = null;
      throw error;
    });
  }
  return converterPromise;
}

async function fileText(input) {
  const file = input && input.files && input.files[0];
  if (!file) return "";
  return await file.text();
}

document.getElementById("pl-convert").addEventListener("click", async () => {
  setStatus("pl-status", "Converting…");
  showNotes("pl-notes", []);
  placeDownload("pl-download", document.createTextNode(""));
  try {
    const pasted = document.getElementById("pl-paste").value.trim();
    const fromFile = await fileText(document.getElementById("pl-file"));
    const json = pasted || fromFile.trim();
    if (!json) {
      setStatus("pl-status", "Choose a ProjectionLab export, or paste one.");
      return;
    }
    const mod = await converter();
    const raw = await mod.projectionLabToTutilis(json, AS_OF);
    const result = JSON.parse(raw);
    if (!result.ok) {
      setStatus("pl-status", result.error || "The file could not be converted.");
      return;
    }
    showNotes("pl-notes", result.notes);
    placeDownload(
      "pl-download",
      downloadLink(result.filename, new Blob([base64ToBytes(result.payloadBase64)], { type: "application/octet-stream" })),
    );
    setStatus("pl-status", "Ready. Download the dossier file, then import it in the app.");
  } catch (error) {
    setStatus("pl-status", error && error.message ? error.message : "The file could not be converted.");
  }
});

document.getElementById("dossier-convert").addEventListener("click", async () => {
  setStatus("dossier-status", "Converting…");
  showNotes("dossier-notes", []);
  placeDownload("dossier-download", document.createTextNode(""));
  try {
    const input = document.getElementById("dossier-file");
    const file = input && input.files && input.files[0];
    if (!file) {
      setStatus("dossier-status", "Choose the dossier file you exported from the app.");
      return;
    }
    const bytes = new Uint8Array(await file.arrayBuffer());
    const mod = await converter();
    const raw = await mod.tutilisToProjectionLab(bytesToBase64(bytes), AS_OF);
    const result = JSON.parse(raw);
    if (!result.ok) {
      setStatus("dossier-status", result.error || "The file could not be converted.");
      return;
    }
    showNotes("dossier-notes", result.notes);
    placeDownload(
      "dossier-download",
      downloadLink(result.filename, new Blob([result.payloadText], { type: "application/json" })),
    );
    setStatus("dossier-status", "Ready. Download the ProjectionLab file.");
  } catch (error) {
    setStatus("dossier-status", error && error.message ? error.message : "The file could not be converted.");
  }
});
