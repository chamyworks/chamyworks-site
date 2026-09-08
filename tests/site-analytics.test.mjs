import test from "node:test";
import assert from "node:assert/strict";
import { websitePrivacyMode } from "../lib/site-release.ts";
import {
  analyticsMode, CONSENT_KEY, CONSENT_MAX_AGE, createAnalyticsClient,
  MEASUREMENT_ID, pageData, readConsent, referrerOrigin, saveConsent,
  storedConsent, storeEvent,
} from "../lib/site-analytics.ts";

function browser(href = "https://chamyworks.com/apps/happypick") {
  const storage = new Map();
  const scripts = [];
  const deletedCookies = [];
  const timers = [];
  let reloads = 0;
  const url = new URL(href);
  const win = {
    location: { hostname: url.hostname, href, reload: () => reloads++ },
    localStorage: {
      getItem: key => storage.get(key) ?? null,
      setItem: (key, value) => storage.set(key, value),
      removeItem: key => storage.delete(key),
    },
    setTimeout: (callback, delay) => { timers.push({ callback, delay }); return timers.length; },
    clearTimeout: () => {},
  };
  const doc = {
    referrer: "https://example.com/private/path?email=private@example.com",
    get cookie() { return `_ga=abc; _ga_${MEASUREMENT_ID.slice(2)}=xyz; session=keep; _ga_OTHER=keep; __cf_bm=keep; cf_clearance=keep`; },
    set cookie(value) { deletedCookies.push(value); },
    createElement: name => {
      assert.equal(name, "script");
      return { remove() { this.removed = true; } };
    },
    head: { appendChild: script => scripts.push(script) },
  };
  return { win, doc, storage, scripts, deletedCookies, timers, get reloads() { return reloads; } };
}

test("rollout defaults off; unfinished policy blocks live activation", () => {
  assert.equal(analyticsMode("disabled"), "disabled");
  assert.equal(analyticsMode("typo"), "disabled");
  assert.equal(analyticsMode("live"), "disabled");
  assert.equal(analyticsMode("preview"), "preview");
});

test("approved production flags allow live analytics only with the published policy", () => {
  process.env.NEXT_PUBLIC_WEBSITE_PRIVACY_MODE = "published";
  try {
    assert.equal(analyticsMode("live"), "live");
    assert.equal(websitePrivacyMode(), "published");
  } finally {
    delete process.env.NEXT_PUBLIC_WEBSITE_PRIVACY_MODE;
  }
});

test("only valid, current explicit consent grants access", () => {
  for (const value of [null, "", "{}", "not json", '{"choice":"accepted"}']) {
    assert.equal(readConsent(value), "unknown");
  }
  const now = Date.now();
  const value = savedAt => JSON.stringify({ version: 1, choice: "accepted", savedAt });
  assert.equal(readConsent(value(now), now), "accepted");
  assert.equal(readConsent(value(now - CONSENT_MAX_AGE), now), "unknown");
  assert.equal(readConsent(value(now + 1), now), "unknown");
  assert.equal(readConsent(JSON.stringify({ version: 2, choice: "accepted", savedAt: now }), now), "unknown");
});

test("preview choice cannot grant live consent", () => {
  const { win } = browser();
  assert.equal(saveConsent(win, "accepted", "preview"), true);
  assert.equal(storedConsent(win, "preview"), "accepted");
  assert.equal(storedConsent(win), "unknown");
});

test("blocked storage fails closed", () => {
  const { win } = browser();
  win.localStorage.getItem = () => { throw new Error("blocked"); };
  win.localStorage.setItem = () => { throw new Error("blocked"); };
  assert.equal(storedConsent(win), "unknown");
  assert.equal(saveConsent(win, "accepted"), false);
});

