import { happyPickPolicyEn } from "@/content/happypick-policy-en";
import { daengPickPolicyEn } from "@/content/daengpick-policy-en";

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
  isPublic: boolean;
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
    isPublic: true,
    policy: {
      title: "해피픽 개인정보처리방침",
      titleEn: "Happy Pick Privacy Policy",
      updatedAt: "2026년 8월 13일",
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
            "사용자가 이메일을 전송하는 경우, 발신자의 이메일 주소와 표시 이름, 문의 내용, 앱 버전 및 빌드 번호, 운영체제 종류와 버전, 앱 언어 정보가 문의 확인·답변 및 오류 분석을 위해 개발자에게 전달될 수 있습니다. Android에서는 기기 제조사와 모델명이 함께 포함될 수 있습니다.",
            "행복 기록, 해시태그, 백업 파일, 앱에 설정한 사용자 이름, 광고 식별자 및 기기 고유 식별정보는 문의 이메일에 자동으로 첨부되지 않습니다.",
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
            "2026년 8월: Android 이메일 문의에 기기 제조사 및 모델명 정보가 포함될 수 있음을 반영했습니다.",
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
    name: "Daeng Pick",
    displayName: "댕픽",
    summary: "강아지 사진을 따뜻하게 꾸미는 앱",
    icon: {
      src: "/icon.png",
      alt: "Daeng Pick app icon",
      width: 1254,
      height: 1254,
    },
    appStoreUrl: "",
    isPublic: false,
    policy: {
      title: "댕픽 개인정보처리방침",
      titleEn: "Daeng Pick Privacy Policy",
      updatedAt: "2026년 8월 4일",
      updatedLabel: "최종 수정일",
      description:
        "댕픽은 회원가입이나 로그인 없이 사용할 수 있으며, 사진 편집과 대부분의 데이터 처리는 이용자의 기기에서 이루어집니다.",
      intro: [
        "차미웍스(Chamyworks, 이하 \"개발자\")는 이용자의 개인정보를 중요하게 생각하며 관련 법령을 준수합니다.",
        "댕픽(Daeng Pick, 이하 \"앱\")은 회원가입이나 로그인 없이 사용할 수 있는 강아지 사진 촬영 및 꾸미기 앱입니다. 사진 편집과 대부분의 데이터 처리는 이용자의 기기에서 이루어집니다.",
        "본 개인정보처리방침은 앱이 처리하는 정보와 그 이용 목적을 안내합니다.",
      ],
      sections: [
        {
          title: "1. 기기 내부에서 처리되는 정보",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "앱은 기능 제공을 위해 다음 정보를 이용자의 기기에서 처리할 수 있습니다.",
            },
            {
              type: "list",
              items: [
                "이용자가 직접 촬영한 사진",
                "이용자가 사진 앱에서 선택한 사진",
                "이용자가 입력한 문구",
                "선택한 프레임, 스티커, 낙서 및 보정 정보",
                "최초 이용 안내 확인 여부",
                "유도음 설정",
                "마지막으로 선택한 프레임",
                "일부 기능 안내의 확인 여부",
              ],
            },
            {
              type: "paragraph",
              text: "사진과 편집 정보는 편집 과정에서 기기 내부에서 처리되며 개발자의 서버로 전송되지 않습니다.",
            },
            {
              type: "paragraph",
              text: "앱은 완성된 사진을 별도의 앱 내부 보관함에 지속적으로 저장하지 않습니다.",
            },
          ],
        },
        {
          title: "2. 카메라 권한",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "앱은 다음 기능을 제공하기 위해 카메라 접근 권한을 요청할 수 있습니다.",
            },
            {
              type: "list",
              items: ["카메라 미리보기 제공", "사진 촬영", "연속 촬영"],
            },
            {
              type: "paragraph",
              text: "카메라 권한은 촬영 기능을 사용하기 위해 필요한 시점에 요청됩니다. 이용자는 기기 설정에서 언제든지 권한을 변경할 수 있습니다.",
            },
          ],
        },
        {
          title: "3. 사진 접근 권한",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "앱은 다음 기능을 위해 사진 접근 권한을 요청할 수 있습니다.",
            },
            {
              type: "paragraph",
              text: "사진 불러오기:",
            },
            {
              type: "list",
              items: ["이용자가 선택한 기존 사진을 앱으로 불러오기"],
            },
            {
              type: "paragraph",
              text: "사진 저장:",
            },
            {
              type: "list",
              items: ["완성된 사진을 사진 앱에 저장하기"],
            },
            {
              type: "paragraph",
              text: "앱은 이용자가 선택한 사진을 편집에 사용하며, 사진 보관함 전체를 개발자의 서버로 전송하거나 별도로 수집하지 않습니다.",
            },
            {
              type: "paragraph",
              text: "이용자는 기기 설정에서 사진 접근 권한을 언제든지 변경할 수 있습니다.",
            },
          ],
        },
        {
          title: "4. 사진 처리 및 저장 방식",
          paragraphs: [
            "이용자가 촬영하거나 선택한 사진은 기기에서 편집됩니다.",
            "완성된 사진은 앱에서 새롭게 생성되는 JPEG 이미지이며, 이용자의 선택에 따라 사진 앱에 저장됩니다.",
            "앱은 원본 사진의 위치정보(GPS)나 촬영기기 정보(EXIF)를 완성 이미지에 의도적으로 복사하거나 개발자의 서버로 전송하지 않습니다.",
            "연속 촬영, 이미지 편집 및 공유 과정에서 기기 캐시에 임시 이미지가 생성될 수 있습니다. 임시 이미지는 해당 작업이 끝난 후 삭제되며, 작업이 정상적으로 종료되지 않은 경우 다음 앱 실행 시 정리될 수 있습니다.",
            "사진 앱에 저장된 이미지는 앱을 삭제해도 자동으로 삭제되지 않습니다.",
          ],
        },
        {
          title: "5. 공유 기능",
          paragraphs: [
            "이용자가 공유하기 기능을 직접 실행한 경우에만 iOS 공유 기능을 통해 선택한 앱 또는 서비스로 이미지가 전달됩니다.",
            "공유 이후의 정보 처리는 이용자가 선택한 서비스의 개인정보처리방침을 따릅니다.",
            "개발자는 이용자가 공유한 이미지나 공유 대상을 별도로 수집하거나 저장하지 않습니다.",
          ],
        },
        {
          title: "6. 문의하기",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "이용자가 문의하기 기능을 통해 이메일을 보내는 경우 다음 정보가 개발자에게 전달될 수 있습니다.",
            },
            {
              type: "list",
              items: [
                "발신 이메일 주소",
                "문의 제목 및 내용",
                "이용자가 직접 첨부한 파일",
                "앱 버전 및 빌드 번호",
                "운영체제 종류와 버전",
                "앱 사용 언어",
              ],
            },
            {
              type: "paragraph",
              text: "위 정보는 문의 확인, 답변 및 문제 해결을 위해서만 사용합니다.",
            },
            {
              type: "paragraph",
              text: "문의 이메일의 전송과 보관에는 이용자가 사용하는 이메일 서비스의 개인정보처리방침이 적용될 수 있습니다.",
            },
            {
              type: "paragraph",
              text: "문의 정보의 확인 또는 삭제가 필요한 경우 help@chamyworks.com으로 요청할 수 있습니다.",
            },
          ],
        },
        {
          title: "7. 외부 서비스 및 제3자 제공",
          paragraphs: [],
          blocks: [
            {
              type: "paragraph",
              text: "현재 앱은 다음 기능을 사용하지 않습니다.",
            },
            {
              type: "list",
              items: [
                "회원가입 및 로그인",
                "개발자 서버 또는 클라우드에 사진 저장",
                "광고 SDK",
                "사용자 행동 분석",
                "크래시 수집 서비스",
                "AI 서버 기반 이미지 처리",
                "이용자 사진의 자동 서버 업로드",
              ],
            },
            {
              type: "paragraph",
              text: "개발자는 이용자의 사진이나 앱 이용 정보를 판매하거나 제3자에게 임의로 제공하지 않습니다.",
            },
            {
              type: "paragraph",
              text: "다만 이용자가 직접 공유 기능이나 문의하기 기능을 사용하는 경우에는 이용자가 선택한 앱, 서비스 또는 이메일 제공업체를 통해 정보가 전달될 수 있습니다.",
            },
          ],
        },
        {
          title: "8. 정보의 보관 및 삭제",
          paragraphs: [
            "앱 설정 정보는 이용자의 기기에 저장됩니다.",
            "앱을 삭제하면 앱 전용 저장공간에 보관된 설정 정보와 임시 데이터도 함께 삭제됩니다.",
            "단, 사진 앱에 저장된 완성 이미지는 앱 삭제와 관계없이 유지되며 이용자가 사진 앱에서 직접 삭제해야 합니다.",
            "문의 과정에서 개발자에게 전달된 정보의 삭제를 원하는 경우 help@chamyworks.com으로 요청할 수 있습니다.",
          ],
        },
        {
          title: "9. 개인정보 보호",
          paragraphs: [
            "개발자는 이용자의 개인정보를 보호하기 위해 관련 법령을 준수하고 합리적인 보호조치를 적용합니다.",
            "앱의 사진 편집 기능은 기기 내부에서 동작하며 이용자의 사진을 개발자의 서버로 전송하지 않습니다.",
          ],
        },
        {
          title: "10. 개인정보처리방침의 변경",
          paragraphs: [
            "본 개인정보처리방침은 관련 법령 또는 앱 기능의 변경에 따라 수정될 수 있습니다.",
            "중요한 변경 사항이 있는 경우 앱 또는 홈페이지를 통해 안내합니다.",
          ],
        },
        {
          title: "11. 문의",
          paragraphs: [
            "서비스명: 댕픽(Daeng Pick)",
            "개발자: 차미웍스(Chamyworks)",
            "이메일: help@chamyworks.com",
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
    policyEn: daengPickPolicyEn,
  },
];

export const chamyworksApps: ChamyworksApp[] = allChamyworksApps.filter(
  (app) => app.isPublic,
);

export const chamyworksPrivacyApps: ChamyworksApp[] = allChamyworksApps;

export function getChamyworksApp(slug: string) {
  return chamyworksApps.find((app) => app.slug === slug);
}

export function getChamyworksPrivacyApp(slug: string) {
  return chamyworksPrivacyApps.find((app) => app.slug === slug);
}
