# Daily Worklog

차미웍스 사이트에서 완료된 작업을 날짜별로 기록합니다.

## 작성 원칙

- 작업이 끝난 뒤 실제로 완료한 내용만 기록합니다.
- 예정 작업, 검토 중인 아이디어, 실행하지 않은 명령은 기록하지 않습니다.
- 변경 파일, 검증 결과, 커밋 및 배포 여부를 사실대로 구분합니다.
- 테스트나 빌드를 실행하지 못한 경우에는 통과로 표시하지 않고 `미실행`으로 기록합니다.
- 운영 배포는 로컬 확인과 사용자 컨펌 후 진행하며, 성공이 확인된 경우에만 `배포 완료`로 기록합니다.
- 기존 기록은 삭제하거나 덮어쓰지 않고 날짜별 항목을 아래에 추가합니다.
- 정책이나 문구의 이전 버전은 별도 복사본을 만들지 않고 Git 이력으로 보존합니다.

## 기록 형식

```md
## YYYY-MM-DD

### 작업

- 실제 완료한 작업

### 변경 파일

- `path/to/file`

### 검증

- 실행한 검증과 실제 결과

### 반영 상태

- 로컬: 완료/미완료
- 커밋: SHA 또는 미실행
- 운영 배포: 배포 식별자 또는 미실행
```

## 2026-08-20

### 작업

- 차미웍스 사이트의 비공개 작업 기록 문서와 프로젝트 단계 현황 문서를 추가했습니다.
- 완료된 사실만 기록하고 로컬 확인 후 사용자 컨펌을 거쳐 배포하는 갱신 원칙을 문서화했습니다.

### 변경 파일

- `docs/private/Daily_Worklog.md`
- `docs/private/Project_Phase_Status.md`

### 검증

- 문서 파일만 변경 대상인지 확인했습니다.

### 반영 상태

- 로컬: 완료
- 커밋: 미실행
- 운영 배포: 미실행

## 2026-09-02

### 작업

- 오늘의 식판 iOS 출시용 게임 소개 및 고객지원 페이지를 `/games/todays-tray` 경로에 추가했습니다.
- 오늘의 식판 개인정보처리방침 12개 항목을 `/games/todays-tray/privacy` 경로에 추가했습니다.
- 오늘의 식판 저장소의 기존 대표 이미지와 실제 게임 화면을 차미웍스 사이트용 정적 에셋으로 복사해 소개 페이지에 적용했습니다.
- 기존 앱 개인정보처리방침 동작은 유지하면서 게임 경로, 소제목, 외부 링크를 지원하도록 공통 렌더러를 확장했습니다.
- Happy Pick에 선택형 Google Play URL을 추가하고 Android 출시 다운로드 영역을 적용했습니다.
- 모바일에는 App Store와 Google Play 공식 배지를 나란히 표시하고, 데스크톱에는 각 스토어 QR과 이름을 함께 표시했습니다.
- 서로 다른 공식 배지 비율은 유지하면서 동일한 너비의 정렬 영역에 배치해 시각적 균형을 맞췄습니다.

### 변경 파일

- `app/(ko)/games/todays-tray/page.tsx`
- `app/(ko)/games/todays-tray/privacy/page.tsx`
- `components/todays-tray-preview.tsx`
- `components/privacy-policy-page.tsx`
- `components/happypick-preview.tsx`
- `content/todays-tray.ts`
- `content/apps.ts`
- `app/(ko)/apps/[appSlug]/page.tsx`
- `public/apps/happypick/google-play-badge-ko.png`
- `public/apps/happypick/google-play-qr.png`
- `public/games/todays-tray/og.jpg`
- `public/games/todays-tray/screenshot-home.png`
- `public/games/todays-tray/screenshot-gameplay.png`
- `public/games/todays-tray/screenshot-special.png`
- `docs/private/Daily_Worklog.md`
- `docs/private/Project_Phase_Status.md`

### 검증