test("page payload strips secrets, fragments and unapproved campaigns", () => {
  const result = pageData("https://chamyworks.com/apps/happypick/?email=private@example.com&token=secret&utm_source=instagram&utm_medium=social&utm_campaign=happypick_launch#private");
  assert.equal(result.page_location, "https://chamyworks.com/apps/happypick?utm_source=instagram&utm_medium=social&utm_campaign=happypick_launch");
  assert.equal(pageData("https://chamyworks.com/?utm_campaign=private-person").page_location, "https://chamyworks.com/");
  assert.equal(referrerOrigin("https://user:secret@example.com/private?email=private@example.com#name"), "https://example.com");
  assert.equal(referrerOrigin("javascript:alert(1)"), "");
});

test("legal, unpublished and unknown pages are excluded", () => {
  for (const path of ["/privacy", "/privacy/en", "/apps/happypick/privacy", "/apps/daengpick/privacy/en", "/games/todays-tray/privacy", "/apps/daengpick", "/private-person"]) {
    assert.equal(pageData(`https://chamyworks.com${path}`), null);
  }
});

test("only known store metadata can be emitted", () => {
  assert.deepEqual(storeEvent("happypick", "app_store", "mobile_badge"), { product: "happypick", store: "app_store", placement: "mobile_badge" });
  assert.equal(storeEvent("private-person", "app_store", "mobile_badge"), null);
  assert.equal(storeEvent("happypick", "private-store", "mobile_badge"), null);
  assert.equal(storeEvent("happypick", "app_store", "email@example.com"), null);
});

for (const mode of ["disabled", "preview"]) {
  test(`${mode} never loads Google even with existing accepted consent`, () => {
    const env = browser();
    saveConsent(env.win, "accepted");
    const client = createAnalyticsClient(mode, env.win, env.doc);
    client.pageView(); client.click("happypick", "app_store", "mobile_badge");
    assert.equal(env.scripts.length, 0);
    assert.equal(env.win.dataLayer, undefined);
  });
}

test("live without consent, or with rejected consent, sends nothing", () => {
  for (const choice of ["unknown", "rejected"]) {
    const env = browser();
    if (choice !== "unknown") saveConsent(env.win, choice);
    const client = createAnalyticsClient("live", env.win, env.doc);
    client.pageView(); client.click("happypick", "google_play", "desktop_badge");
    assert.equal(env.scripts.length, 0);
    assert.equal(env.win.dataLayer, undefined);
  }
});

test("live cannot send from localhost or a preview domain", () => {
  for (const href of ["http://localhost:3003/", "https://preview.example.com/"]) {
    const env = browser(href);
    saveConsent(env.win, "accepted");
    createAnalyticsClient("live", env.win, env.doc).pageView();
    assert.equal(env.scripts.length, 0);
  }
});

test("grant loads one tag, sets privacy defaults first and deduplicates pageviews", () => {
  const env = browser();
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.pageView();
  saveConsent(env.win, "accepted");
  client.pageView(); client.pageView();
  assert.equal(env.scripts.length, 1);
  assert.equal(env.scripts[0].referrerPolicy, "no-referrer");
  const queue = env.win.dataLayer.map(args => [...args]);
  assert.deepEqual(queue[0].slice(0, 2), ["consent", "default"]);
  assert.equal(queue[0][2].ad_user_data, "denied");
  assert.equal(queue[1][2].analytics_storage, "granted");
  const config = queue.find(([name]) => name === "config")[2];
  assert.equal(config.send_page_view, false);
  assert.equal(config.allow_google_signals, false);
  assert.equal(config.allow_ad_personalization_signals, false);
  assert.equal(config.cookie_update, false);
  assert.ok(config.cookie_expires <= CONSENT_MAX_AGE / 1000 && config.cookie_expires >= CONSENT_MAX_AGE / 1000 - 2);
  assert.equal(queue.filter(args => args[0] === "event" && args[1] === "page_view").length, 1);
  assert.ok(env.timers[0].delay > 0 && env.timers[0].delay <= 2_147_000_000);
});

