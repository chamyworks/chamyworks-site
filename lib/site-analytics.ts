import { ANALYTICS_ACTIVATION_APPROVED, websitePrivacyMode } from "./site-release";

export const MEASUREMENT_ID = "G-67MZ84CVTY";
export const CONSENT_KEY = "chamyworks.analytics-consent.v1";
export const CONSENT_DAYS = 60;
export const CONSENT_MAX_AGE = CONSENT_DAYS * 24 * 60 * 60 * 1000;
export type AnalyticsMode = "disabled" | "preview" | "live";
export type ConsentChoice = "accepted" | "rejected" | "unknown";

// Off until the policy, account settings and production activation are approved.
export function analyticsMode(value = process.env.NEXT_PUBLIC_SITE_ANALYTICS_MODE): AnalyticsMode {
  if (value === "preview" && process.env.NODE_ENV !== "production") return "preview";
  return value === "live" && ANALYTICS_ACTIVATION_APPROVED && websitePrivacyMode() === "published" ? "live" : "disabled";
}

const pages: Record<string, string> = {
  "/": "Chamyworks",
  "/about": "About | Chamyworks",
  "/apps": "Apps | Chamyworks",
  "/apps/happypick": "Happy Pick | Chamyworks",
  "/games/todays-tray": "오늘의 식판 | Chamyworks",
};

// Only intentional campaign labels are accepted; arbitrary URL contents are not sent.
const campaigns: Record<string, readonly string[]> = {
  utm_source: ["google", "naver", "instagram", "threads", "x", "youtube", "newsletter"],
  utm_medium: ["organic", "social", "email", "referral", "cpc", "paid_social"],
  utm_campaign: ["happypick_launch", "todays_tray_launch", "chamyworks_profile"],
};

export function pageData(href: string) {
  try {
    const url = new URL(href);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    if (!Object.hasOwn(pages, path)) return null;
    const safeUrl = new URL(path, "https://chamyworks.com");
    for (const [key, values] of Object.entries(campaigns)) {
      const value = url.searchParams.get(key);
      if (value && values.includes(value)) safeUrl.searchParams.set(key, value);
    }
    return { page_location: safeUrl.href, page_title: pages[path] };
  } catch {
    return null;
  }
}

export function referrerOrigin(referrer: string) {
  try {
    const url = new URL(referrer);
    return ["http:", "https:"].includes(url.protocol) ? url.origin : "";
  } catch {
    return "";
  }
}

export function readConsent(raw: string | null, now = Date.now()): ConsentChoice {
  try {
    const data = JSON.parse(raw ?? "null");
    if (
      data?.version === 1 &&
      ["accepted", "rejected"].includes(data.choice) &&
      Number.isFinite(data.savedAt) && data.savedAt <= now &&
      now - data.savedAt < CONSENT_MAX_AGE
    ) return data.choice;
  } catch { /* Invalid or unavailable storage never grants consent. */ }
  return "unknown";
}

export function consentKey(mode: AnalyticsMode) {
  return mode === "preview" ? `${CONSENT_KEY}.preview` : CONSENT_KEY;
}

export function storedConsent(win: Window, mode: AnalyticsMode = "live"): ConsentChoice {
  try {
    const key = consentKey(mode);
    const raw = win.localStorage.getItem(key);
    const choice = readConsent(raw);
    if (raw && choice === "unknown") win.localStorage.removeItem(key);
    return choice;
  }
  catch { return "unknown"; }
}

export function saveConsent(win: Window, choice: Exclude<ConsentChoice, "unknown">, mode: AnalyticsMode = "live") {
  try {
    win.localStorage.setItem(consentKey(mode), JSON.stringify({ version: 1, choice, savedAt: Date.now() }));
    return true;
  } catch { return false; }
}

export function storeEvent(product: string, store: string, placement: string) {
  if (product !== "happypick") return null;
  if (store !== "app_store" && store !== "google_play") return null;
  if (!["mobile_badge", "desktop_badge", "desktop_qr"].includes(placement)) return null;
  return { product, store, placement };
}

type GoogleWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: `ga-disable-${string}`]: boolean;
};

