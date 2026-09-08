import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { authenticate, seal } from "../qa/auth.mjs";

const now = Date.now();
const host = "qa-analytics.chamyworks.com";
const env = () => ({ QA_HOST: host, QA_PASSWORD: "test-only-password", QA_SESSION_SECRET: "test-only-signing-secret-with-at-least-32-characters", QA_ENDS_AT: new Date(now + 3_600_000).toISOString(), LOGIN_LIMITER: { limit: async () => ({ success: true }) } });
const req = (path = "/", init) => new Request(`https://${host}${path}`, init);
const login = (password = "test-only-password", origin = `https://${host}`) => req("/__qa/login", { method: "POST", headers: { origin, "content-type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ password }) });
async function cookie(settings) { return (await authenticate(login(), settings, now)).headers.get("set-cookie").split(";")[0]; }

test("all direct HTML, script, image, policy, and internal paths need server authentication", async () => {
  for (const path of ["/", "/apps/happypick", "/privacy", "/_next/static/test.js", "/apps/happypick/icon.png", "/_next/image?url=/icon.png&w=32&q=75", "/__qa/session", "/__qa/session.js"]) {
    const res = await authenticate(req(path), env(), now);
    assert.equal(res.status, 401, path);
    assert.match(res.headers.get("cache-control"), /no-store/);
    assert.equal(res.headers.get("referrer-policy"), "strict-origin");
    assert.doesNotMatch(await res.text(), /googletagmanager|google-analytics/);
  }
});
test("alternate host, plain HTTP and missing secrets fail closed", async () => {
  for (const url of ["https://chamyworks-site-ga4-qa.chamyworks.workers.dev/", "https://version-chamyworks-site-ga4-qa.chamyworks.workers.dev/", "https://chamyworks.com/", `http://${host}/`]) assert.equal((await authenticate(new Request(url), env(), now)).status, 404);
  for (const name of ["QA_PASSWORD", "QA_SESSION_SECRET", "QA_ENDS_AT"]) {
    const settings = env(); delete settings[name];
    assert.equal((await authenticate(req(), settings, now)).status, 503);
  }
});
test("login requires exact origin, correct password and available rate limiter", async () => {
  assert.equal((await authenticate(login("wrong"), env(), now)).status, 401);
  assert.equal((await authenticate(login(undefined, "https://evil.example"), env(), now)).status, 403);
  assert.equal((await authenticate(login(), { ...env(), LOGIN_LIMITER: undefined }, now)).status, 429);
  assert.equal((await authenticate(login(), { ...env(), LOGIN_LIMITER: { limit: async () => ({ success: false }) } }, now)).status, 429);
  assert.equal((await authenticate(login("x".repeat(1100)), env(), now)).status, 413);
});
test("signed cookie unlocks paths; forged cookie and changed signing secret do not", async () => {
  const settings = env();
  const result = await authenticate(login(), settings, now);
  assert.equal(result.status, 303);
  const setCookie = result.headers.get("set-cookie");
  assert.match(setCookie, /Path=\/; HttpOnly; Secure; SameSite=Strict; Max-Age=3600/);
  assert.doesNotMatch(setCookie, /Domain=/);
  const valid = setCookie.split(";")[0];
  assert.equal(await authenticate(req("/apps/happypick", { headers: { cookie: valid } }), settings, now), null);
  assert.equal((await authenticate(req("/", { headers: { cookie: valid + "forged" } }), settings, now)).status, 401);
  assert.equal((await authenticate(req("/", { headers: { cookie: valid } }), { ...settings, QA_SESSION_SECRET: "rotated-test-only-signing-key-of-32-characters" }, now)).status, 401);
});
test("end time blocks existing authenticated sessions and session monitoring", async () => {
  const settings = env(); const valid = await cookie(settings);
  for (const path of ["/apps/happypick", "/__qa/session", "/__qa/session.js", "/_next/static/test.js"]) assert.equal((await authenticate(req(path, { headers: { cookie: valid } }), settings, now + 3_600_001)).status, 503);
  const monitor = await authenticate(req("/__qa/session.js", { headers: { cookie: valid } }), settings, now);
  assert.match(await monitor.text(), /ga-disable-G-67MZ84CVTY/);
});
test("content is never publicly cacheable and config prevents asset/alternate URL bypass", () => {
  assert.equal(seal(new Response("content")).headers.get("cache-control"), "private, no-store, max-age=0");
  const config = JSON.parse(readFileSync(new URL("../qa/wrangler.jsonc", import.meta.url), "utf8"));
  assert.equal(config.assets.run_worker_first, true);
  assert.equal(config.workers_dev, false);
  assert.equal(config.preview_urls, false);
  assert.deepEqual(config.routes, [{ pattern: host, custom_domain: true }]);
  assert.equal(config.name, "chamyworks-site-ga4-qa");
  assert.equal("QA_PASSWORD" in config.vars, false);
});