test("one store event contains no destination URL and no personal fields", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.click("happypick", "google_play", "desktop_badge");
  const events = env.win.dataLayer.map(args => [...args]).filter(args => args[1] === "store_link_click");
  assert.equal(events.length, 1);
  assert.deepEqual(Object.keys(events[0][2]).sort(), ["page_location", "page_title", "placement", "product", "send_to", "store"]);
});

test("withdrawal disables SDK, drops pending events and deletes only this property's cookies", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.pageView(); client.stop();
  saveConsent(env.win, "rejected");
  client.click("happypick", "app_store", "desktop_qr");
  assert.equal(env.win[`ga-disable-${MEASUREMENT_ID}`], true);
  assert.equal(env.win.dataLayer.some(args => args[0] === "event"), false);
  assert.equal(env.scripts[0].removed, true);
  assert.ok(env.deletedCookies.length > 0);
  assert.ok(env.deletedCookies.every(value => !value.includes("session=") && !value.includes("_ga_OTHER")));
});

test("stopping a loaded SDK never sends a consent update", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.pageView();
  const calls = [];
  env.win.gtag = (...args) => calls.push(args);
  client.stop(); client.stop();
  assert.deepEqual(calls, []);
  assert.deepEqual(env.win.dataLayer, []);
});

test("reconsent cannot start the old document while waiting for reload", () => {
  const env = browser(); saveConsent(env.win, "rejected");
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.pageView();
  client.stop();
  saveConsent(env.win, "accepted");
  client.pageView(); client.pageView(); client.click("happypick", "app_store", "desktop_badge");
  assert.equal(env.scripts.length, 0);
  const fresh = browser(); saveConsent(fresh.win, "accepted");
  const nextClient = createAnalyticsClient("live", fresh.win, fresh.doc);
  nextClient.pageView(); nextClient.pageView();
  assert.equal(fresh.scripts.length, 1);
  assert.equal(fresh.win.dataLayer.filter(args => args[0] === "event" && args[1] === "page_view").length, 1);
});

test("SPA entry into a policy page stops the SDK and requests a clean document", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.pageView();
  env.win.location.href = "https://chamyworks.com/apps/happypick/privacy";
  client.pageView();
  assert.equal(env.win[`ga-disable-${MEASUREMENT_ID}`], true);
  assert.equal(env.reloads, 1);
  assert.equal(env.win.dataLayer.some(args => args[0] === "event"), false);
});

test("expiration timer stops already-running analytics", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc); client.pageView();
  env.storage.set(CONSENT_KEY, JSON.stringify({version:1, choice:"accepted", savedAt: Date.now()-CONSENT_MAX_AGE}));
  env.timers[0].callback();
  assert.equal(env.win[`ga-disable-${MEASUREMENT_ID}`], true);
  assert.equal(env.reloads, 1);
});

test("policy approval and visibility do not depend on analytics mode", () => {
  for (const analytics of ["disabled", "preview", "live"]) {
    process.env.NEXT_PUBLIC_SITE_ANALYTICS_MODE = analytics;
    assert.equal(websitePrivacyMode("published", true), "published");
    assert.equal(websitePrivacyMode("preview"), "preview");
    assert.equal(websitePrivacyMode("published"), "published");
    assert.equal(analyticsMode("live"), "disabled");
  }
  delete process.env.NEXT_PUBLIC_SITE_ANALYTICS_MODE;
});

test("production never exposes preview policy or review controls", () => {
  const original = process.env.NODE_ENV;
  process.env.NODE_ENV = "production";
  try {
    assert.equal(websitePrivacyMode("preview"), "hidden");
    assert.equal(analyticsMode("preview"), "disabled");
    assert.equal(websitePrivacyMode("published", true), "published");
  } finally {
    if (original === undefined) delete process.env.NODE_ENV;
    else process.env.NODE_ENV = original;
  }
});