export function createAnalyticsClient(mode: AnalyticsMode, win: Window, doc: Document) {
  const google = win as GoogleWindow;
  const disableKey = `ga-disable-${MEASUREMENT_ID}` as const;
  let started = false;
  let lastPage = "";
  let script: HTMLScriptElement | undefined;
  let expiryTimer: number | undefined;
  let halted = false;
  const denial = { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" };

  function permitted() {
    return !halted && mode === "live" && win.location.hostname === "chamyworks.com" &&
      storedConsent(win) === "accepted" && pageData(win.location.href) !== null;
  }

  function stop() {
    halted = true;
    google[disableKey] = true;
    lastPage = "";
    // Discard queued events before a delayed tag can process them.
    if (google.dataLayer) google.dataLayer.length = 0;
    // Basic consent mode: do not notify the loaded SDK after withdrawal.
    // A clean document follows; no cookieless consent/diagnostic ping is needed.
    script?.remove();
    if (expiryTimer !== undefined) win.clearTimeout(expiryTimer);
    for (const item of doc.cookie.split(";")) {
      const name = item.split("=")[0].trim();
      if (name !== "_ga" && name !== `_ga_${MEASUREMENT_ID.slice(2)}`) continue;
      for (const domain of ["", "; domain=chamyworks.com", "; domain=.chamyworks.com"]) {
        doc.cookie = `${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
      }
    }
  }

  function checkExpiry() {
    if (!permitted()) { stop(); win.location.reload(); return; }
    try {
      const record = JSON.parse(win.localStorage.getItem(CONSENT_KEY)!);
      const remaining = record.savedAt + CONSENT_MAX_AGE - Date.now();
      expiryTimer = win.setTimeout(checkExpiry, Math.max(1, Math.min(remaining, 2_147_000_000)));
    } catch { stop(); win.location.reload(); }
  }

  function pageView() {
    if (halted) return;
    if (!permitted()) {
      if (started) { stop(); win.location.reload(); }
      else {
        google[disableKey] = true;
        // Clear stale cookies on a fresh rejected/expired/disabled document too.
        if (mode === "disabled" || storedConsent(win) !== "accepted") {
          stop();
          halted = false;
        }
      }
      return;
    }
    let remainingSeconds = 0;
    try {
      const record = JSON.parse(win.localStorage.getItem(CONSENT_KEY)!);
      remainingSeconds = Math.floor((record.savedAt + CONSENT_MAX_AGE - Date.now()) / 1000);
    } catch { /* Storage can become unavailable between permission checks. */ }
    if (!(remainingSeconds > 0)) { stop(); win.location.reload(); return; }
    const page = pageData(win.location.href)!;
    google[disableKey] = false;
    if (!started) {
      started = true;
      google.dataLayer = [];
      google.gtag = function (...args: unknown[]) {
        void args;
        // Google tag's documented queue format is an Arguments object.
        google.dataLayer!.push(arguments);
      };
      google.gtag("consent", "default", denial);
      google.gtag("consent", "update", { ...denial, analytics_storage: "granted" });
      google.gtag("js", new Date());
      google.gtag("config", MEASUREMENT_ID, {
        send_page_view: false,
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        cookie_expires: remainingSeconds,
        cookie_update: false,
        cookie_domain: "chamyworks.com",
        cookie_flags: "SameSite=Lax;Secure",
        ...page,
        page_referrer: referrerOrigin(doc.referrer),
      });
      script = doc.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
      script.referrerPolicy = "no-referrer";
      doc.head.appendChild(script);
      checkExpiry();
    }
    if (lastPage === page.page_location) return;
    lastPage = page.page_location;
    google.gtag?.("set", { ...page, page_referrer: referrerOrigin(doc.referrer) });
    google.gtag?.("event", "page_view", { ...page, page_referrer: referrerOrigin(doc.referrer), send_to: MEASUREMENT_ID });
  }

  function click(product: string, store: string, placement: string) {
    const event = storeEvent(product, store, placement);
    if (!event) return;
    if (!permitted()) {
      if (started) { stop(); win.location.reload(); }
      return;
    }
    pageView();
    if (!permitted()) return;
    google.gtag?.("event", "store_link_click", { ...event, ...pageData(win.location.href), send_to: MEASUREMENT_ID });
  }

  return { pageView, click, stop };
}
