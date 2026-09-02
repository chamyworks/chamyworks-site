import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { todaysTray } from "@/content/todays-tray";

const canonicalPath = "/games/todays-tray/privacy";
const title = "오늘의 식판 개인정보처리방침 | Chamyworks";

export const metadata: Metadata = {
  title,
  description: todaysTray.policy.description,
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title,
    description: todaysTray.policy.description,
    type: "article",
    url: canonicalPath,
    images: [
      {
        url: todaysTray.icon.src,
        width: todaysTray.icon.width,
        height: todaysTray.icon.height,
        alt: todaysTray.icon.alt,
      },
    ],
  },
};

export default function TodaysTrayPrivacyPage() {
  return (
    <PrivacyPolicyPage
      app={todaysTray}
      language="ko"
      policy={todaysTray.policy}
      basePath="/games/todays-tray"
      collection={null}
      showAppsMenu={false}
    />
  );
}
