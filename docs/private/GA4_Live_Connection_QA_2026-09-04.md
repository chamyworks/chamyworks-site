# GA4 실제 연결 검증 결과

검증일: 2026-09-04, 운영 확인일: 2026-09-08. 최신 판정: 정책 공개 및 GA4 운영 활성화 완료, 최소 운영 검증 통과.

## 운영 활성화 및 최소 검증

- 운영 후보: HEAD `9f8d02b` + 승인된 웹 정책·GA4·공통 푸터 파일의 분리 빌드. Cloudflare Worker `chamyworks-site`, Version ID `b5ab9bb6-4ace-4971-8eeb-6b33801b22dc`.
- 정책 공개와 GA4 활성화 플래그를 함께 활성화했으며 정책 본문은 수정하지 않았습니다. 기능 커밋 `3fad19c`를 `origin/main`에 push했습니다.
- 운영 `/privacy`, `/apps/happypick`, `/apps/happypick/privacy`, `/apps/happypick/privacy/en`이 HTTPS 200을 반환했습니다.
- 최초 동의 화면에서 Google 태그 0개와 GA4 실시간 사용자 0명을 확인했습니다.
- 동의 후 Happy Pick `page_view` 1회와 App Store `store_link_click` 1회가 GA4 실시간 보고서에 수신됐습니다.
- 철회 후 같은 App Store 링크를 다시 눌러도 `store_link_click`은 1회로 유지됐습니다.
- 정책 제외 검증을 위해 다시 동의해 Happy Pick `page_view`가 2회가 된 뒤 `/privacy`에 진입했습니다. GA4의 페이지 제목은 Happy Pick만 표시되고 `page_view`는 2회로 유지됐습니다.
- push 후 운영 재검증에서는 Happy Pick 조회가 추가 수신됐고 Google Play 클릭으로 `store_link_click`이 1회에서 2회로 증가했습니다. 철회 후 같은 Google Play 링크를 다시 눌러도 2회로 유지됐습니다.
- 검증 종료 시 운영자 브라우저의 GA4 동의를 철회했습니다.
- 모바일, 탭 간 동의 변경 및 실제 60일 만료는 이번 공개의 선행 조건에서 제외되어 후속 검증으로 남겼습니다.
- production build 전 로직 테스트 39/39, lint, TypeScript, diff check, Next/OpenNext 분리 build 및 Wrangler dry-run이 통과했습니다.

## 최신: 승인된 보정 및 재검증

### 후보와 변경

- 이전 후보 `47a42dda-7376-47e3-8c22-91189f90815c`는 아래 최초 검증 이력으로 보존합니다. 새 QA 배포 후보: `09283ee8-5751-4f72-99a8-cf1b22733a66`, HEAD `4157680` + 명시된 GA4 파일의 분리 빌드. QA 종료 시각 secret 변경은 해당 QA 배포에만 적용했습니다.
- `components/site-analytics.tsx`: live 동의 변경 전에 기존 client를 중단하고, storage 저장 후 새로고침으로 바로 반환합니다. 기존 문서에서 consent-change 이벤트를 발생시키거나 다시 초기화하지 않습니다.
- `lib/site-analytics.ts`: stop 이후 pageView 재실행을 차단합니다. 철회 시 loaded SDK에 consent update를 추가 호출하지 않으며 disable/큐 정리/스크립트 제거/쿠키 삭제/새 문서 전환을 유지합니다. CSP 완화나 추가 추적 기능은 도입하지 않았습니다.
- `tests/site-analytics.test.mjs`: 중단 시 gtag 호출 없음, reload 전 재동의 시 기존 문서 재시작 없음 회귀 테스트 추가.
- 승인에 따라 GA4 store_link_click의 기본 주요 이벤트 값을 '설정 안함'으로 저장했습니다. 새 GA4 브라우저 문서에서 다시 열어 checked/값 입력 비활성 상태 확인. 주요 이벤트 지정/집계 방식/속성/스트림/측정기준은 변경하지 않았습니다.