test("invalid and expired records are removed rather than renewed", () => {
  const env = browser();
  env.storage.set(CONSENT_KEY, JSON.stringify({ version: 1, choice: "accepted", savedAt: Date.now() - CONSENT_MAX_AGE }));
  assert.equal(storedConsent(env.win), "unknown");
  assert.equal(env.storage.has(CONSENT_KEY), false);
});

test("late tag startup limits cookies to the original consent deadline", () => {
  const env = browser();
  const savedAt = Date.now() - CONSENT_MAX_AGE / 2;
  const record = JSON.stringify({ version: 1, choice: "accepted", savedAt });
  env.storage.set(CONSENT_KEY, record);
  createAnalyticsClient("live", env.win, env.doc).pageView();
  const config = env.win.dataLayer.map(args => [...args]).find(args => args[0] === "config")[2];
  assert.ok(config.cookie_expires <= CONSENT_MAX_AGE / 2000);
  assert.equal(env.storage.get(CONSENT_KEY), record);
});

test("storage failure after startup stops before a store click", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc); client.pageView();
  env.win.localStorage.getItem = () => { throw new Error("blocked"); };
  client.click("happypick", "app_store", "desktop_badge");
  assert.equal(env.reloads, 1);
  assert.equal(env.win.dataLayer.some(args => args[0] === "event"), false);
});

test("another tab's withdrawal halts subsequent page events", () => {
  const env = browser(); saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc); client.pageView();
  saveConsent(env.win, "rejected"); client.pageView();
  assert.equal(env.reloads, 1);
  assert.equal(env.win.dataLayer.some(args => args[0] === "event"), false);
});

test("GA4 withdrawal leaves a separate Cloudflare beacon and security cookies untouched", () => {
  const env = browser();
  const beacon = { src: "https://static.cloudflareinsights.com/beacon.min.js", remove() { this.removed = true; } };
  env.doc.head.appendChild(beacon);
  saveConsent(env.win, "accepted");
  const client = createAnalyticsClient("live", env.win, env.doc);
  client.pageView(); client.stop();
  assert.equal(beacon.removed, undefined);
  assert.equal(env.scripts[1].removed, true);
  assert.ok(env.deletedCookies.length > 0);
  assert.ok(env.deletedCookies.every(value => !/(__cf_bm|cf_clearance)=/.test(value)));
});

test("each supported store placement emits one click without renewing the choice", () => {
  for (const store of ["app_store", "google_play"]) {
    for (const placement of ["mobile_badge", "desktop_badge", "desktop_qr"]) {
      const env = browser(); saveConsent(env.win, "accepted");
      const originalChoice = env.storage.get(CONSENT_KEY);
      const client = createAnalyticsClient("live", env.win, env.doc);
      client.pageView(); client.pageView(); client.click("happypick", store, placement);
      const events = env.win.dataLayer.map(args => [...args]).filter(args => args[0] === "event");
      assert.equal(events.filter(args => args[1] === "page_view").length, 1);
      const clicks = events.filter(args => args[1] === "store_link_click");
      assert.equal(clicks.length, 1);
      assert.equal(clicks[0][2].product, "happypick");
      assert.equal(clicks[0][2].store, store);
      assert.equal(clicks[0][2].placement, placement);
      assert.equal(env.storage.get(CONSENT_KEY), originalChoice);
    }
  }
});

test("direct policy loads with saved consent never initialize GA4", () => {
  for (const path of ["/privacy", "/apps/happypick/privacy", "/apps/happypick/privacy/en", "/apps/daengpick/privacy", "/apps/daengpick/privacy/en", "/games/todays-tray/privacy"]) {
    const env = browser(`https://chamyworks.com${path}`);
    saveConsent(env.win, "accepted");
    const client = createAnalyticsClient("live", env.win, env.doc);
    client.pageView(); client.click("happypick", "app_store", "mobile_badge");
    assert.equal(env.scripts.length, 0);
    assert.equal(env.win.dataLayer, undefined);
  }
});