- `npm run lint` 통과
- `npm run build` 통과
- 소개 및 개인정보처리방침 경로가 정적 페이지로 생성되는 것을 확인했습니다.
- 로컬에서 두 경로 모두 HTTP 200을 반환하는 것을 확인했습니다.
- 390px 모바일 화면에서 가로 스크롤이 없고 개인정보처리방침 1~12번이 모두 표시되는 것을 확인했습니다.
- 소개 페이지 슬라이더, 문의 이메일, 개인정보처리방침 링크와 외부 정책 링크 동작을 확인했습니다.
- 제목, description, canonical URL 및 한국어 `html lang="ko"`를 확인했습니다.
- Happy Pick 다운로드 영역을 375px 모바일, 1280px 데스크톱 및 모바일 다크 모드에서 확인했습니다.
- 375px에서 두 공식 스토어 배지가 같은 40px 높이로 표시되고 가로 스크롤이 없는 것을 확인했습니다.
- App Store와 Google Play 링크의 URL, 새 창 열기, 접근성 이름과 데스크톱 QR 표시를 확인했습니다.
- Cloudflare 배포 후 Happy Pick, 오늘의 식판 소개 및 오늘의 식판 개인정보처리방침 운영 URL이 모두 HTTP 200을 반환하는 것을 확인했습니다.
- 운영 Happy Pick 페이지에서 Google Play 링크와 다운로드 안내 문구가 표시되는 것을 확인했습니다.

### 반영 상태

- 로컬: 완료
- 커밋: `4f6341b`
- 운영 배포: Cloudflare Version ID `869d10ee-851d-4c07-a169-64e7b099c085`

### 오늘의 식판 출시 페이지 보정

#### 작업

- 오늘의 식판 최종 정사각형 앱 아이콘을 사이트 에셋으로 추가하고, 소개 화면의 앱 아이콘과 공유용 OG 이미지를 서로 다른 필드로 분리했습니다.
- 모바일과 데스크톱 제목 영역에 정사각형 앱 아이콘을 적용하고, 기존 16:9 이미지는 대표 이미지와 Open Graph/Twitter 메타데이터 용도로 유지했습니다.
- 소개 페이지의 이메일 주소 노출을 `문의하기` 링크로 바꾸고 요청된 제목과 기본 본문을 포함한 `mailto` 링크를 적용했습니다.
- App Store 공개 URL이 없는 동안 `Coming Soon` 또는 빈 다운로드 버튼이 노출되지 않도록 제거했습니다.
- 개인정보처리방침 상단에 `정책 버전: v1.0`을 추가하고, 시행일은 실제 출시일이 확정될 때까지 표시하지 않도록 선택형으로 구성했습니다.
- 개인정보처리방침 본문은 유지하면서 외부 정책 링크의 새 창 열기와 `noopener noreferrer` 속성을 확인했습니다.
- 오늘의 식판 저장소에는 네이티브 iOS, Game Center, AdMob, UMP 및 문의 메일 구현 코드가 없어 개인정보처리방침과 실제 앱 구현의 최종 일치 여부는 앱 출시 빌드에서 별도 확인이 필요함을 기록했습니다.

#### 변경 파일

- `app/(ko)/games/todays-tray/page.tsx`
- `app/(ko)/games/todays-tray/privacy/page.tsx`
- `components/privacy-policy-page.tsx`
- `components/todays-tray-preview.tsx`
- `content/apps.ts`
- `content/todays-tray.ts`
- `public/games/todays-tray/icon.png`
- `docs/private/Daily_Worklog.md`
- `docs/private/Project_Phase_Status.md`

#### 검증

- `npm run lint` 통과
- `npm run build` 통과
- 프로덕션 모드 로컬 서버에서 소개 및 개인정보처리방침 경로가 HTTP 200을 반환하는 것을 확인했습니다.
- 360x800, 390x844, 1280px 데스크톱 및 다크 모드에서 가로 스크롤, 깨진 이미지와 콘솔 오류가 없는 것을 확인했습니다.
- 소개 페이지의 정사각형 아이콘, 16:9 대표 이미지, Open Graph/Twitter 이미지가 각각 의도한 에셋을 사용하는 것을 확인했습니다.
- `문의하기` mailto 제목과 기본 본문, 개인정보처리방침 링크, 외부 정책 링크를 확인했습니다.
- 개인정보처리방침의 버전, 최종 수정일, 12개 항목과 문의 주소를 확인했습니다.

#### 반영 상태

