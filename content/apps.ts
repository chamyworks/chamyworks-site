import { happyPickPolicyEn } from "@/content/happypick-policy-en";

export type PolicyBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "list";
      items: string[];
    };

export type PolicySection = {
  title: string;
  paragraphs: string[];
  listItems?: string[];
  blocks?: PolicyBlock[];
};

export type PrivacyPolicy = {
  title: string;
  titleEn?: string;
  updatedAt: string;
  updatedLabel?: string;
  description: string;
  intro: string[];
  sections: PolicySection[];
  contact: {
    name: string;
    email: string;
  };
};

export type ChamyworksApp = {
  slug: string;
  name: string;
  displayName: string;
  summary: string;
  icon: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  appStoreUrl: string;
  policy: PrivacyPolicy;
  policyEn?: PrivacyPolicy;
};

const allChamyworksApps: ChamyworksApp[] = [
  {
    slug: "happypick",
    name: "Happy Pick",
    displayName: "해피픽",
    summary: "작은 행복을 발견하고 모으는 앱",
    icon: {
      src: "/apps/happypick/icon.png",
      alt: "Happy Pick app icon",
      width: 1254,
      height: 1254,
    },
    appStoreUrl:
      "https://apps.apple.com/kr/app/%ED%95%B4%ED%94%BC%ED%94%BD/id6784588173?itscg=30200&itsct=apps_box_link&mttnsubad=6784588173",
    policy: {
      title: "해피픽 개인정보처리방침",
      titleEn: "Happy Pick Privacy Policy",
      updatedAt: "2026년 7월",
      updatedLabel: "최종 수정일",
      description:
        "해피픽은 회원가입이나 로그인 없이 사용할 수 있는 작은 행복 기록 앱으로, 대부분의 데이터는 이용자의 기기 내부에서만 저장 및 처리됩니다.",
      intro: [
        '차미웍스 (Chamyworks)(이하 "개발자")는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수합니다.',
        '해피픽(Happy Pick)(이하 "앱")은 회원가입이나 로그인 없이 사용할 수 있는 작은 행복 기록 앱으로, 대부분의 데이터는 이용자의 기기 내부에서만 저장 및 처리됩니다.',
        "본 개인정보처리방침은 해피픽에서 처리하는 정보와 이용 목적을 안내합니다.",
      ],
      sections: [
        {
          title: "1. 앱 내부에 저장되는 정보",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "해피픽은 서비스 제공을 위해 아래 정보를 이용자의 기기 내부에 저장할 수 있습니다.",
            },
            {
              type: "list",
              items: [
                "사용자가 작성한 행복 기록",
                "기록 날짜",
                "해시태그",
                "월별/연도별 기록 데이터",
                "앱 이용에 필요한 설정 정보",
                "백업 및 불러오기 기능에 필요한 데이터",
              ],
            },
            {
              type: "paragraph",
              text: "위 정보는 개발자의 서버가 아닌 이용자의 기기 내부에 저장됩니다.",
            },
          ],
        },
        {
          title: "2. 데이터 저장 방식",
          paragraphs: [
            "해피픽은 회원가입, 로그인, 서버 저장 기능을 제공하지 않습니다.",
            "사용자가 작성한 행복 기록과 관련 데이터는 이용자의 기기 내부에 저장됩니다.",
            "기기 백업 기능 사용 여부 및 백업 방식은 이용자의 운영체제 설정에 따라 달라질 수 있습니다.",
            "개발자는 이용자의 행복 기록 내용을 별도로 수집하거나 서버에 저장하지 않습니다.",
          ],
        },
        {
          title: "3. 백업 및 불러오기 기능",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "이용자가 백업 기능을 사용할 경우 백업 파일에는 다음과 같은 정보가 포함될 수 있습니다.",
            },
            {
              type: "list",
              items: [
                "행복 기록",
                "기록 날짜",
                "해시태그",
                "월별/연도별 기록 데이터",
                "앱 설정 정보",
              ],
            },
            {
              type: "paragraph",
              text: "백업 파일은 이용자가 직접 저장하거나 공유하는 경우에만 외부로 전달됩니다.",
            },
            {
              type: "paragraph",
              text: "이용자가 불러오기 기능을 사용하는 경우, 선택한 백업 파일의 데이터가 앱 내부에 저장될 수 있습니다.",
            },
          ],
        },
        {
          title: "4. 개인정보의 제3자 제공",
          paragraphs: [
            "개발자는 이용자의 개인정보를 제3자에게 판매하거나 제공하지 않습니다.",
            "행복 기록 및 기타 앱 데이터는 개발자의 서버로 전송되지 않습니다.",
            "다만 이용자가 직접 백업 파일을 외부 위치에 저장하거나 공유하는 경우에는 이용자가 선택한 서비스 또는 저장 위치로 데이터가 전달될 수 있습니다.",
          ],
        },
        {
          title: "5. 개인정보 보관 및 삭제",
          paragraphs: [
            "앱 내부 데이터는 이용자의 기기에 저장됩니다.",
            "이용자는 앱 내 기능을 통해 저장된 데이터를 삭제하거나 초기화할 수 있습니다.",
            "앱을 삭제하면 앱 내부에 저장된 데이터도 함께 삭제됩니다.",
            "단, 이용자가 직접 외부에 저장한 백업 파일은 자동으로 삭제되지 않으며, 이용자가 직접 삭제해야 합니다.",
          ],
        },
        {
          title: "6. 외부 서비스 이용",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "해피픽 iOS 1.2 및 Android 1.0 이상에서는 Pretendard와 MaruBuri 글꼴 파일을 앱에 포함하여 앱 내부에서 불러옵니다. 따라서 해당 버전에서는 글꼴 표시를 위해 외부 폰트 제공자에게 네트워크 접속 정보가 전송되지 않습니다.",
            },
            {
              type: "paragraph",
              text: "이전 iOS 버전에서는 jsDelivr(Pretendard)와 네이버 글꼴(MaruBuri)의 외부 폰트 리소스를 사용할 수 있습니다. 이 과정에서 IP 주소 등 일반적인 네트워크 접속 정보가 각 제공자의 정책에 따라 처리될 수 있으나, 사용자가 작성한 행복 기록, 태그, 설정 정보 등 앱 내부 데이터는 전송되지 않습니다.",
            },
            {
              type: "paragraph",
              text: "그 외 현재 해피픽은 다음 서비스를 사용하지 않습니다.",
            },
            {
              type: "list",
              items: [
                "회원가입 및 로그인",
                "클라우드 저장",
                "광고 SDK",
                "사용자 행동 분석(Analytics)",
                "크래시 수집(Crash Reporting)",
                "AI 기반 처리",
                "이용자 기록의 서버 업로드",
              ],
            },
            {
              type: "paragraph",
              text: "향후 이러한 기능이 추가되는 경우 개인정보처리방침을 개정하여 안내드립니다.",
            },
          ],
        },
        {
          title: "7. 이메일 문의",
          paragraphs: [
            "해피픽 iOS 1.2 및 Android 1.0 이상에서 제공되는 문의하기 기능은 이용자가 선택한 외부 메일 앱을 엽니다.",
            "사용자가 이메일을 전송하는 경우, 발신자의 이메일 주소와 표시 이름, 문의 내용, 앱 버전 및 빌드 번호, 운영체제 종류와 버전, 앱 언어 정보가 문의 확인·답변 및 오류 분석을 위해 개발자에게 전달될 수 있습니다.",
            "행복 기록, 해시태그, 백업 파일, 앱에 설정한 사용자 이름 및 기기 식별정보는 문의 이메일에 자동으로 첨부되지 않습니다.",
            "사용자는 이메일을 전송하기 전에 자동 입력된 정보를 확인하거나 수정·삭제할 수 있으며, 문의하기 기능을 이용하지 않아도 앱의 다른 기능을 사용할 수 있습니다.",
            "문의 관련 정보는 문의 처리 및 관련 이력 확인에 필요한 기간 동안 보관하며, 문의 접수일로부터 최대 1년 이내에 삭제합니다. 단, 관련 법령에 따라 보관이 필요한 경우에는 해당 기간 동안 보관할 수 있습니다.",
          ],
        },
        {
          title: "8. 개인정보 보호",
          paragraphs: [
            "개발자는 이용자의 개인정보 보호를 위해 관련 법령을 준수하며, 개인정보 보호를 위한 합리적인 보안 조치를 지속적으로 적용합니다.",
          ],
        },
        {
          title: "9. 개인정보처리방침 변경",
          paragraphs: [
            "본 개인정보처리방침은 관련 법령이나 서비스 변경에 따라 수정될 수 있습니다.",
            "중요한 변경 사항이 있는 경우 앱 또는 홈페이지를 통해 안내합니다.",
          ],
        },
        {
          title: "10. 문의",
          paragraphs: [
            "서비스명: 해피픽 (Happy Pick)",
            "개발자: 차미웍스 (Chamyworks)",
            "문의: help@chamyworks.com",
          ],
        },
      ],
      contact: {
        name: "차미웍스 (Chamyworks)",
        email: "help@chamyworks.com",
      },
    },
    policyEn: happyPickPolicyEn,
  },
  {
    slug: "daengpick",
    name: "DaengPick",
    displayName: "댕픽",
    summary: "강아지 사진을 따뜻하게 꾸미는 앱",
    icon: {
      src: "/icon.png",
      alt: "DaengPick app icon",
      width: 1254,
      height: 1254,
    },
    appStoreUrl: "",
    policy: {
      title: "댕픽 개인정보처리방침",
      titleEn: "DaengPick Privacy Policy",
      updatedAt: "2026년 7월",
      updatedLabel: "최종 수정일",
      description:
        "댕픽은 회원가입이나 로그인 없이 사용할 수 있는 강아지 사진 꾸미기 앱으로, 대부분의 데이터는 이용자의 기기 내부에서만 저장 및 처리됩니다.",
      intro: [
        '차미웍스 (Chamyworks)(이하 "개발자")는 이용자의 개인정보를 중요하게 생각하며, 관련 법령을 준수합니다.',
        '댕픽(DaengPick)(이하 "앱")은 회원가입이나 로그인 없이 사용할 수 있는 강아지 사진 꾸미기 앱으로, 대부분의 데이터는 이용자의 기기 내부에서만 저장 및 처리됩니다.',
        "본 개인정보처리방침은 댕픽에서 처리하는 정보와 이용 목적을 안내합니다.",
      ],
      sections: [
        {
          title: "1. 앱 내부에 저장되는 정보",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "댕픽은 서비스 제공을 위해 아래 정보를 이용자의 기기 내부에 저장할 수 있습니다.",
            },
            {
              type: "list",
              items: [
                "강아지 이름",
                "강아지 생일",
                "강아지 대표 이미지",
                "사용자가 촬영하거나 선택한 사진으로 만든 완성 이미지",
                "사용자가 입력한 문구",
                "선택한 프레임 및 꾸미기 정보",
                "생성일 등 앱 이용에 필요한 정보",
              ],
            },
            {
              type: "paragraph",
              text: "위 정보는 개발자의 서버가 아닌 이용자의 기기 내부에 저장됩니다.",
            },
          ],
        },
        {
          title: "2. 카메라 권한",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "댕픽은 사진 촬영 기능을 제공하기 위해 카메라 권한을 사용할 수 있습니다.",
            },
            {
              type: "paragraph",
              text: "사용 목적",
            },
            {
              type: "list",
              items: ["사진 촬영", "카메라 미리보기 제공"],
            },
            {
              type: "paragraph",
              text: "카메라 권한은 해당 기능을 처음 사용할 때만 요청됩니다.",
            },
          ],
        },
        {
          title: "3. 사진 접근 권한",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "댕픽은 다음 기능을 위해 사진 라이브러리 접근 권한을 사용할 수 있습니다.",
            },
            {
              type: "paragraph",
              text: "사진 읽기",
            },
            {
              type: "list",
              items: ["사진 불러오기", "강아지 대표 이미지 선택"],
            },
            {
              type: "paragraph",
              text: "사진 저장",
            },
            {
              type: "list",
              items: ["편집한 이미지를 사진 앱에 저장"],
            },
            {
              type: "paragraph",
              text: "권한은 필요한 기능을 사용할 때만 요청됩니다.",
            },
          ],
        },
        {
          title: "4. 사진 처리 방식",
          paragraphs: [
            "사용자가 촬영하거나 선택한 사진은 이용자의 기기에서만 편집됩니다.",
            "사진이나 편집 결과는 개발자의 서버로 업로드되지 않습니다.",
            "완성된 댕픽 이미지는 앱에서 새롭게 생성되는 PNG 이미지이며, 원본 사진의 위치정보(GPS), 촬영기기 정보(EXIF) 등을 별도로 저장하거나 서버로 전송하지 않습니다.",
          ],
        },
        {
          title: "5. My 보관함",
          paragraphs: [
            "완성된 댕픽 이미지와 강아지 프로필 정보는 앱 내부 저장공간(My)에 저장됩니다.",
            "이 정보는 이용자의 기기 내부에만 저장되며, 개발자가 별도로 수집하거나 서버에 저장하지 않습니다.",
          ],
        },
        {
          title: "6. 공유 기능",
          paragraphs: [
            "이용자가 공유하기 기능을 실행한 경우에만 iOS 공유 기능을 통해 선택한 앱 또는 서비스로 이미지가 전달됩니다.",
            "공유 이후의 개인정보 처리 및 이용은 해당 서비스의 개인정보처리방침을 따릅니다.",
            "개발자는 공유된 내용을 별도로 수집하거나 저장하지 않습니다.",
          ],
        },
        {
          title: "7. 백업 기능",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "이용자가 백업 기능을 사용할 경우 백업 파일에는 다음과 같은 정보가 포함될 수 있습니다.",
            },
            {
              type: "list",
              items: [
                "강아지 이름",
                "강아지 생일",
                "강아지 대표 이미지",
                "완성된 댕픽 이미지",
                "문구",
                "프레임 및 꾸미기 정보",
                "생성 시각 등 앱 데이터",
              ],
            },
            {
              type: "paragraph",
              text: "백업 파일은 이용자가 직접 저장하거나 공유하는 경우에만 외부로 전달됩니다.",
            },
          ],
        },
        {
          title: "8. 개인정보의 제3자 제공",
          paragraphs: [
            "개발자는 이용자의 개인정보를 제3자에게 판매하거나 제공하지 않습니다.",
            "사진, 강아지 정보 및 기타 앱 데이터는 개발자의 서버로 전송되지 않습니다.",
            "다만 이용자가 직접 공유 기능이나 백업 기능을 사용하는 경우에는 이용자가 선택한 서비스 또는 저장 위치로 데이터가 전달될 수 있습니다.",
          ],
        },
        {
          title: "9. 개인정보 보관 및 삭제",
          paragraphs: [
            "앱 내부 데이터는 이용자의 기기에 저장됩니다.",
            "이용자는 앱 내 기능을 통해 저장된 데이터를 삭제하거나 초기화할 수 있습니다.",
            "앱을 삭제하면 앱 내부에 저장된 데이터도 함께 삭제됩니다.",
            "단, 사진 앱에 저장한 이미지는 자동으로 삭제되지 않으며, 이용자가 직접 삭제해야 합니다.",
          ],
        },
        {
          title: "10. 외부 서비스 이용",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "현재 댕픽은 다음 서비스를 사용하지 않습니다.",
            },
            {
              type: "list",
              items: [
                "회원가입 및 로그인",
                "클라우드 저장",
                "광고 SDK",
                "사용자 행동 분석(Analytics)",
                "크래시 수집(Crash Reporting)",
                "AI 기반 이미지 처리",
                "이용자 사진의 서버 업로드",
              ],
            },
            {
              type: "paragraph",
              text: "향후 이러한 기능이 추가되는 경우 개인정보처리방침을 개정하여 안내드립니다.",
            },
          ],
        },
        {
          title: "11. 개인정보 보호",
          paragraphs: [
            "개발자는 이용자의 개인정보 보호를 위해 관련 법령을 준수하며, 개인정보 보호를 위한 합리적인 보안 조치를 지속적으로 적용합니다.",
          ],
        },
        {
          title: "12. 개인정보처리방침 변경",
          paragraphs: [
            "본 개인정보처리방침은 관련 법령이나 서비스 변경에 따라 수정될 수 있습니다.",
            "중요한 변경 사항이 있는 경우 앱 또는 홈페이지를 통해 안내합니다.",
          ],
        },
        {
          title: "13. 문의",
          paragraphs: [
            "서비스명: 댕픽 (DaengPick)",
            "개발자: 차미웍스 (Chamyworks)",
            "문의: help@chamyworks.com",
            "개인정보처리방침 페이지:",
            "https://chamyworks.com/apps/daengpick/privacy",
          ],
        },
      ],
      contact: {
        name: "차미웍스 (Chamyworks)",
        email: "help@chamyworks.com",
      },
    },
  },
];

export const chamyworksApps: ChamyworksApp[] = allChamyworksApps.filter(
  (app) => app.slug !== "daengpick",
);

export const chamyworksPrivacyApps: ChamyworksApp[] = allChamyworksApps;

export function getChamyworksApp(slug: string) {
  return chamyworksApps.find((app) => app.slug === slug);
}

export function getChamyworksPrivacyApp(slug: string) {
  return chamyworksPrivacyApps.find((app) => app.slug === slug);
}
