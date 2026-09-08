# 웹사이트 GA4 · 정책 · 푸터 구현 검증

작성일: 2026-09-04

## 기획 전달 문구 — Cloudflare 유지 + GA4 추가

현재 사용자 결정에 따른 전달본이다. 이번 마감에서 문의 본문을 짧게 유지하고, 업체·목적은 6조에서만 정리하도록 통합했다. 개인 Gmail 주소·계정 종류·Cloudflare → Google 전달 경로 설명, 다른 앱 정책의 일괄 변경은 추가하지 않는다. 아래 A는 개발방의 로컬 문구 반영 범위이며, B의 국외 이전 적용 판단이 해결되지 않아 게시 가능한 정책 최종본은 아니다. 개발 보고서의 28개 테스트를 이 기획 검토에서 재실행하지 않았다. 사이트 코드·콘솔·검증 환경·승인 플래그는 변경하지 않았다.

### A. 개발방에 전달할 정책 변경

- 1·2·7~10조: 이번 전달에서 변경하지 않는다. Cloudflare Web Analytics/RUM과 기존 EU 제외 설정을 유지한다. 7조 문의 최대 1년 이내 삭제+법정 예외 유지, 사본·백업 문구 추가 없음.
- 3조: 기존 처리 항목 문단 다음에 추가한다.

  > Google 서버와 통신하는 과정에서 IP 주소가 처리될 수 있습니다. Google은 GA4에서 개별 IP 주소를 기록하거나 저장하지 않는다고 안내합니다.

- 4조: 첫 문단을 아래로 교체한다. 나머지 철회·소급 삭제 구분 문단은 유지한다.

  > 이용자는 선택적 이용 분석에 동의하거나 거절할 수 있으며, 거절하더라도 웹사이트를 이용할 수 있습니다. 동의 전이나 거절한 상태에서는 GA4 태그를 불러오지 않습니다. 이 선택은 GA4에만 적용되며, Cloudflare의 웹사이트 제공·보안·방문 및 성능 통계 처리는 별도로 이루어집니다.

- 5조: 마지막 문단만 다음과 같이 통일한다. 처리 항목과 목적 등 나머지는 유지한다.

  > 문의 이메일은 외부 이메일 서비스를 통해 수신·보관되며, 문의 확인 및 답변에 이용됩니다. 문의 내용과 첨부파일은 웹사이트 분석 도구에 전송하지 않습니다.

