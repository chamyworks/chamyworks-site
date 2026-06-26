export type PolicySection = {
  title: string;
  paragraphs: string[];
};

export type ChamyworksApp = {
  slug: string;
  name: string;
  policy: {
    title: string;
    updatedAt: string;
    description: string;
    intro: string[];
    sections: PolicySection[];
    contact: {
      name: string;
      email: string;
    };
  };
};

export const chamyworksApps: ChamyworksApp[] = [
  {
    slug: "happy-pick",
    name: "Happy Pick",
    policy: {
      title: "Happy Pick 개인정보처리방침",
      updatedAt: "2026년 6월 26일",
      description:
        "Happy Pick은 사용자의 개인정보를 서버에 수집하거나 저장하지 않는 로컬 저장 기반 앱입니다.",
      intro: [
        'Happy Pick(이하 "앱")은 사용자의 개인정보를 소중하게 생각하며, 개인정보 보호를 위해 최선을 다하고 있습니다.',
        "본 앱은 사용자의 개인정보를 서버에 수집하거나 저장하지 않는 로컬 저장 기반 앱입니다.",
      ],
      sections: [
        {
          title: "1. 개인정보 수집",
          paragraphs: [
            "Happy Pick은 회원가입이나 로그인 기능을 제공하지 않으며, 이름, 이메일 주소, 전화번호 등의 개인정보를 수집하지 않습니다.",
          ],
        },
        {
          title: "2. 사용자 데이터",
          paragraphs: [
            "사용자가 작성한 행복 기록, 태그, 사용자 이름 및 설정 정보는 사용자의 기기에만 저장됩니다.",
            "차미웍스는 이러한 데이터를 수집하거나 서버로 전송하지 않으며, 해당 데이터에 접근할 수 없습니다.",
          ],
        },
        {
          title: "3. 백업 및 불러오기",
          paragraphs: [
            "앱은 사용자가 직접 데이터를 백업하거나 불러올 수 있는 기능을 제공합니다.",
            "백업 파일에는 사용자가 작성한 행복 기록, 태그, 사용자 이름 및 설정 정보가 포함될 수 있습니다.",
            "백업 파일은 사용자가 직접 저장하거나 공유하는 파일이며, 차미웍스는 해당 파일을 수집하거나 보관하지 않습니다.",
            "사용자는 백업 파일을 안전하게 관리할 책임이 있습니다.",
          ],
        },
        {
          title: "4. 외부 리소스",
          paragraphs: [
            "앱 화면 표시를 위해 외부 폰트 리소스를 불러올 수 있습니다.",
            "이 과정은 폰트 표시를 위한 요청이며, 사용자가 작성한 기록이나 앱 내 데이터는 외부로 전송되지 않습니다.",
          ],
        },
        {
          title: "5. 제3자 제공",
          paragraphs: [
            "Happy Pick은 사용자의 개인정보나 사용자 데이터를 제3자에게 제공하지 않습니다.",
          ],
        },
        {
          title: "6. 광고 및 분석",
          paragraphs: [
            "Happy Pick은 광고를 제공하지 않으며, 사용자 행동 분석이나 추적을 위한 분석 도구를 사용하지 않습니다.",
          ],
        },
        {
          title: "7. 이용 권한",
          paragraphs: [
            "Happy Pick은 카메라, 위치, 마이크, 연락처 등 민감한 권한을 사용하지 않습니다.",
            "백업 및 불러오기 기능을 사용하는 경우에만 사용자가 직접 파일을 선택할 수 있습니다.",
          ],
        },
        {
          title: "8. 데이터 삭제",
          paragraphs: [
            "앱을 삭제하면 기기에 저장된 데이터가 함께 삭제될 수 있습니다.",
            "데이터를 보존하려면 삭제 전에 백업 기능을 이용하시기 바랍니다.",
          ],
        },
        {
          title: "9. 개인정보처리방침 변경",
          paragraphs: [
            "본 개인정보처리방침은 서비스 변경 또는 관련 법령에 따라 변경될 수 있으며, 변경 시 본 페이지를 통해 최신 내용을 제공합니다.",
          ],
        },
        {
          title: "10. 문의",
          paragraphs: ["문의사항은 아래 이메일로 연락해 주세요."],
        },
      ],
      contact: {
        name: "Chamyworks",
        email: "help@chamyworks.com",
      },
    },
  },
];

export function getChamyworksApp(slug: string) {
  return chamyworksApps.find((app) => app.slug === slug);
}