### 실제 관찰 (UTC)

| 검증 | 증거와 결과 |
| --- | --- |
| 기존 거절 상태 | 07:08:32.580 문서부터 07:08:41.356 mark까지 Google 요청 0, GA 쿠키 0, script 0 |
| 첫 재동의 | 07:08:51.591 새 문서 뒤 07:08:53.300 page_view dispatch 1회. 기존 문서 dispatch 없음 |
| 실제 수신 | DebugView의 해당 기기에서 16:08:53 page_view/first_visit/session_start 각 1회, 16:09:39 store_link_click 1회 확인 |
| 스토어 클릭 | 07:09:38.979 dispatch 1회. 수신 product=happypick, store=app_store, placement=desktop_badge 확인. 전송 필드 및 수신 매개변수에 value/currency 없음 |
| 실행 중 철회 | 07:10:39.971 직전 mark -> 07:10:40.404 거절 문서. 이 구간에 Google 진단/collect dispatch 미관찰. 07:11:28.857까지 GA 쿠키/스크립트 0, 새 요청 0 |
| 캐시된 SDK 재동의 | 07:11:29.584 새 문서 -> 07:11:29.804 page_view 1회, 실패/중복 dispatch 없음. 이 두 번째 세션의 별도 DebugView 수신 수는 확정하지 않았습니다 |
| 웹 정책 제외 | 07:12:37.444 /privacy 문서 -> 07:13:32.476 mark 동안 script 0, 새 Google 요청 0. 앞선 07:12:37.292 user_engagement는 이전 마케팅 페이지 이벤트 |
| 앱 정책 제외 | 07:13:40.585 /apps/happypick/privacy -> 07:14:12.994 mark 동안 script 0, 새 요청 0 |
| 최종 철회 | 07:16:30.880 /privacy 거절 문서 -> 07:18:09.564 mark까지 GA 쿠키/스크립트/새 Google 요청 0 |
| 보호/종료 | 실행 중 미인증 홈/정책/앱/세션 스크립트 401. close.mjs 실행 뒤 모두 503 및 QA environment closed 확인 |

이번 진단 기록에서 /td 요청은 관찰되지 않았습니다. 이는 위 실제 관찰 구간의 재현 해소이며 SDK의 모든 브라우저/모든 실행 경로에 대한 무요청 보장은 아닙니다. 원래 /td 호출의 정확한 내부 원인은 확정하지 않았습니다.

새 후보의 실제 전송은 운영자 브라우저 동의 2회, 스토어 배지 클릭 1회로 제한했습니다. page_view dispatch 총 2회, store_link_click 1회, 이전 마케팅 페이지 user_engagement 1회이며 SDK 기본 세션 이벤트는 별도입니다. 설치나 구매로 해석하지 않습니다.

추가로 이전 후보의 15:50 세션을 DebugView에서 뒤늦게 선택하여 page_view 2회(15:50:48, 15:50:53), first_visit/session_start 각 1회를 확인했습니다. 아래 최초 보고 당시 '중복 수신 미확인'은 당시 관찰 상태이며, 이후 실제 중복 수신이 확인됐습니다. 새 후보에서는 같은 reload 경계 이중 dispatch가 재현되지 않았습니다.

### 자동 검증 및 남은 범위

