import type { ChamyworksApp } from "@/content/apps";

export const todaysTray: ChamyworksApp = {
  slug: "todays-tray",
  name: "Today’s Tray",
  displayName: "오늘의 식판",
  summary:
    "주문 식판을 보고 차례로 나오는 음식을 알맞은 칸에 빠르게 담아 최고 기록에 도전하는 캐주얼 배식 퍼즐 게임",
  icon: {
    src: "/games/todays-tray/og.jpg",
    alt: "오늘의 식판 게임 이미지",
    width: 1200,
    height: 630,
  },
  appStoreUrl: "",
  isPublic: true,
  policy: {
    title: "오늘의 식판 개인정보처리방침",
    titleEn: "Today’s Tray Privacy Policy",
    updatedAt: "2026년 9월 2일",
    updatedLabel: "최종 수정일",
    description:
      "오늘의 식판에서 기기에 저장되는 게임 정보와 Game Center, 광고, 문의 등 외부 서비스 이용 시 처리될 수 있는 정보를 안내합니다.",
    intro: [
      "차미웍스(Chamyworks, 이하 “개발자”)는 이용자의 개인정보를 중요하게 생각하며 관련 법령을 준수합니다.",
      "오늘의 식판(Today’s Tray, 이하 “앱”)은 주문 식판에 맞게 음식을 담아 최고 기록에 도전하는 캐주얼 게임입니다. 앱은 회원가입이나 개발자 서버 기반의 계정 기능을 제공하지 않으며, 게임 진행 정보 대부분은 이용자의 기기에 저장됩니다.",
      "본 개인정보처리방침은 앱에서 처리되는 정보와 그 이용 목적을 안내합니다.",
    ],
    sections: [
      {
        title: "1. 기기에 저장되는 정보",
        paragraphs: [],
        blocks: [
          {
            type: "paragraph",
            text: "앱은 게임 기능 제공을 위해 다음 정보를 이용자의 기기에 저장할 수 있습니다.",
          },
          {
            type: "list",
            items: [
              "최고 완성 그릇 기록",
              "누적 게임 진행 정보",
              "발견한 특식과 수집 진행 정보",
              "튜토리얼 확인 상태",
              "사운드 등 앱 설정",
              "개인정보 동의 화면의 확인 상태",
            ],
          },
          {
            type: "paragraph",
            text: "위 게임 진행 정보는 개발자의 자체 서버로 전송하거나 저장하지 않습니다.",
          },
          {
            type: "paragraph",
            text: "이용자는 앱의 데이터 초기화 기능을 사용하거나 앱을 삭제하여 기기에 저장된 정보를 삭제할 수 있습니다.",
          },
        ],
      },
      {
        title: "2. Game Center 이용",
        paragraphs: [],
        blocks: [
          {
            type: "paragraph",
            text: "이용자가 Apple Game Center를 사용하는 경우 다음 정보가 Apple을 통해 처리될 수 있습니다.",
          },
          {
            type: "list",
            items: [
              "Game Center 플레이어 식별 정보",
              "Game Center 표시 이름",
              "오늘의 식판 최고 점수",
              "리더보드 순위",
            ],
          },
          {
            type: "paragraph",
            text: "앱은 최고 기록을 Game Center 리더보드에 제출하고 이용자의 개인 최고 기록을 조회할 수 있습니다.",
          },
          {
            type: "paragraph",
            text: "Game Center 로그인은 선택 사항이며, 로그인하지 않거나 인증에 실패해도 게임의 기본 기능을 이용할 수 있습니다. Game Center 정보의 저장과 관리는 Apple의 정책 및 이용자 계정 설정에 따릅니다.",
          },
          {
            type: "paragraph",
            text: "Game Center 리더보드에서는 이용자의 Game Center 설정에 따라 표시 이름과 점수가 다른 이용자에게 표시될 수 있습니다.",
          },
        ],
      },
      {
        title: "3. 광고 및 개인정보 동의",
        paragraphs: [],
        blocks: [
          {
            type: "paragraph",
            text: "앱은 전면 광고 제공을 위해 Google AdMob과 Google User Messaging Platform(UMP)을 사용합니다.",
          },
          {
            type: "paragraph",
            text: "Google Mobile Ads SDK는 이용자의 기기, 지역, 동의 상태 및 Google의 정책에 따라 다음 정보를 처리할 수 있습니다.",
          },
          {
            type: "list",
            items: [
              "IP 주소를 기반으로 한 대략적인 위치",
              "기기 및 광고 관련 식별 정보",
              "광고 노출과 상호작용 정보",
              "앱 사용 및 제품 상호작용 정보",
              "충돌, 성능 및 기타 진단 정보",
            ],
          },
          {
            type: "paragraph",
            text: "이 정보는 다음 목적으로 사용될 수 있습니다.",
          },
          {
            type: "list",
            items: [
              "광고 제공",
              "광고 성과 측정",
              "부정 사용과 광고 사기 방지",
              "서비스 안정성 및 성능 분석",
              "관련 법령에 따른 개인정보 선택권 제공",
            ],
          },
          {
            type: "paragraph",
            text: "오늘의 식판 iOS v1.0은 앱 추적 투명성(ATT) 권한을 요청하지 않으며, 개발자 설정상 개인 맞춤 광고와 게시자 자사 식별자 사용을 비활성화합니다.",
          },
          {
            type: "paragraph",
            text: "다만 이러한 설정과 관계없이 Google은 광고 제공, 빈도 제한, 보안, 부정 사용 방지 및 성과 측정을 위해 제한된 기기·네트워크 정보를 처리할 수 있습니다.",
          },
          {
            type: "paragraph",
            text: "관련 지역에서는 UMP를 통해 개인정보 동의 또는 선택 화면이 표시될 수 있습니다. 광고 요청은 필요한 동의 절차가 완료되고 광고 요청이 허용된 경우에만 이루어집니다.",
          },
          {
            type: "paragraph",
            text: "광고가 로드되지 않거나 이용자가 동의하지 않은 경우에도 게임의 기본 기능은 이용할 수 있습니다.",
          },
        ],
      },
      {
        title: "4. 기록 공유",
        paragraphs: [
          "앱은 이용자가 선택한 경우 iOS의 시스템 공유 기능을 통해 최고 기록과 게임 링크를 공유할 수 있습니다.",
          "공유는 이용자가 직접 실행한 경우에만 이루어지며, 공유 내용과 전송 대상은 이용자가 선택한 외부 앱 또는 서비스의 정책에 따라 처리됩니다.",
          "개발자는 시스템 공유 기능을 통해 전송되는 내용을 별도로 수집하거나 저장하지 않습니다.",
        ],
      },
      {
        title: "5. 이메일 문의",
        paragraphs: [],
        blocks: [
          {
            type: "paragraph",
            text: "앱 또는 차미웍스 웹사이트의 문의 기능은 이용자가 선택한 이메일 앱을 열거나 이메일 주소를 안내합니다.",
          },
          {
            type: "paragraph",
            text: "이용자가 이메일을 보내는 경우 다음 정보가 개발자에게 전달될 수 있습니다.",
          },
          {
            type: "list",
            items: [
              "발신자의 이메일 주소와 표시 이름",
              "문의 내용",
              "이용자가 직접 첨부한 파일",
              "앱 버전과 빌드 번호",
              "운영체제 종류와 버전",
              "기기 모델 및 앱 언어 정보",
            ],
          },
          {
            type: "paragraph",
            text: "게임 기록, 광고 식별자, Game Center 플레이어 식별자와 같은 정보는 문의 이메일에 자동으로 첨부하지 않습니다.",
          },
          {
            type: "paragraph",
            text: "이용자는 이메일을 전송하기 전에 내용을 확인하거나 수정할 수 있으며, 문의 기능을 사용하지 않아도 앱의 다른 기능을 이용할 수 있습니다.",
          },
          {
            type: "paragraph",
            text: "문의 관련 정보는 문의 처리와 관련 이력 확인에 필요한 기간 동안 보관하며, 문의 접수일로부터 최대 1년 이내에 삭제합니다. 다만 관련 법령에 따라 보관이 필요한 경우에는 해당 기간 동안 보관할 수 있습니다.",
          },
        ],
      },
      {
        title: "6. 개인정보의 제3자 처리 및 국외 이전 가능성",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "앱은 기능 제공을 위해 다음 외부 서비스를 사용합니다." },
          { type: "subheading", text: "Google AdMob 및 UMP" },
          {
            type: "list",
            items: [
              "제공자: Google LLC",
              "처리 목적: 광고 제공, 동의 관리, 광고 측정, 부정 사용 방지 및 서비스 안정성",
              "처리될 수 있는 정보: 대략적인 위치, 기기·광고 식별 정보, 광고 데이터, 제품 상호작용, 진단·성능 정보",
              "처리 시점 및 방법: 앱 실행과 광고 요청·표시 과정에서 네트워크를 통해 자동 전송",
              "보관 기간 및 장소: Google의 개인정보처리방침과 서비스 정책에 따르며 미국 등 Google이 서버를 운영하는 국가에서 처리될 수 있음",
            ],
          },
          { type: "paragraph", text: "Google 개인정보처리방침:" },
          {
            type: "link",
            label: "https://policies.google.com/privacy",
            href: "https://policies.google.com/privacy",
          },
          { type: "paragraph", text: "Google Mobile Ads 데이터 공개 안내:" },
          {
            type: "link",
            label: "https://developers.google.com/admob/ios/privacy/data-disclosure",
            href: "https://developers.google.com/admob/ios/privacy/data-disclosure",
          },
          { type: "subheading", text: "Apple Game Center" },
          {
            type: "list",
            items: [
              "제공자: Apple Inc.",
              "처리 목적: 플레이어 인증, 최고 점수 제출 및 리더보드 제공",
              "처리될 수 있는 정보: Game Center 플레이어 식별 정보, 표시 이름, 최고 점수 및 순위",
              "처리 시점 및 방법: 이용자가 Game Center에 로그인하거나 점수를 제출·조회할 때 네트워크를 통해 전송",
              "보관 기간 및 장소: Apple의 개인정보처리방침 및 이용자 계정 설정에 따르며 Apple이 서비스를 운영하는 국가에서 처리될 수 있음",
            ],
          },
          { type: "paragraph", text: "Apple 개인정보처리방침:" },
          {
            type: "link",
            label: "https://www.apple.com/legal/privacy/",
            href: "https://www.apple.com/legal/privacy/",
          },
          {
            type: "paragraph",
            text: "이용자는 Game Center 로그인을 사용하지 않을 수 있으며, 관련 지역에서 제공되는 개인정보 선택 화면을 통해 광고 관련 선택을 관리할 수 있습니다.",
          },
        ],
      },
      {
        title: "7. 개인정보의 보관 및 삭제",
        paragraphs: [],
        blocks: [
          {
            type: "list",
            items: [
              "게임 기록과 앱 설정은 이용자의 기기에 저장되며, 앱 데이터 초기화 또는 앱 삭제 시 삭제됩니다.",
              "Game Center 기록은 Apple 계정 및 Game Center 정책에 따라 관리됩니다.",
              "광고와 동의 관련 정보는 Google의 정책 및 이용자의 동의 설정에 따라 관리됩니다.",
              "문의 이메일은 문의 처리 후 최대 1년 동안 보관될 수 있습니다.",
            ],
          },
          {
            type: "paragraph",
            text: "기기 백업 기능의 사용 여부와 보관 방식은 이용자의 운영체제 및 iCloud 설정에 따라 달라질 수 있습니다.",
          },
        ],
      },
      {
        title: "8. 이용자의 선택권",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "이용자는 다음 방법으로 개인정보 관련 선택을 관리할 수 있습니다." },
          {
            type: "list",
            items: [
              "Game Center 로그인 사용 여부 선택",
              "앱에 개인정보 옵션 메뉴가 표시되는 경우 광고 관련 선택 변경",
              "앱 데이터 초기화",
              "앱 삭제",
              "이메일을 통한 개인정보 관련 문의",
            ],
          },
          {
            type: "paragraph",
            text: "외부 서비스에서 처리되는 정보의 열람·삭제·변경은 각 서비스 제공자의 계정 설정과 개인정보 보호 기능을 통해 관리할 수 있습니다.",
          },
        ],
      },
      {
        title: "9. 아동 및 일반 이용자 정책",
        paragraphs: [
          "오늘의 식판은 특정 연령의 아동을 주된 대상으로 설계된 앱이나 Apple Kids Category 앱이 아닙니다.",
          "앱은 회원가입이나 이용자의 이름·연락처를 직접 입력받는 기능을 제공하지 않습니다. 광고와 외부 서비스 이용은 적용되는 법령, 이용자의 지역 및 서비스 제공자의 정책에 따라 처리됩니다.",
        ],
      },
      {
        title: "10. 개인정보 보호",
        paragraphs: [
          "개발자는 이용자의 개인정보 보호를 위해 관련 법령을 준수하고 합리적인 보호 조치를 적용합니다.",
          "앱의 게임 진행 정보는 원칙적으로 이용자의 기기 내부에서 처리하며, 외부 서비스에는 해당 기능 제공에 필요한 범위의 정보만 전달합니다.",
        ],
      },
      {
        title: "11. 개인정보처리방침 변경",
        paragraphs: [
          "본 개인정보처리방침은 관련 법령, 앱 기능 또는 외부 서비스의 변경에 따라 수정될 수 있습니다.",
          "중요한 변경 사항이 있는 경우 앱 또는 차미웍스 웹사이트를 통해 안내합니다.",
        ],
      },
      {
        title: "12. 문의",
        paragraphs: [],
        blocks: [
          { type: "paragraph", text: "서비스명: 오늘의 식판(Today’s Tray)" },
          { type: "paragraph", text: "개발자: 차미웍스(Chamyworks)" },
          { type: "paragraph", text: "문의: help@chamyworks.com" },
          { type: "paragraph", text: "개인정보처리방침:" },
          {
            type: "link",
            label: "https://chamyworks.com/games/todays-tray/privacy",
            href: "https://chamyworks.com/games/todays-tray/privacy",
          },
        ],
      },
    ],
    contact: {
      name: "차미웍스(Chamyworks)",
      email: "help@chamyworks.com",
    },
  },
};
