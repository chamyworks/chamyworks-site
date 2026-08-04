import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { getChamyworksPrivacyApp } from "@/content/apps";

const canonicalPath = "/apps/daengpick/privacy/en";
const description =
  "Daeng Pick can be used without creating an account or signing in. Photo editing and most data processing take place locally on your device.";

export const metadata: Metadata = {
  title: "Daeng Pick Privacy Policy | Chamyworks",
  description,
  alternates: {
    canonical: canonicalPath,
    languages: {
      ko: "/apps/daengpick/privacy",
      en: canonicalPath,
      "x-default": "/apps/daengpick/privacy",
    },
  },
  openGraph: {
    title: "Daeng Pick Privacy Policy | Chamyworks",
    description,
    type: "article",
    url: canonicalPath,
  },
};

export default function DaengPickEnglishPrivacyPage() {
  const app = getChamyworksPrivacyApp("daengpick");

  if (!app?.policyEn) {
    notFound();
  }

  return <PrivacyPolicyPage app={app} language="en" policy={app.policyEn} />;
}
