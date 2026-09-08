"use client";

import { COPYRIGHT_YEAR, websitePrivacyMode } from "@/lib/site-release";

export const OPEN_ANALYTICS_SETTINGS = "chamyworks-open-analytics-settings";

type SiteFooterProps = {
  language?: "ko" | "en";
  product?: { name: string; privacyHref: string; contactHref: string; kind: "app" | "game" };
};

export function SiteFooter({ language = "ko", product }: SiteFooterProps) {
  const en = language === "en";
  const linkStyle = "py-1 underline decoration-warm-muted/25 underline-offset-4 transition hover:text-warm-ink dark:decoration-[#bda995]/35 dark:hover:text-[#f8efe4]";
  return (
    <footer className={`${product ? "mx-auto w-full max-w-3xl border-t border-warm-muted/10 pb-5 pt-4 sm:pb-6 dark:border-[#bda995]/14" : "mt-12 sm:mt-14"} space-y-2 text-center text-[0.72rem] text-warm-muted/85 dark:text-[#cdbdac]/85`}>
      {product && (
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          <a href={product.contactHref} className={linkStyle}>{en ? `${product.kind === "game" ? "Game" : "App"} support` : product.kind === "game" ? "게임 문의" : "앱 문의"}</a>
          <span aria-hidden="true">·</span>
          <a href={product.privacyHref} className={linkStyle}>{product.name} {en ? "Privacy Policy" : "개인정보처리방침"}</a>
        </div>
      )}
      <nav aria-label={en ? "Website privacy" : "웹사이트 개인정보 안내"} className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        {websitePrivacyMode() !== "hidden" && <>
          <a href="/privacy" hrefLang="ko" className={linkStyle}>{en ? "Website Privacy Policy (Korean)" : "웹사이트 개인정보처리방침"}</a>
          <span aria-hidden="true">·</span>
        </>}
        <button type="button" className={linkStyle} onClick={() => window.dispatchEvent(new Event(OPEN_ANALYTICS_SETTINGS))}>{en ? "Visitor statistics settings" : "방문 통계 수집 설정"}</button>
      </nav>
      <p>© {COPYRIGHT_YEAR} Chamyworks</p>
    </footer>
  );
}
