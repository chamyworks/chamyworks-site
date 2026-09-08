// Test-only observation. No diagnostic data is transmitted or stored server-side.
export function diagnostics() {
  const key = "chamyworks.qa.network-evidence.v1";
  let records = [];
  try { records = JSON.parse(sessionStorage.getItem(key) || "[]"); } catch { /* optional evidence storage */ }
  let output;
  const allowedEvents = ["page_view", "store_link_click", "first_visit", "session_start", "user_engagement"];
  function google(url) {
    try { return /(^|\.)(google-analytics\.com|googletagmanager\.com|analytics\.google\.com)$/.test(new URL(url, location.href).hostname); } catch { return false; }
  }
  function save(record) {
    records.push({ at: new Date().toISOString(), ...record });
    records = records.slice(-120);
    try { sessionStorage.setItem(key, JSON.stringify(records)); } catch { /* evidence only */ }
    render();
  }
  function cookieNames() { return document.cookie.split(";").map(x => x.split("=")[0].trim()).filter(x => /^_ga($|_)/.test(x)); }
  function render() {
    if (!output) return;
    let choice = "unknown";
    try { choice = JSON.parse(localStorage.getItem("chamyworks.analytics-consent.qa.v1") || "null")?.choice ?? "unknown"; } catch { choice = "storage-error"; }
    output.textContent = JSON.stringify({ page: location.pathname, choice, gaCookies: cookieNames(), googleScripts: [...document.scripts].filter(s => google(s.src)).length, records }, null, 2);
  }
  function safeLocation(raw) {
    if (!raw) return "";
    try { const u = new URL(raw); return { origin: u.origin, path: u.pathname, queryKeys: [...u.searchParams.keys()], hasFragment: !!u.hash }; } catch { return "invalid"; }
  }
  function capture(url, body, transport, status) {
    if (!google(url)) return;
    const u = new URL(url, location.href);
    const common = new URLSearchParams(u.search);
    const lines = typeof body === "string" && body.length < 32000 ? body.split("\n") : [""];
    for (const line of lines) {
      const p = new URLSearchParams(common);
      for (const [k, v] of new URLSearchParams(line)) p.set(k, v);
      const event = p.get("en");
      save({ kind: transport, endpoint: u.origin + u.pathname, status, event: allowedEvents.includes(event) ? event : event ? "other-event" : null,
        measurement: p.get("tid") === "G-67MZ84CVTY" ? p.get("tid") : null,
        product: p.get("ep.product") === "happypick" ? "happypick" : null,
        store: ["app_store", "google_play"].includes(p.get("ep.store")) ? p.get("ep.store") : null,
        placement: ["mobile_badge", "desktop_badge", "desktop_qr"].includes(p.get("ep.placement")) ? p.get("ep.placement") : null,
        page: safeLocation(p.get("dl")), referrer: safeLocation(p.get("dr")), debug: p.get("_dbg"), fields: [...p.keys()].sort() });
    }
  }
  const originalFetch = window.fetch;
  window.fetch = function(input, init) {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    const promise = originalFetch.apply(this, arguments);
    if (google(url)) {
      const body = init?.body instanceof URLSearchParams ? init.body.toString() : init?.body;
      capture(url, body, "fetch-dispatch", "pending");
      void promise.then(r => save({ kind: "fetch-result", endpoint: new URL(url).origin + new URL(url).pathname, status: r.status, responseType: r.type }), () => save({ kind: "fetch-result", status: "failed" }));
    }
    return promise;
  };
  const originalBeacon = navigator.sendBeacon;
  navigator.sendBeacon = function(url, data) {
    const sent = originalBeacon.apply(this, arguments);
    if (data instanceof Blob && data.size < 32000 && google(url)) void data.text().then(body => capture(url, body, "beacon-dispatch", sent ? "queued" : "refused"));
    else capture(url, data instanceof URLSearchParams ? data.toString() : data, "beacon-dispatch", sent ? "queued" : "refused");
    return sent;
  };
  new PerformanceObserver(list => {
    for (const r of list.getEntries()) if (google(r.name)) save({ kind: "resource", endpoint: new URL(r.name).origin + new URL(r.name).pathname, initiator: r.initiatorType });
  }).observe({ type: "resource", buffered: true });
  save({ kind: "document", page: location.pathname });
  addEventListener("DOMContentLoaded", () => {
    const panel = document.createElement("details"); panel.open = true; panel.id = "qa-evidence";
    panel.style.cssText = "margin:24px;padding:16px;border:1px solid #aaa;background:#fff;color:#222;font:12px monospace;overflow-wrap:anywhere";
    const summary = document.createElement("summary"); summary.textContent = "QA diagnostics (browser-only)";
    const marker = document.createElement("button"); marker.textContent = "Mark observation"; marker.type = "button"; marker.onclick = () => save({ kind: "mark", page: location.pathname, cookies: cookieNames() });
    output = document.createElement("pre"); output.style.cssText = "white-space:pre-wrap;max-height:480px;overflow:auto";
    panel.append(summary, marker, output); document.body.append(panel); render();
  });
  setInterval(render, 1000);
}
