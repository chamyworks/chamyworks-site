# GA4 실제 연결 검증 승인안

작성: 2026-09-04. 아래 최신 상태가 이전 Access 제안보다 우선합니다.

## 최신 결과: 보정 승인 후 재검증 완료

- 사용자 승인 후 재동의 기존 문서 초기화 방지, 철회 시 SDK 추가 명령 제거, GA4 기본 금액 없음 설정을 반영했습니다.
- QA 후보 `09283ee8-5751-4f72-99a8-cf1b22733a66`: 조회/스토어 클릭 실제 수신, 금액 필드 없음, 중복 dispatch 미재현, 철회/정책 제외 확인. 실제/모의 검증 및 남은 범위는 [최신 보고서](GA4_Live_Connection_QA_2026-09-04.md)에 구분했습니다.
- 재검증 후 QA 환경 조기 종료, 주요 경로 503 확인. 운영 수집/배포/commit/push 미진행. 아래 기록은 앞선 단계 이력입니다.

## 최신 결과: 실제 수신 확인, 임시 환경 종료

- 2026-09-04 실제 Google 전송과 DebugView page_view/store_link_click 수신을 확인했습니다. 재동의 이중 요청 시도, 철회 순간 실패한 Google 진단 요청, GA4 기본 금액 USD 1 설정을 발견하여 운영 활성화는 보류합니다.
- 검증 Worker의 종료 secret을 과거로 변경했습니다. 홈/앱/정책/세션 스크립트 HTTPS 503 확인. 운영 환경과 GA4 설정은 변경하지 않았습니다.
- 상세 증거/한계: [실연결 결과](GA4_Live_Connection_QA_2026-09-04.md). 아래 '미실행' 기록은 환경 준비 당시 상태입니다.

## 최신 상태: 서버 비밀번호 인증으로 변경

- 사용자가 Cloudflare Access를 제외하고 서버 비밀번호 방식의 검증 환경 생성을 요청했습니다. Access 앱/정책은 생성하거나 수정하지 않았습니다.
- Cloudflare Dashboard Workers plans에서 Free / $0 / Current plan 확인. 유료 전환 없음. 계정 구독 API는 403이므로 UI로 확인했습니다.
- `qa-analytics.chamyworks.com` / `chamyworks-site-ga4-qa` 전용 배포. 운영 Worker/라우트/Cloudflare 통계/원본 GA4 승인 플래그는 미변경입니다.
- 비밀번호와 무작위 32-byte 서명 키는 Cloudflare Worker secrets로만 등록했습니다. 소스/설정/문서/임시 파일에 실제 비밀번호나 서명 키를 저장하지 않았습니다. CLI stdin으로 전달했습니다.
- 모든 HTML/자산 요청에 서버 인증 선행(`run_worker_first: true`). HTTPS/정확한 호스트 검사, workers.dev/preview URL 비활성화, no-store/noindex, Secure/HttpOnly/host-only/SameSite=Strict 서명 쿠키, Origin 검사, 요청 본문 상한 적용.
- 로그인 시도 제한: Cloudflare rate-limit binding으로 위치별 공유 5회/60초. 전 세계에서 단일하게 집계되는 강한 계정 잠금은 아니며, 사용자가 지정한 짧은 비밀번호의 추측 위험이 사라진 것은 아닙니다.
- 접근 만료: 2026-09-04 16:21:47 KST (`QA_ENDS_AT`). 서버는 만료 후 모든 요청을 503으로 거부합니다. 열린 페이지는 만료 타이머와 5초 주기 서버 상태 확인으로 GA4 disable/쿠키 정리 후 로그인 화면으로 이동합니다. 정지된 브라우저의 재개 동작 등 실제 종료 검증은 별도입니다.
- 조기 종료: `node qa/close.mjs`로 검증 Worker의 종료 secret만 과거로 설정합니다. 운영 수집 제어와는 별개입니다.
- 검증 빌드는 HEAD + 명시된 GA4/웹 정책 관련 파일만 임시 디렉터리에 복사합니다. 오늘의 식판 미배포 변경/design-mockups/앱 정책 본문 변경은 포함하지 않습니다. `.open-next/qa/candidate.json`에 기준 commit 및 선택 파일 기록.
- 검증용 복사본에만 정확한 QA 호스트 허용/동의 저장 키 분리/host-only GA 쿠키/debug_mode를 적용합니다. 기존 GA4 속성으로 테스트 데이터가 들어갈 수 있으며 필터 상태를 확인하기 전 자동 제외라고 가정하지 않습니다.
- 아직 실제 Google 분석 전송 및 GA4 수신 검증 완료를 의미하지 않습니다. 운영 배포/운영 GA4 활성화/commit/push는 별도 승인 대상입니다.