- 로컬: 완료
- 커밋: 미실행
- 운영 배포: 미실행, 사용자 로컬 확인 대기

## 2026-09-04

### 작업

- 댕픽 한국어 및 영문 개인정보처리방침의 1·3·4·6·7·8절을 사용자 제공 문구 기준으로 부분 개정했습니다.
- 기기 내부 구매 확인 데이터, iOS 사진 선택기와 저장 권한, 임시 사본 정리 및 재시도, 문의 메일 초안, StoreKit 구매 처리, 문의 보관기간과 Apple 구매 내역 구분을 반영했습니다.
- 기존 URL, 다른 조항 및 다른 앱 정책은 유지했습니다. 정책 날짜는 실제 게시 시 한·영 함께 갱신하도록 기존 표시를 유지했습니다.
- 게임·앱 프로젝트는 수정하지 않았으며, 이전 오늘의 식판 로컬 변경과 design-mockups/는 그대로 두었습니다.

### 변경 파일

- `content/apps.ts`
- `content/daengpick-policy-en.ts`
- `docs/private/Daily_Worklog.md`
- `docs/private/Project_Phase_Status.md`

### 검증

- 한·영 각각 11개 절을 유지하며 변경 절이 1·3·4·6·7·8뿐임을 정책 객체 비교로 확인했습니다.
- 나머지 조항, 기존 사진·편집·설정 목록, JPEG·EXIF/GPS 설명 및 Happy Pick 정책 데이터의 보존을 확인했습니다.
- 한·영 문구의 의미를 대조했습니다.
- lint 및 production build 통과, 로컬 두 URL HTTP 200 확인.
- 한·영 언어 전환, html lang 및 canonical/hreflang을 확인했습니다.
- 390px에서 한·영 가로 스크롤 없음. 360px 영문은 기존 11절의 긴 정책 URL 때문에 scrollWidth 378px으로 넘침이 있으며, 이번 문구 변경 범위 밖으로 수정하지 않았습니다. 추가된 문구의 넘침은 발견되지 않았습니다.

### 게시 전 남은 사항

- 한·영 정책 날짜는 후속 요청에 따라 개정일인 2026년 9월 4일로 갱신 완료. 앱 출시 예정일과 별도로 관리합니다.
- 문의 전달·보관의 공통 고지를 차미웍스 정책 검토 결과와 대조. 이번 작업에서는 관련 고지가 불필요하다고 결론 내리지 않았습니다.
- 임시파일 처리의 실기기 검증은 앱 QA에서 별도 진행. 이 작업은 사용자가 확인한 구현 기준의 정책 문구 반영이며 실기기 검증 완료를 의미하지 않습니다.

### 반영 상태

- 로컬: 검토본 준비 완료
- 커밋·push: 미실행
- 운영 배포: 미실행, 사용자 확인 대기

### 댕픽 정책 마무리 수정

- 한·영 11절의 중복 정책 주소 라벨과 URL만 삭제하고 서비스명·개발자·문의 이메일을 유지했습니다. 라우트와 연결 URL은 변경하지 않았습니다.
- 한·영 최종 수정일을 각각 `2026년 9월 4일`, `September 4, 2026`으로 변경했습니다.
- 영문 1절을 `Whether you have acknowledged certain feature tips`로 수정했습니다.
- 직전 로컬 검토본과 파일 전체를 비교해 위 세 가지 외에 본문 변경이 없음을 확인했습니다.
- lint, production build, diff check 통과. 360px 한·영 화면에서 새 날짜, 11절과 영문 표현을 확인했고 기존 중복 URL에 따른 영문 가로 넘침이 해소됐습니다.
- 로컬 3003 서버에 반영했습니다. 커밋·push·운영 배포는 진행하지 않았습니다.

### 댕픽 정책 운영 배포