- 6조: 제목은 ‘외부 서비스 이용’을 유지한다. 아래는 간결한 서비스 설명이다. 종전 4행 처리 흐름 표와 포워딩 경로 문단을 대체한다. B에서 확인되지 않은 국외 이전 상세를 이 문구로 대체하거나, 이 부분만으로 게시 완료 처리하지 않는다.

  > 웹사이트 운영, 이용 분석 및 문의 처리를 위해 다음 외부 서비스를 이용합니다.
  >
  > - Cloudflare, Inc.: 웹사이트 제공·보안, 방문·성능 통계 및 문의 이메일 처리
  > - Google LLC — Google Analytics 4: 동의한 이용자의 웹사이트 이용 분석
  > - Google LLC — 이메일 서비스: 문의 이메일 수신·보관 및 답변
  >
  > 각 서비스에서 처리하는 정보와 목적은 제2조·제3조·제5조, 차미웍스의 보관 및 삭제 기준은 제7조에서 안내합니다.
  >
  > Google과 Cloudflare는 글로벌 인프라를 운영하며, 서비스 제공 과정에서 정보가 국외에서 처리될 수 있습니다. 각 제공자의 데이터 처리 및 보호조치에 관한 공식 안내는 아래에서 확인할 수 있습니다.
  >
  > - [Cloudflare 개인정보처리방침](https://www.cloudflare.com/privacypolicy/)
  > - [Cloudflare Web Analytics 안내](https://developers.cloudflare.com/web-analytics/about/)
  > - [Google 개인정보처리방침](https://policies.google.com/privacy?hl=ko)
  > - [Google Analytics 국제 데이터 전송 안내](https://business.safety.google/adsdatatransfers/)
  >
  > 차미웍스에 적용되는 보관 및 삭제 기준은 제7조에서 안내합니다. GA4 분석은 거절할 수 있으며, 동의 변경·철회 방법은 제4조에서 확인할 수 있습니다. 개인정보 관련 요청은 help@chamyworks.com으로 접수할 수 있습니다.

  개인 Gmail 주소나 계정 종류, 메일 전달 경로를 설명하는 별도 문단은 추가하지 않는다. 업체명과 업무 목적을 간결하게 남기는 것과 실제 처리 업체 자체를 고지에서 누락하는 것은 구분한다. 위 ‘국외에서 처리될 수 있음’은 일반 설명이며 국가별 상세 고지나 별도 동의를 대체하지 않는다.
- 11조: 현재 공개 연락처 help@chamyworks.com 유지. 운영자 확인 없이 개인 이름이나 가상의 개인정보 담당부서를 추가하지 않는다. 담당자/책임자 공개 표기의 적정성은 게시 검토에서 확인한다.

### B. 내부 검토 기준 — 공식 자료 우선, 일괄 외부 문의 요구 철회

#### 이번 검토의 결론 및 종료 조건

- **공식 링크만 붙여 게시 가능한 최종안으로 마감할 수는 없다는 결론이다.** 기술적인 포워딩 경로 설명을 줄이는 것은 가능하지만, 국외 이전의 적용 근거·필요 고지까지 생략할 근거는 확인하지 못했다. 이전의 ‘공식 안내 정도로 끝낼 수 있다’는 취지의 설명은 정정한다.
- 법 제28조의8 제1항은 별도 동의 외에도 계약 이행에 필요한 처리위탁·보관 등의 근거를 두고 있다. 따라서 모든 외부 서비스에 무조건 별도 동의를 추가하라고 요청하지 않는다. 다만 계약 이행 근거도 같은 조 제2항 사항의 정책 공개 또는 개별 안내를 조건으로 하며, 운영자가 외국 업체와 계약했다는 사실만으로 방문자와의 계약 이행 요건을 충족한다고 단정하지 않는다.
- GA4는 방문자의 선택적 분석으로 설계되어 있으므로, 다른 적법 근거가 확인되지 않은 상태에서 필수 계약 처리로 분류하지 않는다. 별도 국외 이전 동의를 사용하는 경우 이전 항목, 국가·시기·방법, 수신자 명칭·연락처, 목적·보유기간, 거부 방법·효과를 안내해야 한다. 기존 일반 분석 버튼을 이 동의까지 받은 것으로 간주하지 않는다.
- Google은 국제 이전 안내에서 글로벌 데이터센터 사용을 설명하고, 이 문서 자체가 개인정보 고지가 아니라고 명시한다. Cloudflare도 미국·EEA 중심 보관 및 전 세계 처리 가능성을 설명한다. 이 일반 자료만으로 현재 서비스별 국가 범위를 확정하거나 ‘미국’ 한 나라로 기입하지 않는다.
- **남은 판단은 하나의 국외 이전 검토 건으로 묶는다:** 아래 실제 처리 목록에 적용할 법적 근거와 고지 방식, 업체 공개 자료로 국가·보유기간을 명시하는 허용 범위. 법령해석지원센터 또는 개인정보 전문 검토에 이 쟁점만 확인하는 것을 제안한다. 모든 업체에 일괄 문의하거나 법률 자문 계약을 체결하라는 요구가 아니다. 다만 검토 결과 실제 처리 국가 등 사실 자료가 필요하다면 그 자료 없이 완료할 수는 없다.
- 이 판단은 GA4 연결 테스트로 해결되지 않는다. 실연동 테스트는 Google 전송·쿠키·동의·철회 동작을 확인하는 별도 작업이다. 기존 Cloudflare 유지 결정은 법적 적합성 검증 완료라는 의미가 아니다.
- 이번 작업은 문구 통합과 확인 한계의 특정까지 완료했다. **정책 게시 승인과 운영 GA4 활성화는 미완료**다. 이미 작성한 시안을 반복 수정하면서 이 항목이 해소된 것처럼 보고하지 않는다.

공식 근거: [현행법 제28조의8 제1항](https://law.go.kr/lsLinkCommonInfo.do?chrClsCd=010202&lsJoLnkSeq=1029331979), [제2항 고지 항목](https://www.law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1033215841), [Google 국제 이전 안내](https://business.safety.google/adsdatatransfers/), [Cloudflare 개인정보처리방침 제7절](https://www.cloudflare.com/privacypolicy/). 개인정보보호위원회의 [작성지침 안내 페이지](https://pipc.go.kr/np/cop/bbs/selectBoardArticle.do?bbsId=BS217&mCode=D010030000&nttId=12018)에서 법령해석지원센터 02-2100-3043을 확인했다. 이번에 첨부 PDF 본문을 읽었다고 주장하지 않는다.

추가 확인이 승인되면 전달할 질문(아직 발송·접수하지 않음):

> 한국의 소규모 앱 소개 사이트입니다. Cloudflare로 사이트 제공·보안·쿠키 없는 방문 통계를 처리하고, 문의는 Cloudflare 이메일 서비스를 통해 Google의 일반 이메일 계정에서 처리합니다. GA4는 방문자 동의 후에만 실행할 계획이며, 광고 기능은 사용하지 않습니다. 각 처리에 적용할 국외 이전 근거와 고지 방식은 무엇이며, 업체가 처리 국가를 글로벌 인프라로만 공개하는 경우 그 공식 안내·목록 링크를 이용해 국가와 보유기간을 어떻게 고지해야 합니까? 문의 본문은 간결하게 두고 외부 서비스/국외 이전 항목에서 업체와 필요 사항을 안내하려 합니다.

아래는 이 검토에 사용할 사실 목록이지 새 개발 작업 목록이 아니다.

별도 동의를 근거로 하는 국외 이전에는 이전 항목, 국가·시기·방법, 수신자 명칭·연락처, 목적·보유기간, 거부 방법·효과의 사전 고지가 필요하다. 지금의 일반 분석 동의 문구만으로 해당 동의까지 받았다고 판정하지 않는다.

| 처리 구분 | 현재 정리 가능한 내용 | 마감에 필요한 확인 |
| --- | --- | --- |
| GA4 | Google LLC, 동의 후 허용 페이지·이벤트 발생 시 HTTPS 요청, 쿠키 식별자/페이지/유입/허용 캠페인/클릭/기기·브라우저 관련 정보 및 네트워크 IP 처리, 분석 목적, 사용자·이벤트 수준 2개월, 거절해도 사이트 이용 가능 | 이 서비스에 적용되는 국외 처리·접근 국가 범위, 실제 적용 약관 및 국외 이전 동의 고지의 완결성. 전체 데이터의 보관기간을 2개월이라고 쓰지 않음 |
| Cloudflare 웹 제공·보안·통계 | Cloudflare, Inc., 웹 요청 및 RUM 실행 시 처리, 기존 정책의 항목·목적·실행 로그 3일/통계 조회 최근 6개월 구분 | 서비스별 국외 처리 국가와 적용 근거. 일반 서버 제공과 선택적 분석을 일괄적으로 필수 계약 처리라고 단정하지 않음 |
| 문의 이메일 전달·보관 | Cloudflare → Google, 문의 발송·전달·회신 과정에서 이메일 주소/표시 이름/본문/첨부 처리, 문의 대응 목적, 운영자 문의 보관 최대 1년 | 이메일 경로의 처리 국가·서비스별 약관 적용과 전달 관련 보유 기준. 개인 이메일 서비스에 Workspace 계약을 적용했다고 가정하지 않음 |

Google의 글로벌 데이터센터 안내나 Cloudflare의 일반 국제 이전 설명만으로 이 서비스의 국가 목록을 임의 확정하지 않는다. 이전 국가를 단순히 ‘미국 등’으로 채운 것을 완성된 고지라고 전달하지 않는다. 확인되지 않은 보유 기준을 운영자의 ‘문의 최대 1년’ 또는 Workers의 ‘3일’로 대체하지 않는다.

확인 절차는 기존 설정과 서비스별 공식 약관·안내를 우선한다. 모든 업체에 이메일을 보내거나 법령 상담을 마쳐야 한다는 일괄 선행 조건은 철회한다. 위 표는 사실·적용 조건에 대한 판단 항목이며 곧바로 외부 문의 목록을 뜻하지 않는다. 다만 공식 자료로 확인되지 않은 중요 항목이 있으면 그 항목에 한해 추가 자료 확인 또는 전문가 상담을 고려한다. 단순한 일반 국제 이전 설명과 링크 추가만으로 모든 법적 요건이 충족됐다고 판정하지 않는다. 기존 외부 문의 초안은 선택적 참고자료이며 발송하지 않았다. 정책·실전송 승인 상태는 변경하지 않는다.

### C. 동의창 전달 문구 — 로컬 시안용

제목: **방문 통계 수집 설정**

본문:

> 동의하면 Google Analytics 4(GA4)가 쿠키를 사용해 페이지 방문·유입 경로·스토어 버튼 클릭을 분석해요. 거절해도 사이트를 그대로 이용할 수 있고, 하단 ‘방문 통계 수집 설정’에서 언제든 동의를 철회할 수 있어요.

보조 안내:

> 선택과 분석용 쿠키는 최대 60일간 유지돼요. GA4의 사용자·이벤트 수준 데이터 보관기간은 2개월이에요. 이 선택은 GA4에만 적용되며, Cloudflare의 사이트 제공·보안·방문 및 성능 통계와는 별개예요.

링크: **개인정보처리방침** → `/privacy`

버튼: 기존 **거절 / 동의 철회**, **통계 수집 동의** 유지. 동등한 접근성과 거절 가능성을 유지한다.

영문 제목: **Visitor statistics settings**

영문 본문:

> With your consent, Google Analytics 4 (GA4) uses cookies to analyze page visits, traffic sources, and store button clicks. You can refuse without affecting your use of the site and withdraw consent at any time using Visitor statistics settings in the footer.

영문 보조 안내:

> Your choice and analytics cookies are kept for up to 60 days. GA4 user- and event-level data retention is set to 2 months. This choice applies only to GA4; Cloudflare's site delivery, security, traffic, and performance processing operate separately.

영문 링크: **Privacy policy (Korean)**. 기존 영문 버튼 유지.

주의: 위는 일반 분석 선택 설명이다. B의 상세 고지를 확정한 다음, 동의 전에 쉽게 확인할 수 있는 방식 및 국외 이전에 필요한 별도 동의 구조를 마감해야 한다. 일반 버튼을 임의로 국외 이전 동의까지 포함하는 것으로 해석하지 않고, 마감 전 실제 전송은 계속 차단한다.

추가 표현 수정: 현재 preview 안내의 ‘동의해도 분석 데이터는 전송하지 않아요’는 Cloudflare 처리까지 없다는 오해를 줄 수 있으므로 **‘검토용 미리보기: 동의해도 Google로 분석 데이터를 전송하지 않아요.’**로 한정한다. 영문은 **‘Review preview: no analytics data is sent to Google, even if you consent.’**. 공개 정책 상단 안내를 다시 넣으라는 뜻이 아니며 개발용 동의창에만 해당한다.

### D. 검증 참여자 안내 — 운영 정책과 분리

[실제 연결 검증 승인안](GA4_Connection_Verification_Approval.md)의 운영자 1명·별도 Worker·정확한 이메일 허용·호스트 전용 쿠키·우회 주소 차단 방향은 유지한다. 다음 안내는 승인 자료에 포함할 초안이며 환경 생성이나 실제 전송 승인이 아니다.

> 이 환경은 차미웍스 운영자만 사용하는 GA4 연결 검증용 사이트입니다. 접근 인증을 위해 Cloudflare Access가 지정 이메일과 인증·접속 관련 정보를 처리합니다. 해당 인증 이메일과 인증 토큰은 GA4에 보내지 않습니다.
>
> 분석에 동의하면 테스트 페이지·허용 캠페인·스토어 버튼 클릭과 쿠키 기반 식별자, 기본 기기·브라우저 정보가 기존 GA4 속성으로 전송됩니다. 통신 과정에서 IP 주소가 처리될 수 있습니다. 테스트 기록은 기존 GA4 속성에 남을 수 있으며, 테스트 종료나 동의 철회만으로 이미 전송된 기록이 즉시 삭제되지는 않습니다.
>
> 검증 종료 후 새 분석 전송과 검증 환경 접근을 차단합니다. 인증 쿠키와 GA4 쿠키는 구분하며, 운영 사이트의 분석 쿠키와 분리합니다.

- Access의 이메일 허용 목록 및 OTP는 접근 제어일 뿐 GA4 동의나 정책 승인 자체가 아니다.
- 제안한 Access 세션 1시간은 인증/감사 로그의 보관기간이 아니다. 해당 로그의 실제 플랜별 보관 조건은 환경 구성 전 읽기 전용으로 확인하고 검증 승인 자료에 기록한다. 확인 전 임의의 보관기간을 적지 않는다.
- 검증용 Access를 일반 방문자용 운영 사이트에도 사용하는 것처럼 정책 6조에 추가하지 않는다. 외부 검증자를 추가하거나 공개 기능으로 전환하면 범위와 고지를 다시 검토한다.
- Access 허용 이메일·시작 시각은 아직 미지정이다. 공개 문서에 개인 이메일을 기록하지 않는다.
- 개발 승인안의 기존 정책/동의 준비 조건을 이 전달본으로 충족했다고 처리하지 않는다. B의 마감, 검증 실행에 대한 사용자의 별도 승인 전에는 환경 생성·실제 Google 전송을 하지 않는다.

근거: [Google GA4 데이터 보호](https://support.google.com/analytics/answer/6004245?hl=ko), [Google 국제 데이터 전송](https://business.safety.google/adsdatatransfers/), [국외 이전 동의 시 사전 고지 항목](https://www.law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1033215841), [Cloudflare Access 이메일 OTP](https://developers.cloudflare.com/cloudflare-one/integrations/identity-providers/one-time-pin/).

## 후속 점검 — Cloudflare 유지 / GA4 검증 준비

- 기존 런타임 코드/UI/정책 본문/Cloudflare 설정은 이번 재점검에서 변경하지 않았습니다. 테스트 6개를 추가해 총 28개 통과했습니다.
- 새 회귀 항목: GA4 철회 시 별도 Cloudflare beacon/보안 쿠키 미변경, 6가지 스토어/위치 조합의 단일 클릭과 선택 기한 미연장, 동의가 저장되어 있어도 정책 직접 방문 시 GA4 미초기화, 7조 문구 유지 및 사본/백업 추가 없음, Cloudflare CSP/정책 유지, 상단 검토 UI 제거와 비승인 상태 유지.
- `__cf_bm`, `cf_clearance`는 모의 테스트용 보안 쿠키 예시입니다. 실제 사이트에 이 쿠키가 발급된다는 증거가 아니며 Web Analytics의 쿠키 사용을 뜻하지 않습니다.
- 로컬 /privacy 새로고침에서 제목/본문/7조/Cloudflare 설명과 상단 검토 UI 제거 상태 확인. 푸터 설정에서 동의/철회 및 Google script 미삽입 확인. 실제 Google 요청/쿠키/수신은 미검증입니다.
- `node --import ./tests/register-typescript.mjs --test tests/site-analytics.test.mjs tests/website-policy.test.mjs` 28/28, npm run lint, npx tsc --noEmit, npm run build, git diff --check 통과.
- 이번 변경 파일: tests/site-analytics.test.mjs, tests/website-policy.test.mjs, docs/private/GA4_Connection_Verification_Approval.md, 이 보고서, Daily_Worklog.md, Project_Phase_Status.md.
- 호스트/참여자/전송 정보/접근 제한을 구체화한 [실제 연결 검증 승인안](GA4_Connection_Verification_Approval.md) 참조. 환경 생성/콘솔 변경/실제 분석 전송/commit/push/배포/활성화 없음.
- GA4 IP 처리, 외부 서비스/국외 이전/동의 안내는 기획 확정 문구 대기. 다른 미배포 변경은 그대로 분리 유지합니다.

## 후속 UI 정리 — 2026-09-04

- 사용자 요청으로 웹 정책 상단의 검토용 미리보기 안내와 게시 전 확인사항 UI를 제거했습니다. 정책 제목/날짜/본문 및 기존 내비게이션/푸터는 유지했습니다.
- 공개 콘텐츠 데이터의 publicationChecks 목록을 아래 내부 확인사항으로 이관했습니다. 안내 제거는 최종 정책 승인, GA4 활성화 또는 배포 승인이 아닙니다. 기존 승인 플래그와 모드 제어는 그대로입니다.

### 기획 내용 검토 — 2026-09-04

이 항목은 사용자 요청에 따른 현재 정책과 기존 확인 기록의 대조 결과다. 사이트 코드, 계정 설정, 승인 플래그는 변경하지 않았다. 아래 수정안 작성은 게시 가능한 법률 최종안 승인이나 실제 연결 검증 완료를 의미하지 않는다.

#### 기존 확인을 재사용하는 항목

- 문의 담당은 운영자 본인, 공개 문의처는 help@chamyworks.com이다. Google 계정 2단계 인증 사용은 사용자 확인이다. 계정 단독 접근이나 실제 삭제 이행까지 확인했다는 의미는 아니다.
- 문의 접수일부터 최대 1년 이내 삭제 및 법정 보관 예외는 사용자 결정이다. 월별 점검 의무, 자동 삭제, 관리자 시스템을 이번 작업의 요구사항으로 추가하지 않는다.
- 기존 기획 기록의 Cloudflare Workers Free / 실행 로그 저장 on / 로그 3일 / Web Analytics 최근 6개월 조회 / EU 스크립트 자동 삽입 제외가 현행 정책 2·7조에 반영되어 있음을 대조했다. 이번에 관리 콘솔을 다시 검사하지는 않았다.
- GA4 사용자·이벤트 수준 데이터 2개월, 활동 시 갱신 off, 선택·쿠키 최대 60일이라는 기존 기준은 변경하지 않는다. 실제 SDK 구현 검증과 구분한다.
- Google 한국 서비스 약관의 제공자는 Google LLC이다. 개인 이메일 서비스에 Google Workspace DPA나 데이터 지역 보장을 적용했다고 적지 않는다. 공개 페이지에 개인 Gmail 주소나 계정 종류를 적을 필요와는 별개다.

#### 개발방 전달용: 지금 확정 가능한 본문 보완안

1. 3조의 처리 항목 설명 다음에 다음 문단을 추가한다.

   > Google 서버와 통신하는 과정에서 IP 주소가 처리될 수 있습니다. Google은 GA4에서 개별 IP 주소를 기록하거나 저장하지 않는다고 안내합니다.

   이는 IP가 전혀 전송되지 않는다는 의미가 아니다. 기존 광고·세부 위치/기기 수집 제한 설정은 그대로 유지한다.

2. 7조는 사용자 후속 의견에 따라 기존 문의 보관기간 문구를 그대로 유지한다. 앞서 제안한 사본·백업 설명은 공개 본문 추가 요청에서 철회한다.

   > 문의 관련 정보는 문의 처리 및 관련 이력 확인에 필요한 기간 동안 보관하며, 문의 접수일로부터 최대 1년 이내에 삭제합니다. 다만 관련 법령에 따라 보관이 필요한 경우에는 해당 기간 동안 보관할 수 있습니다.

   내부 운영 메모만 유지: 답장에 포함된 원문, 첨부파일 및 별도 저장 사본이 있다면 같은 기준으로 관리한다. 별도 사본을 만들거나 추가 보관하라는 요구가 아니다. 제공자 내부 백업의 최종 삭제 절차는 운영자의 보관기간과 구분하되, Google의 일반 백업 기간을 모든 문의 데이터의 보관기간으로 대입하지 않는다. 처리 목적이 달성되어 불필요해진 정보의 파기 원칙은 유지한다.

3. 6조의 외부 서비스 표기는 다음과 같이 구체화할 수 있다. 단, 이 목록만으로 국외 이전 고지가 완성되지는 않는다.

   - Cloudflare, Inc.: 웹사이트 제공·보안·방문 및 성능 통계, 문의 이메일 전달
   - Google LLC — Google 이메일 서비스: 문의 이메일 수신·보관·답변
   - Google LLC — Google Analytics 4: 동의한 이용자의 웹사이트 이용 분석

   Google 개인정보처리방침과 Cloudflare 개인정보처리방침을 각각 공식 링크로 연결한다. 계약상 위탁·제3자 제공 구분이나 국외 이전 적용 근거를 이 목록으로 확정하지 않는다.

#### 6조 국외 이전 고지: 현재 자료만으로 마감하지 못한 범위

- 현재 6조는 업체·용도 목록뿐이다. 국외 이전을 별도 동의에 근거해 수행하려면 이전 항목, 국가·시기·방법, 수신자 명칭·연락처, 목적·보유기간, 거부 방법·효과의 사전 안내가 필요하다. 지금의 분석 동의 버튼이 이 요건까지 충족한다고 판정하지 않는다.
- 확인 가능한 흐름: 웹 접속 시 Cloudflare에서 요청 처리, 문의 발송 시 Cloudflare 경유 Google 메일로 전달, GA4 동의 후 허용 페이지·이벤트 발생 시 Google로 분석 요청 전송. 이 흐름을 실제 전송 국가 전체나 서비스별 보유기간의 증거로 확대하지 않는다.
- Google의 공식 분석 제품 국제 전송 안내는 글로벌 데이터센터를 설명한다. Cloudflare 공개 방침은 미국·EEA 중심 저장 및 글로벌 접근·전송을 설명한다. 따라서 실제 서비스의 이전 국가를 임의로 미국 하나로 적거나, 데이터센터 소재지 목록 전체를 이 계정의 실제 이전 국가라고 복사하지 않는다.
- 외부 확인이 필요한 사실: 사용 중인 서비스별 국외 처리·접근 국가 범위, Cloudflare 직접 이메일 전달의 임시 저장·전달/보안 메타데이터 보유기간. 공식 공개 자료에서 이 구성에 적용되는 확정 값을 찾지 못했다.
- 법적 적용 확인: 선택적 GA4 분석과 웹 제공·이메일 문의 처리의 국외 이전 근거를 구분해야 한다. 개인 이메일 이용이 위법하다고 단정하지 않으며, 일반 소비자 약관을 기업용 위탁 계약이 체결된 증거로 삼지도 않는다. 적절한 근거·고지 방식이 불명확한 범위는 개인정보 법령해석 상담 또는 전문가 확인 대상이다.
- 따라서 확정 가능한 위 3개 보완안과 달리, 완성된 국외 이전 표·동의문은 제공하지 않았다. 이 미확인은 GA4 연결 테스트나 개발 완료를 기다린다고 해소되지 않는다. 최종 게시·활성화 승인은 계속 보류한다.

외부 확인 요청 초안(미발송):

> 한국의 소규모 웹사이트에서 귀사 서비스를 이용하며 개인정보 국외 이전 고지를 준비하고 있습니다. Cloudflare에는 Workers Free, Web Analytics 및 Email Routing의 외부 메일함 직접 전달을, Google에는 일반 Google 이메일 서비스와 GA4를 이용합니다. 귀사에 해당하는 각 서비스에 대해 (1) 방문자 또는 문의자의 데이터가 처리·저장·접근되는 국가 범위와 공식 근거, (2) 처리 법인 및 개인정보 문의처, (3) 본문·임시 저장·전달 메타데이터·보안 로그·백업을 구분한 보유 및 삭제 기준, (4) 해당 계정 유형에 적용되는 데이터 처리 약관을 확인할 수 있는 자료를 부탁드립니다. 개인 문의 내용이나 계정 비밀정보는 첨부하지 않습니다.

담당 공개 표기·시행일의 최종 승인, 실제 계정 접근 범위/삭제 이행, 실제 Google 요청·쿠키·수신 확인은 각각 공개 승인·운영 이행·연결 검증 항목으로 구분해 남긴다. 이미 확인된 설정을 다시 미확정으로 돌리지 않는다.

#### 과거 검토: 이용 통계를 GA4로 일원화하는 제안 — 채택하지 않음

아래는 과거 대안 기록이다. 이후 사용자 결정은 Cloudflare Web Analytics/RUM 유지 + GA4 추가이며, 아래 RUM 중단/전환 제안은 현재 개발 요구사항이 아니다.

- 사용자 질문에 대한 권고안이며 GA4 활성화나 Cloudflare 설정 변경 승인이 아니다. 방문·유입·스토어 연결 클릭은 GA4로, 사이트 제공·보안·오류 대응용 요청/실행 지표는 Cloudflare로 역할을 나눈다.
- Cloudflare Web Analytics/RUM 자동 삽입은 별도로 Disable할 수 있다. 이 조작은 DNS, Workers 호스팅, 보안, Email Routing을 중지하는 조작과 구분한다. 수동 삽입 스크립트가 있으면 별도 제거 확인이 필요하다.
- 동의한 이용자만 수집하는 현재 GA4 설계에서는 거절자·미응답자 및 차단 도구 사용자의 방문이 누락될 수 있다. GA4 수치를 전체 실제 방문자 수로 표현하지 않고, Cloudflare의 서버 요청 수와도 동일시하지 않는다. RUM 기반 실제 방문자의 성능 통계도 함께 중단되므로 GA4가 그 기능까지 그대로 대체한다고 설명하지 않는다.
- 정책 영향: 실제 RUM 중단 확인 후 현재 2조의 Cloudflare 방문·성능 통계/EU 자동 삽입 제외, 4조의 별도 Cloudflare 방문·성능 통계 운영, 6조의 Cloudflare 방문·성능 통계 목적을 조정한다. 7조의 최근 6개월 조회 설명은 과거 통계 보존 여부를 확인해 조정하며, 수집 중단이 기존 통계 즉시 삭제를 뜻하지는 않는다. Workers 실행 로그, 사이트 제공·보안, 이메일 전달 관련 설명은 유지한다.
- GA4 자체도 국외 처리 검토 대상이며 Cloudflare의 호스팅·보안·이메일 전달도 남는다. 분석 도구 일원화는 운영과 문구를 단순화하지만 국외 이전 고지 문제를 없애지는 않는다.
- 추가 공개 자료: Cloudflare는 한국 개인정보보호법 FAQ 및 Self-Serve 약관에 DPA 연결을 안내한다. 다만 Self-Serve 조항의 개인정보 정의와 한국 방문자 데이터에 대한 적용 범위를 함께 봐야 하므로, 유료 기업 계약을 새로 체결해야 한다거나 반대로 이 웹사이트의 모든 국외 이전 요건이 자동 충족된다고 단정하지 않는다. Cloudflare 자체 웹사이트/고객 계정용 한국 부록과 고객 웹사이트 방문자 데이터도 구분한다.
- 전환 순서 권고: 정책/동의 고지 확정 및 GA4 실제 연결 검증 → 별도 승인으로 RUM 중단 및 운영 GA4 활성화 → 두 도구의 실제 요청과 정책 문구를 대조. 현재 어느 쪽도 설정 변경하지 않았다.

추가 근거:

- [Cloudflare Web Analytics의 Disable 설정](https://developers.cloudflare.com/web-analytics/get-started/)
- [Cloudflare의 브라우저 분석과 edge 요청 분석 구분](https://developers.cloudflare.com/web-analytics/faq/)
- [Google 기본 동의 모드의 전송 제한](https://support.google.com/analytics/answer/10000067?hl=en)
- [Cloudflare 한국 개인정보보호법 FAQ](https://www.cloudflare.com/trust-hub/south-korea-pipa/)
- [Cloudflare Self-Serve 약관](https://www.cloudflare.com/terms/)
- [Cloudflare 한국 개인정보처리방침 부록](https://www.cloudflare.com/privacypolicy/southkorea-addendum/)

확인 근거:

- [Google Analytics 데이터 보호 — IP 주소 처리 및 저장 구분](https://support.google.com/analytics/answer/6004245?hl=ko)
- [Google의 데이터 보관·삭제 안내](https://policies.google.com/technologies/retention?hl=ko)
- [Google 한국 서비스 약관](https://policies.google.com/terms?hl=ko&gl=kr)
- [Google 개인정보처리방침](https://policies.google.com/privacy?hl=ko)
- [Google 분석 제품의 국제 데이터 전송 안내](https://business.safety.google/adsdatatransfers/)
- [Cloudflare 개인정보처리방침](https://www.cloudflare.com/privacypolicy/)
- [개인정보 보호법 제28조의8 제2항](https://www.law.go.kr/LSW/lsLinkCommonInfo.do?lsJoLnkSeq=1033215841)

## 상태

- 로컬 구현/자체검증 결과입니다. 운영 GA4 수신 QA 또는 법률 검토 완료 보고서가 아닙니다.
- commit, push, Cloudflare 배포, GA4 활성화, Google 콘솔 변경 없음.
- 최종 정책과 실제 연결 검증 계획 승인 전에는 수집을 켜지 않습니다.
- 기존 앱별 정책 데이터 및 Happy Pick 소개/다운로드 UI는 작업 시작 시점과 동일합니다. content 디렉터리 비교에서 website-privacy.ts만 변경되었고, happypick-preview.tsx는 시작본과 바이트 단위로 동일합니다.
- 오늘의 식판 기존 로컬 변경과 design-mockups는 유지했습니다. 이번에는 게임 페이지 푸터만 공통 컴포넌트로 교체했습니다.

## 이번 변경 파일

| 파일 | 변경 |
| --- | --- |
| components/site-footer.tsx | 일반/앱/게임 공통 푸터, 제품별 문의/정책, 웹 정책/설정, 공통 연도 |
| components/site-analytics.tsx | 별도 하단 메뉴 제거, 푸터에서 설정 열기, 한/영 안내, 비활성 시 철회 지원, hydration 전 배너 깜빡임 방지 |
| lib/site-release.ts | 정책 공개와 분석 활성화의 독립 승인, 공통 연도; 두 승인 false |
| lib/site-analytics.ts | 독립 승인 연결, 만료 선택 정리, 최초 선택 기한에 맞춘 쿠키 수명, 실행 중 저장소 오류 시 중단 |
| content/website-privacy.ts | Workers 로그 3일 / Web Analytics 최근 6개월 조회 / EU 자동 삽입 제외, 설정 용어, 클릭과 설치/구매 구분 |
| app/(ko)/privacy/page.tsx | 독립 정책 접근 제어, canonical/description, 검토 메모는 개발 미리보기에서만 노출 |
| app/(ko)/apps/[appSlug]/page.tsx | 앱 소개 하단을 공통 푸터로 교체 |
| app/(ko)/games/todays-tray/page.tsx | 게임 소개 하단을 공통 푸터로 교체; 기존 미배포 히어로와 같은 파일이므로 향후 선택적 반영 필요 |
| components/privacy-policy-page.tsx | 본문/돌아가기 유지, 공통 푸터 추가; 기존 오늘의 식판 메타데이터 수정과 구분 필요 |
| .env.example | 정책/분석의 독립 환경변수 안내 |
| tests/site-analytics.test.mjs | 기존 16개에 6개 추가, 총 22개 |
| tests/register-typescript.mjs | Node 24 테스트의 확장자 없는 TS import resolver |
| docs/private의 작업일지/단계현황/이 문서 | 실제 수행 결과와 보류 사항 |

기존 검토본의 layout 연결, 다운로드 data 속성, CSP/캐시 디렉터리, .gitignore/ESLint/tsconfig 변경은 이번 턴에 새로 만든 것이 아닙니다. 향후 candidate에는 필요한 GA4 기반 변경만 포함하며 현재 dirty tree 전체를 배포하면 안 됩니다. next-env.d.ts는 개발/빌드가 자동 갱신하는 파일입니다.

## 제어와 정책

- NEXT_PUBLIC_WEBSITE_PRIVACY_MODE: hidden / preview / published. published에는 WEBSITE_PRIVACY_APPROVED가 필요합니다.
- NEXT_PUBLIC_SITE_ANALYTICS_MODE: disabled / preview / live. live에는 ANALYTICS_ACTIVATION_APPROVED와 published 정책이 모두 필요합니다.
- 정책 승인만으로 GA4가 켜지지 않습니다. 수집 disabled와 published 정책을 함께 사용할 수 있습니다.
- preview는 development에서만 허용합니다. production에 preview 값을 잘못 넣어도 미승인 초안/검토 UI를 공개하지 않습니다.
- 앱/게임/웹 정책은 GA4 허용 페이지 밖에 있습니다. 로컬/미리보기 호스트의 전송 차단을 해제하지 않았습니다.
- 문의 보관은 접수일부터 최대 1년 이내 삭제 + 법정 보관 예외 유지. 관리자/자동 삭제 기능 없음.
- 미확정 국외 이전 고지는 확정하지 않았습니다. publicationChecks는 여전히 게시 전 검토 대상입니다.

## 검증 결과

| 항목 | 결과와 증거 수준 |
| --- | --- |
| 로직 | node --import ./tests/register-typescript.mjs --test tests/site-analytics.test.mjs: 22/22 통과. 모의 Window/Document/타이머, 실제 SDK 수신 아님 |
| 동의 전/거절/preview/허용 외 호스트 | 모의 테스트에서 Google script 및 이벤트 큐 생성 없음 |
| 허용 URL/UTM/클릭 필드/중복 | 모의 큐 검사 통과. 원본 query/fragment, 임의 product/store/placement 제외 및 page_view 중복 방지 |
| 철회/만료/저장소 실패/탭 선택/정책 진입 | 모의 테스트에서 중단, 대기 이벤트 폐기, 자사 쿠키 삭제 명령 검사 통과 |
| 60일 | 최초 savedAt 유지, 만료 레코드 정리, 늦은 SDK 시작에도 최초 기한까지만 cookie_expires 부여 |
| 정적 검사 | npm run lint, npx tsc --noEmit, npm run build, git diff --check 통과 |
| Chrome 375×812 | Happy Pick 푸터/동의창 캡처 검토, scrollWidth=375, 제품/웹 정책 링크 구분 |
| Chrome 360×800 | 댕픽 영문 정책/오늘의 식판 scrollWidth=360, 푸터 각각 1개, 영문 lang=en |
| Chrome 1440×900 | 홈/Happy Pick 푸터 캡처 검토, 홈은 제품 전용 줄 생략 |
| 로컬 UI | 거절 후 새로고침 유지, 설정 재열기/동의, 영문 설정/철회, 정책 이동 확인 |
| disabled + policy preview | 별도 3005 서버에서 /privacy 200 및 본문, 수집 비활성 안내 동시 확인 후 서버 종료 |
| 정책 메타/태그 | /privacy canonical=https://chamyworks.com/privacy, Google script 미삽입 확인 |
| 콘솔 | 확인한 탭에서 앱 오류 없음. 편집 중 Fast Refresh 전체 새로고침 경고는 개발 도구 안내로 구분 |

Node 테스트에는 MODULE_TYPELESS_PACKAGE_JSON 경고가 있지만 실패는 없습니다. 경고 제거를 위해 저장소 module 설정을 바꾸지 않았습니다.

## 미확인 사항

- 실제 Google 요청 payload, 실제 GA 쿠키 생성/삭제/만료, DebugView/Realtime 수신 및 맞춤 보고서 반영.
- 실제 SDK 지연 로딩 중 철회, SDK 자동 세션/참여 이벤트, 탭 변경 직후 중단, 정책 이동의 네트워크 경계.
- 실제 모바일 Safari 동의/저장소 동작. 모바일 화면 검증은 Chrome 뷰포트입니다.
- 최종 정책/국외 이전 고지 및 시행일 승인. Cloudflare 문구는 사용자와 기존 기획 기록의 확인사항 반영이며 관리 콘솔 재감사는 아닙니다.
- 기존 측정 ID/맞춤 측정기준/주요 이벤트는 재생성하거나 변경하지 않았습니다.

## 실제 연결 검증 제안 — 승인 전 미실행

권장: 최종 정책 승인 후 접근 제한된 별도 HTTPS 검증 호스트에서 승인된 검증자만 기존 속성 G-67MZ84CVTY로 최소 이벤트를 보냅니다. 일반 방문자의 운영 수집은 계속 disabled로 둡니다.

1. 검증 호스트/참여자/시간, 전송 정보와 기존 속성의 테스트 데이터 유입을 승인받습니다. 새 GA 속성/스트림/측정기준은 만들지 않습니다.
2. 승인 후 별도 검증 빌드에서 정확한 호스트 하나만 허용합니다. 운영 hostname 제한을 전역 해제하거나 임의 preview 도메인을 허용하지 않습니다. 접근 제한/DNS/검증 배포도 별도 승인 작업입니다.
3. 검증용 선택 키와 호스트 전용 쿠키를 사용합니다. 현재 cookie_domain=chamyworks.com을 그대로 써서 운영 쿠키와 공유하지 않도록 해야 합니다. 이 검증 전용 변경은 아직 구현하지 않았습니다.
4. 테스트 이벤트만 debug_mode로 표시해 DebugView에서 확인합니다. 이것만으로 일반 보고서에서 자동 제외되는 것은 아니므로 개발자 트래픽 필터 상태를 읽기 전용 확인하고, 필요한 설정 변경은 별도 승인받습니다.
5. 네트워크/쿠키를 동의 전 → 거절 → 동의 → page_view 1회 → 스토어별 클릭 1회 → 철회 순서로 검사합니다. 만료/탭 변경/저장소 실패/정책 이동/SDK 지연도 확인합니다. 민감한 실정보 대신 합성 테스트 값으로 허용 외 URL 정보 제외를 검사합니다.
6. Google 수신의 product/store/placement와 이벤트 수/중복을 대조합니다. 클릭은 설치/구매가 아니며 DebugView 수신과 일반 보고서 반영을 구분합니다.
7. 종료 시 동의 철회, 검증 태그 비활성화 및 전용 빌드 폐기. 별도 호스트 성공을 운영 연결 확인으로 보고하지 않습니다. 운영 배포 승인 후 실제 hostname/CSP/쿠키의 추가 확인이 필요합니다.
8. 중단/롤백 시 분석만 disabled로 바꾸고 승인 정책은 published로 유지합니다.

계획 승인 전 검증 호스트 생성, 접근권한 설정, 호스트 예외 코드 또는 실제 Google 전송을 실행하지 않습니다.

근거: [Google GA4 설정](https://developers.google.com/analytics/devguides/collection/ga4/reference/config), [Google DebugView](https://support.google.com/analytics/answer/7201382?hl=en).

## 로컬 확인

- http://127.0.0.1:3004/
- http://127.0.0.1:3004/apps/happypick
- http://127.0.0.1:3004/privacy
- 동의해도 Google로 전송하지 않으며 live와 분리된 preview 선택 키를 사용합니다.
