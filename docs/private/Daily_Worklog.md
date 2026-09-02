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