- 사용자 승인 후 댕픽 한·영 개인정보처리방침 두 파일만 커밋했습니다: `4157680` (`Update Daeng Pick privacy policies for September 2026`).
- `content/apps.ts`의 오늘의 식판용 타입 변경은 스테이징에서 제외했고, 다른 오늘의 식판 로컬 수정과 `design-mockups/`도 커밋·배포에서 제외했습니다.
- 원격 `main`에 push를 완료했습니다.
- 커밋만 별도 폴더에 추출하고 전체 추적 파일 57개가 커밋과 일치함을 해시로 확인했습니다.
- 처음에는 의존성 심볼릭 링크로 인해 Cloudflare 번들 생성이 실패했습니다. 배포 폴더에서 `npm ci`로 lockfile 기준 의존성을 독립 설치한 뒤 OpenNext production build가 통과했습니다. 저장소의 의존성이나 빌드 설정은 변경하지 않았습니다.
- Cloudflare 운영 배포 완료: Version ID `8740aae6-5b20-4749-9c2c-424eb5fd5c9a`.
- 운영 한·영 URL의 HTTPS 200, 2026-09-04 개정일, 승인 문구, 11절 중복 주소 삭제, 11개 절, 언어 전환, canonical/hreflang, html lang 및 360px 가로 넘침 없음을 확인했습니다.
- 문의 전달·보관의 공통 고지는 이번에 확정하거나 추가하지 않았으며, 앱 임시파일 처리의 실기기 검증은 별도 QA 범위로 유지합니다.

### 웹사이트 GA4 최소 구성 및 동의 화면 미리보기