## 이전 제안 (Access 방식은 채택하지 않음)

## 제안 환경

| 항목 | 승인 요청안 |
| --- | --- |
| HTTPS 호스트 | `https://qa-analytics.chamyworks.com` 후보. DNS 사용 가능 여부/기존 충돌은 승인 후 읽기 전용 확인. 아직 생성하지 않음 |
| 실행 단위 | 운영 `chamyworks-site`와 분리한 검증용 Worker `chamyworks-site-ga4-qa` 후보. 승인된 GA4 변경만 별도 빌드 |
| 참여자 | 차미웍스 운영자 본인 1명. Codex는 본인이 승인한 브라우저에서 검증 보조. 별도 외부 QA 초대/공유 계정 없음 |
| 기기 | 운영자 PC Chrome 및 iPhone Safari, 각 전용 테스트 브라우저 세션 |
| 접근 제한 | 해당 호스트 전체 경로에 Cloudflare Access, 운영자가 지정한 정확한 이메일 1개만 허용, 이메일 OTP 인증. 도메인 전체/Everyone/Bypass 허용 없음 |
| 세션/기간 | Access 세션 1시간을 제안. 검증 시작 시각 합의 후 약 1시간 진행, 연장/참여자 추가는 재승인 |
| 우회 진입 차단 | 검증 Worker의 workers.dev와 버전/별칭 preview URL 비활성화. 모든 HTML/자산 경로와 미인증 진입 차단을 먼저 검증 |
| 데이터 대상 | 기존 측정 ID `G-67MZ84CVTY`. 속성/스트림/이벤트 범위 맞춤 측정기준 재생성 없음 |

Access/DNS/Worker/비용 발생 가능성은 계정에서 아직 확인하지 않았습니다. 요금제 변경 또는 예상 밖 비용이 필요하면 진행하지 않고 별도 승인받습니다. noindex는 보조 설정이며 접근 제한을 대체하지 않습니다.

