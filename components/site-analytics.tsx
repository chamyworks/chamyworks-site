"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { analyticsMode, consentKey, createAnalyticsClient, pageData, saveConsent, storedConsent } from "@/lib/site-analytics";
import { OPEN_ANALYTICS_SETTINGS } from "@/components/site-footer";
import { websitePrivacyMode } from "@/lib/site-release";

const changed = "chamyworks-consent-change";
function subscribe(callback: () => void) {
  window.addEventListener(changed, callback);
  window.addEventListener("storage", callback);
  window.addEventListener("focus", callback);
  document.addEventListener("visibilitychange", callback);
  // Re-check expiration for a tab left open for a long time.
  const timer = window.setInterval(callback, 30_000);
  return () => {
    window.removeEventListener(changed, callback);
    window.removeEventListener("storage", callback);
    window.removeEventListener("focus", callback);
    document.removeEventListener("visibilitychange", callback);
    window.clearInterval(timer);
  };
}

export function SiteAnalytics({ language }: { language: "ko" | "en" }) {
  const mode = analyticsMode();
  return <ConsentControls language={language} mode={mode} />;
}

function ConsentControls({ language, mode }: { language: "ko" | "en"; mode: "disabled" | "preview" | "live" }) {
  const path = usePathname();
  const en = language === "en";
  const choice = useSyncExternalStore(subscribe, () => storedConsent(window, mode), () => "unknown" as const);
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);
  const [editing, setEditing] = useState(false);
  const [storageError, setStorageError] = useState(false);
  const client = useRef<ReturnType<typeof createAnalyticsClient> | null>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const panel = useRef<HTMLElement>(null);
  const measurable = pageData(`https://chamyworks.com${path}`) !== null;
  const visible = editing || (hydrated && mode !== "disabled" && choice === "unknown" && measurable);

  useEffect(() => {
    const open = () => {
      trigger.current = document.activeElement as HTMLElement;
      setEditing(true);
    };
    window.addEventListener(OPEN_ANALYTICS_SETTINGS, open);
    return () => window.removeEventListener(OPEN_ANALYTICS_SETTINGS, open);
  }, []);

  useEffect(() => {
    client.current ??= createAnalyticsClient(mode, window, document);
    client.current.pageView();
    // A full navigation removes the loaded SDK on legal pages and on withdrawal.
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[data-analytics-product]");
      if (!anchor || event.defaultPrevented || (event.type === "auxclick" && event.button !== 1)) return;
      client.current?.click(anchor.dataset.analyticsProduct ?? "", anchor.dataset.analyticsStore ?? "", anchor.dataset.analyticsPlacement ?? "");
    };
    document.addEventListener("click", onClick);
    document.addEventListener("auxclick", onClick);
    const onStorage = (event: StorageEvent) => {
      if (event.key !== null && event.key !== consentKey(mode)) return;
      if (storedConsent(window, mode) !== "accepted") {
        client.current?.stop();
        if (mode === "live") window.location.reload();
      }
    };
    window.addEventListener("storage", onStorage);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("auxclick", onClick);
      window.removeEventListener("storage", onStorage);
    };
  }, [mode, path, choice]);

  useEffect(() => {
    if (editing) panel.current?.focus();
  }, [editing]);

  function choose(next: "accepted" | "rejected") {
    // Freeze the old document before publishing a grant to storage/subscribers.
    if (mode === "live" || next === "rejected") client.current?.stop();
    const saved = saveConsent(window, next, mode);
    setStorageError(!saved);
    if (!saved) {
      // No persistent consent = no analytics; remove any old grant when possible.
      try { window.localStorage.removeItem(consentKey(mode)); } catch { /* blocked storage */ }
      client.current?.stop();
      return;
    }
    if (mode === "live") {
      window.location.reload();
      return;
    }
    window.dispatchEvent(new Event(changed));
    setEditing(false);
    trigger.current?.focus();
  }

  const actionStyle = "min-h-11 rounded-full border border-warm-muted/40 px-5 py-2 text-sm font-semibold transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-[#bda995]/50 dark:hover:bg-white/10";
  return (
    <>
      {visible && (
        <aside ref={panel} tabIndex={-1} aria-labelledby="analytics-heading" className="sticky bottom-0 z-50 mx-auto w-full border-t border-warm-muted/20 bg-[#fbf7f1] px-5 py-5 text-warm-ink shadow-[0_-8px_24px_rgba(50,37,29,0.06)] sm:px-8 dark:border-[#bda995]/20 dark:bg-[#211913] dark:text-[#f8efe4]">
          <div className="mx-auto max-w-4xl">
            <h2 id="analytics-heading" className="text-base font-semibold">{en ? "Visitor statistics settings" : "방문 통계 수집 설정"}</h2>
            {mode === "disabled" ? <p className="mt-2 text-sm leading-6">{en ? "Google Analytics collection is currently off. You can also withdraw any previously saved consent." : "현재 Google Analytics 수집은 꺼져 있습니다. 이전에 저장한 동의도 철회할 수 있습니다."}</p> : <p className="mt-2 text-sm leading-6 text-warm-muted dark:text-[#d9cabb]">{en ? "With your permission, Google Analytics uses cookies to measure page visits, traffic sources and store button clicks. You can refuse without affecting the site, and withdraw consent at any time using Visitor statistics settings in the footer." : "동의하면 Google Analytics가 쿠키를 사용해 페이지 방문·유입 경로·스토어 버튼 클릭을 분석해요. 거절해도 사이트를 그대로 이용할 수 있고, 하단 ‘방문 통계 수집 설정’에서 언제든 철회할 수 있어요."}</p>}
            <p className="mt-1 text-xs leading-5 text-warm-muted dark:text-[#cdbdac]">{en ? "This choice applies to GA4, not the existing Cloudflare traffic/performance analytics. Your choice is remembered for up to 60 days." : "이 선택은 GA4에 적용되며, 기존 Cloudflare 방문·성능 분석과는 별개예요. 선택은 최대 60일간 기억해요."} {websitePrivacyMode() !== "hidden" && <a className="underline underline-offset-4" href="/privacy" hrefLang="ko">{en ? "Details (Korean)" : "자세히 보기"}</a>}</p>
            {mode === "preview" && <p className="mt-2 text-xs font-medium">{en ? "Review preview: no analytics requests are sent." : "검토용 미리보기: 동의해도 분석 데이터는 전송하지 않아요."}</p>}
            <div className="mt-4 flex flex-wrap gap-3">
              <button className={actionStyle} type="button" onClick={() => choose("rejected")}>{en ? "Reject / withdraw" : "거절 / 동의 철회"}</button>
              {mode !== "disabled" && <button className={actionStyle} type="button" onClick={() => choose("accepted")}>{en ? "Allow analytics" : "통계 수집 동의"}</button>}
              {editing && <button className="min-h-11 px-3 text-sm underline" type="button" onClick={() => { setEditing(false); trigger.current?.focus(); }}>{en ? "Close" : "닫기"}</button>}
            </div>
            {storageError && <p role="alert" className="mt-3 text-sm">{en ? "Your choice could not be saved. Analytics remains off. Please check your browser storage settings." : "선택을 저장하지 못해 분석을 꺼두었어요. 브라우저 저장소 설정을 확인해 주세요."}</p>}
          </div>
        </aside>
      )}
    </>
  );
}
