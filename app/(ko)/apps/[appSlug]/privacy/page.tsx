import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PrivacyPolicyPage } from "@/components/privacy-policy-page";
import { chamyworksApps, getChamyworksApp } from "@/content/apps";

type PrivacyPageProps = {
  params: Promise<{
    appSlug: string;
  }>;
};

export const dynamic = "force-dynamic";

export function generateStaticParams() {
  return chamyworksApps.map((app) => ({
    appSlug: app.slug,
  }));
}

export async function generateMetadata({
  params,
}: PrivacyPageProps): Promise<Metadata> {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    return {
      title: "개인정보처리방침 | Chamyworks",
    };
  }

  const policyTitle = app.policy.titleEn
    ? `${app.policy.title} | ${app.policy.titleEn}`
    : app.policy.title;
  const title = `${policyTitle} | Chamyworks`;

  return {
    title,
    description: app.policy.description,
    alternates: {
      canonical: `/apps/${app.slug}/privacy`,
      languages:
        app.slug === "happypick"
          ? {
              ko: `/apps/${app.slug}/privacy`,
              en: `/apps/${app.slug}/privacy/en`,
            }
          : undefined,
    },
    openGraph: {
      title,
      description: app.policy.description,
      type: "article",
      url: `/apps/${app.slug}/privacy`,
    },
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { appSlug } = await params;
  const app = getChamyworksApp(appSlug);

  if (!app) {
    notFound();
  }

  return (
    <PrivacyPolicyPage app={app} language="ko" policy={app.policy} />
  );
}