- `node --import ./tests/register-typescript.mjs --test tests/*.test.mjs`: 38/38 통과. 최초 잘못된 직접 Node 호출은 확장자 없는 import resolver 부재로 실패했고, 저장소의 기존 등록 훅으로 재실행했습니다.
- npm run lint, npx tsc --noEmit, git diff --check 통과. `node qa/build.mjs`의 분리 Next production build 및 OpenNext bundle 통과. Wrangler dry-run/QA 배포 성공, gzip 1926.27 KiB.
- 운영 플래그/Cloudflare 운영 통계/운영 Worker/정책 문구/제품 UI/다른 프로젝트는 변경하지 않았습니다. commit/push/운영 배포 없음, 유료 전환 없음.
- 실제 60일 경과, 탭 간 변경/저장소 오류/만료의 실제 SDK 검증, 모바일 Safari, Google Play/QR 조합은 이번 제한된 재검증에 포함하지 않았습니다. 해당 로직의 모의 테스트 결과와 구분합니다.
- 임시 환경은 다시 닫았습니다. 이미 수신된 테스트 이벤트를 삭제한 것은 아닙니다. 운영 활성화 및 운영 배포, 전체 실환경 QA 합격은 별도 결정입니다.

## 최초 검증 이력 (이전 후보)

## 범위와 환경

- 운영자 브라우저의 비밀번호 보호 HTTPS 검증 환경만 사용: `qa-analytics.chamyworks.com`, Worker `chamyworks-site-ga4-qa`.
- 검증 후보: `47a42dda-7376-47e3-8c22-91189f90815c`. 운영 Worker, 원본 승인 플래그, 다른 프로젝트, GA4 콘솔 설정은 변경하지 않았습니다.
- 기존 GA4 `Chamyworks Website`, `G-67MZ84CVTY` 사용. 동의 2회, App Store 데스크톱 배지 클릭 1회. 설치/구매 검증이 아닙니다.
- 브라우저 내부 진단은 fetch/sendBeacon 호출과 resource 관찰을 기록합니다. 쿠키 값/클라이언트 ID 값/비밀번호는 저장하지 않으며 진단 데이터를 별도로 외부 전송하지 않습니다. GA4 DebugView 실제 수신과 함께 판단했습니다.
- GA4 Internal Traffic 필터는 Testing 상태였습니다. 테스트 이벤트가 일반 보고서에서 자동 제외되었다고 보장하지 않습니다.

## 관찰 결과

시각은 UTC입니다. 한국 시간은 +9시간입니다.

| 항목 | 실제 관찰 |
| --- | --- |
| 동의 전 | 06:45:33~45 Google script 0, GA 쿠키 0, Google 요청 미관찰 |
| 거절 | 06:45:46 이후 script 0, 쿠키 0, Google 요청 미관찰 |
| 첫 동의 | 06:46:07.615 page_view 전송, GA 쿠키 2개 생성. DebugView 15:46:08 수신 확인 |
| 스토어 클릭 | 06:47:08.022 store_link_click 전송, DebugView 15:47:09 1회 수신. product=happypick, store=app_store, placement=desktop_badge 각각 확인 |
| 웹 정책 | /privacy 문서 시작 06:47:47.900 이후 30초 동안 새 분석 요청 0, script 0. 동의는 유지되어 쿠키는 남아 있음 |
| 앱 정책 | /apps/happypick/privacy 문서 시작 06:48:18.750 이후 새 분석 요청 0, script 0 |
| 정책에서 철회 | 06:49:47.218 거절 문서에서 쿠키 0/script 0. 마케팅 페이지 재진입도 동일 |
| 실행 중 철회 후 | 06:51:03.250 새 거절 문서에서 쿠키 0/script 0. 06:51:53.699까지 후속 Google 요청 0. 전환 순간의 예외는 아래 결함 참조 |

첫 동의 세션의 DebugView에서 page_view, session_start, first_visit, store_link_click, user_engagement 각 1회(총 5회)를 확인했습니다. 이는 속성 전체 이벤트 총량을 확정한 것이 아닙니다. 기본 SDK 세션/참여 이벤트도 실제 발생했습니다. user_engagement는 정책 문서 시작 전 06:47:47.796에 이전 마케팅 페이지 주소로 전송됐으며 정책 조회로 판정하지 않았습니다.

