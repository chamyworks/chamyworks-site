import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { websitePrivacy } from "../content/website-privacy.ts";
import { ANALYTICS_ACTIVATION_APPROVED, WEBSITE_PRIVACY_APPROVED } from "../lib/site-release.ts";

test("retention keeps the agreed inquiry deadline without extra copy or backup clauses", () => {
  const retention = websitePrivacy.sections.find(section => section.title.startsWith("7."));
  assert.ok(retention.paragraphs.includes("문의 관련 정보는 문의 처리 및 관련 이력 확인에 필요한 기간 동안 보관하며, 문의 접수일로부터 최대 1년 이내에 삭제합니다. 다만 관련 법령에 따라 보관이 필요한 경우에는 해당 기간 동안 보관할 수 있습니다."));
  assert.doesNotMatch(retention.paragraphs.join("\n"), /사본|백업/);
});

test("Cloudflare policy and CSP remain separate from optional GA4 consent", () => {
  const text = JSON.stringify(websitePrivacy.sections);
  assert.match(text, /Cloudflare Web Analytics/);
  assert.match(text, /EU 방문자 제외/);
  assert.match(text, /실행 로그 보관기간은 3일/);
  assert.match(text, /최근 6개월의 통계/);
  const config = readFileSync(new URL("../next.config.ts", import.meta.url), "utf8");
  assert.match(config, /https:\/\/static\.cloudflareinsights\.com\$\{analyticsLive/);
  assert.match(config, /connect-src 'self' https:\/\/cloudflareinsights\.com/);
});

test("review UI stays removed after policy and analytics approval", () => {
  const page = readFileSync(new URL("../app/(ko)/privacy/page.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(page, /게시 전 확인사항|검토용 미리보기|publicationChecks/);
  assert.equal(WEBSITE_PRIVACY_APPROVED, true);
  assert.equal(ANALYTICS_ACTIVATION_APPROVED, true);
  assert.match(page, /websitePrivacyMode\(\)/);
  assert.doesNotMatch(page, /analyticsMode\(\)/);
});

test("IP notice follows the GA4 data list and consent remains GA4-only", () => {
  const analytics = websitePrivacy.sections[2];
  assert.match(analytics.paragraphs[1], /^처리 항목은 쿠키 식별자/);
  assert.equal(analytics.paragraphs[2], "Google 서버와 통신하는 과정에서 IP 주소가 처리될 수 있으나, Google은 GA4에서 개별 IP 주소를 기록하거나 저장하지 않는다고 안내합니다.");
  assert.match(websitePrivacy.sections[3].paragraphs[0], /이 선택은 GA4에만 적용되며, Cloudflare의 웹사이트 제공·보안 및 기본 방문·성능 통계는 별도로 운영됩니다\./);
});

test("email wording and provider table use the approved copy and official links", () => {
  assert.equal(websitePrivacy.sections[4].closingParagraphs.at(-1), "문의 이메일은 외부 이메일 서비스를 통해 수신·보관되며, 문의 확인 및 답변에 이용됩니다. 문의 내용과 첨부파일은 웹사이트 분석 도구에 전송하지 않습니다.");
  const external = websitePrivacy.sections[5];
  assert.deepEqual(external.table.headers, ["서비스 제공자", "이용 목적"]);
  assert.deepEqual(external.table.rows, [
    ["Cloudflare, Inc.", "웹사이트 제공·보안, 방문·성능 통계 및 문의 이메일 처리"],
    ["Google LLC — Google Analytics 4", "이용자가 동의한 경우 웹사이트 이용 통계 분석"],
    ["Google LLC — 이메일 서비스", "문의 이메일 수신·보관 및 답변"],
  ]);
  assert.deepEqual(external.linkedParagraph.filter(part => part.href).map(part => part.href), [
    "https://www.cloudflare.com/privacypolicy/", "https://policies.google.com/privacy?hl=ko",
  ]);
  assert.doesNotMatch(JSON.stringify(websitePrivacy), /Gmail|Workspace|포워딩|사본|백업/);
});
