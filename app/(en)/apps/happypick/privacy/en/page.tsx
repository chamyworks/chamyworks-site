import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { getChamyworksApp } from "@/content/apps";

const canonicalPath = "/apps/happypick/privacy/en";

export const metadata: Metadata = {
  title: "Happy Pick Privacy Policy | Chamyworks",
  description:
    "Happy Pick is a journal app for recording small moments of happiness that can be used without creating an account or signing in. Most data is stored and processed only on the user’s device.",
  alternates: {
    canonical: canonicalPath,
    languages: {
      ko: "/apps/happypick/privacy",
      en: canonicalPath,
    },
  },
  openGraph: {
    title: "Happy Pick Privacy Policy | Chamyworks",
    description:
      "Happy Pick is a journal app for recording small moments of happiness that can be used without creating an account or signing in. Most data is stored and processed only on the user’s device.",
    type: "article",
    url: canonicalPath,
  },
};

export default function HappyPickEnglishPrivacyPage() {
  const app = getChamyworksApp("happypick");

  if (!app?.policyEn) {
    notFound();
  }

  return (
    <PrivacyPolicyPage app={app} language="en" policy={app.policyEn} />
  );
}
