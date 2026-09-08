import { timingSafeEqual } from "node:crypto";
import { diagnostics } from "./diagnostics.mjs";

const COOKIE = "__Host-chamyworks-qa";
const encoder = new TextEncoder();
const securityHeaders = {
  "Cache-Control": "private, no-store, max-age=0",
  "CDN-Cache-Control": "no-store",
  "X-Robots-Tag": "noindex, nofollow, noarchive",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "Referrer-Policy": "no-referrer",
};
const authCsp = "default-src 'none'; form-action 'self'; frame-ancestors 'none'; base-uri 'none'; style-src 'unsafe-inline'";
const loginPage = `<!doctype html><html lang="ko"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Chamyworks QA</title><style>body{max-width:360px;margin:15vh auto;padding:24px;font-family:system-ui;background:#f7f2e9;color:#6b5448}input,button{box-sizing:border-box;width:100%;min-height:44px;margin-top:12px;font:inherit}h1{font-size:24px}</style><h1>Chamyworks QA</h1><form action="/__qa/login" method="post"><label for="password">검증용 비밀번호</label><input id="password" name="password" type="password" autocomplete="current-password" maxlength="128" required><button type="submit">확인</button></form></html>`;

function reply(body, status, extra = {}) {
  // no-referrer can make native form POST Origin opaque, defeating the CSRF check.
  return new Response(body, { status, headers: { ...securityHeaders, "Referrer-Policy": "strict-origin", "Content-Security-Policy": authCsp, ...extra } });
}
export function seal(response) {
  const result = new Response(response.body, response);
  for (const [key, value] of Object.entries(securityHeaders)) result.headers.set(key, value);
  result.headers.delete("etag");
  result.headers.delete("last-modified");
  return result;
}
function endsAt(env) {
  const end = Date.parse(env.QA_ENDS_AT ?? "");
  return Number.isFinite(end) && env.QA_PASSWORD && env.QA_SESSION_SECRET?.length >= 32 ? end : 0;
}
async function key(env) {
  return crypto.subtle.importKey("raw", encoder.encode(env.QA_SESSION_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]);
}
async function token(env, expires) {
  const payload = `${expires}.${crypto.randomUUID()}`;
  const signed = await crypto.subtle.sign("HMAC", await key(env), encoder.encode(payload));
  return `${payload}.${Buffer.from(signed).toString("base64url")}`;
}
async function session(request, env, now) {
  const cookies = (request.headers.get("cookie") ?? "").split(";").map(c => c.trim());
  const value = cookies.find(c => c.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1) ?? "";
  if (value.length > 200) return 0;
  const [expiry, nonce, signature, extra] = value.split(".");
  const expires = Number(expiry);
  if (extra || !nonce || !signature || !Number.isSafeInteger(expires) || expires <= now || expires > endsAt(env) || expires > now + 3_600_000) return 0;
  try {
    const valid = await crypto.subtle.verify("HMAC", await key(env), Buffer.from(signature, "base64url"), encoder.encode(`${expiry}.${nonce}`));
    return valid ? expires : 0;
  } catch { return 0; }
}
async function passwordMatches(supplied, expected) {
  const a = await crypto.subtle.digest("SHA-256", encoder.encode(supplied));
  const b = await crypto.subtle.digest("SHA-256", encoder.encode(expected));
  return timingSafeEqual(new Uint8Array(a), new Uint8Array(b));
}
async function boundedBody(request) {
  if (Number(request.headers.get("content-length")) > 1024) return null;
  const reader = request.body?.getReader();
  if (!reader) return "";
  let size = 0;
  const parts = [];
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 1024) { await reader.cancel(); return null; }
    parts.push(value);
  }
  return Buffer.concat(parts).toString("utf8");
}
// Null is the only result that allows the caller to serve application content.
export async function authenticate(request, env, now = Date.now()) {
  const url = new URL(request.url);
  if (url.protocol !== "https:" || url.hostname !== env.QA_HOST) return reply("Not found", 404);
  if (endsAt(env) <= now) return reply("QA environment closed", 503);
  if (url.pathname === "/__qa/login" && request.method === "POST") {
    if (request.headers.get("origin") !== url.origin || !request.headers.get("content-type")?.startsWith("application/x-www-form-urlencoded")) return reply("Forbidden", 403);
    // A shared per-location bucket limits attempts without storing visitor IPs.
    if (!env.LOGIN_LIMITER || !(await env.LOGIN_LIMITER.limit({ key: "qa-login" })).success) return reply("Try again later", 429, { "Retry-After": "60" });
    const body = await boundedBody(request);
    if (body === null) return reply("Request too large", 413);
    const password = new URLSearchParams(body).get("password") ?? "";
    if (password.length > 128 || !(await passwordMatches(password, env.QA_PASSWORD))) return reply(loginPage, 401, { "Content-Type": "text/html; charset=utf-8" });
    const expires = Math.min(now + 3_600_000, endsAt(env));
    return reply(null, 303, {
      Location: "/apps/happypick",
      "Set-Cookie": `${COOKIE}=${await token(env, expires)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=${Math.floor((expires - now) / 1000)}`,
    });
  }
  if (!["GET", "HEAD"].includes(request.method)) return reply("Method not allowed", 405);
  const expires = await session(request, env, now);
  if (!expires) return reply(request.method === "HEAD" ? null : loginPage, 401, { "Content-Type": "text/html; charset=utf-8" });
  if (url.pathname === "/__qa/session") return reply(null, 204);
  // Wrangler's keep-names transform inserts this helper inside serialized functions.
  if (url.pathname === "/__qa/diagnostics.js") return reply(`(()=>{const __name=fn=>fn;(${diagnostics.toString()})();})();`, 200, { "Content-Type": "application/javascript; charset=utf-8" });
  if (url.pathname === "/__qa/session.js") {
    const script = `(()=>{let stopped=false;function stop(){if(stopped)return;stopped=true;window['ga-disable-G-67MZ84CVTY']=true;if(window.dataLayer)window.dataLayer.length=0;document.querySelectorAll('script[src*="googletagmanager.com"]').forEach(s=>s.remove());for(const name of ['_ga','_ga_67MZ84CVTY','${COOKIE}'])document.cookie=name+'=; Max-Age=0; Path=/; Secure; SameSite=Strict';location.replace('/__qa/login')}setTimeout(stop,Math.max(0,${expires}-Date.now()));setInterval(()=>fetch('/__qa/session',{cache:'no-store',credentials:'same-origin'}).then(r=>{if(!r.ok)stop()}).catch(stop),5000);addEventListener('pageshow',()=>{if(Date.now()>=${expires})stop()})})()`;
    return reply(script, 200, { "Content-Type": "application/javascript; charset=utf-8" });
  }
  if (url.pathname.startsWith("/__qa/")) return reply("Not found", 404);
  return null;
}