- 사용자 승인에 따라 GA4 사용자·이벤트 보관을 각각 2개월로 설정하고 새 활동 시 보관기간 갱신을 껐습니다. 세부 위치/기기 수집 off, 광고 개인화 허용 지역 0/307을 콘솔에서 확인했습니다. Signals/사용자 제공 데이터는 활성화하지 않았습니다.
- 페이지 조회·허용된 UTM·Happy Pick 스토어 버튼 클릭 코드와 한·영 동의/거절/변경 UI를 로컬에 준비했습니다. 전체 URL 쿼리·fragment·문의 본문은 분석 이벤트에 넣지 않습니다. 실제 앱 설치나 QR 촬영은 측정하지 않습니다.
- 기본 모드는 disabled이고, preview는 Google script를 삽입하지 않습니다. 미리보기의 동의 저장 키를 실운영과 분리했습니다. 정책 준비 상태가 false여서 live 환경변수만으로는 활성화되지 않습니다.
- 동의 전 미실행, 철회 시 disable/대기 이벤트 제거/해당 GA 쿠키 삭제, 만료 검사, 법적 안내 페이지 진입 시 SDK 중단과 문서 재로딩을 구현했습니다. 실제 Google SDK의 네트워크/쿠키 동작은 활성화 전 별도 검증 대상입니다.
- 웹사이트 방침은 `/privacy`의 preview 전용 한국어 초안으로 작성했습니다. 메일 전달은 Cloudflare, 수신·보관은 Google 이메일 서비스로 표기하고 개인 Gmail 주소나 계정 종류는 공개하지 않았습니다. 미확인 계약/국외 이전/로그 보관/책임자/시행일을 확정된 사실처럼 쓰지 않았습니다. 기존 앱 정책 본문은 수정하지 않았습니다.
- 로직 테스트 16개, lint 및 기본 production build 통과. 브라우저에서 거절 상태 새로고침 유지, 설정 변경, 한·영 문구와 390px 가로 넘침 없음, preview 동의 후 Google script 없음 확인.
- 초기 별도 서버 부팅은 기존 개발 서버 lock 충돌로 실패했습니다. preview 빌드 경로를 분리하고 표준 Next 개발 명령으로 실행한 뒤 정상 렌더링을 확인했습니다. 로컬 포트 바인딩은 승인된 실행으로 진행했습니다.
- Next가 별도 preview 타입 경로를 tsconfig에 추가했습니다. 배포 기본 타입 경로는 기본 build로 복원하며, 테스트 생성물 tsbuildinfo는 Git에서 제외합니다.
- 기획 판단 재요청: 필요 — 정책 초안의 게시 전 확인 항목을 해결하고 동의 UI/최종 문구 사용자 검토 필요. 생성된 정책은 법률 적합성 보증 또는 게시 완료 산출물이 아닙니다.
- 운영 반영: GA4 콘솔의 승인된 최소 설정만 저장. 사이트 commit/push/deploy 및 방문자 GA4 수집은 미실행.
- 참고: [Google 동의 구현](https://developers.google.com/tag-platform/security/guides/consent), [Google 수집 중단](https://developers.google.com/tag-platform/security/guides/privacy), [GA4 보관기간](https://support.google.com/analytics/answer/7667196?hl=ko), [Cloudflare 메일 라우팅](https://developers.cloudflare.com/email-service/configuration/email-routing-addresses/).

### 웹사이트 방침 문구 및 형식 정리

- 사용자 요청에 따라 적용 범위의 개별 제품명 나열을 ‘차미웍스가 제공하는 개별 앱·게임’으로 변경했습니다. 신규 제품 출시만으로 목록을 갱신할 필요는 없으며, 처리 방식 변경 시 정책을 검토합니다.
- GA4 본문을 도입 예정이 아닌 적용 시점 기준의 현재형으로 정리했습니다. 이는 정책 표현 변경이며 실제 운영 수집·배포 완료를 뜻하지 않습니다. readiness=false 및 preview 전용 정책 경로는 유지했습니다.
- 기존 댕픽 정책 소스에 맞춰 문의 항목, 문의 최대 1년 보관 문장, 개인정보 보호·변경·문의 절과 제목·수정일·본문 간격을 통일했습니다. 기존 앱 정책 본문은 수정하지 않았습니다.
- 국외 이전 상세 고지, 계약·로그 보관 확인 등 미완료 항목은 본문 밖의 접이식 게시 전 검토 안내로 분리했습니다. 개인 Gmail 계정 종류는 정책 본문에 넣지 않았습니다. 문의 메일 삭제는 여전히 운영자의 별도 관리 대상이며 자동 삭제를 구현한 것은 아닙니다.
- 기본 빌드가 `.next` 하위의 preview 캐시까지 정리하여 미리보기 500 오류가 발생했습니다. preview 경로를 형제 디렉터리 `.next-analytics-preview`로 바꾸고 전용 서버만 재시작했습니다. 이후 기본 빌드와 미리보기 새로고침을 함께 검증했습니다.
- 분리된 생성물이 lint 대상에 포함된 오류를 확인하여 기존 빌드 산출물과 같이 ESLint 제외 경로에 추가한 뒤 재검증했습니다.
- 검증: 분석 로직 16개 테스트, lint, TypeScript, production build 및 diff check 통과. 브라우저에서 11개 절, 예정 문구 제거, 390px 가로 넘침 없음, Google script 미삽입 및 빌드 후 정상 갱신을 확인했습니다.
- 운영 반영: 없음. commit/push/deploy 및 GA4 활성화 미실행. 국외 이전 등 게시 전 확인사항은 계속 열려 있습니다.

### 웹사이트 푸터 · 정책 공개/수집 분리 구현

#### 후속: Cloudflare 유지 및 GA4 연결 준비 점검

- 기존 런타임/UI/정책/Cloudflare 설정을 유지하며 로컬 점검했습니다. 측정 ID/속성/스트림/맞춤 측정기준 재생성, 통계 수 통합 작업 없음.
- Cloudflare beacon/보안 쿠키 미변경, 스토어/위치 6개 조합, 정책 직접 방문 제외, 7조와 상단 UI 유지 회귀 테스트를 추가했습니다. 총 28개 테스트/lint/타입/build/diff check 통과.
- 로컬 /privacy에서 정책 안내 제거 상태와 동의/철회 UI, Google script 미삽입을 확인했습니다. 실제 Google 요청/쿠키/수신은 확인하지 않았습니다.
- GA4_Connection_Verification_Approval.md에 qa-analytics.chamyworks.com 후보, 운영자 1명/이메일 OTP, 전송 범위, 대체 주소 차단 및 종료 절차를 제안했습니다. 환경 생성이나 접근권한 변경은 하지 않았습니다.
- 기획 확정 정책/동의 문구와 실연결 계획 승인 대기. commit/push/배포/운영 수집 활성화 없음. 사본/백업 문구 추가 없음.

#### 후속: 정책 상단 검토 안내 제거

- 요청에 따라 /privacy 상단 검토용 미리보기 안내와 게시 전 확인사항 영역만 제거했습니다. 제목/날짜/정책 본문과 공통 내비게이션/푸터는 유지했습니다.
- 공개 콘텐츠 데이터의 확인사항 목록은 내부 Web_Analytics_Implementation_QA_2026-09-04.md로 이관했습니다. 미확인 항목은 해결 처리하지 않았습니다.
- 로컬 브라우저 새로고침 후 두 안내 문구 없음과 제목/날짜 유지 확인, 변경 소스 ESLint 및 diff check 통과. 승인 플래그/GA4 설정 변경 및 commit/push/배포 없음.

- 공통 푸터를 일반/앱/게임용으로 통합하고 방문 통계 수집 설정 용어, 제품별 문의/정책 및 공통 연도를 반영했습니다. 기존 앱 소개/다운로드 UI와 앱별 정책 데이터는 수정하지 않았습니다.
- 정책 공개와 GA4 활성화를 독립 승인/환경변수로 분리했습니다. 두 승인 false, production preview 비노출입니다. GA4 disabled 로컬 서버에서도 정책이 열리는 것을 확인했습니다.
- 웹 정책에 Workers 실행 로그 3일, Web Analytics 최근 6개월 조회, EU 자동 삽입 제외를 구분 반영했습니다. 문의 보관 문구 유지, 미확정 국외 이전 고지 미확정 상태 유지.
- 최초 동의 기한 기준 쿠키 수명, 만료 선택 정리, 실행 중 저장소 실패/철회 중단을 보강했습니다.
- 로직 22개 테스트/lint/TypeScript/production build/diff check 통과. Chrome 360/375px 및 1440px에서 푸터/정책/동의 동선을 확인했습니다. 실제 Google 요청/쿠키/수신은 미검증입니다.
- 상세 결과와 접근 제한된 HTTPS 검증 호스트 승인안을 Web_Analytics_Implementation_QA_2026-09-04.md에 기록했습니다. 로컬 서버 127.0.0.1:3004는 preview, 임시 disabled 검증 서버 3005는 종료했습니다.
- commit/push/배포/활성화/콘솔 변경 없음. 오늘의 식판 기존 미배포 변경 및 design-mockups는 분리 유지합니다.

### 후속: 웹사이트 정책 3·4·5·6조 문구 로컬 반영

- 변경: `content/website-privacy.ts`, `app/(ko)/privacy/page.tsx`, `tests/website-policy.test.mjs` 및 비공개 작업 기록 2개.
- 요청한 IP 처리 안내, GA4에만 적용되는 동의 선택, 문의 이메일 설명, 외부 서비스 표와 공식 정책 링크를 반영했습니다. 표/링크 렌더링만 추가하고 주변 디자인·푸터는 유지했습니다.
- 수정 전 로컬 데이터와 구조 비교로 7조와 다른 조항, 3·4·5조의 유지 대상 문단이 동일함을 확인했습니다.
- 정책/분석 테스트 총 30개, lint, TypeScript, production build, diff check 통과. 인앱 브라우저 360px에서 본문 scrollWidth 360px, 표 320px로 가로 넘침 없음과 렌더링 확인. 공식 링크 2개 HTTP 200 및 새 탭/noopener noreferrer 확인.
- Cloudflare 설정·GA4 로직·승인 플래그·앱별 정책은 수정하지 않았습니다. 실제 Google 분석 전송·GA4 수신은 검증하지 않았습니다. 외부 공식 정책 URL 응답 확인은 GA4 실연결 검증이 아닙니다.
- 로컬 확인 URL: http://127.0.0.1:3004/privacy. commit/push/배포/GA4 활성화 없음. 최종 정책 및 실제 연결 검증 승인은 별도입니다.

### 후속: GA4 검증 전용 비밀번호 보호 환경

- 사용자 지시에 따라 Access 대신 Worker 서버 비밀번호 인증을 구현했습니다. `qa/auth.mjs`, `qa/worker.mjs`, `qa/wrangler.jsonc`, `qa/build.mjs`, `qa/close.mjs`, `tests/qa-auth.test.mjs` 및 내부 기록을 추가/갱신했습니다.
- Cloudflare Workers plans 화면에서 Free / $0 / Current plan 확인. 유료 전환이나 결제 변경 없이 `chamyworks-site-ga4-qa`와 `qa-analytics.chamyworks.com`만 배포했습니다. 최종 검증 환경 버전 `87caca46-02b8-469f-b7c7-ed9c598dcc61`.
- 비밀번호/무작위 서명 키/종료 시각을 Worker secret으로 등록했습니다. 실제 값은 소스·문서·임시 파일에 저장하지 않았습니다. 설정 파일에는 secret 이름만 포함합니다.
- 모든 경로와 정적 자산 인증 선행, 정확한 HTTPS 호스트 제한, 대체 workers.dev/preview 주소 비활성화, no-store, 서명 쿠키와 Origin 검사, 위치별 5회/60초 로그인 제한을 적용했습니다. 로그인 폼의 Referrer-Policy와 Origin 충돌은 strict-origin으로 보정했습니다.
- HEAD + 명시한 GA4/웹 정책 파일로만 별도 복사본을 빌드했습니다. 원본 승인 플래그·운영 Worker·다른 프로젝트·미배포 게임 보정본·design-mockups는 미반영입니다.
- 테스트 36개, lint/타입 검사, Next/OpenNext 분리 빌드, dry-run 통과. 압축 번들 1926.59 KiB. 생성된 런타임 바인딩 타입 확인.
- 실제 HTTPS: 미인증 홈/앱/정책/아이콘/BUILD_ID 401, 인증 후 앱/웹 정책/아이콘/BUILD_ID/세션 스크립트 200. 기본 workers.dev 및 버전 주소 404. Chrome 폼 로그인/화면/콘솔 오류 없음 및 동의 전 Google script 부재 확인.
- Google SDK 전송/분석 쿠키/GA4 DebugView 수신 검증은 미실행입니다. 현재 확인은 인증 및 태그 미삽입 확인이며 실제 수신 성공으로 보고하지 않습니다.
- 종료는 2026-09-04 16:21:47 KST 자동 만료로 설정했고 `node qa/close.mjs`로 조기 종료할 수 있습니다. 실제 만료 후 원격 차단 결과는 아직 확인하지 않았습니다.
- commit/push/운영 배포/운영 GA4 활성화 없음. 검증용 배포만 수행했습니다.

### 후속: GA4 실제 연결 검증 및 조기 종료

- QA 전용 `qa/diagnostics.mjs` 추가, auth/worker에 인증된 진단 스크립트 삽입. 브라우저 내부의 비식별 요청 관찰용이며 운영 소스에는 반영하지 않았습니다. 직렬화 helper 오류를 수정해 검증 후보 `47a42dda-7376-47e3-8c22-91189f90815c`를 사용했습니다.
- 기존 GA4 DebugView에서 page_view와 store_link_click 실제 수신 및 product/store/placement 확인. 동의 전/거절 Google 요청·쿠키 부재, 정책 페이지 제외, 철회 후 새 문서 전송 중단 확인.
- 재동의 시 page_view 2회 시도 중 1회 실패, 철회 순간 Google /td 진단 요청 실패를 관찰했습니다. 실제 중복 수신으로 단정하지 않았으며 운영 활성화는 보류합니다.
- GA4 콘솔 읽기 전용 확인에서 store_link_click 기본 금액 USD 1 발견. 요청했던 기본 금액 없음과 달라 별도 수정 승인 필요. 설정 저장 없음.
- QA_ENDS_AT secret으로 임시 환경 조기 종료. 홈/앱/웹 정책/세션 스크립트 503 확인. 종료 전 브라우저는 거절·GA 쿠키 없음. 종료 후 브라우저 렌더링은 client block으로 미확인.
- 상세 보고서 `GA4_Live_Connection_QA_2026-09-04.md` 작성. 실제 검증과 기존 모의 결과, 미검증 항목을 구분했습니다. QA eslint/인증 테스트 6개/번들 배포 통과. 운영 변경/요금제 변경/commit/push 없음.

### 후속: 승인된 GA4 보정 및 제한 재검증

- components/site-analytics.tsx, lib/site-analytics.ts에서 동의 변경 시 기존 문서를 중단하고 새 문서에서만 재개하도록 보정했습니다. stop 시 SDK consent update 제거, 중단 후 pageView 재시작 차단. tests/site-analytics.test.mjs 회귀 2개 추가.
- GA4 콘솔 store_link_click 기본 주요 이벤트 값을 '설정 안함'으로 저장했고 새 문서에서 재조회 확인했습니다. 속성/스트림/맞춤 측정기준/주요 이벤트 지정 및 집계 방법은 변경하지 않았습니다.
- 테스트 38개/lint/타입/diff check, 분리 Next production/OpenNext build, Wrangler dry-run 통과. 승인된 검증 Worker만 `09283ee8-5751-4f72-99a8-cf1b22733a66` 배포.
- 동의 2회 각각 page_view dispatch 1회, 스토어 클릭 1회. 첫 세션 DebugView 수신과 product/store/placement, value/currency 없음 확인. 철회 순간 Google 진단 요청 미재현, 거절·정책 페이지에서 새 요청 없음 확인. 캐시 재동의의 별도 DebugView 수신 수는 미확정이며 요청 결과와 구분했습니다.
- 종료 전 동의 철회/쿠키 삭제 후 QA 종료 secret 적용. 홈/앱/정책/세션 스크립트 503 확인. 실제 SDK 전체 매트릭스(모바일/탭/만료 등)는 미완료로 남겼습니다.
- 기존 실제 검증 보고서에 재검증 후보·증거·한계 추가. 운영 사이트/다른 프로젝트/정책 문구 미변경, commit/push/운영 배포/운영 GA4 활성화/유료 전환 없음.

## 2026-09-08

### 웹사이트 정책 공개 및 GA4 운영 활성화

#### 작업

- 사용자 승인에 따라 웹사이트 개인정보처리방침 공개 플래그와 GA4 운영 활성화 플래그를 각각 활성화했습니다.
- 승인된 현재 정책 문구는 수정하지 않았습니다.
- 기존 운영 배포와 섞이지 않도록 HEAD에 GA4·웹 정책·공통 푸터 관련 승인 파일만 덮어쓴 분리 후보를 생성해 Cloudflare Worker `chamyworks-site`에 배포했습니다.
- 다른 프로젝트와 `design-mockups/`, 오늘의 식판 로컬 보정본, QA 전용 런타임 및 비공개 문서는 배포 후보에서 제외했습니다.

#### 변경 파일

- `lib/site-release.ts`
- `tests/site-analytics.test.mjs`
- `tests/website-policy.test.mjs`
- `docs/private/Daily_Worklog.md`
- `docs/private/Project_Phase_Status.md`
- `docs/private/GA4_Live_Connection_QA_2026-09-04.md`

#### 검증

- 로직 테스트 39/39, lint, TypeScript, diff check 및 분리 Next/OpenNext production build 통과.
- 운영 `/privacy`, `/apps/happypick`, `/apps/happypick/privacy`, `/apps/happypick/privacy/en` HTTPS 200과 정책 제목·보안 헤더를 확인했습니다.
- 새 동의 상태에서 Google 태그 0개와 GA4 실시간 사용자 0명을 확인했습니다.
- 동의 후 운영 Happy Pick `page_view`와 App Store `store_link_click`이 GA4 실시간 보고서에 각각 1회 수신되는 것을 확인했습니다.
- 철회 후 같은 App Store 링크를 다시 눌러도 `store_link_click`이 1회에서 증가하지 않았습니다.
- 재동의한 Happy Pick 조회로 `page_view`가 2회가 된 뒤 `/privacy`로 이동해도 정책 페이지 제목이 나타나지 않고 `page_view`가 2회로 유지되어 정책 페이지 제외를 확인했습니다.
- commit/push 후 운영 재검증에서 Happy Pick 조회가 추가 수신되고 Google Play 클릭으로 `store_link_click`이 1회에서 2회로 증가했습니다. 철회 후 같은 링크를 다시 눌러도 2회로 유지됐습니다.
- 검증 종료 시 운영자 브라우저의 GA4 동의를 다시 철회했습니다.
- 모바일, 탭 간 변경 및 실제 60일 만료는 요청에 따라 후속 검증으로 남겼습니다.

#### 반영 상태

- 로컬: 완료
- 커밋·push: `3fad19c` (`origin/main`)
- 운영 배포: Cloudflare Version ID `b5ab9bb6-4ace-4971-8eeb-6b33801b22dc`