Cloudflare Access는 애플리케이션별 인증 정책과 이메일 일회용 PIN을 지원합니다. 위 구성은 그 기능을 사용하는 제안이지 현재 설정 완료 보고가 아닙니다. [Access 앱 설정](https://developers.cloudflare.com/cloudflare-one/access-controls/applications/http-apps/self-hosted-public-app/), [이메일 OTP](https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/one-time-pin/).

검증 Worker의 대체 주소는 설정 파일에서도 명시적으로 차단하여 재배포 시 다시 열리지 않도록 합니다. 운영 Worker의 주소와 설정은 건드리지 않습니다. [workers.dev](https://developers.cloudflare.com/workers/configuration/routing/workers-dev/), [Preview URLs](https://developers.cloudflare.com/workers/versions-and-deployments/preview-urls/).

## 전송 정보와 분리

- Google: 검증자가 동의한 뒤 허용된 페이지 URL/제목, 출처 origin, 허용 UTM, page_view, store_link_click의 product/store/placement, 쿠키 기반 가명 식별자 및 SDK의 기본 세션/기기·브라우저 관련 정보. debug_mode는 테스트 이벤트 구분용으로만 제안합니다.
- Google 연결 자체에서 검증자의 IP 주소가 네트워크 상대에게 전달될 수 있다는 점도 승인 범위에 포함합니다. IP 저장/처리 방식의 공개 정책 문구는 기획 확정본을 기다리며 이 문서에서 임의 확정하지 않습니다.
- GA4에 보내지 않을 정보: Access 인증 이메일/표시 이름/인증 토큰, 문의 내용/첨부파일, 앱 내부 기록, 임의 쿼리/fragment, 외부 스토어 URL의 전체 파라미터. 합성 테스트 값만 사용합니다.
- Cloudflare Access는 인증 이메일, 인증 상태 및 접속 관련 정보를 별도로 처리할 수 있습니다. 이것은 GA4 분석 동의나 쿠키와 별개입니다. 인증용 쿠키를 GA4 쿠키로 판정하지 않습니다.
- Cloudflare Web Analytics/RUM의 기존 운영 설정과 스크립트는 유지합니다. 새 통계 사이트를 생성하거나 기존 스크립트를 제거하지 않습니다. 검증 호스트에 RUM이 삽입되는지는 실제 응답에서 확인하여 별도 기록합니다.
- 동의 전/거절 상태의 '요청 없음' 합격 기준은 Google 분석 요청입니다. Cloudflare 제공/보안/통계 요청을 함께 0으로 만들지 않습니다.
- 두 분석 도구의 방문 수 일치 작업이나 통합 대시보드는 범위 밖입니다.

## 승인 후 필요한 검증 전용 변경

현재 코드는 localhost/preview 호스트 전송을 막고 있으며 승인 플래그가 모두 false입니다. 지금은 아래 예외를 구현하지 않습니다.

- 검증 빌드에서만 정확한 후보 호스트 1개를 허용하고, 운영 호스트 제한을 전역 해제하지 않습니다.
- GA4 쿠키는 검증 호스트 전용으로, 저장 키도 검증용으로 분리합니다. 현재 `cookie_domain=chamyworks.com`을 그대로 적용하여 운영 쿠키와 공유하면 안 됩니다.
- 검증 page_location에는 검증 호스트를 유지하고 허용 path/UTM만 담아 운영 방문과 혼동하지 않게 합니다. 개인정보처리방침 URL은 계속 GA4 제외합니다.
- 기본 이벤트/광고 기능/자동 추적 범위는 확장하지 않습니다. gtag.js 로딩 주소에 googletagmanager.com이 포함되더라도 GTM 컨테이너를 도입하는 것은 아닙니다. GTM 컨테이너/Google Ads/앱 SDK는 추가하지 않습니다.
- debug_mode만으로 보고서에서 테스트 데이터가 자동 제외된다고 가정하지 않습니다. 개발자 트래픽 필터 상태는 먼저 확인하고 변경이 필요하면 별도 승인받습니다. 기존 속성에 소량의 테스트 데이터가 들어갈 수 있음을 전제로 합니다.
- 보호된 검증 배포 승인은 운영 배포/정책 최종 승인/운영 GA4 활성화 승인과 구분합니다. 최종 정책 및 동의 안내 미확정 상태에서는 실제 전송을 시작하지 않습니다.

## 실연결 검증 순서

1. 미인증 접근 차단, HTTPS, 대체 Worker URL 차단을 확인합니다. 계정 접근 제한이 확인되기 전 Google 태그는 비활성 상태로 둡니다.
2. 새 테스트 세션에서 동의 전/거절 시 Google 태그/collect 요청 0, GA 쿠키 0을 확인합니다. Cloudflare/Access 요청과 쿠키는 별도 분류합니다.
3. 동의 후 Google 요청과 쿠키 생성, 기존 GA4 DebugView 수신을 각각 확인합니다. 페이지당 page_view 1회와 실제 클릭당 store_link_click 1회를 비교합니다. 같은 사람이 반복해서 누른 클릭은 중복 구현 오류와 구분합니다.
4. App Store/Google Play와 mobile_badge/desktop_badge/desktop_qr 조합의 product/store/placement를 대조합니다. QR 촬영은 웹 클릭/설치로 세지 않습니다.
5. 허용 UTM 외 합성 query/fragment 및 출처 경로가 이벤트/실제 요청 payload에 포함되지 않는지 검사합니다. SDK 자동 세션/참여 이벤트를 포함한 전체 요청을 확인합니다.
6. 철회, 만료를 모사한 테스트 저장값, 다른 탭의 선택 변경, 저장소 실패, 정책 페이지 이동, SDK 지연 로딩 중 철회를 검사합니다. 쿠키 삭제/후속 요청 중단/새 문서에서 태그 부재를 구분하여 기록합니다.
7. 선택/쿠키의 최대 60일과 자동 연장 금지는 저장값/Expires 및 재방문 전후 비교로 확인합니다. 실제 60일 경과 관찰과 테스트 저장값 조작은 구분합니다.
8. 증거는 비밀값/Access 토큰/쿠키 값/개인 IP를 가린 요청 필드, 시각, 이벤트 수, 쿠키 속성, DebugView 수신 캡처로 남깁니다. 필터링 안 된 HAR를 저장소나 외부에 공유하지 않습니다.
9. 종료 시 동의 철회, 검증 전송 차단, 검증 호스트 차단 및 전용 빌드 정리. 이미 GA4에 수신된 이벤트가 자동 삭제된다고 보고하지 않습니다.

검증 호스트 결과는 운영 hostname/CSP/라우팅의 최종 검증을 대신하지 않습니다. 이후 별도 운영 배포 승인이 있어야 운영 확인을 진행합니다. 수집 중단 시에도 승인된 웹 정책은 공개 상태를 유지합니다.

## 승인 시 확정할 것

- 후보 호스트와 별도 Worker 생성 허용 여부
- Access 허용 이메일 1개(현재 미지정), 기기 및 시작 시각
- 인증 관련 Cloudflare 처리와 위 최소 Google 전송 범위 허용 여부
- 최종 정책/동의 고지 준비 여부 및 테스트 데이터의 기존 속성 유입 승인

이 문서 작성만으로 어느 항목도 승인되거나 실행되지 않습니다.