관찰한 collect의 page_location은 QA origin + /apps/happypick이고 query/fragment 없이 referrer는 빈 값이었습니다. 스토어 이벤트 요청에는 value/currency 필드가 없었습니다. Cross-origin fetch 결과 status 0/opaque는 HTTP 204 확인을 의미하지 않습니다. 실제 수신 근거는 DebugView입니다.

## 보완 필요

### 1. 재동의 시 page_view 이중 시도

- 06:50:47.667 기존 문서에서 page_view dispatch, 06:50:47.688 failed.
- 06:50:47.953 새 문서 로드 뒤 06:50:53.370 다시 page_view dispatch, opaque 응답 완료.
- GA4에서 두 건이 모두 집계됐다고 확인한 것은 아닙니다. 두 번째 세션의 수신 수는 독립 확인하지 못했습니다. 재동의의 reload 전후에 요청이 두 번 시도되는 중복 위험은 관찰됐습니다.
- `components/site-analytics.tsx`의 choice 변경 effect와 reload 순서가 원인 후보입니다. 승인 후 캐시된 SDK를 포함한 단일 초기화 경로 보정/재검증이 필요합니다.

### 2. 철회 순간 Google 진단 요청 시도

- 06:51:03.097 `https://www.googletagmanager.com/td` fetch dispatch, 03.098 failed. collect 이벤트 수신으로 확인된 것은 아닙니다.
- 요청 필드 이름에 csp 등이 있었고, 앞서 06:50:48.373 같은 경로의 img resource도 관찰됐습니다. 정확한 SDK 호출 원인은 미확인입니다.
- 새 거절 문서에서는 전송 중단이 유지됐지만, 철회 전환 전체를 Google 요청 0으로 합격 처리할 수 없습니다. 기존 SDK의 consent update/CSP 진단 경로를 승인 후 조사해야 합니다. CSP 허용 범위 확대나 새 추적 기능 추가로 해결하지 않습니다.

### 3. GA4 기본 주요 이벤트 값 불일치

- 관리 > 이벤트 > store_link_click > 기본 주요 이벤트 값 설정을 읽기 전용 확인했습니다.
- '기본 주요 이벤트 값 설정'이 선택되어 있고 통화 미국 달러, 값 1입니다. 요청했던 '기본 금액 없음'과 다릅니다.
- DebugView value=1은 웹 요청에서 보낸 값이 아닙니다. 콘솔 설정 변경/저장은 하지 않았습니다. 승인 후 기본 값 없음을 적용해야 합니다.

## 종료 및 한계

- `node qa/close.mjs`로 QA_ENDS_AT secret을 과거로 변경하여 검증 환경을 조기 종료했습니다. 홈, /privacy, /apps/happypick, /__qa/session.js 원격 응답은 모두 503, 본문 'QA environment closed' 확인.
- 종료 직전 테스트 브라우저는 이미 거절/쿠키 없음 상태였습니다. 종료 후 브라우저 재접속은 ERR_BLOCKED_BY_CLIENT여서 인증 세션의 종료 페이지 렌더링은 확인하지 못했습니다. 서버 503 확인과 구분합니다.
- 운영 배포/운영 GA4 활성화/commit/push 없음. 요금제 변경 없음. QA Worker는 닫힌 상태로 남아 있으며 이미 전송된 GA4 데이터는 삭제하지 않았습니다.
- 이번 실제 검증에서 Google Play/QR/모바일 Safari, 60일 실제 경과, 탭 간 변경, 저장소 오류, 금지 쿼리 합성 입력은 추가 검증하지 않았습니다. 기존 모의 테스트 통과와 실제 수신 검증을 구분합니다.
- QA 진단 추가 후 eslint qa 및 인증 테스트 6개 통과, QA 번들/배포 성공. 최초 직렬화 오류는 동의 전 발견 후 수정했으며 위 결과는 수정 후보 기준입니다.
- 다음 단계: 위 보완 범위 승인 -> 최소 수정/로컬 회귀 -> 별도 실연결 재검증 승인 -> 결과 검토 -> 운영 활성화/배포 별도 승인.
